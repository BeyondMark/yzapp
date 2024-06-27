"use strict";
var r = require("~/r");
r(
  "Jh3d",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      Jh3d: function (e, i, o) {
        o.r(i);
        var t = o("Fcif"),
          n = o("rqVN"),
          d = o("2wjL"),
          r = o("tuFO"),
          s = o.n(r),
          g = o("of9M"),
          a = getApp(),
          c = a.getKdtId();
        Object(n.b)({
          attached() {
            c &&
              this.getShopConfig("guide_members_add_groups")
                .then((e) => {
                  var {
                      configs: { guide_members_add_groups: i },
                    } = e,
                    o = JSON.parse(i),
                    n =
                      1 === Number(o.open_membership) &&
                      0 !== o.liveCode.qrcode,
                    d = Number(null == o ? void 0 : o.sedimentation_channel);
                  this.setYZData({
                    liveCodeConfigs: Object(t.a)({}, o),
                    isOpen: n,
                    sedimentationChannel: d,
                  }),
                    n &&
                      a.logger &&
                      a.logger.log({
                        et: "view",
                        ei: "join_group_view",
                        en: "会员加群组件曝光",
                      });
                })
                .catch(() => {});
          },
          data: {
            liveCodeConfigs: {},
            isOpen: !1,
            sedimentationChannel: 0,
            personalWechat:
              "https://img01.yzcdn.cn/upload_files/2021/11/25/FhFEDAOAfLdcGp48ZEuHUI-r9l-1.png",
            groupWechat:
              "https://img01.yzcdn.cn/upload_files/2021/11/25/Fh9wCQjlWDerFbnXykFdEPCaLtbC.png",
          },
          methods: {
            getShopConfig: (e) =>
              g.k({ kdtId: c, shopConfig: JSON.stringify([e]) }),
            handleButtonClick() {
              a.logger &&
                a.logger.log({
                  et: "click",
                  ei: "join_group_click",
                  en: "会员加群组件点击",
                });
              var e = this.getH5QrCodeLink();
              wx.navigateTo({
                url:
                  "/pages/common/webview-page/index?src=" +
                  encodeURIComponent(e),
              });
            },
            getH5QrCodeLink() {
              var { liveCode: e } = this.data.liveCodeConfigs || {},
                { qrcode: i } = e,
                o = a.getKdtId();
              return s()(
                d.a.add("/v3/message/live-qrcode/member", {
                  kdtId: o,
                  activitiesId: i,
                }),
                "h5",
                o
              );
            },
          },
        });
      },
    }
  )
);
