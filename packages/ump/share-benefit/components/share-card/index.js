"use strict";
var r = require("~/r");
r(
  "U+IA",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "U+IA": function (t, e, i) {
      i.r(e);
      var a = i("Fcif"),
        r = i("rqVN"),
        s = i("q29p"),
        n = i.n(s),
        o = i("jmjq"),
        d = i.n(o),
        h = i("9Bnu"),
        c = i("2wjL"),
        l = i("jA1y"),
        g = getApp();
      Object(r.b)({
        data: {
          imgShowTop:
            "https://img01.yzcdn.cn//upload_files/2020/08/31/FrftAZP3DsU3m3-mMEWMCnY0ELMi.png!middle.webp",
          startAt: 0,
          endAt: 0,
          shareNum: 0,
          shopInfo: {},
          reward: {},
          validTime: "",
          preferentialType: 0,
          PreferentialType: { DENOMINATIONS: 1, DISCOUNT: 2, CONVERSION: 3 },
          RewardType: { COUPON: 1, POINTS: 2 },
          couponTitle: "无门槛使用",
          denominations: 0,
          discount: "",
          hasLogin: !1,
          activityAlias: "",
          shareTag: "",
          rewardTimes: 0,
          rewardList: [],
        },
        properties: {
          activityInfo: {
            type: Object,
            observer(t) {
              t && this.getShareActivity(t);
            },
          },
          activityQuery: {
            type: Object,
            observer(t) {
              t &&
                (this.setMyRewardUrl(t),
                this.getShareTag({ activityAlias: t.umpAlias }),
                this.getMyReward({ activityId: t.activityId }));
            },
          },
        },
        attached() {
          g.getShopInfo().then((t) => {
            this.setYZData({ shopInfo: t });
          }),
            this.checkLogin();
        },
        methods: {
          getShareActivity(t) {
            this.setYZData({
              startAt: n()(t.startAt, "YYYY-MM-DD HH:mm:ss"),
              endAt: n()(t.endAt, "YYYY-MM-DD HH:mm:ss"),
              shareNum: t.shareNum,
              reward: t.reward,
            });
            var { couponGroupInfo: e } = t.reward;
            if (e) {
              var { validTimeCopywriting: i = "", preferentialType: a = 0 } = e;
              this.setYZData({
                validTime: i,
                preferentialType: a,
                denominations: this.getDenominations(e),
                discount: this.getDiscount(e),
                couponTitle: this.getCouponTitle(e),
              });
            }
          },
          formatCent: (t) => d()(t, !0, !1).replace(/\.?0+$/, ""),
          getCouponTitle(t) {
            return t.condition > 0
              ? "满" + this.formatCent(t.condition) + "元使用"
              : "无门槛使用";
          },
          getDenominations(t) {
            if (t.denominations > 0) {
              var e = this.formatCent(t.denominations);
              return t.valueRandomTo > 0
                ? e + "-" + this.formatCent(t.valueRandomTo)
                : e;
            }
            return 0;
          },
          getDiscount: (t) => (t.discount > 0 ? "" + t.discount / 10 : ""),
          onLoginClick() {
            this.getShareTag({
              activityAlias: this.data.activityQuery.umpAlias,
            }),
              this.setData({ hasLogin: !0 });
          },
          checkLogin() {
            Object(h.a)().then((t) => {
              var e = !!t.mobile;
              e && this.onLoginClick(), this.setData({ hasLogin: e });
            });
          },
          onShareCallback() {
            g.logger.log({
              et: "click",
              ei: "wx_video_share_click",
              en: "视频号分享有礼分享好友",
              pt: "wxvideoGoodsDetail",
              params: {
                activity_id: this.data.activityQuery.activityId,
                kdt_id: this.data.activityQuery.kdtId,
              },
            });
          },
          getShareTag(t) {
            return Object(l.c)({
              path: "/wscdeco/ump/activity/get-share-tag.json",
              data: t,
              method: "POST",
            }).then((e) => {
              var { alias: i } = e;
              this.triggerEvent("set-share-tag", { shareTag: i }),
                this.setYZData({ activityAlias: t.activityAlias, shareTag: i });
            });
          },
          setMyRewardUrl(t) {
            var e = JSON.parse(JSON.stringify(t));
            (null == e ? void 0 : e.wxVideo) && delete e.wxVideo,
              (e.goMyReward = 1),
              (this.myRewardUrl = c.a.add(
                "/packages/ump/share-benefit/index",
                Object(a.a)({}, e)
              ));
          },
          toMyReward() {
            wx.navigateTo({ url: this.myRewardUrl });
          },
          getMyReward(t) {
            return Object(l.c)({
              path: "/wscindustry/share-encourage/findShareDetailPage.json",
              data: t,
            }).then((t) => {
              this.setYZData({
                rewardTimes: t.rewardTimes,
                rewardList: t.content,
              });
            });
          },
          achieveNum(t) {
            var e;
            return (
              (null == (e = t.sharedUserList) ? void 0 : e.length) >= t.shareNum
            );
          },
          isSended: (t) => 1 === t.senderStatus,
        },
      });
    },
  })
);
