"use strict";
var r = require("~/r");
r(
  "WHmz",
  Object.assign(
    {},
    require("../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      WHmz: function (e, a, t) {
        t.r(a);
        var s = t("rqVN"),
          c = t("GFa9"),
          r = t("QKcl"),
          i = {
            point:
              "https://img01.yzcdn.cn/public_files/2019/05/09/3ebe0cd168f36949ec6812dbf1572c3f.png",
            coupon:
              "https://img01.yzcdn.cn/public_files/2019/05/09/e3ba414159a966e9c28daebad02911c8.png",
            present:
              "https://img01.yzcdn.cn/public_files/2019/05/09/bbab3cab78bb467b4a11fec6f643aa6a.png",
          },
          n = { point: "查看", coupon: "去使用", present: "去领取" },
          o = {
            point: "/packages/user/integral/index",
            present: "/packages/ump/presents/index",
          };
        Object(s.b)({
          properties: {
            rewardData: { type: Array, value: [] },
            isMultiOnlineShop: { type: Boolean, value: !1 },
          },
          data: { rewardList: [] },
          externalClasses: ["custom-class"],
          attached() {
            var { rewardData: e } = this.data,
              a = e.map((e) => {
                var {
                  type: a,
                  descKey: t,
                  descValue: s,
                  customClass: c,
                  couponId: r,
                } = e;
                return {
                  icon: i[a],
                  desc: t + ":" + s,
                  actionDesc: n[a],
                  customClass: c,
                  type: a,
                  couponId: r,
                };
              });
            this.setYZData({ rewardList: a });
          },
          methods: {
            handleRewardActionClick(e) {
              var { currentTarget: a } = e,
                { actionType: t, couponId: s } = a.dataset,
                { isMultiOnlineShop: i } = this.data,
                n = "";
              if ("coupon" === t) {
                if (i)
                  return void c.a.navigate({
                    url: "/packages/user/coupon/list/index",
                  });
                Object(r.a)({ couponId: s, groupType: "card" })
                  .then((e) => {
                    var {
                      isSwitchTab: a = !0,
                      url: t = "/packages/home/dashboard/index",
                    } = e || {};
                    a ? c.a.switchTab({ url: t }) : c.a.navigate({ url: t });
                  })
                  .catch((e) => {
                    var { msg: a } = e;
                    wx.showToast({ title: a, icon: "none" });
                  });
              } else n = o[t];
              c.a.navigate({ url: n });
            },
          },
        });
      },
    }
  )
);
