"use strict";
var r = require("~/r");
r(
  "nrli",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      nrli: function (e, t, i) {
        i.r(t);
        var a = i("9ZMt"),
          l = i("ONqW"),
          o = i("z9IR"),
          s = i("JXNC"),
          r = i("H0mK"),
          n = i("YeA1"),
          c = {
            data: () => ({ visible: !1 }),
            watch: {
              visible(e) {
                if (e) {
                  var t = "weapp" === a.default.getEnv() ? "weapp" : "wechat";
                  Object(s.a)(t),
                    Object(l.a)().log({
                      et: "view",
                      ei: "show_fuchuang_xianyonghoufu_" + t,
                      en: "“先用后付”浮窗曝光",
                    });
                }
              },
            },
            created() {
              Object(n.d)(this, {
                showPriorUseDialog: () => {
                  this.visible = !0;
                },
              });
            },
            methods: {
              onClose() {
                (this.visible = !1),
                  this.ctx.event.emit("closeAutoOpenPopup", {
                    isRealClose: !0,
                  });
              },
              getClick() {
                var e = a.default.getEnv(),
                  t = { env: "weapp" === e ? "weapp" : "wechat" };
                Object(l.a)().log({
                  et: "click",
                  ei: "open_fuchuang_xianyonghoufu_" + e,
                  en: "“先用后付”店家开通",
                }),
                  Object(r.a)(t)
                    .then(() => {})
                    .catch((e) => {
                      "cancel" !== (null == e ? void 0 : e.errorType) &&
                        "fail" === (null == e ? void 0 : e.errorType) &&
                        o.a
                          .alert({
                            title: "领取失败",
                            context: this,
                            ref: this.$refs.priorUseDialog,
                          })
                          .then(() => {
                            (this.visible = !1), this.onClose();
                          });
                    });
              },
            },
            ud: !0,
          };
        t.default = a.default.component(c);
      },
    }
  )
);
