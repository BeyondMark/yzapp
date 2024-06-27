"use strict";
var r = require("~/r");
r(
  "bxsc",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      bxsc: function (e, t, i) {
        i.r(t);
        var s = i("Fcif"),
          r = i("9ZMt"),
          a = i("MLLI"),
          o = i("YeA1"),
          h = i("a0gO"),
          n = i("mh02"),
          u = i("QhQU"),
          c = {
            name: "preview-image-block",
            logicData: () => ({ systemInfo: {}, skuData: {} }),
            data: () => ({
              show: !1,
              showComp: !1,
              current: 0,
              urls: [],
              uiType: "",
              swiperWidth: 0,
              swiperHeight: 0,
              goodsBaseInfo: {},
              goodsPriceInfo: {},
              finalBigButtons: [],
              isNoStock: !1,
              skuList: [],
              imageScale: 1,
              kdtId: 0,
              pageVars: "",
            }),
            computed: {
              noneSku() {
                return this.skuData.noneSku;
              },
              largeImageMode() {
                var e = this.skuData.tree || [];
                return !this.noneSku && !(!e[0] || !e[0].largeImageMode);
              },
              goodsPrice() {
                var e = (this.skuData.list || []).map((e) => e.price);
                return Object(n.b)(e);
              },
              top() {
                var { statusBarHeight: e } = this.systemInfo,
                  t = "web" === r.default.getEnv() ? 0 : u.a;
                return r.default.style.useTpx(t + e + 16);
              },
              navRect() {
                var { top: e, bottom: t } = Object(n.a)();
                return {
                  top: r.default.style.useTpx(e || 16),
                  height: r.default.style.useTpx(t - e || 24),
                };
              },
              closeIconProps: () =>
                "web" === r.default.getEnv()
                  ? {
                      class: "preview-image-swipe-navbar__close",
                      name: "clear",
                    }
                  : {
                      class: "preview-image-swipe-navbar__close--left",
                      name: "cross",
                    },
            },
            created() {
              this.init(),
                Object(o.b)(this, [
                  "goodsBaseInfo",
                  "goodsPriceInfo",
                  "finalBigButtons",
                  "skuData",
                  "isNoStock",
                  "kdtId",
                  "pageVars",
                ]),
                Object(o.d)(this, {
                  "preview-image": (e) => {
                    var {
                        urls: t = [],
                        current: i = 0,
                        uiType: r,
                        imageList: a,
                      } = e,
                      o = {
                        name: this.goodsBaseInfo.title,
                        imgUrl: this.goodsBaseInfo.picture,
                      };
                    if (r === u.b.SKU) {
                      var h = a || this.filterImageListFromTree();
                      (h = this.noneSku
                        ? [
                            Object(s.a)({}, o, {
                              price: this.goodsPriceInfo.price,
                            }),
                          ]
                        : this.largeImageMode
                        ? h
                        : [
                            Object(s.a)({}, o, { price: this.goodsPrice }),
                            ...h,
                          ]),
                        (this.skuList = h),
                        (this.urls = this.skuList.map((e) => e.imgUrl));
                    } else this.urls = t;
                    Array.isArray(this.urls) &&
                      this.urls.length > 0 &&
                      ((this.uiType = r),
                      (this.current = i),
                      (this.show = !0),
                      (this.showComp = !0),
                      this.swipeTo(i));
                  },
                });
            },
            methods: {
              init() {
                Object(a.a)().then((e) => {
                  (this.systemInfo = e), this.setSwiperHeight();
                });
              },
              getSwipe() {
                return this.$refs.previewImageSwipe;
              },
              setSwiperHeight() {
                var {
                  windowWidth: e,
                  windowHeight: t,
                  screenWidth: i,
                  screenHeight: s,
                } = this.systemInfo;
                this.swiperWidth = "web" === r.default.getEnv() ? e : i;
                var a = Object(h.isNewIphone)() ? 34 : 0;
                this.swiperHeight = s - a;
              },
              resizeSwipe() {
                this.setSwiperHeight(),
                  this.$nextTick(() => {
                    var e;
                    null == (e = this.getSwipe()) || e.resize();
                  });
              },
              handleAfterEnter() {
                this.resizeSwipe();
              },
              handleSwipeChange(e) {
                this.current = e;
              },
              onClose() {
                this.ctx.event.emit(
                  "preview-image:updated-current",
                  this.current
                ),
                  (this.show = !1);
              },
              swipeTo(e) {
                var t;
                (this.current = e),
                  null == (t = this.getSwipe()) || t.swipeTo(e);
              },
              handleBigButtonClick(e) {
                this.ctx.event.emit("clickBigButton", e), this.onClose();
              },
              onSwipe(e) {
                e > -1 && e < this.urls.length && this.swipeTo(e);
              },
              formatSkuTree() {
                return (this.skuData.tree || [] || []).map((e) => {
                  var t,
                    i = e.v;
                  if (e.largeImageMode) {
                    var r = [],
                      a = [];
                    e.v.forEach((e, t) => {
                      (Math.floor(t / 3) % 2 == 0 ? r : a).push(e);
                    }),
                      (i = [...r, ...a]),
                      (t = r.length);
                  }
                  return Object(s.a)({}, e, { v: i, topLength: t });
                });
              },
              filterImageListFromTree() {
                var e = this,
                  t = this.formatSkuTree(),
                  i = [],
                  r = function (t) {
                    t.v &&
                      t.v.forEach((r) => {
                        var a = r.previewImgUrl || r.imgUrl;
                        a &&
                          i.push(
                            Object(s.a)({}, r, {
                              imgUrl: r.defaultSkuImg
                                ? e.goodsBaseInfo.picture
                                : a,
                              ks: t.kS,
                              kId: t.kId,
                              price: e.getSkuPrice(r.id),
                            })
                          );
                      });
                  };
                for (var a of t) r(a);
                return i;
              },
              getSkuPrice(e) {
                var t = (this.skuData.list || [])
                  .filter((t) => Number(t.s1) === e)
                  .map((e) => e.price);
                return Object(n.b)(t);
              },
              onImageScale(e) {
                this.imageScale = (null == e ? void 0 : e.scale) || 1;
              },
            },
            ud: !0,
          };
        t.default = r.default.component(c);
      },
    }
  )
);
