"use strict";
var r = require("~/r");
r(
  "Ls9c",
  Object.assign({}, require("~/v.js").modules, {
    Ls9c: function (e, t, s) {
      s.r(t);
      var c = s("YeA1"),
        l = {
          data: () => ({
            userTel: "",
            showSelfFetch: !1,
            selfFetchContact: "",
            selfFetchAddressDetail: "",
            selfFetchTime: "",
          }),
          created() {
            Object(c.b)(this, [
              "userTel",
              "showSelfFetch",
              "selfFetchContact",
              "selfFetchAddressDetail",
              "selfFetchTime",
            ]);
          },
          methods: {
            handleContactSelfFetchService() {
              var { userTel: e } = this;
              wx.showModal({
                title: e,
                confirmText: "呼叫",
                success: (t) => {
                  t.confirm && wx.makePhoneCall({ phoneNumber: e });
                },
              });
            },
          },
          ud: !0,
        },
        r = s("9ZMt");
      t.default = r.default.component(l);
    },
  })
);
