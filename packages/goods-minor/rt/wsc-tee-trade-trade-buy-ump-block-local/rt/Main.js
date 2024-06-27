"use strict";
var r = require("~/r");
r(
  "tizy",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      W1Ke: function (r, e, t) {
        function n() {
          var r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            e = [];
          return (
            r.forEach(function (r) {
              ((null == r ? void 0 : r.propValueList) || []).forEach(function (
                r
              ) {
                e.push(r.propValueName);
              });
            }),
            e.join("，")
          );
        }
        t.d(e, "a", function () {
          return n;
        });
      },
      sqpL: function (r, e, t) {
        t.d(e, "a", function () {
          return i;
        });
        var n = t("W1Ke");
        function i() {
          var r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = r.memberCardStartTime,
            t = r.memberCardEndTime;
          if (e && t) return e + "-" + t;
          var i = r.sku,
            u = (i = Array.isArray(i)
              ? i
              : i && "string" == typeof i
              ? JSON.parse(i)
              : [])
              .filter(function (r) {
                return r.v;
              })
              .map(function (r) {
                return r.v;
              })
              .join(", "),
            o = Object(n.a)(r.properties);
          return [u, o]
            .filter(function (r) {
              return !!r;
            })
            .join(", ");
        }
      },
      tizy: function (r, e, t) {
        t.r(e);
        var n = t("Zflq"),
          i = {
            data() {
              return Object(n.a)(this), {};
            },
          },
          u = t("9ZMt");
        e.default = u.default.component(i);
      },
    }
  )
);
