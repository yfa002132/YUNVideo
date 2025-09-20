// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        }
    });

    // 平滑滚动导航
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有活动状态
            navLinks.forEach(l => l.classList.remove('active'));
            
            // 添加当前活动状态
            this.classList.add('active');
            
            // 平滑滚动到目标区域
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 下载按钮点击事件
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 添加点击动画
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // 获取平台信息
            const platform = this.getAttribute('data-platform');
            
            // 使用统一的下载处理函数
            handleDownload(platform);
        });
    });

    // 截图卡片点击事件
    const screenshotCards = document.querySelectorAll('.screenshot-card');
    screenshotCards.forEach(card => {
        card.addEventListener('click', function() {
            // 添加点击动画效果
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px)';
            }, 150);
            
            // 这里可以添加图片预览功能
            const img = this.querySelector('img');
            // 查看截图: img.alt
        });
    });

    // 功能卡片悬停效果
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 用户评价卡片悬停效果
    const reviewCards = document.querySelectorAll('.review-card');
    reviewCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 添加页面加载动画 (排除截图卡片)
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .review-card, .download-content');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // 初始化动画 (排除截图卡片，避免影响显示)
    document.querySelectorAll('.feature-card, .review-card, .download-content').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // 截图卡片单独处理，确保始终可见
    document.querySelectorAll('.screenshot-card').forEach(element => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        element.style.transition = 'transform 0.3s ease';
    });

    // 监听滚动事件
    window.addEventListener('scroll', animateOnScroll);
    
    // 初始触发一次
    animateOnScroll();

    // 导航栏活动状态更新
    const updateActiveNav = function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };

    // 监听滚动更新导航状态
    window.addEventListener('scroll', updateActiveNav);

    // 添加键盘导航支持
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // ESC键关闭任何打开的模态框
            // 关闭模态框
        }
        
        // 方向键导航
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
            e.preventDefault();
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        }
        
        if (e.key === 'ArrowUp' || e.key === 'PageUp') {
            e.preventDefault();
            window.scrollBy({
                top: -window.innerHeight,
                behavior: 'smooth'
            });
        }
    });

    // 添加触摸设备支持
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
        
        // 为触摸设备添加特殊处理
        const touchElements = document.querySelectorAll('.download-btn, .screenshot-card, .feature-card');
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            element.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });
    }

    // 添加页面可见性API支持
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // 页面隐藏
        } else {
            // 页面显示
        }
    });

    // 添加性能监控
    window.addEventListener('load', function() {
        // 页面加载性能监控
        // setTimeout(() => {
        //     console.log('页面加载完成时间:', performance.now());
        // }, 0);
    });

    // 添加错误处理
    window.addEventListener('error', function(e) {
        console.error('页面错误:', e.error);
    });

    // 初始化移动端菜单功能
    initializeMobileMenu();
    
    // 初始化平台切换功能
    initializePlatformTabs();
    
    // 初始化版本信息
    initializeVersionInfo();
    
    // 初始化用户评价滚动
    initializeReviews();
    
    // 云视频APP介绍页面已加载完成
});

// 移动端菜单切换函数
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

