"use strict";
var r = require("~/r");
r(
  "fslR",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      fslR: function (e, t, o) {
        o.r(t);
        var s = o("2xJD"),
          n = o("YehF"),
          a = o("KDJo"),
          d = o("US/N"),
          i = o("OK7I"),
          h = o.n(i),
          r = o("ONqW"),
          c = o("bR0K"),
          m = ["goods_recommend", "goods_recommend_goods"],
          g = { none: 0, pending: 1 },
          l = {
            name: "SoldOutRecommendBlock",
            props: {
              recommendBottom: { type: String, default: "0px" },
              opt: { type: Object, default: () => ({}) },
            },
            data: () => ({
              showContent: !1,
              recommendGoods: [],
              hasFetchData: !1,
            }),
            computed: {
              layoutStyle() {
                return "bottom: " + this.recommendBottom;
              },
              hasRecommendGoods() {
                return this.recommendGoods.length > 0;
              },
              noticeText() {
                var { showSoldOutButtonType: e = g.none } = this.opt;
                return [
                  "商品已抢完，暂时缺货",
                  "已抢空，但还有人未付款，待会儿来看看",
                ][e];
              },
              isSoldPending() {
                return +this.opt.showSoldOutButtonType === g.pending;
              },
            },
            watch: {
              "opt.show": {
                handler(e) {
                  e && this.checkShopConfig();
                },
                immediate: !0,
              },
            },
            created() {
              this.checkShopConfig();
            },
            methods: {
              toggleContent() {
                this.hasRecommendGoods &&
                  (this.showContent = !this.showContent);
              },
              getChannel() {
                return Object(s.a)(this.shopMetaInfo)
                  ? "edu"
                  : Object(n.a)(this.shopMetaInfo)
                  ? "retail"
                  : Object(a.a)(this.shopMetaInfo)
                  ? "chain"
                  : "wsc";
              },
              getScene() {
                return this.getChannel() + "_goods_detail";
              },
              checkShopConfig() {
                Object(d.default)({
                  path: "/wscstatcenter/cps/queryCpsConfig.json",
                  method: "GET",
                  data: { params: JSON.stringify({ configKeys: m }) },
                }).then((e) => {
                  var t = Object.values(e);
                  t.length && t.every((e) => "1" === e)
                    ? this.getRecommendGoods()
                    : (this.hasFetchData = !0);
                });
              },
              getRecommendGoods() {
                this.loading = !0;
                var {
                  multistoreId: e,
                  kdtId: t,
                  goodsId: o,
                  alias: s,
                } = this.opt;
                return Object(d.default)({
                  path: "/wscgoods/postRecommendGoods.json",
                  headers: { "content-type": "application/json" },
                  data: {
                    bizName: "goods_detail_lack",
                    goodsIds: [o],
                    alias: s,
                    kdtId: t,
                    storeId: e,
                    itemSize: 20,
                    scene: this.getScene(),
                    channel: this.getChannel(),
                  },
                  errorMsg: "获取推荐商品错误",
                  method: "POST",
                  withCredentials: !0,
                }).then((e) => {
                  var t = Object(c.a)(e),
                    o = [];
                  t.forEach((e, t) => {
                    var s =
                        Object(r.a)().getPageSpm() +
                        "~recService.1~" +
                        (t + 1) +
                        "~" +
                        h()(8),
                      { algs: n } = e,
                      a = {
                        alg: n,
                        banner_id: s,
                        g_kdt_id: e.kdtId,
                        item_id: e.id,
                        item_type: e.item_type || "goods",
                        recommend_name: "缺货推荐商品",
                      };
                    o.push(a), (e.loggerParams = a);
                  }),
                    Object(r.a)().log({
                      et: "view",
                      ei: "view",
                      en: "商品曝光",
                      params: { view_objs: o },
                    }),
                    (this.recommendGoods = [...t]),
                    (this.showContent = t.length > 0),
                    (this.hasFetchData = !0);
                });
              },
            },
            ud: !0,
          },
          p = o("9ZMt");
        t.default = p.default.component(l);
      },
    }
  )
);
