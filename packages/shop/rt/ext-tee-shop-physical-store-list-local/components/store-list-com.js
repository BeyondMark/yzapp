"use strict";
var r = require("~/r");
r(
  "iuM7",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      iuM7: function (e, t, a) {
        a.r(t);
        var n = a("mztD"),
          r = a("Sh92"),
          i = a("9DaQ"),
          o = a("Cpb8"),
          s = Object(n.a)(
            "wsc-minapp/icon/retail/no-search-result@3x.png",
            "!480x0.png"
          ),
          l = Object(n.a)(
            "wsc-minapp/icon/retail/no-store-list@3x.png",
            "!480x0.png"
          ),
          c = {
            name: "StoreListCom",
            props: {
              storeList: Array,
              storeConfig: { type: Object, default: () => ({}) },
              location: { type: Object, default: () => ({}) },
              themeColors: Object,
              onSearching: Boolean,
            },
            data: () => ({}),
            computed: {
              blankImg() {
                return this.onSearching ? s : l;
              },
              blankText() {
                return this.onSearching ? "暂无搜索结果" : "暂无门店";
              },
            },
            methods: {
              handleGuideClick(e) {
                var { location: t } = e;
                if (t) {
                  var { longitude: a, latitude: n } = Object(r.f)(
                    +t.lon,
                    +t.lat
                  );
                  Object(o.a)({
                    longitude: a,
                    latitude: n,
                    name: e.storeName,
                    address: e.address,
                  });
                }
              },
              handlePhoneClick(e) {
                Object(i.a)({ phoneNumber: e });
              },
              handleNameClick(e) {
                this.$emit("nameClick", e);
              },
            },
            ud: !0,
          },
          u = a("9ZMt");
        t.default = u.default.component(c);
      },
    }
  )
);
