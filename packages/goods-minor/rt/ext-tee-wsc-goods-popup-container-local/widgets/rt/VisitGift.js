"use strict";
var r = require("~/r");
r(
  "raxG",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      raxG: function (t, i, e) {
        e.r(i);
        var s = e("WwLc"),
          o = e("mXrz"),
          r = e("FyhB"),
          h = {
            props: {
              source: Number,
              kdtId: Number,
              shopMetaInfo: Object,
              getUserInfo: Function,
            },
            data: () => ({
              authTypeList: ["mobile"],
              showGiftPop: !1,
              showUserAuth: !1,
              ruleVisible: !1,
              detail: {},
              bottom: null,
            }),
            watch: {
              kdtId() {
                this.joinVisitGift();
              },
              bottom() {
                return this.bottom ? "bottom: " + this.bottom + "px" : "";
              },
            },
            created() {
              var t;
              null == (t = this.getUserInfo) ||
                t.call(this).then((t) => {
                  t.userId && this.joinVisitGift();
                });
            },
            methods: {
              joinVisitGift(t) {
                void 0 === t && (t = !1);
                var { source: i, kdtId: e } = this;
                e &&
                  Object(r.b)(i)
                    .then((t) => {
                      var i = Object(o.a)(t, e, null);
                      (this.showGiftPop = !0), (this.detail = i);
                    })
                    .catch((i) => {
                      var { code: r } = i;
                      if (t || r === s.f.ASYNC_SEND) {
                        var h = Object(o.a)({}, e, r);
                        return (this.showGiftPop = !0), void (this.detail = h);
                      }
                      this.$emit("close-pop");
                    });
              },
              closeVisitGift() {
                (this.showGiftPop = !1),
                  setTimeout(() => {
                    this.$emit("close-pop");
                  }, 200);
              },
              showRule() {
                this.ruleVisible = !0;
              },
              hideRule() {
                this.ruleVisible = !1;
              },
              handleLogin() {
                (this.showUserAuth = !1), this.joinVisitGift(!0);
              },
              subscribeMessage(t) {
                this.$emit("subscribe-message", t);
              },
            },
            ud: !0,
          },
          u = e("9ZMt");
        i.default = u.default.component(h);
      },
    }
  )
);
