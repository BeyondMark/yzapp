"use strict";
var r = require("~/r");
r(
  "HWWm",
  Object.assign({}, require("~/v.js").modules, {
    HWWm: function (t, e, o) {
      o.r(e);
      var r = o("9ZMt"),
        a = o("YeA1"),
        s = {
          data: () => ({
            errorInfo: { userName: !1, telephone: !1 },
            contact: {},
            showContactList: !1,
            version: "",
            themeCSS: "",
          }),
          computed: {
            userName() {
              var t;
              return null == (t = this.contact) ? void 0 : t.userName;
            },
            telephone() {
              var t;
              return null == (t = this.contact) ? void 0 : t.telephone;
            },
            cellValue() {
              var { userName: t, telephone: e } = this;
              return t || e ? "更换联系人" : "选择联系人";
            },
          },
          created() {
            Object(a.b)(this, ["contact", "themeCSS"]),
              Object(a.d)(this, {
                "trade-buy-core:validate-effect": (t) => {
                  var { type: e, errorInfo: o } = t;
                  if ("validateContact:validateError" === e) {
                    this.errorInfo = o;
                    var { contact: r } = this.ctx.data;
                    this.onListEdit(r);
                  } else
                    "validateContact:saveFinish" === e &&
                      (this.errorInfo = { userName: !1, telephone: !1 });
                },
              });
          },
          methods: {
            setUserName(t) {
              var { value: e } = t;
              this.ctx.process.invoke("setNewContact", { userName: e });
            },
            setTelephone(t) {
              var { value: e } = t;
              this.ctx.process.invoke("setNewContact", { telephone: e });
            },
            onFocus() {
              this.errorInfo = { userName: !1, telephone: !1 };
            },
            onContactListClose() {
              this.showContactList = !1;
            },
            onChange(t) {
              (this.errorInfo = { userName: !1, telephone: !1 }),
                (this.showContactList = !1),
                this.ctx.process.invoke("selectContact", t.id),
                this.ctx.logger &&
                  this.ctx.logger.log({
                    et: "custom",
                    ei: "trade_buy_set_contact",
                    en: "切换联系人",
                    pt: "trade",
                    params: { desc: JSON.stringify(t) },
                  });
            },
            onClick() {
              this.showContactList = !0;
            },
            onListEdit(t) {
              void 0 === t && (t = {});
              var e = JSON.stringify(t);
              r.default.navigate({
                url:
                  "packages/trade-buy-subpage/order/contact/index?contactStr=" +
                  e +
                  "&textRule=normal",
                type: "navigateTo",
              }),
                (this.showContactList = !1);
            },
          },
          ud: !0,
        };
      e.default = r.default.component(s);
    },
  })
);
