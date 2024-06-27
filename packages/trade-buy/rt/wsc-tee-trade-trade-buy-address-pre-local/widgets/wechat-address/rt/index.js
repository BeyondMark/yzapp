"use strict";
var r = require("~/r");
r(
  "yee+",
  Object.assign({}, require("~/v.js").modules, {
    "4GQ0": function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      });
      var r = n("iKL5"),
        c = n("Uol7");
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
            config: c.a,
            method: "GET",
            success: function (t) {
              var e = t.lat,
                c = t.lng,
                o = t.formattedAddress,
                a = Object(r.a)(c, e);
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
          return r;
        }),
        n.d(e, "ADDRESS_SOURCE", function () {
          return c;
        }),
        n.d(e, "ADDRESS_POI_TYPE", function () {
          return o;
        });
      var r = { INPUT: 1, POI: 2 },
        c = { YOUZAN: 1, WECHAT: 2 },
        o = { QQ: 1, BAIDU: 2, AMAP: 3 };
    },
    "7lfQ": function (t, e, n) {
      n.d(e, "a", function () {
        return c;
      });
      var r = n("9ZMt");
      e.b = function (t) {
        return new Promise(function (e, n) {
          r.default.$native.getSetting({
            success: function (c) {
              c.authSetting[t]
                ? e()
                : r.default.$native.authorize({
                    scope: t,
                    success: e,
                    fail: n,
                  });
            },
            fail: n,
          });
        });
      };
      var c = function (t) {
        return new Promise(function (e, n) {
          r.default.$native.getSetting({
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
        return r;
      });
      var r = { skipKdtId: !0, skipShopInfo: !0 };
    },
    iKL5: function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      });
      var r = function (t, e) {
        var n = (3e3 * Math.PI) / 180,
          r = t,
          c = e,
          o = Math.sqrt(r * r + c * c) + 2e-5 * Math.sin(c * n),
          a = Math.atan2(c, r) + 3e-6 * Math.cos(r * n);
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
      var r = n("mK0O"),
        c = n("7lfQ"),
        o = n("4kmb"),
        a = n("4GQ0");
      function i(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? i(Object(n), !0).forEach(function (e) {
                Object(r.a)(t, e, n[e]);
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
          Object(c.b)("scope.address")
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
    "yee+": function (t, e, n) {
      n.r(e);
      var r = n("xXNE"),
        c = n("YeA1"),
        o = {
          name: "wechat-address",
          data: () => ({
            cloudData: { displayConfig: { isShowWechatAddress: !0 } },
          }),
          created() {
            Object(c.b)(this, ["cloudData"]);
          },
          methods: {
            onClick() {
              Object(r.a)()
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
  })
);
