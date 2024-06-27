"use strict";
var r = require("~/r");
r(
  "9NmQ",
  Object.assign({}, require("~/v.js").modules, {
    "9NmQ": function (t, e, o) {
      o.r(e);
      var r = o("YeA1"),
        i = {
          props: {
            text: { type: String, default: "自动填写" },
            phone: { type: [String, Number] },
            bgColor: String,
          },
          data: () => ({ kdtId: 0 }),
          computed: {
            customStyle() {
              return "--bg-color: " + this.bgColor + ";";
            },
          },
          created() {
            Object(r.b)(this, ["kdtId"]);
          },
          methods: {
            getAuhPhone(t) {
              this.$emit("getPhone", (null == t ? void 0 : t.mobile) || "");
            },
            getPhone() {
              this.$emit("getPhone", this.phone);
            },
          },
          ud: !0,
        },
        n = o("9ZMt");
      e.default = n.default.component(i);
    },
  })
);
