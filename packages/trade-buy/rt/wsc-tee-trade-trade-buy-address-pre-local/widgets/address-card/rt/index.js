"use strict";
var r = require("~/r");
r(
  "eKn9",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "4Oq2": function (e, t, n) {
        n.d(t, "a", function () {
          return f;
        }),
          n.d(t, "b", function () {
            return l;
          });
        var i = n("9ZMt"),
          o = n("twMw"),
          r = n("NgLJ"),
          s = n.n(r),
          a = n("MLLI"),
          d = {
            bottom: 58,
            height: 32,
            left: 278,
            right: 365,
            top: 26,
            width: 87,
            canUseNav: !0,
          },
          c = { inited: !1, rectInfo: {} },
          u = function () {
            var e,
              t = o.a.statusBarHeight,
              n = void 0 === t ? 20 : t,
              r = o.a.isAndroid,
              a = o.a.SDKVersion,
              d = n + (r ? 48 : 44);
            try {
              e = i.default.$native.getMenuButtonBoundingClientRect();
            } catch (e) {}
            return (
              e || (e = Object.create(null)),
              a && (e.canUseNav = s()("2.5.2", a) < 1),
              (e.top = e.top || d),
              (c.rectInfo = e),
              (c.inited = !0),
              e
            );
          },
          f = Object.create(null);
        function l() {
          var e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0],
            t = f.top,
            n = f.height,
            i = f.canUseNav,
            r = e ? o.a : Object(a.b)(),
            s = r.statusBarHeight,
            d = void 0 === s ? 20 : s,
            c = t - d + 6 + n + d,
            u = c <= 105 ? c : 105;
          return i ? u : 0;
        }
        Object.keys(d).forEach(function (e) {
          Object.defineProperty(f, e, {
            get: function () {
              if (!c.inited || (!c.rectInfo[e] && "canUseNav" !== e)) {
                var t = u()[e];
                return t || !1 === t ? t : (setTimeout(u, 300), d[e]);
              }
              return c.rectInfo[e];
            },
          });
        });
      },
      eKn9: function (e, t, n) {
        n.r(t);
        var i = n("rVsy"),
          o = n("YeA1"),
          r = {
            mixins: [i.a],
            props: {
              show: Boolean,
              expressType: String,
              currentAddress: Object,
              addressEditable: Boolean,
              showGrouponHeader: Boolean,
              showPoiPrompt: Boolean,
              hasAddress: Boolean,
              maskedTel: String,
              area: String,
              addressDetail: String,
              addressVisible: Boolean,
              cloudConfig: {
                type: Object,
                default: () => ({
                  addressTipsBackgroundColor: "",
                  addressTipsPadding: "",
                }),
              },
            },
            data: () => ({ themeTag: {} }),
            computed: {
              addressTipsStyle() {
                var e = "",
                  { addressTipsBackgroundColor: t, addressTipsPadding: n } =
                    this.cloudConfig;
                return (
                  t && (e += "background-color: " + t + ";"),
                  n && (e += "padding: " + n),
                  e
                );
              },
            },
            created() {
              Object(o.b)(this, ["themeTag"]);
            },
            methods: {
              onClick() {
                this.$emit("onClick");
              },
              onEdit() {
                this.$emit("onEdit");
              },
            },
            ud: !0,
          },
          s = n("9ZMt");
        t.default = s.default.component(r);
      },
      twMw: function (e, t, n) {
        n.d(t, "a", function () {
          return r;
        });
        var i = n("9ZMt"),
          o = {
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
        o.isFetching ||
          ((o.isFetching = !0),
          i.default.$native.getSystemInfo &&
            i.default.$native.getSystemInfo({
              success: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                (o.systemInfo = e), (o.inited = !0);
              },
              fail: function (e) {},
              complete: function () {
                o.isFetching = !1;
              },
            }));
        var r = Object.create(null);
        Object.keys(o.systemInfo).forEach(function (e) {
          Object.defineProperty(r, e, {
            get: function () {
              return o.inited
                ? o.systemInfo[e]
                : (i.default.$native.getSystemInfoSync &&
                    ((o.systemInfo = i.default.$native.getSystemInfoSync()),
                    (o.inited = !0)),
                  o.systemInfo)[e];
            },
          });
        }),
          Object.defineProperty(r, "isAndroid", {
            get: function () {
              return /android/i.test(r.system);
            },
          }),
          Object.defineProperty(r, "isIphoneX", {
            get: function () {
              return /iphone x/i.test(r.model);
            },
          }),
          (t.b = function () {
            return (
              !o.inited &&
                i.default.$native.getSystemInfoSync &&
                ((o.systemInfo = i.default.$native.getSystemInfoSync()),
                (o.inited = !0)),
              o.systemInfo
            );
          });
      },
    }
  )
);
