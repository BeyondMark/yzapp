"use strict";
var r = require("~/r");
r(
  "cEbv",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      cEbv: function (t, i, e) {
        e.r(i);
        var a = e("YeA1"),
          r = e("LmKK"),
          c = e("AGZf"),
          o = {
            name: "groupon-going-list-item",
            props: {
              alias: String,
              kdtId: Number,
              title: String,
              gapNum: Number,
              thumbUrl: String,
              countDown: String,
              activityInfo: Object,
            },
            computed: {},
            methods: {
              goJoinUrl() {
                var { activityType: t, activityId: i } = this.activityInfo,
                  e = { alias: this.alias, kdt_id: this.kdtId };
                t && (e.type = t),
                  Object(r.a)({ activityId: i, groupAlias: this.alias })
                    .then(() => {
                      Object(a.a)().dmc.navigate("GrouponDetail", e);
                    })
                    .catch((t) => {
                      160706002 === (null == t ? void 0 : t.code)
                        ? Object(c.a)("该团已满或结束，请选择其他团参与")
                        : Object(a.a)().dmc.navigate("GrouponDetail", e);
                    });
              },
            },
            ud: !0,
          },
          n = e("9ZMt");
        i.default = n.default.component(o);
      },
    }
  )
);
