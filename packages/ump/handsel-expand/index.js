"use strict";
var r = require("~/r");
r(
  "fTcG",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    PidN: function (e, a, t) {
      t.d(a, "a", function () {
        return o;
      });
      var r = t("Fcif"),
        s = t("lRMv"),
        i = getApp();
      function o(e, a, t, o, n) {
        if (
          (void 0 === e && (e = {}), void 0 === n && (n = {}), !t || !a || !o)
        )
          return (
            i.logger.appError({
              name: p || "umpEnterShop_without_necessary_params",
              message: u || "调用进店方法缺少必要参数",
              detail: {
                umpType: t,
                umpAlias: a,
                redirectUrl: o,
                appVersion: i.getVersion(),
                launchOption: wx.getLaunchOptionsSync(),
              },
            }),
            Promise.reject()
          );
        var { logName: p, logMsg: u } = n;
        return Object(s.g)(
          Object(r.a)({}, e, { umpAlias: a, umpType: t, redirectUrl: o })
        );
      }
    },
    fTcG: function (e, a, t) {
      t.r(a);
      var r = t("qJXH"),
        s = t("2wjL"),
        i = t("taYb"),
        o = t("PidN");
      Object(r.b)({
        data: { pageUrl: "/wscump/handsel-expand" },
        onLoad(e) {
          var { umpAlias: a = "" } = e,
            t = s.a.add("/" + this.__route__, e);
          Object(o.a)(e, a, "helpDepositExpansion", t, {
            name: "helpDepositExpansion_without_ump_alias",
            message: "定金膨胀缺少必要参数",
          })
            .then(() => {
              this.setPageUrl(e);
            })
            .catch(() => {
              this.setPageUrl(e);
            });
        },
        setPageUrl(e) {
          var a = i.a.toCamelCase(e),
            { pageUrl: t } = this.data,
            {
              orderNo: r,
              voucherId: o,
              activityId: n,
              shopAutoEnter: p = 0,
              umpAlias: u = "",
            } = a;
          (t = r
            ? s.a.add(t, { umpAlias: u, order_no: r, shopAutoEnter: p })
            : s.a.add(t, {
                umpAlias: u,
                voucherId: o,
                activityId: n,
                shopAutoEnter: p,
              })),
            this.setYZData({ pageUrl: t });
        },
        onMessage(e) {
          var a = e.detail.data.filter((e) => "ZNB.share" === e.type);
          this.shareConfig = a.pop().config;
        },
        onShareAppMessage() {
          return this.shareConfig;
        },
      });
    },
  })
);
