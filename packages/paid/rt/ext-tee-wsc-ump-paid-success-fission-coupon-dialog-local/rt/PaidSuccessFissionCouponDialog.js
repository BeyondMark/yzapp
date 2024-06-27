"use strict";
var r = require("~/r");
r(
  "gr5f",
  Object.assign({}, require("~/v.js").modules, {
    gr5f: function (e, o, i) {
      i.r(o);
      var t = i("zMoS"),
        r = i("9ZMt"),
        s = {
          name: "fission-coupon-popup",
          data: () => ({ visible: !1, orderNo: "", newAwardInfo: {} }),
          computed: {
            activityInfo() {
              var e,
                o,
                {
                  valueDesc: i = 0,
                  unitDesc: t = "",
                  quantity: r = 0,
                  preDesc: s = "",
                  orderNo: n = "",
                } = null !=
                (e = null == (o = this.newAwardInfo) ? void 0 : o.fissionCoupon)
                  ? e
                  : {};
              return {
                valueDesc: i,
                unitDesc: t,
                preDesc: s,
                quantity: r,
                orderNo: n,
              };
            },
          },
          created() {
            this.ctx.event.listen("openFissionPopup", this.handleShow),
              (this.unwatchNewAwardInfo = this.ctx.watch(
                "newAwardInfo",
                (e) => {
                  this.newAwardInfo = e;
                }
              )),
              (this.orderNoUnWatch = this.ctx.watch("orderNo", (e) => {
                this.orderNo = e;
              })),
              this.ctx.process.define("getFissionShare", () => {
                var { orderNo: e, newAwardInfo: o } = this.ctx.data,
                  {
                    orderNo: i,
                    shareLinkImgUrl: t,
                    customShareDesc: r,
                    fissionId: s,
                  } = (null == o ? void 0 : o.fissionCoupon) || {};
                return {
                  imageUrl:
                    t ||
                    "https://img01.yzcdn.cn/public_files/a1f754e856b5d7ffdad8cc96dd98b9c0.jpg",
                  title: "" + (r || "送你一个优惠券大礼包"),
                  path:
                    "/packages/ump/fission/index?order_no=" +
                    (i || e) +
                    "&fissionId=" +
                    s,
                };
              });
          },
          destroyed() {
            this.ctx.event.remove("openFissionPopup"),
              this.unwatchNewAwardInfo && this.unwatchNewAwardInfo(),
              this.orderNoUnWatch && this.orderNoUnWatch();
          },
          methods: {
            selfShareClick(e) {
              var o = Object(t.a)(e, "target.dataset.detail", "");
              this.$emit("share", o),
                setTimeout(() => {
                  var e, o;
                  (o =
                    "/packages/ump/fission/index?order_no=" +
                    ((null == (e = this.activityInfo) ? void 0 : e.orderNo) ||
                      this.orderNo)),
                    r.default.navigate({ url: o });
                }, 1e3),
                this.ctx.logger.log({
                  et: "click",
                  ei: "click_divide_coupon_pop",
                  en: "裂变优惠券弹窗点击",
                  params: {
                    component: "divide_coupon_pop",
                    orderNo: this.orderNo,
                  },
                });
            },
            handleShow() {
              (this.visible = !0),
                this.ctx.logger.log({
                  et: "view",
                  ei: "view_divide_coupon_pop",
                  en: "裂变优惠券弹窗曝光",
                  params: {
                    component: "divide_coupon_pop",
                    orderNo: this.orderNo,
                  },
                });
            },
            handleClose() {
              (this.visible = !1),
                this.ctx.event.emit("closeAutoOpenPopup", { isRealClose: !0 });
            },
          },
          ud: !0,
        };
      o.default = r.default.component(s);
    },
  })
);
