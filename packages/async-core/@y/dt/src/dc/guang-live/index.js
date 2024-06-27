"use strict";
var r = require("~/r");
r(
  "7Upl",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "7Upl": function (t, e, a) {
        a.r(e);
        var i = a("9ZMt"),
          r = a("2wjL"),
          d = a("EqB2"),
          o = a("GgVF"),
          s = a("hk4w"),
          n = a("Inm9"),
          m = a("AGZf"),
          v = a("mztD"),
          c = {
            mixins: [Object(d.a)({ optDesc: s.a })],
            data: () => ({ cover: "", type: "", text: "" }),
            mounted() {
              var { roomId: t } = this.opt;
              (t
                ? o.a.getLiveRoomInfo(t)
                : o.a.getLivePreview(this.kdtId)
              ).then((t) => {
                if (t) {
                  var {
                    coverUri: e,
                    id: a,
                    state: i,
                    startedAt: d,
                    memberCount: o,
                  } = t;
                  this.cover = Object(v.a)(e, "!210x0.jpg");
                  var { type: s, text: m } = Object(n.a)({
                      state: i,
                      startedAt: d,
                      memberCount: o,
                    }),
                    c =
                      "unstarted" === s
                        ? "/packages/live/detail/index"
                        : "/packages/main/live-room/index";
                  (this.path = r.a.add(
                    c,
                    { id: a, coverUri: e, guangRelationKdtId: this.kdtId },
                    !0
                  )),
                    (this.type = s),
                    (this.text = m);
                }
              });
            },
            methods: {
              onClick() {
                i.default.$native.navigateToMiniProgram({
                  appId: "wxa2e624400134d690",
                  path: this.path,
                  fail() {
                    m.a.fail("跳转失败");
                  },
                });
              },
            },
            ud: !0,
          };
        e.default = i.default.component(c);
      },
    }
  )
);
