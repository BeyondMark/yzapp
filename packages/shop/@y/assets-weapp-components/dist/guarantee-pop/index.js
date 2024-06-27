"use strict";
var r = require("~/r");
r(
  "ehQE",
  Object.assign({}, require("~/c.js").modules, {
    ehQE: function (e, t, a) {
      a.r(t);
      var o = a("0i4I"),
        i = "https://h5.youzan.com/wscassets/api/security/guarantee/";
      Object(o.a)({
        props: {
          value: { type: Boolean, default: !1 },
          kdtId: { type: Number, required: !0 },
          itemId: { type: Number },
          orderNo: { type: String },
          type: { type: String, required: !0 },
          zIndex: { type: Number, default: 100 },
          lifeCycle: { type: Object },
          alias: { type: String },
          pageSource: { type: String, required: !1, value: "STANDARD" },
          featureKeys: { type: Array, required: !1, value: [] },
          orderCreateTime: { type: Number, value: 0 },
          hasPaid: { type: Boolean, default: !1 },
        },
        data: {
          showDetail: !1,
          showDeclare: !1,
          showEffective: !1,
          showPickup: !1,
          showDamageSubsidy: !1,
          items: [
            {
              key: "persional_customer_service",
              title: "专属客服",
              content: "点击订单详情页-联系您的专属客服，快速解决售后问题",
            },
            {
              key: "priority_claims",
              title: "优先赔付",
              content:
                "符合描述不当、运费争议等情况并提供有效凭证的，在订单完成之日起15天内发起的，有赞将联合中国人寿保险优先赔付",
              event: "showDeclare",
            },
            {
              key: "overdue_return",
              title: "过期包退",
              content: "过期商品签收48小时内包退",
            },
            {
              key: "inferior_prod_return",
              title: "三无包退",
              content: "订单完成15天内三无产品包退",
            },
          ],
          loading: !1,
          fetched: !1,
          time: 0,
          docs: null,
          logo: "",
          bottomLogo: "",
        },
        watch: {
          value(e) {
            if (!this.data.fetched && !0 === e) {
              this.setData({ loading: !0 });
              var t =
                "detail" === this.data.type
                  ? {
                      url: i + "fetchDetailProps3",
                      data: {
                        alias: this.data.alias,
                        pageSource: this.data.pageSource,
                        featureKeys: this.data.featureKeys.map((e) => e.key),
                        orderCreateTime: this.data.orderCreateTime,
                        kdtId: this.data.kdtId,
                        isFxg: !0,
                      },
                    }
                  : {
                      url: i + "fetchOrderProps3",
                      data: {
                        orderNo: this.data.orderNo,
                        kdtId: this.data.kdtId,
                        orderCreateTime: this.data.orderCreateTime,
                        featureKeys: this.data.featureKeys.map((e) => e.key),
                        isFxg: !0,
                      },
                    };
              wx.request({
                url: t.url,
                method: "POST",
                data: t.data,
                success: (e) => {
                  var t,
                    a,
                    o,
                    i,
                    { data: r } = e;
                  if (r && 0 === r.code) {
                    var s = r.data,
                      d = {
                        priority_claims: "showDeclare",
                        principal_cert_type: {
                          url:
                            "https://h5.youzan.com/wscassets/shopinfo?kdt_id=" +
                            ((null === (t = s) || void 0 === t
                              ? void 0
                              : t.kdtId) || this.data.kdtId) +
                            "&no_btn=1&no_footer=1",
                        },
                        free_pickup_return: "showPickup",
                        damage_subsidy: "showDamageSubsidy",
                      };
                    this.setData({
                      items: (
                        (null === (a = s) || void 0 === a
                          ? void 0
                          : a.securedFeatureList) || []
                      ).map((e) => {
                        var t, a;
                        return {
                          key: e.featureKey,
                          title: e.featureDesc,
                          content: e.featureContent,
                          event: (
                            null === (t = d[e.featureKey]) || void 0 === t
                              ? void 0
                              : t.url
                          )
                            ? "url"
                            : d[e.featureKey],
                          url:
                            null === (a = d[e.featureKey]) || void 0 === a
                              ? void 0
                              : a.url,
                        };
                      }),
                      docs: null === (o = s) || void 0 === o ? void 0 : o.docs,
                      time:
                        null === (i = s) || void 0 === i
                          ? void 0
                          : i.securedDurationTime,
                      fetched: !0,
                      loading: !1,
                    });
                  }
                },
                fail: () => {
                  this.setData({ fetched: !1, loading: !1 });
                },
              });
            }
          },
          docs() {
            this.setLogo();
          },
        },
        methods: {
          setLogo() {
            var e, t, a, o, i, r;
            this.setData({
              logo:
                (null ===
                  (a =
                    null ===
                      (t =
                        null === (e = this.data.docs) || void 0 === e
                          ? void 0
                          : e.icon) || void 0 === t
                      ? void 0
                      : t.logo) || void 0 === a
                  ? void 0
                  : a.iconShortTextGreen) ||
                "https://b.yzcdn.cn/security/fangxin-green.svg",
              bottomLogo:
                (null ===
                  (r =
                    null ===
                      (i =
                        null === (o = this.data.docs) || void 0 === o
                          ? void 0
                          : o.icon) || void 0 === i
                      ? void 0
                      : i.logo) || void 0 === r
                  ? void 0
                  : r.copyright) ||
                "https://b.yzcdn.cn/security/fangxin-copyright-pic.png",
            });
          },
          onClose() {
            this.$emit("close");
          },
          onCloseDetail() {
            this.setData({ showDetail: !1 });
          },
          onCloseDeclare() {
            this.setData({ showDeclare: !1 });
          },
          onCloseEffective() {
            this.setData({ showEffective: !1 });
          },
          onClosePickup() {
            this.setData({ showPickup: !1 });
          },
          onCloseDamageSubsidy() {
            this.setData({ showDamageSubsidy: !1 });
          },
          clickItem(e) {
            var { detail: t } = e;
            if ("url" === t.event) {
              var a = encodeURIComponent(t.url);
              wx.navigateTo({
                url: "/pages/common/webview-page/index?src=" + a,
              });
            }
            this.setData({ [t.event]: !0 });
          },
          onShowEffective() {
            this.setData({ showEffective: !0 });
          },
          goHelp() {
            var e = encodeURIComponent(
              "https://h5.youzan.com/v3/help/online/mars/index?from_biz=wsc&from_scene=youzandanbao"
            );
            wx.navigateTo({ url: "/pages/common/webview-page/index?src=" + e });
          },
        },
      });
    },
  })
);
