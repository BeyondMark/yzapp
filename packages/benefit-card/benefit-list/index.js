"use strict";
var r = require("~/r");
r(
  "eUnh",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Qu2e: function (e, t, r) {
      r.d(t, "j", function () {
        return n;
      }),
        r.d(t, "l", function () {
          return a;
        }),
        r.d(t, "k", function () {
          return i;
        }),
        r.d(t, "h", function () {
          return o;
        }),
        r.d(t, "b", function () {
          return c;
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
          return g;
        }),
        r.d(t, "m", function () {
          return m;
        });
      var n = 3,
        a = 6,
        i = 8,
        o = "init",
        c = { NO_RULE: n, RULE: a, PAY: i, ERROR_CARD_TYPE: -1 },
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
        g =
          "https://img01.yzcdn.cn/public_files/23f9f5089197722cff6962bc33a66929.png",
        m = {
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
          return g;
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
        a = r("zMoS"),
        i = r("v6dD"),
        o = r("3tyi"),
        c = r("rDSc"),
        s = r("a1Mm"),
        d = r("Qu2e"),
        l = (e) => null == e;
      var u = (e, t, r, i) => {
          var {
            diyTemplateList: l = [],
            experienceCard: u,
            diyBenefitList: p,
          } = e;
          e = Object(c.a)(e, [
            "diyTemplateList",
            "experienceCard",
            "diyBenefitList",
          ]);
          var f = [],
            g = Object.keys(
              Object(o.a)(e, [
                "postage",
                "discount",
                "memberPrice",
                "pointsFeedBack",
                "paidContent",
              ])
            ),
            m = Object.keys(
              Object(o.a)(e, ["points", "growth", "coupon", "present"])
            ),
            C = [];
          C =
            r && p
              ? p.map((e) => {
                  var t = Object.assign(
                    e.diyTemplate.benefitTemplateExternal,
                    Object(c.a)(e.diyTemplate, "benefitTemplateExternal")
                  );
                  return Object(n.a)({}, t, {
                    benefitId: e.benefitId,
                    termCycle: e.termCycle,
                    resetNum: e.stockNum,
                  });
                })
              : l.map((e) => {
                  var t = Object.assign(
                    Object(a.a)(e, "benefitTemplateExternal", {}),
                    Object(c.a)(e, "benefitTemplateExternal")
                  );
                  return Object(n.a)({}, t);
                });
          var h = g
              .map((t) => {
                if (e[t]) {
                  var n = e[t];
                  return (
                    r
                      ? (((n =
                          "paidContent" === t
                            ? Object.assign(e[t][t + r], i[t])
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
            j = m
              .map((t) => {
                if (e[t]) {
                  var n = e[t];
                  return (
                    r
                      ? (((n =
                          "present" === t
                            ? Object.assign(e[t][t + r], i[t])
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
                Object(c.a)(u, "experienceCardTpl")
              )),
            u &&
              t !== d.d &&
              f.unshift(Object(n.a)({}, O, { key: "experienceCard" })),
            ((e) =>
              e.map((e) =>
                Object(n.a)({}, e, {
                  appName: Object(a.a)(e, "benefitPluginInfo.showName", ""),
                  label: b(e),
                  icon: Object(s.a)(
                    Object(a.a)(e, "benefitPluginInfo.icon", "")
                  ),
                })
              ))((f = f.concat(h).concat(C).concat(j)))
          );
        },
        b = (e) => {
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
        p = function (e, t) {
          return void 0 === t && (t = "YYYY-MM-DD"), Object(i.b)(e, t);
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
          var i = getApp().logger.getLogParams(),
            o =
              r.from_params ||
              (i &&
                (null == i || null == (t = i.context)
                  ? void 0
                  : t.from_params));
          return (
            o &&
              (r = Object(n.a)({}, r, {
                biz_trace_point_ext: Object(n.a)(
                  {},
                  r.biz_trace_point_ext || {},
                  { from_params: o }
                ),
              })),
            r
          );
        },
        g = (e, t) => {
          var { grantCycle: r = !1, stockNum: n, resetNum: i } = e,
            o = Object(a.a)(
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
                o +
                "权益"
            : (!l(n) && !l(i)) || (!l(n) && !t)
            ? "权益卡有效期内，可使用" + n + "次" + o + "权益"
            : "权益卡有效期内，可使用" + o + "权益";
        },
        m = (e) => Object(i.b)(e, "YYYY-MM-DD"),
        C = (e) => Object(i.b)(e, "YYYY-MM-DD HH:mm:ss"),
        h = (e) => {
          switch (e.termType) {
            case 1:
              return "永久有效";
            case 2:
              return m(e.termBeginAt) + " - " + m(e.termEndAt);
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
    eUnh: function (e, t, r) {
      r.r(t);
      var n = r("qJXH"),
        a = r("zMoS"),
        i = r("Qu2e"),
        o = r("Sei9"),
        c = getApp(),
        s = c.getShopInfoSync();
      Object(n.b)({
        data: {
          benefitList: [],
          hasCard: !1,
          cardType: i.b.NO_RULE,
          experienceLog: [],
          cardInfo: {},
          rewardTips: "",
          tokenNum: 0,
          cardNo: 0,
          shopName: Object(a.a)(s, "base.shop_name", ""),
          openType: "",
          empty: !1,
          btnText: "",
          loading: !1,
        },
        onLoad(e) {
          void 0 === e && (e = {}), (this.alias = e.alias);
        },
        onShow() {
          this.initData();
        },
        onPullDownRefresh() {
          this.initData();
        },
        initData() {
          var e = !!c.getBuyerId();
          this.setYZData({ hasMobile: e }),
            wx.showLoading({ title: "加载中" }),
            this.setYZData({ loading: !0 }),
            this.fetchCardTplInfo(this.alias);
        },
        fetchCardTplInfo(e) {
          var t = this;
          c.request({
            path: "/wscuser/scrm/api/benefitcard/getCardTemplate.json",
            data: { cardAlias: e },
          })
            .then(function (e) {
              void 0 === e && (e = {}),
                wx.stopPullDownRefresh(),
                wx.hideLoading(),
                t.formatCardInfo(e);
            })
            .catch((e) => {
              wx.stopPullDownRefresh(),
                wx.hideLoading(),
                wx.showToast({ title: e.msg, icon: "none", duration: 1e3 }),
                this.setYZData({ benefitList: [], hasCard: !1, empty: !0 });
            });
        },
        formatCardInfo(e) {
          var {
              hasCard: t = !1,
              cardTemplateDTO: r,
              cardNo: n = 0,
              subType: c = i.e,
              activated: s,
            } = e,
            d = Object(a.a)(r, "benefitBag", {}),
            l = Object(a.a)(d, "experienceCard.stockNum", 0),
            u = Object(a.a)(r, "activationCondition.requireProfile", !0),
            b = Object(a.a)(r, "activationCondition.requireMobile", !0),
            p = Object(a.a)(r, "cardAcquireSetting", i.b.NO_RULE),
            f = u && b,
            g = Object(o.b)(d, c);
          f && !s && wx.hideShareMenu(),
            l && l > 0 && n
              ? this.getExperienceLog(n, l)
              : this.setYZData({ experienceLog: [], tokenNum: 0 });
          var m = "";
          (m = t ? "立即激活" : p === i.b.NO_RULE ? "立即领取" : "立即开通"),
            this.setYZData({
              hasCard: t,
              cardInfo: e,
              stockNum: l,
              cardNo: n,
              hasActivated: s,
              needActivated: f,
              openType: f && !s ? "" : "share",
              benefitList: g,
              empty: 0 === g.length,
              cardType: p,
              btnText: m,
              loading: !1,
            });
        },
        getExperienceLog(e, t) {
          return c
            .request({
              path: "/wscuser/scrm/api/benefitcard/getExperienceLog.json?from=weapp",
              data: { cardNo: e },
            })
            .then((e) => {
              this.setYZData({
                experienceLog: this.formatExperienceLog(e.items, t),
                tokenNum: Object(a.a)(e, "items.length", 0),
              });
            });
        },
        formatExperienceLog(e, t) {
          var r = new Array(t);
          return r.splice(0, e.length, ...e), r;
        },
        onShareAppMessage() {
          var e = this.getCardDesc();
          return {
            title:
              "送你一张" + Object(a.a)(this, "data.shopName", "") + "的体验卡",
            path:
              "/packages/benefit-card/take/index?alias=" +
              this.alias +
              "&card_no=" +
              Object(a.a)(this, "data.cardNo"),
            imageUrl: i.n,
            desc: e,
          };
        },
        getCardDesc() {
          return this.data.benefitList
            .filter((e) => "experienceCard" !== e.key)
            .map((e) => e.label)
            .join(",");
        },
        takeCard() {
          wx.navigateTo({
            url: "/packages/benefit-card/detail/index?alias=" + this.alias,
          });
        },
        getCardDescp() {
          return this.benefitsList
            .filter((e) => "experienceCard" !== e.key)
            .map((e) => e.label)
            .join(",");
        },
      });
    },
  })
);
