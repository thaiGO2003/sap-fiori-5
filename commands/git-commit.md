# /git-commit

Thực hiện commit các thay đổi vào git (Windows PowerShell).

## Lần đầu trong repo (nếu chưa init)
```powershell
cd "P:\Fast SAPUI Demo"
if (-not (Test-Path .git)) { git init }

# Đặt tên/email (global, chỉ cần 1 lần trên máy)
git config --global user.name "YOUR_NAME"
git config --global user.email "YOUR_EMAIL@example.com"
```

## Commit thay đổi hiện tại
```powershell
cd "P:\Fast SAPUI Demo"
# Kiểm tra trạng thái
git status

# Thêm tất cả files đã thay đổi
git add -A

# Tạo commit với message
$MSG = "chore: update guides & homepage"
git commit -m $MSG

# Xem lịch sử rút gọn
git log --oneline -5
```

## Gợi ý message chuẩn
- feat: thêm tính năng mới (vd: feat: add FE create app guide)
- fix: sửa lỗi
- docs: tài liệu
- chore: việc vặt/cấu hình
- refactor: tái cấu trúc không đổi hành vi
- style: định dạng, lint
- perf: tối ưu hiệu năng


