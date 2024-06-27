"use strict";
var r = require("~/r");
r(
  "W9Rz",
  Object.assign(
    {},
    require("../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      W9Rz: function (e, t, a) {
        a.r(t);
        var o = a("rqVN"),
          i = a("Bx6h"),
          s = a("lOyf"),
          g = a("EtsA"),
          r = getApp(),
          p = Object(s.a)();
        Object(o.b)({
          name: "livePop",
          data: {
            pageType: 0,
            liveRoomId: 0,
            logo: "",
            hasLiving: !1,
            top: 80,
          },
          lifetimes: {
            attached() {
              var e,
                t = (e = getCurrentPages())[e.length - 1];
              (this.pageType = this.getPageType(t.route)),
                this.pageType &&
                  g.a({ scene: this.pageType }).then((e) => {
                    e.roomId &&
                      this.setYZData({
                        hasLiving: !0,
                        liveRoomId: e.roomId,
                        logo: e.headImageInfo,
                      }),
                      e.headImageInfo ||
                        r.getShopInfo().then((e) => {
                          this.setYZData({ logo: e.logo });
                        });
                  });
            },
          },
          ready() {
            this.setYZData({ top: this.getBasePosition() });
          },
          methods: {
            onTap() {
              r.logger &&
                r.logger.log({
                  et: "click",
                  ei: "click_live_pop",
                  en: "直播挂件",
                  pt: 1 === this.pageType ? "f" : "g",
                }),
                wx.navigateTo({
                  url:
                    "/packages/weapp-live/room/index?id=" +
                    this.data.liveRoomId,
                });
            },
            getBasePosition: () => (p ? 128 : 104),
            getPageType(e) {
              var t = 0;
              return (
                Object.keys(i.a).some((a) =>
                  i.a[a].some((o) => !!o.test(e) && ((t = a), !0))
                ),
                Number(t)
              );
            },
          },
        });
      },
    }
  )
);
