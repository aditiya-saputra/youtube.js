(function () {
  /*
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  */
  var k;
  function aa(a) {
    var b = 0;
    return function () {
      if (b < a.length) {
        return {
          done: false,
          value: a[b++]
        };
      } else {
        return {
          done: true
        };
      }
    };
  }
  function p(a) {
    var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
    if (b) {
      return b.call(a);
    }
    if (typeof a.length == "number") {
      return {
        next: aa(a)
      };
    }
    throw Error(String(a) + " is not an iterable or ArrayLike");
  }
  function ba(a, b) {
    var c;
    if (b && !b.done && (c = a.return)) {
      c.call(a);
    }
  }
  function q(a) {
    if (!(a instanceof Array)) {
      a = p(a);
      for (var b, c = []; !(b = a.next()).done;) {
        c.push(b.value);
      }
      a = c;
    }
    return a;
  }
  function ca(a) {
    a = [typeof globalThis == "object" && globalThis, a, typeof window == "object" && window, typeof self == "object" && self, typeof global == "object" && global];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) {
        return c;
      }
    }
    throw Error("Cannot find global object");
  }
  var da = ca(this);
  function r() {
    var a = Number(this);
    var b = [];
    for (var c = a; c < arguments.length; c++) {
      b[c - a] = arguments[c];
    }
    return b;
  }
  ; /*
    Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
  function ea() {}
  ea.prototype.toJSON = function () {
    return {};
  };
  function u(a) {
    a.__shady ||= new ea();
    return a.__shady;
  }
  function v(a) {
    return a && a.__shady;
  }
  ;
  var w = window.ShadyDOM || {};
  w.Sb = !!Element.prototype.attachShadow && !!Node.prototype.getRootNode;
  var fa = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
  w.l = !!fa && !!fa.configurable && !!fa.get;
  w.inUse = w.force || !w.Sb;
  w.noPatch = w.noPatch || false;
  w.T = w.preferPerformance;
  w.ra = w.noPatch === "on-demand";
  var ha;
  var ja = w.querySelectorImplementation;
  ha = ["native", "selectorEngine"].indexOf(ja) > -1 ? ja : undefined;
  w.querySelectorImplementation = ha;
  var ka = navigator.userAgent.match("Trident");
  w.Ra = ka;
  function la() {
    if (Document.prototype.msElementsFromPoint) {
      return "msElementsFromPoint";
    } else {
      return "elementsFromPoint";
    }
  }
  function x(a) {
    return (a = v(a)) && a.firstChild !== undefined;
  }
  function y(a) {
    return a instanceof ShadowRoot;
  }
  function ma(a) {
    return (a = (a = v(a)) && a.root) && a.ya();
  }
  var z = Element.prototype;
  var na = z.matches || z.matchesSelector || z.mozMatchesSelector || z.msMatchesSelector || z.oMatchesSelector || z.webkitMatchesSelector;
  var oa = document.createTextNode("");
  var pa = 0;
  var qa = [];
  new MutationObserver(function () {
    while (qa.length) {
      try {
        qa.shift()();
      } catch (a) {
        oa.textContent = pa++;
        throw a;
      }
    }
  }).observe(oa, {
    characterData: true
  });
  function ra(a) {
    qa.push(a);
    oa.textContent = pa++;
  }
  var sa = document.contains ? function (a, b) {
    return a.__shady_native_contains(b);
  } : function (a, b) {
    return a === b || a.documentElement && a.documentElement.__shady_native_contains(b);
  };
  function ta(a, b) {
    while (b) {
      if (b == a) {
        return true;
      }
      b = b.__shady_parentNode;
    }
    return false;
  }
  function ua(a) {
    for (var b = a.length - 1; b >= 0; b--) {
      var c = a[b];
      var d = c.getAttribute("id") || c.getAttribute("name");
      if (d && d !== "length" && isNaN(d)) {
        a[d] = c;
      }
    }
    a.item = function (e) {
      return a[e];
    };
    a.namedItem = function (e) {
      if (e !== "length" && isNaN(e) && a[e]) {
        return a[e];
      }
      var f = p(a);
      var g = f.next();
      try {
        for (; !g.done; g = f.next()) {
          var h = g.value;
          if ((h.getAttribute("id") || h.getAttribute("name")) == e) {
            return h;
          }
        }
      } finally {
        ba(f, g);
      }
      return null;
    };
    return a;
  }
  function va(a) {
    var b = [];
    for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) {
      b.push(a);
    }
    return b;
  }
  function wa(a) {
    var b = [];
    for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
      b.push(a);
    }
    return b;
  }
  function xa(a, b, c) {
    c.configurable = true;
    if (c.value) {
      a[b] = c.value;
    } else {
      try {
        Object.defineProperty(a, b, c);
      } catch (d) {}
    }
  }
  function B(a, b, c, d) {
    c = c === undefined ? "" : c;
    for (var e in b) {
      if (!d || !(d.indexOf(e) >= 0)) {
        xa(a, c + e, b[e]);
      }
    }
  }
  function ya(a, b) {
    for (var c in b) {
      if (c in a) {
        xa(a, c, b[c]);
      }
    }
  }
  function C(a) {
    var b = {};
    Object.getOwnPropertyNames(a).forEach(function (c) {
      b[c] = Object.getOwnPropertyDescriptor(a, c);
    });
    return b;
  }
  function za(a, b) {
    for (var c = Object.getOwnPropertyNames(b), d = 0, e; d < c.length; d++) {
      e = c[d];
      a[e] = b[e];
    }
  }
  function Aa(a) {
    if (a instanceof Node) {
      return a;
    } else {
      return document.createTextNode("" + a);
    }
  }
  function D() {
    var a = r.apply(0, arguments);
    if (a.length === 1) {
      return Aa(a[0]);
    }
    var b = document.createDocumentFragment();
    a = p(a);
    var c = a.next();
    try {
      for (; !c.done; c = a.next()) {
        b.appendChild(Aa(c.value));
      }
    } finally {
      ba(a, c);
    }
    return b;
  }
  function Ba(a) {
    var b;
    for (b = b === undefined ? 1 : b; b > 0; b--) {
      a = a.reduce(function (c, d) {
        if (Array.isArray(d)) {
          c.push.apply(c, q(d));
        } else {
          c.push(d);
        }
        return c;
      }, []);
    }
    return a;
  }
  function Ca(a) {
    var b = [];
    var c = new Set();
    a = p(a);
    var d = a.next();
    try {
      for (; !d.done; d = a.next()) {
        var e = d.value;
        if (!c.has(e)) {
          b.push(e);
          c.add(e);
        }
      }
    } finally {
      ba(a, d);
    }
    return b;
  }
  ;
  var Da = [];
  var Ea;
  function Fa(a) {
    if (!Ea) {
      Ea = true;
      ra(Ga);
    }
    Da.push(a);
  }
  function Ga() {
    Ea = false;
    var a = !!Da.length;
    for (; Da.length;) {
      Da.shift()();
    }
    return a;
  }
  Ga.list = Da;
  function Ha() {
    this.Z = false;
    this.addedNodes = [];
    this.removedNodes = [];
    this.da = new Set();
  }
  function Ia(a) {
    if (!a.Z) {
      a.Z = true;
      ra(function () {
        a.flush();
      });
    }
  }
  Ha.prototype.flush = function () {
    if (this.Z) {
      this.Z = false;
      var a = this.takeRecords();
      if (a.length) {
        this.da.forEach(function (b) {
          b(a);
        });
      }
    }
  };
  Ha.prototype.takeRecords = function () {
    if (this.addedNodes.length || this.removedNodes.length) {
      var a = [{
        addedNodes: this.addedNodes,
        removedNodes: this.removedNodes
      }];
      this.addedNodes = [];
      this.removedNodes = [];
      return a;
    }
    return [];
  };
  function Ja(a, b) {
    var c = u(a);
    c.S ||= new Ha();
    c.S.da.add(b);
    var d = c.S;
    return {
      Ya: b,
      wb: d,
      ub: a,
      takeRecords: function () {
        return d.takeRecords();
      }
    };
  }
  function Ka(a) {
    var b = a && a.wb;
    if (b) {
      b.da.delete(a.Ya);
      if (!b.da.size) {
        u(a.ub).S = null;
      }
    }
  }
  function La(a, b) {
    var c = b.getRootNode();
    return a.map(function (d) {
      var e = c === d.target.getRootNode();
      if (e && d.addedNodes) {
        e = [].slice.call(d.addedNodes).filter(function (f) {
          return c === f.getRootNode();
        });
        if (e.length) {
          d = Object.create(d);
          Object.defineProperty(d, "addedNodes", {
            value: e,
            configurable: true
          });
          return d;
        }
      } else if (e) {
        return d;
      }
    }).filter(function (d) {
      return d;
    });
  }
  ;
  var Ma = /[&\u00A0"]/g;
  var Na = /[&\u00A0<>]/g;
  function Oa(a) {
    switch (a) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "\"":
        return "&quot;";
      case "\xA0":
        return "&nbsp;";
    }
  }
  function Pa(a) {
    var b = {};
    for (var c = 0; c < a.length; c++) {
      b[a[c]] = true;
    }
    return b;
  }
  var Qa = Pa("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
  var Ra = Pa("style script xmp iframe noembed noframes plaintext noscript".split(" "));
  function Sa(a, b) {
    if (a.localName === "template") {
      a = a.content;
    }
    var c = "";
    for (var d = b ? b(a) : a.childNodes, e = 0, f = d.length, g = undefined; e < f && (g = d[e]); e++) {
      a: {
        var h = g;
        var l = a;
        var m = b;
        switch (h.nodeType) {
          case Node.ELEMENT_NODE:
            l = h.localName;
            var n = "<" + l;
            for (var t = h.attributes, A = 0, ia; ia = t[A]; A++) {
              n += " " + ia.name + "=\"" + ia.value.replace(Ma, Oa) + "\"";
            }
            n += ">";
            h = Qa[l] ? n : n + Sa(h, m) + "</" + l + ">";
            break a;
          case Node.TEXT_NODE:
            h = h.data;
            h = l && Ra[l.localName] ? h : h.replace(Na, Oa);
            break a;
          case Node.COMMENT_NODE:
            h = "<!--" + h.data + "-->";
            break a;
          default:
            window.console.error(h);
            throw Error("not implemented");
        }
        h = undefined;
      }
      c += h;
    }
    return c;
  }
  ;
  var Ta = w.l;
  var Ua = {
    querySelector: function (a) {
      return this.__shady_native_querySelector(a);
    },
    querySelectorAll: function (a) {
      return this.__shady_native_querySelectorAll(a);
    }
  };
  var Va = {};
  function Wa(a) {
    Va[a] = function (b) {
      return b["__shady_native_" + a];
    };
  }
  function Xa(a, b) {
    B(a, b, "__shady_native_");
    for (var c in b) {
      Wa(c);
    }
  }
  function E(a, b) {
    b = b === undefined ? [] : b;
    for (var c = 0; c < b.length; c++) {
      var d = b[c];
      var e = Object.getOwnPropertyDescriptor(a, d);
      if (e) {
        Object.defineProperty(a, "__shady_native_" + d, e);
        if (e.value) {
          Ua[d] ||= e.value;
        } else {
          Wa(d);
        }
      }
    }
  }
  var F = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, false);
  var G = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, false);
  var Ya = document.implementation.createHTMLDocument("inert");
  function Za(a) {
    for (var b; b = a.__shady_native_firstChild;) {
      a.__shady_native_removeChild(b);
    }
  }
  var $a = ["firstElementChild", "lastElementChild", "children", "childElementCount"];
  var ab = ["querySelector", "querySelectorAll", "append", "prepend", "replaceChildren"];
  function bb() {
    var a = ["dispatchEvent", "addEventListener", "removeEventListener"];
    if (window.EventTarget) {
      E(window.EventTarget.prototype, a);
      if (window.__shady_native_addEventListener === undefined) {
        E(Window.prototype, a);
      }
    } else {
      E(Node.prototype, a);
      E(Window.prototype, a);
      E(XMLHttpRequest.prototype, a);
    }
    if (Ta) {
      E(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" "));
    } else {
      Xa(Node.prototype, {
        parentNode: {
          get: function () {
            F.currentNode = this;
            return F.parentNode();
          }
        },
        firstChild: {
          get: function () {
            F.currentNode = this;
            return F.firstChild();
          }
        },
        lastChild: {
          get: function () {
            F.currentNode = this;
            return F.lastChild();
          }
        },
        previousSibling: {
          get: function () {
            F.currentNode = this;
            return F.previousSibling();
          }
        },
        nextSibling: {
          get: function () {
            F.currentNode = this;
            return F.nextSibling();
          }
        },
        childNodes: {
          get: function () {
            var b = [];
            F.currentNode = this;
            for (var c = F.firstChild(); c;) {
              b.push(c);
              c = F.nextSibling();
            }
            return b;
          }
        },
        parentElement: {
          get: function () {
            G.currentNode = this;
            return G.parentNode();
          }
        },
        textContent: {
          get: function () {
            switch (this.nodeType) {
              case Node.ELEMENT_NODE:
              case Node.DOCUMENT_FRAGMENT_NODE:
                for (var b = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, false), c = "", d; d = b.nextNode();) {
                  c += d.nodeValue;
                }
                return c;
              default:
                return this.nodeValue;
            }
          },
          set: function (b) {
            if (typeof b === "undefined" || b === null) {
              b = "";
            }
            switch (this.nodeType) {
              case Node.ELEMENT_NODE:
              case Node.DOCUMENT_FRAGMENT_NODE:
                Za(this);
                if (b.length > 0 || this.nodeType === Node.ELEMENT_NODE) {
                  this.__shady_native_insertBefore(document.createTextNode(b), undefined);
                }
                break;
              default:
                this.nodeValue = b;
            }
          }
        }
      });
    }
    E(Node.prototype, "appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
    E(HTMLElement.prototype, ["parentElement", "contains"]);
    a = {
      firstElementChild: {
        get: function () {
          G.currentNode = this;
          return G.firstChild();
        }
      },
      lastElementChild: {
        get: function () {
          G.currentNode = this;
          return G.lastChild();
        }
      },
      children: {
        get: function () {
          var b = [];
          G.currentNode = this;
          for (var c = G.firstChild(); c;) {
            b.push(c);
            c = G.nextSibling();
          }
          return ua(b);
        }
      },
      childElementCount: {
        get: function () {
          if (this.children) {
            return this.children.length;
          } else {
            return 0;
          }
        }
      }
    };
    if (Ta) {
      E(Element.prototype, $a);
      E(Element.prototype, ["previousElementSibling", "nextElementSibling", "innerHTML", "className"]);
      E(HTMLElement.prototype, ["children", "innerHTML", "className"]);
    } else {
      Xa(Element.prototype, a);
      Xa(Element.prototype, {
        previousElementSibling: {
          get: function () {
            G.currentNode = this;
            return G.previousSibling();
          }
        },
        nextElementSibling: {
          get: function () {
            G.currentNode = this;
            return G.nextSibling();
          }
        },
        innerHTML: {
          get: function () {
            return Sa(this, va);
          },
          set: function (b) {
            var c = this.localName === "template" ? this.content : this;
            Za(c);
            var d = this.localName || "div";
            d = this.namespaceURI && this.namespaceURI !== Ya.namespaceURI ? Ya.createElementNS(this.namespaceURI, d) : Ya.createElement(d);
            d.innerHTML = b;
            for (b = this.localName === "template" ? d.content : d; d = b.__shady_native_firstChild;) {
              c.__shady_native_insertBefore(d, undefined);
            }
          }
        },
        className: {
          get: function () {
            return this.getAttribute("class") || "";
          },
          set: function (b) {
            this.setAttribute("class", b);
          }
        }
      });
    }
    E(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute toggleAttribute focus blur".split(" "));
    E(Element.prototype, ab);
    E(HTMLElement.prototype, ["focus", "blur"]);
    if (window.HTMLTemplateElement) {
      E(window.HTMLTemplateElement.prototype, ["innerHTML"]);
    }
    if (Ta) {
      E(DocumentFragment.prototype, $a);
    } else {
      Xa(DocumentFragment.prototype, a);
    }
    E(DocumentFragment.prototype, ab);
    if (Ta) {
      E(Document.prototype, $a);
      E(Document.prototype, ["activeElement"]);
    } else {
      Xa(Document.prototype, a);
    }
    E(Document.prototype, ["importNode", "getElementById", "elementFromPoint", la()]);
    E(Document.prototype, ab);
  }
  ;
  var cb = C({
    get childNodes() {
      return this.__shady_childNodes;
    },
    get firstChild() {
      return this.__shady_firstChild;
    },
    get lastChild() {
      return this.__shady_lastChild;
    },
    get childElementCount() {
      return this.__shady_childElementCount;
    },
    get children() {
      return this.__shady_children;
    },
    get firstElementChild() {
      return this.__shady_firstElementChild;
    },
    get lastElementChild() {
      return this.__shady_lastElementChild;
    },
    get shadowRoot() {
      return this.__shady_shadowRoot;
    }
  });
  var db = C({
    get textContent() {
      return this.__shady_textContent;
    },
    set textContent(a) {
      this.__shady_textContent = a;
    },
    get innerHTML() {
      return this.__shady_innerHTML;
    },
    set innerHTML(a) {
      this.__shady_innerHTML = a;
    }
  });
  var eb = C({
    get parentElement() {
      return this.__shady_parentElement;
    },
    get parentNode() {
      return this.__shady_parentNode;
    },
    get nextSibling() {
      return this.__shady_nextSibling;
    },
    get previousSibling() {
      return this.__shady_previousSibling;
    },
    get nextElementSibling() {
      return this.__shady_nextElementSibling;
    },
    get previousElementSibling() {
      return this.__shady_previousElementSibling;
    },
    get className() {
      return this.__shady_className;
    },
    set className(a) {
      this.__shady_className = a;
    }
  });
  function fb(a) {
    for (var b in a) {
      var c = a[b];
      if (c) {
        c.enumerable = false;
      }
    }
  }
  fb(cb);
  fb(db);
  fb(eb);
  var gb = w.l || w.noPatch === true;
  var hb = gb ? function () {} : function (a) {
    var b = u(a);
    if (!b.Ua) {
      b.Ua = true;
      ya(a, eb);
    }
  };
  var ib = gb ? function () {} : function (a) {
    var b = u(a);
    if (!b.Ta) {
      b.Ta = true;
      ya(a, cb);
      if (!window.customElements || !window.customElements.polyfillWrapFlushCallback || !!w.noPatch) {
        ya(a, db);
      }
    }
  };
  var jb = "__eventWrappers" + Date.now();
  var kb = function () {
    var a = Object.getOwnPropertyDescriptor(Event.prototype, "composed");
    if (a) {
      return function (b) {
        return a.get.call(b);
      };
    } else {
      return null;
    }
  }();
  var lb = function () {
    function a() {}
    var b = false;
    var c = {
      get capture() {
        b = true;
        return false;
      }
    };
    window.addEventListener("test", a, c);
    window.removeEventListener("test", a, c);
    return b;
  }();
  function mb(a) {
    if (a === null || typeof a !== "object" && typeof a !== "function") {
      var b = !!a;
      var c = false;
    } else {
      b = !!a.capture;
      c = !!a.once;
      var d = a.I;
    }
    return {
      Oa: d,
      capture: b,
      once: c,
      Na: lb ? a : b
    };
  }
  var nb = {
    blur: true,
    focus: true,
    focusin: true,
    focusout: true,
    click: true,
    dblclick: true,
    mousedown: true,
    mouseenter: true,
    mouseleave: true,
    mousemove: true,
    mouseout: true,
    mouseover: true,
    mouseup: true,
    wheel: true,
    beforeinput: true,
    input: true,
    keydown: true,
    keyup: true,
    compositionstart: true,
    compositionupdate: true,
    compositionend: true,
    touchstart: true,
    touchend: true,
    touchmove: true,
    touchcancel: true,
    pointerover: true,
    pointerenter: true,
    pointerdown: true,
    pointermove: true,
    pointerup: true,
    pointercancel: true,
    pointerout: true,
    pointerleave: true,
    gotpointercapture: true,
    lostpointercapture: true,
    dragstart: true,
    drag: true,
    dragenter: true,
    dragleave: true,
    dragover: true,
    drop: true,
    dragend: true,
    DOMActivate: true,
    DOMFocusIn: true,
    DOMFocusOut: true,
    keypress: true
  };
  var ob = {
    DOMAttrModified: true,
    DOMAttributeNameChanged: true,
    DOMCharacterDataModified: true,
    DOMElementNameChanged: true,
    DOMNodeInserted: true,
    DOMNodeInsertedIntoDocument: true,
    DOMNodeRemoved: true,
    DOMNodeRemovedFromDocument: true,
    DOMSubtreeModified: true
  };
  function pb(a) {
    if (a instanceof Node) {
      return a.__shady_getRootNode();
    } else {
      return a;
    }
  }
  function qb(a, b) {
    var c = [];
    var d = a;
    for (a = pb(a); d;) {
      c.push(d);
      d = d.__shady_assignedSlot ? d.__shady_assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d.host : d.__shady_parentNode;
    }
    if (c[c.length - 1] === document) {
      c.push(window);
    }
    return c;
  }
  function rb(a) {
    a.__composedPath ||= qb(a.target, true);
    return a.__composedPath;
  }
  function sb(a, b) {
    if (!y) {
      return a;
    }
    a = qb(a, true);
    for (var c = 0, d, e = undefined, f, g = undefined; c < b.length; c++) {
      d = b[c];
      f = pb(d);
      if (f !== e) {
        g = a.indexOf(f);
        e = f;
      }
      if (!y(f) || g > -1) {
        return d;
      }
    }
  }
  var tb = {
    get composed() {
      if (this.__composed === undefined) {
        if (kb) {
          this.__composed = this.type === "focusin" || this.type === "focusout" || kb(this);
        } else if (this.isTrusted !== false) {
          this.__composed = nb[this.type];
        }
      }
      return this.__composed || false;
    },
    composedPath: function () {
      this.__composedPath ||= qb(this.__target, this.composed);
      return this.__composedPath;
    },
    get target() {
      return sb(this.currentTarget || this.__previousCurrentTarget, this.composedPath());
    },
    get relatedTarget() {
      if (!this.__relatedTarget) {
        return null;
      }
      this.__relatedTargetComposedPath ||= qb(this.__relatedTarget, true);
      return sb(this.currentTarget || this.__previousCurrentTarget, this.__relatedTargetComposedPath);
    },
    stopPropagation: function () {
      Event.prototype.stopPropagation.call(this);
      this.ha = true;
    },
    stopImmediatePropagation: function () {
      Event.prototype.stopImmediatePropagation.call(this);
      this.ha = this.__immediatePropagationStopped = true;
    }
  };
  var ub = w.l && Object.getOwnPropertyDescriptor(Event.prototype, "eventPhase");
  if (ub) {
    Object.defineProperty(tb, "eventPhase", {
      get: function () {
        if (this.currentTarget === this.target) {
          return Event.AT_TARGET;
        } else {
          return this.__shady_native_eventPhase;
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(tb, "__shady_native_eventPhase", ub);
  }
  function vb(a) {
    function b(c, d) {
      c = new a(c, d);
      c.__composed = d && !!d.composed;
      return c;
    }
    b.__proto__ = a;
    b.prototype = a.prototype;
    return b;
  }
  var wb = {
    focus: true,
    blur: true
  };
  function xb(a) {
    return a.__target !== a.target || a.__relatedTarget !== a.relatedTarget;
  }
  function yb(a, b, c) {
    if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]) {
      for (var d = 0, e; (e = c[d]) && (!xb(a) || a.target !== a.relatedTarget) && (e.call(b, a), !a.__immediatePropagationStopped); d++);
    }
  }
  var zb = new Event("e").hasOwnProperty("currentTarget");
  function Ab(a) {
    a = zb ? Object.create(a) : a;
    var b = a.composedPath();
    var c = b.map(function (n) {
      return sb(n, b);
    });
    var d = a.bubbles;
    var e = Object.getOwnPropertyDescriptor(a, "currentTarget");
    Object.defineProperty(a, "currentTarget", {
      configurable: true,
      enumerable: true,
      get: function () {
        return l;
      }
    });
    var f = Event.CAPTURING_PHASE;
    var g = Object.getOwnPropertyDescriptor(a, "eventPhase");
    Object.defineProperty(a, "eventPhase", {
      configurable: true,
      enumerable: true,
      get: function () {
        return f;
      }
    });
    try {
      for (var h = b.length - 1; h >= 0; h--) {
        var l = b[h];
        f = l === c[h] ? Event.AT_TARGET : Event.CAPTURING_PHASE;
        yb(a, l, "capture");
        if (a.ha) {
          return;
        }
      }
      for (h = 0; h < b.length; h++) {
        l = b[h];
        var m = l === c[h];
        if (m || d) {
          f = m ? Event.AT_TARGET : Event.BUBBLING_PHASE;
          yb(a, l, "bubble");
          if (a.ha) {
            break;
          }
        }
      }
    } finally {
      if (!zb) {
        if (e) {
          Object.defineProperty(a, "currentTarget", e);
        } else {
          delete a.currentTarget;
        }
        if (g) {
          Object.defineProperty(a, "eventPhase", g);
        } else {
          delete a.eventPhase;
        }
      }
    }
  }
  function Bb(a, b, c, d) {
    for (var e = 0; e < a.length; e++) {
      var f = a[e];
      var g = f.type;
      var h = f.capture;
      if (b === f.node && c === g && d === h) {
        return e;
      }
    }
    return -1;
  }
  function Cb(a) {
    Ga();
    if (!w.T && this instanceof Node && !sa(document, this)) {
      if (!a.__target) {
        Db(a, this);
      }
      return Ab(a);
    } else {
      return this.__shady_native_dispatchEvent(a);
    }
  }
  function Eb(a, b, c) {
    var d = this;
    var e = mb(c);
    var f = e.capture;
    var g = e.once;
    var h = e.Oa;
    e = e.Na;
    if (b) {
      var l = typeof b;
      if (l === "function" || l === "object") {
        if (l !== "object" || b.handleEvent && typeof b.handleEvent === "function") {
          if (ob[a]) {
            return this.__shady_native_addEventListener(a, b, e);
          }
          var m = h || this;
          if (h = b[jb]) {
            if (Bb(h, m, a, f) > -1) {
              return;
            }
          } else {
            b[jb] = [];
          }
          h = function (n) {
            if (g) {
              d.__shady_removeEventListener(a, b, c);
            }
            if (!n.__target) {
              Db(n);
            }
            if (m !== d) {
              var t = Object.getOwnPropertyDescriptor(n, "currentTarget");
              Object.defineProperty(n, "currentTarget", {
                get: function () {
                  return m;
                },
                configurable: true
              });
              var A = Object.getOwnPropertyDescriptor(n, "eventPhase");
              Object.defineProperty(n, "eventPhase", {
                configurable: true,
                enumerable: true,
                get: function () {
                  if (f) {
                    return Event.CAPTURING_PHASE;
                  } else {
                    return Event.BUBBLING_PHASE;
                  }
                }
              });
            }
            n.__previousCurrentTarget = n.currentTarget;
            if (!y(m) && m.localName !== "slot" || n.composedPath().indexOf(m) != -1) {
              if (n.composed || n.composedPath().indexOf(m) > -1) {
                if (xb(n) && n.target === n.relatedTarget) {
                  if (n.eventPhase === Event.BUBBLING_PHASE) {
                    n.stopImmediatePropagation();
                  }
                } else if (n.eventPhase === Event.CAPTURING_PHASE || n.bubbles || n.target === m || m instanceof Window) {
                  var ia = l === "function" ? b.call(m, n) : b.handleEvent && b.handleEvent(n);
                  if (m !== d) {
                    if (t) {
                      Object.defineProperty(n, "currentTarget", t);
                      t = null;
                    } else {
                      delete n.currentTarget;
                    }
                    if (A) {
                      Object.defineProperty(n, "eventPhase", A);
                      A = null;
                    } else {
                      delete n.eventPhase;
                    }
                  }
                  return ia;
                }
              }
            }
          };
          b[jb].push({
            node: m,
            type: a,
            capture: f,
            fc: h
          });
          this.__handlers = this.__handlers || {};
          this.__handlers[a] = this.__handlers[a] || {
            capture: [],
            bubble: []
          };
          this.__handlers[a][f ? "capture" : "bubble"].push(h);
          if (!wb[a]) {
            this.__shady_native_addEventListener(a, h, e);
          }
        }
      }
    }
  }
  function Fb(a, b, c) {
    if (b) {
      var d = mb(c);
      c = d.capture;
      var e = d.Oa;
      d = d.Na;
      if (ob[a]) {
        return this.__shady_native_removeEventListener(a, b, d);
      }
      var f = e || this;
      e = undefined;
      var g = null;
      try {
        g = b[jb];
      } catch (h) {}
      if (g) {
        f = Bb(g, f, a, c);
        if (f > -1) {
          e = g.splice(f, 1)[0].fc;
          if (!g.length) {
            b[jb] = undefined;
          }
        }
      }
      this.__shady_native_removeEventListener(a, e || b, d);
      if (e && this.__handlers && this.__handlers[a]) {
        a = this.__handlers[a][c ? "capture" : "bubble"];
        b = a.indexOf(e);
        if (b > -1) {
          a.splice(b, 1);
        }
      }
    }
  }
  function Gb() {
    for (var a in wb) {
      window.__shady_native_addEventListener(a, function (b) {
        if (!b.__target) {
          Db(b);
          Ab(b);
        }
      }, true);
    }
  }
  var Hb = C(tb);
  function Db(a, b) {
    b = b === undefined ? a.target : b;
    a.__target = b;
    a.__relatedTarget = a.relatedTarget;
    if (w.l) {
      b = Object.getPrototypeOf(a);
      if (!b.hasOwnProperty("__shady_patchedProto")) {
        var c = Object.create(b);
        c.__shady_sourceProto = b;
        B(c, Hb);
        b.__shady_patchedProto = c;
      }
      a.__proto__ = b.__shady_patchedProto;
    } else {
      B(a, Hb);
    }
  }
  var Ib = vb(Event);
  var Jb = vb(CustomEvent);
  var Kb = vb(MouseEvent);
  function Lb() {
    if (!kb && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
      function a() {
        var b = new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          composed: true
        });
        this.__shady_dispatchEvent(b);
      }
      if (Element.prototype.click) {
        Element.prototype.click = a;
      } else {
        HTMLElement.prototype.click &&= a;
      }
    }
  }
  var Mb = Object.getOwnPropertyNames(Element.prototype).filter(function (a) {
    return a.substring(0, 2) === "on";
  });
  var Nb = Object.getOwnPropertyNames(HTMLElement.prototype).filter(function (a) {
    return a.substring(0, 2) === "on";
  });
  function Ob(a) {
    return {
      set: function (b) {
        var c = u(this);
        var d = a.substring(2);
        c.H ||= {};
        if (c.H[a]) {
          this.removeEventListener(d, c.H[a]);
        }
        this.__shady_addEventListener(d, b);
        c.H[a] = b;
      },
      get: function () {
        var b = v(this);
        return b && b.H && b.H[a];
      },
      configurable: true
    };
  }
  ;
  function Pb(a, b) {
    return {
      index: a,
      U: [],
      ca: b
    };
  }
  function Qb(a, b, c, d) {
    var e = 0;
    var f = 0;
    var g = 0;
    var h = 0;
    var l = Math.min(b - e, d - f);
    if (e == 0 && f == 0) {
      a: {
        for (g = 0; g < l; g++) {
          if (a[g] !== c[g]) {
            break a;
          }
        }
        g = l;
      }
    }
    if (b == a.length && d == c.length) {
      h = a.length;
      for (var m = c.length, n = 0; n < l - g && Rb(a[--h], c[--m]);) {
        n++;
      }
      h = n;
    }
    e += g;
    f += g;
    b -= h;
    d -= h;
    if (b - e == 0 && d - f == 0) {
      return [];
    }
    if (e == b) {
      for (b = Pb(e, 0); f < d;) {
        b.U.push(c[f++]);
      }
      return [b];
    }
    if (f == d) {
      return [Pb(e, b - e)];
    }
    l = e;
    g = f;
    d = d - g + 1;
    h = b - l + 1;
    b = Array(d);
    for (m = 0; m < d; m++) {
      b[m] = Array(h);
      b[m][0] = m;
    }
    for (m = 0; m < h; m++) {
      b[0][m] = m;
    }
    for (m = 1; m < d; m++) {
      for (n = 1; n < h; n++) {
        if (a[l + n - 1] === c[g + m - 1]) {
          b[m][n] = b[m - 1][n - 1];
        } else {
          var t = b[m - 1][n] + 1;
          var A = b[m][n - 1] + 1;
          b[m][n] = t < A ? t : A;
        }
      }
    }
    l = b.length - 1;
    g = b[0].length - 1;
    d = b[l][g];
    for (a = []; l > 0 || g > 0;) {
      if (l == 0) {
        a.push(2);
        g--;
      } else if (g == 0) {
        a.push(3);
        l--;
      } else {
        h = b[l - 1][g - 1];
        m = b[l - 1][g];
        n = b[l][g - 1];
        t = m < n ? m < h ? m : h : n < h ? n : h;
        if (t == h) {
          if (h == d) {
            a.push(0);
          } else {
            a.push(1);
            d = h;
          }
          l--;
          g--;
        } else if (t == m) {
          a.push(3);
          l--;
          d = m;
        } else {
          a.push(2);
          g--;
          d = n;
        }
      }
    }
    a.reverse();
    b = undefined;
    l = [];
    for (g = 0; g < a.length; g++) {
      switch (a[g]) {
        case 0:
          if (b) {
            l.push(b);
            b = undefined;
          }
          e++;
          f++;
          break;
        case 1:
          b ||= Pb(e, 0);
          b.ca++;
          e++;
          b.U.push(c[f]);
          f++;
          break;
        case 2:
          b ||= Pb(e, 0);
          b.ca++;
          e++;
          break;
        case 3:
          b ||= Pb(e, 0);
          b.U.push(c[f]);
          f++;
      }
    }
    if (b) {
      l.push(b);
    }
    return l;
  }
  function Rb(a, b) {
    return a === b;
  }
  ;
  var Sb = C({
    dispatchEvent: Cb,
    addEventListener: Eb,
    removeEventListener: Fb
  });
  var Tb = null;
  function H() {
    Tb ||= window.ShadyCSS && window.ShadyCSS.ScopingShim;
    return Tb || null;
  }
  function Ub(a, b, c) {
    var d = H();
    if (d && b === "class") {
      d.setElementClass(a, c);
      return true;
    } else {
      return false;
    }
  }
  function Vb(a, b) {
    var c = H();
    if (c) {
      c.unscopeNode(a, b);
    }
  }
  function Wb(a, b) {
    var c = H();
    if (!c) {
      return true;
    }
    if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      c = true;
      for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
        c = c && Wb(a, b);
      }
      return c;
    }
    if (a.nodeType !== Node.ELEMENT_NODE) {
      return true;
    } else {
      return c.currentScopeForNode(a) === b;
    }
  }
  function Xb(a) {
    if (a.nodeType !== Node.ELEMENT_NODE) {
      return "";
    }
    var b = H();
    if (b) {
      return b.currentScopeForNode(a);
    } else {
      return "";
    }
  }
  function Yb(a, b) {
    if (a) {
      if (a.nodeType === Node.ELEMENT_NODE) {
        b(a);
      }
      a = a.__shady_firstChild;
      for (; a; a = a.__shady_nextSibling) {
        if (a.nodeType === Node.ELEMENT_NODE) {
          Yb(a, b);
        }
      }
    }
  }
  ;
  var Zb = window.document;
  var $b = w.T;
  var ac = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected");
  var bc = ac && ac.get;
  function cc(a) {
    for (var b; b = a.__shady_firstChild;) {
      a.__shady_removeChild(b);
    }
  }
  function dc(a) {
    var b = v(a);
    if (b && b.ga !== undefined) {
      for (b = a.__shady_firstChild; b; b = b.__shady_nextSibling) {
        dc(b);
      }
    }
    if (a = v(a)) {
      a.ga = undefined;
    }
  }
  function ec(a) {
    var b = a;
    if (a && a.localName === "slot") {
      var c = v(a);
      if (c = c && c.M) {
        b = c.length ? c[0] : ec(a.__shady_nextSibling);
      }
    }
    return b;
  }
  function fc(a, b, c) {
    if (a = (a = v(a)) && a.S) {
      if (b) {
        if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          for (var d = 0, e = b.childNodes.length; d < e; d++) {
            a.addedNodes.push(b.childNodes[d]);
          }
        } else {
          a.addedNodes.push(b);
        }
      }
      if (c) {
        a.removedNodes.push(c);
      }
      Ia(a);
    }
  }
  var jc = C({
    get parentNode() {
      var a = v(this);
      a = a && a.parentNode;
      if (a !== undefined) {
        return a;
      } else {
        return this.__shady_native_parentNode;
      }
    },
    get firstChild() {
      var a = v(this);
      a = a && a.firstChild;
      if (a !== undefined) {
        return a;
      } else {
        return this.__shady_native_firstChild;
      }
    },
    get lastChild() {
      var a = v(this);
      a = a && a.lastChild;
      if (a !== undefined) {
        return a;
      } else {
        return this.__shady_native_lastChild;
      }
    },
    get nextSibling() {
      var a = v(this);
      a = a && a.nextSibling;
      if (a !== undefined) {
        return a;
      } else {
        return this.__shady_native_nextSibling;
      }
    },
    get previousSibling() {
      var a = v(this);
      a = a && a.previousSibling;
      if (a !== undefined) {
        return a;
      } else {
        return this.__shady_native_previousSibling;
      }
    },
    get childNodes() {
      if (x(this)) {
        var a = v(this);
        if (!a.childNodes) {
          a.childNodes = [];
          for (var b = this.__shady_firstChild; b; b = b.__shady_nextSibling) {
            a.childNodes.push(b);
          }
        }
        var c = a.childNodes;
      } else {
        c = this.__shady_native_childNodes;
      }
      c.item = function (d) {
        return c[d];
      };
      return c;
    },
    get parentElement() {
      var a = v(this);
      if ((a = a && a.parentNode) && a.nodeType !== Node.ELEMENT_NODE) {
        a = null;
      }
      if (a !== undefined) {
        return a;
      } else {
        return this.__shady_native_parentElement;
      }
    },
    get isConnected() {
      if (bc && bc.call(this)) {
        return true;
      }
      if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) {
        return false;
      }
      var a = this.ownerDocument;
      if (a === null || sa(a, this)) {
        return true;
      }
      for (a = this; a && !(a instanceof Document);) {
        a = a.__shady_parentNode || (y(a) ? a.host : undefined);
      }
      return !!a && !!(a instanceof Document);
    },
    get textContent() {
      if (x(this)) {
        var a = [];
        for (var b = this.__shady_firstChild; b; b = b.__shady_nextSibling) {
          if (b.nodeType !== Node.COMMENT_NODE) {
            a.push(b.__shady_textContent);
          }
        }
        return a.join("");
      }
      return this.__shady_native_textContent;
    },
    set textContent(a) {
      if (typeof a === "undefined" || a === null) {
        a = "";
      }
      switch (this.nodeType) {
        case Node.ELEMENT_NODE:
        case Node.DOCUMENT_FRAGMENT_NODE:
          if (!x(this) && w.l) {
            var b = this.__shady_firstChild;
            if (b != this.__shady_lastChild || b && b.nodeType != Node.TEXT_NODE) {
              cc(this);
            }
            this.__shady_native_textContent = a;
          } else {
            cc(this);
            if (a.length > 0 || this.nodeType === Node.ELEMENT_NODE) {
              this.__shady_insertBefore(document.createTextNode(a));
            }
          }
          break;
        default:
          this.nodeValue = a;
      }
    },
    insertBefore: function (a, b) {
      if (this.ownerDocument !== Zb && a.ownerDocument !== Zb) {
        this.__shady_native_insertBefore(a, b);
        return a;
      }
      if (a === this) {
        throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
      }
      if (b) {
        var c = v(b);
        c = c && c.parentNode;
        if (c !== undefined && c !== this || c === undefined && b.__shady_native_parentNode !== this) {
          throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
        }
      }
      if (b === a) {
        return a;
      }
      fc(this, a);
      var d = [];
      var e = (c = I(this)) ? c.host.localName : Xb(this);
      var f = a.__shady_parentNode;
      if (f) {
        var g = Xb(a);
        var h = !!c || !I(a) || $b && this.__noInsertionPoint !== undefined;
        f.__shady_removeChild(a, h);
      }
      f = true;
      var l = (!$b || a.__noInsertionPoint === undefined && this.__noInsertionPoint === undefined) && !Wb(a, e);
      var m = c && !a.__noInsertionPoint && (!$b || a.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
      if (m || l) {
        if (l) {
          g = g || Xb(a);
        }
        Yb(a, function (n) {
          if (m && n.localName === "slot") {
            d.push(n);
          }
          if (l) {
            var t = g;
            if (H()) {
              if (t) {
                Vb(n, t);
              }
              if (t = H()) {
                t.scopeNode(n, e);
              }
            }
          }
        });
      }
      if (d.length) {
        c.ua(d);
        c.v();
      }
      if (x(this)) {
        hc(a, this, b);
        h = v(this);
        if (h.root) {
          f = false;
          if (ma(this)) {
            h.root.v();
          }
        } else if (c && this.localName === "slot") {
          f = false;
          c.v();
        }
      }
      if (f) {
        c = y(this) ? this.host : this;
        if (b) {
          b = ec(b);
          c.__shady_native_insertBefore(a, b);
        } else {
          c.__shady_native_appendChild(a);
        }
      } else if (a.ownerDocument !== this.ownerDocument) {
        this.ownerDocument.adoptNode(a);
      }
      return a;
    },
    appendChild: function (a) {
      if (this != a || !y(a)) {
        return this.__shady_insertBefore(a);
      }
    },
    removeChild: function (a, b) {
      b = b === undefined ? false : b;
      if (this.ownerDocument !== Zb) {
        return this.__shady_native_removeChild(a);
      }
      if (a.__shady_parentNode !== this) {
        throw Error("The node to be removed is not a child of this node: " + a);
      }
      fc(this, null, a);
      var c = I(a);
      var d = c && c.zb(a);
      var e = v(this);
      if (x(this) && (ic(a, this), ma(this))) {
        e.root.v();
        var f = true;
      }
      if (H() && !b && c && a.nodeType !== Node.TEXT_NODE) {
        var g = Xb(a);
        Yb(a, function (h) {
          Vb(h, g);
        });
      }
      dc(a);
      if (c) {
        if (b = this.localName === "slot") {
          f = true;
        }
        if (d || b) {
          c.v();
        }
      }
      if (!f) {
        f = y(this) ? this.host : this;
        if (!e.root && a.localName !== "slot" || f === a.__shady_native_parentNode) {
          f.__shady_native_removeChild(a);
        }
      }
      return a;
    },
    replaceChild: function (a, b) {
      this.__shady_insertBefore(a, b);
      this.__shady_removeChild(b);
      return a;
    },
    cloneNode: function (a) {
      if (this.localName == "template") {
        return this.__shady_native_cloneNode(a);
      }
      var b = this.__shady_native_cloneNode(false);
      if (a && b.nodeType !== Node.ATTRIBUTE_NODE) {
        a = this.__shady_firstChild;
        var c;
        for (; a; a = a.__shady_nextSibling) {
          c = a.__shady_cloneNode(true);
          b.__shady_appendChild(c);
        }
      }
      return b;
    },
    getRootNode: function (a) {
      if (this && this.nodeType) {
        var b = u(this);
        var c = b.ga;
        if (c === undefined) {
          if (y(this)) {
            c = this;
            b.ga = c;
          } else {
            c = (c = this.__shady_parentNode) ? c.__shady_getRootNode(a) : this;
            if (document.documentElement.__shady_native_contains(this)) {
              b.ga = c;
            }
          }
        }
        return c;
      }
    },
    contains: function (a) {
      return ta(this, a);
    }
  });
  var kc = C({
    get assignedSlot() {
      var a = this.__shady_parentNode;
      if (a = a && a.__shady_shadowRoot) {
        a.Y();
      }
      return (a = v(this)) && a.assignedSlot || null;
    }
  }); /*
      Copyright (c) 2022 The Polymer Project Authors
      SPDX-License-Identifier: BSD-3-Clause
      */
  var lc = new Map();
  [["(", {
    end: ")",
    fa: true
  }], ["[", {
    end: "]",
    fa: true
  }], ["\"", {
    end: "\"",
    fa: false
  }], ["'", {
    end: "'",
    fa: false
  }]].forEach(function (a) {
    var b = p(a);
    a = b.next().value;
    b = b.next().value;
    lc.set(a, b);
  });
  function mc(a, b, c, d) {
    for (d = d === undefined ? true : d; b < a.length; b++) {
      if (a[b] === "\\" && b < a.length - 1 && a[b + 1] !== "\n") {
        b++;
      } else {
        if (c.indexOf(a[b]) !== -1) {
          return b;
        }
        if (d && lc.has(a[b])) {
          var e = lc.get(a[b]);
          b = mc(a, b + 1, [e.end], e.fa);
        }
      }
    }
    return a.length;
  }
  function nc(a) {
    function b() {
      if (d.length > 0) {
        while (d[d.length - 1] === " ") {
          d.pop();
        }
        c.push({
          La: d.filter(function (l, m) {
            return m % 2 === 0;
          }),
          Pb: d.filter(function (l, m) {
            return m % 2 === 1;
          })
        });
        d.length = 0;
      }
    }
    var c = [];
    var d = [];
    for (var e = 0; e < a.length;) {
      var f = d[d.length - 1];
      var g = mc(a, e, [",", " ", ">", "+", "~"]);
      var h = g === e ? a[e] : a.substring(e, g);
      if (h === ",") {
        b();
      } else if ([undefined, " ", ">", "+", "~"].indexOf(f) === -1 || h !== " ") {
        if (f === " " && [">", "+", "~"].indexOf(h) !== -1) {
          d[d.length - 1] = h;
        } else {
          d.push(h);
        }
      }
      e = g + (g === e ? 1 : 0);
    }
    b();
    return c;
  }
  ;
  function oc(a, b, c) {
    var d = [];
    pc(a, b, c, d);
    return d;
  }
  function pc(a, b, c, d) {
    for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
      var e;
      if (e = a.nodeType === Node.ELEMENT_NODE) {
        e = a;
        var f = b;
        var g = c;
        var h = d;
        var l = f(e);
        if (l) {
          h.push(e);
        }
        if (g && g(l)) {
          e = l;
        } else {
          pc(e, f, g, h);
          e = undefined;
        }
      }
      if (e) {
        break;
      }
    }
  }
  var qc = {
    get firstElementChild() {
      var a = v(this);
      if (a && a.firstChild !== undefined) {
        for (a = this.__shady_firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) {
          a = a.__shady_nextSibling;
        }
        return a;
      }
      return this.__shady_native_firstElementChild;
    },
    get lastElementChild() {
      var a = v(this);
      if (a && a.lastChild !== undefined) {
        for (a = this.__shady_lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) {
          a = a.__shady_previousSibling;
        }
        return a;
      }
      return this.__shady_native_lastElementChild;
    },
    get children() {
      if (x(this)) {
        return ua(Array.prototype.filter.call(wa(this), function (a) {
          return a.nodeType === Node.ELEMENT_NODE;
        }));
      } else {
        return this.__shady_native_children;
      }
    },
    get childElementCount() {
      var a = this.__shady_children;
      if (a) {
        return a.length;
      } else {
        return 0;
      }
    }
  };
  var J = C((qc.append = function () {
    this.__shady_insertBefore(D.apply(null, q(r.apply(0, arguments))), null);
  }, qc.prepend = function () {
    this.__shady_insertBefore(D.apply(null, q(r.apply(0, arguments))), this.__shady_firstChild);
  }, qc.replaceChildren = function () {
    var a = r.apply(0, arguments);
    for (var b; (b = this.__shady_firstChild) !== null;) {
      this.__shady_removeChild(b);
    }
    this.__shady_insertBefore(D.apply(null, q(a)), null);
  }, qc));
  function rc(a, b) {
    function c(e, f) {
      return (e === a || f.indexOf(":scope") === -1) && na.call(e, f);
    }
    var d = nc(b);
    if (d.length < 1) {
      return [];
    }
    for (b = Ba(oc(a, function () {
      return true;
    }).map(function (e) {
      return Ba(d.map(function (f) {
        var g = f.La;
        var h = g.length - 1;
        if (c(e, g[h])) {
          return {
            target: e,
            P: f,
            R: e,
            index: h
          };
        } else {
          return [];
        }
      }));
    })); b.some(function (e) {
      return e.index > 0;
    });) {
      b = Ba(b.map(function (e) {
        if (e.index <= 0) {
          return e;
        }
        var f = e.target;
        var g = e.R;
        var h = e.P;
        e = e.index - 1;
        var l = h.Pb[e];
        var m = h.La[e];
        if (l === " ") {
          l = [];
          for (g = g.__shady_parentElement; g; g = g.__shady_parentElement) {
            if (c(g, m)) {
              l.push({
                target: f,
                P: h,
                R: g,
                index: e
              });
            }
          }
          return l;
        }
        if (l === ">") {
          g = g.__shady_parentElement;
          if (c(g, m)) {
            return {
              target: f,
              P: h,
              R: g,
              index: e
            };
          } else {
            return [];
          }
        }
        if (l === "+") {
          if ((g = g.__shady_previousElementSibling) && c(g, m)) {
            return {
              target: f,
              P: h,
              R: g,
              index: e
            };
          } else {
            return [];
          }
        }
        if (l === "~") {
          l = [];
          for (g = g.__shady_previousElementSibling; g; g = g.__shady_previousElementSibling) {
            if (c(g, m)) {
              l.push({
                target: f,
                P: h,
                R: g,
                index: e
              });
            }
          }
          return l;
        }
        throw Error("Unrecognized combinator: '" + l + "'.");
      }));
    }
    return Ca(b.map(function (e) {
      return e.target;
    }));
  }
  var K = w.querySelectorImplementation;
  var sc = C({
    querySelector: function (a) {
      if (K === "native") {
        var b = Array.prototype.slice.call((this instanceof ShadowRoot ? this.host : this).__shady_native_querySelectorAll(a));
        var c = this.__shady_getRootNode();
        b = p(b);
        var d = b.next();
        try {
          for (; !d.done; d = b.next()) {
            var e = d.value;
            if (e.__shady_getRootNode() == c) {
              return e;
            }
          }
        } finally {
          ba(b, d);
        }
        return null;
      }
      if (K === "selectorEngine") {
        return rc(this, a)[0] || null;
      }
      if (K === undefined) {
        return oc(this, function (f) {
          return na.call(f, a);
        }, function (f) {
          return !!f;
        })[0] || null;
      }
      throw Error("Unrecognized value of ShadyDOM.querySelectorImplementation: '" + (K + "'"));
    },
    querySelectorAll: function (a, b) {
      if (b || K === "native") {
        b = Array.prototype.slice.call((this instanceof ShadowRoot ? this.host : this).__shady_native_querySelectorAll(a));
        var c = this.__shady_getRootNode();
        return ua(b.filter(function (d) {
          return d.__shady_getRootNode() == c;
        }));
      }
      if (K === "selectorEngine") {
        return ua(rc(this, a));
      }
      if (K === undefined) {
        return ua(oc(this, function (d) {
          return na.call(d, a);
        }));
      }
      throw Error("Unrecognized value of ShadyDOM.querySelectorImplementation: '" + (K + "'"));
    }
  });
  var tc = w.T && !w.noPatch ? za({}, J) : J;
  za(J, sc); /*
             Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
             This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
             The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
             The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
             Code distributed by Google as part of the polymer project is also
             subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
             */
  var uc = C({
    after: function () {
      var a = this.__shady_parentNode;
      if (a !== null) {
        var b = this.__shady_nextSibling;
        a.__shady_insertBefore(D.apply(null, q(r.apply(0, arguments))), b);
      }
    },
    before: function () {
      var a = this.__shady_parentNode;
      if (a !== null) {
        a.__shady_insertBefore(D.apply(null, q(r.apply(0, arguments))), this);
      }
    },
    remove: function () {
      var a = this.__shady_parentNode;
      if (a !== null) {
        a.__shady_removeChild(this);
      }
    },
    replaceWith: function () {
      var a = r.apply(0, arguments);
      var b = this.__shady_parentNode;
      if (b !== null) {
        var c = this.__shady_nextSibling;
        b.__shady_removeChild(this);
        b.__shady_insertBefore(D.apply(null, q(a)), c);
      }
    }
  });
  var vc = window.document;
  function wc(a, b) {
    if (b === "slot") {
      a = a.__shady_parentNode;
      if (ma(a)) {
        v(a).root.v();
      }
    } else if (a.localName === "slot" && b === "name" && (b = I(a))) {
      b.Mb(a);
      b.v();
    }
  }
  var xc = C({
    get previousElementSibling() {
      var a = v(this);
      if (a && a.previousSibling !== undefined) {
        for (a = this.__shady_previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) {
          a = a.__shady_previousSibling;
        }
        return a;
      }
      return this.__shady_native_previousElementSibling;
    },
    get nextElementSibling() {
      var a = v(this);
      if (a && a.nextSibling !== undefined) {
        for (a = this.__shady_nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;) {
          a = a.__shady_nextSibling;
        }
        return a;
      }
      return this.__shady_native_nextElementSibling;
    },
    get slot() {
      return this.getAttribute("slot");
    },
    set slot(a) {
      this.__shady_setAttribute("slot", a);
    },
    get className() {
      return this.getAttribute("class") || "";
    },
    set className(a) {
      this.__shady_setAttribute("class", a);
    },
    setAttribute: function (a, b) {
      if (this.ownerDocument !== vc) {
        this.__shady_native_setAttribute(a, b);
      } else if (!Ub(this, a, b)) {
        this.__shady_native_setAttribute(a, b);
        wc(this, a);
      }
    },
    removeAttribute: function (a) {
      if (this.ownerDocument !== vc) {
        this.__shady_native_removeAttribute(a);
      } else if (Ub(this, a, "")) {
        if (this.getAttribute(a) === "") {
          this.__shady_native_removeAttribute(a);
        }
      } else {
        this.__shady_native_removeAttribute(a);
        wc(this, a);
      }
    },
    toggleAttribute: function (a, b) {
      if (this.ownerDocument !== vc) {
        return this.__shady_native_toggleAttribute(a, b);
      }
      if (!Ub(this, a, "")) {
        b = this.__shady_native_toggleAttribute(a, b);
        wc(this, a);
        return b;
      }
      if (this.getAttribute(a) === "" && !b) {
        return this.__shady_native_toggleAttribute(a, b);
      }
    }
  });
  if (!w.T) {
    Mb.forEach(function (a) {
      xc[a] = Ob(a);
    });
  }
  var Bc = C({
    attachShadow: function (a) {
      if (!this) {
        throw Error("Must provide a host.");
      }
      if (!a) {
        throw Error("Not enough arguments.");
      }
      if (a.shadyUpgradeFragment && !w.Ra) {
        var b = a.shadyUpgradeFragment;
        b.__proto__ = ShadowRoot.prototype;
        b.Aa(this, a);
        yc(b, b);
        a = b.__noInsertionPoint ? null : b.querySelectorAll("slot");
        b.__noInsertionPoint = undefined;
        if (a && a.length) {
          b.ua(a);
          b.v();
        }
        b.host.__shady_native_appendChild(b);
      } else {
        b = new zc(Ac, this, a);
      }
      return this.__CE_shadowRoot = b;
    },
    get shadowRoot() {
      var a = v(this);
      return a && a.Xb || null;
    }
  });
  za(xc, Bc);
  var Cc = document.implementation.createHTMLDocument("inert");
  var Dc = C({
    get innerHTML() {
      if (x(this)) {
        return Sa(this.localName === "template" ? this.content : this, wa);
      } else {
        return this.__shady_native_innerHTML;
      }
    },
    set innerHTML(a) {
      if (this.localName === "template") {
        this.__shady_native_innerHTML = a;
      } else {
        cc(this);
        var b = this.localName || "div";
        b = this.namespaceURI && this.namespaceURI !== Cc.namespaceURI ? Cc.createElementNS(this.namespaceURI, b) : Cc.createElement(b);
        for (w.l ? b.__shady_native_innerHTML = a : b.innerHTML = a; a = b.__shady_firstChild;) {
          this.__shady_insertBefore(a);
        }
      }
    }
  });
  var Ec = C({
    blur: function () {
      var a = v(this);
      if (a = (a = a && a.root) && a.activeElement) {
        a.__shady_blur();
      } else {
        this.__shady_native_blur();
      }
    }
  });
  if (!w.T) {
    Nb.forEach(function (a) {
      Ec[a] = Ob(a);
    });
  }
  var Fc = C({
    assignedNodes: function (a) {
      if (this.localName === "slot") {
        var b = this.__shady_getRootNode();
        if (b && y(b)) {
          b.Y();
        }
        if (b = v(this)) {
          return (a && a.flatten ? b.M : b.assignedNodes) || [];
        } else {
          return [];
        }
      }
    },
    addEventListener: function (a, b, c) {
      if (this.localName !== "slot" || a === "slotchange") {
        Eb.call(this, a, b, c);
      } else {
        if (typeof c !== "object") {
          c = {
            capture: !!c
          };
        }
        var d = this.__shady_parentNode;
        if (!d) {
          throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
        }
        c.I = this;
        d.__shady_addEventListener(a, b, c);
      }
    },
    removeEventListener: function (a, b, c) {
      if (this.localName !== "slot" || a === "slotchange") {
        Fb.call(this, a, b, c);
      } else {
        if (typeof c !== "object") {
          c = {
            capture: !!c
          };
        }
        var d = this.__shady_parentNode;
        if (!d) {
          throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
        }
        c.I = this;
        d.__shady_removeEventListener(a, b, c);
      }
    }
  });
  var Gc = C({
    getElementById: function (a) {
      if (a === "") {
        return null;
      } else {
        return oc(this, function (b) {
          return b.id == a;
        }, function (b) {
          return !!b;
        })[0] || null;
      }
    }
  });
  function Hc(a, b) {
    for (var c; b && !a.has(c = b.__shady_getRootNode());) {
      b = c.host;
    }
    return b;
  }
  function Ic(a) {
    var b = new Set();
    for (b.add(a); y(a) && a.host;) {
      a = a.host.__shady_getRootNode();
      b.add(a);
    }
    return b;
  }
  var Jc = "__shady_native_" + la();
  var Kc = C({
    get activeElement() {
      var a = w.l ? document.__shady_native_activeElement : document.activeElement;
      if (!a || !a.nodeType) {
        return null;
      }
      var b = !!y(this);
      if (this !== document && (!b || this.host === a || !this.host.__shady_native_contains(a))) {
        return null;
      }
      for (b = I(a); b && b !== this;) {
        a = b.host;
        b = I(a);
      }
      if (this === document) {
        if (b) {
          return null;
        } else {
          return a;
        }
      } else if (b === this) {
        return a;
      } else {
        return null;
      }
    },
    elementsFromPoint: function (a, b) {
      a = document[Jc](a, b);
      if (this === document && w.useNativeDocumentEFP) {
        return a;
      }
      a = [].slice.call(a);
      b = Ic(this);
      var c = new Set();
      for (var d = 0; d < a.length; d++) {
        c.add(Hc(b, a[d]));
      }
      var e = [];
      c.forEach(function (f) {
        return e.push(f);
      });
      return e;
    },
    elementFromPoint: function (a, b) {
      if (this === document && w.useNativeDocumentEFP) {
        return this.__shady_native_elementFromPoint(a, b);
      } else {
        return this.__shady_elementsFromPoint(a, b)[0] || null;
      }
    }
  });
  var Lc = window.document;
  var Mc = C({
    importNode: function (a, b) {
      if (a.ownerDocument !== Lc || a.localName === "template") {
        return this.__shady_native_importNode(a, b);
      }
      var c = this.__shady_native_importNode(a, false);
      if (b) {
        for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
          b = this.__shady_importNode(a, true);
          c.__shady_appendChild(b);
        }
      }
      return c;
    }
  });
  var Nc = C({
    dispatchEvent: Cb,
    addEventListener: Eb.bind(window),
    removeEventListener: Fb.bind(window)
  });
  var L = {};
  if (Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement")) {
    L.parentElement = jc.parentElement;
  }
  if (Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains")) {
    L.contains = jc.contains;
  }
  if (Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children")) {
    L.children = J.children;
  }
  if (Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML")) {
    L.innerHTML = Dc.innerHTML;
  }
  if (Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className")) {
    L.className = xc.className;
  }
  var M = {
    EventTarget: [Sb],
    Node: [jc, window.EventTarget ? null : Sb],
    Text: [kc],
    Comment: [kc],
    CDATASection: [kc],
    ProcessingInstruction: [kc],
    Element: [xc, J, uc, kc, !w.l || "innerHTML" in Element.prototype ? Dc : null, window.HTMLSlotElement ? null : Fc],
    HTMLElement: [Ec, L],
    HTMLSlotElement: [Fc],
    DocumentFragment: [tc, Gc],
    Document: [Mc, tc, Gc, Kc],
    Window: [Nc],
    CharacterData: [uc],
    XMLHttpRequest: [window.EventTarget ? null : Sb]
  };
  var Oc = w.l ? null : ["innerHTML", "textContent"];
  function N(a, b, c, d) {
    b.forEach(function (e) {
      return a && e && B(a, e, c, d);
    });
  }
  function Pc(a) {
    var b = a ? null : Oc;
    var c;
    for (c in M) {
      N(window[c] && window[c].prototype, M[c], a, b);
    }
  }
  ["Text", "Comment", "CDATASection", "ProcessingInstruction"].forEach(function (a) {
    var b = window[a];
    var c = Object.create(b.prototype);
    c.__shady_protoIsPatched = true;
    N(c, M.EventTarget);
    N(c, M.Node);
    if (M[a]) {
      N(c, M[a]);
    }
    b.prototype.__shady_patchedProto = c;
  });
  function Qc(a) {
    a.__shady_protoIsPatched = true;
    N(a, M.EventTarget);
    N(a, M.Node);
    N(a, M.Element);
    N(a, M.HTMLElement);
    N(a, M.HTMLSlotElement);
    return a;
  }
  ;
  var Rc = w.ra;
  var Sc = w.l;
  function Tc(a, b) {
    if (Rc && !a.__shady_protoIsPatched && !y(a)) {
      var c = Object.getPrototypeOf(a);
      var d = c.hasOwnProperty("__shady_patchedProto") && c.__shady_patchedProto;
      if (!d) {
        d = Object.create(c);
        Qc(d);
        c.__shady_patchedProto = d;
      }
      Object.setPrototypeOf(a, d);
    }
    if (!Sc) {
      if (b === 1) {
        hb(a);
      } else if (b === 2) {
        ib(a);
      }
    }
  }
  function Uc(a, b, c, d) {
    Tc(a, 1);
    d = d || null;
    var e = u(a);
    var f = d ? u(d) : null;
    e.previousSibling = d ? f.previousSibling : b.__shady_lastChild;
    if (f = v(e.previousSibling)) {
      f.nextSibling = a;
    }
    if (f = v(e.nextSibling = d)) {
      f.previousSibling = a;
    }
    e.parentNode = b;
    if (d) {
      if (d === c.firstChild) {
        c.firstChild = a;
      }
    } else {
      c.lastChild = a;
      c.firstChild ||= a;
    }
    c.childNodes = null;
  }
  function hc(a, b, c) {
    Tc(b, 2);
    var d = u(b);
    if (d.firstChild !== undefined) {
      d.childNodes = null;
    }
    if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) {
        Uc(a, b, d, c);
      }
    } else {
      Uc(a, b, d, c);
    }
  }
  function ic(a, b) {
    var c = u(a);
    b = u(b);
    if (a === b.firstChild) {
      b.firstChild = c.nextSibling;
    }
    if (a === b.lastChild) {
      b.lastChild = c.previousSibling;
    }
    a = c.previousSibling;
    var d = c.nextSibling;
    if (a) {
      u(a).nextSibling = d;
    }
    if (d) {
      u(d).previousSibling = a;
    }
    c.parentNode = c.previousSibling = c.nextSibling = undefined;
    if (b.childNodes !== undefined) {
      b.childNodes = null;
    }
  }
  function yc(a, b) {
    var c = u(a);
    if (b || c.firstChild === undefined) {
      c.childNodes = null;
      var d = c.firstChild = a.__shady_native_firstChild;
      c.lastChild = a.__shady_native_lastChild;
      Tc(a, 2);
      c = d;
      for (d = undefined; c; c = c.__shady_native_nextSibling) {
        var e = u(c);
        e.parentNode = b || a;
        e.nextSibling = c.__shady_native_nextSibling;
        e.previousSibling = d || null;
        d = c;
        Tc(c, 1);
      }
    }
  }
  ;
  var Vc = C({
    addEventListener: function (a, b, c) {
      if (typeof c !== "object") {
        c = {
          capture: !!c
        };
      }
      c.I = c.I || this;
      this.host.__shady_addEventListener(a, b, c);
    },
    removeEventListener: function (a, b, c) {
      if (typeof c !== "object") {
        c = {
          capture: !!c
        };
      }
      c.I = c.I || this;
      this.host.__shady_removeEventListener(a, b, c);
    }
  });
  function Wc(a, b) {
    B(a, Vc, b);
    B(a, Kc, b);
    B(a, Dc, b);
    B(a, J, b);
    if (w.noPatch && !b) {
      B(a, jc, b);
      B(a, Gc, b);
    } else if (!w.l) {
      B(a, eb);
      B(a, cb);
      B(a, db);
    }
  }
  ;
  var Ac = {};
  var O = w.deferConnectionCallbacks && document.readyState === "loading";
  var Xc;
  function Yc(a) {
    var b = [];
    do {
      b.unshift(a);
    } while (a = a.__shady_parentNode);
    return b;
  }
  function zc(a, b, c) {
    if (a !== Ac) {
      throw new TypeError("Illegal constructor");
    }
    this.h = null;
    this.Aa(b, c);
  }
  k = zc.prototype;
  k.Aa = function (a, b) {
    this.host = a;
    this.mode = b && b.mode;
    yc(this.host);
    a = u(this.host);
    a.root = this;
    a.Xb = this.mode !== "closed" ? this : null;
    a = u(this);
    a.firstChild = a.lastChild = a.parentNode = a.nextSibling = a.previousSibling = null;
    if (w.preferPerformance) {
      while (a = this.host.__shady_native_firstChild) {
        this.host.__shady_native_removeChild(a);
      }
    } else {
      this.v();
    }
  };
  k.v = function () {
    var a = this;
    if (!this.K) {
      this.K = true;
      Fa(function () {
        return a.Y();
      });
    }
  };
  k.nb = function () {
    var a;
    for (var b = this; b;) {
      if (b.K) {
        a = b;
      }
      b = b.mb();
    }
    return a;
  };
  k.mb = function () {
    var a = this.host.__shady_getRootNode();
    if (y(a)) {
      var b = v(this.host);
      if (b && b.X > 0) {
        return a;
      }
    }
  };
  k.Y = function () {
    var a = this.K && this.nb();
    if (a) {
      a._renderSelf();
    }
  };
  k.ib = function () {
    if (!this.za && this.K) {
      this.Y();
    }
  };
  k._renderSelf = function () {
    var a = O;
    O = true;
    this.K = false;
    if (this.h) {
      this.cb();
      this.ab();
    }
    if (!w.preferPerformance && !this.za) {
      for (var b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) {
        var c = v(b);
        if (b.__shady_native_parentNode === this.host && (b.localName === "slot" || !c.assignedSlot)) {
          this.host.__shady_native_removeChild(b);
        }
      }
    }
    this.za = true;
    O = a;
    if (Xc) {
      Xc();
    }
  };
  k.cb = function () {
    this.ba();
    for (var a = 0, b; a < this.h.length; a++) {
      b = this.h[a];
      this.Za(b);
    }
    for (a = this.host.__shady_firstChild; a; a = a.__shady_nextSibling) {
      this.wa(a);
    }
    for (a = 0; a < this.h.length; a++) {
      b = this.h[a];
      var c = v(b);
      if (!c.assignedNodes.length) {
        for (var d = b.__shady_firstChild; d; d = d.__shady_nextSibling) {
          this.wa(d, b);
        }
      }
      if ((d = (d = v(b.__shady_parentNode)) && d.root) && (d.ya() || d.K)) {
        d._renderSelf();
      }
      this.ta(c.M, c.assignedNodes);
      if (d = c.Ea) {
        for (var e = 0; e < d.length; e++) {
          v(d[e]).la = null;
        }
        c.Ea = null;
        if (d.length > c.assignedNodes.length) {
          c.pa = true;
        }
      }
      if (c.pa) {
        c.pa = false;
        this.xa(b);
      }
    }
  };
  k.wa = function (a, b) {
    var c = u(a);
    var d = c.la;
    c.la = null;
    b ||= (b = this.j[a.__shady_slot || "__catchall"]) && b[0];
    if (b) {
      u(b).assignedNodes.push(a);
      c.assignedSlot = b;
    } else {
      c.assignedSlot = undefined;
    }
    if (d !== c.assignedSlot && c.assignedSlot) {
      u(c.assignedSlot).pa = true;
    }
  };
  k.Za = function (a) {
    var b = v(a);
    var c = b.assignedNodes;
    b.assignedNodes = [];
    b.M = [];
    if (b.Ea = c) {
      for (b = 0; b < c.length; b++) {
        var d = v(c[b]);
        d.la = d.assignedSlot;
        if (d.assignedSlot === a) {
          d.assignedSlot = null;
        }
      }
    }
  };
  k.ta = function (a, b) {
    for (var c = 0, d = undefined; c < b.length && (d = b[c]); c++) {
      if (d.localName == "slot") {
        var e = v(d).assignedNodes;
        if (e && e.length) {
          this.ta(a, e);
        }
      } else {
        a.push(b[c]);
      }
    }
  };
  k.xa = function (a) {
    a.__shady_native_dispatchEvent(new Event("slotchange"));
    a = v(a);
    if (a.assignedSlot) {
      this.xa(a.assignedSlot);
    }
  };
  k.ab = function () {
    for (var a = this.h, b = [], c = 0; c < a.length; c++) {
      var d = a[c].__shady_parentNode;
      var e = v(d);
      if ((!e || !e.root) && !!(b.indexOf(d) < 0)) {
        b.push(d);
      }
    }
    for (a = 0; a < b.length; a++) {
      c = b[a];
      this.Lb(c === this ? this.host : c, this.bb(c));
    }
  };
  k.bb = function (a) {
    var b = [];
    for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
      if (this.pb(a)) {
        for (var c = v(a).M, d = 0; d < c.length; d++) {
          b.push(c[d]);
        }
      } else {
        b.push(a);
      }
    }
    return b;
  };
  k.pb = function (a) {
    return a.localName == "slot";
  };
  k.Lb = function (a, b) {
    var c = va(a);
    for (var d = Qb(b, b.length, c, c.length), e = 0, f = 0, g = undefined; e < d.length && (g = d[e]); e++) {
      for (var h = 0, l = undefined; h < g.U.length && (l = g.U[h]); h++) {
        if (l.__shady_native_parentNode === a) {
          a.__shady_native_removeChild(l);
        }
        c.splice(g.index + f, 1);
      }
      f -= g.ca;
    }
    e = 0;
    for (f = undefined; e < d.length && (f = d[e]); e++) {
      g = c[f.index];
      h = f.index;
      for (; h < f.index + f.ca; h++) {
        l = b[h];
        a.__shady_native_insertBefore(l, g);
        c.splice(h, 0, l);
      }
    }
  };
  k.hb = function () {
    this.G = this.G || [];
    this.h = this.h || [];
    this.j = this.j || {};
  };
  k.ua = function (a) {
    this.hb();
    this.G.push.apply(this.G, q(a));
  };
  k.ba = function () {
    if (this.G && this.G.length) {
      this.sb(this.G);
      this.G = [];
    }
  };
  k.sb = function (a) {
    var b;
    for (var c = 0; c < a.length; c++) {
      var d = a[c];
      yc(d);
      var e = d.__shady_parentNode;
      yc(e);
      e = v(e);
      e.X = (e.X || 0) + 1;
      e = this.Ca(d);
      if (this.j[e]) {
        b = b || {};
        b[e] = true;
        this.j[e].push(d);
      } else {
        this.j[e] = [d];
      }
      this.h.push(d);
    }
    if (b) {
      for (var f in b) {
        this.j[f] = this.Ga(this.j[f]);
      }
    }
  };
  k.Ca = function (a) {
    var b = a.name || a.getAttribute("name") || "__catchall";
    return a.Va = b;
  };
  k.Ga = function (a) {
    return a.sort(function (b, c) {
      b = Yc(b);
      var d = Yc(c);
      for (var e = 0; e < b.length; e++) {
        c = b[e];
        var f = d[e];
        if (c !== f) {
          b = wa(c.__shady_parentNode);
          return b.indexOf(c) - b.indexOf(f);
        }
      }
    });
  };
  k.zb = function (a) {
    if (this.h) {
      this.ba();
      var b = this.j;
      var c;
      for (c in b) {
        for (var d = b[c], e = 0; e < d.length; e++) {
          var f = d[e];
          if (ta(a, f)) {
            d.splice(e, 1);
            var g = this.h.indexOf(f);
            if (g >= 0) {
              this.h.splice(g, 1);
              if ((g = v(f.__shady_parentNode)) && g.X) {
                g.X--;
              }
            }
            e--;
            this.Ab(f);
            g = true;
          }
        }
      }
      return g;
    }
  };
  k.Mb = function (a) {
    if (this.h) {
      this.ba();
      var b = a.Va;
      var c = this.Ca(a);
      if (c !== b) {
        b = this.j[b];
        var d = b.indexOf(a);
        if (d >= 0) {
          b.splice(d, 1);
        }
        b = this.j[c] ||= [];
        b.push(a);
        if (b.length > 1) {
          this.j[c] = this.Ga(b);
        }
      }
    }
  };
  k.Ab = function (a) {
    a = v(a);
    var b = a.M;
    if (b) {
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        var e = d.__shady_native_parentNode;
        if (e) {
          e.__shady_native_removeChild(d);
        }
      }
    }
    a.M = [];
    a.assignedNodes = [];
  };
  k.ya = function () {
    this.ba();
    return !!this.h && !!this.h.length;
  };
  (function (a) {
    a.__proto__ = DocumentFragment.prototype;
    Wc(a, "__shady_");
    Wc(a);
    Object.defineProperties(a, {
      nodeType: {
        value: Node.DOCUMENT_FRAGMENT_NODE,
        configurable: true
      },
      nodeName: {
        value: "#document-fragment",
        configurable: true
      },
      nodeValue: {
        value: null,
        configurable: true
      }
    });
    ["localName", "namespaceURI", "prefix"].forEach(function (b) {
      Object.defineProperty(a, b, {
        value: undefined,
        configurable: true
      });
    });
    ["ownerDocument", "baseURI", "isConnected"].forEach(function (b) {
      Object.defineProperty(a, b, {
        get: function () {
          return this.host[b];
        },
        configurable: true
      });
    });
  })(zc.prototype);
  if (window.customElements && window.customElements.define && w.inUse && !w.preferPerformance) {
    var Zc = new Map();
    Xc = function () {
      var a = [];
      Zc.forEach(function (d, e) {
        a.push([e, d]);
      });
      Zc.clear();
      for (var b = 0; b < a.length; b++) {
        var c = a[b][0];
        if (a[b][1]) {
          c.__shadydom_connectedCallback();
        } else {
          c.__shadydom_disconnectedCallback();
        }
      }
    };
    if (O) {
      document.addEventListener("readystatechange", function () {
        O = false;
        Xc();
      }, {
        once: true
      });
    }
    function $c(a, b, c) {
      var d = 0;
      var e = "__isConnected" + d++;
      if (b || c) {
        a.prototype.connectedCallback = a.prototype.__shadydom_connectedCallback = function () {
          if (O) {
            Zc.set(this, true);
          } else if (!this[e]) {
            this[e] = true;
            if (b) {
              b.call(this);
            }
          }
        };
        a.prototype.disconnectedCallback = a.prototype.__shadydom_disconnectedCallback = function () {
          if (O) {
            if (!this.isConnected) {
              Zc.set(this, false);
            }
          } else if (this[e]) {
            this[e] = false;
            if (c) {
              c.call(this);
            }
          }
        };
      }
      return a;
    }
    var ad = window.customElements.define;
    function bd(a, b) {
      var c = b.prototype.connectedCallback;
      var d = b.prototype.disconnectedCallback;
      ad.call(window.customElements, a, $c(b, c, d));
      b.prototype.connectedCallback = c;
      b.prototype.disconnectedCallback = d;
    }
    window.customElements.define = bd;
    Object.defineProperty(window.CustomElementRegistry.prototype, "define", {
      value: bd,
      configurable: true
    });
  }
  function I(a) {
    a = a.__shady_getRootNode();
    if (y(a)) {
      return a;
    }
  }
  ;
  function P(a) {
    this.node = a;
  }
  k = P.prototype;
  k.addEventListener = function (a, b, c) {
    return this.node.__shady_addEventListener(a, b, c);
  };
  k.removeEventListener = function (a, b, c) {
    return this.node.__shady_removeEventListener(a, b, c);
  };
  k.appendChild = function (a) {
    return this.node.__shady_appendChild(a);
  };
  k.insertBefore = function (a, b) {
    return this.node.__shady_insertBefore(a, b);
  };
  k.removeChild = function (a) {
    return this.node.__shady_removeChild(a);
  };
  k.replaceChild = function (a, b) {
    return this.node.__shady_replaceChild(a, b);
  };
  k.cloneNode = function (a) {
    return this.node.__shady_cloneNode(a);
  };
  k.getRootNode = function (a) {
    return this.node.__shady_getRootNode(a);
  };
  k.contains = function (a) {
    return this.node.__shady_contains(a);
  };
  k.dispatchEvent = function (a) {
    return this.node.__shady_dispatchEvent(a);
  };
  k.setAttribute = function (a, b) {
    this.node.__shady_setAttribute(a, b);
  };
  k.getAttribute = function (a) {
    return this.node.__shady_native_getAttribute(a);
  };
  k.hasAttribute = function (a) {
    return this.node.__shady_native_hasAttribute(a);
  };
  k.removeAttribute = function (a) {
    this.node.__shady_removeAttribute(a);
  };
  k.toggleAttribute = function (a, b) {
    return this.node.__shady_toggleAttribute(a, b);
  };
  k.attachShadow = function (a) {
    return this.node.__shady_attachShadow(a);
  };
  da.Object.defineProperties(P.prototype, {
    activeElement: {
      configurable: true,
      enumerable: true,
      get: function () {
        if (y(this.node) || this.node.nodeType === Node.DOCUMENT_NODE) {
          return this.node.__shady_activeElement;
        }
      }
    },
    _activeElement: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.activeElement;
      }
    }
  });
  k = P.prototype;
  k.focus = function () {
    this.node.__shady_native_focus();
  };
  k.blur = function () {
    this.node.__shady_blur();
  };
  k.importNode = function (a, b) {
    if (this.node.nodeType === Node.DOCUMENT_NODE) {
      return this.node.__shady_importNode(a, b);
    }
  };
  k.getElementById = function (a) {
    if (this.node.nodeType === Node.DOCUMENT_NODE) {
      return this.node.__shady_getElementById(a);
    }
  };
  k.elementsFromPoint = function (a, b) {
    return this.node.__shady_elementsFromPoint(a, b);
  };
  k.elementFromPoint = function (a, b) {
    return this.node.__shady_elementFromPoint(a, b);
  };
  k.querySelector = function (a) {
    return this.node.__shady_querySelector(a);
  };
  k.querySelectorAll = function (a, b) {
    return this.node.__shady_querySelectorAll(a, b);
  };
  k.assignedNodes = function (a) {
    if (this.node.localName === "slot") {
      return this.node.__shady_assignedNodes(a);
    }
  };
  da.Object.defineProperties(P.prototype, {
    host: {
      configurable: true,
      enumerable: true,
      get: function () {
        if (y(this.node)) {
          return this.node.host;
        }
      }
    },
    parentNode: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.node.__shady_parentNode;
      }
    },
    firstChild: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.node.__shady_firstChild;
      }
    },
    lastChild: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.node.__shady_lastChild;
      }
    },
    nextSibling: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.node.__shady_nextSibling;
      }
    },
    previousSibling: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.node.__shady_previousSibling;
      }
    },
    childNodes: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.node.__shady_childNodes;
      }
    },
    parentElement: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.node.__shady_parentElement;
      }
    },
    firstElementChild: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.node.__shady_firstElementChild;
      }
    },
    lastElementChild: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.node.__shady_lastElementChild;
      }
    },
    nextElementSibling: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.node.__shady_nextElementSibling;
      }
    },
    previousElementSibling: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.node.__shady_previousElementSibling;
      }
    },
    children: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.node.__shady_children;
      }
    },
    childElementCount: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.node.__shady_childElementCount;
      }
    },
    shadowRoot: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.node.__shady_shadowRoot;
      }
    },
    assignedSlot: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.node.__shady_assignedSlot;
      }
    },
    isConnected: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.node.__shady_isConnected;
      }
    },
    innerHTML: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.node.__shady_innerHTML;
      },
      set: function (a) {
        this.node.__shady_innerHTML = a;
      }
    },
    textContent: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.node.__shady_textContent;
      },
      set: function (a) {
        this.node.__shady_textContent = a;
      }
    },
    slot: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.node.__shady_slot;
      },
      set: function (a) {
        this.node.__shady_slot = a;
      }
    },
    className: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.node.__shady_className;
      },
      set: function (a) {
        this.node.__shady_className = a;
      }
    }
  });
  k = P.prototype;
  k.append = function () {
    return this.node.__shady_append.apply(this.node, q(r.apply(0, arguments)));
  };
  k.prepend = function () {
    return this.node.__shady_prepend.apply(this.node, q(r.apply(0, arguments)));
  };
  k.replaceChildren = function () {
    return this.node.__shady_replaceChildren.apply(this.node, q(r.apply(0, arguments)));
  };
  k.after = function () {
    return this.node.__shady_after.apply(this.node, q(r.apply(0, arguments)));
  };
  k.before = function () {
    return this.node.__shady_before.apply(this.node, q(r.apply(0, arguments)));
  };
  k.remove = function () {
    return this.node.__shady_remove();
  };
  k.replaceWith = function () {
    return this.node.__shady_replaceWith.apply(this.node, q(r.apply(0, arguments)));
  };
  function cd(a) {
    Object.defineProperty(P.prototype, a, {
      get: function () {
        return this.node["__shady_" + a];
      },
      set: function (b) {
        this.node["__shady_" + a] = b;
      },
      configurable: true
    });
  }
  Mb.forEach(function (a) {
    return cd(a);
  });
  Nb.forEach(function (a) {
    return cd(a);
  });
  var dd = new WeakMap();
  function ed(a) {
    if (y(a) || a instanceof P) {
      return a;
    }
    var b = dd.get(a);
    if (!b) {
      b = new P(a);
      dd.set(a, b);
    }
    return b;
  }
  ;
  if (w.inUse) {
    var fd = w.l ? function (a) {
      return a;
    } : function (a) {
      ib(a);
      hb(a);
      return a;
    };
    window.ShadyDOM = {
      inUse: w.inUse,
      patch: fd,
      isShadyRoot: y,
      enqueue: Fa,
      flush: Ga,
      flushInitial: function (a) {
        a.ib();
      },
      settings: w,
      filterMutations: La,
      observeChildren: Ja,
      unobserveChildren: Ka,
      deferConnectionCallbacks: w.deferConnectionCallbacks,
      preferPerformance: w.preferPerformance,
      handlesDynamicScoping: true,
      wrap: w.noPatch ? ed : fd,
      wrapIfNeeded: w.noPatch === true ? ed : function (a) {
        return a;
      },
      Wrapper: P,
      composedPath: rb,
      noPatch: w.noPatch,
      patchOnDemand: w.ra,
      nativeMethods: Ua,
      nativeTree: Va,
      patchElementProto: Qc,
      querySelectorImplementation: w.querySelectorImplementation
    };
    bb();
    Pc("__shady_");
    Object.defineProperty(document, "_activeElement", Kc.activeElement);
    B(Window.prototype, Nc, "__shady_");
    if (w.noPatch) {
      if (w.ra) {
        B(Element.prototype, Bc);
      }
    } else {
      Pc();
      Lb();
    }
    Gb();
    window.Event = Ib;
    window.CustomEvent = Jb;
    window.MouseEvent = Kb;
    window.ShadowRoot = zc;
  }
  ; /*
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
  function gd() {
    this.end = this.start = 0;
    this.rules = this.parent = this.previous = null;
    this.cssText = this.parsedCssText = "";
    this.atRule = false;
    this.type = 0;
    this.parsedSelector = this.selector = this.keyframesName = "";
  }
  function hd(a) {
    var b = a = a.replace(id, "").replace(jd, "");
    var c = new gd();
    c.start = 0;
    c.end = b.length;
    var d = c;
    for (var e = 0, f = b.length; e < f; e++) {
      if (b[e] === "{") {
        d.rules ||= [];
        var g = d;
        var h = g.rules[g.rules.length - 1] || null;
        d = new gd();
        d.start = e + 1;
        d.parent = g;
        d.previous = h;
        g.rules.push(d);
      } else if (b[e] === "}") {
        d.end = e + 1;
        d = d.parent || c;
      }
    }
    return kd(c, a);
  }
  function kd(a, b) {
    var c = b.substring(a.start, a.end - 1);
    a.parsedCssText = a.cssText = c.trim();
    if (a.parent) {
      c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1);
      c = _expandUnicodeEscapes$$module$third_party$javascript$polymer$v2$shadycss$src$css_parse(c);
      c = c.replace(ld, " ");
      c = c.substring(c.lastIndexOf(";") + 1);
      c = a.parsedSelector = a.selector = c.trim();
      a.atRule = c.indexOf("@") === 0;
      if (a.atRule) {
        if (c.indexOf("@media") === 0) {
          a.type = 4;
        } else if (c.match(md)) {
          a.type = 7;
          a.keyframesName = a.selector.split(ld).pop();
        }
      } else {
        a.type = c.indexOf("--") === 0 ? 1000 : 1;
      }
    }
    if (c = a.rules) {
      for (var d = 0, e = c.length, f = undefined; d < e && (f = c[d]); d++) {
        kd(f, b);
      }
    }
    return a;
  }
  function _expandUnicodeEscapes$$module$third_party$javascript$polymer$v2$shadycss$src$css_parse(a) {
    return a.replace(/\\([0-9a-f]{1,6})\s/gi, function () {
      var b = arguments[1];
      for (var c = 6 - b.length; c--;) {
        b = "0" + b;
      }
      return "\\" + b;
    });
  }
  function nd(a, b, c) {
    c = c === undefined ? "" : c;
    var d = "";
    if (a.cssText || a.rules) {
      var e = a.rules;
      if (e && !_hasMixinRules$$module$third_party$javascript$polymer$v2$shadycss$src$css_parse(e)) {
        for (var f = 0, g = e.length, h = undefined; f < g && (h = e[f]); f++) {
          d = nd(h, b, d);
        }
      } else {
        if (b) {
          b = a.cssText;
        } else {
          b = a.cssText;
          b = b.replace(od, "").replace(pd, "");
          b = b.replace(qd, "").replace(rd, "");
        }
        if (d = b.trim()) {
          d = "  " + d + "\n";
        }
      }
    }
    if (d) {
      if (a.selector) {
        c += a.selector + " {\n";
      }
      c += d;
      if (a.selector) {
        c += "}\n\n";
      }
    }
    return c;
  }
  function _hasMixinRules$$module$third_party$javascript$polymer$v2$shadycss$src$css_parse(a) {
    a = a[0];
    return !!a && !!a.selector && a.selector.indexOf("--") === 0;
  }
  var id = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim;
  var jd = /@import[^;]*;/gim;
  var od = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim;
  var pd = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim;
  var qd = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim;
  var rd = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim;
  var md = /^@[^\s]*keyframes/;
  var ld = /\s+/g;
  var Q = !window.ShadyDOM || !window.ShadyDOM.inUse;
  var sd;
  function td(a) {
    sd = a && a.shimcssproperties ? false : Q || !navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) && !!window.CSS && !!CSS.supports && !!CSS.supports("box-shadow", "0 0 0 var(--foo)");
  }
  var ud;
  if (window.ShadyCSS && window.ShadyCSS.cssBuild !== undefined) {
    ud = window.ShadyCSS.cssBuild;
  }
  var R = !!window.ShadyCSS && !!window.ShadyCSS.disableRuntime;
  if (window.ShadyCSS && window.ShadyCSS.nativeCss !== undefined) {
    sd = window.ShadyCSS.nativeCss;
  } else if (window.ShadyCSS) {
    td(window.ShadyCSS);
    window.ShadyCSS = undefined;
  } else {
    td(window.WebComponents && window.WebComponents.flags);
  }
  var S = sd;
  var vd = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi;
  var wd = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;
  var xd = /(--[\w-]+)\s*([:,;)]|$)/gi;
  var yd = /(animation\s*:)|(animation-name\s*:)/;
  var zd = /@media\s(.*)/;
  var Ad = /\{[^}]*\}/g;
  var Bd = new Set();
  function T(a, b) {
    if (!a) {
      return "";
    }
    if (typeof a === "string") {
      a = hd(a);
    }
    if (b) {
      Cd(a, b);
    }
    return nd(a, S);
  }
  function Dd(a) {
    if (!a.__cssRules && a.textContent) {
      a.__cssRules = hd(a.textContent);
    }
    return a.__cssRules || null;
  }
  function Ed(a) {
    return !!a.parent && a.parent.type === 7;
  }
  function Cd(a, b, c, d) {
    if (a) {
      var e = false;
      var f = a.type;
      if (d && f === 4) {
        var g = a.selector.match(zd);
        if (g) {
          if (!window.matchMedia(g[1]).matches) {
            e = true;
          }
        }
      }
      if (f === 1) {
        b(a);
      } else if (c && f === 7) {
        c(a);
      } else if (f === 1000) {
        e = true;
      }
      if ((a = a.rules) && !e) {
        e = 0;
        f = a.length;
        g = undefined;
        for (; e < f && (g = a[e]); e++) {
          Cd(g, b, c, d);
        }
      }
    }
  }
  function Fd(a, b, c, d) {
    var e = document.createElement("style");
    if (b) {
      e.setAttribute("scope", b);
    }
    e.textContent = a;
    if (window.enableHotReplacement && (a = document.head.querySelector("style[scope=" + b + "]"))) {
      a.parentElement.replaceChild(e, a);
      return e;
    }
    Gd(e, c, d);
    return e;
  }
  var U = null;
  function Hd(a) {
    a = document.createComment(" Shady DOM styles for " + a + " ");
    var b = document.head;
    b.insertBefore(a, (U ? U.nextSibling : null) || b.firstChild);
    return U = a;
  }
  function Gd(a, b, c) {
    b = b || document.head;
    b.insertBefore(a, c && c.nextSibling || b.firstChild);
    if (U) {
      if (a.compareDocumentPosition(U) === Node.DOCUMENT_POSITION_PRECEDING) {
        U = a;
      }
    } else {
      U = a;
    }
  }
  function Id(a, b) {
    var c = 0;
    for (var d = a.length; b < d; b++) {
      if (a[b] === "(") {
        c++;
      } else if (a[b] === ")" && --c === 0) {
        return b;
      }
    }
    return -1;
  }
  function Jd(a, b) {
    var c = a.indexOf("var(");
    if (c === -1) {
      return b(a, "", "", "");
    }
    var d = Id(a, c + 3);
    var e = a.substring(c + 4, d);
    c = a.substring(0, c);
    a = Jd(a.substring(d + 1), b);
    d = e.indexOf(",");
    if (d === -1) {
      return b(c, e.trim(), "", a);
    } else {
      return b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a);
    }
  }
  function Kd(a, b) {
    if (Q) {
      a.setAttribute("class", b);
    } else {
      window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b);
    }
  }
  var Ld = window.ShadyDOM && window.ShadyDOM.wrap || function (a) {
    return a;
  };
  function V(a) {
    var b = a.localName;
    var c = "";
    if (b) {
      if (!(b.indexOf("-") > -1)) {
        c = b;
        b = a.getAttribute && a.getAttribute("is") || "";
      }
    } else {
      b = a.is;
      c = a.extends;
    }
    return {
      is: b,
      V: c
    };
  }
  function Md(a) {
    var b = [];
    var c = "";
    for (var d = 0; d >= 0 && d < a.length; d++) {
      if (a[d] === "(") {
        var e = Id(a, d);
        c += a.slice(d, e + 1);
        d = e;
      } else if (a[d] === ",") {
        b.push(c);
        c = "";
      } else {
        c += a[d];
      }
    }
    if (c) {
      b.push(c);
    }
    return b;
  }
  function Nd(a) {
    if (ud !== undefined) {
      return ud;
    }
    if (a.__cssBuild === undefined) {
      var b = a.getAttribute("css-build");
      if (b) {
        a.__cssBuild = b;
      } else {
        a: {
          b = a.localName === "template" ? a.content.firstChild : a.firstChild;
          if (b instanceof Comment && (b = b.textContent.trim().split(":"), b[0] === "css-build")) {
            b = b[1];
            break a;
          }
          b = "";
        }
        if (b !== "") {
          var c = a.localName === "template" ? a.content.firstChild : a.firstChild;
          c.parentNode.removeChild(c);
        }
        a.__cssBuild = b;
      }
    }
    return a.__cssBuild || "";
  }
  function Od(a) {
    a = a === undefined ? "" : a;
    if (a !== "" && S) {
      if (Q) {
        return a === "shadow";
      } else {
        return a === "shady";
      }
    } else {
      return false;
    }
  }
  ;
  function Pd(a, b) {
    var c = window.shadyCSSStyleTransformHooks;
    if (c && (c = c.didTransformSelector, typeof c === "function")) {
      return c(a, b);
    } else {
      return a;
    }
  }
  function Qd() {}
  da.Object.defineProperties(Qd.prototype, {
    W: {
      configurable: true,
      enumerable: true,
      get: function () {
        return "style-scope";
      }
    }
  });
  function Rd(a, b) {
    var c = W;
    c.aa(a, function (d) {
      c.element(d, b || "");
    });
  }
  k = Qd.prototype;
  k.aa = function (a, b) {
    if (a.nodeType === Node.ELEMENT_NODE) {
      b(a);
    }
    if (a = a.localName === "template" ? (a.content || a._content || a).childNodes : a.children || a.childNodes) {
      for (var c = 0; c < a.length; c++) {
        this.aa(a[c], b);
      }
    }
  };
  k.element = function (a, b, c) {
    if (b) {
      if (a.classList) {
        if (c) {
          a.classList.remove("style-scope");
          a.classList.remove(b);
        } else {
          a.classList.add("style-scope");
          a.classList.add(b);
        }
      } else if (a.getAttribute) {
        var d = a.getAttribute("class");
        if (c) {
          if (d) {
            b = d.replace("style-scope", "").replace(b, "");
            Kd(a, b);
          }
        } else {
          Kd(a, (d ? d + " " : "") + "style-scope " + b);
        }
      }
    }
  };
  function Sd(a, b, c) {
    var d = W;
    d.aa(a, function (e) {
      d.element(e, b, true);
      d.element(e, c);
    });
  }
  function Td(a, b) {
    var c = W;
    c.aa(a, function (d) {
      c.element(d, b || "", true);
    });
  }
  function Ud(a, b, c, d, e) {
    var f = W;
    e = e === undefined ? "" : e;
    if (e === "") {
      if (Q || (d === undefined ? "" : d) === "shady") {
        e = T(b, c);
      } else {
        a = V(a);
        e = Vd(f, b, a.is, a.V, c) + "\n\n";
      }
    }
    return e.trim();
  }
  function Vd(a, b, c, d, e) {
    var f = a.ia(c, d);
    c = a.va(c);
    return T(b, function (g) {
      if (!g.Vb) {
        a.Ha(g, a.na, c, f);
        g.Vb = true;
      }
      if (e) {
        e(g, c, f);
      }
    });
  }
  k.va = function (a) {
    if (a) {
      return "." + a;
    } else {
      return "";
    }
  };
  k.ia = function (a, b) {
    if (b) {
      return "[is=" + a + "]";
    } else {
      return a;
    }
  };
  k.Ha = function (a, b, c, d) {
    a.selector = a.u = this.Ia(a, b, c, d);
  };
  k.Ia = function (a, b, c, d) {
    var e = Md(a.selector);
    if (!Ed(a)) {
      a = 0;
      for (var f = e.length, g = undefined; a < f && (g = e[a]); a++) {
        e[a] = b.call(this, g, c, d);
      }
    }
    return e.filter(function (h) {
      return !!h;
    }).join(",");
  };
  k.Ka = function (a) {
    return a.replace(Wd, function (b, c, d) {
      if (d.indexOf("+") > -1) {
        d = d.replace(/\+/g, "___");
      } else if (d.indexOf("___") > -1) {
        d = d.replace(/___/g, "+");
      }
      return ":" + c + "(" + d + ")";
    });
  };
  k.yb = function (a) {
    var b = [];
    for (var c; c = a.match(Xd);) {
      var d = c.index;
      var e = Id(a, d);
      if (e === -1) {
        throw Error(c.input + " selector missing ')'");
      }
      c = a.slice(d, e + 1);
      a = a.replace(c, "");
      b.push(c);
    }
    return {
      sa: a,
      matches: b
    };
  };
  k.Cb = function (a, b) {
    var c = a.split("");
    return b.reduce(function (d, e, f) {
      return d + e + c[f + 1];
    }, c[0]);
  };
  k.na = function (a, b, c) {
    var d = this;
    var e = false;
    a = a.trim();
    var f = Wd.test(a);
    if (f) {
      a = a.replace(Wd, function (l, m, n) {
        return ":" + m + "(" + n.replace(/\s/g, "") + ")";
      });
      a = this.Ka(a);
    }
    var g = Xd.test(a);
    if (g) {
      var h = this.yb(a);
      a = h.sa;
      h = h.matches;
    }
    a = a.replace(Yd, ":host $1");
    a = a.replace(Zd, function (l, m, n) {
      if (!e) {
        l = d.Ib(n, m, b, c);
        e = e || l.stop;
        m = l.Ob;
        n = l.value;
      }
      return m + n;
    });
    if (g) {
      a = this.Cb(a, h);
    }
    if (f) {
      a = this.Ka(a);
    }
    a = a.replace($d, function (l, m, n, t) {
      return "[dir=\"" + n + "\"] " + m + t + ", " + m + "[dir=\"" + n + "\"]" + t;
    });
    return Pd(a, b);
  };
  k.Ib = function (a, b, c, d) {
    var e = a.indexOf("::slotted");
    if (a.indexOf(":host") >= 0) {
      a = this.Kb(a, d);
    } else if (e !== 0) {
      a = c ? this.Ja(a, c) : a;
    }
    c = false;
    if (e >= 0) {
      b = "";
      c = true;
    }
    if (c) {
      var f = true;
      if (c) {
        a = a.replace(ae, function (g, h) {
          return " > " + h;
        });
      }
    }
    return {
      value: a,
      Ob: b,
      stop: f
    };
  };
  k.Ja = function (a, b) {
    a = a.split(/(\[.+?\])/);
    var c = [];
    for (var d = 0; d < a.length; d++) {
      if (d % 2 === 1) {
        c.push(a[d]);
      } else {
        var e = a[d];
        if (e !== "" || d !== a.length - 1) {
          e = e.split(":");
          e[0] += b;
          c.push(e.join(":"));
        }
      }
    }
    return c.join("");
  };
  k.Kb = function (a, b) {
    var c = a.match(be);
    if (c = c && c[2].trim() || "") {
      if (c[0].match(ce)) {
        return a.replace(be, function (d, e, f) {
          return b + f;
        });
      } else if (c.split(ce)[0] === b) {
        return c;
      } else {
        return "should_not_match";
      }
    } else {
      return a.replace(":host", b);
    }
  };
  function de(a) {
    if (a.selector === ":root") {
      a.selector = "html";
    }
  }
  k.Jb = function (a) {
    if (a.match(":host")) {
      return "";
    } else if (a.match("::slotted")) {
      return this.na(a, ":not(.style-scope)");
    } else {
      return Pd(this.Ja(a.trim(), ":not(.style-scope)"), ":not(.style-scope)");
    }
  };
  var Wd = /:(nth[-\w]+)\(([^)]+)\)/;
  var Zd = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g;
  var ce = /[[.:#*]/;
  var Yd = RegExp("^(::slotted)");
  var be = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/;
  var ae = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/;
  var $d = /(.*):dir\((?:(ltr|rtl))\)(.*)/;
  var Xd = /:(?:matches|any|-(?:webkit|moz)-any)/;
  var W = new Qd();
  function ee(a, b, c, d, e) {
    this.B = a || null;
    this.placeholder = b || null;
    this.qa = c || [];
    this.N = null;
    this.cssBuild = e || "";
    this.V = d || "";
    this.L = this.A = this.F = null;
  }
  function X(a) {
    if (a) {
      return a.__styleInfo;
    } else {
      return null;
    }
  }
  function fe(a, b) {
    return a.__styleInfo = b;
  }
  ee.prototype.ob = function () {
    return this.B;
  };
  ee.prototype._getStyleRules = ee.prototype.ob;
  function ge(a) {
    var b = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;
    return b && b.call(this, a);
  }
  var he = /:host\s*>\s*/;
  var ie = navigator.userAgent.match("Trident");
  function je() {}
  da.Object.defineProperties(je.prototype, {
    Sa: {
      configurable: true,
      enumerable: true,
      get: function () {
        return "x-scope";
      }
    }
  });
  function ke(a) {
    var b = {};
    var c = [];
    var d = 0;
    Cd(a, function (f) {
      le(f);
      f.index = d++;
      f = f.m.cssText;
      for (var g; g = xd.exec(f);) {
        var h = g[1];
        if (g[2] !== ":") {
          b[h] = true;
        }
      }
    }, function (f) {
      c.push(f);
    });
    a.qb = c;
    a = [];
    for (var e in b) {
      a.push(e);
    }
    return a;
  }
  function le(a) {
    if (!a.m) {
      var b = {};
      var c = {};
      if (me(a, c)) {
        b.D = c;
        a.rules = null;
      }
      b.cssText = a.parsedCssText.replace(Ad, "").replace(vd, "");
      a.m = b;
    }
  }
  function me(a, b) {
    var c = a.m;
    if (c) {
      if (c.D) {
        Object.assign(b, c.D);
        return true;
      }
    } else {
      c = a.parsedCssText;
      var d;
      for (; a = vd.exec(c);) {
        d = (a[2] || a[3]).trim();
        if (d !== "inherit" || d !== "unset") {
          b[a[1].trim()] = d;
        }
        d = true;
      }
      return d;
    }
  }
  function ne(a, b, c) {
    b &&= b.indexOf(";") >= 0 ? oe(a, b, c) : Jd(b, function (d, e, f, g) {
      if (!e) {
        return d + g;
      }
      if ((e = ne(a, c[e], c)) && e !== "initial") {
        if (e === "apply-shim-inherit") {
          e = "inherit";
        }
      } else {
        e = ne(a, c[f] || f, c) || f;
      }
      return d + (e || "") + g;
    });
    return b && b.trim() || "";
  }
  function oe(a, b, c) {
    b = b.split(";");
    for (var d = 0, e, f; d < b.length; d++) {
      if (e = b[d]) {
        wd.lastIndex = 0;
        if (f = wd.exec(e)) {
          e = ne(a, c[f[1]], c);
        } else {
          f = e.indexOf(":");
          if (f !== -1) {
            var g = e.substring(f);
            g = g.trim();
            g = ne(a, g, c) || g;
            e = e.substring(0, f) + g;
          }
        }
        b[d] = e && e.lastIndexOf(";") === e.length - 1 ? e.slice(0, -1) : e || "";
      }
    }
    return b.join(";");
  }
  function pe(a, b) {
    var c = {};
    var d = [];
    Cd(a, function (e) {
      if (!e.m) {
        le(e);
      }
      var f = e.u || e.parsedSelector;
      if (b && e.m.D && f && ge.call(b, f)) {
        me(e, c);
        e = e.index;
        f = parseInt(e / 32, 10);
        d[f] = (d[f] || 0) | 1 << e % 32;
      }
    }, null, true);
    return {
      D: c,
      key: d
    };
  }
  function qe(a, b, c, d) {
    if (!b.m) {
      le(b);
    }
    if (b.m.D) {
      var e = V(a);
      a = e.is;
      e = e.V;
      e = a ? W.ia(a, e) : "html";
      var f = b.parsedSelector;
      var g = !!f.match(he) || e === "html" && f.indexOf("html") > -1;
      var h = f.indexOf(":host") === 0 && !g;
      if (c === "shady") {
        g = f === e + " > *." + e || f.indexOf("html") !== -1;
        h = !g && f.indexOf(e) === 0;
      }
      if (g || h) {
        c = e;
        if (h) {
          b.u ||= W.Ia(b, W.na, W.va(a), e);
          c = b.u || e;
        }
        if (g && e === "html") {
          c = b.u || b.jc;
        }
        d({
          sa: c,
          Ub: h,
          hc: g
        });
      }
    }
  }
  function re(a, b, c) {
    var d = {};
    var e = {};
    Cd(b, function (f) {
      qe(a, f, c, function (g) {
        if (ge.call(a._element || a, g.sa)) {
          if (g.Ub) {
            me(f, d);
          } else {
            me(f, e);
          }
        }
      });
    }, null, true);
    return {
      Yb: e,
      Tb: d
    };
  }
  function se(a, b, c, d) {
    var e = V(b);
    var f = W.ia(e.is, e.V);
    var g = new RegExp("(?:^|[^.#[:])" + (b.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])");
    var h = X(b);
    e = h.B;
    h = h.cssBuild;
    var l = a.eb(b, e, d);
    return Ud(b, e, function (m) {
      var n = "";
      if (!m.m) {
        le(m);
      }
      if (m.m.cssText) {
        n = oe(a, m.m.cssText, c);
      }
      m.cssText = n;
      if (!Q && !Ed(m) && m.cssText) {
        var t = n = m.cssText;
        if (m.Ma == null) {
          m.Ma = yd.test(n);
        }
        if (m.Ma) {
          if (m.ea == null) {
            m.ea = [];
            for (var A in l) {
              t = l[A];
              t = t(n);
              if (n !== t) {
                n = t;
                m.ea.push(A);
              }
            }
          } else {
            for (A = 0; A < m.ea.length; ++A) {
              t = l[m.ea[A]];
              n = t(n);
            }
            t = n;
          }
        }
        m.cssText = t;
        a.Gb(m, g, f, d);
      }
    }, h);
  }
  je.prototype.eb = function (a, b, c) {
    a = b.qb;
    b = {};
    if (!Q && a) {
      for (var d = 0, e = a[d]; d < a.length; e = a[++d]) {
        this.Fb(e, c);
        b[e.keyframesName] = this.rb(e);
      }
    }
    return b;
  };
  je.prototype.rb = function (a) {
    return function (b) {
      return b.replace(a.Wb, a.Qa);
    };
  };
  je.prototype.Fb = function (a, b) {
    a.Wb = new RegExp("\\b" + a.keyframesName + "(?!\\B|-)", "g");
    a.Qa = a.keyframesName + "-" + b;
    a.u = a.u || a.selector;
    a.selector = a.u.replace(a.keyframesName, a.Qa);
  };
  je.prototype.Gb = function (a, b, c, d) {
    a.u = a.u || a.selector;
    d = "." + d;
    for (var e = Md(a.u), f = 0, g = e.length, h = undefined; f < g && (h = e[f]); f++) {
      e[f] = h.match(b) ? h.replace(c, d) : d + " " + h;
    }
    a.selector = e.join(",");
  };
  function te(a, b) {
    var c = ue;
    var d = Dd(a);
    a.textContent = T(d, function (e) {
      var f = e.cssText = e.parsedCssText;
      if (e.m && e.m.cssText) {
        f = f.replace(od, "").replace(pd, "");
        e.cssText = oe(c, f, b);
      }
    });
  }
  var ue = new je();
  var ve = {};
  var we = window.customElements;
  if (we && !Q && !R) {
    var xe = we.define;
    we.define = function (a, b, c) {
      ve[a] ||= Hd(a);
      xe.call(we, a, b, c);
    };
  }
  ;
  function ye() {
    var a = a === undefined ? 100 : a;
    this.cache = {};
    this.dc = a;
  }
  ye.prototype.Nb = function (a, b, c) {
    for (var d = 0; d < c.length; d++) {
      var e = c[d];
      if (a.D[e] !== b[e]) {
        return false;
      }
    }
    return true;
  };
  ye.prototype.store = function (a, b, c, d) {
    var e = this.cache[a] || [];
    e.push({
      D: b,
      styleElement: c,
      A: d
    });
    if (e.length > this.dc) {
      e.shift();
    }
    this.cache[a] = e;
  };
  ye.prototype.fetch = function (a, b, c) {
    if (a = this.cache[a]) {
      for (var d = a.length - 1; d >= 0; d--) {
        var e = a[d];
        if (this.Nb(e, b, c)) {
          return e;
        }
      }
    }
  };
  function ze() {}
  var Ae = new RegExp(W.W + "\\s*([^\\s]*)");
  function Be(a) {
    if (a = (a.classList && a.classList.value ? a.classList.value : a.getAttribute("class") || "").match(Ae)) {
      return a[1];
    } else {
      return "";
    }
  }
  function Ce(a) {
    var b = Ld(a).getRootNode();
    if (b === a || b === a.ownerDocument) {
      return "";
    } else if (a = b.host) {
      return V(a).is;
    } else {
      return "";
    }
  }
  function De(a) {
    for (var b = 0; b < a.length; b++) {
      var c = a[b];
      if (c.target !== document.documentElement && c.target !== document.head) {
        for (var d = 0; d < c.addedNodes.length; d++) {
          var e = c.addedNodes[d];
          if (e.nodeType === Node.ELEMENT_NODE) {
            var f = e.getRootNode();
            var g = Be(e);
            if (g && f === e.ownerDocument && (e.localName !== "style" && e.localName !== "template" || Nd(e) === "")) {
              Td(e, g);
            } else if (f instanceof ShadowRoot) {
              f = Ce(e);
              if (f !== g) {
                Sd(e, g, f);
              }
              g = window.ShadyDOM.nativeMethods.querySelectorAll.call(e, ":not(." + W.W + ")");
              f = 0;
              for (; f < g.length; f++) {
                e = g[f];
                var h = Ce(e);
                if (h) {
                  W.element(e, h);
                }
              }
            }
          }
        }
      }
    }
  }
  if (!Q && (!window.ShadyDOM || !window.ShadyDOM.handlesDynamicScoping)) {
    var Ee = new MutationObserver(De);
    function Fe(a) {
      Ee.observe(a, {
        childList: true,
        subtree: true
      });
    }
    if (window.customElements && !window.customElements.polyfillWrapFlushCallback) {
      Fe(document);
    } else {
      function Ge() {
        Fe(document.body);
      }
      if (window.HTMLImports) {
        window.HTMLImports.whenReady(Ge);
      } else {
        requestAnimationFrame(function () {
          if (document.readyState === "loading") {
            function a() {
              Ge();
              document.removeEventListener("readystatechange", a);
            }
            document.addEventListener("readystatechange", a);
          } else {
            Ge();
          }
        });
      }
    }
    ze = function () {
      De(Ee.takeRecords());
    };
  }
  ;
  var He = {};
  var Ie = Promise.resolve();
  function Je(a) {
    if (a = He[a]) {
      a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0;
      a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0;
      a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1;
    }
  }
  function Ke(a) {
    return a._applyShimCurrentVersion === a._applyShimNextVersion;
  }
  function Le(a) {
    a._applyShimValidatingVersion = a._applyShimNextVersion;
    if (!a._validating) {
      a._validating = true;
      Ie.then(function () {
        a._applyShimCurrentVersion = a._applyShimNextVersion;
        a._validating = false;
      });
    }
  }
  ;
  var Me = {};
  var Ne = new ye();
  function Y() {
    this.Fa = {};
    this.J = document.documentElement;
    var a = new gd();
    a.rules = [];
    this.C = fe(this.J, new ee(a));
    this.ja = false;
    this.i = this.o = null;
  }
  k = Y.prototype;
  k.flush = function () {
    ze();
  };
  k.kb = function (a) {
    var b = this.Fa[a] = (this.Fa[a] || 0) + 1;
    return a + "-" + b;
  };
  k.Rb = function (a) {
    return Dd(a);
  };
  k.cc = function (a) {
    return T(a);
  };
  k.jb = function (a) {
    var b = [];
    a = a.content.querySelectorAll("style");
    for (var c = 0; c < a.length; c++) {
      var d = a[c];
      if (d.hasAttribute("shady-unscoped")) {
        if (!Q) {
          var e = d.textContent;
          if (!Bd.has(e)) {
            Bd.add(e);
            var f = document.createElement("style");
            f.setAttribute("shady-unscoped", "");
            f.textContent = e;
            document.head.appendChild(f);
          }
          d.parentNode.removeChild(d);
        }
      } else {
        b.push(d.textContent);
        d.parentNode.removeChild(d);
      }
    }
    return b.join("").trim();
  };
  k.prepareTemplate = function (a, b, c) {
    this.prepareTemplateDom(a, b);
    this.prepareTemplateStyles(a, b, c);
  };
  k.prepareTemplateStyles = function (a, b, c) {
    if (!a._prepared && !R) {
      if (!Q && !ve[b]) {
        ve[b] = Hd(b);
      }
      a._prepared = true;
      a.name = b;
      a.extends = c;
      He[b] = a;
      var d = Nd(a);
      var e = Od(d);
      c = {
        is: b,
        extends: c
      };
      var f = this.jb(a) + (Me[b] || "");
      this.O();
      if (!e) {
        var g;
        if (g = !d) {
          g = wd.test(f) || vd.test(f);
          wd.lastIndex = 0;
          vd.lastIndex = 0;
        }
        var h = hd(f);
        if (g && S && this.o) {
          this.o.transformRules(h, b);
        }
        a._styleAst = h;
      }
      g = [];
      if (!S) {
        g = ke(a._styleAst);
      }
      if (!g.length || S) {
        b = this.lb(c, a._styleAst, Q ? a.content : null, ve[b] || null, d, e ? f : "");
        a._style = b;
      }
      a.xb = g;
    }
  };
  k.prepareAdoptedCssText = function (a, b) {
    Me[b] = a.join(" ");
  };
  k.prepareTemplateDom = function (a, b) {
    if (!R) {
      var c = Nd(a);
      if (!Q && c !== "shady" && !a._domPrepared) {
        a._domPrepared = true;
        Rd(a.content, b);
      }
    }
  };
  k.lb = function (a, b, c, d, e, f) {
    f = Ud(a, b, null, e, f);
    if (f.length) {
      return Fd(f, a.is, c, d);
    } else {
      return null;
    }
  };
  k.Da = function (a) {
    var b = V(a);
    var c = b.is;
    b = b.V;
    var d = ve[c] || null;
    var e = He[c];
    if (e) {
      c = e._styleAst;
      var f = e.xb;
      e = Nd(e);
      b = new ee(c, d, f, b, e);
      fe(a, b);
      return b;
    }
  };
  k.fb = function () {
    if (!this.o && window.ShadyCSS && window.ShadyCSS.ApplyShim) {
      this.o = window.ShadyCSS.ApplyShim;
      this.o.invalidCallback = Je;
      return true;
    } else {
      return false;
    }
  };
  k.gb = function () {
    var a = this;
    if (!this.i && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface) {
      this.i = window.ShadyCSS.CustomStyleInterface;
      this.i.transformCallback = function (b) {
        a.Pa(b);
      };
      this.i.validateCallback = function () {
        requestAnimationFrame(function () {
          if (a.i.enqueued || a.ja) {
            a.flushCustomStyles();
          }
        });
      };
    }
  };
  k.O = function () {
    var a = this.fb();
    this.gb();
    return a;
  };
  k.flushCustomStyles = function () {
    if (!R) {
      var a = this.O();
      if (this.i) {
        var b = this.i.processStyles();
        if ((!!a || !!this.i.enqueued) && !Od(this.C.cssBuild)) {
          if (S) {
            if (!this.C.cssBuild) {
              this.Eb(b);
            }
          } else {
            this.Bb(b);
            this.oa(this.J, this.C);
            this.Wa(b);
            if (this.ja) {
              this.styleDocument();
            }
          }
          this.i.enqueued = false;
        }
      }
    }
  };
  k.Bb = function (a) {
    var b = this;
    a = a.map(function (c) {
      return b.i.getStyleForCustomStyle(c);
    }).filter(function (c) {
      return !!c;
    });
    a.sort(function (c, d) {
      c = d.compareDocumentPosition(c);
      if (c & Node.DOCUMENT_POSITION_FOLLOWING) {
        return 1;
      } else if (c & Node.DOCUMENT_POSITION_PRECEDING) {
        return -1;
      } else {
        return 0;
      }
    });
    this.C.B.rules = a.map(function (c) {
      return Dd(c);
    });
  };
  k.styleElement = function (a, b) {
    if (R) {
      if (b) {
        if (!X(a)) {
          fe(a, new ee(null));
        }
        var c = X(a);
        this.Ba(c, b);
        Oe(this, a, c);
      }
    } else if (c = X(a) || this.Da(a)) {
      if (!this.ka(a)) {
        this.ja = true;
      }
      if (b) {
        this.Ba(c, b);
      }
      if (S) {
        Oe(this, a, c);
      } else {
        this.flush();
        this.oa(a, c);
        if (c.qa && c.qa.length) {
          this.Xa(a, c);
        }
      }
    }
  };
  k.Ba = function (a, b) {
    a.N = a.N || {};
    Object.assign(a.N, b);
  };
  function Oe(a, b, c) {
    var d = V(b).is;
    if (c.N) {
      var e = c.N;
      var f;
      for (f in e) {
        if (f === null) {
          b.style.removeProperty(f);
        } else {
          b.style.setProperty(f, e[f]);
        }
      }
    }
    if (((e = He[d]) || a.ka(b)) && (!e || Nd(e) === "") && e && e._style && !Ke(e)) {
      if (Ke(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) {
        a.O();
        if (a.o) {
          a.o.transformRules(e._styleAst, d);
        }
        e._style.textContent = Ud(b, c.B);
        Le(e);
      }
      if (Q && (a = b.shadowRoot) && (a = a.querySelector("style"))) {
        a.textContent = Ud(b, c.B);
      }
      c.B = e._styleAst;
    }
  }
  k.ma = function (a) {
    if (a = Ld(a).getRootNode().host) {
      if (X(a) || this.Da(a)) {
        return a;
      } else {
        return this.ma(a);
      }
    } else {
      return this.J;
    }
  };
  k.ka = function (a) {
    return a === this.J;
  };
  k.Xa = function (a, b) {
    var c = V(a).is;
    var d = Ne.fetch(c, b.F, b.qa);
    var e = d ? d.styleElement : null;
    var f = b.A;
    b.A = d && d.A || this.kb(c);
    var g = b.F;
    var h = b.A;
    var l = ue;
    g = e ? e.textContent || "" : se(l, a, g, h);
    l = X(a);
    var m = l.L;
    if (m && !Q && m !== e) {
      m._useCount--;
      if (m._useCount <= 0 && m.parentNode) {
        m.parentNode.removeChild(m);
      }
    }
    if (Q) {
      if (l.L) {
        l.L.textContent = g;
        e = l.L;
      } else if (g) {
        e = Fd(g, h, a.shadowRoot, l.placeholder);
      }
    } else if (e) {
      if (!e.parentNode) {
        if (ie && g.indexOf("@media") > -1) {
          e.textContent = g;
        }
        Gd(e, null, l.placeholder);
      }
    } else if (g) {
      e = Fd(g, h, null, l.placeholder);
    }
    if (e) {
      e._useCount = e._useCount || 0;
      if (l.L != e) {
        e._useCount++;
      }
      l.L = e;
    }
    h = e;
    if (!Q) {
      e = b.A;
      l = g = a.getAttribute("class") || "";
      if (f) {
        l = g.replace(new RegExp("\\s*x-scope\\s*" + f + "\\s*", "g"), " ");
      }
      l += (l ? " " : "") + "x-scope " + e;
      if (g !== l) {
        Kd(a, l);
      }
    }
    if (!d) {
      Ne.store(c, b.F, h, b.A);
    }
    return h;
  };
  k.oa = function (a, b) {
    var c = this.ma(a);
    var d = X(c);
    var e = d.F;
    if (c !== this.J && !e) {
      this.oa(c, d);
      e = d.F;
    }
    c = Object.create(e || null);
    e = re(a, b.B, b.cssBuild);
    a = pe(d.B, a).D;
    Object.assign(c, e.Tb, a, e.Yb);
    this.tb(c, b.N);
    a = ue;
    d = Object.getOwnPropertyNames(c);
    e = 0;
    var f;
    for (; e < d.length; e++) {
      f = d[e];
      c[f] = ne(a, c[f], c);
    }
    b.F = c;
  };
  k.tb = function (a, b) {
    for (var c in b) {
      var d = b[c];
      if (d || d === 0) {
        a[c] = d;
      }
    }
  };
  k.styleDocument = function (a) {
    this.styleSubtree(this.J, a);
  };
  k.styleSubtree = function (a, b) {
    var c = Ld(a);
    var d = c.shadowRoot;
    var e = this.ka(a);
    if (d || e) {
      this.styleElement(a, b);
    }
    if (a = e ? c : d) {
      a = Array.from(a.querySelectorAll("*")).filter(function (f) {
        return Ld(f).shadowRoot;
      });
      b = 0;
      for (; b < a.length; b++) {
        this.styleSubtree(a[b]);
      }
    }
  };
  k.Eb = function (a) {
    for (var b = 0; b < a.length; b++) {
      var c = this.i.getStyleForCustomStyle(a[b]);
      if (c) {
        this.Db(c);
      }
    }
  };
  k.Wa = function (a) {
    for (var b = 0; b < a.length; b++) {
      var c = this.i.getStyleForCustomStyle(a[b]);
      if (c) {
        te(c, this.C.F);
      }
    }
  };
  k.Pa = function (a) {
    var b = this;
    var c = Nd(a);
    if (c !== this.C.cssBuild) {
      this.C.cssBuild = c;
    }
    if (!Od(c)) {
      var d = Dd(a);
      Cd(d, function (e) {
        if (Q) {
          de(e);
        } else {
          var f = W;
          e.selector = e.parsedSelector;
          de(e);
          f.Ha(e, f.Jb);
        }
        if (S && c === "") {
          b.O();
          if (b.o) {
            b.o.transformRule(e);
          }
        }
      });
      if (S) {
        a.textContent = T(d);
      } else {
        this.C.B.rules.push(d);
      }
    }
  };
  k.Db = function (a) {
    if (S && this.o) {
      var b = Dd(a);
      this.O();
      this.o.transformRules(b);
      a.textContent = T(b);
    }
  };
  k.getComputedStyleValue = function (a, b) {
    var c;
    if (!S) {
      c = (X(a) || X(this.ma(a))).F[b];
    }
    if (c = c || window.getComputedStyle(a).getPropertyValue(b)) {
      return c.trim();
    } else {
      return "";
    }
  };
  k.bc = function (a, b) {
    var c = Ld(a).getRootNode();
    b = b ? (typeof b === "string" ? b : String(b)).split(/\s/) : [];
    c = c.host && c.host.localName;
    if (!c) {
      var d = a.getAttribute("class");
      if (d) {
        d = d.split(/\s/);
        for (var e = 0; e < d.length; e++) {
          if (d[e] === W.W) {
            c = d[e + 1];
            break;
          }
        }
      }
    }
    if (c) {
      b.push(W.W, c);
    }
    if (!S) {
      if ((c = X(a)) && c.A) {
        b.push(ue.Sa, c.A);
      }
    }
    Kd(a, b.join(" "));
  };
  k.Hb = function (a) {
    return X(a);
  };
  k.ac = function (a, b) {
    W.element(a, b);
  };
  k.ec = function (a, b) {
    W.element(a, b, true);
  };
  k.Zb = function (a) {
    return Ce(a);
  };
  k.Qb = function (a) {
    return Be(a);
  };
  Y.prototype.flush = Y.prototype.flush;
  Y.prototype.prepareTemplate = Y.prototype.prepareTemplate;
  Y.prototype.styleElement = Y.prototype.styleElement;
  Y.prototype.styleDocument = Y.prototype.styleDocument;
  Y.prototype.styleSubtree = Y.prototype.styleSubtree;
  Y.prototype.getComputedStyleValue = Y.prototype.getComputedStyleValue;
  Y.prototype.setElementClass = Y.prototype.bc;
  Y.prototype._styleInfoForNode = Y.prototype.Hb;
  Y.prototype.transformCustomStyleForDocument = Y.prototype.Pa;
  Y.prototype.getStyleAst = Y.prototype.Rb;
  Y.prototype.styleAstToString = Y.prototype.cc;
  Y.prototype.flushCustomStyles = Y.prototype.flushCustomStyles;
  Y.prototype.scopeNode = Y.prototype.ac;
  Y.prototype.unscopeNode = Y.prototype.ec;
  Y.prototype.scopeForNode = Y.prototype.Zb;
  Y.prototype.currentScopeForNode = Y.prototype.Qb;
  Y.prototype.prepareAdoptedCssText = Y.prototype.prepareAdoptedCssText;
  Object.defineProperties(Y.prototype, {
    nativeShadow: {
      get: function () {
        return Q;
      }
    },
    nativeCss: {
      get: function () {
        return S;
      }
    }
  });
  var Z = new Y();
  var Pe;
  var Qe;
  if (window.ShadyCSS) {
    Pe = window.ShadyCSS.ApplyShim;
    Qe = window.ShadyCSS.CustomStyleInterface;
  }
  window.ShadyCSS = {
    ScopingShim: Z,
    prepareTemplate: function (a, b, c) {
      Z.flushCustomStyles();
      Z.prepareTemplate(a, b, c);
    },
    prepareTemplateDom: function (a, b) {
      Z.prepareTemplateDom(a, b);
    },
    prepareTemplateStyles: function (a, b, c) {
      Z.flushCustomStyles();
      Z.prepareTemplateStyles(a, b, c);
    },
    styleSubtree: function (a, b) {
      Z.flushCustomStyles();
      Z.styleSubtree(a, b);
    },
    styleElement: function (a) {
      Z.flushCustomStyles();
      Z.styleElement(a);
    },
    styleDocument: function (a) {
      Z.flushCustomStyles();
      Z.styleDocument(a);
    },
    flushCustomStyles: function () {
      Z.flushCustomStyles();
    },
    getComputedStyleValue: function (a, b) {
      return Z.getComputedStyleValue(a, b);
    },
    nativeCss: S,
    nativeShadow: Q,
    cssBuild: ud,
    disableRuntime: R
  };
  if (Pe) {
    window.ShadyCSS.ApplyShim = Pe;
  }
  if (Qe) {
    window.ShadyCSS.CustomStyleInterface = Qe;
  }
})();
//# sourceMappingURL=blaze-out/k8-opt/bin/third_party/javascript/polymer/v2/webcomponentsjs/webcomponents-sd.js.sourcemap