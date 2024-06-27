"use strict";
var r = require("~/r");
r(
  "z9nY",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      ADTe: function (e, t, r) {
        r.d(t, "a", function () {
          return i;
        });
        var s = [
          "country",
          "province",
          "city",
          "county",
          "community",
          "addressDetail",
          "address_detail",
          "houseNumber",
        ];
        function i(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : s.length,
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "",
            n = s.slice(t, r);
          return (
            e[n[1]] && e[n[1]] === e[n[2]] && n.splice(1, 1),
            "中国" === e[n[0]] && n.shift(),
            n
              .filter(function (t) {
                return e[t];
              })
              .map(function (t) {
                return e[t];
              })
              .join(i)
          );
        }
      },
      z9nY: function (e, t, r) {
        r.r(t);
        var s = r("ADTe"),
          i = r("w/BL"),
          n = {
            props: {
              isAddressFixed: Boolean,
              themeTag: Object,
              selfFetchShop: Object,
            },
            data: () => ({ value: {} }),
            computed: {
              postageMessage() {
                var { postageTitle: e = "", postage: t = "" } =
                  this.expressWaySelected || {};
                return e + t;
              },
              selfFetchShopStringFormat() {
                return Object(s.a)(this.selfFetchShop);
              },
              selfFetchName() {
                return this.selfFetchShop.name || "选择提货地址";
              },
              computedSelfFetchShop() {
                return (
                  this.selfFetchName + " " + this.selfFetchShopStringFormat
                );
              },
            },
            methods: {
              onCellClick(e) {
                this.$emit("cell-click", e), this.onLogger();
              },
              onLogger() {
                this.value.icon ? Object(i.b)() : Object(i.f)();
              },
            },
            ud: !0,
          },
          o = r("9ZMt");
        t.default = o.default.component(n);
      },
    }
  )
);
