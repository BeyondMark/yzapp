"use strict";
var r = require("~/r");
r(
  "66Bv",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "66Bv": function (t, e, i) {
      i.r(e);
      var s = i("Fcif"),
        r = i("m6kV"),
        a = i("BZkp"),
        n = i("wSeO"),
        l = i("1pB4"),
        o = i("Zqpg"),
        h = Object(r.a)("t-tabs"),
        d = {
          name: "t-tabs",
          mixins: [
            Object(o.a)({
              relation: Object(n.a)("tab", function () {
                this.updateTabs();
              }),
              externalClasses: [
                "custom-class",
                "scroll-class",
                "nav-class",
                "tab-active-class",
                "line-class",
                "tab-class",
                "wrap-class",
              ],
            }),
          ],
          props: {
            color: String,
            sticky: Boolean,
            animated: Boolean,
            swipeable: Boolean,
            lineWidth: { type: [String, Number], default: -1 },
            lineHeight: { type: [String, Number], default: -1 },
            titleActiveColor: String,
            titleInactiveColor: String,
            active: { type: [String, Number], default: 0 },
            type: { type: String, default: "line" },
            border: { type: Boolean, default: !0 },
            ellipsis: { type: Boolean, default: !0 },
            duration: { type: Number, default: 0.3 },
            zIndex: { type: Number, default: 1 },
            swipeThreshold: { type: Number, default: 4 },
            offsetTop: { type: Number, default: 0 },
            lazyRender: { type: Boolean, default: !0 },
            tabStyle: { type: String },
          },
          data: () => ({
            tabs: [],
            lineStyle: "",
            scrollLeft: 0,
            scrollable: !1,
            currentIndex: 0,
            container: null,
          }),
          computed: {
            classes() {
              return {
                tabs: this.customClass + " " + h([this.type]),
                scroll: this.scrollClass + " " + h("scroll", [this.type]),
                nav: this.navClass + " " + h("nav", [this.type]),
                wrap:
                  this.wrapClass +
                  " " +
                  h("wrap", { scrollable: this.scrollable }),
                track: h("track", [{ animated: this.animated }]),
              };
            },
            activeClass() {
              return "t-tab--active " + this.tabActiveClass;
            },
            trackStyle() {
              return this.animated
                ? [
                    "transform: translate3d(" +
                      -100 * this.currentIndex +
                      "%, 0, 0)",
                    "-webkit-transition-duration: " + this.duration + "s",
                    "transition-duration: " + this.duration + "s",
                  ].join(";")
                : "";
            },
          },
          watch: {
            color() {
              this.resize(1);
            },
            lineWidth() {
              this.resize(2);
            },
            lineHeight() {
              this.resize(3);
            },
            type() {
              this.resize(4);
            },
            active() {
              this.updateTabs();
            },
            currentIndex() {
              this.updateTabItems();
            },
          },
          mounted() {
            setTimeout(() => {
              this.resize(!0), this.scrollIntoView(), this.updateContainer();
            }, 1e3 / 30);
          },
          methods: {
            updateContainer() {},
            updateTabs() {
              (this.tabs = this.children.map((t, e) => ({
                title: t.title,
                dot: t.dot,
                info: t.info,
                titleStyle: this.buildTitleStyle(e, t),
              }))),
                (this.scrollable =
                  this.children.length > this.swipeThreshold || !this.ellipsis),
                this.setCurrentIndexByName(
                  Object(l.b)(this.active) ? this.active : this.getCurrentName()
                );
            },
            updateTabItems() {
              this.tabs = this.tabs.map((t, e) =>
                Object(s.a)({}, t, { titleStyle: this.buildTitleStyle(e, t) })
              );
            },
            buildTitleStyle(t, e) {
              var { titleStyle: i } = e,
                { titleActiveColor: s, titleInactiveColor: r } = this;
              if (!s && !r) return i;
              var a = this.currentIndex === t ? s || "" : r || "";
              return "string" != typeof i ? "color: " + a : i + ";color: " + a;
            },
            trigger(t, e) {
              var { currentIndex: i } = this,
                s = e || this.children[i];
              Object(l.b)(s) &&
                this.$emit(t, {
                  index: s.index,
                  name: s.getComputedName(),
                  title: s.title,
                });
            },
            onTap(t) {
              var e = +t.currentTarget.dataset.index,
                i = this.children[e];
              i.disabled
                ? this.trigger("disabled", i)
                : (this.setCurrentIndex(e),
                  setTimeout(() => {
                    this.trigger("click");
                  }));
            },
            setCurrentIndexByName(t) {
              var { children: e = [] } = this,
                i = e.filter((e) => e.getComputedName() === t);
              i.length && this.setCurrentIndex(i[0].index);
            },
            setCurrentIndex(t) {
              var { children: e = [] } = this;
              if (
                !(!Object(l.b)(t) || t >= e.length || t < 0) &&
                (e.forEach((e) => {
                  var i = e.index === t;
                  e.updateRender(i);
                }),
                t !== this.currentIndex)
              ) {
                var i = null !== this.currentIndex;
                (this.currentIndex = t),
                  setTimeout(() => {
                    this.resize(5),
                      this.scrollIntoView(),
                      this.trigger("input"),
                      i && this.trigger("change");
                  }, 1e3 / 30);
              }
            },
            getCurrentName() {
              var t = this.children[this.currentIndex];
              if (t) return t.getComputedName(this);
            },
            resize(t) {
              var e,
                i = this;
              if ("line" === this.type) {
                var {
                  color: s,
                  duration: r,
                  currentIndex: n,
                  lineWidth: l,
                  lineHeight: o,
                } = this;
                Object(a.d)(
                  this,
                  ".t-tab",
                  null == (e = this.$refs.querydom) ? void 0 : e.$el
                ).then(function (e) {
                  void 0 === e && (e = []);
                  var h = e[n];
                  if (null != h) {
                    var d = -1 !== l ? l : 40,
                      c =
                        -1 !== o
                          ? "height: " +
                            Object(a.b)(o) +
                            "; border-radius: " +
                            Object(a.b)(o) +
                            ";"
                          : "",
                      u = e.slice(0, n).reduce((t, e) => t + e.width, 0);
                    u += (h.width - d) / 2;
                    var b = t
                      ? ""
                      : "transition-duration: " +
                        r +
                        "s; -webkit-transition-duration: " +
                        r +
                        "s;";
                    i.lineStyle =
                      "\n            " +
                      c +
                      "\n            width: " +
                      Object(a.b)(d) +
                      ";\n            background: " +
                      s +
                      ";\n            -webkit-transform: translateX(" +
                      u +
                      "px);\n            transform: translateX(" +
                      u +
                      "px);\n            " +
                      b +
                      "\n          ";
                  }
                });
              }
            },
            scrollIntoView() {
              var { currentIndex: t, scrollable: e } = this;
              e &&
                Promise.all([
                  Object(a.d)(this, ".t-tab"),
                  Object(a.f)(this, ".t-tabs__nav"),
                ]).then((e) => {
                  var [i, s] = e,
                    r = i[t],
                    a = i.slice(0, t).reduce((t, e) => t + e.width, 0);
                  this.scrollLeft = a - (s.width - r.width) / 2;
                });
            },
            onTabNavScroll(t) {
              this.$emit("nav-scroll", t);
            },
            onTouchScroll(t) {
              this.$emit("scroll", t);
            },
            onTouchStart(t) {
              this.swipeable && this.touchStart(t);
            },
            onTouchMove(t) {
              this.swipeable && this.touchMove(t);
            },
            onTouchEnd() {
              if (this.swipeable) {
                var { tabs: t, currentIndex: e } = this,
                  { direction: i, deltaX: s, offsetX: r } = this;
                "horizontal" === i &&
                  r >= 50 &&
                  (s > 0 && 0 !== e
                    ? this.setCurrentIndex(e - 1)
                    : s < 0 &&
                      e !== t.length - 1 &&
                      this.setCurrentIndex(e + 1));
              }
            },
          },
          ud: !0,
        },
        c = i("9ZMt");
      e.default = c.default.component(d);
    },
  })
);
