"use strict";
var r = require("~/r");
r(
  "3pKi",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "3pKi": function (e, s, r) {
        r.r(s);
        var i = r("mXrz"),
          t = {
            props: { show: Boolean, detail: Object, source: Number },
            data: () => ({ subscribeQuery: i.b }),
            computed: {
              headImg() {
                return "background-image: url(" + this.detail.imageUrl + ")";
              },
              isNeedSubscribe() {
                var e, s;
                return !(
                  null == (e = this.detail) ||
                  null == (s = e.fetchedCoupons) ||
                  !s.length
                );
              },
            },
            methods: {
              onClose() {
                var e = this;
                this.subscribeMessage(() => {
                  e.$emit("close");
                });
              },
              subscribeMessage(e) {
                this.$emit("subscribe-message", e);
              },
              showRule() {
                this.$emit("show-rule", !0);
              },
            },
            ud: !0,
          },
          u = r("9ZMt");
        s.default = u.default.component(t);
      },
    }
  )
);
