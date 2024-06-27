"use strict";
var r = require("~/r");
r(
  "fihN",
  Object.assign({}, require("~/v.js").modules, {
    fihN: function (r, e, t) {
      t.r(e);
      var o = {
          props: { show: Boolean, login: String, mobile: String },
          data() {
            return { password: this.login };
          },
          computed: {
            hintText() {
              return (
                "为了保障你的账户安全，请输入手机账号" +
                this.mobile +
                "的登录密码"
              );
            },
          },
          methods: {
            onPasswordChange(r) {
              var { value: e } = r;
              this.password = e;
            },
          },
        },
        s = t("9ZMt");
      e.default = s.default.component(o);
    },
  })
);
