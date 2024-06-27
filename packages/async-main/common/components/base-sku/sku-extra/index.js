"use strict";
var r = require("~/r");
r(
  "xM/L",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "xM/L": function (e, s, t) {
        t.r(s);
        var a = t("u8kV"),
          r = t("4k4N");
        Object(a.c)({
          behaviors: [r.a],
          properties: { extra: { type: Object } },
          data: { chosen: "", msgValue: "", isShowField: !1 },
          methods: {
            onSelect(e) {
              var { dataset: s } = e.currentTarget,
                { value: t = "" } = s,
                { blessingMessage: a } = this.data.extra;
              this.setYZData({
                chosen: t,
                msgValue: a[t],
                isShowField: !!a[t],
              }),
                this.sync();
            },
            onInput(e) {
              var s = e.detail;
              this.setYZData({ msgValue: s }), this.sync();
            },
            sync() {
              var { chosen: e, msgValue: s, extra: t } = this.data,
                { customerRelation: a } = t;
              this.triggerEvent("onChooseRelation", {
                BIRTHDAY_RELATION_NET_ORDER_MARK: "true",
                RELATION_TYPE_NAME: a[e],
                RELATION_BLESSING: s,
                RELATION_TYPE_ID: e,
              });
            },
          },
        });
      },
    }
  )
);
