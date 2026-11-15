module.exports = function (ta) {
  function Pa(u, Xa, Wa, wa) {
    return {
      name: u,
      value: Xa,
      start: Wa,
      end: wa
    };
  }
  ta.matchRecursive = function (u, Xa, Wa, wa, ya) {
    wa = wa || "";
    ya = ya || {};
    var Ea = wa.indexOf("g") > -1;
    var La = wa.indexOf("y") > -1;
    var Na = wa.replace(/y/g, "");
    var Ja = ya.escapeChar;
    ya = ya.valueNames;
    var Ua = [];
    var db = 0;
    var O = 0;
    var ha = 0;
    var K = 0;
    Xa = ta(Xa, Na);
    Wa = ta(Wa, Na);
    if (Ja) {
      if (Ja.length > 1) {
        throw Error("Cannot use more than one escape character");
      }
      Ja = ta.escape(Ja);
      var sa = new RegExp("(?:" + Ja + "[\\S\\s]|(?:(?!" + ta.union([Xa, Wa], "", {
        conjunction: "or"
      }).source + ")[^" + Ja + "])+)+", wa.replace(/[^imu]+/g, ""));
    }
    while (true) {
      if (Ja) {
        ha += (ta.exec(u, sa, ha, "sticky") || [""])[0].length;
      }
      wa = ta.exec(u, Xa, ha);
      Na = ta.exec(u, Wa, ha);
      if (wa && Na) {
        if (wa.index <= Na.index) {
          Na = null;
        } else {
          wa = null;
        }
      }
      if (wa || Na) {
        O = (wa || Na).index;
        ha = O + (wa || Na)[0].length;
      } else if (!db) {
        break;
      }
      if (La && !db && O > K) {
        break;
      }
      if (wa) {
        if (!db) {
          var Qa = O;
          var Fb = ha;
        }
        ++db;
      } else if (Na && db) {
        if (! --db && (ya ? (ya[0] && Qa > K && Ua.push(Pa(ya[0], u.slice(K, Qa), K, Qa)), ya[1] && Ua.push(Pa(ya[1], u.slice(Qa, Fb), Qa, Fb)), ya[2] && Ua.push(Pa(ya[2], u.slice(Fb, O), Fb, O)), ya[3] && Ua.push(Pa(ya[3], u.slice(O, ha), O, ha))) : Ua.push(u.slice(Fb, O)), K = ha, !Ea)) {
          break;
        }
      } else {
        throw Error("Unbalanced delimiter found in string");
      }
      if (O === ha) {
        ++ha;
      }
    }
    if (Ea && !La && ya && ya[0] && u.length > K) {
      Ua.push(Pa(ya[0], u.slice(K), K, u.length));
    }
    return Ua;
  };
};