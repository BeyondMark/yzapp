"use strict";
var r = require("~/r");
r(
  "BjTb",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      BjTb: function (e, t, i) {
        i.r(t);
        var d = i("9ZMt"),
          o = i("UC9k"),
          a = i("YeA1"),
          m = {
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
                var { hasMore: t, recommendList: i = [] } = e;
                0 === i.length && (this.showItem = !1),
                  this.$emit("loaded", {
                    bizName: this.item.bizName,
                    recommendList: i,
                  });
              },
              handleItemClick(e) {
                this.$emit("item-click", e);
              },
              jumpPage(e) {
                var { bizName: t } = e;
                Object(a.a)().dmc.navigate(o.Biz2Dmc[t], {
                  kdtId: this.kdtId,
                  oid: this.offlineId,
                });
              },
            },
            ud: !0,
          };
        t.default = d.default.component(m);
      },
    }
  )
);
