"use strict";
var r = require("~/r");
r(
  "kMYP",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    kMYP: function (e, t, i) {
      i.r(t);
      var s = i("RY8z"),
        o = i("rqVN");
      Object(o.b)({
        properties: {
          benefitGift: { type: Object },
          isMember: Boolean,
          showRegisterBtn: Boolean,
          bizDataMap: { type: Object, value: {} },
          mode: Number,
          neededMoreStoreBalance: Boolean,
        },
        data: { couponList: [], presentList: [], point: {}, visible: !1 },
        methods: {
          closeMemberGift() {
            wx.setStorageSync("hideMemberGiftModule", !0),
              this.triggerEvent("hideMemberGift");
          },
          handleButtonConfirm() {
            this.triggerEvent("bindMobile");
          },
          getMoreGrowth() {
            s.a.navigate({ url: "/packages/user/task-center/index" });
          },
        },
        observers: {
          benefitGift(e) {
            var t,
              {
                couponList: i = [],
                presentList: s = [],
                points: o = {},
              } = e || {},
              r = {};
            (null == o ? void 0 : o.points) > 0 &&
              (r = { value: o.points, status: null == o ? void 0 : o.status }),
              i.forEach((e) => {
                e.preKey = "" + e.status + e.couponId;
              }),
              this.setYZData({
                couponList: i,
                presentList: s,
                point: r,
                visible:
                  (null == i ? void 0 : i.length) > 0 ||
                  (null == s ? void 0 : s.length) > 0 ||
                  (null == (t = r) ? void 0 : t.value) > 0,
              });
          },
        },
      });
    },
  })
);
