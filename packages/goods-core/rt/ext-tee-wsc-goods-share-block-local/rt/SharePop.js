"use strict";
var r = require("~/r");
r(
  "23nl",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      "23nl": function (t, e, s) {
        s.r(e);
        var i = s("Fcif"),
          o = s("bzce"),
          a = s("YeA1"),
          n = {
            props: {
              show: Boolean,
              opts: Object,
              platform: String,
              kdtId: Number,
            },
            data: () => ({ showComp: !1, actions: [], isAppSdk: !1 }),
            computed: {
              headerOpts() {
                var { text: t = "" } = this.opts;
                return Object(i.a)({}, this.opts, {
                  text: t || "立即分享给好友",
                });
              },
              actionsLen() {
                return this.actions.length;
              },
              topActions() {
                return this.actionsLen > 5
                  ? this.actions.slice(0, 3)
                  : this.actions;
              },
              bottomActions() {
                return this.actionsLen > 5
                  ? this.actions.slice(0, this.actionsLen)
                  : [];
              },
            },
            watch: {
              show(t) {
                t && (this.showComp = !0);
              },
            },
            created() {
              this.getAppSdk();
            },
            methods: {
              onItemClick(t) {
                this.$emit("share-item-click", t);
              },
              onClose() {
                this.$emit("close");
              },
              toLink() {
                var { link: t } = this.opts;
                t && Object(a.a)().dmc.navigate(t.pageName, t.query);
              },
              getActions() {
                var t = o.a.map((t) => {
                  var e = {};
                  return (
                    "native" === t.type &&
                      o.b[this.platform] &&
                      (e = Object(i.a)({}, o.b[this.platform])),
                    Object(i.a)({}, t, e)
                  );
                });
                "ttapp" === this.platform &&
                  (t = t.filter((t) => "poster" !== t.type)),
                  this.ctx.process
                    .invokePipe("setShareActions", t)
                    .then((t) => {
                      this.actions = t;
                    });
              },
              getAppSdk() {
                var t, e;
                (
                  (null == (t = this.ctx) || null == (e = t.lambdas)
                    ? void 0
                    : e.getAuthType) || Promise.resolve.bind(Promise)
                )()
                  .then((t) => {
                    "appsdk" === t && (this.isAppSdk = !0), this.getActions();
                  })
                  .catch(() => {
                    this.getActions();
                  });
              },
            },
            ud: !0,
          },
          r = s("9ZMt");
        e.default = r.default.component(n);
      },
    }
  )
);
