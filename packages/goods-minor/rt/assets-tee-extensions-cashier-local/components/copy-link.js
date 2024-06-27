"use strict";
var r = require("~/r");
r(
  "CPHn",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      CPHn: function (e, n, t) {
        t.r(n);
        var s = t("tr7U").a,
          r = {
            ALIPAY_HBFQ: {
              description: "先消费后还款，分期还，更轻松",
              color: "#1678ff",
            },
          },
          i = {
            props: {
              show: Boolean,
              link: String,
              channel: Object,
              cashierType: String,
              themeColor: String,
            },
            data: () => ({}),
            computed: {
              payChannelName() {
                var e;
                return null == (e = this.channel) ? void 0 : e.payChannelName;
              },
              description() {
                var e, n;
                return (
                  (null ==
                  (e = r[null == (n = this.channel) ? void 0 : n.payChannel])
                    ? void 0
                    : e.description) || ""
                );
              },
              color() {
                var e, n;
                return (
                  (null ==
                  (e = r[null == (n = this.channel) ? void 0 : n.payChannel])
                    ? void 0
                    : e.color) || ""
                );
              },
              lowercase() {
                var e, n;
                return null == (e = this.channel) || null == (n = e.payChannel)
                  ? void 0
                  : n.toLowerCase();
              },
              classnames() {
                return {
                  root: s(""),
                  container: s("container", this.cashierType.toLowerCase()),
                  header: s("header"),
                  description: s("description"),
                  steps: {
                    container: s("steps-container"),
                    line: s("steps-line"),
                    step: s("steps-step"),
                    description: s("steps-description"),
                    icon: s("steps-icon"),
                    text: s("steps-text"),
                    subtext: s("steps-text", "secondary"),
                    action: s("steps-action"),
                  },
                };
              },
            },
            methods: {
              copy() {
                wx.setClipboardData({
                  data: this.link,
                  success() {
                    this.$emit("copy");
                  },
                });
              },
            },
            ud: !0,
          },
          o = t("9ZMt");
        n.default = o.default.component(i);
      },
    }
  )
);
