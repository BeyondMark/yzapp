"use strict";
var r = require("~/r");
r(
  "GXOS",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      GXOS: function (e, r, t) {
        t.r(r);
        var o = t("rqVN"),
          a = t("RY8z"),
          s = t("tkH8"),
          i = t("R9CS");
        Object(o.b)({
          properties: {
            orderEvaluatePrompts: {
              type: Object,
              observer: "initOrderEvaluatePrompts",
            },
          },
          data: {
            goods: [],
            remianingSeconds: "",
            orderNo: "",
            formattedTime: "00:00:00",
          },
          methods: {
            initOrderEvaluatePrompts(e) {
              var { expireTime: r, goods: t = [], orderNo: o } = e || {},
                a = "";
              if (r) {
                var s = Math.round(r - Date.now());
                a = s > 864e5 ? "" : s;
              }
              this.setYZData({ goods: t, orderNo: o, remianingSeconds: a });
            },
            handleCountDownChange(e) {
              this.setYZData({
                formattedTime: Object(s.b)("HH:mm:ss", e.detail),
              });
            },
            goEvaluate() {
              var { orderNo: e, goods: r } = this.data;
              Object(i.b)("click", e, r),
                a.a.navigate({
                  url:
                    "/packages/evaluation/order/create/index?order_no=" +
                    e +
                    "&from=remind_evaluation_component",
                });
            },
          },
          attached() {
            this.data.orderNo &&
              ((this._observer = wx.createIntersectionObserver(this, {
                thresholds: [1],
              })),
              this._observer
                .relativeToViewport()
                .observe(".mc__orderEvaluatePrompt", (e) => {
                  if (!this._reported && 1 === e.intersectionRatio) {
                    var { orderNo: r, goods: t } = this.data;
                    Object(i.b)("view", r, t), (this._reported = !0);
                  }
                }));
          },
          detached() {
            var e;
            null == (e = this._observer) || e.disconnect();
          },
        });
      },
    }
  )
);
