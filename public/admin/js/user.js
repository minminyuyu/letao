$(function(){
  var page = 1//当前页数
  var pageSize = 10
  $.ajax({
    type:'get',
    url: '/user/queryUser',
    data:{
      page: page,
      pageSize: pageSize
    },
    success:function(info){
      console.log(info)
       $('tbody').html(template('tpl',info))
    }
  })
})