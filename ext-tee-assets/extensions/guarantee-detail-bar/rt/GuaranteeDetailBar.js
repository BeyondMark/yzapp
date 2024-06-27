"use strict";
var r = require("~/r");
r(
  "fnMd",
  Object.assign({}, require("~/v.js").modules, {
    fnMd: function (e, t, a) {
      a.r(t);
      var s = a("US/N");
      var n = a("YeA1"),
        r = a("9ZMt"),
        i = a("NHEX"),
        o = a.n(i),
        h = 0,
        u = 1,
        g = 2,
        d = 3,
        c = ["quality_goods", "self_owned_brand", "authorized_brand"],
        l = [...c, "after_sale_worry_free_satisfy"],
        y = {
          name: "GuaranteeDetailBar",
          logicData() {
            var { guaranteeData: e } = r.default.getGlobal("GOODS_DATA") || {};
            return { guaranteeData: e };
          },
          data() {
            var {
                themeVars: e,
                goodsBaseInfo: t = {},
                shopBaseInfo: a = { kdtId: 0 },
                shopConfig: s = { weixinTransactionSecured: "0" },
                guaranteeData: n,
              } = r.default.getGlobal("GOODS_DATA") || {},
              i = this.formatGuaranteeData(n),
              h = this.getGuaranteeDescList(i),
              u =
                "weapp" === r.default.getEnv() &&
                "1" === s.weixinTransactionSecured;
            return {
              shopBaseInfo: a,
              goodsBaseInfo: t,
              shopConfig: s,
              themeVars: e,
              guarantee: i,
              guaranteeDesc: h,
              snapShotInfo: {
                pageSource: "STANDARD",
                featureKeys: [],
                showId: 0,
                orderCreateTime: 0,
              },
              buyerId: 0,
              showPopup: !1,
              abDisplay: !0,
              abConfig: {},
              apolloLogo: {
                iconLongTextWhite:
                  "//b.yzcdn.cn/security/fangxin-long-text-white.png",
                iconShortTextGreen: "//b.yzcdn.cn/security/fangxin-green.svg",
                iconLongTextGreen:
                  "//b.yzcdn.cn/security/fangxin-long-text-green.png",
                iconShortTextWhite:
                  "//img01.yzcdn.cn/upload_files/2022/12/12/FmM0fdlONqIDcbgwoJBbn31oTgF2.png",
                iconLongTextWhiteWx:
                  "//b.yzcdn.cn/guarantee/icon-long-text-white-wx@3x.png",
                iconShortTextGreenWx:
                  "//b.yzcdn.cn/guarantee/icon-short-text-green-wx@3x.png",
                iconLongTextGreenWx:
                  "//b.yzcdn.cn/guarantee/icon-long-text-green-wx@3x.png",
                copyright: "//b.yzcdn.cn/guarantee/copyright1@3x.png",
                customerService:
                  "//b.yzcdn.cn/guarantee/customer-service@3x.png",
              },
              featureKeys: [],
              tpKey: "",
              tpVersion: 1,
              uuid: o()(this.ctx.logger.getLogParams(), "user.uuid"),
              isWeixinSecured: u,
            };
          },
          computed: {
            logo() {
              var {
                  guarantee: e,
                  apolloLogo: t,
                  isWeixinSecured: a,
                  hasRealKey: s,
                } = this,
                {
                  iconShortTextGreen: n,
                  iconLongTextGreen: r,
                  iconLongTextWhite: i,
                  iconShortTextWhite: o,
                  iconShortTextGreenWx: c,
                  iconLongTextGreenWx: l,
                  iconLongTextWhiteWx: y,
                } = t;
              return {
                [h]: a ? c : n,
                [u]: a ? l : s ? n : r,
                [g]: a ? y : s ? o : i,
                [d]: n,
              }[e.style];
            },
            logoClass() {
              var e = {
                  [h]: this.isWeixinSecured ? "short-green-wx" : "short-green",
                  [u]: this.isWeixinSecured
                    ? "long-green-wx"
                    : this.hasRealKey
                    ? "short-green"
                    : "long-green",
                  [g]: this.isWeixinSecured
                    ? "long-white-wx"
                    : this.hasRealKey
                    ? "short-green"
                    : "long-white",
                  [d]: "short-green",
                },
                { style: t } = this.guarantee;
              return e[t];
            },
            isYouzanmars() {
              if ("web" === r.default.getEnv()) {
                var e,
                  t,
                  a =
                    (null == (e = navigator) || null == (t = e.userAgent)
                      ? void 0
                      : t.toLowerCase()) || "";
                return /youzan_mars/i.test(a);
              }
              return !1;
            },
            hasRealKey() {
              var e;
              return !(
                null == (e = this.guarantee.desc) ||
                !e.find((e) => "quality_goods" === e.key)
              );
            },
            hasBeautyRightsKey() {
              var e;
              return !(
                null == (e = this.guarantee.desc) ||
                !e.find((e) => "beauty_rights" === e.key)
              );
            },
            hasEatRightsKey() {
              var e;
              return !(
                null == (e = this.guarantee.desc) ||
                !e.find((e) => "eat_rights" === e.key)
              );
            },
            realGuaranteeDesc() {
              return this.hasRealKey && this.guarantee.style !== d
                ? this.guarantee.desc
                    .filter((e) =>
                      (this.guarantee.style === h ? c : l).includes(e.key)
                    )
                    .map((e) => e.desc)
                : [];
            },
          },
          watch: {
            shopConfig(e) {
              this.isWeixinSecured =
                "weapp" === r.default.getEnv() &&
                "1" === e.weixinTransactionSecured;
            },
            guaranteeData: {
              immediate: !0,
              handler(e) {
                var t, a, s;
                e &&
                  ((this.guarantee = this.formatGuaranteeData(e)),
                  (this.guaranteeDesc = this.getGuaranteeDescList(
                    this.guarantee
                  )),
                  (this.tpKey = e.tpKey),
                  (this.tpVersion = e.tpVersion),
                  (this.featureKeys =
                    (null == (t = e.componentResponseList)
                      ? void 0
                      : t.filter((e) => !c.includes(e.key))) || []),
                  (this.ctx.data.yzGuarantee = e.yzSecured),
                  (this.ctx.data.guarantee = {
                    on: this.guarantee.on,
                    style: this.guarantee.style,
                  }),
                  this.ctx.event.emit("guaranteeSetupReady", {
                    yzGuarantee: e.yzSecured,
                    abConfig: this.abConfig,
                    hideYzGuarantee: e.hideYzGuarantee,
                    hasBeautyRights: !(
                      null == (a = this.guarantee.desc) ||
                      !a.find((e) => "beauty_rights" === e.key)
                    ),
                    hasEatRights: !(
                      null == (s = this.guarantee.desc) ||
                      !s.find((e) => "eat_rights" === e.key)
                    ),
                  }),
                  this.logView(e.yzSecured && this.abDisplay));
              },
            },
          },
          created() {
            Object(n.b)(this, ["guaranteeData", "snapShotInfo", "themeVars"]),
              Object(n.c)(
                this,
                ["goodsBaseInfo", "shopConfig", "shopBaseInfo", "buyerId"],
                {
                  callback: (e) => {
                    var {
                      goodsBaseInfo: t,
                      shopConfig: a,
                      shopBaseInfo: s,
                      buyerId: n,
                    } = e;
                    this.load({
                      goodsBaseInfo: t,
                      shopConfig: a,
                      shopBaseInfo: s,
                      buyerId: n,
                    });
                  },
                }
              ),
              this.load({
                goodsBaseInfo: this.goodsBaseInfo,
                shopConfig: this.shopConfig,
                shopBaseInfo: this.shopBaseInfo,
                buyerId: this.buyerId,
              });
          },
          methods: {
            load(e) {
              var {
                  goodsBaseInfo: t,
                  shopConfig: a,
                  shopBaseInfo: s,
                  buyerId: n,
                } = e,
                { alias: r, id: i } = t;
              r &&
                i &&
                this.getGuaranteeData({
                  alias: r,
                  itemId: i,
                  buyerId: n,
                  shopConfig: a,
                  kdtId: s.kdtId,
                })
                  .then((e) => {
                    this.guaranteeData = e;
                  })
                  .catch(() => {
                    (this.ctx.data.yzGuarantee = !1),
                      this.ctx.event.emit("guaranteeSetupReady", {
                        yzGuarantee: !1,
                        abConfig: null,
                        hideYzGuarantee: !1,
                        hasBeautyRights: !1,
                        hasEatRights: !1,
                      }),
                      this.logView(!1);
                  });
            },
            formatGuaranteeData: (e) =>
              e
                ? {
                    desc: e.componentResponseList || [],
                    on: e.yzSecured,
                    style: e.yzSecuredShowId || 0,
                    hideYzGuarantee: e.hideYzGuarantee,
                  }
                : { on: !1, desc: [] },
            getGuaranteeDescList(e) {
              if (
                !e.on ||
                (!e.hideYzGuarantee && (e.style === u || e.style === g))
              )
                return [];
              var t = this.hasRealKey
                ? (e.desc || []).filter((e) => !l.includes(e.key))
                : e.desc;
              return e.style === d
                ? t.map((e) => e.desc).slice(0, 3)
                : t.map((e) => e.desc);
            },
            logView(e) {
              this.ctx.logger &&
                this.ctx.logger.log({
                  et: "view",
                  ei: "enterpage_goods_detail",
                  en: "商详页_有赞担保曝光",
                  params: {
                    guarantee_on: e,
                    hide_guarantee: this.guarantee.hideYzGuarantee,
                    is_real_security: this.hasRealKey,
                    beauty_rights: this.hasBeautyRightsKey,
                    eat_rights: this.hasEatRightsKey,
                  },
                });
            },
            abtest() {},
            getGuaranteeData(e) {
              var t,
                {
                  alias: a,
                  itemId: n,
                  kdtId: r,
                  buyerId: i,
                  shopConfig: o,
                } = e;
              return this.guaranteeData
                ? Promise.resolve(this.guaranteeData)
                : ((t = {
                    alias: a,
                    pageSource: o.pageSource || "STANDARD",
                    yzSecuredShowId: o.showId || 0,
                    orderCreateTime: o.orderCreateTime || 0,
                    kdtId: r,
                    abtestId: i || 0,
                    orderNo: "",
                    itemId: n,
                  }),
                  Object(s.requestUseCdn)({
                    method: "GET",
                    path: "/wscassets/api/security/guarantee/fetchSecuredForItem2",
                    data: t,
                  }));
            },
            showGuaranteeIntro() {
              this.ctx.logger &&
                this.ctx.logger.log({
                  et: "click",
                  ei: "click_gurantee",
                  en: "点击有赞担保",
                  params: {
                    hide_guarantee: this.guarantee.hideYzGuarantee,
                    is_real_security: this.hasRealKey,
                    beauty_rights: this.hasBeautyRightsKey,
                    eat_rights: this.hasEatRightsKey,
                  },
                }),
                this.isYouzanmars
                  ? r.default.navigate({
                      url: "//h5.youzan.com/wscassets/security/guarantee",
                    })
                  : (this.showPopup = !0);
            },
            closePopup() {
              this.showPopup = !1;
            },
          },
        };
      t.default = r.default.component(y);
    },
  })
);
