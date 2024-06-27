"use strict";
var r = require("~/r");
r(
  "hU04",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      hU04: function (e, s, a) {
        a.r(s);
        var t = a("AGZf"),
          c = a("zs4L"),
          i = a("XJhc"),
          r = {
            methods: {
              getWxInvoiceTitle() {
                Object(c.a)("scope.invoiceTitle")
                  .then(() => {
                    wx.chooseInvoiceTitle({
                      success: (e) => {
                        var {
                          errMsg: s,
                          type: a,
                          taxNumber: c = "",
                          bankAccount: r = "",
                          bankName: n = "",
                          companyAddress: o = "",
                          telephone: u = "",
                          title: l = "",
                        } = e || {};
                        if (s === i.a.wxInvoiceStatus.ok) {
                          var p = "",
                            v = "";
                          switch (a) {
                            case 0:
                            case "0":
                              (p = i.a.raiseType.enterprise),
                                (v = "assign-invoice-enterprise");
                              break;
                            case 1:
                            case "1":
                              (p = i.a.raiseType.personal),
                                (v = "assign-invoice-personal");
                          }
                          var m = { userName: l || "" };
                          ("0" !== a && 0 !== a) ||
                            Object.assign(m, {
                              taxpayerId: c,
                              openingBankName: n,
                              bankAccount: r,
                              address: o,
                              phone: u,
                            }),
                            this.$emit("assign-invoice-common", p),
                            this.$emit(v, m);
                        } else Object(t.a)(e.errMsg || "调用微信抬头失败");
                      },
                      fail: (e) => {
                        e.errMsg !== i.a.wxInvoiceStatus.cancel &&
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
        s.default = n.default.component(r);
      },
    }
  )
);
