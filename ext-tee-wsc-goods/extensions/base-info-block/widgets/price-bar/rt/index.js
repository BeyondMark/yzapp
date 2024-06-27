"use strict";
var r = require("~/r");
r(
  "6Ays",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "6Ays": function (e, t, i) {
      i.r(t);
      var r = i("ONqW"),
        a = i("3vAz"),
        s = {
          props: { opt: { type: Object, default: () => ({}) } },
          watch: {
            "opt.priceInfo": function (e) {
              void 0 === e && (e = {}), this.afterPriceTagChange(e.tags);
            },
          },
          created() {
            this.afterPriceTagChange((this.opt.priceInfo || {}).tags);
          },
          methods: {
            afterPriceTagChange(e) {
              if (!this.isShowCouponTag && e && e.length) {
                var t = e.find((e) => (e.preText || "").includes("券后"));
                if (t) {
                  var i = a.b[t.type];
                  if (void 0 !== i) {
                    var s = /起$/.test(t.sufText);
                    (this.isShowCouponTag = !0),
                      Object(r.a)().log({
                        et: "view",
                        ei: "coupon_price",
                        en: "展示券后价",
                        params: {
                          isshow_qi: Number(s),
                          is_activity: i,
                          component: "estimated_price",
                        },
                      });
                  }
                }
              }
            },
          },
          ud: !0,
        },
        o = i("9ZMt");
      t.default = o.default.component(s);
    },
  })
);
