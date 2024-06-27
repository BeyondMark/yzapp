"use strict";
var r = require("~/r");
r(
  "zBuw",
  Object.assign(
    {},
    require("../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "53ek": function (r, e, t) {
        var n = (r, e, t) => {
          return ((u = r), Object.keys(u).map((r) => [r, u[r]]))
            .map((r) => {
              var [e, u] = r;
              return [e, "object" == typeof u ? n(u, [], t) : u(t)];
            })
            .concat(e.map((r) => [r, t[r]]))
            .reduce((r, e) => {
              var [t, n] = e;
              return (r[t] = n), r;
            }, {});
          var u;
        };
        e.a = n;
      },
      "5tio": function (r, e, t) {
        t.d(e, "a", function () {
          return i;
        });
        var n = t("8B9M"),
          u = Object(n.a)(),
          i = (r) => {
            var e = (u.logger.getGlobal() || {}).user || {},
              t = { is_share: 1, share_cmpt: r };
            return e.uuid && (t.from_uuid = e.uuid || ""), t;
          };
      },
      OTjV: function (r, e, t) {
        t.d(e, "a", function () {
          return o;
        });
        var n = t("Fcif"),
          u = t("VmHG");
        function i(r) {
          return () => r;
        }
        function c(r) {
          return Object.keys(r).reduce((e, t) => {
            var n = r[t];
            return (
              (e[t] = function () {
                return n(this, this);
              }),
              e
            );
          }, {});
        }
        function a(r) {
          return Object.keys(r).reduce((e, t) => {
            var n = r[t];
            return (
              (e[t] = function () {
                for (
                  var r = this,
                    e = r,
                    t = arguments.length,
                    u = new Array(t),
                    i = 0;
                  i < t;
                  i++
                )
                  u[i] = arguments[i];
                return n(e, ...u);
              }),
              e
            );
          }, {});
        }
        function s(r) {
          return Object.keys(r).reduce((e, t) => {
            var n = r[t];
            return (
              (e[t] = function () {
                for (
                  var r = this,
                    e = (e, t) => {
                      r[e](t);
                    },
                    t = arguments.length,
                    u = new Array(t),
                    i = 0;
                  i < t;
                  i++
                )
                  u[i] = arguments[i];
                return n(
                  { state: r, getters: r, commit: e, dispatch: e },
                  ...u
                );
              }),
              e
            );
          }, {});
        }
        function o(r) {
          var { state: e, getters: t, actions: o, mutations: f } = r;
          return Object(u.a)({
            state: i(e),
            getters: c(t),
            actions: Object(n.a)({}, s(o), a(f)),
          });
        }
      },
      PidN: function (r, e, t) {
        t.d(e, "a", function () {
          return c;
        });
        var n = t("Fcif"),
          u = t("lRMv"),
          i = getApp();
        function c(r, e, t, c, a) {
          if (
            (void 0 === r && (r = {}), void 0 === a && (a = {}), !t || !e || !c)
          )
            return (
              i.logger.appError({
                name: s || "umpEnterShop_without_necessary_params",
                message: o || "调用进店方法缺少必要参数",
                detail: {
                  umpType: t,
                  umpAlias: e,
                  redirectUrl: c,
                  appVersion: i.getVersion(),
                  launchOption: wx.getLaunchOptionsSync(),
                },
              }),
              Promise.reject()
            );
          var { logName: s, logMsg: o } = a;
          return Object(u.g)(
            Object(n.a)({}, r, { umpAlias: e, umpType: t, redirectUrl: c })
          );
        }
      },
      zBuw: function (r, e, t) {
        t.r(e);
        t("g0GZ"), t("uDJY");
      },
    }
  )
);
