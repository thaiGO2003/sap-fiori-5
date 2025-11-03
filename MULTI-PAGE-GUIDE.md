# 📚 Hướng dẫn Tạo Multi-Page Tutorial

## 🎯 Tổng quan

Khi bạn có nhiều bài học, cần cấu trúc multi-page. Hệ thống này cho phép:
- ✅ Trang chủ liệt kê tất cả bài học
- ✅ Từng bài học có trang riêng
- ✅ Navigation giữa các bài
- ✅ Search/filter bài học
- ✅ Progress tracking

## 📁 Cấu trúc Files

```
project/
│
├── index-multi.html           # Trang chủ - danh sách tất cả bài học
│
├── lesson-01-incident-management.html
├── lesson-02-list-report.html
├── lesson-03-overview-page.html
├── lesson-04-custom-actions.html
├── lesson-05-value-help.html
├── lesson-06-custom-fragments.html
├── lesson-07-deployment.html
│
├── template-lesson.html       # Template để tạo bài học mới
│
└── assets/                    # (Optional) CSS/JS/images chung
    ├── styles.css
    └── script.js
```

## 🚀 Cách sử dụng

### Bước 1: Tạo trang chủ

File `index-multi.html` đã được tạo sẵn với:
- Grid layout hiển thị tất cả bài học
- Search box
- Statistics
- Badges (beginner/intermediate/advanced)

**Customize:**
```html
<!-- Thêm bài học mới vào courses-grid -->
<div class="courses-grid" id="coursesGrid">
    <a href="lesson-YOUR-NUMBER.html" class="course-card">
        <div class="course-number">Y</div>  <!-- Số bài học -->
        <h3>Tên Bài Học</h3>
        <p>Mô tả ngắn về bài học</p>
        <div class="course-meta">
            <span class="badge beginner">Cơ bản</span>  <!-- Hoặc intermediate, advanced -->
            <span>⏱ X phút</span>
        </div>
    </a>
</div>
```

### Bước 2: Tạo bài học mới

**Option 1: Dùng Template**
1. Copy `template-lesson.html`
2. Rename thành `lesson-XX-your-topic.html`
3. Fill in nội dung

**Option 2: Tạo từ đầu**
```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Bài XX: Tên Bài</title>
    <!-- Copy CSS từ template-lesson.html -->
</head>
<body>
    <!-- Copy structure từ template -->
</body>
</html>
```

### Bước 3: Fill nội dung bài học

**Structure cơ bản:**
```html
<header class="header">
    <h1>📖 Tên Bài Học</h1>
    <p>Mô tả ngắn</p>
    <div class="lesson-meta">
        <span>⏱ 20 phút</span>
        <span>📊 Độ khó: Trung cấp</span>
    </div>
</header>

<div class="content">
    <!-- Intro box -->
    <div class="intro-box">
        <h2>🎯 Mục tiêu</h2>
        <ul>...</ul>
    </div>

    <!-- Các section -->
    <section class="section">
        <h2>1. Tiêu đề Section</h2>
        <h3>1.1. Subsection</h3>
        <p>Nội dung...</p>
        
        <!-- Code block -->
        <div class="code-block">
            <code>Your code here</code>
        </div>

        <!-- Alerts -->
        <div class="info">💡 Lưu ý</div>
        <div class="warning">⚠️ Cảnh báo</div>
        <div class="success">✅ Hoàn thành</div>
    </section>

    <!-- Navigation -->
    <div class="nav-bottom">
        <a href="lesson-prev.html" class="nav-btn">← Bài trước</a>
        <a href="index-multi.html" class="nav-btn">🏠 Trang chủ</a>
        <a href="lesson-next.html" class="nav-btn">Bài tiếp →</a>
    </div>
</div>
```

## 🎨 Customization

### Thay đổi màu theme

Tìm và thay đổi gradient trong CSS:
```css
/* Từ */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Sang màu khác */
background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
```

### Thêm sections mới

```html
<section class="section">
    <h2>N. Tên Section</h2>
    <!-- Nội dung -->
</section>
```

### Thêm code examples

```html
<div class="code-block">
    <code>
@UI.LineItem: [
    {
        $Type: 'UI.DataField',
        Value: Title,
        Label: 'Title'
    }
]
    </code>
</div>
```

### Thêm tables

