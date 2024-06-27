"use strict";
var r = require("~/r");
r(
  "Vo02",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Vo02: function (t, e, a) {
      a.r(e);
      var o = a("Fcif"),
        i = a("u8kV"),
        r = a("9KEa"),
        s = a("svh/"),
        n = a("QLod"),
        { windowWidth: l } = Object(r.b)();
      Object(i.b)({
        properties: {
          styleColorCustomFontColor: { type: String, value: "black" },
          styleColorCustomBackgroundColor: { type: String, value: "#ffffff" },
          titleSwitch: { type: String, value: "1" },
          titleContentType: { type: String, value: "text" },
          titleImageUrl: { type: String, value: "" },
          titlePosition: { type: String, value: "center" },
          searchSwitch: { type: String, value: "0" },
          searchPosition: { type: String, value: "center" },
          shortcutSwitch: { type: String, value: "0" },
          navigationbarConfigType: { type: String, value: "global" },
          shortcutList: { type: Array, value: [] },
          styleColorCustomType: { type: String, value: "gaussianblur" },
          title: { type: String, value: "" },
          navigationbarType: {
            type: String,
            value: "",
            observer: "setObserveComponentData",
          },
          styleColorType: { type: String, value: "global" },
          paddingTop: {
            type: Number,
            value: 0,
            observer: "setObserveComponentData",
          },
          showMenuMain: { type: Boolean, value: !1 },
          immersionUpShow: {
            type: Boolean,
            value: !1,
            observer: "setObserveComponentData",
          },
          height: {
            type: Number,
            value: 0,
            observer: "setObserveComponentData",
          },
          switchPageOptions: Object,
          isReservation: Boolean,
        },
        data: {
          clientWidth: l,
          bgStyle: "",
          isImmersion: !1,
          colorType: "black",
          centerWidth: 0,
          centerStyle: "",
          iconImageType: "",
          navPaddingTop: 0,
          navHeight: 44,
          caclComplete: !1,
        },
        mapData: Object(o.a)({}, Object(s.h)("/", ["shop"])),
        attached() {},
        methods: {
          onIconClick(t) {
            this.triggerEvent("immersionTap", { key: t.detail.key });
          },
          setObserveComponentData() {
            var t = "immersion" === this.data.navigationbarType,
              e = "transition: all 0.1s ease-out";
            (("purecolor" === this.data.styleColorCustomType && !t) ||
              ("standard" === this.data.navigationbarType &&
                "global" === this.data.styleColorType) ||
              (this.data.immersionUpShow &&
                "standard" !== this.data.navigationbarType &&
                "gaussianblur" !== this.data.styleColorCustomType)) &&
              (e =
                "background-color: " +
                this.data.styleColorCustomBackgroundColor +
                ";transition: all 0.1s ease-out;"),
              wx.setNavigationBarColor({
                frontColor:
                  "black" === this.data.styleColorCustomFontColor
                    ? "#000000"
                    : "#ffffff",
                backgroundColor: "#ffffff",
              });
            var a = wx.getMenuButtonBoundingClientRect(),
              o = l - a.left,
              i =
                ("1" === this.data.titleSwitch &&
                  "left" === this.data.titlePosition) ||
                ("1" === this.data.searchSwitch &&
                  "left" === this.data.searchPosition) ||
                "1" === this.data.shortcutSwitch
                  ? 126
                  : o;
            t &&
              !this.data.immersionUpShow &&
              "gaussianblur" !== this.data.styleColorCustomType &&
              (i += 8);
            var r =
                "width: " +
                (l - 2 * Math.max(o, i) - 20) +
                "px;position: absolute;left: " +
                (i + 10) +
                "px;top: 0;display: flex;align-items: center;height: 44px;justify-content: center;",
              s = "standard";
            s =
              "standard" === this.data.navigationbarType
                ? "standard"
                : this.data.immersionUpShow
                ? "after_slide"
                : "before_slide";
            var p = Object(n.f)(this.data.height);
            this.setYZData({
              colorType: this.data.styleColorCustomFontColor,
              navPaddingTop: p,
              navHeight: 44,
              isImmersion: t,
              bgStyle: e,
              centerStyle: r,
              iconImageType: s,
              caclComplete: !0,
            });
          },
          handleShare() {
            this.triggerEvent("share");
          },
        },
      });
    },
  })
);
