"use strict";
var r = require("~/r");
r(
  "Dmh1",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "6SZ0": function (o, e, l) {
      e.a = Behavior({
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
    Dmh1: function (o, e, l) {
      l.r(e);
      var s = l("u8kV"),
        r = l("6SZ0"),
        a = l("z0hh"),
        t = [r.a, a.a];
      Object(s.c)({
        behaviors: t,
        externalClasses: ["custom-class", "custom-action-class"],
        options: { multipleSlots: !0 },
        properties: {
          displayType: {
            type: String,
            value: "card",
            observer: "computedClass",
          },
          noBoxshadow: { type: Boolean, observer: "computedClass" },
          collapse: {
            type: Number,
            default: 0,
            observer() {
              this.computedClass(), this.computedCollapseCls();
            },
          },
        },
        data: { boxCls: "", collapseCls: "", showCollapse: !1 },
        methods: {
          disabledObserver() {
            this.computedClass();
          },
          computedClass() {
            var {
                displayType: o,
                noBoxshadow: e,
                collapse: l,
                disabled: s,
                unavailable: r,
              } = this.data,
              a = "flat" === o,
              t = {
                "coupon-box__box": !0,
                "coupon-box__flat": a,
                "coupon-box__card": !a,
                "coupon-box__disabled": s,
                "coupon-box__unavailable": r,
                "coupon-box__no-boxshadow": e,
                "coupon-box__show-collapse": l > 1,
              };
            this.setYZData({
              boxCls: Object.keys(t)
                .filter((o) => t[o])
                .join(" "),
            });
          },
          computedCollapseCls() {
            var { collapse: o } = this.data,
              e = o > 1,
              l = {
                "coupon-box__collapse": !0,
                ["coupon-box__collapse-" + Math.min(o || 0, 3)]: e,
              };
            this.setYZData({
              showCollapse: e,
              collapseCls: Object.keys(l)
                .filter((o) => l[o])
                .join(" "),
            });
          },
        },
      });
    },
    z0hh: function (o, e, l) {
      var s = {
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
      e.a = Behavior({
        properties: {
          themeClass: {
            type: String,
            value: "",
            observer(o) {
              var e = s[o] || {},
                { mainColor: l, borderColor: r, bgColor: a } = e,
                t = "",
                b = "",
                c = "",
                p = "";
              l &&
                r &&
                a &&
                ((t = "color: " + l + ";"),
                (b = "background-color: " + l + ";"),
                (c = "border: 1px solid " + r + ";"),
                (p = "background-color: " + a + ";")),
                this.setYZData({
                  themeConfig: e,
                  themeMainStyle: t,
                  themeBorderStyle: c,
                  themeBgStyle: p,
                  themeMainBgStyle: b,
                }),
                this.themeClassChange && this.themeClassChange(e);
            },
          },
        },
      });
    },
  })
);
