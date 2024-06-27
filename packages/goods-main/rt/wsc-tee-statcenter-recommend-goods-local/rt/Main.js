"use strict";
var r = require("~/r");
r(
  "+vb3",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "+vb3": function (e, t, a) {
        a.r(t);
        var i = a("eijD"),
          s = a("Fcif"),
          r = a("9ZMt"),
          o = a("YeA1"),
          n = a("mztD"),
          m = a("1Uvd"),
          h = a("zMoS"),
          c = a("US/N"),
          d = a("2wjL"),
          g = a("poDo"),
          u = a("7dhF"),
          l = a("w4n3"),
          p = a.n(l),
          b = a("PIyU"),
          f = getApp(),
          S = {
            props: {
              defaultPageSize: Number,
              totalPageNum: { type: Number, default: 1 },
              useLoadMore: { type: Boolean, default: !1 },
            },
            data() {
              return {
                isOpen: !1,
                loading: !1,
                finished: !1,
                recommendList: [],
                title: "更多精选商品",
                bizName: "",
                pageNum: 1,
                pageSize: this.defaultPageSize || 20,
                kdtId: "",
                layoutConfig: { layout: 1 },
                requestExtraParams: "",
                componentIndex: 0,
                componentSign: "recService",
                pageRandomNumber: Object(m.a)(8),
                themeCSS: "",
                themeColors: {},
                offlineId: 0,
                buyerId: 0,
                logger: this.ctx.logger,
                extraParams: {},
                isControlRecommendShow: !1,
                enableShow: !1,
                miniprogram: {},
                isSkyline: !1,
              };
            },
            computed: {
              isShow() {
                var {
                  isControlRecommendShow: e,
                  enableShow: t,
                  recommendList: a,
                  isOpen: i,
                } = this;
                return e ? t && i && a.length > 0 : i && a.length > 0;
              },
            },
            created() {
              f.waitForEnterShop().then(() => {
                this.initData();
              });
            },
            destroyed() {
              this.pageSizeWatch && this.pageSizeWatch(),
                this.layoutConfigWatch && this.layoutConfigWatch(),
                this.unwatchBizname && this.unwatchBizname();
            },
            methods: {
              initData() {
                Object(o.b)(this, [
                  "title",
                  "kdtId",
                  "requestExtraParams",
                  "themeColors",
                  "themeCSS",
                  "offlineId",
                  "buyerId",
                  "extraParams",
                  "isControlRecommendShow",
                  "enableShow",
                  "miniprogram",
                  "isSkyline",
                ]),
                  (this.unwatchBizname = this.ctx.watch("bizName", (e) => {
                    (this.bizName = e), this.bizName && this.getData();
                  })),
                  (this.pageSizeWatch = this.ctx.watch("pageSize", (e) => {
                    "number" == typeof e &&
                      (this.pageSize !== e && this.getData(),
                      (this.pageSize = e));
                  })),
                  (this.layoutConfigWatch = this.ctx.watch(
                    "layoutConfig",
                    (e) => {
                      this.layoutConfig = Object(s.a)(
                        {},
                        this.layoutConfig,
                        e || {}
                      );
                    }
                  ));
              },
              getIsOpen() {
                var e = this;
                return Object(i.a)(function* () {
                  var t,
                    { bizName: a } = e;
                  if ("g~bottom" === a) return Promise.resolve({ isOpen: !0 });
                  if (null != (t = e.miniprogram) && t.isTTApp)
                    return Promise.resolve({ isOpen: !1 });
                  var i = "/wsctrade/recommend-config.json";
                  return (
                    "uc~mg" === a &&
                      (i =
                        "/wscuser/scrm/api/benefitcard/recommend-config.json"),
                    Object(c.default)({
                      method: "post",
                      path: i,
                      data: { bizName: a },
                      withCredentials: !0,
                    })
                  );
                })();
              },
              getData() {
                var e = this;
                return Object(i.a)(function* () {
                  var { isOpen: t = !1 } = yield e.getIsOpen();
                  (e.isOpen = t), e.fetchList();
                })();
              },
              fetchList() {
                if (this.isOpen) {
                  var {
                    pageNum: e,
                    pageSize: t,
                    bizName: a,
                    kdtId: i,
                    requestExtraParams: o,
                    extraParams: m,
                    title: l,
                  } = this;
                  Object(c.default)({
                    path: "/wscstatcenter/recommend/getRecommendResultData.json",
                    data: {
                      params: JSON.stringify({
                        kdtId: i,
                        pageNum: e,
                        pageSize: t,
                        bizName: a,
                        buyerId: this.buyerId,
                        extraParams: Object(s.a)(
                          {
                            extraRecs: o,
                            isMini: "web" !== r.default.getEnv(),
                            storeId: this.offlineId,
                            uuid: Object(h.a)(
                              this.ctx.logger.getLogParams(),
                              "user.uuid"
                            ),
                          },
                          m
                        ),
                      }),
                    },
                    withCredentials: !0,
                  }).then((a) => {
                    var { list: i, hasMore: r } = a;
                    if (
                      ((i = p()(i)).forEach((a, i) => {
                        var r = i + (e - 1) * t,
                          o = this.getBannerId(r),
                          { rank_type: m, rank_no: h } = a.extended_data || {},
                          c = a.algs,
                          p = {};
                        m && h && (p = { rank_type: m, rank_no: h });
                        var f = Object(s.a)(
                          {
                            item_id: a.id,
                            item_type: a.item_type || "goods",
                            banner_id: o,
                            alg: c,
                            recommend_name: l || "更多精选商品",
                            component: this.componentSign,
                          },
                          p
                        );
                        "coupon" === a.item_type &&
                          (a.url = u.k.coupon + "?activityId=" + a.activity_id),
                          "note" === a.item_type &&
                            (a.title ||
                              "uc~mg" !== this.bizName ||
                              (a.showNote = !0),
                            (a.url = u.k.note + "?noteAlias=" + a.note_alias)),
                          "goods" === a.item_type &&
                            (a.url = u.k.goods + "?alias=" + a.alias),
                          (a.url = d.a.add(
                            a.url,
                            Object(s.a)({ alg: c, banner_id: o }, p)
                          )),
                          (a.banner_id = o),
                          (a.alg = c),
                          g.a[a.item_type] && (f = g.a[a.item_type](a, f)),
                          (a.image_url = Object(n.a)(
                            a.image_url,
                            "!400x0.jpg"
                          )),
                          (a.loggerParams = JSON.stringify(
                            Object(g.c)("view", f)
                          )),
                          (a.capCardOpts = Object(b.a)(a, this.layoutConfig));
                      }),
                      this.useLoadMore
                        ? (this.recommendList = [...this.recommendList, ...i])
                        : (this.recommendList = [...i]),
                      this.ctx.event.emit("loadSuccess", i),
                      !Object(g.d)(this.ctx.logger))
                    ) {
                      var o = i.map(
                        (e) => JSON.parse(e.loggerParams).params || {}
                      );
                      this.ctx.logger.log(
                        Object(g.c)("view", { view_objs: o })
                      );
                    }
                    (!r || i.length < t || this.pageNum >= this.totalPageNum) &&
                      ((this.loading = !1), (this.finished = !0));
                  });
                } else this.finished = !0;
              },
              getBannerId(e) {
                var { pageRandomNumber: t, componentIndex: a } = this;
                return (
                  this.ctx.logger.getPageSpm() +
                  "~" +
                  this.componentSign +
                  "." +
                  (a + 1) +
                  "~" +
                  e +
                  "~" +
                  t
                );
              },
              onLoad() {
                this.useLoadMore && (this.pageNum++, this.fetchList());
              },
            },
          };
        t.default = r.default.component(S);
      },
    }
  )
);
