"use strict";
var r = require("~/r");
r(
  "1amr",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "1amr": function (e, r, t) {
      t.r(r);
      var s = t("rqVN");
      Object(s.a)({
        data: { logList: [] },
        properties: {
          number: { type: Number, observer: "computedLogList" },
          experienceLog: { type: Array, observer: "computedLogList" },
          rewardTip: String,
        },
        methods: {
          computedLogList() {
            var { number: e, experienceLog: r } = this.properties,
              t = new Array(e).fill({});
            this.setYZData({ logList: r.concat(t) || [] });
          },
        },
      });
    },
  })
);
