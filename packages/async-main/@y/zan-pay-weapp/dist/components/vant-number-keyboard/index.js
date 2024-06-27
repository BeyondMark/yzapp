"use strict";
var r = require("~/r");
r(
  "oM3q",
  Object.assign({}, require("../../../../../c.js").modules, {
    oM3q: function (e, t, a) {
      a.r(t);
      var i = a("6ZX2");
      Object(i.a)({
        props: {
          show: { type: Boolean, value: !0 },
          title: String,
          closeButtonText: String,
          deleteButtonText: String,
          safeAreaInsetBottom: Boolean,
          theme: { type: String, value: "default" },
          value: { type: String, value: "" },
          extraKey: { type: String, value: "" },
          maxlength: { type: [Number, String], value: Number.MAX_VALUE },
          zIndex: { type: Number, value: 100 },
          transition: { type: Boolean, value: !0 },
          showDeleteKey: { type: Boolean, value: !0 },
          hideOnClickOutside: { type: Boolean, value: !0 },
        },
        computed: {
          keys: function () {
            for (var e = [], t = 1; t <= 9; t++) e.push({ text: t });
            switch (this.data.theme) {
              case "default":
                e.push(
                  { text: this.data.extraKey, theme: ["gray"] },
                  { text: 0 },
                  {
                    text: this.data.deleteButtonText || "删除",
                    theme: ["gray"],
                    type: "delete",
                  }
                );
                break;
              case "custom":
                e.push({ text: 0, theme: ["middle"] }, { text: this.extraKey });
            }
            return e;
          },
        },
        methods: {
          onBlur: function () {
            this.$emit("blur");
          },
          onClose: function () {
            this.$emit("close"), this.onBlur();
          },
          onAnimationEnd: function () {
            this.$emit(this.show ? "show" : "hide");
          },
          onPress: function (e) {
            var t = e.detail,
              a = t.text,
              i = t.type;
            if ("" !== a) {
              var o = this.data,
                n = o.value,
                s = o.maxlength;
              "delete" === i
                ? (this.$emit("delete"),
                  this.$emit("update:value", n.slice(0, n.length - 1)))
                : "close" === i
                ? this.onClose()
                : n.length < s &&
                  (this.$emit("input", a), this.$emit("update:value", n + a));
            }
          },
          stopPropagation: function (e) {
            e.stopPropagation && e.stopPropagation();
          },
        },
      });
    },
  })
);
