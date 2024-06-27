"use strict";
var r = require("~/r");
r(
  "hrcp",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    hrcp: function (e, r, t) {
      t.r(r);
      var a = t("rqVN"),
        s = t("RY8z"),
        o = t("a1Mm"),
        i = t("6i0Q");
      Object(a.b)({
        properties: {
          show: Boolean,
          goodsList: {
            type: Array,
            observer(e) {
              var r = e.map(
                (e) => ((e.image_url = Object(o.a)(e.image_url)), e)
              );
              this.setYZData({ list: r });
            },
          },
        },
        data: { list: [], themeColor: "#f44" },
        methods: {
          move() {},
          gotoBuy(e) {
            var r = e.currentTarget.dataset.index,
              t = this.data.goodsList[r];
            s.a.navigate({ url: t.url });
          },
          closeClick() {
            this.triggerEvent("closeClick");
          },
        },
        attached() {
          i.a.getThemeColor("general").then((e) => {
            this.setYZData({ themeColor: e });
          });
        },
      });
    },
  })
);
