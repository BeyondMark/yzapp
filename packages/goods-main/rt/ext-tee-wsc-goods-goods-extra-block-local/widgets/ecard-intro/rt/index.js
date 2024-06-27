"use strict";
var r = require("~/r");
r(
  "XM+j",
  Object.assign({}, require("~/v.js").modules, {
    "XM+j": function (e, t, r) {
      r.r(t);
      var s = {
          props: { opt: { type: Object, default: () => ({}) } },
          data: () => ({
            show: !1,
            ruleLables: [
              "有效期",
              "生效时间",
              "节假日",
              "售后服务",
              "其他说明",
            ],
          }),
          methods: {
            triggerPop() {
              this.show = !0;
            },
            hidePopUp() {
              this.show = !1;
            },
          },
          ud: !0,
        },
        o = r("9ZMt");
      t.default = o.default.component(s);
    },
  })
);
