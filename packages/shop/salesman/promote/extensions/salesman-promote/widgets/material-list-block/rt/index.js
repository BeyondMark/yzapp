"use strict";
var r = require("~/r");
r(
  "A1x3",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      A1x3: function (e, a, t) {
        t.r(a);
        var i = t("Fcif"),
          r = t("VmHG"),
          s = t("7/pW"),
          o = t("6i0Q"),
          l = t("we3t"),
          d = t("/JLS"),
          h = t("hHpg"),
          c = t("WOkX"),
          n = t("26EH"),
          m = t("RJZ0"),
          u = t("2ncY"),
          v = t("gcCW"),
          b = getApp();
        Object(s.a)({
          name: "MaterialList",
          attached() {
            Object(r.d)(this, [
              "syncShareToZone",
              "displayPop",
              "materials",
              "videoSrcs",
              "showMoreMaterial",
              "hasPersonalSpaceAbility",
              "kdtId",
              "itemId",
              "sl",
            ]),
              Object(r.b)(this, [
                "changeMaterialCheckStatus",
                "publishMaterial",
                "setVideoSrc",
                "setTrackLooger",
              ]);
          },
          data: { themeMainBgColor: "", showSaveTip: !1, tipsData: [] },
          created() {
            o.a.getThemeColor("main-bg").then((e) => {
              this.setData({ themeMainBgColor: e });
            });
          },
          methods: {
            handleChangeCheck(e) {
              var { material: a = {} } = e.currentTarget.dataset,
                { id: t, syncShareToZone: i } = a;
              this.setTrackLooger(v.b.shareStory, {
                materialId: t,
                syncShareToZone: i,
              }),
                this.changeMaterialCheckStatus(a);
            },
            handleGetMore(e) {
              var { currentTarget: a } = e,
                { query: t } = a.dataset;
              Object(l.k)(Object(u.h)(u.c, t));
            },
            handleGetSrc(e) {
              this.setVideoSrc && this.setVideoSrc(e.detail);
            },
            onClose() {
              this.setData({ showSaveTip: !1 });
            },
            handleSave(e) {
              var { material: a = {} } = e.currentTarget.dataset,
                { imageList: t, videoData: r, id: s } = a,
                o = Object(i.a)({}, a, {
                  syncShareToZone:
                    a.syncShareToZone && this.data.hasPersonalSpaceAbility,
                });
              this.setTrackLooger(v.b.copyMaterial, { materialId: s });
              var l = [this.publishMaterial(o), this.setClipboardData(a)];
              if (
                (t.length > 0 && l.push(this.saveImage(t)),
                r.video && r.video.video_id)
              ) {
                var { video_id: d } = r.video,
                  h = this.data.videoSrcs.find((e) => e.id === d);
                h && l.push(this.saveVideo(h.src));
              }
              Promise.all(l).then((e) => {
                var a = Object(n.e)(e);
                this.setData({ showSaveTip: !0, tipsData: a });
              });
            },
            setClipboardData(e) {
              return new Promise((a) => {
                var t = "",
                  { sl: i } = this.data,
                  r = this.handleLinkMaterial(e),
                  s = "",
                  { id: o, text: d = "" } = e,
                  h = b.getKdtId();
                if (Object(l.e)(e, "item.goodsInfo")) {
                  var m = {
                    banner_id: Object(n.d)({ materialId: o, spm: "salesMtrl" }),
                    sub_kdt_id: h,
                  };
                  (t = l.b.add(e.item.goodsInfo.itemUrl, m)),
                    i && (t = Object(c.a)({ url: t, sl: i }));
                }
                if (r) {
                  var { alias: u } = r,
                    { url: v } = Object(n.c)({
                      alias: u,
                      materialType: e.materialType,
                      kdtId: h,
                    });
                  (s = v), i && (s = Object(c.a)({ url: s, sl: i }));
                }
                var p = t || s;
                return this.handleUrlToShort(p).then((e) => {
                  var { res: t } = e,
                    i = t || p,
                    r = "" + d + (d && i ? "\n" : "") + i;
                  wx.setClipboardData({
                    data: r,
                    success: () => {
                      a({ type: "copy", status: 1 });
                    },
                  });
                });
              });
            },
            handleUrlToShort: (e) =>
              e
                ? Object(m.d)({ url: e }).catch(() => ({ res: e }))
                : Promise.resolve({ res: "" }),
            handleLinkMaterial(e) {
              var {
                featureMaterial: a,
                shopNoteMaterial: t,
                materialType: i,
              } = e;
              return d.c === i ? t : d.a === i ? a : void 0;
            },
            saveImage: (e) =>
              new Promise((a) => {
                var t = [];
                e.forEach((e) => {
                  t.push(Object(n.a)(e));
                }),
                  Promise.all(t)
                    .then(() => {
                      a({ type: "image", status: 1 });
                    })
                    .catch(() => {
                      a({ type: "image", status: 0 });
                    });
              }),
            saveVideo: (e) =>
              new Promise((a) => {
                Object(n.b)(e)
                  .then(() => {
                    a({ type: "video", status: 1 });
                  })
                  .catch((e) => {
                    var t = Object(l.e)(e, "errMsg", "下载视频失败");
                    "downloadFile:fail exceed max file size" === t &&
                      (t = "不支持下载超过50MB的视频"),
                      "downloadFile:fail createDownloadTask:fail url not in domain list" ===
                        t && (t = "该视频暂不支持下载"),
                      "downloadFile:fail url not in domain list" === t &&
                        (t = "该视频暂不支持下载"),
                      a({ type: "video", status: 0 }),
                      Object(h.a)({ message: t, duration: 4e3 });
                  });
              }),
          },
        });
      },
    }
  )
);
