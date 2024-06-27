"use strict";
var r = require("~/r");
r(
  "bL7q",
  Object.assign({}, require("~/v.js").modules, {
    "4GQ0": function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      });
      var c = n("iKL5"),
        r = n("Uol7");
      function o(t) {
        var e = getApp();
        return new Promise(function (n, o) {
          e.carmen({
            api: "youzan.logistics.geo/1.0.0/get",
            data: {
              city: t.city,
              address: ""
                .concat(t.province)
                .concat(t.city)
                .concat(t.county)
                .concat(t.addressDetail),
            },
            config: r.a,
            method: "GET",
            success: function (t) {
              var e = t.lat,
                r = t.lng,
                o = t.formattedAddress,
                a = Object(c.a)(r, e);
              n({ lat: a.lat, lon: a.lng, formattedAddress: o });
            },
            fail: o,
          });
        });
      }
    },
    "4kmb": function (t, e, n) {
      n.r(e),
        n.d(e, "ADDRESS_TYPE", function () {
          return c;
        }),
        n.d(e, "ADDRESS_SOURCE", function () {
          return r;
        }),
        n.d(e, "ADDRESS_POI_TYPE", function () {
          return o;
        });
      var c = { INPUT: 1, POI: 2 },
        r = { YOUZAN: 1, WECHAT: 2 },
        o = { QQ: 1, BAIDU: 2, AMAP: 3 };
    },
    "7lfQ": function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      });
      var c = n("9ZMt");
      e.b = function (t) {
        return new Promise(function (e, n) {
          c.default.$native.getSetting({
            success: function (r) {
              r.authSetting[t]
                ? e()
                : c.default.$native.authorize({
                    scope: t,
                    success: e,
                    fail: n,
                  });
            },
            fail: n,
          });
        });
      };
      var r = function (t) {
        return new Promise(function (e, n) {
          c.default.$native.getSetting({
            success: function (n) {
              n.authSetting[t] ? e(!0) : e(!1);
            },
            fail: n,
          });
        });
      };
    },
    Uol7: function (t, e, n) {
      n.d(e, "a", function () {
        return c;
      });
      var c = { skipKdtId: !0, skipShopInfo: !0 };
    },
    bL7q: function (t, e, n) {
      n.r(e);
      var c = n("xXNE"),
        r = n("YeA1"),
        o = {
          name: "wechat-address",
          props: { isCell: { type: Boolean, default: !0 } },
          data: () => ({
            cloudData: { displayConfig: { showWechatAddress: !0 } },
            url: "https://img01.yzcdn.cn/public_files/2020/05/24/c76f5e98253c7ea13db16112bbfcf953.png",
          }),
          created() {
            Object(r.b)(this, ["cloudData"]);
          },
          methods: {
            onClick() {
              Object(c.a)()
                .then((t) => {
                  this.$emit("save", t);
                })
                .catch((t) => {});
            },
          },
          ud: !0,
        },
        a = n("9ZMt");
      e.default = a.default.component(o);
    },
    iKL5: function (t, e, n) {
      n.d(e, "a", function () {
        return c;
      });
      var c = function (t, e) {
        var n = (3e3 * Math.PI) / 180,
          c = t,
          r = e,
          o = Math.sqrt(c * c + r * r) + 2e-5 * Math.sin(r * n),
          a = Math.atan2(r, c) + 3e-6 * Math.cos(c * n);
        return {
          lng: (t = o * Math.cos(a) + 0.0065),
          lat: (e = o * Math.sin(a) + 0.006),
        };
      };
    },
    xXNE: function (t, e, n) {
      n.d(e, "a", function () {
        return u;
      });
      var c = n("mK0O"),
        r = n("7lfQ"),
        o = n("4kmb"),
        a = n("4GQ0");
      function i(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(t);
          e &&
            (c = c.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, c);
        }
        return n;
      }
      function s(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? i(Object(n), !0).forEach(function (e) {
                Object(c.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function u() {
        return new Promise(function (t, e) {
          Object(r.b)("scope.address")
            .then(function () {
              wx.chooseAddress({
                success: function (e) {
                  var n = {
                    addressDetail: String.prototype.trim.call(
                      e.detailInfo || ""
                    ),
                    areaCode: e.nationalCode,
                    city: e.cityName,
                    county: e.countyName,
                    postalCode: e.postalCode,
                    province: e.provinceName,
                    tel: e.telNumber,
                    userName: e.userName,
                    source: o.ADDRESS_SOURCE.WECHAT,
                  };
                  Object(a.a)(n)
                    .then(function (e) {
                      t(s(s({}, n), e));
                    })
                    .catch(function () {
                      t(n);
                    });
                },
                fail: function (t) {
                  "chooseAddress:cancel" !== t.errMsg &&
                    "chooseAddress:fail cancel" !== t.errMsg &&
                    e(t);
                },
              });
            })
            .catch(e);
        });
      }
    },
  })
);
