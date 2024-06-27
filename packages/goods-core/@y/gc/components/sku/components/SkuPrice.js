"use strict";
var r = require("~/r");
r(
  "a5+B",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "a5+B": function (t, e, r) {
        r.r(e);
        var s = r("8idp"),
          a = {
            props: {
              opt: Object,
              themeTag: { type: Object, default: () => ({ plain: !1 }) },
              customOldPriceStyle: String,
              customTagStyle: String,
            },
            externalClasses: ["custom-class"],
            computed: {
              priceSmall() {
                var { price: t = "" } = this.opt,
                  e = ((null == t ? void 0 : t.split(".")) || [""])[0].length;
                return e > 5 ? "sku__price-num-size-" + e : "";
              },
              umpTags() {
                var { estimateTags: t = {}, tags: e } = this.opt,
                  r = e || [];
                return (
                  t.text && r.push(t),
                  Object(s.a)(r.filter((t) => t && t.containerStyle))
                );
              },
              normalTags() {
                var { tags: t } = this.opt;
                return t
                  ? Object(s.a)(t.filter((t) => t && !t.containerStyle))
                  : [];
              },
            },
            ud: !0,
          },
          i = r("9ZMt");
        e.default = i.default.component(a);
      },
    }
  )
);
