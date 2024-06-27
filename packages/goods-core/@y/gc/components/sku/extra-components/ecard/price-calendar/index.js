"use strict";
var r = require("~/r");
r(
  "u2TG",
  Object.assign({}, require("~/v.js").modules, {
    u2TG: function (t, e, a) {
      a.r(e);
      var r = a("Fcif"),
        i = {
          props: {
            itemPreOrderTimeStr: { type: String, default: "" },
            calendarData: { type: Object, default: () => ({}) },
            activeMonth: { type: Object, default: () => ({}) },
            activeDateId: { type: String, default: "" },
          },
          computed: {
            activeItem() {
              var { year: t, name: e } = this.activeMonth;
              return (this.calendarData.monthDataList || [])
                .filter((a) => +a.year === t && +a.month === e)
                .pop();
            },
          },
          methods: {
            onMonthClick(t) {
              this.$emit("select-month", t);
            },
            onCalendarSelect(t) {
              var { nearDateList: e } = t;
              if (e.length < 4) {
                var { year: a, name: i } = this.activeMonth,
                  n = (this.calendarData.monthDataList || [])
                    .filter((t) => +t.year === a && +t.month === i + 1)
                    .pop();
                if (n && n.days && n.days.length) {
                  var c = 4 - e.length,
                    s = n.days.slice(0, c);
                  e = e.concat(s);
                }
              }
              this.$emit(
                "select-date",
                Object(r.a)({}, t.date, { nearDateList: e })
              );
            },
          },
          ud: !0,
        },
        n = a("9ZMt");
      e.default = n.default.component(i);
    },
  })
);
