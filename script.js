$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["閱讀大量文章", "準備專案報告","製作筆記","心智圖思考","整理長文架構"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["閱讀大量文章", "準備專案報告","製作筆記","心智圖思考","整理長文架構"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

   



    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});



//宣告預設表單內容為空 （你想要的話也可以加東西）
    var initSubject='',initBody='';
 
    //按下傳送按鈕後執行
    function submitHandler(){
        var to = "amilyhu0901@gmail.com";//寫死的傳送對象 就是公司的信箱 不會顯示在網頁上
        var name = nameText.value;//讀取ID為 nameTextuser 物件中的值
        var email = emailText.value;
        var subject = subText.value;
//把user填的資料都塞到 mail body 中
        var body = ""+bodyText.value+'%0A%0A%0A';//%0A是換行 換了三行
            body += "From："+nameText.value+'%0A';
            body += "Email："+emailText.value+'%0A';
//傳送的主要程式碼
        mailTo.href="mailto:"+to+"?subject="+subject+"&body="+body;
        mailTo.click();
    }
//在body onload
    function init(){
        subText.value=initSubject;
        toText.value=initTo;
        bodyText.value=initBody;
    }
