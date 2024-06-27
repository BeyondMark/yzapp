"use strict";
var r = require("~/r");
r(
  "XX6o",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      XX6o: function (e, s, t) {
        t.r(s);
        var r = t("cxIV"),
          o = {
            mixins: [],
            props: { businessModule: { type: String, value: "" } },
            data: () => ({}),
            methods: {
              onButtonTap(e) {
                var s = e.detail.formId || "";
                this.createFormId({
                  weapp_type: "custom",
                  form_id: s,
                  business_module: this.businessModule,
                });
              },
              createFormId(e, s, t) {
                Object(r.a)(e)
                  .then((e) => {
                    s && s(e);
                  })
                  .catch((e) => {
                    t && t(e.msg, e);
                  });
              },
            },
            ud: !0,
          },
          u = t("9ZMt");
        s.default = u.default.component(o);
      },
    }
  )
);
