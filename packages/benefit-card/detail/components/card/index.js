"use strict";
var r = require("~/r");
r(
  "jSg9",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      Qu2e: function (e, t, r) {
        r.d(t, "j", function () {
          return i;
        }),
          r.d(t, "l", function () {
            return a;
          }),
          r.d(t, "k", function () {
            return o;
          }),
          r.d(t, "h", function () {
            return n;
          }),
          r.d(t, "b", function () {
            return s;
          }),
          r.d(t, "d", function () {
            return c;
          }),
          r.d(t, "e", function () {
            return d;
          }),
          r.d(t, "i", function () {
            return p;
          }),
          r.d(t, "g", function () {
            return l;
          }),
          r.d(t, "a", function () {
            return u;
          }),
          r.d(t, "f", function () {
            return b;
          }),
          r.d(t, "c", function () {
            return f;
          }),
          r.d(t, "n", function () {
            return m;
          }),
          r.d(t, "m", function () {
            return C;
          });
        var i = 3,
          a = 6,
          o = 8,
          n = "init",
          s = { NO_RULE: i, RULE: a, PAY: o, ERROR_CARD_TYPE: -1 },
          c = 1,
          d = 0,
          p = {
            Color200: {
              direction: "135deg",
              colors: ["#B7D0FF", "#4E67B7"],
              bgColor: "#526AB9",
              imageUrl:
                "//img01.yzcdn.cn/public_files/2019/03/11/704e415d887541d2bf9ce945483af305.png",
            },
            Color201: {
              direction: "135deg",
              colors: ["#959595", "#20242A"],
              bgColor: "#444",
              imageUrl:
                "//img01.yzcdn.cn/public_files/2019/03/11/fb7d33fa35a5c118ba0495c09cdd1b3e.png",
            },
            Color202: {
              direction: "135deg",
              colors: ["#8BECBD", "#319E69"],
              bgColor: "#2F835A",
              imageUrl:
                "//img01.yzcdn.cn/public_files/2019/03/11/7ac9de05b089cb13d36323d6864b8d49.png",
            },
            Color203: {
              direction: "135deg",
              colors: ["#FF9E97", "#C44E46"],
              bgColor: "#8B3C36",
              imageUrl:
                "//img01.yzcdn.cn/public_files/2019/03/11/17fbdf65817fef6f4bd7acdb8fa414ab.png",
            },
            Color204: {
              direction: "135deg",
              colors: ["#FFDAA6", "#CE9A51"],
              bgColor: "#8C714B",
              imageUrl:
                "//img01.yzcdn.cn/public_files/2019/03/11/659d46363828ac8f571bd4a13ad89458.png",
            },
            Color205: {
              direction: "135deg",
              colors: ["#FFB5C1", "#D73B5B"],
              bgColor: "#9D4456",
              imageUrl:
                "//img01.yzcdn.cn/public_files/2019/03/11/7646eb0f59b1ce45d3cfbcb67686e93d.png",
            },
            Color206: {
              direction: "135deg",
              colors: ["#FCFCFC", "#A8A8A8"],
              bgColor: "#444444",
            },
          },
          l = 1,
          u = 2,
          b = 3,
          f = {
            Color030: "Color200",
            Color040: "Color200",
            Color050: "Color200",
            Color102: "Color201",
            Color010: "Color202",
            Color020: "Color202",
            Color082: "Color202",
            Color090: "Color203",
            Color100: "Color203",
            Color101: "Color203",
            Color060: "Color204",
            Color070: "Color204",
            Color080: "Color204",
            Color081: "Color204",
          },
          m =
            "https://img01.yzcdn.cn/public_files/23f9f5089197722cff6962bc33a66929.png",
          C = {
            appName: "更多权益",
            icon: "https://img01.yzcdn.cn/public_files/a1fb1079aa056c48631a190bc5247dd9.png",
            benefitTplId: 0,
          };
      },
      Sei9: function (e, t, r) {
        r.d(t, "f", function () {
          return p;
        }),
          r.d(t, "b", function () {
            return l;
          }),
          r.d(t, "c", function () {
            return b;
          }),
          r.d(t, "e", function () {
            return f;
          }),
          r.d(t, "g", function () {
            return m;
          }),
          r.d(t, "d", function () {
            return h;
          }),
          r.d(t, "h", function () {
            return g;
          }),
          r.d(t, "a", function () {
            return O;
          });
        var i = r("Fcif"),
          a = r("zMoS"),
          o = r("v6dD"),
          n = r("3tyi"),
          s = r("rDSc"),
          c = r("a1Mm"),
          d = r("Qu2e"),
          p = (e) => null == e;
        var l = (e, t, r, o) => {
            var {
              diyTemplateList: p = [],
              experienceCard: l,
              diyBenefitList: b,
            } = e;
            e = Object(s.a)(e, [
              "diyTemplateList",
              "experienceCard",
              "diyBenefitList",
            ]);
            var f = [],
              m = Object.keys(
                Object(n.a)(e, [
                  "postage",
                  "discount",
                  "memberPrice",
                  "pointsFeedBack",
                  "paidContent",
                ])
              ),
              C = Object.keys(
                Object(n.a)(e, ["points", "growth", "coupon", "present"])
              ),
              h = [];
            h =
              r && b
                ? b.map((e) => {
                    var t = Object.assign(
                      e.diyTemplate.benefitTemplateExternal,
                      Object(s.a)(e.diyTemplate, "benefitTemplateExternal")
                    );
                    return Object(i.a)({}, t, {
                      benefitId: e.benefitId,
                      termCycle: e.termCycle,
                      resetNum: e.stockNum,
                    });
                  })
                : p.map((e) => {
                    var t = Object.assign(
                      Object(a.a)(e, "benefitTemplateExternal", {}),
                      Object(s.a)(e, "benefitTemplateExternal")
                    );
                    return Object(i.a)({}, t);
                  });
            var g = m
                .map((t) => {
                  if (e[t]) {
                    var i = e[t];
                    return (
                      r
                        ? (((i =
                            "paidContent" === t
                              ? Object.assign(e[t][t + r], o[t])
                              : e[t][t + r]).resetNum = e[t].stockNum),
                          (i.termCycle = e[t].termCycle))
                        : (i.benefitId = e[t].benefitId),
                      (i.key = t),
                      delete e[t],
                      i
                    );
                  }
                  return null;
                })
                .filter((e) => !!e),
              O = C.map((t) => {
                if (e[t]) {
                  var i = e[t];
                  return (
                    r
                      ? (((i =
                          "present" === t
                            ? Object.assign(e[t][t + r], o[t])
                            : e[t][t + r]).resetNum = e[t].stockNum),
                        (i.termCycle = e[t].termCycle))
                      : (i.benefitId = e[t].benefitId),
                    (i.key = t),
                    "coupon" === t &&
                      (i.total = i.couponList.reduce(
                        (e, t) => e + t.number,
                        0
                      )),
                    delete e[t],
                    i
                  );
                }
                return null;
              }).filter((e) => !!e),
              j = l;
            return (
              l &&
                r &&
                (j = Object.assign(
                  l.experienceCardTpl,
                  Object(s.a)(l, "experienceCardTpl")
                )),
              l &&
                t !== d.d &&
                f.unshift(Object(i.a)({}, j, { key: "experienceCard" })),
              ((e) =>
                e.map((e) =>
                  Object(i.a)({}, e, {
                    appName: Object(a.a)(e, "benefitPluginInfo.showName", ""),
                    label: u(e),
                    icon: Object(c.a)(
                      Object(a.a)(e, "benefitPluginInfo.icon", "")
                    ),
                  })
                ))((f = f.concat(g).concat(h).concat(O)))
            );
          },
          u = (e) => {
            var t = Object(a.a)(e, "key", ""),
              r = Object(a.a)(e, "benefitPluginInfo.description", "");
            switch (t) {
              case "discount":
                return "" + r + Object(a.a)(e, "discount", 100) / 10 + "折";
              case "experienceCard":
                return "" + r + Object(a.a)(e, "stockNum", 0) + "张";
              case "points":
                return "" + r + Object(a.a)(e, "points", 0) + "个";
              case "pointsFeedBack":
                return "" + r + Object(a.a)(e, "rate", 0) / 10 + "倍";
              case "growth":
                return "" + r + Object(a.a)(e, "growthValue", 0) + "个";
              default:
                return Object(a.a)(e, "benefitPluginInfo.description", "");
            }
          },
          b = function (e, t) {
            return void 0 === t && (t = "YYYY-MM-DD"), Object(o.b)(e, t);
          },
          f = (e) => {
            var t,
              r = {};
            [
              "is_share",
              "dc_ps",
              "from_source",
              "from_params",
              "qr",
              "atr_ps",
              "gdt_vid",
              "qz_gdt",
            ].forEach((t) => {
              r[t] = Object(a.a)(e, t, "");
            });
            var o = getApp().logger.getLogParams(),
              n =
                r.from_params ||
                (o &&
                  (null == o || null == (t = o.context)
                    ? void 0
                    : t.from_params));
            return (
              n &&
                (r = Object(i.a)({}, r, {
                  biz_trace_point_ext: Object(i.a)(
                    {},
                    r.biz_trace_point_ext || {},
                    { from_params: n }
                  ),
                })),
              r
            );
          },
          m = (e, t) => {
            var { grantCycle: r = !1, stockNum: i, resetNum: o } = e,
              n = Object(a.a)(
                e,
                "benefitPluginInfo.showName",
                Object(a.a)(e, "appName", "")
              );
            return r
              ? "权益卡有效期内，每" +
                  { 1: "日", 7: "周", 30: "月", 90: "季度", 365: "年" }[
                    r.termDays
                  ] +
                  "可使用" +
                  e.stockNum +
                  "次" +
                  n +
                  "权益"
              : (!p(i) && !p(o)) || (!p(i) && !t)
              ? "权益卡有效期内，可使用" + i + "次" + n + "权益"
              : "权益卡有效期内，可使用" + n + "权益";
          },
          C = (e) => Object(o.b)(e, "YYYY-MM-DD"),
          h = (e) => Object(o.b)(e, "YYYY-MM-DD HH:mm:ss"),
          g = (e) => {
            switch (e.termType) {
              case 1:
                return "永久有效";
              case 2:
                return C(e.termBeginAt) + " - " + C(e.termEndAt);
              case 4:
                return "领卡后" + e.termDays + "内有效";
              default:
                return "";
            }
          };
        function O(e) {
          return (
            void 0 === e && (e = ""),
            /iphone-x|iPhone11|iPhone13|iPhone14|iPhone12(?!,8>)/i.test(
              e.replace(/\s/g, "-") || ""
            ) || /iPhone14/i.test(e.replace(/\s/g, "") || "")
          );
        }
      },
      jSg9: function (e, t, r) {
        r.r(t);
        var i = r("Fcif"),
          a = r("rqVN"),
          o = r("zMoS"),
          n = r("xyw3"),
          s = r("Qu2e"),
          c = r("Sei9"),
          d = r("uW0L"),
          p = r("svh/"),
          l = getApp();
        Object(a.a)({
          store: d.a,
          mapData: Object(i.a)({}, Object(p.h)(["customShowExpireDate"])),
          data: {
            modalVisible: !1,
            cardCodeInfo: { qr_code: "", bar_code: "" },
            expireTips: "",
            codeLoading: !0,
            cardExpire: "",
            cardName: "",
            action: "",
            btnText: "",
            cardTips: "",
            showCardTips: !1,
            cardCodeVisible: !1,
            cardStatus: "",
          },
          properties: {
            cardInfo: { type: Object, value: {} },
            cardType: { type: Number, value: s.j },
            imageUrl: { type: String, value: "" },
            isEnabled: { type: Boolean, value: !1 },
            isDisplay: { type: Boolean, value: !1 },
            isExpired: { type: Boolean, value: !1 },
            isSoldOut: { type: Boolean, value: !1 },
            hasCard: { type: Boolean, value: !1 },
            cardNo: { type: String, value: "" },
            isRenewable: { type: Boolean, value: !1 },
          },
          methods: {
            openCodeDialog() {
              this.setYZData({ modalVisible: !0, codeLoading: !0 }),
                this.getQrcode();
            },
            closeCodeDialog() {
              this.setYZData({ modalVisible: !1 });
            },
            getQrcode() {
              l.request({
                path: "/wscuser/scrm/api/benefitcard/getQrcodeAndBarCode.json",
                query: { txt: this.properties.cardNo },
              })
                .then((e) => {
                  this.setYZData({ cardCodeInfo: e, codeLoading: !1 });
                })
                .catch((e) => {
                  wx.showToast({ title: e.msg, icon: "error", duration: 1e3 }),
                    this.setYZData({ codeLoading: !1 });
                });
            },
            ruleCardTips: (e, t) =>
              ({
                amountLimit: "消费" + Object(n.a)(t).toYuan() + "元可再次领卡",
                tradeLimit: "完成" + t + "笔订单可再次领卡",
                pointsLimit: "获得" + t + "积分可再次领卡",
              }[e]),
            getCardExpire() {
              var { cardInfo: e, hasCard: t } = this.properties,
                r = Object(o.a)(e, "cardTemplateDTO.lifeTime", {}),
                { termType: i, termBeginAt: a, termDays: n, termEndAt: d } = r;
              if (t)
                return 0 === e.termEndAt
                  ? "永久有效"
                  : Object(c.c)(e.termBeginAt) +
                      " 至 " +
                      Object(c.c)(e.termEndAt);
              switch (i) {
                case s.a:
                  return Object(c.c)(a) + " 至 " + Object(c.c)(d);
                case s.f:
                  return n + "天";
                case s.g:
                  return "永久有效";
                default:
                  return "";
              }
            },
            expireTipNoRule() {
              this.setYZData({ showCardTips: !0, cardStatus: "expired" });
            },
            expireTipRule() {
              var { cardInfo: e } = this.properties,
                t = Object(o.a)(e, "cardTemplateDTO.ruleCondition", {}),
                r = "";
              ["amountLimit", "tradeLimit", "pointsLimit"].some(
                (e) => !!t[e] && ((r = this.ruleCardTips(e, t[e])), !0)
              ),
                this.setYZData({
                  cardTips: r,
                  showCardTips: !0,
                  cardStatus: "expired",
                });
            },
            expireTipPay() {
              this.setYZData({ showCardTips: !0, cardStatus: "expired" });
            },
            gCExpired() {
              var { cardType: e } = this.properties;
              switch (e) {
                case s.j:
                  this.expireTipNoRule();
                  break;
                case s.l:
                  this.expireTipRule();
                  break;
                default:
                  this.expireTipPay();
              }
            },
            gCNotDisplay() {
              var { hasCard: e } = this.properties;
              this.setYZData({
                cardTips: "已下架",
                showCardTips: !e,
                cardStatus: "off-self",
              });
            },
            gCDisabled() {
              var { isEnabled: e } = this.properties;
              this.setYZData({
                cardTips: "已禁用",
                showCardTips: !e,
                cardStatus: "disabled",
              });
            },
            gCSoldOut() {
              var { hasCard: e } = this.properties;
              this.setYZData({
                cardTips: "已售罄",
                showCardTips: !e,
                cardStatus: "sold-out",
              });
            },
            renew() {
              this.triggerEvent("renew");
            },
            gCNWillRenew() {
              var e = Object(o.a)(
                  this.properties.cardInfo,
                  "cardTemplateDTO.isRenewable",
                  !1
                ),
                t = Object(o.a)(
                  this.properties.cardInfo,
                  "cardTemplateDTO.isCurrentShopAvailable",
                  !1
                );
              Object(o.a)(this.properties.cardInfo, "activated", !1) &&
                e &&
                t &&
                this.setYZData({
                  cardTips: "",
                  btnText: "立即续费",
                  action: "renew",
                  showCardTips: !0,
                  cardStatus: "",
                });
            },
            executeAction() {
              this[this.data.action] && this[this.data.action]();
            },
            gCCodeVisible() {
              var { hasCard: e, isEnabled: t, isExpired: r } = this.properties,
                i = Object(o.a)(this.properties.cardInfo, "activated", !1),
                a = Object(o.a)(
                  this.properties.cardInfo,
                  "cardTemplateDTO.activationCondition",
                  {}
                ),
                n = a.requireMobile && a.requireProfile;
              return e && t && !r && ((n && i) || !n);
            },
            initData() {
              var e = Object(o.a)(
                this.properties.cardInfo,
                "cardTemplateDTO.name",
                ""
              );
              if (
                (this.setYZData({
                  cardName: e,
                  cardExpire: this.getCardExpire(),
                  cardCodeVisible: this.gCCodeVisible(),
                }),
                this.properties.isDisplay ||
                  this.properties.cardType !== s.k ||
                  (this.gCNotDisplay(), this.properties.hasCard))
              )
                return this.properties.isExpired
                  ? this.gCExpired()
                  : this.properties.isEnabled
                  ? this.properties.isSoldOut &&
                    this.properties.cardType === s.k
                    ? this.gCSoldOut()
                    : void (
                        !this.properties.isExpired &&
                        this.properties.isEnabled &&
                        this.properties.cardType === s.k &&
                        this.gCNWillRenew()
                      )
                  : this.gCDisabled();
            },
          },
          attached() {
            this.initData();
          },
        });
      },
    }
  )
);
