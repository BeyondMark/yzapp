"use strict";
var r = require("~/r");
r(
  "xvsJ",
  Object.assign({}, require("~/v.js").modules, {
    xvsJ: function (e, s, t) {
      t.r(s);
      var i = t("Fcif"),
        h = t("VmHG"),
        r = t("YeA1"),
        d = {
          props: { item: Object },
          data() {
            return Object(i.a)(
              { value: {}, themeTag: {}, selfFetch: {} },
              Object(h.d)(this, [
                "isAddressFixed",
                "selectAddress",
                "isOnlySuportSelfFetch",
                "isFirstOpen",
                "isShowAddress",
                "isPhysical",
                "isVirtualTicket",
              ])
            );
          },
          computed: {
            selfFetchShop() {
              var { shop: e } = this.selfFetch;
              return e || {};
            },
            isShowAddressCell() {
              return !this.isOnlySuportSelfFetch && this.isShowAddress;
            },
            isShowSelfFetch() {
              return (
                (this.selfFetch.isAllow && !this.isShowAddress) ||
                (this.isFirstOpen && this.isOnlySuportSelfFetch)
              );
            },
          },
          created() {
            Object(r.b)(this, ["selfFetch", "themeTag"]),
              Object(h.b)(this, ["handleChangeAddressListPopupShow"]);
          },
          methods: {
            onAddressCellClick() {
              this.handleChangeAddressListPopupShow(!0);
            },
          },
        },
        l = t("9ZMt");
      s.default = l.default.component(d);
    },
  })
);
