"use strict";
var r = require("~/r");
r(
  "G12H",
  Object.assign({}, require("~/v.js").modules, {
    G12H: function (e, t, i) {
      i.r(t);
      var s = {
          name: "ellipsis-wrapper",
          props: {
            height: { type: Number, default: 0 },
            needCustom: { type: Boolean, default: !0 },
          },
          data() {
            return { showEllipsis: !1, maxHeight: this.height + 1 };
          },
          mounted() {
            this.needCustom &&
              this.createSelectorQuery()
                .select(".ellipsis-wrapper")
                .boundingClientRect((e) => {
                  (null == e ? void 0 : e.height) > this.height &&
                    (this.showEllipsis = !0),
                    this.maxHeight--;
                })
                .exec();
          },
        },
        r = i("9ZMt");
      t.default = r.default.component(s);
    },
  })
);
