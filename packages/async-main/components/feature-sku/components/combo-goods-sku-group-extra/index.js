"use strict";
var r = require("~/r");
r(
  "k0DI",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    k0DI: function (e, t, r) {
      r.r(t);
      var o = r("u8kV");
      Object(o.c)({
        properties: {
          themeClass: { type: String },
          sku: { type: Object, observer: "initData" },
          selectedSkuComb: { type: Object, observer: "initData" },
        },
        data: { formatComboDetail: null, formatTitle: "", singleSku: !1 },
        methods: {
          initData() {
            var { sku: e, selectedSkuComb: t } = this.properties;
            if (e) {
              var { itemDataModel: r = {}, tree: o = [] } = e || {},
                { comboMark: a = {} } = r || {},
                { isCombo: i = !1 } = a || {};
              if (i)
                if (t) {
                  o.length || this.setYZData({ singleSku: !0 });
                  var s = this.chosedComboDetail(),
                    l = this.formatComboDetail(s),
                    m = this.formatTitle();
                  this.setYZData({ formatComboDetail: l, formatTitle: m });
                } else
                  this.setYZData({ formatComboDetail: null, formatTitle: "" });
            }
          },
          chosedComboDetail() {
            var { sku: e = {}, selectedSkuComb: t } = this.properties,
              { comboDetailModel: r = {} } = e.itemDataModel || {},
              { comboGroupModels: o = [] } = r;
            if (1 === o.length) return o[0];
            if (!t || 0 === o.length) return null;
            var { id: a } = t;
            return o.find((e) => e.skuId === a) || {};
          },
          formatTitle() {
            var { selectedSkuComb: e = {} } = this.properties;
            return e.sku ? JSON.parse(e.sku)[0].v : "";
          },
          formatComboDetail(e) {
            var t = [];
            try {
              (e.comboSubItemModels || []).forEach((e) => {
                if (1 === e.isDisplay) {
                  var {
                      skuRelatedModels: r = [],
                      picture: o = "[]",
                      propModels: a = [],
                    } = e,
                    i = [];
                  a.forEach((e) => {
                    var { textModels: t = [] } = e,
                      r = t.map((e) => e.textName);
                    i.push(...r);
                  });
                  var s = JSON.parse(o);
                  r.forEach((r) => {
                    var { sku: o, combineNum: a = 1 } = r,
                      l = ((o && JSON.parse(o)) || [])
                        .map((e) => e.v)
                        .concat(i)
                        .join(";");
                    t.push({
                      title: e.title + " ×" + a,
                      picture: s,
                      skuInfo: l,
                    });
                  });
                }
              });
            } catch (e) {}
            return t;
          },
        },
      });
    },
  })
);
