# 下载链接统一配置说明

## 概述
所有下载按钮的链接现在都统一管理在 `download-config.js` 文件中，便于维护和更新。

## 配置文件结构

### 主要配置项
- **android-tv**: Android TV版本配置
- **android-phone**: Android手机版本配置  
- **ios-phone**: iOS手机版本配置

### 每个平台配置包含
- `url`: 下载链接地址
- `version`: 版本号
- `size`: 文件大小
- `status`: 状态（available/coming-soon/maintenance）
- `confirmMessage`: 确认提示信息

## 如何修改下载链接

### 1. 修改现有版本链接
在 `download-config.js` 中找到对应平台，修改 `url` 字段：
```javascript
'android-tv': {
    url: 'https://your-new-download-link.com/app.apk',
    // ... 其他配置
}
```

### 2. 添加新平台
在 `DOWNLOAD_CONFIG` 对象中添加新的平台配置：
```javascript
'new-platform': {
    url: 'https://example.com/app.apk',
    version: 'v1.0.0',
    size: '30MB',
    status: 'available',
    confirmMessage: '确定下载新平台版本？'
}
```

### 3. 修改版本状态
- `available`: 可下载
- `coming-soon`: 即将上线
- `maintenance`: 维护中

### 4. 更新版本信息
修改 `version` 和 `size` 字段，页面会自动更新显示。

## 备用链接配置
如果主下载链接失效，可以在 `fallback` 对象中配置备用链接。

## 应用商店链接
未来如果需要跳转到应用商店，可以在 `stores` 对象中配置相关链接。

## 注意事项
1. 修改配置后，页面会自动使用新的配置
2. 版本信息会在页面加载时自动更新
3. 所有下载按钮都会使用统一的处理逻辑
4. 建议在修改前备份原配置

## 测试
修改配置后，请测试所有下载按钮的功能是否正常。
