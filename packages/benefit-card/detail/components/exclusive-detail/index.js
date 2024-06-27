"use strict";
var r = require("~/r");
r(
  "8x1+",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "8x1+": function (e, t, r) {
      r.r(t);
      var n = r("rqVN"),
        i = r("zMoS"),
        o = r("Sei9");
      Object(n.a)({
        data: {
          showCode: !1,
          showDetail: !1,
          rewardTip: "",
          cycleTime: "",
          usedCount: 0,
        },
        properties: {
          themeGeneral: String,
          hasCard: Boolean,
          benfitKey: String,
          hasUseAbility: Boolean,
          cardIsExpired: Boolean,
          benefit: { type: Object, value: {} },
          experienceLog: Array,
          userBenefitDetail: {
            type: Object,
            value: { couponList: [], presentList: [] },
          },
          cardNo: String,
        },
        methods: {
          computedCycleTime() {
            var { grantCycle: e = !1 } = this.properties.benefit;
            return e
              ? "本" +
                  { 1: "日", 7: "周", 30: "月", 90: "季度", 365: "年" }[
                    e.termDays
                  ]
              : "";
          },
          computedRewardTip() {
            var e = Object(i.a)(
              this.properties.benefit,
              "extInfo.scrm_bn_biz_extends_info",
              null
            );
            if (e)
              try {
                var t = JSON.parse(e);
                return "+" + Object(i.a)(t, "[0].rewardValue", "");
              } catch (e) {
                return "";
              }
            return "";
          },
          computedShowDetail(e) {
            var { benfitKey: t, hasUseAbility: r } = this.properties;
            return (
              !(t || !e) ||
              !("experienceCard" !== t || !r) ||
              "present" === t ||
              "coupon" === t
            );
          },
          computedShowCode() {
            return !!this.checkCanGetRecordList(this.properties.benefit);
          },
          checkCanGetRecordList(e) {
            var t,
              { hasUseAbility: r } = this.properties;
            return (
              r &&
              (null == e || null == (t = e.benefitPluginInfo)
                ? void 0
                : t.applyStock) &&
              "discount" !== (null == e ? void 0 : e.key) &&
              !Object(o.f)(null == e ? void 0 : e.resetNum)
            );
          },
          init() {
            var e = this.computedShowCode(),
              t = this.computedShowDetail(e);
            this.setYZData({
              showCode: e,
              showDetail: t,
              cycleTime: this.computedCycleTime(),
            });
          },
          getRecordList() {
            var { benefit: e } = this.properties;
            this.checkCanGetRecordList(e) &&
              e.benefitId &&
              getApp()
                .request({
                  path: "/wscuser/scrm/api/benefitcard/getBenefitRecordList.json",
                  data: {
                    card_no: this.properties.cardNo,
                    benefit_id: e.benefitId,
                  },
                })
                .then((e) => {
                  this.setYZData({
                    usedCount: ((e || {}).items || []).reduce(
                      (e, t) => e + (t.num || 0),
                      0
                    ),
                  });
                });
          },
        },
        attached() {
          this.init(),
            this.getRecordList(),
            this.setYZData({ rewardTip: this.computedRewardTip() });
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
          return o;
        }),
        r.d(t, "h", function () {
          return c;
        }),
        r.d(t, "b", function () {
          return a;
        }),
        r.d(t, "d", function () {
          return s;
        }),
        r.d(t, "e", function () {
          return u;
        }),
        r.d(t, "i", function () {
          return d;
        }),
        r.d(t, "g", function () {
          return l;
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
          return C;
        });
      var n = 3,
        i = 6,
        o = 8,
        c = "init",
        a = { NO_RULE: n, RULE: i, PAY: o, ERROR_CARD_TYPE: -1 },
        s = 1,
        u = 0,
        d = {
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
        C = {
          appName: "更多权益",
          icon: "https://img01.yzcdn.cn/public_files/a1fb1079aa056c48631a190bc5247dd9.png",
          benefitTplId: 0,
        };
    },
    Sei9: function (e, t, r) {
      r.d(t, "f", function () {
        return d;
      }),
        r.d(t, "b", function () {
          return l;
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
          return g;
        }),
        r.d(t, "h", function () {
          return h;
        }),
        r.d(t, "a", function () {
          return j;
        });
      var n = r("Fcif"),
        i = r("zMoS"),
        o = r("v6dD"),
        c = r("3tyi"),
        a = r("rDSc"),
        s = r("a1Mm"),
        u = r("Qu2e"),
        d = (e) => null == e;
      var l = (e, t, r, o) => {
          var {
            diyTemplateList: d = [],
            experienceCard: l,
            diyBenefitList: p,
          } = e;
          e = Object(a.a)(e, [
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
            C = Object.keys(
              Object(c.a)(e, ["points", "growth", "coupon", "present"])
            ),
            g = [];
          g =
            r && p
              ? p.map((e) => {
                  var t = Object.assign(
                    e.diyTemplate.benefitTemplateExternal,
                    Object(a.a)(e.diyTemplate, "benefitTemplateExternal")
                  );
                  return Object(n.a)({}, t, {
                    benefitId: e.benefitId,
                    termCycle: e.termCycle,
                    resetNum: e.stockNum,
                  });
                })
              : d.map((e) => {
                  var t = Object.assign(
                    Object(i.a)(e, "benefitTemplateExternal", {}),
                    Object(a.a)(e, "benefitTemplateExternal")
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
                            ? Object.assign(e[t][t + r], o[t])
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
            j = C.map((t) => {
              if (e[t]) {
                var n = e[t];
                return (
                  r
                    ? (((n =
                        "present" === t
                          ? Object.assign(e[t][t + r], o[t])
                          : e[t][t + r]).resetNum = e[t].stockNum),
                      (n.termCycle = e[t].termCycle))
                    : (n.benefitId = e[t].benefitId),
                  (n.key = t),
                  "coupon" === t &&
                    (n.total = n.couponList.reduce((e, t) => e + t.number, 0)),
                  delete e[t],
                  n
                );
              }
              return null;
            }).filter((e) => !!e),
            y = l;
          return (
            l &&
              r &&
              (y = Object.assign(
                l.experienceCardTpl,
                Object(a.a)(l, "experienceCardTpl")
              )),
            l &&
              t !== u.d &&
              f.unshift(Object(n.a)({}, y, { key: "experienceCard" })),
            ((e) =>
              e.map((e) =>
                Object(n.a)({}, e, {
                  appName: Object(i.a)(e, "benefitPluginInfo.showName", ""),
                  label: b(e),
                  icon: Object(s.a)(
                    Object(i.a)(e, "benefitPluginInfo.icon", "")
                  ),
                })
              ))((f = f.concat(h).concat(g).concat(j)))
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
            r[t] = Object(i.a)(e, t, "");
          });
          var o = getApp().logger.getLogParams(),
            c =
              r.from_params ||
              (o &&
                (null == o || null == (t = o.context)
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
          var { grantCycle: r = !1, stockNum: n, resetNum: o } = e,
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
            : (!d(n) && !d(o)) || (!d(n) && !t)
            ? "权益卡有效期内，可使用" + n + "次" + c + "权益"
            : "权益卡有效期内，可使用" + c + "权益";
        },
        C = (e) => Object(o.b)(e, "YYYY-MM-DD"),
        g = (e) => Object(o.b)(e, "YYYY-MM-DD HH:mm:ss"),
        h = (e) => {
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
