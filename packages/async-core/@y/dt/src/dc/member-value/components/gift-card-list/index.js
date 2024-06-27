"use strict";
var r = require("~/r");
r(
  "i9dg",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      i9dg: function (t, e, a) {
        a.r(e);
        var i = a("Fcif"),
          r = a("HlaY"),
          s = a("zMoS"),
          d = a("9ZMt");
        var o = -3,
          n = -2,
          c = {
            props: {
              list: { type: Array, value: [] },
              kdtId: { type: String },
              themeColors: Object,
            },
            data: () => ({ cardInfoList: [], className: "" }),
            watch: {
              kdtId(t, e) {
                t > 0 && +t != +e && this.init();
              },
            },
            mounted() {
              this.init();
            },
            methods: {
              init() {
                this.fetchGiftCardList(this.list);
              },
              fetchGiftCardList(t) {
                if (0 !== t.length)
                  try {
                    r.a
                      .getGiftCardList({
                        productNos: t.map((t) => t.productNo).join(","),
                      })
                      .then((t) => {
                        var e = t
                            .map((t) => {
                              var e, a;
                              if (t.status !== o && t.status !== n)
                                return Object(i.a)({}, t, {
                                  formatedAmount:
                                    ((e = t.amount || 0),
                                    (a = 0),
                                    void 0 === a && (a = 2),
                                    (Math.abs(e) / 100).toFixed(a)),
                                });
                            })
                            .filter((t) => !!t),
                          a = (function (t) {
                            return t.length <= 1
                              ? "mode1"
                              : 2 === t.length
                              ? "mode2"
                              : t.length >= 3
                              ? "mode3"
                              : void 0;
                          })(e);
                        (this.cardInfoList = e), (this.className = a);
                      });
                  } catch (t) {}
                else this.cardInfoList = [];
              },
              redirectToBuyCardCenter(t) {
                var e = Object(s.a)(t, "templateNo", ""),
                  a =
                    "https://cashier.youzan.com/pay/prepaid_card_order?kdt_id=" +
                    this.kdtId +
                    "&template_no=" +
                    e,
                  i =
                    "/pages/common/webview-page/index?src=" +
                    encodeURIComponent(a + "&entry=11");
                d.default.navigate({ url: i });
              },
            },
            ud: !0,
          };
        e.default = d.default.component(c);
      },
    }
  )
);
