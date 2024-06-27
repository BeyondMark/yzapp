"use strict";
var r = require("~/r");
r(
  "iMvh",
  Object.assign({}, require("~/v.js").modules, {
    iMvh: function (e, o, n) {
      n.r(o);
      var t = n("Tewj"),
        r = {
          name: "wecom-benefit",
          data: () => ({ wecomFriendsInfo: null }),
          computed: {
            show() {
              return !!this.wecomFriendsInfo;
            },
          },
          created() {
            t.default.on("popupContainer:wecomBenefit:show", (e) => {
              this.wecomFriendsInfo = e;
            });
          },
          destroyed() {
            t.default.off("popupContainer:wecomBenefit:show");
          },
          methods: {
            handleClose() {
              this.wecomFriendsInfo = null;
            },
          },
          ud: !0,
        },
        i = n("9ZMt");
      o.default = i.default.component(r);
    },
  })
);
