"use strict";
var r = require("~/r");
r(
  "t6rY",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "/+Uc": function (e, t, s) {
        s.d(t, "b", function () {
          return a;
        }),
          s.d(t, "a", function () {
            return r;
          });
        var i = s("US/N"),
          n = s("Uol7");
        var o = null;
        function a() {
          return null == o
            ? Object(i.requestUseCdn)({
                origin: "cashier",
                withCredentials: !0,
                method: "GET",
                path: "/wsctrade/uic/address/getAllRegion.json",
                data: { showOversea: !0 },
                config: n.a,
              }).then(function (e) {
                return (o = e), e;
              })
            : Promise.resolve(o);
        }
        function r(e) {
          return (
            (e = String(e)),
            a().then(function (t) {
              var s = t.county_list,
                i = t.city_list,
                n = t.province_list[1e4 * Math.floor(e / 1e4)] || "",
                o = i[100 * Math.floor(e / 100)] || "",
                a = s[e] || "";
              return "9" === e[0]
                ? { country: o, province: a, areaCode: e }
                : { province: n, city: o, county: a, areaCode: e };
            })
          );
        }
      },
      "7lfQ": function (e, t, s) {
        s.d(t, "a", function () {
          return n;
        });
        var i = s("9ZMt");
        t.b = function (e) {
          return new Promise(function (t, s) {
            i.default.$native.getSetting({
              success: function (n) {
                n.authSetting[e]
                  ? t()
                  : i.default.$native.authorize({
                      scope: e,
                      success: t,
                      fail: s,
                    });
              },
              fail: s,
            });
          });
        };
        var n = function (e) {
          return new Promise(function (t, s) {
            i.default.$native.getSetting({
              success: function (s) {
                s.authSetting[e] ? t(!0) : t(!1);
              },
              fail: s,
            });
          });
        };
      },
      Hrzu: function (e, t, s) {
        s.d(t, "a", function () {
          return r;
        });
        var i = s("US/N"),
          n = s("Uol7");
        function o() {
          return Object(i.default)({
            origin: "cashier",
            withCredentials: !0,
            method: "POST",
            path: "/wsctrade/uic/address/getAddressList.json",
            config: n.a,
          });
        }
        var a = [],
          r = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return !e && a.length > 0
              ? Promise.resolve(a)
              : o()
                  .then(function (e) {
                    return (a = e), e;
                  })
                  .catch(function () {
                    return (a = []), [];
                  });
          };
      },
      U6vv: function (e, t, s) {
        s.d(t, "a", function () {
          return n;
        });
        var i = s("US/N");
        function n(e) {
          return Object(i.default)({
            origin: "cashier",
            withCredentials: !0,
            path: "/wsctrade/location/getRegionModelByName.json",
            method: "GET",
            data: { lat: e.lat, lon: e.lng },
          });
        }
      },
      Uol7: function (e, t, s) {
        s.d(t, "a", function () {
          return i;
        });
        var i = { skipKdtId: !0, skipShopInfo: !0 };
      },
      t6rY: function (e, t, s) {
        s.r(t);
        var i = s("AGZf"),
          n = s("YeA1"),
          o = s("QNtA"),
          a = s.n(o),
          r = s("LKlL"),
          d = s.n(r),
          u = s("9+gc"),
          h = s.n(u),
          c = s("38pn"),
          l = s("j1X+"),
          p = s("8cCh"),
          f = s("QfO8"),
          m = s("+BXj"),
          g = s("x/ZN"),
          w = {
            data: () => ({
              inWhiteList: !1,
              showComponent: !1,
              showTime: !1,
              showDefaultTimeTips: !1,
              showPopup: !1,
              showTips: !1,
              isAddressManualSelected: !1,
              isIphone: Object(c.a)(),
              region: {
                province: { code: "", name: "" },
                city: { code: "", name: "" },
                county: { code: "", name: "" },
                id: void 0,
                detail: "",
                latitude: 0,
                longitude: 0,
              },
              timeDesc: null,
              addressDesc: "选择地区查看预计送达时间",
              tagIndex: null,
              formattedAddress: "",
              themeTag: {},
            }),
            computed: {
              show() {
                return this.inWhiteList && this.showComponent;
              },
              showDefaultAddressTips() {
                var { province: e, city: t, county: s } = this.region;
                return !(e.code && t.code && s.code);
              },
              address() {
                if (this.showDefaultAddressTips) return "";
                var {
                    province: e,
                    city: t,
                    county: s,
                    detail: i,
                  } = this.region,
                  n = e.name + " " + t.name + " " + s.name;
                return i && (n += " " + i), n;
              },
              addressClass() {
                var e = ["address"];
                return (
                  this.showDefaultAddressTips && e.push("address-tips"),
                  !this.showDefaultAddressTips &&
                    !this.isIphone &&
                    e.push("address__ellipsis-reverse"),
                  e.join(" ")
                );
              },
              tagName() {
                var e = null;
                return (
                  null !== this.tagIndex && (e = m.a.getTagName(this.tagIndex)),
                  e
                );
              },
            },
            watch: {
              show(e, t) {
                e && !t && f.a.showComponent();
              },
              showDefaultAddressTips(e) {
                e && f.a.showAddressShouldSelect(), e || f.a.showAddress();
              },
              showDefaultTimeTips(e) {
                e && f.a.showAddressNotSupported();
              },
              tagIndex(e) {
                null !== e && f.a.showTags(e);
              },
              address() {
                this.formatAddress();
              },
            },
            created() {
              Object(n.b)(this, [
                "logisticsTimeliness",
                "goodsBaseInfo",
                "themeTag",
              ]),
                Object(n.d)(this, { goodsSetupReady: this.init });
            },
            mounted() {},
            destroyed() {
              p.a.destroyed(), l.a.destroyed(), f.a.destroyed();
            },
            methods: {
              init() {
                p.a.init(this.ctx),
                  l.a.init(this.ctx),
                  f.a.init(this.ctx),
                  g.a.inWhiteList().then((e) => {
                    if (((this.inWhiteList = e), this.inWhiteList)) {
                      var { showDeliveryModule: t = !1 } =
                        this.logisticsTimeliness || {};
                      t &&
                        p.a
                          .getUserAddress()
                          .then(this.processUserAddress)
                          .then(() => new Promise((e) => setTimeout(e, 1e3)))
                          .then(this.formatAddress);
                    }
                  });
              },
              processUserAddress(e) {
                var { buyerAddressInfo: t = {} } = this.logisticsTimeliness,
                  {
                    provinceName: s,
                    cityName: i,
                    countyName: n,
                    addressDetail: o,
                  } = t;
                if (e) {
                  var {
                    province: a,
                    city: r,
                    county: d,
                    latitude: u,
                    longitude: h,
                  } = e;
                  this.updateRegion(e),
                    "" + a.name + r.name + d.name == "" + s + i + n
                      ? this.updateShowState(this.logisticsTimeliness)
                      : this.updateTimelinessInfo(d.code, u, h);
                } else {
                  if (s && i && n) {
                    var c = s + " " + i + " " + n;
                    o && (c += " " + o), this.updateAddressDesc(c);
                  }
                  this.updateShowState(this.logisticsTimeliness);
                }
                return (
                  this.showDefaultAddressTips && f.a.showAddressShouldSelect(),
                  Promise.resolve()
                );
              },
              updateTimelinessInfo(e, t, s) {
                var i,
                  n,
                  o = {
                    alias:
                      (null == (i = this.ctx.data) ||
                      null == (n = i.goodsBaseInfo)
                        ? void 0
                        : n.alias) || 0,
                    buyerRegionId: e,
                  };
                return (
                  t && s && ((o.lat = t), (o.lon = s)),
                  g.a
                    .getTimelinessInfo(o)
                    .then(this.updateShowState)
                    .catch(() => {
                      this.showTime = !1;
                    })
                );
              },
              updateShowState(e) {
                var {
                  showDeliveryModule: t = !1,
                  showDeliveryTime: s = !1,
                  estimateDeliveryTimeDesc: i,
                  estimateDeliveryLabel: n = -1,
                  estimateDeliveryTime: o,
                  calculateWay: r,
                } = e;
                if (
                  ((this.showComponent = t),
                  (this.showTime = s),
                  (this.timeDesc = i),
                  (this.tagIndex = n),
                  (this.showTips = !!r),
                  !s && i
                    ? ((this.showTime = !0), (this.showDefaultTimeTips = !0))
                    : (this.showDefaultTimeTips = !1),
                  o && -1 === n)
                ) {
                  var u = a()(o, "YYYY-MM-DD");
                  this.tagIndex = [3, 4, 5, 6, 7, 8, 9, 10].find((e) =>
                    d()(u, h()(e, new Date()))
                  );
                }
                this.showTime &&
                  !this.showDefaultTimeTips &&
                  f.a.showTime(this.showTips, this.tagIndex);
              },
              updateRegion(e) {
                this.region = e;
              },
              updateAddressDesc(e) {
                this.addressDesc = e;
              },
              onCellClick() {
                this.showDefaultAddressTips
                  ? (f.a.clickAddressShouldSelect(),
                    l.a
                      .authorizeLocation()
                      .then(
                        () => (
                          this.updateAddressDesc("正在定位，请稍候..."),
                          l.a.getCurrentRegion()
                        )
                      )
                      .then((e) => {
                        this.updateAddressDesc("选择地区查看预计送达时间");
                        var { county: t, latitude: s, longitude: i } = e;
                        this.updateRegion(e),
                          this.updateTimelinessInfo(t.code, s, i);
                      })
                      .catch(() => {
                        this.updateAddressDesc("选择地区查看预计送达时间"),
                          this.onPopupShow();
                      }))
                  : (f.a.clickAddress(), this.onPopupShow());
              },
              onTipsClick() {
                Object(i.a)({
                  message:
                    "送达时间为智能预测，仅供参考；\n最终送达时间请以实际签收为准。",
                  duration: 3e3,
                  forbidClick: !0,
                });
              },
              onPopupShow() {
                this.showPopup = !0;
              },
              onPopupClose() {
                this.showPopup = !1;
              },
              onPopupSelect(e) {
                (this.isAddressManualSelected = !0), this.updateRegion(e);
                var { county: t, latitude: s, longitude: i } = e;
                this.updateTimelinessInfo(t.code, s, i);
              },
              formatAddress() {
                var { address: e } = this;
                this.isIphone || (this.formattedAddress = e);
              },
            },
            ud: !0,
          },
          v = s("9ZMt");
        t.default = v.default.component(w);
      },
    }
  )
);
