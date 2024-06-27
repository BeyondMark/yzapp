"use strict";
var r = require("~/r");
r(
  "YzGV",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    YzGV: function (e, t, s) {
      s.r(t);
      var i = s("9ZMt"),
        o = s("AGZf"),
        a = s("Ix7h"),
        r = s("R7Zb"),
        h = s("LrYe"),
        c = s("/XVY"),
        n = Object(c.a)({
          customStyle: { default: "" },
          placeholder: { default: "搜索" },
          hotWords: { default: () => [] },
          position: { default: 0 },
          showMode: { default: 0 },
          borderRadius: { default: 4 },
          textAlign: { default: "left" },
          height: { default: 40 },
          color: { default: "#969799" },
          bgColor: { default: "#eee" },
          borderColor: { default: "#fff" },
          zIndex: { default: 110 },
          showScan: { default: !1 },
          userSearchIconSlot: {},
        }),
        d = s("0hwI"),
        l = s("pXyP"),
        u = s("Tewj"),
        p = s("Oq22"),
        g = s("YeA1"),
        { useTpx: S } = i.default.style,
        f = {
          mixins: [Object(r.a)({ optDesc: n }), h.a],
          props: {
            pageScrollKey: {
              type: String,
              default: "showcase-container:page-scroll",
            },
            kdtId: Number,
            featureAlias: String,
          },
          data: () => ({
            id: null,
            hotSearchKeys: [],
            vanSwiperKey: "" + Math.random(),
          }),
          logicData: () => ({
            isNeedFixed: !1,
            isNeedFixedScroll: !1,
            isStartFixed: !1,
            stickyTop: 0,
            searchScrollTop: 0,
            searchHeight: 0,
          }),
          computed: {
            inputStyle() {
              var { borderRadius: e } = this.opt;
              return (
                "\n        border-radius: " +
                ("number" == typeof e ? S(e) : e) +
                ";\n        height: " +
                S(this.opt.height) +
                ";\n        justify-content: " +
                this.opt.textAlign +
                ";\n        background: " +
                this.opt.borderColor +
                ";\n        color: " +
                this.opt.color +
                ";\n      "
              );
            },
            swiperItemStyle() {
              return "\n        color: " + this.opt.color + ";\n      ";
            },
            conClass() {
              return this.isStartFixed ? "fixed" : "";
            },
            searchId() {
              return "search-" + this.id;
            },
            conId() {
              return "search-con-" + this.id;
            },
            style() {
              return 0 === this.searchHeight
                ? ""
                : "\n        height: " + S(this.searchHeight) + ";\n      ";
            },
            swiperStyle() {
              return (
                "\n      top: 0;\n      height: " +
                S(this.opt.height) +
                ";\n      "
              );
            },
            conStyle() {
              var e = ["background: " + this.opt.bgColor];
              return (
                this.isStartFixed && e.push("top: " + S(this.stickyTop)),
                e.join(";") + ";"
              );
            },
            showScan() {
              return "weapp" === i.default.getEnv() && this.opt.showScan;
            },
          },
          created() {
            var { position: e, showMode: t, hotWords: s } = this.opt;
            (this.id = parseInt(1e7 * Math.random(1e6, 9e6), 10)),
              (this.isNeedFixed = 1 === e),
              (this.isNeedFixedScroll = 1 === t),
              (this.currentPageY = 0),
              (this.lastDirection = "bottom"),
              d.a
                .get({
                  url: "/wscdeco/decorate/search-page/hot-words.json",
                  origin: "h5m",
                  options: { useCdn: !0 },
                })
                .then((e) => {
                  var {
                    chosenWords: t = [],
                    normalWords: i = [],
                    isCover: o = 0,
                  } = e || {};
                  this.useSearchPageConfig = o;
                  var a = this.useSearchPageConfig ? t.concat(i) : s;
                  (this.hotSearchKeys = a), (this.currentWords = a && a[0]);
                });
          },
          mounted() {
            this.isNeedFixed &&
              ((this.onPageScrollFn = Object(a.a)(this.onPageScroll, 50)),
              l.a.setControlSub(this.handelStickyTop, this, "searchTop"),
              l.a.setCheckItem("searchTop", this.opt.zIndex),
              (this.getHeightcount = 0),
              this.setSearchHeight());
          },
          destroyed() {
            u.default.off(this.pageScrollKey, this.onPageScrollFn);
          },
          methods: {
            setSearchHeight() {
              this.$nextTick(() => {
                u.default.on(this.pageScrollKey, this.onPageScrollFn);
                var e = this.createSelectorQuery();
                e.select("#" + this.searchId).boundingClientRect(),
                  e.exec((e) => {
                    if ((!e || !e[0]) && this.getHeightcount < 3)
                      return (
                        (this.getHeightcount += 1),
                        void setTimeout(() => {
                          this.setSearchHeight();
                        }, 50)
                      );
                    l.a.setWillStickyComponent({
                      name: "searchTop",
                      type: this.isNeedFixedScroll ? "canChange" : "fixed",
                      positionTop: e && e[0].top,
                      elementHeight: e && e[0].height,
                      zIndex: this.zIndex || 110,
                    }),
                      (this.searchHeight = e && e[0].height);
                  });
              });
            },
            handleSearch() {
              var { hotWords: e = [] } = this.opt,
                t = this.getBannerId(),
                s = {
                  et: "click",
                  ei: "click_search",
                  en: "点击搜索",
                  params: {
                    has_hot_search_keys: Number(e.length > 0),
                    banner_id: t,
                    s_type: "search",
                    template_alias: this.featureAlias,
                  },
                };
              this.sendComponentLogger("logger", s);
              var i = { keepWords: this.currentWords || "", banner_id: t };
              this.useSearchPageConfig || (i.oldHots = this.hotSearchKeys),
                null == p.a || p.a.start("search-page"),
                Object(g.a)().dmc.navigate("SearchPage", i);
            },
            handelStickyTop(e) {
              var { type: t, stickyTop: s = 0 } = e;
              "stickyTop" === t && (this.stickyTop = s);
            },
            onPageScroll(e) {
              this.isNeedFixed &&
                this.createSelectorQuery()
                  .select("#" + this.searchId)
                  .boundingClientRect((t) => {
                    if (t) {
                      var s = t.bottom;
                      this.isStartFixed &&
                        (this.searchHeight
                          ? (s += this.searchHeight)
                          : (s = s + this.opt.height + 10));
                      var i =
                        e.scrollTop === this.currentPageY
                          ? "bottom" === this.lastDirection
                          : e.scrollTop > this.currentPageY;
                      (this.lastDirection = i ? "bottom" : "up"),
                        (this.currentPageY = e.scrollTop);
                      var o = t.height,
                        a = !1;
                      if (
                        (i
                          ? ((a = t.top < l.a.getHasTop()),
                            this.isNeedFixedScroll && (o = 0))
                          : (a =
                              s <=
                              l.a.getHasTop() -
                                (this.isStartFixed ? 0 : this.stickyTop)),
                        e.scrollTop <= 0 && (a = !1),
                        a !== this.isStartFixed)
                      ) {
                        l.a.setItem("searchTop", o, a);
                        var { positionTop: r = 0 } =
                          l.a.getItem("searchTop") || {};
                        (this.isStartFixed = a), (this.stickyTop = r);
                      }
                      if (this.isNeedFixedScroll && a) {
                        var h = !i;
                        if (h !== this.isFixed) {
                          (this.isFixed = h),
                            l.a.setItem(
                              "searchTop",
                              this.isFixed ? t.height : 0,
                              a
                            );
                          var { positionTop: c = 0 } =
                            l.a.getItem("searchTop") || {};
                          (this.isStartFixed = a),
                            (this.stickyTop = this.isFixed ? c : c - t.height);
                        }
                      }
                    }
                  })
                  .exec();
            },
            handleSwiperChange(e) {
              this.currentWords = this.hotSearchKeys[e.detail.current] || "";
            },
            handleScan() {
              this.scanGoodsBarCode();
            },
            scanGoodsBarCode() {
              i.default.$native.scanCode({
                onlyFromCamera: !0,
                scanType: "barCode",
                success: (e) => {
                  var t,
                    { result: s } = e;
                  ((t = { barcode: s }),
                  d.a.get({
                    url: "/wsctrade/scancodebuy/goodsquery/list-by-barcode.json",
                    data: t,
                  }))
                    .then(function (e) {
                      void 0 === e && (e = {});
                      var { successList: t = [] } = e,
                        i = t[0];
                      0 === t.length
                        ? o.a.fail("商品条码未录入，请联系营业员")
                        : t.length > 1
                        ? Object(g.a)().dmc.navigate("Search", {
                            q: s,
                            searchType: 2,
                          })
                        : Object(g.a)().dmc.navigate("GoodsDetail", {
                            alias: i.alias,
                          });
                    })
                    .catch((e) => {
                      var { msg: t } = e;
                      o.a.fail(t);
                    });
                },
              });
            },
          },
          ud: !0,
        };
      t.default = i.default.component(f);
    },
  })
);
