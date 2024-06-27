"use strict";
var r = require("~/r");
r(
  "pXZx",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      pXZx: function (e, t, o) {
        o.r(t);
        var n = o("eijD"),
          a = o("US/N"),
          i = o("w2Y9"),
          l = o.n(i),
          r = o("9ZMt"),
          s = o("AGZf"),
          c = o("5ENr"),
          d = {
            props: {
              show: { type: Boolean, default: !1 },
              logComponent: { type: String, default: "unknown" },
            },
            data: () => ({
              registryState: c.b.Unknown,
              memThresholdType: c.c.Unknown,
              memThresholdValue: 0,
              afterFetchDataShow: !1,
              RegistryState: c.b,
            }),
            watch: {
              show(e) {
                !0 === e
                  ? this.handleJoinDone()
                  : (this.afterFetchDataShow = !1);
              },
            },
            methods: {
              handleClose() {
                this.$emit("close");
              },
              handleLog(e) {
                var { et: t = "view", ei: o, en: n } = e,
                  a = r.default.getGlobal("logger");
                a &&
                  a.log({
                    et: t,
                    ei: o,
                    en: n,
                    params: { component: this.logComponent },
                  });
              },
              handleJoinDone() {
                var e = this;
                return Object(n.a)(function* () {
                  var t = () => {
                    var t = l.a.add(
                      "https://h5.youzan.com/wscuser/levelcenter/simplified-fill",
                      {
                        kdt_id: e.kdtId,
                        levelType: c.a.Free,
                        fromScene: "complete",
                        title: "完善信息",
                        jumpTo: "Home",
                      }
                    );
                    r.default.navigate({
                      url: "pages/common/webview-page/index?src=" + t,
                    });
                  };
                  yield Object(a.default)({
                    path: "/wscuser/level/api/checkMemRegistrationState.json",
                  })
                    .then((o) => {
                      var {
                        hasCondition: n = !1,
                        needFillInfo: a = !1,
                        conditionType: i = c.c.Unknown,
                        conditionValue: l = 0,
                      } = o;
                      return a
                        ? (e.handleLog({
                            et: "click",
                            en: "注册会员 - 有注册信息",
                            ei: "registry_fill_info",
                          }),
                          e.handleClose(),
                          void t())
                        : ((e.registryState = n ? c.b.Threshold : c.b.Success),
                          e.registryState === c.b.Success
                            ? (e.handleLog({
                                et: "click",
                                en: "注册会员成功 - 无门槛无注册信息",
                                ei: "registry_success",
                              }),
                              e.handleClose(),
                              void setTimeout(() => {
                                s.a.success("    欢迎入会\n已领取新人礼");
                              }, 100))
                            : (e.handleLog({
                                et: "click",
                                en: "注册会员 - 有门槛",
                                ei: "registry_threshold",
                              }),
                              (e.afterFetchDataShow = !0),
                              (e.memThresholdType = i),
                              void (e.memThresholdValue = l)));
                    })
                    .catch(() => {
                      t();
                    });
                })();
              },
            },
            ud: !0,
          };
        t.default = r.default.component(d);
      },
    }
  )
);
