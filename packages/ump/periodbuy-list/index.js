"use strict";
var r = require("~/r");
r(
  "30vJ",
  Object.assign(
    {},
    require("../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "30vJ": function (e, t, a) {
        a.r(t);
        var s = a("qJXH"),
          o = a("PBVU"),
          i = a("hHpg");
        Object(s.b)({
          data: {
            page: 1,
            loading: !1,
            needLoadMore: !0,
            componentData: {
              buy_btn_type: 0,
              goods: [],
              hide_goods_end: 0,
              image_fill_style: 1,
              show_all: !1,
              ratio: "1,1",
              show_buy_btn: 1,
              show_desc: 0,
              show_title: 1,
              size: 1,
              type: "period_buy",
              is_async: !0,
              goods_source: 1,
            },
            list: [],
          },
          onLoad() {
            this.getGoodsList();
          },
          onReachBottom() {
            var { needLoadMore: e, loading: t } = this.data;
            (e || t) && this.getGoodsList();
          },
          getGoodsList() {
            var { loading: e, page: t, list: a, needLoadMore: s } = this.data;
            !e &&
              s &&
              (wx.showToast({ title: "加载中", icon: "loading" }),
              this.setYZData({ loading: !0 }),
              Object(o.a)({ p: t })
                .then((e) => {
                  Array.isArray(e) && e.length > 0
                    ? this.setYZData({ list: [...a, ...e], page: t + 1 })
                    : this.setYZData({ needLoadMore: !1 });
                })
                .catch(() => {
                  Object(i.a)("没有找到商品哦～");
                })
                .then(() => {
                  wx.hideToast(), this.setYZData({ loading: !1 });
                }));
          },
          onShareAppMessage: () => ({
            path: "/packages/ump/periodbuy-list/index",
            title: "周期购商品列表",
          }),
        });
      },
    }
  )
);
