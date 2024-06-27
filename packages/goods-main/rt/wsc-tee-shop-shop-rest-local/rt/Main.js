"use strict";
var r = require("~/r");
r(
  "/+pc",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      "/+pc": function (t, s, e) {
        e.r(s);
        var h = e("aOlM"),
          i = e("L9n3"),
          d = {
            data: () => ({
              kdtId: 0,
              offlineId: 0,
              shopRest: !1,
              shopRestDesc: "",
              inited: !1,
              unWatchKdtId: null,
              unWatchOfflineId: null,
            }),
            watch: {
              inited() {
                this.offlineId && (this.shopRest = !1);
              },
            },
            created() {
              (this.getShopRestData = Object(h.a)(() => {
                Object(i.a)(this.kdtId, this.offlineId).then((t) => {
                  var { shopRest: s, shopRestDesc: e } = t;
                  (this.shopRest = s), (this.shopRestDesc = e);
                });
              }, 800)),
                (this.unWatchKdtId = this.ctx.watch("kdtId", (t) => {
                  var s = this.kdtId;
                  (this.kdtId = t), t && s !== t && this.getShopRestData();
                })),
                (this.unWatchOfflineId = this.ctx.watch("offlineId", (t) => {
                  (this.offlineId = t),
                    (this.inited = !0),
                    t && this.getShopRestData();
                }));
            },
            destroyed() {
              this.unWatchKdtId(), this.unWatchOfflineId();
            },
            ud: !0,
          },
          a = e("9ZMt");
        s.default = a.default.component(d);
      },
    }
  )
);
