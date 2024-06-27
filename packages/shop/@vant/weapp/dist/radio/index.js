"use strict";
var r = require("~/r");
r(
  "0bi1",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "0bi1": function (e, a, t) {
      t.r(a);
      var i = t("ECkf"),
        l = t("py6f"),
        s = t("NeL/");
      Object(l.a)({
        field: !0,
        relation: Object(s.b)("radio-group", function () {
          this.updateFromParent();
        }),
        classes: ["icon-class", "label-class"],
        props: {
          name: null,
          value: null,
          disabled: Boolean,
          useIconSlot: Boolean,
          checkedColor: String,
          labelPosition: { type: String, value: "right" },
          labelDisabled: Boolean,
          shape: { type: String, value: "round" },
          iconSize: { type: null, value: 20 },
        },
        data: { direction: "", parentDisabled: !1 },
        methods: {
          updateFromParent() {
            if (this.parent) {
              var { value: e, disabled: a, direction: t } = this.parent.data;
              this.setData({ value: e, direction: t, parentDisabled: a });
            }
          },
          emitChange(e) {
            var a = this.parent || this;
            a.$emit("input", e),
              a.$emit("change", e),
              Object(i.d)() && a.setData({ value: e });
          },
          onChange() {
            this.data.disabled ||
              this.data.parentDisabled ||
              this.emitChange(this.data.name);
          },
          onClickLabel() {
            var {
              disabled: e,
              parentDisabled: a,
              labelDisabled: t,
              name: i,
            } = this.data;
            e || a || t || this.emitChange(i);
          },
        },
      });
    },
  })
);
