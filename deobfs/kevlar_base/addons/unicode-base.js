module.exports = function (ta) {
  function Pa(La) {
    return La.replace(/[- _]+/g, "").toLowerCase();
  }
  function u(La) {
    var Na = /^\\[xu](.+)/.exec(La);
    if (Na) {
      return wa(Na[1]);
    } else {
      return La.charCodeAt(La.charAt(0) === "\\" ? 1 : 0);
    }
  }
  function Xa(La) {
    var Na = "";
    var Ja = -1;
    ta.forEach(La, /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/, function (Ua) {
      var db = u(Ua[1]);
      if (db > Ja + 1) {
        Na += "\\u" + Ea(ya(Ja + 1));
        if (db > Ja + 2) {
          Na += "-\\u" + Ea(ya(db - 1));
        }
      }
      Ja = u(Ua[2] || Ua[1]);
    });
    if (Ja < 65535) {
      Na += "\\u" + Ea(ya(Ja + 1));
      if (Ja < 65534) {
        Na += "-\\uFFFF";
      }
    }
    return Na;
  }
  var Wa = {};
  var wa = ta._dec;
  var ya = ta._hex;
  var Ea = ta._pad4;
  ta.addToken(/\\([pP])(?:{(\^?)([^}]*)}|([A-Za-z]))/, function (La, Na, Ja) {
    var Ua = La[1] === "P" || !!La[2];
    var db = Ja.indexOf("A") > -1;
    Ja = Pa(La[4] || La[3]);
    var O = Wa[Ja];
    if (La[1] === "P" && La[2]) {
      throw new SyntaxError("Invalid double negation " + La[0]);
    }
    if (!Wa.hasOwnProperty(Ja)) {
      throw new SyntaxError("Unknown Unicode token " + La[0]);
    }
    if (O.inverseOf) {
      Ja = Pa(O.inverseOf);
      if (!Wa.hasOwnProperty(Ja)) {
        throw new ReferenceError("Unicode token missing data " + La[0] + " -> " + O.inverseOf);
      }
      O = Wa[Ja];
      Ua = !Ua;
    }
    if (!O.bmp && !db) {
      throw new SyntaxError("Astral mode required for Unicode token " + La[0]);
    }
    if (db) {
      if (Na === "class") {
        throw new SyntaxError("Astral mode does not support Unicode tokens within character classes");
      }
      La = Ua ? "a!" : "a=";
      if (!(Na = Wa[Ja][La])) {
        Na = Wa[Ja];
        Ja = Wa[Ja];
        db = "";
        if (Ja.bmp && !Ja.isBmpLast) {
          db = "[" + Ja.bmp + "]" + (Ja.astral ? "|" : "");
        }
        if (Ja.astral) {
          db += Ja.astral;
        }
        if (Ja.isBmpLast && Ja.bmp) {
          db += (Ja.astral ? "|" : "") + "[" + Ja.bmp + "]";
        }
        Ua = Ua ? "(?:(?!" + db + ")(?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[\0-￿]))" : "(?:" + db + ")";
        Na = Na[La] = Ua;
      }
      return Na;
    }
    if (Na === "class") {
      if (Ua) {
        return Wa[Ja]["b!"] ||= Xa(Wa[Ja].bmp);
      } else {
        return O.bmp;
      }
    } else {
      return (Ua ? "[^" : "[") + O.bmp + "]";
    }
  }, {
    scope: "all",
    optionalFlags: "A",
    leadChar: "\\"
  });
  ta.addUnicodeData = function (La) {
    var Na;
    for (var Ja = 0; Ja < La.length; ++Ja) {
      Na = La[Ja];
      if (!Na.name) {
        throw Error("Unicode token requires name");
      }
      if (!Na.inverseOf && !Na.bmp && !Na.astral) {
        throw Error("Unicode token has no character data " + Na.name);
      }
      Wa[Pa(Na.name)] = Na;
      if (Na.alias) {
        Wa[Pa(Na.alias)] = Na;
      }
    }
    ta.cache.flush("patterns");
  };
  ta._getUnicodeProperty = function (La) {
    La = Pa(La);
    return Wa[La];
  };
};