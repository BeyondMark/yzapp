"use strict";
var r = require("~/r");
r(
  "w1/U",
  Object.assign({}, require("~/v.js").modules, {
    "w1/U": function (o, e, t) {
      t.r(e);
      var r = t("YeA1"),
        u = {
          data: () => ({
            grouponModel: { showGrouponHeader: !1 },
            showPopup: !1,
            themeColors: {},
          }),
          computed: {
            textConfig() {
              var o;
              return (
                (null == (o = this.grouponModel) ? void 0 : o.textConfig) || {}
              );
            },
          },
          created() {
            return Object(r.b)(this, ["grouponModel", "themeColors"]);
          },
          methods: {
            onShowPopup() {
              this.showPopup = !0;
            },
            onHidePopup() {
              this.showPopup = !1;
            },
          },
          ud: !0,
        },
        s = t("9ZMt");
      e.default = s.default.component(u);
    },
  })
);
