"use strict";
var r = require("~/r");
r(
  "3Hlo",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "3Hlo": function (e, t, o) {
      o.r(t);
      var r = o("u8kV"),
        l = [
          Behavior({
            properties: {
              visible: {
                type: Boolean,
                value: !1,
                observer() {
                  this.init && this.init();
                },
              },
              position: {
                type: String,
                value: "bottomRight",
                observer() {
                  this.init && this.init();
                },
              },
              url: {
                type: String,
                observer(e) {
                  this.setDefaultUrl && this.setDefaultUrl(e);
                },
              },
              width: { type: String, value: "44px" },
              height: { type: String, value: "44px" },
            },
          }),
          o("z0hh").a,
        ];
      Object(r.c)({
        behaviors: l,
        data: {
          defaultUrl:
            "https://img01.yzcdn.cn/public_files/8f1af7ae720f0aa1634d4fd6f93f7cd6.png",
          cls: "",
          style: "",
        },
        methods: {
          init() {
            var { position: e, width: t, height: o } = this.data,
              r = ["coupon-stamp", "coupon-stamp__pos-" + e];
            this.setYZData({
              cls: r.join(" "),
              style: "width: " + t + "; height: " + o,
            });
          },
          themeClassChange() {
            var { url: e } = this.data;
            this.setDefaultUrl(e);
          },
          setDefaultUrl(e) {
            var { defaultUrl: t, themeConfig: o } = this.data;
            this.setYZData({ defaultUrl: e || o.stamp || t });
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
                { mainColor: o, borderColor: l, bgColor: i } = t,
                a = "",
                s = "",
                b = "",
                c = "";
              o &&
                l &&
                i &&
                ((a = "color: " + o + ";"),
                (s = "background-color: " + o + ";"),
                (b = "border: 1px solid " + l + ";"),
                (c = "background-color: " + i + ";")),
                this.setYZData({
                  themeConfig: t,
                  themeMainStyle: a,
                  themeBorderStyle: b,
                  themeBgStyle: c,
                  themeMainBgStyle: s,
                }),
                this.themeClassChange && this.themeClassChange(t);
            },
          },
        },
      });
    },
  })
);
