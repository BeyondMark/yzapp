"use strict";
var r = require("~/r");
r(
  "p2Br",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      p2Br: function (e, o, t) {
        t.r(o);
        var r = t("zf/e"),
          a = t("Tewj"),
          n = t("NHEX"),
          s = t.n(n),
          p = t("lgMb"),
          i = {
            name: "launch-reservation-qrcode",
            props: {
              themeVars: String,
              shopBaseInfo: Object,
              shopMpInfo: Object,
            },
            data: () => ({
              shopData: {},
              show: !1,
              weixinTempQrData: {},
              popupTitle: "预约抢购通知",
            }),
            created() {
              var e = this;
              a.default.on("popupContainer:qrcode:show", function (o) {
                void 0 === o && (o = {});
                var { title: t, content: a } = o;
                if ((t && (e.popupTitle = t), e.weixinTempQrData.qrcodeUrl))
                  e.show = !0;
                else {
                  var { kdtId: n } = e.shopBaseInfo,
                    i = s()(e.shopMpInfo, "id", 0);
                  Object(r.a)({
                    kdtId: n,
                    mpId: i,
                    channel: "goods",
                    content: a || {},
                  })
                    .then(function (o) {
                      void 0 === o && (o = {}),
                        (e.weixinTempQrData = o),
                        o.qrcodeUrl && (e.show = !0);
                    })
                    .catch((e) => {
                      Object(p.b)(e, {
                        message: "店铺二维码获取失败，请稍后重试",
                      });
                    });
                }
              });
            },
            destroyed() {
              a.default.off("popupContainer:qrcode:show");
            },
            methods: {
              hidePopUpMore() {
                this.show = !1;
              },
            },
            ud: !0,
          },
          d = t("9ZMt");
        o.default = d.default.component(i);
      },
    }
  )
);
