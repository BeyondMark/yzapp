"use strict";
var r = require("~/r");
r(
  "hD6d",
  Object.assign({}, require("~/v.js").modules, {
    hD6d: function (e, t, a) {
      a.r(t);
      var r = a("jmjq"),
        d = a.n(r),
        i = a("YeA1"),
        s = { DOLLAR: 1, PRICE: 2 },
        u = 0,
        c = {
          name: "MeetReducePostage",
          props: { meetReducePostageData: Object, kdtId: Number },
          computed: {
            postageRule() {
              var { preferentialData: e = [], meetType: t } =
                this.meetReducePostageData;
              return Object.values(s).includes(t)
                ? e
                    .filter((e) => e.postage)
                    .map((e) => {
                      var a, r;
                      return {
                        area:
                          (null == e || null == (a = e.district)
                            ? void 0
                            : a.scope) === u
                            ? "全国"
                            : null == e || null == (r = e.district)
                            ? void 0
                            : r.description,
                        type: "支持同城、快递配送",
                        rule:
                          t === s.DOLLAR
                            ? "满" + +d()(e.meet, !0, !1) + "元，免运费"
                            : "满" + e.meet + "件，免运费",
                      };
                    })
                : [];
            },
          },
          methods: {
            onUrlClick() {
              var { activityAlias: e } = this.meetReducePostageData;
              Object(i.a)().dmc.navigate("MeetReduce", {
                activityId: e,
                alias: e,
                kdtId: this.kdtId || 0,
              });
            },
          },
          ud: !0,
        },
        l = a("9ZMt");
      t.default = l.default.component(c);
    },
  })
);
