"use strict";
var r = require("~/r");
r(
  "JqUD",
  Object.assign({}, require("~/v.js").modules, {
    JqUD: function (t, e, s) {
      s.r(e);
      var i = s("Fcif"),
        o = s("VNnE"),
        d = s("YeA1"),
        a = s("US/N"),
        c = s("lgMb"),
        h = s("taYb"),
        n = s("WKDq"),
        u = {
          mixins: [o.a],
          data: () => ({
            checkedGoodsList: [],
            show: !1,
            goodsList: [],
            activityId: 0,
            pickGoodsList: [],
            selectablePresentNum: 0,
            themeGeneralColor: "",
            initialShow: !1,
          }),
          computed: {
            checkedGoodsMap() {
              return this.checkedGoodsList.reduce(
                (t, e) => ((t[e.skuId] = e), t),
                {}
              );
            },
            disabledConfirm() {
              return this.checkedGoodsList.length > this.selectablePresentNum;
            },
            indexMap() {
              return this.goodsList.reduce((t, e, s) => {
                var { skuId: i } = e;
                return (t[i] = s), t;
              }, {});
            },
            wrapperStyle() {
              return (
                "bottom: " +
                this.popupBottom +
                "px; " +
                (this.safeBottom ? "padding-bottom: 34px;" : "")
              );
            },
          },
          watch: {
            pickGoodsList() {
              this.getCheckedGoodsList();
            },
            goodsList(t) {
              this.checkedGoodsList = this.checkedGoodsList.map(
                (e) => (
                  t.forEach((t) => {
                    t.id === e.id && (e = t);
                  }),
                  e
                )
              );
            },
            show: {
              handler(t) {
                t
                  ? (!this.initialShow && (this.initialShow = !0),
                    this.displayTimer && clearTimeout(this.displayTimer))
                  : (this.displayTimer = setTimeout(() => {
                      this.initialShow = !1;
                    }, 600));
              },
              immediate: !0,
            },
          },
          mounted() {
            this.subCtxDataAndEvent();
          },
          methods: {
            subCtxDataAndEvent() {
              Object(d.b)(this, {
                presentPopupInfo: (t) => {
                  var {
                    show: e,
                    goodsList: s,
                    activityId: i,
                    pickGoodsList: o,
                    selectablePresentNum: d,
                  } = t || {};
                  (this.show = e),
                    (this.goodsList = s),
                    (this.activityId = i),
                    (this.pickGoodsList = o),
                    (this.selectablePresentNum = d);
                },
                themeColors: (t) => {
                  var e = t.general;
                  this.themeGeneralColor = e;
                },
              }),
                Object(d.d)(this, {
                  "sku:selected": (t) => {
                    this.selectedSku = t;
                  },
                  "sku:custom": () => {
                    this.handleSkuChange(this.selectedSku),
                      this.ctx.event.emit("present-sku:changed", {
                        skuData: this.selectedSku,
                        activityId: this.activityId,
                      });
                  },
                  "present-sku:fetch": (t) => this.getPresentData(t),
                });
            },
            handleClose() {
              this.ctx.event.emit("presentPopupClose", { show: !1 });
            },
            getCheckedGoodsList() {
              this.checkedGoodsList = [...(this.pickGoodsList || [])].filter(
                (t) => !t.reason
              );
            },
            handleSkuChange(t) {
              var e = t.selectedSkuComb,
                s = this.ctx.data.presentGoodsId,
                i = (t) => (
                  t.id === s && ((t.sku = e.sku), (t.skuId = e.id)), t
                );
              (this.goodsList = this.goodsList.map(i)),
                (this.checkedGoodsList = this.checkedGoodsList.map(i)),
                this.ctx.event.emit("present-sku:afterSubmit");
            },
            handleCheckedGoods(t) {
              var { goods: e, type: s } = t,
                { checkedGoodsList: i } = this;
              if ("add" === s)
                i.push(e),
                  (i = i.sort(
                    (t, e) => this.indexMap[t.skuId] - this.indexMap[e.skuId]
                  ));
              else {
                var o = -1;
                for (var d of i)
                  if ((o++, d.skuId === e.skuId)) {
                    i.splice(o, 1);
                    break;
                  }
              }
              this.checkedGoodsList = [...i];
            },
            handleChangeSku(t) {
              var e, s;
              this.ctx.data.presentGoodsId = t.goods.id;
              var o = Object(i.a)({}, t, {
                goods: Object(i.a)({}, t.goods, {
                  presentSkuList:
                    (null == (e = t.goods) ? void 0 : e.goodsSkuInfoList) ||
                    (null == (s = t.goods) ? void 0 : s.presentSkuList) ||
                    [],
                }),
              });
              this.getPresentData(o);
            },
            getPresentData(t) {
              var { goods: e = {} } = t,
                { alias: s = "", presentSkuList: o = [], skuId: d } = e,
                u = Object(n.a)() || 0;
              Object(a.requestV2)({
                origin: "cashier",
                withCredentials: !0,
                method: "GET",
                path: "/wsctrade/fetch-sku.json",
                data: { alias: s, offlineId: u },
              })
                .then((t) => h.a.toCamelCase(t))
                .then((t) => {
                  var s, a;
                  o.length &&
                    ((t.list = t.list.map(
                      (t) => (
                        o.some(
                          (e) =>
                            e.skuId === t.id && ((t.stockNum = e.stockNum), !0)
                        ) || (t.stockNum = 0),
                        (t.price = 0),
                        t
                      )
                    )),
                    (t.stockNum = o.reduce((t, e) => t + e.stockNum, 0)));
                  var c = o.find((t) => t.skuId === d) || {},
                    h =
                      null !=
                      (s =
                        null == (a = t.list)
                          ? void 0
                          : a.find((t) => t.id === c.skuId))
                        ? s
                        : {};
                  (t.messages = []),
                    (t.limit = { quota: 1 }),
                    this.ctx.process.invoke("setSkuInfo", {
                      sku: t,
                      goods: Object(i.a)({}, e, {
                        picture: e.attachmentUrl || e.imgUrl,
                      }),
                      price: 0,
                      skuConfig: { customBtnText: "完成", skuScene: "custom" },
                      initialSku: Object(i.a)({}, h, { selectedNum: 1 }),
                      event: {
                        skuScene: "custom",
                        submitAction: "custom",
                        skuOptions: { resetSku: !0 },
                      },
                      goodsAttributes: { reset: !0 },
                    });
                })
                .catch((t) => {
                  Object(c.b)(t, { message: "商品信息获取失败，请稍后重试" });
                });
            },
            handleConfirm() {
              this.disabledConfirm ||
                (this.ctx.event.emit("presentPopupConfirm", {
                  goodsList: this.checkedGoodsList,
                  activityId: this.activityId,
                  selectablePresentNum: this.selectablePresentNum,
                }),
                this.handleClose());
            },
          },
          ud: !0,
        },
        r = s("9ZMt");
      e.default = r.default.component(u);
    },
    VNnE: function (t, e, s) {
      var i = getApp();
      e.a = {
        data: function () {
          return {
            popupBottom: 0,
            noSafeBottom: 0,
            safeBottom: "iPhone-X" === i.deviceType,
          };
        },
        beforeMount: function () {
          var t = this;
          i.isSwitchTab().then(function (e) {
            e &&
              ((t.popupBottom = 49), (t.noSafeBottom = t.safeBottom ? 83 : 49));
          });
        },
      };
    },
  })
);
