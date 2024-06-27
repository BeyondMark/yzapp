"use strict";
var r = require("~/r");
r(
  "WFKb",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      WFKb: function (o, e, t) {
        t.r(e);
        var s = t("YeA1"),
          i = t("ONqW"),
          h = t("KEq0"),
          a = t.n(h),
          p = t("9ZMt"),
          r = t("zGtj"),
          n = {
            name: "shop-block",
            props: {
              placeholder: String,
              cloudConfig: { type: Object, default: () => ({}) },
            },
            data() {
              var {
                theme: o = "",
                themeCSS: e = "",
                pageStyleCSS: t = "",
                alias: s = "",
                shopMpInfo: i = {},
                goodsBaseInfo: h = {},
                shopConfig: a = {},
                multistore: r = {},
                openAppConfig: n = {},
                physicalStores: l = {},
                staticConfig: g = {},
                retail: d = {},
              } = p.default.getGlobal("GOODS_DATA") || {};
              return {
                goodsBaseInfo: h,
                shopConfig: a,
                multistore: r,
                theme: o,
                themeCSS: e,
                pageStyleCSS: t,
                shopMpInfo: i,
                retail: d,
                openAppConfig: n,
                alias: s,
                physicalStores: l,
                staticConfig: g,
                showOldShopPop: !1,
                spm: "",
                showShopBrandTag: !1,
                showShopOfficialTag: !1,
                showOldShopBadge: !1,
                goodsDetailLogoUrl: "",
              };
            },
            logicData() {
              var { shopBaseInfo: o = {} } =
                p.default.getGlobal("GOODS_DATA") || {};
              return { shopBaseInfo: o };
            },
            computed: {
              shopBgStyle() {
                return this.cloudConfig.shopBgColor
                  ? "background: " + this.cloudConfig.shopBgColor
                  : "";
              },
              existsTags() {
                return (
                  this.showOldShopBadge ||
                  this.showShopBrandTag ||
                  this.showShopOfficialTag
                );
              },
              themeVars() {
                return this.themeCSS + this.pageStyleCSS;
              },
              hideBlock() {
                var o;
                return (
                  !(
                    null == (o = this.openAppConfig.appConfig) ||
                    !o.hide_shop_link
                  ) || !this.goodsBaseInfo.showGoodsShopSign
                );
              },
              showPublicBenefit() {
                return !!Number(this.shopConfig.publicWelfareShopSwitch);
              },
              shopInfo() {
                var { shopBaseInfo: o } = this;
                return { name: o.name, kdtId: o.kdtId, logo: o.logo };
              },
              oldShopImage() {
                var { shopOperateDurationYears: o = 0 } = this.shopConfig;
                o && o >= 20 && (o = 20);
                var e = this.staticConfig.YEAR_TAG;
                if (!e) return { src: "", width: 0 };
                var t = e[o];
                return {
                  src: t ? a()(t.src, "!300x0.jpg") : "",
                  width: t ? t.width : 0,
                };
              },
              actHaiGouIcon() {
                var { actHaiGouIcon: o } = this.shopConfig,
                  e = Number(o),
                  t = this.staticConfig.ACTHAI_GOU_ICON;
                return t && e ? a()(t[e], "!100x0.jpg") : "";
              },
              publicBenefitStyle() {
                return this.showPublicBenefit
                  ? "padding: 12px 0 12px 12px;border-radius: 7px;background: #fff;box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.03);"
                  : "";
              },
            },
            watch: {
              showPublicBenefit(o) {
                o &&
                  Object(i.a)().log({
                    et: "view",
                    ei: "view_public_benefit",
                    en: "有赞公益曝光",
                  });
              },
            },
            created() {
              var o;
              (this.spm = null == (o = this.ctx.logger) ? void 0 : o.getSpm()),
                Object(s.e)(this, { toggleOldShop: this.toggleOldShop }),
                Object(s.b)(this, [
                  "goodsBaseInfo",
                  "shopBaseInfo",
                  "multistore",
                  "theme",
                  "themeCSS",
                  "pageStyleCSS",
                  "shopMpInfo",
                  "retail",
                  "alias",
                  "physicalStores",
                  "staticConfig",
                  "openAppConfig",
                ]),
                Object(s.b)(this, {
                  shopConfigs: (o) => {
                    this.goodsDetailLogoUrl =
                      (null == o ? void 0 : o.goods_detail_logo_url) || "";
                  },
                }),
                Object(s.b)(this, {
                  shopConfig: (o) => {
                    this.shopConfig = o;
                    var {
                        brandCertType: e = 0,
                        principalCertType: t = 0,
                        shopOperateDurationTagSwitch: s = 0,
                        shopOperateDurationYears: i = 0,
                      } = this.shopConfig,
                      {
                        FLAGSHIP: h,
                        EXCLUSIVE: a,
                        BOUTIQUE: p,
                        SHOPPING: n,
                        CHAIN: l,
                      } = r.a;
                    (this.showShopOfficialTag = 2 === t || 5 === t),
                      (this.showOldShopBadge = i > 0 && 1 == +s),
                      (this.showShopBrandTag =
                        -1 !== [h, a, p, n, l].indexOf(e)),
                      this.ctx.cloud.emit("onShopTagsChange", {
                        showShopOfficialTag: this.showShopOfficialTag,
                        showOldShopBadge: this.showOldShopBadge,
                        showShopBrandTag: this.showShopBrandTag,
                        shopOperateDurationYears: i,
                      });
                  },
                });
            },
            methods: {
              followShop() {
                this.ctx.event.emit("follow:show");
              },
              toggleOldShop() {
                this.showOldShopPop = !this.showOldShopPop;
              },
            },
            ud: !0,
          };
        e.default = p.default.component(n);
      },
    }
  )
);
