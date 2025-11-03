# /git-push

Đẩy (push) các commits lên remote repository trên GitHub.

## Thiết lập remote (lần đầu)
```powershell
cd "P:\Fast SAPUI Demo"
# Thay YOUR-USERNAME và REPO-NAME
$REMOTE = "https://github.com/YOUR-USERNAME/REPO-NAME.git"

# Tạo nhánh main nếu cần
if (-not (git branch --show-current)) { git checkout -b main }

git remote remove origin 2>$null
git remote add origin $REMOTE
```

## Push lần đầu
```powershell
cd "P:\Fast SAPUI Demo"
# Đẩy nhánh main và set upstream
git push -u origin main
```

## Push cập nhật về sau
```powershell
cd "P:\Fast SAPUI Demo"
git push
```

## Xử lý lỗi phổ biến
- Rejected (non-fast-forward):
```powershell
git pull --rebase origin main
git push
```
- Authentication/Git credential:
  - Dùng Personal Access Token (PAT) thay cho password khi GitHub yêu cầu
  - Lưu credential: `git config --global credential.helper manager`


