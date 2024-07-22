// ///////fv ヘッダー追従///////
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header-wrapper');
  const headerHeight = header.offsetHeight; // ヘッダーの高さを取得
  const scrollY = window.pageYOffset;

  if (scrollY >= 96) {
    header.classList.add('header-wrapper--sticky');
    document.body.style.marginTop = '118px'; // コンテンツにヘッダーの高さ分の余白を設定
  } else {
    header.classList.remove('header-wrapper--sticky');
    document.body.style.marginTop = '0'; // コンテンツの余白をリセット
  }


});

///ハンバーガー/////
// ドキュメント読み込み完了時に実行する処理
$(function () {
  // ハンバーガーアイコンがクリックされたとき、toggleHamburgerMenu関数を実行する
  $('#js-hamburger').click(toggleHamburgerMenu);

  // メニュー内の各リンクがクリックされたとき、toggleHamburgerMenu関数を実行する
  // これにより、メニューリンクをクリックしたときにハンバーガーメニューが閉じられる
  $('#js-global-menu a').click(toggleHamburgerMenu);

  // ハンバーガーメニューを開閉する関数
  function toggleHamburgerMenu() {
    // body要素に'is-drawerActive'クラスを追加/削除する
    // このクラスの有無でハンバーガーメニューの開閉状態をCSSでスタイル指定する場合が多い
    $('body').toggleClass('is-drawerActive');

    // ハンバーガーアイコンのaria-expanded属性の値をチェック
    if ($('#js-hamburger').attr('aria-expanded') == 'false') {
      // メニューが閉じている場合、開く処理を実行
      $('#js-hamburger').attr('aria-expanded', true);
      $('#js-global-menu').css('visibility', 'visible');
      $('#js-global-menu').attr('aria-hidden', 'false');
      $('body').css('overflow', 'hidden');


    } else {
      // メニューが開いている場合、閉じる処理を実行
      $('#js-hamburger').attr('aria-expanded', false);
      $('#js-global-menu').css('visibility', 'hidden');
      $('#js-global-menu').attr('aria-hidden', 'true');
      $('body').css('overflow', 'scroll');

    }
  }
});

// ここからスムーススクロールの処理（LPの場合など）
$(function () {
  // href属性が"#"で始まるaタグがクリックされたときの処理
  $('a[href^="#"]').click(function () {
    // クリックされたaタグのhref属性の値を取得
    var href = $(this).attr("href");
    // 対象の要素を特定（hrefが"#"または空文字の場合はhtml要素をターゲットとする）
    var target = $(href == "#" || href == "" ? 'html' : href);
    // ターゲットの位置（トップからの距離）を取得
    var position = target.offset().top;
    // スムーズスクロールの速度を定義
    var speed = 500;

    // スムーズスクロールのアニメーション
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");

    // aタグのデフォルトの動作（ページ遷移など）をキャンセル
    return false;
  });
});





/////slick セカンドビュースライダー////


$(function () {
  $('.sv-slider').slick({
    autoplay: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '30.07%',

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '25%'
        },
        breakpoint: 550,
        settings: {
          centerPadding: '9.6%'
        }
      },
    ]

  });
});




/////slickメンバースライダー////
$(function () {
  $('.member-slider').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
    appendArrows: $('.arrow_box'),
    prevArrow: '<div class="slide-arrow prev-arrow"><img src="images/arrow-2.png" alt="prev"></div>',
    nextArrow: '<div class="slide-arrow next-arrow"><img src="images/arrow-2.png" alt="next"></div>',
    responsive: [
      {
        breakpoint: 960,
        settings: {
          arrows: false,
        },
        breakpoint: 550,
        settings: {
          arrows: false,
        }
      },
    ]

  });

});

// //アコーディオン////
$(function () {
  $('.jsAccordionTitle').on('click', function () {
    //nextは次の要素を取得する、今回はクリック要素の次の要素にis-showクラスをつけている
    $(this).next().toggleClass('is-open');
    //クリックした要素自体にもclass付与
    $(this).toggleClass('is-active');
  });
});




