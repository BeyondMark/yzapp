"use strict";
var r = require("~/r");
r(
  "Rg+h",
  Object.assign({}, require("~/v.js").modules, {
    "Rg+h": function (e, t, a) {
      a.r(t);
      var r = a("Fcif"),
        s = a("zMoS"),
        i = a("KEq0"),
        o = a.n(i),
        u = a("US/N"),
        h = 1,
        l = 2,
        d = 3,
        c = 4,
        m = { 1: "人", 2: "元", 3: "笔订单", 4: "件商品" };
      function n(e, t) {
        return (
          void 0 === t && (t = !0),
          (e = parseFloat(e, 10)),
          t && (e /= 100),
          (e = e.toFixed(2))
        );
      }
      var g = {
          data: () => ({
            items: [],
            activity: {
              lowestCustomerNum: 0,
              lowestOrderNum: 0,
              lowestOrderPay: 0,
              lowestSalesNum: 0,
              customerNum: 0,
              orderNum: 0,
              orderPay: 0,
              salesNum: 0,
            },
            savedMoney: 0,
            showGoalNum: 0,
            visible: !1,
            orderNo: "",
            headerName: "",
            goodsNum: 0,
            unit: "",
            formatNum: 0,
            formatSavedMoney: 0,
            customerNickname: "",
            customerAvatar: "",
            hasError: !1,
            loading: !1,
            countdown: 0,
            isWeb: !1,
            showShared: !1,
            shareData: {
              title: "",
              path: "",
              imageUrl:
                "https://img01.yzcdn.cn/upload_files/2020/09/29/FouW4WjRy9UVm1p-m6VG_d3kCWtW.png",
            },
          }),
          created() {
            this.ctx.event.listen("openGroupbuyShareDialog", () => {
              this.open(), this.queryShare();
            }),
              (this.unWatchOrderNo = this.ctx.watch("orderNo", (e) => {
                this.orderNo = e;
              }));
          },
          destroyed() {
            this.ctx.event.remove("openGroupbuyShareDialog"),
              this.unWatchOrderNo && this.unWatchOrderNo();
          },
          methods: {
            toggleDialog(e) {
              e &&
                !this.items.length &&
                (this.queryShare(),
                this.ctx.logger.log({
                  et: "click",
                  ei: "groupbuy_share",
                  en: "分享一下",
                  pt: "paySuccess",
                  params: { share_uid: this.ctx.data.buyerId },
                }));
            },
            queryShare() {
              this.loading ||
                this.items.length ||
                ((this.loading = !0),
                (this.hasError = !1),
                Object(u.default)({
                  path: "/wscindustry/groupbuying/poster/getOrderShare.json",
                  data: { orderNo: this.orderNo },
                  method: "GET",
                })
                  .then((e) => {
                    var {
                        joinActivityShareBO: t,
                        headerName: a,
                        customerNickname: i,
                        customerMobile: o,
                        customerAvatar: u,
                        items: h,
                        headerBuyerId: l,
                        activityId: d,
                      } = e,
                      {
                        customerNum: c,
                        orderNum: m,
                        orderPay: g,
                        salesNum: p,
                        lowestCustomerNum: N,
                        lowestOrderNum: y,
                        lowestOrderPay: v,
                        lowestSalesNum: S,
                      } = t,
                      b = Object(r.a)({}, t, {
                        customerNum: this.getDefaultVal(c, N),
                        orderNum: this.getDefaultVal(m, y),
                        orderPay: this.getDefaultVal(g, v),
                        salesNum: this.getDefaultVal(p, S),
                      }),
                      w = Object(s.a)(t, "activityAlias"),
                      O = h.map((e) => ({
                        title: e.title,
                        num: e.num,
                        markPrice: e.markPrice,
                        price: e.price,
                        salesPrice: n(e.price, !0),
                        imgUrl: Object(s.a)(e, "picture[0].url"),
                      }));
                    (this.headerName = a),
                      (this.customerAvatar =
                        !u || /\/upload_files\/avatar.png/.test(u)
                          ? "https://img01.yzcdn.cn/upload_files/2020/10/21/FrY8c3csodafnBSzhvk9TozB7NIA.png"
                          : u),
                      (this.customerNickname = i || o),
                      (this.countdown = Math.max(
                        Object(s.a)(t, "activityEndTime") -
                          new Date().getTime(),
                        0
                      )),
                      (this.items = O),
                      (this.loading = !1),
                      this.calSalesGoal(b, h, a, l, d, w),
                      this.getSharePic(O),
                      this.ctx.event.emit(
                        "setBuyAgainPath",
                        "/packages/groupbuying/buyer-trade/buying/index?headerBuyerId=" +
                          l +
                          "&alias=" +
                          w +
                          "&activityId=" +
                          d
                      );
                  })
                  .catch((e) => {
                    (this.hasError = !0), (this.loading = !1);
                  }));
            },
            getDefaultVal: (e, t) => (void 0 === e ? t : e),
            calSalesGoal(e, t, a, s, i, o) {
              var u = this.calType(e),
                h = this.calGoalNum(e, u),
                l = this.calFormatNum(u, h),
                d = this.calGoodsNum(t),
                c = this.calSavedMoney(t),
                g = n(c, !1),
                p = this.ctx.data.buyerId,
                N = Object(r.a)({}, this.shareData, {
                  title:
                    "我在团长【" +
                    a +
                    "】处团购了" +
                    d +
                    "件商品，" +
                    (c ? "省了" + g + "元，" : "") +
                    "快来参团吧",
                  path:
                    "/packages/groupbuying/buyer-trade/buying/index?headerBuyerId=" +
                    s +
                    "&alias=" +
                    o +
                    "&activityId=" +
                    i +
                    "&shareUid=" +
                    p,
                });
              (this.type = u),
                (this.goalNum = h),
                (this.showGoalNum = u && h),
                (this.unit = m[u]),
                (this.formatNum = l),
                (this.goodsNum = d),
                (this.savedMoney = c),
                (this.formatSavedMoney = g),
                (this.shareData = N);
            },
            calType(e) {
              var {
                lowestCustomerNum: t,
                lowestOrderNum: a,
                lowestOrderPay: r,
                lowestSalesNum: s,
              } = e;
              return [t, r, a, s].findIndex((e) => e) + 1;
            },
            calGoalNum(e, t) {
              var {
                lowestCustomerNum: a,
                lowestOrderNum: r,
                lowestOrderPay: s,
                lowestSalesNum: i,
                customerNum: o,
                orderNum: u,
                orderPay: m,
                salesNum: n,
              } = e;
              switch (t) {
                case h:
                  return Math.max(a - o, 0);
                case l:
                  return Math.max(s - m, 0);
                case d:
                  return Math.max(r - u, 0);
                case c:
                  return Math.max(i - n, 0);
                default:
                  return 0;
              }
            },
            calFormatNum: (e, t) => (e === l ? n(t, !0) : t),
            calGoodsNum: (e) =>
              e.reduce((e, t) => {
                var { num: a } = t;
                return e + a;
              }, 0),
            calSavedMoney: (e) =>
              e.reduce((e, t) => {
                var { num: a, price: r, markPrice: s } = t;
                return (s ? +s - r / 100 : 0) * a + e;
              }, 0),
            open() {
              (this.visible = !0), this.toggleDialog(!0);
            },
            close() {
              (this.visible = !1),
                this.toggleDialog(!1),
                this.ctx.event.emit("closeAutoOpenPopup");
            },
            updateShareData(e) {
              (this.shareData = e), (this.ctx.data.groupbuyShareData = e);
            },
            getSharePic(e) {
              var t = e;
              e.length > 3 && (t = e.slice(0, 3)),
                Object(u.default)({
                  method: "POST",
                  path: "/wscindustry/groupbuying/poster/shareCard.json",
                  data: {
                    items: t.map((e) => ({
                      price: "￥" + e.salesPrice,
                      imgUrl: o()(e.imgUrl, "!180x0.jpg"),
                    })),
                    title: "立即参团",
                    goodsNum: t.length,
                  },
                })
                  .then((e) => {
                    var t = Object(r.a)({}, this.shareData, { imageUrl: e });
                    this.updateShareData(t);
                  })
                  .catch(() => {});
            },
            openSharedPop() {
              (this.showShared = !0), this.close();
            },
            closeSharedPop() {
              this.showShared = !1;
            },
          },
          ud: !0,
        },
        p = a("9ZMt");
      t.default = p.default.component(g);
    },
  })
);
