"use strict";
var r = require("~/r");
r(
  "2pPT",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "2pPT": function (t, e, r) {
        r.r(e);
        var a = r("Fcif"),
          o = r("SyLL"),
          c = r("1rIA"),
          i = {
            props: {
              open: Boolean,
              canDrag: Boolean,
              dragBar: {
                type: Object,
                default: () => ({
                  controlBar: Object(a.a)({}, c.c),
                  controlBarBlock: Object(a.a)({}, c.c),
                }),
              },
              dragStart: Object,
              display: Object,
            },
            computed: {
              critical() {
                var { controlBar: t, controlBarBlock: e } = this.dragBar,
                  { width: r } = t,
                  { width: a } = e;
                return { minX: 0, maxX: r - a };
              },
            },
            mounted() {},
            methods: {
              handleDragMove(t) {
                if (this.canDrag) {
                  var { pageX: e, pageY: r } =
                    "touchmove" === (t.type || "").toLocaleLowerCase()
                      ? t.touches[0]
                      : t;
                  o.c.drag.move({ x: e, y: r });
                  var { x: a } = this.dragStart,
                    { minX: c, maxX: i } = this.critical,
                    s = e - a,
                    d = s > i ? i : s < c ? c : s;
                  this.$emit("drag-move", d);
                }
              },
              handleDragEnd(t) {
                if (this.canDrag) {
                  var { left: e, top: r } = this.display,
                    a = o.c.drag.end({ left: e, top: r });
                  a &&
                    (o.c.clickOrTouch.startRecordTouchEnd(t),
                    this.$emit("drag-end", { userDataList: a }));
                }
              },
              close() {
                this.$emit("close");
              },
              handleAfaterEnter() {
                setTimeout(() => {
                  this.$emit("after-enter");
                }, 300);
              },
            },
            ud: !0,
          },
          s = r("9ZMt");
        e.default = s.default.component(i);
      },
    }
  )
);
