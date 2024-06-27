"use strict";
var r = require("~/r");
r(
  "E7IH",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    E7IH: function (e, t, a) {
      a.r(t);
      var r = a("Fcif"),
        s = a("VmHG"),
        i = a("b4An"),
        o = {
          data() {
            return Object(r.a)(
              { homePath: "" },
              Object(s.d)(this, [
                "shopTitle",
                "editMode",
                "btnText",
                "isWholesaler",
                "isSwitchOpen",
                "isChainShop",
              ])
            );
          },
          mounted() {
            Object(s.b)(this, ["initData", "switchEditMode"]), this.initData();
          },
          methods: {
            switchShop() {
              this.ctx.process.invoke("navigateFromCart", {
                link: "/packages/shop-select/chain-store/shopselect/index?dbKey=location&redirectUrl=%2Fpackages%2Ftrade%2Fcart%2Findex",
              });
            },
            goHome() {
              this.ctx.process.invoke("navigateFromCart", {
                link: "/packages/home/dashboard/index",
                navigateType: "reLaunch",
                znbType: "",
              });
            },
            goPurchaseOrder() {
              var e = Object(i.a)("/wsctrade/wholesale/purchaseOrder", "h5");
              (e =
                "/pages/common/webview-page/index?src=" +
                encodeURIComponent(
                  Object(i.a)("/wsctrade/wholesale/purchaseOrder", "h5")
                )),
                this.ctx.process.invoke("navigateFromCart", { link: e });
            },
          },
        },
        c = a("9ZMt");
      t.default = c.default.component(o);
    },
  })
);
