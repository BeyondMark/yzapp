"use strict";
var r = require("~/r");
r(
  "y2GE",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    y2GE: function (e, t, r) {
      r.r(t);
      var a = r("Fcif"),
        s = r("u8kV"),
        i = r("svh/");
      Object(s.b)({
        properties: { disabled: Boolean },
        data: {},
        mapData: Object(a.a)(
          {},
          Object(i.h)(["groupInfo", "activityInfo"]),
          Object(i.f)(["totalNum", "avatarStyle", "helpUsers"])
        ),
        methods: {
          handleClickAvatar(e) {
            var { index: t } = e.currentTarget.dataset;
            (this.data.helpUsers[t] && this.data.helpUsers[t].userPicture) ||
              this.triggerEvent("clickAvatar");
          },
        },
      });
    },
  })
);
