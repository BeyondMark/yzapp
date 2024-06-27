"use strict";
var r = require("~/r");
r(
  "rP1C",
  Object.assign({}, require("~/v.js").modules, {
    rP1C: function (a, t, i) {
      i.r(t);
      var e = i("YeA1"),
        r = {
          data() {
            return {
              value: this.ctx.data.retailPickUpWayValue || "",
              pickUpWays: this.ctx.data.retailPickUpWays || [],
              showRetailPickUpWayErrorToast: !1,
            };
          },
          created() {
            Object(e.b)(this, ["showRetailPickUpWayErrorToast"]);
          },
          methods: {
            onSwitchPickUpWay(a) {
              if (a !== this.value) {
                (this.value = a),
                  (this.ctx.data.showRetailPickUpWayErrorToast = !1);
                var t = this.pickUpWays.find((t) => t.value === a);
                this.ctx.process.invoke("updatePickUpWay", t);
              }
            },
          },
        },
        s = i("9ZMt");
      t.default = s.default.component(r);
    },
  })
);
