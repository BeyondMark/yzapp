"use strict";
var r = require("~/r");
r(
  "P1eA",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      P1eA: function (e, n, i) {
        i.r(n);
        var a = i("eijD"),
          t = i("9ZMt"),
          d = i("ONqW"),
          s = i("PlO7"),
          r = {
            name: "channel-live-floating",
            data: () => ({ isLive: !1, finderUserName: "", headUrl: "" }),
            mounted() {
              var e = this;
              return Object(a.a)(function* () {
                yield e.getChannelId(), e.updateLiveStatus();
              })();
            },
            methods: {
              linkToLive() {
                Object(d.a)().log({
                  et: "click",
                  ei: "floating_nav_wechat_video_click",
                  en: "视频号直播悬浮窗点击",
                  params: {
                    component: "floating_nav_wechat_video",
                    nickname: this.nickname,
                  },
                }),
                  t.default.$native.openChannelsLive &&
                    t.default.$native.openChannelsLive({
                      feedId: this.feedId,
                      nonceId: this.nonceId,
                      finderUserName: this.finderUserName,
                    });
              },
              updateLiveStatus() {
                var { finderUserName: e } = this;
                e &&
                  t.default.$native.getChannelsLiveInfo &&
                  t.default.$native.getChannelsLiveInfo({
                    finderUserName: e,
                    success: (e) => {
                      var {
                        status: n,
                        feedId: i,
                        nonceId: a,
                        nickname: t,
                        headUrl: s,
                      } = e;
                      2 == n
                        ? ((this.isLive = !0),
                          (this.feedId = i),
                          (this.nonceId = a),
                          (this.nickname = t),
                          (this.headUrl = s),
                          Object(d.a)().log({
                            et: "view",
                            ei: "floating_nav_wechat_video_view",
                            en: "视频号直播悬浮窗曝光",
                            params: {
                              component: "floating_nav_wechat_video",
                              nickname: t,
                            },
                          }))
                        : (this.isLive = !1);
                    },
                    fail: function (n) {
                      void 0 === n && (n = {}),
                        Object(d.a)().log({
                          et: "view",
                          ei: "floating_nav_wechat_video_view_fail",
                          en: "视频号直播悬浮窗曝光失败",
                          params: {
                            component: "floating_nav_wechat_video",
                            errCode: n.err_code,
                            finderUserName: e,
                            noticeInfo: JSON.stringify(n),
                          },
                        });
                    },
                  });
              },
              getChannelId() {
                return Object(s.b)().then((e) => {
                  var { videoChannelId: n = "" } = e || {},
                    i = n;
                  this.finderUserName = i;
                });
              },
            },
            ud: !0,
          };
        n.default = t.default.component(r);
      },
    }
  )
);
