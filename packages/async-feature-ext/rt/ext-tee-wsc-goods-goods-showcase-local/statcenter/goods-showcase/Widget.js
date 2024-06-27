"use strict";
var r = require("~/r");
r(
  "zTyA",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      zTyA: function (e, t, s) {
        s.r(t);
        var o = s("Fcif"),
          a = s("9ZMt"),
          i = s("Tewj"),
          r = s("07Mu"),
          h = s("CYhF"),
          n = s("luHS"),
          d = {
            name: "goods-showcase",
            props: {
              hasGoodsShowcase: Boolean,
              themeVars: String,
              kdtId: Number,
              buyerId: Number,
              offlineId: Number,
              shopMetaInfo: Object,
              route: String,
              loggerObj: Object,
              routeKey: String,
              goodsShocase: String,
            },
            data() {
              return {
                show: !1,
                showComp: !1,
                showcaseListMap: {},
                showcaseItemList: Object(n.a)({
                  showcaseItemList: h.SHOWCASE_ITEM_LIST,
                  kdtId: this.kdtId,
                  oid: this.offlineId,
                }),
              };
            },
            computed: {
              isEmpty() {
                return (
                  Object.keys(this.showcaseListMap).length ===
                    this.showcaseItemList.length &&
                  Object.values(this.showcaseListMap).every(
                    (e) => Array.isArray(e) && 0 === e.length
                  )
                );
              },
              customStyle() {
                return (
                  "background-color: #f7f8fa;" +
                  this.themeVars +
                  this.goodsShocase
                );
              },
              loggerData() {
                var { logger: e = () => ({}) } = this.loggerObj;
                return {
                  loggerSpm: e.getPageSpm(),
                  loggerParams: e.getLogParams(),
                };
              },
            },
            watch: {
              shopMetaInfo(e) {
                e && this.fetchGoodsShowcaseIcon();
              },
              routeKey: {
                handler(e) {
                  var t = this;
                  e &&
                    i.default.on(
                      "popupContainer:goods:showcase" + e,
                      function (e) {
                        void 0 === e && (e = !0),
                          (t.show = e),
                          e && (t.showComp = !0);
                      }
                    );
                },
                immediate: !0,
              },
              showcaseListMap(e) {
                if (Object.keys(e).length === this.showcaseItemList.length) {
                  var t = Object.keys(e).reduce(
                    (t, s) => [...t, ...e[s].map((e) => e.loggerParams)],
                    []
                  );
                  this.$emit("log", {
                    et: "view",
                    ei: "view",
                    en: "商品曝光",
                    params: { view_objs: t },
                  });
                }
              },
            },
            created() {},
            destroyed() {
              i.default.off("popupContainer:goods:showcase" + this.routeKey);
            },
            methods: {
              close() {
                this.show = !1;
              },
              handleLoaded(e) {
                var { bizName: t, recommendList: s } = e;
                this.showcaseListMap = Object(o.a)({}, this.showcaseListMap, {
                  [t]: s || [],
                });
              },
              handleItemClick(e) {
                var {
                    alias: t,
                    loggerParams: s,
                    imageUrl: o,
                    title: a = "",
                    width: i,
                    height: r,
                    menberPrice: h = 0,
                  } = e,
                  { banner_id: n, alg: d } = s;
                (s.goods_name = a),
                  (s.menberPrice = h),
                  this.$emit("log", {
                    et: "click",
                    ei: "open_goods",
                    en: "打开商品详情",
                    params: s,
                  }),
                  this.$emit("dmc-jump", {
                    type: "navigate",
                    page: "GoodsDetail",
                    options: { alias: t, banner_id: n, alg: d },
                    extra: {
                      bizParams: {
                        pageType: "GoodsDetail",
                        alias: t,
                        image: { url: o, width: i, height: r },
                        title: a,
                      },
                    },
                  });
              },
              fetchGoodsShowcaseIcon() {
                var e = Object(n.b)(
                  "web" === a.default.getEnv()
                    ? h.URL_PATTERN_MAP_WEB
                    : h.URL_PATTERN_MAP_MINI,
                  this.route
                );
                if (!(h.HAS_GOODS_SHOWCASE_PAGE_TYPES.indexOf(e) > -1))
                  return !1;
                Object(r.a)({ kdtId: this.kdtId, pageType: e }).then((e) => {
                  var { iconData: t } = e || {};
                  t && this.$emit("open-float-goods", { open: !0 });
                });
              },
            },
          };
        t.default = a.default.component(d);
      },
    }
  )
);
