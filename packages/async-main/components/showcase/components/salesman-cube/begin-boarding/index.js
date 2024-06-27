"use strict";
var r = require("~/r");
r(
  "fD8a",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    fD8a: function (t, e, a) {
      a.r(e);
      var r = a("rqVN");
      Object(r.b)({
        properties: { guideConfig: { type: Array, value: () => [] } },
        data: {
          step: 0,
          assertMap: {
            button:
              "https://img01.yzcdn.cn/upload_files/2020/12/17/FizKPDD0KVrK9CBzRofDO1vBQURh.png",
            arrowUp:
              "https://img01.yzcdn.cn/upload_files/2020/11/24/FvpawPUa7evlstuYiwsFxDWrPrba.png",
            arrowDown:
              "https://img01.yzcdn.cn/images/salesman/common/guide-arrow-down.png",
            arrowViolentUp:
              "https://img01.yzcdn.cn/upload_files/2020/11/24/FvpawPUa7evlstuYiwsFxDWrPrba.png",
            arrowViolentDown:
              "https://img01.yzcdn.cn/upload_files/2020/11/24/FhWjW9qXlbE0w4HDQ6aHlYdX8nRk.png",
            arrowViolentLeftDown:
              "https://img01.yzcdn.cn/upload_files/2020/11/24/Ft-emTUjyW1Zm_f6tEdxnhSiaC36.png",
          },
        },
        methods: {
          handleClick() {
            var { step: t, guideConfig: e } = this.data;
            t < e.length - 1
              ? this.setYZData({ step: this.data.step + 1 })
              : this.triggerEvent("complete");
          },
        },
      });
    },
  })
);
