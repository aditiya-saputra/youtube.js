module.exports = function (ta) {
  function Pa(wa) {
    var ya = /^(?:\(\?:\))*\^/;
    var Ea = /\$(?:\(\?:\))*$/;
    if (ya.test(wa) && Ea.test(wa) && Ea.test(wa.replace(/\\[\s\S]/g, ""))) {
      return wa.replace(ya, "").replace(Ea, "");
    } else {
      return wa;
    }
  }
  function u(wa, ya) {
    ya = ya ? "x" : "";
    if (ta.isRegExp(wa)) {
      if (wa.xregexp && wa.xregexp.captureNames) {
        return wa;
      } else {
        return ta(wa.source, ya);
      }
    } else {
      return ta(wa, ya);
    }
  }
  var Xa = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g;
  var Wa = ta.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, Xa], "g", {
    conjunction: "or"
  });
  ta.build = function (wa, ya, Ea) {
    Ea = Ea || "";
    var La = Ea.indexOf("x") > -1;
    var Na = /^\(\?([\w$]+)\)/.exec(wa);
    if (Na) {
      Ea = ta._clipDuplicates(Ea + Na[1]);
    }
    var Ja = {};
    var Ua;
    for (Ua in ya) {
      if (ya.hasOwnProperty(Ua)) {
        Na = u(ya[Ua], La);
        Ja[Ua] = {
          pattern: Pa(Na.source),
          names: Na.xregexp.captureNames || []
        };
      }
    }
    wa = u(wa, La);
    var db = 0;
    var O;
    var ha = 0;
    var K = [0];
    var sa = wa.xregexp.captureNames || [];
    wa = wa.source.replace(Wa, function (Qa, Fb, Tb, hc, jb) {
      var Ta = Fb || Tb;
      if (Ta) {
        if (!Ja.hasOwnProperty(Ta)) {
          throw new ReferenceError("Undefined property " + Qa);
        }
        if (Fb) {
          var Z = sa[ha];
          K[++ha] = ++db;
          Qa = "(?<" + (Z || Ta) + ">";
        } else {
          Qa = "(?:";
        }
        O = db;
        return Qa + Ja[Ta].pattern.replace(Xa, function (Aa, Ha, yc) {
          if (Ha) {
            Z = Ja[Ta].names[db - O];
            ++db;
            if (Z) {
              return "(?<" + Z + ">";
            }
          } else if (yc) {
            aa = +yc - 1;
            if (Ja[Ta].names[aa]) {
              return "\\k<" + Ja[Ta].names[aa] + ">";
            } else {
              return "\\" + (+yc + O);
            }
          }
          return Aa;
        }) + ")";
      }
      if (hc) {
        Z = sa[ha];
        K[++ha] = ++db;
        if (Z) {
          return "(?<" + Z + ">";
        }
      } else if (jb) {
        var aa = +jb - 1;
        if (sa[aa]) {
          return "\\k<" + sa[aa] + ">";
        } else {
          return "\\" + K[+jb];
        }
      }
      return Qa;
    });
    return ta(wa, Ea);
  };
};