"use strict";
var r = require("~/r");
r(
  "rKV9",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      rKV9: function (e, t, s) {
        s.r(t);
        var a = s("Fcif"),
          i = s("AGZf"),
          o = s("2bgu"),
          n = s("VbWc"),
          c = s("tuFO"),
          l = s.n(c),
          r = s("w2Y9"),
          h = s.n(r),
          u = s("zdpX"),
          b = s("h1PR"),
          p = s("HCk1"),
          d = () => {},
          f = {
            props: {
              show: { type: Boolean, default: !1 },
              launchArgs: { type: Object },
              userInfo: { type: Object },
            },
            data: () => ({
              popupShow: !1,
              supportFastJoin: !1,
              shopInfo: {},
              attributeInfo: {},
              baseAttributeInfo: {},
              fastJoinHeaderInfo: { type: p.a.Normal },
              alias: "",
            }),
            created() {
              (this.closeCallback = d), (this.successCallback = d), this.init();
            },
            destroyed() {
              (this.closeCallback = d), (this.successCallback = d);
            },
            watch: {
              show: {
                immediate: !0,
                handler(e) {
                  e && this.launchFastJoin();
                },
              },
              "userInfo.mobile": {
                immediate: !0,
                handler(e) {
                  e && this.init();
                },
              },
            },
            methods: {
              init() {
                var { alias: e } = this.launchArgs || {};
                (this.alias = e || ""),
                  Object(u.b)(e ? { alias: e } : {}).then((e) => {
                    var {
                      supportFastJoin: t,
                      shopInfo: s,
                      brandPagesSetting: a = {},
                      attributeInfo: i = {},
                    } = e || { supportFastJoin: !1 };
                    (this.shopInfo = s || {}),
                      (this.fastJoinHeaderInfo = {
                        type: a.headType || p.a.Normal,
                      }),
                      (this.baseAttributeInfo = i),
                      (this.supportFastJoin = t),
                      this.$emit("onUpdateShopInfo", s),
                      this.$emit("onUpdateHeadType", a.headType || p.a.Normal);
                  });
              },
              launchFastJoin() {
                var {
                  alias: e,
                  kdtId: t,
                  redirectUrl: s,
                  guideType: n,
                  extra: c = {},
                  successCallback: r,
                  closeCallback: f,
                } = this.launchArgs || {};
                this.$nextTick(() => {
                  if (
                    ((this.successCallback = "function" == typeof r ? r : d),
                    (this.closeCallback = "function" == typeof f ? f : d),
                    this.supportFastJoin)
                  ) {
                    Object(b.d)(Object(a.a)({ levelType: p.b.FREE }, c)),
                      Object(b.b)(this.baseAttributeInfo)
                        ? (Object(i.a)("入会中..."),
                          Object(u.a)({
                            attributeList: [],
                            clickWay: 0,
                            sceneType: 1,
                            member_src_way: "900",
                          }).then((e) => {
                            e
                              ? this.$refs.joinNotice.launchJoinMemberNotice({
                                  onSuccessClose: this.successCallback,
                                  alias: this.alias,
                                })
                              : Object(i.a)({
                                  type: "text",
                                  message: "入会失败，请稍后重试",
                                  zIndex: 6e3,
                                }),
                              this.$emit("onUpdateCloseStatus");
                          }))
                        : ((this.attributeInfo = this.baseAttributeInfo),
                          (this.popupShow = !0));
                  } else {
                    this.$emit("onUpdateCloseStatus");
                    var m = l()(
                      h.a.add("/wscuser/levelcenter/fill", {
                        kdt_id: t,
                        alias: e,
                        guideType: n,
                        redirectUrl: s,
                      }),
                      "h5",
                      t
                    );
                    Object(o.b)({
                      url:
                        "/pages/common/webview-page/index?src=" +
                        encodeURIComponent(m),
                      type: "navigateTo",
                      web: { type: "safeLink", safeLink: { url: m } },
                    });
                  }
                });
              },
              handleJoin() {
                var e = this.$refs.infoBlock.getCustomerAttributes(),
                  t = Object(b.a)(e);
                t
                  ? Object(i.a)({ type: "text", message: t, zIndex: 6e3 })
                  : Object(u.a)({
                      attributeList: Object(b.c)(e),
                      clickWay: 0,
                      sceneType: 1,
                      member_src_way: "900",
                    }).then((e) => {
                      e
                        ? (this.onClose(),
                          setTimeout(() => {
                            this.$refs.joinNotice.launchJoinMemberNotice({
                              onSuccessClose: this.successCallback,
                              alias: this.alias,
                            });
                          }, 1e3))
                        : (Object(i.a)({
                            type: "text",
                            message: "入会失败，请稍后重试",
                            zIndex: 6e3,
                          }),
                          this.$emit("onUpdateCloseStatus"));
                    });
              },
              handleSubmit() {
                var e = this.$refs.agreementBlock.getAgreeStatus();
                e.showAgreement
                  ? e.checked
                    ? Object(n.b)([e.id]).then(() => {
                        this.handleJoin();
                      })
                    : Object(i.a)({
                        type: "text",
                        message: "请先阅读并同意协议",
                        zIndex: 6e3,
                      })
                  : this.handleJoin();
              },
              onClose() {
                (this.popupShow = !1),
                  (this.attributeInfo = {}),
                  this.$emit("onUpdateCloseStatus");
              },
            },
            ud: !0,
          },
          m = s("9ZMt");
        t.default = m.default.component(f);
      },
    }
  )
);
