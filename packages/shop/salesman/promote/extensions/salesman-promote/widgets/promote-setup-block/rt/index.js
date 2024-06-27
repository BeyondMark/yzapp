"use strict";
var r = require("~/r");
r(
  "4/wl",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "4/wl": function (e, t, r) {
        r.r(t);
        var o = r("VmHG"),
          s = r("7/pW"),
          i = r("we3t"),
          c = r("qHGj");
        Object(s.a)({
          attached() {
            Object(o.d)({
              title: function (e) {
                return void 0 === e && (e = {}), e.goods && e.goods.title;
              },
              showStoreSwitch: function (e) {
                void 0 === e && (e = {});
                var t = Object(i.e)(e, "shop.shopMetaInfo", {});
                return !!Object(c.b)(t);
              },
            });
          },
        });
      },
    }
  )
);
