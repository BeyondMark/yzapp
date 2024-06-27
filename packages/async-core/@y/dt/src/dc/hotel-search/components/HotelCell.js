"use strict";
var r = require("~/r");
r(
  "6IjS",
  Object.assign({}, require("~/v.js").modules, {
    "6IjS": function (e, t, r) {
      r.r(t);
      var o = r("jmjq"),
        l = r.n(o),
        i = r("YeA1"),
        d = {
          name: "HotelCell",
          props: {
            hotel: { type: Object, default: () => {} },
            themeColors: { type: Object, default: () => ({ general: "#f44" }) },
          },
          computed: {
            hotelPrice() {
              var { hotel: e } = this;
              return e.showPrice
                ? (+l()(e.showPrice, !0, !1)).toFixed(2)
                : e.price
                ? (+l()(e.price, !0, !1)).toFixed(2)
                : void 0;
            },
            hotelAddress() {
              var { address: e = {} } = this.hotel,
                { province: t, county: r, city: o } = e;
              return t + "." + o + "." + r;
            },
            showFull() {
              var { hotelStatus: e } = this.hotel;
              return 1 == +e;
            },
          },
          methods: {
            handleClickHotel() {
              var { kdtId: e, id: t } = this.hotel;
              Object(i.a)().dmc.navigate("HotelDetail", { kdtId: e, id: t });
            },
          },
          ud: !0,
        },
        s = r("9ZMt");
      t.default = s.default.component(d);
    },
  })
);
