"use strict";
var r = require("~/r");
r(
  "2HgI",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "2HgI": function (t, e, o) {
        o.r(e);
        var a = o("a1Mm"),
          s = o("RC6s"),
          l = o("Xq7Z");
        Component({
          behaviors: [s.a],
          options: { addGlobalClass: !0, multipleSlots: !0 },
          externalClasses: ["photo-class", "image-class"],
          properties: {
            layout: Number,
            imageUrl: {
              type: String,
              observer() {
                var { curImageUrl: t, skeletonShow: e } =
                  this.computeImageUrl();
                this.setData({ curImageUrl: t, skeletonShow: e });
              },
            },
            soldoutFlag: String,
            imageFillStyle: { type: Number, value: 2 },
            imageRatio: { type: Number, value: 1 },
            isSoldout: {
              type: Boolean,
              value: !1,
              observer() {
                this.setData({ photoClass: this.computePhotoClass() });
              },
            },
            isEnd: {
              type: Boolean,
              value: !1,
              observer() {
                this.setData({ photoClass: this.computePhotoClass() });
              },
            },
            hideImageStatus: Boolean,
            isWaterfall: Boolean,
            goodsInfo: Object,
          },
          data: {
            imageFillMode: "aspectFit",
            photoClass: "",
            photoStyle: null,
            curImageUrl: "",
            skeletonShow: !0,
            couponData: {},
            containerStyle: "",
          },
          attached() {
            var { curImageUrl: t, skeletonShow: e } = this.computeImageUrl(),
              { goodsInfo: o } = this.data;
            this.setData({
              imageFillMode: this.computeImageFillMode(),
              photoClass: this.computePhotoClass(),
              photoStyle: this.computePhotoStyle(),
              curImageUrl: t,
              skeletonShow: e,
              couponData: o && o.couponData,
            });
          },
          ready() {
            var { goodsInfo: t, layout: e } = this.data;
            t &&
              t.isCoupon &&
              +e !== l.f.BIG &&
              this.createSelectorQuery()
                .select("#points-coupon-box")
                .boundingClientRect((t) => {
                  if (t && t.width) {
                    var e = ((0.9 * t.width) / 165).toFixed(2);
                    this.setData({
                      containerStyle: "transform: scale(" + e + ")",
                    });
                  }
                })
                .exec();
          },
          methods: {
            computeImageUrl() {
              var {
                imageUrl: t = l.l,
                layout: e,
                goodsInfo: { skeleton: o = !1 },
              } = this.data;
              if (o) return { skeletonShow: !0, curImageUrl: "" };
              var s = "!400x0.jpg";
              return (
                (+e !== l.f.BIG && +e !== l.f.HYBRID) || (s = "!730x0.jpg"),
                { skeletonShow: !1, curImageUrl: Object(a.a)(t, s) }
              );
            },
            computeImageFillMode() {
              var { imageFillStyle: t = 2, isWaterfall: e } = this.data;
              return e ? "widthFix" : 2 == +t ? "aspectFit" : "aspectFill";
            },
            computePhotoClass() {
              var { isSoldout: t, isEnd: e, hideImageStatus: o } = this.data;
              return o ? "" : t ? "photo--soldout" : e ? "photo--end" : "";
            },
            computePhotoStyle() {
              var {
                  imageRatio: t = 1,
                  isWaterfall: e,
                  soldoutFlag: o,
                } = this.data,
                a = t,
                s =
                  "--soldOutBgColor: " +
                  (o ? "" : "rgba(0, 0, 0, 0.3)") +
                  " ;--soldOutImageUrl: url(" +
                  (o ||
                    "https://img01.yzcdn.cn/v2/image/wsc-wap/showcase/soldout.png") +
                  ");";
              if (e) return s;
              var [r, i] = l.e[a].split(":");
              return "padding-top: " + 100 * (+i / +r).toFixed(4) + "%; " + s;
            },
          },
        });
      },
    }
  )
);
