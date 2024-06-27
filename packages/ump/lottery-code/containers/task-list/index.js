"use strict";
var r = require("~/r");
r(
  "FqhR",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      FqhR: function (t, e, s) {
        s.r(e);
        var O = s("Fcif"),
          a = s("u8kV"),
          i = s("svh/"),
          r = s("otsx");
        Object(a.b)({
          mapData: Object(O.a)(
            {},
            Object(i.h)(["taskGoodsList"]),
            Object(i.f)(["taskList"])
          ),
          methods: Object(O.a)(
            {},
            Object(i.e)(["GET_GOODS_LIST", "GET_CART_GOODS_NUM"]),
            Object(i.g)(["TOGGLE_POP_VISIBLE", "SET_CURRENT_TASK"]),
            {
              handleClick(t) {
                var { item: e } = t.target.dataset,
                  { name: s, type: O, goodsIdList: a } = e;
                if (
                  (this.SET_CURRENT_TASK(e),
                  O === r.o.GOODS && !this.data.taskGoodsList.length)
                ) {
                  var i = JSON.stringify(a || []);
                  this.GET_GOODS_LIST({ ids: i, type: "SET_TASK_GOODS" });
                }
                this.TOGGLE_POP_VISIBLE({ name: s, value: !0 });
              },
            }
          ),
        });
      },
    }
  )
);
