function ta(ma) {
  var Ba = true;
  try {
    Ba = !!RegExp("", ma);
  } catch (Ga) {
    Ba = false;
  }
  return Ba;
}
function Pa(ma, Ba, Ga, Ka, Za) {
  var eb;
  ma.xregexp = {
    captureNames: Ba
  };
  if (Za) {
    return ma;
  }
  if (ma.__proto__) {
    ma.__proto__ = ha.prototype;
  } else {
    for (eb in ha.prototype) {
      ma[eb] = ha.prototype[eb];
    }
  }
  ma.xregexp.source = Ga;
  ma.xregexp.flags = Ka ? Ka.split("").sort().join("") : Ka;
  return ma;
}
function u(ma) {
  return sa.replace.call(ma, /([\s\S])(?=[\s\S]*\1)/g, "");
}
function Xa(ma, Ba) {
  if (!ha.isRegExp(ma)) {
    throw new TypeError("Type RegExp expected");
  }
  var Ga = ma.xregexp || {};
  var Ka = aa ? ma.flags : sa.exec.call(/\/([a-z]*)$/i, RegExp.prototype.toString.call(ma))[1];
  var Za = "";
  var eb = "";
  var Ya = null;
  var fb = null;
  Ba = Ba || {};
  if (Ba.removeG) {
    eb += "g";
  }
  if (Ba.removeY) {
    eb += "y";
  }
  if (eb) {
    Ka = sa.replace.call(Ka, new RegExp("[" + eb + "]+", "g"), "");
  }
  if (Ba.addG) {
    Za += "g";
  }
  if (Ba.addY) {
    Za += "y";
  }
  if (Za) {
    Ka = u(Ka + Za);
  }
  if (!Ba.isInternalOnly) {
    if (Ga.source !== undefined) {
      Ya = Ga.source;
    }
    if (Ga.flags != null) {
      fb = Za ? u(Ga.flags + Za) : Ga.flags;
    }
  }
  return Pa(new RegExp(Ba.source || ma.source, Ka), ma.xregexp && ma.xregexp.captureNames ? Ga.captureNames.slice(0) : null, Ya, fb, Ba.isInternalOnly);
}
function Wa(ma) {
  return parseInt(ma, 16);
}
function wa(ma, Ba, Ga) {
  if (!(Ba = ma.input.charAt(ma.index - 1) === "(" || ma.input.charAt(ma.index + ma[0].length) === ")")) {
    Ga = Ga.indexOf("x") > -1 ? ["\\s", "#[^#\\n]*", "\\(\\?#[^)]*\\)"] : ["\\(\\?#[^)]*\\)"];
    Ba = sa.test.call(new RegExp("^(?:" + Ga.join("|") + ")*(?:[?*+]|{\\d+(?:,\\d*)?})"), ma.input.slice(ma.index + ma[0].length));
  }
  if (Ba) {
    return "";
  } else {
    return "(?:)";
  }
}
function ya(ma) {
  return parseInt(ma, 10).toString(16);
}
function Ea(ma, Ba) {
  var Ga = ma.length;
  var Ka;
  for (Ka = 0; Ka < Ga; ++Ka) {
    if (ma[Ka] === Ba) {
      return Ka;
    }
  }
  return -1;
}
function La(ma, Ba) {
  return Aa.call(ma) === "[object " + Ba + "]";
}
function Na(ma) {
  while (ma.length < 4) {
    ma = "0" + ma;
  }
  return ma;
}
function Ja(ma, Ba) {
  var Ga;
  if (u(Ba) !== Ba) {
    throw new SyntaxError("Invalid duplicate regex flag " + Ba);
  }
  ma = sa.replace.call(ma, /^\(\?([\w$]+)\)/, function (Ka, Za) {
    if (sa.test.call(/[gy]/, Za)) {
      throw new SyntaxError("Cannot use flag g or y in mode modifier " + Ka);
    }
    Ba = u(Ba + Za);
    return "";
  });
  for (Ga = 0; Ga < Ba.length; ++Ga) {
    if (!Gb[Ba.charAt(Ga)]) {
      throw new SyntaxError("Unknown regex flag " + Ba.charAt(Ga));
    }
  }
  return {
    pattern: ma,
    flags: Ba
  };
}
function Ua(ma) {
  var Ba = {};
  if (La(ma, "String")) {
    ha.forEach(ma, /[^\s,]+/, function (Ga) {
      Ba[Ga] = true;
    });
    return Ba;
  } else {
    return ma;
  }
}
function db(ma) {
  if (!/^[\w$]$/.test(ma)) {
    throw Error("Flag must be a single character A-Za-z0-9_$");
  }
  Gb[ma] = true;
}
function O(ma) {
  if (ma == null) {
    throw new TypeError("Cannot convert null or undefined to object");
  }
  return ma;
}
function ha(ma, Ba) {
  if (ha.isRegExp(ma)) {
    if (Ba !== undefined) {
      throw new TypeError("Cannot supply flags when copying a RegExp");
    }
    return Xa(ma);
  }
  ma = ma === undefined ? "" : String(ma);
  Ba = Ba === undefined ? "" : String(Ba);
  if (ha.isInstalled("astral") && Ba.indexOf("A") === -1) {
    Ba += "A";
  }
  Tb[ma] ||= {};
  if (!Tb[ma][Ba]) {
    var Ga = {
      hasNamedCapture: false,
      captureNames: []
    };
    var Ka = "default";
    var Za = "";
    var eb = 0;
    var Ya = Ja(ma, Ba);
    var fb = Ya.pattern;
    for (Ya = Ya.flags; eb < fb.length;) {
      do {
        var nb;
        var Ia = fb;
        var Va = Ya;
        var wc = eb;
        var xc = Ka;
        var oa = Ga;
        for (var qa = hc.length, id = Ia.charAt(wc), rc = null; qa--;) {
          var vb = hc[qa];
          if ((!vb.leadChar || vb.leadChar === id) && (vb.scope === xc || vb.scope === "all") && (!vb.flag || Va.indexOf(vb.flag) !== -1) && (nb = ha.exec(Ia, vb.regex, wc, "sticky"))) {
            rc = {
              matchLength: nb[0].length,
              output: vb.handler.call(oa, nb, xc, Va),
              reparse: vb.reparse
            };
            break;
          }
        }
        if ((vb = rc) && vb.reparse) {
          fb = fb.slice(0, eb) + vb.output + fb.slice(eb + vb.matchLength);
        }
      } while (vb && vb.reparse);
      if (vb) {
        Za += vb.output;
        eb += vb.matchLength || 1;
      } else {
        vb = ha.exec(fb, jb[Ka], eb, "sticky")[0];
        Za += vb;
        eb += vb.length;
        if (vb === "[" && Ka === "default") {
          Ka = "class";
        } else if (vb === "]" && Ka === "class") {
          Ka = "default";
        }
      }
    }
    Tb[ma][Ba] = {
      pattern: sa.replace.call(Za, /(?:\(\?:\))+/g, "(?:)"),
      flags: sa.replace.call(Ya, /[^gimuy]+/g, ""),
      captures: Ga.hasNamedCapture ? Ga.captureNames : null
    };
  }
  Ga = Tb[ma][Ba];
  return Pa(new RegExp(Ga.pattern, Ga.flags), Ga.captures, ma, Ba);
}
var K = {
  astral: false,
  natives: false
};
var sa = {
  exec: RegExp.prototype.exec,
  test: RegExp.prototype.test,
  match: String.prototype.match,
  replace: String.prototype.replace,
  split: String.prototype.split
};
var Qa = {};
var Fb = {};
var Tb = {};
var hc = [];
var jb = {
  default: /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
  class: /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/
};
var Ta = /\$(?:{([\w$]+)}|(\d\d?|[\s\S]))/g;
var Z = sa.exec.call(/()??/, "")[1] === undefined;
var aa = /x/.flags !== undefined;
var Aa = {}.toString;
var Ha = ta("u");
var yc = ta("y");
var Gb = {
  g: true,
  i: true,
  m: true,
  u: Ha,
  y: yc
};
ha.prototype = RegExp();
ha.version = "3.2.0";
ha._clipDuplicates = u;
ha._hasNativeFlag = ta;
ha._dec = Wa;
ha._hex = ya;
ha._pad4 = Na;
ha.addToken = function (ma, Ba, Ga) {
  Ga = Ga || {};
  var Ka = Ga.optionalFlags;
  var Za;
  if (Ga.flag) {
    db(Ga.flag);
  }
  if (Ka) {
    Ka = sa.split.call(Ka, "");
    Za = 0;
    for (; Za < Ka.length; ++Za) {
      db(Ka[Za]);
    }
  }
  hc.push({
    regex: Xa(ma, {
      addG: true,
      addY: yc,
      isInternalOnly: true
    }),
    handler: Ba,
    scope: Ga.scope || "default",
    flag: Ga.flag,
    reparse: Ga.reparse,
    leadChar: Ga.leadChar
  });
  ha.cache.flush("patterns");
};
ha.cache = function (ma, Ba) {
  Fb[ma] ||= {};
  return Fb[ma][Ba] ||= ha(ma, Ba);
};
ha.cache.flush = function (ma) {
  if (ma === "patterns") {
    Tb = {};
  } else {
    Fb = {};
  }
};
ha.escape = function (ma) {
  return sa.replace.call(O(ma), /[-\[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};
ha.exec = function (ma, Ba, Ga, Ka) {
  var Za = "g";
  var eb;
  var Ya = false;
  if (eb = yc && (!!Ka || !!Ba.sticky && Ka !== false)) {
    Za += "y";
  } else if (Ka) {
    Ya = true;
    Za += "FakeY";
  }
  Ba.xregexp = Ba.xregexp || {};
  Ka = Ba.xregexp[Za] ||= Xa(Ba, {
    addG: true,
    addY: eb,
    source: Ya ? Ba.source + "|()" : undefined,
    removeY: Ka === false,
    isInternalOnly: true
  });
  Ka.lastIndex = Ga || 0;
  ma = Qa.exec.call(Ka, ma);
  if (Ya && ma && ma.pop() === "") {
    ma = null;
  }
  if (Ba.global) {
    Ba.lastIndex = ma ? Ka.lastIndex : 0;
  }
  return ma;
};
ha.forEach = function (ma, Ba, Ga) {
  for (var Ka = 0, Za = -1; Ka = ha.exec(ma, Ba, Ka);) {
    Ga(Ka, ++Za, ma, Ba);
    Ka = Ka.index + (Ka[0].length || 1);
  }
};
ha.install = function (ma) {
  ma = Ua(ma);
  if (!K.astral && ma.astral) {
    K.astral = true;
  }
  if (!K.natives && ma.natives) {
    RegExp.prototype.exec = Qa.exec;
    RegExp.prototype.test = Qa.test;
    String.prototype.match = Qa.match;
    String.prototype.replace = Qa.replace;
    String.prototype.split = Qa.split;
    K.natives = true;
  }
};
ha.isInstalled = function (ma) {
  return !!K[ma];
};
ha.isRegExp = function (ma) {
  return Aa.call(ma) === "[object RegExp]";
};
ha.match = function (ma, Ba, Ga) {
  var Ka = Ba.global && Ga !== "one" || Ga === "all";
  var Za = (Ka ? "g" : "") + (Ba.sticky ? "y" : "") || "noGY";
  Ba.xregexp = Ba.xregexp || {};
  Za = Ba.xregexp[Za] ||= Xa(Ba, {
    addG: !!Ka,
    removeG: Ga === "one",
    isInternalOnly: true
  });
  ma = sa.match.call(O(ma), Za);
  if (Ba.global) {
    Ba.lastIndex = Ga === "one" && ma ? ma.index + ma[0].length : 0;
  }
  if (Ka) {
    return ma || [];
  } else {
    return ma && ma[0];
  }
};
ha.replace = function (ma, Ba, Ga, Ka) {
  var Za = ha.isRegExp(Ba);
  var eb = Ba.global && Ka !== "one" || Ka === "all";
  var Ya = (eb ? "g" : "") + (Ba.sticky ? "y" : "") || "noGY";
  var fb = Ba;
  if (Za) {
    Ba.xregexp = Ba.xregexp || {};
    fb = Ba.xregexp[Ya] ||= Xa(Ba, {
      addG: !!eb,
      removeG: Ka === "one",
      isInternalOnly: true
    });
  } else if (eb) {
    fb = new RegExp(ha.escape(String(Ba)), "g");
  }
  ma = Qa.replace.call(O(ma), fb, Ga);
  if (Za && Ba.global) {
    Ba.lastIndex = 0;
  }
  return ma;
};
ha.split = function (ma, Ba, Ga) {
  return Qa.split.call(O(ma), Ba, Ga);
};
ha.test = function (ma, Ba, Ga, Ka) {
  return !!ha.exec(ma, Ba, Ga, Ka);
};
ha.union = function (ma, Ba, Ga) {
  function Ka(wc, xc, oa) {
    var qa = Va[eb - Ia];
    if (xc) {
      ++eb;
      if (qa) {
        return "(?<" + qa + ">";
      }
    } else if (oa) {
      return "\\" + (+oa + Ia);
    }
    return wc;
  }
  Ga = Ga || {};
  var Za = Ga.conjunction || "or";
  var eb = 0;
  if (!La(ma, "Array") || !ma.length) {
    throw new TypeError("Must provide a nonempty array of patterns to merge");
  }
  var Ya = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g;
  Ga = [];
  var fb;
  for (var nb = 0; nb < ma.length; ++nb) {
    fb = ma[nb];
    if (ha.isRegExp(fb)) {
      var Ia = eb;
      var Va = fb.xregexp && fb.xregexp.captureNames || [];
      Ga.push(sa.replace.call(ha(fb.source).source, Ya, Ka));
    } else {
      Ga.push(ha.escape(fb));
    }
  }
  ma = Za === "none" ? "" : "|";
  return ha(Ga.join(ma), Ba);
};
Qa.exec = function (ma) {
  var Ba = this.lastIndex;
  var Ga = sa.exec.apply(this, arguments);
  var Ka;
  if (Ga) {
    if (!Z && Ga.length > 1 && Ea(Ga, "") > -1) {
      var Za = Xa(this, {
        removeG: true,
        isInternalOnly: true
      });
      sa.replace.call(String(ma).slice(Ga.index), Za, function () {
        var eb = arguments.length;
        var Ya;
        for (Ya = 1; Ya < eb - 2; ++Ya) {
          if (arguments[Ya] === undefined) {
            Ga[Ya] = undefined;
          }
        }
      });
    }
    if (this.xregexp && this.xregexp.captureNames) {
      for (Ka = 1; Ka < Ga.length; ++Ka) {
        if (Za = this.xregexp.captureNames[Ka - 1]) {
          Ga[Za] = Ga[Ka];
        }
      }
    }
    if (this.global && !Ga[0].length && this.lastIndex > Ga.index) {
      this.lastIndex = Ga.index;
    }
  }
  if (!this.global) {
    this.lastIndex = Ba;
  }
  return Ga;
};
Qa.test = function (ma) {
  return !!Qa.exec.call(this, ma);
};
Qa.match = function (ma) {
  if (!ha.isRegExp(ma)) {
    ma = new RegExp(ma);
  } else if (ma.global) {
    var Ba = sa.match.apply(this, arguments);
    ma.lastIndex = 0;
    return Ba;
  }
  return Qa.exec.call(ma, O(this));
};
Qa.replace = function (ma, Ba) {
  var Ga = ha.isRegExp(ma);
  if (Ga) {
    if (ma.xregexp) {
      var Ka = ma.xregexp.captureNames;
    }
    var Za = ma.lastIndex;
  } else {
    ma += "";
  }
  var eb = La(Ba, "Function") ? sa.replace.call(String(this), ma, function () {
    var Ya = arguments;
    var fb;
    if (Ka) {
      Ya[0] = new String(Ya[0]);
      fb = 0;
      for (; fb < Ka.length; ++fb) {
        if (Ka[fb]) {
          Ya[0][Ka[fb]] = Ya[fb + 1];
        }
      }
    }
    if (Ga && ma.global) {
      ma.lastIndex = Ya[Ya.length - 2] + Ya[0].length;
    }
    return Ba.apply(undefined, Ya);
  }) : sa.replace.call(this == null ? this : String(this), ma, function () {
    var Ya = arguments;
    return sa.replace.call(String(Ba), Ta, function (fb, nb, Ia) {
      if (nb) {
        Ia = +nb;
        if (Ia <= Ya.length - 3) {
          return Ya[Ia] || "";
        }
        Ia = Ka ? Ea(Ka, nb) : -1;
        if (Ia < 0) {
          throw new SyntaxError("Backreference to undefined group " + fb);
        }
        return Ya[Ia + 1] || "";
      }
      if (Ia === "$") {
        return "$";
      }
      if (Ia === "&" || +Ia === 0) {
        return Ya[0];
      }
      if (Ia === "`") {
        return Ya[Ya.length - 1].slice(0, Ya[Ya.length - 2]);
      }
      if (Ia === "'") {
        return Ya[Ya.length - 1].slice(Ya[Ya.length - 2] + Ya[0].length);
      }
      Ia = +Ia;
      if (!isNaN(Ia)) {
        if (Ia > Ya.length - 3) {
          throw new SyntaxError("Backreference to undefined group " + fb);
        }
        return Ya[Ia] || "";
      }
      throw new SyntaxError("Invalid token " + fb);
    });
  });
  if (Ga) {
    ma.lastIndex = ma.global ? 0 : Za;
  }
  return eb;
};
Qa.split = function (ma, Ba) {
  if (!ha.isRegExp(ma)) {
    return sa.split.apply(this, arguments);
  }
  var Ga = String(this);
  var Ka = [];
  var Za = ma.lastIndex;
  var eb = 0;
  var Ya;
  Ba = (Ba === undefined ? -1 : Ba) >>> 0;
  ha.forEach(Ga, ma, function (fb) {
    if (fb.index + fb[0].length > eb) {
      Ka.push(Ga.slice(eb, fb.index));
      if (fb.length > 1 && fb.index < Ga.length) {
        Array.prototype.push.apply(Ka, fb.slice(1));
      }
      Ya = fb[0].length;
      eb = fb.index + Ya;
    }
  });
  if (eb === Ga.length) {
    if (!sa.test.call(ma, "") || Ya) {
      Ka.push("");
    }
  } else {
    Ka.push(Ga.slice(eb));
  }
  ma.lastIndex = Za;
  if (Ka.length > Ba) {
    return Ka.slice(0, Ba);
  } else {
    return Ka;
  }
};
ha.addToken(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/, function (ma, Ba) {
  if (ma[1] === "B" && Ba === "default") {
    return ma[0];
  }
  throw new SyntaxError("Invalid escape " + ma[0]);
}, {
  scope: "all",
  leadChar: "\\"
});
ha.addToken(/\\u{([\dA-Fa-f]+)}/, function (ma, Ba, Ga) {
  Ba = Wa(ma[1]);
  if (Ba > 1114111) {
    throw new SyntaxError("Invalid Unicode code point " + ma[0]);
  }
  if (Ba <= 65535) {
    return "\\u" + Na(ya(Ba));
  }
  if (Ha && Ga.indexOf("u") > -1) {
    return ma[0];
  }
  throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u");
}, {
  scope: "all",
  leadChar: "\\"
});
ha.addToken(/\[(\^?)\]/, function (ma) {
  if (ma[1]) {
    return "[\\s\\S]";
  } else {
    return "\\b\\B";
  }
}, {
  leadChar: "["
});
ha.addToken(/\(\?#[^)]*\)/, wa, {
  leadChar: "("
});
ha.addToken(/\s+|#[^\n]*\n?/, wa, {
  flag: "x"
});
ha.addToken(/\./, function () {
  return "[\\s\\S]";
}, {
  flag: "s",
  leadChar: "."
});
ha.addToken(/\\k<([\w$]+)>/, function (ma) {
  var Ba = isNaN(ma[1]) ? Ea(this.captureNames, ma[1]) + 1 : +ma[1];
  var Ga = ma.index + ma[0].length;
  if (!Ba || Ba > this.captureNames.length) {
    throw new SyntaxError("Backreference to undefined group " + ma[0]);
  }
  return "\\" + Ba + (Ga === ma.input.length || isNaN(ma.input.charAt(Ga)) ? "" : "(?:)");
}, {
  leadChar: "\\"
});
ha.addToken(/\\(\d+)/, function (ma, Ba) {
  if ((Ba !== "default" || !/^[1-9]/.test(ma[1]) || !(+ma[1] <= this.captureNames.length)) && ma[1] !== "0") {
    throw new SyntaxError("Cannot use octal escape or backreference to undefined group " + ma[0]);
  }
  return ma[0];
}, {
  scope: "all",
  leadChar: "\\"
});
ha.addToken(/\(\?P?<([\w$]+)>/, function (ma) {
  if (!isNaN(ma[1])) {
    throw new SyntaxError("Cannot use integer as capture name " + ma[0]);
  }
  if (ma[1] === "length" || ma[1] === "__proto__") {
    throw new SyntaxError("Cannot use reserved word as capture name " + ma[0]);
  }
  if (Ea(this.captureNames, ma[1]) > -1) {
    throw new SyntaxError("Cannot use same name for multiple groups " + ma[0]);
  }
  this.captureNames.push(ma[1]);
  this.hasNamedCapture = true;
  return "(";
}, {
  leadChar: "("
});
ha.addToken(/\((?!\?)/, function (ma, Ba, Ga) {
  if (Ga.indexOf("n") > -1) {
    return "(?:";
  }
  this.captureNames.push(null);
  return "(";
}, {
  optionalFlags: "n",
  leadChar: "("
});
module.exports = ha;