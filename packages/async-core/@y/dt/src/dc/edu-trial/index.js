"use strict";
var r = require("~/r");
r(
  "xIHE",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      xIHE: function (t, i, e) {
        e.r(i);
        var a = e("eijD"),
          r = e("9ZMt"),
          o = e("3tyi"),
          n = e("EqB2"),
          u = e("rGpN"),
          s = e("xI4m"),
          l = e("2Dtx"),
          h = e("FTR+"),
          c = e("ZXqb"),
          { useTpx: d } = r.default.style,
          f = {
            mixins: [Object(n.a)({ optDesc: s.a })],
            props: {
              themeColors: { type: Object, default: () => ({}) },
              shopInfo: { type: Object, default: () => ({}) },
              kdtId: { type: String, default: "" },
            },
            data: () => ({
              trialConfig: null,
              trialAttributes: [],
              configReady: !1,
              attributesReady: !1,
              trialPopupShow: !1,
              trialPopupData: {},
            }),
            computed: {
              show() {
                return !this.shopInfo.isEduChainStore;
              },
              containerStyle() {
                var {
                  backgroundColor: t,
                  pageMargin: i,
                  borderRadiusType: e,
                } = this.opt || {};
                return Object(l.a)({
                  background: t,
                  "margin-left": d(+i),
                  "margin-right": d(+i),
                  "border-radius": 2 == +e ? d(8) : 0,
                });
              },
              titleStyle() {
                var { titleColor: t, textStyleType: i } = this.opt || {};
                return Object(l.a)({
                  color: t,
                  "font-weight": 2 == +i ? "bold" : "normal",
                });
              },
              tagStyle() {
                var { mainColor: t } = this;
                return Object(l.a)({
                  color: t,
                  "background-color": Object(h.a)(t, 0.1),
                });
              },
              btnStyle() {
                var { mainColor: t } = this;
                return Object(l.a)({ color: "#fff", "background-color": t });
              },
              mainColor() {
                return this.themeColors.general || "";
              },
              auditionText() {
                return this.trialConfig ? this.trialConfig.auditionText : "";
              },
              mainGift() {
                return this.trialConfig ? this.trialConfig.mainGift : "";
              },
              minorGift() {
                return this.trialConfig ? this.trialConfig.minorGift : "";
              },
              hasGift() {
                return (
                  this.trialConfig &&
                  (this.trialConfig.mainGift || this.trialConfig.minorGift)
                );
              },
            },
            mounted() {
              this.getTrialConfig(), this.getAttributes();
            },
            methods: {
              getTrialConfig() {
                return u.a
                  .getTrialConfig()
                  .then((t) => {
                    this.configReady ||
                      ((this.trialConfig = t), (this.configReady = !0));
                  })
                  .catch((t) => {
                    Object(c.a)(t);
                  });
              },
              handleAuthPopupAllow() {
                this.authNext(!0);
              },
              handleAuthPopupRefuse() {
                this.authNext(!1);
              },
              getAttributes() {
                return u.a
                  .getAttributes({ sceneId: 2 })
                  .then((t) => {
                    if (!this.attributesReady) {
                      var i =
                          t.find((t) => "edu_stuName" === t.attributeKey) || {},
                        e =
                          t.find(
                            (t) => "edu_stuContractPhone" === t.attributeKey
                          ) || {},
                        a = [
                          "attributeId",
                          "attributeTitle",
                          "attributeKey",
                          "createdAt",
                        ];
                      (this.trialAttributes = [
                        Object(o.a)(i, a),
                        Object(o.a)(e, a),
                      ]),
                        (this.attributesReady = !0);
                    }
                  })
                  .catch((t) => {
                    Object(c.a)(t);
                  });
              },
              openTrial(t) {
                (this.trialPopupShow = !0), (this.trialPopupData = t);
              },
              closeTrial() {
                (this.trialPopupShow = !1), (this.trialPopupData = {});
              },
              sendCaptcha(t) {
                var { mobile: i, cbFn: e } = t;
                return u.a
                  .sendCaptcha({
                    mobile: i,
                    bizAlias: "yz_edu_audition_sms_check",
                    scene: 6,
                  })
                  .then(() => {
                    c.a.success("发送验证码成功"), e(!0);
                  })
                  .catch((t) => {
                    e(!1, (null == t ? void 0 : t.msg) || "发送验证码失败");
                  });
              },
              trialClick(t) {
                void 0 === t && (t = {});
                var { phone: i = "" } = t,
                  e =
                    Object(o.a)(t, [
                      "auditionText",
                      "mainGift",
                      "minorGift",
                      "phone",
                      "verifyCode",
                      "needVerifyCode",
                    ]) || {},
                  a =
                    this.trialAttributes &&
                    this.trialAttributes.map(
                      (t) => (
                        "edu_stuName" === t.attributeKey &&
                          (t.value = i.slice(i.length - 4, i.length)),
                        "edu_stuContractPhone" === t.attributeKey &&
                          (t.value = i),
                        t
                      )
                    );
                return (
                  (e.customizeItems = a),
                  u.a
                    .confirmAppointment(e)
                    .then(() => {
                      c.a.success("预约成功，我们将尽快和你联系"),
                        this.closeTrial();
                    })
                    .catch((t) => {
                      c.a.fail((null == t ? void 0 : t.msg) || "预约失败");
                    })
                );
              },
              authNext(t) {
                var i = this;
                return Object(a.a)(function* () {
                  void 0 === t && (t = !0);
                  var e = "";
                  t && (e = (yield u.a.getUserInfo()).mobile || "");
                  i.configReady || (yield i.getTrialConfig()),
                    i.attributesReady || (yield i.getAttributes());
                  var {
                    auditionText: a,
                    mainGift: r,
                    minorGift: o,
                    tags: n = [],
                  } = i.trialConfig || {};
                  i.openTrial({
                    defaultPhone: e,
                    auditionText: a,
                    mainGift: r,
                    minorGift: o,
                    tags: n,
                    mainColor: i.mainColor,
                  });
                })();
              },
            },
            ud: !0,
          };
        i.default = r.default.component(f);
      },
    }
  )
);
