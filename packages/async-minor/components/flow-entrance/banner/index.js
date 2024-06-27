"use strict";
var r = require("~/r");
r(
  "kitW",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      kitW: function (e, r, t) {
        t.r(r);
        var a = t("AYYc"),
          n = t("rGNL"),
          i = getApp();
        Component({
          behaviors: [n.a],
          externalClasses: ["custom-class"],
          properties: { bizName: { type: String, value: "" } },
          data: {
            info: null,
            bannerStyle: "",
            componentName: "flow_entrance_banner",
          },
          attached() {
            this.getInfo();
          },
          methods: {
            getInfo() {
              var { bizName: e } = this.data;
              Object(a.a)({ bizName: e, kdtId: i.getKdtId() }).then((e) => {
                var { open: r = !1, info: t = null } = e,
                  a = r && t ? t : null;
                if (a) {
                  var { bannerStyle: n = "" } = a;
                  this.setData({ info: a, bannerStyle: n }),
                    this.traggerLogger(
                      "view",
                      "flow_entrance_banner_view",
                      "流量入口图片曝光"
                    );
                }
              });
            },
            traggerClickLogger() {
              this.traggerLogger(
                "click",
                "flow_entrance_banner_click",
                "流量入口图片点击"
              );
            },
          },
        });
      },
    }
  )
);
