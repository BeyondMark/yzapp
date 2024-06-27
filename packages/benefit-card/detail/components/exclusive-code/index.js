"use strict";
var r = require("~/r");
r(
  "A56W",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    A56W: function (e, t, i) {
      i.r(t);
      var r = i("rqVN"),
        a = i("zMoS"),
        s = i("dWkE"),
        d = getApp();
      Object(r.b)({
        properties: {
          themeGeneral: String,
          benefitId: { type: String, value: "" },
          stockNum: { type: Number, value: "" },
          isRecord: Boolean,
          cardNo: String,
        },
        data: {
          qr_code: "",
          bar_code: "",
          codeLoading: !1,
          show: !1,
          idVisible: !1,
        },
        methods: {
          initData() {
            this.getQrcode();
          },
          getQrcode() {
            d.request({
              path: "/wscuser/scrm/api/benefitcard/getBenefitQrCodeAndBarCode.json",
              query: { benefit: this.properties.benefitId },
            })
              .then((e) => {
                this.setYZData({
                  qr_code: e.qr_code,
                  bar_code: e.bar_code,
                  codeLoading: !1,
                });
              })
              .catch((e) => {
                wx.showToast({
                  title: e.msg || "出错了",
                  icon: "error",
                  duration: 1e3,
                }),
                  this.setYZData({ codeLoading: !1 });
              });
          },
          getCardCodeVisible() {
            var { hasCard: e, isEnabled: t, isExpired: i } = this,
              r = Object(a.a)(this.cardInfo, "activated", !1),
              s = Object(a.a)(
                this.cardInfo,
                "cardTemplateDTO.activationCondition",
                {}
              ),
              d = s.requireMobile && s.requireProfile;
            return e && t && !i && ((d && r) || !d);
          },
          changePopup() {
            var { isRecord: e, cardNo: t, benefitId: i } = this.properties;
            e
              ? Object(s.a)(
                  "/wscuser/scrm/benefitcard/recordlist?kdt_id=" +
                    d.getKdtId() +
                    "&card_no=" +
                    t +
                    "&benefit_id=" +
                    i
                )
              : (this.setYZData({ show: !this.data.show }),
                this.data.show && this.initData());
          },
          showBarCode() {
            this.setYZData({ idVisible: !0 });
          },
        },
        attached() {
          this.initData();
        },
      });
    },
  })
);
