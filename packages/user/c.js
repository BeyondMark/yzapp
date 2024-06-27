"use strict";
(exports.ids = [36]),
  (exports.modules = {
    "6jrI": function (t, n, u) {
      u.d(n, "b", function () {
        return e;
      }),
        u.d(n, "c", function () {
          return r;
        }),
        u.d(n, "a", function () {
          return o;
        });
      var e = { 0: "去领取", 1: "已领取", 2: "已过期", 3: "已过期" },
        r = 0,
        o = { TOGET: 0, GOT: 1, EXPIRED: 2, UNUSED: 3 };
    },
    rLi2: function (t, n, u) {
      function e(t) {
        return getApp().request({
          path: "/wscump/mediator-coupon/getList.json",
          data: t,
        });
      }
      u.d(n, "a", function () {
        return e;
      });
    },
    "w/Za": function (t, n, u) {
      function e(t) {
        return getApp().request({
          path: "/wscump/coupon/get_alias_by_id.json",
          data: t,
        });
      }
      function r(t) {
        return getApp().request({
          path: "/wscump/coupon/take-coupon-by-alias.json",
          data: t,
        });
      }
      function o(t) {
        return getApp().request({
          path: "/wscump/coupon/queryShareSetting.json",
          data: t,
        });
      }
      function c(t) {
        return getApp().request({
          path: "/wscump/coupon/coupon-can-enter-shop.json",
          data: t,
        });
      }
      u.d(n, "b", function () {
        return e;
      }),
        u.d(n, "d", function () {
          return r;
        }),
        u.d(n, "c", function () {
          return o;
        }),
        u.d(n, "a", function () {
          return c;
        });
    },
  });
