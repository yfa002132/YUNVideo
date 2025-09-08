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
            
            // 根据按钮类型执行不同操作
            if (this.classList.contains('primary')) {
                // Android TV 下载确认
                // 显示确认对话框
                if (confirm('确定开启下载？点击确定立即下载云视频APP')) {
                    // 用户点击确定后开始下载
                    const link = document.createElement('a');
                    link.href = 'https://ghfast.top/https://github.com/yfa002132/YUNVideo/releases/download/v1.0.2/app-release.apk';
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                    link.click();
                }
            } else if (this.classList.contains('secondary')) {
                // 其它平台按钮点击（暂未开放）
                // 不执行任何操作，只保留点击动画效果
            } else if (this.classList.contains('apk')) {
                // Android TV APK下载确认
                // 显示确认对话框
                if (confirm('确定开启下载？点击确定立即下载云视频APP')) {
                    // 用户点击确定后开始下载
                    const link = document.createElement('a');
                    link.href = 'https://ghfast.top/https://github.com/yfa002132/YUNVideo/releases/download/v1.0.2/app-release.apk';
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                    link.click();
                }
            }
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

// 在主DOMContentLoaded中调用移动端菜单初始化
