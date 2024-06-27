"use strict";
var r = require("~/r");
r(
  "Ogeg",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      Ogeg: function (e, t, i) {
        i.r(t);
        var n = i("mztD"),
          s = i("mK7v"),
          a = Object(n.a)("/wsc-minapp/icon/retail/time-2@3x.png", "!36x0.png"),
          r = Object(n.a)(
            "/wsc-minapp/icon/retail/location@3x.png",
            "!36x0.png"
          ),
          o = "1",
          m = {
            props: {
              themeColor: String,
              item: { type: Object, default: () => ({}) },
              storeConfig: { type: Object, default: () => ({}) },
              location: { type: Object, default: () => ({}) },
              onSearching: Boolean,
            },
            data: () => ({ timeImg: a, locationImg: r }),
            computed: {
              shopImg() {
                var e;
                return Object(n.a)(
                  (null == (e = this.item.physicalPicUrls) ? void 0 : e[0]) ||
                    "/wsc-minapp/icon/retail/default-shop-pic@3x.png",
                  "!510x0.png"
                );
              },
              showShopImg() {
                var { storeConfig: e, onSearching: t } = this;
                return e.physical_store_list_type === o && !t;
              },
              formatDistance() {
                var { distance: e } = this.item;
                return e >= 1 ? e + "km" : 1e3 * e + "m";
              },
              onBusinessHours() {
                var {
                  isOnlineOpen: e,
                  onlineBusinessHours: t,
                  summary: i,
                  shopOperationStatus: n,
                } = this.item;
                return 2 !== n ? "暂停营业" : e ? t.summary : i;
              },
            },
            methods: {
              handleGuideClick() {
                this.$emit("guideClick", this.item);
              },
              handlePhoneClick() {
                this.$emit("phoneClick", this.item.phone);
              },
              handleNameClick() {
                var { linkedKdtId: e, storeKdtId: t } = this.item,
                  i = Object(s.a)(this.item);
                this.$emit("nameClick", i ? e : t);
              },
            },
            ud: !0,
          },
          c = i("9ZMt");
        t.default = c.default.component(m);
      },
    }
  )
);
