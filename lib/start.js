/**
 * Created by ***.
 */



;+function(){
    var SCRM_JS_VERSION = '?v1.0.0'
    // 本地开发端口白名单
    // var localDeveloperPort   = [
    //     'tianming',
    //     'gaoshan',
    //     'wutong',
    //     'tianci'
    // ];

    // 依赖包脚本
    var vendorScript = document.createElement('script');

    // 入口脚本
    var landingScript = document.createElement('script');
    var landingLink = document.createElement('link');
    var mainLink = document.createElement('link');
    
    landingLink.setAttribute('rel', "stylesheet")
    landingLink.setAttribute('type', "text/css")

    mainLink.setAttribute('rel', "stylesheet")
    mainLink.setAttribute('type', "text/css")
    
    // 默认设置为正式环境
    var fileAddress = 'http://localhost:3000/lib/'
    
    // 测试环境
    if(/(nc.test.com)/.test(window.location)) {
        fileAddress = 'http://nc.test.com/lib/'
    }
    
    // 本地开发环境
    if(/tianming.com/.test(window.location) || /gaoshan.com/.test(window.location) || /wutong.com/.test(window.location) || /tianci.com/.test(window.location)) {
        fileAddress = 'http://localhost:3000/lib/'
    }
    
    vendorScript.src = fileAddress + 'vendor.bundle.js' + SCRM_JS_VERSION;
    landingScript.src = fileAddress + 'main.js' + SCRM_JS_VERSION;
    landingLink.href = fileAddress + 'antd.min.css' + SCRM_JS_VERSION;
    mainLink.href = fileAddress + 'main.css' + SCRM_JS_VERSION;
    
    document.body.appendChild(landingLink);
    document.body.appendChild(mainLink);

    // vendor加载后再加载main
    vendorScript.onload = function() {
        console.log("script loaded");
        appendLandingScript();
    };

    document.body.appendChild(vendorScript);

    function appendLandingScript(){
        document.body.appendChild(landingScript);
    }

}()
