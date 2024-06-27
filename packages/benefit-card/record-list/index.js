"use strict";
var r = require("~/r");
r(
  "xJLi",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    xJLi: function (e, t, i) {
      i.r(t);
      var r = i("qJXH"),
        a = getApp();
      Object(r.b)({
        data: { recordList: "", cardNo: null, benefitId: null },
        onShow() {
          this.initData();
        },
        onLoad(e) {
          void 0 === e && (e = {});
          var t = e.benefit_id,
            i = e.card_no;
          this.setYZData({ cardNo: i, benefitId: t });
        },
        initData() {
          this.getBenefitRecordList();
        },
        getBenefitRecordList() {
          var { benefitId: e, cardNo: t } = this.data;
          a.request({
            path: "/wscuser/scrm/api/benefitcard/getBenefitRecordList.json",
            data: { card_no: t, benefit_id: e },
          })
            .then((e) => {
              this.setYZData({ recordList: e.items });
            })
            .catch((e) => {
              wx.stopPullDownRefresh(),
                wx.hideLoading(),
                wx.showToast({ title: e.msg, icon: "none", duration: 1e3 });
            });
        },
      });
    },
  })
);
