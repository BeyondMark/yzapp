"use strict";
var r = require("~/r");
r(
  "nNoW",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      nNoW: function (t, e, i) {
        i.r(e);
        var r = i("Bt9F"),
          a = i("lOyf"),
          n = Object(a.a)(),
          s = getApp().getSystemInfoSync();
        Object(r.a)({
          name: "CommonPop",
          properties: {
            show: {
              type: Boolean,
              observer(t) {
                t && !this.data.inited && this.setYZData({ inited: !0 });
              },
            },
            button: { type: String, value: "" },
            customStyle: { type: String, value: "" },
            contentStyle: { type: String, value: "" },
            title: String,
            nested: Boolean,
          },
          data: {
            maxScrollHeight: 0,
            minScrollHeight: 0,
            maxNavHeight: 0.8 * s.screenHeight,
            minNavHeight: 0.5 * s.screenHeight,
          },
          ready() {
            var { maxNavHeight: t, minNavHeight: e } = this.data;
            this.setYZData({
              maxScrollHeight: this.getNavHeight(t),
              minScrollHeight: this.getNavHeight(e),
            });
          },
          methods: {
            noop() {},
            getNavHeight(t) {
              var { title: e } = this.data;
              return t - 50 - (e ? 44 : 0) - (n ? 34 : 0);
            },
            clickBtn() {
              this.triggerEvent("btn-click");
            },
            close() {
              this.triggerEvent("close");
            },
          },
        });
      },
    }
  )
);
