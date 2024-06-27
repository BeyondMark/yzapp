var r = require("~/r");
r("TQIT", {
  TQIT: function (r, a) {
    Component({
      data: {
        stats: [...Array(4).keys()],
        orders: [...Array(5).keys()],
        widgets: [[...Array(4).keys()], [...Array(4).keys()]],
        navigationBarHeight: getApp().globalData.navigationBarHeight,
      },
      methods: {},
    });
  },
});
