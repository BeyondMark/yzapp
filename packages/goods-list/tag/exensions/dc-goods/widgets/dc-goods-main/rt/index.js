"use strict";
var r = require("~/r");
r(
  "QJL9",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      QJL9: function (e, s, t) {
        t.r(s);
        var o = t("7/pW"),
          d = t("oNZJ"),
          a = t("9mFz"),
          r = getApp(),
          i = {
            TAG_CONFIG: d.o,
            ALL_GOODS_CONFIG: d.b,
            SERACH_RANTA_CONFIG: d.k,
          };
        Object(o.a)({
          data: { kdt_id: r.getKdtId(), uuid: "", goodsOpt: d.b },
          properties: {
            pageType: { type: String, observer: "pageTypeChange" },
          },
          observers: {},
          methods: {
            pageTypeChange(e) {
              this.setYZData({ goodsOpt: i[e] });
            },
            handleItemImageLoaded(e) {
              void 0 === e && (e = {}),
                this.ctx.process.invoke("handleItemImageLoaded", e);
            },
            handleItemClick(e) {
              this.ctx.process.invoke("handleItemClick", e);
            },
            showcaseHandleGoodsBuy(e) {
              this.ctx.process.invoke("showcaseHandleGoodsBuy", e);
            },
          },
          attached() {
            Object(a.b)(this, ["uuid", "goodsOpt"]);
          },
        });
      },
    }
  )
);
