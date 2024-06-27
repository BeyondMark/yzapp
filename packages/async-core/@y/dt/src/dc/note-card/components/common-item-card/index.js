"use strict";
var r = require("~/r");
r(
  "JIzN",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      JIzN: function (e, t, i) {
        i.r(t);
        var r = i("USVR"),
          a = i("R7Zb"),
          o = {
            mixins: [Object(a.a)({ optDesc: r.a })],
            props: {
              isSwipeLayout: { type: Boolean, value: !1 },
              needLoadMore: { type: Boolean, value: !1 },
            },
            methods: {
              linkToMore() {
                this.$emit("link-to-more");
              },
              itemClick() {
                for (
                  var e = arguments.length, t = new Array(e), i = 0;
                  i < e;
                  i++
                )
                  t[i] = arguments[i];
                if (t && t.length) {
                  var {
                    currentTarget: {
                      dataset: { alias: r },
                    },
                  } = t[0];
                  r
                    ? this.$emit("item-click", t[0])
                    : this.$emit("item-click", t[t.length - 1]);
                }
              },
            },
            ud: !0,
          },
          s = i("9ZMt");
        t.default = s.default.component(o);
      },
    }
  )
);
