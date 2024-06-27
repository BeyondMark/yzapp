"use strict";
var r = require("~/r");
r(
  "hJAy",
  Object.assign({}, require("~/v.js").modules, {
    hJAy: function (t, e, i) {
      i.r(e);
      var l = i("9ZMt"),
        n = i("Fcif"),
        r = i("Zqpg"),
        s = {
          title: [Number, String],
          icon: String,
          size: String,
          label: [Number, String],
          center: Boolean,
          isLink: Boolean,
          required: Boolean,
          clickable: { type: Boolean, default: !1 },
          titleWidth: String,
          customStyle: String,
          arrowDirection: String,
          border: { type: Boolean, default: !0 },
        };
      l.default.component({
        name: "t-cell",
        mixins: [
          Object(r.a)({
            externalClasses: [
              "custom-class",
              "title-class",
              "label-class",
              "value-class",
              "right-icon-class",
              "hover-class",
            ],
          }),
        ],
        props: Object(n.a)({}, s, {
          value: String,
          useLabelSlot: Boolean,
          url: String,
          linkType: { type: String, value: "navigateTo" },
          titleStyle: String,
        }),
        computed: {
          titleStyles: function () {
            var t = this.titleWidth,
              e = this.titleStyle,
              i = t ? "min-width: " + t + ";max-width: " + t + ";" : "";
            return e && (i += e + (e.endsWith(";") ? "" : ";")), i;
          },
        },
        methods: {
          onClick: function (t) {
            this.$emit("click", t, { bubbles: !0, composed: !0 }),
              this.jumpLink();
          },
          jumpLink: function (t) {
            void 0 === t && (t = "url");
            this[t];
          },
        },
        ud: !0,
      });
    },
  })
);
