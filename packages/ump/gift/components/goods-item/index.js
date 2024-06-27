"use strict";
var r = require("~/r");
r(
  "cCnT",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    cCnT: function (e, r, a) {
      a.r(r);
      var t = a("rqVN"),
        i = a("RY8z");
      Object(t.b)({
        properties: { goodsItem: Object, noHairLine: Boolean },
        methods: {
          handleStepperChange(e) {
            var { detail: r } = e;
            this.triggerEvent("change", r);
          },
          handleGoodsImgClick(e) {
            var { currentTarget: r } = e,
              a = r.dataset.alias;
            i.a.navigate({
              url: "/pages/goods/detail/index?alias=" + a + "&type=gift",
            });
          },
        },
      });
    },
  })
);
