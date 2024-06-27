"use strict";
var r = require("~/r");
r(
  "m/Od",
  Object.assign({}, require("~/v.js").modules, {
    "m/Od": function (e, r, t) {
      t.r(r);
      var n = {
          props: {
            kdtId: { type: Number, required: !0 },
            orderNo: String,
            lifeCycle: Object,
            orderCreateTime: { type: Number, default: 0 },
            mainSupportContent: {
              type: Array,
              required: !1,
              default: () => [],
            },
            hasPaid: Boolean,
            padding: null,
            orderExtra: Object,
          },
          data: () => ({ logoAddYouzan: !1 }),
          computed: {
            logo() {
              var e, r, t;
              return this.logoAddYouzan
                ? "//b.yzcdn.cn/guarantee/youzan-fangxin-green.png"
                : (null == (e = this.docs) ||
                  null == (r = e.icon) ||
                  null == (t = r.logo)
                    ? void 0
                    : t.iconShortTextGreen) ||
                    "//b.yzcdn.cn/security/fangxin-green.svg";
            },
            isWxvideoOrder() {
              var e = {};
              try {
                var r;
                return (
                  "TRADE_COMPONENT_3_0" ===
                    (e = JSON.parse(
                      (null == (r = this.orderExtra)
                        ? void 0
                        : r.BIZ_ORDER_ATTRIBUTE) || "{}"
                    )).WX_CHANNELS_COMPONENT_VERSION ||
                  "WX_VIDEO_XIAO_DIAN" === e.MULTI_PLAT_OUT_CHANNEL
                );
              } catch (e) {
                return !1;
              }
            },
          },
          mounted() {
            this.abtest();
          },
          methods: {
            openPopup() {
              this.ctx.logger &&
                this.ctx.logger.log({
                  et: "click",
                  ei: "click_gurantee",
                  en: "点击有赞担保",
                }),
                this.$emit("open"),
                this.$emit("fetch-doc");
            },
            abtest() {},
          },
          ud: !0,
        },
        o = t("9ZMt");
      r.default = o.default.component(n);
    },
  })
);
