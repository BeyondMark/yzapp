"use strict";
var r = require("~/r");
r(
  "Mxwx",
  Object.assign({}, require("~/v.js").modules, {
    Mxwx: function (e, t, r) {
      r.r(t);
      var n = r("YeA1"),
        a = {
          props: { themeColor: { type: String, required: !0 } },
          data: () => ({
            prePayFilteredChannels: [],
            prePayInstalment: null,
            prePayShowList: !1,
            prePaySelected: null,
            computedHeight: 0,
          }),
          created() {
            Object(n.b)(this, [
              "prePayFilteredChannels",
              "prePayInstalment",
              "prePayShowList",
              "prePaySelected",
              "computedHeight",
            ]);
          },
          methods: {
            onChannelChange(e) {
              this.ctx.event.emit("onPrePayChannelChange", e);
            },
            closeList() {
              this.ctx.event.emit("onPrePayCloseList");
            },
          },
          ud: !0,
        },
        s = r("9ZMt");
      t.default = s.default.component(a);
    },
  })
);
