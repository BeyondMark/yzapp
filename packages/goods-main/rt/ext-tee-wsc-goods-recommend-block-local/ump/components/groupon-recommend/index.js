"use strict";
var r = require("~/r");
r(
  "DQ5p",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      DQ5p: function (e, t, o) {
        o.r(t);
        var a = o("US/N"),
          i = o("iTEc"),
          s = o("YeA1"),
          d = {
            name: "recommend-goods",
            props: {
              goodsBaseInfo: Object,
              currentActivity: Object,
              kdtId: Number,
            },
            data: () => ({
              isFastBuy: !1,
              appConfig: {},
              layoutConfig: { type: "two", layoutMargin: 16, itemMargin: 8 },
              more: { url: "", text: "进店逛逛", title: "更多精选商品" },
              page: 1,
              hasBarBlock: !1,
              loading: !1,
              finished: !1,
              recommendGoods: [],
            }),
            computed: {
              hasRecommend() {
                return this.recommendGoods.length > 0;
              },
            },
            created() {
              this.getRecommendGoods();
            },
            methods: {
              getRecommendGoods() {
                return (
                  (this.loading = !0),
                  Object(a.default)({
                    path: "/wscshop/goods-api/recommend-groupon-goods.json",
                    data: {
                      bizName: "goods_detail",
                      goodsId: this.goodsBaseInfo.id,
                      alias: this.goodsBaseInfo.alias,
                      itemSize: 10,
                      pageSize: 10,
                    },
                    errorMsg: "获取拼团推荐商品错误",
                    withCredentials: !0,
                  })
                    .then((e) => {
                      var t = Object(i.a)(e);
                      this.getRecommendGoodsSuccess(t);
                    })
                    .catch(() => {
                      this.loading = !1;
                    })
                );
              },
              getRecommendGoodsSuccess(e) {
                (this.recommendGoods = [...this.recommendGoods, ...e]),
                  (this.page = ++this.page),
                  (this.loading = !1),
                  (this.finished = 0 === e.length);
              },
              handleItemClick(e) {
                var t,
                  { alias: o, bannerId: a, loggerParams: i } = e;
                null == (t = Object(s.a)()) ||
                  t.dmc.navigate("GoodsDetail", {
                    alias: o,
                    banner_id: a,
                    alg: i.alg,
                  });
              },
              goToPage() {
                var e,
                  { activityType: t } = this.currentActivity.activityInfo;
                null == (e = Object(s.a)()) ||
                  e.dmc.navigate("GrouponList", {
                    kdtId: this.kdtId,
                    activityType: t,
                  });
              },
            },
            ud: !0,
          },
          n = o("9ZMt");
        t.default = n.default.component(d);
      },
    }
  )
);
