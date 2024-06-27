"use strict";
var r = require("~/r");
r(
  "tJ9R",
  Object.assign({}, require("~/v.js").modules, {
    tJ9R: function (e, t, r) {
      r.r(t);
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
              var e, t, r;
              return this.logoAddYouzan
                ? "//b.yzcdn.cn/guarantee/youzan-fangxin-green.png"
                : (null == (e = this.docs) ||
                  null == (t = e.icon) ||
                  null == (r = t.logo)
                    ? void 0
                    : r.iconShortTextGreen) ||
                    "//b.yzcdn.cn/security/fangxin-green.svg";
            },
            isWxvideoOrder() {
              var e = {};
              try {
                var t;
                return (
                  "TRADE_COMPONENT_3_0" ===
                    (e = JSON.parse(
                      (null == (t = this.orderExtra)
                        ? void 0
                        : t.BIZ_ORDER_ATTRIBUTE) || "{}"
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
        o = r("9ZMt");
      t.default = o.default.component(n);
    },
  })
);
