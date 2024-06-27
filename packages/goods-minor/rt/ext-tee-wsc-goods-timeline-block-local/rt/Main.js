"use strict";
var r = require("~/r");
r(
  "g3ip",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      g3ip: function (s, o, t) {
        t.r(o);
        var e = t("Fcif"),
          i = t("+I+c"),
          a = t("US/N"),
          r = t("KEq0"),
          h = t.n(r),
          n = t("Nvad"),
          p = t("ovI7"),
          d = t("D77s"),
          c = t("/rCb"),
          l = ["url"],
          u = {
            data: () => ({
              title: "",
              price: "",
              originPrice: "",
              postageText: "",
              goodsBaseInfo: {},
              shopInfo: {},
              shopConfig: {},
              imageList: [],
            }),
            computed: {
              existsTags() {
                return (
                  this.showOldShopBadge ||
                  this.shopBrandTag ||
                  this.shopOfficialTag
                );
              },
              showOldShopBadge() {
                var {
                  shopOperateDurationTagSwitch: s = 0,
                  shopOperateDurationYears: o = 0,
                } = this.shopConfig;
                return o > 0 && 1 == +s;
              },
              shopBrandTag() {
                var { brandCertType: s = 0 } = this.shopConfig,
                  {
                    FLAGSHIP: o,
                    EXCLUSIVE: t,
                    BOUTIQUE: e,
                    SHOPPING: i,
                    CHAIN: a,
                  } = c.a;
                return -1 !== [o, t, e, i, a].indexOf(s);
              },
              shopOfficialTag() {
                var { principalCertType: s = 0 } = this.shopConfig;
                return 2 === s || 5 === s;
              },
              goodsStockOpt() {
                var {
                    goodsBaseInfo: s,
                    shopConfig: o = {},
                    postageText: t = "",
                  } = this,
                  { soldNum: e, isOutlink: i } = s,
                  a = Object(d.b)({ shopConfig: o, soldNum: e });
                return {
                  soldNum: e,
                  isOutlink: i,
                  showSoldNum: a,
                  showBlock: !(i || (!t && !a)),
                  soldNumText: Object(d.a)(e),
                };
              },
            },
            created() {
              var s = this;
              this.ctx.env.getQueryAsync().then(function (o) {
                void 0 === o && (o = {});
                var { alias: t, goodsAlias: e } = o;
                s.init(t || e);
              });
            },
            methods: {
              init(s) {
                Object(a.default)({
                  path: "/wscgoods/weapp/detail.json",
                  data: { alias: s, withSeckillError: !0 },
                })
                  .then((s) => {
                    this.processGoodsData(s);
                  })
                  .catch(() => {});
              },
              processGoodsData(s) {
                var o, t;
                void 0 === s && (s = {});
                var { goodsData: a = {} } = s,
                  {
                    goods: r = {},
                    skuInfo: d,
                    shop: c = {},
                    shopConfig: u = {},
                  } = a,
                  { pictures: g = [], title: f } = r,
                  O = Object(p.a)(d),
                  { showPrice: v } = Object(n.a)(O);
                (this.title = f),
                  (this.shopInfo = c),
                  (this.price = v),
                  (this.goodsBaseInfo = r),
                  (this.shopConfig = u),
                  (this.postageText =
                    (null == a ||
                    null == (o = a.delivery) ||
                    null == (t = o.postage)
                      ? void 0
                      : t.desc) || ""),
                  (this.imageList = g.map((s) => {
                    var { url: o } = s,
                      t = Object(i.a)(s, l);
                    return Object(e.a)({}, t, { url: h()(o, "!750x0.jpg") });
                  }));
              },
            },
            ud: !0,
          },
          g = t("9ZMt");
        o.default = g.default.component(u);
      },
    }
  )
);
