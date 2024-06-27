"use strict";
var r = require("~/r");
r(
  "Fs2Y",
  Object.assign({}, require("~/v.js").modules, {
    Fs2Y: function (e, t, a) {
      a.r(t);
      var i = {
          date: "选择年月日",
          time: "选择时间",
          datetime: "选择日期时间",
        },
        s = {
          props: {
            message: { type: Object, default: () => ({}) },
            value: { type: String, default: "" },
            index: Number,
          },
          data() {
            return {
              showDatePicker: !1,
              currentDate:
                "time" === this.message.type ? "" : new Date().getTime(),
              minDate: new Date(new Date().getFullYear() - 150, 0, 1).getTime(),
            };
          },
          computed: {
            title() {
              var { message: e } = this;
              return i[e.type];
            },
          },
          watch: {
            value(e) {
              var t = e.replace(/-/g, "/");
              switch (this.message.type) {
                case "time":
                  this.currentDate = t;
                  break;
                case "date":
                case "datetime":
                  this.currentDate = new Date(t).getTime();
              }
            },
          },
          methods: {
            onClick() {
              var { type: e } = this.message;
              this.$emit("date-click", {
                value: this.currentDate,
                type: e,
                index: this.index,
                title: i[e],
                minDate: "time" === e ? "" : this.minDate,
              });
            },
          },
        },
        r = a("9ZMt");
      t.default = r.default.component(s);
    },
  })
);
