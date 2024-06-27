"use strict";
var r = require("~/r");
r(
  "8LIl",
  Object.assign({}, require("~/v.js").modules, {
    "8LIl": function (e, s, t) {
      t.r(s);
      var r = t("Fcif"),
        i = t("VmHG"),
        h = {
          data() {
            return (
              (this.store = this.ctx.store),
              Object(r.a)(
                {},
                Object(i.d)(this, [
                  "themeColors",
                  "themeCSS",
                  "customerCards",
                  "canMembershipLink",
                  "isMembershipDisabled",
                  "displayCustomerCard",
                  "membershipTitle",
                  "showMembershipCell",
                  "showCustomerCardCheck",
                ])
              )
            );
          },
          methods: {
            onShowTips() {
              this.store.onShowMembershipTips();
            },
            onClickCell() {
              this.store.onClickMembershipCell();
            },
            onChangeSwitch(e) {
              this.store.onMembershipChangeSwitch(e);
            },
          },
        },
        o = t("9ZMt");
      s.default = o.default.component(h);
    },
  })
);
