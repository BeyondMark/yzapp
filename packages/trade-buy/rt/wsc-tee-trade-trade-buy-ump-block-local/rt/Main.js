"use strict";
var r = require("~/r");
r(
  "OIQL",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      OIQL: function (r, e, t) {
        t.r(e);
        var n = t("HKyO"),
          u = {
            data() {
              return Object(n.a)(this), {};
            },
          },
          i = t("9ZMt");
        e.default = i.default.component(u);
      },
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
          return u;
        });
        var n = t("W1Ke");
        function u() {
          var r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = r.memberCardStartTime,
            t = r.memberCardEndTime;
          if (e && t) return e + "-" + t;
          var u = r.sku,
            i = (u = Array.isArray(u)
              ? u
              : u && "string" == typeof u
              ? JSON.parse(u)
              : [])
              .filter(function (r) {
                return r.v;
              })
              .map(function (r) {
                return r.v;
              })
              .join(", "),
            o = Object(n.a)(r.properties);
          return [i, o]
            .filter(function (r) {
              return !!r;
            })
            .join(", ");
        }
      },
    }
  )
);
