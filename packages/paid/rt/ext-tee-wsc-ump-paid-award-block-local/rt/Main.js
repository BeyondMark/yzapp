"use strict";
var r = require("~/r");
r(
  "Ctel",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "95W+": function (e, t, i) {
        i.d(t, "a", function () {
          return c;
        }),
          i.d(t, "b", function () {
            return o;
          });
        var a = i("eijD"),
          r = i("bsB/"),
          s = i("WNIS"),
          n = i("FDI5"),
          c = () =>
            new Promise((e) => {
              Object(n.a)().then((t) => {
                var { available: i } = t;
                i &&
                  Object(r.d)().then((t) => {
                    t &&
                      wx
                        .getStorage({ key: s.g })
                        .then((t) => {
                          t.data !== new Date().toLocaleDateString() && e(!0);
                        })
                        .catch(() => {
                          e(!0);
                        });
                  });
              });
            });
        function o(e) {
          return h.apply(this, arguments);
        }
        function h() {
          return (h = Object(a.a)(function* (e) {
            var { onClose: t = () => {} } = e;
            return Object(r.e)({
              scene: s.f,
              needAlwaysToast: !0,
              closeCallBack: () => {
                wx.setStorage({
                  key: s.g,
                  data: new Date().toLocaleDateString(),
                }),
                  t();
              },
            });
          })).apply(this, arguments);
        }
      },
      Ctel: function (e, t, i) {
        i.r(t);
        var a = i("9ZMt"),
          r = i("YeA1"),
          s = i("uzJ0"),
          n = i.n(s),
          c = i("MBPi"),
          o = i("95W+"),
          h = 1,
          d = {
            data: () => ({
              orderNo: "",
              kdtId: 0,
              hasPaid: !1,
              canUseTradeUmpV1: !0,
              payResult: {},
              usePointsExpireScene: !1,
              hasTapPointsNav: !1,
              awardInfo: {},
              cash: {},
              creditInfo: {},
              memberCard: {},
              pointCard: {},
              themeGeneralColor: "",
              isWxReceipt: !1,
            }),
            computed: {
              showVal() {
                var e,
                  t =
                    Object(c.a)(this.cash) ||
                    Object(c.a)(this.creditInfo) ||
                    Object(c.a)(this.memberCard) ||
                    Object(c.a)(this.pointCard);
                return (
                  !(null == (e = this.payResult) ? void 0 : e.isFxZppOrder) &&
                  !this.canUseTradeUmpV1 &&
                  t &&
                  (this.hasPaid || this.isWxReceipt)
                );
              },
              showCash() {
                return Object.keys(this.cash).length > 0;
              },
              showCredit() {
                return Object.keys(this.creditInfo).length > 0;
              },
              showMemberCard() {
                return Object.keys(this.memberCard).length > 0;
              },
              showPointCard() {
                return Object.keys(this.pointCard).length > 0;
              },
              formatMemberName() {
                return this.showMemberCard ? " " + this.memberCard.name : "";
              },
              formatCreditInfoName() {
                return this.showCredit
                  ? " " + (this.creditInfo.name || "积分")
                  : "";
              },
              themeColorStyle() {
                return "color: " + this.themeGeneralColor;
              },
              themeBackgroundColorStyle() {
                return "background: " + this.themeGeneralColor;
              },
            },
            created() {
              var e = this;
              Object(r.b)(this, [
                "orderNo",
                "hasPaid",
                "canUseTradeUmpV1",
                "kdtId",
                "isWxReceipt",
              ]),
                (this.payResultUnWatch = this.ctx.watch(
                  "payResult",
                  function (t) {
                    void 0 === t && (t = {}),
                      (e.payResult = t),
                      (e.awardInfo = t.award || {}),
                      Object(c.a)(e.awardInfo) &&
                        e.computeDetaildAward(e.awardInfo);
                  }
                )),
                (this.unwatchThemeColors = this.ctx.watch(
                  "themeColors",
                  (e) => {
                    this.themeGeneralColor = e.general;
                  }
                )),
                Object(o.a)().then((e) => {
                  this.usePointsExpireScene = e;
                });
            },
            destroyed() {
              this.payResultUnWatch && this.payResultUnWatch(),
                this.unwatchThemeColors && this.unwatchThemeColors();
            },
            methods: {
              computeDetaildAward(e) {
                var { orderNo: t } = this,
                  {
                    cashInfo: i,
                    credit: a,
                    hasMemberCard: r,
                    memberCards: s = [],
                  } = e;
                if (Object(c.a)(i)) {
                  var o = {};
                  i.cash &&
                    "number" == typeof i.cash &&
                    ((o.money = n()(i.cash)),
                    (o.url =
                      "/packages/user/cashback/detail/index?order_no=" + t)),
                    i.valueCard &&
                      "number" == typeof i.valueCard &&
                      (o.valueCard = n()(i.valueCard)),
                    (o.needActivated = i.needActivated),
                    (this.cash = o);
                }
                if (Object(c.a)(a)) {
                  var d = {};
                  (d.num = a.credit),
                    (d.name = a.creditName),
                    (d.desc = a.desc),
                    (d.url = "/packages/pointstore/point-center/index"),
                    (this.creditInfo = d);
                }
                if (Object(c.a)(r)) {
                  var l = {};
                  (l.name = s.map((e) => e.name).join("、") || "权益卡"),
                    (l.url = "/packages/card/all/index"),
                    (l.needActivated = s[0] && s[0].needActivated),
                    (this.memberCard = l);
                }
                var { collectPointsDTO: u = {} } = this.payResult;
                if (Object.keys(u).length > 0) {
                  var {
                      presentType: p,
                      couponDetail: m = {},
                      goodsDetail: v = {},
                      costPoints: b,
                      activityId: g,
                      pointNum: k,
                    } = u,
                    f =
                      p === h
                        ? null == v
                          ? void 0
                          : v.goodsName
                        : "" +
                          (null == m ? void 0 : m.preferentialCopywriting) +
                          (null == m ? void 0 : m.title),
                    C = {
                      presentType: p,
                      costPoints: b,
                      pointNum: k,
                      price: p === h ? n()(null == v ? void 0 : v.price) : "",
                      rights: f,
                      url: "packages/point/home/index?activity_id=" + g,
                    };
                  this.pointCard = C;
                }
              },
              gotoUrl(e, t) {
                switch (t) {
                  case "cash":
                    this.log({
                      et: "click",
                      ei: "click_detail_fanchuzhi",
                      en: "返储值金/返现查看详情点击",
                    });
                    break;
                  case "creditInfo":
                    this.log({
                      et: "click",
                      ei: "click_fanjifen_xiangqing",
                      en: "返积分“查看详情”点击",
                    });
                    break;
                  case "memberCard":
                    this.log({
                      et: "click",
                      ei: "click_detail_quanyika",
                      en: "返权益卡查看详情点击",
                    });
                    break;
                  case "pointCard":
                    this.log({
                      et: "click",
                      ei: "click_point",
                      en: "集点卡查看详情点击",
                      si: this.kdtId,
                    });
                }
                var i = e || (this[t] && this[t].url);
                if (i) {
                  var a = () => {
                    this.navigate(i);
                  };
                  this.ctx.process
                    .invokePipe("beforeGoToUrl", { type: t })
                    .then((e) => {
                      var { hasBindingByCloud: i = !1 } = e;
                      if (i) a();
                      else {
                        if (
                          "creditInfo" === t &&
                          !this.hasTapPointsNav &&
                          this.usePointsExpireScene
                        )
                          return (
                            (this.hasTapPointsNav = !0),
                            Object(o.b)({
                              onClose() {
                                a();
                              },
                            })
                          );
                        a();
                      }
                    })
                    .catch((e) => {});
                }
              },
              navigate(e) {
                this.isWxReceipt
                  ? this.ctx.process.invoke("navigateTo", e)
                  : a.default.navigate({ url: e });
              },
              doActivate(e) {
                "cash" === e
                  ? this.log({
                      et: "click",
                      ei: "click_fanchuzhi_jihuo",
                      en: "返储值金“立即激活”点击",
                    })
                  : "memberCard" === e
                  ? this.log({
                      et: "click",
                      ei: "click_quanyika_jihuo",
                      en: "返权益卡“立即激活”点击",
                    })
                  : "pointCard" === e &&
                    this.log({
                      et: "click",
                      ei: "click_point_view",
                      en: "返集点“立即查看”点击",
                    });
              },
              showSalesman() {
                this.showVal =
                  !this.canUseTradeUmpV1 && (this.hasPaid || this.isWxReceipt);
              },
              log(e) {
                var t,
                  { et: i, ei: a, en: r } = e;
                this.isWxReceipt
                  ? this.ctx.process.invoke("logger", i, a, r, {
                      si: this.kdtId,
                      kdt_id: this.kdtId,
                    })
                  : null == (t = this.ctx.logger) ||
                    t.log({
                      et: "click",
                      ei: "click_detail_fanchuzhi",
                      en: "返储值金/返现查看详情点击",
                      si: this.kdtId,
                    });
              },
            },
            ud: !0,
          };
        t.default = a.default.component(d);
      },
      FDI5: function (e, t, i) {
        i.d(t, "a", function () {
          return r;
        });
        var a = getApp(),
          r = () => a.request({ path: "/wscuser/scrm/api/isCrmShop.json" });
      },
    }
  )
);
