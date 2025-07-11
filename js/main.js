document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    (function($) {

    /*=================================================
    section-titleのアニメーション (Intersection Observer)
    ===================================================*/
    const sectionTitles = document.querySelectorAll('.section-title');
    const sectionTitleObserverOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const sectionTitleObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, sectionTitleObserverOptions);
    sectionTitles.forEach(title => { sectionTitleObserver.observe(title); });


    /*=================================================
    #lead .lead-title のアニメーション (Intersection Observer)
    ===================================================*/
    const leadTitle = document.querySelector('#lead .lead-title');
    if (leadTitle) {
        const leadTitleObserverOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2,
        };

        const leadTitleObserverCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('text-reveal-active');
                    observer.unobserve(entry.target);
                }
            });
        };

        const leadTitleObserver = new IntersectionObserver(leadTitleObserverCallback, leadTitleObserverOptions);
        leadTitleObserver.observe(leadTitle);
    }

    /*=================================================
    #lead .lead-description の行ごとのフェードインアニメーション (Intersection Observer)
    ===================================================*/
    const leadDescription = document.querySelector('#lead .lead-description');
    if (leadDescription) {
        const observerOptionsLeadText = { root: null, rootMargin: '0px', threshold: 0.5 };
        const observerCallbackLeadText = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        };
        const leadDescriptionObserver = new IntersectionObserver(observerCallbackLeadText, observerOptionsLeadText);
        leadDescriptionObserver.observe(leadDescription);
    }

        /*=================================================
        ハンバーガーメニュー
        ===================================================*/
        const $header = $("#header");
        const $toggleBtn = $(".hamburger");
        const $mask = $(".mask");
        const $navLinks = $(".navigation-list a");

        $toggleBtn.on("click", function () {
            const isOpen = $header.toggleClass("open").hasClass("open");
            $(this).attr("aria-expanded", isOpen);
        });
        $mask.on("click", function () {
            $header.removeClass("open");
            $toggleBtn.attr("aria-expanded", false);
        });
        $navLinks.on("click", function () {
            $header.removeClass("open");
            $toggleBtn.attr("aria-expanded", false);
        });

        /*=================================================
    top-feature-item のスライドインアニメーション (Intersection Observer)
    ===================================================*/
    const slideInItems = document.querySelectorAll('.top-feature-item.slidein');
    const slideInObserverOptions = { root: null, rootMargin: '0px', threshold: 0.2 };
    const slideInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slidein-active');
                observer.unobserve(entry.target);
            }
        });
    }, slideInObserverOptions);
    slideInItems.forEach(item => { slideInObserver.observe(item); });

    /*=================================================
    #dailyセクション の .event-card アニメーション (Intersection Observer)
    ===================================================*/
    const eventCardsDaily = document.querySelectorAll('.event-card');
    
    const dailyObserverOptionsDaily = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4
    };
    
    const dailyObserverCallbackDaily = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    };
    
    const dailyObserverDaily = new IntersectionObserver(dailyObserverCallbackDaily, dailyObserverOptionsDaily);

    eventCardsDaily.forEach(card => {
        dailyObserverDaily.observe(card);
    });


        /*=================================================
        Slickカルーセルの初期化
        ===================================================*/
        $(".events-slide").slick({
            arrows: false,
            centerMode: true,
            autoplay: true, 
            autoplaySpeed: 1000,
            variableWidth: true, 
            infinite: true,
            responsive: [
                { 
                    breakpoint: 768, 
                    settings: { 
                        slidesToShow: 2, 
                        centerPadding: "50px",
                        variableWidth: true 
                    } 
                },
                         { 
                            breakpoint: 576, 
                            settings: { 
                                slidesToShow: 1, 
                                variableWidth: true 
                            } 
                        }
                    ],
        });
    })(jQuery);


    /*=================================================
    #support セクションの画像スクロールインアニメーション (Intersection Observer)
    ===================================================*/
    const supportImageContainer = document.querySelector('#support .img-wrap-container.anim-target');
    if (supportImageContainer) {
        const supportImageObserverOptions = { 
            root: null, 
            rootMargin: '0px', 
            threshold: 0.2 
        };
        const supportImageObserverCallback = (entries, observer) => {
            entries.forEach(entry => { 
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        };
        const imageObserver = new IntersectionObserver(supportImageObserverCallback, supportImageObserverOptions);
        imageObserver.observe(supportImageContainer);
    }


    /*=================================================
    #support セクションのテキストフェードインアニメーション (Intersection Observer)
    ===================================================*/
    const supportText = document.querySelector('#support .support-text');
    if (supportText) {
        const supportTextObserverOptions = { 
            root: null, 
            rootMargin: '0px', 
            threshold: 0.3 
        };
        const supportTextObserverCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        };
        const textObserver = new IntersectionObserver(supportTextObserverCallback, supportTextObserverOptions);
        textObserver.observe(supportText);
    }

    /*=================================================
    about-feature-item のInviewアニメーション (Intersection Observer)
    ===================================================*/
    const aboutFeatureItems = document.querySelectorAll('.about-feature-item'); 
    const aboutFeatureObserverOptions = { 
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const aboutFeatureObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view'); 
                observer.unobserve(entry.target);
            }
        });
    };

    const aboutFeatureObserver = new IntersectionObserver(aboutFeatureObserverCallback, aboutFeatureObserverOptions);
    aboutFeatureItems.forEach(item => {
        aboutFeatureObserver.observe(item);
    });


    /*=================================================
    #slogan zoomInアニメーション (Intersection Observer)
    ===================================================*/
    const sloganItems = document.querySelectorAll('.slogan-item');
    const sloganObserverOptions = { root: null, rootMargin: '0px', threshold: 0.2 };
    const sloganObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(sloganItems).indexOf(entry.target);
                const delay = index * 500;
                setTimeout(() => { entry.target.classList.add('zoomin', 'is-animated'); }, delay);
                observer.unobserve(entry.target);
            }
        });
    };
    const sloganObserver = new IntersectionObserver(sloganObserverCallback, sloganObserverOptions);
    sloganItems.forEach(item => {
        item.classList.add('zoomin');
        sloganObserver.observe(item);
    });

