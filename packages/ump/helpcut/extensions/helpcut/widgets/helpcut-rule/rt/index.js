"use strict";
var r = require("~/r");
r(
  "anR6",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    anR6: function (e, r, s) {
      s.r(r);
      var u = s("7/pW"),
        t = s("VmHG");
      Object(u.a)({
        data: { rulesVisible: !1 },
        attached() {
          Object(t.d)(this, ["helpcutInfo", "rules"]),
            Object(t.d)(this, {
              showRules(e) {
                var { helpcutInfo: r = {}, rules: s } = e;
                return r.rules || s;
              },
              showRuleImage(e) {
                var { helpcutInfo: r = {} } = e;
                return (
                  r.ruleImage ||
                  "https://img01.yzcdn.cn/upload_files/2021/10/08/Fr7W60cP3v5wPHBLyvC7R4vZ7ONn.png"
                );
              },
            });
        },
      });
    },
  })
);
