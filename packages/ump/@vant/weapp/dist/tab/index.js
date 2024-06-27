"use strict";
var r = require("~/r");
r(
  "ecUl",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    ecUl: function (e, t, a) {
      a.r(t);
      var r = a("NeL/"),
        i = a("py6f");
      Object(i.a)({
        relation: Object(r.b)("tabs"),
        props: {
          dot: { type: Boolean, observer: "update" },
          info: { type: null, observer: "update" },
          title: { type: String, observer: "update" },
          disabled: { type: Boolean, observer: "update" },
          titleStyle: { type: String, observer: "update" },
          name: { type: null, value: "" },
        },
        data: { active: !1 },
        methods: {
          getComputedName() {
            return "" !== this.data.name ? this.data.name : this.index;
          },
          updateRender(e, t) {
            var { data: a } = t;
            (this.inited = this.inited || e),
              this.setData({
                active: e,
                shouldRender: this.inited || !a.lazyRender,
                shouldShow: e || a.animated,
              });
          },
          update() {
            this.parent && this.parent.updateTabs();
          },
        },
      });
    },
  })
);
