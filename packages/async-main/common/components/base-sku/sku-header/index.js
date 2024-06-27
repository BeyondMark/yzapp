"use strict";
var r = require("~/r");
r(
  "Q+ln",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "Q+ln": function (e, t, s) {
        s.r(t);
        var r = s("a1Mm"),
          a = s("u8kV"),
          i = s("4k4N"),
          u = s("Hhx2"),
          o = s("SdHa");
        Object(a.b)({
          options: { multipleSlots: !0 },
          behaviors: [i.a],
          properties: {
            goods: { type: Object, observer: "setImg" },
            selectedSku: { type: Object, observer: "selectedChange" },
            selectedSkuComb: { type: Object, observer: "selectedSkuChange" },
            sku: { type: Object, observer: "skuChange" },
            properties: { type: Array, value: [], observer: "skuChange" },
            selectedProp: {
              type: Object,
              value: {},
              observer: "selectedChange",
            },
            hideStock: Boolean,
            quota: Number,
            quotaUsed: Number,
            quotaCycle: Number,
          },
          data: { stockNum: Number.MAX_VALUE },
          methods: {
            skuChange() {
              this.updateStockNum(),
                this.setYZData({
                  hasSku:
                    this.data.sku &&
                    (!this.data.sku.noneSku || this.data.properties.length),
                });
            },
            selectedChange() {
              this.setImg(), this.updateSelectText();
            },
            selectedSkuChange() {
              this.updateStockNum(), this.updateSelectText();
            },
            updateSelectText() {
              var {
                  sku: e,
                  selectedSku: t,
                  selectedSkuComb: s,
                  selectedProp: r,
                  properties: a,
                } = this.data,
                i = Object(u.d)(e.tree, t),
                o = [],
                c = [];
              a.forEach((e) => {
                r[e.kId] && r[e.kId].length > 0
                  ? e.v.forEach((t) => {
                      -1 !== r[e.kId].indexOf(t.id) && o.push(t.name);
                    })
                  : c.push(e.k);
              });
              var l = 0 === c.length;
              if (s && l)
                return this.setYZData({
                  selectText:
                    "已选择 " +
                    i
                      .map((e) => e.name)
                      .concat(o)
                      .join("；"),
                });
              var d = (e.tree || [])
                .filter((e) => "" === t[e.kS])
                .map((e) => e.k)
                .concat(c)
                .join("；");
              return this.setYZData({ selectText: "请选择 " + d });
            },
            updateStockNum() {
              var { selectedSkuComb: e, sku: t } = this.data,
                s = e && e.stockNum,
                r = s || (t && t.stockNum);
              "number" == typeof r &&
                (0 === s
                  ? this.setYZData({ stockNum: s })
                  : this.setYZData({ stockNum: r }));
            },
            setImg() {
              var { selectedSku: e, sku: t, goods: s } = this.properties;
              if (e && t && s) {
                var { picture: r, originPicture: a } = s,
                  i = (function (e, t) {
                    if ((void 0 === e && (e = []), t)) {
                      var s = {};
                      for (var r of e)
                        if ("s1" === r.kS) {
                          s = r;
                          break;
                        }
                      if (s.v) {
                        var a = s.v.filter((e) => {
                          var { id: s } = e;
                          return s === t;
                        })[0];
                        return a && a.imgUrl ? a.imgUrl : void 0;
                      }
                    }
                  })(t.tree, e.s1);
                (this.originImgUrl = i || a || r),
                  this.setYZData({ imgUrl: Object(o.a)(i || r) });
              }
            },
            onSkuCloseClicked() {
              this.triggerEvent("sku:close");
            },
            onImgClick() {
              this.originImgUrl &&
                wx.previewImage({
                  urls: [Object(r.a)(this.originImgUrl, "!730x0.jpg")],
                });
            },
          },
        });
      },
    }
  )
);
