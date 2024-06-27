"use strict";
var r = require("~/r");
r(
  "YNSQ",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      YNSQ: function (e, t, a) {
        a.r(t);
        var i = a("Fcif"),
          o = a("rqVN"),
          n = a("OPDa"),
          s = a("Jcqw"),
          r = a("RY8z"),
          d = a("1Uvd"),
          g = a("asq2"),
          p = a("JxL/"),
          c = a("Yfvy"),
          l = getApp(),
          { logger: u } = l;
        Object(o.b)({
          behaviors: [g.a, p.a],
          properties: {
            source: { type: Number, value: null },
            activeUmpId: { type: Number, value: 0 },
          },
          data: { visible: !1, detail: {} },
          attached() {
            (this.cloudLoggerInfo = Object(c.b)(
              "shop_ad_pop",
              Object(i.a)({}, this.getCloudLoggerInfo("ump_conference"))
            )),
              this.getMarketingConfig();
          },
          methods: {
            getMarketingConfig() {
              Object(s.a)()
                .then((e) => {
                  "1" === (null == e ? void 0 : e.bomb_window_enable)
                    ? (this.setYZData({ visible: !0 }),
                      u &&
                        u.log({
                          et: "view",
                          ei: "component_view",
                          en: "组件曝光",
                          params: {
                            component: "popup_ad",
                            banner_id: this.getBannerId(),
                          },
                        }),
                      u &&
                        u.log({
                          et: "view",
                          ei: "Ad_view",
                          en: "图片广告曝光",
                          si: l.getKdtId(),
                          params: Object(i.a)(
                            { component: "popup_ad" },
                            this.cloudLoggerInfo
                          ),
                        }))
                    : this.onOtherClose();
                })
                .catch((e) => {
                  this.onOtherClose();
                });
            },
            getAdImageInfo: () =>
              "https://img01.yzcdn.cn/upload_files/2021/05/31/FmpGwix9FOK03HKKGxtM9TnGRrJM.gif",
            onGoMarketingPage() {
              u &&
                u.log({
                  et: "click",
                  ei: "Ad_Click",
                  en: "图片广告打开次数",
                  si: l.getKdtId(),
                  params: Object(i.a)(
                    { component: "popup_ad" },
                    this.cloudLoggerInfo
                  ),
                });
              var e = "/packages/ext-marketing-page/index";
              this.data.activeUmpId && (e = e + "?id=" + this.data.activeUmpId),
                r.a.navigate({ url: e });
            },
            closeMarketingPagePop(e) {
              var { isClickClose: t } = e.detail || {};
              t ? this.onClickClose() : this.onOtherClose();
            },
            getBannerId: () =>
              n.a.getPageSpmTypeId() + "~popup_ad.0~0~" + Object(d.a)(8),
          },
        });
      },
    }
  )
);
