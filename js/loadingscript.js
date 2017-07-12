
$(function()
{
	$( 'img.lazy' ).lazyload( {
		threshold : 200 ,
		effect : 'fadeIn' ,
		effect_speed: 500 ,
		failure_limit: 4 ,
	} ) ;
	$('nav.menu').meanmenu({
		meanMenuClose: "x",
		meanMenuCloseSize: "18px", // クローズボタンのフォントサイズ
		meanRevealPosition: "right", // 表示位置
		meanScreenWidth: "480", // 表示させるウィンドウサイズ(ブレイクポイント)
		
	});
} ) ;
