"use strict";
var r = require("~/r");
r(
  "QmL5",
  Object.assign({}, require("../../../c.js").modules, {
    QmL5: function (t, e, i) {
      i.r(e);
      var s = i("wwdI"),
        a = i("x8Dq"),
        r = i("gU5S");
      Object(s.a)({
        mixins: [a.a],
        classes: ["nav-class", "tab-class", "tab-active-class", "line-class"],
        relation: {
          name: "tab",
          type: "descendant",
          linked(t) {
            this.child.push(t), this.updateTabs(this.data.tabs.concat(t.data));
          },
          unlinked(t) {
            var e = this.child.indexOf(t),
              { tabs: i } = this.data;
            i.splice(e, 1), this.child.splice(e, 1), this.updateTabs(i);
          },
        },
        props: {
          color: String,
          sticky: Boolean,
          animated: Boolean,
          swipeable: Boolean,
          lineWidth: { type: Number, value: -1 },
          lineHeight: { type: Number, value: -1 },
          active: { type: Number, value: 0 },
          type: { type: String, value: "line" },
          border: { type: Boolean, value: !0 },
          duration: { type: Number, value: 0.3 },
          zIndex: { type: Number, value: 1 },
          swipeThreshold: { type: Number, value: 4 },
          offsetTop: { type: Number, value: 0 },
        },
        data: {
          tabs: [],
          lineStyle: "",
          scrollLeft: 0,
          scrollable: !1,
          trackStyle: "",
          wrapStyle: "",
          position: "",
        },
        watch: {
          swipeThreshold() {
            this.set({
              scrollable: this.child.length > this.data.swipeThreshold,
            });
          },
          color: "setLine",
          lineWidth: "setLine",
          lineHeight: "setLine",
          active: "setActiveTab",
          animated: "setTrack",
          offsetTop: "setWrapStyle",
        },
        beforeCreate() {
          this.child = [];
        },
        mounted() {
          this.setLine(!0),
            this.setTrack(),
            this.scrollIntoView(),
            this.getRect(".van-tabs__wrap").then((t) => {
              (this.navHeight = t.height), this.observerContentScroll();
            });
        },
        destroyed() {
          this.createIntersectionObserver().disconnect();
        },
        methods: {
          updateTabs(t) {
            (t = t || this.data.tabs),
              this.set({
                tabs: t,
                scrollable: t.length > this.data.swipeThreshold,
              }),
              this.setActiveTab();
          },
          trigger(t, e) {
            this.$emit(t, { index: e, title: this.data.tabs[e].title });
          },
          onTap(t) {
            var { index: e } = t.currentTarget.dataset;
            this.data.tabs[e].disabled
              ? this.trigger("disabled", e)
              : (this.trigger("click", e), this.setActive(e));
          },
          setActive(t) {
            t !== this.data.active &&
              (this.trigger("change", t),
              this.set({ active: t }),
              this.setActiveTab());
          },
          setLine(t) {
            if ("line" === this.data.type) {
              var {
                color: e,
                active: i,
                duration: s,
                lineWidth: a,
                lineHeight: r,
              } = this.data;
              this.getRect(".van-tab", !0).then((o) => {
                var n = o[i],
                  h = -1 !== a ? a : n.width / 2,
                  l = -1 !== r ? "height: " + r + "px;" : "",
                  c = o.slice(0, i).reduce((t, e) => t + e.width, 0);
                c += (n.width - h) / 2;
                var d = t
                  ? ""
                  : "transition-duration: " +
                    s +
                    "s; -webkit-transition-duration: " +
                    s +
                    "s;";
                this.set({
                  lineStyle:
                    "\n            " +
                    l +
                    "\n            width: " +
                    h +
                    "px;\n            background-color: " +
                    e +
                    ";\n            -webkit-transform: translateX(" +
                    c +
                    "px);\n            transform: translateX(" +
                    c +
                    "px);\n            " +
                    d +
                    "\n          ",
                });
              });
            }
          },
          setTrack() {
            var { animated: t, active: e, duration: i } = this.data;
            if (!t) return "";
            this.getRect(".van-tabs__content").then((s) => {
              var { width: a } = s;
              this.set({
                trackStyle:
                  "\n            width: " +
                  a * this.child.length +
                  "px;\n            left: " +
                  -1 * e * a +
                  "px;\n            transition: left " +
                  i +
                  "s;\n            display: -webkit-box;\n            display: flex;\n          ",
              });
              var r = { width: a, animated: t };
              this.child.forEach((t) => {
                t.set(r);
              });
            });
          },
          setActiveTab() {
            this.child.forEach((t, e) => {
              var i = { active: e === this.data.active };
              i.active && (i.inited = !0),
                i.active !== t.data.active && t.set(i);
            }),
              Object(r.a)(() => {
                this.setLine(), this.setTrack(), this.scrollIntoView();
              });
          },
          scrollIntoView() {
            var { active: t, scrollable: e } = this.data;
            e &&
              Promise.all([
                this.getRect(".van-tab", !0),
                this.getRect(".van-tabs__nav"),
              ]).then((e) => {
                var [i, s] = e,
                  a = i[t],
                  r = i.slice(0, t).reduce((t, e) => t + e.width, 0);
                this.set({ scrollLeft: r - (s.width - a.width) / 2 });
              });
          },
          onTouchStart(t) {
            this.data.swipeable && this.touchStart(t);
          },
          onTouchMove(t) {
            this.data.swipeable && this.touchMove(t);
          },
          onTouchEnd() {
            if (this.data.swipeable) {
              var { active: t, tabs: e } = this.data,
                { direction: i, deltaX: s, offsetX: a } = this;
              "horizontal" === i &&
                a >= 50 &&
                (s > 0 && 0 !== t
                  ? this.setActive(t - 1)
                  : s < 0 && t !== e.length - 1 && this.setActive(t + 1));
            }
          },
          setWrapStyle() {
            var t,
              { offsetTop: e, position: i } = this.data;
            switch (i) {
              case "top":
                t =
                  "\n            top: " +
                  e +
                  "px;\n            position: fixed;\n          ";
                break;
              case "bottom":
                t =
                  "\n            top: auto;\n            bottom: 0;\n          ";
                break;
              default:
                t = "";
            }
            t !== this.data.wrapStyle && this.set({ wrapStyle: t });
          },
          observerContentScroll() {
            if (this.data.sticky) {
              var { offsetTop: t } = this.data,
                { windowHeight: e } = wx.getSystemInfoSync();
              this.createIntersectionObserver().disconnect(),
                this.createIntersectionObserver()
                  .relativeToViewport({ top: -(this.navHeight + t) })
                  .observe(".van-tabs", (e) => {
                    var { top: i } = e.boundingClientRect;
                    if (!(i > t)) {
                      var s = e.intersectionRatio > 0 ? "top" : "bottom";
                      this.$emit("scroll", {
                        scrollTop: i + t,
                        isFixed: "top" === s,
                      }),
                        this.setPosition(s);
                    }
                  }),
                this.createIntersectionObserver()
                  .relativeToViewport({ bottom: -(e - 1 - t) })
                  .observe(".van-tabs", (e) => {
                    var { top: i, bottom: s } = e.boundingClientRect;
                    if (!(s < this.navHeight)) {
                      var a = e.intersectionRatio > 0 ? "top" : "";
                      this.$emit("scroll", {
                        scrollTop: i + t,
                        isFixed: "top" === a,
                      }),
                        this.setPosition(a);
                    }
                  });
            }
          },
          setPosition(t) {
            t !== this.data.position &&
              this.set({ position: t }).then(() => {
                this.setWrapStyle();
              });
          },
        },
      });
    },
    wwdI: function (t, e, i) {
      i.d(e, "a", function () {
        return n;
      });
      var s = Behavior({
        methods: {
          $emit() {
            this.triggerEvent(...arguments);
          },
          getRect(t, e) {
            return new Promise((i) => {
              wx.createSelectorQuery()
                .in(this)
                [e ? "selectAll" : "select"](t)
                .boundingClientRect((t) => {
                  e && Array.isArray(t) && t.length && i(t), !e && t && i(t);
                })
                .exec();
            });
          },
        },
      });
      function a(t, e) {
        return new Promise((i) => {
          t.setData(e, i);
        });
      }
      var r = Behavior({
        created() {
          if (this.$options) {
            var t = {},
              { computed: e } = this.$options(),
              i = Object.keys(e);
            this.calcComputed = () => {
              var s = {};
              return (
                i.forEach((i) => {
                  var a = e[i].call(this);
                  t[i] !== a && ((t[i] = a), (s[i] = a));
                }),
                s
              );
            };
          }
        },
        attached() {
          this.set();
        },
        methods: {
          set(t, e) {
            var i = [];
            return (
              t && i.push(a(this, t)),
              this.calcComputed && i.push(a(this, this.calcComputed())),
              Promise.all(i).then(
                (t) => (e && "function" == typeof e && e.call(this), t)
              )
            );
          },
        },
      });
      function o(t, e) {
        var { watch: i, computed: s } = t;
        if ((e.behaviors.push(r), i)) {
          var a = e.properties || {};
          Object.keys(i).forEach((t) => {
            if (t in a) {
              var e = a[t];
              (null !== e && "type" in e) || (e = { type: e }),
                (e.observer = i[t]),
                (a[t] = e);
            }
          }),
            (e.properties = a);
        }
        s &&
          ((e.methods = e.methods || {}),
          (e.methods.$options = () => t),
          e.properties &&
            (function (t) {
              t &&
                Object.keys(t).forEach((e) => {
                  var i = t[e];
                  (null !== i && "type" in i) || (i = { type: i });
                  var { observer: s } = i;
                  (i.observer = function () {
                    if (s) {
                      "string" == typeof s && (s = this[s]);
                      for (
                        var t = arguments.length, e = new Array(t), i = 0;
                        i < t;
                        i++
                      )
                        e[i] = arguments[i];
                      s.apply(this, e);
                    }
                    this.set();
                  }),
                    (t[e] = i);
                });
            })(e.properties));
      }
      function n(t) {
        void 0 === t && (t = {});
        var e,
          i,
          a,
          r = {};
        (e = t),
          (i = r),
          (a = {
            data: "data",
            props: "properties",
            mixins: "behaviors",
            methods: "methods",
            beforeCreate: "created",
            created: "attached",
            mounted: "ready",
            relations: "relations",
            destroyed: "detached",
            classes: "externalClasses",
          }),
          Object.keys(a).forEach((t) => {
            e[t] && (i[a[t]] = e[t]);
          });
        var { relation: n } = t;
        n &&
          (r.relations = Object.assign(r.relations || {}, {
            ["../" + n.name + "/index"]: n,
          })),
          (r.externalClasses = r.externalClasses || []),
          r.externalClasses.push("custom-class"),
          (r.behaviors = r.behaviors || []),
          r.behaviors.push(s),
          t.field && r.behaviors.push("wx://form-field"),
          (r.options = { multipleSlots: !0, addGlobalClass: !0 }),
          o(t, r),
          Component(r);
      }
    },
  })
);
