"use strict";
var r = require("~/r");
r(
  "iE0e",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      iE0e: function (t, i, e) {
        e.r(i);
        var s = e("Fcif"),
          h = e("BZkp"),
          a = e("wSeO"),
          o = e("TZRF"),
          r = e("Zqpg"),
          c = {
            options: { virtualHost: !0 },
            mixins: [
              o.a,
              Object(r.a)({
                externalClasses: ["indicators-class", "indicator-class"],
                relation: Object(a.a)("swipe"),
              }),
            ],
            props: {
              vertical: Boolean,
              indicatorColor: String,
              customStyle: { type: Object, default: () => ({}) },
              autoplay: [Number, String],
              loop: { type: Boolean, default: !0 },
              height: [Number, String],
              width: [Number, String],
              duration: { type: [Number, String], default: 500 },
              touchable: { type: Boolean, default: !0 },
              initialSwipe: { type: [Number, String], default: 0 },
              showIndicators: { type: Boolean, default: !0 },
              isRepeat: { type: Boolean, default: !1 },
              customOffset: { type: Number, default: 0 },
            },
            data: () => ({ count: 0 }),
            logicData: () => ({
              rect: null,
              offset: 0,
              active: 0,
              deltaX: 0,
              deltaY: 0,
              swiping: !1,
              computedWidth: 0,
              computedHeight: 0,
            }),
            computed: {
              classes() {
                return {
                  indicators:
                    (this.vertical ? "vertical" : "") +
                    " " +
                    this.indicatorsClass,
                };
              },
              size() {
                return this[this.vertical ? "computedHeight" : "computedWidth"];
              },
              minOffset() {
                if (this.rect)
                  return (
                    (this.vertical ? this.rect.height : this.rect.width) -
                    this.size * this.count -
                    this.customOffset
                  );
              },
              maxCount() {
                return Math.ceil(Math.abs(this.minOffset) / this.size);
              },
              delta() {
                return this.vertical ? this.deltaY : this.deltaX;
              },
              trackSize() {
                return this.count * this.size;
              },
              swipeStyle() {
                var t = {
                  transitionDuration: (this.swiping ? 0 : this.duration) + "ms",
                  transform:
                    "translate" +
                    (this.vertical ? "Y" : "X") +
                    "(" +
                    this.offset +
                    "px)",
                };
                if (this.size) {
                  var i = this.vertical ? "height" : "width",
                    e = this.vertical ? "width" : "height";
                  (t[i] = this.trackSize + "px"),
                    (t[e] = this[e] ? this[e] + "px" : "");
                }
                return Object(h.k)(t);
              },
              isCorrectDirection() {
                var t = this.vertical ? "vertical" : "horizontal";
                return this.direction === t;
              },
              indicatorStyle() {
                return Object(h.k)({
                  backgroundColor: this.indicatorColor || "#fff",
                });
              },
              activeIndicator() {
                return this.active <= -1
                  ? this.count - 1
                  : this.active >= this.count
                  ? 0
                  : this.active;
              },
              rootStyle() {
                var t = { height: this.height ? this.height : "auto" };
                return Object(h.k)(Object(s.a)({}, t, this.customStyle || {}));
              },
            },
            watch: {
              initialSwipe() {
                this.initialize();
              },
            },
            updated() {
              this.count !== this.getCount() && this.resize();
            },
            mounted() {
              (this.hasMounted = !0), this.initialize();
            },
            destroyed() {
              this.timer && clearTimeout(this.timer);
            },
            methods: {
              initialize() {
                (this.active = +this.initialSwipe || 0),
                  setTimeout(() => {
                    this.resize();
                  });
              },
              getCount() {
                var t = this.children.length;
                return this.isRepeat ? t / 2 : t;
              },
              getBoundRect() {
                return this.isRepeat
                  ? Object(h.f)(this.children[0], ".t-swiper-item")
                  : Object(h.f)(this, ".t-swipe");
              },
              resize() {
                this.children &&
                  ((this.count = this.getCount()),
                  this.getBoundRect().then((t) => {
                    (this.rect = t),
                      (this.swiping = !0),
                      (this.computedWidth = +this.width || t.width),
                      (this.computedHeight = +this.height || t.height),
                      this.children.forEach((t) => {
                        (t.offset = 0),
                          (t.vertical = this.vertical),
                          !this.isRepeat && (t.size = this.size);
                      }),
                      this.$nextTick(() => {
                        this.autoPlay(),
                          (this.offset = this.getTargetOffset(this.active));
                      });
                  }));
              },
              autoPlay() {
                var { autoplay: t } = this;
                t > 0 &&
                  this.count > 1 &&
                  (this.clear(),
                  (this.timer = setTimeout(() => {
                    this.next(), this.autoPlay();
                  }, t)));
              },
              clear() {
                clearTimeout(this.timer);
              },
              onTouchStart(t) {
                this.touchable &&
                  (this.clear(),
                  (this.touchStartTime = Date.now()),
                  this.touchStart(t),
                  this.correctPosition());
              },
              onTouchMove(t) {
                this.touchable &&
                  this.swiping &&
                  (this.touchMove(t),
                  this.isCorrectDirection && this.move({ offset: this.delta }));
              },
              onTouchEnd() {
                if (this.touchable && this.swiping) {
                  var { size: t, delta: i } = this,
                    e = i / (Date.now() - this.touchStartTime);
                  if (
                    (Math.abs(e) > 0.25 || Math.abs(i) > t / 2) &&
                    this.isCorrectDirection
                  ) {
                    var s = this.vertical ? this.offsetY : this.offsetX,
                      h = 0;
                    (h = this.loop
                      ? s > 0
                        ? i > 0
                          ? -1
                          : 1
                        : 0
                      : -Math[i > 0 ? "ceil" : "floor"](i / t)),
                      this.move({ pace: h, emitChange: !0 });
                  } else i && this.move({ pace: 0 });
                  (this.swiping = !1), this.autoPlay();
                }
              },
              getTargetActive(t) {
                var { active: i, count: e, maxCount: s } = this,
                  a = i;
                return (
                  t &&
                    (a = this.loop
                      ? Object(h.j)(i + t, -1, e)
                      : Object(h.j)(i + t, 0, s)),
                  a
                );
              },
              getTargetOffset(t, i) {
                void 0 === i && (i = 0);
                var e = t * this.size;
                this.loop || (e = Math.min(e, -this.minOffset));
                var s = i - e;
                return this.loop || (s = Object(h.j)(s, this.minOffset, 0)), s;
              },
              move(t) {
                var { pace: i = 0, offset: e = 0, emitChange: s } = t,
                  {
                    loop: h,
                    count: a,
                    active: o,
                    children: r,
                    trackSize: c,
                    minOffset: n,
                  } = this;
                if (!(a <= 1)) {
                  var u = this.getTargetActive(i),
                    l = this.getTargetOffset(u, e);
                  if (h) {
                    if (!this.isRepeat && r[0] && l !== n) {
                      var d = l < n;
                      r[0].offset = d ? c : 0;
                    }
                    if (r[a - 1] && 0 !== l) {
                      var f = l > 0;
                      r[a - 1].offset = f ? -c : 0;
                    }
                  }
                  (this.active = u),
                    (this.offset = l),
                    s && u !== o && this.$emit("change", this.activeIndicator);
                }
              },
              correctPosition() {
                setTimeout(() => {
                  (this.swiping = !0),
                    this.active <= -1 && this.move({ pace: this.count }),
                    this.active >= this.count &&
                      this.move({ pace: -this.count });
                }, this.duration);
              },
              prev() {
                (this.swiping = !1),
                  this.resetTouchStatus(),
                  this.move({ pace: -1, emitChange: !0 }),
                  this.correctPosition();
              },
              next() {
                (this.swiping = !1),
                  this.resetTouchStatus(),
                  this.move({ pace: 1, emitChange: !0 }),
                  this.correctPosition();
              },
              swipeTo(t, i) {
                void 0 === i && (i = {});
                var e,
                  { loop: s, count: h } = this;
                this.correctPosition(),
                  this.resetTouchStatus(),
                  (e = s && t === h ? (0 === this.active ? 0 : t) : t % h),
                  i.immediate,
                  (this.swiping = !1),
                  this.move({ pace: e - this.active, emitChange: !0 });
              },
            },
            ud: !0,
          },
          n = e("9ZMt");
        i.default = n.default.component(c);
      },
    }
  )
);
