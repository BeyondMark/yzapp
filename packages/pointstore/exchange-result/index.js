"use strict";
var r = require("~/r");
r(
  "nK9G",
  Object.assign(
    {},
    require("../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "/5e1": function (e, t) {
        e.exports = function (e) {
          return function (t, r, o) {
            for (var n = -1, a = Object(t), c = o(t), i = c.length; i--; ) {
              var s = c[e ? i : ++n];
              if (!1 === r(a[s], s, a)) break;
            }
            return t;
          };
        };
      },
      "1ezk": function (e, t) {
        e.exports = function () {
          return !1;
        };
      },
      "2wRU": function (e, t, r) {
        var o = r("GI0s"),
          n = r("ckUF"),
          a = r("T9Ud"),
          c = {};
        (c["[object Float32Array]"] =
          c["[object Float64Array]"] =
          c["[object Int8Array]"] =
          c["[object Int16Array]"] =
          c["[object Int32Array]"] =
          c["[object Uint8Array]"] =
          c["[object Uint8ClampedArray]"] =
          c["[object Uint16Array]"] =
          c["[object Uint32Array]"] =
            !0),
          (c["[object Arguments]"] =
            c["[object Array]"] =
            c["[object ArrayBuffer]"] =
            c["[object Boolean]"] =
            c["[object DataView]"] =
            c["[object Date]"] =
            c["[object Error]"] =
            c["[object Function]"] =
            c["[object Map]"] =
            c["[object Number]"] =
            c["[object Object]"] =
            c["[object RegExp]"] =
            c["[object Set]"] =
            c["[object String]"] =
            c["[object WeakMap]"] =
              !1),
          (e.exports = function (e) {
            return a(e) && n(e.length) && !!c[o(e)];
          });
      },
      "3kU/": function (e, t, r) {
        var o = r("2wRU"),
          n = r("TsNJ"),
          a = r("DhoL"),
          c = a && a.isTypedArray,
          i = c ? n(c) : o;
        e.exports = i;
      },
      "6iN7": function (e, t, r) {
        var o = r("HIoB"),
          n = r("lYsT"),
          a = r("PqlX"),
          c = r("tfj2"),
          i = r("q+I6"),
          s = r("3kU/"),
          u = Object.prototype.hasOwnProperty;
        e.exports = function (e, t) {
          var r = a(e),
            d = !r && n(e),
            p = !r && !d && c(e),
            f = !r && !d && !p && s(e),
            l = r || d || p || f,
            b = l ? o(e.length, String) : [],
            y = b.length;
          for (var g in e)
            (!t && !u.call(e, g)) ||
              (l &&
                ("length" == g ||
                  (p && ("offset" == g || "parent" == g)) ||
                  (f &&
                    ("buffer" == g ||
                      "byteLength" == g ||
                      "byteOffset" == g)) ||
                  i(g, y))) ||
              b.push(g);
          return b;
        };
      },
      DhoL: function (e, t, r) {
        (function (e) {
          var o = r("FfeU"),
            n = t && !t.nodeType && t,
            a = n && "object" == typeof e && e && !e.nodeType && e,
            c = a && a.exports === n && o.process,
            i = (function () {
              try {
                var e = a && a.require && a.require("util").types;
                return e || (c && c.binding && c.binding("util"));
              } catch (e) {}
            })();
          e.exports = i;
        }).call(this, r("RoC8")(e));
      },
      EN0E: function (e, t, r) {
        var o = r("/5e1")();
        e.exports = o;
      },
      HIoB: function (e, t) {
        e.exports = function (e, t) {
          for (var r = -1, o = Array(e); ++r < e; ) o[r] = t(r);
          return o;
        };
      },
      JIgs: function (e, t, r) {
        var o = r("EN0E"),
          n = r("h0av");
        e.exports = function (e, t) {
          return e && o(e, t, n);
        };
      },
      Lalj: function (e, t, r) {
        var o = r("jL4t"),
          n = r("MQuF"),
          a = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
          if (!o(e)) return n(e);
          var t = [];
          for (var r in Object(e))
            a.call(e, r) && "constructor" != r && t.push(r);
          return t;
        };
      },
      MQuF: function (e, t, r) {
        var o = r("SHde")(Object.keys, Object);
        e.exports = o;
      },
      PqlX: function (e, t) {
        var r = Array.isArray;
        e.exports = r;
      },
      RoC8: function (e, t) {
        e.exports = function (e) {
          return (
            e.webpackPolyfill ||
              ((e.deprecate = function () {}),
              (e.paths = []),
              e.children || (e.children = []),
              Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function () {
                  return e.l;
                },
              }),
              Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function () {
                  return e.i;
                },
              }),
              (e.webpackPolyfill = 1)),
            e
          );
        };
      },
      SHde: function (e, t) {
        e.exports = function (e, t) {
          return function (r) {
            return e(t(r));
          };
        };
      },
      SyCk: function (e, t, r) {
        var o = r("RqPZ"),
          n = r("ckUF");
        e.exports = function (e) {
          return null != e && n(e.length) && !o(e);
        };
      },
      T9Ud: function (e, t) {
        e.exports = function (e) {
          return null != e && "object" == typeof e;
        };
      },
      TsNJ: function (e, t) {
        e.exports = function (e) {
          return function (t) {
            return e(t);
          };
        };
      },
      UgeB: function (e, t, r) {
        var o = r("GI0s"),
          n = r("T9Ud");
        e.exports = function (e) {
          return n(e) && "[object Arguments]" == o(e);
        };
      },
      ckUF: function (e, t) {
        e.exports = function (e) {
          return (
            "number" == typeof e &&
            e > -1 &&
            e % 1 == 0 &&
            e <= 9007199254740991
          );
        };
      },
      "f/Xo": function (e, t) {
        e.exports = function (e) {
          return function () {
            return e;
          };
        };
      },
      h0av: function (e, t, r) {
        var o = r("6iN7"),
          n = r("Lalj"),
          a = r("SyCk");
        e.exports = function (e) {
          return a(e) ? o(e) : n(e);
        };
      },
      jL4t: function (e, t) {
        var r = Object.prototype;
        e.exports = function (e) {
          var t = e && e.constructor;
          return e === (("function" == typeof t && t.prototype) || r);
        };
      },
      lYsT: function (e, t, r) {
        var o = r("UgeB"),
          n = r("T9Ud"),
          a = Object.prototype,
          c = a.hasOwnProperty,
          i = a.propertyIsEnumerable,
          s = o(
            (function () {
              return arguments;
            })()
          )
            ? o
            : function (e) {
                return n(e) && c.call(e, "callee") && !i.call(e, "callee");
              };
        e.exports = s;
      },
      nK9G: function (e, t, r) {
        r.r(t);
        var o = r("qJXH"),
          n = r("RY8z"),
          a = r("zMoS"),
          c = r("hHpg"),
          i = r("YeA1"),
          s = r("2wjL"),
          u = r("dWkE"),
          d = r("eCH0"),
          p = r("SKM5"),
          f = r.n(p),
          l = r("bdYe"),
          b = r.n(l),
          y = r("xAyJ"),
          g = r("KkJw"),
          j = 2,
          h = 3,
          v = 4,
          I = { card: 0, code: 1, thirdparty: 2 },
          m = f()(I),
          T = getApp();
        Object(o.b)({
          data: {
            kdtId: T.getKdtId(),
            isSyncWX: !1,
            canSyncWX: !1,
            show: !1,
            showSubscribeMask: !1,
            goodsType: void 0,
            goodsDetails: {},
            cardId: "",
            cardData: {},
            cardAlias: "",
            cardCoverUrl: "",
            price: 0,
            preferentialType: 0,
            descriptionInfo: {},
            deliveryCouponInfo: {},
          },
          onLoad(e) {
            void 0 === e && (e = {});
            var {
              kdt_id: t,
              goodsId: r = "",
              groupType: o = "",
              couponId: n = "",
              cardId: i = "",
              couponGroupId: s = "",
              couponType: d = "",
            } = e;
            (this.query = e),
              T.updateKdtId(t),
              Promise.all([
                Object(g.d)({ cardId: i, groupType: o, couponId: n }),
                Object(g.c)({ goodsId: r }),
              ])
                .then((e) => {
                  var [c, p] = e,
                    {
                      isSyncWx: f = !1,
                      cardNo: l,
                      templateId: g,
                      verifyCode: I,
                      cardAlias: m,
                      isToH5: T,
                    } = c,
                    x = Object(a.a)(p, "goodsType", -1);
                  if (T || x === v)
                    Object(u.a)("/wscump/pointstore/exchangeresult", {
                      method: "redirectTo",
                      query: {
                        kdt_id: t,
                        cardId: i,
                        goodsId: r,
                        groupType: o,
                        couponId: n,
                        couponGroupId: s,
                        couponType: d,
                      },
                    });
                  else if (
                    (this.setYZData({
                      isSyncWX: f,
                      cardAlias: m,
                      goodsType: x,
                      show: !0,
                    }),
                    x === j)
                  ) {
                    var O = Object(a.a)(p, "couponGroupInfoDTO", {});
                    this.setYZData({
                      goodsDetails: O,
                      preferentialType: O.preferentialType || 0,
                      descriptionInfo: Object(y.b)(O),
                      deliveryCouponInfo: Object(y.c)(O),
                    }),
                      f && this.fetchSyncWXCoupon(s, I);
                  } else if (x === h) {
                    var k = Object(a.a)(p, "benefitCardInfoDTO", {});
                    this.setYZData({
                      goodsDetails: k,
                      cardCoverUrl: Object(y.a)(
                        k.backgroundColorCode,
                        k.backgroundImg
                      ),
                      price: b()(k.sellingPrice || 0, 100),
                    }),
                      f && this.fetchSyncWXCard(g, l);
                  }
                })
                .catch((e) => {
                  c.a.fail(e || "网络错误");
                });
          },
          fetchSyncWXCard(e, t) {
            Object(g.e)({ templateId: e, cardNo: t })
              .then((t) => {
                var r = {
                  code: t.card_no,
                  openid: t.open_id,
                  timestamp: t.timestamp,
                  signature: t.signature,
                  nonce_str: t.nonce_str,
                };
                this.setYZData({
                  canSyncWX: !!t.open_id,
                  cardData: r,
                  cardId: e,
                });
              })
              .catch((r) => {
                T.logger &&
                  T.logger.appError({
                    name: "兑换结果页获取信息异常",
                    message: "获取权益卡同步微信卡包需要的参数失败",
                    detail: {
                      errMsg: null == r ? void 0 : r.msg,
                      params: { templateId: e, cardNo: t },
                    },
                  });
              });
          },
          fetchSyncWXCoupon(e, t) {
            Object(g.b)({ groupId: e, verifyCode: t })
              .then((e) => {
                var {
                    cardId: t,
                    nonceStr: r,
                    signature: o,
                    timestamp: n,
                    verifyCode: a,
                  } = e,
                  c = { nonce_str: r, signature: o, timestamp: n, code: a };
                this.setYZData({ cardData: c, cardId: t, canSyncWX: !0 });
              })
              .catch((r) => {
                T.logger &&
                  T.logger.appError({
                    name: "兑换结果页获取信息异常",
                    message: "获取券码同步微信卡包参数失败",
                    detail: {
                      errMsg: null == r ? void 0 : r.msg,
                      params: { groupId: e, verifyCode: t },
                    },
                  });
              });
          },
          toggleSubscribeMask(e) {
            this.setYZData({ showSubscribeMask: e });
          },
          subscribe(e) {
            var t = {
              scene: "point_center_and_point_exchange",
              windowType: "point_center",
              authorizationType: "points",
              subscribePage: "积分兑换成功页",
              subscribeType: "积分",
              options: {
                next: e,
                onShowTips: () => this.toggleSubscribeMask(!0),
                onCloseTips: () => this.toggleSubscribeMask(!1),
                onComplete: e,
              },
            };
            Object(d.e)(t);
          },
          addCardWithSDK() {
            var { cardId: e, cardData: t } = this.data,
              r = [{ cardId: e, cardExt: JSON.stringify(t) }];
            n.a.navigate({
              url:
                "/packages/pointstore/sync-wxcard/index?data=" +
                JSON.stringify(r),
            });
          },
          handleClickUse() {
            var { goodsType: e, cardAlias: t, goodsDetails: r } = this.data,
              { dmc: o } = Object(i.a)();
            this.subscribe(() => {
              if (e === h)
                n.a.navigate({
                  url: s.a.add("/pages/membercard/detail/index", {
                    alias: t,
                    kdt_id: this.query.kdtId,
                  }),
                });
              else if (e === j) {
                c.a.loading("正在跳转");
                var i = Object(a.a)(this.query, "couponId"),
                  u = Object(a.a)(this.query, "couponType"),
                  d = Object(a.a)(r, "groupType", I.card);
                Object(g.a)({ couponId: i, groupType: m[u || d] })
                  .then((e) => {
                    var { weappUrl: t, isSwitchTab: r } = e;
                    c.a.clear(),
                      r && n.a.switchTab({ url: t }),
                      n.a.navigate({ url: t });
                  })
                  .catch((e) => {
                    c.a.fail(e);
                  });
              } else o.switchTab("Home");
            });
          },
        });
      },
      "q+I6": function (e, t) {
        var r = /^(?:0|[1-9]\d*)$/;
        e.exports = function (e, t) {
          var o = typeof e;
          return (
            !!(t = null == t ? 9007199254740991 : t) &&
            ("number" == o || ("symbol" != o && r.test(e))) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
          );
        };
      },
      tfj2: function (e, t, r) {
        (function (e) {
          var o = r("s3UK"),
            n = r("1ezk"),
            a = t && !t.nodeType && t,
            c = a && "object" == typeof e && e && !e.nodeType && e,
            i = c && c.exports === a ? o.Buffer : void 0,
            s = (i ? i.isBuffer : void 0) || n;
          e.exports = s;
        }).call(this, r("RoC8")(e));
      },
      yoW1: function (e, t) {
        e.exports = function (e) {
          return e;
        };
      },
    }
  )
);
