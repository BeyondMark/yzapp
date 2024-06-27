"use strict";
var r = require("~/r");
r(
  "Y2Pm",
  Object.assign({}, require("~/v.js").modules, {
    Y2Pm: function (t, e, o) {
      o.r(e);
      var s = o("Fcif"),
        i = o("VmHG"),
        r = {
          props: { opt: Object },
          data() {
            return (
              (this.store = this.ctx.store),
              Object(s.a)(
                { isTTVerifyRetailScene: !1 },
                Object(i.d)(this, [
                  "useCustomTitleSlot",
                  "tagBackgroundColor",
                  "themeColors",
                ])
              )
            );
          },
          computed: {
            title() {
              return this.useCustomTitleSlot
                ? ""
                : this.opt.customTitle || "优惠券";
            },
            titleWidth() {
              return this.useCustomTitleSlot
                ? ""
                : this.opt.chosenCoupons.length > 1
                ? "150px"
                : "75px";
            },
          },
          created() {},
          methods: {
            showCouponList() {
              this.isTTVerifyRetailScene ||
                this.store.onShowCouponList(this.opt.showCouponGroupType);
            },
          },
        },
        u = o("9ZMt");
      e.default = u.default.component(r);
    },
  })
);
