"use strict";
var r = require("~/r");
r(
  "MROV",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    MROV: function (e, s, o) {
      o.r(s);
      var t = o("Fcif"),
        r = o("u8kV"),
        i = o("svh/"),
        a = getApp();
      Object(r.b)({
        properties: {
          showServiceDue: Boolean,
          showStoreSwitch: Boolean,
          showShopStatus: Boolean,
          switchPageOptions: Object,
          buyerAddress: String,
          isRetailShelf: Boolean,
          navigationbarConfigData: { type: Object, value: {} },
          tableBooking: Boolean,
        },
        store: () => a.$store,
        mapData: Object(t.a)(
          {},
          Object(i.h)("/", ["shop"]),
          Object(i.h)("/", {
            isShopClosed(e) {
              var { shop: s = {} } = e,
                { isMultiStore: o, shop_business_isopen: t, store: r } = s;
              return o ? !(!!r && +r.is_opening) : !t;
            },
            shopClosedDesc(e) {
              var { shop: s = {} } = e,
                { isMultiStore: o, suspend_message: t = "" } = s,
                r = s.store || {};
              return (o && r.business_hours_advanced_text) || (!o && t);
            },
          })
        ),
      });
    },
  })
);
