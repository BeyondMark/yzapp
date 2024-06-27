"use strict";
var r = require("~/r");
r(
  "kI1X",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    kI1X: function (e, a, t) {
      t.r(a);
      var i = t("NeL/"),
        l = t("py6f");
      function s(e, a) {
        e.$emit("input", a), e.$emit("change", a);
      }
      Object(l.a)({
        field: !0,
        relation: Object(i.b)("checkbox-group"),
        classes: ["icon-class", "label-class"],
        props: {
          value: Boolean,
          disabled: Boolean,
          useIconSlot: Boolean,
          checkedColor: String,
          labelPosition: { type: String, value: "right" },
          labelDisabled: Boolean,
          shape: { type: String, value: "round" },
          iconSize: { type: null, value: 20 },
        },
        data: { parentDisabled: !1, direction: "vertical" },
        methods: {
          emitChange(e) {
            this.parent ? this.setParentValue(this.parent, e) : s(this, e);
          },
          toggle() {
            var { parentDisabled: e, disabled: a, value: t } = this.data;
            a || e || this.emitChange(!t);
          },
          onClickLabel() {
            var {
              labelDisabled: e,
              parentDisabled: a,
              disabled: t,
              value: i,
            } = this.data;
            t || e || a || this.emitChange(!i);
          },
          setParentValue(e, a) {
            var t = e.data.value.slice(),
              { name: i } = this.data,
              { max: l } = e.data;
            if (a) {
              if (l && t.length >= l) return;
              -1 === t.indexOf(i) && (t.push(i), s(e, t));
            } else {
              var n = t.indexOf(i);
              -1 !== n && (t.splice(n, 1), s(e, t));
            }
          },
        },
      });
    },
  })
);
