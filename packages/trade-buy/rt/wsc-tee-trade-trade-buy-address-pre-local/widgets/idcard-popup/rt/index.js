"use strict";
var r = require("~/r");
r(
  "qp5b",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      qp5b: function (e, r, i) {
        i.r(r);
        var t = i("Fcif"),
          d = i("AGZf"),
          a = i("z9IR"),
          s = i("YeA1"),
          o = i("beZU"),
          n = i("L6tU"),
          h = i("a1Oz"),
          c = {
            props: {
              show: Boolean,
              idcardClass: { type: String, default: "" },
            },
            data() {
              return {
                kdtId: null,
                idcard: {
                  name: "",
                  number: "",
                  backPhoto: "",
                  frontPhoto: "",
                  verifyFalse: !1,
                },
                order: { needIdCardPhoto: !1 },
                ignoreIdBinding: !1,
                orderCreated: !1,
                receiveByGroupHeader: !1,
                currentAddress: {},
                hasHaitaoGoods: !1,
                shop: { shopName: "" },
                showTips: !1,
                errorInfo: { name: "", number: "" },
                showIdCardList: !1,
                idCardList: [],
                tradeTag: {},
                h5CompressUpload: this.ctx.lambdas.h5CompressUpload,
                themeColors: {},
                orcValid: !1,
                bodyStyle:
                  "padding: var(--theme-page-card-margin-top, 12px) var(--theme-page-card-margin-right, 12px) 80px var(--theme-page-card-margin-left, 12px)",
              };
            },
            computed: {
              idcardDisabled() {
                return (
                  this.hasHaitaoGoods &&
                  this.idcard.binding &&
                  !this.ignoreIdBinding
                );
              },
              needIdCardPhoto() {
                return this.order.needIdCardPhoto;
              },
            },
            watch: {
              show() {
                this.show &&
                  ((this.idcard = Object(t.a)({}, this.originIdcard)),
                  (this.errorInfo = { name: "", number: "" }));
              },
            },
            created() {
              Object(s.b)(this, [
                "kdtId",
                "order",
                "ignoreIdBinding",
                "receiveByGroupHeader",
                "currentAddress",
                "hasHaitaoGoods",
                "shop",
                "tradeTag",
                "themeColors",
                "orderCreated",
              ]),
                Object(s.b)(this, {
                  idcard: (e) => {
                    (this.idcard = e), (this.originIdcard = e);
                  },
                }),
                Object(o.b)().then((e) => {
                  this.orcValid = e;
                });
            },
            mounted() {
              this.fetchIdentityList(),
                this.$nextTick(() => {
                  this.idcard = Object(t.a)({}, this.idcard);
                });
            },
            methods: {
              handleOcrIdCardInfoChange(e) {
                this.ocrIdCardInfo = e;
              },
              fetchIdentityList() {
                !this.ignoreIdBinding &&
                  this.hasHaitaoGoods &&
                  Object(o.a)().then((e) => {
                    if (Array.isArray(e)) {
                      var r = e.map((e) => ({
                        name: e.identityName,
                        number: String(e.identityNumber),
                      }));
                      this.idCardList = r.slice(0, 2);
                    }
                  });
              },
              onInputName(e) {
                var { value: r } = e;
                if (((this.idcard.name = r), "" !== r)) {
                  var i = this.idCardList.every(
                    (e) => -1 === e.name.indexOf(r)
                  );
                  this.showIdCardList = !i;
                } else this.showIdCardList = this.idCardList.length > 0;
              },
              onInputIdNumber(e) {
                this.idcard.number = e.value;
              },
              onInputFocus() {
                this.showIdCardList = this.idCardList.length > 0;
              },
              onInputBlur() {
                setTimeout(() => {
                  this.showIdCardList = !1;
                }, 50);
              },
              onClearName() {
                this.idcard.name = "";
              },
              onClearNumber() {
                this.idcard.number = "";
              },
              onBackPhotoChange(e) {
                this.idcard.backPhoto = e;
              },
              onFrontPhotoChange(e) {
                this.idcard.frontPhoto = e;
              },
              onShowTip() {
                this.showTips = !0;
              },
              onCloseTip() {
                this.showTips = !1;
              },
              onClose() {
                this.$emit("close");
              },
              onSelectIdCard(e) {
                var { name: r, number: i } = e;
                (this.idcard = Object(t.a)({}, this.idcard, {
                  name: r,
                  number: i,
                })),
                  (this.showIdCardList = !1),
                  (this.errorInfo = { name: "", number: "" });
              },
              showIdcardError(e) {
                e.message && Object(d.a)(e.message),
                  (this.errorInfo = Object(t.a)({ name: "", number: "" }, e));
              },
              submit() {
                var { order: e, ignoreIdBinding: r, idcard: i } = this,
                  d = [];
                if (this.order.needRealNameAuth) {
                  var a = o.e
                    .call(this, { order: e, ignoreIdBinding: r, idcard: i })
                    .then((e) => {
                      var { verifyPassed: r } = e || {};
                      if (
                        r &&
                        !this.receiveByGroupHeader &&
                        !this.hasHaitaoGoods
                      ) {
                        var d = Object(t.a)({}, this.currentAddress, {
                          userName: i.name,
                        });
                        return Object(h.a)(d).then(() => {
                          this.ctx.process.invoke("updateAddress", d);
                        });
                      }
                    });
                  d.push(a);
                }
                Promise.all(d).then(() => {
                  this.ctx.process.invoke(
                    "setIdcard",
                    Object(t.a)({}, i, {
                      binding: this.hasHaitaoGoods && !this.ignoreIdBinding,
                    })
                  ),
                    this.onClose();
                });
              },
              onSave() {
                var { order: e, idcard: r, tradeTag: i } = this;
                if (!this.idcardDisabled || this.needIdCardPhoto) {
                  var t = Object(n.a)({ order: e, idcard: r, tradeTag: i });
                  if (t) this.showIdcardError(t);
                  else {
                    if (
                      (this.showIdcardError({}),
                      this.ocrIdCardInfo &&
                        (this.ocrIdCardInfo.idCardName !== r.name ||
                          this.ocrIdCardInfo.idCardNo !== r.number))
                    )
                      return Object(d.a)("填写身份证信息与上传照片不一致");
                    this.hasHaitaoGoods && !this.ignoreIdBinding
                      ? a.a
                          .confirm({
                            ref: this.$refs.idcardDialog,
                            title: "提示",
                            message:
                              "根据海关最新要求，每个用户仅能绑定一个身份证号购买跨境商品，且绑定后不可换绑，请谨慎填写。",
                            confirmButtonText: "确认绑定",
                          })
                          .then(() => {
                            this.submit();
                          })
                      : this.submit();
                  }
                } else this.onClose();
              },
            },
          },
          m = i("9ZMt");
        r.default = m.default.component(c);
      },
    }
  )
);
