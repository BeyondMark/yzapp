"use strict";
var r = require("~/r");
r(
  "xnB4",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      xnB4: function (e, t, i) {
        i.r(t);
        var a = i("rxfT"),
          r = {
            props: {
              infoSetting: { type: Object, default: () => ({}) },
              pointName: String,
              infoValue: { type: Object, value: () => ({}) },
              numberColor: String,
            },
            data: () => ({ assetTypeSwitch: a.c, titleMap: a.a }),
            computed: {
              itemValue() {
                var e =
                  this.infoValue[this.assetTypeSwitch[this.infoSetting.type]];
                return void 0 === e ? "*" : e;
              },
            },
            watch: {
              pointName: {
                handler(e) {
                  e && (this.titleMap.integral = e);
                },
                immediate: !0,
              },
            },
            methods: {
              handleClick(e) {
                this.$emit("jumpToLink", { type: e });
              },
            },
            ud: !0,
          },
          n = i("9ZMt");
        t.default = n.default.component(r);
      },
    }
  )
);
