"use strict";
var r = require("~/r");
r(
  "4n/K",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "4n/K": function (e, t, o) {
        o.r(t);
        var i = o("bkjF"),
          a = o("v8e2"),
          s = o("9ZMt"),
          g = o("Pz1p"),
          h = Object(g.b)(),
          r = {
            data: () => ({
              pageType: 0,
              liveRoomId: 0,
              logo: "",
              hasLiving: !1,
              top: 80,
            }),
            mounted() {
              (this.pageType = this.getPageType(this.$getPageRoute())),
                this.pageType &&
                  a.a({ scene: this.pageType }).then((e) => {
                    var t;
                    (e.roomId &&
                      ((this.hasLiving = !0),
                      (this.liveRoomId = e.roomId),
                      (this.logo = e.headImageInfo),
                      (this.ctx.data.hasLiving = !0)),
                    e.headImageInfo) ||
                      e.headImageInfo ||
                      (this.logo =
                        null == (t = this.ctx.data.shopInfo) ? void 0 : t.logo);
                  }),
                (this.top = this.getBasePosition());
            },
            methods: {
              getPageType(e) {
                var t = 0;
                return (
                  Object.keys(i.a).some((o) =>
                    i.a[o].some((i) => !!i.test(e) && ((t = o), !0))
                  ),
                  Number(t)
                );
              },
              onTap() {
                this.ctx.logger &&
                  this.ctx.logger.log({
                    et: "click",
                    ei: "click_live_pop",
                    en: "直播挂件",
                    pt: 1 === this.pageType ? "f" : "g",
                  }),
                  s.default.navigate({
                    url:
                      "/packages/weapp-live/room/index?id=" + this.liveRoomId,
                  });
              },
              getBasePosition: () => (h ? 128 : 104),
            },
            ud: !0,
          };
        t.default = s.default.component(r);
      },
    }
  )
);
