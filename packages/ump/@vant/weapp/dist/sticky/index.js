"use strict";
var r = require("~/r");
r(
  "AlC/",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "AlC/": function (e, t, r) {
      r.r(t);
      var o = r("6MKc"),
        i = r("py6f"),
        a = r("6S0u");
      function s(e) {
        var { vanPageScroller: t = [] } = Object(o.c)();
        t.forEach((t) => {
          "function" == typeof t && t(e);
        });
      }
      var l;
      Object(i.a)({
        props: {
          zIndex: { type: Number, value: 99 },
          offsetTop: { type: Number, value: 0, observer: "onScroll" },
          disabled: { type: Boolean, observer: "onScroll" },
          container: { type: null, observer: "onScroll" },
          scrollTop: {
            type: null,
            observer(e) {
              this.onScroll({ scrollTop: e });
            },
          },
        },
        mixins: [
          ((l = function (e) {
            null == this.data.scrollTop && this.onScroll(e);
          }),
          Behavior({
            attached() {
              var e = Object(o.c)();
              if (Object(o.g)(e)) {
                var t = l.bind(this),
                  { vanPageScroller: r = [] } = e;
                Object(a.c)(e.onPageScroll) &&
                  e.onPageScroll !== s &&
                  r.push(e.onPageScroll.bind(e)),
                  r.push(t),
                  (e.vanPageScroller = r),
                  (e.onPageScroll = s),
                  (this._scroller = t);
              }
            },
            detached() {
              var e = Object(o.c)();
              if (Object(o.g)(e) && Object(o.g)(e.vanPageScroller)) {
                var { vanPageScroller: t } = e,
                  r = t.findIndex((e) => e === this._scroller);
                r > -1 && e.vanPageScroller.splice(r, 1),
                  (this._scroller = void 0);
              }
            },
          })),
        ],
        data: { height: 0, fixed: !1, transform: 0 },
        mounted() {
          this.onScroll();
        },
        methods: {
          onScroll(e) {
            var { scrollTop: t } = void 0 === e ? {} : e,
              { container: r, offsetTop: i, disabled: s } = this.data;
            s
              ? this.setDataAfterDiff({ fixed: !1, transform: 0 })
              : ((this.scrollTop = t || this.scrollTop),
                "function" != typeof r
                  ? Object(o.d)(this, ".van-sticky").then((e) => {
                      Object(a.b)(e) &&
                        (e.width || e.height) &&
                        (i >= e.top
                          ? (this.setDataAfterDiff({
                              fixed: !0,
                              height: e.height,
                            }),
                            (this.transform = 0))
                          : this.setDataAfterDiff({ fixed: !1 }));
                    })
                  : Promise.all([
                      Object(o.d)(this, ".van-sticky"),
                      this.getContainerRect(),
                    ])
                      .then((e) => {
                        var [t, r] = e;
                        i + t.height > r.height + r.top
                          ? this.setDataAfterDiff({
                              fixed: !1,
                              transform: r.height - t.height,
                            })
                          : i >= t.top
                          ? this.setDataAfterDiff({
                              fixed: !0,
                              height: t.height,
                              transform: 0,
                            })
                          : this.setDataAfterDiff({ fixed: !1, transform: 0 });
                      })
                      .catch(() => {}));
          },
          setDataAfterDiff(e) {
            wx.nextTick(() => {
              var t = Object.keys(e).reduce(
                (t, r) => (e[r] !== this.data[r] && (t[r] = e[r]), t),
                {}
              );
              Object.keys(t).length > 0 && this.setData(t),
                this.$emit("scroll", {
                  scrollTop: this.scrollTop,
                  isFixed: e.fixed || this.data.fixed,
                });
            });
          },
          getContainerRect() {
            var e = this.data.container();
            return e
              ? new Promise((t) => e.boundingClientRect(t).exec())
              : Promise.reject(new Error("not found container"));
          },
        },
      });
    },
  })
);
