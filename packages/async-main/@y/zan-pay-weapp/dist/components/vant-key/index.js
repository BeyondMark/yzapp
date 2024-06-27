"use strict";
var r = require("~/r");
r(
  "HzRP",
  Object.assign({}, require("../../../../../c.js").modules, {
    HzRP: function (t, e, a) {
      a.r(e);
      var s = a("6ZX2");
      Object(s.a)({
        props: {
          type: String,
          text: [Number, String],
          theme: {
            type: Array,
            default: function () {
              return [];
            },
          },
        },
        data: {
          active: !1,
          direction: "",
          deltaX: 0,
          deltaY: 0,
          offsetX: 0,
          offsetY: 0,
          startX: 0,
          startY: 0,
        },
        computed: {
          className: function () {
            var t = this.data.theme.slice(0);
            return (
              this.data.active && t.push("active"),
              this.data.type && t.push(this.data.type),
              t
                .map(function (t) {
                  return "van-key--" + t;
                })
                .join(" ")
            );
          },
        },
        methods: {
          onTouchStart: function (t) {
            this.touchStart(t), this.set({ active: !0 });
          },
          onTouchMove: function (t) {
            this.touchMove(t), this.data.direction && this.set({ active: !1 });
          },
          onTouchEnd: function () {
            this.data.active &&
              (this.set({ active: !1 }),
              this.$emit("press", {
                text: this.data.text,
                type: this.data.type,
              }));
          },
          touchStart: function (t) {
            this.resetTouchStatus(),
              this.set({
                startX: t.touches[0].clientX,
                startY: t.touches[0].clientY,
              });
          },
          touchMove: function (t) {
            var e,
              a,
              s = t.touches[0];
            this.set({
              deltaX: s.clientX - this.data.startX,
              deltaY: s.clientY - this.data.startY,
              offsetX: Math.abs(this.deltaX),
              offsetY: Math.abs(this.deltaY),
              direction:
                this.data.direction ||
                ((e = this.data.offsetX),
                (a = this.data.offsetY),
                e > a && e > 10
                  ? "horizontal"
                  : a > e && a > 10
                  ? "vertical"
                  : ""),
            });
          },
          resetTouchStatus: function () {
            this.set({
              direction: "",
              deltaX: 0,
              deltaY: 0,
              offsetX: 0,
              offsetY: 0,
            });
          },
        },
      });
    },
  })
);
