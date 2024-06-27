"use strict";
var r = require("~/r");
r(
  "biOv",
  Object.assign(
    {},
    require("~/packages/ump/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      biOv: function (e, t, i) {
        i.r(t);
        var s = i("7/pW"),
          a = i("yNXm"),
          r = i("YeA1"),
          n = getApp();
        Object(s.a)({
          data: {
            kdtId: 0,
            beforGuide: () => {},
            authTypeList: [],
            authorizeScene: "join_lottery",
          },
          attached() {
            Object(r.b)(this, [
              "alias",
              "followExtraData",
              "costPoints",
              "animationList",
              "unWinningAward",
              "activityStatus",
              "startDate",
              "pointsName",
              "tasks",
              "appTemplateType",
              "btnCode",
              "curIndex",
              "joinTimes",
              "redirectUrl",
            ]);
            var e = n.getKdtId();
            this.setYZData({
              statusEnum: a.u,
              showPointList: a.t,
              kdtId: e,
              beforGuide: this.handleClickBtn.bind(this),
            });
          },
          observers: {
            appTemplateType(e) {
              this.setYZData({
                authTypeList: e === a.l.COMMUNITY_DRAW ? ["mobile"] : [],
                authorizeScene: e === a.l.COMMUNITY_DRAW ? "" : "join_lottery",
              });
            },
          },
          methods: {
            handleLevel() {
              this.ctx.process.invoke("handleLevel");
            },
            afterGetGuide(e) {
              var {
                detail: { needGuide: t, guideType: i },
              } = e;
              if (t) {
                var s = this.getGuideDesc(i),
                  a = this.getGuideBtnText(i);
                this.setYZData({ guideDesc: s, guideBtnText: a });
              } else this.handleLevel();
            },
            handleClickBtn() {
              var e;
              return null == (e = this.ctx.process.invoke("handleClickBtn"))
                ? void 0
                : e[0];
            },
            getGuideDesc(e) {
              switch (e) {
                case a.j.FREE_LEVEL:
                  return "注册会员";
                case a.j.PAID_LEVEL:
                  return "成为会员";
                case a.j.FREE_CARD:
                  return "领取权益卡";
                case a.j.PAID_CARD:
                  return "购买权益卡";
                default:
                  return "";
              }
            },
            getGuideBtnText(e) {
              switch (e) {
                case a.j.FREE_LEVEL:
                  return "立即注册";
                case a.j.PAID_LEVEL:
                  return "成为会员";
                case a.j.FREE_CARD:
                  return "立即领卡";
                case a.j.PAID_CARD:
                  return "立即购卡";
                default:
                  return "";
              }
            },
          },
        });
      },
    }
  )
);
