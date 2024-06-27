"use strict";
var r = require("~/r");
r(
  "Oaf5",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      MDIA: function (e, t) {},
      Oaf5: function (e, t, s) {
        s.r(t);
        var i = s("ONqW"),
          r = s("MDIA"),
          a = s.n(r),
          c = s("WwLc"),
          o = s("FyhB"),
          u = s("mXrz"),
          d = s("YeA1"),
          n = {
            props: {
              disabled: Boolean,
              coupon: Object,
              kdtId: Number,
              customClass: String,
              source: Number,
            },
            data: () => ({ subscribeQuery: u.b }),
            computed: {
              itemFontSize() {
                return "font-size: " + this.coupon.size + "px";
              },
              couponItemDisabled() {
                return this.disabled ? "coupon-item-disabled" : "";
              },
            },
            methods: {
              subscribeMessage() {
                this.$emit("subscribe-message", this.handleUse);
              },
              handleUse() {
                var { fetchId: e, activityTypeGroup: t } = this.coupon,
                  s = "card";
                t === c.h.CARD.KEY && (s = c.h.CARD.VALUE),
                  t === c.h.CODE.KEY && (s = c.h.CODE.VALUE),
                  Object(i.a)().log({
                    et: "click",
                    ei: "coupon_visit_click",
                    en: "进店有礼优惠券点击",
                    params: { coupon_id: e },
                  }),
                  Object(o.a)({ couponId: e, groupType: s, kdtId: this.kdtId })
                    .then((e) => {
                      var {
                          weappUrl: t,
                          isSwitchTab: s,
                          qqUrl: i,
                          h5Url: r,
                          aliappUrl: a,
                        } = e,
                        c = t;
                      this.$emit("close");
                      var { dmc: o } = Object(d.a)();
                      return s ? o.switchTab(c) : o.navigate(c);
                    })
                    .catch((e) => {
                      var { msg: t } = e;
                      a()(t);
                    });
              },
            },
            ud: !0,
          },
          p = s("9ZMt");
        t.default = p.default.component(n);
      },
    }
  )
);
