"use strict";
var r = require("~/r");
r(
  "Yhkq",
  Object.assign({}, require("~/v.js").modules, {
    Yhkq: function (e, s, t) {
      t.r(s);
      var i = t("Fcif"),
        r = t("9mFz"),
        a = t("VmHG"),
        h = {
          data() {
            return (
              (this.store = this.ctx.store),
              Object(i.a)(
                {
                  display: { openDisplayCard: !1 },
                  themeColors: {},
                  themeTag: { plain: !1 },
                  customerCards: { list: [], id: null },
                  unavailableCustomerCards: { list: [] },
                },
                Object(a.d)(this, ["showTips", "showMembership"])
              )
            );
          },
          created() {
            Object(r.b)(this, [
              "display",
              "themeColors",
              "themeTag",
              "customerCards",
              "unavailableCustomerCards",
            ]),
              Object(a.b)(this, [
                "onHideMembershipTips",
                "hideMembershipDialog",
                "onMembershipSelect",
              ]);
          },
          methods: {
            hideDialog() {
              this.hideMembershipDialog();
            },
            onSelect(e) {
              this.onMembershipSelect(e);
            },
          },
        },
        o = t("9ZMt");
      s.default = o.default.component(h);
    },
  })
);