/*=================================================
ローディング画面とメインビジュアルの表示制御（GSAP）
===================================================*/
const bodyElement = document.body;
const loadingScreen = document.getElementById('loading-screen');
const siteLogo = document.getElementById('site-logo');
const mainvisual = document.getElementById('mainvisual');

// ページのハッシュ（#以降の部分）を取得
const hash = window.location.hash; // この行は維持します。

// ローディングアニメーションの全体の時間（秒）
const loadingDuration = 5; // 全体は5秒のまま（この中にロゴの待機時間を含める）

// 各デバイスのブレークポイントを定義 (CSSのメディアクエリと合わせることを推奨)
const SP_BREAKPOINT = 576;   // スマートフォン向け最大幅
const TAB_BREAKPOINT = 768;  // タブレット向け最大幅
const SMALL_PC_BREAKPOINT = 960; // 小型PC/大型タブレット向け最大幅

// 現在の画面幅に応じてロゴサイズを設定
let finalLogoSize;
let initialLoadingLogoSize;

if (window.innerWidth <= SP_BREAKPOINT) {
    // スマートフォン表示の場合 (例: 0px 〜 576px)
    finalLogoSize = 80;   // SP時の最終的なロゴの幅 (例: 80px)
    initialLoadingLogoSize = 150; // SP時のローディング中のロゴの初期幅 (例: 150px)
} else if (window.innerWidth <= TAB_BREAKPOINT) {
    // タブレット表示の場合 (例: 577px 〜 768px)
    finalLogoSize = 120;  // タブレット時の最終的なロゴの幅 (例: 120px)
    initialLoadingLogoSize = 200; // タブレット時のローディング中のロゴの初期幅 (例: 200px)
} else if (window.innerWidth <= SMALL_PC_BREAKPOINT) {
    // 小型PC/大型タブレット表示の場合 (例: 769px 〜 960px)
    finalLogoSize = 150;  // 小型PC時の最終的なロゴの幅 (例: 150px)
    initialLoadingLogoSize = 250; // 小型PC時のローディング中のロゴの初期幅 (例: 250px)
} else {
    // PC表示の場合 (例: 961px 以上)
    finalLogoSize = 200;  // PC時の最終的なロゴの幅 (元の200px)
    initialLoadingLogoSize = 300; // PC時のローディング中のロゴの初期幅 (元の300px)
}

