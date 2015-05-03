/*
spa.js
Root namespace module
*/

var spa = (function () {
	//初始化应用函数
	var initModule = function ($container) {
		spa.shell.initModule($container);
	};
		return {initModule: initModule};
})()