```html
<table>
    <tr>
        <th>Column 1</th>
        <th>Column 2</th>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
    </tr>
</table>
```

## 📱 Responsive Design

Layout tự động responsive với:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

Không cần custom thêm!

## 🔍 Search Functionality

Search đã được tích hợp sẵn:
- Tự động filter theo title và description
- Real-time search
- Không cần backend

## 📊 Progress Tracking

Mỗi bài học có progress bar:
- Hiển thị % đã đọc dựa trên scroll
- Tự động update
- Sticky header

## 🔗 Navigation

### Links trong content
```html
<a href="lesson-05-value-help.html">bài trước về Value Help</a>
```

### External links
```html
<a href="https://cap.cloud.sap/" target="_blank">CAP Documentation</a>
```

### Navigation buttons
```html
<a href="lesson-prev.html" class="nav-btn">← Bài trước</a>
<a href="index-multi.html" class="nav-btn">🏠 Trang chủ</a>
<a href="lesson-next.html" class="nav-btn">Bài tiếp →</a>
```

## 📈 Best Practices

### 1. Naming convention
- Format: `lesson-XX-topic.html`
- Ví dụ: `lesson-01-incident-management.html`
- Dễ tìm và maintain

### 2. Content structure
```
Header (h1) → Main description
↓
Intro box → Objectives
↓
Section 1 → Overview
  - Subsection 1.1
  - Subsection 1.2
↓
Section 2 → Implementation
  - Subsection 2.1
  - Subsection 2.2
↓
Section N → Summary
  - Takeaways
  - References
  - Next lesson
↓
Navigation
```

### 3. Images
```html
<img src="images/lesson-01-diagram.png" alt="Diagram mô tả architecture">
```

### 4. Code examples
- Luôn có comment
- Highlight keywords quan trọng
- Include error handling

### 5. Consistency
- Giữ format giống nhau giữa các bài
- Cùng level of detail
- Consistent tone

## 🚀 Deploy

### Multi-page với GitHub Pages

1. **Push all files:**
```bash
git add *.html *.md
git commit -m "Add multi-page tutorial structure"
git push
```

2. **GitHub Pages auto-serves:**
- `index-multi.html` → `/`
- `lesson-*.html` → `/lesson-*.html`
- No config needed!

3. **Update index link:**
Nếu muốn `index-multi.html` là trang chủ:
- Rename `index.html` → `index-original.html`
- Rename `index-multi.html` → `index.html`

### Custom domain (Optional)
1. Vào Settings → Pages
2. Add custom domain
3. Update internal links if needed

## 📝 Checklist cho mỗi bài học

- [ ] Header có title và description rõ ràng
- [ ] Intro box với objectives
- [ ] Ít nhất 3 sections chính
- [ ] Code examples có syntax highlighting
- [ ] Có ít nhất 1 warning/info box
- [ ] Summary section với takeaways
- [ ] Links đến references
- [ ] Navigation buttons hoạt động
- [ ] Test trên mobile/tablet/desktop
- [ ] Check grammar và spelling

## 🐛 Troubleshooting

**Links không hoạt động?**
- ✅ Check path relative: `lesson-XX.html` (not `/lesson-XX.html`)
- ✅ Check file names exact match
- ✅ Test locally trước khi push

**Layout bị vỡ?**
- ✅ Check CSS classes match template
- ✅ Validate HTML
- ✅ Check console errors

**Search không work?**
- ✅ Check `id="searchInput"` tồn tại
- ✅ Check JavaScript enabled
- ✅ Try hard refresh (Ctrl+F5)

## 🎓 Example Workflow

### Tạo bài học mới từ đầu

```bash
# 1. Copy template
cp template-lesson.html lesson-08-my-topic.html

# 2. Edit file
code lesson-08-my-topic.html

# 3. Fill content
# - Update title, meta, descriptions
# - Add sections
# - Add code examples
# - Add navigation links

# 4. Update index-multi.html
# Add new course card to courses-grid

# 5. Test locally
# Open in browser, check all links

# 6. Commit & push
git add lesson-08-my-topic.html index-multi.html
git commit -m "Add lesson 08: My Topic"
git push
```

## 📞 Support

Nếu cần help:
1. Check template examples
2. Read this guide again
3. Check HTML/CSS đúng syntax

## 🎉 That's it!

Bạn đã sẵn sàng tạo multi-page tutorial system!

Happy teaching! 🚀

