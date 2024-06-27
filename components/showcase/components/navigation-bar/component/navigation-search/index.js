var r = require("~/r");
r("Blcf", {
  Blcf: function (e, t) {
    Component({
      data: {
        whiteIcon:
          "https://img01.yzcdn.cn/upload_files/2021/08/27/FpI2BttyeM3muXj6OU5VW4Fcvxmb.png",
        blackIcon:
          "https://img01.yzcdn.cn/upload_files/2021/08/27/Fg3UuK-a0YVYbhlKBV7rd96E9Eaa.png",
      },
      properties: {
        showImmersion: { type: Boolean, value: !1 },
        textAlign: { type: String, value: "left" },
      },
      methods: {
        onTap() {
          this.triggerEvent("searchClick", { key: "search" });
        },
      },
    });
  },
});
