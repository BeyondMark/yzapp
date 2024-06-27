"use strict";
var r = require("~/r");
r(
  "p6eh",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    p6eh: function (t, a, e) {
      e.r(a);
      var i = e("u8kV"),
        r = e("GFa9"),
        o = { horizontal: 1, verticalShort: 2, verticalLong: 3 },
        l = 1,
        n = 2,
        s = e("v6dD"),
        v = 1,
        c = 2;
      Object(i.c)({
        properties: {
          componentData: { type: Object, value: {}, observer: "initData" },
          layoutConfig: { type: Object, value: {}, observer: "initLayout" },
        },
        data: {
          value: "",
          layout: 1,
          heightStyle: "",
          verticalClass: "",
          COUPON_LAYOUT: o,
          threshold: "",
          couponValidDesc: "",
        },
        methods: {
          initData() {
            var { value: t } = this.data.componentData || {};
            t = +t;
            var a = ((t) => {
                var { threshold: a } = t,
                  e = Number(a);
                return 0 === e ? "满任意金额可用" : "满" + e + "元使用";
              })(this.data.componentData),
              e = (function (t) {
                var { extendedData: a = {} } = void 0 === t ? {} : t,
                  { validTimeGenerateType: e } = a;
                if (e === v) {
                  var { absoluteValidStartTime: i, absoluteValidEndTime: r } =
                    a;
                  return (
                    Object(s.b)(i, "YYYY.MM.DD") +
                    " -\n" +
                    Object(s.b)(r, "YYYY.MM.DD")
                  );
                }
                if (e === c) {
                  var {
                    relativeValidTimeBeginInterval: o,
                    relativeValidTimeDuration: l,
                  } = a;
                  return 0 === o
                    ? "领券当日起" + l + "天可用"
                    : 1 === o
                    ? "领券次日起" + l + "天内可用"
                    : "领券" + o + "天后生效，\n有效期" + l + "天";
                }
              })(this.data.componentData);
            this.setYZData({ value: t, threshold: a, couponValidDesc: e });
          },
          initLayout() {
            var {
              showTitle: t,
              showSubTitle: a,
              showPrice: e,
              showBuyButton: i,
              imageRatio: r,
              sizeType: s,
            } = this.data.layoutConfig || {};
            if (1 != +s) {
              var v = "",
                c = o.horizontal,
                h = i || e;
              (c =
                +r === n
                  ? o.verticalLong
                  : +r === l
                  ? a + t + h > 1
                    ? o.verticalLong
                    : o.verticalShort
                  : a + t + h > 1
                  ? o.verticalShort
                  : o.horizontal) === o.verticalLong && (v = "vertical-long"),
                this.setYZData({ verticalClass: v, layout: c });
            } else
              this.setYZData({
                heightStyle: "height: 200px",
                layout: o.verticalShort,
              });
          },
          handleFetch() {
            var { activityId: t } = this.data.componentData || {};
            r.a.navigate({
              url: "/packages/user/coupon/shop/index?activityId=" + t,
            });
          },
        },
      });
    },
  })
);
