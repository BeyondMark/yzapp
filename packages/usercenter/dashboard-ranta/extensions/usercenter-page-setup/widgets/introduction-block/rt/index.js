"use strict";
var r = require("~/r");
r(
  "UlyH",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      UlyH: function (t, e, o) {
        o.r(e);
        var r = o("eijD"),
          a = o("7/pW"),
          i = o("x5Yp"),
          n = o("2xJD"),
          s = o("C+bX");
        Object(a.a)({
          properties: {
            introduction: {
              type: Object,
              value: {},
              observer: "onIntroductionShow",
            },
          },
          data: {
            showIntroduceCard: !1,
            hasActivity: !1,
            isShowInviteEntry: !1,
          },
          attached() {
            var t = wx.getStorageSync("introduce-expire") || 0;
            Date.now() > t && this.setYZData({ showIntroduceCard: !0 }),
              this.getIsShowInviteEntry();
          },
          methods: {
            onIntroduceCardHide() {
              this.setYZData({ showIntroduceCard: !1 });
              var t = new Date().setHours(23, 59, 59);
              wx.setStorage({ key: "introduce-expire", data: t });
            },
            onJumpToActivity() {
              var t = getApp(),
                e = this.data.introduction.alias || "",
                { shopMetaInfo: o = {} } = t.getShopInfoSync(),
                r = Object(n.a)(o) ? t.getHQKdtId() : t.getKdtId();
              wx.navigateTo({
                url:
                  "/packages/edu/webview/index?targetUrl=" +
                  encodeURIComponent(
                    "https://h5.youzan.com/wscvis/ump/introduction/old-student?kdt_id=" +
                      r +
                      "&alias=" +
                      e +
                      "&from=usercenter_promotion_ad"
                  ),
              });
            },
            onIntroductionShow(t) {
              var e = !Object(i.a)(t);
              this.setYZData({ hasActivity: e });
            },
            getIsShowInviteEntry() {
              var t = this;
              return Object(r.a)(function* () {
                var e = (yield Object(s.a)()).some((t) => 2 === t.moduleType);
                t.setYZData({ isShowInviteEntry: e });
              })();
            },
          },
        });
      },
    }
  )
);
