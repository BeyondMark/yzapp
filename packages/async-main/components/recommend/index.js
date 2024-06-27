"use strict";
var r = require("~/r");
r(
  "aY+m",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "aY+m": function (e, t, a) {
      a.r(t);
      var i = a("Fcif"),
        o = a("taYb"),
        s = a("2wjL"),
        r = a("8B9M"),
        n = a("tqDJ"),
        d = a("GFa9"),
        l = a("OPDa"),
        h = a("XCh3"),
        m = a("jA1y"),
        c = {
          coupon: (e, t) => ((t.item_id = e.activityId), t),
          note: (e, t) => ((t.item_id = e.noteId), t),
        },
        u = {
          layout: 1,
          size_type: 0,
          border_radius_type: 2,
          image_ratio: 1,
          image_fill_style: 1,
          text_style_type: 1,
          text_align_type: "left",
          page_margin: 16,
          goods_margin: 8,
          show_title: !0,
          show_sub_title: !1,
          show_price: !0,
          show_origin_price: !1,
          show_buy_button: !1,
          show_corner_mark: !1,
          corner_mark_type: 0,
        },
        g = a("Xq7Z"),
        p = { hot_sale: "销量榜", popular: "人气榜", new_arrival: "新品榜" },
        y = a("1Uvd"),
        v = Object(r.a)();
      Component({
        behaviors: [],
        options: { multipleSlots: !0 },
        properties: {
          bizName: String,
          goodsNumber: Number,
          layoutConfig: {
            type: Object,
            value: {},
            observer(e) {
              e && this.setData({ curLayoutConfig: o.a.toCamelCase(e) });
            },
          },
          titleConfig: { type: Object, value: {} },
          pageRandomNumber: { type: String, value: Object(y.a)(8) },
          componentIndex: { type: Number, value: 0 },
          customRecommendName: { type: String, value: "" },
          hasCustomClickHandler: { type: Boolean, value: !1 },
          handleGoodsItemClick: { type: Function },
          handleGoodsBuy: { type: Function },
          showLastSelfDefineItem: { type: Boolean, value: !1 },
          page: { type: Number, value: 1 },
          loadMore: { type: Boolean, value: !1 },
          handleLoadMore: { type: Function },
        },
        data: {
          heightStyle: "",
          isLoading: !1,
          recommendList: [],
          curLayoutConfig: {},
          curTitleConfig: {},
          showTitle: !1,
          recommendName: "个性化推荐",
          themeClass: v.themeClass,
        },
        attached() {
          this.initTitle(), this.initList();
        },
        ready() {
          var { sizeType: e, layout: t } = this.data.curLayoutConfig;
          if (+t === g.f.SMALL && +e !== g.j.WATERFALL)
            return this.createSelectorQuery()
              .select(".recommend-list >>> .c-goods-recommend >>> .goods-item")
              .boundingClientRect((e) => {
                e && e.height > 0
                  ? this.setData({
                      heightStyle:
                        "overflow: hidden;height: " +
                        Math.ceil(Number(e.height)) +
                        "px;",
                    })
                  : this.setData({ heightStyle: "height: auto;" });
              })
              .exec();
          this.setData({ heightStyle: "height: auto;" });
        },
        methods: {
          initTitle() {
            var e = o.a.toCamelCase(this.data.titleConfig || {}),
              { customRecommendName: t } = this.data,
              { recommendName: a } = this.data,
              i = {
                title: e.title,
                show_method: e.showMethod,
                sub_title: e.subTitle,
                backgroundColor: e.backgroundColor,
              };
            t ? (a = t) : e.title && e.showTitleComponent && (a = e.title),
              this.setData({
                recommendName: a,
                curTitleConfig: i,
                showTitle: e.showTitleComponent || !1,
              });
          },
          initList() {
            var e = Object(i.a)({}, u, o.a.toSnakeCase(this.data.layoutConfig));
            this.setData({ curLayoutConfig: o.a.toCamelCase(e) }),
              this.fetchList(1);
          },
          computedExtraRecs() {
            var { layout: e } = this.data.curLayoutConfig;
            return 1 == +e ? "note,coupon" : "";
          },
          fetchList(e) {
            var t,
              {
                bizName: a,
                goodsNumber: r,
                recommendName: n,
                loadMore: d,
              } = this.data;
            ((t = {
              page: e,
              pageSize: r,
              isMini: !0,
              bizName: a,
              buyerId: v.getBuyerId() || 0,
              storeId: v.getOfflineId() || 0,
              extraRecs: this.computedExtraRecs(),
            }),
            Object(m.c)({
              path: "/wscdeco/goods-api/recommend/list.json",
              data: t,
            }))
              .then((t) => {
                var { list: a = [], has_more: r = !1 } = t,
                  l = [],
                  m = o.a.toCamelCase(a),
                  u = m.some((e) => e.showRankingInfo),
                  { heightStyle: g } = this.data;
                if (u && -1 !== g.indexOf("overflow")) {
                  var y = g.replace(/[^0-9]/gi, "");
                  g = "overflow: hidden;height:" + (+y + 20) + "px";
                }
                m.map((e, t) => {
                  var a = this.getBannerId(t + 1);
                  (e.type = e.itemType), "goods" !== e.type && (e.isExtra = !0);
                  var { rankNo: o, rankType: r } = e.extendedData || {},
                    d = "";
                  o && r && (d = "本店" + p[r] + "第" + o),
                    (e.showExtra = !!d),
                    (e.extra = []);
                  var h = {};
                  d &&
                    (e.extra.push({ text: d, color: "var(--icon, #323233)" }),
                    (h = { rank_type: r, rank_no: o }));
                  var m = Object(i.a)(
                    {
                      item_id: e.id,
                      item_type: e.type || "goods",
                      banner_id: a,
                      g_kdt_id: e.kdtId,
                      alg: e.algs,
                      recommend_name: n,
                    },
                    h
                  );
                  return (
                    c[e.type] && (m = c[e.type](e, m)),
                    (e.loggerParams = m),
                    (e.bannerId = a),
                    (e.h5Url = s.a.add(
                      e.url,
                      Object(i.a)(
                        { alias: e.alias, banner_id: a, alg: e.algs },
                        h
                      )
                    )),
                    (e.url = s.a.add(
                      "/pages/goods/detail/index",
                      Object(i.a)(
                        { alias: e.alias, banner_id: a, alg: e.algs },
                        h
                      )
                    )),
                    l.push(m),
                    e
                  );
                });
                var v = this.data.recommendList.concat(m);
                this.setData({
                  recommendList: v,
                  isLoading: !1,
                  hasMore: r && d,
                  page: e,
                  heightStyle: g,
                }),
                  Object(h.a)(Object(h.b)("view", l)),
                  this.triggerEvent("afterload", { recommendList: v });
              })
              .catch(() => {
                this.setData({ isLoading: !1 });
              });
          },
          handleLoadMore() {
            this.data.isLoading || this.fetchList(this.data.page + 1);
          },
          getBannerId(e) {
            var { componentIndex: t, pageRandomNumber: a } = this.data;
            return (
              l.a.getPageSpmTypeId() +
              "~recService." +
              (t + 1) +
              "~" +
              e +
              "~" +
              a
            );
          },
          handleGoodsItemClick(e) {
            if (this.data.hasCustomClickHandler)
              return this.triggerEvent("handleGoodsItemClick", e.detail);
            var {
                loggerParams: t = null,
                url: a = "",
                alias: i,
                extendedData: o,
              } = e.detail,
              r = a;
            if (
              ((!/^http[s]?:\/\//.test(a) && t) ||
                (r = "/pages/goods/detail/index?alias=" + i),
              o && o.isKdtUnion)
            ) {
              var n = s.a.add(o.cpsPath, { s: o.shortUrl.split("/").pop() });
              wx.navigateToMiniProgram({ appId: o.appid, path: n });
            } else d.a.navigate({ url: r });
          },
          handleGoodsBuy(e) {
            if (this.data.hasCustomClickHandler)
              return this.triggerEvent("handleGoodsBuy", e.detail);
            var t = e.currentTarget.dataset.alias || e.detail.alias;
            Object(n.a)(t)
              .then((e) => {
                this.setData({ skuData: e });
              })
              .catch((e) => {});
          },
          handleSkuClose() {
            this.setData({ "skuData.showGoodsSku": !1 });
          },
        },
      });
    },
  })
);
