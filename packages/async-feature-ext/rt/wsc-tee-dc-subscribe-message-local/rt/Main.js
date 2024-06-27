"use strict";
var r = require("~/r");
r(
  "MmZF",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      MmZF: function (s, t, e) {
        e.r(t);
        var a = e("Fcif"),
          i = e("+I+c"),
          o = e("G0wj"),
          c = ["options", "noToast"],
          r = {
            data: () => ({ showTips: !1, imgTop: "25%" }),
            created() {
              var s = this;
              this.ctx.process.define(
                "requestWechatSubscribeMessagePush",
                (s) => {
                  var { options: t, noToast: e = !0 } = s,
                    r = Object(i.a)(s, c);
                  Object(o.a)(
                    Object(a.a)(
                      {
                        ctx: this.ctx,
                        options: Object(a.a)({}, t, {
                          noToast: e,
                          onShowTips: () => {
                            this.ctx.data.subscribeData = { showTips: !0 };
                          },
                          onCloseTips: () => {
                            this.ctx.data.subscribeData = { showTips: !1 };
                          },
                        }),
                      },
                      r
                    )
                  );
                }
              ),
                (this.unwatchSubscribeData = this.ctx.watch(
                  "subscribeData",
                  function (t) {
                    void 0 === t && (t = {});
                    var { showTips: e = s.showTips, zIndex: a = s.zIndex } = t;
                    (s.showTips = e), (s.zIndex = a);
                  }
                ));
            },
            destroyed() {
              this.unwatchSubscribeData();
            },
            ud: !0,
          },
          n = e("9ZMt");
        t.default = n.default.component(r);
      },
    }
  )
);
