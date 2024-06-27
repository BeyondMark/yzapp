"use strict";
var r = require("~/r");
r(
  "XXxQ",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      XXxQ: function (t, e, i) {
        i.r(e);
        var s = i("9ZMt"),
          r = i("R7Zb"),
          a = i("bs6A"),
          o = i("siWG"),
          h = i("2wjL"),
          l = i("4UgY"),
          n = i("NfyT"),
          { useTpx: p } = s.default.style,
          u = ["up_new", "shop_keeper", "shop_circle", "single_prod_intro"],
          d = {
            mixins: [Object(r.a)({ optDesc: o.a }), a.a],
            data: () => ({
              curList: [],
              waterfallList: [],
              hybirdList: [],
              needLoadMore: !0,
              loading: !1,
            }),
            logicData: () => ({ page: 1 }),
            computed: {
              infoData() {
                var {
                    noteDisplayStyle: t,
                    pageTitle: e,
                    showEnterShop: i,
                    showNoteTypeTag: s,
                    showBrowseCount: r,
                    showThumbsUpCount: a,
                    noteCornerStyle: o,
                    textStyle: h,
                    noteStyle: l,
                    listType: n,
                    layoutOpt: p,
                    showMore: u,
                  } = this.opt,
                  { titlePosition: d = 1 } = this.opt;
                return (
                  0 !== n && (d = 1),
                  3 === n && (d = 0),
                  5 === n && (d = 3),
                  {
                    noteDisplayStyle: t,
                    pageTitle: e,
                    showEnterShop: i,
                    showNoteTypeTag: s,
                    showBrowseCount: r,
                    showThumbsUpCount: a,
                    noteCornerStyle: o,
                    textStyle: h,
                    noteStyle: l,
                    titlePosition: d,
                    listType: n,
                    layoutOpt: p,
                    showMore: u,
                  }
                );
              },
              isSwipeLayout() {
                var { listType: t } = this.opt;
                return 2 == +t;
              },
              iconStyle: () =>
                "display: flex; align-item: center; line-height:" + p(18) + ";",
            },
            watch: {
              opt() {
                this.fetchNoteCardList();
              },
            },
            created() {
              this.fetchNoteCardList();
            },
            methods: {
              onPullDownRefresh() {
                (this.page = 1), this.fetchNoteCardList();
              },
              genArrayFilledWith(t, e) {
                var i = [];
                return (i.length = e), i.fill(t), i;
              },
              fetchNoteCardList() {
                var {
                    shopNoteIds: t = [],
                    sourceFrom: e = 0,
                    size: i = 3,
                  } = this.opt,
                  { page: s } = this,
                  r = n.a,
                  a = (s - 1) * r,
                  o = a + r,
                  h = 0 === e ? t : this.genArrayFilledWith("", i);
                if (
                  !h ||
                  (Array.isArray(h) && h.length <= 0) ||
                  (Array.isArray(h) && h.slice(a, o).length <= 0)
                )
                  return (this.loading = !1), void (this.needLoadMore = !1);
                this.loading = !0;
                var p = h.slice(a, o);
                0 === e
                  ? Object(l.a)({ shopNoteIds: p.join(",") }).then((t) => {
                      if (((this.loading = !1), Array.isArray(t))) {
                        (this.curList =
                          1 === this.page
                            ? t || []
                            : this.curList.concat(t || [])),
                          (this.waterfallList = this.waterfallListFormat(
                            this.curList
                          )),
                          (this.hybirdList = this.hybridListFormat(
                            this.curList
                          )),
                          this.page++;
                        var e = s * r,
                          i = s * r + r;
                        this.needLoadMore = h.slice(e, i).length > 0;
                      }
                    })
                  : 1 === e &&
                    Object(l.b)({
                      pageSize: r,
                      page: s,
                      querySource: 0,
                      stickStatus: 0,
                      noteStatus: "published",
                      noteTypes: JSON.stringify(u),
                    }).then((t) => {
                      this.loading = !1;
                      var e = t.data || [];
                      (this.curList = (
                        1 === this.page ? e || [] : this.curList.concat(e || [])
                      ).slice(0, i)),
                        (this.waterfallList = this.waterfallListFormat(
                          this.curList
                        )),
                        (this.hybirdList = this.hybridListFormat(this.curList)),
                        this.page++;
                      var a = s * r,
                        o = s * r + r;
                      this.needLoadMore = h.slice(a, o).length > 0;
                    });
              },
              hybridListFormat(t) {
                for (
                  var e = [],
                    i = t.length,
                    s = i % 3 == 0 ? i / 3 : Math.floor(i / 3 + 1),
                    r = 0;
                  r < s;
                  r++
                ) {
                  var a = t.slice(3 * r, 3 * r + 3);
                  e.push(a);
                }
                return e;
              },
              waterfallListFormat: (t) =>
                t.reduce((t, e, i) => {
                  var s = i % n.b;
                  return t[s] ? t[s].push(e) : (t[s] = [e]), t;
                }, []),
              linkToMore() {
                s.default.navigate({
                  url: "/packages/shop/shopnote/list/index",
                });
              },
              itemClick(t) {
                var { alias: e, notetype: i } = t.currentTarget.dataset,
                  r = h.a.add(
                    "mp_article" === i
                      ? "/packages/shop/shopnote/mparticle/detail/index"
                      : "/packages/shop/shopnote/detail/index",
                    { noteAlias: e }
                  );
                s.default.navigate({ url: r });
              },
            },
            ud: !0,
          };
        e.default = s.default.component(d);
      },
    }
  )
);
