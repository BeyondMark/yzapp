"use strict";
var r = require("~/r");
r(
  "Cu5w",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Cu5w: function (t, e, i) {
      i.r(e);
      var l = i("9ZMt"),
        u = i("EqB2"),
        a = i("mgUg"),
        s = i("/XVY"),
        o = Object(s.a)({
          titleType: { default: "0" },
          titleValue: { default: "" },
          titleDefaultBg: {
            default:
              "https://img01.yzcdn.cn/upload_files/2021/05/24/FidBlBv7KNS-8gfuOuhGUJzn81oP.png",
          },
          titleFontSize: { default: "20px" },
          customTxtStyle: { default: "" },
          customImgStyle: { default: "" },
        }),
        g = i("MLLI"),
        r = i("2Dtx"),
        n = {
          mixins: [Object(u.a)({ optDesc: o })],
          logicData: () => ({ imageHeight: 0 }),
          computed: {
            showTitle() {
              return this.opt.titleType !== a.a.DISABLE;
            },
            isTextTitle() {
              return this.opt.titleType === a.a.DEFAULT;
            },
            isImgTitle() {
              return this.opt.titleType === a.a.CUSTOM;
            },
            imageStyle() {
              return "weapp" !== l.default.getEnv()
                ? ""
                : "height: " +
                    this.imageHeight +
                    "px;" +
                    this.opt.customImgStyle;
            },
            textSyle() {
              return (
                "" +
                Object(r.a)({
                  "background-image": "url(" + this.opt.titleDefaultBg + ")",
                  "font-size": this.opt.titleFontSize,
                }) +
                this.opt.customTxtStyle
              );
            },
          },
          mounted() {
            "weapp" === l.default.getEnv() &&
              this.isImgTitle &&
              l.default.$native.getImageInfo({
                src: this.opt.titleValue,
                success: (t) => {
                  this.imageHeight =
                    t.height * ((Object(g.b)().windowWidth || 375) / t.width);
                },
              });
          },
          ud: !0,
        };
      e.default = l.default.component(n);
    },
  })
);
