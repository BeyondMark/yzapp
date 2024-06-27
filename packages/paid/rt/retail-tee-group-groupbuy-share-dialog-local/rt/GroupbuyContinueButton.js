"use strict";
var r = require("~/r");
r(
  "gIfw",
  Object.assign({}, require("~/v.js").modules, {
    gIfw: function (t, u, e) {
      e.r(u);
      var n = e("9ZMt"),
        a = {
          props: {},
          data: () => ({ groupbuyBuyAgainPath: "" }),
          created() {
            this.ctx.event.listen("setBuyAgainPath", (t) => {
              this.groupbuyBuyAgainPath = t;
            }),
              this.ctx.event.listen("handleGroupBuyingBuyAgain", () => {
                this.onGroupbuyContinue();
              });
          },
          methods: {
            onGroupbuyContinue() {
              n.default.navigate({ url: this.groupbuyBuyAgainPath });
            },
          },
          ud: !0,
        };
      u.default = n.default.component(a);
    },
  })
);
