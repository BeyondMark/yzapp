"use strict";
var r = require("~/r");
r(
  "r80R",
  Object.assign(
    {},
    require("../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "11c8": function (t, n) {},
      "2m3T": function (t, n) {},
      "31+o": function (t, n) {},
      "4KEG": function (t, n) {},
      "9ME7": function (t, n) {},
      ABDU: function (t, n) {},
      AYC7: function (t, n) {},
      AiY9: function (t, n) {},
      COAg: function (t, n) {},
      EYwr: function (t, n) {},
      GZxp: function (t, n) {},
      Gc2q: function (t, n) {},
      "K0L/": function (t, n) {},
      LniI: function (t, n) {},
      ML4D: function (t, n) {},
      OhE7: function (t, n) {},
      REVB: function (t, n) {},
      RmQ0: function (t, n) {},
      "U3++": function (t, n) {},
      VeA7: function (t, n) {},
      XKO5: function (t, n, e) {
        function i(t) {
          return /^\d+$/.test("" + t);
        }
        function a(t) {
          var n,
            { share_from: e, card_type: a, img_ps: c } = t || {},
            [r, o] =
              (n = decodeURIComponent(c || "")) && "string" == typeof n
                ? n.split("|").map((t) =>
                    t
                      .split(",")
                      .filter((t) => i(t))
                      .map((t) => +t)
                  )
                : [];
          return {
            share_from: e,
            card_type: i(a) ? +a : void 0,
            img_process_types: r,
            img_process_sub_types: o,
          };
        }
        e.d(n, "b", function () {
          return i;
        }),
          e.d(n, "a", function () {
            return a;
          });
      },
      "YW/I": function (t, n, e) {
        e.d(n, "a", function () {
          return x;
        });
        var i = e("Fcif"),
          a = e("w2Y9"),
          c = e.n(a),
          r = e("mQXz"),
          o = e.n(r),
          s = e("KDJo"),
          u = e("2m3T"),
          f = e.n(u),
          h = e("4KEG"),
          d = e.n(h),
          p = e("U3++"),
          g = e.n(p),
          l = e("XKO5"),
          m = e("wGFT");
        class x {
          constructor(t) {
            this.ctx = t.ctx;
          }
          onShareAppMessage() {
            var { shareData: t, shopMetaInfo: n } = this.ctx.data,
              { id: e } = this.ctx.data.goods || {},
              a = t.path,
              r = a;
            if (t.isBooking) return t;
            if (a.startsWith("/pages/common/blank-page"))
              r = c.a.get("weappSharePath", a);
            else if (a.startsWith("undefined")) {
              var { getQuery: u, route: f } = this.ctx.env,
                h = a.replace("undefined", f),
                d = u();
              this.ctx.data.shareData.path = c.a.add(
                h,
                o()(d, ["access_token", "app_id", "prefetchKey"])
              );
            } else this.ctx.data.shareData.path = a;
            this.ctx.logger.log({
              et: "click",
              ei: "goods_share_result",
              en: "分享结果回调",
              si: "",
              params: { pagePath: r, sharePath: this.ctx.data.shareData.path },
            });
            var p = c.a.getAll(r);
            return (
              this.ctx.logger.log({
                et: "view",
                ei: "goods_share_trigger_view",
                en: "商品详情分享触发",
                pt: "g",
                pi: e,
                params: Object(i.a)({}, Object(l.a)(p), { goods_id: e }),
              }),
              Object(s.c)(n) && Object(m.a)(e),
              this.ctx.data.shareData
            );
          }
          onShareTimeline() {
            var { shareData: t } = this.ctx.data,
              n = t.path.slice(t.path.indexOf("?") + 1);
            return Object(i.a)({}, t, { query: n });
          }
        }
        x.widgets = { SharePop: d(), ActionItem: g(), Widget: f() };
      },
      b1kB: function (t, n) {},
      cuNv: function (t, n) {},
      cxMM: function (t, n) {},
      g1FG: function (t, n) {},
      gKWa: function (t, n) {},
      n0bX: function (t, n) {},
      r80R: function (t, n, e) {
        e.r(n);
        e("oFuE"), e("6Nk6");
      },
      vXaX: function (t, n) {},
      vmqh: function (t, n) {},
      "wxb/": function (t, n) {},
      xBI0: function (t, n, e) {
        e.d(n, "a", function () {
          return i;
        });
        class i {
          constructor(t) {
            var { ctx: n } = t;
            this.ctx = n;
          }
        }
      },
      ygrD: function (t, n, e) {
        e.d(n, "a", function () {
          return r;
        });
        var i = e("K0L/"),
          a = e.n(i),
          c = e("9mFz");
        class r {
          constructor(t) {
            (this.onSkuSelected = Object(c.h)()),
              (this.ctx = t.ctx),
              this.initCloudData();
          }
          initCloudData() {}
        }
        r.widgets = { Main: a() };
      },
    }
  )
);
