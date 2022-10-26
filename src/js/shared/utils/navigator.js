const browser = (function() {
	var ua = navigator.userAgent;
	var isOpera =
		Object.prototype.toString.call(window.opera) == "[object Opera]";

	return {
		IE: !!window.attachEvent && !isOpera,
		IE11: !!window.MSInputMethodContext && !!document.documentMode,
		Edge: /Edge/.test(ua),
		Opera: isOpera,
		WebKit: ua.indexOf("AppleWebKit/") > -1,
		MobileSafari: /Apple.*Mobile/.test(ua)
	};
})();

export { browser };
