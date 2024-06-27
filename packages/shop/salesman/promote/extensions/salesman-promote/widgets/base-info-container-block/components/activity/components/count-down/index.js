"use strict";
var r = require("~/r");
r(
  "0Skw",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "0Skw": function (t, e, i) {
        i.r(e);
        var s = i("Bt9F"),
          r = i("we3t"),
          n = i("kHfR");
        Object(s.a)({
          name: "ActivityCountDown",
          behaviors: [n.b],
          properties: { countdown: Object, activityNotStart: Boolean },
          data: { remainDesc: "", remainObj: {}, ended: !1 },
          watch: {
            countdown(t) {
              t && this.timeRunner();
            },
          },
          created() {
            (this.count = 0), (this.tid = null);
          },
          ready() {
            this.properties.countdown && !this.hasDetached && this.timeRunner();
          },
          methods: {
            timeRunner() {
              if ((clearTimeout(this.tid), this.properties.countdown)) {
                var { activityNotStart: t } = this.properties,
                  { end: e } = this.properties.countdown,
                  i = e - Date.now(),
                  s = "";
                if (
                  ((s =
                    i > 864e5 && !t
                      ? this.properties.countdown.desc.replace("仅剩", "还剩")
                      : this.properties.countdown.desc),
                  i <= 0 && this.count > 0)
                )
                  return (
                    this.setYZData({ remainDesc: "已结束", ended: !0 }),
                    void this.triggerEvent("countdown-ended")
                  );
                if (i <= 0) this.setYZData({ remainDesc: "已结束", ended: !0 });
                else {
                  this.count += 1;
                  var n = Object(r.o)(i);
                  (n.milliseconds = ("" + n.milliseconds).substr(0, 2)),
                    this.setYZData({ remainDesc: s, remainObj: n });
                  var o = 500;
                  n.days || (o = 50),
                    (this.tid = setTimeout(this.timeRunner.bind(this), o));
                }
              }
            },
          },
          detached() {
            (this.hasDetached = !0), clearInterval(this.tid), (this.tid = null);
          },
        });
      },
    }
  )
);
