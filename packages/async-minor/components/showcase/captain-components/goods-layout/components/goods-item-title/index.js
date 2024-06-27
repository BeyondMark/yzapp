"use strict";
var r = require("~/r");
r(
  "7QIu",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "7QIu": function (t, e, i) {
        i.r(e);
        var o = i("RC6s"),
          s = i("Qwxn"),
          a = i("Xq7Z");
        Component({
          behaviors: [s.a, o.a],
          externalClasses: ["custom-class"],
          properties: {
            goodsInfo: {
              type: Object,
              value: {},
              observer() {
                this.setData({
                  isShowSubTitle: this.computeIsShowSubTitle(),
                  isShowTitleTag: this.computeIsShowTitleTag(),
                });
              },
            },
            goodsIndex: Number,
          },
          options: { addGlobalClass: !0 },
          data: {
            titleStyle: "",
            textAlignStyle: "",
            isShowTitle: !1,
            isShowSubTitle: !1,
            isShowTitleTag: !1,
            infoTitleClass: "",
          },
          attached() {
            this.setData({
              titleStyle: this.computeTitleStyle(),
              textAlignStyle: this.computeTextAlignStyle(),
              isShowTitle: this.computeIsShowTitle(),
              isShowSubTitle: this.computeIsShowSubTitle(),
              isShowTitleTag: this.computeIsShowTitleTag(),
              infoTitleClass: this.computeInfoTitleClass(),
            });
          },
          methods: {
            computeHybridClass() {
              return this.data.goodsIndex % 3 == 0 ? "one-big" : "two-small";
            },
            computeIsPromotion() {
              var { layout: t, sizeType: e } = this.data;
              return t === a.f.SMALL && e === a.j.PROMOTION;
            },
            computeTitleStyle() {
              var { textStyleType: t = 1 } = this.data.infoData || {};
              return "font-weight: " + a.m[t];
            },
            computeTextAlignStyle() {
              var { textAlignType: t = "left" } = this.data.infoData || {};
              return "text-align: " + t;
            },
            computeIsShowTitle() {
              var { layout: t, infoData: e = {} } = this.data,
                { showTitle: i } = e;
              return !this.computeIsPromotion() && (t === a.f.LIST || i);
            },
            computeIsShowSubTitle() {
              var {
                layout: t,
                goodsInfo: e = {},
                infoData: i = {},
              } = this.data || {};
              if (!i) return !1;
              var { showSubTitle: o = !1 } = i,
                s = this.computeIsPromotion(),
                { subTitle: l = "" } = e;
              return (
                !s &&
                (t === a.f.SMALL ||
                  t === a.f.HYBRID ||
                  t === a.f.THREE ||
                  t === a.f.SWIPE ||
                  0 !== l.length) &&
                o
              );
            },
            computeIsShowTitleTag() {
              var { layout: t, goodsInfo: e = {} } = this.data || {},
                { showTitleTag: i = !0, titleTagText: o = "" } = e;
              return t !== a.f.THREE && t !== a.f.SWIPE && i && o;
            },
            computeInfoTitleClass() {
              var { layout: t, sizeType: e, goodsIndex: i } = this.data,
                o = this.computeIsShowTitle(),
                s = this.computeIsShowSubTitle(),
                l = this.computeHybridClass(),
                u = [
                  "has-title-" + +o,
                  "has-subtitle-" + +s,
                  "" + a.g[t],
                  "" + a.k[e],
                  "" + l,
                ];
              if (+t === a.f.HYBRID) {
                var r = i % 3 == 0 ? "big" : "small";
                u.push("hybrid-" + r);
              }
              return u.join(" ");
            },
          },
        });
      },
      Qwxn: function (t, e, i) {
        e.a = Behavior({
          properties: {
            appId: String,
            goodsInfo: { type: Object, value: {} },
            infoData: { type: Object, value: {} },
            goodsIndex: Number,
            layout: { type: Number, value: 0 },
            sizeType: { type: Number, value: 0 },
            redirectType: { type: Number, value: 1 },
            extraData: { type: Object, value: {} },
            textStyleType: { type: Number, value: 1 },
            textAlignType: { type: String, value: "left" },
          },
        });
      },
    }
  )
);
