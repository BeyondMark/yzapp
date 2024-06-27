"use strict";
var r = require("~/r");
r(
  "XD0T",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    XD0T: function (e, t, o) {
      o.r(t);
      var s = o("Fcif"),
        r = o("u8kV"),
        a = o("svh/");
      Object(r.b)({
        mapData: Object(s.a)(
          {},
          Object(a.h)(["showFollow"]),
          Object(a.f)(["extraData"])
        ),
        computed: {
          showFollow: {
            get() {
              return this.$store.state.showFollow;
            },
            set(e) {
              this.TOGGLE_TASK_POPUP({ name: "showFollow", value: e });
            },
          },
        },
        methods: Object(s.a)(
          {},
          Object(a.g)(["TOGGLE_SHEET_SHOW", "TOGGLE_TASK_POPUP"]),
          {
            onClose() {
              this.TOGGLE_TASK_POPUP({ name: "showFollow", value: !1 });
            },
          }
        ),
      });
    },
  })
);
