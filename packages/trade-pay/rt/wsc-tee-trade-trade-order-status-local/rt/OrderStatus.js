"use strict";
var r = require("~/r");
r(
  "fD8z",
  Object.assign({}, require("~/v.js").modules, {
    fD8z: function (t, e, n) {
      n.r(e);
      var r = n("YeA1");
      function o(t) {
        return (t < 10 ? "0" : "") + t;
      }
      var s = {
          data: () => ({
            icon: "",
            title: "",
            desc: "",
            steps: [],
            countdownInterval: 0,
            countdownDesc: "",
          }),
          computed: {
            iconStyle() {
              return "background-image: url('" + this.icon + "')";
            },
            isCountdownDesc() {
              return this.desc.indexOf("#{counterText}") > -1;
            },
            active() {
              return this.steps.findIndex((t) => t.current && t.done);
            },
          },
          watch: {
            countdownInterval(t) {
              t && this.isCountdownDesc && this.startCountDown();
            },
          },
          created() {
            Object(r.b)(this, [
              "title",
              "icon",
              "steps",
              "desc",
              "countdownInterval",
            ]);
          },
          destroyed() {
            clearInterval(this.tid);
          },
          methods: {
            startCountDown() {
              var t = this.countdownInterval,
                e = Date.now() + t;
              this.setCounterDesc(t),
                (this.tid = setInterval(() => {
                  (t = Math.max(0, e - Date.now())) <= 0
                    ? (clearInterval(this.tid),
                      this.ctx.event.emit("countdownOver"))
                    : this.setCounterDesc(t);
                }, 1e3));
            },
            setCounterDesc(t) {
              var e = (function (t) {
                var e,
                  n,
                  r,
                  s,
                  i = Math.floor(t / 1e3);
                (e = Math.floor(i / 86400)),
                  (i %= 86400),
                  (n = Math.floor(i / 3600)),
                  (i %= 3600),
                  (r = Math.floor(i / 60)),
                  (s = i % 60);
                var c = [o(e) + "天", o(n) + "时", o(r) + "分", o(s) + "秒"];
                return (
                  e || (c.shift(), n || (c.shift(), r || c.shift())), c.join("")
                );
              })(t);
              this.countdownDesc = this.desc.replace("#{counterText}", e);
            },
          },
          ud: !0,
        },
        i = n("9ZMt");
      e.default = i.default.component(s);
    },
  })
);
