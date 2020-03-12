(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/color-convert/conversions.js":
/*!***************************************************!*\
  !*** ./node_modules/color-convert/conversions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var cssKeywords = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in cssKeywords) {
	if (cssKeywords.hasOwnProperty(key)) {
		reverseKeywords[cssKeywords[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in cssKeywords) {
		if (cssKeywords.hasOwnProperty(keyword)) {
			var value = cssKeywords[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),

/***/ "./node_modules/color-convert/index.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");
var route = __webpack_require__(/*! ./route */ "./node_modules/color-convert/route.js");

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),

/***/ "./node_modules/color-convert/route.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/route.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ "./node_modules/color-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/color-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var colorNames = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");
var swizzle = __webpack_require__(/*! simple-swizzle */ "./node_modules/simple-swizzle/index.js");

var reverseNames = {};

// create a list of reverse color names
for (var name in colorNames) {
	if (colorNames.hasOwnProperty(name)) {
		reverseNames[colorNames[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		rgb = colorNames[match[1]];

		if (!rgb) {
			return null;
		}

		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = (parseFloat(match[1]) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = swizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = swizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = swizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = swizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = swizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}


/***/ }),

/***/ "./node_modules/color/index.js":
/*!*************************************!*\
  !*** ./node_modules/color/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var colorString = __webpack_require__(/*! color-string */ "./node_modules/color-string/index.js");
var convert = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");

var _slice = [].slice;

var skippedModels = [
	// to be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// gray conflicts with some method names, and has its own method defined.
	'gray',

	// shouldn't really be in color-convert either...
	'hex'
];

var hashedModelKeys = {};
Object.keys(convert).forEach(function (model) {
	hashedModelKeys[_slice.call(convert[model].labels).sort().join('')] = model;
});

var limiters = {};

function Color(obj, model) {
	if (!(this instanceof Color)) {
		return new Color(obj, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in convert)) {
		throw new Error('Unknown model: ' + model);
	}

	var i;
	var channels;

	if (obj == null) { // eslint-disable-line no-eq-null,eqeqeq
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}

		this.model = result.model;
		channels = convert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = convert[this.model].channels;
		var newArr = _slice.call(obj, 0, channels);
		this.color = zeroArray(newArr, channels);
		this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	} else if (typeof obj === 'number') {
		// this is always RGB - can be converted later on.
		obj &= 0xFFFFFF;
		this.model = 'rgb';
		this.color = [
			(obj >> 16) & 0xFF,
			(obj >> 8) & 0xFF,
			obj & 0xFF
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		var keys = Object.keys(obj);
		if ('alpha' in obj) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
		}

		var hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}

		this.model = hashedModelKeys[hashedKeys];

		var labels = convert[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = convert[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString: function () {
		return this.string();
	},

	toJSON: function () {
		return this[this.model]();
	},

	string: function (places) {
		var self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},

	percentString: function (places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},

	array: function () {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},

	object: function () {
		var result = {};
		var channels = convert[this.model].channels;
		var labels = convert[this.model].labels;

		for (var i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray: function () {
		var rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject: function () {
		var rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round: function (places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},

	alpha: function (val) {
		if (arguments.length) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}

		return this.valpha;
	},

	// rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }), // eslint-disable-line brace-style

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return convert[this.model].keyword(this.color);
	},

	hex: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	rgbNumber: function () {
		var rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.rgb().color;

		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	isDark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.rgb().color;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	isLight: function () {
		return !this.isDark();
	},

	negate: function () {
		var rgb = this.rgb();
		for (var i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}
		return rgb;
	},

	lighten: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten: function (ratio) {
		var hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken: function (ratio) {
		var hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale: function () {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var rgb = this.rgb().color;
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(val, val, val);
	},

	fade: function (ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer: function (ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate: function (degrees) {
		var hsl = this.hsl();
		var hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix: function (mixinColor, weight) {
		// ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		if (!mixinColor || !mixinColor.rgb) {
			throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
		}
		var color1 = mixinColor.rgb();
		var color2 = this.rgb();
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return Color.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue(),
				color1.alpha() * p + color2.alpha() * (1 - p));
	}
};

// model conversion methods and static constructors
Object.keys(convert).forEach(function (model) {
	if (skippedModels.indexOf(model) !== -1) {
		return;
	}

	var channels = convert[model].channels;

	// conversion methods
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments.length) {
			return new Color(arguments, model);
		}

		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};

	// 'static' construction methods
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}
		return new Color(color, model);
	};
});

function roundTo(num, places) {
	return Number(num.toFixed(places));
}

function roundToPlace(places) {
	return function (num) {
		return roundTo(num, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	model.forEach(function (m) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	});

	model = model[0];

	return function (val) {
		var result;

		if (arguments.length) {
			if (modifier) {
				val = modifier(val);
			}

			result = this[model]();
			result.color[channel] = val;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(val) {
	return Array.isArray(val) ? val : [val];
}

function zeroArray(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}

	return arr;
}

module.exports = Color;


/***/ }),

/***/ "./node_modules/simple-swizzle/index.js":
/*!**********************************************!*\
  !*** ./node_modules/simple-swizzle/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArrayish = __webpack_require__(/*! is-arrayish */ "./node_modules/simple-swizzle/node_modules/is-arrayish/index.js");

var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};


/***/ }),

/***/ "./node_modules/simple-swizzle/node_modules/is-arrayish/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/simple-swizzle/node_modules/is-arrayish/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};


/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      2KnowMySelf - The Article Pocket App\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-grid no-padding>\n    <ion-row class=\"materialAppRow\">\n      <ion-col no-padding class=\"materialAppThemeCol\" size=\"12\">\n        <ion-item style='--background:var(--my-var)'  class=\"segment\" no-padding>\n          <ion-segment scrollable>\n            <ion-segment-button class=\"segmentTextBtn\">\n              <ion-row>\n                <ion-col size=\"6\">\n                  <p class=\"materialAppPara\">\n                    <b>App Color </b>\n                  </p>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-icon class=\"forward-icon\" name=\"arrow-round-forward\"></ion-icon>\n                </ion-col>\n              </ion-row>\n            </ion-segment-button>\n            <ion-segment-button class=\"lightOrangeSegmentBtn\">\n              <ion-button *ngIf=\"!visiableBtnAutum\" (click)=\"changeTheme('autumn')\" class=\"lightOrangeBtn\"></ion-button>\n              <ion-button *ngIf=\"visiableBtnAutum\" (click)=\"changeTheme('autumn')\" class=\"lightOrangeBtn\">\n                <ion-icon class=\"checkmark-icon\" name=\"checkmark\" size=\"large\"></ion-icon>\n              </ion-button>\n            </ion-segment-button>\n            <ion-segment-button class=\"darkBlueSegmentBtn\">\n              <ion-button *ngIf=\"!visiableBtnNight\" (click)=\"changeTheme('night')\" class=\"darkBlueBtn\"></ion-button>\n              <ion-button *ngIf=\"visiableBtnNight\" (click)=\"changeTheme('night')\" class=\"darkBlueBtn\">\n                <ion-icon class=\"checkmark-icon\" name=\"checkmark\" size=\"large\"></ion-icon>\n              </ion-button>\n            </ion-segment-button>\n            <ion-segment-button class=\"lightPurpleSegmentBtn\">\n              <ion-button *ngIf=\"!visiableBtnNeon\" (click)=\"changeTheme('neon')\" class=\"lightPurpleBtn\"></ion-button>\n              <ion-button *ngIf=\"visiableBtnNeon\" (click)=\"changeTheme('neon')\" class=\"lightPurpleBtn\">\n                <ion-icon class=\"checkmark-icon\" name=\"checkmark\"></ion-icon>\n              </ion-button>\n            </ion-segment-button>\n            <ion-segment-button class=\"darkPinkSegmentBtn\">\n              <ion-button *ngIf=\"!visiableBtnOriginal\" (click)=\"changeTheme('orginal')\" class=\"darkPinkBtn\"></ion-button>\n              <ion-button *ngIf=\"visiableBtnOriginal\" (click)=\"changeTheme('orginal')\" class=\"darkPinkBtn\">\n                <ion-icon class=\"checkmark-icon\" name=\"checkmark\"></ion-icon>\n              </ion-button>\n            </ion-segment-button>\n            <ion-segment-button class=\"redSegmentBtn\">\n              <ion-button *ngIf=\"!visiableBtnRed\" (click)=\"changeTheme('red')\" class=\"redBtn\"></ion-button>\n              <ion-button *ngIf=\"visiableBtnRed\" (click)=\"changeTheme('red')\" class=\"redBtn\">\n                <ion-icon class=\"checkmark-icon\" name=\"checkmark\"></ion-icon>\n              </ion-button>\n            </ion-segment-button>\n            <ion-segment-button class=\"purpleSegmentBtn\">\n              <ion-button *ngIf=\"!visiableBtnPurple\" (click)=\"changeTheme('purple')\" class=\"purpleBtn\"></ion-button>\n              <ion-button *ngIf=\"visiableBtnPurple\" (click)=\"changeTheme('purple')\" class=\"purpleBtn\">\n                <ion-icon class=\"checkmark-icon\" name=\"checkmark\"></ion-icon>\n              </ion-button>\n            </ion-segment-button>\n            <ion-segment-button class=\"lightBlueSegmentBtn\">\n              <ion-button *ngIf=\"!visiableBtnLightblue\" (click)=\"changeTheme('Lightblue')\" class=\"lightBlueBtn\"></ion-button>\n              <ion-button *ngIf=\"visiableBtnLightblue\" (click)=\"changeTheme('Lightblue')\" class=\"lightBlueBtn\">\n                <ion-icon class=\"checkmark-icon\" name=\"checkmark\"></ion-icon>\n              </ion-button>\n            </ion-segment-button>\n            <ion-segment-button class=\"lightGreenSegmentBtn\">\n              <ion-button *ngIf=\"!visiableBtnLightgreen\" (click)=\"changeTheme('Lightgreen')\" class=\"lightGreenBtn\"></ion-button>\n              <ion-button *ngIf=\"visiableBtnLightgreen\" (click)=\"changeTheme('Lightgreen')\" class=\"lightGreenBtn\">\n                <ion-icon class=\"checkmark-icon\" name=\"checkmark\"></ion-icon>\n              </ion-button>\n            </ion-segment-button>\n            <ion-segment-button class=\"lightGray1SegmentBtn\">\n              <ion-button *ngIf=\"!visiableBtnLightgray\" (click)=\"changeTheme('Lightgray')\" class=\"lightGray1\"></ion-button>\n              <ion-button *ngIf=\"visiableBtnLightgray\" (click)=\"changeTheme('Lightgray')\" class=\"lightGray1\">\n                <ion-icon class=\"checkmark-icon\" name=\"checkmark\"></ion-icon>\n              </ion-button>\n            </ion-segment-button>\n            <ion-segment-button class=\"blueSegmentBtn\">\n              <ion-button *ngIf=\"!visiableBtnBlue\" (click)=\"changeTheme('blue')\" class=\"blueBtn\"></ion-button>\n              <ion-button *ngIf=\"visiableBtnBlue\" (click)=\"changeTheme('blue')\" class=\"blueBtn\">\n                <ion-icon class=\"checkmark-icon\" name=\"checkmark\"></ion-icon>\n              </ion-button>\n            </ion-segment-button>\n          </ion-segment>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <!--search box -->\n    <ion-row no-padding>\n      <ion-col no-padding>\n        <ion-item style='--background:var(--my-var)' class=\"itemSlider\">\n            <ion-searchbar (ionInput)=\"getItems($event)\" placeholder=\"Search Article Category\" animated></ion-searchbar>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row padding>\n        <ion-col no-padding size=\"12\">\n            <ion-header translucent>\n                <ion-toolbar>\n                  <ion-title>Article Directory</ion-title>\n                </ion-toolbar>\n              </ion-header>\n            <ion-list *ngIf=\"items\">\n                <div *ngFor=\"let item of items\">\n                    <ion-item *ngIf=\"item.no_of_articles != '0'; else noArticleBlock\" routerLink=\"/index/{{item.id}}\" routerDirection=\"root\">\n                    \n                            <ion-text style=\"font-weight: 700;\">\n                                {{ item.category }}\n                            </ion-text>\n                            <ion-badge slot=\"end\">{{item.no_of_articles}}</ion-badge>\n                    \n                    </ion-item>\n                    <ng-template #noArticleBlock>\n                    <ion-item (click)=\"hasArticle()\">\n                        <ion-text style=\"font-weight: 700;\">\n                            {{ item.category }}\n                        </ion-text>\n                        <ion-badge slot=\"end\">{{item.no_of_articles}}</ion-badge>\n                    </ion-item>\n                    </ng-template>  \n                </div>\n            </ion-list>\n            <ion-list *ngIf=\"items.length == 0\">\n    <ion-item>\n      <span slot=\"end\" class=\"dot\"><ion-skeleton-text animated></ion-skeleton-text></span>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <span slot=\"end\" class=\"dot\"><ion-skeleton-text animated></ion-skeleton-text></span>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <span slot=\"end\" class=\"dot\"><ion-skeleton-text animated></ion-skeleton-text></span>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <span slot=\"end\" class=\"dot\"><ion-skeleton-text animated></ion-skeleton-text></span>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <span slot=\"end\" class=\"dot\"><ion-skeleton-text animated></ion-skeleton-text></span>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <span slot=\"end\" class=\"dot\"><ion-skeleton-text animated></ion-skeleton-text></span>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:#eee; }\n\n.item {\n  --inner-padding-end:0; }\n\n.materialAppPara {\n  font-size: 17px;\n  color: white; }\n\n.materialAppThemeCol {\n  --padding-left:0px;\n  --padding-right:0px; }\n\n.materialAppRow {\n  --padding-start:0px;\n  --padding-end:0px;\n  --padding-top:0px;\n  --padding-right:0px; }\n\n.lightPurpleSegmentBtn {\n  --indicator-color-checked: #03A9F4; }\n\n.darkBlueSegmentBtn {\n  --indicator-color-checked: #673AB7; }\n\n.darkPinkBtn {\n  --background: #4CAF50; }\n\n.lightOrangeBtn {\n  --background: #F44336; }\n\n.lightGreenBtn {\n  --background: #00BCD4; }\n\n.redBtn {\n  --background: #9E9E9E; }\n\n.purpleBtn {\n  --background: #E91E63; }\n\n.lightBlueBtn {\n  --background: #3F51B5; }\n\n.lightGray1 {\n  --background: #8BC34A; }\n\n.blueBtn {\n  --background: #008577; }\n\n.darkBlueBtn {\n  --background: #673AB7; }\n\n.lightPurpleBtn {\n  --background: #03A9F4; }\n\n.lightOrangeBtn, .lightGrayBtn, .darkPinkBtn, .lightPurpleBtn, .lightGreenBtn, .lightBlueBtn, .lightGray1, .redBtn, .purpleBtn, .darkBlueBtn, .blueBtn {\n  --border-radius: 200px;\n  height: 40px;\n  width: 40px; }\n\n.lightGraySegmentBtn {\n  --indicator-color-checked: #f4f4f4; }\n\n.segmentTextBtn,\n.lightOrangeSegmentBtn,\n.darkPinkSegmentBtn,\n.darkPinkSegmentBtn,\n.whiteSegmentBtn,\n.redSegmentBtn {\n  min-height: 65px; }\n\n.lightOrangeSegmentBtn {\n  --indicator-color-checked: #F44336; }\n\n.darkPinkSegmentBtn {\n  --indicator-color-checked: #4CAF50; }\n\n.redSegmentBtn {\n  --indicator-color-checked: #9E9E9E; }\n\n.purpleSegmentBtn {\n  --indicator-color-checked: #E91E63; }\n\n.lightBlueSegmentBtn {\n  --indicator-color-checked: #3F51B5; }\n\n.lightGreenSegmentBtn {\n  --indicator-color-checked: #00BCD4; }\n\n.lightGray1SegmentBtn {\n  --indicator-color-checked: #8BC34A; }\n\n.blueSegmentBtn {\n  --indicator-color-checked: #008577; }\n\n/*slider design(banner)*/\n\n.img {\n  border-radius: 10px;\n  width: 100%; }\n\nion-slides.slides {\n  border-radius: 10px;\n  margin-top: -65px;\n  --bullet-background: black !important; }\n\n.segmentTextBtn {\n  color: white; }\n\n.forward-icon {\n  zoom: 1.5;\n  margin-left: 19px;\n  position: absolute;\n  margin-top: -1px; }\n\n/*swipe slider*/\n\n/*swipe segment design*/\n\n.segment {\n  --inner-padding-end:0;\n  --inner-border-width:0;\n  margin-top: -1px; }\n\n.itemSlider {\n  --inner-border-width:0;\n  --min-height: 15px;\n  --inner-padding-end:15px;\n  margin-top: -1px; }\n\nion-icon.checkmark {\n  margin-left: auto;\n  margin-right: auto;\n  color: #ccc; }\n\n.rowtag {\n  margin-top: 30px; }\n\n/*tag card design*/\n\n.contentClass {\n  --background: #eee; }\n\n.card {\n  border-radius: 10px;\n  margin: 15px 0 0 0; }\n\n.imgBgTag {\n  width: 100%; }\n\n.card-title {\n  position: absolute;\n  top: 50px;\n  font-size: 2.0em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n  text-align: center; }\n\n.tagRow {\n  margin-top: -100px; }\n\n.rowComp {\n  margin-top: -25px; }\n\n.tagCard {\n  background: white;\n  border-radius: 8px;\n  text-align: center;\n  padding: 15px;\n  margin: 0; }\n\n.paraTagCard {\n  font-size: 13px;\n  margin-bottom: 0%;\n  margin-top: 0%;\n  text-align: center;\n  font-weight: bold; }\n\n.col2Tag {\n  margin-left: -10%;\n  z-index: 10;\n  margin-top: 25px; }\n\n.col3Tag {\n  margin-left: -10%; }\n\n.nextBtn, .prevBtn {\n  width: 30px;\n  height: 40px;\n  background-color: gray;\n  font-size: 15px;\n  border-radius: 0;\n  top: 39%;\n  background-size: 14px 44px; }\n\n.nextBtn {\n  right: 13px; }\n\n.prevBtn {\n  left: -2px; }\n\n.themeBg {\n  height: 100%;\n  width: 100%;\n  top: 0;\n  position: absolute;\n  opacity: 0.55; }\n\n.themeBgDisable {\n  height: 100%;\n  width: 100%;\n  top: 0;\n  position: absolute;\n  opacity: 0.7; }\n\n.themeImg, .uiImg {\n  opacity: 0.7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jpc2hpL0Rlc2t0b3Avbmcta25vd215c2VsZi9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBYSxFQUFBOztBQUVmO0VBQ0UscUJBQW9CLEVBQUE7O0FBRXRCO0VBQ0UsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFFZDtFQUNFLGtCQUFlO0VBQ2YsbUJBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsbUJBQWdCO0VBQ2hCLGlCQUFjO0VBQ2QsaUJBQWM7RUFDZCxtQkFBZ0IsRUFBQTs7QUFFbEI7RUFDSSxrQ0FBMEIsRUFBQTs7QUFFOUI7RUFDSSxrQ0FBMEIsRUFBQTs7QUFFOUI7RUFDRSxxQkFBYSxFQUFBOztBQUVmO0VBQ0UscUJBQWEsRUFBQTs7QUFFZjtFQUNFLHFCQUFhLEVBQUE7O0FBR2Y7RUFDRSxxQkFBYSxFQUFBOztBQUVmO0VBQ0UscUJBQWEsRUFBQTs7QUFFZjtFQUNFLHFCQUFhLEVBQUE7O0FBRWY7RUFDRSxxQkFBYSxFQUFBOztBQUVmO0VBQ0UscUJBQWEsRUFBQTs7QUFFZjtFQUNFLHFCQUFhLEVBQUE7O0FBRWY7RUFDRSxxQkFBYSxFQUFBOztBQUVmO0VBQ0Usc0JBQWdCO0VBQ2QsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGtDQUEwQixFQUFBOztBQUU5Qjs7Ozs7O0VBTUUsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0ksa0NBQTBCLEVBQUE7O0FBRTlCO0VBQ0ksa0NBQTBCLEVBQUE7O0FBRTlCO0VBQ0Usa0NBQTBCLEVBQUE7O0FBRTVCO0VBQ0Usa0NBQTBCLEVBQUE7O0FBRTVCO0VBQ0Usa0NBQTBCLEVBQUE7O0FBRTVCO0VBQ0Usa0NBQTBCLEVBQUE7O0FBRTVCO0VBQ0Usa0NBQTBCLEVBQUE7O0FBRTVCO0VBQ0Usa0NBQTBCLEVBQUE7O0FBRTVCLHdCQUFBOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTs7QUFFYjtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIscUNBQW9CLEVBQUE7O0FBRXRCO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQ0YsRUFBQTs7QUFDQSxlQUFBOztBQUNBLHVCQUFBOztBQUNBO0VBQ0UscUJBQW9CO0VBQ3BCLHNCQUFxQjtFQUNyQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxzQkFBcUI7RUFDckIsa0JBQWE7RUFDYix3QkFBb0I7RUFDcEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBRWI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEIsa0JBQUE7O0FBQ0E7RUFDRSxrQkFBYSxFQUFBOztBQUVmO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGtCQUFrQjtFQUNoQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUV0QjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixTQUFTLEVBQUE7O0FBRVg7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxXQUFVO0VBQ1YsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUiwwQkFBMEIsRUFBQTs7QUFFNUI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxVQUFVLEVBQUE7O0FBRVo7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLE1BQU07RUFDTixrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUVmO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxNQUFNO0VBQ04sa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFFZDtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiNlZWU7XG59XG4uaXRlbXtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDowO1xufVxuLm1hdGVyaWFsQXBwUGFyYXtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0ZXJpYWxBcHBUaGVtZUNvbHtcbiAgLS1wYWRkaW5nLWxlZnQ6MHB4O1xuICAtLXBhZGRpbmctcmlnaHQ6MHB4O1xufVxuLm1hdGVyaWFsQXBwUm93e1xuICAtLXBhZGRpbmctc3RhcnQ6MHB4O1xuICAtLXBhZGRpbmctZW5kOjBweDtcbiAgLS1wYWRkaW5nLXRvcDowcHg7XG4gIC0tcGFkZGluZy1yaWdodDowcHg7XG59XG4ubGlnaHRQdXJwbGVTZWdtZW50QnRue1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6ICMwM0E5RjQ7XG59XG4uZGFya0JsdWVTZWdtZW50QnRue1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6ICM2NzNBQjc7XG59XG4uZGFya1BpbmtCdG57XG4gIC0tYmFja2dyb3VuZDogIzRDQUY1MDsgICBcbn1cbi5saWdodE9yYW5nZUJ0bntcbiAgLS1iYWNrZ3JvdW5kOiAjRjQ0MzM2OyAgIFxufVxuLmxpZ2h0R3JlZW5CdG57XG4gIC0tYmFja2dyb3VuZDogIzAwQkNENDsgICBcbn1cblxuLnJlZEJ0bntcbiAgLS1iYWNrZ3JvdW5kOiAjOUU5RTlFOyAgIFxufVxuLnB1cnBsZUJ0bntcbiAgLS1iYWNrZ3JvdW5kOiAjRTkxRTYzOyAgIFxufVxuLmxpZ2h0Qmx1ZUJ0bntcbiAgLS1iYWNrZ3JvdW5kOiAjM0Y1MUI1OyAgIFxufVxuLmxpZ2h0R3JheTF7XG4gIC0tYmFja2dyb3VuZDogIzhCQzM0QTsgICBcbn1cbi5ibHVlQnRue1xuICAtLWJhY2tncm91bmQ6ICMwMDg1Nzc7ICAgXG59XG4uZGFya0JsdWVCdG57XG4gIC0tYmFja2dyb3VuZDogIzY3M0FCNzsgICBcbn1cbi5saWdodFB1cnBsZUJ0bntcbiAgLS1iYWNrZ3JvdW5kOiAjMDNBOUY0OyAgIFxufVxuLmxpZ2h0T3JhbmdlQnRuLCAubGlnaHRHcmF5QnRuLCAuZGFya1BpbmtCdG4sIC5saWdodFB1cnBsZUJ0biwgLmxpZ2h0R3JlZW5CdG4sIC5saWdodEJsdWVCdG4sIC5saWdodEdyYXkxLC5yZWRCdG4sIC5wdXJwbGVCdG4sIC5kYXJrQmx1ZUJ0biwgLmJsdWVCdG57XG4gIC0tYm9yZGVyLXJhZGl1czogMjAwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4OyBcbn1cbi5saWdodEdyYXlTZWdtZW50QnRue1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6ICNmNGY0ZjQ7XG59XG4uc2VnbWVudFRleHRCdG4sXG4ubGlnaHRPcmFuZ2VTZWdtZW50QnRuLFxuLmRhcmtQaW5rU2VnbWVudEJ0bixcbi5kYXJrUGlua1NlZ21lbnRCdG4sXG4ud2hpdGVTZWdtZW50QnRuLFxuLnJlZFNlZ21lbnRCdG57XG4gIG1pbi1oZWlnaHQ6IDY1cHg7XG59XG4ubGlnaHRPcmFuZ2VTZWdtZW50QnRue1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6ICNGNDQzMzY7ICAgXG59XG4uZGFya1BpbmtTZWdtZW50QnRue1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6ICM0Q0FGNTA7XG59XG4ucmVkU2VnbWVudEJ0bntcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogIzlFOUU5RTtcbn1cbi5wdXJwbGVTZWdtZW50QnRue1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiAjRTkxRTYzO1xufVxuLmxpZ2h0Qmx1ZVNlZ21lbnRCdG57XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6ICMzRjUxQjU7XG59XG4ubGlnaHRHcmVlblNlZ21lbnRCdG57XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6ICMwMEJDRDQ7XG59XG4ubGlnaHRHcmF5MVNlZ21lbnRCdG57XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6ICM4QkMzNEE7XG59XG4uYmx1ZVNlZ21lbnRCdG57XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6ICMwMDg1Nzc7XG59XG4vKnNsaWRlciBkZXNpZ24oYmFubmVyKSovXG4uaW1ne1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1zbGlkZXMuc2xpZGVze1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAtNjVweDtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogYmxhY2sgIWltcG9ydGFudDtcbn1cbi5zZWdtZW50VGV4dEJ0bntcbiAgY29sb3I6IHdoaXRlO1xufVxuLmZvcndhcmQtaWNvbntcbiAgem9vbTogMS41O1xuICBtYXJnaW4tbGVmdDogMTlweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtMXB4XG59XG4vKnN3aXBlIHNsaWRlciovXG4vKnN3aXBlIHNlZ21lbnQgZGVzaWduKi9cbi5zZWdtZW50e1xuICAtLWlubmVyLXBhZGRpbmctZW5kOjA7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOjA7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG59XG4uaXRlbVNsaWRlcntcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6MDtcbiAgLS1taW4taGVpZ2h0OiAxNXB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOjE1cHg7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG59XG5cbmlvbi1pY29uLmNoZWNrbWFya3tcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgY29sb3I6ICNjY2M7XG59XG4ucm93dGFne1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLyp0YWcgY2FyZCBkZXNpZ24qL1xuLmNvbnRlbnRDbGFzc3tcbiAgLS1iYWNrZ3JvdW5kOiAjZWVlO1xufVxuLmNhcmR7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMTVweCAwIDAgMDtcbn1cbi5pbWdCZ1RhZ3tcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2FyZC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwcHg7XG4gICAgZm9udC1zaXplOiAyLjBlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGFnUm93e1xuICBtYXJnaW4tdG9wOiAtMTAwcHg7XG59XG4ucm93Q29tcHtcbiAgbWFyZ2luLXRvcDogLTI1cHg7XG59XG4udGFnQ2FyZHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMDtcbn1cbi5wYXJhVGFnQ2FyZHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tYm90dG9tOiAwJTtcbiAgbWFyZ2luLXRvcDogMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29sMlRhZ3tcbiAgbWFyZ2luLWxlZnQ6IC0xMCU7XG4gIHotaW5kZXg6IDEwO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLmNvbDNUYWd7XG4gIG1hcmdpbi1sZWZ0OiAtMTAlO1xufVxuLm5leHRCdG4sIC5wcmV2QnRue1xuICB3aWR0aDozMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgdG9wOiAzOSU7XG4gIGJhY2tncm91bmQtc2l6ZTogMTRweCA0NHB4O1xufVxuLm5leHRCdG57XG4gIHJpZ2h0OiAxM3B4O1xufVxuLnByZXZCdG57XG4gIGxlZnQ6IC0ycHg7XG59XG4udGhlbWVCZ3tcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDAuNTU7XG59XG4udGhlbWVCZ0Rpc2FibGV7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwLjc7XG59XG4udGhlbWVJbWcsIC51aUltZ3tcbiAgb3BhY2l0eTogMC43O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/theme.service */ "./src/app/services/theme.service.ts");
/* harmony import */ var _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/custom-theme.service */ "./src/app/services/custom-theme.service.ts");
/* harmony import */ var _article_article_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../article/article.service */ "./src/app/article/article.service.ts");
/* harmony import */ var _services_admobfree_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/admobfree.service */ "./src/app/services/admobfree.service.ts");






 //toast controller package


