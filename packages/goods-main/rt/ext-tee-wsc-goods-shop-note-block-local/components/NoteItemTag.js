"use strict";
var r = require("~/r");
r(
  "uDyl",
  Object.assign({}, require("~/v.js").modules, {
    uDyl: function (e, r, t) {
      t.r(r);
      var n = {
          up_new: "上新",
          shop_keeper: "掌柜说",
          shop_circle: "店铺圈",
          single_prod_intro: "单品介绍",
        },
        o = {
          name: "note-item-tag",
          props: { noteType: String },
          computed: {
            tag() {
              return n[this.noteType];
            },
          },
          ud: !0,
        },
        u = t("9ZMt");
      r.default = u.default.component(o);
    },
  })
);
