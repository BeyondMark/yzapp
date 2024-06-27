"use strict";
var r = require("~/r");
r(
  "8VnS",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      "8VnS": function (e, s, r) {
        r.r(s);
        var t = r("CzId"),
          c = {
            created() {
              this.ctx.process.define("queryWechatSubscribeResult", t.b),
                this.ctx.process.define("getTemplateByScene", t.a),
                this.ctx.process.define(
                  "requestSubscribeMessagePush",
                  t.c.bind(this)
                );
            },
            ud: !0,
          },
          i = r("9ZMt");
        s.default = i.default.component(c);
      },
    }
  )
);