var themes = {
    //red color o.k
    autumn: {
        primary: '#F44336',
        secondary: '#F44336',
        tertiary: 'white',
        light: '#F44336',
        dark: 'black',
        medium: '#F44336',
    },
    //purple color o.k
    night: {
        primary: '#673AB7',
        secondary: '#673AB7',
        tertiary: '#673AB7',
        medium: '#673AB7',
        dark: 'black',
        light: '#673AB7'
    },
    //blue color o.k
    neon: {
        primary: '#03A9F4',
        secondary: '#03A9F4',
        tertiary: '#03A9F4',
        light: '#03A9F4',
        dark: 'black',
        medium: '#03A9F4',
    },
    //green color o.k
    orginal: {
        primary: '#4CAF50',
        secondary: '#4CAF50',
        tertiary: '#4CAF50',
        light: '#4CAF50',
        medium: '#4CAF50',
        dark: 'black'
    },
    //gray color o.k
    red: {
        primary: '#9E9E9E',
        secondary: '#9E9E9E',
        tertiary: '#9E9E9E',
        light: '#9E9E9E',
        medium: '#9E9E9E',
        dark: 'black',
        warning: '#9E9E9E',
    },
    //sharp pink color o.k
    purple: {
        primary: '#E91E63',
        secondary: '#E91E63',
        tertiary: '#E91E63',
        light: '#E91E63',
        medium: '#E91E63',
        dark: 'black',
        warning: '#E91E63',
    },
    //dark blue color o.k
    Lightblue: {
        primary: '#3F51B5',
        secondary: '#3F51B5',
        tertiary: '#3F51B5',
        light: '#3F51B5',
        medium: '#3F51B5',
        dark: 'black',
        warning: '#3F51B5',
    },
    //light blue color o.k
    Lightgreen: {
        primary: '#00BCD4',
        secondary: '#00BCD4',
        tertiary: '#00BCD4',
        light: '#00BCD4',
        medium: '#00BCD4',
        dark: 'black',
        warning: '#00BCD4',
    },
    //light green color o.k
    Lightgray: {
        primary: '#8BC34A',
        secondary: '#8BC34A',
        tertiary: '#8BC34A',
        light: '#8BC34A',
        medium: '#8BC34A',
        dark: 'black',
        warning: '#8BC34A',
    },
    //dark green color o.k
    blue: {
        primary: '#008577',
        secondary: '#008577',
        tertiary: '#008577',
        light: '#008577',
        medium: '#008577',
        dark: 'black',
        warning: '#008577',
    }
};
var HomePage = /** @class */ (function () {
    function HomePage(platform, admobFreeService, articleService, service, events, menuCtrl, theme, elementRef, toast) {
        this.platform = platform;
        this.admobFreeService = admobFreeService;
        this.articleService = articleService;
        this.service = service;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.theme = theme;
        this.elementRef = elementRef;
        this.toast = toast;
        this.visiableBtnAutum = false;
        this.visiableBtnNight = false;
        this.visiableBtnNeon = false;
        this.visiableBtnOriginal = false;
        this.visiableBtnRed = false;
        this.visiableBtnPurple = false;
        this.visiableBtnLightblue = false;
        this.visiableBtnLightgreen = false;
        this.visiableBtnLightgray = false;
        this.visiableBtnBlue = false;
        this.visiableBtn = false;
        this.itemColor = "";
        this.items = [];
        this.staticitems = [];
        this.bookmarkCount = 0;
        this.visiableBtnAutum = true;
        this.itemColor = "#F44336";
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
        this.adsInitialize();
    }
    HomePage.prototype.ngOnInit = function () {
        this.initializeItems();
        this.menuCtrl.close();
    };
    HomePage.prototype.adsInitialize = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.admobFreeService.BannerAd();
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.menuCtrl.enable(false, 'Menu2');
        this.menuCtrl.enable(true, 'Menu1');
        this.menuCtrl.swipeEnable(true, 'Menu1');
        // this.menuCtrl.open('Menu1');
        this.theme.getTheme().then(function (result) {
            var val = result;
            if (val == undefined) {
                _this.theme.setTheme(themes['autumn'], 'autumn');
            }
            else {
                _this.changeTheme(val);
            }
        });
    };
    ////////////////////////////////
    HomePage.prototype.changeTheme = function (name) {
        this.theme.setTheme(themes[name], name);
        this.service.setTheme(name);
        this.events.publish('icons', name);
        if (name == 'autumn') {
            this.itemColor = "#F44336"; //red
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
            this.visiableBtnAutum = true;
            this.visiableBtnNight = false;
            this.visiableBtnNeon = false;
            this.visiableBtnOriginal = false;
            this.visiableBtnRed = false;
            this.visiableBtnPurple = false;
            this.visiableBtnLightblue = false;
            this.visiableBtnLightgreen = false;
            this.visiableBtnLightgray = false;
            this.visiableBtnBlue = false;
        }
        else if (name == 'night') {
            this.itemColor = "#673AB7"; //purple
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
            this.visiableBtnAutum = false;
            this.visiableBtnNight = true;
            this.visiableBtnNeon = false;
            this.visiableBtnOriginal = false;
            this.visiableBtnRed = false;
            this.visiableBtnPurple = false;
            this.visiableBtnLightblue = false;
            this.visiableBtnLightgreen = false;
            this.visiableBtnLightgray = false;
            this.visiableBtnBlue = false;
        }
        else if (name == 'neon') {
            this.itemColor = "#03A9F4"; //blue
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
            this.visiableBtnAutum = false;
            this.visiableBtnNight = false;
            this.visiableBtnNeon = true;
            this.visiableBtnOriginal = false;
            this.visiableBtnRed = false;
            this.visiableBtnPurple = false;
            this.visiableBtnLightblue = false;
            this.visiableBtnLightgreen = false;
            this.visiableBtnLightgray = false;
            this.visiableBtnBlue = false;
        }
        else if (name == 'orginal') {
            this.itemColor = "#4CAF50"; //green
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
            this.visiableBtnAutum = false;
            this.visiableBtnNight = false;
            this.visiableBtnNeon = false;
            this.visiableBtnOriginal = true;
            this.visiableBtnRed = false;
            this.visiableBtnPurple = false;
            this.visiableBtnLightblue = false;
            this.visiableBtnLightgreen = false;
            this.visiableBtnLightgray = false;
            this.visiableBtnBlue = false;
        }
        else if (name == 'red') {
            this.itemColor = "#9E9E9E"; //gray
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
            this.visiableBtnAutum = false;
            this.visiableBtnNight = false;
            this.visiableBtnNeon = false;
            this.visiableBtnOriginal = false;
            this.visiableBtnRed = true;
            this.visiableBtnPurple = false;
            this.visiableBtnLightblue = false;
            this.visiableBtnLightgreen = false;
            this.visiableBtnLightgray = false;
            this.visiableBtnBlue = false;
        }
        else if (name == 'purple') {
            this.itemColor = "#E91E63"; //sharp pink
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
            this.visiableBtnAutum = false;
            this.visiableBtnNight = false;
            this.visiableBtnNeon = false;
            this.visiableBtnOriginal = false;
            this.visiableBtnRed = false;
            this.visiableBtnPurple = true;
            this.visiableBtnLightblue = false;
            this.visiableBtnLightgreen = false;
            this.visiableBtnLightgray = false;
            this.visiableBtnBlue = false;
        }
        else if (name == 'Lightblue') {
            this.itemColor = "#3F51B5"; //dark blue
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
            this.visiableBtnAutum = false;
            this.visiableBtnNight = false;
            this.visiableBtnNeon = false;
            this.visiableBtnOriginal = false;
            this.visiableBtnRed = false;
            this.visiableBtnPurple = false;
            this.visiableBtnLightblue = true;
            this.visiableBtnLightgreen = false;
            this.visiableBtnLightgray = false;
            this.visiableBtnBlue = false;
        }
        else if (name == 'Lightgreen') {
            this.itemColor = "#00BCD4"; //light blue
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
            this.visiableBtnAutum = false;
            this.visiableBtnNight = false;
            this.visiableBtnNeon = false;
            this.visiableBtnOriginal = false;
            this.visiableBtnRed = false;
            this.visiableBtnPurple = false;
            this.visiableBtnLightblue = false;
            this.visiableBtnLightgreen = true;
            this.visiableBtnLightgray = false;
            this.visiableBtnBlue = false;
        }
        else if (name == 'Lightgray') {
            this.itemColor = "#8BC34A"; //light green
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
            this.visiableBtnAutum = false;
            this.visiableBtnNight = false;
            this.visiableBtnNeon = false;
            this.visiableBtnOriginal = false;
            this.visiableBtnRed = false;
            this.visiableBtnPurple = false;
            this.visiableBtnLightblue = false;
            this.visiableBtnLightgreen = false;
            this.visiableBtnLightgray = true;
            this.visiableBtnBlue = false;
        }
        else if (name == 'blue') {
            this.itemColor = "#008577"; //dark green
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
            this.visiableBtnAutum = false;
            this.visiableBtnNight = false;
            this.visiableBtnNeon = false;
            this.visiableBtnOriginal = false;
            this.visiableBtnRed = false;
            this.visiableBtnPurple = false;
            this.visiableBtnLightblue = false;
            this.visiableBtnLightgreen = false;
            this.visiableBtnLightgray = false;
            this.visiableBtnBlue = true;
        }
    };
    //function for searching item
    HomePage.prototype.initializeItems = function () {
        var _this = this;
        this.articleService.getCategory().subscribe(function (res) {
            _this.items = res;
            _this.staticitems = res;
        });
        this.items = this.staticitems;
    };
    HomePage.prototype.resetItems = function () {
        this.items = this.staticitems;
    };
    HomePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.resetItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.category.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    HomePage.prototype.hasArticle = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            cssClass: 'toastTag',
                            color: "danger",
                            showCloseButton: true,
                            position: 'bottom',
                            message: "Article will be available soon! Stay Tuned",
                            closeButtonText: '| Ok',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _services_admobfree_service__WEBPACK_IMPORTED_MODULE_6__["AdmobFreeService"],
            _article_article_service__WEBPACK_IMPORTED_MODULE_5__["ArticleService"],
            _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_4__["CustomThemeService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _services_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/services/custom-theme.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/custom-theme.service.ts ***!
  \**************************************************/
/*! exports provided: CustomThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomThemeService", function() { return CustomThemeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomThemeService = /** @class */ (function () {
    function CustomThemeService() {
    }
    CustomThemeService.prototype.setTheme = function (c) {
        this.color = c;
    };
    CustomThemeService.prototype.getTheme = function () {
        return this.color;
    };
    CustomThemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomThemeService);
    return CustomThemeService;
}());



/***/ }),

