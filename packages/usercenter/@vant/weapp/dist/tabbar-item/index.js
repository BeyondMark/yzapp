"use strict";
var r = require("~/r");
r(
  "pwGt",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    pwGt: function (t, e, i) {
      i.r(e);
      var a = i("py6f"),
        r = i("NeL/");
      Object(a.a)({
        props: {
          info: null,
          name: null,
          icon: String,
          dot: Boolean,
          url: { type: String, value: "" },
          linkType: { type: String, value: "redirectTo" },
          iconPrefix: { type: String, value: "van-icon" },
        },
        relation: Object(r.b)("tabbar"),
        data: { active: !1, activeColor: "", inactiveColor: "" },
        methods: {
          onClick() {
            var { parent: t } = this;
            if (t) {
              var e = t.children.indexOf(this),
                i = this.data.name || e;
              i !== this.data.active && t.$emit("change", i);
            }
            var { url: a, linkType: r } = this.data;
            if (a && wx[r]) return wx[r]({ url: a });
            this.$emit("click");
          },
          updateFromParent() {
            var { parent: t } = this;
            if (t) {
              var e = t.children.indexOf(this),
                i = t.data,
                { data: a } = this,
                r = (a.name || e) === i.active,
                n = {};
              r !== a.active && (n.active = r),
                i.activeColor !== a.activeColor &&
                  (n.activeColor = i.activeColor),
                i.inactiveColor !== a.inactiveColor &&
                  (n.inactiveColor = i.inactiveColor),
                Object.keys(n).length > 0 && this.setData(n);
            }
          },
        },
      });
    },
  })
);
