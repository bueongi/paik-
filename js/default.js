// 빈 링크
$('.sub_nav a[href="#"]').on('click',function(){
  alert('서비스 준비중입니다.')
});
// 빈 링크 리턴 방지
$('.section.sns .sns_img').on('click',function(){
  return false;
});


