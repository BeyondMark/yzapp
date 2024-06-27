"use strict";
var r = require("~/r");
r(
  "Vxcu",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Vxcu: function (e, s, t) {
      t.r(s);
      var i = t("u8kV"),
        r = t("8B9M"),
        a = Object(r.a)();
      Object(i.c)({
        externalClasses: ["btn-class"],
        properties: {
          isAuthorize: Boolean,
          subscribeScene: {
            type: String,
            observer(e) {
              e && this.getTemplateIds();
            },
          },
          scene: String,
        },
        methods: {
          handleBtnClick() {
            this.data.subscribeScene
              ? this.tmplIds
                ? this.handleSubscribeMessage()
                : this.getTemplateIds()
                    .then(() => {
                      this.handleSubscribeMessage();
                    })
                    .catch(() => {
                      this.triggerEvent("next", !0);
                    })
              : this.triggerEvent("next", !0);
          },
          getTemplateIds() {
            var e = this,
              { subscribeScene: s } = this.data;
            return a
              .request({
                path: "/wscump/common/get-template.json",
                data: { scene: s },
              })
              .then(function (s) {
                void 0 === s && (s = {}), (e.tmplIds = s.templateIdList || []);
              });
          },
          handleSubscribeMessage() {
            var e = this;
            wx.requestSubscribeMessage && this.tmplIds && this.tmplIds.length
              ? wx.requestSubscribeMessage({
                  tmplIds: this.tmplIds,
                  success() {
                    e.subscribeCallback();
                  },
                  fail(e) {},
                  complete() {
                    e.triggerEvent("next", !0);
                  },
                })
              : this.triggerEvent("next", !0);
          },
          subscribeCallback() {
            var { subscribeScene: e } = this.data;
            a.request({
              path: "/wscump/common/subscription-callback.json",
              data: { scene: e, templateIdList: this.tmplIds },
            });
          },
        },
      });
    },
  })
);
