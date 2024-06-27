"use strict";
var r = require("~/r");
r(
  "ewIm",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "d/TA": function (e, o, t) {
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.default = void 0);
        var i = function (e) {
          return /^((?:(?:https?|ftp):|)\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
            e
          );
        };
        (o.default = i), (e.exports = o.default);
      },
      ewIm: function (e, o, t) {
        t.r(o);
        var i = t("Fcif"),
          s = t("9ZMt"),
          a = t("MLLI"),
          n = t("YeA1"),
          u = t("4ofq"),
          r = t("GaIL"),
          d =
            (t("rekS"),
            {
              props: { cloudConfig: { type: Object, default: () => ({}) } },
              data: () => ({
                themeCSS: "",
                navTop: "0px",
                isClose: !1,
                hasLiving: !1,
                isInSupportScene: !1,
                isFullScreen: !1,
                isCls: !1,
                showGoodsPromotion: !1,
                explainVideo: {},
                goodsBaseInfo: {},
                goodsPriceInfo: {},
                umpCouponList: [],
                topCouponLabelList: [],
                goodsActivity: {},
                currentActivity: {},
                pageFeature: {},
                shopConfig: {},
                bigButtons: [],
                danmakuSource: [],
                supportSkuDirectOrder: !1,
              }),
              computed: {
                isShowBlock() {
                  var e,
                    o =
                      !this.isClose &&
                      !this.hasLiving &&
                      this.isInSupportScene &&
                      Boolean(
                        null == (e = this.shopConfig)
                          ? void 0
                          : e.showExplainVideo
                      ) &&
                      Object.keys(this.explainVideo || {}).length;
                  return o && r.a.windowView(), o;
                },
                controlsStyle() {
                  var e = "background: none;";
                  return (
                    (this.isFullScreen && !this.isCls) ||
                      (e += "display: none"),
                    e
                  );
                },
              },
              created() {
                Object(n.b)(this, [
                  "themeCSS",
                  "goodsPriceInfo",
                  "umpCouponList",
                  "goodsActivity",
                  "currentActivity",
                  "pageFeature",
                  "shopConfig",
                  "bigButtons",
                  "danmakuSource",
                  "topCouponLabelList",
                  "showGoodsPromotion",
                  "hasLiving",
                  "supportSkuDirectOrder",
                ]),
                  Object(n.b)(this, {
                    goodsBaseInfo: (e) => {
                      var { explainVideo: o = {} } = e || {};
                      null != o &&
                        o.videoId &&
                        ((this.explainVideo = o), (this.goodsBaseInfo = e));
                    },
                  }),
                  Object(n.d)(this, {
                    goodsSetupReady: () => {
                      (this.navTop = this.getNavTop()),
                        (this.isInSupportScene = this.checkIsInSupportScene());
                    },
                  });
              },
              methods: {
                checkIsInSupportScene: () => !0,
                isStop() {
                  var e, o;
                  return (
                    0 ===
                    (null == (e = this.$refs) || null == (o = e.goodsVideo)
                      ? void 0
                      : o.status)
                  );
                },
                isPlaying() {
                  var e, o;
                  return (
                    1 ===
                    (null == (e = this.$refs) || null == (o = e.goodsVideo)
                      ? void 0
                      : o.status)
                  );
                },
                getNavTop() {
                  var { statusBarHeight: e } = Object(a.b)(),
                    o = "web" === s.default.getEnv() ? 0 : 44;
                  return s.default.style.useTpx(o + e);
                },
                handleCloseBlock() {
                  (this.isClose = !0), r.a.windowClose();
                },
                autoPlayVideo() {
                  this.$nextTick(() => {
                    var e, o;
                    this.isPlaying() ||
                      null == (e = this.$refs) ||
                      null == (o = e.goodsVideo) ||
                      o.play();
                  });
                },
                onVideoReady() {
                  this.isFullScreen || this.autoPlayVideo();
                },
                handleContentClick() {
                  var e, o;
                  r.a.windowClick();
                  var t = this.$getPageQuery();
                  Object(n.a)().dmc.navigate(
                    "Share",
                    Object(i.a)({}, t, {
                      currentTime: Math.floor(
                        null == (e = this.$refs) || null == (o = e.goodsVideo)
                          ? void 0
                          : o.currentTime
                      ),
                      alias: this.goodsBaseInfo.alias,
                      shareFrom: u.d.EXPLAIN_VIDEO,
                    })
                  );
                },
              },
              ud: !0,
            });
        o.default = s.default.component(d);
      },
    }
  )
);
