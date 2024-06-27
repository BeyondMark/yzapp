"use strict";
var r = require("~/r");
r(
  "3Vie",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "3Vie": function (s, e, i) {
        i.r(e);
        var o = i("AGZf"),
          t = i("jggy"),
          c = i("HJxx"),
          a = i("z0eK"),
          h = () => {},
          l = {
            data: () => ({
              show: !1,
              joinSuccess: !1,
              levelGroupMode: 1,
              levelGapInfo: {},
              missionList: [],
              giftBag: {},
            }),
            created() {
              this.onSuccessClose = h;
            },
            methods: {
              launchJoinMemberNotice(s) {
                void 0 === s && (s = {});
                var { alias: e } = s;
                this.onSuccessClose = s.onSuccessClose || h;
                var i = {};
                e && (i.alias = e),
                  Object(t.a)(i).then((s) => {
                    var {
                      isSuccess: e,
                      levelGroupMode: i,
                      levelGapInfo: h = {},
                      hasGift: l,
                      giftBag: u = {},
                    } = s;
                    (this.levelGroupMode = i),
                      (this.joinSuccess = e),
                      (this.levelGapInfo = h),
                      !e || (l && Object(c.a)(u))
                        ? e && l && Object(c.a)(u)
                          ? ((this.show = !0), (this.giftBag = u))
                          : e || i !== a.a.GROWTH
                          ? e || i === a.a.GROWTH
                            ? o.a.fail("入会失败，请稍后重试")
                            : (this.show = !0)
                          : Object(t.b)().then((s) => {
                              var e = Object(c.b)(s);
                              (this.missionList = e), (this.show = !0);
                            })
                        : (o.a.success("入会成功"),
                          setTimeout(() => {
                            this.onSuccessClose();
                          }, 500));
                  });
              },
              onClose() {
                this.joinSuccess && this.onSuccessClose(), (this.show = !1);
              },
              handleSuccessConfirm() {
                this.onSuccessClose(), (this.show = !1);
              },
            },
            ud: !0,
          },
          u = i("9ZMt");
        e.default = u.default.component(l);
      },
    }
  )
);
