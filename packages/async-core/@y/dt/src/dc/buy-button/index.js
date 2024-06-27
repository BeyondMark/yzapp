"use strict";
var r = require("~/r");
r(
  "hBzc",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      hBzc: function (t, e, o) {
        o.r(e);
        var r = o("g9W+"),
          i = o("EqB2"),
          n = o("kmEe"),
          a = o("2Dtx"),
          c = {
            mixins: [Object(i.a)({ optDesc: n.a })],
            props: { kdtId: Number },
            computed: {
              showIconList() {
                var { align: t } = this.opt;
                return t === r.a.right && this.iconList.length;
              },
              iconList() {
                var { iconEntry: t } = this.opt;
                return t.filter((t) => t.enable === r.d.open);
              },
              bgStyle() {
                var {
                    btnPdBottom: t,
                    bgHeight: e,
                    bgEnable: o,
                    bgRadius: i,
                    btnPdLeftRight: n,
                    bgColor: c,
                  } = this.opt,
                  s = {
                    "padding-bottom":
                      "calc(" +
                      t +
                      "px + var(--buy-button-iphone-safe-area, 0px))",
                    "padding-left": n + "px",
                    "padding-right": n + "px",
                  };
                return (
                  o === r.b.open &&
                    ((s.height =
                      "calc(" +
                      e +
                      "px + var(--buy-button-iphone-safe-area, 0px))"),
                    (s["border-radius"] = i + "px " + i + "px 0 0"),
                    (s["background-color"] = c)),
                  Object(a.a)(s)
                );
              },
              btnStyle() {
                var {
                    btnTextSize: t,
                    btnRadius: e,
                    btnHeight: o,
                    btnCustomBgColor: i,
                    btnColorType: n,
                    btnCustomTextColor: c,
                    btnMgLeft: s,
                    align: b,
                  } = this.opt,
                  u = {
                    height: o + "px",
                    "font-size": t + "px",
                    "border-radius": e + "px",
                    "line-height": o + "px",
                  };
                return (
                  n === r.c.custom
                    ? ((u.color = c), (u["background-color"] = i))
                    : ((u.color = "var(--main-text)"),
                      (u["background-color"] = "var(--main-bg)")),
                  this.iconList.length &&
                    b === r.a.right &&
                    (u["margin-left"] = s + "px"),
                  Object(a.a)(u)
                );
              },
            },
            methods: {
              onIconClick(t) {
                this.$emit("jumpToLink", t);
              },
              onBtnClick() {
                this.$emit("buy-click");
              },
            },
            ud: !0,
          },
          s = o("9ZMt");
        e.default = s.default.component(c);
      },
    }
  )
);
