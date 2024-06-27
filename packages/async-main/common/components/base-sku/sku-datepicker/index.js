"use strict";
var r = require("~/r");
r(
  "b2CK",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      b2CK: function (e, t, r) {
        r.r(t);
        var a = r("Fcif"),
          i = r("u8kV"),
          s = r("Syp2"),
          c = r("dYp/");
        Object(i.b)({
          properties: {
            zIndex: { type: Number, default: 1 },
            show: { type: Boolean, default: !1, observer: "onShowChange" },
            info: { type: Object, observer: "onInfoChange" },
          },
          data: {
            currentDate: "",
            minDate: new Date(new Date().getFullYear() - 60, 0, 1).getTime(),
            type: "time",
            showPicker: !1,
            title: c.c.time,
            formatter: (e, t) => "" + t + c.b[e],
          },
          methods: {
            onShowChange(e) {
              e && this.setYZData({ showPicker: !0 });
            },
            hidePicker() {
              this.setYZData({ showPicker: !1 });
            },
            getCurrentDate(e, t) {
              var r = "";
              switch (t) {
                case "time":
                  r = e;
                  break;
                case "date":
                case "datetime":
                  r = Object(s.a)(e) || new Date().getTime();
              }
              return r;
            },
            onInfoChange(e) {
              var t = e.type || "time";
              this.setYZData({
                type: t,
                title: c.c[t],
                currentDate: this.getCurrentDate(e.currentDate, t),
              });
            },
            closeDateTimePicker() {
              this.triggerEvent("close");
            },
            confirmDateTimePicker(e) {
              var t = e.detail;
              "time" !== this.data.type && (t = Object(s.b)(t, this.data.type)),
                this.triggerEvent(
                  "confirm",
                  Object(a.a)({}, this.data.info, { currentDate: t })
                ),
                this.closeDateTimePicker();
            },
          },
        });
      },
    }
  )
);
