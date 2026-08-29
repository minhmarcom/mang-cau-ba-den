import os
import shutil
import subprocess

src_base = "/Users/minhmarcom/Desktop/mãng cầu bà đen"
targets = [
    "/Users/minhmarcom/Desktop/NABADEN",
    "/Users/minhmarcom/Desktop/app-nabaden-vn"
]

items_to_copy = [
    # (src_rel, dst_rel, is_dir)
    ("app/tin-tuc/cac-dip-le-lon-cung-trong-nam-y-nghia-mang-cau-ba-den", "app/tin-tuc/cac-dip-le-lon-cung-trong-nam-y-nghia-mang-cau-ba-den", True),
    ("app/cac-dip-le-lon-cung-trong-nam-y-nghia-mang-cau-ba-den", "app/cac-dip-le-lon-cung-trong-nam-y-nghia-mang-cau-ba-den", True),
    ("app/tin-tuc/mang-cau-va-qua-na-co-phai-la-mot", "app/tin-tuc/mang-cau-va-qua-na-co-phai-la-mot", True),
    ("app/mang-cau-va-qua-na-co-phai-la-mot", "app/mang-cau-va-qua-na-co-phai-la-mot", True),
    ("app/tin-tuc/mang-cau-bao-lau-thi-chin", "app/tin-tuc/mang-cau-bao-lau-thi-chin", True),
    ("app/mang-cau-bao-lau-thi-chin", "app/mang-cau-bao-lau-thi-chin", True),
    ("app/data/articles.ts", "app/data/articles.ts", False),
    ("app/sitemap.ts", "app/sitemap.ts", False),
    ("public/cung-le-trai-cay-mang-cau-ba-den.jpg", "public/cung-le-trai-cay-mang-cau-ba-den.jpg", False),
    ("public/le-phat-ram-thang-gieng-nui-ba-den.jpg", "public/le-phat-ram-thang-gieng-nui-ba-den.jpg", False),
    ("public/mam-trai-cay-cung-le-tat-nien.jpg", "public/mam-trai-cay-cung-le-tat-nien.jpg", False),
    ("public/nghe-thuat-ket-trai-cay-mang-cau-ba-den.jpg", "public/nghe-thuat-ket-trai-cay-mang-cau-ba-den.jpg", False),
    ("public/thung-mang-cau-xop-la-tuoi.jpg", "public/thung-mang-cau-xop-la-tuoi.jpg", False),
    ("public/dong-mang-cau-xop-tay-ninh.jpg", "public/dong-mang-cau-xop-tay-ninh.jpg", False),
    ("public/vuon-mang-cau-nui-ba-den-troi-xanh.jpg", "public/vuon-mang-cau-nui-ba-den-troi-xanh.jpg", False),
    ("public/mang-cau-ba-den-chin-vang-bo-xop.jpg", "public/mang-cau-ba-den-chin-vang-bo-xop.jpg", False),
    ("public/thit-mang-cau-chin-mui-trang.jpg", "public/thit-mang-cau-chin-mui-trang.jpg", False),
    ("public/sitemap-tin-tuc.xml", "public/sitemap-tin-tuc.xml", False),
    ("public/sitemap.xml", "public/sitemap.xml", False),
    ("public/llms.txt", "public/llms.txt", False),
]

commit_msg = "feat: thêm bài viết Mãng cầu và quả na có phải là một & bài viết Văn hóa cúng lễ"

for target in targets:
    if not os.path.exists(target):
        print(f"[SKIP] Target directory not found: {target}")
        continue
    
    print(f"\n--- Syncing to {target} ---")
    for src_rel, dst_rel, is_dir in items_to_copy:
        s = os.path.join(src_base, src_rel)
        d = os.path.join(target, dst_rel)
        if is_dir:
            if os.path.exists(d):
                shutil.rmtree(d)
            shutil.copytree(s, d)
            print(f"Copied DIR: {src_rel}")
        else:
            os.makedirs(os.path.dirname(d), exist_ok=True)
            shutil.copy2(s, d)
            print(f"Copied FILE: {src_rel}")
            
    # Git commit and push
    git_dir = os.path.join(target, ".git")
    if os.path.exists(git_dir):
        print(f"Git repo detected at {target}. Staging changes...")
        subprocess.run(["git", "-C", target, "add", "."], check=True)
        status = subprocess.run(["git", "-C", target, "status", "--porcelain"], capture_output=True, text=True)
        if status.stdout.strip():
            print(f"Committing changes in {target}...")
            subprocess.run(["git", "-C", target, "commit", "-m", commit_msg], check=True)
            print(f"Pulling latest from origin main in {target}...")
            subprocess.run(["git", "-C", target, "pull", "--rebase", "origin", "main"], check=False)
            print(f"Pushing to origin main in {target}...")
            push_res = subprocess.run(["git", "-C", target, "push", "origin", "main"], capture_output=True, text=True)
            print(f"Push result:\n{push_res.stdout}\n{push_res.stderr}")
        else:
            print(f"No git changes detected in {target}")

print("\nSUCCESS: All projects synced and pushed!")
