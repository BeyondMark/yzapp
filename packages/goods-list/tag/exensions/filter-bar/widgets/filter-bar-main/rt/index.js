"use strict";
var r = require("~/r");
r(
  "lORy",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      lORy: function (t, e, a) {
        a.r(e);
        var o = a("Fcif"),
          i = a("7/pW"),
          s = a("9mFz"),
          r = a("oNZJ");
        Object(i.a)({
          data: {
            filters: [
              { title: "综合", value: "" },
              { title: "上新", value: "createdTime" },
            ],
            layoutType: "two",
            themeClass: "",
          },
          properties: { isShowLayoutChange: { type: Boolean, value: !1 } },
          methods: {
            handleFilterChange(t) {
              this.ctx.process.invoke("handleFilterChange", t);
            },
            handleChangeLayoutType() {
              var t = "two" === this.data.goodsOpt.layoutOpt.type;
              if (this.data.goodsOpt.items.length) {
                this.setYZData({ layoutType: t ? "one" : "two" });
                var e = {};
                this.data.goodsOpt.isTagPage ||
                  (t
                    ? (e.default = Object(o.a)(
                        {},
                        Object(r.n)({
                          oneHeight: 16,
                          twoWidth: 16,
                          threeWidth: 73,
                          threeMargin: "60px 0 12px 0",
                          areaHeight: 0,
                        }),
                        { layoutType: "one", layout: "horizontal" }
                      ))
                    : (e.two = Object(r.n)()));
                var a = t
                  ? { type: "one", itemMargin: 16, layoutMargin: 12 }
                  : { type: "two", itemMargin: 8, layoutMargin: 8 };
                this.ctx.process.invoke("handleChangeLayoutType", {
                  "goodsOpt.itemCardOpt.type": "card",
                  "goodsOpt.itemCardOpt.layout": t ? "horizontal" : "vertical",
                  "goodsOpt.itemCardOpt.layoutType": t ? "one" : "two",
                  "goodsOpt.layoutOpt": Object(o.a)(
                    {},
                    this.data.goodsOpt.layoutOpt,
                    a
                  ),
                  "goodsOpt.skeletonOpt": e,
                });
              }
            },
          },
          observers: {},
          attached() {
            this.setYZData({
              commonFilters: this.data.filters.map((t) => Object(o.a)({}, t)),
              currentFilter: parseInt(this.data.defaultFilter, 10),
            }),
              Object(s.b)(this, ["filters", "themeClass", "goodsOpt"]);
          },
        });
      },
    }
  )
);
