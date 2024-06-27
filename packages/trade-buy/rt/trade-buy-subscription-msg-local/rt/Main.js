"use strict";
var r = require("~/r");
r(
  "A2+v",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      "A2+v": function (e, s, t) {
        t.r(s);
        var i = t("eijD"),
          c = t("LpYb"),
          r = t("KDJo"),
          h = t("YeA1"),
          o = getApp(),
          a = {
            data: () => ({
              templateIds: [],
              activityTemplateIds: [],
              showTips: !1,
              pageId: null,
              hasSubscribe: !1,
              showWxSubscribe: !1,
              isWscSingleStore: !1,
              isInWhiteList: !1,
            }),
            created() {
              Object(h.b)(this, {
                kdtId: (e) => {
                  Object(c.b)(e).then((e) => {
                    (this.isWscSingleStore = Object(r.e)(e)),
                      this.isWscSingleStore &&
                        (this.fetchTemplateIds(),
                        (this.pageId = 3),
                        this.queryWechatSubscribeResult());
                  });
                },
                showWxSubscribe: (e) => {
                  this.showWxSubscribe = e;
                },
              }),
                this.ctx.process.define(
                  "showSubscription",
                  this.showSubscription
                );
            },
            methods: {
              fetchTemplateIds() {
                Object(c.c)({ scene: "afterPaySuccess" }).then((e) => {
                  this.templateIds =
                    (null == e ? void 0 : e.templateIdList) || [];
                });
              },
              showSubscription() {
                var {
                    templateIds: e = [],
                    activityTemplateIds: s = [],
                    isWscSingleStore: t,
                    showWxSubscribe: i,
                  } = this,
                  c = this.isInWhiteList
                    ? [].concat(
                        (e || []).filter((e) => !!e),
                        s || []
                      )
                    : e;
                return (this.isInWhiteList ? c.length : t) && i
                  ? new Promise((e) => {
                      this.isInWhiteList,
                        this.requestSubscribeMessagePush(c, e);
                    })
                  : Promise.resolve();
              },
              requestSubscribeMessagePush(e, s) {
                this.ctx.process.invokePipe("requestSubscribeMessagePush", {
                  templates: e,
                  onFail: (e) => {
                    o.logger.requestError({
                      name: "wxSubscribeError",
                      message: "订阅微信通知失败",
                      alert: "info",
                      detail: e,
                    }),
                      s();
                  },
                  onSuccess: (e) => {
                    JSON.stringify(e).indexOf("accept") > -1
                      ? ((this.hasSubscribe = !0),
                        this.ctx.logger &&
                          this.ctx.logger.log({
                            et: "click",
                            ei: "allow_click",
                            en: "点击允许",
                            pt: "trade",
                          }))
                      : this.ctx.logger &&
                        this.ctx.logger.log({
                          et: "click",
                          ei: "cancle_click",
                          en: "点击取消",
                          pt: "trade",
                        }),
                      this.ctx.process.invoke("mutateState", (e) => {
                        e.changeSubscribe = !0;
                      }),
                      s();
                  },
                  onShowTips: () => {
                    this.showTips = !0;
                  },
                  onCloseTips: () => {
                    this.showTips = !1;
                  },
                });
              },
              queryWechatSubscribeResult() {
                var e = this;
                return Object(i.a)(function* () {
                  (e.isInWhiteList = yield Object(c.a)()),
                    e.isInWhiteList &&
                      e.ctx.process
                        .invokePipe("queryWechatSubscribeResult", e.pageId)
                        .then(function (s) {
                          var { templateList: t = [] } = void 0 === s ? {} : s;
                          t instanceof Array &&
                            t.length &&
                            (e.activityTemplateIds = t.filter(
                              (e) => !!e && !!e.templateId
                            ));
                        });
                })();
              },
              closeTips() {
                this.showTips = !1;
              },
            },
            ud: !0,
          },
          l = t("9ZMt");
        s.default = l.default.component(a);
      },
    }
  )
);
