"use strict";
var r = require("~/r");
r(
  "F2pG",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      F2pG: function (t, r, e) {
        e.r(r);
        var o = e("9ZMt"),
          a = e("AGZf"),
          i = e("E6qs"),
          l = e("SyLL"),
          h = e("1rIA"),
          s = {
            props: {
              status: String,
              scale: Number,
              display: Object,
              moveX: Number,
              behaviorLoading: Boolean,
              behaviorData: Object,
              canDrag: Boolean,
            },
            data: () => ({
              controlBar: { width: 0, left: 0 },
              controlBarBlock: { width: 0, left: 0 },
              controlBarQuried: !1,
              controlBarBlockQuried: !1,
              smallSize: h.f,
            }),
            computed: {
              left() {
                return o.default.style.useTpx(h.b + this.moveX);
              },
              critical() {
                var { width: t } = this.controlBar,
                  { width: r } = this.controlBarBlock;
                return { minX: 0, maxX: t - r };
              },
              blockWidth() {
                return o.default.style.useTpx(this.smallSize.width);
              },
              blockHeight() {
                return o.default.style.useTpx(this.smallSize.height);
              },
              blockTop() {
                var { top: t } = this.display,
                  { top: r } = this.controlBar;
                return o.default.style.useTpx(
                  r - t - (this.behaviorData.cy || 0) * this.scale
                );
              },
              statusText() {
                return h.m[this.status];
              },
              slideIconName() {
                return h.k[this.status];
              },
            },
            methods: {
              queryRect() {
                Object(i.j)(
                  "slide-captcha-control",
                  (t) => {
                    var {
                      left: r,
                      right: e,
                      top: o,
                      bottom: a,
                      width: i,
                      height: l,
                    } = t;
                    (this.controlBar = {
                      left: r,
                      right: e,
                      top: o,
                      bottom: a,
                      width: i,
                      height: l,
                    }),
                      (this.controlBarQuried = !0),
                      this.controlBarBlockQuried &&
                        this.$emit("drag-bar-query", {
                          controlBar: {
                            left: r,
                            right: e,
                            top: o,
                            bottom: a,
                            width: i,
                            height: l,
                          },
                          controlBarBlock: this.controlBarBlock,
                        });
                  },
                  350,
                  this
                ),
                  Object(i.j)(
                    "slide-captcha-control-bar-block",
                    (t) => {
                      var {
                        left: r,
                        right: e,
                        top: o,
                        bottom: a,
                        width: i,
                        height: l,
                      } = t;
                      (this.controlBarBlock = {
                        left: r,
                        right: e,
                        top: o,
                        bottom: a,
                        width: i,
                        height: l,
                      }),
                        (this.controlBarBlockQuried = !0),
                        this.controlBarBlockQuried &&
                          this.$emit("drag-bar-query", {
                            controlBarBlock: {
                              left: r,
                              right: e,
                              top: o,
                              bottom: a,
                              width: i,
                              height: l,
                            },
                            controlBar: this.controlBar,
                          });
                    },
                    350,
                    this
                  );
              },
              handleDragStart(t) {
                if (this.status === h.l.READY) {
                  t.preventDefault && t.preventDefault();
                  var { pageX: r, pageY: e } =
                    "touchstart" === (t.type || "").toLocaleLowerCase()
                      ? t.touches[0]
                      : t;
                  this.$emit("drag-start-query", { x: r, y: e }),
                    l.c.drag.move({ x: r, y: e }),
                    l.c.clickOrTouch.startRecordTouchStart(t);
                }
              },
              onLoad(t) {
                Object(i.g)(t, h.f).then((t) => {
                  this.smallSize = t;
                });
              },
              onError() {
                a.a.fail("图片加载失败，请稍后重试!");
              },
              handleErrorRefresh() {
                -1 !== [h.l.ERROR, h.l.LIMIT].indexOf(this.status) &&
                  this.$emit("refresh-behavior-data");
              },
            },
            ud: !0,
          };
        r.default = o.default.component(s);
      },
    }
  )
);
