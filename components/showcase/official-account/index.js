var r = require("~/r");
r("mVko", {
  mVko: function (a, t) {
    Component({
      data: { canIUse: wx.canIUse("official-account") },
      attached() {
        var { scene: a } = wx.getLaunchOptionsSync();
        this.setData({
          canIUse: [1011, 1047, 1089, 1038].some((t) => t === +a),
        });
      },
      methods: {
        loadError(a) {
          this.setData({ canIUse: !1 }), this.triggerEvent("loadError", a);
        },
      },
    });
  },
});
