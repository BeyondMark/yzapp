"use strict";
var r = require("~/r");
r(
  "kOGz",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    kOGz: function (e, t, r) {
      r.r(t);
      var o = r("kZMD"),
        l = r("m6kV"),
        s = Object(l.a)("t-number-keyboard"),
        n = {
          name: "t-number-keyboard",
          mixins: [o.a],
          props: {
            show: Boolean,
            title: String,
            zIndex: { type: [Number, String], default: 100 },
            teleport: [String, Object],
            randomKeyOrder: Boolean,
            closeButtonText: String,
            deleteButtonText: null,
            closeButtonLoading: Boolean,
            overlay: { type: Boolean, default: !0 },
            theme: { type: String, default: "default" },
            value: { type: String, default: "" },
            closeButtonStyle: { type: String, default: "" },
            extraKey: { type: [String, Array], default: "" },
            maxlength: { type: [Number, String], default: Number.MAX_VALUE },
            transition: { type: Boolean, default: !0 },
            showDeleteKey: { type: Boolean, default: !0 },
            safeAreaInsetBottom: { type: Boolean, default: !0 },
            blurOnClose: { type: Boolean, default: !0 },
          },
          computed: {
            classes() {
              return { key: s("key", { wider: this.wider }) };
            },
            showClose() {
              return this.closeButtonText && "default" === this.theme;
            },
            keys() {
              var e,
                t,
                {
                  randomKeyOrder: r,
                  extraKey: o,
                  showDeleteKey: l,
                  deleteButtonText: s,
                  theme: n,
                } = this,
                a = () => {
                  for (var e = [], t = 1; t <= 9; t++) e.push({ text: t });
                  return r && e.sort(() => (Math.random() > 0.5 ? 1 : -1)), e;
                };
              return "custom" === n
                ? ((e = a()),
                  1 === (t = Array.isArray(o) ? o : [o]).length
                    ? e.push(
                        { text: 0, wider: !0 },
                        { text: t[0], type: "extra" }
                      )
                    : 2 === t.length &&
                      e.push(
                        { text: t[0], type: "extra" },
                        { text: 0 },
                        { text: t[1], type: "extra" }
                      ),
                  e)
                : [
                    ...a(),
                    { text: o, type: "extra" },
                    { text: 0 },
                    { text: l ? s : "", type: l ? "delete" : "" },
                  ];
            },
          },
          watch: {
            show(e) {
              this.transition || this.$emit(e ? "show" : "hide");
            },
          },
          methods: {
            onBlur() {
              this.show && this.$emit("blur");
            },
            onClose() {
              this.$emit("close"), this.blurOnClose && this.onBlur();
            },
            onPress(e) {
              var { text: t, type: r } = e;
              if ("" !== t) {
                var { value: o } = this;
                "delete" === r
                  ? (this.$emit("delete"),
                    this.$emit("change", o.slice(0, o.length - 1)))
                  : "close" === r
                  ? this.onClose()
                  : o.length < this.maxlength &&
                    (this.$emit("input", t), this.$emit("change", o + t));
              } else "extra" === r && this.onBlur();
            },
          },
          ud: !0,
        },
        a = r("9ZMt");
      t.default = a.default.component(n);
    },
  })
);
