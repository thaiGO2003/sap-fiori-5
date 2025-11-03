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

### 🌐 Multi-Page Support

Project hỗ trợ **2 loại tutorial**:

1. **Single Page**: `index.html` - Tất cả trong 1 trang
2. **Multi-Page**: `index-multi.html` - Nhiều bài học riêng biệt

**Truy cập:**
- Single Page: `https://YOUR-USERNAME.github.io/sap-fiori-incident-app/`
- Multi-Page: `https://YOUR-USERNAME.github.io/sap-fiori-incident-app/index-multi.html`

GitHub Pages tự động serve tất cả HTML files!

## 🔄 Update trang web

### Update Single Page
```bash
git add index.html
git commit -m "Update single page tutorial"
git push
```

### Thêm bài học mới (Multi-Page)
```bash
# 1. Copy template và tạo bài mới
cp template-lesson.html lesson-08-my-topic.html

# 2. Edit nội dung
code lesson-08-my-topic.html

# 3. Update index-multi.html (thêm vào course grid)

# 4. Commit và push
git add lesson-08-my-topic.html index-multi.html
git commit -m "Add lesson 08: My Topic"
git push
```

**✅ GitHub Actions tự động deploy tất cả!**

### Workflow tự động

Mỗi khi bạn push lên branch `main`:
1. ✅ GitHub Actions trigger
2. ✅ Build và test (nếu có)
3. ✅ Deploy lên GitHub Pages
4. ✅ Tất cả files HTML available
5. ✅ Nội dung live ngay lập tức

**Không cần setup gì thêm!**

## 🐛 Troubleshooting

### Lỗi: "Page not found"
- ✅ Đợi 3-5 phút sau khi enable Pages
- ✅ Kiểm tra branch name phải là `main`
- ✅ Kiểm tra file `index.html` có ở root folder không
- ✅ Thử truy cập `index-multi.html` nếu single page không hoạt động

### Lỗi: "Build failed"
- ✅ Check tab **Actions** để xem lỗi gì
- ✅ Đảm bảo file `.github/workflows/deploy.yml` đúng
- ✅ Xem logs chi tiết trong GitHub Actions
- ✅ Check có lỗi syntax HTML/CSS không

### Lỗi: Push bị reject
```bash
# Pull code mới nhất
git pull origin main --rebase

# Push lại
git push
```

### Lỗi: Links giữa các bài không hoạt động
- ✅ Check relative paths: `lesson-01.html` (not `/lesson-01.html`)
- ✅ Test local trước khi push: mở file HTML trong browser
- ✅ Kiểm tra tên file exact match (case-sensitive)

### CI/CD không chạy
- ✅ Check branch name là `main` (not `master`)
- ✅ Check file `.github/workflows/deploy.yml` tồn tại
- ✅ Vào Settings → Actions → cho phép workflows run
- ✅ Click "Run workflow" manual trong Actions tab

## 📞 Cần hỗ trợ?

- 💬 GitHub Issues: Mở issue trong repository
- 📧 Email: Tạo issue trên GitHub
- 🌐 [GitHub Pages Docs](https://docs.github.com/en/pages)

---

**Chúc bạn deploy thành công!** 🎉

