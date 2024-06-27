"use strict";
var r = require("~/r");
r(
  "0IbZ",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "/5e1": function (e, t) {
        e.exports = function (e) {
          return function (t, r, o) {
            for (var n = -1, a = Object(t), c = o(t), i = c.length; i--; ) {
              var u = c[e ? i : ++n];
              if (!1 === r(a[u], u, a)) break;
            }
            return t;
          };
        };
      },
      "0IbZ": function (e, t, r) {
        r.r(t);
        var o = r("rqVN"),
          n = r("9kk/"),
          a = r("8B9M"),
          c = r("DXKY"),
          i = Object(a.a)();
        Object(o.b)({
          properties: {
            hidden: { type: Boolean, value: !1 },
            hiddenTitle: { type: Boolean, value: !1 },
            currentKdtId: Number,
            title: String,
            blankContent: String,
            shopLists: {
              type: Array,
              value: [],
              observer(e) {
                var { deliveryMethod: t } = Object(n.a)();
                this.setData({
                  localRetailShopList: Object(n.d)(e, { deliveryMethod: t }),
                });
              },
            },
            noMore: { type: Boolean, value: !1 },
            isFocus: { type: Boolean, value: !1 },
          },
          data: {
            showPhonePopup: !1,
            customerServicePhoneNumber: "",
            customerServiceAreaCode: "",
            isHideAddress: !1,
          },
          ready() {
            var { addressId: e, isHideAddress: t } = Object(n.a)();
            this.judgePageInPageStack("packages/retail/goods-shelf/index")
              ? t
                ? wx.setStorageSync("GOODS_SHELF_IN_PAGE_STACK_KEY", !0)
                : wx.removeStorageSync("GOODS_SHELF_IN_PAGE_STACK_KEY")
              : (this.judgePageInPageStack("pages/home/dashboard/index") ||
                  this.judgePageInPageStack("packages/home/dashboard/index")) &&
                wx.removeStorageSync("GOODS_SHELF_IN_PAGE_STACK_KEY"),
              this.setYZData({
                currentKdtId: +i.getKdtId(),
                addressId: e,
                isHideAddress:
                  t || wx.getStorageSync("GOODS_SHELF_IN_PAGE_STACK_KEY"),
              });
          },
          methods: {
            judgePageInPageStack: (e) => (
              void 0 === e && (e = ""),
              (getCurrentPages ? getCurrentPages() : []).some(
                (t) => -1 !== t.route.indexOf(e)
              )
            ),
            reFetchList(e) {
              var { detail: t = {} } = e,
                { lat: r, lon: o, firstLoad: n = !1 } = t;
              this.setYZData({ currentKdtId: +i.getKdtId(), addressInfo: t }),
                n ||
                  c.a.trigger("shop-select:reFetchListWithLocation", {
                    lat: r,
                    lng: o,
                  });
            },
            handleChooseShop(e) {
              var { currentTarget: t } = e,
                { dataset: r = {} } = t,
                { shop: o = {} } = r,
                { disableClick: n } = r.shop;
              if (!n) {
                if (this.data.addressInfo) {
                  var a = i.db.set(this.data.addressInfo);
                  o.extArgs = { dbid: a };
                }
                this.triggerEvent("choose", { shop: o });
              }
            },
            handleContact(e) {
              var {
                currentTarget: {
                  dataset: {
                    customerServiceAreaCode: t,
                    customerServicePhoneNumber: r,
                  } = {},
                } = {},
              } = e;
              this.setYZData({
                showPhonePopup: !0,
                customerServiceAreaCode: t,
                customerServicePhoneNumber: r,
              });
            },
            handleClosePhonePopup() {
              this.setYZData({ showPhonePopup: !1 });
            },
          },
        });
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
          u = r("3kU/"),
          s = Object.prototype.hasOwnProperty;
        e.exports = function (e, t) {
          var r = a(e),
            d = !r && n(e),
            f = !r && !d && c(e),
            p = !r && !d && !f && u(e),
            l = r || d || f || p,
            b = l ? o(e.length, String) : [],
            h = b.length;
          for (var y in e)
            (!t && !s.call(e, y)) ||
              (l &&
                ("length" == y ||
                  (f && ("offset" == y || "parent" == y)) ||
                  (p &&
                    ("buffer" == y ||
                      "byteLength" == y ||
                      "byteOffset" == y)) ||
                  i(y, h))) ||
              b.push(y);
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
          u = o(
            (function () {
              return arguments;
            })()
          )
            ? o
            : function (e) {
                return n(e) && c.call(e, "callee") && !i.call(e, "callee");
              };
        e.exports = u;
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
            u = (i ? i.isBuffer : void 0) || n;
          e.exports = u;
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
