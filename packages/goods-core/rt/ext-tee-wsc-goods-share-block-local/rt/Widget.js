"use strict";
var r = require("~/r");
r(
  "TUHH",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      IORD: function (e, t, s) {
        var a = s("9ZMt"),
          i = s("HbRL"),
          o = s("MLLI"),
          r = s("0hwI");
        t.a = () =>
          new Promise((e, t) => {
            try {
              !(function () {
                var { SDKVersion: e } = Object(o.b)();
                return (
                  Object(i.a)(e, "3.2.5") >= 0 &&
                  !!a.default.$native.showShareImageMenu
                );
              })()
                ? e(!1)
                : r.a
                    .get({
                      url: "/wscshop/showcase/share/useWxImageShare.json",
                      data: s,
                    })
                    .then((t) => {
                      e(t);
                    })
                    .catch(() => {
                      e(!1);
                    });
            } catch (e) {
              t(e);
            }
            var s;
          });
      },
      TUHH: function (e, t, s) {
        s.r(t);
        var a = s("Fcif"),
          i = s("Q56H"),
          o = s("AGZf"),
          r = s("mztD"),
          h = s("lgMb"),
          d = s("FSSn"),
          n = s("w2Y9"),
          c = s.n(n),
          p = s("mQXz"),
          l = s.n(p),
          u = s("YeA1"),
          g = s("9ZMt"),
          y = s("ONqW"),
          f = s("NHEX"),
          m = s.n(f),
          v = s("Hb1V"),
          I = s("fSjc"),
          b = s("XKO5"),
          S = s("IORD"),
          O = s("c2Og"),
          j = {
            name: "share-block",
            props: { reset: Boolean },
            data: () => ({
              kdtId: 0,
              offlineId: 0,
              showPoster: !1,
              sharePopup: !1,
              showGuide: !1,
              shareQuery: { is_share: 1, shopAutoEnter: 1 },
              popOpts: {},
              isShareStyle: !1,
              hasVideo: !1,
              isWxShareImg: !1,
              isReservation: !1,
            }),
            logicData: () => ({
              goods: {},
              shopMetaInfo: {},
              goodsPriceInfo: {},
              env: {},
              shopConfig: {},
              shareGoodsId: 0,
              isAppSdk: !1,
              hasWxshareRes: !1,
            }),
            computed: {
              alias() {
                return this.goods.alias;
              },
              rootKdtId() {
                return this.shopMetaInfo.rootKdtId;
              },
              platform() {
                return this.env.platform;
              },
              needAddVideoIcon() {
                return this.isShareStyle && this.hasVideo;
              },
            },
            watch: {
              goods(e, t) {
                t.alias && e.alias !== t.alias && (this.copyText = ""),
                  this.setIsVideo(),
                  this.setGoodsShareData();
              },
              shopConfig() {
                this.isShareStyle = 1 === this.shopConfig.goodsSharePageStyle;
              },
              kdtId() {
                this.setGoodsShareData();
              },
              offlineId() {
                this.offlineId &&
                  ((this.shareQuery.oid = this.offlineId),
                  this.setGoodsShareData());
              },
              goodsPriceInfo(e) {
                Object(v.a)({
                  goods: this.goods,
                  price: e.price,
                  shareData: this.ctx.data.shareData,
                  platform: this.env.platform,
                });
              },
              showPoster(e) {
                this.toggleBodyLocked(e);
              },
            },
            created() {
              var e = this.ctx.logger.getLogParams();
              (this.shareQuery.dc_ps = m()(e, "context.dc_ps", "")),
                (this.shareQuery.from_uuid = m()(e, "user.uuid", "")),
                this.ctx.env.getQueryAsync().then((e) => {
                  var t = "";
                  try {
                    var s = getApp(),
                      { yzUserId: a } = s.getToken() || {};
                    t = a;
                  } catch (e) {}
                  null != e &&
                    e.from_params &&
                    t &&
                    (this.shareQuery.guide_second_sharer_id = t),
                    (this.isReservation = "tableBooking" === e.type);
                }),
                this.initListener();
            },
            destroyed() {},
            methods: {
              initListener() {
                var e = this;
                Object(u.b)(this, [
                  "kdtId",
                  "goods",
                  "offlineId",
                  "shopMetaInfo",
                  "goodsPriceInfo",
                  "env",
                  "shopConfig",
                ]),
                  Object(u.b)(this, {
                    seActivity: (e) => this.initShareBenefit(e),
                    shopConfig: (e) => {
                      this.isShareStyle = 1 === e.goodsSharePageStyle;
                    },
                  }),
                  Object(u.d)(this, {
                    "share:item": (e) => {
                      "poster" === e && (this.showPoster = !0);
                    },
                    "share:show": () => {
                      (this.sharePopup = !0),
                        this.isReservation
                          ? this.setReservationCopyText()
                          : (this.setCopyText(),
                            this.hasWxshareRes ||
                              ((this.hasWxshareRes = !0),
                              Object(S.a)({ kdtId: this.kdtId }).then(function (
                                t
                              ) {
                                void 0 === t && (t = !1), (e.isWxShareImg = t);
                              })));
                    },
                    "share:query": (e) => {
                      (this.shareQuery = Object(a.a)({}, this.shareQuery, e)),
                        this.setGoodsShareData();
                    },
                    "share:setPageShareParams": (e) => {
                      this.setCloudPageShareParams(e);
                    },
                    "share:pop": (e) => {
                      this.popOpts = e;
                    },
                    "share:optionMenu": (e) => {},
                    goodsSetupInit: (e) => {
                      this.onGoodsInit(e);
                    },
                    updateShareData: (e) => {
                      this.ctx.data.shareData = e;
                    },
                  });
              },
              setIsVideo() {
                (this.goods.video && this.goods.video.videoUrl) ||
                (this.goods.explainVideo && this.goods.explainVideo.videoUrl)
                  ? (this.hasVideo = !0)
                  : (this.hasVideo = !1);
              },
              onItemClick(e) {
                if ("native" === e.type)
                  return (
                    Object(y.a)().log({
                      et: "click",
                      ei: "goods_sharefriend",
                      en: "点击分享给好友",
                      si: "",
                    }),
                    void this.onClose()
                  );
                if ("copy" === e.type)
                  return (
                    Object(y.a)().log({
                      et: "click",
                      ei: "share",
                      en: "复制链接",
                    }),
                    this.doCopyText()
                  );
                if ("poster" === e.type) {
                  var t;
                  if (
                    (Object(y.a)().log({
                      et: "click",
                      ei: "goods_photo",
                      en: "点击生成海报",
                      params: { isWxShareImg: this.isWxShareImg },
                    }),
                    this.isReservation)
                  )
                    null == (t = getApp().globalData) || t.eventBusPoster();
                  else this.showPoster = !0;
                  this.onClose();
                }
              },
              onClose() {
                this.ctx.event.emit("share:close"), (this.sharePopup = !1);
              },
              onClosePoster() {
                this.showPoster = !1;
              },
              setCloudPageShareParams(e) {
                void 0 === e && (e = {});
                var t = Object(a.a)({}, this.ctx.data.shareData || {}, e, {
                  path: e.url,
                });
                this.setWeappShareInfo(t);
              },
              setGoodsShareData() {
                var {
                    title: e,
                    subTitle: t,
                    picture: s = "",
                    alias: i,
                    pictureWithVideoIcon: o,
                  } = this.goods,
                  { path: r } = this.goods;
                if (this.kdtId && e && i) {
                  var h;
                  r || (r = this.getSharePath()),
                    (h = {
                      title: e,
                      desc: t,
                      path: c.a.add(
                        this.isShareStyle ? Object(v.c)(r) : r,
                        this.shareQuery
                      ),
                      imageUrl: o || s,
                    });
                  var d = Object(a.a)({}, c.a.getAll(h.path), this.shareQuery, {
                    alias: i,
                    kdtId: this.kdtId,
                    offlineId: this.offlineId,
                    videoIconPicture: o || "",
                  });
                  this.setWeappShareInfo(h), this.fetchShareCard(d);
                }
              },
              getWeappShareCard(e) {
                return Object(v.d)(e, this.params, v.b)
                  ? new Promise((e) => {
                      e(this.weappCardResult);
                    })
                  : ((this.params = e), Object(d.d)(e));
              },
              setWeappShareInfo(e) {
                (this.ctx.data.shareData = e),
                  this.ctx.process.invokePipe("setShareInfo", e).then((e) => {
                    (e.path = c.a.remove(e.path, "oid")),
                      (this.ctx.data.shareData = e);
                  });
              },
              fetchShareCard(e) {
                var { title: t, subTitle: s, picture: i, id: o } = this.goods,
                  { path: h } = this.goods;
                this.getWeappShareCard(e).then((d) => {
                  if (d) {
                    var {
                      shareTitle: n,
                      alg: p = "",
                      imgUrl: l,
                      share_from: u = "",
                      cardImage: g,
                    } = d;
                    (this.params = e), (this.weappCardResult = d);
                    var y = l,
                      f = {};
                    try {
                      ({ imageUrl: y, cardImageQuery: f } = this.getShareImage(
                        l,
                        i,
                        o,
                        g
                      ));
                    } catch (e) {
                      var m;
                      null == (m = this.ctx.hummer) ||
                        m.capture("小程序分享卡片图解析异常", e);
                    }
                    h || (h = this.getSharePath());
                    var I = {
                      title: n || t,
                      desc: s,
                      imageUrl:
                        Object(r.a)(y, "!large.png", { toWebp: !1 }) || i,
                      path: c.a.add(
                        this.isShareStyle ? Object(v.c)(h) : h,
                        Object(a.a)({}, this.shareQuery, f, {
                          alg: p,
                          share_from: u,
                        })
                      ),
                    };
                    this.setWeappShareInfo(I);
                  }
                });
              },
              onGoodsInit(e) {
                var t,
                  s,
                  a =
                    null == e ||
                    null == (t = e.goodsData) ||
                    null == (s = t.goods)
                      ? void 0
                      : s.id;
                this.logWeappGoodsLoad(a);
              },
              logWeappGoodsLoad(e) {
                this.ctx.env.getQueryAsync().then((t) => {
                  Object(y.a)().log({
                    et: "click",
                    ei: "goods_share_click_load",
                    en: "商品详情分享点击加载",
                    pt: "g",
                    pi: e,
                    params: Object(a.a)({}, Object(b.a)(t), { goods_id: e }),
                  });
                });
              },
              getShareImage: (e, t, s, a) => ({
                imageUrl: Object(I.b)(e, t, s, a),
                cardImageQuery: Object(I.a)(a),
              }),
              setReservationCopyText() {
                var [e] = getCurrentPages(),
                  { kdt_id: t, pageId: s } = e.options;
                Object(d.b)({
                  id: s,
                  kdtId: t,
                  type: 4,
                  path: c.a.add(e.route, e.options),
                }).then((e) => {
                  this.copyText = null == e ? void 0 : e[0];
                });
              },
              doCopyText() {
                var { copyText: e } = this;
                if (e) return this.setCopyTextToClip();
                this.setCopyText()
                  .then(() => {
                    this.setCopyTextToClip();
                  })
                  .catch((e) => {
                    Object(h.b)(e, { message: " 链接获取失败，请稍后重试" });
                  });
              },
              setCopyText() {
                return new Promise((e, t) => {
                  if (this.copyText) return e();
                  if (this.isRequesting) return t();
                  this.isRequesting = !0;
                  var {
                      activityId: s,
                      activityType: i,
                      type: o,
                      umpAlias: r,
                      umpType: h,
                      sl: n,
                      ump_type: c,
                      ump_alias: p,
                    } = this.$getPageQuery(),
                    { title: l, alias: u, id: g } = this.goods,
                    y = Object(a.a)(
                      {
                        alias: u,
                        goodsId: g,
                        type: this.isShareStyle ? "share_goods" : "new_goods",
                        activityId: s,
                        activityType: (() => {
                          if ("helpcut" === o) return "helpCut";
                          var e = o || i;
                          return ["share_goods", "new_goods"].includes(e)
                            ? ""
                            : e;
                        })(),
                        ump_alias: r || p,
                        ump_type: h || c,
                        sl: n,
                      },
                      this.shareQuery
                    ),
                    f = Object.keys(y).reduce(
                      (e, t) => (y[t] && (e[t] = y[t]), e),
                      {}
                    );
                  return Object(d.a)(f)
                    .then(
                      (t) => (
                        (this.copyText =
                          "【" + l + "】" + (null == t ? void 0 : t.shortLink)),
                        (this.isRequesting = !1),
                        e()
                      )
                    )
                    .catch((e) => ((this.isRequesting = !1), t(e)));
                });
              },
              setCopyTextToClip() {
                Object(i.b)(this.copyText)
                  .then(() => {
                    this.onClose();
                  })
                  .catch(() => {
                    Object(o.a)({ message: "复制失败", position: "bottom" });
                  });
              },
              onCloseGuide() {
                this.showGuide = !1;
              },
              toggleBodyLocked(e) {
                this.ctx.event.emit("page-container:scrollLocked", e);
              },
              initShareBenefit(e) {
                if (e) {
                  var { activityAlias: t } = e;
                  Object(O.a)({ activityAlias: t, kdtId: this.kdtId }).then(
                    (e) => {
                      var { alias: t } = e;
                      (this.shareQuery = Object(a.a)({}, this.shareQuery, {
                        shareTag: t,
                      })),
                        this.setGoodsShareData();
                    }
                  ),
                    this.ctx.lambdas.hasLogin().then((t) => {
                      this.popOpts = Object(O.b)({
                        seActivity: e,
                        hasLogin: t,
                        kdtId: this.kdtId,
                        alias: this.alias,
                      });
                    });
                }
              },
              getSharePath() {
                var e = this.$getPageQuery(),
                  t = "/" + this.$getPageRoute();
                return c.a.add(
                  t,
                  l()(e, ["access_token", "app_id", "prefetchKey"])
                );
              },
            },
            ud: !0,
          };
        t.default = g.default.component(j);
      },
      XKO5: function (e, t, s) {
        function a(e) {
          return /^\d+$/.test("" + e);
        }
        function i(e) {
          var t,
            { share_from: s, card_type: i, img_ps: o } = e || {},
            [r, h] =
              (t = decodeURIComponent(o || "")) && "string" == typeof t
                ? t.split("|").map((e) =>
                    e
                      .split(",")
                      .filter((e) => a(e))
                      .map((e) => +e)
                  )
                : [];
          return {
            share_from: s,
            card_type: a(i) ? +i : void 0,
            img_process_types: r,
            img_process_sub_types: h,
          };
        }
        s.d(t, "b", function () {
          return a;
        }),
          s.d(t, "a", function () {
            return i;
          });
      },
    }
  )
);
