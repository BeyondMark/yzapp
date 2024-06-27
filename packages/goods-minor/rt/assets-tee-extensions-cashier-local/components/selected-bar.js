"use strict";
var r = require("~/r");
r(
  "MMBt",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      MMBt: function (t, e, r) {
        r.r(e);
        var n = r("tr7U"),
          o = r("NHEX"),
          s = r.n(o),
          i = n.d,
          u = {
            props: {
              channel: String,
              text: String,
              subtext: String,
              showIcon: Boolean,
              buttonText: String,
              instalment: { type: Object, required: !0 },
              themeColor: { type: String, default: "#f44" },
            },
            computed: {
              lowercase() {
                var t;
                return null == (t = this.channel) ? void 0 : t.toLowerCase();
              },
              classnames: () => ({
                root: i("root"),
                left: i("left"),
                icon: i("icon"),
                text: i("text"),
                subtext: i("subtext"),
                right: i("right"),
              }),
              formattedText() {
                var t;
                return null == (t = this.text)
                  ? void 0
                  : t.replace(/{{ *([a-zA-Z0-9.]+) *}}/g, (t, e) =>
                      s()(this, e, "")
                    );
              },
            },
            ud: !0,
          },
          l = r("9ZMt");
        e.default = l.default.component(u);
      },
    }
  )
);
