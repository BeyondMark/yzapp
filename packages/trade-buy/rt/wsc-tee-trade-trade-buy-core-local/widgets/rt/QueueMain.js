"use strict";
var r = require("~/r");
r(
  "fOkC",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      fOkC: function (e, r, t) {
        t.r(r);
        var a = t("YeA1"),
          o = t("PfmZ"),
          p = t("g3wL"),
          i = {
            data: () => ({
              limitOrder: { limitCreate: !1 },
              asyncOrder: !1,
              retailLoading: !1,
            }),
            created() {
              Object(a.b)(this, ["limitOrder", "asyncOrder", "retailLoading"]);
            },
            mounted() {
              try {
                this.initPageStyle();
              } catch (e) {}
              Object(o.f)(() => this.$refs["bill-core-toast"]),
                Object(o.e)(this.$refs["bill-core-dialog"]);
            },
            methods: {
              initPageStyle() {
                var e = [
                  [
                    "--dialog-border-radius",
                    "var(--theme-radius-dialog, 16px)",
                  ],
                  [
                    "--popup-round-border-radius",
                    "var(--theme-radius-dialog, 16px)",
                  ],
                  ["--button-border-radius", "var(--theme-radius-button, 2px)"],
                  [
                    "--button-round-border-radius",
                    "var(--theme-radius-button, 999px)",
                  ],
                  [
                    "--tag-round-border-radius",
                    "var(--theme-radius-tag, 999px)",
                  ],
                  [
                    "--stepper-input-margin-right",
                    "var(--theme-page-stepper-input-margin-right)",
                  ],
                  [
                    "--stepper-input-margin-left",
                    "var(--theme-page-stepper-input-margin-left)",
                  ],
                  [
                    "--stepper-border-width",
                    "var(--theme-page-stepper-border-width)",
                  ],
                  [
                    "--stepper-border-style",
                    "var(--theme-page-stepper-border-style)",
                  ],
                  [
                    "--stepper-border-color",
                    "var(--theme-page-stepper-border-color)",
                  ],
                  [
                    "--stepper-background-color",
                    "var(--theme-page-stepper-background-color)",
                  ],
                  [
                    "--stepper-background-color-disabled",
                    "var(--theme-page-stepper-background-color-disabled)",
                  ],
                  [
                    "--stepper-border-top-left-radius",
                    "var(--theme-page-stepper-border-top-left-radius)",
                  ],
                  [
                    "--stepper-border-bottom-left-radius",
                    "var(--theme-page-stepper-border-bottom-left-radius)",
                  ],
                  [
                    "--stepper-border-top-right-radius",
                    "var(--theme-page-stepper-border-top-right-radius)",
                  ],
                  [
                    "--stepper-border-bottom-right-radius",
                    "var(--theme-page-stepper-border-bottom-right-radius)",
                  ],
                ]
                  .map((e) => e[0] + ":" + e[1] + ";")
                  .join("");
                this.$root.setPageStyle && this.$root.setPageStyle(e);
              },
              onCancelLimit() {
                Object(p.d)(this.ctx);
              },
            },
            ud: !0,
          },
          d = t("9ZMt");
        r.default = d.default.component(i);
      },
    }
  )
);
