"use strict";
var r = require("~/r");
r(
  "smKi",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    smKi: function (t, e, a) {
      a.r(e);
      var i = a("qJXH"),
        s = a("xyw3"),
        o = a("RY8z"),
        r = a("taYb"),
        n = getApp(),
        l = "packages";
      Object(i.b)({
        data: {
          messages: "",
          totoalPrice: 0,
          allGiftNum: 0,
          goodsList: [],
          invalidGoodsList: [],
          couponList: [],
          isFetching: !0,
          showAllCartGoods: !1,
          anonymous: !1,
          longScreen: !1,
          gameType: 1,
          lotteryTime: 0,
          lotteryTimeStr: "",
          timePickerRange: [],
          defaultPickerValue: [],
        },
        onLoad() {
          wx.getStorage({
            key: "gift-cart-anonymous",
            success: (t) => {
              this.setYZData({ anonymous: t.data });
            },
          }),
            wx.getStorage({
              key: "gift-play-type",
              success: (t) => {
                this.setYZData({ gameType: t.data });
              },
            }),
            this.initGiftCart(),
            this.initPicker(),
            wx.getSystemInfo({
              success: (t) => {
                t.screenHeight > 667 && this.setYZData({ longScreen: !0 });
              },
            });
        },
        onShow() {
          this.initGiftCart();
        },
        onShareAppMessage: () => ({
          title: "微信送礼，传达心意",
          path: l + "/ump/gift/cart/index",
        }),
        initGiftCart() {
          n.getShopConfigData()
            .then((t) => {
              if (0 == +t.gift_plug_status)
                return wx.showModal(
                  {
                    content: "送礼活动已结束",
                    showCancel: !1,
                    confirmText: "返回",
                  },
                  () => wx.navigateBack()
                );
              wx.showLoading({ title: "加载中" }),
                this.fetchGiftCartData()
                  .then((t) => {
                    var {
                      goodsList: e,
                      giftActivityInfo: a,
                      invalidGoodsList: i,
                    } = t;
                    if (!a.enabled)
                      return wx.showModal(
                        {
                          content: "送礼活动已结束",
                          showCancel: !1,
                          confirmText: "返回",
                        },
                        () => wx.navigateBack()
                      );
                    wx.hideLoading(),
                      this.setYZData({
                        goodsList: e,
                        invalidGoodsList: i,
                        giftActivityInfo: a,
                        isFetching: !1,
                      }),
                      this.updateTotalPrice();
                  })
                  .catch((t) => {
                    wx.showToast({
                      title: t.msg || "加载购物车数据失败，请刷新重试",
                      icon: "none",
                    });
                  });
            })
            .catch(() => {
              wx.showToast({
                title: "获取店铺送礼插件配置失败，请重试",
                icon: "none",
              });
            });
        },
        initPicker() {
          var t = Date.now() + 12e5,
            e = this._parseDateStr(t),
            a = this._parseDateStr(Date.now() + 864e5),
            i = [[e[0], a[0]], this._hoursRange(0), this._minutesRange(0)],
            s = this._parseDateToPicker(t),
            o = e.join(" ");
          wx.getStorage({
            key: "gift-play-time",
            success: (e) => {
              this.checkLotteryTimeValid(e.data) &&
                ((s = this._parseDateToPicker(e.data)),
                (o = this._parseDateStr(e.data).join(" ")),
                (t = e.data),
                this.setYZData({
                  defaultPickerValue: s,
                  lotteryTimeStr: o,
                  lotteryTime: t,
                }));
            },
            fail: (t) => {},
          }),
            this.setYZData({
              timePickerRange: i,
              defaultPickerValue: s,
              lotteryTime: t,
              lotteryTimeStr: o,
            });
        },
        handlePickGoodsClick() {
          wx.redirectTo({
            url:
              "/" +
              l +
              "/ump/gift/goods-list/index?alias=" +
              this.data.giftActivityInfo.alias,
          });
        },
        handleUsingTipsClick() {
          o.a.navigate({
            url: "/" + l + "/ump/gift/using-tips/instructions/index",
          });
        },
        handleUsingRulesClick() {
          o.a.navigate({ url: "/" + l + "/ump/gift/using-tips/rules/index" });
        },
        fetchGiftCartData() {
          return new Promise((t, e) => {
            n.request({
              path: "wscump/gift/giftcart.json",
              success: (e) => {
                var { cartGoodsList: a = {}, giftActivityInfo: i } =
                    r.a.toCamelCase(e),
                  s = this._mapCartGoods(a.items || []),
                  o = this._mapCartGoods(a.unavailableItems || [], !0);
                t({ goodsList: s, invalidGoodsList: o, giftActivityInfo: i });
              },
              fail: (t) => {
                e(t);
              },
            }).catch((t) => {
              e(t);
            });
          });
        },
        updateGiftCartData: (t) =>
          new Promise((e, a) => {
            var { goodsId: i, skuId: s, num: o } = t;
            n.request({
              path: "wscump/gift/updategiftcart.json",
              data: { goodsId: i, skuId: s, num: o },
              success: (t) => {
                e(t);
              },
              fail: (t) => {
                a(t);
              },
            }).catch((t) => {
              a(t);
            });
          }),
        handleGoodsChange(t) {
          var { detail: e, currentTarget: a } = t,
            i = a.dataset.index,
            s = this.data.goodsList[i];
          s.num !== e &&
            ((s.num = e),
            0 === e
              ? this.deleteCartGoods([s]).then((t) => {
                  if (t) {
                    var e = this.data.goodsList;
                    e.splice(i, 1),
                      this.setYZData({ goodsList: e }),
                      this.updateTotalPrice();
                  } else
                    wx.showToast({
                      title: "删除商品失败，请重试",
                      icon: "none",
                    });
                })
              : this.updateGiftCartData(s).then(() => {
                  this.setYZData({ ["goodsList[" + i + "].num"]: e }),
                    this.updateTotalPrice();
                }));
        },
        deleteCartGoods: (t) =>
          new Promise((e, a) => {
            n.request({
              path: "wscump/gift/deletecartgoods.json",
              data: { goodsList: JSON.stringify(t) },
              success: (t) => {
                e(t);
              },
              fail: (t) => {
                a(t);
              },
            }).catch((t) => {
              a(t);
            });
          }),
        goPay() {
          var { gameType: t, lotteryTime: e, anonymous: a } = this.data;
          if (2 === t && !this.checkLotteryTimeValid(e)) {
            var i =
              e - Date.now() > 6e5
                ? "选择时间需要在24小时内"
                : "选择时间需要在当前10分钟后";
            return wx.showModal({
              content: i + ", 请调整开奖时间",
              showCancel: !1,
              confirmText: "确定",
            });
          }
          var s = this.data.goodsList.map((t) => {
            var e = "";
            try {
              e = JSON.parse(t.extraAttribute || "{}").bizData || "";
            } catch (t) {}
            return {
              activityAlias: "",
              activityId: 0,
              activityType: 0,
              message: "",
              num: t.num,
              price: t.payPrice,
              skuId: t.skuId,
              goodsId: t.goodsId,
              kdtId: n.getKdtId(),
              bizTracePointExt: e,
            };
          });
          if (s.length) {
            var r = n.db.set({
              type: "goods",
              goods_list: s,
              giftInfo: {
                giftOrder: !0,
                alias: this.data.giftActivityInfo.alias,
                senderMessage:
                  this.data.message || this.data.giftActivityInfo.defaultPrompt,
                anonymous: a,
                activityType: 1 === t ? "FIFA" : "TIME_LOTTERY",
                lotteryTime: e,
              },
            });
            wx.setStorage({ key: "gift-cart-anonymous", data: !1 }),
              o.a.navigate({
                url: "/" + l + "/order/index?orderFrom=cart&dbid=" + r,
              });
          }
        },
        _mapCartGoods(t, e) {
          return (
            void 0 === e && (e = !1),
            t.length
              ? t.map((t) => {
                  var {
                    title: a,
                    alias: i,
                    goodsId: o,
                    limitNum: r,
                    payPrice: n,
                    stockNum: l,
                    skuId: d,
                    num: c,
                    sku: g,
                    ext: h,
                  } = t;
                  return {
                    maxNum: r ? Math.min(r, l) : l,
                    imgUrl: t.thumbUrl,
                    payPrice: n,
                    price: Object(s.a)(n).toYuan(),
                    skuStr: this._getSkuStr(g),
                    alias: i,
                    goodsId: o,
                    skuId: d,
                    limitNum: r,
                    stockNum: l,
                    title: a,
                    num: c,
                    extraAttribute: h,
                    invalid: e,
                    errorMsg: t.errorMsg || "",
                  };
                })
              : []
          );
        },
        _getSkuStr: (t) => (JSON.parse(t) || []).map((t) => t.v).join("，"),
        updateTotalPrice() {
          var t = this.data.goodsList.reduce(
              (t, e) => ({
                totalPrice: t.totalPrice + e.payPrice * e.num,
                allGiftNum: t.allGiftNum + e.num,
              }),
              { totalPrice: 0, allGiftNum: 0 }
            ),
            e = Object(s.a)(t.totalPrice).toYuan();
          this.setYZData({
            totalPrice: t.totalPrice,
            allGiftNum: t.allGiftNum,
            totalPriceStr: e,
          });
        },
        handleshowAllCartGoods() {
          var t = !this.data.showAllCartGoods;
          this.setYZData({ showAllCartGoods: t });
        },
        handleCheckboxClick() {
          var { anonymous: t } = this.data;
          this.setYZData({ anonymous: !t }),
            wx.setStorage({ key: "gift-cart-anonymous", data: !t });
        },
        handleTextareaInput(t) {
          var { detail: e } = t;
          this.setYZData({ message: e.value });
        },
        handleTextareaFocus() {
          var t = wx.createSelectorQuery();
          t.select(".gift-cart__message-textarea").boundingClientRect(),
            t.selectViewport().scrollOffset(),
            t.exec((t) => {
              var e = t[0].top + t[1].scrollTop;
              wx.pageScrollTo({ scrollTop: e, duration: 0 });
            });
        },
        clearInvalidGoods() {
          this.deleteCartGoods(this.data.invalidGoodsList)
            .then((t) => {
              t
                ? this.setYZData({ invalidGoodsList: [] })
                : wx.showToast({
                    title: "删除失效商品失败，请重试",
                    icon: "none",
                  });
            })
            .catch((t) => {
              wx.showToast({
                title: t.msg || "删除失效商品失败，请重试",
                icon: "none",
              });
            });
        },
        handleGiftListClick() {
          o.a.navigate({ url: "/" + l + "/ump/gift/gift-list/index" });
        },
        handlePickerTimeChange(t) {
          var { detail: e } = t,
            a = e.value,
            i = this._parsePickerToDate(a);
          if (this.checkLotteryTimeValid(i.date))
            this.setYZData({ lotteryTime: i.date, lotteryTimeStr: i.dateStr }),
              wx.setStorage({ key: "gift-play-time", data: i.date });
          else {
            var s =
              i.date > Date.now() + 6e5
                ? "开奖时间应当在24小时内"
                : "开奖时间需在当前时间10分钟后";
            wx.showModal({
              title: "请选择正确开奖时间",
              content: s,
              showCancel: !1,
            });
          }
        },
        checkLotteryTimeValid: (t) =>
          t > Date.now() + 6e5 && t < new Date(Date.now() + 864e5).getTime(),
        changeGameType() {
          var { gameType: t } = this.data,
            e = 1 === t ? 2 : 1;
          this.setYZData({ gameType: e }),
            wx.setStorage({ key: "gift-play-type", data: e });
        },
        _parseDateStr(t) {
          var e = new Date(t),
            a = e.getMonth() + 1,
            i = e.getDate(),
            s = ["日", "一", "二", "三", "四", "五", "六"][e.getDay()],
            o = e.getHours(),
            r = e.getMinutes();
          return [
            a + "月" + i + "日 周" + s,
            this._leftPad(o) + ":" + this._leftPad(r),
          ];
        },
        _parseDateToPicker(t) {
          var e = new Date(t);
          return [
            e.toDateString() === new Date(Date.now()).toDateString() ? 0 : 1,
            e.getHours(),
            e.getMinutes(),
          ];
        },
        _parsePickerToDate(t) {
          var e = 0 === t[0],
            a = new Date(Date.now()),
            i = new Date(Date.now() + 864e5),
            s = e ? a.getFullYear() : i.getFullYear(),
            o = e ? a.getMonth() : i.getMonth(),
            r = e ? a.getDate() : i.getDate(),
            n = t[1],
            l = t[2],
            d =
              s +
              "-" +
              this._leftPad(o + 1) +
              "-" +
              this._leftPad(r) +
              " " +
              this._leftPad(n) +
              ":" +
              this._leftPad(l),
            c = new Date(d.replace(/-/g, "/")).getTime();
          return { date: c, dateStr: this._parseDateStr(c).join(" ") };
        },
        _leftPad: (t) => (t < 10 ? "0" + t : "" + t),
        _hoursRange(t) {
          for (var e = [], a = t; a <= 23; a++) {
            var i = this._leftPad(a) + "时";
            e.push(i);
          }
          return e;
        },
        _minutesRange(t) {
          for (var e = [], a = t; a <= 59; a++) {
            var i = this._leftPad(a) + "分";
            e.push(i);
          }
          return e;
        },
      });
    },
  })
);
