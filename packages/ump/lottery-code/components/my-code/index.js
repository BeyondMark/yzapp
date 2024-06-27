"use strict";
var r = require("~/r");
r(
  "0peL",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "0peL": function (t, e, a) {
        a.r(e);
        var i = a("Fcif"),
          s = a("u8kV"),
          o = a("svh/"),
          c = a("DXqK"),
          r = a("otsx");
        Object(s.b)({
          mapData: Object(i.a)(
            {},
            Object(o.f)(["myCodeDesc", "isWin"]),
            Object(o.h)({
              isOpenRank: (t) => t.activity.isOpenRank,
              status: (t) => t.activity.status,
              avatar: (t) => t.activity.avatar,
              nickName: (t) => t.activity.nickName,
              ticketNums: (t) => t.activity.ticketNums,
              topNum: (t) => t.activity.topNum,
              userDrawResultDTO: (t) => t.activity.userDrawResultDTO || {},
            })
          ),
          data: {
            showBack: !1,
            showLuckCode: !1,
            showBoard: !0,
            icon: "",
            rankPageNo: 1,
            rankPageSize: 10,
            leaderBoard: [],
            codePageNo: 1,
            codePageSize: 10,
            codeList: [],
          },
          ready() {
            this.data.isOpenRank && this.getRankingList(), this.getCodeList();
          },
          methods: Object(i.a)(
            {},
            Object(o.g)(["TOGGLE_POP_VISIBLE"]),
            Object(o.e)(["GET_USER_TICKETS", "GET_RANKING_LIST"]),
            {
              toggleLuckyCode() {
                this.data.isWin
                  ? this.TOGGLE_POP_VISIBLE({ name: "showPrizePop", value: !0 })
                  : this.setYZData({
                      showBoard: !0,
                      showLuckCode: !this.data.showLuckCode,
                    });
              },
              toggleContent() {
                this.setYZData({ showBoard: !this.data.showBoard });
              },
              getRankingList() {
                if (!this.rankFinished) {
                  var { rankPageNo: t, rankPageSize: e } = this.data;
                  this.GET_RANKING_LIST({ pageNo: t, pageSize: e })
                    .then((e) => {
                      if (e) {
                        var { items: a, paginator: s } = e,
                          o = (a || []).map((t) =>
                            Object(i.a)({}, t, { avatar: t.avatar || r.d })
                          ),
                          c = this.data.leaderBoard.concat(o);
                        (this.rankFinished = c.length >= s.totalCount),
                          this.setYZData({ rankPageNo: t + 1, leaderBoard: c });
                      } else this.rankFinished = !0;
                    })
                    .catch((t) => {
                      (this.rankFinished = !0),
                        wx.showToast({
                          title: t.msg || "获取排行榜失败",
                          icon: "none",
                        });
                    });
                }
              },
              getCodeList() {
                if (!this.codeFinished) {
                  var { codePageNo: t, codePageSize: e } = this.data;
                  this.GET_USER_TICKETS({ pageNo: t, pageSize: e })
                    .then((a) => {
                      if (a) {
                        var s = (a || []).map((t) => {
                            var {
                                getTime: e,
                                avatar: a,
                                source: s,
                                helpUserNickName: o,
                                helpUserAvatar: h,
                              } = t,
                              d = Object(c.d)(e, "YYYY-MM-DD HH:mm:ss"),
                              n = (r.c[s] && r.c[s](o)) || {},
                              g = n.img || h || a || r.d,
                              u = n.text || "";
                            return Object(i.a)({}, t, {
                              timeStr: d,
                              imgSrc: g,
                              title: u,
                            });
                          }),
                          o = this.data.codeList.concat(s);
                        (this.codeFinished = a.length < e),
                          this.setYZData({ codePageNo: t + 1, codeList: o });
                      } else this.codeFinished = !0;
                    })
                    .catch((t) => {
                      (this.codeFinished = !0),
                        wx.showToast({
                          title: t.msg || "获取码列表失败",
                          icon: "none",
                        });
                    });
                }
              },
            }
          ),
        });
      },
    }
  )
);
