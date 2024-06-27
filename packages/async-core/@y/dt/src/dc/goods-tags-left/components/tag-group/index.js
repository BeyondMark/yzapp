"use strict";
var r = require("~/r");
r(
  "+tiH",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "+tiH": function (t, e, i) {
        i.r(e);
        var s = i("eijD"),
          r = i("Fcif"),
          o = i("9ZMt"),
          l = i("+Iya"),
          a = i("R7Zb"),
          n = i("XVHc"),
          d = i("82CI"),
          h = {
            name: "TagGroup",
            mixins: [Object(a.a)({ optDesc: n.a })],
            props: {},
            data: () => ({ isEmpty: !1, list: [] }),
            logicData: () => ({ fetchedPages: {}, slg: "" }),
            computed: {
              totalPage() {
                var {
                  opt: {
                    groupItem: { number: t },
                  },
                } = this;
                return Math.ceil(t / 6);
              },
              itemHeight() {
                var { goodsMargin: t } = this.opt;
                return +(+t + this.goodsHeight);
              },
              goodsHeight() {
                var { itemCardOpt: t } = this.opt;
                return +((t && t.imgHeight) || d.b);
              },
              groupStyle() {
                var {
                  groupItem: { height: t },
                  pageMargin: e,
                } = this.opt;
                return (
                  "height:" +
                  o.default.style.useTpx(t) +
                  ";padding: 0 " +
                  o.default.style.useTpx(e)
                );
              },
              goodsStyle() {
                var { goodsMargin: t } = this.opt;
                return "padding: " + o.default.style.useTpx(t / 2) + " 0";
              },
            },
            mounted() {
              this.initObserver(), this.initList();
            },
            methods: {
              initObserver() {
                var t = this.createIntersectionObserver();
                t.relativeToViewport({ bottom: 100, top: -100 }).observe(
                  ".group-hook",
                  () => {
                    t.disconnect(), this.loadGoods(1);
                  }
                );
              },
              initList() {
                for (
                  var { number: t } = this.opt.groupItem, e = [], i = 0;
                  i < t;
                  i++
                )
                  e.push({ _id: i, _skeleton: !0 });
                this.list = e;
              },
              hasTagsOpt(t) {
                var e, i, s;
                return (
                  (null == (e = t.itemCardOpt) ||
                  null == (i = e.tagsOpt) ||
                  null == (s = i.list)
                    ? void 0
                    : s.length) > 0
                );
              },
              hasExtOpt(t) {
                var e, i, s;
                return (
                  (null == (e = t.itemCardOpt) ||
                  null == (i = e.extOpt) ||
                  null == (s = i.list)
                    ? void 0
                    : s.length) > 0 && !this.isExtOptEmpty(t)
                );
              },
              isExtOptEmpty(t) {
                var e, i, s, r, o, l, a;
                return (
                  1 ===
                    (null == (e = t.itemCardOpt) ||
                    null == (i = e.extOpt) ||
                    null == (s = i.list)
                      ? void 0
                      : s.length) &&
                  "" ===
                    (null == (r = t.itemCardOpt) ||
                    null == (o = r.extOpt) ||
                    null == (l = o.list[0]) ||
                    null == (a = l.title)
                      ? void 0
                      : a.trim())
                );
              },
              hasSubTitleOpt(t) {
                var e, i;
                return (
                  (null == (e = t.itemCardOpt) || null == (i = e.subTitleOpt)
                    ? void 0
                    : i.title) && !this.isSubTitleOptEmpty(t)
                );
              },
              isSubTitleOptEmpty(t) {
                var e, i, s;
                return (
                  "" ===
                  (null == (e = t.itemCardOpt) ||
                  null == (i = e.subTitleOpt) ||
                  null == (s = i.title)
                    ? void 0
                    : s.trim())
                );
              },
              fetchList(t) {
                void 0 === t && (t = 1);
                var {
                  opt: {
                    kdtId: e,
                    appId: i,
                    offlineId: s,
                    groupItem: {
                      alias: a,
                      number: n,
                      prefetchGoodsIds: h = "",
                      hiddenGoodsIds: u = "",
                      sortType: p,
                    },
                  },
                } = this;
                if (0 != +n)
                  return Object(l.a)({
                    page: t,
                    alias: a,
                    json: 1,
                    offlineId: s,
                    kdt_id: e,
                    app_id: i,
                    pageSize: 6,
                    activityPriceIndependent: 1,
                    needOPriceAndTagsOpt: 1,
                    supportCombo: !0,
                    excludedComboSubType: ["none"],
                    prefetchGoodsIds: h,
                    hiddenGoodsIds: u,
                    sortType: p,
                  }).then((e) => {
                    var i,
                      s,
                      l,
                      { itemCardOpt: n, goodsMargin: h } = this.opt,
                      { list: u, hasMore: p } = e,
                      g = u || [];
                    this.slg =
                      null == (i = g[0]) ||
                      null == (s = i.itemCardOpt) ||
                      null == (l = s.extraInfo)
                        ? void 0
                        : l.slg;
                    var c = 6 * (+t - 1),
                      m = c + 6 - 1,
                      v = {};
                    g.forEach((t, e) => {
                      var i = c + e,
                        s = this.hasTagsOpt(t),
                        l = this.hasSubTitleOpt(t),
                        a = this.hasExtOpt(t),
                        u = this.goodsHeight + +h;
                      s && l && a && (u += d.c),
                        (v[i] = this.merge(
                          {
                            _id: i,
                            _skeleton: !1,
                            itemCardOpt: Object(r.a)({}, n, {
                              cardStyle:
                                "height:" + o.default.style.useTpx(u - h),
                              isTagsShow: s,
                            }),
                            _height: u,
                          },
                          t
                        )),
                        this.isSubTitleOptEmpty(v[i]) &&
                          delete v[i].itemCardOpt.subTitleOpt,
                        this.isExtOptEmpty(v[i]) &&
                          delete v[i].itemCardOpt.extOpt;
                    });
                    var f = 0;
                    (this.list = this.list.map((t) => {
                      var e,
                        { _id: i } = t;
                      return (
                        (f +=
                          (null == (e = v[i]) ? void 0 : e._height) ||
                          t._height ||
                          this.itemHeight),
                        v[i] || t
                      );
                    })),
                      (this.list = this.list.filter((t) => {
                        var e = !0;
                        if (p) {
                          var { _id: i } = t;
                          i >= c && i <= m && (e = !t._skeleton);
                        } else e = !(t._id >= c) || !t._skeleton;
                        return e || (f -= this.itemHeight), e;
                      })),
                      this.$emit("set-height", {
                        alias: a,
                        number: this.list.length,
                        tagGroupHeight: f,
                      });
                  });
                this.isEmpty = !0;
              },
              merge(t, e) {
                if (null === t) return null;
                if (!e) return t;
                if ("object" == typeof t && "object" == typeof e) {
                  var i = {};
                  for (var s of Object.keys(t))
                    "object" == typeof t[s] && "object" == typeof e[s]
                      ? (i[s] = this.merge(t[s], e[s]))
                      : void 0 === e[s]
                      ? (i[s] = t[s])
                      : (i[s] = e[s]);
                  for (var r of Object.keys(e))
                    void 0 === i[r] && (i[r] = e[r]);
                  return i;
                }
                return "object" != typeof t ? e : t;
              },
              loadGoods(t) {
                var e = this;
                return Object(s.a)(function* () {
                  var i = Math.floor(t / 6) + 1;
                  if (!e.fetchedPages[i]) {
                    var s = Object(r.a)({}, e.fetchedPages);
                    (s[i] = !0), (e.fetchedPages = s);
                    try {
                      yield e.fetchList(i);
                    } catch (t) {
                      (s[i] = !1), (e.fetchedPages = s);
                    }
                    for (var o = !0, l = 1; l <= e.totalPage; l++)
                      e.fetchedPages[l] || (o = !1);
                    o && 0 === e.list.length && (e.isEmpty = !0);
                  }
                })();
              },
              handleItemClick(t) {
                this.openDetailLogger(t);
                var { link: e = {} } = t,
                  { query: i = {} } = e;
                this.$emit(
                  "item-click",
                  Object(r.a)({}, t, {
                    link: Object(r.a)({}, e, {
                      query: Object(r.a)({ slg: this.slg }, i),
                    }),
                  })
                );
              },
              openDetailLogger(t) {
                try {
                  var e = this.getLoggerComponentName();
                  if (
                    !["limitdiscount", "groupon", "tag_list_left"].includes(e)
                  )
                    return;
                  var { itemId: i, id: s } = t;
                  if (!i && !s) return;
                  this.sendComponentLogger("logger", {
                    et: "click",
                    ei: "open_goods",
                    en: "打开商品详情",
                    params: {
                      component: e,
                      goods_id: i || s,
                      banner_id: this.getBannerId(),
                      slg: this.slg,
                    },
                  });
                } catch (t) {}
              },
              handleGoodsBuy(t, e) {
                this.clickBuyButtonLogger(),
                  this.$emit("buy", Object(r.a)({ id: t }, e.detail));
              },
              clickBuyButtonLogger() {
                try {
                  var t = this.getLoggerComponentName();
                  if (
                    !["limitdiscount", "groupon", "tag_list_left"].includes(t)
                  )
                    return;
                  this.sendComponentLogger("logger", {
                    et: "click",
                    ei: "click_buy",
                    en: "点击购买",
                    params: {
                      component: t,
                      banner_id: this.getBannerId(),
                      slg: this.slg,
                    },
                  });
                } catch (t) {}
              },
            },
            ud: !0,
          };
        e.default = o.default.component(h);
      },
    }
  )
);
