"use strict";
var r = require("~/r");
r(
  "SX67",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      SX67: function (e, a, t) {
        t.r(a);
        var n = t("5P7O"),
          l = {
            props: {
              themeColor: { type: String, required: !0 },
              channel: { type: Object, required: !0 },
              selected: { type: Object, required: !0 },
            },
            computed: {
              cx() {
                var { available: e } = this.channel;
                return {
                  channel: Object(n.a)("channel", { disabled: !e }),
                  label: Object(n.a)("label", e ? "normal" : "disabled"),
                  center: Object(n.b)("center"),
                  instalment: Object(n.a)("instalment"),
                  activeSign: Object(n.a)("active-sign"),
                };
              },
              balanceDesc() {
                var { balance: e, availableDesc: a } = this.channel;
                return e && a;
              },
              channelNotice() {
                var {
                  balance: e,
                  channelNotice: a,
                  availableDesc: t,
                } = this.channel;
                return a || (!e && t);
              },
            },
            methods: {
              onClick() {
                var e,
                  { channel: a } = this;
                !a.available ||
                  (null != (e = a.ext) && e.instalments) ||
                  this.$emit("change", a);
              },
            },
            ud: !0,
          },
          c = t("9ZMt");
        a.default = c.default.component(l);
      },
    }
  )
);
