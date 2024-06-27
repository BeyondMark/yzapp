"use strict";
var r = require("~/r");
r(
  "Gja0",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      Gja0: function (t, e, a) {
        a.r(e);
        var i = a("Fcif"),
          s = a("9ZMt"),
          c = a("AGZf"),
          h = a("SyLL"),
          r = a("1rIA"),
          o = a("E6qs"),
          n = a("bKR7"),
          l = {
            props: { bizType: Number, bizData: Object },
            data: () => ({
              dragBar: {
                controlBar: Object(i.a)({}, r.c),
                controlBarBlock: Object(i.a)({}, r.c),
              },
              display: Object(i.a)({}, r.c),
              dragStart: { x: 0, y: 0 },
              moveX: 0,
              token: "",
              behaviorData: Object(i.a)({}, r.g),
              scale: r.d,
              userDataList: [],
              status: r.l.LOADING,
              timer: 0,
              canDrag: !1,
              bigSize: r.e,
              open: !1,
            }),
            computed: {
              behaviorLoading() {
                return -1 !== [r.l.LOADING, r.l.ERROR].indexOf(this.status);
              },
            },
            mounted() {
              this.$emit("behaviorDidMount");
            },
            methods: {
              getToken() {
                c.a.loading(),
                  Object(n.d)({
                    bizType: h.c.bizType || this.bizType,
                    version: "1.0",
                  })
                    .then((t) => {
                      var { token: e, publicKey: a = "" } = t;
                      Object(o.k)(a),
                        (this.token = e),
                        this.checkClickOrTouch();
                    })
                    .catch((t) => {
                      c.a.fail(t.msg), Object(o.i)({ vm: this });
                    });
              },
              checkClickOrTouch() {
                var t = h.c.clickOrTouch.getUserBehaviorData();
                a.e("packages/async-main/chunk")
                  .then(a.t.bind(null, "sbP3", 7))
                  .then((e) => {
                    Object(n.a)({
                      token: this.token,
                      bizType: h.c.bizType || this.bizType,
                      segmentEncryptBizDataList: Object(o.d)(h.c.bizData, e),
                      segmentEncryptBehaviorDataList: Object(o.d)(t, e),
                    })
                      .then((t) => {
                        c.a.clear(),
                          t.success
                            ? Object(o.c)({
                                vm: this,
                                eventType: r.j.SUCCESS,
                                data: this.token,
                              })
                            : this.handleCaptchaType(t.captchaType, !0);
                      })
                      .catch(() => {
                        c.a.clear(), Object(o.i)({ vm: this });
                      });
                  });
              },
              freshBehaviorData() {
                (this.status = r.l.LOADING),
                  Object(n.c)({ token: this.token })
                    .then((t) => {
                      (this.behaviorData = t.captchaObtainInfoResult),
                        setTimeout(() => {
                          this.status = r.l.READY;
                        }, 400),
                        "web" === s.default.getEnv() &&
                          this.updateScale(this.behaviorData.bigUrl);
                    })
                    .catch(() => {
                      Object(o.i)({ vm: this });
                    });
              },
              checkBehaviorData() {
                var t = this.getUserMobileTouchData();
                a.e("packages/async-main/chunk")
                  .then(a.t.bind(null, "sbP3", 7))
                  .then((e) => {
                    Object(n.b)({
                      token: this.token,
                      bizType: h.c.bizType || this.bizType,
                      segmentEncryptBizDataList: Object(o.d)(h.c.bizData, e),
                      segmentEncryptBehaviorDataList: Object(o.d)(
                        Object(i.a)(
                          {
                            cx: Math.ceil(r.b + this.moveX),
                            cy: Math.ceil(this.behaviorData.cy * this.scale),
                            scale: this.scale,
                            slidingEvents: this.userDataList,
                          },
                          t
                        ),
                        e
                      ),
                    })
                      .then((t) => {
                        if (!t.success)
                          return t && t.needRefresh
                            ? this.delay(r.l.LIMIT, () => {}, r.l.LIMIT)
                            : void this.handleCaptchaType(t.captchaType);
                        this.delay(r.l.SUCCESS, () => {
                          this.hide(),
                            Object(o.c)({
                              vm: this,
                              eventType: r.j.SUCCESS,
                              data: this.token,
                            });
                        });
                      })
                      .catch((t) => {
                        c.a.fail(t.msg), this.hide(), Object(o.i)({ vm: this });
                      });
                  });
              },
              getUserMobileTouchData() {
                var {
                  tempTouchData: t,
                  tempGyroscopeData: e,
                  tempSpeedData: a,
                } = h.c.clickOrTouch.getUserBehaviorData();
                return {
                  tempTouchData: t,
                  tempSpeedData: a,
                  tempGyroscopeData: e,
                };
              },
              handleCaptchaType(t, e) {
                switch ((void 0 === e && (e = !1), t)) {
                  case r.a.SLIDE:
                    this.show(),
                      this.delay(
                        e ? r.l.LOADING : r.l.FAILED,
                        this.freshBehaviorData
                      );
                    break;
                  case r.a.CLICK:
                    this.checkClickOrTouch();
                    break;
                  default:
                    c.a.fail("没有当前类型验证码");
                }
              },
              delay(t, e, a) {
                void 0 === a && (a = r.l.READY),
                  (this.status = t),
                  this.timer && clearInterval(this.timer),
                  (this.timer = setTimeout(() => {
                    (this.moveX = 0), (this.status = a), e && e();
                  }, 500));
              },
              queryRect() {
                this.$refs.display.queryRect(), this.$refs.control.queryRect();
              },
              dragBarQuery(t) {
                this.dragBar = t;
              },
              dragStartQuery(t) {
                (this.canDrag = !0), (this.dragStart = t);
              },
              displayQuery(t) {
                this.display = t;
              },
              dragMove(t) {
                this.moveX = t;
              },
              dragEnd(t) {
                var { userDataList: e } = t;
                (this.canDrag = !1),
                  (this.userDataList = e),
                  this.checkBehaviorData();
              },
              onScale(t) {
                this.scale = t;
              },
              updateScale(t) {
                "web" !== s.default.getEnv() &&
                  Object(o.g)(t, r.e).then((t) => {
                    (this.bigSize = t), (this.scale = r.i / t.width);
                  });
              },
              show() {
                this.open = !0;
              },
              hide() {
                (this.open = !1), (this.behaviorData = Object(i.a)({}, r.g));
              },
              handleLayoutShow() {
                this.queryRect();
              },
            },
            ud: !0,
          };
        e.default = s.default.component(l);
      },
    }
  )
);
