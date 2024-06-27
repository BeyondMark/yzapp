"use strict";
var r = require("~/r");
r(
  "Pfug",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      Pfug: function (t, e, i) {
        i.r(e);
        var a = i("Fcif"),
          s = i("9ZMt"),
          o = i("R7Zb"),
          r = i("l7k/"),
          n = i("vyom"),
          d = i("pF6A"),
          c = i("qe3o"),
          g = {
            name: "MeetReductionList",
            mixins: [Object(o.a)({ optDesc: r.b }), d.a],
            props: { uuid: { type: String, default: "" } },
            data: () => ({ goodsList: [], hasMore: !1, page: 1, loading: !1 }),
            created() {
              var { activityId: t } = this.opt;
              t && this.getMeetReduceRecList();
            },
            methods: {
              mergeOpt(t, e) {
                var i = JSON.parse(JSON.stringify(t));
                for (var s in e)
                  (t[s] || e[s]._assign) &&
                    (delete e[s]._assign,
                    (i[s] = Object(a.a)({}, t[s] || {}, e[s])));
                return i;
              },
              getMeetReduceRecList() {
                var t,
                  e = (null == (t = this.opt) ? void 0 : t.queryExtra) || {};
                return (
                  (this.loading = !0),
                  c
                    .b(
                      Object(a.a)({}, e, {
                        activityId: this.opt.activityId,
                        page: this.page,
                        pageSize: this.opt.pageSize || 6,
                        activitySource: this.opt.activitySource,
                        uuid: this.uuid,
                      })
                    )
                    .then((t) => {
                      var e,
                        i = this.formatList(t.items || []),
                        s = this.goodsList.concat(i);
                      if (
                        "hybrid" ===
                        (null == (e = this.opt.layoutOpt) ? void 0 : e.type)
                      ) {
                        for (var o = [], r = 0; r < s.length; r++)
                          r % 3 == 0
                            ? o.push(s[r])
                            : r % 3 == 1 &&
                              (o.push({
                                type: "hybrid-line",
                                items: [
                                  Object(a.a)({}, s[r], { hybridSmall: !0 }),
                                  Object(a.a)({}, s[r + 1], {
                                    hybridSmall: !0,
                                  }),
                                ].filter((t) => t.type),
                              }),
                              r++);
                        s = o;
                      }
                      (this.goodsList = s),
                        (this.hasMore =
                          this.page * this.opt.pageSize <
                          t.paginator.totalCount),
                        (this.loading = !1);
                    })
                    .catch((t) => {
                      s.default.$native.showToast({
                        title: t.msg,
                        icon: "none",
                      }),
                        (this.loading = !1);
                    })
                );
              },
              formatList(t) {
                return t.map((t, e) =>
                  Object(a.a)({}, this.mergeOpt(this.opt.itemCardOpt, t), {
                    goodsId: t.goodsId,
                    alias: t.alias,
                    layoutItemWrapStyle: this.getCapLayoutItemWrapStyle(e),
                  })
                );
              },
              handleClickViewMore() {
                var t = {
                  et: "click",
                  ei: "viewmore_click",
                  en: "点击查看更多",
                  params: { component: n.a },
                };
                this.sendComponentLogger("logger", t);
                var e = this.getBannerId(this.index);
                s.default.navigate({
                  type: "navigateTo",
                  url:
                    "/packages/ump/meet-reduce-goods/index?alias=" +
                    this.opt.activityAlias +
                    "&banner_id=" +
                    e,
                });
              },
              handleItemClick(t, e) {
                var i = this.getBannerId(t);
                this.sendComponentLogger("logger", {
                  et: "click",
                  ei: "open_goods",
                  en: "打开商品详情",
                  params: { component: n.a, goods_id: e.goodsId, banner_id: i },
                }),
                  this.$emit("item-click", e.actionOpt);
              },
            },
            ud: !0,
          };
        e.default = s.default.component(g);
      },
    }
  )
);
