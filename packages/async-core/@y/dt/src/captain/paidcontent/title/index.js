"use strict";
var r = require("~/r");
r(
  "8/zw",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "8/zw": function (t, e, i) {
        i.r(e);
        var l = i("Fcif"),
          o = i("9ZMt"),
          r = i("EqB2"),
          s = i("TlQk"),
          a = {
            mixins: [Object(r.a)({ optDesc: s.a })],
            props: {
              url: { type: String, default: "" },
              custom: { type: Object, default: () => ({}) },
            },
            data: () => ({}),
            computed: {
              titleOpt() {
                var { title: t, showTitleAll: e } = this.opt,
                  { custom: i } = this;
                return Object(l.a)(
                  {
                    title: t,
                    showLink: e,
                    linkText: "全部",
                    titleFontSize: 15,
                    titleFontWeight: 700,
                    titleColor: "#333",
                    vMargin: 15,
                    hMargin: 15,
                    linkFontSize: 13,
                    linkColor: "#999",
                    titleLines: 1,
                    showDivider: !0,
                  },
                  i
                );
              },
            },
            methods: {
              goToAll() {
                var { url: t } = this;
                this.opt.showTitleAll &&
                  o.default.navigate({ type: "navigateTo", url: t });
              },
            },
            ud: !0,
          };
        e.default = o.default.component(a);
      },
    }
  )
);
