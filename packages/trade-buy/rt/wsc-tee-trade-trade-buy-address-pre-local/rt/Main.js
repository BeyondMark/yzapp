"use strict";
var r = require("~/r");
r(
  "L1kv",
  Object.assign({}, require("~/v.js").modules, {
    L1kv: function (e, s, r) {
      r.r(s);
      var o = r("Fcif"),
        t = r("VmHG"),
        d = r("YeA1"),
        i = {
          logicData() {
            return Object(o.a)(
              { grouponModel: {}, address: {}, reserves: {} },
              Object(t.d)(this, ["expressType", "showMain"])
            );
          },
          computed: {
            visible() {
              var { showAddressBlock: e = !0 } = this.address || {},
                { activityId: s } = this.reserves;
              return (
                e &&
                (this.showMain ||
                  ("express" === this.expressType &&
                    (this.grouponModel.showGrouponHeader ||
                      this.grouponModel.showGrouponMember))) &&
                !s
              );
            },
          },
          created() {
            Object(d.b)(this, ["grouponModel", "address", "reserves"]);
          },
          ud: !0,
        },
        a = r("9ZMt");
      s.default = a.default.component(i);
    },
  })
);
