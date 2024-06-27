"use strict";
var r = require("~/r");
r(
  "7YnJ",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "7YnJ": function (e, t, n) {
      n.r(t);
      var r = n("CgAV");
      Component({
        properties: {},
        data: {},
        lifetimes: { attached() {}, detached() {} },
        methods: {
          loginBywxAuthorize(e) {
            Object(r.a)({ event: e, context: this });
          },
        },
      });
    },
    CgAV: function (e, t, n) {
      var r = n("WRHT");
      t.a = r.a;
    },
    WRHT: function (e, t, n) {
      n.d(t, "b", function () {
        return o;
      });
      var r = n("z24M");
      var o = () => {
        var e = getApp().getSystemInfoSync();
        return (
          !Object(r.a)("transactionWeappFlag") &&
          (!e.environment || "wxwork" !== e.environment || "ios" !== e.platform)
        );
      };
      t.a = function (e) {
        void 0 === e && (e = {});
        var t = getCurrentPages();
        e = Object.assign(
          {
            selector: "#account-wx-login",
            context: t.length ? t[t.length - 1] : null,
          },
          e
        );
        var { context: n } = e;
        if (!n || !n.selectComponent) throw new Error("context is required");
        var r = n.selectComponent(e.selector);
        if (!r) throw new Error("Can not find the selector " + e.selector);
        (e.selectComponent = r), r.wxLogin && r.wxLogin(e);
      };
    },
  })
);
