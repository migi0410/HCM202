# Dự Án Sáng Tạo Lịch Sử: Hành Trình Vạn Dặm Tìm Đường Cứu Nước (1911 - 1941)

> **Môn học:** Lịch sử Đảng Cộng sản Việt Nam (Mã môn: **HCM202**)  
> **Sản phẩm:** Website tương tác sáng tạo kỷ niệm lịch sử  
> **Phát triển bởi:** Nhóm Sinh viên yêu nước phối hợp cùng trợ lý ảo Antigravity

---

## 🌟 Giới Thiệu Chung
Dự án là một **website tương tác kể chuyện lịch sử (Interactive Storytelling SPA)** tái hiện hành trình 30 năm bôn ba vạn dặm đầy rẫy hy sinh, gian khổ nhưng vô cùng vẻ vang của **Bác Hồ kính yêu (Nguyễn Tất Thành - Nguyễn Ái Quốc - Hồ Chí Minh)** từ ngày Người rời Bến cảng Nhà Rồng (05/06/1911) cho đến ngày đặt chân trở về Tổ quốc thân yêu tại cột mốc 108 Pác Bó (28/01/1941).

Website được thiết kế tỉ mỉ theo phong cách **Premium & Cinematic Modern Retro** - sự hòa quyện hoàn hảo giữa hồn cốt lịch sử trầm mặc và công nghệ web hiện đại.

---

## 🎨 Điểm Nhấn Thiết Kế & Trải Nghiệm Tương Tác (UX/UI)

1. **Giao diện Cinematic Sang Trọng (Cinematic Dark-Gold Theme):**
   * Sử dụng tông màu tối làm nền (`Charcoal & Navy Deep`) kết hợp các đường nét vàng đồng hoàng gia (`#D4AF37`) phát sáng tinh tế.
   * Hoạt họa hạt bụi vàng bay lơ lửng bằng **HTML5 Canvas** giả lập bầu không khí hoài niệm điện ảnh.

2. **Bản Đồ Hành Trình Động Tương Tác (Interactive SVG Map):**
   * Bản đồ thế giới phẳng phong cách tối giản nghệ thuật được vẽ hoàn toàn bằng vector **SVG**.
   * Khi người dùng cuộn trang hoặc click vào điểm mốc, hệ thống sẽ tự động vẽ lộ trình bằng hoạt họa đường đi (SVG Path dash-array animation) lướt qua các đại lục.
   * Thẻ hiển thị thông tin bằng hiệu ứng kính mờ (**Glassmorphic Card**) hiển thị trực quan tóm tắt, thời gian, địa điểm và hình ảnh minh họa thực tế cho từng cột mốc.

3. **Dòng Thời Gian Thấm Đẫm Hoài Niệm (Scroll-driven Timeline):**
   * Trục thời gian xương sống thẳng đứng cuốn hút. Các thẻ tư liệu lịch sử từ hai bên sẽ tự động xuất hiện (Fade-in-up) khi người dùng cuộn tới thông qua công nghệ tối ưu **Intersection Observer API** (đạt hiệu năng 60fps mượt mà).

4. **Thử Thách Trắc Nghiệm Học Giả & Cấp Giấy Chứng Nhận Vàng:**
   * Một mini-game trắc nghiệm trực quan gồm 5 câu hỏi lịch sử lý thú thử thách kiến thức.
   * Khi trả lời đúng hoàn hảo (5/5 câu), hệ thống sẽ sử dụng tên người dùng đăng ký để **tự động cấp một Giấy chứng nhận vàng lấp lánh (Golden Certificate of History Explorer)**. Giấy chứng nhận hỗ trợ in trực tiếp hoặc tải về dưới dạng tệp chất lượng cao thông qua cửa sổ in chuẩn của hệ điều hành (`window.print()`).

5. **Trạm Âm Nhạc Cổ Điển & Góc Danh Ngôn:**
   * Trình phát nhạc thiết kế mô phỏng **máy hát đĩa than cổ điển (Vintage Vinyl Player)** độc đáo, đĩa đĩa than tự động quay và kim đọc tự di chuyển khi nhạc phát.
   * Băng chuyền danh ngôn (**Quotes Carousel**) trích dẫn những câu nói bất hủ của Bác trong quá trình hoạt động ở nước ngoài.

---

## 📂 Cấu Trúc Mã Nguồn (Code Architecture)

Dự án được xây dựng tối giản, cực kỳ nhẹ nhàng và không phụ thuộc vào các framework nặng nề, đảm bảo thời gian tải trang tức thì và hoạt họa mượt mà tuyệt đối:

```
HCM202/
├── index.html         # Cấu trúc HTML5 chuẩn SEO, semantic tags và bố cục nội dung
├── style.css          # Hệ thống CSS Variables, Glassmorphism, Responsive Grid và Keyframes
├── app.js             # Logic hoạt họa Canvas, vẽ lộ trình SVG, Quiz Engine, đĩa than Audio và Quotes
├── assets/            # Thư mục chứa tài nguyên
│   └── images/        # Ảnh tư liệu lịch sử chất lượng cao (định dạng PNG tối ưu)
└── README.md          # Tài liệu hướng dẫn dự án sáng tạo
```

---

## 🛠️ Hướng Dẫn Chạy Dự Án Tại Local

Dự án là trang tĩnh (Static Web Page) cực kỳ dễ dàng chạy mà không cần cài đặt môi trường phức tạp:

### Cách 1: Chạy trực tiếp (Nhanh nhất)
1. Giải nén thư mục dự án (nếu có).
2. Nhấp đúp chuột vào tệp `index.html` để mở ngay trên bất kỳ trình duyệt nào (Chrome, Edge, Safari, Firefox...).

### Cách 2: Sử dụng Live Server (Khuyên dùng để nghe nhạc trơn tru hơn)
Để trình duyệt không chặn một số tính năng nhạc (do chính sách bảo mật CORS khi mở file cục bộ), bạn nên chạy qua một local server nhỏ:
1. Mở thư mục dự án bằng **VS Code**.
2. Nhấp chuột phải vào `index.html` và chọn **Open with Live Server** (cần cài extension Live Server trên VS Code).
3. Hoặc nếu có NodeJS cài sẵn, chạy lệnh sau trong thư mục:
   ```bash
   npx serve .
   ```

---

## 📜 Giấy Phép & Bản Quyền
Dự án được thực hiện với tinh thần tự hào dân tộc và lòng tôn kính vô hạn đối với Chủ tịch Hồ Chí Minh vĩ đại. Mọi thông tin, sử liệu trên trang được tổng hợp kỹ lưỡng từ các giáo trình chính thống của Bộ Giáo dục & Đào tạo và tư liệu của Bảo tàng Hồ Chí Minh.
