"use strict";
var r = require("~/r");
r(
  "9MYu",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "9MYu": function (e, t, n) {
        n.r(t);
        var a = n("aqCO"),
          r = n("Hvpf"),
          c = n("jmjq"),
          l = n.n(c),
          i = {
            props: {
              amount: Number,
              themeColors: { type: Object, required: !0 },
              channel: { type: Object, required: !0 },
              selected: { type: Object, required: !0 },
            },
            computed: {
              channelNoticeContext() {
                return { amount: l()(this.amount) };
              },
              cx() {
                var { available: e } = this.channel;
                return {
                  channel: Object(a.a)("custom-channel", { disabled: !e }),
                  center: Object(a.b)("center"),
                  rightIcon: Object(a.a)("right-icon"),
                };
              },
              balance() {
                var { balance: e } = this.channel;
                return "number" == typeof e ? l()(e, !0, !1) : "";
              },
              channelNotice() {
                var { channel: e, selected: t } = this,
                  { available: n, notice: a = {} } = e;
                return n
                  ? Object(r.a)(e, t) && a.selected
                    ? a.selected
                    : a.normal
                  : a.disabled;
              },
            },
            methods: {
              onClick() {
                var { channel: e, selected: t } = this,
                  { available: n, ext: { instalments: a } = {} } = e;
                n && !Object(r.a)(e, t) && this.$emit("change", e);
              },
            },
            ud: !0,
          },
          u = n("9ZMt");
        t.default = u.default.component(i);
      },
      Hvpf: function (e, t, n) {
        function a(e, t) {
          var n, a;
          return (
            e.payChannel === t.payChannel &&
            (null === (n = e.ext) || void 0 === n ? void 0 : n.agType) ===
              (null === (a = t.ext) || void 0 === a ? void 0 : a.agType)
          );
        }
        n.d(t, "a", function () {
          return a;
        });
      },
    }
  )
);
