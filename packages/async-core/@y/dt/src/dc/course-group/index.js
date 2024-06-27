"use strict";
var r = require("~/r");
r(
  "IM3J",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      IM3J: function (t, e, i) {
        i.r(e);
        var s = i("9ZMt"),
          o = i("EqB2"),
          r = i("kGW7"),
          a = i("pXyP"),
          c = i("Ix7h"),
          n = i("Tewj"),
          p = "eduGoodsTagsTop",
          l = {
            mixins: [Object(o.a)({ optDesc: r.a })],
            props: {
              kdtId: Number,
              shopInfo: { type: Object, default: () => ({}) },
              themeColors: { type: Object, default: () => ({}) },
              buyerId: { type: String, default: "" },
              pageScrollKey: {
                type: String,
                default: "showcase-container:page-scroll",
              },
            },
            data: () => ({
              currentGroup: {},
              isSticky: !1,
              curId: "id_" + Math.round(1e3 * Math.random()),
              zIndex: 1,
              stickyTop: 0,
            }),
            computed: {
              showGoodList() {
                var { currentGroup: t } = this;
                return void 0 !== t.groupAlias;
              },
              tabWidth() {
                var { tabsOpt: t } = this.opt;
                return 0 === t.templateType
                  ? "100%"
                  : s.default.style.useTpx(88);
              },
            },
            created() {
              var { tabsOpt: t } = this.opt,
                { groupList: e = [] } = t;
              this.changeTab(e[0]);
            },
            mounted() {
              this.initSticky();
            },
            methods: {
              changeTab(t) {
                var { alias: e, displayType: i, displayNumber: s } = t;
                this.currentGroup = {
                  groupAlias: e,
                  displayType: i,
                  displayNumber: s,
                };
              },
              initSticky() {
                var { tabsOpt: t } = this.opt;
                1 === t.menuPosition &&
                  ((this.isSticky = !1),
                  a.a.setControlSub(this.handleStickyChange, this, p),
                  a.a.setCheckItem(p, this.opt.zIndex || 110),
                  (this.onPageScrollFn = Object(c.a)(this.onPageScroll, 50)),
                  (this.currentPageY = 0),
                  this.$nextTick(() => {
                    this.createSelectorQuery()
                      .select("#" + this.curId)
                      .boundingClientRect((t) => {
                        t &&
                          a.a.setWillStickyComponent({
                            name: p,
                            type: "fixed",
                            positionTop: t.top,
                            elementHeight: 44,
                            zIndex: this.zIndex || 110,
                          });
                      })
                      .exec();
                  }),
                  n.default.on(this.pageScrollKey, this.onPageScrollFn));
              },
              onPageScroll(t) {
                this.createSelectorQuery()
                  .select("#" + this.curId)
                  .boundingClientRect((e) => {
                    if (e) {
                      var i =
                        t.scrollTop === this.currentPageY
                          ? "bottom" === this.lastDirection
                          : t.scrollTop > this.currentPageY;
                      (this.lastDirection = i ? "bottom" : "up"),
                        (this.currentPageY = t.scrollTop);
                      var s = e.bottom,
                        o = a.a.getHasTop(),
                        r = !1;
                      if (
                        (i
                          ? ((r = e.top < o && s > o),
                            !this.isSticky &&
                              e.top < o &&
                              s - o < 45 &&
                              (r = !1))
                          : (r =
                              s - (this.isSticky ? 0 : 44) > o &&
                              e.top + (this.isSticky ? 44 : 0) < o),
                        this.isSticky !== r)
                      ) {
                        (this.isSticky = r),
                          (this.zIndex = r ? 109 : 1),
                          a.a.setItem(p, 44, r);
                        var { positionTop: c = 0 } = a.a.getItem(p) || {};
                        (this.isStartFixed = r), (this.stickyTop = c);
                      }
                    }
                  })
                  .exec();
              },
              handleStickyChange(t) {
                var { type: e, stickyTop: i = 0 } = t;
                if ("stickyTop" === e) this.stickyTop = i;
                else if ("setItem" === e) {
                  var { positionTop: s = 0 } = a.a.getItem(p) || {};
                  if (0 === s && 0 !== this.stickyTop) return;
                  this.stickyTop = s;
                }
              },
            },
            ud: !0,
          };
        e.default = s.default.component(l);
      },
    }
  )
);
