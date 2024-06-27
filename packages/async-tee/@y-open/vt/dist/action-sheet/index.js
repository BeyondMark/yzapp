"use strict";
var r = require("~/r");
r(
  "65ox",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "65ox": function (e, t, o) {
        o.r(t);
        var a = o("Fcif"),
          i = o("m6kV"),
          n = o("79as"),
          l = o("icdD"),
          s = o("Zqpg"),
          c = Object(i.a)("t-action-sheet"),
          r = {
            name: "t-action-sheet",
            mixins: [
              n.a,
              l.a,
              Object(s.a)({ externalClasses: ["custom-class"] }),
            ],
            props: {
              show: Boolean,
              title: String,
              cancelText: String,
              description: String,
              closeable: { type: Boolean, default: !0 },
              round: { type: Boolean, default: !0 },
              zIndex: { type: Number, default: 100 },
              customStyle: String,
              actions: { type: Array, default: () => [] },
              overlay: { type: Boolean, default: !0 },
              overlayStyle: String,
              closeOnClickOverlay: { type: Boolean, default: !0 },
              closeOnClickAction: { type: Boolean, default: !0 },
              safeAreaInsetBottom: { type: Boolean, default: !0 },
            },
            computed: {
              formattdCustomStyle() {
                return this.customStyle
                  ? this.customStyle
                  : "max-height: 90%!important; color: #323233;";
              },
              closeIconStyle: () =>
                "\n        position: absolute;\n        top: 0;\n        right: 0;\n        line-height: inherit;\n        padding: 0 12px;\n        font-size: 18px;\n        color: #323233;",
              bthLoadingStyle: () =>
                "\n        display: flex !important;\n        height: 50px;",
              formattedAction() {
                var e = [];
                return (
                  this.actions.forEach((t) => {
                    e.push(
                      Object(a.a)({}, t, {
                        btnClass: c({
                          disabled: t.disabled || t.loading,
                          on: this.checked === this.activeValue,
                        }),
                      })
                    );
                  }),
                  e
                );
              },
            },
            methods: {
              onSelect(e) {
                var { index: t } = e.target.dataset,
                  o = this.actions[t];
                !o ||
                  o.disabled ||
                  o.loading ||
                  (this.$emit("select", o),
                  this.closeOnClickAction && this.onClose());
              },
              onCancel() {
                this.$emit("cancel");
              },
              onClose() {
                this.$emit("close");
              },
              onClickOverlay() {
                this.$emit("click-overlay"), this.onClose();
              },
            },
            ud: !0,
          },
          d = o("9ZMt");
        t.default = d.default.component(r);
      },
    }
  )
);
