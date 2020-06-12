var company_data=[
    { item:"客戶滿意度(分)",value:"98"},
    { item:"客戶數量",value:"4821"},
    { item:"員工人數",value:"389"},
    { item:"服務項目",value:"91"},
    { item:"專業認證",value:"23"},
    { item:"產品專利數",value:"36"}

];

function  view_company_data() {
    for(i=0;i<company_data.length;i++){
        $(".container_3_ul").append("<li>"+company_data[i].value+"<div class='sub'>"+company_data[i].item+"</div></li>");
    };
};


var new_center=[
    {datetime:"2017/09/18",tip:"產品公告",text:"推出AG6320，作為DisplayPort自HDMI/VGA的資料傳輸轉換，此項整合單一晶片之設計，將可同時作為「影像」暨「音頻」的傳輸媒介，高度應用於筆電、平板、智慧型手機之各配接站(擴展埠)顯示卡等。",
        img:"img\container-4.JPG",title:"安格科技推出新產品 - AG6320"
    },
    {datetime:"2018/03/18",tip:"技術公告",text:"推出AG6320，作為Displa此項整合單一晶片之設計，將可同時作為「影像」暨「音頻」的傳輸媒介，高度應用於筆電、平板、智慧型手機之各配接站(擴展埠)顯示卡等。",
        img:"img\container-4.JPG",title:"安格科技推出新產品 - AG6321"
    },
    {datetime:"2019/05/18",tip:"產品公告",text:"推出AG6320，作為DisplayPort自HDMI/VGA的資可同時作為「影像」暨「音頻」的傳輸媒介，高度應用於筆電、平板、智慧型手機之各配接站(擴展埠)顯示卡等。",
        img:"img\container-4.JPG",title:"安格科技推出新產品 - AG6322"
     },
    {datetime:"2020/06/18",tip:"技術公告",text:"/VGA的資料傳輸轉換，此項整合單一晶片之設計，將可同時作為「影像」暨「音頻」的傳輸媒介，高度應用於筆電、平板、智慧型手機之各配接站(擴展埠)顯示卡等。",
        img:"img\container-4.JPG",title:"安格科技推出新產品 - AG6323"
    }

];

var now_step_index=1;
    
function now_step_width(index){
    now_step_w=index/new_center.length*1000;
    return now_step_w;

};

function step_bar(){
    now_step_width(now_step_index);
   
    $(".now_step").css("width",now_step_w+"px");
    
    
    var date = new Date(new_center[now_step_index-1].datetime);
    var y=date.toDateString().split(" ")[3];
    var m=date.toDateString().split(" ")[1];
    $(".date_info").html(y+"<br >"+m);
    $("#new_center_text").html("<h2>"+new_center[now_step_index-1].title+"</h2>"
                                +"<div class='new_center_info_date'>九月18nd,2017 ｜ 產品公告</div>"
                                + '<p id="new_center_info" >' +new_center[now_step_index-1].text+"</p>");
};

function now_step_bar(index){ 
    now_step_width(index);
    $(".now_step").css("width",now_step_w+"px");
    var date = new Date(new_center[now_step_index-1].datetime);
    var y=date.toDateString().split(" ")[3];
    var m=date.toDateString().split(" ")[1];
    $(".date_info").html(y+"<br >"+m);
    $("#new_center_text").html("<h2>"+new_center[now_step_index-1].title+"</h2>"
                                +"<div class='new_center_info_date'>九月18nd,2017 ｜ 產品公告</div>"
                                + '<p id="new_center_info" >' +new_center[now_step_index-1].text+"</p>");
};  

function bar_next(){
    now_step_index+=1;
    if(now_step_index>=new_center.length){
        now_step_index=new_center.length;
    };
    step_bar();
   

};


function bar_previous(){
    now_step_index-=1;
    if(now_step_index<=1){
        now_step_index=1;
    };
    now_step_w=now_step_index/new_center.length*1000;
    step_bar();

};



$(document).ready(function(){
                
    view_company_data();

   
    now_step_bar(now_step_index);

    $("#next_btn").click(function(){
        bar_next();
    });

    $("#previous_btn").click(function(){
        bar_previous();
    
    });

    var map;
    var position = {
      lat: 25.0336962,
      lng: 121.5643673
    };
    var contentString = '<h1>大家好我是資訊視窗</h1>';
    
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: position
      });
      var marker = new google.maps.Marker({
        map: map,
        position: position
      });
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        position: position,
        maxWidth:200,
        pixelOffset: new google.maps.Size(100, -20) 
      });
      infowindow.open(map,marker);
    
    }
    
});
