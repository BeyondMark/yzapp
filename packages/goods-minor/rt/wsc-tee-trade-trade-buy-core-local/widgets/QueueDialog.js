"use strict";
var r = require("~/r");
r(
  "NOP+",
  Object.assign({}, require("~/v.js").modules, {
    "NOP+": function (t, e, a) {
      a.r(e);
      var s = a("AGZf"),
        i = {
          props: {
            value: { type: Boolean },
            status: { type: String },
            asyncOrder: Boolean,
          },
          watch: {
            value(t, e) {
              t !== e && this.handleWaiting();
            },
            status(t, e) {
              t !== e && this.handleWaiting();
            },
          },
          created() {
            (this.timeout = null), (this.interval = []);
          },
          methods: {
            handleWaiting() {
              var { value: t, status: e } = this;
              t && "wating" === e ? this.start() : this.reset();
            },
            onClose() {
              this.$emit("cancel");
            },
            reset() {
              clearTimeout(this.timeout),
                (this.timeout = null),
                this.interval.forEach((t) => {
                  clearInterval(t);
                }),
                (this.interval = []),
                s.a.clear();
            },
            start() {
              var t = s.a.loading({
                  duration: 0,
                  forbidClick: !0,
                  context: this,
                  mask: !0,
                  ref: this.$refs["queue-toast"],
                }),
                e = 5,
                { asyncOrder: a } = this,
                i = a ? "正在为您结算" : "抢购人数太多";
              this.timeout = setTimeout(() => {
                t.setData({ message: i + "\n请等待(" + (e - 1) + "s)" });
                var a = setInterval(() => {
                  --e > 0
                    ? t.setData({ message: i + "\n请等待(" + (e - 1) + "s)" })
                    : (t.setData({ message: "抢购人数太多\n请等待..." }),
                      clearInterval(a));
                }, 1e3);
                this.interval.push(a);
              }, 3e3);
            },
          },
          ud: !0,
        },
        r = a("9ZMt");
      e.default = r.default.component(i);
    },
  })
);
