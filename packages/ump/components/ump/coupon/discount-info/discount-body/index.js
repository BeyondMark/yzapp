"use strict";
var r = require("~/r");
r(
  "w/VS",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "6SZ0": function (e, t, o) {
      t.a = Behavior({
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
    rHha: function (e, t, o) {
      t.a = Behavior({
        properties: {
          value: { type: Number, optionalTypes: [String] },
          prefix: { type: String, value: "" },
          unit: { type: String, value: "元" },
          autoWidth: { type: Boolean, value: !0 },
          maxWidth: { type: Number, value: 112 },
          autoFormatValue: { type: Boolean, value: !1 },
        },
      });
    },
    "w/VS": function (e, t, o) {
      o.r(t);
      var r = o("eijD"),
        a = o("u8kV"),
        i = o("rHha"),
        l = o("6SZ0"),
        n = o("z0hh"),
        s = [i.a, l.a, n.a];
      Object(a.c)({
        behaviors: s,
        options: { multipleSlots: !0 },
        data: {
          valueStyle: "",
          disabledClass: "",
          unavailableClass: "",
          money: {},
        },
        ready() {
          this.setYZData({ money: this.computedMoney() }, { immediate: !0 }),
            setTimeout(() => {
              this.computedFontSize().then((e) => {
                this.setYZData({ valueStyle: "font-size: " + e + ";" });
              });
            });
        },
        methods: {
          computedMoney() {
            var { autoFormatValue: e, value: t, unit: o } = this.data;
            return e
              ? (function (e) {
                  return (
                    void 0 === e && (e = 0),
                    e / 100 >= 1e4
                      ? { value: (e = Math.floor(e / 100)) / 1e4, unit: "万元" }
                      : { value: e / 100, unit: "元" }
                  );
                })(t)
              : { value: t, unit: o };
          },
          disabledObserver() {
            var { disabled: e, unavailable: t } = this.data;
            this.setYZData({
              disabledClass: e ? "coupon-discountbody__disabled" : "",
              unavailableClass: t ? "coupon-discountbody__unavailable" : "",
            });
          },
          computedFontSize() {
            var e = this;
            return Object(r.a)(function* () {
              var { maxWidth: t } = e.data;
              t -= 24;
              var o = yield e.getBoundingClientRectWidth(
                  ".coupon-discountbody"
                ),
                r =
                  (yield e.getBoundingClientRectWidth(
                    ".coupon-discountbody__prefix"
                  )) +
                  (yield e.getBoundingClientRectWidth(
                    ".coupon-discountbody__unit"
                  )),
                a = (t - r) / (o - r);
              if (a > 1) return "29px";
              var i = Math.trunc(29 * a);
              return Math.max(i, 12) + "px";
            })();
          },
          getBoundingClientRectWidth(e) {
            return new Promise((t) => {
              wx.createSelectorQuery()
                .in(this)
                .select(e)
                .boundingClientRect(function (e) {
                  void 0 === e && (e = {}), t(e.width || 0);
                })
                .exec();
            });
          },
        },
      });
    },
    z0hh: function (e, t, o) {
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
      t.a = Behavior({
        properties: {
          themeClass: {
            type: String,
            value: "",
            observer(e) {
              var t = r[e] || {},
                { mainColor: o, borderColor: a, bgColor: i } = t,
                l = "",
                n = "",
                s = "",
                d = "";
              o &&
                a &&
                i &&
                ((l = "color: " + o + ";"),
                (n = "background-color: " + o + ";"),
                (s = "border: 1px solid " + a + ";"),
                (d = "background-color: " + i + ";")),
                this.setYZData({
                  themeConfig: t,
                  themeMainStyle: l,
                  themeBorderStyle: s,
                  themeBgStyle: d,
                  themeMainBgStyle: n,
                }),
                this.themeClassChange && this.themeClassChange(t);
            },
          },
        },
      });
    },
  })
);
