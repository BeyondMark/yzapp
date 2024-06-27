"use strict";
var r = require("~/r");
r(
  "4jrz",
  Object.assign(
    {},
    require("~/packages/ump/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "4jrz": function (e, a, r) {
        r.r(a);
        var t = r("yNXm"),
          i = r("hHpg"),
          l = r("7/pW"),
          p = r("RY8z"),
          o = getApp();
        Object(l.a)({
          properties: {
            themeColor: { type: String, value: "" },
            tasks: { type: Array, value: [] },
            orderJumpUrl: { type: Object, value: {} },
          },
          data: { showTaskPop: !1, openType: "" },
          attached() {
            var e;
            null == (e = this.data.tasks) ||
              e.forEach((e) => {
                var a, r;
                o.logger.log({
                  et: "view",
                  ei: null == (a = t.A[e.taskType]) ? void 0 : a.ei,
                  en: null == (r = t.A[e.taskType]) ? void 0 : r.name,
                });
              });
          },
          methods: {
            handleBtnClick(e) {
              var a,
                r,
                { taskType: l } = e.currentTarget.dataset;
              if (
                (o.logger.log({
                  et: "click",
                  ei: null == (a = t.x[l]) ? void 0 : a.ei,
                  en: null == (r = t.x[l]) ? void 0 : r.name,
                }),
                l === t.z.POINTS)
              ) {
                var s = t.D[4];
                wx.navigateTo({ url: s });
              } else if (l === t.z.ORDER) {
                var { link_type: n, extra_data: u = {} } =
                  this.data.orderJumpUrl;
                if (
                  (n ||
                    u.link_type ||
                    p.a.switchTab({ url: "/packages/home/dashboard/index" }),
                  "weapplink" === n && "2" === u.link_type)
                ) {
                  var { other_weapp_appid: d = "", other_weapp_link: v = "" } =
                    u;
                  return wx.navigateToMiniProgram({
                    appId: d,
                    path: v,
                    fail(e) {
                      Object(i.a)(e.errMsg || "打开其他小程序失败");
                    },
                  });
                }
                this.ctx.process.invoke("jumpToLink", {
                  type: n,
                  jumpUrl: this.data.orderJumpUrl,
                });
              }
            },
          },
        });
      },
    }
  )
);
