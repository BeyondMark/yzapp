"use strict";
var r = require("~/r");
r(
  "wVcR",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    wVcR: function (t, e, i) {
      i.r(e);
      var o = i("Fcif"),
        s = i("QxN7"),
        r = i("/duV"),
        a = i("BILe"),
        h = () =>
          i.e("packages/async-main/chunk").then(i.t.bind(null, "HsSF", 7)),
        { authLogger: n } = s.platform,
        u = {
          props: {
            theme: String,
            visible: Boolean,
            kdtId: Number,
            config: Object,
            zIndex: Number,
            popupCustomStyle: String,
            paddingBottom: Number,
            userInfo: Object,
          },
          data: () => ({
            logo: "",
            submitting: !1,
            protocols: [],
            protocolChecked: !1,
            protocolTip: !1,
            agreeBtnId: "agree_" + Date.now(),
            refuseBtnId: "refuse_" + Date.now(),
          }),
          computed: {
            ready() {
              return !!this.logo && this.protocols.length > 0;
            },
            mobile() {
              var { externalMobile: t } = this.userInfo || {};
              return ("" + (t || "")).replace(/^(.{3}).*(.{4})$/, "$1****$2");
            },
            authParams: () => ({
              unionAuthType: s.UnionAuthType.External,
              userAuthList: [s.AuthType.MOBILE, s.AuthType.PROTOCOL],
              type: s.AuthPopType.EXTERNAL,
              popupType: a.b.YOUZAN,
            }),
          },
          watch: {
            visible() {
              this.init();
            },
          },
          created() {
            this.init();
          },
          methods: {
            init() {
              if (!this.$_initing && !this.$_inited) {
                var t = this.visible;
                (this.$_initing = !0),
                  Promise.all([
                    h()
                      .then((t) => t.getProtocolData())
                      .then((t) => {
                        var { protocolData: e } = t;
                        return e.map((t) => ({
                          id: t.agreementTplId,
                          name: t.agreementTplName,
                          url: t.url,
                        }));
                      }),
                    Object(r.m)(this.kdtId),
                  ])
                    .then((t) => {
                      var [e, { shop: i }] = t;
                      (this.protocols = e),
                        (this.logo = i.logo),
                        (this.$_initing = !1),
                        (this.$_inited = !0);
                    })
                    .catch((e) => {
                      (this.$_initing = !1),
                        (this.$_inited = !1),
                        n.logAll({
                          logName: "yz-external 初始化失败",
                          logData: { errMsg: Object(s.getErrorMsg)(e), err: e },
                        }),
                        t && this.showToast("授权加载失败，请关闭后重试");
                    });
              }
            },
            close() {
              this.$emit("close");
            },
            setSubmitting(t) {
              this.submitting = t;
            },
            toggleTip(t) {
              (this.protocolTip = t),
                clearTimeout(this.$_tipTimer),
                t &&
                  (this.$_tipTimer = setTimeout(() => {
                    this.protocolTip = !1;
                  }, 3e3));
            },
            onProtocolCheck(t) {
              var { checked: e } = t;
              (this.protocolChecked = e), this.toggleTip(!1);
            },
            onProtocolTap(t) {
              var { url: e } = t || {};
              this.$emit("on-open-webview", e);
            },
            onRefuse() {
              this.submitting ||
                (this.close(),
                s.platform.rejectPrivacyAuth(this.refuseBtnId),
                this.$emit(
                  "fail",
                  Object(o.a)({}, this.authParams, {
                    reasons: this.authParams.type,
                  })
                ));
            },
            onAgree() {
              this.submitting ||
                (this.protocolChecked
                  ? (this.setSubmitting(!0),
                    this.$emit(
                      "success",
                      Object(o.a)({}, this.authParams, {
                        cb: () => this.close(),
                        onError: () => this.setSubmitting(!1),
                      })
                    ))
                  : this.toggleTip(!0));
            },
            onPrivacyAgree() {
              s.platform.resolvePrivacyAuth(this.agreeBtnId);
            },
            onBeforeEnter() {
              s.platform.requirePrivacyAuth(),
                h().then((t) => {
                  var { InvokeProtocol: e } = t;
                  new e().close({ immediately: !0 });
                });
            },
            onEnter() {
              this.$emit("auth-popup-show", {
                authPopType: this.authParams.type,
                popupType: this.authParams.popupType,
              });
            },
            onLeave() {
              (this.protocolChecked = !1),
                this.toggleTip(!1),
                this.setSubmitting(!1);
            },
            showToast(t, e) {
              this.$emit("toast", Object(o.a)({}, e, { message: t }));
            },
          },
          ud: !0,
        },
        l = i("9ZMt");
      e.default = l.default.component(u);
    },
  })
);
