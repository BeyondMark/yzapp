"use strict";
var r = require("~/r");
r(
  "p/nQ",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "p/nQ": function (i, s, t) {
      t.r(s);
      var e = t("rqVN"),
        a = t("zMoS"),
        n = getApp();
      Object(e.b)({
        properties: {
          max: { type: Number, value: 3 },
          disabledDefaultAction: { type: Boolean, value: !1 },
          hasMobile: { type: Boolean, value: !1 },
          fetchMissionFinished: {
            type: Boolean,
            observer: "refreshMissionList",
          },
          bizDataMap: { type: Object, value: {} },
        },
        data: { missions: [], attached: !1 },
        methods: {
          fetchMissionList() {
            var i = this;
            n.request({ path: "/wscuser/scrm/api/ump/getMissionListV2.json" })
              .then(function (s) {
                void 0 === s && (s = []),
                  i.triggerEvent("after-fetch-missions"),
                  i.setYZData({ missions: i.formatMissionList(s) });
              })
              .catch((i) => {
                this.setYZData({ missions: [] }),
                  this.triggerEvent("after-fetch-missions"),
                  wx.showToast({ title: i, icon: "error" });
              });
          },
          handleClickAction(i) {
            var {
              detail: { index: s, mission: t },
            } = i;
            this.triggerEvent("action", { index: s, mission: t });
          },
          handleStateChange(i) {
            var {
                detail: { index: s, mission: t },
              } = i,
              { missions: e } = this.data;
            (e[s] = t), this.setYZData({ missions: e });
          },
          formatMissionList(i) {
            var s = [];
            i.length || this.triggerEvent("missionsNumber"),
              i.forEach((i) => {
                2 === i.index
                  ? s.unshift(...i.list)
                  : 1 === i.index || 999 === i.index
                  ? s.push(
                      ...Object(a.a)(i, "list", []).filter(
                        (i) => "IMPROVEID" !== i.name && "BINDPHONE" !== i.name
                      )
                    )
                  : 3 === i.index
                  ? s.push(
                      ...Object(a.a)(i, "list", []).filter(
                        (i) => "DAILYSIGN" === i.name
                      )
                    )
                  : 999 !== i.index && s.push(...i.list);
              });
            var t = s
              .filter((i) => 999 !== i.index && !i.finished)
              .slice(0, this.properties.max);
            return t.length || this.triggerEvent("missionsNumber"), t;
          },
          refreshMissionList(i) {
            !i && this.data.attached && this.fetchMissionList();
          },
        },
        attached() {
          this.setYZData({ attached: !0 }), this.fetchMissionList();
        },
      });
    },
  })
);