// 移动端菜单功能 - 合并到主DOMContentLoaded中
function initializeMobileMenu() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // 在移动端点击链接后关闭菜单
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });
    
    // 点击页面其他区域关闭移动端菜单
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-container') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
    
    // 窗口大小改变时处理菜单状态
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
    
    // 显示欢迎消息
    setTimeout(() => {
        // 欢迎来到云视频APP介绍页面
    }, 1000);

    // 轮播图功能
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;

    // 显示指定幻灯片
    function showSlide(index) {
        // 隐藏所有幻灯片
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // 显示当前幻灯片
        if (slides[index]) {
            slides[index].classList.add('active');
        }
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    }

    // 下一张幻灯片
    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
        showSlide(currentSlideIndex);
    }

    // 上一张幻灯片
    function prevSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentSlideIndex);
    }

    // 跳转到指定幻灯片
    function goToSlide(index) {
        currentSlideIndex = index - 1;
        showSlide(currentSlideIndex);
    }

    // 自动播放
    let autoPlayInterval;
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 3000); // 每3秒切换一次
    }

    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }

    // 鼠标悬停时暂停自动播放
    const carousel = document.querySelector('.hero-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
    }

    // 确保第一张图片显示
    showSlide(0);
    
    // 开始自动播放
    startAutoPlay();

    // 将函数暴露到全局作用域，供HTML中的onclick调用
    window.changeSlide = function(direction) {
        if (direction > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    };

    window.currentSlide = function(index) {
        goToSlide(index);
    };
    
    // 移动端优化：防止iOS Safari地址栏隐藏时的高度问题
    function updateViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    updateViewportHeight();
    window.addEventListener('resize', updateViewportHeight);
    window.addEventListener('orientationchange', function() {
        setTimeout(updateViewportHeight, 500); // 延迟更新，等待旋转完成
    });
    
    // 移动端滑动优化
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.changedTouches[0].screenY;
    });
    
    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;
        
        // 向上滑动，滚动到下一个section
        if (diff > swipeThreshold) {
            const sections = document.querySelectorAll('section[id]');
            const currentScrollTop = window.scrollY;
            
            for (let i = 0; i < sections.length; i++) {
                if (sections[i].offsetTop > currentScrollTop + 100) {
                    sections[i].scrollIntoView({ behavior: 'smooth' });
                    break;
                }
            }
        }
        
        // 向下滑动，滚动到上一个section
        if (diff < -swipeThreshold) {
            const sections = document.querySelectorAll('section[id]');
            const currentScrollTop = window.scrollY;
            
            for (let i = sections.length - 1; i >= 0; i--) {
                if (sections[i].offsetTop < currentScrollTop - 100) {
                    sections[i].scrollIntoView({ behavior: 'smooth' });
                    break;
                }
            }
        }
    }
    
    // 移动端图片懒加载优化 (排除轮播图和截图区域)
    const images = document.querySelectorAll('img:not(.carousel-slide img):not(.screenshot-card img)');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // 检查是否是轮播图或截图中的图片，如果是则跳过
                if (img.closest('.carousel-slide') || img.closest('.screenshot-card')) {
                    observer.unobserve(img);
                    return;
                }
                
                // 检查图片是否已经加载完成
                if (img.complete && img.naturalWidth > 0) {
                    img.style.opacity = '1';
                } else {
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.3s ease';
                    img.onload = () => {
                        img.style.opacity = '1';
                    };
                }
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        // 只对非轮播图和非截图图片应用懒加载
        if (!img.closest('.carousel-slide') && !img.closest('.screenshot-card')) {
            imageObserver.observe(img);
        }
    });
    
    // 移动端性能优化：减少动画频率
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // 重置动画状态 (排除截图卡片)
            const animatedElements = document.querySelectorAll('.feature-card, .review-card');
            animatedElements.forEach(element => {
                element.style.transform = 'translateY(30px)';
                element.style.opacity = '0';
            });
            
            // 确保截图卡片始终可见
            document.querySelectorAll('.screenshot-card').forEach(element => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            });
            
            // 重新触发动画
            setTimeout(animateOnScroll, 100);
        }, 250);
    });
}

