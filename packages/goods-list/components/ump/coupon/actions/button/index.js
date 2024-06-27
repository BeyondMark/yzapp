"use strict";
var r = require("~/r");
r(
  "vvO2",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "6SZ0": function (e, o, t) {
      o.a = Behavior({
        properties: {
          disabled: {
            type: Boolean,
            value: !1,
            observer() {
              this.disabledObserver && this.disabledObserver();
            },
          },
          unavailable: {
            type: Boolean,
            value: !1,
            observer() {
              this.disabledObserver && this.disabledObserver();
            },
          },
        },
      });
    },
    vvO2: function (e, o, t) {
      t.r(o);
      var r = t("u8kV"),
        l = Behavior({
          properties: {
            btnType: {
              type: String,
              value: "normal",
              observer() {
                this.init && this.init();
              },
            },
            btnText: { type: String, value: "" },
            icon: { type: String, optionalTypes: [Boolean], value: "arrow" },
          },
        }),
        b = t("6SZ0"),
        a = t("z0hh"),
        i = [l, b.a, a.a];
      Object(r.c)({
        behaviors: i,
        options: { multipleSlots: !0 },
        data: { btnBoxCls: "", hasIcon: !0 },
        methods: {
          handleClickBtn(e) {
            var { disabled: o, unavailable: t } = this.data;
            o || t || this.triggerEvent("click-btn", e);
          },
          disabledObserver() {
            this.init();
          },
          init() {
            var {
                btnType: e,
                disabled: o,
                unavailable: t,
                icon: r,
              } = this.data,
              l = {
                "coupon-button__box": !0,
                "coupon-button__flat": "flat" === e,
                "coupon-button__disabled": o,
                "coupon-button__unavailable": t,
              };
            this.setYZData({
              hasIcon: !1 !== r,
              btnBoxCls: Object.keys(l)
                .filter((e) => l[e])
                .join(" "),
            });
          },
        },
      });
    },
    z0hh: function (e, o, t) {
      var r = {
        th0: {
          mainColor: "#FF4444",
          borderColor: "#FFD4D4",
          bgColor: "#FFF8F8",
          stamp:
            "https://b.yzcdn.cn/public_files/e3a7a36e71233ec1f14942d28a0dbe29.png",
        },
        th1: {
          mainColor: "#FF5B00",
          borderColor: "#FFDECC",
          bgColor: "#FFF8F5",
          stamp:
            "https://b.yzcdn.cn/public_files/3f3fe2013b5fb5663a40cd886ec7eee0.png",
        },
        th2: {
          mainColor: "#FF547B",
          borderColor: "#FFDAE3",
          bgColor: "#FFF8FA",
          stamp:
            "https://b.yzcdn.cn/public_files/e135b90fa38709233c7e30c42b40e59a.png",
        },
        th3: {
          mainColor: "#FF2E2E",
          borderColor: "#FFD5D5",
          bgColor: "#FFF7F7",
          stamp:
            "https://b.yzcdn.cn/public_files/970f216a1e363dd68c9408b9878bf1f6.png",
        },
        th4: {
          mainColor: "#FF9300",
          borderColor: "#FFEBD1",
          bgColor: "#FFFBF5",
          stamp:
            "https://b.yzcdn.cn/public_files/d31963f99b999c106e0b54bcc3dd2ed9.png",
        },
        th5: {
          mainColor: "#65C4AA",
          borderColor: "#C5EFE3",
          bgColor: "#F5FCFA",
          stamp:
            "https://b.yzcdn.cn/public_files/74ffe0d6e2ca9c9d995d4ee15c9a63c1.png",
        },
        th6: {
          mainColor: "#00A630",
          borderColor: "#C4E9CF",
          bgColor: "#F5FBF7",
          stamp:
            "https://b.yzcdn.cn/public_files/fe61465bed3238436f641412fcac2b05.png",
        },
        th7: {
          mainColor: "#4CBA54",
          borderColor: "#D5EED7",
          bgColor: "#F8FCF8",
          stamp:
            "https://b.yzcdn.cn/public_files/730bb2ebebbe71efef61124c4d815dc6.png",
        },
        th8: {
          mainColor: "#4A90E2",
          borderColor: "#C4E0FB",
          bgColor: "#F5FAFE",
          stamp:
            "https://b.yzcdn.cn/public_files/2cf9921d4c877772d8365f9f396405fa.png",
        },
        th9: {
          mainColor: "#B18836",
          borderColor: "#ECE3D0",
          bgColor: "#FCFAF7",
          stamp:
            "https://b.yzcdn.cn/public_files/833517a976bced482ed2f8cb4d7c4951.png",
        },
        th10: {
          mainColor: "#4A4D52",
          borderColor: "#D5D5D6",
          bgColor: "#F8F8F8",
          stamp:
            "https://b.yzcdn.cn/public_files/58486e1bee95e2544338d5032d1cdd9a.png",
        },
        th11: {
          mainColor: "#A7904B",
          borderColor: "#E9E5D5",
          bgColor: "#FBFBF8",
          stamp:
            "https://b.yzcdn.cn/public_files/e309415ffb4a9b6acec0716151d4d0d0.png",
        },
        th12: {
          mainColor: "#884CFF",
          borderColor: "#E3D5FF",
          bgColor: "#FAF8FF",
          stamp:
            "https://b.yzcdn.cn/public_files/3e71947aa91f4cedc4e15101683a6fe8.png",
        },
        th13: {
          mainColor: "#FA1919",
          borderColor: "#FEC9C9",
          bgColor: "#FFF6F6",
          stamp:
            "https://b.yzcdn.cn/public_files/0f7ec67bfe06d07694d8342bb1f92cb1.png",
        },
      };
      o.a = Behavior({
        properties: {
          themeClass: {
            type: String,
            value: "",
            observer(e) {
              var o = r[e] || {},
                { mainColor: t, borderColor: l, bgColor: b } = o,
                a = "",
                i = "",
                n = "",
                s = "";
              t &&
                l &&
                b &&
                ((a = "color: " + t + ";"),
                (i = "background-color: " + t + ";"),
                (n = "border: 1px solid " + l + ";"),
                (s = "background-color: " + b + ";")),
                this.setYZData({
                  themeConfig: o,
                  themeMainStyle: a,
                  themeBorderStyle: n,
                  themeBgStyle: s,
                  themeMainBgStyle: i,
                }),
                this.themeClassChange && this.themeClassChange(o);
            },
          },
        },
      });
    },
  })
);
