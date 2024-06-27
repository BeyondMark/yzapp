"use strict";
var r = require("~/r");
r(
  "OhdM",
  Object.assign({}, require("~/v.js").modules, {
    OhdM: function (t, e, a) {
      a.r(e);
      var i = a("9ZMt"),
        r = a("ONqW"),
        o = a("9mFz"),
        s = {
          props: {
            opt: { type: Object, default: () => ({}) },
            cloudConfig: {
              type: Object,
              default: () => ({ isShowShareIcon: !0 }),
            },
          },
          data: () => ({ themeTag: {}, atmosphereDataTag: [] }),
          computed: {
            goodsHaitaoTax() {
              var t = this.opt.goodsActivity.haitao || null;
              if (t) {
                var { tariffAmount: e, tariffRule: a } = t;
                if (1 === a) return "";
                if (e) return "进口税 预计 " + e;
              }
              return "";
            },
          },
          watch: {
            "opt.title": function () {
              this.setPageTitle();
            },
          },
          created() {
            Object(o.b)(this, ["themeTag", "atmosphereDataTag"]);
          },
          methods: {
            handleShareClick() {
              this.$emit("share"),
                Object(r.a)().log({
                  et: "click",
                  ei: "share_goods",
                  en: "分享商品",
                  params: { alias: this.opt.alias, share_method: "wx_share" },
                });
            },
            setPageTitle() {
              var { title: t } = this.opt;
              i.default.$native.setNavigationBarTitle({ title: t });
            },
          },
          ud: !0,
        };
      e.default = i.default.component(s);
    },
  })
);
