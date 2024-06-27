"use strict";
var r = require("~/r");
r(
  "Nx8r",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      Nx8r: function (t, e, s) {
        s.r(e);
        var o = s("KrsW"),
          a = s("JQZX"),
          i = s("VNnE"),
          r = s("qf5B"),
          u = {
            mixins: [i.a],
            props: { separateBuy: Object, themeCss: String },
            data: () => ({ TIP_MAP: r.c }),
            computed: {
              customPopupStyle() {
                var t = 0;
                return (
                  (t = this.popupBottom),
                  this.safeBottom && (t = this.noSafeBottom),
                  "bottom: " + t + "px; " + this.themeCss
                );
              },
              showBeauty() {
                var { type: t } = this.separateBuy;
                return (
                  -1 !==
                  [r.b.COURSE_MIX_TYPE, r.b.MIX_TYPE, r.b.LOGISTICS].indexOf(t)
                );
              },
              formattedData() {
                var { data: t } = this.separateBuy;
                return t.map((t) => {
                  var { title: e, totalPrice: s, list: o } = t,
                    a = o.some(
                      (t) =>
                        "HAITAO" ===
                        ((t.settlementRule || {}).settlementMark || "")
                    ),
                    i = o.length > 3 ? o.slice(0, 3) : o;
                  return {
                    title: e,
                    totalPrice: s,
                    list: o,
                    isHasHaiTao: a,
                    goodItemsFilter: i,
                  };
                });
              },
            },
            methods: {
              onClose() {
                this.$emit("close-separate-buy-popup");
              },
              goPay(t) {
                var { type: e, data: s } = this.separateBuy,
                  { list: o } = s[t];
                [r.b.MIX_TYPE, r.b.COURSE_MIX_TYPE].includes(e)
                  ? this.$emit(
                      "buy",
                      { list: o },
                      { bubbles: !0, composed: !0 }
                    )
                  : this.logisticsBuy(t);
              },
              logisticsBuy(t) {
                var { data: e } = this.separateBuy,
                  { expressType: s, list: i } = e[t],
                  r = i.map((t) => t.cartId),
                  u = [];
                Object(a.a)(e, (e, s) => {
                  t !== s &&
                    Object(a.a)(e.list, (t) => {
                      var { cartId: e } = t;
                      -1 === u.indexOf(e) && -1 === r.indexOf(e) && u.push(e);
                    });
                }),
                  u.length &&
                    o.b.storage.set("waitBuyGoodsIds", u, { expire: 0.02 }),
                  this.$emit(
                    "buy",
                    { list: i, expressType: s },
                    { bubbles: !0, composed: !0 }
                  );
              },
            },
            ud: !0,
          },
          p = s("9ZMt");
        e.default = p.default.component(u);
      },
      VNnE: function (t, e, s) {
        var o = getApp();
        e.a = {
          data: function () {
            return {
              popupBottom: 0,
              noSafeBottom: 0,
              safeBottom: "iPhone-X" === o.deviceType,
            };
          },
          beforeMount: function () {
            var t = this;
            o.isSwitchTab().then(function (e) {
              e &&
                ((t.popupBottom = 49),
                (t.noSafeBottom = t.safeBottom ? 83 : 49));
            });
          },
        };
      },
    }
  )
);
