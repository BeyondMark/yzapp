"use strict";
var r = require("~/r");
r(
  "4skK",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "4skK": function (e, t, i) {
        i.r(t);
        var d = i("CYhF"),
          m = i("YeA1"),
          o = {
            props: [
              "item",
              "kdtId",
              "buyerId",
              "offlineId",
              "loggerSpm",
              "loggerParams",
            ],
            data: () => ({
              showItem: !0,
              showMoreBtn: !1,
              loaded: !1,
              maxGoodsNumber: 10,
              goodsNumber: 10,
              recommendName: "智能商品悬浮窗",
              layoutConfig: { type: "swipe", itemMargin: 12 },
            }),
            computed: {
              showcaseStyle() {
                return this.item.backgroundImage
                  ? "background-image: url(" +
                      this.item.backgroundImage +
                      "); background-size: cover;"
                  : "";
              },
            },
            methods: {
              handleLoadedFn(e) {
                void 0 === e && (e = {}), (this.loaded = !0);
                var { recommendList: t = [] } = e;
                0 === t.length && (this.showItem = !1),
                  this.$emit("loaded", {
                    bizName: this.item.bizName,
                    recommendList: t,
                  });
              },
              handleItemClick(e) {
                this.$emit("item-click", e);
              },
              jumpPage(e) {
                var { bizName: t } = e;
                Object(m.a)().dmc.navigate(d.Biz2Dmc[t], {
                  kdtId: this.kdtId,
                  oid: this.offlineId,
                });
              },
            },
            ud: !0,
          },
          a = i("9ZMt");
        t.default = a.default.component(o);
      },
    }
  )
);
