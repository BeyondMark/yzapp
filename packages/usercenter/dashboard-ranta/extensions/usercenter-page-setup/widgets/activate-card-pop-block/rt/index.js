"use strict";
var r = require("~/r");
r(
  "QAi4",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    QAi4: function (e, t, i) {
      i.r(t);
      var a = i("7/pW"),
        s = i("KEq0"),
        l = i.n(s),
        r = l()(
          "upload_files/2021/11/15/Fp2OuQMKpWewaa6upVwdmO-Bswcq.png",
          "middle"
        ),
        c = l()(
          "upload_files/2021/12/07/Fp1oGBTjo7fPZ4d6TD2quT_mvLFJ.png",
          "middle"
        ),
        d = l()(
          "upload_files/2021/11/15/FoRtIwFZwemPJqchrDKL-1sX40N8.png",
          "middle"
        ),
        n = Symbol("all"),
        o = getApp();
      Object(a.a)({
        properties: {
          benefitcard: {
            type: Object,
            value: {},
            observer: "observerBenefitcard",
          },
        },
        data: {
          visible: !0,
          BGURL: r,
          EMPTYICON: c,
          CLOSEICON: d,
          benefitList: [],
          name: "",
          cardAlias: "",
          desc: "",
          U_KEY: n,
        },
        lifetimes: {
          attached() {
            o.logger.log({
              et: "view",
              ei: "view_card_act",
              en: "权益卡激活曝光",
              pt: "uc",
            });
          },
        },
        methods: {
          close() {
            this.setYZData({ visible: !1 });
          },
          submit() {
            o.logger.log({
              et: "click",
              ei: "click_card_act",
              en: "权益卡激活点击",
              pt: "uc",
            }),
              wx.navigateTo({
                url: "/packages/card/active/index?alias=" + this.data.cardAlias,
              });
          },
          observerBenefitcard(e) {
            if (Object.keys(null != e ? e : {}).length) {
              var t,
                { benefitList: i = [] } = e;
              i.length > 4 &&
                (i = i
                  .slice(0, 3)
                  .concat({
                    showName: "全部权益",
                    benefitCountText: i.length + "项",
                    key: n,
                  }));
              var a = "尚未激活，激活即享专属特权";
              return (
                i.length && (a = "尚未激活，激活可享以下权益"),
                void this.setYZData({
                  benefitList: i,
                  name: "恭喜你，获得" + (null != (t = e.cardName) ? t : ""),
                  cardAlias: e.cardAlias,
                  desc: a,
                })
              );
            }
            this.setYZData({ benefitList: [] });
          },
        },
      });
    },
  })
);
