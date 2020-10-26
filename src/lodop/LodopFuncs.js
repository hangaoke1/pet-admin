/* eslint-disable */
//==本JS是加载Lodop插件及CLodop服务的综合示例，可直接使用，建议看懂后融进自己页面程序==
import Vue from 'vue';
var vm = new Vue();
var CreatedOKLodopObject, CLodopIsLocal, CLodopJsState;

export function installTip(){
  vm
    .$confirm('当前设备未安装打印控件，无法打印，是否开始安装?', '提示', {
      confirmButtonText: '立即安装',
      cancelButtonText: '取消',
      type: 'warning'
    })
    .then(() => {
      window.open('http://mall.gohipet.com/download/CLodop_Setup_for_Win32NT.exe');
    })
    .catch(() => {});
}

//==判断是否需要CLodop(那些不支持插件的浏览器):==
function needCLodop(){
  try {
    var ua = navigator.userAgent;
    if (ua.match(/Windows\sPhone/i)) return true;
    if (ua.match(/iPhone|iPod|iPad/i)) return true;
    if (ua.match(/Android/i)) return true;
    if (ua.match(/Edge\D?\d+/i)) return true;

    var verTrident = ua.match(/Trident\D?\d+/i);
    var verIE = ua.match(/MSIE\D?\d+/i);
    var verOPR = ua.match(/OPR\D?\d+/i);
    var verFF = ua.match(/Firefox\D?\d+/i);
    var x64 = ua.match(/x64/i);
    if (!verTrident && !verIE && x64) return true;
    else if (verFF) {
      verFF = verFF[0].match(/\d+/);
      if (verFF[0] >= 41 || x64) return true;
    } else if (verOPR) {
      verOPR = verOPR[0].match(/\d+/);
      if (verOPR[0] >= 32) return true;
    } else if (!verTrident && !verIE) {
      var verChrome = ua.match(/Chrome\D?\d+/i);
      if (verChrome) {
        verChrome = verChrome[0].match(/\d+/);
        if (verChrome[0] >= 41) return true;
      }
    }
    return false;
  } catch (err) {
    return true;
  }
}

//==加载引用CLodop的主JS,用双端口8000和18000(以防其中一个被占):==
function loadCLodop(){
  if (CLodopJsState == 'loading' || CLodopJsState == 'complete') return;
  CLodopJsState = 'loading';
  var head = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
  var JS1 = document.createElement('script');
  var JS2 = document.createElement('script');
  JS1.src = 'http://localhost:8000/CLodopfuncs.js?priority=1';
  JS2.src = 'http://localhost:18000/CLodopfuncs.js';
  JS1.onload = JS2.onload = function(){
    CLodopJsState = 'complete';
  };
  JS1.onerror = JS2.onerror = function(evt){
    CLodopJsState = 'complete';
  };
  head.insertBefore(JS1, head.firstChild);
  head.insertBefore(JS2, head.firstChild);
  CLodopIsLocal = !!(JS1.src + JS2.src).match(/\/\/localho|\/\/127.0.0./i);
}

if (needCLodop()) {
  loadCLodop();
} //加载s

//==获取LODOP对象主过程,判断是否安装、需否升级:==
export function getLodop(oOBJECT, oEMBED){
  var LODOP;
  try {
    var ua = navigator.userAgent;
    var isIE = !!ua.match(/MSIE/i) || !!ua.match(/Trident/i);
    if (needCLodop()) {
      try {
        LODOP = getCLodop();
      } catch (err) {}
      if (!LODOP && CLodopJsState !== 'complete') {
        if (CLodopJsState == 'loading') alert('网页还没下载完毕，请稍等一下再操作.');
        else alert('没有加载CLodop的主js，请先调用loadCLodop过程.');
        return;
      }

      if (!LODOP) {
        installTip();
        return;
      } else {}
    } else {}

    //=======================================================
    return LODOP;
  } catch (err) {
    alert('getLodop出错:' + err);
  }
}
