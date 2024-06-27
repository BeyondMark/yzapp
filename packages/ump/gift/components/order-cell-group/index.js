var r = require("~/r");
r("lxum", {
  lxum: function (e, t) {
    var a = "../order-cell/index";
    Component({
      relations: {
        [a]: {
          type: "child",
          linked() {
            this._updateIsLastElement(a);
          },
          linkChanged() {
            this._updateIsLastElement(a);
          },
          unlinked() {
            this._updateIsLastElement(a);
          },
        },
      },
      data: { elementUpdateTimeout: 0 },
      methods: {
        _updateIsLastElement(e) {
          if (!(this.data.elementUpdateTimeout > 0)) {
            var t = setTimeout(() => {
              this.setData({ elementUpdateTimeout: 0 });
              var t = this.getRelationNodes(e),
                { titleWidth: a } = this.properties;
              t.length > 0 &&
                t.forEach((e, t) => {
                  a && e.setTitleWidth(a), e.updateIsLastElement(0 === t);
                });
            });
            this.setData({ elementUpdateTimeout: t });
          }
        },
      },
    });
  },
});
