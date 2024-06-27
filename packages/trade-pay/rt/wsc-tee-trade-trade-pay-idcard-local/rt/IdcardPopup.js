"use strict";
var r = require("~/r");
r(
  "2S8f",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      "2S8f": function (e, t, i) {
        i.r(t);
        var r = i("Fcif"),
          d = i("YeA1"),
          a = i("IWwY"),
          s = {
            props: {
              show: Boolean,
              idcardClass: { type: String, default: "" },
            },
            data: () => ({
              idcard: {
                name: "",
                number: "",
                backPhoto: "",
                frontPhoto: "",
                verifyFalse: !1,
              },
              order: { needIdCardPhoto: !1 },
              ignoreIdBinding: !1,
              hasHaitaoGoods: !1,
              shopName: "",
              showTips: !1,
              errorInfo: { name: "", number: "" },
              showIdCardList: !1,
              idCardList: [],
              tradeTag: {},
              themeColors: {},
            }),
            computed: {
              needIdCardPhoto() {
                return this.order.needIdCardPhoto;
              },
            },
            watch: {
              show() {
                this.show &&
                  ((this.idcard = Object(r.a)({}, this.originIdcard)),
                  (this.errorInfo = { name: "", number: "" }));
              },
            },
            created() {
              Object(d.b)(this, [
                "order",
                "ignoreIdBinding",
                "hasHaitaoGoods",
                "shopName",
                "tradeTag",
                "themeColors",
              ]),
                Object(d.b)(this, {
                  idcard: (e) => {
                    (this.idcard = e), (this.originIdcard = e);
                  },
                });
            },
            mounted() {
              this.fetchIdentityList(),
                this.$nextTick(() => {
                  this.idcard = Object(r.a)({}, this.idcard);
                });
            },
            methods: {
              fetchIdentityList() {
                !this.ignoreIdBinding &&
                  this.hasHaitaoGoods &&
                  Object(a.a)().then((e) => {
                    if (Array.isArray(e)) {
                      var t = e.map((e) => ({
                        name: e.identityName,
                        number: String(e.identityNumber),
                      }));
                      this.idCardList = t.slice(0, 2);
                    }
                  });
              },
              onClose() {
                this.$emit("close");
              },
              onSelectIdCard(e) {
                var { name: t, number: i } = e;
                (this.idcard = Object(r.a)({}, this.idcard, {
                  name: t,
                  number: i,
                })),
                  (this.showIdCardList = !1);
              },
            },
            ud: !0,
          },
          o = i("9ZMt");
        t.default = o.default.component(s);
      },
    }
  )
);
