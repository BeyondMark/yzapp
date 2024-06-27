"use strict";
var r = require("~/r");
r(
  "P5FB",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      P5FB: function (e, t, r) {
        r.r(t);
        var o = r("Fcif"),
          a = r("9ZMt"),
          i = r("EqB2"),
          s = r("z5Jb"),
          u = r("KTPL"),
          d = r("9q0j"),
          n = r("MLLI"),
          c = {
            mixins: [Object(i.a)({ optDesc: u.a })],
            props: {
              kdtId: Number,
              shopInfo: { type: Object, default: () => ({}) },
              themeColors: { type: Object, default: () => ({}) },
              buyerId: { type: String, default: "" },
              currentGroup: {
                type: Object,
                default: () => ({
                  displayType: 1,
                  displayNumber: 6,
                  groupAlias: "",
                }),
              },
            },
            data: () => ({
              loading: !1,
              finished: !1,
              goodList: [],
              currentPage: 1,
              offset: 100,
            }),
            computed: {
              pageMargin() {
                return a.default.style.useTpx(this.opt.pageMargin);
              },
              pageSize() {
                var { currentGroup: e, opt: t } = this,
                  { listMode: r } = t,
                  { displayType: o, displayNumber: a } = e,
                  i = a;
                if (o)
                  switch (r) {
                    case 0:
                      i = 9;
                      break;
                    case 1:
                      i = 10;
                      break;
                    case 2:
                    case 3:
                    case 4:
                      i = 9;
                  }
                return i;
              },
            },
            watch: {
              "currentGroup.groupAlias": function () {
                (this.goodList = []),
                  (this.currentPage = 1),
                  (this.finished = !1),
                  this.init();
              },
            },
            created() {
              this.init();
            },
            methods: {
              transformRes: (e) =>
                e.map((e) => Object(o.a)({}, e, { goodsFrom: "group" })),
              init() {
                var { currentPage: e } = this;
                this.getGoodList({ pageNumber: e });
              },
              getGoodList(e) {
                var t = this,
                  { pageNumber: r = 1 } = e,
                  {
                    kdtId: a,
                    buyerId: i,
                    opt: u,
                    themeColors: c,
                    shopInfo: p,
                    currentGroup: g,
                    pageSize: l,
                  } = this,
                  { groupAlias: h } = g;
                this.loading = !0;
                var b = {
                  kdtId: a,
                  pageNumber: r,
                  buyerId: i,
                  alias: h,
                  pageSize: l,
                };
                Object(d.a)(b).then(function (e) {
                  void 0 === e && (e = {});
                  var r = t.transformRes(e.content || []);
                  (t.loading = !1), (t.finished = r.length <= 0);
                  var i = e.totalPages > e.pageable.pageNumber;
                  (t.goodList = t.goodList.concat(
                    Object(s.a)({
                      goodList: r,
                      opt: Object(o.a)({}, u, { goodsFrom: "group" }),
                      kdtId: a,
                      themeColors: c,
                      virtualGoodsCannotWePay: p.virtualGoodsCannotWePay,
                    })
                  )),
                    i &&
                      t.$nextTick(() => {
                        var { windowHeight: e } = Object(n.b)();
                        t.createSelectorQuery()
                          .select(".dc-course-group-list")
                          .boundingClientRect((r) => {
                            r &&
                              r.bottom >= 0 &&
                              r.bottom - e <= 100 &&
                              t.loadMore();
                          })
                          .exec();
                      });
                });
              },
              loadMore() {
                var { currentPage: e = 1 } = this,
                  { currentGroup: t } = this,
                  { displayType: r, groupAlias: o } = t;
                !o || r
                  ? ((e += 1),
                    (this.currentPage = e),
                    this.getGoodList({ pageNumber: e }))
                  : (this.finished = !0);
              },
            },
            ud: !0,
          };
        t.default = a.default.component(c);
      },
    }
  )
);
