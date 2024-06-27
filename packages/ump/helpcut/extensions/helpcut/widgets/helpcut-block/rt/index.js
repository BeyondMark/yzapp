"use strict";
var r = require("~/r");
r(
  "rqzJ",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    rqzJ: function (e, t, a) {
      a.r(t);
      var r = a("Fcif"),
        o = a("7/pW"),
        s = a("VmHG"),
        i = a("DXKY");
      Object(o.a)({
        attached() {
          Object(s.d)(this, [
            "sponsorFetched",
            "queryOptions",
            "recommendGoods",
            "skuInfo",
            "showSkuModal",
            "goodsDetail",
            "bargainDetail",
            "showFollowPopup",
            "followExtraData",
            "isNewHelpCut",
            "hasLogin",
            "needFollow",
            "isCreator",
            "hasAuthorized",
            "newActionExtra",
            "activityStatus",
            "helpcutInfo",
            "rules",
          ]),
            Object(s.b)(this, [
              "SET_SKU_CLOSE",
              "SET_SHOW_FOLLOW_POP",
              "HANDLE_BUY",
              "SET_HELPCUT_INFO",
              "SET_BEHAVIOR_READY",
            ]);
        },
        ready() {
          var { rules: e, helpcutInfo: t } = this.data;
          this.ctx.cloud
            .invoke("beforeFormatHelpcut", {
              rules: e,
              ruleImage:
                "https://img01.yzcdn.cn/upload_files/2021/10/08/Fr7W60cP3v5wPHBLyvC7R4vZ7ONn.png",
            })
            .then((e) => {
              var { rules: a, ruleImage: o } = e;
              this.SET_HELPCUT_INFO(
                Object(r.a)({}, t, { rules: a, ruleImage: o })
              );
            })
            .catch((e) => {});
        },
        methods: {
          handleBuy(e) {
            this.HANDLE_BUY(e);
          },
          handleSkuClose() {
            this.SET_SKU_CLOSE();
          },
          togglePopupShow() {
            this.SET_SHOW_FOLLOW_POP(!1);
          },
          behaviorComponentReady() {
            a.e("packages/async-main/chunk")
              .then(a.bind(null, "ORXP"))
              .then((e) => {
                var { default: t } = e;
                t.init(this),
                  this.SET_BEHAVIOR_READY(!0),
                  i.a.trigger("behavior:ready");
              });
          },
        },
      });
    },
  })
);
