"use strict";
var r = require("~/r");
r(
  "XMmX",
  Object.assign({}, require("~/v.js").modules, {
    XMmX: function (e, t, i) {
      i.r(t);
      var s = i("US/N"),
        o = i("9ZMt"),
        r = [
          {
            key: "persional_customer_service",
            title: "专属客服",
            content: "点击订单详情页-放心购客服，快速解决售后问题。",
          },
          {
            key: "priority_claims",
            title: "先行赔付",
            content:
              "若发生商品为过期/三无商品、商品描述与实物不符、与商家发生运费争议等情况，消费者在15天内发起申请并提供有效凭证，可享受先行赔付",
            event: "showDeclare",
          },
        ],
        a = {
          props: {
            value: { type: Boolean, default: !1 },
            kdtId: { type: [String, Number], required: !0 },
            itemId: { type: Number },
            orderNo: { type: String },
            type: { type: String, required: !0 },
            zIndex: { type: Number, default: 100 },
            lifeCycle: { type: Object, default: null },
            alias: { type: String },
            pageSource: { type: String, required: !1, default: "STANDARD" },
            featureKeys: { type: Array, required: !1, default: () => [] },
            orderCreateTime: { type: Number, default: 0 },
            hasPaid: Boolean,
            tpKey: { type: String, required: !1, default: "" },
            tpVersion: { type: Number, required: !1, default: 1 },
            uuid: String,
          },
          data: () => ({
            showDetail: !1,
            showDeclare: !1,
            showEffective: !1,
            items: [],
            showPickup: !1,
            showDamageSubsidy: !1,
            showBeautyRights: !1,
            showEatRights: !1,
            loading: !1,
            fetched: !1,
            time: 0,
            docs: {},
            logoAddYouzan: !1,
            showCommon: !1,
            currentShowContent: null,
          }),
          computed: {
            logo() {
              var e, t, i;
              return this.logoAddYouzan
                ? "//b.yzcdn.cn/guarantee/youzan-fangxin-green.png"
                : (null == (e = this.docs) ||
                  null == (t = e.icon) ||
                  null == (i = t.logo)
                    ? void 0
                    : i.iconShortTextGreen) ||
                    "//b.yzcdn.cn/security/fangxin-green.svg";
            },
            bottomLogo() {
              var e, t, i;
              return (
                (null == (e = this.docs) ||
                null == (t = e.icon) ||
                null == (i = t.logo)
                  ? void 0
                  : i.copyright) || "//b.yzcdn.cn/security/fangxin-green.svg"
              );
            },
          },
          watch: {
            value(e) {
              this.fetched ||
                !0 !== e ||
                ((this.loading = !0),
                ("detail" === this.type
                  ? Object(s.default)({
                      path: "/wscassets/api/security/guarantee/fetchDetailProps3",
                      method: "POST",
                      data: {
                        alias: this.alias,
                        pageSource: this.pageSource,
                        featureKeys: this.featureKeys.map((e) => e.key),
                        orderCreateTime: this.orderCreateTime,
                        kdtId: this.kdtId,
                        tpKey: this.tpKey,
                        tpVersion: this.tpVersion,
                        isFxg: !0,
                      },
                    })
                  : Object(s.default)({
                      path: "/wscassets/api/security/guarantee/fetchOrderProps3",
                      method: "POST",
                      data: {
                        orderNo: this.orderNo,
                        kdtId: this.kdtId,
                        orderCreateTime: this.orderCreateTime,
                        featureKeys: this.featureKeys.map((e) => e.key),
                        isFxg: !0,
                      },
                    })
                )
                  .then((e) => {
                    this.docs = e.docs;
                    var t = {
                      priority_claims: "showDeclare",
                      principal_cert_type: {
                        url:
                          "https://h5.youzan.com/wscassets/shopinfo?kdt_id=" +
                          ((null == e ? void 0 : e.kdtId) || this.kdtId) +
                          "&no_btn=1&no_footer=1",
                      },
                      quality_guarantee_satisfy: {
                        url:
                          "https://h5.youzan.com/wscassets/shopinfo?kdt_id=" +
                          ((null == e ? void 0 : e.kdtId) || this.kdtId) +
                          "&no_btn=1&no_footer=1",
                      },
                      free_pickup_return: "showPickup",
                      damage_subsidy: "showDamageSubsidy",
                      beauty_rights: "showBeautyRights",
                      eat_rights: "showEatRights",
                    };
                    (this.items = (
                      (null == e ? void 0 : e.securedFeatureList) || []
                    ).map((e) => {
                      var i, s;
                      return {
                        key: e.featureKey,
                        title: e.featureDesc,
                        content: e.featureContent,
                        event:
                          null != (i = t[e.featureKey]) && i.url
                            ? "url"
                            : t[e.featureKey],
                        url: null == (s = t[e.featureKey]) ? void 0 : s.url,
                      };
                    })),
                      (this.time = null == e ? void 0 : e.securedDurationTime),
                      (this.fetched = !0),
                      (this.loading = !1);
                  })
                  .catch(() => {
                    (this.items = r), (this.fetched = !1), (this.loading = !1);
                  }));
            },
          },
          created() {},
          methods: {
            onClose() {
              this.$emit("close");
            },
            onCloseDetail() {
              this.showDetail = !1;
            },
            onCloseDeclare() {
              this.showDeclare = !1;
            },
            onCloseEffective() {
              this.showEffective = !1;
            },
            onClosePickup() {
              this.showPickup = !1;
            },
            onCloseDamageSubsidy() {
              this.showDamageSubsidy = !1;
            },
            onShowEffective() {
              this.showEffective = !0;
            },
            onCloseBeautyRights() {
              this.showBeautyRights = !1;
            },
            onCloseEatRights() {
              this.showEatRights = !1;
            },
            onCloseCommon() {
              this.showCommon = !1;
            },
            clickItem(e) {
              "url" !== e.event
                ? e.event
                  ? (this[e.event] = !0)
                  : ((this.currentShowContent = this.docs[e.key]),
                    this.currentShowContent && (this.showCommon = !0))
                : o.default.navigate({ url: e.url, type: "navigateTo" });
            },
            goHelp() {
              o.default.navigate({
                url: "https://h5.youzan.com/v3/help/online/mars/index?from_biz=wsc&from_scene=youzandanbao",
                type: "navigateTo",
              });
            },
          },
          ud: !0,
        };
      t.default = o.default.component(a);
    },
  })
);
