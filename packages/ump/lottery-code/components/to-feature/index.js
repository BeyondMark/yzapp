"use strict";
var r = require("~/r");
r(
  "IklL",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    IklL: function (e, a, t) {
      t.r(a);
      var c = t("Fcif"),
        s = t("u8kV"),
        i = t("svh/"),
        r = t("RY8z");
      Object(s.b)({
        mapData: Object(c.a)(
          {},
          Object(i.h)(["showFeature", "activity"]),
          Object(i.f)(["featureList"])
        ),
        data: {
          toViewIcon:
            "https://b.yzcdn.cn/public_files/36c75b748ca1d5fec872da501dbfaf82.png",
          completeIcon:
            "https://b.yzcdn.cn/public_files/1dc0e30c62212ad1b221272749e41dce.png",
        },
        methods: Object(c.a)({}, Object(i.g)(["TOGGLE_TASK_POPUP"]), {
          toFeature(e) {
            var { alias: a } = e.target.dataset;
            r.a.redirect({
              url:
                "/packages/home/feature/index?alias=" +
                a +
                "&codeAlias=" +
                this.data.activity.alias,
            });
          },
          onClose() {
            this.TOGGLE_TASK_POPUP({ name: "showFeature", value: !1 });
          },
        }),
      });
    },
  })
);
