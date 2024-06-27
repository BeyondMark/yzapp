"use strict";
var r = require("~/r");
r(
  "XHQJ",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    XHQJ: function (t, e, i) {
      i.r(e);
      var s = i("py6f");
      var a = Behavior({
          methods: {
            resetTouchStatus() {
              (this.direction = ""),
                (this.deltaX = 0),
                (this.deltaY = 0),
                (this.offsetX = 0),
                (this.offsetY = 0);
            },
            touchStart(t) {
              this.resetTouchStatus();
              var e = t.touches[0];
              (this.startX = e.clientX), (this.startY = e.clientY);
            },
            touchMove(t) {
              var e,
                i,
                s = t.touches[0];
              (this.deltaX = s.clientX - this.startX),
                (this.deltaY = s.clientY - this.startY),
                (this.offsetX = Math.abs(this.deltaX)),
                (this.offsetY = Math.abs(this.deltaY)),
                (this.direction =
                  this.direction ||
                  ((e = this.offsetX),
                  (i = this.offsetY),
                  e > i && e > 10
                    ? "horizontal"
                    : i > e && i > 10
                    ? "vertical"
                    : ""));
            },
          },
        }),
        r = i("6MKc"),
        n = i("6S0u"),
        h = i("NeL/");
      Object(s.a)({
        mixins: [a],
        classes: [
          "nav-class",
          "tab-class",
          "tab-active-class",
          "line-class",
          "wrap-class",
        ],
        relation: Object(h.a)("tab", function () {
          this.updateTabs();
        }),
        props: {
          sticky: Boolean,
          border: Boolean,
          swipeable: Boolean,
          titleActiveColor: String,
          titleInactiveColor: String,
          color: String,
          animated: {
            type: Boolean,
            observer() {
              this.children.forEach((t, e) =>
                t.updateRender(e === this.data.currentIndex, this)
              );
            },
          },
          lineWidth: { type: null, value: 40, observer: "resize" },
          lineHeight: { type: null, value: -1 },
          active: {
            type: null,
            value: 0,
            observer(t) {
              t !== this.getCurrentName() && this.setCurrentIndexByName(t);
            },
          },
          type: { type: String, value: "line" },
          ellipsis: { type: Boolean, value: !0 },
          duration: { type: Number, value: 0.3 },
          zIndex: { type: Number, value: 1 },
          swipeThreshold: {
            type: Number,
            value: 5,
            observer(t) {
              this.setData({
                scrollable: this.children.length > t || !this.data.ellipsis,
              });
            },
          },
          offsetTop: { type: Number, value: 0 },
          lazyRender: { type: Boolean, value: !0 },
          useBeforeChange: { type: Boolean, value: !1 },
        },
        data: {
          tabs: [],
          scrollLeft: 0,
          scrollable: !1,
          currentIndex: 0,
          container: null,
          skipTransition: !0,
          scrollWithAnimation: !1,
          lineOffsetLeft: 0,
          inited: !1,
        },
        mounted() {
          Object(r.m)(() => {
            (this.swiping = !0),
              this.setData({
                container: () => this.createSelectorQuery().select(".van-tabs"),
              }),
              this.resize(),
              this.scrollIntoView();
          });
        },
        methods: {
          updateTabs() {
            var { children: t = [], data: e } = this;
            this.setData({
              tabs: t.map((t) => t.data),
              scrollable:
                this.children.length > e.swipeThreshold || !e.ellipsis,
            }),
              this.setCurrentIndexByName(e.active || this.getCurrentName());
          },
          trigger(t, e) {
            var { currentIndex: i } = this.data,
              s = this.getChildData(i, e);
            Object(n.b)(s) && this.$emit(t, s);
          },
          onTap(t) {
            var { index: e } = t.currentTarget.dataset,
              i = this.children[e];
            i.data.disabled
              ? this.trigger("disabled", i)
              : this.onBeforeChange(e).then(() => {
                  this.setCurrentIndex(e),
                    Object(r.j)(() => {
                      this.trigger("click");
                    });
                });
          },
          setCurrentIndexByName(t) {
            var { children: e = [] } = this,
              i = e.filter((e) => e.getComputedName() === t);
            i.length && this.setCurrentIndex(i[0].index);
          },
          setCurrentIndex(t) {
            var { data: e, children: i = [] } = this;
            if (!(!Object(n.b)(t) || t >= i.length || t < 0))
              if (
                (Object(r.f)(this, () => {
                  i.forEach((e, i) => {
                    var s = i === t;
                    (s === e.data.active && e.inited) ||
                      e.updateRender(s, this);
                  });
                }),
                t !== e.currentIndex)
              ) {
                var s = null !== e.currentIndex;
                this.setData({ currentIndex: t }),
                  Object(r.m)(() => {
                    this.resize(), this.scrollIntoView();
                  }),
                  Object(r.j)(() => {
                    this.trigger("input"), s && this.trigger("change");
                  });
              } else e.inited || this.resize();
          },
          getCurrentName() {
            var t = this.children[this.data.currentIndex];
            if (t) return t.getComputedName();
          },
          resize() {
            if ("line" === this.data.type) {
              var {
                currentIndex: t,
                ellipsis: e,
                skipTransition: i,
              } = this.data;
              Promise.all([
                Object(r.b)(this, ".van-tab"),
                Object(r.d)(this, ".van-tabs__line"),
              ]).then((s) => {
                var [a = [], r] = s,
                  n = a[t];
                if (null != n) {
                  var h = a.slice(0, t).reduce((t, e) => t + e.width, 0);
                  (h += (n.width - r.width) / 2 + (e ? 0 : 8)),
                    this.setData({ lineOffsetLeft: h, inited: !0 }),
                    (this.swiping = !0),
                    i &&
                      setTimeout(() => {
                        this.setData({ skipTransition: !1 });
                      }, this.data.duration);
                }
              });
            }
          },
          scrollIntoView() {
            var {
              currentIndex: t,
              scrollable: e,
              scrollWithAnimation: i,
            } = this.data;
            e &&
              Promise.all([
                Object(r.b)(this, ".van-tab"),
                Object(r.d)(this, ".van-tabs__nav"),
              ]).then((e) => {
                var [s, a] = e,
                  n = s[t],
                  h = s.slice(0, t).reduce((t, e) => t + e.width, 0);
                this.setData({ scrollLeft: h - (a.width - n.width) / 2 }),
                  i ||
                    Object(r.j)(() => {
                      this.setData({ scrollWithAnimation: !0 });
                    });
              });
          },
          onTouchScroll(t) {
            this.$emit("scroll", t.detail);
          },
          onTouchStart(t) {
            this.data.swipeable && ((this.swiping = !0), this.touchStart(t));
          },
          onTouchMove(t) {
            this.data.swipeable && this.swiping && this.touchMove(t);
          },
          onTouchEnd() {
            if (this.data.swipeable && this.swiping) {
              var { direction: t, deltaX: e, offsetX: i } = this;
              if ("horizontal" === t && i >= 50) {
                var s = this.getAvaiableTab(e);
                -1 !== s &&
                  this.onBeforeChange(s).then(() => this.setCurrentIndex(s));
              }
              this.swiping = !1;
            }
          },
          getAvaiableTab(t) {
            for (
              var { tabs: e, currentIndex: i } = this.data,
                s = t > 0 ? -1 : 1,
                a = s;
              i + a < e.length && i + a >= 0;
              a += s
            ) {
              var r = i + a;
              if (r >= 0 && r < e.length && e[r] && !e[r].disabled) return r;
            }
            return -1;
          },
          onBeforeChange(t) {
            var { useBeforeChange: e } = this.data;
            return e
              ? new Promise((e, i) => {
                  this.$emit(
                    "before-change",
                    Object.assign(Object.assign({}, this.getChildData(t)), {
                      callback: (t) => (t ? e() : i()),
                    })
                  );
                })
              : Promise.resolve();
          },
          getChildData(t, e) {
            var i = e || this.children[t];
            if (Object(n.b)(i))
              return {
                index: i.index,
                name: i.getComputedName(),
                title: i.data.title,
              };
          },
        },
      });
    },
  })
);
