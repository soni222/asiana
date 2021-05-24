$(document).ready(function(){
    //gnb
    $('.toggle').on('click',function(e){
        e.preventDefault();
        $('.gnb').css('display','block');
    })
    $('.gnb_close').on('click',function(e){
        e.preventDefault();
        $('.gnb').css('display','none');
    })
    $('.deth2 >li').on('click',function(e){
        e.preventDefault();
        var num=$(this).index()
        $(this).each(function(){
            if(num == $(this).index()){
                $(this).children('.gnb_inner').toggleClass('on');
                $('a',this).toggleClass('on')
                
            }
        }
     )
    })
    //tabmenu
    $('.tab_menu > li').on('click',function(){
        var nums=$(this).index()
        $(this).each(function(){
            if(nums == $(this).index()){
               $('.tab_menu > li >a').removeClass('on');
            $('a',this).addClass('on');
                $('.tab_inner').removeClass('on');
                $('.tab_inner:eq('+nums+')').addClass('on');
                
               }
        })
    })
    //modal 
    $('.modal .yes').on('click',function(){
       $('.modal_wrapper').css('display','none')
    })
//header fixed
    var navOffset=$('.header').offset().top;
    $(window).scroll(function(){
    var scrollTop=$(window).scrollTop();
    if(scrollTop>navOffset){
        $('.header').addClass('fixed')
        $('.header').css('background','#555555')
    }else{
        $('.header').removeClass('fixed')
        $('.header').css('background','none')
    }
    })
    $('.btn_top').on('click',function(e){
        e.preventDefault();
        var target=$($(this).attr('href'))
        if(target.length){
            $('html,body').animate({
                scrollTop:target.offset().top
            },500)
        }
    })
    //airlines
    var num=1;
    $('.air_btn .left').on('click',function(e){
        e.preventDefault();
        num--;
        if(num<1){
            num=3
        }
     ani(num)

    })
    $('.air_btn .right').on('click',function(e){
        e.preventDefault();
        num++;
        if(num>3){
            num=1
        }
       ani(num)
    })
    function ani(num){
        $('.airlines_list').animate({
            left:'-270px'
        },1000,function(){
            $('.airlines_list').append($('.airlines_list li:first'));
            $('.airlines_list').css('left','0px');
            $('.airlines_list li').removeClass('on');
            $('.airlines_list li:first').addClass('on')
        })
    }
    //event

   $('.count a').on('click',function(e){
       e.preventDefault();
       var nums=$(this).parent().index();
       var currentNum=$('.count a.on').parent().index();
       if(nums!=currentNum){
            $('.count a.on').removeClass('on')
            $(this).addClass('on')
            $('.event_list li.on').removeClass('on');
            $('.event_list li:eq('+nums+')').addClass('on');
        
          
       }
   })
    //notice
    var st;
    function set(){
        $('.notice_wrap').animate({
            ltop:'-50px'
        },2000,function(){
            $('.notice_wrap').append($('.notice_inner:first'));
            $('.notice_wrap').css('top','0px');
        })
    }
     st=setInterval(set,2000)
   
})