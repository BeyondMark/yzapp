"use strict";
var r = require("~/r");
r(
  "Qp8I",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      Qp8I: function (t, o, e) {
        e.r(o);
        var i = e("Fcif"),
          a = e("MLLI"),
          s = e("LjAy"),
          r = e("pXyP"),
          n = e("Ix7h"),
          h = e("Tewj"),
          l = e("taYb"),
          c = e("EqB2"),
          p = e("F9N9"),
          g = e("mztD"),
          d = "elevatorNavigationTop",
          u = {
            name: "ElevatorNavigation",
            mixins: [Object(c.a)({ optDesc: p.a })],
            props: {
              pageScrollKey: {
                type: String,
                default: "showcase-container:page-scroll",
              },
              themeColors: { type: Object, default: () => ({}) },
            },
            data: () => ({
              active: 0,
              showTabsPop: !1,
              stickyTop: 0,
              elevatorNavigationId: "elevator-navigation",
              isStartFixed: !1,
              navigationTypeDefault: s.d,
              showMethodDefault: s.e,
              imageTextIndex: s.c,
              imageIndex: s.b,
              showMask: !0,
              pid: Math.floor(1e3 * Math.random()),
              typeColor: "",
              backgroundColor: "",
              fontActiveColor: "",
              fontDefaultColor: "",
            }),
            computed: {
              tabActive() {
                return (
                  "--title-active-color: " +
                  this.fontActiveColor +
                  ";--title-inactive-color: " +
                  this.fontDefaultColor +
                  ";"
                );
              },
              showMaxNum() {
                var t = 5;
                return (
                  0 !== this.opt.showMethod ||
                    (2 !== this.opt.navigationType &&
                      1 !== this.opt.navigationType) ||
                    (t = 4),
                  t
                );
              },
              showTabs() {
                var t = Object(a.b)().windowWidth,
                  o = 0,
                  e = this.showMaxNum;
                return (
                  (o =
                    this.opt.tabs.length < e
                      ? t / this.opt.tabs.length
                      : t / e),
                  (this.opt.tabs || []).map((t, e) => {
                    var a = e === this.active;
                    if (
                      (/imageView/.test(t.image_url) ||
                        (t.image_url = Object(g.a)(t.image_url, "!260x0.jpg")),
                      0 === this.opt.showMethod)
                    ) {
                      var r = "";
                      this.opt.navigationType === s.d ||
                      0 === this.opt.navigationType
                        ? (r =
                            "color: " +
                            (a ? this.fontActiveColor : this.fontDefaultColor))
                        : (2 !== this.opt.navigationType &&
                            1 !== this.opt.navigationType) ||
                          (r =
                            "color: " +
                            (a ? this.fontActiveColor : this.fontDefaultColor) +
                            "; background-color: " +
                            (a ? this.typeColor : "transparent") +
                            "; padding: 4px 11px;margin: 8px auto;width: fit-content; height: 28px;align-items: center;box-sizing: border-box;border-radius: " +
                            (1 === this.opt.navigationType ? 16 : 2) +
                            "px;display: flex;");
                      var n = "";
                      return (
                        (n = [1, 2, 3].includes(this.opt.navigationType)
                          ? "width: " +
                            o +
                            "px;background-color: " +
                            this.backgroundColor
                          : "width: " +
                            o +
                            "px;background-color: " +
                            (a ? this.typeColor : this.backgroundColor)),
                        Object(i.a)({}, t, { bgStyle: n, titleStyle: r })
                      );
                    }
                    return 1 === this.opt.showMethod
                      ? Object(i.a)({}, t, {
                          bgStyle:
                            "width: " +
                            o +
                            "px;background-color: " +
                            this.backgroundColor,
                          titleStyle:
                            "color: " +
                            (a ? this.fontActiveColor : this.fontDefaultColor) +
                            ";display: flex;flex-wrap: wrap;justify-content: center;",
                        })
                      : Object(i.a)({}, t, {
                          bgStyle:
                            "width: " +
                            o +
                            "px;height:64px;background-color: " +
                            this.backgroundColor,
                        });
                  })
                );
              },
              tabsMaskCustomStyle() {
                var { backgroundColor: t } = this;
                return (
                  "background: linear-gradient(to right," +
                  this.hexToRgba(t, 0.1) +
                  " 22%," +
                  this.hexToRgba(t, 0.3) +
                  " 45%," +
                  this.hexToRgba(t, 0.6) +
                  " 60%," +
                  this.hexToRgba(t, 1) +
                  " 86%);\n      pointer-events: " +
                  (0 === this.opt.slideSetting ? "all" : "none") +
                  ";"
                );
              },
              scrollLeft() {
                var t = this.opt.tabs.length;
                if (t <= this.showMaxNum) return 0;
                var o = Object(a.b)().windowWidth / this.showMaxNum;
                return this.active > 2
                  ? Math.min(this.active - 2, t - 3) * o + "px"
                  : 0;
              },
              popTextCustomStyle() {
                var { navigationType: t } = this.opt,
                  { typeColor: o, fontActiveColor: e } = this;
                return 1 === t || 2 === t
                  ? "background-color: " + o + ";color:" + e
                  : "background-color: " + this.hexToRgba(o) + ";color:" + o;
              },
              popTextCustomClass() {
                var { navigationType: t } = this.opt;
                return 2 === t ? "border-box" : "";
              },
            },
            watch: {
              themeColors() {
                this.initColorStyle();
              },
            },
            created() {
              this.initColorStyle(),
                (this.onPageScrollFn = Object(n.a)(this.onPageScroll, 50)),
                h.default.on(this.pageScrollKey, this.onPageScrollFn),
                h.default.on(
                  "showcase-container:elevator-navigation-active-index",
                  this.setActiveIndex
                );
            },
            destroyed() {
              h.default.off(this.pageScrollKey, this.onPageScrollFn),
                h.default.off(
                  "showcase-container:elevator-navigation-active-index",
                  this.setActiveIndex
                );
            },
            mounted() {
              r.a.setControlSub(this.handelStickyTop, this, d),
                r.a.setCheckItem(d, this.opt.zIndex || 110),
                (this.currentPageY = 0),
                (this.lastDirection = "bottom"),
                (this.originHeight = 0),
                this.$nextTick(() => {
                  this.createSelectorQuery()
                    .select("#" + this.elevatorNavigationId)
                    .boundingClientRect((t) => {
                      if (t) {
                        if (
                          ((this.originHeight = t.height), !this.originHeight)
                        ) {
                          this.originHeight = { 0: 44, 1: 64, 2: 64 }[
                            this.opt.showMethod
                          ];
                        }
                        r.a.setWillStickyComponent({
                          name: d,
                          type: "fixed",
                          positionTop: t.top,
                          elementHeight: this.originHeight,
                          zIndex: this.zIndex || 110,
                        });
                      }
                    })
                    .exec();
                });
            },
            methods: {
              initColorStyle() {
                var {
                  styleConfig: t = s.f.GLOBAL,
                  navigationType: o,
                  showMethod: e,
                } = this.opt;
                if (e === s.g && t === s.f.GLOBAL) {
                  var {
                    themeColors: { general: i },
                  } = this;
                  (this.fontDefaultColor = s.a.fontDefaultColor),
                    (this.fontActiveColor = 3 === o ? "#000" : "#fff"),
                    (this.backgroundColor = s.a.backgroundColor),
                    (this.typeColor = i || s.a.typeColor);
                } else
                  (this.fontDefaultColor = this.opt.fontDefaultColor),
                    (this.fontActiveColor = this.opt.fontActiveColor),
                    (this.backgroundColor = this.opt.backgroundColor),
                    (this.typeColor = this.opt.typeColor);
              },
              setActiveIndex(t, o) {
                this.opt.tabs.find((t) => t.position_component === o) &&
                  t !== this.active &&
                  (this.active = t);
              },
              scrollViewScroll(t) {
                var o = Object(a.b)().windowWidth,
                  { scrollWidth: e, scrollLeft: i } = t.detail;
                this.showMask = !(o + i >= e - 10);
              },
              onPageScroll(t) {
                this.createSelectorQuery()
                  .select("#" + this.elevatorNavigationId)
                  .boundingClientRect((o) => {
                    if (o) {
                      var e =
                        t.scrollTop === this.currentPageY
                          ? "bottom" === this.lastDirection
                          : t.scrollTop > this.currentPageY;
                      (this.lastDirection = e ? "bottom" : "up"),
                        (this.currentPageY = t.scrollTop);
                      var i = o.height;
                      i && !this.originHeight && (this.originHeight = i);
                      var a = r.a.getHasTop(),
                        s =
                          o.top <
                          (!e && this.isStartFixed
                            ? a - this.originHeight - 1
                            : a);
                      if (s !== this.isStartFixed) {
                        r.a.setItem(d, i, s);
                        var { positionTop: n = 0 } = r.a.getItem(d) || {};
                        (this.isStartFixed = s), (this.stickyTop = n);
                      }
                    }
                  })
                  .exec();
              },
              handelStickyTop(t) {
                var { type: o, stickyTop: e = 0 } = t;
                "stickyTop" === o && (this.stickyTop = e);
              },
              hexToRgba(t) {
                var o = t.slice(1);
                return (
                  "rgba(" +
                  [
                    parseInt("0x" + o.slice(0, 2), 0),
                    parseInt("0x" + o.slice(2, 4), 0),
                    parseInt("0x" + o.slice(4, 6), 0),
                    0.1,
                  ].toString() +
                  ")"
                );
              },
              handleTabsPop() {
                this.showTabsPop = !this.showTabsPop;
              },
              handleTabsPopClick(t) {
                (this.active = t),
                  this.handleTabClick({
                    currentTarget: { dataset: { index: t } },
                  }),
                  this.handleTabsPop();
              },
              handleVanTabClick(t) {
                var { index: o } = t;
                this.handleTabClick({
                  currentTarget: { dataset: { index: o } },
                });
              },
              handleTabClick(t) {
                var { index: o } = t.currentTarget.dataset;
                this.active = o;
                var e = this.opt.tabs[o];
                e &&
                  (e.use_link && e.link_url && 2 === this.opt.showMethod
                    ? this.$emit("item-jump", { link: l.a.toCamelCase(e) })
                    : this.$emit("item-click", e));
              },
            },
            ud: !0,
          },
          v = e("9ZMt");
        o.default = v.default.component(u);
      },
    }
  )
);
