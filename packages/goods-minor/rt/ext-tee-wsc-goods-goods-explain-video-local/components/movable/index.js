"use strict";
var r = require("~/r");
r(
  "123w",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "123w": function (e, t, r) {
        r.r(t);
        var a = r("9ZMt"),
          u = r("MLLI"),
          i = r("aOlM"),
          l = r("46RF"),
          { windowWidth: n, screenWidth: s } = Object(u.b)() || {},
          o = "web" === a.default.getEnv() ? n : s,
          d = o - l.a - 16,
          h = {
            props: {
              danmakuSource: { type: Array, default: () => [] },
              isFullScreen: { type: Boolean, default: !1 },
            },
            data() {
              var e,
                t = !(null == (e = this.danmakuSource) || !e.length);
              return { x: d, y: t ? 130 : 45 };
            },
            methods: {
              setXY: Object(i.a)(function (e) {
                var { x: t, y: r, source: a } = e;
                if (a) {
                  var u = t;
                  t < 0 ? (u = 0) : t > d && (u = d),
                    (this.x = u),
                    (this.y = r);
                }
              }, 50),
              handleChange(e) {
                this.setXY((null == e ? void 0 : e.detail) || {});
              },
              handleTouchend() {
                var e = setTimeout(() => {
                  if (this.x === d || 0 === this.x)
                    return clearTimeout(e), void (e = null);
                  var t = Math.floor(o / 2),
                    r = l.a / 2;
                  this.x > t - r ? (this.x = d) : (this.x = 0),
                    clearTimeout(e),
                    (e = null);
                }, 100);
              },
            },
          };
        t.default = a.default.component(h);
      },
    }
  )
);
