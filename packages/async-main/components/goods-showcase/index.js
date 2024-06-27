"use strict";
var r = require("~/r");
r(
  "0bqY",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "0bqY": function (e, t, s) {
      s.r(t);
      var a = s("rqVN"),
        o = s("PuTQ");
      Object(a.b)({
        name: "goods-showcase",
        options: { pureDataPattern: /^_/ },
        properties: {
          show: {
            type: Boolean,
            observer(e) {
              e && !this.data.inited && this.setYZData({ inited: !0 });
            },
          },
        },
        data: {
          showcaseItemList: o.b,
          showDefault: !1,
          _emptyListStatus: new Array(3).fill(!1),
        },
        methods: {
          handleSuccessFn(e) {
            var { currentTarget: t, detail: s } = e,
              a = t.dataset.index;
            if (0 === s) {
              var o = this.data._emptyListStatus;
              (o[a] = !0), this.setYZData({ showDefault: o.every((e) => e) });
            }
          },
          closePop() {
            this.triggerEvent("close");
          },
        },
      });
    },
    PuTQ: function (e, t, s) {
      s.d(t, "c", function () {
        return a;
      }),
        s.d(t, "b", function () {
          return o;
        }),
        s.d(t, "a", function () {
          return i;
        });
      var a = "/pages/common/webview-page/index",
        o = [
          {
            title: "店铺热榜",
            iconUrl:
              "https://b.yzcdn.cn/public_files/49c98c9a4b9ee7070cda50774423b65e.png",
            showCornerMark: !0,
            className: "ranking-showcase-item",
            bizName: "g~hotGoods",
            type: "ranking",
          },
          {
            title: "为你推荐",
            iconUrl:
              "https://b.yzcdn.cn/public_files/991bcb683a19c3cdb26fe11fbc5c3c79.png",
            showCornerMark: !1,
            bizName: "g~mayLike",
            type: "recommend",
          },
          {
            title: "历史足迹",
            iconUrl:
              "https://b.yzcdn.cn/public_files/4a96aeb556b1b55dd5341b35db8df464.png",
            showCornerMark: !1,
            bizName: "g~history",
            type: "footmark",
          },
        ],
        i = {
          goodsNumber: 10,
          componentIndex: 0,
          showItem: !0,
          showLastSelfDefineItem: !1,
          layoutConfig: {
            layout: 6,
            sizeType: 2,
            imageRatio: 1,
            showTitle: !1,
            showSubTitle: !1,
            showBuyButton: !1,
            showCornerMark: !1,
            showUmpTags: !0,
            umpTagsMaxCount: 1,
            borderRadiusType: 2,
            imageFillStyle: 1,
            textStyleType: 2,
            goodsMargin: 12,
            pageMargin: 16,
            showPrice: !0,
          },
          recommendName: "智能商品悬浮窗",
        };
    },
  })
);
