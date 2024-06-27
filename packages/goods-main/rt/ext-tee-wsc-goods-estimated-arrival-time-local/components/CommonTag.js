"use strict";
var r = require("~/r");
r(
  "aoBq",
  Object.assign({}, require("~/v.js").modules, {
    aoBq: function (e, t, n) {
      n.r(t);
      var r = {
          name: "common-tag",
          mixins: [
            n("KrsW").b.externalClassesMixin([
              "custom-class",
              "container-class",
              "inner-class",
            ]),
          ],
          props: {
            customStyle: String,
            containerStyle: String,
            innerStyle: String,
            themeTag: Object,
          },
          ud: !0,
        },
        s = n("9ZMt");
      t.default = s.default.component(r);
    },
  })
);
