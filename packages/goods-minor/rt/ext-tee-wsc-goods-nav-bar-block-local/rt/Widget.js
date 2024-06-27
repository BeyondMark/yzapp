"use strict";
var r = require("~/r");
r(
  "Gl9M",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Gl9M: function (t, e, a) {
      a.r(e);
      var i = a("YeA1"),
        o = a("Tewj"),
        s = a("Ix7h"),
        h = a("fChk"),
        r = !1,
        c = [
          { name: "商品", selector: "imageBlock" },
          { name: "评价", selector: "goodsReviewBlock" },
          { name: "详情", selector: "goodsDetailBlock" },
          { name: "推荐", selector: "recommendBlock" },
        ],
        n = {
          name: "nav-bar",
          data: () => ({
            pid: "nav-bar" + Math.random(),
            themeVars: "",
            shopConfig: {},
            isFastBuy: !1,
            activeIndex: 0,
            opacityVal: 0,
            mainColor: "",
            topNavHeight: 0,
            navItemTopList: [],
            navTabList: [],
          }),
          computed: {
            showTopNavBar() {
              return !this.isFastBuy && this.opacityVal > 0;
            },
          },
          watch: {
            opacityVal(t) {
              this.setNavBarHeight(1 === t ? 40 : 0);
            },
          },
          created() {
            Object(i.b)(this, ["themeVars", "topNavHeight"]),
              Object(i.b)(this, {
                shopConfig: (t) => {
                  (this.shopConfig = t), this.getNavTabList();
                },
              });
          },
          mounted() {
            (this.pageScrollFn = Object(s.a)(
              this.handleScroll.bind(this),
              100
            )),
              o.default.on("onPageScroll", this.pageScrollFn, this);
          },
          destroyed() {
            o.default.off("onPageScroll", this.pageScrollFn);
          },
          methods: {
            getNavTabList() {
              var { showCustomerReviews: t, showRecommendGoods: e } =
                  this.shopConfig || {},
                a = c.filter(
                  (a) =>
                    !("goodsReviewBlock" === a.selector && !t) &&
                    !("recommendBlock" === a.selector && !e)
                );
              this.ctx.process.invokePipe("setNavTabList", a).then((t) => {
                (a = t), (this.navTabList = a);
              });
            },
            setNavBarHeight(t) {
              this.ctx.data.navBarHeight = t;
            },
            handleScroll(t) {
              var { scrollTop: e } = t,
                a = e;
              if ((this.handleNavOpacity(a), this.getNavItemTop(a), !r)) {
                var i = this.activeIndex;
                this.navItemTopList.forEach((t, e) => {
                  t - a < 5 && (i = e);
                }),
                  i !== this.activeIndex && (this.activeIndex = i);
              }
            },
            getNavItemTop(t) {
              this.ctx.process.invokePipe("getNavItemTop").then((e) => {
                this.navItemTopList = this.navTabList.map(
                  (a) => e[a.selector] + t - 40 - this.topNavHeight
                );
              });
            },
            handleNavOpacity(t) {
              var e = 0;
              t >= 0 && t <= 100 ? (e = t / 100) : t > 100 && (e = 1),
                this.opacityVal !== e &&
                  ((this.opacityVal = e),
                  o.default.trigger("onNavOpacityChange", e));
            },
            goAnchor(t) {
              r = !0;
              var e = this.navItemTopList[t.index];
              Object(h.a)({ scrollTop: e, duration: 0 }).finally(() => {
                setTimeout(() => {
                  r = !1;
                }, 50);
              });
            },
          },
          ud: !0,
        },
        l = a("9ZMt");
      e.default = l.default.component(n);
    },
  })
);