/***/ "./src/app/services/theme.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/theme.service.ts ***!
  \*******************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var ThemeService = /** @class */ (function () {
    function ThemeService(document, storage) {
        this.document = document;
        this.storage = storage;
    }
    ThemeService.prototype.getThemeA = function (theme) {
    };
    ThemeService.prototype.getTheme = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get('theme').then(function (cssText) {
                if (cssText) {
                    _this.setGlobalCSS(cssText);
                    _this.storage.get('name').then(function (name) {
                        resolve(name);
                    });
                }
                else {
                    resolve(undefined);
                }
            });
        });
    };
    // Override all global variables with a new theme
    ThemeService.prototype.setTheme = function (theme, name) {
        this.storage.set('name', name);
        var cssText = CSSTextGenerator(theme);
        this.setGlobalCSS(cssText);
        this.storage.set('theme', cssText);
    };
    // Define a single CSS variable
    ThemeService.prototype.setVariable = function (name, value) {
        this.document.documentElement.style.setProperty(name, value);
    };
    ThemeService.prototype.setGlobalCSS = function (css) {
        this.document.documentElement.style.cssText = css;
    };
    Object.defineProperty(ThemeService.prototype, "storedTheme", {
        get: function () {
            return this.storage.get('theme');
        },
        enumerable: true,
        configurable: true
    });
    ThemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document, _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], ThemeService);
    return ThemeService;
}());

