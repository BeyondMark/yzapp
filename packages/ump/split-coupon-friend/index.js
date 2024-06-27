"use strict";
var r = require("~/r");
r(
  "d4bn",
  Object.assign(
    {},
    require("../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      PidN: function (e, t, i) {
        i.d(t, "a", function () {
          return n;
        });
        var r = i("Fcif"),
          s = i("lRMv"),
          a = getApp();
        function n(e, t, i, n, o) {
          if (
            (void 0 === e && (e = {}), void 0 === o && (o = {}), !i || !t || !n)
          )
            return (
              a.logger.appError({
                name: u || "umpEnterShop_without_necessary_params",
                message: p || "调用进店方法缺少必要参数",
                detail: {
                  umpType: i,
                  umpAlias: t,
                  redirectUrl: n,
                  appVersion: a.getVersion(),
                  launchOption: wx.getLaunchOptionsSync(),
                },
              }),
              Promise.reject()
            );
          var { logName: u, logMsg: p } = o;
          return Object(s.g)(
            Object(r.a)({}, e, { umpAlias: t, umpType: i, redirectUrl: n })
          );
        }
      },
      d4bn: function (e, t, i) {
        i.r(t);
        var r = i("Fcif"),
          s = i("qJXH"),
          a = i("svh/"),
          n = i("PidN"),
          o = i("2wjL"),
          u = i("QQZL");
        Object(s.a)(
          Object(r.a)(
            {
              store: () => (
                (u.a.name = "split-coupon-friend" + new Date() / 1e3), u.a
              ),
              mapData: Object(r.a)(
                {},
                Object(a.h)(["queryOptions", "hasResult"]),
                Object(a.f)(["shareCopyText", "shareConfig"])
              ),
            },
            Object(a.e)(["FETCH_SHOP_NAME", "FETCH_ACTIVITY_INFO"]),
            Object(a.g)(["SET_QUERY_OPTIONS"]),
            {
              onPullDownRefresh() {
                var { queryOptions: e } = this.data;
                this.init(e), wx.stopPullDownRefresh();
              },
              onLoad(e) {
                void 0 === e && (e = {});
                var { alias: t } = e,
                  i = o.a.add("/" + this.__route__, e);
                Object(n.a)(e, t, "splitCouponFriend", i, {
                  name: "splitCouponFriend_without_ump_alias",
                  message: "活动页缺少必要参数",
                })
                  .then(() => {
                    this.init(e);
                  })
                  .catch(() => {
                    this.init(e);
                  });
              },
              init(e) {
                this.SET_QUERY_OPTIONS(e),
                  this.FETCH_SHOP_NAME(),
                  this.FETCH_ACTIVITY_INFO();
              },
              handleShare(e) {
                "poster" === e.type &&
                  ((this.showSharePop = !1), (this.showPoster = !0));
              },
              onShareAppMessage() {
                return this.data.shareConfig;
              },
            }
          )
        );
      },
    }
  )
);
