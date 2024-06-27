"use strict";
var r = require("~/r");
r(
  "t9lT",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      t9lT: function (e, t, a) {
        a.r(t);
        var l = a("eijD"),
          r = a("9ZMt"),
          s = a("PgAH"),
          i = a("s9/f"),
          o = a("EqB2"),
          n = r.default.getApp(),
          c = r.default.getGlobal("logger"),
          d = {
            mixins: [Object(o.a)({ optDesc: i.a })],
            props: { themeColors: { type: Object, default: () => {} } },
            data: () => ({ isShowCpn: !1, title: "", desc: "" }),
            created() {
              this.initData();
            },
            methods: {
              initData() {
                var e = this;
                return Object(l.a)(function* () {
                  var { title: t, desc: a } = e.opt || {},
                    { available: l } = yield Object(s.a)();
                  (e.title = t), (e.desc = a), (e.isShowCpn = l);
                })();
              },
              toOrderPool() {
                c &&
                  c.log({
                    et: "click",
                    ei: "joint_entry",
                    en: "进入拼单",
                    params: { component: "shelfOrderPool" },
                  }),
                  (n.globalData.shelfParams = { scene: 1 }),
                  r.default.navigate({
                    url: "/packages/retail-shelf/shelf/index?scene=1",
                  });
              },
            },
            ud: !0,
          };
        t.default = r.default.component(d);
      },
    }
  )
);
