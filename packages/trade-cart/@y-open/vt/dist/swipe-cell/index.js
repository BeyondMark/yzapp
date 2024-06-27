"use strict";
var r = require("~/r");
r(
  "fh2K",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    fh2K: function (t, e, i) {
      i.r(e);
      var s,
        o = i("Zqpg"),
        h = i("BZkp"),
        a = i("kZMD"),
        r = [],
        n = {
          options: { multipleSlots: !0 },
          mixins: [a.a, Object(o.a)({ externalClasses: ["right-class"] })],
          props: {
            disabled: Boolean,
            leftWidth: { type: Number, default: 0 },
            rightWidth: { type: Number, default: 0 },
            asyncClose: Boolean,
            name: { type: [Number, String], default: "" },
          },
          data: () => ({ catchMove: !1, wrapperStyle: "" }),
          watch: {
            leftWidth(t) {
              this.offset > 0 && this.swipeMove(t);
            },
            rightWidth(t) {
              this.offset < 0 && this.swipeMove(-t);
            },
          },
          created() {
            (this.offset = 0), r.push(this);
          },
          destroyed() {
            r = r.filter((t) => t !== this);
          },
          methods: {
            open(t) {
              var { leftWidth: e, rightWidth: i, name: s } = this,
                o = "left" === t ? e : -i;
              this.swipeMove(o), this.$emit("open", { position: t, name: s });
            },
            close() {
              this.swipeMove(0);
            },
            swipeMove(t) {
              void 0 === t && (t = 0),
                (this.offset = Object(h.j)(
                  t,
                  -this.rightWidth,
                  this.leftWidth
                ));
              var e = "translate3d(" + this.offset + "px, 0, 0)",
                i = this.dragging
                  ? "none"
                  : "transform .6s cubic-bezier(0.18, 0.89, 0.32, 1)";
              this.wrapperStyle =
                "\n        -webkit-transform: " +
                e +
                ";\n        -webkit-transition: " +
                i +
                ";\n        transform: " +
                e +
                ";\n        transition: " +
                i +
                ";\n      ";
            },
            swipeLeaveTransition() {
              var { leftWidth: t, rightWidth: e } = this,
                { offset: i } = this;
              e > 0 && -i > 0.3 * e
                ? this.open("right")
                : t > 0 && i > 0.3 * t
                ? this.open("left")
                : this.swipeMove(0),
                (this.catchMove = !1);
            },
            startDrag(t) {
              this.disabled ||
                ((s = this),
                (this.startOffset = this.offset),
                this.touchStart(t));
            },
            noop() {},
            onDrag(t) {
              s &&
                !s.disabled &&
                (s.touchMove(t),
                "horizontal" === s.direction &&
                  ((s.dragging = !0),
                  (s.catchMove = !0),
                  r.filter((t) => t !== s).forEach((t) => t.close()),
                  s.swipeMove(s.startOffset + s.deltaX)));
            },
            endDrag() {
              this.disabled ||
                ((this.dragging = !1), this.swipeLeaveTransition());
            },
            onClick(t) {
              var { key: e = "outside" } = t.currentTarget.dataset;
              this.$emit("click", e, { bubbles: !0, composed: !0 }),
                this.offset &&
                  (this.asyncClose
                    ? this.$emit("close", {
                        position: e,
                        instance: {
                          open: this.open.bind(this),
                          close: this.close.bind(this),
                        },
                        name: this.name,
                      })
                    : this.swipeMove(0));
            },
          },
          ud: !0,
        },
        d = i("9ZMt");
      e.default = d.default.component(n);
    },
  })
);
