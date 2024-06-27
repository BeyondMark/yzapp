"use strict";
var r = require("~/r");
r(
  "I/I3",
  Object.assign({}, require("~/v.js").modules, {
    "I/I3": function (t, e, i) {
      i.r(e);
      var r = {
          name: "activity-detail-block",
          props: { opt: { type: Object, default: () => ({}) } },
          data: () => ({ groupOnShow: !1, tuanShow: !1 }),
          watch: {
            "opt.currentActivity": {
              handler(t) {
                null != t && t.type && this.setActivityType(t.type);
              },
              immediate: !0,
            },
          },
          methods: {
            setActivityType(t) {
              var e;
              (this.groupOnShow = !1),
                (this.tuanShow = !1),
                ("tuan" !== t ||
                  (null != (e = this.opt.currentActivity) && e.isCash)) &&
                  (this[t + "Show"] = !0);
            },
          },
          ud: !0,
        },
        a = i("9ZMt");
      e.default = a.default.component(r);
    },
  })
);
