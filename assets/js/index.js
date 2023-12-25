const wonderSlide = new Swiper(".wonder-slide", {
    navigation: {
        nextEl: ".control-area .btn-next",
        prevEl: ".control-area .btn-prev",
    },
    slidesPerView: 3,

    breakpoints:{
        1024:{
            slidesPerView: 4,
        },
        1440:{
            slidesPerView: 'auto'
        }
    }
});


$('.btn-lang').click(function(){
    $(this).toggleClass('on');
})


$('[data-number]').each(function(i, el){
    var startCount = {var: 0};

    targetNum = ($(this).data('number'));

    gsap.to(startCount,{
        var: targetNum,
        duration:2,
        ease: 'none',
        onUpdate: function(){
            strLength=0;
            str=el.dataset.number;

            if (str.indexOf('.') != -1) {
                strArr=str.split('.');
                strLength = strArr[1].length;
                
            } 
            el.innerHTML = (startCount.var).toFixed(strLength);


        },
        scrollTrigger: {
            trigger: el,
            toggleActions: "restart none none reverse",
            start: "0% 85%",
            end: "+=150% 80%",
            // markers: true,
        },        
    });

})


gsap.set("[data-batch]", {y:100});
gsap.set("[data-batch]", {opacity: 0});

ScrollTrigger.batch("[data-batch]", {
    start:"0% 85%",
    // markers: true,

    onEnter: function(batch){
        gsap.to(batch, {opacity: 1, y: 0});       
    },

    onLeaveBack: batch => gsap.to(batch, {opacity: 0, y: 100}),

});

ScrollTrigger.addEventListener("refreshInit", () => gsap.set("[data-batch]", {y: 0}));

$('.header .group-tab button').click(function(){
    tabClass=$(this).data('tab')
    const classOn= $(this).hasClass('on');

    $(this).addClass('on').siblings('button').removeClass('on')
    $(tabClass).addClass('on').siblings('div').removeClass('on')

    if (!classOn) {
        $('.header .group-right .link-area').removeClass('on');
        $('body').removeClass('hidden');
    }

    ScrollTrigger.refresh();
})


$('.footer .group-bottom .btn-lang').mouseover(function(){
    $(this).find('svg').addClass('on')
})
$('.footer .group-bottom .btn-lang').mouseout(function(){
    $(this).find('svg').removeClass('on')
})


$('.sc-wemix .phase-item .flex .btn-arrow').click(function(){
    $(this).parents('.phase-item').toggleClass('on');
    $(this).parent('.flex').siblings('.desc-wrap').slideToggle();
})



function getInnerWidth() {

    if (window.innerWidth<1024) {

    $('.sc-partners .partner-list .partner-item .img-box').each(function(i){

        const gridElement = document.querySelector('.partner-list');
        const gridStyles = window.getComputedStyle(gridElement);
        const gridColumnValue = gridStyles.getPropertyValue('grid-template-columns');
        const gridColumnCount = gridColumnValue.split(" ").length;
        const fixedIndex = i % gridColumnCount;
        
        
        $(this).click(function(){    
            imgWidth = $('.sc-partners .partner-list .partner-item').innerWidth()+1;
            gsap.to('.sc-partners .partner-list .partner-item .text-wrap',0,{
                x: -(imgWidth*fixedIndex),
            })

            $(this).parent('.partner-item').siblings('.partner-item').removeClass('on');
            $(this).parent('.partner-item').addClass('on');
    })
    $('.sc-partners .partner-list .partner-item').siblings('.partner-item').removeClass('on');
    $('.sc-partners .partner-list .partner-item:first-child').addClass('on');
    gsap.to('.sc-partners .partner-list .partner-item .text-wrap',0,{
        x: 0,
    })

    })

    } else {
        gsap.to('.sc-partners .partner-list .partner-item .text-wrap',0,{
            x: 0,
        })
        }
}
window.addEventListener("resize", getInnerWidth);
getInnerWidth();

$('.sc-more .family-list li a span').mouseover(function(){
    $(this).addClass('on');
})

$('.sc-more .family-list li a span').mouseout(function(){
    $(this).removeClass('on');
})


$('.footer .group-top .btn-family').click(function(){
    $(this).toggleClass('on').siblings('.family-list').slideToggle();
})



$('.btn-link').click(function(){
    $('.header .link-area').toggleClass('show');
})

$(document).click(function(e){
    console.log($('.header').has(e.target).length);
    if (!$('.header').has(e.target).length) {
        $('.header .link-area').removeClass('show');
    }
})



$('.header .group-right .btn-hamburger').click(function(){
    $('.header .group-right .link-area').addClass('on');
    $('body').addClass('hidden');
})

$('.header .group-right .link-area .top-area .btn-close, .dimmed').click(function(){
    $('.header .group-right .link-area').removeClass('on');
    $('body').removeClass('hidden');

})


function menuToggle() {
    if (window.innerWidth<1024) {
            $('.header .group-right .link-area').removeClass('show');
    } else{
        $('.header .group-right .link-area').removeClass('on');
        $('body').removeClass('hidden');
    }
}
window.addEventListener("resize", menuToggle);
menuToggle();