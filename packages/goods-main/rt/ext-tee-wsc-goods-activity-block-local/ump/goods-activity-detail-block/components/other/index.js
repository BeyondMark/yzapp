"use strict";
var r = require("~/r");
r(
  "aJur",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      aJur: function (t, e, i) {
        i.r(e);
        var s = i("Fcif"),
          o = i("Arjo"),
          r = {
            name: "other-intro",
            props: {
              activity: Object,
              activityInfo: Object,
              kdtId: String,
              shopName: String,
              shopPhone: String,
              goodsTitle: String,
            },
            data: () => ({ showActivityPop: !1 }),
            computed: {
              showRules() {
                var { type: t } = this.activity;
                return o.a.indexOf(t) > -1;
              },
              activityRules() {
                var {
                    activity: t,
                    showRules: e = !1,
                    shopName: i,
                    shopPhone: r,
                    goodsTitle: a,
                  } = this,
                  { type: h } = t;
                return e
                  ? o.b[h](
                      Object(s.a)({}, t, {
                        shopName: i,
                        shopPhone: r,
                        goodsTitle: a,
                      })
                    )
                  : {};
              },
              hasRules() {
                var { rules: t = [] } = this.activityRules;
                return t.length > 0;
              },
              ruleTitle() {
                return this.activityRules.ruleTitle || "玩法详情";
              },
            },
            methods: {
              showPopUp() {
                this.showActivityPop = !0;
              },
              hidePopUp() {
                this.showActivityPop = !1;
              },
            },
            ud: !0,
          },
          a = i("9ZMt");
        e.default = a.default.component(r);
      },
    }
  )
);
