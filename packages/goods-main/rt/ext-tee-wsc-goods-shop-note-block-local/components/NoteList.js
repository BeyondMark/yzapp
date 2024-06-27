"use strict";
var r = require("~/r");
r(
  "LIhH",
  Object.assign({}, require("~/v.js").modules, {
    LIhH: function (e, t, o) {
      o.r(t);
      var r = o("YeA1"),
        i = o("OK7I"),
        n = o.n(i),
        s = o("ONqW"),
        a = "view",
        d = "click";
      function c(e, t) {
        return "g." + e + "~contentguide~" + (t + 1) + "~" + n()(8);
      }
      var g = {
          name: "note-list",
          props: { noteList: { default: [] }, goodsId: { default: 0 } },
          mounted() {
            this.noteList.forEach((e, t) => {
              this.reportView(t);
            });
          },
          methods: {
            onItemClick(e) {
              this.reportClick(e);
              var t = this.noteList[e];
              t.noteAlias &&
                Object(r.a)().dmc.navigate("ShopnoteDetail", {
                  sourceFrom: "goods",
                  banner_id: c(this.goodsId, e),
                  noteAlias: t.noteAlias,
                });
            },
            reportView(e) {
              this.reportLogger({ type: a, name: "组件曝光", index: e });
            },
            reportClick(e) {
              this.reportLogger({ type: d, name: "组件点击", index: e });
            },
            reportLogger(e, t, o) {
              Object(s.a)().log({
                et: e,
                ei: e,
                en: t,
                params: {
                  banner_id: c(this.goodsId, o),
                  component: "contentguide",
                },
              });
            },
          },
          ud: !0,
        },
        u = o("9ZMt");
      t.default = u.default.component(g);
    },
  })
);
