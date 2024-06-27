"use strict";
var r = require("~/r");
r(
  "Ejf9",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Ejf9: function (e, t, r) {
      r.r(t);
      var n = r("qJXH"),
        o = r("zMoS"),
        a = r("Sei9"),
        i = getApp();
      Object(n.b)({
        data: {
          tel: "",
          address: "",
          benefitId: "",
          scene: null,
          sceneBizValue: null,
          shopName: "",
        },
        onLoad(e) {
          void 0 === e && (e = {});
          var { id: t, scene: r, biz: n } = e;
          this.setYZData({ benefitId: t, scene: r, sceneBizValue: n });
        },
        onShow() {
          this.initData();
        },
        initData() {
          this.getRecordDetail(), this.getShopAddress(), this.getShopPhone();
        },
        getRecordDetail() {
          var { scene: e, benefitId: t, sceneBizValue: r } = this.data;
          i.request({
            path: "/wscuser/scrm/api/benefitcard/getBenefitRecord.json",
            data: { scene: e, benefit_id: t, scene_biz_value: r },
          })
            .then((e) => {
              var t = Object(a.g)(e.templatePluginBaseDTO),
                r = Object(a.h)(e.termCycle),
                n = Object(a.d)(e.createdAt);
              this.setYZData({
                record: e,
                benefit: Object(o.a)(
                  e,
                  "templatePluginBaseDTO.benefitPluginInfo",
                  {}
                ),
                grantCycle: Object(o.a)(
                  e,
                  "templatePluginBaseDTO.grantCycle",
                  {}
                ),
                validTime: r,
                rule: t,
                createdAt: n,
              });
            })
            .catch((e) => {
              wx.hideLoading(),
                wx.showToast({ title: e.msg, icon: "none", duration: 1e3 });
            });
        },
        getShopAddress() {
          var e = i.getKdtId();
          return i
            .request({
              path: "/wscuser/scrm/api/benefitcard/getPositionBySourceKdtId.json",
              data: { sourceKdtid: e },
            })
            .then((e) => {
              var t = e.province + e.city + e.area + e.address,
                r = e.shopName;
              this.setYZData({ address: t, shopName: r });
            });
        },
        getShopPhone() {
          var e = i.getKdtId();
          return i
            .request({
              path: "/wscuser/membercenter/contact.json",
              data: { sourceKdtid: e },
            })
            .then((e) => {
              var {
                  afterSaleContact: {
                    mobileNumber: t = null,
                    areaCode: r = null,
                    phoneNumber: n = null,
                  } = {},
                } = e,
                o = "";
              n ? (o = r + "-" + n) : t && (o = t), this.setYZData({ tel: o });
            });
        },
        takeCall() {
          this.data.tel
            ? wx.makePhoneCall({ phoneNumber: this.data.tel })
            : wx.showToast({
                title: "商家暂无配置客服电话",
                icon: "none",
                duration: 1e3,
              });
        },
      });
    },
    Qu2e: function (e, t, r) {
      r.d(t, "j", function () {
        return n;
      }),
        r.d(t, "l", function () {
          return o;
        }),
        r.d(t, "k", function () {
          return a;
        }),
        r.d(t, "h", function () {
          return i;
        }),
        r.d(t, "b", function () {
          return c;
        }),
        r.d(t, "d", function () {
          return l;
        }),
        r.d(t, "e", function () {
          return s;
        }),
        r.d(t, "i", function () {
          return d;
        }),
        r.d(t, "g", function () {
          return u;
        }),
        r.d(t, "a", function () {
          return b;
        }),
        r.d(t, "f", function () {
          return f;
        }),
        r.d(t, "c", function () {
          return p;
        }),
        r.d(t, "n", function () {
          return m;
        }),
        r.d(t, "m", function () {
          return g;
        });
      var n = 3,
        o = 6,
        a = 8,
        i = "init",
        c = { NO_RULE: n, RULE: o, PAY: a, ERROR_CARD_TYPE: -1 },
        l = 1,
        s = 0,
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
        u = 1,
        b = 2,
        f = 3,
        p = {
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
        return d;
      }),
        r.d(t, "b", function () {
          return u;
        }),
        r.d(t, "c", function () {
          return f;
        }),
        r.d(t, "e", function () {
          return p;
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
        o = r("zMoS"),
        a = r("v6dD"),
        i = r("3tyi"),
        c = r("rDSc"),
        l = r("a1Mm"),
        s = r("Qu2e"),
        d = (e) => null == e;
      var u = (e, t, r, a) => {
          var {
            diyTemplateList: d = [],
            experienceCard: u,
            diyBenefitList: f,
          } = e;
          e = Object(c.a)(e, [
            "diyTemplateList",
            "experienceCard",
            "diyBenefitList",
          ]);
          var p = [],
            m = Object.keys(
              Object(i.a)(e, [
                "postage",
                "discount",
                "memberPrice",
                "pointsFeedBack",
                "paidContent",
              ])
            ),
            g = Object.keys(
              Object(i.a)(e, ["points", "growth", "coupon", "present"])
            ),
            C = [];
          C =
            r && f
              ? f.map((e) => {
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
              : d.map((e) => {
                  var t = Object.assign(
                    Object(o.a)(e, "benefitTemplateExternal", {}),
                    Object(c.a)(e, "benefitTemplateExternal")
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
                Object(c.a)(u, "experienceCardTpl")
              )),
            u &&
              t !== s.d &&
              p.unshift(Object(n.a)({}, O, { key: "experienceCard" })),
            ((e) =>
              e.map((e) =>
                Object(n.a)({}, e, {
                  appName: Object(o.a)(e, "benefitPluginInfo.showName", ""),
                  label: b(e),
                  icon: Object(l.a)(
                    Object(o.a)(e, "benefitPluginInfo.icon", "")
                  ),
                })
              ))((p = p.concat(h).concat(C).concat(j)))
          );
        },
        b = (e) => {
          var t = Object(o.a)(e, "key", ""),
            r = Object(o.a)(e, "benefitPluginInfo.description", "");
          switch (t) {
            case "discount":
              return "" + r + Object(o.a)(e, "discount", 100) / 10 + "折";
            case "experienceCard":
              return "" + r + Object(o.a)(e, "stockNum", 0) + "张";
            case "points":
              return "" + r + Object(o.a)(e, "points", 0) + "个";
            case "pointsFeedBack":
              return "" + r + Object(o.a)(e, "rate", 0) / 10 + "倍";
            case "growth":
              return "" + r + Object(o.a)(e, "growthValue", 0) + "个";
            default:
              return Object(o.a)(e, "benefitPluginInfo.description", "");
          }
        },
        f = function (e, t) {
          return void 0 === t && (t = "YYYY-MM-DD"), Object(a.b)(e, t);
        },
        p = (e) => {
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
            r[t] = Object(o.a)(e, t, "");
          });
          var a = getApp().logger.getLogParams(),
            i =
              r.from_params ||
              (a &&
                (null == a || null == (t = a.context)
                  ? void 0
                  : t.from_params));
          return (
            i &&
              (r = Object(n.a)({}, r, {
                biz_trace_point_ext: Object(n.a)(
                  {},
                  r.biz_trace_point_ext || {},
                  { from_params: i }
                ),
              })),
            r
          );
        },
        m = (e, t) => {
          var { grantCycle: r = !1, stockNum: n, resetNum: a } = e,
            i = Object(o.a)(
              e,
              "benefitPluginInfo.showName",
              Object(o.a)(e, "appName", "")
            );
          return r
            ? "权益卡有效期内，每" +
                { 1: "日", 7: "周", 30: "月", 90: "季度", 365: "年" }[
                  r.termDays
                ] +
                "可使用" +
                e.stockNum +
                "次" +
                i +
                "权益"
            : (!d(n) && !d(a)) || (!d(n) && !t)
            ? "权益卡有效期内，可使用" + n + "次" + i + "权益"
            : "权益卡有效期内，可使用" + i + "权益";
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
