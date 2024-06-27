"use strict";
var r = require("~/r");
r(
  "Vsx5",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      Vsx5: function (t, s, e) {
        e.r(s);
        var o = e("Fcif"),
          i = e("D74h"),
          a = e("YeA1"),
          h = e("5uB3"),
          n = {
            name: "im-layer",
            data: () => ({
              popupVisble: !1,
              lastMsgContent: "",
              allowPopUp: !1,
              topLayoutTimer: null,
              conversationId: "",
              shopBaseInfo: {},
              offset: 0,
              lastOffset: null,
              popupStyle: "",
              topNavHeight: 0,
              showComp: !1,
            }),
            created() {
              Object(a.b)(this, ["shopBaseInfo", "topNavHeight"]);
            },
            mounted() {
              this.getSocketToken().then((t) => {
                var s = this.ctx.process.invoke("getImSocketIns")[0];
                s &&
                  t &&
                  h.a
                    .getIns(
                      {
                        authData: {
                          token: t,
                          endpoint: "web",
                          login_biz: "mmp",
                        },
                      },
                      s.ws
                    )
                    .ws.eventEmitter.on("message", this.onMessage);
              });
            },
            computed: {
              shopName() {
                return (
                  (this.shopBaseInfo && this.shopBaseInfo.name) || "店铺消息"
                );
              },
              shopAvtarStyle() {
                return this.shopBaseInfo
                  ? "background-image: url(" + this.shopBaseInfo.logo + ")"
                  : "";
              },
              kdtId() {
                return this.shopBaseInfo ? this.shopBaseInfo.kdtId : 0;
              },
            },
            methods: {
              getSocketToken() {
                return new Promise((t, s) => {
                  this.ctx.lambdas
                    .login()
                    .then((s) => {
                      t(null == s ? void 0 : s.sessionId);
                    })
                    .catch(() => {
                      s();
                    });
                });
              },
              onMessage(t) {
                var { msg: s, reqType: e } = t;
                e !== i.a.MESSAGE || s.is_self || this.showMsgTip(s);
              },
              showMsgTip(t) {
                this.topLayoutTimer &&
                  (clearTimeout(this.topLayoutTimer),
                  (this.topLayoutTimer = null)),
                  (this.lastMsgContent = Object(i.b)(t)),
                  (this.popupVisble = !0),
                  (this.showComp = !0),
                  (this.topLayoutTimer = setTimeout(() => {
                    this.closeTopPopup();
                  }, 8e3));
              },
              closeTopPopup() {
                (this.lastMsgContent = ""),
                  (this.popupVisble = !1),
                  clearTimeout(this.topLayoutTimer),
                  (this.topLayoutTimer = null);
              },
              onDragStatusChange(t) {
                t && this.topLayoutTimer
                  ? (clearTimeout(this.topLayoutTimer),
                    (this.topLayoutTimer = null))
                  : t ||
                    this.topLayoutTimer ||
                    (this.topLayoutTimer = setTimeout(() => {
                      this.closeTopPopup();
                    }, 8e3));
              },
              sendMsg(t, s) {
                void 0 === t && (t = {}),
                  h.a
                    .getIns()
                    .send(
                      Object(o.a)({ conversation_id: this.conversationId }, t),
                      { type: s }
                    )
                    .catch((t) => {});
              },
              onTouchStart() {
                this.onDragStatusChange(!0);
              },
              onTouchMove(t) {
                var s,
                  e = null == (s = t.touches[0]) ? void 0 : s.clientY;
                if (e)
                  if (this.lastOffset) {
                    var o = Math.round(e - this.lastOffset);
                    Number.isNaN(o) || (this.offset += o);
                  } else this.lastOffset = e;
              },
              onTouchEnd() {
                this.onDragStatusChange(!1),
                  this.offset < -30
                    ? ((this.offset = -122), this.closeTopPopup())
                    : (this.offset = this.topNavHeight),
                  (this.lastOffset = null);
              },
            },
            watch: {
              offset(t) {
                this.popupStyle = t ? "transform:translateY(" + t + "px)" : "";
              },
              popupVisble(t) {
                t && (this.offset = this.topNavHeight);
              },
            },
            ud: !0,
          },
          p = e("9ZMt");
        s.default = p.default.component(n);
      },
    }
  )
);
