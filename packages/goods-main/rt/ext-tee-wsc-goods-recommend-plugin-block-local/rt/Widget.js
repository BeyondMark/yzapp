"use strict";
var r = require("~/r");
r(
  "r3/3",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "r3/3": function (e, t, i) {
        i.r(t);
        var o = i("Fcif"),
          s = i("9ZMt"),
          n = i("YeA1"),
          a = i("US/N"),
          r = i("OK7I"),
          l = i.n(r),
          d = i("V4HK"),
          c = i("fChk"),
          h = i("ONqW"),
          g = i("Ix7h"),
          m = i("Tewj"),
          p = {},
          u = {
            name: "recommend-plugin-block",
            data: () => ({
              themeVars: "",
              multistore: {},
              shopConfig: {},
              shopBaseInfo: {},
              goodsBaseInfo: {},
              goodsPriceInfo: {},
              current: 0,
              swipeDataList: [],
              layoutConfig: { type: "three", layoutMargin: 16, itemMargin: 8 },
              pageRandomNumber: l()(8),
              currentActivity: {},
              slide: 0,
              flag: !1,
              time: null,
              element: null,
              oneTimeStatus: !0,
              top: 0,
              scrollTop: 0,
              onScrollFn: () => {},
            }),
            computed: {
              swipeHeight() {
                return this.swipeDataList[0]
                  ? "calc(((100vw - 32px) / 3 + 110px) * " +
                      Math.ceil(this.swipeDataList[0].length / 3) +
                      ")"
                  : "initial";
              },
              showOriginPrice() {
                var { origin: e } = this.goodsBaseInfo,
                  { price: t, oldPrice: i } = this.goodsPriceInfo;
                if (i && i !== t) return { label: "价格", price: "￥" + i };
                var o = e || "";
                return /^\s*\d+(\.\d{1,2})?\s*$/.test(o)
                  ? { label: "价格", price: "￥" + o.trim() }
                  : { label: "", price: o };
              },
              enableGetRecommends() {
                return (
                  this.shopConfig.openRecommendForYou &&
                  this.shopBaseInfo.kdtId &&
                  this.goodsBaseInfo.id
                );
              },
              toastDistance: () =>
                "\n          bottom: " +
                ("weapp" === s.default.getEnv() ? 100 : 60) +
                "px;\n        ",
            },
            watch: {
              enableGetRecommends(e) {
                e && this.fetchList();
              },
              currentActivity(e) {
                3 === e.buttonType && this.shareHurriedPoints(e.buttonType);
              },
            },
            created() {
              Object(n.b)(this, [
                "themeVars",
                "multistore",
                "shopBaseInfo",
                "shopConfig",
                "goodsBaseInfo",
                "goodsPriceInfo",
                "currentActivity",
              ]);
            },
            mounted() {
              setTimeout(() => {
                this.slide <= 2 && this.getRecommendTop("init");
              }, 8e3),
                (this.onScrollFn = Object(g.a)(this.handleScroll, 200)),
                m.default.on("onPageScroll", this.onScrollFn, this);
            },
            destroyed() {
              clearTimeout(this.time),
                m.default.off("onPageScroll", this.onScrollFn);
            },
            methods: {
              fetchList() {
                Object(a.default)({
                  path: "/wscgoods/postRecommendResult.json",
                  data: {
                    pageSize: 24,
                    pageNum: 1,
                    storeId: this.multistore.id,
                    kdtId: this.shopBaseInfo.kdtId,
                    goodsIds: [this.goodsBaseInfo.id],
                    scene: "wsc~g~associate",
                  },
                  method: "POST",
                  withCredentials: !0,
                }).then((e) => {
                  var { list: t = [] } = e || {},
                    i = Object(d.a)(t),
                    s = [],
                    n = [],
                    a = i.length;
                  a < 6 && (i = i.splice(0, 3)),
                    a % 6 && a > 6 && (i = i.splice(0, a - (a % 6)));
                  for (var r = 0; r < i.length; r++)
                    n.push(Object(o.a)({ goodsIndex: r }, i[r])),
                      (r + 1) % 6 == 0 && (s.push(n), (n = []));
                  n.length > 0 && s.push(n),
                    (this.swipeDataList = s),
                    this.$nextTick(() => {
                      this.swipeLogger(0);
                    });
                });
              },
              swipeLogger(e) {
                if ((void 0 === e && (e = 0), this.swipeDataList[e] && !p[e])) {
                  p[e] = !0;
                  var t = [];
                  this.swipeDataList[e].forEach((e) => {
                    var i = this.getBannerId(e.goodsIndex + 1),
                      { algs: o } = e,
                      s = {
                        item_id: e.id,
                        goods_id: e.id,
                        item_type: e.item_type || "goods",
                        banner_id: i,
                        alg: o,
                        recommend_name: "为你推荐",
                        component: "goods_asso",
                        component_id: "goods" + e.goodsIndex,
                      };
                    t.push(s);
                  }),
                    this.ctx.logger.log({
                      et: "view",
                      ei: "view",
                      en: "商品曝光",
                      params: { view_objs: t },
                    });
                }
              },
              getBannerId(e) {
                return (
                  this.ctx.logger.getPageSpm() +
                  "~goods_asso~" +
                  e +
                  "~" +
                  this.pageRandomNumber
                );
              },
              handleItemClick(e) {
                var t = this.getBannerId(e.goodsIndex + 1),
                  {
                    algs: i,
                    goodsIndex: o,
                    id: s,
                    alias: n,
                    imageUrl: a,
                    title: r = "",
                    width: l,
                    height: d,
                    menberPrice: c = 0,
                  } = e;
                this.ctx.logger.log({
                  et: "click",
                  ei: "open_goods",
                  en: "打开商品详情",
                  params: {
                    alg: i,
                    banner_id: t,
                    goods_id: s,
                    item_id: s,
                    item_type: "goods",
                    recommend_name: "为你推荐",
                    component: "goods_asso",
                    component_id: "goods" + o,
                    goods_name: r,
                    menberPrice: c,
                  },
                }),
                  this.ctx.dmc.navigate(
                    "GoodsDetail",
                    { alias: n, alg: i, banner_id: t },
                    {
                      bizParams: {
                        pageType: "GoodsDetail",
                        alias: n,
                        image: { url: a, width: l, height: d },
                        title: r,
                      },
                    }
                  );
              },
              jumpLink() {
                this.ctx.dmc.navigate("GoodsRecommendList", {
                  kdtId: this.shopBaseInfo.kdtId,
                  goodsId: this.goodsBaseInfo.id,
                  alias: this.goodsBaseInfo.alias,
                  title: this.goodsBaseInfo.title,
                  offlineId: this.multistore.id,
                  picture:
                    this.goodsBaseInfo.pictures &&
                    this.goodsBaseInfo.pictures[0].url,
                  price: this.goodsPriceInfo.price,
                  originPrice: this.showOriginPrice.price,
                  originLable: this.showOriginPrice.label,
                });
              },
              handleSwipeChange(e) {
                var { current: t } = e.detail;
                (this.current = t), this.swipeLogger(t);
              },
              shareHurriedPoints(e) {
                3 === e &&
                  Object(h.a)().log({
                    et: "view",
                    ei: "enterpage_groupon",
                    en: "多人拼团分享页曝光",
                  });
              },
              handleScroll(e) {
                var { scrollTop: t } = e;
                (this.scrollTop = t),
                  (this.slide += 1),
                  clearTimeout(this.time),
                  (this.flag = !1),
                  this.oneTimeStatus &&
                    (this.time = setTimeout(() => {
                      this.slide > 2 && this.getRecommendTop("scroll");
                    }, 8e3));
              },
              recommendClick(e) {
                Object(c.a)({ scrollTop: e, duration: 0 }),
                  Object(h.a)().log({
                    et: "click",
                    ei: "click_toast",
                    en: "防丢失toast点击",
                  });
              },
              isShow() {
                var e, t;
                this.oneTimeStatus &&
                  this.element &&
                  3 ===
                    (null == (e = this.ctx.data) ||
                    null == (t = e.currentActivity)
                      ? void 0
                      : t.buttonType) &&
                  this.showToast();
              },
              getRecommendTop(e) {
                return this.createSelectorQuery()
                  .select(".recommend-plugin-block")
                  .boundingClientRect()
                  .exec((t) => {
                    var i = t[0] ? t[0].top : 0;
                    (this.element = !!t[0]),
                      (this.top = i),
                      "scroll" === e &&
                        ((this.top = this.scrollTop + this.top), this.isShow()),
                      "init" === e && this.isShow();
                  });
              },
              showToast() {
                (this.flag = !0),
                  (this.oneTimeStatus = !1),
                  Object(h.a)().log({
                    et: "view",
                    ei: "enterpage_toast",
                    en: "防丢失toast曝光",
                  });
              },
            },
            ud: !0,
          };
        t.default = s.default.component(u);
      },
    }
  )
);
