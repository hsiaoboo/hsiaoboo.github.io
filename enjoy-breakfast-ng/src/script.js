


function resizewindow(){


  $(".nav_list").click(function(){
    $(".nav_ul").css("display","block");

    $(".nav_ul").mouseover(function(){
      $(".nav_ul").css("display","block");

    });

    $(".nav_ul").mouseout(function(){

      $(".nav_ul").css("display","none");

    });



  });


};


function vailEmail(){
  var email = $("#email").val();
  var flag = false;
  var message = "";
  var myreg =/^([\w\.\-]){1,64}\@([\w\.\-]){1,64}$/;
  if(email ==''){
  message = "電子信箱不能為空！";
  }else if(!myreg.test(email)){
  message = "請輸入有效的電子信箱！";
  }else{
  flag = true;
  }
  if(!flag){
 //錯誤提示
    $("#emailmeg").html(message);

  }else{
  //正確提示

    $("#emailmeg").html("");
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
    $('html,body').animate({scrollTop: $(".about_us").offset().top}, 333  );
  });

  $('#nav2_2').click(function(){
    $('html,body').animate({scrollTop: $(".combo_area").offset().top}, 333  );
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



});
