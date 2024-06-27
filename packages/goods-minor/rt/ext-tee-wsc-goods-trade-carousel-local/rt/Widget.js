"use strict";
var r = require("~/r");
r(
  "RVU5",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      RVU5: function (e, t, i) {
        i.r(t);
        var s = i("Fcif"),
          o = i("YeA1"),
          r = i("ONqW"),
          a = i("B9AD"),
          h = i("5kq5"),
          d = {
            name: "trade-carousel",
            data: () => ({
              goodsBaseInfo: {},
              shopConfig: {},
              navBarHeight: 0,
              tradeRecords: [],
              customStyle: "",
              topNavHeight: 0,
              visible: !0,
              staticConfig: {},
            }),
            computed: {
              alias() {
                var e;
                return null == (e = this.goodsBaseInfo) ? void 0 : e.alias;
              },
              itemId() {
                var e;
                return null == (e = this.goodsBaseInfo) ? void 0 : e.id;
              },
              goodsTradeMarqueeConfig() {
                return this.shopConfig.goodsTradeMarquee || {};
              },
              showMarquee() {
                return (
                  !!this.alias &&
                  1 == +this.goodsTradeMarqueeConfig.show &&
                  this.visible
                );
              },
              showItemViewCount: () => !1,
              fixedTop() {
                return (
                  (this.navBarHeight ? this.navBarHeight + 8 : 40) +
                  this.topNavHeight +
                  "px"
                );
              },
            },
            watch: {
              showMarquee(e) {
                e
                  ? this.tradeRecords.length > 0
                    ? this.start()
                    : this.getTradeRecords()
                  : this.stop();
              },
              tradeRecords(e) {
                e.length > 0 && this.start();
              },
            },
            created() {
              (this.logger = Object(r.a)()),
                Object(o.b)(this, [
                  "goodsBaseInfo",
                  "shopConfig",
                  "navBarHeight",
                  "topNavHeight",
                  "staticConfig",
                ]),
                Object(o.d)(this, {
                  "trade-carousel:toggle": (e) => {
                    this.visible = !!e;
                  },
                });
            },
            destroyed() {
              this.stop();
            },
            methods: {
              getTradeRecords() {
                var e = [Object(h.b)(this.alias).catch(() => [])];
                this.showItemViewCount &&
                  e.push(Object(h.a)(this.itemId).catch(() => 0)),
                  Promise.all(e).then((e) => {
                    var [t, i = 0] = e,
                      o = (null == t ? void 0 : t.slice(0)) || [];
                    if (i > 0) {
                      var r = {
                          content: "有 " + i + " 人正在浏览此商品",
                          avatar: "",
                          recordType: "view",
                          count: i,
                        },
                        h = o.length <= 1 ? o.length : 2;
                      o.splice(h, 0, r), (this.$_viewRecordIndex = h);
                    }
                    this.tradeRecords = o.map((e) => {
                      var t;
                      return Object(s.a)({}, e, {
                        show: !1,
                        avatar:
                          null != (t = e.avatar)
                            ? t
                            : Object(a.a)(this.staticConfig.tradeCarousel),
                      });
                    });
                  });
              },
              start() {
                var e = (t, i, s) => {
                  var o = t === i - 1 ? 0 : t + 1,
                    r = this.tradeRecords[t];
                  this.move(r, s, () => {
                    0 !== o || void 0 === this.$_viewRecordIndex
                      ? e(o, i)
                      : setTimeout(() => {
                          this.tradeRecords.splice(this.$_viewRecordIndex, 1),
                            (this.$_viewRecordIndex = void 0),
                            this.tradeRecords.length > 0 &&
                              e(o, this.tradeRecords.length);
                        }, 300);
                  });
                };
                e(0, this.tradeRecords.length, !0);
              },
              stop() {
                clearTimeout(this.tid), (this.tid = null);
              },
              move(e, t, i) {
                var s = t ? 1e3 : 2e3;
                this.timeoutPromise(this.moveIn.bind(this, e), s)
                  .then(() =>
                    this.timeoutPromise(this.moveOut.bind(this, e), 2e3)
                  )
                  .then(() => {
                    i();
                  });
              },
              timeoutPromise(e, t) {
                return new Promise((i) => {
                  clearTimeout(this.tid),
                    (this.tid = setTimeout(() => {
                      e(), i();
                    }, t));
                });
              },
              moveIn(e) {
                (e.show = !0),
                  "view" === e.recordType &&
                    (this.$_isViewShown ||
                      ((this.$_isViewShown = !0),
                      this.logger.log({
                        en: "浏览人数-曝光",
                        ei: "item_view_count_view",
                        et: "view",
                        pt: "g",
                        params: { count: e.count, goodsId: this.itemId },
                      })));
              },
              moveOut(e) {
                e.show = !1;
              },
              handleBeforeEnter() {
                this.customStyle = "";
              },
              handleLeave() {
                this.customStyle = "transform: translate3d(0, -100%, 0)";
              },
            },
            ud: !0,
          },
          n = i("9ZMt");
        t.default = n.default.component(d);
      },
    }
  )
);
