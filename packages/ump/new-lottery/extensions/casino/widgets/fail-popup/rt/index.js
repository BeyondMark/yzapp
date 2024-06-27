"use strict";
var r = require("~/r");
r(
  "U8jw",
  Object.assign(
    {},
    require("~/packages/ump/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      U8jw: function (e, t, s) {
        s.r(t);
        var a = s("yNXm"),
          r = s("7/pW"),
          i = {
            [a.i.END]: "活动已结束",
            [a.i.LACK_OF_POINTS]: "积分不足无法抽奖",
            [a.i.OTHER_TASKS]: "已经没有抽奖机会了",
          },
          o = {
            [a.i.LACK_OF_POINTS]: "快去积分中心获取积分",
            [a.i.OTHER_TASKS]: "完成以下任务获取抽奖机会",
          },
          l = getApp();
        Object(r.a)({
          properties: {
            tasks: { type: Array, value: [], observer: "updateTasks" },
            openType: { type: String, value: "", observer: "updateText" },
            show: { type: Boolean, value: !1, observer: "handleLog" },
            recommendGoodsList: { type: Array, value: [] },
            orderJumpUrl: { type: Object, value: {} },
          },
          data: { title: "", desc: "", filteredTask: [] },
          methods: {
            close() {
              this.triggerEvent("close");
            },
            updateText(e) {
              this.setYZData({ title: i[e], desc: o[e], openType: e }),
                this.updateTasks(this.data.tasks);
            },
            updateTasks(e) {
              var t = e.filter((e) => e.taskType === a.z.POINTS),
                s = e.filter((e) => e.taskType !== a.z.POINTS);
              this.setYZData({
                filteredTask: this.data.openType === a.i.LACK_OF_POINTS ? t : s,
              });
            },
            handleLog() {
              this.data.filteredTask.forEach((e) => {
                var t, s;
                l.logger.log({
                  et: "view",
                  ei: null == (t = a.A[e.taskType]) ? void 0 : t.ei,
                  en: null == (s = a.A[e.taskType]) ? void 0 : s.name,
                });
              });
            },
          },
        });
      },
    }
  )
);
