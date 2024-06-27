"use strict";
(exports.ids = [30]),
  (exports.modules = {
    "/1Zb": function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var r = n("Fcif"),
        o = n("lRMv"),
        c = n("2wjL"),
        i = 2,
        s = getApp();
      function a(e, t) {
        var { alias: n } = e,
          a = c.a.add("/" + t, e);
        return (function (e) {
          return s.request({
            path: "/wscuser/scrm/api/benefitcard/is-need-enter-shop.json",
            data: { cardTplAlias: e },
          });
        })(n)
          .then((t) => {
            if (t.value) {
              var c = [{ bizType: i, bizAlias: { cardTplAlias: n } }];
              return (function (e, t, n, c) {
                void 0 === n && (n = {}), void 0 === c && (c = {});
                var { logName: i, logMsg: a } = c;
                return e && t
                  ? Object(o.g)(
                      Object(r.a)({}, n, { redirectUrl: e, bizList: t })
                    )
                  : (s.logger.appError({
                      name: i || "scrmEnterShop_without_necessary_params",
                      message: a || "调用进店方法缺少必要参数",
                      detail: {
                        bizList: t,
                        appVersion: s.getVersion(),
                        launchOption: wx.getLaunchOptionsSync(),
                      },
                    }),
                    Promise.reject());
              })(a, encodeURIComponent(JSON.stringify(c)), e, {
                logName: "benefitCardEnterShop_without_necessary_params",
              });
            }
            return Promise.resolve();
          })
          .catch(
            (e) => (
              s.logger.appError({
                name: "scrmEnterShop_app_reject",
                message: e.message,
                detail: {
                  e: e,
                  appVersion: s.getVersion(),
                  launchOption: wx.getLaunchOptionsSync(),
                },
              }),
              Promise.reject()
            )
          );
      }
    },
    "1j9u": function (e, t) {
      e.exports = {
        design: [
          { type: "config" },
          { type: "card-block" },
          { type: "simple-benefits-list-block" },
          { type: "addition-action-block" },
          { type: "card-cell-group-block" },
          { type: "recommend-goods-block" },
          {
            type: "action-btn-block",
            children: [{ type: "agreement-block" }, { type: "action-block" }],
          },
        ],
      };
    },
    "7g46": function (e, t, n) {
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "a", function () {
          return i;
        });
      var r = n("JQZX"),
        o = function (e, t) {
          var n = {},
            r = e.toString().slice(0, 2) || -1,
            o = e.toString().slice(0, 4) || -1;
          return (
            (n.province = c(0, t.province, "省份")),
            (n.city = c(r, t.city, "城市")),
            (n.county = c(o, t.county, "区县")),
            n
          );
        },
        c = function (e, t, n) {
          var o = [];
          return (
            n && o.push({ text: n, code: e }),
            Object(r.a)(t, (t, n) => {
              (e && 0 !== n.indexOf(e)) || o.push({ text: t, code: n });
            }),
            o
          );
        };
      function i(e, t) {
        var n = e.toString().slice(0, 2) + "0000",
          r = e.toString().slice(0, 4) + "00",
          o = 0,
          c = 0,
          i = 0;
        return e
          ? {
              provinceIndex: (o = t.province.findIndex((e) => {
                var { code: t } = e;
                return t == n;
              })),
              cityIndex: (c = t.city.findIndex((e) => {
                var { code: t } = e;
                return t == r;
              })),
              countyIndex: (i = t.county.findIndex((t) => {
                var { code: n } = t;
                return n == e;
              })),
            }
          : { provinceIndex: o, cityIndex: c, countyIndex: i };
      }
    },
    XaDY: function (e, t, n) {
      n("MVmR"), n("sM0J"), n("uW0L");
    },
    sM0J: function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return s;
        });
      var r = n("MVmR"),
        o = new r.b(),
        c = new r.a();
      function i(e) {
        e.setPageEvent("checkViewAggreementStatusSyncEvent", o),
          e.setPageEvent("beforeSubmitAsyncEvent", c);
      }
      function s(e) {
        e.onAsync("beforeSubmitHook", (e) =>
          c.trigger(e).then((e) => null == e || !e.length || e[0])
        ),
          e.onAsync("checkViewAggreementStatusHook", () => {
            var e = o.trigger();
            if (null != e && e.length) return e[0];
          });
      }
    },
    uW0L: function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      });
      var r,
        o = n("svh/"),
        c = {
          state: { customShowExpireDate: !0, customShowProtocol: !0 },
          mutations: {
            HIDE_CARD_EXPIRY_DATE(e) {
              e.customShowExpireDate = !1;
            },
            HIDE_PROTOCOL_BLOCK(e) {
              e.customShowProtocol = !1;
            },
          },
        };
      function i() {
        return r || (r = new o.d(c));
      }
    },
  });
