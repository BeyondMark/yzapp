"use strict";
var r = require("~/r");
r(
  "uXlB",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      uXlB: function (e, s, a) {
        a.r(s);
        var t = a("AGZf"),
          i = a("1RYO"),
          r = a("7m36"),
          c = {
            methods: {
              getWxInvoiceTitle() {
                Object(i.a)("scope.invoiceTitle")
                  .then(() => {
                    wx.chooseInvoiceTitle({
                      success: (e) => {
                        var {
                          errMsg: s,
                          type: a,
                          taxNumber: i = "",
                          bankAccount: c = "",
                          bankName: n = "",
                          companyAddress: o = "",
                          telephone: u = "",
                          title: l = "",
                        } = e || {};
                        if (s === r.a.wxInvoiceStatus.ok) {
                          var m = "",
                            p = "";
                          switch (a) {
                            case 0:
                            case "0":
                              (m = r.a.raiseType.enterprise),
                                (p = "assign-invoice-enterprise");
                              break;
                            case 1:
                            case "1":
                              (m = r.a.raiseType.personal),
                                (p = "assign-invoice-personal");
                          }
                          var v = { userName: l || "" };
                          ("0" !== a && 0 !== a) ||
                            Object.assign(v, {
                              taxpayerId: i,
                              openingBankName: n,
                              bankAccount: c,
                              address: o,
                              phone: u,
                            }),
                            this.$emit("assign-invoice-common", m),
                            this.$emit(p, v);
                        } else Object(t.a)(e.errMsg || "调用微信抬头失败");
                      },
                      fail: (e) => {
                        e.errMsg !== r.a.wxInvoiceStatus.cancel &&
                          Object(t.a)(e.errMsg || "调用微信抬头失败");
                      },
                    });
                  })
                  .catch(() => {
                    Object(t.a)("获取失败，请检查获取发票抬头的权限");
                  });
              },
            },
            ud: !0,
          },
          n = a("9ZMt");
        s.default = n.default.component(c);
      },
    }
  )
);
