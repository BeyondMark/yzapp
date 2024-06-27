"use strict";
var r = require("~/r");
r(
  "0bGr",
  Object.assign({}, require("~/v.js").modules, {
    "0bGr": function (r, t, e) {
      e.r(t);
      var s = e("Fcif"),
        u = {
          props: { storeGiftsInfo: { type: Object, default: () => ({}) } },
          computed: {
            presents() {
              var r = this.storeGiftsInfo.presents;
              return r && r.length > 0
                ? r.map((r) =>
                    Object(s.a)({}, r, { sku: this.getSkuStr(r.sku) })
                  )
                : [];
            },
          },
          methods: {
            getSkuStr(r) {
              try {
                r = Array.isArray(r)
                  ? r
                  : r && "string" == typeof r
                  ? JSON.parse(r)
                  : [];
              } catch (t) {
                r = [];
              }
              var t = [];
              return (
                r.forEach((r) => {
                  ("k" !== r.k && "v" !== r.k) || t.push(r);
                }),
                t.map((r) => r.v).join("; ")
              );
            },
          },
          ud: !0,
        },
        a = e("9ZMt");
      t.default = a.default.component(u);
    },
  })
);
