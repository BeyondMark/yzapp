"use strict";
var r = require("~/r");
r(
  "/Dpu",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "/Dpu": function (e, t, s) {
        s.r(t);
        var a = s("Fcif"),
          i = s("9ZMt"),
          r = s("Vg0o"),
          o = s("OK7I"),
          m = s.n(o),
          d = s("NHEX"),
          n = s.n(d),
          u = s("oWYj"),
          h = s("dXlM"),
          c = {
            name: "goods-recommend",
            props: {
              bizName: String,
              show: { type: Boolean, default: !1 },
              kdtId: { type: Number, default: 0 },
              buyerId: { type: Number, default: 0 },
              offlineId: { type: Number, default: 0 },
              loggerSpm: { type: String, default: ".0" },
              loggerParams: { type: Object, default: () => ({}) },
              goodsNumber: { type: Number, default: 6 },
              maxGoodsNumber: { type: Number, default: 20 },
              layoutConfig: { type: Object, default: () => ({}) },
              callbackConfig: { type: Object, default: () => ({}) },
              titleConfig: { type: Object, default: () => ({}) },
              pageRandomNumber: { type: String, default: m()(8) },
              componentIndex: { type: Number, default: 0 },
              customRecommendName: { type: String, default: "个性化推荐" },
              extraParams: { type: Object, default: () => ({}) },
              showCornerMark: { type: Boolean, default: !1 },
            },
            data() {
              return {
                ajaxing: !1,
                recommendList: [],
                curTitleConfig: {},
                showTitle: !1,
                loadingMore: !1,
                page: 1,
                hasMore: !0,
                recommendName: this.customRecommendName,
                showMoreBtn: !1,
                listLoaded: !1,
              };
            },
            computed: {
              finished() {
                return (
                  !this.hasMore ||
                  !(this.maxGoodsNumber > 0) ||
                  this.recommendList.length >= this.maxGoodsNumber
                );
              },
              formatRecommendList() {
                return Object(h.b)(this.recommendList);
              },
              uuid() {
                return n()(this.loggerParams, "user.uuid", "");
              },
            },
            mounted() {
              this.fetchList();
            },
            methods: {
              jumpPage() {
                this.$emit("jump-page", { bizName: this.bizName });
              },
              getFetchExtraParams() {
                var e = Object(a.a)(
                    {
                      storeId: this.offlineId,
                      extraRecs: [],
                      isMini: "web" !== i.default.getEnv(),
                    },
                    this.extraParams
                  ),
                  { storeId: t, extraRecs: s, isMini: r, goodsId: o } = e;
                return { storeId: t, extraRecs: s, isMini: r, goodsId: o };
              },
              fetchList(e) {
                return Object(u.a)({
                  kdtId: this.kdtId,
                  buyerId: this.buyerId,
                  pageNum: e || 1,
                  pageSize: this.goodsNumber,
                  bizName: this.bizName,
                  extraParams: this.getFetchExtraParams(),
                  uuid: this.uuid,
                })
                  .then((t) => {
                    var { list: s = [], hasMore: i } = t;
                    this.hasMore = i;
                    var o = Object(h.a)({
                        list: Object(r.mapKeysToCamelCase)(s),
                        curLength: this.recommendList.length,
                        bannerOpt: {
                          loggerSpm: this.loggerSpm,
                          componentIndex: this.componentIndex,
                          pageRandomNumber: this.pageRandomNumber,
                        },
                        recommendName: this.recommendName,
                      }),
                      m = [...this.recommendList, ...o]
                        .slice(0, this.maxGoodsNumber)
                        .map((e, t) => Object(a.a)({}, e, { index: t }));
                    setTimeout(() => {
                      this.listLoaded = !0;
                    }, 200),
                      (this.showMoreBtn = i && m.length >= this.goodsNumber),
                      (e || 1 === this.page) &&
                        this.$emit("render-success", {
                          hasMore: i,
                          recommendList: m,
                        }),
                      (this.recommendList = m);
                  })
                  .catch(() => {
                    this.$emit("load-failed");
                  });
              },
              loadMore() {
                var e = this.page + 1;
                (this.loadingMore = !0),
                  this.fetchList(e).then(() => {
                    (this.loadingMore = !1), (this.page = e);
                  });
              },
              handleItemClick(e) {
                this.$emit("item-click", e);
              },
            },
          };
        t.default = i.default.component(c);
      },
    }
  )
);
