"use strict";
var r = require("~/r");
r(
  "lezJ",
  Object.assign(
    {},
    require("../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      lezJ: function (t, i, s) {
        s.r(i);
        var a = s("qJXH"),
          n = s("N2ab"),
          e = s("amjV");
        Object(a.a)({
          data: { info: {}, signIn: { status: !1, show: !1, tips: "" } },
          onLoad(t) {
            (this.$_options = t), this.init(t);
          },
          init(t) {
            e.a.init(t), this.handleSignIn(t);
          },
          setSignInData(t, i) {
            void 0 === i && (i = !0),
              this.setYZData({ signIn: { show: !0, status: i, tips: t } });
          },
          handleSignIn(t) {
            var { alias: i, appIdentity: s } = t;
            Object(n.c)({ alias: i, appIdentity: s })
              .then(() => {
                this.setSignInData("尽情享受本次活动");
              })
              .catch((t) => {
                if (1000030702 === t.code)
                  return this.setSignInData("尽情享受本次活动");
                this.setSignInData(t.msg, !1);
              });
          },
        });
      },
    }
  )
);
