"use strict";
var r = require("~/r");
r(
  "x5u2",
  Object.assign({}, require("~/v.js").modules, {
    x5u2: function (e, t, i) {
      i.r(t);
      var l = i("Fcif"),
        r = i("Zqpg"),
        n = {
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
        },
        s = {
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
          props: Object(l.a)({}, n, {
            value: String,
            useLabelSlot: Boolean,
            url: String,
            linkType: { type: String, value: "navigateTo" },
            titleStyle: String,
          }),
          computed: {
            titleStyles() {
              var { titleWidth: e, titleStyle: t } = this,
                i = e ? "min-width: " + e + ";max-width: " + e + ";" : "";
              return t && (i += t + (t.endsWith(";") ? "" : ";")), i;
            },
          },
          methods: {
            onClick(e) {
              this.$emit("click", e, { bubbles: !0, composed: !0 }),
                this.jumpLink();
            },
            jumpLink(e) {
              void 0 === e && (e = "url");
              this[e];
            },
          },
          ud: !0,
        },
        a = i("9ZMt");
      t.default = a.default.component(s);
    },
  })
);
