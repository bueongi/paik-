// 서브내비 호출
function closeSub(){
  $('.nav>li').removeClass('active');
  $('.nav>li').find('.sub_nav').slideUp(100);
}
$('.nav>li').hover(function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $(this).closest('.nav').removeClass('change');
    $(this).find('.sub_nav').slideUp(100);
  }else{
    closeSub();
    $(this).addClass('active');
    $(this).closest('.nav').addClass('change');
    $(this).find('.sub_nav').slideDown(300);
  };
  $('.sub_nav').mouseleave(function(){
    $(this).closest('.nav').removeClass('change');
    $(this).slideUp(100);
  });
});


$('.sub_nav a[href="#"]').on('click',function(){
  alert('서비스 준비중입니다.');
});

$('.section.sns .sns_img').on('click',function(){
  return false;
});

