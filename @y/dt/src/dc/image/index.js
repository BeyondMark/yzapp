"use strict";
var r = require("~/r");
r(
  "AaYt",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    AaYt: function (t, e, i) {
      i.r(e);
      var a = i("Fcif"),
        r = i("9ZMt"),
        s = i("mztD"),
        h = i("EqB2"),
        o = i("/XVY"),
        l = Object(o.a)({
          tpl: { default: 1 },
          isHighQualityImage: { default: !1 },
          imageQuality: { default: "" },
          count: { default: 1 },
          imgs: { default: () => [] },
          style: { default: 1 },
          size: { default: 0 },
          radius: { default: 0 },
          pageMargin: { default: 0 },
          imgMargin: { default: 0 },
          fill: { default: "cover" },
          indicator: { default: 1 },
          slide: { default: 0 },
          bgColor: { default: "transparent" },
          color: { default: "#000" },
          overlapHeight: { default: 0 },
          swipeTime: { default: 5e3 },
        }),
        g = i("2Dtx"),
        d = i("MLLI"),
        n = i("K3Aj"),
        m = i("w2Y9"),
        p = i.n(m),
        u = i("VdoR"),
        { useTpx: c } = r.default.style,
        f = {
          mixins: [Object(h.a)({ optDesc: l })],
          props: {
            needSubscribeMessage: { type: Boolean, default: !1 },
            extra: { type: Object, default: () => ({}) },
            isWebview: { type: Boolean, default: !1 },
            needPreLoad: { type: Boolean, default: !1 },
            kdtId: Number,
            _opt: { type: Object, default: () => ({}) },
          },
          data: () => ({
            current: 0,
            vanSwiperKey: "" + Math.random(),
            beforGuide: () => {},
            redirectUrl: "",
            showGuide: !1,
            mobile: "",
            guideInfo: {},
          }),
          logicData: () => ({ loadErrorImagesMap: {} }),
          computed: {
            useShadow() {
              return 2 === this.opt.style;
            },
            showImages() {
              var t = "x0" + (this.opt.imageQuality || "") + ".jpg",
                e = "!" + (this.opt.isHighQualityImage ? 876 : 730) + t,
                i = (this.opt.imgs || []).length || 0;
              if (4 === this.opt.tpl && !this.opt.isHighQualityImage) {
                var r = Math.ceil(
                  (750 / (0 === this.opt.slide ? i : Math.min(3, i))) * 4
                );
                r > 750 && (r = 750), (e = "!" + r + t);
              }
              return (
                3 !== this.opt.tpl ||
                  this.opt.isHighQualityImage ||
                  (e =
                    0 === this.opt.size
                      ? "!" + (this.opt.isHighQualityImage ? 876 : 730) + t
                      : 1 === this.opt.size
                      ? "!" + Math.ceil(300) + t
                      : "!" +
                        Math.ceil(750 / Math.min(3, this.opt.count - 1)) +
                        t),
                (this.opt.imgs || []).map((t, i) => {
                  var { imageUrl: r } = t || {},
                    h = r;
                  if (r) {
                    var o =
                      this.loadErrorImagesMap["imgErr" + i] &&
                      this.loadErrorImagesMap["imgErr" + i] <= 3;
                    (r = Object(s.a)(t.imageUrl, e, { disableWebpInIOS: !0 })),
                      (h = this.needPreLoad
                        ? Object(s.a)(t.imageUrl, "!200x0q50.jpg", {
                            disableWebpInIOS: !0,
                          })
                        : ""),
                      o && (r = p.a.add(t.imageUrl, { _: +new Date() }));
                  }
                  return Object(a.a)({}, t, { imageUrl: r, minImg: h });
                })
              );
            },
            style() {
              var { pageMargin: t, bgColor: e, tpl: i } = this.opt,
                r = {
                  "background-color": e,
                  "margin-bottom": "-" + c(this.computedOverlapHeight),
                };
              return (
                1 === i &&
                  (r = Object(a.a)({}, r, {
                    "padding-left": "" + c(t),
                    "padding-right": "" + c(t),
                  })),
                Object(g.a)(r)
              );
            },
            mode() {
              var { fill: t } = this.opt;
              return "cover" === t ? "aspectFill" : "aspectFit";
            },
            commonPicData() {
              var { clientWidth: t, opt: e } = this,
                { pageMargin: i } = e,
                a = this.showImages,
                r = t - 2 * i,
                s = a.length;
              return a.map((t, e) => {
                var i = r / t.imageWidth,
                  a = Math.floor(i * t.imageHeight);
                (t.showHeight = a),
                  "hotarea" === t.linkType &&
                    ((t.hotAreas = t.hotAreas || []),
                    t.hotAreas.map(
                      (t) => (
                        (t.top = Math.max(0, Math.floor(t.startY * i))),
                        (t.left = Math.floor(t.startX * i)),
                        (t.width = Math.floor((t.endX - t.startX) * i)),
                        (t.height = Math.min(
                          a,
                          Math.floor((t.endY - t.startY) * i)
                        )),
                        (t.style = this.getHotAreaStyle(t)),
                        t
                      )
                    ));
                var h = e === s - 1;
                return (t.style = this.top2endStyle(e, h)), t;
              });
            },
            clientWidth: () => Object(n.a)(),
            swipeWidth() {
              return this.clientWidth - 2 * +this.opt.pageMargin;
            },
            firstImageWidth() {
              var { imageWidth: t = 320 } = this.opt.imgs[0] || {};
              return t;
            },
            firstImageHeight() {
              var { imageHeight: t = 240 } = this.opt.imgs[0] || {};
              return t;
            },
            swipeHeight() {
              return Math.ceil(
                this.swipeWidth * (this.firstImageHeight / this.firstImageWidth)
              );
            },
            swipeStyle() {
              var { swipeHeight: t, showImages: e } = this;
              return { swipe: "height: " + (e.length ? c(t) : 0) };
            },
            swipeBgStyle() {
              return (
                Object(g.a)({
                  width: "calc(100% - " + c(2 * this.opt.pageMargin) + ")",
                  margin: "0 " + c(this.opt.pageMargin),
                }) + this.swipeStyle.swipe
              );
            },
            swipeItemStyle() {
              var { swipeHeight: t, swipeWidth: e } = this;
              return Object(g.a)({
                height: c(t),
                width: c(e),
                margin: "0 " + c(this.opt.pageMargin),
              });
            },
            setImageHeight() {
              var { swipeHeight: t } = this;
              return Object(g.a)({ height: c(t), width: "100%" });
            },
            slideShowHeight() {
              var {
                  firstImageWidth: t,
                  firstImageHeight: e,
                  clientWidth: i,
                } = this,
                { count: a, size: r } = this.opt;
              return (
                (0 === r
                  ? Math.ceil((0.88 * i * e) / t)
                  : 1 === r
                  ? Math.ceil((0.4 * i * e) / t)
                  : Math.floor(((i - 2 * (a - 1)) / (a - 0.8)) * (e / t))) || 0
              );
            },
            slidePics() {
              var { slideShowHeight: t } = this,
                { tpl: e } = this.opt,
                i = this.showImages,
                a = i.length;
              return 3 === e
                ? i.map((e, i) => {
                    var r = Math.floor((t / e.imageHeight) * e.imageWidth),
                      s = i === a - 1;
                    return (
                      (e.style = this.getLinkStyle(r, t, s)),
                      (e.imgStyle = e.style),
                      (e.mode = "aspectFill"),
                      e
                    );
                  })
                : this.getNavData();
            },
            slidePadding() {
              return (
                "width: " +
                c(this.opt.pageMargin) +
                "; height: 1px; flex-shrink: 0"
              );
            },
            computedOverlapHeight() {
              var { overlapHeight: t } = this.opt;
              return (this.clientWidth / 375) * t;
            },
          },
          created() {
            var t, e;
            if (
              ((this._h_c = Date.now()),
              null != (t = this.showImages) &&
                t.length &&
                5 !== (null == (e = this.opt) ? void 0 : e.tpl) &&
                this.$nextTick(() => {
                  this.observeImagePosition();
                }),
              this.needPreLoad)
            ) {
              var {
                opt: { style: i, tpl: a, radius: r, swipeTime: s },
                style: h,
                commonPicData: o,
                swipeStyle: l,
                slidePics: g,
                showImages: d,
              } = this;
              this.setData(
                {
                  opt: { style: i, tpl: a, radius: r, swipeTime: s },
                  style: h,
                  commonPicData: o,
                  swipeStyle: l,
                  slidePics: g,
                  showImages: d,
                },
                { immediate: !0 }
              );
            }
          },
          destroyed() {
            this.observer && this.observer.disconnect();
          },
          methods: {
            observeImagePosition() {
              var t = this.createIntersectionObserver(),
                { windowHeight: e } = Object(d.b)();
              (this.observer = t),
                t
                  .relativeToViewport({ bottom: 0.93 * e })
                  .observe(".dc-image", (e) => {
                    e.intersectionRatio > 0 &&
                      !this.isWebview &&
                      (u.a.start({ name: "图片广告组件渲染" }),
                      (this.hasLogStart = !0),
                      this.logEndTrigger && !this.hasLogEnd && this.logEnd(),
                      t.disconnect());
                  });
            },
            logEnd() {
              (this.logEndTrigger = !0),
                this.hasLogStart &&
                  (u.a.end({ name: "图片广告组件渲染", type: "finish" }),
                  (this.hasLogEnd = !0));
            },
            onImageLoadError(t, e) {
              this.loadErrorImagesMap["imgErr" + t] > 3
                ? u.a.end({
                    name: "图片广告组件渲染",
                    type: "error",
                    detail: { err: (null == e ? void 0 : e.detail) || "" },
                  })
                : (this.loadErrorImagesMap = Object(a.a)(
                    {},
                    this.loadErrorImagesMap,
                    {
                      ["imgErr" + t]: this.loadErrorImagesMap["imgErr" + t]
                        ? this.loadErrorImagesMap["imgErr" + t] + 1
                        : 1,
                    }
                  ));
            },
            getNavData() {
              var {
                  opt: t,
                  firstImageWidth: e,
                  firstImageHeight: i,
                  clientWidth: a,
                } = this,
                { count: r } = t,
                { slide: s, tpl: h, color: o } = t,
                l = this.showImages,
                d = 0;
              1 === s ? (d = 0.8) : (r = l.length);
              var n = 0,
                m = 0,
                p = 0;
              return (
                4 === h
                  ? ((n = Math.ceil(a / (r - d))),
                    (m = Math.floor(n * (i / e))),
                    n * r - a > 0 && 0 === this.opt.slide && (p = n * r - a))
                  : ((m = 35), (n = Math.ceil(a / (r - d)))),
                l.map((t, e) => {
                  var i = n;
                  p && r - e <= p && (i -= 1),
                    (t.imgStyle = Object(g.a)({ width: c(i), height: c(m) })),
                    (t.mode = "aspectFill");
                  var a = { width: c(i), color: o };
                  return (
                    5 === h &&
                      e === l.length - 1 &&
                      (a["border-right"] = "none"),
                    (t.titleStyle = Object(g.a)(a)),
                    t
                  );
                })
              );
            },
            getHotAreaStyle: (t) =>
              Object(g.a)({
                top: c(t.top),
                left: c(t.left),
                width: c(t.width),
                height: c(t.height),
              }),
            top2endStyle(t, e) {
              var { imgMargin: i } = this.opt;
              return "margin-bottom: " + c(e ? 0 : i) + ";";
            },
            getLinkStyle(t, e, i) {
              var { imgMargin: a } = this.opt,
                r = i ? 0 : c(a);
              return Object(g.a)({
                width: c(t),
                height: c(e),
                "margin-right": r,
              });
            },
            onChange(t) {
              var e,
                i = null == t || null == (e = t.detail) ? void 0 : e.current;
              (this.current = i), this.$emit("indexChange", { _index: i });
            },
            handleClick(t, e) {
              var i,
                r,
                s = Object(a.a)({}, t || {}, {
                  _index: e,
                  imageUrl:
                    t.imageUrl ||
                    (null == (i = this.showImages) || null == (r = i[e])
                      ? void 0
                      : r.imageUrl),
                  components_style_is_hotarea: +(this.showImages || []).some(
                    (t) => "hotarea" === t.linkType
                  ),
                });
              this.$emit("jumpToLink", s);
            },
            handleCouponClick(t, e, i) {
              var r = Object(a.a)({}, t || {}, { _index: e }),
                s = (null == i ? void 0 : i.detail) || {};
              this.$emit(
                "handleCouponClick",
                Object(a.a)({}, s, { clickParams: r })
              );
            },
            handleContactBack(t, e) {
              this.$emit("jumpToLink", t, e);
            },
            imageLoad() {
              this.logEnd(),
                this.$emit("component-loaded", {
                  f: "imgLoad",
                  imgLoadTime: Date.now() - this._h_c,
                });
            },
            closeGuide() {
              this.showGuide = !1;
            },
            handleShowGuideDialog(t) {
              (this.guideInfo = t.guideInfo),
                (this.mobile = t.mobile),
                (this.redirectUrl = t.redirectUrl),
                (this.beforGuide = t.beforGuide),
                (this.showGuide = t.showGuide);
            },
          },
          ud: !0,
        };
      e.default = r.default.component(f);
    },
  })
);
