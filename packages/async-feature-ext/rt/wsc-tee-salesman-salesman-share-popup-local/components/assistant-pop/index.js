"use strict";
var r = require("~/r");
r(
  "QqQc",
  Object.assign({}, require("~/v.js").modules, {
    QqQc: function (s, e, t) {
      t.r(e);
      var a = {
          name: "AssistantPop",
          data: () => ({ show: !1 }),
          methods: {
            handleCheck(s) {
              s.getOpenAssistantData().then((s) => {
                var { needGuide: e } = s;
                e && (this.show = !0);
              });
            },
            closeAssistantPop() {
              this.show = !1;
            },
          },
          ud: !0,
        },
        n = t("9ZMt");
      e.default = n.default.component(a);
    },
  })
);
