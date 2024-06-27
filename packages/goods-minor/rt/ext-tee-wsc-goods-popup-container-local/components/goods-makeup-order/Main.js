"use strict";
var r = require("~/r");
r(
  "cg+w",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      OQwS: function (t, e, o) {
        o.d(e, "a", function () {
          return h;
        });
        o("hisu"), o("yBJb");
        var n = o("ONqW");
        var i = function () {},
          r = function (t) {
            for (var e = 0; e < t.length; e++) {
              var o;
              if ((o = t[e].dataset.viewlog))
                try {
                  Object(n.a)().log(JSON.parse(o));
                } catch (t) {}
            }
          },
          s = function (t) {
            return (
              Array.isArray(t) || (t = [t]),
              t.filter(function (t) {
                return t.intersectionRatio > 0;
              })
            );
          },
          a = function (t) {
            return function (e) {
              (e = s(e)), t(e);
            };
          },
          c = function (t) {
            var e = [];
            return function (o) {
              (o = (o = s(o)).filter(function (t) {
                var o;
                return (
                  !(o = t.dataset.viewlog) ||
                  (!e.includes(o) && (e.push(o), !0))
                );
              })),
                t(o);
            };
          },
          u = function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return e.cache
              ? c(function (e) {
                  r(e), t(e);
                })
              : a(function (e) {
                  r(e), t(e);
                });
          },
          d = { thresholds: [0], observeAll: !0, cache: !0 },
          h = function (t, e) {
            var o;
            e = Object.assign({}, d, e);
            var n = (o = t.createIntersectionObserver(e)).observe;
            return (
              (o.observe = function (t) {
                var r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : i;
                return n.call(o, t, u(r, { cache: e.cache }));
              }),
              o
            );
          };
      },
      "cg+w": function (t, e, o) {
        o.r(e);
        var n = o("Tewj"),
          i = o("ZLeZ"),
          r = o("OQwS"),
          s = o("OK7I"),
          a = o.n(s),
          c = o("PKOW"),
          u = o("n7Ns"),
          d = {
            name: "goods-makeup-order",
            props: {
              kdtId: [String, Number],
              goodsBaseInfo: Object,
              themeVars: String,
              marketing: Object,
              offlineId: Number,
              ctxObj: Object,
            },
            data: () => ({
              showPopup: !1,
              comboList: [],
              isGoodsScanActivity: !1,
            }),
            watch: {
              marketing: {
                handler(t) {
                  this.handleCheckActivity(t);
                },
                immediate: !0,
              },
            },
            created() {
              (this.counter = new u.a()),
                (this.randomString = a()(8)),
                (this.addCounter = this.counter.provide.bind(this.counter)),
                (this.minusCounter = this.counter.consume.bind(this.counter)),
                n.default.on(
                  "popupContainer:addCartCompleted",
                  this.handleAfterAddCart
                ),
                n.default.on("popupContainer:makeup:sku:show", this.addCounter),
                n.default.on(
                  "popupContainer:sku:hide-after",
                  this.minusCounter
                );
            },
            destroyed() {
              var t;
              n.default.off(
                "popupContainer:addCartCompleted",
                this.handleAfterAddCart
              ),
                n.default.off(
                  "popupContainer:makeup:sku:show",
                  this.addCounter
                ),
                n.default.off(
                  "popupContainer:sku:hide-after",
                  this.minusCounter
                ),
                null == (t = this.intersection) || t.disconnect();
            },
            methods: {
              onPopupClose() {
                this.$emit("log", {
                  et: "click",
                  ei: "show_pop_close",
                  en: "凑单弹窗关闭",
                  params: {
                    combo_num: this.comboList.length,
                    component: "addcart_discounts",
                  },
                }),
                  this.handleClose();
              },
              handleClose() {
                this.showPopup = !1;
              },
              handleAfterClose() {
                var t, e;
                this.counter.clear(),
                  (this.comboList = []),
                  null == (t = this.intersection) || t.disconnect(),
                  this.$refs.comboWrap &&
                    (null == (e = this.$refs.comboWrap[0]) || e.scrollTo(0, 0));
              },
              handleCheckActivity(t) {
                var e = (null == t ? void 0 : t.activities) || [];
                this.isGoodsScanActivity = !!e.find(
                  (t) => "goodsScan" === t.type
                );
              },
              getTimeoutPromise: () =>
                new Promise((t) => {
                  setTimeout(t, 1e3);
                }),
              handleAfterAddCart(t) {
                if (t.success && !this.isGoodsScanActivity) {
                  var e = [
                    Object(i.b)(
                      this.goodsBaseInfo.id,
                      t.skuId,
                      this.randomString,
                      this.offlineId
                    ),
                    new Promise((t) => {
                      setTimeout(t, 1e3);
                    }),
                  ];
                  Promise.all(e).then((t) => {
                    var [e] = t;
                    if (this.counter.isEmpty()) {
                      var { comboList: o } = e;
                      null != o &&
                        o.length &&
                        ((this.showPopup = !0),
                        (this.comboList = e.comboList),
                        setTimeout(() => {
                          this.intersection = Object(r.a)(this, {
                            thresholds: [1],
                          })
                            .relativeTo(".combo-list-wrap")
                            .observe(".mo-combo-list >>> .J-viewlog");
                        }, 300));
                    }
                  });
                }
              },
              goToCart() {
                Object(c.f)({ pageType: c.b.CART }), (this.showPopup = !1);
              },
              handleGoCartClick() {
                this.goToCart(),
                  this.$emit("log", {
                    et: "click",
                    ei: "goto_addcart",
                    en: "去购物车（弹窗上）",
                    params: {
                      combo_num: this.comboList.length,
                      component: "addcart_discounts",
                    },
                  });
              },
            },
            ud: !0,
          },
          h = o("9ZMt");
        e.default = h.default.component(d);
      },
      hisu: function (t, e, o) {
        function n(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        o.d(e, "a", function () {
          return n;
        });
      },
      yBJb: function (t, e, o) {
        o.d(e, "a", function () {
          return r;
        });
        var n = o("z6zH");
        function i(t, e) {
          for (var o = 0; o < e.length; o++) {
            var i = e[o];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, Object(n.a)(i.key), i);
          }
        }
        function r(t, e, o) {
          return (
            e && i(t.prototype, e),
            o && i(t, o),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        }
      },
    }
  )
);
