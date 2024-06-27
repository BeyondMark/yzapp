"use strict";
var r = require("~/r");
r(
  "Ofz/",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "Ofz/": function (e, t, i) {
      i.r(t);
      var s = i("Fcif"),
        a = i("rqVN"),
        r = i("dWkE"),
        o = i("2wjL"),
        n = i("RY8z"),
        d = 0,
        p = 30,
        h = getApp(),
        l = h.getKdtId();
      Object(a.b)({
        properties: {
          mission: { type: Object },
          hasBindPhone: { type: Boolean },
          index: { type: Number },
          disabledDefaultAction: { type: Boolean },
          bizDataMap: { type: Object, value: {} },
        },
        data: { showMore: !1, isOpen: !1 },
        methods: {
          handleClickDoMission() {
            if (this.properties.disabledDefaultAction)
              this.triggerEvent("missionClick", {
                index: this.index,
                mission: e,
              });
            else {
              var e = this.properties.mission;
              if (!e.finished && e.state === d)
                switch (e.name) {
                  case "BINDPHONE":
                    break;
                  case "IMPROVEID":
                    this.handleClickToImproveid();
                    break;
                  case "BOOKMARk":
                    this.handleClickToCollectGift();
                    break;
                  default:
                    this.navigateWithUrlParams(e.urlParams);
                }
            }
          },
          bindGetPhoneNumber() {
            var { reward: e } = this.properties.mission;
            this.properties.hasBindPhone
              ? this.updateMissionState("BINDPHONE").then(() => {
                  e &&
                    wx.showToast({
                      title: "已完成手机号绑定任务，成长值+" + e,
                      icon: "none",
                      duration: 2e3,
                    }),
                    this.triggerEvent("missionStateChange", {
                      index: this.properties.index,
                      mission: Object(s.a)({}, this.properties.mission, {
                        state: p,
                        finished: !0,
                      }),
                    });
                })
              : this.triggerEvent("bindMobile", !0);
          },
          handleClickToImproveid() {
            var { state: e, reward: t } = this.properties.mission,
              i =
                "https://h5.youzan.com/wscuser/membercenter/setting?is-improveid=true&state=" +
                e +
                "&reward=" +
                t +
                "&kdt_id=" +
                l +
                "&isWeapp=1";
            Object(r.a)(o.a.add(i, this.properties.bizDataMap || {}));
          },
          handleClickToCollectGift() {
            var e = this,
              { reward: t } = this.properties.mission;
            h.request({ path: "/wscuser/scrm/api/ump/getCollectGift" })
              .then(function (i) {
                void 0 === i && (i = {});
                var { auditStatus: s } = i;
                1 === s
                  ? t &&
                    e.updateMissionState("BOOKMARK").then(() => {
                      wx.showToast({
                        title: "已完成收藏小程序任务，成长值+" + t,
                        duration: 2e3,
                      });
                    })
                  : e.navigateWithUrlParams(e.properties.mission.urlParams);
              })
              .catch((e) => {
                wx.showToast({
                  title: e || "网络错误",
                  icon: "error",
                  duration: 1e3,
                });
              });
          },
          navigateWithUrlParams(e) {
            var { url: t, weappUrl: i, type: s } = e;
            i
              ? s && n.a[s]
                ? n.a[s]({ url: i })
                : n.a.navigate({ url: i })
              : Object(r.a)(o.a.add(t, { kdt_id: l }));
          },
          updateMissionState(e) {
            var t = { missionTplType: e, state: p };
            return h.request({
              path: "/wscuser/scrm/api/ump/update",
              method: "POST",
              data: t,
            });
          },
        },
      });
    },
  })
);
