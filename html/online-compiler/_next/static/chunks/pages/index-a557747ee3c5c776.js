(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
      8312: function (e, n, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
          return t(8741)
        }])
      },
      8741: function (e, n, t) {
        "use strict";
        t.r(n), t.d(n, {
          __N_SSG: function () {
            return We
          },
          default: function () {
            return ze
          }
        });
        var o = t(4051),
          r = t.n(o),
          i = t(5893),
          l = t(7294),
          a = t(9008),
          d = t.n(a),
          c = t(5675),
          s = t.n(c),
          u = t(2770),
          p = t(412),
          f = null;
        if ("undefined" !== typeof window.navigator) {
          var v = t(9656).fk;
          f = v, t(9589), t(6629), t(1855), t(9958), t(5607), t(6876), t(1699), t(2095), t(4504)
        }
        var m = function (e) {
          var n = e.mode,
            t = e.onChange,
            o = e.value,
            r = (0, l.useContext)(p.TableContext).editorTheme;
          return (0, i.jsx)("div", {
            className: "bg-gray-10 overflow-y-auto h-full pb-[36px]",
            children: f ? (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)(f, {
                value: o,
                options: {
                  mode: n,
                  lineNumbers: !0,
                  lineWrapping: !0,
                  theme: "light" === r ? "base16-light" : "colorforth",
                  extraKeys: {
                    "Cmd-/": "toggleComment",
                    "Ctrl-/": "toggleComment"
                  }
                },
                onCursorActivity: function () {
                  "undefined" !== typeof window.navigator && window.dispatchEvent(new Event("resize"))
                },
                onBeforeChange: function (e, n, o) {
                  t(o)
                }
              })
            }) : null
          })
        };
        var h = t(4608);
  
        function x(e, n, t) {
          return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[n] = t, e
        }
  
        function g(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              o = Object.keys(t);
            "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })))), o.forEach((function (n) {
              x(e, n, t[n])
            }))
          }
          return e
        }
        var w = {
            name: "index",
            createdAt: Date.now() + 76,
            extension: "html",
            includedInTab: !0,
            parent: "rootFolder",
            path: "/",
            mode: "xml",
            active: !0,
            data: '\x3c!-- \nOnline HTML, CSS and JavaScript editor to run code online.\n--\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <link rel="stylesheet" href="style.css" />\n  <title>Browser</title>\n</head>\n\n<body>\n  <h1>\n    Write, edit and run HTML, CSS and JavaScript code online.\n  </h1>\n  <p>\n    Our HTML editor updates the webview automatically in real-time as you write code.\n  </p>\n  <script src="script.js"><\/script>\n</body>\n\n</html>'
          },
          b = ((new Date).getTime(), Date.now(), Date.now(), Date.now(), g({}, w), Date.now(), Date.now(), [{
            name: "rootFolder",
            createdAt: (new Date).getTime(),
            parent: null,
            path: "",
            children: [g({}, w), {
              name: "style",
              createdAt: Date.now() + 1,
              extension: "css",
              parent: "rootFolder",
              path: "/",
              includedInTab: !0,
              mode: "css",
              active: !1,
              data: "body {\n  margin: 20px;\n}\n          "
            }, {
              name: "script",
              createdAt: Date.now() + 2,
              parent: "rootFolder",
              path: "/",
              extension: "js",
              includedInTab: !0,
              active: !1,
              mode: "javascript",
              data: 'console.log("from script file");'
            }]
          }]),
          y = '\n<html>\n  <head>\n    <script>\n      window.console.mainLog = window.console.log;\n      function require(name){\n        try{\n          return window.parent.__test(name);\n        }catch(e){\n          console.log("rrr",e);\n        }\n        }\n      function hookLogType(logType, ...args) {\n        const original = console[logType].bind(console);\n        return function (...args) {\n          window.top.postMessage(\n            {\n              source: "editor-iframe",\n              message: {\n                type: logType,\n                value: args,\n              },\n            },\n            "*"\n          );\n          original.apply(console, arguments);\n        };\n      }\n   \n      \n      ["log", "error", "warn", "debug"].forEach((logType) => {\n        console[logType] = hookLogType(logType);\n      });\n      \n      window.scope = {};\n      \n      scope.run = function (code) {\n        let output = eval(code);\n        console.log( output);\n      };\n      \n      window.addEventListener("message", (data) => {\n        if (data.data.source === "parent-window") {\n          scope.run(data.data.msg);\n        }\n      });\n    <\/script>\n  </head>\n  <body>\n  </body>\n</html>';
  
        function j(e, n, t) {
          return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[n] = t, e
        }
  
        function k(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              o = Object.keys(t);
            "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })))), o.forEach((function (n) {
              j(e, n, t[n])
            }))
          }
          return e
        }
        var F, A, C, N, S, L, O, T, E, D = function (e) {
            var n = e.pages,
              t = e.activePage,
              o = e.setActivePage,
              r = function (e, n) {
                var t = e;
                return e.length > 6 && (t = e.slice(0, 5) + ".."), "".concat(t, ".").concat(n)
              },
              a = function (e) {
                f({
                  x: e.clientX,
                  y: e.clientY
                })
              },
              d = function (e) {
                f({
                  x: 0,
                  y: 0
                })
              },
              c = (0, h.bE)(n),
              s = (0, l.useState)({
                x: 0,
                y: 0
              }),
              u = s[0],
              f = s[1],
              v = (0, l.useContext)(p.TableContext).editorTheme;
            return (0, i.jsx)("div", {
              className: " file-tabs flex dark:bg-[#383B40] ",
              children: null === c || void 0 === c ? void 0 : c.map((function (e) {
                var l = e.name,
                  c = e.extension,
                  s = e.createdAt;
                if (e) return (0, i.jsxs)("div", {
                  onClick: function () {
                    return o(e)
                  },
                  className: (null === t || void 0 === t ? void 0 : t.createdAt) === s ? "flex bg-gray-10 text-blue-100 dark:text-[#699AF8] px-[12px] cursor-pointer  border-r-[1px]  items-center w-[106px] h-[36px] py-[8px] justify-between dark:border-gray-50 dark:bg-[#1C2130]" : "flex bg-gray-20 px-[12px] cursor-pointer border-b-[1px] border-r-[1px] items-center w-[106px] h-[36px] py-[8px] justify-between dark:bg-[#383B40] dark:border-gray-50 dark:text-[#FFFFFFAB]",
                  children: [(0, i.jsxs)("div", {
                    className: "tooltip-parent-tabslist text-[14px] leading-[20px] weight-[500] max-w-[240px]",
                    onMouseEnter: a,
                    onMouseLeave: d,
                    children: [r(l, c), l.length > 6 ? (0, i.jsxs)("span", {
                      className: "tooltiptext-panel-tabslist  fixed",
                      style: {
                        left: u.x,
                        top: u.y + 10
                      },
                      children: [l, ".", c]
                    }) : null]
                  }), (0, i.jsx)("div", {
                    className: "hover:text-red-600 text-black-10",
                    onClick: function (r) {
                      r.stopPropagation(),
                        function (e) {
                          var r;
                          e.includedInTab = !1, e.createdAt === (null === t || void 0 === t ? void 0 : t.createdAt) ? o(k({}, null === (r = (0, h.bE)(n)) || void 0 === r ? void 0 : r[0])) : o(t ? k({}, t) : w)
                        }(e)
                    },
                    children: (0, i.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "h-4 w-4",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "dark" === v ? "#ffffff" : "currentColor",
                      strokeWidth: 2,
                      children: (0, i.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M6 18L18 6M6 6l12 12"
                      })
                    })
                  })]
                }, s)
              }))
            })
          },
          M = {
            src: "/html/online-compiler/_next/static/media/leftArrow.15df12ab.svg",
            height: 10,
            width: 6
          },
          B = {
            src: "/html/online-compiler/_next/static/media/leftWhiteArrow.561ce28e.svg",
            height: 10,
            width: 6
          },
          I = t(5152),
          P = t.n(I),
          _ = t(7379);
  
        function R(e, n) {
          return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
              value: Object.freeze(n)
            }
          }))
        }
  
        function H() {
          var e = R(["\n  display: flex;\n  position: relative;\n  flex-direction: ", ";\n  height: ", ";\n  width: ", ";\n  flex-wrap: ", ";\n  justify-content: ", ";\n  align-items: ", ";\n  background-color: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n"]);
          return H = function () {
            return e
          }, e
        }
  
        function W() {
          var e = R(["\n  border: 0;\n"]);
          return W = function () {
            return e
          }, e
        }
  
        function z() {
          var e = R(["\n  gap: 12px;\n  display: flex;\n  flex-wrap: wrap;\n"]);
          return z = function () {
            return e
          }, e
        }
        var q = _.ZP.div(H(), (function (e) {
          return null !== (F = e.flexDirection) && void 0 !== F ? F : "row"
        }), (function (e) {
          return null !== (A = e.height) && void 0 !== A ? A : "auto"
        }), (function (e) {
          return null !== (C = e.width) && void 0 !== C ? C : "auto"
        }), (function (e) {
          return null !== (N = e.flexWrap) && void 0 !== N ? N : "nowrap"
        }), (function (e) {
          return null !== (S = e.justifyContent) && void 0 !== S ? S : "flex-start"
        }), (function (e) {
          return null !== (L = e.alignItems) && void 0 !== L ? L : "center"
        }), (function (e) {
          return null !== (O = e.backgroundColor) && void 0 !== O ? O : "#FFFFFF"
        }), (function (e) {
          return null !== (T = e.borderRadius) && void 0 !== T ? T : "0px"
        }), (function (e) {
          return null !== (E = e.boxShadow) && void 0 !== E ? E : "0px 0px 0px 0px #FFFFFFF"
        }));
        _.ZP.iframe(W()), _.ZP.div(z());
  
        function Z(e, n) {
          return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
              value: Object.freeze(n)
            }
          }))
        }
  
        function J() {
          var e = Z(["\n  gap: 12px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"]);
          return J = function () {
            return e
          }, e
        }
  
        function U() {
          var e = Z(["\n  border: 0;\n"]);
          return U = function () {
            return e
          }, e
        }
  
        function V() {
          var e = Z(["\n  gap: 12px;\n  display: flex;\n  flex-wrap: wrap;\n"]);
          return V = function () {
            return e
          }, e
        }
        _.ZP.div(J());
        var G = _.ZP.iframe(U()),
          K = (_.ZP.div(V()), {
            src: "/html/online-compiler/_next/static/media/browserIcon.64bc41ef.svg",
            height: 16,
            width: 16
          });
  
        function X(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t];
          return o
        }
  
        function Y(e) {
          return function (e) {
            if (Array.isArray(e)) return X(e)
          }(e) || function (e) {
            if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
          }(e) || function (e, n) {
            if (!e) return;
            if ("string" === typeof e) return X(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return X(e, n)
          }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }
        var $, Q = P()(t.e(171).then(t.t.bind(t, 5171, 23)), {
          loadableGenerated: {
            webpack: function () {
              return [5171]
            }
          },
          ssr: !1
        });
  
        function ee(e) {
          var n, t, o, r = e.pages,
            a = e.logs,
            d = e.activeHtmlFile,
            c = e.setActiveHtmlFile,
            u = e.setMinimizeBrowser,
            f = e.minimizeBrowser,
            v = e.getAllHtmlFiles,
            m = e.setLogs,
            x = function () {
              if (void 0 !== window) {
                window.innerWidth < 768 || R($.BROWSER)
              }
            },
            g = function (e, n) {
              var t = e;
              return e.length > n && (t = e.slice(0, n) + "..."), t
            },
            w = (0, l.useContext)(p.TableContext),
            b = w.fsInWindow,
            j = w.editorTheme,
            k = (0, l.useState)($.BROWSER),
            F = k[0],
            A = k[1],
            C = (0, l.useState)(!1),
            N = C[0],
            S = C[1],
            L = (0, l.useState)(""),
            O = L[0],
            T = L[1],
            E = (0, l.useState)(!0),
            D = E[0],
            M = E[1],
            B = (0, l.useState)(""),
            I = B[0],
            P = B[1];
          (0, l.useEffect)((function () {
            D || S(!1)
          }), [D]);
          var _ = F === $.BROWSER,
            R = function (e) {
              M(!0), A(e)
            };
          (0, l.useEffect)((function () {
            if (null === window || void 0 === window ? void 0 : window.fs) {
              var e = H((function () {
                var e;
                ! function (e) {
                  var n, t = null !== (n = v().find((function (n) {
                    return n.createdAt === e.createdAt
                  }))) && void 0 !== n ? n : e;
                  try {
                    var o, r = new DOMParser,
                      i = r.parseFromString(null !== (o = function (e) {
                        var n;
                        return null === e || void 0 === e || null === (n = e.data) || void 0 === n ? void 0 : n.replace(/<(\w+)([^>/]*)\/\s*>/g, (function (e, n, t) {
                          return "<".concat(n).concat(t, "></").concat(n, ">")
                        }))
                      }(t)) && void 0 !== o ? o : "", "text/html"),
                      l = i.querySelectorAll('link[rel="stylesheet"]'),
                      a = i.querySelectorAll("script[src]"),
                      d = i.querySelectorAll("img"),
                      c = i.querySelectorAll("video"),
                      s = i.querySelector("title"),
                      u = i.querySelector("head"),
                      p = i.querySelector("body"),
                      f = i.createElement("style");
                    null === p || void 0 === p || p.appendChild(f);
                    var m = !0,
                      h = !1,
                      x = void 0;
                    try {
                      for (var g, w = l[Symbol.iterator](); !(m = (g = w.next()).done); m = !0) {
                        var b, j = g.value,
                          k = j.getAttribute("href"),
                          F = "".concat(t.path).concat(k),
                          A = i.createElement("style"),
                          C = "";
                        try {
                          C = window.fs.readFileSync(F, "utf8")
                        } catch (me) {
                          console.log("err reading css file", me)
                        }
                        A.innerHTML = C, null === (b = j.parentNode) || void 0 === b || b.appendChild(A), j.remove()
                      }
                    } catch (he) {
                      h = !0, x = he
                    } finally {
                      try {
                        m || null == w.return || w.return()
                      } finally {
                        if (h) throw x
                      }
                    }
                    var N = !0,
                      S = !1,
                      L = void 0;
                    try {
                      for (var O, T = d[Symbol.iterator](); !(N = (O = T.next()).done); N = !0) {
                        var E = O.value,
                          D = E.getAttribute("src"),
                          M = "".concat(t.path).concat(D),
                          B = "";
                        try {
                          var I;
                          B = null !== (I = window.fs.readFileSync(M, "utf8")) && void 0 !== I ? I : ""
                        } catch (me) {
                          console.log("err reading image file", me)
                        }
                        E.src = null !== B && void 0 !== B ? B : D
                      }
                    } catch (he) {
                      S = !0, L = he
                    } finally {
                      try {
                        N || null == T.return || T.return()
                      } finally {
                        if (S) throw L
                      }
                    }
                    var _ = !0,
                      R = !1,
                      H = void 0;
                    try {
                      for (var W, z = a[Symbol.iterator](); !(_ = (W = z.next()).done); _ = !0) {
                        var q = W.value,
                          Z = q.getAttribute("src"),
                          J = "".concat(t.path).concat(Z),
                          U = i.createElement("script"),
                          V = "";
                        try {
                          V = window.fs.readFileSync(J, "utf8")
                        } catch (me) {
                          console.log("err reading script file", me)
                        }
                        try {
                          var G;
                          U.innerHTML = V, null === (G = q.parentNode) || void 0 === G || G.appendChild(U), q.remove()
                        } catch (xe) {
                          console.log("e script", xe)
                        }
                      }
                    } catch (he) {
                      R = !0, H = he
                    } finally {
                      try {
                        _ || null == z.return || z.return()
                      } finally {
                        if (R) throw H
                      }
                    }
                    var K = !0,
                      X = !1,
                      Y = void 0;
                    try {
                      for (var $, Q = c[Symbol.iterator](); !(K = ($ = Q.next()).done); K = !0) {
                        var ee = $.value,
                          ne = ee.getAttribute("src"),
                          te = "".concat(t.path).concat(ne),
                          oe = "";
                        try {
                          var re;
                          oe = null !== (re = window.fs.readFileSync(te, "utf8")) && void 0 !== re ? re : ""
                        } catch (me) {
                          console.log("err reading image file", me)
                        }
                        ee.src = null !== oe && void 0 !== oe ? oe : ne
                      }
                    } catch (he) {
                      X = !0, Y = he
                    } finally {
                      try {
                        K || null == Q.return || Q.return()
                      } finally {
                        if (X) throw Y
                      }
                    }
                    var ie = r.parseFromString(y, "text/html"),
                      le = ie.querySelector("head");
                    le && (le.innerHTML = (null === u || void 0 === u ? void 0 : u.innerHTML) || "");
                    var ae = ie.querySelector("body");
                    ae && (ae.innerHTML = (null === p || void 0 === p ? void 0 : p.innerHTML) || ""), window.__test = function (e) {
                      var n, t, o;
                      return function (e) {
                        e = "string" !== typeof e ? JSON.stringify(e) : e;
                        try {
                          e = JSON.parse(e)
                        } catch (n) {
                          return !1
                        }
                        return "object" === typeof e && null !== e
                      }(null !== (n = window.fs.readFileSync(e, "utf8")) && void 0 !== n ? n : "") ? JSON.parse(null !== (t = window.fs.readFileSync(e, "utf8")) && void 0 !== t ? t : "") : null !== (o = window.fs.readFileSync(e, "utf8")) && void 0 !== o ? o : ""
                    };
                    for (var de, ce = i.getElementsByTagName("script"), se = 0; se < ce.length; ++se) {
                      var ue, pe = ce[se],
                        fe = document.getElementById("browser");
                      null === fe || void 0 === fe || null === (ue = fe.contentWindow) || void 0 === ue || ue.scope.run(pe.innerHTML)
                    }
                    document.getElementById("browser").contentDocument.documentElement.innerHTML = ie.documentElement.innerHTML;
                    var ve = null !== (de = null === s || void 0 === s ? void 0 : s.innerHTML) && void 0 !== de ? de : "";
                    P(ve)
                  } catch (me) {
                    console.log("error manipulating src doc", me)
                  }
                }(null !== (e = null !== d && void 0 !== d ? d : v()[0]) && void 0 !== e ? e : ""), m([])
              }), 400);
              e()
            }
          }), [d, b, r]), (0, l.useEffect)((function () {
            if (void 0 !== window) return window.addEventListener("resize", x),
              function () {
                window.removeEventListener("resize", x)
              }
          }), []);
          var H = function (e, n) {
              var t;
              return function () {
                for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                var l = function () {
                  clearTimeout(t), e && e.apply(void 0, Y(r))
                };
                clearTimeout(t), t = setTimeout(l, n)
              }
            },
            W = (null === (n = v()) || void 0 === n ? void 0 : n.length) > 1 && _ ? "" : "justify-end",
            z = (0, l.useState)(!1),
            Z = z[0],
            J = z[1],
            U = (0, l.useState)(1),
            V = U[0],
            G = U[1];
          return (0, i.jsxs)("div", {
            className: D ? "flex flex-col bg-white browserContainer h-2/3 md:h-full w-full md:flex-1" : "flex flex-col bg-white browserContainer md:h-full w-full",
            children: [(0, i.jsxs)("div", {
              className: "flex items-center",
              children: [(0, i.jsxs)("div", {
                className: "flex items-center ",
                children: [(0, i.jsxs)("div", {
                  className: _ ? "flex border-b-[1px] cursor-pointer items-center gap-2  px-[12px] border-b-[#fff] w-[102px]  md:w-auto md:max-w-[240px] md:h-[37px] py-[8px] text-purple dark:border-gray-50" : "flex border-b-[1px] cursor-pointer items-center gap-2 p-2  px-[12px]   w-[102px] md:w-[126px] md:h-[37px] py-[8px] text-purple dark:border-gray-50",
                  onClick: function () {
                    return R($.BROWSER)
                  },
                  role: "button",
                  children: [(0, i.jsx)(s(), {
                    src: K,
                    alt: "Browser Icon"
                  }), (0, i.jsx)("p", {
                    className: "browser-title text-[14px] hidden md:block leading-[20px]",
                    title: I,
                    children: g(I, 20)
                  }), (0, i.jsx)("p", {
                    className: "text-[14px] md:hidden leading-[20px]",
                    children: g(I, 7)
                  }), (0, i.jsx)("div", {
                    className: "hidden md:block cursor-pointer collapse-browser",
                    title: "Collapse Browser",
                    onClick: function () {
                      return u(!f)
                    },
                    children: (0, i.jsx)("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, i.jsx)("path", {
                        className: "browserRight-arrow",
                        d: "M6 12L10 8L6 4",
                        stroke: "#25265E",
                        strokeOpacity: "0.67",
                        strokeWidth: "1.33333",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })
                    })
                  })]
                }), (0, i.jsx)("div", {
                  className: F === $.CONSOLE ? "  md:hidden flex bg-[#F5F5F5] cursor-pointer items-center p-2 dark:border-[#1C2130] border-b-[#F5F5F5] dark:bg-[#1C2130] dark:text-[#FFFFFF] dark:border-[#FFFFFF33] leading-[20px] border-b-[1px] border-l-[1px]" : "  md:hidden flex cursor-pointer items-center p-2 dark:bg-[#1C2130] dark:text-[#FFFFFF] dark:border-[#FFFFFF33] leading-[20px] border-b-[1px] border-l-[1px]",
                  onClick: function () {
                    return R($.CONSOLE)
                  },
                  children: (0, i.jsx)("p", {
                    children: "Console"
                  })
                })]
              }), (0, i.jsxs)("div", {
                className: "flex items-center ".concat(W, " flex-1 border-b-[1px] border-l-[1px] border-[#E5E7EB] h-full border-1 dark:bg-[#2D2F34] dark:border-[#FFFFFF33]"),
                children: [_ ? (0, i.jsx)(i.Fragment, {
                  children: (null === (t = v()) || void 0 === t ? void 0 : t.length) > 1 ? (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)(q, {
                      onClick: function () {
                        S(!N)
                      },
                      className: "cursor-pointer dark:bg-[#2D2F34]",
                      children: [(0, i.jsx)("div", {
                        className: "mr-[5px] text-xs ml-[8px] dark:text-[#FFFFFFAB] dark:bg-[#2D2F34]",
                        children: "".concat((0, h.Hm)(d))
                      }), (0, i.jsx)("button", {
                        children: (0, i.jsx)("svg", {
                          width: "12",
                          height: "12",
                          viewBox: "0 0 12 12",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: (0, i.jsx)("path", {
                            d: "M3 4.5L6 7.5L9 4.5",
                            stroke: "dark" === j ? "#FFFFFF" : "#25265E",
                            strokeOpacity: "0.67",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          })
                        })
                      }), N ? (0, i.jsx)("div", {
                        className: "htmlFileDropdown min-w-[85px] bg-white absolute top-7 ml-0 px-[8px] py-[4px] flex flex-col justify-between dark:bg-[#2D2F34] dark:text-[#FFFFFFAB]",
                        children: null === (o = v()) || void 0 === o ? void 0 : o.map((function (e, n) {
                          return (0, i.jsx)("div", {
                            onClick: function () {
                              c(e), S(!N)
                            },
                            className: "cursor-pointer text-xs dark:hover:bg-[#383B40]",
                            children: "".concat((0, h.Hm)(e))
                          }, n)
                        }))
                      }) : null]
                    })
                  }) : null
                }) : null, (0, i.jsxs)("div", {
                  className: "flex ml-[auto]",
                  children: [_ && (0, i.jsx)("button", {
                    className: " hidden p-[9px] mr-[0] md:mr-[6px] refresh-icon ".concat(Z ? "refresh-icon--rotate" : ""),
                    title: "Refresh Browser",
                    onClick: function (e) {
                      e.stopPropagation(), Z || (G(V + 1), J(!0), setTimeout((function () {
                        J(!1)
                      }), 300))
                    },
                    children: (0, i.jsxs)("svg", {
                      width: "18",
                      height: "18",
                      viewBox: "0 0 18 18",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [(0, i.jsx)("path", {
                        d: "M1.5 3L1.5 7.5L6 7.5",
                        stroke: "dark" === j ? "#FFFFFFDE" : "#25265E",
                        strokeOpacity: "0.67",
                        strokeWidth: "1.77778",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }), (0, i.jsx)("path", {
                        d: "M3.3825 11.251C4.3815 14.0865 7.13538 15.9196 10.1368 15.7468C13.1382 15.5741 15.6636 13.4372 16.3307 10.5057C16.9978 7.57432 15.6457 4.55505 13.0146 3.10055C10.3835 1.64604 7.10762 2.10695 4.98 4.23097L1.5 7.50098",
                        stroke: "dark" === j ? "#FFFFFFDE" : "#25265E",
                        strokeOpacity: "0.67",
                        strokeWidth: "1.77778",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })]
                    })
                  }), (0, i.jsx)("button", {
                    onClick: function () {
                      return M(!D)
                    },
                    className: " block md:hidden p-[9px] mr-[6px] md:mr-[0] toggle-browser ".concat(D ? "toggle-browser--open" : ""),
                    title: "Toggle Browser View",
                    children: (0, i.jsx)("svg", {
                      width: "18",
                      height: "18",
                      viewBox: "0 0 18 18",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, i.jsx)("path", {
                        d: "M4.5 6.75L9 11.25L13.5 6.75",
                        stroke: "dark" === j ? "#FFFFFF" : "#25265E",
                        strokeOpacity: "0.67",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })
                    })
                  })]
                })]
              })]
            }), (0, i.jsx)("div", {
              className: D ? " h-full overflow-auto  ".concat(_ ? "bg-[#FFFFFF] " : "bg-[#F5F5F5] dark:bg-[#1C2130]  p-[16px]", "  ") : "h-full hidden md:block overflow-auto",
              children: (0, i.jsx)(ne, {
                logs: a,
                isBrowserPageActive: _,
                reloadHTMLBrowser: V,
                command: O,
                handleChange: function (e) {
                  T(e.target.value)
                },
                submitLog: function (e) {
                  var n;
                  e.preventDefault();
                  var t = document.getElementById("browser");
                  t && (t.contentWindow.postMessage({
                    source: "parent-window",
                    msg: O
                  }, "*"), T("")), null === (n = document.getElementById("consolelog")) || void 0 === n || n.focus()
                }
              })
            })]
          })
        }! function (e) {
          e[e.BROWSER = 0] = "BROWSER", e[e.CONSOLE = 1] = "CONSOLE"
        }($ || ($ = {}));
        var ne = function (e) {
          var n = e.isBrowserPageActive,
            t = e.logs,
            o = e.reloadHTMLBrowser,
            r = e.submitLog,
            l = e.handleChange,
            a = e.command;
          return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(G, {
              width: "100%",
              height: "100%",
              id: "browser",
              name: "browser",
              srcDoc: y,
              style: {
                display: n ? "block" : "none"
              }
            }, o), (0, i.jsxs)("div", {
              className: "flex flex-col justify-start w-full h-3 bg-[#F5F5F5] dark:bg-[#1C2130]",
              style: {
                display: n ? "none" : "block"
              },
              children: [(0, i.jsx)("p", {
                className: "text-[14px] text-[#CB6D6F] font-[DroidSansMono] leading-[20px] ",
                children: "Hello World! Online Javascript playground for free."
              }), t.map((function (e, n) {
                var t, o, r = 1 === e.value.length ? e.value[0] : e.value;
                return t = r, (null != (o = Error) && "undefined" !== typeof Symbol && o[Symbol.hasInstance] ? o[Symbol.hasInstance](t) : t instanceof o) && (r = {
                  message: r.message,
                  stack: r.stack,
                  name: r.name
                }), (0, i.jsx)("pre", {
                  className: "ml-2 dark:text-white text-[14px] font-normal leading-[20px]",
                  children: "object" === typeof r ? (0, i.jsx)(Q, {
                    src: r,
                    theme: "rjv-default",
                    onEdit: !1,
                    onAdd: !1,
                    onDelete: !1,
                    displayObjectSize: !1,
                    enableClipboard: !1,
                    name: !1
                  }, n) : (0, i.jsx)("div", {
                    children: r
                  }, n)
                }, n)
              })), (0, i.jsxs)("form", {
                onSubmit: r,
                className: "py-2 pr-2 flex",
                children: [(0, i.jsx)("label", {
                  htmlFor: "consolelog",
                  style: {
                    color: "#AC4143"
                  },
                  children: ">"
                }), (0, i.jsx)("input", {
                  className: "border-transparent w-full bg-[#F5F5F5] focus:border-transparent focus:ring-0 ml-1 dark:text-[#ffffff] dark:bg-[#1C2130]",
                  style: {
                    outline: "none"
                  },
                  type: "text",
                  id: "consolelog",
                  onChange: l,
                  value: a
                })]
              })]
            })]
          })
        };
        var te = P()(t.e(171).then(t.t.bind(t, 5171, 23)), {
            loadableGenerated: {
              webpack: function () {
                return [5171]
              }
            },
            ssr: !1
          }),
          oe = function (e) {
            var n = e.setOpenCollapse,
              t = e.openCollapse,
              o = e.logs,
              r = (0, l.useState)(""),
              a = r[0],
              d = r[1],
              c = (0, l.useContext)(p.TableContext).editorTheme;
            return (0, i.jsxs)("div", {
              className: "".concat(t ? "consoleWrapper hidden h-[24.5%] overflow-hidden md:flex flex-col" : "consoleWrapper hidden md:block overflow-hidden "),
              children: [(0, i.jsxs)("div", {
                className: "flex dark:bg-[#2D2F34] overflow-hidden",
                children: [(0, i.jsxs)("div", {
                  className: "flex w-32 gap-4 items-center p-2 bg-[#F5F5F5] dark:bg-[#1C2130] dark:text-[#FFFFFF] border-r-[1px] dark:border-[#FFFFFF33]",
                  children: [(0, i.jsx)("p", {
                    className: "leading-[20px] text-[14px]",
                    children: "Console"
                  }), t ? (0, i.jsx)("button", {
                    onClick: function () {
                      return n(!t)
                    },
                    className: "hover:text-blue-100",
                    children: (0, i.jsx)("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, i.jsx)("path", {
                        d: "M4 6L8 10L12 6",
                        stroke: "dark" === c ? "#FFFFFF" : "currentColor",
                        strokeOpacity: "0.67",
                        strokeWidth: "1.33333",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })
                    })
                  }) : (0, i.jsx)("button", {
                    onClick: function () {
                      return n(!t)
                    },
                    className: "hover:text-blue-100",
                    children: (0, i.jsx)("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, i.jsx)("path", {
                        d: "M4 10L8 6L12 10",
                        stroke: "dark" === c ? "#FFFFFF" : "currentColor",
                        strokeOpacity: "0.67",
                        strokeWidth: "1.33333",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })
                    })
                  })]
                }), (0, i.jsx)("div", {
                  className: "flex-1 border-b-[1px] dark:border-[#FFFFFF33]"
                })]
              }), t && (0, i.jsxs)("div", {
                className: "flex flex-col justify-start w-full h-[117px] bg-[#F5F5F5] px-[8px] overflow-y-auto dark:bg-[#1C2130] m-w-[1289px] flex-1 ",
                children: [o.map((function (e, n) {
                  var t, o, r = 1 === e.value.length ? e.value[0] : e.value;
                  return t = r, (null != (o = Error) && "undefined" !== typeof Symbol && o[Symbol.hasInstance] ? o[Symbol.hasInstance](t) : t instanceof o) && (r = {
                    message: r.message,
                    stack: r.stack,
                    name: r.name
                  }), (0, i.jsx)("pre", {
                    className: "ml-2 dark:text-white text-[14px] font-normal leading-[20px]",
                    children: "object" === typeof r ? (0, i.jsx)(te, {
                      src: r,
                      theme: "rjv-default",
                      onEdit: !1,
                      onAdd: !1,
                      onDelete: !1,
                      displayObjectSize: !1,
                      enableClipboard: !1,
                      name: !1
                    }, n) : (0, i.jsx)("div", {
                      children: r
                    }, n)
                  }, n)
                })), (0, i.jsxs)("form", {
                  onSubmit: function (e) {
                    var n;
                    e.preventDefault();
                    var t = document.getElementById("browser");
                    t && (t.contentWindow.postMessage({
                      source: "parent-window",
                      msg: a
                    }, "*"), d("")), null === (n = document.getElementById("consolelog")) || void 0 === n || n.focus()
                  },
                  className: " flex",
                  children: [(0, i.jsx)("label", {
                    htmlFor: "consolelog",
                    className: "text-red-10",
                    children: ">"
                  }), (0, i.jsx)("input", {
                    className: "border-transparent focus:border-transparent focus:ring-0 ml-1 w-full bg-[#F5F5F5] dark:text-[#ffffff] dark:bg-[#1C2130]",
                    style: {
                      outline: "none"
                    },
                    type: "text",
                    id: "consolelog",
                    onChange: function (e) {
                      d(e.target.value)
                    },
                    value: a,
                    autoFocus: !0
                  })]
                })]
              })]
            })
          },
          re = t(1190),
          ie = {
            src: "/html/online-compiler/_next/static/media/dark-darkmodeIcon.9fd13751.svg",
            height: 32,
            width: 32
          },
          le = {
            src: "/html/online-compiler/_next/static/media/darkmodeIcon.87f3ca0b.svg",
            height: 32,
            width: 32
          },
          ae = {
            src: "/html/online-compiler/_next/static/media/darkdownloadIcon.b1654d65.svg",
            height: 32,
            width: 32
          },
          de = {
            src: "/html/online-compiler/_next/static/media/darkmaxIcon.098adea7.svg",
            height: 32,
            width: 32
          },
          ce = {
            src: "/html/online-compiler/_next/static/media/darkminIcon.5131821f.svg",
            height: 33,
            width: 33
          },
          se = {
            src: "/html/online-compiler/_next/static/media/darkmodearrowdownIcon.69a48bfa.svg",
            height: 14,
            width: 14
          },
          ue = {
            src: "/html/online-compiler/_next/static/media/downloadIcon.a92f13ee.svg",
            height: 32,
            width: 32
          },
          pe = {
            src: "/html/online-compiler/_next/static/media/folderToggleDown.1aa16b07.svg",
            height: 14,
            width: 14
          },
          fe = {
            src: "/html/online-compiler/_next/static/media/maxIcon.919eaac0.svg",
            height: 32,
            width: 32
          },
          ve = {
            src: "/html/online-compiler/_next/static/media/minIcon.7bbacb38.svg",
            height: 32,
            width: 32
          },
          me = [{
            name: " New HTML file",
            value: "html"
          }, {
            name: "New CSS file ",
            value: "css"
          }, {
            name: "New JS file",
            value: "js"
          }, {
            name: " New Folder",
            value: "folder"
          }, {
            name: " Upload Asset",
            value: "asset"
          }, {
            name: " Rename ",
            value: "rename"
          }, {
            name: " Delete ",
            value: "delete"
          }],
          he = function (e) {
            e.showAddDropdown;
            var n = e.setShowAddDropdown,
              t = e.setAction,
              o = e.handleDelete,
              r = e.id,
              a = e.renameFolderAction,
              d = e.dropdownNode,
              c = e.setRenameNode,
              s = (0, l.useState)(me),
              u = s[0];
            s[1];
            return (null === d || void 0 === d ? void 0 : d.createdAt) !== (null === r || void 0 === r ? void 0 : r.createdAt) ? null : (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)("div", {
                className: "accordion-files shadow-md text-[#25265EAB] p-2 mx-2 absolute bg-white z-10 dark:bg-[#2D2F34] dark:text-white text-[12px] border-[1px] rounded-[2px] dark:border-[#6C6C6C]",
                children: null === u || void 0 === u ? void 0 : u.map((function (e) {
                  return "rootFolder" === r.name && "delete" === e.value || "rootFolder" === r.name && "rename" === e.value ? null : "delete" !== e.value ? (0, i.jsx)("p", {
                    onClick: function () {
                      "rename" === e.value ? (t(void 0), a(r)) : (c(void 0), t(e.value)), n(!1)
                    },
                    className: "cursor-pointer",
                    children: e.name
                  }, e.value) : "delete" === e.value && r ? (0, i.jsx)("p", {
                    onClick: function () {
                      o(r)
                    },
                    className: "cursor-pointer",
                    children: e.name
                  }, e.value) : null
                }))
              })
            })
          },
          xe = t(3162),
          ge = t(5733),
          we = t.n(ge),
          be = t(323);
  
        function ye(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t];
          return o
        }
  
        function je(e, n, t, o, r, i, l) {
          try {
            var a = e[i](l),
              d = a.value
          } catch (c) {
            return void t(c)
          }
          a.done ? n(d) : Promise.resolve(d).then(o, r)
        }
  
        function ke(e) {
          return function () {
            var n = this,
              t = arguments;
            return new Promise((function (o, r) {
              var i = e.apply(n, t);
  
              function l(e) {
                je(i, o, r, l, a, "next", e)
              }
  
              function a(e) {
                je(i, o, r, l, a, "throw", e)
              }
              l(void 0)
            }))
          }
        }
  
        function Fe(e, n, t) {
          return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[n] = t, e
        }
  
        function Ae(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              o = Object.keys(t);
            "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })))), o.forEach((function (n) {
              Fe(e, n, t[n])
            }))
          }
          return e
        }
  
        function Ce(e) {
          return function (e) {
            if (Array.isArray(e)) return ye(e)
          }(e) || function (e) {
            if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
          }(e) || function (e, n) {
            if (!e) return;
            if ("string" === typeof e) return ye(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ye(e, n)
          }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }
  
        function Ne(e) {
          return "html" === e ? "xml" : "css" === e ? "css" : "javascript"
        }
        var Se = function (e) {
            var n, t = e.pages,
              o = e.setPages,
              a = e.activePage,
              d = e.selectedType,
              c = e.setActivePage,
              u = e.setSelectedType,
              f = e.activeHtmlFile,
              v = e.setActiveHtmlFile,
              m = e.getAllHtmlFiles,
              x = function (e) {
                $(e.target.value)
              },
              g = function (e) {
                var n;
                e.preventDefault();
                var t = null === (n = e.target.files) || void 0 === n ? void 0 : n[0];
                if (t) {
                  var o = null,
                    r = t.type.includes("video/"),
                    i = t.type.includes("application/json");
                  if (r) {
                    if (t.size > 5242880) return void alert("File is too big!, Please upload file less than 5Mb");
                    o = URL.createObjectURL(t)
                  }
                  $(t.name);
                  var l = t.type.includes("image/"),
                    a = function (e, n, t, o) {
                      return e ? "image/jpeg" === t.type ? "jpeg" : "image/png" === t.type ? "png" : "jpg" : n ? "mp4" : o ? "json" : "text/html" === t.type ? "html" : "text/css" === t.type ? "css" : "text/plain" === t.type ? "txt" : "text/markdown" === t.type ? "md" : "javascript"
                    }(l, r, t, i);
                  je(a);
                  var d = new FileReader;
                  l ? d.readAsDataURL(t) : d.readAsText(t), d.onloadend = function () {
                    var n = {
                      content: null !== o && void 0 !== o ? o : d.result,
                      mode: a,
                      fileName: t.name,
                      isImage: l,
                      isVideo: r,
                      isJson: i
                    };
                    j(e, n)
                  }
                }
              },
              w = function (e, n) {
                return !!(null === e || void 0 === e ? void 0 : e.children) && e.children.find((function (e) {
                  var t, o = null !== (t = "".concat(null === e || void 0 === e ? void 0 : e.name, ".").concat(null === e || void 0 === e ? void 0 : e.extension)) && void 0 !== t ? t : null === e || void 0 === e ? void 0 : e.name;
                  return n == o
                }))
              },
              b = function (e) {
                return "".concat(null === e || void 0 === e ? void 0 : e.path).concat(e.name, ".").concat(e.extension)
              },
              y = function (e) {
                var n = null === t || void 0 === t ? void 0 : t.map((function (n) {
                  if (n.createdAt === (null === d || void 0 === d ? void 0 : d.createdAt)) {
                    var t, o, r = null !== (t = "".concat(null === e || void 0 === e ? void 0 : e.name, ".").concat(null === e || void 0 === e ? void 0 : e.extension)) && void 0 !== t ? t : null === e || void 0 === e ? void 0 : e.name;
                    return w(n, r) ? (alert("File name already exists!"), Ae({}, n)) : (e.extension && c(e), Ae({}, n, {
                      children: Ce(null !== (o = null === n || void 0 === n ? void 0 : n.children) && void 0 !== o ? o : []).concat([e])
                    }))
                  }
                  return n.children ? Ae({}, n, {
                    children: Pe(n.children, e)
                  }) : n
                }));
                o(null !== n && void 0 !== n ? n : [])
              },
              j = function (e, n) {
                e.preventDefault();
                var t = (null === d || void 0 === d ? void 0 : d.parent) ? "".concat(null === d || void 0 === d ? void 0 : d.path).concat(null === d || void 0 === d ? void 0 : d.name, "/") : "/";
                if ("folder" === ye || "folder" === Le) {
                  var o, r = {
                    name: Y,
                    createdAt: Date.now(),
                    children: [],
                    parent: null !== (o = null === d || void 0 === d ? void 0 : d.name) && void 0 !== o ? o : null,
                    path: null !== t && void 0 !== t ? t : "/",
                    isOpen: !0
                  };
                  try {
                    window.fs.mkdirSync("".concat(t).concat(Y))
                  } catch (e) {
                    return void alert("Folder name already exists")
                  }
                  y(r)
                } else if ("asset" === ye || "asset" === Le) {
                  var i, l, a, c, s, u = {
                    name: null !== (i = (null === n || void 0 === n ? void 0 : n.fileName.split("."))[0]) && void 0 !== i ? i : "",
                    createdAt: Date.now(),
                    extension: null !== (l = null === n || void 0 === n ? void 0 : n.mode) && void 0 !== l ? l : "",
                    includedInTab: !0,
                    mode: n.isImage ? "image" : n.isVideo ? "video" : n.isJson ? "javascript" : Ne(null !== (a = null === n || void 0 === n ? void 0 : n.mode) && void 0 !== a ? a : ""),
                    active: !0,
                    parent: null !== (c = null === d || void 0 === d ? void 0 : d.name) && void 0 !== c ? c : "",
                    path: null !== t && void 0 !== t ? t : "/",
                    data: null !== (s = null === n || void 0 === n ? void 0 : n.content) && void 0 !== s ? s : ""
                  };
                  window.fs.writeFile("".concat(b(u)), null === n || void 0 === n ? void 0 : n.content, "utf8", (function () {})), y(u)
                } else {
                  if ("" === Y) return;
                  var p, f, v = {
                    name: Y.split(".").filter((function (e) {
                      return e !== (ye || Le)
                    })).join("."),
                    createdAt: Date.now(),
                    extension: ye || Le,
                    includedInTab: !0,
                    mode: Ne(null !== (p = ye || Le) && void 0 !== p ? p : ""),
                    active: !0,
                    parent: null !== (f = null === d || void 0 === d ? void 0 : d.name) && void 0 !== f ? f : "",
                    path: null !== t && void 0 !== t ? t : "/",
                    data: ""
                  };
                  window.fs.writeFile("".concat(b(v)), "", "utf8", (function () {})), y(v)
                }
                $(""), J(!1), je(void 0), Oe(void 0)
              },
              k = function (e) {
                var n = e.name,
                  t = n;
                return (null === n || void 0 === n ? void 0 : n.length) > 12 && (t = n.slice(0, 12) + ".."), t
              },
              F = function (e) {
                var n, r, i, l, d = (t && (null === (n = t[0]) || void 0 === n || null === (r = n.children) || void 0 === r ? void 0 : r.map((function (n) {
                    return e.createdAt === n.createdAt ? null : ((null === n || void 0 === n ? void 0 : n.children) && (n.children = He(e, n)), n)
                  })))).filter((function (e) {
                    return e
                  })),
                  s = null === t || void 0 === t ? void 0 : t.map((function (e) {
                    return e.children = d, e
                  }));
                e.extension ? (window.fs.unlink("".concat(e.path).concat(e.name, ".").concat(e.extension), (function () {})), (null === e || void 0 === e ? void 0 : e.createdAt) === (null === f || void 0 === f ? void 0 : f.createdAt) && ne(!0)) : (null === (i = e.children) || void 0 === i ? void 0 : i.length) && We(e);
                (e.extension || window.fs.rmdirSync("".concat(e.path).concat(e.name, "/"), {
                  recursive: !0
                }), e.createdAt === (null === a || void 0 === a ? void 0 : a.createdAt)) && c(Ae({}, null === (l = (0, h.bE)(s)) || void 0 === l ? void 0 : l[0]));
                (null === window || void 0 === window ? void 0 : window.fs) && "image" === e.mode && window.fs.unlink(b(e), (function () {})), o(s), Be()
              },
              A = function (e, n, r) {
                var l, d, s = e.createdAt === (null === a || void 0 === a ? void 0 : a.createdAt) || D === e.createdAt ? "bg-gray-10 dark:bg-[#383B40]" : "hover:bg-gray-10 ";
                var u, p, f, v = (null === (l = r.children) || void 0 === l ? void 0 : l.length) ? (null === (d = r.children) || void 0 === d ? void 0 : d.filter((function (e) {
                    return e.extension
                  })).length) - 1 : 0,
                  m = "rootFolder" === (null === e || void 0 === e ? void 0 : e.parent) ? "" : n === v ? "lastFile" : 0 === n ? "firstFile" : "filesUnderFolder",
                  g = D === e.createdAt && "rootFolder" === e.parent ? "rootFileRename" : "rootFolder" === e.parent ? "rootFile" : D !== e.createdAt ? "nestedFile" : "nestedFileRename",
                  w = (null === T || void 0 === T ? void 0 : T.createdAt) !== e.createdAt ? "hidden" : "";
                return (0, i.jsxs)("div", {
                  children: [(0, i.jsxs)("div", {
                    className: "group  flex items-center justify-between ".concat(s, " z-1 ").concat(g, " cursor-pointer  py-[4px] renderFile  pr-[8px] h-[24px] dark:hover:bg-[#383B40] \n          "),
                    onClick: function () {
                      return D !== e.createdAt && function () {
                        var n = (0, h.en)(t, {
                          includedInTab: !0
                        }, e);
                        o(Ce(n)), c(Ae({}, e, {
                          includedInTab: !0
                        })), U(!1)
                      }()
                    },
                    children: [D === e.createdAt ? (0, i.jsx)("form", {
                      className: "input-form ",
                      onSubmit: function (n) {
                        qe(n, e)
                      },
                      id: m,
                      children: (0, i.jsxs)("div", {
                        className: "flex h-[24px] pt-[5px] pb-[4px]",
                        children: ["folder" === ye || "folder" === Le ? (0, i.jsx)("p", {
                          className: " self-center mr-[5px] ",
                          children: (0, i.jsx)("svg", {
                            width: "10",
                            height: "6",
                            viewBox: "0 0 10 6",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, i.jsx)("path", {
                              d: "M1 1L5 5L9 1",
                              stroke: "#25265E",
                              strokeWidth: "1.33333",
                              strokeLinecap: "round",
                              strokeLinejoin: "round"
                            })
                          })
                        }) : null, (0, i.jsx)("input", {
                          type: "text",
                          id: "fileName",
                          className: "w-full text-gray-100 ",
                          style: {
                            borderRadius: "4px",
                            paddingBottom: "1px",
                            paddingLeft: "4px",
                            fontSize: "12px"
                          },
                          onChange: x,
                          value: Y,
                          autoFocus: !0
                        })]
                      })
                    }) : (0, i.jsxs)("div", {
                      className: "rootFolder" !== (null === e || void 0 === e ? void 0 : e.parent) ? " tooltip-parent reltaive text-[12px] text-gray-100  p-[6px] pr-[0px] dark:text-[#FFFFFFAB] " : "tooltip-parent relative text-[12px] text-gray-100 leading-[16px] dark:text-[#FFFFFFAB] ",
                      id: m,
                      children: [function (e) {
                        var n = e.name,
                          t = e.extension,
                          o = n,
                          r = "rootFolder" === e.parent ? 10 : 7;
                        return n.length > r && (o = n.slice(0, r) + ".."), "".concat(o, ".").concat(t)
                      }(e), e.name.length > 10 ? (0, i.jsxs)("span", {
                        className: "tooltiptext-panel",
                        children: [e.name, ".", e.extension]
                      }) : null]
                    }), D !== e.createdAt ? (0, i.jsx)("div", {
                      className: "".concat(w, " hover:text-blue-100  tricolonView group-hover:block "),
                      onClick: function (n) {
                        Re(e), n.stopPropagation(), H(Fe({}, e.createdAt, "#0556F3"))
                      },
                      children: (0, i.jsxs)("svg", {
                        width: "12",
                        height: "12",
                        className: "file-options",
                        viewBox: "0 0 3 8",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "data-bs-toggle": "collapse",
                        "data-bs-target": "#".concat(e.name),
                        "aria-expanded": "true",
                        "aria-controls": e.name,
                        children: [(0, i.jsx)("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M1.05263 2.10526C1.63398 2.10526 2.10526 1.63398 2.10526 1.05263C2.10526 0.471279 1.63398 0 1.05263 0C0.471279 0 0 0.471279 0 1.05263C0 1.63398 0.471279 2.10526 1.05263 2.10526Z",
                          fill: "object" === typeof R ? null !== (u = R[null === e || void 0 === e ? void 0 : e.createdAt]) && void 0 !== u ? u : W() : R,
                          fillOpacity: "0.67"
                        }), (0, i.jsx)("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M1.05263 5.05058C1.63398 5.05058 2.10526 4.5793 2.10526 3.99794C2.10526 3.41659 1.63398 2.94531 1.05263 2.94531C0.471279 2.94531 0 3.41659 0 3.99794C0 4.5793 0.471279 5.05058 1.05263 5.05058Z",
                          fill: "object" === typeof R ? null !== (p = R[null === e || void 0 === e ? void 0 : e.createdAt]) && void 0 !== p ? p : W() : R,
                          fillOpacity: "0.67"
                        }), (0, i.jsx)("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M1.05263 7.99979C1.63398 7.99979 2.10526 7.52852 2.10526 6.94716C2.10526 6.36581 1.63398 5.89453 1.05263 5.89453C0.471279 5.89453 0 6.36581 0 6.94716C0 7.52852 0.471279 7.99979 1.05263 7.99979Z",
                          fill: "object" === typeof R ? null !== (f = R[null === e || void 0 === e ? void 0 : e.createdAt]) && void 0 !== f ? f : W() : R,
                          fillOpacity: "0.67"
                        })]
                      })
                    }) : null]
                  }, n), (null === T || void 0 === T ? void 0 : T.createdAt) === e.createdAt ? (0, i.jsx)("div", {
                    onClick: function (e) {
                      e.stopPropagation()
                    },
                    id: e.name,
                    className: "accordion-collapse collapse show flex flex-col ml-auto ",
                    children: (0, i.jsxs)("div", {
                      className: "accordion-content flex flex-col items-start text-[12px] px-3 py-1 dark:bg-[#1C2130]",
                      children: [(0, i.jsx)("button", {
                        className: "cursor-pointer dark:text-[#ffffff] leading-5 text-gray-100",
                        onClick: function () {
                          var n;
                          je(void 0), E(null), $(e.name), M(null !== (n = e.createdAt) && void 0 !== n ? n : Date.now())
                        },
                        children: "Rename"
                      }), (0, i.jsx)("button", {
                        className: "cursor-pointer text-red-500 font-so leading-5",
                        onClick: function () {
                          return Me()
                        },
                        children: "Delete"
                      })]
                    })
                  }) : null]
                }, n)
              },
              C = function (e) {
                var n;
                Oe(void 0), E(null), je(void 0), me(null !== (n = e.createdAt) && void 0 !== n ? n : Date.now()), $(e.name)
              },
              N = function () {
                $(""), J(!1), je(void 0), Oe(void 0)
              },
              S = function () {
                $(""), J(!1), je(void 0), Oe(void 0), window.removeEventListener("focus", L)
              },
              L = function () {
                setTimeout(S, 600)
              },
              O = (0, l.useContext)(p.TableContext),
              T = O.dropdownNode,
              E = O.setDropdownNode,
              D = O.renameNode,
              M = O.setRenameNode,
              B = O.theme,
              I = O.setTheme,
              P = O.editorTheme,
              _ = O.setEditorTheme,
              R = O.tricolonColor,
              H = O.setTricolonColor,
              W = O.getDefaultTricolonColor,
              z = O.isHeaderMax,
              q = O.setIsHeaderMax,
              Z = O.showAddDropdown,
              J = O.setShowAddDropdown,
              U = (0, l.useContext)(be.K).setOpenCloseSideDrawer,
              V = (0, l.useState)(!1),
              G = V[0],
              K = V[1],
              X = (0, l.useState)(""),
              Y = X[0],
              $ = X[1],
              Q = (0, l.useState)(!1),
              ee = Q[0],
              ne = Q[1],
              te = (0, l.useState)(void 0),
              oe = te[0],
              me = te[1],
              ge = (0, l.useState)(),
              ye = ge[0],
              je = ge[1],
              Se = (0, l.useState)(),
              Le = Se[0],
              Oe = Se[1],
              Te = (0, l.useState)(!1),
              Ee = Te[0],
              De = Te[1],
              Me = function () {
                return De(!0)
              },
              Be = function () {
                return De(!1)
              };
            (0, l.useEffect)((function () {
              t && u(t[0])
            }), [t]);
            var Ie = (0, l.useRef)(null);
  
            function Pe(e, n) {
              return null === e || void 0 === e ? void 0 : e.map((function (e) {
                if ((null === d || void 0 === d ? void 0 : d.createdAt) === e.createdAt) {
                  var t, o, r = null !== (t = "".concat(null === n || void 0 === n ? void 0 : n.name, ".").concat(null === n || void 0 === n ? void 0 : n.extension)) && void 0 !== t ? t : null === n || void 0 === n ? void 0 : n.name;
                  return w(e, r) ? (alert("File name already exists!"), Ae({}, e)) : (n.extension && c(n), Ae({}, e, {
                    children: Ce(null !== (o = null === e || void 0 === e ? void 0 : e.children) && void 0 !== o ? o : []).concat([n])
                  }))
                }
                return (null === e || void 0 === e ? void 0 : e.children) ? Ae({}, e, {
                  children: Pe(e.children, n)
                }) : e
              }))
            }(0, l.useEffect)((function () {
              D || $("")
            }), [D]), (0, l.useEffect)((function () {
              var e;
              "asset" !== ye && "asset" !== Le || (null === (e = Ie.current) || void 0 === e || e.click())
            }), [ye, Le]), (0, l.useEffect)((function () {
              return window.onbeforeunload = function () {
                return "Are you really want to  leave page?"
              }, window.addEventListener("beforeunload", (function () {}))
            }), []), (0, l.useEffect)((function () {
              ee && (v(m()[0]), ne(!1))
            }), [ee]);
            var _e = function () {
                I("light" === B ? "dark" : "light")
              },
              Re = function (e) {
                (null === e || void 0 === e ? void 0 : e.createdAt) === (null === T || void 0 === T ? void 0 : T.createdAt) ? E(null): E(e)
              };
  
            function He(e, n) {
              var t;
              return (null === (t = n.children) || void 0 === t ? void 0 : t.map((function (n) {
                return e.createdAt === n.createdAt ? null : (null === n || void 0 === n ? void 0 : n.children) ? (n.children = He(e, n), n) : n
              }))).filter((function (e) {
                return e
              }))
            }
  
            function We(e) {
              e.children.map((function (n) {
                var t;
                n.extension ? (window.fs.unlink("".concat(n.path).concat(n.name, ".").concat(n.extension), (function () {})), e.createdAt === (null === f || void 0 === f ? void 0 : f.createdAt) && ne(!0)) : (null === (t = e.children) || void 0 === t ? void 0 : t.length) && We(e)
              }))
            }
            var ze = function (e, n) {
                return null === e || void 0 === e ? void 0 : e.reduce((function (e, t) {
                  var o;
                  t.createdAt === n ? e.push(Ae({}, t, {
                    isOpen: null === (o = !t.isOpen) || void 0 === o || o
                  })) : t.children ? (t.children = ze(null === t || void 0 === t ? void 0 : t.children, n), e.push(t)) : e.push(t);
                  return e
                }), [])
              },
              qe = function (e, n) {
                e.preventDefault(), window.fs.renameSync(n.extension ? (0, h.Hm)(n) : n.name, "".concat(null === n || void 0 === n ? void 0 : n.path).concat(Y, ".").concat(null === n || void 0 === n ? void 0 : n.extension));
                var r = (0, h.en)(t, {
                  name: Y
                }, n);
                o(Ce(r)), n.createdAt === (null === a || void 0 === a ? void 0 : a.createdAt) && c(Ae({}, n)), $(""), M(void 0), M(void 0)
              };
  
            function Ze(e, n) {
              var r, l = D && D === e.createdAt,
                a = oe && oe === e.createdAt,
                c = l ? "bg-gray-10" : "hover:bg-gray-10 ";
  
              function p(n) {
                return (0, i.jsx)(s(), {
                  src: "dark" === P ? se : pe,
                  alt: "down-arrow",
                  height: "14px",
                  width: "14px",
                  className: "folder-left-arrow cursor-pointer text-[#25265E] dark:bg-[#2D2F34] ".concat(n ? "open" : ""),
                  onClick: function () {
                    ! function (e) {
                      var n, r, i = ze(null !== (r = null === t || void 0 === t || null === (n = t[0]) || void 0 === n ? void 0 : n.children) && void 0 !== r ? r : [], e),
                        l = Ce(t);
                      l[0].children = i, o(l)
                    }(e.createdAt)
                  }
                })
              }
              var f, v, m, w = (null === T || void 0 === T ? void 0 : T.createdAt) !== e.createdAt ? "hidden" : "";
              return (0, i.jsxs)("div", {
                children: [(0, i.jsxs)("div", {
                  className: "group flex justify-between cursor-pointer items-center ".concat(c, " w-full p-").concat(l ? "0" : "1", "  folder dark:bg-[#2D2F34] h-[24px] pr-[8px] nestedFile"),
                  children: [l || a ? (0, i.jsx)("form", {
                    className: "input-form ",
                    onSubmit: function (n) {
                      l ? qe(n, e) : function (e, n) {
                        if (e.preventDefault(), !Y || (null === Y || void 0 === Y ? void 0 : Y.length) < 1) return $(""), me(void 0), void M(void 0);
                        var r = "".concat(null === n || void 0 === n ? void 0 : n.path).concat(Y),
                          i = (0, h.Wf)(n);
                        window.fs.renameSync(null !== i && void 0 !== i ? i : "/", r);
                        var l = (0, h.Q2)(t, {
                          name: Y
                        }, n);
                        o(Ce(l)), $(""), me(void 0), M(void 0)
                      }(n, e)
                    },
                    onBlur: function () {
                      return a && void me(void 0)
                    },
                    children: (0, i.jsxs)("div", {
                      className: "flex pl-[18px] h-[24px] pt-[5px] pb-[4px]  dark:bg-[#2D2F34]",
                      children: [p(!!e.isOpen), (0, i.jsx)("input", {
                        type: "text",
                        id: "fileName",
                        className: "w-full text-gray-100 ",
                        style: {
                          borderRadius: "4px",
                          width: "102px",
                          paddingBottom: "1px",
                          paddingLeft: "4px",
                          fontSize: "12px"
                        },
                        onChange: x,
                        value: Y,
                        autoFocus: !0
                      })]
                    })
                  }) : (0, i.jsxs)("div", {
                    className: "flex items-center dark:text-[#FFFFFFAB] dark:bg-[#2D2F34] gap-1",
                    children: [p(!!e.isOpen), (0, i.jsxs)("div", {
                      className: "tooltip-parent relative text-[12px] leading-[16px] text-gray-100 cursor-pointer dark:text-[#FFFFFFAB] dark:bg-[#2D2F34]",
                      children: [k(e), e.name.length > 12 ? (0, i.jsx)("span", {
                        className: "tooltiptext-panel",
                        children: e.name
                      }) : null]
                    })]
                  }), D !== e.createdAt ? (0, i.jsx)("div", {
                    className: "".concat(w, "  tricolonView group-hover:block "),
                    onClick: function (n) {
                      Re(e), n.stopPropagation(), Re(e), n.stopPropagation(), u(e),
                        function (e) {
                          e === d ? K(!G) : K(!0)
                        }(e), H(Fe({}, e.createdAt, "#0556F3"))
                    },
                    children: (0, i.jsxs)("svg", {
                      width: "12",
                      height: "12",
                      viewBox: "0 0 3 8",
                      className: "file-options",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      "data-bs-toggle": "collapse",
                      "data-bs-target": "#".concat(e.name),
                      "aria-expanded": "true",
                      "aria-controls": e.name,
                      children: [(0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M1.05263 2.10526C1.63398 2.10526 2.10526 1.63398 2.10526 1.05263C2.10526 0.471279 1.63398 0 1.05263 0C0.471279 0 0 0.471279 0 1.05263C0 1.63398 0.471279 2.10526 1.05263 2.10526Z",
                        fill: "object" === typeof R ? null !== (f = R[null === e || void 0 === e ? void 0 : e.createdAt]) && void 0 !== f ? f : W() : R,
                        fillOpacity: "0.67"
                      }), (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M1.05263 5.05058C1.63398 5.05058 2.10526 4.5793 2.10526 3.99794C2.10526 3.41659 1.63398 2.94531 1.05263 2.94531C0.471279 2.94531 0 3.41659 0 3.99794C0 4.5793 0.471279 5.05058 1.05263 5.05058Z",
                        fill: "object" === typeof R ? null !== (v = R[null === e || void 0 === e ? void 0 : e.createdAt]) && void 0 !== v ? v : W() : R,
                        fillOpacity: "0.67"
                      }), (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M1.05263 7.99979C1.63398 7.99979 2.10526 7.52852 2.10526 6.94716C2.10526 6.36581 1.63398 5.89453 1.05263 5.89453C0.471279 5.89453 0 6.36581 0 6.94716C0 7.52852 0.471279 7.99979 1.05263 7.99979Z",
                        fill: "object" === typeof R ? null !== (m = R[null === e || void 0 === e ? void 0 : e.createdAt]) && void 0 !== m ? m : W() : R,
                        fillOpacity: "0.67"
                      })]
                    })
                  }) : null]
                }, n), (0, i.jsx)(he, {
                  showAddDropdown: G,
                  setShowAddDropdown: K,
                  setAction: Oe,
                  id: e,
                  handleDelete: F,
                  dropdownNode: T,
                  renameFolderAction: C,
                  setRenameNode: M
                }), e.createdAt === (null === d || void 0 === d ? void 0 : d.createdAt) && (0, i.jsx)(i.Fragment, {
                  children: Le ? (0, i.jsx)("form", {
                    className: "input-form",
                    onSubmit: j,
                    children: (0, i.jsxs)("div", {
                      className: "flex pl-[18px] h-[24px] pt-[5px] pb-[4px] dark:bg-[#1C2130] ",
                      children: ["folder" === ye || "folder" === Le ? (0, i.jsx)("p", {
                        className: " self-center mr-[5px] ",
                        children: (0, i.jsx)("svg", {
                          width: "10",
                          height: "6",
                          viewBox: "0 0 10 6",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: (0, i.jsx)("path", {
                            d: "M1 1L5 5L9 1",
                            stroke: "#25265E",
                            strokeWidth: "1.33333",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          })
                        })
                      }) : null, "asset" === ye || "asset" === Le ? (0, i.jsx)("input", {
                        type: "file",
                        ref: Ie,
                        className: " hidden ",
                        accept: ".md, video/mp4, image/png, image/jpeg, image/jpg, text/html, text/javascript, text/css, text/x-markdown, text/plain ,.json ,application/json",
                        onChange: g,
                        onClick: function () {
                          return window.addEventListener("focus", L)
                        }
                      }) : (0, i.jsx)("input", {
                        type: "text",
                        id: "fileName",
                        className: "w-full text-gray-100 ",
                        style: {
                          borderRadius: "4px",
                          paddingBottom: "1px",
                          paddingLeft: "4px",
                          fontSize: "12px"
                        },
                        onChange: x,
                        onBlur: function () {
                          return setTimeout(N, 200)
                        },
                        autoFocus: !0,
                        value: Y
                      })]
                    })
                  }) : null
                }), e.isOpen && (null === (r = e.children) || void 0 === r ? void 0 : r.map((function (n, t) {
                  return n.extension ? A(n, t, e) : Ze(n, t)
                })))]
              }, n)
            }
  
            function Je() {
              return (Je = ke(r().mark((function e() {
                var n, o, i, l, a;
                return r().wrap((function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return i = function (e, n) {
                        e.forEach((function (e) {
                          if (e.extension) {
                            if (e) {
                              var t;
                              null === o || void 0 === o || o.file("".concat(n, "/").concat(e.name, ".").concat(e.extension), null !== (t = e.data) && void 0 !== t ? t : "")
                            }
                          } else {
                            var r, l = "".concat(n, "/").concat(null === e || void 0 === e ? void 0 : e.name);
                            (null === (r = e.children) || void 0 === r ? void 0 : r.length) ? i(e.children, l): null === o || void 0 === o || o.folder(l)
                          }
                        }))
                      }, n = "codezam-html-css", o = new(we()), null === t || void 0 === t || t.forEach((function (e) {
                        if (null === e || void 0 === e ? void 0 : e.extension) {
                          var n;
                          o.file("".concat(e.name, ".").concat(e.extension), null !== (n = e.data) && void 0 !== n ? n : "")
                        } else {
                          e.children && i(e.children, "codezam-html-css")
                        }
                      })), e.prev = 5, e.next = 8, o.generateAsync({
                        type: "blob"
                      });
                    case 8:
                      return l = e.sent, a = (0, xe.saveAs)(l, n), e.abrupt("return", a);
                    case 13:
                      e.prev = 13, e.t0 = e.catch(5), console.error(e.t0);
                    case 16:
                    case "end":
                      return e.stop()
                  }
                }), e, null, [
                  [5, 13]
                ])
              })))).apply(this, arguments)
            }
            var Ue = "folder" === ye || "folder" === Le ? "102px" : "120px",
              Ve = "folder" === ye || "folder" === Le ? "4px" : "0",
              Ge = "folder" === ye || "folder" === Le ? "pl-[27px]" : "pl-[21px]";
            return (0, i.jsxs)("div", {
              className: "sidebar flex flex-col w-[150px] h-full dark:bg-[#2D2F34] place-content-between pt-[8px]",
              children: [(0, i.jsxs)("div", {
                className: "w-full mr-[1px]",
                children: [(0, i.jsxs)("div", {
                  className: "flex gap-2 w-full mx-8 navbarTitle ml-[24px]",
                  children: [(0, i.jsx)("p", {
                    className: "text-[14px] text-[#25265E] text-center leading-[20px] dark:text-[#FFFFFFDE] ",
                    children: "Files"
                  }), (0, i.jsx)("div", {
                    onClick: function (e) {
                      Re(t[0]), e.stopPropagation(), J(!Z), u(t[0])
                    },
                    style: {
                      color: Z && "rgb(5 86 243 / 1)"
                    },
                    className: "cursor-pointer  hover:text-blue-100 text-black-10 flex items-center dark:text-white",
                    children: (0, i.jsxs)("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 14 14",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [(0, i.jsx)("path", {
                        d: "M7 2.91797V11.0846",
                        stroke: "currentColor",
                        strokeOpacity: "0.67",
                        strokeWidth: "1.16667",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }), (0, i.jsx)("path", {
                        d: "M2.91699 7H11.0837",
                        stroke: "currentColor",
                        strokeOpacity: "0.67",
                        strokeWidth: "1.16667",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })]
                    })
                  })]
                }), (0, i.jsx)(he, {
                  showAddDropdown: Z,
                  setShowAddDropdown: J,
                  setAction: je,
                  renameFolderAction: C,
                  dropdownNode: T,
                  setRenameNode: M,
                  id: t[0],
                  handleDelete: F
                }), (0, i.jsx)("div", {
                  className: "modal",
                  style: {
                    textAlign: "center"
                  },
                  children: (0, i.jsx)(re.u, {
                    open: Ee,
                    onClose: Be,
                    center: !0,
                    children: (0, i.jsxs)("div", {
                      className: "delete-modal-wrapper",
                      children: [(0, i.jsx)("h2", {
                        className: " model-header font-semibold",
                        children: "Confirm file delete?"
                      }), (0, i.jsx)("p", {
                        className: "model-content m-0",
                        children: "Confirming deletion will permanetly delete the file. Are you sure you want to delete?"
                      }), (0, i.jsxs)("div", {
                        className: "flex justify-end",
                        children: [(0, i.jsx)("button", {
                          className: "model-cancel-btn",
                          onClick: Be,
                          children: "Cancel"
                        }), (0, i.jsx)("button", {
                          className: "modal-delete-btn ",
                          onClick: function () {
                            return F(T)
                          },
                          children: "Yes, delete"
                        })]
                      })]
                    })
                  })
                }), ye && (null === d || void 0 === d ? void 0 : d.createdAt) === t[0].createdAt ? (0, i.jsx)("form", {
                  className: "input-form",
                  onSubmit: j,
                  children: (0, i.jsxs)("div", {
                    className: "flex ".concat(Ge, " ").concat("asset" === ye ? "h-[0]" : "h-[24px]", " pt-[5px] pb-[4px]  dark:bg-[#1C2130]"),
                    children: ["folder" === ye || "folder" === Le ? (0, i.jsx)(s(), {
                      src: pe,
                      alt: "",
                      height: "14px",
                      width: "14px",
                      className: " dark:text-white cursor-pointer text-[#25265E] "
                    }) : null, "asset" === ye ? (0, i.jsx)("input", {
                      type: "file",
                      ref: Ie,
                      className: " hidden",
                      accept: ".md, video/mp4, image/png, image/jpeg, image/jpg, text/html, text/javascript, text/css, text/x-markdown, text/plain, .json, application/json",
                      onChange: g,
                      onClick: function () {
                        window.addEventListener("focus", L)
                      }
                    }) : (0, i.jsx)("input", {
                      type: "text",
                      id: "fileName",
                      className: "w-full text-gray-100",
                      style: {
                        borderRadius: "4px",
                        width: Ue,
                        marginLeft: Ve,
                        paddingBottom: "1px",
                        paddingLeft: "4px",
                        fontSize: "12px"
                      },
                      onChange: x,
                      onBlur: function () {
                        return setTimeout(N, 200)
                      },
                      value: Y,
                      autoFocus: !0
                    })]
                  })
                }) : null, null === (n = t[0].children) || void 0 === n ? void 0 : n.map((function (e, n) {
                  return e.extension ? A(e, n, t[0]) : Ze(e, n)
                }))]
              }), (0, i.jsxs)("div", {
                className: "flex gap-[8px] px-[19px] pb-[16px]",
                children: [(0, i.jsx)(s(), {
                  className: "cursor-pointer",
                  onClick: function () {
                    "light" == localStorage.getItem("theme") ? (document.documentElement.classList.remove("light"), document.documentElement.classList.add("dark"), localStorage.setItem("theme", "dark"), _("dark"), _e()) : (document.documentElement.classList.remove("dark"), document.documentElement.classList.add("light"), localStorage.setItem("theme", "light"), _("light"), _e())
                  },
                  src: "dark" === P ? ie : le,
                  alt: "Dark-Mode-Icon"
                }), (0, i.jsx)(s(), {
                  className: "cursor-pointer",
                  onClick: function () {
                    q(!z)
                  },
                  src: z ? "dark" === P ? de : fe : "dark" === P ? ce : ve,
                  alt: "Minmax-Icon"
                }), (0, i.jsx)(s(), {
                  className: "cursor-pointer",
                  onClick: function () {
                    return Je.apply(this, arguments)
                  },
                  src: "dark" === P ? ae : ue,
                  alt: "Download-Icon"
                })]
              })]
            })
          },
          Le = {
            src: "/html/online-compiler/_next/static/media/leftChevronIcon.9d601c42.svg",
            height: 16,
            width: 16
          },
          Oe = {
            src: "/html/online-compiler/_next/static/media/darkrightChevronIcon.d9d0c79a.svg",
            height: 16,
            width: 16
          },
          Te = t(4204),
          Ee = (0, i.jsxs)("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("path", {
              d: "M12.75 7.5L2.25 7.5",
              stroke: "#25265E",
              strokeOpacity: "0.67",
              strokeWidth: "1.77778",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, i.jsx)("path", {
              d: "M15.75 4.5L2.25 4.5",
              stroke: "#25265E",
              strokeOpacity: "0.67",
              strokeWidth: "1.77778",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, i.jsx)("path", {
              d: "M15.75 10.5L2.25 10.5",
              stroke: "#25265E",
              strokeOpacity: "0.67",
              strokeWidth: "1.77778",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, i.jsx)("path", {
              d: "M12.75 13.5L2.25 13.5",
              stroke: "#25265E",
              strokeOpacity: "0.67",
              strokeWidth: "1.77778",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          }),
          De = (0, i.jsxs)("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("path", {
              d: "M12.75 7.5L2.25 7.5",
              stroke: "white",
              strokeOpacity: "0.87",
              strokeWidth: "1.77778",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, i.jsx)("path", {
              d: "M15.75 4.5L2.25 4.5",
              stroke: "white",
              strokeOpacity: "0.87",
              strokeWidth: "1.77778",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, i.jsx)("path", {
              d: "M15.75 10.5L2.25 10.5",
              stroke: "white",
              strokeOpacity: "0.87",
              strokeWidth: "1.77778",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, i.jsx)("path", {
              d: "M12.75 13.5L2.25 13.5",
              stroke: "white",
              strokeOpacity: "0.87",
              strokeWidth: "1.77778",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          });
  
        function Me(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t];
          return o
        }
  
        function Be(e, n, t, o, r, i, l) {
          try {
            var a = e[i](l),
              d = a.value
          } catch (c) {
            return void t(c)
          }
          a.done ? n(d) : Promise.resolve(d).then(o, r)
        }
  
        function Ie(e) {
          return function () {
            var n = this,
              t = arguments;
            return new Promise((function (o, r) {
              var i = e.apply(n, t);
  
              function l(e) {
                Be(i, o, r, l, a, "next", e)
              }
  
              function a(e) {
                Be(i, o, r, l, a, "throw", e)
              }
              l(void 0)
            }))
          }
        }
  
        function Pe(e, n, t) {
          return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[n] = t, e
        }
  
        function _e(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              o = Object.keys(t);
            "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })))), o.forEach((function (n) {
              Pe(e, n, t[n])
            }))
          }
          return e
        }
  
        function Re(e) {
          return function (e) {
            if (Array.isArray(e)) return Me(e)
          }(e) || function (e) {
            if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
          }(e) || function (e, n) {
            if (!e) return;
            if ("string" === typeof e) return Me(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Me(e, n)
          }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }
        var He = t(3229),
          We = !0,
          ze = function (e) {
            var n, t = function () {
                var e = [];
                return z ? (ne(z[0].children, e), e) : []
              },
              o = function (e) {
                return z.map((function (n) {
                  return R.createdAt === n.createdAt ? _e({}, n, {
                    data: e
                  }) : n.children ? (n.children = ie(e, null === n || void 0 === n ? void 0 : n.children), n) : n
                }))
              },
              a = function (e) {
                var n, t, o = null === z || void 0 === z || null === (n = z[0]) || void 0 === n || null === (t = n.children) || void 0 === t ? void 0 : t.map((function (n) {
                    return R.createdAt === n.createdAt ? (window.fs.writeFileSync("".concat((0, h.Hm)(R)), e, "utf8"), (null === n || void 0 === n ? void 0 : n.createdAt) === (null === G || void 0 === G ? void 0 : G.createdAt) && K(_e({}, null !== G && void 0 !== G ? G : {}, {
                      data: e
                    })), _e({}, n, {
                      data: e
                    })) : ((null === n || void 0 === n ? void 0 : n.children) && (n.children = ae(n, e)), n)
                  })),
                  r = null === z || void 0 === z ? void 0 : z.map((function (e) {
                    return e.children = o, e
                  }));
                q(r)
              },
              c = function () {
                var e, n, t, o;
                return (0, i.jsxs)("div", {
                  className: Y ? "h-full editor bg-[#F5F5F5] border-r-[1px] border-b-[1px] overflow-hidden md:border-b-0 md:w-auto  browser dark:border-[#6C6C6C]" : "h-full editor bg-[#F5F5F5] border-r-[1px] border-b-[1px] md:border-b-0 md:w-auto overflow-hidden  dark:bg-[#1C2130] dark:border-[#FFFFFF33]",
                  children: [(0, i.jsxs)("div", {
                    className: "flex items-center justify-between bg-white dark:bg-[#2D2F34] overflow-x-auto tabList relative ",
                    children: [(0, i.jsx)(D, {
                      pages: z,
                      activePage: R,
                      setActivePage: H
                    }), (0, i.jsx)("div", {
                      className: "flex-1 flex h-[36px] border-b-[1px] border-[#e5e7eb] dark:border-gray-50 min-w-[50px]"
                    }), (0, i.jsx)("div", {
                      className: "px-[16px] py-[8px] absolute top-0 right-0 h-[36px] bg-transparent overflow-hidden format-icon cursor-pointer",
                      title: "Format Document",
                      onClick: re,
                      children: "dark" === j ? De : Ee
                    })]
                  }), (null === de || void 0 === de ? void 0 : de.length) ? "image" === R.mode ? (0, i.jsx)("div", {
                    className: "p-[50px] overflow-auto h-full ",
                    children: (0, i.jsx)(s(), {
                      src: null !== (e = R.data) && void 0 !== e ? e : "",
                      alt: ""
                    })
                  }) : "video" === R.mode ? (0, i.jsx)("div", {
                    className: "p-[50px] overflow-auto h-full ",
                    children: (0, i.jsx)("video", {
                      className: "VideoInput_video",
                      width: "100%",
                      height: "auto",
                      controls: !0,
                      src: R.data
                    })
                  }) : (0, i.jsx)(m, {
                    openCollapse: I,
                    value: null !== (n = R.data) && void 0 !== n ? n : "",
                    mode: null !== (t = R.mode) && void 0 !== t ? t : "xml",
                    active: null === (o = R.active) || void 0 === o || o,
                    editorName: "".concat(R.name, ".").concat(R.extension),
                    onChange: function (e) {
                      var n, t, o, r;
                      a(e), H(_e({}, null !== R && void 0 !== R ? R : {}, {
                        data: e,
                        name: null !== (n = R.name) && void 0 !== n ? n : "",
                        path: null !== (t = R.path) && void 0 !== t ? t : "/",
                        parent: null !== (o = R.parent) && void 0 !== o ? o : "rootFolder",
                        createdAt: null !== (r = R.createdAt) && void 0 !== r ? r : Date.now()
                      })), "html" === R.extension && R.createdAt !== (null === G || void 0 === G ? void 0 : G.createdAt) && K(R)
                    }
                  }) : (0, i.jsx)("div", {})]
                })
              },
              f = b,
              v = (0, l.useContext)(be.K),
              x = v.openCloseSideDrawer,
              g = v.setOpenCloseSideDrawer,
              y = (0, l.useContext)(p.TableContext),
              j = y.editorTheme,
              k = y.isHeaderMax,
              F = (0, l.useRef)(null),
              A = (0, l.useRef)(null),
              C = (0, l.useState)([]),
              N = C[0],
              S = C[1],
              L = (0, l.useState)(!0),
              O = L[0],
              T = L[1],
              E = (0, l.useState)(!1),
              I = E[0],
              P = E[1],
              _ = (0, l.useState)(null !== (n = f[0]) && void 0 !== n ? n : w),
              R = _[0],
              H = _[1],
              W = (0, l.useState)(f),
              z = W[0],
              q = W[1],
              Z = (0, l.useState)(),
              J = Z[0],
              U = Z[1],
              V = (0, l.useState)(t()[0]),
              G = V[0],
              K = V[1],
              X = (0, l.useState)(!1),
              Y = X[0],
              $ = X[1],
              Q = (0, l.useContext)(p.TableContext).setFsInWindow;
  
            function ne(e, n) {
              null === e || void 0 === e || e.forEach((function (e) {
                var t;
                if ("html" === e.extension) return n.push(e), e;
                (null === (t = e.children) || void 0 === t ? void 0 : t.length) && ne(e.children, n)
              }))
            }
  
            function te(e) {
              var n;
              null === (n = e.children) || void 0 === n || n.forEach((function (e) {
                var n;
                e.extension ? window.fs.writeFile("".concat((0, h.Hm)(e)), null !== (n = e.data) && void 0 !== n ? n : "", "utf8", (function () {})) : e.children && (window.fs.mkdirSync(e.name), te(e))
              }))
            }(0, l.useEffect)((function () {
              T(k), $(!k), P(k)
            }), [k]), (0, l.useEffect)((function () {
              J || U(f[0]), window && window.innerWidth > 775 && P(!1)
            }), []), (0, l.useEffect)((function () {
              He.install(window), He.configure({
                fs: "LocalStorage",
                options: {}
              }, (function (e) {
                var n;
                if (e) throw e;
                window.fs = window.require("fs");
                var t = He.BFSRequire("fs");
                null === (n = f[0].children) || void 0 === n || n.forEach((function (e) {
                  e.extension ? t.writeFile("".concat((0, h.Hm)(e)), e.data, "utf8") : e.children && (window.fs.existsSync(e.name) || window.fs.mkdirSync(e.name), te(e))
                })), Q(!0)
              }))
            }), []), (0, l.useEffect)((function () {
              ! function () {
                le.apply(this, arguments)
              }()
            }), []), (0, l.useEffect)((function () {
              window.onmessage = function (e) {
                "editor-iframe" === e.data.source && S((function (n) {
                  return Re(n).concat([e.data.message])
                }))
              }
            }), []);
            var re = function () {
              if (R) {
                var e, n, t, r, i = function () {
                    var e = R.mode;
                    return "css" === e ? Te.css : "xml" === e ? Te.html : Te.js
                  }(),
                  l = null !== (t = R.data) && void 0 !== t ? t : "";
                l = i(l), H((function () {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null !== (r = null === (e = f[0]) || void 0 === e || null === (n = e.children) || void 0 === n ? void 0 : n[0]) && void 0 !== r ? r : w;
                  return _e({}, t, {
                    data: null !== l && void 0 !== l ? l : ""
                  })
                }));
                var a = o(l);
                q(a)
              }
            };
  
            function ie(e, n) {
              return null === n || void 0 === n ? void 0 : n.map((function (n) {
                return R.createdAt === n.createdAt ? _e({}, n, {
                  data: e
                }) : n.children ? (n.children = ie(e, null === n || void 0 === n ? void 0 : n.children), n) : n
              }))
            }
  
            function le() {
              return (le = Ie(r().mark((function e() {
                var n, t;
                return r().wrap((function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return q(null !== f && void 0 !== f ? f : []), t = null === (n = f[0].children) || void 0 === n ? void 0 : n.find((function (e) {
                        return e.extension
                      })), H(null !== t && void 0 !== t ? t : w), e.abrupt("return");
                    case 5:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })))).apply(this, arguments)
            }
  
            function ae(e, n) {
              var t;
              return null === (t = e.children) || void 0 === t ? void 0 : t.map((function (e) {
                return R.createdAt === e.createdAt ? (window.fs.writeFileSync("".concat((0, h.Hm)(R)), n, "utf8"), (null === e || void 0 === e ? void 0 : e.createdAt) === (null === G || void 0 === G ? void 0 : G.createdAt) && K(_e({}, null !== G && void 0 !== G ? G : {}, {
                  data: n
                })), _e({}, e, {
                  data: n
                })) : (null === e || void 0 === e ? void 0 : e.children) ? (e.children = ae(e, n), e) : e
              }))
            }
            var de = (0, h.bE)(z);
            return (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsxs)(d(), {
                children: [(0, i.jsx)("meta", {
                  name: "description",
                  content: "Write and run HTML, CSS and JavaScript code using our online editor. Our HTML editor updates the webview automatically in real-time as you write code. Give it a try."
                }), (0, i.jsx)("link", {
                  rel: "canonical",
                  href: ""
                }), (0, i.jsx)("title", {
                  className: "dark:bg-slate-50",
                  children: "Online HTML Editor"
                }), (0, i.jsx)("script", {
                  async: !0,
                  id: "google-analytics4-1",
                  dangerouslySetInnerHTML: {
                    __html: 'var url=window.location.href;window.googletag=window.googletag||{cmd:[]},window.googletag.cmd.push(function(){switch(!0){case url.includes("/python-programming/numpy"):window.googletag.pubads().setTargeting("prog_lang","numpy");break;case url.includes("/sql"):window.googletag.pubads().setTargeting("prog_lang","sql");break;case url.includes("/c-programming"):window.googletag.pubads().setTargeting("prog_lang","c_programming");break;case url.includes("/cpp-programming"):window.googletag.pubads().setTargeting("prog_lang","c_plus_plus");break;case url.includes("/csharp-programming"):window.googletag.pubads().setTargeting("prog_lang","c_sharp_lang");break;case url.includes("/dsa"):window.googletag.pubads().setTargeting("prog_lang","dsa");break;case url.includes("/java-programming"):window.googletag.pubads().setTargeting("prog_lang","java");break;case url.includes("/javascript"):window.googletag.pubads().setTargeting("prog_lang","javascript");break;case url.includes("/kotlin-programming"):window.googletag.pubads().setTargeting("prog_lang","kotlin");break;case url.includes("/python-programming"):window.googletag.pubads().setTargeting("prog_lang","python");break;case url.includes("/swift-programming"):window.googletag.pubads().setTargeting("prog_lang","swift")}});'
                  }
                }), (0, i.jsx)("script", {
                  async: !0,
                  src: "https://cmp.uniconsent.com/v2/stub.min.js"
                }), (0, i.jsx)("script", {
                  async: !0,
                  src: "https://cmp.uniconsent.com/v2/a8d3ae4937/cmp.js"
                }), (0, i.jsx)("script", {
                  async: !0,
                  id: "google-analytics4-2",
                  dangerouslySetInnerHTML: {
                    __html: "window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.googletag.cmd.push(function(){window.googletag.pubads().enableAsyncRendering(),window.googletag.pubads().disableInitialLoad()}),(adsbygoogle=window.adsbygoogle||[]).pauseAdRequests=1;"
                  }
                }), (0, i.jsx)("script", {
                  async: !0,
                  id: "google-analytics4-4",
                  dangerouslySetInnerHTML: {
                    __html: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TKXT7MH');"
                  }
                })]
              }), x && (0, i.jsxs)("div", {
                className: "flex",
                children: [(0, i.jsx)("div", {
                  onClick: function (e) {
                    return g(!1)
                  },
                  className: "md:hidden w-full h-full fixed bg-[#00000080] top-0 left-0 z-10 "
                }), (0, i.jsxs)("div", {
                  className: "flex bg-white h-full z-10 fixed top-0 left-0 w-42 pt-[16px] md:hidden dark:bg-[#2D2F34] ",
                  children: [(0, i.jsx)(Se, {
                    activePage: R,
                    setActivePage: H,
                    pages: z,
                    frameRef: F,
                    setPages: q,
                    mobileFrameRef: A,
                    setSelectedType: U,
                    selectedType: J,
                    activeHtmlFile: G,
                    setActiveHtmlFile: K,
                    getAllHtmlFiles: t
                  }), (0, i.jsx)("div", {
                    className: "absolute right-[12px] top-[21px] cursor-pointer ",
                    children: (0, i.jsx)(s(), {
                      height: "14px",
                      width: "7px",
                      src: "dark" === j ? B : M,
                      alt: "Minimize file structure icon",
                      onClick: function () {
                        return g(!1)
                      }
                    })
                  })]
                })]
              }), (0, i.jsxs)("div", {
                className: "flex flex-col md:flex-row z-1 ".concat("h-full"),
                children: [(0, i.jsx)("div", {
                  className: "hidden md:block dark:bg-[#2D2F34] ",
                  children: O ? (0, i.jsx)(Se, {
                    activePage: R,
                    setActivePage: H,
                    pages: z,
                    frameRef: F,
                    setPages: q,
                    setSelectedType: U,
                    selectedType: J,
                    mobileFrameRef: A,
                    activeHtmlFile: G,
                    setActiveHtmlFile: K,
                    getAllHtmlFiles: t
                  }) : (0, i.jsx)("div", {
                    className: "w-12",
                    children: " "
                  })
                }), (0, i.jsxs)("div", {
                  className: "editorBrowserWrapper flex flex-col w-full h-full justify-between",
                  children: [(0, i.jsx)("div", {
                    className: "hidden md:block absolute cursor-pointer border-[1px] rounded-md bg-white shadow-sm z-10 -ml-[0.8rem] mt-[4.98px] w-[24px] h-[23.87px] dark:border-gray-50 dark:bg-[#2D2F34] ",
                    onClick: function () {
                      return T(!O)
                    },
                    children: (0, i.jsx)(s(), {
                      height: "20px",
                      width: "20px",
                      src: "dark" === j ? Oe : Le,
                      alt: "",
                      className: "".concat(O && "rotate-180 ")
                    })
                  }), (0, i.jsx)("div", {
                    className: "flex overflow-hidden ".concat(I ? "md:h-[calc(100vh-322px)] h-screen-small" : "h-full h-screen-small md:h-[calc(100vh-139px)]", " md:flex-grow"),
                    children: Y ? (0, i.jsxs)(i.Fragment, {
                      children: [c(), (0, i.jsx)("div", {
                        className: "dark:hidden md:block p-2 text-blue-50 cursor-pointer",
                        onClick: function () {
                          return $(!Y)
                        },
                        children: (0, i.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "h-6 w-6",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentcolor",
                          strokeWidth: 2,
                          children: (0, i.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          })
                        })
                      }), (0, i.jsx)("div", {
                        className: "hidden dark:md:block p-2 text-blue-50 cursor-pointer dark:bg-[#2D2F34]",
                        onClick: function () {
                          return $(!Y)
                        },
                        children: (0, i.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "h-6 w-6",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "#fff",
                          strokeWidth: 2,
                          children: (0, i.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          })
                        })
                      })]
                    }) : (0, i.jsxs)(u.Z, {
                      direction: "horizontal",
                      className: "flex flex-col w-full md:flex-row overflow-hidden md:flex-wrap",
                      children: [c(), (0, i.jsx)(ee, {
                        frameRef: F,
                        pages: z,
                        logs: N,
                        selectedType: J,
                        activeTabPage: R,
                        setActiveTabPage: H,
                        bootstrapContent: e.bootstrapContent,
                        activeHtmlFile: G,
                        setActiveHtmlFile: K,
                        getAllHtmlFiles: t,
                        setMinimizeBrowser: $,
                        minimizeBrowser: Y,
                        setLogs: S
                      })]
                    })
                  }), (0, i.jsx)(oe, {
                    setOpenCollapse: P,
                    openCollapse: I,
                    logs: N
                  })]
                })]
              }), (0, i.jsx)("noscript", {
                children: (0, i.jsx)("iframe", {
                  src: "https://www.googletagmanager.com/ns.html?id=GTM-TKXT7MH",
                  height: "0",
                  width: "0",
                  style: {
                    display: "none",
                    visibility: "hidden"
                  }
                })
              })]
            })
          }
      }
    },
    function (e) {
      e.O(0, [126, 168, 753, 774, 888, 179], (function () {
        return n = 8312, e(e.s = n);
        var n
      }));
      var n = e.O();
      _N_E = n
    }
  ]);