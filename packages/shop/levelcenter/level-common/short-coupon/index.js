"use strict";
var r = require("~/r");
r(
  "Am87",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      Am87: function (e, t, r) {
        r.r(t);
        var s = r("rqVN"),
          i = r("9zTU");
        Object(s.b)({
          properties: {
            coupon: { type: Object },
            levelType: { type: String, default: i.k.PAY_MENBER },
          },
          data: {
            unitDesc: "",
            coupon: {},
            disable: !1,
            btnText: "",
            fontSizeStyle: "",
            MEMBER_TYPE_ENUM: i.k,
          },
          methods: {
            receiveCoupon() {
              this.data.disable ||
                this.triggerEvent("receiveCoupon", this.data.coupon);
            },
          },
          observers: {
            coupon(e) {
              var {
                  received: t,
                  left: r,
                  status: s,
                  valueDesc: i,
                  unitDesc: o,
                } = e,
                u = 0 !== s || t || 0 === r,
                n = "立即领取";
              t && (n = "已领取"), (0 === s && 0 !== r) || (n = "已抢光");
              var { length: a } = "" + (i || ""),
                c = 26;
              a >= 8 ? (c = 12) : a >= 6 ? (c = 16) : a >= 4 && (c = 20);
              var l = "font-size: " + c + "px";
              this.setYZData({
                coupon: e,
                unitDesc: o || "",
                disable: u,
                btnText: n,
                fontSizeStyle: l,
              });
            },
          },
        });
      },
    }
  )
);
