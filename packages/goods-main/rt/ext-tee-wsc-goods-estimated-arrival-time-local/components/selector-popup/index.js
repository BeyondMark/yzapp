"use strict";
var r = require("~/r");
r(
  "HTLt",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "/+Uc": function (e, t, s) {
        s.d(t, "b", function () {
          return o;
        }),
          s.d(t, "a", function () {
            return u;
          });
        var i = s("US/N"),
          n = s("Uol7");
        var r = null;
        function o() {
          return null == r
            ? Object(i.requestUseCdn)({
                origin: "cashier",
                withCredentials: !0,
                method: "GET",
                path: "/wsctrade/uic/address/getAllRegion.json",
                data: { showOversea: !0 },
                config: n.a,
              }).then(function (e) {
                return (r = e), e;
              })
            : Promise.resolve(r);
        }
        function u(e) {
          return (
            (e = String(e)),
            o().then(function (t) {
              var s = t.county_list,
                i = t.city_list,
                n = t.province_list[1e4 * Math.floor(e / 1e4)] || "",
                r = i[100 * Math.floor(e / 100)] || "",
                o = s[e] || "";
              return "9" === e[0]
                ? { country: r, province: o, areaCode: e }
                : { province: n, city: r, county: o, areaCode: e };
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
      HTLt: function (e, t, s) {
        s.r(t);
        var i = s("Tewj"),
          n = s("38pn"),
          r = s("8cCh"),
          o = s("cibE"),
          u = s("QfO8"),
          a = { region: "region", address: "address" },
          c = "close",
          d = "select",
          l = "passport-tee-login-end",
          h = {
            props: {
              show: Boolean,
              selectedItem: Object,
              themeTag: Object,
              duration: { type: Number, default: 300 },
            },
            data: () => ({
              SELECTOR_TYPE: a,
              showPopup: !1,
              type: a.address,
              areaList: [],
              userAddressList: [],
            }),
            computed: {
              title() {
                return this.type === a.region
                  ? "请选择所在地区"
                  : this.type === a.address
                  ? "请选择收货地址"
                  : "";
              },
              selectedAddressId() {
                var { id: e } = this.selectedItem;
                return e;
              },
            },
            watch: {
              show(e, t) {
                e && !t
                  ? ((this.showPopup = !0),
                    this.userAddressList.length > 0
                      ? this.switchSelectorType(a.address)
                      : this.switchSelectorType(a.region))
                  : !e && t && (this.showPopup = !1);
              },
            },
            mounted() {
              this.addEventListener(), this.requests();
            },
            destroyed() {
              i.default.off(l, this.requests);
            },
            methods: {
              requests() {
                var e = [r.a.getAreaList(), r.a.getUserAddressList()];
                Promise.all(e).then((e) => {
                  var [t, s] = e;
                  t && (this.areaList = Object(n.b)(t)),
                    s && (this.userAddressList = s);
                });
              },
              addEventListener() {
                i.default.on(l, this.requests);
              },
              switchSelectorType(e) {
                e === a.region
                  ? u.a.showRegionPopup()
                  : e === a.address && u.a.showAddressPopup(),
                  (this.type = e);
              },
              onClose() {
                this.$emit(c);
              },
              onShow() {
                this.type === a.region && this.updateView();
              },
              onSelect(e) {
                this.$emit(d, e);
              },
              onRegionSelected(e) {
                u.a.clickRegionPopup();
                var [t, s, i] = e;
                if (i.code) {
                  var n = { province: t, city: s, county: i };
                  o.a.set(n), this.onSelect(n), this.onClose();
                }
              },
              onAddressSelected(e) {
                u.a.clickAddressPopup();
                var { county: t } = e;
                t.code && (o.a.set(e), this.onSelect(e), this.onClose());
              },
              onButtonClick() {
                this.switchSelectorType(a.region),
                  this.$nextTick(() => {
                    this.updateView();
                  });
              },
              updateView() {
                setTimeout(() => {
                  var e, t;
                  return null == (e = this.$refs) ||
                    null == (t = e.regionSelector)
                    ? void 0
                    : t.updateView();
                }, 300);
              },
            },
            ud: !0,
          },
          f = s("9ZMt");
        t.default = f.default.component(h);
      },
      Hrzu: function (e, t, s) {
        s.d(t, "a", function () {
          return u;
        });
        var i = s("US/N"),
          n = s("Uol7");
        function r() {
          return Object(i.default)({
            origin: "cashier",
            withCredentials: !0,
            method: "POST",
            path: "/wsctrade/uic/address/getAddressList.json",
            config: n.a,
          });
        }
        var o = [],
          u = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return !e && o.length > 0
              ? Promise.resolve(o)
              : r()
                  .then(function (e) {
                    return (o = e), e;
                  })
                  .catch(function () {
                    return (o = []), [];
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
    }
  )
);
