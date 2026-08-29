import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

const forbiddenBrand = /naba[\s_-]*den/i;
const repositoryRoot = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the rebranded public pages", async () => {
  for (const pathname of [
    "/",
    "/san-pham",
    "/tin-tuc",
    "/vi-sao-mang-cau-ba-den-doi-khi-co-sau",
  ]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    assert.match(html, /Mãng Cầu Bà Đen/i, pathname);
    assert.doesNotMatch(html, forbiddenBrand, pathname);
  }
});

test("legacy branded image assets are absent", async () => {
  const removedAssets = [
    "public/banner-mang-cau-ba-den.png",
    "public/can-trong-luong-mang-cau-tay-ninh.jpg",
    "public/dong-thung-carton-mang-cau-xop.jpg",
    "public/mascot-speaking.jpg",
    "public/thuc-te-dong-goi-nhieu-thung.jpg",
    "public/thuc-te-vuon-mang-cau.jpg",
    "public/trai-mang-cau-chin-gia-loai-1.jpg",
    "public/vi-sao-mang-cau-ba-den-co-sau.jpg",
  ];

  for (const asset of removedAssets) {
    await assert.rejects(access(new URL(asset, repositoryRoot)), undefined, asset);
  }

  for (const asset of [
    "public/san-pham-hop-qua-3-trai.jpg",
    "public/san-pham-thung-5kg.jpg",
    "public/san-pham-thung-15kg.jpg",
    "public/thuc-te-dong-goi.jpg",
    "public/thuc-te-mang-cau-tuoi.jpg",
    "public/thuc-te-phan-loai.jpg",
  ]) {
    await access(new URL(asset, repositoryRoot));
  }
});

test("purchase pages expose indexable product intent and honest product data", async () => {
  for (const pathname of [
    "/san-pham",
    "/san-pham/hop-mang-cau-ba-den-3-trai-vip",
    "/san-pham/thung-mang-cau-ba-den-5kg",
    "/san-pham/thung-mang-cau-ba-den-15kg",
  ]) {
    const response = await render(pathname);
    const html = await response.text();

    assert.equal(response.status, 200, pathname);
    assert.match(html, /<link[^>]+rel="canonical"/i, pathname);
    assert.match(html, /"@type":"Product"/i, pathname);
    assert.match(html, /"priceCurrency":"VND"/i, pathname);
    assert.match(html, /na Bà Đen/i, pathname);
    assert.doesNotMatch(html, /"@type":"AggregateRating"/i, pathname);
    assert.doesNotMatch(html, /"@type":"Review"/i, pathname);
  }
});
