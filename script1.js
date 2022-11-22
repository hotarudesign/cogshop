// ドロップダウンメニュー
function mediaQueriesWin() {
    var width = $(window).width();
    if(width <= 768){ //横幅が768px以下の場合
        // has-childクラスがついたaタグのonイベントを複数登録を避けるため
        // offにして一旦初期状態へ
        $(".appsItemCategoryTag_child>a").off('click');
        // has-childクラスがついたaタグをクリックしたら
        $(".appsItemCategoryTag_child>a").on('click', function(){
        // aタグから見た親要素の<li>を取得し
        var parentElem = $(this).parent();
        // 矢印方向を変えるためのクラス名を付与して
        $(parentElem).toggleClass('active');
        // liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
        $(parentElem).children('ul').stop().sliderToggle(500);
        return false;//リンクの無効化
        });
    }else{//横幅が768px以下の場合
        // has-childクラスがついたaタグのonイベントをoff(無効)にし
        $(".appsItemCategoryTag_child>a").off('click');
        $(".appsItemCategoryTag_child>a").removeClass('active'); //activeクラスを削除
        // スライドトグルで動作したdisplayも無効化にする
        $(".appsItemCategoryTag_child").children('ul').css("display","");
    }
}

// ページがリサイズされたら動かしたい場合の記述
$(window).resize(function() {
    mediaQueriesWin(); /*ドロップダウンの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
    mediaQueriesWin();
});