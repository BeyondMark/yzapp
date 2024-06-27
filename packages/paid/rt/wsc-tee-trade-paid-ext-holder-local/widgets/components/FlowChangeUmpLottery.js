"use strict";
var r = require("~/r");
r(
  "UCCY",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      UCCY: function (e, t, o) {
        o.r(t);
        var n = o("KozD"),
          i = {
            name: "flow-change-ump-lottery",
            props: { originData: { type: Object, default: () => ({}) } },
            data: () => ({
              visible: !1,
              couponType: n.b,
              couponKey: n.f.default,
            }),
            computed: {
              resourceResponse() {
                var e;
                return (
                  (null == (e = this.originData)
                    ? void 0
                    : e.resourceResponse) || {}
                );
              },
              couponAdContent() {
                var e, t, o;
                return (null == (e = this.originData) ||
                null == (t = e.couponAdContentList)
                  ? void 0
                  : t.length) > 0
                  ? null == (o = this.originData)
                    ? void 0
                    : o.couponAdContentList[0]
                  : null;
              },
              secKillAdContent() {
                var e, t, o;
                return (null == (e = this.originData) ||
                null == (t = e.secKillAdContentList)
                  ? void 0
                  : t.length) > 0
                  ? null == (o = this.originData)
                    ? void 0
                    : o.secKillAdContentList[0]
                  : null;
              },
              availableGoods() {
                var e;
                return (
                  (null == (e = this.couponAdContent)
                    ? void 0
                    : e.availableGoods) || []
                );
              },
              lotteryImg() {
                var { scheduleDetails: e = [] } = this.resourceResponse;
                if (e.length > 0) {
                  var { scheduleValues: t = [] } = e[0];
                  if (t.length > 0) {
                    var { picUrl: o } = t[0];
                    return o;
                  }
                }
                return "";
              },
              couponFontSize() {
                var {
                    couponType: e,
                    couponValueFontSize: t = "",
                    couponQuota: o,
                  } = this.couponAdContent || {},
                  i = t;
                if (e === n.b.random) {
                  var { length: l } = o;
                  return (
                    o.includes(".") && (l -= 1),
                    "font-size: " + (i = Object(n.d)(l)) + "px"
                  );
                }
                return i;
              },
            },
            created() {
              this.logger("view");
              var e = n.f.default;
              this.couponAdContent && (e = n.f.coupon),
                this.secKillAdContent && (e = n.f.seckill),
                (this.couponKey = e);
            },
            methods: {
              handleClose() {
                this.visible = !1;
              },
              handleOpen() {
                (this.visible = !0),
                  this.logger("click"),
                  this.logger("view", this.couponKey);
              },
              handleClick() {
                this.logger("click", this.couponKey, !0);
              },
              logger(e, t, o) {
                void 0 === t && (t = n.a.lottery), void 0 === o && (o = !1);
                var i = this.couponAdContent || this.secKillAdContent;
                i &&
                  this.$emit("onLogger", {
                    data: i,
                    type: t,
                    eventType: e,
                    isNavigator: o,
                  });
              },
            },
            ud: !0,
          },
          l = o("9ZMt");
        t.default = l.default.component(i);
      },
    }
  )
);
