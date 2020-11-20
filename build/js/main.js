var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
(function (global, factory) {

	"use strict";

	if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ? factory(global, true) : function (w) {
			if (!w.document) {
				throw new Error("jQuery requires a window with a document");
			}
			return factory(w);
		};
	} else {
		factory(global);
	}

	// Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var _slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call(Object);

	var support = {};

	var isFunction = function isFunction(obj) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		return typeof obj === "function" && typeof obj.nodeType !== "number";
	};

	var isWindow = function isWindow(obj) {
		return obj != null && obj === obj.window;
	};

	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval(code, doc, node) {
		doc = doc || document;

		var i,
		    script = doc.createElement("script");

		script.text = code;
		if (node) {
			for (i in preservedScriptAttributes) {
				if (node[i]) {
					script[i] = node[i];
				}
			}
		}
		doc.head.appendChild(script).parentNode.removeChild(script);
	}

	function toType(obj) {
		if (obj == null) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module


	var version = "3.3.1",


	// Define a local copy of jQuery
	jQuery = function jQuery(selector, context) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init(selector, context);
	},


	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function toArray() {
			return _slice.call(this);
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function get(num) {

			// Return all the elements in a clean array
			if (num == null) {
				return _slice.call(this);
			}

			// Return just the one element from the set
			return num < 0 ? this[num + this.length] : this[num];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function pushStack(elems) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge(this.constructor(), elems);

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function each(callback) {
			return jQuery.each(this, callback);
		},

		map: function map(callback) {
			return this.pushStack(jQuery.map(this, function (elem, i) {
				return callback.call(elem, i, elem);
			}));
		},

		slice: function slice() {
			return this.pushStack(_slice.apply(this, arguments));
		},

		first: function first() {
			return this.eq(0);
		},

		last: function last() {
			return this.eq(-1);
		},

		eq: function eq(i) {
			var len = this.length,
			    j = +i + (i < 0 ? len : 0);
			return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
		},

		end: function end() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function () {
		var options,
		    name,
		    src,
		    copy,
		    copyIsArray,
		    clone,
		    target = arguments[0] || {},
		    i = 1,
		    length = arguments.length,
		    deep = false;

		// Handle a deep copy situation
		if (typeof target === "boolean") {
			deep = target;

			// Skip the boolean and the target
			target = arguments[i] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !isFunction(target)) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if (i === length) {
			target = this;
			i--;
		}

		for (; i < length; i++) {

			// Only deal with non-null/undefined values
			if ((options = arguments[i]) != null) {

				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target === copy) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {

						if (copyIsArray) {
							copyIsArray = false;
							clone = src && Array.isArray(src) ? src : [];
						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = jQuery.extend(deep, clone, copy);

						// Don't bring in undefined values
					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function error(msg) {
			throw new Error(msg);
		},

		noop: function noop() {},

		isPlainObject: function isPlainObject(obj) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if (!obj || toString.call(obj) !== "[object Object]") {
				return false;
			}

			proto = getProto(obj);

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if (!proto) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
			return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
		},

		isEmptyObject: function isEmptyObject(obj) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for (name in obj) {
				return false;
			}
			return true;
		},

		// Evaluates a script in a global context
		globalEval: function globalEval(code) {
			DOMEval(code);
		},

		each: function each(obj, callback) {
			var length,
			    i = 0;

			if (isArrayLike(obj)) {
				length = obj.length;
				for (; i < length; i++) {
					if (callback.call(obj[i], i, obj[i]) === false) {
						break;
					}
				}
			} else {
				for (i in obj) {
					if (callback.call(obj[i], i, obj[i]) === false) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function trim(text) {
			return text == null ? "" : (text + "").replace(rtrim, "");
		},

		// results is for internal usage only
		makeArray: function makeArray(arr, results) {
			var ret = results || [];

			if (arr != null) {
				if (isArrayLike(Object(arr))) {
					jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
				} else {
					push.call(ret, arr);
				}
			}

			return ret;
		},

		inArray: function inArray(elem, arr, i) {
			return arr == null ? -1 : indexOf.call(arr, elem, i);
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function merge(first, second) {
			var len = +second.length,
			    j = 0,
			    i = first.length;

			for (; j < len; j++) {
				first[i++] = second[j];
			}

			first.length = i;

			return first;
		},

		grep: function grep(elems, callback, invert) {
			var callbackInverse,
			    matches = [],
			    i = 0,
			    length = elems.length,
			    callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for (; i < length; i++) {
				callbackInverse = !callback(elems[i], i);
				if (callbackInverse !== callbackExpect) {
					matches.push(elems[i]);
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function map(elems, callback, arg) {
			var length,
			    value,
			    i = 0,
			    ret = [];

			// Go through the array, translating each of the items to their new values
			if (isArrayLike(elems)) {
				length = elems.length;
				for (; i < length; i++) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret.push(value);
					}
				}

				// Go through every key on the object,
			} else {
				for (i in elems) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret.push(value);
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply([], ret);
		},

		// A global GUID counter for objects
		guid: 1,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});

	if (typeof Symbol === "function") {
		jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
	}

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
		class2type["[object " + name + "]"] = name.toLowerCase();
	});

	function isArrayLike(obj) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
		    type = toType(obj);

		if (isFunction(obj) || isWindow(obj)) {
			return false;
		}

		return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
	}
	var Sizzle =
	/*!
  * Sizzle CSS Selector Engine v2.3.3
  * https://sizzlejs.com/
  *
  * Copyright jQuery Foundation and other contributors
  * Released under the MIT license
  * http://jquery.org/license
  *
  * Date: 2016-08-08
  */
	function (window) {

		var i,
		    support,
		    Expr,
		    getText,
		    isXML,
		    tokenize,
		    compile,
		    select,
		    outermostContext,
		    sortInput,
		    hasDuplicate,


		// Local document vars
		setDocument,
		    document,
		    docElem,
		    documentIsHTML,
		    rbuggyQSA,
		    rbuggyMatches,
		    matches,
		    contains,


		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		    preferredDoc = window.document,
		    dirruns = 0,
		    done = 0,
		    classCache = createCache(),
		    tokenCache = createCache(),
		    compilerCache = createCache(),
		    sortOrder = function sortOrder(a, b) {
			if (a === b) {
				hasDuplicate = true;
			}
			return 0;
		},


		// Instance methods
		hasOwn = {}.hasOwnProperty,
		    arr = [],
		    pop = arr.pop,
		    push_native = arr.push,
		    push = arr.push,
		    slice = arr.slice,

		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function indexOf(list, elem) {
			var i = 0,
			    len = list.length;
			for (; i < len; i++) {
				if (list[i] === elem) {
					return i;
				}
			}
			return -1;
		},
		    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",


		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",


		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",


		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
		    pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" + ")\\)|)",


		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp(whitespace + "+", "g"),
		    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
		    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
		    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
		    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
		    rpseudo = new RegExp(pseudos),
		    ridentifier = new RegExp("^" + identifier + "$"),
		    matchExpr = {
			"ID": new RegExp("^#(" + identifier + ")"),
			"CLASS": new RegExp("^\\.(" + identifier + ")"),
			"TAG": new RegExp("^(" + identifier + "|[*])"),
			"ATTR": new RegExp("^" + attributes),
			"PSEUDO": new RegExp("^" + pseudos),
			"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
			"bool": new RegExp("^(?:" + booleans + ")$", "i"),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
		},
		    rinputs = /^(?:input|select|textarea|button)$/i,
		    rheader = /^h\d$/i,
		    rnative = /^[^{]+\{\s*\[native \w/,


		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		    rsibling = /[+~]/,


		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
		    funescape = function funescape(_, escaped, escapedWhitespace) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ? escaped : high < 0 ?
			// BMP codepoint
			String.fromCharCode(high + 0x10000) :
			// Supplemental Plane codepoint (surrogate pair)
			String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
		},


		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		    fcssescape = function fcssescape(ch, asCodePoint) {
			if (asCodePoint) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if (ch === "\0") {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},


		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function unloadHandler() {
			setDocument();
		},
		    disabledAncestor = addCombinator(function (elem) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		}, { dir: "parentNode", next: "legend" });

		// Optimize for push.apply( _, NodeList )
		try {
			push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
			// Support: Android<4.0
			// Detect silently failing push.apply
			arr[preferredDoc.childNodes.length].nodeType;
		} catch (e) {
			push = { apply: arr.length ?

				// Leverage slice if possible
				function (target, els) {
					push_native.apply(target, slice.call(els));
				} :

				// Support: IE<9
				// Otherwise append directly
				function (target, els) {
					var j = target.length,
					    i = 0;
					// Can't trust NodeList.length
					while (target[j++] = els[i++]) {}
					target.length = j - 1;
				}
			};
		}

		function Sizzle(selector, context, results, seed) {
			var m,
			    i,
			    elem,
			    nid,
			    match,
			    groups,
			    newSelector,
			    newContext = context && context.ownerDocument,


			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

			results = results || [];

			// Return early from calls with invalid selector or context
			if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

				return results;
			}

			// Try to shortcut find operations (as opposed to filters) in HTML documents
			if (!seed) {

				if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
					setDocument(context);
				}
				context = context || document;

				if (documentIsHTML) {

					// If the selector is sufficiently simple, try using a "get*By*" DOM method
					// (excepting DocumentFragment context, where the methods don't exist)
					if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

						// ID selector
						if (m = match[1]) {

							// Document context
							if (nodeType === 9) {
								if (elem = context.getElementById(m)) {

									// Support: IE, Opera, Webkit
									// TODO: identify versions
									// getElementById can match elements by name instead of ID
									if (elem.id === m) {
										results.push(elem);
										return results;
									}
								} else {
									return results;
								}

								// Element context
							} else {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {

									results.push(elem);
									return results;
								}
							}

							// Type selector
						} else if (match[2]) {
							push.apply(results, context.getElementsByTagName(selector));
							return results;

							// Class selector
						} else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {

							push.apply(results, context.getElementsByClassName(m));
							return results;
						}
					}

					// Take advantage of querySelectorAll
					if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {

						if (nodeType !== 1) {
							newContext = context;
							newSelector = selector;

							// qSA looks outside Element context, which is not what we want
							// Thanks to Andrew Dupont for this workaround technique
							// Support: IE <=8
							// Exclude object elements
						} else if (context.nodeName.toLowerCase() !== "object") {

							// Capture the context ID, setting it first if necessary
							if (nid = context.getAttribute("id")) {
								nid = nid.replace(rcssescape, fcssescape);
							} else {
								context.setAttribute("id", nid = expando);
							}

							// Prefix every selector in the list
							groups = tokenize(selector);
							i = groups.length;
							while (i--) {
								groups[i] = "#" + nid + " " + toSelector(groups[i]);
							}
							newSelector = groups.join(",");

							// Expand context for sibling selectors
							newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
						}

						if (newSelector) {
							try {
								push.apply(results, newContext.querySelectorAll(newSelector));
								return results;
							} catch (qsaError) {} finally {
								if (nid === expando) {
									context.removeAttribute("id");
								}
							}
						}
					}
				}
			}

			// All others
			return select(selector.replace(rtrim, "$1"), context, results, seed);
		}

		/**
   * Create key-value caches of limited size
   * @returns {function(string, object)} Returns the Object data after storing it on itself with
   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
   *	deleting the oldest entry
   */
		function createCache() {
			var keys = [];

			function cache(key, value) {
				// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
				if (keys.push(key + " ") > Expr.cacheLength) {
					// Only keep the most recent entries
					delete cache[keys.shift()];
				}
				return cache[key + " "] = value;
			}
			return cache;
		}

		/**
   * Mark a function for special use by Sizzle
   * @param {Function} fn The function to mark
   */
		function markFunction(fn) {
			fn[expando] = true;
			return fn;
		}

		/**
   * Support testing using an element
   * @param {Function} fn Passed the created element and returns a boolean result
   */
		function assert(fn) {
			var el = document.createElement("fieldset");

			try {
				return !!fn(el);
			} catch (e) {
				return false;
			} finally {
				// Remove from its parent by default
				if (el.parentNode) {
					el.parentNode.removeChild(el);
				}
				// release memory in IE
				el = null;
			}
		}

		/**
   * Adds the same handler for all of the specified attrs
   * @param {String} attrs Pipe-separated list of attributes
   * @param {Function} handler The method that will be applied
   */
		function addHandle(attrs, handler) {
			var arr = attrs.split("|"),
			    i = arr.length;

			while (i--) {
				Expr.attrHandle[arr[i]] = handler;
			}
		}

		/**
   * Checks document order of two siblings
   * @param {Element} a
   * @param {Element} b
   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
   */
		function siblingCheck(a, b) {
			var cur = b && a,
			    diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;

			// Use IE sourceIndex if available on both nodes
			if (diff) {
				return diff;
			}

			// Check if b follows a
			if (cur) {
				while (cur = cur.nextSibling) {
					if (cur === b) {
						return -1;
					}
				}
			}

			return a ? 1 : -1;
		}

		/**
   * Returns a function to use in pseudos for input types
   * @param {String} type
   */
		function createInputPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === type;
			};
		}

		/**
   * Returns a function to use in pseudos for buttons
   * @param {String} type
   */
		function createButtonPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return (name === "input" || name === "button") && elem.type === type;
			};
		}

		/**
   * Returns a function to use in pseudos for :enabled/:disabled
   * @param {Boolean} disabled true for :disabled; false for :enabled
   */
		function createDisabledPseudo(disabled) {

			// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
			return function (elem) {

				// Only certain elements can match :enabled or :disabled
				// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
				// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
				if ("form" in elem) {

					// Check for inherited disabledness on relevant non-disabled elements:
					// * listed form-associated elements in a disabled fieldset
					//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
					//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
					// * option elements in a disabled optgroup
					//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
					// All such elements have a "form" property.
					if (elem.parentNode && elem.disabled === false) {

						// Option elements defer to a parent optgroup if present
						if ("label" in elem) {
							if ("label" in elem.parentNode) {
								return elem.parentNode.disabled === disabled;
							} else {
								return elem.disabled === disabled;
							}
						}

						// Support: IE 6 - 11
						// Use the isDisabled shortcut property to check for disabled fieldset ancestors
						return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled;
					}

					return elem.disabled === disabled;

					// Try to winnow out elements that can't be disabled before trusting the disabled property.
					// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
					// even exist on them, let alone have a boolean value.
				} else if ("label" in elem) {
					return elem.disabled === disabled;
				}

				// Remaining elements are neither :enabled nor :disabled
				return false;
			};
		}

		/**
   * Returns a function to use in pseudos for positionals
   * @param {Function} fn
   */
		function createPositionalPseudo(fn) {
			return markFunction(function (argument) {
				argument = +argument;
				return markFunction(function (seed, matches) {
					var j,
					    matchIndexes = fn([], seed.length, argument),
					    i = matchIndexes.length;

					// Match elements found at the specified indexes
					while (i--) {
						if (seed[j = matchIndexes[i]]) {
							seed[j] = !(matches[j] = seed[j]);
						}
					}
				});
			});
		}

		/**
   * Checks a node for validity as a Sizzle context
   * @param {Element|Object=} context
   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
   */
		function testContext(context) {
			return context && typeof context.getElementsByTagName !== "undefined" && context;
		}

		// Expose support vars for convenience
		support = Sizzle.support = {};

		/**
   * Detects XML nodes
   * @param {Element|Object} elem An element or a document
   * @returns {Boolean} True iff elem is a non-HTML XML node
   */
		isXML = Sizzle.isXML = function (elem) {
			// documentElement is verified for cases where it doesn't yet exist
			// (such as loading iframes in IE - #4833)
			var documentElement = elem && (elem.ownerDocument || elem).documentElement;
			return documentElement ? documentElement.nodeName !== "HTML" : false;
		};

		/**
   * Sets document-related variables once based on the current document
   * @param {Element|Object} [doc] An element or document object to use to set the document
   * @returns {Object} Returns the current document
   */
		setDocument = Sizzle.setDocument = function (node) {
			var hasCompare,
			    subWindow,
			    doc = node ? node.ownerDocument || node : preferredDoc;

			// Return early if doc is invalid or already selected
			if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
				return document;
			}

			// Update global variables
			document = doc;
			docElem = document.documentElement;
			documentIsHTML = !isXML(document);

			// Support: IE 9-11, Edge
			// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
			if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {

				// Support: IE 11, Edge
				if (subWindow.addEventListener) {
					subWindow.addEventListener("unload", unloadHandler, false);

					// Support: IE 9 - 10 only
				} else if (subWindow.attachEvent) {
					subWindow.attachEvent("onunload", unloadHandler);
				}
			}

			/* Attributes
   ---------------------------------------------------------------------- */

			// Support: IE<8
			// Verify that getAttribute really returns attributes and not properties
			// (excepting IE8 booleans)
			support.attributes = assert(function (el) {
				el.className = "i";
				return !el.getAttribute("className");
			});

			/* getElement(s)By*
   ---------------------------------------------------------------------- */

			// Check if getElementsByTagName("*") returns only elements
			support.getElementsByTagName = assert(function (el) {
				el.appendChild(document.createComment(""));
				return !el.getElementsByTagName("*").length;
			});

			// Support: IE<9
			support.getElementsByClassName = rnative.test(document.getElementsByClassName);

			// Support: IE<10
			// Check if getElementById returns elements by name
			// The broken getElementById methods don't pick up programmatically-set names,
			// so use a roundabout getElementsByName test
			support.getById = assert(function (el) {
				docElem.appendChild(el).id = expando;
				return !document.getElementsByName || !document.getElementsByName(expando).length;
			});

			// ID filter and find
			if (support.getById) {
				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						return elem.getAttribute("id") === attrId;
					};
				};
				Expr.find["ID"] = function (id, context) {
					if (typeof context.getElementById !== "undefined" && documentIsHTML) {
						var elem = context.getElementById(id);
						return elem ? [elem] : [];
					}
				};
			} else {
				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
						return node && node.value === attrId;
					};
				};

				// Support: IE 6 - 7 only
				// getElementById is not reliable as a find shortcut
				Expr.find["ID"] = function (id, context) {
					if (typeof context.getElementById !== "undefined" && documentIsHTML) {
						var node,
						    i,
						    elems,
						    elem = context.getElementById(id);

						if (elem) {

							// Verify the id attribute
							node = elem.getAttributeNode("id");
							if (node && node.value === id) {
								return [elem];
							}

							// Fall back on getElementsByName
							elems = context.getElementsByName(id);
							i = 0;
							while (elem = elems[i++]) {
								node = elem.getAttributeNode("id");
								if (node && node.value === id) {
									return [elem];
								}
							}
						}

						return [];
					}
				};
			}

			// Tag
			Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
				if (typeof context.getElementsByTagName !== "undefined") {
					return context.getElementsByTagName(tag);

					// DocumentFragment nodes don't have gEBTN
				} else if (support.qsa) {
					return context.querySelectorAll(tag);
				}
			} : function (tag, context) {
				var elem,
				    tmp = [],
				    i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName(tag);

				// Filter out possible comments
				if (tag === "*") {
					while (elem = results[i++]) {
						if (elem.nodeType === 1) {
							tmp.push(elem);
						}
					}

					return tmp;
				}
				return results;
			};

			// Class
			Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
				if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
					return context.getElementsByClassName(className);
				}
			};

			/* QSA/matchesSelector
   ---------------------------------------------------------------------- */

			// QSA and matchesSelector support

			// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
			rbuggyMatches = [];

			// qSa(:focus) reports false when true (Chrome 21)
			// We allow this because of a bug in IE8/9 that throws an error
			// whenever `document.activeElement` is accessed on an iframe
			// So, we allow :focus to pass through QSA all the time to avoid the IE error
			// See https://bugs.jquery.com/ticket/13378
			rbuggyQSA = [];

			if (support.qsa = rnative.test(document.querySelectorAll)) {
				// Build QSA regex
				// Regex strategy adopted from Diego Perini
				assert(function (el) {
					// Select is set to empty string on purpose
					// This is to test IE's treatment of not explicitly
					// setting a boolean content attribute,
					// since its presence should be enough
					// https://bugs.jquery.com/ticket/12359
					docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";

					// Support: IE8, Opera 11-12.16
					// Nothing should be selected when empty strings follow ^= or $= or *=
					// The test attribute must be unknown in Opera but "safe" for WinRT
					// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
					if (el.querySelectorAll("[msallowcapture^='']").length) {
						rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
					}

					// Support: IE8
					// Boolean attributes and "value" are not treated correctly
					if (!el.querySelectorAll("[selected]").length) {
						rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
					}

					// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
					if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
						rbuggyQSA.push("~=");
					}

					// Webkit/Opera - :checked should return selected option elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					// IE8 throws error here and will not see later tests
					if (!el.querySelectorAll(":checked").length) {
						rbuggyQSA.push(":checked");
					}

					// Support: Safari 8+, iOS 8+
					// https://bugs.webkit.org/show_bug.cgi?id=136851
					// In-page `selector#id sibling-combinator selector` fails
					if (!el.querySelectorAll("a#" + expando + "+*").length) {
						rbuggyQSA.push(".#.+[+~]");
					}
				});

				assert(function (el) {
					el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";

					// Support: Windows 8 Native Apps
					// The type and name attributes are restricted during .innerHTML assignment
					var input = document.createElement("input");
					input.setAttribute("type", "hidden");
					el.appendChild(input).setAttribute("name", "D");

					// Support: IE8
					// Enforce case-sensitivity of name attribute
					if (el.querySelectorAll("[name=d]").length) {
						rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
					}

					// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
					// IE8 throws error here and will not see later tests
					if (el.querySelectorAll(":enabled").length !== 2) {
						rbuggyQSA.push(":enabled", ":disabled");
					}

					// Support: IE9-11+
					// IE's :disabled selector does not pick up the children of disabled fieldsets
					docElem.appendChild(el).disabled = true;
					if (el.querySelectorAll(":disabled").length !== 2) {
						rbuggyQSA.push(":enabled", ":disabled");
					}

					// Opera 10-11 does not throw on post-comma invalid pseudos
					el.querySelectorAll("*,:x");
					rbuggyQSA.push(",.*:");
				});
			}

			if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {

				assert(function (el) {
					// Check to see if it's possible to do matchesSelector
					// on a disconnected node (IE 9)
					support.disconnectedMatch = matches.call(el, "*");

					// This should fail with an exception
					// Gecko does not error, returns false instead
					matches.call(el, "[s!='']:x");
					rbuggyMatches.push("!=", pseudos);
				});
			}

			rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
			rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

			/* Contains
   ---------------------------------------------------------------------- */
			hasCompare = rnative.test(docElem.compareDocumentPosition);

			// Element contains another
			// Purposefully self-exclusive
			// As in, an element does not contain itself
			contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
				    bup = b && b.parentNode;
				return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
			} : function (a, b) {
				if (b) {
					while (b = b.parentNode) {
						if (b === a) {
							return true;
						}
					}
				}
				return false;
			};

			/* Sorting
   ---------------------------------------------------------------------- */

			// Document order sorting
			sortOrder = hasCompare ? function (a, b) {

				// Flag for duplicate removal
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}

				// Sort on method existence if only one input has compareDocumentPosition
				var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
				if (compare) {
					return compare;
				}

				// Calculate position if both inputs belong to the same document
				compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :

				// Otherwise we know they are disconnected
				1;

				// Disconnected nodes
				if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {

					// Choose the first element that is related to our preferred document
					if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
						return -1;
					}
					if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
						return 1;
					}

					// Maintain original order
					return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
				}

				return compare & 4 ? -1 : 1;
			} : function (a, b) {
				// Exit early if the nodes are identical
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}

				var cur,
				    i = 0,
				    aup = a.parentNode,
				    bup = b.parentNode,
				    ap = [a],
				    bp = [b];

				// Parentless nodes are either documents or disconnected
				if (!aup || !bup) {
					return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;

					// If the nodes are siblings, we can do a quick check
				} else if (aup === bup) {
					return siblingCheck(a, b);
				}

				// Otherwise we need full lists of their ancestors for comparison
				cur = a;
				while (cur = cur.parentNode) {
					ap.unshift(cur);
				}
				cur = b;
				while (cur = cur.parentNode) {
					bp.unshift(cur);
				}

				// Walk down the tree looking for a discrepancy
				while (ap[i] === bp[i]) {
					i++;
				}

				return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck(ap[i], bp[i]) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
			};

			return document;
		};

		Sizzle.matches = function (expr, elements) {
			return Sizzle(expr, null, null, elements);
		};

		Sizzle.matchesSelector = function (elem, expr) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			// Make sure that attribute selectors are quoted
			expr = expr.replace(rattributeQuotes, "='$1']");

			if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {

				try {
					var ret = matches.call(elem, expr);

					// IE 9's matchesSelector returns false on disconnected nodes
					if (ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11) {
						return ret;
					}
				} catch (e) {}
			}

			return Sizzle(expr, document, null, [elem]).length > 0;
		};

		Sizzle.contains = function (context, elem) {
			// Set document vars if needed
			if ((context.ownerDocument || context) !== document) {
				setDocument(context);
			}
			return contains(context, elem);
		};

		Sizzle.attr = function (elem, name) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			var fn = Expr.attrHandle[name.toLowerCase()],

			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

			return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
		};

		Sizzle.escape = function (sel) {
			return (sel + "").replace(rcssescape, fcssescape);
		};

		Sizzle.error = function (msg) {
			throw new Error("Syntax error, unrecognized expression: " + msg);
		};

		/**
   * Document sorting and removing duplicates
   * @param {ArrayLike} results
   */
		Sizzle.uniqueSort = function (results) {
			var elem,
			    duplicates = [],
			    j = 0,
			    i = 0;

			// Unless we *know* we can detect duplicates, assume their presence
			hasDuplicate = !support.detectDuplicates;
			sortInput = !support.sortStable && results.slice(0);
			results.sort(sortOrder);

			if (hasDuplicate) {
				while (elem = results[i++]) {
					if (elem === results[i]) {
						j = duplicates.push(i);
					}
				}
				while (j--) {
					results.splice(duplicates[j], 1);
				}
			}

			// Clear input after sorting to release objects
			// See https://github.com/jquery/sizzle/pull/225
			sortInput = null;

			return results;
		};

		/**
   * Utility function for retrieving the text value of an array of DOM nodes
   * @param {Array|Element} elem
   */
		getText = Sizzle.getText = function (elem) {
			var node,
			    ret = "",
			    i = 0,
			    nodeType = elem.nodeType;

			if (!nodeType) {
				// If no nodeType, this is expected to be an array
				while (node = elem[i++]) {
					// Do not traverse comment nodes
					ret += getText(node);
				}
			} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
				// Use textContent for elements
				// innerText usage removed for consistency of new lines (jQuery #11153)
				if (typeof elem.textContent === "string") {
					return elem.textContent;
				} else {
					// Traverse its children
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						ret += getText(elem);
					}
				}
			} else if (nodeType === 3 || nodeType === 4) {
				return elem.nodeValue;
			}
			// Do not include comment or processing instruction nodes

			return ret;
		};

		Expr = Sizzle.selectors = {

			// Can be adjusted by the user
			cacheLength: 50,

			createPseudo: markFunction,

			match: matchExpr,

			attrHandle: {},

			find: {},

			relative: {
				">": { dir: "parentNode", first: true },
				" ": { dir: "parentNode" },
				"+": { dir: "previousSibling", first: true },
				"~": { dir: "previousSibling" }
			},

			preFilter: {
				"ATTR": function ATTR(match) {
					match[1] = match[1].replace(runescape, funescape);

					// Move the given value to match[3] whether quoted or unquoted
					match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

					if (match[2] === "~=") {
						match[3] = " " + match[3] + " ";
					}

					return match.slice(0, 4);
				},

				"CHILD": function CHILD(match) {
					/* matches from matchExpr["CHILD"]
     	1 type (only|nth|...)
     	2 what (child|of-type)
     	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
     	4 xn-component of xn+y argument ([+-]?\d*n|)
     	5 sign of xn-component
     	6 x of xn-component
     	7 sign of y-component
     	8 y of y-component
     */
					match[1] = match[1].toLowerCase();

					if (match[1].slice(0, 3) === "nth") {
						// nth-* requires argument
						if (!match[3]) {
							Sizzle.error(match[0]);
						}

						// numeric x and y parameters for Expr.filter.CHILD
						// remember that false/true cast respectively to 0/1
						match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
						match[5] = +(match[7] + match[8] || match[3] === "odd");

						// other types prohibit arguments
					} else if (match[3]) {
						Sizzle.error(match[0]);
					}

					return match;
				},

				"PSEUDO": function PSEUDO(match) {
					var excess,
					    unquoted = !match[6] && match[2];

					if (matchExpr["CHILD"].test(match[0])) {
						return null;
					}

					// Accept quoted arguments as-is
					if (match[3]) {
						match[2] = match[4] || match[5] || "";

						// Strip excess characters from unquoted arguments
					} else if (unquoted && rpseudo.test(unquoted) && (
					// Get excess from tokenize (recursively)
					excess = tokenize(unquoted, true)) && (
					// advance to the next closing parenthesis
					excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

						// excess is a negative index
						match[0] = match[0].slice(0, excess);
						match[2] = unquoted.slice(0, excess);
					}

					// Return only captures needed by the pseudo filter method (type and argument)
					return match.slice(0, 3);
				}
			},

			filter: {

				"TAG": function TAG(nodeNameSelector) {
					var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
					return nodeNameSelector === "*" ? function () {
						return true;
					} : function (elem) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
				},

				"CLASS": function CLASS(className) {
					var pattern = classCache[className + " "];

					return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
						return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
					});
				},

				"ATTR": function ATTR(name, operator, check) {
					return function (elem) {
						var result = Sizzle.attr(elem, name);

						if (result == null) {
							return operator === "!=";
						}
						if (!operator) {
							return true;
						}

						result += "";

						return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
					};
				},

				"CHILD": function CHILD(type, what, argument, first, last) {
					var simple = type.slice(0, 3) !== "nth",
					    forward = type.slice(-4) !== "last",
					    ofType = what === "of-type";

					return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function (elem) {
						return !!elem.parentNode;
					} : function (elem, context, xml) {
						var cache,
						    uniqueCache,
						    outerCache,
						    node,
						    nodeIndex,
						    start,
						    dir = simple !== forward ? "nextSibling" : "previousSibling",
						    parent = elem.parentNode,
						    name = ofType && elem.nodeName.toLowerCase(),
						    useCache = !xml && !ofType,
						    diff = false;

						if (parent) {

							// :(first|last|only)-(child|of-type)
							if (simple) {
								while (dir) {
									node = elem;
									while (node = node[dir]) {
										if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [forward ? parent.firstChild : parent.lastChild];

							// non-xml :nth-child(...) stores cache data on `parent`
							if (forward && useCache) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[expando] || (node[expando] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

								cache = uniqueCache[type] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = nodeIndex && cache[2];
								node = nodeIndex && parent.childNodes[nodeIndex];

								while (node = ++nodeIndex && node && node[dir] || (

								// Fallback to seeking `elem` from the start
								diff = nodeIndex = 0) || start.pop()) {

									// When found, cache indexes on `parent` and break
									if (node.nodeType === 1 && ++diff && node === elem) {
										uniqueCache[type] = [dirruns, nodeIndex, diff];
										break;
									}
								}
							} else {
								// Use previously-cached element index if available
								if (useCache) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[expando] || (node[expando] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

									cache = uniqueCache[type] || [];
									nodeIndex = cache[0] === dirruns && cache[1];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if (diff === false) {
									// Use the same loop as above to seek `elem` from the start
									while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {

										if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {

											// Cache the index of each encountered element
											if (useCache) {
												outerCache = node[expando] || (node[expando] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

												uniqueCache[type] = [dirruns, diff];
											}

											if (node === elem) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || diff % first === 0 && diff / first >= 0;
						}
					};
				},

				"PSEUDO": function PSEUDO(pseudo, argument) {
					// pseudo-class names are case-insensitive
					// http://www.w3.org/TR/selectors/#pseudo-classes
					// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
					// Remember that setFilters inherits from pseudos
					var args,
					    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

					// The user may use createPseudo to indicate that
					// arguments are needed to create the filter function
					// just as Sizzle does
					if (fn[expando]) {
						return fn(argument);
					}

					// But maintain support for old signatures
					if (fn.length > 1) {
						args = [pseudo, pseudo, "", argument];
						return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
							var idx,
							    matched = fn(seed, argument),
							    i = matched.length;
							while (i--) {
								idx = indexOf(seed, matched[i]);
								seed[idx] = !(matches[idx] = matched[i]);
							}
						}) : function (elem) {
							return fn(elem, 0, args);
						};
					}

					return fn;
				}
			},

			pseudos: {
				// Potentially complex pseudos
				"not": markFunction(function (selector) {
					// Trim the selector passed to compile
					// to avoid treating leading and trailing
					// spaces as combinators
					var input = [],
					    results = [],
					    matcher = compile(selector.replace(rtrim, "$1"));

					return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
						var elem,
						    unmatched = matcher(seed, null, xml, []),
						    i = seed.length;

						// Match elements unmatched by `matcher`
						while (i--) {
							if (elem = unmatched[i]) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) : function (elem, context, xml) {
						input[0] = elem;
						matcher(input, null, xml, results);
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
				}),

				"has": markFunction(function (selector) {
					return function (elem) {
						return Sizzle(selector, elem).length > 0;
					};
				}),

				"contains": markFunction(function (text) {
					text = text.replace(runescape, funescape);
					return function (elem) {
						return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
					};
				}),

				// "Whether an element is represented by a :lang() selector
				// is based solely on the element's language value
				// being equal to the identifier C,
				// or beginning with the identifier C immediately followed by "-".
				// The matching of C against the element's language value is performed case-insensitively.
				// The identifier C does not have to be a valid language name."
				// http://www.w3.org/TR/selectors/#lang-pseudo
				"lang": markFunction(function (lang) {
					// lang value must be a valid identifier
					if (!ridentifier.test(lang || "")) {
						Sizzle.error("unsupported lang: " + lang);
					}
					lang = lang.replace(runescape, funescape).toLowerCase();
					return function (elem) {
						var elemLang;
						do {
							if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {

								elemLang = elemLang.toLowerCase();
								return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
							}
						} while ((elem = elem.parentNode) && elem.nodeType === 1);
						return false;
					};
				}),

				// Miscellaneous
				"target": function target(elem) {
					var hash = window.location && window.location.hash;
					return hash && hash.slice(1) === elem.id;
				},

				"root": function root(elem) {
					return elem === docElem;
				},

				"focus": function focus(elem) {
					return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
				},

				// Boolean properties
				"enabled": createDisabledPseudo(false),
				"disabled": createDisabledPseudo(true),

				"checked": function checked(elem) {
					// In CSS3, :checked should return both checked and selected elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					var nodeName = elem.nodeName.toLowerCase();
					return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
				},

				"selected": function selected(elem) {
					// Accessing this property makes selected-by-default
					// options in Safari work properly
					if (elem.parentNode) {
						elem.parentNode.selectedIndex;
					}

					return elem.selected === true;
				},

				// Contents
				"empty": function empty(elem) {
					// http://www.w3.org/TR/selectors/#empty-pseudo
					// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
					//   but not by others (comment: 8; processing instruction: 7; etc.)
					// nodeType < 6 works because attributes (2) do not appear as children
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						if (elem.nodeType < 6) {
							return false;
						}
					}
					return true;
				},

				"parent": function parent(elem) {
					return !Expr.pseudos["empty"](elem);
				},

				// Element/input types
				"header": function header(elem) {
					return rheader.test(elem.nodeName);
				},

				"input": function input(elem) {
					return rinputs.test(elem.nodeName);
				},

				"button": function button(elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === "button" || name === "button";
				},

				"text": function text(elem) {
					var attr;
					return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
				},

				// Position-in-collection
				"first": createPositionalPseudo(function () {
					return [0];
				}),

				"last": createPositionalPseudo(function (matchIndexes, length) {
					return [length - 1];
				}),

				"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
					return [argument < 0 ? argument + length : argument];
				}),

				"even": createPositionalPseudo(function (matchIndexes, length) {
					var i = 0;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"odd": createPositionalPseudo(function (matchIndexes, length) {
					var i = 1;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; --i >= 0;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; ++i < length;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				})
			}
		};

		Expr.pseudos["nth"] = Expr.pseudos["eq"];

		// Add button/input type pseudos
		for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
			Expr.pseudos[i] = createInputPseudo(i);
		}
		for (i in { submit: true, reset: true }) {
			Expr.pseudos[i] = createButtonPseudo(i);
		}

		// Easy API for creating new setFilters
		function setFilters() {}
		setFilters.prototype = Expr.filters = Expr.pseudos;
		Expr.setFilters = new setFilters();

		tokenize = Sizzle.tokenize = function (selector, parseOnly) {
			var matched,
			    match,
			    tokens,
			    type,
			    soFar,
			    groups,
			    preFilters,
			    cached = tokenCache[selector + " "];

			if (cached) {
				return parseOnly ? 0 : cached.slice(0);
			}

			soFar = selector;
			groups = [];
			preFilters = Expr.preFilter;

			while (soFar) {

				// Comma and first run
				if (!matched || (match = rcomma.exec(soFar))) {
					if (match) {
						// Don't consume trailing commas as valid
						soFar = soFar.slice(match[0].length) || soFar;
					}
					groups.push(tokens = []);
				}

				matched = false;

				// Combinators
				if (match = rcombinators.exec(soFar)) {
					matched = match.shift();
					tokens.push({
						value: matched,
						// Cast descendant combinators to space
						type: match[0].replace(rtrim, " ")
					});
					soFar = soFar.slice(matched.length);
				}

				// Filters
				for (type in Expr.filter) {
					if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
						matched = match.shift();
						tokens.push({
							value: matched,
							type: type,
							matches: match
						});
						soFar = soFar.slice(matched.length);
					}
				}

				if (!matched) {
					break;
				}
			}

			// Return the length of the invalid excess
			// if we're just parsing
			// Otherwise, throw an error or return tokens
			return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
			// Cache the tokens
			tokenCache(selector, groups).slice(0);
		};

		function toSelector(tokens) {
			var i = 0,
			    len = tokens.length,
			    selector = "";
			for (; i < len; i++) {
				selector += tokens[i].value;
			}
			return selector;
		}

		function addCombinator(matcher, combinator, base) {
			var dir = combinator.dir,
			    skip = combinator.next,
			    key = skip || dir,
			    checkNonElements = base && key === "parentNode",
			    doneName = done++;

			return combinator.first ?
			// Check against closest ancestor/preceding element
			function (elem, context, xml) {
				while (elem = elem[dir]) {
					if (elem.nodeType === 1 || checkNonElements) {
						return matcher(elem, context, xml);
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function (elem, context, xml) {
				var oldCache,
				    uniqueCache,
				    outerCache,
				    newCache = [dirruns, doneName];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if (xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							if (matcher(elem, context, xml)) {
								return true;
							}
						}
					}
				} else {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							outerCache = elem[expando] || (elem[expando] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

							if (skip && skip === elem.nodeName.toLowerCase()) {
								elem = elem[dir] || elem;
							} else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {

								// Assign to newCache so results back-propagate to previous elements
								return newCache[2] = oldCache[2];
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[key] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if (newCache[2] = matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
		}

		function elementMatcher(matchers) {
			return matchers.length > 1 ? function (elem, context, xml) {
				var i = matchers.length;
				while (i--) {
					if (!matchers[i](elem, context, xml)) {
						return false;
					}
				}
				return true;
			} : matchers[0];
		}

		function multipleContexts(selector, contexts, results) {
			var i = 0,
			    len = contexts.length;
			for (; i < len; i++) {
				Sizzle(selector, contexts[i], results);
			}
			return results;
		}

		function condense(unmatched, map, filter, context, xml) {
			var elem,
			    newUnmatched = [],
			    i = 0,
			    len = unmatched.length,
			    mapped = map != null;

			for (; i < len; i++) {
				if (elem = unmatched[i]) {
					if (!filter || filter(elem, context, xml)) {
						newUnmatched.push(elem);
						if (mapped) {
							map.push(i);
						}
					}
				}
			}

			return newUnmatched;
		}

		function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
			if (postFilter && !postFilter[expando]) {
				postFilter = setMatcher(postFilter);
			}
			if (postFinder && !postFinder[expando]) {
				postFinder = setMatcher(postFinder, postSelector);
			}
			return markFunction(function (seed, results, context, xml) {
				var temp,
				    i,
				    elem,
				    preMap = [],
				    postMap = [],
				    preexisting = results.length,


				// Get initial elements from seed or context
				elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),


				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
				    matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || (seed ? preFilter : preexisting || postFilter) ?

				// ...intermediate processing is necessary
				[] :

				// ...otherwise use results directly
				results : matcherIn;

				// Find primary matches
				if (matcher) {
					matcher(matcherIn, matcherOut, context, xml);
				}

				// Apply postFilter
				if (postFilter) {
					temp = condense(matcherOut, postMap);
					postFilter(temp, [], context, xml);

					// Un-match failing elements by moving them back to matcherIn
					i = temp.length;
					while (i--) {
						if (elem = temp[i]) {
							matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
						}
					}
				}

				if (seed) {
					if (postFinder || preFilter) {
						if (postFinder) {
							// Get the final matcherOut by condensing this intermediate into postFinder contexts
							temp = [];
							i = matcherOut.length;
							while (i--) {
								if (elem = matcherOut[i]) {
									// Restore matcherIn since elem is not yet a final match
									temp.push(matcherIn[i] = elem);
								}
							}
							postFinder(null, matcherOut = [], temp, xml);
						}

						// Move matched elements from seed to results to keep them synchronized
						i = matcherOut.length;
						while (i--) {
							if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

								seed[temp] = !(results[temp] = elem);
							}
						}
					}

					// Add elements to results, through postFinder if defined
				} else {
					matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
					if (postFinder) {
						postFinder(null, results, matcherOut, xml);
					} else {
						push.apply(results, matcherOut);
					}
				}
			});
		}

		function matcherFromTokens(tokens) {
			var checkContext,
			    matcher,
			    j,
			    len = tokens.length,
			    leadingRelative = Expr.relative[tokens[0].type],
			    implicitRelative = leadingRelative || Expr.relative[" "],
			    i = leadingRelative ? 1 : 0,


			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator(function (elem) {
				return elem === checkContext;
			}, implicitRelative, true),
			    matchAnyContext = addCombinator(function (elem) {
				return indexOf(checkContext, elem) > -1;
			}, implicitRelative, true),
			    matchers = [function (elem, context, xml) {
				var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			}];

			for (; i < len; i++) {
				if (matcher = Expr.relative[tokens[i].type]) {
					matchers = [addCombinator(elementMatcher(matchers), matcher)];
				} else {
					matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

					// Return special upon seeing a positional matcher
					if (matcher[expando]) {
						// Find the next relative operator (if any) for proper handling
						j = ++i;
						for (; j < len; j++) {
							if (Expr.relative[tokens[j].type]) {
								break;
							}
						}
						return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
					}
					matchers.push(matcher);
				}
			}

			return elementMatcher(matchers);
		}

		function matcherFromGroupMatchers(elementMatchers, setMatchers) {
			var bySet = setMatchers.length > 0,
			    byElement = elementMatchers.length > 0,
			    superMatcher = function superMatcher(seed, context, xml, results, outermost) {
				var elem,
				    j,
				    matcher,
				    matchedCount = 0,
				    i = "0",
				    unmatched = seed && [],
				    setMatched = [],
				    contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]("*", outermost),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
				    len = elems.length;

				if (outermost) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for (; i !== len && (elem = elems[i]) != null; i++) {
					if (byElement && elem) {
						j = 0;
						if (!context && elem.ownerDocument !== document) {
							setDocument(elem);
							xml = !documentIsHTML;
						}
						while (matcher = elementMatchers[j++]) {
							if (matcher(elem, context || document, xml)) {
								results.push(elem);
								break;
							}
						}
						if (outermost) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if (bySet) {
						// They will have gone through all possible matchers
						if (elem = !matcher && elem) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if (seed) {
							unmatched.push(elem);
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if (bySet && i !== matchedCount) {
					j = 0;
					while (matcher = setMatchers[j++]) {
						matcher(unmatched, setMatched, context, xml);
					}

					if (seed) {
						// Reintegrate element matches to eliminate the need for sorting
						if (matchedCount > 0) {
							while (i--) {
								if (!(unmatched[i] || setMatched[i])) {
									setMatched[i] = pop.call(results);
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense(setMatched);
					}

					// Add matches to results
					push.apply(results, setMatched);

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

						Sizzle.uniqueSort(results);
					}
				}

				// Override manipulation of globals by nested matchers
				if (outermost) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

			return bySet ? markFunction(superMatcher) : superMatcher;
		}

		compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
			var i,
			    setMatchers = [],
			    elementMatchers = [],
			    cached = compilerCache[selector + " "];

			if (!cached) {
				// Generate a function of recursive functions that can be used to check each element
				if (!match) {
					match = tokenize(selector);
				}
				i = match.length;
				while (i--) {
					cached = matcherFromTokens(match[i]);
					if (cached[expando]) {
						setMatchers.push(cached);
					} else {
						elementMatchers.push(cached);
					}
				}

				// Cache the compiled function
				cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

				// Save selector and tokenization
				cached.selector = selector;
			}
			return cached;
		};

		/**
   * A low-level selection function that works with Sizzle's compiled
   *  selector functions
   * @param {String|Function} selector A selector or a pre-compiled
   *  selector function built with Sizzle.compile
   * @param {Element} context
   * @param {Array} [results]
   * @param {Array} [seed] A set of elements to match against
   */
		select = Sizzle.select = function (selector, context, results, seed) {
			var i,
			    tokens,
			    token,
			    type,
			    find,
			    compiled = typeof selector === "function" && selector,
			    match = !seed && tokenize(selector = compiled.selector || selector);

			results = results || [];

			// Try to minimize operations if there is only one selector in the list and no seed
			// (the latter of which guarantees us context)
			if (match.length === 1) {

				// Reduce context if the leading compound selector is an ID
				tokens = match[0] = match[0].slice(0);
				if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

					context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
					if (!context) {
						return results;

						// Precompiled matchers will still verify ancestry, so step up a level
					} else if (compiled) {
						context = context.parentNode;
					}

					selector = selector.slice(tokens.shift().value.length);
				}

				// Fetch a seed set for right-to-left matching
				i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
				while (i--) {
					token = tokens[i];

					// Abort if we hit a combinator
					if (Expr.relative[type = token.type]) {
						break;
					}
					if (find = Expr.find[type]) {
						// Search, expanding context for leading sibling combinators
						if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {

							// If seed is empty or no tokens remain, we can return early
							tokens.splice(i, 1);
							selector = seed.length && toSelector(tokens);
							if (!selector) {
								push.apply(results, seed);
								return results;
							}

							break;
						}
					}
				}
			}

			// Compile and execute a filtering function if one is not provided
			// Provide `match` to avoid retokenization if we modified the selector above
			(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
			return results;
		};

		// One-time assignments

		// Sort stability
		support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

		// Support: Chrome 14-35+
		// Always assume duplicates if they aren't passed to the comparison function
		support.detectDuplicates = !!hasDuplicate;

		// Initialize against the default document
		setDocument();

		// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
		// Detached nodes confoundingly follow *each other*
		support.sortDetached = assert(function (el) {
			// Should return 1, but returns 4 (following)
			return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
		});

		// Support: IE<8
		// Prevent attribute/property "interpolation"
		// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
		if (!assert(function (el) {
			el.innerHTML = "<a href='#'></a>";
			return el.firstChild.getAttribute("href") === "#";
		})) {
			addHandle("type|href|height|width", function (elem, name, isXML) {
				if (!isXML) {
					return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
				}
			});
		}

		// Support: IE<9
		// Use defaultValue in place of getAttribute("value")
		if (!support.attributes || !assert(function (el) {
			el.innerHTML = "<input/>";
			el.firstChild.setAttribute("value", "");
			return el.firstChild.getAttribute("value") === "";
		})) {
			addHandle("value", function (elem, name, isXML) {
				if (!isXML && elem.nodeName.toLowerCase() === "input") {
					return elem.defaultValue;
				}
			});
		}

		// Support: IE<9
		// Use getAttributeNode to fetch booleans when getAttribute lies
		if (!assert(function (el) {
			return el.getAttribute("disabled") == null;
		})) {
			addHandle(booleans, function (elem, name, isXML) {
				var val;
				if (!isXML) {
					return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
				}
			});
		}

		return Sizzle;
	}(window);

	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;

	var dir = function dir(elem, _dir, until) {
		var matched = [],
		    truncate = until !== undefined;

		while ((elem = elem[_dir]) && elem.nodeType !== 9) {
			if (elem.nodeType === 1) {
				if (truncate && jQuery(elem).is(until)) {
					break;
				}
				matched.push(elem);
			}
		}
		return matched;
	};

	var _siblings = function _siblings(n, elem) {
		var matched = [];

		for (; n; n = n.nextSibling) {
			if (n.nodeType === 1 && n !== elem) {
				matched.push(n);
			}
		}

		return matched;
	};

	var rneedsContext = jQuery.expr.match.needsContext;

	function nodeName(elem, name) {

		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	};
	var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	// Implement the identical functionality for filter and not
	function winnow(elements, qualifier, not) {
		if (isFunction(qualifier)) {
			return jQuery.grep(elements, function (elem, i) {
				return !!qualifier.call(elem, i, elem) !== not;
			});
		}

		// Single element
		if (qualifier.nodeType) {
			return jQuery.grep(elements, function (elem) {
				return elem === qualifier !== not;
			});
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if (typeof qualifier !== "string") {
			return jQuery.grep(elements, function (elem) {
				return indexOf.call(qualifier, elem) > -1 !== not;
			});
		}

		// Filtered directly for both simple and complex selectors
		return jQuery.filter(qualifier, elements, not);
	}

	jQuery.filter = function (expr, elems, not) {
		var elem = elems[0];

		if (not) {
			expr = ":not(" + expr + ")";
		}

		if (elems.length === 1 && elem.nodeType === 1) {
			return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
		}

		return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
			return elem.nodeType === 1;
		}));
	};

	jQuery.fn.extend({
		find: function find(selector) {
			var i,
			    ret,
			    len = this.length,
			    self = this;

			if (typeof selector !== "string") {
				return this.pushStack(jQuery(selector).filter(function () {
					for (i = 0; i < len; i++) {
						if (jQuery.contains(self[i], this)) {
							return true;
						}
					}
				}));
			}

			ret = this.pushStack([]);

			for (i = 0; i < len; i++) {
				jQuery.find(selector, self[i], ret);
			}

			return len > 1 ? jQuery.uniqueSort(ret) : ret;
		},
		filter: function filter(selector) {
			return this.pushStack(winnow(this, selector || [], false));
		},
		not: function not(selector) {
			return this.pushStack(winnow(this, selector || [], true));
		},
		is: function is(selector) {
			return !!winnow(this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
		}
	});

	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,


	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	    init = jQuery.fn.init = function (selector, context, root) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if (!selector) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if (typeof selector === "string") {
			if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [null, selector, null];
			} else {
				match = rquickExpr.exec(selector);
			}

			// Match html or make sure no context is specified for #id
			if (match && (match[1] || !context)) {

				// HANDLE: $(html) -> $(array)
				if (match[1]) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

					// HANDLE: $(html, props)
					if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
						for (match in context) {

							// Properties of context are called as methods if possible
							if (isFunction(this[match])) {
								this[match](context[match]);

								// ...and otherwise set as attributes
							} else {
								this.attr(match, context[match]);
							}
						}
					}

					return this;

					// HANDLE: $(#id)
				} else {
					elem = document.getElementById(match[2]);

					if (elem) {

						// Inject the element directly into the jQuery object
						this[0] = elem;
						this.length = 1;
					}
					return this;
				}

				// HANDLE: $(expr, $(...))
			} else if (!context || context.jquery) {
				return (context || root).find(selector);

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor(context).find(selector);
			}

			// HANDLE: $(DOMElement)
		} else if (selector.nodeType) {
			this[0] = selector;
			this.length = 1;
			return this;

			// HANDLE: $(function)
			// Shortcut for document ready
		} else if (isFunction(selector)) {
			return root.ready !== undefined ? root.ready(selector) :

			// Execute immediately if ready is not present
			selector(jQuery);
		}

		return jQuery.makeArray(selector, this);
	};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery(document);

	var rparentsprev = /^(?:parents|prev(?:Until|All))/,


	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

	jQuery.fn.extend({
		has: function has(target) {
			var targets = jQuery(target, this),
			    l = targets.length;

			return this.filter(function () {
				var i = 0;
				for (; i < l; i++) {
					if (jQuery.contains(this, targets[i])) {
						return true;
					}
				}
			});
		},

		closest: function closest(selectors, context) {
			var cur,
			    i = 0,
			    l = this.length,
			    matched = [],
			    targets = typeof selectors !== "string" && jQuery(selectors);

			// Positional selectors never match, since there's no _selection_ context
			if (!rneedsContext.test(selectors)) {
				for (; i < l; i++) {
					for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

						// Always skip document fragments
						if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {

							matched.push(cur);
							break;
						}
					}
				}
			}

			return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
		},

		// Determine the position of an element within the set
		index: function index(elem) {

			// No argument, return index in parent
			if (!elem) {
				return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if (typeof elem === "string") {
				return indexOf.call(jQuery(elem), this[0]);
			}

			// Locate the position of the desired element
			return indexOf.call(this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem);
		},

		add: function add(selector, context) {
			return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
		},

		addBack: function addBack(selector) {
			return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
		}
	});

	function sibling(cur, dir) {
		while ((cur = cur[dir]) && cur.nodeType !== 1) {}
		return cur;
	}

	jQuery.each({
		parent: function parent(elem) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function parents(elem) {
			return dir(elem, "parentNode");
		},
		parentsUntil: function parentsUntil(elem, i, until) {
			return dir(elem, "parentNode", until);
		},
		next: function next(elem) {
			return sibling(elem, "nextSibling");
		},
		prev: function prev(elem) {
			return sibling(elem, "previousSibling");
		},
		nextAll: function nextAll(elem) {
			return dir(elem, "nextSibling");
		},
		prevAll: function prevAll(elem) {
			return dir(elem, "previousSibling");
		},
		nextUntil: function nextUntil(elem, i, until) {
			return dir(elem, "nextSibling", until);
		},
		prevUntil: function prevUntil(elem, i, until) {
			return dir(elem, "previousSibling", until);
		},
		siblings: function siblings(elem) {
			return _siblings((elem.parentNode || {}).firstChild, elem);
		},
		children: function children(elem) {
			return _siblings(elem.firstChild);
		},
		contents: function contents(elem) {
			if (nodeName(elem, "iframe")) {
				return elem.contentDocument;
			}

			// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
			// Treat the template element as a regular one in browsers that
			// don't support it.
			if (nodeName(elem, "template")) {
				elem = elem.content || elem;
			}

			return jQuery.merge([], elem.childNodes);
		}
	}, function (name, fn) {
		jQuery.fn[name] = function (until, selector) {
			var matched = jQuery.map(this, fn, until);

			if (name.slice(-5) !== "Until") {
				selector = until;
			}

			if (selector && typeof selector === "string") {
				matched = jQuery.filter(selector, matched);
			}

			if (this.length > 1) {

				// Remove duplicates
				if (!guaranteedUnique[name]) {
					jQuery.uniqueSort(matched);
				}

				// Reverse order for parents* and prev-derivatives
				if (rparentsprev.test(name)) {
					matched.reverse();
				}
			}

			return this.pushStack(matched);
		};
	});
	var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;

	// Convert String-formatted options into Object-formatted ones
	function createOptions(options) {
		var object = {};
		jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
			object[flag] = true;
		});
		return object;
	}

	/*
  * Create a callback list using the following parameters:
  *
  *	options: an optional list of space-separated options that will change how
  *			the callback list behaves or a more traditional option object
  *
  * By default a callback list will act like an event callback list and can be
  * "fired" multiple times.
  *
  * Possible options:
  *
  *	once:			will ensure the callback list can only be fired once (like a Deferred)
  *
  *	memory:			will keep track of previous values and will call any callback added
  *					after the list has been fired right away with the latest "memorized"
  *					values (like a Deferred)
  *
  *	unique:			will ensure a callback can only be added once (no duplicate in the list)
  *
  *	stopOnFalse:	interrupt callings when a callback returns false
  *
  */
	jQuery.Callbacks = function (options) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

		var // Flag to know if list is currently firing
		firing,


		// Last fire value for non-forgettable lists
		memory,


		// Flag to know if list was already fired
		_fired,


		// Flag to prevent firing
		_locked,


		// Actual callback list
		list = [],


		// Queue of execution data for repeatable lists
		queue = [],


		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,


		// Fire callbacks
		fire = function fire() {

			// Enforce single-firing
			_locked = _locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			_fired = firing = true;
			for (; queue.length; firingIndex = -1) {
				memory = queue.shift();
				while (++firingIndex < list.length) {

					// Run callback and check for early termination
					if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if (!options.memory) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if (_locked) {

				// Keep an empty list if we have data for future add calls
				if (memory) {
					list = [];

					// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},


		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function add() {
				if (list) {

					// If we have memory from a past run, we should fire after adding
					if (memory && !firing) {
						firingIndex = list.length - 1;
						queue.push(memory);
					}

					(function add(args) {
						jQuery.each(args, function (_, arg) {
							if (isFunction(arg)) {
								if (!options.unique || !self.has(arg)) {
									list.push(arg);
								}
							} else if (arg && arg.length && toType(arg) !== "string") {

								// Inspect recursively
								add(arg);
							}
						});
					})(arguments);

					if (memory && !firing) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function remove() {
				jQuery.each(arguments, function (_, arg) {
					var index;
					while ((index = jQuery.inArray(arg, list, index)) > -1) {
						list.splice(index, 1);

						// Handle firing indexes
						if (index <= firingIndex) {
							firingIndex--;
						}
					}
				});
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function has(fn) {
				return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function empty() {
				if (list) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function disable() {
				_locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function disabled() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function lock() {
				_locked = queue = [];
				if (!memory && !firing) {
					list = memory = "";
				}
				return this;
			},
			locked: function locked() {
				return !!_locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function fireWith(context, args) {
				if (!_locked) {
					args = args || [];
					args = [context, args.slice ? args.slice() : args];
					queue.push(args);
					if (!firing) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function fire() {
				self.fireWith(this, arguments);
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function fired() {
				return !!_fired;
			}
		};

		return self;
	};

	function Identity(v) {
		return v;
	}
	function Thrower(ex) {
		throw ex;
	}

	function adoptValue(value, resolve, reject, noValue) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if (value && isFunction(method = value.promise)) {
				method.call(value).done(resolve).fail(reject);

				// Other thenables
			} else if (value && isFunction(method = value.then)) {
				method.call(value, resolve, reject);

				// Other non-thenables
			} else {

				// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
				// * false: [ value ].slice( 0 ) => resolve( value )
				// * true: [ value ].slice( 1 ) => resolve()
				resolve.apply(undefined, [value].slice(noValue));
			}

			// For Promises/A+, convert exceptions into rejections
			// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
			// Deferred#then to conditionally suppress rejection.
		} catch (value) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.apply(undefined, [value]);
		}
	}

	jQuery.extend({

		Deferred: function Deferred(func) {
			var tuples = [

			// action, add listener, callbacks,
			// ... .then handlers, argument index, [final state]
			["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
			    _state = "pending",
			    _promise = {
				state: function state() {
					return _state;
				},
				always: function always() {
					deferred.done(arguments).fail(arguments);
					return this;
				},
				"catch": function _catch(fn) {
					return _promise.then(null, fn);
				},

				// Keep pipe for back-compat
				pipe: function pipe() /* fnDone, fnFail, fnProgress */{
					var fns = arguments;

					return jQuery.Deferred(function (newDefer) {
						jQuery.each(tuples, function (i, tuple) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[tuple[1]](function () {
								var returned = fn && fn.apply(this, arguments);
								if (returned && isFunction(returned.promise)) {
									returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
								} else {
									newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
								}
							});
						});
						fns = null;
					}).promise();
				},
				then: function then(onFulfilled, onRejected, onProgress) {
					var maxDepth = 0;
					function resolve(depth, deferred, handler, special) {
						return function () {
							var that = this,
							    args = arguments,
							    mightThrow = function mightThrow() {
								var returned, then;

								// Support: Promises/A+ section 2.3.3.3.3
								// https://promisesaplus.com/#point-59
								// Ignore double-resolution attempts
								if (depth < maxDepth) {
									return;
								}

								returned = handler.apply(that, args);

								// Support: Promises/A+ section 2.3.1
								// https://promisesaplus.com/#point-48
								if (returned === deferred.promise()) {
									throw new TypeError("Thenable self-resolution");
								}

								// Support: Promises/A+ sections 2.3.3.1, 3.5
								// https://promisesaplus.com/#point-54
								// https://promisesaplus.com/#point-75
								// Retrieve `then` only once
								then = returned && (

								// Support: Promises/A+ section 2.3.4
								// https://promisesaplus.com/#point-64
								// Only check objects and functions for thenability
								(typeof returned === "undefined" ? "undefined" : _typeof(returned)) === "object" || typeof returned === "function") && returned.then;

								// Handle a returned thenable
								if (isFunction(then)) {

									// Special processors (notify) just wait for resolution
									if (special) {
										then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));

										// Normal processors (resolve) also hook into progress
									} else {

										// ...and disregard older resolution values
										maxDepth++;

										then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
									}

									// Handle all other returned values
								} else {

									// Only substitute handlers pass on context
									// and multiple values (non-spec behavior)
									if (handler !== Identity) {
										that = undefined;
										args = [returned];
									}

									// Process the value(s)
									// Default process is resolve
									(special || deferred.resolveWith)(that, args);
								}
							},


							// Only normal processors (resolve) catch and reject exceptions
							process = special ? mightThrow : function () {
								try {
									mightThrow();
								} catch (e) {

									if (jQuery.Deferred.exceptionHook) {
										jQuery.Deferred.exceptionHook(e, process.stackTrace);
									}

									// Support: Promises/A+ section 2.3.3.3.4.1
									// https://promisesaplus.com/#point-61
									// Ignore post-resolution exceptions
									if (depth + 1 >= maxDepth) {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if (handler !== Thrower) {
											that = undefined;
											args = [e];
										}

										deferred.rejectWith(that, args);
									}
								}
							};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if (depth) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if (jQuery.Deferred.getStackHook) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout(process);
							}
						};
					}

					return jQuery.Deferred(function (newDefer) {

						// progress_handlers.add( ... )
						tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));

						// fulfilled_handlers.add( ... )
						tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));

						// rejected_handlers.add( ... )
						tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
					}).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function promise(obj) {
					return obj != null ? jQuery.extend(obj, _promise) : _promise;
				}
			},
			    deferred = {};

			// Add list-specific methods
			jQuery.each(tuples, function (i, tuple) {
				var list = tuple[2],
				    stateString = tuple[5];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				_promise[tuple[1]] = list.add;

				// Handle state
				if (stateString) {
					list.add(function () {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						_state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[3 - i][2].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[3 - i][3].disable,

					// progress_callbacks.lock
					tuples[0][2].lock,

					// progress_handlers.lock
					tuples[0][3].lock);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add(tuple[3].fire);

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[tuple[0]] = function () {
					deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[tuple[0] + "With"] = list.fireWith;
			});

			// Make the deferred a promise
			_promise.promise(deferred);

			// Call given func if any
			if (func) {
				func.call(deferred, deferred);
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function when(singleValue) {
			var

			// count of uncompleted subordinates
			remaining = arguments.length,


			// count of unprocessed arguments
			i = remaining,


			// subordinate fulfillment data
			resolveContexts = Array(i),
			    resolveValues = _slice.call(arguments),


			// the master Deferred
			master = jQuery.Deferred(),


			// subordinate callback factory
			updateFunc = function updateFunc(i) {
				return function (value) {
					resolveContexts[i] = this;
					resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;
					if (! --remaining) {
						master.resolveWith(resolveContexts, resolveValues);
					}
				};
			};

			// Single- and empty arguments are adopted like Promise.resolve
			if (remaining <= 1) {
				adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining);

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while (i--) {
				adoptValue(resolveValues[i], updateFunc(i), master.reject);
			}

			return master.promise();
		}
	});

	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function (error, stack) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
			window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
		}
	};

	jQuery.readyException = function (error) {
		window.setTimeout(function () {
			throw error;
		});
	};

	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function (fn) {

		readyList.then(fn)

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch(function (error) {
			jQuery.readyException(error);
		});

		return this;
	};

	jQuery.extend({

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Handle when the DOM is ready
		ready: function ready(wait) {

			// Abort if there are pending holds or we're already ready
			if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if (wait !== true && --jQuery.readyWait > 0) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith(document, [jQuery]);
		}
	});

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener("DOMContentLoaded", completed);
		window.removeEventListener("load", completed);
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout(jQuery.ready);
	} else {

		// Use the handy event callback
		document.addEventListener("DOMContentLoaded", completed);

		// A fallback to window.onload, that will always work
		window.addEventListener("load", completed);
	}

	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
		var i = 0,
		    len = elems.length,
		    bulk = key == null;

		// Sets many values
		if (toType(key) === "object") {
			chainable = true;
			for (i in key) {
				access(elems, fn, i, key[i], true, emptyGet, raw);
			}

			// Sets one value
		} else if (value !== undefined) {
			chainable = true;

			if (!isFunction(value)) {
				raw = true;
			}

			if (bulk) {

				// Bulk operations run against the entire set
				if (raw) {
					fn.call(elems, value);
					fn = null;

					// ...except when executing function values
				} else {
					bulk = fn;
					fn = function fn(elem, key, value) {
						return bulk.call(jQuery(elem), value);
					};
				}
			}

			if (fn) {
				for (; i < len; i++) {
					fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
				}
			}
		}

		if (chainable) {
			return elems;
		}

		// Gets
		if (bulk) {
			return fn.call(elems);
		}

		return len ? fn(elems[0], key) : emptyGet;
	};

	// Matches dashed string for camelizing
	var rmsPrefix = /^-ms-/,
	    rdashAlpha = /-([a-z])/g;

	// Used by camelCase as callback to replace()
	function fcamelCase(all, letter) {
		return letter.toUpperCase();
	}

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 15
	// Microsoft forgot to hump their vendor prefix (#9572)
	function camelCase(string) {
		return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
	}
	var acceptData = function acceptData(owner) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
	};

	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function cache(owner) {

			// Check if the owner object already has a cache
			var value = owner[this.expando];

			// If not, create one
			if (!value) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if (acceptData(owner)) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if (owner.nodeType) {
						owner[this.expando] = value;

						// Otherwise secure it in a non-enumerable property
						// configurable must be true to allow the property to be
						// deleted when data is removed
					} else {
						Object.defineProperty(owner, this.expando, {
							value: value,
							configurable: true
						});
					}
				}
			}

			return value;
		},
		set: function set(owner, data, value) {
			var prop,
			    cache = this.cache(owner);

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if (typeof data === "string") {
				cache[camelCase(data)] = value;

				// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for (prop in data) {
					cache[camelCase(prop)] = data[prop];
				}
			}
			return cache;
		},
		get: function get(owner, key) {
			return key === undefined ? this.cache(owner) :

			// Always use camelCase key (gh-2257)
			owner[this.expando] && owner[this.expando][camelCase(key)];
		},
		access: function access(owner, key, value) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if (key === undefined || key && typeof key === "string" && value === undefined) {

				return this.get(owner, key);
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set(owner, key, value);

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function remove(owner, key) {
			var i,
			    cache = owner[this.expando];

			if (cache === undefined) {
				return;
			}

			if (key !== undefined) {

				// Support array or space separated string of keys
				if (Array.isArray(key)) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map(camelCase);
				} else {
					key = camelCase(key);

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
				}

				i = key.length;

				while (i--) {
					delete cache[key[i]];
				}
			}

			// Remove the expando if there's no more data
			if (key === undefined || jQuery.isEmptyObject(cache)) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if (owner.nodeType) {
					owner[this.expando] = undefined;
				} else {
					delete owner[this.expando];
				}
			}
		},
		hasData: function hasData(owner) {
			var cache = owner[this.expando];
			return cache !== undefined && !jQuery.isEmptyObject(cache);
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();

	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	    rmultiDash = /[A-Z]/g;

	function getData(data) {
		if (data === "true") {
			return true;
		}

		if (data === "false") {
			return false;
		}

		if (data === "null") {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if (data === +data + "") {
			return +data;
		}

		if (rbrace.test(data)) {
			return JSON.parse(data);
		}

		return data;
	}

	function dataAttr(elem, key, data) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if (data === undefined && elem.nodeType === 1) {
			name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
			data = elem.getAttribute(name);

			if (typeof data === "string") {
				try {
					data = getData(data);
				} catch (e) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set(elem, key, data);
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend({
		hasData: function hasData(elem) {
			return dataUser.hasData(elem) || dataPriv.hasData(elem);
		},

		data: function data(elem, name, _data) {
			return dataUser.access(elem, name, _data);
		},

		removeData: function removeData(elem, name) {
			dataUser.remove(elem, name);
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function _data(elem, name, data) {
			return dataPriv.access(elem, name, data);
		},

		_removeData: function _removeData(elem, name) {
			dataPriv.remove(elem, name);
		}
	});

	jQuery.fn.extend({
		data: function data(key, value) {
			var i,
			    name,
			    data,
			    elem = this[0],
			    attrs = elem && elem.attributes;

			// Gets all values
			if (key === undefined) {
				if (this.length) {
					data = dataUser.get(elem);

					if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
						i = attrs.length;
						while (i--) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if (attrs[i]) {
								name = attrs[i].name;
								if (name.indexOf("data-") === 0) {
									name = camelCase(name.slice(5));
									dataAttr(elem, name, data[name]);
								}
							}
						}
						dataPriv.set(elem, "hasDataAttrs", true);
					}
				}

				return data;
			}

			// Sets multiple values
			if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
				return this.each(function () {
					dataUser.set(this, key);
				});
			}

			return access(this, function (value) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if (elem && value === undefined) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get(elem, key);
					if (data !== undefined) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr(elem, key);
					if (data !== undefined) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each(function () {

					// We always store the camelCased key
					dataUser.set(this, key, value);
				});
			}, null, value, arguments.length > 1, null, true);
		},

		removeData: function removeData(key) {
			return this.each(function () {
				dataUser.remove(this, key);
			});
		}
	});

	jQuery.extend({
		queue: function queue(elem, type, data) {
			var queue;

			if (elem) {
				type = (type || "fx") + "queue";
				queue = dataPriv.get(elem, type);

				// Speed up dequeue by getting out quickly if this is just a lookup
				if (data) {
					if (!queue || Array.isArray(data)) {
						queue = dataPriv.access(elem, type, jQuery.makeArray(data));
					} else {
						queue.push(data);
					}
				}
				return queue || [];
			}
		},

		dequeue: function dequeue(elem, type) {
			type = type || "fx";

			var queue = jQuery.queue(elem, type),
			    startLength = queue.length,
			    fn = queue.shift(),
			    hooks = jQuery._queueHooks(elem, type),
			    next = function next() {
				jQuery.dequeue(elem, type);
			};

			// If the fx queue is dequeued, always remove the progress sentinel
			if (fn === "inprogress") {
				fn = queue.shift();
				startLength--;
			}

			if (fn) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if (type === "fx") {
					queue.unshift("inprogress");
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call(elem, next, hooks);
			}

			if (!startLength && hooks) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function _queueHooks(elem, type) {
			var key = type + "queueHooks";
			return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
				empty: jQuery.Callbacks("once memory").add(function () {
					dataPriv.remove(elem, [type + "queue", key]);
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function queue(type, data) {
			var setter = 2;

			if (typeof type !== "string") {
				data = type;
				type = "fx";
				setter--;
			}

			if (arguments.length < setter) {
				return jQuery.queue(this[0], type);
			}

			return data === undefined ? this : this.each(function () {
				var queue = jQuery.queue(this, type, data);

				// Ensure a hooks for this queue
				jQuery._queueHooks(this, type);

				if (type === "fx" && queue[0] !== "inprogress") {
					jQuery.dequeue(this, type);
				}
			});
		},
		dequeue: function dequeue(type) {
			return this.each(function () {
				jQuery.dequeue(this, type);
			});
		},
		clearQueue: function clearQueue(type) {
			return this.queue(type || "fx", []);
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function promise(type, obj) {
			var tmp,
			    count = 1,
			    defer = jQuery.Deferred(),
			    elements = this,
			    i = this.length,
			    resolve = function resolve() {
				if (! --count) {
					defer.resolveWith(elements, [elements]);
				}
			};

			if (typeof type !== "string") {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while (i--) {
				tmp = dataPriv.get(elements[i], type + "queueHooks");
				if (tmp && tmp.empty) {
					count++;
					tmp.empty.add(resolve);
				}
			}
			resolve();
			return defer.promise(obj);
		}
	});
	var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

	var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");

	var cssExpand = ["Top", "Right", "Bottom", "Left"];

	var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" || elem.style.display === "" &&

		// Otherwise, check computed style
		// Support: Firefox <=43 - 45
		// Disconnected elements can have computed display: none, so first confirm that elem is
		// in the document.
		jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none";
	};

	var swap = function swap(elem, options, callback, args) {
		var ret,
		    name,
		    old = {};

		// Remember the old values, and insert the new ones
		for (name in options) {
			old[name] = elem.style[name];
			elem.style[name] = options[name];
		}

		ret = callback.apply(elem, args || []);

		// Revert the old values
		for (name in options) {
			elem.style[name] = old[name];
		}

		return ret;
	};

	function adjustCSS(elem, prop, valueParts, tween) {
		var adjusted,
		    scale,
		    maxIterations = 20,
		    currentValue = tween ? function () {
			return tween.cur();
		} : function () {
			return jQuery.css(elem, prop, "");
		},
		    initial = currentValue(),
		    unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),


		// Starting value computation is required for potential unit mismatches
		initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

		if (initialInUnit && initialInUnit[3] !== unit) {

			// Support: Firefox <=54
			// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
			initial = initial / 2;

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[3];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			while (maxIterations--) {

				// Evaluate and update our best guess (doubling guesses that zero out).
				// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
				jQuery.style(elem, prop, initialInUnit + unit);
				if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
					maxIterations = 0;
				}
				initialInUnit = initialInUnit / scale;
			}

			initialInUnit = initialInUnit * 2;
			jQuery.style(elem, prop, initialInUnit + unit);

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
		}

		if (valueParts) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
			if (tween) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}

	var defaultDisplayMap = {};

	function getDefaultDisplay(elem) {
		var temp,
		    doc = elem.ownerDocument,
		    nodeName = elem.nodeName,
		    display = defaultDisplayMap[nodeName];

		if (display) {
			return display;
		}

		temp = doc.body.appendChild(doc.createElement(nodeName));
		display = jQuery.css(temp, "display");

		temp.parentNode.removeChild(temp);

		if (display === "none") {
			display = "block";
		}
		defaultDisplayMap[nodeName] = display;

		return display;
	}

	function showHide(elements, show) {
		var display,
		    elem,
		    values = [],
		    index = 0,
		    length = elements.length;

		// Determine new display value for elements that need to change
		for (; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}

			display = elem.style.display;
			if (show) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if (display === "none") {
					values[index] = dataPriv.get(elem, "display") || null;
					if (!values[index]) {
						elem.style.display = "";
					}
				}
				if (elem.style.display === "" && isHiddenWithinTree(elem)) {
					values[index] = getDefaultDisplay(elem);
				}
			} else {
				if (display !== "none") {
					values[index] = "none";

					// Remember what we're overwriting
					dataPriv.set(elem, "display", display);
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for (index = 0; index < length; index++) {
			if (values[index] != null) {
				elements[index].style.display = values[index];
			}
		}

		return elements;
	}

	jQuery.fn.extend({
		show: function show() {
			return showHide(this, true);
		},
		hide: function hide() {
			return showHide(this);
		},
		toggle: function toggle(state) {
			if (typeof state === "boolean") {
				return state ? this.show() : this.hide();
			}

			return this.each(function () {
				if (isHiddenWithinTree(this)) {
					jQuery(this).show();
				} else {
					jQuery(this).hide();
				}
			});
		}
	});
	var rcheckableType = /^(?:checkbox|radio)$/i;

	var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;

	var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;

	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [1, "<select multiple='multiple'>", "</select>"],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

		_default: [0, "", ""]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	function getAll(context, tag) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if (typeof context.getElementsByTagName !== "undefined") {
			ret = context.getElementsByTagName(tag || "*");
		} else if (typeof context.querySelectorAll !== "undefined") {
			ret = context.querySelectorAll(tag || "*");
		} else {
			ret = [];
		}

		if (tag === undefined || tag && nodeName(context, tag)) {
			return jQuery.merge([context], ret);
		}

		return ret;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval(elems, refElements) {
		var i = 0,
		    l = elems.length;

		for (; i < l; i++) {
			dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
		}
	}

	var rhtml = /<|&#?\w+;/;

	function buildFragment(elems, context, scripts, selection, ignored) {
		var elem,
		    tmp,
		    tag,
		    wrap,
		    contains,
		    j,
		    fragment = context.createDocumentFragment(),
		    nodes = [],
		    i = 0,
		    l = elems.length;

		for (; i < l; i++) {
			elem = elems[i];

			if (elem || elem === 0) {

				// Add nodes directly
				if (toType(elem) === "object") {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

					// Convert non-html into a text node
				} else if (!rhtml.test(elem)) {
					nodes.push(context.createTextNode(elem));

					// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild(context.createElement("div"));

					// Deserialize a standard representation
					tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
					wrap = wrapMap[tag] || wrapMap._default;
					tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while (j--) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge(nodes, tmp.childNodes);

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while (elem = nodes[i++]) {

			// Skip elements already in the context collection (trac-4087)
			if (selection && jQuery.inArray(elem, selection) > -1) {
				if (ignored) {
					ignored.push(elem);
				}
				continue;
			}

			contains = jQuery.contains(elem.ownerDocument, elem);

			// Append to fragment
			tmp = getAll(fragment.appendChild(elem), "script");

			// Preserve script evaluation history
			if (contains) {
				setGlobalEval(tmp);
			}

			// Capture executables
			if (scripts) {
				j = 0;
				while (elem = tmp[j++]) {
					if (rscriptType.test(elem.type || "")) {
						scripts.push(elem);
					}
				}
			}
		}

		return fragment;
	}

	(function () {
		var fragment = document.createDocumentFragment(),
		    div = fragment.appendChild(document.createElement("div")),
		    input = document.createElement("input");

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute("type", "radio");
		input.setAttribute("checked", "checked");
		input.setAttribute("name", "t");

		div.appendChild(input);

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
	})();
	var documentElement = document.documentElement;

	var rkeyEvent = /^key/,
	    rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	    rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch (err) {}
	}

	function _on(elem, types, selector, data, fn, one) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {

			// ( types-Object, selector, data )
			if (typeof selector !== "string") {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for (type in types) {
				_on(elem, type, selector, data, types[type], one);
			}
			return elem;
		}

		if (data == null && fn == null) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if (fn == null) {
			if (typeof selector === "string") {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if (fn === false) {
			fn = returnFalse;
		} else if (!fn) {
			return elem;
		}

		if (one === 1) {
			origFn = fn;
			fn = function fn(event) {

				// Can use an empty set, since event contains the info
				jQuery().off(event);
				return origFn.apply(this, arguments);
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
		}
		return elem.each(function () {
			jQuery.event.add(this, types, fn, data, selector);
		});
	}

	/*
  * Helper functions for managing events -- not part of the public interface.
  * Props to Dean Edwards' addEvent library for many of the ideas.
  */
	jQuery.event = {

		global: {},

		add: function add(elem, types, handler, data, selector) {

			var handleObjIn,
			    eventHandle,
			    tmp,
			    events,
			    t,
			    handleObj,
			    special,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = dataPriv.get(elem);

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if (!elemData) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if (handler.handler) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if (selector) {
				jQuery.find.matchesSelector(documentElement, selector);
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if (!handler.guid) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if (!(events = elemData.events)) {
				events = elemData.events = {};
			}
			if (!(eventHandle = elemData.handle)) {
				eventHandle = elemData.handle = function (e) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = (types || "").match(rnothtmlwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// There *must* be a type, no attaching namespace-only handlers
				if (!type) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[type] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = (selector ? special.delegateType : special.bindType) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[type] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test(selector),
					namespace: namespaces.join(".")
				}, handleObjIn);

				// Init the event handler queue if we're the first
				if (!(handlers = events[type])) {
					handlers = events[type] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {

						if (elem.addEventListener) {
							elem.addEventListener(type, eventHandle);
						}
					}
				}

				if (special.add) {
					special.add.call(elem, handleObj);

					if (!handleObj.handler.guid) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if (selector) {
					handlers.splice(handlers.delegateCount++, 0, handleObj);
				} else {
					handlers.push(handleObj);
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[type] = true;
			}
		},

		// Detach an event or set of events from an element
		remove: function remove(elem, types, handler, selector, mappedTypes) {

			var j,
			    origCount,
			    tmp,
			    events,
			    t,
			    handleObj,
			    special,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

			if (!elemData || !(events = elemData.events)) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = (types || "").match(rnothtmlwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// Unbind all events (on this namespace, if provided) for the element
				if (!type) {
					for (type in events) {
						jQuery.event.remove(elem, type + types[t], handler, selector, true);
					}
					continue;
				}

				special = jQuery.event.special[type] || {};
				type = (selector ? special.delegateType : special.bindType) || type;
				handlers = events[type] || [];
				tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

				// Remove matching events
				origCount = j = handlers.length;
				while (j--) {
					handleObj = handlers[j];

					if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
						handlers.splice(j, 1);

						if (handleObj.selector) {
							handlers.delegateCount--;
						}
						if (special.remove) {
							special.remove.call(elem, handleObj);
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if (origCount && !handlers.length) {
					if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {

						jQuery.removeEvent(elem, type, elemData.handle);
					}

					delete events[type];
				}
			}

			// Remove data and the expando if it's no longer used
			if (jQuery.isEmptyObject(events)) {
				dataPriv.remove(elem, "handle events");
			}
		},

		dispatch: function dispatch(nativeEvent) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix(nativeEvent);

			var i,
			    j,
			    ret,
			    matched,
			    handleObj,
			    handlerQueue,
			    args = new Array(arguments.length),
			    handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
			    special = jQuery.event.special[event.type] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;

			for (i = 1; i < arguments.length; i++) {
				args[i] = arguments[i];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if (special.preDispatch && special.preDispatch.call(this, event) === false) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call(this, event, handlers);

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
				event.currentTarget = matched.elem;

				j = 0;
				while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

						if (ret !== undefined) {
							if ((event.result = ret) === false) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if (special.postDispatch) {
				special.postDispatch.call(this, event);
			}

			return event.result;
		},

		handlers: function handlers(event, _handlers) {
			var i,
			    handleObj,
			    sel,
			    matchedHandlers,
			    matchedSelectors,
			    handlerQueue = [],
			    delegateCount = _handlers.delegateCount,
			    cur = event.target;

			// Find delegate handlers
			if (delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!(event.type === "click" && event.button >= 1)) {

				for (; cur !== this; cur = cur.parentNode || this) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
						matchedHandlers = [];
						matchedSelectors = {};
						for (i = 0; i < delegateCount; i++) {
							handleObj = _handlers[i];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if (matchedSelectors[sel] === undefined) {
								matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
							}
							if (matchedSelectors[sel]) {
								matchedHandlers.push(handleObj);
							}
						}
						if (matchedHandlers.length) {
							handlerQueue.push({ elem: cur, handlers: matchedHandlers });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if (delegateCount < _handlers.length) {
				handlerQueue.push({ elem: cur, handlers: _handlers.slice(delegateCount) });
			}

			return handlerQueue;
		},

		addProp: function addProp(name, hook) {
			Object.defineProperty(jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: isFunction(hook) ? function () {
					if (this.originalEvent) {
						return hook(this.originalEvent);
					}
				} : function () {
					if (this.originalEvent) {
						return this.originalEvent[name];
					}
				},

				set: function set(value) {
					Object.defineProperty(this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					});
				}
			});
		},

		fix: function fix(originalEvent) {
			return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function trigger() {
					if (this !== safeActiveElement() && this.focus) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function trigger() {
					if (this === safeActiveElement() && this.blur) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function trigger() {
					if (this.type === "checkbox" && this.click && nodeName(this, "input")) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function _default(event) {
					return nodeName(event.target, "a");
				}
			},

			beforeunload: {
				postDispatch: function postDispatch(event) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if (event.result !== undefined && event.originalEvent) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function (elem, type, handle) {

		// This "if" is needed for plain objects
		if (elem.removeEventListener) {
			elem.removeEventListener(type, handle);
		}
	};

	jQuery.Event = function (src, props) {

		// Allow instantiation without the 'new' keyword
		if (!(this instanceof jQuery.Event)) {
			return new jQuery.Event(src, props);
		}

		// Event object
		if (src && src.type) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&

			// Support: Android <=2.3 only
			src.returnValue === false ? returnTrue : returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

			// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if (props) {
			jQuery.extend(this, props);
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || Date.now();

		// Mark it as fixed
		this[jQuery.expando] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function preventDefault() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if (e && !this.isSimulated) {
				e.preventDefault();
			}
		},
		stopPropagation: function stopPropagation() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if (e && !this.isSimulated) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function stopImmediatePropagation() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if (e && !this.isSimulated) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each({
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function which(event) {
			var button = event.button;

			// Add which for key events
			if (event.which == null && rkeyEvent.test(event.type)) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
				if (button & 1) {
					return 1;
				}

				if (button & 2) {
					return 3;
				}

				if (button & 4) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp);

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (orig, fix) {
		jQuery.event.special[orig] = {
			delegateType: fix,
			bindType: fix,

			handle: function handle(event) {
				var ret,
				    target = this,
				    related = event.relatedTarget,
				    handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if (!related || related !== target && !jQuery.contains(target, related)) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply(this, arguments);
					event.type = fix;
				}
				return ret;
			}
		};
	});

	jQuery.fn.extend({

		on: function on(types, selector, data, fn) {
			return _on(this, types, selector, data, fn);
		},
		one: function one(types, selector, data, fn) {
			return _on(this, types, selector, data, fn, 1);
		},
		off: function off(types, selector, fn) {
			var handleObj, type;
			if (types && types.preventDefault && types.handleObj) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
				return this;
			}
			if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {

				// ( types-object [, selector] )
				for (type in types) {
					this.off(type, selector, types[type]);
				}
				return this;
			}
			if (selector === false || typeof selector === "function") {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if (fn === false) {
				fn = returnFalse;
			}
			return this.each(function () {
				jQuery.event.remove(this, types, fn, selector);
			});
		}
	});

	var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,


	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,


	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Prefer a tbody over its parent table for containing new rows
	function manipulationTarget(elem, content) {
		if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {

			return jQuery(elem).children("tbody")[0] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript(elem) {
		if ((elem.type || "").slice(0, 5) === "true/") {
			elem.type = elem.type.slice(5);
		} else {
			elem.removeAttribute("type");
		}

		return elem;
	}

	function cloneCopyEvent(src, dest) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if (dest.nodeType !== 1) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if (dataPriv.hasData(src)) {
			pdataOld = dataPriv.access(src);
			pdataCur = dataPriv.set(dest, pdataOld);
			events = pdataOld.events;

			if (events) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for (type in events) {
					for (i = 0, l = events[type].length; i < l; i++) {
						jQuery.event.add(dest, type, events[type][i]);
					}
				}
			}
		}

		// 2. Copy user data
		if (dataUser.hasData(src)) {
			udataOld = dataUser.access(src);
			udataCur = jQuery.extend({}, udataOld);

			dataUser.set(dest, udataCur);
		}
	}

	// Fix IE bugs, see support tests
	function fixInput(src, dest) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if (nodeName === "input" && rcheckableType.test(src.type)) {
			dest.checked = src.checked;

			// Fails to return the selected option to the default selected state when cloning options
		} else if (nodeName === "input" || nodeName === "textarea") {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip(collection, args, callback, ignored) {

		// Flatten any nested arrays
		args = concat.apply([], args);

		var fragment,
		    first,
		    scripts,
		    hasScripts,
		    node,
		    doc,
		    i = 0,
		    l = collection.length,
		    iNoClone = l - 1,
		    value = args[0],
		    valueIsFunction = isFunction(value);

		// We can't cloneNode fragments that contain checked, in WebKit
		if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
			return collection.each(function (index) {
				var self = collection.eq(index);
				if (valueIsFunction) {
					args[0] = value.call(this, index, self.html());
				}
				domManip(self, args, callback, ignored);
			});
		}

		if (l) {
			fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
			first = fragment.firstChild;

			if (fragment.childNodes.length === 1) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if (first || ignored) {
				scripts = jQuery.map(getAll(fragment, "script"), disableScript);
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for (; i < l; i++) {
					node = fragment;

					if (i !== iNoClone) {
						node = jQuery.clone(node, true, true);

						// Keep references to cloned scripts for later restoration
						if (hasScripts) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge(scripts, getAll(node, "script"));
						}
					}

					callback.call(collection[i], node, i);
				}

				if (hasScripts) {
					doc = scripts[scripts.length - 1].ownerDocument;

					// Reenable scripts
					jQuery.map(scripts, restoreScript);

					// Evaluate executable scripts on first document insertion
					for (i = 0; i < hasScripts; i++) {
						node = scripts[i];
						if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {

							if (node.src && (node.type || "").toLowerCase() !== "module") {

								// Optional AJAX dependency, but won't run scripts if not present
								if (jQuery._evalUrl) {
									jQuery._evalUrl(node.src);
								}
							} else {
								DOMEval(node.textContent.replace(rcleanScript, ""), doc, node);
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function _remove(elem, selector, keepData) {
		var node,
		    nodes = selector ? jQuery.filter(selector, elem) : elem,
		    i = 0;

		for (; (node = nodes[i]) != null; i++) {
			if (!keepData && node.nodeType === 1) {
				jQuery.cleanData(getAll(node));
			}

			if (node.parentNode) {
				if (keepData && jQuery.contains(node.ownerDocument, node)) {
					setGlobalEval(getAll(node, "script"));
				}
				node.parentNode.removeChild(node);
			}
		}

		return elem;
	}

	jQuery.extend({
		htmlPrefilter: function htmlPrefilter(html) {
			return html.replace(rxhtmlTag, "<$1></$2>");
		},

		clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
			var i,
			    l,
			    srcElements,
			    destElements,
			    clone = elem.cloneNode(true),
			    inPage = jQuery.contains(elem.ownerDocument, elem);

			// Fix IE cloning issues
			if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll(clone);
				srcElements = getAll(elem);

				for (i = 0, l = srcElements.length; i < l; i++) {
					fixInput(srcElements[i], destElements[i]);
				}
			}

			// Copy the events from the original to the clone
			if (dataAndEvents) {
				if (deepDataAndEvents) {
					srcElements = srcElements || getAll(elem);
					destElements = destElements || getAll(clone);

					for (i = 0, l = srcElements.length; i < l; i++) {
						cloneCopyEvent(srcElements[i], destElements[i]);
					}
				} else {
					cloneCopyEvent(elem, clone);
				}
			}

			// Preserve script evaluation history
			destElements = getAll(clone, "script");
			if (destElements.length > 0) {
				setGlobalEval(destElements, !inPage && getAll(elem, "script"));
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function cleanData(elems) {
			var data,
			    elem,
			    type,
			    special = jQuery.event.special,
			    i = 0;

			for (; (elem = elems[i]) !== undefined; i++) {
				if (acceptData(elem)) {
					if (data = elem[dataPriv.expando]) {
						if (data.events) {
							for (type in data.events) {
								if (special[type]) {
									jQuery.event.remove(elem, type);

									// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent(elem, type, data.handle);
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[dataPriv.expando] = undefined;
					}
					if (elem[dataUser.expando]) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[dataUser.expando] = undefined;
					}
				}
			}
		}
	});

	jQuery.fn.extend({
		detach: function detach(selector) {
			return _remove(this, selector, true);
		},

		remove: function remove(selector) {
			return _remove(this, selector);
		},

		text: function text(value) {
			return access(this, function (value) {
				return value === undefined ? jQuery.text(this) : this.empty().each(function () {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						this.textContent = value;
					}
				});
			}, null, value, arguments.length);
		},

		append: function append() {
			return domManip(this, arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.appendChild(elem);
				}
			});
		},

		prepend: function prepend() {
			return domManip(this, arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.insertBefore(elem, target.firstChild);
				}
			});
		},

		before: function before() {
			return domManip(this, arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this);
				}
			});
		},

		after: function after() {
			return domManip(this, arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this.nextSibling);
				}
			});
		},

		empty: function empty() {
			var elem,
			    i = 0;

			for (; (elem = this[i]) != null; i++) {
				if (elem.nodeType === 1) {

					// Prevent memory leaks
					jQuery.cleanData(getAll(elem, false));

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function clone(dataAndEvents, deepDataAndEvents) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function () {
				return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
			});
		},

		html: function html(value) {
			return access(this, function (value) {
				var elem = this[0] || {},
				    i = 0,
				    l = this.length;

				if (value === undefined && elem.nodeType === 1) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

					value = jQuery.htmlPrefilter(value);

					try {
						for (; i < l; i++) {
							elem = this[i] || {};

							// Remove element nodes and prevent memory leaks
							if (elem.nodeType === 1) {
								jQuery.cleanData(getAll(elem, false));
								elem.innerHTML = value;
							}
						}

						elem = 0;

						// If using innerHTML throws an exception, use the fallback method
					} catch (e) {}
				}

				if (elem) {
					this.empty().append(value);
				}
			}, null, value, arguments.length);
		},

		replaceWith: function replaceWith() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip(this, arguments, function (elem) {
				var parent = this.parentNode;

				if (jQuery.inArray(this, ignored) < 0) {
					jQuery.cleanData(getAll(this));
					if (parent) {
						parent.replaceChild(elem, this);
					}
				}

				// Force callback invocation
			}, ignored);
		}
	});

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (name, original) {
		jQuery.fn[name] = function (selector) {
			var elems,
			    ret = [],
			    insert = jQuery(selector),
			    last = insert.length - 1,
			    i = 0;

			for (; i <= last; i++) {
				elems = i === last ? this : this.clone(true);
				jQuery(insert[i])[original](elems);

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply(ret, elems.get());
			}

			return this.pushStack(ret);
		};
	});
	var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

	var getStyles = function getStyles(elem) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if (!view || !view.opener) {
			view = window;
		}

		return view.getComputedStyle(elem);
	};

	var rboxStyle = new RegExp(cssExpand.join("|"), "i");

	(function () {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if (!div) {
				return;
			}

			container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
			div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
			documentElement.appendChild(container).appendChild(div);

			var divStyle = window.getComputedStyle(div);
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;

			// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
			// Some styles come back with percentage values, even though they shouldn't
			div.style.right = "60%";
			pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;

			// Support: IE 9 - 11 only
			// Detect misreporting of content dimensions for box-sizing:border-box elements
			boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;

			// Support: IE 9 only
			// Detect overflow:scroll screwiness (gh-3699)
			div.style.position = "absolute";
			scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

			documentElement.removeChild(container);

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		function roundPixelMeasures(measure) {
			return Math.round(parseFloat(measure));
		}

		var pixelPositionVal,
		    boxSizingReliableVal,
		    scrollboxSizeVal,
		    pixelBoxStylesVal,
		    reliableMarginLeftVal,
		    container = document.createElement("div"),
		    div = document.createElement("div");

		// Finish early in limited (non-browser) environments
		if (!div.style) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode(true).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		jQuery.extend(support, {
			boxSizingReliable: function boxSizingReliable() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelBoxStyles: function pixelBoxStyles() {
				computeStyleTests();
				return pixelBoxStylesVal;
			},
			pixelPosition: function pixelPosition() {
				computeStyleTests();
				return pixelPositionVal;
			},
			reliableMarginLeft: function reliableMarginLeft() {
				computeStyleTests();
				return reliableMarginLeftVal;
			},
			scrollboxSize: function scrollboxSize() {
				computeStyleTests();
				return scrollboxSizeVal;
			}
		});
	})();

	function curCSS(elem, name, computed) {
		var width,
		    minWidth,
		    maxWidth,
		    ret,


		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

		computed = computed || getStyles(elem);

		// getPropertyValue is needed for:
		//   .css('filter') (IE 9 only, #12537)
		//   .css('--customProperty) (#3144)
		if (computed) {
			ret = computed.getPropertyValue(name) || computed[name];

			if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
				ret = jQuery.style(elem, name);
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" : ret;
	}

	function addGetHookIf(conditionFn, hookFn) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function get() {
				if (conditionFn()) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return (this.get = hookFn).apply(this, arguments);
			}
		};
	}

	var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	    rcustomProp = /^--/,
	    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	    cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},
	    cssPrefixes = ["Webkit", "Moz", "ms"],
	    emptyStyle = document.createElement("div").style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(name) {

		// Shortcut for names that are not vendor prefixed
		if (name in emptyStyle) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[0].toUpperCase() + name.slice(1),
		    i = cssPrefixes.length;

		while (i--) {
			name = cssPrefixes[i] + capName;
			if (name in emptyStyle) {
				return name;
			}
		}
	}

	// Return a property mapped along what jQuery.cssProps suggests or to
	// a vendor prefixed property.
	function finalPropName(name) {
		var ret = jQuery.cssProps[name];
		if (!ret) {
			ret = jQuery.cssProps[name] = vendorPropName(name) || name;
		}
		return ret;
	}

	function setPositiveNumber(elem, value, subtract) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec(value);
		return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
	}

	function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
		var i = dimension === "width" ? 1 : 0,
		    extra = 0,
		    delta = 0;

		// Adjustment may not be necessary
		if (box === (isBorderBox ? "border" : "content")) {
			return 0;
		}

		for (; i < 4; i += 2) {

			// Both box models exclude margin
			if (box === "margin") {
				delta += jQuery.css(elem, box + cssExpand[i], true, styles);
			}

			// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
			if (!isBorderBox) {

				// Add padding
				delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

				// For "border" or "margin", add border
				if (box !== "padding") {
					delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);

					// But still keep track of it otherwise
				} else {
					extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}

				// If we get here with a border-box (content + padding + border), we're seeking "content" or
				// "padding" or "margin"
			} else {

				// For "content", subtract padding
				if (box === "content") {
					delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
				}

				// For "content" or "padding", subtract border
				if (box !== "margin") {
					delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			}
		}

		// Account for positive content-box scroll gutter when requested by providing computedVal
		if (!isBorderBox && computedVal >= 0) {

			// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
			// Assuming integer scroll gutter, subtract the rest and round down
			delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5));
		}

		return delta;
	}

	function getWidthOrHeight(elem, dimension, extra) {

		// Start with computed style
		var styles = getStyles(elem),
		    val = curCSS(elem, dimension, styles),
		    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box",
		    valueIsBorderBox = isBorderBox;

		// Support: Firefox <=54
		// Return a confounding non-pixel value or feign ignorance, as appropriate.
		if (rnumnonpx.test(val)) {
			if (!extra) {
				return val;
			}
			val = "auto";
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = valueIsBorderBox && (support.boxSizingReliable() || val === elem.style[dimension]);

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		if (val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") {

			val = elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)];

			// offsetWidth/offsetHeight provide border-box values
			valueIsBorderBox = true;
		}

		// Normalize "" and auto
		val = parseFloat(val) || 0;

		// Adjust for the element's box model
		return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles,

		// Provide the current computed size to request scroll gutter calculation (gh-3589)
		val) + "px";
	}

	jQuery.extend({

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function get(elem, computed) {
					if (computed) {

						// We should always get a number back from opacity
						var ret = curCSS(elem, "opacity");
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {},

		// Get and set the style property on a DOM Node
		style: function style(elem, name, value, extra) {

			// Don't set styles on text and comment nodes
			if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
				return;
			}

			// Make sure that we're working with the right name
			var ret,
			    type,
			    hooks,
			    origName = camelCase(name),
			    isCustomProp = rcustomProp.test(name),
			    style = elem.style;

			// Make sure that we're working with the right name. We don't
			// want to query the value if it is a CSS custom property
			// since they are user-defined.
			if (!isCustomProp) {
				name = finalPropName(origName);
			}

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// Check if we're setting a value
			if (value !== undefined) {
				type = typeof value === "undefined" ? "undefined" : _typeof(value);

				// Convert "+=" or "-=" to relative numbers (#7345)
				if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
					value = adjustCSS(elem, name, ret);

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if (value == null || value !== value) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if (type === "number") {
					value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
				}

				// background-* props affect original clone's values
				if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
					style[name] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {

					if (isCustomProp) {
						style.setProperty(name, value);
					} else {
						style[name] = value;
					}
				}
			} else {

				// If a hook was provided get the non-computed value from there
				if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[name];
			}
		},

		css: function css(elem, name, extra, styles) {
			var val,
			    num,
			    hooks,
			    origName = camelCase(name),
			    isCustomProp = rcustomProp.test(name);

			// Make sure that we're working with the right name. We don't
			// want to modify the value if it is a CSS custom property
			// since they are user-defined.
			if (!isCustomProp) {
				name = finalPropName(origName);
			}

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// If a hook was provided get the computed value from there
			if (hooks && "get" in hooks) {
				val = hooks.get(elem, true, extra);
			}

			// Otherwise, if a way to get the computed value exists, use that
			if (val === undefined) {
				val = curCSS(elem, name, styles);
			}

			// Convert "normal" to computed value
			if (val === "normal" && name in cssNormalTransform) {
				val = cssNormalTransform[name];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if (extra === "" || extra) {
				num = parseFloat(val);
				return extra === true || isFinite(num) ? num || 0 : val;
			}

			return val;
		}
	});

	jQuery.each(["height", "width"], function (i, dimension) {
		jQuery.cssHooks[dimension] = {
			get: function get(elem, computed, extra) {
				if (computed) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test(jQuery.css(elem, "display")) && (

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
						return getWidthOrHeight(elem, dimension, extra);
					}) : getWidthOrHeight(elem, dimension, extra);
				}
			},

			set: function set(elem, value, extra) {
				var matches,
				    styles = getStyles(elem),
				    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box",
				    subtract = extra && boxModelAdjustment(elem, dimension, extra, isBorderBox, styles);

				// Account for unreliable border-box dimensions by comparing offset* to computed and
				// faking a content-box to get border and padding (gh-3699)
				if (isBorderBox && support.scrollboxSize() === styles.position) {
					subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
				}

				// Convert to pixels if value adjustment is needed
				if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {

					elem.style[dimension] = value;
					value = jQuery.css(elem, dimension);
				}

				return setPositiveNumber(elem, value, subtract);
			}
		};
	});

	jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
		if (computed) {
			return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function () {
				return elem.getBoundingClientRect().left;
			})) + "px";
		}
	});

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (prefix, suffix) {
		jQuery.cssHooks[prefix + suffix] = {
			expand: function expand(value) {
				var i = 0,
				    expanded = {},


				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [value];

				for (; i < 4; i++) {
					expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
				}

				return expanded;
			}
		};

		if (prefix !== "margin") {
			jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
		}
	});

	jQuery.fn.extend({
		css: function css(name, value) {
			return access(this, function (elem, name, value) {
				var styles,
				    len,
				    map = {},
				    i = 0;

				if (Array.isArray(name)) {
					styles = getStyles(elem);
					len = name.length;

					for (; i < len; i++) {
						map[name[i]] = jQuery.css(elem, name[i], false, styles);
					}

					return map;
				}

				return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
			}, name, value, arguments.length > 1);
		}
	});

	function Tween(elem, options, prop, end, easing) {
		return new Tween.prototype.init(elem, options, prop, end, easing);
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function init(elem, options, prop, end, easing, unit) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
		},
		cur: function cur() {
			var hooks = Tween.propHooks[this.prop];

			return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
		},
		run: function run(percent) {
			var eased,
			    hooks = Tween.propHooks[this.prop];

			if (this.options.duration) {
				this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
			} else {
				this.pos = eased = percent;
			}
			this.now = (this.end - this.start) * eased + this.start;

			if (this.options.step) {
				this.options.step.call(this.elem, this.now, this);
			}

			if (hooks && hooks.set) {
				hooks.set(this);
			} else {
				Tween.propHooks._default.set(this);
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function get(tween) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
					return tween.elem[tween.prop];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css(tween.elem, tween.prop, "");

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function set(tween) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if (jQuery.fx.step[tween.prop]) {
					jQuery.fx.step[tween.prop](tween);
				} else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
					jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
				} else {
					tween.elem[tween.prop] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function set(tween) {
			if (tween.elem.nodeType && tween.elem.parentNode) {
				tween.elem[tween.prop] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function linear(p) {
			return p;
		},
		swing: function swing(p) {
			return 0.5 - Math.cos(p * Math.PI) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};

	var fxNow,
	    inProgress,
	    rfxtypes = /^(?:toggle|show|hide)$/,
	    rrun = /queueHooks$/;

	function schedule() {
		if (inProgress) {
			if (document.hidden === false && window.requestAnimationFrame) {
				window.requestAnimationFrame(schedule);
			} else {
				window.setTimeout(schedule, jQuery.fx.interval);
			}

			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout(function () {
			fxNow = undefined;
		});
		return fxNow = Date.now();
	}

	// Generate parameters to create a standard animation
	function genFx(type, includeWidth) {
		var which,
		    i = 0,
		    attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for (; i < 4; i += 2 - includeWidth) {
			which = cssExpand[i];
			attrs["margin" + which] = attrs["padding" + which] = type;
		}

		if (includeWidth) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween(value, prop, animation) {
		var tween,
		    collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
		    index = 0,
		    length = collection.length;
		for (; index < length; index++) {
			if (tween = collection[index].call(animation, prop, value)) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter(elem, props, opts) {
		var prop,
		    value,
		    toggle,
		    hooks,
		    oldfire,
		    propTween,
		    restoreDisplay,
		    display,
		    isBox = "width" in props || "height" in props,
		    anim = this,
		    orig = {},
		    style = elem.style,
		    hidden = elem.nodeType && isHiddenWithinTree(elem),
		    dataShow = dataPriv.get(elem, "fxshow");

		// Queue-skipping animations hijack the fx hooks
		if (!opts.queue) {
			hooks = jQuery._queueHooks(elem, "fx");
			if (hooks.unqueued == null) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function () {
					if (!hooks.unqueued) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function () {

				// Ensure the complete handler is called before this completes
				anim.always(function () {
					hooks.unqueued--;
					if (!jQuery.queue(elem, "fx").length) {
						hooks.empty.fire();
					}
				});
			});
		}

		// Detect show/hide animations
		for (prop in props) {
			value = props[prop];
			if (rfxtypes.test(value)) {
				delete props[prop];
				toggle = toggle || value === "toggle";
				if (value === (hidden ? "hide" : "show")) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if (value === "show" && dataShow && dataShow[prop] !== undefined) {
						hidden = true;

						// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject(props);
		if (!propTween && jQuery.isEmptyObject(orig)) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if (isBox && elem.nodeType === 1) {

			// Support: IE <=9 - 11, Edge 12 - 15
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY and Edge just mirrors
			// the overflowX value there.
			opts.overflow = [style.overflow, style.overflowX, style.overflowY];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if (restoreDisplay == null) {
				restoreDisplay = dataPriv.get(elem, "display");
			}
			display = jQuery.css(elem, "display");
			if (display === "none") {
				if (restoreDisplay) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide([elem], true);
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css(elem, "display");
					showHide([elem]);
				}
			}

			// Animate inline elements as inline-block
			if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
				if (jQuery.css(elem, "float") === "none") {

					// Restore the original display value at the end of pure show/hide animations
					if (!propTween) {
						anim.done(function () {
							style.display = restoreDisplay;
						});
						if (restoreDisplay == null) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if (opts.overflow) {
			style.overflow = "hidden";
			anim.always(function () {
				style.overflow = opts.overflow[0];
				style.overflowX = opts.overflow[1];
				style.overflowY = opts.overflow[2];
			});
		}

		// Implement show/hide animations
		propTween = false;
		for (prop in orig) {

			// General show/hide setup for this element animation
			if (!propTween) {
				if (dataShow) {
					if ("hidden" in dataShow) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if (toggle) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if (hidden) {
					showHide([elem], true);
				}

				/* eslint-disable no-loop-func */

				anim.done(function () {

					/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if (!hidden) {
						showHide([elem]);
					}
					dataPriv.remove(elem, "fxshow");
					for (prop in orig) {
						jQuery.style(elem, prop, orig[prop]);
					}
				});
			}

			// Per-property setup
			propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
			if (!(prop in dataShow)) {
				dataShow[prop] = propTween.start;
				if (hidden) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter(props, specialEasing) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for (index in props) {
			name = camelCase(index);
			easing = specialEasing[name];
			value = props[index];
			if (Array.isArray(value)) {
				easing = value[1];
				value = props[index] = value[0];
			}

			if (index !== name) {
				props[name] = value;
				delete props[index];
			}

			hooks = jQuery.cssHooks[name];
			if (hooks && "expand" in hooks) {
				value = hooks.expand(value);
				delete props[name];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for (index in value) {
					if (!(index in props)) {
						props[index] = value[index];
						specialEasing[index] = easing;
					}
				}
			} else {
				specialEasing[name] = easing;
			}
		}
	}

	function Animation(elem, properties, options) {
		var result,
		    stopped,
		    index = 0,
		    length = Animation.prefilters.length,
		    deferred = jQuery.Deferred().always(function () {

			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		    tick = function tick() {
			if (stopped) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
			    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),


			// Support: Android 2.3 only
			// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
			temp = remaining / animation.duration || 0,
			    percent = 1 - temp,
			    index = 0,
			    length = animation.tweens.length;

			for (; index < length; index++) {
				animation.tweens[index].run(percent);
			}

			deferred.notifyWith(elem, [animation, percent, remaining]);

			// If there's more to do, yield
			if (percent < 1 && length) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if (!length) {
				deferred.notifyWith(elem, [animation, 1, 0]);
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith(elem, [animation]);
			return false;
		},
		    animation = deferred.promise({
			elem: elem,
			props: jQuery.extend({}, properties),
			opts: jQuery.extend(true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function createTween(prop, end) {
				var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
				animation.tweens.push(tween);
				return tween;
			},
			stop: function stop(gotoEnd) {
				var index = 0,


				// If we are going to the end, we want to run all the tweens
				// otherwise we skip this part
				length = gotoEnd ? animation.tweens.length : 0;
				if (stopped) {
					return this;
				}
				stopped = true;
				for (; index < length; index++) {
					animation.tweens[index].run(1);
				}

				// Resolve when we played the last frame; otherwise, reject
				if (gotoEnd) {
					deferred.notifyWith(elem, [animation, 1, 0]);
					deferred.resolveWith(elem, [animation, gotoEnd]);
				} else {
					deferred.rejectWith(elem, [animation, gotoEnd]);
				}
				return this;
			}
		}),
		    props = animation.props;

		propFilter(props, animation.opts.specialEasing);

		for (; index < length; index++) {
			result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
			if (result) {
				if (isFunction(result.stop)) {
					jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
				}
				return result;
			}
		}

		jQuery.map(props, createTween, animation);

		if (isFunction(animation.opts.start)) {
			animation.opts.start.call(elem, animation);
		}

		// Attach callbacks from options
		animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);

		jQuery.fx.timer(jQuery.extend(tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		}));

		return animation;
	}

	jQuery.Animation = jQuery.extend(Animation, {

		tweeners: {
			"*": [function (prop, value) {
				var tween = this.createTween(prop, value);
				adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
				return tween;
			}]
		},

		tweener: function tweener(props, callback) {
			if (isFunction(props)) {
				callback = props;
				props = ["*"];
			} else {
				props = props.match(rnothtmlwhite);
			}

			var prop,
			    index = 0,
			    length = props.length;

			for (; index < length; index++) {
				prop = props[index];
				Animation.tweeners[prop] = Animation.tweeners[prop] || [];
				Animation.tweeners[prop].unshift(callback);
			}
		},

		prefilters: [defaultPrefilter],

		prefilter: function prefilter(callback, prepend) {
			if (prepend) {
				Animation.prefilters.unshift(callback);
			} else {
				Animation.prefilters.push(callback);
			}
		}
	});

	jQuery.speed = function (speed, easing, fn) {
		var opt = speed && (typeof speed === "undefined" ? "undefined" : _typeof(speed)) === "object" ? jQuery.extend({}, speed) : {
			complete: fn || !fn && easing || isFunction(speed) && speed,
			duration: speed,
			easing: fn && easing || easing && !isFunction(easing) && easing
		};

		// Go to the end state if fx are off
		if (jQuery.fx.off) {
			opt.duration = 0;
		} else {
			if (typeof opt.duration !== "number") {
				if (opt.duration in jQuery.fx.speeds) {
					opt.duration = jQuery.fx.speeds[opt.duration];
				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if (opt.queue == null || opt.queue === true) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function () {
			if (isFunction(opt.old)) {
				opt.old.call(this);
			}

			if (opt.queue) {
				jQuery.dequeue(this, opt.queue);
			}
		};

		return opt;
	};

	jQuery.fn.extend({
		fadeTo: function fadeTo(speed, to, easing, callback) {

			// Show any hidden elements after setting opacity to 0
			return this.filter(isHiddenWithinTree).css("opacity", 0).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback);
		},
		animate: function animate(prop, speed, easing, callback) {
			var empty = jQuery.isEmptyObject(prop),
			    optall = jQuery.speed(speed, easing, callback),
			    doAnimation = function doAnimation() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation(this, jQuery.extend({}, prop), optall);

				// Empty animations, or finishing resolves immediately
				if (empty || dataPriv.get(this, "finish")) {
					anim.stop(true);
				}
			};
			doAnimation.finish = doAnimation;

			return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
		},
		stop: function stop(type, clearQueue, gotoEnd) {
			var stopQueue = function stopQueue(hooks) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop(gotoEnd);
			};

			if (typeof type !== "string") {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if (clearQueue && type !== false) {
				this.queue(type || "fx", []);
			}

			return this.each(function () {
				var dequeue = true,
				    index = type != null && type + "queueHooks",
				    timers = jQuery.timers,
				    data = dataPriv.get(this);

				if (index) {
					if (data[index] && data[index].stop) {
						stopQueue(data[index]);
					}
				} else {
					for (index in data) {
						if (data[index] && data[index].stop && rrun.test(index)) {
							stopQueue(data[index]);
						}
					}
				}

				for (index = timers.length; index--;) {
					if (timers[index].elem === this && (type == null || timers[index].queue === type)) {

						timers[index].anim.stop(gotoEnd);
						dequeue = false;
						timers.splice(index, 1);
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if (dequeue || !gotoEnd) {
					jQuery.dequeue(this, type);
				}
			});
		},
		finish: function finish(type) {
			if (type !== false) {
				type = type || "fx";
			}
			return this.each(function () {
				var index,
				    data = dataPriv.get(this),
				    queue = data[type + "queue"],
				    hooks = data[type + "queueHooks"],
				    timers = jQuery.timers,
				    length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue(this, type, []);

				if (hooks && hooks.stop) {
					hooks.stop.call(this, true);
				}

				// Look for any active animations, and finish them
				for (index = timers.length; index--;) {
					if (timers[index].elem === this && timers[index].queue === type) {
						timers[index].anim.stop(true);
						timers.splice(index, 1);
					}
				}

				// Look for any animations in the old queue and finish them
				for (index = 0; index < length; index++) {
					if (queue[index] && queue[index].finish) {
						queue[index].finish.call(this);
					}
				}

				// Turn off finishing flag
				delete data.finish;
			});
		}
	});

	jQuery.each(["toggle", "show", "hide"], function (i, name) {
		var cssFn = jQuery.fn[name];
		jQuery.fn[name] = function (speed, easing, callback) {
			return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
		};
	});

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function (name, props) {
		jQuery.fn[name] = function (speed, easing, callback) {
			return this.animate(props, speed, easing, callback);
		};
	});

	jQuery.timers = [];
	jQuery.fx.tick = function () {
		var timer,
		    i = 0,
		    timers = jQuery.timers;

		fxNow = Date.now();

		for (; i < timers.length; i++) {
			timer = timers[i];

			// Run the timer and safely remove it when done (allowing for external removal)
			if (!timer() && timers[i] === timer) {
				timers.splice(i--, 1);
			}
		}

		if (!timers.length) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function (timer) {
		jQuery.timers.push(timer);
		jQuery.fx.start();
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function () {
		if (inProgress) {
			return;
		}

		inProgress = true;
		schedule();
	};

	jQuery.fx.stop = function () {
		inProgress = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};

	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function (time, type) {
		time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
		type = type || "fx";

		return this.queue(type, function (next, hooks) {
			var timeout = window.setTimeout(next, time);
			hooks.stop = function () {
				window.clearTimeout(timeout);
			};
		});
	};

	(function () {
		var input = document.createElement("input"),
		    select = document.createElement("select"),
		    opt = select.appendChild(document.createElement("option"));

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement("input");
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	})();

	var boolHook,
	    attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend({
		attr: function attr(name, value) {
			return access(this, jQuery.attr, name, value, arguments.length > 1);
		},

		removeAttr: function removeAttr(name) {
			return this.each(function () {
				jQuery.removeAttr(this, name);
			});
		}
	});

	jQuery.extend({
		attr: function attr(elem, name, value) {
			var ret,
			    hooks,
			    nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if (nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if (typeof elem.getAttribute === "undefined") {
				return jQuery.prop(elem, name, value);
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
				hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
			}

			if (value !== undefined) {
				if (value === null) {
					jQuery.removeAttr(elem, name);
					return;
				}

				if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				}

				elem.setAttribute(name, value + "");
				return value;
			}

			if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
				return ret;
			}

			ret = jQuery.find.attr(elem, name);

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function set(elem, value) {
					if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
						var val = elem.value;
						elem.setAttribute("type", value);
						if (val) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function removeAttr(elem, value) {
			var name,
			    i = 0,


			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match(rnothtmlwhite);

			if (attrNames && elem.nodeType === 1) {
				while (name = attrNames[i++]) {
					elem.removeAttribute(name);
				}
			}
		}
	});

	// Hooks for boolean attributes
	boolHook = {
		set: function set(elem, value, name) {
			if (value === false) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr(elem, name);
			} else {
				elem.setAttribute(name, name);
			}
			return name;
		}
	};

	jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
		var getter = attrHandle[name] || jQuery.find.attr;

		attrHandle[name] = function (elem, name, isXML) {
			var ret,
			    handle,
			    lowercaseName = name.toLowerCase();

			if (!isXML) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[lowercaseName];
				attrHandle[lowercaseName] = ret;
				ret = getter(elem, name, isXML) != null ? lowercaseName : null;
				attrHandle[lowercaseName] = handle;
			}
			return ret;
		};
	});

	var rfocusable = /^(?:input|select|textarea|button)$/i,
	    rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend({
		prop: function prop(name, value) {
			return access(this, jQuery.prop, name, value, arguments.length > 1);
		},

		removeProp: function removeProp(name) {
			return this.each(function () {
				delete this[jQuery.propFix[name] || name];
			});
		}
	});

	jQuery.extend({
		prop: function prop(elem, name, value) {
			var ret,
			    hooks,
			    nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if (nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

				// Fix name and attach hooks
				name = jQuery.propFix[name] || name;
				hooks = jQuery.propHooks[name];
			}

			if (value !== undefined) {
				if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				}

				return elem[name] = value;
			}

			if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
				return ret;
			}

			return elem[name];
		},

		propHooks: {
			tabIndex: {
				get: function get(elem) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr(elem, "tabindex");

					if (tabindex) {
						return parseInt(tabindex, 10);
					}

					if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	});

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if (!support.optSelected) {
		jQuery.propHooks.selected = {
			get: function get(elem) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if (parent && parent.parentNode) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function set(elem) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if (parent) {
					parent.selectedIndex;

					if (parent.parentNode) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		jQuery.propFix[this.toLowerCase()] = this;
	});

	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse(value) {
		var tokens = value.match(rnothtmlwhite) || [];
		return tokens.join(" ");
	}

	function getClass(elem) {
		return elem.getAttribute && elem.getAttribute("class") || "";
	}

	function classesToArray(value) {
		if (Array.isArray(value)) {
			return value;
		}
		if (typeof value === "string") {
			return value.match(rnothtmlwhite) || [];
		}
		return [];
	}

	jQuery.fn.extend({
		addClass: function addClass(value) {
			var classes,
			    elem,
			    cur,
			    curValue,
			    clazz,
			    j,
			    finalValue,
			    i = 0;

			if (isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).addClass(value.call(this, j, getClass(this)));
				});
			}

			classes = classesToArray(value);

			if (classes.length) {
				while (elem = this[i++]) {
					curValue = getClass(elem);
					cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

					if (cur) {
						j = 0;
						while (clazz = classes[j++]) {
							if (cur.indexOf(" " + clazz + " ") < 0) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse(cur);
						if (curValue !== finalValue) {
							elem.setAttribute("class", finalValue);
						}
					}
				}
			}

			return this;
		},

		removeClass: function removeClass(value) {
			var classes,
			    elem,
			    cur,
			    curValue,
			    clazz,
			    j,
			    finalValue,
			    i = 0;

			if (isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).removeClass(value.call(this, j, getClass(this)));
				});
			}

			if (!arguments.length) {
				return this.attr("class", "");
			}

			classes = classesToArray(value);

			if (classes.length) {
				while (elem = this[i++]) {
					curValue = getClass(elem);

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

					if (cur) {
						j = 0;
						while (clazz = classes[j++]) {

							// Remove *all* instances
							while (cur.indexOf(" " + clazz + " ") > -1) {
								cur = cur.replace(" " + clazz + " ", " ");
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse(cur);
						if (curValue !== finalValue) {
							elem.setAttribute("class", finalValue);
						}
					}
				}
			}

			return this;
		},

		toggleClass: function toggleClass(value, stateVal) {
			var type = typeof value === "undefined" ? "undefined" : _typeof(value),
			    isValidValue = type === "string" || Array.isArray(value);

			if (typeof stateVal === "boolean" && isValidValue) {
				return stateVal ? this.addClass(value) : this.removeClass(value);
			}

			if (isFunction(value)) {
				return this.each(function (i) {
					jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
				});
			}

			return this.each(function () {
				var className, i, self, classNames;

				if (isValidValue) {

					// Toggle individual class names
					i = 0;
					self = jQuery(this);
					classNames = classesToArray(value);

					while (className = classNames[i++]) {

						// Check each className given, space separated list
						if (self.hasClass(className)) {
							self.removeClass(className);
						} else {
							self.addClass(className);
						}
					}

					// Toggle whole class name
				} else if (value === undefined || type === "boolean") {
					className = getClass(this);
					if (className) {

						// Store className if set
						dataPriv.set(this, "__className__", className);
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if (this.setAttribute) {
						this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
					}
				}
			});
		},

		hasClass: function hasClass(selector) {
			var className,
			    elem,
			    i = 0;

			className = " " + selector + " ";
			while (elem = this[i++]) {
				if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
					return true;
				}
			}

			return false;
		}
	});

	var rreturn = /\r/g;

	jQuery.fn.extend({
		val: function val(value) {
			var hooks,
			    ret,
			    valueIsFunction,
			    elem = this[0];

			if (!arguments.length) {
				if (elem) {
					hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

					if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if (typeof ret === "string") {
						return ret.replace(rreturn, "");
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			valueIsFunction = isFunction(value);

			return this.each(function (i) {
				var val;

				if (this.nodeType !== 1) {
					return;
				}

				if (valueIsFunction) {
					val = value.call(this, i, jQuery(this).val());
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if (val == null) {
					val = "";
				} else if (typeof val === "number") {
					val += "";
				} else if (Array.isArray(val)) {
					val = jQuery.map(val, function (value) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

				// If set returns undefined, fall back to normal setting
				if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function get(elem) {

					var val = jQuery.find.attr(elem, "value");
					return val != null ? val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse(jQuery.text(elem));
				}
			},
			select: {
				get: function get(elem) {
					var value,
					    option,
					    i,
					    options = elem.options,
					    index = elem.selectedIndex,
					    one = elem.type === "select-one",
					    values = one ? null : [],
					    max = one ? index + 1 : options.length;

					if (index < 0) {
						i = max;
					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for (; i < max; i++) {
						option = options[i];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ((option.selected || i === index) &&

						// Don't return options that are disabled or in a disabled optgroup
						!option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {

							// Get the specific value for the option
							value = jQuery(option).val();

							// We don't need an array for one selects
							if (one) {
								return value;
							}

							// Multi-Selects return an array
							values.push(value);
						}
					}

					return values;
				},

				set: function set(elem, value) {
					var optionSet,
					    option,
					    options = elem.options,
					    values = jQuery.makeArray(value),
					    i = options.length;

					while (i--) {
						option = options[i];

						/* eslint-disable no-cond-assign */

						if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if (!optionSet) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	});

	// Radios and checkboxes getter/setter
	jQuery.each(["radio", "checkbox"], function () {
		jQuery.valHooks[this] = {
			set: function set(elem, value) {
				if (Array.isArray(value)) {
					return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
				}
			}
		};
		if (!support.checkOn) {
			jQuery.valHooks[this].get = function (elem) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});

	// Return jQuery for attributes-only inclusion


	support.focusin = "onfocusin" in window;

	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	    stopPropagationCallback = function stopPropagationCallback(e) {
		e.stopPropagation();
	};

	jQuery.extend(jQuery.event, {

		trigger: function trigger(event, data, elem, onlyHandlers) {

			var i,
			    cur,
			    tmp,
			    bubbleType,
			    ontype,
			    handle,
			    special,
			    lastElement,
			    eventPath = [elem || document],
			    type = hasOwn.call(event, "type") ? event.type : event,
			    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

			cur = lastElement = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if (elem.nodeType === 3 || elem.nodeType === 8) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if (rfocusMorph.test(type + jQuery.event.triggered)) {
				return;
			}

			if (type.indexOf(".") > -1) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event);

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if (!event.target) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ? [event] : jQuery.makeArray(data, [event]);

			// Allow special events to draw outside the lines
			special = jQuery.event.special[type] || {};
			if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {

				bubbleType = special.delegateType || type;
				if (!rfocusMorph.test(bubbleType + type)) {
					cur = cur.parentNode;
				}
				for (; cur; cur = cur.parentNode) {
					eventPath.push(cur);
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if (tmp === (elem.ownerDocument || document)) {
					eventPath.push(tmp.defaultView || tmp.parentWindow || window);
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
				lastElement = cur;
				event.type = i > 1 ? bubbleType : special.bindType || type;

				// jQuery handler
				handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
				if (handle) {
					handle.apply(cur, data);
				}

				// Native handler
				handle = ontype && cur[ontype];
				if (handle && handle.apply && acceptData(cur)) {
					event.result = handle.apply(cur, data);
					if (event.result === false) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if (!onlyHandlers && !event.isDefaultPrevented()) {

				if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if (ontype && isFunction(elem[type]) && !isWindow(elem)) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ontype];

						if (tmp) {
							elem[ontype] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;

						if (event.isPropagationStopped()) {
							lastElement.addEventListener(type, stopPropagationCallback);
						}

						elem[type]();

						if (event.isPropagationStopped()) {
							lastElement.removeEventListener(type, stopPropagationCallback);
						}

						jQuery.event.triggered = undefined;

						if (tmp) {
							elem[ontype] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function simulate(type, elem, event) {
			var e = jQuery.extend(new jQuery.Event(), event, {
				type: type,
				isSimulated: true
			});

			jQuery.event.trigger(e, null, elem);
		}

	});

	jQuery.fn.extend({

		trigger: function trigger(type, data) {
			return this.each(function () {
				jQuery.event.trigger(type, data, this);
			});
		},
		triggerHandler: function triggerHandler(type, data) {
			var elem = this[0];
			if (elem) {
				return jQuery.event.trigger(type, data, elem, true);
			}
		}
	});

	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if (!support.focusin) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function handler(event) {
				jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
			};

			jQuery.event.special[fix] = {
				setup: function setup() {
					var doc = this.ownerDocument || this,
					    attaches = dataPriv.access(doc, fix);

					if (!attaches) {
						doc.addEventListener(orig, handler, true);
					}
					dataPriv.access(doc, fix, (attaches || 0) + 1);
				},
				teardown: function teardown() {
					var doc = this.ownerDocument || this,
					    attaches = dataPriv.access(doc, fix) - 1;

					if (!attaches) {
						doc.removeEventListener(orig, handler, true);
						dataPriv.remove(doc, fix);
					} else {
						dataPriv.access(doc, fix, attaches);
					}
				}
			};
		});
	}
	var location = window.location;

	var nonce = Date.now();

	var rquery = /\?/;

	// Cross-browser xml parsing
	jQuery.parseXML = function (data) {
		var xml;
		if (!data || typeof data !== "string") {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = new window.DOMParser().parseFromString(data, "text/xml");
		} catch (e) {
			xml = undefined;
		}

		if (!xml || xml.getElementsByTagName("parsererror").length) {
			jQuery.error("Invalid XML: " + data);
		}
		return xml;
	};

	var rbracket = /\[\]$/,
	    rCRLF = /\r?\n/g,
	    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	    rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams(prefix, obj, traditional, add) {
		var name;

		if (Array.isArray(obj)) {

			// Serialize array item.
			jQuery.each(obj, function (i, v) {
				if (traditional || rbracket.test(prefix)) {

					// Treat each array item as a scalar.
					add(prefix, v);
				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(prefix + "[" + ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" && v != null ? i : "") + "]", v, traditional, add);
				}
			});
		} else if (!traditional && toType(obj) === "object") {

			// Serialize object item.
			for (name in obj) {
				buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
			}
		} else {

			// Serialize scalar item.
			add(prefix, obj);
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function (a, traditional) {
		var prefix,
		    s = [],
		    add = function add(key, valueOrFunction) {

			// If value is a function, invoke it and use its return value
			var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;

			s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
		};

		// If an array was passed in, assume that it is an array of form elements.
		if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {

			// Serialize the form elements
			jQuery.each(a, function () {
				add(this.name, this.value);
			});
		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for (prefix in a) {
				buildParams(prefix, a[prefix], traditional, add);
			}
		}

		// Return the resulting serialization
		return s.join("&");
	};

	jQuery.fn.extend({
		serialize: function serialize() {
			return jQuery.param(this.serializeArray());
		},
		serializeArray: function serializeArray() {
			return this.map(function () {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop(this, "elements");
				return elements ? jQuery.makeArray(elements) : this;
			}).filter(function () {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
			}).map(function (i, elem) {
				var val = jQuery(this).val();

				if (val == null) {
					return null;
				}

				if (Array.isArray(val)) {
					return jQuery.map(val, function (val) {
						return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
					});
				}

				return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
			}).get();
		}
	});

	var r20 = /%20/g,
	    rhash = /#.*$/,
	    rantiCache = /([?&])_=[^&]*/,
	    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,


	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	    rnoContent = /^(?:GET|HEAD)$/,
	    rprotocol = /^\/\//,


	/* Prefilters
  * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
  * 2) These are called:
  *    - BEFORE asking for a transport
  *    - AFTER param serialization (s.data is a string if s.processData is true)
  * 3) key is the dataType
  * 4) the catchall symbol "*" can be used
  * 5) execution will start with transport dataType and THEN continue down to "*" if needed
  */
	prefilters = {},


	/* Transports bindings
  * 1) key is the dataType
  * 2) the catchall symbol "*" can be used
  * 3) selection will start with transport dataType and THEN go to "*" if needed
  */
	transports = {},


	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*"),


	// Anchor tag for parsing the document origin
	originAnchor = document.createElement("a");
	originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure) {

		// dataTypeExpression is optional and defaults to "*"
		return function (dataTypeExpression, func) {

			if (typeof dataTypeExpression !== "string") {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
			    i = 0,
			    dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

			if (isFunction(func)) {

				// For each dataType in the dataTypeExpression
				while (dataType = dataTypes[i++]) {

					// Prepend if requested
					if (dataType[0] === "+") {
						dataType = dataType.slice(1) || "*";
						(structure[dataType] = structure[dataType] || []).unshift(func);

						// Otherwise append
					} else {
						(structure[dataType] = structure[dataType] || []).push(func);
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

		var inspected = {},
		    seekingTransport = structure === transports;

		function inspect(dataType) {
			var selected;
			inspected[dataType] = true;
			jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
				var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
				if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {

					options.dataTypes.unshift(dataTypeOrTransport);
					inspect(dataTypeOrTransport);
					return false;
				} else if (seekingTransport) {
					return !(selected = dataTypeOrTransport);
				}
			});
			return selected;
		}

		return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target, src) {
		var key,
		    deep,
		    flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for (key in src) {
			if (src[key] !== undefined) {
				(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
			}
		}
		if (deep) {
			jQuery.extend(true, target, deep);
		}

		return target;
	}

	/* Handles responses to an ajax request:
  * - finds the right dataType (mediates between content-type and expected dataType)
  * - returns the corresponding response
  */
	function ajaxHandleResponses(s, jqXHR, responses) {

		var ct,
		    type,
		    finalDataType,
		    firstDataType,
		    contents = s.contents,
		    dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while (dataTypes[0] === "*") {
			dataTypes.shift();
			if (ct === undefined) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if (ct) {
			for (type in contents) {
				if (contents[type] && contents[type].test(ct)) {
					dataTypes.unshift(type);
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if (dataTypes[0] in responses) {
			finalDataType = dataTypes[0];
		} else {

			// Try convertible dataTypes
			for (type in responses) {
				if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
					finalDataType = type;
					break;
				}
				if (!firstDataType) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if (finalDataType) {
			if (finalDataType !== dataTypes[0]) {
				dataTypes.unshift(finalDataType);
			}
			return responses[finalDataType];
		}
	}

	/* Chain conversions given the request and the original response
  * Also sets the responseXXX fields on the jqXHR instance
  */
	function ajaxConvert(s, response, jqXHR, isSuccess) {
		var conv2,
		    current,
		    conv,
		    tmp,
		    prev,
		    converters = {},


		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if (dataTypes[1]) {
			for (conv in s.converters) {
				converters[conv.toLowerCase()] = s.converters[conv];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while (current) {

			if (s.responseFields[current]) {
				jqXHR[s.responseFields[current]] = response;
			}

			// Apply the dataFilter if provided
			if (!prev && isSuccess && s.dataFilter) {
				response = s.dataFilter(response, s.dataType);
			}

			prev = current;
			current = dataTypes.shift();

			if (current) {

				// There's only work to do if current dataType is non-auto
				if (current === "*") {

					current = prev;

					// Convert response if prev dataType is non-auto and differs from current
				} else if (prev !== "*" && prev !== current) {

					// Seek a direct converter
					conv = converters[prev + " " + current] || converters["* " + current];

					// If none found, seek a pair
					if (!conv) {
						for (conv2 in converters) {

							// If conv2 outputs current
							tmp = conv2.split(" ");
							if (tmp[1] === current) {

								// If prev can be converted to accepted input
								conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
								if (conv) {

									// Condense equivalence converters
									if (conv === true) {
										conv = converters[conv2];

										// Otherwise, insert the intermediate dataType
									} else if (converters[conv2] !== true) {
										current = tmp[0];
										dataTypes.unshift(tmp[1]);
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if (conv !== true) {

						// Unless errors are allowed to bubble, catch and return them
						if (conv && s.throws) {
							response = conv(response);
						} else {
							try {
								response = conv(response);
							} catch (e) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test(location.protocol),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
   timeout: 0,
   data: null,
   dataType: null,
   username: null,
   password: null,
   cache: null,
   throws: false,
   traditional: false,
   headers: {},
   */

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function ajaxSetup(target, settings) {
			return settings ?

			// Building a settings object
			ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

			// Extending ajaxSettings
			ajaxExtend(jQuery.ajaxSettings, target);
		},

		ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
		ajaxTransport: addToPrefiltersOrTransports(transports),

		// Main method
		ajax: function ajax(url, options) {

			// If url is an object, simulate pre-1.5 signature
			if ((typeof url === "undefined" ? "undefined" : _typeof(url)) === "object") {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,


			// URL without anti-cache param
			cacheURL,


			// Response headers
			responseHeadersString,
			    responseHeaders,


			// timeout handle
			timeoutTimer,


			// Url cleanup var
			urlAnchor,


			// Request state (becomes false upon send and true upon completion)
			completed,


			// To know if global events are to be dispatched
			fireGlobals,


			// Loop variable
			i,


			// uncached part of the url
			uncached,


			// Create the final options object
			s = jQuery.ajaxSetup({}, options),


			// Callbacks context
			callbackContext = s.context || s,


			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,


			// Deferreds
			deferred = jQuery.Deferred(),
			    completeDeferred = jQuery.Callbacks("once memory"),


			// Status-dependent callbacks
			_statusCode = s.statusCode || {},


			// Headers (they are sent all at once)
			requestHeaders = {},
			    requestHeadersNames = {},


			// Default abort message
			strAbort = "canceled",


			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function getResponseHeader(key) {
					var match;
					if (completed) {
						if (!responseHeaders) {
							responseHeaders = {};
							while (match = rheaders.exec(responseHeadersString)) {
								responseHeaders[match[1].toLowerCase()] = match[2];
							}
						}
						match = responseHeaders[key.toLowerCase()];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function getAllResponseHeaders() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function setRequestHeader(name, value) {
					if (completed == null) {
						name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
						requestHeaders[name] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function overrideMimeType(type) {
					if (completed == null) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function statusCode(map) {
					var code;
					if (map) {
						if (completed) {

							// Execute the appropriate callbacks
							jqXHR.always(map[jqXHR.status]);
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for (code in map) {
								_statusCode[code] = [_statusCode[code], map[code]];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function abort(statusText) {
					var finalText = statusText || strAbort;
					if (transport) {
						transport.abort(finalText);
					}
					done(0, finalText);
					return this;
				}
			};

			// Attach deferreds
			deferred.promise(jqXHR);

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if (s.crossDomain == null) {
				urlAnchor = document.createElement("a");

				// Support: IE <=8 - 11, Edge 12 - 15
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
				} catch (e) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if (s.data && s.processData && typeof s.data !== "string") {
				s.data = jQuery.param(s.data, s.traditional);
			}

			// Apply prefilters
			inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

			// If request was aborted inside a prefilter, stop there
			if (completed) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if (fireGlobals && jQuery.active++ === 0) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test(s.type);

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace(rhash, "");

			// More options handling for requests with no content
			if (!s.hasContent) {

				// Remember the hash so we can put it back
				uncached = s.url.slice(cacheURL.length);

				// If data is available and should be processed, append data to url
				if (s.data && (s.processData || typeof s.data === "string")) {
					cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if (s.cache === false) {
					cacheURL = cacheURL.replace(rantiCache, "$1");
					uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

				// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
				s.data = s.data.replace(r20, "+");
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if (s.ifModified) {
				if (jQuery.lastModified[cacheURL]) {
					jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
				}
				if (jQuery.etag[cacheURL]) {
					jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
				}
			}

			// Set the correct header, if data is being sent
			if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
				jqXHR.setRequestHeader("Content-Type", s.contentType);
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

			// Check for headers option
			for (i in s.headers) {
				jqXHR.setRequestHeader(i, s.headers[i]);
			}

			// Allow custom headers/mimetypes and early abort
			if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add(s.complete);
			jqXHR.done(s.success);
			jqXHR.fail(s.error);

			// Get transport
			transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

			// If no transport, we auto-abort
			if (!transport) {
				done(-1, "No Transport");
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if (fireGlobals) {
					globalEventContext.trigger("ajaxSend", [jqXHR, s]);
				}

				// If request was aborted inside ajaxSend, stop there
				if (completed) {
					return jqXHR;
				}

				// Timeout
				if (s.async && s.timeout > 0) {
					timeoutTimer = window.setTimeout(function () {
						jqXHR.abort("timeout");
					}, s.timeout);
				}

				try {
					completed = false;
					transport.send(requestHeaders, done);
				} catch (e) {

					// Rethrow post-completion exceptions
					if (completed) {
						throw e;
					}

					// Propagate others as results
					done(-1, e);
				}
			}

			// Callback for when everything is done
			function done(status, nativeStatusText, responses, headers) {
				var isSuccess,
				    success,
				    error,
				    response,
				    modified,
				    statusText = nativeStatusText;

				// Ignore repeat invocations
				if (completed) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if (timeoutTimer) {
					window.clearTimeout(timeoutTimer);
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if (responses) {
					response = ajaxHandleResponses(s, jqXHR, responses);
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert(s, response, jqXHR, isSuccess);

				// If successful, handle type chaining
				if (isSuccess) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if (s.ifModified) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if (modified) {
							jQuery.lastModified[cacheURL] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if (modified) {
							jQuery.etag[cacheURL] = modified;
						}
					}

					// if no content
					if (status === 204 || s.type === "HEAD") {
						statusText = "nocontent";

						// if not modified
					} else if (status === 304) {
						statusText = "notmodified";

						// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if (status || !statusText) {
						statusText = "error";
						if (status < 0) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = (nativeStatusText || statusText) + "";

				// Success/Error
				if (isSuccess) {
					deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
				} else {
					deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
				}

				// Status-dependent callbacks
				jqXHR.statusCode(_statusCode);
				_statusCode = undefined;

				if (fireGlobals) {
					globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
				}

				// Complete
				completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

				if (fireGlobals) {
					globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

					// Handle the global AJAX counter
					if (! --jQuery.active) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function getJSON(url, data, callback) {
			return jQuery.get(url, data, callback, "json");
		},

		getScript: function getScript(url, callback) {
			return jQuery.get(url, undefined, callback, "script");
		}
	});

	jQuery.each(["get", "post"], function (i, method) {
		jQuery[method] = function (url, data, callback, type) {

			// Shift arguments if data argument was omitted
			if (isFunction(data)) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax(jQuery.extend({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject(url) && url));
		};
	});

	jQuery._evalUrl = function (url) {
		return jQuery.ajax({
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		});
	};

	jQuery.fn.extend({
		wrapAll: function wrapAll(html) {
			var wrap;

			if (this[0]) {
				if (isFunction(html)) {
					html = html.call(this[0]);
				}

				// The elements to wrap the target around
				wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

				if (this[0].parentNode) {
					wrap.insertBefore(this[0]);
				}

				wrap.map(function () {
					var elem = this;

					while (elem.firstElementChild) {
						elem = elem.firstElementChild;
					}

					return elem;
				}).append(this);
			}

			return this;
		},

		wrapInner: function wrapInner(html) {
			if (isFunction(html)) {
				return this.each(function (i) {
					jQuery(this).wrapInner(html.call(this, i));
				});
			}

			return this.each(function () {
				var self = jQuery(this),
				    contents = self.contents();

				if (contents.length) {
					contents.wrapAll(html);
				} else {
					self.append(html);
				}
			});
		},

		wrap: function wrap(html) {
			var htmlIsFunction = isFunction(html);

			return this.each(function (i) {
				jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
			});
		},

		unwrap: function unwrap(selector) {
			this.parent(selector).not("body").each(function () {
				jQuery(this).replaceWith(this.childNodes);
			});
			return this;
		}
	});

	jQuery.expr.pseudos.hidden = function (elem) {
		return !jQuery.expr.pseudos.visible(elem);
	};
	jQuery.expr.pseudos.visible = function (elem) {
		return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
	};

	jQuery.ajaxSettings.xhr = function () {
		try {
			return new window.XMLHttpRequest();
		} catch (e) {}
	};

	var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	    xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport(function (options) {
		var _callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if (support.cors || xhrSupported && !options.crossDomain) {
			return {
				send: function send(headers, complete) {
					var i,
					    xhr = options.xhr();

					xhr.open(options.type, options.url, options.async, options.username, options.password);

					// Apply custom fields if provided
					if (options.xhrFields) {
						for (i in options.xhrFields) {
							xhr[i] = options.xhrFields[i];
						}
					}

					// Override mime type if needed
					if (options.mimeType && xhr.overrideMimeType) {
						xhr.overrideMimeType(options.mimeType);
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if (!options.crossDomain && !headers["X-Requested-With"]) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for (i in headers) {
						xhr.setRequestHeader(i, headers[i]);
					}

					// Callback
					_callback = function callback(type) {
						return function () {
							if (_callback) {
								_callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

								if (type === "abort") {
									xhr.abort();
								} else if (type === "error") {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if (typeof xhr.status !== "number") {
										complete(0, "error");
									} else {
										complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status, xhr.statusText);
									}
								} else {
									complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									(xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders());
								}
							}
						};
					};

					// Listen to events
					xhr.onload = _callback();
					errorCallback = xhr.onerror = xhr.ontimeout = _callback("error");

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if (xhr.onabort !== undefined) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function () {

							// Check readyState before timeout as it changes
							if (xhr.readyState === 4) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout(function () {
									if (_callback) {
										errorCallback();
									}
								});
							}
						};
					}

					// Create the abort callback
					_callback = _callback("abort");

					try {

						// Do send the request (this may raise an exception)
						xhr.send(options.hasContent && options.data || null);
					} catch (e) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if (_callback) {
							throw e;
						}
					}
				},

				abort: function abort() {
					if (_callback) {
						_callback();
					}
				}
			};
		}
	});

	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter(function (s) {
		if (s.crossDomain) {
			s.contents.script = false;
		}
	});

	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function textScript(text) {
				jQuery.globalEval(text);
				return text;
			}
		}
	});

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter("script", function (s) {
		if (s.cache === undefined) {
			s.cache = false;
		}
		if (s.crossDomain) {
			s.type = "GET";
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport("script", function (s) {

		// This transport only deals with cross domain requests
		if (s.crossDomain) {
			var script, _callback2;
			return {
				send: function send(_, complete) {
					script = jQuery("<script>").prop({
						charset: s.scriptCharset,
						src: s.url
					}).on("load error", _callback2 = function callback(evt) {
						script.remove();
						_callback2 = null;
						if (evt) {
							complete(evt.type === "error" ? 404 : 200, evt.type);
						}
					});

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild(script[0]);
				},
				abort: function abort() {
					if (_callback2) {
						_callback2();
					}
				}
			};
		}
	});

	var oldCallbacks = [],
	    rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function jsonpCallback() {
			var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
			this[callback] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

		var callbackName,
		    overwritten,
		    responseContainer,
		    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if (jsonProp || s.dataTypes[0] === "jsonp") {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

			// Insert callback into url or form data
			if (jsonProp) {
				s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
			} else if (s.jsonp !== false) {
				s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function () {
				if (!responseContainer) {
					jQuery.error(callbackName + " was not called");
				}
				return responseContainer[0];
			};

			// Force json dataType
			s.dataTypes[0] = "json";

			// Install callback
			overwritten = window[callbackName];
			window[callbackName] = function () {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function () {

				// If previous value didn't exist - remove it
				if (overwritten === undefined) {
					jQuery(window).removeProp(callbackName);

					// Otherwise restore preexisting value
				} else {
					window[callbackName] = overwritten;
				}

				// Save back as free
				if (s[callbackName]) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push(callbackName);
				}

				// Call if it was a function and we have a response
				if (responseContainer && isFunction(overwritten)) {
					overwritten(responseContainer[0]);
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});

	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = function () {
		var body = document.implementation.createHTMLDocument("").body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	}();

	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function (data, context, keepScripts) {
		if (typeof data !== "string") {
			return [];
		}
		if (typeof context === "boolean") {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if (!context) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if (support.createHTMLDocument) {
				context = document.implementation.createHTMLDocument("");

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement("base");
				base.href = document.location.href;
				context.head.appendChild(base);
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec(data);
		scripts = !keepScripts && [];

		// Single tag
		if (parsed) {
			return [context.createElement(parsed[1])];
		}

		parsed = buildFragment([data], context, scripts);

		if (scripts && scripts.length) {
			jQuery(scripts).remove();
		}

		return jQuery.merge([], parsed.childNodes);
	};

	/**
  * Load a url into a page
  */
	jQuery.fn.load = function (url, params, callback) {
		var selector,
		    type,
		    response,
		    self = this,
		    off = url.indexOf(" ");

		if (off > -1) {
			selector = stripAndCollapse(url.slice(off));
			url = url.slice(0, off);
		}

		// If it's a function
		if (isFunction(params)) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

			// Otherwise, build a param string
		} else if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === "object") {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if (self.length > 0) {
			jQuery.ajax({
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			}).done(function (responseText) {

				// Save response for use in complete callback
				response = arguments;

				self.html(selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

				// Otherwise use the full result
				responseText);

				// If the request succeeds, this function gets "data", "status", "jqXHR"
				// but they are ignored because response was set above.
				// If it fails, this function gets "jqXHR", "status", "error"
			}).always(callback && function (jqXHR, status) {
				self.each(function () {
					callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
				});
			});
		}

		return this;
	};

	// Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
		jQuery.fn[type] = function (fn) {
			return this.on(type, fn);
		};
	});

	jQuery.expr.pseudos.animated = function (elem) {
		return jQuery.grep(jQuery.timers, function (fn) {
			return elem === fn.elem;
		}).length;
	};

	jQuery.offset = {
		setOffset: function setOffset(elem, options, i) {
			var curPosition,
			    curLeft,
			    curCSSTop,
			    curTop,
			    curOffset,
			    curCSSLeft,
			    calculatePosition,
			    position = jQuery.css(elem, "position"),
			    curElem = jQuery(elem),
			    props = {};

			// Set position first, in-case top/left are set even on static elem
			if (position === "static") {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css(elem, "top");
			curCSSLeft = jQuery.css(elem, "left");
			calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if (calculatePosition) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat(curCSSTop) || 0;
				curLeft = parseFloat(curCSSLeft) || 0;
			}

			if (isFunction(options)) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call(elem, i, jQuery.extend({}, curOffset));
			}

			if (options.top != null) {
				props.top = options.top - curOffset.top + curTop;
			}
			if (options.left != null) {
				props.left = options.left - curOffset.left + curLeft;
			}

			if ("using" in options) {
				options.using.call(elem, props);
			} else {
				curElem.css(props);
			}
		}
	};

	jQuery.fn.extend({

		// offset() relates an element's border box to the document origin
		offset: function offset(options) {

			// Preserve chaining for setter
			if (arguments.length) {
				return options === undefined ? this : this.each(function (i) {
					jQuery.offset.setOffset(this, options, i);
				});
			}

			var rect,
			    win,
			    elem = this[0];

			if (!elem) {
				return;
			}

			// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if (!elem.getClientRects().length) {
				return { top: 0, left: 0 };
			}

			// Get document-relative position by adding viewport scroll to viewport-relative gBCR
			rect = elem.getBoundingClientRect();
			win = elem.ownerDocument.defaultView;
			return {
				top: rect.top + win.pageYOffset,
				left: rect.left + win.pageXOffset
			};
		},

		// position() relates an element's margin box to its offset parent's padding box
		// This corresponds to the behavior of CSS absolute positioning
		position: function position() {
			if (!this[0]) {
				return;
			}

			var offsetParent,
			    offset,
			    doc,
			    elem = this[0],
			    parentOffset = { top: 0, left: 0 };

			// position:fixed elements are offset from the viewport, which itself always has zero offset
			if (jQuery.css(elem, "position") === "fixed") {

				// Assume position:fixed implies availability of getBoundingClientRect
				offset = elem.getBoundingClientRect();
			} else {
				offset = this.offset();

				// Account for the *real* offset parent, which can be the document or its root element
				// when a statically positioned element is identified
				doc = elem.ownerDocument;
				offsetParent = elem.offsetParent || doc.documentElement;
				while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {

					offsetParent = offsetParent.parentNode;
				}
				if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {

					// Incorporate borders into its offset, since they are outside its content origin
					parentOffset = jQuery(offsetParent).offset();
					parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
					parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
				}
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
				left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function offsetParent() {
			return this.map(function () {
				var offsetParent = this.offsetParent;

				while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			});
		}
	});

	// Create scrollLeft and scrollTop methods
	jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
		var top = "pageYOffset" === prop;

		jQuery.fn[method] = function (val) {
			return access(this, function (elem, method, val) {

				// Coalesce documents and windows
				var win;
				if (isWindow(elem)) {
					win = elem;
				} else if (elem.nodeType === 9) {
					win = elem.defaultView;
				}

				if (val === undefined) {
					return win ? win[prop] : elem[method];
				}

				if (win) {
					win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
				} else {
					elem[method] = val;
				}
			}, method, val, arguments.length);
		};
	});

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each(["top", "left"], function (i, prop) {
		jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
			if (computed) {
				computed = curCSS(elem, prop);

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
			}
		});
	});

	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
		jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[funcName] = function (margin, value) {
				var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
				    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

				return access(this, function (elem, type, value) {
					var doc;

					if (isWindow(elem)) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
					}

					// Get document width or height
					if (elem.nodeType === 9) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
					}

					return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css(elem, type, extra) :

					// Set width or height on the element
					jQuery.style(elem, type, value, extra);
				}, type, chainable ? margin : undefined, chainable);
			};
		});
	});

	jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {

		// Handle event binding
		jQuery.fn[name] = function (data, fn) {
			return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
		};
	});

	jQuery.fn.extend({
		hover: function hover(fnOver, fnOut) {
			return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
		}
	});

	jQuery.fn.extend({

		bind: function bind(types, data, fn) {
			return this.on(types, null, data, fn);
		},
		unbind: function unbind(types, fn) {
			return this.off(types, null, fn);
		},

		delegate: function delegate(selector, types, data, fn) {
			return this.on(types, selector, data, fn);
		},
		undelegate: function undelegate(selector, types, fn) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
		}
	});

	// Bind a function to a context, optionally partially applying any
	// arguments.
	// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
	// However, it is not slated for removal any time soon
	jQuery.proxy = function (fn, context) {
		var tmp, args, proxy;

		if (typeof context === "string") {
			tmp = fn[context];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if (!isFunction(fn)) {
			return undefined;
		}

		// Simulated bind
		args = _slice.call(arguments, 2);
		proxy = function proxy() {
			return fn.apply(context || this, args.concat(_slice.call(arguments)));
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	};

	jQuery.holdReady = function (hold) {
		if (hold) {
			jQuery.readyWait++;
		} else {
			jQuery.ready(true);
		}
	};
	jQuery.isArray = Array.isArray;
	jQuery.parseJSON = JSON.parse;
	jQuery.nodeName = nodeName;
	jQuery.isFunction = isFunction;
	jQuery.isWindow = isWindow;
	jQuery.camelCase = camelCase;
	jQuery.type = toType;

	jQuery.now = Date.now;

	jQuery.isNumeric = function (obj) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type(obj);
		return (type === "number" || type === "string") &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN(obj - parseFloat(obj));
	};

	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if (typeof define === "function" && define.amd) {
		define("jquery", [], function () {
			return jQuery;
		});
	}

	var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,


	// Map over the $ in case of overwrite
	_$ = window.$;

	jQuery.noConflict = function (deep) {
		if (window.$ === jQuery) {
			window.$ = _$;
		}

		if (deep && window.jQuery === jQuery) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if (!noGlobal) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
});

/* http://keith-wood.name/countdown.html
   Countdown for jQuery v1.5.2.
   Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
   Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and 
   MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses. 
   Please attribute the author if you use it. */

/* Display a countdown timer.
   Attach it with options like:
   $('div selector').countdown(
       {until: new Date(2009, 1 - 1, 1, 0, 0, 0), onExpiry: happyNewYear}); */

(function ($) {
	// Hide scope, no $ conflict

	/* Countdown manager. */
	function Countdown() {
		this.regional = []; // Available regional settings, indexed by language code
		this.regional[''] = { // Default regional settings
			// The display texts for the counters
			labels: ['Years', 'Months', 'Weeks', 'DAYS', 'HOURS', 'MINUTES', 'SECONDS'],
			// The display texts for the counters if only one
			labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'],
			compactLabels: ['y', 'm', 'w', 'd'], // The compact texts for the counters
			timeSeparator: ':', // Separator for time periods
			isRTL: false // True for right-to-left languages, false for left-to-right
		};
		this._defaults = {
			until: null, // new Date(year, mth - 1, day, hr, min, sec) - date/time to count down to
			// or numeric for seconds offset, or string for unit offset(s):
			// 'Y' years, 'O' months, 'W' weeks, 'D' days, 'H' hours, 'M' minutes, 'S' seconds
			since: null, // new Date(year, mth - 1, day, hr, min, sec) - date/time to count up to
			// or numeric for seconds offset, or string for unit offset(s):
			// 'Y' years, 'O' months, 'W' weeks, 'D' days, 'H' hours, 'M' minutes, 'S' seconds
			timezone: null, // The timezone (hours or minutes from GMT) for the target times,
			// or null for client local
			format: 'dHMS', // Format for display - upper case for always, lower case only if non-zero,
			// 'Y' years, 'O' months, 'W' weeks, 'D' days, 'H' hours, 'M' minutes, 'S' seconds
			layout: '', // Build your own layout for the countdown
			compact: false, // True to display in a compact format, false for an expanded one
			description: '', // The description displayed for the countdown
			expiryUrl: '', // A URL to load upon expiry, replacing the current page
			expiryText: '', // Text to display upon expiry, replacing the countdown
			alwaysExpire: false, // True to trigger onExpiry even if never counted down
			onExpiry: null, // Callback when the countdown expires -
			// receives no parameters and 'this' is the containing division
			onTick: null // Callback when the countdown is updated -
			// receives int[7] being the breakdown by period (based on format)
			// and 'this' is the containing division
		};
		$.extend(this._defaults, this.regional['']);
	}

	var PROP_NAME = 'countdown';

	var Y = 0; // Years
	var O = 1; // Months
	var W = 2; // Weeks
	var D = 3; // Days
	var H = 4; // Hours
	var M = 5; // Minutes
	var S = 6; // Seconds

	$.extend(Countdown.prototype, {
		/* Class name added to elements to indicate already configured with countdown. */
		markerClassName: 'hasCountdown',

		/* Shared timer for all countdowns. */
		_timer: setInterval(function () {
			$.countdown._updateTargets();
		}, 980),
		/* List of currently active countdown targets. */
		_timerTargets: [],

		/* Override the default settings for all instances of the countdown widget.
     @param  options  (object) the new settings to use as defaults */
		setDefaults: function setDefaults(options) {
			this._resetExtraLabels(this._defaults, options);
			extendRemove(this._defaults, options || {});
		},

		/* Convert a date/time to UTC.
     @param  tz     (number) the hour or minute offset from GMT, e.g. +9, -360
     @param  year   (Date) the date/time in that timezone or
                    (number) the year in that timezone
     @param  month  (number, optional) the month (0 - 11) (omit if year is a Date)
     @param  day    (number, optional) the day (omit if year is a Date)
     @param  hours  (number, optional) the hour (omit if year is a Date)
     @param  mins   (number, optional) the minute (omit if year is a Date)
     @param  secs   (number, optional) the second (omit if year is a Date)
     @param  ms     (number, optional) the millisecond (omit if year is a Date)
     @return  (Date) the equivalent UTC date/time */
		UTCDate: function UTCDate(tz, year, month, day, hours, mins, secs, ms) {
			if ((typeof year === "undefined" ? "undefined" : _typeof(year)) == 'object' && year.constructor == Date) {
				ms = year.getMilliseconds();
				secs = year.getSeconds();
				mins = year.getMinutes();
				hours = year.getHours();
				day = year.getDate();
				month = year.getMonth();
				year = year.getFullYear();
			}
			var d = new Date();
			d.setUTCFullYear(year);
			d.setUTCDate(1);
			d.setUTCMonth(month || 0);
			d.setUTCDate(day || 1);
			d.setUTCHours(hours || 0);
			d.setUTCMinutes((mins || 0) - (Math.abs(tz) < 30 ? tz * 60 : tz));
			d.setUTCSeconds(secs || 0);
			d.setUTCMilliseconds(ms || 0);
			return d;
		},

		/* Attach the countdown widget to a div.
     @param  target   (element) the containing division
     @param  options  (object) the initial settings for the countdown */
		_attachCountdown: function _attachCountdown(target, options) {
			var $target = $(target);
			if ($target.hasClass(this.markerClassName)) {
				return;
			}
			$target.addClass(this.markerClassName);
			var inst = { options: $.extend({}, options),
				_periods: [0, 0, 0, 0, 0, 0, 0] };
			$.data(target, PROP_NAME, inst);
			this._changeCountdown(target);
		},

		/* Add a target to the list of active ones.
     @param  target  (element) the countdown target */
		_addTarget: function _addTarget(target) {
			if (!this._hasTarget(target)) {
				this._timerTargets.push(target);
			}
		},

		/* See if a target is in the list of active ones.
     @param  target  (element) the countdown target
     @return  (boolean) true if present, false if not */
		_hasTarget: function _hasTarget(target) {
			return $.inArray(target, this._timerTargets) > -1;
		},

		/* Remove a target from the list of active ones.
     @param  target  (element) the countdown target */
		_removeTarget: function _removeTarget(target) {
			this._timerTargets = $.map(this._timerTargets, function (value) {
				return value == target ? null : value;
			}); // delete entry
		},

		/* Update each active timer target. */
		_updateTargets: function _updateTargets() {
			for (var i = 0; i < this._timerTargets.length; i++) {
				this._updateCountdown(this._timerTargets[i]);
			}
		},

		/* Redisplay the countdown with an updated display.
     @param  target  (jQuery) the containing division
     @param  inst    (object) the current settings for this instance */
		_updateCountdown: function _updateCountdown(target, inst) {
			var $target = $(target);
			inst = inst || $.data(target, PROP_NAME);
			if (!inst) {
				return;
			}
			$target.html(this._generateHTML(inst));
			$target[(this._get(inst, 'isRTL') ? 'add' : 'remove') + 'Class']('countdown_rtl');
			var onTick = this._get(inst, 'onTick');
			if (onTick) {
				onTick.apply(target, [inst._hold != 'lap' ? inst._periods : this._calculatePeriods(inst, inst._show, new Date())]);
			}
			var expired = inst._hold != 'pause' && (inst._since ? inst._now.getTime() <= inst._since.getTime() : inst._now.getTime() >= inst._until.getTime());
			if (expired && !inst._expiring) {
				inst._expiring = true;
				if (this._hasTarget(target) || this._get(inst, 'alwaysExpire')) {
					this._removeTarget(target);
					var onExpiry = this._get(inst, 'onExpiry');
					if (onExpiry) {
						onExpiry.apply(target, []);
					}
					var expiryText = this._get(inst, 'expiryText');
					if (expiryText) {
						var layout = this._get(inst, 'layout');
						inst.options.layout = expiryText;
						this._updateCountdown(target, inst);
						inst.options.layout = layout;
					}
					var expiryUrl = this._get(inst, 'expiryUrl');
					if (expiryUrl) {
						window.location = expiryUrl;
					}
				}
				inst._expiring = false;
			} else if (inst._hold == 'pause') {
				this._removeTarget(target);
			}
			$.data(target, PROP_NAME, inst);
		},

		/* Reconfigure the settings for a countdown div.
     @param  target   (element) the containing division
     @param  options  (object) the new settings for the countdown or
                      (string) an individual property name
     @param  value    (any) the individual property value
                      (omit if options is an object) */
		_changeCountdown: function _changeCountdown(target, options, value) {
			options = options || {};
			if (typeof options == 'string') {
				var name = options;
				options = {};
				options[name] = value;
			}
			var inst = $.data(target, PROP_NAME);
			if (inst) {
				this._resetExtraLabels(inst.options, options);
				extendRemove(inst.options, options);
				this._adjustSettings(inst);
				$.data(target, PROP_NAME, inst);
				var now = new Date();
				if (inst._since && inst._since < now || inst._until && inst._until > now) {
					this._addTarget(target);
				}
				this._updateCountdown(target, inst);
			}
		},

		/* Reset any extra labelsn and compactLabelsn entries if changing labels.
     @param  base     (object) the options to be updated
     @param  options  (object) the new option values */
		_resetExtraLabels: function _resetExtraLabels(base, options) {
			var changingLabels = false;
			for (var n in options) {
				if (n.match(/[Ll]abels/)) {
					changingLabels = true;
					break;
				}
			}
			if (changingLabels) {
				for (var n in base) {
					// Remove custom numbered labels
					if (n.match(/[Ll]abels[0-9]/)) {
						base[n] = null;
					}
				}
			}
		},

		/* Remove the countdown widget from a div.
     @param  target  (element) the containing division */
		_destroyCountdown: function _destroyCountdown(target) {
			var $target = $(target);
			if (!$target.hasClass(this.markerClassName)) {
				return;
			}
			this._removeTarget(target);
			$target.removeClass(this.markerClassName).empty();
			$.removeData(target, PROP_NAME);
		},

		/* Pause a countdown widget at the current time.
     Stop it running but remember and display the current time.
     @param  target  (element) the containing division */
		_pauseCountdown: function _pauseCountdown(target) {
			this._hold(target, 'pause');
		},

		/* Pause a countdown widget at the current time.
     Stop the display but keep the countdown running.
     @param  target  (element) the containing division */
		_lapCountdown: function _lapCountdown(target) {
			this._hold(target, 'lap');
		},

		/* Resume a paused countdown widget.
     @param  target  (element) the containing division */
		_resumeCountdown: function _resumeCountdown(target) {
			this._hold(target, null);
		},

		/* Pause or resume a countdown widget.
     @param  target  (element) the containing division
     @param  hold    (string) the new hold setting */
		_hold: function _hold(target, hold) {
			var inst = $.data(target, PROP_NAME);
			if (inst) {
				if (inst._hold == 'pause' && !hold) {
					inst._periods = inst._savePeriods;
					var sign = inst._since ? '-' : '+';
					inst[inst._since ? '_since' : '_until'] = this._determineTime(sign + inst._periods[0] + 'y' + sign + inst._periods[1] + 'o' + sign + inst._periods[2] + 'w' + sign + inst._periods[3] + 'd' + sign + inst._periods[4] + 'h' + sign + inst._periods[5] + 'm' + sign + inst._periods[6] + 's');
					this._addTarget(target);
				}
				inst._hold = hold;
				inst._savePeriods = hold == 'pause' ? inst._periods : null;
				$.data(target, PROP_NAME, inst);
				this._updateCountdown(target, inst);
			}
		},

		/* Return the current time periods.
     @param  target  (element) the containing division
     @return  (number[7]) the current periods for the countdown */
		_getTimesCountdown: function _getTimesCountdown(target) {
			var inst = $.data(target, PROP_NAME);
			return !inst ? null : !inst._hold ? inst._periods : this._calculatePeriods(inst, inst._show, new Date());
		},

		/* Get a setting value, defaulting if necessary.
     @param  inst  (object) the current settings for this instance
     @param  name  (string) the name of the required setting
     @return  (any) the setting's value or a default if not overridden */
		_get: function _get(inst, name) {
			return inst.options[name] != null ? inst.options[name] : $.countdown._defaults[name];
		},

		/* Calculate interal settings for an instance.
     @param  inst  (object) the current settings for this instance */
		_adjustSettings: function _adjustSettings(inst) {
			var now = new Date();
			var timezone = this._get(inst, 'timezone');
			timezone = timezone == null ? -new Date().getTimezoneOffset() : timezone;
			inst._since = this._get(inst, 'since');
			if (inst._since) {
				inst._since = this.UTCDate(timezone, this._determineTime(inst._since, null));
			}
			inst._until = this.UTCDate(timezone, this._determineTime(this._get(inst, 'until'), now));
			inst._show = this._determineShow(inst);
		},

		/* A time may be specified as an exact value or a relative one.
     @param  setting      (string or number or Date) - the date/time value
                          as a relative or absolute value
     @param  defaultTime  (Date) the date/time to use if no other is supplied
     @return  (Date) the corresponding date/time */
		_determineTime: function _determineTime(setting, defaultTime) {
			var offsetNumeric = function offsetNumeric(offset) {
				// e.g. +300, -2
				var time = new Date();
				time.setTime(time.getTime() + offset * 1000);
				return time;
			};
			var offsetString = function offsetString(offset) {
				// e.g. '+2d', '-4w', '+3h +30m'
				offset = offset.toLowerCase();
				var time = new Date();
				var year = time.getFullYear();
				var month = time.getMonth();
				var day = time.getDate();
				var hour = time.getHours();
				var minute = time.getMinutes();
				var second = time.getSeconds();
				var pattern = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;
				var matches = pattern.exec(offset);
				while (matches) {
					switch (matches[2] || 's') {
						case 's':
							second += parseInt(matches[1], 10);break;
						case 'm':
							minute += parseInt(matches[1], 10);break;
						case 'h':
							hour += parseInt(matches[1], 10);break;
						case 'd':
							day += parseInt(matches[1], 10);break;
						case 'w':
							day += parseInt(matches[1], 10) * 7;break;
						case 'o':
							month += parseInt(matches[1], 10);
							day = Math.min(day, $.countdown._getDaysInMonth(year, month));
							break;
						case 'y':
							year += parseInt(matches[1], 10);
							day = Math.min(day, $.countdown._getDaysInMonth(year, month));
							break;
					}
					matches = pattern.exec(offset);
				}
				return new Date(year, month, day, hour, minute, second, 0);
			};
			var time = setting == null ? defaultTime : typeof setting == 'string' ? offsetString(setting) : typeof setting == 'number' ? offsetNumeric(setting) : setting;
			if (time) time.setMilliseconds(0);
			return time;
		},

		/* Determine the number of days in a month.
     @param  year   (number) the year
     @param  month  (number) the month
     @return  (number) the days in that month */
		_getDaysInMonth: function _getDaysInMonth(year, month) {
			return 32 - new Date(year, month, 32).getDate();
		},

		/* Generate the HTML to display the countdown widget.
     @param  inst  (object) the current settings for this instance
     @return  (string) the new HTML for the countdown display */
		_generateHTML: function _generateHTML(inst) {
			// Determine what to show
			inst._periods = periods = inst._hold ? inst._periods : this._calculatePeriods(inst, inst._show, new Date());
			// Show all 'asNeeded' after first non-zero value
			var shownNonZero = false;
			var showCount = 0;
			for (var period = 0; period < inst._show.length; period++) {
				shownNonZero |= inst._show[period] == '?' && periods[period] > 0;
				inst._show[period] = inst._show[period] == '?' && !shownNonZero ? null : inst._show[period];
				showCount += inst._show[period] ? 1 : 0;
			}
			var compact = this._get(inst, 'compact');
			var layout = this._get(inst, 'layout');
			var labels = compact ? this._get(inst, 'compactLabels') : this._get(inst, 'labels');
			var timeSeparator = this._get(inst, 'timeSeparator');
			var description = this._get(inst, 'description') || '';
			var showCompact = function showCompact(period) {
				var labelsNum = $.countdown._get(inst, 'compactLabels' + periods[period]);
				return inst._show[period] ? periods[period] + (labelsNum ? labelsNum[period] : labels[period]) + ' ' : '';
			};
			var showFull = function showFull(period) {
				var labelsNum = $.countdown._get(inst, 'labels' + periods[period]);
				return inst._show[period] ? '<span class="countdown_section"><span class="countdown_amount">' + periods[period] + '</span><br/>' + (labelsNum ? labelsNum[period] : labels[period]) + '</span>' : '';
			};
			return layout ? this._buildLayout(inst, layout, compact) : (compact ? // Compact version
			'<span class="countdown_row countdown_amount' + (inst._hold ? ' countdown_holding' : '') + '">' + showCompact(Y) + showCompact(O) + showCompact(W) + showCompact(D) + (inst._show[H] ? this._twoDigits(periods[H]) : '') + (inst._show[M] ? (inst._show[H] ? timeSeparator : '') + this._twoDigits(periods[M]) : '') + (inst._show[S] ? (inst._show[H] || inst._show[M] ? timeSeparator : '') + this._twoDigits(periods[S]) : '') :
			// Full version
			'<span class="countdown_row countdown_show' + showCount + (inst._hold ? ' countdown_holding' : '') + '">' + showFull(Y) + showFull(O) + showFull(W) + showFull(D) + showFull(H) + showFull(M) + showFull(S)) + '</span>' + (description ? '<span class="countdown_row countdown_descr">' + description + '</span>' : '');
		},

		/* Construct a custom layout.
     @param  inst     (object) the current settings for this instance
     @param  layout   (string) the customised layout
     @param  compact  (boolean) true if using compact labels
     @return  (string) the custom HTML */
		_buildLayout: function _buildLayout(inst, layout, compact) {
			var labels = compact ? this._get(inst, 'compactLabels') : this._get(inst, 'labels');
			var labelFor = function labelFor(index) {
				return ($.countdown._get(inst, (compact ? 'compactLabels' : 'labels') + inst._periods[index]) || labels)[index];
			};
			var subs = {
				yl: labelFor(Y), yn: inst._periods[Y], ynn: this._twoDigits(inst._periods[Y]),
				ol: labelFor(O), on: inst._periods[O], onn: this._twoDigits(inst._periods[O]),
				wl: labelFor(W), wn: inst._periods[W], wnn: this._twoDigits(inst._periods[W]),
				dl: labelFor(D), dn: inst._periods[D], dnn: this._twoDigits(inst._periods[D]), dnnn: this._threeDigits(inst._periods[D]),
				hl: labelFor(H), hn: inst._periods[H], hnn: this._twoDigits(inst._periods[H]),
				ml: labelFor(M), mn: inst._periods[M], mnn: this._twoDigits(inst._periods[M]),
				sl: labelFor(S), sn: inst._periods[S], snn: this._twoDigits(inst._periods[S]) };
			var html = layout;
			// Replace period containers: {p<}...{p>}
			for (var i = 0; i < 7; i++) {
				var period = 'yowdhms'.charAt(i);
				var re = new RegExp('\\{' + period + '<\\}(.*)\\{' + period + '>\\}', 'g');
				html = html.replace(re, inst._show[i] ? '$1' : '');
			}
			// Replace period values: {pn}
			$.each(subs, function (n, v) {
				var re = new RegExp('\\{' + n + '\\}', 'g');
				html = html.replace(re, v);
			});
			return html;
		},

		/* Ensure a numeric value has at least two digits for display.
     @param  value  (number) the value to display
     @return  (string) the display text */
		_twoDigits: function _twoDigits(value) {
			return (value < 10 ? '0' : '') + value;
		},

		/* Ensure a numeric value has at least three digits for display.
     @param  value  (number) the value to display
     @return  (string) the display text */
		_threeDigits: function _threeDigits(value) {
			return (value < 100 ? value < 10 ? '00' : '0' : '') + value;
		},

		/* Translate the format into flags for each period.
     @param  inst  (object) the current settings for this instance
     @return  (string[7]) flags indicating which periods are requested (?) or
              required (!) by year, month, week, day, hour, minute, second */
		_determineShow: function _determineShow(inst) {
			var format = this._get(inst, 'format');
			var show = [];
			show[Y] = format.match('y') ? '?' : format.match('Y') ? '!' : null;
			show[O] = format.match('o') ? '?' : format.match('O') ? '!' : null;
			show[W] = format.match('w') ? '?' : format.match('W') ? '!' : null;
			show[D] = format.match('d') ? '?' : format.match('D') ? '!' : null;
			show[H] = format.match('h') ? '?' : format.match('H') ? '!' : null;
			show[M] = format.match('m') ? '?' : format.match('M') ? '!' : null;
			show[S] = format.match('s') ? '?' : format.match('S') ? '!' : null;
			return show;
		},

		/* Calculate the requested periods between now and the target time.
     @param  inst  (object) the current settings for this instance
     @param  show  (string[7]) flags indicating which periods are requested/required
     @param  now   (Date) the current date and time
     @return  (number[7]) the current time periods (always positive)
              by year, month, week, day, hour, minute, second */
		_calculatePeriods: function _calculatePeriods(inst, show, now) {
			// Find endpoints
			inst._now = now;
			inst._now.setMilliseconds(0);
			var until = new Date(inst._now.getTime());
			if (inst._since && now.getTime() < inst._since.getTime()) {
				inst._now = now = until;
			} else if (inst._since) {
				now = inst._since;
			} else {
				until.setTime(inst._until.getTime());
				if (now.getTime() > inst._until.getTime()) {
					inst._now = now = until;
				}
			}
			// Calculate differences by period
			var periods = [0, 0, 0, 0, 0, 0, 0];
			if (show[Y] || show[O]) {
				// Treat end of months as the same
				var lastNow = $.countdown._getDaysInMonth(now.getFullYear(), now.getMonth());
				var lastUntil = $.countdown._getDaysInMonth(until.getFullYear(), until.getMonth());
				var sameDay = until.getDate() == now.getDate() || until.getDate() >= Math.min(lastNow, lastUntil) && now.getDate() >= Math.min(lastNow, lastUntil);
				var getSecs = function getSecs(date) {
					return (date.getHours() * 60 + date.getMinutes()) * 60 + date.getSeconds();
				};
				var months = Math.max(0, (until.getFullYear() - now.getFullYear()) * 12 + until.getMonth() - now.getMonth() + (until.getDate() < now.getDate() && !sameDay || sameDay && getSecs(until) < getSecs(now) ? -1 : 0));
				periods[Y] = show[Y] ? Math.floor(months / 12) : 0;
				periods[O] = show[O] ? months - periods[Y] * 12 : 0;
				// Adjust for months difference and end of month if necessary
				var adjustDate = function adjustDate(date, offset, last) {
					var wasLastDay = date.getDate() == last;
					var lastDay = $.countdown._getDaysInMonth(date.getFullYear() + offset * periods[Y], date.getMonth() + offset * periods[O]);
					if (date.getDate() > lastDay) {
						date.setDate(lastDay);
					}
					date.setFullYear(date.getFullYear() + offset * periods[Y]);
					date.setMonth(date.getMonth() + offset * periods[O]);
					if (wasLastDay) {
						date.setDate(lastDay);
					}
					return date;
				};
				if (inst._since) {
					until = adjustDate(until, -1, lastUntil);
				} else {
					now = adjustDate(new Date(now.getTime()), +1, lastNow);
				}
			}
			var diff = Math.floor((until.getTime() - now.getTime()) / 1000);
			var extractPeriod = function extractPeriod(period, numSecs) {
				periods[period] = show[period] ? Math.floor(diff / numSecs) : 0;
				diff -= periods[period] * numSecs;
			};
			extractPeriod(W, 604800);
			extractPeriod(D, 86400);
			extractPeriod(H, 3600);
			extractPeriod(M, 60);
			extractPeriod(S, 1);
			return periods;
		}
	});

	/* jQuery extend now ignores nulls!
    @param  target  (object) the object to update
    @param  props   (object) the new settings
    @return  (object) the updated object */
	function extendRemove(target, props) {
		$.extend(target, props);
		for (var name in props) {
			if (props[name] == null) {
				target[name] = null;
			}
		}
		return target;
	}

	/* Process the countdown functionality for a jQuery selection.
    @param  command  (string) the command to run (optional, default 'attach')
    @param  options  (object) the new settings to use for these countdown instances
    @return  (jQuery) for chaining further calls */
	$.fn.countdown = function (options) {
		var otherArgs = Array.prototype.slice.call(arguments, 1);
		if (options == 'getTimes') {
			return $.countdown['_' + options + 'Countdown'].apply($.countdown, [this[0]].concat(otherArgs));
		}
		return this.each(function () {
			if (typeof options == 'string') {
				$.countdown['_' + options + 'Countdown'].apply($.countdown, [this].concat(otherArgs));
			} else {
				$.countdown._attachCountdown(this, options);
			}
		});
	};

	/* Initialise the countdown functionality. */
	$.countdown = new Countdown(); // singleton instance
})(jQuery);

// JavaScript Document


//countdown
$(function () {
	var countDay = new Date();
	countDay = new Date('June 1, 2018 12:00:00');
	$('#defaultCountdown').countdown({
		until: countDay,
		format: 'DHMS',
		layout: '<div class="content__timer-wrap" id="counter">' + '<div id="values">' + '<div id="counter_days" class="grey numbs rounded shadow">{dnnn}<p class="date_label">{dl}</p></div>' + '<div id="counter_hours" class="grey numbs rounded shadow">{hnn}<p class="date_label">{hl}</p></div>' + '<div id="counter_minutes" class="grey numbs rounded shadow">{mnn}<p class="date_label">{ml}</p></div>' + '<div id="counter_seconds" class="grey numbs rounded shadow">{snn}<p class="date_label">{sl}</p></div>' + '</div>' + '</div>'
	});
	$('#year').text(countDay.getFullYear());
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuLyohXG4gKiBqUXVlcnkgSmF2YVNjcmlwdCBMaWJyYXJ5IHYzLjMuMVxuICogaHR0cHM6Ly9qcXVlcnkuY29tL1xuICpcbiAqIEluY2x1ZGVzIFNpenpsZS5qc1xuICogaHR0cHM6Ly9zaXp6bGVqcy5jb20vXG4gKlxuICogQ29weXJpZ2h0IEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqIERhdGU6IDIwMTgtMDEtMjBUMTc6MjRaXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0aWYgKCh0eXBlb2YgbW9kdWxlID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YobW9kdWxlKSkgPT09IFwib2JqZWN0XCIgJiYgX3R5cGVvZihtb2R1bGUuZXhwb3J0cykgPT09IFwib2JqZWN0XCIpIHtcblxuXHRcdC8vIEZvciBDb21tb25KUyBhbmQgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgd2hlcmUgYSBwcm9wZXIgYHdpbmRvd2Bcblx0XHQvLyBpcyBwcmVzZW50LCBleGVjdXRlIHRoZSBmYWN0b3J5IGFuZCBnZXQgalF1ZXJ5LlxuXHRcdC8vIEZvciBlbnZpcm9ubWVudHMgdGhhdCBkbyBub3QgaGF2ZSBhIGB3aW5kb3dgIHdpdGggYSBgZG9jdW1lbnRgXG5cdFx0Ly8gKHN1Y2ggYXMgTm9kZS5qcyksIGV4cG9zZSBhIGZhY3RvcnkgYXMgbW9kdWxlLmV4cG9ydHMuXG5cdFx0Ly8gVGhpcyBhY2NlbnR1YXRlcyB0aGUgbmVlZCBmb3IgdGhlIGNyZWF0aW9uIG9mIGEgcmVhbCBgd2luZG93YC5cblx0XHQvLyBlLmcuIHZhciBqUXVlcnkgPSByZXF1aXJlKFwianF1ZXJ5XCIpKHdpbmRvdyk7XG5cdFx0Ly8gU2VlIHRpY2tldCAjMTQ1NDkgZm9yIG1vcmUgaW5mby5cblx0XHRtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbC5kb2N1bWVudCA/IGZhY3RvcnkoZ2xvYmFsLCB0cnVlKSA6IGZ1bmN0aW9uICh3KSB7XG5cdFx0XHRpZiAoIXcuZG9jdW1lbnQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWN0b3J5KHcpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0ZmFjdG9yeShnbG9iYWwpO1xuXHR9XG5cblx0Ly8gUGFzcyB0aGlzIGlmIHdpbmRvdyBpcyBub3QgZGVmaW5lZCB5ZXRcbn0pKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0aGlzLCBmdW5jdGlvbiAod2luZG93LCBub0dsb2JhbCkge1xuXG5cdC8vIEVkZ2UgPD0gMTIgLSAxMyssIEZpcmVmb3ggPD0xOCAtIDQ1KywgSUUgMTAgLSAxMSwgU2FmYXJpIDUuMSAtIDkrLCBpT1MgNiAtIDkuMVxuXHQvLyB0aHJvdyBleGNlcHRpb25zIHdoZW4gbm9uLXN0cmljdCBjb2RlIChlLmcuLCBBU1AuTkVUIDQuNSkgYWNjZXNzZXMgc3RyaWN0IG1vZGVcblx0Ly8gYXJndW1lbnRzLmNhbGxlZS5jYWxsZXIgKHRyYWMtMTMzMzUpLiBCdXQgYXMgb2YgalF1ZXJ5IDMuMCAoMjAxNiksIHN0cmljdCBtb2RlIHNob3VsZCBiZSBjb21tb25cblx0Ly8gZW5vdWdoIHRoYXQgYWxsIHN1Y2ggYXR0ZW1wdHMgYXJlIGd1YXJkZWQgaW4gYSB0cnkgYmxvY2suXG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdHZhciBhcnIgPSBbXTtcblxuXHR2YXIgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG5cblx0dmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5cdHZhciBfc2xpY2UgPSBhcnIuc2xpY2U7XG5cblx0dmFyIGNvbmNhdCA9IGFyci5jb25jYXQ7XG5cblx0dmFyIHB1c2ggPSBhcnIucHVzaDtcblxuXHR2YXIgaW5kZXhPZiA9IGFyci5pbmRleE9mO1xuXG5cdHZhciBjbGFzczJ0eXBlID0ge307XG5cblx0dmFyIHRvU3RyaW5nID0gY2xhc3MydHlwZS50b1N0cmluZztcblxuXHR2YXIgaGFzT3duID0gY2xhc3MydHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuXHR2YXIgZm5Ub1N0cmluZyA9IGhhc093bi50b1N0cmluZztcblxuXHR2YXIgT2JqZWN0RnVuY3Rpb25TdHJpbmcgPSBmblRvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuXHR2YXIgc3VwcG9ydCA9IHt9O1xuXG5cdHZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcblxuXHRcdC8vIFN1cHBvcnQ6IENocm9tZSA8PTU3LCBGaXJlZm94IDw9NTJcblx0XHQvLyBJbiBzb21lIGJyb3dzZXJzLCB0eXBlb2YgcmV0dXJucyBcImZ1bmN0aW9uXCIgZm9yIEhUTUwgPG9iamVjdD4gZWxlbWVudHNcblx0XHQvLyAoaS5lLiwgYHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcIm9iamVjdFwiICkgPT09IFwiZnVuY3Rpb25cImApLlxuXHRcdC8vIFdlIGRvbid0IHdhbnQgdG8gY2xhc3NpZnkgKmFueSogRE9NIG5vZGUgYXMgYSBmdW5jdGlvbi5cblx0XHRyZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBvYmoubm9kZVR5cGUgIT09IFwibnVtYmVyXCI7XG5cdH07XG5cblx0dmFyIGlzV2luZG93ID0gZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XG5cdFx0cmV0dXJuIG9iaiAhPSBudWxsICYmIG9iaiA9PT0gb2JqLndpbmRvdztcblx0fTtcblxuXHR2YXIgcHJlc2VydmVkU2NyaXB0QXR0cmlidXRlcyA9IHtcblx0XHR0eXBlOiB0cnVlLFxuXHRcdHNyYzogdHJ1ZSxcblx0XHRub01vZHVsZTogdHJ1ZVxuXHR9O1xuXG5cdGZ1bmN0aW9uIERPTUV2YWwoY29kZSwgZG9jLCBub2RlKSB7XG5cdFx0ZG9jID0gZG9jIHx8IGRvY3VtZW50O1xuXG5cdFx0dmFyIGksXG5cdFx0ICAgIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuXG5cdFx0c2NyaXB0LnRleHQgPSBjb2RlO1xuXHRcdGlmIChub2RlKSB7XG5cdFx0XHRmb3IgKGkgaW4gcHJlc2VydmVkU2NyaXB0QXR0cmlidXRlcykge1xuXHRcdFx0XHRpZiAobm9kZVtpXSkge1xuXHRcdFx0XHRcdHNjcmlwdFtpXSA9IG5vZGVbaV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0ZG9jLmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdH1cblxuXHRmdW5jdGlvbiB0b1R5cGUob2JqKSB7XG5cdFx0aWYgKG9iaiA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gb2JqICsgXCJcIjtcblx0XHR9XG5cblx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9Mi4zIG9ubHkgKGZ1bmN0aW9uaXNoIFJlZ0V4cClcblx0XHRyZXR1cm4gKHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIgPyBjbGFzczJ0eXBlW3RvU3RyaW5nLmNhbGwob2JqKV0gfHwgXCJvYmplY3RcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xuXHR9XG5cdC8qIGdsb2JhbCBTeW1ib2wgKi9cblx0Ly8gRGVmaW5pbmcgdGhpcyBnbG9iYWwgaW4gLmVzbGludHJjLmpzb24gd291bGQgY3JlYXRlIGEgZGFuZ2VyIG9mIHVzaW5nIHRoZSBnbG9iYWxcblx0Ly8gdW5ndWFyZGVkIGluIGFub3RoZXIgcGxhY2UsIGl0IHNlZW1zIHNhZmVyIHRvIGRlZmluZSBnbG9iYWwgb25seSBmb3IgdGhpcyBtb2R1bGVcblxuXG5cdHZhciB2ZXJzaW9uID0gXCIzLjMuMVwiLFxuXG5cblx0Ly8gRGVmaW5lIGEgbG9jYWwgY29weSBvZiBqUXVlcnlcblx0alF1ZXJ5ID0gZnVuY3Rpb24galF1ZXJ5KHNlbGVjdG9yLCBjb250ZXh0KSB7XG5cblx0XHQvLyBUaGUgalF1ZXJ5IG9iamVjdCBpcyBhY3R1YWxseSBqdXN0IHRoZSBpbml0IGNvbnN0cnVjdG9yICdlbmhhbmNlZCdcblx0XHQvLyBOZWVkIGluaXQgaWYgalF1ZXJ5IGlzIGNhbGxlZCAoanVzdCBhbGxvdyBlcnJvciB0byBiZSB0aHJvd24gaWYgbm90IGluY2x1ZGVkKVxuXHRcdHJldHVybiBuZXcgalF1ZXJ5LmZuLmluaXQoc2VsZWN0b3IsIGNvbnRleHQpO1xuXHR9LFxuXG5cblx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5XG5cdC8vIE1ha2Ugc3VyZSB3ZSB0cmltIEJPTSBhbmQgTkJTUFxuXHRydHJpbSA9IC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZztcblxuXHRqUXVlcnkuZm4gPSBqUXVlcnkucHJvdG90eXBlID0ge1xuXG5cdFx0Ly8gVGhlIGN1cnJlbnQgdmVyc2lvbiBvZiBqUXVlcnkgYmVpbmcgdXNlZFxuXHRcdGpxdWVyeTogdmVyc2lvbixcblxuXHRcdGNvbnN0cnVjdG9yOiBqUXVlcnksXG5cblx0XHQvLyBUaGUgZGVmYXVsdCBsZW5ndGggb2YgYSBqUXVlcnkgb2JqZWN0IGlzIDBcblx0XHRsZW5ndGg6IDAsXG5cblx0XHR0b0FycmF5OiBmdW5jdGlvbiB0b0FycmF5KCkge1xuXHRcdFx0cmV0dXJuIF9zbGljZS5jYWxsKHRoaXMpO1xuXHRcdH0sXG5cblx0XHQvLyBHZXQgdGhlIE50aCBlbGVtZW50IGluIHRoZSBtYXRjaGVkIGVsZW1lbnQgc2V0IE9SXG5cdFx0Ly8gR2V0IHRoZSB3aG9sZSBtYXRjaGVkIGVsZW1lbnQgc2V0IGFzIGEgY2xlYW4gYXJyYXlcblx0XHRnZXQ6IGZ1bmN0aW9uIGdldChudW0pIHtcblxuXHRcdFx0Ly8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgaW4gYSBjbGVhbiBhcnJheVxuXHRcdFx0aWYgKG51bSA9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBfc2xpY2UuY2FsbCh0aGlzKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmV0dXJuIGp1c3QgdGhlIG9uZSBlbGVtZW50IGZyb20gdGhlIHNldFxuXHRcdFx0cmV0dXJuIG51bSA8IDAgPyB0aGlzW251bSArIHRoaXMubGVuZ3RoXSA6IHRoaXNbbnVtXTtcblx0XHR9LFxuXG5cdFx0Ly8gVGFrZSBhbiBhcnJheSBvZiBlbGVtZW50cyBhbmQgcHVzaCBpdCBvbnRvIHRoZSBzdGFja1xuXHRcdC8vIChyZXR1cm5pbmcgdGhlIG5ldyBtYXRjaGVkIGVsZW1lbnQgc2V0KVxuXHRcdHB1c2hTdGFjazogZnVuY3Rpb24gcHVzaFN0YWNrKGVsZW1zKSB7XG5cblx0XHRcdC8vIEJ1aWxkIGEgbmV3IGpRdWVyeSBtYXRjaGVkIGVsZW1lbnQgc2V0XG5cdFx0XHR2YXIgcmV0ID0galF1ZXJ5Lm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSwgZWxlbXMpO1xuXG5cdFx0XHQvLyBBZGQgdGhlIG9sZCBvYmplY3Qgb250byB0aGUgc3RhY2sgKGFzIGEgcmVmZXJlbmNlKVxuXHRcdFx0cmV0LnByZXZPYmplY3QgPSB0aGlzO1xuXG5cdFx0XHQvLyBSZXR1cm4gdGhlIG5ld2x5LWZvcm1lZCBlbGVtZW50IHNldFxuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9LFxuXG5cdFx0Ly8gRXhlY3V0ZSBhIGNhbGxiYWNrIGZvciBldmVyeSBlbGVtZW50IGluIHRoZSBtYXRjaGVkIHNldC5cblx0XHRlYWNoOiBmdW5jdGlvbiBlYWNoKGNhbGxiYWNrKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LmVhY2godGhpcywgY2FsbGJhY2spO1xuXHRcdH0sXG5cblx0XHRtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFjaykge1xuXHRcdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKGpRdWVyeS5tYXAodGhpcywgZnVuY3Rpb24gKGVsZW0sIGkpIHtcblx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrLmNhbGwoZWxlbSwgaSwgZWxlbSk7XG5cdFx0XHR9KSk7XG5cdFx0fSxcblxuXHRcdHNsaWNlOiBmdW5jdGlvbiBzbGljZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayhfc2xpY2UuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cdFx0fSxcblxuXHRcdGZpcnN0OiBmdW5jdGlvbiBmaXJzdCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmVxKDApO1xuXHRcdH0sXG5cblx0XHRsYXN0OiBmdW5jdGlvbiBsYXN0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZXEoLTEpO1xuXHRcdH0sXG5cblx0XHRlcTogZnVuY3Rpb24gZXEoaSkge1xuXHRcdFx0dmFyIGxlbiA9IHRoaXMubGVuZ3RoLFxuXHRcdFx0ICAgIGogPSAraSArIChpIDwgMCA/IGxlbiA6IDApO1xuXHRcdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKGogPj0gMCAmJiBqIDwgbGVuID8gW3RoaXNbal1dIDogW10pO1xuXHRcdH0sXG5cblx0XHRlbmQ6IGZ1bmN0aW9uIGVuZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnByZXZPYmplY3QgfHwgdGhpcy5jb25zdHJ1Y3RvcigpO1xuXHRcdH0sXG5cblx0XHQvLyBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuXG5cdFx0Ly8gQmVoYXZlcyBsaWtlIGFuIEFycmF5J3MgbWV0aG9kLCBub3QgbGlrZSBhIGpRdWVyeSBtZXRob2QuXG5cdFx0cHVzaDogcHVzaCxcblx0XHRzb3J0OiBhcnIuc29ydCxcblx0XHRzcGxpY2U6IGFyci5zcGxpY2Vcblx0fTtcblxuXHRqUXVlcnkuZXh0ZW5kID0galF1ZXJ5LmZuLmV4dGVuZCA9IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgb3B0aW9ucyxcblx0XHQgICAgbmFtZSxcblx0XHQgICAgc3JjLFxuXHRcdCAgICBjb3B5LFxuXHRcdCAgICBjb3B5SXNBcnJheSxcblx0XHQgICAgY2xvbmUsXG5cdFx0ICAgIHRhcmdldCA9IGFyZ3VtZW50c1swXSB8fCB7fSxcblx0XHQgICAgaSA9IDEsXG5cdFx0ICAgIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG5cdFx0ICAgIGRlZXAgPSBmYWxzZTtcblxuXHRcdC8vIEhhbmRsZSBhIGRlZXAgY29weSBzaXR1YXRpb25cblx0XHRpZiAodHlwZW9mIHRhcmdldCA9PT0gXCJib29sZWFuXCIpIHtcblx0XHRcdGRlZXAgPSB0YXJnZXQ7XG5cblx0XHRcdC8vIFNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblx0XHRcdHRhcmdldCA9IGFyZ3VtZW50c1tpXSB8fCB7fTtcblx0XHRcdGkrKztcblx0XHR9XG5cblx0XHQvLyBIYW5kbGUgY2FzZSB3aGVuIHRhcmdldCBpcyBhIHN0cmluZyBvciBzb21ldGhpbmcgKHBvc3NpYmxlIGluIGRlZXAgY29weSlcblx0XHRpZiAoKHR5cGVvZiB0YXJnZXQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih0YXJnZXQpKSAhPT0gXCJvYmplY3RcIiAmJiAhaXNGdW5jdGlvbih0YXJnZXQpKSB7XG5cdFx0XHR0YXJnZXQgPSB7fTtcblx0XHR9XG5cblx0XHQvLyBFeHRlbmQgalF1ZXJ5IGl0c2VsZiBpZiBvbmx5IG9uZSBhcmd1bWVudCBpcyBwYXNzZWRcblx0XHRpZiAoaSA9PT0gbGVuZ3RoKSB7XG5cdFx0XHR0YXJnZXQgPSB0aGlzO1xuXHRcdFx0aS0tO1xuXHRcdH1cblxuXHRcdGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcblxuXHRcdFx0Ly8gT25seSBkZWFsIHdpdGggbm9uLW51bGwvdW5kZWZpbmVkIHZhbHVlc1xuXHRcdFx0aWYgKChvcHRpb25zID0gYXJndW1lbnRzW2ldKSAhPSBudWxsKSB7XG5cblx0XHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuXHRcdFx0XHRmb3IgKG5hbWUgaW4gb3B0aW9ucykge1xuXHRcdFx0XHRcdHNyYyA9IHRhcmdldFtuYW1lXTtcblx0XHRcdFx0XHRjb3B5ID0gb3B0aW9uc1tuYW1lXTtcblxuXHRcdFx0XHRcdC8vIFByZXZlbnQgbmV2ZXItZW5kaW5nIGxvb3Bcblx0XHRcdFx0XHRpZiAodGFyZ2V0ID09PSBjb3B5KSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcblx0XHRcdFx0XHRpZiAoZGVlcCAmJiBjb3B5ICYmIChqUXVlcnkuaXNQbGFpbk9iamVjdChjb3B5KSB8fCAoY29weUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGNvcHkpKSkpIHtcblxuXHRcdFx0XHRcdFx0aWYgKGNvcHlJc0FycmF5KSB7XG5cdFx0XHRcdFx0XHRcdGNvcHlJc0FycmF5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIEFycmF5LmlzQXJyYXkoc3JjKSA/IHNyYyA6IFtdO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgalF1ZXJ5LmlzUGxhaW5PYmplY3Qoc3JjKSA/IHNyYyA6IHt9O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBOZXZlciBtb3ZlIG9yaWdpbmFsIG9iamVjdHMsIGNsb25lIHRoZW1cblx0XHRcdFx0XHRcdHRhcmdldFtuYW1lXSA9IGpRdWVyeS5leHRlbmQoZGVlcCwgY2xvbmUsIGNvcHkpO1xuXG5cdFx0XHRcdFx0XHQvLyBEb24ndCBicmluZyBpbiB1bmRlZmluZWQgdmFsdWVzXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjb3B5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdHRhcmdldFtuYW1lXSA9IGNvcHk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHRoZSBtb2RpZmllZCBvYmplY3Rcblx0XHRyZXR1cm4gdGFyZ2V0O1xuXHR9O1xuXG5cdGpRdWVyeS5leHRlbmQoe1xuXG5cdFx0Ly8gVW5pcXVlIGZvciBlYWNoIGNvcHkgb2YgalF1ZXJ5IG9uIHRoZSBwYWdlXG5cdFx0ZXhwYW5kbzogXCJqUXVlcnlcIiArICh2ZXJzaW9uICsgTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csIFwiXCIpLFxuXG5cdFx0Ly8gQXNzdW1lIGpRdWVyeSBpcyByZWFkeSB3aXRob3V0IHRoZSByZWFkeSBtb2R1bGVcblx0XHRpc1JlYWR5OiB0cnVlLFxuXG5cdFx0ZXJyb3I6IGZ1bmN0aW9uIGVycm9yKG1zZykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKG1zZyk7XG5cdFx0fSxcblxuXHRcdG5vb3A6IGZ1bmN0aW9uIG5vb3AoKSB7fSxcblxuXHRcdGlzUGxhaW5PYmplY3Q6IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG5cdFx0XHR2YXIgcHJvdG8sIEN0b3I7XG5cblx0XHRcdC8vIERldGVjdCBvYnZpb3VzIG5lZ2F0aXZlc1xuXHRcdFx0Ly8gVXNlIHRvU3RyaW5nIGluc3RlYWQgb2YgalF1ZXJ5LnR5cGUgdG8gY2F0Y2ggaG9zdCBvYmplY3RzXG5cdFx0XHRpZiAoIW9iaiB8fCB0b1N0cmluZy5jYWxsKG9iaikgIT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRwcm90byA9IGdldFByb3RvKG9iaik7XG5cblx0XHRcdC8vIE9iamVjdHMgd2l0aCBubyBwcm90b3R5cGUgKGUuZy4sIGBPYmplY3QuY3JlYXRlKCBudWxsIClgKSBhcmUgcGxhaW5cblx0XHRcdGlmICghcHJvdG8pIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE9iamVjdHMgd2l0aCBwcm90b3R5cGUgYXJlIHBsYWluIGlmZiB0aGV5IHdlcmUgY29uc3RydWN0ZWQgYnkgYSBnbG9iYWwgT2JqZWN0IGZ1bmN0aW9uXG5cdFx0XHRDdG9yID0gaGFzT3duLmNhbGwocHJvdG8sIFwiY29uc3RydWN0b3JcIikgJiYgcHJvdG8uY29uc3RydWN0b3I7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIEN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBmblRvU3RyaW5nLmNhbGwoQ3RvcikgPT09IE9iamVjdEZ1bmN0aW9uU3RyaW5nO1xuXHRcdH0sXG5cblx0XHRpc0VtcHR5T2JqZWN0OiBmdW5jdGlvbiBpc0VtcHR5T2JqZWN0KG9iaikge1xuXG5cdFx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXHRcdFx0Ly8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lc2xpbnQvZXNsaW50L2lzc3Vlcy82MTI1XG5cdFx0XHR2YXIgbmFtZTtcblxuXHRcdFx0Zm9yIChuYW1lIGluIG9iaikge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXG5cdFx0Ly8gRXZhbHVhdGVzIGEgc2NyaXB0IGluIGEgZ2xvYmFsIGNvbnRleHRcblx0XHRnbG9iYWxFdmFsOiBmdW5jdGlvbiBnbG9iYWxFdmFsKGNvZGUpIHtcblx0XHRcdERPTUV2YWwoY29kZSk7XG5cdFx0fSxcblxuXHRcdGVhY2g6IGZ1bmN0aW9uIGVhY2gob2JqLCBjYWxsYmFjaykge1xuXHRcdFx0dmFyIGxlbmd0aCxcblx0XHRcdCAgICBpID0gMDtcblxuXHRcdFx0aWYgKGlzQXJyYXlMaWtlKG9iaikpIHtcblx0XHRcdFx0bGVuZ3RoID0gb2JqLmxlbmd0aDtcblx0XHRcdFx0Zm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjay5jYWxsKG9ialtpXSwgaSwgb2JqW2ldKSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yIChpIGluIG9iaikge1xuXHRcdFx0XHRcdGlmIChjYWxsYmFjay5jYWxsKG9ialtpXSwgaSwgb2JqW2ldKSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH0sXG5cblx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHlcblx0XHR0cmltOiBmdW5jdGlvbiB0cmltKHRleHQpIHtcblx0XHRcdHJldHVybiB0ZXh0ID09IG51bGwgPyBcIlwiIDogKHRleHQgKyBcIlwiKS5yZXBsYWNlKHJ0cmltLCBcIlwiKTtcblx0XHR9LFxuXG5cdFx0Ly8gcmVzdWx0cyBpcyBmb3IgaW50ZXJuYWwgdXNhZ2Ugb25seVxuXHRcdG1ha2VBcnJheTogZnVuY3Rpb24gbWFrZUFycmF5KGFyciwgcmVzdWx0cykge1xuXHRcdFx0dmFyIHJldCA9IHJlc3VsdHMgfHwgW107XG5cblx0XHRcdGlmIChhcnIgIT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoaXNBcnJheUxpa2UoT2JqZWN0KGFycikpKSB7XG5cdFx0XHRcdFx0alF1ZXJ5Lm1lcmdlKHJldCwgdHlwZW9mIGFyciA9PT0gXCJzdHJpbmdcIiA/IFthcnJdIDogYXJyKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwdXNoLmNhbGwocmV0LCBhcnIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSxcblxuXHRcdGluQXJyYXk6IGZ1bmN0aW9uIGluQXJyYXkoZWxlbSwgYXJyLCBpKSB7XG5cdFx0XHRyZXR1cm4gYXJyID09IG51bGwgPyAtMSA6IGluZGV4T2YuY2FsbChhcnIsIGVsZW0sIGkpO1xuXHRcdH0sXG5cblx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcblx0XHQvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cdFx0bWVyZ2U6IGZ1bmN0aW9uIG1lcmdlKGZpcnN0LCBzZWNvbmQpIHtcblx0XHRcdHZhciBsZW4gPSArc2Vjb25kLmxlbmd0aCxcblx0XHRcdCAgICBqID0gMCxcblx0XHRcdCAgICBpID0gZmlyc3QubGVuZ3RoO1xuXG5cdFx0XHRmb3IgKDsgaiA8IGxlbjsgaisrKSB7XG5cdFx0XHRcdGZpcnN0W2krK10gPSBzZWNvbmRbal07XG5cdFx0XHR9XG5cblx0XHRcdGZpcnN0Lmxlbmd0aCA9IGk7XG5cblx0XHRcdHJldHVybiBmaXJzdDtcblx0XHR9LFxuXG5cdFx0Z3JlcDogZnVuY3Rpb24gZ3JlcChlbGVtcywgY2FsbGJhY2ssIGludmVydCkge1xuXHRcdFx0dmFyIGNhbGxiYWNrSW52ZXJzZSxcblx0XHRcdCAgICBtYXRjaGVzID0gW10sXG5cdFx0XHQgICAgaSA9IDAsXG5cdFx0XHQgICAgbGVuZ3RoID0gZWxlbXMubGVuZ3RoLFxuXHRcdFx0ICAgIGNhbGxiYWNrRXhwZWN0ID0gIWludmVydDtcblxuXHRcdFx0Ly8gR28gdGhyb3VnaCB0aGUgYXJyYXksIG9ubHkgc2F2aW5nIHRoZSBpdGVtc1xuXHRcdFx0Ly8gdGhhdCBwYXNzIHRoZSB2YWxpZGF0b3IgZnVuY3Rpb25cblx0XHRcdGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y2FsbGJhY2tJbnZlcnNlID0gIWNhbGxiYWNrKGVsZW1zW2ldLCBpKTtcblx0XHRcdFx0aWYgKGNhbGxiYWNrSW52ZXJzZSAhPT0gY2FsbGJhY2tFeHBlY3QpIHtcblx0XHRcdFx0XHRtYXRjaGVzLnB1c2goZWxlbXNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBtYXRjaGVzO1xuXHRcdH0sXG5cblx0XHQvLyBhcmcgaXMgZm9yIGludGVybmFsIHVzYWdlIG9ubHlcblx0XHRtYXA6IGZ1bmN0aW9uIG1hcChlbGVtcywgY2FsbGJhY2ssIGFyZykge1xuXHRcdFx0dmFyIGxlbmd0aCxcblx0XHRcdCAgICB2YWx1ZSxcblx0XHRcdCAgICBpID0gMCxcblx0XHRcdCAgICByZXQgPSBbXTtcblxuXHRcdFx0Ly8gR28gdGhyb3VnaCB0aGUgYXJyYXksIHRyYW5zbGF0aW5nIGVhY2ggb2YgdGhlIGl0ZW1zIHRvIHRoZWlyIG5ldyB2YWx1ZXNcblx0XHRcdGlmIChpc0FycmF5TGlrZShlbGVtcykpIHtcblx0XHRcdFx0bGVuZ3RoID0gZWxlbXMubGVuZ3RoO1xuXHRcdFx0XHRmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBjYWxsYmFjayhlbGVtc1tpXSwgaSwgYXJnKTtcblxuXHRcdFx0XHRcdGlmICh2YWx1ZSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRyZXQucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gR28gdGhyb3VnaCBldmVyeSBrZXkgb24gdGhlIG9iamVjdCxcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAoaSBpbiBlbGVtcykge1xuXHRcdFx0XHRcdHZhbHVlID0gY2FsbGJhY2soZWxlbXNbaV0sIGksIGFyZyk7XG5cblx0XHRcdFx0XHRpZiAodmFsdWUgIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0cmV0LnB1c2godmFsdWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBGbGF0dGVuIGFueSBuZXN0ZWQgYXJyYXlzXG5cdFx0XHRyZXR1cm4gY29uY2F0LmFwcGx5KFtdLCByZXQpO1xuXHRcdH0sXG5cblx0XHQvLyBBIGdsb2JhbCBHVUlEIGNvdW50ZXIgZm9yIG9iamVjdHNcblx0XHRndWlkOiAxLFxuXG5cdFx0Ly8galF1ZXJ5LnN1cHBvcnQgaXMgbm90IHVzZWQgaW4gQ29yZSBidXQgb3RoZXIgcHJvamVjdHMgYXR0YWNoIHRoZWlyXG5cdFx0Ly8gcHJvcGVydGllcyB0byBpdCBzbyBpdCBuZWVkcyB0byBleGlzdC5cblx0XHRzdXBwb3J0OiBzdXBwb3J0XG5cdH0pO1xuXG5cdGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRqUXVlcnkuZm5bU3ltYm9sLml0ZXJhdG9yXSA9IGFycltTeW1ib2wuaXRlcmF0b3JdO1xuXHR9XG5cblx0Ly8gUG9wdWxhdGUgdGhlIGNsYXNzMnR5cGUgbWFwXG5cdGpRdWVyeS5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdChcIiBcIiksIGZ1bmN0aW9uIChpLCBuYW1lKSB7XG5cdFx0Y2xhc3MydHlwZVtcIltvYmplY3QgXCIgKyBuYW1lICsgXCJdXCJdID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXHR9KTtcblxuXHRmdW5jdGlvbiBpc0FycmF5TGlrZShvYmopIHtcblxuXHRcdC8vIFN1cHBvcnQ6IHJlYWwgaU9TIDguMiBvbmx5IChub3QgcmVwcm9kdWNpYmxlIGluIHNpbXVsYXRvcilcblx0XHQvLyBgaW5gIGNoZWNrIHVzZWQgdG8gcHJldmVudCBKSVQgZXJyb3IgKGdoLTIxNDUpXG5cdFx0Ly8gaGFzT3duIGlzbid0IHVzZWQgaGVyZSBkdWUgdG8gZmFsc2UgbmVnYXRpdmVzXG5cdFx0Ly8gcmVnYXJkaW5nIE5vZGVsaXN0IGxlbmd0aCBpbiBJRVxuXHRcdHZhciBsZW5ndGggPSAhIW9iaiAmJiBcImxlbmd0aFwiIGluIG9iaiAmJiBvYmoubGVuZ3RoLFxuXHRcdCAgICB0eXBlID0gdG9UeXBlKG9iaik7XG5cblx0XHRpZiAoaXNGdW5jdGlvbihvYmopIHx8IGlzV2luZG93KG9iaikpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHlwZSA9PT0gXCJhcnJheVwiIHx8IGxlbmd0aCA9PT0gMCB8fCB0eXBlb2YgbGVuZ3RoID09PSBcIm51bWJlclwiICYmIGxlbmd0aCA+IDAgJiYgbGVuZ3RoIC0gMSBpbiBvYmo7XG5cdH1cblx0dmFyIFNpenpsZSA9XG5cdC8qIVxuICAqIFNpenpsZSBDU1MgU2VsZWN0b3IgRW5naW5lIHYyLjMuM1xuICAqIGh0dHBzOi8vc2l6emxlanMuY29tL1xuICAqXG4gICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAgKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAgKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gICpcbiAgKiBEYXRlOiAyMDE2LTA4LTA4XG4gICovXG5cdGZ1bmN0aW9uICh3aW5kb3cpIHtcblxuXHRcdHZhciBpLFxuXHRcdCAgICBzdXBwb3J0LFxuXHRcdCAgICBFeHByLFxuXHRcdCAgICBnZXRUZXh0LFxuXHRcdCAgICBpc1hNTCxcblx0XHQgICAgdG9rZW5pemUsXG5cdFx0ICAgIGNvbXBpbGUsXG5cdFx0ICAgIHNlbGVjdCxcblx0XHQgICAgb3V0ZXJtb3N0Q29udGV4dCxcblx0XHQgICAgc29ydElucHV0LFxuXHRcdCAgICBoYXNEdXBsaWNhdGUsXG5cblxuXHRcdC8vIExvY2FsIGRvY3VtZW50IHZhcnNcblx0XHRzZXREb2N1bWVudCxcblx0XHQgICAgZG9jdW1lbnQsXG5cdFx0ICAgIGRvY0VsZW0sXG5cdFx0ICAgIGRvY3VtZW50SXNIVE1MLFxuXHRcdCAgICByYnVnZ3lRU0EsXG5cdFx0ICAgIHJidWdneU1hdGNoZXMsXG5cdFx0ICAgIG1hdGNoZXMsXG5cdFx0ICAgIGNvbnRhaW5zLFxuXG5cblx0XHQvLyBJbnN0YW5jZS1zcGVjaWZpYyBkYXRhXG5cdFx0ZXhwYW5kbyA9IFwic2l6emxlXCIgKyAxICogbmV3IERhdGUoKSxcblx0XHQgICAgcHJlZmVycmVkRG9jID0gd2luZG93LmRvY3VtZW50LFxuXHRcdCAgICBkaXJydW5zID0gMCxcblx0XHQgICAgZG9uZSA9IDAsXG5cdFx0ICAgIGNsYXNzQ2FjaGUgPSBjcmVhdGVDYWNoZSgpLFxuXHRcdCAgICB0b2tlbkNhY2hlID0gY3JlYXRlQ2FjaGUoKSxcblx0XHQgICAgY29tcGlsZXJDYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG5cdFx0ICAgIHNvcnRPcmRlciA9IGZ1bmN0aW9uIHNvcnRPcmRlcihhLCBiKSB7XG5cdFx0XHRpZiAoYSA9PT0gYikge1xuXHRcdFx0XHRoYXNEdXBsaWNhdGUgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fSxcblxuXG5cdFx0Ly8gSW5zdGFuY2UgbWV0aG9kc1xuXHRcdGhhc093biA9IHt9Lmhhc093blByb3BlcnR5LFxuXHRcdCAgICBhcnIgPSBbXSxcblx0XHQgICAgcG9wID0gYXJyLnBvcCxcblx0XHQgICAgcHVzaF9uYXRpdmUgPSBhcnIucHVzaCxcblx0XHQgICAgcHVzaCA9IGFyci5wdXNoLFxuXHRcdCAgICBzbGljZSA9IGFyci5zbGljZSxcblxuXHRcdC8vIFVzZSBhIHN0cmlwcGVkLWRvd24gaW5kZXhPZiBhcyBpdCdzIGZhc3RlciB0aGFuIG5hdGl2ZVxuXHRcdC8vIGh0dHBzOi8vanNwZXJmLmNvbS90aG9yLWluZGV4b2YtdnMtZm9yLzVcblx0XHRpbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZihsaXN0LCBlbGVtKSB7XG5cdFx0XHR2YXIgaSA9IDAsXG5cdFx0XHQgICAgbGVuID0gbGlzdC5sZW5ndGg7XG5cdFx0XHRmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdGlmIChsaXN0W2ldID09PSBlbGVtKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiAtMTtcblx0XHR9LFxuXHRcdCAgICBib29sZWFucyA9IFwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixcblxuXG5cdFx0Ly8gUmVndWxhciBleHByZXNzaW9uc1xuXG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1zZWxlY3RvcnMvI3doaXRlc3BhY2Vcblx0XHR3aGl0ZXNwYWNlID0gXCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLFxuXG5cblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyMS9zeW5kYXRhLmh0bWwjdmFsdWUtZGVmLWlkZW50aWZpZXJcblx0XHRpZGVudGlmaWVyID0gXCIoPzpcXFxcXFxcXC58W1xcXFx3LV18W15cXDAtXFxcXHhhMF0pK1wiLFxuXG5cblx0XHQvLyBBdHRyaWJ1dGUgc2VsZWN0b3JzOiBodHRwOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI2F0dHJpYnV0ZS1zZWxlY3RvcnNcblx0XHRhdHRyaWJ1dGVzID0gXCJcXFxcW1wiICsgd2hpdGVzcGFjZSArIFwiKihcIiArIGlkZW50aWZpZXIgKyBcIikoPzpcIiArIHdoaXRlc3BhY2UgK1xuXHRcdC8vIE9wZXJhdG9yIChjYXB0dXJlIDIpXG5cdFx0XCIqKFsqXiR8IX5dPz0pXCIgKyB3aGl0ZXNwYWNlICtcblx0XHQvLyBcIkF0dHJpYnV0ZSB2YWx1ZXMgbXVzdCBiZSBDU1MgaWRlbnRpZmllcnMgW2NhcHR1cmUgNV0gb3Igc3RyaW5ncyBbY2FwdHVyZSAzIG9yIGNhcHR1cmUgNF1cIlxuXHRcdFwiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIgKyBpZGVudGlmaWVyICsgXCIpKXwpXCIgKyB3aGl0ZXNwYWNlICsgXCIqXFxcXF1cIixcblx0XHQgICAgcHNldWRvcyA9IFwiOihcIiArIGlkZW50aWZpZXIgKyBcIikoPzpcXFxcKChcIiArXG5cdFx0Ly8gVG8gcmVkdWNlIHRoZSBudW1iZXIgb2Ygc2VsZWN0b3JzIG5lZWRpbmcgdG9rZW5pemUgaW4gdGhlIHByZUZpbHRlciwgcHJlZmVyIGFyZ3VtZW50czpcblx0XHQvLyAxLiBxdW90ZWQgKGNhcHR1cmUgMzsgY2FwdHVyZSA0IG9yIGNhcHR1cmUgNSlcblx0XHRcIignKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfFwiICtcblx0XHQvLyAyLiBzaW1wbGUgKGNhcHR1cmUgNilcblx0XHRcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIiArIGF0dHJpYnV0ZXMgKyBcIikqKXxcIiArXG5cdFx0Ly8gMy4gYW55dGhpbmcgZWxzZSAoY2FwdHVyZSAyKVxuXHRcdFwiLipcIiArIFwiKVxcXFwpfClcIixcblxuXG5cdFx0Ly8gTGVhZGluZyBhbmQgbm9uLWVzY2FwZWQgdHJhaWxpbmcgd2hpdGVzcGFjZSwgY2FwdHVyaW5nIHNvbWUgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVycyBwcmVjZWRpbmcgdGhlIGxhdHRlclxuXHRcdHJ3aGl0ZXNwYWNlID0gbmV3IFJlZ0V4cCh3aGl0ZXNwYWNlICsgXCIrXCIsIFwiZ1wiKSxcblx0XHQgICAgcnRyaW0gPSBuZXcgUmVnRXhwKFwiXlwiICsgd2hpdGVzcGFjZSArIFwiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIiArIHdoaXRlc3BhY2UgKyBcIiskXCIsIFwiZ1wiKSxcblx0XHQgICAgcmNvbW1hID0gbmV3IFJlZ0V4cChcIl5cIiArIHdoaXRlc3BhY2UgKyBcIiosXCIgKyB3aGl0ZXNwYWNlICsgXCIqXCIpLFxuXHRcdCAgICByY29tYmluYXRvcnMgPSBuZXcgUmVnRXhwKFwiXlwiICsgd2hpdGVzcGFjZSArIFwiKihbPit+XXxcIiArIHdoaXRlc3BhY2UgKyBcIilcIiArIHdoaXRlc3BhY2UgKyBcIipcIiksXG5cdFx0ICAgIHJhdHRyaWJ1dGVRdW90ZXMgPSBuZXcgUmVnRXhwKFwiPVwiICsgd2hpdGVzcGFjZSArIFwiKihbXlxcXFxdJ1xcXCJdKj8pXCIgKyB3aGl0ZXNwYWNlICsgXCIqXFxcXF1cIiwgXCJnXCIpLFxuXHRcdCAgICBycHNldWRvID0gbmV3IFJlZ0V4cChwc2V1ZG9zKSxcblx0XHQgICAgcmlkZW50aWZpZXIgPSBuZXcgUmVnRXhwKFwiXlwiICsgaWRlbnRpZmllciArIFwiJFwiKSxcblx0XHQgICAgbWF0Y2hFeHByID0ge1xuXHRcdFx0XCJJRFwiOiBuZXcgUmVnRXhwKFwiXiMoXCIgKyBpZGVudGlmaWVyICsgXCIpXCIpLFxuXHRcdFx0XCJDTEFTU1wiOiBuZXcgUmVnRXhwKFwiXlxcXFwuKFwiICsgaWRlbnRpZmllciArIFwiKVwiKSxcblx0XHRcdFwiVEFHXCI6IG5ldyBSZWdFeHAoXCJeKFwiICsgaWRlbnRpZmllciArIFwifFsqXSlcIiksXG5cdFx0XHRcIkFUVFJcIjogbmV3IFJlZ0V4cChcIl5cIiArIGF0dHJpYnV0ZXMpLFxuXHRcdFx0XCJQU0VVRE9cIjogbmV3IFJlZ0V4cChcIl5cIiArIHBzZXVkb3MpLFxuXHRcdFx0XCJDSElMRFwiOiBuZXcgUmVnRXhwKFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIiArIHdoaXRlc3BhY2UgKyBcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiICsgd2hpdGVzcGFjZSArIFwiKig/OihbKy1dfClcIiArIHdoaXRlc3BhY2UgKyBcIiooXFxcXGQrKXwpKVwiICsgd2hpdGVzcGFjZSArIFwiKlxcXFwpfClcIiwgXCJpXCIpLFxuXHRcdFx0XCJib29sXCI6IG5ldyBSZWdFeHAoXCJeKD86XCIgKyBib29sZWFucyArIFwiKSRcIiwgXCJpXCIpLFxuXHRcdFx0Ly8gRm9yIHVzZSBpbiBsaWJyYXJpZXMgaW1wbGVtZW50aW5nIC5pcygpXG5cdFx0XHQvLyBXZSB1c2UgdGhpcyBmb3IgUE9TIG1hdGNoaW5nIGluIGBzZWxlY3RgXG5cdFx0XHRcIm5lZWRzQ29udGV4dFwiOiBuZXcgUmVnRXhwKFwiXlwiICsgd2hpdGVzcGFjZSArIFwiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIiArIHdoaXRlc3BhY2UgKyBcIiooKD86LVxcXFxkKT9cXFxcZCopXCIgKyB3aGl0ZXNwYWNlICsgXCIqXFxcXCl8KSg/PVteLV18JClcIiwgXCJpXCIpXG5cdFx0fSxcblx0XHQgICAgcmlucHV0cyA9IC9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksXG5cdFx0ICAgIHJoZWFkZXIgPSAvXmhcXGQkL2ksXG5cdFx0ICAgIHJuYXRpdmUgPSAvXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLFxuXG5cblx0XHQvLyBFYXNpbHktcGFyc2VhYmxlL3JldHJpZXZhYmxlIElEIG9yIFRBRyBvciBDTEFTUyBzZWxlY3RvcnNcblx0XHRycXVpY2tFeHByID0gL14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sXG5cdFx0ICAgIHJzaWJsaW5nID0gL1srfl0vLFxuXG5cblx0XHQvLyBDU1MgZXNjYXBlc1xuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL0NTUzIxL3N5bmRhdGEuaHRtbCNlc2NhcGVkLWNoYXJhY3RlcnNcblx0XHRydW5lc2NhcGUgPSBuZXcgUmVnRXhwKFwiXFxcXFxcXFwoW1xcXFxkYS1mXXsxLDZ9XCIgKyB3aGl0ZXNwYWNlICsgXCI/fChcIiArIHdoaXRlc3BhY2UgKyBcIil8LilcIiwgXCJpZ1wiKSxcblx0XHQgICAgZnVuZXNjYXBlID0gZnVuY3Rpb24gZnVuZXNjYXBlKF8sIGVzY2FwZWQsIGVzY2FwZWRXaGl0ZXNwYWNlKSB7XG5cdFx0XHR2YXIgaGlnaCA9IFwiMHhcIiArIGVzY2FwZWQgLSAweDEwMDAwO1xuXHRcdFx0Ly8gTmFOIG1lYW5zIG5vbi1jb2RlcG9pbnRcblx0XHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3g8MjRcblx0XHRcdC8vIFdvcmthcm91bmQgZXJyb25lb3VzIG51bWVyaWMgaW50ZXJwcmV0YXRpb24gb2YgK1wiMHhcIlxuXHRcdFx0cmV0dXJuIGhpZ2ggIT09IGhpZ2ggfHwgZXNjYXBlZFdoaXRlc3BhY2UgPyBlc2NhcGVkIDogaGlnaCA8IDAgP1xuXHRcdFx0Ly8gQk1QIGNvZGVwb2ludFxuXHRcdFx0U3RyaW5nLmZyb21DaGFyQ29kZShoaWdoICsgMHgxMDAwMCkgOlxuXHRcdFx0Ly8gU3VwcGxlbWVudGFsIFBsYW5lIGNvZGVwb2ludCAoc3Vycm9nYXRlIHBhaXIpXG5cdFx0XHRTdHJpbmcuZnJvbUNoYXJDb2RlKGhpZ2ggPj4gMTAgfCAweEQ4MDAsIGhpZ2ggJiAweDNGRiB8IDB4REMwMCk7XG5cdFx0fSxcblxuXG5cdFx0Ly8gQ1NTIHN0cmluZy9pZGVudGlmaWVyIHNlcmlhbGl6YXRpb25cblx0XHQvLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3Nzb20vI2NvbW1vbi1zZXJpYWxpemluZy1pZGlvbXNcblx0XHRyY3NzZXNjYXBlID0gLyhbXFwwLVxceDFmXFx4N2ZdfF4tP1xcZCl8Xi0kfFteXFwwLVxceDFmXFx4N2YtXFx1RkZGRlxcdy1dL2csXG5cdFx0ICAgIGZjc3Nlc2NhcGUgPSBmdW5jdGlvbiBmY3NzZXNjYXBlKGNoLCBhc0NvZGVQb2ludCkge1xuXHRcdFx0aWYgKGFzQ29kZVBvaW50KSB7XG5cblx0XHRcdFx0Ly8gVSswMDAwIE5VTEwgYmVjb21lcyBVK0ZGRkQgUkVQTEFDRU1FTlQgQ0hBUkFDVEVSXG5cdFx0XHRcdGlmIChjaCA9PT0gXCJcXDBcIikge1xuXHRcdFx0XHRcdHJldHVybiBcIlxcdUZGRkRcIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENvbnRyb2wgY2hhcmFjdGVycyBhbmQgKGRlcGVuZGVudCB1cG9uIHBvc2l0aW9uKSBudW1iZXJzIGdldCBlc2NhcGVkIGFzIGNvZGUgcG9pbnRzXG5cdFx0XHRcdHJldHVybiBjaC5zbGljZSgwLCAtMSkgKyBcIlxcXFxcIiArIGNoLmNoYXJDb2RlQXQoY2gubGVuZ3RoIC0gMSkudG9TdHJpbmcoMTYpICsgXCIgXCI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE90aGVyIHBvdGVudGlhbGx5LXNwZWNpYWwgQVNDSUkgY2hhcmFjdGVycyBnZXQgYmFja3NsYXNoLWVzY2FwZWRcblx0XHRcdHJldHVybiBcIlxcXFxcIiArIGNoO1xuXHRcdH0sXG5cblxuXHRcdC8vIFVzZWQgZm9yIGlmcmFtZXNcblx0XHQvLyBTZWUgc2V0RG9jdW1lbnQoKVxuXHRcdC8vIFJlbW92aW5nIHRoZSBmdW5jdGlvbiB3cmFwcGVyIGNhdXNlcyBhIFwiUGVybWlzc2lvbiBEZW5pZWRcIlxuXHRcdC8vIGVycm9yIGluIElFXG5cdFx0dW5sb2FkSGFuZGxlciA9IGZ1bmN0aW9uIHVubG9hZEhhbmRsZXIoKSB7XG5cdFx0XHRzZXREb2N1bWVudCgpO1xuXHRcdH0sXG5cdFx0ICAgIGRpc2FibGVkQW5jZXN0b3IgPSBhZGRDb21iaW5hdG9yKGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5kaXNhYmxlZCA9PT0gdHJ1ZSAmJiAoXCJmb3JtXCIgaW4gZWxlbSB8fCBcImxhYmVsXCIgaW4gZWxlbSk7XG5cdFx0fSwgeyBkaXI6IFwicGFyZW50Tm9kZVwiLCBuZXh0OiBcImxlZ2VuZFwiIH0pO1xuXG5cdFx0Ly8gT3B0aW1pemUgZm9yIHB1c2guYXBwbHkoIF8sIE5vZGVMaXN0IClcblx0XHR0cnkge1xuXHRcdFx0cHVzaC5hcHBseShhcnIgPSBzbGljZS5jYWxsKHByZWZlcnJlZERvYy5jaGlsZE5vZGVzKSwgcHJlZmVycmVkRG9jLmNoaWxkTm9kZXMpO1xuXHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZDw0LjBcblx0XHRcdC8vIERldGVjdCBzaWxlbnRseSBmYWlsaW5nIHB1c2guYXBwbHlcblx0XHRcdGFycltwcmVmZXJyZWREb2MuY2hpbGROb2Rlcy5sZW5ndGhdLm5vZGVUeXBlO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHB1c2ggPSB7IGFwcGx5OiBhcnIubGVuZ3RoID9cblxuXHRcdFx0XHQvLyBMZXZlcmFnZSBzbGljZSBpZiBwb3NzaWJsZVxuXHRcdFx0XHRmdW5jdGlvbiAodGFyZ2V0LCBlbHMpIHtcblx0XHRcdFx0XHRwdXNoX25hdGl2ZS5hcHBseSh0YXJnZXQsIHNsaWNlLmNhbGwoZWxzKSk7XG5cdFx0XHRcdH0gOlxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IElFPDlcblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIGFwcGVuZCBkaXJlY3RseVxuXHRcdFx0XHRmdW5jdGlvbiAodGFyZ2V0LCBlbHMpIHtcblx0XHRcdFx0XHR2YXIgaiA9IHRhcmdldC5sZW5ndGgsXG5cdFx0XHRcdFx0ICAgIGkgPSAwO1xuXHRcdFx0XHRcdC8vIENhbid0IHRydXN0IE5vZGVMaXN0Lmxlbmd0aFxuXHRcdFx0XHRcdHdoaWxlICh0YXJnZXRbaisrXSA9IGVsc1tpKytdKSB7fVxuXHRcdFx0XHRcdHRhcmdldC5sZW5ndGggPSBqIC0gMTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBTaXp6bGUoc2VsZWN0b3IsIGNvbnRleHQsIHJlc3VsdHMsIHNlZWQpIHtcblx0XHRcdHZhciBtLFxuXHRcdFx0ICAgIGksXG5cdFx0XHQgICAgZWxlbSxcblx0XHRcdCAgICBuaWQsXG5cdFx0XHQgICAgbWF0Y2gsXG5cdFx0XHQgICAgZ3JvdXBzLFxuXHRcdFx0ICAgIG5ld1NlbGVjdG9yLFxuXHRcdFx0ICAgIG5ld0NvbnRleHQgPSBjb250ZXh0ICYmIGNvbnRleHQub3duZXJEb2N1bWVudCxcblxuXG5cdFx0XHQvLyBub2RlVHlwZSBkZWZhdWx0cyB0byA5LCBzaW5jZSBjb250ZXh0IGRlZmF1bHRzIHRvIGRvY3VtZW50XG5cdFx0XHRub2RlVHlwZSA9IGNvbnRleHQgPyBjb250ZXh0Lm5vZGVUeXBlIDogOTtcblxuXHRcdFx0cmVzdWx0cyA9IHJlc3VsdHMgfHwgW107XG5cblx0XHRcdC8vIFJldHVybiBlYXJseSBmcm9tIGNhbGxzIHdpdGggaW52YWxpZCBzZWxlY3RvciBvciBjb250ZXh0XG5cdFx0XHRpZiAodHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiIHx8ICFzZWxlY3RvciB8fCBub2RlVHlwZSAhPT0gMSAmJiBub2RlVHlwZSAhPT0gOSAmJiBub2RlVHlwZSAhPT0gMTEpIHtcblxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdH1cblxuXHRcdFx0Ly8gVHJ5IHRvIHNob3J0Y3V0IGZpbmQgb3BlcmF0aW9ucyAoYXMgb3Bwb3NlZCB0byBmaWx0ZXJzKSBpbiBIVE1MIGRvY3VtZW50c1xuXHRcdFx0aWYgKCFzZWVkKSB7XG5cblx0XHRcdFx0aWYgKChjb250ZXh0ID8gY29udGV4dC5vd25lckRvY3VtZW50IHx8IGNvbnRleHQgOiBwcmVmZXJyZWREb2MpICE9PSBkb2N1bWVudCkge1xuXHRcdFx0XHRcdHNldERvY3VtZW50KGNvbnRleHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRleHQgPSBjb250ZXh0IHx8IGRvY3VtZW50O1xuXG5cdFx0XHRcdGlmIChkb2N1bWVudElzSFRNTCkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIHNlbGVjdG9yIGlzIHN1ZmZpY2llbnRseSBzaW1wbGUsIHRyeSB1c2luZyBhIFwiZ2V0KkJ5KlwiIERPTSBtZXRob2Rcblx0XHRcdFx0XHQvLyAoZXhjZXB0aW5nIERvY3VtZW50RnJhZ21lbnQgY29udGV4dCwgd2hlcmUgdGhlIG1ldGhvZHMgZG9uJ3QgZXhpc3QpXG5cdFx0XHRcdFx0aWYgKG5vZGVUeXBlICE9PSAxMSAmJiAobWF0Y2ggPSBycXVpY2tFeHByLmV4ZWMoc2VsZWN0b3IpKSkge1xuXG5cdFx0XHRcdFx0XHQvLyBJRCBzZWxlY3RvclxuXHRcdFx0XHRcdFx0aWYgKG0gPSBtYXRjaFsxXSkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIERvY3VtZW50IGNvbnRleHRcblx0XHRcdFx0XHRcdFx0aWYgKG5vZGVUeXBlID09PSA5KSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGVsZW0gPSBjb250ZXh0LmdldEVsZW1lbnRCeUlkKG0pKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFLCBPcGVyYSwgV2Via2l0XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBUT0RPOiBpZGVudGlmeSB2ZXJzaW9uc1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gZ2V0RWxlbWVudEJ5SWQgY2FuIG1hdGNoIGVsZW1lbnRzIGJ5IG5hbWUgaW5zdGVhZCBvZiBJRFxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGVsZW0uaWQgPT09IG0pIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0cy5wdXNoKGVsZW0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gRWxlbWVudCBjb250ZXh0XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSwgT3BlcmEsIFdlYmtpdFxuXHRcdFx0XHRcdFx0XHRcdC8vIFRPRE86IGlkZW50aWZ5IHZlcnNpb25zXG5cdFx0XHRcdFx0XHRcdFx0Ly8gZ2V0RWxlbWVudEJ5SWQgY2FuIG1hdGNoIGVsZW1lbnRzIGJ5IG5hbWUgaW5zdGVhZCBvZiBJRFxuXHRcdFx0XHRcdFx0XHRcdGlmIChuZXdDb250ZXh0ICYmIChlbGVtID0gbmV3Q29udGV4dC5nZXRFbGVtZW50QnlJZChtKSkgJiYgY29udGFpbnMoY29udGV4dCwgZWxlbSkgJiYgZWxlbS5pZCA9PT0gbSkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHRzLnB1c2goZWxlbSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQvLyBUeXBlIHNlbGVjdG9yXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG1hdGNoWzJdKSB7XG5cdFx0XHRcdFx0XHRcdHB1c2guYXBwbHkocmVzdWx0cywgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZShzZWxlY3RvcikpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblxuXHRcdFx0XHRcdFx0XHQvLyBDbGFzcyBzZWxlY3RvclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICgobSA9IG1hdGNoWzNdKSAmJiBzdXBwb3J0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJiYgY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSB7XG5cblx0XHRcdFx0XHRcdFx0cHVzaC5hcHBseShyZXN1bHRzLCBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobSkpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBUYWtlIGFkdmFudGFnZSBvZiBxdWVyeVNlbGVjdG9yQWxsXG5cdFx0XHRcdFx0aWYgKHN1cHBvcnQucXNhICYmICFjb21waWxlckNhY2hlW3NlbGVjdG9yICsgXCIgXCJdICYmICghcmJ1Z2d5UVNBIHx8ICFyYnVnZ3lRU0EudGVzdChzZWxlY3RvcikpKSB7XG5cblx0XHRcdFx0XHRcdGlmIChub2RlVHlwZSAhPT0gMSkge1xuXHRcdFx0XHRcdFx0XHRuZXdDb250ZXh0ID0gY29udGV4dDtcblx0XHRcdFx0XHRcdFx0bmV3U2VsZWN0b3IgPSBzZWxlY3RvcjtcblxuXHRcdFx0XHRcdFx0XHQvLyBxU0EgbG9va3Mgb3V0c2lkZSBFbGVtZW50IGNvbnRleHQsIHdoaWNoIGlzIG5vdCB3aGF0IHdlIHdhbnRcblx0XHRcdFx0XHRcdFx0Ly8gVGhhbmtzIHRvIEFuZHJldyBEdXBvbnQgZm9yIHRoaXMgd29ya2Fyb3VuZCB0ZWNobmlxdWVcblx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD04XG5cdFx0XHRcdFx0XHRcdC8vIEV4Y2x1ZGUgb2JqZWN0IGVsZW1lbnRzXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGNvbnRleHQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJvYmplY3RcIikge1xuXG5cdFx0XHRcdFx0XHRcdC8vIENhcHR1cmUgdGhlIGNvbnRleHQgSUQsIHNldHRpbmcgaXQgZmlyc3QgaWYgbmVjZXNzYXJ5XG5cdFx0XHRcdFx0XHRcdGlmIChuaWQgPSBjb250ZXh0LmdldEF0dHJpYnV0ZShcImlkXCIpKSB7XG5cdFx0XHRcdFx0XHRcdFx0bmlkID0gbmlkLnJlcGxhY2UocmNzc2VzY2FwZSwgZmNzc2VzY2FwZSk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29udGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBuaWQgPSBleHBhbmRvKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC8vIFByZWZpeCBldmVyeSBzZWxlY3RvciBpbiB0aGUgbGlzdFxuXHRcdFx0XHRcdFx0XHRncm91cHMgPSB0b2tlbml6ZShzZWxlY3Rvcik7XG5cdFx0XHRcdFx0XHRcdGkgPSBncm91cHMubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHRcdFx0XHRcdFx0Z3JvdXBzW2ldID0gXCIjXCIgKyBuaWQgKyBcIiBcIiArIHRvU2VsZWN0b3IoZ3JvdXBzW2ldKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRuZXdTZWxlY3RvciA9IGdyb3Vwcy5qb2luKFwiLFwiKTtcblxuXHRcdFx0XHRcdFx0XHQvLyBFeHBhbmQgY29udGV4dCBmb3Igc2libGluZyBzZWxlY3RvcnNcblx0XHRcdFx0XHRcdFx0bmV3Q29udGV4dCA9IHJzaWJsaW5nLnRlc3Qoc2VsZWN0b3IpICYmIHRlc3RDb250ZXh0KGNvbnRleHQucGFyZW50Tm9kZSkgfHwgY29udGV4dDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKG5ld1NlbGVjdG9yKSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0cHVzaC5hcHBseShyZXN1bHRzLCBuZXdDb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwobmV3U2VsZWN0b3IpKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAocXNhRXJyb3IpIHt9IGZpbmFsbHkge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChuaWQgPT09IGV4cGFuZG8pIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRleHQucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFsbCBvdGhlcnNcblx0XHRcdHJldHVybiBzZWxlY3Qoc2VsZWN0b3IucmVwbGFjZShydHJpbSwgXCIkMVwiKSwgY29udGV4dCwgcmVzdWx0cywgc2VlZCk7XG5cdFx0fVxuXG5cdFx0LyoqXG4gICAqIENyZWF0ZSBrZXktdmFsdWUgY2FjaGVzIG9mIGxpbWl0ZWQgc2l6ZVxuICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24oc3RyaW5nLCBvYmplY3QpfSBSZXR1cm5zIHRoZSBPYmplY3QgZGF0YSBhZnRlciBzdG9yaW5nIGl0IG9uIGl0c2VsZiB3aXRoXG4gICAqXHRwcm9wZXJ0eSBuYW1lIHRoZSAoc3BhY2Utc3VmZml4ZWQpIHN0cmluZyBhbmQgKGlmIHRoZSBjYWNoZSBpcyBsYXJnZXIgdGhhbiBFeHByLmNhY2hlTGVuZ3RoKVxuICAgKlx0ZGVsZXRpbmcgdGhlIG9sZGVzdCBlbnRyeVxuICAgKi9cblx0XHRmdW5jdGlvbiBjcmVhdGVDYWNoZSgpIHtcblx0XHRcdHZhciBrZXlzID0gW107XG5cblx0XHRcdGZ1bmN0aW9uIGNhY2hlKGtleSwgdmFsdWUpIHtcblx0XHRcdFx0Ly8gVXNlIChrZXkgKyBcIiBcIikgdG8gYXZvaWQgY29sbGlzaW9uIHdpdGggbmF0aXZlIHByb3RvdHlwZSBwcm9wZXJ0aWVzIChzZWUgSXNzdWUgIzE1Nylcblx0XHRcdFx0aWYgKGtleXMucHVzaChrZXkgKyBcIiBcIikgPiBFeHByLmNhY2hlTGVuZ3RoKSB7XG5cdFx0XHRcdFx0Ly8gT25seSBrZWVwIHRoZSBtb3N0IHJlY2VudCBlbnRyaWVzXG5cdFx0XHRcdFx0ZGVsZXRlIGNhY2hlW2tleXMuc2hpZnQoKV07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGNhY2hlW2tleSArIFwiIFwiXSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNhY2hlO1xuXHRcdH1cblxuXHRcdC8qKlxuICAgKiBNYXJrIGEgZnVuY3Rpb24gZm9yIHNwZWNpYWwgdXNlIGJ5IFNpenpsZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gbWFya1xuICAgKi9cblx0XHRmdW5jdGlvbiBtYXJrRnVuY3Rpb24oZm4pIHtcblx0XHRcdGZuW2V4cGFuZG9dID0gdHJ1ZTtcblx0XHRcdHJldHVybiBmbjtcblx0XHR9XG5cblx0XHQvKipcbiAgICogU3VwcG9ydCB0ZXN0aW5nIHVzaW5nIGFuIGVsZW1lbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gUGFzc2VkIHRoZSBjcmVhdGVkIGVsZW1lbnQgYW5kIHJldHVybnMgYSBib29sZWFuIHJlc3VsdFxuICAgKi9cblx0XHRmdW5jdGlvbiBhc3NlcnQoZm4pIHtcblx0XHRcdHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmV0dXJuICEhZm4oZWwpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHQvLyBSZW1vdmUgZnJvbSBpdHMgcGFyZW50IGJ5IGRlZmF1bHRcblx0XHRcdFx0aWYgKGVsLnBhcmVudE5vZGUpIHtcblx0XHRcdFx0XHRlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyByZWxlYXNlIG1lbW9yeSBpbiBJRVxuXHRcdFx0XHRlbCA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG4gICAqIEFkZHMgdGhlIHNhbWUgaGFuZGxlciBmb3IgYWxsIG9mIHRoZSBzcGVjaWZpZWQgYXR0cnNcbiAgICogQHBhcmFtIHtTdHJpbmd9IGF0dHJzIFBpcGUtc2VwYXJhdGVkIGxpc3Qgb2YgYXR0cmlidXRlc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIFRoZSBtZXRob2QgdGhhdCB3aWxsIGJlIGFwcGxpZWRcbiAgICovXG5cdFx0ZnVuY3Rpb24gYWRkSGFuZGxlKGF0dHJzLCBoYW5kbGVyKSB7XG5cdFx0XHR2YXIgYXJyID0gYXR0cnMuc3BsaXQoXCJ8XCIpLFxuXHRcdFx0ICAgIGkgPSBhcnIubGVuZ3RoO1xuXG5cdFx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHRcdEV4cHIuYXR0ckhhbmRsZVthcnJbaV1dID0gaGFuZGxlcjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcbiAgICogQ2hlY2tzIGRvY3VtZW50IG9yZGVyIG9mIHR3byBzaWJsaW5nc1xuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGFcbiAgICogQHBhcmFtIHtFbGVtZW50fSBiXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9IFJldHVybnMgbGVzcyB0aGFuIDAgaWYgYSBwcmVjZWRlcyBiLCBncmVhdGVyIHRoYW4gMCBpZiBhIGZvbGxvd3MgYlxuICAgKi9cblx0XHRmdW5jdGlvbiBzaWJsaW5nQ2hlY2soYSwgYikge1xuXHRcdFx0dmFyIGN1ciA9IGIgJiYgYSxcblx0XHRcdCAgICBkaWZmID0gY3VyICYmIGEubm9kZVR5cGUgPT09IDEgJiYgYi5ub2RlVHlwZSA9PT0gMSAmJiBhLnNvdXJjZUluZGV4IC0gYi5zb3VyY2VJbmRleDtcblxuXHRcdFx0Ly8gVXNlIElFIHNvdXJjZUluZGV4IGlmIGF2YWlsYWJsZSBvbiBib3RoIG5vZGVzXG5cdFx0XHRpZiAoZGlmZikge1xuXHRcdFx0XHRyZXR1cm4gZGlmZjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ2hlY2sgaWYgYiBmb2xsb3dzIGFcblx0XHRcdGlmIChjdXIpIHtcblx0XHRcdFx0d2hpbGUgKGN1ciA9IGN1ci5uZXh0U2libGluZykge1xuXHRcdFx0XHRcdGlmIChjdXIgPT09IGIpIHtcblx0XHRcdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGEgPyAxIDogLTE7XG5cdFx0fVxuXG5cdFx0LyoqXG4gICAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgaW5wdXQgdHlwZXNcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICovXG5cdFx0ZnVuY3Rpb24gY3JlYXRlSW5wdXRQc2V1ZG8odHlwZSkge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHRcdHZhciBuYW1lID0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRyZXR1cm4gbmFtZSA9PT0gXCJpbnB1dFwiICYmIGVsZW0udHlwZSA9PT0gdHlwZTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0LyoqXG4gICAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgYnV0dG9uc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICAgKi9cblx0XHRmdW5jdGlvbiBjcmVhdGVCdXR0b25Qc2V1ZG8odHlwZSkge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHRcdHZhciBuYW1lID0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRyZXR1cm4gKG5hbWUgPT09IFwiaW5wdXRcIiB8fCBuYW1lID09PSBcImJ1dHRvblwiKSAmJiBlbGVtLnR5cGUgPT09IHR5cGU7XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8qKlxuICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIDplbmFibGVkLzpkaXNhYmxlZFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRpc2FibGVkIHRydWUgZm9yIDpkaXNhYmxlZDsgZmFsc2UgZm9yIDplbmFibGVkXG4gICAqL1xuXHRcdGZ1bmN0aW9uIGNyZWF0ZURpc2FibGVkUHNldWRvKGRpc2FibGVkKSB7XG5cblx0XHRcdC8vIEtub3duIDpkaXNhYmxlZCBmYWxzZSBwb3NpdGl2ZXM6IGZpZWxkc2V0W2Rpc2FibGVkXSA+IGxlZ2VuZDpudGgtb2YtdHlwZShuKzIpIDpjYW4tZGlzYWJsZVxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7XG5cblx0XHRcdFx0Ly8gT25seSBjZXJ0YWluIGVsZW1lbnRzIGNhbiBtYXRjaCA6ZW5hYmxlZCBvciA6ZGlzYWJsZWRcblx0XHRcdFx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2NyaXB0aW5nLmh0bWwjc2VsZWN0b3ItZW5hYmxlZFxuXHRcdFx0XHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zY3JpcHRpbmcuaHRtbCNzZWxlY3Rvci1kaXNhYmxlZFxuXHRcdFx0XHRpZiAoXCJmb3JtXCIgaW4gZWxlbSkge1xuXG5cdFx0XHRcdFx0Ly8gQ2hlY2sgZm9yIGluaGVyaXRlZCBkaXNhYmxlZG5lc3Mgb24gcmVsZXZhbnQgbm9uLWRpc2FibGVkIGVsZW1lbnRzOlxuXHRcdFx0XHRcdC8vICogbGlzdGVkIGZvcm0tYXNzb2NpYXRlZCBlbGVtZW50cyBpbiBhIGRpc2FibGVkIGZpZWxkc2V0XG5cdFx0XHRcdFx0Ly8gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI2NhdGVnb3J5LWxpc3RlZFxuXHRcdFx0XHRcdC8vICAgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybXMuaHRtbCNjb25jZXB0LWZlLWRpc2FibGVkXG5cdFx0XHRcdFx0Ly8gKiBvcHRpb24gZWxlbWVudHMgaW4gYSBkaXNhYmxlZCBvcHRncm91cFxuXHRcdFx0XHRcdC8vICAgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybXMuaHRtbCNjb25jZXB0LW9wdGlvbi1kaXNhYmxlZFxuXHRcdFx0XHRcdC8vIEFsbCBzdWNoIGVsZW1lbnRzIGhhdmUgYSBcImZvcm1cIiBwcm9wZXJ0eS5cblx0XHRcdFx0XHRpZiAoZWxlbS5wYXJlbnROb2RlICYmIGVsZW0uZGlzYWJsZWQgPT09IGZhbHNlKSB7XG5cblx0XHRcdFx0XHRcdC8vIE9wdGlvbiBlbGVtZW50cyBkZWZlciB0byBhIHBhcmVudCBvcHRncm91cCBpZiBwcmVzZW50XG5cdFx0XHRcdFx0XHRpZiAoXCJsYWJlbFwiIGluIGVsZW0pIHtcblx0XHRcdFx0XHRcdFx0aWYgKFwibGFiZWxcIiBpbiBlbGVtLnBhcmVudE5vZGUpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS5wYXJlbnROb2RlLmRpc2FibGVkID09PSBkaXNhYmxlZDtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS5kaXNhYmxlZCA9PT0gZGlzYWJsZWQ7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgNiAtIDExXG5cdFx0XHRcdFx0XHQvLyBVc2UgdGhlIGlzRGlzYWJsZWQgc2hvcnRjdXQgcHJvcGVydHkgdG8gY2hlY2sgZm9yIGRpc2FibGVkIGZpZWxkc2V0IGFuY2VzdG9yc1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0uaXNEaXNhYmxlZCA9PT0gZGlzYWJsZWQgfHxcblxuXHRcdFx0XHRcdFx0Ly8gV2hlcmUgdGhlcmUgaXMgbm8gaXNEaXNhYmxlZCwgY2hlY2sgbWFudWFsbHlcblx0XHRcdFx0XHRcdC8qIGpzaGludCAtVzAxOCAqL1xuXHRcdFx0XHRcdFx0ZWxlbS5pc0Rpc2FibGVkICE9PSAhZGlzYWJsZWQgJiYgZGlzYWJsZWRBbmNlc3RvcihlbGVtKSA9PT0gZGlzYWJsZWQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXG5cdFx0XHRcdFx0Ly8gVHJ5IHRvIHdpbm5vdyBvdXQgZWxlbWVudHMgdGhhdCBjYW4ndCBiZSBkaXNhYmxlZCBiZWZvcmUgdHJ1c3RpbmcgdGhlIGRpc2FibGVkIHByb3BlcnR5LlxuXHRcdFx0XHRcdC8vIFNvbWUgdmljdGltcyBnZXQgY2F1Z2h0IGluIG91ciBuZXQgKGxhYmVsLCBsZWdlbmQsIG1lbnUsIHRyYWNrKSwgYnV0IGl0IHNob3VsZG4ndFxuXHRcdFx0XHRcdC8vIGV2ZW4gZXhpc3Qgb24gdGhlbSwgbGV0IGFsb25lIGhhdmUgYSBib29sZWFuIHZhbHVlLlxuXHRcdFx0XHR9IGVsc2UgaWYgKFwibGFiZWxcIiBpbiBlbGVtKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmVtYWluaW5nIGVsZW1lbnRzIGFyZSBuZWl0aGVyIDplbmFibGVkIG5vciA6ZGlzYWJsZWRcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvKipcbiAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVzZSBpbiBwc2V1ZG9zIGZvciBwb3NpdGlvbmFsc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgKi9cblx0XHRmdW5jdGlvbiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZuKSB7XG5cdFx0XHRyZXR1cm4gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uIChhcmd1bWVudCkge1xuXHRcdFx0XHRhcmd1bWVudCA9ICthcmd1bWVudDtcblx0XHRcdFx0cmV0dXJuIG1hcmtGdW5jdGlvbihmdW5jdGlvbiAoc2VlZCwgbWF0Y2hlcykge1xuXHRcdFx0XHRcdHZhciBqLFxuXHRcdFx0XHRcdCAgICBtYXRjaEluZGV4ZXMgPSBmbihbXSwgc2VlZC5sZW5ndGgsIGFyZ3VtZW50KSxcblx0XHRcdFx0XHQgICAgaSA9IG1hdGNoSW5kZXhlcy5sZW5ndGg7XG5cblx0XHRcdFx0XHQvLyBNYXRjaCBlbGVtZW50cyBmb3VuZCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4ZXNcblx0XHRcdFx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHRcdFx0XHRpZiAoc2VlZFtqID0gbWF0Y2hJbmRleGVzW2ldXSkge1xuXHRcdFx0XHRcdFx0XHRzZWVkW2pdID0gIShtYXRjaGVzW2pdID0gc2VlZFtqXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxuICAgKiBDaGVja3MgYSBub2RlIGZvciB2YWxpZGl0eSBhcyBhIFNpenpsZSBjb250ZXh0XG4gICAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3Q9fSBjb250ZXh0XG4gICAqIEByZXR1cm5zIHtFbGVtZW50fE9iamVjdHxCb29sZWFufSBUaGUgaW5wdXQgbm9kZSBpZiBhY2NlcHRhYmxlLCBvdGhlcndpc2UgYSBmYWxzeSB2YWx1ZVxuICAgKi9cblx0XHRmdW5jdGlvbiB0ZXN0Q29udGV4dChjb250ZXh0KSB7XG5cdFx0XHRyZXR1cm4gY29udGV4dCAmJiB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb250ZXh0O1xuXHRcdH1cblxuXHRcdC8vIEV4cG9zZSBzdXBwb3J0IHZhcnMgZm9yIGNvbnZlbmllbmNlXG5cdFx0c3VwcG9ydCA9IFNpenpsZS5zdXBwb3J0ID0ge307XG5cblx0XHQvKipcbiAgICogRGV0ZWN0cyBYTUwgbm9kZXNcbiAgICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gZWxlbSBBbiBlbGVtZW50IG9yIGEgZG9jdW1lbnRcbiAgICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWZmIGVsZW0gaXMgYSBub24tSFRNTCBYTUwgbm9kZVxuICAgKi9cblx0XHRpc1hNTCA9IFNpenpsZS5pc1hNTCA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHQvLyBkb2N1bWVudEVsZW1lbnQgaXMgdmVyaWZpZWQgZm9yIGNhc2VzIHdoZXJlIGl0IGRvZXNuJ3QgeWV0IGV4aXN0XG5cdFx0XHQvLyAoc3VjaCBhcyBsb2FkaW5nIGlmcmFtZXMgaW4gSUUgLSAjNDgzMylcblx0XHRcdHZhciBkb2N1bWVudEVsZW1lbnQgPSBlbGVtICYmIChlbGVtLm93bmVyRG9jdW1lbnQgfHwgZWxlbSkuZG9jdW1lbnRFbGVtZW50O1xuXHRcdFx0cmV0dXJuIGRvY3VtZW50RWxlbWVudCA/IGRvY3VtZW50RWxlbWVudC5ub2RlTmFtZSAhPT0gXCJIVE1MXCIgOiBmYWxzZTtcblx0XHR9O1xuXG5cdFx0LyoqXG4gICAqIFNldHMgZG9jdW1lbnQtcmVsYXRlZCB2YXJpYWJsZXMgb25jZSBiYXNlZCBvbiB0aGUgY3VycmVudCBkb2N1bWVudFxuICAgKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0fSBbZG9jXSBBbiBlbGVtZW50IG9yIGRvY3VtZW50IG9iamVjdCB0byB1c2UgdG8gc2V0IHRoZSBkb2N1bWVudFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjdXJyZW50IGRvY3VtZW50XG4gICAqL1xuXHRcdHNldERvY3VtZW50ID0gU2l6emxlLnNldERvY3VtZW50ID0gZnVuY3Rpb24gKG5vZGUpIHtcblx0XHRcdHZhciBoYXNDb21wYXJlLFxuXHRcdFx0ICAgIHN1YldpbmRvdyxcblx0XHRcdCAgICBkb2MgPSBub2RlID8gbm9kZS5vd25lckRvY3VtZW50IHx8IG5vZGUgOiBwcmVmZXJyZWREb2M7XG5cblx0XHRcdC8vIFJldHVybiBlYXJseSBpZiBkb2MgaXMgaW52YWxpZCBvciBhbHJlYWR5IHNlbGVjdGVkXG5cdFx0XHRpZiAoZG9jID09PSBkb2N1bWVudCB8fCBkb2Mubm9kZVR5cGUgIT09IDkgfHwgIWRvYy5kb2N1bWVudEVsZW1lbnQpIHtcblx0XHRcdFx0cmV0dXJuIGRvY3VtZW50O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBVcGRhdGUgZ2xvYmFsIHZhcmlhYmxlc1xuXHRcdFx0ZG9jdW1lbnQgPSBkb2M7XG5cdFx0XHRkb2NFbGVtID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRcdFx0ZG9jdW1lbnRJc0hUTUwgPSAhaXNYTUwoZG9jdW1lbnQpO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSA5LTExLCBFZGdlXG5cdFx0XHQvLyBBY2Nlc3NpbmcgaWZyYW1lIGRvY3VtZW50cyBhZnRlciB1bmxvYWQgdGhyb3dzIFwicGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvcnMgKGpRdWVyeSAjMTM5MzYpXG5cdFx0XHRpZiAocHJlZmVycmVkRG9jICE9PSBkb2N1bWVudCAmJiAoc3ViV2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcpICYmIHN1YldpbmRvdy50b3AgIT09IHN1YldpbmRvdykge1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDExLCBFZGdlXG5cdFx0XHRcdGlmIChzdWJXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuXHRcdFx0XHRcdHN1YldpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsIHVubG9hZEhhbmRsZXIsIGZhbHNlKTtcblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDkgLSAxMCBvbmx5XG5cdFx0XHRcdH0gZWxzZSBpZiAoc3ViV2luZG93LmF0dGFjaEV2ZW50KSB7XG5cdFx0XHRcdFx0c3ViV2luZG93LmF0dGFjaEV2ZW50KFwib251bmxvYWRcIiwgdW5sb2FkSGFuZGxlcik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LyogQXR0cmlidXRlc1xuICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRTw4XG5cdFx0XHQvLyBWZXJpZnkgdGhhdCBnZXRBdHRyaWJ1dGUgcmVhbGx5IHJldHVybnMgYXR0cmlidXRlcyBhbmQgbm90IHByb3BlcnRpZXNcblx0XHRcdC8vIChleGNlcHRpbmcgSUU4IGJvb2xlYW5zKVxuXHRcdFx0c3VwcG9ydC5hdHRyaWJ1dGVzID0gYXNzZXJ0KGZ1bmN0aW9uIChlbCkge1xuXHRcdFx0XHRlbC5jbGFzc05hbWUgPSBcImlcIjtcblx0XHRcdFx0cmV0dXJuICFlbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIik7XG5cdFx0XHR9KTtcblxuXHRcdFx0LyogZ2V0RWxlbWVudChzKUJ5KlxuICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cdFx0XHQvLyBDaGVjayBpZiBnZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikgcmV0dXJucyBvbmx5IGVsZW1lbnRzXG5cdFx0XHRzdXBwb3J0LmdldEVsZW1lbnRzQnlUYWdOYW1lID0gYXNzZXJ0KGZ1bmN0aW9uIChlbCkge1xuXHRcdFx0XHRlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVDb21tZW50KFwiXCIpKTtcblx0XHRcdFx0cmV0dXJuICFlbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RoO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFPDlcblx0XHRcdHN1cHBvcnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSA9IHJuYXRpdmUudGVzdChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKTtcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUU8MTBcblx0XHRcdC8vIENoZWNrIGlmIGdldEVsZW1lbnRCeUlkIHJldHVybnMgZWxlbWVudHMgYnkgbmFtZVxuXHRcdFx0Ly8gVGhlIGJyb2tlbiBnZXRFbGVtZW50QnlJZCBtZXRob2RzIGRvbid0IHBpY2sgdXAgcHJvZ3JhbW1hdGljYWxseS1zZXQgbmFtZXMsXG5cdFx0XHQvLyBzbyB1c2UgYSByb3VuZGFib3V0IGdldEVsZW1lbnRzQnlOYW1lIHRlc3Rcblx0XHRcdHN1cHBvcnQuZ2V0QnlJZCA9IGFzc2VydChmdW5jdGlvbiAoZWwpIHtcblx0XHRcdFx0ZG9jRWxlbS5hcHBlbmRDaGlsZChlbCkuaWQgPSBleHBhbmRvO1xuXHRcdFx0XHRyZXR1cm4gIWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lIHx8ICFkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShleHBhbmRvKS5sZW5ndGg7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gSUQgZmlsdGVyIGFuZCBmaW5kXG5cdFx0XHRpZiAoc3VwcG9ydC5nZXRCeUlkKSB7XG5cdFx0XHRcdEV4cHIuZmlsdGVyW1wiSURcIl0gPSBmdW5jdGlvbiAoaWQpIHtcblx0XHRcdFx0XHR2YXIgYXR0cklkID0gaWQucmVwbGFjZShydW5lc2NhcGUsIGZ1bmVzY2FwZSk7XG5cdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoXCJpZFwiKSA9PT0gYXR0cklkO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH07XG5cdFx0XHRcdEV4cHIuZmluZFtcIklEXCJdID0gZnVuY3Rpb24gKGlkLCBjb250ZXh0KSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRCeUlkICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50SXNIVE1MKSB7XG5cdFx0XHRcdFx0XHR2YXIgZWxlbSA9IGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0gPyBbZWxlbV0gOiBbXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRFeHByLmZpbHRlcltcIklEXCJdID0gZnVuY3Rpb24gKGlkKSB7XG5cdFx0XHRcdFx0dmFyIGF0dHJJZCA9IGlkLnJlcGxhY2UocnVuZXNjYXBlLCBmdW5lc2NhcGUpO1xuXHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdFx0XHRcdFx0dmFyIG5vZGUgPSB0eXBlb2YgZWxlbS5nZXRBdHRyaWJ1dGVOb2RlICE9PSBcInVuZGVmaW5lZFwiICYmIGVsZW0uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIG5vZGUgJiYgbm9kZS52YWx1ZSA9PT0gYXR0cklkO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgNiAtIDcgb25seVxuXHRcdFx0XHQvLyBnZXRFbGVtZW50QnlJZCBpcyBub3QgcmVsaWFibGUgYXMgYSBmaW5kIHNob3J0Y3V0XG5cdFx0XHRcdEV4cHIuZmluZFtcIklEXCJdID0gZnVuY3Rpb24gKGlkLCBjb250ZXh0KSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRCeUlkICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50SXNIVE1MKSB7XG5cdFx0XHRcdFx0XHR2YXIgbm9kZSxcblx0XHRcdFx0XHRcdCAgICBpLFxuXHRcdFx0XHRcdFx0ICAgIGVsZW1zLFxuXHRcdFx0XHRcdFx0ICAgIGVsZW0gPSBjb250ZXh0LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuXHRcdFx0XHRcdFx0aWYgKGVsZW0pIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBWZXJpZnkgdGhlIGlkIGF0dHJpYnV0ZVxuXHRcdFx0XHRcdFx0XHRub2RlID0gZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7XG5cdFx0XHRcdFx0XHRcdGlmIChub2RlICYmIG5vZGUudmFsdWUgPT09IGlkKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFtlbGVtXTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC8vIEZhbGwgYmFjayBvbiBnZXRFbGVtZW50c0J5TmFtZVxuXHRcdFx0XHRcdFx0XHRlbGVtcyA9IGNvbnRleHQuZ2V0RWxlbWVudHNCeU5hbWUoaWQpO1xuXHRcdFx0XHRcdFx0XHRpID0gMDtcblx0XHRcdFx0XHRcdFx0d2hpbGUgKGVsZW0gPSBlbGVtc1tpKytdKSB7XG5cdFx0XHRcdFx0XHRcdFx0bm9kZSA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChub2RlICYmIG5vZGUudmFsdWUgPT09IGlkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gW2VsZW1dO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUYWdcblx0XHRcdEV4cHIuZmluZFtcIlRBR1wiXSA9IHN1cHBvcnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgPyBmdW5jdGlvbiAodGFnLCBjb250ZXh0KSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZyk7XG5cblx0XHRcdFx0XHQvLyBEb2N1bWVudEZyYWdtZW50IG5vZGVzIGRvbid0IGhhdmUgZ0VCVE5cblx0XHRcdFx0fSBlbHNlIGlmIChzdXBwb3J0LnFzYSkge1xuXHRcdFx0XHRcdHJldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwodGFnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSA6IGZ1bmN0aW9uICh0YWcsIGNvbnRleHQpIHtcblx0XHRcdFx0dmFyIGVsZW0sXG5cdFx0XHRcdCAgICB0bXAgPSBbXSxcblx0XHRcdFx0ICAgIGkgPSAwLFxuXG5cdFx0XHRcdC8vIEJ5IGhhcHB5IGNvaW5jaWRlbmNlLCBhIChicm9rZW4pIGdFQlROIGFwcGVhcnMgb24gRG9jdW1lbnRGcmFnbWVudCBub2RlcyB0b29cblx0XHRcdFx0cmVzdWx0cyA9IGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnKTtcblxuXHRcdFx0XHQvLyBGaWx0ZXIgb3V0IHBvc3NpYmxlIGNvbW1lbnRzXG5cdFx0XHRcdGlmICh0YWcgPT09IFwiKlwiKSB7XG5cdFx0XHRcdFx0d2hpbGUgKGVsZW0gPSByZXN1bHRzW2krK10pIHtcblx0XHRcdFx0XHRcdGlmIChlbGVtLm5vZGVUeXBlID09PSAxKSB7XG5cdFx0XHRcdFx0XHRcdHRtcC5wdXNoKGVsZW0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiB0bXA7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBDbGFzc1xuXHRcdFx0RXhwci5maW5kW1wiQ0xBU1NcIl0gPSBzdXBwb3J0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJiYgZnVuY3Rpb24gKGNsYXNzTmFtZSwgY29udGV4dCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudElzSFRNTCkge1xuXHRcdFx0XHRcdHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0LyogUVNBL21hdGNoZXNTZWxlY3RvclxuICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cdFx0XHQvLyBRU0EgYW5kIG1hdGNoZXNTZWxlY3RvciBzdXBwb3J0XG5cblx0XHRcdC8vIG1hdGNoZXNTZWxlY3Rvcig6YWN0aXZlKSByZXBvcnRzIGZhbHNlIHdoZW4gdHJ1ZSAoSUU5L09wZXJhIDExLjUpXG5cdFx0XHRyYnVnZ3lNYXRjaGVzID0gW107XG5cblx0XHRcdC8vIHFTYSg6Zm9jdXMpIHJlcG9ydHMgZmFsc2Ugd2hlbiB0cnVlIChDaHJvbWUgMjEpXG5cdFx0XHQvLyBXZSBhbGxvdyB0aGlzIGJlY2F1c2Ugb2YgYSBidWcgaW4gSUU4LzkgdGhhdCB0aHJvd3MgYW4gZXJyb3Jcblx0XHRcdC8vIHdoZW5ldmVyIGBkb2N1bWVudC5hY3RpdmVFbGVtZW50YCBpcyBhY2Nlc3NlZCBvbiBhbiBpZnJhbWVcblx0XHRcdC8vIFNvLCB3ZSBhbGxvdyA6Zm9jdXMgdG8gcGFzcyB0aHJvdWdoIFFTQSBhbGwgdGhlIHRpbWUgdG8gYXZvaWQgdGhlIElFIGVycm9yXG5cdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzEzMzc4XG5cdFx0XHRyYnVnZ3lRU0EgPSBbXTtcblxuXHRcdFx0aWYgKHN1cHBvcnQucXNhID0gcm5hdGl2ZS50ZXN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwpKSB7XG5cdFx0XHRcdC8vIEJ1aWxkIFFTQSByZWdleFxuXHRcdFx0XHQvLyBSZWdleCBzdHJhdGVneSBhZG9wdGVkIGZyb20gRGllZ28gUGVyaW5pXG5cdFx0XHRcdGFzc2VydChmdW5jdGlvbiAoZWwpIHtcblx0XHRcdFx0XHQvLyBTZWxlY3QgaXMgc2V0IHRvIGVtcHR5IHN0cmluZyBvbiBwdXJwb3NlXG5cdFx0XHRcdFx0Ly8gVGhpcyBpcyB0byB0ZXN0IElFJ3MgdHJlYXRtZW50IG9mIG5vdCBleHBsaWNpdGx5XG5cdFx0XHRcdFx0Ly8gc2V0dGluZyBhIGJvb2xlYW4gY29udGVudCBhdHRyaWJ1dGUsXG5cdFx0XHRcdFx0Ly8gc2luY2UgaXRzIHByZXNlbmNlIHNob3VsZCBiZSBlbm91Z2hcblx0XHRcdFx0XHQvLyBodHRwczovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTIzNTlcblx0XHRcdFx0XHRkb2NFbGVtLmFwcGVuZENoaWxkKGVsKS5pbm5lckhUTUwgPSBcIjxhIGlkPSdcIiArIGV4cGFuZG8gKyBcIic+PC9hPlwiICsgXCI8c2VsZWN0IGlkPSdcIiArIGV4cGFuZG8gKyBcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz5cIiArIFwiPG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIjtcblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFOCwgT3BlcmEgMTEtMTIuMTZcblx0XHRcdFx0XHQvLyBOb3RoaW5nIHNob3VsZCBiZSBzZWxlY3RlZCB3aGVuIGVtcHR5IHN0cmluZ3MgZm9sbG93IF49IG9yICQ9IG9yICo9XG5cdFx0XHRcdFx0Ly8gVGhlIHRlc3QgYXR0cmlidXRlIG11c3QgYmUgdW5rbm93biBpbiBPcGVyYSBidXQgXCJzYWZlXCIgZm9yIFdpblJUXG5cdFx0XHRcdFx0Ly8gaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9oaDQ2NTM4OC5hc3B4I2F0dHJpYnV0ZV9zZWN0aW9uXG5cdFx0XHRcdFx0aWYgKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbXNhbGxvd2NhcHR1cmVePScnXVwiKS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdHJidWdneVFTQS5wdXNoKFwiWypeJF09XCIgKyB3aGl0ZXNwYWNlICsgXCIqKD86Jyd8XFxcIlxcXCIpXCIpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFOFxuXHRcdFx0XHRcdC8vIEJvb2xlYW4gYXR0cmlidXRlcyBhbmQgXCJ2YWx1ZVwiIGFyZSBub3QgdHJlYXRlZCBjb3JyZWN0bHlcblx0XHRcdFx0XHRpZiAoIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goXCJcXFxcW1wiICsgd2hpdGVzcGFjZSArIFwiKig/OnZhbHVlfFwiICsgYm9vbGVhbnMgKyBcIilcIik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogQ2hyb21lPDI5LCBBbmRyb2lkPDQuNCwgU2FmYXJpPDcuMCssIGlPUzw3LjArLCBQaGFudG9tSlM8MS45LjgrXG5cdFx0XHRcdFx0aWYgKCFlbC5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkfj1cIiArIGV4cGFuZG8gKyBcIi1dXCIpLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goXCJ+PVwiKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBXZWJraXQvT3BlcmEgLSA6Y2hlY2tlZCBzaG91bGQgcmV0dXJuIHNlbGVjdGVkIG9wdGlvbiBlbGVtZW50c1xuXHRcdFx0XHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMTEvUkVDLWNzczMtc2VsZWN0b3JzLTIwMTEwOTI5LyNjaGVja2VkXG5cdFx0XHRcdFx0Ly8gSUU4IHRocm93cyBlcnJvciBoZXJlIGFuZCB3aWxsIG5vdCBzZWUgbGF0ZXIgdGVzdHNcblx0XHRcdFx0XHRpZiAoIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdHJidWdneVFTQS5wdXNoKFwiOmNoZWNrZWRcIik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogU2FmYXJpIDgrLCBpT1MgOCtcblx0XHRcdFx0XHQvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM2ODUxXG5cdFx0XHRcdFx0Ly8gSW4tcGFnZSBgc2VsZWN0b3IjaWQgc2libGluZy1jb21iaW5hdG9yIHNlbGVjdG9yYCBmYWlsc1xuXHRcdFx0XHRcdGlmICghZWwucXVlcnlTZWxlY3RvckFsbChcImEjXCIgKyBleHBhbmRvICsgXCIrKlwiKS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdHJidWdneVFTQS5wdXNoKFwiLiMuK1srfl1cIik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRhc3NlcnQoZnVuY3Rpb24gKGVsKSB7XG5cdFx0XHRcdFx0ZWwuaW5uZXJIVE1MID0gXCI8YSBocmVmPScnIGRpc2FibGVkPSdkaXNhYmxlZCc+PC9hPlwiICsgXCI8c2VsZWN0IGRpc2FibGVkPSdkaXNhYmxlZCc+PG9wdGlvbi8+PC9zZWxlY3Q+XCI7XG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBXaW5kb3dzIDggTmF0aXZlIEFwcHNcblx0XHRcdFx0XHQvLyBUaGUgdHlwZSBhbmQgbmFtZSBhdHRyaWJ1dGVzIGFyZSByZXN0cmljdGVkIGR1cmluZyAuaW5uZXJIVE1MIGFzc2lnbm1lbnRcblx0XHRcdFx0XHR2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcblx0XHRcdFx0XHRlbC5hcHBlbmRDaGlsZChpbnB1dCkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIkRcIik7XG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRThcblx0XHRcdFx0XHQvLyBFbmZvcmNlIGNhc2Utc2Vuc2l0aXZpdHkgb2YgbmFtZSBhdHRyaWJ1dGVcblx0XHRcdFx0XHRpZiAoZWwucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRdXCIpLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goXCJuYW1lXCIgKyB3aGl0ZXNwYWNlICsgXCIqWypeJHwhfl0/PVwiKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBGRiAzLjUgLSA6ZW5hYmxlZC86ZGlzYWJsZWQgYW5kIGhpZGRlbiBlbGVtZW50cyAoaGlkZGVuIGVsZW1lbnRzIGFyZSBzdGlsbCBlbmFibGVkKVxuXHRcdFx0XHRcdC8vIElFOCB0aHJvd3MgZXJyb3IgaGVyZSBhbmQgd2lsbCBub3Qgc2VlIGxhdGVyIHRlc3RzXG5cdFx0XHRcdFx0aWYgKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGggIT09IDIpIHtcblx0XHRcdFx0XHRcdHJidWdneVFTQS5wdXNoKFwiOmVuYWJsZWRcIiwgXCI6ZGlzYWJsZWRcIik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUU5LTExK1xuXHRcdFx0XHRcdC8vIElFJ3MgOmRpc2FibGVkIHNlbGVjdG9yIGRvZXMgbm90IHBpY2sgdXAgdGhlIGNoaWxkcmVuIG9mIGRpc2FibGVkIGZpZWxkc2V0c1xuXHRcdFx0XHRcdGRvY0VsZW0uYXBwZW5kQ2hpbGQoZWwpLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRpZiAoZWwucXVlcnlTZWxlY3RvckFsbChcIjpkaXNhYmxlZFwiKS5sZW5ndGggIT09IDIpIHtcblx0XHRcdFx0XHRcdHJidWdneVFTQS5wdXNoKFwiOmVuYWJsZWRcIiwgXCI6ZGlzYWJsZWRcIik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gT3BlcmEgMTAtMTEgZG9lcyBub3QgdGhyb3cgb24gcG9zdC1jb21tYSBpbnZhbGlkIHBzZXVkb3Ncblx0XHRcdFx0XHRlbC5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKTtcblx0XHRcdFx0XHRyYnVnZ3lRU0EucHVzaChcIiwuKjpcIik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc3VwcG9ydC5tYXRjaGVzU2VsZWN0b3IgPSBybmF0aXZlLnRlc3QobWF0Y2hlcyA9IGRvY0VsZW0ubWF0Y2hlcyB8fCBkb2NFbGVtLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBkb2NFbGVtLm1vek1hdGNoZXNTZWxlY3RvciB8fCBkb2NFbGVtLm9NYXRjaGVzU2VsZWN0b3IgfHwgZG9jRWxlbS5tc01hdGNoZXNTZWxlY3RvcikpIHtcblxuXHRcdFx0XHRhc3NlcnQoZnVuY3Rpb24gKGVsKSB7XG5cdFx0XHRcdFx0Ly8gQ2hlY2sgdG8gc2VlIGlmIGl0J3MgcG9zc2libGUgdG8gZG8gbWF0Y2hlc1NlbGVjdG9yXG5cdFx0XHRcdFx0Ly8gb24gYSBkaXNjb25uZWN0ZWQgbm9kZSAoSUUgOSlcblx0XHRcdFx0XHRzdXBwb3J0LmRpc2Nvbm5lY3RlZE1hdGNoID0gbWF0Y2hlcy5jYWxsKGVsLCBcIipcIik7XG5cblx0XHRcdFx0XHQvLyBUaGlzIHNob3VsZCBmYWlsIHdpdGggYW4gZXhjZXB0aW9uXG5cdFx0XHRcdFx0Ly8gR2Vja28gZG9lcyBub3QgZXJyb3IsIHJldHVybnMgZmFsc2UgaW5zdGVhZFxuXHRcdFx0XHRcdG1hdGNoZXMuY2FsbChlbCwgXCJbcyE9JyddOnhcIik7XG5cdFx0XHRcdFx0cmJ1Z2d5TWF0Y2hlcy5wdXNoKFwiIT1cIiwgcHNldWRvcyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyYnVnZ3lRU0EgPSByYnVnZ3lRU0EubGVuZ3RoICYmIG5ldyBSZWdFeHAocmJ1Z2d5UVNBLmpvaW4oXCJ8XCIpKTtcblx0XHRcdHJidWdneU1hdGNoZXMgPSByYnVnZ3lNYXRjaGVzLmxlbmd0aCAmJiBuZXcgUmVnRXhwKHJidWdneU1hdGNoZXMuam9pbihcInxcIikpO1xuXG5cdFx0XHQvKiBDb250YWluc1xuICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHRcdFx0aGFzQ29tcGFyZSA9IHJuYXRpdmUudGVzdChkb2NFbGVtLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKTtcblxuXHRcdFx0Ly8gRWxlbWVudCBjb250YWlucyBhbm90aGVyXG5cdFx0XHQvLyBQdXJwb3NlZnVsbHkgc2VsZi1leGNsdXNpdmVcblx0XHRcdC8vIEFzIGluLCBhbiBlbGVtZW50IGRvZXMgbm90IGNvbnRhaW4gaXRzZWxmXG5cdFx0XHRjb250YWlucyA9IGhhc0NvbXBhcmUgfHwgcm5hdGl2ZS50ZXN0KGRvY0VsZW0uY29udGFpbnMpID8gZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRcdFx0dmFyIGFkb3duID0gYS5ub2RlVHlwZSA9PT0gOSA/IGEuZG9jdW1lbnRFbGVtZW50IDogYSxcblx0XHRcdFx0ICAgIGJ1cCA9IGIgJiYgYi5wYXJlbnROb2RlO1xuXHRcdFx0XHRyZXR1cm4gYSA9PT0gYnVwIHx8ICEhKGJ1cCAmJiBidXAubm9kZVR5cGUgPT09IDEgJiYgKGFkb3duLmNvbnRhaW5zID8gYWRvd24uY29udGFpbnMoYnVwKSA6IGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24gJiYgYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihidXApICYgMTYpKTtcblx0XHRcdH0gOiBmdW5jdGlvbiAoYSwgYikge1xuXHRcdFx0XHRpZiAoYikge1xuXHRcdFx0XHRcdHdoaWxlIChiID0gYi5wYXJlbnROb2RlKSB7XG5cdFx0XHRcdFx0XHRpZiAoYiA9PT0gYSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fTtcblxuXHRcdFx0LyogU29ydGluZ1xuICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cdFx0XHQvLyBEb2N1bWVudCBvcmRlciBzb3J0aW5nXG5cdFx0XHRzb3J0T3JkZXIgPSBoYXNDb21wYXJlID8gZnVuY3Rpb24gKGEsIGIpIHtcblxuXHRcdFx0XHQvLyBGbGFnIGZvciBkdXBsaWNhdGUgcmVtb3ZhbFxuXHRcdFx0XHRpZiAoYSA9PT0gYikge1xuXHRcdFx0XHRcdGhhc0R1cGxpY2F0ZSA9IHRydWU7XG5cdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTb3J0IG9uIG1ldGhvZCBleGlzdGVuY2UgaWYgb25seSBvbmUgaW5wdXQgaGFzIGNvbXBhcmVEb2N1bWVudFBvc2l0aW9uXG5cdFx0XHRcdHZhciBjb21wYXJlID0gIWEuY29tcGFyZURvY3VtZW50UG9zaXRpb24gLSAhYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtcblx0XHRcdFx0aWYgKGNvbXBhcmUpIHtcblx0XHRcdFx0XHRyZXR1cm4gY29tcGFyZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENhbGN1bGF0ZSBwb3NpdGlvbiBpZiBib3RoIGlucHV0cyBiZWxvbmcgdG8gdGhlIHNhbWUgZG9jdW1lbnRcblx0XHRcdFx0Y29tcGFyZSA9IChhLm93bmVyRG9jdW1lbnQgfHwgYSkgPT09IChiLm93bmVyRG9jdW1lbnQgfHwgYikgPyBhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpIDpcblxuXHRcdFx0XHQvLyBPdGhlcndpc2Ugd2Uga25vdyB0aGV5IGFyZSBkaXNjb25uZWN0ZWRcblx0XHRcdFx0MTtcblxuXHRcdFx0XHQvLyBEaXNjb25uZWN0ZWQgbm9kZXNcblx0XHRcdFx0aWYgKGNvbXBhcmUgJiAxIHx8ICFzdXBwb3J0LnNvcnREZXRhY2hlZCAmJiBiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGEpID09PSBjb21wYXJlKSB7XG5cblx0XHRcdFx0XHQvLyBDaG9vc2UgdGhlIGZpcnN0IGVsZW1lbnQgdGhhdCBpcyByZWxhdGVkIHRvIG91ciBwcmVmZXJyZWQgZG9jdW1lbnRcblx0XHRcdFx0XHRpZiAoYSA9PT0gZG9jdW1lbnQgfHwgYS5vd25lckRvY3VtZW50ID09PSBwcmVmZXJyZWREb2MgJiYgY29udGFpbnMocHJlZmVycmVkRG9jLCBhKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYiA9PT0gZG9jdW1lbnQgfHwgYi5vd25lckRvY3VtZW50ID09PSBwcmVmZXJyZWREb2MgJiYgY29udGFpbnMocHJlZmVycmVkRG9jLCBiKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gTWFpbnRhaW4gb3JpZ2luYWwgb3JkZXJcblx0XHRcdFx0XHRyZXR1cm4gc29ydElucHV0ID8gaW5kZXhPZihzb3J0SW5wdXQsIGEpIC0gaW5kZXhPZihzb3J0SW5wdXQsIGIpIDogMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBjb21wYXJlICYgNCA/IC0xIDogMTtcblx0XHRcdH0gOiBmdW5jdGlvbiAoYSwgYikge1xuXHRcdFx0XHQvLyBFeGl0IGVhcmx5IGlmIHRoZSBub2RlcyBhcmUgaWRlbnRpY2FsXG5cdFx0XHRcdGlmIChhID09PSBiKSB7XG5cdFx0XHRcdFx0aGFzRHVwbGljYXRlID0gdHJ1ZTtcblx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBjdXIsXG5cdFx0XHRcdCAgICBpID0gMCxcblx0XHRcdFx0ICAgIGF1cCA9IGEucGFyZW50Tm9kZSxcblx0XHRcdFx0ICAgIGJ1cCA9IGIucGFyZW50Tm9kZSxcblx0XHRcdFx0ICAgIGFwID0gW2FdLFxuXHRcdFx0XHQgICAgYnAgPSBbYl07XG5cblx0XHRcdFx0Ly8gUGFyZW50bGVzcyBub2RlcyBhcmUgZWl0aGVyIGRvY3VtZW50cyBvciBkaXNjb25uZWN0ZWRcblx0XHRcdFx0aWYgKCFhdXAgfHwgIWJ1cCkge1xuXHRcdFx0XHRcdHJldHVybiBhID09PSBkb2N1bWVudCA/IC0xIDogYiA9PT0gZG9jdW1lbnQgPyAxIDogYXVwID8gLTEgOiBidXAgPyAxIDogc29ydElucHV0ID8gaW5kZXhPZihzb3J0SW5wdXQsIGEpIC0gaW5kZXhPZihzb3J0SW5wdXQsIGIpIDogMDtcblxuXHRcdFx0XHRcdC8vIElmIHRoZSBub2RlcyBhcmUgc2libGluZ3MsIHdlIGNhbiBkbyBhIHF1aWNrIGNoZWNrXG5cdFx0XHRcdH0gZWxzZSBpZiAoYXVwID09PSBidXApIHtcblx0XHRcdFx0XHRyZXR1cm4gc2libGluZ0NoZWNrKGEsIGIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIHdlIG5lZWQgZnVsbCBsaXN0cyBvZiB0aGVpciBhbmNlc3RvcnMgZm9yIGNvbXBhcmlzb25cblx0XHRcdFx0Y3VyID0gYTtcblx0XHRcdFx0d2hpbGUgKGN1ciA9IGN1ci5wYXJlbnROb2RlKSB7XG5cdFx0XHRcdFx0YXAudW5zaGlmdChjdXIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN1ciA9IGI7XG5cdFx0XHRcdHdoaWxlIChjdXIgPSBjdXIucGFyZW50Tm9kZSkge1xuXHRcdFx0XHRcdGJwLnVuc2hpZnQoY3VyKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFdhbGsgZG93biB0aGUgdHJlZSBsb29raW5nIGZvciBhIGRpc2NyZXBhbmN5XG5cdFx0XHRcdHdoaWxlIChhcFtpXSA9PT0gYnBbaV0pIHtcblx0XHRcdFx0XHRpKys7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gaSA/XG5cdFx0XHRcdC8vIERvIGEgc2libGluZyBjaGVjayBpZiB0aGUgbm9kZXMgaGF2ZSBhIGNvbW1vbiBhbmNlc3RvclxuXHRcdFx0XHRzaWJsaW5nQ2hlY2soYXBbaV0sIGJwW2ldKSA6XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIG5vZGVzIGluIG91ciBkb2N1bWVudCBzb3J0IGZpcnN0XG5cdFx0XHRcdGFwW2ldID09PSBwcmVmZXJyZWREb2MgPyAtMSA6IGJwW2ldID09PSBwcmVmZXJyZWREb2MgPyAxIDogMDtcblx0XHRcdH07XG5cblx0XHRcdHJldHVybiBkb2N1bWVudDtcblx0XHR9O1xuXG5cdFx0U2l6emxlLm1hdGNoZXMgPSBmdW5jdGlvbiAoZXhwciwgZWxlbWVudHMpIHtcblx0XHRcdHJldHVybiBTaXp6bGUoZXhwciwgbnVsbCwgbnVsbCwgZWxlbWVudHMpO1xuXHRcdH07XG5cblx0XHRTaXp6bGUubWF0Y2hlc1NlbGVjdG9yID0gZnVuY3Rpb24gKGVsZW0sIGV4cHIpIHtcblx0XHRcdC8vIFNldCBkb2N1bWVudCB2YXJzIGlmIG5lZWRlZFxuXHRcdFx0aWYgKChlbGVtLm93bmVyRG9jdW1lbnQgfHwgZWxlbSkgIT09IGRvY3VtZW50KSB7XG5cdFx0XHRcdHNldERvY3VtZW50KGVsZW0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBNYWtlIHN1cmUgdGhhdCBhdHRyaWJ1dGUgc2VsZWN0b3JzIGFyZSBxdW90ZWRcblx0XHRcdGV4cHIgPSBleHByLnJlcGxhY2UocmF0dHJpYnV0ZVF1b3RlcywgXCI9JyQxJ11cIik7XG5cblx0XHRcdGlmIChzdXBwb3J0Lm1hdGNoZXNTZWxlY3RvciAmJiBkb2N1bWVudElzSFRNTCAmJiAhY29tcGlsZXJDYWNoZVtleHByICsgXCIgXCJdICYmICghcmJ1Z2d5TWF0Y2hlcyB8fCAhcmJ1Z2d5TWF0Y2hlcy50ZXN0KGV4cHIpKSAmJiAoIXJidWdneVFTQSB8fCAhcmJ1Z2d5UVNBLnRlc3QoZXhwcikpKSB7XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR2YXIgcmV0ID0gbWF0Y2hlcy5jYWxsKGVsZW0sIGV4cHIpO1xuXG5cdFx0XHRcdFx0Ly8gSUUgOSdzIG1hdGNoZXNTZWxlY3RvciByZXR1cm5zIGZhbHNlIG9uIGRpc2Nvbm5lY3RlZCBub2Rlc1xuXHRcdFx0XHRcdGlmIChyZXQgfHwgc3VwcG9ydC5kaXNjb25uZWN0ZWRNYXRjaCB8fFxuXHRcdFx0XHRcdC8vIEFzIHdlbGwsIGRpc2Nvbm5lY3RlZCBub2RlcyBhcmUgc2FpZCB0byBiZSBpbiBhIGRvY3VtZW50XG5cdFx0XHRcdFx0Ly8gZnJhZ21lbnQgaW4gSUUgOVxuXHRcdFx0XHRcdGVsZW0uZG9jdW1lbnQgJiYgZWxlbS5kb2N1bWVudC5ub2RlVHlwZSAhPT0gMTEpIHtcblx0XHRcdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gU2l6emxlKGV4cHIsIGRvY3VtZW50LCBudWxsLCBbZWxlbV0pLmxlbmd0aCA+IDA7XG5cdFx0fTtcblxuXHRcdFNpenpsZS5jb250YWlucyA9IGZ1bmN0aW9uIChjb250ZXh0LCBlbGVtKSB7XG5cdFx0XHQvLyBTZXQgZG9jdW1lbnQgdmFycyBpZiBuZWVkZWRcblx0XHRcdGlmICgoY29udGV4dC5vd25lckRvY3VtZW50IHx8IGNvbnRleHQpICE9PSBkb2N1bWVudCkge1xuXHRcdFx0XHRzZXREb2N1bWVudChjb250ZXh0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBjb250YWlucyhjb250ZXh0LCBlbGVtKTtcblx0XHR9O1xuXG5cdFx0U2l6emxlLmF0dHIgPSBmdW5jdGlvbiAoZWxlbSwgbmFtZSkge1xuXHRcdFx0Ly8gU2V0IGRvY3VtZW50IHZhcnMgaWYgbmVlZGVkXG5cdFx0XHRpZiAoKGVsZW0ub3duZXJEb2N1bWVudCB8fCBlbGVtKSAhPT0gZG9jdW1lbnQpIHtcblx0XHRcdFx0c2V0RG9jdW1lbnQoZWxlbSk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBmbiA9IEV4cHIuYXR0ckhhbmRsZVtuYW1lLnRvTG93ZXJDYXNlKCldLFxuXG5cdFx0XHQvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IE9iamVjdC5wcm90b3R5cGUgcHJvcGVydGllcyAoalF1ZXJ5ICMxMzgwNylcblx0XHRcdHZhbCA9IGZuICYmIGhhc093bi5jYWxsKEV4cHIuYXR0ckhhbmRsZSwgbmFtZS50b0xvd2VyQ2FzZSgpKSA/IGZuKGVsZW0sIG5hbWUsICFkb2N1bWVudElzSFRNTCkgOiB1bmRlZmluZWQ7XG5cblx0XHRcdHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA6IHN1cHBvcnQuYXR0cmlidXRlcyB8fCAhZG9jdW1lbnRJc0hUTUwgPyBlbGVtLmdldEF0dHJpYnV0ZShuYW1lKSA6ICh2YWwgPSBlbGVtLmdldEF0dHJpYnV0ZU5vZGUobmFtZSkpICYmIHZhbC5zcGVjaWZpZWQgPyB2YWwudmFsdWUgOiBudWxsO1xuXHRcdH07XG5cblx0XHRTaXp6bGUuZXNjYXBlID0gZnVuY3Rpb24gKHNlbCkge1xuXHRcdFx0cmV0dXJuIChzZWwgKyBcIlwiKS5yZXBsYWNlKHJjc3Nlc2NhcGUsIGZjc3Nlc2NhcGUpO1xuXHRcdH07XG5cblx0XHRTaXp6bGUuZXJyb3IgPSBmdW5jdGlvbiAobXNnKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIiArIG1zZyk7XG5cdFx0fTtcblxuXHRcdC8qKlxuICAgKiBEb2N1bWVudCBzb3J0aW5nIGFuZCByZW1vdmluZyBkdXBsaWNhdGVzXG4gICAqIEBwYXJhbSB7QXJyYXlMaWtlfSByZXN1bHRzXG4gICAqL1xuXHRcdFNpenpsZS51bmlxdWVTb3J0ID0gZnVuY3Rpb24gKHJlc3VsdHMpIHtcblx0XHRcdHZhciBlbGVtLFxuXHRcdFx0ICAgIGR1cGxpY2F0ZXMgPSBbXSxcblx0XHRcdCAgICBqID0gMCxcblx0XHRcdCAgICBpID0gMDtcblxuXHRcdFx0Ly8gVW5sZXNzIHdlICprbm93KiB3ZSBjYW4gZGV0ZWN0IGR1cGxpY2F0ZXMsIGFzc3VtZSB0aGVpciBwcmVzZW5jZVxuXHRcdFx0aGFzRHVwbGljYXRlID0gIXN1cHBvcnQuZGV0ZWN0RHVwbGljYXRlcztcblx0XHRcdHNvcnRJbnB1dCA9ICFzdXBwb3J0LnNvcnRTdGFibGUgJiYgcmVzdWx0cy5zbGljZSgwKTtcblx0XHRcdHJlc3VsdHMuc29ydChzb3J0T3JkZXIpO1xuXG5cdFx0XHRpZiAoaGFzRHVwbGljYXRlKSB7XG5cdFx0XHRcdHdoaWxlIChlbGVtID0gcmVzdWx0c1tpKytdKSB7XG5cdFx0XHRcdFx0aWYgKGVsZW0gPT09IHJlc3VsdHNbaV0pIHtcblx0XHRcdFx0XHRcdGogPSBkdXBsaWNhdGVzLnB1c2goaSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHdoaWxlIChqLS0pIHtcblx0XHRcdFx0XHRyZXN1bHRzLnNwbGljZShkdXBsaWNhdGVzW2pdLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBDbGVhciBpbnB1dCBhZnRlciBzb3J0aW5nIHRvIHJlbGVhc2Ugb2JqZWN0c1xuXHRcdFx0Ly8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvc2l6emxlL3B1bGwvMjI1XG5cdFx0XHRzb3J0SW5wdXQgPSBudWxsO1xuXG5cdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHR9O1xuXG5cdFx0LyoqXG4gICAqIFV0aWxpdHkgZnVuY3Rpb24gZm9yIHJldHJpZXZpbmcgdGhlIHRleHQgdmFsdWUgb2YgYW4gYXJyYXkgb2YgRE9NIG5vZGVzXG4gICAqIEBwYXJhbSB7QXJyYXl8RWxlbWVudH0gZWxlbVxuICAgKi9cblx0XHRnZXRUZXh0ID0gU2l6emxlLmdldFRleHQgPSBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdFx0dmFyIG5vZGUsXG5cdFx0XHQgICAgcmV0ID0gXCJcIixcblx0XHRcdCAgICBpID0gMCxcblx0XHRcdCAgICBub2RlVHlwZSA9IGVsZW0ubm9kZVR5cGU7XG5cblx0XHRcdGlmICghbm9kZVR5cGUpIHtcblx0XHRcdFx0Ly8gSWYgbm8gbm9kZVR5cGUsIHRoaXMgaXMgZXhwZWN0ZWQgdG8gYmUgYW4gYXJyYXlcblx0XHRcdFx0d2hpbGUgKG5vZGUgPSBlbGVtW2krK10pIHtcblx0XHRcdFx0XHQvLyBEbyBub3QgdHJhdmVyc2UgY29tbWVudCBub2Rlc1xuXHRcdFx0XHRcdHJldCArPSBnZXRUZXh0KG5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKG5vZGVUeXBlID09PSAxIHx8IG5vZGVUeXBlID09PSA5IHx8IG5vZGVUeXBlID09PSAxMSkge1xuXHRcdFx0XHQvLyBVc2UgdGV4dENvbnRlbnQgZm9yIGVsZW1lbnRzXG5cdFx0XHRcdC8vIGlubmVyVGV4dCB1c2FnZSByZW1vdmVkIGZvciBjb25zaXN0ZW5jeSBvZiBuZXcgbGluZXMgKGpRdWVyeSAjMTExNTMpXG5cdFx0XHRcdGlmICh0eXBlb2YgZWxlbS50ZXh0Q29udGVudCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRcdHJldHVybiBlbGVtLnRleHRDb250ZW50O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIFRyYXZlcnNlIGl0cyBjaGlsZHJlblxuXHRcdFx0XHRcdGZvciAoZWxlbSA9IGVsZW0uZmlyc3RDaGlsZDsgZWxlbTsgZWxlbSA9IGVsZW0ubmV4dFNpYmxpbmcpIHtcblx0XHRcdFx0XHRcdHJldCArPSBnZXRUZXh0KGVsZW0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChub2RlVHlwZSA9PT0gMyB8fCBub2RlVHlwZSA9PT0gNCkge1xuXHRcdFx0XHRyZXR1cm4gZWxlbS5ub2RlVmFsdWU7XG5cdFx0XHR9XG5cdFx0XHQvLyBEbyBub3QgaW5jbHVkZSBjb21tZW50IG9yIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24gbm9kZXNcblxuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9O1xuXG5cdFx0RXhwciA9IFNpenpsZS5zZWxlY3RvcnMgPSB7XG5cblx0XHRcdC8vIENhbiBiZSBhZGp1c3RlZCBieSB0aGUgdXNlclxuXHRcdFx0Y2FjaGVMZW5ndGg6IDUwLFxuXG5cdFx0XHRjcmVhdGVQc2V1ZG86IG1hcmtGdW5jdGlvbixcblxuXHRcdFx0bWF0Y2g6IG1hdGNoRXhwcixcblxuXHRcdFx0YXR0ckhhbmRsZToge30sXG5cblx0XHRcdGZpbmQ6IHt9LFxuXG5cdFx0XHRyZWxhdGl2ZToge1xuXHRcdFx0XHRcIj5cIjogeyBkaXI6IFwicGFyZW50Tm9kZVwiLCBmaXJzdDogdHJ1ZSB9LFxuXHRcdFx0XHRcIiBcIjogeyBkaXI6IFwicGFyZW50Tm9kZVwiIH0sXG5cdFx0XHRcdFwiK1wiOiB7IGRpcjogXCJwcmV2aW91c1NpYmxpbmdcIiwgZmlyc3Q6IHRydWUgfSxcblx0XHRcdFx0XCJ+XCI6IHsgZGlyOiBcInByZXZpb3VzU2libGluZ1wiIH1cblx0XHRcdH0sXG5cblx0XHRcdHByZUZpbHRlcjoge1xuXHRcdFx0XHRcIkFUVFJcIjogZnVuY3Rpb24gQVRUUihtYXRjaCkge1xuXHRcdFx0XHRcdG1hdGNoWzFdID0gbWF0Y2hbMV0ucmVwbGFjZShydW5lc2NhcGUsIGZ1bmVzY2FwZSk7XG5cblx0XHRcdFx0XHQvLyBNb3ZlIHRoZSBnaXZlbiB2YWx1ZSB0byBtYXRjaFszXSB3aGV0aGVyIHF1b3RlZCBvciB1bnF1b3RlZFxuXHRcdFx0XHRcdG1hdGNoWzNdID0gKG1hdGNoWzNdIHx8IG1hdGNoWzRdIHx8IG1hdGNoWzVdIHx8IFwiXCIpLnJlcGxhY2UocnVuZXNjYXBlLCBmdW5lc2NhcGUpO1xuXG5cdFx0XHRcdFx0aWYgKG1hdGNoWzJdID09PSBcIn49XCIpIHtcblx0XHRcdFx0XHRcdG1hdGNoWzNdID0gXCIgXCIgKyBtYXRjaFszXSArIFwiIFwiO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBtYXRjaC5zbGljZSgwLCA0KTtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHRcIkNISUxEXCI6IGZ1bmN0aW9uIENISUxEKG1hdGNoKSB7XG5cdFx0XHRcdFx0LyogbWF0Y2hlcyBmcm9tIG1hdGNoRXhwcltcIkNISUxEXCJdXG4gICAgIFx0MSB0eXBlIChvbmx5fG50aHwuLi4pXG4gICAgIFx0MiB3aGF0IChjaGlsZHxvZi10eXBlKVxuICAgICBcdDMgYXJndW1lbnQgKGV2ZW58b2RkfFxcZCp8XFxkKm4oWystXVxcZCspP3wuLi4pXG4gICAgIFx0NCB4bi1jb21wb25lbnQgb2YgeG4reSBhcmd1bWVudCAoWystXT9cXGQqbnwpXG4gICAgIFx0NSBzaWduIG9mIHhuLWNvbXBvbmVudFxuICAgICBcdDYgeCBvZiB4bi1jb21wb25lbnRcbiAgICAgXHQ3IHNpZ24gb2YgeS1jb21wb25lbnRcbiAgICAgXHQ4IHkgb2YgeS1jb21wb25lbnRcbiAgICAgKi9cblx0XHRcdFx0XHRtYXRjaFsxXSA9IG1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRcdFx0XHRpZiAobWF0Y2hbMV0uc2xpY2UoMCwgMykgPT09IFwibnRoXCIpIHtcblx0XHRcdFx0XHRcdC8vIG50aC0qIHJlcXVpcmVzIGFyZ3VtZW50XG5cdFx0XHRcdFx0XHRpZiAoIW1hdGNoWzNdKSB7XG5cdFx0XHRcdFx0XHRcdFNpenpsZS5lcnJvcihtYXRjaFswXSk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIG51bWVyaWMgeCBhbmQgeSBwYXJhbWV0ZXJzIGZvciBFeHByLmZpbHRlci5DSElMRFxuXHRcdFx0XHRcdFx0Ly8gcmVtZW1iZXIgdGhhdCBmYWxzZS90cnVlIGNhc3QgcmVzcGVjdGl2ZWx5IHRvIDAvMVxuXHRcdFx0XHRcdFx0bWF0Y2hbNF0gPSArKG1hdGNoWzRdID8gbWF0Y2hbNV0gKyAobWF0Y2hbNl0gfHwgMSkgOiAyICogKG1hdGNoWzNdID09PSBcImV2ZW5cIiB8fCBtYXRjaFszXSA9PT0gXCJvZGRcIikpO1xuXHRcdFx0XHRcdFx0bWF0Y2hbNV0gPSArKG1hdGNoWzddICsgbWF0Y2hbOF0gfHwgbWF0Y2hbM10gPT09IFwib2RkXCIpO1xuXG5cdFx0XHRcdFx0XHQvLyBvdGhlciB0eXBlcyBwcm9oaWJpdCBhcmd1bWVudHNcblx0XHRcdFx0XHR9IGVsc2UgaWYgKG1hdGNoWzNdKSB7XG5cdFx0XHRcdFx0XHRTaXp6bGUuZXJyb3IobWF0Y2hbMF0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHRcIlBTRVVET1wiOiBmdW5jdGlvbiBQU0VVRE8obWF0Y2gpIHtcblx0XHRcdFx0XHR2YXIgZXhjZXNzLFxuXHRcdFx0XHRcdCAgICB1bnF1b3RlZCA9ICFtYXRjaFs2XSAmJiBtYXRjaFsyXTtcblxuXHRcdFx0XHRcdGlmIChtYXRjaEV4cHJbXCJDSElMRFwiXS50ZXN0KG1hdGNoWzBdKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gQWNjZXB0IHF1b3RlZCBhcmd1bWVudHMgYXMtaXNcblx0XHRcdFx0XHRpZiAobWF0Y2hbM10pIHtcblx0XHRcdFx0XHRcdG1hdGNoWzJdID0gbWF0Y2hbNF0gfHwgbWF0Y2hbNV0gfHwgXCJcIjtcblxuXHRcdFx0XHRcdFx0Ly8gU3RyaXAgZXhjZXNzIGNoYXJhY3RlcnMgZnJvbSB1bnF1b3RlZCBhcmd1bWVudHNcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHVucXVvdGVkICYmIHJwc2V1ZG8udGVzdCh1bnF1b3RlZCkgJiYgKFxuXHRcdFx0XHRcdC8vIEdldCBleGNlc3MgZnJvbSB0b2tlbml6ZSAocmVjdXJzaXZlbHkpXG5cdFx0XHRcdFx0ZXhjZXNzID0gdG9rZW5pemUodW5xdW90ZWQsIHRydWUpKSAmJiAoXG5cdFx0XHRcdFx0Ly8gYWR2YW5jZSB0byB0aGUgbmV4dCBjbG9zaW5nIHBhcmVudGhlc2lzXG5cdFx0XHRcdFx0ZXhjZXNzID0gdW5xdW90ZWQuaW5kZXhPZihcIilcIiwgdW5xdW90ZWQubGVuZ3RoIC0gZXhjZXNzKSAtIHVucXVvdGVkLmxlbmd0aCkpIHtcblxuXHRcdFx0XHRcdFx0Ly8gZXhjZXNzIGlzIGEgbmVnYXRpdmUgaW5kZXhcblx0XHRcdFx0XHRcdG1hdGNoWzBdID0gbWF0Y2hbMF0uc2xpY2UoMCwgZXhjZXNzKTtcblx0XHRcdFx0XHRcdG1hdGNoWzJdID0gdW5xdW90ZWQuc2xpY2UoMCwgZXhjZXNzKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBSZXR1cm4gb25seSBjYXB0dXJlcyBuZWVkZWQgYnkgdGhlIHBzZXVkbyBmaWx0ZXIgbWV0aG9kICh0eXBlIGFuZCBhcmd1bWVudClcblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2guc2xpY2UoMCwgMyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdGZpbHRlcjoge1xuXG5cdFx0XHRcdFwiVEFHXCI6IGZ1bmN0aW9uIFRBRyhub2RlTmFtZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dmFyIG5vZGVOYW1lID0gbm9kZU5hbWVTZWxlY3Rvci5yZXBsYWNlKHJ1bmVzY2FwZSwgZnVuZXNjYXBlKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdHJldHVybiBub2RlTmFtZVNlbGVjdG9yID09PSBcIipcIiA/IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH0gOiBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0ubm9kZU5hbWUgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBub2RlTmFtZTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdFwiQ0xBU1NcIjogZnVuY3Rpb24gQ0xBU1MoY2xhc3NOYW1lKSB7XG5cdFx0XHRcdFx0dmFyIHBhdHRlcm4gPSBjbGFzc0NhY2hlW2NsYXNzTmFtZSArIFwiIFwiXTtcblxuXHRcdFx0XHRcdHJldHVybiBwYXR0ZXJuIHx8IChwYXR0ZXJuID0gbmV3IFJlZ0V4cChcIihefFwiICsgd2hpdGVzcGFjZSArIFwiKVwiICsgY2xhc3NOYW1lICsgXCIoXCIgKyB3aGl0ZXNwYWNlICsgXCJ8JClcIikpICYmIGNsYXNzQ2FjaGUoY2xhc3NOYW1lLCBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHBhdHRlcm4udGVzdCh0eXBlb2YgZWxlbS5jbGFzc05hbWUgPT09IFwic3RyaW5nXCIgJiYgZWxlbS5jbGFzc05hbWUgfHwgdHlwZW9mIGVsZW0uZ2V0QXR0cmlidXRlICE9PSBcInVuZGVmaW5lZFwiICYmIGVsZW0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgfHwgXCJcIik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0XCJBVFRSXCI6IGZ1bmN0aW9uIEFUVFIobmFtZSwgb3BlcmF0b3IsIGNoZWNrKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHRcdFx0XHR2YXIgcmVzdWx0ID0gU2l6emxlLmF0dHIoZWxlbSwgbmFtZSk7XG5cblx0XHRcdFx0XHRcdGlmIChyZXN1bHQgPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gb3BlcmF0b3IgPT09IFwiIT1cIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICghb3BlcmF0b3IpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJlc3VsdCArPSBcIlwiO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gb3BlcmF0b3IgPT09IFwiPVwiID8gcmVzdWx0ID09PSBjaGVjayA6IG9wZXJhdG9yID09PSBcIiE9XCIgPyByZXN1bHQgIT09IGNoZWNrIDogb3BlcmF0b3IgPT09IFwiXj1cIiA/IGNoZWNrICYmIHJlc3VsdC5pbmRleE9mKGNoZWNrKSA9PT0gMCA6IG9wZXJhdG9yID09PSBcIio9XCIgPyBjaGVjayAmJiByZXN1bHQuaW5kZXhPZihjaGVjaykgPiAtMSA6IG9wZXJhdG9yID09PSBcIiQ9XCIgPyBjaGVjayAmJiByZXN1bHQuc2xpY2UoLWNoZWNrLmxlbmd0aCkgPT09IGNoZWNrIDogb3BlcmF0b3IgPT09IFwifj1cIiA/IChcIiBcIiArIHJlc3VsdC5yZXBsYWNlKHJ3aGl0ZXNwYWNlLCBcIiBcIikgKyBcIiBcIikuaW5kZXhPZihjaGVjaykgPiAtMSA6IG9wZXJhdG9yID09PSBcInw9XCIgPyByZXN1bHQgPT09IGNoZWNrIHx8IHJlc3VsdC5zbGljZSgwLCBjaGVjay5sZW5ndGggKyAxKSA9PT0gY2hlY2sgKyBcIi1cIiA6IGZhbHNlO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0XCJDSElMRFwiOiBmdW5jdGlvbiBDSElMRCh0eXBlLCB3aGF0LCBhcmd1bWVudCwgZmlyc3QsIGxhc3QpIHtcblx0XHRcdFx0XHR2YXIgc2ltcGxlID0gdHlwZS5zbGljZSgwLCAzKSAhPT0gXCJudGhcIixcblx0XHRcdFx0XHQgICAgZm9yd2FyZCA9IHR5cGUuc2xpY2UoLTQpICE9PSBcImxhc3RcIixcblx0XHRcdFx0XHQgICAgb2ZUeXBlID0gd2hhdCA9PT0gXCJvZi10eXBlXCI7XG5cblx0XHRcdFx0XHRyZXR1cm4gZmlyc3QgPT09IDEgJiYgbGFzdCA9PT0gMCA/XG5cblx0XHRcdFx0XHQvLyBTaG9ydGN1dCBmb3IgOm50aC0qKG4pXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRcdFx0XHRcdHJldHVybiAhIWVsZW0ucGFyZW50Tm9kZTtcblx0XHRcdFx0XHR9IDogZnVuY3Rpb24gKGVsZW0sIGNvbnRleHQsIHhtbCkge1xuXHRcdFx0XHRcdFx0dmFyIGNhY2hlLFxuXHRcdFx0XHRcdFx0ICAgIHVuaXF1ZUNhY2hlLFxuXHRcdFx0XHRcdFx0ICAgIG91dGVyQ2FjaGUsXG5cdFx0XHRcdFx0XHQgICAgbm9kZSxcblx0XHRcdFx0XHRcdCAgICBub2RlSW5kZXgsXG5cdFx0XHRcdFx0XHQgICAgc3RhcnQsXG5cdFx0XHRcdFx0XHQgICAgZGlyID0gc2ltcGxlICE9PSBmb3J3YXJkID8gXCJuZXh0U2libGluZ1wiIDogXCJwcmV2aW91c1NpYmxpbmdcIixcblx0XHRcdFx0XHRcdCAgICBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGUsXG5cdFx0XHRcdFx0XHQgICAgbmFtZSA9IG9mVHlwZSAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksXG5cdFx0XHRcdFx0XHQgICAgdXNlQ2FjaGUgPSAheG1sICYmICFvZlR5cGUsXG5cdFx0XHRcdFx0XHQgICAgZGlmZiA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0XHRpZiAocGFyZW50KSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gOihmaXJzdHxsYXN0fG9ubHkpLShjaGlsZHxvZi10eXBlKVxuXHRcdFx0XHRcdFx0XHRpZiAoc2ltcGxlKSB7XG5cdFx0XHRcdFx0XHRcdFx0d2hpbGUgKGRpcikge1xuXHRcdFx0XHRcdFx0XHRcdFx0bm9kZSA9IGVsZW07XG5cdFx0XHRcdFx0XHRcdFx0XHR3aGlsZSAobm9kZSA9IG5vZGVbZGlyXSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAob2ZUeXBlID8gbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lIDogbm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBSZXZlcnNlIGRpcmVjdGlvbiBmb3IgOm9ubHktKiAoaWYgd2UgaGF2ZW4ndCB5ZXQgZG9uZSBzbylcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXJ0ID0gZGlyID0gdHlwZSA9PT0gXCJvbmx5XCIgJiYgIXN0YXJ0ICYmIFwibmV4dFNpYmxpbmdcIjtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRzdGFydCA9IFtmb3J3YXJkID8gcGFyZW50LmZpcnN0Q2hpbGQgOiBwYXJlbnQubGFzdENoaWxkXTtcblxuXHRcdFx0XHRcdFx0XHQvLyBub24teG1sIDpudGgtY2hpbGQoLi4uKSBzdG9yZXMgY2FjaGUgZGF0YSBvbiBgcGFyZW50YFxuXHRcdFx0XHRcdFx0XHRpZiAoZm9yd2FyZCAmJiB1c2VDYWNoZSkge1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gU2VlayBgZWxlbWAgZnJvbSBhIHByZXZpb3VzbHktY2FjaGVkIGluZGV4XG5cblx0XHRcdFx0XHRcdFx0XHQvLyAuLi5pbiBhIGd6aXAtZnJpZW5kbHkgd2F5XG5cdFx0XHRcdFx0XHRcdFx0bm9kZSA9IHBhcmVudDtcblx0XHRcdFx0XHRcdFx0XHRvdXRlckNhY2hlID0gbm9kZVtleHBhbmRvXSB8fCAobm9kZVtleHBhbmRvXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw5IG9ubHlcblx0XHRcdFx0XHRcdFx0XHQvLyBEZWZlbmQgYWdhaW5zdCBjbG9uZWQgYXR0cm9wZXJ0aWVzIChqUXVlcnkgZ2gtMTcwOSlcblx0XHRcdFx0XHRcdFx0XHR1bmlxdWVDYWNoZSA9IG91dGVyQ2FjaGVbbm9kZS51bmlxdWVJRF0gfHwgKG91dGVyQ2FjaGVbbm9kZS51bmlxdWVJRF0gPSB7fSk7XG5cblx0XHRcdFx0XHRcdFx0XHRjYWNoZSA9IHVuaXF1ZUNhY2hlW3R5cGVdIHx8IFtdO1xuXHRcdFx0XHRcdFx0XHRcdG5vZGVJbmRleCA9IGNhY2hlWzBdID09PSBkaXJydW5zICYmIGNhY2hlWzFdO1xuXHRcdFx0XHRcdFx0XHRcdGRpZmYgPSBub2RlSW5kZXggJiYgY2FjaGVbMl07XG5cdFx0XHRcdFx0XHRcdFx0bm9kZSA9IG5vZGVJbmRleCAmJiBwYXJlbnQuY2hpbGROb2Rlc1tub2RlSW5kZXhdO1xuXG5cdFx0XHRcdFx0XHRcdFx0d2hpbGUgKG5vZGUgPSArK25vZGVJbmRleCAmJiBub2RlICYmIG5vZGVbZGlyXSB8fCAoXG5cblx0XHRcdFx0XHRcdFx0XHQvLyBGYWxsYmFjayB0byBzZWVraW5nIGBlbGVtYCBmcm9tIHRoZSBzdGFydFxuXHRcdFx0XHRcdFx0XHRcdGRpZmYgPSBub2RlSW5kZXggPSAwKSB8fCBzdGFydC5wb3AoKSkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBXaGVuIGZvdW5kLCBjYWNoZSBpbmRleGVzIG9uIGBwYXJlbnRgIGFuZCBicmVha1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG5vZGUubm9kZVR5cGUgPT09IDEgJiYgKytkaWZmICYmIG5vZGUgPT09IGVsZW0pIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pcXVlQ2FjaGVbdHlwZV0gPSBbZGlycnVucywgbm9kZUluZGV4LCBkaWZmXTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdC8vIFVzZSBwcmV2aW91c2x5LWNhY2hlZCBlbGVtZW50IGluZGV4IGlmIGF2YWlsYWJsZVxuXHRcdFx0XHRcdFx0XHRcdGlmICh1c2VDYWNoZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gLi4uaW4gYSBnemlwLWZyaWVuZGx5IHdheVxuXHRcdFx0XHRcdFx0XHRcdFx0bm9kZSA9IGVsZW07XG5cdFx0XHRcdFx0XHRcdFx0XHRvdXRlckNhY2hlID0gbm9kZVtleHBhbmRvXSB8fCAobm9kZVtleHBhbmRvXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPDkgb25seVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gRGVmZW5kIGFnYWluc3QgY2xvbmVkIGF0dHJvcGVydGllcyAoalF1ZXJ5IGdoLTE3MDkpXG5cdFx0XHRcdFx0XHRcdFx0XHR1bmlxdWVDYWNoZSA9IG91dGVyQ2FjaGVbbm9kZS51bmlxdWVJRF0gfHwgKG91dGVyQ2FjaGVbbm9kZS51bmlxdWVJRF0gPSB7fSk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdGNhY2hlID0gdW5pcXVlQ2FjaGVbdHlwZV0gfHwgW107XG5cdFx0XHRcdFx0XHRcdFx0XHRub2RlSW5kZXggPSBjYWNoZVswXSA9PT0gZGlycnVucyAmJiBjYWNoZVsxXTtcblx0XHRcdFx0XHRcdFx0XHRcdGRpZmYgPSBub2RlSW5kZXg7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Ly8geG1sIDpudGgtY2hpbGQoLi4uKVxuXHRcdFx0XHRcdFx0XHRcdC8vIG9yIDpudGgtbGFzdC1jaGlsZCguLi4pIG9yIDpudGgoLWxhc3QpPy1vZi10eXBlKC4uLilcblx0XHRcdFx0XHRcdFx0XHRpZiAoZGlmZiA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIFVzZSB0aGUgc2FtZSBsb29wIGFzIGFib3ZlIHRvIHNlZWsgYGVsZW1gIGZyb20gdGhlIHN0YXJ0XG5cdFx0XHRcdFx0XHRcdFx0XHR3aGlsZSAobm9kZSA9ICsrbm9kZUluZGV4ICYmIG5vZGUgJiYgbm9kZVtkaXJdIHx8IChkaWZmID0gbm9kZUluZGV4ID0gMCkgfHwgc3RhcnQucG9wKCkpIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoKG9mVHlwZSA/IG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZSA6IG5vZGUubm9kZVR5cGUgPT09IDEpICYmICsrZGlmZikge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gQ2FjaGUgdGhlIGluZGV4IG9mIGVhY2ggZW5jb3VudGVyZWQgZWxlbWVudFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICh1c2VDYWNoZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3V0ZXJDYWNoZSA9IG5vZGVbZXhwYW5kb10gfHwgKG5vZGVbZXhwYW5kb10gPSB7fSk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw5IG9ubHlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIERlZmVuZCBhZ2FpbnN0IGNsb25lZCBhdHRyb3BlcnRpZXMgKGpRdWVyeSBnaC0xNzA5KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pcXVlQ2FjaGUgPSBvdXRlckNhY2hlW25vZGUudW5pcXVlSURdIHx8IChvdXRlckNhY2hlW25vZGUudW5pcXVlSURdID0ge30pO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmlxdWVDYWNoZVt0eXBlXSA9IFtkaXJydW5zLCBkaWZmXTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAobm9kZSA9PT0gZWxlbSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Ly8gSW5jb3Jwb3JhdGUgdGhlIG9mZnNldCwgdGhlbiBjaGVjayBhZ2FpbnN0IGN5Y2xlIHNpemVcblx0XHRcdFx0XHRcdFx0ZGlmZiAtPSBsYXN0O1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZGlmZiA9PT0gZmlyc3QgfHwgZGlmZiAlIGZpcnN0ID09PSAwICYmIGRpZmYgLyBmaXJzdCA+PSAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0XCJQU0VVRE9cIjogZnVuY3Rpb24gUFNFVURPKHBzZXVkbywgYXJndW1lbnQpIHtcblx0XHRcdFx0XHQvLyBwc2V1ZG8tY2xhc3MgbmFtZXMgYXJlIGNhc2UtaW5zZW5zaXRpdmVcblx0XHRcdFx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI3BzZXVkby1jbGFzc2VzXG5cdFx0XHRcdFx0Ly8gUHJpb3JpdGl6ZSBieSBjYXNlIHNlbnNpdGl2aXR5IGluIGNhc2UgY3VzdG9tIHBzZXVkb3MgYXJlIGFkZGVkIHdpdGggdXBwZXJjYXNlIGxldHRlcnNcblx0XHRcdFx0XHQvLyBSZW1lbWJlciB0aGF0IHNldEZpbHRlcnMgaW5oZXJpdHMgZnJvbSBwc2V1ZG9zXG5cdFx0XHRcdFx0dmFyIGFyZ3MsXG5cdFx0XHRcdFx0ICAgIGZuID0gRXhwci5wc2V1ZG9zW3BzZXVkb10gfHwgRXhwci5zZXRGaWx0ZXJzW3BzZXVkby50b0xvd2VyQ2FzZSgpXSB8fCBTaXp6bGUuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiICsgcHNldWRvKTtcblxuXHRcdFx0XHRcdC8vIFRoZSB1c2VyIG1heSB1c2UgY3JlYXRlUHNldWRvIHRvIGluZGljYXRlIHRoYXRcblx0XHRcdFx0XHQvLyBhcmd1bWVudHMgYXJlIG5lZWRlZCB0byBjcmVhdGUgdGhlIGZpbHRlciBmdW5jdGlvblxuXHRcdFx0XHRcdC8vIGp1c3QgYXMgU2l6emxlIGRvZXNcblx0XHRcdFx0XHRpZiAoZm5bZXhwYW5kb10pIHtcblx0XHRcdFx0XHRcdHJldHVybiBmbihhcmd1bWVudCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gQnV0IG1haW50YWluIHN1cHBvcnQgZm9yIG9sZCBzaWduYXR1cmVzXG5cdFx0XHRcdFx0aWYgKGZuLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdGFyZ3MgPSBbcHNldWRvLCBwc2V1ZG8sIFwiXCIsIGFyZ3VtZW50XTtcblx0XHRcdFx0XHRcdHJldHVybiBFeHByLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkocHNldWRvLnRvTG93ZXJDYXNlKCkpID8gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uIChzZWVkLCBtYXRjaGVzKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBpZHgsXG5cdFx0XHRcdFx0XHRcdCAgICBtYXRjaGVkID0gZm4oc2VlZCwgYXJndW1lbnQpLFxuXHRcdFx0XHRcdFx0XHQgICAgaSA9IG1hdGNoZWQubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWR4ID0gaW5kZXhPZihzZWVkLCBtYXRjaGVkW2ldKTtcblx0XHRcdFx0XHRcdFx0XHRzZWVkW2lkeF0gPSAhKG1hdGNoZXNbaWR4XSA9IG1hdGNoZWRbaV0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KSA6IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmbihlbGVtLCAwLCBhcmdzKTtcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIGZuO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRwc2V1ZG9zOiB7XG5cdFx0XHRcdC8vIFBvdGVudGlhbGx5IGNvbXBsZXggcHNldWRvc1xuXHRcdFx0XHRcIm5vdFwiOiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0Ly8gVHJpbSB0aGUgc2VsZWN0b3IgcGFzc2VkIHRvIGNvbXBpbGVcblx0XHRcdFx0XHQvLyB0byBhdm9pZCB0cmVhdGluZyBsZWFkaW5nIGFuZCB0cmFpbGluZ1xuXHRcdFx0XHRcdC8vIHNwYWNlcyBhcyBjb21iaW5hdG9yc1xuXHRcdFx0XHRcdHZhciBpbnB1dCA9IFtdLFxuXHRcdFx0XHRcdCAgICByZXN1bHRzID0gW10sXG5cdFx0XHRcdFx0ICAgIG1hdGNoZXIgPSBjb21waWxlKHNlbGVjdG9yLnJlcGxhY2UocnRyaW0sIFwiJDFcIikpO1xuXG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoZXJbZXhwYW5kb10gPyBtYXJrRnVuY3Rpb24oZnVuY3Rpb24gKHNlZWQsIG1hdGNoZXMsIGNvbnRleHQsIHhtbCkge1xuXHRcdFx0XHRcdFx0dmFyIGVsZW0sXG5cdFx0XHRcdFx0XHQgICAgdW5tYXRjaGVkID0gbWF0Y2hlcihzZWVkLCBudWxsLCB4bWwsIFtdKSxcblx0XHRcdFx0XHRcdCAgICBpID0gc2VlZC5sZW5ndGg7XG5cblx0XHRcdFx0XHRcdC8vIE1hdGNoIGVsZW1lbnRzIHVubWF0Y2hlZCBieSBgbWF0Y2hlcmBcblx0XHRcdFx0XHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdFx0XHRcdFx0aWYgKGVsZW0gPSB1bm1hdGNoZWRbaV0pIHtcblx0XHRcdFx0XHRcdFx0XHRzZWVkW2ldID0gIShtYXRjaGVzW2ldID0gZWxlbSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KSA6IGZ1bmN0aW9uIChlbGVtLCBjb250ZXh0LCB4bWwpIHtcblx0XHRcdFx0XHRcdGlucHV0WzBdID0gZWxlbTtcblx0XHRcdFx0XHRcdG1hdGNoZXIoaW5wdXQsIG51bGwsIHhtbCwgcmVzdWx0cyk7XG5cdFx0XHRcdFx0XHQvLyBEb24ndCBrZWVwIHRoZSBlbGVtZW50IChpc3N1ZSAjMjk5KVxuXHRcdFx0XHRcdFx0aW5wdXRbMF0gPSBudWxsO1xuXHRcdFx0XHRcdFx0cmV0dXJuICFyZXN1bHRzLnBvcCgpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0pLFxuXG5cdFx0XHRcdFwiaGFzXCI6IG1hcmtGdW5jdGlvbihmdW5jdGlvbiAoc2VsZWN0b3IpIHtcblx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRcdFx0XHRcdHJldHVybiBTaXp6bGUoc2VsZWN0b3IsIGVsZW0pLmxlbmd0aCA+IDA7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSksXG5cblx0XHRcdFx0XCJjb250YWluc1wiOiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24gKHRleHQpIHtcblx0XHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKHJ1bmVzY2FwZSwgZnVuZXNjYXBlKTtcblx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRcdFx0XHRcdHJldHVybiAoZWxlbS50ZXh0Q29udGVudCB8fCBlbGVtLmlubmVyVGV4dCB8fCBnZXRUZXh0KGVsZW0pKS5pbmRleE9mKHRleHQpID4gLTE7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSksXG5cblx0XHRcdFx0Ly8gXCJXaGV0aGVyIGFuIGVsZW1lbnQgaXMgcmVwcmVzZW50ZWQgYnkgYSA6bGFuZygpIHNlbGVjdG9yXG5cdFx0XHRcdC8vIGlzIGJhc2VkIHNvbGVseSBvbiB0aGUgZWxlbWVudCdzIGxhbmd1YWdlIHZhbHVlXG5cdFx0XHRcdC8vIGJlaW5nIGVxdWFsIHRvIHRoZSBpZGVudGlmaWVyIEMsXG5cdFx0XHRcdC8vIG9yIGJlZ2lubmluZyB3aXRoIHRoZSBpZGVudGlmaWVyIEMgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgXCItXCIuXG5cdFx0XHRcdC8vIFRoZSBtYXRjaGluZyBvZiBDIGFnYWluc3QgdGhlIGVsZW1lbnQncyBsYW5ndWFnZSB2YWx1ZSBpcyBwZXJmb3JtZWQgY2FzZS1pbnNlbnNpdGl2ZWx5LlxuXHRcdFx0XHQvLyBUaGUgaWRlbnRpZmllciBDIGRvZXMgbm90IGhhdmUgdG8gYmUgYSB2YWxpZCBsYW5ndWFnZSBuYW1lLlwiXG5cdFx0XHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jbGFuZy1wc2V1ZG9cblx0XHRcdFx0XCJsYW5nXCI6IG1hcmtGdW5jdGlvbihmdW5jdGlvbiAobGFuZykge1xuXHRcdFx0XHRcdC8vIGxhbmcgdmFsdWUgbXVzdCBiZSBhIHZhbGlkIGlkZW50aWZpZXJcblx0XHRcdFx0XHRpZiAoIXJpZGVudGlmaWVyLnRlc3QobGFuZyB8fCBcIlwiKSkge1xuXHRcdFx0XHRcdFx0U2l6emxlLmVycm9yKFwidW5zdXBwb3J0ZWQgbGFuZzogXCIgKyBsYW5nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bGFuZyA9IGxhbmcucmVwbGFjZShydW5lc2NhcGUsIGZ1bmVzY2FwZSkudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRcdFx0XHRcdHZhciBlbGVtTGFuZztcblx0XHRcdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRcdFx0aWYgKGVsZW1MYW5nID0gZG9jdW1lbnRJc0hUTUwgPyBlbGVtLmxhbmcgOiBlbGVtLmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpIHx8IGVsZW0uZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSkge1xuXG5cdFx0XHRcdFx0XHRcdFx0ZWxlbUxhbmcgPSBlbGVtTGFuZy50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtTGFuZyA9PT0gbGFuZyB8fCBlbGVtTGFuZy5pbmRleE9mKGxhbmcgKyBcIi1cIikgPT09IDA7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gd2hpbGUgKChlbGVtID0gZWxlbS5wYXJlbnROb2RlKSAmJiBlbGVtLm5vZGVUeXBlID09PSAxKTtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9KSxcblxuXHRcdFx0XHQvLyBNaXNjZWxsYW5lb3VzXG5cdFx0XHRcdFwidGFyZ2V0XCI6IGZ1bmN0aW9uIHRhcmdldChlbGVtKSB7XG5cdFx0XHRcdFx0dmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24gJiYgd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cdFx0XHRcdFx0cmV0dXJuIGhhc2ggJiYgaGFzaC5zbGljZSgxKSA9PT0gZWxlbS5pZDtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHRcInJvb3RcIjogZnVuY3Rpb24gcm9vdChlbGVtKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsZW0gPT09IGRvY0VsZW07XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0XCJmb2N1c1wiOiBmdW5jdGlvbiBmb2N1cyhlbGVtKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsZW0gPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgKCFkb2N1bWVudC5oYXNGb2N1cyB8fCBkb2N1bWVudC5oYXNGb2N1cygpKSAmJiAhIShlbGVtLnR5cGUgfHwgZWxlbS5ocmVmIHx8IH5lbGVtLnRhYkluZGV4KTtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBCb29sZWFuIHByb3BlcnRpZXNcblx0XHRcdFx0XCJlbmFibGVkXCI6IGNyZWF0ZURpc2FibGVkUHNldWRvKGZhbHNlKSxcblx0XHRcdFx0XCJkaXNhYmxlZFwiOiBjcmVhdGVEaXNhYmxlZFBzZXVkbyh0cnVlKSxcblxuXHRcdFx0XHRcImNoZWNrZWRcIjogZnVuY3Rpb24gY2hlY2tlZChlbGVtKSB7XG5cdFx0XHRcdFx0Ly8gSW4gQ1NTMywgOmNoZWNrZWQgc2hvdWxkIHJldHVybiBib3RoIGNoZWNrZWQgYW5kIHNlbGVjdGVkIGVsZW1lbnRzXG5cdFx0XHRcdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvMjAxMS9SRUMtY3NzMy1zZWxlY3RvcnMtMjAxMTA5MjkvI2NoZWNrZWRcblx0XHRcdFx0XHR2YXIgbm9kZU5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0cmV0dXJuIG5vZGVOYW1lID09PSBcImlucHV0XCIgJiYgISFlbGVtLmNoZWNrZWQgfHwgbm9kZU5hbWUgPT09IFwib3B0aW9uXCIgJiYgISFlbGVtLnNlbGVjdGVkO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdFwic2VsZWN0ZWRcIjogZnVuY3Rpb24gc2VsZWN0ZWQoZWxlbSkge1xuXHRcdFx0XHRcdC8vIEFjY2Vzc2luZyB0aGlzIHByb3BlcnR5IG1ha2VzIHNlbGVjdGVkLWJ5LWRlZmF1bHRcblx0XHRcdFx0XHQvLyBvcHRpb25zIGluIFNhZmFyaSB3b3JrIHByb3Blcmx5XG5cdFx0XHRcdFx0aWYgKGVsZW0ucGFyZW50Tm9kZSkge1xuXHRcdFx0XHRcdFx0ZWxlbS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIGVsZW0uc2VsZWN0ZWQgPT09IHRydWU7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gQ29udGVudHNcblx0XHRcdFx0XCJlbXB0eVwiOiBmdW5jdGlvbiBlbXB0eShlbGVtKSB7XG5cdFx0XHRcdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNlbXB0eS1wc2V1ZG9cblx0XHRcdFx0XHQvLyA6ZW1wdHkgaXMgbmVnYXRlZCBieSBlbGVtZW50ICgxKSBvciBjb250ZW50IG5vZGVzICh0ZXh0OiAzOyBjZGF0YTogNDsgZW50aXR5IHJlZjogNSksXG5cdFx0XHRcdFx0Ly8gICBidXQgbm90IGJ5IG90aGVycyAoY29tbWVudDogODsgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbjogNzsgZXRjLilcblx0XHRcdFx0XHQvLyBub2RlVHlwZSA8IDYgd29ya3MgYmVjYXVzZSBhdHRyaWJ1dGVzICgyKSBkbyBub3QgYXBwZWFyIGFzIGNoaWxkcmVuXG5cdFx0XHRcdFx0Zm9yIChlbGVtID0gZWxlbS5maXJzdENoaWxkOyBlbGVtOyBlbGVtID0gZWxlbS5uZXh0U2libGluZykge1xuXHRcdFx0XHRcdFx0aWYgKGVsZW0ubm9kZVR5cGUgPCA2KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0XCJwYXJlbnRcIjogZnVuY3Rpb24gcGFyZW50KGVsZW0pIHtcblx0XHRcdFx0XHRyZXR1cm4gIUV4cHIucHNldWRvc1tcImVtcHR5XCJdKGVsZW0pO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIEVsZW1lbnQvaW5wdXQgdHlwZXNcblx0XHRcdFx0XCJoZWFkZXJcIjogZnVuY3Rpb24gaGVhZGVyKGVsZW0pIHtcblx0XHRcdFx0XHRyZXR1cm4gcmhlYWRlci50ZXN0KGVsZW0ubm9kZU5hbWUpO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdFwiaW5wdXRcIjogZnVuY3Rpb24gaW5wdXQoZWxlbSkge1xuXHRcdFx0XHRcdHJldHVybiByaW5wdXRzLnRlc3QoZWxlbS5ub2RlTmFtZSk7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0XCJidXR0b25cIjogZnVuY3Rpb24gYnV0dG9uKGVsZW0pIHtcblx0XHRcdFx0XHR2YXIgbmFtZSA9IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRyZXR1cm4gbmFtZSA9PT0gXCJpbnB1dFwiICYmIGVsZW0udHlwZSA9PT0gXCJidXR0b25cIiB8fCBuYW1lID09PSBcImJ1dHRvblwiO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdFwidGV4dFwiOiBmdW5jdGlvbiB0ZXh0KGVsZW0pIHtcblx0XHRcdFx0XHR2YXIgYXR0cjtcblx0XHRcdFx0XHRyZXR1cm4gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImlucHV0XCIgJiYgZWxlbS50eXBlID09PSBcInRleHRcIiAmJiAoXG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRTw4XG5cdFx0XHRcdFx0Ly8gTmV3IEhUTUw1IGF0dHJpYnV0ZSB2YWx1ZXMgKGUuZy4sIFwic2VhcmNoXCIpIGFwcGVhciB3aXRoIGVsZW0udHlwZSA9PT0gXCJ0ZXh0XCJcblx0XHRcdFx0XHQoYXR0ciA9IGVsZW0uZ2V0QXR0cmlidXRlKFwidHlwZVwiKSkgPT0gbnVsbCB8fCBhdHRyLnRvTG93ZXJDYXNlKCkgPT09IFwidGV4dFwiKTtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBQb3NpdGlvbi1pbi1jb2xsZWN0aW9uXG5cdFx0XHRcdFwiZmlyc3RcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFswXTtcblx0XHRcdFx0fSksXG5cblx0XHRcdFx0XCJsYXN0XCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24gKG1hdGNoSW5kZXhlcywgbGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFtsZW5ndGggLSAxXTtcblx0XHRcdFx0fSksXG5cblx0XHRcdFx0XCJlcVwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uIChtYXRjaEluZGV4ZXMsIGxlbmd0aCwgYXJndW1lbnQpIHtcblx0XHRcdFx0XHRyZXR1cm4gW2FyZ3VtZW50IDwgMCA/IGFyZ3VtZW50ICsgbGVuZ3RoIDogYXJndW1lbnRdO1xuXHRcdFx0XHR9KSxcblxuXHRcdFx0XHRcImV2ZW5cIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiAobWF0Y2hJbmRleGVzLCBsZW5ndGgpIHtcblx0XHRcdFx0XHR2YXIgaSA9IDA7XG5cdFx0XHRcdFx0Zm9yICg7IGkgPCBsZW5ndGg7IGkgKz0gMikge1xuXHRcdFx0XHRcdFx0bWF0Y2hJbmRleGVzLnB1c2goaSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBtYXRjaEluZGV4ZXM7XG5cdFx0XHRcdH0pLFxuXG5cdFx0XHRcdFwib2RkXCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24gKG1hdGNoSW5kZXhlcywgbGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFyIGkgPSAxO1xuXHRcdFx0XHRcdGZvciAoOyBpIDwgbGVuZ3RoOyBpICs9IDIpIHtcblx0XHRcdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKGkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdFx0XHR9KSxcblxuXHRcdFx0XHRcImx0XCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24gKG1hdGNoSW5kZXhlcywgbGVuZ3RoLCBhcmd1bWVudCkge1xuXHRcdFx0XHRcdHZhciBpID0gYXJndW1lbnQgPCAwID8gYXJndW1lbnQgKyBsZW5ndGggOiBhcmd1bWVudDtcblx0XHRcdFx0XHRmb3IgKDsgLS1pID49IDA7KSB7XG5cdFx0XHRcdFx0XHRtYXRjaEluZGV4ZXMucHVzaChpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoSW5kZXhlcztcblx0XHRcdFx0fSksXG5cblx0XHRcdFx0XCJndFwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uIChtYXRjaEluZGV4ZXMsIGxlbmd0aCwgYXJndW1lbnQpIHtcblx0XHRcdFx0XHR2YXIgaSA9IGFyZ3VtZW50IDwgMCA/IGFyZ3VtZW50ICsgbGVuZ3RoIDogYXJndW1lbnQ7XG5cdFx0XHRcdFx0Zm9yICg7ICsraSA8IGxlbmd0aDspIHtcblx0XHRcdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKGkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRFeHByLnBzZXVkb3NbXCJudGhcIl0gPSBFeHByLnBzZXVkb3NbXCJlcVwiXTtcblxuXHRcdC8vIEFkZCBidXR0b24vaW5wdXQgdHlwZSBwc2V1ZG9zXG5cdFx0Zm9yIChpIGluIHsgcmFkaW86IHRydWUsIGNoZWNrYm94OiB0cnVlLCBmaWxlOiB0cnVlLCBwYXNzd29yZDogdHJ1ZSwgaW1hZ2U6IHRydWUgfSkge1xuXHRcdFx0RXhwci5wc2V1ZG9zW2ldID0gY3JlYXRlSW5wdXRQc2V1ZG8oaSk7XG5cdFx0fVxuXHRcdGZvciAoaSBpbiB7IHN1Ym1pdDogdHJ1ZSwgcmVzZXQ6IHRydWUgfSkge1xuXHRcdFx0RXhwci5wc2V1ZG9zW2ldID0gY3JlYXRlQnV0dG9uUHNldWRvKGkpO1xuXHRcdH1cblxuXHRcdC8vIEVhc3kgQVBJIGZvciBjcmVhdGluZyBuZXcgc2V0RmlsdGVyc1xuXHRcdGZ1bmN0aW9uIHNldEZpbHRlcnMoKSB7fVxuXHRcdHNldEZpbHRlcnMucHJvdG90eXBlID0gRXhwci5maWx0ZXJzID0gRXhwci5wc2V1ZG9zO1xuXHRcdEV4cHIuc2V0RmlsdGVycyA9IG5ldyBzZXRGaWx0ZXJzKCk7XG5cblx0XHR0b2tlbml6ZSA9IFNpenpsZS50b2tlbml6ZSA9IGZ1bmN0aW9uIChzZWxlY3RvciwgcGFyc2VPbmx5KSB7XG5cdFx0XHR2YXIgbWF0Y2hlZCxcblx0XHRcdCAgICBtYXRjaCxcblx0XHRcdCAgICB0b2tlbnMsXG5cdFx0XHQgICAgdHlwZSxcblx0XHRcdCAgICBzb0Zhcixcblx0XHRcdCAgICBncm91cHMsXG5cdFx0XHQgICAgcHJlRmlsdGVycyxcblx0XHRcdCAgICBjYWNoZWQgPSB0b2tlbkNhY2hlW3NlbGVjdG9yICsgXCIgXCJdO1xuXG5cdFx0XHRpZiAoY2FjaGVkKSB7XG5cdFx0XHRcdHJldHVybiBwYXJzZU9ubHkgPyAwIDogY2FjaGVkLnNsaWNlKDApO1xuXHRcdFx0fVxuXG5cdFx0XHRzb0ZhciA9IHNlbGVjdG9yO1xuXHRcdFx0Z3JvdXBzID0gW107XG5cdFx0XHRwcmVGaWx0ZXJzID0gRXhwci5wcmVGaWx0ZXI7XG5cblx0XHRcdHdoaWxlIChzb0Zhcikge1xuXG5cdFx0XHRcdC8vIENvbW1hIGFuZCBmaXJzdCBydW5cblx0XHRcdFx0aWYgKCFtYXRjaGVkIHx8IChtYXRjaCA9IHJjb21tYS5leGVjKHNvRmFyKSkpIHtcblx0XHRcdFx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdFx0XHRcdC8vIERvbid0IGNvbnN1bWUgdHJhaWxpbmcgY29tbWFzIGFzIHZhbGlkXG5cdFx0XHRcdFx0XHRzb0ZhciA9IHNvRmFyLnNsaWNlKG1hdGNoWzBdLmxlbmd0aCkgfHwgc29GYXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGdyb3Vwcy5wdXNoKHRva2VucyA9IFtdKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1hdGNoZWQgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyBDb21iaW5hdG9yc1xuXHRcdFx0XHRpZiAobWF0Y2ggPSByY29tYmluYXRvcnMuZXhlYyhzb0ZhcikpIHtcblx0XHRcdFx0XHRtYXRjaGVkID0gbWF0Y2guc2hpZnQoKTtcblx0XHRcdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdFx0XHR2YWx1ZTogbWF0Y2hlZCxcblx0XHRcdFx0XHRcdC8vIENhc3QgZGVzY2VuZGFudCBjb21iaW5hdG9ycyB0byBzcGFjZVxuXHRcdFx0XHRcdFx0dHlwZTogbWF0Y2hbMF0ucmVwbGFjZShydHJpbSwgXCIgXCIpXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0c29GYXIgPSBzb0Zhci5zbGljZShtYXRjaGVkLmxlbmd0aCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBGaWx0ZXJzXG5cdFx0XHRcdGZvciAodHlwZSBpbiBFeHByLmZpbHRlcikge1xuXHRcdFx0XHRcdGlmICgobWF0Y2ggPSBtYXRjaEV4cHJbdHlwZV0uZXhlYyhzb0ZhcikpICYmICghcHJlRmlsdGVyc1t0eXBlXSB8fCAobWF0Y2ggPSBwcmVGaWx0ZXJzW3R5cGVdKG1hdGNoKSkpKSB7XG5cdFx0XHRcdFx0XHRtYXRjaGVkID0gbWF0Y2guc2hpZnQoKTtcblx0XHRcdFx0XHRcdHRva2Vucy5wdXNoKHtcblx0XHRcdFx0XHRcdFx0dmFsdWU6IG1hdGNoZWQsXG5cdFx0XHRcdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdFx0XHRcdG1hdGNoZXM6IG1hdGNoXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHNvRmFyID0gc29GYXIuc2xpY2UobWF0Y2hlZC5sZW5ndGgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICghbWF0Y2hlZCkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJldHVybiB0aGUgbGVuZ3RoIG9mIHRoZSBpbnZhbGlkIGV4Y2Vzc1xuXHRcdFx0Ly8gaWYgd2UncmUganVzdCBwYXJzaW5nXG5cdFx0XHQvLyBPdGhlcndpc2UsIHRocm93IGFuIGVycm9yIG9yIHJldHVybiB0b2tlbnNcblx0XHRcdHJldHVybiBwYXJzZU9ubHkgPyBzb0Zhci5sZW5ndGggOiBzb0ZhciA/IFNpenpsZS5lcnJvcihzZWxlY3RvcikgOlxuXHRcdFx0Ly8gQ2FjaGUgdGhlIHRva2Vuc1xuXHRcdFx0dG9rZW5DYWNoZShzZWxlY3RvciwgZ3JvdXBzKS5zbGljZSgwKTtcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gdG9TZWxlY3Rvcih0b2tlbnMpIHtcblx0XHRcdHZhciBpID0gMCxcblx0XHRcdCAgICBsZW4gPSB0b2tlbnMubGVuZ3RoLFxuXHRcdFx0ICAgIHNlbGVjdG9yID0gXCJcIjtcblx0XHRcdGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0c2VsZWN0b3IgKz0gdG9rZW5zW2ldLnZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNlbGVjdG9yO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGFkZENvbWJpbmF0b3IobWF0Y2hlciwgY29tYmluYXRvciwgYmFzZSkge1xuXHRcdFx0dmFyIGRpciA9IGNvbWJpbmF0b3IuZGlyLFxuXHRcdFx0ICAgIHNraXAgPSBjb21iaW5hdG9yLm5leHQsXG5cdFx0XHQgICAga2V5ID0gc2tpcCB8fCBkaXIsXG5cdFx0XHQgICAgY2hlY2tOb25FbGVtZW50cyA9IGJhc2UgJiYga2V5ID09PSBcInBhcmVudE5vZGVcIixcblx0XHRcdCAgICBkb25lTmFtZSA9IGRvbmUrKztcblxuXHRcdFx0cmV0dXJuIGNvbWJpbmF0b3IuZmlyc3QgP1xuXHRcdFx0Ly8gQ2hlY2sgYWdhaW5zdCBjbG9zZXN0IGFuY2VzdG9yL3ByZWNlZGluZyBlbGVtZW50XG5cdFx0XHRmdW5jdGlvbiAoZWxlbSwgY29udGV4dCwgeG1sKSB7XG5cdFx0XHRcdHdoaWxlIChlbGVtID0gZWxlbVtkaXJdKSB7XG5cdFx0XHRcdFx0aWYgKGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG1hdGNoZXIoZWxlbSwgY29udGV4dCwgeG1sKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSA6XG5cblx0XHRcdC8vIENoZWNrIGFnYWluc3QgYWxsIGFuY2VzdG9yL3ByZWNlZGluZyBlbGVtZW50c1xuXHRcdFx0ZnVuY3Rpb24gKGVsZW0sIGNvbnRleHQsIHhtbCkge1xuXHRcdFx0XHR2YXIgb2xkQ2FjaGUsXG5cdFx0XHRcdCAgICB1bmlxdWVDYWNoZSxcblx0XHRcdFx0ICAgIG91dGVyQ2FjaGUsXG5cdFx0XHRcdCAgICBuZXdDYWNoZSA9IFtkaXJydW5zLCBkb25lTmFtZV07XG5cblx0XHRcdFx0Ly8gV2UgY2FuJ3Qgc2V0IGFyYml0cmFyeSBkYXRhIG9uIFhNTCBub2Rlcywgc28gdGhleSBkb24ndCBiZW5lZml0IGZyb20gY29tYmluYXRvciBjYWNoaW5nXG5cdFx0XHRcdGlmICh4bWwpIHtcblx0XHRcdFx0XHR3aGlsZSAoZWxlbSA9IGVsZW1bZGlyXSkge1xuXHRcdFx0XHRcdFx0aWYgKGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cykge1xuXHRcdFx0XHRcdFx0XHRpZiAobWF0Y2hlcihlbGVtLCBjb250ZXh0LCB4bWwpKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0d2hpbGUgKGVsZW0gPSBlbGVtW2Rpcl0pIHtcblx0XHRcdFx0XHRcdGlmIChlbGVtLm5vZGVUeXBlID09PSAxIHx8IGNoZWNrTm9uRWxlbWVudHMpIHtcblx0XHRcdFx0XHRcdFx0b3V0ZXJDYWNoZSA9IGVsZW1bZXhwYW5kb10gfHwgKGVsZW1bZXhwYW5kb10gPSB7fSk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPDkgb25seVxuXHRcdFx0XHRcdFx0XHQvLyBEZWZlbmQgYWdhaW5zdCBjbG9uZWQgYXR0cm9wZXJ0aWVzIChqUXVlcnkgZ2gtMTcwOSlcblx0XHRcdFx0XHRcdFx0dW5pcXVlQ2FjaGUgPSBvdXRlckNhY2hlW2VsZW0udW5pcXVlSURdIHx8IChvdXRlckNhY2hlW2VsZW0udW5pcXVlSURdID0ge30pO1xuXG5cdFx0XHRcdFx0XHRcdGlmIChza2lwICYmIHNraXAgPT09IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkge1xuXHRcdFx0XHRcdFx0XHRcdGVsZW0gPSBlbGVtW2Rpcl0gfHwgZWxlbTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICgob2xkQ2FjaGUgPSB1bmlxdWVDYWNoZVtrZXldKSAmJiBvbGRDYWNoZVswXSA9PT0gZGlycnVucyAmJiBvbGRDYWNoZVsxXSA9PT0gZG9uZU5hbWUpIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIEFzc2lnbiB0byBuZXdDYWNoZSBzbyByZXN1bHRzIGJhY2stcHJvcGFnYXRlIHRvIHByZXZpb3VzIGVsZW1lbnRzXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG5ld0NhY2hlWzJdID0gb2xkQ2FjaGVbMl07XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gUmV1c2UgbmV3Y2FjaGUgc28gcmVzdWx0cyBiYWNrLXByb3BhZ2F0ZSB0byBwcmV2aW91cyBlbGVtZW50c1xuXHRcdFx0XHRcdFx0XHRcdHVuaXF1ZUNhY2hlW2tleV0gPSBuZXdDYWNoZTtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIEEgbWF0Y2ggbWVhbnMgd2UncmUgZG9uZTsgYSBmYWlsIG1lYW5zIHdlIGhhdmUgdG8ga2VlcCBjaGVja2luZ1xuXHRcdFx0XHRcdFx0XHRcdGlmIChuZXdDYWNoZVsyXSA9IG1hdGNoZXIoZWxlbSwgY29udGV4dCwgeG1sKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZWxlbWVudE1hdGNoZXIobWF0Y2hlcnMpIHtcblx0XHRcdHJldHVybiBtYXRjaGVycy5sZW5ndGggPiAxID8gZnVuY3Rpb24gKGVsZW0sIGNvbnRleHQsIHhtbCkge1xuXHRcdFx0XHR2YXIgaSA9IG1hdGNoZXJzLmxlbmd0aDtcblx0XHRcdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0XHRcdGlmICghbWF0Y2hlcnNbaV0oZWxlbSwgY29udGV4dCwgeG1sKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0gOiBtYXRjaGVyc1swXTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBtdWx0aXBsZUNvbnRleHRzKHNlbGVjdG9yLCBjb250ZXh0cywgcmVzdWx0cykge1xuXHRcdFx0dmFyIGkgPSAwLFxuXHRcdFx0ICAgIGxlbiA9IGNvbnRleHRzLmxlbmd0aDtcblx0XHRcdGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0U2l6emxlKHNlbGVjdG9yLCBjb250ZXh0c1tpXSwgcmVzdWx0cyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBjb25kZW5zZSh1bm1hdGNoZWQsIG1hcCwgZmlsdGVyLCBjb250ZXh0LCB4bWwpIHtcblx0XHRcdHZhciBlbGVtLFxuXHRcdFx0ICAgIG5ld1VubWF0Y2hlZCA9IFtdLFxuXHRcdFx0ICAgIGkgPSAwLFxuXHRcdFx0ICAgIGxlbiA9IHVubWF0Y2hlZC5sZW5ndGgsXG5cdFx0XHQgICAgbWFwcGVkID0gbWFwICE9IG51bGw7XG5cblx0XHRcdGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0aWYgKGVsZW0gPSB1bm1hdGNoZWRbaV0pIHtcblx0XHRcdFx0XHRpZiAoIWZpbHRlciB8fCBmaWx0ZXIoZWxlbSwgY29udGV4dCwgeG1sKSkge1xuXHRcdFx0XHRcdFx0bmV3VW5tYXRjaGVkLnB1c2goZWxlbSk7XG5cdFx0XHRcdFx0XHRpZiAobWFwcGVkKSB7XG5cdFx0XHRcdFx0XHRcdG1hcC5wdXNoKGkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbmV3VW5tYXRjaGVkO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHNldE1hdGNoZXIocHJlRmlsdGVyLCBzZWxlY3RvciwgbWF0Y2hlciwgcG9zdEZpbHRlciwgcG9zdEZpbmRlciwgcG9zdFNlbGVjdG9yKSB7XG5cdFx0XHRpZiAocG9zdEZpbHRlciAmJiAhcG9zdEZpbHRlcltleHBhbmRvXSkge1xuXHRcdFx0XHRwb3N0RmlsdGVyID0gc2V0TWF0Y2hlcihwb3N0RmlsdGVyKTtcblx0XHRcdH1cblx0XHRcdGlmIChwb3N0RmluZGVyICYmICFwb3N0RmluZGVyW2V4cGFuZG9dKSB7XG5cdFx0XHRcdHBvc3RGaW5kZXIgPSBzZXRNYXRjaGVyKHBvc3RGaW5kZXIsIHBvc3RTZWxlY3Rvcik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uIChzZWVkLCByZXN1bHRzLCBjb250ZXh0LCB4bWwpIHtcblx0XHRcdFx0dmFyIHRlbXAsXG5cdFx0XHRcdCAgICBpLFxuXHRcdFx0XHQgICAgZWxlbSxcblx0XHRcdFx0ICAgIHByZU1hcCA9IFtdLFxuXHRcdFx0XHQgICAgcG9zdE1hcCA9IFtdLFxuXHRcdFx0XHQgICAgcHJlZXhpc3RpbmcgPSByZXN1bHRzLmxlbmd0aCxcblxuXG5cdFx0XHRcdC8vIEdldCBpbml0aWFsIGVsZW1lbnRzIGZyb20gc2VlZCBvciBjb250ZXh0XG5cdFx0XHRcdGVsZW1zID0gc2VlZCB8fCBtdWx0aXBsZUNvbnRleHRzKHNlbGVjdG9yIHx8IFwiKlwiLCBjb250ZXh0Lm5vZGVUeXBlID8gW2NvbnRleHRdIDogY29udGV4dCwgW10pLFxuXG5cblx0XHRcdFx0Ly8gUHJlZmlsdGVyIHRvIGdldCBtYXRjaGVyIGlucHV0LCBwcmVzZXJ2aW5nIGEgbWFwIGZvciBzZWVkLXJlc3VsdHMgc3luY2hyb25pemF0aW9uXG5cdFx0XHRcdG1hdGNoZXJJbiA9IHByZUZpbHRlciAmJiAoc2VlZCB8fCAhc2VsZWN0b3IpID8gY29uZGVuc2UoZWxlbXMsIHByZU1hcCwgcHJlRmlsdGVyLCBjb250ZXh0LCB4bWwpIDogZWxlbXMsXG5cdFx0XHRcdCAgICBtYXRjaGVyT3V0ID0gbWF0Y2hlciA/XG5cdFx0XHRcdC8vIElmIHdlIGhhdmUgYSBwb3N0RmluZGVyLCBvciBmaWx0ZXJlZCBzZWVkLCBvciBub24tc2VlZCBwb3N0RmlsdGVyIG9yIHByZWV4aXN0aW5nIHJlc3VsdHMsXG5cdFx0XHRcdHBvc3RGaW5kZXIgfHwgKHNlZWQgPyBwcmVGaWx0ZXIgOiBwcmVleGlzdGluZyB8fCBwb3N0RmlsdGVyKSA/XG5cblx0XHRcdFx0Ly8gLi4uaW50ZXJtZWRpYXRlIHByb2Nlc3NpbmcgaXMgbmVjZXNzYXJ5XG5cdFx0XHRcdFtdIDpcblxuXHRcdFx0XHQvLyAuLi5vdGhlcndpc2UgdXNlIHJlc3VsdHMgZGlyZWN0bHlcblx0XHRcdFx0cmVzdWx0cyA6IG1hdGNoZXJJbjtcblxuXHRcdFx0XHQvLyBGaW5kIHByaW1hcnkgbWF0Y2hlc1xuXHRcdFx0XHRpZiAobWF0Y2hlcikge1xuXHRcdFx0XHRcdG1hdGNoZXIobWF0Y2hlckluLCBtYXRjaGVyT3V0LCBjb250ZXh0LCB4bWwpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQXBwbHkgcG9zdEZpbHRlclxuXHRcdFx0XHRpZiAocG9zdEZpbHRlcikge1xuXHRcdFx0XHRcdHRlbXAgPSBjb25kZW5zZShtYXRjaGVyT3V0LCBwb3N0TWFwKTtcblx0XHRcdFx0XHRwb3N0RmlsdGVyKHRlbXAsIFtdLCBjb250ZXh0LCB4bWwpO1xuXG5cdFx0XHRcdFx0Ly8gVW4tbWF0Y2ggZmFpbGluZyBlbGVtZW50cyBieSBtb3ZpbmcgdGhlbSBiYWNrIHRvIG1hdGNoZXJJblxuXHRcdFx0XHRcdGkgPSB0ZW1wLmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHRcdFx0XHRpZiAoZWxlbSA9IHRlbXBbaV0pIHtcblx0XHRcdFx0XHRcdFx0bWF0Y2hlck91dFtwb3N0TWFwW2ldXSA9ICEobWF0Y2hlckluW3Bvc3RNYXBbaV1dID0gZWxlbSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHNlZWQpIHtcblx0XHRcdFx0XHRpZiAocG9zdEZpbmRlciB8fCBwcmVGaWx0ZXIpIHtcblx0XHRcdFx0XHRcdGlmIChwb3N0RmluZGVyKSB7XG5cdFx0XHRcdFx0XHRcdC8vIEdldCB0aGUgZmluYWwgbWF0Y2hlck91dCBieSBjb25kZW5zaW5nIHRoaXMgaW50ZXJtZWRpYXRlIGludG8gcG9zdEZpbmRlciBjb250ZXh0c1xuXHRcdFx0XHRcdFx0XHR0ZW1wID0gW107XG5cdFx0XHRcdFx0XHRcdGkgPSBtYXRjaGVyT3V0Lmxlbmd0aDtcblx0XHRcdFx0XHRcdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChlbGVtID0gbWF0Y2hlck91dFtpXSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gUmVzdG9yZSBtYXRjaGVySW4gc2luY2UgZWxlbSBpcyBub3QgeWV0IGEgZmluYWwgbWF0Y2hcblx0XHRcdFx0XHRcdFx0XHRcdHRlbXAucHVzaChtYXRjaGVySW5baV0gPSBlbGVtKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0cG9zdEZpbmRlcihudWxsLCBtYXRjaGVyT3V0ID0gW10sIHRlbXAsIHhtbCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIE1vdmUgbWF0Y2hlZCBlbGVtZW50cyBmcm9tIHNlZWQgdG8gcmVzdWx0cyB0byBrZWVwIHRoZW0gc3luY2hyb25pemVkXG5cdFx0XHRcdFx0XHRpID0gbWF0Y2hlck91dC5sZW5ndGg7XG5cdFx0XHRcdFx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHRcdFx0XHRcdGlmICgoZWxlbSA9IG1hdGNoZXJPdXRbaV0pICYmICh0ZW1wID0gcG9zdEZpbmRlciA/IGluZGV4T2Yoc2VlZCwgZWxlbSkgOiBwcmVNYXBbaV0pID4gLTEpIHtcblxuXHRcdFx0XHRcdFx0XHRcdHNlZWRbdGVtcF0gPSAhKHJlc3VsdHNbdGVtcF0gPSBlbGVtKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIEFkZCBlbGVtZW50cyB0byByZXN1bHRzLCB0aHJvdWdoIHBvc3RGaW5kZXIgaWYgZGVmaW5lZFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1hdGNoZXJPdXQgPSBjb25kZW5zZShtYXRjaGVyT3V0ID09PSByZXN1bHRzID8gbWF0Y2hlck91dC5zcGxpY2UocHJlZXhpc3RpbmcsIG1hdGNoZXJPdXQubGVuZ3RoKSA6IG1hdGNoZXJPdXQpO1xuXHRcdFx0XHRcdGlmIChwb3N0RmluZGVyKSB7XG5cdFx0XHRcdFx0XHRwb3N0RmluZGVyKG51bGwsIHJlc3VsdHMsIG1hdGNoZXJPdXQsIHhtbCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHB1c2guYXBwbHkocmVzdWx0cywgbWF0Y2hlck91dCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBtYXRjaGVyRnJvbVRva2Vucyh0b2tlbnMpIHtcblx0XHRcdHZhciBjaGVja0NvbnRleHQsXG5cdFx0XHQgICAgbWF0Y2hlcixcblx0XHRcdCAgICBqLFxuXHRcdFx0ICAgIGxlbiA9IHRva2Vucy5sZW5ndGgsXG5cdFx0XHQgICAgbGVhZGluZ1JlbGF0aXZlID0gRXhwci5yZWxhdGl2ZVt0b2tlbnNbMF0udHlwZV0sXG5cdFx0XHQgICAgaW1wbGljaXRSZWxhdGl2ZSA9IGxlYWRpbmdSZWxhdGl2ZSB8fCBFeHByLnJlbGF0aXZlW1wiIFwiXSxcblx0XHRcdCAgICBpID0gbGVhZGluZ1JlbGF0aXZlID8gMSA6IDAsXG5cblxuXHRcdFx0Ly8gVGhlIGZvdW5kYXRpb25hbCBtYXRjaGVyIGVuc3VyZXMgdGhhdCBlbGVtZW50cyBhcmUgcmVhY2hhYmxlIGZyb20gdG9wLWxldmVsIGNvbnRleHQocylcblx0XHRcdG1hdGNoQ29udGV4dCA9IGFkZENvbWJpbmF0b3IoZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRcdFx0cmV0dXJuIGVsZW0gPT09IGNoZWNrQ29udGV4dDtcblx0XHRcdH0sIGltcGxpY2l0UmVsYXRpdmUsIHRydWUpLFxuXHRcdFx0ICAgIG1hdGNoQW55Q29udGV4dCA9IGFkZENvbWJpbmF0b3IoZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRcdFx0cmV0dXJuIGluZGV4T2YoY2hlY2tDb250ZXh0LCBlbGVtKSA+IC0xO1xuXHRcdFx0fSwgaW1wbGljaXRSZWxhdGl2ZSwgdHJ1ZSksXG5cdFx0XHQgICAgbWF0Y2hlcnMgPSBbZnVuY3Rpb24gKGVsZW0sIGNvbnRleHQsIHhtbCkge1xuXHRcdFx0XHR2YXIgcmV0ID0gIWxlYWRpbmdSZWxhdGl2ZSAmJiAoeG1sIHx8IGNvbnRleHQgIT09IG91dGVybW9zdENvbnRleHQpIHx8ICgoY2hlY2tDb250ZXh0ID0gY29udGV4dCkubm9kZVR5cGUgPyBtYXRjaENvbnRleHQoZWxlbSwgY29udGV4dCwgeG1sKSA6IG1hdGNoQW55Q29udGV4dChlbGVtLCBjb250ZXh0LCB4bWwpKTtcblx0XHRcdFx0Ly8gQXZvaWQgaGFuZ2luZyBvbnRvIGVsZW1lbnQgKGlzc3VlICMyOTkpXG5cdFx0XHRcdGNoZWNrQ29udGV4dCA9IG51bGw7XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9XTtcblxuXHRcdFx0Zm9yICg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRpZiAobWF0Y2hlciA9IEV4cHIucmVsYXRpdmVbdG9rZW5zW2ldLnR5cGVdKSB7XG5cdFx0XHRcdFx0bWF0Y2hlcnMgPSBbYWRkQ29tYmluYXRvcihlbGVtZW50TWF0Y2hlcihtYXRjaGVycyksIG1hdGNoZXIpXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtYXRjaGVyID0gRXhwci5maWx0ZXJbdG9rZW5zW2ldLnR5cGVdLmFwcGx5KG51bGwsIHRva2Vuc1tpXS5tYXRjaGVzKTtcblxuXHRcdFx0XHRcdC8vIFJldHVybiBzcGVjaWFsIHVwb24gc2VlaW5nIGEgcG9zaXRpb25hbCBtYXRjaGVyXG5cdFx0XHRcdFx0aWYgKG1hdGNoZXJbZXhwYW5kb10pIHtcblx0XHRcdFx0XHRcdC8vIEZpbmQgdGhlIG5leHQgcmVsYXRpdmUgb3BlcmF0b3IgKGlmIGFueSkgZm9yIHByb3BlciBoYW5kbGluZ1xuXHRcdFx0XHRcdFx0aiA9ICsraTtcblx0XHRcdFx0XHRcdGZvciAoOyBqIDwgbGVuOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0aWYgKEV4cHIucmVsYXRpdmVbdG9rZW5zW2pdLnR5cGVdKSB7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBzZXRNYXRjaGVyKGkgPiAxICYmIGVsZW1lbnRNYXRjaGVyKG1hdGNoZXJzKSwgaSA+IDEgJiYgdG9TZWxlY3Rvcihcblx0XHRcdFx0XHRcdC8vIElmIHRoZSBwcmVjZWRpbmcgdG9rZW4gd2FzIGEgZGVzY2VuZGFudCBjb21iaW5hdG9yLCBpbnNlcnQgYW4gaW1wbGljaXQgYW55LWVsZW1lbnQgYCpgXG5cdFx0XHRcdFx0XHR0b2tlbnMuc2xpY2UoMCwgaSAtIDEpLmNvbmNhdCh7IHZhbHVlOiB0b2tlbnNbaSAtIDJdLnR5cGUgPT09IFwiIFwiID8gXCIqXCIgOiBcIlwiIH0pKS5yZXBsYWNlKHJ0cmltLCBcIiQxXCIpLCBtYXRjaGVyLCBpIDwgaiAmJiBtYXRjaGVyRnJvbVRva2Vucyh0b2tlbnMuc2xpY2UoaSwgaikpLCBqIDwgbGVuICYmIG1hdGNoZXJGcm9tVG9rZW5zKHRva2VucyA9IHRva2Vucy5zbGljZShqKSksIGogPCBsZW4gJiYgdG9TZWxlY3Rvcih0b2tlbnMpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bWF0Y2hlcnMucHVzaChtYXRjaGVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZWxlbWVudE1hdGNoZXIobWF0Y2hlcnMpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG1hdGNoZXJGcm9tR3JvdXBNYXRjaGVycyhlbGVtZW50TWF0Y2hlcnMsIHNldE1hdGNoZXJzKSB7XG5cdFx0XHR2YXIgYnlTZXQgPSBzZXRNYXRjaGVycy5sZW5ndGggPiAwLFxuXHRcdFx0ICAgIGJ5RWxlbWVudCA9IGVsZW1lbnRNYXRjaGVycy5sZW5ndGggPiAwLFxuXHRcdFx0ICAgIHN1cGVyTWF0Y2hlciA9IGZ1bmN0aW9uIHN1cGVyTWF0Y2hlcihzZWVkLCBjb250ZXh0LCB4bWwsIHJlc3VsdHMsIG91dGVybW9zdCkge1xuXHRcdFx0XHR2YXIgZWxlbSxcblx0XHRcdFx0ICAgIGosXG5cdFx0XHRcdCAgICBtYXRjaGVyLFxuXHRcdFx0XHQgICAgbWF0Y2hlZENvdW50ID0gMCxcblx0XHRcdFx0ICAgIGkgPSBcIjBcIixcblx0XHRcdFx0ICAgIHVubWF0Y2hlZCA9IHNlZWQgJiYgW10sXG5cdFx0XHRcdCAgICBzZXRNYXRjaGVkID0gW10sXG5cdFx0XHRcdCAgICBjb250ZXh0QmFja3VwID0gb3V0ZXJtb3N0Q29udGV4dCxcblxuXHRcdFx0XHQvLyBXZSBtdXN0IGFsd2F5cyBoYXZlIGVpdGhlciBzZWVkIGVsZW1lbnRzIG9yIG91dGVybW9zdCBjb250ZXh0XG5cdFx0XHRcdGVsZW1zID0gc2VlZCB8fCBieUVsZW1lbnQgJiYgRXhwci5maW5kW1wiVEFHXCJdKFwiKlwiLCBvdXRlcm1vc3QpLFxuXG5cdFx0XHRcdC8vIFVzZSBpbnRlZ2VyIGRpcnJ1bnMgaWZmIHRoaXMgaXMgdGhlIG91dGVybW9zdCBtYXRjaGVyXG5cdFx0XHRcdGRpcnJ1bnNVbmlxdWUgPSBkaXJydW5zICs9IGNvbnRleHRCYWNrdXAgPT0gbnVsbCA/IDEgOiBNYXRoLnJhbmRvbSgpIHx8IDAuMSxcblx0XHRcdFx0ICAgIGxlbiA9IGVsZW1zLmxlbmd0aDtcblxuXHRcdFx0XHRpZiAob3V0ZXJtb3N0KSB7XG5cdFx0XHRcdFx0b3V0ZXJtb3N0Q29udGV4dCA9IGNvbnRleHQgPT09IGRvY3VtZW50IHx8IGNvbnRleHQgfHwgb3V0ZXJtb3N0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQWRkIGVsZW1lbnRzIHBhc3NpbmcgZWxlbWVudE1hdGNoZXJzIGRpcmVjdGx5IHRvIHJlc3VsdHNcblx0XHRcdFx0Ly8gU3VwcG9ydDogSUU8OSwgU2FmYXJpXG5cdFx0XHRcdC8vIFRvbGVyYXRlIE5vZGVMaXN0IHByb3BlcnRpZXMgKElFOiBcImxlbmd0aFwiOyBTYWZhcmk6IDxudW1iZXI+KSBtYXRjaGluZyBlbGVtZW50cyBieSBpZFxuXHRcdFx0XHRmb3IgKDsgaSAhPT0gbGVuICYmIChlbGVtID0gZWxlbXNbaV0pICE9IG51bGw7IGkrKykge1xuXHRcdFx0XHRcdGlmIChieUVsZW1lbnQgJiYgZWxlbSkge1xuXHRcdFx0XHRcdFx0aiA9IDA7XG5cdFx0XHRcdFx0XHRpZiAoIWNvbnRleHQgJiYgZWxlbS5vd25lckRvY3VtZW50ICE9PSBkb2N1bWVudCkge1xuXHRcdFx0XHRcdFx0XHRzZXREb2N1bWVudChlbGVtKTtcblx0XHRcdFx0XHRcdFx0eG1sID0gIWRvY3VtZW50SXNIVE1MO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0d2hpbGUgKG1hdGNoZXIgPSBlbGVtZW50TWF0Y2hlcnNbaisrXSkge1xuXHRcdFx0XHRcdFx0XHRpZiAobWF0Y2hlcihlbGVtLCBjb250ZXh0IHx8IGRvY3VtZW50LCB4bWwpKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0cy5wdXNoKGVsZW0pO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAob3V0ZXJtb3N0KSB7XG5cdFx0XHRcdFx0XHRcdGRpcnJ1bnMgPSBkaXJydW5zVW5pcXVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFRyYWNrIHVubWF0Y2hlZCBlbGVtZW50cyBmb3Igc2V0IGZpbHRlcnNcblx0XHRcdFx0XHRpZiAoYnlTZXQpIHtcblx0XHRcdFx0XHRcdC8vIFRoZXkgd2lsbCBoYXZlIGdvbmUgdGhyb3VnaCBhbGwgcG9zc2libGUgbWF0Y2hlcnNcblx0XHRcdFx0XHRcdGlmIChlbGVtID0gIW1hdGNoZXIgJiYgZWxlbSkge1xuXHRcdFx0XHRcdFx0XHRtYXRjaGVkQ291bnQtLTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gTGVuZ3RoZW4gdGhlIGFycmF5IGZvciBldmVyeSBlbGVtZW50LCBtYXRjaGVkIG9yIG5vdFxuXHRcdFx0XHRcdFx0aWYgKHNlZWQpIHtcblx0XHRcdFx0XHRcdFx0dW5tYXRjaGVkLnB1c2goZWxlbSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gYGlgIGlzIG5vdyB0aGUgY291bnQgb2YgZWxlbWVudHMgdmlzaXRlZCBhYm92ZSwgYW5kIGFkZGluZyBpdCB0byBgbWF0Y2hlZENvdW50YFxuXHRcdFx0XHQvLyBtYWtlcyB0aGUgbGF0dGVyIG5vbm5lZ2F0aXZlLlxuXHRcdFx0XHRtYXRjaGVkQ291bnQgKz0gaTtcblxuXHRcdFx0XHQvLyBBcHBseSBzZXQgZmlsdGVycyB0byB1bm1hdGNoZWQgZWxlbWVudHNcblx0XHRcdFx0Ly8gTk9URTogVGhpcyBjYW4gYmUgc2tpcHBlZCBpZiB0aGVyZSBhcmUgbm8gdW5tYXRjaGVkIGVsZW1lbnRzIChpLmUuLCBgbWF0Y2hlZENvdW50YFxuXHRcdFx0XHQvLyBlcXVhbHMgYGlgKSwgdW5sZXNzIHdlIGRpZG4ndCB2aXNpdCBfYW55XyBlbGVtZW50cyBpbiB0aGUgYWJvdmUgbG9vcCBiZWNhdXNlIHdlIGhhdmVcblx0XHRcdFx0Ly8gbm8gZWxlbWVudCBtYXRjaGVycyBhbmQgbm8gc2VlZC5cblx0XHRcdFx0Ly8gSW5jcmVtZW50aW5nIGFuIGluaXRpYWxseS1zdHJpbmcgXCIwXCIgYGlgIGFsbG93cyBgaWAgdG8gcmVtYWluIGEgc3RyaW5nIG9ubHkgaW4gdGhhdFxuXHRcdFx0XHQvLyBjYXNlLCB3aGljaCB3aWxsIHJlc3VsdCBpbiBhIFwiMDBcIiBgbWF0Y2hlZENvdW50YCB0aGF0IGRpZmZlcnMgZnJvbSBgaWAgYnV0IGlzIGFsc29cblx0XHRcdFx0Ly8gbnVtZXJpY2FsbHkgemVyby5cblx0XHRcdFx0aWYgKGJ5U2V0ICYmIGkgIT09IG1hdGNoZWRDb3VudCkge1xuXHRcdFx0XHRcdGogPSAwO1xuXHRcdFx0XHRcdHdoaWxlIChtYXRjaGVyID0gc2V0TWF0Y2hlcnNbaisrXSkge1xuXHRcdFx0XHRcdFx0bWF0Y2hlcih1bm1hdGNoZWQsIHNldE1hdGNoZWQsIGNvbnRleHQsIHhtbCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHNlZWQpIHtcblx0XHRcdFx0XHRcdC8vIFJlaW50ZWdyYXRlIGVsZW1lbnQgbWF0Y2hlcyB0byBlbGltaW5hdGUgdGhlIG5lZWQgZm9yIHNvcnRpbmdcblx0XHRcdFx0XHRcdGlmIChtYXRjaGVkQ291bnQgPiAwKSB7XG5cdFx0XHRcdFx0XHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoISh1bm1hdGNoZWRbaV0gfHwgc2V0TWF0Y2hlZFtpXSkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldE1hdGNoZWRbaV0gPSBwb3AuY2FsbChyZXN1bHRzKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gRGlzY2FyZCBpbmRleCBwbGFjZWhvbGRlciB2YWx1ZXMgdG8gZ2V0IG9ubHkgYWN0dWFsIG1hdGNoZXNcblx0XHRcdFx0XHRcdHNldE1hdGNoZWQgPSBjb25kZW5zZShzZXRNYXRjaGVkKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBBZGQgbWF0Y2hlcyB0byByZXN1bHRzXG5cdFx0XHRcdFx0cHVzaC5hcHBseShyZXN1bHRzLCBzZXRNYXRjaGVkKTtcblxuXHRcdFx0XHRcdC8vIFNlZWRsZXNzIHNldCBtYXRjaGVzIHN1Y2NlZWRpbmcgbXVsdGlwbGUgc3VjY2Vzc2Z1bCBtYXRjaGVycyBzdGlwdWxhdGUgc29ydGluZ1xuXHRcdFx0XHRcdGlmIChvdXRlcm1vc3QgJiYgIXNlZWQgJiYgc2V0TWF0Y2hlZC5sZW5ndGggPiAwICYmIG1hdGNoZWRDb3VudCArIHNldE1hdGNoZXJzLmxlbmd0aCA+IDEpIHtcblxuXHRcdFx0XHRcdFx0U2l6emxlLnVuaXF1ZVNvcnQocmVzdWx0cyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gT3ZlcnJpZGUgbWFuaXB1bGF0aW9uIG9mIGdsb2JhbHMgYnkgbmVzdGVkIG1hdGNoZXJzXG5cdFx0XHRcdGlmIChvdXRlcm1vc3QpIHtcblx0XHRcdFx0XHRkaXJydW5zID0gZGlycnVuc1VuaXF1ZTtcblx0XHRcdFx0XHRvdXRlcm1vc3RDb250ZXh0ID0gY29udGV4dEJhY2t1cDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB1bm1hdGNoZWQ7XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gYnlTZXQgPyBtYXJrRnVuY3Rpb24oc3VwZXJNYXRjaGVyKSA6IHN1cGVyTWF0Y2hlcjtcblx0XHR9XG5cblx0XHRjb21waWxlID0gU2l6emxlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIG1hdGNoIC8qIEludGVybmFsIFVzZSBPbmx5ICovKSB7XG5cdFx0XHR2YXIgaSxcblx0XHRcdCAgICBzZXRNYXRjaGVycyA9IFtdLFxuXHRcdFx0ICAgIGVsZW1lbnRNYXRjaGVycyA9IFtdLFxuXHRcdFx0ICAgIGNhY2hlZCA9IGNvbXBpbGVyQ2FjaGVbc2VsZWN0b3IgKyBcIiBcIl07XG5cblx0XHRcdGlmICghY2FjaGVkKSB7XG5cdFx0XHRcdC8vIEdlbmVyYXRlIGEgZnVuY3Rpb24gb2YgcmVjdXJzaXZlIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSB1c2VkIHRvIGNoZWNrIGVhY2ggZWxlbWVudFxuXHRcdFx0XHRpZiAoIW1hdGNoKSB7XG5cdFx0XHRcdFx0bWF0Y2ggPSB0b2tlbml6ZShzZWxlY3Rvcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0aSA9IG1hdGNoLmxlbmd0aDtcblx0XHRcdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0XHRcdGNhY2hlZCA9IG1hdGNoZXJGcm9tVG9rZW5zKG1hdGNoW2ldKTtcblx0XHRcdFx0XHRpZiAoY2FjaGVkW2V4cGFuZG9dKSB7XG5cdFx0XHRcdFx0XHRzZXRNYXRjaGVycy5wdXNoKGNhY2hlZCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGVsZW1lbnRNYXRjaGVycy5wdXNoKGNhY2hlZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ2FjaGUgdGhlIGNvbXBpbGVkIGZ1bmN0aW9uXG5cdFx0XHRcdGNhY2hlZCA9IGNvbXBpbGVyQ2FjaGUoc2VsZWN0b3IsIG1hdGNoZXJGcm9tR3JvdXBNYXRjaGVycyhlbGVtZW50TWF0Y2hlcnMsIHNldE1hdGNoZXJzKSk7XG5cblx0XHRcdFx0Ly8gU2F2ZSBzZWxlY3RvciBhbmQgdG9rZW5pemF0aW9uXG5cdFx0XHRcdGNhY2hlZC5zZWxlY3RvciA9IHNlbGVjdG9yO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNhY2hlZDtcblx0XHR9O1xuXG5cdFx0LyoqXG4gICAqIEEgbG93LWxldmVsIHNlbGVjdGlvbiBmdW5jdGlvbiB0aGF0IHdvcmtzIHdpdGggU2l6emxlJ3MgY29tcGlsZWRcbiAgICogIHNlbGVjdG9yIGZ1bmN0aW9uc1xuICAgKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gc2VsZWN0b3IgQSBzZWxlY3RvciBvciBhIHByZS1jb21waWxlZFxuICAgKiAgc2VsZWN0b3IgZnVuY3Rpb24gYnVpbHQgd2l0aCBTaXp6bGUuY29tcGlsZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRleHRcbiAgICogQHBhcmFtIHtBcnJheX0gW3Jlc3VsdHNdXG4gICAqIEBwYXJhbSB7QXJyYXl9IFtzZWVkXSBBIHNldCBvZiBlbGVtZW50cyB0byBtYXRjaCBhZ2FpbnN0XG4gICAqL1xuXHRcdHNlbGVjdCA9IFNpenpsZS5zZWxlY3QgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbnRleHQsIHJlc3VsdHMsIHNlZWQpIHtcblx0XHRcdHZhciBpLFxuXHRcdFx0ICAgIHRva2Vucyxcblx0XHRcdCAgICB0b2tlbixcblx0XHRcdCAgICB0eXBlLFxuXHRcdFx0ICAgIGZpbmQsXG5cdFx0XHQgICAgY29tcGlsZWQgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBzZWxlY3Rvcixcblx0XHRcdCAgICBtYXRjaCA9ICFzZWVkICYmIHRva2VuaXplKHNlbGVjdG9yID0gY29tcGlsZWQuc2VsZWN0b3IgfHwgc2VsZWN0b3IpO1xuXG5cdFx0XHRyZXN1bHRzID0gcmVzdWx0cyB8fCBbXTtcblxuXHRcdFx0Ly8gVHJ5IHRvIG1pbmltaXplIG9wZXJhdGlvbnMgaWYgdGhlcmUgaXMgb25seSBvbmUgc2VsZWN0b3IgaW4gdGhlIGxpc3QgYW5kIG5vIHNlZWRcblx0XHRcdC8vICh0aGUgbGF0dGVyIG9mIHdoaWNoIGd1YXJhbnRlZXMgdXMgY29udGV4dClcblx0XHRcdGlmIChtYXRjaC5sZW5ndGggPT09IDEpIHtcblxuXHRcdFx0XHQvLyBSZWR1Y2UgY29udGV4dCBpZiB0aGUgbGVhZGluZyBjb21wb3VuZCBzZWxlY3RvciBpcyBhbiBJRFxuXHRcdFx0XHR0b2tlbnMgPSBtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKDApO1xuXHRcdFx0XHRpZiAodG9rZW5zLmxlbmd0aCA+IDIgJiYgKHRva2VuID0gdG9rZW5zWzBdKS50eXBlID09PSBcIklEXCIgJiYgY29udGV4dC5ub2RlVHlwZSA9PT0gOSAmJiBkb2N1bWVudElzSFRNTCAmJiBFeHByLnJlbGF0aXZlW3Rva2Vuc1sxXS50eXBlXSkge1xuXG5cdFx0XHRcdFx0Y29udGV4dCA9IChFeHByLmZpbmRbXCJJRFwiXSh0b2tlbi5tYXRjaGVzWzBdLnJlcGxhY2UocnVuZXNjYXBlLCBmdW5lc2NhcGUpLCBjb250ZXh0KSB8fCBbXSlbMF07XG5cdFx0XHRcdFx0aWYgKCFjb250ZXh0KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblxuXHRcdFx0XHRcdFx0Ly8gUHJlY29tcGlsZWQgbWF0Y2hlcnMgd2lsbCBzdGlsbCB2ZXJpZnkgYW5jZXN0cnksIHNvIHN0ZXAgdXAgYSBsZXZlbFxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoY29tcGlsZWQpIHtcblx0XHRcdFx0XHRcdGNvbnRleHQgPSBjb250ZXh0LnBhcmVudE5vZGU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0c2VsZWN0b3IgPSBzZWxlY3Rvci5zbGljZSh0b2tlbnMuc2hpZnQoKS52YWx1ZS5sZW5ndGgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRmV0Y2ggYSBzZWVkIHNldCBmb3IgcmlnaHQtdG8tbGVmdCBtYXRjaGluZ1xuXHRcdFx0XHRpID0gbWF0Y2hFeHByW1wibmVlZHNDb250ZXh0XCJdLnRlc3Qoc2VsZWN0b3IpID8gMCA6IHRva2Vucy5sZW5ndGg7XG5cdFx0XHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdFx0XHR0b2tlbiA9IHRva2Vuc1tpXTtcblxuXHRcdFx0XHRcdC8vIEFib3J0IGlmIHdlIGhpdCBhIGNvbWJpbmF0b3Jcblx0XHRcdFx0XHRpZiAoRXhwci5yZWxhdGl2ZVt0eXBlID0gdG9rZW4udHlwZV0pIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoZmluZCA9IEV4cHIuZmluZFt0eXBlXSkge1xuXHRcdFx0XHRcdFx0Ly8gU2VhcmNoLCBleHBhbmRpbmcgY29udGV4dCBmb3IgbGVhZGluZyBzaWJsaW5nIGNvbWJpbmF0b3JzXG5cdFx0XHRcdFx0XHRpZiAoc2VlZCA9IGZpbmQodG9rZW4ubWF0Y2hlc1swXS5yZXBsYWNlKHJ1bmVzY2FwZSwgZnVuZXNjYXBlKSwgcnNpYmxpbmcudGVzdCh0b2tlbnNbMF0udHlwZSkgJiYgdGVzdENvbnRleHQoY29udGV4dC5wYXJlbnROb2RlKSB8fCBjb250ZXh0KSkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIElmIHNlZWQgaXMgZW1wdHkgb3Igbm8gdG9rZW5zIHJlbWFpbiwgd2UgY2FuIHJldHVybiBlYXJseVxuXHRcdFx0XHRcdFx0XHR0b2tlbnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0XHRzZWxlY3RvciA9IHNlZWQubGVuZ3RoICYmIHRvU2VsZWN0b3IodG9rZW5zKTtcblx0XHRcdFx0XHRcdFx0aWYgKCFzZWxlY3Rvcikge1xuXHRcdFx0XHRcdFx0XHRcdHB1c2guYXBwbHkocmVzdWx0cywgc2VlZCk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29tcGlsZSBhbmQgZXhlY3V0ZSBhIGZpbHRlcmluZyBmdW5jdGlvbiBpZiBvbmUgaXMgbm90IHByb3ZpZGVkXG5cdFx0XHQvLyBQcm92aWRlIGBtYXRjaGAgdG8gYXZvaWQgcmV0b2tlbml6YXRpb24gaWYgd2UgbW9kaWZpZWQgdGhlIHNlbGVjdG9yIGFib3ZlXG5cdFx0XHQoY29tcGlsZWQgfHwgY29tcGlsZShzZWxlY3RvciwgbWF0Y2gpKShzZWVkLCBjb250ZXh0LCAhZG9jdW1lbnRJc0hUTUwsIHJlc3VsdHMsICFjb250ZXh0IHx8IHJzaWJsaW5nLnRlc3Qoc2VsZWN0b3IpICYmIHRlc3RDb250ZXh0KGNvbnRleHQucGFyZW50Tm9kZSkgfHwgY29udGV4dCk7XG5cdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHR9O1xuXG5cdFx0Ly8gT25lLXRpbWUgYXNzaWdubWVudHNcblxuXHRcdC8vIFNvcnQgc3RhYmlsaXR5XG5cdFx0c3VwcG9ydC5zb3J0U3RhYmxlID0gZXhwYW5kby5zcGxpdChcIlwiKS5zb3J0KHNvcnRPcmRlcikuam9pbihcIlwiKSA9PT0gZXhwYW5kbztcblxuXHRcdC8vIFN1cHBvcnQ6IENocm9tZSAxNC0zNStcblx0XHQvLyBBbHdheXMgYXNzdW1lIGR1cGxpY2F0ZXMgaWYgdGhleSBhcmVuJ3QgcGFzc2VkIHRvIHRoZSBjb21wYXJpc29uIGZ1bmN0aW9uXG5cdFx0c3VwcG9ydC5kZXRlY3REdXBsaWNhdGVzID0gISFoYXNEdXBsaWNhdGU7XG5cblx0XHQvLyBJbml0aWFsaXplIGFnYWluc3QgdGhlIGRlZmF1bHQgZG9jdW1lbnRcblx0XHRzZXREb2N1bWVudCgpO1xuXG5cdFx0Ly8gU3VwcG9ydDogV2Via2l0PDUzNy4zMiAtIFNhZmFyaSA2LjAuMy9DaHJvbWUgMjUgKGZpeGVkIGluIENocm9tZSAyNylcblx0XHQvLyBEZXRhY2hlZCBub2RlcyBjb25mb3VuZGluZ2x5IGZvbGxvdyAqZWFjaCBvdGhlcipcblx0XHRzdXBwb3J0LnNvcnREZXRhY2hlZCA9IGFzc2VydChmdW5jdGlvbiAoZWwpIHtcblx0XHRcdC8vIFNob3VsZCByZXR1cm4gMSwgYnV0IHJldHVybnMgNCAoZm9sbG93aW5nKVxuXHRcdFx0cmV0dXJuIGVsLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKSkgJiAxO1xuXHRcdH0pO1xuXG5cdFx0Ly8gU3VwcG9ydDogSUU8OFxuXHRcdC8vIFByZXZlbnQgYXR0cmlidXRlL3Byb3BlcnR5IFwiaW50ZXJwb2xhdGlvblwiXG5cdFx0Ly8gaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzNjQyOSUyOFZTLjg1JTI5LmFzcHhcblx0XHRpZiAoIWFzc2VydChmdW5jdGlvbiAoZWwpIHtcblx0XHRcdGVsLmlubmVySFRNTCA9IFwiPGEgaHJlZj0nIyc+PC9hPlwiO1xuXHRcdFx0cmV0dXJuIGVsLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSA9PT0gXCIjXCI7XG5cdFx0fSkpIHtcblx0XHRcdGFkZEhhbmRsZShcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIiwgZnVuY3Rpb24gKGVsZW0sIG5hbWUsIGlzWE1MKSB7XG5cdFx0XHRcdGlmICghaXNYTUwpIHtcblx0XHRcdFx0XHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUobmFtZSwgbmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInR5cGVcIiA/IDEgOiAyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gU3VwcG9ydDogSUU8OVxuXHRcdC8vIFVzZSBkZWZhdWx0VmFsdWUgaW4gcGxhY2Ugb2YgZ2V0QXR0cmlidXRlKFwidmFsdWVcIilcblx0XHRpZiAoIXN1cHBvcnQuYXR0cmlidXRlcyB8fCAhYXNzZXJ0KGZ1bmN0aW9uIChlbCkge1xuXHRcdFx0ZWwuaW5uZXJIVE1MID0gXCI8aW5wdXQvPlwiO1xuXHRcdFx0ZWwuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlwiKTtcblx0XHRcdHJldHVybiBlbC5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpID09PSBcIlwiO1xuXHRcdH0pKSB7XG5cdFx0XHRhZGRIYW5kbGUoXCJ2YWx1ZVwiLCBmdW5jdGlvbiAoZWxlbSwgbmFtZSwgaXNYTUwpIHtcblx0XHRcdFx0aWYgKCFpc1hNTCAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5wdXRcIikge1xuXHRcdFx0XHRcdHJldHVybiBlbGVtLmRlZmF1bHRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gU3VwcG9ydDogSUU8OVxuXHRcdC8vIFVzZSBnZXRBdHRyaWJ1dGVOb2RlIHRvIGZldGNoIGJvb2xlYW5zIHdoZW4gZ2V0QXR0cmlidXRlIGxpZXNcblx0XHRpZiAoIWFzc2VydChmdW5jdGlvbiAoZWwpIHtcblx0XHRcdHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSA9PSBudWxsO1xuXHRcdH0pKSB7XG5cdFx0XHRhZGRIYW5kbGUoYm9vbGVhbnMsIGZ1bmN0aW9uIChlbGVtLCBuYW1lLCBpc1hNTCkge1xuXHRcdFx0XHR2YXIgdmFsO1xuXHRcdFx0XHRpZiAoIWlzWE1MKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsZW1bbmFtZV0gPT09IHRydWUgPyBuYW1lLnRvTG93ZXJDYXNlKCkgOiAodmFsID0gZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpKSAmJiB2YWwuc3BlY2lmaWVkID8gdmFsLnZhbHVlIDogbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFNpenpsZTtcblx0fSh3aW5kb3cpO1xuXG5cdGpRdWVyeS5maW5kID0gU2l6emxlO1xuXHRqUXVlcnkuZXhwciA9IFNpenpsZS5zZWxlY3RvcnM7XG5cblx0Ly8gRGVwcmVjYXRlZFxuXHRqUXVlcnkuZXhwcltcIjpcIl0gPSBqUXVlcnkuZXhwci5wc2V1ZG9zO1xuXHRqUXVlcnkudW5pcXVlU29ydCA9IGpRdWVyeS51bmlxdWUgPSBTaXp6bGUudW5pcXVlU29ydDtcblx0alF1ZXJ5LnRleHQgPSBTaXp6bGUuZ2V0VGV4dDtcblx0alF1ZXJ5LmlzWE1MRG9jID0gU2l6emxlLmlzWE1MO1xuXHRqUXVlcnkuY29udGFpbnMgPSBTaXp6bGUuY29udGFpbnM7XG5cdGpRdWVyeS5lc2NhcGVTZWxlY3RvciA9IFNpenpsZS5lc2NhcGU7XG5cblx0dmFyIGRpciA9IGZ1bmN0aW9uIGRpcihlbGVtLCBfZGlyLCB1bnRpbCkge1xuXHRcdHZhciBtYXRjaGVkID0gW10sXG5cdFx0ICAgIHRydW5jYXRlID0gdW50aWwgIT09IHVuZGVmaW5lZDtcblxuXHRcdHdoaWxlICgoZWxlbSA9IGVsZW1bX2Rpcl0pICYmIGVsZW0ubm9kZVR5cGUgIT09IDkpIHtcblx0XHRcdGlmIChlbGVtLm5vZGVUeXBlID09PSAxKSB7XG5cdFx0XHRcdGlmICh0cnVuY2F0ZSAmJiBqUXVlcnkoZWxlbSkuaXModW50aWwpKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0bWF0Y2hlZC5wdXNoKGVsZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbWF0Y2hlZDtcblx0fTtcblxuXHR2YXIgX3NpYmxpbmdzID0gZnVuY3Rpb24gX3NpYmxpbmdzKG4sIGVsZW0pIHtcblx0XHR2YXIgbWF0Y2hlZCA9IFtdO1xuXG5cdFx0Zm9yICg7IG47IG4gPSBuLm5leHRTaWJsaW5nKSB7XG5cdFx0XHRpZiAobi5ub2RlVHlwZSA9PT0gMSAmJiBuICE9PSBlbGVtKSB7XG5cdFx0XHRcdG1hdGNoZWQucHVzaChuKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbWF0Y2hlZDtcblx0fTtcblxuXHR2YXIgcm5lZWRzQ29udGV4dCA9IGpRdWVyeS5leHByLm1hdGNoLm5lZWRzQ29udGV4dDtcblxuXHRmdW5jdGlvbiBub2RlTmFtZShlbGVtLCBuYW1lKSB7XG5cblx0XHRyZXR1cm4gZWxlbS5ub2RlTmFtZSAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKTtcblx0fTtcblx0dmFyIHJzaW5nbGVUYWcgPSAvXjwoW2Etel1bXlxcL1xcMD46XFx4MjBcXHRcXHJcXG5cXGZdKilbXFx4MjBcXHRcXHJcXG5cXGZdKlxcLz8+KD86PFxcL1xcMT58KSQvaTtcblxuXHQvLyBJbXBsZW1lbnQgdGhlIGlkZW50aWNhbCBmdW5jdGlvbmFsaXR5IGZvciBmaWx0ZXIgYW5kIG5vdFxuXHRmdW5jdGlvbiB3aW5ub3coZWxlbWVudHMsIHF1YWxpZmllciwgbm90KSB7XG5cdFx0aWYgKGlzRnVuY3Rpb24ocXVhbGlmaWVyKSkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5ncmVwKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbSwgaSkge1xuXHRcdFx0XHRyZXR1cm4gISFxdWFsaWZpZXIuY2FsbChlbGVtLCBpLCBlbGVtKSAhPT0gbm90O1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gU2luZ2xlIGVsZW1lbnRcblx0XHRpZiAocXVhbGlmaWVyLm5vZGVUeXBlKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LmdyZXAoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHRcdHJldHVybiBlbGVtID09PSBxdWFsaWZpZXIgIT09IG5vdDtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vIEFycmF5bGlrZSBvZiBlbGVtZW50cyAoalF1ZXJ5LCBhcmd1bWVudHMsIEFycmF5KVxuXHRcdGlmICh0eXBlb2YgcXVhbGlmaWVyICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LmdyZXAoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHRcdHJldHVybiBpbmRleE9mLmNhbGwocXVhbGlmaWVyLCBlbGVtKSA+IC0xICE9PSBub3Q7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvLyBGaWx0ZXJlZCBkaXJlY3RseSBmb3IgYm90aCBzaW1wbGUgYW5kIGNvbXBsZXggc2VsZWN0b3JzXG5cdFx0cmV0dXJuIGpRdWVyeS5maWx0ZXIocXVhbGlmaWVyLCBlbGVtZW50cywgbm90KTtcblx0fVxuXG5cdGpRdWVyeS5maWx0ZXIgPSBmdW5jdGlvbiAoZXhwciwgZWxlbXMsIG5vdCkge1xuXHRcdHZhciBlbGVtID0gZWxlbXNbMF07XG5cblx0XHRpZiAobm90KSB7XG5cdFx0XHRleHByID0gXCI6bm90KFwiICsgZXhwciArIFwiKVwiO1xuXHRcdH1cblxuXHRcdGlmIChlbGVtcy5sZW5ndGggPT09IDEgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3RvcihlbGVtLCBleHByKSA/IFtlbGVtXSA6IFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBqUXVlcnkuZmluZC5tYXRjaGVzKGV4cHIsIGpRdWVyeS5ncmVwKGVsZW1zLCBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdFx0cmV0dXJuIGVsZW0ubm9kZVR5cGUgPT09IDE7XG5cdFx0fSkpO1xuXHR9O1xuXG5cdGpRdWVyeS5mbi5leHRlbmQoe1xuXHRcdGZpbmQ6IGZ1bmN0aW9uIGZpbmQoc2VsZWN0b3IpIHtcblx0XHRcdHZhciBpLFxuXHRcdFx0ICAgIHJldCxcblx0XHRcdCAgICBsZW4gPSB0aGlzLmxlbmd0aCxcblx0XHRcdCAgICBzZWxmID0gdGhpcztcblxuXHRcdFx0aWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soalF1ZXJ5KHNlbGVjdG9yKS5maWx0ZXIoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRcdFx0aWYgKGpRdWVyeS5jb250YWlucyhzZWxmW2ldLCB0aGlzKSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0ID0gdGhpcy5wdXNoU3RhY2soW10pO1xuXG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0alF1ZXJ5LmZpbmQoc2VsZWN0b3IsIHNlbGZbaV0sIHJldCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBsZW4gPiAxID8galF1ZXJ5LnVuaXF1ZVNvcnQocmV0KSA6IHJldDtcblx0XHR9LFxuXHRcdGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKHNlbGVjdG9yKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2sod2lubm93KHRoaXMsIHNlbGVjdG9yIHx8IFtdLCBmYWxzZSkpO1xuXHRcdH0sXG5cdFx0bm90OiBmdW5jdGlvbiBub3Qoc2VsZWN0b3IpIHtcblx0XHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayh3aW5ub3codGhpcywgc2VsZWN0b3IgfHwgW10sIHRydWUpKTtcblx0XHR9LFxuXHRcdGlzOiBmdW5jdGlvbiBpcyhzZWxlY3Rvcikge1xuXHRcdFx0cmV0dXJuICEhd2lubm93KHRoaXMsXG5cblx0XHRcdC8vIElmIHRoaXMgaXMgYSBwb3NpdGlvbmFsL3JlbGF0aXZlIHNlbGVjdG9yLCBjaGVjayBtZW1iZXJzaGlwIGluIHRoZSByZXR1cm5lZCBzZXRcblx0XHRcdC8vIHNvICQoXCJwOmZpcnN0XCIpLmlzKFwicDpsYXN0XCIpIHdvbid0IHJldHVybiB0cnVlIGZvciBhIGRvYyB3aXRoIHR3byBcInBcIi5cblx0XHRcdHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiAmJiBybmVlZHNDb250ZXh0LnRlc3Qoc2VsZWN0b3IpID8galF1ZXJ5KHNlbGVjdG9yKSA6IHNlbGVjdG9yIHx8IFtdLCBmYWxzZSkubGVuZ3RoO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gSW5pdGlhbGl6ZSBhIGpRdWVyeSBvYmplY3RcblxuXG5cdC8vIEEgY2VudHJhbCByZWZlcmVuY2UgdG8gdGhlIHJvb3QgalF1ZXJ5KGRvY3VtZW50KVxuXHR2YXIgcm9vdGpRdWVyeSxcblxuXG5cdC8vIEEgc2ltcGxlIHdheSB0byBjaGVjayBmb3IgSFRNTCBzdHJpbmdzXG5cdC8vIFByaW9yaXRpemUgI2lkIG92ZXIgPHRhZz4gdG8gYXZvaWQgWFNTIHZpYSBsb2NhdGlvbi5oYXNoICgjOTUyMSlcblx0Ly8gU3RyaWN0IEhUTUwgcmVjb2duaXRpb24gKCMxMTI5MDogbXVzdCBzdGFydCB3aXRoIDwpXG5cdC8vIFNob3J0Y3V0IHNpbXBsZSAjaWQgY2FzZSBmb3Igc3BlZWRcblx0cnF1aWNrRXhwciA9IC9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSspKSQvLFxuXHQgICAgaW5pdCA9IGpRdWVyeS5mbi5pbml0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBjb250ZXh0LCByb290KSB7XG5cdFx0dmFyIG1hdGNoLCBlbGVtO1xuXG5cdFx0Ly8gSEFORExFOiAkKFwiXCIpLCAkKG51bGwpLCAkKHVuZGVmaW5lZCksICQoZmFsc2UpXG5cdFx0aWYgKCFzZWxlY3Rvcikge1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0Ly8gTWV0aG9kIGluaXQoKSBhY2NlcHRzIGFuIGFsdGVybmF0ZSByb290alF1ZXJ5XG5cdFx0Ly8gc28gbWlncmF0ZSBjYW4gc3VwcG9ydCBqUXVlcnkuc3ViIChnaC0yMTAxKVxuXHRcdHJvb3QgPSByb290IHx8IHJvb3RqUXVlcnk7XG5cblx0XHQvLyBIYW5kbGUgSFRNTCBzdHJpbmdzXG5cdFx0aWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0aWYgKHNlbGVjdG9yWzBdID09PSBcIjxcIiAmJiBzZWxlY3RvcltzZWxlY3Rvci5sZW5ndGggLSAxXSA9PT0gXCI+XCIgJiYgc2VsZWN0b3IubGVuZ3RoID49IDMpIHtcblxuXHRcdFx0XHQvLyBBc3N1bWUgdGhhdCBzdHJpbmdzIHRoYXQgc3RhcnQgYW5kIGVuZCB3aXRoIDw+IGFyZSBIVE1MIGFuZCBza2lwIHRoZSByZWdleCBjaGVja1xuXHRcdFx0XHRtYXRjaCA9IFtudWxsLCBzZWxlY3RvciwgbnVsbF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtYXRjaCA9IHJxdWlja0V4cHIuZXhlYyhzZWxlY3Rvcik7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE1hdGNoIGh0bWwgb3IgbWFrZSBzdXJlIG5vIGNvbnRleHQgaXMgc3BlY2lmaWVkIGZvciAjaWRcblx0XHRcdGlmIChtYXRjaCAmJiAobWF0Y2hbMV0gfHwgIWNvbnRleHQpKSB7XG5cblx0XHRcdFx0Ly8gSEFORExFOiAkKGh0bWwpIC0+ICQoYXJyYXkpXG5cdFx0XHRcdGlmIChtYXRjaFsxXSkge1xuXHRcdFx0XHRcdGNvbnRleHQgPSBjb250ZXh0IGluc3RhbmNlb2YgalF1ZXJ5ID8gY29udGV4dFswXSA6IGNvbnRleHQ7XG5cblx0XHRcdFx0XHQvLyBPcHRpb24gdG8gcnVuIHNjcmlwdHMgaXMgdHJ1ZSBmb3IgYmFjay1jb21wYXRcblx0XHRcdFx0XHQvLyBJbnRlbnRpb25hbGx5IGxldCB0aGUgZXJyb3IgYmUgdGhyb3duIGlmIHBhcnNlSFRNTCBpcyBub3QgcHJlc2VudFxuXHRcdFx0XHRcdGpRdWVyeS5tZXJnZSh0aGlzLCBqUXVlcnkucGFyc2VIVE1MKG1hdGNoWzFdLCBjb250ZXh0ICYmIGNvbnRleHQubm9kZVR5cGUgPyBjb250ZXh0Lm93bmVyRG9jdW1lbnQgfHwgY29udGV4dCA6IGRvY3VtZW50LCB0cnVlKSk7XG5cblx0XHRcdFx0XHQvLyBIQU5ETEU6ICQoaHRtbCwgcHJvcHMpXG5cdFx0XHRcdFx0aWYgKHJzaW5nbGVUYWcudGVzdChtYXRjaFsxXSkgJiYgalF1ZXJ5LmlzUGxhaW5PYmplY3QoY29udGV4dCkpIHtcblx0XHRcdFx0XHRcdGZvciAobWF0Y2ggaW4gY29udGV4dCkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFByb3BlcnRpZXMgb2YgY29udGV4dCBhcmUgY2FsbGVkIGFzIG1ldGhvZHMgaWYgcG9zc2libGVcblx0XHRcdFx0XHRcdFx0aWYgKGlzRnVuY3Rpb24odGhpc1ttYXRjaF0pKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpc1ttYXRjaF0oY29udGV4dFttYXRjaF0pO1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gLi4uYW5kIG90aGVyd2lzZSBzZXQgYXMgYXR0cmlidXRlc1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuYXR0cihtYXRjaCwgY29udGV4dFttYXRjaF0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cblx0XHRcdFx0XHQvLyBIQU5ETEU6ICQoI2lkKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtYXRjaFsyXSk7XG5cblx0XHRcdFx0XHRpZiAoZWxlbSkge1xuXG5cdFx0XHRcdFx0XHQvLyBJbmplY3QgdGhlIGVsZW1lbnQgZGlyZWN0bHkgaW50byB0aGUgalF1ZXJ5IG9iamVjdFxuXHRcdFx0XHRcdFx0dGhpc1swXSA9IGVsZW07XG5cdFx0XHRcdFx0XHR0aGlzLmxlbmd0aCA9IDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSEFORExFOiAkKGV4cHIsICQoLi4uKSlcblx0XHRcdH0gZWxzZSBpZiAoIWNvbnRleHQgfHwgY29udGV4dC5qcXVlcnkpIHtcblx0XHRcdFx0cmV0dXJuIChjb250ZXh0IHx8IHJvb3QpLmZpbmQoc2VsZWN0b3IpO1xuXG5cdFx0XHRcdC8vIEhBTkRMRTogJChleHByLCBjb250ZXh0KVxuXHRcdFx0XHQvLyAod2hpY2ggaXMganVzdCBlcXVpdmFsZW50IHRvOiAkKGNvbnRleHQpLmZpbmQoZXhwcilcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKGNvbnRleHQpLmZpbmQoc2VsZWN0b3IpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBIQU5ETEU6ICQoRE9NRWxlbWVudClcblx0XHR9IGVsc2UgaWYgKHNlbGVjdG9yLm5vZGVUeXBlKSB7XG5cdFx0XHR0aGlzWzBdID0gc2VsZWN0b3I7XG5cdFx0XHR0aGlzLmxlbmd0aCA9IDE7XG5cdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdFx0Ly8gSEFORExFOiAkKGZ1bmN0aW9uKVxuXHRcdFx0Ly8gU2hvcnRjdXQgZm9yIGRvY3VtZW50IHJlYWR5XG5cdFx0fSBlbHNlIGlmIChpc0Z1bmN0aW9uKHNlbGVjdG9yKSkge1xuXHRcdFx0cmV0dXJuIHJvb3QucmVhZHkgIT09IHVuZGVmaW5lZCA/IHJvb3QucmVhZHkoc2VsZWN0b3IpIDpcblxuXHRcdFx0Ly8gRXhlY3V0ZSBpbW1lZGlhdGVseSBpZiByZWFkeSBpcyBub3QgcHJlc2VudFxuXHRcdFx0c2VsZWN0b3IoalF1ZXJ5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4galF1ZXJ5Lm1ha2VBcnJheShzZWxlY3RvciwgdGhpcyk7XG5cdH07XG5cblx0Ly8gR2l2ZSB0aGUgaW5pdCBmdW5jdGlvbiB0aGUgalF1ZXJ5IHByb3RvdHlwZSBmb3IgbGF0ZXIgaW5zdGFudGlhdGlvblxuXHRpbml0LnByb3RvdHlwZSA9IGpRdWVyeS5mbjtcblxuXHQvLyBJbml0aWFsaXplIGNlbnRyYWwgcmVmZXJlbmNlXG5cdHJvb3RqUXVlcnkgPSBqUXVlcnkoZG9jdW1lbnQpO1xuXG5cdHZhciBycGFyZW50c3ByZXYgPSAvXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxcblxuXG5cdC8vIE1ldGhvZHMgZ3VhcmFudGVlZCB0byBwcm9kdWNlIGEgdW5pcXVlIHNldCB3aGVuIHN0YXJ0aW5nIGZyb20gYSB1bmlxdWUgc2V0XG5cdGd1YXJhbnRlZWRVbmlxdWUgPSB7XG5cdFx0Y2hpbGRyZW46IHRydWUsXG5cdFx0Y29udGVudHM6IHRydWUsXG5cdFx0bmV4dDogdHJ1ZSxcblx0XHRwcmV2OiB0cnVlXG5cdH07XG5cblx0alF1ZXJ5LmZuLmV4dGVuZCh7XG5cdFx0aGFzOiBmdW5jdGlvbiBoYXModGFyZ2V0KSB7XG5cdFx0XHR2YXIgdGFyZ2V0cyA9IGpRdWVyeSh0YXJnZXQsIHRoaXMpLFxuXHRcdFx0ICAgIGwgPSB0YXJnZXRzLmxlbmd0aDtcblxuXHRcdFx0cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIGkgPSAwO1xuXHRcdFx0XHRmb3IgKDsgaSA8IGw7IGkrKykge1xuXHRcdFx0XHRcdGlmIChqUXVlcnkuY29udGFpbnModGhpcywgdGFyZ2V0c1tpXSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdGNsb3Nlc3Q6IGZ1bmN0aW9uIGNsb3Nlc3Qoc2VsZWN0b3JzLCBjb250ZXh0KSB7XG5cdFx0XHR2YXIgY3VyLFxuXHRcdFx0ICAgIGkgPSAwLFxuXHRcdFx0ICAgIGwgPSB0aGlzLmxlbmd0aCxcblx0XHRcdCAgICBtYXRjaGVkID0gW10sXG5cdFx0XHQgICAgdGFyZ2V0cyA9IHR5cGVvZiBzZWxlY3RvcnMgIT09IFwic3RyaW5nXCIgJiYgalF1ZXJ5KHNlbGVjdG9ycyk7XG5cblx0XHRcdC8vIFBvc2l0aW9uYWwgc2VsZWN0b3JzIG5ldmVyIG1hdGNoLCBzaW5jZSB0aGVyZSdzIG5vIF9zZWxlY3Rpb25fIGNvbnRleHRcblx0XHRcdGlmICghcm5lZWRzQ29udGV4dC50ZXN0KHNlbGVjdG9ycykpIHtcblx0XHRcdFx0Zm9yICg7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0XHRmb3IgKGN1ciA9IHRoaXNbaV07IGN1ciAmJiBjdXIgIT09IGNvbnRleHQ7IGN1ciA9IGN1ci5wYXJlbnROb2RlKSB7XG5cblx0XHRcdFx0XHRcdC8vIEFsd2F5cyBza2lwIGRvY3VtZW50IGZyYWdtZW50c1xuXHRcdFx0XHRcdFx0aWYgKGN1ci5ub2RlVHlwZSA8IDExICYmICh0YXJnZXRzID8gdGFyZ2V0cy5pbmRleChjdXIpID4gLTEgOlxuXG5cdFx0XHRcdFx0XHQvLyBEb24ndCBwYXNzIG5vbi1lbGVtZW50cyB0byBTaXp6bGVcblx0XHRcdFx0XHRcdGN1ci5ub2RlVHlwZSA9PT0gMSAmJiBqUXVlcnkuZmluZC5tYXRjaGVzU2VsZWN0b3IoY3VyLCBzZWxlY3RvcnMpKSkge1xuXG5cdFx0XHRcdFx0XHRcdG1hdGNoZWQucHVzaChjdXIpO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKG1hdGNoZWQubGVuZ3RoID4gMSA/IGpRdWVyeS51bmlxdWVTb3J0KG1hdGNoZWQpIDogbWF0Y2hlZCk7XG5cdFx0fSxcblxuXHRcdC8vIERldGVybWluZSB0aGUgcG9zaXRpb24gb2YgYW4gZWxlbWVudCB3aXRoaW4gdGhlIHNldFxuXHRcdGluZGV4OiBmdW5jdGlvbiBpbmRleChlbGVtKSB7XG5cblx0XHRcdC8vIE5vIGFyZ3VtZW50LCByZXR1cm4gaW5kZXggaW4gcGFyZW50XG5cdFx0XHRpZiAoIWVsZW0pIHtcblx0XHRcdFx0cmV0dXJuIHRoaXNbMF0gJiYgdGhpc1swXS5wYXJlbnROb2RlID8gdGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGggOiAtMTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSW5kZXggaW4gc2VsZWN0b3Jcblx0XHRcdGlmICh0eXBlb2YgZWxlbSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRyZXR1cm4gaW5kZXhPZi5jYWxsKGpRdWVyeShlbGVtKSwgdGhpc1swXSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIExvY2F0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIGRlc2lyZWQgZWxlbWVudFxuXHRcdFx0cmV0dXJuIGluZGV4T2YuY2FsbCh0aGlzLFxuXG5cdFx0XHQvLyBJZiBpdCByZWNlaXZlcyBhIGpRdWVyeSBvYmplY3QsIHRoZSBmaXJzdCBlbGVtZW50IGlzIHVzZWRcblx0XHRcdGVsZW0uanF1ZXJ5ID8gZWxlbVswXSA6IGVsZW0pO1xuXHRcdH0sXG5cblx0XHRhZGQ6IGZ1bmN0aW9uIGFkZChzZWxlY3RvciwgY29udGV4dCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKGpRdWVyeS51bmlxdWVTb3J0KGpRdWVyeS5tZXJnZSh0aGlzLmdldCgpLCBqUXVlcnkoc2VsZWN0b3IsIGNvbnRleHQpKSkpO1xuXHRcdH0sXG5cblx0XHRhZGRCYWNrOiBmdW5jdGlvbiBhZGRCYWNrKHNlbGVjdG9yKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5hZGQoc2VsZWN0b3IgPT0gbnVsbCA/IHRoaXMucHJldk9iamVjdCA6IHRoaXMucHJldk9iamVjdC5maWx0ZXIoc2VsZWN0b3IpKTtcblx0XHR9XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIHNpYmxpbmcoY3VyLCBkaXIpIHtcblx0XHR3aGlsZSAoKGN1ciA9IGN1cltkaXJdKSAmJiBjdXIubm9kZVR5cGUgIT09IDEpIHt9XG5cdFx0cmV0dXJuIGN1cjtcblx0fVxuXG5cdGpRdWVyeS5lYWNoKHtcblx0XHRwYXJlbnQ6IGZ1bmN0aW9uIHBhcmVudChlbGVtKSB7XG5cdFx0XHR2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuXHRcdFx0cmV0dXJuIHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgIT09IDExID8gcGFyZW50IDogbnVsbDtcblx0XHR9LFxuXHRcdHBhcmVudHM6IGZ1bmN0aW9uIHBhcmVudHMoZWxlbSkge1xuXHRcdFx0cmV0dXJuIGRpcihlbGVtLCBcInBhcmVudE5vZGVcIik7XG5cdFx0fSxcblx0XHRwYXJlbnRzVW50aWw6IGZ1bmN0aW9uIHBhcmVudHNVbnRpbChlbGVtLCBpLCB1bnRpbCkge1xuXHRcdFx0cmV0dXJuIGRpcihlbGVtLCBcInBhcmVudE5vZGVcIiwgdW50aWwpO1xuXHRcdH0sXG5cdFx0bmV4dDogZnVuY3Rpb24gbmV4dChlbGVtKSB7XG5cdFx0XHRyZXR1cm4gc2libGluZyhlbGVtLCBcIm5leHRTaWJsaW5nXCIpO1xuXHRcdH0sXG5cdFx0cHJldjogZnVuY3Rpb24gcHJldihlbGVtKSB7XG5cdFx0XHRyZXR1cm4gc2libGluZyhlbGVtLCBcInByZXZpb3VzU2libGluZ1wiKTtcblx0XHR9LFxuXHRcdG5leHRBbGw6IGZ1bmN0aW9uIG5leHRBbGwoZWxlbSkge1xuXHRcdFx0cmV0dXJuIGRpcihlbGVtLCBcIm5leHRTaWJsaW5nXCIpO1xuXHRcdH0sXG5cdFx0cHJldkFsbDogZnVuY3Rpb24gcHJldkFsbChlbGVtKSB7XG5cdFx0XHRyZXR1cm4gZGlyKGVsZW0sIFwicHJldmlvdXNTaWJsaW5nXCIpO1xuXHRcdH0sXG5cdFx0bmV4dFVudGlsOiBmdW5jdGlvbiBuZXh0VW50aWwoZWxlbSwgaSwgdW50aWwpIHtcblx0XHRcdHJldHVybiBkaXIoZWxlbSwgXCJuZXh0U2libGluZ1wiLCB1bnRpbCk7XG5cdFx0fSxcblx0XHRwcmV2VW50aWw6IGZ1bmN0aW9uIHByZXZVbnRpbChlbGVtLCBpLCB1bnRpbCkge1xuXHRcdFx0cmV0dXJuIGRpcihlbGVtLCBcInByZXZpb3VzU2libGluZ1wiLCB1bnRpbCk7XG5cdFx0fSxcblx0XHRzaWJsaW5nczogZnVuY3Rpb24gc2libGluZ3MoZWxlbSkge1xuXHRcdFx0cmV0dXJuIF9zaWJsaW5ncygoZWxlbS5wYXJlbnROb2RlIHx8IHt9KS5maXJzdENoaWxkLCBlbGVtKTtcblx0XHR9LFxuXHRcdGNoaWxkcmVuOiBmdW5jdGlvbiBjaGlsZHJlbihlbGVtKSB7XG5cdFx0XHRyZXR1cm4gX3NpYmxpbmdzKGVsZW0uZmlyc3RDaGlsZCk7XG5cdFx0fSxcblx0XHRjb250ZW50czogZnVuY3Rpb24gY29udGVudHMoZWxlbSkge1xuXHRcdFx0aWYgKG5vZGVOYW1lKGVsZW0sIFwiaWZyYW1lXCIpKSB7XG5cdFx0XHRcdHJldHVybiBlbGVtLmNvbnRlbnREb2N1bWVudDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgOSAtIDExIG9ubHksIGlPUyA3IG9ubHksIEFuZHJvaWQgQnJvd3NlciA8PTQuMyBvbmx5XG5cdFx0XHQvLyBUcmVhdCB0aGUgdGVtcGxhdGUgZWxlbWVudCBhcyBhIHJlZ3VsYXIgb25lIGluIGJyb3dzZXJzIHRoYXRcblx0XHRcdC8vIGRvbid0IHN1cHBvcnQgaXQuXG5cdFx0XHRpZiAobm9kZU5hbWUoZWxlbSwgXCJ0ZW1wbGF0ZVwiKSkge1xuXHRcdFx0XHRlbGVtID0gZWxlbS5jb250ZW50IHx8IGVsZW07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBqUXVlcnkubWVyZ2UoW10sIGVsZW0uY2hpbGROb2Rlcyk7XG5cdFx0fVxuXHR9LCBmdW5jdGlvbiAobmFtZSwgZm4pIHtcblx0XHRqUXVlcnkuZm5bbmFtZV0gPSBmdW5jdGlvbiAodW50aWwsIHNlbGVjdG9yKSB7XG5cdFx0XHR2YXIgbWF0Y2hlZCA9IGpRdWVyeS5tYXAodGhpcywgZm4sIHVudGlsKTtcblxuXHRcdFx0aWYgKG5hbWUuc2xpY2UoLTUpICE9PSBcIlVudGlsXCIpIHtcblx0XHRcdFx0c2VsZWN0b3IgPSB1bnRpbDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNlbGVjdG9yICYmIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRtYXRjaGVkID0galF1ZXJ5LmZpbHRlcihzZWxlY3RvciwgbWF0Y2hlZCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLmxlbmd0aCA+IDEpIHtcblxuXHRcdFx0XHQvLyBSZW1vdmUgZHVwbGljYXRlc1xuXHRcdFx0XHRpZiAoIWd1YXJhbnRlZWRVbmlxdWVbbmFtZV0pIHtcblx0XHRcdFx0XHRqUXVlcnkudW5pcXVlU29ydChtYXRjaGVkKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJldmVyc2Ugb3JkZXIgZm9yIHBhcmVudHMqIGFuZCBwcmV2LWRlcml2YXRpdmVzXG5cdFx0XHRcdGlmIChycGFyZW50c3ByZXYudGVzdChuYW1lKSkge1xuXHRcdFx0XHRcdG1hdGNoZWQucmV2ZXJzZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayhtYXRjaGVkKTtcblx0XHR9O1xuXHR9KTtcblx0dmFyIHJub3RodG1sd2hpdGUgPSAvW15cXHgyMFxcdFxcclxcblxcZl0rL2c7XG5cblx0Ly8gQ29udmVydCBTdHJpbmctZm9ybWF0dGVkIG9wdGlvbnMgaW50byBPYmplY3QtZm9ybWF0dGVkIG9uZXNcblx0ZnVuY3Rpb24gY3JlYXRlT3B0aW9ucyhvcHRpb25zKSB7XG5cdFx0dmFyIG9iamVjdCA9IHt9O1xuXHRcdGpRdWVyeS5lYWNoKG9wdGlvbnMubWF0Y2gocm5vdGh0bWx3aGl0ZSkgfHwgW10sIGZ1bmN0aW9uIChfLCBmbGFnKSB7XG5cdFx0XHRvYmplY3RbZmxhZ10gPSB0cnVlO1xuXHRcdH0pO1xuXHRcdHJldHVybiBvYmplY3Q7XG5cdH1cblxuXHQvKlxuICAqIENyZWF0ZSBhIGNhbGxiYWNrIGxpc3QgdXNpbmcgdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxuICAqXG4gICpcdG9wdGlvbnM6IGFuIG9wdGlvbmFsIGxpc3Qgb2Ygc3BhY2Utc2VwYXJhdGVkIG9wdGlvbnMgdGhhdCB3aWxsIGNoYW5nZSBob3dcbiAgKlx0XHRcdHRoZSBjYWxsYmFjayBsaXN0IGJlaGF2ZXMgb3IgYSBtb3JlIHRyYWRpdGlvbmFsIG9wdGlvbiBvYmplY3RcbiAgKlxuICAqIEJ5IGRlZmF1bHQgYSBjYWxsYmFjayBsaXN0IHdpbGwgYWN0IGxpa2UgYW4gZXZlbnQgY2FsbGJhY2sgbGlzdCBhbmQgY2FuIGJlXG4gICogXCJmaXJlZFwiIG11bHRpcGxlIHRpbWVzLlxuICAqXG4gICogUG9zc2libGUgb3B0aW9uczpcbiAgKlxuICAqXHRvbmNlOlx0XHRcdHdpbGwgZW5zdXJlIHRoZSBjYWxsYmFjayBsaXN0IGNhbiBvbmx5IGJlIGZpcmVkIG9uY2UgKGxpa2UgYSBEZWZlcnJlZClcbiAgKlxuICAqXHRtZW1vcnk6XHRcdFx0d2lsbCBrZWVwIHRyYWNrIG9mIHByZXZpb3VzIHZhbHVlcyBhbmQgd2lsbCBjYWxsIGFueSBjYWxsYmFjayBhZGRlZFxuICAqXHRcdFx0XHRcdGFmdGVyIHRoZSBsaXN0IGhhcyBiZWVuIGZpcmVkIHJpZ2h0IGF3YXkgd2l0aCB0aGUgbGF0ZXN0IFwibWVtb3JpemVkXCJcbiAgKlx0XHRcdFx0XHR2YWx1ZXMgKGxpa2UgYSBEZWZlcnJlZClcbiAgKlxuICAqXHR1bmlxdWU6XHRcdFx0d2lsbCBlbnN1cmUgYSBjYWxsYmFjayBjYW4gb25seSBiZSBhZGRlZCBvbmNlIChubyBkdXBsaWNhdGUgaW4gdGhlIGxpc3QpXG4gICpcbiAgKlx0c3RvcE9uRmFsc2U6XHRpbnRlcnJ1cHQgY2FsbGluZ3Mgd2hlbiBhIGNhbGxiYWNrIHJldHVybnMgZmFsc2VcbiAgKlxuICAqL1xuXHRqUXVlcnkuQ2FsbGJhY2tzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuXHRcdC8vIENvbnZlcnQgb3B0aW9ucyBmcm9tIFN0cmluZy1mb3JtYXR0ZWQgdG8gT2JqZWN0LWZvcm1hdHRlZCBpZiBuZWVkZWRcblx0XHQvLyAod2UgY2hlY2sgaW4gY2FjaGUgZmlyc3QpXG5cdFx0b3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiID8gY3JlYXRlT3B0aW9ucyhvcHRpb25zKSA6IGpRdWVyeS5leHRlbmQoe30sIG9wdGlvbnMpO1xuXG5cdFx0dmFyIC8vIEZsYWcgdG8ga25vdyBpZiBsaXN0IGlzIGN1cnJlbnRseSBmaXJpbmdcblx0XHRmaXJpbmcsXG5cblxuXHRcdC8vIExhc3QgZmlyZSB2YWx1ZSBmb3Igbm9uLWZvcmdldHRhYmxlIGxpc3RzXG5cdFx0bWVtb3J5LFxuXG5cblx0XHQvLyBGbGFnIHRvIGtub3cgaWYgbGlzdCB3YXMgYWxyZWFkeSBmaXJlZFxuXHRcdF9maXJlZCxcblxuXG5cdFx0Ly8gRmxhZyB0byBwcmV2ZW50IGZpcmluZ1xuXHRcdF9sb2NrZWQsXG5cblxuXHRcdC8vIEFjdHVhbCBjYWxsYmFjayBsaXN0XG5cdFx0bGlzdCA9IFtdLFxuXG5cblx0XHQvLyBRdWV1ZSBvZiBleGVjdXRpb24gZGF0YSBmb3IgcmVwZWF0YWJsZSBsaXN0c1xuXHRcdHF1ZXVlID0gW10sXG5cblxuXHRcdC8vIEluZGV4IG9mIGN1cnJlbnRseSBmaXJpbmcgY2FsbGJhY2sgKG1vZGlmaWVkIGJ5IGFkZC9yZW1vdmUgYXMgbmVlZGVkKVxuXHRcdGZpcmluZ0luZGV4ID0gLTEsXG5cblxuXHRcdC8vIEZpcmUgY2FsbGJhY2tzXG5cdFx0ZmlyZSA9IGZ1bmN0aW9uIGZpcmUoKSB7XG5cblx0XHRcdC8vIEVuZm9yY2Ugc2luZ2xlLWZpcmluZ1xuXHRcdFx0X2xvY2tlZCA9IF9sb2NrZWQgfHwgb3B0aW9ucy5vbmNlO1xuXG5cdFx0XHQvLyBFeGVjdXRlIGNhbGxiYWNrcyBmb3IgYWxsIHBlbmRpbmcgZXhlY3V0aW9ucyxcblx0XHRcdC8vIHJlc3BlY3RpbmcgZmlyaW5nSW5kZXggb3ZlcnJpZGVzIGFuZCBydW50aW1lIGNoYW5nZXNcblx0XHRcdF9maXJlZCA9IGZpcmluZyA9IHRydWU7XG5cdFx0XHRmb3IgKDsgcXVldWUubGVuZ3RoOyBmaXJpbmdJbmRleCA9IC0xKSB7XG5cdFx0XHRcdG1lbW9yeSA9IHF1ZXVlLnNoaWZ0KCk7XG5cdFx0XHRcdHdoaWxlICgrK2ZpcmluZ0luZGV4IDwgbGlzdC5sZW5ndGgpIHtcblxuXHRcdFx0XHRcdC8vIFJ1biBjYWxsYmFjayBhbmQgY2hlY2sgZm9yIGVhcmx5IHRlcm1pbmF0aW9uXG5cdFx0XHRcdFx0aWYgKGxpc3RbZmlyaW5nSW5kZXhdLmFwcGx5KG1lbW9yeVswXSwgbWVtb3J5WzFdKSA9PT0gZmFsc2UgJiYgb3B0aW9ucy5zdG9wT25GYWxzZSkge1xuXG5cdFx0XHRcdFx0XHQvLyBKdW1wIHRvIGVuZCBhbmQgZm9yZ2V0IHRoZSBkYXRhIHNvIC5hZGQgZG9lc24ndCByZS1maXJlXG5cdFx0XHRcdFx0XHRmaXJpbmdJbmRleCA9IGxpc3QubGVuZ3RoO1xuXHRcdFx0XHRcdFx0bWVtb3J5ID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZvcmdldCB0aGUgZGF0YSBpZiB3ZSdyZSBkb25lIHdpdGggaXRcblx0XHRcdGlmICghb3B0aW9ucy5tZW1vcnkpIHtcblx0XHRcdFx0bWVtb3J5ID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGZpcmluZyA9IGZhbHNlO1xuXG5cdFx0XHQvLyBDbGVhbiB1cCBpZiB3ZSdyZSBkb25lIGZpcmluZyBmb3IgZ29vZFxuXHRcdFx0aWYgKF9sb2NrZWQpIHtcblxuXHRcdFx0XHQvLyBLZWVwIGFuIGVtcHR5IGxpc3QgaWYgd2UgaGF2ZSBkYXRhIGZvciBmdXR1cmUgYWRkIGNhbGxzXG5cdFx0XHRcdGlmIChtZW1vcnkpIHtcblx0XHRcdFx0XHRsaXN0ID0gW107XG5cblx0XHRcdFx0XHQvLyBPdGhlcndpc2UsIHRoaXMgb2JqZWN0IGlzIHNwZW50XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGlzdCA9IFwiXCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cblx0XHQvLyBBY3R1YWwgQ2FsbGJhY2tzIG9iamVjdFxuXHRcdHNlbGYgPSB7XG5cblx0XHRcdC8vIEFkZCBhIGNhbGxiYWNrIG9yIGEgY29sbGVjdGlvbiBvZiBjYWxsYmFja3MgdG8gdGhlIGxpc3Rcblx0XHRcdGFkZDogZnVuY3Rpb24gYWRkKCkge1xuXHRcdFx0XHRpZiAobGlzdCkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgd2UgaGF2ZSBtZW1vcnkgZnJvbSBhIHBhc3QgcnVuLCB3ZSBzaG91bGQgZmlyZSBhZnRlciBhZGRpbmdcblx0XHRcdFx0XHRpZiAobWVtb3J5ICYmICFmaXJpbmcpIHtcblx0XHRcdFx0XHRcdGZpcmluZ0luZGV4ID0gbGlzdC5sZW5ndGggLSAxO1xuXHRcdFx0XHRcdFx0cXVldWUucHVzaChtZW1vcnkpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdChmdW5jdGlvbiBhZGQoYXJncykge1xuXHRcdFx0XHRcdFx0alF1ZXJ5LmVhY2goYXJncywgZnVuY3Rpb24gKF8sIGFyZykge1xuXHRcdFx0XHRcdFx0XHRpZiAoaXNGdW5jdGlvbihhcmcpKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLnVuaXF1ZSB8fCAhc2VsZi5oYXMoYXJnKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGlzdC5wdXNoKGFyZyk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGFyZyAmJiBhcmcubGVuZ3RoICYmIHRvVHlwZShhcmcpICE9PSBcInN0cmluZ1wiKSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBJbnNwZWN0IHJlY3Vyc2l2ZWx5XG5cdFx0XHRcdFx0XHRcdFx0YWRkKGFyZyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pKGFyZ3VtZW50cyk7XG5cblx0XHRcdFx0XHRpZiAobWVtb3J5ICYmICFmaXJpbmcpIHtcblx0XHRcdFx0XHRcdGZpcmUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBSZW1vdmUgYSBjYWxsYmFjayBmcm9tIHRoZSBsaXN0XG5cdFx0XHRyZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcblx0XHRcdFx0alF1ZXJ5LmVhY2goYXJndW1lbnRzLCBmdW5jdGlvbiAoXywgYXJnKSB7XG5cdFx0XHRcdFx0dmFyIGluZGV4O1xuXHRcdFx0XHRcdHdoaWxlICgoaW5kZXggPSBqUXVlcnkuaW5BcnJheShhcmcsIGxpc3QsIGluZGV4KSkgPiAtMSkge1xuXHRcdFx0XHRcdFx0bGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXG5cdFx0XHRcdFx0XHQvLyBIYW5kbGUgZmlyaW5nIGluZGV4ZXNcblx0XHRcdFx0XHRcdGlmIChpbmRleCA8PSBmaXJpbmdJbmRleCkge1xuXHRcdFx0XHRcdFx0XHRmaXJpbmdJbmRleC0tO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gQ2hlY2sgaWYgYSBnaXZlbiBjYWxsYmFjayBpcyBpbiB0aGUgbGlzdC5cblx0XHRcdC8vIElmIG5vIGFyZ3VtZW50IGlzIGdpdmVuLCByZXR1cm4gd2hldGhlciBvciBub3QgbGlzdCBoYXMgY2FsbGJhY2tzIGF0dGFjaGVkLlxuXHRcdFx0aGFzOiBmdW5jdGlvbiBoYXMoZm4pIHtcblx0XHRcdFx0cmV0dXJuIGZuID8galF1ZXJ5LmluQXJyYXkoZm4sIGxpc3QpID4gLTEgOiBsaXN0Lmxlbmd0aCA+IDA7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBSZW1vdmUgYWxsIGNhbGxiYWNrcyBmcm9tIHRoZSBsaXN0XG5cdFx0XHRlbXB0eTogZnVuY3Rpb24gZW1wdHkoKSB7XG5cdFx0XHRcdGlmIChsaXN0KSB7XG5cdFx0XHRcdFx0bGlzdCA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gRGlzYWJsZSAuZmlyZSBhbmQgLmFkZFxuXHRcdFx0Ly8gQWJvcnQgYW55IGN1cnJlbnQvcGVuZGluZyBleGVjdXRpb25zXG5cdFx0XHQvLyBDbGVhciBhbGwgY2FsbGJhY2tzIGFuZCB2YWx1ZXNcblx0XHRcdGRpc2FibGU6IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG5cdFx0XHRcdF9sb2NrZWQgPSBxdWV1ZSA9IFtdO1xuXHRcdFx0XHRsaXN0ID0gbWVtb3J5ID0gXCJcIjtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXHRcdFx0ZGlzYWJsZWQ6IGZ1bmN0aW9uIGRpc2FibGVkKCkge1xuXHRcdFx0XHRyZXR1cm4gIWxpc3Q7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBEaXNhYmxlIC5maXJlXG5cdFx0XHQvLyBBbHNvIGRpc2FibGUgLmFkZCB1bmxlc3Mgd2UgaGF2ZSBtZW1vcnkgKHNpbmNlIGl0IHdvdWxkIGhhdmUgbm8gZWZmZWN0KVxuXHRcdFx0Ly8gQWJvcnQgYW55IHBlbmRpbmcgZXhlY3V0aW9uc1xuXHRcdFx0bG9jazogZnVuY3Rpb24gbG9jaygpIHtcblx0XHRcdFx0X2xvY2tlZCA9IHF1ZXVlID0gW107XG5cdFx0XHRcdGlmICghbWVtb3J5ICYmICFmaXJpbmcpIHtcblx0XHRcdFx0XHRsaXN0ID0gbWVtb3J5ID0gXCJcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cdFx0XHRsb2NrZWQ6IGZ1bmN0aW9uIGxvY2tlZCgpIHtcblx0XHRcdFx0cmV0dXJuICEhX2xvY2tlZDtcblx0XHRcdH0sXG5cblx0XHRcdC8vIENhbGwgYWxsIGNhbGxiYWNrcyB3aXRoIHRoZSBnaXZlbiBjb250ZXh0IGFuZCBhcmd1bWVudHNcblx0XHRcdGZpcmVXaXRoOiBmdW5jdGlvbiBmaXJlV2l0aChjb250ZXh0LCBhcmdzKSB7XG5cdFx0XHRcdGlmICghX2xvY2tlZCkge1xuXHRcdFx0XHRcdGFyZ3MgPSBhcmdzIHx8IFtdO1xuXHRcdFx0XHRcdGFyZ3MgPSBbY29udGV4dCwgYXJncy5zbGljZSA/IGFyZ3Muc2xpY2UoKSA6IGFyZ3NdO1xuXHRcdFx0XHRcdHF1ZXVlLnB1c2goYXJncyk7XG5cdFx0XHRcdFx0aWYgKCFmaXJpbmcpIHtcblx0XHRcdFx0XHRcdGZpcmUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBDYWxsIGFsbCB0aGUgY2FsbGJhY2tzIHdpdGggdGhlIGdpdmVuIGFyZ3VtZW50c1xuXHRcdFx0ZmlyZTogZnVuY3Rpb24gZmlyZSgpIHtcblx0XHRcdFx0c2VsZi5maXJlV2l0aCh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIFRvIGtub3cgaWYgdGhlIGNhbGxiYWNrcyBoYXZlIGFscmVhZHkgYmVlbiBjYWxsZWQgYXQgbGVhc3Qgb25jZVxuXHRcdFx0ZmlyZWQ6IGZ1bmN0aW9uIGZpcmVkKCkge1xuXHRcdFx0XHRyZXR1cm4gISFfZmlyZWQ7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHJldHVybiBzZWxmO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIElkZW50aXR5KHYpIHtcblx0XHRyZXR1cm4gdjtcblx0fVxuXHRmdW5jdGlvbiBUaHJvd2VyKGV4KSB7XG5cdFx0dGhyb3cgZXg7XG5cdH1cblxuXHRmdW5jdGlvbiBhZG9wdFZhbHVlKHZhbHVlLCByZXNvbHZlLCByZWplY3QsIG5vVmFsdWUpIHtcblx0XHR2YXIgbWV0aG9kO1xuXG5cdFx0dHJ5IHtcblxuXHRcdFx0Ly8gQ2hlY2sgZm9yIHByb21pc2UgYXNwZWN0IGZpcnN0IHRvIHByaXZpbGVnZSBzeW5jaHJvbm91cyBiZWhhdmlvclxuXHRcdFx0aWYgKHZhbHVlICYmIGlzRnVuY3Rpb24obWV0aG9kID0gdmFsdWUucHJvbWlzZSkpIHtcblx0XHRcdFx0bWV0aG9kLmNhbGwodmFsdWUpLmRvbmUocmVzb2x2ZSkuZmFpbChyZWplY3QpO1xuXG5cdFx0XHRcdC8vIE90aGVyIHRoZW5hYmxlc1xuXHRcdFx0fSBlbHNlIGlmICh2YWx1ZSAmJiBpc0Z1bmN0aW9uKG1ldGhvZCA9IHZhbHVlLnRoZW4pKSB7XG5cdFx0XHRcdG1ldGhvZC5jYWxsKHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuXG5cdFx0XHRcdC8vIE90aGVyIG5vbi10aGVuYWJsZXNcblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gQ29udHJvbCBgcmVzb2x2ZWAgYXJndW1lbnRzIGJ5IGxldHRpbmcgQXJyYXkjc2xpY2UgY2FzdCBib29sZWFuIGBub1ZhbHVlYCB0byBpbnRlZ2VyOlxuXHRcdFx0XHQvLyAqIGZhbHNlOiBbIHZhbHVlIF0uc2xpY2UoIDAgKSA9PiByZXNvbHZlKCB2YWx1ZSApXG5cdFx0XHRcdC8vICogdHJ1ZTogWyB2YWx1ZSBdLnNsaWNlKCAxICkgPT4gcmVzb2x2ZSgpXG5cdFx0XHRcdHJlc29sdmUuYXBwbHkodW5kZWZpbmVkLCBbdmFsdWVdLnNsaWNlKG5vVmFsdWUpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRm9yIFByb21pc2VzL0ErLCBjb252ZXJ0IGV4Y2VwdGlvbnMgaW50byByZWplY3Rpb25zXG5cdFx0XHQvLyBTaW5jZSBqUXVlcnkud2hlbiBkb2Vzbid0IHVud3JhcCB0aGVuYWJsZXMsIHdlIGNhbiBza2lwIHRoZSBleHRyYSBjaGVja3MgYXBwZWFyaW5nIGluXG5cdFx0XHQvLyBEZWZlcnJlZCN0aGVuIHRvIGNvbmRpdGlvbmFsbHkgc3VwcHJlc3MgcmVqZWN0aW9uLlxuXHRcdH0gY2F0Y2ggKHZhbHVlKSB7XG5cblx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgNC4wIG9ubHlcblx0XHRcdC8vIFN0cmljdCBtb2RlIGZ1bmN0aW9ucyBpbnZva2VkIHdpdGhvdXQgLmNhbGwvLmFwcGx5IGdldCBnbG9iYWwtb2JqZWN0IGNvbnRleHRcblx0XHRcdHJlamVjdC5hcHBseSh1bmRlZmluZWQsIFt2YWx1ZV0pO1xuXHRcdH1cblx0fVxuXG5cdGpRdWVyeS5leHRlbmQoe1xuXG5cdFx0RGVmZXJyZWQ6IGZ1bmN0aW9uIERlZmVycmVkKGZ1bmMpIHtcblx0XHRcdHZhciB0dXBsZXMgPSBbXG5cblx0XHRcdC8vIGFjdGlvbiwgYWRkIGxpc3RlbmVyLCBjYWxsYmFja3MsXG5cdFx0XHQvLyAuLi4gLnRoZW4gaGFuZGxlcnMsIGFyZ3VtZW50IGluZGV4LCBbZmluYWwgc3RhdGVdXG5cdFx0XHRbXCJub3RpZnlcIiwgXCJwcm9ncmVzc1wiLCBqUXVlcnkuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLCBqUXVlcnkuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLCAyXSwgW1wicmVzb2x2ZVwiLCBcImRvbmVcIiwgalF1ZXJ5LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLCBqUXVlcnkuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksIDAsIFwicmVzb2x2ZWRcIl0sIFtcInJlamVjdFwiLCBcImZhaWxcIiwgalF1ZXJ5LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLCBqUXVlcnkuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksIDEsIFwicmVqZWN0ZWRcIl1dLFxuXHRcdFx0ICAgIF9zdGF0ZSA9IFwicGVuZGluZ1wiLFxuXHRcdFx0ICAgIF9wcm9taXNlID0ge1xuXHRcdFx0XHRzdGF0ZTogZnVuY3Rpb24gc3RhdGUoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIF9zdGF0ZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0YWx3YXlzOiBmdW5jdGlvbiBhbHdheXMoKSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWQuZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJjYXRjaFwiOiBmdW5jdGlvbiBfY2F0Y2goZm4pIHtcblx0XHRcdFx0XHRyZXR1cm4gX3Byb21pc2UudGhlbihudWxsLCBmbik7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gS2VlcCBwaXBlIGZvciBiYWNrLWNvbXBhdFxuXHRcdFx0XHRwaXBlOiBmdW5jdGlvbiBwaXBlKCkgLyogZm5Eb25lLCBmbkZhaWwsIGZuUHJvZ3Jlc3MgKi97XG5cdFx0XHRcdFx0dmFyIGZucyA9IGFyZ3VtZW50cztcblxuXHRcdFx0XHRcdHJldHVybiBqUXVlcnkuRGVmZXJyZWQoZnVuY3Rpb24gKG5ld0RlZmVyKSB7XG5cdFx0XHRcdFx0XHRqUXVlcnkuZWFjaCh0dXBsZXMsIGZ1bmN0aW9uIChpLCB0dXBsZSkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIE1hcCB0dXBsZXMgKHByb2dyZXNzLCBkb25lLCBmYWlsKSB0byBhcmd1bWVudHMgKGRvbmUsIGZhaWwsIHByb2dyZXNzKVxuXHRcdFx0XHRcdFx0XHR2YXIgZm4gPSBpc0Z1bmN0aW9uKGZuc1t0dXBsZVs0XV0pICYmIGZuc1t0dXBsZVs0XV07XG5cblx0XHRcdFx0XHRcdFx0Ly8gZGVmZXJyZWQucHJvZ3Jlc3MoZnVuY3Rpb24oKSB7IGJpbmQgdG8gbmV3RGVmZXIgb3IgbmV3RGVmZXIubm90aWZ5IH0pXG5cdFx0XHRcdFx0XHRcdC8vIGRlZmVycmVkLmRvbmUoZnVuY3Rpb24oKSB7IGJpbmQgdG8gbmV3RGVmZXIgb3IgbmV3RGVmZXIucmVzb2x2ZSB9KVxuXHRcdFx0XHRcdFx0XHQvLyBkZWZlcnJlZC5mYWlsKGZ1bmN0aW9uKCkgeyBiaW5kIHRvIG5ld0RlZmVyIG9yIG5ld0RlZmVyLnJlamVjdCB9KVxuXHRcdFx0XHRcdFx0XHRkZWZlcnJlZFt0dXBsZVsxXV0oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZXR1cm5lZCA9IGZuICYmIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJldHVybmVkICYmIGlzRnVuY3Rpb24ocmV0dXJuZWQucHJvbWlzZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybmVkLnByb21pc2UoKS5wcm9ncmVzcyhuZXdEZWZlci5ub3RpZnkpLmRvbmUobmV3RGVmZXIucmVzb2x2ZSkuZmFpbChuZXdEZWZlci5yZWplY3QpO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRuZXdEZWZlclt0dXBsZVswXSArIFwiV2l0aFwiXSh0aGlzLCBmbiA/IFtyZXR1cm5lZF0gOiBhcmd1bWVudHMpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGZucyA9IG51bGw7XG5cdFx0XHRcdFx0fSkucHJvbWlzZSgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBvblByb2dyZXNzKSB7XG5cdFx0XHRcdFx0dmFyIG1heERlcHRoID0gMDtcblx0XHRcdFx0XHRmdW5jdGlvbiByZXNvbHZlKGRlcHRoLCBkZWZlcnJlZCwgaGFuZGxlciwgc3BlY2lhbCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzLFxuXHRcdFx0XHRcdFx0XHQgICAgYXJncyA9IGFyZ3VtZW50cyxcblx0XHRcdFx0XHRcdFx0ICAgIG1pZ2h0VGhyb3cgPSBmdW5jdGlvbiBtaWdodFRocm93KCkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZXR1cm5lZCwgdGhlbjtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjMuMy4zXG5cdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNTlcblx0XHRcdFx0XHRcdFx0XHQvLyBJZ25vcmUgZG91YmxlLXJlc29sdXRpb24gYXR0ZW1wdHNcblx0XHRcdFx0XHRcdFx0XHRpZiAoZGVwdGggPCBtYXhEZXB0aCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHJldHVybmVkID0gaGFuZGxlci5hcHBseSh0aGF0LCBhcmdzKTtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjFcblx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC00OFxuXHRcdFx0XHRcdFx0XHRcdGlmIChyZXR1cm5lZCA9PT0gZGVmZXJyZWQucHJvbWlzZSgpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlbmFibGUgc2VsZi1yZXNvbHV0aW9uXCIpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb25zIDIuMy4zLjEsIDMuNVxuXHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTU0XG5cdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNzVcblx0XHRcdFx0XHRcdFx0XHQvLyBSZXRyaWV2ZSBgdGhlbmAgb25seSBvbmNlXG5cdFx0XHRcdFx0XHRcdFx0dGhlbiA9IHJldHVybmVkICYmIChcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjRcblx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC02NFxuXHRcdFx0XHRcdFx0XHRcdC8vIE9ubHkgY2hlY2sgb2JqZWN0cyBhbmQgZnVuY3Rpb25zIGZvciB0aGVuYWJpbGl0eVxuXHRcdFx0XHRcdFx0XHRcdCh0eXBlb2YgcmV0dXJuZWQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihyZXR1cm5lZCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiByZXR1cm5lZCA9PT0gXCJmdW5jdGlvblwiKSAmJiByZXR1cm5lZC50aGVuO1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gSGFuZGxlIGEgcmV0dXJuZWQgdGhlbmFibGVcblx0XHRcdFx0XHRcdFx0XHRpZiAoaXNGdW5jdGlvbih0aGVuKSkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBTcGVjaWFsIHByb2Nlc3NvcnMgKG5vdGlmeSkganVzdCB3YWl0IGZvciByZXNvbHV0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoc3BlY2lhbCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGVuLmNhbGwocmV0dXJuZWQsIHJlc29sdmUobWF4RGVwdGgsIGRlZmVycmVkLCBJZGVudGl0eSwgc3BlY2lhbCksIHJlc29sdmUobWF4RGVwdGgsIGRlZmVycmVkLCBUaHJvd2VyLCBzcGVjaWFsKSk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gTm9ybWFsIHByb2Nlc3NvcnMgKHJlc29sdmUpIGFsc28gaG9vayBpbnRvIHByb2dyZXNzXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIC4uLmFuZCBkaXNyZWdhcmQgb2xkZXIgcmVzb2x1dGlvbiB2YWx1ZXNcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWF4RGVwdGgrKztcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGVuLmNhbGwocmV0dXJuZWQsIHJlc29sdmUobWF4RGVwdGgsIGRlZmVycmVkLCBJZGVudGl0eSwgc3BlY2lhbCksIHJlc29sdmUobWF4RGVwdGgsIGRlZmVycmVkLCBUaHJvd2VyLCBzcGVjaWFsKSwgcmVzb2x2ZShtYXhEZXB0aCwgZGVmZXJyZWQsIElkZW50aXR5LCBkZWZlcnJlZC5ub3RpZnlXaXRoKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIEhhbmRsZSBhbGwgb3RoZXIgcmV0dXJuZWQgdmFsdWVzXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gT25seSBzdWJzdGl0dXRlIGhhbmRsZXJzIHBhc3Mgb24gY29udGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gYW5kIG11bHRpcGxlIHZhbHVlcyAobm9uLXNwZWMgYmVoYXZpb3IpXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoaGFuZGxlciAhPT0gSWRlbnRpdHkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdCA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJncyA9IFtyZXR1cm5lZF07XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFByb2Nlc3MgdGhlIHZhbHVlKHMpXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBEZWZhdWx0IHByb2Nlc3MgaXMgcmVzb2x2ZVxuXHRcdFx0XHRcdFx0XHRcdFx0KHNwZWNpYWwgfHwgZGVmZXJyZWQucmVzb2x2ZVdpdGgpKHRoYXQsIGFyZ3MpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSxcblxuXG5cdFx0XHRcdFx0XHRcdC8vIE9ubHkgbm9ybWFsIHByb2Nlc3NvcnMgKHJlc29sdmUpIGNhdGNoIGFuZCByZWplY3QgZXhjZXB0aW9uc1xuXHRcdFx0XHRcdFx0XHRwcm9jZXNzID0gc3BlY2lhbCA/IG1pZ2h0VGhyb3cgOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRcdG1pZ2h0VGhyb3coKTtcblx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmIChqUXVlcnkuRGVmZXJyZWQuZXhjZXB0aW9uSG9vaykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayhlLCBwcm9jZXNzLnN0YWNrVHJhY2UpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy4zLjMuNC4xXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC02MVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gSWdub3JlIHBvc3QtcmVzb2x1dGlvbiBleGNlcHRpb25zXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZGVwdGggKyAxID49IG1heERlcHRoKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gT25seSBzdWJzdGl0dXRlIGhhbmRsZXJzIHBhc3Mgb24gY29udGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBhbmQgbXVsdGlwbGUgdmFsdWVzIChub24tc3BlYyBiZWhhdmlvcilcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGhhbmRsZXIgIT09IFRocm93ZXIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyZ3MgPSBbZV07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3RXaXRoKHRoYXQsIGFyZ3MpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy4zLjMuMVxuXHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC01N1xuXHRcdFx0XHRcdFx0XHQvLyBSZS1yZXNvbHZlIHByb21pc2VzIGltbWVkaWF0ZWx5IHRvIGRvZGdlIGZhbHNlIHJlamVjdGlvbiBmcm9tXG5cdFx0XHRcdFx0XHRcdC8vIHN1YnNlcXVlbnQgZXJyb3JzXG5cdFx0XHRcdFx0XHRcdGlmIChkZXB0aCkge1xuXHRcdFx0XHRcdFx0XHRcdHByb2Nlc3MoKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIENhbGwgYW4gb3B0aW9uYWwgaG9vayB0byByZWNvcmQgdGhlIHN0YWNrLCBpbiBjYXNlIG9mIGV4Y2VwdGlvblxuXHRcdFx0XHRcdFx0XHRcdC8vIHNpbmNlIGl0J3Mgb3RoZXJ3aXNlIGxvc3Qgd2hlbiBleGVjdXRpb24gZ29lcyBhc3luY1xuXHRcdFx0XHRcdFx0XHRcdGlmIChqUXVlcnkuRGVmZXJyZWQuZ2V0U3RhY2tIb29rKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwcm9jZXNzLnN0YWNrVHJhY2UgPSBqUXVlcnkuRGVmZXJyZWQuZ2V0U3RhY2tIb29rKCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KHByb2Nlc3MpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBqUXVlcnkuRGVmZXJyZWQoZnVuY3Rpb24gKG5ld0RlZmVyKSB7XG5cblx0XHRcdFx0XHRcdC8vIHByb2dyZXNzX2hhbmRsZXJzLmFkZCggLi4uIClcblx0XHRcdFx0XHRcdHR1cGxlc1swXVszXS5hZGQocmVzb2x2ZSgwLCBuZXdEZWZlciwgaXNGdW5jdGlvbihvblByb2dyZXNzKSA/IG9uUHJvZ3Jlc3MgOiBJZGVudGl0eSwgbmV3RGVmZXIubm90aWZ5V2l0aCkpO1xuXG5cdFx0XHRcdFx0XHQvLyBmdWxmaWxsZWRfaGFuZGxlcnMuYWRkKCAuLi4gKVxuXHRcdFx0XHRcdFx0dHVwbGVzWzFdWzNdLmFkZChyZXNvbHZlKDAsIG5ld0RlZmVyLCBpc0Z1bmN0aW9uKG9uRnVsZmlsbGVkKSA/IG9uRnVsZmlsbGVkIDogSWRlbnRpdHkpKTtcblxuXHRcdFx0XHRcdFx0Ly8gcmVqZWN0ZWRfaGFuZGxlcnMuYWRkKCAuLi4gKVxuXHRcdFx0XHRcdFx0dHVwbGVzWzJdWzNdLmFkZChyZXNvbHZlKDAsIG5ld0RlZmVyLCBpc0Z1bmN0aW9uKG9uUmVqZWN0ZWQpID8gb25SZWplY3RlZCA6IFRocm93ZXIpKTtcblx0XHRcdFx0XHR9KS5wcm9taXNlKCk7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gR2V0IGEgcHJvbWlzZSBmb3IgdGhpcyBkZWZlcnJlZFxuXHRcdFx0XHQvLyBJZiBvYmogaXMgcHJvdmlkZWQsIHRoZSBwcm9taXNlIGFzcGVjdCBpcyBhZGRlZCB0byB0aGUgb2JqZWN0XG5cdFx0XHRcdHByb21pc2U6IGZ1bmN0aW9uIHByb21pc2Uob2JqKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9iaiAhPSBudWxsID8galF1ZXJ5LmV4dGVuZChvYmosIF9wcm9taXNlKSA6IF9wcm9taXNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ICAgIGRlZmVycmVkID0ge307XG5cblx0XHRcdC8vIEFkZCBsaXN0LXNwZWNpZmljIG1ldGhvZHNcblx0XHRcdGpRdWVyeS5lYWNoKHR1cGxlcywgZnVuY3Rpb24gKGksIHR1cGxlKSB7XG5cdFx0XHRcdHZhciBsaXN0ID0gdHVwbGVbMl0sXG5cdFx0XHRcdCAgICBzdGF0ZVN0cmluZyA9IHR1cGxlWzVdO1xuXG5cdFx0XHRcdC8vIHByb21pc2UucHJvZ3Jlc3MgPSBsaXN0LmFkZFxuXHRcdFx0XHQvLyBwcm9taXNlLmRvbmUgPSBsaXN0LmFkZFxuXHRcdFx0XHQvLyBwcm9taXNlLmZhaWwgPSBsaXN0LmFkZFxuXHRcdFx0XHRfcHJvbWlzZVt0dXBsZVsxXV0gPSBsaXN0LmFkZDtcblxuXHRcdFx0XHQvLyBIYW5kbGUgc3RhdGVcblx0XHRcdFx0aWYgKHN0YXRlU3RyaW5nKSB7XG5cdFx0XHRcdFx0bGlzdC5hZGQoZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdFx0XHQvLyBzdGF0ZSA9IFwicmVzb2x2ZWRcIiAoaS5lLiwgZnVsZmlsbGVkKVxuXHRcdFx0XHRcdFx0Ly8gc3RhdGUgPSBcInJlamVjdGVkXCJcblx0XHRcdFx0XHRcdF9zdGF0ZSA9IHN0YXRlU3RyaW5nO1xuXHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHQvLyByZWplY3RlZF9jYWxsYmFja3MuZGlzYWJsZVxuXHRcdFx0XHRcdC8vIGZ1bGZpbGxlZF9jYWxsYmFja3MuZGlzYWJsZVxuXHRcdFx0XHRcdHR1cGxlc1szIC0gaV1bMl0uZGlzYWJsZSxcblxuXHRcdFx0XHRcdC8vIHJlamVjdGVkX2hhbmRsZXJzLmRpc2FibGVcblx0XHRcdFx0XHQvLyBmdWxmaWxsZWRfaGFuZGxlcnMuZGlzYWJsZVxuXHRcdFx0XHRcdHR1cGxlc1szIC0gaV1bM10uZGlzYWJsZSxcblxuXHRcdFx0XHRcdC8vIHByb2dyZXNzX2NhbGxiYWNrcy5sb2NrXG5cdFx0XHRcdFx0dHVwbGVzWzBdWzJdLmxvY2ssXG5cblx0XHRcdFx0XHQvLyBwcm9ncmVzc19oYW5kbGVycy5sb2NrXG5cdFx0XHRcdFx0dHVwbGVzWzBdWzNdLmxvY2spO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gcHJvZ3Jlc3NfaGFuZGxlcnMuZmlyZVxuXHRcdFx0XHQvLyBmdWxmaWxsZWRfaGFuZGxlcnMuZmlyZVxuXHRcdFx0XHQvLyByZWplY3RlZF9oYW5kbGVycy5maXJlXG5cdFx0XHRcdGxpc3QuYWRkKHR1cGxlWzNdLmZpcmUpO1xuXG5cdFx0XHRcdC8vIGRlZmVycmVkLm5vdGlmeSA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5ub3RpZnlXaXRoKC4uLikgfVxuXHRcdFx0XHQvLyBkZWZlcnJlZC5yZXNvbHZlID0gZnVuY3Rpb24oKSB7IGRlZmVycmVkLnJlc29sdmVXaXRoKC4uLikgfVxuXHRcdFx0XHQvLyBkZWZlcnJlZC5yZWplY3QgPSBmdW5jdGlvbigpIHsgZGVmZXJyZWQucmVqZWN0V2l0aCguLi4pIH1cblx0XHRcdFx0ZGVmZXJyZWRbdHVwbGVbMF1dID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGRlZmVycmVkW3R1cGxlWzBdICsgXCJXaXRoXCJdKHRoaXMgPT09IGRlZmVycmVkID8gdW5kZWZpbmVkIDogdGhpcywgYXJndW1lbnRzKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fTtcblxuXHRcdFx0XHQvLyBkZWZlcnJlZC5ub3RpZnlXaXRoID0gbGlzdC5maXJlV2l0aFxuXHRcdFx0XHQvLyBkZWZlcnJlZC5yZXNvbHZlV2l0aCA9IGxpc3QuZmlyZVdpdGhcblx0XHRcdFx0Ly8gZGVmZXJyZWQucmVqZWN0V2l0aCA9IGxpc3QuZmlyZVdpdGhcblx0XHRcdFx0ZGVmZXJyZWRbdHVwbGVbMF0gKyBcIldpdGhcIl0gPSBsaXN0LmZpcmVXaXRoO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIE1ha2UgdGhlIGRlZmVycmVkIGEgcHJvbWlzZVxuXHRcdFx0X3Byb21pc2UucHJvbWlzZShkZWZlcnJlZCk7XG5cblx0XHRcdC8vIENhbGwgZ2l2ZW4gZnVuYyBpZiBhbnlcblx0XHRcdGlmIChmdW5jKSB7XG5cdFx0XHRcdGZ1bmMuY2FsbChkZWZlcnJlZCwgZGVmZXJyZWQpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBbGwgZG9uZSFcblx0XHRcdHJldHVybiBkZWZlcnJlZDtcblx0XHR9LFxuXG5cdFx0Ly8gRGVmZXJyZWQgaGVscGVyXG5cdFx0d2hlbjogZnVuY3Rpb24gd2hlbihzaW5nbGVWYWx1ZSkge1xuXHRcdFx0dmFyXG5cblx0XHRcdC8vIGNvdW50IG9mIHVuY29tcGxldGVkIHN1Ym9yZGluYXRlc1xuXHRcdFx0cmVtYWluaW5nID0gYXJndW1lbnRzLmxlbmd0aCxcblxuXG5cdFx0XHQvLyBjb3VudCBvZiB1bnByb2Nlc3NlZCBhcmd1bWVudHNcblx0XHRcdGkgPSByZW1haW5pbmcsXG5cblxuXHRcdFx0Ly8gc3Vib3JkaW5hdGUgZnVsZmlsbG1lbnQgZGF0YVxuXHRcdFx0cmVzb2x2ZUNvbnRleHRzID0gQXJyYXkoaSksXG5cdFx0XHQgICAgcmVzb2x2ZVZhbHVlcyA9IF9zbGljZS5jYWxsKGFyZ3VtZW50cyksXG5cblxuXHRcdFx0Ly8gdGhlIG1hc3RlciBEZWZlcnJlZFxuXHRcdFx0bWFzdGVyID0galF1ZXJ5LkRlZmVycmVkKCksXG5cblxuXHRcdFx0Ly8gc3Vib3JkaW5hdGUgY2FsbGJhY2sgZmFjdG9yeVxuXHRcdFx0dXBkYXRlRnVuYyA9IGZ1bmN0aW9uIHVwZGF0ZUZ1bmMoaSkge1xuXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdFx0cmVzb2x2ZUNvbnRleHRzW2ldID0gdGhpcztcblx0XHRcdFx0XHRyZXNvbHZlVmFsdWVzW2ldID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBfc2xpY2UuY2FsbChhcmd1bWVudHMpIDogdmFsdWU7XG5cdFx0XHRcdFx0aWYgKCEgLS1yZW1haW5pbmcpIHtcblx0XHRcdFx0XHRcdG1hc3Rlci5yZXNvbHZlV2l0aChyZXNvbHZlQ29udGV4dHMsIHJlc29sdmVWYWx1ZXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH07XG5cblx0XHRcdC8vIFNpbmdsZS0gYW5kIGVtcHR5IGFyZ3VtZW50cyBhcmUgYWRvcHRlZCBsaWtlIFByb21pc2UucmVzb2x2ZVxuXHRcdFx0aWYgKHJlbWFpbmluZyA8PSAxKSB7XG5cdFx0XHRcdGFkb3B0VmFsdWUoc2luZ2xlVmFsdWUsIG1hc3Rlci5kb25lKHVwZGF0ZUZ1bmMoaSkpLnJlc29sdmUsIG1hc3Rlci5yZWplY3QsICFyZW1haW5pbmcpO1xuXG5cdFx0XHRcdC8vIFVzZSAudGhlbigpIHRvIHVud3JhcCBzZWNvbmRhcnkgdGhlbmFibGVzIChjZi4gZ2gtMzAwMClcblx0XHRcdFx0aWYgKG1hc3Rlci5zdGF0ZSgpID09PSBcInBlbmRpbmdcIiB8fCBpc0Z1bmN0aW9uKHJlc29sdmVWYWx1ZXNbaV0gJiYgcmVzb2x2ZVZhbHVlc1tpXS50aGVuKSkge1xuXG5cdFx0XHRcdFx0cmV0dXJuIG1hc3Rlci50aGVuKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gTXVsdGlwbGUgYXJndW1lbnRzIGFyZSBhZ2dyZWdhdGVkIGxpa2UgUHJvbWlzZS5hbGwgYXJyYXkgZWxlbWVudHNcblx0XHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdFx0YWRvcHRWYWx1ZShyZXNvbHZlVmFsdWVzW2ldLCB1cGRhdGVGdW5jKGkpLCBtYXN0ZXIucmVqZWN0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG1hc3Rlci5wcm9taXNlKCk7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBUaGVzZSB1c3VhbGx5IGluZGljYXRlIGEgcHJvZ3JhbW1lciBtaXN0YWtlIGR1cmluZyBkZXZlbG9wbWVudCxcblx0Ly8gd2FybiBhYm91dCB0aGVtIEFTQVAgcmF0aGVyIHRoYW4gc3dhbGxvd2luZyB0aGVtIGJ5IGRlZmF1bHQuXG5cdHZhciByZXJyb3JOYW1lcyA9IC9eKEV2YWx8SW50ZXJuYWx8UmFuZ2V8UmVmZXJlbmNlfFN5bnRheHxUeXBlfFVSSSlFcnJvciQvO1xuXG5cdGpRdWVyeS5EZWZlcnJlZC5leGNlcHRpb25Ib29rID0gZnVuY3Rpb24gKGVycm9yLCBzdGFjaykge1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgOCAtIDkgb25seVxuXHRcdC8vIENvbnNvbGUgZXhpc3RzIHdoZW4gZGV2IHRvb2xzIGFyZSBvcGVuLCB3aGljaCBjYW4gaGFwcGVuIGF0IGFueSB0aW1lXG5cdFx0aWYgKHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLndhcm4gJiYgZXJyb3IgJiYgcmVycm9yTmFtZXMudGVzdChlcnJvci5uYW1lKSkge1xuXHRcdFx0d2luZG93LmNvbnNvbGUud2FybihcImpRdWVyeS5EZWZlcnJlZCBleGNlcHRpb246IFwiICsgZXJyb3IubWVzc2FnZSwgZXJyb3Iuc3RhY2ssIHN0YWNrKTtcblx0XHR9XG5cdH07XG5cblx0alF1ZXJ5LnJlYWR5RXhjZXB0aW9uID0gZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fSk7XG5cdH07XG5cblx0Ly8gVGhlIGRlZmVycmVkIHVzZWQgb24gRE9NIHJlYWR5XG5cdHZhciByZWFkeUxpc3QgPSBqUXVlcnkuRGVmZXJyZWQoKTtcblxuXHRqUXVlcnkuZm4ucmVhZHkgPSBmdW5jdGlvbiAoZm4pIHtcblxuXHRcdHJlYWR5TGlzdC50aGVuKGZuKVxuXG5cdFx0Ly8gV3JhcCBqUXVlcnkucmVhZHlFeGNlcHRpb24gaW4gYSBmdW5jdGlvbiBzbyB0aGF0IHRoZSBsb29rdXBcblx0XHQvLyBoYXBwZW5zIGF0IHRoZSB0aW1lIG9mIGVycm9yIGhhbmRsaW5nIGluc3RlYWQgb2YgY2FsbGJhY2tcblx0XHQvLyByZWdpc3RyYXRpb24uXG5cdFx0LmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0alF1ZXJ5LnJlYWR5RXhjZXB0aW9uKGVycm9yKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdGpRdWVyeS5leHRlbmQoe1xuXG5cdFx0Ly8gSXMgdGhlIERPTSByZWFkeSB0byBiZSB1c2VkPyBTZXQgdG8gdHJ1ZSBvbmNlIGl0IG9jY3Vycy5cblx0XHRpc1JlYWR5OiBmYWxzZSxcblxuXHRcdC8vIEEgY291bnRlciB0byB0cmFjayBob3cgbWFueSBpdGVtcyB0byB3YWl0IGZvciBiZWZvcmVcblx0XHQvLyB0aGUgcmVhZHkgZXZlbnQgZmlyZXMuIFNlZSAjNjc4MVxuXHRcdHJlYWR5V2FpdDogMSxcblxuXHRcdC8vIEhhbmRsZSB3aGVuIHRoZSBET00gaXMgcmVhZHlcblx0XHRyZWFkeTogZnVuY3Rpb24gcmVhZHkod2FpdCkge1xuXG5cdFx0XHQvLyBBYm9ydCBpZiB0aGVyZSBhcmUgcGVuZGluZyBob2xkcyBvciB3ZSdyZSBhbHJlYWR5IHJlYWR5XG5cdFx0XHRpZiAod2FpdCA9PT0gdHJ1ZSA/IC0talF1ZXJ5LnJlYWR5V2FpdCA6IGpRdWVyeS5pc1JlYWR5KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVtZW1iZXIgdGhhdCB0aGUgRE9NIGlzIHJlYWR5XG5cdFx0XHRqUXVlcnkuaXNSZWFkeSA9IHRydWU7XG5cblx0XHRcdC8vIElmIGEgbm9ybWFsIERPTSBSZWFkeSBldmVudCBmaXJlZCwgZGVjcmVtZW50LCBhbmQgd2FpdCBpZiBuZWVkIGJlXG5cdFx0XHRpZiAod2FpdCAhPT0gdHJ1ZSAmJiAtLWpRdWVyeS5yZWFkeVdhaXQgPiAwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUgYXJlIGZ1bmN0aW9ucyBib3VuZCwgdG8gZXhlY3V0ZVxuXHRcdFx0cmVhZHlMaXN0LnJlc29sdmVXaXRoKGRvY3VtZW50LCBbalF1ZXJ5XSk7XG5cdFx0fVxuXHR9KTtcblxuXHRqUXVlcnkucmVhZHkudGhlbiA9IHJlYWR5TGlzdC50aGVuO1xuXG5cdC8vIFRoZSByZWFkeSBldmVudCBoYW5kbGVyIGFuZCBzZWxmIGNsZWFudXAgbWV0aG9kXG5cdGZ1bmN0aW9uIGNvbXBsZXRlZCgpIHtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjb21wbGV0ZWQpO1xuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjb21wbGV0ZWQpO1xuXHRcdGpRdWVyeS5yZWFkeSgpO1xuXHR9XG5cblx0Ly8gQ2F0Y2ggY2FzZXMgd2hlcmUgJChkb2N1bWVudCkucmVhZHkoKSBpcyBjYWxsZWRcblx0Ly8gYWZ0ZXIgdGhlIGJyb3dzZXIgZXZlbnQgaGFzIGFscmVhZHkgb2NjdXJyZWQuXG5cdC8vIFN1cHBvcnQ6IElFIDw9OSAtIDEwIG9ubHlcblx0Ly8gT2xkZXIgSUUgc29tZXRpbWVzIHNpZ25hbHMgXCJpbnRlcmFjdGl2ZVwiIHRvbyBzb29uXG5cdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIgJiYgIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbCkge1xuXG5cdFx0Ly8gSGFuZGxlIGl0IGFzeW5jaHJvbm91c2x5IHRvIGFsbG93IHNjcmlwdHMgdGhlIG9wcG9ydHVuaXR5IHRvIGRlbGF5IHJlYWR5XG5cdFx0d2luZG93LnNldFRpbWVvdXQoalF1ZXJ5LnJlYWR5KTtcblx0fSBlbHNlIHtcblxuXHRcdC8vIFVzZSB0aGUgaGFuZHkgZXZlbnQgY2FsbGJhY2tcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjb21wbGV0ZWQpO1xuXG5cdFx0Ly8gQSBmYWxsYmFjayB0byB3aW5kb3cub25sb2FkLCB0aGF0IHdpbGwgYWx3YXlzIHdvcmtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY29tcGxldGVkKTtcblx0fVxuXG5cdC8vIE11bHRpZnVuY3Rpb25hbCBtZXRob2QgdG8gZ2V0IGFuZCBzZXQgdmFsdWVzIG9mIGEgY29sbGVjdGlvblxuXHQvLyBUaGUgdmFsdWUvcyBjYW4gb3B0aW9uYWxseSBiZSBleGVjdXRlZCBpZiBpdCdzIGEgZnVuY3Rpb25cblx0dmFyIGFjY2VzcyA9IGZ1bmN0aW9uIGFjY2VzcyhlbGVtcywgZm4sIGtleSwgdmFsdWUsIGNoYWluYWJsZSwgZW1wdHlHZXQsIHJhdykge1xuXHRcdHZhciBpID0gMCxcblx0XHQgICAgbGVuID0gZWxlbXMubGVuZ3RoLFxuXHRcdCAgICBidWxrID0ga2V5ID09IG51bGw7XG5cblx0XHQvLyBTZXRzIG1hbnkgdmFsdWVzXG5cdFx0aWYgKHRvVHlwZShrZXkpID09PSBcIm9iamVjdFwiKSB7XG5cdFx0XHRjaGFpbmFibGUgPSB0cnVlO1xuXHRcdFx0Zm9yIChpIGluIGtleSkge1xuXHRcdFx0XHRhY2Nlc3MoZWxlbXMsIGZuLCBpLCBrZXlbaV0sIHRydWUsIGVtcHR5R2V0LCByYXcpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXRzIG9uZSB2YWx1ZVxuXHRcdH0gZWxzZSBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y2hhaW5hYmxlID0gdHJ1ZTtcblxuXHRcdFx0aWYgKCFpc0Z1bmN0aW9uKHZhbHVlKSkge1xuXHRcdFx0XHRyYXcgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYnVsaykge1xuXG5cdFx0XHRcdC8vIEJ1bGsgb3BlcmF0aW9ucyBydW4gYWdhaW5zdCB0aGUgZW50aXJlIHNldFxuXHRcdFx0XHRpZiAocmF3KSB7XG5cdFx0XHRcdFx0Zm4uY2FsbChlbGVtcywgdmFsdWUpO1xuXHRcdFx0XHRcdGZuID0gbnVsbDtcblxuXHRcdFx0XHRcdC8vIC4uLmV4Y2VwdCB3aGVuIGV4ZWN1dGluZyBmdW5jdGlvbiB2YWx1ZXNcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRidWxrID0gZm47XG5cdFx0XHRcdFx0Zm4gPSBmdW5jdGlvbiBmbihlbGVtLCBrZXksIHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYnVsay5jYWxsKGpRdWVyeShlbGVtKSwgdmFsdWUpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKGZuKSB7XG5cdFx0XHRcdGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0XHRmbihlbGVtc1tpXSwga2V5LCByYXcgPyB2YWx1ZSA6IHZhbHVlLmNhbGwoZWxlbXNbaV0sIGksIGZuKGVsZW1zW2ldLCBrZXkpKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY2hhaW5hYmxlKSB7XG5cdFx0XHRyZXR1cm4gZWxlbXM7XG5cdFx0fVxuXG5cdFx0Ly8gR2V0c1xuXHRcdGlmIChidWxrKSB7XG5cdFx0XHRyZXR1cm4gZm4uY2FsbChlbGVtcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGxlbiA/IGZuKGVsZW1zWzBdLCBrZXkpIDogZW1wdHlHZXQ7XG5cdH07XG5cblx0Ly8gTWF0Y2hlcyBkYXNoZWQgc3RyaW5nIGZvciBjYW1lbGl6aW5nXG5cdHZhciBybXNQcmVmaXggPSAvXi1tcy0vLFxuXHQgICAgcmRhc2hBbHBoYSA9IC8tKFthLXpdKS9nO1xuXG5cdC8vIFVzZWQgYnkgY2FtZWxDYXNlIGFzIGNhbGxiYWNrIHRvIHJlcGxhY2UoKVxuXHRmdW5jdGlvbiBmY2FtZWxDYXNlKGFsbCwgbGV0dGVyKSB7XG5cdFx0cmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xuXHR9XG5cblx0Ly8gQ29udmVydCBkYXNoZWQgdG8gY2FtZWxDYXNlOyB1c2VkIGJ5IHRoZSBjc3MgYW5kIGRhdGEgbW9kdWxlc1xuXHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSwgRWRnZSAxMiAtIDE1XG5cdC8vIE1pY3Jvc29mdCBmb3Jnb3QgdG8gaHVtcCB0aGVpciB2ZW5kb3IgcHJlZml4ICgjOTU3Milcblx0ZnVuY3Rpb24gY2FtZWxDYXNlKHN0cmluZykge1xuXHRcdHJldHVybiBzdHJpbmcucmVwbGFjZShybXNQcmVmaXgsIFwibXMtXCIpLnJlcGxhY2UocmRhc2hBbHBoYSwgZmNhbWVsQ2FzZSk7XG5cdH1cblx0dmFyIGFjY2VwdERhdGEgPSBmdW5jdGlvbiBhY2NlcHREYXRhKG93bmVyKSB7XG5cblx0XHQvLyBBY2NlcHRzIG9ubHk6XG5cdFx0Ly8gIC0gTm9kZVxuXHRcdC8vICAgIC0gTm9kZS5FTEVNRU5UX05PREVcblx0XHQvLyAgICAtIE5vZGUuRE9DVU1FTlRfTk9ERVxuXHRcdC8vICAtIE9iamVjdFxuXHRcdC8vICAgIC0gQW55XG5cdFx0cmV0dXJuIG93bmVyLm5vZGVUeXBlID09PSAxIHx8IG93bmVyLm5vZGVUeXBlID09PSA5IHx8ICErb3duZXIubm9kZVR5cGU7XG5cdH07XG5cblx0ZnVuY3Rpb24gRGF0YSgpIHtcblx0XHR0aGlzLmV4cGFuZG8gPSBqUXVlcnkuZXhwYW5kbyArIERhdGEudWlkKys7XG5cdH1cblxuXHREYXRhLnVpZCA9IDE7XG5cblx0RGF0YS5wcm90b3R5cGUgPSB7XG5cblx0XHRjYWNoZTogZnVuY3Rpb24gY2FjaGUob3duZXIpIHtcblxuXHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIG93bmVyIG9iamVjdCBhbHJlYWR5IGhhcyBhIGNhY2hlXG5cdFx0XHR2YXIgdmFsdWUgPSBvd25lclt0aGlzLmV4cGFuZG9dO1xuXG5cdFx0XHQvLyBJZiBub3QsIGNyZWF0ZSBvbmVcblx0XHRcdGlmICghdmFsdWUpIHtcblx0XHRcdFx0dmFsdWUgPSB7fTtcblxuXHRcdFx0XHQvLyBXZSBjYW4gYWNjZXB0IGRhdGEgZm9yIG5vbi1lbGVtZW50IG5vZGVzIGluIG1vZGVybiBicm93c2Vycyxcblx0XHRcdFx0Ly8gYnV0IHdlIHNob3VsZCBub3QsIHNlZSAjODMzNS5cblx0XHRcdFx0Ly8gQWx3YXlzIHJldHVybiBhbiBlbXB0eSBvYmplY3QuXG5cdFx0XHRcdGlmIChhY2NlcHREYXRhKG93bmVyKSkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgaXQgaXMgYSBub2RlIHVubGlrZWx5IHRvIGJlIHN0cmluZ2lmeS1lZCBvciBsb29wZWQgb3ZlclxuXHRcdFx0XHRcdC8vIHVzZSBwbGFpbiBhc3NpZ25tZW50XG5cdFx0XHRcdFx0aWYgKG93bmVyLm5vZGVUeXBlKSB7XG5cdFx0XHRcdFx0XHRvd25lclt0aGlzLmV4cGFuZG9dID0gdmFsdWU7XG5cblx0XHRcdFx0XHRcdC8vIE90aGVyd2lzZSBzZWN1cmUgaXQgaW4gYSBub24tZW51bWVyYWJsZSBwcm9wZXJ0eVxuXHRcdFx0XHRcdFx0Ly8gY29uZmlndXJhYmxlIG11c3QgYmUgdHJ1ZSB0byBhbGxvdyB0aGUgcHJvcGVydHkgdG8gYmVcblx0XHRcdFx0XHRcdC8vIGRlbGV0ZWQgd2hlbiBkYXRhIGlzIHJlbW92ZWRcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG93bmVyLCB0aGlzLmV4cGFuZG8sIHtcblx0XHRcdFx0XHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0XHRcdFx0XHRjb25maWd1cmFibGU6IHRydWVcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fSxcblx0XHRzZXQ6IGZ1bmN0aW9uIHNldChvd25lciwgZGF0YSwgdmFsdWUpIHtcblx0XHRcdHZhciBwcm9wLFxuXHRcdFx0ICAgIGNhY2hlID0gdGhpcy5jYWNoZShvd25lcik7XG5cblx0XHRcdC8vIEhhbmRsZTogWyBvd25lciwga2V5LCB2YWx1ZSBdIGFyZ3Ncblx0XHRcdC8vIEFsd2F5cyB1c2UgY2FtZWxDYXNlIGtleSAoZ2gtMjI1Nylcblx0XHRcdGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRjYWNoZVtjYW1lbENhc2UoZGF0YSldID0gdmFsdWU7XG5cblx0XHRcdFx0Ly8gSGFuZGxlOiBbIG93bmVyLCB7IHByb3BlcnRpZXMgfSBdIGFyZ3Ncblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gQ29weSB0aGUgcHJvcGVydGllcyBvbmUtYnktb25lIHRvIHRoZSBjYWNoZSBvYmplY3Rcblx0XHRcdFx0Zm9yIChwcm9wIGluIGRhdGEpIHtcblx0XHRcdFx0XHRjYWNoZVtjYW1lbENhc2UocHJvcCldID0gZGF0YVtwcm9wXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNhY2hlO1xuXHRcdH0sXG5cdFx0Z2V0OiBmdW5jdGlvbiBnZXQob3duZXIsIGtleSkge1xuXHRcdFx0cmV0dXJuIGtleSA9PT0gdW5kZWZpbmVkID8gdGhpcy5jYWNoZShvd25lcikgOlxuXG5cdFx0XHQvLyBBbHdheXMgdXNlIGNhbWVsQ2FzZSBrZXkgKGdoLTIyNTcpXG5cdFx0XHRvd25lclt0aGlzLmV4cGFuZG9dICYmIG93bmVyW3RoaXMuZXhwYW5kb11bY2FtZWxDYXNlKGtleSldO1xuXHRcdH0sXG5cdFx0YWNjZXNzOiBmdW5jdGlvbiBhY2Nlc3Mob3duZXIsIGtleSwgdmFsdWUpIHtcblxuXHRcdFx0Ly8gSW4gY2FzZXMgd2hlcmUgZWl0aGVyOlxuXHRcdFx0Ly9cblx0XHRcdC8vICAgMS4gTm8ga2V5IHdhcyBzcGVjaWZpZWRcblx0XHRcdC8vICAgMi4gQSBzdHJpbmcga2V5IHdhcyBzcGVjaWZpZWQsIGJ1dCBubyB2YWx1ZSBwcm92aWRlZFxuXHRcdFx0Ly9cblx0XHRcdC8vIFRha2UgdGhlIFwicmVhZFwiIHBhdGggYW5kIGFsbG93IHRoZSBnZXQgbWV0aG9kIHRvIGRldGVybWluZVxuXHRcdFx0Ly8gd2hpY2ggdmFsdWUgdG8gcmV0dXJuLCByZXNwZWN0aXZlbHkgZWl0aGVyOlxuXHRcdFx0Ly9cblx0XHRcdC8vICAgMS4gVGhlIGVudGlyZSBjYWNoZSBvYmplY3Rcblx0XHRcdC8vICAgMi4gVGhlIGRhdGEgc3RvcmVkIGF0IHRoZSBrZXlcblx0XHRcdC8vXG5cdFx0XHRpZiAoa2V5ID09PSB1bmRlZmluZWQgfHwga2V5ICYmIHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRcdHJldHVybiB0aGlzLmdldChvd25lciwga2V5KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gV2hlbiB0aGUga2V5IGlzIG5vdCBhIHN0cmluZywgb3IgYm90aCBhIGtleSBhbmQgdmFsdWVcblx0XHRcdC8vIGFyZSBzcGVjaWZpZWQsIHNldCBvciBleHRlbmQgKGV4aXN0aW5nIG9iamVjdHMpIHdpdGggZWl0aGVyOlxuXHRcdFx0Ly9cblx0XHRcdC8vICAgMS4gQW4gb2JqZWN0IG9mIHByb3BlcnRpZXNcblx0XHRcdC8vICAgMi4gQSBrZXkgYW5kIHZhbHVlXG5cdFx0XHQvL1xuXHRcdFx0dGhpcy5zZXQob3duZXIsIGtleSwgdmFsdWUpO1xuXG5cdFx0XHQvLyBTaW5jZSB0aGUgXCJzZXRcIiBwYXRoIGNhbiBoYXZlIHR3byBwb3NzaWJsZSBlbnRyeSBwb2ludHNcblx0XHRcdC8vIHJldHVybiB0aGUgZXhwZWN0ZWQgZGF0YSBiYXNlZCBvbiB3aGljaCBwYXRoIHdhcyB0YWtlblsqXVxuXHRcdFx0cmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IGtleTtcblx0XHR9LFxuXHRcdHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG93bmVyLCBrZXkpIHtcblx0XHRcdHZhciBpLFxuXHRcdFx0ICAgIGNhY2hlID0gb3duZXJbdGhpcy5leHBhbmRvXTtcblxuXHRcdFx0aWYgKGNhY2hlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0XHQvLyBTdXBwb3J0IGFycmF5IG9yIHNwYWNlIHNlcGFyYXRlZCBzdHJpbmcgb2Yga2V5c1xuXHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheShrZXkpKSB7XG5cblx0XHRcdFx0XHQvLyBJZiBrZXkgaXMgYW4gYXJyYXkgb2Yga2V5cy4uLlxuXHRcdFx0XHRcdC8vIFdlIGFsd2F5cyBzZXQgY2FtZWxDYXNlIGtleXMsIHNvIHJlbW92ZSB0aGF0LlxuXHRcdFx0XHRcdGtleSA9IGtleS5tYXAoY2FtZWxDYXNlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRrZXkgPSBjYW1lbENhc2Uoa2V5KTtcblxuXHRcdFx0XHRcdC8vIElmIGEga2V5IHdpdGggdGhlIHNwYWNlcyBleGlzdHMsIHVzZSBpdC5cblx0XHRcdFx0XHQvLyBPdGhlcndpc2UsIGNyZWF0ZSBhbiBhcnJheSBieSBtYXRjaGluZyBub24td2hpdGVzcGFjZVxuXHRcdFx0XHRcdGtleSA9IGtleSBpbiBjYWNoZSA/IFtrZXldIDoga2V5Lm1hdGNoKHJub3RodG1sd2hpdGUpIHx8IFtdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aSA9IGtleS5sZW5ndGg7XG5cblx0XHRcdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0XHRcdGRlbGV0ZSBjYWNoZVtrZXlbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJlbW92ZSB0aGUgZXhwYW5kbyBpZiB0aGVyZSdzIG5vIG1vcmUgZGF0YVxuXHRcdFx0aWYgKGtleSA9PT0gdW5kZWZpbmVkIHx8IGpRdWVyeS5pc0VtcHR5T2JqZWN0KGNhY2hlKSkge1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IENocm9tZSA8PTM1IC0gNDVcblx0XHRcdFx0Ly8gV2Via2l0ICYgQmxpbmsgcGVyZm9ybWFuY2Ugc3VmZmVycyB3aGVuIGRlbGV0aW5nIHByb3BlcnRpZXNcblx0XHRcdFx0Ly8gZnJvbSBET00gbm9kZXMsIHNvIHNldCB0byB1bmRlZmluZWQgaW5zdGVhZFxuXHRcdFx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0zNzg2MDcgKGJ1ZyByZXN0cmljdGVkKVxuXHRcdFx0XHRpZiAob3duZXIubm9kZVR5cGUpIHtcblx0XHRcdFx0XHRvd25lclt0aGlzLmV4cGFuZG9dID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRlbGV0ZSBvd25lclt0aGlzLmV4cGFuZG9dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRoYXNEYXRhOiBmdW5jdGlvbiBoYXNEYXRhKG93bmVyKSB7XG5cdFx0XHR2YXIgY2FjaGUgPSBvd25lclt0aGlzLmV4cGFuZG9dO1xuXHRcdFx0cmV0dXJuIGNhY2hlICE9PSB1bmRlZmluZWQgJiYgIWpRdWVyeS5pc0VtcHR5T2JqZWN0KGNhY2hlKTtcblx0XHR9XG5cdH07XG5cdHZhciBkYXRhUHJpdiA9IG5ldyBEYXRhKCk7XG5cblx0dmFyIGRhdGFVc2VyID0gbmV3IERhdGEoKTtcblxuXHQvL1x0SW1wbGVtZW50YXRpb24gU3VtbWFyeVxuXHQvL1xuXHQvL1x0MS4gRW5mb3JjZSBBUEkgc3VyZmFjZSBhbmQgc2VtYW50aWMgY29tcGF0aWJpbGl0eSB3aXRoIDEuOS54IGJyYW5jaFxuXHQvL1x0Mi4gSW1wcm92ZSB0aGUgbW9kdWxlJ3MgbWFpbnRhaW5hYmlsaXR5IGJ5IHJlZHVjaW5nIHRoZSBzdG9yYWdlXG5cdC8vXHRcdHBhdGhzIHRvIGEgc2luZ2xlIG1lY2hhbmlzbS5cblx0Ly9cdDMuIFVzZSB0aGUgc2FtZSBzaW5nbGUgbWVjaGFuaXNtIHRvIHN1cHBvcnQgXCJwcml2YXRlXCIgYW5kIFwidXNlclwiIGRhdGEuXG5cdC8vXHQ0LiBfTmV2ZXJfIGV4cG9zZSBcInByaXZhdGVcIiBkYXRhIHRvIHVzZXIgY29kZSAoVE9ETzogRHJvcCBfZGF0YSwgX3JlbW92ZURhdGEpXG5cdC8vXHQ1LiBBdm9pZCBleHBvc2luZyBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzIG9uIHVzZXIgb2JqZWN0cyAoZWcuIGV4cGFuZG8gcHJvcGVydGllcylcblx0Ly9cdDYuIFByb3ZpZGUgYSBjbGVhciBwYXRoIGZvciBpbXBsZW1lbnRhdGlvbiB1cGdyYWRlIHRvIFdlYWtNYXAgaW4gMjAxNFxuXG5cdHZhciByYnJhY2UgPSAvXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sXG5cdCAgICBybXVsdGlEYXNoID0gL1tBLVpdL2c7XG5cblx0ZnVuY3Rpb24gZ2V0RGF0YShkYXRhKSB7XG5cdFx0aWYgKGRhdGEgPT09IFwidHJ1ZVwiKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoZGF0YSA9PT0gXCJmYWxzZVwiKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKGRhdGEgPT09IFwibnVsbFwiKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHQvLyBPbmx5IGNvbnZlcnQgdG8gYSBudW1iZXIgaWYgaXQgZG9lc24ndCBjaGFuZ2UgdGhlIHN0cmluZ1xuXHRcdGlmIChkYXRhID09PSArZGF0YSArIFwiXCIpIHtcblx0XHRcdHJldHVybiArZGF0YTtcblx0XHR9XG5cblx0XHRpZiAocmJyYWNlLnRlc3QoZGF0YSkpIHtcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuXHRcdH1cblxuXHRcdHJldHVybiBkYXRhO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGF0YUF0dHIoZWxlbSwga2V5LCBkYXRhKSB7XG5cdFx0dmFyIG5hbWU7XG5cblx0XHQvLyBJZiBub3RoaW5nIHdhcyBmb3VuZCBpbnRlcm5hbGx5LCB0cnkgdG8gZmV0Y2ggYW55XG5cdFx0Ly8gZGF0YSBmcm9tIHRoZSBIVE1MNSBkYXRhLSogYXR0cmlidXRlXG5cdFx0aWYgKGRhdGEgPT09IHVuZGVmaW5lZCAmJiBlbGVtLm5vZGVUeXBlID09PSAxKSB7XG5cdFx0XHRuYW1lID0gXCJkYXRhLVwiICsga2V5LnJlcGxhY2Uocm11bHRpRGFzaCwgXCItJCZcIikudG9Mb3dlckNhc2UoKTtcblx0XHRcdGRhdGEgPSBlbGVtLmdldEF0dHJpYnV0ZShuYW1lKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0ZGF0YSA9IGdldERhdGEoZGF0YSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cblx0XHRcdFx0Ly8gTWFrZSBzdXJlIHdlIHNldCB0aGUgZGF0YSBzbyBpdCBpc24ndCBjaGFuZ2VkIGxhdGVyXG5cdFx0XHRcdGRhdGFVc2VyLnNldChlbGVtLCBrZXksIGRhdGEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGF0YSA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH1cblxuXHRqUXVlcnkuZXh0ZW5kKHtcblx0XHRoYXNEYXRhOiBmdW5jdGlvbiBoYXNEYXRhKGVsZW0pIHtcblx0XHRcdHJldHVybiBkYXRhVXNlci5oYXNEYXRhKGVsZW0pIHx8IGRhdGFQcml2Lmhhc0RhdGEoZWxlbSk7XG5cdFx0fSxcblxuXHRcdGRhdGE6IGZ1bmN0aW9uIGRhdGEoZWxlbSwgbmFtZSwgX2RhdGEpIHtcblx0XHRcdHJldHVybiBkYXRhVXNlci5hY2Nlc3MoZWxlbSwgbmFtZSwgX2RhdGEpO1xuXHRcdH0sXG5cblx0XHRyZW1vdmVEYXRhOiBmdW5jdGlvbiByZW1vdmVEYXRhKGVsZW0sIG5hbWUpIHtcblx0XHRcdGRhdGFVc2VyLnJlbW92ZShlbGVtLCBuYW1lKTtcblx0XHR9LFxuXG5cdFx0Ly8gVE9ETzogTm93IHRoYXQgYWxsIGNhbGxzIHRvIF9kYXRhIGFuZCBfcmVtb3ZlRGF0YSBoYXZlIGJlZW4gcmVwbGFjZWRcblx0XHQvLyB3aXRoIGRpcmVjdCBjYWxscyB0byBkYXRhUHJpdiBtZXRob2RzLCB0aGVzZSBjYW4gYmUgZGVwcmVjYXRlZC5cblx0XHRfZGF0YTogZnVuY3Rpb24gX2RhdGEoZWxlbSwgbmFtZSwgZGF0YSkge1xuXHRcdFx0cmV0dXJuIGRhdGFQcml2LmFjY2VzcyhlbGVtLCBuYW1lLCBkYXRhKTtcblx0XHR9LFxuXG5cdFx0X3JlbW92ZURhdGE6IGZ1bmN0aW9uIF9yZW1vdmVEYXRhKGVsZW0sIG5hbWUpIHtcblx0XHRcdGRhdGFQcml2LnJlbW92ZShlbGVtLCBuYW1lKTtcblx0XHR9XG5cdH0pO1xuXG5cdGpRdWVyeS5mbi5leHRlbmQoe1xuXHRcdGRhdGE6IGZ1bmN0aW9uIGRhdGEoa2V5LCB2YWx1ZSkge1xuXHRcdFx0dmFyIGksXG5cdFx0XHQgICAgbmFtZSxcblx0XHRcdCAgICBkYXRhLFxuXHRcdFx0ICAgIGVsZW0gPSB0aGlzWzBdLFxuXHRcdFx0ICAgIGF0dHJzID0gZWxlbSAmJiBlbGVtLmF0dHJpYnV0ZXM7XG5cblx0XHRcdC8vIEdldHMgYWxsIHZhbHVlc1xuXHRcdFx0aWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGlmICh0aGlzLmxlbmd0aCkge1xuXHRcdFx0XHRcdGRhdGEgPSBkYXRhVXNlci5nZXQoZWxlbSk7XG5cblx0XHRcdFx0XHRpZiAoZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiAhZGF0YVByaXYuZ2V0KGVsZW0sIFwiaGFzRGF0YUF0dHJzXCIpKSB7XG5cdFx0XHRcdFx0XHRpID0gYXR0cnMubGVuZ3RoO1xuXHRcdFx0XHRcdFx0d2hpbGUgKGktLSkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDExIG9ubHlcblx0XHRcdFx0XHRcdFx0Ly8gVGhlIGF0dHJzIGVsZW1lbnRzIGNhbiBiZSBudWxsICgjMTQ4OTQpXG5cdFx0XHRcdFx0XHRcdGlmIChhdHRyc1tpXSkge1xuXHRcdFx0XHRcdFx0XHRcdG5hbWUgPSBhdHRyc1tpXS5uYW1lO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChuYW1lLmluZGV4T2YoXCJkYXRhLVwiKSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZSA9IGNhbWVsQ2FzZShuYW1lLnNsaWNlKDUpKTtcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFBdHRyKGVsZW0sIG5hbWUsIGRhdGFbbmFtZV0pO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZGF0YVByaXYuc2V0KGVsZW0sIFwiaGFzRGF0YUF0dHJzXCIsIHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXRzIG11bHRpcGxlIHZhbHVlc1xuXHRcdFx0aWYgKCh0eXBlb2Yga2V5ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yoa2V5KSkgPT09IFwib2JqZWN0XCIpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0ZGF0YVVzZXIuc2V0KHRoaXMsIGtleSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYWNjZXNzKHRoaXMsIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHR2YXIgZGF0YTtcblxuXHRcdFx0XHQvLyBUaGUgY2FsbGluZyBqUXVlcnkgb2JqZWN0IChlbGVtZW50IG1hdGNoZXMpIGlzIG5vdCBlbXB0eVxuXHRcdFx0XHQvLyAoYW5kIHRoZXJlZm9yZSBoYXMgYW4gZWxlbWVudCBhcHBlYXJzIGF0IHRoaXNbIDAgXSkgYW5kIHRoZVxuXHRcdFx0XHQvLyBgdmFsdWVgIHBhcmFtZXRlciB3YXMgbm90IHVuZGVmaW5lZC4gQW4gZW1wdHkgalF1ZXJ5IG9iamVjdFxuXHRcdFx0XHQvLyB3aWxsIHJlc3VsdCBpbiBgdW5kZWZpbmVkYCBmb3IgZWxlbSA9IHRoaXNbIDAgXSB3aGljaCB3aWxsXG5cdFx0XHRcdC8vIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhbiBhdHRlbXB0IHRvIHJlYWQgYSBkYXRhIGNhY2hlIGlzIG1hZGUuXG5cdFx0XHRcdGlmIChlbGVtICYmIHZhbHVlID09PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0XHRcdC8vIEF0dGVtcHQgdG8gZ2V0IGRhdGEgZnJvbSB0aGUgY2FjaGVcblx0XHRcdFx0XHQvLyBUaGUga2V5IHdpbGwgYWx3YXlzIGJlIGNhbWVsQ2FzZWQgaW4gRGF0YVxuXHRcdFx0XHRcdGRhdGEgPSBkYXRhVXNlci5nZXQoZWxlbSwga2V5KTtcblx0XHRcdFx0XHRpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZGF0YTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBBdHRlbXB0IHRvIFwiZGlzY292ZXJcIiB0aGUgZGF0YSBpblxuXHRcdFx0XHRcdC8vIEhUTUw1IGN1c3RvbSBkYXRhLSogYXR0cnNcblx0XHRcdFx0XHRkYXRhID0gZGF0YUF0dHIoZWxlbSwga2V5KTtcblx0XHRcdFx0XHRpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZGF0YTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBXZSB0cmllZCByZWFsbHkgaGFyZCwgYnV0IHRoZSBkYXRhIGRvZXNuJ3QgZXhpc3QuXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU2V0IHRoZSBkYXRhLi4uXG5cdFx0XHRcdHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0XHQvLyBXZSBhbHdheXMgc3RvcmUgdGhlIGNhbWVsQ2FzZWQga2V5XG5cdFx0XHRcdFx0ZGF0YVVzZXIuc2V0KHRoaXMsIGtleSwgdmFsdWUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0sIG51bGwsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSwgbnVsbCwgdHJ1ZSk7XG5cdFx0fSxcblxuXHRcdHJlbW92ZURhdGE6IGZ1bmN0aW9uIHJlbW92ZURhdGEoa2V5KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0ZGF0YVVzZXIucmVtb3ZlKHRoaXMsIGtleSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xuXG5cdGpRdWVyeS5leHRlbmQoe1xuXHRcdHF1ZXVlOiBmdW5jdGlvbiBxdWV1ZShlbGVtLCB0eXBlLCBkYXRhKSB7XG5cdFx0XHR2YXIgcXVldWU7XG5cblx0XHRcdGlmIChlbGVtKSB7XG5cdFx0XHRcdHR5cGUgPSAodHlwZSB8fCBcImZ4XCIpICsgXCJxdWV1ZVwiO1xuXHRcdFx0XHRxdWV1ZSA9IGRhdGFQcml2LmdldChlbGVtLCB0eXBlKTtcblxuXHRcdFx0XHQvLyBTcGVlZCB1cCBkZXF1ZXVlIGJ5IGdldHRpbmcgb3V0IHF1aWNrbHkgaWYgdGhpcyBpcyBqdXN0IGEgbG9va3VwXG5cdFx0XHRcdGlmIChkYXRhKSB7XG5cdFx0XHRcdFx0aWYgKCFxdWV1ZSB8fCBBcnJheS5pc0FycmF5KGRhdGEpKSB7XG5cdFx0XHRcdFx0XHRxdWV1ZSA9IGRhdGFQcml2LmFjY2VzcyhlbGVtLCB0eXBlLCBqUXVlcnkubWFrZUFycmF5KGRhdGEpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cXVldWUucHVzaChkYXRhKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHF1ZXVlIHx8IFtdO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRkZXF1ZXVlOiBmdW5jdGlvbiBkZXF1ZXVlKGVsZW0sIHR5cGUpIHtcblx0XHRcdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblxuXHRcdFx0dmFyIHF1ZXVlID0galF1ZXJ5LnF1ZXVlKGVsZW0sIHR5cGUpLFxuXHRcdFx0ICAgIHN0YXJ0TGVuZ3RoID0gcXVldWUubGVuZ3RoLFxuXHRcdFx0ICAgIGZuID0gcXVldWUuc2hpZnQoKSxcblx0XHRcdCAgICBob29rcyA9IGpRdWVyeS5fcXVldWVIb29rcyhlbGVtLCB0eXBlKSxcblx0XHRcdCAgICBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcblx0XHRcdFx0alF1ZXJ5LmRlcXVldWUoZWxlbSwgdHlwZSk7XG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBJZiB0aGUgZnggcXVldWUgaXMgZGVxdWV1ZWQsIGFsd2F5cyByZW1vdmUgdGhlIHByb2dyZXNzIHNlbnRpbmVsXG5cdFx0XHRpZiAoZm4gPT09IFwiaW5wcm9ncmVzc1wiKSB7XG5cdFx0XHRcdGZuID0gcXVldWUuc2hpZnQoKTtcblx0XHRcdFx0c3RhcnRMZW5ndGgtLTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGZuKSB7XG5cblx0XHRcdFx0Ly8gQWRkIGEgcHJvZ3Jlc3Mgc2VudGluZWwgdG8gcHJldmVudCB0aGUgZnggcXVldWUgZnJvbSBiZWluZ1xuXHRcdFx0XHQvLyBhdXRvbWF0aWNhbGx5IGRlcXVldWVkXG5cdFx0XHRcdGlmICh0eXBlID09PSBcImZ4XCIpIHtcblx0XHRcdFx0XHRxdWV1ZS51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENsZWFyIHVwIHRoZSBsYXN0IHF1ZXVlIHN0b3AgZnVuY3Rpb25cblx0XHRcdFx0ZGVsZXRlIGhvb2tzLnN0b3A7XG5cdFx0XHRcdGZuLmNhbGwoZWxlbSwgbmV4dCwgaG9va3MpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXN0YXJ0TGVuZ3RoICYmIGhvb2tzKSB7XG5cdFx0XHRcdGhvb2tzLmVtcHR5LmZpcmUoKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gTm90IHB1YmxpYyAtIGdlbmVyYXRlIGEgcXVldWVIb29rcyBvYmplY3QsIG9yIHJldHVybiB0aGUgY3VycmVudCBvbmVcblx0XHRfcXVldWVIb29rczogZnVuY3Rpb24gX3F1ZXVlSG9va3MoZWxlbSwgdHlwZSkge1xuXHRcdFx0dmFyIGtleSA9IHR5cGUgKyBcInF1ZXVlSG9va3NcIjtcblx0XHRcdHJldHVybiBkYXRhUHJpdi5nZXQoZWxlbSwga2V5KSB8fCBkYXRhUHJpdi5hY2Nlc3MoZWxlbSwga2V5LCB7XG5cdFx0XHRcdGVtcHR5OiBqUXVlcnkuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRkYXRhUHJpdi5yZW1vdmUoZWxlbSwgW3R5cGUgKyBcInF1ZXVlXCIsIGtleV0pO1xuXHRcdFx0XHR9KVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcblxuXHRqUXVlcnkuZm4uZXh0ZW5kKHtcblx0XHRxdWV1ZTogZnVuY3Rpb24gcXVldWUodHlwZSwgZGF0YSkge1xuXHRcdFx0dmFyIHNldHRlciA9IDI7XG5cblx0XHRcdGlmICh0eXBlb2YgdHlwZSAhPT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRkYXRhID0gdHlwZTtcblx0XHRcdFx0dHlwZSA9IFwiZnhcIjtcblx0XHRcdFx0c2V0dGVyLS07XG5cdFx0XHR9XG5cblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgc2V0dGVyKSB7XG5cdFx0XHRcdHJldHVybiBqUXVlcnkucXVldWUodGhpc1swXSwgdHlwZSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBkYXRhID09PSB1bmRlZmluZWQgPyB0aGlzIDogdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIHF1ZXVlID0galF1ZXJ5LnF1ZXVlKHRoaXMsIHR5cGUsIGRhdGEpO1xuXG5cdFx0XHRcdC8vIEVuc3VyZSBhIGhvb2tzIGZvciB0aGlzIHF1ZXVlXG5cdFx0XHRcdGpRdWVyeS5fcXVldWVIb29rcyh0aGlzLCB0eXBlKTtcblxuXHRcdFx0XHRpZiAodHlwZSA9PT0gXCJmeFwiICYmIHF1ZXVlWzBdICE9PSBcImlucHJvZ3Jlc3NcIikge1xuXHRcdFx0XHRcdGpRdWVyeS5kZXF1ZXVlKHRoaXMsIHR5cGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdGRlcXVldWU6IGZ1bmN0aW9uIGRlcXVldWUodHlwZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGpRdWVyeS5kZXF1ZXVlKHRoaXMsIHR5cGUpO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRjbGVhclF1ZXVlOiBmdW5jdGlvbiBjbGVhclF1ZXVlKHR5cGUpIHtcblx0XHRcdHJldHVybiB0aGlzLnF1ZXVlKHR5cGUgfHwgXCJmeFwiLCBbXSk7XG5cdFx0fSxcblxuXHRcdC8vIEdldCBhIHByb21pc2UgcmVzb2x2ZWQgd2hlbiBxdWV1ZXMgb2YgYSBjZXJ0YWluIHR5cGVcblx0XHQvLyBhcmUgZW1wdGllZCAoZnggaXMgdGhlIHR5cGUgYnkgZGVmYXVsdClcblx0XHRwcm9taXNlOiBmdW5jdGlvbiBwcm9taXNlKHR5cGUsIG9iaikge1xuXHRcdFx0dmFyIHRtcCxcblx0XHRcdCAgICBjb3VudCA9IDEsXG5cdFx0XHQgICAgZGVmZXIgPSBqUXVlcnkuRGVmZXJyZWQoKSxcblx0XHRcdCAgICBlbGVtZW50cyA9IHRoaXMsXG5cdFx0XHQgICAgaSA9IHRoaXMubGVuZ3RoLFxuXHRcdFx0ICAgIHJlc29sdmUgPSBmdW5jdGlvbiByZXNvbHZlKCkge1xuXHRcdFx0XHRpZiAoISAtLWNvdW50KSB7XG5cdFx0XHRcdFx0ZGVmZXIucmVzb2x2ZVdpdGgoZWxlbWVudHMsIFtlbGVtZW50c10pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAodHlwZW9mIHR5cGUgIT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0b2JqID0gdHlwZTtcblx0XHRcdFx0dHlwZSA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHRcdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblxuXHRcdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0XHR0bXAgPSBkYXRhUHJpdi5nZXQoZWxlbWVudHNbaV0sIHR5cGUgKyBcInF1ZXVlSG9va3NcIik7XG5cdFx0XHRcdGlmICh0bXAgJiYgdG1wLmVtcHR5KSB7XG5cdFx0XHRcdFx0Y291bnQrKztcblx0XHRcdFx0XHR0bXAuZW1wdHkuYWRkKHJlc29sdmUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRyZXR1cm4gZGVmZXIucHJvbWlzZShvYmopO1xuXHRcdH1cblx0fSk7XG5cdHZhciBwbnVtID0gL1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlO1xuXG5cdHZhciByY3NzTnVtID0gbmV3IFJlZ0V4cChcIl4oPzooWystXSk9fCkoXCIgKyBwbnVtICsgXCIpKFthLXolXSopJFwiLCBcImlcIik7XG5cblx0dmFyIGNzc0V4cGFuZCA9IFtcIlRvcFwiLCBcIlJpZ2h0XCIsIFwiQm90dG9tXCIsIFwiTGVmdFwiXTtcblxuXHR2YXIgaXNIaWRkZW5XaXRoaW5UcmVlID0gZnVuY3Rpb24gaXNIaWRkZW5XaXRoaW5UcmVlKGVsZW0sIGVsKSB7XG5cblx0XHQvLyBpc0hpZGRlbldpdGhpblRyZWUgbWlnaHQgYmUgY2FsbGVkIGZyb20galF1ZXJ5I2ZpbHRlciBmdW5jdGlvbjtcblx0XHQvLyBpbiB0aGF0IGNhc2UsIGVsZW1lbnQgd2lsbCBiZSBzZWNvbmQgYXJndW1lbnRcblx0XHRlbGVtID0gZWwgfHwgZWxlbTtcblxuXHRcdC8vIElubGluZSBzdHlsZSB0cnVtcHMgYWxsXG5cdFx0cmV0dXJuIGVsZW0uc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIgfHwgZWxlbS5zdHlsZS5kaXNwbGF5ID09PSBcIlwiICYmXG5cblx0XHQvLyBPdGhlcndpc2UsIGNoZWNrIGNvbXB1dGVkIHN0eWxlXG5cdFx0Ly8gU3VwcG9ydDogRmlyZWZveCA8PTQzIC0gNDVcblx0XHQvLyBEaXNjb25uZWN0ZWQgZWxlbWVudHMgY2FuIGhhdmUgY29tcHV0ZWQgZGlzcGxheTogbm9uZSwgc28gZmlyc3QgY29uZmlybSB0aGF0IGVsZW0gaXNcblx0XHQvLyBpbiB0aGUgZG9jdW1lbnQuXG5cdFx0alF1ZXJ5LmNvbnRhaW5zKGVsZW0ub3duZXJEb2N1bWVudCwgZWxlbSkgJiYgalF1ZXJ5LmNzcyhlbGVtLCBcImRpc3BsYXlcIikgPT09IFwibm9uZVwiO1xuXHR9O1xuXG5cdHZhciBzd2FwID0gZnVuY3Rpb24gc3dhcChlbGVtLCBvcHRpb25zLCBjYWxsYmFjaywgYXJncykge1xuXHRcdHZhciByZXQsXG5cdFx0ICAgIG5hbWUsXG5cdFx0ICAgIG9sZCA9IHt9O1xuXG5cdFx0Ly8gUmVtZW1iZXIgdGhlIG9sZCB2YWx1ZXMsIGFuZCBpbnNlcnQgdGhlIG5ldyBvbmVzXG5cdFx0Zm9yIChuYW1lIGluIG9wdGlvbnMpIHtcblx0XHRcdG9sZFtuYW1lXSA9IGVsZW0uc3R5bGVbbmFtZV07XG5cdFx0XHRlbGVtLnN0eWxlW25hbWVdID0gb3B0aW9uc1tuYW1lXTtcblx0XHR9XG5cblx0XHRyZXQgPSBjYWxsYmFjay5hcHBseShlbGVtLCBhcmdzIHx8IFtdKTtcblxuXHRcdC8vIFJldmVydCB0aGUgb2xkIHZhbHVlc1xuXHRcdGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG5cdFx0XHRlbGVtLnN0eWxlW25hbWVdID0gb2xkW25hbWVdO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cblx0ZnVuY3Rpb24gYWRqdXN0Q1NTKGVsZW0sIHByb3AsIHZhbHVlUGFydHMsIHR3ZWVuKSB7XG5cdFx0dmFyIGFkanVzdGVkLFxuXHRcdCAgICBzY2FsZSxcblx0XHQgICAgbWF4SXRlcmF0aW9ucyA9IDIwLFxuXHRcdCAgICBjdXJyZW50VmFsdWUgPSB0d2VlbiA/IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiB0d2Vlbi5jdXIoKTtcblx0XHR9IDogZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5jc3MoZWxlbSwgcHJvcCwgXCJcIik7XG5cdFx0fSxcblx0XHQgICAgaW5pdGlhbCA9IGN1cnJlbnRWYWx1ZSgpLFxuXHRcdCAgICB1bml0ID0gdmFsdWVQYXJ0cyAmJiB2YWx1ZVBhcnRzWzNdIHx8IChqUXVlcnkuY3NzTnVtYmVyW3Byb3BdID8gXCJcIiA6IFwicHhcIiksXG5cblxuXHRcdC8vIFN0YXJ0aW5nIHZhbHVlIGNvbXB1dGF0aW9uIGlzIHJlcXVpcmVkIGZvciBwb3RlbnRpYWwgdW5pdCBtaXNtYXRjaGVzXG5cdFx0aW5pdGlhbEluVW5pdCA9IChqUXVlcnkuY3NzTnVtYmVyW3Byb3BdIHx8IHVuaXQgIT09IFwicHhcIiAmJiAraW5pdGlhbCkgJiYgcmNzc051bS5leGVjKGpRdWVyeS5jc3MoZWxlbSwgcHJvcCkpO1xuXG5cdFx0aWYgKGluaXRpYWxJblVuaXQgJiYgaW5pdGlhbEluVW5pdFszXSAhPT0gdW5pdCkge1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBGaXJlZm94IDw9NTRcblx0XHRcdC8vIEhhbHZlIHRoZSBpdGVyYXRpb24gdGFyZ2V0IHZhbHVlIHRvIHByZXZlbnQgaW50ZXJmZXJlbmNlIGZyb20gQ1NTIHVwcGVyIGJvdW5kcyAoZ2gtMjE0NClcblx0XHRcdGluaXRpYWwgPSBpbml0aWFsIC8gMjtcblxuXHRcdFx0Ly8gVHJ1c3QgdW5pdHMgcmVwb3J0ZWQgYnkgalF1ZXJ5LmNzc1xuXHRcdFx0dW5pdCA9IHVuaXQgfHwgaW5pdGlhbEluVW5pdFszXTtcblxuXHRcdFx0Ly8gSXRlcmF0aXZlbHkgYXBwcm94aW1hdGUgZnJvbSBhIG5vbnplcm8gc3RhcnRpbmcgcG9pbnRcblx0XHRcdGluaXRpYWxJblVuaXQgPSAraW5pdGlhbCB8fCAxO1xuXG5cdFx0XHR3aGlsZSAobWF4SXRlcmF0aW9ucy0tKSB7XG5cblx0XHRcdFx0Ly8gRXZhbHVhdGUgYW5kIHVwZGF0ZSBvdXIgYmVzdCBndWVzcyAoZG91YmxpbmcgZ3Vlc3NlcyB0aGF0IHplcm8gb3V0KS5cblx0XHRcdFx0Ly8gRmluaXNoIGlmIHRoZSBzY2FsZSBlcXVhbHMgb3IgY3Jvc3NlcyAxIChtYWtpbmcgdGhlIG9sZCpuZXcgcHJvZHVjdCBub24tcG9zaXRpdmUpLlxuXHRcdFx0XHRqUXVlcnkuc3R5bGUoZWxlbSwgcHJvcCwgaW5pdGlhbEluVW5pdCArIHVuaXQpO1xuXHRcdFx0XHRpZiAoKDEgLSBzY2FsZSkgKiAoMSAtIChzY2FsZSA9IGN1cnJlbnRWYWx1ZSgpIC8gaW5pdGlhbCB8fCAwLjUpKSA8PSAwKSB7XG5cdFx0XHRcdFx0bWF4SXRlcmF0aW9ucyA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5pdGlhbEluVW5pdCA9IGluaXRpYWxJblVuaXQgLyBzY2FsZTtcblx0XHRcdH1cblxuXHRcdFx0aW5pdGlhbEluVW5pdCA9IGluaXRpYWxJblVuaXQgKiAyO1xuXHRcdFx0alF1ZXJ5LnN0eWxlKGVsZW0sIHByb3AsIGluaXRpYWxJblVuaXQgKyB1bml0KTtcblxuXHRcdFx0Ly8gTWFrZSBzdXJlIHdlIHVwZGF0ZSB0aGUgdHdlZW4gcHJvcGVydGllcyBsYXRlciBvblxuXHRcdFx0dmFsdWVQYXJ0cyA9IHZhbHVlUGFydHMgfHwgW107XG5cdFx0fVxuXG5cdFx0aWYgKHZhbHVlUGFydHMpIHtcblx0XHRcdGluaXRpYWxJblVuaXQgPSAraW5pdGlhbEluVW5pdCB8fCAraW5pdGlhbCB8fCAwO1xuXG5cdFx0XHQvLyBBcHBseSByZWxhdGl2ZSBvZmZzZXQgKCs9Ly09KSBpZiBzcGVjaWZpZWRcblx0XHRcdGFkanVzdGVkID0gdmFsdWVQYXJ0c1sxXSA/IGluaXRpYWxJblVuaXQgKyAodmFsdWVQYXJ0c1sxXSArIDEpICogdmFsdWVQYXJ0c1syXSA6ICt2YWx1ZVBhcnRzWzJdO1xuXHRcdFx0aWYgKHR3ZWVuKSB7XG5cdFx0XHRcdHR3ZWVuLnVuaXQgPSB1bml0O1xuXHRcdFx0XHR0d2Vlbi5zdGFydCA9IGluaXRpYWxJblVuaXQ7XG5cdFx0XHRcdHR3ZWVuLmVuZCA9IGFkanVzdGVkO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gYWRqdXN0ZWQ7XG5cdH1cblxuXHR2YXIgZGVmYXVsdERpc3BsYXlNYXAgPSB7fTtcblxuXHRmdW5jdGlvbiBnZXREZWZhdWx0RGlzcGxheShlbGVtKSB7XG5cdFx0dmFyIHRlbXAsXG5cdFx0ICAgIGRvYyA9IGVsZW0ub3duZXJEb2N1bWVudCxcblx0XHQgICAgbm9kZU5hbWUgPSBlbGVtLm5vZGVOYW1lLFxuXHRcdCAgICBkaXNwbGF5ID0gZGVmYXVsdERpc3BsYXlNYXBbbm9kZU5hbWVdO1xuXG5cdFx0aWYgKGRpc3BsYXkpIHtcblx0XHRcdHJldHVybiBkaXNwbGF5O1xuXHRcdH1cblxuXHRcdHRlbXAgPSBkb2MuYm9keS5hcHBlbmRDaGlsZChkb2MuY3JlYXRlRWxlbWVudChub2RlTmFtZSkpO1xuXHRcdGRpc3BsYXkgPSBqUXVlcnkuY3NzKHRlbXAsIFwiZGlzcGxheVwiKTtcblxuXHRcdHRlbXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0ZW1wKTtcblxuXHRcdGlmIChkaXNwbGF5ID09PSBcIm5vbmVcIikge1xuXHRcdFx0ZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHR9XG5cdFx0ZGVmYXVsdERpc3BsYXlNYXBbbm9kZU5hbWVdID0gZGlzcGxheTtcblxuXHRcdHJldHVybiBkaXNwbGF5O1xuXHR9XG5cblx0ZnVuY3Rpb24gc2hvd0hpZGUoZWxlbWVudHMsIHNob3cpIHtcblx0XHR2YXIgZGlzcGxheSxcblx0XHQgICAgZWxlbSxcblx0XHQgICAgdmFsdWVzID0gW10sXG5cdFx0ICAgIGluZGV4ID0gMCxcblx0XHQgICAgbGVuZ3RoID0gZWxlbWVudHMubGVuZ3RoO1xuXG5cdFx0Ly8gRGV0ZXJtaW5lIG5ldyBkaXNwbGF5IHZhbHVlIGZvciBlbGVtZW50cyB0aGF0IG5lZWQgdG8gY2hhbmdlXG5cdFx0Zm9yICg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRlbGVtID0gZWxlbWVudHNbaW5kZXhdO1xuXHRcdFx0aWYgKCFlbGVtLnN0eWxlKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRkaXNwbGF5ID0gZWxlbS5zdHlsZS5kaXNwbGF5O1xuXHRcdFx0aWYgKHNob3cpIHtcblxuXHRcdFx0XHQvLyBTaW5jZSB3ZSBmb3JjZSB2aXNpYmlsaXR5IHVwb24gY2FzY2FkZS1oaWRkZW4gZWxlbWVudHMsIGFuIGltbWVkaWF0ZSAoYW5kIHNsb3cpXG5cdFx0XHRcdC8vIGNoZWNrIGlzIHJlcXVpcmVkIGluIHRoaXMgZmlyc3QgbG9vcCB1bmxlc3Mgd2UgaGF2ZSBhIG5vbmVtcHR5IGRpc3BsYXkgdmFsdWUgKGVpdGhlclxuXHRcdFx0XHQvLyBpbmxpbmUgb3IgYWJvdXQtdG8tYmUtcmVzdG9yZWQpXG5cdFx0XHRcdGlmIChkaXNwbGF5ID09PSBcIm5vbmVcIikge1xuXHRcdFx0XHRcdHZhbHVlc1tpbmRleF0gPSBkYXRhUHJpdi5nZXQoZWxlbSwgXCJkaXNwbGF5XCIpIHx8IG51bGw7XG5cdFx0XHRcdFx0aWYgKCF2YWx1ZXNbaW5kZXhdKSB7XG5cdFx0XHRcdFx0XHRlbGVtLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZWxlbS5zdHlsZS5kaXNwbGF5ID09PSBcIlwiICYmIGlzSGlkZGVuV2l0aGluVHJlZShlbGVtKSkge1xuXHRcdFx0XHRcdHZhbHVlc1tpbmRleF0gPSBnZXREZWZhdWx0RGlzcGxheShlbGVtKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGRpc3BsYXkgIT09IFwibm9uZVwiKSB7XG5cdFx0XHRcdFx0dmFsdWVzW2luZGV4XSA9IFwibm9uZVwiO1xuXG5cdFx0XHRcdFx0Ly8gUmVtZW1iZXIgd2hhdCB3ZSdyZSBvdmVyd3JpdGluZ1xuXHRcdFx0XHRcdGRhdGFQcml2LnNldChlbGVtLCBcImRpc3BsYXlcIiwgZGlzcGxheSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIGRpc3BsYXkgb2YgdGhlIGVsZW1lbnRzIGluIGEgc2Vjb25kIGxvb3AgdG8gYXZvaWQgY29uc3RhbnQgcmVmbG93XG5cdFx0Zm9yIChpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRpZiAodmFsdWVzW2luZGV4XSAhPSBudWxsKSB7XG5cdFx0XHRcdGVsZW1lbnRzW2luZGV4XS5zdHlsZS5kaXNwbGF5ID0gdmFsdWVzW2luZGV4XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZWxlbWVudHM7XG5cdH1cblxuXHRqUXVlcnkuZm4uZXh0ZW5kKHtcblx0XHRzaG93OiBmdW5jdGlvbiBzaG93KCkge1xuXHRcdFx0cmV0dXJuIHNob3dIaWRlKHRoaXMsIHRydWUpO1xuXHRcdH0sXG5cdFx0aGlkZTogZnVuY3Rpb24gaGlkZSgpIHtcblx0XHRcdHJldHVybiBzaG93SGlkZSh0aGlzKTtcblx0XHR9LFxuXHRcdHRvZ2dsZTogZnVuY3Rpb24gdG9nZ2xlKHN0YXRlKSB7XG5cdFx0XHRpZiAodHlwZW9mIHN0YXRlID09PSBcImJvb2xlYW5cIikge1xuXHRcdFx0XHRyZXR1cm4gc3RhdGUgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aWYgKGlzSGlkZGVuV2l0aGluVHJlZSh0aGlzKSkge1xuXHRcdFx0XHRcdGpRdWVyeSh0aGlzKS5zaG93KCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0alF1ZXJ5KHRoaXMpLmhpZGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcblx0dmFyIHJjaGVja2FibGVUeXBlID0gL14oPzpjaGVja2JveHxyYWRpbykkL2k7XG5cblx0dmFyIHJ0YWdOYW1lID0gLzwoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0rKS9pO1xuXG5cdHZhciByc2NyaXB0VHlwZSA9IC9eJHxebW9kdWxlJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2k7XG5cblx0Ly8gV2UgaGF2ZSB0byBjbG9zZSB0aGVzZSB0YWdzIHRvIHN1cHBvcnQgWEhUTUwgKCMxMzIwMClcblx0dmFyIHdyYXBNYXAgPSB7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXHRcdG9wdGlvbjogWzEsIFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLCBcIjwvc2VsZWN0PlwiXSxcblxuXHRcdC8vIFhIVE1MIHBhcnNlcnMgZG8gbm90IG1hZ2ljYWxseSBpbnNlcnQgZWxlbWVudHMgaW4gdGhlXG5cdFx0Ly8gc2FtZSB3YXkgdGhhdCB0YWcgc291cCBwYXJzZXJzIGRvLiBTbyB3ZSBjYW5ub3Qgc2hvcnRlblxuXHRcdC8vIHRoaXMgYnkgb21pdHRpbmcgPHRib2R5PiBvciBvdGhlciByZXF1aXJlZCBlbGVtZW50cy5cblx0XHR0aGVhZDogWzEsIFwiPHRhYmxlPlwiLCBcIjwvdGFibGU+XCJdLFxuXHRcdGNvbDogWzIsIFwiPHRhYmxlPjxjb2xncm91cD5cIiwgXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLFxuXHRcdHRyOiBbMiwgXCI8dGFibGU+PHRib2R5PlwiLCBcIjwvdGJvZHk+PC90YWJsZT5cIl0sXG5cdFx0dGQ6IFszLCBcIjx0YWJsZT48dGJvZHk+PHRyPlwiLCBcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxcblxuXHRcdF9kZWZhdWx0OiBbMCwgXCJcIiwgXCJcIl1cblx0fTtcblxuXHQvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXHR3cmFwTWFwLm9wdGdyb3VwID0gd3JhcE1hcC5vcHRpb247XG5cblx0d3JhcE1hcC50Ym9keSA9IHdyYXBNYXAudGZvb3QgPSB3cmFwTWFwLmNvbGdyb3VwID0gd3JhcE1hcC5jYXB0aW9uID0gd3JhcE1hcC50aGVhZDtcblx0d3JhcE1hcC50aCA9IHdyYXBNYXAudGQ7XG5cblx0ZnVuY3Rpb24gZ2V0QWxsKGNvbnRleHQsIHRhZykge1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTEgb25seVxuXHRcdC8vIFVzZSB0eXBlb2YgdG8gYXZvaWQgemVyby1hcmd1bWVudCBtZXRob2QgaW52b2NhdGlvbiBvbiBob3N0IG9iamVjdHMgKCMxNTE1MSlcblx0XHR2YXIgcmV0O1xuXG5cdFx0aWYgKHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRyZXQgPSBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZyB8fCBcIipcIik7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRyZXQgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwodGFnIHx8IFwiKlwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0ID0gW107XG5cdFx0fVxuXG5cdFx0aWYgKHRhZyA9PT0gdW5kZWZpbmVkIHx8IHRhZyAmJiBub2RlTmFtZShjb250ZXh0LCB0YWcpKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5Lm1lcmdlKFtjb250ZXh0XSwgcmV0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0Ly8gTWFyayBzY3JpcHRzIGFzIGhhdmluZyBhbHJlYWR5IGJlZW4gZXZhbHVhdGVkXG5cdGZ1bmN0aW9uIHNldEdsb2JhbEV2YWwoZWxlbXMsIHJlZkVsZW1lbnRzKSB7XG5cdFx0dmFyIGkgPSAwLFxuXHRcdCAgICBsID0gZWxlbXMubGVuZ3RoO1xuXG5cdFx0Zm9yICg7IGkgPCBsOyBpKyspIHtcblx0XHRcdGRhdGFQcml2LnNldChlbGVtc1tpXSwgXCJnbG9iYWxFdmFsXCIsICFyZWZFbGVtZW50cyB8fCBkYXRhUHJpdi5nZXQocmVmRWxlbWVudHNbaV0sIFwiZ2xvYmFsRXZhbFwiKSk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIHJodG1sID0gLzx8JiM/XFx3KzsvO1xuXG5cdGZ1bmN0aW9uIGJ1aWxkRnJhZ21lbnQoZWxlbXMsIGNvbnRleHQsIHNjcmlwdHMsIHNlbGVjdGlvbiwgaWdub3JlZCkge1xuXHRcdHZhciBlbGVtLFxuXHRcdCAgICB0bXAsXG5cdFx0ICAgIHRhZyxcblx0XHQgICAgd3JhcCxcblx0XHQgICAgY29udGFpbnMsXG5cdFx0ICAgIGosXG5cdFx0ICAgIGZyYWdtZW50ID0gY29udGV4dC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG5cdFx0ICAgIG5vZGVzID0gW10sXG5cdFx0ICAgIGkgPSAwLFxuXHRcdCAgICBsID0gZWxlbXMubGVuZ3RoO1xuXG5cdFx0Zm9yICg7IGkgPCBsOyBpKyspIHtcblx0XHRcdGVsZW0gPSBlbGVtc1tpXTtcblxuXHRcdFx0aWYgKGVsZW0gfHwgZWxlbSA9PT0gMCkge1xuXG5cdFx0XHRcdC8vIEFkZCBub2RlcyBkaXJlY3RseVxuXHRcdFx0XHRpZiAodG9UeXBlKGVsZW0pID09PSBcIm9iamVjdFwiKSB7XG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcblx0XHRcdFx0XHQvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cdFx0XHRcdFx0alF1ZXJ5Lm1lcmdlKG5vZGVzLCBlbGVtLm5vZGVUeXBlID8gW2VsZW1dIDogZWxlbSk7XG5cblx0XHRcdFx0XHQvLyBDb252ZXJ0IG5vbi1odG1sIGludG8gYSB0ZXh0IG5vZGVcblx0XHRcdFx0fSBlbHNlIGlmICghcmh0bWwudGVzdChlbGVtKSkge1xuXHRcdFx0XHRcdG5vZGVzLnB1c2goY29udGV4dC5jcmVhdGVUZXh0Tm9kZShlbGVtKSk7XG5cblx0XHRcdFx0XHQvLyBDb252ZXJ0IGh0bWwgaW50byBET00gbm9kZXNcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0bXAgPSB0bXAgfHwgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY29udGV4dC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcblxuXHRcdFx0XHRcdC8vIERlc2VyaWFsaXplIGEgc3RhbmRhcmQgcmVwcmVzZW50YXRpb25cblx0XHRcdFx0XHR0YWcgPSAocnRhZ05hbWUuZXhlYyhlbGVtKSB8fCBbXCJcIiwgXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0d3JhcCA9IHdyYXBNYXBbdGFnXSB8fCB3cmFwTWFwLl9kZWZhdWx0O1xuXHRcdFx0XHRcdHRtcC5pbm5lckhUTUwgPSB3cmFwWzFdICsgalF1ZXJ5Lmh0bWxQcmVmaWx0ZXIoZWxlbSkgKyB3cmFwWzJdO1xuXG5cdFx0XHRcdFx0Ly8gRGVzY2VuZCB0aHJvdWdoIHdyYXBwZXJzIHRvIHRoZSByaWdodCBjb250ZW50XG5cdFx0XHRcdFx0aiA9IHdyYXBbMF07XG5cdFx0XHRcdFx0d2hpbGUgKGotLSkge1xuXHRcdFx0XHRcdFx0dG1wID0gdG1wLmxhc3RDaGlsZDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcblx0XHRcdFx0XHQvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cdFx0XHRcdFx0alF1ZXJ5Lm1lcmdlKG5vZGVzLCB0bXAuY2hpbGROb2Rlcyk7XG5cblx0XHRcdFx0XHQvLyBSZW1lbWJlciB0aGUgdG9wLWxldmVsIGNvbnRhaW5lclxuXHRcdFx0XHRcdHRtcCA9IGZyYWdtZW50LmZpcnN0Q2hpbGQ7XG5cblx0XHRcdFx0XHQvLyBFbnN1cmUgdGhlIGNyZWF0ZWQgbm9kZXMgYXJlIG9ycGhhbmVkICgjMTIzOTIpXG5cdFx0XHRcdFx0dG1wLnRleHRDb250ZW50ID0gXCJcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFJlbW92ZSB3cmFwcGVyIGZyb20gZnJhZ21lbnRcblx0XHRmcmFnbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cblx0XHRpID0gMDtcblx0XHR3aGlsZSAoZWxlbSA9IG5vZGVzW2krK10pIHtcblxuXHRcdFx0Ly8gU2tpcCBlbGVtZW50cyBhbHJlYWR5IGluIHRoZSBjb250ZXh0IGNvbGxlY3Rpb24gKHRyYWMtNDA4Nylcblx0XHRcdGlmIChzZWxlY3Rpb24gJiYgalF1ZXJ5LmluQXJyYXkoZWxlbSwgc2VsZWN0aW9uKSA+IC0xKSB7XG5cdFx0XHRcdGlmIChpZ25vcmVkKSB7XG5cdFx0XHRcdFx0aWdub3JlZC5wdXNoKGVsZW0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb250YWlucyA9IGpRdWVyeS5jb250YWlucyhlbGVtLm93bmVyRG9jdW1lbnQsIGVsZW0pO1xuXG5cdFx0XHQvLyBBcHBlbmQgdG8gZnJhZ21lbnRcblx0XHRcdHRtcCA9IGdldEFsbChmcmFnbWVudC5hcHBlbmRDaGlsZChlbGVtKSwgXCJzY3JpcHRcIik7XG5cblx0XHRcdC8vIFByZXNlcnZlIHNjcmlwdCBldmFsdWF0aW9uIGhpc3Rvcnlcblx0XHRcdGlmIChjb250YWlucykge1xuXHRcdFx0XHRzZXRHbG9iYWxFdmFsKHRtcCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENhcHR1cmUgZXhlY3V0YWJsZXNcblx0XHRcdGlmIChzY3JpcHRzKSB7XG5cdFx0XHRcdGogPSAwO1xuXHRcdFx0XHR3aGlsZSAoZWxlbSA9IHRtcFtqKytdKSB7XG5cdFx0XHRcdFx0aWYgKHJzY3JpcHRUeXBlLnRlc3QoZWxlbS50eXBlIHx8IFwiXCIpKSB7XG5cdFx0XHRcdFx0XHRzY3JpcHRzLnB1c2goZWxlbSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZyYWdtZW50O1xuXHR9XG5cblx0KGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG5cdFx0ICAgIGRpdiA9IGZyYWdtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLFxuXHRcdCAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuXHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgNC4wIC0gNC4zIG9ubHlcblx0XHQvLyBDaGVjayBzdGF0ZSBsb3N0IGlmIHRoZSBuYW1lIGlzIHNldCAoIzExMjE3KVxuXHRcdC8vIFN1cHBvcnQ6IFdpbmRvd3MgV2ViIEFwcHMgKFdXQSlcblx0XHQvLyBgbmFtZWAgYW5kIGB0eXBlYCBtdXN0IHVzZSAuc2V0QXR0cmlidXRlIGZvciBXV0EgKCMxNDkwMSlcblx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG5cdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcImNoZWNrZWRcIik7XG5cdFx0aW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRcIik7XG5cblx0XHRkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG5cdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMSBvbmx5XG5cdFx0Ly8gT2xkZXIgV2ViS2l0IGRvZXNuJ3QgY2xvbmUgY2hlY2tlZCBzdGF0ZSBjb3JyZWN0bHkgaW4gZnJhZ21lbnRzXG5cdFx0c3VwcG9ydC5jaGVja0Nsb25lID0gZGl2LmNsb25lTm9kZSh0cnVlKS5jbG9uZU5vZGUodHJ1ZSkubGFzdENoaWxkLmNoZWNrZWQ7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcblx0XHQvLyBNYWtlIHN1cmUgdGV4dGFyZWEgKGFuZCBjaGVja2JveCkgZGVmYXVsdFZhbHVlIGlzIHByb3Blcmx5IGNsb25lZFxuXHRcdGRpdi5pbm5lckhUTUwgPSBcIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIjtcblx0XHRzdXBwb3J0Lm5vQ2xvbmVDaGVja2VkID0gISFkaXYuY2xvbmVOb2RlKHRydWUpLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWU7XG5cdH0pKCk7XG5cdHZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblx0dmFyIHJrZXlFdmVudCA9IC9ea2V5Lyxcblx0ICAgIHJtb3VzZUV2ZW50ID0gL14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51fGRyYWd8ZHJvcCl8Y2xpY2svLFxuXHQgICAgcnR5cGVuYW1lc3BhY2UgPSAvXihbXi5dKikoPzpcXC4oLispfCkvO1xuXG5cdGZ1bmN0aW9uIHJldHVyblRydWUoKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRmdW5jdGlvbiByZXR1cm5GYWxzZSgpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXHQvLyBTZWUgIzEzMzkzIGZvciBtb3JlIGluZm9cblx0ZnVuY3Rpb24gc2FmZUFjdGl2ZUVsZW1lbnQoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXHRcdH0gY2F0Y2ggKGVycikge31cblx0fVxuXG5cdGZ1bmN0aW9uIF9vbihlbGVtLCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuLCBvbmUpIHtcblx0XHR2YXIgb3JpZ0ZuLCB0eXBlO1xuXG5cdFx0Ly8gVHlwZXMgY2FuIGJlIGEgbWFwIG9mIHR5cGVzL2hhbmRsZXJzXG5cdFx0aWYgKCh0eXBlb2YgdHlwZXMgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih0eXBlcykpID09PSBcIm9iamVjdFwiKSB7XG5cblx0XHRcdC8vICggdHlwZXMtT2JqZWN0LCBzZWxlY3RvciwgZGF0YSApXG5cdFx0XHRpZiAodHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiKSB7XG5cblx0XHRcdFx0Ly8gKCB0eXBlcy1PYmplY3QsIGRhdGEgKVxuXHRcdFx0XHRkYXRhID0gZGF0YSB8fCBzZWxlY3Rvcjtcblx0XHRcdFx0c2VsZWN0b3IgPSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHR5cGUgaW4gdHlwZXMpIHtcblx0XHRcdFx0X29uKGVsZW0sIHR5cGUsIHNlbGVjdG9yLCBkYXRhLCB0eXBlc1t0eXBlXSwgb25lKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBlbGVtO1xuXHRcdH1cblxuXHRcdGlmIChkYXRhID09IG51bGwgJiYgZm4gPT0gbnVsbCkge1xuXG5cdFx0XHQvLyAoIHR5cGVzLCBmbiApXG5cdFx0XHRmbiA9IHNlbGVjdG9yO1xuXHRcdFx0ZGF0YSA9IHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuXHRcdH0gZWxzZSBpZiAoZm4gPT0gbnVsbCkge1xuXHRcdFx0aWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikge1xuXG5cdFx0XHRcdC8vICggdHlwZXMsIHNlbGVjdG9yLCBmbiApXG5cdFx0XHRcdGZuID0gZGF0YTtcblx0XHRcdFx0ZGF0YSA9IHVuZGVmaW5lZDtcblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gKCB0eXBlcywgZGF0YSwgZm4gKVxuXHRcdFx0XHRmbiA9IGRhdGE7XG5cdFx0XHRcdGRhdGEgPSBzZWxlY3Rvcjtcblx0XHRcdFx0c2VsZWN0b3IgPSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChmbiA9PT0gZmFsc2UpIHtcblx0XHRcdGZuID0gcmV0dXJuRmFsc2U7XG5cdFx0fSBlbHNlIGlmICghZm4pIHtcblx0XHRcdHJldHVybiBlbGVtO1xuXHRcdH1cblxuXHRcdGlmIChvbmUgPT09IDEpIHtcblx0XHRcdG9yaWdGbiA9IGZuO1xuXHRcdFx0Zm4gPSBmdW5jdGlvbiBmbihldmVudCkge1xuXG5cdFx0XHRcdC8vIENhbiB1c2UgYW4gZW1wdHkgc2V0LCBzaW5jZSBldmVudCBjb250YWlucyB0aGUgaW5mb1xuXHRcdFx0XHRqUXVlcnkoKS5vZmYoZXZlbnQpO1xuXHRcdFx0XHRyZXR1cm4gb3JpZ0ZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBVc2Ugc2FtZSBndWlkIHNvIGNhbGxlciBjYW4gcmVtb3ZlIHVzaW5nIG9yaWdGblxuXHRcdFx0Zm4uZ3VpZCA9IG9yaWdGbi5ndWlkIHx8IChvcmlnRm4uZ3VpZCA9IGpRdWVyeS5ndWlkKyspO1xuXHRcdH1cblx0XHRyZXR1cm4gZWxlbS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGpRdWVyeS5ldmVudC5hZGQodGhpcywgdHlwZXMsIGZuLCBkYXRhLCBzZWxlY3Rvcik7XG5cdFx0fSk7XG5cdH1cblxuXHQvKlxuICAqIEhlbHBlciBmdW5jdGlvbnMgZm9yIG1hbmFnaW5nIGV2ZW50cyAtLSBub3QgcGFydCBvZiB0aGUgcHVibGljIGludGVyZmFjZS5cbiAgKiBQcm9wcyB0byBEZWFuIEVkd2FyZHMnIGFkZEV2ZW50IGxpYnJhcnkgZm9yIG1hbnkgb2YgdGhlIGlkZWFzLlxuICAqL1xuXHRqUXVlcnkuZXZlbnQgPSB7XG5cblx0XHRnbG9iYWw6IHt9LFxuXG5cdFx0YWRkOiBmdW5jdGlvbiBhZGQoZWxlbSwgdHlwZXMsIGhhbmRsZXIsIGRhdGEsIHNlbGVjdG9yKSB7XG5cblx0XHRcdHZhciBoYW5kbGVPYmpJbixcblx0XHRcdCAgICBldmVudEhhbmRsZSxcblx0XHRcdCAgICB0bXAsXG5cdFx0XHQgICAgZXZlbnRzLFxuXHRcdFx0ICAgIHQsXG5cdFx0XHQgICAgaGFuZGxlT2JqLFxuXHRcdFx0ICAgIHNwZWNpYWwsXG5cdFx0XHQgICAgaGFuZGxlcnMsXG5cdFx0XHQgICAgdHlwZSxcblx0XHRcdCAgICBuYW1lc3BhY2VzLFxuXHRcdFx0ICAgIG9yaWdUeXBlLFxuXHRcdFx0ICAgIGVsZW1EYXRhID0gZGF0YVByaXYuZ2V0KGVsZW0pO1xuXG5cdFx0XHQvLyBEb24ndCBhdHRhY2ggZXZlbnRzIHRvIG5vRGF0YSBvciB0ZXh0L2NvbW1lbnQgbm9kZXMgKGJ1dCBhbGxvdyBwbGFpbiBvYmplY3RzKVxuXHRcdFx0aWYgKCFlbGVtRGF0YSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIENhbGxlciBjYW4gcGFzcyBpbiBhbiBvYmplY3Qgb2YgY3VzdG9tIGRhdGEgaW4gbGlldSBvZiB0aGUgaGFuZGxlclxuXHRcdFx0aWYgKGhhbmRsZXIuaGFuZGxlcikge1xuXHRcdFx0XHRoYW5kbGVPYmpJbiA9IGhhbmRsZXI7XG5cdFx0XHRcdGhhbmRsZXIgPSBoYW5kbGVPYmpJbi5oYW5kbGVyO1xuXHRcdFx0XHRzZWxlY3RvciA9IGhhbmRsZU9iakluLnNlbGVjdG9yO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFbnN1cmUgdGhhdCBpbnZhbGlkIHNlbGVjdG9ycyB0aHJvdyBleGNlcHRpb25zIGF0IGF0dGFjaCB0aW1lXG5cdFx0XHQvLyBFdmFsdWF0ZSBhZ2FpbnN0IGRvY3VtZW50RWxlbWVudCBpbiBjYXNlIGVsZW0gaXMgYSBub24tZWxlbWVudCBub2RlIChlLmcuLCBkb2N1bWVudClcblx0XHRcdGlmIChzZWxlY3Rvcikge1xuXHRcdFx0XHRqUXVlcnkuZmluZC5tYXRjaGVzU2VsZWN0b3IoZG9jdW1lbnRFbGVtZW50LCBzZWxlY3Rvcik7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBoYW5kbGVyIGhhcyBhIHVuaXF1ZSBJRCwgdXNlZCB0byBmaW5kL3JlbW92ZSBpdCBsYXRlclxuXHRcdFx0aWYgKCFoYW5kbGVyLmd1aWQpIHtcblx0XHRcdFx0aGFuZGxlci5ndWlkID0galF1ZXJ5Lmd1aWQrKztcblx0XHRcdH1cblxuXHRcdFx0Ly8gSW5pdCB0aGUgZWxlbWVudCdzIGV2ZW50IHN0cnVjdHVyZSBhbmQgbWFpbiBoYW5kbGVyLCBpZiB0aGlzIGlzIHRoZSBmaXJzdFxuXHRcdFx0aWYgKCEoZXZlbnRzID0gZWxlbURhdGEuZXZlbnRzKSkge1xuXHRcdFx0XHRldmVudHMgPSBlbGVtRGF0YS5ldmVudHMgPSB7fTtcblx0XHRcdH1cblx0XHRcdGlmICghKGV2ZW50SGFuZGxlID0gZWxlbURhdGEuaGFuZGxlKSkge1xuXHRcdFx0XHRldmVudEhhbmRsZSA9IGVsZW1EYXRhLmhhbmRsZSA9IGZ1bmN0aW9uIChlKSB7XG5cblx0XHRcdFx0XHQvLyBEaXNjYXJkIHRoZSBzZWNvbmQgZXZlbnQgb2YgYSBqUXVlcnkuZXZlbnQudHJpZ2dlcigpIGFuZFxuXHRcdFx0XHRcdC8vIHdoZW4gYW4gZXZlbnQgaXMgY2FsbGVkIGFmdGVyIGEgcGFnZSBoYXMgdW5sb2FkZWRcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIGpRdWVyeSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBqUXVlcnkuZXZlbnQudHJpZ2dlcmVkICE9PSBlLnR5cGUgPyBqUXVlcnkuZXZlbnQuZGlzcGF0Y2guYXBwbHkoZWxlbSwgYXJndW1lbnRzKSA6IHVuZGVmaW5lZDtcblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSGFuZGxlIG11bHRpcGxlIGV2ZW50cyBzZXBhcmF0ZWQgYnkgYSBzcGFjZVxuXHRcdFx0dHlwZXMgPSAodHlwZXMgfHwgXCJcIikubWF0Y2gocm5vdGh0bWx3aGl0ZSkgfHwgW1wiXCJdO1xuXHRcdFx0dCA9IHR5cGVzLmxlbmd0aDtcblx0XHRcdHdoaWxlICh0LS0pIHtcblx0XHRcdFx0dG1wID0gcnR5cGVuYW1lc3BhY2UuZXhlYyh0eXBlc1t0XSkgfHwgW107XG5cdFx0XHRcdHR5cGUgPSBvcmlnVHlwZSA9IHRtcFsxXTtcblx0XHRcdFx0bmFtZXNwYWNlcyA9ICh0bXBbMl0gfHwgXCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKTtcblxuXHRcdFx0XHQvLyBUaGVyZSAqbXVzdCogYmUgYSB0eXBlLCBubyBhdHRhY2hpbmcgbmFtZXNwYWNlLW9ubHkgaGFuZGxlcnNcblx0XHRcdFx0aWYgKCF0eXBlKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiBldmVudCBjaGFuZ2VzIGl0cyB0eXBlLCB1c2UgdGhlIHNwZWNpYWwgZXZlbnQgaGFuZGxlcnMgZm9yIHRoZSBjaGFuZ2VkIHR5cGVcblx0XHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsW3R5cGVdIHx8IHt9O1xuXG5cdFx0XHRcdC8vIElmIHNlbGVjdG9yIGRlZmluZWQsIGRldGVybWluZSBzcGVjaWFsIGV2ZW50IGFwaSB0eXBlLCBvdGhlcndpc2UgZ2l2ZW4gdHlwZVxuXHRcdFx0XHR0eXBlID0gKHNlbGVjdG9yID8gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgOiBzcGVjaWFsLmJpbmRUeXBlKSB8fCB0eXBlO1xuXG5cdFx0XHRcdC8vIFVwZGF0ZSBzcGVjaWFsIGJhc2VkIG9uIG5ld2x5IHJlc2V0IHR5cGVcblx0XHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsW3R5cGVdIHx8IHt9O1xuXG5cdFx0XHRcdC8vIGhhbmRsZU9iaiBpcyBwYXNzZWQgdG8gYWxsIGV2ZW50IGhhbmRsZXJzXG5cdFx0XHRcdGhhbmRsZU9iaiA9IGpRdWVyeS5leHRlbmQoe1xuXHRcdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdFx0b3JpZ1R5cGU6IG9yaWdUeXBlLFxuXHRcdFx0XHRcdGRhdGE6IGRhdGEsXG5cdFx0XHRcdFx0aGFuZGxlcjogaGFuZGxlcixcblx0XHRcdFx0XHRndWlkOiBoYW5kbGVyLmd1aWQsXG5cdFx0XHRcdFx0c2VsZWN0b3I6IHNlbGVjdG9yLFxuXHRcdFx0XHRcdG5lZWRzQ29udGV4dDogc2VsZWN0b3IgJiYgalF1ZXJ5LmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3Qoc2VsZWN0b3IpLFxuXHRcdFx0XHRcdG5hbWVzcGFjZTogbmFtZXNwYWNlcy5qb2luKFwiLlwiKVxuXHRcdFx0XHR9LCBoYW5kbGVPYmpJbik7XG5cblx0XHRcdFx0Ly8gSW5pdCB0aGUgZXZlbnQgaGFuZGxlciBxdWV1ZSBpZiB3ZSdyZSB0aGUgZmlyc3Rcblx0XHRcdFx0aWYgKCEoaGFuZGxlcnMgPSBldmVudHNbdHlwZV0pKSB7XG5cdFx0XHRcdFx0aGFuZGxlcnMgPSBldmVudHNbdHlwZV0gPSBbXTtcblx0XHRcdFx0XHRoYW5kbGVycy5kZWxlZ2F0ZUNvdW50ID0gMDtcblxuXHRcdFx0XHRcdC8vIE9ubHkgdXNlIGFkZEV2ZW50TGlzdGVuZXIgaWYgdGhlIHNwZWNpYWwgZXZlbnRzIGhhbmRsZXIgcmV0dXJucyBmYWxzZVxuXHRcdFx0XHRcdGlmICghc3BlY2lhbC5zZXR1cCB8fCBzcGVjaWFsLnNldHVwLmNhbGwoZWxlbSwgZGF0YSwgbmFtZXNwYWNlcywgZXZlbnRIYW5kbGUpID09PSBmYWxzZSkge1xuXG5cdFx0XHRcdFx0XHRpZiAoZWxlbS5hZGRFdmVudExpc3RlbmVyKSB7XG5cdFx0XHRcdFx0XHRcdGVsZW0uYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBldmVudEhhbmRsZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHNwZWNpYWwuYWRkKSB7XG5cdFx0XHRcdFx0c3BlY2lhbC5hZGQuY2FsbChlbGVtLCBoYW5kbGVPYmopO1xuXG5cdFx0XHRcdFx0aWYgKCFoYW5kbGVPYmouaGFuZGxlci5ndWlkKSB7XG5cdFx0XHRcdFx0XHRoYW5kbGVPYmouaGFuZGxlci5ndWlkID0gaGFuZGxlci5ndWlkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFkZCB0byB0aGUgZWxlbWVudCdzIGhhbmRsZXIgbGlzdCwgZGVsZWdhdGVzIGluIGZyb250XG5cdFx0XHRcdGlmIChzZWxlY3Rvcikge1xuXHRcdFx0XHRcdGhhbmRsZXJzLnNwbGljZShoYW5kbGVycy5kZWxlZ2F0ZUNvdW50KyssIDAsIGhhbmRsZU9iaik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aGFuZGxlcnMucHVzaChoYW5kbGVPYmopO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gS2VlcCB0cmFjayBvZiB3aGljaCBldmVudHMgaGF2ZSBldmVyIGJlZW4gdXNlZCwgZm9yIGV2ZW50IG9wdGltaXphdGlvblxuXHRcdFx0XHRqUXVlcnkuZXZlbnQuZ2xvYmFsW3R5cGVdID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gRGV0YWNoIGFuIGV2ZW50IG9yIHNldCBvZiBldmVudHMgZnJvbSBhbiBlbGVtZW50XG5cdFx0cmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoZWxlbSwgdHlwZXMsIGhhbmRsZXIsIHNlbGVjdG9yLCBtYXBwZWRUeXBlcykge1xuXG5cdFx0XHR2YXIgaixcblx0XHRcdCAgICBvcmlnQ291bnQsXG5cdFx0XHQgICAgdG1wLFxuXHRcdFx0ICAgIGV2ZW50cyxcblx0XHRcdCAgICB0LFxuXHRcdFx0ICAgIGhhbmRsZU9iaixcblx0XHRcdCAgICBzcGVjaWFsLFxuXHRcdFx0ICAgIGhhbmRsZXJzLFxuXHRcdFx0ICAgIHR5cGUsXG5cdFx0XHQgICAgbmFtZXNwYWNlcyxcblx0XHRcdCAgICBvcmlnVHlwZSxcblx0XHRcdCAgICBlbGVtRGF0YSA9IGRhdGFQcml2Lmhhc0RhdGEoZWxlbSkgJiYgZGF0YVByaXYuZ2V0KGVsZW0pO1xuXG5cdFx0XHRpZiAoIWVsZW1EYXRhIHx8ICEoZXZlbnRzID0gZWxlbURhdGEuZXZlbnRzKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIE9uY2UgZm9yIGVhY2ggdHlwZS5uYW1lc3BhY2UgaW4gdHlwZXM7IHR5cGUgbWF5IGJlIG9taXR0ZWRcblx0XHRcdHR5cGVzID0gKHR5cGVzIHx8IFwiXCIpLm1hdGNoKHJub3RodG1sd2hpdGUpIHx8IFtcIlwiXTtcblx0XHRcdHQgPSB0eXBlcy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAodC0tKSB7XG5cdFx0XHRcdHRtcCA9IHJ0eXBlbmFtZXNwYWNlLmV4ZWModHlwZXNbdF0pIHx8IFtdO1xuXHRcdFx0XHR0eXBlID0gb3JpZ1R5cGUgPSB0bXBbMV07XG5cdFx0XHRcdG5hbWVzcGFjZXMgPSAodG1wWzJdIHx8IFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCk7XG5cblx0XHRcdFx0Ly8gVW5iaW5kIGFsbCBldmVudHMgKG9uIHRoaXMgbmFtZXNwYWNlLCBpZiBwcm92aWRlZCkgZm9yIHRoZSBlbGVtZW50XG5cdFx0XHRcdGlmICghdHlwZSkge1xuXHRcdFx0XHRcdGZvciAodHlwZSBpbiBldmVudHMpIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5ldmVudC5yZW1vdmUoZWxlbSwgdHlwZSArIHR5cGVzW3RdLCBoYW5kbGVyLCBzZWxlY3RvciwgdHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsW3R5cGVdIHx8IHt9O1xuXHRcdFx0XHR0eXBlID0gKHNlbGVjdG9yID8gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgOiBzcGVjaWFsLmJpbmRUeXBlKSB8fCB0eXBlO1xuXHRcdFx0XHRoYW5kbGVycyA9IGV2ZW50c1t0eXBlXSB8fCBbXTtcblx0XHRcdFx0dG1wID0gdG1wWzJdICYmIG5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIiArIG5hbWVzcGFjZXMuam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpICsgXCIoXFxcXC58JClcIik7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIG1hdGNoaW5nIGV2ZW50c1xuXHRcdFx0XHRvcmlnQ291bnQgPSBqID0gaGFuZGxlcnMubGVuZ3RoO1xuXHRcdFx0XHR3aGlsZSAoai0tKSB7XG5cdFx0XHRcdFx0aGFuZGxlT2JqID0gaGFuZGxlcnNbal07XG5cblx0XHRcdFx0XHRpZiAoKG1hcHBlZFR5cGVzIHx8IG9yaWdUeXBlID09PSBoYW5kbGVPYmoub3JpZ1R5cGUpICYmICghaGFuZGxlciB8fCBoYW5kbGVyLmd1aWQgPT09IGhhbmRsZU9iai5ndWlkKSAmJiAoIXRtcCB8fCB0bXAudGVzdChoYW5kbGVPYmoubmFtZXNwYWNlKSkgJiYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gaGFuZGxlT2JqLnNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSBcIioqXCIgJiYgaGFuZGxlT2JqLnNlbGVjdG9yKSkge1xuXHRcdFx0XHRcdFx0aGFuZGxlcnMuc3BsaWNlKGosIDEpO1xuXG5cdFx0XHRcdFx0XHRpZiAoaGFuZGxlT2JqLnNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0XHRcdGhhbmRsZXJzLmRlbGVnYXRlQ291bnQtLTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChzcGVjaWFsLnJlbW92ZSkge1xuXHRcdFx0XHRcdFx0XHRzcGVjaWFsLnJlbW92ZS5jYWxsKGVsZW0sIGhhbmRsZU9iaik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIGdlbmVyaWMgZXZlbnQgaGFuZGxlciBpZiB3ZSByZW1vdmVkIHNvbWV0aGluZyBhbmQgbm8gbW9yZSBoYW5kbGVycyBleGlzdFxuXHRcdFx0XHQvLyAoYXZvaWRzIHBvdGVudGlhbCBmb3IgZW5kbGVzcyByZWN1cnNpb24gZHVyaW5nIHJlbW92YWwgb2Ygc3BlY2lhbCBldmVudCBoYW5kbGVycylcblx0XHRcdFx0aWYgKG9yaWdDb3VudCAmJiAhaGFuZGxlcnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0aWYgKCFzcGVjaWFsLnRlYXJkb3duIHx8IHNwZWNpYWwudGVhcmRvd24uY2FsbChlbGVtLCBuYW1lc3BhY2VzLCBlbGVtRGF0YS5oYW5kbGUpID09PSBmYWxzZSkge1xuXG5cdFx0XHRcdFx0XHRqUXVlcnkucmVtb3ZlRXZlbnQoZWxlbSwgdHlwZSwgZWxlbURhdGEuaGFuZGxlKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRkZWxldGUgZXZlbnRzW3R5cGVdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJlbW92ZSBkYXRhIGFuZCB0aGUgZXhwYW5kbyBpZiBpdCdzIG5vIGxvbmdlciB1c2VkXG5cdFx0XHRpZiAoalF1ZXJ5LmlzRW1wdHlPYmplY3QoZXZlbnRzKSkge1xuXHRcdFx0XHRkYXRhUHJpdi5yZW1vdmUoZWxlbSwgXCJoYW5kbGUgZXZlbnRzXCIpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2gobmF0aXZlRXZlbnQpIHtcblxuXHRcdFx0Ly8gTWFrZSBhIHdyaXRhYmxlIGpRdWVyeS5FdmVudCBmcm9tIHRoZSBuYXRpdmUgZXZlbnQgb2JqZWN0XG5cdFx0XHR2YXIgZXZlbnQgPSBqUXVlcnkuZXZlbnQuZml4KG5hdGl2ZUV2ZW50KTtcblxuXHRcdFx0dmFyIGksXG5cdFx0XHQgICAgaixcblx0XHRcdCAgICByZXQsXG5cdFx0XHQgICAgbWF0Y2hlZCxcblx0XHRcdCAgICBoYW5kbGVPYmosXG5cdFx0XHQgICAgaGFuZGxlclF1ZXVlLFxuXHRcdFx0ICAgIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCksXG5cdFx0XHQgICAgaGFuZGxlcnMgPSAoZGF0YVByaXYuZ2V0KHRoaXMsIFwiZXZlbnRzXCIpIHx8IHt9KVtldmVudC50eXBlXSB8fCBbXSxcblx0XHRcdCAgICBzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbZXZlbnQudHlwZV0gfHwge307XG5cblx0XHRcdC8vIFVzZSB0aGUgZml4LWVkIGpRdWVyeS5FdmVudCByYXRoZXIgdGhhbiB0aGUgKHJlYWQtb25seSkgbmF0aXZlIGV2ZW50XG5cdFx0XHRhcmdzWzBdID0gZXZlbnQ7XG5cblx0XHRcdGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0YXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdH1cblxuXHRcdFx0ZXZlbnQuZGVsZWdhdGVUYXJnZXQgPSB0aGlzO1xuXG5cdFx0XHQvLyBDYWxsIHRoZSBwcmVEaXNwYXRjaCBob29rIGZvciB0aGUgbWFwcGVkIHR5cGUsIGFuZCBsZXQgaXQgYmFpbCBpZiBkZXNpcmVkXG5cdFx0XHRpZiAoc3BlY2lhbC5wcmVEaXNwYXRjaCAmJiBzcGVjaWFsLnByZURpc3BhdGNoLmNhbGwodGhpcywgZXZlbnQpID09PSBmYWxzZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIERldGVybWluZSBoYW5kbGVyc1xuXHRcdFx0aGFuZGxlclF1ZXVlID0galF1ZXJ5LmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcywgZXZlbnQsIGhhbmRsZXJzKTtcblxuXHRcdFx0Ly8gUnVuIGRlbGVnYXRlcyBmaXJzdDsgdGhleSBtYXkgd2FudCB0byBzdG9wIHByb3BhZ2F0aW9uIGJlbmVhdGggdXNcblx0XHRcdGkgPSAwO1xuXHRcdFx0d2hpbGUgKChtYXRjaGVkID0gaGFuZGxlclF1ZXVlW2krK10pICYmICFldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG5cdFx0XHRcdGV2ZW50LmN1cnJlbnRUYXJnZXQgPSBtYXRjaGVkLmVsZW07XG5cblx0XHRcdFx0aiA9IDA7XG5cdFx0XHRcdHdoaWxlICgoaGFuZGxlT2JqID0gbWF0Y2hlZC5oYW5kbGVyc1tqKytdKSAmJiAhZXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuXG5cdFx0XHRcdFx0Ly8gVHJpZ2dlcmVkIGV2ZW50IG11c3QgZWl0aGVyIDEpIGhhdmUgbm8gbmFtZXNwYWNlLCBvciAyKSBoYXZlIG5hbWVzcGFjZShzKVxuXHRcdFx0XHRcdC8vIGEgc3Vic2V0IG9yIGVxdWFsIHRvIHRob3NlIGluIHRoZSBib3VuZCBldmVudCAoYm90aCBjYW4gaGF2ZSBubyBuYW1lc3BhY2UpLlxuXHRcdFx0XHRcdGlmICghZXZlbnQucm5hbWVzcGFjZSB8fCBldmVudC5ybmFtZXNwYWNlLnRlc3QoaGFuZGxlT2JqLm5hbWVzcGFjZSkpIHtcblxuXHRcdFx0XHRcdFx0ZXZlbnQuaGFuZGxlT2JqID0gaGFuZGxlT2JqO1xuXHRcdFx0XHRcdFx0ZXZlbnQuZGF0YSA9IGhhbmRsZU9iai5kYXRhO1xuXG5cdFx0XHRcdFx0XHRyZXQgPSAoKGpRdWVyeS5ldmVudC5zcGVjaWFsW2hhbmRsZU9iai5vcmlnVHlwZV0gfHwge30pLmhhbmRsZSB8fCBoYW5kbGVPYmouaGFuZGxlcikuYXBwbHkobWF0Y2hlZC5lbGVtLCBhcmdzKTtcblxuXHRcdFx0XHRcdFx0aWYgKHJldCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdGlmICgoZXZlbnQucmVzdWx0ID0gcmV0KSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIENhbGwgdGhlIHBvc3REaXNwYXRjaCBob29rIGZvciB0aGUgbWFwcGVkIHR5cGVcblx0XHRcdGlmIChzcGVjaWFsLnBvc3REaXNwYXRjaCkge1xuXHRcdFx0XHRzcGVjaWFsLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsIGV2ZW50KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGV2ZW50LnJlc3VsdDtcblx0XHR9LFxuXG5cdFx0aGFuZGxlcnM6IGZ1bmN0aW9uIGhhbmRsZXJzKGV2ZW50LCBfaGFuZGxlcnMpIHtcblx0XHRcdHZhciBpLFxuXHRcdFx0ICAgIGhhbmRsZU9iaixcblx0XHRcdCAgICBzZWwsXG5cdFx0XHQgICAgbWF0Y2hlZEhhbmRsZXJzLFxuXHRcdFx0ICAgIG1hdGNoZWRTZWxlY3RvcnMsXG5cdFx0XHQgICAgaGFuZGxlclF1ZXVlID0gW10sXG5cdFx0XHQgICAgZGVsZWdhdGVDb3VudCA9IF9oYW5kbGVycy5kZWxlZ2F0ZUNvdW50LFxuXHRcdFx0ICAgIGN1ciA9IGV2ZW50LnRhcmdldDtcblxuXHRcdFx0Ly8gRmluZCBkZWxlZ2F0ZSBoYW5kbGVyc1xuXHRcdFx0aWYgKGRlbGVnYXRlQ291bnQgJiZcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgPD05XG5cdFx0XHQvLyBCbGFjay1ob2xlIFNWRyA8dXNlPiBpbnN0YW5jZSB0cmVlcyAodHJhYy0xMzE4MClcblx0XHRcdGN1ci5ub2RlVHlwZSAmJlxuXG5cdFx0XHQvLyBTdXBwb3J0OiBGaXJlZm94IDw9NDJcblx0XHRcdC8vIFN1cHByZXNzIHNwZWMtdmlvbGF0aW5nIGNsaWNrcyBpbmRpY2F0aW5nIGEgbm9uLXByaW1hcnkgcG9pbnRlciBidXR0b24gKHRyYWMtMzg2MSlcblx0XHRcdC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1FdmVudHMvI2V2ZW50LXR5cGUtY2xpY2tcblx0XHRcdC8vIFN1cHBvcnQ6IElFIDExIG9ubHlcblx0XHRcdC8vIC4uLmJ1dCBub3QgYXJyb3cga2V5IFwiY2xpY2tzXCIgb2YgcmFkaW8gaW5wdXRzLCB3aGljaCBjYW4gaGF2ZSBgYnV0dG9uYCAtMSAoZ2gtMjM0Mylcblx0XHRcdCEoZXZlbnQudHlwZSA9PT0gXCJjbGlja1wiICYmIGV2ZW50LmJ1dHRvbiA+PSAxKSkge1xuXG5cdFx0XHRcdGZvciAoOyBjdXIgIT09IHRoaXM7IGN1ciA9IGN1ci5wYXJlbnROb2RlIHx8IHRoaXMpIHtcblxuXHRcdFx0XHRcdC8vIERvbid0IGNoZWNrIG5vbi1lbGVtZW50cyAoIzEzMjA4KVxuXHRcdFx0XHRcdC8vIERvbid0IHByb2Nlc3MgY2xpY2tzIG9uIGRpc2FibGVkIGVsZW1lbnRzICgjNjkxMSwgIzgxNjUsICMxMTM4MiwgIzExNzY0KVxuXHRcdFx0XHRcdGlmIChjdXIubm9kZVR5cGUgPT09IDEgJiYgIShldmVudC50eXBlID09PSBcImNsaWNrXCIgJiYgY3VyLmRpc2FibGVkID09PSB0cnVlKSkge1xuXHRcdFx0XHRcdFx0bWF0Y2hlZEhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0XHRtYXRjaGVkU2VsZWN0b3JzID0ge307XG5cdFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgZGVsZWdhdGVDb3VudDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdGhhbmRsZU9iaiA9IF9oYW5kbGVyc1tpXTtcblxuXHRcdFx0XHRcdFx0XHQvLyBEb24ndCBjb25mbGljdCB3aXRoIE9iamVjdC5wcm90b3R5cGUgcHJvcGVydGllcyAoIzEzMjAzKVxuXHRcdFx0XHRcdFx0XHRzZWwgPSBoYW5kbGVPYmouc2VsZWN0b3IgKyBcIiBcIjtcblxuXHRcdFx0XHRcdFx0XHRpZiAobWF0Y2hlZFNlbGVjdG9yc1tzZWxdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRtYXRjaGVkU2VsZWN0b3JzW3NlbF0gPSBoYW5kbGVPYmoubmVlZHNDb250ZXh0ID8galF1ZXJ5KHNlbCwgdGhpcykuaW5kZXgoY3VyKSA+IC0xIDogalF1ZXJ5LmZpbmQoc2VsLCB0aGlzLCBudWxsLCBbY3VyXSkubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmIChtYXRjaGVkU2VsZWN0b3JzW3NlbF0pIHtcblx0XHRcdFx0XHRcdFx0XHRtYXRjaGVkSGFuZGxlcnMucHVzaChoYW5kbGVPYmopO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAobWF0Y2hlZEhhbmRsZXJzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRoYW5kbGVyUXVldWUucHVzaCh7IGVsZW06IGN1ciwgaGFuZGxlcnM6IG1hdGNoZWRIYW5kbGVycyB9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIHRoZSByZW1haW5pbmcgKGRpcmVjdGx5LWJvdW5kKSBoYW5kbGVyc1xuXHRcdFx0Y3VyID0gdGhpcztcblx0XHRcdGlmIChkZWxlZ2F0ZUNvdW50IDwgX2hhbmRsZXJzLmxlbmd0aCkge1xuXHRcdFx0XHRoYW5kbGVyUXVldWUucHVzaCh7IGVsZW06IGN1ciwgaGFuZGxlcnM6IF9oYW5kbGVycy5zbGljZShkZWxlZ2F0ZUNvdW50KSB9KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGhhbmRsZXJRdWV1ZTtcblx0XHR9LFxuXG5cdFx0YWRkUHJvcDogZnVuY3Rpb24gYWRkUHJvcChuYW1lLCBob29rKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoalF1ZXJ5LkV2ZW50LnByb3RvdHlwZSwgbmFtZSwge1xuXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cblx0XHRcdFx0Z2V0OiBpc0Z1bmN0aW9uKGhvb2spID8gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLm9yaWdpbmFsRXZlbnQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBob29rKHRoaXMub3JpZ2luYWxFdmVudCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLm9yaWdpbmFsRXZlbnQpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnRbbmFtZV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIG5hbWUsIHtcblx0XHRcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHR3cml0YWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdHZhbHVlOiB2YWx1ZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0Zml4OiBmdW5jdGlvbiBmaXgob3JpZ2luYWxFdmVudCkge1xuXHRcdFx0cmV0dXJuIG9yaWdpbmFsRXZlbnRbalF1ZXJ5LmV4cGFuZG9dID8gb3JpZ2luYWxFdmVudCA6IG5ldyBqUXVlcnkuRXZlbnQob3JpZ2luYWxFdmVudCk7XG5cdFx0fSxcblxuXHRcdHNwZWNpYWw6IHtcblx0XHRcdGxvYWQ6IHtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IHRyaWdnZXJlZCBpbWFnZS5sb2FkIGV2ZW50cyBmcm9tIGJ1YmJsaW5nIHRvIHdpbmRvdy5sb2FkXG5cdFx0XHRcdG5vQnViYmxlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0Zm9jdXM6IHtcblxuXHRcdFx0XHQvLyBGaXJlIG5hdGl2ZSBldmVudCBpZiBwb3NzaWJsZSBzbyBibHVyL2ZvY3VzIHNlcXVlbmNlIGlzIGNvcnJlY3Rcblx0XHRcdFx0dHJpZ2dlcjogZnVuY3Rpb24gdHJpZ2dlcigpIHtcblx0XHRcdFx0XHRpZiAodGhpcyAhPT0gc2FmZUFjdGl2ZUVsZW1lbnQoKSAmJiB0aGlzLmZvY3VzKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRkZWxlZ2F0ZVR5cGU6IFwiZm9jdXNpblwiXG5cdFx0XHR9LFxuXHRcdFx0Ymx1cjoge1xuXHRcdFx0XHR0cmlnZ2VyOiBmdW5jdGlvbiB0cmlnZ2VyKCkge1xuXHRcdFx0XHRcdGlmICh0aGlzID09PSBzYWZlQWN0aXZlRWxlbWVudCgpICYmIHRoaXMuYmx1cikge1xuXHRcdFx0XHRcdFx0dGhpcy5ibHVyKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRkZWxlZ2F0ZVR5cGU6IFwiZm9jdXNvdXRcIlxuXHRcdFx0fSxcblx0XHRcdGNsaWNrOiB7XG5cblx0XHRcdFx0Ly8gRm9yIGNoZWNrYm94LCBmaXJlIG5hdGl2ZSBldmVudCBzbyBjaGVja2VkIHN0YXRlIHdpbGwgYmUgcmlnaHRcblx0XHRcdFx0dHJpZ2dlcjogZnVuY3Rpb24gdHJpZ2dlcigpIHtcblx0XHRcdFx0XHRpZiAodGhpcy50eXBlID09PSBcImNoZWNrYm94XCIgJiYgdGhpcy5jbGljayAmJiBub2RlTmFtZSh0aGlzLCBcImlucHV0XCIpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNsaWNrKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIEZvciBjcm9zcy1icm93c2VyIGNvbnNpc3RlbmN5LCBkb24ndCBmaXJlIG5hdGl2ZSAuY2xpY2soKSBvbiBsaW5rc1xuXHRcdFx0XHRfZGVmYXVsdDogZnVuY3Rpb24gX2RlZmF1bHQoZXZlbnQpIHtcblx0XHRcdFx0XHRyZXR1cm4gbm9kZU5hbWUoZXZlbnQudGFyZ2V0LCBcImFcIik7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdGJlZm9yZXVubG9hZDoge1xuXHRcdFx0XHRwb3N0RGlzcGF0Y2g6IGZ1bmN0aW9uIHBvc3REaXNwYXRjaChldmVudCkge1xuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogRmlyZWZveCAyMCtcblx0XHRcdFx0XHQvLyBGaXJlZm94IGRvZXNuJ3QgYWxlcnQgaWYgdGhlIHJldHVyblZhbHVlIGZpZWxkIGlzIG5vdCBzZXQuXG5cdFx0XHRcdFx0aWYgKGV2ZW50LnJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQpIHtcblx0XHRcdFx0XHRcdGV2ZW50Lm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWUgPSBldmVudC5yZXN1bHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGpRdWVyeS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uIChlbGVtLCB0eXBlLCBoYW5kbGUpIHtcblxuXHRcdC8vIFRoaXMgXCJpZlwiIGlzIG5lZWRlZCBmb3IgcGxhaW4gb2JqZWN0c1xuXHRcdGlmIChlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcblx0XHRcdGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGUpO1xuXHRcdH1cblx0fTtcblxuXHRqUXVlcnkuRXZlbnQgPSBmdW5jdGlvbiAoc3JjLCBwcm9wcykge1xuXG5cdFx0Ly8gQWxsb3cgaW5zdGFudGlhdGlvbiB3aXRob3V0IHRoZSAnbmV3JyBrZXl3b3JkXG5cdFx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIGpRdWVyeS5FdmVudCkpIHtcblx0XHRcdHJldHVybiBuZXcgalF1ZXJ5LkV2ZW50KHNyYywgcHJvcHMpO1xuXHRcdH1cblxuXHRcdC8vIEV2ZW50IG9iamVjdFxuXHRcdGlmIChzcmMgJiYgc3JjLnR5cGUpIHtcblx0XHRcdHRoaXMub3JpZ2luYWxFdmVudCA9IHNyYztcblx0XHRcdHRoaXMudHlwZSA9IHNyYy50eXBlO1xuXG5cdFx0XHQvLyBFdmVudHMgYnViYmxpbmcgdXAgdGhlIGRvY3VtZW50IG1heSBoYXZlIGJlZW4gbWFya2VkIGFzIHByZXZlbnRlZFxuXHRcdFx0Ly8gYnkgYSBoYW5kbGVyIGxvd2VyIGRvd24gdGhlIHRyZWU7IHJlZmxlY3QgdGhlIGNvcnJlY3QgdmFsdWUuXG5cdFx0XHR0aGlzLmlzRGVmYXVsdFByZXZlbnRlZCA9IHNyYy5kZWZhdWx0UHJldmVudGVkIHx8IHNyYy5kZWZhdWx0UHJldmVudGVkID09PSB1bmRlZmluZWQgJiZcblxuXHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTIuMyBvbmx5XG5cdFx0XHRzcmMucmV0dXJuVmFsdWUgPT09IGZhbHNlID8gcmV0dXJuVHJ1ZSA6IHJldHVybkZhbHNlO1xuXG5cdFx0XHQvLyBDcmVhdGUgdGFyZ2V0IHByb3BlcnRpZXNcblx0XHRcdC8vIFN1cHBvcnQ6IFNhZmFyaSA8PTYgLSA3IG9ubHlcblx0XHRcdC8vIFRhcmdldCBzaG91bGQgbm90IGJlIGEgdGV4dCBub2RlICgjNTA0LCAjMTMxNDMpXG5cdFx0XHR0aGlzLnRhcmdldCA9IHNyYy50YXJnZXQgJiYgc3JjLnRhcmdldC5ub2RlVHlwZSA9PT0gMyA/IHNyYy50YXJnZXQucGFyZW50Tm9kZSA6IHNyYy50YXJnZXQ7XG5cblx0XHRcdHRoaXMuY3VycmVudFRhcmdldCA9IHNyYy5jdXJyZW50VGFyZ2V0O1xuXHRcdFx0dGhpcy5yZWxhdGVkVGFyZ2V0ID0gc3JjLnJlbGF0ZWRUYXJnZXQ7XG5cblx0XHRcdC8vIEV2ZW50IHR5cGVcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy50eXBlID0gc3JjO1xuXHRcdH1cblxuXHRcdC8vIFB1dCBleHBsaWNpdGx5IHByb3ZpZGVkIHByb3BlcnRpZXMgb250byB0aGUgZXZlbnQgb2JqZWN0XG5cdFx0aWYgKHByb3BzKSB7XG5cdFx0XHRqUXVlcnkuZXh0ZW5kKHRoaXMsIHByb3BzKTtcblx0XHR9XG5cblx0XHQvLyBDcmVhdGUgYSB0aW1lc3RhbXAgaWYgaW5jb21pbmcgZXZlbnQgZG9lc24ndCBoYXZlIG9uZVxuXHRcdHRoaXMudGltZVN0YW1wID0gc3JjICYmIHNyYy50aW1lU3RhbXAgfHwgRGF0ZS5ub3coKTtcblxuXHRcdC8vIE1hcmsgaXQgYXMgZml4ZWRcblx0XHR0aGlzW2pRdWVyeS5leHBhbmRvXSA9IHRydWU7XG5cdH07XG5cblx0Ly8galF1ZXJ5LkV2ZW50IGlzIGJhc2VkIG9uIERPTTMgRXZlbnRzIGFzIHNwZWNpZmllZCBieSB0aGUgRUNNQVNjcmlwdCBMYW5ndWFnZSBCaW5kaW5nXG5cdC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDAzL1dELURPTS1MZXZlbC0zLUV2ZW50cy0yMDAzMDMzMS9lY21hLXNjcmlwdC1iaW5kaW5nLmh0bWxcblx0alF1ZXJ5LkV2ZW50LnByb3RvdHlwZSA9IHtcblx0XHRjb25zdHJ1Y3RvcjogalF1ZXJ5LkV2ZW50LFxuXHRcdGlzRGVmYXVsdFByZXZlbnRlZDogcmV0dXJuRmFsc2UsXG5cdFx0aXNQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxuXHRcdGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOiByZXR1cm5GYWxzZSxcblx0XHRpc1NpbXVsYXRlZDogZmFsc2UsXG5cblx0XHRwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24gcHJldmVudERlZmF1bHQoKSB7XG5cdFx0XHR2YXIgZSA9IHRoaXMub3JpZ2luYWxFdmVudDtcblxuXHRcdFx0dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSByZXR1cm5UcnVlO1xuXG5cdFx0XHRpZiAoZSAmJiAhdGhpcy5pc1NpbXVsYXRlZCkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRzdG9wUHJvcGFnYXRpb246IGZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbigpIHtcblx0XHRcdHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xuXG5cdFx0XHR0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkID0gcmV0dXJuVHJ1ZTtcblxuXHRcdFx0aWYgKGUgJiYgIXRoaXMuaXNTaW11bGF0ZWQpIHtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjogZnVuY3Rpb24gc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkge1xuXHRcdFx0dmFyIGUgPSB0aGlzLm9yaWdpbmFsRXZlbnQ7XG5cblx0XHRcdHRoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuXG5cdFx0XHRpZiAoZSAmJiAhdGhpcy5pc1NpbXVsYXRlZCkge1xuXHRcdFx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBJbmNsdWRlcyBhbGwgY29tbW9uIGV2ZW50IHByb3BzIGluY2x1ZGluZyBLZXlFdmVudCBhbmQgTW91c2VFdmVudCBzcGVjaWZpYyBwcm9wc1xuXHRqUXVlcnkuZWFjaCh7XG5cdFx0YWx0S2V5OiB0cnVlLFxuXHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0Y2FuY2VsYWJsZTogdHJ1ZSxcblx0XHRjaGFuZ2VkVG91Y2hlczogdHJ1ZSxcblx0XHRjdHJsS2V5OiB0cnVlLFxuXHRcdGRldGFpbDogdHJ1ZSxcblx0XHRldmVudFBoYXNlOiB0cnVlLFxuXHRcdG1ldGFLZXk6IHRydWUsXG5cdFx0cGFnZVg6IHRydWUsXG5cdFx0cGFnZVk6IHRydWUsXG5cdFx0c2hpZnRLZXk6IHRydWUsXG5cdFx0dmlldzogdHJ1ZSxcblx0XHRcImNoYXJcIjogdHJ1ZSxcblx0XHRjaGFyQ29kZTogdHJ1ZSxcblx0XHRrZXk6IHRydWUsXG5cdFx0a2V5Q29kZTogdHJ1ZSxcblx0XHRidXR0b246IHRydWUsXG5cdFx0YnV0dG9uczogdHJ1ZSxcblx0XHRjbGllbnRYOiB0cnVlLFxuXHRcdGNsaWVudFk6IHRydWUsXG5cdFx0b2Zmc2V0WDogdHJ1ZSxcblx0XHRvZmZzZXRZOiB0cnVlLFxuXHRcdHBvaW50ZXJJZDogdHJ1ZSxcblx0XHRwb2ludGVyVHlwZTogdHJ1ZSxcblx0XHRzY3JlZW5YOiB0cnVlLFxuXHRcdHNjcmVlblk6IHRydWUsXG5cdFx0dGFyZ2V0VG91Y2hlczogdHJ1ZSxcblx0XHR0b0VsZW1lbnQ6IHRydWUsXG5cdFx0dG91Y2hlczogdHJ1ZSxcblxuXHRcdHdoaWNoOiBmdW5jdGlvbiB3aGljaChldmVudCkge1xuXHRcdFx0dmFyIGJ1dHRvbiA9IGV2ZW50LmJ1dHRvbjtcblxuXHRcdFx0Ly8gQWRkIHdoaWNoIGZvciBrZXkgZXZlbnRzXG5cdFx0XHRpZiAoZXZlbnQud2hpY2ggPT0gbnVsbCAmJiBya2V5RXZlbnQudGVzdChldmVudC50eXBlKSkge1xuXHRcdFx0XHRyZXR1cm4gZXZlbnQuY2hhckNvZGUgIT0gbnVsbCA/IGV2ZW50LmNoYXJDb2RlIDogZXZlbnQua2V5Q29kZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIHdoaWNoIGZvciBjbGljazogMSA9PT0gbGVmdDsgMiA9PT0gbWlkZGxlOyAzID09PSByaWdodFxuXHRcdFx0aWYgKCFldmVudC53aGljaCAmJiBidXR0b24gIT09IHVuZGVmaW5lZCAmJiBybW91c2VFdmVudC50ZXN0KGV2ZW50LnR5cGUpKSB7XG5cdFx0XHRcdGlmIChidXR0b24gJiAxKSB7XG5cdFx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYnV0dG9uICYgMikge1xuXHRcdFx0XHRcdHJldHVybiAzO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGJ1dHRvbiAmIDQpIHtcblx0XHRcdFx0XHRyZXR1cm4gMjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZXZlbnQud2hpY2g7XG5cdFx0fVxuXHR9LCBqUXVlcnkuZXZlbnQuYWRkUHJvcCk7XG5cblx0Ly8gQ3JlYXRlIG1vdXNlZW50ZXIvbGVhdmUgZXZlbnRzIHVzaW5nIG1vdXNlb3Zlci9vdXQgYW5kIGV2ZW50LXRpbWUgY2hlY2tzXG5cdC8vIHNvIHRoYXQgZXZlbnQgZGVsZWdhdGlvbiB3b3JrcyBpbiBqUXVlcnkuXG5cdC8vIERvIHRoZSBzYW1lIGZvciBwb2ludGVyZW50ZXIvcG9pbnRlcmxlYXZlIGFuZCBwb2ludGVyb3Zlci9wb2ludGVyb3V0XG5cdC8vXG5cdC8vIFN1cHBvcnQ6IFNhZmFyaSA3IG9ubHlcblx0Ly8gU2FmYXJpIHNlbmRzIG1vdXNlZW50ZXIgdG9vIG9mdGVuOyBzZWU6XG5cdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ3MDI1OFxuXHQvLyBmb3IgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBidWcgKGl0IGV4aXN0ZWQgaW4gb2xkZXIgQ2hyb21lIHZlcnNpb25zIGFzIHdlbGwpLlxuXHRqUXVlcnkuZWFjaCh7XG5cdFx0bW91c2VlbnRlcjogXCJtb3VzZW92ZXJcIixcblx0XHRtb3VzZWxlYXZlOiBcIm1vdXNlb3V0XCIsXG5cdFx0cG9pbnRlcmVudGVyOiBcInBvaW50ZXJvdmVyXCIsXG5cdFx0cG9pbnRlcmxlYXZlOiBcInBvaW50ZXJvdXRcIlxuXHR9LCBmdW5jdGlvbiAob3JpZywgZml4KSB7XG5cdFx0alF1ZXJ5LmV2ZW50LnNwZWNpYWxbb3JpZ10gPSB7XG5cdFx0XHRkZWxlZ2F0ZVR5cGU6IGZpeCxcblx0XHRcdGJpbmRUeXBlOiBmaXgsXG5cblx0XHRcdGhhbmRsZTogZnVuY3Rpb24gaGFuZGxlKGV2ZW50KSB7XG5cdFx0XHRcdHZhciByZXQsXG5cdFx0XHRcdCAgICB0YXJnZXQgPSB0aGlzLFxuXHRcdFx0XHQgICAgcmVsYXRlZCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQsXG5cdFx0XHRcdCAgICBoYW5kbGVPYmogPSBldmVudC5oYW5kbGVPYmo7XG5cblx0XHRcdFx0Ly8gRm9yIG1vdXNlZW50ZXIvbGVhdmUgY2FsbCB0aGUgaGFuZGxlciBpZiByZWxhdGVkIGlzIG91dHNpZGUgdGhlIHRhcmdldC5cblx0XHRcdFx0Ly8gTkI6IE5vIHJlbGF0ZWRUYXJnZXQgaWYgdGhlIG1vdXNlIGxlZnQvZW50ZXJlZCB0aGUgYnJvd3NlciB3aW5kb3dcblx0XHRcdFx0aWYgKCFyZWxhdGVkIHx8IHJlbGF0ZWQgIT09IHRhcmdldCAmJiAhalF1ZXJ5LmNvbnRhaW5zKHRhcmdldCwgcmVsYXRlZCkpIHtcblx0XHRcdFx0XHRldmVudC50eXBlID0gaGFuZGxlT2JqLm9yaWdUeXBlO1xuXHRcdFx0XHRcdHJldCA9IGhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdFx0ZXZlbnQudHlwZSA9IGZpeDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fVxuXHRcdH07XG5cdH0pO1xuXG5cdGpRdWVyeS5mbi5leHRlbmQoe1xuXG5cdFx0b246IGZ1bmN0aW9uIG9uKHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4pIHtcblx0XHRcdHJldHVybiBfb24odGhpcywgdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbik7XG5cdFx0fSxcblx0XHRvbmU6IGZ1bmN0aW9uIG9uZSh0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuKSB7XG5cdFx0XHRyZXR1cm4gX29uKHRoaXMsIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4sIDEpO1xuXHRcdH0sXG5cdFx0b2ZmOiBmdW5jdGlvbiBvZmYodHlwZXMsIHNlbGVjdG9yLCBmbikge1xuXHRcdFx0dmFyIGhhbmRsZU9iaiwgdHlwZTtcblx0XHRcdGlmICh0eXBlcyAmJiB0eXBlcy5wcmV2ZW50RGVmYXVsdCAmJiB0eXBlcy5oYW5kbGVPYmopIHtcblxuXHRcdFx0XHQvLyAoIGV2ZW50ICkgIGRpc3BhdGNoZWQgalF1ZXJ5LkV2ZW50XG5cdFx0XHRcdGhhbmRsZU9iaiA9IHR5cGVzLmhhbmRsZU9iajtcblx0XHRcdFx0alF1ZXJ5KHR5cGVzLmRlbGVnYXRlVGFyZ2V0KS5vZmYoaGFuZGxlT2JqLm5hbWVzcGFjZSA/IGhhbmRsZU9iai5vcmlnVHlwZSArIFwiLlwiICsgaGFuZGxlT2JqLm5hbWVzcGFjZSA6IGhhbmRsZU9iai5vcmlnVHlwZSwgaGFuZGxlT2JqLnNlbGVjdG9yLCBoYW5kbGVPYmouaGFuZGxlcik7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCh0eXBlb2YgdHlwZXMgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih0eXBlcykpID09PSBcIm9iamVjdFwiKSB7XG5cblx0XHRcdFx0Ly8gKCB0eXBlcy1vYmplY3QgWywgc2VsZWN0b3JdIClcblx0XHRcdFx0Zm9yICh0eXBlIGluIHR5cGVzKSB7XG5cdFx0XHRcdFx0dGhpcy5vZmYodHlwZSwgc2VsZWN0b3IsIHR5cGVzW3R5cGVdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdGlmIChzZWxlY3RvciA9PT0gZmFsc2UgfHwgdHlwZW9mIHNlbGVjdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcblxuXHRcdFx0XHQvLyAoIHR5cGVzIFssIGZuXSApXG5cdFx0XHRcdGZuID0gc2VsZWN0b3I7XG5cdFx0XHRcdHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGZuID09PSBmYWxzZSkge1xuXHRcdFx0XHRmbiA9IHJldHVybkZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGpRdWVyeS5ldmVudC5yZW1vdmUodGhpcywgdHlwZXMsIGZuLCBzZWxlY3Rvcik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xuXG5cdHZhclxuXG5cdC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxuXHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzbGludC9lc2xpbnQvaXNzdWVzLzMyMjlcblx0cnhodG1sVGFnID0gLzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0qKVtePl0qKVxcLz4vZ2ksXG5cblxuXHQvKiBlc2xpbnQtZW5hYmxlICovXG5cblx0Ly8gU3VwcG9ydDogSUUgPD0xMCAtIDExLCBFZGdlIDEyIC0gMTMgb25seVxuXHQvLyBJbiBJRS9FZGdlIHVzaW5nIHJlZ2V4IGdyb3VwcyBoZXJlIGNhdXNlcyBzZXZlcmUgc2xvd2Rvd25zLlxuXHQvLyBTZWUgaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy8xNzM2NTEyL1xuXHRybm9Jbm5lcmh0bWwgPSAvPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSxcblxuXG5cdC8vIGNoZWNrZWQ9XCJjaGVja2VkXCIgb3IgY2hlY2tlZFxuXHRyY2hlY2tlZCA9IC9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksXG5cdCAgICByY2xlYW5TY3JpcHQgPSAvXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2c7XG5cblx0Ly8gUHJlZmVyIGEgdGJvZHkgb3ZlciBpdHMgcGFyZW50IHRhYmxlIGZvciBjb250YWluaW5nIG5ldyByb3dzXG5cdGZ1bmN0aW9uIG1hbmlwdWxhdGlvblRhcmdldChlbGVtLCBjb250ZW50KSB7XG5cdFx0aWYgKG5vZGVOYW1lKGVsZW0sIFwidGFibGVcIikgJiYgbm9kZU5hbWUoY29udGVudC5ub2RlVHlwZSAhPT0gMTEgPyBjb250ZW50IDogY29udGVudC5maXJzdENoaWxkLCBcInRyXCIpKSB7XG5cblx0XHRcdHJldHVybiBqUXVlcnkoZWxlbSkuY2hpbGRyZW4oXCJ0Ym9keVwiKVswXSB8fCBlbGVtO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbGVtO1xuXHR9XG5cblx0Ly8gUmVwbGFjZS9yZXN0b3JlIHRoZSB0eXBlIGF0dHJpYnV0ZSBvZiBzY3JpcHQgZWxlbWVudHMgZm9yIHNhZmUgRE9NIG1hbmlwdWxhdGlvblxuXHRmdW5jdGlvbiBkaXNhYmxlU2NyaXB0KGVsZW0pIHtcblx0XHRlbGVtLnR5cGUgPSAoZWxlbS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpICE9PSBudWxsKSArIFwiL1wiICsgZWxlbS50eXBlO1xuXHRcdHJldHVybiBlbGVtO1xuXHR9XG5cdGZ1bmN0aW9uIHJlc3RvcmVTY3JpcHQoZWxlbSkge1xuXHRcdGlmICgoZWxlbS50eXBlIHx8IFwiXCIpLnNsaWNlKDAsIDUpID09PSBcInRydWUvXCIpIHtcblx0XHRcdGVsZW0udHlwZSA9IGVsZW0udHlwZS5zbGljZSg1KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbGVtO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2xvbmVDb3B5RXZlbnQoc3JjLCBkZXN0KSB7XG5cdFx0dmFyIGksIGwsIHR5cGUsIHBkYXRhT2xkLCBwZGF0YUN1ciwgdWRhdGFPbGQsIHVkYXRhQ3VyLCBldmVudHM7XG5cblx0XHRpZiAoZGVzdC5ub2RlVHlwZSAhPT0gMSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIDEuIENvcHkgcHJpdmF0ZSBkYXRhOiBldmVudHMsIGhhbmRsZXJzLCBldGMuXG5cdFx0aWYgKGRhdGFQcml2Lmhhc0RhdGEoc3JjKSkge1xuXHRcdFx0cGRhdGFPbGQgPSBkYXRhUHJpdi5hY2Nlc3Moc3JjKTtcblx0XHRcdHBkYXRhQ3VyID0gZGF0YVByaXYuc2V0KGRlc3QsIHBkYXRhT2xkKTtcblx0XHRcdGV2ZW50cyA9IHBkYXRhT2xkLmV2ZW50cztcblxuXHRcdFx0aWYgKGV2ZW50cykge1xuXHRcdFx0XHRkZWxldGUgcGRhdGFDdXIuaGFuZGxlO1xuXHRcdFx0XHRwZGF0YUN1ci5ldmVudHMgPSB7fTtcblxuXHRcdFx0XHRmb3IgKHR5cGUgaW4gZXZlbnRzKSB7XG5cdFx0XHRcdFx0Zm9yIChpID0gMCwgbCA9IGV2ZW50c1t0eXBlXS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5ldmVudC5hZGQoZGVzdCwgdHlwZSwgZXZlbnRzW3R5cGVdW2ldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyAyLiBDb3B5IHVzZXIgZGF0YVxuXHRcdGlmIChkYXRhVXNlci5oYXNEYXRhKHNyYykpIHtcblx0XHRcdHVkYXRhT2xkID0gZGF0YVVzZXIuYWNjZXNzKHNyYyk7XG5cdFx0XHR1ZGF0YUN1ciA9IGpRdWVyeS5leHRlbmQoe30sIHVkYXRhT2xkKTtcblxuXHRcdFx0ZGF0YVVzZXIuc2V0KGRlc3QsIHVkYXRhQ3VyKTtcblx0XHR9XG5cdH1cblxuXHQvLyBGaXggSUUgYnVncywgc2VlIHN1cHBvcnQgdGVzdHNcblx0ZnVuY3Rpb24gZml4SW5wdXQoc3JjLCBkZXN0KSB7XG5cdFx0dmFyIG5vZGVOYW1lID0gZGVzdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0Ly8gRmFpbHMgdG8gcGVyc2lzdCB0aGUgY2hlY2tlZCBzdGF0ZSBvZiBhIGNsb25lZCBjaGVja2JveCBvciByYWRpbyBidXR0b24uXG5cdFx0aWYgKG5vZGVOYW1lID09PSBcImlucHV0XCIgJiYgcmNoZWNrYWJsZVR5cGUudGVzdChzcmMudHlwZSkpIHtcblx0XHRcdGRlc3QuY2hlY2tlZCA9IHNyYy5jaGVja2VkO1xuXG5cdFx0XHQvLyBGYWlscyB0byByZXR1cm4gdGhlIHNlbGVjdGVkIG9wdGlvbiB0byB0aGUgZGVmYXVsdCBzZWxlY3RlZCBzdGF0ZSB3aGVuIGNsb25pbmcgb3B0aW9uc1xuXHRcdH0gZWxzZSBpZiAobm9kZU5hbWUgPT09IFwiaW5wdXRcIiB8fCBub2RlTmFtZSA9PT0gXCJ0ZXh0YXJlYVwiKSB7XG5cdFx0XHRkZXN0LmRlZmF1bHRWYWx1ZSA9IHNyYy5kZWZhdWx0VmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gZG9tTWFuaXAoY29sbGVjdGlvbiwgYXJncywgY2FsbGJhY2ssIGlnbm9yZWQpIHtcblxuXHRcdC8vIEZsYXR0ZW4gYW55IG5lc3RlZCBhcnJheXNcblx0XHRhcmdzID0gY29uY2F0LmFwcGx5KFtdLCBhcmdzKTtcblxuXHRcdHZhciBmcmFnbWVudCxcblx0XHQgICAgZmlyc3QsXG5cdFx0ICAgIHNjcmlwdHMsXG5cdFx0ICAgIGhhc1NjcmlwdHMsXG5cdFx0ICAgIG5vZGUsXG5cdFx0ICAgIGRvYyxcblx0XHQgICAgaSA9IDAsXG5cdFx0ICAgIGwgPSBjb2xsZWN0aW9uLmxlbmd0aCxcblx0XHQgICAgaU5vQ2xvbmUgPSBsIC0gMSxcblx0XHQgICAgdmFsdWUgPSBhcmdzWzBdLFxuXHRcdCAgICB2YWx1ZUlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uKHZhbHVlKTtcblxuXHRcdC8vIFdlIGNhbid0IGNsb25lTm9kZSBmcmFnbWVudHMgdGhhdCBjb250YWluIGNoZWNrZWQsIGluIFdlYktpdFxuXHRcdGlmICh2YWx1ZUlzRnVuY3Rpb24gfHwgbCA+IDEgJiYgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmICFzdXBwb3J0LmNoZWNrQ2xvbmUgJiYgcmNoZWNrZWQudGVzdCh2YWx1ZSkpIHtcblx0XHRcdHJldHVybiBjb2xsZWN0aW9uLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG5cdFx0XHRcdHZhciBzZWxmID0gY29sbGVjdGlvbi5lcShpbmRleCk7XG5cdFx0XHRcdGlmICh2YWx1ZUlzRnVuY3Rpb24pIHtcblx0XHRcdFx0XHRhcmdzWzBdID0gdmFsdWUuY2FsbCh0aGlzLCBpbmRleCwgc2VsZi5odG1sKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRvbU1hbmlwKHNlbGYsIGFyZ3MsIGNhbGxiYWNrLCBpZ25vcmVkKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmIChsKSB7XG5cdFx0XHRmcmFnbWVudCA9IGJ1aWxkRnJhZ21lbnQoYXJncywgY29sbGVjdGlvblswXS5vd25lckRvY3VtZW50LCBmYWxzZSwgY29sbGVjdGlvbiwgaWdub3JlZCk7XG5cdFx0XHRmaXJzdCA9IGZyYWdtZW50LmZpcnN0Q2hpbGQ7XG5cblx0XHRcdGlmIChmcmFnbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRmcmFnbWVudCA9IGZpcnN0O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZXF1aXJlIGVpdGhlciBuZXcgY29udGVudCBvciBhbiBpbnRlcmVzdCBpbiBpZ25vcmVkIGVsZW1lbnRzIHRvIGludm9rZSB0aGUgY2FsbGJhY2tcblx0XHRcdGlmIChmaXJzdCB8fCBpZ25vcmVkKSB7XG5cdFx0XHRcdHNjcmlwdHMgPSBqUXVlcnkubWFwKGdldEFsbChmcmFnbWVudCwgXCJzY3JpcHRcIiksIGRpc2FibGVTY3JpcHQpO1xuXHRcdFx0XHRoYXNTY3JpcHRzID0gc2NyaXB0cy5sZW5ndGg7XG5cblx0XHRcdFx0Ly8gVXNlIHRoZSBvcmlnaW5hbCBmcmFnbWVudCBmb3IgdGhlIGxhc3QgaXRlbVxuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIHRoZSBmaXJzdCBiZWNhdXNlIGl0IGNhbiBlbmQgdXBcblx0XHRcdFx0Ly8gYmVpbmcgZW1wdGllZCBpbmNvcnJlY3RseSBpbiBjZXJ0YWluIHNpdHVhdGlvbnMgKCM4MDcwKS5cblx0XHRcdFx0Zm9yICg7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0XHRub2RlID0gZnJhZ21lbnQ7XG5cblx0XHRcdFx0XHRpZiAoaSAhPT0gaU5vQ2xvbmUpIHtcblx0XHRcdFx0XHRcdG5vZGUgPSBqUXVlcnkuY2xvbmUobm9kZSwgdHJ1ZSwgdHJ1ZSk7XG5cblx0XHRcdFx0XHRcdC8vIEtlZXAgcmVmZXJlbmNlcyB0byBjbG9uZWQgc2NyaXB0cyBmb3IgbGF0ZXIgcmVzdG9yYXRpb25cblx0XHRcdFx0XHRcdGlmIChoYXNTY3JpcHRzKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG5cdFx0XHRcdFx0XHRcdC8vIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcblx0XHRcdFx0XHRcdFx0alF1ZXJ5Lm1lcmdlKHNjcmlwdHMsIGdldEFsbChub2RlLCBcInNjcmlwdFwiKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y2FsbGJhY2suY2FsbChjb2xsZWN0aW9uW2ldLCBub2RlLCBpKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChoYXNTY3JpcHRzKSB7XG5cdFx0XHRcdFx0ZG9jID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLm93bmVyRG9jdW1lbnQ7XG5cblx0XHRcdFx0XHQvLyBSZWVuYWJsZSBzY3JpcHRzXG5cdFx0XHRcdFx0alF1ZXJ5Lm1hcChzY3JpcHRzLCByZXN0b3JlU2NyaXB0KTtcblxuXHRcdFx0XHRcdC8vIEV2YWx1YXRlIGV4ZWN1dGFibGUgc2NyaXB0cyBvbiBmaXJzdCBkb2N1bWVudCBpbnNlcnRpb25cblx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgaGFzU2NyaXB0czsgaSsrKSB7XG5cdFx0XHRcdFx0XHRub2RlID0gc2NyaXB0c1tpXTtcblx0XHRcdFx0XHRcdGlmIChyc2NyaXB0VHlwZS50ZXN0KG5vZGUudHlwZSB8fCBcIlwiKSAmJiAhZGF0YVByaXYuYWNjZXNzKG5vZGUsIFwiZ2xvYmFsRXZhbFwiKSAmJiBqUXVlcnkuY29udGFpbnMoZG9jLCBub2RlKSkge1xuXG5cdFx0XHRcdFx0XHRcdGlmIChub2RlLnNyYyAmJiAobm9kZS50eXBlIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCkgIT09IFwibW9kdWxlXCIpIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIE9wdGlvbmFsIEFKQVggZGVwZW5kZW5jeSwgYnV0IHdvbid0IHJ1biBzY3JpcHRzIGlmIG5vdCBwcmVzZW50XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGpRdWVyeS5fZXZhbFVybCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0alF1ZXJ5Ll9ldmFsVXJsKG5vZGUuc3JjKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0RE9NRXZhbChub2RlLnRleHRDb250ZW50LnJlcGxhY2UocmNsZWFuU2NyaXB0LCBcIlwiKSwgZG9jLCBub2RlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjb2xsZWN0aW9uO1xuXHR9XG5cblx0ZnVuY3Rpb24gX3JlbW92ZShlbGVtLCBzZWxlY3Rvciwga2VlcERhdGEpIHtcblx0XHR2YXIgbm9kZSxcblx0XHQgICAgbm9kZXMgPSBzZWxlY3RvciA/IGpRdWVyeS5maWx0ZXIoc2VsZWN0b3IsIGVsZW0pIDogZWxlbSxcblx0XHQgICAgaSA9IDA7XG5cblx0XHRmb3IgKDsgKG5vZGUgPSBub2Rlc1tpXSkgIT0gbnVsbDsgaSsrKSB7XG5cdFx0XHRpZiAoIWtlZXBEYXRhICYmIG5vZGUubm9kZVR5cGUgPT09IDEpIHtcblx0XHRcdFx0alF1ZXJ5LmNsZWFuRGF0YShnZXRBbGwobm9kZSkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobm9kZS5wYXJlbnROb2RlKSB7XG5cdFx0XHRcdGlmIChrZWVwRGF0YSAmJiBqUXVlcnkuY29udGFpbnMobm9kZS5vd25lckRvY3VtZW50LCBub2RlKSkge1xuXHRcdFx0XHRcdHNldEdsb2JhbEV2YWwoZ2V0QWxsKG5vZGUsIFwic2NyaXB0XCIpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVsZW07XG5cdH1cblxuXHRqUXVlcnkuZXh0ZW5kKHtcblx0XHRodG1sUHJlZmlsdGVyOiBmdW5jdGlvbiBodG1sUHJlZmlsdGVyKGh0bWwpIHtcblx0XHRcdHJldHVybiBodG1sLnJlcGxhY2UocnhodG1sVGFnLCBcIjwkMT48LyQyPlwiKTtcblx0XHR9LFxuXG5cdFx0Y2xvbmU6IGZ1bmN0aW9uIGNsb25lKGVsZW0sIGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzKSB7XG5cdFx0XHR2YXIgaSxcblx0XHRcdCAgICBsLFxuXHRcdFx0ICAgIHNyY0VsZW1lbnRzLFxuXHRcdFx0ICAgIGRlc3RFbGVtZW50cyxcblx0XHRcdCAgICBjbG9uZSA9IGVsZW0uY2xvbmVOb2RlKHRydWUpLFxuXHRcdFx0ICAgIGluUGFnZSA9IGpRdWVyeS5jb250YWlucyhlbGVtLm93bmVyRG9jdW1lbnQsIGVsZW0pO1xuXG5cdFx0XHQvLyBGaXggSUUgY2xvbmluZyBpc3N1ZXNcblx0XHRcdGlmICghc3VwcG9ydC5ub0Nsb25lQ2hlY2tlZCAmJiAoZWxlbS5ub2RlVHlwZSA9PT0gMSB8fCBlbGVtLm5vZGVUeXBlID09PSAxMSkgJiYgIWpRdWVyeS5pc1hNTERvYyhlbGVtKSkge1xuXG5cdFx0XHRcdC8vIFdlIGVzY2hldyBTaXp6bGUgaGVyZSBmb3IgcGVyZm9ybWFuY2UgcmVhc29uczogaHR0cHM6Ly9qc3BlcmYuY29tL2dldGFsbC12cy1zaXp6bGUvMlxuXHRcdFx0XHRkZXN0RWxlbWVudHMgPSBnZXRBbGwoY2xvbmUpO1xuXHRcdFx0XHRzcmNFbGVtZW50cyA9IGdldEFsbChlbGVtKTtcblxuXHRcdFx0XHRmb3IgKGkgPSAwLCBsID0gc3JjRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHRcdFx0Zml4SW5wdXQoc3JjRWxlbWVudHNbaV0sIGRlc3RFbGVtZW50c1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29weSB0aGUgZXZlbnRzIGZyb20gdGhlIG9yaWdpbmFsIHRvIHRoZSBjbG9uZVxuXHRcdFx0aWYgKGRhdGFBbmRFdmVudHMpIHtcblx0XHRcdFx0aWYgKGRlZXBEYXRhQW5kRXZlbnRzKSB7XG5cdFx0XHRcdFx0c3JjRWxlbWVudHMgPSBzcmNFbGVtZW50cyB8fCBnZXRBbGwoZWxlbSk7XG5cdFx0XHRcdFx0ZGVzdEVsZW1lbnRzID0gZGVzdEVsZW1lbnRzIHx8IGdldEFsbChjbG9uZSk7XG5cblx0XHRcdFx0XHRmb3IgKGkgPSAwLCBsID0gc3JjRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRjbG9uZUNvcHlFdmVudChzcmNFbGVtZW50c1tpXSwgZGVzdEVsZW1lbnRzW2ldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2xvbmVDb3B5RXZlbnQoZWxlbSwgY2xvbmUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFByZXNlcnZlIHNjcmlwdCBldmFsdWF0aW9uIGhpc3Rvcnlcblx0XHRcdGRlc3RFbGVtZW50cyA9IGdldEFsbChjbG9uZSwgXCJzY3JpcHRcIik7XG5cdFx0XHRpZiAoZGVzdEVsZW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0c2V0R2xvYmFsRXZhbChkZXN0RWxlbWVudHMsICFpblBhZ2UgJiYgZ2V0QWxsKGVsZW0sIFwic2NyaXB0XCIpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmV0dXJuIHRoZSBjbG9uZWQgc2V0XG5cdFx0XHRyZXR1cm4gY2xvbmU7XG5cdFx0fSxcblxuXHRcdGNsZWFuRGF0YTogZnVuY3Rpb24gY2xlYW5EYXRhKGVsZW1zKSB7XG5cdFx0XHR2YXIgZGF0YSxcblx0XHRcdCAgICBlbGVtLFxuXHRcdFx0ICAgIHR5cGUsXG5cdFx0XHQgICAgc3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsLFxuXHRcdFx0ICAgIGkgPSAwO1xuXG5cdFx0XHRmb3IgKDsgKGVsZW0gPSBlbGVtc1tpXSkgIT09IHVuZGVmaW5lZDsgaSsrKSB7XG5cdFx0XHRcdGlmIChhY2NlcHREYXRhKGVsZW0pKSB7XG5cdFx0XHRcdFx0aWYgKGRhdGEgPSBlbGVtW2RhdGFQcml2LmV4cGFuZG9dKSB7XG5cdFx0XHRcdFx0XHRpZiAoZGF0YS5ldmVudHMpIHtcblx0XHRcdFx0XHRcdFx0Zm9yICh0eXBlIGluIGRhdGEuZXZlbnRzKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHNwZWNpYWxbdHlwZV0pIHtcblx0XHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5ldmVudC5yZW1vdmUoZWxlbSwgdHlwZSk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFRoaXMgaXMgYSBzaG9ydGN1dCB0byBhdm9pZCBqUXVlcnkuZXZlbnQucmVtb3ZlJ3Mgb3ZlcmhlYWRcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0alF1ZXJ5LnJlbW92ZUV2ZW50KGVsZW0sIHR5cGUsIGRhdGEuaGFuZGxlKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9MzUgLSA0NStcblx0XHRcdFx0XHRcdC8vIEFzc2lnbiB1bmRlZmluZWQgaW5zdGVhZCBvZiB1c2luZyBkZWxldGUsIHNlZSBEYXRhI3JlbW92ZVxuXHRcdFx0XHRcdFx0ZWxlbVtkYXRhUHJpdi5leHBhbmRvXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGVsZW1bZGF0YVVzZXIuZXhwYW5kb10pIHtcblxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9MzUgLSA0NStcblx0XHRcdFx0XHRcdC8vIEFzc2lnbiB1bmRlZmluZWQgaW5zdGVhZCBvZiB1c2luZyBkZWxldGUsIHNlZSBEYXRhI3JlbW92ZVxuXHRcdFx0XHRcdFx0ZWxlbVtkYXRhVXNlci5leHBhbmRvXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdGpRdWVyeS5mbi5leHRlbmQoe1xuXHRcdGRldGFjaDogZnVuY3Rpb24gZGV0YWNoKHNlbGVjdG9yKSB7XG5cdFx0XHRyZXR1cm4gX3JlbW92ZSh0aGlzLCBzZWxlY3RvciwgdHJ1ZSk7XG5cdFx0fSxcblxuXHRcdHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKHNlbGVjdG9yKSB7XG5cdFx0XHRyZXR1cm4gX3JlbW92ZSh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0fSxcblxuXHRcdHRleHQ6IGZ1bmN0aW9uIHRleHQodmFsdWUpIHtcblx0XHRcdHJldHVybiBhY2Nlc3ModGhpcywgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8galF1ZXJ5LnRleHQodGhpcykgOiB0aGlzLmVtcHR5KCkuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMubm9kZVR5cGUgPT09IDEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gMTEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gOSkge1xuXHRcdFx0XHRcdFx0dGhpcy50ZXh0Q29udGVudCA9IHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LCBudWxsLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCk7XG5cdFx0fSxcblxuXHRcdGFwcGVuZDogZnVuY3Rpb24gYXBwZW5kKCkge1xuXHRcdFx0cmV0dXJuIGRvbU1hbmlwKHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRcdFx0aWYgKHRoaXMubm9kZVR5cGUgPT09IDEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gMTEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gOSkge1xuXHRcdFx0XHRcdHZhciB0YXJnZXQgPSBtYW5pcHVsYXRpb25UYXJnZXQodGhpcywgZWxlbSk7XG5cdFx0XHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKGVsZW0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0cHJlcGVuZDogZnVuY3Rpb24gcHJlcGVuZCgpIHtcblx0XHRcdHJldHVybiBkb21NYW5pcCh0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHRcdGlmICh0aGlzLm5vZGVUeXBlID09PSAxIHx8IHRoaXMubm9kZVR5cGUgPT09IDExIHx8IHRoaXMubm9kZVR5cGUgPT09IDkpIHtcblx0XHRcdFx0XHR2YXIgdGFyZ2V0ID0gbWFuaXB1bGF0aW9uVGFyZ2V0KHRoaXMsIGVsZW0pO1xuXHRcdFx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoZWxlbSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0YmVmb3JlOiBmdW5jdGlvbiBiZWZvcmUoKSB7XG5cdFx0XHRyZXR1cm4gZG9tTWFuaXAodGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdFx0XHRpZiAodGhpcy5wYXJlbnROb2RlKSB7XG5cdFx0XHRcdFx0dGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtLCB0aGlzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdGFmdGVyOiBmdW5jdGlvbiBhZnRlcigpIHtcblx0XHRcdHJldHVybiBkb21NYW5pcCh0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHRcdGlmICh0aGlzLnBhcmVudE5vZGUpIHtcblx0XHRcdFx0XHR0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW0sIHRoaXMubmV4dFNpYmxpbmcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0ZW1wdHk6IGZ1bmN0aW9uIGVtcHR5KCkge1xuXHRcdFx0dmFyIGVsZW0sXG5cdFx0XHQgICAgaSA9IDA7XG5cblx0XHRcdGZvciAoOyAoZWxlbSA9IHRoaXNbaV0pICE9IG51bGw7IGkrKykge1xuXHRcdFx0XHRpZiAoZWxlbS5ub2RlVHlwZSA9PT0gMSkge1xuXG5cdFx0XHRcdFx0Ly8gUHJldmVudCBtZW1vcnkgbGVha3Ncblx0XHRcdFx0XHRqUXVlcnkuY2xlYW5EYXRhKGdldEFsbChlbGVtLCBmYWxzZSkpO1xuXG5cdFx0XHRcdFx0Ly8gUmVtb3ZlIGFueSByZW1haW5pbmcgbm9kZXNcblx0XHRcdFx0XHRlbGVtLnRleHRDb250ZW50ID0gXCJcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXG5cdFx0Y2xvbmU6IGZ1bmN0aW9uIGNsb25lKGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzKSB7XG5cdFx0XHRkYXRhQW5kRXZlbnRzID0gZGF0YUFuZEV2ZW50cyA9PSBudWxsID8gZmFsc2UgOiBkYXRhQW5kRXZlbnRzO1xuXHRcdFx0ZGVlcERhdGFBbmRFdmVudHMgPSBkZWVwRGF0YUFuZEV2ZW50cyA9PSBudWxsID8gZGF0YUFuZEV2ZW50cyA6IGRlZXBEYXRhQW5kRXZlbnRzO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4galF1ZXJ5LmNsb25lKHRoaXMsIGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRodG1sOiBmdW5jdGlvbiBodG1sKHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gYWNjZXNzKHRoaXMsIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHR2YXIgZWxlbSA9IHRoaXNbMF0gfHwge30sXG5cdFx0XHRcdCAgICBpID0gMCxcblx0XHRcdFx0ICAgIGwgPSB0aGlzLmxlbmd0aDtcblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiBlbGVtLm5vZGVUeXBlID09PSAxKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsZW0uaW5uZXJIVE1MO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU2VlIGlmIHdlIGNhbiB0YWtlIGEgc2hvcnRjdXQgYW5kIGp1c3QgdXNlIGlubmVySFRNTFxuXHRcdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmICFybm9Jbm5lcmh0bWwudGVzdCh2YWx1ZSkgJiYgIXdyYXBNYXBbKHJ0YWdOYW1lLmV4ZWModmFsdWUpIHx8IFtcIlwiLCBcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pIHtcblxuXHRcdFx0XHRcdHZhbHVlID0galF1ZXJ5Lmh0bWxQcmVmaWx0ZXIodmFsdWUpO1xuXG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGZvciAoOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdGVsZW0gPSB0aGlzW2ldIHx8IHt9O1xuXG5cdFx0XHRcdFx0XHRcdC8vIFJlbW92ZSBlbGVtZW50IG5vZGVzIGFuZCBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuXHRcdFx0XHRcdFx0XHRpZiAoZWxlbS5ub2RlVHlwZSA9PT0gMSkge1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5jbGVhbkRhdGEoZ2V0QWxsKGVsZW0sIGZhbHNlKSk7XG5cdFx0XHRcdFx0XHRcdFx0ZWxlbS5pbm5lckhUTUwgPSB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRlbGVtID0gMDtcblxuXHRcdFx0XHRcdFx0Ly8gSWYgdXNpbmcgaW5uZXJIVE1MIHRocm93cyBhbiBleGNlcHRpb24sIHVzZSB0aGUgZmFsbGJhY2sgbWV0aG9kXG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChlbGVtKSB7XG5cdFx0XHRcdFx0dGhpcy5lbXB0eSgpLmFwcGVuZCh2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIG51bGwsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoKTtcblx0XHR9LFxuXG5cdFx0cmVwbGFjZVdpdGg6IGZ1bmN0aW9uIHJlcGxhY2VXaXRoKCkge1xuXHRcdFx0dmFyIGlnbm9yZWQgPSBbXTtcblxuXHRcdFx0Ly8gTWFrZSB0aGUgY2hhbmdlcywgcmVwbGFjaW5nIGVhY2ggbm9uLWlnbm9yZWQgY29udGV4dCBlbGVtZW50IHdpdGggdGhlIG5ldyBjb250ZW50XG5cdFx0XHRyZXR1cm4gZG9tTWFuaXAodGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdFx0XHR2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuXG5cdFx0XHRcdGlmIChqUXVlcnkuaW5BcnJheSh0aGlzLCBpZ25vcmVkKSA8IDApIHtcblx0XHRcdFx0XHRqUXVlcnkuY2xlYW5EYXRhKGdldEFsbCh0aGlzKSk7XG5cdFx0XHRcdFx0aWYgKHBhcmVudCkge1xuXHRcdFx0XHRcdFx0cGFyZW50LnJlcGxhY2VDaGlsZChlbGVtLCB0aGlzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBGb3JjZSBjYWxsYmFjayBpbnZvY2F0aW9uXG5cdFx0XHR9LCBpZ25vcmVkKTtcblx0XHR9XG5cdH0pO1xuXG5cdGpRdWVyeS5lYWNoKHtcblx0XHRhcHBlbmRUbzogXCJhcHBlbmRcIixcblx0XHRwcmVwZW5kVG86IFwicHJlcGVuZFwiLFxuXHRcdGluc2VydEJlZm9yZTogXCJiZWZvcmVcIixcblx0XHRpbnNlcnRBZnRlcjogXCJhZnRlclwiLFxuXHRcdHJlcGxhY2VBbGw6IFwicmVwbGFjZVdpdGhcIlxuXHR9LCBmdW5jdGlvbiAobmFtZSwgb3JpZ2luYWwpIHtcblx0XHRqUXVlcnkuZm5bbmFtZV0gPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcblx0XHRcdHZhciBlbGVtcyxcblx0XHRcdCAgICByZXQgPSBbXSxcblx0XHRcdCAgICBpbnNlcnQgPSBqUXVlcnkoc2VsZWN0b3IpLFxuXHRcdFx0ICAgIGxhc3QgPSBpbnNlcnQubGVuZ3RoIC0gMSxcblx0XHRcdCAgICBpID0gMDtcblxuXHRcdFx0Zm9yICg7IGkgPD0gbGFzdDsgaSsrKSB7XG5cdFx0XHRcdGVsZW1zID0gaSA9PT0gbGFzdCA/IHRoaXMgOiB0aGlzLmNsb25lKHRydWUpO1xuXHRcdFx0XHRqUXVlcnkoaW5zZXJ0W2ldKVtvcmlnaW5hbF0oZWxlbXMpO1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuXHRcdFx0XHQvLyAuZ2V0KCkgYmVjYXVzZSBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cdFx0XHRcdHB1c2guYXBwbHkocmV0LCBlbGVtcy5nZXQoKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayhyZXQpO1xuXHRcdH07XG5cdH0pO1xuXHR2YXIgcm51bW5vbnB4ID0gbmV3IFJlZ0V4cChcIl4oXCIgKyBwbnVtICsgXCIpKD8hcHgpW2EteiVdKyRcIiwgXCJpXCIpO1xuXG5cdHZhciBnZXRTdHlsZXMgPSBmdW5jdGlvbiBnZXRTdHlsZXMoZWxlbSkge1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5LCBGaXJlZm94IDw9MzAgKCMxNTA5OCwgIzE0MTUwKVxuXHRcdC8vIElFIHRocm93cyBvbiBlbGVtZW50cyBjcmVhdGVkIGluIHBvcHVwc1xuXHRcdC8vIEZGIG1lYW53aGlsZSB0aHJvd3Mgb24gZnJhbWUgZWxlbWVudHMgdGhyb3VnaCBcImRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGVcIlxuXHRcdHZhciB2aWV3ID0gZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuXG5cdFx0aWYgKCF2aWV3IHx8ICF2aWV3Lm9wZW5lcikge1xuXHRcdFx0dmlldyA9IHdpbmRvdztcblx0XHR9XG5cblx0XHRyZXR1cm4gdmlldy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuXHR9O1xuXG5cdHZhciByYm94U3R5bGUgPSBuZXcgUmVnRXhwKGNzc0V4cGFuZC5qb2luKFwifFwiKSwgXCJpXCIpO1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cblx0XHQvLyBFeGVjdXRpbmcgYm90aCBwaXhlbFBvc2l0aW9uICYgYm94U2l6aW5nUmVsaWFibGUgdGVzdHMgcmVxdWlyZSBvbmx5IG9uZSBsYXlvdXRcblx0XHQvLyBzbyB0aGV5J3JlIGV4ZWN1dGVkIGF0IHRoZSBzYW1lIHRpbWUgdG8gc2F2ZSB0aGUgc2Vjb25kIGNvbXB1dGF0aW9uLlxuXHRcdGZ1bmN0aW9uIGNvbXB1dGVTdHlsZVRlc3RzKCkge1xuXG5cdFx0XHQvLyBUaGlzIGlzIGEgc2luZ2xldG9uLCB3ZSBuZWVkIHRvIGV4ZWN1dGUgaXQgb25seSBvbmNlXG5cdFx0XHRpZiAoIWRpdikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMTExMXB4O3dpZHRoOjYwcHg7XCIgKyBcIm1hcmdpbi10b3A6MXB4O3BhZGRpbmc6MDtib3JkZXI6MFwiO1xuXHRcdFx0ZGl2LnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O292ZXJmbG93OnNjcm9sbDtcIiArIFwibWFyZ2luOmF1dG87Ym9yZGVyOjFweDtwYWRkaW5nOjFweDtcIiArIFwid2lkdGg6NjAlO3RvcDoxJVwiO1xuXHRcdFx0ZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcikuYXBwZW5kQ2hpbGQoZGl2KTtcblxuXHRcdFx0dmFyIGRpdlN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZGl2KTtcblx0XHRcdHBpeGVsUG9zaXRpb25WYWwgPSBkaXZTdHlsZS50b3AgIT09IFwiMSVcIjtcblxuXHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA0LjAgLSA0LjMgb25seSwgRmlyZWZveCA8PTMgLSA0NFxuXHRcdFx0cmVsaWFibGVNYXJnaW5MZWZ0VmFsID0gcm91bmRQaXhlbE1lYXN1cmVzKGRpdlN0eWxlLm1hcmdpbkxlZnQpID09PSAxMjtcblxuXHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA0LjAgLSA0LjMgb25seSwgU2FmYXJpIDw9OS4xIC0gMTAuMSwgaU9TIDw9Ny4wIC0gOS4zXG5cdFx0XHQvLyBTb21lIHN0eWxlcyBjb21lIGJhY2sgd2l0aCBwZXJjZW50YWdlIHZhbHVlcywgZXZlbiB0aG91Z2ggdGhleSBzaG91bGRuJ3Rcblx0XHRcdGRpdi5zdHlsZS5yaWdodCA9IFwiNjAlXCI7XG5cdFx0XHRwaXhlbEJveFN0eWxlc1ZhbCA9IHJvdW5kUGl4ZWxNZWFzdXJlcyhkaXZTdHlsZS5yaWdodCkgPT09IDM2O1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSA5IC0gMTEgb25seVxuXHRcdFx0Ly8gRGV0ZWN0IG1pc3JlcG9ydGluZyBvZiBjb250ZW50IGRpbWVuc2lvbnMgZm9yIGJveC1zaXppbmc6Ym9yZGVyLWJveCBlbGVtZW50c1xuXHRcdFx0Ym94U2l6aW5nUmVsaWFibGVWYWwgPSByb3VuZFBpeGVsTWVhc3VyZXMoZGl2U3R5bGUud2lkdGgpID09PSAzNjtcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgOSBvbmx5XG5cdFx0XHQvLyBEZXRlY3Qgb3ZlcmZsb3c6c2Nyb2xsIHNjcmV3aW5lc3MgKGdoLTM2OTkpXG5cdFx0XHRkaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cdFx0XHRzY3JvbGxib3hTaXplVmFsID0gZGl2Lm9mZnNldFdpZHRoID09PSAzNiB8fCBcImFic29sdXRlXCI7XG5cblx0XHRcdGRvY3VtZW50RWxlbWVudC5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuXG5cdFx0XHQvLyBOdWxsaWZ5IHRoZSBkaXYgc28gaXQgd291bGRuJ3QgYmUgc3RvcmVkIGluIHRoZSBtZW1vcnkgYW5kXG5cdFx0XHQvLyBpdCB3aWxsIGFsc28gYmUgYSBzaWduIHRoYXQgY2hlY2tzIGFscmVhZHkgcGVyZm9ybWVkXG5cdFx0XHRkaXYgPSBudWxsO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHJvdW5kUGl4ZWxNZWFzdXJlcyhtZWFzdXJlKSB7XG5cdFx0XHRyZXR1cm4gTWF0aC5yb3VuZChwYXJzZUZsb2F0KG1lYXN1cmUpKTtcblx0XHR9XG5cblx0XHR2YXIgcGl4ZWxQb3NpdGlvblZhbCxcblx0XHQgICAgYm94U2l6aW5nUmVsaWFibGVWYWwsXG5cdFx0ICAgIHNjcm9sbGJveFNpemVWYWwsXG5cdFx0ICAgIHBpeGVsQm94U3R5bGVzVmFsLFxuXHRcdCAgICByZWxpYWJsZU1hcmdpbkxlZnRWYWwsXG5cdFx0ICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0ICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblx0XHQvLyBGaW5pc2ggZWFybHkgaW4gbGltaXRlZCAobm9uLWJyb3dzZXIpIGVudmlyb25tZW50c1xuXHRcdGlmICghZGl2LnN0eWxlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTEgb25seVxuXHRcdC8vIFN0eWxlIG9mIGNsb25lZCBlbGVtZW50IGFmZmVjdHMgc291cmNlIGVsZW1lbnQgY2xvbmVkICgjODkwOClcblx0XHRkaXYuc3R5bGUuYmFja2dyb3VuZENsaXAgPSBcImNvbnRlbnQtYm94XCI7XG5cdFx0ZGl2LmNsb25lTm9kZSh0cnVlKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCA9IFwiXCI7XG5cdFx0c3VwcG9ydC5jbGVhckNsb25lU3R5bGUgPSBkaXYuc3R5bGUuYmFja2dyb3VuZENsaXAgPT09IFwiY29udGVudC1ib3hcIjtcblxuXHRcdGpRdWVyeS5leHRlbmQoc3VwcG9ydCwge1xuXHRcdFx0Ym94U2l6aW5nUmVsaWFibGU6IGZ1bmN0aW9uIGJveFNpemluZ1JlbGlhYmxlKCkge1xuXHRcdFx0XHRjb21wdXRlU3R5bGVUZXN0cygpO1xuXHRcdFx0XHRyZXR1cm4gYm94U2l6aW5nUmVsaWFibGVWYWw7XG5cdFx0XHR9LFxuXHRcdFx0cGl4ZWxCb3hTdHlsZXM6IGZ1bmN0aW9uIHBpeGVsQm94U3R5bGVzKCkge1xuXHRcdFx0XHRjb21wdXRlU3R5bGVUZXN0cygpO1xuXHRcdFx0XHRyZXR1cm4gcGl4ZWxCb3hTdHlsZXNWYWw7XG5cdFx0XHR9LFxuXHRcdFx0cGl4ZWxQb3NpdGlvbjogZnVuY3Rpb24gcGl4ZWxQb3NpdGlvbigpIHtcblx0XHRcdFx0Y29tcHV0ZVN0eWxlVGVzdHMoKTtcblx0XHRcdFx0cmV0dXJuIHBpeGVsUG9zaXRpb25WYWw7XG5cdFx0XHR9LFxuXHRcdFx0cmVsaWFibGVNYXJnaW5MZWZ0OiBmdW5jdGlvbiByZWxpYWJsZU1hcmdpbkxlZnQoKSB7XG5cdFx0XHRcdGNvbXB1dGVTdHlsZVRlc3RzKCk7XG5cdFx0XHRcdHJldHVybiByZWxpYWJsZU1hcmdpbkxlZnRWYWw7XG5cdFx0XHR9LFxuXHRcdFx0c2Nyb2xsYm94U2l6ZTogZnVuY3Rpb24gc2Nyb2xsYm94U2l6ZSgpIHtcblx0XHRcdFx0Y29tcHV0ZVN0eWxlVGVzdHMoKTtcblx0XHRcdFx0cmV0dXJuIHNjcm9sbGJveFNpemVWYWw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pKCk7XG5cblx0ZnVuY3Rpb24gY3VyQ1NTKGVsZW0sIG5hbWUsIGNvbXB1dGVkKSB7XG5cdFx0dmFyIHdpZHRoLFxuXHRcdCAgICBtaW5XaWR0aCxcblx0XHQgICAgbWF4V2lkdGgsXG5cdFx0ICAgIHJldCxcblxuXG5cdFx0Ly8gU3VwcG9ydDogRmlyZWZveCA1MStcblx0XHQvLyBSZXRyaWV2aW5nIHN0eWxlIGJlZm9yZSBjb21wdXRlZCBzb21laG93XG5cdFx0Ly8gZml4ZXMgYW4gaXNzdWUgd2l0aCBnZXR0aW5nIHdyb25nIHZhbHVlc1xuXHRcdC8vIG9uIGRldGFjaGVkIGVsZW1lbnRzXG5cdFx0c3R5bGUgPSBlbGVtLnN0eWxlO1xuXG5cdFx0Y29tcHV0ZWQgPSBjb21wdXRlZCB8fCBnZXRTdHlsZXMoZWxlbSk7XG5cblx0XHQvLyBnZXRQcm9wZXJ0eVZhbHVlIGlzIG5lZWRlZCBmb3I6XG5cdFx0Ly8gICAuY3NzKCdmaWx0ZXInKSAoSUUgOSBvbmx5LCAjMTI1MzcpXG5cdFx0Ly8gICAuY3NzKCctLWN1c3RvbVByb3BlcnR5KSAoIzMxNDQpXG5cdFx0aWYgKGNvbXB1dGVkKSB7XG5cdFx0XHRyZXQgPSBjb21wdXRlZC5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpIHx8IGNvbXB1dGVkW25hbWVdO1xuXG5cdFx0XHRpZiAocmV0ID09PSBcIlwiICYmICFqUXVlcnkuY29udGFpbnMoZWxlbS5vd25lckRvY3VtZW50LCBlbGVtKSkge1xuXHRcdFx0XHRyZXQgPSBqUXVlcnkuc3R5bGUoZWxlbSwgbmFtZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEEgdHJpYnV0ZSB0byB0aGUgXCJhd2Vzb21lIGhhY2sgYnkgRGVhbiBFZHdhcmRzXCJcblx0XHRcdC8vIEFuZHJvaWQgQnJvd3NlciByZXR1cm5zIHBlcmNlbnRhZ2UgZm9yIHNvbWUgdmFsdWVzLFxuXHRcdFx0Ly8gYnV0IHdpZHRoIHNlZW1zIHRvIGJlIHJlbGlhYmx5IHBpeGVscy5cblx0XHRcdC8vIFRoaXMgaXMgYWdhaW5zdCB0aGUgQ1NTT00gZHJhZnQgc3BlYzpcblx0XHRcdC8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3NvbS8jcmVzb2x2ZWQtdmFsdWVzXG5cdFx0XHRpZiAoIXN1cHBvcnQucGl4ZWxCb3hTdHlsZXMoKSAmJiBybnVtbm9ucHgudGVzdChyZXQpICYmIHJib3hTdHlsZS50ZXN0KG5hbWUpKSB7XG5cblx0XHRcdFx0Ly8gUmVtZW1iZXIgdGhlIG9yaWdpbmFsIHZhbHVlc1xuXHRcdFx0XHR3aWR0aCA9IHN0eWxlLndpZHRoO1xuXHRcdFx0XHRtaW5XaWR0aCA9IHN0eWxlLm1pbldpZHRoO1xuXHRcdFx0XHRtYXhXaWR0aCA9IHN0eWxlLm1heFdpZHRoO1xuXG5cdFx0XHRcdC8vIFB1dCBpbiB0aGUgbmV3IHZhbHVlcyB0byBnZXQgYSBjb21wdXRlZCB2YWx1ZSBvdXRcblx0XHRcdFx0c3R5bGUubWluV2lkdGggPSBzdHlsZS5tYXhXaWR0aCA9IHN0eWxlLndpZHRoID0gcmV0O1xuXHRcdFx0XHRyZXQgPSBjb21wdXRlZC53aWR0aDtcblxuXHRcdFx0XHQvLyBSZXZlcnQgdGhlIGNoYW5nZWQgdmFsdWVzXG5cdFx0XHRcdHN0eWxlLndpZHRoID0gd2lkdGg7XG5cdFx0XHRcdHN0eWxlLm1pbldpZHRoID0gbWluV2lkdGg7XG5cdFx0XHRcdHN0eWxlLm1heFdpZHRoID0gbWF4V2lkdGg7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJldCAhPT0gdW5kZWZpbmVkID9cblxuXHRcdC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExIG9ubHlcblx0XHQvLyBJRSByZXR1cm5zIHpJbmRleCB2YWx1ZSBhcyBhbiBpbnRlZ2VyLlxuXHRcdHJldCArIFwiXCIgOiByZXQ7XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRHZXRIb29rSWYoY29uZGl0aW9uRm4sIGhvb2tGbikge1xuXG5cdFx0Ly8gRGVmaW5lIHRoZSBob29rLCB3ZSdsbCBjaGVjayBvbiB0aGUgZmlyc3QgcnVuIGlmIGl0J3MgcmVhbGx5IG5lZWRlZC5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdFx0XHRcdGlmIChjb25kaXRpb25GbigpKSB7XG5cblx0XHRcdFx0XHQvLyBIb29rIG5vdCBuZWVkZWQgKG9yIGl0J3Mgbm90IHBvc3NpYmxlIHRvIHVzZSBpdCBkdWVcblx0XHRcdFx0XHQvLyB0byBtaXNzaW5nIGRlcGVuZGVuY3kpLCByZW1vdmUgaXQuXG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMuZ2V0O1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEhvb2sgbmVlZGVkOyByZWRlZmluZSBpdCBzbyB0aGF0IHRoZSBzdXBwb3J0IHRlc3QgaXMgbm90IGV4ZWN1dGVkIGFnYWluLlxuXHRcdFx0XHRyZXR1cm4gKHRoaXMuZ2V0ID0gaG9va0ZuKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHR2YXJcblxuXHQvLyBTd2FwcGFibGUgaWYgZGlzcGxheSBpcyBub25lIG9yIHN0YXJ0cyB3aXRoIHRhYmxlXG5cdC8vIGV4Y2VwdCBcInRhYmxlXCIsIFwidGFibGUtY2VsbFwiLCBvciBcInRhYmxlLWNhcHRpb25cIlxuXHQvLyBTZWUgaGVyZSBmb3IgZGlzcGxheSB2YWx1ZXM6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvQ1NTL2Rpc3BsYXlcblx0cmRpc3BsYXlzd2FwID0gL14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLFxuXHQgICAgcmN1c3RvbVByb3AgPSAvXi0tLyxcblx0ICAgIGNzc1Nob3cgPSB7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsIGRpc3BsYXk6IFwiYmxvY2tcIiB9LFxuXHQgICAgY3NzTm9ybWFsVHJhbnNmb3JtID0ge1xuXHRcdGxldHRlclNwYWNpbmc6IFwiMFwiLFxuXHRcdGZvbnRXZWlnaHQ6IFwiNDAwXCJcblx0fSxcblx0ICAgIGNzc1ByZWZpeGVzID0gW1wiV2Via2l0XCIsIFwiTW96XCIsIFwibXNcIl0sXG5cdCAgICBlbXB0eVN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZTtcblxuXHQvLyBSZXR1cm4gYSBjc3MgcHJvcGVydHkgbWFwcGVkIHRvIGEgcG90ZW50aWFsbHkgdmVuZG9yIHByZWZpeGVkIHByb3BlcnR5XG5cdGZ1bmN0aW9uIHZlbmRvclByb3BOYW1lKG5hbWUpIHtcblxuXHRcdC8vIFNob3J0Y3V0IGZvciBuYW1lcyB0aGF0IGFyZSBub3QgdmVuZG9yIHByZWZpeGVkXG5cdFx0aWYgKG5hbWUgaW4gZW1wdHlTdHlsZSkge1xuXHRcdFx0cmV0dXJuIG5hbWU7XG5cdFx0fVxuXG5cdFx0Ly8gQ2hlY2sgZm9yIHZlbmRvciBwcmVmaXhlZCBuYW1lc1xuXHRcdHZhciBjYXBOYW1lID0gbmFtZVswXS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKSxcblx0XHQgICAgaSA9IGNzc1ByZWZpeGVzLmxlbmd0aDtcblxuXHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdG5hbWUgPSBjc3NQcmVmaXhlc1tpXSArIGNhcE5hbWU7XG5cdFx0XHRpZiAobmFtZSBpbiBlbXB0eVN0eWxlKSB7XG5cdFx0XHRcdHJldHVybiBuYW1lO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJldHVybiBhIHByb3BlcnR5IG1hcHBlZCBhbG9uZyB3aGF0IGpRdWVyeS5jc3NQcm9wcyBzdWdnZXN0cyBvciB0b1xuXHQvLyBhIHZlbmRvciBwcmVmaXhlZCBwcm9wZXJ0eS5cblx0ZnVuY3Rpb24gZmluYWxQcm9wTmFtZShuYW1lKSB7XG5cdFx0dmFyIHJldCA9IGpRdWVyeS5jc3NQcm9wc1tuYW1lXTtcblx0XHRpZiAoIXJldCkge1xuXHRcdFx0cmV0ID0galF1ZXJ5LmNzc1Byb3BzW25hbWVdID0gdmVuZG9yUHJvcE5hbWUobmFtZSkgfHwgbmFtZTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdGZ1bmN0aW9uIHNldFBvc2l0aXZlTnVtYmVyKGVsZW0sIHZhbHVlLCBzdWJ0cmFjdCkge1xuXG5cdFx0Ly8gQW55IHJlbGF0aXZlICgrLy0pIHZhbHVlcyBoYXZlIGFscmVhZHkgYmVlblxuXHRcdC8vIG5vcm1hbGl6ZWQgYXQgdGhpcyBwb2ludFxuXHRcdHZhciBtYXRjaGVzID0gcmNzc051bS5leGVjKHZhbHVlKTtcblx0XHRyZXR1cm4gbWF0Y2hlcyA/XG5cblx0XHQvLyBHdWFyZCBhZ2FpbnN0IHVuZGVmaW5lZCBcInN1YnRyYWN0XCIsIGUuZy4sIHdoZW4gdXNlZCBhcyBpbiBjc3NIb29rc1xuXHRcdE1hdGgubWF4KDAsIG1hdGNoZXNbMl0gLSAoc3VidHJhY3QgfHwgMCkpICsgKG1hdGNoZXNbM10gfHwgXCJweFwiKSA6IHZhbHVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gYm94TW9kZWxBZGp1c3RtZW50KGVsZW0sIGRpbWVuc2lvbiwgYm94LCBpc0JvcmRlckJveCwgc3R5bGVzLCBjb21wdXRlZFZhbCkge1xuXHRcdHZhciBpID0gZGltZW5zaW9uID09PSBcIndpZHRoXCIgPyAxIDogMCxcblx0XHQgICAgZXh0cmEgPSAwLFxuXHRcdCAgICBkZWx0YSA9IDA7XG5cblx0XHQvLyBBZGp1c3RtZW50IG1heSBub3QgYmUgbmVjZXNzYXJ5XG5cdFx0aWYgKGJveCA9PT0gKGlzQm9yZGVyQm94ID8gXCJib3JkZXJcIiA6IFwiY29udGVudFwiKSkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0Zm9yICg7IGkgPCA0OyBpICs9IDIpIHtcblxuXHRcdFx0Ly8gQm90aCBib3ggbW9kZWxzIGV4Y2x1ZGUgbWFyZ2luXG5cdFx0XHRpZiAoYm94ID09PSBcIm1hcmdpblwiKSB7XG5cdFx0XHRcdGRlbHRhICs9IGpRdWVyeS5jc3MoZWxlbSwgYm94ICsgY3NzRXhwYW5kW2ldLCB0cnVlLCBzdHlsZXMpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB3ZSBnZXQgaGVyZSB3aXRoIGEgY29udGVudC1ib3gsIHdlJ3JlIHNlZWtpbmcgXCJwYWRkaW5nXCIgb3IgXCJib3JkZXJcIiBvciBcIm1hcmdpblwiXG5cdFx0XHRpZiAoIWlzQm9yZGVyQm94KSB7XG5cblx0XHRcdFx0Ly8gQWRkIHBhZGRpbmdcblx0XHRcdFx0ZGVsdGEgKz0galF1ZXJ5LmNzcyhlbGVtLCBcInBhZGRpbmdcIiArIGNzc0V4cGFuZFtpXSwgdHJ1ZSwgc3R5bGVzKTtcblxuXHRcdFx0XHQvLyBGb3IgXCJib3JkZXJcIiBvciBcIm1hcmdpblwiLCBhZGQgYm9yZGVyXG5cdFx0XHRcdGlmIChib3ggIT09IFwicGFkZGluZ1wiKSB7XG5cdFx0XHRcdFx0ZGVsdGEgKz0galF1ZXJ5LmNzcyhlbGVtLCBcImJvcmRlclwiICsgY3NzRXhwYW5kW2ldICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMpO1xuXG5cdFx0XHRcdFx0Ly8gQnV0IHN0aWxsIGtlZXAgdHJhY2sgb2YgaXQgb3RoZXJ3aXNlXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZXh0cmEgKz0galF1ZXJ5LmNzcyhlbGVtLCBcImJvcmRlclwiICsgY3NzRXhwYW5kW2ldICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgd2UgZ2V0IGhlcmUgd2l0aCBhIGJvcmRlci1ib3ggKGNvbnRlbnQgKyBwYWRkaW5nICsgYm9yZGVyKSwgd2UncmUgc2Vla2luZyBcImNvbnRlbnRcIiBvclxuXHRcdFx0XHQvLyBcInBhZGRpbmdcIiBvciBcIm1hcmdpblwiXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIEZvciBcImNvbnRlbnRcIiwgc3VidHJhY3QgcGFkZGluZ1xuXHRcdFx0XHRpZiAoYm94ID09PSBcImNvbnRlbnRcIikge1xuXHRcdFx0XHRcdGRlbHRhIC09IGpRdWVyeS5jc3MoZWxlbSwgXCJwYWRkaW5nXCIgKyBjc3NFeHBhbmRbaV0sIHRydWUsIHN0eWxlcyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBGb3IgXCJjb250ZW50XCIgb3IgXCJwYWRkaW5nXCIsIHN1YnRyYWN0IGJvcmRlclxuXHRcdFx0XHRpZiAoYm94ICE9PSBcIm1hcmdpblwiKSB7XG5cdFx0XHRcdFx0ZGVsdGEgLT0galF1ZXJ5LmNzcyhlbGVtLCBcImJvcmRlclwiICsgY3NzRXhwYW5kW2ldICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQWNjb3VudCBmb3IgcG9zaXRpdmUgY29udGVudC1ib3ggc2Nyb2xsIGd1dHRlciB3aGVuIHJlcXVlc3RlZCBieSBwcm92aWRpbmcgY29tcHV0ZWRWYWxcblx0XHRpZiAoIWlzQm9yZGVyQm94ICYmIGNvbXB1dGVkVmFsID49IDApIHtcblxuXHRcdFx0Ly8gb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IGlzIGEgcm91bmRlZCBzdW0gb2YgY29udGVudCwgcGFkZGluZywgc2Nyb2xsIGd1dHRlciwgYW5kIGJvcmRlclxuXHRcdFx0Ly8gQXNzdW1pbmcgaW50ZWdlciBzY3JvbGwgZ3V0dGVyLCBzdWJ0cmFjdCB0aGUgcmVzdCBhbmQgcm91bmQgZG93blxuXHRcdFx0ZGVsdGEgKz0gTWF0aC5tYXgoMCwgTWF0aC5jZWlsKGVsZW1bXCJvZmZzZXRcIiArIGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXSAtIGNvbXB1dGVkVmFsIC0gZGVsdGEgLSBleHRyYSAtIDAuNSkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBkZWx0YTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFdpZHRoT3JIZWlnaHQoZWxlbSwgZGltZW5zaW9uLCBleHRyYSkge1xuXG5cdFx0Ly8gU3RhcnQgd2l0aCBjb21wdXRlZCBzdHlsZVxuXHRcdHZhciBzdHlsZXMgPSBnZXRTdHlsZXMoZWxlbSksXG5cdFx0ICAgIHZhbCA9IGN1ckNTUyhlbGVtLCBkaW1lbnNpb24sIHN0eWxlcyksXG5cdFx0ICAgIGlzQm9yZGVyQm94ID0galF1ZXJ5LmNzcyhlbGVtLCBcImJveFNpemluZ1wiLCBmYWxzZSwgc3R5bGVzKSA9PT0gXCJib3JkZXItYm94XCIsXG5cdFx0ICAgIHZhbHVlSXNCb3JkZXJCb3ggPSBpc0JvcmRlckJveDtcblxuXHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggPD01NFxuXHRcdC8vIFJldHVybiBhIGNvbmZvdW5kaW5nIG5vbi1waXhlbCB2YWx1ZSBvciBmZWlnbiBpZ25vcmFuY2UsIGFzIGFwcHJvcHJpYXRlLlxuXHRcdGlmIChybnVtbm9ucHgudGVzdCh2YWwpKSB7XG5cdFx0XHRpZiAoIWV4dHJhKSB7XG5cdFx0XHRcdHJldHVybiB2YWw7XG5cdFx0XHR9XG5cdFx0XHR2YWwgPSBcImF1dG9cIjtcblx0XHR9XG5cblx0XHQvLyBDaGVjayBmb3Igc3R5bGUgaW4gY2FzZSBhIGJyb3dzZXIgd2hpY2ggcmV0dXJucyB1bnJlbGlhYmxlIHZhbHVlc1xuXHRcdC8vIGZvciBnZXRDb21wdXRlZFN0eWxlIHNpbGVudGx5IGZhbGxzIGJhY2sgdG8gdGhlIHJlbGlhYmxlIGVsZW0uc3R5bGVcblx0XHR2YWx1ZUlzQm9yZGVyQm94ID0gdmFsdWVJc0JvcmRlckJveCAmJiAoc3VwcG9ydC5ib3hTaXppbmdSZWxpYWJsZSgpIHx8IHZhbCA9PT0gZWxlbS5zdHlsZVtkaW1lbnNpb25dKTtcblxuXHRcdC8vIEZhbGwgYmFjayB0byBvZmZzZXRXaWR0aC9vZmZzZXRIZWlnaHQgd2hlbiB2YWx1ZSBpcyBcImF1dG9cIlxuXHRcdC8vIFRoaXMgaGFwcGVucyBmb3IgaW5saW5lIGVsZW1lbnRzIHdpdGggbm8gZXhwbGljaXQgc2V0dGluZyAoZ2gtMzU3MSlcblx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4xIC0gNC4zIG9ubHlcblx0XHQvLyBBbHNvIHVzZSBvZmZzZXRXaWR0aC9vZmZzZXRIZWlnaHQgZm9yIG1pc3JlcG9ydGVkIGlubGluZSBkaW1lbnNpb25zIChnaC0zNjAyKVxuXHRcdGlmICh2YWwgPT09IFwiYXV0b1wiIHx8ICFwYXJzZUZsb2F0KHZhbCkgJiYgalF1ZXJ5LmNzcyhlbGVtLCBcImRpc3BsYXlcIiwgZmFsc2UsIHN0eWxlcykgPT09IFwiaW5saW5lXCIpIHtcblxuXHRcdFx0dmFsID0gZWxlbVtcIm9mZnNldFwiICsgZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSldO1xuXG5cdFx0XHQvLyBvZmZzZXRXaWR0aC9vZmZzZXRIZWlnaHQgcHJvdmlkZSBib3JkZXItYm94IHZhbHVlc1xuXHRcdFx0dmFsdWVJc0JvcmRlckJveCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gTm9ybWFsaXplIFwiXCIgYW5kIGF1dG9cblx0XHR2YWwgPSBwYXJzZUZsb2F0KHZhbCkgfHwgMDtcblxuXHRcdC8vIEFkanVzdCBmb3IgdGhlIGVsZW1lbnQncyBib3ggbW9kZWxcblx0XHRyZXR1cm4gdmFsICsgYm94TW9kZWxBZGp1c3RtZW50KGVsZW0sIGRpbWVuc2lvbiwgZXh0cmEgfHwgKGlzQm9yZGVyQm94ID8gXCJib3JkZXJcIiA6IFwiY29udGVudFwiKSwgdmFsdWVJc0JvcmRlckJveCwgc3R5bGVzLFxuXG5cdFx0Ly8gUHJvdmlkZSB0aGUgY3VycmVudCBjb21wdXRlZCBzaXplIHRvIHJlcXVlc3Qgc2Nyb2xsIGd1dHRlciBjYWxjdWxhdGlvbiAoZ2gtMzU4OSlcblx0XHR2YWwpICsgXCJweFwiO1xuXHR9XG5cblx0alF1ZXJ5LmV4dGVuZCh7XG5cblx0XHQvLyBBZGQgaW4gc3R5bGUgcHJvcGVydHkgaG9va3MgZm9yIG92ZXJyaWRpbmcgdGhlIGRlZmF1bHRcblx0XHQvLyBiZWhhdmlvciBvZiBnZXR0aW5nIGFuZCBzZXR0aW5nIGEgc3R5bGUgcHJvcGVydHlcblx0XHRjc3NIb29rczoge1xuXHRcdFx0b3BhY2l0eToge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uIGdldChlbGVtLCBjb21wdXRlZCkge1xuXHRcdFx0XHRcdGlmIChjb21wdXRlZCkge1xuXG5cdFx0XHRcdFx0XHQvLyBXZSBzaG91bGQgYWx3YXlzIGdldCBhIG51bWJlciBiYWNrIGZyb20gb3BhY2l0eVxuXHRcdFx0XHRcdFx0dmFyIHJldCA9IGN1ckNTUyhlbGVtLCBcIm9wYWNpdHlcIik7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmV0ID09PSBcIlwiID8gXCIxXCIgOiByZXQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIERvbid0IGF1dG9tYXRpY2FsbHkgYWRkIFwicHhcIiB0byB0aGVzZSBwb3NzaWJseS11bml0bGVzcyBwcm9wZXJ0aWVzXG5cdFx0Y3NzTnVtYmVyOiB7XG5cdFx0XHRcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6IHRydWUsXG5cdFx0XHRcImNvbHVtbkNvdW50XCI6IHRydWUsXG5cdFx0XHRcImZpbGxPcGFjaXR5XCI6IHRydWUsXG5cdFx0XHRcImZsZXhHcm93XCI6IHRydWUsXG5cdFx0XHRcImZsZXhTaHJpbmtcIjogdHJ1ZSxcblx0XHRcdFwiZm9udFdlaWdodFwiOiB0cnVlLFxuXHRcdFx0XCJsaW5lSGVpZ2h0XCI6IHRydWUsXG5cdFx0XHRcIm9wYWNpdHlcIjogdHJ1ZSxcblx0XHRcdFwib3JkZXJcIjogdHJ1ZSxcblx0XHRcdFwib3JwaGFuc1wiOiB0cnVlLFxuXHRcdFx0XCJ3aWRvd3NcIjogdHJ1ZSxcblx0XHRcdFwiekluZGV4XCI6IHRydWUsXG5cdFx0XHRcInpvb21cIjogdHJ1ZVxuXHRcdH0sXG5cblx0XHQvLyBBZGQgaW4gcHJvcGVydGllcyB3aG9zZSBuYW1lcyB5b3Ugd2lzaCB0byBmaXggYmVmb3JlXG5cdFx0Ly8gc2V0dGluZyBvciBnZXR0aW5nIHRoZSB2YWx1ZVxuXHRcdGNzc1Byb3BzOiB7fSxcblxuXHRcdC8vIEdldCBhbmQgc2V0IHRoZSBzdHlsZSBwcm9wZXJ0eSBvbiBhIERPTSBOb2RlXG5cdFx0c3R5bGU6IGZ1bmN0aW9uIHN0eWxlKGVsZW0sIG5hbWUsIHZhbHVlLCBleHRyYSkge1xuXG5cdFx0XHQvLyBEb24ndCBzZXQgc3R5bGVzIG9uIHRleHQgYW5kIGNvbW1lbnQgbm9kZXNcblx0XHRcdGlmICghZWxlbSB8fCBlbGVtLm5vZGVUeXBlID09PSAzIHx8IGVsZW0ubm9kZVR5cGUgPT09IDggfHwgIWVsZW0uc3R5bGUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBNYWtlIHN1cmUgdGhhdCB3ZSdyZSB3b3JraW5nIHdpdGggdGhlIHJpZ2h0IG5hbWVcblx0XHRcdHZhciByZXQsXG5cdFx0XHQgICAgdHlwZSxcblx0XHRcdCAgICBob29rcyxcblx0XHRcdCAgICBvcmlnTmFtZSA9IGNhbWVsQ2FzZShuYW1lKSxcblx0XHRcdCAgICBpc0N1c3RvbVByb3AgPSByY3VzdG9tUHJvcC50ZXN0KG5hbWUpLFxuXHRcdFx0ICAgIHN0eWxlID0gZWxlbS5zdHlsZTtcblxuXHRcdFx0Ly8gTWFrZSBzdXJlIHRoYXQgd2UncmUgd29ya2luZyB3aXRoIHRoZSByaWdodCBuYW1lLiBXZSBkb24ndFxuXHRcdFx0Ly8gd2FudCB0byBxdWVyeSB0aGUgdmFsdWUgaWYgaXQgaXMgYSBDU1MgY3VzdG9tIHByb3BlcnR5XG5cdFx0XHQvLyBzaW5jZSB0aGV5IGFyZSB1c2VyLWRlZmluZWQuXG5cdFx0XHRpZiAoIWlzQ3VzdG9tUHJvcCkge1xuXHRcdFx0XHRuYW1lID0gZmluYWxQcm9wTmFtZShvcmlnTmFtZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEdldHMgaG9vayBmb3IgdGhlIHByZWZpeGVkIHZlcnNpb24sIHRoZW4gdW5wcmVmaXhlZCB2ZXJzaW9uXG5cdFx0XHRob29rcyA9IGpRdWVyeS5jc3NIb29rc1tuYW1lXSB8fCBqUXVlcnkuY3NzSG9va3Nbb3JpZ05hbWVdO1xuXG5cdFx0XHQvLyBDaGVjayBpZiB3ZSdyZSBzZXR0aW5nIGEgdmFsdWVcblx0XHRcdGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHR5cGUgPSB0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih2YWx1ZSk7XG5cblx0XHRcdFx0Ly8gQ29udmVydCBcIis9XCIgb3IgXCItPVwiIHRvIHJlbGF0aXZlIG51bWJlcnMgKCM3MzQ1KVxuXHRcdFx0XHRpZiAodHlwZSA9PT0gXCJzdHJpbmdcIiAmJiAocmV0ID0gcmNzc051bS5leGVjKHZhbHVlKSkgJiYgcmV0WzFdKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBhZGp1c3RDU1MoZWxlbSwgbmFtZSwgcmV0KTtcblxuXHRcdFx0XHRcdC8vIEZpeGVzIGJ1ZyAjOTIzN1xuXHRcdFx0XHRcdHR5cGUgPSBcIm51bWJlclwiO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gTWFrZSBzdXJlIHRoYXQgbnVsbCBhbmQgTmFOIHZhbHVlcyBhcmVuJ3Qgc2V0ICgjNzExNilcblx0XHRcdFx0aWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgIT09IHZhbHVlKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgYSBudW1iZXIgd2FzIHBhc3NlZCBpbiwgYWRkIHRoZSB1bml0IChleGNlcHQgZm9yIGNlcnRhaW4gQ1NTIHByb3BlcnRpZXMpXG5cdFx0XHRcdGlmICh0eXBlID09PSBcIm51bWJlclwiKSB7XG5cdFx0XHRcdFx0dmFsdWUgKz0gcmV0ICYmIHJldFszXSB8fCAoalF1ZXJ5LmNzc051bWJlcltvcmlnTmFtZV0gPyBcIlwiIDogXCJweFwiKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGJhY2tncm91bmQtKiBwcm9wcyBhZmZlY3Qgb3JpZ2luYWwgY2xvbmUncyB2YWx1ZXNcblx0XHRcdFx0aWYgKCFzdXBwb3J0LmNsZWFyQ2xvbmVTdHlsZSAmJiB2YWx1ZSA9PT0gXCJcIiAmJiBuYW1lLmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpID09PSAwKSB7XG5cdFx0XHRcdFx0c3R5bGVbbmFtZV0gPSBcImluaGVyaXRcIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIGEgaG9vayB3YXMgcHJvdmlkZWQsIHVzZSB0aGF0IHZhbHVlLCBvdGhlcndpc2UganVzdCBzZXQgdGhlIHNwZWNpZmllZCB2YWx1ZVxuXHRcdFx0XHRpZiAoIWhvb2tzIHx8ICEoXCJzZXRcIiBpbiBob29rcykgfHwgKHZhbHVlID0gaG9va3Muc2V0KGVsZW0sIHZhbHVlLCBleHRyYSkpICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0XHRcdGlmIChpc0N1c3RvbVByb3ApIHtcblx0XHRcdFx0XHRcdHN0eWxlLnNldFByb3BlcnR5KG5hbWUsIHZhbHVlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c3R5bGVbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gSWYgYSBob29rIHdhcyBwcm92aWRlZCBnZXQgdGhlIG5vbi1jb21wdXRlZCB2YWx1ZSBmcm9tIHRoZXJlXG5cdFx0XHRcdGlmIChob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmIChyZXQgPSBob29rcy5nZXQoZWxlbSwgZmFsc2UsIGV4dHJhKSkgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSBqdXN0IGdldCB0aGUgdmFsdWUgZnJvbSB0aGUgc3R5bGUgb2JqZWN0XG5cdFx0XHRcdHJldHVybiBzdHlsZVtuYW1lXTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Y3NzOiBmdW5jdGlvbiBjc3MoZWxlbSwgbmFtZSwgZXh0cmEsIHN0eWxlcykge1xuXHRcdFx0dmFyIHZhbCxcblx0XHRcdCAgICBudW0sXG5cdFx0XHQgICAgaG9va3MsXG5cdFx0XHQgICAgb3JpZ05hbWUgPSBjYW1lbENhc2UobmFtZSksXG5cdFx0XHQgICAgaXNDdXN0b21Qcm9wID0gcmN1c3RvbVByb3AudGVzdChuYW1lKTtcblxuXHRcdFx0Ly8gTWFrZSBzdXJlIHRoYXQgd2UncmUgd29ya2luZyB3aXRoIHRoZSByaWdodCBuYW1lLiBXZSBkb24ndFxuXHRcdFx0Ly8gd2FudCB0byBtb2RpZnkgdGhlIHZhbHVlIGlmIGl0IGlzIGEgQ1NTIGN1c3RvbSBwcm9wZXJ0eVxuXHRcdFx0Ly8gc2luY2UgdGhleSBhcmUgdXNlci1kZWZpbmVkLlxuXHRcdFx0aWYgKCFpc0N1c3RvbVByb3ApIHtcblx0XHRcdFx0bmFtZSA9IGZpbmFsUHJvcE5hbWUob3JpZ05hbWUpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUcnkgcHJlZml4ZWQgbmFtZSBmb2xsb3dlZCBieSB0aGUgdW5wcmVmaXhlZCBuYW1lXG5cdFx0XHRob29rcyA9IGpRdWVyeS5jc3NIb29rc1tuYW1lXSB8fCBqUXVlcnkuY3NzSG9va3Nbb3JpZ05hbWVdO1xuXG5cdFx0XHQvLyBJZiBhIGhvb2sgd2FzIHByb3ZpZGVkIGdldCB0aGUgY29tcHV0ZWQgdmFsdWUgZnJvbSB0aGVyZVxuXHRcdFx0aWYgKGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MpIHtcblx0XHRcdFx0dmFsID0gaG9va3MuZ2V0KGVsZW0sIHRydWUsIGV4dHJhKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gT3RoZXJ3aXNlLCBpZiBhIHdheSB0byBnZXQgdGhlIGNvbXB1dGVkIHZhbHVlIGV4aXN0cywgdXNlIHRoYXRcblx0XHRcdGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR2YWwgPSBjdXJDU1MoZWxlbSwgbmFtZSwgc3R5bGVzKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29udmVydCBcIm5vcm1hbFwiIHRvIGNvbXB1dGVkIHZhbHVlXG5cdFx0XHRpZiAodmFsID09PSBcIm5vcm1hbFwiICYmIG5hbWUgaW4gY3NzTm9ybWFsVHJhbnNmb3JtKSB7XG5cdFx0XHRcdHZhbCA9IGNzc05vcm1hbFRyYW5zZm9ybVtuYW1lXTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTWFrZSBudW1lcmljIGlmIGZvcmNlZCBvciBhIHF1YWxpZmllciB3YXMgcHJvdmlkZWQgYW5kIHZhbCBsb29rcyBudW1lcmljXG5cdFx0XHRpZiAoZXh0cmEgPT09IFwiXCIgfHwgZXh0cmEpIHtcblx0XHRcdFx0bnVtID0gcGFyc2VGbG9hdCh2YWwpO1xuXHRcdFx0XHRyZXR1cm4gZXh0cmEgPT09IHRydWUgfHwgaXNGaW5pdGUobnVtKSA/IG51bSB8fCAwIDogdmFsO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdmFsO1xuXHRcdH1cblx0fSk7XG5cblx0alF1ZXJ5LmVhY2goW1wiaGVpZ2h0XCIsIFwid2lkdGhcIl0sIGZ1bmN0aW9uIChpLCBkaW1lbnNpb24pIHtcblx0XHRqUXVlcnkuY3NzSG9va3NbZGltZW5zaW9uXSA9IHtcblx0XHRcdGdldDogZnVuY3Rpb24gZ2V0KGVsZW0sIGNvbXB1dGVkLCBleHRyYSkge1xuXHRcdFx0XHRpZiAoY29tcHV0ZWQpIHtcblxuXHRcdFx0XHRcdC8vIENlcnRhaW4gZWxlbWVudHMgY2FuIGhhdmUgZGltZW5zaW9uIGluZm8gaWYgd2UgaW52aXNpYmx5IHNob3cgdGhlbVxuXHRcdFx0XHRcdC8vIGJ1dCBpdCBtdXN0IGhhdmUgYSBjdXJyZW50IGRpc3BsYXkgc3R5bGUgdGhhdCB3b3VsZCBiZW5lZml0XG5cdFx0XHRcdFx0cmV0dXJuIHJkaXNwbGF5c3dhcC50ZXN0KGpRdWVyeS5jc3MoZWxlbSwgXCJkaXNwbGF5XCIpKSAmJiAoXG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBTYWZhcmkgOCtcblx0XHRcdFx0XHQvLyBUYWJsZSBjb2x1bW5zIGluIFNhZmFyaSBoYXZlIG5vbi16ZXJvIG9mZnNldFdpZHRoICYgemVyb1xuXHRcdFx0XHRcdC8vIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIHVubGVzcyBkaXNwbGF5IGlzIGNoYW5nZWQuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG5cdFx0XHRcdFx0Ly8gUnVubmluZyBnZXRCb3VuZGluZ0NsaWVudFJlY3Qgb24gYSBkaXNjb25uZWN0ZWQgbm9kZVxuXHRcdFx0XHRcdC8vIGluIElFIHRocm93cyBhbiBlcnJvci5cblx0XHRcdFx0XHQhZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCB8fCAhZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCkgPyBzd2FwKGVsZW0sIGNzc1Nob3csIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBnZXRXaWR0aE9ySGVpZ2h0KGVsZW0sIGRpbWVuc2lvbiwgZXh0cmEpO1xuXHRcdFx0XHRcdH0pIDogZ2V0V2lkdGhPckhlaWdodChlbGVtLCBkaW1lbnNpb24sIGV4dHJhKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiBzZXQoZWxlbSwgdmFsdWUsIGV4dHJhKSB7XG5cdFx0XHRcdHZhciBtYXRjaGVzLFxuXHRcdFx0XHQgICAgc3R5bGVzID0gZ2V0U3R5bGVzKGVsZW0pLFxuXHRcdFx0XHQgICAgaXNCb3JkZXJCb3ggPSBqUXVlcnkuY3NzKGVsZW0sIFwiYm94U2l6aW5nXCIsIGZhbHNlLCBzdHlsZXMpID09PSBcImJvcmRlci1ib3hcIixcblx0XHRcdFx0ICAgIHN1YnRyYWN0ID0gZXh0cmEgJiYgYm94TW9kZWxBZGp1c3RtZW50KGVsZW0sIGRpbWVuc2lvbiwgZXh0cmEsIGlzQm9yZGVyQm94LCBzdHlsZXMpO1xuXG5cdFx0XHRcdC8vIEFjY291bnQgZm9yIHVucmVsaWFibGUgYm9yZGVyLWJveCBkaW1lbnNpb25zIGJ5IGNvbXBhcmluZyBvZmZzZXQqIHRvIGNvbXB1dGVkIGFuZFxuXHRcdFx0XHQvLyBmYWtpbmcgYSBjb250ZW50LWJveCB0byBnZXQgYm9yZGVyIGFuZCBwYWRkaW5nIChnaC0zNjk5KVxuXHRcdFx0XHRpZiAoaXNCb3JkZXJCb3ggJiYgc3VwcG9ydC5zY3JvbGxib3hTaXplKCkgPT09IHN0eWxlcy5wb3NpdGlvbikge1xuXHRcdFx0XHRcdHN1YnRyYWN0IC09IE1hdGguY2VpbChlbGVtW1wib2Zmc2V0XCIgKyBkaW1lbnNpb25bMF0udG9VcHBlckNhc2UoKSArIGRpbWVuc2lvbi5zbGljZSgxKV0gLSBwYXJzZUZsb2F0KHN0eWxlc1tkaW1lbnNpb25dKSAtIGJveE1vZGVsQWRqdXN0bWVudChlbGVtLCBkaW1lbnNpb24sIFwiYm9yZGVyXCIsIGZhbHNlLCBzdHlsZXMpIC0gMC41KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENvbnZlcnQgdG8gcGl4ZWxzIGlmIHZhbHVlIGFkanVzdG1lbnQgaXMgbmVlZGVkXG5cdFx0XHRcdGlmIChzdWJ0cmFjdCAmJiAobWF0Y2hlcyA9IHJjc3NOdW0uZXhlYyh2YWx1ZSkpICYmIChtYXRjaGVzWzNdIHx8IFwicHhcIikgIT09IFwicHhcIikge1xuXG5cdFx0XHRcdFx0ZWxlbS5zdHlsZVtkaW1lbnNpb25dID0gdmFsdWU7XG5cdFx0XHRcdFx0dmFsdWUgPSBqUXVlcnkuY3NzKGVsZW0sIGRpbWVuc2lvbik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gc2V0UG9zaXRpdmVOdW1iZXIoZWxlbSwgdmFsdWUsIHN1YnRyYWN0KTtcblx0XHRcdH1cblx0XHR9O1xuXHR9KTtcblxuXHRqUXVlcnkuY3NzSG9va3MubWFyZ2luTGVmdCA9IGFkZEdldEhvb2tJZihzdXBwb3J0LnJlbGlhYmxlTWFyZ2luTGVmdCwgZnVuY3Rpb24gKGVsZW0sIGNvbXB1dGVkKSB7XG5cdFx0aWYgKGNvbXB1dGVkKSB7XG5cdFx0XHRyZXR1cm4gKHBhcnNlRmxvYXQoY3VyQ1NTKGVsZW0sIFwibWFyZ2luTGVmdFwiKSkgfHwgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gc3dhcChlbGVtLCB7IG1hcmdpbkxlZnQ6IDAgfSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuXHRcdFx0fSkpICsgXCJweFwiO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gVGhlc2UgaG9va3MgYXJlIHVzZWQgYnkgYW5pbWF0ZSB0byBleHBhbmQgcHJvcGVydGllc1xuXHRqUXVlcnkuZWFjaCh7XG5cdFx0bWFyZ2luOiBcIlwiLFxuXHRcdHBhZGRpbmc6IFwiXCIsXG5cdFx0Ym9yZGVyOiBcIldpZHRoXCJcblx0fSwgZnVuY3Rpb24gKHByZWZpeCwgc3VmZml4KSB7XG5cdFx0alF1ZXJ5LmNzc0hvb2tzW3ByZWZpeCArIHN1ZmZpeF0gPSB7XG5cdFx0XHRleHBhbmQ6IGZ1bmN0aW9uIGV4cGFuZCh2YWx1ZSkge1xuXHRcdFx0XHR2YXIgaSA9IDAsXG5cdFx0XHRcdCAgICBleHBhbmRlZCA9IHt9LFxuXG5cblx0XHRcdFx0Ly8gQXNzdW1lcyBhIHNpbmdsZSBudW1iZXIgaWYgbm90IGEgc3RyaW5nXG5cdFx0XHRcdHBhcnRzID0gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiID8gdmFsdWUuc3BsaXQoXCIgXCIpIDogW3ZhbHVlXTtcblxuXHRcdFx0XHRmb3IgKDsgaSA8IDQ7IGkrKykge1xuXHRcdFx0XHRcdGV4cGFuZGVkW3ByZWZpeCArIGNzc0V4cGFuZFtpXSArIHN1ZmZpeF0gPSBwYXJ0c1tpXSB8fCBwYXJ0c1tpIC0gMl0gfHwgcGFydHNbMF07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZXhwYW5kZWQ7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGlmIChwcmVmaXggIT09IFwibWFyZ2luXCIpIHtcblx0XHRcdGpRdWVyeS5jc3NIb29rc1twcmVmaXggKyBzdWZmaXhdLnNldCA9IHNldFBvc2l0aXZlTnVtYmVyO1xuXHRcdH1cblx0fSk7XG5cblx0alF1ZXJ5LmZuLmV4dGVuZCh7XG5cdFx0Y3NzOiBmdW5jdGlvbiBjc3MobmFtZSwgdmFsdWUpIHtcblx0XHRcdHJldHVybiBhY2Nlc3ModGhpcywgZnVuY3Rpb24gKGVsZW0sIG5hbWUsIHZhbHVlKSB7XG5cdFx0XHRcdHZhciBzdHlsZXMsXG5cdFx0XHRcdCAgICBsZW4sXG5cdFx0XHRcdCAgICBtYXAgPSB7fSxcblx0XHRcdFx0ICAgIGkgPSAwO1xuXG5cdFx0XHRcdGlmIChBcnJheS5pc0FycmF5KG5hbWUpKSB7XG5cdFx0XHRcdFx0c3R5bGVzID0gZ2V0U3R5bGVzKGVsZW0pO1xuXHRcdFx0XHRcdGxlbiA9IG5hbWUubGVuZ3RoO1xuXG5cdFx0XHRcdFx0Zm9yICg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRcdFx0bWFwW25hbWVbaV1dID0galF1ZXJ5LmNzcyhlbGVtLCBuYW1lW2ldLCBmYWxzZSwgc3R5bGVzKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gbWFwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgPyBqUXVlcnkuc3R5bGUoZWxlbSwgbmFtZSwgdmFsdWUpIDogalF1ZXJ5LmNzcyhlbGVtLCBuYW1lKTtcblx0XHRcdH0sIG5hbWUsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSk7XG5cdFx0fVxuXHR9KTtcblxuXHRmdW5jdGlvbiBUd2VlbihlbGVtLCBvcHRpb25zLCBwcm9wLCBlbmQsIGVhc2luZykge1xuXHRcdHJldHVybiBuZXcgVHdlZW4ucHJvdG90eXBlLmluaXQoZWxlbSwgb3B0aW9ucywgcHJvcCwgZW5kLCBlYXNpbmcpO1xuXHR9XG5cdGpRdWVyeS5Ud2VlbiA9IFR3ZWVuO1xuXG5cdFR3ZWVuLnByb3RvdHlwZSA9IHtcblx0XHRjb25zdHJ1Y3RvcjogVHdlZW4sXG5cdFx0aW5pdDogZnVuY3Rpb24gaW5pdChlbGVtLCBvcHRpb25zLCBwcm9wLCBlbmQsIGVhc2luZywgdW5pdCkge1xuXHRcdFx0dGhpcy5lbGVtID0gZWxlbTtcblx0XHRcdHRoaXMucHJvcCA9IHByb3A7XG5cdFx0XHR0aGlzLmVhc2luZyA9IGVhc2luZyB8fCBqUXVlcnkuZWFzaW5nLl9kZWZhdWx0O1xuXHRcdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0XHRcdHRoaXMuc3RhcnQgPSB0aGlzLm5vdyA9IHRoaXMuY3VyKCk7XG5cdFx0XHR0aGlzLmVuZCA9IGVuZDtcblx0XHRcdHRoaXMudW5pdCA9IHVuaXQgfHwgKGpRdWVyeS5jc3NOdW1iZXJbcHJvcF0gPyBcIlwiIDogXCJweFwiKTtcblx0XHR9LFxuXHRcdGN1cjogZnVuY3Rpb24gY3VyKCkge1xuXHRcdFx0dmFyIGhvb2tzID0gVHdlZW4ucHJvcEhvb2tzW3RoaXMucHJvcF07XG5cblx0XHRcdHJldHVybiBob29rcyAmJiBob29rcy5nZXQgPyBob29rcy5nZXQodGhpcykgOiBUd2Vlbi5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpO1xuXHRcdH0sXG5cdFx0cnVuOiBmdW5jdGlvbiBydW4ocGVyY2VudCkge1xuXHRcdFx0dmFyIGVhc2VkLFxuXHRcdFx0ICAgIGhvb2tzID0gVHdlZW4ucHJvcEhvb2tzW3RoaXMucHJvcF07XG5cblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuZHVyYXRpb24pIHtcblx0XHRcdFx0dGhpcy5wb3MgPSBlYXNlZCA9IGpRdWVyeS5lYXNpbmdbdGhpcy5lYXNpbmddKHBlcmNlbnQsIHRoaXMub3B0aW9ucy5kdXJhdGlvbiAqIHBlcmNlbnQsIDAsIDEsIHRoaXMub3B0aW9ucy5kdXJhdGlvbik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnBvcyA9IGVhc2VkID0gcGVyY2VudDtcblx0XHRcdH1cblx0XHRcdHRoaXMubm93ID0gKHRoaXMuZW5kIC0gdGhpcy5zdGFydCkgKiBlYXNlZCArIHRoaXMuc3RhcnQ7XG5cblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuc3RlcCkge1xuXHRcdFx0XHR0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSwgdGhpcy5ub3csIHRoaXMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaG9va3MgJiYgaG9va3Muc2V0KSB7XG5cdFx0XHRcdGhvb2tzLnNldCh0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFR3ZWVuLnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdH07XG5cblx0VHdlZW4ucHJvdG90eXBlLmluaXQucHJvdG90eXBlID0gVHdlZW4ucHJvdG90eXBlO1xuXG5cdFR3ZWVuLnByb3BIb29rcyA9IHtcblx0XHRfZGVmYXVsdDoge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiBnZXQodHdlZW4pIHtcblx0XHRcdFx0dmFyIHJlc3VsdDtcblxuXHRcdFx0XHQvLyBVc2UgYSBwcm9wZXJ0eSBvbiB0aGUgZWxlbWVudCBkaXJlY3RseSB3aGVuIGl0IGlzIG5vdCBhIERPTSBlbGVtZW50LFxuXHRcdFx0XHQvLyBvciB3aGVuIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHN0eWxlIHByb3BlcnR5IHRoYXQgZXhpc3RzLlxuXHRcdFx0XHRpZiAodHdlZW4uZWxlbS5ub2RlVHlwZSAhPT0gMSB8fCB0d2Vlbi5lbGVtW3R3ZWVuLnByb3BdICE9IG51bGwgJiYgdHdlZW4uZWxlbS5zdHlsZVt0d2Vlbi5wcm9wXSA9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHR3ZWVuLmVsZW1bdHdlZW4ucHJvcF07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQYXNzaW5nIGFuIGVtcHR5IHN0cmluZyBhcyBhIDNyZCBwYXJhbWV0ZXIgdG8gLmNzcyB3aWxsIGF1dG9tYXRpY2FsbHlcblx0XHRcdFx0Ly8gYXR0ZW1wdCBhIHBhcnNlRmxvYXQgYW5kIGZhbGxiYWNrIHRvIGEgc3RyaW5nIGlmIHRoZSBwYXJzZSBmYWlscy5cblx0XHRcdFx0Ly8gU2ltcGxlIHZhbHVlcyBzdWNoIGFzIFwiMTBweFwiIGFyZSBwYXJzZWQgdG8gRmxvYXQ7XG5cdFx0XHRcdC8vIGNvbXBsZXggdmFsdWVzIHN1Y2ggYXMgXCJyb3RhdGUoMXJhZClcIiBhcmUgcmV0dXJuZWQgYXMtaXMuXG5cdFx0XHRcdHJlc3VsdCA9IGpRdWVyeS5jc3ModHdlZW4uZWxlbSwgdHdlZW4ucHJvcCwgXCJcIik7XG5cblx0XHRcdFx0Ly8gRW1wdHkgc3RyaW5ncywgbnVsbCwgdW5kZWZpbmVkIGFuZCBcImF1dG9cIiBhcmUgY29udmVydGVkIHRvIDAuXG5cdFx0XHRcdHJldHVybiAhcmVzdWx0IHx8IHJlc3VsdCA9PT0gXCJhdXRvXCIgPyAwIDogcmVzdWx0O1xuXHRcdFx0fSxcblx0XHRcdHNldDogZnVuY3Rpb24gc2V0KHR3ZWVuKSB7XG5cblx0XHRcdFx0Ly8gVXNlIHN0ZXAgaG9vayBmb3IgYmFjayBjb21wYXQuXG5cdFx0XHRcdC8vIFVzZSBjc3NIb29rIGlmIGl0cyB0aGVyZS5cblx0XHRcdFx0Ly8gVXNlIC5zdHlsZSBpZiBhdmFpbGFibGUgYW5kIHVzZSBwbGFpbiBwcm9wZXJ0aWVzIHdoZXJlIGF2YWlsYWJsZS5cblx0XHRcdFx0aWYgKGpRdWVyeS5meC5zdGVwW3R3ZWVuLnByb3BdKSB7XG5cdFx0XHRcdFx0alF1ZXJ5LmZ4LnN0ZXBbdHdlZW4ucHJvcF0odHdlZW4pO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHR3ZWVuLmVsZW0ubm9kZVR5cGUgPT09IDEgJiYgKHR3ZWVuLmVsZW0uc3R5bGVbalF1ZXJ5LmNzc1Byb3BzW3R3ZWVuLnByb3BdXSAhPSBudWxsIHx8IGpRdWVyeS5jc3NIb29rc1t0d2Vlbi5wcm9wXSkpIHtcblx0XHRcdFx0XHRqUXVlcnkuc3R5bGUodHdlZW4uZWxlbSwgdHdlZW4ucHJvcCwgdHdlZW4ubm93ICsgdHdlZW4udW5pdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dHdlZW4uZWxlbVt0d2Vlbi5wcm9wXSA9IHR3ZWVuLm5vdztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXHQvLyBQYW5pYyBiYXNlZCBhcHByb2FjaCB0byBzZXR0aW5nIHRoaW5ncyBvbiBkaXNjb25uZWN0ZWQgbm9kZXNcblx0VHdlZW4ucHJvcEhvb2tzLnNjcm9sbFRvcCA9IFR3ZWVuLnByb3BIb29rcy5zY3JvbGxMZWZ0ID0ge1xuXHRcdHNldDogZnVuY3Rpb24gc2V0KHR3ZWVuKSB7XG5cdFx0XHRpZiAodHdlZW4uZWxlbS5ub2RlVHlwZSAmJiB0d2Vlbi5lbGVtLnBhcmVudE5vZGUpIHtcblx0XHRcdFx0dHdlZW4uZWxlbVt0d2Vlbi5wcm9wXSA9IHR3ZWVuLm5vdztcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0alF1ZXJ5LmVhc2luZyA9IHtcblx0XHRsaW5lYXI6IGZ1bmN0aW9uIGxpbmVhcihwKSB7XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9LFxuXHRcdHN3aW5nOiBmdW5jdGlvbiBzd2luZyhwKSB7XG5cdFx0XHRyZXR1cm4gMC41IC0gTWF0aC5jb3MocCAqIE1hdGguUEkpIC8gMjtcblx0XHR9LFxuXHRcdF9kZWZhdWx0OiBcInN3aW5nXCJcblx0fTtcblxuXHRqUXVlcnkuZnggPSBUd2Vlbi5wcm90b3R5cGUuaW5pdDtcblxuXHQvLyBCYWNrIGNvbXBhdCA8MS44IGV4dGVuc2lvbiBwb2ludFxuXHRqUXVlcnkuZnguc3RlcCA9IHt9O1xuXG5cdHZhciBmeE5vdyxcblx0ICAgIGluUHJvZ3Jlc3MsXG5cdCAgICByZnh0eXBlcyA9IC9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxcblx0ICAgIHJydW4gPSAvcXVldWVIb29rcyQvO1xuXG5cdGZ1bmN0aW9uIHNjaGVkdWxlKCkge1xuXHRcdGlmIChpblByb2dyZXNzKSB7XG5cdFx0XHRpZiAoZG9jdW1lbnQuaGlkZGVuID09PSBmYWxzZSAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2NoZWR1bGUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoc2NoZWR1bGUsIGpRdWVyeS5meC5pbnRlcnZhbCk7XG5cdFx0XHR9XG5cblx0XHRcdGpRdWVyeS5meC50aWNrKCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQW5pbWF0aW9ucyBjcmVhdGVkIHN5bmNocm9ub3VzbHkgd2lsbCBydW4gc3luY2hyb25vdXNseVxuXHRmdW5jdGlvbiBjcmVhdGVGeE5vdygpIHtcblx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRmeE5vdyA9IHVuZGVmaW5lZDtcblx0XHR9KTtcblx0XHRyZXR1cm4gZnhOb3cgPSBEYXRlLm5vdygpO1xuXHR9XG5cblx0Ly8gR2VuZXJhdGUgcGFyYW1ldGVycyB0byBjcmVhdGUgYSBzdGFuZGFyZCBhbmltYXRpb25cblx0ZnVuY3Rpb24gZ2VuRngodHlwZSwgaW5jbHVkZVdpZHRoKSB7XG5cdFx0dmFyIHdoaWNoLFxuXHRcdCAgICBpID0gMCxcblx0XHQgICAgYXR0cnMgPSB7IGhlaWdodDogdHlwZSB9O1xuXG5cdFx0Ly8gSWYgd2UgaW5jbHVkZSB3aWR0aCwgc3RlcCB2YWx1ZSBpcyAxIHRvIGRvIGFsbCBjc3NFeHBhbmQgdmFsdWVzLFxuXHRcdC8vIG90aGVyd2lzZSBzdGVwIHZhbHVlIGlzIDIgdG8gc2tpcCBvdmVyIExlZnQgYW5kIFJpZ2h0XG5cdFx0aW5jbHVkZVdpZHRoID0gaW5jbHVkZVdpZHRoID8gMSA6IDA7XG5cdFx0Zm9yICg7IGkgPCA0OyBpICs9IDIgLSBpbmNsdWRlV2lkdGgpIHtcblx0XHRcdHdoaWNoID0gY3NzRXhwYW5kW2ldO1xuXHRcdFx0YXR0cnNbXCJtYXJnaW5cIiArIHdoaWNoXSA9IGF0dHJzW1wicGFkZGluZ1wiICsgd2hpY2hdID0gdHlwZTtcblx0XHR9XG5cblx0XHRpZiAoaW5jbHVkZVdpZHRoKSB7XG5cdFx0XHRhdHRycy5vcGFjaXR5ID0gYXR0cnMud2lkdGggPSB0eXBlO1xuXHRcdH1cblxuXHRcdHJldHVybiBhdHRycztcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZVR3ZWVuKHZhbHVlLCBwcm9wLCBhbmltYXRpb24pIHtcblx0XHR2YXIgdHdlZW4sXG5cdFx0ICAgIGNvbGxlY3Rpb24gPSAoQW5pbWF0aW9uLnR3ZWVuZXJzW3Byb3BdIHx8IFtdKS5jb25jYXQoQW5pbWF0aW9uLnR3ZWVuZXJzW1wiKlwiXSksXG5cdFx0ICAgIGluZGV4ID0gMCxcblx0XHQgICAgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGg7XG5cdFx0Zm9yICg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRpZiAodHdlZW4gPSBjb2xsZWN0aW9uW2luZGV4XS5jYWxsKGFuaW1hdGlvbiwgcHJvcCwgdmFsdWUpKSB7XG5cblx0XHRcdFx0Ly8gV2UncmUgZG9uZSB3aXRoIHRoaXMgcHJvcGVydHlcblx0XHRcdFx0cmV0dXJuIHR3ZWVuO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGRlZmF1bHRQcmVmaWx0ZXIoZWxlbSwgcHJvcHMsIG9wdHMpIHtcblx0XHR2YXIgcHJvcCxcblx0XHQgICAgdmFsdWUsXG5cdFx0ICAgIHRvZ2dsZSxcblx0XHQgICAgaG9va3MsXG5cdFx0ICAgIG9sZGZpcmUsXG5cdFx0ICAgIHByb3BUd2Vlbixcblx0XHQgICAgcmVzdG9yZURpc3BsYXksXG5cdFx0ICAgIGRpc3BsYXksXG5cdFx0ICAgIGlzQm94ID0gXCJ3aWR0aFwiIGluIHByb3BzIHx8IFwiaGVpZ2h0XCIgaW4gcHJvcHMsXG5cdFx0ICAgIGFuaW0gPSB0aGlzLFxuXHRcdCAgICBvcmlnID0ge30sXG5cdFx0ICAgIHN0eWxlID0gZWxlbS5zdHlsZSxcblx0XHQgICAgaGlkZGVuID0gZWxlbS5ub2RlVHlwZSAmJiBpc0hpZGRlbldpdGhpblRyZWUoZWxlbSksXG5cdFx0ICAgIGRhdGFTaG93ID0gZGF0YVByaXYuZ2V0KGVsZW0sIFwiZnhzaG93XCIpO1xuXG5cdFx0Ly8gUXVldWUtc2tpcHBpbmcgYW5pbWF0aW9ucyBoaWphY2sgdGhlIGZ4IGhvb2tzXG5cdFx0aWYgKCFvcHRzLnF1ZXVlKSB7XG5cdFx0XHRob29rcyA9IGpRdWVyeS5fcXVldWVIb29rcyhlbGVtLCBcImZ4XCIpO1xuXHRcdFx0aWYgKGhvb2tzLnVucXVldWVkID09IG51bGwpIHtcblx0XHRcdFx0aG9va3MudW5xdWV1ZWQgPSAwO1xuXHRcdFx0XHRvbGRmaXJlID0gaG9va3MuZW1wdHkuZmlyZTtcblx0XHRcdFx0aG9va3MuZW1wdHkuZmlyZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRpZiAoIWhvb2tzLnVucXVldWVkKSB7XG5cdFx0XHRcdFx0XHRvbGRmaXJlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aG9va3MudW5xdWV1ZWQrKztcblxuXHRcdFx0YW5pbS5hbHdheXMoZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdC8vIEVuc3VyZSB0aGUgY29tcGxldGUgaGFuZGxlciBpcyBjYWxsZWQgYmVmb3JlIHRoaXMgY29tcGxldGVzXG5cdFx0XHRcdGFuaW0uYWx3YXlzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRob29rcy51bnF1ZXVlZC0tO1xuXHRcdFx0XHRcdGlmICghalF1ZXJ5LnF1ZXVlKGVsZW0sIFwiZnhcIikubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRob29rcy5lbXB0eS5maXJlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBzaG93L2hpZGUgYW5pbWF0aW9uc1xuXHRcdGZvciAocHJvcCBpbiBwcm9wcykge1xuXHRcdFx0dmFsdWUgPSBwcm9wc1twcm9wXTtcblx0XHRcdGlmIChyZnh0eXBlcy50ZXN0KHZhbHVlKSkge1xuXHRcdFx0XHRkZWxldGUgcHJvcHNbcHJvcF07XG5cdFx0XHRcdHRvZ2dsZSA9IHRvZ2dsZSB8fCB2YWx1ZSA9PT0gXCJ0b2dnbGVcIjtcblx0XHRcdFx0aWYgKHZhbHVlID09PSAoaGlkZGVuID8gXCJoaWRlXCIgOiBcInNob3dcIikpIHtcblxuXHRcdFx0XHRcdC8vIFByZXRlbmQgdG8gYmUgaGlkZGVuIGlmIHRoaXMgaXMgYSBcInNob3dcIiBhbmRcblx0XHRcdFx0XHQvLyB0aGVyZSBpcyBzdGlsbCBkYXRhIGZyb20gYSBzdG9wcGVkIHNob3cvaGlkZVxuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PT0gXCJzaG93XCIgJiYgZGF0YVNob3cgJiYgZGF0YVNob3dbcHJvcF0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0aGlkZGVuID0gdHJ1ZTtcblxuXHRcdFx0XHRcdFx0Ly8gSWdub3JlIGFsbCBvdGhlciBuby1vcCBzaG93L2hpZGUgZGF0YVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0b3JpZ1twcm9wXSA9IGRhdGFTaG93ICYmIGRhdGFTaG93W3Byb3BdIHx8IGpRdWVyeS5zdHlsZShlbGVtLCBwcm9wKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBCYWlsIG91dCBpZiB0aGlzIGlzIGEgbm8tb3AgbGlrZSAuaGlkZSgpLmhpZGUoKVxuXHRcdHByb3BUd2VlbiA9ICFqUXVlcnkuaXNFbXB0eU9iamVjdChwcm9wcyk7XG5cdFx0aWYgKCFwcm9wVHdlZW4gJiYgalF1ZXJ5LmlzRW1wdHlPYmplY3Qob3JpZykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBSZXN0cmljdCBcIm92ZXJmbG93XCIgYW5kIFwiZGlzcGxheVwiIHN0eWxlcyBkdXJpbmcgYm94IGFuaW1hdGlvbnNcblx0XHRpZiAoaXNCb3ggJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSkge1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSwgRWRnZSAxMiAtIDE1XG5cdFx0XHQvLyBSZWNvcmQgYWxsIDMgb3ZlcmZsb3cgYXR0cmlidXRlcyBiZWNhdXNlIElFIGRvZXMgbm90IGluZmVyIHRoZSBzaG9ydGhhbmRcblx0XHRcdC8vIGZyb20gaWRlbnRpY2FsbHktdmFsdWVkIG92ZXJmbG93WCBhbmQgb3ZlcmZsb3dZIGFuZCBFZGdlIGp1c3QgbWlycm9yc1xuXHRcdFx0Ly8gdGhlIG92ZXJmbG93WCB2YWx1ZSB0aGVyZS5cblx0XHRcdG9wdHMub3ZlcmZsb3cgPSBbc3R5bGUub3ZlcmZsb3csIHN0eWxlLm92ZXJmbG93WCwgc3R5bGUub3ZlcmZsb3dZXTtcblxuXHRcdFx0Ly8gSWRlbnRpZnkgYSBkaXNwbGF5IHR5cGUsIHByZWZlcnJpbmcgb2xkIHNob3cvaGlkZSBkYXRhIG92ZXIgdGhlIENTUyBjYXNjYWRlXG5cdFx0XHRyZXN0b3JlRGlzcGxheSA9IGRhdGFTaG93ICYmIGRhdGFTaG93LmRpc3BsYXk7XG5cdFx0XHRpZiAocmVzdG9yZURpc3BsYXkgPT0gbnVsbCkge1xuXHRcdFx0XHRyZXN0b3JlRGlzcGxheSA9IGRhdGFQcml2LmdldChlbGVtLCBcImRpc3BsYXlcIik7XG5cdFx0XHR9XG5cdFx0XHRkaXNwbGF5ID0galF1ZXJ5LmNzcyhlbGVtLCBcImRpc3BsYXlcIik7XG5cdFx0XHRpZiAoZGlzcGxheSA9PT0gXCJub25lXCIpIHtcblx0XHRcdFx0aWYgKHJlc3RvcmVEaXNwbGF5KSB7XG5cdFx0XHRcdFx0ZGlzcGxheSA9IHJlc3RvcmVEaXNwbGF5O1xuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0Ly8gR2V0IG5vbmVtcHR5IHZhbHVlKHMpIGJ5IHRlbXBvcmFyaWx5IGZvcmNpbmcgdmlzaWJpbGl0eVxuXHRcdFx0XHRcdHNob3dIaWRlKFtlbGVtXSwgdHJ1ZSk7XG5cdFx0XHRcdFx0cmVzdG9yZURpc3BsYXkgPSBlbGVtLnN0eWxlLmRpc3BsYXkgfHwgcmVzdG9yZURpc3BsYXk7XG5cdFx0XHRcdFx0ZGlzcGxheSA9IGpRdWVyeS5jc3MoZWxlbSwgXCJkaXNwbGF5XCIpO1xuXHRcdFx0XHRcdHNob3dIaWRlKFtlbGVtXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gQW5pbWF0ZSBpbmxpbmUgZWxlbWVudHMgYXMgaW5saW5lLWJsb2NrXG5cdFx0XHRpZiAoZGlzcGxheSA9PT0gXCJpbmxpbmVcIiB8fCBkaXNwbGF5ID09PSBcImlubGluZS1ibG9ja1wiICYmIHJlc3RvcmVEaXNwbGF5ICE9IG51bGwpIHtcblx0XHRcdFx0aWYgKGpRdWVyeS5jc3MoZWxlbSwgXCJmbG9hdFwiKSA9PT0gXCJub25lXCIpIHtcblxuXHRcdFx0XHRcdC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIGRpc3BsYXkgdmFsdWUgYXQgdGhlIGVuZCBvZiBwdXJlIHNob3cvaGlkZSBhbmltYXRpb25zXG5cdFx0XHRcdFx0aWYgKCFwcm9wVHdlZW4pIHtcblx0XHRcdFx0XHRcdGFuaW0uZG9uZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdHN0eWxlLmRpc3BsYXkgPSByZXN0b3JlRGlzcGxheTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0aWYgKHJlc3RvcmVEaXNwbGF5ID09IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheSA9IHN0eWxlLmRpc3BsYXk7XG5cdFx0XHRcdFx0XHRcdHJlc3RvcmVEaXNwbGF5ID0gZGlzcGxheSA9PT0gXCJub25lXCIgPyBcIlwiIDogZGlzcGxheTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAob3B0cy5vdmVyZmxvdykge1xuXHRcdFx0c3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXHRcdFx0YW5pbS5hbHdheXMoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzdHlsZS5vdmVyZmxvdyA9IG9wdHMub3ZlcmZsb3dbMF07XG5cdFx0XHRcdHN0eWxlLm92ZXJmbG93WCA9IG9wdHMub3ZlcmZsb3dbMV07XG5cdFx0XHRcdHN0eWxlLm92ZXJmbG93WSA9IG9wdHMub3ZlcmZsb3dbMl07XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvLyBJbXBsZW1lbnQgc2hvdy9oaWRlIGFuaW1hdGlvbnNcblx0XHRwcm9wVHdlZW4gPSBmYWxzZTtcblx0XHRmb3IgKHByb3AgaW4gb3JpZykge1xuXG5cdFx0XHQvLyBHZW5lcmFsIHNob3cvaGlkZSBzZXR1cCBmb3IgdGhpcyBlbGVtZW50IGFuaW1hdGlvblxuXHRcdFx0aWYgKCFwcm9wVHdlZW4pIHtcblx0XHRcdFx0aWYgKGRhdGFTaG93KSB7XG5cdFx0XHRcdFx0aWYgKFwiaGlkZGVuXCIgaW4gZGF0YVNob3cpIHtcblx0XHRcdFx0XHRcdGhpZGRlbiA9IGRhdGFTaG93LmhpZGRlbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGF0YVNob3cgPSBkYXRhUHJpdi5hY2Nlc3MoZWxlbSwgXCJmeHNob3dcIiwgeyBkaXNwbGF5OiByZXN0b3JlRGlzcGxheSB9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFN0b3JlIGhpZGRlbi92aXNpYmxlIGZvciB0b2dnbGUgc28gYC5zdG9wKCkudG9nZ2xlKClgIFwicmV2ZXJzZXNcIlxuXHRcdFx0XHRpZiAodG9nZ2xlKSB7XG5cdFx0XHRcdFx0ZGF0YVNob3cuaGlkZGVuID0gIWhpZGRlbjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFNob3cgZWxlbWVudHMgYmVmb3JlIGFuaW1hdGluZyB0aGVtXG5cdFx0XHRcdGlmIChoaWRkZW4pIHtcblx0XHRcdFx0XHRzaG93SGlkZShbZWxlbV0sIHRydWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyogZXNsaW50LWRpc2FibGUgbm8tbG9vcC1mdW5jICovXG5cblx0XHRcdFx0YW5pbS5kb25lKGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRcdC8qIGVzbGludC1lbmFibGUgbm8tbG9vcC1mdW5jICovXG5cblx0XHRcdFx0XHQvLyBUaGUgZmluYWwgc3RlcCBvZiBhIFwiaGlkZVwiIGFuaW1hdGlvbiBpcyBhY3R1YWxseSBoaWRpbmcgdGhlIGVsZW1lbnRcblx0XHRcdFx0XHRpZiAoIWhpZGRlbikge1xuXHRcdFx0XHRcdFx0c2hvd0hpZGUoW2VsZW1dKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGF0YVByaXYucmVtb3ZlKGVsZW0sIFwiZnhzaG93XCIpO1xuXHRcdFx0XHRcdGZvciAocHJvcCBpbiBvcmlnKSB7XG5cdFx0XHRcdFx0XHRqUXVlcnkuc3R5bGUoZWxlbSwgcHJvcCwgb3JpZ1twcm9wXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUGVyLXByb3BlcnR5IHNldHVwXG5cdFx0XHRwcm9wVHdlZW4gPSBjcmVhdGVUd2VlbihoaWRkZW4gPyBkYXRhU2hvd1twcm9wXSA6IDAsIHByb3AsIGFuaW0pO1xuXHRcdFx0aWYgKCEocHJvcCBpbiBkYXRhU2hvdykpIHtcblx0XHRcdFx0ZGF0YVNob3dbcHJvcF0gPSBwcm9wVHdlZW4uc3RhcnQ7XG5cdFx0XHRcdGlmIChoaWRkZW4pIHtcblx0XHRcdFx0XHRwcm9wVHdlZW4uZW5kID0gcHJvcFR3ZWVuLnN0YXJ0O1xuXHRcdFx0XHRcdHByb3BUd2Vlbi5zdGFydCA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBwcm9wRmlsdGVyKHByb3BzLCBzcGVjaWFsRWFzaW5nKSB7XG5cdFx0dmFyIGluZGV4LCBuYW1lLCBlYXNpbmcsIHZhbHVlLCBob29rcztcblxuXHRcdC8vIGNhbWVsQ2FzZSwgc3BlY2lhbEVhc2luZyBhbmQgZXhwYW5kIGNzc0hvb2sgcGFzc1xuXHRcdGZvciAoaW5kZXggaW4gcHJvcHMpIHtcblx0XHRcdG5hbWUgPSBjYW1lbENhc2UoaW5kZXgpO1xuXHRcdFx0ZWFzaW5nID0gc3BlY2lhbEVhc2luZ1tuYW1lXTtcblx0XHRcdHZhbHVlID0gcHJvcHNbaW5kZXhdO1xuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRcdGVhc2luZyA9IHZhbHVlWzFdO1xuXHRcdFx0XHR2YWx1ZSA9IHByb3BzW2luZGV4XSA9IHZhbHVlWzBdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaW5kZXggIT09IG5hbWUpIHtcblx0XHRcdFx0cHJvcHNbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdFx0ZGVsZXRlIHByb3BzW2luZGV4XTtcblx0XHRcdH1cblxuXHRcdFx0aG9va3MgPSBqUXVlcnkuY3NzSG9va3NbbmFtZV07XG5cdFx0XHRpZiAoaG9va3MgJiYgXCJleHBhbmRcIiBpbiBob29rcykge1xuXHRcdFx0XHR2YWx1ZSA9IGhvb2tzLmV4cGFuZCh2YWx1ZSk7XG5cdFx0XHRcdGRlbGV0ZSBwcm9wc1tuYW1lXTtcblxuXHRcdFx0XHQvLyBOb3QgcXVpdGUgJC5leHRlbmQsIHRoaXMgd29uJ3Qgb3ZlcndyaXRlIGV4aXN0aW5nIGtleXMuXG5cdFx0XHRcdC8vIFJldXNpbmcgJ2luZGV4JyBiZWNhdXNlIHdlIGhhdmUgdGhlIGNvcnJlY3QgXCJuYW1lXCJcblx0XHRcdFx0Zm9yIChpbmRleCBpbiB2YWx1ZSkge1xuXHRcdFx0XHRcdGlmICghKGluZGV4IGluIHByb3BzKSkge1xuXHRcdFx0XHRcdFx0cHJvcHNbaW5kZXhdID0gdmFsdWVbaW5kZXhdO1xuXHRcdFx0XHRcdFx0c3BlY2lhbEVhc2luZ1tpbmRleF0gPSBlYXNpbmc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzcGVjaWFsRWFzaW5nW25hbWVdID0gZWFzaW5nO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIEFuaW1hdGlvbihlbGVtLCBwcm9wZXJ0aWVzLCBvcHRpb25zKSB7XG5cdFx0dmFyIHJlc3VsdCxcblx0XHQgICAgc3RvcHBlZCxcblx0XHQgICAgaW5kZXggPSAwLFxuXHRcdCAgICBsZW5ndGggPSBBbmltYXRpb24ucHJlZmlsdGVycy5sZW5ndGgsXG5cdFx0ICAgIGRlZmVycmVkID0galF1ZXJ5LkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Ly8gRG9uJ3QgbWF0Y2ggZWxlbSBpbiB0aGUgOmFuaW1hdGVkIHNlbGVjdG9yXG5cdFx0XHRkZWxldGUgdGljay5lbGVtO1xuXHRcdH0pLFxuXHRcdCAgICB0aWNrID0gZnVuY3Rpb24gdGljaygpIHtcblx0XHRcdGlmIChzdG9wcGVkKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHZhciBjdXJyZW50VGltZSA9IGZ4Tm93IHx8IGNyZWF0ZUZ4Tm93KCksXG5cdFx0XHQgICAgcmVtYWluaW5nID0gTWF0aC5tYXgoMCwgYW5pbWF0aW9uLnN0YXJ0VGltZSArIGFuaW1hdGlvbi5kdXJhdGlvbiAtIGN1cnJlbnRUaW1lKSxcblxuXG5cdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDIuMyBvbmx5XG5cdFx0XHQvLyBBcmNoYWljIGNyYXNoIGJ1ZyB3b24ndCBhbGxvdyB1cyB0byB1c2UgYDEgLSAoIDAuNSB8fCAwIClgICgjMTI0OTcpXG5cdFx0XHR0ZW1wID0gcmVtYWluaW5nIC8gYW5pbWF0aW9uLmR1cmF0aW9uIHx8IDAsXG5cdFx0XHQgICAgcGVyY2VudCA9IDEgLSB0ZW1wLFxuXHRcdFx0ICAgIGluZGV4ID0gMCxcblx0XHRcdCAgICBsZW5ndGggPSBhbmltYXRpb24udHdlZW5zLmxlbmd0aDtcblxuXHRcdFx0Zm9yICg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRcdGFuaW1hdGlvbi50d2VlbnNbaW5kZXhdLnJ1bihwZXJjZW50KTtcblx0XHRcdH1cblxuXHRcdFx0ZGVmZXJyZWQubm90aWZ5V2l0aChlbGVtLCBbYW5pbWF0aW9uLCBwZXJjZW50LCByZW1haW5pbmddKTtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBtb3JlIHRvIGRvLCB5aWVsZFxuXHRcdFx0aWYgKHBlcmNlbnQgPCAxICYmIGxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gcmVtYWluaW5nO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGlzIHdhcyBhbiBlbXB0eSBhbmltYXRpb24sIHN5bnRoZXNpemUgYSBmaW5hbCBwcm9ncmVzcyBub3RpZmljYXRpb25cblx0XHRcdGlmICghbGVuZ3RoKSB7XG5cdFx0XHRcdGRlZmVycmVkLm5vdGlmeVdpdGgoZWxlbSwgW2FuaW1hdGlvbiwgMSwgMF0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZXNvbHZlIHRoZSBhbmltYXRpb24gYW5kIHJlcG9ydCBpdHMgY29uY2x1c2lvblxuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZVdpdGgoZWxlbSwgW2FuaW1hdGlvbl0pO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cdFx0ICAgIGFuaW1hdGlvbiA9IGRlZmVycmVkLnByb21pc2Uoe1xuXHRcdFx0ZWxlbTogZWxlbSxcblx0XHRcdHByb3BzOiBqUXVlcnkuZXh0ZW5kKHt9LCBwcm9wZXJ0aWVzKSxcblx0XHRcdG9wdHM6IGpRdWVyeS5leHRlbmQodHJ1ZSwge1xuXHRcdFx0XHRzcGVjaWFsRWFzaW5nOiB7fSxcblx0XHRcdFx0ZWFzaW5nOiBqUXVlcnkuZWFzaW5nLl9kZWZhdWx0XG5cdFx0XHR9LCBvcHRpb25zKSxcblx0XHRcdG9yaWdpbmFsUHJvcGVydGllczogcHJvcGVydGllcyxcblx0XHRcdG9yaWdpbmFsT3B0aW9uczogb3B0aW9ucyxcblx0XHRcdHN0YXJ0VGltZTogZnhOb3cgfHwgY3JlYXRlRnhOb3coKSxcblx0XHRcdGR1cmF0aW9uOiBvcHRpb25zLmR1cmF0aW9uLFxuXHRcdFx0dHdlZW5zOiBbXSxcblx0XHRcdGNyZWF0ZVR3ZWVuOiBmdW5jdGlvbiBjcmVhdGVUd2Vlbihwcm9wLCBlbmQpIHtcblx0XHRcdFx0dmFyIHR3ZWVuID0galF1ZXJ5LlR3ZWVuKGVsZW0sIGFuaW1hdGlvbi5vcHRzLCBwcm9wLCBlbmQsIGFuaW1hdGlvbi5vcHRzLnNwZWNpYWxFYXNpbmdbcHJvcF0gfHwgYW5pbWF0aW9uLm9wdHMuZWFzaW5nKTtcblx0XHRcdFx0YW5pbWF0aW9uLnR3ZWVucy5wdXNoKHR3ZWVuKTtcblx0XHRcdFx0cmV0dXJuIHR3ZWVuO1xuXHRcdFx0fSxcblx0XHRcdHN0b3A6IGZ1bmN0aW9uIHN0b3AoZ290b0VuZCkge1xuXHRcdFx0XHR2YXIgaW5kZXggPSAwLFxuXG5cblx0XHRcdFx0Ly8gSWYgd2UgYXJlIGdvaW5nIHRvIHRoZSBlbmQsIHdlIHdhbnQgdG8gcnVuIGFsbCB0aGUgdHdlZW5zXG5cdFx0XHRcdC8vIG90aGVyd2lzZSB3ZSBza2lwIHRoaXMgcGFydFxuXHRcdFx0XHRsZW5ndGggPSBnb3RvRW5kID8gYW5pbWF0aW9uLnR3ZWVucy5sZW5ndGggOiAwO1xuXHRcdFx0XHRpZiAoc3RvcHBlZCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0b3BwZWQgPSB0cnVlO1xuXHRcdFx0XHRmb3IgKDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdFx0XHRhbmltYXRpb24udHdlZW5zW2luZGV4XS5ydW4oMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZXNvbHZlIHdoZW4gd2UgcGxheWVkIHRoZSBsYXN0IGZyYW1lOyBvdGhlcndpc2UsIHJlamVjdFxuXHRcdFx0XHRpZiAoZ290b0VuZCkge1xuXHRcdFx0XHRcdGRlZmVycmVkLm5vdGlmeVdpdGgoZWxlbSwgW2FuaW1hdGlvbiwgMSwgMF0pO1xuXHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKGVsZW0sIFthbmltYXRpb24sIGdvdG9FbmRdKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3RXaXRoKGVsZW0sIFthbmltYXRpb24sIGdvdG9FbmRdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHR9KSxcblx0XHQgICAgcHJvcHMgPSBhbmltYXRpb24ucHJvcHM7XG5cblx0XHRwcm9wRmlsdGVyKHByb3BzLCBhbmltYXRpb24ub3B0cy5zcGVjaWFsRWFzaW5nKTtcblxuXHRcdGZvciAoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0cmVzdWx0ID0gQW5pbWF0aW9uLnByZWZpbHRlcnNbaW5kZXhdLmNhbGwoYW5pbWF0aW9uLCBlbGVtLCBwcm9wcywgYW5pbWF0aW9uLm9wdHMpO1xuXHRcdFx0aWYgKHJlc3VsdCkge1xuXHRcdFx0XHRpZiAoaXNGdW5jdGlvbihyZXN1bHQuc3RvcCkpIHtcblx0XHRcdFx0XHRqUXVlcnkuX3F1ZXVlSG9va3MoYW5pbWF0aW9uLmVsZW0sIGFuaW1hdGlvbi5vcHRzLnF1ZXVlKS5zdG9wID0gcmVzdWx0LnN0b3AuYmluZChyZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0alF1ZXJ5Lm1hcChwcm9wcywgY3JlYXRlVHdlZW4sIGFuaW1hdGlvbik7XG5cblx0XHRpZiAoaXNGdW5jdGlvbihhbmltYXRpb24ub3B0cy5zdGFydCkpIHtcblx0XHRcdGFuaW1hdGlvbi5vcHRzLnN0YXJ0LmNhbGwoZWxlbSwgYW5pbWF0aW9uKTtcblx0XHR9XG5cblx0XHQvLyBBdHRhY2ggY2FsbGJhY2tzIGZyb20gb3B0aW9uc1xuXHRcdGFuaW1hdGlvbi5wcm9ncmVzcyhhbmltYXRpb24ub3B0cy5wcm9ncmVzcykuZG9uZShhbmltYXRpb24ub3B0cy5kb25lLCBhbmltYXRpb24ub3B0cy5jb21wbGV0ZSkuZmFpbChhbmltYXRpb24ub3B0cy5mYWlsKS5hbHdheXMoYW5pbWF0aW9uLm9wdHMuYWx3YXlzKTtcblxuXHRcdGpRdWVyeS5meC50aW1lcihqUXVlcnkuZXh0ZW5kKHRpY2ssIHtcblx0XHRcdGVsZW06IGVsZW0sXG5cdFx0XHRhbmltOiBhbmltYXRpb24sXG5cdFx0XHRxdWV1ZTogYW5pbWF0aW9uLm9wdHMucXVldWVcblx0XHR9KSk7XG5cblx0XHRyZXR1cm4gYW5pbWF0aW9uO1xuXHR9XG5cblx0alF1ZXJ5LkFuaW1hdGlvbiA9IGpRdWVyeS5leHRlbmQoQW5pbWF0aW9uLCB7XG5cblx0XHR0d2VlbmVyczoge1xuXHRcdFx0XCIqXCI6IFtmdW5jdGlvbiAocHJvcCwgdmFsdWUpIHtcblx0XHRcdFx0dmFyIHR3ZWVuID0gdGhpcy5jcmVhdGVUd2Vlbihwcm9wLCB2YWx1ZSk7XG5cdFx0XHRcdGFkanVzdENTUyh0d2Vlbi5lbGVtLCBwcm9wLCByY3NzTnVtLmV4ZWModmFsdWUpLCB0d2Vlbik7XG5cdFx0XHRcdHJldHVybiB0d2Vlbjtcblx0XHRcdH1dXG5cdFx0fSxcblxuXHRcdHR3ZWVuZXI6IGZ1bmN0aW9uIHR3ZWVuZXIocHJvcHMsIGNhbGxiYWNrKSB7XG5cdFx0XHRpZiAoaXNGdW5jdGlvbihwcm9wcykpIHtcblx0XHRcdFx0Y2FsbGJhY2sgPSBwcm9wcztcblx0XHRcdFx0cHJvcHMgPSBbXCIqXCJdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHJvcHMgPSBwcm9wcy5tYXRjaChybm90aHRtbHdoaXRlKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHByb3AsXG5cdFx0XHQgICAgaW5kZXggPSAwLFxuXHRcdFx0ICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuXHRcdFx0Zm9yICg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRcdHByb3AgPSBwcm9wc1tpbmRleF07XG5cdFx0XHRcdEFuaW1hdGlvbi50d2VlbmVyc1twcm9wXSA9IEFuaW1hdGlvbi50d2VlbmVyc1twcm9wXSB8fCBbXTtcblx0XHRcdFx0QW5pbWF0aW9uLnR3ZWVuZXJzW3Byb3BdLnVuc2hpZnQoY2FsbGJhY2spO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRwcmVmaWx0ZXJzOiBbZGVmYXVsdFByZWZpbHRlcl0sXG5cblx0XHRwcmVmaWx0ZXI6IGZ1bmN0aW9uIHByZWZpbHRlcihjYWxsYmFjaywgcHJlcGVuZCkge1xuXHRcdFx0aWYgKHByZXBlbmQpIHtcblx0XHRcdFx0QW5pbWF0aW9uLnByZWZpbHRlcnMudW5zaGlmdChjYWxsYmFjayk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRBbmltYXRpb24ucHJlZmlsdGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdGpRdWVyeS5zcGVlZCA9IGZ1bmN0aW9uIChzcGVlZCwgZWFzaW5nLCBmbikge1xuXHRcdHZhciBvcHQgPSBzcGVlZCAmJiAodHlwZW9mIHNwZWVkID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yoc3BlZWQpKSA9PT0gXCJvYmplY3RcIiA/IGpRdWVyeS5leHRlbmQoe30sIHNwZWVkKSA6IHtcblx0XHRcdGNvbXBsZXRlOiBmbiB8fCAhZm4gJiYgZWFzaW5nIHx8IGlzRnVuY3Rpb24oc3BlZWQpICYmIHNwZWVkLFxuXHRcdFx0ZHVyYXRpb246IHNwZWVkLFxuXHRcdFx0ZWFzaW5nOiBmbiAmJiBlYXNpbmcgfHwgZWFzaW5nICYmICFpc0Z1bmN0aW9uKGVhc2luZykgJiYgZWFzaW5nXG5cdFx0fTtcblxuXHRcdC8vIEdvIHRvIHRoZSBlbmQgc3RhdGUgaWYgZnggYXJlIG9mZlxuXHRcdGlmIChqUXVlcnkuZngub2ZmKSB7XG5cdFx0XHRvcHQuZHVyYXRpb24gPSAwO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodHlwZW9mIG9wdC5kdXJhdGlvbiAhPT0gXCJudW1iZXJcIikge1xuXHRcdFx0XHRpZiAob3B0LmR1cmF0aW9uIGluIGpRdWVyeS5meC5zcGVlZHMpIHtcblx0XHRcdFx0XHRvcHQuZHVyYXRpb24gPSBqUXVlcnkuZnguc3BlZWRzW29wdC5kdXJhdGlvbl07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0b3B0LmR1cmF0aW9uID0galF1ZXJ5LmZ4LnNwZWVkcy5fZGVmYXVsdDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIE5vcm1hbGl6ZSBvcHQucXVldWUgLSB0cnVlL3VuZGVmaW5lZC9udWxsIC0+IFwiZnhcIlxuXHRcdGlmIChvcHQucXVldWUgPT0gbnVsbCB8fCBvcHQucXVldWUgPT09IHRydWUpIHtcblx0XHRcdG9wdC5xdWV1ZSA9IFwiZnhcIjtcblx0XHR9XG5cblx0XHQvLyBRdWV1ZWluZ1xuXHRcdG9wdC5vbGQgPSBvcHQuY29tcGxldGU7XG5cblx0XHRvcHQuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoaXNGdW5jdGlvbihvcHQub2xkKSkge1xuXHRcdFx0XHRvcHQub2xkLmNhbGwodGhpcyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvcHQucXVldWUpIHtcblx0XHRcdFx0alF1ZXJ5LmRlcXVldWUodGhpcywgb3B0LnF1ZXVlKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmV0dXJuIG9wdDtcblx0fTtcblxuXHRqUXVlcnkuZm4uZXh0ZW5kKHtcblx0XHRmYWRlVG86IGZ1bmN0aW9uIGZhZGVUbyhzcGVlZCwgdG8sIGVhc2luZywgY2FsbGJhY2spIHtcblxuXHRcdFx0Ly8gU2hvdyBhbnkgaGlkZGVuIGVsZW1lbnRzIGFmdGVyIHNldHRpbmcgb3BhY2l0eSB0byAwXG5cdFx0XHRyZXR1cm4gdGhpcy5maWx0ZXIoaXNIaWRkZW5XaXRoaW5UcmVlKS5jc3MoXCJvcGFjaXR5XCIsIDApLnNob3coKVxuXG5cdFx0XHQvLyBBbmltYXRlIHRvIHRoZSB2YWx1ZSBzcGVjaWZpZWRcblx0XHRcdC5lbmQoKS5hbmltYXRlKHsgb3BhY2l0eTogdG8gfSwgc3BlZWQsIGVhc2luZywgY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0YW5pbWF0ZTogZnVuY3Rpb24gYW5pbWF0ZShwcm9wLCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjaykge1xuXHRcdFx0dmFyIGVtcHR5ID0galF1ZXJ5LmlzRW1wdHlPYmplY3QocHJvcCksXG5cdFx0XHQgICAgb3B0YWxsID0galF1ZXJ5LnNwZWVkKHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrKSxcblx0XHRcdCAgICBkb0FuaW1hdGlvbiA9IGZ1bmN0aW9uIGRvQW5pbWF0aW9uKCkge1xuXG5cdFx0XHRcdC8vIE9wZXJhdGUgb24gYSBjb3B5IG9mIHByb3Agc28gcGVyLXByb3BlcnR5IGVhc2luZyB3b24ndCBiZSBsb3N0XG5cdFx0XHRcdHZhciBhbmltID0gQW5pbWF0aW9uKHRoaXMsIGpRdWVyeS5leHRlbmQoe30sIHByb3ApLCBvcHRhbGwpO1xuXG5cdFx0XHRcdC8vIEVtcHR5IGFuaW1hdGlvbnMsIG9yIGZpbmlzaGluZyByZXNvbHZlcyBpbW1lZGlhdGVseVxuXHRcdFx0XHRpZiAoZW1wdHkgfHwgZGF0YVByaXYuZ2V0KHRoaXMsIFwiZmluaXNoXCIpKSB7XG5cdFx0XHRcdFx0YW5pbS5zdG9wKHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0ZG9BbmltYXRpb24uZmluaXNoID0gZG9BbmltYXRpb247XG5cblx0XHRcdHJldHVybiBlbXB0eSB8fCBvcHRhbGwucXVldWUgPT09IGZhbHNlID8gdGhpcy5lYWNoKGRvQW5pbWF0aW9uKSA6IHRoaXMucXVldWUob3B0YWxsLnF1ZXVlLCBkb0FuaW1hdGlvbik7XG5cdFx0fSxcblx0XHRzdG9wOiBmdW5jdGlvbiBzdG9wKHR5cGUsIGNsZWFyUXVldWUsIGdvdG9FbmQpIHtcblx0XHRcdHZhciBzdG9wUXVldWUgPSBmdW5jdGlvbiBzdG9wUXVldWUoaG9va3MpIHtcblx0XHRcdFx0dmFyIHN0b3AgPSBob29rcy5zdG9wO1xuXHRcdFx0XHRkZWxldGUgaG9va3Muc3RvcDtcblx0XHRcdFx0c3RvcChnb3RvRW5kKTtcblx0XHRcdH07XG5cblx0XHRcdGlmICh0eXBlb2YgdHlwZSAhPT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRnb3RvRW5kID0gY2xlYXJRdWV1ZTtcblx0XHRcdFx0Y2xlYXJRdWV1ZSA9IHR5cGU7XG5cdFx0XHRcdHR5cGUgPSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY2xlYXJRdWV1ZSAmJiB0eXBlICE9PSBmYWxzZSkge1xuXHRcdFx0XHR0aGlzLnF1ZXVlKHR5cGUgfHwgXCJmeFwiLCBbXSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgZGVxdWV1ZSA9IHRydWUsXG5cdFx0XHRcdCAgICBpbmRleCA9IHR5cGUgIT0gbnVsbCAmJiB0eXBlICsgXCJxdWV1ZUhvb2tzXCIsXG5cdFx0XHRcdCAgICB0aW1lcnMgPSBqUXVlcnkudGltZXJzLFxuXHRcdFx0XHQgICAgZGF0YSA9IGRhdGFQcml2LmdldCh0aGlzKTtcblxuXHRcdFx0XHRpZiAoaW5kZXgpIHtcblx0XHRcdFx0XHRpZiAoZGF0YVtpbmRleF0gJiYgZGF0YVtpbmRleF0uc3RvcCkge1xuXHRcdFx0XHRcdFx0c3RvcFF1ZXVlKGRhdGFbaW5kZXhdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9yIChpbmRleCBpbiBkYXRhKSB7XG5cdFx0XHRcdFx0XHRpZiAoZGF0YVtpbmRleF0gJiYgZGF0YVtpbmRleF0uc3RvcCAmJiBycnVuLnRlc3QoaW5kZXgpKSB7XG5cdFx0XHRcdFx0XHRcdHN0b3BRdWV1ZShkYXRhW2luZGV4XSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yIChpbmRleCA9IHRpbWVycy5sZW5ndGg7IGluZGV4LS07KSB7XG5cdFx0XHRcdFx0aWYgKHRpbWVyc1tpbmRleF0uZWxlbSA9PT0gdGhpcyAmJiAodHlwZSA9PSBudWxsIHx8IHRpbWVyc1tpbmRleF0ucXVldWUgPT09IHR5cGUpKSB7XG5cblx0XHRcdFx0XHRcdHRpbWVyc1tpbmRleF0uYW5pbS5zdG9wKGdvdG9FbmQpO1xuXHRcdFx0XHRcdFx0ZGVxdWV1ZSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0dGltZXJzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU3RhcnQgdGhlIG5leHQgaW4gdGhlIHF1ZXVlIGlmIHRoZSBsYXN0IHN0ZXAgd2Fzbid0IGZvcmNlZC5cblx0XHRcdFx0Ly8gVGltZXJzIGN1cnJlbnRseSB3aWxsIGNhbGwgdGhlaXIgY29tcGxldGUgY2FsbGJhY2tzLCB3aGljaFxuXHRcdFx0XHQvLyB3aWxsIGRlcXVldWUgYnV0IG9ubHkgaWYgdGhleSB3ZXJlIGdvdG9FbmQuXG5cdFx0XHRcdGlmIChkZXF1ZXVlIHx8ICFnb3RvRW5kKSB7XG5cdFx0XHRcdFx0alF1ZXJ5LmRlcXVldWUodGhpcywgdHlwZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0ZmluaXNoOiBmdW5jdGlvbiBmaW5pc2godHlwZSkge1xuXHRcdFx0aWYgKHR5cGUgIT09IGZhbHNlKSB7XG5cdFx0XHRcdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgaW5kZXgsXG5cdFx0XHRcdCAgICBkYXRhID0gZGF0YVByaXYuZ2V0KHRoaXMpLFxuXHRcdFx0XHQgICAgcXVldWUgPSBkYXRhW3R5cGUgKyBcInF1ZXVlXCJdLFxuXHRcdFx0XHQgICAgaG9va3MgPSBkYXRhW3R5cGUgKyBcInF1ZXVlSG9va3NcIl0sXG5cdFx0XHRcdCAgICB0aW1lcnMgPSBqUXVlcnkudGltZXJzLFxuXHRcdFx0XHQgICAgbGVuZ3RoID0gcXVldWUgPyBxdWV1ZS5sZW5ndGggOiAwO1xuXG5cdFx0XHRcdC8vIEVuYWJsZSBmaW5pc2hpbmcgZmxhZyBvbiBwcml2YXRlIGRhdGFcblx0XHRcdFx0ZGF0YS5maW5pc2ggPSB0cnVlO1xuXG5cdFx0XHRcdC8vIEVtcHR5IHRoZSBxdWV1ZSBmaXJzdFxuXHRcdFx0XHRqUXVlcnkucXVldWUodGhpcywgdHlwZSwgW10pO1xuXG5cdFx0XHRcdGlmIChob29rcyAmJiBob29rcy5zdG9wKSB7XG5cdFx0XHRcdFx0aG9va3Muc3RvcC5jYWxsKHRoaXMsIHRydWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gTG9vayBmb3IgYW55IGFjdGl2ZSBhbmltYXRpb25zLCBhbmQgZmluaXNoIHRoZW1cblx0XHRcdFx0Zm9yIChpbmRleCA9IHRpbWVycy5sZW5ndGg7IGluZGV4LS07KSB7XG5cdFx0XHRcdFx0aWYgKHRpbWVyc1tpbmRleF0uZWxlbSA9PT0gdGhpcyAmJiB0aW1lcnNbaW5kZXhdLnF1ZXVlID09PSB0eXBlKSB7XG5cdFx0XHRcdFx0XHR0aW1lcnNbaW5kZXhdLmFuaW0uc3RvcCh0cnVlKTtcblx0XHRcdFx0XHRcdHRpbWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIExvb2sgZm9yIGFueSBhbmltYXRpb25zIGluIHRoZSBvbGQgcXVldWUgYW5kIGZpbmlzaCB0aGVtXG5cdFx0XHRcdGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0XHRcdGlmIChxdWV1ZVtpbmRleF0gJiYgcXVldWVbaW5kZXhdLmZpbmlzaCkge1xuXHRcdFx0XHRcdFx0cXVldWVbaW5kZXhdLmZpbmlzaC5jYWxsKHRoaXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFR1cm4gb2ZmIGZpbmlzaGluZyBmbGFnXG5cdFx0XHRcdGRlbGV0ZSBkYXRhLmZpbmlzaDtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG5cblx0alF1ZXJ5LmVhY2goW1widG9nZ2xlXCIsIFwic2hvd1wiLCBcImhpZGVcIl0sIGZ1bmN0aW9uIChpLCBuYW1lKSB7XG5cdFx0dmFyIGNzc0ZuID0galF1ZXJ5LmZuW25hbWVdO1xuXHRcdGpRdWVyeS5mbltuYW1lXSA9IGZ1bmN0aW9uIChzcGVlZCwgZWFzaW5nLCBjYWxsYmFjaykge1xuXHRcdFx0cmV0dXJuIHNwZWVkID09IG51bGwgfHwgdHlwZW9mIHNwZWVkID09PSBcImJvb2xlYW5cIiA/IGNzc0ZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiB0aGlzLmFuaW1hdGUoZ2VuRngobmFtZSwgdHJ1ZSksIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrKTtcblx0XHR9O1xuXHR9KTtcblxuXHQvLyBHZW5lcmF0ZSBzaG9ydGN1dHMgZm9yIGN1c3RvbSBhbmltYXRpb25zXG5cdGpRdWVyeS5lYWNoKHtcblx0XHRzbGlkZURvd246IGdlbkZ4KFwic2hvd1wiKSxcblx0XHRzbGlkZVVwOiBnZW5GeChcImhpZGVcIiksXG5cdFx0c2xpZGVUb2dnbGU6IGdlbkZ4KFwidG9nZ2xlXCIpLFxuXHRcdGZhZGVJbjogeyBvcGFjaXR5OiBcInNob3dcIiB9LFxuXHRcdGZhZGVPdXQ6IHsgb3BhY2l0eTogXCJoaWRlXCIgfSxcblx0XHRmYWRlVG9nZ2xlOiB7IG9wYWNpdHk6IFwidG9nZ2xlXCIgfVxuXHR9LCBmdW5jdGlvbiAobmFtZSwgcHJvcHMpIHtcblx0XHRqUXVlcnkuZm5bbmFtZV0gPSBmdW5jdGlvbiAoc3BlZWQsIGVhc2luZywgY2FsbGJhY2spIHtcblx0XHRcdHJldHVybiB0aGlzLmFuaW1hdGUocHJvcHMsIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrKTtcblx0XHR9O1xuXHR9KTtcblxuXHRqUXVlcnkudGltZXJzID0gW107XG5cdGpRdWVyeS5meC50aWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdHZhciB0aW1lcixcblx0XHQgICAgaSA9IDAsXG5cdFx0ICAgIHRpbWVycyA9IGpRdWVyeS50aW1lcnM7XG5cblx0XHRmeE5vdyA9IERhdGUubm93KCk7XG5cblx0XHRmb3IgKDsgaSA8IHRpbWVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dGltZXIgPSB0aW1lcnNbaV07XG5cblx0XHRcdC8vIFJ1biB0aGUgdGltZXIgYW5kIHNhZmVseSByZW1vdmUgaXQgd2hlbiBkb25lIChhbGxvd2luZyBmb3IgZXh0ZXJuYWwgcmVtb3ZhbClcblx0XHRcdGlmICghdGltZXIoKSAmJiB0aW1lcnNbaV0gPT09IHRpbWVyKSB7XG5cdFx0XHRcdHRpbWVycy5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIXRpbWVycy5sZW5ndGgpIHtcblx0XHRcdGpRdWVyeS5meC5zdG9wKCk7XG5cdFx0fVxuXHRcdGZ4Tm93ID0gdW5kZWZpbmVkO1xuXHR9O1xuXG5cdGpRdWVyeS5meC50aW1lciA9IGZ1bmN0aW9uICh0aW1lcikge1xuXHRcdGpRdWVyeS50aW1lcnMucHVzaCh0aW1lcik7XG5cdFx0alF1ZXJ5LmZ4LnN0YXJ0KCk7XG5cdH07XG5cblx0alF1ZXJ5LmZ4LmludGVydmFsID0gMTM7XG5cdGpRdWVyeS5meC5zdGFydCA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoaW5Qcm9ncmVzcykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGluUHJvZ3Jlc3MgPSB0cnVlO1xuXHRcdHNjaGVkdWxlKCk7XG5cdH07XG5cblx0alF1ZXJ5LmZ4LnN0b3AgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aW5Qcm9ncmVzcyA9IG51bGw7XG5cdH07XG5cblx0alF1ZXJ5LmZ4LnNwZWVkcyA9IHtcblx0XHRzbG93OiA2MDAsXG5cdFx0ZmFzdDogMjAwLFxuXG5cdFx0Ly8gRGVmYXVsdCBzcGVlZFxuXHRcdF9kZWZhdWx0OiA0MDBcblx0fTtcblxuXHQvLyBCYXNlZCBvZmYgb2YgdGhlIHBsdWdpbiBieSBDbGludCBIZWxmZXJzLCB3aXRoIHBlcm1pc3Npb24uXG5cdC8vIGh0dHBzOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDEwMDMyNDAxNDc0Ny9odHRwOi8vYmxpbmRzaWduYWxzLmNvbS9pbmRleC5waHAvMjAwOS8wNy9qcXVlcnktZGVsYXkvXG5cdGpRdWVyeS5mbi5kZWxheSA9IGZ1bmN0aW9uICh0aW1lLCB0eXBlKSB7XG5cdFx0dGltZSA9IGpRdWVyeS5meCA/IGpRdWVyeS5meC5zcGVlZHNbdGltZV0gfHwgdGltZSA6IHRpbWU7XG5cdFx0dHlwZSA9IHR5cGUgfHwgXCJmeFwiO1xuXG5cdFx0cmV0dXJuIHRoaXMucXVldWUodHlwZSwgZnVuY3Rpb24gKG5leHQsIGhvb2tzKSB7XG5cdFx0XHR2YXIgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KG5leHQsIHRpbWUpO1xuXHRcdFx0aG9va3Muc3RvcCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0d2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHRcdH07XG5cdFx0fSk7XG5cdH07XG5cblx0KGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG5cdFx0ICAgIHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksXG5cdFx0ICAgIG9wdCA9IHNlbGVjdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKTtcblxuXHRcdGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XG5cblx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4zIG9ubHlcblx0XHQvLyBEZWZhdWx0IHZhbHVlIGZvciBhIGNoZWNrYm94IHNob3VsZCBiZSBcIm9uXCJcblx0XHRzdXBwb3J0LmNoZWNrT24gPSBpbnB1dC52YWx1ZSAhPT0gXCJcIjtcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHRcdC8vIE11c3QgYWNjZXNzIHNlbGVjdGVkSW5kZXggdG8gbWFrZSBkZWZhdWx0IG9wdGlvbnMgc2VsZWN0XG5cdFx0c3VwcG9ydC5vcHRTZWxlY3RlZCA9IG9wdC5zZWxlY3RlZDtcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHRcdC8vIEFuIGlucHV0IGxvc2VzIGl0cyB2YWx1ZSBhZnRlciBiZWNvbWluZyBhIHJhZGlvXG5cdFx0aW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0aW5wdXQudmFsdWUgPSBcInRcIjtcblx0XHRpbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuXHRcdHN1cHBvcnQucmFkaW9WYWx1ZSA9IGlucHV0LnZhbHVlID09PSBcInRcIjtcblx0fSkoKTtcblxuXHR2YXIgYm9vbEhvb2ssXG5cdCAgICBhdHRySGFuZGxlID0galF1ZXJ5LmV4cHIuYXR0ckhhbmRsZTtcblxuXHRqUXVlcnkuZm4uZXh0ZW5kKHtcblx0XHRhdHRyOiBmdW5jdGlvbiBhdHRyKG5hbWUsIHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gYWNjZXNzKHRoaXMsIGpRdWVyeS5hdHRyLCBuYW1lLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEpO1xuXHRcdH0sXG5cblx0XHRyZW1vdmVBdHRyOiBmdW5jdGlvbiByZW1vdmVBdHRyKG5hbWUpIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRqUXVlcnkucmVtb3ZlQXR0cih0aGlzLCBuYW1lKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG5cblx0alF1ZXJ5LmV4dGVuZCh7XG5cdFx0YXR0cjogZnVuY3Rpb24gYXR0cihlbGVtLCBuYW1lLCB2YWx1ZSkge1xuXHRcdFx0dmFyIHJldCxcblx0XHRcdCAgICBob29rcyxcblx0XHRcdCAgICBuVHlwZSA9IGVsZW0ubm9kZVR5cGU7XG5cblx0XHRcdC8vIERvbid0IGdldC9zZXQgYXR0cmlidXRlcyBvbiB0ZXh0LCBjb21tZW50IGFuZCBhdHRyaWJ1dGUgbm9kZXNcblx0XHRcdGlmIChuVHlwZSA9PT0gMyB8fCBuVHlwZSA9PT0gOCB8fCBuVHlwZSA9PT0gMikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZhbGxiYWNrIHRvIHByb3Agd2hlbiBhdHRyaWJ1dGVzIGFyZSBub3Qgc3VwcG9ydGVkXG5cdFx0XHRpZiAodHlwZW9mIGVsZW0uZ2V0QXR0cmlidXRlID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdHJldHVybiBqUXVlcnkucHJvcChlbGVtLCBuYW1lLCB2YWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEF0dHJpYnV0ZSBob29rcyBhcmUgZGV0ZXJtaW5lZCBieSB0aGUgbG93ZXJjYXNlIHZlcnNpb25cblx0XHRcdC8vIEdyYWIgbmVjZXNzYXJ5IGhvb2sgaWYgb25lIGlzIGRlZmluZWRcblx0XHRcdGlmIChuVHlwZSAhPT0gMSB8fCAhalF1ZXJ5LmlzWE1MRG9jKGVsZW0pKSB7XG5cdFx0XHRcdGhvb2tzID0galF1ZXJ5LmF0dHJIb29rc1tuYW1lLnRvTG93ZXJDYXNlKCldIHx8IChqUXVlcnkuZXhwci5tYXRjaC5ib29sLnRlc3QobmFtZSkgPyBib29sSG9vayA6IHVuZGVmaW5lZCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGpRdWVyeS5yZW1vdmVBdHRyKGVsZW0sIG5hbWUpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChob29rcyAmJiBcInNldFwiIGluIGhvb2tzICYmIChyZXQgPSBob29rcy5zZXQoZWxlbSwgdmFsdWUsIG5hbWUpKSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlICsgXCJcIik7XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MgJiYgKHJldCA9IGhvb2tzLmdldChlbGVtLCBuYW1lKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH1cblxuXHRcdFx0cmV0ID0galF1ZXJ5LmZpbmQuYXR0cihlbGVtLCBuYW1lKTtcblxuXHRcdFx0Ly8gTm9uLWV4aXN0ZW50IGF0dHJpYnV0ZXMgcmV0dXJuIG51bGwsIHdlIG5vcm1hbGl6ZSB0byB1bmRlZmluZWRcblx0XHRcdHJldHVybiByZXQgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IHJldDtcblx0XHR9LFxuXG5cdFx0YXR0ckhvb2tzOiB7XG5cdFx0XHR0eXBlOiB7XG5cdFx0XHRcdHNldDogZnVuY3Rpb24gc2V0KGVsZW0sIHZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKCFzdXBwb3J0LnJhZGlvVmFsdWUgJiYgdmFsdWUgPT09IFwicmFkaW9cIiAmJiBub2RlTmFtZShlbGVtLCBcImlucHV0XCIpKSB7XG5cdFx0XHRcdFx0XHR2YXIgdmFsID0gZWxlbS52YWx1ZTtcblx0XHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKFwidHlwZVwiLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHRpZiAodmFsKSB7XG5cdFx0XHRcdFx0XHRcdGVsZW0udmFsdWUgPSB2YWw7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHJlbW92ZUF0dHI6IGZ1bmN0aW9uIHJlbW92ZUF0dHIoZWxlbSwgdmFsdWUpIHtcblx0XHRcdHZhciBuYW1lLFxuXHRcdFx0ICAgIGkgPSAwLFxuXG5cblx0XHRcdC8vIEF0dHJpYnV0ZSBuYW1lcyBjYW4gY29udGFpbiBub24tSFRNTCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnNcblx0XHRcdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI2F0dHJpYnV0ZXMtMlxuXHRcdFx0YXR0ck5hbWVzID0gdmFsdWUgJiYgdmFsdWUubWF0Y2gocm5vdGh0bWx3aGl0ZSk7XG5cblx0XHRcdGlmIChhdHRyTmFtZXMgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSkge1xuXHRcdFx0XHR3aGlsZSAobmFtZSA9IGF0dHJOYW1lc1tpKytdKSB7XG5cdFx0XHRcdFx0ZWxlbS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdC8vIEhvb2tzIGZvciBib29sZWFuIGF0dHJpYnV0ZXNcblx0Ym9vbEhvb2sgPSB7XG5cdFx0c2V0OiBmdW5jdGlvbiBzZXQoZWxlbSwgdmFsdWUsIG5hbWUpIHtcblx0XHRcdGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcblxuXHRcdFx0XHQvLyBSZW1vdmUgYm9vbGVhbiBhdHRyaWJ1dGVzIHdoZW4gc2V0IHRvIGZhbHNlXG5cdFx0XHRcdGpRdWVyeS5yZW1vdmVBdHRyKGVsZW0sIG5hbWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUobmFtZSwgbmFtZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbmFtZTtcblx0XHR9XG5cdH07XG5cblx0alF1ZXJ5LmVhY2goalF1ZXJ5LmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksIGZ1bmN0aW9uIChpLCBuYW1lKSB7XG5cdFx0dmFyIGdldHRlciA9IGF0dHJIYW5kbGVbbmFtZV0gfHwgalF1ZXJ5LmZpbmQuYXR0cjtcblxuXHRcdGF0dHJIYW5kbGVbbmFtZV0gPSBmdW5jdGlvbiAoZWxlbSwgbmFtZSwgaXNYTUwpIHtcblx0XHRcdHZhciByZXQsXG5cdFx0XHQgICAgaGFuZGxlLFxuXHRcdFx0ICAgIGxvd2VyY2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRcdGlmICghaXNYTUwpIHtcblxuXHRcdFx0XHQvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wIGJ5IHRlbXBvcmFyaWx5IHJlbW92aW5nIHRoaXMgZnVuY3Rpb24gZnJvbSB0aGUgZ2V0dGVyXG5cdFx0XHRcdGhhbmRsZSA9IGF0dHJIYW5kbGVbbG93ZXJjYXNlTmFtZV07XG5cdFx0XHRcdGF0dHJIYW5kbGVbbG93ZXJjYXNlTmFtZV0gPSByZXQ7XG5cdFx0XHRcdHJldCA9IGdldHRlcihlbGVtLCBuYW1lLCBpc1hNTCkgIT0gbnVsbCA/IGxvd2VyY2FzZU5hbWUgOiBudWxsO1xuXHRcdFx0XHRhdHRySGFuZGxlW2xvd2VyY2FzZU5hbWVdID0gaGFuZGxlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9O1xuXHR9KTtcblxuXHR2YXIgcmZvY3VzYWJsZSA9IC9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksXG5cdCAgICByY2xpY2thYmxlID0gL14oPzphfGFyZWEpJC9pO1xuXG5cdGpRdWVyeS5mbi5leHRlbmQoe1xuXHRcdHByb3A6IGZ1bmN0aW9uIHByb3AobmFtZSwgdmFsdWUpIHtcblx0XHRcdHJldHVybiBhY2Nlc3ModGhpcywgalF1ZXJ5LnByb3AsIG5hbWUsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSk7XG5cdFx0fSxcblxuXHRcdHJlbW92ZVByb3A6IGZ1bmN0aW9uIHJlbW92ZVByb3AobmFtZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGRlbGV0ZSB0aGlzW2pRdWVyeS5wcm9wRml4W25hbWVdIHx8IG5hbWVdO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcblxuXHRqUXVlcnkuZXh0ZW5kKHtcblx0XHRwcm9wOiBmdW5jdGlvbiBwcm9wKGVsZW0sIG5hbWUsIHZhbHVlKSB7XG5cdFx0XHR2YXIgcmV0LFxuXHRcdFx0ICAgIGhvb2tzLFxuXHRcdFx0ICAgIG5UeXBlID0gZWxlbS5ub2RlVHlwZTtcblxuXHRcdFx0Ly8gRG9uJ3QgZ2V0L3NldCBwcm9wZXJ0aWVzIG9uIHRleHQsIGNvbW1lbnQgYW5kIGF0dHJpYnV0ZSBub2Rlc1xuXHRcdFx0aWYgKG5UeXBlID09PSAzIHx8IG5UeXBlID09PSA4IHx8IG5UeXBlID09PSAyKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG5UeXBlICE9PSAxIHx8ICFqUXVlcnkuaXNYTUxEb2MoZWxlbSkpIHtcblxuXHRcdFx0XHQvLyBGaXggbmFtZSBhbmQgYXR0YWNoIGhvb2tzXG5cdFx0XHRcdG5hbWUgPSBqUXVlcnkucHJvcEZpeFtuYW1lXSB8fCBuYW1lO1xuXHRcdFx0XHRob29rcyA9IGpRdWVyeS5wcm9wSG9va3NbbmFtZV07XG5cdFx0XHR9XG5cblx0XHRcdGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGlmIChob29rcyAmJiBcInNldFwiIGluIGhvb2tzICYmIChyZXQgPSBob29rcy5zZXQoZWxlbSwgdmFsdWUsIG5hbWUpKSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBlbGVtW25hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmIChyZXQgPSBob29rcy5nZXQoZWxlbSwgbmFtZSkpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBlbGVtW25hbWVdO1xuXHRcdH0sXG5cblx0XHRwcm9wSG9va3M6IHtcblx0XHRcdHRhYkluZGV4OiB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24gZ2V0KGVsZW0pIHtcblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExIG9ubHlcblx0XHRcdFx0XHQvLyBlbGVtLnRhYkluZGV4IGRvZXNuJ3QgYWx3YXlzIHJldHVybiB0aGVcblx0XHRcdFx0XHQvLyBjb3JyZWN0IHZhbHVlIHdoZW4gaXQgaGFzbid0IGJlZW4gZXhwbGljaXRseSBzZXRcblx0XHRcdFx0XHQvLyBodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxNDExMTYyMzMzNDcvaHR0cDovL2ZsdWlkcHJvamVjdC5vcmcvYmxvZy8yMDA4LzAxLzA5L2dldHRpbmctc2V0dGluZy1hbmQtcmVtb3ZpbmctdGFiaW5kZXgtdmFsdWVzLXdpdGgtamF2YXNjcmlwdC9cblx0XHRcdFx0XHQvLyBVc2UgcHJvcGVyIGF0dHJpYnV0ZSByZXRyaWV2YWwoIzEyMDcyKVxuXHRcdFx0XHRcdHZhciB0YWJpbmRleCA9IGpRdWVyeS5maW5kLmF0dHIoZWxlbSwgXCJ0YWJpbmRleFwiKTtcblxuXHRcdFx0XHRcdGlmICh0YWJpbmRleCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KHRhYmluZGV4LCAxMCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHJmb2N1c2FibGUudGVzdChlbGVtLm5vZGVOYW1lKSB8fCByY2xpY2thYmxlLnRlc3QoZWxlbS5ub2RlTmFtZSkgJiYgZWxlbS5ocmVmKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0cHJvcEZpeDoge1xuXHRcdFx0XCJmb3JcIjogXCJodG1sRm9yXCIsXG5cdFx0XHRcImNsYXNzXCI6IFwiY2xhc3NOYW1lXCJcblx0XHR9XG5cdH0pO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHQvLyBBY2Nlc3NpbmcgdGhlIHNlbGVjdGVkSW5kZXggcHJvcGVydHlcblx0Ly8gZm9yY2VzIHRoZSBicm93c2VyIHRvIHJlc3BlY3Qgc2V0dGluZyBzZWxlY3RlZFxuXHQvLyBvbiB0aGUgb3B0aW9uXG5cdC8vIFRoZSBnZXR0ZXIgZW5zdXJlcyBhIGRlZmF1bHQgb3B0aW9uIGlzIHNlbGVjdGVkXG5cdC8vIHdoZW4gaW4gYW4gb3B0Z3JvdXBcblx0Ly8gZXNsaW50IHJ1bGUgXCJuby11bnVzZWQtZXhwcmVzc2lvbnNcIiBpcyBkaXNhYmxlZCBmb3IgdGhpcyBjb2RlXG5cdC8vIHNpbmNlIGl0IGNvbnNpZGVycyBzdWNoIGFjY2Vzc2lvbnMgbm9vcFxuXHRpZiAoIXN1cHBvcnQub3B0U2VsZWN0ZWQpIHtcblx0XHRqUXVlcnkucHJvcEhvb2tzLnNlbGVjdGVkID0ge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiBnZXQoZWxlbSkge1xuXG5cdFx0XHRcdC8qIGVzbGludCBuby11bnVzZWQtZXhwcmVzc2lvbnM6IFwib2ZmXCIgKi9cblxuXHRcdFx0XHR2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuXHRcdFx0XHRpZiAocGFyZW50ICYmIHBhcmVudC5wYXJlbnROb2RlKSB7XG5cdFx0XHRcdFx0cGFyZW50LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uIHNldChlbGVtKSB7XG5cblx0XHRcdFx0LyogZXNsaW50IG5vLXVudXNlZC1leHByZXNzaW9uczogXCJvZmZcIiAqL1xuXG5cdFx0XHRcdHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG5cdFx0XHRcdGlmIChwYXJlbnQpIHtcblx0XHRcdFx0XHRwYXJlbnQuc2VsZWN0ZWRJbmRleDtcblxuXHRcdFx0XHRcdGlmIChwYXJlbnQucGFyZW50Tm9kZSkge1xuXHRcdFx0XHRcdFx0cGFyZW50LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0alF1ZXJ5LmVhY2goW1widGFiSW5kZXhcIiwgXCJyZWFkT25seVwiLCBcIm1heExlbmd0aFwiLCBcImNlbGxTcGFjaW5nXCIsIFwiY2VsbFBhZGRpbmdcIiwgXCJyb3dTcGFuXCIsIFwiY29sU3BhblwiLCBcInVzZU1hcFwiLCBcImZyYW1lQm9yZGVyXCIsIFwiY29udGVudEVkaXRhYmxlXCJdLCBmdW5jdGlvbiAoKSB7XG5cdFx0alF1ZXJ5LnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXSA9IHRoaXM7XG5cdH0pO1xuXG5cdC8vIFN0cmlwIGFuZCBjb2xsYXBzZSB3aGl0ZXNwYWNlIGFjY29yZGluZyB0byBIVE1MIHNwZWNcblx0Ly8gaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI3N0cmlwLWFuZC1jb2xsYXBzZS1hc2NpaS13aGl0ZXNwYWNlXG5cdGZ1bmN0aW9uIHN0cmlwQW5kQ29sbGFwc2UodmFsdWUpIHtcblx0XHR2YXIgdG9rZW5zID0gdmFsdWUubWF0Y2gocm5vdGh0bWx3aGl0ZSkgfHwgW107XG5cdFx0cmV0dXJuIHRva2Vucy5qb2luKFwiIFwiKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldENsYXNzKGVsZW0pIHtcblx0XHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUgJiYgZWxlbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2xhc3Nlc1RvQXJyYXkodmFsdWUpIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0cmV0dXJuIHZhbHVlLm1hdGNoKHJub3RodG1sd2hpdGUpIHx8IFtdO1xuXHRcdH1cblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRqUXVlcnkuZm4uZXh0ZW5kKHtcblx0XHRhZGRDbGFzczogZnVuY3Rpb24gYWRkQ2xhc3ModmFsdWUpIHtcblx0XHRcdHZhciBjbGFzc2VzLFxuXHRcdFx0ICAgIGVsZW0sXG5cdFx0XHQgICAgY3VyLFxuXHRcdFx0ICAgIGN1clZhbHVlLFxuXHRcdFx0ICAgIGNsYXp6LFxuXHRcdFx0ICAgIGosXG5cdFx0XHQgICAgZmluYWxWYWx1ZSxcblx0XHRcdCAgICBpID0gMDtcblxuXHRcdFx0aWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKGopIHtcblx0XHRcdFx0XHRqUXVlcnkodGhpcykuYWRkQ2xhc3ModmFsdWUuY2FsbCh0aGlzLCBqLCBnZXRDbGFzcyh0aGlzKSkpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Y2xhc3NlcyA9IGNsYXNzZXNUb0FycmF5KHZhbHVlKTtcblxuXHRcdFx0aWYgKGNsYXNzZXMubGVuZ3RoKSB7XG5cdFx0XHRcdHdoaWxlIChlbGVtID0gdGhpc1tpKytdKSB7XG5cdFx0XHRcdFx0Y3VyVmFsdWUgPSBnZXRDbGFzcyhlbGVtKTtcblx0XHRcdFx0XHRjdXIgPSBlbGVtLm5vZGVUeXBlID09PSAxICYmIFwiIFwiICsgc3RyaXBBbmRDb2xsYXBzZShjdXJWYWx1ZSkgKyBcIiBcIjtcblxuXHRcdFx0XHRcdGlmIChjdXIpIHtcblx0XHRcdFx0XHRcdGogPSAwO1xuXHRcdFx0XHRcdFx0d2hpbGUgKGNsYXp6ID0gY2xhc3Nlc1tqKytdKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChjdXIuaW5kZXhPZihcIiBcIiArIGNsYXp6ICsgXCIgXCIpIDwgMCkge1xuXHRcdFx0XHRcdFx0XHRcdGN1ciArPSBjbGF6eiArIFwiIFwiO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIE9ubHkgYXNzaWduIGlmIGRpZmZlcmVudCB0byBhdm9pZCB1bm5lZWRlZCByZW5kZXJpbmcuXG5cdFx0XHRcdFx0XHRmaW5hbFZhbHVlID0gc3RyaXBBbmRDb2xsYXBzZShjdXIpO1xuXHRcdFx0XHRcdFx0aWYgKGN1clZhbHVlICE9PSBmaW5hbFZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgZmluYWxWYWx1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cblx0XHRyZW1vdmVDbGFzczogZnVuY3Rpb24gcmVtb3ZlQ2xhc3ModmFsdWUpIHtcblx0XHRcdHZhciBjbGFzc2VzLFxuXHRcdFx0ICAgIGVsZW0sXG5cdFx0XHQgICAgY3VyLFxuXHRcdFx0ICAgIGN1clZhbHVlLFxuXHRcdFx0ICAgIGNsYXp6LFxuXHRcdFx0ICAgIGosXG5cdFx0XHQgICAgZmluYWxWYWx1ZSxcblx0XHRcdCAgICBpID0gMDtcblxuXHRcdFx0aWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKGopIHtcblx0XHRcdFx0XHRqUXVlcnkodGhpcykucmVtb3ZlQ2xhc3ModmFsdWUuY2FsbCh0aGlzLCBqLCBnZXRDbGFzcyh0aGlzKSkpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmF0dHIoXCJjbGFzc1wiLCBcIlwiKTtcblx0XHRcdH1cblxuXHRcdFx0Y2xhc3NlcyA9IGNsYXNzZXNUb0FycmF5KHZhbHVlKTtcblxuXHRcdFx0aWYgKGNsYXNzZXMubGVuZ3RoKSB7XG5cdFx0XHRcdHdoaWxlIChlbGVtID0gdGhpc1tpKytdKSB7XG5cdFx0XHRcdFx0Y3VyVmFsdWUgPSBnZXRDbGFzcyhlbGVtKTtcblxuXHRcdFx0XHRcdC8vIFRoaXMgZXhwcmVzc2lvbiBpcyBoZXJlIGZvciBiZXR0ZXIgY29tcHJlc3NpYmlsaXR5IChzZWUgYWRkQ2xhc3MpXG5cdFx0XHRcdFx0Y3VyID0gZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiBcIiBcIiArIHN0cmlwQW5kQ29sbGFwc2UoY3VyVmFsdWUpICsgXCIgXCI7XG5cblx0XHRcdFx0XHRpZiAoY3VyKSB7XG5cdFx0XHRcdFx0XHRqID0gMDtcblx0XHRcdFx0XHRcdHdoaWxlIChjbGF6eiA9IGNsYXNzZXNbaisrXSkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFJlbW92ZSAqYWxsKiBpbnN0YW5jZXNcblx0XHRcdFx0XHRcdFx0d2hpbGUgKGN1ci5pbmRleE9mKFwiIFwiICsgY2xhenogKyBcIiBcIikgPiAtMSkge1xuXHRcdFx0XHRcdFx0XHRcdGN1ciA9IGN1ci5yZXBsYWNlKFwiIFwiICsgY2xhenogKyBcIiBcIiwgXCIgXCIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIE9ubHkgYXNzaWduIGlmIGRpZmZlcmVudCB0byBhdm9pZCB1bm5lZWRlZCByZW5kZXJpbmcuXG5cdFx0XHRcdFx0XHRmaW5hbFZhbHVlID0gc3RyaXBBbmRDb2xsYXBzZShjdXIpO1xuXHRcdFx0XHRcdFx0aWYgKGN1clZhbHVlICE9PSBmaW5hbFZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgZmluYWxWYWx1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cblx0XHR0b2dnbGVDbGFzczogZnVuY3Rpb24gdG9nZ2xlQ2xhc3ModmFsdWUsIHN0YXRlVmFsKSB7XG5cdFx0XHR2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHZhbHVlKSxcblx0XHRcdCAgICBpc1ZhbGlkVmFsdWUgPSB0eXBlID09PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuXG5cdFx0XHRpZiAodHlwZW9mIHN0YXRlVmFsID09PSBcImJvb2xlYW5cIiAmJiBpc1ZhbGlkVmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIHN0YXRlVmFsID8gdGhpcy5hZGRDbGFzcyh2YWx1ZSkgOiB0aGlzLnJlbW92ZUNsYXNzKHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0XHRqUXVlcnkodGhpcykudG9nZ2xlQ2xhc3ModmFsdWUuY2FsbCh0aGlzLCBpLCBnZXRDbGFzcyh0aGlzKSwgc3RhdGVWYWwpLCBzdGF0ZVZhbCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIGNsYXNzTmFtZSwgaSwgc2VsZiwgY2xhc3NOYW1lcztcblxuXHRcdFx0XHRpZiAoaXNWYWxpZFZhbHVlKSB7XG5cblx0XHRcdFx0XHQvLyBUb2dnbGUgaW5kaXZpZHVhbCBjbGFzcyBuYW1lc1xuXHRcdFx0XHRcdGkgPSAwO1xuXHRcdFx0XHRcdHNlbGYgPSBqUXVlcnkodGhpcyk7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lcyA9IGNsYXNzZXNUb0FycmF5KHZhbHVlKTtcblxuXHRcdFx0XHRcdHdoaWxlIChjbGFzc05hbWUgPSBjbGFzc05hbWVzW2krK10pIHtcblxuXHRcdFx0XHRcdFx0Ly8gQ2hlY2sgZWFjaCBjbGFzc05hbWUgZ2l2ZW4sIHNwYWNlIHNlcGFyYXRlZCBsaXN0XG5cdFx0XHRcdFx0XHRpZiAoc2VsZi5oYXNDbGFzcyhjbGFzc05hbWUpKSB7XG5cdFx0XHRcdFx0XHRcdHNlbGYucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHNlbGYuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBUb2dnbGUgd2hvbGUgY2xhc3MgbmFtZVxuXHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdHlwZSA9PT0gXCJib29sZWFuXCIpIHtcblx0XHRcdFx0XHRjbGFzc05hbWUgPSBnZXRDbGFzcyh0aGlzKTtcblx0XHRcdFx0XHRpZiAoY2xhc3NOYW1lKSB7XG5cblx0XHRcdFx0XHRcdC8vIFN0b3JlIGNsYXNzTmFtZSBpZiBzZXRcblx0XHRcdFx0XHRcdGRhdGFQcml2LnNldCh0aGlzLCBcIl9fY2xhc3NOYW1lX19cIiwgY2xhc3NOYW1lKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBJZiB0aGUgZWxlbWVudCBoYXMgYSBjbGFzcyBuYW1lIG9yIGlmIHdlJ3JlIHBhc3NlZCBgZmFsc2VgLFxuXHRcdFx0XHRcdC8vIHRoZW4gcmVtb3ZlIHRoZSB3aG9sZSBjbGFzc25hbWUgKGlmIHRoZXJlIHdhcyBvbmUsIHRoZSBhYm92ZSBzYXZlZCBpdCkuXG5cdFx0XHRcdFx0Ly8gT3RoZXJ3aXNlIGJyaW5nIGJhY2sgd2hhdGV2ZXIgd2FzIHByZXZpb3VzbHkgc2F2ZWQgKGlmIGFueXRoaW5nKSxcblx0XHRcdFx0XHQvLyBmYWxsaW5nIGJhY2sgdG8gdGhlIGVtcHR5IHN0cmluZyBpZiBub3RoaW5nIHdhcyBzdG9yZWQuXG5cdFx0XHRcdFx0aWYgKHRoaXMuc2V0QXR0cmlidXRlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGNsYXNzTmFtZSB8fCB2YWx1ZSA9PT0gZmFsc2UgPyBcIlwiIDogZGF0YVByaXYuZ2V0KHRoaXMsIFwiX19jbGFzc05hbWVfX1wiKSB8fCBcIlwiKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRoYXNDbGFzczogZnVuY3Rpb24gaGFzQ2xhc3Moc2VsZWN0b3IpIHtcblx0XHRcdHZhciBjbGFzc05hbWUsXG5cdFx0XHQgICAgZWxlbSxcblx0XHRcdCAgICBpID0gMDtcblxuXHRcdFx0Y2xhc3NOYW1lID0gXCIgXCIgKyBzZWxlY3RvciArIFwiIFwiO1xuXHRcdFx0d2hpbGUgKGVsZW0gPSB0aGlzW2krK10pIHtcblx0XHRcdFx0aWYgKGVsZW0ubm9kZVR5cGUgPT09IDEgJiYgKFwiIFwiICsgc3RyaXBBbmRDb2xsYXBzZShnZXRDbGFzcyhlbGVtKSkgKyBcIiBcIikuaW5kZXhPZihjbGFzc05hbWUpID4gLTEpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9KTtcblxuXHR2YXIgcnJldHVybiA9IC9cXHIvZztcblxuXHRqUXVlcnkuZm4uZXh0ZW5kKHtcblx0XHR2YWw6IGZ1bmN0aW9uIHZhbCh2YWx1ZSkge1xuXHRcdFx0dmFyIGhvb2tzLFxuXHRcdFx0ICAgIHJldCxcblx0XHRcdCAgICB2YWx1ZUlzRnVuY3Rpb24sXG5cdFx0XHQgICAgZWxlbSA9IHRoaXNbMF07XG5cblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRpZiAoZWxlbSkge1xuXHRcdFx0XHRcdGhvb2tzID0galF1ZXJ5LnZhbEhvb2tzW2VsZW0udHlwZV0gfHwgalF1ZXJ5LnZhbEhvb2tzW2VsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKV07XG5cblx0XHRcdFx0XHRpZiAoaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyAmJiAocmV0ID0gaG9va3MuZ2V0KGVsZW0sIFwidmFsdWVcIikpICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0ID0gZWxlbS52YWx1ZTtcblxuXHRcdFx0XHRcdC8vIEhhbmRsZSBtb3N0IGNvbW1vbiBzdHJpbmcgY2FzZXNcblx0XHRcdFx0XHRpZiAodHlwZW9mIHJldCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJldC5yZXBsYWNlKHJyZXR1cm4sIFwiXCIpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIEhhbmRsZSBjYXNlcyB3aGVyZSB2YWx1ZSBpcyBudWxsL3VuZGVmIG9yIG51bWJlclxuXHRcdFx0XHRcdHJldHVybiByZXQgPT0gbnVsbCA/IFwiXCIgOiByZXQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhbHVlSXNGdW5jdGlvbiA9IGlzRnVuY3Rpb24odmFsdWUpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdHZhciB2YWw7XG5cblx0XHRcdFx0aWYgKHRoaXMubm9kZVR5cGUgIT09IDEpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodmFsdWVJc0Z1bmN0aW9uKSB7XG5cdFx0XHRcdFx0dmFsID0gdmFsdWUuY2FsbCh0aGlzLCBpLCBqUXVlcnkodGhpcykudmFsKCkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhbCA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gVHJlYXQgbnVsbC91bmRlZmluZWQgYXMgXCJcIjsgY29udmVydCBudW1iZXJzIHRvIHN0cmluZ1xuXHRcdFx0XHRpZiAodmFsID09IG51bGwpIHtcblx0XHRcdFx0XHR2YWwgPSBcIlwiO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpIHtcblx0XHRcdFx0XHR2YWwgKz0gXCJcIjtcblx0XHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcblx0XHRcdFx0XHR2YWwgPSBqUXVlcnkubWFwKHZhbCwgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWUgPT0gbnVsbCA/IFwiXCIgOiB2YWx1ZSArIFwiXCI7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRob29rcyA9IGpRdWVyeS52YWxIb29rc1t0aGlzLnR5cGVdIHx8IGpRdWVyeS52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldO1xuXG5cdFx0XHRcdC8vIElmIHNldCByZXR1cm5zIHVuZGVmaW5lZCwgZmFsbCBiYWNrIHRvIG5vcm1hbCBzZXR0aW5nXG5cdFx0XHRcdGlmICghaG9va3MgfHwgIShcInNldFwiIGluIGhvb2tzKSB8fCBob29rcy5zZXQodGhpcywgdmFsLCBcInZhbHVlXCIpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gdmFsO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xuXG5cdGpRdWVyeS5leHRlbmQoe1xuXHRcdHZhbEhvb2tzOiB7XG5cdFx0XHRvcHRpb246IHtcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbiBnZXQoZWxlbSkge1xuXG5cdFx0XHRcdFx0dmFyIHZhbCA9IGpRdWVyeS5maW5kLmF0dHIoZWxlbSwgXCJ2YWx1ZVwiKTtcblx0XHRcdFx0XHRyZXR1cm4gdmFsICE9IG51bGwgPyB2YWwgOlxuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD0xMCAtIDExIG9ubHlcblx0XHRcdFx0XHQvLyBvcHRpb24udGV4dCB0aHJvd3MgZXhjZXB0aW9ucyAoIzE0Njg2LCAjMTQ4NTgpXG5cdFx0XHRcdFx0Ly8gU3RyaXAgYW5kIGNvbGxhcHNlIHdoaXRlc3BhY2Vcblx0XHRcdFx0XHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNzdHJpcC1hbmQtY29sbGFwc2Utd2hpdGVzcGFjZVxuXHRcdFx0XHRcdHN0cmlwQW5kQ29sbGFwc2UoalF1ZXJ5LnRleHQoZWxlbSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0c2VsZWN0OiB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24gZ2V0KGVsZW0pIHtcblx0XHRcdFx0XHR2YXIgdmFsdWUsXG5cdFx0XHRcdFx0ICAgIG9wdGlvbixcblx0XHRcdFx0XHQgICAgaSxcblx0XHRcdFx0XHQgICAgb3B0aW9ucyA9IGVsZW0ub3B0aW9ucyxcblx0XHRcdFx0XHQgICAgaW5kZXggPSBlbGVtLnNlbGVjdGVkSW5kZXgsXG5cdFx0XHRcdFx0ICAgIG9uZSA9IGVsZW0udHlwZSA9PT0gXCJzZWxlY3Qtb25lXCIsXG5cdFx0XHRcdFx0ICAgIHZhbHVlcyA9IG9uZSA/IG51bGwgOiBbXSxcblx0XHRcdFx0XHQgICAgbWF4ID0gb25lID8gaW5kZXggKyAxIDogb3B0aW9ucy5sZW5ndGg7XG5cblx0XHRcdFx0XHRpZiAoaW5kZXggPCAwKSB7XG5cdFx0XHRcdFx0XHRpID0gbWF4O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpID0gb25lID8gaW5kZXggOiAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIExvb3AgdGhyb3VnaCBhbGwgdGhlIHNlbGVjdGVkIG9wdGlvbnNcblx0XHRcdFx0XHRmb3IgKDsgaSA8IG1heDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRvcHRpb24gPSBvcHRpb25zW2ldO1xuXG5cdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXHRcdFx0XHRcdFx0Ly8gSUU4LTkgZG9lc24ndCB1cGRhdGUgc2VsZWN0ZWQgYWZ0ZXIgZm9ybSByZXNldCAoIzI1NTEpXG5cdFx0XHRcdFx0XHRpZiAoKG9wdGlvbi5zZWxlY3RlZCB8fCBpID09PSBpbmRleCkgJiZcblxuXHRcdFx0XHRcdFx0Ly8gRG9uJ3QgcmV0dXJuIG9wdGlvbnMgdGhhdCBhcmUgZGlzYWJsZWQgb3IgaW4gYSBkaXNhYmxlZCBvcHRncm91cFxuXHRcdFx0XHRcdFx0IW9wdGlvbi5kaXNhYmxlZCAmJiAoIW9wdGlvbi5wYXJlbnROb2RlLmRpc2FibGVkIHx8ICFub2RlTmFtZShvcHRpb24ucGFyZW50Tm9kZSwgXCJvcHRncm91cFwiKSkpIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBHZXQgdGhlIHNwZWNpZmljIHZhbHVlIGZvciB0aGUgb3B0aW9uXG5cdFx0XHRcdFx0XHRcdHZhbHVlID0galF1ZXJ5KG9wdGlvbikudmFsKCk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gV2UgZG9uJ3QgbmVlZCBhbiBhcnJheSBmb3Igb25lIHNlbGVjdHNcblx0XHRcdFx0XHRcdFx0aWYgKG9uZSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC8vIE11bHRpLVNlbGVjdHMgcmV0dXJuIGFuIGFycmF5XG5cdFx0XHRcdFx0XHRcdHZhbHVlcy5wdXNoKHZhbHVlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gdmFsdWVzO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdHNldDogZnVuY3Rpb24gc2V0KGVsZW0sIHZhbHVlKSB7XG5cdFx0XHRcdFx0dmFyIG9wdGlvblNldCxcblx0XHRcdFx0XHQgICAgb3B0aW9uLFxuXHRcdFx0XHRcdCAgICBvcHRpb25zID0gZWxlbS5vcHRpb25zLFxuXHRcdFx0XHRcdCAgICB2YWx1ZXMgPSBqUXVlcnkubWFrZUFycmF5KHZhbHVlKSxcblx0XHRcdFx0XHQgICAgaSA9IG9wdGlvbnMubGVuZ3RoO1xuXG5cdFx0XHRcdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0XHRcdFx0b3B0aW9uID0gb3B0aW9uc1tpXTtcblxuXHRcdFx0XHRcdFx0LyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9cblxuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbi5zZWxlY3RlZCA9IGpRdWVyeS5pbkFycmF5KGpRdWVyeS52YWxIb29rcy5vcHRpb24uZ2V0KG9wdGlvbiksIHZhbHVlcykgPiAtMSkge1xuXHRcdFx0XHRcdFx0XHRvcHRpb25TZXQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbmQtYXNzaWduICovXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gRm9yY2UgYnJvd3NlcnMgdG8gYmVoYXZlIGNvbnNpc3RlbnRseSB3aGVuIG5vbi1tYXRjaGluZyB2YWx1ZSBpcyBzZXRcblx0XHRcdFx0XHRpZiAoIW9wdGlvblNldCkge1xuXHRcdFx0XHRcdFx0ZWxlbS5zZWxlY3RlZEluZGV4ID0gLTE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdC8vIFJhZGlvcyBhbmQgY2hlY2tib3hlcyBnZXR0ZXIvc2V0dGVyXG5cdGpRdWVyeS5lYWNoKFtcInJhZGlvXCIsIFwiY2hlY2tib3hcIl0sIGZ1bmN0aW9uICgpIHtcblx0XHRqUXVlcnkudmFsSG9va3NbdGhpc10gPSB7XG5cdFx0XHRzZXQ6IGZ1bmN0aW9uIHNldChlbGVtLCB2YWx1ZSkge1xuXHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZWxlbS5jaGVja2VkID0galF1ZXJ5LmluQXJyYXkoalF1ZXJ5KGVsZW0pLnZhbCgpLCB2YWx1ZSkgPiAtMTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0aWYgKCFzdXBwb3J0LmNoZWNrT24pIHtcblx0XHRcdGpRdWVyeS52YWxIb29rc1t0aGlzXS5nZXQgPSBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdFx0XHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSA9PT0gbnVsbCA/IFwib25cIiA6IGVsZW0udmFsdWU7XG5cdFx0XHR9O1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gUmV0dXJuIGpRdWVyeSBmb3IgYXR0cmlidXRlcy1vbmx5IGluY2x1c2lvblxuXG5cblx0c3VwcG9ydC5mb2N1c2luID0gXCJvbmZvY3VzaW5cIiBpbiB3aW5kb3c7XG5cblx0dmFyIHJmb2N1c01vcnBoID0gL14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvLFxuXHQgICAgc3RvcFByb3BhZ2F0aW9uQ2FsbGJhY2sgPSBmdW5jdGlvbiBzdG9wUHJvcGFnYXRpb25DYWxsYmFjayhlKSB7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0fTtcblxuXHRqUXVlcnkuZXh0ZW5kKGpRdWVyeS5ldmVudCwge1xuXG5cdFx0dHJpZ2dlcjogZnVuY3Rpb24gdHJpZ2dlcihldmVudCwgZGF0YSwgZWxlbSwgb25seUhhbmRsZXJzKSB7XG5cblx0XHRcdHZhciBpLFxuXHRcdFx0ICAgIGN1cixcblx0XHRcdCAgICB0bXAsXG5cdFx0XHQgICAgYnViYmxlVHlwZSxcblx0XHRcdCAgICBvbnR5cGUsXG5cdFx0XHQgICAgaGFuZGxlLFxuXHRcdFx0ICAgIHNwZWNpYWwsXG5cdFx0XHQgICAgbGFzdEVsZW1lbnQsXG5cdFx0XHQgICAgZXZlbnRQYXRoID0gW2VsZW0gfHwgZG9jdW1lbnRdLFxuXHRcdFx0ICAgIHR5cGUgPSBoYXNPd24uY2FsbChldmVudCwgXCJ0eXBlXCIpID8gZXZlbnQudHlwZSA6IGV2ZW50LFxuXHRcdFx0ICAgIG5hbWVzcGFjZXMgPSBoYXNPd24uY2FsbChldmVudCwgXCJuYW1lc3BhY2VcIikgPyBldmVudC5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpIDogW107XG5cblx0XHRcdGN1ciA9IGxhc3RFbGVtZW50ID0gdG1wID0gZWxlbSA9IGVsZW0gfHwgZG9jdW1lbnQ7XG5cblx0XHRcdC8vIERvbid0IGRvIGV2ZW50cyBvbiB0ZXh0IGFuZCBjb21tZW50IG5vZGVzXG5cdFx0XHRpZiAoZWxlbS5ub2RlVHlwZSA9PT0gMyB8fCBlbGVtLm5vZGVUeXBlID09PSA4KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZm9jdXMvYmx1ciBtb3JwaHMgdG8gZm9jdXNpbi9vdXQ7IGVuc3VyZSB3ZSdyZSBub3QgZmlyaW5nIHRoZW0gcmlnaHQgbm93XG5cdFx0XHRpZiAocmZvY3VzTW9ycGgudGVzdCh0eXBlICsgalF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZS5pbmRleE9mKFwiLlwiKSA+IC0xKSB7XG5cblx0XHRcdFx0Ly8gTmFtZXNwYWNlZCB0cmlnZ2VyOyBjcmVhdGUgYSByZWdleHAgdG8gbWF0Y2ggZXZlbnQgdHlwZSBpbiBoYW5kbGUoKVxuXHRcdFx0XHRuYW1lc3BhY2VzID0gdHlwZS5zcGxpdChcIi5cIik7XG5cdFx0XHRcdHR5cGUgPSBuYW1lc3BhY2VzLnNoaWZ0KCk7XG5cdFx0XHRcdG5hbWVzcGFjZXMuc29ydCgpO1xuXHRcdFx0fVxuXHRcdFx0b250eXBlID0gdHlwZS5pbmRleE9mKFwiOlwiKSA8IDAgJiYgXCJvblwiICsgdHlwZTtcblxuXHRcdFx0Ly8gQ2FsbGVyIGNhbiBwYXNzIGluIGEgalF1ZXJ5LkV2ZW50IG9iamVjdCwgT2JqZWN0LCBvciBqdXN0IGFuIGV2ZW50IHR5cGUgc3RyaW5nXG5cdFx0XHRldmVudCA9IGV2ZW50W2pRdWVyeS5leHBhbmRvXSA/IGV2ZW50IDogbmV3IGpRdWVyeS5FdmVudCh0eXBlLCAodHlwZW9mIGV2ZW50ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZXZlbnQpKSA9PT0gXCJvYmplY3RcIiAmJiBldmVudCk7XG5cblx0XHRcdC8vIFRyaWdnZXIgYml0bWFzazogJiAxIGZvciBuYXRpdmUgaGFuZGxlcnM7ICYgMiBmb3IgalF1ZXJ5IChhbHdheXMgdHJ1ZSlcblx0XHRcdGV2ZW50LmlzVHJpZ2dlciA9IG9ubHlIYW5kbGVycyA/IDIgOiAzO1xuXHRcdFx0ZXZlbnQubmFtZXNwYWNlID0gbmFtZXNwYWNlcy5qb2luKFwiLlwiKTtcblx0XHRcdGV2ZW50LnJuYW1lc3BhY2UgPSBldmVudC5uYW1lc3BhY2UgPyBuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIgKyBuYW1lc3BhY2VzLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKSArIFwiKFxcXFwufCQpXCIpIDogbnVsbDtcblxuXHRcdFx0Ly8gQ2xlYW4gdXAgdGhlIGV2ZW50IGluIGNhc2UgaXQgaXMgYmVpbmcgcmV1c2VkXG5cdFx0XHRldmVudC5yZXN1bHQgPSB1bmRlZmluZWQ7XG5cdFx0XHRpZiAoIWV2ZW50LnRhcmdldCkge1xuXHRcdFx0XHRldmVudC50YXJnZXQgPSBlbGVtO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDbG9uZSBhbnkgaW5jb21pbmcgZGF0YSBhbmQgcHJlcGVuZCB0aGUgZXZlbnQsIGNyZWF0aW5nIHRoZSBoYW5kbGVyIGFyZyBsaXN0XG5cdFx0XHRkYXRhID0gZGF0YSA9PSBudWxsID8gW2V2ZW50XSA6IGpRdWVyeS5tYWtlQXJyYXkoZGF0YSwgW2V2ZW50XSk7XG5cblx0XHRcdC8vIEFsbG93IHNwZWNpYWwgZXZlbnRzIHRvIGRyYXcgb3V0c2lkZSB0aGUgbGluZXNcblx0XHRcdHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFt0eXBlXSB8fCB7fTtcblx0XHRcdGlmICghb25seUhhbmRsZXJzICYmIHNwZWNpYWwudHJpZ2dlciAmJiBzcGVjaWFsLnRyaWdnZXIuYXBwbHkoZWxlbSwgZGF0YSkgPT09IGZhbHNlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRGV0ZXJtaW5lIGV2ZW50IHByb3BhZ2F0aW9uIHBhdGggaW4gYWR2YW5jZSwgcGVyIFczQyBldmVudHMgc3BlYyAoIzk5NTEpXG5cdFx0XHQvLyBCdWJibGUgdXAgdG8gZG9jdW1lbnQsIHRoZW4gdG8gd2luZG93OyB3YXRjaCBmb3IgYSBnbG9iYWwgb3duZXJEb2N1bWVudCB2YXIgKCM5NzI0KVxuXHRcdFx0aWYgKCFvbmx5SGFuZGxlcnMgJiYgIXNwZWNpYWwubm9CdWJibGUgJiYgIWlzV2luZG93KGVsZW0pKSB7XG5cblx0XHRcdFx0YnViYmxlVHlwZSA9IHNwZWNpYWwuZGVsZWdhdGVUeXBlIHx8IHR5cGU7XG5cdFx0XHRcdGlmICghcmZvY3VzTW9ycGgudGVzdChidWJibGVUeXBlICsgdHlwZSkpIHtcblx0XHRcdFx0XHRjdXIgPSBjdXIucGFyZW50Tm9kZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKDsgY3VyOyBjdXIgPSBjdXIucGFyZW50Tm9kZSkge1xuXHRcdFx0XHRcdGV2ZW50UGF0aC5wdXNoKGN1cik7XG5cdFx0XHRcdFx0dG1wID0gY3VyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gT25seSBhZGQgd2luZG93IGlmIHdlIGdvdCB0byBkb2N1bWVudCAoZS5nLiwgbm90IHBsYWluIG9iaiBvciBkZXRhY2hlZCBET00pXG5cdFx0XHRcdGlmICh0bXAgPT09IChlbGVtLm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQpKSB7XG5cdFx0XHRcdFx0ZXZlbnRQYXRoLnB1c2godG1wLmRlZmF1bHRWaWV3IHx8IHRtcC5wYXJlbnRXaW5kb3cgfHwgd2luZG93KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBGaXJlIGhhbmRsZXJzIG9uIHRoZSBldmVudCBwYXRoXG5cdFx0XHRpID0gMDtcblx0XHRcdHdoaWxlICgoY3VyID0gZXZlbnRQYXRoW2krK10pICYmICFldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG5cdFx0XHRcdGxhc3RFbGVtZW50ID0gY3VyO1xuXHRcdFx0XHRldmVudC50eXBlID0gaSA+IDEgPyBidWJibGVUeXBlIDogc3BlY2lhbC5iaW5kVHlwZSB8fCB0eXBlO1xuXG5cdFx0XHRcdC8vIGpRdWVyeSBoYW5kbGVyXG5cdFx0XHRcdGhhbmRsZSA9IChkYXRhUHJpdi5nZXQoY3VyLCBcImV2ZW50c1wiKSB8fCB7fSlbZXZlbnQudHlwZV0gJiYgZGF0YVByaXYuZ2V0KGN1ciwgXCJoYW5kbGVcIik7XG5cdFx0XHRcdGlmIChoYW5kbGUpIHtcblx0XHRcdFx0XHRoYW5kbGUuYXBwbHkoY3VyLCBkYXRhKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE5hdGl2ZSBoYW5kbGVyXG5cdFx0XHRcdGhhbmRsZSA9IG9udHlwZSAmJiBjdXJbb250eXBlXTtcblx0XHRcdFx0aWYgKGhhbmRsZSAmJiBoYW5kbGUuYXBwbHkgJiYgYWNjZXB0RGF0YShjdXIpKSB7XG5cdFx0XHRcdFx0ZXZlbnQucmVzdWx0ID0gaGFuZGxlLmFwcGx5KGN1ciwgZGF0YSk7XG5cdFx0XHRcdFx0aWYgKGV2ZW50LnJlc3VsdCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRldmVudC50eXBlID0gdHlwZTtcblxuXHRcdFx0Ly8gSWYgbm9ib2R5IHByZXZlbnRlZCB0aGUgZGVmYXVsdCBhY3Rpb24sIGRvIGl0IG5vd1xuXHRcdFx0aWYgKCFvbmx5SGFuZGxlcnMgJiYgIWV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG5cblx0XHRcdFx0aWYgKCghc3BlY2lhbC5fZGVmYXVsdCB8fCBzcGVjaWFsLl9kZWZhdWx0LmFwcGx5KGV2ZW50UGF0aC5wb3AoKSwgZGF0YSkgPT09IGZhbHNlKSAmJiBhY2NlcHREYXRhKGVsZW0pKSB7XG5cblx0XHRcdFx0XHQvLyBDYWxsIGEgbmF0aXZlIERPTSBtZXRob2Qgb24gdGhlIHRhcmdldCB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgdGhlIGV2ZW50LlxuXHRcdFx0XHRcdC8vIERvbid0IGRvIGRlZmF1bHQgYWN0aW9ucyBvbiB3aW5kb3csIHRoYXQncyB3aGVyZSBnbG9iYWwgdmFyaWFibGVzIGJlICgjNjE3MClcblx0XHRcdFx0XHRpZiAob250eXBlICYmIGlzRnVuY3Rpb24oZWxlbVt0eXBlXSkgJiYgIWlzV2luZG93KGVsZW0pKSB7XG5cblx0XHRcdFx0XHRcdC8vIERvbid0IHJlLXRyaWdnZXIgYW4gb25GT08gZXZlbnQgd2hlbiB3ZSBjYWxsIGl0cyBGT08oKSBtZXRob2Rcblx0XHRcdFx0XHRcdHRtcCA9IGVsZW1bb250eXBlXTtcblxuXHRcdFx0XHRcdFx0aWYgKHRtcCkge1xuXHRcdFx0XHRcdFx0XHRlbGVtW29udHlwZV0gPSBudWxsO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBQcmV2ZW50IHJlLXRyaWdnZXJpbmcgb2YgdGhlIHNhbWUgZXZlbnQsIHNpbmNlIHdlIGFscmVhZHkgYnViYmxlZCBpdCBhYm92ZVxuXHRcdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCA9IHR5cGU7XG5cblx0XHRcdFx0XHRcdGlmIChldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG5cdFx0XHRcdFx0XHRcdGxhc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgc3RvcFByb3BhZ2F0aW9uQ2FsbGJhY2spO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRlbGVtW3R5cGVdKCk7XG5cblx0XHRcdFx0XHRcdGlmIChldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG5cdFx0XHRcdFx0XHRcdGxhc3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgc3RvcFByb3BhZ2F0aW9uQ2FsbGJhY2spO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlcmVkID0gdW5kZWZpbmVkO1xuXG5cdFx0XHRcdFx0XHRpZiAodG1wKSB7XG5cdFx0XHRcdFx0XHRcdGVsZW1bb250eXBlXSA9IHRtcDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGV2ZW50LnJlc3VsdDtcblx0XHR9LFxuXG5cdFx0Ly8gUGlnZ3liYWNrIG9uIGEgZG9ub3IgZXZlbnQgdG8gc2ltdWxhdGUgYSBkaWZmZXJlbnQgb25lXG5cdFx0Ly8gVXNlZCBvbmx5IGZvciBgZm9jdXMoaW4gfCBvdXQpYCBldmVudHNcblx0XHRzaW11bGF0ZTogZnVuY3Rpb24gc2ltdWxhdGUodHlwZSwgZWxlbSwgZXZlbnQpIHtcblx0XHRcdHZhciBlID0galF1ZXJ5LmV4dGVuZChuZXcgalF1ZXJ5LkV2ZW50KCksIGV2ZW50LCB7XG5cdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdGlzU2ltdWxhdGVkOiB0cnVlXG5cdFx0XHR9KTtcblxuXHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoZSwgbnVsbCwgZWxlbSk7XG5cdFx0fVxuXG5cdH0pO1xuXG5cdGpRdWVyeS5mbi5leHRlbmQoe1xuXG5cdFx0dHJpZ2dlcjogZnVuY3Rpb24gdHJpZ2dlcih0eXBlLCBkYXRhKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIodHlwZSwgZGF0YSwgdGhpcyk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdHRyaWdnZXJIYW5kbGVyOiBmdW5jdGlvbiB0cmlnZ2VySGFuZGxlcih0eXBlLCBkYXRhKSB7XG5cdFx0XHR2YXIgZWxlbSA9IHRoaXNbMF07XG5cdFx0XHRpZiAoZWxlbSkge1xuXHRcdFx0XHRyZXR1cm4galF1ZXJ5LmV2ZW50LnRyaWdnZXIodHlwZSwgZGF0YSwgZWxlbSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBTdXBwb3J0OiBGaXJlZm94IDw9NDRcblx0Ly8gRmlyZWZveCBkb2Vzbid0IGhhdmUgZm9jdXMoaW4gfCBvdXQpIGV2ZW50c1xuXHQvLyBSZWxhdGVkIHRpY2tldCAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY4Nzc4N1xuXHQvL1xuXHQvLyBTdXBwb3J0OiBDaHJvbWUgPD00OCAtIDQ5LCBTYWZhcmkgPD05LjAgLSA5LjFcblx0Ly8gZm9jdXMoaW4gfCBvdXQpIGV2ZW50cyBmaXJlIGFmdGVyIGZvY3VzICYgYmx1ciBldmVudHMsXG5cdC8vIHdoaWNoIGlzIHNwZWMgdmlvbGF0aW9uIC0gaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtRXZlbnRzLyNldmVudHMtZm9jdXNldmVudC1ldmVudC1vcmRlclxuXHQvLyBSZWxhdGVkIHRpY2tldCAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ0OTg1N1xuXHRpZiAoIXN1cHBvcnQuZm9jdXNpbikge1xuXHRcdGpRdWVyeS5lYWNoKHsgZm9jdXM6IFwiZm9jdXNpblwiLCBibHVyOiBcImZvY3Vzb3V0XCIgfSwgZnVuY3Rpb24gKG9yaWcsIGZpeCkge1xuXG5cdFx0XHQvLyBBdHRhY2ggYSBzaW5nbGUgY2FwdHVyaW5nIGhhbmRsZXIgb24gdGhlIGRvY3VtZW50IHdoaWxlIHNvbWVvbmUgd2FudHMgZm9jdXNpbi9mb2N1c291dFxuXHRcdFx0dmFyIGhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG5cdFx0XHRcdGpRdWVyeS5ldmVudC5zaW11bGF0ZShmaXgsIGV2ZW50LnRhcmdldCwgalF1ZXJ5LmV2ZW50LmZpeChldmVudCkpO1xuXHRcdFx0fTtcblxuXHRcdFx0alF1ZXJ5LmV2ZW50LnNwZWNpYWxbZml4XSA9IHtcblx0XHRcdFx0c2V0dXA6IGZ1bmN0aW9uIHNldHVwKCkge1xuXHRcdFx0XHRcdHZhciBkb2MgPSB0aGlzLm93bmVyRG9jdW1lbnQgfHwgdGhpcyxcblx0XHRcdFx0XHQgICAgYXR0YWNoZXMgPSBkYXRhUHJpdi5hY2Nlc3MoZG9jLCBmaXgpO1xuXG5cdFx0XHRcdFx0aWYgKCFhdHRhY2hlcykge1xuXHRcdFx0XHRcdFx0ZG9jLmFkZEV2ZW50TGlzdGVuZXIob3JpZywgaGFuZGxlciwgdHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRhdGFQcml2LmFjY2Vzcyhkb2MsIGZpeCwgKGF0dGFjaGVzIHx8IDApICsgMSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRlYXJkb3duOiBmdW5jdGlvbiB0ZWFyZG93bigpIHtcblx0XHRcdFx0XHR2YXIgZG9jID0gdGhpcy5vd25lckRvY3VtZW50IHx8IHRoaXMsXG5cdFx0XHRcdFx0ICAgIGF0dGFjaGVzID0gZGF0YVByaXYuYWNjZXNzKGRvYywgZml4KSAtIDE7XG5cblx0XHRcdFx0XHRpZiAoIWF0dGFjaGVzKSB7XG5cdFx0XHRcdFx0XHRkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcihvcmlnLCBoYW5kbGVyLCB0cnVlKTtcblx0XHRcdFx0XHRcdGRhdGFQcml2LnJlbW92ZShkb2MsIGZpeCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGRhdGFQcml2LmFjY2Vzcyhkb2MsIGZpeCwgYXR0YWNoZXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9KTtcblx0fVxuXHR2YXIgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb247XG5cblx0dmFyIG5vbmNlID0gRGF0ZS5ub3coKTtcblxuXHR2YXIgcnF1ZXJ5ID0gL1xcPy87XG5cblx0Ly8gQ3Jvc3MtYnJvd3NlciB4bWwgcGFyc2luZ1xuXHRqUXVlcnkucGFyc2VYTUwgPSBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHZhciB4bWw7XG5cdFx0aWYgKCFkYXRhIHx8IHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA5IC0gMTEgb25seVxuXHRcdC8vIElFIHRocm93cyBvbiBwYXJzZUZyb21TdHJpbmcgd2l0aCBpbnZhbGlkIGlucHV0LlxuXHRcdHRyeSB7XG5cdFx0XHR4bWwgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhkYXRhLCBcInRleHQveG1sXCIpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHhtbCA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRpZiAoIXhtbCB8fCB4bWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGgpIHtcblx0XHRcdGpRdWVyeS5lcnJvcihcIkludmFsaWQgWE1MOiBcIiArIGRhdGEpO1xuXHRcdH1cblx0XHRyZXR1cm4geG1sO1xuXHR9O1xuXG5cdHZhciByYnJhY2tldCA9IC9cXFtcXF0kLyxcblx0ICAgIHJDUkxGID0gL1xccj9cXG4vZyxcblx0ICAgIHJzdWJtaXR0ZXJUeXBlcyA9IC9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxcblx0ICAgIHJzdWJtaXR0YWJsZSA9IC9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtcblxuXHRmdW5jdGlvbiBidWlsZFBhcmFtcyhwcmVmaXgsIG9iaiwgdHJhZGl0aW9uYWwsIGFkZCkge1xuXHRcdHZhciBuYW1lO1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuXG5cdFx0XHQvLyBTZXJpYWxpemUgYXJyYXkgaXRlbS5cblx0XHRcdGpRdWVyeS5lYWNoKG9iaiwgZnVuY3Rpb24gKGksIHYpIHtcblx0XHRcdFx0aWYgKHRyYWRpdGlvbmFsIHx8IHJicmFja2V0LnRlc3QocHJlZml4KSkge1xuXG5cdFx0XHRcdFx0Ly8gVHJlYXQgZWFjaCBhcnJheSBpdGVtIGFzIGEgc2NhbGFyLlxuXHRcdFx0XHRcdGFkZChwcmVmaXgsIHYpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0Ly8gSXRlbSBpcyBub24tc2NhbGFyIChhcnJheSBvciBvYmplY3QpLCBlbmNvZGUgaXRzIG51bWVyaWMgaW5kZXguXG5cdFx0XHRcdFx0YnVpbGRQYXJhbXMocHJlZml4ICsgXCJbXCIgKyAoKHR5cGVvZiB2ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YodikpID09PSBcIm9iamVjdFwiICYmIHYgIT0gbnVsbCA/IGkgOiBcIlwiKSArIFwiXVwiLCB2LCB0cmFkaXRpb25hbCwgYWRkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIGlmICghdHJhZGl0aW9uYWwgJiYgdG9UeXBlKG9iaikgPT09IFwib2JqZWN0XCIpIHtcblxuXHRcdFx0Ly8gU2VyaWFsaXplIG9iamVjdCBpdGVtLlxuXHRcdFx0Zm9yIChuYW1lIGluIG9iaikge1xuXHRcdFx0XHRidWlsZFBhcmFtcyhwcmVmaXggKyBcIltcIiArIG5hbWUgKyBcIl1cIiwgb2JqW25hbWVdLCB0cmFkaXRpb25hbCwgYWRkKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBTZXJpYWxpemUgc2NhbGFyIGl0ZW0uXG5cdFx0XHRhZGQocHJlZml4LCBvYmopO1xuXHRcdH1cblx0fVxuXG5cdC8vIFNlcmlhbGl6ZSBhbiBhcnJheSBvZiBmb3JtIGVsZW1lbnRzIG9yIGEgc2V0IG9mXG5cdC8vIGtleS92YWx1ZXMgaW50byBhIHF1ZXJ5IHN0cmluZ1xuXHRqUXVlcnkucGFyYW0gPSBmdW5jdGlvbiAoYSwgdHJhZGl0aW9uYWwpIHtcblx0XHR2YXIgcHJlZml4LFxuXHRcdCAgICBzID0gW10sXG5cdFx0ICAgIGFkZCA9IGZ1bmN0aW9uIGFkZChrZXksIHZhbHVlT3JGdW5jdGlvbikge1xuXG5cdFx0XHQvLyBJZiB2YWx1ZSBpcyBhIGZ1bmN0aW9uLCBpbnZva2UgaXQgYW5kIHVzZSBpdHMgcmV0dXJuIHZhbHVlXG5cdFx0XHR2YXIgdmFsdWUgPSBpc0Z1bmN0aW9uKHZhbHVlT3JGdW5jdGlvbikgPyB2YWx1ZU9yRnVuY3Rpb24oKSA6IHZhbHVlT3JGdW5jdGlvbjtcblxuXHRcdFx0c1tzLmxlbmd0aF0gPSBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUpO1xuXHRcdH07XG5cblx0XHQvLyBJZiBhbiBhcnJheSB3YXMgcGFzc2VkIGluLCBhc3N1bWUgdGhhdCBpdCBpcyBhbiBhcnJheSBvZiBmb3JtIGVsZW1lbnRzLlxuXHRcdGlmIChBcnJheS5pc0FycmF5KGEpIHx8IGEuanF1ZXJ5ICYmICFqUXVlcnkuaXNQbGFpbk9iamVjdChhKSkge1xuXG5cdFx0XHQvLyBTZXJpYWxpemUgdGhlIGZvcm0gZWxlbWVudHNcblx0XHRcdGpRdWVyeS5lYWNoKGEsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0YWRkKHRoaXMubmFtZSwgdGhpcy52YWx1ZSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBJZiB0cmFkaXRpb25hbCwgZW5jb2RlIHRoZSBcIm9sZFwiIHdheSAodGhlIHdheSAxLjMuMiBvciBvbGRlclxuXHRcdFx0Ly8gZGlkIGl0KSwgb3RoZXJ3aXNlIGVuY29kZSBwYXJhbXMgcmVjdXJzaXZlbHkuXG5cdFx0XHRmb3IgKHByZWZpeCBpbiBhKSB7XG5cdFx0XHRcdGJ1aWxkUGFyYW1zKHByZWZpeCwgYVtwcmVmaXhdLCB0cmFkaXRpb25hbCwgYWRkKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gdGhlIHJlc3VsdGluZyBzZXJpYWxpemF0aW9uXG5cdFx0cmV0dXJuIHMuam9pbihcIiZcIik7XG5cdH07XG5cblx0alF1ZXJ5LmZuLmV4dGVuZCh7XG5cdFx0c2VyaWFsaXplOiBmdW5jdGlvbiBzZXJpYWxpemUoKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSk7XG5cdFx0fSxcblx0XHRzZXJpYWxpemVBcnJheTogZnVuY3Rpb24gc2VyaWFsaXplQXJyYXkoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdC8vIENhbiBhZGQgcHJvcEhvb2sgZm9yIFwiZWxlbWVudHNcIiB0byBmaWx0ZXIgb3IgYWRkIGZvcm0gZWxlbWVudHNcblx0XHRcdFx0dmFyIGVsZW1lbnRzID0galF1ZXJ5LnByb3AodGhpcywgXCJlbGVtZW50c1wiKTtcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnRzID8galF1ZXJ5Lm1ha2VBcnJheShlbGVtZW50cykgOiB0aGlzO1xuXHRcdFx0fSkuZmlsdGVyKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIHR5cGUgPSB0aGlzLnR5cGU7XG5cblx0XHRcdFx0Ly8gVXNlIC5pcyggXCI6ZGlzYWJsZWRcIiApIHNvIHRoYXQgZmllbGRzZXRbZGlzYWJsZWRdIHdvcmtzXG5cdFx0XHRcdHJldHVybiB0aGlzLm5hbWUgJiYgIWpRdWVyeSh0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSAmJiByc3VibWl0dGFibGUudGVzdCh0aGlzLm5vZGVOYW1lKSAmJiAhcnN1Ym1pdHRlclR5cGVzLnRlc3QodHlwZSkgJiYgKHRoaXMuY2hlY2tlZCB8fCAhcmNoZWNrYWJsZVR5cGUudGVzdCh0eXBlKSk7XG5cdFx0XHR9KS5tYXAoZnVuY3Rpb24gKGksIGVsZW0pIHtcblx0XHRcdFx0dmFyIHZhbCA9IGpRdWVyeSh0aGlzKS52YWwoKTtcblxuXHRcdFx0XHRpZiAodmFsID09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcblx0XHRcdFx0XHRyZXR1cm4galF1ZXJ5Lm1hcCh2YWwsIGZ1bmN0aW9uICh2YWwpIHtcblx0XHRcdFx0XHRcdHJldHVybiB7IG5hbWU6IGVsZW0ubmFtZSwgdmFsdWU6IHZhbC5yZXBsYWNlKHJDUkxGLCBcIlxcclxcblwiKSB9O1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHsgbmFtZTogZWxlbS5uYW1lLCB2YWx1ZTogdmFsLnJlcGxhY2UockNSTEYsIFwiXFxyXFxuXCIpIH07XG5cdFx0XHR9KS5nZXQoKTtcblx0XHR9XG5cdH0pO1xuXG5cdHZhciByMjAgPSAvJTIwL2csXG5cdCAgICByaGFzaCA9IC8jLiokLyxcblx0ICAgIHJhbnRpQ2FjaGUgPSAvKFs/Jl0pXz1bXiZdKi8sXG5cdCAgICByaGVhZGVycyA9IC9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvbWcsXG5cblxuXHQvLyAjNzY1MywgIzgxMjUsICM4MTUyOiBsb2NhbCBwcm90b2NvbCBkZXRlY3Rpb25cblx0cmxvY2FsUHJvdG9jb2wgPSAvXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxcblx0ICAgIHJub0NvbnRlbnQgPSAvXig/OkdFVHxIRUFEKSQvLFxuXHQgICAgcnByb3RvY29sID0gL15cXC9cXC8vLFxuXG5cblx0LyogUHJlZmlsdGVyc1xuICAqIDEpIFRoZXkgYXJlIHVzZWZ1bCB0byBpbnRyb2R1Y2UgY3VzdG9tIGRhdGFUeXBlcyAoc2VlIGFqYXgvanNvbnAuanMgZm9yIGFuIGV4YW1wbGUpXG4gICogMikgVGhlc2UgYXJlIGNhbGxlZDpcbiAgKiAgICAtIEJFRk9SRSBhc2tpbmcgZm9yIGEgdHJhbnNwb3J0XG4gICogICAgLSBBRlRFUiBwYXJhbSBzZXJpYWxpemF0aW9uIChzLmRhdGEgaXMgYSBzdHJpbmcgaWYgcy5wcm9jZXNzRGF0YSBpcyB0cnVlKVxuICAqIDMpIGtleSBpcyB0aGUgZGF0YVR5cGVcbiAgKiA0KSB0aGUgY2F0Y2hhbGwgc3ltYm9sIFwiKlwiIGNhbiBiZSB1c2VkXG4gICogNSkgZXhlY3V0aW9uIHdpbGwgc3RhcnQgd2l0aCB0cmFuc3BvcnQgZGF0YVR5cGUgYW5kIFRIRU4gY29udGludWUgZG93biB0byBcIipcIiBpZiBuZWVkZWRcbiAgKi9cblx0cHJlZmlsdGVycyA9IHt9LFxuXG5cblx0LyogVHJhbnNwb3J0cyBiaW5kaW5nc1xuICAqIDEpIGtleSBpcyB0aGUgZGF0YVR5cGVcbiAgKiAyKSB0aGUgY2F0Y2hhbGwgc3ltYm9sIFwiKlwiIGNhbiBiZSB1c2VkXG4gICogMykgc2VsZWN0aW9uIHdpbGwgc3RhcnQgd2l0aCB0cmFuc3BvcnQgZGF0YVR5cGUgYW5kIFRIRU4gZ28gdG8gXCIqXCIgaWYgbmVlZGVkXG4gICovXG5cdHRyYW5zcG9ydHMgPSB7fSxcblxuXG5cdC8vIEF2b2lkIGNvbW1lbnQtcHJvbG9nIGNoYXIgc2VxdWVuY2UgKCMxMDA5OCk7IG11c3QgYXBwZWFzZSBsaW50IGFuZCBldmFkZSBjb21wcmVzc2lvblxuXHRhbGxUeXBlcyA9IFwiKi9cIi5jb25jYXQoXCIqXCIpLFxuXG5cblx0Ly8gQW5jaG9yIHRhZyBmb3IgcGFyc2luZyB0aGUgZG9jdW1lbnQgb3JpZ2luXG5cdG9yaWdpbkFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRvcmlnaW5BbmNob3IuaHJlZiA9IGxvY2F0aW9uLmhyZWY7XG5cblx0Ly8gQmFzZSBcImNvbnN0cnVjdG9yXCIgZm9yIGpRdWVyeS5hamF4UHJlZmlsdGVyIGFuZCBqUXVlcnkuYWpheFRyYW5zcG9ydFxuXHRmdW5jdGlvbiBhZGRUb1ByZWZpbHRlcnNPclRyYW5zcG9ydHMoc3RydWN0dXJlKSB7XG5cblx0XHQvLyBkYXRhVHlwZUV4cHJlc3Npb24gaXMgb3B0aW9uYWwgYW5kIGRlZmF1bHRzIHRvIFwiKlwiXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChkYXRhVHlwZUV4cHJlc3Npb24sIGZ1bmMpIHtcblxuXHRcdFx0aWYgKHR5cGVvZiBkYXRhVHlwZUV4cHJlc3Npb24gIT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0ZnVuYyA9IGRhdGFUeXBlRXhwcmVzc2lvbjtcblx0XHRcdFx0ZGF0YVR5cGVFeHByZXNzaW9uID0gXCIqXCI7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBkYXRhVHlwZSxcblx0XHRcdCAgICBpID0gMCxcblx0XHRcdCAgICBkYXRhVHlwZXMgPSBkYXRhVHlwZUV4cHJlc3Npb24udG9Mb3dlckNhc2UoKS5tYXRjaChybm90aHRtbHdoaXRlKSB8fCBbXTtcblxuXHRcdFx0aWYgKGlzRnVuY3Rpb24oZnVuYykpIHtcblxuXHRcdFx0XHQvLyBGb3IgZWFjaCBkYXRhVHlwZSBpbiB0aGUgZGF0YVR5cGVFeHByZXNzaW9uXG5cdFx0XHRcdHdoaWxlIChkYXRhVHlwZSA9IGRhdGFUeXBlc1tpKytdKSB7XG5cblx0XHRcdFx0XHQvLyBQcmVwZW5kIGlmIHJlcXVlc3RlZFxuXHRcdFx0XHRcdGlmIChkYXRhVHlwZVswXSA9PT0gXCIrXCIpIHtcblx0XHRcdFx0XHRcdGRhdGFUeXBlID0gZGF0YVR5cGUuc2xpY2UoMSkgfHwgXCIqXCI7XG5cdFx0XHRcdFx0XHQoc3RydWN0dXJlW2RhdGFUeXBlXSA9IHN0cnVjdHVyZVtkYXRhVHlwZV0gfHwgW10pLnVuc2hpZnQoZnVuYyk7XG5cblx0XHRcdFx0XHRcdC8vIE90aGVyd2lzZSBhcHBlbmRcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0KHN0cnVjdHVyZVtkYXRhVHlwZV0gPSBzdHJ1Y3R1cmVbZGF0YVR5cGVdIHx8IFtdKS5wdXNoKGZ1bmMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHQvLyBCYXNlIGluc3BlY3Rpb24gZnVuY3Rpb24gZm9yIHByZWZpbHRlcnMgYW5kIHRyYW5zcG9ydHNcblx0ZnVuY3Rpb24gaW5zcGVjdFByZWZpbHRlcnNPclRyYW5zcG9ydHMoc3RydWN0dXJlLCBvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMsIGpxWEhSKSB7XG5cblx0XHR2YXIgaW5zcGVjdGVkID0ge30sXG5cdFx0ICAgIHNlZWtpbmdUcmFuc3BvcnQgPSBzdHJ1Y3R1cmUgPT09IHRyYW5zcG9ydHM7XG5cblx0XHRmdW5jdGlvbiBpbnNwZWN0KGRhdGFUeXBlKSB7XG5cdFx0XHR2YXIgc2VsZWN0ZWQ7XG5cdFx0XHRpbnNwZWN0ZWRbZGF0YVR5cGVdID0gdHJ1ZTtcblx0XHRcdGpRdWVyeS5lYWNoKHN0cnVjdHVyZVtkYXRhVHlwZV0gfHwgW10sIGZ1bmN0aW9uIChfLCBwcmVmaWx0ZXJPckZhY3RvcnkpIHtcblx0XHRcdFx0dmFyIGRhdGFUeXBlT3JUcmFuc3BvcnQgPSBwcmVmaWx0ZXJPckZhY3Rvcnkob3B0aW9ucywgb3JpZ2luYWxPcHRpb25zLCBqcVhIUik7XG5cdFx0XHRcdGlmICh0eXBlb2YgZGF0YVR5cGVPclRyYW5zcG9ydCA9PT0gXCJzdHJpbmdcIiAmJiAhc2Vla2luZ1RyYW5zcG9ydCAmJiAhaW5zcGVjdGVkW2RhdGFUeXBlT3JUcmFuc3BvcnRdKSB7XG5cblx0XHRcdFx0XHRvcHRpb25zLmRhdGFUeXBlcy51bnNoaWZ0KGRhdGFUeXBlT3JUcmFuc3BvcnQpO1xuXHRcdFx0XHRcdGluc3BlY3QoZGF0YVR5cGVPclRyYW5zcG9ydCk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHNlZWtpbmdUcmFuc3BvcnQpIHtcblx0XHRcdFx0XHRyZXR1cm4gIShzZWxlY3RlZCA9IGRhdGFUeXBlT3JUcmFuc3BvcnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBzZWxlY3RlZDtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5zcGVjdChvcHRpb25zLmRhdGFUeXBlc1swXSkgfHwgIWluc3BlY3RlZFtcIipcIl0gJiYgaW5zcGVjdChcIipcIik7XG5cdH1cblxuXHQvLyBBIHNwZWNpYWwgZXh0ZW5kIGZvciBhamF4IG9wdGlvbnNcblx0Ly8gdGhhdCB0YWtlcyBcImZsYXRcIiBvcHRpb25zIChub3QgdG8gYmUgZGVlcCBleHRlbmRlZClcblx0Ly8gRml4ZXMgIzk4ODdcblx0ZnVuY3Rpb24gYWpheEV4dGVuZCh0YXJnZXQsIHNyYykge1xuXHRcdHZhciBrZXksXG5cdFx0ICAgIGRlZXAsXG5cdFx0ICAgIGZsYXRPcHRpb25zID0galF1ZXJ5LmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9ucyB8fCB7fTtcblxuXHRcdGZvciAoa2V5IGluIHNyYykge1xuXHRcdFx0aWYgKHNyY1trZXldICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0KGZsYXRPcHRpb25zW2tleV0gPyB0YXJnZXQgOiBkZWVwIHx8IChkZWVwID0ge30pKVtrZXldID0gc3JjW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChkZWVwKSB7XG5cdFx0XHRqUXVlcnkuZXh0ZW5kKHRydWUsIHRhcmdldCwgZGVlcCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRhcmdldDtcblx0fVxuXG5cdC8qIEhhbmRsZXMgcmVzcG9uc2VzIHRvIGFuIGFqYXggcmVxdWVzdDpcbiAgKiAtIGZpbmRzIHRoZSByaWdodCBkYXRhVHlwZSAobWVkaWF0ZXMgYmV0d2VlbiBjb250ZW50LXR5cGUgYW5kIGV4cGVjdGVkIGRhdGFUeXBlKVxuICAqIC0gcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyByZXNwb25zZVxuICAqL1xuXHRmdW5jdGlvbiBhamF4SGFuZGxlUmVzcG9uc2VzKHMsIGpxWEhSLCByZXNwb25zZXMpIHtcblxuXHRcdHZhciBjdCxcblx0XHQgICAgdHlwZSxcblx0XHQgICAgZmluYWxEYXRhVHlwZSxcblx0XHQgICAgZmlyc3REYXRhVHlwZSxcblx0XHQgICAgY29udGVudHMgPSBzLmNvbnRlbnRzLFxuXHRcdCAgICBkYXRhVHlwZXMgPSBzLmRhdGFUeXBlcztcblxuXHRcdC8vIFJlbW92ZSBhdXRvIGRhdGFUeXBlIGFuZCBnZXQgY29udGVudC10eXBlIGluIHRoZSBwcm9jZXNzXG5cdFx0d2hpbGUgKGRhdGFUeXBlc1swXSA9PT0gXCIqXCIpIHtcblx0XHRcdGRhdGFUeXBlcy5zaGlmdCgpO1xuXHRcdFx0aWYgKGN0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Y3QgPSBzLm1pbWVUeXBlIHx8IGpxWEhSLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENoZWNrIGlmIHdlJ3JlIGRlYWxpbmcgd2l0aCBhIGtub3duIGNvbnRlbnQtdHlwZVxuXHRcdGlmIChjdCkge1xuXHRcdFx0Zm9yICh0eXBlIGluIGNvbnRlbnRzKSB7XG5cdFx0XHRcdGlmIChjb250ZW50c1t0eXBlXSAmJiBjb250ZW50c1t0eXBlXS50ZXN0KGN0KSkge1xuXHRcdFx0XHRcdGRhdGFUeXBlcy51bnNoaWZ0KHR5cGUpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ2hlY2sgdG8gc2VlIGlmIHdlIGhhdmUgYSByZXNwb25zZSBmb3IgdGhlIGV4cGVjdGVkIGRhdGFUeXBlXG5cdFx0aWYgKGRhdGFUeXBlc1swXSBpbiByZXNwb25zZXMpIHtcblx0XHRcdGZpbmFsRGF0YVR5cGUgPSBkYXRhVHlwZXNbMF07XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gVHJ5IGNvbnZlcnRpYmxlIGRhdGFUeXBlc1xuXHRcdFx0Zm9yICh0eXBlIGluIHJlc3BvbnNlcykge1xuXHRcdFx0XHRpZiAoIWRhdGFUeXBlc1swXSB8fCBzLmNvbnZlcnRlcnNbdHlwZSArIFwiIFwiICsgZGF0YVR5cGVzWzBdXSkge1xuXHRcdFx0XHRcdGZpbmFsRGF0YVR5cGUgPSB0eXBlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghZmlyc3REYXRhVHlwZSkge1xuXHRcdFx0XHRcdGZpcnN0RGF0YVR5cGUgPSB0eXBlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIE9yIGp1c3QgdXNlIGZpcnN0IG9uZVxuXHRcdFx0ZmluYWxEYXRhVHlwZSA9IGZpbmFsRGF0YVR5cGUgfHwgZmlyc3REYXRhVHlwZTtcblx0XHR9XG5cblx0XHQvLyBJZiB3ZSBmb3VuZCBhIGRhdGFUeXBlXG5cdFx0Ly8gV2UgYWRkIHRoZSBkYXRhVHlwZSB0byB0aGUgbGlzdCBpZiBuZWVkZWRcblx0XHQvLyBhbmQgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIHJlc3BvbnNlXG5cdFx0aWYgKGZpbmFsRGF0YVR5cGUpIHtcblx0XHRcdGlmIChmaW5hbERhdGFUeXBlICE9PSBkYXRhVHlwZXNbMF0pIHtcblx0XHRcdFx0ZGF0YVR5cGVzLnVuc2hpZnQoZmluYWxEYXRhVHlwZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2VzW2ZpbmFsRGF0YVR5cGVdO1xuXHRcdH1cblx0fVxuXG5cdC8qIENoYWluIGNvbnZlcnNpb25zIGdpdmVuIHRoZSByZXF1ZXN0IGFuZCB0aGUgb3JpZ2luYWwgcmVzcG9uc2VcbiAgKiBBbHNvIHNldHMgdGhlIHJlc3BvbnNlWFhYIGZpZWxkcyBvbiB0aGUganFYSFIgaW5zdGFuY2VcbiAgKi9cblx0ZnVuY3Rpb24gYWpheENvbnZlcnQocywgcmVzcG9uc2UsIGpxWEhSLCBpc1N1Y2Nlc3MpIHtcblx0XHR2YXIgY29udjIsXG5cdFx0ICAgIGN1cnJlbnQsXG5cdFx0ICAgIGNvbnYsXG5cdFx0ICAgIHRtcCxcblx0XHQgICAgcHJldixcblx0XHQgICAgY29udmVydGVycyA9IHt9LFxuXG5cblx0XHQvLyBXb3JrIHdpdGggYSBjb3B5IG9mIGRhdGFUeXBlcyBpbiBjYXNlIHdlIG5lZWQgdG8gbW9kaWZ5IGl0IGZvciBjb252ZXJzaW9uXG5cdFx0ZGF0YVR5cGVzID0gcy5kYXRhVHlwZXMuc2xpY2UoKTtcblxuXHRcdC8vIENyZWF0ZSBjb252ZXJ0ZXJzIG1hcCB3aXRoIGxvd2VyY2FzZWQga2V5c1xuXHRcdGlmIChkYXRhVHlwZXNbMV0pIHtcblx0XHRcdGZvciAoY29udiBpbiBzLmNvbnZlcnRlcnMpIHtcblx0XHRcdFx0Y29udmVydGVyc1tjb252LnRvTG93ZXJDYXNlKCldID0gcy5jb252ZXJ0ZXJzW2NvbnZdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGN1cnJlbnQgPSBkYXRhVHlwZXMuc2hpZnQoKTtcblxuXHRcdC8vIENvbnZlcnQgdG8gZWFjaCBzZXF1ZW50aWFsIGRhdGFUeXBlXG5cdFx0d2hpbGUgKGN1cnJlbnQpIHtcblxuXHRcdFx0aWYgKHMucmVzcG9uc2VGaWVsZHNbY3VycmVudF0pIHtcblx0XHRcdFx0anFYSFJbcy5yZXNwb25zZUZpZWxkc1tjdXJyZW50XV0gPSByZXNwb25zZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQXBwbHkgdGhlIGRhdGFGaWx0ZXIgaWYgcHJvdmlkZWRcblx0XHRcdGlmICghcHJldiAmJiBpc1N1Y2Nlc3MgJiYgcy5kYXRhRmlsdGVyKSB7XG5cdFx0XHRcdHJlc3BvbnNlID0gcy5kYXRhRmlsdGVyKHJlc3BvbnNlLCBzLmRhdGFUeXBlKTtcblx0XHRcdH1cblxuXHRcdFx0cHJldiA9IGN1cnJlbnQ7XG5cdFx0XHRjdXJyZW50ID0gZGF0YVR5cGVzLnNoaWZ0KCk7XG5cblx0XHRcdGlmIChjdXJyZW50KSB7XG5cblx0XHRcdFx0Ly8gVGhlcmUncyBvbmx5IHdvcmsgdG8gZG8gaWYgY3VycmVudCBkYXRhVHlwZSBpcyBub24tYXV0b1xuXHRcdFx0XHRpZiAoY3VycmVudCA9PT0gXCIqXCIpIHtcblxuXHRcdFx0XHRcdGN1cnJlbnQgPSBwcmV2O1xuXG5cdFx0XHRcdFx0Ly8gQ29udmVydCByZXNwb25zZSBpZiBwcmV2IGRhdGFUeXBlIGlzIG5vbi1hdXRvIGFuZCBkaWZmZXJzIGZyb20gY3VycmVudFxuXHRcdFx0XHR9IGVsc2UgaWYgKHByZXYgIT09IFwiKlwiICYmIHByZXYgIT09IGN1cnJlbnQpIHtcblxuXHRcdFx0XHRcdC8vIFNlZWsgYSBkaXJlY3QgY29udmVydGVyXG5cdFx0XHRcdFx0Y29udiA9IGNvbnZlcnRlcnNbcHJldiArIFwiIFwiICsgY3VycmVudF0gfHwgY29udmVydGVyc1tcIiogXCIgKyBjdXJyZW50XTtcblxuXHRcdFx0XHRcdC8vIElmIG5vbmUgZm91bmQsIHNlZWsgYSBwYWlyXG5cdFx0XHRcdFx0aWYgKCFjb252KSB7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnYyIGluIGNvbnZlcnRlcnMpIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBJZiBjb252MiBvdXRwdXRzIGN1cnJlbnRcblx0XHRcdFx0XHRcdFx0dG1wID0gY29udjIuc3BsaXQoXCIgXCIpO1xuXHRcdFx0XHRcdFx0XHRpZiAodG1wWzFdID09PSBjdXJyZW50KSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBJZiBwcmV2IGNhbiBiZSBjb252ZXJ0ZWQgdG8gYWNjZXB0ZWQgaW5wdXRcblx0XHRcdFx0XHRcdFx0XHRjb252ID0gY29udmVydGVyc1twcmV2ICsgXCIgXCIgKyB0bXBbMF1dIHx8IGNvbnZlcnRlcnNbXCIqIFwiICsgdG1wWzBdXTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY29udikge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBDb25kZW5zZSBlcXVpdmFsZW5jZSBjb252ZXJ0ZXJzXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoY29udiA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb252ID0gY29udmVydGVyc1tjb252Ml07XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gT3RoZXJ3aXNlLCBpbnNlcnQgdGhlIGludGVybWVkaWF0ZSBkYXRhVHlwZVxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChjb252ZXJ0ZXJzW2NvbnYyXSAhPT0gdHJ1ZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50ID0gdG1wWzBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhVHlwZXMudW5zaGlmdCh0bXBbMV0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gQXBwbHkgY29udmVydGVyIChpZiBub3QgYW4gZXF1aXZhbGVuY2UpXG5cdFx0XHRcdFx0aWYgKGNvbnYgIT09IHRydWUpIHtcblxuXHRcdFx0XHRcdFx0Ly8gVW5sZXNzIGVycm9ycyBhcmUgYWxsb3dlZCB0byBidWJibGUsIGNhdGNoIGFuZCByZXR1cm4gdGhlbVxuXHRcdFx0XHRcdFx0aWYgKGNvbnYgJiYgcy50aHJvd3MpIHtcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2UgPSBjb252KHJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVzcG9uc2UgPSBjb252KHJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZTogXCJwYXJzZXJlcnJvclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGNvbnYgPyBlIDogXCJObyBjb252ZXJzaW9uIGZyb20gXCIgKyBwcmV2ICsgXCIgdG8gXCIgKyBjdXJyZW50XG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7IHN0YXRlOiBcInN1Y2Nlc3NcIiwgZGF0YTogcmVzcG9uc2UgfTtcblx0fVxuXG5cdGpRdWVyeS5leHRlbmQoe1xuXG5cdFx0Ly8gQ291bnRlciBmb3IgaG9sZGluZyB0aGUgbnVtYmVyIG9mIGFjdGl2ZSBxdWVyaWVzXG5cdFx0YWN0aXZlOiAwLFxuXG5cdFx0Ly8gTGFzdC1Nb2RpZmllZCBoZWFkZXIgY2FjaGUgZm9yIG5leHQgcmVxdWVzdFxuXHRcdGxhc3RNb2RpZmllZDoge30sXG5cdFx0ZXRhZzoge30sXG5cblx0XHRhamF4U2V0dGluZ3M6IHtcblx0XHRcdHVybDogbG9jYXRpb24uaHJlZixcblx0XHRcdHR5cGU6IFwiR0VUXCIsXG5cdFx0XHRpc0xvY2FsOiBybG9jYWxQcm90b2NvbC50ZXN0KGxvY2F0aW9uLnByb3RvY29sKSxcblx0XHRcdGdsb2JhbDogdHJ1ZSxcblx0XHRcdHByb2Nlc3NEYXRhOiB0cnVlLFxuXHRcdFx0YXN5bmM6IHRydWUsXG5cdFx0XHRjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixcblxuXHRcdFx0LypcbiAgIHRpbWVvdXQ6IDAsXG4gICBkYXRhOiBudWxsLFxuICAgZGF0YVR5cGU6IG51bGwsXG4gICB1c2VybmFtZTogbnVsbCxcbiAgIHBhc3N3b3JkOiBudWxsLFxuICAgY2FjaGU6IG51bGwsXG4gICB0aHJvd3M6IGZhbHNlLFxuICAgdHJhZGl0aW9uYWw6IGZhbHNlLFxuICAgaGVhZGVyczoge30sXG4gICAqL1xuXG5cdFx0XHRhY2NlcHRzOiB7XG5cdFx0XHRcdFwiKlwiOiBhbGxUeXBlcyxcblx0XHRcdFx0dGV4dDogXCJ0ZXh0L3BsYWluXCIsXG5cdFx0XHRcdGh0bWw6IFwidGV4dC9odG1sXCIsXG5cdFx0XHRcdHhtbDogXCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsXG5cdFx0XHRcdGpzb246IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJcblx0XHRcdH0sXG5cblx0XHRcdGNvbnRlbnRzOiB7XG5cdFx0XHRcdHhtbDogL1xcYnhtbFxcYi8sXG5cdFx0XHRcdGh0bWw6IC9cXGJodG1sLyxcblx0XHRcdFx0anNvbjogL1xcYmpzb25cXGIvXG5cdFx0XHR9LFxuXG5cdFx0XHRyZXNwb25zZUZpZWxkczoge1xuXHRcdFx0XHR4bWw6IFwicmVzcG9uc2VYTUxcIixcblx0XHRcdFx0dGV4dDogXCJyZXNwb25zZVRleHRcIixcblx0XHRcdFx0anNvbjogXCJyZXNwb25zZUpTT05cIlxuXHRcdFx0fSxcblxuXHRcdFx0Ly8gRGF0YSBjb252ZXJ0ZXJzXG5cdFx0XHQvLyBLZXlzIHNlcGFyYXRlIHNvdXJjZSAob3IgY2F0Y2hhbGwgXCIqXCIpIGFuZCBkZXN0aW5hdGlvbiB0eXBlcyB3aXRoIGEgc2luZ2xlIHNwYWNlXG5cdFx0XHRjb252ZXJ0ZXJzOiB7XG5cblx0XHRcdFx0Ly8gQ29udmVydCBhbnl0aGluZyB0byB0ZXh0XG5cdFx0XHRcdFwiKiB0ZXh0XCI6IFN0cmluZyxcblxuXHRcdFx0XHQvLyBUZXh0IHRvIGh0bWwgKHRydWUgPSBubyB0cmFuc2Zvcm1hdGlvbilcblx0XHRcdFx0XCJ0ZXh0IGh0bWxcIjogdHJ1ZSxcblxuXHRcdFx0XHQvLyBFdmFsdWF0ZSB0ZXh0IGFzIGEganNvbiBleHByZXNzaW9uXG5cdFx0XHRcdFwidGV4dCBqc29uXCI6IEpTT04ucGFyc2UsXG5cblx0XHRcdFx0Ly8gUGFyc2UgdGV4dCBhcyB4bWxcblx0XHRcdFx0XCJ0ZXh0IHhtbFwiOiBqUXVlcnkucGFyc2VYTUxcblx0XHRcdH0sXG5cblx0XHRcdC8vIEZvciBvcHRpb25zIHRoYXQgc2hvdWxkbid0IGJlIGRlZXAgZXh0ZW5kZWQ6XG5cdFx0XHQvLyB5b3UgY2FuIGFkZCB5b3VyIG93biBjdXN0b20gb3B0aW9ucyBoZXJlIGlmXG5cdFx0XHQvLyBhbmQgd2hlbiB5b3UgY3JlYXRlIG9uZSB0aGF0IHNob3VsZG4ndCBiZVxuXHRcdFx0Ly8gZGVlcCBleHRlbmRlZCAoc2VlIGFqYXhFeHRlbmQpXG5cdFx0XHRmbGF0T3B0aW9uczoge1xuXHRcdFx0XHR1cmw6IHRydWUsXG5cdFx0XHRcdGNvbnRleHQ6IHRydWVcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gQ3JlYXRlcyBhIGZ1bGwgZmxlZGdlZCBzZXR0aW5ncyBvYmplY3QgaW50byB0YXJnZXRcblx0XHQvLyB3aXRoIGJvdGggYWpheFNldHRpbmdzIGFuZCBzZXR0aW5ncyBmaWVsZHMuXG5cdFx0Ly8gSWYgdGFyZ2V0IGlzIG9taXR0ZWQsIHdyaXRlcyBpbnRvIGFqYXhTZXR0aW5ncy5cblx0XHRhamF4U2V0dXA6IGZ1bmN0aW9uIGFqYXhTZXR1cCh0YXJnZXQsIHNldHRpbmdzKSB7XG5cdFx0XHRyZXR1cm4gc2V0dGluZ3MgP1xuXG5cdFx0XHQvLyBCdWlsZGluZyBhIHNldHRpbmdzIG9iamVjdFxuXHRcdFx0YWpheEV4dGVuZChhamF4RXh0ZW5kKHRhcmdldCwgalF1ZXJ5LmFqYXhTZXR0aW5ncyksIHNldHRpbmdzKSA6XG5cblx0XHRcdC8vIEV4dGVuZGluZyBhamF4U2V0dGluZ3Ncblx0XHRcdGFqYXhFeHRlbmQoalF1ZXJ5LmFqYXhTZXR0aW5ncywgdGFyZ2V0KTtcblx0XHR9LFxuXG5cdFx0YWpheFByZWZpbHRlcjogYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKHByZWZpbHRlcnMpLFxuXHRcdGFqYXhUcmFuc3BvcnQ6IGFkZFRvUHJlZmlsdGVyc09yVHJhbnNwb3J0cyh0cmFuc3BvcnRzKSxcblxuXHRcdC8vIE1haW4gbWV0aG9kXG5cdFx0YWpheDogZnVuY3Rpb24gYWpheCh1cmwsIG9wdGlvbnMpIHtcblxuXHRcdFx0Ly8gSWYgdXJsIGlzIGFuIG9iamVjdCwgc2ltdWxhdGUgcHJlLTEuNSBzaWduYXR1cmVcblx0XHRcdGlmICgodHlwZW9mIHVybCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHVybCkpID09PSBcIm9iamVjdFwiKSB7XG5cdFx0XHRcdG9wdGlvbnMgPSB1cmw7XG5cdFx0XHRcdHVybCA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRm9yY2Ugb3B0aW9ucyB0byBiZSBhbiBvYmplY3Rcblx0XHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdFx0XHR2YXIgdHJhbnNwb3J0LFxuXG5cblx0XHRcdC8vIFVSTCB3aXRob3V0IGFudGktY2FjaGUgcGFyYW1cblx0XHRcdGNhY2hlVVJMLFxuXG5cblx0XHRcdC8vIFJlc3BvbnNlIGhlYWRlcnNcblx0XHRcdHJlc3BvbnNlSGVhZGVyc1N0cmluZyxcblx0XHRcdCAgICByZXNwb25zZUhlYWRlcnMsXG5cblxuXHRcdFx0Ly8gdGltZW91dCBoYW5kbGVcblx0XHRcdHRpbWVvdXRUaW1lcixcblxuXG5cdFx0XHQvLyBVcmwgY2xlYW51cCB2YXJcblx0XHRcdHVybEFuY2hvcixcblxuXG5cdFx0XHQvLyBSZXF1ZXN0IHN0YXRlIChiZWNvbWVzIGZhbHNlIHVwb24gc2VuZCBhbmQgdHJ1ZSB1cG9uIGNvbXBsZXRpb24pXG5cdFx0XHRjb21wbGV0ZWQsXG5cblxuXHRcdFx0Ly8gVG8ga25vdyBpZiBnbG9iYWwgZXZlbnRzIGFyZSB0byBiZSBkaXNwYXRjaGVkXG5cdFx0XHRmaXJlR2xvYmFscyxcblxuXG5cdFx0XHQvLyBMb29wIHZhcmlhYmxlXG5cdFx0XHRpLFxuXG5cblx0XHRcdC8vIHVuY2FjaGVkIHBhcnQgb2YgdGhlIHVybFxuXHRcdFx0dW5jYWNoZWQsXG5cblxuXHRcdFx0Ly8gQ3JlYXRlIHRoZSBmaW5hbCBvcHRpb25zIG9iamVjdFxuXHRcdFx0cyA9IGpRdWVyeS5hamF4U2V0dXAoe30sIG9wdGlvbnMpLFxuXG5cblx0XHRcdC8vIENhbGxiYWNrcyBjb250ZXh0XG5cdFx0XHRjYWxsYmFja0NvbnRleHQgPSBzLmNvbnRleHQgfHwgcyxcblxuXG5cdFx0XHQvLyBDb250ZXh0IGZvciBnbG9iYWwgZXZlbnRzIGlzIGNhbGxiYWNrQ29udGV4dCBpZiBpdCBpcyBhIERPTSBub2RlIG9yIGpRdWVyeSBjb2xsZWN0aW9uXG5cdFx0XHRnbG9iYWxFdmVudENvbnRleHQgPSBzLmNvbnRleHQgJiYgKGNhbGxiYWNrQ29udGV4dC5ub2RlVHlwZSB8fCBjYWxsYmFja0NvbnRleHQuanF1ZXJ5KSA/IGpRdWVyeShjYWxsYmFja0NvbnRleHQpIDogalF1ZXJ5LmV2ZW50LFxuXG5cblx0XHRcdC8vIERlZmVycmVkc1xuXHRcdFx0ZGVmZXJyZWQgPSBqUXVlcnkuRGVmZXJyZWQoKSxcblx0XHRcdCAgICBjb21wbGV0ZURlZmVycmVkID0galF1ZXJ5LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFxuXG5cblx0XHRcdC8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXG5cdFx0XHRfc3RhdHVzQ29kZSA9IHMuc3RhdHVzQ29kZSB8fCB7fSxcblxuXG5cdFx0XHQvLyBIZWFkZXJzICh0aGV5IGFyZSBzZW50IGFsbCBhdCBvbmNlKVxuXHRcdFx0cmVxdWVzdEhlYWRlcnMgPSB7fSxcblx0XHRcdCAgICByZXF1ZXN0SGVhZGVyc05hbWVzID0ge30sXG5cblxuXHRcdFx0Ly8gRGVmYXVsdCBhYm9ydCBtZXNzYWdlXG5cdFx0XHRzdHJBYm9ydCA9IFwiY2FuY2VsZWRcIixcblxuXG5cdFx0XHQvLyBGYWtlIHhoclxuXHRcdFx0anFYSFIgPSB7XG5cdFx0XHRcdHJlYWR5U3RhdGU6IDAsXG5cblx0XHRcdFx0Ly8gQnVpbGRzIGhlYWRlcnMgaGFzaHRhYmxlIGlmIG5lZWRlZFxuXHRcdFx0XHRnZXRSZXNwb25zZUhlYWRlcjogZnVuY3Rpb24gZ2V0UmVzcG9uc2VIZWFkZXIoa2V5KSB7XG5cdFx0XHRcdFx0dmFyIG1hdGNoO1xuXHRcdFx0XHRcdGlmIChjb21wbGV0ZWQpIHtcblx0XHRcdFx0XHRcdGlmICghcmVzcG9uc2VIZWFkZXJzKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlSGVhZGVycyA9IHt9O1xuXHRcdFx0XHRcdFx0XHR3aGlsZSAobWF0Y2ggPSByaGVhZGVycy5leGVjKHJlc3BvbnNlSGVhZGVyc1N0cmluZykpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXNwb25zZUhlYWRlcnNbbWF0Y2hbMV0udG9Mb3dlckNhc2UoKV0gPSBtYXRjaFsyXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bWF0Y2ggPSByZXNwb25zZUhlYWRlcnNba2V5LnRvTG93ZXJDYXNlKCldO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2ggPT0gbnVsbCA/IG51bGwgOiBtYXRjaDtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBSYXcgc3RyaW5nXG5cdFx0XHRcdGdldEFsbFJlc3BvbnNlSGVhZGVyczogZnVuY3Rpb24gZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkge1xuXHRcdFx0XHRcdHJldHVybiBjb21wbGV0ZWQgPyByZXNwb25zZUhlYWRlcnNTdHJpbmcgOiBudWxsO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIENhY2hlcyB0aGUgaGVhZGVyXG5cdFx0XHRcdHNldFJlcXVlc3RIZWFkZXI6IGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoY29tcGxldGVkID09IG51bGwpIHtcblx0XHRcdFx0XHRcdG5hbWUgPSByZXF1ZXN0SGVhZGVyc05hbWVzW25hbWUudG9Mb3dlckNhc2UoKV0gPSByZXF1ZXN0SGVhZGVyc05hbWVzW25hbWUudG9Mb3dlckNhc2UoKV0gfHwgbmFtZTtcblx0XHRcdFx0XHRcdHJlcXVlc3RIZWFkZXJzW25hbWVdID0gdmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIE92ZXJyaWRlcyByZXNwb25zZSBjb250ZW50LXR5cGUgaGVhZGVyXG5cdFx0XHRcdG92ZXJyaWRlTWltZVR5cGU6IGZ1bmN0aW9uIG92ZXJyaWRlTWltZVR5cGUodHlwZSkge1xuXHRcdFx0XHRcdGlmIChjb21wbGV0ZWQgPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0cy5taW1lVHlwZSA9IHR5cGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXG5cdFx0XHRcdHN0YXR1c0NvZGU6IGZ1bmN0aW9uIHN0YXR1c0NvZGUobWFwKSB7XG5cdFx0XHRcdFx0dmFyIGNvZGU7XG5cdFx0XHRcdFx0aWYgKG1hcCkge1xuXHRcdFx0XHRcdFx0aWYgKGNvbXBsZXRlZCkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIEV4ZWN1dGUgdGhlIGFwcHJvcHJpYXRlIGNhbGxiYWNrc1xuXHRcdFx0XHRcdFx0XHRqcVhIUi5hbHdheXMobWFwW2pxWEhSLnN0YXR1c10pO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBMYXp5LWFkZCB0aGUgbmV3IGNhbGxiYWNrcyBpbiBhIHdheSB0aGF0IHByZXNlcnZlcyBvbGQgb25lc1xuXHRcdFx0XHRcdFx0XHRmb3IgKGNvZGUgaW4gbWFwKSB7XG5cdFx0XHRcdFx0XHRcdFx0X3N0YXR1c0NvZGVbY29kZV0gPSBbX3N0YXR1c0NvZGVbY29kZV0sIG1hcFtjb2RlXV07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gQ2FuY2VsIHRoZSByZXF1ZXN0XG5cdFx0XHRcdGFib3J0OiBmdW5jdGlvbiBhYm9ydChzdGF0dXNUZXh0KSB7XG5cdFx0XHRcdFx0dmFyIGZpbmFsVGV4dCA9IHN0YXR1c1RleHQgfHwgc3RyQWJvcnQ7XG5cdFx0XHRcdFx0aWYgKHRyYW5zcG9ydCkge1xuXHRcdFx0XHRcdFx0dHJhbnNwb3J0LmFib3J0KGZpbmFsVGV4dCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRvbmUoMCwgZmluYWxUZXh0KTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0Ly8gQXR0YWNoIGRlZmVycmVkc1xuXHRcdFx0ZGVmZXJyZWQucHJvbWlzZShqcVhIUik7XG5cblx0XHRcdC8vIEFkZCBwcm90b2NvbCBpZiBub3QgcHJvdmlkZWQgKHByZWZpbHRlcnMgbWlnaHQgZXhwZWN0IGl0KVxuXHRcdFx0Ly8gSGFuZGxlIGZhbHN5IHVybCBpbiB0aGUgc2V0dGluZ3Mgb2JqZWN0ICgjMTAwOTM6IGNvbnNpc3RlbmN5IHdpdGggb2xkIHNpZ25hdHVyZSlcblx0XHRcdC8vIFdlIGFsc28gdXNlIHRoZSB1cmwgcGFyYW1ldGVyIGlmIGF2YWlsYWJsZVxuXHRcdFx0cy51cmwgPSAoKHVybCB8fCBzLnVybCB8fCBsb2NhdGlvbi5ocmVmKSArIFwiXCIpLnJlcGxhY2UocnByb3RvY29sLCBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIik7XG5cblx0XHRcdC8vIEFsaWFzIG1ldGhvZCBvcHRpb24gdG8gdHlwZSBhcyBwZXIgdGlja2V0ICMxMjAwNFxuXHRcdFx0cy50eXBlID0gb3B0aW9ucy5tZXRob2QgfHwgb3B0aW9ucy50eXBlIHx8IHMubWV0aG9kIHx8IHMudHlwZTtcblxuXHRcdFx0Ly8gRXh0cmFjdCBkYXRhVHlwZXMgbGlzdFxuXHRcdFx0cy5kYXRhVHlwZXMgPSAocy5kYXRhVHlwZSB8fCBcIipcIikudG9Mb3dlckNhc2UoKS5tYXRjaChybm90aHRtbHdoaXRlKSB8fCBbXCJcIl07XG5cblx0XHRcdC8vIEEgY3Jvc3MtZG9tYWluIHJlcXVlc3QgaXMgaW4gb3JkZXIgd2hlbiB0aGUgb3JpZ2luIGRvZXNuJ3QgbWF0Y2ggdGhlIGN1cnJlbnQgb3JpZ2luLlxuXHRcdFx0aWYgKHMuY3Jvc3NEb21haW4gPT0gbnVsbCkge1xuXHRcdFx0XHR1cmxBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTggLSAxMSwgRWRnZSAxMiAtIDE1XG5cdFx0XHRcdC8vIElFIHRocm93cyBleGNlcHRpb24gb24gYWNjZXNzaW5nIHRoZSBocmVmIHByb3BlcnR5IGlmIHVybCBpcyBtYWxmb3JtZWQsXG5cdFx0XHRcdC8vIGUuZy4gaHR0cDovL2V4YW1wbGUuY29tOjgweC9cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR1cmxBbmNob3IuaHJlZiA9IHMudXJsO1xuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD04IC0gMTEgb25seVxuXHRcdFx0XHRcdC8vIEFuY2hvcidzIGhvc3QgcHJvcGVydHkgaXNuJ3QgY29ycmVjdGx5IHNldCB3aGVuIHMudXJsIGlzIHJlbGF0aXZlXG5cdFx0XHRcdFx0dXJsQW5jaG9yLmhyZWYgPSB1cmxBbmNob3IuaHJlZjtcblx0XHRcdFx0XHRzLmNyb3NzRG9tYWluID0gb3JpZ2luQW5jaG9yLnByb3RvY29sICsgXCIvL1wiICsgb3JpZ2luQW5jaG9yLmhvc3QgIT09IHVybEFuY2hvci5wcm90b2NvbCArIFwiLy9cIiArIHVybEFuY2hvci5ob3N0O1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cblx0XHRcdFx0XHQvLyBJZiB0aGVyZSBpcyBhbiBlcnJvciBwYXJzaW5nIHRoZSBVUkwsIGFzc3VtZSBpdCBpcyBjcm9zc0RvbWFpbixcblx0XHRcdFx0XHQvLyBpdCBjYW4gYmUgcmVqZWN0ZWQgYnkgdGhlIHRyYW5zcG9ydCBpZiBpdCBpcyBpbnZhbGlkXG5cdFx0XHRcdFx0cy5jcm9zc0RvbWFpbiA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29udmVydCBkYXRhIGlmIG5vdCBhbHJlYWR5IGEgc3RyaW5nXG5cdFx0XHRpZiAocy5kYXRhICYmIHMucHJvY2Vzc0RhdGEgJiYgdHlwZW9mIHMuZGF0YSAhPT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRzLmRhdGEgPSBqUXVlcnkucGFyYW0ocy5kYXRhLCBzLnRyYWRpdGlvbmFsKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQXBwbHkgcHJlZmlsdGVyc1xuXHRcdFx0aW5zcGVjdFByZWZpbHRlcnNPclRyYW5zcG9ydHMocHJlZmlsdGVycywgcywgb3B0aW9ucywganFYSFIpO1xuXG5cdFx0XHQvLyBJZiByZXF1ZXN0IHdhcyBhYm9ydGVkIGluc2lkZSBhIHByZWZpbHRlciwgc3RvcCB0aGVyZVxuXHRcdFx0aWYgKGNvbXBsZXRlZCkge1xuXHRcdFx0XHRyZXR1cm4ganFYSFI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFdlIGNhbiBmaXJlIGdsb2JhbCBldmVudHMgYXMgb2Ygbm93IGlmIGFza2VkIHRvXG5cdFx0XHQvLyBEb24ndCBmaXJlIGV2ZW50cyBpZiBqUXVlcnkuZXZlbnQgaXMgdW5kZWZpbmVkIGluIGFuIEFNRC11c2FnZSBzY2VuYXJpbyAoIzE1MTE4KVxuXHRcdFx0ZmlyZUdsb2JhbHMgPSBqUXVlcnkuZXZlbnQgJiYgcy5nbG9iYWw7XG5cblx0XHRcdC8vIFdhdGNoIGZvciBhIG5ldyBzZXQgb2YgcmVxdWVzdHNcblx0XHRcdGlmIChmaXJlR2xvYmFscyAmJiBqUXVlcnkuYWN0aXZlKysgPT09IDApIHtcblx0XHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIik7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFVwcGVyY2FzZSB0aGUgdHlwZVxuXHRcdFx0cy50eXBlID0gcy50eXBlLnRvVXBwZXJDYXNlKCk7XG5cblx0XHRcdC8vIERldGVybWluZSBpZiByZXF1ZXN0IGhhcyBjb250ZW50XG5cdFx0XHRzLmhhc0NvbnRlbnQgPSAhcm5vQ29udGVudC50ZXN0KHMudHlwZSk7XG5cblx0XHRcdC8vIFNhdmUgdGhlIFVSTCBpbiBjYXNlIHdlJ3JlIHRveWluZyB3aXRoIHRoZSBJZi1Nb2RpZmllZC1TaW5jZVxuXHRcdFx0Ly8gYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyIGxhdGVyIG9uXG5cdFx0XHQvLyBSZW1vdmUgaGFzaCB0byBzaW1wbGlmeSB1cmwgbWFuaXB1bGF0aW9uXG5cdFx0XHRjYWNoZVVSTCA9IHMudXJsLnJlcGxhY2Uocmhhc2gsIFwiXCIpO1xuXG5cdFx0XHQvLyBNb3JlIG9wdGlvbnMgaGFuZGxpbmcgZm9yIHJlcXVlc3RzIHdpdGggbm8gY29udGVudFxuXHRcdFx0aWYgKCFzLmhhc0NvbnRlbnQpIHtcblxuXHRcdFx0XHQvLyBSZW1lbWJlciB0aGUgaGFzaCBzbyB3ZSBjYW4gcHV0IGl0IGJhY2tcblx0XHRcdFx0dW5jYWNoZWQgPSBzLnVybC5zbGljZShjYWNoZVVSTC5sZW5ndGgpO1xuXG5cdFx0XHRcdC8vIElmIGRhdGEgaXMgYXZhaWxhYmxlIGFuZCBzaG91bGQgYmUgcHJvY2Vzc2VkLCBhcHBlbmQgZGF0YSB0byB1cmxcblx0XHRcdFx0aWYgKHMuZGF0YSAmJiAocy5wcm9jZXNzRGF0YSB8fCB0eXBlb2Ygcy5kYXRhID09PSBcInN0cmluZ1wiKSkge1xuXHRcdFx0XHRcdGNhY2hlVVJMICs9IChycXVlcnkudGVzdChjYWNoZVVSTCkgPyBcIiZcIiA6IFwiP1wiKSArIHMuZGF0YTtcblxuXHRcdFx0XHRcdC8vICM5NjgyOiByZW1vdmUgZGF0YSBzbyB0aGF0IGl0J3Mgbm90IHVzZWQgaW4gYW4gZXZlbnR1YWwgcmV0cnlcblx0XHRcdFx0XHRkZWxldGUgcy5kYXRhO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQWRkIG9yIHVwZGF0ZSBhbnRpLWNhY2hlIHBhcmFtIGlmIG5lZWRlZFxuXHRcdFx0XHRpZiAocy5jYWNoZSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHRjYWNoZVVSTCA9IGNhY2hlVVJMLnJlcGxhY2UocmFudGlDYWNoZSwgXCIkMVwiKTtcblx0XHRcdFx0XHR1bmNhY2hlZCA9IChycXVlcnkudGVzdChjYWNoZVVSTCkgPyBcIiZcIiA6IFwiP1wiKSArIFwiXz1cIiArIG5vbmNlKysgKyB1bmNhY2hlZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFB1dCBoYXNoIGFuZCBhbnRpLWNhY2hlIG9uIHRoZSBVUkwgdGhhdCB3aWxsIGJlIHJlcXVlc3RlZCAoZ2gtMTczMilcblx0XHRcdFx0cy51cmwgPSBjYWNoZVVSTCArIHVuY2FjaGVkO1xuXG5cdFx0XHRcdC8vIENoYW5nZSAnJTIwJyB0byAnKycgaWYgdGhpcyBpcyBlbmNvZGVkIGZvcm0gYm9keSBjb250ZW50IChnaC0yNjU4KVxuXHRcdFx0fSBlbHNlIGlmIChzLmRhdGEgJiYgcy5wcm9jZXNzRGF0YSAmJiAocy5jb250ZW50VHlwZSB8fCBcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpID09PSAwKSB7XG5cdFx0XHRcdHMuZGF0YSA9IHMuZGF0YS5yZXBsYWNlKHIyMCwgXCIrXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXQgdGhlIElmLU1vZGlmaWVkLVNpbmNlIGFuZC9vciBJZi1Ob25lLU1hdGNoIGhlYWRlciwgaWYgaW4gaWZNb2RpZmllZCBtb2RlLlxuXHRcdFx0aWYgKHMuaWZNb2RpZmllZCkge1xuXHRcdFx0XHRpZiAoalF1ZXJ5Lmxhc3RNb2RpZmllZFtjYWNoZVVSTF0pIHtcblx0XHRcdFx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTW9kaWZpZWQtU2luY2VcIiwgalF1ZXJ5Lmxhc3RNb2RpZmllZFtjYWNoZVVSTF0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChqUXVlcnkuZXRhZ1tjYWNoZVVSTF0pIHtcblx0XHRcdFx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLCBqUXVlcnkuZXRhZ1tjYWNoZVVSTF0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNldCB0aGUgY29ycmVjdCBoZWFkZXIsIGlmIGRhdGEgaXMgYmVpbmcgc2VudFxuXHRcdFx0aWYgKHMuZGF0YSAmJiBzLmhhc0NvbnRlbnQgJiYgcy5jb250ZW50VHlwZSAhPT0gZmFsc2UgfHwgb3B0aW9ucy5jb250ZW50VHlwZSkge1xuXHRcdFx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIHMuY29udGVudFR5cGUpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXQgdGhlIEFjY2VwdHMgaGVhZGVyIGZvciB0aGUgc2VydmVyLCBkZXBlbmRpbmcgb24gdGhlIGRhdGFUeXBlXG5cdFx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsIHMuZGF0YVR5cGVzWzBdICYmIHMuYWNjZXB0c1tzLmRhdGFUeXBlc1swXV0gPyBzLmFjY2VwdHNbcy5kYXRhVHlwZXNbMF1dICsgKHMuZGF0YVR5cGVzWzBdICE9PSBcIipcIiA/IFwiLCBcIiArIGFsbFR5cGVzICsgXCI7IHE9MC4wMVwiIDogXCJcIikgOiBzLmFjY2VwdHNbXCIqXCJdKTtcblxuXHRcdFx0Ly8gQ2hlY2sgZm9yIGhlYWRlcnMgb3B0aW9uXG5cdFx0XHRmb3IgKGkgaW4gcy5oZWFkZXJzKSB7XG5cdFx0XHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoaSwgcy5oZWFkZXJzW2ldKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWxsb3cgY3VzdG9tIGhlYWRlcnMvbWltZXR5cGVzIGFuZCBlYXJseSBhYm9ydFxuXHRcdFx0aWYgKHMuYmVmb3JlU2VuZCAmJiAocy5iZWZvcmVTZW5kLmNhbGwoY2FsbGJhY2tDb250ZXh0LCBqcVhIUiwgcykgPT09IGZhbHNlIHx8IGNvbXBsZXRlZCkpIHtcblxuXHRcdFx0XHQvLyBBYm9ydCBpZiBub3QgZG9uZSBhbHJlYWR5IGFuZCByZXR1cm5cblx0XHRcdFx0cmV0dXJuIGpxWEhSLmFib3J0KCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFib3J0aW5nIGlzIG5vIGxvbmdlciBhIGNhbmNlbGxhdGlvblxuXHRcdFx0c3RyQWJvcnQgPSBcImFib3J0XCI7XG5cblx0XHRcdC8vIEluc3RhbGwgY2FsbGJhY2tzIG9uIGRlZmVycmVkc1xuXHRcdFx0Y29tcGxldGVEZWZlcnJlZC5hZGQocy5jb21wbGV0ZSk7XG5cdFx0XHRqcVhIUi5kb25lKHMuc3VjY2Vzcyk7XG5cdFx0XHRqcVhIUi5mYWlsKHMuZXJyb3IpO1xuXG5cdFx0XHQvLyBHZXQgdHJhbnNwb3J0XG5cdFx0XHR0cmFuc3BvcnQgPSBpbnNwZWN0UHJlZmlsdGVyc09yVHJhbnNwb3J0cyh0cmFuc3BvcnRzLCBzLCBvcHRpb25zLCBqcVhIUik7XG5cblx0XHRcdC8vIElmIG5vIHRyYW5zcG9ydCwgd2UgYXV0by1hYm9ydFxuXHRcdFx0aWYgKCF0cmFuc3BvcnQpIHtcblx0XHRcdFx0ZG9uZSgtMSwgXCJObyBUcmFuc3BvcnRcIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRqcVhIUi5yZWFkeVN0YXRlID0gMTtcblxuXHRcdFx0XHQvLyBTZW5kIGdsb2JhbCBldmVudFxuXHRcdFx0XHRpZiAoZmlyZUdsb2JhbHMpIHtcblx0XHRcdFx0XHRnbG9iYWxFdmVudENvbnRleHQudHJpZ2dlcihcImFqYXhTZW5kXCIsIFtqcVhIUiwgc10pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgcmVxdWVzdCB3YXMgYWJvcnRlZCBpbnNpZGUgYWpheFNlbmQsIHN0b3AgdGhlcmVcblx0XHRcdFx0aWYgKGNvbXBsZXRlZCkge1xuXHRcdFx0XHRcdHJldHVybiBqcVhIUjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFRpbWVvdXRcblx0XHRcdFx0aWYgKHMuYXN5bmMgJiYgcy50aW1lb3V0ID4gMCkge1xuXHRcdFx0XHRcdHRpbWVvdXRUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGpxWEhSLmFib3J0KFwidGltZW91dFwiKTtcblx0XHRcdFx0XHR9LCBzLnRpbWVvdXQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb21wbGV0ZWQgPSBmYWxzZTtcblx0XHRcdFx0XHR0cmFuc3BvcnQuc2VuZChyZXF1ZXN0SGVhZGVycywgZG9uZSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblxuXHRcdFx0XHRcdC8vIFJldGhyb3cgcG9zdC1jb21wbGV0aW9uIGV4Y2VwdGlvbnNcblx0XHRcdFx0XHRpZiAoY29tcGxldGVkKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFByb3BhZ2F0ZSBvdGhlcnMgYXMgcmVzdWx0c1xuXHRcdFx0XHRcdGRvbmUoLTEsIGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIENhbGxiYWNrIGZvciB3aGVuIGV2ZXJ5dGhpbmcgaXMgZG9uZVxuXHRcdFx0ZnVuY3Rpb24gZG9uZShzdGF0dXMsIG5hdGl2ZVN0YXR1c1RleHQsIHJlc3BvbnNlcywgaGVhZGVycykge1xuXHRcdFx0XHR2YXIgaXNTdWNjZXNzLFxuXHRcdFx0XHQgICAgc3VjY2Vzcyxcblx0XHRcdFx0ICAgIGVycm9yLFxuXHRcdFx0XHQgICAgcmVzcG9uc2UsXG5cdFx0XHRcdCAgICBtb2RpZmllZCxcblx0XHRcdFx0ICAgIHN0YXR1c1RleHQgPSBuYXRpdmVTdGF0dXNUZXh0O1xuXG5cdFx0XHRcdC8vIElnbm9yZSByZXBlYXQgaW52b2NhdGlvbnNcblx0XHRcdFx0aWYgKGNvbXBsZXRlZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbXBsZXRlZCA9IHRydWU7XG5cblx0XHRcdFx0Ly8gQ2xlYXIgdGltZW91dCBpZiBpdCBleGlzdHNcblx0XHRcdFx0aWYgKHRpbWVvdXRUaW1lcikge1xuXHRcdFx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dFRpbWVyKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIERlcmVmZXJlbmNlIHRyYW5zcG9ydCBmb3IgZWFybHkgZ2FyYmFnZSBjb2xsZWN0aW9uXG5cdFx0XHRcdC8vIChubyBtYXR0ZXIgaG93IGxvbmcgdGhlIGpxWEhSIG9iamVjdCB3aWxsIGJlIHVzZWQpXG5cdFx0XHRcdHRyYW5zcG9ydCA9IHVuZGVmaW5lZDtcblxuXHRcdFx0XHQvLyBDYWNoZSByZXNwb25zZSBoZWFkZXJzXG5cdFx0XHRcdHJlc3BvbnNlSGVhZGVyc1N0cmluZyA9IGhlYWRlcnMgfHwgXCJcIjtcblxuXHRcdFx0XHQvLyBTZXQgcmVhZHlTdGF0ZVxuXHRcdFx0XHRqcVhIUi5yZWFkeVN0YXRlID0gc3RhdHVzID4gMCA/IDQgOiAwO1xuXG5cdFx0XHRcdC8vIERldGVybWluZSBpZiBzdWNjZXNzZnVsXG5cdFx0XHRcdGlzU3VjY2VzcyA9IHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwIHx8IHN0YXR1cyA9PT0gMzA0O1xuXG5cdFx0XHRcdC8vIEdldCByZXNwb25zZSBkYXRhXG5cdFx0XHRcdGlmIChyZXNwb25zZXMpIHtcblx0XHRcdFx0XHRyZXNwb25zZSA9IGFqYXhIYW5kbGVSZXNwb25zZXMocywganFYSFIsIHJlc3BvbnNlcyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDb252ZXJ0IG5vIG1hdHRlciB3aGF0ICh0aGF0IHdheSByZXNwb25zZVhYWCBmaWVsZHMgYXJlIGFsd2F5cyBzZXQpXG5cdFx0XHRcdHJlc3BvbnNlID0gYWpheENvbnZlcnQocywgcmVzcG9uc2UsIGpxWEhSLCBpc1N1Y2Nlc3MpO1xuXG5cdFx0XHRcdC8vIElmIHN1Y2Nlc3NmdWwsIGhhbmRsZSB0eXBlIGNoYWluaW5nXG5cdFx0XHRcdGlmIChpc1N1Y2Nlc3MpIHtcblxuXHRcdFx0XHRcdC8vIFNldCB0aGUgSWYtTW9kaWZpZWQtU2luY2UgYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyLCBpZiBpbiBpZk1vZGlmaWVkIG1vZGUuXG5cdFx0XHRcdFx0aWYgKHMuaWZNb2RpZmllZCkge1xuXHRcdFx0XHRcdFx0bW9kaWZpZWQgPSBqcVhIUi5nZXRSZXNwb25zZUhlYWRlcihcIkxhc3QtTW9kaWZpZWRcIik7XG5cdFx0XHRcdFx0XHRpZiAobW9kaWZpZWQpIHtcblx0XHRcdFx0XHRcdFx0alF1ZXJ5Lmxhc3RNb2RpZmllZFtjYWNoZVVSTF0gPSBtb2RpZmllZDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG1vZGlmaWVkID0ganFYSFIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpO1xuXHRcdFx0XHRcdFx0aWYgKG1vZGlmaWVkKSB7XG5cdFx0XHRcdFx0XHRcdGpRdWVyeS5ldGFnW2NhY2hlVVJMXSA9IG1vZGlmaWVkO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIGlmIG5vIGNvbnRlbnRcblx0XHRcdFx0XHRpZiAoc3RhdHVzID09PSAyMDQgfHwgcy50eXBlID09PSBcIkhFQURcIikge1xuXHRcdFx0XHRcdFx0c3RhdHVzVGV4dCA9IFwibm9jb250ZW50XCI7XG5cblx0XHRcdFx0XHRcdC8vIGlmIG5vdCBtb2RpZmllZFxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoc3RhdHVzID09PSAzMDQpIHtcblx0XHRcdFx0XHRcdHN0YXR1c1RleHQgPSBcIm5vdG1vZGlmaWVkXCI7XG5cblx0XHRcdFx0XHRcdC8vIElmIHdlIGhhdmUgZGF0YSwgbGV0J3MgY29udmVydCBpdFxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdGU7XG5cdFx0XHRcdFx0XHRzdWNjZXNzID0gcmVzcG9uc2UuZGF0YTtcblx0XHRcdFx0XHRcdGVycm9yID0gcmVzcG9uc2UuZXJyb3I7XG5cdFx0XHRcdFx0XHRpc1N1Y2Nlc3MgPSAhZXJyb3I7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0Ly8gRXh0cmFjdCBlcnJvciBmcm9tIHN0YXR1c1RleHQgYW5kIG5vcm1hbGl6ZSBmb3Igbm9uLWFib3J0c1xuXHRcdFx0XHRcdGVycm9yID0gc3RhdHVzVGV4dDtcblx0XHRcdFx0XHRpZiAoc3RhdHVzIHx8ICFzdGF0dXNUZXh0KSB7XG5cdFx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gXCJlcnJvclwiO1xuXHRcdFx0XHRcdFx0aWYgKHN0YXR1cyA8IDApIHtcblx0XHRcdFx0XHRcdFx0c3RhdHVzID0gMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTZXQgZGF0YSBmb3IgdGhlIGZha2UgeGhyIG9iamVjdFxuXHRcdFx0XHRqcVhIUi5zdGF0dXMgPSBzdGF0dXM7XG5cdFx0XHRcdGpxWEhSLnN0YXR1c1RleHQgPSAobmF0aXZlU3RhdHVzVGV4dCB8fCBzdGF0dXNUZXh0KSArIFwiXCI7XG5cblx0XHRcdFx0Ly8gU3VjY2Vzcy9FcnJvclxuXHRcdFx0XHRpZiAoaXNTdWNjZXNzKSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZVdpdGgoY2FsbGJhY2tDb250ZXh0LCBbc3VjY2Vzcywgc3RhdHVzVGV4dCwganFYSFJdKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3RXaXRoKGNhbGxiYWNrQ29udGV4dCwgW2pxWEhSLCBzdGF0dXNUZXh0LCBlcnJvcl0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU3RhdHVzLWRlcGVuZGVudCBjYWxsYmFja3Ncblx0XHRcdFx0anFYSFIuc3RhdHVzQ29kZShfc3RhdHVzQ29kZSk7XG5cdFx0XHRcdF9zdGF0dXNDb2RlID0gdW5kZWZpbmVkO1xuXG5cdFx0XHRcdGlmIChmaXJlR2xvYmFscykge1xuXHRcdFx0XHRcdGdsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKGlzU3VjY2VzcyA/IFwiYWpheFN1Y2Nlc3NcIiA6IFwiYWpheEVycm9yXCIsIFtqcVhIUiwgcywgaXNTdWNjZXNzID8gc3VjY2VzcyA6IGVycm9yXSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDb21wbGV0ZVxuXHRcdFx0XHRjb21wbGV0ZURlZmVycmVkLmZpcmVXaXRoKGNhbGxiYWNrQ29udGV4dCwgW2pxWEhSLCBzdGF0dXNUZXh0XSk7XG5cblx0XHRcdFx0aWYgKGZpcmVHbG9iYWxzKSB7XG5cdFx0XHRcdFx0Z2xvYmFsRXZlbnRDb250ZXh0LnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIiwgW2pxWEhSLCBzXSk7XG5cblx0XHRcdFx0XHQvLyBIYW5kbGUgdGhlIGdsb2JhbCBBSkFYIGNvdW50ZXJcblx0XHRcdFx0XHRpZiAoISAtLWpRdWVyeS5hY3RpdmUpIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBqcVhIUjtcblx0XHR9LFxuXG5cdFx0Z2V0SlNPTjogZnVuY3Rpb24gZ2V0SlNPTih1cmwsIGRhdGEsIGNhbGxiYWNrKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LmdldCh1cmwsIGRhdGEsIGNhbGxiYWNrLCBcImpzb25cIik7XG5cdFx0fSxcblxuXHRcdGdldFNjcmlwdDogZnVuY3Rpb24gZ2V0U2NyaXB0KHVybCwgY2FsbGJhY2spIHtcblx0XHRcdHJldHVybiBqUXVlcnkuZ2V0KHVybCwgdW5kZWZpbmVkLCBjYWxsYmFjaywgXCJzY3JpcHRcIik7XG5cdFx0fVxuXHR9KTtcblxuXHRqUXVlcnkuZWFjaChbXCJnZXRcIiwgXCJwb3N0XCJdLCBmdW5jdGlvbiAoaSwgbWV0aG9kKSB7XG5cdFx0alF1ZXJ5W21ldGhvZF0gPSBmdW5jdGlvbiAodXJsLCBkYXRhLCBjYWxsYmFjaywgdHlwZSkge1xuXG5cdFx0XHQvLyBTaGlmdCBhcmd1bWVudHMgaWYgZGF0YSBhcmd1bWVudCB3YXMgb21pdHRlZFxuXHRcdFx0aWYgKGlzRnVuY3Rpb24oZGF0YSkpIHtcblx0XHRcdFx0dHlwZSA9IHR5cGUgfHwgY2FsbGJhY2s7XG5cdFx0XHRcdGNhbGxiYWNrID0gZGF0YTtcblx0XHRcdFx0ZGF0YSA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVGhlIHVybCBjYW4gYmUgYW4gb3B0aW9ucyBvYmplY3QgKHdoaWNoIHRoZW4gbXVzdCBoYXZlIC51cmwpXG5cdFx0XHRyZXR1cm4galF1ZXJ5LmFqYXgoalF1ZXJ5LmV4dGVuZCh7XG5cdFx0XHRcdHVybDogdXJsLFxuXHRcdFx0XHR0eXBlOiBtZXRob2QsXG5cdFx0XHRcdGRhdGFUeXBlOiB0eXBlLFxuXHRcdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0XHRzdWNjZXNzOiBjYWxsYmFja1xuXHRcdFx0fSwgalF1ZXJ5LmlzUGxhaW5PYmplY3QodXJsKSAmJiB1cmwpKTtcblx0XHR9O1xuXHR9KTtcblxuXHRqUXVlcnkuX2V2YWxVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5hamF4KHtcblx0XHRcdHVybDogdXJsLFxuXG5cdFx0XHQvLyBNYWtlIHRoaXMgZXhwbGljaXQsIHNpbmNlIHVzZXIgY2FuIG92ZXJyaWRlIHRoaXMgdGhyb3VnaCBhamF4U2V0dXAgKCMxMTI2NClcblx0XHRcdHR5cGU6IFwiR0VUXCIsXG5cdFx0XHRkYXRhVHlwZTogXCJzY3JpcHRcIixcblx0XHRcdGNhY2hlOiB0cnVlLFxuXHRcdFx0YXN5bmM6IGZhbHNlLFxuXHRcdFx0Z2xvYmFsOiBmYWxzZSxcblx0XHRcdFwidGhyb3dzXCI6IHRydWVcblx0XHR9KTtcblx0fTtcblxuXHRqUXVlcnkuZm4uZXh0ZW5kKHtcblx0XHR3cmFwQWxsOiBmdW5jdGlvbiB3cmFwQWxsKGh0bWwpIHtcblx0XHRcdHZhciB3cmFwO1xuXG5cdFx0XHRpZiAodGhpc1swXSkge1xuXHRcdFx0XHRpZiAoaXNGdW5jdGlvbihodG1sKSkge1xuXHRcdFx0XHRcdGh0bWwgPSBodG1sLmNhbGwodGhpc1swXSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBUaGUgZWxlbWVudHMgdG8gd3JhcCB0aGUgdGFyZ2V0IGFyb3VuZFxuXHRcdFx0XHR3cmFwID0galF1ZXJ5KGh0bWwsIHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUodHJ1ZSk7XG5cblx0XHRcdFx0aWYgKHRoaXNbMF0ucGFyZW50Tm9kZSkge1xuXHRcdFx0XHRcdHdyYXAuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d3JhcC5tYXAoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHZhciBlbGVtID0gdGhpcztcblxuXHRcdFx0XHRcdHdoaWxlIChlbGVtLmZpcnN0RWxlbWVudENoaWxkKSB7XG5cdFx0XHRcdFx0XHRlbGVtID0gZWxlbS5maXJzdEVsZW1lbnRDaGlsZDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gZWxlbTtcblx0XHRcdFx0fSkuYXBwZW5kKHRoaXMpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXG5cdFx0d3JhcElubmVyOiBmdW5jdGlvbiB3cmFwSW5uZXIoaHRtbCkge1xuXHRcdFx0aWYgKGlzRnVuY3Rpb24oaHRtbCkpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoaSkge1xuXHRcdFx0XHRcdGpRdWVyeSh0aGlzKS53cmFwSW5uZXIoaHRtbC5jYWxsKHRoaXMsIGkpKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgc2VsZiA9IGpRdWVyeSh0aGlzKSxcblx0XHRcdFx0ICAgIGNvbnRlbnRzID0gc2VsZi5jb250ZW50cygpO1xuXG5cdFx0XHRcdGlmIChjb250ZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0XHRjb250ZW50cy53cmFwQWxsKGh0bWwpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNlbGYuYXBwZW5kKGh0bWwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0d3JhcDogZnVuY3Rpb24gd3JhcChodG1sKSB7XG5cdFx0XHR2YXIgaHRtbElzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uKGh0bWwpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdGpRdWVyeSh0aGlzKS53cmFwQWxsKGh0bWxJc0Z1bmN0aW9uID8gaHRtbC5jYWxsKHRoaXMsIGkpIDogaHRtbCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0dW53cmFwOiBmdW5jdGlvbiB1bndyYXAoc2VsZWN0b3IpIHtcblx0XHRcdHRoaXMucGFyZW50KHNlbGVjdG9yKS5ub3QoXCJib2R5XCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRqUXVlcnkodGhpcykucmVwbGFjZVdpdGgodGhpcy5jaGlsZE5vZGVzKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHR9KTtcblxuXHRqUXVlcnkuZXhwci5wc2V1ZG9zLmhpZGRlbiA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0cmV0dXJuICFqUXVlcnkuZXhwci5wc2V1ZG9zLnZpc2libGUoZWxlbSk7XG5cdH07XG5cdGpRdWVyeS5leHByLnBzZXVkb3MudmlzaWJsZSA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0cmV0dXJuICEhKGVsZW0ub2Zmc2V0V2lkdGggfHwgZWxlbS5vZmZzZXRIZWlnaHQgfHwgZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCk7XG5cdH07XG5cblx0alF1ZXJ5LmFqYXhTZXR0aW5ncy54aHIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0fTtcblxuXHR2YXIgeGhyU3VjY2Vzc1N0YXR1cyA9IHtcblxuXHRcdC8vIEZpbGUgcHJvdG9jb2wgYWx3YXlzIHlpZWxkcyBzdGF0dXMgY29kZSAwLCBhc3N1bWUgMjAwXG5cdFx0MDogMjAwLFxuXG5cdFx0Ly8gU3VwcG9ydDogSUUgPD05IG9ubHlcblx0XHQvLyAjMTQ1MDogc29tZXRpbWVzIElFIHJldHVybnMgMTIyMyB3aGVuIGl0IHNob3VsZCBiZSAyMDRcblx0XHQxMjIzOiAyMDRcblx0fSxcblx0ICAgIHhoclN1cHBvcnRlZCA9IGpRdWVyeS5hamF4U2V0dGluZ3MueGhyKCk7XG5cblx0c3VwcG9ydC5jb3JzID0gISF4aHJTdXBwb3J0ZWQgJiYgXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiB4aHJTdXBwb3J0ZWQ7XG5cdHN1cHBvcnQuYWpheCA9IHhoclN1cHBvcnRlZCA9ICEheGhyU3VwcG9ydGVkO1xuXG5cdGpRdWVyeS5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdFx0dmFyIF9jYWxsYmFjaywgZXJyb3JDYWxsYmFjaztcblxuXHRcdC8vIENyb3NzIGRvbWFpbiBvbmx5IGFsbG93ZWQgaWYgc3VwcG9ydGVkIHRocm91Z2ggWE1MSHR0cFJlcXVlc3Rcblx0XHRpZiAoc3VwcG9ydC5jb3JzIHx8IHhoclN1cHBvcnRlZCAmJiAhb3B0aW9ucy5jcm9zc0RvbWFpbikge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c2VuZDogZnVuY3Rpb24gc2VuZChoZWFkZXJzLCBjb21wbGV0ZSkge1xuXHRcdFx0XHRcdHZhciBpLFxuXHRcdFx0XHRcdCAgICB4aHIgPSBvcHRpb25zLnhocigpO1xuXG5cdFx0XHRcdFx0eGhyLm9wZW4ob3B0aW9ucy50eXBlLCBvcHRpb25zLnVybCwgb3B0aW9ucy5hc3luYywgb3B0aW9ucy51c2VybmFtZSwgb3B0aW9ucy5wYXNzd29yZCk7XG5cblx0XHRcdFx0XHQvLyBBcHBseSBjdXN0b20gZmllbGRzIGlmIHByb3ZpZGVkXG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMueGhyRmllbGRzKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGkgaW4gb3B0aW9ucy54aHJGaWVsZHMpIHtcblx0XHRcdFx0XHRcdFx0eGhyW2ldID0gb3B0aW9ucy54aHJGaWVsZHNbaV07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gT3ZlcnJpZGUgbWltZSB0eXBlIGlmIG5lZWRlZFxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm1pbWVUeXBlICYmIHhoci5vdmVycmlkZU1pbWVUeXBlKSB7XG5cdFx0XHRcdFx0XHR4aHIub3ZlcnJpZGVNaW1lVHlwZShvcHRpb25zLm1pbWVUeXBlKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBYLVJlcXVlc3RlZC1XaXRoIGhlYWRlclxuXHRcdFx0XHRcdC8vIEZvciBjcm9zcy1kb21haW4gcmVxdWVzdHMsIHNlZWluZyBhcyBjb25kaXRpb25zIGZvciBhIHByZWZsaWdodCBhcmVcblx0XHRcdFx0XHQvLyBha2luIHRvIGEgamlnc2F3IHB1enpsZSwgd2Ugc2ltcGx5IG5ldmVyIHNldCBpdCB0byBiZSBzdXJlLlxuXHRcdFx0XHRcdC8vIChpdCBjYW4gYWx3YXlzIGJlIHNldCBvbiBhIHBlci1yZXF1ZXN0IGJhc2lzIG9yIGV2ZW4gdXNpbmcgYWpheFNldHVwKVxuXHRcdFx0XHRcdC8vIEZvciBzYW1lLWRvbWFpbiByZXF1ZXN0cywgd29uJ3QgY2hhbmdlIGhlYWRlciBpZiBhbHJlYWR5IHByb3ZpZGVkLlxuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5jcm9zc0RvbWFpbiAmJiAhaGVhZGVyc1tcIlgtUmVxdWVzdGVkLVdpdGhcIl0pIHtcblx0XHRcdFx0XHRcdGhlYWRlcnNbXCJYLVJlcXVlc3RlZC1XaXRoXCJdID0gXCJYTUxIdHRwUmVxdWVzdFwiO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFNldCBoZWFkZXJzXG5cdFx0XHRcdFx0Zm9yIChpIGluIGhlYWRlcnMpIHtcblx0XHRcdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKGksIGhlYWRlcnNbaV0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIENhbGxiYWNrXG5cdFx0XHRcdFx0X2NhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2sodHlwZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0aWYgKF9jYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0XHRcdF9jYWxsYmFjayA9IGVycm9yQ2FsbGJhY2sgPSB4aHIub25sb2FkID0geGhyLm9uZXJyb3IgPSB4aHIub25hYm9ydCA9IHhoci5vbnRpbWVvdXQgPSB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcblxuXHRcdFx0XHRcdFx0XHRcdGlmICh0eXBlID09PSBcImFib3J0XCIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHhoci5hYm9ydCgpO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZSA9PT0gXCJlcnJvclwiKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBPbiBhIG1hbnVhbCBuYXRpdmUgYWJvcnQsIElFOSB0aHJvd3Ncblx0XHRcdFx0XHRcdFx0XHRcdC8vIGVycm9ycyBvbiBhbnkgcHJvcGVydHkgYWNjZXNzIHRoYXQgaXMgbm90IHJlYWR5U3RhdGVcblx0XHRcdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YgeGhyLnN0YXR1cyAhPT0gXCJudW1iZXJcIikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZSgwLCBcImVycm9yXCIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29tcGxldGUoXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gRmlsZTogcHJvdG9jb2wgYWx3YXlzIHlpZWxkcyBzdGF0dXMgMDsgc2VlICM4NjA1LCAjMTQyMDdcblx0XHRcdFx0XHRcdFx0XHRcdFx0eGhyLnN0YXR1cywgeGhyLnN0YXR1c1RleHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZSh4aHJTdWNjZXNzU3RhdHVzW3hoci5zdGF0dXNdIHx8IHhoci5zdGF0dXMsIHhoci5zdGF0dXNUZXh0LFxuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gSUU5IGhhcyBubyBYSFIyIGJ1dCB0aHJvd3Mgb24gYmluYXJ5ICh0cmFjLTExNDI2KVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gRm9yIFhIUjIgbm9uLXRleHQsIGxldCB0aGUgY2FsbGVyIGhhbmRsZSBpdCAoZ2gtMjQ5OClcblx0XHRcdFx0XHRcdFx0XHRcdCh4aHIucmVzcG9uc2VUeXBlIHx8IFwidGV4dFwiKSAhPT0gXCJ0ZXh0XCIgfHwgdHlwZW9mIHhoci5yZXNwb25zZVRleHQgIT09IFwic3RyaW5nXCIgPyB7IGJpbmFyeTogeGhyLnJlc3BvbnNlIH0gOiB7IHRleHQ6IHhoci5yZXNwb25zZVRleHQgfSwgeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdC8vIExpc3RlbiB0byBldmVudHNcblx0XHRcdFx0XHR4aHIub25sb2FkID0gX2NhbGxiYWNrKCk7XG5cdFx0XHRcdFx0ZXJyb3JDYWxsYmFjayA9IHhoci5vbmVycm9yID0geGhyLm9udGltZW91dCA9IF9jYWxsYmFjayhcImVycm9yXCIpO1xuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgOSBvbmx5XG5cdFx0XHRcdFx0Ly8gVXNlIG9ucmVhZHlzdGF0ZWNoYW5nZSB0byByZXBsYWNlIG9uYWJvcnRcblx0XHRcdFx0XHQvLyB0byBoYW5kbGUgdW5jYXVnaHQgYWJvcnRzXG5cdFx0XHRcdFx0aWYgKHhoci5vbmFib3J0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdHhoci5vbmFib3J0ID0gZXJyb3JDYWxsYmFjaztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBDaGVjayByZWFkeVN0YXRlIGJlZm9yZSB0aW1lb3V0IGFzIGl0IGNoYW5nZXNcblx0XHRcdFx0XHRcdFx0aWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBBbGxvdyBvbmVycm9yIHRvIGJlIGNhbGxlZCBmaXJzdCxcblx0XHRcdFx0XHRcdFx0XHQvLyBidXQgdGhhdCB3aWxsIG5vdCBoYW5kbGUgYSBuYXRpdmUgYWJvcnRcblx0XHRcdFx0XHRcdFx0XHQvLyBBbHNvLCBzYXZlIGVycm9yQ2FsbGJhY2sgdG8gYSB2YXJpYWJsZVxuXHRcdFx0XHRcdFx0XHRcdC8vIGFzIHhoci5vbmVycm9yIGNhbm5vdCBiZSBhY2Nlc3NlZFxuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChfY2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JDYWxsYmFjaygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIENyZWF0ZSB0aGUgYWJvcnQgY2FsbGJhY2tcblx0XHRcdFx0XHRfY2FsbGJhY2sgPSBfY2FsbGJhY2soXCJhYm9ydFwiKTtcblxuXHRcdFx0XHRcdHRyeSB7XG5cblx0XHRcdFx0XHRcdC8vIERvIHNlbmQgdGhlIHJlcXVlc3QgKHRoaXMgbWF5IHJhaXNlIGFuIGV4Y2VwdGlvbilcblx0XHRcdFx0XHRcdHhoci5zZW5kKG9wdGlvbnMuaGFzQ29udGVudCAmJiBvcHRpb25zLmRhdGEgfHwgbnVsbCk7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXG5cdFx0XHRcdFx0XHQvLyAjMTQ2ODM6IE9ubHkgcmV0aHJvdyBpZiB0aGlzIGhhc24ndCBiZWVuIG5vdGlmaWVkIGFzIGFuIGVycm9yIHlldFxuXHRcdFx0XHRcdFx0aWYgKF9jYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0XHR0aHJvdyBlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblxuXHRcdFx0XHRhYm9ydDogZnVuY3Rpb24gYWJvcnQoKSB7XG5cdFx0XHRcdFx0aWYgKF9jYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0X2NhbGxiYWNrKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gUHJldmVudCBhdXRvLWV4ZWN1dGlvbiBvZiBzY3JpcHRzIHdoZW4gbm8gZXhwbGljaXQgZGF0YVR5cGUgd2FzIHByb3ZpZGVkIChTZWUgZ2gtMjQzMilcblx0alF1ZXJ5LmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24gKHMpIHtcblx0XHRpZiAocy5jcm9zc0RvbWFpbikge1xuXHRcdFx0cy5jb250ZW50cy5zY3JpcHQgPSBmYWxzZTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vIEluc3RhbGwgc2NyaXB0IGRhdGFUeXBlXG5cdGpRdWVyeS5hamF4U2V0dXAoe1xuXHRcdGFjY2VwdHM6IHtcblx0XHRcdHNjcmlwdDogXCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIFwiICsgXCJhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIlxuXHRcdH0sXG5cdFx0Y29udGVudHM6IHtcblx0XHRcdHNjcmlwdDogL1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvXG5cdFx0fSxcblx0XHRjb252ZXJ0ZXJzOiB7XG5cdFx0XHRcInRleHQgc2NyaXB0XCI6IGZ1bmN0aW9uIHRleHRTY3JpcHQodGV4dCkge1xuXHRcdFx0XHRqUXVlcnkuZ2xvYmFsRXZhbCh0ZXh0KTtcblx0XHRcdFx0cmV0dXJuIHRleHQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBIYW5kbGUgY2FjaGUncyBzcGVjaWFsIGNhc2UgYW5kIGNyb3NzRG9tYWluXG5cdGpRdWVyeS5hamF4UHJlZmlsdGVyKFwic2NyaXB0XCIsIGZ1bmN0aW9uIChzKSB7XG5cdFx0aWYgKHMuY2FjaGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cy5jYWNoZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZiAocy5jcm9zc0RvbWFpbikge1xuXHRcdFx0cy50eXBlID0gXCJHRVRcIjtcblx0XHR9XG5cdH0pO1xuXG5cdC8vIEJpbmQgc2NyaXB0IHRhZyBoYWNrIHRyYW5zcG9ydFxuXHRqUXVlcnkuYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLCBmdW5jdGlvbiAocykge1xuXG5cdFx0Ly8gVGhpcyB0cmFuc3BvcnQgb25seSBkZWFscyB3aXRoIGNyb3NzIGRvbWFpbiByZXF1ZXN0c1xuXHRcdGlmIChzLmNyb3NzRG9tYWluKSB7XG5cdFx0XHR2YXIgc2NyaXB0LCBfY2FsbGJhY2syO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c2VuZDogZnVuY3Rpb24gc2VuZChfLCBjb21wbGV0ZSkge1xuXHRcdFx0XHRcdHNjcmlwdCA9IGpRdWVyeShcIjxzY3JpcHQ+XCIpLnByb3Aoe1xuXHRcdFx0XHRcdFx0Y2hhcnNldDogcy5zY3JpcHRDaGFyc2V0LFxuXHRcdFx0XHRcdFx0c3JjOiBzLnVybFxuXHRcdFx0XHRcdH0pLm9uKFwibG9hZCBlcnJvclwiLCBfY2FsbGJhY2syID0gZnVuY3Rpb24gY2FsbGJhY2soZXZ0KSB7XG5cdFx0XHRcdFx0XHRzY3JpcHQucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRfY2FsbGJhY2syID0gbnVsbDtcblx0XHRcdFx0XHRcdGlmIChldnQpIHtcblx0XHRcdFx0XHRcdFx0Y29tcGxldGUoZXZ0LnR5cGUgPT09IFwiZXJyb3JcIiA/IDQwNCA6IDIwMCwgZXZ0LnR5cGUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0Ly8gVXNlIG5hdGl2ZSBET00gbWFuaXB1bGF0aW9uIHRvIGF2b2lkIG91ciBkb21NYW5pcCBBSkFYIHRyaWNrZXJ5XG5cdFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHRbMF0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRhYm9ydDogZnVuY3Rpb24gYWJvcnQoKSB7XG5cdFx0XHRcdFx0aWYgKF9jYWxsYmFjazIpIHtcblx0XHRcdFx0XHRcdF9jYWxsYmFjazIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHR9KTtcblxuXHR2YXIgb2xkQ2FsbGJhY2tzID0gW10sXG5cdCAgICByanNvbnAgPSAvKD0pXFw/KD89JnwkKXxcXD9cXD8vO1xuXG5cdC8vIERlZmF1bHQganNvbnAgc2V0dGluZ3Ncblx0alF1ZXJ5LmFqYXhTZXR1cCh7XG5cdFx0anNvbnA6IFwiY2FsbGJhY2tcIixcblx0XHRqc29ucENhbGxiYWNrOiBmdW5jdGlvbiBqc29ucENhbGxiYWNrKCkge1xuXHRcdFx0dmFyIGNhbGxiYWNrID0gb2xkQ2FsbGJhY2tzLnBvcCgpIHx8IGpRdWVyeS5leHBhbmRvICsgXCJfXCIgKyBub25jZSsrO1xuXHRcdFx0dGhpc1tjYWxsYmFja10gPSB0cnVlO1xuXHRcdFx0cmV0dXJuIGNhbGxiYWNrO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gRGV0ZWN0LCBub3JtYWxpemUgb3B0aW9ucyBhbmQgaW5zdGFsbCBjYWxsYmFja3MgZm9yIGpzb25wIHJlcXVlc3RzXG5cdGpRdWVyeS5hamF4UHJlZmlsdGVyKFwianNvbiBqc29ucFwiLCBmdW5jdGlvbiAocywgb3JpZ2luYWxTZXR0aW5ncywganFYSFIpIHtcblxuXHRcdHZhciBjYWxsYmFja05hbWUsXG5cdFx0ICAgIG92ZXJ3cml0dGVuLFxuXHRcdCAgICByZXNwb25zZUNvbnRhaW5lcixcblx0XHQgICAganNvblByb3AgPSBzLmpzb25wICE9PSBmYWxzZSAmJiAocmpzb25wLnRlc3Qocy51cmwpID8gXCJ1cmxcIiA6IHR5cGVvZiBzLmRhdGEgPT09IFwic3RyaW5nXCIgJiYgKHMuY29udGVudFR5cGUgfHwgXCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSA9PT0gMCAmJiByanNvbnAudGVzdChzLmRhdGEpICYmIFwiZGF0YVwiKTtcblxuXHRcdC8vIEhhbmRsZSBpZmYgdGhlIGV4cGVjdGVkIGRhdGEgdHlwZSBpcyBcImpzb25wXCIgb3Igd2UgaGF2ZSBhIHBhcmFtZXRlciB0byBzZXRcblx0XHRpZiAoanNvblByb3AgfHwgcy5kYXRhVHlwZXNbMF0gPT09IFwianNvbnBcIikge1xuXG5cdFx0XHQvLyBHZXQgY2FsbGJhY2sgbmFtZSwgcmVtZW1iZXJpbmcgcHJlZXhpc3RpbmcgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIGl0XG5cdFx0XHRjYWxsYmFja05hbWUgPSBzLmpzb25wQ2FsbGJhY2sgPSBpc0Z1bmN0aW9uKHMuanNvbnBDYWxsYmFjaykgPyBzLmpzb25wQ2FsbGJhY2soKSA6IHMuanNvbnBDYWxsYmFjaztcblxuXHRcdFx0Ly8gSW5zZXJ0IGNhbGxiYWNrIGludG8gdXJsIG9yIGZvcm0gZGF0YVxuXHRcdFx0aWYgKGpzb25Qcm9wKSB7XG5cdFx0XHRcdHNbanNvblByb3BdID0gc1tqc29uUHJvcF0ucmVwbGFjZShyanNvbnAsIFwiJDFcIiArIGNhbGxiYWNrTmFtZSk7XG5cdFx0XHR9IGVsc2UgaWYgKHMuanNvbnAgIT09IGZhbHNlKSB7XG5cdFx0XHRcdHMudXJsICs9IChycXVlcnkudGVzdChzLnVybCkgPyBcIiZcIiA6IFwiP1wiKSArIHMuanNvbnAgKyBcIj1cIiArIGNhbGxiYWNrTmFtZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVXNlIGRhdGEgY29udmVydGVyIHRvIHJldHJpZXZlIGpzb24gYWZ0ZXIgc2NyaXB0IGV4ZWN1dGlvblxuXHRcdFx0cy5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl0gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGlmICghcmVzcG9uc2VDb250YWluZXIpIHtcblx0XHRcdFx0XHRqUXVlcnkuZXJyb3IoY2FsbGJhY2tOYW1lICsgXCIgd2FzIG5vdCBjYWxsZWRcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlQ29udGFpbmVyWzBdO1xuXHRcdFx0fTtcblxuXHRcdFx0Ly8gRm9yY2UganNvbiBkYXRhVHlwZVxuXHRcdFx0cy5kYXRhVHlwZXNbMF0gPSBcImpzb25cIjtcblxuXHRcdFx0Ly8gSW5zdGFsbCBjYWxsYmFja1xuXHRcdFx0b3ZlcndyaXR0ZW4gPSB3aW5kb3dbY2FsbGJhY2tOYW1lXTtcblx0XHRcdHdpbmRvd1tjYWxsYmFja05hbWVdID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXNwb25zZUNvbnRhaW5lciA9IGFyZ3VtZW50cztcblx0XHRcdH07XG5cblx0XHRcdC8vIENsZWFuLXVwIGZ1bmN0aW9uIChmaXJlcyBhZnRlciBjb252ZXJ0ZXJzKVxuXHRcdFx0anFYSFIuYWx3YXlzKGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHQvLyBJZiBwcmV2aW91cyB2YWx1ZSBkaWRuJ3QgZXhpc3QgLSByZW1vdmUgaXRcblx0XHRcdFx0aWYgKG92ZXJ3cml0dGVuID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRqUXVlcnkod2luZG93KS5yZW1vdmVQcm9wKGNhbGxiYWNrTmFtZSk7XG5cblx0XHRcdFx0XHQvLyBPdGhlcndpc2UgcmVzdG9yZSBwcmVleGlzdGluZyB2YWx1ZVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHdpbmRvd1tjYWxsYmFja05hbWVdID0gb3ZlcndyaXR0ZW47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTYXZlIGJhY2sgYXMgZnJlZVxuXHRcdFx0XHRpZiAoc1tjYWxsYmFja05hbWVdKSB7XG5cblx0XHRcdFx0XHQvLyBNYWtlIHN1cmUgdGhhdCByZS11c2luZyB0aGUgb3B0aW9ucyBkb2Vzbid0IHNjcmV3IHRoaW5ncyBhcm91bmRcblx0XHRcdFx0XHRzLmpzb25wQ2FsbGJhY2sgPSBvcmlnaW5hbFNldHRpbmdzLmpzb25wQ2FsbGJhY2s7XG5cblx0XHRcdFx0XHQvLyBTYXZlIHRoZSBjYWxsYmFjayBuYW1lIGZvciBmdXR1cmUgdXNlXG5cdFx0XHRcdFx0b2xkQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2tOYW1lKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENhbGwgaWYgaXQgd2FzIGEgZnVuY3Rpb24gYW5kIHdlIGhhdmUgYSByZXNwb25zZVxuXHRcdFx0XHRpZiAocmVzcG9uc2VDb250YWluZXIgJiYgaXNGdW5jdGlvbihvdmVyd3JpdHRlbikpIHtcblx0XHRcdFx0XHRvdmVyd3JpdHRlbihyZXNwb25zZUNvbnRhaW5lclswXSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXNwb25zZUNvbnRhaW5lciA9IG92ZXJ3cml0dGVuID0gdW5kZWZpbmVkO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIERlbGVnYXRlIHRvIHNjcmlwdFxuXHRcdFx0cmV0dXJuIFwic2NyaXB0XCI7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBTdXBwb3J0OiBTYWZhcmkgOCBvbmx5XG5cdC8vIEluIFNhZmFyaSA4IGRvY3VtZW50cyBjcmVhdGVkIHZpYSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnRcblx0Ly8gY29sbGFwc2Ugc2libGluZyBmb3JtczogdGhlIHNlY29uZCBvbmUgYmVjb21lcyBhIGNoaWxkIG9mIHRoZSBmaXJzdCBvbmUuXG5cdC8vIEJlY2F1c2Ugb2YgdGhhdCwgdGhpcyBzZWN1cml0eSBtZWFzdXJlIGhhcyB0byBiZSBkaXNhYmxlZCBpbiBTYWZhcmkgOC5cblx0Ly8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNzMzN1xuXHRzdXBwb3J0LmNyZWF0ZUhUTUxEb2N1bWVudCA9IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgYm9keSA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKS5ib2R5O1xuXHRcdGJvZHkuaW5uZXJIVE1MID0gXCI8Zm9ybT48L2Zvcm0+PGZvcm0+PC9mb3JtPlwiO1xuXHRcdHJldHVybiBib2R5LmNoaWxkTm9kZXMubGVuZ3RoID09PSAyO1xuXHR9KCk7XG5cblx0Ly8gQXJndW1lbnQgXCJkYXRhXCIgc2hvdWxkIGJlIHN0cmluZyBvZiBodG1sXG5cdC8vIGNvbnRleHQgKG9wdGlvbmFsKTogSWYgc3BlY2lmaWVkLCB0aGUgZnJhZ21lbnQgd2lsbCBiZSBjcmVhdGVkIGluIHRoaXMgY29udGV4dCxcblx0Ly8gZGVmYXVsdHMgdG8gZG9jdW1lbnRcblx0Ly8ga2VlcFNjcmlwdHMgKG9wdGlvbmFsKTogSWYgdHJ1ZSwgd2lsbCBpbmNsdWRlIHNjcmlwdHMgcGFzc2VkIGluIHRoZSBodG1sIHN0cmluZ1xuXHRqUXVlcnkucGFyc2VIVE1MID0gZnVuY3Rpb24gKGRhdGEsIGNvbnRleHQsIGtlZXBTY3JpcHRzKSB7XG5cdFx0aWYgKHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgY29udGV4dCA9PT0gXCJib29sZWFuXCIpIHtcblx0XHRcdGtlZXBTY3JpcHRzID0gY29udGV4dDtcblx0XHRcdGNvbnRleHQgPSBmYWxzZTtcblx0XHR9XG5cblx0XHR2YXIgYmFzZSwgcGFyc2VkLCBzY3JpcHRzO1xuXG5cdFx0aWYgKCFjb250ZXh0KSB7XG5cblx0XHRcdC8vIFN0b3Agc2NyaXB0cyBvciBpbmxpbmUgZXZlbnQgaGFuZGxlcnMgZnJvbSBiZWluZyBleGVjdXRlZCBpbW1lZGlhdGVseVxuXHRcdFx0Ly8gYnkgdXNpbmcgZG9jdW1lbnQuaW1wbGVtZW50YXRpb25cblx0XHRcdGlmIChzdXBwb3J0LmNyZWF0ZUhUTUxEb2N1bWVudCkge1xuXHRcdFx0XHRjb250ZXh0ID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpO1xuXG5cdFx0XHRcdC8vIFNldCB0aGUgYmFzZSBocmVmIGZvciB0aGUgY3JlYXRlZCBkb2N1bWVudFxuXHRcdFx0XHQvLyBzbyBhbnkgcGFyc2VkIGVsZW1lbnRzIHdpdGggVVJMc1xuXHRcdFx0XHQvLyBhcmUgYmFzZWQgb24gdGhlIGRvY3VtZW50J3MgVVJMIChnaC0yOTY1KVxuXHRcdFx0XHRiYXNlID0gY29udGV4dC5jcmVhdGVFbGVtZW50KFwiYmFzZVwiKTtcblx0XHRcdFx0YmFzZS5ocmVmID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcblx0XHRcdFx0Y29udGV4dC5oZWFkLmFwcGVuZENoaWxkKGJhc2UpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29udGV4dCA9IGRvY3VtZW50O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHBhcnNlZCA9IHJzaW5nbGVUYWcuZXhlYyhkYXRhKTtcblx0XHRzY3JpcHRzID0gIWtlZXBTY3JpcHRzICYmIFtdO1xuXG5cdFx0Ly8gU2luZ2xlIHRhZ1xuXHRcdGlmIChwYXJzZWQpIHtcblx0XHRcdHJldHVybiBbY29udGV4dC5jcmVhdGVFbGVtZW50KHBhcnNlZFsxXSldO1xuXHRcdH1cblxuXHRcdHBhcnNlZCA9IGJ1aWxkRnJhZ21lbnQoW2RhdGFdLCBjb250ZXh0LCBzY3JpcHRzKTtcblxuXHRcdGlmIChzY3JpcHRzICYmIHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHRqUXVlcnkoc2NyaXB0cykucmVtb3ZlKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGpRdWVyeS5tZXJnZShbXSwgcGFyc2VkLmNoaWxkTm9kZXMpO1xuXHR9O1xuXG5cdC8qKlxuICAqIExvYWQgYSB1cmwgaW50byBhIHBhZ2VcbiAgKi9cblx0alF1ZXJ5LmZuLmxvYWQgPSBmdW5jdGlvbiAodXJsLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG5cdFx0dmFyIHNlbGVjdG9yLFxuXHRcdCAgICB0eXBlLFxuXHRcdCAgICByZXNwb25zZSxcblx0XHQgICAgc2VsZiA9IHRoaXMsXG5cdFx0ICAgIG9mZiA9IHVybC5pbmRleE9mKFwiIFwiKTtcblxuXHRcdGlmIChvZmYgPiAtMSkge1xuXHRcdFx0c2VsZWN0b3IgPSBzdHJpcEFuZENvbGxhcHNlKHVybC5zbGljZShvZmYpKTtcblx0XHRcdHVybCA9IHVybC5zbGljZSgwLCBvZmYpO1xuXHRcdH1cblxuXHRcdC8vIElmIGl0J3MgYSBmdW5jdGlvblxuXHRcdGlmIChpc0Z1bmN0aW9uKHBhcmFtcykpIHtcblxuXHRcdFx0Ly8gV2UgYXNzdW1lIHRoYXQgaXQncyB0aGUgY2FsbGJhY2tcblx0XHRcdGNhbGxiYWNrID0gcGFyYW1zO1xuXHRcdFx0cGFyYW1zID0gdW5kZWZpbmVkO1xuXG5cdFx0XHQvLyBPdGhlcndpc2UsIGJ1aWxkIGEgcGFyYW0gc3RyaW5nXG5cdFx0fSBlbHNlIGlmIChwYXJhbXMgJiYgKHR5cGVvZiBwYXJhbXMgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihwYXJhbXMpKSA9PT0gXCJvYmplY3RcIikge1xuXHRcdFx0dHlwZSA9IFwiUE9TVFwiO1xuXHRcdH1cblxuXHRcdC8vIElmIHdlIGhhdmUgZWxlbWVudHMgdG8gbW9kaWZ5LCBtYWtlIHRoZSByZXF1ZXN0XG5cdFx0aWYgKHNlbGYubGVuZ3RoID4gMCkge1xuXHRcdFx0alF1ZXJ5LmFqYXgoe1xuXHRcdFx0XHR1cmw6IHVybCxcblxuXHRcdFx0XHQvLyBJZiBcInR5cGVcIiB2YXJpYWJsZSBpcyB1bmRlZmluZWQsIHRoZW4gXCJHRVRcIiBtZXRob2Qgd2lsbCBiZSB1c2VkLlxuXHRcdFx0XHQvLyBNYWtlIHZhbHVlIG9mIHRoaXMgZmllbGQgZXhwbGljaXQgc2luY2Vcblx0XHRcdFx0Ly8gdXNlciBjYW4gb3ZlcnJpZGUgaXQgdGhyb3VnaCBhamF4U2V0dXAgbWV0aG9kXG5cdFx0XHRcdHR5cGU6IHR5cGUgfHwgXCJHRVRcIixcblx0XHRcdFx0ZGF0YVR5cGU6IFwiaHRtbFwiLFxuXHRcdFx0XHRkYXRhOiBwYXJhbXNcblx0XHRcdH0pLmRvbmUoZnVuY3Rpb24gKHJlc3BvbnNlVGV4dCkge1xuXG5cdFx0XHRcdC8vIFNhdmUgcmVzcG9uc2UgZm9yIHVzZSBpbiBjb21wbGV0ZSBjYWxsYmFja1xuXHRcdFx0XHRyZXNwb25zZSA9IGFyZ3VtZW50cztcblxuXHRcdFx0XHRzZWxmLmh0bWwoc2VsZWN0b3IgP1xuXG5cdFx0XHRcdC8vIElmIGEgc2VsZWN0b3Igd2FzIHNwZWNpZmllZCwgbG9jYXRlIHRoZSByaWdodCBlbGVtZW50cyBpbiBhIGR1bW15IGRpdlxuXHRcdFx0XHQvLyBFeGNsdWRlIHNjcmlwdHMgdG8gYXZvaWQgSUUgJ1Blcm1pc3Npb24gRGVuaWVkJyBlcnJvcnNcblx0XHRcdFx0alF1ZXJ5KFwiPGRpdj5cIikuYXBwZW5kKGpRdWVyeS5wYXJzZUhUTUwocmVzcG9uc2VUZXh0KSkuZmluZChzZWxlY3RvcikgOlxuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSB1c2UgdGhlIGZ1bGwgcmVzdWx0XG5cdFx0XHRcdHJlc3BvbnNlVGV4dCk7XG5cblx0XHRcdFx0Ly8gSWYgdGhlIHJlcXVlc3Qgc3VjY2VlZHMsIHRoaXMgZnVuY3Rpb24gZ2V0cyBcImRhdGFcIiwgXCJzdGF0dXNcIiwgXCJqcVhIUlwiXG5cdFx0XHRcdC8vIGJ1dCB0aGV5IGFyZSBpZ25vcmVkIGJlY2F1c2UgcmVzcG9uc2Ugd2FzIHNldCBhYm92ZS5cblx0XHRcdFx0Ly8gSWYgaXQgZmFpbHMsIHRoaXMgZnVuY3Rpb24gZ2V0cyBcImpxWEhSXCIsIFwic3RhdHVzXCIsIFwiZXJyb3JcIlxuXHRcdFx0fSkuYWx3YXlzKGNhbGxiYWNrICYmIGZ1bmN0aW9uIChqcVhIUiwgc3RhdHVzKSB7XG5cdFx0XHRcdHNlbGYuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2suYXBwbHkodGhpcywgcmVzcG9uc2UgfHwgW2pxWEhSLnJlc3BvbnNlVGV4dCwgc3RhdHVzLCBqcVhIUl0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8vIEF0dGFjaCBhIGJ1bmNoIG9mIGZ1bmN0aW9ucyBmb3IgaGFuZGxpbmcgY29tbW9uIEFKQVggZXZlbnRzXG5cdGpRdWVyeS5lYWNoKFtcImFqYXhTdGFydFwiLCBcImFqYXhTdG9wXCIsIFwiYWpheENvbXBsZXRlXCIsIFwiYWpheEVycm9yXCIsIFwiYWpheFN1Y2Nlc3NcIiwgXCJhamF4U2VuZFwiXSwgZnVuY3Rpb24gKGksIHR5cGUpIHtcblx0XHRqUXVlcnkuZm5bdHlwZV0gPSBmdW5jdGlvbiAoZm4pIHtcblx0XHRcdHJldHVybiB0aGlzLm9uKHR5cGUsIGZuKTtcblx0XHR9O1xuXHR9KTtcblxuXHRqUXVlcnkuZXhwci5wc2V1ZG9zLmFuaW1hdGVkID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdyZXAoalF1ZXJ5LnRpbWVycywgZnVuY3Rpb24gKGZuKSB7XG5cdFx0XHRyZXR1cm4gZWxlbSA9PT0gZm4uZWxlbTtcblx0XHR9KS5sZW5ndGg7XG5cdH07XG5cblx0alF1ZXJ5Lm9mZnNldCA9IHtcblx0XHRzZXRPZmZzZXQ6IGZ1bmN0aW9uIHNldE9mZnNldChlbGVtLCBvcHRpb25zLCBpKSB7XG5cdFx0XHR2YXIgY3VyUG9zaXRpb24sXG5cdFx0XHQgICAgY3VyTGVmdCxcblx0XHRcdCAgICBjdXJDU1NUb3AsXG5cdFx0XHQgICAgY3VyVG9wLFxuXHRcdFx0ICAgIGN1ck9mZnNldCxcblx0XHRcdCAgICBjdXJDU1NMZWZ0LFxuXHRcdFx0ICAgIGNhbGN1bGF0ZVBvc2l0aW9uLFxuXHRcdFx0ICAgIHBvc2l0aW9uID0galF1ZXJ5LmNzcyhlbGVtLCBcInBvc2l0aW9uXCIpLFxuXHRcdFx0ICAgIGN1ckVsZW0gPSBqUXVlcnkoZWxlbSksXG5cdFx0XHQgICAgcHJvcHMgPSB7fTtcblxuXHRcdFx0Ly8gU2V0IHBvc2l0aW9uIGZpcnN0LCBpbi1jYXNlIHRvcC9sZWZ0IGFyZSBzZXQgZXZlbiBvbiBzdGF0aWMgZWxlbVxuXHRcdFx0aWYgKHBvc2l0aW9uID09PSBcInN0YXRpY1wiKSB7XG5cdFx0XHRcdGVsZW0uc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG5cdFx0XHR9XG5cblx0XHRcdGN1ck9mZnNldCA9IGN1ckVsZW0ub2Zmc2V0KCk7XG5cdFx0XHRjdXJDU1NUb3AgPSBqUXVlcnkuY3NzKGVsZW0sIFwidG9wXCIpO1xuXHRcdFx0Y3VyQ1NTTGVmdCA9IGpRdWVyeS5jc3MoZWxlbSwgXCJsZWZ0XCIpO1xuXHRcdFx0Y2FsY3VsYXRlUG9zaXRpb24gPSAocG9zaXRpb24gPT09IFwiYWJzb2x1dGVcIiB8fCBwb3NpdGlvbiA9PT0gXCJmaXhlZFwiKSAmJiAoY3VyQ1NTVG9wICsgY3VyQ1NTTGVmdCkuaW5kZXhPZihcImF1dG9cIikgPiAtMTtcblxuXHRcdFx0Ly8gTmVlZCB0byBiZSBhYmxlIHRvIGNhbGN1bGF0ZSBwb3NpdGlvbiBpZiBlaXRoZXJcblx0XHRcdC8vIHRvcCBvciBsZWZ0IGlzIGF1dG8gYW5kIHBvc2l0aW9uIGlzIGVpdGhlciBhYnNvbHV0ZSBvciBmaXhlZFxuXHRcdFx0aWYgKGNhbGN1bGF0ZVBvc2l0aW9uKSB7XG5cdFx0XHRcdGN1clBvc2l0aW9uID0gY3VyRWxlbS5wb3NpdGlvbigpO1xuXHRcdFx0XHRjdXJUb3AgPSBjdXJQb3NpdGlvbi50b3A7XG5cdFx0XHRcdGN1ckxlZnQgPSBjdXJQb3NpdGlvbi5sZWZ0O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VyVG9wID0gcGFyc2VGbG9hdChjdXJDU1NUb3ApIHx8IDA7XG5cdFx0XHRcdGN1ckxlZnQgPSBwYXJzZUZsb2F0KGN1ckNTU0xlZnQpIHx8IDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7XG5cblx0XHRcdFx0Ly8gVXNlIGpRdWVyeS5leHRlbmQgaGVyZSB0byBhbGxvdyBtb2RpZmljYXRpb24gb2YgY29vcmRpbmF0ZXMgYXJndW1lbnQgKGdoLTE4NDgpXG5cdFx0XHRcdG9wdGlvbnMgPSBvcHRpb25zLmNhbGwoZWxlbSwgaSwgalF1ZXJ5LmV4dGVuZCh7fSwgY3VyT2Zmc2V0KSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvcHRpb25zLnRvcCAhPSBudWxsKSB7XG5cdFx0XHRcdHByb3BzLnRvcCA9IG9wdGlvbnMudG9wIC0gY3VyT2Zmc2V0LnRvcCArIGN1clRvcDtcblx0XHRcdH1cblx0XHRcdGlmIChvcHRpb25zLmxlZnQgIT0gbnVsbCkge1xuXHRcdFx0XHRwcm9wcy5sZWZ0ID0gb3B0aW9ucy5sZWZ0IC0gY3VyT2Zmc2V0LmxlZnQgKyBjdXJMZWZ0O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoXCJ1c2luZ1wiIGluIG9wdGlvbnMpIHtcblx0XHRcdFx0b3B0aW9ucy51c2luZy5jYWxsKGVsZW0sIHByb3BzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN1ckVsZW0uY3NzKHByb3BzKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0alF1ZXJ5LmZuLmV4dGVuZCh7XG5cblx0XHQvLyBvZmZzZXQoKSByZWxhdGVzIGFuIGVsZW1lbnQncyBib3JkZXIgYm94IHRvIHRoZSBkb2N1bWVudCBvcmlnaW5cblx0XHRvZmZzZXQ6IGZ1bmN0aW9uIG9mZnNldChvcHRpb25zKSB7XG5cblx0XHRcdC8vIFByZXNlcnZlIGNoYWluaW5nIGZvciBzZXR0ZXJcblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBvcHRpb25zID09PSB1bmRlZmluZWQgPyB0aGlzIDogdGhpcy5lYWNoKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdFx0alF1ZXJ5Lm9mZnNldC5zZXRPZmZzZXQodGhpcywgb3B0aW9ucywgaSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcmVjdCxcblx0XHRcdCAgICB3aW4sXG5cdFx0XHQgICAgZWxlbSA9IHRoaXNbMF07XG5cblx0XHRcdGlmICghZWxlbSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJldHVybiB6ZXJvcyBmb3IgZGlzY29ubmVjdGVkIGFuZCBoaWRkZW4gKGRpc3BsYXk6IG5vbmUpIGVsZW1lbnRzIChnaC0yMzEwKVxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG5cdFx0XHQvLyBSdW5uaW5nIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBvbiBhXG5cdFx0XHQvLyBkaXNjb25uZWN0ZWQgbm9kZSBpbiBJRSB0aHJvd3MgYW4gZXJyb3Jcblx0XHRcdGlmICghZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4geyB0b3A6IDAsIGxlZnQ6IDAgfTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gR2V0IGRvY3VtZW50LXJlbGF0aXZlIHBvc2l0aW9uIGJ5IGFkZGluZyB2aWV3cG9ydCBzY3JvbGwgdG8gdmlld3BvcnQtcmVsYXRpdmUgZ0JDUlxuXHRcdFx0cmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHR3aW4gPSBlbGVtLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR0b3A6IHJlY3QudG9wICsgd2luLnBhZ2VZT2Zmc2V0LFxuXHRcdFx0XHRsZWZ0OiByZWN0LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXRcblx0XHRcdH07XG5cdFx0fSxcblxuXHRcdC8vIHBvc2l0aW9uKCkgcmVsYXRlcyBhbiBlbGVtZW50J3MgbWFyZ2luIGJveCB0byBpdHMgb2Zmc2V0IHBhcmVudCdzIHBhZGRpbmcgYm94XG5cdFx0Ly8gVGhpcyBjb3JyZXNwb25kcyB0byB0aGUgYmVoYXZpb3Igb2YgQ1NTIGFic29sdXRlIHBvc2l0aW9uaW5nXG5cdFx0cG9zaXRpb246IGZ1bmN0aW9uIHBvc2l0aW9uKCkge1xuXHRcdFx0aWYgKCF0aGlzWzBdKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIG9mZnNldFBhcmVudCxcblx0XHRcdCAgICBvZmZzZXQsXG5cdFx0XHQgICAgZG9jLFxuXHRcdFx0ICAgIGVsZW0gPSB0aGlzWzBdLFxuXHRcdFx0ICAgIHBhcmVudE9mZnNldCA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG5cblx0XHRcdC8vIHBvc2l0aW9uOmZpeGVkIGVsZW1lbnRzIGFyZSBvZmZzZXQgZnJvbSB0aGUgdmlld3BvcnQsIHdoaWNoIGl0c2VsZiBhbHdheXMgaGFzIHplcm8gb2Zmc2V0XG5cdFx0XHRpZiAoalF1ZXJ5LmNzcyhlbGVtLCBcInBvc2l0aW9uXCIpID09PSBcImZpeGVkXCIpIHtcblxuXHRcdFx0XHQvLyBBc3N1bWUgcG9zaXRpb246Zml4ZWQgaW1wbGllcyBhdmFpbGFiaWxpdHkgb2YgZ2V0Qm91bmRpbmdDbGllbnRSZWN0XG5cdFx0XHRcdG9mZnNldCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvZmZzZXQgPSB0aGlzLm9mZnNldCgpO1xuXG5cdFx0XHRcdC8vIEFjY291bnQgZm9yIHRoZSAqcmVhbCogb2Zmc2V0IHBhcmVudCwgd2hpY2ggY2FuIGJlIHRoZSBkb2N1bWVudCBvciBpdHMgcm9vdCBlbGVtZW50XG5cdFx0XHRcdC8vIHdoZW4gYSBzdGF0aWNhbGx5IHBvc2l0aW9uZWQgZWxlbWVudCBpcyBpZGVudGlmaWVkXG5cdFx0XHRcdGRvYyA9IGVsZW0ub3duZXJEb2N1bWVudDtcblx0XHRcdFx0b2Zmc2V0UGFyZW50ID0gZWxlbS5vZmZzZXRQYXJlbnQgfHwgZG9jLmRvY3VtZW50RWxlbWVudDtcblx0XHRcdFx0d2hpbGUgKG9mZnNldFBhcmVudCAmJiAob2Zmc2V0UGFyZW50ID09PSBkb2MuYm9keSB8fCBvZmZzZXRQYXJlbnQgPT09IGRvYy5kb2N1bWVudEVsZW1lbnQpICYmIGpRdWVyeS5jc3Mob2Zmc2V0UGFyZW50LCBcInBvc2l0aW9uXCIpID09PSBcInN0YXRpY1wiKSB7XG5cblx0XHRcdFx0XHRvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQucGFyZW50Tm9kZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob2Zmc2V0UGFyZW50ICYmIG9mZnNldFBhcmVudCAhPT0gZWxlbSAmJiBvZmZzZXRQYXJlbnQubm9kZVR5cGUgPT09IDEpIHtcblxuXHRcdFx0XHRcdC8vIEluY29ycG9yYXRlIGJvcmRlcnMgaW50byBpdHMgb2Zmc2V0LCBzaW5jZSB0aGV5IGFyZSBvdXRzaWRlIGl0cyBjb250ZW50IG9yaWdpblxuXHRcdFx0XHRcdHBhcmVudE9mZnNldCA9IGpRdWVyeShvZmZzZXRQYXJlbnQpLm9mZnNldCgpO1xuXHRcdFx0XHRcdHBhcmVudE9mZnNldC50b3AgKz0galF1ZXJ5LmNzcyhvZmZzZXRQYXJlbnQsIFwiYm9yZGVyVG9wV2lkdGhcIiwgdHJ1ZSk7XG5cdFx0XHRcdFx0cGFyZW50T2Zmc2V0LmxlZnQgKz0galF1ZXJ5LmNzcyhvZmZzZXRQYXJlbnQsIFwiYm9yZGVyTGVmdFdpZHRoXCIsIHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN1YnRyYWN0IHBhcmVudCBvZmZzZXRzIGFuZCBlbGVtZW50IG1hcmdpbnNcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHRvcDogb2Zmc2V0LnRvcCAtIHBhcmVudE9mZnNldC50b3AgLSBqUXVlcnkuY3NzKGVsZW0sIFwibWFyZ2luVG9wXCIsIHRydWUpLFxuXHRcdFx0XHRsZWZ0OiBvZmZzZXQubGVmdCAtIHBhcmVudE9mZnNldC5sZWZ0IC0galF1ZXJ5LmNzcyhlbGVtLCBcIm1hcmdpbkxlZnRcIiwgdHJ1ZSlcblx0XHRcdH07XG5cdFx0fSxcblxuXHRcdC8vIFRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGRvY3VtZW50RWxlbWVudCBpbiB0aGUgZm9sbG93aW5nIGNhc2VzOlxuXHRcdC8vIDEpIEZvciB0aGUgZWxlbWVudCBpbnNpZGUgdGhlIGlmcmFtZSB3aXRob3V0IG9mZnNldFBhcmVudCwgdGhpcyBtZXRob2Qgd2lsbCByZXR1cm5cblx0XHQvLyAgICBkb2N1bWVudEVsZW1lbnQgb2YgdGhlIHBhcmVudCB3aW5kb3dcblx0XHQvLyAyKSBGb3IgdGhlIGhpZGRlbiBvciBkZXRhY2hlZCBlbGVtZW50XG5cdFx0Ly8gMykgRm9yIGJvZHkgb3IgaHRtbCBlbGVtZW50LCBpLmUuIGluIGNhc2Ugb2YgdGhlIGh0bWwgbm9kZSAtIGl0IHdpbGwgcmV0dXJuIGl0c2VsZlxuXHRcdC8vXG5cdFx0Ly8gYnV0IHRob3NlIGV4Y2VwdGlvbnMgd2VyZSBuZXZlciBwcmVzZW50ZWQgYXMgYSByZWFsIGxpZmUgdXNlLWNhc2VzXG5cdFx0Ly8gYW5kIG1pZ2h0IGJlIGNvbnNpZGVyZWQgYXMgbW9yZSBwcmVmZXJhYmxlIHJlc3VsdHMuXG5cdFx0Ly9cblx0XHQvLyBUaGlzIGxvZ2ljLCBob3dldmVyLCBpcyBub3QgZ3VhcmFudGVlZCBhbmQgY2FuIGNoYW5nZSBhdCBhbnkgcG9pbnQgaW4gdGhlIGZ1dHVyZVxuXHRcdG9mZnNldFBhcmVudDogZnVuY3Rpb24gb2Zmc2V0UGFyZW50KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIG9mZnNldFBhcmVudCA9IHRoaXMub2Zmc2V0UGFyZW50O1xuXG5cdFx0XHRcdHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgalF1ZXJ5LmNzcyhvZmZzZXRQYXJlbnQsIFwicG9zaXRpb25cIikgPT09IFwic3RhdGljXCIpIHtcblx0XHRcdFx0XHRvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIG9mZnNldFBhcmVudCB8fCBkb2N1bWVudEVsZW1lbnQ7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vIENyZWF0ZSBzY3JvbGxMZWZ0IGFuZCBzY3JvbGxUb3AgbWV0aG9kc1xuXHRqUXVlcnkuZWFjaCh7IHNjcm9sbExlZnQ6IFwicGFnZVhPZmZzZXRcIiwgc2Nyb2xsVG9wOiBcInBhZ2VZT2Zmc2V0XCIgfSwgZnVuY3Rpb24gKG1ldGhvZCwgcHJvcCkge1xuXHRcdHZhciB0b3AgPSBcInBhZ2VZT2Zmc2V0XCIgPT09IHByb3A7XG5cblx0XHRqUXVlcnkuZm5bbWV0aG9kXSA9IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRcdHJldHVybiBhY2Nlc3ModGhpcywgZnVuY3Rpb24gKGVsZW0sIG1ldGhvZCwgdmFsKSB7XG5cblx0XHRcdFx0Ly8gQ29hbGVzY2UgZG9jdW1lbnRzIGFuZCB3aW5kb3dzXG5cdFx0XHRcdHZhciB3aW47XG5cdFx0XHRcdGlmIChpc1dpbmRvdyhlbGVtKSkge1xuXHRcdFx0XHRcdHdpbiA9IGVsZW07XG5cdFx0XHRcdH0gZWxzZSBpZiAoZWxlbS5ub2RlVHlwZSA9PT0gOSkge1xuXHRcdFx0XHRcdHdpbiA9IGVsZW0uZGVmYXVsdFZpZXc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodmFsID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gd2luID8gd2luW3Byb3BdIDogZWxlbVttZXRob2RdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHdpbikge1xuXHRcdFx0XHRcdHdpbi5zY3JvbGxUbyghdG9wID8gdmFsIDogd2luLnBhZ2VYT2Zmc2V0LCB0b3AgPyB2YWwgOiB3aW4ucGFnZVlPZmZzZXQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVsZW1bbWV0aG9kXSA9IHZhbDtcblx0XHRcdFx0fVxuXHRcdFx0fSwgbWV0aG9kLCB2YWwsIGFyZ3VtZW50cy5sZW5ndGgpO1xuXHRcdH07XG5cdH0pO1xuXG5cdC8vIFN1cHBvcnQ6IFNhZmFyaSA8PTcgLSA5LjEsIENocm9tZSA8PTM3IC0gNDlcblx0Ly8gQWRkIHRoZSB0b3AvbGVmdCBjc3NIb29rcyB1c2luZyBqUXVlcnkuZm4ucG9zaXRpb25cblx0Ly8gV2Via2l0IGJ1ZzogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5MDg0XG5cdC8vIEJsaW5rIGJ1ZzogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NTg5MzQ3XG5cdC8vIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBwZXJjZW50IHdoZW4gc3BlY2lmaWVkIGZvciB0b3AvbGVmdC9ib3R0b20vcmlnaHQ7XG5cdC8vIHJhdGhlciB0aGFuIG1ha2UgdGhlIGNzcyBtb2R1bGUgZGVwZW5kIG9uIHRoZSBvZmZzZXQgbW9kdWxlLCBqdXN0IGNoZWNrIGZvciBpdCBoZXJlXG5cdGpRdWVyeS5lYWNoKFtcInRvcFwiLCBcImxlZnRcIl0sIGZ1bmN0aW9uIChpLCBwcm9wKSB7XG5cdFx0alF1ZXJ5LmNzc0hvb2tzW3Byb3BdID0gYWRkR2V0SG9va0lmKHN1cHBvcnQucGl4ZWxQb3NpdGlvbiwgZnVuY3Rpb24gKGVsZW0sIGNvbXB1dGVkKSB7XG5cdFx0XHRpZiAoY29tcHV0ZWQpIHtcblx0XHRcdFx0Y29tcHV0ZWQgPSBjdXJDU1MoZWxlbSwgcHJvcCk7XG5cblx0XHRcdFx0Ly8gSWYgY3VyQ1NTIHJldHVybnMgcGVyY2VudGFnZSwgZmFsbGJhY2sgdG8gb2Zmc2V0XG5cdFx0XHRcdHJldHVybiBybnVtbm9ucHgudGVzdChjb21wdXRlZCkgPyBqUXVlcnkoZWxlbSkucG9zaXRpb24oKVtwcm9wXSArIFwicHhcIiA6IGNvbXB1dGVkO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcblxuXHQvLyBDcmVhdGUgaW5uZXJIZWlnaHQsIGlubmVyV2lkdGgsIGhlaWdodCwgd2lkdGgsIG91dGVySGVpZ2h0IGFuZCBvdXRlcldpZHRoIG1ldGhvZHNcblx0alF1ZXJ5LmVhY2goeyBIZWlnaHQ6IFwiaGVpZ2h0XCIsIFdpZHRoOiBcIndpZHRoXCIgfSwgZnVuY3Rpb24gKG5hbWUsIHR5cGUpIHtcblx0XHRqUXVlcnkuZWFjaCh7IHBhZGRpbmc6IFwiaW5uZXJcIiArIG5hbWUsIGNvbnRlbnQ6IHR5cGUsIFwiXCI6IFwib3V0ZXJcIiArIG5hbWUgfSwgZnVuY3Rpb24gKGRlZmF1bHRFeHRyYSwgZnVuY05hbWUpIHtcblxuXHRcdFx0Ly8gTWFyZ2luIGlzIG9ubHkgZm9yIG91dGVySGVpZ2h0LCBvdXRlcldpZHRoXG5cdFx0XHRqUXVlcnkuZm5bZnVuY05hbWVdID0gZnVuY3Rpb24gKG1hcmdpbiwgdmFsdWUpIHtcblx0XHRcdFx0dmFyIGNoYWluYWJsZSA9IGFyZ3VtZW50cy5sZW5ndGggJiYgKGRlZmF1bHRFeHRyYSB8fCB0eXBlb2YgbWFyZ2luICE9PSBcImJvb2xlYW5cIiksXG5cdFx0XHRcdCAgICBleHRyYSA9IGRlZmF1bHRFeHRyYSB8fCAobWFyZ2luID09PSB0cnVlIHx8IHZhbHVlID09PSB0cnVlID8gXCJtYXJnaW5cIiA6IFwiYm9yZGVyXCIpO1xuXG5cdFx0XHRcdHJldHVybiBhY2Nlc3ModGhpcywgZnVuY3Rpb24gKGVsZW0sIHR5cGUsIHZhbHVlKSB7XG5cdFx0XHRcdFx0dmFyIGRvYztcblxuXHRcdFx0XHRcdGlmIChpc1dpbmRvdyhlbGVtKSkge1xuXG5cdFx0XHRcdFx0XHQvLyAkKCB3aW5kb3cgKS5vdXRlcldpZHRoL0hlaWdodCByZXR1cm4gdy9oIGluY2x1ZGluZyBzY3JvbGxiYXJzIChnaC0xNzI5KVxuXHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmNOYW1lLmluZGV4T2YoXCJvdXRlclwiKSA9PT0gMCA/IGVsZW1bXCJpbm5lclwiICsgbmFtZV0gOiBlbGVtLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiICsgbmFtZV07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gR2V0IGRvY3VtZW50IHdpZHRoIG9yIGhlaWdodFxuXHRcdFx0XHRcdGlmIChlbGVtLm5vZGVUeXBlID09PSA5KSB7XG5cdFx0XHRcdFx0XHRkb2MgPSBlbGVtLmRvY3VtZW50RWxlbWVudDtcblxuXHRcdFx0XHRcdFx0Ly8gRWl0aGVyIHNjcm9sbFtXaWR0aC9IZWlnaHRdIG9yIG9mZnNldFtXaWR0aC9IZWlnaHRdIG9yIGNsaWVudFtXaWR0aC9IZWlnaHRdLFxuXHRcdFx0XHRcdFx0Ly8gd2hpY2hldmVyIGlzIGdyZWF0ZXN0XG5cdFx0XHRcdFx0XHRyZXR1cm4gTWF0aC5tYXgoZWxlbS5ib2R5W1wic2Nyb2xsXCIgKyBuYW1lXSwgZG9jW1wic2Nyb2xsXCIgKyBuYW1lXSwgZWxlbS5ib2R5W1wib2Zmc2V0XCIgKyBuYW1lXSwgZG9jW1wib2Zmc2V0XCIgKyBuYW1lXSwgZG9jW1wiY2xpZW50XCIgKyBuYW1lXSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgP1xuXG5cdFx0XHRcdFx0Ly8gR2V0IHdpZHRoIG9yIGhlaWdodCBvbiB0aGUgZWxlbWVudCwgcmVxdWVzdGluZyBidXQgbm90IGZvcmNpbmcgcGFyc2VGbG9hdFxuXHRcdFx0XHRcdGpRdWVyeS5jc3MoZWxlbSwgdHlwZSwgZXh0cmEpIDpcblxuXHRcdFx0XHRcdC8vIFNldCB3aWR0aCBvciBoZWlnaHQgb24gdGhlIGVsZW1lbnRcblx0XHRcdFx0XHRqUXVlcnkuc3R5bGUoZWxlbSwgdHlwZSwgdmFsdWUsIGV4dHJhKTtcblx0XHRcdFx0fSwgdHlwZSwgY2hhaW5hYmxlID8gbWFyZ2luIDogdW5kZWZpbmVkLCBjaGFpbmFibGUpO1xuXHRcdFx0fTtcblx0XHR9KTtcblx0fSk7XG5cblx0alF1ZXJ5LmVhY2goKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IHJlc2l6ZSBzY3JvbGwgY2xpY2sgZGJsY2xpY2sgXCIgKyBcIm1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIFwiICsgXCJjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNvbnRleHRtZW51XCIpLnNwbGl0KFwiIFwiKSwgZnVuY3Rpb24gKGksIG5hbWUpIHtcblxuXHRcdC8vIEhhbmRsZSBldmVudCBiaW5kaW5nXG5cdFx0alF1ZXJ5LmZuW25hbWVdID0gZnVuY3Rpb24gKGRhdGEsIGZuKSB7XG5cdFx0XHRyZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDAgPyB0aGlzLm9uKG5hbWUsIG51bGwsIGRhdGEsIGZuKSA6IHRoaXMudHJpZ2dlcihuYW1lKTtcblx0XHR9O1xuXHR9KTtcblxuXHRqUXVlcnkuZm4uZXh0ZW5kKHtcblx0XHRob3ZlcjogZnVuY3Rpb24gaG92ZXIoZm5PdmVyLCBmbk91dCkge1xuXHRcdFx0cmV0dXJuIHRoaXMubW91c2VlbnRlcihmbk92ZXIpLm1vdXNlbGVhdmUoZm5PdXQgfHwgZm5PdmVyKTtcblx0XHR9XG5cdH0pO1xuXG5cdGpRdWVyeS5mbi5leHRlbmQoe1xuXG5cdFx0YmluZDogZnVuY3Rpb24gYmluZCh0eXBlcywgZGF0YSwgZm4pIHtcblx0XHRcdHJldHVybiB0aGlzLm9uKHR5cGVzLCBudWxsLCBkYXRhLCBmbik7XG5cdFx0fSxcblx0XHR1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCh0eXBlcywgZm4pIHtcblx0XHRcdHJldHVybiB0aGlzLm9mZih0eXBlcywgbnVsbCwgZm4pO1xuXHRcdH0sXG5cblx0XHRkZWxlZ2F0ZTogZnVuY3Rpb24gZGVsZWdhdGUoc2VsZWN0b3IsIHR5cGVzLCBkYXRhLCBmbikge1xuXHRcdFx0cmV0dXJuIHRoaXMub24odHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbik7XG5cdFx0fSxcblx0XHR1bmRlbGVnYXRlOiBmdW5jdGlvbiB1bmRlbGVnYXRlKHNlbGVjdG9yLCB0eXBlcywgZm4pIHtcblxuXHRcdFx0Ly8gKCBuYW1lc3BhY2UgKSBvciAoIHNlbGVjdG9yLCB0eXBlcyBbLCBmbl0gKVxuXHRcdFx0cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyB0aGlzLm9mZihzZWxlY3RvciwgXCIqKlwiKSA6IHRoaXMub2ZmKHR5cGVzLCBzZWxlY3RvciB8fCBcIioqXCIsIGZuKTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vIEJpbmQgYSBmdW5jdGlvbiB0byBhIGNvbnRleHQsIG9wdGlvbmFsbHkgcGFydGlhbGx5IGFwcGx5aW5nIGFueVxuXHQvLyBhcmd1bWVudHMuXG5cdC8vIGpRdWVyeS5wcm94eSBpcyBkZXByZWNhdGVkIHRvIHByb21vdGUgc3RhbmRhcmRzIChzcGVjaWZpY2FsbHkgRnVuY3Rpb24jYmluZClcblx0Ly8gSG93ZXZlciwgaXQgaXMgbm90IHNsYXRlZCBmb3IgcmVtb3ZhbCBhbnkgdGltZSBzb29uXG5cdGpRdWVyeS5wcm94eSA9IGZ1bmN0aW9uIChmbiwgY29udGV4dCkge1xuXHRcdHZhciB0bXAsIGFyZ3MsIHByb3h5O1xuXG5cdFx0aWYgKHR5cGVvZiBjb250ZXh0ID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHR0bXAgPSBmbltjb250ZXh0XTtcblx0XHRcdGNvbnRleHQgPSBmbjtcblx0XHRcdGZuID0gdG1wO1xuXHRcdH1cblxuXHRcdC8vIFF1aWNrIGNoZWNrIHRvIGRldGVybWluZSBpZiB0YXJnZXQgaXMgY2FsbGFibGUsIGluIHRoZSBzcGVjXG5cdFx0Ly8gdGhpcyB0aHJvd3MgYSBUeXBlRXJyb3IsIGJ1dCB3ZSB3aWxsIGp1c3QgcmV0dXJuIHVuZGVmaW5lZC5cblx0XHRpZiAoIWlzRnVuY3Rpb24oZm4pKSB7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdC8vIFNpbXVsYXRlZCBiaW5kXG5cdFx0YXJncyA9IF9zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG5cdFx0cHJveHkgPSBmdW5jdGlvbiBwcm94eSgpIHtcblx0XHRcdHJldHVybiBmbi5hcHBseShjb250ZXh0IHx8IHRoaXMsIGFyZ3MuY29uY2F0KF9zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcblx0XHR9O1xuXG5cdFx0Ly8gU2V0IHRoZSBndWlkIG9mIHVuaXF1ZSBoYW5kbGVyIHRvIHRoZSBzYW1lIG9mIG9yaWdpbmFsIGhhbmRsZXIsIHNvIGl0IGNhbiBiZSByZW1vdmVkXG5cdFx0cHJveHkuZ3VpZCA9IGZuLmd1aWQgPSBmbi5ndWlkIHx8IGpRdWVyeS5ndWlkKys7XG5cblx0XHRyZXR1cm4gcHJveHk7XG5cdH07XG5cblx0alF1ZXJ5LmhvbGRSZWFkeSA9IGZ1bmN0aW9uIChob2xkKSB7XG5cdFx0aWYgKGhvbGQpIHtcblx0XHRcdGpRdWVyeS5yZWFkeVdhaXQrKztcblx0XHR9IGVsc2Uge1xuXHRcdFx0alF1ZXJ5LnJlYWR5KHRydWUpO1xuXHRcdH1cblx0fTtcblx0alF1ZXJ5LmlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXHRqUXVlcnkucGFyc2VKU09OID0gSlNPTi5wYXJzZTtcblx0alF1ZXJ5Lm5vZGVOYW1lID0gbm9kZU5hbWU7XG5cdGpRdWVyeS5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblx0alF1ZXJ5LmlzV2luZG93ID0gaXNXaW5kb3c7XG5cdGpRdWVyeS5jYW1lbENhc2UgPSBjYW1lbENhc2U7XG5cdGpRdWVyeS50eXBlID0gdG9UeXBlO1xuXG5cdGpRdWVyeS5ub3cgPSBEYXRlLm5vdztcblxuXHRqUXVlcnkuaXNOdW1lcmljID0gZnVuY3Rpb24gKG9iaikge1xuXG5cdFx0Ly8gQXMgb2YgalF1ZXJ5IDMuMCwgaXNOdW1lcmljIGlzIGxpbWl0ZWQgdG9cblx0XHQvLyBzdHJpbmdzIGFuZCBudW1iZXJzIChwcmltaXRpdmVzIG9yIG9iamVjdHMpXG5cdFx0Ly8gdGhhdCBjYW4gYmUgY29lcmNlZCB0byBmaW5pdGUgbnVtYmVycyAoZ2gtMjY2Milcblx0XHR2YXIgdHlwZSA9IGpRdWVyeS50eXBlKG9iaik7XG5cdFx0cmV0dXJuICh0eXBlID09PSBcIm51bWJlclwiIHx8IHR5cGUgPT09IFwic3RyaW5nXCIpICYmXG5cblx0XHQvLyBwYXJzZUZsb2F0IE5hTnMgbnVtZXJpYy1jYXN0IGZhbHNlIHBvc2l0aXZlcyAoXCJcIilcblx0XHQvLyAuLi5idXQgbWlzaW50ZXJwcmV0cyBsZWFkaW5nLW51bWJlciBzdHJpbmdzLCBwYXJ0aWN1bGFybHkgaGV4IGxpdGVyYWxzIChcIjB4Li4uXCIpXG5cdFx0Ly8gc3VidHJhY3Rpb24gZm9yY2VzIGluZmluaXRpZXMgdG8gTmFOXG5cdFx0IWlzTmFOKG9iaiAtIHBhcnNlRmxvYXQob2JqKSk7XG5cdH07XG5cblx0Ly8gUmVnaXN0ZXIgYXMgYSBuYW1lZCBBTUQgbW9kdWxlLCBzaW5jZSBqUXVlcnkgY2FuIGJlIGNvbmNhdGVuYXRlZCB3aXRoIG90aGVyXG5cdC8vIGZpbGVzIHRoYXQgbWF5IHVzZSBkZWZpbmUsIGJ1dCBub3QgdmlhIGEgcHJvcGVyIGNvbmNhdGVuYXRpb24gc2NyaXB0IHRoYXRcblx0Ly8gdW5kZXJzdGFuZHMgYW5vbnltb3VzIEFNRCBtb2R1bGVzLiBBIG5hbWVkIEFNRCBpcyBzYWZlc3QgYW5kIG1vc3Qgcm9idXN0XG5cdC8vIHdheSB0byByZWdpc3Rlci4gTG93ZXJjYXNlIGpxdWVyeSBpcyB1c2VkIGJlY2F1c2UgQU1EIG1vZHVsZSBuYW1lcyBhcmVcblx0Ly8gZGVyaXZlZCBmcm9tIGZpbGUgbmFtZXMsIGFuZCBqUXVlcnkgaXMgbm9ybWFsbHkgZGVsaXZlcmVkIGluIGEgbG93ZXJjYXNlXG5cdC8vIGZpbGUgbmFtZS4gRG8gdGhpcyBhZnRlciBjcmVhdGluZyB0aGUgZ2xvYmFsIHNvIHRoYXQgaWYgYW4gQU1EIG1vZHVsZSB3YW50c1xuXHQvLyB0byBjYWxsIG5vQ29uZmxpY3QgdG8gaGlkZSB0aGlzIHZlcnNpb24gb2YgalF1ZXJ5LCBpdCB3aWxsIHdvcmsuXG5cblx0Ly8gTm90ZSB0aGF0IGZvciBtYXhpbXVtIHBvcnRhYmlsaXR5LCBsaWJyYXJpZXMgdGhhdCBhcmUgbm90IGpRdWVyeSBzaG91bGRcblx0Ly8gZGVjbGFyZSB0aGVtc2VsdmVzIGFzIGFub255bW91cyBtb2R1bGVzLCBhbmQgYXZvaWQgc2V0dGluZyBhIGdsb2JhbCBpZiBhblxuXHQvLyBBTUQgbG9hZGVyIGlzIHByZXNlbnQuIGpRdWVyeSBpcyBhIHNwZWNpYWwgY2FzZS4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZVxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vanJidXJrZS9yZXF1aXJlanMvd2lraS9VcGRhdGluZy1leGlzdGluZy1saWJyYXJpZXMjd2lraS1hbm9uXG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKFwianF1ZXJ5XCIsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5O1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyXG5cblx0Ly8gTWFwIG92ZXIgalF1ZXJ5IGluIGNhc2Ugb2Ygb3ZlcndyaXRlXG5cdF9qUXVlcnkgPSB3aW5kb3cualF1ZXJ5LFxuXG5cblx0Ly8gTWFwIG92ZXIgdGhlICQgaW4gY2FzZSBvZiBvdmVyd3JpdGVcblx0XyQgPSB3aW5kb3cuJDtcblxuXHRqUXVlcnkubm9Db25mbGljdCA9IGZ1bmN0aW9uIChkZWVwKSB7XG5cdFx0aWYgKHdpbmRvdy4kID09PSBqUXVlcnkpIHtcblx0XHRcdHdpbmRvdy4kID0gXyQ7XG5cdFx0fVxuXG5cdFx0aWYgKGRlZXAgJiYgd2luZG93LmpRdWVyeSA9PT0galF1ZXJ5KSB7XG5cdFx0XHR3aW5kb3cualF1ZXJ5ID0gX2pRdWVyeTtcblx0XHR9XG5cblx0XHRyZXR1cm4galF1ZXJ5O1xuXHR9O1xuXG5cdC8vIEV4cG9zZSBqUXVlcnkgYW5kICQgaWRlbnRpZmllcnMsIGV2ZW4gaW4gQU1EXG5cdC8vICgjNzEwMiNjb21tZW50OjEwLCBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L2pxdWVyeS9wdWxsLzU1Nylcblx0Ly8gYW5kIENvbW1vbkpTIGZvciBicm93c2VyIGVtdWxhdG9ycyAoIzEzNTY2KVxuXHRpZiAoIW5vR2xvYmFsKSB7XG5cdFx0d2luZG93LmpRdWVyeSA9IHdpbmRvdy4kID0galF1ZXJ5O1xuXHR9XG5cblx0cmV0dXJuIGpRdWVyeTtcbn0pO1xuXG4vKiBodHRwOi8va2VpdGgtd29vZC5uYW1lL2NvdW50ZG93bi5odG1sXHJcbiAgIENvdW50ZG93biBmb3IgalF1ZXJ5IHYxLjUuMi5cclxuICAgV3JpdHRlbiBieSBLZWl0aCBXb29kIChrYndvb2R7YXR9aWluZXQuY29tLmF1KSBKYW51YXJ5IDIwMDguXHJcbiAgIER1YWwgbGljZW5zZWQgdW5kZXIgdGhlIEdQTCAoaHR0cDovL2Rldi5qcXVlcnkuY29tL2Jyb3dzZXIvdHJ1bmsvanF1ZXJ5L0dQTC1MSUNFTlNFLnR4dCkgYW5kIFxyXG4gICBNSVQgKGh0dHA6Ly9kZXYuanF1ZXJ5LmNvbS9icm93c2VyL3RydW5rL2pxdWVyeS9NSVQtTElDRU5TRS50eHQpIGxpY2Vuc2VzLiBcclxuICAgUGxlYXNlIGF0dHJpYnV0ZSB0aGUgYXV0aG9yIGlmIHlvdSB1c2UgaXQuICovXG5cbi8qIERpc3BsYXkgYSBjb3VudGRvd24gdGltZXIuXHJcbiAgIEF0dGFjaCBpdCB3aXRoIG9wdGlvbnMgbGlrZTpcclxuICAgJCgnZGl2IHNlbGVjdG9yJykuY291bnRkb3duKFxyXG4gICAgICAge3VudGlsOiBuZXcgRGF0ZSgyMDA5LCAxIC0gMSwgMSwgMCwgMCwgMCksIG9uRXhwaXJ5OiBoYXBweU5ld1llYXJ9KTsgKi9cblxuKGZ1bmN0aW9uICgkKSB7XG5cdC8vIEhpZGUgc2NvcGUsIG5vICQgY29uZmxpY3RcblxuXHQvKiBDb3VudGRvd24gbWFuYWdlci4gKi9cblx0ZnVuY3Rpb24gQ291bnRkb3duKCkge1xuXHRcdHRoaXMucmVnaW9uYWwgPSBbXTsgLy8gQXZhaWxhYmxlIHJlZ2lvbmFsIHNldHRpbmdzLCBpbmRleGVkIGJ5IGxhbmd1YWdlIGNvZGVcblx0XHR0aGlzLnJlZ2lvbmFsWycnXSA9IHsgLy8gRGVmYXVsdCByZWdpb25hbCBzZXR0aW5nc1xuXHRcdFx0Ly8gVGhlIGRpc3BsYXkgdGV4dHMgZm9yIHRoZSBjb3VudGVyc1xuXHRcdFx0bGFiZWxzOiBbJ1llYXJzJywgJ01vbnRocycsICdXZWVrcycsICdEQVlTJywgJ0hPVVJTJywgJ01JTlVURVMnLCAnU0VDT05EUyddLFxuXHRcdFx0Ly8gVGhlIGRpc3BsYXkgdGV4dHMgZm9yIHRoZSBjb3VudGVycyBpZiBvbmx5IG9uZVxuXHRcdFx0bGFiZWxzMTogWydZZWFyJywgJ01vbnRoJywgJ1dlZWsnLCAnRGF5JywgJ0hvdXInLCAnTWludXRlJywgJ1NlY29uZCddLFxuXHRcdFx0Y29tcGFjdExhYmVsczogWyd5JywgJ20nLCAndycsICdkJ10sIC8vIFRoZSBjb21wYWN0IHRleHRzIGZvciB0aGUgY291bnRlcnNcblx0XHRcdHRpbWVTZXBhcmF0b3I6ICc6JywgLy8gU2VwYXJhdG9yIGZvciB0aW1lIHBlcmlvZHNcblx0XHRcdGlzUlRMOiBmYWxzZSAvLyBUcnVlIGZvciByaWdodC10by1sZWZ0IGxhbmd1YWdlcywgZmFsc2UgZm9yIGxlZnQtdG8tcmlnaHRcblx0XHR9O1xuXHRcdHRoaXMuX2RlZmF1bHRzID0ge1xuXHRcdFx0dW50aWw6IG51bGwsIC8vIG5ldyBEYXRlKHllYXIsIG10aCAtIDEsIGRheSwgaHIsIG1pbiwgc2VjKSAtIGRhdGUvdGltZSB0byBjb3VudCBkb3duIHRvXG5cdFx0XHQvLyBvciBudW1lcmljIGZvciBzZWNvbmRzIG9mZnNldCwgb3Igc3RyaW5nIGZvciB1bml0IG9mZnNldChzKTpcblx0XHRcdC8vICdZJyB5ZWFycywgJ08nIG1vbnRocywgJ1cnIHdlZWtzLCAnRCcgZGF5cywgJ0gnIGhvdXJzLCAnTScgbWludXRlcywgJ1MnIHNlY29uZHNcblx0XHRcdHNpbmNlOiBudWxsLCAvLyBuZXcgRGF0ZSh5ZWFyLCBtdGggLSAxLCBkYXksIGhyLCBtaW4sIHNlYykgLSBkYXRlL3RpbWUgdG8gY291bnQgdXAgdG9cblx0XHRcdC8vIG9yIG51bWVyaWMgZm9yIHNlY29uZHMgb2Zmc2V0LCBvciBzdHJpbmcgZm9yIHVuaXQgb2Zmc2V0KHMpOlxuXHRcdFx0Ly8gJ1knIHllYXJzLCAnTycgbW9udGhzLCAnVycgd2Vla3MsICdEJyBkYXlzLCAnSCcgaG91cnMsICdNJyBtaW51dGVzLCAnUycgc2Vjb25kc1xuXHRcdFx0dGltZXpvbmU6IG51bGwsIC8vIFRoZSB0aW1lem9uZSAoaG91cnMgb3IgbWludXRlcyBmcm9tIEdNVCkgZm9yIHRoZSB0YXJnZXQgdGltZXMsXG5cdFx0XHQvLyBvciBudWxsIGZvciBjbGllbnQgbG9jYWxcblx0XHRcdGZvcm1hdDogJ2RITVMnLCAvLyBGb3JtYXQgZm9yIGRpc3BsYXkgLSB1cHBlciBjYXNlIGZvciBhbHdheXMsIGxvd2VyIGNhc2Ugb25seSBpZiBub24temVybyxcblx0XHRcdC8vICdZJyB5ZWFycywgJ08nIG1vbnRocywgJ1cnIHdlZWtzLCAnRCcgZGF5cywgJ0gnIGhvdXJzLCAnTScgbWludXRlcywgJ1MnIHNlY29uZHNcblx0XHRcdGxheW91dDogJycsIC8vIEJ1aWxkIHlvdXIgb3duIGxheW91dCBmb3IgdGhlIGNvdW50ZG93blxuXHRcdFx0Y29tcGFjdDogZmFsc2UsIC8vIFRydWUgdG8gZGlzcGxheSBpbiBhIGNvbXBhY3QgZm9ybWF0LCBmYWxzZSBmb3IgYW4gZXhwYW5kZWQgb25lXG5cdFx0XHRkZXNjcmlwdGlvbjogJycsIC8vIFRoZSBkZXNjcmlwdGlvbiBkaXNwbGF5ZWQgZm9yIHRoZSBjb3VudGRvd25cblx0XHRcdGV4cGlyeVVybDogJycsIC8vIEEgVVJMIHRvIGxvYWQgdXBvbiBleHBpcnksIHJlcGxhY2luZyB0aGUgY3VycmVudCBwYWdlXG5cdFx0XHRleHBpcnlUZXh0OiAnJywgLy8gVGV4dCB0byBkaXNwbGF5IHVwb24gZXhwaXJ5LCByZXBsYWNpbmcgdGhlIGNvdW50ZG93blxuXHRcdFx0YWx3YXlzRXhwaXJlOiBmYWxzZSwgLy8gVHJ1ZSB0byB0cmlnZ2VyIG9uRXhwaXJ5IGV2ZW4gaWYgbmV2ZXIgY291bnRlZCBkb3duXG5cdFx0XHRvbkV4cGlyeTogbnVsbCwgLy8gQ2FsbGJhY2sgd2hlbiB0aGUgY291bnRkb3duIGV4cGlyZXMgLVxuXHRcdFx0Ly8gcmVjZWl2ZXMgbm8gcGFyYW1ldGVycyBhbmQgJ3RoaXMnIGlzIHRoZSBjb250YWluaW5nIGRpdmlzaW9uXG5cdFx0XHRvblRpY2s6IG51bGwgLy8gQ2FsbGJhY2sgd2hlbiB0aGUgY291bnRkb3duIGlzIHVwZGF0ZWQgLVxuXHRcdFx0Ly8gcmVjZWl2ZXMgaW50WzddIGJlaW5nIHRoZSBicmVha2Rvd24gYnkgcGVyaW9kIChiYXNlZCBvbiBmb3JtYXQpXG5cdFx0XHQvLyBhbmQgJ3RoaXMnIGlzIHRoZSBjb250YWluaW5nIGRpdmlzaW9uXG5cdFx0fTtcblx0XHQkLmV4dGVuZCh0aGlzLl9kZWZhdWx0cywgdGhpcy5yZWdpb25hbFsnJ10pO1xuXHR9XG5cblx0dmFyIFBST1BfTkFNRSA9ICdjb3VudGRvd24nO1xuXG5cdHZhciBZID0gMDsgLy8gWWVhcnNcblx0dmFyIE8gPSAxOyAvLyBNb250aHNcblx0dmFyIFcgPSAyOyAvLyBXZWVrc1xuXHR2YXIgRCA9IDM7IC8vIERheXNcblx0dmFyIEggPSA0OyAvLyBIb3Vyc1xuXHR2YXIgTSA9IDU7IC8vIE1pbnV0ZXNcblx0dmFyIFMgPSA2OyAvLyBTZWNvbmRzXG5cblx0JC5leHRlbmQoQ291bnRkb3duLnByb3RvdHlwZSwge1xuXHRcdC8qIENsYXNzIG5hbWUgYWRkZWQgdG8gZWxlbWVudHMgdG8gaW5kaWNhdGUgYWxyZWFkeSBjb25maWd1cmVkIHdpdGggY291bnRkb3duLiAqL1xuXHRcdG1hcmtlckNsYXNzTmFtZTogJ2hhc0NvdW50ZG93bicsXG5cblx0XHQvKiBTaGFyZWQgdGltZXIgZm9yIGFsbCBjb3VudGRvd25zLiAqL1xuXHRcdF90aW1lcjogc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuXHRcdFx0JC5jb3VudGRvd24uX3VwZGF0ZVRhcmdldHMoKTtcblx0XHR9LCA5ODApLFxuXHRcdC8qIExpc3Qgb2YgY3VycmVudGx5IGFjdGl2ZSBjb3VudGRvd24gdGFyZ2V0cy4gKi9cblx0XHRfdGltZXJUYXJnZXRzOiBbXSxcblxuXHRcdC8qIE92ZXJyaWRlIHRoZSBkZWZhdWx0IHNldHRpbmdzIGZvciBhbGwgaW5zdGFuY2VzIG9mIHRoZSBjb3VudGRvd24gd2lkZ2V0LlxyXG4gICAgIEBwYXJhbSAgb3B0aW9ucyAgKG9iamVjdCkgdGhlIG5ldyBzZXR0aW5ncyB0byB1c2UgYXMgZGVmYXVsdHMgKi9cblx0XHRzZXREZWZhdWx0czogZnVuY3Rpb24gc2V0RGVmYXVsdHMob3B0aW9ucykge1xuXHRcdFx0dGhpcy5fcmVzZXRFeHRyYUxhYmVscyh0aGlzLl9kZWZhdWx0cywgb3B0aW9ucyk7XG5cdFx0XHRleHRlbmRSZW1vdmUodGhpcy5fZGVmYXVsdHMsIG9wdGlvbnMgfHwge30pO1xuXHRcdH0sXG5cblx0XHQvKiBDb252ZXJ0IGEgZGF0ZS90aW1lIHRvIFVUQy5cclxuICAgICBAcGFyYW0gIHR6ICAgICAobnVtYmVyKSB0aGUgaG91ciBvciBtaW51dGUgb2Zmc2V0IGZyb20gR01ULCBlLmcuICs5LCAtMzYwXHJcbiAgICAgQHBhcmFtICB5ZWFyICAgKERhdGUpIHRoZSBkYXRlL3RpbWUgaW4gdGhhdCB0aW1lem9uZSBvclxyXG4gICAgICAgICAgICAgICAgICAgIChudW1iZXIpIHRoZSB5ZWFyIGluIHRoYXQgdGltZXpvbmVcclxuICAgICBAcGFyYW0gIG1vbnRoICAobnVtYmVyLCBvcHRpb25hbCkgdGhlIG1vbnRoICgwIC0gMTEpIChvbWl0IGlmIHllYXIgaXMgYSBEYXRlKVxyXG4gICAgIEBwYXJhbSAgZGF5ICAgIChudW1iZXIsIG9wdGlvbmFsKSB0aGUgZGF5IChvbWl0IGlmIHllYXIgaXMgYSBEYXRlKVxyXG4gICAgIEBwYXJhbSAgaG91cnMgIChudW1iZXIsIG9wdGlvbmFsKSB0aGUgaG91ciAob21pdCBpZiB5ZWFyIGlzIGEgRGF0ZSlcclxuICAgICBAcGFyYW0gIG1pbnMgICAobnVtYmVyLCBvcHRpb25hbCkgdGhlIG1pbnV0ZSAob21pdCBpZiB5ZWFyIGlzIGEgRGF0ZSlcclxuICAgICBAcGFyYW0gIHNlY3MgICAobnVtYmVyLCBvcHRpb25hbCkgdGhlIHNlY29uZCAob21pdCBpZiB5ZWFyIGlzIGEgRGF0ZSlcclxuICAgICBAcGFyYW0gIG1zICAgICAobnVtYmVyLCBvcHRpb25hbCkgdGhlIG1pbGxpc2Vjb25kIChvbWl0IGlmIHllYXIgaXMgYSBEYXRlKVxyXG4gICAgIEByZXR1cm4gIChEYXRlKSB0aGUgZXF1aXZhbGVudCBVVEMgZGF0ZS90aW1lICovXG5cdFx0VVRDRGF0ZTogZnVuY3Rpb24gVVRDRGF0ZSh0eiwgeWVhciwgbW9udGgsIGRheSwgaG91cnMsIG1pbnMsIHNlY3MsIG1zKSB7XG5cdFx0XHRpZiAoKHR5cGVvZiB5ZWFyID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoeWVhcikpID09ICdvYmplY3QnICYmIHllYXIuY29uc3RydWN0b3IgPT0gRGF0ZSkge1xuXHRcdFx0XHRtcyA9IHllYXIuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cdFx0XHRcdHNlY3MgPSB5ZWFyLmdldFNlY29uZHMoKTtcblx0XHRcdFx0bWlucyA9IHllYXIuZ2V0TWludXRlcygpO1xuXHRcdFx0XHRob3VycyA9IHllYXIuZ2V0SG91cnMoKTtcblx0XHRcdFx0ZGF5ID0geWVhci5nZXREYXRlKCk7XG5cdFx0XHRcdG1vbnRoID0geWVhci5nZXRNb250aCgpO1xuXHRcdFx0XHR5ZWFyID0geWVhci5nZXRGdWxsWWVhcigpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGQgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0ZC5zZXRVVENGdWxsWWVhcih5ZWFyKTtcblx0XHRcdGQuc2V0VVRDRGF0ZSgxKTtcblx0XHRcdGQuc2V0VVRDTW9udGgobW9udGggfHwgMCk7XG5cdFx0XHRkLnNldFVUQ0RhdGUoZGF5IHx8IDEpO1xuXHRcdFx0ZC5zZXRVVENIb3Vycyhob3VycyB8fCAwKTtcblx0XHRcdGQuc2V0VVRDTWludXRlcygobWlucyB8fCAwKSAtIChNYXRoLmFicyh0eikgPCAzMCA/IHR6ICogNjAgOiB0eikpO1xuXHRcdFx0ZC5zZXRVVENTZWNvbmRzKHNlY3MgfHwgMCk7XG5cdFx0XHRkLnNldFVUQ01pbGxpc2Vjb25kcyhtcyB8fCAwKTtcblx0XHRcdHJldHVybiBkO1xuXHRcdH0sXG5cblx0XHQvKiBBdHRhY2ggdGhlIGNvdW50ZG93biB3aWRnZXQgdG8gYSBkaXYuXHJcbiAgICAgQHBhcmFtICB0YXJnZXQgICAoZWxlbWVudCkgdGhlIGNvbnRhaW5pbmcgZGl2aXNpb25cclxuICAgICBAcGFyYW0gIG9wdGlvbnMgIChvYmplY3QpIHRoZSBpbml0aWFsIHNldHRpbmdzIGZvciB0aGUgY291bnRkb3duICovXG5cdFx0X2F0dGFjaENvdW50ZG93bjogZnVuY3Rpb24gX2F0dGFjaENvdW50ZG93bih0YXJnZXQsIG9wdGlvbnMpIHtcblx0XHRcdHZhciAkdGFyZ2V0ID0gJCh0YXJnZXQpO1xuXHRcdFx0aWYgKCR0YXJnZXQuaGFzQ2xhc3ModGhpcy5tYXJrZXJDbGFzc05hbWUpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdCR0YXJnZXQuYWRkQ2xhc3ModGhpcy5tYXJrZXJDbGFzc05hbWUpO1xuXHRcdFx0dmFyIGluc3QgPSB7IG9wdGlvbnM6ICQuZXh0ZW5kKHt9LCBvcHRpb25zKSxcblx0XHRcdFx0X3BlcmlvZHM6IFswLCAwLCAwLCAwLCAwLCAwLCAwXSB9O1xuXHRcdFx0JC5kYXRhKHRhcmdldCwgUFJPUF9OQU1FLCBpbnN0KTtcblx0XHRcdHRoaXMuX2NoYW5nZUNvdW50ZG93bih0YXJnZXQpO1xuXHRcdH0sXG5cblx0XHQvKiBBZGQgYSB0YXJnZXQgdG8gdGhlIGxpc3Qgb2YgYWN0aXZlIG9uZXMuXHJcbiAgICAgQHBhcmFtICB0YXJnZXQgIChlbGVtZW50KSB0aGUgY291bnRkb3duIHRhcmdldCAqL1xuXHRcdF9hZGRUYXJnZXQ6IGZ1bmN0aW9uIF9hZGRUYXJnZXQodGFyZ2V0KSB7XG5cdFx0XHRpZiAoIXRoaXMuX2hhc1RhcmdldCh0YXJnZXQpKSB7XG5cdFx0XHRcdHRoaXMuX3RpbWVyVGFyZ2V0cy5wdXNoKHRhcmdldCk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qIFNlZSBpZiBhIHRhcmdldCBpcyBpbiB0aGUgbGlzdCBvZiBhY3RpdmUgb25lcy5cclxuICAgICBAcGFyYW0gIHRhcmdldCAgKGVsZW1lbnQpIHRoZSBjb3VudGRvd24gdGFyZ2V0XHJcbiAgICAgQHJldHVybiAgKGJvb2xlYW4pIHRydWUgaWYgcHJlc2VudCwgZmFsc2UgaWYgbm90ICovXG5cdFx0X2hhc1RhcmdldDogZnVuY3Rpb24gX2hhc1RhcmdldCh0YXJnZXQpIHtcblx0XHRcdHJldHVybiAkLmluQXJyYXkodGFyZ2V0LCB0aGlzLl90aW1lclRhcmdldHMpID4gLTE7XG5cdFx0fSxcblxuXHRcdC8qIFJlbW92ZSBhIHRhcmdldCBmcm9tIHRoZSBsaXN0IG9mIGFjdGl2ZSBvbmVzLlxyXG4gICAgIEBwYXJhbSAgdGFyZ2V0ICAoZWxlbWVudCkgdGhlIGNvdW50ZG93biB0YXJnZXQgKi9cblx0XHRfcmVtb3ZlVGFyZ2V0OiBmdW5jdGlvbiBfcmVtb3ZlVGFyZ2V0KHRhcmdldCkge1xuXHRcdFx0dGhpcy5fdGltZXJUYXJnZXRzID0gJC5tYXAodGhpcy5fdGltZXJUYXJnZXRzLCBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlID09IHRhcmdldCA/IG51bGwgOiB2YWx1ZTtcblx0XHRcdH0pOyAvLyBkZWxldGUgZW50cnlcblx0XHR9LFxuXG5cdFx0LyogVXBkYXRlIGVhY2ggYWN0aXZlIHRpbWVyIHRhcmdldC4gKi9cblx0XHRfdXBkYXRlVGFyZ2V0czogZnVuY3Rpb24gX3VwZGF0ZVRhcmdldHMoKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3RpbWVyVGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR0aGlzLl91cGRhdGVDb3VudGRvd24odGhpcy5fdGltZXJUYXJnZXRzW2ldKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyogUmVkaXNwbGF5IHRoZSBjb3VudGRvd24gd2l0aCBhbiB1cGRhdGVkIGRpc3BsYXkuXHJcbiAgICAgQHBhcmFtICB0YXJnZXQgIChqUXVlcnkpIHRoZSBjb250YWluaW5nIGRpdmlzaW9uXHJcbiAgICAgQHBhcmFtICBpbnN0ICAgIChvYmplY3QpIHRoZSBjdXJyZW50IHNldHRpbmdzIGZvciB0aGlzIGluc3RhbmNlICovXG5cdFx0X3VwZGF0ZUNvdW50ZG93bjogZnVuY3Rpb24gX3VwZGF0ZUNvdW50ZG93bih0YXJnZXQsIGluc3QpIHtcblx0XHRcdHZhciAkdGFyZ2V0ID0gJCh0YXJnZXQpO1xuXHRcdFx0aW5zdCA9IGluc3QgfHwgJC5kYXRhKHRhcmdldCwgUFJPUF9OQU1FKTtcblx0XHRcdGlmICghaW5zdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQkdGFyZ2V0Lmh0bWwodGhpcy5fZ2VuZXJhdGVIVE1MKGluc3QpKTtcblx0XHRcdCR0YXJnZXRbKHRoaXMuX2dldChpbnN0LCAnaXNSVEwnKSA/ICdhZGQnIDogJ3JlbW92ZScpICsgJ0NsYXNzJ10oJ2NvdW50ZG93bl9ydGwnKTtcblx0XHRcdHZhciBvblRpY2sgPSB0aGlzLl9nZXQoaW5zdCwgJ29uVGljaycpO1xuXHRcdFx0aWYgKG9uVGljaykge1xuXHRcdFx0XHRvblRpY2suYXBwbHkodGFyZ2V0LCBbaW5zdC5faG9sZCAhPSAnbGFwJyA/IGluc3QuX3BlcmlvZHMgOiB0aGlzLl9jYWxjdWxhdGVQZXJpb2RzKGluc3QsIGluc3QuX3Nob3csIG5ldyBEYXRlKCkpXSk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgZXhwaXJlZCA9IGluc3QuX2hvbGQgIT0gJ3BhdXNlJyAmJiAoaW5zdC5fc2luY2UgPyBpbnN0Ll9ub3cuZ2V0VGltZSgpIDw9IGluc3QuX3NpbmNlLmdldFRpbWUoKSA6IGluc3QuX25vdy5nZXRUaW1lKCkgPj0gaW5zdC5fdW50aWwuZ2V0VGltZSgpKTtcblx0XHRcdGlmIChleHBpcmVkICYmICFpbnN0Ll9leHBpcmluZykge1xuXHRcdFx0XHRpbnN0Ll9leHBpcmluZyA9IHRydWU7XG5cdFx0XHRcdGlmICh0aGlzLl9oYXNUYXJnZXQodGFyZ2V0KSB8fCB0aGlzLl9nZXQoaW5zdCwgJ2Fsd2F5c0V4cGlyZScpKSB7XG5cdFx0XHRcdFx0dGhpcy5fcmVtb3ZlVGFyZ2V0KHRhcmdldCk7XG5cdFx0XHRcdFx0dmFyIG9uRXhwaXJ5ID0gdGhpcy5fZ2V0KGluc3QsICdvbkV4cGlyeScpO1xuXHRcdFx0XHRcdGlmIChvbkV4cGlyeSkge1xuXHRcdFx0XHRcdFx0b25FeHBpcnkuYXBwbHkodGFyZ2V0LCBbXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciBleHBpcnlUZXh0ID0gdGhpcy5fZ2V0KGluc3QsICdleHBpcnlUZXh0Jyk7XG5cdFx0XHRcdFx0aWYgKGV4cGlyeVRleHQpIHtcblx0XHRcdFx0XHRcdHZhciBsYXlvdXQgPSB0aGlzLl9nZXQoaW5zdCwgJ2xheW91dCcpO1xuXHRcdFx0XHRcdFx0aW5zdC5vcHRpb25zLmxheW91dCA9IGV4cGlyeVRleHQ7XG5cdFx0XHRcdFx0XHR0aGlzLl91cGRhdGVDb3VudGRvd24odGFyZ2V0LCBpbnN0KTtcblx0XHRcdFx0XHRcdGluc3Qub3B0aW9ucy5sYXlvdXQgPSBsYXlvdXQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciBleHBpcnlVcmwgPSB0aGlzLl9nZXQoaW5zdCwgJ2V4cGlyeVVybCcpO1xuXHRcdFx0XHRcdGlmIChleHBpcnlVcmwpIHtcblx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9IGV4cGlyeVVybDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5zdC5fZXhwaXJpbmcgPSBmYWxzZTtcblx0XHRcdH0gZWxzZSBpZiAoaW5zdC5faG9sZCA9PSAncGF1c2UnKSB7XG5cdFx0XHRcdHRoaXMuX3JlbW92ZVRhcmdldCh0YXJnZXQpO1xuXHRcdFx0fVxuXHRcdFx0JC5kYXRhKHRhcmdldCwgUFJPUF9OQU1FLCBpbnN0KTtcblx0XHR9LFxuXG5cdFx0LyogUmVjb25maWd1cmUgdGhlIHNldHRpbmdzIGZvciBhIGNvdW50ZG93biBkaXYuXHJcbiAgICAgQHBhcmFtICB0YXJnZXQgICAoZWxlbWVudCkgdGhlIGNvbnRhaW5pbmcgZGl2aXNpb25cclxuICAgICBAcGFyYW0gIG9wdGlvbnMgIChvYmplY3QpIHRoZSBuZXcgc2V0dGluZ3MgZm9yIHRoZSBjb3VudGRvd24gb3JcclxuICAgICAgICAgICAgICAgICAgICAgIChzdHJpbmcpIGFuIGluZGl2aWR1YWwgcHJvcGVydHkgbmFtZVxyXG4gICAgIEBwYXJhbSAgdmFsdWUgICAgKGFueSkgdGhlIGluZGl2aWR1YWwgcHJvcGVydHkgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgIChvbWl0IGlmIG9wdGlvbnMgaXMgYW4gb2JqZWN0KSAqL1xuXHRcdF9jaGFuZ2VDb3VudGRvd246IGZ1bmN0aW9uIF9jaGFuZ2VDb3VudGRvd24odGFyZ2V0LCBvcHRpb25zLCB2YWx1ZSkge1xuXHRcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdFx0XHRpZiAodHlwZW9mIG9wdGlvbnMgPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0dmFyIG5hbWUgPSBvcHRpb25zO1xuXHRcdFx0XHRvcHRpb25zID0ge307XG5cdFx0XHRcdG9wdGlvbnNbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHRcdHZhciBpbnN0ID0gJC5kYXRhKHRhcmdldCwgUFJPUF9OQU1FKTtcblx0XHRcdGlmIChpbnN0KSB7XG5cdFx0XHRcdHRoaXMuX3Jlc2V0RXh0cmFMYWJlbHMoaW5zdC5vcHRpb25zLCBvcHRpb25zKTtcblx0XHRcdFx0ZXh0ZW5kUmVtb3ZlKGluc3Qub3B0aW9ucywgb3B0aW9ucyk7XG5cdFx0XHRcdHRoaXMuX2FkanVzdFNldHRpbmdzKGluc3QpO1xuXHRcdFx0XHQkLmRhdGEodGFyZ2V0LCBQUk9QX05BTUUsIGluc3QpO1xuXHRcdFx0XHR2YXIgbm93ID0gbmV3IERhdGUoKTtcblx0XHRcdFx0aWYgKGluc3QuX3NpbmNlICYmIGluc3QuX3NpbmNlIDwgbm93IHx8IGluc3QuX3VudGlsICYmIGluc3QuX3VudGlsID4gbm93KSB7XG5cdFx0XHRcdFx0dGhpcy5fYWRkVGFyZ2V0KHRhcmdldCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fdXBkYXRlQ291bnRkb3duKHRhcmdldCwgaW5zdCk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qIFJlc2V0IGFueSBleHRyYSBsYWJlbHNuIGFuZCBjb21wYWN0TGFiZWxzbiBlbnRyaWVzIGlmIGNoYW5naW5nIGxhYmVscy5cclxuICAgICBAcGFyYW0gIGJhc2UgICAgIChvYmplY3QpIHRoZSBvcHRpb25zIHRvIGJlIHVwZGF0ZWRcclxuICAgICBAcGFyYW0gIG9wdGlvbnMgIChvYmplY3QpIHRoZSBuZXcgb3B0aW9uIHZhbHVlcyAqL1xuXHRcdF9yZXNldEV4dHJhTGFiZWxzOiBmdW5jdGlvbiBfcmVzZXRFeHRyYUxhYmVscyhiYXNlLCBvcHRpb25zKSB7XG5cdFx0XHR2YXIgY2hhbmdpbmdMYWJlbHMgPSBmYWxzZTtcblx0XHRcdGZvciAodmFyIG4gaW4gb3B0aW9ucykge1xuXHRcdFx0XHRpZiAobi5tYXRjaCgvW0xsXWFiZWxzLykpIHtcblx0XHRcdFx0XHRjaGFuZ2luZ0xhYmVscyA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChjaGFuZ2luZ0xhYmVscykge1xuXHRcdFx0XHRmb3IgKHZhciBuIGluIGJhc2UpIHtcblx0XHRcdFx0XHQvLyBSZW1vdmUgY3VzdG9tIG51bWJlcmVkIGxhYmVsc1xuXHRcdFx0XHRcdGlmIChuLm1hdGNoKC9bTGxdYWJlbHNbMC05XS8pKSB7XG5cdFx0XHRcdFx0XHRiYXNlW25dID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyogUmVtb3ZlIHRoZSBjb3VudGRvd24gd2lkZ2V0IGZyb20gYSBkaXYuXHJcbiAgICAgQHBhcmFtICB0YXJnZXQgIChlbGVtZW50KSB0aGUgY29udGFpbmluZyBkaXZpc2lvbiAqL1xuXHRcdF9kZXN0cm95Q291bnRkb3duOiBmdW5jdGlvbiBfZGVzdHJveUNvdW50ZG93bih0YXJnZXQpIHtcblx0XHRcdHZhciAkdGFyZ2V0ID0gJCh0YXJnZXQpO1xuXHRcdFx0aWYgKCEkdGFyZ2V0Lmhhc0NsYXNzKHRoaXMubWFya2VyQ2xhc3NOYW1lKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9yZW1vdmVUYXJnZXQodGFyZ2V0KTtcblx0XHRcdCR0YXJnZXQucmVtb3ZlQ2xhc3ModGhpcy5tYXJrZXJDbGFzc05hbWUpLmVtcHR5KCk7XG5cdFx0XHQkLnJlbW92ZURhdGEodGFyZ2V0LCBQUk9QX05BTUUpO1xuXHRcdH0sXG5cblx0XHQvKiBQYXVzZSBhIGNvdW50ZG93biB3aWRnZXQgYXQgdGhlIGN1cnJlbnQgdGltZS5cclxuICAgICBTdG9wIGl0IHJ1bm5pbmcgYnV0IHJlbWVtYmVyIGFuZCBkaXNwbGF5IHRoZSBjdXJyZW50IHRpbWUuXHJcbiAgICAgQHBhcmFtICB0YXJnZXQgIChlbGVtZW50KSB0aGUgY29udGFpbmluZyBkaXZpc2lvbiAqL1xuXHRcdF9wYXVzZUNvdW50ZG93bjogZnVuY3Rpb24gX3BhdXNlQ291bnRkb3duKHRhcmdldCkge1xuXHRcdFx0dGhpcy5faG9sZCh0YXJnZXQsICdwYXVzZScpO1xuXHRcdH0sXG5cblx0XHQvKiBQYXVzZSBhIGNvdW50ZG93biB3aWRnZXQgYXQgdGhlIGN1cnJlbnQgdGltZS5cclxuICAgICBTdG9wIHRoZSBkaXNwbGF5IGJ1dCBrZWVwIHRoZSBjb3VudGRvd24gcnVubmluZy5cclxuICAgICBAcGFyYW0gIHRhcmdldCAgKGVsZW1lbnQpIHRoZSBjb250YWluaW5nIGRpdmlzaW9uICovXG5cdFx0X2xhcENvdW50ZG93bjogZnVuY3Rpb24gX2xhcENvdW50ZG93bih0YXJnZXQpIHtcblx0XHRcdHRoaXMuX2hvbGQodGFyZ2V0LCAnbGFwJyk7XG5cdFx0fSxcblxuXHRcdC8qIFJlc3VtZSBhIHBhdXNlZCBjb3VudGRvd24gd2lkZ2V0LlxyXG4gICAgIEBwYXJhbSAgdGFyZ2V0ICAoZWxlbWVudCkgdGhlIGNvbnRhaW5pbmcgZGl2aXNpb24gKi9cblx0XHRfcmVzdW1lQ291bnRkb3duOiBmdW5jdGlvbiBfcmVzdW1lQ291bnRkb3duKHRhcmdldCkge1xuXHRcdFx0dGhpcy5faG9sZCh0YXJnZXQsIG51bGwpO1xuXHRcdH0sXG5cblx0XHQvKiBQYXVzZSBvciByZXN1bWUgYSBjb3VudGRvd24gd2lkZ2V0LlxyXG4gICAgIEBwYXJhbSAgdGFyZ2V0ICAoZWxlbWVudCkgdGhlIGNvbnRhaW5pbmcgZGl2aXNpb25cclxuICAgICBAcGFyYW0gIGhvbGQgICAgKHN0cmluZykgdGhlIG5ldyBob2xkIHNldHRpbmcgKi9cblx0XHRfaG9sZDogZnVuY3Rpb24gX2hvbGQodGFyZ2V0LCBob2xkKSB7XG5cdFx0XHR2YXIgaW5zdCA9ICQuZGF0YSh0YXJnZXQsIFBST1BfTkFNRSk7XG5cdFx0XHRpZiAoaW5zdCkge1xuXHRcdFx0XHRpZiAoaW5zdC5faG9sZCA9PSAncGF1c2UnICYmICFob2xkKSB7XG5cdFx0XHRcdFx0aW5zdC5fcGVyaW9kcyA9IGluc3QuX3NhdmVQZXJpb2RzO1xuXHRcdFx0XHRcdHZhciBzaWduID0gaW5zdC5fc2luY2UgPyAnLScgOiAnKyc7XG5cdFx0XHRcdFx0aW5zdFtpbnN0Ll9zaW5jZSA/ICdfc2luY2UnIDogJ191bnRpbCddID0gdGhpcy5fZGV0ZXJtaW5lVGltZShzaWduICsgaW5zdC5fcGVyaW9kc1swXSArICd5JyArIHNpZ24gKyBpbnN0Ll9wZXJpb2RzWzFdICsgJ28nICsgc2lnbiArIGluc3QuX3BlcmlvZHNbMl0gKyAndycgKyBzaWduICsgaW5zdC5fcGVyaW9kc1szXSArICdkJyArIHNpZ24gKyBpbnN0Ll9wZXJpb2RzWzRdICsgJ2gnICsgc2lnbiArIGluc3QuX3BlcmlvZHNbNV0gKyAnbScgKyBzaWduICsgaW5zdC5fcGVyaW9kc1s2XSArICdzJyk7XG5cdFx0XHRcdFx0dGhpcy5fYWRkVGFyZ2V0KHRhcmdldCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5zdC5faG9sZCA9IGhvbGQ7XG5cdFx0XHRcdGluc3QuX3NhdmVQZXJpb2RzID0gaG9sZCA9PSAncGF1c2UnID8gaW5zdC5fcGVyaW9kcyA6IG51bGw7XG5cdFx0XHRcdCQuZGF0YSh0YXJnZXQsIFBST1BfTkFNRSwgaW5zdCk7XG5cdFx0XHRcdHRoaXMuX3VwZGF0ZUNvdW50ZG93bih0YXJnZXQsIGluc3QpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKiBSZXR1cm4gdGhlIGN1cnJlbnQgdGltZSBwZXJpb2RzLlxyXG4gICAgIEBwYXJhbSAgdGFyZ2V0ICAoZWxlbWVudCkgdGhlIGNvbnRhaW5pbmcgZGl2aXNpb25cclxuICAgICBAcmV0dXJuICAobnVtYmVyWzddKSB0aGUgY3VycmVudCBwZXJpb2RzIGZvciB0aGUgY291bnRkb3duICovXG5cdFx0X2dldFRpbWVzQ291bnRkb3duOiBmdW5jdGlvbiBfZ2V0VGltZXNDb3VudGRvd24odGFyZ2V0KSB7XG5cdFx0XHR2YXIgaW5zdCA9ICQuZGF0YSh0YXJnZXQsIFBST1BfTkFNRSk7XG5cdFx0XHRyZXR1cm4gIWluc3QgPyBudWxsIDogIWluc3QuX2hvbGQgPyBpbnN0Ll9wZXJpb2RzIDogdGhpcy5fY2FsY3VsYXRlUGVyaW9kcyhpbnN0LCBpbnN0Ll9zaG93LCBuZXcgRGF0ZSgpKTtcblx0XHR9LFxuXG5cdFx0LyogR2V0IGEgc2V0dGluZyB2YWx1ZSwgZGVmYXVsdGluZyBpZiBuZWNlc3NhcnkuXHJcbiAgICAgQHBhcmFtICBpbnN0ICAob2JqZWN0KSB0aGUgY3VycmVudCBzZXR0aW5ncyBmb3IgdGhpcyBpbnN0YW5jZVxyXG4gICAgIEBwYXJhbSAgbmFtZSAgKHN0cmluZykgdGhlIG5hbWUgb2YgdGhlIHJlcXVpcmVkIHNldHRpbmdcclxuICAgICBAcmV0dXJuICAoYW55KSB0aGUgc2V0dGluZydzIHZhbHVlIG9yIGEgZGVmYXVsdCBpZiBub3Qgb3ZlcnJpZGRlbiAqL1xuXHRcdF9nZXQ6IGZ1bmN0aW9uIF9nZXQoaW5zdCwgbmFtZSkge1xuXHRcdFx0cmV0dXJuIGluc3Qub3B0aW9uc1tuYW1lXSAhPSBudWxsID8gaW5zdC5vcHRpb25zW25hbWVdIDogJC5jb3VudGRvd24uX2RlZmF1bHRzW25hbWVdO1xuXHRcdH0sXG5cblx0XHQvKiBDYWxjdWxhdGUgaW50ZXJhbCBzZXR0aW5ncyBmb3IgYW4gaW5zdGFuY2UuXHJcbiAgICAgQHBhcmFtICBpbnN0ICAob2JqZWN0KSB0aGUgY3VycmVudCBzZXR0aW5ncyBmb3IgdGhpcyBpbnN0YW5jZSAqL1xuXHRcdF9hZGp1c3RTZXR0aW5nczogZnVuY3Rpb24gX2FkanVzdFNldHRpbmdzKGluc3QpIHtcblx0XHRcdHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0dmFyIHRpbWV6b25lID0gdGhpcy5fZ2V0KGluc3QsICd0aW1lem9uZScpO1xuXHRcdFx0dGltZXpvbmUgPSB0aW1lem9uZSA9PSBudWxsID8gLW5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSA6IHRpbWV6b25lO1xuXHRcdFx0aW5zdC5fc2luY2UgPSB0aGlzLl9nZXQoaW5zdCwgJ3NpbmNlJyk7XG5cdFx0XHRpZiAoaW5zdC5fc2luY2UpIHtcblx0XHRcdFx0aW5zdC5fc2luY2UgPSB0aGlzLlVUQ0RhdGUodGltZXpvbmUsIHRoaXMuX2RldGVybWluZVRpbWUoaW5zdC5fc2luY2UsIG51bGwpKTtcblx0XHRcdH1cblx0XHRcdGluc3QuX3VudGlsID0gdGhpcy5VVENEYXRlKHRpbWV6b25lLCB0aGlzLl9kZXRlcm1pbmVUaW1lKHRoaXMuX2dldChpbnN0LCAndW50aWwnKSwgbm93KSk7XG5cdFx0XHRpbnN0Ll9zaG93ID0gdGhpcy5fZGV0ZXJtaW5lU2hvdyhpbnN0KTtcblx0XHR9LFxuXG5cdFx0LyogQSB0aW1lIG1heSBiZSBzcGVjaWZpZWQgYXMgYW4gZXhhY3QgdmFsdWUgb3IgYSByZWxhdGl2ZSBvbmUuXHJcbiAgICAgQHBhcmFtICBzZXR0aW5nICAgICAgKHN0cmluZyBvciBudW1iZXIgb3IgRGF0ZSkgLSB0aGUgZGF0ZS90aW1lIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXMgYSByZWxhdGl2ZSBvciBhYnNvbHV0ZSB2YWx1ZVxyXG4gICAgIEBwYXJhbSAgZGVmYXVsdFRpbWUgIChEYXRlKSB0aGUgZGF0ZS90aW1lIHRvIHVzZSBpZiBubyBvdGhlciBpcyBzdXBwbGllZFxyXG4gICAgIEByZXR1cm4gIChEYXRlKSB0aGUgY29ycmVzcG9uZGluZyBkYXRlL3RpbWUgKi9cblx0XHRfZGV0ZXJtaW5lVGltZTogZnVuY3Rpb24gX2RldGVybWluZVRpbWUoc2V0dGluZywgZGVmYXVsdFRpbWUpIHtcblx0XHRcdHZhciBvZmZzZXROdW1lcmljID0gZnVuY3Rpb24gb2Zmc2V0TnVtZXJpYyhvZmZzZXQpIHtcblx0XHRcdFx0Ly8gZS5nLiArMzAwLCAtMlxuXHRcdFx0XHR2YXIgdGltZSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcdHRpbWUuc2V0VGltZSh0aW1lLmdldFRpbWUoKSArIG9mZnNldCAqIDEwMDApO1xuXHRcdFx0XHRyZXR1cm4gdGltZTtcblx0XHRcdH07XG5cdFx0XHR2YXIgb2Zmc2V0U3RyaW5nID0gZnVuY3Rpb24gb2Zmc2V0U3RyaW5nKG9mZnNldCkge1xuXHRcdFx0XHQvLyBlLmcuICcrMmQnLCAnLTR3JywgJyszaCArMzBtJ1xuXHRcdFx0XHRvZmZzZXQgPSBvZmZzZXQudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0dmFyIHRpbWUgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0XHR2YXIgeWVhciA9IHRpbWUuZ2V0RnVsbFllYXIoKTtcblx0XHRcdFx0dmFyIG1vbnRoID0gdGltZS5nZXRNb250aCgpO1xuXHRcdFx0XHR2YXIgZGF5ID0gdGltZS5nZXREYXRlKCk7XG5cdFx0XHRcdHZhciBob3VyID0gdGltZS5nZXRIb3VycygpO1xuXHRcdFx0XHR2YXIgbWludXRlID0gdGltZS5nZXRNaW51dGVzKCk7XG5cdFx0XHRcdHZhciBzZWNvbmQgPSB0aW1lLmdldFNlY29uZHMoKTtcblx0XHRcdFx0dmFyIHBhdHRlcm4gPSAvKFsrLV0/WzAtOV0rKVxccyooc3xtfGh8ZHx3fG98eSk/L2c7XG5cdFx0XHRcdHZhciBtYXRjaGVzID0gcGF0dGVybi5leGVjKG9mZnNldCk7XG5cdFx0XHRcdHdoaWxlIChtYXRjaGVzKSB7XG5cdFx0XHRcdFx0c3dpdGNoIChtYXRjaGVzWzJdIHx8ICdzJykge1xuXHRcdFx0XHRcdFx0Y2FzZSAncyc6XG5cdFx0XHRcdFx0XHRcdHNlY29uZCArPSBwYXJzZUludChtYXRjaGVzWzFdLCAxMCk7YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICdtJzpcblx0XHRcdFx0XHRcdFx0bWludXRlICs9IHBhcnNlSW50KG1hdGNoZXNbMV0sIDEwKTticmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ2gnOlxuXHRcdFx0XHRcdFx0XHRob3VyICs9IHBhcnNlSW50KG1hdGNoZXNbMV0sIDEwKTticmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ2QnOlxuXHRcdFx0XHRcdFx0XHRkYXkgKz0gcGFyc2VJbnQobWF0Y2hlc1sxXSwgMTApO2JyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAndyc6XG5cdFx0XHRcdFx0XHRcdGRheSArPSBwYXJzZUludChtYXRjaGVzWzFdLCAxMCkgKiA3O2JyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAnbyc6XG5cdFx0XHRcdFx0XHRcdG1vbnRoICs9IHBhcnNlSW50KG1hdGNoZXNbMV0sIDEwKTtcblx0XHRcdFx0XHRcdFx0ZGF5ID0gTWF0aC5taW4oZGF5LCAkLmNvdW50ZG93bi5fZ2V0RGF5c0luTW9udGgoeWVhciwgbW9udGgpKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICd5Jzpcblx0XHRcdFx0XHRcdFx0eWVhciArPSBwYXJzZUludChtYXRjaGVzWzFdLCAxMCk7XG5cdFx0XHRcdFx0XHRcdGRheSA9IE1hdGgubWluKGRheSwgJC5jb3VudGRvd24uX2dldERheXNJbk1vbnRoKHllYXIsIG1vbnRoKSk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtYXRjaGVzID0gcGF0dGVybi5leGVjKG9mZnNldCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCAwKTtcblx0XHRcdH07XG5cdFx0XHR2YXIgdGltZSA9IHNldHRpbmcgPT0gbnVsbCA/IGRlZmF1bHRUaW1lIDogdHlwZW9mIHNldHRpbmcgPT0gJ3N0cmluZycgPyBvZmZzZXRTdHJpbmcoc2V0dGluZykgOiB0eXBlb2Ygc2V0dGluZyA9PSAnbnVtYmVyJyA/IG9mZnNldE51bWVyaWMoc2V0dGluZykgOiBzZXR0aW5nO1xuXHRcdFx0aWYgKHRpbWUpIHRpbWUuc2V0TWlsbGlzZWNvbmRzKDApO1xuXHRcdFx0cmV0dXJuIHRpbWU7XG5cdFx0fSxcblxuXHRcdC8qIERldGVybWluZSB0aGUgbnVtYmVyIG9mIGRheXMgaW4gYSBtb250aC5cclxuICAgICBAcGFyYW0gIHllYXIgICAobnVtYmVyKSB0aGUgeWVhclxyXG4gICAgIEBwYXJhbSAgbW9udGggIChudW1iZXIpIHRoZSBtb250aFxyXG4gICAgIEByZXR1cm4gIChudW1iZXIpIHRoZSBkYXlzIGluIHRoYXQgbW9udGggKi9cblx0XHRfZ2V0RGF5c0luTW9udGg6IGZ1bmN0aW9uIF9nZXREYXlzSW5Nb250aCh5ZWFyLCBtb250aCkge1xuXHRcdFx0cmV0dXJuIDMyIC0gbmV3IERhdGUoeWVhciwgbW9udGgsIDMyKS5nZXREYXRlKCk7XG5cdFx0fSxcblxuXHRcdC8qIEdlbmVyYXRlIHRoZSBIVE1MIHRvIGRpc3BsYXkgdGhlIGNvdW50ZG93biB3aWRnZXQuXHJcbiAgICAgQHBhcmFtICBpbnN0ICAob2JqZWN0KSB0aGUgY3VycmVudCBzZXR0aW5ncyBmb3IgdGhpcyBpbnN0YW5jZVxyXG4gICAgIEByZXR1cm4gIChzdHJpbmcpIHRoZSBuZXcgSFRNTCBmb3IgdGhlIGNvdW50ZG93biBkaXNwbGF5ICovXG5cdFx0X2dlbmVyYXRlSFRNTDogZnVuY3Rpb24gX2dlbmVyYXRlSFRNTChpbnN0KSB7XG5cdFx0XHQvLyBEZXRlcm1pbmUgd2hhdCB0byBzaG93XG5cdFx0XHRpbnN0Ll9wZXJpb2RzID0gcGVyaW9kcyA9IGluc3QuX2hvbGQgPyBpbnN0Ll9wZXJpb2RzIDogdGhpcy5fY2FsY3VsYXRlUGVyaW9kcyhpbnN0LCBpbnN0Ll9zaG93LCBuZXcgRGF0ZSgpKTtcblx0XHRcdC8vIFNob3cgYWxsICdhc05lZWRlZCcgYWZ0ZXIgZmlyc3Qgbm9uLXplcm8gdmFsdWVcblx0XHRcdHZhciBzaG93bk5vblplcm8gPSBmYWxzZTtcblx0XHRcdHZhciBzaG93Q291bnQgPSAwO1xuXHRcdFx0Zm9yICh2YXIgcGVyaW9kID0gMDsgcGVyaW9kIDwgaW5zdC5fc2hvdy5sZW5ndGg7IHBlcmlvZCsrKSB7XG5cdFx0XHRcdHNob3duTm9uWmVybyB8PSBpbnN0Ll9zaG93W3BlcmlvZF0gPT0gJz8nICYmIHBlcmlvZHNbcGVyaW9kXSA+IDA7XG5cdFx0XHRcdGluc3QuX3Nob3dbcGVyaW9kXSA9IGluc3QuX3Nob3dbcGVyaW9kXSA9PSAnPycgJiYgIXNob3duTm9uWmVybyA/IG51bGwgOiBpbnN0Ll9zaG93W3BlcmlvZF07XG5cdFx0XHRcdHNob3dDb3VudCArPSBpbnN0Ll9zaG93W3BlcmlvZF0gPyAxIDogMDtcblx0XHRcdH1cblx0XHRcdHZhciBjb21wYWN0ID0gdGhpcy5fZ2V0KGluc3QsICdjb21wYWN0Jyk7XG5cdFx0XHR2YXIgbGF5b3V0ID0gdGhpcy5fZ2V0KGluc3QsICdsYXlvdXQnKTtcblx0XHRcdHZhciBsYWJlbHMgPSBjb21wYWN0ID8gdGhpcy5fZ2V0KGluc3QsICdjb21wYWN0TGFiZWxzJykgOiB0aGlzLl9nZXQoaW5zdCwgJ2xhYmVscycpO1xuXHRcdFx0dmFyIHRpbWVTZXBhcmF0b3IgPSB0aGlzLl9nZXQoaW5zdCwgJ3RpbWVTZXBhcmF0b3InKTtcblx0XHRcdHZhciBkZXNjcmlwdGlvbiA9IHRoaXMuX2dldChpbnN0LCAnZGVzY3JpcHRpb24nKSB8fCAnJztcblx0XHRcdHZhciBzaG93Q29tcGFjdCA9IGZ1bmN0aW9uIHNob3dDb21wYWN0KHBlcmlvZCkge1xuXHRcdFx0XHR2YXIgbGFiZWxzTnVtID0gJC5jb3VudGRvd24uX2dldChpbnN0LCAnY29tcGFjdExhYmVscycgKyBwZXJpb2RzW3BlcmlvZF0pO1xuXHRcdFx0XHRyZXR1cm4gaW5zdC5fc2hvd1twZXJpb2RdID8gcGVyaW9kc1twZXJpb2RdICsgKGxhYmVsc051bSA/IGxhYmVsc051bVtwZXJpb2RdIDogbGFiZWxzW3BlcmlvZF0pICsgJyAnIDogJyc7XG5cdFx0XHR9O1xuXHRcdFx0dmFyIHNob3dGdWxsID0gZnVuY3Rpb24gc2hvd0Z1bGwocGVyaW9kKSB7XG5cdFx0XHRcdHZhciBsYWJlbHNOdW0gPSAkLmNvdW50ZG93bi5fZ2V0KGluc3QsICdsYWJlbHMnICsgcGVyaW9kc1twZXJpb2RdKTtcblx0XHRcdFx0cmV0dXJuIGluc3QuX3Nob3dbcGVyaW9kXSA/ICc8c3BhbiBjbGFzcz1cImNvdW50ZG93bl9zZWN0aW9uXCI+PHNwYW4gY2xhc3M9XCJjb3VudGRvd25fYW1vdW50XCI+JyArIHBlcmlvZHNbcGVyaW9kXSArICc8L3NwYW4+PGJyLz4nICsgKGxhYmVsc051bSA/IGxhYmVsc051bVtwZXJpb2RdIDogbGFiZWxzW3BlcmlvZF0pICsgJzwvc3Bhbj4nIDogJyc7XG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuIGxheW91dCA/IHRoaXMuX2J1aWxkTGF5b3V0KGluc3QsIGxheW91dCwgY29tcGFjdCkgOiAoY29tcGFjdCA/IC8vIENvbXBhY3QgdmVyc2lvblxuXHRcdFx0JzxzcGFuIGNsYXNzPVwiY291bnRkb3duX3JvdyBjb3VudGRvd25fYW1vdW50JyArIChpbnN0Ll9ob2xkID8gJyBjb3VudGRvd25faG9sZGluZycgOiAnJykgKyAnXCI+JyArIHNob3dDb21wYWN0KFkpICsgc2hvd0NvbXBhY3QoTykgKyBzaG93Q29tcGFjdChXKSArIHNob3dDb21wYWN0KEQpICsgKGluc3QuX3Nob3dbSF0gPyB0aGlzLl90d29EaWdpdHMocGVyaW9kc1tIXSkgOiAnJykgKyAoaW5zdC5fc2hvd1tNXSA/IChpbnN0Ll9zaG93W0hdID8gdGltZVNlcGFyYXRvciA6ICcnKSArIHRoaXMuX3R3b0RpZ2l0cyhwZXJpb2RzW01dKSA6ICcnKSArIChpbnN0Ll9zaG93W1NdID8gKGluc3QuX3Nob3dbSF0gfHwgaW5zdC5fc2hvd1tNXSA/IHRpbWVTZXBhcmF0b3IgOiAnJykgKyB0aGlzLl90d29EaWdpdHMocGVyaW9kc1tTXSkgOiAnJykgOlxuXHRcdFx0Ly8gRnVsbCB2ZXJzaW9uXG5cdFx0XHQnPHNwYW4gY2xhc3M9XCJjb3VudGRvd25fcm93IGNvdW50ZG93bl9zaG93JyArIHNob3dDb3VudCArIChpbnN0Ll9ob2xkID8gJyBjb3VudGRvd25faG9sZGluZycgOiAnJykgKyAnXCI+JyArIHNob3dGdWxsKFkpICsgc2hvd0Z1bGwoTykgKyBzaG93RnVsbChXKSArIHNob3dGdWxsKEQpICsgc2hvd0Z1bGwoSCkgKyBzaG93RnVsbChNKSArIHNob3dGdWxsKFMpKSArICc8L3NwYW4+JyArIChkZXNjcmlwdGlvbiA/ICc8c3BhbiBjbGFzcz1cImNvdW50ZG93bl9yb3cgY291bnRkb3duX2Rlc2NyXCI+JyArIGRlc2NyaXB0aW9uICsgJzwvc3Bhbj4nIDogJycpO1xuXHRcdH0sXG5cblx0XHQvKiBDb25zdHJ1Y3QgYSBjdXN0b20gbGF5b3V0LlxyXG4gICAgIEBwYXJhbSAgaW5zdCAgICAgKG9iamVjdCkgdGhlIGN1cnJlbnQgc2V0dGluZ3MgZm9yIHRoaXMgaW5zdGFuY2VcclxuICAgICBAcGFyYW0gIGxheW91dCAgIChzdHJpbmcpIHRoZSBjdXN0b21pc2VkIGxheW91dFxyXG4gICAgIEBwYXJhbSAgY29tcGFjdCAgKGJvb2xlYW4pIHRydWUgaWYgdXNpbmcgY29tcGFjdCBsYWJlbHNcclxuICAgICBAcmV0dXJuICAoc3RyaW5nKSB0aGUgY3VzdG9tIEhUTUwgKi9cblx0XHRfYnVpbGRMYXlvdXQ6IGZ1bmN0aW9uIF9idWlsZExheW91dChpbnN0LCBsYXlvdXQsIGNvbXBhY3QpIHtcblx0XHRcdHZhciBsYWJlbHMgPSBjb21wYWN0ID8gdGhpcy5fZ2V0KGluc3QsICdjb21wYWN0TGFiZWxzJykgOiB0aGlzLl9nZXQoaW5zdCwgJ2xhYmVscycpO1xuXHRcdFx0dmFyIGxhYmVsRm9yID0gZnVuY3Rpb24gbGFiZWxGb3IoaW5kZXgpIHtcblx0XHRcdFx0cmV0dXJuICgkLmNvdW50ZG93bi5fZ2V0KGluc3QsIChjb21wYWN0ID8gJ2NvbXBhY3RMYWJlbHMnIDogJ2xhYmVscycpICsgaW5zdC5fcGVyaW9kc1tpbmRleF0pIHx8IGxhYmVscylbaW5kZXhdO1xuXHRcdFx0fTtcblx0XHRcdHZhciBzdWJzID0ge1xuXHRcdFx0XHR5bDogbGFiZWxGb3IoWSksIHluOiBpbnN0Ll9wZXJpb2RzW1ldLCB5bm46IHRoaXMuX3R3b0RpZ2l0cyhpbnN0Ll9wZXJpb2RzW1ldKSxcblx0XHRcdFx0b2w6IGxhYmVsRm9yKE8pLCBvbjogaW5zdC5fcGVyaW9kc1tPXSwgb25uOiB0aGlzLl90d29EaWdpdHMoaW5zdC5fcGVyaW9kc1tPXSksXG5cdFx0XHRcdHdsOiBsYWJlbEZvcihXKSwgd246IGluc3QuX3BlcmlvZHNbV10sIHdubjogdGhpcy5fdHdvRGlnaXRzKGluc3QuX3BlcmlvZHNbV10pLFxuXHRcdFx0XHRkbDogbGFiZWxGb3IoRCksIGRuOiBpbnN0Ll9wZXJpb2RzW0RdLCBkbm46IHRoaXMuX3R3b0RpZ2l0cyhpbnN0Ll9wZXJpb2RzW0RdKSwgZG5ubjogdGhpcy5fdGhyZWVEaWdpdHMoaW5zdC5fcGVyaW9kc1tEXSksXG5cdFx0XHRcdGhsOiBsYWJlbEZvcihIKSwgaG46IGluc3QuX3BlcmlvZHNbSF0sIGhubjogdGhpcy5fdHdvRGlnaXRzKGluc3QuX3BlcmlvZHNbSF0pLFxuXHRcdFx0XHRtbDogbGFiZWxGb3IoTSksIG1uOiBpbnN0Ll9wZXJpb2RzW01dLCBtbm46IHRoaXMuX3R3b0RpZ2l0cyhpbnN0Ll9wZXJpb2RzW01dKSxcblx0XHRcdFx0c2w6IGxhYmVsRm9yKFMpLCBzbjogaW5zdC5fcGVyaW9kc1tTXSwgc25uOiB0aGlzLl90d29EaWdpdHMoaW5zdC5fcGVyaW9kc1tTXSkgfTtcblx0XHRcdHZhciBodG1sID0gbGF5b3V0O1xuXHRcdFx0Ly8gUmVwbGFjZSBwZXJpb2QgY29udGFpbmVyczoge3A8fS4uLntwPn1cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgNzsgaSsrKSB7XG5cdFx0XHRcdHZhciBwZXJpb2QgPSAneW93ZGhtcycuY2hhckF0KGkpO1xuXHRcdFx0XHR2YXIgcmUgPSBuZXcgUmVnRXhwKCdcXFxceycgKyBwZXJpb2QgKyAnPFxcXFx9KC4qKVxcXFx7JyArIHBlcmlvZCArICc+XFxcXH0nLCAnZycpO1xuXHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKHJlLCBpbnN0Ll9zaG93W2ldID8gJyQxJyA6ICcnKTtcblx0XHRcdH1cblx0XHRcdC8vIFJlcGxhY2UgcGVyaW9kIHZhbHVlczoge3BufVxuXHRcdFx0JC5lYWNoKHN1YnMsIGZ1bmN0aW9uIChuLCB2KSB7XG5cdFx0XHRcdHZhciByZSA9IG5ldyBSZWdFeHAoJ1xcXFx7JyArIG4gKyAnXFxcXH0nLCAnZycpO1xuXHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKHJlLCB2KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGh0bWw7XG5cdFx0fSxcblxuXHRcdC8qIEVuc3VyZSBhIG51bWVyaWMgdmFsdWUgaGFzIGF0IGxlYXN0IHR3byBkaWdpdHMgZm9yIGRpc3BsYXkuXHJcbiAgICAgQHBhcmFtICB2YWx1ZSAgKG51bWJlcikgdGhlIHZhbHVlIHRvIGRpc3BsYXlcclxuICAgICBAcmV0dXJuICAoc3RyaW5nKSB0aGUgZGlzcGxheSB0ZXh0ICovXG5cdFx0X3R3b0RpZ2l0czogZnVuY3Rpb24gX3R3b0RpZ2l0cyh2YWx1ZSkge1xuXHRcdFx0cmV0dXJuICh2YWx1ZSA8IDEwID8gJzAnIDogJycpICsgdmFsdWU7XG5cdFx0fSxcblxuXHRcdC8qIEVuc3VyZSBhIG51bWVyaWMgdmFsdWUgaGFzIGF0IGxlYXN0IHRocmVlIGRpZ2l0cyBmb3IgZGlzcGxheS5cclxuICAgICBAcGFyYW0gIHZhbHVlICAobnVtYmVyKSB0aGUgdmFsdWUgdG8gZGlzcGxheVxyXG4gICAgIEByZXR1cm4gIChzdHJpbmcpIHRoZSBkaXNwbGF5IHRleHQgKi9cblx0XHRfdGhyZWVEaWdpdHM6IGZ1bmN0aW9uIF90aHJlZURpZ2l0cyh2YWx1ZSkge1xuXHRcdFx0cmV0dXJuICh2YWx1ZSA8IDEwMCA/IHZhbHVlIDwgMTAgPyAnMDAnIDogJzAnIDogJycpICsgdmFsdWU7XG5cdFx0fSxcblxuXHRcdC8qIFRyYW5zbGF0ZSB0aGUgZm9ybWF0IGludG8gZmxhZ3MgZm9yIGVhY2ggcGVyaW9kLlxyXG4gICAgIEBwYXJhbSAgaW5zdCAgKG9iamVjdCkgdGhlIGN1cnJlbnQgc2V0dGluZ3MgZm9yIHRoaXMgaW5zdGFuY2VcclxuICAgICBAcmV0dXJuICAoc3RyaW5nWzddKSBmbGFncyBpbmRpY2F0aW5nIHdoaWNoIHBlcmlvZHMgYXJlIHJlcXVlc3RlZCAoPykgb3JcclxuICAgICAgICAgICAgICByZXF1aXJlZCAoISkgYnkgeWVhciwgbW9udGgsIHdlZWssIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQgKi9cblx0XHRfZGV0ZXJtaW5lU2hvdzogZnVuY3Rpb24gX2RldGVybWluZVNob3coaW5zdCkge1xuXHRcdFx0dmFyIGZvcm1hdCA9IHRoaXMuX2dldChpbnN0LCAnZm9ybWF0Jyk7XG5cdFx0XHR2YXIgc2hvdyA9IFtdO1xuXHRcdFx0c2hvd1tZXSA9IGZvcm1hdC5tYXRjaCgneScpID8gJz8nIDogZm9ybWF0Lm1hdGNoKCdZJykgPyAnIScgOiBudWxsO1xuXHRcdFx0c2hvd1tPXSA9IGZvcm1hdC5tYXRjaCgnbycpID8gJz8nIDogZm9ybWF0Lm1hdGNoKCdPJykgPyAnIScgOiBudWxsO1xuXHRcdFx0c2hvd1tXXSA9IGZvcm1hdC5tYXRjaCgndycpID8gJz8nIDogZm9ybWF0Lm1hdGNoKCdXJykgPyAnIScgOiBudWxsO1xuXHRcdFx0c2hvd1tEXSA9IGZvcm1hdC5tYXRjaCgnZCcpID8gJz8nIDogZm9ybWF0Lm1hdGNoKCdEJykgPyAnIScgOiBudWxsO1xuXHRcdFx0c2hvd1tIXSA9IGZvcm1hdC5tYXRjaCgnaCcpID8gJz8nIDogZm9ybWF0Lm1hdGNoKCdIJykgPyAnIScgOiBudWxsO1xuXHRcdFx0c2hvd1tNXSA9IGZvcm1hdC5tYXRjaCgnbScpID8gJz8nIDogZm9ybWF0Lm1hdGNoKCdNJykgPyAnIScgOiBudWxsO1xuXHRcdFx0c2hvd1tTXSA9IGZvcm1hdC5tYXRjaCgncycpID8gJz8nIDogZm9ybWF0Lm1hdGNoKCdTJykgPyAnIScgOiBudWxsO1xuXHRcdFx0cmV0dXJuIHNob3c7XG5cdFx0fSxcblxuXHRcdC8qIENhbGN1bGF0ZSB0aGUgcmVxdWVzdGVkIHBlcmlvZHMgYmV0d2VlbiBub3cgYW5kIHRoZSB0YXJnZXQgdGltZS5cclxuICAgICBAcGFyYW0gIGluc3QgIChvYmplY3QpIHRoZSBjdXJyZW50IHNldHRpbmdzIGZvciB0aGlzIGluc3RhbmNlXHJcbiAgICAgQHBhcmFtICBzaG93ICAoc3RyaW5nWzddKSBmbGFncyBpbmRpY2F0aW5nIHdoaWNoIHBlcmlvZHMgYXJlIHJlcXVlc3RlZC9yZXF1aXJlZFxyXG4gICAgIEBwYXJhbSAgbm93ICAgKERhdGUpIHRoZSBjdXJyZW50IGRhdGUgYW5kIHRpbWVcclxuICAgICBAcmV0dXJuICAobnVtYmVyWzddKSB0aGUgY3VycmVudCB0aW1lIHBlcmlvZHMgKGFsd2F5cyBwb3NpdGl2ZSlcclxuICAgICAgICAgICAgICBieSB5ZWFyLCBtb250aCwgd2VlaywgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCAqL1xuXHRcdF9jYWxjdWxhdGVQZXJpb2RzOiBmdW5jdGlvbiBfY2FsY3VsYXRlUGVyaW9kcyhpbnN0LCBzaG93LCBub3cpIHtcblx0XHRcdC8vIEZpbmQgZW5kcG9pbnRzXG5cdFx0XHRpbnN0Ll9ub3cgPSBub3c7XG5cdFx0XHRpbnN0Ll9ub3cuc2V0TWlsbGlzZWNvbmRzKDApO1xuXHRcdFx0dmFyIHVudGlsID0gbmV3IERhdGUoaW5zdC5fbm93LmdldFRpbWUoKSk7XG5cdFx0XHRpZiAoaW5zdC5fc2luY2UgJiYgbm93LmdldFRpbWUoKSA8IGluc3QuX3NpbmNlLmdldFRpbWUoKSkge1xuXHRcdFx0XHRpbnN0Ll9ub3cgPSBub3cgPSB1bnRpbDtcblx0XHRcdH0gZWxzZSBpZiAoaW5zdC5fc2luY2UpIHtcblx0XHRcdFx0bm93ID0gaW5zdC5fc2luY2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR1bnRpbC5zZXRUaW1lKGluc3QuX3VudGlsLmdldFRpbWUoKSk7XG5cdFx0XHRcdGlmIChub3cuZ2V0VGltZSgpID4gaW5zdC5fdW50aWwuZ2V0VGltZSgpKSB7XG5cdFx0XHRcdFx0aW5zdC5fbm93ID0gbm93ID0gdW50aWw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIENhbGN1bGF0ZSBkaWZmZXJlbmNlcyBieSBwZXJpb2Rcblx0XHRcdHZhciBwZXJpb2RzID0gWzAsIDAsIDAsIDAsIDAsIDAsIDBdO1xuXHRcdFx0aWYgKHNob3dbWV0gfHwgc2hvd1tPXSkge1xuXHRcdFx0XHQvLyBUcmVhdCBlbmQgb2YgbW9udGhzIGFzIHRoZSBzYW1lXG5cdFx0XHRcdHZhciBsYXN0Tm93ID0gJC5jb3VudGRvd24uX2dldERheXNJbk1vbnRoKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSk7XG5cdFx0XHRcdHZhciBsYXN0VW50aWwgPSAkLmNvdW50ZG93bi5fZ2V0RGF5c0luTW9udGgodW50aWwuZ2V0RnVsbFllYXIoKSwgdW50aWwuZ2V0TW9udGgoKSk7XG5cdFx0XHRcdHZhciBzYW1lRGF5ID0gdW50aWwuZ2V0RGF0ZSgpID09IG5vdy5nZXREYXRlKCkgfHwgdW50aWwuZ2V0RGF0ZSgpID49IE1hdGgubWluKGxhc3ROb3csIGxhc3RVbnRpbCkgJiYgbm93LmdldERhdGUoKSA+PSBNYXRoLm1pbihsYXN0Tm93LCBsYXN0VW50aWwpO1xuXHRcdFx0XHR2YXIgZ2V0U2VjcyA9IGZ1bmN0aW9uIGdldFNlY3MoZGF0ZSkge1xuXHRcdFx0XHRcdHJldHVybiAoZGF0ZS5nZXRIb3VycygpICogNjAgKyBkYXRlLmdldE1pbnV0ZXMoKSkgKiA2MCArIGRhdGUuZ2V0U2Vjb25kcygpO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHR2YXIgbW9udGhzID0gTWF0aC5tYXgoMCwgKHVudGlsLmdldEZ1bGxZZWFyKCkgLSBub3cuZ2V0RnVsbFllYXIoKSkgKiAxMiArIHVudGlsLmdldE1vbnRoKCkgLSBub3cuZ2V0TW9udGgoKSArICh1bnRpbC5nZXREYXRlKCkgPCBub3cuZ2V0RGF0ZSgpICYmICFzYW1lRGF5IHx8IHNhbWVEYXkgJiYgZ2V0U2Vjcyh1bnRpbCkgPCBnZXRTZWNzKG5vdykgPyAtMSA6IDApKTtcblx0XHRcdFx0cGVyaW9kc1tZXSA9IHNob3dbWV0gPyBNYXRoLmZsb29yKG1vbnRocyAvIDEyKSA6IDA7XG5cdFx0XHRcdHBlcmlvZHNbT10gPSBzaG93W09dID8gbW9udGhzIC0gcGVyaW9kc1tZXSAqIDEyIDogMDtcblx0XHRcdFx0Ly8gQWRqdXN0IGZvciBtb250aHMgZGlmZmVyZW5jZSBhbmQgZW5kIG9mIG1vbnRoIGlmIG5lY2Vzc2FyeVxuXHRcdFx0XHR2YXIgYWRqdXN0RGF0ZSA9IGZ1bmN0aW9uIGFkanVzdERhdGUoZGF0ZSwgb2Zmc2V0LCBsYXN0KSB7XG5cdFx0XHRcdFx0dmFyIHdhc0xhc3REYXkgPSBkYXRlLmdldERhdGUoKSA9PSBsYXN0O1xuXHRcdFx0XHRcdHZhciBsYXN0RGF5ID0gJC5jb3VudGRvd24uX2dldERheXNJbk1vbnRoKGRhdGUuZ2V0RnVsbFllYXIoKSArIG9mZnNldCAqIHBlcmlvZHNbWV0sIGRhdGUuZ2V0TW9udGgoKSArIG9mZnNldCAqIHBlcmlvZHNbT10pO1xuXHRcdFx0XHRcdGlmIChkYXRlLmdldERhdGUoKSA+IGxhc3REYXkpIHtcblx0XHRcdFx0XHRcdGRhdGUuc2V0RGF0ZShsYXN0RGF5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkgKyBvZmZzZXQgKiBwZXJpb2RzW1ldKTtcblx0XHRcdFx0XHRkYXRlLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSArIG9mZnNldCAqIHBlcmlvZHNbT10pO1xuXHRcdFx0XHRcdGlmICh3YXNMYXN0RGF5KSB7XG5cdFx0XHRcdFx0XHRkYXRlLnNldERhdGUobGFzdERheSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBkYXRlO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAoaW5zdC5fc2luY2UpIHtcblx0XHRcdFx0XHR1bnRpbCA9IGFkanVzdERhdGUodW50aWwsIC0xLCBsYXN0VW50aWwpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG5vdyA9IGFkanVzdERhdGUobmV3IERhdGUobm93LmdldFRpbWUoKSksICsxLCBsYXN0Tm93KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dmFyIGRpZmYgPSBNYXRoLmZsb29yKCh1bnRpbC5nZXRUaW1lKCkgLSBub3cuZ2V0VGltZSgpKSAvIDEwMDApO1xuXHRcdFx0dmFyIGV4dHJhY3RQZXJpb2QgPSBmdW5jdGlvbiBleHRyYWN0UGVyaW9kKHBlcmlvZCwgbnVtU2Vjcykge1xuXHRcdFx0XHRwZXJpb2RzW3BlcmlvZF0gPSBzaG93W3BlcmlvZF0gPyBNYXRoLmZsb29yKGRpZmYgLyBudW1TZWNzKSA6IDA7XG5cdFx0XHRcdGRpZmYgLT0gcGVyaW9kc1twZXJpb2RdICogbnVtU2Vjcztcblx0XHRcdH07XG5cdFx0XHRleHRyYWN0UGVyaW9kKFcsIDYwNDgwMCk7XG5cdFx0XHRleHRyYWN0UGVyaW9kKEQsIDg2NDAwKTtcblx0XHRcdGV4dHJhY3RQZXJpb2QoSCwgMzYwMCk7XG5cdFx0XHRleHRyYWN0UGVyaW9kKE0sIDYwKTtcblx0XHRcdGV4dHJhY3RQZXJpb2QoUywgMSk7XG5cdFx0XHRyZXR1cm4gcGVyaW9kcztcblx0XHR9XG5cdH0pO1xuXG5cdC8qIGpRdWVyeSBleHRlbmQgbm93IGlnbm9yZXMgbnVsbHMhXHJcbiAgICBAcGFyYW0gIHRhcmdldCAgKG9iamVjdCkgdGhlIG9iamVjdCB0byB1cGRhdGVcclxuICAgIEBwYXJhbSAgcHJvcHMgICAob2JqZWN0KSB0aGUgbmV3IHNldHRpbmdzXHJcbiAgICBAcmV0dXJuICAob2JqZWN0KSB0aGUgdXBkYXRlZCBvYmplY3QgKi9cblx0ZnVuY3Rpb24gZXh0ZW5kUmVtb3ZlKHRhcmdldCwgcHJvcHMpIHtcblx0XHQkLmV4dGVuZCh0YXJnZXQsIHByb3BzKTtcblx0XHRmb3IgKHZhciBuYW1lIGluIHByb3BzKSB7XG5cdFx0XHRpZiAocHJvcHNbbmFtZV0gPT0gbnVsbCkge1xuXHRcdFx0XHR0YXJnZXRbbmFtZV0gPSBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdGFyZ2V0O1xuXHR9XG5cblx0LyogUHJvY2VzcyB0aGUgY291bnRkb3duIGZ1bmN0aW9uYWxpdHkgZm9yIGEgalF1ZXJ5IHNlbGVjdGlvbi5cclxuICAgIEBwYXJhbSAgY29tbWFuZCAgKHN0cmluZykgdGhlIGNvbW1hbmQgdG8gcnVuIChvcHRpb25hbCwgZGVmYXVsdCAnYXR0YWNoJylcclxuICAgIEBwYXJhbSAgb3B0aW9ucyAgKG9iamVjdCkgdGhlIG5ldyBzZXR0aW5ncyB0byB1c2UgZm9yIHRoZXNlIGNvdW50ZG93biBpbnN0YW5jZXNcclxuICAgIEByZXR1cm4gIChqUXVlcnkpIGZvciBjaGFpbmluZyBmdXJ0aGVyIGNhbGxzICovXG5cdCQuZm4uY291bnRkb3duID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0XHR2YXIgb3RoZXJBcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblx0XHRpZiAob3B0aW9ucyA9PSAnZ2V0VGltZXMnKSB7XG5cdFx0XHRyZXR1cm4gJC5jb3VudGRvd25bJ18nICsgb3B0aW9ucyArICdDb3VudGRvd24nXS5hcHBseSgkLmNvdW50ZG93biwgW3RoaXNbMF1dLmNvbmNhdChvdGhlckFyZ3MpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodHlwZW9mIG9wdGlvbnMgPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0JC5jb3VudGRvd25bJ18nICsgb3B0aW9ucyArICdDb3VudGRvd24nXS5hcHBseSgkLmNvdW50ZG93biwgW3RoaXNdLmNvbmNhdChvdGhlckFyZ3MpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQuY291bnRkb3duLl9hdHRhY2hDb3VudGRvd24odGhpcywgb3B0aW9ucyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0LyogSW5pdGlhbGlzZSB0aGUgY291bnRkb3duIGZ1bmN0aW9uYWxpdHkuICovXG5cdCQuY291bnRkb3duID0gbmV3IENvdW50ZG93bigpOyAvLyBzaW5nbGV0b24gaW5zdGFuY2Vcbn0pKGpRdWVyeSk7XG5cbi8vIEphdmFTY3JpcHQgRG9jdW1lbnRcblxuXG4vL2NvdW50ZG93blxuJChmdW5jdGlvbiAoKSB7XG5cdHZhciBjb3VudERheSA9IG5ldyBEYXRlKCk7XG5cdGNvdW50RGF5ID0gbmV3IERhdGUoJ01heSA1LCAyMDE4IDEyOjAwOjAwJyk7XG5cdCQoJyNkZWZhdWx0Q291bnRkb3duJykuY291bnRkb3duKHtcblx0XHR1bnRpbDogY291bnREYXksXG5cdFx0Zm9ybWF0OiAnREhNUycsXG5cdFx0bGF5b3V0OiAnPGRpdiBjbGFzcz1cImNvbnRlbnRfX3RpbWVyLXdyYXBcIiBpZD1cImNvdW50ZXJcIj4nICsgJzxkaXYgaWQ9XCJ2YWx1ZXNcIj4nICsgJzxkaXYgaWQ9XCJjb3VudGVyX2RheXNcIiBjbGFzcz1cImdyZXkgbnVtYnMgcm91bmRlZCBzaGFkb3dcIj57ZG5ubn08cCBjbGFzcz1cImRhdGVfbGFiZWxcIj57ZGx9PC9wPjwvZGl2PicgKyAnPGRpdiBpZD1cImNvdW50ZXJfaG91cnNcIiBjbGFzcz1cImdyZXkgbnVtYnMgcm91bmRlZCBzaGFkb3dcIj57aG5ufTxwIGNsYXNzPVwiZGF0ZV9sYWJlbFwiPntobH08L3A+PC9kaXY+JyArICc8ZGl2IGlkPVwiY291bnRlcl9taW51dGVzXCIgY2xhc3M9XCJncmV5IG51bWJzIHJvdW5kZWQgc2hhZG93XCI+e21ubn08cCBjbGFzcz1cImRhdGVfbGFiZWxcIj57bWx9PC9wPjwvZGl2PicgKyAnPGRpdiBpZD1cImNvdW50ZXJfc2Vjb25kc1wiIGNsYXNzPVwiZ3JleSBudW1icyByb3VuZGVkIHNoYWRvd1wiPntzbm59PHAgY2xhc3M9XCJkYXRlX2xhYmVsXCI+e3NsfTwvcD48L2Rpdj4nICsgJzwvZGl2PicgKyAnPC9kaXY+J1xuXHR9KTtcblx0JCgnI3llYXInKS50ZXh0KGNvdW50RGF5LmdldEZ1bGxZZWFyKCkpO1xufSk7Il0sImZpbGUiOiJtYWluLmpzIn0=
