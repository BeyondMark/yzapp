"use strict";
var r = require("~/r");
r(
  "wRe4",
  Object.assign({}, require("~/v.js").modules, {
    wRe4: function (t, e, a) {
      a.r(e);
      var s,
        n = a("Fcif"),
        r = a("w2Y9"),
        c = a.n(r);
      try {
        s = getApp();
      } catch (t) {}
      var o = {
          props: {
            sourceParam: Object,
            messagePath: String,
            messageImg: String,
            messageCard: Boolean,
          },
          data: () => ({
            contact: {},
            hasUserInfo: !1,
            shopImConfig: {},
            contentText: "在线客服",
          }),
          computed: {
            messageContact() {
              var {
                shopImConfig: t,
                sourceParam: e,
                messagePath: a,
                messageImg: r,
                messageCard: c,
              } = this;
              t.storeId = s.getOfflineId();
              var o = Object(n.a)({ endpoint: t.endpoint }, e);
              return (
                t.storeId && (o.site_id = t.storeId),
                Object(n.a)({ sourceParam: JSON.stringify(o) }, t, {
                  messagePath: a,
                  messageImg: r,
                  messageCard: c,
                })
              );
            },
          },
          created() {
            (this.unwatchContact = this.ctx.watch("contact", (t) => {
              (this.contact = t), this.setContentText(t);
            })),
              this.getImData(),
              this.checkUserInfo();
          },
          destroyed() {
            this.unwatchContact && this.unwatchContact();
          },
          methods: {
            onContactBack(t) {
              t && t.path && this.ctx.dmc.navigate(c.a.add(t.path, t.query));
            },
            setContentText(t) {
              void 0 === t && (t = {});
              var { imOrderText: e = "" } = t,
                a = {};
              try {
                a = JSON.parse(e);
              } catch (t) {
                a = {};
              }
              this.contentText = 1 === a.default ? a.label : "在线客服";
            },
            getImData() {
              s.getImData().then((t) => {
                this.shopImConfig = t;
              });
            },
            checkUserInfo() {
              this.ctx.lambdas.getUserInfo().then((t) => {
                this.hasUserInfo = !!t;
              });
            },
          },
          ud: !0,
        },
        h = a("9ZMt");
      e.default = h.default.component(o);
    },
  })
);
