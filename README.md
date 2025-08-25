# 云视频 - 专业视频播放器APP介绍页面

一个现代化的视频播放器APP介绍页面，展示APP的功能特性和下载信息。

## 页面特色

- 🎬 **专业介绍** - 突出APP的核心功能和优势
- 🎨 **现代化设计** - 渐变背景、毛玻璃效果、流畅动画
- 📱 **响应式布局** - 完美适配桌面端和移动端
- ⬇️ **多平台下载** - 支持Google Play、App Store和APK直接下载
- 📸 **应用截图展示** - 直观展示APP界面和功能
- ⭐ **用户评价** - 真实用户反馈和评分展示

## 页面结构

### 导航栏
- 品牌Logo
- 页面导航菜单（首页、功能、截图、下载）

### 主要内容区域
1. **英雄区域** - APP介绍和主要下载按钮
2. **功能特性** - 6大核心功能介绍
3. **应用截图** - 6个主要界面截图展示
4. **下载区域** - 详细的下载信息和按钮
5. **用户评价** - 真实用户反馈

### 页脚
- 关于APP信息
- 技术支持联系方式
- 社交媒体链接

## 功能特性展示

- **在线播放** - 海量在线视频资源
- **高清观看** - 支持4K超高清画质，享受极致观影体验
- **字幕支持** - 内置字幕功能，多语言支持
- **投屏功能** - 支持投屏到电视
- **多格式支持** - MP4、AVI、MKV、MOV等
- **安全可靠** - 无广告、无病毒

## 技术栈

- **HTML5** - 语义化标签结构
- **CSS3** - 现代样式特性
  - Flexbox & Grid 布局
  - CSS 动画和过渡效果
  - 响应式设计
  - 毛玻璃效果 (backdrop-filter)
- **JavaScript** - 交互功能
  - 平滑滚动导航
  - 滚动动画效果
  - 下载按钮交互
  - 触摸设备支持

## 文件结构

```
YUNVideo/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # 交互脚本
├── images/             # 图片资源
│   ├── video_playback.png
│   ├── movie_list.png
│   ├── tv_series_list.png
│   ├── variety_show_list.png
│   ├── anime_list.png
│   ├── playback_details.png
│   └── documentary_list.png
└── README.md           # 项目说明
```

## 使用方法

1. 直接在浏览器中打开 `index.html` 文件
2. 或者使用本地服务器：
   ```bash
   # 使用Python
   python -m http.server 8000
   
   # 使用Node.js
   npx serve .
   ```

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 自定义配置

### 修改下载链接
在 `script.js` 文件中找到下载按钮事件处理，修改相应的下载链接：

```javascript
if (this.classList.contains('primary')) {
    // 修改Google Play链接
    window.open('https://play.google.com/store/apps/details?id=your.app.id', '_blank');
} else if (this.classList.contains('secondary')) {
    // 修改App Store链接
    window.open('https://apps.apple.com/app/your-app-id', '_blank');
} else if (this.classList.contains('apk')) {
    // 修改APK下载链接
    window.open('https://your-domain.com/app.apk', '_blank');
}
```

### 修改APP信息
在 `index.html` 中修改以下信息：
- APP名称和描述
- 版本号和文件大小
- 用户评价内容
- 联系方式

### 修改样式主题
在 `styles.css` 中修改颜色变量：
```css
:root {
    --primary-color: #ff6b6b;
    --secondary-color: #4CAF50;
    --background-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## 性能优化

- 图片懒加载
- CSS和JavaScript压缩
- 响应式图片
- 平滑滚动优化
- 触摸设备优化

## 部署建议

1. **静态托管** - 可部署到GitHub Pages、Netlify、Vercel等
2. **CDN加速** - 使用CDN加速图片和静态资源
3. **HTTPS** - 确保使用HTTPS协议
4. **SEO优化** - 添加meta标签和结构化数据

## 许可证

MIT License

## 更新日志

### v2.1.0
- 重新设计为APP介绍页面
- 添加功能特性展示
- 添加应用截图展示
- 添加用户评价区域
- 优化移动端体验
- 添加平滑滚动导航
