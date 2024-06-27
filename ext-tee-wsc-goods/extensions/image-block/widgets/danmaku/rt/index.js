"use strict";
var r = require("~/r");
r(
  "9a+E",
  Object.assign({}, require("~/v.js").modules, {
    "9a+E": function (e, t, a) {
      a.r(t);
      var r = {
          props: {
            visible: { type: Boolean, default: !1 },
            offsetTop: { type: Number, default: 0 },
            minCount: { type: Number, default: 6 },
            opt: { type: Object, default: () => ({}) },
            source: { type: Array, default: () => [] },
          },
          created() {
            this.ctx.process.define(
              "handleDanmakuRefresh",
              this.refresh.bind(this)
            );
          },
          methods: {
            initDanmakuSource(e) {
              this.$emit("source", { source: e });
            },
            onDanmakuInit() {
              this.$emit("init");
            },
            onDanmakuPlayChange(e) {
              this.$emit("play-change", { playing: e });
            },
            refresh() {
              this.$refs.danmaku.refresh();
            },
          },
          ud: !0,
        },
        s = a("9ZMt");
      t.default = s.default.component(r);
    },
  })
);
