"use strict";
var r = require("~/r");
r(
  "51/R",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "51/R": function (e, t, r) {
      r.r(t);
      var n = r("rqVN"),
        i = r("zMoS"),
        a = r("Sei9"),
        c = r("Qu2e"),
        o = getApp();
      Object(n.a)({
        data: {
          hasCard: !1,
          benefitsList: [],
          userBenefitDetail: {},
          hasUseAbility: !1,
          experienceLog: [],
          cardExpire: "",
          cardDescription: "",
        },
        properties: {
          themeGeneral: String,
          cardInfo: { type: Object, value: {} },
          benefitBag: { type: Object, value: {} },
          subType: { type: Number, value: c.e },
          alias: { type: String, value: "" },
          cardIsExpired: Boolean,
        },
        methods: {
          initData() {
            this.getBenefitDetail(),
              this.formatCardInfo(this.properties.cardInfo);
          },
          formatCardInfo(e) {
            var {
                hasCard: t = !1,
                cardTemplateDTO: r,
                cardNo: n = 0,
                subType: s = c.e,
                activated: d,
              } = e,
              l = Object(i.a)(r, "benefitBag", {}),
              u = Object(i.a)(r, "description", ""),
              b = Object(i.a)(l, "experienceCard.stockNum", 0),
              p = Object(i.a)(r, "activationCondition.requireProfile", !0),
              f = Object(i.a)(r, "activationCondition.requireMobile", !0),
              m = Object(i.a)(r, "cardAcquireSetting", c.b.NO_RULE),
              g = p && f,
              C = Object(i.a)(r, "isCurrentShopAvailable", !1),
              h = [],
              j = (t && !g) || (t && g && d);
            ((g && !d) || !C) && wx.hideShareMenu && wx.hideShareMenu(),
              j
                ? o
                    .request({
                      path: "/wscuser/scrm/api/benefitcard/getBenefitsList.json",
                      data: { card_no: n },
                    })
                    .then((r) => {
                      (h = Object(a.b)(r, s, "Tpl", l)),
                        (b = Object(i.a)(l, "experienceCard.stockNum", 0)) &&
                        b > 0 &&
                        n
                          ? this.getExperienceLog(n, b)
                          : this.setYZData({ experienceLog: [], tokenNum: 0 }),
                        this.setYZData({
                          hasCard: t,
                          cardInfo: e,
                          stockNum: b,
                          cardNo: n,
                          hasUseAbility: j,
                          openType: g && !d ? "" : "share",
                          benefitsList: h,
                          empty: 0 === h.length,
                          cardType: m,
                          loading: !1,
                          isCurrentShopAvailable: C,
                          cardDescription: u,
                          cardExpire: this.computedCardExpire(t),
                        });
                    })
                    .catch((e) => {
                      wx.hideLoading(),
                        wx.showToast({
                          title: e.msg,
                          icon: "none",
                          duration: 1e3,
                        });
                    })
                : ((h = Object(a.b)(l, s)),
                  b && b > 0 && n
                    ? this.getExperienceLog(n, b)
                    : this.setYZData({ experienceLog: [], tokenNum: 0 }),
                  this.setYZData({
                    hasCard: t,
                    cardInfo: e,
                    stockNum: b,
                    cardNo: n,
                    openType: g && !d ? "" : "share",
                    benefitsList: h,
                    empty: 0 === h.length,
                    cardType: m,
                    loading: !1,
                    hasUseAbility: j,
                    cardDescription: u,
                    cardExpire: this.computedCardExpire(t),
                  }));
          },
          getExperienceLog(e) {
            o.request({
              path: "/wscuser/scrm/api/benefitcard/getExperienceLog.json",
              data: { cardNo: e },
            }).then((e) => {
              this.setYZData({ experienceLog: e.items }).catch(() => {});
            });
          },
          getBenefitDetail() {
            return o
              .request({
                path: "/wscuser/scrm/api/benefitcard/benefit-info.json",
                data: {
                  carrierType: "1",
                  carrierTplAlias: this.properties.alias,
                },
              })
              .then((e) => {
                this.setYZData({ userBenefitDetail: e });
              })
              .catch(() => {});
          },
          computedCardExpire(e) {
            var { cardInfo: t } = this.properties,
              r = Object(i.a)(t, "cardTemplateDTO.lifeTime", {}),
              { termType: n, termBeginAt: o, termDays: s, termEndAt: d } = r;
            return e
              ? 0 === t.termEndAt
                ? "永久有效"
                : Object(a.c)(t.termBeginAt) + " 至 " + Object(a.c)(t.termEndAt)
              : n === c.a
              ? Object(a.c)(o) + " 至 " + Object(a.c)(d)
              : n === c.f
              ? "购买后" + s + "天内有效"
              : n === c.g
              ? "永久有效"
              : "";
          },
        },
        attached() {
          this.initData();
        },
      });
    },
    Qu2e: function (e, t, r) {
      r.d(t, "j", function () {
        return n;
      }),
        r.d(t, "l", function () {
          return i;
        }),
        r.d(t, "k", function () {
          return a;
        }),
        r.d(t, "h", function () {
          return c;
        }),
        r.d(t, "b", function () {
          return o;
        }),
        r.d(t, "d", function () {
          return s;
        }),
        r.d(t, "e", function () {
          return d;
        }),
        r.d(t, "i", function () {
          return l;
        }),
        r.d(t, "g", function () {
          return u;
        }),
        r.d(t, "a", function () {
          return b;
        }),
        r.d(t, "f", function () {
          return p;
        }),
        r.d(t, "c", function () {
          return f;
        }),
        r.d(t, "n", function () {
          return m;
        }),
        r.d(t, "m", function () {
          return g;
        });
      var n = 3,
        i = 6,
        a = 8,
        c = "init",
        o = { NO_RULE: n, RULE: i, PAY: a, ERROR_CARD_TYPE: -1 },
        s = 1,
        d = 0,
        l = {
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
        u = 1,
        b = 2,
        p = 3,
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
        g = {
          appName: "更多权益",
          icon: "https://img01.yzcdn.cn/public_files/a1fb1079aa056c48631a190bc5247dd9.png",
          benefitTplId: 0,
        };
    },
    Sei9: function (e, t, r) {
      r.d(t, "f", function () {
        return l;
      }),
        r.d(t, "b", function () {
          return u;
        }),
        r.d(t, "c", function () {
          return p;
        }),
        r.d(t, "e", function () {
          return f;
        }),
        r.d(t, "g", function () {
          return m;
        }),
        r.d(t, "d", function () {
          return C;
        }),
        r.d(t, "h", function () {
          return h;
        }),
        r.d(t, "a", function () {
          return j;
        });
      var n = r("Fcif"),
        i = r("zMoS"),
        a = r("v6dD"),
        c = r("3tyi"),
        o = r("rDSc"),
        s = r("a1Mm"),
        d = r("Qu2e"),
        l = (e) => null == e;
      var u = (e, t, r, a) => {
          var {
            diyTemplateList: l = [],
            experienceCard: u,
            diyBenefitList: p,
          } = e;
          e = Object(o.a)(e, [
            "diyTemplateList",
            "experienceCard",
            "diyBenefitList",
          ]);
          var f = [],
            m = Object.keys(
              Object(c.a)(e, [
                "postage",
                "discount",
                "memberPrice",
                "pointsFeedBack",
                "paidContent",
              ])
            ),
            g = Object.keys(
              Object(c.a)(e, ["points", "growth", "coupon", "present"])
            ),
            C = [];
          C =
            r && p
              ? p.map((e) => {
                  var t = Object.assign(
                    e.diyTemplate.benefitTemplateExternal,
                    Object(o.a)(e.diyTemplate, "benefitTemplateExternal")
                  );
                  return Object(n.a)({}, t, {
                    benefitId: e.benefitId,
                    termCycle: e.termCycle,
                    resetNum: e.stockNum,
                  });
                })
              : l.map((e) => {
                  var t = Object.assign(
                    Object(i.a)(e, "benefitTemplateExternal", {}),
                    Object(o.a)(e, "benefitTemplateExternal")
                  );
                  return Object(n.a)({}, t);
                });
          var h = m
              .map((t) => {
                if (e[t]) {
                  var n = e[t];
                  return (
                    r
                      ? (((n =
                          "paidContent" === t
                            ? Object.assign(e[t][t + r], a[t])
                            : e[t][t + r]).resetNum = e[t].stockNum),
                        (n.termCycle = e[t].termCycle))
                      : (n.benefitId = e[t].benefitId),
                    (n.key = t),
                    delete e[t],
                    n
                  );
                }
                return null;
              })
              .filter((e) => !!e),
            j = g
              .map((t) => {
                if (e[t]) {
                  var n = e[t];
                  return (
                    r
                      ? (((n =
                          "present" === t
                            ? Object.assign(e[t][t + r], a[t])
                            : e[t][t + r]).resetNum = e[t].stockNum),
                        (n.termCycle = e[t].termCycle))
                      : (n.benefitId = e[t].benefitId),
                    (n.key = t),
                    "coupon" === t &&
                      (n.total = n.couponList.reduce(
                        (e, t) => e + t.number,
                        0
                      )),
                    delete e[t],
                    n
                  );
                }
                return null;
              })
              .filter((e) => !!e),
            O = u;
          return (
            u &&
              r &&
              (O = Object.assign(
                u.experienceCardTpl,
                Object(o.a)(u, "experienceCardTpl")
              )),
            u &&
              t !== d.d &&
              f.unshift(Object(n.a)({}, O, { key: "experienceCard" })),
            ((e) =>
              e.map((e) =>
                Object(n.a)({}, e, {
                  appName: Object(i.a)(e, "benefitPluginInfo.showName", ""),
                  label: b(e),
                  icon: Object(s.a)(
                    Object(i.a)(e, "benefitPluginInfo.icon", "")
                  ),
                })
              ))((f = f.concat(h).concat(C).concat(j)))
          );
        },
        b = (e) => {
          var t = Object(i.a)(e, "key", ""),
            r = Object(i.a)(e, "benefitPluginInfo.description", "");
          switch (t) {
            case "discount":
              return "" + r + Object(i.a)(e, "discount", 100) / 10 + "折";
            case "experienceCard":
              return "" + r + Object(i.a)(e, "stockNum", 0) + "张";
            case "points":
              return "" + r + Object(i.a)(e, "points", 0) + "个";
            case "pointsFeedBack":
              return "" + r + Object(i.a)(e, "rate", 0) / 10 + "倍";
            case "growth":
              return "" + r + Object(i.a)(e, "growthValue", 0) + "个";
            default:
              return Object(i.a)(e, "benefitPluginInfo.description", "");
          }
        },
        p = function (e, t) {
          return void 0 === t && (t = "YYYY-MM-DD"), Object(a.b)(e, t);
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
            r[t] = Object(i.a)(e, t, "");
          });
          var a = getApp().logger.getLogParams(),
            c =
              r.from_params ||
              (a &&
                (null == a || null == (t = a.context)
                  ? void 0
                  : t.from_params));
          return (
            c &&
              (r = Object(n.a)({}, r, {
                biz_trace_point_ext: Object(n.a)(
                  {},
                  r.biz_trace_point_ext || {},
                  { from_params: c }
                ),
              })),
            r
          );
        },
        m = (e, t) => {
          var { grantCycle: r = !1, stockNum: n, resetNum: a } = e,
            c = Object(i.a)(
              e,
              "benefitPluginInfo.showName",
              Object(i.a)(e, "appName", "")
            );
          return r
            ? "权益卡有效期内，每" +
                { 1: "日", 7: "周", 30: "月", 90: "季度", 365: "年" }[
                  r.termDays
                ] +
                "可使用" +
                e.stockNum +
                "次" +
                c +
                "权益"
            : (!l(n) && !l(a)) || (!l(n) && !t)
            ? "权益卡有效期内，可使用" + n + "次" + c + "权益"
            : "权益卡有效期内，可使用" + c + "权益";
        },
        g = (e) => Object(a.b)(e, "YYYY-MM-DD"),
        C = (e) => Object(a.b)(e, "YYYY-MM-DD HH:mm:ss"),
        h = (e) => {
          switch (e.termType) {
            case 1:
              return "永久有效";
            case 2:
              return g(e.termBeginAt) + " - " + g(e.termEndAt);
            case 4:
              return "领卡后" + e.termDays + "内有效";
            default:
              return "";
          }
        };
      function j(e) {
        return (
          void 0 === e && (e = ""),
          /iphone-x|iPhone11|iPhone13|iPhone14|iPhone12(?!,8>)/i.test(
            e.replace(/\s/g, "-") || ""
          ) || /iPhone14/i.test(e.replace(/\s/g, "") || "")
        );
      }
    },
  })
);
