"use strict";
var r = require("~/r");
r(
  "UZ0f",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      UZ0f: function (e, t, s) {
        s.r(t);
        var i = s("+I+c"),
          a = s("Fcif"),
          o = s("9ZMt"),
          d = s("MLLI"),
          h = s("882d"),
          r = s("AGZf"),
          n = s("lgMb"),
          c = s("w2Y9"),
          g = s.n(c),
          l = s("FSSn"),
          p = s("Hb1V"),
          m = ["page"],
          u = {
            name: "poster-pop",
            props: {
              show: Boolean,
              kdtId: Number,
              offlineId: Number,
              rootKdtId: Number,
              alias: String,
              shareQuery: { type: Object, default: () => ({}) },
              needAddVideoIcon: Boolean,
              isShareStyle: Boolean,
              isWxShareImg: Boolean,
            },
            data: () => ({
              isLoaded: !1,
              previewImg: void 0,
              statusBarHeight: Object(d.b)().statusBarHeight,
              posterHeight: void 0,
              skeletonHeight: void 0,
            }),
            logicData: () => ({ scene: "", page: "" }),
            watch: {
              show(e) {
                e && this.doGetPoster();
              },
              alias(e, t) {
                t && e !== t && (this.isLoaded = !1);
              },
            },
            methods: {
              closePop() {
                this.$emit("close");
              },
              getAppParams(e) {
                var t = this.getPosterParams(),
                  s = "/pages/goods/detail/index",
                  i =
                    "weapp" === o.default.getEnv()
                      ? "pages/common/blank-page/index"
                      : s,
                  d = Object(a.a)({}, t, {
                    page: this.isShareStyle ? Object(p.c)(s) : s,
                  });
                t.activityId &&
                  t.type &&
                  (d.activityType = "helpcut" === t.type ? "helpCut" : t.type),
                  this.offlineId && (d.offlineId = this.offlineId);
                var h = this.rootKdtId || this.kdtId,
                  r = Object(a.a)({}, d, {
                    share_from: "poster",
                    kdtId: String(h),
                    guestKdtId: String(this.kdtId),
                    dcPs: t.dc_ps,
                  });
                return Object(a.a)({}, d, {
                  retry: e,
                  kdtId: h,
                  alias: this.alias,
                  page: this.isShareStyle ? Object(p.c)(i) : i,
                  scene: encodeURIComponent(JSON.stringify(r)),
                  isSupportHideUserInfo: !0,
                  noAuction: !0,
                  autoHeight: 1,
                  needAddVideoIcon: this.needAddVideoIcon ? 1 : 0,
                });
              },
              getWebParams(e) {
                var t = this.getPosterParams(),
                  s = window.location.href,
                  i = g.a.add(
                    this.isShareStyle ? Object(p.c)(s, this.alias) : s,
                    t
                  ),
                  o = Object(a.a)({}, t, {
                    retry: e,
                    alias: this.alias,
                    kdtId: this.kdtId,
                    url: encodeURIComponent(i),
                    needAddVideoIcon: this.needAddVideoIcon ? 1 : 0,
                  });
                return this.offlineId && (o.offlineId = this.offlineId), o;
              },
              doGetPoster(e) {
                (void 0 === e && (e = 0),
                this.isWxShareImg && wx.showLoading({ title: "正在生成海报" }),
                this.isLoaded)
                  ? this.isWxShareImg && this.showWxShareImg()
                  : ("web" === o.default.getEnv()
                      ? Object(l.e)(this.getWebParams(e))
                      : Object(l.c)(this.getAppParams(e))
                    )
                      .then((e) => {
                        var { imgUrl: t, page: s, scene: i } = e;
                        (this.previewImg = t),
                          (this.page = s),
                          (this.scene = i),
                          this.isWxShareImg && this.showWxShareImg(),
                          (this.isLoaded = !0);
                      })
                      .catch((t) => {
                        0 === e
                          ? setTimeout(() => {
                              this.doGetPoster(1);
                            }, 1e3)
                          : (this.closePop(),
                            Object(n.b)(t, {
                              message: "海报生成失败，请稍后重试",
                            }));
                      });
              },
              getPosterParams() {
                var e = this.$getPageQuery(),
                  t = this.toHumpObj(e);
                return Object(a.a)(
                  {},
                  e,
                  t,
                  { share_from: "poster" },
                  { kdtId: this.kdtId },
                  this.shareQuery
                );
              },
              clickSaveImage() {
                "ant" !== o.default.getEnv()
                  ? o.default.$native.getSetting({
                      success: (e) => {
                        !1 === e.authSetting["scope.writePhotosAlbum"]
                          ? this.showAuthModal()
                          : o.default.$native.downloadFile({
                              url: this.previewImg,
                              success: (e) => {
                                this.saveImg(e.tempFilePath);
                              },
                              fail: () => {
                                Object(r.a)({
                                  message: "图片下载失败，请稍后重试",
                                  position: "bottom",
                                });
                              },
                            });
                      },
                    })
                  : this.saveImg(this.previewImg);
              },
              saveImg(e) {
                Object(h.e)(e).then(() => {
                  Object(r.a)({ message: "保存成功", position: "bottom" });
                });
              },
              toHump: (e) =>
                e.replace(/_(\w)/g, function (e, t) {
                  return t.toUpperCase();
                }),
              toHumpObj(e) {
                var t = {};
                for (var s of Object.keys(e)) t[this.toHump(s)] = e[s];
                return t;
              },
              onPosterLoad(e) {
                this.posterHeight ||
                  (this.posterHeight = this.getImageHeight(e.detail)),
                  (this.isLoaded = !0);
              },
              onSkeletonLoad(e) {
                this.skeletonHeight ||
                  (this.skeletonHeight = this.getImageHeight(e.detail));
              },
              getImageHeight(e) {
                var { width: t = 0, height: s = 0 } = void 0 === e ? {} : e;
                if (0 != +t) {
                  var { windowWidth: i } = Object(d.b)();
                  return (
                    ((0.64 *
                      ("web" === o.default.getEnv() ? Math.max(540, i) : i)) /
                      t) *
                      s || void 0
                  );
                }
              },
              showWxShareImg() {
                wx.downloadFile({
                  url: this.previewImg,
                  success: (e) => {
                    var t = JSON.parse(this.scene),
                      { page: s } = t,
                      a = Object(i.a)(t, m),
                      o = g.a.add(s, a),
                      d = g.a.add(this.page, { weappSharePath: o });
                    wx.showShareImageMenu({
                      path: e.tempFilePath,
                      needShowEntrance: !0,
                      entrancePath: d,
                      success: () => {
                        Object(r.a)({
                          message: "操作成功",
                          position: "bottom",
                        });
                      },
                      fail: (e) => {
                        e.errMsg.includes("auth deny") && this.showAuthModal();
                      },
                      complete: this.closePop,
                    });
                  },
                  complete() {
                    wx.hideLoading();
                  },
                });
              },
              showAuthModal() {
                o.default.$native.showModal({
                  title: "无法保存",
                  content: "请前往开启“添加到相册”开关。",
                  cancelText: "取消",
                  confirmText: "前往",
                  success: (e) => {
                    e.confirm && o.default.$native.openSetting({});
                  },
                });
              },
            },
            ud: !0,
          };
        t.default = o.default.component(u);
      },
    }
  )
);
