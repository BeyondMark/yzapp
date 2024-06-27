"use strict";
var r = require("~/r");
r(
  "1Rt3",
  Object.assign({}, require("~/v.js").modules, {
    "1Rt3": function (e, t, a) {
      a.r(t);
      var i = [
          {},
          {
            imgUrl:
              "https://img01.yzcdn.cn/public_files/dea8b8ae6ae011c23f9fa24a0636ad78.png",
            name: "",
          },
          {
            imgUrl:
              "https://img01.yzcdn.cn/public_files/97743697e42efdc3f96468502af27d60.png",
            name: "",
          },
        ],
        r = {
          name: "AwardLuckyGame",
          props: {
            prizes: { type: Array, default: () => [] },
            detailUrl: String,
            isWxReceipt: { type: Boolean, default: () => !1 },
          },
          computed: {
            reward() {
              var e = [...this.prizes]
                .sort((e, t) => e.probability - t.probability)
                .slice(0, 3);
              return i.map((t, a) => (e[a] ? e[a] : t));
            },
          },
          methods: {
            clickHandle() {
              this.$emit("click-handle");
            },
          },
          ud: !0,
        },
        l = a("9ZMt");
      t.default = l.default.component(r);
    },
  })
);
