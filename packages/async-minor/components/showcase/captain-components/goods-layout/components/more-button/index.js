var r = require("~/r");
r("KyuK", {
  KyuK: function (t, e) {
    var o = 5,
      a = 6;
    Component({
      externalClasses: ["custom-class"],
      properties: {
        moreUrl: String,
        buttonType: { type: Number, value: 1 },
        goodsMargin: { type: Number, value: 10 },
        moreText: { type: String, value: "查看更多" },
        loading: Boolean,
      },
      data: { buttonTypeClass: "" },
      attached() {
        this.setData({
          buttonTypeClass: this.computeButtonTypeClass(),
          buttonMarginStyle: this.computeButtonMargin(),
        });
      },
      methods: {
        computeButtonTypeClass() {
          return "c-goods-layout__more--" + this.data.buttonType;
        },
        computeButtonMargin() {
          var { goodsMargin: t, buttonType: e } = this.data,
            n = t / 2 + "px";
          return e === a || e === o
            ? "padding-top: " +
                n +
                ";padding-bottom: " +
                n +
                ";margin-left: " +
                n +
                ";"
            : "margin-top: " + n + ";";
        },
      },
    });
  },
});
