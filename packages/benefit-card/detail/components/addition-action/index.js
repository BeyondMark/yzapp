"use strict";
var r = require("~/r");
r(
  "aenp",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Qu2e: function (o, e, i) {
      i.d(e, "j", function () {
        return n;
      }),
        i.d(e, "l", function () {
          return t;
        }),
        i.d(e, "k", function () {
          return r;
        }),
        i.d(e, "h", function () {
          return a;
        }),
        i.d(e, "b", function () {
          return c;
        }),
        i.d(e, "d", function () {
          return l;
        }),
        i.d(e, "e", function () {
          return d;
        }),
        i.d(e, "i", function () {
          return s;
        }),
        i.d(e, "g", function () {
          return b;
        }),
        i.d(e, "a", function () {
          return u;
        }),
        i.d(e, "f", function () {
          return C;
        }),
        i.d(e, "c", function () {
          return f;
        }),
        i.d(e, "n", function () {
          return p;
        }),
        i.d(e, "m", function () {
          return g;
        });
      var n = 3,
        t = 6,
        r = 8,
        a = "init",
        c = { NO_RULE: n, RULE: t, PAY: r, ERROR_CARD_TYPE: -1 },
        l = 1,
        d = 0,
        s = {
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
        b = 1,
        u = 2,
        C = 3,
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
        p =
          "https://img01.yzcdn.cn/public_files/23f9f5089197722cff6962bc33a66929.png",
        g = {
          appName: "更多权益",
          icon: "https://img01.yzcdn.cn/public_files/a1fb1079aa056c48631a190bc5247dd9.png",
          benefitTplId: 0,
        };
    },
    aenp: function (o, e, i) {
      i.r(e);
      var n = i("Fcif"),
        t = i("rqVN"),
        r = i("zMoS"),
        a = i("Qu2e");
      Object(t.b)({
        properties: {
          isEnabled: { type: Boolean, value: !0 },
          isDisplay: { type: Boolean, value: !1 },
          isExpired: { type: Boolean, value: !1 },
          isSoldOut: { type: Boolean, value: !1 },
          hasCard: { type: Boolean, value: !1 },
          cardType: { type: Number, value: a.j },
          activated: {
            type: Boolean,
            value: !1,
            observer(o, e) {
              o !== e && this.initData();
            },
          },
          activationCondition: { type: Object, value: {} },
          hasSyncToWeixin: {
            type: Boolean,
            value: !1,
            observer(o, e) {
              o !== e && this.initData();
            },
          },
          cardSyncInfo: { type: Object, value: {} },
          isRenewable: { type: Boolean, value: !1 },
          price: { type: Number, value: 0 },
          cardGoods: { type: Object, value: {} },
          cardTplId: { type: String, value: "" },
          hasMobile: { type: Boolean, value: !1 },
        },
        data: { action: "", btnText: "", btnVisible: !1 },
        methods: {
          initData() {
            this.formatBtnActionAndText();
          },
          formatBtnActionAndText() {
            var o = this.getBtnInfoHasCard({
              action: "",
              btnText: "",
              btnVisible: !1,
            });
            this.setYZData(Object(n.a)({}, o));
          },
          getBtnInfoHasCard(o) {
            var e;
            return (
              [
                {
                  cond: this.activateVisible(),
                  action: "activate",
                  btnText: "激活权益卡",
                  btnVisible: !0,
                },
                {
                  cond: this.syncWeixinVisible(),
                  action: "addWxCard",
                  btnText: "添加到微信卡包",
                  btnVisible: !0,
                },
              ].some((o) => !!o.cond && ((e = o), !0)),
              e || o
            );
          },
          activateVisible() {
            var { activationCondition: o = {}, activated: e } = this.properties,
              { requireMobile: i, requireProfile: n } = o;
            return (i || n) && !e;
          },
          syncWeixinVisible() {
            var { hasSyncToWeixin: o, cardSyncInfo: e } = this.properties,
              i = Object(r.a)(e, "cardWeixinSyncInfo.isSyncWeixin", !1),
              n = Object(r.a)(e, "cardWeixinSyncInfo.syncWeixinState", -1);
            return i && 3 === n && !o;
          },
          bindClick() {
            var { action: o } = this.properties;
            "" !== o && this.triggerEvent("btnaction", { action: o });
          },
          handleCallAuth() {
            var { action: o } = this.properties;
            this.triggerEvent("btnaction", { action: o, bindPhone: !0 });
          },
        },
        attached() {
          this.initData();
        },
      });
    },
  })
);
