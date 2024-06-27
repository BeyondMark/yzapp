"use strict";
var r = require("~/r");
r(
  "iQXP",
  Object.assign({}, require("~/v.js").modules, {
    iQXP: function (t, e, i) {
      i.r(e);
      var a = i("Fcif"),
        s = {
          name: "ActivityFilter",
          props: {
            color: String,
            list: { type: Array, default: () => [] },
            filter: { type: Object, default: () => ({}) },
          },
          data: () => ({
            isShowCity: !1,
            isShowDate: !1,
            isShowStatus: !1,
            city: {},
            date: {},
            status: {},
            current: [],
            columns: [],
          }),
          computed: {
            minmax() {
              var {
                  limitDate: t = !1,
                  minStartAt: e,
                  maxEndAt: i,
                } = this.date || {},
                a = new Date().getTime();
              return {
                min: t ? new Date(e).getTime() : a,
                max: t ? new Date(i).getTime() : a + 15372e6,
              };
            },
          },
          created() {
            this.init(this.filter);
          },
          watch: {
            filter(t) {
              this.init(t);
            },
          },
          methods: {
            init(t) {
              var { city: e, date: i, status: a } = t;
              (this.city = e), (this.date = i), (this.status = a);
            },
            sync() {
              var { list: t, city: e, date: i, status: a } = this,
                s = t.slice();
              (s = this.buyCity(s, e)),
                (s = this.buyStatus(s, a)),
                (s = this.buyDate(s, i)),
                this.$emit("change", s);
            },
            format: (t) => t.getMonth() + 1 + "." + t.getDate(),
            buyCity(t, e) {
              var { text: i, value: a } = e.value;
              return 0 === a
                ? t
                : t.filter((t) => {
                    var { filterInfo: e } = t;
                    return e.city === i;
                  });
            },
            buyDate(t, e) {
              if (!e.current || !e.limitDate) return t;
              var { v1: i, v2: a } = e.current,
                s = i.getTime(),
                r = a.getTime();
              return t.filter((t) => {
                var { filterInfo: e } = t,
                  { startAt: i } = e;
                return i >= s && i <= r;
              });
            },
            buyStatus(t, e) {
              var { value: i } = e.value;
              return 0 === i
                ? t
                : t.filter((t) => {
                    var { filterInfo: e } = t;
                    return e.status == i;
                  });
            },
            handleCityChange(t) {
              var { value: e } = t;
              (this.city = Object(a.a)({}, this.city, { value: e })),
                this.sync(),
                (this.isShowCity = !1);
            },
            handleStatusChange(t) {
              (this.status = Object(a.a)({}, this.status, { value: t })),
                this.sync(),
                (this.isShowStatus = !1);
            },
            handleDateChange(t) {
              var e = this.format(t[0]),
                i = this.format(t[1]),
                s = e === i ? e : e + "-" + i;
              (this.date = Object(a.a)({}, this.date, {
                text: s,
                current: { v1: t[0], v2: t[1] },
              })),
                this.sync(),
                (this.isShowDate = !1);
            },
            handleShowCity() {
              this.isShowCity = !0;
            },
            handleShowDate() {
              this.isShowDate = !0;
            },
            handleShowStatus() {
              this.isShowStatus = !0;
            },
            handleCloseCity() {
              this.isShowCity = !1;
            },
            handleCloseStatus() {
              this.isShowStatus = !1;
            },
            handleCloseDate() {
              this.isShowDate = !1;
            },
          },
          ud: !0,
        },
        r = i("9ZMt");
      e.default = r.default.component(s);
    },
  })
);
