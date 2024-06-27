"use strict";
var r = require("~/r");
r(
  "aqnt",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      aqnt: function (o, t, s) {
        s.r(t);
        var e = s("Fcif"),
          i = s("eijD"),
          n = s("US/N"),
          h = s("mztD"),
          a = s("YeA1"),
          c = s("kOvJ"),
          u = {
            props: { kdtId: String, color: String },
            data: () => ({
              show: !1,
              showPop: !1,
              auth: !1,
              coupons: [],
              unavailableCoupons: [],
              chosen: {},
              loading: !1,
              emptyImage: Object(h.a)("vant/coupon-empty.png"),
            }),
            logicData: () => ({ couponVal: 0 }),
            computed: {
              couponTxt() {
                return this.auth
                  ? this.couponVal > 0
                    ? "-¥ " + this.couponVal
                    : "选择优惠券"
                  : "授权获取卡券";
              },
            },
            watch: {
              show(o) {
                o && this.genChosenCoupons();
              },
            },
            created() {
              this.check();
            },
            methods: {
              init() {
                Object(a.b)(this, {
                  meituanCoupons(o) {
                    var { coupons: t, unavailableCoupons: s } = o;
                    (this._originCoupons = t),
                      (this._originUnavailableCoupons = s),
                      this.genChosenCoupons(),
                      (this.coupons = Object(c.a)(t, s, this.chosen)),
                      (this.couponVal = t
                        .reduce(
                          (o, t) => (t.choose && (o += +t.valueDesc), o),
                          0
                        )
                        .toFixed(2));
                  },
                }),
                  (this.hasPull = !1),
                  (this.pullDown = !1),
                  (this.isLink = !1),
                  (this.extra = {}),
                  (this.cache = Promise.resolve()),
                  Object(a.d)(this, {
                    "lifecycle:pageShow": () => this.check(),
                  });
              },
              genChosenCoupons() {
                (this.chosen = (this._originCoupons || []).reduce(
                  (o, t) => (t.choose && (o[t.id] = !0), o),
                  {}
                )),
                  (this.ctx.data.meituanCoupons.chosen = this.chosen);
              },
              check() {
                Object(n.default)({ path: "/retail/h5/meituan/info.json" })
                  .then((o) => {
                    var {
                      showChannelCoupon: t,
                      userHasAuth: s,
                      extraDataDTO: e,
                    } = o;
                    (this.extra = e),
                      (this.auth = s),
                      !this.show && t && ((this.show = t), this.init()),
                      this.auth && this.isLink
                        ? ((this.isLink = !1),
                          (this.cache =
                            this.ctx.process.invokePipe("confirmOrder")))
                        : this.auth &&
                          !this.hasPull &&
                          (this.cache = this.onPull({ loading: !1 }));
                  })
                  .catch(() => ({}));
              },
              onPull(o) {
                var t = this;
                return Object(i.a)(function* () {
                  t.hasPull ||
                    ((t.hasPull = !0),
                    yield Object(n.default)({
                      path: "/retail/h5/meituan/exchange.json",
                    }),
                    yield t.ctx.process.invokePipe("confirmOrder", o),
                    (t.pullDown = !0));
                })();
              },
              onClick() {
                var o = this;
                return Object(i.a)(function* () {
                  if (!o.auth)
                    return (
                      (o.isLink = !0),
                      void wx.navigateToMiniProgram({
                        appId: "wxde8ac0a21135c07d",
                        path: "/dynamic-page/index?scene=verify-bulk-comp|openplatform-verify-bulk",
                        envVersion: "release",
                        extraData: o.extra,
                      })
                    );
                  o.pullDown ||
                    ((o.loading = !0),
                    yield o.cache.catch(() => {}),
                    (o.loading = !1),
                    (o.pullDown = !0)),
                    (o.showPop = !0);
                })();
              },
              onCancel() {
                (this.ctx.data.meituanCoupons.chosen = {}),
                  this.ctx.process.invoke("confirmOrder"),
                  (this.showPop = !1);
              },
              onClose() {
                this.showPop = !1;
              },
              onChoose(o) {
                var { available: t, id: s } = o;
                t &&
                  ((this.chosen = Object(e.a)({}, this.chosen, {
                    [s]: !this.chosen[s],
                  })),
                  this.chosen[s] || delete this.chosen[s],
                  (this.coupons = Object(c.a)(
                    this._originCoupons,
                    this._originUnavailableCoupons,
                    this.chosen
                  )));
              },
              onConfirm() {
                (this.ctx.data.meituanCoupons.chosen = this.chosen),
                  this.ctx.process.invoke("confirmOrder"),
                  (this.showPop = !1);
              },
            },
            ud: !0,
          },
          r = s("9ZMt");
        t.default = r.default.component(u);
      },
    }
  )
);
