"use strict";
var r = require("~/r");
r(
  "BVzv",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      BVzv: function (e, i, t) {
        t.r(i);
        var o = t("VmHG"),
          a = t("7/pW"),
          d = t("Ge4K"),
          r = t("mBPn"),
          s = t("9KEa");
        Object(a.a)({
          attached() {
            Object(o.d)(this, [
              "goodsPictures",
              "goodsPictureHeight",
              "showGoodsVideo",
              "video",
            ]);
          },
          data: {
            loop: !0,
            hideVideo: !0,
            showPlayer: !1,
            showIndicator: !0,
            currentSwpPage: 0,
            videoPaidCountFlag: !1,
            windowHeight: Object(s.b)().windowHeight,
          },
          methods: {
            onVideoReady(e) {
              var { detail: i } = e;
              this.videoComponent = i;
            },
            hideVideo() {
              this.setData({ hideVideo: !0 });
            },
            onPlayClick() {
              this.videoPaidCountFlag ||
                ((this.videoPaidCountFlag = !0),
                d.a.get({ url: this.data.video.countPlayedUrl })),
                (this.showPlayer = !0),
                this.$refs.video[0].playVideo();
            },
            previewImage(e) {
              var { currentTarget: i } = e;
              Object(r.a)({
                et: "click",
                ei: "click_goods_pic",
                en: "点击头图",
              });
              var { index: t } = i.dataset;
              if (!this.showGoodsVideo || 0 != +t) {
                var o = this.goodsPictures;
                wx.previewImage({ current: o[t], urls: o });
              }
            },
            changeSwiperPage(e) {
              var { detail: i } = e;
              if (this.showGoodsVideo && !this.data.hideVideo) {
                var { currentSwpPage: t } = this.data,
                  o = this.goodsPictures.length,
                  a = (1 === t || o - 1 === t) && 0 === i.current,
                  d = (1 === i.current || o - 1 === i.current) && 0 === t;
                (a || d) && this.videoComponent.recover();
              }
              this.setData({ currentSwpPage: i.current });
            },
            handleVideoPlayClicked() {
              this.setData({ hideVideo: !1 }), this.videoComponent.play();
            },
          },
        });
      },
    }
  )
);
