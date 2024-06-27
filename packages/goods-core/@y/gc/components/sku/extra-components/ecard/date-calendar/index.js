"use strict";
var r = require("~/r");
r(
  "QhJS",
  Object.assign({}, require("~/v.js").modules, {
    QhJS: function (e, t, r) {
      r.r(t);
      var a = {
          props: {
            dates: { type: Object, default: () => ({}) },
            activeMonth: { type: Object, default: () => ({}) },
            activeId: { type: String, default: "" },
          },
          data: () => ({ week: ["日", "一", "二", "三", "四", "五", "六"] }),
          computed: {
            renderDays() {
              var { year: e = 0, month: t = 0, days: r = [] } = this.dates,
                a = new Date(e, t, 0).getDate();
              if (r.length !== a) throw new Error("传入的日期数据不对");
              var d = new Date(e + "/" + t + "/" + r[0].date);
              if ("Invalid Date" === d.toString())
                throw new Error("传入的日期数据不能被格式化");
              for (var n = d.getDay(), i = [], s = 0; s < n; s++)
                i.push({ date: -1, id: -1 });
              return i.concat(r);
            },
          },
          methods: {
            onItemClick(e, t) {
              var r = this.renderDays.filter((e, r) => r < t + 4 && r >= t);
              this.$emit("select", { date: e, index: t, nearDateList: r });
            },
          },
          ud: !0,
        },
        d = r("9ZMt");
      t.default = d.default.component(a);
    },
  })
);
