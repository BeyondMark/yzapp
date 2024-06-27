"use strict";
var r = require("~/r");
r(
  "g5bd",
  Object.assign({}, require("~/v.js").modules, {
    "+Qok": function (t, o, e) {
      e.d(o, "a", function () {
        return r;
      });
      var r = "user-auth-protocol-content";
    },
    g5bd: function (t, o, e) {
      e.r(o);
      var r = e("QxN7");
      e("kSnQ"), e("Y6Ef");
      var s = e("+Qok"),
        { protocolHook: i } = r.hooks,
        { authLogger: n } = r.platform,
        h = Symbol("offList"),
        c = {
          data() {
            var { cloudDesignConfig: t } = this.ctx.data,
              o = !!t && t.replacedSlots.includes(s.a);
            return {
              source: "@ext/protocol/popup_" + Date.now(),
              visible: !1,
              isCloudSlot: o,
            };
          },
          mounted() {
            this.initProtocol();
          },
          destroyed() {
            this.runOff();
          },
          methods: {
            addOff(t) {
              this[h] = (this[h] || []).concat(t);
            },
            runOff() {
              this[h] && (this[h].forEach((t) => t()), (this[h] = null));
            },
            initProtocol() {
              this.getProtocol()
                .then((t) => {
                  var { invoker: o } = t;
                  o.on(r.InvokeProtocolEvent.SHOW, () => this.show(), {
                    playback: !0,
                  }),
                    o.on(r.InvokeProtocolEvent.CLOSE, () => this.hide());
                })
                .catch((t) => {
                  throw (
                    (n.logAll({
                      errTitle: "protocol init error",
                      errInfo: {
                        source: this.source,
                        msg: Object(r.getErrorMsg)(t),
                        stack: t && t.stack,
                      },
                    }),
                    t)
                  );
                });
            },
            getProtocol() {
              return (
                this.$_protocolPs ||
                  (this.$_protocolPs = e
                    .e("packages/async-main/chunk")
                    .then(e.t.bind(null, "HsSF", 7))
                    .then((t) => ({
                      invoker: new t.InvokeProtocol({ source: this.source }),
                    }))
                    .catch((t) => {
                      throw ((this.$_protocolPs = null), t);
                    })),
                this.$_protocolPs
              );
            },
            handleAgree() {
              e.e("packages/async-tee/chunk")
                .then(e.bind(null, "JvWB"))
                .then((t) => t.default)
                .then((t) => {
                  t.refreshUserAuthData().finally(() => {
                    Object(r.emitUserAuthSuccess)({
                      authTypeList: [r.AuthType.PROTOCOL],
                      authPopTypeList: [r.AuthPopType.PROTOCOL],
                    });
                  }),
                    this.hide();
                });
            },
            handleDisagree() {
              this.hide();
            },
            show() {
              this.visible = !0;
            },
            hide() {
              this.visible = !1;
            },
          },
        },
        l = e("9ZMt");
      o.default = l.default.component(c);
    },
  })
);
