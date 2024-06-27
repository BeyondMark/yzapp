"use strict";
var r = require("~/r");
r(
  "FW1d",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    FW1d: function (e, t, a) {
      a.r(t);
      var i = a("Fcif"),
        r = a("9KEa"),
        h = {
          SWIPE: "swipe",
          SLIDE: "slide",
          TOP2END: "top2end",
          IMAGE_NAV: "image_nav",
          TEXT_NAV: "text_nav",
        },
        s = 0,
        l = 1,
        o = a("KEq0"),
        g = a.n(o);
      Component({
        options: { addGlobalClass: !0 },
        type: "image",
        properties: {
          useScene: { type: String, value: "" },
          showMethod: { type: Number, value: 0 },
          size: { type: Number, value: 0 },
          images: { type: Array, value: [] },
          count: { type: Number, value: 3 },
          swipeFill: { type: Boolean, value: !1 },
          hotareaLinkBorder: { type: Boolean, value: !1 },
          borderWidth: { type: Number, value: 0 },
          backgroundColor: { type: String },
          color: { type: String },
          slideSetting: { type: Number, value: 0 },
          slideUnivisibleRatio: { type: Number, value: 0.8 },
          pageMargin: { type: [String, Number], value: 0 },
          imageStyle: { type: Number, value: 1 },
          cornerType: { type: Number, value: 1 },
          indicator: { type: [String, Number], value: 1 },
          im: { type: Object, value: {} },
        },
        data: {
          showType: h.SWIPE,
          listData: [],
          imageFillStyle: "aspectFit",
          swipeHeight: 0,
          slideHeight: 0,
          slideTotalWidth: 0,
          slideShowCnt: 3,
          fixedMode: !0,
          textNavShowWidth: 0,
          hasHotArea: !1,
          current: 0,
          currentItemHasTitle: !1,
          SHOW_TYPES: h,
          IMAGE_STYLE_MAP: { noraml: 1, shadow: 2 },
          CORNER_TYPE_MAP: { square: 1, fillet: 2 },
        },
        attached() {
          var {
            showMethod: e,
            size: t,
            images: a = [],
            count: h,
            swipeFill: s,
            slideSetting: l,
            height: o,
            pageMargin: g,
            borderWidth: d,
            imageStyle: n,
            cornerType: u,
            indicator: c,
          } = this.properties;
          if (!(a.length <= 0)) {
            this.pixelRatio = 750 / (Object(r.b)().windowWidth || 375);
            var v = g * this.pixelRatio,
              m = 750 - 2 * v,
              p = this.getShowType(e),
              { firstPageDataHeight: S, firstPageDataWidth: w } =
                this.getFirstPageData(o, a),
              {
                featureOptions: H,
                imgNavShowPerWidth: N,
                imgNavShowHeight: T,
                slideHeight: W,
                slideWidth: y,
              } = this.getFeatureOptions(p, m, S, w, l, h, a, t, v, d),
              {
                list: f,
                hasHotArea: E,
                slideTotalWidth: A,
              } = this.getFormatedList(a, p, m, W, y, T, N);
            this.setData(
              Object(i.a)(
                {
                  showType: p,
                  listData: f,
                  imageFillStyle: s ? "aspectFill" : "aspectFit",
                  slideHeight: W,
                  slideTotalWidth: A,
                  hasHotArea: E,
                  pageMargin: g,
                  imageStyle: n,
                  cornerType: u,
                  indicator: c,
                  currentItemHasTitle: this.computeCurrentHasTitle(a, 0),
                },
                H
              )
            );
          }
        },
        methods: {
          getFeatureOptions(e, t, a, i, r, s, l, o, g, d) {
            var n = 0,
              u = 0,
              c = 0,
              v = 0,
              m = {};
            if (e === h.SWIPE) m.swipeHeight = this.getSwipeHeight(t, a, i);
            else if (e === h.TEXT_NAV || e === h.IMAGE_NAV) {
              m.fixedMode = 0 === r;
              var { offset: p, navShowCount: S } = this.getNavData(
                m.fixedMode,
                s,
                l
              );
              ({ imgNavShowPerWidth: n, imgNavShowHeight: u } =
                this.getImgNavData(e, i, a, p, S, t)),
                (m.textNavShowWidth = this.getTextNavData(e, p, S, t));
            } else
              e == h.SLIDE &&
                ((m.slideShowCnt = this.getSlideShowCnt(o, s)),
                ({ slideHeight: c } = this.getSlideWidthAndHeight(
                  e,
                  o,
                  m.slideShowCnt,
                  a,
                  i,
                  t
                )),
                (v = this.getSlideWidth(g, l, d)));
            return {
              featureOptions: m,
              imgNavShowPerWidth: n,
              imgNavShowHeight: u,
              slideHeight: c,
              slideWidth: v,
            };
          },
          getFormatedList(e, t, a, i, r, s, l) {
            var o = !1,
              d = [...e].concat();
            return (
              d.forEach((e) => {
                t == h.TOP2END
                  ? ((e.showHeight = Math.ceil(
                      e.imageHeight * (a / e.imageWidth)
                    )),
                    (e.showWidth = a))
                  : t == h.SLIDE
                  ? ((e.showHeight = i),
                    (e.showWidth = Math.floor(
                      i * (e.imageWidth / e.imageHeight)
                    )),
                    (r += e.showWidth))
                  : t == h.IMAGE_NAV &&
                    ((e.showWidth = l / this.pixelRatio),
                    (e.showHeight = s / this.pixelRatio)),
                  "hotarea" === e.linkType && (o = !0),
                  (e.imageUrl = g()(e.imageUrl, "large")),
                  this.setHotAreas(e, a),
                  delete e.type,
                  delete e.imageId,
                  delete e.imageThumbUrl,
                  delete e.templateId;
              }),
              { hasHotArea: o, slideTotalWidth: r, list: d }
            );
          },
          getShowType(e) {
            var t = h.SWIPE;
            switch (e) {
              case 1:
              case 6:
                t = h.SLIDE;
                break;
              case 7:
                t = h.TOP2END;
                break;
              case 8:
                t = h.IMAGE_NAV;
                break;
              case 9:
                t = h.TEXT_NAV;
                break;
              default:
                t = h.SWIPE;
            }
            return t;
          },
          getSlideShowCnt(e, t) {
            var a = 3;
            switch (e) {
              case 0:
                a = 2;
                break;
              case 1:
                a = 3;
                break;
              case 2:
                a = t || 3;
                break;
              default:
                a = 2;
            }
            return a;
          },
          getSwipeHeight: (e, t, a) => Math.ceil(e * (t / a)),
          getSlideWidth: (e, t, a) => (
            void 0 === t && (t = []), 2 * e + (t.length - 1) * a * 2
          ),
          getFirstPageData(e, t) {
            void 0 === t && (t = []);
            var a = 320,
              i = e || 320;
            return (
              t.length > 0 &&
                ((i = t[0].imageHeight || 320), (a = t[0].imageWidth || 320)),
              { firstPageDataWidth: a, firstPageDataHeight: i }
            );
          },
          getSlideWidthAndHeight(e, t, a, i, r, o) {
            var g = 0;
            return (
              e === h.SLIDE &&
                (g =
                  +t === s
                    ? Math.ceil((0.88 * o * i) / r)
                    : +t === l
                    ? Math.ceil((0.4 * o * i) / r)
                    : Math.floor(((o - 2 * (a - 1)) / (a - 0.8)) * (i / r))),
              { slideHeight: g }
            );
          },
          getNavData(e, t, a) {
            void 0 === a && (a = []);
            var i = e ? 0 : 0.8,
              r = t;
            return (
              e && (r = a.length), { fixedMode: e, offset: i, navShowCount: r }
            );
          },
          getImgNavData(e, t, a, i, r, s) {
            var l = 0,
              o = 0;
            return (
              e === h.IMAGE_NAV &&
                ((o = Math.ceil(s / (r - i))), (l = Math.floor(o * (a / t)))),
              { imgNavShowPerWidth: o, imgNavShowHeight: l }
            );
          },
          getTextNavData(e, t, a, i) {
            var r = 0;
            return e === h.TEXT_NAV && (r = Math.ceil(i / (a - t))), r;
          },
          computeCurrentHasTitle: (e, t) => !!e[t].title,
          calcActualTapPoint(e, t, a) {
            var { top: i, left: r, height: h, width: s } = a,
              l = t.touches[0],
              { imageWidth: o, imageHeight: g } = e;
            return {
              x: o * ((l.clientX - r) / s),
              y: g * ((l.clientY - i) / h),
            };
          },
          findContainedHotArea(e, t) {
            if (t)
              return t.find(
                (t) =>
                  e.x >= t.startX &&
                  e.x <= t.endX &&
                  e.y >= t.startY &&
                  e.y <= t.endY
              );
          },
          setHotAreas(e, t) {
            var a = t / e.imageWidth;
            "hotarea" === e.linkType &&
              ((e.hotAreas = e.hotAreas || []),
              e.hotAreas.forEach((e) => {
                (e.top = Math.floor(e.startY * a)),
                  (e.left = Math.floor(e.startX * a)),
                  (e.width = Math.floor((e.endX - e.startX) * a)),
                  (e.height = Math.floor((e.endY - e.startY) * a));
              }));
          },
          handleImageClick(e) {
            var { imgIndex: t } = e.currentTarget.dataset,
              { listData: a } = this.data,
              i = a[t];
            this.triggerEvent("itemClick", i);
          },
          handleImageChange(e) {
            var { listData: t } = this.data,
              { current: a } = e.detail;
            this.setData({
              current: a,
              currentItemHasTitle: this.computeCurrentHasTitle(t, a),
            }),
              this.triggerEvent("itemChange", { value: a });
          },
          handleHotareaNavigate(e) {
            var { hotarea: t = {}, imgurl: a = "" } = e.currentTarget.dataset;
            this.triggerEvent("navigate", Object(i.a)({}, t, { imageUrl: a }));
          },
          handleContactBack(e) {
            this.triggerEvent("contactback", e.detail);
          },
        },
      });
    },
  })
);
