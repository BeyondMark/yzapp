"use strict";
var r = require("~/r");
r(
  "I9eG",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    I9eG: function (e, a, t) {
      t.r(a);
      var r = t("rqVN"),
        s = t("RY8z");
      Object(r.b)({
        properties: {
          marginTop: { type: Boolean, value: !1 },
          needBtn: { type: Boolean, value: !1 },
          dataType: { type: String, value: "goods" },
          title: { type: String, value: "更多超值好物" },
          list: {
            type: Array,
            value: [],
            observer(e) {
              this.getData(e);
            },
          },
        },
        data: { showList: [] },
        methods: {
          getData(e) {
            void 0 === e && (e = []);
            var a = e.slice(0, 3);
            this.setYZData({ showList: a });
          },
          goodsClick(e) {
            var { index: a = 0 } = e.currentTarget.dataset,
              t = this.data.list[a],
              { alias: r } = t;
            s.a.navigate({
              url: "/pages/goods/detail/index?alias=" + r + "&shopAutoEnter=1",
            });
          },
          enterShop() {
            s.a.switchTab({ url: "/packages/home/dashboard/index" });
          },
        },
      });
    },
  })
);
