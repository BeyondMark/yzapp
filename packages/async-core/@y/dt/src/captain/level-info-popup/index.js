"use strict";
var r = require("~/r");
r(
  "Bql1",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      Bql1: function (e, t, a) {
        a.r(t);
        var i = a("Fcif"),
          s = a("eijD"),
          o = a("9ZMt"),
          c = a("AGZf"),
          r = a("a1Mm"),
          n = a("tO1P"),
          d = a("X3UN"),
          l = Object(r.a)(
            "upload_files/2022/03/21/FqEx9rlTjNvy__DD_0zHNJI_bBIm.png"
          ),
          h = {
            props: {
              show: Boolean,
              levelName: String,
              level: String,
              nickName: String,
            },
            data: () => ({
              barcode: "",
              qrcode: "",
              encodeCode: "",
              isLoading: !1,
              wechatPayIcon: l,
              showWechatPayBtn: !1,
              payViewParams: {},
            }),
            mounted() {
              var [e, t] = Object(n.a)(this.fetchCode.bind(this), 6e4);
              (this.setQRCode = e),
                (this.stopPolling = t),
                this.setQRCode(),
                this.checkInWhiteList();
            },
            destroyed() {
              this.stopPolling();
            },
            methods: {
              closePopup() {
                this.$emit("close");
              },
              handleTapCode() {
                (this.isLoading = !0), this.stopPolling(), this.setQRCode();
              },
              fetchCode() {
                var e = this;
                return Object(s.a)(function* () {
                  try {
                    var {
                      barCode: t,
                      qrCode: a,
                      code: i,
                    } = yield Object(d.b)();
                    (e.barcode = t), (e.qrcode = a), (e.encodeCode = i);
                  } catch (e) {
                    var s,
                      o =
                        null != (s = null == e ? void 0 : e.msg)
                          ? s
                          : "获取会员码失败，尝试再次点击获取";
                    c.a.fail(o);
                  } finally {
                    e.isLoading = !1;
                  }
                })();
              },
              checkInWhiteList() {
                Object(d.a)().then((e) => {
                  var { result: t = !1, params: a } = e;
                  (this.showWechatPayBtn = t), (this.payViewParams = a);
                });
              },
              handleToWechatPay() {
                o.default.$native.openOfflinePayView(
                  Object(i.a)({}, this.payViewParams, {
                    package: this.payViewParams.packageStr,
                    success: () => {},
                    fail: (e) => {},
                  })
                );
              },
            },
            ud: !0,
          };
        t.default = o.default.component(h);
      },
    }
  )
);
