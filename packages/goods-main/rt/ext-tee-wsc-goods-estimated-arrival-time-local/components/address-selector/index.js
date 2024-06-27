"use strict";
var r = require("~/r");
r(
  "wcPn",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      wcPn: function (e, t, r) {
        r.r(t);
        var s = r("38pn"),
          c = {
            props: { addressList: Array, selectedId: Number, themeTag: Object },
            methods: {
              onSelectListItem(e) {
                this.$emit("selected", Object(s.c)(e));
              },
            },
            ud: !0,
          },
          d = r("9ZMt");
        t.default = d.default.component(c);
      },
    }
  )
);
