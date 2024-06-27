"use strict";
var r = require("~/r");
r(
  "J4eM",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      J4eM: function (e, t, i) {
        i.r(t);
        var a = i("Fcif"),
          s = i("R7Zb"),
          n = i("vkva"),
          o = i("bs6A"),
          r = i("0hwI"),
          l = {
            name: "DcShopRankingList",
            mixins: [Object(s.a)({ optDesc: n.a }), o.a],
            props: {
              offlineId: { type: Number, default: 0 },
              themeColors: { type: Object, default: () => ({}) },
            },
            data: () => ({
              active: 0,
              tabs: [],
              capLayoutOpt: {
                itemMargin: 10,
                layoutMargin: 15,
                type: "one",
                imgHeight: 116,
              },
              pid: Math.floor(1e3 * Math.random()),
            }),
            logicData: () => ({ openTab: [] }),
            computed: {
              componentStyle() {
                var e = this.themeColors || {},
                  t = e && e.general ? e.general : "#EE0A24";
                return (
                  "margin: 0 " +
                  this.opt.pagePadding +
                  "px;--tab-line-color: " +
                  t
                );
              },
            },
            mounted() {
              this.getList();
            },
            methods: {
              onPullDownRefresh() {
                this.getList();
              },
              getList() {
                r.a
                  .get({
                    url: "/wscdeco/shop-ranking-list.json",
                    data: { format: "tee", type: "all" },
                  })
                  .then((e) => {
                    var t = Array.isArray(e) ? e : [];
                    if (
                      ((this.tabs = t.map((e) => ({
                        title: e.title,
                        type: e.type,
                        hasMore: e.list.length > 3,
                        goodsList: e.list.slice(0, 3),
                      }))),
                      this.$refs.vanTabs &&
                        setTimeout((e) => {
                          (this.active = 0), this.$refs.vanTabs.resize();
                        }, 100),
                      0 !== this.tabs.length)
                    ) {
                      var i = this.tabs[0].type;
                      this.openTab.push(i),
                        this.viewLogger(i),
                        this.goodsViewLogger(this.tabs[0].goodsList);
                    }
                  });
              },
              handleTabChange(e) {
                this.active = e.index;
                var { type: t, goodsList: i } = this.tabs[this.active];
                this.hanldClick(),
                  -1 === this.openTab.indexOf(t) &&
                    (this.openTab.push(t),
                    this.viewLogger(t),
                    this.goodsViewLogger(i));
              },
              handleClickMore(e) {
                var t = Object(a.a)({}, this.opt, { tabType: e.type });
                this.$emit("click-more", t);
              },
              hanldClick() {
                var { type: e } = this.tabs[this.active];
                this.$emit("click-content", { tabType: e });
              },
              handleItemClick(e) {
                var t,
                  i = Object(a.a)({}, e, {
                    link: Object(a.a)({}, e.link || {}, {
                      query: Object(a.a)(
                        {},
                        (null == (t = e.link) ? void 0 : t.query) || {},
                        e.link || {}
                      ),
                    }),
                  });
                this.$emit("item-click", i),
                  this.hanldClick(),
                  this.clickLogger(e);
              },
              viewLogger(e) {
                this.sendComponentLogger("logger", {
                  et: "view",
                  ei: "tab_view",
                  en: "内容曝光",
                  params: {
                    banner_id: this.getBannerId(),
                    ranking_type: e,
                    component: "shop_ranking_list",
                  },
                });
              },
              clickLogger(e) {
                var { type: t } = this.tabs[this.active];
                this.sendComponentLogger("logger", {
                  et: "click",
                  ei: "click_goods",
                  en: "点击商品",
                  params: {
                    banner_id: this.getBannerId(),
                    goods_id: e.id,
                    ranking_type: t,
                    component: "shop_ranking_list",
                  },
                });
              },
              goodsViewLogger(e) {
                var t = e.map((e) => {
                  var t,
                    i,
                    a = null == e || null == (t = e.actionOpt) ? void 0 : t.id,
                    { alg: s } =
                      null == e || null == (i = e.actionOpt) ? void 0 : i.link;
                  return {
                    alg: s,
                    goods_id: String(a),
                    item_id: String(a),
                    item_type: "goods",
                    banner_id: this.getBannerId(),
                    component: "shop_ranking_list",
                    ranking_type: this.tabs[this.active].type,
                    recommend_name: "店铺榜单组件",
                  };
                });
                this.sendComponentLogger("logger", {
                  et: "view",
                  ei: "view",
                  en: "商品曝光",
                  params: { view_objs: t },
                });
              },
            },
            ud: !0,
          },
          g = i("9ZMt");
        t.default = g.default.component(l);
      },
    }
  )
);
