var r = require("~/r");
r("VyIp", {
  VyIp: function (t, e) {
    Component({
      properties: {
        item: {
          type: Object,
          value: {},
          observer() {
            this.setItemStyle();
          },
        },
        layoutClass: Array,
      },
      options: { styleIsolation: "apply-shared" },
      data: { itemInfo: {}, itemIndex: 0, itemStyle: "", layoutConfig: {} },
      attached() {
        var { info: t, index: e, layoutConfig: i } = this.data.item;
        this.setData({ itemInfo: t, itemIndex: e, layoutConfig: i }),
          this.setItemStyle();
      },
      methods: {
        setItemStyle() {
          var { heightStyle: t, goodsMarginStyle: e } = this.data.item;
          this.setData({ itemStyle: e + ";" + t });
        },
      },
    });
  },
});
