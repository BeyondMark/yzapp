"use strict";
var r = require("~/r");
r(
  "9P7Q",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      "9P7Q": function (t, e, s) {
        s.r(e);
        var a = s("Fcif"),
          o = s("YeA1"),
          r = s("PBCL"),
          n = {
            data: () => ({
              show: !1,
              launchArgs: {},
              shopInfo: {},
              fastJoinHeaderInfo: {},
              userInfo: {},
            }),
            created() {
              var t = this;
              Object(o.b)(this, ["kdtId"]),
                Object(o.e)(this, {
                  launchFastJoinSDK: function (e) {
                    return void 0 === e && (e = {}), t.launchFastJoinSDK(e);
                  },
                }),
                (this.userInfo = this.ctx.data.userInfo),
                (this.unwatchUserInfo = this.ctx.watch("userInfo", (t) => {
                  this.userInfo = t;
                }));
            },
            beforeDestory() {
              this.unwatchUserInfo();
            },
            methods: {
              launchFastJoinSDK(t) {
                var e = this.ctx.logger.getLogParams,
                  s = this.$getPageQuery();
                (this.launchArgs = Object(a.a)({}, t, {
                  kdtId: this.kdtId,
                  extra: { getLogParamsFunc: e, pageQuery: s },
                })),
                  (this.show = !0);
              },
              onUpdateShopInfo(t) {
                this.shopInfo = t;
              },
              onUpdateHeadType(t) {
                void 0 === t && (t = r.a.Normal),
                  (this.fastJoinHeaderInfo = { type: t }),
                  (this.ctx.data.fastJoinHeaderInfo = { type: t });
              },
              onUpdateCloseStatus() {
                this.show = !1;
              },
            },
            ud: !0,
          },
          i = s("9ZMt");
        e.default = i.default.component(n);
      },
    }
  )
);
