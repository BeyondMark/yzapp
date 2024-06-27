"use strict";
var r = require("~/r");
r(
  "akLL",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      akLL: function (t, e, o) {
        o.r(e);
        var a = o("Fcif"),
          s = o("3tyi"),
          i = o("mvTU"),
          r = o("flXC");
        Component({
          type: "goods",
          options: { multipleSlots: !0 },
          behaviors: [r.a, i.a],
          properties: {
            list: {
              type: Array,
              value: [],
              observer(t) {
                this.setData({ curList: this.computeGoodsLayoutList(t) });
              },
            },
            skeletonNumber: {
              type: Number,
              value: 0,
              observer(t) {
                this.setSkeleton(t);
              },
            },
            showSoldNum: {
              type: Boolean,
              value: !1,
              observer(t) {
                this.computeInfoItemData("showSoldNum", t);
              },
            },
            showOriginPrice: Boolean,
            isShowMore: Boolean,
            moreUrl: String,
            moreButtonType: { type: Number, value: 1 },
            isPlugin: Boolean,
            openSwipePagination: Boolean,
            heightStyle: { type: String, value: "" },
          },
          data: { curList: [], infoData: {} },
          attached() {
            this.setData({ infoData: this.computeInfoData() });
          },
          methods: {
            computeGoodsLayoutList: (t) =>
              t.map(
                (t) => ((t.isSoldout = 2 == +t.soldStatus && 0 != +t.buyWay), t)
              ),
            computeInfoData() {
              return Object(s.a)(
                this.data,
                "showTitle",
                "showSubTitle",
                "showPrice",
                "showBuyButton",
                "buyButtonType",
                "showSoldNum",
                "buttonText",
                "textAlignType",
                "textStyleType",
                "isPlugin",
                "showOriginPrice",
                "imageRatio",
                "imageFillStyle",
                "borderRadiusType"
              );
            },
            computeInfoItemData(t, e) {
              var o = {};
              (o["infoData." + t] = e), this.setData(Object(a.a)({}, o));
            },
            setSkeleton(t) {
              this.setData({
                curList: this.computeGoodsLayoutList(this.data.list).concat(
                  new Array(t).fill({ skeleton: !0 })
                ),
              });
            },
          },
        });
      },
    }
  )
);
