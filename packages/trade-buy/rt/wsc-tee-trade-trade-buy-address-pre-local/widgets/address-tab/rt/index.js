"use strict";
var r = require("~/r");
r(
  "on+F",
  Object.assign({}, require("~/v.js").modules, {
    "on+F": function (e, t, a) {
      a.r(t);
      var i = a("Fcif"),
        s = a("VmHG"),
        r = {
          data() {
            return Object(i.a)(
              { isRetailWeappScene: this.ctx.data.isRetailWeappScene },
              Object(s.d)(this, [
                "expressType",
                "styleStr",
                "showAddressBackground",
                "slideStyle",
                "tabs",
                "isBadge",
              ]),
              { iconPath: "//img01.yzcdn.cn/upload_files/2023/05/12" }
            );
          },
          logicData() {
            return Object(i.a)({}, Object(s.d)(this, ["pageStyleConfig"]));
          },
          computed: {
            disableSlide() {
              var e;
              return (
                !(
                  null == (e = this.pageStyleConfig) || !e.tabBackgroundColor
                ) || !1
              );
            },
          },
          methods: {
            onSwitchTab(e) {
              this.$emit("onSwitchTab", e);
            },
          },
        },
        n = a("9ZMt");
      t.default = n.default.component(r);
    },
  })
);
