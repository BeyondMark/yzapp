"use strict";
var r = require("~/r");
r(
  "ijKI",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    ijKI: function (e, t, i) {
      i.r(t);
      var r = i("bs6A"),
        l = i("MiJW"),
        a = {
          mixins: [r.a],
          props: {
            kdtId: { type: Number },
            offlineId: { type: Number, default: 0 },
            appId: { type: String },
            _opt: { type: Object },
            pageScrollKey: {
              type: String,
              default: "showcase-container:page-scroll",
            },
            tabPage: { type: Boolean, default: !1 },
          },
          computed: {
            slideType() {
              return this._opt && this._opt.slideType;
            },
          },
          created() {},
          methods: {
            onPullDownRefresh() {},
            handleBuyClick(e) {
              this.$emit("button-click", e);
            },
            handleItemClick(e) {
              var t = Object(l.a)(e);
              this.$emit("item-click", t);
            },
          },
          ud: !0,
        },
        s = i("9ZMt");
      t.default = s.default.component(a);
    },
  })
);
