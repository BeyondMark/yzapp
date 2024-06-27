var r = require("~/r");
r("5ltV", {
  "5ltV": function (t, e) {
    Component({
      properties: {
        config: { type: Object, default: () => {} },
        hotStyle: { type: String, default: "" },
        hot: { type: Array, default: () => [] },
        normal: { type: Array, default: () => [] },
        isSingle: { type: Boolean, default: !1 },
        needOpacity: { type: Boolean, default: !1 },
      },
      data: { extraCls: "" },
      attached() {
        this.initData();
      },
      methods: {
        handleSearch(t) {
          var e,
            { wordItem: a, index: r } =
              null == t || null == (e = t.currentTarget) ? void 0 : e.dataset;
          this.triggerEvent("search", { wordItem: a, index: r });
        },
        initData() {
          var { isSingle: t, needOpacity: e } = this.data,
            a = e ? "hot-words-tags-light" : "",
            r = t ? "hot-words-tags-inline" : "";
          this.setData({ extraCls: a + " " + r });
        },
      },
    });
  },
});
