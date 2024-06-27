"use strict";
var r = require("~/r");
r(
  "wuan",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      wuan: function (e, t, a) {
        a.r(t);
        var s = a("zwWb"),
          l = a("lOyf"),
          i = a("gNlG"),
          o = a("Eagg"),
          r = a("AYYc"),
          c = a("rGNL"),
          n = getApp(),
          h = Object(l.a)();
        Component({
          properties: { bizName: String, closeable: Boolean },
          behaviors: [i.a, c.a],
          data: {
            info: null,
            hidden: !1,
            isClosed: !0,
            closeKey: "",
            isIphoneX: h,
            iconStyle: "",
            componentName: "flow_entrance_icon",
            isChannels: Object(o.b)(),
          },
          attached() {
            Object(o.b)() ||
              ((this.scrollTop = 0),
              this.cpmputedStatus(),
              this.getInfo(),
              (this.pageKey = this.setPageScrollControlSubscribe(
                this.scrollHandler,
                this
              )));
          },
          methods: {
            scrollHandler(e) {
              this.__handleScroll ||
                (this.__handleScroll = Object(s.a)(this.handleScroll, 300)),
                this.__handleScroll(e);
            },
            handleScroll(e) {
              var { scrollTop: t } = e,
                { isClosed: a, hidden: s } = this.data;
              if (!a) {
                var l = t - this.scrollTop,
                  i = s;
                t <= 0 && (i = !1),
                  l < 0 ? (i = !1) : l > 50 && (i = !0),
                  (this.scrollTop = t),
                  i !== s && this.setData({ hidden: i });
              }
            },
            cpmputedStatus() {
              var { bizName: e, closeable: t } = this.data,
                a = "FLOW_ICON_CLOSED_" + e + "_" + n.getKdtId(),
                s = !1;
              t && (s = !!wx.getStorageSync(a));
              this.setData({ isClosed: s, closeKey: a });
            },
            getInfo() {
              var { bizName: e } = this.data;
              Object(r.a)({ bizName: e, kdtId: n.getKdtId() }).then((e) => {
                var { open: t = !1, info: a = null } = e,
                  s = t && a ? a : null;
                if (s) {
                  var { iconStyle: l = "" } = s;
                  this.setData({ info: s, iconStyle: l }),
                    this.traggerLogger(
                      "view",
                      "flow_entrance_icon_view",
                      "流量入口图标曝光"
                    );
                }
              });
            },
            handleClose() {
              var { closeKey: e, closeable: t } = this.data;
              t && wx.setStorage({ key: e, data: 1 }),
                this.setData({ isClosed: !0 });
            },
            traggerClickLogger() {
              this.traggerLogger(
                "click",
                "flow_entrance_icon_click",
                "流量入口图标点击"
              );
            },
          },
        });
      },
      zwWb: function (e, t, a) {
        var s = a("Ix7h");
        t.a = s.a;
      },
    }
  )
);
