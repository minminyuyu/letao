$(function(){
  $(document).ajaxStart(function(){  NProgress.start()  })
$(document).ajaxStop(function(){ setTimeout(function(){
  NProgress.done()
},500)  })
// 二级菜单显示和隐藏
  // 1. 给分类管理注册点击事件
  // 2. 让second这个盒子显示或者隐藏
  $('.category').on('click',function(){
    $('.second').slideToggle()
    
  })

  $('.btn-aside').on('click',function(){
   $('.aside ,content ,topBar').toggleClass('now')
  })

  $('.btn-logout').on('click', function() {
    // console.log('嘻嘻')
    $('.logoutModal').modal('show')
  })
  $('.btn-sure').on('click', function() {
    $.ajax({
      type: 'get',
      url: '/employee/employeeLogout',
      success: function (info) {
        if (info.success) {
          location.href = 'login.html'
        }
      }
    })
  })
})