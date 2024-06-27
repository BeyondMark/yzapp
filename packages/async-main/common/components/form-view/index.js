"use strict";
var r = require("~/r");
r(
  "u7zR",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    u7zR: function (e, t, r) {
      r.r(t);
      var s = r("Fcif"),
        i = r("u8kV"),
        a = r("jA1y");
      Object(i.c)({
        properties: {
          type: String,
          openType: String,
          customBtnStyle: String,
          disabled: Boolean,
        },
        externalClasses: ["btn-class"],
        methods: {
          submit(e) {
            var { detail: t } = e,
              r = t.formId;
            if (r) {
              this.triggerEvent("report", t);
              var { disabled: i, type: d } = this.data;
              if (!i) {
                var o = { weapp_type: "custom", form_id: r };
                Object(a.b)({
                  api: "wsc.weapp.formid/1.0.0/add",
                  data: d ? Object(s.a)({}, o, { business_module: d }) : o,
                });
              }
            }
          },
        },
      });
    },
  })
);
