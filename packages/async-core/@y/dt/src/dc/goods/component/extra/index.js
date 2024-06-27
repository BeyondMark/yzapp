"use strict";
var r = require("~/r");
r(
  "3uJ+",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "3uJ+": function (e, r, t) {
        t.r(r);
        var c = t("yDO/"),
          i = t("5CO4"),
          s = t("EqB2"),
          u = {
            mixins: [Object(s.a)({ optDesc: i.a })],
            computed: {
              extraClass() {
                var { type: e, corner: r } = this.opt,
                  t =
                    {
                      [c.b.SHADOW]: "card-shadow",
                      [c.b.BORDER]: "card2",
                      [c.b.SIMPLE]: "simple",
                    }[e] || "";
                return "circle" === r && (t += " circle"), t;
              },
            },
            methods: {
              handleClick(e) {
                this.$emit("item-click", { link: e });
              },
            },
            ud: !0,
          },
          a = t("9ZMt");
        r.default = a.default.component(u);
      },
    }
  )
);
