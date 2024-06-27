"use strict";
var r = require("~/r");
r(
  "awiC",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    awiC: function (e, a, r) {
      r.r(a);
      var t = r("RY8z"),
        s = r("bdYe"),
        l = r.n(s),
        i = r("rqVN"),
        d = r("8zua"),
        h = r("2wjL"),
        o = getApp(),
        u = {
          [d.a.GROW]: "/packages/shop/levelcenter/free/index",
          [d.a.CONSUME]: "/packages/shop/levelcenter/free/index",
          [d.a.SAVING]:
            "/packages/pre-card/recharge/index?entry=1&kdt_id=" + o.getKdtId(),
        };
      Object(i.b)({
        options: { multipleSlots: !0 },
        properties: {
          thresholdType: { type: Number, value: null },
          thresholdValue: { type: Number, value: null },
          jumpTo: { type: String, value: "Home" },
        },
        data: { serializedThresholdValue: 0 },
        methods: {
          handleAction() {
            var e,
              a = h.a.add(
                null != (e = u[this.data.thresholdType]) ? e : u[d.a.GROW],
                { fromScene: this.properties.jumpTo }
              );
            t.a.navigate({ url: a });
          },
        },
        observers: {
          thresholdValue(e) {
            this.data.thresholdType !== d.a.SAVING
              ? this.setYZData({ serializedThresholdValue: e })
              : this.setYZData({ serializedThresholdValue: l()(e, 100) });
          },
        },
      });
    },
  })
);
