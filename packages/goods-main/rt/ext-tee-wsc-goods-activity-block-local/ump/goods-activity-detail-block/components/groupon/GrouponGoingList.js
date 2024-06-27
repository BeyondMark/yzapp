"use strict";
var r = require("~/r");
r(
  "8VrL",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "8VrL": function (t, i, o) {
      o.r(i);
      var n = o("B9LC"),
        r = o("YeA1"),
        e = {
          name: "groupon-going-list",
          props: {
            grouponActivity: Object,
            activityInfo: Object,
            kdtId: Number,
          },
          data: () => ({ timeList: [] }),
          computed: {
            showGoingList() {
              var { ongoingGroup: t = [] } = this.grouponActivity || {};
              return t.length > 0;
            },
            grouponGoingList() {
              var { ongoingGroup: t = [] } = this.grouponActivity || {};
              return (
                t.forEach((t, i) => {
                  t.formatRemainTime = this.timeList[i];
                }),
                t
              );
            },
          },
          created() {
            var t = (this.grouponGoingList || []).map((t) => t.remainTime);
            this.runCountDown(t);
          },
          destroyed() {
            this.countDown && this.countDown.stop && this.countDown.stop();
          },
          methods: {
            runCountDown(t) {
              this.countDown = new n.a(t, {
                onChange: (t) => {
                  this.timeList = t.map((t) => {
                    var { day: i, hour: o, minute: n, second: r } = t;
                    return (
                      (i > 0 ? i + "天" : "") +
                      String(o).padStart(2, 0) +
                      ":" +
                      String(n).padStart(2, 0) +
                      ":" +
                      String(r).padStart(2, 0)
                    );
                  });
                },
              });
            },
            goGrouponGoingPath() {
              var { activityId: t, activityType: i } = this.grouponActivity;
              Object(r.a)().dmc.navigate("GrouponGoing", {
                kdtId: this.kdtId,
                activityId: t,
                activityType: i,
              });
            },
          },
          ud: !0,
        },
        a = o("9ZMt");
      i.default = a.default.component(e);
    },
  })
);
