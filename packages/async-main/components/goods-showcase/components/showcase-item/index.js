"use strict";
var r = require("~/r");
r(
  "q0oB",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    PuTQ: function (e, t, a) {
      a.d(t, "c", function () {
        return i;
      }),
        a.d(t, "b", function () {
          return n;
        }),
        a.d(t, "a", function () {
          return o;
        });
      var i = "/pages/common/webview-page/index",
        n = [
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
        o = {
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
    q0oB: function (e, t, a) {
      a.r(t);
      var i = a("Fcif"),
        n = a("rqVN"),
        o = a("GFa9"),
        r = a("1Uvd"),
        s = a("PuTQ"),
        c = getApp(),
        d = Object(r.a)(8);
      Object(n.b)({
        name: "showcase-item",
        options: { multipleSlots: !0 },
        properties: {
          title: String,
          type: String,
          className: String,
          iconUrl: String,
          bizName: String,
          showCornerMark: Boolean,
        },
        data: Object(i.a)({}, s.a, { pageRandomNumber: d }),
        attached() {
          this.initConfig();
        },
        methods: {
          initConfig() {
            var { showCornerMark: e } = this.data;
            this.setYZData({
              layoutConfig: Object(i.a)({}, this.data.layoutConfig, {
                showCornerMark: e,
              }),
            });
          },
          jumpPage() {
            var e = c.getKdtId(),
              t = c.getOfflineId(),
              a =
                "/wscstatcenter/recommend-showcase-page/" +
                this.data.type +
                "?kdtId=" +
                e +
                "&oid=" +
                t;
            o.a.navigate({
              url:
                s.c +
                "?src=" +
                encodeURIComponent(a) +
                "&title=" +
                this.data.title,
            });
          },
          handleSuccessFn(e) {
            var { recommendList: t = [] } = e.detail;
            0 === t.length && this.setYZData({ showItem: !1 }),
              t.length >= 10 && this.setYZData({ showLastSelfDefineItem: !0 }),
              this.triggerEvent("render-success", t.length);
          },
        },
      });
    },
  })
);
