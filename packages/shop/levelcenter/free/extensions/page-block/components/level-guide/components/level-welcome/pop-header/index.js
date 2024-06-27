"use strict";
var r = require("~/r");
r(
  "LYND",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      LYND: function (e, t, a) {
        a.r(t);
        var s = a("xyw3"),
          n = a("rqVN"),
          i = a("9zTU"),
          o = a("yar/"),
          r = getApp();
        Object(n.b)({
          properties: {
            title: String,
            hasLevel: Boolean,
            benefitCount: Number,
            couponCount: Number,
            scene: o.a.scene,
            growthLeft: Number,
            isConsume: Boolean,
            joinGapInfo: Object,
            bizDataMap: Object,
            hasMobile: Boolean,
            showMissionList: Boolean,
            isLevelChange: Boolean,
            currentLevelName: String,
            isBeMember: Boolean,
            mode: Number,
          },
          data: { nickName: "", showTitle: "", couponName: "", subTitle: "" },
          attached() {
            this.getNickName(), this.setCouponName(), this.getSubTitle();
          },
          methods: {
            getNickName() {
              var e = r.getUserInfoSync() || {};
              this.setYZData({ nickName: e.nickname });
            },
            setCouponName() {
              this.setYZData({
                couponName:
                  0 === this.properties.benefitCount
                    ? "会员专享优惠券"
                    : "优惠券",
              });
            },
            generateSubTitle() {
              var {
                mode: e,
                joinGapInfo: t,
                isBeMember: a,
                hasLevel: n,
                growthLeft: o,
                couponCount: r,
                benefitCount: h,
                isLevelChange: l,
              } = this.properties;
              if (l && n) {
                return h
                  ? "已重新计算等级，享<span class='highlight'>" +
                      h +
                      "</span>大会员权益"
                  : "享更多会员福利";
              }
              if (!a && !n) {
                var {
                    neededMinTradeAmount: u = 0,
                    neededMinStoredValue: p = 0,
                    neededTotalTradeAmount: c = 0,
                    neededTotalTradeCount: g = 0,
                  } = t,
                  b = u || c || g || p;
                if (e === i.f.CONSUME && b) {
                  (c = c ? Object(s.a)(c).toYuan() : ""),
                    (u = u ? Object(s.a)(u).toYuan() : ""),
                    (p = p ? Object(s.a)(p).toYuan() : "");
                  var d = [],
                    m = "";
                  return (
                    c && d.push('<span class="highlight">' + c + "</span>元"),
                    g && d.push('<span class="highlight">' + g + "</span>笔"),
                    u &&
                      d.push(
                        '单笔消费<span class="highlight">' + u + "</span>元"
                      ),
                    p &&
                      d.push(
                        '单笔充值<span class="highlight">' + p + "</span>元"
                      ),
                    d.length > 0 && (m = u && 1 === d.length ? "再" : "再消费"),
                    m + d.join("或") + "即可成为会员"
                  );
                }
                if (e === i.f.GROWTH && t.neededGrowth > 0)
                  return (
                    "再获得<span class='highlight'>" +
                    o +
                    "</span>成长值即可成为会员"
                  );
                if (e === i.f.STORE && t.neededStoreBalance)
                  return (
                    "单笔充值<span class='highlight'>" +
                    Object(s.a)(t.neededStoreBalance).toYuan() +
                    "</span>元即可成为会员"
                  );
              }
              return r
                ? "获得<span class='highlight'>" +
                    r +
                    "张</span>" +
                    (0 === h ? "会员专享优惠券" : "优惠券") +
                    "，" +
                    ("享<span class='highlight'>" + h + "大</span>会员权益")
                : h
                ? "享<span class='highlight'>" + h + "</span>大会员权益"
                : "享更多会员福利";
            },
            getSubTitle() {
              var e = this.generateSubTitle();
              this.setYZData({ subTitle: e });
            },
          },
        });
      },
    }
  )
);
