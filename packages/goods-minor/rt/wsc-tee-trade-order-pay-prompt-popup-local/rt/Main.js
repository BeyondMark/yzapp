"use strict";
var r = require("~/r");
r(
  "wSZ4",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      wSZ4: function (e, t, o) {
        o.r(t);
        var r = o("eijD"),
          n = o("Fcif"),
          i = o("qYBx"),
          a = (o("2bgu"), o("GFyo")),
          p = o("CrLP"),
          s = o("OK7I"),
          h = o.n(s),
          m = o("YeA1"),
          d = o("PKOW"),
          { args: c } = i.f,
          u = "ORDER_PAY_PROMPT",
          g = {
            data: () => ({
              kdtId: 0,
              prompt: {},
              needRequest: !0,
              source: "",
              themeColors: {},
              innerShow: !1,
              remotePrompt: {},
              initialShow: !1,
            }),
            computed: {
              formatThemeColors() {
                var e = this.themeColors["main-bg"] || "",
                  t = this.themeColors["vice-bg"] || "";
                return Object(n.a)({}, this.themeColors, {
                  "main-bg":
                    "string" == typeof e
                      ? e
                      : "linear-gradient(to right, " +
                        e.start +
                        ", " +
                        e.end +
                        ")",
                  "vice-bg":
                    "string" == typeof t
                      ? t
                      : "linear-gradient(to right, " +
                        t.start +
                        ", " +
                        t.end +
                        ")",
                });
              },
              promptData() {
                return this.needRequest ? this.remotePrompt : this.prompt;
              },
            },
            watch: {
              innerShow(e) {
                e && !this.initialShow && (this.initialShow = !0);
              },
            },
            created() {
              var e = this;
              return Object(r.a)(function* () {
                var t = yield Object(a.c)("order-pay-prompt-popup");
                Object(m.b)(e, [
                  "kdtId",
                  "needRequest",
                  "source",
                  "themeColors",
                  "prompt",
                ]),
                  Object(m.d)(e, {
                    open: () => {
                      null != t && t.data
                        ? e.ctx.event.emit("stateChange", {
                            name: u,
                            state: "CLOSE",
                          })
                        : e.showPopup();
                    },
                    close: () => {
                      e.onClose();
                    },
                  }),
                  e.ctx.event.emit("stateChange", {
                    name: u,
                    state: "READY",
                    skip: t || !1,
                  });
              })();
            },
            methods: {
              log(e) {
                var t,
                  o = {
                    banner_id: this.getBannerId(),
                    order_no: this.promptData.orderNo,
                    popup_type:
                      null == (t = this.promptData.descTemplate)
                        ? void 0
                        : t.popupType,
                    component: "pending_payment_popup",
                  },
                  r = {
                    view: {
                      et: "view",
                      ei: "component_view",
                      en: "组件曝光",
                      params: o,
                    },
                    topay: {
                      et: "click",
                      ei: "pay_click",
                      en: "去支付点击",
                      params: o,
                    },
                    cancel: {
                      et: "click",
                      ei: "temporarily_abandon_click",
                      en: "点击暂时放弃",
                      params: o,
                    },
                  };
                this.ctx.logger.log(r[e]);
              },
              getBannerId(e) {
                void 0 === e && (e = 0);
                var t = h()(8);
                return (
                  this.ctx.logger.getSpm() +
                  "~pending_payment_popup~" +
                  e +
                  "~" +
                  t
                );
              },
              toPay() {
                this.log("topay"),
                  Object(d.f)({
                    pageType: d.b.PAY,
                    query: {
                      orderNo: this.promptData.orderNo,
                      banner_id: this.getBannerId(),
                    },
                  });
              },
              onOpen() {
                this.log("view"),
                  (this.innerShow = !0),
                  Object(a.g)("order-pay-prompt-popup", !0),
                  this.ctx.event.emit("stateChange", {
                    name: u,
                    state: "OPEN",
                  });
              },
              onClose() {
                this.log("cancel"),
                  (this.innerShow = !1),
                  this.ctx.event.emit("stateChange", {
                    name: u,
                    state: "CLOSE",
                  });
              },
              getOrderPayPrompt() {
                var e = this;
                p.a
                  .getOrderPayPrompt({ kdtId: this.kdtId, source: this.source })
                  .then(function (t) {
                    void 0 === t && (t = {}),
                      (e.remotePrompt = t),
                      t.popup
                        ? e.onOpen()
                        : (Object(a.g)("order-pay-prompt-popup", !0),
                          e.log("view"),
                          e.ctx.event.emit("stateChange", {
                            name: u,
                            state: "CLOSE",
                          }));
                  });
              },
              showPopup() {
                this.needRequest ? this.getOrderPayPrompt() : this.onOpen();
              },
            },
            ud: !0,
          },
          l = o("9ZMt");
        t.default = l.default.component(g);
      },
    }
  )
);
