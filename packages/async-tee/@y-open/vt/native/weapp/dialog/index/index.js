"use strict";
var r = require("~/r");
r(
  "jlRt",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    jlRt: function (n, t, i) {
      i.r(t);
      var e = i("9ZMt"),
        o = i("Fcif"),
        s = i("m6kV"),
        c = i("BZkp"),
        r = i("5+FR"),
        a = i("e8xm"),
        l = i("4XQZ"),
        h = Object(s.a)("t-dialog");
      e.default.component({
        name: "t-dialog",
        props: l.a,
        data: function () {
          return Object(o.a)({}, Object(a.d)(this), {
            loading: { confirm: !1, cancel: !1 },
          });
        },
        computed: {
          classes: function () {
            return {
              header: h("header", {
                isolated: !(this.innerMessage || this.innerUseSlot),
              }),
              message: h("message", [
                this.innerMessageAlign,
                { hasTitle: this.innerTitle },
              ]),
            };
          },
          styles: function () {
            return (
              "45vh",
              {
                root:
                  "\n          top: 45vh;\n          overflow: hidden;\n          font-size: 16px;\n          border-radius: 16px;\n          border-radius: var(--dialog-border-radius, 16px);\n          background-color: #fff;\n          width: " +
                  Object(c.b)(this.innerWidth) +
                  ";\n          " +
                  this.innerCustomStyle +
                  "\n        ",
                cancelButton: "color: " + this.innerCancelButtonColor,
                confirmButton: "color: " + this.innerConfirmButtonColor,
              }
            );
          },
        },
        watch: Object(o.a)({}, Object(a.f)(l.a), {
          innerShow: function (n) {
            !n && this.stopLoading();
          },
        }),
        created: function () {
          Object(r.c)(this), this.isPageDefault && Object(r.d)(this);
        },
        destroyed: function () {
          Object(r.e)(this), this.isPageDefault && Object(r.d)(null);
        },
        methods: {
          setDataWithProps: function (n) {
            var t = this;
            Object.assign(this, Object(a.e)(this)),
              setTimeout(function () {
                Object.assign(t, Object(a.a)(n));
              });
          },
          onConfirm: function () {
            this.handleAction("confirm");
          },
          onCancel: function () {
            this.handleAction("cancel");
          },
          onClickOverlay: function () {
            this.onClose("overlay");
          },
          handleAction: function (n) {
            this.innerAsyncClose &&
              (this.loading = Object(o.a)({}, this.loading, { [n]: !0 })),
              this.onClose(n);
          },
          close: function () {
            this.innerShow = !1;
          },
          stopLoading: function () {
            this.loading = { confirm: !1, cancel: !1 };
          },
          onClose: function (n) {
            this.innerAsyncClose || this.close(),
              this.$emit("close", n),
              this.$emit(n, { dialog: Object(c.i)(this, ["stopLoading"]) });
            var t = "confirm" === n ? this.innerOnConfirm : this.innerOnCancel;
            t && t(this);
          },
        },
      });
    },
  })
);
