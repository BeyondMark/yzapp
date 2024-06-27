"use strict";
var r = require("./r");
module.exports = r(
  "m4w3",
  Object.assign({}, require("./v.js").modules, require("./c.js").modules, {
    m4w3: function (i, e, t) {
      t.r(e),
        t.d(e, "getLastStock", function () {
          return s;
        });
      var r = t("jA1y"),
        s = (i) => {
          var e = i.activity_id_list || [];
          return new Promise((i, t) => {
            Object(r.b)({
              api: "youzan.ebiz.weapp.live.seckill.list/1.0.0/stock",
              data: { activity_ids: e.map((i) => i + "") },
              method: "GET",
              success: (e) => {
                var t = e.map((i) => ({
                  activity_id: i.activity_id,
                  stock: i.current_stock,
                }));
                i({ activity_info: t, errcode: 0, errmsg: "ok" });
              },
              fail: (i) => {
                t({ activity_info: [], errcode: i.code, errmsg: i.msg });
              },
            });
          });
        };
    },
  })
);
