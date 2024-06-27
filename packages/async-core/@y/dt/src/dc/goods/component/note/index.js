"use strict";
var r = require("~/r");
r(
  "rhM/",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "rhM/": function (t, e, r) {
        r.r(e);
        var i = r("WvSE"),
          a = r("EqB2"),
          s = {
            mixins: [Object(a.a)({ optDesc: i.a })],
            data: () => ({}),
            computed: {
              imgStyle() {
                return "background-image:url(" + this.imgSrc + ");";
              },
              noteClass() {
                var { align: t } = this.opt;
                return "recommend-note-" + t;
              },
              isWaterFall() {
                var { type: t } = this.opt;
                return "waterfall" === t;
              },
              imageFillStyleClass() {
                var { imgOpt: t } = this.opt;
                return t ? "recommend-note-banner__img-" + t.fill : "";
              },
              textStyle() {
                var { titleOpt: t } = this.opt;
                return t ? "font-weight:" + t.titleFontWeight + ";" : "";
              },
              paddingTopStyle() {
                if (this.isWaterFall) return "";
                var { imgOpt: t } = this.opt;
                if (!t || !t.ratio) return "";
                var [e, r] = t.ratio.split("-");
                return "padding-top: " + (+r / +e) * 100 + "%;";
              },
              imgSrc() {
                var { imgOpt: t } = this.opt;
                return t ? t.src : "";
              },
            },
            methods: {
              handleClick() {
                var { noteOpt: t } = this.opt;
                this.$emit("item-click", {
                  type: "shopnote_detail",
                  alias: t && t.alias,
                });
              },
            },
            ud: !0,
          },
          l = r("9ZMt");
        e.default = l.default.component(s);
      },
    }
  )
);
