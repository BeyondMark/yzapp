"use strict";
var r = require("~/r");
r(
  "k/40",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "k/40": function (e, i, s) {
        s.r(i);
        var t = s("Fcif"),
          o = s("rqVN"),
          a = s("RY8z"),
          n = s("eCH0"),
          c = s("asq2"),
          h = s("3cdT"),
          r = s("JxL/"),
          g = s("Yfvy"),
          p = s("KDJo"),
          u = s("9Bnu"),
          d = getApp(),
          { logger: l } = d;
        Object(o.b)({
          behaviors: [c.a, r.a],
          properties: { source: { type: Number, value: null } },
          data: {
            popupCustomImage: "",
            visible: !1,
            chechinId: null,
            canSign: !0,
            isAuthorized: !1,
          },
          attached() {
            (this.cloudLoggerInfo = Object(g.b)(
              "shop_ad_pop",
              Object(t.a)(
                {},
                this.getCloudLoggerInfo("check_in", {
                  isCustom: this.popupCustomImage ? "是" : "否",
                })
              )
            )),
              this.canShowCheckinPopup();
          },
          methods: {
            subscribeSignMessage(e) {
              var { source: i } = this.data,
                s = this;
              Object(n.e)({
                scene: n.a.SIGN,
                subscribePage: h.e[i],
                subscribeType: "签到提醒",
                authorizationType: "sign",
                windowType: "micro_sign_message",
                options: {
                  next: e,
                  onShowTips: () => {
                    s.triggerEvent("toggle-subscribe-mask", !0);
                  },
                  onCloseTips: () => {
                    s.triggerEvent("toggle-subscribe-mask", !1), e();
                  },
                },
              });
            },
            getAdImageInfo: () =>
              "https://img01.yzcdn.cn/public_files/2019/08/21/75c16648a9226541a656f22357aee9bf.png",
            canShowCheckinPopup() {
              d.request({ path: "wscump/checkin/show_checkin_page_v2.json" })
                .then((e) => {
                  var i,
                    s,
                    { isShow: o, checkinId: a } = e,
                    n =
                      null !=
                      (i =
                        null == (s = e.popUpWindowDTO) ? void 0 : s.pictureUrl)
                        ? i
                        : "";
                  if (o) {
                    var c = () => {
                      this.setYZData({
                        visible: !0,
                        checkinId: a,
                        popupCustomImage: n,
                      }),
                        l &&
                          l.log({
                            et: "view",
                            ei: "Ad_view",
                            en: "图片广告曝光",
                            si: d.getKdtId(),
                            params: Object(t.a)(
                              {
                                component: "popup_ad",
                                isCustom: n ? "是" : "否",
                              },
                              this.cloudLoggerInfo
                            ),
                          });
                    };
                    Object(u.a)()
                      .then((e) => {
                        var i = e.mobile;
                        this.setYZData({ isAuthorized: i }), c();
                      })
                      .catch(() => {
                        c();
                      });
                  } else this.onOtherClose();
                })
                .catch((e) => {
                  this.onOtherClose();
                });
            },
            closePopup() {
              this.onClickClose();
            },
            doCheckin() {
              var { checkinId: e, canSign: i, isAuthorized: s } = this.data;
              return i
                ? s
                  ? (wx.showLoading({ title: "签到中" }),
                    this.setYZData({ canSign: !1 }),
                    d
                      .request({
                        path: "wscump/checkin/checkinV2.json",
                        query: { checkinId: e },
                      })
                      .then((e) => {
                        wx.hideLoading();
                        var i = (i) => {
                          var { shopMetaInfo: s = {} } = i,
                            t = d.db.set({ res: e }),
                            o = () => {
                              a.a.navigate({
                                url:
                                  "/packages/shop/ump/sign-in/index?&dbid=" + t,
                              });
                            };
                          this.onOtherClose(),
                            Object(p.c)(s) ? this.subscribeSignMessage(o) : o();
                        };
                        d.getShopInfo().then(i).catch(i);
                      })
                      .catch((e) => {
                        wx.hideLoading(),
                          this.setYZData({ canSign: !0 }),
                          wx.showToast({
                            title: e.msg || "签到失败",
                            icon: "none",
                            duration: 1e3,
                          });
                      }),
                    void (
                      d.logger &&
                      d.logger.log({
                        et: "click",
                        ei: "Ad_Click",
                        en: "图片广告打开次数",
                        si: d.getKdtId(),
                        params: Object(t.a)(
                          {
                            component: "popup_ad",
                            isCustom: this.popupCustomImage ? "是" : "否",
                          },
                          this.cloudLoggerInfo
                        ),
                      })
                    ))
                  : a.a.navigate({ url: "/packages/shop/ump/sign-in/index" })
                : wx.showLoading({ title: "签到中，请稍等" });
            },
          },
        });
      },
    }
  )
);
