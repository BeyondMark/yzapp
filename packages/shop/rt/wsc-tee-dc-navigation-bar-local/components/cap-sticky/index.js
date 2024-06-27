"use strict";
var r = require("~/r");
r(
  "uLs1",
  Object.assign({}, require("~/v.js").modules, {
    uLs1: function (t, e, s) {
      s.r(e);
      var i = {
          externalClasses: ["sticky-wrap-class"],
          data: () => ({ indexStyle: "", wrapStyle: "", position: "" }),
          props: {
            offsetTop: { type: Number, default: 0 },
            zIndex: { type: Number, default: 1 },
            stickyHeight: { type: Number, default: 10 },
          },
          created() {
            this.indexStyle = "height: " + this.stickyHeight + "px";
          },
          destroyed() {
            this.createIntersectionObserver().disconnect();
          },
          mounted() {
            this.observerContentScroll();
          },
          methods: {
            observerContentScroll() {
              this.createIntersectionObserver().disconnect(),
                this.createIntersectionObserver({ thresholds: [1] })
                  .relativeToViewport()
                  .observe(".showcase-sticky-box", (t) => {
                    var { intersectionRatio: e } = t,
                      s = 1 !== e ? "top" : "";
                    this.$emit("scroll", { isFixed: "top" === s }),
                      this.setPosition(s);
                  });
            },
            setPosition(t) {
              t !== this.data.position &&
                ((this.position = t),
                this.$nextTick(() => {
                  this.setWrapStyle();
                }));
            },
            setWrapStyle() {
              var { offsetTop: t, position: e, zIndex: s } = this.data,
                i = "";
              switch (e) {
                case "top":
                  i =
                    "\n            top: " +
                    t +
                    "px;\n            position: fixed;\n            z-index: " +
                    s +
                    ";\n          ";
                  break;
                case "bottom":
                  i =
                    "\n            top: auto;\n            bottom: 0;\n          ";
                  break;
                default:
                  i = "";
              }
              i !== this.data.wrapStyle && (this.wrapStyle = i);
            },
          },
          ud: !0,
        },
        o = s("9ZMt");
      e.default = o.default.component(i);
    },
  })
);
