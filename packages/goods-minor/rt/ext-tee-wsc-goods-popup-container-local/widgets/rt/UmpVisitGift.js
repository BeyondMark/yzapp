"use strict";
var r = require("~/r");
r(
  "5O57",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "5O57": function (e, t, s) {
        s.r(t);
        var i = s("Tewj"),
          o = s("APWh"),
          n = s("WwLc"),
          r = {
            name: "ump-visit-gift",
            props: { kdtId: Number, getUserInfo: Function },
            data: () => ({ yourTurn: !1, skip: !1 }),
            computed: {
              isShow() {
                return this.yourTurn;
              },
            },
            watch: {
              kdtId: {
                immediate: !0,
                handler(e) {
                  Object(o.a)(e).then((e) => {
                    (this.shopMetaInfo = e),
                      i.default.trigger("popupContainer:stateChange", {
                        name: "VISIT_GIFT",
                        state: "READY",
                        skip: !1,
                      });
                  });
                },
              },
            },
            created() {
              i.default.on("popupContainer:visit-gift:open", () => {
                this.yourTurn = !0;
              });
            },
            destroyed() {
              i.default.off("popupContainer:visit-gift:open");
            },
            methods: {
              handleClose() {
                i.default.trigger("popupContainer:stateChange", {
                  name: "VISIT_GIFT",
                  state: "CLOSE",
                });
              },
              subscribeMessage(e) {
                this.$emit("wechat-subscribe-message-push", {
                  scene: "coupon_notice_scene",
                  subscribePage: n.k[2],
                  subscribeType: "进店有礼",
                  authorizationType: "coupon",
                  windowType: "good_visit_gift",
                  zIndex: 10010,
                  options: { next: e, onComplete: e },
                });
              },
            },
            ud: !0,
          },
          a = s("9ZMt");
        t.default = a.default.component(r);
      },
    }
  )
);