var defaults = {
    primary: '#3880ff',
    secondary: '#0cd1e8',
    tertiary: '#7044ff',
    success: '#10dc60',
    warning: '#ffce00',
    danger: '#f04141',
    dark: '#222428',
    medium: '#989aa2',
    light: '#f4f5f8'
};
function CSSTextGenerator(colors) {
    colors = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, defaults, colors);
    var primary = colors.primary, secondary = colors.secondary, tertiary = colors.tertiary, success = colors.success, warning = colors.warning, danger = colors.danger, dark = colors.dark, medium = colors.medium, light = colors.light;
    var shadeRatio = 0.1;
    var tintRatio = 0.1;
    // --ion-item-text: ${contrast(dark)};
    // --ion-item-background-color: ${light};
    return "\n    --ion-icon-color: " + dark + ";\n    --ion-color-base: " + light + ";\n    --ion-color-contrast: " + dark + ";\n    --ion-text-color: " + dark + ";\n    --ion-button-text: " + dark + ";\n    --ion-toolbar-background: " + contrast(light, 0) + ";\n    --ion-toolbar-text-color: " + dark + ";\n    --ion-background-color: " + light + ";\n    --ion-color-primary: " + primary + ";\n    --ion-title-background: " + dark + ";\n    --ion-card-background:" + dark + ";\n    --ion-color-primary-rgb: 56,128,255;\n    --ion-color-primary-contrast: " + contrast(primary) + ";\n    --ion-color-primary-contrast-rgb: 255,255,255;\n    --ion-color-primary-shade:  " + color__WEBPACK_IMPORTED_MODULE_3__(primary).darken(shadeRatio) + ";\n    --ion-color-primary-tint:  " + color__WEBPACK_IMPORTED_MODULE_3__(primary).lighten(tintRatio) + ";\n    --ion-color-secondary: " + secondary + ";\n    --ion-color-secondary-rgb: 12,209,232;\n    --ion-color-secondary-contrast: " + contrast(secondary) + ";\n    --ion-color-secondary-contrast-rgb: 255,255,255;\n    --ion-color-secondary-shade:  " + color__WEBPACK_IMPORTED_MODULE_3__(secondary).darken(shadeRatio) + ";\n    --ion-color-secondary-tint: " + color__WEBPACK_IMPORTED_MODULE_3__(secondary).lighten(tintRatio) + ";\n    --ion-color-tertiary:  " + tertiary + ";\n    --ion-color-tertiary-rgb: 112,68,255;\n    --ion-color-tertiary-contrast: " + contrast(tertiary) + ";\n    --ion-color-tertiary-contrast-rgb: 255,255,255;\n    --ion-color-tertiary-shade: " + color__WEBPACK_IMPORTED_MODULE_3__(tertiary).darken(shadeRatio) + ";\n    --ion-color-tertiary-tint:  " + color__WEBPACK_IMPORTED_MODULE_3__(tertiary).lighten(tintRatio) + ";\n    --ion-color-success: " + success + ";\n    --ion-color-success-rgb: 16,220,96;\n    --ion-color-success-contrast: " + contrast(success) + ";\n    --ion-color-success-contrast-rgb: 255,255,255;\n    --ion-color-success-shade: " + color__WEBPACK_IMPORTED_MODULE_3__(success).darken(shadeRatio) + ";\n    --ion-color-success-tint: " + color__WEBPACK_IMPORTED_MODULE_3__(success).lighten(tintRatio) + ";\n    --ion-color-warning: " + warning + ";\n    --ion-color-warning-rgb: 255,206,0;\n    --ion-color-warning-contrast: " + contrast(warning) + ";\n    --ion-color-warning-contrast-rgb: 255,255,255;\n    --ion-color-warning-shade: " + color__WEBPACK_IMPORTED_MODULE_3__(warning).darken(shadeRatio) + ";\n    --ion-color-warning-tint: " + color__WEBPACK_IMPORTED_MODULE_3__(warning).lighten(tintRatio) + ";\n    --ion-color-danger: " + danger + ";\n    --ion-color-danger-rgb: 245,61,61;\n    --ion-color-danger-contrast: " + contrast(danger) + ";\n    --ion-color-danger-contrast-rgb: 255,255,255;\n    --ion-color-danger-shade: " + color__WEBPACK_IMPORTED_MODULE_3__(danger).darken(shadeRatio) + ";\n    --ion-color-danger-tint: " + color__WEBPACK_IMPORTED_MODULE_3__(danger).lighten(tintRatio) + ";\n    --ion-color-dark: " + dark + ";\n    --ion-color-dark-rgb: 34,34,34;\n    --ion-color-dark-contrast: " + contrast(dark) + ";\n    --ion-color-dark-contrast-rgb: 255,255,255;\n    --ion-color-dark-shade: " + color__WEBPACK_IMPORTED_MODULE_3__(dark).darken(shadeRatio) + ";\n    --ion-color-dark-tint: " + color__WEBPACK_IMPORTED_MODULE_3__(dark).lighten(tintRatio) + ";\n    --ion-color-medium: " + medium + ";\n    --ion-color-medium-rgb: 152,154,162;\n    --ion-color-medium-contrast: " + contrast(medium) + ";\n    --ion-color-medium-contrast-rgb: 255,255,255;\n    --ion-color-medium-shade: " + color__WEBPACK_IMPORTED_MODULE_3__(medium).darken(shadeRatio) + ";\n    --ion-color-medium-tint: " + color__WEBPACK_IMPORTED_MODULE_3__(medium).lighten(tintRatio) + ";\n    --ion-color-light: " + light + ";\n    --ion-color-light-rgb: 244,244,244;\n    --ion-color-light-contrast: $" + contrast(light) + ";\n    --ion-color-light-contrast-rgb: 0,0,0;\n    --ion-color-light-shade: " + color__WEBPACK_IMPORTED_MODULE_3__(light).darken(shadeRatio) + ";\n    --ion-color-light-tint: " + color__WEBPACK_IMPORTED_MODULE_3__(light).lighten(tintRatio) + ";";
}
function contrast(color, ratio) {
    if (ratio === void 0) { ratio = 0.8; }
    color = color__WEBPACK_IMPORTED_MODULE_3__(color);
    return color.isDark() ? color.lighten(ratio) : color.darken(ratio);
}


/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map