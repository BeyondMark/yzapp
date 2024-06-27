"use strict";
var r = require("~/r");
r(
  "onjx",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    onjx: function (t, e, a) {
      a.r(e);
      var i = a("Fcif"),
        r = a("eijD"),
        s = a("qJXH"),
        n = a("2wjL"),
        l = a("lRMv"),
        d = a("jA1y"),
        c = a("w2Y9"),
        h = a.n(c),
        o = getApp(),
        g = o.getKdtId(),
        u =
          "https://img01.yzcdn.cn/upload_files/2022/08/31/FkLwds8LqK0gMI2UMkyCEVBzWLkb.png!small.webp";
      Object(s.b)({
        data: {
          activityDetailUrl: "",
          isWxVideo: !1,
          activityInfo: {},
          activityQuery: {},
        },
        onLoad(t) {
          var e = this;
          return Object(r.a)(function* () {
            try {
              if (null != t && t.wxVideo && null != t && t.activityId) {
                var a = yield e.getShareActivity({
                  activityId: null == t ? void 0 : t.activityId,
                });
                if (
                  3 != +(null == a ? void 0 : a.stage) &&
                  2 == +(null == a ? void 0 : a.shareEncourageType)
                ) {
                  var r = decodeURIComponent(t.wxVideo),
                    s = h.a.get("alias", r) || "",
                    d = (null == t ? void 0 : t.featureDetailId) || 0;
                  try {
                    if (!d) {
                      var c = yield e.getFeatureDetail({ kdt_id: g, alias: s });
                      d = (null == c ? void 0 : c.id) || 0;
                    }
                    if (d) {
                      var v = yield e.getFeatureSetting({
                          kdtId: g,
                          pageType: "micropage",
                          pageId: d,
                        }),
                        { shareTitle: y = "", iconUrl: p = "" } = v;
                      e.shareConfig = {
                        title: y || "分享有礼",
                        imageUrl: p ? p + "!small.webp" : u,
                        path: r,
                      };
                    } else
                      e.shareConfig = {
                        title: "分享有礼",
                        imageUrl: u,
                        path: r,
                      };
                  } catch (t) {
                    e.shareConfig = { title: "分享有礼", imageUrl: u, path: r };
                  }
                  return void e.setYZData({
                    isWxVideo: !0,
                    activityInfo: a,
                    activityQuery: t,
                  });
                }
              }
              null != t &&
                t.activityId &&
                o
                  .request({
                    path: "/wscindustry/share-encourage/getShareSetting.json",
                    data: { activityId: null == t ? void 0 : t.activityId },
                  })
                  .then((t) => {
                    var { shareTitle: a, shareDesc: r, bannerImageUrl: s } = t,
                      n = s ? { imageUrl: s } : {};
                    e.settingConfig = Object(i.a)({ title: a, desc: r }, n);
                  })
                  .catch(() => {});
            } catch (t) {}
            var f = n.a.add("/" + e.__route__, t);
            Object(l.g)(Object(i.a)({}, t, { redirectUrl: f })).then(() => {
              var a = "/wscindustry/share-encourage/activity-detail";
              null != t &&
                t.goMyReward &&
                (a = "/wscindustry/share-encourage/my-reward"),
                e.setYZData({
                  activityDetailUrl: n.a.add(
                    a,
                    Object(i.a)({}, t, { kdtId: o.getKdtId() })
                  ),
                });
            });
          })();
        },
        onShareAppMessage() {
          var t;
          if (null != this && null != (t = this.shareConfig) && t.path)
            return {
              path: this.shareConfig.path,
              title: this.shareConfig.title,
              imageUrl: this.shareConfig.imageUrl,
            };
          var { route: e, options: a } = this;
          a.wxVideo && delete a.wxVideo;
          var r = n.a.add(e, Object(i.a)({}, a, { shopAutoEnter: 1 }));
          return null != this && this.settingConfig
            ? Object(i.a)({}, this.settingConfig, { path: r })
            : {
                title: "我正在参与分享有礼，分享即得奖励，快来看看吧！",
                path: r,
              };
        },
        setShareTag(t) {
          var {
            detail: { shareTag: e },
          } = t;
          e &&
            (this.shareConfig.path = this.shareConfig.path + "&shareTag=" + e);
        },
        getShareActivity: (t) =>
          Object(d.c)({
            path: "/wscindustry/share-encourage/getActivity.json",
            data: t,
          }).then((t) => t),
        getFeatureDetail: (t) =>
          Object(d.c)({ path: "/wscdeco/feature-detail.json", data: t }).then(
            (t) => t
          ),
        getFeatureSetting: (t) =>
          Object(d.c)({
            path: "/wscshop/showcase/share/setting.json",
            data: t,
          }).then((t) => t),
      });
    },
  })
);
