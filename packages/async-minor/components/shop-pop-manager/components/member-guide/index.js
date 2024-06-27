"use strict";
var r = require("~/r");
r(
  "pefR",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      pefR: function (e, t, i) {
        i.r(t);
        var o = i("Fcif"),
          s = i("rqVN"),
          a = i("dWkE"),
          l = i("2wjL"),
          r = i("c6+E"),
          n = i("wIGu"),
          d = i("asq2"),
          h = i("JxL/"),
          c = i("Yfvy"),
          u = i("8zua"),
          g = i("9Bnu"),
          p = getApp(),
          { logger: m } = p;
        Object(s.b)({
          behaviors: [d.a, h.a],
          data: {
            visible: !1,
            url: "",
            benefitData: {},
            registryState: r.b.UNKNOWN,
            memThresholdType: u.a.UNKNOWN,
            memThresholdValue: 0,
          },
          methods: {
            showUserImage(e) {
              this.viewLog(),
                this.setYZData({ visible: !0, url: e, showDefault: !1 });
            },
            viewLog() {
              m &&
                m.log({
                  et: "view",
                  ei: "view_member_poster",
                  en: "会员弹窗曝光",
                });
            },
            next() {
              this.onClickClose();
            },
            getAdImageInfo() {
              return this.data.url;
            },
            goToFillPage() {
              Object(a.a)(
                l.a.add("/wscuser/levelcenter/simplified-fill", {
                  kdt_id: getApp().getKdtId(),
                  levelType: r.a.Free,
                  fromScene: "complete",
                  jumpTo: "Home",
                }),
                { title: "完善信息" }
              );
            },
            handleGetReward() {
              var e = this;
              Object(g.a)()
                .then((t) => {
                  var { mobile: i } = t;
                  i
                    ? (n.a().then(function (t) {
                        var {
                          hasCondition: i = !1,
                          needFillInfo: o = !1,
                          conditionType: s = u.a.UNKNOWN,
                          conditionValue: a = 0,
                        } = void 0 === t ? {} : t;
                        o
                          ? e.goToFillPage()
                          : (m &&
                              m.log({
                                et: "click",
                                ei: "click_member_poster",
                                en: "点击会员弹窗",
                              }),
                            e.setYZData({
                              registryState: i ? r.b.THRESHOLD : r.b.SUCCESS,
                              memThresholdType: s,
                              memThresholdValue: a,
                            }));
                      }),
                      m &&
                        m.log({
                          et: "click",
                          ei: "Ad_Click",
                          en: "图片广告打开次数",
                          si: p.getKdtId(),
                          params: Object(o.a)(
                            { component: "popup_ad" },
                            this.cloudLoggerInfo
                          ),
                        }))
                    : this.goToFillPage();
                })
                .catch(() => {
                  this.goToFillPage();
                });
            },
            showDefaultGuide() {
              n.b().then((e) => {
                this.viewLog(),
                  this.setYZData({
                    showDefault: !0,
                    visible: !0,
                    benefitData: {
                      couponList: (null == e ? void 0 : e.couponList) || [],
                      presentList: (null == e ? void 0 : e.presentList) || [],
                      points: (null == e ? void 0 : e.points) || {},
                    },
                  });
              });
            },
          },
          attached() {
            (this.cloudLoggerInfo = Object(c.b)(
              "shop_ad_pop",
              Object(o.a)({}, this.getCloudLoggerInfo("member_guide"))
            )),
              n
                .c()
                .then((e) => {
                  var { isPop: t = !1, url: i = "", isDefaultUrl: s } = e;
                  t
                    ? (!s && i
                        ? this.showUserImage(i)
                        : this.showDefaultGuide(),
                      m &&
                        m.log({
                          et: "view",
                          ei: "Ad_view",
                          en: "图片广告曝光",
                          si: p.getKdtId(),
                          params: Object(o.a)(
                            { component: "popup_ad" },
                            this.cloudLoggerInfo
                          ),
                        }))
                    : this.onOtherClose();
                })
                .catch(() => {
                  this.onOtherClose();
                });
          },
        });
      },
    }
  )
);
