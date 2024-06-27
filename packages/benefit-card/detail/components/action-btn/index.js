"use strict";
var r = require("~/r");
r(
  "4QPn",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "4QPn": function (e, t, r) {
        r.r(t);
        var o = r("Fcif"),
          i = r("zMoS"),
          n = r("hHpg"),
          a = r("rqVN"),
          c = r("qako"),
          l = r("dWkE"),
          s = r("Qu2e"),
          d = r("uW0L"),
          u = r("svh/");
        Object(a.a)({
          store: d.a,
          mapData: Object(o.a)({}, Object(u.h)(["customShowProtocol"])),
          properties: {
            cardInfo: { type: Object, value: {} },
            isEnabled: { type: Boolean, value: !0 },
            isDisplay: { type: Boolean, value: !1 },
            isExpired: { type: Boolean, value: !1 },
            isSoldOut: { type: Boolean, value: !1 },
            hasCard: { type: Boolean, value: !1 },
            cardType: { type: Number, value: s.j },
            activated: { type: Boolean, value: !1 },
            activationCondition: { type: Object, value: {} },
            hasSyncToWeixin: { type: Boolean, value: !1 },
            cardSyncInfo: { type: Object, value: {} },
            isRenewable: { type: Boolean, value: !1 },
            price: { type: Number, value: 0 },
            cardGoods: { type: Object, value: {} },
            cardTplId: { type: String, value: "" },
            hasMobile: { type: Boolean, value: !1 },
            isCurrentShopAvailable: { type: Boolean, value: !1 },
            designChildren: { type: Array, value: [] },
            themeColors: { type: Object, value: {} },
            isIphone: Boolean,
          },
          data: { action: "", btnText: "", btnVisible: !1, agreed: !1 },
          methods: {
            triggerAsync() {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              return c.a.triggerAsync.apply(getApp(), t);
            },
            initData() {
              this.formatBaAndTx();
            },
            formatBaAndTx() {
              var e = { action: "", btnText: "", btnVisible: !1 },
                { hasCard: t } = this.properties,
                r = t
                  ? this.getBtnInfoHasCard(e)
                  : this.getBtnInfoWithoutCard(e);
              this.setYZData(Object(o.a)({}, r));
            },
            getBtnInfoHasCard(e) {
              var t,
                r = Object(i.a)(
                  this.properties.cardInfo,
                  "cardTemplateDTO.isNeedWillRenew",
                  !1
                ),
                o = this.activateVisible(),
                { hasCard: n, isRenewable: a, cardType: c } = this.properties,
                l = !1;
              return (
                o ? (l = !1) : a && n && 8 === c && r && (l = !0),
                [
                  {
                    cond: l,
                    action: "renewal",
                    btnText: "立即续费",
                    btnVisible: this.properties.isCurrentShopAvailable,
                  },
                ].some((e) => !!e.cond && ((t = e), !0)),
                t || e
              );
            },
            getBtnInfoWithoutCard(e) {
              var {
                cardType: t,
                isEnabled: r,
                isSoldOut: o,
                isDisplay: i,
                isExpired: n,
                price: a,
              } = this.properties;
              switch (t) {
                case s.j:
                  return {
                    action: "takeCard",
                    btnText: a ? "立即领卡" : "免费领取",
                    btnVisible: r && !n,
                  };
                case s.k:
                  return {
                    action: "buyCard",
                    btnText: "立即开通",
                    btnVisible: r && !o && i && !n,
                  };
                default:
                  return e;
              }
            },
            activateVisible() {
              var { activationCondition: e = {}, activated: t } =
                  this.properties,
                { requireMobile: r, requireProfile: o } = e;
              return (r || o) && !t;
            },
            syncWeixinVisible() {
              var { hasSyncToWeixin: e, cardSyncInfo: t } = this.properties,
                r = Object(i.a)(t, "cardWeixinSyncInfo.isSyncWeixin", !1),
                o = Object(i.a)(t, "cardWeixinSyncInfo.syncWeixinState", -1);
              return r && 3 === o && !e;
            },
            handleAgreedChange(e) {
              this.setYZData({ agreed: e.detail });
            },
            viewAgreement() {
              Object(l.a)("https://www.youzan.com/intro/rule/detail", {
                query: { alias: "roattxf9", pageType: "rules" },
              });
            },
            checkViewAggreementStatus() {
              return this.data.customShowProtocol
                ? this.triggerAsync("checkViewAggreementStatusHook").then(
                    (e) => {
                      var [t] = e;
                      return void 0 !== t
                        ? t
                        : !!this.data.agreed ||
                            (Object(n.a)("请先阅读并勾选协议"), !1);
                    }
                  )
                : Promise.resolve(!0);
            },
            bindClick() {
              this.checkViewAggreementStatus().then((e) => {
                if (e) {
                  var { action: t } = this.properties;
                  "" !== t &&
                    this.triggerAsync("beforeSubmitHook").then((e) => {
                      var [r] = e;
                      r && this.triggerEvent("btnaction", { action: t });
                    });
                }
              });
            },
            handleCallAuth() {
              var { action: e } = this.properties;
              this.triggerAsync("beforeSubmitHook").then((t) => {
                var [r] = t;
                r &&
                  this.triggerEvent("btnaction", { action: e, bindPhone: !0 });
              });
            },
          },
          attached() {
            this.initData();
          },
        });
      },
      Qu2e: function (e, t, r) {
        r.d(t, "j", function () {
          return o;
        }),
          r.d(t, "l", function () {
            return i;
          }),
          r.d(t, "k", function () {
            return n;
          }),
          r.d(t, "h", function () {
            return a;
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
            return p;
          }),
          r.d(t, "c", function () {
            return g;
          }),
          r.d(t, "n", function () {
            return C;
          }),
          r.d(t, "m", function () {
            return f;
          });
        var o = 3,
          i = 6,
          n = 8,
          a = "init",
          c = { NO_RULE: o, RULE: i, PAY: n, ERROR_CARD_TYPE: -1 },
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
          p = 3,
          g = {
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
          C =
            "https://img01.yzcdn.cn/public_files/23f9f5089197722cff6962bc33a66929.png",
          f = {
            appName: "更多权益",
            icon: "https://img01.yzcdn.cn/public_files/a1fb1079aa056c48631a190bc5247dd9.png",
            benefitTplId: 0,
          };
      },
    }
  )
);