// 平台切换功能
function initializePlatformTabs() {
    const platformTabs = document.querySelectorAll('.platform-tab');
    const platformContents = document.querySelectorAll('.platform-content');
    
    platformTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetPlatform = this.getAttribute('data-platform');
            
            // 移除所有活动状态
            platformTabs.forEach(t => t.classList.remove('active'));
            platformContents.forEach(c => c.classList.remove('active'));
            
            // 添加当前活动状态
            this.classList.add('active');
            
            // 显示对应的内容
            const targetContent = document.getElementById(targetPlatform + '-content');
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// 版本信息初始化函数
function initializeVersionInfo() {
    // 更新所有版本信息显示
    const versionElements = document.querySelectorAll('[data-version]');
    versionElements.forEach(element => {
        const platform = element.getAttribute('data-version');
        const platformInfo = getPlatformInfo(platform);
        
        if (platformInfo) {
            if (platformInfo.status === 'available') {
                element.textContent = platformInfo.version;
            } else if (platformInfo.status === 'coming-soon') {
                element.textContent = '即将上线';
            } else {
                element.textContent = '维护中';
            }
        }
    });
    
    // 更新应用信息区域
    updateAppInfo();
}

// 更新应用信息区域
function updateAppInfo() {
    const androidTvInfo = getPlatformInfo('android-tv');
    if (androidTvInfo && androidTvInfo.status === 'available') {
        // 可以在这里更新应用信息，比如下载量等
        console.log('Android TV版本可用:', androidTvInfo.version);
    }
}

// 用户评价数据
const reviewsData = [
    {
        name: "Alex小明",
        rating: 5,
        content: "界面设计很现代化，操作流畅不卡顿，视频加载速度超快，强烈推荐！",
        gender: "male"
    },
    {
        name: "Rain小雨",
        rating: 5,
        content: "资源更新速度很快，新剧第一时间就能看到，追剧党的福音！",
        gender: "female"
    },
    {
        name: "强哥",
        rating: 4,
        content: "操作简单，遥控器控制很流畅，大屏观看效果震撼，家庭影院首选！",
        gender: "male"
    },
    {
        name: "Beauty",
        rating: 5,
        content: "画质超清晰，4K播放毫无压力，而且完全无广告，体验太棒了！",
        gender: "female"
    },
    {
        name: "Hua华哥",
        rating: 5,
        content: "支持格式很多，字幕功能很实用，多语言切换很方便，强烈推荐！",
        gender: "male"
    },
    {
        name: "Tina",
        rating: 4,
        content: "投屏功能很强大，手机上的视频可以直接投到电视上，太方便了！",
        gender: "female"
    },
    {
        name: "Yuan小远",
        rating: 5,
        content: "海量资源库，电影、电视剧、动漫应有尽有，再也不用到处找资源了！",
        gender: "male"
    },
    {
        name: "Min敏敏",
        rating: 5,
        content: "界面简洁美观，分类清晰，找视频很容易，用户体验很棒！",
        gender: "female"
    },
    {
        name: "David大伟",
        rating: 4,
        content: "播放器很稳定，不会卡顿，快进快退响应很快，看剧体验很好！",
        gender: "male"
    },
    {
        name: "Fang",
        rating: 5,
        content: "字幕功能很强大，支持多语言切换，看外语片再也不怕听不懂了！",
        gender: "female"
    }
];

// 用户评价滚动功能
function initializeReviews() {
    const reviewsContainer = document.getElementById('reviews-container');
    if (!reviewsContainer) {
        console.log('用户评价容器未找到');
        return;
    }
    
    console.log('用户评价滚动功能已初始化');
    
    let currentIndex = 0;
    let isAnimating = false;
    
    // 创建评价卡片
    function createReviewCard(review) {
        const stars = Array.from({length: 5}, (_, i) => 
            i < review.rating ? 'fas fa-star' : 'far fa-star'
        ).map(starClass => `<i class="${starClass}"></i>`).join('');
        
        // 根据性别选择卡通风格默认头像
        const avatarUrl = review.gender === 'male' 
            ? 'https://cdn-icons-png.flaticon.com/512/921/921071.png'  // 男性卡通头像
            : 'https://cdn-icons-png.flaticon.com/512/921/921124.png'; // 女性卡通头像
        
        return `
            <div class="review-card">
                <div class="review-header">
                    <div class="user-info">
                        <img src="${avatarUrl}" alt="用户头像">
                        <div>
                            <h4>${review.name}</h4>
                            <div class="stars">
                                ${stars}
                            </div>
                        </div>
                    </div>
                </div>
                <p>"${review.content}"</p>
            </div>
        `;
    }
    
    // 添加单个新评价到右侧
    function addNewReview(reviewIndex) {
        if (isAnimating) return;
        isAnimating = true;
        
        console.log('开始添加新评价，索引:', reviewIndex);
        
        // 获取当前容器引用
        const currentContainer = window.currentReviewsContainer || reviewsContainer;
        
        // 获取当前所有评价卡片
        const currentCards = currentContainer.querySelectorAll('.review-card');
        
        // 创建新的评价卡片元素
        const newReviewData = reviewsData[reviewIndex % reviewsData.length];
        const newReviewElement = document.createElement('div');
        newReviewElement.className = 'review-card';
        // 生成星级评分
        const stars = Array.from({length: 5}, (_, i) => 
            i < newReviewData.rating ? 'fas fa-star' : 'far fa-star'
        ).map(starClass => `<i class="${starClass}"></i>`).join('');
        
        // 根据性别选择卡通风格默认头像
        const avatarUrl = newReviewData.gender === 'male' 
            ? 'https://cdn-icons-png.flaticon.com/512/921/921071.png'  // 男性卡通头像
            : 'https://cdn-icons-png.flaticon.com/512/921/921124.png'; // 女性卡通头像
        
        newReviewElement.innerHTML = `
            <div class="review-header">
                <div class="user-info">
                    <img src="${avatarUrl}" alt="用户头像">
                    <div>
                        <h4>${newReviewData.name}</h4>
                        <div class="stars">
                            ${stars}
                        </div>
                    </div>
                </div>
            </div>
            <p>"${newReviewData.content}"</p>
        `;
        
        // 设置新评价的初始位置（在右侧外面）
        newReviewElement.style.cssText = `
            position: absolute;
            top: 0;
            left: 100%;
            width: calc(33.333% - 1.33rem);
            transition: transform 0.6s ease-in-out;
            transform: translateX(0);
            z-index: 10;
        `;
        
        // 设置容器为相对定位
        currentContainer.style.position = 'relative';
        currentContainer.style.overflow = 'hidden';
        
        // 添加新评价到容器
        currentContainer.appendChild(newReviewElement);
        
        // 开始动画：所有现有卡片向左移动，新卡片从右侧进入
        setTimeout(() => {
            // 移动所有现有卡片向左
            currentCards.forEach((card, index) => {
                card.style.transition = 'transform 0.6s ease-in-out';
                card.style.transform = `translateX(-${(index + 1) * 100}%)`;
            });
            
            // 新卡片从右侧滑入
            newReviewElement.style.transform = 'translateX(-300%)';
        }, 50);
        
        // 动画完成后清理
        setTimeout(() => {
            // 移除最左侧的卡片（如果超过3个）
            if (currentCards.length >= 3) {
                currentContainer.removeChild(currentCards[0]);
            }
            
            // 重置所有卡片的位置和样式
            const allCards = currentContainer.querySelectorAll('.review-card');
            allCards.forEach((card) => {
                card.style.position = 'static';
                card.style.left = 'auto';
                card.style.width = 'auto';
                card.style.transform = 'none';
                card.style.transition = 'none';
                card.style.zIndex = 'auto';
            });
            
            isAnimating = false;
            console.log('单个评价滚动完成');
        }, 600);
    }
    
    // 显示指定索引的评价
    function showReviews(startIndex) {
        if (startIndex === 0) {
            // 初始化显示3个评价
            const currentContainer = window.currentReviewsContainer || reviewsContainer;
            const reviewsToShow = [];
            for (let i = 0; i < 3; i++) {
                const index = i % reviewsData.length;
                reviewsToShow.push(createReviewCard(reviewsData[index]));
            }
            currentContainer.innerHTML = reviewsToShow.join('');
            console.log('初始化显示3个评价');
        } else {
            // 添加单个新评价
            addNewReview(startIndex + 2); // +2 因为要显示第4个评价
        }
    }
    
    // 自动滚动
    function autoScroll() {
        console.log('autoScroll 被调用');
        
        // 获取当前容器引用
        const currentContainer = window.currentReviewsContainer || reviewsContainer;
        console.log('当前容器:', currentContainer);
        console.log('容器暂停状态:', currentContainer.dataset.paused);
        
        // 检查是否被暂停
        if (currentContainer.dataset.paused === 'true') {
            console.log('滚动被暂停，1秒后重试');
            // 如果被暂停，延迟检查
            setTimeout(autoScroll, 1000);
            return;
        }
        
        currentIndex = (currentIndex + 1) % reviewsData.length;
        console.log('切换到评价索引:', currentIndex);
        showReviews(currentIndex);
        
        // 随机间隔时间 3-8秒
        const nextDelay = Math.random() * 5000 + 3000; // 3000-8000ms
        console.log('下次切换时间:', nextDelay + 'ms');
        setTimeout(autoScroll, nextDelay);
    }
    
    // 初始化显示
    showReviews(0);
    
    // 开始自动滚动 - 缩短初始延迟用于测试
    console.log('3秒后开始自动滚动');
    setTimeout(() => {
        console.log('开始自动滚动');
        autoScroll();
    }, 3000);
    
    // 鼠标悬停时暂停自动滚动
    reviewsContainer.addEventListener('mouseenter', () => {
        reviewsContainer.dataset.paused = 'true';
        console.log('鼠标进入，暂停滚动');
    });
    
    reviewsContainer.addEventListener('mouseleave', () => {
        reviewsContainer.dataset.paused = 'false';
        console.log('鼠标离开，恢复滚动');
    });
    
    // 初始化全局容器引用
    window.currentReviewsContainer = reviewsContainer;
    console.log('用户评价滚动功能已初始化');
}

// 在主DOMContentLoaded中调用移动端菜单初始化
