"use strict";
var r = require("~/r");
r(
  "/Z3s",
  Object.assign({}, require("~/v.js").modules, {
    "/Z3s": function (e, t, r) {
      r.r(t);
      var s = r("Fcif"),
        a = r("VmHG"),
        d = {
          data() {
            return (
              (this.store = this.ctx.store),
              Object(s.a)(
                {},
                Object(a.d)(this, [
                  "display",
                  "displayCard",
                  "displayCardStyles",
                  "orderCreated",
                  "kdtId",
                  "hasDisplayCard",
                  "hasFreeMemberCard",
                  "freecardBenefitInfo",
                  "hasCurrentAddress",
                ])
              )
            );
          },
          watch: {
            hasDisplayCard: {
              immediate: !0,
              handler(e) {
                e &&
                  !this.postLogAlready &&
                  (this.postLog({
                    et: "view",
                    ei: "member_guide",
                    en: "下单引导办卡组件曝光",
                  }),
                  (this.postLogAlready = !0));
              },
            },
          },
          created() {
            Object(a.b)(this, [
              "postLog",
              "onRegister",
              "openAgree",
              "onShowVirtualCouponList",
            ]);
          },
          methods: {
            onToggle(e) {
              this.store.handleDisplayCardToggle(e);
            },
            handleClose() {
              this.store.handleFreeMemberClose();
            },
          },
        },
        i = r("9ZMt");
      t.default = i.default.component(d);
    },
  })
);
