"use strict";
var r = require("~/r");
r(
  "DAEO",
  Object.assign({}, require("~/v.js").modules, {
    DAEO: function (e, t, a) {
      a.r(t);
      var r = a("tmLU"),
        s = a("YeA1"),
        i = a("PKOW"),
        o = a("ONqW"),
        c = (e) => {
          var {
            alias: t,
            goodsId: a,
            title: r,
            picture: s,
            minPrice: i,
            price: o,
          } = e;
          return {
            goods_alias: t,
            goods_id: a,
            goods_name: r,
            picture_url: s,
            price: i / 100,
            show_price: o,
          };
        },
        p = {
          name: "goods-mini-btns",
          props: { opt: { type: Object, default: () => ({}) } },
          data: () => ({ plusBtnsShow: !1 }),
          methods: {
            togglePlusBtnsPopup() {
              this.plusBtnsShow = !this.plusBtnsShow;
            },
            onPrefetchCartPage(e) {
              var t = getApp(),
                a = {
                  store_id: t.getOfflineId() || 0,
                  supportReviveGroup: !0,
                  supportCombo: !0,
                };
              return (
                (a.excludedComboSubType = JSON.stringify([""])),
                Object(r.c)({
                  navigatePath: e,
                  navigateCb: (e) => {
                    Object(i.f)({
                      pageType: i.b.CART,
                      query: { prefetchKey: e },
                    });
                  },
                  prefetchCb: () =>
                    new Promise((e, r) => {
                      t.request({
                        data: a,
                        path: "/wsctrade/cartGoodstList.json",
                        method: "GET",
                      })
                        .then((t) => {
                          e(t);
                        })
                        .catch((e) => {
                          r(e);
                        });
                    }),
                })
              );
            },
            onMinBtnClick(e) {
              var { link: t, type: a } = e;
              switch ((this.log(e.type), this.$emit("click", e), a)) {
                case "im":
                  return;
                case "more":
                  this.togglePlusBtnsPopup();
                  break;
                case "share":
                  this.doAppShare();
                  break;
                case "cart":
                  return void this.onPrefetchCartPage(a);
              }
              if (t) {
                var { pageName: r, query: i = {}, type: o = "navigate" } = t;
                Object(s.a)()
                  .dmc[o](r, i)
                  .catch(() => {
                    Object(s.a)().dmc.navigate(r, i);
                  });
              }
            },
            log(e) {
              var t = { et: "click", params: c(this.opt) };
              switch (e) {
                case "gift":
                  (t.ei = "gift"), (t.en = "送礼");
                  break;
                case "cart":
                  (t.ei = "enter_cart"), (t.en = "进入购物车");
                  break;
                case "im":
                  (t.ei = "consult"), (t.en = "点击咨询");
              }
              Object(o.a)().log(t);
            },
            doAppShare() {},
          },
          ud: !0,
        },
        n = a("9ZMt");
      t.default = n.default.component(p);
    },
  })
);
