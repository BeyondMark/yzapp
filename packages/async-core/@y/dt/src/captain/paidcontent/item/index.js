"use strict";
var r = require("~/r");
r(
  "z4Ln",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      U1kS: function (t, e, r) {
        var u =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var a = u(r("9ZMt"));
        e.default = {
          methods: {
            _t_hn_(t) {
              a.default.navigate({
                url: t.currentTarget.dataset.href,
                type: "navigateTo",
              });
            },
          },
        };
      },
      z4Ln: function (t, e, r) {
        r.r(e);
        var u = r("U1kS"),
          a = r.n(u),
          i = r("9ZMt"),
          s = r("EqB2"),
          n = r("oc2Q"),
          l = r("mztD"),
          o = r("MLLI"),
          d = {
            mixins: [Object(s.a)({ optDesc: n.a }), a.a],
            props: { kdtId: Number },
            data: () => ({ isIOS: "ios" === Object(o.b)().platform }),
            computed: {
              _subtitle() {
                var { subtitle: t } = this.opt;
                return t.replace(/\n/g, " ");
              },
              _thumbnail() {
                var { thumbnail: t } = this.opt;
                return Object(l.a)(t, "!220x220.jpg");
              },
              _thumbnailWidth() {
                var { thumbnailWidth: t } = this.opt;
                return i.default.style.useTpx(t);
              },
              _thumbnailHeight() {
                var { thumbnailHeight: t } = this.opt;
                return i.default.style.useTpx(t);
              },
            },
            methods: {},
            ud: !0,
          };
        e.default = i.default.component(d);
      },
    }
  )
);
