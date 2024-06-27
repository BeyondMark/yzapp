"use strict";
var r = require("~/r");
r(
  "mmCE",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    mmCE: function (t, e, i) {
      i.r(e);
      var s = i("9ZMt"),
        r = i("Vnr7"),
        o = "up",
        h = "swipe",
        a = 0,
        n = {
          props: {
            error: Boolean,
            loading: Boolean,
            finished: Boolean,
            relativeTo: { type: String, default: "viewport" },
            offset: { type: Number, default: 100 },
            loadingText: { type: String, default: "加载中..." },
            errorText: { type: String, default: "加载失败，请点击重试" },
            finishedText: { type: String, default: "没有更多了" },
            immediateCheck: { type: Boolean, default: !0 },
            direction: { type: String, default: "down" },
            hookLineStyle: { type: String, default: "" },
            reInitObserver: { type: Boolean, default: !1 },
          },
          data() {
            var t =
              String.fromCharCode(65 + Math.floor(26 * Math.random())) +
              Date.now();
            return { swipe: !1, hookId: t, selector: "#" + t };
          },
          logicData() {
            return {
              isInitObserver: !1,
              swipeLoadTimes: 0,
              findDirection: this.direction,
            };
          },
          watch: {
            loading() {
              this.isInitObserver ||
                this.immediateCheck ||
                this.swipe ||
                this.initObserver();
            },
            reInitObserver: {
              handler(t) {
                t &&
                  (this.isInitObserver &&
                    (this.removeObserver(), this.initObserver()),
                  this.$emit("ob-reloaded"));
              },
              immediate: !0,
            },
          },
          mounted() {
            (this.swipe = this.findDirection === h),
              this.immediateCheck &&
                !this.swipe &&
                setTimeout(() => {
                  this.initObserver();
                }, 100);
          },
          destroyed() {
            this.removeObserver();
          },
          methods: {
            onTouchStart(t) {
              if (this.swipe) {
                var { loading: e, finished: i } = this;
                e || i
                  ? (this.isTouchStart = !1)
                  : ((this.isTouchStart = !0), this.touchStart(t));
              }
            },
            onTouchMove(t) {
              this.swipe && this.isTouchStart && this.touchMove(t);
            },
            onTouchEnd() {
              if (this.swipe) {
                if (this.isTouchStart) {
                  this.deltaX > 0 && (this.triggerMove = !1),
                    this.findDirection === h &&
                      -this.deltaX >= 60 &&
                      ((this.swipeLoadTimes = ++this.swipeLoadTimes),
                      this.$emit("load", this.swipeLoadTimes));
                }
                this.isTouchStart = !1;
              }
            },
            touchStart(t) {
              (this.findDirection = ""),
                (this.deltaX = 0),
                (this.deltaY = 0),
                (this.offsetX = 0),
                (this.offsetY = 0),
                (this.startX = t.touches[0].clientX),
                (this.startY = t.touches[0].clientY);
            },
            touchMove(t) {
              var e = t.touches[0];
              (this.deltaX = e.clientX - this.startX),
                (this.deltaY = e.clientY - this.startY),
                (this.offsetX = Math.abs(this.deltaX)),
                (this.offsetY = Math.abs(this.deltaY)),
                (this.findDirection =
                  this.offsetX > this.offsetY
                    ? h
                    : this.offsetX < this.offsetY
                    ? o
                    : "");
            },
            initObserver() {
              var t,
                { relativeTo: e, offset: i } = this;
              (t = { bottom: 0 }),
                this.ob ||
                  (this.createIntersectionObserver
                    ? (this.ob = this.createIntersectionObserver())
                    : (this.ob = Object(r.a)(this))),
                "viewport" === e
                  ? this.ob.relativeToViewport(t)
                  : this.ob.relativeTo(e, t),
                this.ob.observe(this.selector, (t) => {
                  var { intersectionRatio: e } = t,
                    { loading: i, finished: s } = this;
                  !i && !s && e > 0 && this.check();
                }),
                (this.isInitObserver = !0);
            },
            removeObserver() {
              this.ob && (this.ob.disconnect(), (this.ob = null));
            },
            check() {
              var { loading: t, finished: e, error: i, offset: r } = this;
              t ||
                e ||
                i ||
                this.createSelectorQuery()
                  .select(this.selector)
                  .boundingClientRect()
                  .exec((t) => {
                    if (t && t[0]) {
                      var { bottom: e } = t[0];
                      e >= 0 &&
                        e -
                          (a ||
                            (a =
                              s.default.$native.getSystemInfoSync()
                                .screenHeight),
                          a) <=
                          r &&
                        this.$emit("load");
                    }
                  });
            },
            retry() {
              this.$emit("update-error", !1), this.$emit("load");
            },
          },
          ud: !0,
        };
      e.default = s.default.component(n);
    },
  })
);
