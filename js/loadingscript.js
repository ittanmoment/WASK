
$(function()
{
	$( 'img.lazy' ).lazyload( {
		threshold : 1 ,
		effect : 'fadeIn' ,
		effect_speed: 800 ,
		failure_limit: 1 ,
	} ) ;
} ) ;