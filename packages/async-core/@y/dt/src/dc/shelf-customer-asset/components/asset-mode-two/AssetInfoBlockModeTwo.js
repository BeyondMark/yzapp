"use strict";
var r = require("~/r");
r(
  "kH/I",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "kH/I": function (e, t, i) {
        i.r(t);
        var r = i("rxfT"),
          a = {
            props: {
              infoSetting: { type: Array, default: () => [] },
              pointName: String,
              mode: { type: String, default: "vertical" },
              infoValue: { type: Object, value: () => ({}) },
              numberColor: String,
            },
            data: () => ({ assetTypeSwitch: r.c, titleMap: r.a }),
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
        t.default = n.default.component(a);
      },
    }
  )
);
