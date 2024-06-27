"use strict";
var r = require("~/r");
r(
  "h5v/",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "h5v/": function (e, t, i) {
        i.r(t);
        var n = i("rqVN"),
          a = i("Dcfi"),
          s = i("0Ckh"),
          r = i("qHGj"),
          o = i("Eagg"),
          d = getApp();
        Object(n.b)({
          data: { isLive: !1, finderUserName: "", headUrl: "" },
          properties: { info: { type: Object, value: {} } },
          methods: {
            linkToLive() {
              d.logger &&
                d.logger.log({
                  et: "click",
                  ei: "floating_nav_wechat_video_click",
                  en: "视频号直播悬浮窗点击",
                  params: {
                    component: "floating_nav_wechat_video",
                    nickname: this.nickname,
                  },
                }),
                this.feedId && this.nonceId
                  ? wx.openChannelsLive({
                      feedId: this.feedId,
                      nonceId: this.nonceId,
                      finderUserName: this.data.finderUserName,
                    })
                  : wx.showToast({ title: "视频号直播id为空", icon: "none" });
            },
            updateLiveStatus() {
              var { finderUserName: e } = this.data;
              e &&
                wx.getChannelsLiveInfo &&
                wx.getChannelsLiveInfo({
                  finderUserName: e,
                  success: (e) => {
                    var {
                      status: t,
                      feedId: i,
                      nonceId: n,
                      nickname: a,
                      headUrl: s,
                    } = e;
                    2 == +t
                      ? (this.setData({ isLive: !0, headUrl: s }),
                        (this.feedId = i),
                        (this.nonceId = n),
                        (this.nickname = a),
                        this.triggerEvent("update-live-status", !0),
                        d.logger &&
                          d.logger.log({
                            et: "view",
                            ei: "floating_nav_wechat_video_view",
                            en: "视频号直播悬浮窗曝光",
                            params: {
                              component: "floating_nav_wechat_video",
                              nickname: a,
                            },
                          }))
                      : this.setData({ isLive: !1 });
                  },
                  fail: (t) => {
                    d.logger &&
                      d.logger.log({
                        et: "view",
                        ei: "floating_nav_wechat_video_view_fail",
                        en: "视频号直播悬浮窗曝光失败",
                        params: {
                          component: "floating_nav_wechat_video",
                          errCode: t.err_code,
                          finderUserName: e,
                          noticeInfo: JSON.stringify(t),
                        },
                      });
                  },
                });
            },
            getChannelId() {
              return Object(a.b)().then((e) => {
                var { videoChannelId: t = "" } = e || {},
                  i = t;
                this.setData({ finderUserName: i });
              });
            },
            handlePullDownRefresh() {
              this.updateLiveStatus();
            },
          },
          ready() {
            this.on && this.on(s.a.PULL_DOWN, this.handlePullDownRefresh),
              d.getShopInfo().then((e) => {
                var { shopMetaInfo: t = {} } = e;
                if (!Object(r.d)(t)) {
                  if (
                    !(
                      [96391935, 90777808, 73366021, 90957577].indexOf(
                        +this.kdtId
                      ) > -1
                    )
                  )
                    return;
                }
                Object(o.d)() ||
                  Object(o.c)() ||
                  this.getChannelId().then(() => {
                    this.updateLiveStatus();
                  });
              });
          },
        });
      },
    }
  )
);
