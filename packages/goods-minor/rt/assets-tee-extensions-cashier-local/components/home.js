"use strict";
var r = require("~/r");
r(
  "I1Cf",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      I1Cf: function (e, t, c) {
        c.r(t);
        var a = c("tr7U"),
          n = {
            props: {
              themeColor: String,
              active: Object,
              instalment: { type: Object, required: !1, default: void 0 },
              recommend: Object,
              recommendType: String,
              info: Object,
              showGuarantee: Boolean,
              paying: Boolean,
              kdtId: Number,
              UserAuthorize: Object,
            },
            data: () => ({ lastActive: null }),
            computed: {
              classnames: () => ({
                container: [
                  Object(a.b)("column", "sb"),
                  Object(a.c)("container"),
                ],
                main: Object(a.b)("column"),
                info: Object(a.c)("info"),
                mchName: Object(a.c)("mch-name"),
                amount: Object(a.c)("amount"),
                active: [Object(a.b)("sb"), Object(a.c)("active")],
                showAll: Object(a.b)(),
                activeText: Object(a.b)("column", "align-end"),
                activeTip: Object(a.c)("active-tip"),
                moreIcon: Object(a.c)("more-icon"),
                bottom: Object(a.c)("bottom"),
                userAuthorize: Object(a.c)("user-authorize"),
                submitButton: Object(a.c)("submit-button"),
                guarantee: [Object(a.b)("center"), Object(a.c)("guarantee")],
                guaranteeImage: Object(a.c)("guarantee-image"),
              }),
              needMobile() {
                var e;
                return ["ALIPAY_AGREEMENT", "INSTALMENT"].includes(
                  null == (e = this.active) ? void 0 : e.payChannel
                );
              },
              disabled() {
                var e;
                return !(null != (e = this.active) && e.available);
              },
              showRecommend() {
                var { recommend: e, active: t } = this;
                return (
                  (null == e ? void 0 : e.channelNotice) &&
                  !(null != t && t.selectedBar)
                );
              },
            },
            watch: {
              active(e) {
                e.recommend || (this.lastActive = e);
              },
            },
            methods: {
              navigate(e) {
                this.$emit("navigate", e);
              },
              onRecommendClick() {
                var { recommend: e } = this;
                e && this.$emit("recommend-click");
              },
              onRecommendDisable() {
                var { lastActive: e } = this;
                e && this.$emit("change", e);
              },
            },
            ud: !0,
          },
          i = c("9ZMt");
        t.default = i.default.component(n);
      },
    }
  )
);
