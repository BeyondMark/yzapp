"use strict";
var r = require("~/r");
r(
  "nnbQ",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    nnbQ: function (t, e, s) {
      s.r(e);
      var i = s("noo5"),
        r = s("YeA1"),
        o = {
          props: {
            multistore: Object,
            retail: Object,
            shopConfig: Object,
            kdtId: Number,
            physicalStores: Object,
          },
          computed: {
            shopAddress() {
              var {
                  id: t,
                  address: e,
                  asyncGetLocationFinished: s,
                } = this.multistore || {},
                { distance: r, hideStore: o } = this.multistore,
                d = "";
              return o || !t
                ? ""
                : (r && s && (d = Object(i.formatDistance)(r)),
                  e && (d += " " + e),
                  d);
            },
            multiStoreName() {
              return this.multistore.id && !this.retail.address
                ? "其他分店"
                : "线下门店";
            },
            showMultiStoreInfo() {
              var {
                shopConfig: { hasPhysicalStore: t },
                multistore: { id: e, openMultiStoreSwitch: s, hideStore: i },
                physicalStores: r,
              } = this;
              return (
                !((null == r ? void 0 : r.shopCount) > 0) && (e ? !i && s : t)
              );
            },
          },
          methods: {
            gotoPage() {
              var { id: t } = this.multistore,
                e = this.retail.addrNess,
                s = t && !e ? "MultistoreIndex" : "PhysicalStoreIndex";
              Object(r.a)().dmc.navigate(s, { kdt_id: this.kdtId });
            },
          },
          ud: !0,
        },
        d = s("9ZMt");
      e.default = d.default.component(o);
    },
  })
);
