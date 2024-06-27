"use strict";
(exports.ids = [27]),
  (exports.modules = {
    "6t71": function (e, r, s) {
      function p(e, r) {
        var s,
          p = getApp();
        null == p ||
          null == (s = p.logger) ||
          null == s.appError ||
          s.appError({
            name: "WeappAccessLog",
            appName: "wsc-h5-user",
            logIndex: "wsc_user_log",
            message: "【WeappAccessLog】小程序页面被访问：" + e,
            level: "warn",
            extra: r || {},
          });
      }
      s.d(r, "a", function () {
        return p;
      });
    },
  });
