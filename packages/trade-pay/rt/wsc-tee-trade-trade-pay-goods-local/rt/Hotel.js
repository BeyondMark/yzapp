"use strict";
var r = require("~/r");
r(
  "TuQo",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      TuQo: function (t, e, r) {
        r.r(e);
        var o = r("yk8n"),
          s = r("YeA1"),
          a = {
            name: "hotel",
            data: () => ({ hotel: {}, formattedGoods: [], isPreSale: {} }),
            computed: {
              roomNum() {
                return this.hotel.roomNumber;
              },
              firstGoods() {
                return this.formattedGoods[0] || {};
              },
              lastGoods() {
                return (
                  this.formattedGoods[this.formattedGoods.length - 1] || {}
                );
              },
              startDate() {
                return o.a.monthDay(
                  o.a.timeSpanToDate(this.firstGoods.deliveryStartTime)
                );
              },
              endDate() {
                return o.a.monthDay(
                  o.a.timeSpanToDate(this.firstGoods.deliveryEndTime)
                );
              },
              desc() {
                var { sku: t } = this.firstGoods;
                return (t = Array.isArray(t)
                  ? t
                  : t && "string" == typeof t
                  ? JSON.parse(t)
                  : [])
                  .filter((t) => t.v)
                  .map((t) => t.v)
                  .join(", ");
              },
            },
            created() {
              Object(s.b)(this, ["hotel", "formattedGoods", "isPreSale"]);
            },
            ud: !0,
          },
          i = r("9ZMt");
        e.default = i.default.component(a);
      },
    }
  )
);
