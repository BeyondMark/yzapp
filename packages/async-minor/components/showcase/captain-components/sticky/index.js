var r = require("~/r");
r("psjG", {
  psjG: function (t, e) {
    Component({
      externalClasses: ["sticky-wrap-class"],
      properties: {
        offsetTop: { type: Number, value: 0, observer: "setWrapStyle" },
        zIndex: { type: Number, value: 1 },
        stickyHeight: {
          type: Number,
          value: 10,
          observer(t) {
            this.setData({ indexStyle: "height: " + t + "px" });
          },
        },
      },
      attached() {
        var { stickyHeight: t } = this.data;
        this.setData({ indexStyle: "height: " + t + "px" });
      },
      detached() {
        this.createIntersectionObserver().disconnect();
      },
      ready() {
        this.observerContentScroll();
      },
      data: { indexStyle: "", wrapStyle: "", position: "" },
      methods: {
        observerContentScroll() {
          this.createIntersectionObserver().disconnect(),
            this.createIntersectionObserver({ thresholds: [1] })
              .relativeToViewport()
              .observe(".showcase-sticky-box", (t) => {
                var { intersectionRatio: e } = t,
                  s = 1 !== e ? "top" : "";
                this.triggerEvent("scroll", { isFixed: "top" === s }),
                  this.setPosition(s);
              });
        },
        setPosition(t) {
          t !== this.data.position &&
            this.setData({ position: t }, () => {
              this.setWrapStyle();
            });
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
          i !== this.data.wrapStyle && this.setData({ wrapStyle: i });
        },
      },
    });
  },
});
