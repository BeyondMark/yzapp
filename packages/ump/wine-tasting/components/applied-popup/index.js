"use strict";
var r = require("~/r");
r(
  "PG2G",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      PG2G: function (e, s, t) {
        t.r(s);
        var a = t("MLLI"),
          i = t("bsB/"),
          r = t("N2ab"),
          c = t("DXKY"),
          n = t("amjV"),
          o = t("4gzz");
        Component({
          data: { statusBarHeight: 0, navHeight: 0, showSubscribeMask: !1 },
          properties: {
            show: {
              type: Boolean,
              value: !1,
              observer(e) {
                e && this.setData({ info: n.a.activeInfo });
              },
            },
          },
          attached() {
            this.init();
          },
          methods: {
            init() {
              Object(a.a)().then((e) => {
                var { statusBarHeight: s, system: t } = e,
                  a = 32;
                (a += ~t.indexOf("iOS") ? 12 : 16),
                  this.setData({ statusBarHeight: s, navHeight: a });
              }),
                c.a.off("wine-tasting:applySuccess", this.subscribe.bind(this)),
                c.a.on("wine-tasting:applySuccess", this.subscribe.bind(this));
            },
            onClose() {
              this.triggerEvent("close");
            },
            toggleSubscribeMask(e) {
              this.setData({ showSubscribeMask: e });
            },
            doSubscribe() {},
            subscribe() {
              var { id: e } = n.a.activeInfo;
              Promise.all([
                Object(r.b)(),
                new Promise((s) => {
                  var t = {
                    scene: "tasting_remind_scene",
                    needAlwaysToast: !1,
                    logParam: { name: "品鉴会消息订阅成功", activityId: e },
                    successCallBack: (e) => {
                      s(e);
                    },
                    showCallBack: () => {
                      this.toggleSubscribeMask(!0);
                    },
                    closeCallBack: () => {
                      this.toggleSubscribeMask(!1);
                    },
                  };
                  Object(i.e)(t);
                }),
              ]).then((s) => {
                var [t = [], a = []] = s;
                null != a &&
                  a.length &&
                  t.forEach((s) => {
                    a.includes(s.templateId) &&
                      Object(r.e)({
                        activityId: e,
                        bizId: o.a,
                        subBizId:
                          "tastingActivityStartRemind" === s.templateName
                            ? o.c.start
                            : o.c.singIn,
                        isOpen: 1,
                      });
                  });
              });
            },
          },
        });
      },
    }
  )
);
