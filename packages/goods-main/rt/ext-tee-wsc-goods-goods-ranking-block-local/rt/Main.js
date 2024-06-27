"use strict";
var r = require("~/r");
r(
  "kYZp",
  Object.assign({}, require("~/v.js").modules, {
    kYZp: function (o, n, s) {
      s.r(n);
      var i = s("YeA1"),
        e = s("KDJo"),
        t = s("2xJD"),
        d = {
          name: "goods-ranking",
          props: { cloudConfig: { type: Object, default: () => ({}) } },
          data: () => ({
            kdtId: 0,
            offlineId: 0,
            goodsExtendInfo: {},
            shopConfig: {},
            shopMetaInfo: {},
            rankingIconUrl:
              "https://b.yzcdn.cn/public_files/1f015e822f082da52bb6516abfedc9ea.png",
          }),
          computed: {
            ranking() {
              var o;
              return (
                (null == (o = this.goodsExtendInfo.HOT_RECOMMEND)
                  ? void 0
                  : o.ranking) || 0
              );
            },
            isSimplifiedWsc() {
              return this.shopConfig.isSimplifiedWsc || !1;
            },
            showPersonalRecommendGoods() {
              return this.shopConfig.showPersonalRecommendGoods || !1;
            },
            showGoodsRanking() {
              var o =
                Object(e.e)(this.shopMetaInfo) ||
                Object(t.d)(this.shopMetaInfo);
              return (
                !this.hideGoodsRanking() &&
                !!Number(this.showPersonalRecommendGoods) &&
                this.ranking > 0 &&
                this.ranking <= 20 &&
                o &&
                !Number(this.isSimplifiedWsc)
              );
            },
          },
          watch: {
            ranking(o) {
              this.ctx.data.ranking = o;
            },
            showGoodsRanking(o) {
              this.ctx.data.showGoodsRanking = o;
            },
          },
          created() {
            Object(i.b)(this, [
              "kdtId",
              "offlineId",
              "goodsExtendInfo",
              "shopConfig",
              "shopMetaInfo",
            ]);
          },
          methods: {
            jumpPage() {
              this.ctx.dmc.navigate("GoodsShowcaseRanking", {
                kdtId: this.kdtId,
                oid: this.offlineId,
              });
            },
            hideGoodsRanking: () => !1,
          },
          ud: !0,
        },
        a = s("9ZMt");
      n.default = a.default.component(d);
    },
  })
);
