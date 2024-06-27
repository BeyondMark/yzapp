"use strict";
var r = require("~/r");
r(
  "pudG",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      pudG: function (e, t, r) {
        r.r(t);
        var a = r("Fcif"),
          s = r("iBvy");
        Component({
          behaviors: [s.a],
          externalClasses: ["custom-class"],
          properties: { customStyle: String },
          methods: {
            handleTap(e) {
              var { detail: t } = e;
              this.triggerEvent(
                "navigate",
                Object(a.a)({}, t, this.properties.itemInfo)
              );
            },
            handleContactBack(e) {
              var { detail: t } = e;
              this.triggerEvent("contactback", t);
            },
          },
        });
      },
    }
  )
);
