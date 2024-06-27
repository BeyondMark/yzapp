"use strict";
var r = require("~/r");
r(
  "+gBI",
  Object.assign({}, require("~/v.js").modules, {
    "+gBI": function (t, o, a) {
      a.r(o);
      var e = a("KEq0"),
        r = a.n(e),
        i = {
          props: {
            opt: Object,
            goodsHaitaoTax: String,
            atmosphereDataTag: Array,
            isShowShareIcon: { type: Boolean, default: !0 },
          },
          data: () => ({
            goodsRetailTag:
              "https://img01.yzcdn.cn/public_files/2019/08/19/a4db0d30f3814d2d2117c91e5a6e2958.png",
          }),
          computed: {
            shareIcon() {
              return this.opt.shareIcon;
            },
            goodsTag() {
              return this.opt.isHaitao
                ? r()(
                    "public_files/51d3a73eafb988565c4ad04c76b99d15.png",
                    "small"
                  )
                : "";
            },
            haitaoCountry() {
              var { haitao: t = {} } = this.opt.goodsActivity;
              return (t && t.sourceCountryName) || "";
            },
            haitaoFlag() {
              return this.haitaoCode
                ? "//b.yzcdn.cn/cross-border/flags/" + this.haitaoCode + ".png"
                : "";
            },
            haitaoCode() {
              var { haitao: t = {} } = this.opt.goodsActivity;
              return t && t.sourceCountryIsoCode
                ? t.sourceCountryIsoCode.toLowerCase()
                : "";
            },
            isShowBrandTitle() {
              var { brandInfoModel: t } = this.opt;
              return t && t.authorizationMark;
            },
            tagStyle() {
              return this.goodsTag
                ? "width: " + (this.opt.isHaitao ? 30 : 38) + "px;"
                : "";
            },
          },
          methods: {
            handleShareClick() {
              this.$emit("share");
            },
          },
          ud: !0,
        },
        s = a("9ZMt");
      o.default = s.default.component(i);
    },
  })
);
