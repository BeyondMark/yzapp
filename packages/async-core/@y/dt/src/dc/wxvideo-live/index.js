"use strict";
var r = require("~/r");
r(
  "mOc2",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      mOc2: function (e, i, n) {
        n.r(i);
        var t = n("9ZMt"),
          s = n("R7Zb"),
          o = n("bs6A"),
          a = n("CPuG"),
          r = n("hR5w"),
          d = n("VOqM"),
          v = t.default.getGlobal("logger"),
          l = {
            mixins: [Object(s.a)({ optDesc: r.a }), o.a],
            props: { themeColors: { type: Object, default: () => ({}) } },
            data: () => ({
              liveInfo: null,
              liveNoticeInfo: null,
              isLiving: !1,
              hasNotice: !1,
            }),
            logicData: () => ({ finderUserName: "" }),
            computed: {
              bannerId() {
                return this.getBannerId();
              },
            },
            mounted() {
              this.getChannelId().then(() => {
                this.initData();
              });
            },
            methods: {
              onPullDownRefresh() {
                this.initData();
              },
              initData() {
                this.initChannelsLiveInfo(), this.initChannelsLiveNoticeInfo();
              },
              handleToLive() {
                v &&
                  v.log({
                    et: "click",
                    ei: "click_contnet",
                    en: "内容点击",
                    params: {
                      status: this.liveInfo.status,
                      banner_id: this.bannerId,
                      component: "wxvideo_live",
                      type: "click_wxvideo_living",
                    },
                  }),
                  t.default.$native.openChannelsLive &&
                    t.default.$native.openChannelsLive({
                      feedId: this.liveInfo.feedId,
                      nonceId: this.liveInfo.nonceId,
                      finderUserName: this.finderUserName,
                    });
              },
              initChannelsLiveInfo() {
                var { finderUserName: e } = this;
                e &&
                  t.default.$native.getChannelsLiveInfo &&
                  t.default.$native.getChannelsLiveInfo({
                    finderUserName: e,
                    success: (e) => {
                      var { status: i } = e;
                      v &&
                        v.log({
                          et: "view",
                          ei: "component_view",
                          en: "组件曝光",
                          params: {
                            status: i,
                            banner_id: this.bannerId,
                            component: "wxvideo_live",
                            type: "view_wxvideo_living",
                            noticeInfo: JSON.stringify(e),
                          },
                        }),
                        (this.liveInfo = e),
                        i == d.b.isLiving
                          ? (this.isLiving = !0)
                          : (this.isLiving = !1);
                    },
                    fail: function (i) {
                      void 0 === i && (i = {}),
                        v &&
                          v.log({
                            et: "view",
                            ei: "component_view_fail",
                            en: "视频号组件曝光失败",
                            params: {
                              component: "wxvideo_live",
                              errCode: i.err_code,
                              finderUserName: e,
                              noticeInfo: JSON.stringify(i),
                            },
                          }),
                        a.a.setErrorVideoId({ videoId: e });
                    },
                  });
              },
              initChannelsLiveNoticeInfo() {
                var { finderUserName: e } = this;
                d.c.hide != this.opt.show_reserve &&
                  e &&
                  t.default.$native.getChannelsLiveNoticeInfo &&
                  t.default.$native.getChannelsLiveNoticeInfo({
                    finderUserName: e,
                    success: (e) => {
                      var { status: i } = e;
                      0 == i
                        ? ((this.liveNoticeInfo = e),
                          (this.hasNotice = !0),
                          v &&
                            v.log({
                              et: "view",
                              ei: "component_view",
                              en: "组件曝光",
                              params: {
                                status: i,
                                banner_id: this.bannerId,
                                component: "wxvideo_live",
                                type: "view_wxvideo_reserve",
                                noticeInfo: JSON.stringify(e),
                              },
                            }))
                        : (this.hasNotice = !1);
                    },
                  });
              },
              getChannelId() {
                return a.a.getWeixinVideoInfo().then((e) => {
                  var { videoChannelId: i } = e || {};
                  this.finderUserName = i;
                });
              },
            },
            ud: !0,
          };
        i.default = t.default.component(l);
      },
    }
  )
);
