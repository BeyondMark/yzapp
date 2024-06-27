"use strict";
var r = require("~/r");
r(
  "WqZb",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    WqZb: function (e, o, s) {
      s.r(o);
      var t = s("7/pW"),
        i = s("YeA1"),
        r = getApp();
      Object(t.a)({
        attached() {
          Object(i.b)(this, [
            "inited",
            "bgColor",
            "bgImageUrl",
            "showLogo",
            "shopName",
            "startDate",
            "costPoints",
            "pointsName",
            "credit",
            "costPoints",
            "recordUrl",
            "showFollowPopup",
            "followExtraData",
            "alias",
            "resultAward",
            "isWinning",
            "showResult",
            "showWecomQrCodePopup",
            "wecomCustomerQrCode",
            "endDate",
            "showDetail",
            "description",
            "joinThresholdDesc",
            "showFailPopup",
            "failPopupTasks",
            "recommendGoods",
            "openType",
            "orderJumpUrl",
          ]);
        },
        methods: {
          handleClickMyGift() {
            r.logger.log({
              et: "click",
              ei: "verb_index_prize",
              en: "点击我的奖品",
            }),
              wx.navigateTo({ url: this.data.recordUrl });
          },
          handleClickShopName() {
            r.logger.log({
              et: "click",
              ei: "verb_index_shop",
              en: "点击店铺名称",
            }),
              wx.reLaunch({ url: "/packages/home/dashboard/index" });
          },
          openDetail() {
            this.ctx.process.invoke("openDetail");
          },
          toggleFollowPopup() {
            this.ctx.process.invoke("toggleFollowPopup");
          },
          hideLotteryResult() {
            this.ctx.process.invoke("hideLotteryResult");
          },
          handleClickBtn() {
            var e;
            return null == (e = this.ctx.process.invoke("handleClickBtn"))
              ? void 0
              : e[0];
          },
          closeWecomQrCodePopup() {
            this.ctx.process.invoke("closeWecomQrCodePopup");
          },
          closeDetail() {
            this.ctx.process.invoke("closeDetail");
          },
          closeFailPopup() {
            this.ctx.process.invoke("closeFailPopup");
          },
        },
      });
    },
  })
);
