"use strict";
var r = require("~/r");
r(
  "Mu+3",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "Mu+3": function (e, t, i) {
      i.r(t);
      var a = i("u8kV"),
        l = i("GFa9"),
        o = { 0: "3-2", 1: "1-1", 2: "3-4", 3: "16-9" },
        s = { 1: "cover", 2: "contain" },
        r = 1,
        p = { 1: "normal", 2: "bold" };
      Object(a.c)({
        properties: {
          componentData: { type: Object, value: {} },
          layoutConfig: { type: Object, value: {}, observer: "initLayout" },
          iStyle: { type: [String, Object] },
        },
        options: { styleIsolation: "shared" },
        data: {
          isWaterFall: !1,
          paddingTopStyle: {},
          imageFillStyleClass: "",
          textStyleClass: "",
          imageFillMode: "aspectFit",
        },
        attached() {
          this.setYZData({ imageFillMode: this.computeImageFillMode() });
        },
        methods: {
          jump() {
            var { componentData: e } = this.properties,
              { noteAlias: t } = e;
            l.a.navigate({
              url: "/packages/shop/shopnote/detail/index?noteAlias=" + t,
            });
          },
          initLayout() {
            var { layoutConfig: e = {} } = this.properties,
              {
                sizeType: t = 0,
                imageRatio: i = 1,
                imageFillStyle: a = 1,
                textStyleType: l = 1,
              } = e,
              n = {},
              d = +t === r,
              u = "recommend-note-banner__img-" + s[a],
              y = "bold" === p[l] ? "title-bold" : "";
            if (!d) {
              var [c, m] = o[i].split("-");
              n = "padding-top: " + (+m / +c) * 100 + "%";
            }
            this.setYZData({
              isWaterFall: d,
              imageFillStyleClass: u,
              textStyleClass: y,
              paddingTopStyle: n,
            });
          },
          computeImageFillMode() {
            var { layoutConfig: e = {} } = this.properties,
              { imageFillStyle: t, sizeType: i } = e;
            return +i === r ? "widthFix" : 2 == +t ? "aspectFit" : "aspectFill";
          },
        },
      });
    },
  })
);
