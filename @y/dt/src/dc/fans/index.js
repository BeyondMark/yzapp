"use strict";
var r = require("~/r");
r(
  "mbnY",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    mbnY: function (e, s, t) {
      t.r(s);
      var n = t("QlcU"),
        o = {
          props: {
            _opt: Object,
            kdtId: Number,
            shopInfo: Object,
            businessId: String,
            sessionFrom: String,
          },
          computed: {
            newVersion() {
              return this._opt && +this._opt.componentVersion === n.j.new;
            },
            showQrCode() {
              return this.newVersion && +this._opt.useQrCode === n.i.show;
            },
          },
          methods: {
            onFansClick() {
              this.$emit("handleFansClick");
            },
            handleItemClick(e) {
              this.$emit("jumpToLink", e);
            },
          },
          ud: !0,
        },
        r = t("9ZMt");
      s.default = r.default.component(o);
    },
  })
);
