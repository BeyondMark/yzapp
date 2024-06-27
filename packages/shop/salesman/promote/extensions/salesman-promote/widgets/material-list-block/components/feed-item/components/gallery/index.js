"use strict";
var r = require("~/r");
r(
  "CrcM",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      CrcM: function (e, a, t) {
        t.r(a);
        var i = t("Bt9F"),
          r = t("a1Mm");
        Object(i.a)({
          externalClasses: ["custom-gallery"],
          properties: { imgList: Array },
          data: {
            imageWidth: 0,
            imageHeight: 0,
            imgClass: "gallery__img",
            galleryImgList: [],
          },
          observers: {
            imgList(e) {
              var a = e.length > 1;
              this.setYZData({
                galleryClass: a ? "gallery--multiple" : "gallery--single",
                galleryTianClass: 4 === e.length ? "gallery__tian" : "",
                imgClass: a ? "gallery__img" : "gallery--single_img",
                galleryImgList: e.map((e) => Object(r.a)(e, "!300x300.jpg")),
              });
            },
          },
          methods: {
            handlePreviewImage(e) {
              var { current: a } = e.target.dataset,
                t = this.data.imgList;
              wx.previewImage({ current: t[a], urls: t });
            },
            _handleLoad(e) {
              if (1 === this.data.imgList.length) {
                var { width: a, height: t } = e.detail;
                this._setImageSize(a, t);
              }
              this.triggerEvent("load");
            },
            _setImageSize(e, a) {
              var t = e / a,
                i = 0,
                r = 0;
              t > 1 ? ((i = 200), (r = 200 / t)) : ((i = 200 * t), (r = 200)),
                this.setYZData({ imageWidth: i + "px", imageHeight: r + "px" });
            },
          },
        });
      },
    }
  )
);
