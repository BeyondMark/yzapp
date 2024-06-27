"use strict";
var r = require("~/r");
r(
  "DXBf",
  Object.assign({}, require("~/c.js").modules, {
    DXBf: function (e, t, a) {
      a.r(t);
      var o = a("0i4I");
      var s = getApp();
      var i = 0,
        r = 1,
        n = 2,
        c = 3;
      Object(o.a)({
        props: {
          kdtId: { type: Number, required: !0 },
          alias: { type: String, required: !0 },
          isWxPromise: { type: Boolean },
          pageSource: { type: String, required: !1, value: "STANDARD" },
          featureKeys: { type: Array, required: !1, value: [] },
          showId: { type: Number, value: 0 },
          orderCreateTime: { type: Number, value: 0 },
          platform: { type: String, required: !1, value: "weapp" },
        },
        data: {
          showPopup: !1,
          guarantee: { desc: [], on: !1, style: 0 },
          loading: !1,
          apolloLogo: {
            iconLongTextWhite:
              "https://b.yzcdn.cn/security/fangxin-long-text-white.png",
            iconShortTextGreen: "https://b.yzcdn.cn/security/fangxin-green.svg",
            iconLongTextGreen:
              "https://b.yzcdn.cn/security/fangxin-long-text-green.png",
            iconLongTextWhiteWx:
              "https://b.yzcdn.cn/guarantee/icon-long-text-white-wx@3x.png",
            iconShortTextGreenWx:
              "https://b.yzcdn.cn/guarantee/icon-short-text-green-wx@3x.png",
            iconLongTextGreenWx:
              "https://b.yzcdn.cn/guarantee/icon-long-text-green-wx@3x.png",
          },
          logo: "",
          guaranteeDesc: "",
        },
        watch: {
          "alias, kdtId": function (e, t) {
            e && t && this.fetchData();
          },
          "apolloLogo, guarantee": function () {
            this.setLogo();
          },
        },
        mounted() {
          this.fetchDocs();
        },
        methods: {
          fetchDocs() {
            wx.request({
              url: "https://h5.youzan.com/wscassets/api/security/guarantee/docs",
              data: { key: "icon", isFxg: !0 },
              method: "GET",
              success: (e) => {
                var t,
                  a,
                  { data: o } = e;
                o &&
                  0 === o.code &&
                  this.setData({
                    apolloLogo:
                      null ===
                        (a =
                          null === (t = o) || void 0 === t ? void 0 : t.data) ||
                      void 0 === a
                        ? void 0
                        : a.logo,
                  });
              },
            });
          },
          fetchData() {
            !0 !== this.data.loading &&
              (this.setData({ loading: !0 }),
              wx.request({
                url: "https://h5.youzan.com/wscassets/api/security/guarantee/fetchSecuredForItem2",
                method: "GET",
                data: {
                  alias: this.data.alias,
                  pageSource: this.data.pageSource,
                  featureKeys: this.data.featureKeys,
                  yzSecuredShowId: this.data.showId,
                  orderCreateTime: this.data.orderCreateTime,
                  kdtId: this.data.kdtId,
                  platform: this.data.platform,
                },
                success: (e) => {
                  var { data: t } = e;
                  if (t && 0 === t.code) {
                    var a = t.data || {};
                    this.setData({
                      guarantee: {
                        desc: a.componentResponseList,
                        on: a.yzSecured,
                        style: a.yzSecuredShowId,
                      },
                      loading: !1,
                    }),
                      this.$emit("onShow", a.yzSecured);
                  } else this.$emit("onShow", !1);
                },
                fail: () => {
                  this.$emit("onShow", !1);
                },
              }));
          },
          setLogo() {
            var { style: e } = this.data.guarantee,
              t = {
                [i]: this.data.isWxPromise
                  ? this.data.apolloLogo.iconShortTextGreenWx
                  : this.data.apolloLogo.iconShortTextGreen,
                [r]: this.data.isWxPromise
                  ? this.data.apolloLogo.iconLongTextGreenWx
                  : this.data.apolloLogo.iconLongTextGreen,
                [n]: this.data.isWxPromise
                  ? this.data.apolloLogo.iconLongTextWhiteWx
                  : this.data.apolloLogo.iconLongTextWhite,
                [c]: this.data.apolloLogo.iconShortTextGreen,
              };
            this.setData({
              logo: t[e],
              guaranteeDesc: this.getGuaranteeDesc(),
            });
          },
          getGuaranteeDesc() {
            var { on: e, style: t, desc: a } = this.data.guarantee;
            return e && t !== r && t !== n
              ? t === c
                ? (a || []).map((e) => e.desc).slice(0, 3)
                : (a || []).map((e) => e.desc)
              : [];
          },
          showGuaranteeIntro() {
            var e;
            void 0 ===
              (e = {
                et: "click",
                ei: "click_gurantee",
                en: "点击有赞担保",
                pt: "g",
              }) && (e = {}),
              s.logger && s.logger.log(e),
              this.setData({ showPopup: !0 });
          },
          closeGuaranteeIntro() {
            this.setData({ showPopup: !1 });
          },
        },
      });
    },
  })
);
