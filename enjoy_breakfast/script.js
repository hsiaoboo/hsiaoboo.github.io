
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

function resizewindow(){
  $('#nav2_2').click(function(){ 
    $('html,body').animate({scrollTop:800}, 0);
  });


  
  $(".nav_list").click(function(){
    $(".nav").css("display","inline-block");
    
    $(".nav_ul").mouseover(function(){

      $(".nav").css("display","inline-block");
    });

    $(".nav_ul").mouseout(function(){

      $(".nav").css("display","none");
      

    });
  

  });


}

 
function vailEmail(){
  var email = $("#email").val();
  var flag = false;
  var message = "";
  var myreg =/^([\w\.\-]){1,64}\@([\w\.\-]){1,64}$/;
  if(email ==''){
  message = "郵箱不能為空！";
  }else if(!myreg.test(email)){
  message = "請輸入有效的郵箱地址！";
  }else{
  flag = true;
  }
  if(!flag){
 //錯誤提示
    $("#emailmeg").html(message);
 
  }else{
  //正確提示
    
    $("#emailmeg").html("ok");
  }
  return flag;
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
  $('#nav4_2').click(function(){ 
		$('html,body').animate({scrollTop:1160}, 333);
  });
  $('#nav2_2').click(function(){ 
		$('html,body').animate({scrollTop:1100}, 0  );
  });
  
  $("#next_btnn").click(function(){
    add_click_index();
  });

  $("#pre_btnn").click(function(){
    minus_click_index();
  });

  $(window).resize(function() {
    var wdth=$(window).width();

    // 當視窗寬度小於786px時執行
    if(wdth < 786){
      
      resizewindow();
         
    } ;
 
  });


// 當視窗寬度小於786px時執行
  if($(window).width() < 786){
    
    resizewindow();
    
  } ;

  $("#email").blur( function(){ 
    
    vailEmail();
  });
  
  setInterval("add_click_index()",3000);

});