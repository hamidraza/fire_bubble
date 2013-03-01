var gm = {
	direction:'left',
	ele:$('.wrap'),
	shootBubble:function(){
		var bbl = $('<div></div>',{
			'class':'bbl',
			'css':{
				'position':'absolute',
				'bottom':35,
				'height':5,
				'width':5,
				'border-radius':'100%',
				'background':'#333'
			}
		});
		$('.wrap').append(bbl);
		if(gm.direction=='left'){
			bbl.css({
				'left':300
			});
			bbl.stop(true, true).animate({
				'left':0
			},'',function(){
				$(this).remove();
			});
		}else{
			bbl.css({
				'right':300
			});
			bbl.stop(true, true).animate({
				'right':0
			},'',function(){
				$(this).remove();
			});
		}
	}
}
$(function(){
	$(document).on('keypress', function(e){
		if(e.keyCode==32){
			gm.shootBubble();
			return false;
		}
		if(e.keyCode==97){
			gm.direction = 'left';
			return false;
		}
		if(e.keyCode==100){
			gm.direction = 'right';
			return false;
		}
		
	});
});