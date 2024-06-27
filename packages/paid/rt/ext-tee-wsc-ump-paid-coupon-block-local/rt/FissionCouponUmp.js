"use strict";
var r = require("~/r");
r(
  "6E2c",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "6E2c": function (i, s, e) {
        e.r(s);
        var t = e("9ZMt"),
          o = e("b4An"),
          n = e("YeA1"),
          d = e("Mp2s"),
          r = e("nlLt"),
          c = {
            data: () => ({ fissionCoupon: {}, kdtId: 0, isWxReceipt: !1 }),
            mounted() {
              this.isWxReceipt
                ? this.ctx.process.invoke(
                    "logger",
                    "view",
                    "show_liebianquan",
                    "裂变券曝光",
                    { si: this.kdtId, kdt_id: this.kdtId }
                  )
                : this.ctx.logger.log({
                    et: "view",
                    ei: "show_liebianquan",
                    en: "裂变券曝光",
                    si: this.kdtId,
                  });
            },
            created() {
              Object(n.b)(this, ["orderNo", "kdtId", "isWxReceipt"]),
                (this.payResultUnWatch = this.ctx.watch("payResult", (i) => {
                  var s;
                  this.isWxReceipt
                    ? (this.fissionCoupon = Object(d.a)(
                        i,
                        "shopPayResult.shopCoupons[0].orderCoupons[0]",
                        {}
                      ))
                    : (this.fissionCoupon = Object(d.a)(
                        i,
                        "shopCoupons[0].orderCoupons[0]",
                        {}
                      )),
                    (this.fissionCouponReceiveOrderNo =
                      null !=
                      (s = null == i ? void 0 : i.fissionCouponReceiveOrderNo)
                        ? s
                        : "");
                })),
                this.ctx.process.define("getFissionShare", () =>
                  Object(r.a)(
                    this.fissionCoupon,
                    this.fissionCouponReceiveOrderNo
                  )
                );
            },
            destroyed() {
              var i;
              null == (i = this.payResultUnWatch) || i.call(this);
            },
            methods: {
              clickFissionCoupon() {
                setTimeout(() => {
                  var i,
                    s,
                    e =
                      "/packages/ump/fission/index?order_no=" +
                      ((null == (i = this.fissionCoupon)
                        ? void 0
                        : i.orderNo) || this.orderNo);
                  t.default.navigate({ url: e });
                  var n = Object(d.a)(window, "_global.url", {}),
                    r = Object(o.a)(
                      n.wap +
                        "/ump/fission/list?isshare=1&kdt_id=" +
                        this.kdtId +
                        "&order_no=" +
                        ((null == (s = this.fissionCoupon)
                          ? void 0
                          : s.orderNo) || this.orderNo),
                      "",
                      this.kdtId
                    );
                  this.isWxReceipt
                    ? this.ctx.process.invoke("navigateTo", r)
                    : t.default.navigate({ url: r });
                }, 1e3),
                  this.isWxReceipt
                    ? this.ctx.process.invoke(
                        "logger",
                        "click",
                        "click_liebianquan",
                        "裂变券点击",
                        { si: this.kdtId, kdt_id: this.kdtId }
                      )
                    : this.ctx.logger.log({
                        et: "click",
                        ei: "click_liebianquan",
                        en: "裂变券点击",
                        si: this.kdtId,
                      });
              },
            },
            ud: !0,
          };
        s.default = t.default.component(c);
      },
    }
  )
);
