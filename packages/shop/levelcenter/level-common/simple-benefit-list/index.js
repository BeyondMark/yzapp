"use strict";
var r = require("~/r");
r(
  "RBe+",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "RBe+": function (e, t, i) {
      i.r(t);
      var a = i("rqVN"),
        s = i("2wjL"),
        n = i("WNIS"),
        r = i("zeDP"),
        l = i("bsB/"),
        o = getApp();
      Object(a.b)({
        properties: {
          benefitsList: {
            type: Array,
            value: [],
            observer(e) {
              this.setShowList(e);
            },
          },
          unTakeVisible: Boolean,
          subType: Number,
          rowSize: { type: Number, value: 4 },
          maxRow: { type: Number, value: 2 },
          nowLevelAlias: String,
          kdtId: String,
          needSubscribe: Boolean,
          customNameColor: { type: String, value: "" },
          customBg: { type: String, value: "" },
        },
        data: {
          showList: [],
          customClass: "",
          useBenefitFormat: !1,
          templateIdList: [],
        },
        attached() {
          this.getSubscribeInfo();
        },
        methods: {
          toBenefitLink(e) {
            var { rowSize: t, maxRow: i, benefitsList: a } = this.properties,
              n = t * i,
              { index: l } = e.currentTarget.dataset;
            a.length > n && l === n - 1 && (l = 0),
              ("membervoucher" !== a[l].name && "memberVoucher" !== a[l].key) ||
                this.log({
                  et: "click",
                  ei: "memb_coupon_icon_click",
                  en: "专享券去哪权益项点击",
                });
            var { kdtId: o, nowLevelAlias: c } = this.properties,
              u = { kdt_id: o, alias: c, benefit: l };
            this.data.useBenefitFormat && (u.benefit_format = "1");
            var b = s.a.add("/packages/levelcenter/benefit/index", u);
            if (
              this.properties.needSubscribe &&
              this.data.templateIdList.length > 0
            ) {
              var h = this;
              Object(r.b)({
                templateIdList: this.data.templateIdList,
                onSuccess: () => {
                  h.triggerEvent("subscribeCallback", !0);
                },
                onClose: () => {
                  wx.navigateTo({ url: b });
                },
              });
            } else wx.navigateTo({ url: b });
          },
          setShowList(e) {
            var { rowSize: t, maxRow: i } = this.properties,
              a = t * i,
              s = e,
              n = Object.keys((null == e ? void 0 : e[0]) || {});
            n.includes("title") &&
              n.includes("benefitType") &&
              this.setYZData({ useBenefitFormat: !0 }),
              e.length > a &&
                (s = e.slice(0, a - 1)).push({
                  title: "全部权益",
                  appName: "全部权益",
                  benefitCount: e.length,
                }),
              s.findIndex(
                (e) => "membervoucher" === e.name || "memberVoucher" === e.key
              ) >= 0 &&
                this.log({
                  et: "view",
                  ei: "memb_coupon_icon",
                  en: "专享券权益项曝光",
                }),
              this.setYZData({
                showList: s,
                customClass:
                  s.length > 4
                    ? "benefit-list-flex-start"
                    : "benefit-list-flex-center",
              });
          },
          log(e) {
            o.logger && o.logger.log(e);
          },
          getSubscribeInfo() {
            Object(l.a)({ scene: n.k }).then((e) => {
              this.setYZData({ templateIdList: e });
            });
          },
        },
      });
    },
    zeDP: function (e, t, i) {
      i.d(t, "a", function () {
        return l;
      }),
        i.d(t, "b", function () {
          return o;
        });
      var a = i("eijD"),
        s = i("hHpg"),
        n = i("bsB/"),
        r = i("WNIS"),
        l = () =>
          new Promise((e, t) => {
            Object(n.d)()
              .then((t) => {
                t
                  ? wx
                      .getStorage({ key: r.l })
                      .then((t) => {
                        t.data !== new Date().toLocaleDateString() && e(!0);
                      })
                      .catch(() => {
                        e(!0);
                      })
                  : e(!1);
              })
              .catch(() => t("授权能力获取失败"));
          });
      function o(e) {
        return c.apply(this, arguments);
      }
      function c() {
        return (c = Object(a.a)(function* (e) {
          var {
            templateIdList: t = [],
            onSuccess: i = null,
            onReject: a = null,
            onFail: l = null,
            onClose: o = null,
          } = e;
          Object(n.b)({
            scene: r.k,
            needAlwaysToast: !1,
            templateIdList: t,
            successCallBack: () => {
              wx.setStorage({ key: r.l, data: new Date().toLocaleDateString() })
                .then(() => {
                  i && i();
                })
                .catch(() => {
                  Object(s.a)("订阅状态缓存设置失败");
                });
            },
            rejectCallBack: () => {
              a && a();
            },
            closeCallBack: () => {
              o && o();
            },
            failCallBack: () => {
              l && l();
            },
          });
        })).apply(this, arguments);
      }
    },
  })
);
