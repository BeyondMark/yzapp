"use strict";
var r = require("~/r");
r(
  "nFqT",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      nFqT: function (e, t, r) {
        r.r(t);
        var i = r("VOqM"),
          n = r("k9aU"),
          s = r("03az"),
          o = r("9ZMt"),
          a = r("CPuG"),
          c = o.default.getGlobal("logger"),
          d = {
            props: {
              bannerId: String,
              liveNoticeInfo: Object,
              opt: Object,
              themeColors: { type: Object, default: () => ({}) },
            },
            data: () => ({ isReserved: !1 }),
            computed: {
              wrapStyle() {
                var { page_margin: e } = this.opt;
                return "padding: 0 " + e + "px;";
              },
              itemStyle() {
                var { corner_type: e } = this.opt;
                return "border-radius: " + (e == i.a.round ? "8rpx" : "none");
              },
              description() {
                return this.liveNoticeInfo.nickname + "视频号直播";
              },
              startTime() {
                var e = this.liveNoticeInfo.startTime + "000",
                  t = new Date(+e);
                return (
                  (t.getDate() === new Date().getDate()
                    ? "今天 " + Object(s.b)(t, "hh:mm:ss")
                    : Object(s.b)(t, "M月dd日 hh:mm:ss")) + " 开播"
                );
              },
              reserveIconStyle() {
                return "color: " + this.themeColors.general;
              },
              reserveBtnStyle() {
                return this.isReserved
                  ? ""
                  : "color: " +
                      this.themeColors.general +
                      ";border-color: " +
                      this.themeColors.general +
                      ";";
              },
            },
            mounted() {
              a.a
                .queryLiveNotice({
                  noticeId: Object(n.a)(this.liveNoticeInfo.noticeId),
                })
                .then((e) => {
                  var { noticeStatus: t } = e;
                  1 == t && (this.isReserved = !0);
                });
            },
            methods: {
              handleReserve() {
                o.default.$native.reserveChannelsLive &&
                  o.default.$native.reserveChannelsLive({
                    noticeId: this.liveNoticeInfo.noticeId,
                    success: (e) => {
                      var { state: t } = e;
                      c &&
                        c.log({
                          et: "click",
                          ei: "click_contnet",
                          en: "内容点击",
                          params: {
                            state: t,
                            banner_id: this.props.bannerId,
                            component: "wxvideo_live",
                            type: "click_wxvideo_reserve",
                            noticeInfo: JSON.stringify(e),
                          },
                        }),
                        t == i.d.reserve &&
                          a.a
                            .subscribe({
                              noticeId: Object(n.a)(
                                this.liveNoticeInfo.noticeId
                              ),
                            })
                            .then(() => {
                              this.isReserved = !0;
                            }),
                        t == i.d.cancel &&
                          a.a
                            .cancelSubscribe({
                              noticeId: Object(n.a)(
                                this.liveNoticeInfo.noticeId
                              ),
                            })
                            .then(() => {
                              this.isReserved = !1;
                            });
                    },
                  });
              },
            },
            ud: !0,
          };
        t.default = o.default.component(d);
      },
    }
  )
);
