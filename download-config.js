// YunVD 下载链接统一配置文件
// 所有下载按钮的链接都在这里统一管理

const DOWNLOAD_CONFIG = {
    // Android TV 版本
    'android-tv': {
        url: 'https://ghfast.top/https://github.com/yfa002132/gnboot/releases/download/release-v1.0.3/app-release.for.android.tv.apk',
        version: 'v1.0.3',
        size: '105MB',
        status: 'available', // available, coming-soon, maintenance
        confirmMessage: '确定开启下载？点击确定立即下载YunVD AndroidTV版'
    },
    
    // Android 手机版本
    'android-phone': {
        url: 'https://ghfast.top/https://github.com/yfa002132/gnboot/releases/download/release-v1.0.3/app-release.for.android.apk', 
        version: 'v1.0.3',
        size: '78.4MB',
        status: 'available',
        confirmMessage: '确定开启下载？点击确定立即下载YunVD Android版'
    },
    
    // iOS 手机版本
    'ios-phone': {
        url: '', // 暂时为空，等待上线
        version: 'v1.0.0',
        size: '32.1MB',
        status: 'coming-soon',
        confirmMessage: 'YunVD iOS 手机版即将上线，敬请期待！'
    },
    
    // 备用下载链接（如果主链接失效）
    fallback: {
        'android-tv': 'https://github.com/yfa002132/YUNVideo/releases/latest'
    },
    
    // 应用商店链接（未来使用）
    stores: {
        googlePlay: 'https://play.google.com/store/apps/details?id=com.yunvd.app',
        appStore: 'https://apps.apple.com/app/yunvd/id1234567890'
    }
};

// 下载处理函数
function handleDownload(platform) {
    const config = DOWNLOAD_CONFIG[platform];
    
    if (!config) {
        console.error('未知的下载平台:', platform);
        return;
    }
    
    switch (config.status) {
        case 'available':
            if (confirm(config.confirmMessage)) {
                // 创建下载链接
                const link = document.createElement('a');
                link.href = config.url;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.download = `YunVD-${platform}-${config.version}.apk`;
                link.click();
                
                // 记录下载事件（可选）
                console.log(`用户下载: ${platform} ${config.version}`);
            }
            break;
            
        case 'coming-soon':
            alert(config.confirmMessage);
            break;
            
        case 'maintenance':
            alert('该版本正在维护中，请稍后再试');
            break;
            
        default:
            alert('下载服务暂时不可用，请稍后再试');
    }
}

// 获取平台信息
function getPlatformInfo(platform) {
    return DOWNLOAD_CONFIG[platform] || null;
}

// 检查下载链接是否可用
function checkDownloadAvailability(platform) {
    const config = DOWNLOAD_CONFIG[platform];
    return config && config.status === 'available' && config.url;
}

// 导出配置（如果使用模块化）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        DOWNLOAD_CONFIG,
        handleDownload,
        getPlatformInfo,
        checkDownloadAvailability
    };
}
