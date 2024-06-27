"use strict";
var r = require("~/r");
r(
  "/llc",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      "/llc": function (e, t, s) {
        s.r(t);
        var a = s("Fcif"),
          o = s("9ZMt"),
          i = s("YeA1"),
          h = s("cZBx"),
          r = s("UC9k"),
          c = s("jS8r"),
          d = {
            name: "GoodsShowcase",
            data() {
              return {
                hasGoodsShowcase: !1,
                themeVars: "",
                kdtId: 0,
                buyerId: 0,
                offlineId: 0,
                shopMetaInfo: {},
                loggerSpm: this.ctx.logger.getPageSpm(),
                loggerParams: this.ctx.logger.getLogParams(),
                show: !1,
                showComp: !1,
                showcaseListMap: {},
                showcaseItemList: Object(c.a)({
                  showcaseItemList: r.SHOWCASE_ITEM_LIST,
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
                return "background-color: #f7f8fa;" + this.themeVars;
              },
            },
            watch: {
              shopMetaInfo(e) {
                e && this.fetchGoodsShowcaseIcon();
              },
              showcaseListMap(e) {
                if (Object.keys(e).length === this.showcaseItemList.length) {
                  var t = Object.keys(e).reduce(
                    (t, s) => [...t, ...e[s].map((e) => e.loggerParams)],
                    []
                  );
                  this.ctx.logger.log({
                    et: "view",
                    ei: "view",
                    en: "商品曝光",
                    params: { view_objs: t },
                  });
                }
              },
            },
            created() {
              var e = this;
              Object(i.b)(this, [
                "themeVars",
                "kdtId",
                "buyerId",
                "offlineId",
                "shopMetaInfo",
                "hasGoodsShowcase",
              ]),
                this.ctx.event.listen("goods:showcase", function (t) {
                  void 0 === t && (t = !0),
                    (e.show = t),
                    t && (e.showComp = !0);
                });
            },
            methods: {
              close() {
                this.show = !1;
              },
              handleLoaded(e) {
                var { bizName: t, recommendList: s } = e;
                this.showcaseListMap = Object(a.a)({}, this.showcaseListMap, {
                  [t]: s || [],
                });
              },
              handleItemClick(e) {
                var {
                    alias: t,
                    loggerParams: s,
                    imageUrl: a,
                    title: o,
                    width: i,
                    height: h,
                    menberPrice: r,
                  } = e,
                  { banner_id: c, alg: d } = s;
                Object.assign(s, { goods_name: o || "", menberPrice: r || 0 }),
                  this.ctx.logger.log({
                    et: "click",
                    ei: "open_goods",
                    en: "打开商品详情",
                    params: s,
                  }),
                  this.ctx.dmc.navigate(
                    "GoodsDetail",
                    { alias: t, banner_id: c, alg: d },
                    {
                      bizParams: {
                        pageType: "GoodsDetail",
                        alias: t,
                        image: { url: a, width: i, height: h },
                        title: o,
                      },
                    }
                  );
              },
              fetchGoodsShowcaseIcon() {
                var e = Object(c.b)(
                  "web" === o.default.getEnv()
                    ? r.URL_PATTERN_MAP_WEB
                    : r.URL_PATTERN_MAP_MINI,
                  this.ctx.env.route
                );
                if (!(r.HAS_GOODS_SHOWCASE_PAGE_TYPES.indexOf(e) > -1))
                  return !1;
                Object(h.a)({ kdtId: this.kdtId, pageType: e }).then((e) => {
                  var { iconData: t } = e || {};
                  t && (this.ctx.data.openFloatGoods = !0);
                });
              },
            },
          };
        t.default = o.default.component(d);
      },
    }
  )
);
