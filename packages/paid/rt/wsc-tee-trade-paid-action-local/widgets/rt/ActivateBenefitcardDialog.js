"use strict";
var r = require("~/r");
r(
  "0ri0",
  Object.assign({}, require("~/v.js").modules, {
    "0ri0": function (e, t, i) {
      i.r(t);
      var a = i("KEq0"),
        d = i.n(a),
        n = i("9ZMt"),
        r = i("YeA1"),
        c = d()(
          "upload_files/2021/11/15/Fp2OuQMKpWewaa6upVwdmO-Bswcq.png",
          "middle"
        ),
        s = d()(
          "upload_files/2021/12/07/Fp1oGBTjo7fPZ4d6TD2quT_mvLFJ.png",
          "middle"
        ),
        l = d()(
          "upload_files/2021/11/15/FoRtIwFZwemPJqchrDKL-1sX40N8.png",
          "middle"
        ),
        o = d()("public_files/a1fb1079aa056c48631a190bc5247dd9.png", "middle"),
        f = {
          name: "activate-benefitcard-dialog",
          data: () => ({
            visible: !1,
            bgUrl: c,
            EMPTYICON: s,
            CLOSEICON: l,
            newAwardInfo: {},
            kdtId: 0,
          }),
          computed: {
            benefitcard() {
              var e;
              return null != (e = this.newAwardInfo.formatedMemberCard)
                ? e
                : {};
            },
            benefitList() {
              var { benefitList: e = [] } = this.benefitcard;
              return e.length > 4
                ? e
                    .slice(0, 3)
                    .concat({
                      showName: "更多" + e.length + "项权益",
                      benefitCount: e.length,
                      icon: o,
                    })
                : e;
            },
            name() {
              var e;
              return (
                "恭喜你，获得" +
                (null != (e = this.benefitcard.cardName) ? e : "")
              );
            },
            desc() {
              return this.benefitcard.needActivated
                ? this.benefitList.length
                  ? "尚未激活，激活可享以下权益"
                  : "尚未激活，激活即享专属权益"
                : this.benefitList.length
                ? "可享受以下权益"
                : "可享受专属权益";
            },
            btnText() {
              return this.benefitcard.needActivated ? "立即激活" : "立即查看";
            },
            gotoUrl() {
              var { kdtId: e } = this;
              return this.benefitcard.needActivated
                ? "/packages/benefit-card/active/index?alias=" +
                    this.benefitcard.cardAlias +
                    "&kdt_id=" +
                    e
                : "/packages/benefit-card/detail/index?alias=" +
                    this.benefitcard.cardAlias +
                    "&kdt_id=" +
                    e;
            },
          },
          created() {
            Object(r.b)(this, ["kdtId", "newAwardInfo"]),
              Object(r.d)(this, {
                showActivateBenefitcardDialog: () => {
                  (this.visible = !0),
                    this.ctx.logger.log({
                      et: "view",
                      ei: "view_rulecard_post",
                      en: "规则卡发卡曝光-弹窗",
                      pt: "paySuccess",
                      params: {
                        act: this.benefitcard.needActivated ? "1" : "0",
                      },
                    });
                },
              });
          },
          methods: {
            close() {
              (this.visible = !1),
                this.ctx.event.emit("closeAutoOpenPopup", { isRealClose: !0 });
            },
            activate() {
              this.ctx.logger.log({
                et: "click",
                ei: "click_rulecard_post",
                en: "规则卡发卡点击-弹窗",
                pt: "paySuccess",
                params: { act: this.benefitcard.needActivated ? "1" : "0" },
              }),
                n.default.navigate({ url: this.gotoUrl });
            },
          },
          ud: !0,
        };
      t.default = n.default.component(f);
    },
  })
);
