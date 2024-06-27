"use strict";
var r = require("~/r");
r(
  "w6Tp",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      w6Tp: function (e, t, a) {
        a.r(t);
        var o = a("Fcif"),
          s = a("icCW"),
          r = a("Tewj"),
          i = a("w2Y9"),
          l = a.n(i),
          d = a("9ZMt"),
          c = a("ONqW"),
          n = a("TlkG"),
          h = a("AGZf"),
          p = a("KEq0"),
          u = a.n(p),
          b = u()("public_files/c7d5f0e64256b67aab4d6d2afd48e388.png", "small"),
          f = u()(
            "public_files/62bd95aac1baa548f2406ced713d2228.png",
            "middle"
          ),
          m = {
            name: "weapp-follow",
            props: {
              themeVars: String,
              shopBaseInfo: Object,
              shopMpInfo: Object,
              goodsBaseInfo: Object,
              route: Object,
            },
            data: () => ({
              shopData: {},
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
                    n.a.forceRiseFollower &&
                  (null == (t = this.extraData) ? void 0 : t.fromOrder) &&
                  "weapp" === d.default.getEnv()
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
              r.default.on("popupContainer:follow:show", function (t) {
                var a;
                void 0 === t && (t = {});
                var { route: r, query: i } = e.route,
                  { extraData: d = {} } = t;
                (e.extraData = d), e.setPopupInfo(d);
                var h = l.a.add(r, i);
                (h = h.slice(1)),
                  (e.followParams = Object(o.a)(
                    {
                      bizSubCode: 0,
                      channel: 1,
                      kdtId: null == (a = e.shopBaseInfo) ? void 0 : a.kdtId,
                      targetUrl: h,
                    },
                    d,
                    { feature: i || {} }
                  )),
                  Object(s.c)(e.followParams)
                    .then((t) => {
                      t
                        ? ((e.webViewUrl = t),
                          (e.show = !0),
                          (e.newRiseFollower = !0),
                          Object(c.a)().log({
                            et: "display",
                            ei: "enterpage",
                            en: "浏览页面",
                            params: {
                              component: "zhangfen",
                              biz_type: Object(n.c)(d),
                            },
                          }))
                        : e.handleCustomServiceMessage(
                            Object(o.a)({}, d, { feature: i })
                          );
                    })
                    .catch(() => {
                      e.handleCustomServiceMessage(
                        Object(o.a)({}, d, { feature: i })
                      );
                    });
              });
            },
            destroyed() {
              r.default.off("popupContainer:follow:show");
            },
            methods: {
              closePopup() {
                this.fromWeappOrder && this.$emit("dmc-jump", { type: "back" }),
                  this.handleReport(1),
                  (this.show = !1);
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
                        (this.qrcode = ""),
                          Object(h.a)("店铺二维码获取失败，请稍后重试");
                      });
              },
              getMessagePath() {
                var e,
                  t = {
                    yz_live_code_link: l.a.add(
                      "https://h5.youzan.com/wscump/weapp-follow",
                      {
                        kdtId:
                          null == (e = this.shopBaseInfo) ? void 0 : e.kdtId,
                        qrCodeUrl: this.qrcode || "",
                      }
                    ),
                    yz_live_code_image: b,
                    yz_live_code_desc: "关注公众号",
                    yz_live_code_title: "关注公众号",
                  },
                  a = l.a.add("/pages/home/dashboard/index", t);
                (this.messagePath = a),
                  (this.show = !0),
                  (this.newRiseFollower = !1);
              },
              onClick() {
                this.handleReport(2),
                  this.newRiseFollower &&
                    (Object(c.a)().log({
                      et: "click",
                      ei: "click",
                      en: "成为粉丝按钮点击",
                      params: {
                        component: "zhangfen",
                        biz_type: Object(n.c)(this.extraData),
                      },
                    }),
                    this.$emit("dmc-jump", {
                      type: "navigate",
                      page: this.webViewUrl,
                    }));
              },
              handleReport(e) {
                Object(s.b)(
                  Object(o.a)({}, this.followParams, { followWay: e })
                );
              },
              setPopupInfo(e) {
                var { title: t, subTitle: a, btnText: o } = Object(n.d)(e);
                (this.title = t), (this.subTitle = a), (this.btnText = o);
              },
            },
            ud: !0,
          };
        t.default = d.default.component(m);
      },
    }
  )
);
