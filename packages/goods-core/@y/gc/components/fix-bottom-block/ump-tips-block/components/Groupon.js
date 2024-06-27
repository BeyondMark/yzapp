"use strict";
var r = require("~/r");
r(
  "F+cZ",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "F+cZ": function (t, r, e) {
        e.r(r);
        var i = e("YeA1"),
          o = e("UfCC"),
          n = e("AGZf"),
          c = {
            name: "GoodsBottomGrouponTip",
            props: {
              currentActivity: { type: Object },
              kdtId: { type: Number },
            },
            data: () => ({
              avatarPlaceHolder:
                "https://img01.yzcdn.cn/public_files/7143018bfc43039e852fb01459585d7b.png",
            }),
            computed: {
              firstGrouponGoing() {
                var { ongoingGroup: t = [] } = this.currentActivity;
                return t.length ? t[0] : {};
              },
              showGrouponTip() {
                var { type: t, ongoingGroup: r = [] } = this.currentActivity;
                return "groupOn" === t && r.length > 0;
              },
            },
            methods: {
              goJoin() {
                var { firstGrouponGoing: t, kdtId: r } = this,
                  { groupAlias: e = "" } = t,
                  { activityType: c = 4, activityId: u } =
                    this.currentActivity || {},
                  a = () =>
                    Object(i.a)().dmc.navigate("GrouponDetail", {
                      kdt_id: r,
                      alias: e,
                      type: c,
                    });
                Object(o.a)({ activityId: u, groupAlias: e })
                  .then(() => {
                    a();
                  })
                  .catch((t) => {
                    160706002 === (null == t ? void 0 : t.code)
                      ? Object(n.a)("该团已满或结束，请选择其他团参与")
                      : a();
                  });
              },
            },
            ud: !0,
          },
          u = e("9ZMt");
        r.default = u.default.component(c);
      },
    }
  )
);
