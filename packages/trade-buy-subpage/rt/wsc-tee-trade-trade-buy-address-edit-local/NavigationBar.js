"use strict";
var r = require("~/r");
r(
  "uVaX",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "4Oq2": function (t, e, n) {
      n.d(e, "a", function () {
        return h;
      }),
        n.d(e, "b", function () {
          return d;
        });
      var i = n("9ZMt"),
        a = n("twMw"),
        o = n("NgLJ"),
        s = n.n(o),
        r = n("MLLI"),
        c = {
          bottom: 58,
          height: 32,
          left: 278,
          right: 365,
          top: 26,
          width: 87,
          canUseNav: !0,
        },
        u = { inited: !1, rectInfo: {} },
        f = function () {
          var t,
            e = a.a.statusBarHeight,
            n = void 0 === e ? 20 : e,
            o = a.a.isAndroid,
            r = a.a.SDKVersion,
            c = n + (o ? 48 : 44);
          try {
            t = i.default.$native.getMenuButtonBoundingClientRect();
          } catch (t) {}
          return (
            t || (t = Object.create(null)),
            r && (t.canUseNav = s()("2.5.2", r) < 1),
            (t.top = t.top || c),
            (u.rectInfo = t),
            (u.inited = !0),
            t
          );
        },
        h = Object.create(null);
      function d() {
        var t =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          e = h.top,
          n = h.height,
          i = h.canUseNav,
          o = t ? a.a : Object(r.b)(),
          s = o.statusBarHeight,
          c = void 0 === s ? 20 : s,
          u = e - c + 6 + n + c,
          f = u <= 105 ? u : 105;
        return i ? f : 0;
      }
      Object.keys(c).forEach(function (t) {
        Object.defineProperty(h, t, {
          get: function () {
            if (!u.inited || (!u.rectInfo[t] && "canUseNav" !== t)) {
              var e = f()[t];
              return e || !1 === e ? e : (setTimeout(f, 300), c[t]);
            }
            return u.rectInfo[t];
          },
        });
      });
    },
    twMw: function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      });
      var i = n("9ZMt"),
        a = {
          inited: !1,
          isFetching: !1,
          systemInfo: {
            SDKVersion: "",
            batteryLevel: 100,
            benchmarkLevel: 1,
            brand: "",
            fontSizeSetting: 16,
            language: "zh",
            model: "",
            pixelRatio: 1,
            platform: "",
            screenHeight: 0,
            screenWidth: 0,
            statusBarHeight: 0,
            system: "",
            version: "",
            windowHeight: 0,
            windowWidth: 0,
          },
        };
      a.isFetching ||
        ((a.isFetching = !0),
        i.default.$native.getSystemInfo &&
          i.default.$native.getSystemInfo({
            success: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              (a.systemInfo = t), (a.inited = !0);
            },
            fail: function (t) {},
            complete: function () {
              a.isFetching = !1;
            },
          }));
      var o = Object.create(null);
      Object.keys(a.systemInfo).forEach(function (t) {
        Object.defineProperty(o, t, {
          get: function () {
            return a.inited
              ? a.systemInfo[t]
              : (i.default.$native.getSystemInfoSync &&
                  ((a.systemInfo = i.default.$native.getSystemInfoSync()),
                  (a.inited = !0)),
                a.systemInfo)[t];
          },
        });
      }),
        Object.defineProperty(o, "isAndroid", {
          get: function () {
            return /android/i.test(o.system);
          },
        }),
        Object.defineProperty(o, "isIphoneX", {
          get: function () {
            return /iphone x/i.test(o.model);
          },
        }),
        (e.b = function () {
          return (
            !a.inited &&
              i.default.$native.getSystemInfoSync &&
              ((a.systemInfo = i.default.$native.getSystemInfoSync()),
              (a.inited = !0)),
            a.systemInfo
          );
        });
    },
    uVaX: function (t, e, n) {
      n.r(e);
      var i = n("Fcif"),
        a = n("9ZMt"),
        o = n("R2NP"),
        s = n("4Oq2"),
        r = n("twMw"),
        c = {
          props: {
            titleText: String,
            themeColors: { type: Object, default: () => ({}) },
          },
          data: () => ({
            showBackupDialog: !1,
            canUseNav: !1,
            navBarInfo: {
              titleText: "",
              height: 0,
              paddingTop: 0,
              fontSizeSetting: 0,
              textWidth: 0,
              customIconStyle: "",
            },
          }),
          watch: {
            titleText() {
              var { canUseNav: t } = s.a;
              t
                ? (this.navBarInfo = Object(i.a)({}, this.navBarInfo, {
                    titleText: this.titleText,
                  }))
                : Object(o.b)(this.titleText);
            },
          },
          beforeMount() {
            var { canUseNav: t } = s.a;
            t && this.initNavBar(), (this.canUseNav = t);
          },
          methods: {
            initNavBar() {
              var t = Object(r.b)(),
                { statusBarHeight: e, windowWidth: n, fontSizeSetting: a } = t,
                { top: o, height: c, right: u, width: f } = s.a,
                h = Object(s.b)(),
                d = n - u,
                l = n - 2 * f - 4 * d,
                g =
                  "width: " +
                  c +
                  "px;height: " +
                  c +
                  "px;left: " +
                  d +
                  "px;top: " +
                  o +
                  "px;";
              this.navBarInfo = Object(i.a)({}, this.navBarInfo, {
                height: h,
                paddingTop: e,
                fontSizeSetting: a,
                textWidth: l,
                customIconStyle: g,
              });
            },
            onClickBtnBack(t) {
              switch (t) {
                case "leave":
                  a.default.navigateBack();
                  break;
                case "save":
                  this.$emit("handleSave"),
                    (this.showBackupDialog = !1),
                    this.$emit("setShowMarkerLabel");
                  break;
                default:
                  (this.showBackupDialog = !1),
                    this.$emit("setShowMarkerLabel");
              }
            },
            onBackTap() {
              (this.showBackupDialog = !0),
                this.$emit("setCloseMarkerLabel"),
                this.$emit("closeAnalyzeDialog");
            },
          },
          ud: !0,
        };
      e.default = a.default.component(c);
    },
  })
);
