
var click_index=0;


function add_click_index(){
  click_index+=1;
  if(click_index==4){
     click_index=0;
     };
  $(".page").css("left","-"+click_index*100+"%");
  $(".page"+click_index+1).css("opacity","1");

};

 
function minus_click_index(){
  click_index-=1;
  if(click_index==-1){
     click_index=3;
     };
  $(".page").css("left","-"+click_index*100+"%");
  $(".page"+click_index-1).css("opacity","1");
  
};
 
  



$(document).ready(function(){

 
	$('#sticky').click(function(){ 
		$('html,body').animate({scrollTop:0}, 333);
  });
  
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 300 ){
			$('#sticky').fadeIn(222);
		} else {
			$('#sticky').stop().fadeOut(222);
		}
	}).scroll();

// 門市資訊scrollTop跳置about us
  $('#nav5_2').click(function(){ 
		$('html,body').animate({scrollTop:1160}, 333);
  });
  
  $("#next_btnn").click(function(){
    add_click_index();
  });

  $("#pre_btnn").click(function(){
    minus_click_index();
  });

  if($(window).width() < 786){
    
    // 當視窗寬度小於786px時執行
    $(".nav_ul").mouseover(function(){
      $(".nav").css("display","inline-block");
     
      
    });
    $(".nav_ul").mouseout(function(){
      $(".nav").css("display","none");
    });
  
  } ;
  
  setInterval("add_click_index()",3000);

});