"use strict";
var r = require("~/r");
r(
  "TKD8",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      TKD8: function (e, t, s) {
        s.r(t);
        var r = s("Fcif"),
          o = s("u8kV"),
          c = s("svh/"),
          i = s("i+tm"),
          O = s("9CuX");
        Object(o.b)({
          mapData: Object(r.a)(
            {},
            Object(c.h)(["currentTickets", "showCodePop", "activity"])
          ),
          methods: Object(r.a)(
            {},
            Object(c.g)(["TOGGLE_SHEET_SHOW", "TOGGLE_POP_VISIBLE"]),
            {
              onClose() {
                this.TOGGLE_POP_VISIBLE({ name: "showCodePop", value: !1 });
              },
              onShare() {
                Object(i.c)(O.a.CodeLottery),
                  this.onClose(),
                  this.TOGGLE_SHEET_SHOW();
              },
            }
          ),
        });
      },
    }
  )
);
