
$(function()
{
	$( 'img.lazy' ).lazyload( {
		threshold : 200 ,
		effect : 'fadeIn' ,
		effect_speed: 500 ,
		failure_limit: 4 ,
	} ) ;
	$('nav.menu').meanmenu({
		meanMenuClose: "X",
		meanMenuCloseSize: "18px", // クローズボタンのフォントサイズ
		meanRevealPosition: "right", // 表示位置
		meanScreenWidth: "480", // 表示させるウィンドウサイズ(ブレイクポイント)
		
	});


} ) ;

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-102801610-1', 'auto');
ga('send', 'pageview');





