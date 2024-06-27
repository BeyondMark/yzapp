"use strict";
var r = require("~/r");
r(
  "fqrn",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    fqrn: function (t, e, i) {
      i.r(e);
      var a = i("m6kV"),
        s = i("wSeO"),
        n = i("Zqpg"),
        d = Object(a.a)("t-tab"),
        r = {
          name: "t-tab",
          mixins: [Object(n.a)({ relation: Object(s.b)("tab") })],
          props: {
            dot: Boolean,
            info: String,
            title: String,
            disabled: Boolean,
            titleStyle: String,
            name: { type: [Number, String], default: "" },
          },
          data: () => ({
            active: !1,
            inited: !1,
            shouldRender: !1,
            shouldShow: !1,
            paneClass: "",
          }),
          watch: {
            dot() {
              this.update();
            },
            info() {
              this.update();
            },
            title() {
              this.update();
            },
            disabled() {
              this.update();
            },
            titleStyle() {
              this.update();
            },
          },
          methods: {
            getComputedName() {
              return "" !== this.name ? this.name : this.index;
            },
            updateRender(t) {
              var { parent: e } = this;
              (this.active = t),
                (this.inited = this.inited || t),
                (this.active = t),
                (this.shouldRender = this.inited || !e.lazyRender),
                (this.shouldShow = t || e.animated),
                (this.paneClass = d("pane", { active: t, inactive: !t }));
            },
            update() {
              this.parent && this.parent.updateTabs();
            },
          },
          ud: !0,
        },
        h = i("9ZMt");
      e.default = h.default.component(r);
    },
  })
);
