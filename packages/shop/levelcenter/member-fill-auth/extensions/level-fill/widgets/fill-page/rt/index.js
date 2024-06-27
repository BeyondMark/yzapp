"use strict";
var r = require("~/r");
r(
  "lSZC",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      lSZC: function (e, t, r) {
        r.r(t);
        var a = r("bdYe"),
          i = r.n(a),
          o = r("KEq0"),
          n = r.n(o),
          s = r("7/pW"),
          l = r("umDW"),
          u = r("9zTU"),
          d = r("/fWJ"),
          p = getApp(),
          c = 3,
          f = 4,
          v = 5,
          h = 7,
          m = 8,
          b = { 1: "男", 2: "女", 0: "未知" },
          g = { CARD: 1, LOGO: 2 };
        Object(s.a)({
          data: {
            ready: !1,
            coverUrl: "",
            levelBg: "",
            levelName: "",
            couponAmount: 0,
            benefitAmount: 0,
            attributeList: [],
            isLogoHeader: !1,
            shopInfo: {},
            benefitRenderArr: [],
            bgStyle: "",
            bizDataMap: {},
          },
          attached() {
            var {
              alias: e,
              gotoParam: t,
              bizDataMap: r,
              kdt_id: a,
            } = this.ctx.data.pageQuery;
            if (((this.gotoParam = t), r && "string" == typeof r))
              try {
                var o = JSON.parse(decodeURIComponent(r));
                this.setYZData({ bizDataMap: o });
              } catch (e) {}
            a && p.updateKdtId(a),
              p
                .request({
                  path: "/wscuser/levelcenter/getAttributesAndAvailableLevel.json",
                  query: { alias: e || "" },
                })
                .then((e) => {
                  var {
                      availableShowLevel: t,
                      customerAttributeInfoList: r = [],
                      brandPagesSetting: a = { headType: g.CARD },
                    } = e,
                    o = a.headType === g.LOGO;
                  o &&
                    p.getShopInfo().then((e) => {
                      this.setYZData({
                        shopInfo: { shopLogo: e.logo, shopName: e.shop_name },
                      });
                    });
                  var s = t.benefitNum || 0,
                    l = i()(t.allCouponPrice || 0, 100),
                    d = this.getBenefitRenderArr(s, l);
                  o ||
                    t.coverUrl ||
                    this.setYZData({
                      bgStyle: this.getLevelStyle(t.colorCode || u.m),
                    }),
                    this.setYZData({
                      ready: !0,
                      coverUrl: n()(t.coverUrl, "middle"),
                      levelName: t.levelName,
                      benefitAmount: s,
                      couponAmount: l,
                      attributeList: this.formatAttributeList(r),
                      isLogoHeader: o,
                      benefitRenderArr: d,
                    });
                });
          },
          detached() {
            var e = p.getKdtId(),
              t = p.getHQKdtId();
            e !== t && p.updateKdtId(t, !0);
          },
          methods: {
            afterAuthorize() {
              var { gotoParam: e } = this,
                t = p.getHQKdtId();
              p.updateKdtId(t, !0).finally(() => {
                wx.navigateBack({
                  fail: () => {
                    Object(l.a)(
                      "https://h5.youzan.com/wscuser/levelcenter/fill?skipMobileLogin=1&" +
                        decodeURIComponent(e),
                      { method: "redirectTo", title: "注册会员" }
                    );
                  },
                });
              });
            },
            getLevelStyle: (e) =>
              "background-size: cover; background-position: center;background:" +
              Object(d.c)({ colorCode: e, levelType: u.g.FREE })
                .backgroundStyle,
            formatAttributeList(e) {
              return e && e.length
                ? e.map((e) => {
                    var t = this.renderValue(e),
                      r = e.sysValues.length > 0 ? "请选择" : "请填写",
                      a = e.isRequired ? "（必填）" : "";
                    return {
                      title: e.name,
                      value: t || "" + r + a,
                      isRealValue: !!t,
                      isAvatar: e.dataType === v,
                      isMobile: 3 === e.attributeId,
                    };
                  })
                : [];
            },
            renderValue(e) {
              var { dataType: t, value: r = "", extValue: a, sysValues: i } = e;
              if (t === f) return b[r] || "";
              if (t === c) return a || "";
              if (t === m) {
                var o = r
                  .split("、")
                  .filter((e) => !!e)
                  .map((e) => Number(e));
                return (
                  i
                    .filter((e) => o.indexOf(e.id) > -1)
                    .map((e) => e.value)
                    .join("、") || ""
                );
              }
              return t === h
                ? i
                    .filter((e) => e.id === Number(r))
                    .map((e) => e.value)
                    .join("、") || ""
                : r;
            },
            getBenefitRenderArr(e, t) {
              var r = {
                  coupon: { prefix: "领", content: t, suffix: "元优惠券" },
                  benefit: { prefix: "享", content: e, suffix: "大权益" },
                  empty: { prefix: "享", suffix: "会员权益" },
                },
                a = [];
              return (
                t > 0 || e > 0
                  ? (t > 0 && a.push(r.coupon), e > 0 && a.push(r.benefit))
                  : a.push(r.empty),
                a
              );
            },
          },
        });
      },
    }
  )
);
