"use strict";
var r = require("~/r");
r(
  "qvsh",
  Object.assign({}, require("~/v.js").modules, {
    qvsh: function (e, t, i) {
      i.r(t);
      var s = i("DXqK");
      Component({
        properties: {
          tip: {
            type: Object,
            observer(e) {
              this.showTip(e);
            },
          },
        },
        data: { expireTime: 0, tplsArr: [], remainTime: "" },
        attached() {},
        created() {
          (this.count = 0), (this.tid = null);
        },
        methods: {
          showTip(e) {
            var t = e.template.split(/(\${\S*})/),
              i = this.tplsHandle(e, t);
            this.setData({ tplsArr: i, expireTime: e.expireTime }),
              this.timeRunner();
          },
          tplsHandle(e, t) {
            var i = [];
            return (
              t.forEach((t, s) => {
                if (t.indexOf("field") > -1) {
                  var r = t.match(/\${(\S*)}/)[1];
                  i.push({
                    color: "general",
                    value: e[r],
                    classname: "general",
                    index: s,
                  });
                } else
                  t.indexOf("expireTime") > -1
                    ? i.push({
                        type: "countdown",
                        color: "general",
                        value: "",
                        classname: "countdown",
                        index: s,
                      })
                    : i.push({ color: "", value: t, classname: "", index: s });
              }),
              i
            );
          },
          timeRunner() {
            clearTimeout(this.tid);
            var e = this.data.expireTime - Date.now();
            if (e <= 0 && this.count > 0)
              return (
                (this.count = 0), void this.triggerEvent("btnevent", "close")
              );
            this.count += 1;
            var t = Object(s.c)(e).strData;
            (t.day = +t.day), (t.milliseconds = "0" + t.hundredMilliseconds);
            var i = t.hour + ":" + t.minute + ":" + t.second;
            t.day && (i = t.day + "天 " + i), this.setData({ remainTime: i });
            var r = 1e3;
            t.day || (r = 50),
              (this.tid = setTimeout(this.timeRunner.bind(this), r));
          },
        },
        detached() {
          clearTimeout(this.tid), (this.tid = null);
        },
      });
    },
  })
);
