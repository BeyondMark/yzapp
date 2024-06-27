"use strict";
var r = require("~/r");
r(
  "g5rP",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    g5rP: function (e, t, a) {
      a.r(t);
      var o = a("Fcif"),
        s = a("rqVN"),
        r = a("BoIy"),
        i = a("KDJo"),
        h = a("YeA1"),
        n = getApp();
      Object(s.b)({
        properties: {
          show: { type: Boolean, value: !1 },
          listQuery: { type: Object },
          totalAlias: { type: Array, value: [] },
          iconUrl: {
            type: String,
            value: "https://b.yzcdn.cn/goods_share/share-floating.png",
          },
        },
        data: {
          guideImgUrl: "https://b.yzcdn.cn/goods_share/share_guide.gif",
          showGuide: !1,
          showFloating: !1,
        },
        observers: {
          show(e) {
            if (e) {
              this.iconController = new r.a().setIcon(this, {
                priority: 80,
                height: 50,
                cb: [
                  (e) => {
                    this.setYZData({ bottom: e + "px" });
                  },
                  (e) => {
                    this.setYZData({ goaway: e });
                  },
                ],
              });
              var t = !n.storage.get("share_floating_guide");
              n.request({
                path: "/wscshop/shop/shop-meta-info.json",
                data: { kdt_id: n.getKdtId() },
              }).then((e) => {
                var a = Object(i.e)(e),
                  o = a && t;
                a &&
                  n.logger.log({
                    et: "view",
                    ei: "view_share_floating",
                    en: "悬浮icon曝光",
                    params: { share_from: 5 },
                  }),
                  this.setYZData({ showFloating: a }),
                  o &&
                    setTimeout(() => {
                      n.storage.set("share_floating_guide", !0),
                        this.setYZData({ showGuide: o });
                    }, 200);
              });
            }
          },
        },
        attached() {},
        methods: {
          toVideoList() {
            n.logger.log({
              et: "view",
              ei: "click_share_floating",
              en: "悬浮icon点击",
              params: { share_from: 5 },
            });
            var e = this.data.listQuery || {},
              t = decodeURIComponent(e.keyword || "");
            e.order_by || delete e.order_by,
              Object(h.a)().dmc.navigate("Share", {
                alias: this.data.totalAlias[0],
                shareFrom: 5,
                listQuery: encodeURIComponent(
                  JSON.stringify(Object(o.a)({}, e, { keyword: t }))
                ),
              });
          },
          onCloseGuide() {
            this.setYZData({ showGuide: !1 });
          },
        },
      });
    },
  })
);
