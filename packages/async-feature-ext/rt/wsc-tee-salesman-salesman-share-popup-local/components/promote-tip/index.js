"use strict";
var r = require("~/r");
r(
  "JdsG",
  Object.assign({}, require("~/v.js").modules, {
    JdsG: function (t, s, i) {
      i.r(s);
      var e = i("882d"),
        a = {
          name: "PromoteTip",
          data: () => ({ show: !1, statusList: [], imgList: [] }),
          computed: {
            materialData() {
              return this.statusList.find((t) => "material" === t.type);
            },
            copyData() {
              return this.statusList.find((t) => "copy" === t.type) || {};
            },
          },
          methods: {
            handleCheck(t) {
              this.$emit("close-main-frame");
              var { imgList: s, statusList: i } = t;
              (this.statusList = i), (this.imgList = s), (this.show = !0);
            },
            handleClose() {
              (this.show = !1), this.$emit("open-assistant");
            },
            preview(t) {
              Object(e.d)({ urls: this.imgList, current: t });
            },
          },
          ud: !0,
        },
        r = i("9ZMt");
      s.default = r.default.component(a);
    },
  })
);