// 必須要素が存在しない、またはアンカーリンクでのアクセスの場合、アニメーションをスキップ
if (!loadingScreen || !siteLogo || !mainvisual || hash) { // '|| hash' は維持し、アンカーリンクでスキップ
    console.log("ローディングアニメーションをスキップします。URLにハッシュが含まれているか、必須要素が見つかりません。"); // デバッグ用

    // ローディング画面を即座に非表示にする
    if (loadingScreen) {
        gsap.set(loadingScreen, { display: 'none', pointerEvents: 'none' });
    }
    
    // ロゴを即座に表示し、mainvisualに移動させる（もし存在すれば）
    if (siteLogo) {
        // スキップ時も最終サイズで表示したい場合
        gsap.set(siteLogo, {
            width: finalLogoSize,
            opacity: 1,
            visibility: 'visible',
            position: 'absolute', // mainvisualにappendされることを想定
            top: '50%',
            left: '50%',
            xPercent: -50,
            yPercent: -50,
            display: 'block'
        });
        // もしmainvisual内にロゴを移動させたい場合は、ここでappend
        if (mainvisual && !mainvisual.contains(siteLogo)) {
            mainvisual.appendChild(siteLogo);
        }
    }
    
    // メインビジュアルを即座に表示する
    if (mainvisual) {
        gsap.set(mainvisual, { opacity: 1, visibility: 'visible' });
    }

    // bodyのクラスを調整して、スクロール可能にする
    bodyElement.classList.remove('loading-active'); // bodyにoverflow:hidden;などがあれば解除
    bodyElement.classList.add('loading-complete');
    ScrollTrigger.refresh(); // スクロールトリガーをリフレッシュ

    return; // これ以降のGSAPタイムラインは実行されない
}

// --- 通常のローディングアニメーション ---

// ロゴの初期位置を設定 (ローディングアニメーション開始時に中央に固定表示)
gsap.set(siteLogo, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    xPercent: -50,
    yPercent: -50,
    width: initialLoadingLogoSize,
    opacity: 0,
    visibility: 'hidden'
});

// mainvisualの初期設定
gsap.set(mainvisual, { opacity: 0, visibility: 'hidden' });

const tl = gsap.timeline({
    defaults: { ease: "power2.out" },
    onStart: () => {
        gsap.set(siteLogo, { opacity: 1, visibility: 'visible' }); // ロゴを最初に表示
    },
    onComplete: () => {
        console.log("ローディングアニメーション完了");
        gsap.set(loadingScreen, { display: 'none', pointerEvents: 'none' });
        bodyElement.classList.remove('loading-active');
        bodyElement.classList.add('loading-complete');
        ScrollTrigger.refresh();
    }
});

// Step 1: ロゴの縮小アニメーション（画面中央で）
const logoShrinkDuration = 2.0;
const logoStayDuration = 0.5;
tl.to(siteLogo, {
    width: finalLogoSize,
    duration: logoShrinkDuration,
    ease: "power2.inOut"
}, 0);

// Step 2: 縮小されたロゴが静止している間に、ローディング画面とメインビジュアルを制御
// ローディング画面のフェードアウトとメインビジュアルのフェードインは、
// ロゴの縮小が完了し、指定の待機時間が経過した後に開始
const fadeStartTime = logoShrinkDuration + logoStayDuration;
const fadeDuration = 1.0;

tl.to(loadingScreen, {
    opacity: 0,
    visibility: 'hidden',
    duration: fadeDuration,
    ease: "power2.out"
}, fadeStartTime);

tl.fromTo(mainvisual, {
    opacity: 0,
    visibility: 'hidden'
}, {
    opacity: 1,
    visibility: 'visible',
    duration: fadeDuration,
    ease: "power2.inOut"
}, fadeStartTime);

// Step 3: ロゴをmainvisual内に移動させる
// ローディング画面がフェードアウトし、mainvisualがフェードインし始めるタイミングで移動
tl.add(() => {
    if (mainvisual && siteLogo && !mainvisual.contains(siteLogo)) {
        mainvisual.appendChild(siteLogo);
        gsap.set(siteLogo, {
            position: 'absolute',
            top: '50%',
            left: '50%',
            xPercent: -50,
            yPercent: -50,
            width: finalLogoSize,
            opacity: 1,
            visibility: 'visible',
            display: 'block'
        });
    }
}, fadeStartTime);

// Step 4: スクロール時にメインビジュアルのロゴをフェードアウトさせる
tl.add(() => {

}, ">");

});