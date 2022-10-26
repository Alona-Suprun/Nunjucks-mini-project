// missing forEach on NodeList for IE11
if ("NodeList" in window && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function(callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}
// Polyfill for HTMLCollection.forEach
if ("HTMLCollection" in window && !HTMLCollection.prototype.forEach) {
	HTMLCollection.prototype.forEach = function(callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

// Polyfill remove
(function(arr) {
	arr.forEach(function(item) {
		if ({}.hasOwnProperty.call(item, "remove")) {
			return;
		}
		Object.defineProperty(item, "remove", {
			configurable: true,
			enumerable: true,
			writable: true,
			value: function remove() {
				this.parentNode && this.parentNode.removeChild(this);
			}
		});
	});
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

/**
 * Polyfills for Element.matches and Element.closest
 */
if (!Element.prototype.matches) {
	Element.prototype.matches =
		Element.prototype.msMatchesSelector ||
		Element.prototype.webkitMatchesSelector;
}
