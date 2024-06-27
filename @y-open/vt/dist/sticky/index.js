"use strict";
var r = require("~/r");
r(
  "q6rn",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    q6rn: function (t, e, i) {
      i.r(e);
      var s = i("pOq+"),
        h = i("BZkp"),
        r = {
          name: "t-sticky",
          props: {
            zIndex: { type: Number, default: 99 },
            offsetTop: { type: Number, default: 0 },
            disabled: { type: Boolean, default: !0 },
          },
          data: () => ({ fixed: !1 }),
          logicData: () => ({ stickyHeight: 0 }),
          computed: {
            containerStyle() {
              return Object(s.a)({
                height: this.fixed ? Object(h.b)(this.stickyHeight) : "",
                "z-index": this.zIndex,
              });
            },
            fixedStyle() {
              return Object(s.a)({
                position: "fixed",
                top: this.offsetTop + "px",
                left: 0,
                right: 0,
              });
            },
          },
          mounted() {
            this.disabled ||
              this.$nextTick(() => {
                this.getStickyHeight(), this.setFixed();
              });
          },
          methods: {
            getStickyHeight() {
              Object(h.f)(this, ".t-sticky").then((t) => {
                (this.stickyHeight = t.height), this.listenScroll();
              });
            },
            listenScroll() {
              var t = this.createSelectorQuery().select(".t-sticky");
              this.createIntersectionObserver(t)
                .relativeToViewport({
                  top: 0 - this.offsetTop - this.stickyHeight,
                })
                .observe(".t-sticky", () => {
                  this.setFixed();
                });
            },
            setFixed() {
              Object(h.f)(this, ".t-sticky").then((t) => {
                (t.top <= this.offsetTop ||
                  (t.top > this.offsetTop && this.fixed)) &&
                  this.changeFixed();
              });
            },
            changeFixed() {
              this.fixed = !this.fixed;
            },
          },
          ud: !0,
        },
        o = i("9ZMt");
      e.default = o.default.component(r);
    },
  })
);
