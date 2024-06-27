"use strict";
var r = require("~/r");
r(
  "6UFz",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "0M6g": function (t, e, a) {
        a.d(e, "a", function () {
          return s;
        });
        var o = a("9KEa");
        function s() {
          var t = getApp().getShopInfoSync().virtualGoodsCannotWePay,
            { platform: e } = Object(o.b)();
          return !t || "ios" !== e;
        }
      },
      "6UFz": function (t, e, a) {
        a.r(e);
        var o = a("Fcif"),
          s = a("hHpg"),
          i = a("DXqK"),
          n = a("0M6g"),
          r = a("umDW"),
          h = a("DSjh"),
          c = a("Negk"),
          p = a("OFhO"),
          d = a("gc3r"),
          g = a("YeA1"),
          l = a("7/pW"),
          { dmc: u } = Object(g.a)(),
          m = getApp(),
          f = "group",
          y = "coupon",
          b = "groupon",
          D = { group: h.a, coupon: c.a, groupon: p.a },
          w = {
            0: { activityType: 4, groupType: 0 },
            1: {},
            2: { activityType: 4, groupType: 1 },
            3: { activityType: 26 },
          };
        Object(l.a)({
          data: {
            themeClass: m.themeClass,
            pageType: "",
            alias: "",
            fetching: !0,
            requestParams: {},
            loading: !1,
            nomore: !1,
            nodata: !1,
            salesman: {},
            tab: {
              list: [
                { id: "paidColumn", title: "知识付费" },
                { id: "normalGoods", title: "其他商品" },
              ],
              selectedId: "paidColumn",
              height: 45,
              isFixed: !1,
              isShow: !1,
              paidData: {},
              groupalias: "",
            },
          },
          attached() {
            var { query: t } = this.ctx.data,
              { pageType: e, alias: a } = t,
              s = t.kdt_id || t.kdtId || m.getKdtId();
            if (!e || ("group" === e && a))
              u.redirectTo("GoodsTag", { alias: a, kdtId: s });
            else if ("coupon" === e && a)
              wx.redirectTo({
                url:
                  "/packages/user/coupon/goods-list/index?alias=" +
                  a +
                  "&kdtId=" +
                  s,
              });
            else {
              if ("groupon" === e) {
                var { isGrouponPro: i, grouponType: n } = JSON.parse(
                  t.component || "{}"
                );
                if (i)
                  return void Object(r.a)("/wscump/groupon/list", {
                    title: "全部拼团",
                    query: Object(o.a)({}, w[n], { kdtId: m.getKdtId() }),
                    method: "redirectTo",
                  });
              }
              d.a.call(this, { sst: 8 }),
                this.on("app:offlineId:change", () => {
                  this.fetchGroupPage(t);
                }),
                this.fetchGroupPage(t);
            }
          },
          methods: {
            fetchAlias(t) {
              return new Promise((e) => {
                m.getShopInfo().then((a) => {
                  var { chainStoreInfo: o } = a,
                    { isRootShop: s = !1, isMultiOnlineShop: i = !1 } = o;
                  i
                    ? s
                      ? m.once("app:chainstore:kdtid:update", (a) => {
                          var { kdtId: o } = a;
                          this.getAliasPromise(t, o).then((t) => {
                            this.setYZData({ alias: t }), e(t);
                          });
                        })
                      : this.getAliasPromise(t, m.getKdtId() || a.kdt_id).then(
                          (t) => {
                            this.setYZData({ alias: t }), e(t);
                          }
                        )
                    : e(t);
                });
              });
            },
            getAliasPromise: (t, e) =>
              t
                ? m
                    .request({
                      path: "/wscshop/api/showcase-retail/getRetailSubShopTagInfo.json",
                      data: { source_alias: t, target_kdt_id: e },
                    })
                    .then((t) => t.alias)
                    .catch(() => t)
                : new Promise((e) => {
                    e(t);
                  }),
            fetchGroupPage(t) {
              this.fetchAlias(t.alias).then((e) => {
                var a = t.pageType || f;
                if (
                  ((this.data.pageType = a),
                  (this.typeComponent = D[a]),
                  delete t.title,
                  -1 !== [y, f, b].indexOf(a))
                ) {
                  if (a !== f || e) {
                    if (a !== y || t.group_id) {
                      if (a === b) {
                        t.component = JSON.parse(t.component || "{}");
                        var {
                          grouponType: o = 0,
                          showPrice: s = !0,
                          hideGoodsSold: i = 0,
                        } = t.component;
                        (this.typeComponent.components[0].list = []),
                          (this.typeComponent.components[0].grouponType = o),
                          (this.typeComponent.components[0].showPrice = s),
                          (this.typeComponent.params.hideSoldOutGoods = i),
                          wx.setNavigationBarTitle({ title: "全部拼团" }),
                          (this.ctx.data.groupPageTitle = "全部拼团");
                      }
                      a === y && (this.typeComponent.components[0].list = []),
                        (this.tagPromise = Promise.resolve()),
                        a === f
                          ? (this.tagPromise = m
                              .request({
                                path: "/wscshop/showcase/tag/detail.json",
                                data: { alias: t.alias },
                              })
                              .then((t) => {
                                if (t && t.components && t.components.length) {
                                  (t.components[2].goods = []),
                                    (this.ctx.featureComponents = [
                                      t.components[2],
                                    ]);
                                  var { subtitle: e, title: a } =
                                      t.components[0],
                                    o = e || a || "商品分组";
                                  wx.setNavigationBarTitle({ title: o }),
                                    (this.ctx.data.groupPageTitle = o);
                                }
                              })
                              .catch(() => {
                                this.ctx.featureComponents =
                                  this.typeComponent.components;
                              }))
                          : (this.ctx.featureComponents =
                              this.typeComponent.components),
                        (t.page = 1),
                        a === y && t.group_id
                          ? (this.typeComponent
                              .getCouponSupportGoodsInfo({
                                groupId: t.group_id,
                              })
                              .then((e) => {
                                this.setYZData({ pageType: "coupon" }),
                                  e.exist_normal_goods && e.exist_owl_goods
                                    ? (this.setYZData({
                                        "tab.isShow": !0,
                                        fetching: !0,
                                      }),
                                      this.fetchPaidcontentList({ owlType: 0 }))
                                    : e.exist_normal_goods
                                    ? (this.setYZData({
                                        "tab.isShow": !1,
                                        "tab.selectedId": "normalGoods",
                                      }),
                                      this.setYZData({ fetching: !0 }),
                                      this.fetchList(t).then(() => {
                                        this.setYZData({ fetching: !1 });
                                      }))
                                    : (this.setYZData({
                                        "tab.isShow": !1,
                                        fetching: !0,
                                      }),
                                      this.fetchPaidcontentList({
                                        owlType: 0,
                                      }));
                              }),
                            (this.groupId = t.group_id))
                          : (this.setYZData({ fetching: !0 }),
                            this.tagPromise.then(() => {
                              e && e !== t.alias && (t.alias = e),
                                this.fetchList(t).then(() => {
                                  this.setYZData({ fetching: !1 });
                                });
                            })),
                        a === f
                          ? ((this.groupalias = e),
                            this.setYZData({ groupalias: e }))
                          : wx.hideShareMenu();
                    } else
                      wx.reLaunch({ url: "/packages/home/dashboard/index" });
                  } else wx.reLaunch({ url: "/packages/home/dashboard/index" });
                } else wx.reLaunch({ url: "/packages/home/dashboard/index" });
              });
            },
            handleTabChange(t) {
              var e = t.detail.index,
                a = this.data.tab.list[e].id;
              this.data.tab.selectedId !== a &&
                (this.setYZData({ "tab.selectedId": a }),
                "normalGoods" !== a || this.fetchedCouponGoods
                  ? "paidColumn" === a &&
                    this.fetchPaidcontentList({ owlType: 0 })
                  : this.fetchList({ page: 1, group_id: this.groupId }).then(
                      () => {
                        (this.fetchedCouponGoods = !0),
                          this.setYZData({ fetching: !1 });
                      }
                    ));
            },
            fetchPaidcontentList(t) {
              var { loading: e } = this.data,
                a = { group_id: this.groupId, owlType: t.owlType };
              this.setYZData({ loading: !0 }),
                !e &&
                  this.typeComponent.fetchOwlList(a).then((e) => {
                    this.parsePaidData(e, t.owlType);
                  });
            },
            parsePaidData(t, e) {
              e = +e;
              var { paidData: a } = this.data,
                o = t.columnList || [],
                s = t.contentList || [];
              0 === e
                ? (a = t)
                : 1 === e
                ? (a.columnList = (a.columnList || []).concat(o))
                : (a.contentList = (a.contentList || []).concat(s)),
                (a.columnList || []).forEach((t) => {
                  t.showPriceInfo = Object(n.a)();
                }),
                (a.contentList || []).forEach((t) => {
                  (t.publishAt = Object(i.d)(t.publishAt, "YYYY-MM-DD")),
                    (t.showPriceInfo = Object(n.a)());
                }),
                this.setYZData({ fetching: !1, loading: !1, paidData: a });
            },
            fetchMorePaidContent(t) {
              var e = t.target.dataset.type;
              this.fetchPaidcontentList({ owlType: e });
            },
            fetchList(t) {
              this.setYZData({ loading: !0 });
              var e = m.getShopInfoSync();
              return (
                e.chainStoreInfo &&
                  e.chainStoreInfo.rootKdtId &&
                  (t.root_kdt_id = e.chainStoreInfo.rootKdtId),
                this.typeComponent
                  .fetch(t)
                  .then((t) => {
                    this.setYZDataList(t);
                  })
                  .catch((t) => {
                    Object(s.a)(t.msg || "获取信息失败"),
                      this.typeComponent.params.page--;
                  })
                  .then(() => this.setYZData({ loading: !1 }))
              );
            },
            setYZDataList() {
              (this.ctx.data.featureComponents = this.typeComponent.components),
                this.setYZData({ loading: !1 });
            },
          },
        });
      },
      gc3r: function (t, e, a) {
        a.d(e, "b", function () {
          return d;
        }),
          a.d(e, "a", function () {
            return g;
          });
        var o = a("Fcif"),
          s = a("jA1y"),
          i = a("vgcL"),
          n = a("2wjL"),
          r = a("u8kV"),
          h = a("rDSc"),
          c = a("8B9M"),
          p = function (t, e) {
            t || (!1 !== e.isNeedShareMore && this.setYZData({ salesman: e }));
          },
          d = (t) => {
            var e = Object(h.a)(Object(o.a)({}, t, { path: t.url }), "url");
            return Object(s.c)(e);
          },
          g = function (t) {
            var {
                scene: e,
                sst: a,
                gst: s,
                getSalesmanData: h = p,
                query: g,
              } = t,
              l = Object(c.a)() || {},
              u = l.getToken() || {},
              { route: m = "", options: f = {} } = Object(r.d)(),
              y = g || f,
              b = n.a.add(m, y),
              D = { gst: (s = s || Object(i.e)(e)), sst: a, sourceUrl: b },
              { yzUserId: w } = u;
            Object(i.f)({
              url: b,
              logParams: l.logger.getLogParams && l.logger.getLogParams(),
              userId: w,
              request: d,
            }),
              Object(i.a)(Object(o.a)({}, D)),
              Object(i.b)({}, h.bind(this));
          };
      },
    }
  )
);
