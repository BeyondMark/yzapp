"use strict";
var r = require("~/r");
r(
  "EJpa",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      EJpa: function (e, t, i) {
        i.r(t);
        var r = i("rqVN"),
          l = i("lOyf"),
          s = i("AQkN"),
          a = i("hHpg"),
          n = i("umDW"),
          u = Object(l.a)();
        Object(r.b)({
          properties: {
            btnText: { type: String, value: "" },
            skuInfo: { type: Object, value: {} },
            linkTo: { type: String },
            userLevel: {
              type: Object,
              value: {},
              observer(e) {
                e && this.getLimitTime();
              },
            },
            hasAlias: Boolean,
            nowLevelAlias: {
              type: String,
              observer(e) {
                e &&
                  this.setYZData({
                    isWaitReNewStatus: this.getIsWaitReNewStatus(),
                  });
              },
            },
            experienceRenew: Boolean,
            hasMobile: Boolean,
            bizDataMap: { type: Object, value: {} },
            currentCycleSku: { type: Object, value: {} },
          },
          data: {
            experiencePrice: !1,
            limitTime: "",
            isIphoneX: u,
            checked: !1,
            isWaitReNewStatus: !1,
          },
          methods: {
            getLimitTime() {
              var e,
                {
                  userLevel: t,
                  nowLevelAlias: i,
                  experienceRenew: r,
                } = this.properties,
                l = null == t || null == (e = t.level) ? void 0 : e.levelAlias,
                s =
                  ((null == t ? void 0 : t.isExperienceLevel) || !1) &&
                  l === i &&
                  r;
              this.setYZData({ limitTime: s });
            },
            getIsWaitReNewStatus() {
              var e,
                { userLevel: t, nowLevelAlias: i } = this.properties,
                r = null == t ? void 0 : t.isExperienceLevel,
                l = (null == t ? void 0 : t.isExpired) || !1;
              return (
                (null == t || null == (e = t.level) ? void 0 : e.levelAlias) ===
                  i &&
                !l &&
                !r
              );
            },
            handleReadAgreement() {
              Object(n.a)(
                "https://www.youzan.com/intro/rule/detail?alias=1odjry5d&pageType=rules"
              );
            },
            handleChecked(e) {
              this.setYZData({ checked: e.detail });
            },
            handleBuyExperience() {
              this.triggerEvent("experience");
            },
            handleBuy() {
              var e;
              this.getIsWaitReNewStatus()
                ? this.triggerEvent("renew")
                : (null == (e = this.properties.currentCycleSku)
                    ? void 0
                    : e.goodsSkuType) !== s.a.Renewal
                ? this.data.checked
                  ? this.triggerEvent("pay")
                  : Object(a.a)("请先阅读并勾选协议")
                : this.triggerEvent("copy");
            },
            bindGetPhoneNumber() {
              this.triggerEvent("bindMobile");
            },
          },
        });
      },
    }
  )
);
