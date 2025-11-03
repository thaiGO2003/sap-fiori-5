# Cập nhật trang chủ theo repo hiện tại

Mục tiêu: Quét thư mục `public/guides` để rà soát các file HTML hướng dẫn, sau đó cập nhật/trộn vào `src/utils/guidesManifest.ts`.

> Lưu ý: Manifest hiện tại được maintain thủ công để kiểm soát `title`, `category` thân thiện. Các lệnh dưới đây giúp bạn liệt kê nhanh và tạo khung dữ liệu để copy vào manifest.

## 1) Liệt kê cấu trúc guides (PowerShell - Windows)
```powershell
# Chạy trong thư mục root dự án
Get-ChildItem -Recurse -File -Path .\public\guides -Filter *.html |
  Select-Object FullName |
  ForEach-Object {
    $p = $_.FullName.Replace((Resolve-Path .\public).Path, '').Replace("\\","/")
    if ($p.StartsWith('/')) { $p = $p } else { $p = '/' + $p }
    Write-Host $p
  }
```

Ví dụ output:
```
/guides/fiori-elements/getting-started/create-fe-app.html
/guides/tool-services/build-code/init-build-code.html
```

## 2) Tạo JSON nháp từ paths (Node.js one-liner)
```powershell
# Tạo file tạm .tmp-guides.json để dùng làm khung nhập liệu
node -e "const fs=require('fs');const path=require('path');const root='public/guides';function walk(d){return fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>{const p=path.join(d,e.name);return e.isDirectory()?walk(p):p;});}const files=walk(root).filter(f=>f.endsWith('.html'));const items=files.map(f=>{const web='/' + f.replace('public\\\\','').replace('public/','').replace(/\\\\/g,'/');const parts=web.split('/');const group=parts[2];const category=parts[3];const slug=parts.slice(4).join('/').replace('.html','');return { id: `${group}-${slug}`.replace(/[^a-z0-9-]/g,'-'), title: slug.replace(/-/g,' ').replace(/\\b\\w/g,c=>c.toUpperCase()), group, category, path: web};});fs.writeFileSync('.tmp-guides.json', JSON.stringify(items,null,2));console.log('Wrote .tmp-guides.json with', items.length, 'items');"
```

Mở file `.tmp-guides.json`, rà soát `title`, `category` và copy vào `src/utils/guidesManifest.ts` (sửa tiêu đề cho thân thiện).

## 3) Cập nhật thủ công `src/utils/guidesManifest.ts`
- Thêm các object mới theo mẫu:
```ts
{
  id: 'fe-create-app',
  title: 'FE: Tạo một ứng dụng SAP Fiori Elements',
  group: 'fiori-elements',
  category: 'Getting Started',
  path: '/guides/fiori-elements/getting-started/create-fe-app.html',
},
```

Lưu file, Vite sẽ hot-reload lại trang chủ.

## 4) Kiểm tra nhanh
```bash
npm run dev
# Mở http://localhost:5173 và kiểm tra nhóm + ô tìm kiếm
```

## Gợi ý mở rộng
- Tạo script Node riêng `scripts/update-manifest.mjs` để auto-merge vào manifest (nếu muốn tự động hóa).
- Thêm trường `order` trong manifest để sắp xếp hiển thị.
- Trích `title` từ thẻ `<title>` của mỗi HTML để đặt tên tự động.


