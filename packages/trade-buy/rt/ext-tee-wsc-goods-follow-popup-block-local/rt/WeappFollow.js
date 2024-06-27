"use strict";
var r = require("~/r");
r(
  "eSTS",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      eSTS: function (e, t, a) {
        a.r(t);
        var o = a("Fcif"),
          s = a("lZ1G"),
          i = a("YKtM"),
          r = a("w2Y9"),
          l = a.n(r),
          c = a("9ZMt"),
          d = a("ONqW"),
          h = a("7PBX"),
          n = a("AGZf"),
          b = a("KEq0"),
          p = a.n(b),
          u = p()("public_files/c7d5f0e64256b67aab4d6d2afd48e388.png", "small"),
          f = p()(
            "public_files/62bd95aac1baa548f2406ced713d2228.png",
            "middle"
          ),
          w = {
            data: () => ({
              shopBaseInfo: {},
              shopData: {},
              goodsBaseInfo: {},
              themeVars: "",
              show: !1,
              weixinTempQrData: {},
              title: "成为店铺粉丝",
              subTitle: "还能了解最新优惠信息",
              btnText: "成为粉丝",
              messagePath: "",
              messageImg: f,
              newRiseFollower: !1,
              webViewUrl: "",
              followParams: {},
              extraData: {},
            }),
            computed: {
              fromWeappOrder() {
                var e, t;
                return (
                  (null == (e = this.extraData) ? void 0 : e.bizCode) ===
                    h.a.forceRiseFollower &&
                  (null == (t = this.extraData) ? void 0 : t.fromOrder) &&
                  "weapp" === c.default.getEnv()
                );
              },
              popOverlayStyle() {
                return this.fromWeappOrder
                  ? "background-color: rgba(0, 0, 0, 1);"
                  : "";
              },
            },
            created() {
              var e = this;
              Object(i.mapData)(
                ["themeVars", "shopBaseInfo", "shopMpInfo", "goodsBaseInfo"],
                this
              ),
                Object(i.mapEvent)(
                  {
                    "follow:show": function (t) {
                      void 0 === t && (t = {});
                      var { route: a, getQuery: i } = e.ctx.env,
                        r = i(),
                        { extraData: c = {} } = t;
                      (e.extraData = c), e.setPopupInfo(c);
                      var n = l.a.add(a, r);
                      (n = n.slice(1)),
                        (e.followParams = Object(o.a)(
                          {
                            bizSubCode: 0,
                            channel: 1,
                            kdtId: e.shopBaseInfo.kdtId,
                            targetUrl: n,
                          },
                          c,
                          { feature: r || {} }
                        )),
                        Object(s.c)(e.followParams)
                          .then((t) => {
                            t
                              ? ((e.webViewUrl = t),
                                (e.show = !0),
                                (e.newRiseFollower = !0),
                                Object(d.a)().log({
                                  et: "display",
                                  ei: "enterpage",
                                  en: "浏览页面",
                                  params: {
                                    component: "zhangfen",
                                    biz_type: Object(h.c)(c),
                                  },
                                }))
                              : e.handleCustomServiceMessage(
                                  Object(o.a)({}, c, { feature: r })
                                );
                          })
                          .catch(() => {
                            e.handleCustomServiceMessage(
                              Object(o.a)({}, c, { feature: r })
                            );
                          });
                    },
                  },
                  this
                ),
                this.ctx.process.define(
                  "checkShowFollow",
                  this.checkShowFollow
                );
            },
            methods: {
              closePopup() {
                this.fromWeappOrder && this.ctx.dmc.back(),
                  this.handleReport(1),
                  (this.show = !1);
              },
              checkShowFollow(e) {
                void 0 === e && (e = {});
                var {
                    activityType: t,
                    activityKey: a,
                    followWays: o = [],
                    threshold: i,
                    useFollow: r,
                  } = e,
                  l = h.a[t];
                if (
                  ((o && o.length) || o.push(1),
                  l === h.a.seckill && (!r || (r && !o.includes(2))))
                )
                  return { needFollow: !1 };
                if (l === h.a.luckyDrawGroup && !i) return { needFollow: !1 };
                var c = h.b[t] || 0;
                return Object(s.a)({
                  bizCode: l,
                  bizSubCode: c,
                  channel: 1,
                  activityKey: a,
                }).then((e) => ({
                  needFollow: e,
                  extraData: { bizCode: l, bizSubCode: c, activityKey: a },
                }));
              },
              handleCustomServiceMessage(e) {
                this.qrcode
                  ? this.getMessagePath()
                  : Object(s.d)(
                      Object(o.a)({ bizSubCode: 0 }, e, {
                        feature: JSON.stringify(e.feature),
                      })
                    )
                      .then((e) => {
                        (this.qrcode = e), this.getMessagePath();
                      })
                      .catch((e) => {
                        (this.qrcode = ""), Object(n.a)("获取店铺二维码失败");
                      });
              },
              getMessagePath() {
                var e = {
                    yz_live_code_link: l.a.add(
                      "https://h5.youzan.com/wscump/weapp-follow",
                      {
                        kdtId: this.shopBaseInfo.kdtId,
                        qrCodeUrl: this.qrcode || "",
                      }
                    ),
                    yz_live_code_image: u,
                    yz_live_code_desc: "关注公众号",
                    yz_live_code_title: "关注公众号",
                  },
                  t = l.a.add("/pages/home/dashboard/index", e);
                (this.messagePath = t),
                  (this.show = !0),
                  (this.newRiseFollower = !1);
              },
              onClick() {
                this.handleReport(2),
                  this.newRiseFollower &&
                    (Object(d.a)().log({
                      et: "click",
                      ei: "click",
                      en: "成为粉丝按钮点击",
                      params: {
                        component: "zhangfen",
                        biz_type: Object(h.c)(this.extraData),
                      },
                    }),
                    this.ctx.dmc.navigate(this.webViewUrl));
              },
              handleReport(e) {
                Object(s.b)(
                  Object(o.a)({}, this.followParams, { followWay: e })
                );
              },
              setPopupInfo(e) {
                var { title: t, subTitle: a, btnText: o } = Object(h.d)(e);
                (this.title = t), (this.subTitle = a), (this.btnText = o);
              },
            },
            ud: !0,
          };
        t.default = c.default.component(w);
      },
    }
  )
);
