"use strict";
var r = require("~/r");
r(
  "tH8Z",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    tH8Z: function (e, l, i) {
      i.r(l);
      var t = i("GYYO"),
        r = i("py6f");
      Object(r.a)({
        classes: [
          "title-class",
          "label-class",
          "value-class",
          "right-icon-class",
          "hover-class",
        ],
        mixins: [t.a],
        props: {
          title: null,
          value: null,
          icon: String,
          size: String,
          label: String,
          center: Boolean,
          isLink: Boolean,
          required: Boolean,
          clickable: Boolean,
          titleWidth: String,
          customStyle: String,
          arrowDirection: String,
          useLabelSlot: Boolean,
          border: { type: Boolean, value: !0 },
          titleStyle: String,
        },
        methods: {
          onClick(e) {
            this.$emit("click", e.detail), this.jumpLink();
          },
        },
      });
    },
  })
);
