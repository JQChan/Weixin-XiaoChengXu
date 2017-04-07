const CONFIG = require('../../utils/config.js');
Page({
  data: {
    banners: [], //初始化banners数组
    //以下四项设置swiper组件的参数
    indicatorDots: true,
    autoplay: true, //开启自动切换
    interval: 5000, //自动切换时间
    duration: 1000  //滑动动画时长
  },
  onLoad: function () {
    var _this = this;
    wx.request({//ajax请求
      url: CONFIG.API_URL.BANNER_QUERY,
      method: 'GET',
      data: {
        limit: 6,
        img_size: 'small'
      },
      success: function (res) {
        /**在 开发者 工具 和 iOS 中， res. statusCode 的 类 据 类型 是一 个数 值， 而在 Android 中的 数据 类型 是 一个 字符串， 所以 在 判断 res. statusCode 时不 能 直接 使用 === 操作 符， 而 应该 用 == 操作 符， 或者是 先 对 res. statusCode 进行 数据 类型 转换*/
        if(res.statusCode == 200){
          _this.setData({
            banners: res.data.objects
          })
        }
      }
    });
    wx. request({ 
      url: CONFIG. API_URL. SHELF_QUERY, 
      method: 'GET', 
      data: { img_size: 'small' }, 
      success: function (res) { 
        that. setData({ shelfNavList: res. data. objects 
        }); 
      } 
    });
  }
})