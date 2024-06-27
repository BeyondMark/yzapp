"use strict";
var r = require("~/r");
r(
  "NJni",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      NJni: function (e, t, s) {
        s.r(t);
        var i = s("YeA1"),
          o = s("+CLe"),
          r = s("US/N"),
          u = {
            props: {
              plusBuyGoodsList: Array,
              payPrice: String,
              selectedCount: Number,
            },
            data: () => ({
              plusBuy: {},
              goods: {},
              picture: "",
              themeCSS: "",
              display: {},
              themeColors: {},
            }),
            computed: {
              isOnlyOne() {
                return 1 === this.plusBuyGoodsList.length;
              },
            },
            watch: {
              themeColors(e) {
                e &&
                  e["ump-tag-text"] &&
                  !this._isGetBase &&
                  ((this._isGetBase = !0),
                  s
                    .e("packages/async-retail/chunk")
                    .then(s.bind(null, "S6M3"))
                    .then((t) => {
                      var { themeSvg: s, setRequest: i } = t;
                      i(r.default),
                        s("retail/ci_start/config/2023/08/30/plus-buy.svg", {
                          "#AE2121": e["ump-tag-text"],
                          "#F7E9E9": e["ump-tag-bg"],
                        }).then((e) => {
                          this.picture = e;
                        });
                    }));
              },
            },
            created() {
              Object(i.b)(this, [
                "plusBuy",
                "goods",
                "display",
                "order",
                "themeColors",
                "themeCSS",
                "orderCreation",
              ]),
                Object(i.d)(this, {
                  "submit:act": (e) => this.onBuyClicked(e),
                });
            },
            methods: {
              onBuyClicked(e) {
                if (e.module === o.a.PlusBuy) {
                  this.ctx.event.emit("sku:afterSubmit");
                  var { switchData: t, goodsId: s } = Object(o.d)(this, e);
                  this.isChecked(s) &&
                    this.ctx.process.invoke(
                      "switchPlusBuyGoodsProcess",
                      this.currentGoods(s)
                    ),
                    this.ctx.process.invoke("setSelfFetch", {
                      time: "",
                      selfFetchStartTime: "",
                      selfFetchEndTime: "",
                    }),
                    this.switchGoods(t);
                }
              },
              isChecked(e) {
                var { plusBuy: t = {} } = this;
                return (t.selected || []).some((t) => +e == +t.goodsId);
              },
              currentGoods(e) {
                return (
                  (this.plusBuyGoodsList || []).find((t) => +e == +t.goodsId) ||
                  {}
                );
              },
              switchGoods(e) {
                this.ctx.process.invoke("switchGoods", e);
              },
            },
            ud: !0,
          },
          c = s("9ZMt");
        t.default = c.default.component(u);
      },
    }
  )
);
