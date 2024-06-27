"use strict";
var r = require("~/r");
r(
  "GMNh",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      GMNh: function (t, e, a) {
        a.r(e);
        var i = a("Fcif"),
          s = a("u8kV"),
          n = a("svh/"),
          r = a("otsx");
        Object(s.b)({
          mapData: Object(i.a)(
            {},
            Object(n.h)({
              status: (t) => t.activity.status,
              isOpenRank: (t) => t.activity.isOpenRank,
            })
          ),
          data: {
            rankPageNo: 1,
            rankPageSize: 10,
            rankingResult: [],
            lotteryPageNo: 1,
            lotteryPageSize: 10,
            lotteryResult: [],
          },
          ready() {
            this.data.isOpenRank && this.getRankingResult(),
              this.getLotteryResult();
          },
          methods: Object(i.a)({}, Object(n.e)(["GET_RESULT_LIST"]), {
            getRankingResult() {
              if (!this.rankFinished) {
                var { rankPageNo: t, rankPageSize: e } = this.data;
                this.GET_RESULT_LIST({ pageNo: t, pageSize: e, winType: 1 })
                  .then((e) => {
                    if (e) {
                      var { items: a, paginator: s } = e,
                        n = (a || []).map((t) =>
                          Object(i.a)({}, t, { avatar: t.avatar || r.d })
                        ),
                        o = this.data.rankingResult.concat(n);
                      (this.rankFinished = o.length >= s.totalCount),
                        this.setYZData({ rankPageNo: t + 1, rankingResult: o });
                    } else this.rankFinished = !0;
                  })
                  .catch((t) => {
                    (this.rankFinished = !0),
                      wx.showToast({
                        title: t.msg || "获取排行榜中奖结果失败",
                        icon: "none",
                      });
                  });
              }
            },
            getLotteryResult() {
              if (!this.lotteryFinished) {
                var { lotteryPageNo: t, lotteryPageSize: e } = this.data;
                this.GET_RESULT_LIST({ pageNo: t, pageSize: e, winType: 2 })
                  .then((e) => {
                    if (e) {
                      var { items: a, paginator: s } = e,
                        n = (a || []).map((t) =>
                          Object(i.a)({}, t, { avatar: t.avatar || r.d })
                        ),
                        o = this.data.lotteryResult.concat(n);
                      (this.lotteryFinished = o.length >= s.totalCount),
                        this.setYZData({
                          lotteryPageNo: t + 1,
                          lotteryResult: o,
                        });
                    } else this.lotteryFinished = !0;
                  })
                  .catch((t) => {
                    (this.lotteryFinished = !0),
                      wx.showToast({
                        title: t.msg || "获取抽奖中奖结果失败",
                        icon: "none",
                      });
                  });
              }
            },
          }),
        });
      },
    }
  )
);
