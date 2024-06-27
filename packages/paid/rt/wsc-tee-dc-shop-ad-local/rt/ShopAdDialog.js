"use strict";
var r = require("~/r");
r(
  "EuFv",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      EuFv: function (e, t, i) {
        i.r(t);
        var a = i("Fcif"),
          s = i("9ZMt"),
          r = i("a1Mm"),
          o = i("taYb"),
          h = i("Ux6k"),
          d = i("MLLI"),
          p = i("YeA1"),
          l = s.default.getApp(),
          n = {
            data: () => ({
              showAdPop: !1,
              adImage: "",
              adLinkType: "",
              adId: 0,
              imageStyle: "",
              swipeWarpStyle: "",
              closeIconStyle: {},
              adResource: {},
              previousMargin: "0px",
              isImLink: !1,
              isSkyline: !1,
              im: { sourceParam: "", businessId: "" },
              isSwipe: !1,
              swipeResource: [],
              swipeTime: 3e3,
              vanSwiperKey: "" + Math.random(),
              isSlide: !1,
              autoPlay: 1,
              swipeIndex: 0,
            }),
            computed: {
              showNextMargin() {
                return this.isSlide ? (this.isSkyline ? "" : "96.5rpx") : "";
              },
              showPreviousMargin() {
                return this.isSlide
                  ? this.isSkyline
                    ? this.previousMargin
                    : "96.5rpx"
                  : "0px";
              },
              singleImageHotAreas() {
                return this.isSwipe || this.isSlide
                  ? []
                  : this.getHotAreaData(this.adResource);
              },
            },
            created() {
              Object(p.b)(this, ["isSkyline"]),
                this.ctx.event.listen("showShopAdDialog", (e) => {
                  e && this.getCurrentUserShopAd(e);
                }),
                this.ctx.event.listen("hideShopAdDialog", () => {
                  this.showAdPop = !1;
                });
            },
            destroyed() {
              this.ctx.event.remove("showShopAdDialog"),
                this.ctx.event.remove("hideShopAdDialog");
            },
            methods: {
              getHotAreaData(e, t) {
                void 0 === t && (t = {});
                for (
                  var { isSlide: i } = t,
                    { screenWidth: a = 300 } = Object(d.b)(),
                    s = Math.floor((a / 750) * (i ? 525 : 600)) / e.image_width,
                    r = e.hot_areas || [],
                    o = 0;
                  o < r.length;
                  o++
                )
                  (r[o].top = Math.floor(Number(r[o].start_y) * s)),
                    (r[o].left = Math.floor(Number(r[o].start_x) * s)),
                    (r[o].width = Math.floor(
                      (Number(r[o].end_x) - Number(r[o].start_x)) * s
                    )),
                    (r[o].height = Math.floor(
                      (Number(r[o].end_y) - Number(r[o].start_y)) * s
                    ));
                return r;
              },
              handleSwiperChange(e) {
                var { current: t } = e.detail;
                this.swipeIndex = t;
              },
              batchSetData(e) {
                Object.entries(e).forEach((e) => {
                  var [t, i] = e;
                  this[t] = i;
                });
              },
              getCurrentUserShopAd(e) {
                Object(h.b)(e)
                  .then((e) => {
                    var t,
                      i = e && e.id;
                    if (!i)
                      return (
                        this.ctx.event.emit("hideShopAdDialog"),
                        this.ctx.event.emit("closeAutoOpenPopup", {
                          isRealClose: !1,
                        }),
                        void (this.showAdPop = !1)
                      );
                    var s = JSON.parse(e.resource),
                      {
                        imageCount: o,
                        swipeTime: h,
                        swipeResource: p,
                        autoPlay: n = 1,
                      } = s || {},
                      c = 2 == +o,
                      u = 3 == +o,
                      g = s.image_height,
                      m = s.image_width;
                    if (c || u) {
                      var v = p[0];
                      (g = v.image_height), (m = v.image_width);
                    }
                    var { screenWidth: w = 375 } = Object(d.b)(),
                      _ = u ? "525" : "600",
                      x = (g / m) * _,
                      S = "width: " + _ + "rpx; height: " + x + "rpx;",
                      y = S;
                    u &&
                      ((this.previousMargin = (0.3 * w) / 2 + "px"),
                      (y = "width: 100vw; height: " + x + "rpx;"));
                    var k = "chat" === s.weapp_link_type;
                    this.batchSetData({
                      adImage: Object(r.a)(s.image_url),
                      adLinkType: s.weapp_link_type || s.link_type,
                      adId: i,
                      showAdPop: !0,
                      imageStyle: S,
                      swipeWarpStyle: y,
                      adResource: s,
                      isSwipe: c,
                      isSlide: u,
                      autoPlay: !(u && 1 != +n),
                      swipeTime: h,
                      isImLink: k,
                      swipeResource:
                        c || u
                          ? (p || []).map((e) =>
                              Object(a.a)({}, e, {
                                hotAreas: this.getHotAreaData(e, {
                                  isSlide: u,
                                }),
                                image_url: Object(r.a)(
                                  e.image_url,
                                  "!730x0.webp"
                                ),
                              })
                            )
                          : [],
                    });
                    var A =
                        null == s || null == (t = s.hot_areas)
                          ? void 0
                          : t.some((e) => "chat" === e.link_type),
                      b =
                        !(!c && !u) &&
                        (p || []).some((e) => {
                          var t;
                          return (
                            "chat" === e.link_type ||
                            (null != (t = e.hot_areas) && t.length
                              ? e.hot_areas.some((e) => "chat" === e.link_type)
                              : void 0)
                          );
                        });
                    (k || A || b) &&
                      l.getDefaultImData().then((e) => {
                        this.batchSetData({ im: e });
                      }),
                      this.ctx.logger &&
                        this.ctx.logger.log({
                          et: "view",
                          ei: "Ad_view",
                          en: "图片广告曝光次数",
                          si: l.getKdtId(),
                          params: { ad_id: this.data.adId },
                        });
                  })
                  .catch((e) => {
                    this.ctx.event.emit("hideShopAdDialog"),
                      this.ctx.event.emit("closeAutoOpenPopup", {
                        isRealClose: !1,
                      }),
                      (this.showAdPop = !1);
                  });
              },
              closeAdPop() {
                var { adId: e } = this.data;
                this.batchSetData({ showAdPop: !1 }),
                  this.ctx.event.emit("hideShopAdDialog"),
                  this.ctx.event.emit("closeAutoOpenPopup", {
                    isRealClose: !0,
                  }),
                  Object(h.a)(e)
                    .then((e) => {
                      if (!e) throw new Error("关闭广告弹窗失败");
                    })
                    .catch((e) => {
                      throw new Error("关闭广告弹窗失败, " + e);
                    });
              },
              handleClickAdPop(e) {
                var { adLinkType: t, adResource: i } = this.data;
                this.ctx.logger &&
                  this.ctx.logger.log({
                    et: "click",
                    ei: "Ad_Click",
                    en: "图片广告打开次数",
                    si: l.getKdtId(),
                    params: { ad_id: this.data.adId },
                  }),
                  null != e && e.link_type && ((t = e.link_type), (i = e));
                var { extra_data: s } = i;
                if (
                  (this.closeAdPop(), "weapplink" === t && "2" === s.link_type)
                ) {
                  var {
                    other_weapp_appid: r = "",
                    other_weapp_link: h = "",
                    use_short_link: d = 0,
                    short_link: p = "",
                  } = s;
                  return 1 == +d
                    ? void wx.navigateToMiniProgram({ shortLink: p })
                    : wx.navigateToMiniProgram({
                        appId: r,
                        path: h,
                        fail(e) {
                          Toast(e.errMsg || "打开其他小程序失败");
                        },
                      });
                }
                var n = Object(a.a)(
                  {},
                  Object(a.a)({}, o.a.toCamelCase(i), {
                    extraData: o.a.toCamelCase(s),
                  }),
                  { type: t }
                );
                "weapplink" === n.type &&
                  "link" === n.linkType &&
                  (n.linkType = n.type),
                  this.ctx.process.invoke("jumpToLink", n);
              },
            },
            ud: !0,
          };
        t.default = s.default.component(n);
      },
    }
  )
);
