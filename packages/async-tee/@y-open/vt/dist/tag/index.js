"use strict";
var r = require("~/r");
r(
  "vLqK",
  Object.assign({}, require("~/v.js").modules, {
    vLqK: function (t, e, o) {
      o.r(e);
      var a = o("Zqpg"),
        r = {
          name: "t-tag",
          mixins: [Object(a.a)({ externalClasses: ["custom-class"] })],
          props: {
            size: String,
            mark: Boolean,
            color: String,
            plain: Boolean,
            round: Boolean,
            textColor: String,
            type: { type: String, default: "default" },
            closeable: Boolean,
            hairline: Boolean,
          },
          data() {
            return { tagStyle: this._getTagStyle() };
          },
          created() {
            ["color", "plain", "textColor"].forEach((t) => {
              this.$watch(t, () => {
                this.tagStyle = this._getTagStyle();
              });
            });
          },
          methods: {
            _getTagStyle() {
              var { color: t, plain: e, textColor: o } = this,
                a = "";
              return (
                t && !e && (a += "background-color: " + t + ";"),
                (o || (t && e)) && (a += "color: " + (o || t) + ";"),
                a
              );
            },
            onClose() {
              this.$emit("close");
            },
          },
        },
        l = o("9ZMt");
      e.default = l.default.component(r);
    },
  })
);
