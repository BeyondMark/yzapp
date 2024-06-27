"use strict";
var r = require("~/r");
r(
  "nW4f",
  Object.assign({}, require("~/v.js").modules, {
    nW4f: function (t, e, s) {
      s.r(e);
      var i = s("Zqpg"),
        n = s("m6kV"),
        r = s("BZkp"),
        o = s("1pB4"),
        h = Object(n.a)("t-picker-column"),
        a = {
          name: "t-picker-column",
          mixins: [
            Object(i.a)({ externalClasses: ["custom-class", "active-class"] }),
          ],
          props: {
            valueKey: String,
            className: String,
            itemHeight: Number,
            visibleItemCount: Number,
            initialOptions: { type: Array, default: () => [] },
            defaultIndex: { type: Number, default: 0 },
          },
          logicData: () => ({
            startY: 0,
            offset: 0,
            duration: 0,
            startOffset: 0,
            currentIndex: 0,
            options: [],
          }),
          computed: {
            styles() {
              var t =
                this.offset +
                (this.itemHeight * (this.visibleItemCount - 1)) / 2;
              return {
                root:
                  "\n        min-height: 264px;\n        transition: transform " +
                  this.duration +
                  "ms;\n        line-height: " +
                  this.itemHeight +
                  "px;\n        transform: translate3d(0, " +
                  t +
                  "px, 0)\n        ",
              };
            },
            renderOptions() {
              var {
                valueKey: t,
                options: e = [],
                currentIndex: s,
                activeClass: i,
              } = this;
              return e.map((e, n) => ({
                text: Object(o.f)(e) && t in e ? e[t] : e,
                class:
                  h("item", { disabled: e.disabled, selected: n === s }) +
                  " " +
                  (n === s ? i : ""),
              }));
            },
            publicInstance() {
              return Object(r.i)(this, [
                "$id",
                "getIndex",
                "setIndex",
                "getValue",
                "setValue",
                "getOptions",
                "setOptions",
              ]);
            },
          },
          watch: {
            defaultIndex(t) {
              this.setIndex(t);
            },
          },
          mounted() {
            var { defaultIndex: t, initialOptions: e } = this;
            (this.currentIndex = t),
              (this.options = e),
              this.$nextTick(() => {
                this.setIndex(t), this.$emit("link", this.publicInstance);
              });
          },
          destroyed() {
            this.$emit("unlink", this.publicInstance);
          },
          methods: {
            getCount() {
              return this.options.length;
            },
            onTouchStart(t) {
              (this.startY = t.touches[0].clientY),
                (this.startOffset = this.offset),
                (this.duration = 0);
            },
            onTouchMove(t) {
              var e = t.touches[0].clientY - this.startY;
              this.offset = Object(r.j)(
                this.startOffset + e,
                -this.getCount() * this.itemHeight,
                this.itemHeight
              );
            },
            onTouchEnd() {
              if (this.offset !== this.startOffset) {
                this.duration = 200;
                var t = Object(r.j)(
                  Math.round(-this.offset / this.itemHeight),
                  0,
                  this.getCount() - 1
                );
                this.setIndex(t, !0);
              }
            },
            onClickItem(t) {
              this.setIndex(t, !0);
            },
            adjustIndex(t) {
              for (
                var e = this.getCount(), s = (t = Object(r.j)(t, 0, e));
                s < e;
                s++
              )
                if (!this.isDisabled(this.options[s])) return s;
              for (var i = t - 1; i >= 0; i--)
                if (!this.isDisabled(this.options[i])) return i;
            },
            isDisabled: (t) => Object(o.f)(t) && t.disabled,
            getIndex() {
              return this.currentIndex;
            },
            setIndex(t, e) {
              var s = -(t = this.adjustIndex(t) || 0) * this.itemHeight;
              return t !== this.currentIndex
                ? ((this.offset = s),
                  (this.currentIndex = t),
                  this.$nextTick(() => {
                    e && this.$emit("change", t);
                  }),
                  Promise.resolve())
                : ((this.offset = s), Promise.resolve());
            },
            getOptions() {
              return this.options;
            },
            setOptions(t) {
              this.options = t;
            },
            setValue(t) {
              for (var { options: e } = this, s = 0; s < e.length; s++)
                if (e[s] === t) return this.setIndex(s);
              return Promise.resolve();
            },
            getValue() {
              return this.options[this.currentIndex];
            },
          },
          ud: !0,
        },
        u = s("9ZMt");
      e.default = u.default.component(a);
    },
  })
);
