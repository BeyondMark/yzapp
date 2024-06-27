"use strict";
var r = require("~/r");
r(
  "vJTJ",
  Object.assign({}, require("~/v.js").modules, {
    vJTJ: function (t, e, i) {
      i.r(e);
      var n = i("9ZMt"),
        s = i("BZkp"),
        o = i("Zqpg");
      n.default.component({
        name: "t-icon",
        mixins: [Object(o.a)({ externalClasses: ["custom-class"] })],
        props: {
          dot: Boolean,
          info: String,
          size: String,
          color: String,
          customStyle: String,
          classPrefix: { type: String, default: "t-icon" },
          name: { type: String },
          lazy: Boolean,
        },
        data: function () {
          return {
            isImage: this._getIsImage(),
            style: this._getStyle(),
            prefix: "",
          };
        },
        created: function () {
          var t = this;
          this.$watch("name", function () {
            t.isImage = t._getIsImage();
          }),
            ["color", "size", "customStyle"].forEach(function (e) {
              t.$watch(e, function () {
                t.style = t._getStyle();
              });
            }),
            setTimeout(function () {
              t.prefix = t.classPrefix || "t-icon";
            }, 250);
        },
        methods: {
          _getStyle: function () {
            return (
              "color: " +
              this.color +
              ";\n          font-size: " +
              Object(s.b)(this.size) +
              ";\n          " +
              this.customStyle
            );
          },
          _getIsImage: function () {
            return !!this.name && -1 !== this.name.indexOf("/");
          },
          onClick: function (t) {
            this.$emit("click", t, { bubbles: !0, composed: !0 });
          },
        },
      });
    },
  })
);
