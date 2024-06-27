var r = require("~/r");
r("bE4d", {
  bE4d: function (a, t) {
    var s = 1,
      e = 2,
      i = 3;
    Component({
      properties: {
        themeClass: String,
        mode: String,
        bought: Boolean,
        disabled: Boolean,
        price: Number,
        punch: { type: Object, observer: "initState" },
      },
      data: { statusList: [], url: "", tagText: "", slots: { icon: !0 } },
      methods: {
        initState(a) {
          var t = "/packages/new-punch/introduction/index?alias=" + a.alias;
          (this.data.bought || a.bought) &&
            (t =
              "/packages/new-punch/task/index?alias=" +
              a.alias +
              "&startDate=" +
              a.startAt +
              "&proceedStatus=" +
              a.proceedStatus);
          var n = [],
            o = "",
            u = "",
            r = "";
          switch (a.proceedStatus) {
            case s:
              (o = "未开始"),
                (u = "共计" + (a.totalDays || 0) + "天"),
                (r = "暂未开始打卡");
              break;
            case e:
              (o = "进行中"),
                (u = "已进行" + (a.proceedingDays || 0) + "天"),
                (r = "你已打卡" + (a.customerGciTimes || 0) + "次");
              break;
            case i:
              (o = "已结束"),
                (u = "共计" + (a.totalDays || 0) + "天"),
                (r = "你已打卡" + (a.customerGciTimes || 0) + "次");
          }
          0 === a.status && ((o = "已删除"), (t = "")),
            this.data.bought || a.bought || (r = ""),
            n.push(u),
            r && n.push(r),
            this.setData({
              tagText: o,
              statusList: n,
              url: this.data.disabled ? "" : t,
            });
        },
        onMyPunchTap() {
          wx.navigateTo({
            url:
              this.data.bought || this.data.punch.bought
                ? "/packages/new-punch/rank/index?alias=" +
                  this.data.punch.alias
                : "/packages/new-punch/introduction/index?alias=" +
                  this.data.punch.alias,
          });
        },
        onIntroTap() {
          wx.navigateTo({
            url:
              "/packages/new-punch/introduction/index?alias=" +
              this.data.punch.alias,
          });
        },
      },
    });
  },
});
