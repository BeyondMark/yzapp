"use strict";
var r = require("~/r");
r(
  "5rXI",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "5rXI": function (e, t, s) {
      s.r(t);
      var r = s("Fcif"),
        n = s("2bgu"),
        i = s("NHEX"),
        u = s.n(i),
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
                    Object(r.a)({}, t, {
                      value:
                        t.value &&
                        t.value.replace(/{{ *([a-zA-Z0-9.]+) *}}/g, (t, s) =>
                          u()(e, s, "")
                        ),
                    })
                  );
            },
          },
          methods: {
            onClick(e) {
              "link" === e.type &&
                Object(n.b)({
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
