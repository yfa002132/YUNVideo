// YunVD 下载链接统一配置文件
// 所有下载按钮的链接都在这里统一管理

const DOWNLOAD_CONFIG = {
    // AndroidTV 版本
    'android-tv': {
        url: 'https://ghfast.top/https://github.com/yfa002132/gnboot/releases/download/release-v1.0.4/AndroidTV-1.0.4.apk',
        version: 'v2.0.1',
        size: '105MB',
        status: 'available', // available, coming-soon, maintenance
        confirmMessage: '确定开启下载？点击确定立即下载YunVD AndroidTV版!'
    },
    
    // Android 手机版本
    'android-phone': {
        url: 'https://ghfast.top/https://github.com/yfa002132/gnboot/releases/download/release-v2.0.1/AndroidPhone-release.apk', 
        version: 'v2.0.1',
        size: '78.4MB',
        status: 'available',
        confirmMessage: '确定开启下载？点击确定立即下载YunVD Android版!'
    },
    
    // iOS 手机版本
    'ios-phone': {
        url: 'https://ghfast.top/https://github.com/yfa002132/gnboot/releases/download/release-v2.0.1/IOSPhone-release.ipa',
        version: 'v2.0.1',
        size: '10.1MB',
        status: 'available',
        confirmMessage: '确定开启下载？点击确定立即下载YunVD iOS版!',
        showInstructions: true,
        instructionsImage: 'images/IOSPhone/Download Instructions.png'
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
            // 检查是否需要显示使用说明
            if (config.showInstructions && config.instructionsImage) {
                showDownloadInstructions(config);
            } else {
                // 直接下载
                if (confirm(config.confirmMessage)) {
                    startDownload(config, platform);
                }
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

// 显示下载使用说明
function showDownloadInstructions(config) {
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'download-instructions-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>iOS 安装说明</h3>
                    <button class="modal-close" onclick="closeDownloadInstructions()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="instructions-image">
                        <img src="${config.instructionsImage}" alt="iOS安装说明" />
                    </div>
                    <div class="instructions-text">
                        <p>请按照上图说明进行安装：</p>
                        <ol>
                            <li>浏览器进入<a href="https://iosxb.cn" target="_blank" rel="noopener noreferrer" style="color: #f093fb; text-decoration: none; font-weight: 500;">https://iosxb.cn</a> 安装证书</li>
                            <li>参考以上图片中的操作步骤进行应用所需要的签名、证书安装</li>
                            <li>在将下载yunvd.ipa文件导入到全能签。具体操作：打开已经安装的全能签，然后进入设置，导入文件（选择yunvd.ipa）。选择【资源菜单】，选中YunVd执行加签，并安装</li>
                        </ol>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn-cancel" onclick="closeDownloadInstructions()">取消</button>
                    <button class="btn-download" onclick="startDownloadAfterInstructions('${config.url}', '${config.version}')">开始下载</button>
                </div>
            </div>
        </div>
    `;
    
    // 添加样式
    const style = document.createElement('style');
    style.textContent = `
        .download-instructions-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            box-sizing: border-box;
        }
        
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
        }
        
        .modal-content {
            position: relative;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border-radius: 20px;
            width: 100%;
            max-width: 600px;
            height: auto;
            min-height: 75vh;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            animation: modalSlideIn 0.3s ease-out;
            margin: auto;
        }
        
        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: translateY(-50px) scale(0.9);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 1.5rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
        }
        
        .modal-header h3 {
            margin: 0;
            font-size: 1.3rem;
            font-weight: 600;
        }
        
        .modal-close {
            background: none;
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background-color 0.3s ease;
        }
        
        .modal-close:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        
        .modal-body {
            padding: 2rem;
            height: auto;
            min-height: 60vh;
            max-height: 70vh;
            overflow-y: auto;
        }
        
        .instructions-image {
            text-align: center;
            margin-bottom: 1rem;
        }
        
        .instructions-image img {
            max-width: 100%;
            max-height: 450px;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        .instructions-text {
            color: #333;
            min-height: 20vh;
            max-height: 35vh;
            overflow-y: visible;
        }
        
        .instructions-text p {
            font-size: 1.1rem;
            margin-bottom: 1rem;
            font-weight: 500;
            line-height: 1.6;
        }
        
        .instructions-text ol {
            padding-left: 1.5rem;
            margin: 0;
        }
        
        .instructions-text li {
            margin-bottom: 0.8rem;
            line-height: 1.7;
            font-size: 1rem;
        }
        
        .modal-footer {
            display: flex;
            justify-content: flex-end;
            gap: 1rem;
            padding: 1rem 1.5rem;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            background: rgba(248, 249, 250, 0.8);
        }
        
        .btn-cancel, .btn-download {
            padding: 0.7rem 1.5rem;
            border: none;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .btn-cancel {
            background: rgba(108, 117, 125, 0.1);
            color: #6c757d;
        }
        
        .btn-cancel:hover {
            background: rgba(108, 117, 125, 0.2);
        }
        
        .btn-download {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
            box-shadow: 0 4px 15px rgba(240, 147, 251, 0.3);
        }
        
        .btn-download:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(240, 147, 251, 0.5);
        }
        
        @media (max-width: 768px) {
            .download-instructions-modal {
                padding: 15px;
            }
            
            .modal-content {
                max-width: 95%;
                margin: 0;
                min-height: 85vh;
                max-height: 95vh;
            }
            
            .modal-header, .modal-body, .modal-footer {
                padding: 0.8rem;
            }
            
            .modal-header h3 {
                font-size: 1.2rem;
            }
            
            .instructions-image img {
                max-height: 300px;
            }
            
            .instructions-text {
                min-height: 25vh;
                max-height: 40vh;
                overflow-y: visible;
            }
            
            .instructions-text p {
                font-size: 1rem;
                margin-bottom: 0.8rem;
            }
            
            .instructions-text li {
                font-size: 0.9rem;
                margin-bottom: 0.6rem;
                line-height: 1.6;
            }
            
            .modal-footer {
                flex-direction: column;
                gap: 0.8rem;
            }
            
            .btn-cancel, .btn-download {
                width: 100%;
                padding: 0.8rem 1rem;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    // 阻止背景滚动
    document.body.style.overflow = 'hidden';
    
    // 点击背景关闭模态框
    modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target.classList.contains('modal-overlay')) {
            closeDownloadInstructions();
        }
    });
    
    // ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeDownloadInstructions();
        }
    });
}

// 关闭下载说明模态框
function closeDownloadInstructions() {
    const modal = document.querySelector('.download-instructions-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

// 在显示说明后开始下载
function startDownloadAfterInstructions(url, version) {
    closeDownloadInstructions();
    
    // 创建下载链接
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.download = `YunVD-ios-${version}.ipa`;
    link.click();
    
    // 记录下载事件
    console.log(`用户下载: iOS ${version}`);
}

// 开始下载
function startDownload(config, platform) {
    // 创建下载链接
    const link = document.createElement('a');
    link.href = config.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    const fileExtension = platform === 'ios-phone' ? 'ipa' : 'apk';
    link.download = `YunVD-${platform}-${config.version}.${fileExtension}`;
    link.click();
    
    // 记录下载事件
    console.log(`用户下载: ${platform} ${config.version}`);
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
