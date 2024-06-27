"use strict";
var r = require("~/r");
r(
  "ukLE",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      ukLE: function (e, t, i) {
        i.r(t);
        var a = i("WNIS"),
          s = i("rqVN"),
          r = i("O3Bn"),
          o = i("9zTU"),
          l = i("of9M");
        Object(s.b)({
          properties: { pageQuery: Object, groupAlias: String },
          data: { list: [], isShowPlanDialog: !1, specificPlanId: 0 },
          attached() {
            this.getPlanList();
          },
          methods: {
            getPlanList() {
              return l
                .j()
                .then((e) => {
                  var t = [...e];
                  t &&
                    t.length &&
                    (t.some((e) => e.planType === a.i.Birthday)
                      ? Object(r.a)({ levelType: o.g.FREE })
                          .then((e) => {
                            (t = t.filter(
                              (t) =>
                                t.planType !== a.i.Birthday ||
                                (null == e ? void 0 : e.inRange)
                            )),
                              this.setYZData({ list: t || [] });
                          })
                          .catch(() => {
                            wx.showToast({
                              title: "获取生日区间失败",
                              icon: "error",
                              duration: 500,
                            });
                          })
                      : this.setYZData({ list: t }));
                })
                .catch(() => {
                  wx.showToast({
                    title: "计划列表获取失败",
                    icon: "error",
                    duration: 1e3,
                  });
                });
            },
            openPlanDialog(e) {
              var t = e.detail;
              this.setYZData({ isShowPlanDialog: !0, specificPlanId: t });
            },
            closePlanDialog() {
              this.setYZData({ isShowPlanDialog: !1 });
            },
            onBindMobile() {
              this.triggerEvent("bindMobile");
            },
            stopTouchMove: () => !1,
          },
        });
      },
    }
  )
);
