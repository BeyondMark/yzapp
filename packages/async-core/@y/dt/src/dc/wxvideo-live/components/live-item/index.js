"use strict";
var r = require("~/r");
r(
  "wN9m",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      wN9m: function (e, r, t) {
        t.r(r);
        var i = t("VOqM"),
          n = {
            props: { liveInfo: Object, opt: Object, isLiving: Boolean },
            computed: {
              wrapStyle() {
                var { page_margin: e } = this.opt;
                return "padding: 0 " + e + "px;";
              },
              itemStyle() {
                var { corner_type: e } = this.opt;
                return "border-radius: " + (e == i.a.round ? "8rpx" : "none");
              },
              bgStyle() {
                return "background-image: url('" + this.liveInfo.headUrl + "')";
              },
              title() {
                return (
                  this.liveInfo.description ||
                  this.liveInfo.nickname + "视频号直播"
                );
              },
            },
            methods: {
              onClick() {
                this.$emit("item-click");
              },
            },
            ud: !0,
          },
          o = t("9ZMt");
        r.default = o.default.component(n);
      },
    }
  )
);
