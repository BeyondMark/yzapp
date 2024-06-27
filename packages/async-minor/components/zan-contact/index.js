"use strict";
var r = require("~/r");
r(
  "RVKR",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    RVKR: function (t, e, s) {
      s.r(e);
      var a = s("u8kV"),
        c = s("GFa9");
      Component({
        externalClasses: ["custom-class"],
        ready() {
          Object(a.d)().getContactInfo &&
            Object(a.d)(this)
              .getContactInfo()
              .then((t) => {
                this.setData(t);
              });
        },
        methods: { onContactBack: c.a.contactBack },
      });
    },
  })
);
