"use strict";
var r = require("~/r");
r(
  "jC0d",
  Object.assign({}, require("~/v.js").modules, {
    jC0d: function (t, i, e) {
      e.r(i);
      var s = {
          name: "tuan-detail",
          props: {
            activity: { type: Object, default: () => ({}) },
            theme: { type: Object, default: () => ({}) },
          },
          data: () => ({ showActivityPop: !1 }),
          computed: {
            num() {
              var t,
                { activity: i = {} } = this;
              return (null == (t = i.allRules) ? void 0 : t.length) || 0;
            },
            active() {
              var t = this.activity.soldCount || 0,
                { allRules: i = [] } = this.activity,
                e = i.find((i, e) => ((i.index = e), i.min > t));
              return (e ? (null == e ? void 0 : e.index) || 1 : i.length) - 1;
            },
            soldCount() {
              var { soldCount: t = 0 } = this.activity;
              return "已售" + t + "件";
            },
            showRules() {
              var { allRules: t = [] } = this.activity,
                i = this.active,
                e = [...t];
              (t[this.num - 1].last = !0),
                this.active
                  ? ((t[i].active = !0), (e = e.splice(i - this.num)))
                  : e.splice(0, 1);
              var s = e.length;
              return 4 === s && e.splice(2, 1), 5 === s && e.splice(2, 2), e;
            },
            tuanIntroBarTitle() {
              var { activity: t } = this;
              return 1 === t.isCash
                ? "团购返现说明"
                : 2 === t.isCash
                ? "返储值金说明"
                : void 0;
            },
          },
          methods: {
            showPopUp() {
              this.showActivityPop = !0;
            },
            hidePopUp() {
              this.showActivityPop = !1;
            },
          },
          ud: !0,
        },
        a = e("9ZMt");
      i.default = a.default.component(s);
    },
  })
);
