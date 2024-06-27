"use strict";
var r = require("~/r");
r(
  "cNU5",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    cNU5: function (e, t, r) {
      r.r(t);
      var i = r("Fcif"),
        a = r("mztD"),
        o = r("TOEM"),
        c = r("EqB2"),
        d = {
          mixins: [Object(c.a)({ optDesc: o.a })],
          computed: {
            containerStyle() {
              var { bgColor: e, pagePadding: t } = this.opt.imgOpt;
              return "background:" + e + "; padding:6px " + t + "px";
            },
            cardStyle() {
              var { cardBg: e, isFillet: t } = this.opt.imgOpt;
              return (
                "background:" +
                e +
                ";border-radius:" +
                (1 == +t ? "8px" : "0px")
              );
            },
            textStyle() {
              var { textColor: e } = this.opt.imgOpt;
              return "color:" + e;
            },
            card() {
              var {
                  styleType: e,
                  qrcodeType: t,
                  weixin: r,
                  officialAccount: o,
                  other: c,
                } = this.opt.imgOpt,
                d = [null, r, o, c],
                p = t.map((e) =>
                  Object(i.a)({}, d[e], {
                    qrCodeUrl: Object(a.a)(d[e].qrCodeUrl, "!128x0.jpg", {
                      disableWebpInIOS: !0,
                    }),
                    cardImgStyle: "padding:" + d[e].imagePadding + "px",
                  })
                );
              return 3 == +e
                ? { type: +e, configs: p }
                : Object(i.a)({ type: +e }, p[0]);
            },
          },
          ud: !0,
        },
        p = r("9ZMt");
      t.default = p.default.component(d);
    },
  })
);
