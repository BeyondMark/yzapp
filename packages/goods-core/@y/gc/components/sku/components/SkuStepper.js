"use strict";
var r = require("~/r");
r(
  "U32u",
  Object.assign({}, require("~/v.js").modules, {
    U32u: function (t, e, r) {
      r.r(e);
      var i = r("Fcif"),
        u = r("AGZf"),
        n = r("cJj0"),
        a = r("dKdR"),
        o = {
          externalClasses: ["custom-class"],
          props: { opt: Object, customStyle: String },
          methods: {
            getStepperValid(t) {
              var {
                startSaleNum: e,
                quota: r,
                quotaUsed: u,
                limitType: o,
                customOverLimit: s,
              } = this.opt;
              if (s)
                return Object(a.a)(Object(i.a)({}, this.opt, { action: t }));
              if ("minus" === t) return e > 1 ? e + "件起售" : "至少选择一件";
              if ("plus" === t) {
                var c = u > 0 ? "，你已购买" + u + "件" : "";
                n.b.QUOTA_LIMIT;
                return "库存不足";
              }
            },
            onOverLimit(t) {
              var e = this.getStepperValid(t);
              e &&
                (Object(u.a)({ message: e, zIndex: 99999 }),
                this.$emit("over-limit", { validate: !1, errorMsg: e }));
            },
            onChange(t) {
              var e = parseInt(t, 10),
                { stepperMinLimit: r, stepperLimit: i } = this.opt;
              e < r || r > i ? (e = r) : e > i && (e = i),
                this.$emit("change", e);
            },
          },
          ud: !0,
        },
        s = r("9ZMt");
      e.default = s.default.component(o);
    },
    cJj0: function (t, e, r) {
      r.d(e, "b", function () {
        return i;
      }),
        r.d(e, "a", function () {
          return u;
        });
      var i = { QUOTA_LIMIT: 0, STOCK_LIMIT: 1 },
        u = "display: block; width: 100%;";
    },
    dKdR: function (t, e, r) {
      var i, u;
      r.d(e, "b", function () {
        return s;
      }),
        r.d(e, "a", function () {
          return c;
        }),
        (function (t) {
          (t[(t.forever = 0)] = "forever"),
            (t[(t.days = 1)] = "days"),
            (t[(t.weeks = 2)] = "weeks"),
            (t[(t.months = 3)] = "months"),
            (t[(t.order = 4)] = "order");
        })(i || (i = {})),
        (function (t) {
          (t[(t.quotaLimit = 0)] = "quotaLimit"),
            (t[(t.stockLimit = 1)] = "stockLimit");
        })(u || (u = {}));
      var n = { 0: "", 1: "每天", 2: "每周", 3: "每月", 4: "每单" };
      function a(t) {
        var { buyWayText: e = "购买" } = t;
        return e && "string" == typeof e ? [e.slice(0, 1), e] : ["购", "购买"];
      }
      function o(t) {
        var { singleQuota: e = -1 } = t;
        return e && e > 0 ? e : -1;
      }
      function s(t) {
        var {
            quota: e = 0,
            quotaUsed: r = 0,
            quotaCycle: i = 0,
            quotaUnit: u = "件",
            startSaleNum: s = 1,
            hideQuotaText: c = !1,
          } = t,
          d = [];
        s > 1 && d.push("" + s + u + "起售");
        var f = o(t),
          [m] = a(t),
          p = !c && n[i] ? n[i] : "";
        return (
          f > 0 && e - r >= f
            ? d.push("一次限" + m + f + u)
            : e > 0 && d.push(p + "限" + m + e + u),
          d.join("，")
        );
      }
      function c(t) {
        var {
          quota: e = 0,
          quotaUsed: r = 0,
          quotaCycle: u = 0,
          quotaUnit: s = "件",
          startSaleNum: c = 1,
          hideQuotaText: d = !1,
          limitType: f,
          action: m,
        } = t;
        if ("minus" === m)
          return c > 1
            ? "该商品" + c + s + "起售哦"
            : "至少选择一" + s + "商品";
        var p = o(t),
          [l, v] = a(t),
          h = (!d && n[u]) || "";
        if ("plus" === m) {
          if (0 === f) {
            if (p > 0 && e - r >= p) return "一次最多能" + v + p + s;
            var q =
              "该商品" + (u === i.order ? "" : "每人") + h + "限" + l + e + s;
            return r > 0 && (q += "，\n你之前已" + v + "了" + r + s + "。"), q;
          }
          return "该商品库存不足";
        }
        return "";
      }
    },
  })
);
