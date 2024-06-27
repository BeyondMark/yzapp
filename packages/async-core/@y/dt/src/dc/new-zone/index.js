"use strict";
var r = require("~/r");
r(
  "60E+",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "60E+": function (e, o, t) {
        t.r(o);
        var s = t("Fcif"),
          i = t("eijD"),
          a = t("9ZMt"),
          r = t("yonK"),
          n = t("R7Zb"),
          u = t("bs6A"),
          c = t("C+cT"),
          d = t("AGZf"),
          g = t("/Uzp"),
          p = {
            mixins: [Object(n.a)({ optDesc: r.a }), u.a],
            props: {
              kdtId: Number,
              needSubscribeMessage: { type: Boolean, default: !1 },
            },
            data: () => ({
              curCoupons: [],
              curGoodsList: [],
              showChangeBtn: !1,
            }),
            logicData: () => ({ goodsPageNum: 1, isNewCustomer: !1 }),
            computed: {
              showNewZone() {
                return this.isNewCustomer && this.curCoupons.length;
              },
              goodsWrapStyle: () => "margin-top: " + a.default.style.useTpx(6),
            },
            created() {
              var e = this;
              return Object(i.a)(function* () {
                (e.isNewCustomer = yield g.a.getIsNewCustomer()),
                  e.isNewCustomer && e.fetchCoupons();
              })();
            },
            methods: {
              onPullDownRefresh() {
                this.fetchCoupons();
              },
              handleCouponClick(e) {
                var { curCoupons: o = [] } = this,
                  t = o[e];
                if (t && !t.disabled)
                  return this.needSubscribeMessage
                    ? this.$emit("handleCouponClick", {
                        windowType: "micro_dc_new_zone",
                        subscribeType: "微页面-新人专区",
                        next: () => {
                          this.handleClickCoupon(e);
                        },
                      })
                    : void this.handleClickCoupon(e);
              },
              fetchCoupons() {
                this.goodsPageNum = 1;
                var { coupon: e = [], couponSource: o } = this.opt,
                  t = e
                    .filter((e) => {
                      var { alias: o } = e;
                      return o;
                    })
                    .map((e) => {
                      var { alias: o } = e;
                      return o;
                    })
                    .join(",");
                if (+o === c.b && 0 === t.length)
                  return (this.curCoupons = []), void (this.curGoodsList = []);
                var s = { aliases: t };
                g.a.searchCoupons(s).then((e) => {
                  (this.curCoupons = (e || []).slice(0, 1)),
                    this.curCoupons.length
                      ? (this.getGoodsList(), this.sendViewLogger())
                      : ((this.curGoodsList = []), (this.showChangeBtn = !1));
                });
              },
              handleClickCoupon(e) {
                var { curCoupons: o = [] } = this,
                  t = o[e],
                  { receivedStatus: s, userCouponId: i, alias: r } = t;
                if ((this.sendClickLogger(t), 3 === s && i))
                  g.a
                    .fetchCouponGoodsLink({ couponId: i, groupType: "card" })
                    .then((e) => {
                      var { weappUrl: o = "", isSwitchTab: t } = e || {};
                      if (o) {
                        var s = t ? "switchTab" : "navigateTo";
                        a.default.navigate({ type: s, url: o });
                      }
                    });
                else {
                  var n = { source: c.c, bizName: c.c, alias: r };
                  g.a
                    .takeCoupon(n)
                    .then((e) => {
                      var { voucherIdentity: s } = e || {};
                      Object(d.a)("领取成功"),
                        (t.userCouponId = null == s ? void 0 : s.couponId),
                        (t.isRecevied = !0),
                        (t.receivedStatus = 2),
                        (t.text = "继续领取"),
                        (this.curCoupons = [...o]);
                    })
                    .catch((e) => {
                      var s = e.msg || "领取失败";
                      Object(d.a)(s),
                        161202001 === e.code && (this.isNewCustomer = !1),
                        1 === t.receivedStatus
                          ? ((t.disabled = !0), (t.text = "领取"))
                          : 2 === t.receivedStatus &&
                            ((t.text = "立即使用"), (t.receivedStatus = 3)),
                        (this.curCoupons = [...o]);
                    });
                }
              },
              getGoodsList() {
                var e = this;
                return Object(i.a)(function* () {
                  if (e.curCoupons.length) {
                    var { id: o } = e.curCoupons[0],
                      t = {
                        activityId: o,
                        platform: "weapp",
                        pageNum: e.goodsPageNum,
                      },
                      i = yield g.a.fetchGoodsList(t),
                      a = (null == i ? void 0 : i.items) || [];
                    if (a.length) {
                      (e.showChangeBtn = !0),
                        e.sendGoodsViewLogger(a),
                        (e.curGoodsList = a.map((o) => {
                          var t = e.mergeOpt(e.opt.itemCardOpt, o);
                          return 1 === a.length && (t.layoutType = "one"), t;
                        })),
                        (e.goodsPageNum =
                          ((null == i ? void 0 : i.page) || e.goodsPageNum) +
                          1);
                      var r = e.curGoodsList.length;
                      e._opt.goodsLayoutOpt = Object(s.a)(
                        {},
                        e._opt.goodsLayoutOpt,
                        { type: 3 === r ? c.a[5] : 2 === r ? c.a[1] : c.a[3] }
                      );
                    } else
                      1 !== e.goodsPageNum && Object(d.a)("暂无更多适用商品");
                  }
                })();
              },
              loadMoreGoods() {
                this.getGoodsList();
              },
              mergeOpt(e, o) {
                var t = JSON.parse(JSON.stringify(e));
                for (var i in o)
                  (e[i] || o[i]._assign) &&
                    (delete o[i]._assign,
                    "object" == typeof e[i]
                      ? (t[i] = Object(s.a)({}, e[i] || {}, o[i]))
                      : (t[i] = o[i]));
                return t;
              },
              sendViewLogger() {
                (this.curCoupons[0].loggerParams = Object(s.a)(
                  {
                    act_id: this.curCoupons[0].alias,
                    act_type: 105,
                    banner_id: this.getBannerId(1),
                    component: this.opt.type,
                  },
                  this.getComponentLoggerExtraParams()
                )),
                  this.sendComponentLogger("logger", {
                    et: "view",
                    ei: "view",
                    en: "内容曝光",
                    params: this.curCoupons[0].loggerParams,
                  });
              },
              sendClickLogger(e) {
                this.sendComponentLogger("logger", {
                  et: "click",
                  ei: "click_content",
                  en: "点击领券",
                  params: e.loggerParams,
                });
              },
              sendGoodsViewLogger(e) {
                var o = [];
                e.forEach((e, t) => {
                  var s;
                  (e.loggerParams = {
                    goods_id: null == (s = e.actionOpt) ? void 0 : s.alias,
                    banner_id: this.getBannerId(t + 1),
                  }),
                    o.push(e.loggerParams);
                }),
                  this.sendComponentLogger("logger", {
                    et: "view",
                    ei: "goods_view",
                    en: "商品曝光",
                    params: { view_objs: o, component: this.opt.type },
                  });
              },
              getItemClickOpt(e) {
                return Object(s.a)({}, e, {
                  link: Object(s.a)({}, e.link || {}, {
                    query: Object(s.a)(
                      { bannerId: this.getBannerId() },
                      this.getComponentLoggerExtraParams()
                    ),
                  }),
                });
              },
              openDetailLogger(e) {
                var { alias: o } = e;
                o &&
                  this.sendComponentLogger("logger", {
                    et: "click",
                    ei: "open_goods",
                    en: "打开商品详情",
                    params: {
                      component: this.opt.type,
                      goods_id: o,
                      goods_name: null == e ? void 0 : e.title,
                      banner_id: this.getBannerId(),
                    },
                  });
              },
              handleItemClick(e) {
                this.openDetailLogger(e),
                  this.$emit("item-click", this.getItemClickOpt(e));
              },
            },
            ud: !0,
          };
        o.default = a.default.component(p);
      },
    }
  )
);
