var r = require("~/r");
r(
  "Nb7u",
  Object.assign({}, require("~/c.js").modules, {
    Nb7u: function (t, e, r) {
      var a = r("8VmE").default;
      Component({
        properties: {
          shortcutList: { type: Array, value: [] },
          showImmersion: { type: Boolean, value: !1 },
          imageType: { type: String, value: "", observer: "iconUrlList" },
        },
        data: { iconUrlList: [] },
        attached() {},
        methods: {
          iconUrlList() {
            var t = this.data.shortcutList.map((t) =>
              a({}, t, {
                style:
                  "background-image: url(" +
                  t.images[this.data.imageType] +
                  ")",
              })
            );
            this.setData({ iconUrlList: t });
          },
          onTap(t) {
            var { key: e } = t.currentTarget.dataset;
            this.triggerEvent("iconClick", { key: e });
          },
        },
      });
    },
  })
);
