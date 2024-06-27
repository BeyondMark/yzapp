"use strict";
var r = require("~/r");
r(
  "97D6",
  Object.assign(
    {},
    require("../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "97D6": function (t, a, e) {
        e.r(a);
        var i = e("Fcif"),
          o = e("2wjL"),
          s = e("O3h0"),
          r = e("qJXH"),
          h = e("N2ab"),
          n = e("DXKY"),
          p = e("amjV");
        Object(r.a)({
          data: {
            info: {},
            showNavBar: !1,
            navBarHeight: 0,
            pageOverflow: "auto",
            contentRadius: !0,
            contentTop: 0,
            applyPopup: { show: !1, info: {} },
            appliedPopupShow: !1,
            error: { show: !1, tips: "" },
            hiddenPage: !0,
            themeColor: "#C8A65F",
            bgImgPosition: "fixed",
            promoterId: "",
          },
          onLoad(t) {
            var a = o.a.add("/" + this.route, t);
            (this.$_pageLink = a),
              (this.$_options = t),
              this.init(t),
              Promise.all([this.getActiveDetail(), Object(s.a)()]).then((t) => {
                var [, a] = t;
                this.setYZData({ hiddenPage: !1, themeColor: a }),
                  setTimeout(() => {
                    this.getNavBarHeight();
                  }, 200);
              });
          },
          init(t) {
            p.a.init(t),
              p.a.mobile && this.setYZData({ mobile: p.a.mobile }),
              this.setYZData({ promoterId: t.promoter_id });
          },
          getNavBarHeight() {
            var { statusBarHeight: t } = wx.getSystemInfoSync();
            this.setYZData({ navBarHeight: 46 + t });
            var a = wx.createSelectorQuery();
            a.select("#activity-content").boundingClientRect(),
              a.exec((t) => {
                if (t && t.length) {
                  var { top: a = 0 } = t[0] || {};
                  this.setYZData({ contentTop: a });
                }
              });
          },
          appliedPopupClose() {
            this.setYZData({ pageOverflow: "auto", appliedPopupShow: !1 });
          },
          goHome() {
            wx.reLaunch({ url: "/pages/home/dashboard/index" });
          },
          setErrorData(t, a) {
            void 0 === a && (a = !0),
              this.setYZData({ hiddenPage: !1, error: { show: a, tips: t } });
          },
          getActiveDetail() {
            var { alias: t, promoter_id: a } = this.$_options;
            if (t)
              return Object(h.a)({ alias: t, promoterId: a })
                .then(
                  (t) => (
                    (t.fullscreen = 1),
                    (p.a.activeInfo = t),
                    this.setYZData({ info: t })
                  )
                )
                .catch((t) => {
                  this.setErrorData(t.message || t.msg);
                });
            this.setErrorData("链接解析失败");
          },
          showSubmitPopup(t) {
            var { currentTarget: a, detail: e } = t,
              o = a.dataset.flag,
              { applyPopup: s } = this.data;
            (s.show = o),
              o
                ? ((s.info = Object(i.a)({}, this.data.info)),
                  (s.info.mobile = p.a.mobile || e.mobile),
                  this.setYZData({ applyPopup: s, pageOverflow: "hidden" }),
                  p.a.mobile ||
                    ((p.a.mobile = e.mobile),
                    this.setYZData({ mobile: e.mobile })))
                : this.setYZData({ applyPopup: s, pageOverflow: "auto" });
          },
          afterSubmit(t) {
            this.getActiveDetail(),
              this.setYZData({
                pageOverflow: "auto",
                applyPopup: { show: !1 },
              }),
              t.detail &&
                (this.setYZData({
                  pageOverflow: "hidden",
                  appliedPopupShow: !0,
                }),
                n.a.trigger("wine-tasting:applySuccess"));
          },
          onShareAppMessage() {
            var { title: t, coverPicUrlStr: a } = this.data.info || {};
            return { path: this.$_pageLink, title: t, imageUrl: a };
          },
          onShareTimeline() {
            var { title: t, coverPicUrlStr: a } = this.data.info || {};
            return { query: this.$_options, title: t, imageUrl: a };
          },
          onPageScroll(t) {
            t.scrollTop >= this.data.contentTop - this.data.navBarHeight
              ? (!this.data.showNavBar && this.setYZData({ showNavBar: !0 }),
                this.data.contentRadius &&
                  this.setYZData({ contentRadius: !1 }))
              : (!this.data.contentRadius &&
                  this.setYZData({ contentRadius: !0 }),
                this.data.showNavBar && this.setYZData({ showNavBar: !1 })),
              t.scrollTop <= -2
                ? "fixed" === this.data.bgImgPosition &&
                  this.setYZData({ bgImgPosition: "absolute" })
                : "absolute" === this.data.bgImgPosition &&
                  this.setYZData({ bgImgPosition: "fixed" });
          },
        });
      },
    }
  )
);
