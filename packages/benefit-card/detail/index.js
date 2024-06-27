"use strict";
var r = require("~/r");
r(
  "0Z2K",
  Object.assign(
    {},
    require("../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "04fg": function (e, t, a) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getRoot = function () {
            if ("undefined" != typeof window) return window;
            return { localStorage: null };
          }),
          (t.getStorage = function (e) {
            if ("undefined" != typeof window)
              return window.localStorage.getItem(e);
            if ("undefined" != typeof wx && wx.getStorageSync)
              return wx.getStorageSync(e);
            return null;
          }),
          (t.setStorage = function (e, t) {
            if ("undefined" != typeof window)
              return window.localStorage.setItem(e, t);
            if ("undefined" != typeof wx && wx.setStorageSync)
              return wx.setStorageSync(e, t);
            return null;
          });
      },
      "0Z2K": function (e, t, a) {
        a.r(t);
        var r = a("Fcif"),
          n = a("qJXH"),
          o = a("a1Mm"),
          i = a("2wjL"),
          c = a("zMoS"),
          s = a("Yt9W"),
          u = a("xyw3"),
          d = a("9hl2"),
          p = a("MLLI"),
          l = a("/1Zb"),
          f = a("Mcke"),
          g = a("Qu2e"),
          h = a("Sei9"),
          b = a("gc3r"),
          v = a("9KEa"),
          y = a("1j9u"),
          m = a.n(y),
          O = a("sM0J"),
          w = (a("XaDY"), a("zZvV")),
          k = a("6i0Q"),
          j = {},
          x = getApp();
        Object(n.b)(w.a, j, {
          data: {
            isIphoneX: (function () {
              var { model: e } = Object(p.b)();
              return Object(h.a)(e);
            })(),
            exType: g.d,
            navigationbarConfigData: {
              origin_immersion: !0,
              navigationbar_type: "immersion",
            },
            alias: "",
            shopName: "",
            benefitBag: {},
            hasCard: !1,
            cardType: g.j,
            loading: !1,
            servicePhone: "",
            cardGoods: {},
            salesmanCubeGoodsInfo: {},
            cardNo: "",
            cardInfo: {},
            isNeedWillRenew: !1,
            cardTplInfo: {},
            isRenewable: !1,
            price: 0,
            subType: g.e,
            activationCondition: {},
            syncWeixin: !1,
            cardSyncInfo: {},
            salesman: {},
            isShareable: !1,
            expireTip: "",
            cardStyle: { bgColor: "", imageUrl: "" },
            coverUrl: "",
            showMore: !1,
            isExpired: !1,
            isSoldOut: !1,
            goodsId: 0,
            sourceGoodsId: 0,
            isDisplay: !1,
            maiDianData: {},
            presentDialogVisible: !1,
            shopList: [],
            actionSheetVisible: !1,
            isRootShop: !0,
            isChainStore: !1,
            isChainHqStore: !1,
            isPartnerStore: !1,
            tradeNo: "",
            hasFetchedChainShopInfo: !1,
            isSupportRecommendGoods: !1,
            spmId: "",
            needMobile: !1,
            activated: !1,
            cardWrapperStyle: { width: "686rpx", height: "360rpx" },
            isCurrentShopAvailable: !1,
            availableTips: "",
            design: [],
            cardName: "",
            cardExpire: null,
            topCardExpire: "",
            themeColors: {},
            statusH: v.a.statusBarHeight,
          },
          onLoad(e) {
            Object(O.b)(this),
              this.initDesignConfig(),
              (this.query = e),
              b.a.call(this, { scene: "benefit_card", sst: 4 }),
              Object(l.a)(e, this.__route__)
                .then(() => {
                  this.handleOnLoad(e);
                })
                .catch(() => {
                  this.handleOnLoad(e);
                });
            var t = this;
            wx.getSystemInfo({
              success(e) {
                var { windowWidth: a } = e,
                  r = a - 48,
                  n = (184 * r) / 327;
                t.setYZData({
                  cardWrapperStyle: { width: r + "px", height: n + "px" },
                });
              },
            }),
              k.a.getTheme().then((e) => {
                this.setYZData({ themeColors: e.colors });
              });
          },
          initDesignConfig() {
            var { design: e } = m.a,
              t = m.a.design.findIndex((e) => "config" === e.type);
            this.setYZData({ design: 0 === t ? e.slice(1) : e });
          },
          initShopInfo() {
            return x
              .getShopInfo()
              .then((e) => {
                var { shopMetaInfo: t = {} } = e,
                  a = Object(c.a)(e, "chainStoreInfo.isChainStore", !1);
                this.setYZData({
                  shopName: e.shop_name,
                  isRootShop: Object(c.a)(e, "chainStoreInfo.isRootShop", !1),
                  isChainStore: a,
                  isChainHqStore:
                    a && Object(c.a)(e, "chainStoreInfo.isRootShop", !1),
                  hasFetchedChainShopInfo: !0,
                  isUnitedHqStore: Object(c.a)(
                    e,
                    "chainStoreInfo.isUnitedHqStore"
                  ),
                  isPartnerStore: Object(d.b)(t),
                });
              })
              .catch(() => {
                this.setYZData({ hasFetchedChainShopInfo: !0 });
              });
          },
          handleOnLoad(e) {
            var {
                alias: t = "",
                goods_id: a = "",
                orderNo: r = "",
                from: n = "",
              } = e,
              o = Object(h.e)(e);
            (this.kdtId = x.getKdtId()),
              this.setYZData({
                alias: t,
                goodsId: a,
                maiDianData: o,
                orderNo: r,
                from: n,
              }),
              x.getUserInfo((e) => {
                this.setYZData({ userInfo: e.userInfo });
              }),
              this.initShopInfo(),
              this.initData(g.h).then(() => {
                this.trigger("quanyika:loaded");
              });
          },
          onRenew() {
            this.handleOpenSelectShop("renewal");
          },
          onPullDownRefresh() {
            this.initData();
          },
          onBtnAction(e) {
            var { action: t, bindPhone: a } = e.detail;
            a && this.setYZData({ hasMobile: a }),
              "buyCard" !== t && "renewal" !== t
                ? this[t] && this[t]()
                : this.handleOpenSelectShop(t);
          },
          getCardExpire(e, t) {
            var a = Object(c.a)(e, "cardTemplateDTO.lifeTime", {}),
              { termType: r, termBeginAt: n, termDays: o, termEndAt: i } = a;
            if (t && 0 === e.termEndAt) return { type: "normal", text: "永久" };
            switch (r) {
              case g.a:
                return {
                  type: "inverval",
                  text: Object(h.c)(n) + " 至 " + Object(h.c)(i),
                };
              case g.f:
                return { type: "normal", text: o + "天" };
              case g.g:
                return { type: "normal", text: "永久" };
              default:
                return null;
            }
          },
          compCardExpire(e, t) {
            if (!e) return "";
            var { type: a, text: r } = e || {};
            return "inverval" === a
              ? ""
              : "normal" === a
              ? t
                ? { type: 1, val: r }
                : { val: "有效期：" + r }
              : void 0;
          },
          fetchCardTplInfo(e) {
            return x
              .request({
                path: "/wscuser/scrm/api/benefitcard/getCardTemplate.json",
                data: {
                  cardAlias: this.data.alias,
                  goodsId: this.data.goodsId,
                  tradeNo: this.data.orderNo,
                  isNewVersionApp: 1,
                  skp: 1,
                },
              })
              .then((t) => {
                if ((wx.stopPullDownRefresh(), t.cardTemplateDTO)) {
                  var a = Object(c.a)(t, "cardTemplateDTO.name", ""),
                    {
                      subType: r = g.e,
                      activated: n = !1,
                      syncWeixin: i = !1,
                      hasCard: s = !1,
                    } = t,
                    d = Object(c.a)(t, "cardTemplateDTO", {}),
                    p = d.cardAcquireSetting;
                  s ||
                    "member-card-groupon" === this.data.from ||
                    p !== g.k ||
                    this.checkGrouponJump(t);
                  var l = Object(c.a)(t, "cardTemplateDTO.isNeedWillRenew", !1);
                  this.checkShowPresentDialog(t, e);
                  var f = d.benefitBag || {},
                    h = Object(c.a)(f, "experienceCard.stockNum", 0),
                    b = Object(c.a)(d, "cardSyncInfo", {}),
                    v = Object(c.a)(d, "isShareable", !1),
                    y = Object(u.a)(
                      Object(c.a)(d, "cardGoods.skuList[0].price", 0)
                    ).toYuan(),
                    m = Object(c.a)(d, "cardGoods.isDisplay", !1),
                    O = this.getIsRenewable(s, d),
                    w = Object(c.a)(d, "activationCondition", {}),
                    k = this.getColorCode(d.colorCode || "Color200"),
                    j = (Object(o.a)(d.coverUrl) || "").replace(
                      /yzcdn\.cn\/\//g,
                      "yzcdn.cn/"
                    ),
                    x = this.getIsExpires(s, t),
                    _ = Object(c.a)(d, "cardTplAlias", "");
                  v && r !== g.d
                    ? wx.showShareMenu({ withShareTicket: !0 })
                    : wx.hideShareMenu();
                  var S = this.formatCardGoods(d.cardGoods),
                    C = this.formatCardGoods(d.cardGoodsSource),
                    T = Object(c.a)(d, "availableKdtIdList", []),
                    P = Object(c.a)(d, "isCurrentShopAvailable", !1),
                    D = "";
                  !P &&
                    T.length > 0 &&
                    (D = "本店不适用，其他" + T.length + "家店铺可用");
                  var I = this.getCardExpire(t, s),
                    E = "0.00" === y ? "" : "￥" + y;
                  return (
                    this.setYZData({
                      cardName: a,
                      isShareable: v,
                      hasCard: s,
                      cardType: p,
                      cardTplInfo: d,
                      cardInfo: t,
                      isNeedWillRenew: l,
                      benefitBag: f,
                      servicePhone: d.servicePhone,
                      cardGoods: S,
                      salesmanCubeGoodsInfo: {
                        id: C.goodsId,
                        goodsPrice: { maxPrice: C.maxPrice },
                      },
                      cardNo: t.cardNo || "",
                      subType: r,
                      isRenewable: O,
                      stockNum: h,
                      price: E,
                      activationCondition: w,
                      activated: n,
                      syncWeixin: i,
                      cardSyncInfo: b,
                      cardStyle: this.getCardStyle(k, j),
                      coverUrl: j,
                      isSoldOut: this.checkIsSoldOut(d),
                      isEnabled: d.enabled,
                      isDisplay: m,
                      isExpired: x,
                      loading: !1,
                      alias: _,
                      spmId: Object(c.a)(
                        d,
                        "cardGoods.goodsId",
                        Object(c.a)(d, "cardTplId")
                      ),
                      needMobile: w.requireMobile,
                      availableTips: D,
                      isCurrentShopAvailable: P,
                      cardExpire: I,
                      topCardExpire: this.compCardExpire(I, E),
                    }),
                    p === g.k && this.searchCardSellShop(),
                    t
                  );
                }
                this.setYZData({ loading: !1 });
              })
              .then((e) => {
                this.trigger("updateCardInfo", e), this.handleQrcodeLogger(e);
              })
              .catch((e) => {
                wx.stopPullDownRefresh(),
                  wx.showToast({ title: e.msg, icon: "none", duration: 1e3 }),
                  this.setYZData({ benefitList: [], hasCard: !1, loading: !1 });
              });
          },
          formatCardGoods(e) {
            var t = {};
            return (
              e &&
                (t = Object.assign({}, e, {
                  maxPrice:
                    "" +
                    Math.max.apply(
                      null,
                      e.skuList.map((e) => e.price)
                    ),
                })),
              t
            );
          },
          checkExpireWithoutCard(e) {
            var { termType: t = g.g, termEndAt: a = 0 } = Object(c.a)(
              e,
              "cardTemplateDTO.lifeTime"
            );
            switch (t) {
              case g.g:
                return !1;
              case g.a:
                var r = new Date().getTime();
                return a > 0 && a < r;
              case g.f:
              default:
                return !1;
            }
          },
          checkExpireHasCard(e) {
            var t = Object(c.a)(e, "termEndAt"),
              a = new Date().getTime();
            return t > 0 && t < a;
          },
          getIsExpires(e, t) {
            return e
              ? this.checkExpireHasCard(t)
              : this.checkExpireWithoutCard(t);
          },
          getIsRenewable(e, t) {
            var a = Object(c.a)(t, "enabled", !1);
            return (
              e &&
              a &&
              t.isRenewable &&
              t.isCurrentShopAvailable &&
              t.cardGoods &&
              t.cardGoods.isDisplay &&
              t.cardGoods.skuList.length > 0 &&
              t.cardGoods.skuList[0].stock > 0
            );
          },
          getCardStyle: (e, t) =>
            t
              ? { imageUrl: "url(" + t + ")" }
              : {
                  bgColor: g.i[e] ? g.i[e].bgColor : "",
                  imageUrl: g.i[e] ? "url(" + g.i[e].imageUrl + ")" : "",
                },
          getColorCode: (e) => g.c[e] || e,
          initData(e) {
            var t = !!x.getBuyerId();
            return (
              this.setYZData({ loading: !0, hasMobile: t }),
              this.fetchCardTplInfo(e)
            );
          },
          navigateTo(e) {
            var { nav: t } = e.currentTarget.dataset;
            "home" === t
              ? wx.reLaunch({ url: "/packages/home/dashboard/index" })
              : wx.navigateTo({
                  url:
                    "/packages/benefit-card/intro/index?card_alias=" +
                    this.data.alias,
                });
          },
          takeCall() {
            this.data.servicePhone &&
              wx.makePhoneCall({ phoneNumber: this.data.servicePhone });
          },
          activate() {
            this.data.hasMobile && this.activateReal();
          },
          activateReal() {
            Object(c.a)(
              this.data.cardTplInfo,
              "activationCondition.requireProfile",
              !0
            )
              ? wx.navigateTo({
                  url: Object(f.c)(
                    "/packages/benefit-card/active/index?card_no=" +
                      this.data.cardNo +
                      "&alias=" +
                      this.data.alias +
                      "&sub_type=" +
                      this.data.subType,
                    this.query
                  ),
                })
              : (wx.showLoading({ title: "请求中" }), this.takeAndActivate());
          },
          takeAndActivate() {
            var { cardType: e } = this.data,
              t = { cardAlias: this.data.alias },
              a = "GET",
              r = "/wscuser/scrm/api/benefitcard/take.json";
            (e !== g.l && e !== g.k) ||
              ((t.cardNo = this.data.cardNo),
              (a = "PUT"),
              (r = "/wscuser/scrm/api/benefitcard/activate.json")),
              x
                .request({ path: r, data: t, method: a })
                .then(() => {
                  e === g.j
                    ? wx.navigateTo({
                        url: Object(f.c)(
                          i.a.add("/packages/benefit-card/result/index", {
                            card_no: this.data.cardNo,
                            alias: this.data.alias,
                            from: "take",
                            card: JSON.stringify({}),
                          }),
                          this.query
                        ),
                      })
                    : (wx.showToast({
                        title: "激活成功",
                        icon: "none",
                        duration: 1e3,
                      }),
                      this.fetchCardTplInfo());
                })
                .catch((e) => {
                  wx.hideLoading(),
                    wx.showToast({ title: e.msg, icon: "none", duration: 1e3 });
                });
          },
          removeCard() {
            wx.showModal({
              title: "删除会员卡",
              content: "删除后，你将不再享受相应的会员权益。确定要删除吗？",
              success: (e) => {
                e.confirm
                  ? (wx.showLoading({ title: "请求中" }),
                    x
                      .request({
                        path: "/wscuser/scrm/api/benefitcard/remove.json",
                        method: "DELETE",
                        data: { cardNo: this.data.cardNo },
                      })
                      .then(() => {
                        wx.hideLoading(),
                          wx.navigateTo({
                            url: "/packages/benefit-card/list/index",
                          });
                      })
                      .catch((e) => {
                        wx.hideLoading(),
                          wx.showToast({
                            title: e.msg,
                            icon: "none",
                            duration: 1e3,
                          });
                      }))
                  : e.cancel;
              },
            });
          },
          onShareAppMessage(e) {
            var { from: t, target: a = {} } = e;
            if ("button" === t && "share" === a.id) {
              var r = this.getCardDescp();
              return {
                title:
                  "送你一张" +
                  Object(c.a)(this, "data.shopName", "") +
                  "的体验卡",
                path:
                  "/packages/benefit-card/take/index?alias=" +
                  Object(c.a)(this, "data.alias") +
                  "&card_no=" +
                  Object(c.a)(this, "data.cardNo"),
                imageUrl: g.n,
                desc: r,
              };
            }
            var n =
                "/packages/benefit-card/detail/index?alias=" + this.data.alias,
              o = "分享你一张" + this.data.shopName + "的权益卡",
              i = this.getCardDescp();
            return s.b.processShareData({
              title: o,
              path: n,
              imageUrl: g.n,
              desc: i,
            });
          },
          getCardDescp() {
            return Object(h.b)(this.data.benefitBag, this.data.subType)
              .map((e) => e.label)
              .join(",");
          },
          checkIsSoldOut: (e) =>
            Object(c.a)(e, "cardAcquireSetting", g.j) === g.k &&
            Object(c.a)(e, "cardGoods.skuList[0].stock", 0) <= 0,
          checkGrouponJump(e) {
            if (e.cardTemplateDTO) {
              var t = Object(c.a)(e, "cardTemplateDTO.cardGoods.goodsId", 0);
              x.request({
                path: "/wscuser/membercard/groupon/getGroupOnForMemberCard.json",
                data: { goodsId: t },
                success: (t) => {
                  var { status: a, activityAlias: r, activityType: n = 4 } = t;
                  if (2 !== a || e.hasCard) this.setYZData({ loading: !1 });
                  else {
                    var o = "&activity_type=" + n;
                    wx.redirectTo({
                      url:
                        "/packages/ump/membercard-groupon/index?cardAlias=" +
                        this.data.alias +
                        "&ump_alias=" +
                        r +
                        "&ump_type=groupOn" +
                        o,
                    });
                  }
                },
              }).catch(() => {
                this.setYZData({ loading: !1 }), wx.hideLoading();
              });
            } else this.setYZData({ loading: !1 });
          },
          buyCard(e) {
            if (8 === this.data.cardType) {
              var t = Object(c.a)(this.data.cardGoods, "skuList", {}),
                a = Object(c.a)(this.data, "cardGoods.goodsId", 0);
              if (!t || !t.length)
                return wx.showToast({
                  title: "该权益卡暂不支持购买",
                  icon: "none",
                  duration: 1e3,
                });
              this.setYZData({ actionSheetVisible: !1 }),
                wx.showLoading({ title: "正在跳转", mask: !0 });
              var n = this.kdtId,
                o = n;
              if (
                (e && e.kdtId && (o = e.kdtId),
                this.checkIsNeedTranslateGoodsId())
              )
                x.request({
                  path: "/wscuser/scrm/api/benefitcard/getOriginGoodsId.json",
                  data: { kdtId: o, goodsId: a, sourceKdtId: n },
                })
                  .then((e) => {
                    var a = Object(r.a)(
                      {
                        goods_id: e.originGoodsId,
                        num: 1,
                        sku_id: Object(c.a)(e, "originSkuId[0]"),
                        price: t[0].price,
                      },
                      this.data.maiDianData
                    );
                    this.getCacheJson(a, o);
                  })
                  .catch((e) => {
                    wx.hideLoading(),
                      wx.showToast({
                        title: e.msg,
                        icon: "none",
                        duration: 1e3,
                      });
                  });
              else {
                var i = Object(r.a)(
                  {
                    goods_id: a,
                    num: 1,
                    sku_id: t[0].goodsSkuId,
                    price: t[0].price,
                  },
                  this.data.maiDianData
                );
                this.getCacheJson(i, o);
              }
            }
          },
          checkIsNeedTranslateGoodsId() {
            return (
              !(this.data.isUnitedHqStore || !this.data.isChainStore) &&
              (this.data.isChainHqStore ||
                this.data.isPartnerStore ||
                this.isRenew)
            );
          },
          getCacheJson(e, t) {
            var a = {
              postage: 0,
              use_wxpay: 1,
              accept_price: 1,
              order_from: "membercard",
              kdt_id: t,
              store_id: x.getOfflineId() || 0,
              is_new_version: !0,
            };
            x.request({
              path: "/wsctrade/order/goodsBook.json",
              data: {
                goodsList: JSON.stringify([e]),
                common: JSON.stringify(a),
              },
              method: "POST",
            })
              .then((e) => {
                var { bookKey: t } = e;
                wx.hideLoading(),
                  Object(f.h)(this.query),
                  wx.navigateTo({
                    url:
                      "/packages/order/index?orderFrom=membercard&bookKey=" + t,
                  });
              })
              .catch((e) => {
                wx.hideLoading(),
                  wx.showToast({ title: e.msg, icon: "none", duration: 1e3 });
              });
          },
          takeCard() {
            if (this.data.cardType === g.j) {
              var e = Object(c.a)(
                  this.data.activationCondition,
                  "requireProfile",
                  !0
                ),
                t = Object(c.a)(
                  this.data.activationCondition,
                  "requireMobile",
                  !0
                );
              e || t
                ? this.activate()
                : x
                    .request({
                      path: "/wscuser/scrm/api/benefitcard/take.json",
                      data: { cardAlias: this.data.alias },
                    })
                    .then(() => {
                      this.initData(),
                        Object(f.e)(f.a.equityCard, f.b, this.query, () => {
                          wx.showToast({
                            title: "领卡成功",
                            icon: "none",
                            duration: 1e3,
                          });
                        });
                    })
                    .catch((e) => {
                      wx.showToast({
                        title: e.msg,
                        icon: "none",
                        duration: 1e3,
                      });
                    });
            }
          },
          addWxCard() {
            var { weixinCardId: e } = Object(c.a)(
                this.data.cardSyncInfo,
                "cardWeixinSyncInfo",
                {}
              ),
              t = this;
            this.fetchWxTicket(e).then((a) => {
              var r = JSON.stringify({
                  code: a.card_no,
                  openid: a.open_id,
                  timestamp: a.timestamp,
                  signature: a.signature,
                  nonce_str: a.nonce_str,
                }),
                n = [{ cardId: e, cardExt: r }];
              wx.addCard({
                cardList: n,
                success() {
                  wx.showToast({ title: "添加成功", icon: "none" }),
                    t.fetchCardTplInfo();
                },
                fail(e) {
                  "addCard:fail cancel" !== e.errMsg &&
                    wx.showToast({ title: e.errMsg, icon: "none" });
                },
              });
            });
          },
          fetchWxTicket(e) {
            return x.request({
              path: "/wscuser/wx/getSyncTicket.json",
              data: { templateId: e, cardNo: this.data.cardNo },
            });
          },
          checkShowPresentDialog(e, t) {
            var a = Object(c.a)(e, "presentRecordInfo.isFirstReview", !1);
            t === g.h
              ? Object(f.e)(f.a.equityCard, "", this.query, () => {
                  a && this.openPresentDialog();
                })
              : a && this.openPresentDialog();
          },
          openPresentDialog() {
            this.setYZData({ presentDialogVisible: !0 });
          },
          closePresentDialog() {
            this.setYZData({ presentDialogVisible: !1 }),
              x.request({
                path: "/wscuser/scrm/api/benefitcard/setReviewTag.json",
                data: { cardAlias: this.data.alias },
              });
          },
          handleTakePresent() {
            var e = this.data.cardInfo || {},
              { presentRecordInfo: t } = e;
            if ((this.closePresentDialog(), e && t))
              switch ("" + t.goodsType) {
                case "31":
                  this.takeEduPresent(t);
                  break;
                default:
                  this.takeNormalPresent();
              }
            else this.takeNormalPresent();
          },
          takeNormalPresent() {
            var e = Object(c.a)(this.data.cardInfo, "presentRecordAlias", ""),
              t = Object(c.a)(
                this.data.cardInfo,
                "cardTemplateDTO.benefitBag.present.benefitPluginInfo.goodsAlias"
              );
            wx.navigateTo({
              url:
                "/packages/goods/present/index?alias=" +
                t +
                "&type=present&activityId=" +
                e,
            });
          },
          takeEduPresent(e) {
            var t = Object(c.a)(e, "goodsInfo.alias"),
              a = Object(c.a)(e, "source"),
              r = Object(c.a)(e, "presentId"),
              n = Object(c.a)(e, "recordId"),
              o =
                "https://h5.youzan.com/wscvis/ump/receive-present?alias=" +
                t +
                "&presentSource=" +
                a +
                "&presentQueryParams=" +
                JSON.stringify([{ presentRecordId: n, presentId: r }]);
            (o += "&kdt_id=" + x.getKdtId()),
              wx.navigateTo({
                url:
                  "/packages/edu/webview/index?targetUrl=" +
                  encodeURIComponent(o),
              });
          },
          handleOpenSelectShop(e) {
            this.data.isUnitedHqStore
              ? this.buyCard()
              : "renewal" === e &&
                ((this.isRenew = !0),
                this.data.isChainHqStore || this.data.isPartnerStore)
              ? this.setYZData({ actionSheetVisible: !0 })
              : "buyCard" !== e ||
                (!this.data.isChainHqStore && !this.data.isPartnerStore)
              ? this.buyCard()
              : this.setYZData({ actionSheetVisible: !0 });
          },
          handleOnSelectShop(e) {
            var t = e.detail;
            this.buyCard(t);
          },
          handleOnCloseSelectShop() {
            this.setYZData({ actionSheetVisible: !1 });
          },
          searchCardSellShop(e) {
            void 0 === e && (e = ""),
              x
                .request({
                  path: "/wscuser/scrm/api/benefitcard/searchCardSellShop.json",
                  data: {
                    alias: this.data.alias,
                    keyword: e,
                    page: 1,
                    pageSize: 50,
                    isExcludeCurrentShop: !0,
                  },
                })
                .then((t) => {
                  var { items: a = [] } = t || {};
                  if (!e) {
                    var r = x.getShopInfoSync(),
                      n = Object(d.b)(Object(c.a)(r, "shopMetaInfo")),
                      { chainStoreInfo: o, shop_name: i, kdt_id: s } = r;
                    !o ||
                      o.isRootShop ||
                      n ||
                      a.unshift({ shopName: i, kdtId: s });
                  }
                  this.setYZData({ shopList: a });
                });
          },
          handleRefreshShopList(e) {
            var t = e.detail;
            this.searchCardSellShop(t);
          },
          handleQrcodeLogger(e) {
            var t = Object(c.a)(e, "cardTemplateDTO", {}),
              a = this.query.qrcodeId || this.query.qrcode_id || "";
            a &&
              t.cardTplId &&
              x.logger &&
              x.logger.log({
                et: "custom",
                ei: "qrcode_bind_benefit_visit_weapp",
                en: "权益卡跟踪参数二维码访问",
                pt: "quanyika",
                params: {
                  card_name: t.name,
                  card_tpl_id: t.cardTplId,
                  qrcode_id: a,
                },
              });
          },
        });
      },
      "1FWt": function (e) {
        e.exports = JSON.parse("{}");
      },
      "6CzD": function (e, t, a) {
        a.d(t, "a", function () {
          return o;
        });
        var r = a("YZeP");
        var n = a("TJjZ");
        function o(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return Object(r.a)(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            Object(n.a)(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
      },
      "6F6u": function (e, t, a) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e, t, a) {
            var r,
              n,
              o,
              i,
              c = [],
              s = function s() {
                var u = Date.now() - o;
                u < t && u >= 0
                  ? (r = setTimeout(s, t - u))
                  : ((r = null),
                    a || ((i = e.apply(n, c)), r || ((n = null), (c = []))));
              };
            function u() {
              n = this;
              for (
                var u = arguments.length, d = new Array(u), p = 0;
                p < u;
                p++
              )
                d[p] = arguments[p];
              (c = d), (o = Date.now());
              var l = a && !r;
              return (
                r || (r = setTimeout(s, t)),
                l && ((i = e.apply(n, c)), (n = null), (c = [])),
                i
              );
            }
            return (
              (u.cancel = function () {
                r && clearTimeout(r), (r = null);
              }),
              u
            );
          }),
          (e.exports = t.default);
      },
      ECKV: function (e, t, a) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GLOBAL_URL = void 0);
        t.GLOBAL_URL = {
          base: "https://www.youzan.com",
          bbs: "https://bbs.youzan.com",
          cdn: "https://b.yzcdn.cn/",
          fast: ".m.youzan.com",
          h5: "https://h5.youzan.com",
          im: "https://b-im.youzan.com",
          imgqn: "https://img01.yzcdn.cn",
          passport: "https://passport.youzan.com",
          shop: "http://detail.youzan.com",
          shop_wap: "https://shop255245.youzan.com/v2",
          store: "https://store.youzan.com",
          trade: "https://trade.koudaitong.com",
          trade_youzan: "https://trade.youzan.com",
          uic: "https://uic.youzan.com",
          wap: "https://h5.youzan.com/v2",
          www: "https://www.youzan.com/v2",
        };
      },
      MVmR: function (e, t, a) {
        a.d(t, "a", function () {
          return I;
        }),
          a.d(t, "b", function () {
            return T;
          }),
          a.d(t, "c", function () {
            return De;
          });
        var r = a("mK0O");
        var n = a("TJjZ");
        function o(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var a =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != a) {
                var r,
                  n,
                  o,
                  i,
                  c = [],
                  s = !0,
                  u = !1;
                try {
                  if (((o = (a = a.call(e)).next), 0 === t)) {
                    if (Object(a) !== a) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = o.call(a)).done) &&
                      (c.push(r.value), c.length !== t);
                      s = !0
                    );
                } catch (e) {
                  (u = !0), (n = e);
                } finally {
                  try {
                    if (
                      !s &&
                      null != a.return &&
                      ((i = a.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (u) throw n;
                  }
                }
                return c;
              }
            })(e, t) ||
            Object(n.a)(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        var i = a("aMoH"),
          c = a("hisu"),
          s = a("yBJb"),
          u = a("6CzD"),
          d = a("sQvh");
        function p(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && Object(d.a)(e, t);
        }
        var l = a("J1LG");
        function f(e, t) {
          if (t && ("object" === Object(l.a)(t) || "function" == typeof t))
            return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e);
        }
        var g = a("P+uj"),
          h = a("jQ93"),
          b = a("S+xN"),
          v = a.n(b),
          y = a("dV47"),
          m = a.n(y),
          O = a("2wjL"),
          w = a("taYb"),
          k = a("jZtE"),
          j = a("1FWt");
        function x(e) {
          return "object" === Object(l.a)(e)
            ? JSON.parse(JSON.stringify(e))
            : e;
        }
        var _ = (function () {
          function e() {
            Object(c.a)(this, e), (this.funcs = {});
          }
          return (
            Object(s.a)(e, [
              {
                key: "on",
                value: function (e, t) {
                  e && t && "function" == typeof t && (this.funcs[e] = t);
                },
              },
              {
                key: "off",
                value: function (e) {
                  e ? delete this.funcs[e] : (this.funcs = {});
                },
              },
            ]),
            e
          );
        })();
        function S(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              a.push.apply(a, r);
          }
          return a;
        }
        function C(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? S(Object(a), !0).forEach(function (t) {
                  Object(r.a)(e, t, a[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : S(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  );
                });
          }
          return e;
        }
        var T = (function (e) {
          p(a, e);
          var t = (function (e) {
            function t() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            }
            return function () {
              var a,
                r = Object(g.a)(e);
              if (t()) {
                var n = Object(g.a)(this).constructor;
                a = Reflect.construct(r, arguments, n);
              } else a = r.apply(this, arguments);
              return f(this, a);
            };
          })(a);
          function a() {
            return Object(c.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(s.a)(a, [
              {
                key: "trigger",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    t[a] = arguments[a];
                  var r = [],
                    n = null,
                    o = C({}, this.funcs);
                  if (
                    (Object.keys(o).forEach(function (e) {
                      var a = o[e];
                      try {
                        var i = a.apply(void 0, Object(u.a)(x(t)));
                        r.push(i);
                      } catch (e) {
                        n = e;
                      }
                    }),
                    n)
                  )
                    throw n;
                  return r;
                },
              },
            ]),
            a
          );
        })(_);
        function P(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              a.push.apply(a, r);
          }
          return a;
        }
        function D(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? P(Object(a), !0).forEach(function (t) {
                  Object(r.a)(e, t, a[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : P(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  );
                });
          }
          return e;
        }
        var I = (function (e) {
            p(a, e);
            var t = (function (e) {
              function t() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              }
              return function () {
                var a,
                  r = Object(g.a)(e);
                if (t()) {
                  var n = Object(g.a)(this).constructor;
                  a = Reflect.construct(r, arguments, n);
                } else a = r.apply(this, arguments);
                return f(this, a);
              };
            })(a);
            function a() {
              return Object(c.a)(this, a), t.apply(this, arguments);
            }
            return (
              Object(s.a)(a, [
                {
                  key: "trigger",
                  value: function () {
                    for (
                      var e = arguments.length, t = new Array(e), a = 0;
                      a < e;
                      a++
                    )
                      t[a] = arguments[a];
                    var r = [],
                      n = D({}, this.funcs);
                    return (
                      Object.keys(n).forEach(function (e) {
                        var a = n[e];
                        try {
                          var o = a.apply(void 0, Object(u.a)(x(t)));
                          r.push(o);
                        } catch (e) {
                          r.push(Promise.reject({ err: e }));
                        }
                      }),
                      Promise.all(r)
                    );
                  },
                },
              ]),
              a
            );
          })(_),
          E = 0;
        function N() {
          return Date.now() + E++ + "";
        }
        function A(e) {
          return e.__isPage
            ? e.events
            : e.__isApp
            ? e.__events
            : e.__events || (e.__events = {});
        }
        var q = {
            on: function (e, t) {
              if (t) {
                var a = A(this),
                  r = a[e] || (a[e] = new T());
                return r.on(e + "_" + N(), t), r;
              }
            },
            once: function (e, t) {
              var a = this,
                r = function r() {
                  a.off(e, r), t.apply(this, arguments);
                };
              return (r._callback = t), this.on(e, r);
            },
            off: function (e, t) {
              if (e) {
                var a = A(this)[e];
                if (a) {
                  var r = a.funcs,
                    n = Object.keys(r);
                  t && "function" == typeof t && n.length
                    ? n.forEach(function (e) {
                        (r[e] !== t && r[e]._callback !== t) || a.off(e);
                      })
                    : a.off();
                }
              }
            },
            onAsync: function (e, t) {
              if (t) {
                var a = A(this),
                  r = a[e] || (a[e] = new I());
                return r.on(e + "_" + N(), t), r;
              }
            },
            trigger: function (e, t) {
              if (e) {
                var a = A(this)[e];
                return a && a.trigger(t);
              }
            },
            triggerAsync: function (e, t) {
              if (e) {
                var a = A(this)[e];
                return a && a.trigger(t);
              }
            },
          },
          L = ["onLoad", "onShow"],
          R = ["onLoad", "onShow"];
        function U(e, t, a) {
          return (
            e.__lifetimes || (e.__lifetimes = {}),
            !(!t || !a || "function" != typeof a) &&
              !(e.__isPage && L.indexOf(t) < 0) &&
              !(e.__isApp && R.indexOf(t) < 0) &&
              (e.__lifetimes[t] || (e.__lifetimes[t] = []),
              e.__lifetimes[t].push(a),
              !0)
          );
        }
        function G(e, t, a) {
          if (e.__lifetimes && e.__lifetimes[t])
            try {
              e.__lifetimes[t].forEach(function (e) {
                "function" == typeof e && e(a);
              });
            } catch (e) {}
        }
        var z = function () {},
          B = (function () {
            function e() {
              Object(c.a)(this, e),
                (this.__isApp = !0),
                (this.__data = { shop: {}, user: {} }),
                (this.__events = {}),
                (this.process = {}),
                (this.__dataWatchers = {});
            }
            return (
              Object(s.a)(e, [
                {
                  key: "trigger",
                  value: function (e, t) {
                    if (e) {
                      var a = q.trigger.apply(this, [e, t]),
                        r = this.__events[e];
                      return r instanceof T && 1 === Object.keys(r.funcs).length
                        ? a[0]
                        : a;
                    }
                  },
                },
                {
                  key: "on",
                  value: function (e, t) {
                    return q.on.apply(this, [e, t]);
                  },
                },
                {
                  key: "onAsync",
                  value: function (e, t) {
                    return q.onAsync.apply(this, [e, t]);
                  },
                },
                {
                  key: "once",
                  value: function (e, t) {
                    return q.once.apply(this, [e, t]);
                  },
                },
                {
                  key: "off",
                  value: function (e, t) {
                    return q.off.apply(this, [e, t]);
                  },
                },
                {
                  key: "watch",
                  value: function (e, t) {
                    var a,
                      r = this;
                    return (
                      t &&
                        (this.__dataWatchers[e] ||
                          (this.__dataWatchers[e] = []),
                        this.__dataWatchers[e].push(t),
                        (a = this.__dataWatchers[e].length - 1)),
                      function () {
                        a >= 0 && r.__dataWatchers[e].splice(a, 1);
                      }
                    );
                  },
                },
                {
                  key: "__notifyDataSubscribers",
                  value: function (e, t) {
                    (this.__dataWatchers[e] || []).forEach(function (e) {
                      e(t);
                    });
                  },
                },
                {
                  key: "getProcess",
                  value: function (e) {
                    if (e) return this.process[e] || z;
                  },
                },
                {
                  key: "lifetimes",
                  value: function (e, t) {
                    return U(this, e, t);
                  },
                },
              ]),
              e
            );
          })(),
          M = function () {},
          Y = (function () {
            function e() {
              Object(c.a)(this, e),
                (this.__isPage = !0),
                (this.process = {}),
                (this.data = {}),
                (this.events = {}),
                (this.__dataWatchers = {});
            }
            return (
              Object(s.a)(e, [
                {
                  key: "getProcess",
                  value: function (e) {
                    if (e) return this.process[e] || M;
                  },
                },
                {
                  key: "watch",
                  value: function (e, t) {
                    var a,
                      r = this;
                    return (
                      t &&
                        (this.__dataWatchers[e] ||
                          (this.__dataWatchers[e] = []),
                        this.__dataWatchers[e].push(t),
                        (a = this.__dataWatchers[e].length - 1)),
                      function () {
                        a >= 0 && r.__dataWatchers[e].splice(a, 1);
                      }
                    );
                  },
                },
                {
                  key: "__notifyDataSubscribers",
                  value: function (e, t) {
                    (this.__dataWatchers[e] || []).forEach(function (e) {
                      e(t);
                    });
                  },
                },
                {
                  key: "trigger",
                  value: function (e, t) {
                    if (e) {
                      var a = q.trigger.apply(this, [e, t]),
                        r = this.events[e];
                      return r instanceof T && 1 === Object.keys(r.funcs).length
                        ? a[0]
                        : a;
                    }
                  },
                },
                {
                  key: "on",
                  value: function (e, t) {
                    return q.on.apply(this, [e, t]);
                  },
                },
                {
                  key: "onAsync",
                  value: function (e, t) {
                    return q.onAsync.apply(this, [e, t]);
                  },
                },
                {
                  key: "once",
                  value: function (e, t) {
                    return q.once.apply(this, [e, t]);
                  },
                },
                {
                  key: "off",
                  value: function (e, t) {
                    return q.off.apply(this, [e, t]);
                  },
                },
                {
                  key: "lifetimes",
                  value: function (e, t) {
                    return U(this, e, t);
                  },
                },
                {
                  key: "unload",
                  value: function () {
                    var e = this;
                    Object.keys(this.events).forEach(function (t) {
                      var a = e.events[t];
                      Object.keys(a.funcs).forEach(function (e) {
                        delete a.funcs[e];
                      }),
                        delete e.events[t];
                    }),
                      (this.process = {});
                  },
                },
              ]),
              e
            );
          })();
        function W(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              a.push.apply(a, r);
          }
          return a;
        }
        function F(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? W(Object(a), !0).forEach(function (t) {
                  Object(r.a)(e, t, a[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : W(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  );
                });
          }
          return e;
        }
        var Z = (function () {
          function e() {
            Object(c.a)(this, e),
              (this._data = {}),
              (function e(t) {
                for (var a in t) {
                  var r = t[a];
                  Date.now() > r.expire && delete t[a];
                }
                setTimeout(function () {
                  e(t);
                }, 1e4);
              })(this._data);
          }
          return (
            Object(s.a)(e, [
              {
                key: "setStorageSync",
                value: function (e) {
                  if (e.key && void 0 !== e.data) {
                    var t = e.key,
                      a = e.data,
                      r = e.expire;
                    return wx.setStorageSync(t, {
                      data: a,
                      expire: Date.now() + 1e3 * (r || 172800),
                    });
                  }
                  throw new Error("unsupported parameters");
                },
              },
              {
                key: "getStorageSync",
                value: function (e) {
                  if (e) {
                    var t = wx.getStorageSync(e);
                    return (
                      t &&
                        Date.now() > t.expire &&
                        wx.removeStorage({ key: e }),
                      t.data
                    );
                  }
                  throw new Error("unsupported parameters");
                },
              },
              {
                key: "setStorage",
                value: function (e) {
                  if (e.key && void 0 !== e.data) {
                    var t = e.data,
                      a = e.expire;
                    wx.setStorage(
                      F(
                        F({}, e),
                        {},
                        {
                          data: {
                            data: t,
                            expire: Date.now() + 1e3 * (a || 172800),
                          },
                        }
                      )
                    );
                  } else
                    "function" == typeof e.fail &&
                      e.fail(new Error("unsupported parameters")),
                      "function" == typeof e.complete &&
                        e.complete(new Error("unsupported parameters"));
                },
              },
              {
                key: "getStorage",
                value: function (e) {
                  if (e.key && (e.success || e.complete)) {
                    var t = e.key,
                      a = e.success,
                      r = e.complete,
                      n = e.fail;
                    wx.getStorage({
                      key: t,
                      success: function (e) {
                        var r = e.data;
                        "function" == typeof a && a(r.data),
                          r &&
                            Date.now() > r.expire &&
                            wx.removeStorage({ key: t });
                      },
                      fail: function (e) {
                        "function" == typeof n && n(e);
                      },
                      complete: function (e) {
                        "function" == typeof r &&
                          (e.hasOwnProperty("data") &&
                          e.hasOwnProperty("expire")
                            ? r(e.data)
                            : r(e));
                      },
                    });
                  } else
                    "function" == typeof e.fail &&
                      e.fail(new Error("unsupported parameters")),
                      "function" == typeof e.complete &&
                        e.complete(new Error("unsupported parameters"));
                },
              },
              {
                key: "removeStorageSync",
                value: function (e) {
                  if (e) return wx.removeStorageSync(e);
                  throw new Error("unsupported parameters");
                },
              },
              {
                key: "removeStorage",
                value: function (e) {
                  e.key && (e.success || e.complete)
                    ? wx.removeStorage(e)
                    : ("function" == typeof e.fail &&
                        e.fail(new Error("unsupported parameters")),
                      "function" == typeof e.complete &&
                        e.complete(new Error("unsupported parameters")));
                },
              },
              {
                key: "clearStorageSync",
                value: function () {
                  return wx.clearStorageSync();
                },
              },
              {
                key: "clearStorage",
                value: function (e) {
                  wx.clearStorage(e);
                },
              },
              {
                key: "setLight",
                value: function (e) {
                  if (e.key && void 0 !== e.data)
                    return (
                      (this._data[e.key] = {
                        data: Object(h.a)(e.data),
                        expire: Date.now() + 1728e5,
                      }),
                      this._data[e.key].data
                    );
                  throw new Error("unsupported parameters");
                },
              },
              {
                key: "setLightOnce",
                value: function (e) {
                  if (e.key && void 0 !== e.data)
                    return (
                      (this._data[e.key] = {
                        data: Object(h.a)(e.data),
                        expire: Date.now(),
                        once: !0,
                      }),
                      this._data[e.key].data
                    );
                  throw new Error("unsupported parameters");
                },
              },
              {
                key: "getLight",
                value: function (e) {
                  var t = this._data[e];
                  if (t)
                    return (
                      (Date.now() > t.expire || t.once) && delete this._data[e],
                      t.data
                    );
                },
              },
            ]),
            e
          );
        })();
        function V(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              a.push.apply(a, r);
          }
          return a;
        }
        function Q(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? V(Object(a), !0).forEach(function (t) {
                  Object(r.a)(e, t, a[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : V(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  );
                });
          }
          return e;
        }
        var H = "https://mp-isv.youzanyun.com/";
        function J() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return "string" == typeof e && e.indexOf("yz_cloud_gateway") >= 0;
        }
        var K = "request",
          $ = "uploadFile",
          X = [],
          ee = (function () {
            function e(t) {
              var a = this;
              Object(c.a)(this, e),
                (this.defaultConfig = t),
                (this.app = t.app || getApp()),
                this.app.on("ecloud:request:queue:send", function (e) {
                  a.sendRequestQueue(e);
                });
            }
            return (
              Object(s.a)(e, [
                {
                  key: "getAppName",
                  value: function (e) {
                    var t = e.appName;
                    if (t) return t;
                    if ((e.functionName || e.functionUrl) && e.functionUrl) {
                      return (/^(.+?)-(\d+?)-(.+?).isv/.exec(e.functionUrl) ||
                        [])[3];
                    }
                    if (e.isv) {
                      return (/^(.+?).isv/.exec(e.isv) || [])[1];
                    }
                    return "";
                  },
                },
                {
                  key: "request",
                  value: function (e) {
                    return this.invoke(e, K);
                  },
                },
                {
                  key: "uploadFile",
                  value: function (e) {
                    return this.invoke(e, $);
                  },
                },
                {
                  key: "invoke",
                  value: function () {
                    var e,
                      t = this,
                      a =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      r = arguments.length > 1 ? arguments[1] : void 0;
                    e =
                      r === K
                        ? function () {
                            return t.handleRequestConfig(a);
                          }
                        : function () {
                            return t.uploadFileRequest(a);
                          };
                    var n = this.getAppName(a),
                      o = a.succeed,
                      i = a.failed,
                      c = a.success,
                      s = a.fail,
                      u = a.complete,
                      d = function (e) {
                        o ? o(e) : c && c(e);
                      },
                      p = function (e) {
                        i ? i(e) : s && s(e);
                      },
                      l = function (e) {
                        u && u(e);
                      },
                      f = function (a, r) {
                        var o = t.getCurrentAppTokenInfo(n),
                          i = o,
                          c = i.status;
                        i.token
                          ? (t.handlePushRequestToQueue(e, n),
                            "getting" !== c &&
                              t.app.trigger("ecloud:gateway:get-token", {
                                appNames: [n],
                              }))
                          : r(),
                          t.app.logger.appError({
                            message: "有赞云网关token失效",
                            detail: {
                              appName: n,
                              userTokenInfo: t.app.userTokenInfo,
                              currentAppTokenInfo: o,
                              response: a,
                            },
                          });
                      };
                    (a.success = function (e) {
                      r !== K &&
                        r === $ &&
                        (401 == +e.statusCode && J(e.data)
                          ? f(e, function () {
                              return d(e);
                            })
                          : d(e));
                    }),
                      (a.fail = function (e) {
                        p(e);
                      }),
                      (a.complete = function (e) {
                        r === K
                          ? 200 == +e.statusCode
                            ? d(e.data)
                            : 401 == +e.statusCode && J(e.data)
                            ? f(e, function () {
                                return p(e);
                              })
                            : p(e)
                          : r === $ &&
                            (401 == +e.statusCode && J(e.data)
                              ? f(e, function () {
                                  return l(e);
                                })
                              : l(e));
                      }),
                      this.waiting(e, n);
                  },
                },
                {
                  key: "waiting",
                  value: function (e, t) {
                    var a = this.getCurrentAppTokenInfo(t),
                      r = a.token,
                      n = a.status;
                    if (r) {
                      if ("getting" === n)
                        return this.handlePushRequestToQueue(e, t);
                      e();
                    } else
                      this.handlePushRequestToQueue(e, t),
                        "getting" !== n &&
                          this.app.trigger("ecloud:gateway:get-token", {
                            appNames: [t],
                          });
                  },
                },
                {
                  key: "getCurrentAppTokenInfo",
                  value: function (e) {
                    return (
                      (this.app.youzanyunGatewayToken || []).find(function (t) {
                        return t.appName === e;
                      }) || {}
                    );
                  },
                },
                {
                  key: "handlePushRequestToQueue",
                  value: function (e, t) {
                    var a = X.find(function (e) {
                      return e.appName === t;
                    });
                    return a
                      ? a.requestQueue.includes(e)
                        ? void 0
                        : a.requestQueue.push(e)
                      : X.push({ appName: t, requestQueue: [e] });
                  },
                },
                {
                  key: "sendRequestQueue",
                  value: function (e) {
                    var t = (e || {}).appNames,
                      a = void 0 === t ? [] : t;
                    X.filter(function (e) {
                      return a.includes(e.appName);
                    }).forEach(function (e) {
                      for (var t = e.requestQueue.shift(); t; )
                        t(), (t = e.requestQueue.shift());
                    });
                  },
                },
                {
                  key: "handleRequestConfig",
                  value: function (e) {
                    if (e.functionName || e.functionUrl) {
                      var t = e.functionUrl;
                      if (!t) {
                        var a = "dev" == this.defaultConfig.env,
                          r = this.defaultConfig.getEnv(e.appName).MP_TENANT_ID;
                        if (!r)
                          throw new Error(
                            "小程序环境变量中不存在 团队 ID, 请确认"
                          );
                        t = ""
                          .concat(e.functionName, "-")
                          .concat(r, "-")
                          .concat(e.appName, ".")
                          .concat(
                            a ? "isv-faas-dev" : "isv-faas",
                            ".youzan.com"
                          );
                      }
                      this._request(
                        "https://mp-faas-isv.youzanyun.com/",
                        t,
                        Q(
                          {
                            header: Q(
                              { "content-type": "application/json" },
                              e.header
                            ),
                          },
                          e
                        )
                      );
                    } else {
                      var n = e.isv;
                      if (!n) {
                        var o = "dev" == this.defaultConfig.env;
                        n = ""
                          .concat(e.appName, ".")
                          .concat(o ? "isv-dev" : "isv", ".youzan.com");
                      }
                      this._request(H, n, e);
                    }
                  },
                },
                {
                  key: "_request",
                  value: function (e, t, a) {
                    var r = (this.app.userTokenInfo || {}).sessionId,
                      n = this.getCurrentAppTokenInfo(this.getAppName(a)).token,
                      o = a.header || {};
                    (0, wx.request)({
                      url: e + a.path,
                      method: a.method || "GET",
                      data: a.data,
                      header: {
                        isv: t,
                        "content-type":
                          o["content-type"] ||
                          "application/x-www-form-urlencoded",
                        Accept: "application/json",
                        "isv-token": n,
                        encryptionKey: r,
                      },
                      complete: function (e) {
                        a.complete && a.complete(e);
                      },
                      fail: function (e) {
                        a.fail && a.fail(e);
                      },
                    });
                  },
                },
                {
                  key: "uploadFileRequest",
                  value: function (e) {
                    var t = (this.app.userTokenInfo || {}).sessionId,
                      a = this.getCurrentAppTokenInfo(this.getAppName(e)).token,
                      r = e.isv;
                    if (!r) {
                      var n = "dev" == this.defaultConfig.env;
                      r = ""
                        .concat(e.appName, ".")
                        .concat(n ? "isv-dev" : "isv", ".youzan.com");
                    }
                    wx.uploadFile({
                      url: H + e.path,
                      filePath: e.filePath,
                      name: e.name,
                      header: { isv: r, "isv-token": a, encryptionKey: t },
                      formData: e.formData || {},
                      success: function (t) {
                        e.success && e.success(t);
                      },
                      fail: function (t) {
                        e.fail && e.fail(t);
                      },
                      complete: function (t) {
                        e.complete && e.complete(t);
                      },
                    });
                  },
                },
              ]),
              e
            );
          })(),
          te = {
            fullfillImage: v.a.fullfillImage,
            debounce: m.a.debounce,
            throttle: m.a.throttle,
          };
        function ae(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              a.push.apply(a, r);
          }
          return a;
        }
        var re = {
            switchTab: "switchTab",
            reLaunch: "reLaunch",
            redirectTo: "redirectTo",
            navigateTo: "navigateTo",
            navigateBack: "navigateBack",
          },
          ne = {
            index: "/packages/goods/detail/index",
            default: "/packages/goods/detail/index",
            points: "/packages/goods/points/index",
            seckill: "/packages/goods/seckill/index",
            groupon: "/packages/goods/groupon/index",
            present: "/packages/goods/present/index",
          },
          oe = {
            homeDashboard: "/packages/home/dashboard/index",
            pageHomeDashboard: "/pages/home/dashboard/index",
            login: "/pages/account/login/index",
            cart: "/packages/goods/cart/index",
            buy: "/packages/order/index",
            orderPaid: "/packages/order/paid/index",
            showcaseFeature: "/packages/home/feature/index",
            goodsDetail: {
              route: "/packages/goods/detail/index",
              handler: function (e, t) {
                var a = e;
                return (
                  t &&
                    ((a = t.goodsPageType ? ne[t.goodsPageType] : ne.default),
                    delete t.goodsPageType,
                    (a = O.a.add(a, t))),
                  a
                );
              },
            },
            pointCenter: "/packages/pointstore/point-center/index",
            pointGoodsDetail: {
              route: "/packages/pointstore/goods-details/index",
              handler: function (e, t) {
                return O.a.add(e, w.a.toSnakeCase(t));
              },
            },
            userCenter: "/packages/usercenter/dashboard/index",
            orderList: "/packages/trade/order/list/index",
            cardPackages: "/packages/card/all/index",
            userCounponList: "/packages/user/coupon/list/index",
            addressList: "/packages/order-native/address-list/index",
            refundList: "/packages/trade/refund/list/index",
            userSettings: "/packages/user/membercenter/setting/index",
            accountSettings: "/packages/account/settings/index",
            orderDetail: "/packages/trade/order/result/index",
            orderExpress: "/packages/trade/order/express/index",
            tab1: "/packages/home/tab/one",
            pageTab1: "/pages/home/tab/one",
            tab2: "/packages/home/tab/two",
            pageTab2: "/pages/home/tab/two",
            tab3: "/packages/home/tab/three",
            pageTab3: "/pages/home/tab/three",
            shopNoteList: "/packages/shop/shopnote/list/index",
            prepaidCard: "/packages/pre-card/home/index",
            presents: "/packages/ump/presents/index",
            memberCode: "/packages/member-code/index",
            taskCenter: "/packages/user/task-center/index",
            cashBack: "/packages/user/cashback/list/index",
            eTicketDetail: {
              route: "/packages/trade/cert/verify-ticket/index",
              handler: function (e, t) {
                return O.a.add(e, w.a.toSnakeCase(t));
              },
            },
            selfFetchAddress: "/packages/order/self-fetch-address/index",
            salesmanCenter: "/packages/salesman/salesman-center/index",
            couponDetail: {
              route: "/packages/user/coupon/detail/index",
              handler: function (e, t) {
                var a = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? ae(Object(a), !0).forEach(function (t) {
                          Object(r.a)(e, t, a[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(a)
                        )
                      : ae(Object(a)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(a, t)
                          );
                        });
                  }
                  return e;
                })({ from: "list" }, t);
                return O.a.add(e, a);
              },
            },
            couponGoodsList: "/packages/user/coupon/goods-list/index",
            fillMemberInfo: {
              route: "/pages/common/webview-page/index",
              handler: function (e, t) {
                var a = t.alias;
                return O.a.add(e, {
                  src: encodeURIComponent(
                    "/wscuser/levelcenter/fill?alias=".concat(
                      a,
                      "&fromScene=complete"
                    )
                  ),
                  title: "会员中心",
                });
              },
            },
            contactInfo: {
              route: "/packages/order/contact/index",
              handler: function (e, t) {
                return O.a.add(e, w.a.toSnakeCase(t));
              },
            },
            change: {
              route: "/pages/common/webview-page/index",
              handler: function (e) {
                return O.a.add(e, {
                  src: encodeURIComponent("/wscassets/change/profile"),
                });
              },
            },
            addressEdit: {
              route: "/packages/order-native/address-edit/index",
              handler: function (e, t) {
                return O.a.add(e, w.a.toSnakeCase(t));
              },
            },
            idcardInfo: {
              route: "/pages/common/webview-page/index",
              handler: function (e, t) {
                var a = t.type,
                  r = void 0 === a ? "common" : a,
                  n = getCurrentPages(),
                  o = {
                    common: { path: "/wscassets/cert/pwd/idcard", fromId: 10 },
                    tax: { path: "/wscassets/cert/tax/idcard", fromId: 12 },
                  },
                  i = "";
                if (Array.isArray(n) && n.length > 0) {
                  var c = n[n.length - 1],
                    s = c.route,
                    u = c.options;
                  (i = "/".concat(s)),
                    u &&
                      Object.keys(u).forEach(function (e, t) {
                        i +=
                          t > 0
                            ? "&".concat(e, "=").concat(u[e])
                            : "?".concat(e, "=").concat(u[e]);
                      });
                }
                var d = o[r] || o.common,
                  p = d.path,
                  l = d.fromId;
                return O.a.add(e, {
                  src: encodeURIComponent(
                    ""
                      .concat(p, "?fromId=")
                      .concat(l, "&returnUrl=")
                      .concat(encodeURIComponent(i))
                  ),
                });
              },
            },
          };
        function ie(e, t) {
          var a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "navigateTo";
          return new Promise(function (r, n) {
            if (re[a]) {
              if (a !== re.navigateBack) {
                var o = oe[e];
                o && "object" === Object(l.a)(o)
                  ? (o = o.handler(o.route, t))
                  : "string" == typeof o && (o = O.a.add(o, t)),
                  wx[a]({ url: o, success: r, fail: n });
              } else wx[a]({ delta: t.delta, success: r, fail: n });
            } else n(new Error("not supported navigateType: " + a));
          });
        }
        function ce(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              a.push.apply(a, r);
          }
          return a;
        }
        function se(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? ce(Object(a), !0).forEach(function (t) {
                  Object(r.a)(e, t, a[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : ce(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  );
                });
          }
          return e;
        }
        var ue = { appName: "" },
          de = ["info", "error", "warn"],
          pe = new ((function () {
            function e() {
              Object(c.a)(this, e),
                (this.systemInfo = null),
                (this.extConfig = null);
            }
            return (
              Object(s.a)(e, [
                {
                  key: "getSystemInfo",
                  value: function () {
                    return (
                      this.systemInfo ||
                        (this.systemInfo = wx.getSystemInfoSync()),
                      this.systemInfo
                    );
                  },
                },
                {
                  key: "getExtConfig",
                  value: function () {
                    return (
                      this.extConfig ||
                        (this.extConfig = wx.getExtConfigSync()),
                      this.extConfig
                    );
                  },
                },
              ]),
              e
            );
          })())(),
          le = function () {
            var e,
              t,
              a = pe.getSystemInfo(),
              r = pe.getExtConfig();
            return se(
              se(
                { systemInfo: a },
                ((e = getCurrentPages()),
                {
                  history: (t = e.map(function (e) {
                    var t = e ? e.route : "",
                      a = t;
                    return e && e.options && (a = O.a.add(t, e.options)), a;
                  })),
                  currentPath: t[e.length - 1],
                })
              ),
              {},
              {
                wxVersion: a.version,
                SDKVersion: a.SDKVersion,
                appId: r.appId,
                kdtId: r.kdtId,
                userVersion: r.userVersion,
              }
            );
          };
        function fe(e) {
          var t = e.appName,
            a = e.tagName,
            r = void 0 === a ? "tag-name-undefined" : a,
            n = e.level,
            o = void 0 === n ? "info" : n,
            i = e.message,
            c = void 0 === i ? "message-undefined" : i,
            s = e.detail,
            u = void 0 === s ? {} : s;
          return t
            ? "string" != typeof t
              ? "appName参数类型错误"
              : "string" != typeof o
              ? "level参数类型错误"
              : "string" != typeof r
              ? "tagName参数类型错误"
              : "string" != typeof c
              ? "message参数类型错误"
              : "[object Object]" !== Object.prototype.toString.call(u)
              ? "detail参数类型错误"
              : ""
            : "请传入appName";
        }
        var ge = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ue;
            return new Promise(function (t, a) {
              var r,
                n = fe(e);
              if (n) return a(n);
              try {
                r = le();
              } catch (e) {
                return a(e);
              }
              var o = e.appName,
                i = e.tagName,
                c = void 0 === i ? "tag-name-undefined" : i,
                s = e.message,
                u = void 0 === s ? "message-undefined" : s,
                d = e.detail,
                p = void 0 === d ? {} : d,
                l = k[o];
              if (!l) return a("appName 传入错误");
              var f = o,
                g = "mp_" + o.replace(/-/g, "_"),
                h = p.orderNo,
                b = e.level,
                v = void 0 === b ? "info" : b;
              -1 === de.indexOf(v) && (v = "info");
              var y = "";
              try {
                y = JSON.stringify(p);
              } catch (e) {
                return a(e);
              }
              var m = {
                app: f,
                log_index: g,
                level: v,
                tag: "".concat(c, ": ").concat(u),
                detail: JSON.stringify({
                  isvDetail: y,
                  extra: se(se({}, r), {}, { cloudAppId: l, orderNo: h }),
                }),
              };
              wx.request({
                url: "https://tj-isv.youzanyun.com",
                method: "POST",
                header: { "Content-Type": "application/x-www-form-urlencoded" },
                data: m,
                success: t,
                fail: a,
              });
            });
          },
          he = function (e) {
            return j[e] || {};
          };
        function be(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              a.push.apply(a, r);
          }
          return a;
        }
        function ve(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? be(Object(a), !0).forEach(function (t) {
                  Object(r.a)(e, t, a[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : be(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  );
                });
          }
          return e;
        }
        var ye = {};
        var me = [];
        function Oe() {
          return (
            0 === me.length &&
              ye.list &&
              (me = ye.list.map(function (e) {
                return (
                  (t = e.pageName),
                  0 ===
                  (r = (a = oe[t])
                    ? "string" == typeof a
                      ? a
                      : a.route
                    : t).indexOf("/")
                    ? r
                    : "/".concat(r)
                );
                var t, a, r;
              })),
            me
          );
        }
        function we(e) {
          var t = e || getCurrentPages()[0].route;
          if (t) {
            t = 0 === t.indexOf("/") ? t : "/".concat(t);
            var a = ye.list,
              r = void 0 === a ? [] : a,
              n = Oe().indexOf(t);
            if (n >= 0) return r[n];
          }
        }
        function ke() {
          var e = we(),
            t = ye.color,
            a = ye.selectedColor,
            r = ye.list;
          return {
            color: t,
            selectedColor: a,
            list: e
              ? r.map(function (t) {
                  return ve(
                    ve({}, t),
                    {},
                    {
                      selected:
                        e.pageName === t.pageName &&
                        e.pageTitle === t.pageTitle,
                    }
                  );
                })
              : r,
          };
        }
        function je(e) {
          var t,
            a = e.pageName,
            r = e.params;
          if ("custom" === e.pageType) t = a;
          else {
            var n = oe[a];
            t = n && "string" == typeof n ? n : n.route;
          }
          var o = getCurrentPages() || [],
            i = o.length;
          if (i > 0) {
            if ("/" + o[i - 1].route === t) return;
            if (i > 1) return wx.reLaunch({ url: O.a.add(t, r || {}) });
          }
          wx.redirectTo({
            url: O.a.add(t, r || {}),
            fail: function () {
              wx.reLaunch({ url: O.a.add(t, r || {}) });
            },
          });
        }
        function xe(e) {
          if (0 !== e.indexOf("http")) return !1;
          var t = o(e.split("/"), 3);
          t[0], t[1];
          return -1 !== t[2].indexOf(".youzan.com");
        }
        var _e = [
          "pages/goods/detail/index",
          "packages/goods/detail/index",
          "packages/goods/lucky-draw-group/index",
          "packages/goods/seckill/index",
          "packages/goods/help-cut/index",
          "packages/goods/groupon/index",
          "packages/goods/tuan/index",
          "packages/goods/present/index",
          "packages/goods/points/index",
          "pages/goods/cart/index",
          "packages/goods/cart/index",
          "packages/trade/cart-v1/index",
          "packages/order/index",
          "packages/order/paid/index",
          "packages/order/paid-v1/index",
          "packages/order/address-list/index",
          "packages/order/address-edit/index",
          "packages/order-native/index",
          "packages/order-native/address-list/index",
          "packages/order-native/address-edit/index",
          "pages/home/dashboard/index",
          "packages/home/dashboard/index",
          "pages/home/feature/index",
          "packages/home/feature/index",
          "pages/home/tab/one",
          "pages/home/tab/two",
          "pages/home/tab/three",
          "pages/tab/one/index",
          "pages/tab/two/index",
          "pages/tab/three/index",
          "packages/home/tab/one",
          "packages/home/tab/two",
          "packages/home/tab/three",
          "pages/usercenter/dashboard/index",
          "packages/retail/usercenter/dashboard-v2/index",
          "packages/usercenter/dashboard/index",
          "packages/trade/order/result/index",
          "packages/trade/order-detail-v1/index",
          "packages/trade/order/list/index",
          "packages/shop-select/chain-store/shopselect/index",
          "packages/salesman/promote/index",
          "packages/shop/salesman/promote/index",
          "packages/order/address-map/index",
          "packages/order-native/address-map/index",
          "packages/groupbuying/buyer-trade/detail/index",
          "packages/order/invoice/index",
          "packages/shop/goods/search/index",
          "packages/collage/groupon/detail/index",
          "packages/order-native/invoice/index",
          "packages/shop/multi-store/index/index",
          "packages/order-native/coupon/index",
          "packages/shop/search-page/index",
          "packages/order-native/address-list/index",
          "packages/order-native/address-edit/index",
          "packages/paid/pay-result/success/index",
          "packages/trade-buy/order/buy/index",
          "packages/trade-pay/pay/index",
          "packages/trade/order-detail/index",
          "packages/trade-cart/cart/index",
          "packages/shop/levelcenter/free/index",
          "packages/shop/levelcenter/plus/index",
          "packages/goods-list/search-result/index",
          "pages-retail/usercenter/dashboard-v2/index",
          "packages/trade-buy-subpage/order/address-edit/index",
          "packages/shop/shopnote/detail/index",
          "packages/benefit-card/detail/index",
          "pages/home/page/index",
        ];
        var Se,
          Ce,
          Te = (function () {
            function e(t) {
              var a = t.app,
                r = t.env,
                n = t.options,
                o = void 0 === n ? {} : n;
              Object(c.a)(this, e),
                (this.__yunapp__ = a),
                (this.app = new B()),
                (this.page = null),
                (this.__process__ = {});
              var i = new ee({
                app: a,
                env: r || "prod",
                getEnv: he,
                isMock: o.isMock,
              });
              (this.request = function (e) {
                i.request(e);
              }),
                (this.uploadFile = function (e) {
                  i.uploadFile(e);
                }),
                (this.navigate = ie),
                (this.storage = new Z()),
                (this.logger = ge),
                (this.getEnv = he),
                (this.tabbar = {
                  data: ye,
                  switchTab: je,
                  getComputedTabbar: ke,
                  getMatchedTabbarItem: we,
                }),
                (this.utils = te),
                this.__init();
            }
            return (
              Object(s.a)(e, [
                {
                  key: "__init",
                  value: function () {
                    var e = this;
                    Object.defineProperty(this, "page", {
                      get: function () {
                        return e.__currentPage();
                      },
                    });
                  },
                },
                {
                  key: "getApp",
                  value: function () {
                    return this.app;
                  },
                },
                {
                  key: "resetPage",
                  value: function () {
                    var e = this.__currentPage();
                    e && (e = null);
                  },
                },
                {
                  key: "getLaunchOptionsSync",
                  value: function () {
                    return wx.getLaunchOptionsSync();
                  },
                },
                {
                  key: "__currentPage",
                  value: function () {
                    var e = (function (e, t) {
                      if (null === e) return null;
                      if ("function" != typeof t) return null;
                      for (var a = e.length - 1; a >= 0; ) {
                        var r = e[a];
                        if (t.call({}, r, a, e)) return r;
                        a--;
                      }
                      return null;
                    })(getCurrentPages(), function (e) {
                      return _e.indexOf(e.route) >= 0;
                    });
                    return e
                      ? (e.__yunPageData__ || (e.__yunPageData__ = new Y()),
                        e.__yunPageData__)
                      : null;
                  },
                },
                {
                  key: "openWebview",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "navigate",
                      a = arguments.length > 2 ? arguments[2] : void 0;
                    if (!e) return Promise.reject("navigator 参数 path 必须");
                    if (-1 === ["navigate", "redirect"].indexOf(t))
                      return Promise.reject("不支持的 type 属性 ".concat(t));
                    var r = "/packages/zan-web-view/index";
                    return (
                      a &&
                        a.youzan &&
                        xe(e) &&
                        (r = "/pages/common/webview-page/index"),
                      new Promise(function (n, o) {
                        wx["".concat(t, "To")]({
                          url: ""
                            .concat(r, "?url=")
                            .concat(encodeURIComponent(e))
                            .concat(a && a.pure ? "&pure=1" : ""),
                          fail: o,
                          success: n,
                        });
                      })
                    );
                  },
                },
              ]),
              e
            );
          })();
        function Pe(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Se || (Se = new Te({ app: e, env: t.env })), Se;
        }
        function De(e) {
          return (function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return (
              e &&
                !e.__globalBridgeReady &&
                ((e.__globalBridge = Ce = Pe(e, t)),
                (e.__globalBridgeReady = !0)),
              Ce
            );
          })(e || getApp());
        }
        (B.prototype.__addProcess = function (e, t) {
          this.process[e] = t;
        }),
          (B.prototype.__setData = function (e, t) {
            var a = this,
              n = e;
            "string" == typeof e && (n = Object(r.a)({}, e, t)),
              Object.assign(this.__data, n),
              Object.keys(n).forEach(function (e) {
                Object.defineProperty(a, e, {
                  enumerable: !0,
                  configurable: !0,
                  get: function () {
                    return a.__data[e];
                  },
                });
              }),
              this.__notifyDataSubscribers(e, t);
          }),
          (B.prototype.__setEvent = function (e, t) {
            e && (this.__events[e] = t);
          }),
          (B.prototype.__triggerLifetimes = function (e, t) {
            return G(this, e, t);
          }),
          (Y.prototype.__setData = function (e, t) {
            var a = this;
            (this.data[e] = t),
              this[e] ||
                Object.defineProperty(this, e, {
                  enumerable: !0,
                  configurable: !0,
                  get: function () {
                    return a.data[e];
                  },
                }),
              this.__notifyDataSubscribers(e, t);
          }),
          (Y.prototype.__setEvent = function (e, t) {
            e && (this.events[e] = t);
          }),
          (Y.prototype.__addProcess = function (e, t) {
            this.process[e] = t;
          }),
          (Y.prototype.__triggerLifetimes = function (e, t) {
            return G(this, e, t);
          }),
          (Te.prototype.setPageProcess = function (e, t) {
            if (e && t) {
              var a = this.__currentPage();
              a && a.__addProcess(e, t);
            }
          }),
          (Te.prototype.setPageEvent = function (e, t) {
            if (e && t) {
              var a = this.__currentPage();
              a && a.__setEvent(e, t);
            }
          }),
          (Te.prototype.setPageData = function (e, t, a) {
            var n = [];
            if ("string" != typeof t && Object.keys(t).length > 0)
              for (var c in t)
                Object.prototype.hasOwnProperty.call(t, c) && n.push([c, t[c]]);
            else "string" == typeof t && a && n.push([t, a]);
            var s = this.__currentPage();
            n.forEach(function (t) {
              var a = o(t, 2),
                n = a[0],
                c = a[1];
              Object(i.e)(e, Object(r.a)({}, n, c), function (e) {
                s && (s.__setData(n, e), s.__notifyDataSubscribers(n, e));
              });
            });
          }),
          (Te.prototype.__initTabbarData = function (e) {
            var t;
            (t = e), Object.assign(ye, t);
          }),
          (Te.prototype.on = function (e, t) {
            this.app.on(e, t);
          });
      },
      Mcke: function (e, t, a) {
        a.d(t, "d", function () {
          return w;
        }),
          a.d(t, "e", function () {
            return C;
          }),
          a.d(t, "h", function () {
            return k;
          }),
          a.d(t, "b", function () {
            return v;
          }),
          a.d(t, "a", function () {
            return p;
          }),
          a.d(t, "g", function () {
            return _;
          }),
          a.d(t, "f", function () {
            return x;
          }),
          a.d(t, "c", function () {
            return j;
          }),
          a.d(t, "i", function () {
            return T;
          });
        var r = a("Fcif"),
          n = a("w2Y9"),
          o = a.n(n),
          i = a("NERQ"),
          c = a("GFa9"),
          s = a("8B9M"),
          u = a("Y28S"),
          d = Object(s.a)(),
          p = {
            freeLevelcenter: "FreeLevelcenter",
            payLevelcenter: "PayLevelcenter",
            equityCard: "EquityCard",
          },
          l = "coupon",
          f = "goods",
          g = "casino",
          h = {
            FreeLevelcenter: {
              et: "view",
              ei: "view_free",
              en: "免费会员-返回领券弹窗曝光",
              pt: "levelcenter",
            },
            PayLevelcenter: {
              et: "view",
              ei: "view_pay",
              en: "付费会员-返回领券弹窗曝光",
              pt: "levelcenter",
            },
            EquityCard: {
              et: "view",
              ei: "view_card",
              en: "权益卡-返回领取弹窗曝光",
              pt: "quanyika",
            },
          },
          b = {
            FreeLevelcenter: {
              et: "click",
              ei: "click_free",
              en: "免费会员-点击返回领券弹窗",
              pt: "levelcenter",
            },
            PayLevelcenter: {
              et: "click",
              ei: "click_pay",
              en: "付费会员-点击返回领券弹窗",
              pt: "levelcenter",
            },
            EquityCard: {
              et: "click",
              ei: "click_card",
              en: "权益卡-点击返回领取弹窗",
              pt: "quanyika",
            },
          },
          v = "success",
          y = [
            {
              sign: "GUIDE_COUPON_SIGN",
              guideType: l,
              content: "领卡成功，前往领券",
              confirmButtonText: "去领券",
              cancelButtonText: "取消",
            },
            {
              sign: "GUIDE_GOODS_SIGN",
              guideType: f,
              content: "领卡成功，返回商品",
              confirmButtonText: "去购买",
              cancelButtonText: "取消",
            },
            {
              sign: "GUIDE_CASINO_SIGN",
              guideType: g,
              content: "领卡成功，前去抽奖",
              confirmButtonText: "去抽奖",
              cancelButtonText: "取消",
            },
          ],
          m = { [l]: "couponposter", [g]: "lottery", [f]: "goods" };
        function O(e) {
          try {
            d.logger && d.logger.log(Object(r.a)({}, e));
          } catch (e) {}
        }
        function w(e) {
          var { guideType: t, redirectUrl: a, guideDialogType: r } = e,
            n =
              a && t
                ? (function (e) {
                    return y.findIndex((t) => t.guideType === e);
                  })(t)
                : -1,
            o = n > -1;
          return {
            guideType: t,
            redirectUrl: a,
            guideDialogType: r,
            config: o ? y[n] : {},
            isGuideType: !(!o || !a),
          };
        }
        function k(e) {
          wx.setStorageSync("GUIDE_DIALOG_SEARCH", {
            guideType: e.guideType,
            redirectUrl: e.redirectUrl,
          });
        }
        function j(e, t) {
          var { guideType: a, redirectUrl: r, isGuideType: n } = w(t),
            i = e;
          return (
            n &&
              (i = o.a.add(i, {
                guideType: a,
                redirectUrl: decodeURIComponent(r),
              })),
            i
          );
        }
        function x(e, t) {
          var a = b[e];
          O(
            Object(r.a)({}, a, {
              ei: a.ei + "_" + m[t.guideType],
              params: { source_type: t.guideType },
            })
          );
          var n = decodeURIComponent(t.redirectUrl),
            i = /^\/?packages|pages/.test(n),
            s = /^\/packages|pages/.test(n);
          c.a.navigate({
            url: i
              ? (s ? "" : "/") + n
              : o.a.add("/pages/common/webview-page/index", { src: n }),
          });
        }
        function _(e, t) {
          var a = h[e];
          O(
            Object(r.a)({}, a, {
              ei: a.ei + "_" + m[t.guideType],
              params: { source_type: t.guideType },
            })
          );
        }
        function S(e, t, a) {
          var n = h[e];
          O(
            Object(r.a)({}, n, {
              ei: n.ei + "_" + m[t.guideType],
              params: { source_type: t.guideType },
            })
          ),
            i.a
              .confirm({
                message: t.config.content,
                confirmButtonText: t.config.confirmButtonText,
                cancelButtonText: t.config.cancelButtonText,
              })
              .then(() => {
                x(e, t);
              })
              .catch(() => {
                a && a();
              });
        }
        function C(e, t, a, r) {
          var n = w(a);
          if (n.guideDialogType === v) {
            var o = w(wx.getStorageSync("GUIDE_DIALOG_SEARCH"));
            o.isGuideType
              ? (wx.removeStorageSync("GUIDE_DIALOG_SEARCH"), S(e, o, r))
              : r && r();
          } else t === v && n.isGuideType ? S(e, n, r) : r && r();
        }
        var T = (e) => {
          if (e.IS_SALES && e.NEW_SALES_ID)
            return "!sales_ch~online!sales_id~" + e.NEW_SALES_ID;
          var t = Object(u.d)(e.from_params) || {};
          return t.sl ? "!sl~" + t.sl : "";
        };
      },
      NERQ: function (e, t, a) {
        var r = [],
          n = {
            show: !1,
            title: "",
            width: null,
            theme: "default",
            message: "",
            zIndex: 100,
            overlay: !0,
            selector: "#van-dialog",
            className: "",
            asyncClose: !1,
            beforeClose: null,
            transition: "scale",
            customStyle: "",
            messageAlign: "",
            overlayStyle: "",
            confirmButtonText: "确认",
            cancelButtonText: "取消",
            showConfirmButton: !0,
            showCancelButton: !1,
            closeOnClickOverlay: !1,
            confirmButtonOpenType: "",
          },
          o = Object.assign({}, n);
        var i = (e) => (
          (e = Object.assign(Object.assign({}, o), e)),
          new Promise((t, a) => {
            var n,
              o = (
                ("function" == typeof e.context ? e.context() : e.context) ||
                (n = getCurrentPages())[n.length - 1]
              ).selectComponent(e.selector);
            delete e.context,
              delete e.selector,
              o &&
                (o.setData(
                  Object.assign(
                    {
                      callback: (e, r) => {
                        "confirm" === e ? t(r) : a(r);
                      },
                    },
                    e
                  )
                ),
                wx.nextTick(() => {
                  o.setData({ show: !0 });
                }),
                r.push(o));
          })
        );
        (i.alert = (e) => i(e)),
          (i.confirm = (e) => i(Object.assign({ showCancelButton: !0 }, e))),
          (i.close = () => {
            r.forEach((e) => {
              e.close();
            }),
              (r = []);
          }),
          (i.stopLoading = () => {
            r.forEach((e) => {
              e.stopLoading();
            });
          }),
          (i.currentOptions = o),
          (i.defaultOptions = n),
          (i.setDefaultOptions = (e) => {
            (o = Object.assign(Object.assign({}, o), e)),
              (i.currentOptions = o);
          }),
          (i.resetDefaultOptions = () => {
            (o = Object.assign({}, n)), (i.currentOptions = o);
          }),
          i.resetDefaultOptions(),
          (t.a = i);
      },
      Qu2e: function (e, t, a) {
        a.d(t, "j", function () {
          return r;
        }),
          a.d(t, "l", function () {
            return n;
          }),
          a.d(t, "k", function () {
            return o;
          }),
          a.d(t, "h", function () {
            return i;
          }),
          a.d(t, "b", function () {
            return c;
          }),
          a.d(t, "d", function () {
            return s;
          }),
          a.d(t, "e", function () {
            return u;
          }),
          a.d(t, "i", function () {
            return d;
          }),
          a.d(t, "g", function () {
            return p;
          }),
          a.d(t, "a", function () {
            return l;
          }),
          a.d(t, "f", function () {
            return f;
          }),
          a.d(t, "c", function () {
            return g;
          }),
          a.d(t, "n", function () {
            return h;
          }),
          a.d(t, "m", function () {
            return b;
          });
        var r = 3,
          n = 6,
          o = 8,
          i = "init",
          c = { NO_RULE: r, RULE: n, PAY: o, ERROR_CARD_TYPE: -1 },
          s = 1,
          u = 0,
          d = {
            Color200: {
              direction: "135deg",
              colors: ["#B7D0FF", "#4E67B7"],
              bgColor: "#526AB9",
              imageUrl:
                "//img01.yzcdn.cn/public_files/2019/03/11/704e415d887541d2bf9ce945483af305.png",
            },
            Color201: {
              direction: "135deg",
              colors: ["#959595", "#20242A"],
              bgColor: "#444",
              imageUrl:
                "//img01.yzcdn.cn/public_files/2019/03/11/fb7d33fa35a5c118ba0495c09cdd1b3e.png",
            },
            Color202: {
              direction: "135deg",
              colors: ["#8BECBD", "#319E69"],
              bgColor: "#2F835A",
              imageUrl:
                "//img01.yzcdn.cn/public_files/2019/03/11/7ac9de05b089cb13d36323d6864b8d49.png",
            },
            Color203: {
              direction: "135deg",
              colors: ["#FF9E97", "#C44E46"],
              bgColor: "#8B3C36",
              imageUrl:
                "//img01.yzcdn.cn/public_files/2019/03/11/17fbdf65817fef6f4bd7acdb8fa414ab.png",
            },
            Color204: {
              direction: "135deg",
              colors: ["#FFDAA6", "#CE9A51"],
              bgColor: "#8C714B",
              imageUrl:
                "//img01.yzcdn.cn/public_files/2019/03/11/659d46363828ac8f571bd4a13ad89458.png",
            },
            Color205: {
              direction: "135deg",
              colors: ["#FFB5C1", "#D73B5B"],
              bgColor: "#9D4456",
              imageUrl:
                "//img01.yzcdn.cn/public_files/2019/03/11/7646eb0f59b1ce45d3cfbcb67686e93d.png",
            },
            Color206: {
              direction: "135deg",
              colors: ["#FCFCFC", "#A8A8A8"],
              bgColor: "#444444",
            },
          },
          p = 1,
          l = 2,
          f = 3,
          g = {
            Color030: "Color200",
            Color040: "Color200",
            Color050: "Color200",
            Color102: "Color201",
            Color010: "Color202",
            Color020: "Color202",
            Color082: "Color202",
            Color090: "Color203",
            Color100: "Color203",
            Color101: "Color203",
            Color060: "Color204",
            Color070: "Color204",
            Color080: "Color204",
            Color081: "Color204",
          },
          h =
            "https://img01.yzcdn.cn/public_files/23f9f5089197722cff6962bc33a66929.png",
          b = {
            appName: "更多权益",
            icon: "https://img01.yzcdn.cn/public_files/a1fb1079aa056c48631a190bc5247dd9.png",
            benefitTplId: 0,
          };
      },
      "S+xN": function (e, t, a) {
        var r;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var n = {
          fullfillImage: ((r = a("XHR9")) && r.__esModule ? r : { default: r })
            .default,
        };
        (t.default = n), (e.exports = t.default);
      },
      Sei9: function (e, t, a) {
        a.d(t, "f", function () {
          return d;
        }),
          a.d(t, "b", function () {
            return p;
          }),
          a.d(t, "c", function () {
            return f;
          }),
          a.d(t, "e", function () {
            return g;
          }),
          a.d(t, "g", function () {
            return h;
          }),
          a.d(t, "d", function () {
            return v;
          }),
          a.d(t, "h", function () {
            return y;
          }),
          a.d(t, "a", function () {
            return m;
          });
        var r = a("Fcif"),
          n = a("zMoS"),
          o = a("v6dD"),
          i = a("3tyi"),
          c = a("rDSc"),
          s = a("a1Mm"),
          u = a("Qu2e"),
          d = (e) => null == e;
        var p = (e, t, a, o) => {
            var {
              diyTemplateList: d = [],
              experienceCard: p,
              diyBenefitList: f,
            } = e;
            e = Object(c.a)(e, [
              "diyTemplateList",
              "experienceCard",
              "diyBenefitList",
            ]);
            var g = [],
              h = Object.keys(
                Object(i.a)(e, [
                  "postage",
                  "discount",
                  "memberPrice",
                  "pointsFeedBack",
                  "paidContent",
                ])
              ),
              b = Object.keys(
                Object(i.a)(e, ["points", "growth", "coupon", "present"])
              ),
              v = [];
            v =
              a && f
                ? f.map((e) => {
                    var t = Object.assign(
                      e.diyTemplate.benefitTemplateExternal,
                      Object(c.a)(e.diyTemplate, "benefitTemplateExternal")
                    );
                    return Object(r.a)({}, t, {
                      benefitId: e.benefitId,
                      termCycle: e.termCycle,
                      resetNum: e.stockNum,
                    });
                  })
                : d.map((e) => {
                    var t = Object.assign(
                      Object(n.a)(e, "benefitTemplateExternal", {}),
                      Object(c.a)(e, "benefitTemplateExternal")
                    );
                    return Object(r.a)({}, t);
                  });
            var y = h
                .map((t) => {
                  if (e[t]) {
                    var r = e[t];
                    return (
                      a
                        ? (((r =
                            "paidContent" === t
                              ? Object.assign(e[t][t + a], o[t])
                              : e[t][t + a]).resetNum = e[t].stockNum),
                          (r.termCycle = e[t].termCycle))
                        : (r.benefitId = e[t].benefitId),
                      (r.key = t),
                      delete e[t],
                      r
                    );
                  }
                  return null;
                })
                .filter((e) => !!e),
              m = b
                .map((t) => {
                  if (e[t]) {
                    var r = e[t];
                    return (
                      a
                        ? (((r =
                            "present" === t
                              ? Object.assign(e[t][t + a], o[t])
                              : e[t][t + a]).resetNum = e[t].stockNum),
                          (r.termCycle = e[t].termCycle))
                        : (r.benefitId = e[t].benefitId),
                      (r.key = t),
                      "coupon" === t &&
                        (r.total = r.couponList.reduce(
                          (e, t) => e + t.number,
                          0
                        )),
                      delete e[t],
                      r
                    );
                  }
                  return null;
                })
                .filter((e) => !!e),
              O = p;
            return (
              p &&
                a &&
                (O = Object.assign(
                  p.experienceCardTpl,
                  Object(c.a)(p, "experienceCardTpl")
                )),
              p &&
                t !== u.d &&
                g.unshift(Object(r.a)({}, O, { key: "experienceCard" })),
              ((e) =>
                e.map((e) =>
                  Object(r.a)({}, e, {
                    appName: Object(n.a)(e, "benefitPluginInfo.showName", ""),
                    label: l(e),
                    icon: Object(s.a)(
                      Object(n.a)(e, "benefitPluginInfo.icon", "")
                    ),
                  })
                ))((g = g.concat(y).concat(v).concat(m)))
            );
          },
          l = (e) => {
            var t = Object(n.a)(e, "key", ""),
              a = Object(n.a)(e, "benefitPluginInfo.description", "");
            switch (t) {
              case "discount":
                return "" + a + Object(n.a)(e, "discount", 100) / 10 + "折";
              case "experienceCard":
                return "" + a + Object(n.a)(e, "stockNum", 0) + "张";
              case "points":
                return "" + a + Object(n.a)(e, "points", 0) + "个";
              case "pointsFeedBack":
                return "" + a + Object(n.a)(e, "rate", 0) / 10 + "倍";
              case "growth":
                return "" + a + Object(n.a)(e, "growthValue", 0) + "个";
              default:
                return Object(n.a)(e, "benefitPluginInfo.description", "");
            }
          },
          f = function (e, t) {
            return void 0 === t && (t = "YYYY-MM-DD"), Object(o.b)(e, t);
          },
          g = (e) => {
            var t,
              a = {};
            [
              "is_share",
              "dc_ps",
              "from_source",
              "from_params",
              "qr",
              "atr_ps",
              "gdt_vid",
              "qz_gdt",
            ].forEach((t) => {
              a[t] = Object(n.a)(e, t, "");
            });
            var o = getApp().logger.getLogParams(),
              i =
                a.from_params ||
                (o &&
                  (null == o || null == (t = o.context)
                    ? void 0
                    : t.from_params));
            return (
              i &&
                (a = Object(r.a)({}, a, {
                  biz_trace_point_ext: Object(r.a)(
                    {},
                    a.biz_trace_point_ext || {},
                    { from_params: i }
                  ),
                })),
              a
            );
          },
          h = (e, t) => {
            var { grantCycle: a = !1, stockNum: r, resetNum: o } = e,
              i = Object(n.a)(
                e,
                "benefitPluginInfo.showName",
                Object(n.a)(e, "appName", "")
              );
            return a
              ? "权益卡有效期内，每" +
                  { 1: "日", 7: "周", 30: "月", 90: "季度", 365: "年" }[
                    a.termDays
                  ] +
                  "可使用" +
                  e.stockNum +
                  "次" +
                  i +
                  "权益"
              : (!d(r) && !d(o)) || (!d(r) && !t)
              ? "权益卡有效期内，可使用" + r + "次" + i + "权益"
              : "权益卡有效期内，可使用" + i + "权益";
          },
          b = (e) => Object(o.b)(e, "YYYY-MM-DD"),
          v = (e) => Object(o.b)(e, "YYYY-MM-DD HH:mm:ss"),
          y = (e) => {
            switch (e.termType) {
              case 1:
                return "永久有效";
              case 2:
                return b(e.termBeginAt) + " - " + b(e.termEndAt);
              case 4:
                return "领卡后" + e.termDays + "内有效";
              default:
                return "";
            }
          };
        function m(e) {
          return (
            void 0 === e && (e = ""),
            /iphone-x|iPhone11|iPhone13|iPhone14|iPhone12(?!,8>)/i.test(
              e.replace(/\s/g, "-") || ""
            ) || /iPhone14/i.test(e.replace(/\s/g, "") || "")
          );
        }
      },
      TJjZ: function (e, t, a) {
        a.d(t, "a", function () {
          return n;
        });
        var r = a("YZeP");
        function n(e, t) {
          if (e) {
            if ("string" == typeof e) return Object(r.a)(e, t);
            var a = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === a && e.constructor && (a = e.constructor.name),
              "Map" === a || "Set" === a
                ? Array.from(e)
                : "Arguments" === a ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                ? Object(r.a)(e, t)
                : void 0
            );
          }
        }
      },
      VGj5: function (e, t, a) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ruleAdapter = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "";
            t = t.trim();
            var a = /^origin|middle|large|small$/i,
              r = t.match(a);
            if (r) {
              var n = s(e),
                o = r[0];
              t = u(o, n);
            }
            return t;
          }),
          (t.urlAdaptor = function (e, t) {
            var a = l(e, t);
            e = a
              ? a.hasWatermark
                ? (function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      a = arguments.length > 2 ? arguments[2] : void 0,
                      r = e,
                      n = t.isGifOptimation,
                      i = o() && (a || l(e, n));
                    if (i) {
                      var c = i.hasWatermark,
                        s = i.format,
                        u = i.width,
                        f = i.height,
                        g = i.quality,
                        h = i.imgSuffixAndWatermark,
                        b = "imageView2/2/w/"
                          .concat(u, "/h/")
                          .concat(f, "/q/")
                          .concat(g, "/format/")
                          .concat(s),
                        v = c ? "|" : "?";
                      r = ""
                        .concat(r.replace(p(), ".") + h)
                        .concat(v)
                        .concat(encodeURIComponent(b));
                    } else r = d(r);
                    return r;
                  })(e, t, a)
                : (function (e, t) {
                    var a = t.originFormat,
                      r = t.format,
                      n = t.width,
                      o = (function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 1e3,
                          t = ["small", "middle", "large", "origin"],
                          a = 3;
                        e <= 260
                          ? (a = 0)
                          : e <= 520
                          ? (a = 1)
                          : e <= 900 && (a = 2);
                        return t[a];
                      })(n),
                      i = e.replace(p(), ""),
                      c = u(o, r);
                    return "".concat(i, ".").concat(a).concat(c);
                  })(e, a)
              : d(e);
            return e;
          }),
          (t.parseUrl =
            t.getCdnRegex =
            t.transQiniuFormatToWebp =
            t.checkWeakNetwork =
            t.getWeakNetwork =
            t.getCanWebp =
              void 0);
        var r = a("04fg"),
          n = {
            canwebp: (0, r.getStorage)("canwebp"),
            networkStatus: (0, r.getStorage)("networkStatus"),
          },
          o = function () {
            var e = !1;
            try {
              n.canwebp || (n.canwebp = (0, r.getStorage)("canwebp")),
                (e = "ok" === n.canwebp);
            } catch (t) {
              return e;
            }
            return e;
          };
        t.getCanWebp = o;
        var i = function (e) {
            return "2g" === e || "3g" === e || "none" === e;
          },
          c = function (e) {
            var t,
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1e4,
              o = i(e),
              c = i(e) ? "bad" : "fine";
            o
              ? (t = setTimeout(function () {
                  (0, r.setStorage)("networkStatus", c), (n.networkStatus = c);
                }, a))
              : (t && clearTimeout(t),
                (0, r.setStorage)("networkStatus", c),
                (n.networkStatus = c));
          };
        t.getWeakNetwork = function () {
          var e = !1;
          try {
            e =
              "bad" === (n.networkStatus || (0, r.getStorage)("networkStatus"));
          } catch (e) {}
          return e;
        };
        t.checkWeakNetwork = function () {
          try {
            "undefined" != typeof wx &&
              wx.getNetworkType &&
              wx.onNetworkStatusChange &&
              (wx.getNetworkType({
                success: function (e) {
                  return c(e.networkType);
                },
              }),
              wx.onNetworkStatusChange(function (e) {
                return c(e.networkType);
              }));
          } catch (e) {}
        };
        var s = function (e) {
            var t = e.match(/\.(jpe?g|png|bmp|gif)/i),
              a = "jpg";
            return t && (a = t[1]), a;
          },
          u = function (e, t) {
            var a = (function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              e = e.toLocaleLowerCase();
              var t = /(jpg|gif|png|webp)/;
              return t.test(e) || (e = "jpg"), o() && (e = "webp"), e;
            })(t);
            return "!".concat(e, ".").concat(a);
          },
          d = function (e) {
            var t,
              a = o(),
              r = /(\?imageView2\/\d\/w\/\d+\/h\/\d+\/q\/\d+\/format\/)(\w+)/;
            if (((t = e), r.test(e))) {
              var n = e.match(r)[2];
              if (a) "webp" !== n && (t = e.replace(r, "$1webp"));
              else if ("webp" === n) {
                var i = s(e);
                t = e.replace(r, "$1".concat(i));
              }
            }
            return t;
          };
        t.transQiniuFormatToWebp = d;
        var p = function () {
          return /\.([^.!]+)!([0-9]{1,4})x([0-9]{1,4})q?([0-9]{0,2}|100)?(\+2x)?\..+/;
        };
        t.getCdnRegex = p;
        var l = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            a = o(),
            r = t.isGifOptimation,
            n = /([^.!]+)\?watermark\/.*\/$/,
            i = 1,
            c = e.match(p());
          if (!c || c.length < 4) return null;
          var s,
            u = r ? "gif/unoptimize/1" : "gif",
            d = c[1].match(n),
            l = !1;
          d && d.length ? ((s = d[1]), (l = !0)) : (s = c[1]);
          var f = s || "";
          return (
            "gif" === s
              ? (f = u)
              : a
              ? (f = "webp")
              : ("webp" !== s && "jpeg" !== s) || (f = "jpg"),
            "+2x" === c[5] && (i = 2),
            {
              hasWatermark: l,
              originFormat: s,
              format: f.toLocaleLowerCase(),
              width: parseInt(c[2], 10) * i,
              height: parseInt(c[3], 10) * i,
              quality: c[4] || 75,
              imgSuffixAndWatermark: c[1],
              multiple: i,
            }
          );
        };
        t.parseUrl = l;
      },
      XHR9: function (e, t, a) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = a("ECKV"),
          n = a("04fg"),
          o = a("VGj5");
        var i = function (e, t) {
          var a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if (!e) return "";
          if (e.match(/^data:/i)) return e;
          if (!a.imgcdn && !a.imgqn) {
            var i = (0, n.getRoot)(),
              c = (i._global && i._global.url) || r.GLOBAL_URL;
            a.imgcdn = c.imgqn || c.imgcdn;
          }
          var s = a.imgcdn || a.imgqn || "https://img01.yzcdn.cn",
            u = [
              /^(https?:)?\/\/imgqn.koudaitong.com/,
              /^(https?:)?\/\/kdt-img.koudaitong.com/,
              /^(https?:)?\/\/img01.yzcdn.cn/,
              /^(https?:)?\/\/dn-kdt-img.qbox.me/,
            ];
          t = (0, o.ruleAdapter)(e, t);
          for (var d = 0; d < u.length; d++) e = e.replace(u[d], s);
          if (
            (e = (e = e.replace(
              /^http:\/\/img(\d+).yzcdn.cn/,
              "https://img$1.yzcdn.cn/"
            )).replace(
              "imgqntest.koudaitong.com",
              "dn-kdt-img-test.qbox.me"
            )).match(/^(https?:)?\/\//i)
          ) {
            if (
              !(
                e.match(s) ||
                e.match(/img(\d*)\.yzcdn\.cn/) ||
                e.match("dn-kdt-img-test.qbox.me")
              )
            )
              return e;
            e.match("!") || (e = "".concat(e).concat(t));
          } else e = "".concat(s, "/").concat(e).concat(t);
          return !1 !== a.toWebp && (e = (0, o.urlAdaptor)(e, a)), e;
        };
        (t.default = i), (e.exports = t.default);
      },
      YZeP: function (e, t, a) {
        function r(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
          return r;
        }
        a.d(t, "a", function () {
          return r;
        });
      },
      dV47: function (e, t, a) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = o(a("6F6u")),
          n = o(a("pIhq"));
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var i = { debounce: r.default, throttle: n.default };
        (t.default = i), (e.exports = t.default);
      },
      gc3r: function (e, t, a) {
        a.d(t, "b", function () {
          return p;
        }),
          a.d(t, "a", function () {
            return l;
          });
        var r = a("Fcif"),
          n = a("jA1y"),
          o = a("vgcL"),
          i = a("2wjL"),
          c = a("u8kV"),
          s = a("rDSc"),
          u = a("8B9M"),
          d = function (e, t) {
            e || (!1 !== t.isNeedShareMore && this.setYZData({ salesman: t }));
          },
          p = (e) => {
            var t = Object(s.a)(Object(r.a)({}, e, { path: e.url }), "url");
            return Object(n.c)(t);
          },
          l = function (e) {
            var {
                scene: t,
                sst: a,
                gst: n,
                getSalesmanData: s = d,
                query: l,
              } = e,
              f = Object(u.a)() || {},
              g = f.getToken() || {},
              { route: h = "", options: b = {} } = Object(c.d)(),
              v = l || b,
              y = i.a.add(h, v),
              m = { gst: (n = n || Object(o.e)(t)), sst: a, sourceUrl: y },
              { yzUserId: O } = g;
            Object(o.f)({
              url: y,
              logParams: f.logger.getLogParams && f.logger.getLogParams(),
              userId: O,
              request: p,
            }),
              Object(o.a)(Object(r.a)({}, m)),
              Object(o.b)({}, s.bind(this));
          };
      },
      hisu: function (e, t, a) {
        function r(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        a.d(t, "a", function () {
          return r;
        });
      },
      jQ93: function (e, t, a) {
        var r = a("rmWm"),
          n = a.n(r).a,
          o = a("YIkY"),
          i = a.n(o).a;
        function c(e) {
          return (
            !0 ==
              (null != (t = e) &&
                "object" == typeof t &&
                !1 === Array.isArray(t)) &&
            "[object Object]" === Object.prototype.toString.call(e)
          );
          var t;
        }
        var s = function (e) {
          var t, a;
          return (
            !1 !== c(e) &&
            "function" == typeof (t = e.constructor) &&
            !1 !== c((a = t.prototype)) &&
            !1 !== a.hasOwnProperty("isPrototypeOf")
          );
        };
        t.a = function (e) {
          var t,
            a = i(e);
          if ("object" !== a && "array" !== a) return n(e);
          for (
            var r = [],
              o = [{ value: e, key: void 0, ctx: null }],
              c = function () {
                var e = o.shift(),
                  { value: a, key: c, ctx: u } = e;
                r.forEach((e) => {
                  if (e === a) throw new Error("Deep copy circular structure");
                });
                var { value: d, needCycle: p } = (function (e) {
                  switch (i(e)) {
                    case "object":
                      return s(e)
                        ? { value: new e.constructor(), needCycle: !0 }
                        : { value: e, needCycle: !1 };
                    case "array":
                      return { value: new e.constructor(), needCycle: !0 };
                    default:
                      return { value: n(e), needCycle: !1 };
                  }
                })(a);
                u ? (u[c] = d) : (t = d),
                  p && r.push(a),
                  p &&
                    Object.keys(a).forEach((e) => {
                      o.push({ value: a[e], key: e, ctx: d });
                    });
              };
            o.length > 0;

          )
            c();
          return t;
        };
      },
      jZtE: function (e) {
        e.exports = JSON.parse("{}");
      },
      pIhq: function (e, t, a) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = function (e, t, a) {
          var r,
            n,
            o = [],
            i = 0;
          a || (a = {});
          var c = function () {
              (i = !1 === a.leading ? 0 : new Date().getTime()),
                (r = null),
                e.apply(n, o),
                r || ((n = null), (o = []));
            },
            s = function () {
              for (
                var o = arguments.length, s = new Array(o), u = 0;
                u < o;
                u++
              )
                s[u] = arguments[u];
              var d = new Date().getTime();
              i || !1 !== a.leading || (i = d);
              var p = t - (d - i);
              (n = this),
                p <= 0 || p > t
                  ? (r && clearTimeout(r),
                    (r = null),
                    (i = d),
                    e.apply(n, s),
                    r || ((n = null), (s = [])))
                  : r || !1 === a.trailing || (r = setTimeout(c, p));
            };
          return (
            (s.cancel = function () {
              r && clearTimeout(r), (i = 0), (r = null);
            }),
            s
          );
        };
        (t.default = r), (e.exports = t.default);
      },
      yBJb: function (e, t, a) {
        a.d(t, "a", function () {
          return o;
        });
        var r = a("z6zH");
        function n(e, t) {
          for (var a = 0; a < t.length; a++) {
            var n = t[a];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, Object(r.a)(n.key), n);
          }
        }
        function o(e, t, a) {
          return (
            t && n(e.prototype, t),
            a && n(e, a),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        }
      },
      zZvV: function (e, t, a) {
        var r = a("8B9M"),
          n = a("qako"),
          o = {
            getYunSdk: () => Object(r.a)().getYouZanYunSdk(),
            onAsync(e, t, a) {
              var o = Object(r.a)();
              (a = a || this || {}), n.a.onAsync.apply(o, [e, t, a]);
            },
            offAsync(e, t, a) {
              n.a.offAsync.apply(Object(r.a)(), [e, t, a || this || {}]);
            },
            triggerAsync() {
              for (
                var e = arguments.length, t = new Array(e), a = 0;
                a < e;
                a++
              )
                t[a] = arguments[a];
              return n.a.triggerAsync.apply(Object(r.a)(), t);
            },
          };
        t.a = o;
      },
    }
  )
);
