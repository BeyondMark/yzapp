"use strict";
var r = require("~/r");
r(
  "w8X6",
  Object.assign({}, require("~/c.js").modules, {
    w8X6: function (e, t, i) {
      i.r(t);
      var f = i("0i4I");
      Object(f.a)({
        props: {
          value: { type: Boolean, default: !1 },
          zIndex: { type: Number, default: 100 },
          data: {
            type: Object,
            value: {
              title: "生效情况",
              content: [
                {
                  subTitle: "",
                  desc: ["自2020年5月22日18:00点起，有赞担保适用范围调整如下:"],
                  content: [],
                },
                {
                  subTitle: "适⽤商品类型",
                  desc: [
                    {
                      text: "部分商品类目暂不支持，详情 {{link}}",
                      link: [
                        {
                          key: "link",
                          text: "查看",
                          href: "https://help.youzan.com/displaylist/detail_4_4-2-47117",
                        },
                      ],
                    },
                    "参考商品类型时，无需参考商品的配送方式。",
                  ],
                  content: [
                    { text: "实物商品", subText: "物流发货", effective: !0 },
                    { text: "虚拟商品", subText: "无需物流", effective: !1 },
                    { text: "电子卡券", subText: "无需物流", effective: !1 },
                    { text: "酒店商品", subText: "无需物流", effective: !0 },
                    { text: "蛋糕烘焙", subText: "同城送/自提", effective: !1 },
                    {
                      text: "虚付费优惠券",
                      subText: "无需物流",
                      effective: !1,
                    },
                  ],
                },
                {
                  subTitle: "适⽤订单类型",
                  desc: [
                    "其中分销买家订单是否适⽤有赞担保，由供货商是否加⼊有赞担保决定。 自2020年6月18日10时起，有赞担保重新支持海淘订单。",
                  ],
                  content: [
                    { text: "普通订单", effective: !0 },
                    { text: "代付订单", effective: !0 },
                    { text: "送礼订单", effective: !0 },
                    { text: "心愿订单", effective: !0 },
                    { text: "分销供货订单", effective: !1 },
                    { text: "扫码收款订单", effective: !1 },
                    { text: "酒店订单", effective: !0 },
                    { text: "拼团/抽奖/多人订单", effective: !0 },
                    { text: "知识付费订单", effective: !1 },
                    { text: "储值卡/礼品卡订单", effective: !1 },
                    { text: "分销付费订单", effective: !0 },
                    { text: "订金预售订单", effective: !0 },
                    { text: "海淘订单", effective: !0 },
                    { text: "积分兑换订单", effective: !0 },
                    { text: "社区团购订单", effective: !0 },
                    { text: "周期购订单", effective: !1 },
                  ],
                },
                {
                  subTitle: "适⽤支付方式",
                  desc: [],
                  content: [
                    { text: "微信支付", effective: !0 },
                    {
                      text: "微信支付",
                      subText: "货款直接给商家",
                      effective: !1,
                    },
                    { text: "支付宝支付", effective: !0 },
                    { text: "银行卡支付", effective: !0 },
                    { text: "货到付款", effective: !1 },
                    { text: "分期支付", effective: !0 },
                    { text: "找人代付", effective: !0 },
                    { text: "现金", effective: !1 },
                    { text: "标记资金", effective: !1 },
                    { text: "POS机", effective: !1 },
                    { text: "有赞零钱", effective: !0 },
                    { text: "组合支付", effective: !1 },
                  ],
                },
              ],
            },
          },
        },
        data: { dataFormat: {} },
        watch: {
          data(e) {
            e && this.descParsing();
          },
        },
        methods: {
          descParsing() {
            var e,
              { content: t } = this.data.data;
            this.setData({
              dataFormat: {
                title:
                  (null === (e = t) || void 0 === e ? void 0 : e.title) || "",
                content: t.map((e) =>
                  Object.assign(Object.assign({}, e), {
                    desc: e.desc.map((e) => {
                      var t, i;
                      if ("object" == typeof e) {
                        var f =
                            (null === (t = e) || void 0 === t
                              ? void 0
                              : t.text) || "",
                          c =
                            null === (i = e) || void 0 === i
                              ? void 0
                              : i.text.match(/\{\{(.*?)\}\}/g),
                          v = [];
                        return (
                          c.forEach((t) => {
                            var i,
                              c,
                              x,
                              a = t.match(/\{\{(.*?)\}\}/)[1],
                              s =
                                null === (i = e) || void 0 === i
                                  ? void 0
                                  : i.link.find((e) => e.key === a);
                            if (s) {
                              var n = encodeURIComponent(
                                null === (c = s) || void 0 === c
                                  ? void 0
                                  : c.href
                              );
                              (v = f.split(t).map((e) => ({ text: e }))).splice(
                                1,
                                0,
                                {
                                  text:
                                    null === (x = s) || void 0 === x
                                      ? void 0
                                      : x.text,
                                  url:
                                    "/pages/common/webview-page/index?src=" + n,
                                }
                              ),
                                (v = v.filter((e) => !!e.text));
                            }
                          }),
                          v
                        );
                      }
                      return [{ text: e }];
                    }),
                  })
                ),
              },
            });
          },
          onClose() {
            this.$emit("close");
          },
        },
      });
    },
  })
);
