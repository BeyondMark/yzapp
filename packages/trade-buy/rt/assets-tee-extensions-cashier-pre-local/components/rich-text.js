"use strict";
var r = require("~/r");
r(
  "ugDX",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    ugDX: function (e, t, s) {
      s.r(t);
      var n = s("Fcif"),
        r = s("2bgu"),
        u = s("NHEX"),
        i = s.n(u),
        a = {
          props: {
            segments: Array,
            context: Object,
            customClass: String,
            customStyle: String,
          },
          computed: {
            segmentsWithContext() {
              var { context: e = {} } = this;
              return this.segments && "string" == typeof this.segments
                ? [{ type: "text", value: this.segments }]
                : this.segments.map((t) =>
                    Object(n.a)({}, t, {
                      value:
                        t.value &&
                        t.value.replace(/{{ *([a-zA-Z0-9.]+) *}}/g, (t, s) =>
                          i()(e, s, "")
                        ),
                    })
                  );
            },
          },
          methods: {
            onClick(e) {
              "link" === e.type &&
                Object(r.b)({
                  url: e.link,
                  web: { type: "znb", znb: { url: e.link, skipSafeLink: !0 } },
                });
            },
          },
          ud: !0,
        },
        l = s("9ZMt");
      t.default = l.default.component(a);
    },
  })
);
