"use strict";
var r = require("~/r");
r(
  "uCSp",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    uCSp: function (e, t, s) {
      s.r(t);
      var r = s("noo5"),
        i = s("ONqW"),
        o = s("YeA1"),
        a = {
          data: () => ({ physicalStores: {}, themeCSS: "", pageStyleCSS: "" }),
          computed: {
            themeVars() {
              return this.themeCSS + this.pageStyleCSS;
            },
            storeInfo() {
              var e;
              return (null == (e = this.physicalStores)
                ? void 0
                : e.shopCount) > 0
                ? (Object(i.a)().log({
                    et: "view",
                    ei: "view_physical_store",
                    en: "门店信息曝光",
                  }),
                  this.physicalStores.physicalStoreBasicInfoModels[0])
                : null;
            },
            distance() {
              if (this.storeInfo) {
                var { distance: e } = this.storeInfo;
                return e ? Object(r.formatDistance)(1e3 * +e) : "";
              }
              return "";
            },
          },
          created() {
            Object(o.b)(this, ["physicalStores", "pageStyleCSS", "themeCSS"]);
          },
          methods: {
            goStoreList() {
              Object(i.a)().log({
                et: "click",
                ei: "click_physical_store",
                en: "点击门店信息",
              }),
                this.ctx.dmc.navigate("PhysicalStore");
            },
          },
          ud: !0,
        },
        c = s("9ZMt");
      t.default = c.default.component(a);
    },
  })
);
