"use strict";
(exports.ids = [25]),
  (exports.modules = {
    "0Uhl": function (e, t, a) {
      a.d(t, "e", function () {
        return s;
      }),
        a.d(t, "f", function () {
          return d;
        }),
        a.d(t, "c", function () {
          return n;
        }),
        a.d(t, "d", function () {
          return i;
        }),
        a.d(t, "a", function () {
          return c;
        }),
        a.d(t, "b", function () {
          return u;
        }),
        a.d(t, "g", function () {
          return l;
        });
      var r = a("Fcif");
      function o(e, t) {
        e.logger && e.logger.log(t);
      }
      function s(e, t) {
        var { address: a } = t;
        o({
          et: "custom",
          ei: "keep_address",
          en: "保存并使用",
          params: a,
          si: e.data.kdtId,
        });
      }
      function d(e) {
        o(e, { et: "click", ei: "position", en: "定位", si: e.data.kdtId });
      }
      function n(e) {
        o(e, {
          et: "view",
          ei: "address_edit_component_view",
          en: "用户地址编辑组件曝光",
          params: {
            spm: e.logger.getPageSpm(),
            component: "address_edit_component",
          },
        });
      }
      function i(e, t) {
        o({
          et: "custom",
          ei: "address_edit_component_hide",
          en: "用户地址编辑组件隐藏",
          params: { order_scene: t, component: "address_edit_component" },
        });
      }
      function c(e, t) {
        o(e, Object(r.a)({ et: "click", pt: "createAddress" }, t));
      }
      function u(e, t) {
        o(e, Object(r.a)({ et: "custom", pt: "createAddress" }, t));
      }
      function l(e, t) {
        o(e, Object(r.a)({ et: "view", pt: "createAddress" }, t));
      }
    },
    "1Kiv": function (e, t) {
      e.exports = {
        d: "cloudData;0",
        p: "ecloud:showGetWechatAddress",
        pi: "",
      };
    },
    "2b8o": function (e, t, a) {
      var r = a("Fcif"),
        o = a("OT1j"),
        s = a("9ZMt"),
        d = a("IJzb"),
        n = a("60i3"),
        i = a("Sgnz"),
        c = a.n(i),
        u = a("eDrx"),
        l = a.n(u);
      class g {
        constructor(e) {
          this.ctx = e.ctx;
        }
        onPageShow() {
          this.ctx.event.emit("autoGetClipboardData");
        }
        onPageHide() {
          this.clearClipboardData();
        }
        pageDestroyed() {
          this.clearClipboardData();
        }
        clearClipboardData() {
          wx.setClipboardData({
            data: "",
            success: () => {
              wx.showLoading({ title: "" }),
                setTimeout(() => {
                  wx.hideLoading();
                }, 250);
            },
          });
        }
      }
      g.widgets = { Main: c.a, CurrentAddress: l.a };
      var p = a("kOiO");
      var h = {
          "@wsc-tee-trade/trade-buy-location": d.a,
          "@ext-tee-wsc-decorate/theme-color": n.a,
          "@wsc-tee-trade/trade-buy-address-edit": g,
          "@wsc-tee-trade/trade-buy-platform-address": p.a,
          "@ext-tee-wsc-trade/address-edit-ecloud": class {
            constructor(e) {
              var { ctx: t } = e;
              (this.ctx = e.ctx),
                (this.ctx.data.cloudData = {
                  displayConfig: { isShowWechatAddress: !0 },
                });
              var a = (function (e) {
                return {
                  showGetWechatAddress: function (t) {
                    void 0 === t && (t = !1),
                      (e.data.cloudData.displayConfig.isShowWechatAddress = t);
                  },
                };
              })(t);
              Object.keys(a).forEach((e) => {
                var t = a[e];
                this.ctx.process.define("ecloud:" + e, t);
              });
            }
          },
        },
        f = { config: o.a, builtinBundle: h },
        b = s.default.getGlobal("ranta-app-runtime"),
        m = b.getPageOptions({
          rantaOptions: Object(r.a)(
            { page: "/packages/trade-buy-subpage/order/address-edit/index" },
            f
          ),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: b,
          tee: s.default,
          usedLifecycles: ["onPageShow", "onPageHide", "pageDestroyed"],
        });
      s.default.page({
        mixins: [
          m,
          {
            data: () => ({
              hideSkeleton: !1,
              deviceType: "",
              pageClassName: "page",
              pageDeviceClass: "page-",
              fixedBottom: !0,
              pageBgColor: "#f2f2f2",
              globalCustomLoading: "",
            }),
            computed: {
              pageContainerStyle: () =>
                "iPhone-X" === getApp().deviceType
                  ? "padding-bottom: 138px;"
                  : "padding-bottom: 104px;",
              pageContainerItemStyle: () => "min-height: calc(100vh - 90px)",
            },
            beforeMount() {
              var e = getApp();
              this.pageDeviceClass =
                this.pageDeviceClass + (e.deviceType || "");
            },
            created() {
              var e = getApp();
              (this.globalCustomLoading = e.globalData.globalCustomLoading),
                e.on("trade-buy-data-loaded", this.handleTradeBuyDataLoaded),
                e.on("trade-buy-page-bg-color", this.setPageBgColor);
            },
            destroyed() {
              var e = getApp();
              e.off("trade-buy-data-loaded", this.handleTradeBuyDataLoaded),
                e.off("trade-buy-page-bg-color", this.setPageBgColor);
            },
            methods: {
              setPageBgColor(e) {
                e && (this.pageBgColor = e);
              },
              handleTradeBuyDataLoaded() {
                this.hideSkeleton = !0;
              },
            },
          },
        ],
      });
    },
    "60i3": function (e, t, a) {
      a.d(t, "a", function () {
        return f;
      });
      var r = a("Fcif"),
        o = a("US/N"),
        s = a("9ZMt"),
        d = a("MLLI"),
        n = a("50K0"),
        i = a("F6OL"),
        c = a("3tyi");
      function u(e, t) {
        void 0 === t && (t = "");
        var a = "";
        return (
          "object" != typeof e ||
            null == e ||
            Object.keys(e).forEach((r) => {
              a +=
                "" +
                t +
                (r.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() + ":") +
                e[r] +
                ";";
            }),
          a
        );
      }
      var l = {
        general: "#f44",
        "main-bg": "#f44",
        "main-text": "#fff",
        "vice-bg": "#f85",
        "vice-text": "#fff",
        "start-bg": "#ff6060",
        "end-bg": "#f44",
      };
      function g(e) {
        return "object" != typeof e || null == e
          ? ""
          : Object.keys(e)
              .map((t) => {
                var a = e[t];
                return "object" == typeof a
                  ? "--" +
                      t +
                      ": linear-gradient(to right, " +
                      a.start +
                      ", " +
                      a.end +
                      ")"
                  : "--" + t + ": " + a;
              })
              .join(";")
              .concat(";");
      }
      var p = { themeCSS: g(l), themeColors: l, shopStyleSettings: {} };
      var h = {};
      class f {
        constructor(e) {
          var { ctx: t } = e;
          (this.ctx = t),
            (this.isSupportCssVar = (function () {
              var { platform: e } = Object(d.b)();
              if ("ios" !== e) return !0;
              var { system: t } = s.default.$native.getSystemInfoSync();
              return Object(i.compareVersions)(t.split(" ")[1], "9.3") > -1;
            })()),
            (this.unwatch = null);
          var { kdtId: a } = t.data;
          (null != a && 0 != +a && this.isSupportCssVar) || this.setCtxData(p),
            this.prefetchThemeCSS(a),
            (this.unwatch = t.watch("kdtId", (e) => {
              !this.isSupportCssVar ||
                ("number" != typeof e && "string" != typeof e) ||
                0 == +e ||
                this.update(e);
            })),
            this.ctx.process.define("updateAppStyle", (e) => {
              var { shopStyleSettings: t = {} } = this.ctx.data,
                {
                  colors: a = {},
                  radius: o = {},
                  tag: s = {},
                  icon: d = {},
                } = e,
                n = Object(r.a)({}, t, {
                  colors: a,
                  radius: o,
                  tag: s,
                  icon: d,
                });
              (n.css = this.transformThemeCSS(n)),
                this.setCtxData(
                  Object(r.a)({}, this.buildThemeObj(n), { themeCSS: n.css })
                );
            });
        }
        prefetchThemeCSS(e) {
          return n.a
            .getMiniappPrefetchData("shopStyle")
            .then((t) => {
              if (!t) return this.fetchThemeCSS(e);
              this.setCtxData(this.handleThemeCSS(t));
            })
            .catch(() => {
              this.fetchThemeCSS(e);
            });
        }
        pageDestroyed() {
          this.unwatch();
        }
        update(e) {
          if (
            (function (e) {
              return (
                ("number" == typeof e || "string" == typeof e) && null != h[e]
              );
            })(e)
          )
            return this.setCtxData(h[e]);
          this.isUpdating ||
            ((this.isUpdating = !0),
            this.fetchThemeCSS(e)
              .then((t) => {
                (this.isUpdating = !1), (h[e] = t), this.setCtxData(t);
              })
              .catch(() => {
                this.setCtxData(p), (this.isUpdating = !1);
              }));
        }
        fetchThemeCSS(e) {
          return (function (e) {
            var t = null == e ? {} : { kdt_id: e };
            return Object(o.default)({
              path: "/wscshop/shop/shop_wide_style.json",
              query: t,
            });
          })(e).then((e) => this.handleThemeCSS(e));
        }
        handleThemeCSS(e) {
          var t, a;
          if (!e) return {};
          var o =
              null == (t = e.all_shop_styles)
                ? void 0
                : t.find((e) => "brand" === e.shop_style_type),
            s = o
              ? Object(c.a)(o, ["colors", "radius", "tag", "icon", "button"])
              : {};
          return (
            (e =
              (null == (a = e.all_shop_styles)
                ? void 0
                : a.find((e) => "market" === e.shop_style_type)) || e),
            Object(r.a)({}, this.buildThemeObj(e), {
              themeType: e.type,
              themeCSS: e.global_theme_vars || e.globalThemeVars || g(e.colors),
              shopStyleSettings: s,
            })
          );
        }
        buildThemeObj(e) {
          return e
            ? {
                themeColors: e.colors,
                themeIcon: e.icon,
                themeTag: e.tag,
                themeRadius: e.radius,
                themeButton: e.button,
              }
            : {};
        }
        transformThemeCSS(e) {
          var t,
            a,
            { colors: r, radius: o, tag: s, button: d } = e;
          return (
            g(r) +
            u(o, "--theme-radius-") +
            ((t = s),
            (a = ""),
            Object.keys(t).forEach((e) => {
              e.indexOf("brand-") > -1
                ? (a += "--" + e + ":" + t[e] + ";")
                : e.indexOf("tag-") > -1 &&
                  (a += "--theme-" + e + ":" + t[e] + ";");
            }),
            a) +
            (function (e) {
              return u(e, "--theme-");
            })(d)
          );
        }
        setCtxData(e) {
          Object.keys(e).forEach((t) => {
            this.ctx.data[t] = e[t];
          });
        }
      }
      f.lambdas = {
        hexToRgb: function (e) {
          var t = 0,
            a = 0,
            r = 0,
            o = (e) => parseInt(e, 16);
          if (3 === (e = e.slice(1)).length || 6 === e.length)
            return (
              3 === e.length
                ? ((t = 17 * o(e[0])), (a = 17 * o(e[1])), (r = 17 * o(e[2])))
                : ((t = o(e[1]) + 16 * o(e[0])),
                  (a = o(e[3]) + 16 * o(e[2])),
                  (r = o(e[5]) + 16 * o(e[4]))),
              [t, a, r]
            );
        },
        objectToCSS: u,
      };
    },
    "6taM": function (e, t, a) {
      var r = a("Fcif"),
        o = a("OT1j"),
        s = a("9ZMt"),
        d = a("IJzb"),
        n = a("2naY"),
        i = a.n(n),
        c = a("BGy8"),
        u = a.n(c),
        l = a("sF/+"),
        g = a.n(l);
      class p {
        constructor(e) {
          this.ctx = e.ctx;
        }
        onPageShow() {
          this.ctx.event.emit("addressMapPageShow");
        }
      }
      p.widgets = { Main: i.a, Search: u.a, AMap: g.a };
      var h = {
          "@wsc-tee-trade/trade-buy-location": d.a,
          "@wsc-tee-trade/trade-buy-address-map": p,
        },
        f = { config: o.a, builtinBundle: h },
        b = s.default.getGlobal("ranta-app-runtime"),
        m = b.getPageOptions({
          rantaOptions: Object(r.a)(
            { page: "/packages/trade-buy-subpage/order/address-map/index" },
            f
          ),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: b,
          tee: s.default,
          usedLifecycles: ["onPageShow"],
        });
      s.default.page({
        mixins: [
          m,
          {
            data: () => ({
              hideSkeleton: !1,
              deviceType: "",
              pageClassName: "page",
              pageDeviceClass: "page-",
              fixedBottom: !0,
              pageBgColor: "#f2f2f2",
              globalCustomLoading: "",
            }),
            computed: {
              pageContainerStyle: () =>
                "iPhone-X" === getApp().deviceType
                  ? "padding-bottom: 138px;"
                  : "padding-bottom: 104px;",
              pageContainerItemStyle: () => "min-height: calc(100vh - 90px)",
            },
            beforeMount() {
              var e = getApp();
              this.pageDeviceClass =
                this.pageDeviceClass + (e.deviceType || "");
            },
            created() {
              var e = getApp();
              (this.globalCustomLoading = e.globalData.globalCustomLoading),
                e.on("trade-buy-data-loaded", this.handleTradeBuyDataLoaded),
                e.on("trade-buy-page-bg-color", this.setPageBgColor);
            },
            destroyed() {
              var e = getApp();
              e.off("trade-buy-data-loaded", this.handleTradeBuyDataLoaded),
                e.off("trade-buy-page-bg-color", this.setPageBgColor);
            },
            methods: {
              setPageBgColor(e) {
                e && (this.pageBgColor = e);
              },
              handleTradeBuyDataLoaded() {
                this.hideSkeleton = !0;
              },
            },
          },
        ],
      });
    },
    "6xq1": function (e, t) {
      e.exports = { l: "h5CompressUpload" };
    },
    A4CD: function (e, t, a) {
      a.d(t, "a", function () {
        return o;
      }),
        a.d(t, "b", function () {
          return s;
        });
      var r = a("mztD"),
        o = (e) => {
          var { latitude: t, longitude: a, markerLabel: o } = e;
          return {
            latitude: t,
            longitude: a,
            markers: [
              {
                latitude: t,
                longitude: a,
                iconPath: Object(r.a)(
                  "public_files/2019/05/23/a10e32e4bfeae621727c760f97274654.png"
                ),
                width: "22px",
                height: "22px",
                anchor: { x: 0, y: 0 },
              },
            ],
            markerLabel: o,
          };
        },
        s = (e, t, a, r) =>
          ["中国" !== e ? e : "", t, a, r]
            .filter((e) => null != e && "" !== e)
            .join(" / ");
    },
    B3iA: function (e, t, a) {
      t.a = { addressDowngrade: "address_downgrade" };
    },
    Crmo: function (e, t, a) {
      a.d(t, "a", function () {
        return r;
      });
      var r = (e) => {
        var [t, a] = e;
        return (
          "\n    --button-danger-background-color: " +
          a +
          ";\n    --button-danger-border-color: " +
          a +
          ";\n    --switch-on-background-color: " +
          a +
          ";\n    "
        );
      };
    },
    "E/De": function (e, t) {
      e.exports = {
        d: "kdtId;4",
        e: "",
        el: "",
        w: "",
        wc: "",
        l: "parseDistance;calcDistance;baiduToGcj;gcjToBaidu;geocoder;calculateDistance",
        lc: "",
        p: "searchAddress;reverseGeocoder",
        pi: "",
        c: "",
        cc: "",
      };
    },
    IJzb: function (e, t, a) {
      a.d(t, "a", function () {
        return u;
      });
      var r = a("MqXn");
      function o() {
        var e = getCurrentPages() || [];
        return e.length ? e[e.length - 1].route : "";
      }
      var s = a("Sipi");
      function d() {
        var e,
          t,
          a = {
            "packages/order": new r.a({
              key: "XBXBZ-FU6EF-S6ZJZ-JI7ZL-OXMP5-T2F73",
            }),
            __default: new r.a({
              key:
                (null == (e = Object(s.b)("_ADDRESS_MAP_KEY_")) ||
                null == (t = e.qqmap)
                  ? void 0
                  : t.key) || "DE4BZ-X6DCP-WUNDV-L4DDA-6NWA7-3CBSO",
            }),
          },
          o = getCurrentPages() || [],
          d = (o[o.length - 1] || {}).route || "";
        return a[Object.keys(a).find((e) => d.indexOf(e) > -1)] || a.__default;
      }
      function n(e) {
        return new Promise((t, a) => {
          (e.success = t), (e.fail = a);
          var r,
            s,
            n = d();
          (r = this.ctx),
            (s = n.key),
            r.logger &&
              r.logger.log({
                et: "custom",
                ei: "get_suggestion",
                en: "关键词输入提示",
                params: { route: o(), key: s },
                si: r.data.kdtId,
              }),
            n.getSuggestion(e);
        });
      }
      function i(e) {
        return new Promise((t, a) => {
          (e.success = t), (e.fail = a);
          var r,
            s,
            n = d();
          (r = this.ctx),
            (s = n.key),
            r.logger &&
              r.logger.log({
                et: "custom",
                ei: "reverse_geocoder",
                en: "逆地址解析",
                params: { route: o(), key: s },
                si: r.data.kdtId,
              }),
            n.reverseGeocoder(e);
        });
      }
      function c(e) {
        return (e * Math.PI) / 180;
      }
      class u {
        constructor(e) {
          (this.ctx = e.ctx),
            this.ctx.process.define("searchAddress", n.bind(this)),
            this.ctx.process.define("reverseGeocoder", i.bind(this));
        }
      }
      u.lambdas = {
        parseDistance: function (e) {
          return e
            ? (e =
                (e = +e || 0) > 1e4
                  ? "> 10km"
                  : e > 1e3
                  ? (e / 1e3).toFixed(2) + "km"
                  : e < 100
                  ? "< 100m"
                  : e.toFixed(2) + "m")
            : 0;
        },
        calcDistance: function (e, t) {
          var a = c(+e.lat),
            r = c(+t.lat),
            o = a - r,
            s = c(+e.lng) - c(+t.lng),
            d =
              2 *
              Math.asin(
                Math.sqrt(
                  Math.pow(Math.sin(o / 2), 2) +
                    Math.cos(a) * Math.cos(r) * Math.pow(Math.sin(s / 2), 2)
                )
              );
          return (d *= 6378.137), (d = Math.round(1e4 * d) / 1e4);
        },
        baiduToGcj: function (e, t) {
          var a = (3e3 * Math.PI) / 180,
            r = e - 0.0065,
            o = t - 0.006,
            s = Math.sqrt(r * r + o * o) - 2e-5 * Math.sin(o * a),
            d = Math.atan2(o, r) - 3e-6 * Math.cos(r * a);
          return { lng: (e = s * Math.cos(d)), lat: (t = s * Math.sin(d)) };
        },
        gcjToBaidu: function (e, t) {
          var a;
          e && (null == (a = String(e).split(".")[1]) || a.length);
          var r = (3e3 * Math.PI) / 180,
            o = e,
            s = t,
            d = Math.sqrt(o * o + s * s) + 2e-5 * Math.sin(s * r),
            n = Math.atan2(s, o) + 3e-6 * Math.cos(o * r);
          return {
            lng: (e = d * Math.cos(n) + 0.0065),
            lat: (t = d * Math.sin(n) + 0.006),
          };
        },
        geocoder: function (e) {
          return new Promise((t, a) => {
            (e.success = t), (e.fail = a), d().geocoder(e);
          });
        },
        calculateDistance: function (e) {
          var { from: t, to: a, mode: r = "walking" } = e;
          return new Promise((e, o) => {
            d().calculateDistance({
              mode: r,
              from: t,
              to: [a],
              success: (t) => {
                try {
                  var { distance: a } = t.result.elements[0];
                  e(a);
                } catch (e) {
                  o();
                }
              },
              fail: o,
            });
          });
        },
      };
    },
    IXZG: function (e, t, a) {
      var r = a("Fcif"),
        o = a("OT1j"),
        s = a("9ZMt"),
        d = a("kijC"),
        n = a.n(d),
        i = a("hw0c"),
        c = a.n(i);
      class u {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      u.widgets = { Main: n.a, GetPhoneButton: c.a };
      var l = { "@wsc-tee-trade/trade-buy-contact-page": u },
        g = { config: o.a, builtinBundle: l },
        p = s.default.getGlobal("ranta-app-runtime"),
        h = p.getPageOptions({
          rantaOptions: Object(r.a)(
            { page: "/packages/trade-buy-subpage/order/contact/index" },
            g
          ),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: p,
          tee: s.default,
          usedLifecycles: [],
        });
      s.default.page({
        mixins: [
          h,
          {
            data: () => ({
              hideSkeleton: !1,
              deviceType: "",
              pageClassName: "page",
              pageDeviceClass: "page-",
              fixedBottom: !0,
              pageBgColor: "#f2f2f2",
              globalCustomLoading: "",
            }),
            computed: {
              pageContainerStyle: () =>
                "iPhone-X" === getApp().deviceType
                  ? "padding-bottom: 138px;"
                  : "padding-bottom: 104px;",
              pageContainerItemStyle: () => "min-height: calc(100vh - 90px)",
            },
            beforeMount() {
              var e = getApp();
              this.pageDeviceClass =
                this.pageDeviceClass + (e.deviceType || "");
            },
            created() {
              var e = getApp();
              (this.globalCustomLoading = e.globalData.globalCustomLoading),
                e.on("trade-buy-data-loaded", this.handleTradeBuyDataLoaded),
                e.on("trade-buy-page-bg-color", this.setPageBgColor);
            },
            destroyed() {
              var e = getApp();
              e.off("trade-buy-data-loaded", this.handleTradeBuyDataLoaded),
                e.off("trade-buy-page-bg-color", this.setPageBgColor);
            },
            methods: {
              setPageBgColor(e) {
                e && (this.pageBgColor = e);
              },
              handleTradeBuyDataLoaded() {
                this.hideSkeleton = !0;
              },
            },
          },
        ],
      });
    },
    KWWy: function (e, t, a) {
      var r = a("Fcif"),
        o = a("OT1j"),
        s = a("9ZMt"),
        d = a("m9nd"),
        n = a.n(d);
      class i {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      i.widgets = { Main: n.a };
      var c = {
          "@wsc-tee-trade/trade-buy-address-city-page": i,
          "@wsc-tee-trade/trade-buy-location": a("IJzb").a,
        },
        u = { config: o.a, builtinBundle: c },
        l = s.default.getGlobal("ranta-app-runtime"),
        g = l.getPageOptions({
          rantaOptions: Object(r.a)(
            { page: "/packages/trade-buy-subpage/order/address-city/index" },
            u
          ),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: l,
          tee: s.default,
          usedLifecycles: [],
        });
      s.default.page({
        mixins: [
          g,
          {
            data: () => ({
              hideSkeleton: !1,
              deviceType: "",
              pageClassName: "page",
              pageDeviceClass: "page-",
              fixedBottom: !0,
              pageBgColor: "#f2f2f2",
              globalCustomLoading: "",
            }),
            computed: {
              pageContainerStyle: () =>
                "iPhone-X" === getApp().deviceType
                  ? "padding-bottom: 138px;"
                  : "padding-bottom: 104px;",
              pageContainerItemStyle: () => "min-height: calc(100vh - 90px)",
            },
            beforeMount() {
              var e = getApp();
              this.pageDeviceClass =
                this.pageDeviceClass + (e.deviceType || "");
            },
            created() {
              var e = getApp();
              (this.globalCustomLoading = e.globalData.globalCustomLoading),
                e.on("trade-buy-data-loaded", this.handleTradeBuyDataLoaded),
                e.on("trade-buy-page-bg-color", this.setPageBgColor);
            },
            destroyed() {
              var e = getApp();
              e.off("trade-buy-data-loaded", this.handleTradeBuyDataLoaded),
                e.off("trade-buy-page-bg-color", this.setPageBgColor);
            },
            methods: {
              setPageBgColor(e) {
                e && (this.pageBgColor = e);
              },
              handleTradeBuyDataLoaded() {
                this.hideSkeleton = !0;
              },
            },
          },
        ],
      });
    },
    ONo4: function (e, t, a) {},
    OT1j: function (e, t, a) {
      var r = a("esrA"),
        o = "@wsc-tee-trade/trade-buy-address-city-page",
        s = "@wsc-tee-trade/trade-buy-location",
        d = "@ext-tee-wsc-decorate/theme-color",
        n = "@wsc-tee-trade/trade-buy-address-edit",
        i = "@wsc-tee-trade/trade-buy-platform-address",
        c = "@ext-tee-wsc-trade/address-edit-ecloud",
        u = "@wsc-tee-trade/trade-buy-address-map",
        l = "@wsc-tee-trade/trade-buy-contact-page",
        g = "@wsc-tee-trade/trade-buy-drug-history",
        p = "@wsc-tee-trade/trade-buy-drug-manual",
        h = "@wsc-tee-trade/trade-buy-drug-message",
        f = "@wsc-tee-trade/trade-buy-compress-upload",
        b = "@wsc-tee-trade/trade-buy-drug-user",
        m = "@wsc-tee-trade/trade-buy-self-fetch-address-city",
        y = "@wsc-tee-trade/trade-buy-self-fetch-address",
        v = Object(r.a)({
          a: {
            p: [
              {
                r: ["/packages/trade-buy-subpage/order/address-city/index"],
                c: [{ t: "m", c: ["b37-0"] }],
                m: ["b37-1"],
              },
              {
                r: ["/packages/trade-buy-subpage/order/address-edit/index"],
                c: [{ t: "m", c: ["b37-4"] }],
                m: ["b37-2", "b37-3", "b37-5", "b37-6"],
              },
              {
                r: ["/packages/trade-buy-subpage/order/address-map/index"],
                c: [{ t: "m", c: ["b37-8"] }],
                m: ["b37-7"],
              },
              {
                r: ["/packages/trade-buy-subpage/order/contact/index"],
                c: [{ t: "m", c: ["b37-9"] }],
                m: [],
              },
              {
                r: [
                  "/packages/trade-buy-subpage/order/self-fetch-address-city/index",
                ],
                c: [{ t: "m", c: ["b37-16"] }],
                m: ["b37-15"],
              },
              {
                r: [
                  "/packages/trade-buy-subpage/order/self-fetch-address/index",
                ],
                c: [{ t: "m", c: ["b37-18"] }],
                m: ["b37-17", "b37-19"],
              },
            ],
          },
          m: [
            ["b37-0", o, null],
            ["b37-1", s, null],
            ["b37-2", s, null],
            [
              "b37-3",
              d,
              { d: { kdtId: "@wsc-tee-trade/trade-buy-page-comm~9b4cea5e" } },
            ],
            [
              "b37-4",
              n,
              {
                d: {
                  themeColors: "@ext-tee-wsc-decorate/theme-color~EKBphALO",
                  themeCSS: "@ext-tee-wsc-decorate/theme-color~EKBphALO",
                  kdtId: null,
                },
                w: { AliAddress: null, WxAddress: null },
              },
            ],
            ["b37-5", i, null],
            ["b37-6", c, null],
            ["b37-7", s, null],
            ["b37-8", u, null],
            [
              "b37-9",
              l,
              {
                w: {
                  UserAuthorize: [
                    "@passport-tee/user-authorize~DDdJBmWG",
                    "Main",
                  ],
                },
              },
            ],
            ["b37-10", g, null],
            ["b37-11", p, null],
            ["b37-12", h, null],
            ["b37-13", f, null],
            ["b37-14", b, null],
            ["b37-15", s, null],
            ["b37-16", m, null],
            ["b37-17", s, null],
            [
              "b37-18",
              y,
              {
                d: {
                  themeColors: "@ext-tee-wsc-decorate/theme-color~EKBphALO",
                  themeCSS: "@ext-tee-wsc-decorate/theme-color~EKBphALO",
                },
              },
            ],
            [
              "b37-19",
              d,
              { d: { kdtId: "@wsc-tee-trade/trade-buy-page-comm~9b4cea5e" } },
            ],
          ],
          e: [
            [o, a("Ww/M")],
            [s, a("E/De")],
            [d, a("oZkc")],
            [n, a("revs")],
            [i, a("kZ3u")],
            [c, a("1Kiv")],
            [u, a("rYKq")],
            [l, a("aZRh")],
            [g, a("w8F/")],
            [p, a("wcAl")],
            [h, a("pvgl")],
            [f, a("6xq1")],
            [b, a("upG9")],
            [m, a("OhfJ")],
            [y, a("J03g")],
          ],
        });
      t.a = v;
    },
    PgCt: function (e, t, a) {
      var r = a("Fcif"),
        o = a("OT1j"),
        s = a("9ZMt"),
        d = a("IJzb"),
        n = a("+pJB"),
        i = {
          "@wsc-tee-trade/trade-buy-location": d.a,
          "@wsc-tee-trade/trade-buy-self-fetch-address-city": n.a,
        },
        c = { config: o.a, builtinBundle: i },
        u = s.default.getGlobal("ranta-app-runtime"),
        l = u.getPageOptions({
          rantaOptions: Object(r.a)(
            {
              page: "/packages/trade-buy-subpage/order/self-fetch-address-city/index",
            },
            c
          ),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: u,
          tee: s.default,
          usedLifecycles: [],
        });
      s.default.page({
        mixins: [
          l,
          {
            data: () => ({
              hideSkeleton: !1,
              deviceType: "",
              pageClassName: "page",
              pageDeviceClass: "page-",
              fixedBottom: !0,
              pageBgColor: "#f2f2f2",
              globalCustomLoading: "",
            }),
            computed: {
              pageContainerStyle: () =>
                "iPhone-X" === getApp().deviceType
                  ? "padding-bottom: 138px;"
                  : "padding-bottom: 104px;",
              pageContainerItemStyle: () => "min-height: calc(100vh - 90px)",
            },
            beforeMount() {
              var e = getApp();
              this.pageDeviceClass =
                this.pageDeviceClass + (e.deviceType || "");
            },
            created() {
              var e = getApp();
              (this.globalCustomLoading = e.globalData.globalCustomLoading),
                e.on("trade-buy-data-loaded", this.handleTradeBuyDataLoaded),
                e.on("trade-buy-page-bg-color", this.setPageBgColor);
            },
            destroyed() {
              var e = getApp();
              e.off("trade-buy-data-loaded", this.handleTradeBuyDataLoaded),
                e.off("trade-buy-page-bg-color", this.setPageBgColor);
            },
            methods: {
              setPageBgColor(e) {
                e && (this.pageBgColor = e);
              },
              handleTradeBuyDataLoaded() {
                this.hideSkeleton = !0;
              },
            },
          },
        ],
      });
    },
    "Ww/M": function (e, t) {
      e.exports = {
        w: "Main",
        wd: "Main",
        lc: "triggerEvent",
        pi: "reverseGeocoder;locateCity;tryLocation",
      };
    },
    aZRh: function (e, t) {
      e.exports = {
        d: "themeColors;4;themeVars;4;kdtId;4",
        w: "GetPhoneButton;Main",
        wc: "UserAuthorize;GetPhoneButton",
        wd: "Main",
        lc: "getDb;triggerEvent;getHashQuery",
        pi: "goToH5SubPage",
      };
    },
    cO2P: function (e, t, a) {
      a.d(t, "a", function () {
        return s;
      });
      var r = a("US/N"),
        o = a("Uol7");
      function s(e) {
        return Object(r.default)({
          origin: "cashier",
          withCredentials: !0,
          method: "POST",
          path: "/wsctrade/uic/address/parseAddress.json",
          data: e,
          config: o.a,
        });
      }
    },
    d57A: function (e, t, a) {
      a.d(t, "a", function () {
        return o;
      });
      var r = a("US/N");
      function o(e) {
        return Object(r.default)({
          origin: "cashier",
          withCredentials: !0,
          path: "/wsctrade/multistore/selfFetchPoint/getCity.json",
          method: "GET",
          data: { lat: e.lat, lon: e.lng },
        });
      }
    },
    fiSk: function (e, t, a) {
      a.d(t, "a", function () {
        return s;
      });
      var r = a("US/N"),
        o = a("Uol7");
      function s(e) {
        return Object(r.default)({
          origin: "cashier",
          withCredentials: !0,
          method: "POST",
          path: "/wsctrade/uic/address/deleteAddress.json",
          data: { addressId: e },
          config: o.a,
        });
      }
    },
    g5XO: function (e, t, a) {},
    hP7w: function (e, t, a) {},
    jNR8: function (e, t, a) {
      a.d(t, "a", function () {
        return o;
      });
      var r = a("US/N");
      function o() {
        return Object(r.default)({
          origin: "cashier",
          withCredentials: !0,
          path: "/wsctrade/uic/address/getRegionByLevel.json",
          method: "GET",
          data: { level: 2 },
        });
      }
    },
    jlkG: function (e, t, a) {
      var r = a("Fcif"),
        o = a("OT1j"),
        s = a("9ZMt"),
        d = a("IJzb"),
        n = a("YJBp"),
        i = a("60i3"),
        c = {
          "@wsc-tee-trade/trade-buy-location": d.a,
          "@wsc-tee-trade/trade-buy-self-fetch-address": n.a,
          "@ext-tee-wsc-decorate/theme-color": i.a,
        },
        u = { config: o.a, builtinBundle: c },
        l = s.default.getGlobal("ranta-app-runtime"),
        g = l.getPageOptions({
          rantaOptions: Object(r.a)(
            {
              page: "/packages/trade-buy-subpage/order/self-fetch-address/index",
            },
            u
          ),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: l,
          tee: s.default,
          usedLifecycles: [],
        });
      s.default.page({
        mixins: [
          g,
          {
            data: () => ({
              hideSkeleton: !1,
              deviceType: "",
              pageClassName: "page",
              pageDeviceClass: "page-",
              fixedBottom: !0,
              pageBgColor: "#f2f2f2",
              globalCustomLoading: "",
            }),
            computed: {
              pageContainerStyle: () =>
                "iPhone-X" === getApp().deviceType
                  ? "padding-bottom: 138px;"
                  : "padding-bottom: 104px;",
              pageContainerItemStyle: () => "min-height: calc(100vh - 90px)",
            },
            beforeMount() {
              var e = getApp();
              this.pageDeviceClass =
                this.pageDeviceClass + (e.deviceType || "");
            },
            created() {
              var e = getApp();
              (this.globalCustomLoading = e.globalData.globalCustomLoading),
                e.on("trade-buy-data-loaded", this.handleTradeBuyDataLoaded),
                e.on("trade-buy-page-bg-color", this.setPageBgColor);
            },
            destroyed() {
              var e = getApp();
              e.off("trade-buy-data-loaded", this.handleTradeBuyDataLoaded),
                e.off("trade-buy-page-bg-color", this.setPageBgColor);
            },
            methods: {
              setPageBgColor(e) {
                e && (this.pageBgColor = e);
              },
              handleTradeBuyDataLoaded() {
                this.hideSkeleton = !0;
              },
            },
          },
        ],
      });
    },
    kDYA: function (e, t, a) {
      a.d(t, "c", function () {
        return s;
      }),
        a.d(t, "a", function () {
          return d;
        }),
        a.d(t, "b", function () {
          return n;
        });
      var r = a("eijD"),
        o = a("US/N"),
        s = (e) => {
          var t = e.id ? "update" : "add",
            { userName: a, telephone: r, id: s } = e;
          return ("add" !== t || (a && r)) && ("update" !== t || s)
            ? Object(o.requestV2)({
                origin: "cashier",
                withCredentials: !0,
                method: "POST",
                path: "/wsctrade/uic/contact/" + t + "Contact.json",
                data: e,
              })
            : Promise.reject("参数缺失");
        },
        d = (e) =>
          Object(o.requestV2)({
            origin: "cashier",
            withCredentials: !0,
            method: "POST",
            path: "/wsctrade/uic/contact/deleteContact.json",
            data: { contactId: e },
          }),
        n = (function () {
          var e = Object(r.a)(function* () {
            var e = {};
            try {
              var t = yield Object(o.default)({
                origin: "cashier",
                withCredentials: !0,
                method: "GET",
                path: "/wsctrade/apollo-config.json",
                data: {
                  namespace: "wsc-h5-trade.application",
                  key: "contact-edit-page-text",
                },
              });
              t["contact-edit-page-text"] &&
                (e = JSON.parse(t["contact-edit-page-text"]));
            } catch (e) {}
            return e;
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
    },
    pvgl: function (e, t) {
      e.exports = {
        d: "drugdata;2;drugdata;6",
        e: "onMyPageShow",
        el: "onMyPageShow",
        w: "Main;UserList;Card;Msgs;Submit;User;Imgs;DrugList",
        wc: "UserList;Card;Msgs;Submit;User;Imgs;DrugList",
        wd: "Main",
        l: "",
        lc: "getDb;setDb;onEvent;offEvent;triggerEvent;h5CompressUpload",
        li: "onPageShow",
      };
    },
    rN0V: function (e, t, a) {
      a("US/N");
    },
    rYKq: function (e, t) {
      e.exports = {
        d: "kdtId;4;themeColors;4;locateCityInfo;4;isDirectPushRoute;4",
        e: "addressMapPageShow",
        el: "addressMapPageShow",
        w: "Search;AMap;Main",
        wc: "Search;AMap",
        wd: "Main",
        lc: "triggerEvent;onEvent;offEvent;gcjToBaidu;baiduToGcj;amap",
        pi: "searchAddress;reverseGeocoder;locateCity;tryLocation",
        li: "onPageShow",
      };
    },
    revs: function (e, t) {
      e.exports = {
        d: "themeColors;4;themeCSS;4;kdtId;4;isDirectPushRoute;4",
        e: "autoGetClipboardData",
        el: "autoGetClipboardData",
        w: "CurrentAddress;Main",
        wc: "CurrentAddress;WechatAddress;WxAddress;AliAddress",
        wd: "Main",
        lc: "onEvent;triggerEvent;getDb;deleteDb;geocoder;amap;getHashQuery;gcjToBaidu;baiduToGcj;offEvent;getKsLocation;getAuthType",
        pi: "reverseGeocoder;searchAddress;tryLocation",
        li: "onPageShow;onPageHide;pageDestroyed",
      };
    },
    u8NR: function (e, t, a) {
      function r(e, t) {
        e.logger &&
          e.logger.log({
            et: "click",
            ei: "use_search_address",
            en: "使用当前搜索地址",
            params: t,
            si: e.data.kdtId,
          });
      }
      a.d(t, "a", function () {
        return r;
      });
    },
    upG9: function (e, t) {
      e.exports = {
        d: "drugdata;0;drugdata;4",
        w: "",
        wc: "",
        wd: "Main",
        l: "",
        lc: "getDb;setDb;onEvent;offEvent;triggerEvent",
      };
    },
    w28D: function (e, t, a) {},
    "w8F/": function (e, t) {
      e.exports = {
        d: "drugdata;0;drugdata;4",
        w: "Main;Old;DrugList",
        wc: "Old;DrugList",
        wd: "Main",
        l: "",
        lc: "getDb;setDb;triggerEvent",
        pi: "",
      };
    },
    wcAl: function (e, t) {
      e.exports = { d: "", w: "Main", wc: "", wd: "Main", l: "", lc: "" };
    },
    ypa2: function (e, t, a) {},
    z08K: function (e, t, a) {},
  });
