"use strict";
var r = require("~/r");
r(
  "ZOkI",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    ZOkI: function (t, e, a) {
      a.r(e);
      var r = a("u8kV");
      Object(r.b)({
        properties: {
          activeStyle: { type: String, value: "" },
          activeClass: { type: String, value: "" },
          nearlyFourMonthsPriceRange: { type: Object, value: {} },
          nearlyFourMonthMinPriceMap: { type: Object, value: {} },
          nearlyFourDayMarketableMap: { type: Object, value: {} },
          ecardPriceCalendarModelMap: {
            type: Object,
            value: {},
            observer(t, e) {
              (t = t || {}),
                (e = e || {}),
                JSON.stringify(t) != JSON.stringify(e) && this.initDateList();
            },
          },
        },
        data: {
          currentYear: "",
          currentMonth: "",
          monthList: [],
          weekList: ["日", "一", "二", "三", "四", "五", "六"],
          dateList: [],
          activeMonth: 0,
        },
        ready() {
          this.initDateList();
        },
        methods: {
          initDateList() {
            var t = new Date(),
              e = +t.getFullYear(),
              a = +(t.getMonth() + 1),
              r = [];
            this.setYZData({ currentYear: e, currentMonth: a });
            for (var i = 0; i < 4; i++) r.push(this.getNextMonthData(a + i));
            this.setYZData({ monthList: r }),
              this.triggerEvent("dateItemReset"),
              this.updateDateList();
          },
          updateDateList() {
            var t = this.data.monthList[this.data.activeMonth].year,
              e = this.data.monthList[this.data.activeMonth].month,
              a = new Date(t, e, 0).getDate(),
              r = new Date((t + "-" + e + "-1").replace(/-/g, "/")).getDay();
            e = e > 9 ? e : "0" + e;
            for (var i = [], s = 0, n = r; s < n; s++) i.push({});
            for (
              var h = this.data.ecardPriceCalendarModelMap || {},
                o = a + 1,
                c = 1;
              c < o;
              c++
            ) {
              var d = t + "-" + e + "-" + (c > 9 ? c : "0" + c),
                u = { taskDate: c, info: h[d], infoDate: d };
              i.push(u);
            }
            this.setYZData({ dateList: i });
          },
          getNextMonthData(t) {
            var e = t,
              a = this.data.currentYear;
            return (
              t > 12 && (a++, (e -= 12)),
              {
                year: +a,
                month: +e,
                paramName: a + "-" + (e > 9 ? e : "0" + e),
              }
            );
          },
          onChangeMonth(t) {
            this.setYZData({ activeMonth: t.currentTarget.dataset.index }),
              this.updateDateList();
          },
          onDateItemClick(t) {
            var e = t.currentTarget.dataset;
            if (!e.disable) {
              var a = e.year,
                r = e.month,
                i = e.date;
              this.handleDateItem(a, r, i, e);
            }
          },
          handleDateItem(t, e, a, r) {
            this.setDateItemActive(a),
              this.triggerEvent("dateItemClick", {
                year: t,
                month: e,
                date: a,
                dataset: r,
              });
          },
          setDateItemActive(t) {
            var e = this.data.dateList;
            e.forEach((e) => {
              e.taskDate === t ? (e.active = !0) : (e.active = !1);
            }),
              this.setYZData({ dateList: e });
          },
        },
      });
    },
  })
);
