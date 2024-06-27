var r = require("~/r");
r("cm7f", {
  cm7f: function (t, e) {
    Component({
      properties: { shareConfig: Object },
      data: { style: "" },
      attached() {
        var t = wx.getMenuButtonBoundingClientRect(),
          { width: e } = t,
          r = "right: " + (e + 20) + "px";
        this.setData({ style: r });
      },
      methods: {
        handleClick() {
          this.triggerEvent("share");
        },
      },
    });
  },
});
