"use strict";
var r = require("~/r");
r(
  "5rsk",
  Object.assign({}, require("~/v.js").modules, {
    "5rsk": function (t, e, n) {
      n.r(e);
      var i = n("9ZMt"),
        s = n("Fcif"),
        o = n("m6kV"),
        a = n("e8xm"),
        r = Object(o.a)("vt-toast"),
        c = {
          show: { type: Boolean, default: !1 },
          mask: Boolean,
          message: String,
          forbidClick: Boolean,
          zIndex: { type: Number, default: 1e3 },
          type: { type: String, default: "text" },
          loadingType: { type: String, default: "circular" },
          position: { type: String, default: "middle" },
          isPageDefault: Boolean,
        };
      i.default.component({
        name: "t-toast",
        props: c,
        data: function () {
          return Object(s.a)({ showToast: !1 }, Object(a.d)(this));
        },
        logicData: function () {
          return {
            transitionStyle:
              "\n        width: fit-content;\n        position: fixed;\n        top: 50%;\n        transform: translateY(-50%);\n        left: 0;\n        right: 0;\n        margin: auto;\n        max-width: 70%;\n        display: flex;\n        justify-content: center;\n      ",
          };
        },
        computed: {
          classes: function () {
            return {
              root: r([
                this.innerPosition,
                "text" === this.innerType ? "text" : "icon",
              ]),
            };
          },
          styles: function () {
            return {
              transition:
                "z-index: " + this.innerZIndex + "; " + this.transitionStyle,
              overlay: this.innerMask ? "" : "background-color: transparent",
            };
          },
        },
        watch: Object(s.a)(
          {
            show: function (t) {
              this.showToast = t;
            },
          },
          Object(a.f)(c)
        ),
        created: function () {
          (this.showToast = this.show),
            Object(a.c)(this),
            this.isPageDefault && Object(a.g)(this);
        },
        destroyed: function () {
          Object(a.h)(this), this.isPageDefault && Object(a.g)(null);
        },
        methods: {
          setDataWithProps: function (t) {
            var e = this;
            Object.assign(this, Object(a.e)(this)),
              setTimeout(function () {
                Object.assign(e, Object(a.a)(t)), (e.showToast = t.show);
              });
          },
        },
      });
    },
  })
);
