"use strict";
var r = require("~/r");
r(
  "ImAa",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    ImAa: function (e, i, t) {
      t.r(i);
      var s = t("Fcif"),
        a = t("AGZf"),
        o = t("BZkp"),
        n = t("8Ggg"),
        r = t("9ZMt"),
        h = t("MLLI"),
        d = t("YeA1"),
        l = t("ONqW"),
        g = {
          [1]: "播放被终止",
          [2]: "网络异常",
          [3]: "视频解析失败",
          [4]: "视频格式不支持",
        },
        u = t("Tr3L");
      function c() {
        return Object(u.a)();
      }
      var m = t("KEq0"),
        p = t.n(m),
        { platform: v } = Object(h.b)();
      function I(e) {
        var { imgUrl: i, rule: t, showOrigin: s } = e,
          a = p()(i, t, {});
        return (function (e) {
          if (void 0 !== e) return e;
          var i = !0;
          return "ios" === v && (i = !1), i;
        })(s)
          ? a
          : i;
      }
      var f = t("US/N");
      var k,
        b,
        V,
        S,
        w,
        y,
        P = t("zjWU"),
        _ = t("5Xe+"),
        x = t.n(_),
        O = t("Shdd"),
        { windowWidth: B, windowHeight: D } = Object(h.b)(),
        L = Object(n.c)(),
        C = {
          name: "image-block",
          props: {
            controlsClass: { type: String, default: "" },
            playIconClass: { type: String, default: "" },
            cloudConfig: { type: Object, default: () => ({}) },
          },
          data() {
            var { goodsBaseInfo: e = {} } =
                r.default.getGlobal("GOODS_DATA") || {},
              {
                pictures: i = [],
                video: t,
                hasVideo: s,
              } = this.getRenderingData({ goodsBaseInfo: e }),
              a = this.getSwipeWidth(),
              o = this.getSwipeHeight(a, { goodsBaseInfo: e, pictures: i });
            return {
              isInited: !1,
              pid: "image-swipe-" + 10 * Math.random(),
              width: a,
              height: o,
              initialHeight: o,
              current: 0,
              navIndex: 0,
              goodsBaseInfo: e,
              goodsPriceInfo: {},
              video: t,
              hasVideo: s,
              isVideoStopped: !0,
              isFullscreen: !1,
              hasNormalCover: !!this.ctx.widgets.NormalCover,
              finalBigButtons: [],
              isNoStock: !1,
              imageScale: 1,
              danmakuSource: [],
              danmakuMinCount: 6,
              firstImageLoaded: !1,
              eShowImage: !0,
              pageVars: "",
              themeVars: "",
              finalImageList: [],
            };
          },
          logicData() {
            var {
                shopConfig: e = {},
                goodsBaseInfo: i = {},
                shopBaseInfo: t = {},
              } = r.default.getGlobal("GOODS_DATA") || {},
              { pictures: s = [], goodsMainPictures: a = [] } =
                this.getRenderingData({ goodsBaseInfo: i });
            return {
              shareData: {},
              shopConfig: e,
              shopBaseInfo: t,
              pictures: [...s],
              skuPictures: [],
              goodsMainPictures: a,
              isHideDanmaku: !1,
              isVideoPlaying: !1,
              minZoom: 1 / 3,
              maxZoom: 3,
              imageViewedArr: [],
              scaleState: {
                scale: 1,
                moveX: 0,
                moveY: 0,
                moving: !1,
                zooming: !1,
                imageRatio: 0,
                displayWidth: 0,
                displayHeight: 0,
              },
              isPageVisible: !0,
              isBlockInView: !0,
              danmakuIsPlaying: !1,
              originImgIndexs: [],
            };
          },
          computed: {
            theme() {
              return this.themeVars + this.pageVars;
            },
            shareImg() {
              return this.firstImageLoaded ? this.shareData.imageUrl : "";
            },
            kdtId() {
              return this.shopBaseInfo.kdtId;
            },
            imageStyle() {
              if (!this.isFullscreen) return {};
              var { scaleState: e } = this,
                { scale: i, moveX: t, moveY: s, moving: a, zooming: n } = e,
                r = { transitionDuration: n || a ? "0s" : ".3s" };
              if (1 !== i) {
                var h = t / i,
                  d = s / i;
                r.transform =
                  "scale(" +
                  i +
                  ", " +
                  i +
                  ") translate(" +
                  h +
                  "px, " +
                  d +
                  "px)";
              }
              return Object(o.k)(r);
            },
            allPictures() {
              return this.getAllPictures({
                goodsBaseInfo: this.goodsBaseInfo,
                goodsMainPictures: this.goodsMainPictures,
                skuPictures: this.skuPictures,
              });
            },
            imageList() {
              var e = (this.pictures || []).slice();
              return (
                this.firstImageLoaded
                  ? this.goodsBaseInfo.isDisplaySkuPicture &&
                    (e = e.concat(this.skuPictures))
                  : (e = e.slice(0, 1)),
                (e = e.map((e, i) =>
                  Object(s.a)({}, e, {
                    url: this.fillImage(
                      e.url,
                      !this.originImgIndexs.some((e) => e === i)
                    ),
                    thumbUrl: this.fillImage(e.url, !0, "!200x0.jpg"),
                  })
                ))
              );
            },
            currentSkuKey() {
              var { current: e, goodsMainPictures: i, allPictures: t } = this;
              return e >= i.length ? t[e] && t[e].name : null;
            },
            isVideoCurrent() {
              return this.hasVideo && 0 === this.current;
            },
            navRect() {
              var { top: e, bottom: i } = (function () {
                var e = 0,
                  i = 0;
                try {
                  ({ top: e = 0, bottom: i = 0 } =
                    r.default.$native.getMenuButtonBoundingClientRect() || {});
                } catch (e) {}
                return { top: e, bottom: i };
              })();
              return { top: e || 16, height: i - e || 24 };
            },
            goodsId() {
              return this.goodsBaseInfo.id;
            },
            alias() {
              return this.goodsBaseInfo.alias;
            },
            isBlockVisible() {
              return this.isBlockInView && this.isPageVisible;
            },
            maxMoveX() {
              var { scaleState: e, width: i } = this;
              return e.imageRatio ? Math.max(0, (e.scale * i - i) / 2) : 0;
            },
            maxMoveY() {
              var { scaleState: e, height: i, width: t } = this;
              if (e.imageRatio) {
                var s = t * e.imageRatio;
                return Math.max(0, (e.scale * s - i) / 2);
              }
              return 0;
            },
            autoPlay() {
              return !this.hasVideo &&
                0 !== this.imageList.length &&
                this.firstImageLoaded &&
                this.isBlockVisible
                ? 4e3
                : 0;
            },
            hasDanmaku() {
              return !(
                !(
                  this.goodsId &&
                  this.alias &&
                  this.isInited &&
                  this.shopConfig.goodsVideoDanmakuSwitch
                ) || this.isHideDanmaku
              );
            },
            danmakuVisible() {
              var e = !(
                !this.isBlockVisible ||
                (this.isFullscreen && !this.isVideoCurrent)
              );
              return (
                this.ctx.cloud.emit("onDanmakuVisibleChange", { visible: e }), e
              );
            },
            danmakuOffsetTop() {
              var e = 0;
              if (this.isFullscreen) {
                var { navRect: i = {} } = this;
                e = i.top + i.height;
              }
              return (
                this.ctx.cloud.emit("onDanmakuOffsetTopChange", {
                  offsetTop: e,
                }),
                e
              );
            },
            danmakuOpt() {
              var e = {
                alias: this.alias,
                goodsId: this.goodsId,
                isVideoCurrent: this.isVideoCurrent,
                isFullscreen: this.isFullscreen,
              };
              return this.ctx.cloud.emit("onDanmakuOptChange", { opt: e }), e;
            },
          },
          watch: {
            isFullscreen(e) {
              this.toggleContainerFixed(e),
                this.isVideoCurrent && this.logVideoView(e),
                this.$nextTick(() => {
                  this.resizeSwipe(),
                    this.ctx.process.invoke("handleDanmakuRefresh"),
                    this.ctx.cloud.emit("onDanmakuRefresh");
                });
            },
            imageList(e) {
              this.setCloudImageList(e),
                this.$nextTick(() => {
                  this.resizeSwipe();
                });
            },
            isVideoCurrent(e) {
              e && this.logVideoView(this.isFullscreen);
            },
            "danmakuOpt.goodsId": {
              handler() {
                this.getDanmakuList();
              },
              immediate: !0,
            },
          },
          created() {
            (this.logger = Object(l.a)()),
              Object(d.b)(this, [
                "isHideDanmaku",
                "goodsPriceInfo",
                "skuPictures",
                "shopBaseInfo",
                "shopConfig",
                "finalBigButtons",
                "isNoStock",
                "shareData",
                "isPageVisible",
                "pageVars",
                "themeVars",
              ]),
              Object(d.b)(this, {
                goodsBaseInfo: (e) => {
                  this.updateData({ goodsBaseInfo: e });
                },
              }),
              Object(d.d)(this, { "swipe:update": (e) => this.swipeTo(e) }),
              Object(d.e)(this, {
                getNavItemTop: Object(O.b)(this, "#js-nav-image", "imageBlock"),
                setShowImage: (e) => {
                  this.eShowImage = !!e;
                },
                handleInitDanmakuSource: this.initDanmakuSource.bind(this),
                handleInitDanmaku: this.onDanmakuInit.bind(this),
                handleDanmakuPlayChange: this.onDanmakuPlayChange.bind(this),
              }),
              this.resizeSwipe(),
              this.getDanmakuList();
          },
          mounted() {
            var e = setTimeout(() => {
              this.__isAlive && this.bindObserver(), clearTimeout(e);
            }, 2e3);
          },
          destroyed() {
            (this.__isAlive = !1), this.unbindObserver();
          },
          methods: {
            setCloudImageList(e) {
              var i = (e || []).map((e) => x()(e, ["url", "height", "width"]));
              this.ctx.cloud
                .invoke("beforeGoodsImageRender", i)
                .then((i) => {
                  Array.isArray(i)
                    ? (this.finalImageList = i.slice(0, 15))
                    : (this.finalImageList = e);
                })
                .catch(() => {
                  this.eShowImage = !1;
                });
            },
            getRenderingData(e) {
              var { goodsBaseInfo: i } = e,
                { pictures: t = [], video: s } = i,
                a = !!(s || {}).videoUrl,
                o = [...t];
              return (
                a &&
                  o.unshift({
                    id: s.videoId,
                    url: s.coverUrl,
                    width: s.coverWidth,
                    height: s.coverHeight,
                  }),
                { pictures: t, video: s, hasVideo: a, goodsMainPictures: o }
              );
            },
            updateData(e) {
              var { goodsBaseInfo: i } = e;
              Object.assign(
                this,
                Object(s.a)({}, this.getRenderingData({ goodsBaseInfo: i }), {
                  goodsBaseInfo: i,
                })
              ),
                this.resizeSwipe();
            },
            getAllPictures(e) {
              var {
                goodsBaseInfo: i,
                goodsMainPictures: t,
                skuPictures: s,
              } = e;
              return i.isDisplaySkuPicture ? [...t, ...s] : t;
            },
            fillImage: (e, i, t) => (
              void 0 === t && (t = "!750x0.jpg"),
              I({ imgUrl: e, rule: t, showOrigin: i })
            ),
            getSwipe() {
              return this.$refs.imageSwipe;
            },
            getVideo() {
              return this.$refs.imageVideo;
            },
            resizeSwipe() {
              (this.initialHeight = this.getSwipeHeight(this.width, {
                goodsBaseInfo: this.goodsBaseInfo,
                pictures: this.pictures,
              })),
                (this.height = this.isFullscreen ? D : this.initialHeight),
                this.$nextTick(() => {
                  var e;
                  null == (e = this.getSwipe()) || e.resize();
                });
            },
            getSwipeWidth() {
              var e = B;
              return Math.min(e, 540);
            },
            getSwipeHeight(e, i) {
              var { goodsBaseInfo: t, pictures: s = [] } = i;
              if (
                this.ctx.lambdas.checkIsHalfScreen &&
                this.ctx.lambdas.checkIsHalfScreen()
              )
                return B;
              var a = 3 / 4,
                o = s[0] || {};
              return (
                o.height && o.width && (a = o.height / o.width),
                (a =
                  0 === s.length || t.isDisplaySkuPicture
                    ? Math.min(1.3, a)
                    : Math.min(2, a)),
                (a = Math.max(0.4, a)),
                Math.floor(e * a)
              );
            },
            onSwipeChange(e) {
              var i = (e.detail || {}).current;
              if (!(this.hasVideo && 0 === i)) {
                var t = this.hasVideo ? i - 1 : i;
                this.isFullscreen && this.originImgIndexs.push(t),
                  this.logImageView(t);
              }
              var s = this.current;
              if (
                (this.updateSwipeIndex(i),
                this.resetScale(),
                this.hasVideo && !this.isVideoStopped)
              ) {
                if (0 === s && 0 !== i)
                  return (
                    (this.$_suspendedPlaying = this.isVideoPlaying),
                    void this.pauseVideo()
                  );
                0 === i &&
                  0 !== s &&
                  this.$_suspendedPlaying &&
                  this.playVideo();
              }
            },
            updateSwipeIndex(e) {
              (this.current = e), (this.ctx.data.current = e);
            },
            swipeTo(e) {
              var i;
              (this.navIndex = e),
                null == (i = this.getSwipe()) || i.swipeTo(e),
                this.updateSwipeIndex(e);
            },
            playVideo() {
              var e = this.getVideo();
              e && e.play();
            },
            pauseVideo() {
              var e = this.getVideo();
              e && e.pause();
            },
            customLogger(e, i) {
              void 0 === e && (e = "商品详情加载成功"),
                void 0 === i && (i = "finish"),
                P.a.end({
                  name: P.b.goods_detail,
                  type: i,
                  level: "finish" === i ? "info" : "error",
                  extra: { message: e },
                });
            },
            onVideoReady() {
              this.customLogger(),
                c().then((e) => {
                  var { networkType: i } = e;
                  "wifi" === i && this.autoPlayVideo();
                });
            },
            onVideoPlay() {
              var e = this.isVideoStopped;
              if (
                ((this.isVideoPlaying = !0),
                (this.isVideoStopped = !1),
                this.$_hasPlayed ||
                  ((this.$_hasPlayed = !0),
                  c().then((e) => {
                    var { networkType: i } = e;
                    "wifi" !== i &&
                      Object(a.a)({
                        message: "当前为非Wi-Fi环境，请注意流量消耗",
                        position: "top",
                      });
                  })),
                this.countPlay(),
                e)
              ) {
                var i = 0;
                this.$_playVideoAuto && ((i = 1), (this.$_playVideoAuto = !1)),
                  this.logger.log({
                    et: "custom",
                    en: "商品主图视频-播放",
                    ei: "goods_main_video_play",
                    params: { auto: i },
                  });
              }
            },
            onVideoPause() {
              (this.isVideoPlaying = !1),
                this.logger.log({
                  et: "custom",
                  en: "商品主图视频-暂停",
                  ei: "goods_main_video_pause",
                });
            },
            onVideoEnd() {
              (this.isVideoPlaying = !1),
                (this.isVideoStopped = !0),
                clearTimeout(this.$_playedTimer);
            },
            onVideoSeek(e) {
              this.logger.log({
                et: "click",
                en: "商品主图视频-进度",
                ei: "goods_main_video_seek",
                params: { percentage: +(null == e ? void 0 : e.toFixed(1)) },
              });
            },
            onVideoError(e) {
              void 0 === e && (e = {}),
                (this.isVideoPlaying = !1),
                (this.isVideoStopped = !0);
              var i = g[e.code] || e.message;
              Object(a.a)({
                message: "播放失败" + (i ? "：" + i : ""),
                position: "top",
              });
            },
            countPlay() {
              this.$_playedTimer = setTimeout(() => {
                var { rootKdtId: e, kdtId: i } = this.shopBaseInfo;
                this.logger.log({
                  et: "click",
                  ei: "video_valid_played",
                  en: "视频有效播放",
                  params: {
                    channel: "wsc_goods_main",
                    partner_biz_type: 1,
                    partner_biz_id: e || i,
                    video_id: this.video.videoId,
                    component: "goods_video",
                  },
                });
              }, 3e3);
            },
            autoPlayVideo() {
              if (!this.isVideoPlaying) {
                this.$nextTick(() => {
                  this.isVideoCurrent &&
                    ((this.$_playVideoAuto = !0), this.playVideo());
                });
              }
            },
            handlePreview(e) {
              this.ctx.process.invokePipe("beforePreviewMainImage").then(() => {
                if (!this.isFullscreen) {
                  var { width: i, height: t } = this.imageList[e] || {};
                  (this.scaleState.imageRatio = i ? t / i : 0),
                    this.logger.log({
                      et: "click",
                      ei: "click_goods_pic",
                      en: "点击头图",
                    });
                }
                this.logger.log({
                  en: "商品主图-点击",
                  ei: "goods_main_image_click",
                  et: "click",
                  params: {
                    component: "product_picture",
                    goodsId: this.goodsId,
                    num: e + 1,
                    total: this.imageList.length,
                    fullscreen: Number(this.isFullscreen),
                  },
                }),
                  this.originImgIndexs.push(e),
                  this.toggleFullscreen();
              });
            },
            onFirstImageLoadImageLoad(e) {
              var { mark: i } = this.ctx.hummer || {};
              0 !== e ||
                this.firstImageLoaded ||
                ((this.firstImageLoaded = !0),
                i &&
                  i.log &&
                  i.log({
                    tag: "goods-detail",
                    scene: ["appLaunch", "route"],
                  }));
            },
            onImageLoad(e, i) {
              if (
                (this.onFirstImageLoadImageLoad(e),
                0 === e &&
                  (this.customLogger(),
                  this.onImageLoadComplete(),
                  this.hasVideo || this.logImageView(e)),
                i)
              ) {
                var t,
                  s,
                  { width: a, height: o } = i.detail || {};
                (t = a),
                  (s = o),
                  this.imageList[e] &&
                    ((this.imageList[e].width = t),
                    (this.imageList[e].height = s));
              }
            },
            onImageLoadError(e, i) {
              this.onImageLoadComplete(),
                0 === e &&
                  this.customLogger(
                    "首图加载失败 " + JSON.stringify(i) + ";" + this.kdtId,
                    "error"
                  );
            },
            onImageLoadComplete() {
              (this.isInited = !0),
                this.ctx.hummer &&
                  this.ctx.hummer.markRendered("image-block:loaded");
            },
            logImageView(e) {
              this.imageViewedArr[e] ||
                (this.logger.log({
                  en: "商品主图-曝光",
                  ei: "goods_main_image_view",
                  et: "view",
                  params: {
                    component: "product_picture",
                    goodsId: this.goodsId,
                    num: e + 1,
                    total: this.imageList.length,
                    fullscreen: Number(this.isFullscreen),
                  },
                }),
                (this.imageViewedArr[e] = 1));
            },
            toggleFullscreen() {
              (this.isFullscreen = !this.isFullscreen),
                this.isFullscreen || this.resetScale();
            },
            toggleContainerFixed(e) {
              this.ctx.event.emit("page-container:scrollLocked", e);
            },
            handleBigButtonClick(e) {
              this.ctx.event.emit("clickBigButton", e),
                this.toggleFullscreen(!1);
            },
            setScale(e) {
              var { scaleState: i, minZoom: t, maxZoom: s } = this;
              i.scale = Object(n.b)(e, +t, +s);
            },
            toggleScale() {
              var { scaleState: e } = this,
                i = e.scale > 1 ? 1 : 2;
              this.setScale(i), (e.moveX = 0), (e.moveY = 0);
            },
            onTouchStart(e) {
              var { touches: i } = e,
                { offsetX: t } = L,
                { scaleState: s } = this;
              L.start(e),
                (k = s.moveX),
                (b = s.moveY),
                (y = new Date()),
                (s.moving = 1 === i.length && 1 !== s.scale),
                (s.zooming = 2 === i.length && !t),
                s.zooming && ((V = s.scale), (S = Object(n.a)(e.touches)));
            },
            onTouchMove(e) {
              var { touches: i } = e,
                { scaleState: t } = this;
              if ((L.move(e), t.moving)) {
                var { deltaX: s, deltaY: a } = L,
                  { maxMoveX: o, maxMoveY: r } = this,
                  h = s + k,
                  d = a + b;
                (t.moveX = Object(n.b)(h, -o, o)),
                  (t.moveY = Object(n.b)(d, -r, r));
              }
              if (t.zooming && 2 === i.length) {
                var l = Object(n.a)(i),
                  g = (V * l) / S;
                this.setScale(g);
              }
            },
            checkTap() {
              var { offsetX: e, offsetY: i } = L,
                t = new Date() - y;
              e < 10 &&
                i < 10 &&
                t < 250 &&
                (w
                  ? (clearTimeout(w),
                    (w = null),
                    this.disableZoom || this.toggleScale())
                  : (w = setTimeout(() => {
                      this.handlePreview(
                        this.hasVideo ? this.current - 1 : this.current
                      ),
                        (w = null);
                    }, 250)));
            },
            resetScale() {
              this.setScale(1),
                (this.scaleState.moveX = 0),
                (this.scaleState.moveY = 0);
            },
            onTouchCancel(e) {
              (
                this.ctx.lambdas.getAuthType || Promise.resolve.bind(Promise)
              )().then((i) => {
                "appsdk" !== i ? this.onTouchEnd(e) : L.reset();
              });
            },
            onTouchEnd(e) {
              var { scaleState: i } = this;
              if (
                (i.moving || i.zooming) &&
                (!0,
                i.moving && k === i.moveX && b === i.moveY && !1,
                !e.touches.length)
              ) {
                var { maxMoveX: t, maxMoveY: s } = this;
                i.zooming &&
                  ((i.moveX = Object(n.b)(i.moveX, -t, t)),
                  (i.moveY = Object(n.b)(i.moveY, -s, s)),
                  (i.zooming = !1)),
                  (i.moving = !1),
                  (k = 0),
                  (b = 0),
                  (V = 1),
                  i.scale < 1 && this.resetScale();
              }
              this.checkTap(), L.reset();
            },
            bindObserver() {
              this.unbindObserver();
              (this.$_blockObserver = this.createIntersectionObserver({
                thresholds: [0, 0.5, 1],
              })),
                this.$_blockObserver
                  .relativeToViewport()
                  .observe("#js-nav-image", (e) => {
                    this.isBlockInView = e.intersectionRatio >= 0.5;
                  });
            },
            unbindObserver() {
              this.$_blockObserver && this.$_blockObserver.disconnect(),
                (this.$_blockObserver = null);
            },
            logVideoView(e) {
              e &&
                this.logger.log({
                  et: "view",
                  ei: "goods_video_fullscreen_view",
                  en: "视频全屏曝光",
                  pt: "g",
                  pi: this.goodsId,
                  params: {
                    hasDanmaku: Number(this.danmakuIsPlaying),
                    goodsId: this.goodsId,
                  },
                });
            },
            initDanmakuSource(e) {
              var { source: i } = e;
              this.ctx.data.danmakuSource = i;
            },
            onDanmakuInit() {
              this.ctx.event.emit("trade-carousel:toggle", !1);
            },
            onDanmakuPlayChange(e) {
              var { playing: i } = e;
              this.danmakuIsPlaying = i;
            },
            getDanmakuList() {
              var { goodsId: e, alias: i } = this.danmakuOpt;
              !this.danmakuSource.length &&
                !this.isRequest &&
                e &&
                i &&
                ((this.isRequest = !0),
                (function (e, i) {
                  return Object(f.default)({
                    path: "/wscgoods/tee-app/item/multi-danmaku-list.json",
                    data: { itemId: e, alias: i },
                    options: { useCdn: !0 },
                    withCredentials: !0,
                  });
                })(e, i)
                  .then((e) => {
                    (this.danmakuSource = e),
                      this.ctx.cloud.emit("onDanmakuListChange", { list: e });
                  })
                  .catch(() => {
                    this.isRequest = !1;
                  }));
            },
          },
        };
      i.default = r.default.component(C);
    },
  })
);
