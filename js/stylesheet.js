$(function () {
  $('.bxslider').bxSlider({
    auto: true, // 自動でスライドショーをスタートさせる　（初期値: false）
    mode: 'fade', // アニメーションの種類「'horizontal'」「'vertical'」「'fade'」　（初期値: 'horizontal'）
    speed: 500, // アニメーションのスピード　（初期値: 500）
    pause: 4000, // 画像の切り替わる間隔　（初期値: 4000）
    pager: false, // 下部にある画像切り替えボタンの表示・非表示　（初期値: true）
    controls: false // 左右の矢印の表示・非表示　（初期値: true）
  });


  $('header nav ul li a').hover(
    function () {

      //マウスカーソルが重なった時の処理
      $(this).css('font-size', '30px');

    },
    function () {

      //マウスカーソルが離れた時の処理
      $(this).css('font-size', '24px');

    },


  )





});