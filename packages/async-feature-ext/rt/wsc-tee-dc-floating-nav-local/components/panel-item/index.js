"use strict";
var r = require("~/r");
r(
  "JlV/",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "JlV/": function (e, t, r) {
      r.r(t);
      var i = r("JdrY"),
        n = {
          props: {
            item: {
              extraData: String,
              iconUrl: String,
              independent: Boolean,
              navType: Number,
              order: Number,
              status: Number,
              title: String,
            },
          },
          data: () => ({ iconTextMap: i.e }),
          computed: {
            iconBg() {
              return "background-image: url(" + this.item.iconUrl + ")";
            },
            itemTitle() {
              return this.getItemTitle(this.item);
            },
          },
          methods: {
            getItemTitle(e) {
              try {
                if (i.j.CUSTOME.includes(e.navType)) {
                  var t = JSON.parse(e.extraData),
                    { title: r } = t;
                  return r;
                }
              } catch (e) {
                return "";
              }
            },
          },
          ud: !0,
        },
        a = r("9ZMt");
      t.default = a.default.component(n);
    },
  })
);
