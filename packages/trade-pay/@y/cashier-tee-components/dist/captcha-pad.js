"use strict";
var r = require("~/r");
r(
  "b8KI",
  Object.assign({}, require("~/v.js").modules, {
    b8KI: function (t, e, i) {
      i.r(e);
      var h = {
          props: {
            show: Boolean,
            height: String,
            overlay: { type: Boolean, default: !0 },
            themeColor: String,
            phone: { type: String, default: "" },
          },
          data: () => ({ timeout: 0, captcha: "", timer: 0 }),
          computed: {
            maskedPhone() {
              var { phone: t } = this;
              return "string" == typeof t && 11 === t.length
                ? t.replace(/^\d{7}/g, "*******")
                : t;
            },
            actionText() {
              return this.timeout ? this.timeout + "s后重试" : "重新获取";
            },
          },
          methods: {
            countDown() {
              clearTimeout(this.timer), (this.timeout = 61);
              var t = () => {
                this.timeout &&
                  (this.timeout--, (this.timer = setTimeout(t, 1e3)));
              };
              t();
            },
            onInput(t) {
              if (6 !== this.captcha.length) {
                var e = "" + this.captcha + t;
                this.captcha = e;
              }
            },
            onDelete() {
              if (this.captcha.length) {
                var t = this.captcha.slice(0, -1);
                this.captcha = t;
              }
            },
            refetch() {
              this.countDown(), this.$emit("refetch");
            },
            init() {
              (this.captcha = ""), this.countDown();
            },
            onClose() {
              this.$emit("close");
            },
          },
          ud: !0,
        },
        o = i("9ZMt");
      e.default = o.default.component(h);
    },
  })
);
