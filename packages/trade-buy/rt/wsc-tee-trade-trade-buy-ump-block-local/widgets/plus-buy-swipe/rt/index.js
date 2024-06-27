"use strict";
var r = require("~/r");
r(
  "vC8o",
  Object.assign({}, require("~/v.js").modules, {
    vC8o: function (e, t, s) {
      s.r(t);
      var i = s("YeA1"),
        o = s("AGZf"),
        l = s("9ZMt"),
        u = {
          props: { plusBuyGoodsList: Array },
          data: () => ({
            plusStyle: { "padding-left": "calc((100vw - 260px)/2)" },
            show: !0,
            selectSize: 0,
            customOffset: 99,
            swipeFuncs: {},
            themeColors: {},
          }),
          logicData: () => ({ goodsData: {}, plusBuy: {} }),
          computed: {
            buttonEnable() {
              return this.selectSize > 0;
            },
            boxHeight() {
              return this.plusBuyGoodsList.length > 1 ? 368 : 350;
            },
            buttonName() {
              var e = this.selectSize;
              return this.plusBuy.supportMulti
                ? "一键换购（" + e + "/" + this.plusBuyGoodsList.length + "）"
                : e
                ? "一键换购（" + e + "）"
                : "一键换购";
            },
          },
          created() {
            Object(i.b)(this, ["order", "plusBuy", "themeColors"]);
          },
          mounted() {
            l.default.$native.getSystemInfo({
              success: (e) => {
                this.customOffset = (e.windowWidth || 375) - 276;
              },
            }),
              this.initialize(),
              this.upLogger({
                et: "view",
                ei: "component_view",
                en: "组件曝光",
                params: { component: "plus-buy-swipe" },
              });
          },
          methods: {
            initialize(e) {
              void 0 === e && (e = 1),
                setTimeout(() => {
                  var t = this.$refs.swipe;
                  t
                    ? setTimeout(() => {
                        t.initialize();
                      }, 1e3)
                    : e < 10 && ((e += 1), this.initialize(e));
                }, 50);
            },
            changeSelected(e) {
              var { item: t, goodsId: s, skuId: i } = e,
                o = s + "[" + i + "]";
              if (((this._selectGoods = this._selectGoods || {}), !t))
                return (
                  delete this._selectGoods[o],
                  void (this.selectSize > 0 && (this.selectSize -= 1))
                );
              this.plusBuy.supportMulti ||
                ((this.selectSize = 0), (this._selectGoods = {})),
                (this.selectSize += 1),
                (this._selectGoods[o] = t);
            },
            upLogger(e) {
              var t;
              null == (t = this.ctx.logger) || t.log(e);
            },
            handleSubmit() {
              if (this.selectSize < 1) o.a.fail("请选换购商品");
              else {
                var e = Object.keys(this._selectGoods).map(
                    (e) => this._selectGoods[e]
                  ),
                  [t] = this.ctx.process.invoke("addAllGoods", e);
                t.then((t) => {
                  t || o.a.fail("加购异常"),
                    this.upLogger({
                      et: "click",
                      ei: "plus-buy-swipe",
                      en: "一键加购",
                      pt: "trade",
                      params: {
                        data: JSON.stringify(e),
                        status: t ? "success" : "error",
                      },
                    }),
                    o.a.clear(),
                    this.close();
                });
              }
            },
            close() {
              this.$emit("closePlusSwipe"), (this.show = !1);
            },
          },
          ud: !0,
        };
      t.default = l.default.component(u);
    },
  })
);
