"use strict";
var r = require("~/r");
r(
  "GPTc",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      GPTc: function (e, t, o) {
        o.r(t);
        var c = o("Fcif"),
          i = o("u8kV"),
          a = o("svh/"),
          s = o("UT5u"),
          n = o("GFa9");
        Object(i.b)({
          options: { multipleSlots: !0 },
          mapData: Object(c.a)(
            {},
            Object(a.h)([
              "activity",
              "otherHordeId",
              "kdtId",
              "showPop",
              "ownerNickName",
              "queryOptions",
            ]),
            Object(a.f)(["joinPopInfo", "remainNum"])
          ),
          data: {
            show: !1,
            successPopIcon:
              "https://b.yzcdn.cn/public_files/fcb296d410297415735e09e7f8bcf01c.png",
            failPopIcon:
              "https://b.yzcdn.cn/public_files/de09db40195e509b7a4e63c7f0876e07.png",
          },
          methods: Object(c.a)(
            {},
            Object(a.e)(["OPEN_PACKAGE"]),
            Object(a.g)(["SET_POP_VISIBLE", "SET_SHARE_VISIBLE"]),
            {
              handleClick() {
                var { btnType: e } = this.data.joinPopInfo,
                  t = {
                    LIMIT: "useCoupon",
                    JOINED: "toSelfCoupon",
                    FETCH: "OPEN_PACKAGE",
                  }[e];
                t && this[t](!0), this.SET_POP_VISIBLE();
              },
              useCoupon() {
                var { activity: e = {}, queryOptions: t = {} } = this.data;
                Object(s.e)(e, t);
              },
              toSelfCoupon() {
                var { activityId: e } = this.data.activity,
                  t =
                    "/packages/ump/carve-coupon/index?activityId=" +
                    e +
                    "&hordeId=" +
                    this.data.otherHordeId;
                n.a.navigate({ url: t });
              },
            }
          ),
        });
      },
    }
  )
);
