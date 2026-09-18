export interface Article {
  slug: string;
  title: string;
  kicker: string;
  badge: string;
  image: string;
  date: string;
  readTime: string;
  description: string;
}

/**
 * Nguồn dữ liệu chung cho trang tin và khối bài viết liên quan.
 * Bài mới chỉ cần thêm một bản ghi tại đây và tạo nội dung dưới /tin-tuc.
 * Khung trình bày được áp tự động bởi app/tin-tuc/layout.tsx.
 */

export const articles: Article[] = [
  {
    slug: "/kinh-nghiem-hanh-huong-nui-ba-den",
    title: "Kinh nghiệm hành hương Núi Bà Đen trọn vẹn và ý nghĩa",
    kicker: "Cẩm nang du lịch • Hành hương Tây Ninh",
    badge: "Hành hương Núi Bà",
    image: "/le-phat-ram-thang-gieng-nui-ba-den.jpg",
    date: "10/09/2026",
    readTime: "9 phút đọc",
    description:
      "Tổng hợp kinh nghiệm hành hương Núi Bà Đen Tây Ninh chi tiết: Thời điểm lý tưởng, các điểm chiêm bái Chùa Bà - Điện Bà, quần thể tượng Phật đỉnh núi 986m, cáp treo và mẹo chuẩn bị.",
  },
  {
    slug: "/mang-cau-ba-den-le-hoi-nong-san-ocop-2026",
    title:
      "Mãng cầu Bà Đen dự Lễ hội nông sản đặc trưng và sản phẩm OCOP lần thứ I năm 2026 tại Núi Bà Đen",
    kicker: "Sự kiện & Lễ hội • Tây Ninh",
    badge: "Lễ hội OCOP 2026",
    image: "/le-hoi-nong-san-ocop-tay-ninh-2026.jpg",
    date: "Tháng 9/2026",
    readTime: "7 phút đọc",
    description:
      "TAYNA mang Mãng Cầu Bà Đen tham dự Lễ hội nông sản đặc trưng và sản phẩm OCOP lần I năm 2026 từ 22-26/9/2026 tại Núi Bà Đen, kết nối nông sản Tây Ninh và người tiêu dùng.",
  },
  {
    slug: "/mang-cau-ba-den-duoc-trong-nhu-the-nao",
    title:
      "Mãng Cầu Bà Đen Được Trồng Như Thế Nào? Hành Trình Từ Vườn Đến Khi Thu Hoạch",
    kicker: "Quy trình & Vùng trồng • Tây Ninh",
    badge: "Hành trình vùng trồng",
    image: "/nong-dan-thu-hoach-mang-cau.jpg",
    date: "Tháng 9/2026",
    readTime: "8 phút đọc",
    description:
      "Khám phá quy trình trồng Mãng Cầu Bà Đen Tây Ninh từ thổ nhưỡng chân núi, xử lý ra hoa, tỉa trái, bao trái an toàn đến khâu xác định độ già, thu hoạch và tuyển chọn tỉ mỉ.",
  },
  {
    slug: "/vi-sao-mang-cau-ba-den-doi-khi-co-sau",
    title:
      "Vì sao mãng cầu Bà Đen đôi khi có sâu? Hiểu đúng về đặc tính tự nhiên của trái mãng cầu",
    kicker: "Kiến thức về trái • Tây Ninh",
    badge: "Hiểu đúng về nông sản",
    image: "/mang-cau-vua-hai-tai-vuon.jpg",
    date: "Tháng 8/2026",
    readTime: "9 phút đọc",
    description:
      "Vì sao mãng cầu Bà Đen đôi khi có sâu dù bên ngoài trái vẫn đẹp? Tìm hiểu nguyên nhân, cách nhận biết, lựa chọn và bảo quản mãng cầu đúng cách.",
  },
  {
    slug: "/mang-cau-bao-lau-thi-chin",
    title: "Mãng cầu bao lâu thì chín? Cách nhận biết mãng cầu chín ngon",
    kicker: "Mẹo hay & Bảo quản • Tây Ninh",
    badge: "Mẹo chọn & Nhận biết",
    image: "/mang-cau-ba-den-chin-vang-bo-xop.jpg",
    date: "Tháng 8/2026",
    readTime: "5 phút đọc",
    description:
      "Mãng cầu mua về còn cứng bao lâu thì chín? Xem 7 dấu hiệu nhận biết mãng cầu chín ngon, cách theo dõi độ già và mẹo để trái chín tự nhiên đúng chuẩn.",
  },
  {
    slug: "/mang-cau-va-qua-na-co-phai-la-mot",
    title: "Mãng cầu và quả na có phải là một? Phân biệt na dai, na bở và mãng cầu Bà Đen",
    kicker: "Kiến thức nông sản • Tây Ninh",
    badge: "Phân biệt & Kiến thức",
    image: "/vuon-mang-cau-nui-ba-den-troi-xanh.jpg",
    date: "Tháng 8/2026",
    readTime: "6 phút đọc",
    description:
      "Mãng cầu và quả na có phải là một? Tìm hiểu cách gọi na – mãng cầu theo vùng miền Bắc - Nam, phân biệt na dai, na bở và thương hiệu Mãng Cầu Bà Đen Tây Ninh.",
  },
  {
    slug: "/cac-dip-le-lon-cung-trong-nam-y-nghia-mang-cau-ba-den",
    title: "Các dịp lễ lớn cúng trong năm của người Việt và ý nghĩa của mãng cầu Bà Đen trong văn hóa truyền thống",
    kicker: "Văn hóa & Tâm linh, Tây Ninh",
    badge: "Văn hóa cúng lễ",
    image: "/cung-le-trai-cay-mang-cau-ba-den.jpg",
    date: "Tháng 8/2026",
    readTime: "7 phút đọc",
    description:
      "Tìm hiểu các dịp lễ cúng lớn trong năm của người Việt từ Tết Nguyên Đán, Rằm tháng Giêng, Vu Lan đến khai trương, tân gia và ý nghĩa của mãng cầu Bà Đen Tây Ninh trên mâm ngũ quả.",
  },
  {
    slug: "/van-chuyen-mang-cau-ba-den",
    title: "Vận chuyển Mãng cầu Bà Đen như thế nào? Quy trình đóng gói Mãng Cầu Bà Đen",
    kicker: "Đóng gói & Vận chuyển, Tây Ninh",
    badge: "Vận chuyển & Đóng gói",
    image: "/thuc-te-dong-goi.jpg",
    date: "Tháng 8/2026",
    readTime: "6 phút đọc",
    description:
      "Khám phá quy trình vận chuyển Mãng Cầu Bà Đen từ vườn Tây Ninh đến tay khách hàng: Cách chọn độ già, bọc xốp chống va đập, kiểm soát thời gian và mẹo kiểm tra khi nhận.",
  },
  {
    slug: "/cach-bao-quan-mang-cau-ba-den",
    title: "Cách bảo quản Mãng Cầu Bà Đen đúng cách tại nhà",
    kicker: "Mẹo hay & Bảo quản, Tây Ninh",
    badge: "Kinh nghiệm bảo quản",
    image: "/thuc-te-dong-goi.jpg",
    date: "Tháng 8/2026",
    readTime: "5 phút đọc",
    description:
      "Hướng dẫn cách bảo quản Mãng Cầu Bà Đen từ lúc nhận hàng đến khi chín. Giải đáp mãng cầu bao lâu chín, có nên để tủ lạnh và cách xử lý trái chín không đều.",
  },
  {
    slug: "/mua-mang-cau-ba-den-thang-may",
    title: "Mùa Mãng Cầu Bà Đen tháng mấy? Mùa thu hoạch mãng cầu Tây Ninh",
    kicker: "Mùa vụ & Nông sản, Tây Ninh",
    badge: "Mùa vụ thu hoạch",
    image: "/vuon-mang-cau-tay-ninh-bao-trai.jpg",
    date: "Tháng 8/2026",
    readTime: "5 phút đọc",
    description:
      "Mùa mãng cầu tháng mấy? Mãng Cầu Bà Đen có quanh năm không? Tìm hiểu mùa vụ tự nhiên, kỹ thuật rải vụ nghịch và cách chọn trái đúng lứa thu hoạch ngon nhất.",
  },
  {
    slug: "/di-tay-ninh-mua-mang-cau-ba-den-o-dau",
    title: "Đi Tây Ninh mua Mãng Cầu Bà Đen ở đâu? Kinh nghiệm chọn mua ngon, chuẩn",
    kicker: "Cẩm nang du lịch, Tây Ninh",
    badge: "Kinh nghiệm du lịch",
    image: "/thuc-te-mang-cau-tuoi.jpg",
    date: "Tháng 8/2026",
    readTime: "5 phút đọc",
    description:
      "Đi Tây Ninh mua Mãng Cầu Bà Đen ở đâu? Khám phá kinh nghiệm chọn mãng cầu ngon, mua làm quà du lịch, cách bảo quản, vận chuyển và thông tin từ nhà vườn Tây Ninh.",
  },
  {
    slug: "/mang-cau-ba-den-dac-san-tay-ninh",
    title: "Mãng Cầu Bà Đen – Đặc Sản Nổi Tiếng Của Tây Ninh",
    kicker: "Nông sản bản sắc, Tây Ninh",
    badge: "Đặc sản nổi tiếng",
    image: "/hai-trieu-trai-mang-cau-chin.jpg",
    date: "Tháng 8/2026",
    readTime: "4 phút đọc",
    description:
      "Khám phá mãng cầu Bà Đen Tây Ninh – đặc sản nổi tiếng với thịt dai, vị ngọt thanh, thơm ngon, vùng chuyên canh trù phú và được bảo hộ chỉ dẫn địa lý.",
  },
  {
    slug: "/mua-mang-cau-ba-den-chinh-goc-tay-ninh",
    title: "Tìm mãng cầu Bà Đen chính gốc Tây Ninh ở đâu? Kinh nghiệm chọn mua chuẩn ngon",
    kicker: "Tin tức mùa vụ, Tây Ninh",
    badge: "Kinh nghiệm chọn mua",
    image: "/thuc-te-phan-loai.jpg",
    date: "Tháng 8/2026",
    readTime: "5 phút đọc",
    description:
      "Hướng dẫn chi tiết cách nhận biết độ già của trái, phân biệt mãng cầu chuẩn gốc Tây Ninh, quy cách đóng gói chống va đập và bảng phân loại trái ăn gia đình hoặc biếu tặng.",
  },
  {
    slug: "/mang-cau-ba-den-tayna-dac-san-tay-ninh",
    title:
      "TAYNA – Mãng Cầu Bà Đen | Đặc Sản Tây Ninh Từ Vùng Trồng Chân Núi Bà Đen",
    kicker: "Đặc sản Tây Ninh • Vùng trồng TAYNA",
    badge: "Thương hiệu vùng trồng",
    image: "/trai-mang-cau-ba-den-tay-ninh-tayna.jpg",
    date: "Tháng 9/2026",
    readTime: "9 phút đọc",
    description:
      "TAYNA – Mãng Cầu Bà Đen từ vùng trồng chân Núi Bà Đen, Tây Ninh. Khám phá nét độc đáo của sản vật địa phương, thương hiệu TAYNA, lý do khuyến khích đặt trước 1-2 ngày, cách chọn và bảo quản.",
  },
];
