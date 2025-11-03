# 🚀 Hướng dẫn Deploy lên GitHub Pages

## Bước 1: Tạo GitHub Repository

1. Đăng nhập vào [GitHub](https://github.com)
2. Click nút **"New"** (màu xanh) ở góc trên bên phải
3. Đặt tên repository: `sap-fiori-incident-app` (hoặc tên bạn muốn)
4. Chọn **Public** (để GitHub Pages miễn phí)
5. **KHÔNG** tích vào "Add a README" (đã có rồi)
6. Click **"Create repository"**

## Bước 2: Push Code lên GitHub

Sau khi tạo repository, bạn sẽ thấy hướng dẫn. Chọn **"push an existing repository"** và chạy các lệnh sau:

```bash
# Điều hướng vào thư mục project (nếu chưa ở đó)
cd "P:\Fast SAPUI Demo"

# Thêm remote repository (THAY your-username bằng username GitHub của bạn)
git remote add origin https://github.com/YOUR-USERNAME/sap-fiori-incident-app.git

# Push code lên GitHub
git push -u origin main
```

**Lưu ý:** Thay `YOUR-USERNAME` bằng username GitHub thật của bạn!

## Bước 3: Enable GitHub Pages

### Cách 1: Tự động (Đã cấu hình sẵn CI/CD)

1. Vào repository trên GitHub
2. Click tab **"Settings"** ở trên cùng
3. Cuộn xuống phần **"Pages"** ở menu trái
4. Trong **"Source"**, chọn:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **"Save"**
6. Đợi 2-3 phút, GitHub sẽ tự động build và deploy
7. Vào lại **Settings → Pages** để xem URL: `https://YOUR-USERNAME.github.io/sap-fiori-incident-app/`

### Cách 2: Manual Deploy (Không dùng CI/CD)

1. Vào **Settings → Pages**
2. **Source**: Chọn "Deploy from a branch"
3. **Branch**: `main` và folder `/ (root)`
4. **Save**
5. Đợi vài phút để build xong

## Bước 4: Kiểm tra Deployment

1. Click vào tab **"Actions"** ở trên cùng repository
2. Bạn sẽ thấy workflow **"Deploy to GitHub Pages"** đang chạy
3. Click vào workflow để xem chi tiết
4. Đợi đến khi thấy dấu tick xanh ✅ là xong
5. Quay lại **Settings → Pages** để lấy URL

## ✅ Hoàn tất!

Trang web của bạn đã live tại:
```
https://YOUR-USERNAME.github.io/sap-fiori-incident-app/
```

## 🔄 Update trang web

Mỗi khi bạn push code mới lên:

```bash
git add .
git commit -m "Update content"
git push
```

GitHub Actions sẽ tự động build và deploy lại trang web mới!

## 🐛 Troubleshooting

### Lỗi: "Page not found"
- ✅ Đợi 3-5 phút sau khi enable Pages
- ✅ Kiểm tra branch name phải là `main`
- ✅ Kiểm tra file `index.html` có ở root folder không

### Lỗi: "Build failed"
- ✅ Check tab **Actions** để xem lỗi gì
- ✅ Đảm bảo file `.github/workflows/deploy.yml` đúng

### Lỗi: Push bị reject
```bash
# Pull code mới nhất
git pull origin main --rebase

# Push lại
git push
```

## 📞 Cần hỗ trợ?

- 💬 GitHub Issues: Mở issue trong repository
- 📧 Email: Tạo issue trên GitHub
- 🌐 [GitHub Pages Docs](https://docs.github.com/en/pages)

---

**Chúc bạn deploy thành công!** 🎉

