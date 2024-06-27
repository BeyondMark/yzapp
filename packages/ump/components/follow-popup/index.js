"use strict";
var r = require("~/r");
r(
  "UJZ5",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    UJZ5: function (e, t, a) {
      a.r(t);
      var o = a("Fcif"),
        s = a("GFa9"),
        i = a("rqVN"),
        r = a("2wjL"),
        n = a("8B9M"),
        l = Object(n.a)(),
        c = a("dWkE"),
        h = Object(n.a)(),
        p = 1,
        d = 2,
        g = 3,
        u = 4,
        w = 9,
        m = 0,
        v = 1;
      Object(i.b)({
        properties: {
          show: { type: Boolean, value: !1, observer: "handleShowPopup" },
          title: { type: String, value: "" },
          subTitle: { type: String, value: "还能了解最新优惠信息" },
          btnText: { type: String, value: "" },
          extraData: { type: Object, value: {} },
          zIndex: { type: Number, value: 100 },
        },
        data: {
          showPop: !1,
          messagePath: "",
          messageImg: "https://img01.yzcdn.cn/weapp/wsc/UJ60enB.png",
          newRiseFollower: !1,
          webViewUrl: "",
        },
        methods: {
          onContactBack: s.a.contactBack,
          handleShowPopup(e) {
            if (e) {
              var t,
                { extraData: a } = this.data;
              ((t = Object(o.a)({}, a, { feature: JSON.stringify(a.feature) })),
              l.request({
                path: "/wscump/common/get-fans-article.json",
                data: t,
              }))
                .then((e) => {
                  null != e && e.value
                    ? (h.logger &&
                        h.logger.log({
                          et: "display",
                          ei: "enterpage",
                          en: "浏览页面",
                          params: {
                            component: "zhangfen",
                            biz_type: this.getBizType(),
                          },
                        }),
                      this.setYZData({
                        newRiseFollower: !0,
                        webViewUrl: e.value,
                        showPop: !0,
                      }))
                    : this.handleCustomServiceMessage();
                })
                .catch(() => {
                  this.handleCustomServiceMessage();
                });
            } else this.setYZData({ showPop: !1 });
          },
          togglePopup() {
            this.handleReport(1), this.triggerEvent("close");
          },
          getBizType() {
            var { bizCode: e, bizSubCode: t } = this.data.extraData;
            return e === g
              ? "benefit"
              : e === p && t === m
              ? "bargain"
              : e === p && t === v
              ? "helpcut"
              : e === d
              ? "wheel"
              : e === u
              ? "lottery"
              : e === w
              ? "luckyDrawGroup"
              : void 0;
          },
          onClick() {
            this.handleReport(2),
              this.data.newRiseFollower &&
                (h.logger &&
                  h.logger.log({
                    et: "click",
                    ei: "click",
                    en: "成为粉丝按钮点击",
                    params: {
                      component: "zhangfen",
                      biz_type: this.getBizType(this.data.extraData),
                    },
                  }),
                Object(c.a)(this.data.webViewUrl));
          },
          handleReport(e) {
            var t,
              { extraData: a } = this.data;
            (t = Object(o.a)({}, a, { followWay: e })),
              l.request({
                path: "/wscump/common/follow-report.json",
                method: "POST",
                data: t,
              });
          },
          handleCustomServiceMessage() {
            var e,
              { extraData: t } = this.data;
            this.qrcode
              ? this.getMessagePath()
              : ((e = Object(o.a)({}, t, {
                  feature: JSON.stringify(t.feature),
                })),
                l.request({ path: "/wscump/common/qr-code.json", data: e }))
                  .then((e) => {
                    (this.qrcode = e.value), this.getMessagePath();
                  })
                  .catch(() => {
                    (this.qrcode = ""),
                      wx.showToast({
                        title: "公众号二维码获取失败，请重试",
                        icon: "none",
                      });
                  });
          },
          getMessagePath() {
            var e = r.a.add("https://h5.youzan.com/wscump/weapp-follow", {
                kdtId: h.getKdtId(),
                qrCodeUrl: encodeURIComponent(this.qrcode || ""),
              }),
              t = {
                yz_live_code_link: encodeURIComponent(e),
                yz_live_code_image: encodeURIComponent(
                  "https://img01.yzcdn.cn/weapp/wsc/1fxuP9X.png"
                ),
                yz_live_code_desc: "关注公众号",
                yz_live_code_title: "关注公众号",
              },
              a = r.a.add("/pages/home/dashboard/index", t);
            this.setYZData({
              messagePath: a,
              showPop: !0,
              newRiseFollower: !1,
            });
          },
        },
      });
    },
  })
);
