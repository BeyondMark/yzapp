"use strict";
var r = require("~/r");
r(
  "yiFI",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      yiFI: function (t, r, e) {
        e.r(r);
        var s = e("Fcif"),
          i = e("YeA1"),
          u = e("z9IR"),
          a = e("9ZMt"),
          g = e("XYea"),
          o = {
            name: "drug-block",
            data: () => ({
              goods: { list: [] },
              state: {},
              drugState: {},
              drugdata: {},
              themeColors: {},
              showDrug: !0,
            }),
            computed: {
              general() {
                var t, r;
                return this.themeColors
                  ? {
                      color:
                        null == (t = this.themeColors) ? void 0 : t.general,
                      background: Object(g.a)(
                        null == (r = this.themeColors) ? void 0 : r.general,
                        0.1
                      ),
                    }
                  : "";
              },
              shop() {
                return this.state.shop || {};
              },
              rxNo() {
                var t, r;
                return (
                  (null == (t = this.drugState) || null == (r = t.drugMessage)
                    ? void 0
                    : r.rxNo) || ""
                );
              },
              hasPrescriptionDrugGood() {
                return this.drugState.isPrescriptionDrugGoods;
              },
              hasRxNo() {
                return !!this.rxNo;
              },
              drugMessage() {
                var t;
                return (
                  (null == (t = this.drugState) ? void 0 : t.drugMessage) || {}
                );
              },
              currentUser() {
                return this.drugState.currentUser;
              },
              drugUser() {
                return this.drugState.drugUser;
              },
              drugHistroy() {
                return this.drugState.drugHistroy;
              },
              checkMedical() {
                var { tagCheckList: t = [] } = this.drugMessage,
                  r = t.map((t) => t.name).join("、");
                return r.length > 20 ? r.substring(0, 20) + "..." : r;
              },
              info() {
                var t,
                  r,
                  e = null == (t = this.currentUser) ? void 0 : t.phoneNum,
                  s = e ? e.substring(0, 3) + "****" + e.substring(7) : "";
                return {
                  title:
                    (null == (r = this.currentUser) ? void 0 : r.patientName) +
                    " " +
                    s,
                };
              },
            },
            created() {
              Object(i.b)(this, [
                "drugState",
                "goods",
                "orderCreated",
                "themeColors",
              ]),
                Object(i.b)(this, {
                  state: (t) => {
                    (this.drugState.drugMessage = t.drugMessage),
                      (this.drugState.currentUser = t.currentUser),
                      (this.drugState.drugUser = t.drugUser),
                      (this.drugState.drugHistroy = t.drugHistroy),
                      (this.drugState.isPrescriptionDrugGoods =
                        t.isPrescriptionDrugGoods),
                      this.$set(
                        this,
                        "drugState",
                        Object(s.a)({}, this.drugState)
                      );
                  },
                }),
                Object(i.d)(this, {
                  onDrugPageShow: () => {
                    this.$set(
                      this,
                      "state",
                      JSON.parse(JSON.stringify(this.state))
                    );
                  },
                }),
                this.ctx.lambdas.onEvent("msg-save", (t) => {
                  (this.drugState.drugMessage = t.drugMessage),
                    (this.drugState.currentUser = t.currentUser),
                    (this.drugState.drugUser = t.drugUser),
                    (this.drugState.drugHistroy = t.drugHistroy),
                    this.$set(
                      this,
                      "drugState",
                      Object(s.a)({}, this.drugState)
                    ),
                    (this.state.drugMessage = t.drugMessage),
                    (this.state.currentUser = t.currentUser),
                    (this.state.drugUser = t.drugUser),
                    (this.state.drugHistroy = t.drugHistroy),
                    this.$set(this, "state", Object(s.a)({}, this.state)),
                    (this.ctx.data.drugState = this.drugState),
                    (this.ctx.data.state = this.state);
                }),
                this.ctx.process.define(
                  "showYiYaoBuyDialog",
                  this.showYiYaoBuyDialog
                ),
                this.ctx.process.define(
                  "setShowDrugUser",
                  this.setShowDrugUser
                );
            },
            destroyed() {
              var t, r;
              null == (t = (r = this.ctx.lambdas).offEvent) ||
                t.call(r, "msg-save");
            },
            methods: {
              setShowDrugUser(t) {
                this.showDrug = t;
              },
              showYiYaoBuyDialog() {
                return this.showDrug &&
                  this.state.isPrescriptionDrugGoods &&
                  !this.rxNo
                  ? (u.a
                      .confirm({
                        ref: this.$refs["van-dialog-drug"],
                        message: "该药物需凭处方预约，请上传处方或填写用药信息",
                        confirmButtonText: "去填写",
                        cancelButtonText: "取消",
                      })
                      .then(() => {
                        this.goMsg();
                      }),
                    Promise.reject(
                      "该药物需凭处方预约，请上传处方或填写用药信息"
                    ))
                  : Promise.resolve("不是医药店铺 - 放行");
              },
              gotoDrugMsg() {
                if (this.orderCreated) {
                  var t = this.shop.kdtId;
                  this.router.replace(
                    "/pay/wsctrade_buy/drug-user?rxNo=" +
                      this.rxNo +
                      "&kdtId=" +
                      t
                  );
                }
                this.goMsg(),
                  this.ctx.logger &&
                    this.ctx.logger.log({
                      et: "click",
                      ei: "click_MedicationInformation",
                      en: "点击“填用药信息”",
                      pt: "trade",
                    });
              },
              goMsg() {
                var t = this.ctx.lambdas.setDb({
                  themeColors: this.themeColors,
                  drugMessage: this.drugMessage,
                  currentUser: this.currentUser,
                  drugUser: this.drugUser,
                  drugHistroy: this.drugHistroy,
                  goods: this.goods,
                });
                a.default.navigate({
                  type: "navigateTo",
                  url:
                    "/packages/trade-buy-subpage/drug-message/index?dbid=" + t,
                });
              },
            },
            ud: !0,
          };
        r.default = a.default.component(o);
      },
    }
  )
);
