"use strict";
var r = require("~/r");
r(
  "X7U1",
  Object.assign(
    {},
    require("../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "1F7m": function (t, e, r) {
        r.d(e, "a", function () {
          return n;
        });
        var n = { TINY_PAGE: 6, COUPONS: 13, BROWSE_GOODS: 21, OTHER: 14 };
      },
      LniI: function (t, e) {},
      X7U1: function (t, e, r) {
        r.r(e);
        r("2DFz"), r("D202");
      },
      b1kB: function (t, e) {},
      cxMM: function (t, e) {},
      gc3r: function (t, e, r) {
        r.d(e, "b", function () {
          return O;
        }),
          r.d(e, "a", function () {
            return f;
          });
        var n = r("Fcif"),
          c = r("jA1y"),
          s = r("vgcL"),
          u = r("2wjL"),
          a = r("u8kV"),
          o = r("rDSc"),
          i = r("8B9M"),
          j = function (t, e) {
            t || (!1 !== e.isNeedShareMore && this.setYZData({ salesman: e }));
          },
          O = (t) => {
            var e = Object(o.a)(Object(n.a)({}, t, { path: t.url }), "url");
            return Object(c.c)(e);
          },
          f = function (t) {
            var {
                scene: e,
                sst: r,
                gst: c,
                getSalesmanData: o = j,
                query: f,
              } = t,
              g = Object(i.a)() || {},
              b = g.getToken() || {},
              { route: l = "", options: d = {} } = Object(a.d)(),
              m = f || d,
              v = u.a.add(l, m),
              h = { gst: (c = c || Object(s.e)(e)), sst: r, sourceUrl: v },
              { yzUserId: p } = b;
            Object(s.f)({
              url: v,
              logParams: g.logger.getLogParams && g.logger.getLogParams(),
              userId: p,
              request: O,
            }),
              Object(s.a)(Object(n.a)({}, h)),
              Object(s.b)({}, o.bind(this));
          };
      },
      jHjV: function (t, e, r) {
        function n(t, e, r) {
          for (var n = e.split("."), c = t, s = 0; s < n.length - 1; s++) {
            var u = n[s];
            (Object.prototype.hasOwnProperty.call(c, u) &&
              "object" == typeof c[u]) ||
              (c[u] = {}),
              (c = c[u]);
          }
          c[n[n.length - 1]] = r;
        }
        r.d(e, "a", function () {
          return n;
        });
      },
    }
  )
);
