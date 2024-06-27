var r = require("~/r");
r("UdPT", {
  UdPT: function (t, e) {
    Component({
      externalClasses: ["custom-class"],
      properties: {
        type: { type: String, value: "text" },
        rows: { type: Number, value: 1 },
        fontSize: { type: Number, value: 12 },
        lineHeight: { type: Number, value: 16 },
        color: { type: String, value: "#f2f2f2" },
        rectStyle: { type: String, value: "width: 20px; height: 20px;" },
      },
      data: { rowStyle: "" },
      attached() {
        this.setData({
          rowStyle: this.computeRowStyle(),
          rowsList: new Array(this.data.rows),
        });
      },
      methods: {
        computeRowStyle() {
          var { color: t, fontSize: e, lineHeight: r } = this.data;
          return (
            "background-color: " +
            t +
            "; height: " +
            e +
            "px; padding: " +
            Math.max((r - e) / 2, 2) +
            "px 0"
          );
        },
      },
    });
  },
});
