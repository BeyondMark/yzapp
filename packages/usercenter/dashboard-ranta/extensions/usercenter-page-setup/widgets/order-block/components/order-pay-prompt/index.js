"use strict";
var r = require("~/r");
r(
  "Qz1V",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      Qz1V: function (e, r, a) {
        a.r(r);
        var o = a("eijD"),
          t = a("rqVN"),
          d = a("RY8z"),
          s = a("tkH8"),
          i = a("2wjL"),
          n = a("R9CS"),
          l = a("i6eE"),
          c = a("PKOW");
        Object(t.b)({
          properties: {
            orderPayPrompts: { type: Object, observer: "initOrderPayPrompts" },
          },
          data: {
            goods: [],
            text: [],
            remianingSeconds: "",
            orderNo: "",
            formattedTime: "00:00:00",
            field1: "",
          },
          methods: {
            initOrderPayPrompts(e) {
              var { descTemplate: r = {}, goods: a = [], orderNo: o } = e || {},
                { template: t, expireTime: d, field1: s = "" } = r,
                i = [],
                n = "";
              if (t) {
                i = t.split(/(\${field1}|\${field2}|\${expireTime})/g);
              }
              d && (n = Math.round(d - Date.now())),
                this.setYZData({
                  text: i,
                  goods: a,
                  orderNo: o,
                  field1: s,
                  remianingSeconds: n,
                });
            },
            handleCountDownChange(e) {
              this.setYZData({
                formattedTime: Object(s.b)("HH:mm:ss", e.detail),
              });
            },
            handleLevelGoodsUrl: (e, r, a) =>
              Object(l.a)({ kdtId: e, goodsId: r }).then((r) => {
                var { autoRenew: o, levelAlias: t, levelGoods: d = {} } = r,
                  { skuList: s } = d,
                  l = s.find((e) => e.goodsSkuId == a),
                  { goodsSkuType: c } = l || [];
                if (o && 2 == c) {
                  var m = i.a.add(
                    "https://cashier.youzan.com/pay/wscuser_paylevel",
                    { kdt_id: e, alias: t, banner_id: Object(n.a)() }
                  );
                  return (
                    "/pages/common/webview-page/index?src=" +
                    encodeURIComponent(m)
                  );
                }
                return "";
              }),
            goPay() {
              var e = this;
              return Object(o.a)(function* () {
                var r = "",
                  { goods: a = [] } = e.data.orderPayPrompts || {},
                  {
                    goodsId: o,
                    skuId: t,
                    payGradeCard: s = !1,
                    kdtId: i,
                  } = a[0] || [];
                s && (r = yield e.handleLevelGoodsUrl(i, o, t)),
                  r
                    ? d.a.navigate({ url: r })
                    : Object(c.f)({
                        pageType: c.b.PAY,
                        query: {
                          orderNo: e.data.orderNo,
                          banner_id: Object(n.a)(),
                        },
                      }),
                  Object(n.c)("pay_click", e.data.orderPayPrompts);
              })();
            },
          },
        });
      },
    }
  )
);
