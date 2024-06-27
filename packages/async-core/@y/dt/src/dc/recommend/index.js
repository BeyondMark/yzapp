"use strict";
var r = require("~/r");
r(
  "G4gJ",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      G4gJ: function (t, e, i) {
        i.r(e);
        var r = i("Fcif"),
          d = i("EqB2"),
          o = i("DdxZ"),
          s = {
            mixins: [Object(d.a)({ optDesc: o.a })],
            props: { kdtId: String, offlineId: String, buyerId: String },
            data: () => ({}),
            computed: {
              goodsOpt() {
                if (!this.opt.goodsOpt) return null;
                var { goodsOpt: t } = this.opt;
                return Object(r.a)({}, t, {
                  queryExtra: Object(r.a)({}, t.queryExtra || {}, {
                    logType: "f",
                    kdtId: this.kdtId,
                    offlineId: this.offlineId,
                    buyerId: this.buyerId,
                  }),
                });
              },
            },
            methods: {
              handleItemClick(t) {
                this.$emit("item-click", t);
              },
              handleButtonClick(t) {
                this.$emit("button-click", t);
              },
            },
            ud: !0,
          },
          u = i("9ZMt");
        e.default = u.default.component(s);
      },
    }
  )
);
