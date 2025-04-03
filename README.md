# Interior Resource Hub - Web Version

Phiên bản web của ứng dụng Interior Resource Hub, giúp tổ chức và truy cập nhanh các trang web hữu ích cho công việc thiết kế 3D và nội thất.

## Tính năng

- **Danh mục được tổ chức**: Phân loại các trang web theo nhiều danh mục (HDRI/Texture, Models, Create Models, vv.)
- **Trình duyệt tích hợp**: Xem nội dung trang web trực tiếp trong ứng dụng
- **Hỗ trợ đa ngôn ngữ**: Chuyển đổi giữa tiếng Việt và tiếng Anh
- **Hỗ trợ giao diện tối/sáng**: Tùy chỉnh giao diện theo sở thích
- **Trải nghiệm người dùng tốt**: Giao diện hiện đại, dễ sử dụng
- **Khả năng thích ứng**: Hoạt động trên nhiều kích thước màn hình khác nhau
- **Đăng nhập với Google**: Lưu và đồng bộ dữ liệu người dùng
- **Quản lý danh mục và trang web**: Thêm danh mục và trang web tùy chỉnh

## Hướng dẫn cài đặt

### Phương pháp 1: Truy cập trực tiếp

Bạn có thể truy cập phiên bản web trực tiếp tại: [https://your-username.github.io/interior-resource-hub/](https://your-username.github.io/interior-resource-hub/)

### Phương pháp 2: Chạy cục bộ

1. Tải xuống hoặc clone repository này:
```
git clone https://github.com/your-username/interior-resource-hub.git
```

2. Mở file `index.html` trong trình duyệt web của bạn.

Hoặc bạn có thể sử dụng một máy chủ web cục bộ:

```
# Nếu bạn đã cài đặt Python
python -m http.server

# Nếu bạn đã cài đặt Node.js
npx serve
```

Sau đó truy cập `http://localhost:8000` hoặc `http://localhost:5000` trong trình duyệt của bạn.

### Cấu hình Firebase (Cho nhà phát triển)

Để sử dụng tính năng đăng nhập và đồng bộ dữ liệu, bạn cần cấu hình Firebase:

1. Tạo một dự án trên [Firebase Console](https://console.firebase.google.com/)
2. Bật tính năng Authentication với phương thức đăng nhập Google
3. Bật tính năng Firestore Database
4. Thay thế cấu hình Firebase trong file `js/main.js` với cấu hình của bạn:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

## Hướng dẫn sử dụng

1. **Chọn danh mục**: Nhấp vào một danh mục trên thanh điều hướng phía trên để hiển thị các trang web thuộc danh mục đó.
2. **Xem trang web**: Nhấp vào bất kỳ trang web nào trong danh sách bên trái để hiển thị nội dung trang web đó trong khung chính.
3. **Thay đổi cài đặt**: Nhấp vào biểu tượng cài đặt (bánh răng) ở góc trên cùng bên phải để thay đổi ngôn ngữ hoặc giao diện.
4. **Xem thông tin**: Nhấp vào biểu tượng thông tin (i) để xem thông tin về ứng dụng.
5. **Đăng nhập**: Nhấp vào biểu tượng đăng nhập để kết nối với tài khoản Google của bạn.
6. **Quản lý nội dung**: Sau khi đăng nhập, bạn có thể:
   - Thêm danh mục mới
   - Thêm trang web mới vào danh mục hiện có
   - Xem thông tin tài khoản của bạn

## Đồng bộ dữ liệu

- Tất cả dữ liệu người dùng được lưu trữ an toàn trong Firestore Database
- Dữ liệu được tự động đồng bộ mỗi khi bạn thêm danh mục mới hoặc trang web mới
- Khi đăng nhập trên thiết bị khác, dữ liệu sẽ tự động được tải về

## Hạn chế

- Một số trang web có thể chặn việc hiển thị trong iframe, khiến chúng không thể xem trực tiếp trong ứng dụng.
- Để sử dụng đầy đủ chức năng đồng bộ, bạn cần kết nối internet.

## Liên hệ

Nếu bạn có bất kỳ câu hỏi hoặc đề xuất nào, vui lòng tạo một issue trong repository của dự án hoặc liên hệ trực tiếp qua email.

---

Được phát triển bởi **Your Name** - Bản quyền © 2023 