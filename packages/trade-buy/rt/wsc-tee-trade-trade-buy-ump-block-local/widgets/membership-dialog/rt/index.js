"use strict";
var r = require("~/r");
r(
  "Tyx9",
  Object.assign({}, require("~/v.js").modules, {
    Tyx9: function (e, s, t) {
      t.r(s);
      var i = t("Fcif"),
        r = t("9mFz"),
        a = t("VmHG"),
        o = {
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
        h = t("9ZMt");
      s.default = h.default.component(o);
    },
  })
);
