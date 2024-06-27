var r = require("~/r");
r("WGK5", {
  WGK5: function (e, t) {
    Component({
      properties: {
        item: { type: Object, default: () => {} },
        showHot: { type: Boolean, default: !1 },
        themeStyle: { type: String, default: "" },
        extraCls: String,
      },
      methods: {
        onTap() {
          this.triggerEvent("search");
        },
      },
    });
  },
});
