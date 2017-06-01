
$(function()
{
	$( 'img.lazy' ).lazyload( {
		threshold : 1 ,
		effect : 'fadeIn' ,
		effect_speed: 800 ,
		failure_limit: 1 ,
	} ) ;
	$('nav.menu').meanmenu({
		meanMenuClose: "x",
		meanMenuCloseSize: "18px", // クローズボタンのフォントサイズ
		meanRevealPosition: "right", // 表示位置
		meanScreenWidth: "480", // 表示させるウィンドウサイズ(ブレイクポイント)
		
	});
} ) ;