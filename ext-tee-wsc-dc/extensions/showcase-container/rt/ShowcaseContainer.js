"use strict";
var r = require("~/r");
r(
  "0yIR",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "0yIR": function (e, t, i) {
      i.r(t);
      var o = i("+I+c"),
        a = i("Fcif"),
        n = i("9ZMt"),
        s = i("KrsW"),
        r = i("MLLI"),
        l = i("GFyo"),
        d = i("US/N"),
        c = i("Tewj"),
        h = i("zMoS"),
        u = i("taYb"),
        p = i("OK7I"),
        g = (e, t) => {
          e = Object(e);
          var i = {};
          return (
            Object.keys(e).forEach((o) => {
              var a = e[o];
              i[t(a, o, e)] = a;
            }),
            i
          );
        },
        m = (e, t) => {
          for (var i = -1, o = t.length, a = {}; ++i < o; ) {
            var n = t[i],
              s = n.split(".").pop(),
              r = Object(h.a)(e, n);
            a[s] = r;
          }
          return a;
        },
        v = i.n(p)()(8),
        _ = {
          ump_seckill: "seckill",
          ump_limitdiscount: "limitdiscount",
          goods_recommend: "recommend",
          cube_v3: "cube",
          image_text_nav: "image_nav",
          coupon: "promocard",
          ump_reward: "meetReduce",
        },
        f = {
          goods: "size",
          tag_list_top: ["size"],
          tag_list_left: ["size"],
          recommend: ["goods_components.size"],
          seckill: ["size"],
          groupon: ["size", "groupon_type"],
          limitdiscount: ["layout"],
          shop_banner_weapp: ["store_info_style"],
          image_ad: (e) => {
            var t = {},
              i = Object(h.a)(e, "show_method", 0);
            if (
              ((t.components_style_show_method = i),
              (t.components_style_size = Object(h.a)(e, "size", 0)),
              7 == +i)
            ) {
              var o = Object(h.a)(e, "sub_entry[0].hot_areas", !1);
              t.components_style_is_hotarea = o ? 1 : 0;
            }
            var a = Object(h.a)(e, "imgs", []);
            return (
              a.forEach((e) => {
                "video_number_dynamic" === (null == e ? void 0 : e.link_type) &&
                  (t.imgs = a);
              }),
              t
            );
          },
          image_nav: ["show_method", "slide_setting"],
          audio: ["style"],
          points_goods: ["size"],
          period_buy: ["size"],
          goods_new: ["layout"],
          bargain: ["size"],
          social_fans: (e) => {
            var t = "",
              { scene: i, sub_type: o } = e || {};
            return (
              2 == +o
                ? (t = 3)
                : "WeiXin" === i
                ? (t = 2)
                : "WeiXinGroup" === i && (t = 1),
              { sub_type: t }
            );
          },
        },
        y = (e) => _[e] || e,
        b = (e, t, i, o) => {
          var n = u.a.toSnakeCase(e),
            s = y(n.type || n.item_type),
            r = o + "~" + s + "." + (t + 1) + "~0~" + i,
            l = ((e) => {
              var t = y(e.type),
                i = f[t],
                o = {};
              switch (Object.prototype.toString.call(i)) {
                case "[object String]":
                  o = g(m(e, [i]), (e, t) => "components_style_" + t);
                  break;
                case "[object Array]":
                  o = g(m(e, i), (e, t) => "components_style_" + t);
                  break;
                case "[object Function]":
                  o = i(e);
                  break;
                default:
                  o = {};
              }
              return o;
            })(n);
          return Object(a.a)(
            { item_type: "component", component: s, banner_id: r },
            l
          );
        },
        C = i("w2Y9"),
        x = i.n(C),
        k = {
          image_text_nav: "image",
          image_ad: "image",
          goods: "goods",
          goods_list_weapp: "goods",
          goods_weapp: "goods",
          goods_list: "goods",
          groupon_weapp: "groupon",
          tags: "tag_list_top",
          tag_list: "tag_list_left",
          tag_list_weapp: "tag_list_top",
          nav_weapp: "nav",
          search: "search",
          shop_banner_weapp: "storeinfo",
          rich_text_weapp: "rich_text",
          text_weapp: "texts",
          text: "texts",
          line_weapp: "line",
          white_weapp: "white",
          notice_weapp: "notice",
          coupon_weapp: "coupon",
          store: "store",
          cube_v3: "cube",
          paid_content: "content",
          paid_column: "column",
          paid_member: "member",
          paid_live: "live",
        };
      var I = i("Ix7h"),
        w = 0,
        P = 1,
        O = 2,
        S = {
          mounted() {
            (this.durationMap = {}),
              (this.currentTimeMap = {}),
              (this.indexList = []);
          },
          destroy() {
            this.clearAudios();
          },
          methods: {
            audioSrcChange(e) {
              var { index: t, src: i } = e;
              this.curComponents[t].src = i;
            },
            clearAudios() {
              this.backgroundAudio &&
                (this.backgroundAudio.stop(), (this.backgroundAudio = void 0)),
                (this.indexList = []),
                (this.currentId = ""),
                (this.currentTimeMap = {}),
                (this.durationMap = {});
            },
            audioUpdateProgress(e) {
              var { index: t, percentage: i } = e;
              if (t === this.currentId) {
                var o = this.backgroundAudio;
                if (!o) return;
                o.seek(parseInt((o.duration * i) / 100, 10));
              }
            },
            resetProgress(e) {
              (this.curComponents[e].status = w), c.default.trigger("reset", e);
            },
            initBackgroundAudio() {
              this.backgroundAudio =
                n.default.$native.getBackgroundAudioManager();
              var e = this.backgroundAudio;
              return (
                e.onPlay(() => {
                  "" !== this.currentId &&
                    ((this.curComponents[this.currentId].status = P),
                    (this.isAudioEnded = !1));
                }),
                e.onPause(() => {
                  "" !== this.currentId &&
                    (this.curComponents[this.currentId].status = O);
                }),
                e.onStop(() => {
                  "" !== this.currentId &&
                    (this.curComponents[this.currentId].status = w);
                }),
                e.onEnded(() => {
                  "" !== this.currentId &&
                    (this.resetProgress(this.currentId),
                    (this.isAudioEnded = !0),
                    +e.loop && this.replay(e));
                }),
                e.onTimeUpdate(() => {
                  if ("" !== this.currentId) {
                    if (
                      this.currentTimeMap &&
                      this.currentTimeMap[this.currentId]
                    )
                      return (
                        e.seek(this.currentTimeMap[this.currentId]),
                        void (this.currentTimeMap[this.currentId] = 0)
                      );
                    var t = e.currentTime,
                      i = e.duration;
                    if (this.durationMap && !this.durationMap[this.currentId]) {
                      this.durationMap[this.currentId] = i;
                      var o = [...this.curComponents],
                        n = o[this.currentId];
                      o.splice(
                        this.currentId,
                        1,
                        Object(a.a)({}, n, { canPlay: !0, duration: i })
                      ),
                        (this.curComponents = o);
                    }
                    c.default.trigger("timeupdate", {
                      currentTime: t,
                      audioIndex: this.currentId,
                    });
                  }
                }),
                e.onCanplay(() => {
                  "" !== this.currentId &&
                    ((this.curComponents[this.currentId].canPlay = !0),
                    (this.curComponents[this.currentId].isLoading = !1));
                }),
                e.onPrev(() => {
                  var e = this.currentId;
                  this.triggerPrev(), this.resetProgress(e);
                }),
                e.onNext(() => {
                  var e = this.currentId;
                  this.triggerNext(), this.resetProgress(e);
                }),
                e.onWaiting(() => {
                  "" !== this.currentId &&
                    (this.curComponents[this.currentId].isLoading = !0);
                }),
                e
              );
            },
            setBackgroundAudioInfo(e) {
              if (this.backgroundAudio) {
                var t = this.curComponents[e] || {},
                  i = this.backgroundAudio;
                (i.title = t.title || " "),
                  (i.coverImgUrl = t.avatar),
                  (i.loop = t.loop),
                  (i.epname = " "),
                  (i.singer = " "),
                  (i.src = t.src);
              }
            },
            triggerNext() {
              var e = this.indexList.length;
              if (!(e <= 1)) {
                var t = this.indexList.indexOf(this.currentId);
                this.triggerWithIndex((t + 1) % e);
              }
            },
            triggerPrev() {
              var e = this.indexList.length;
              if (!(e <= 1)) {
                var t = this.indexList.indexOf(this.currentId);
                this.triggerWithIndex((t + e - 1) % e);
              }
            },
            triggerWithIndex(e) {
              var t = this.indexList[e];
              (this.currentTimeMap[t] = 0),
                (this.currentId = t),
                this.setBackgroundAudioInfo(t);
            },
            replay(e) {
              var t = this.currentId,
                i = this.curComponents[t] || {};
              (e.title = i.title || " "), (e.src = i.src);
            },
            audioTrigger(e) {
              var { src: t, index: i, reload: o } = e;
              if (t) {
                var a = (this.curComponents[i] || {}).status,
                  n = !1,
                  s = this.backgroundAudio;
                if (
                  ((s && !this.backgroundChanged) ||
                    ((n = !0),
                    (this.backgroundChanged = !1),
                    (this.currentId = i),
                    (s = this.initBackgroundAudio())),
                  i !== this.currentId &&
                    ("" !== this.currentId &&
                      (this.currentTimeMap &&
                        (this.currentTimeMap[this.currentId] =
                          this.backgroundAudio.currentTime),
                      this.backgroundAudio.pause(),
                      (this.curComponents[this.currentId].status = O)),
                    (n = !0)),
                  a !== P)
                ) {
                  if (n) this.setBackgroundAudioInfo(i), (this.currentId = i);
                  else {
                    var r = this.curComponents[i] || {};
                    (this.isAudioEnded || s.currentTime < 1) &&
                      ((s.title = r.title || " "), (s.src = t)),
                      s.play();
                  }
                  this.ctx.logger.log({
                    et: "click",
                    ei: "play",
                    en: "开始播放",
                    params: { component: "audio" },
                  });
                } else if (o) {
                  s.stop(), this.resetProgress(i), (this.backgroundAudio = "");
                  var l = {
                    et: "custom",
                    ei: "play_time",
                    en: "播放时长",
                    params: { component: "audio", time: e.time },
                  };
                  this.ctx.logger.log(l);
                } else s.pause();
              }
            },
          },
        },
        T = i("pn6R"),
        j = i.n(T),
        { windowHeight: D } = Object(r.b)(),
        E = {
          data: () => ({
            videoIndex: 0,
            videoData: [],
            videoContext: [],
            realVideoContext: [],
            networkCanPlay: !1,
            videoReady: !1,
            isPullRefresh: !1,
            scrollTop: 0,
            manualPlayId: "",
          }),
          mounted() {
            this.onNetwork();
          },
          destroyed() {
            this.offNetwork();
          },
          methods: {
            resetVideo() {
              (this.videoIndex = 0),
                (this.videoData = []),
                (this.videoContext = []);
            },
            offNetwork() {
              "weapp" === n.default.getEnv() &&
                n.default.$native.offNetworkStatusChange &&
                n.default.$native.offNetworkStatusChange();
            },
            onNetwork() {
              "weapp" === n.default.getEnv() &&
                (n.default.$native.onNetworkStatusChange &&
                  n.default.$native.onNetworkStatusChange((e) => {
                    var { networkType: t } = e;
                    this.networkCanPlay = this.checkNetworkIsPlay(t);
                  }),
                n.default.$native.getNetworkType &&
                  n.default.$native.getNetworkType({
                    success: (e) => {
                      var { networkType: t } = e;
                      this.networkCanPlay = this.checkNetworkIsPlay(t);
                    },
                  }));
            },
            checkNetworkIsPlay: (e) => "5g" === e || "4g" === e || "wifi" === e,
            handlePlay(e) {
              void 0 === e && (e = {});
              var { currentTarget: t = {} } = e,
                { id: i } = t,
                { uuid: o } = this.realVideoContext[this.videoIndex];
              if (o !== i) {
                var a = this.realVideoContext.findIndex((e) => e.uuid === i);
                if (-1 !== a) {
                  var { uuid: n, autoPlay: s } = this.realVideoContext[a];
                  (this.videoIndex = a), 2 === s && (this.manualPlayId = n);
                }
              }
            },
            handleEnded(e) {
              this.resetManualPlayId(e);
            },
            handlePause(e) {
              this.resetManualPlayId(e);
            },
            resetManualPlayId(e) {
              var { currentTarget: t = {} } = e,
                { id: i } = t;
              i === this.manualPlayId && (this.manualPlayId = "");
            },
            handleVideoContext(e) {
              void 0 === e && (e = {});
              var { uuid: t } = e;
              this.videoContext.some((e) => e.uuid === t) ||
                this.videoContext.push(e),
                this.assembleVideoData();
            },
            assembleVideoData() {
              this.videoContext.length !== this.videoData.length &&
              this.compareVideoData(this.videoData, this.realVideoContext)
                ? (this.videoReady = !1)
                : ((this.realVideoContext = j()(this.videoData)),
                  this.realVideoContext.forEach((e) => {
                    var t = this.videoContext.find((t) => t.uuid === e.uuid);
                    t && (e.videoContext = t.videoContext);
                  }),
                  this.currentViewVideo(),
                  (this.videoReady = !0),
                  this.isPullRefresh && (this.isPullRefresh = !1));
            },
            compareVideoData(e, t) {
              for (
                var { length: i } = e,
                  o = function (i) {
                    var { uuid: o } = e[i];
                    if (-1 === t.findIndex((e) => e.uuid === o))
                      return { v: !1 };
                  },
                  a = 0;
                a < i;
                a++
              ) {
                var n = o(a);
                if ("object" == typeof n) return n.v;
              }
              return !0;
            },
            currentViewVideo() {
              var e = this.realVideoContext
                .slice(0, 3)
                .find((e) => 1 === e.autoPlay);
              if (e && e.videoContext) {
                var t = ".position_component_" + e.uuid,
                  i = this.createSelectorQuery();
                i.select(t).boundingClientRect(),
                  i.exec((t) => {
                    var { videoContext: i, autoPlay: o } = e,
                      { top: a } = t[0];
                    D - a <= D &&
                      1 === o &&
                      this.networkCanPlay &&
                      setTimeout(() => {
                        i.play();
                      }, 300);
                  });
              }
            },
            videoAutoPlay(e) {
              if (this.videoReady) {
                var t = this.createSelectorQuery(),
                  i =
                    ".position_component_" +
                    this.realVideoContext[this.videoIndex].uuid;
                t.select(i).boundingClientRect(),
                  t.exec((t) => {
                    var { videoContext: i, autoPlay: o } =
                        this.realVideoContext[this.videoIndex] || {},
                      { top: a, bottom: n } = t[0];
                    if (n <= 0)
                      return (
                        i.pause(),
                        void (
                          this.videoIndex < this.realVideoContext.length - 1 &&
                          (this.videoIndex++, (this.manualPlayId = ""))
                        )
                      );
                    if (a > 0 && D - a <= 0)
                      return (
                        i.pause(),
                        void (
                          this.videoIndex > 0 &&
                          (this.videoIndex--, (this.manualPlayId = ""))
                        )
                      );
                    if ((n > 0 || D - a <= D) && this.networkCanPlay) {
                      if (1 === o)
                        setTimeout(() => {
                          i.play();
                        }, 300);
                      else {
                        if (this.manualPlayId) return;
                        e.scrollTop > this.scrollTop &&
                          this.videoIndex < this.realVideoContext.length - 1 &&
                          this.videoIndex++,
                          e.scrollTop < this.scrollTop &&
                            this.videoIndex > 0 &&
                            this.videoIndex--;
                      }
                      this.scrollTop = e.scrollTop;
                    }
                  });
              }
            },
          },
        },
        L = i("pXyP"),
        A = i("fChk"),
        { windowHeight: F } = Object(r.b)(),
        R = {
          methods: {
            handleElevatorNavigationClick(e) {
              this.elevatorNavigationTimeOut &&
                clearTimeout(this.elevatorNavigationTimeOut),
                (this.elevatorNavigationTabClick = !0);
              var t = this.createSelectorQuery();
              t.selectViewport().scrollOffset(),
                t
                  .select(".position_component_" + e.position_component)
                  .boundingClientRect()
                  .exec((e) => {
                    if (e && !(e.length < 2)) {
                      var [t, i] = e;
                      if (t && i) {
                        var o = L.a.getHasTop(),
                          a = i.top > t.scrollTop,
                          n = L.a.getWillStickyComponent(),
                          s = L.a.__map,
                          r = t.scrollHeight;
                        a
                          ? n.forEach((e) => {
                              if ("canChange" !== e.type && !s[e.name])
                                try {
                                  r - e.positionTop >= F &&
                                    i.top + t.scrollTop > e.positionTop &&
                                    (o +=
                                      "elevatorNavigationTop" === e.name
                                        ? 2 * e.elementHeight
                                        : e.elementHeight);
                                } catch (e) {}
                            })
                          : n.forEach((e) => {
                              if ("canChange" !== e.type && s[e.name])
                                try {
                                  i.top + t.scrollTop <= e.positionTop &&
                                    (o -= e.elementHeight);
                                } catch (e) {}
                            });
                        var l = i.top - o + t.scrollTop;
                        try {
                          Object(A.a)({ scrollTop: l, duration: 300 }).then(
                            () => {
                              this.elevatorNavigationTimeOut = setTimeout(
                                () => {
                                  this.elevatorNavigationTabClick = !1;
                                },
                                1e3
                              );
                            }
                          );
                        } catch (e) {}
                      }
                    }
                  });
            },
            onPageScrollSetElevatorNavigationPosition() {
              if (!this.elevatorNavigationTabClick) {
                var e =
                    (this.curComponents || []).find(
                      (e) => "elevator_navigation" === e.type
                    ) || {},
                  t = this.createSelectorQuery();
                (this.curComponents || []).map((e) => {
                  e.uuid &&
                    e.uuid.startsWith("custom_end_") &&
                    t.select("." + e.uuid).boundingClientRect();
                }),
                  (e.tabs || []).forEach((i) => {
                    !i.position_component ||
                      (i.use_link && 2 == e.showMethod) ||
                      t
                        .select(".position_component_" + i.position_component)
                        .boundingClientRect();
                  }),
                  t.exec(function (t) {
                    for (
                      var i = t
                          .filter((e) => e && e.id.startsWith("custom_end_"))
                          .reduce(
                            (e, t) =>
                              Object(a.a)({}, e, {
                                [t.id.replace("custom_end_", "")]: t.bottom,
                              }),
                            {}
                          ),
                        o = t
                          .filter((e) => e && !e.id.startsWith("custom_end_"))
                          .map((e) => (e && i[e.id] && (e.bottom = i[e.id]), e))
                          .sort((e, t) => e.top - t.top),
                        n = null,
                        s = L.a.getHasTop(),
                        r = o.length - 1;
                      r >= 0;
                      r--
                    )
                      if (o[r].top < s) {
                        n = o[r];
                        break;
                      }
                    if (n) {
                      var l = n.id.replace("position_component_", ""),
                        d = (e.tabs || []).findIndex(
                          (e) => e.position_component === l
                        );
                      -1 !== d &&
                        c.default.trigger(
                          "showcase-container:elevator-navigation-active-index",
                          d,
                          l
                        );
                    }
                  });
              }
            },
          },
        },
        N = i("Pz1p"),
        U = i("WKDq");
      "web" !== n.default.getEnv() && getApp();
      Object(N.b)();
      var W = i("3uds"),
        H = i("YeA1"),
        M = [
          "offlinepage",
          "weapplink",
          "goods",
          "tag",
          "weappfeature",
          "feature",
          "homepage",
          "usercenter",
          "cart",
          "allgoods",
          "chat",
          "pointsstore",
          "coupon",
          "platform_coupon",
          "seckill",
          "zodiac",
          "paidcolumn",
          "paidcontent",
          "mypaidcontent",
          "paidlive",
          "shopnote",
          "calendar_checkin",
          "shopnote_detail",
          "allcourse",
          "course",
          "educourse",
          "allofflinecourse",
          "eduappointment",
          "course_group",
          "course_category",
          "edumoments",
          "hotellist",
          "recharge_center",
          "red-package",
          "member_code",
          "vipcenter",
          "mp_article",
          "marketing_page",
          "video_number",
        ],
        V = {
          SCAN_GO: "scan_order_way",
          FREE_GO: "free_order_way",
          SELF: "self_order_way",
          TAKEOUT: "takeout_order_way",
          NEARBY_STORE: "nearby_store_way",
          SHELF_GOODS: "shelf_goods",
          SHELF_GROUP: "shelf_group",
          WX_SCAN_CODE: "wx_scan_code",
          SaleToday: "sale_today",
          SaleAdvance: "sale_advance",
        },
        B = function (e, t) {
          void 0 === e && (e = {}), void 0 === t && (t = []);
          var i = M.concat([void 0, "", ...t]);
          e = u.a.toCamelCase(e);
          var { linkType: o, linkUrl: a } = e;
          return (
            i.indexOf(o) >= 0 || ("link" === o && /mp.weixin.qq.com\/s/.test(a))
          );
        },
        G = i("AHKF"),
        z = i("Na6L"),
        K = (e) => {
          var t = ((e) =>
            e.reduce((e, t, i) => {
              var { type: o } = t;
              try {
                var n = Object.keys(e[o] || {}).length;
                return (e[o] = Object(a.a)({}, e[o] || {}, { [i]: n + 1 })), e;
              } catch (t) {
                return e;
              }
            }, {}))(e);
          return e.map((e, i) => {
            var { type: o } = e,
              n = (t[o] || {})[i],
              s = n ? { componentIndex: n - 1 } : {};
            return Object(a.a)({}, e, s);
          });
        },
        q = i("Yfvy"),
        Q = (e, t, i) => {
          var o,
            n,
            s,
            r,
            l,
            d = {
              imageUrl:
                (null == i ? void 0 : i.imageUrl) ||
                (null == i || null == (o = i.detail) ? void 0 : o.imageUrl),
              top: null == i || null == (n = i.detail) ? void 0 : n.top,
              left: null == i || null == (s = i.detail) ? void 0 : s.left,
            };
          null != i &&
            null != (r = i.detail) &&
            r.components_style_is_hotarea &&
            (t.components_style_is_hotarea =
              (null == i || null == (l = i.detail)
                ? void 0
                : l.components_style_is_hotarea) || 0);
          return Object(q.b)(
            "cube" === e.type ? "cube_v3" : e.type,
            ((e) => {
              var t = getCurrentPages(),
                { loggerParams: i, top: o, left: n, title: s } = e,
                { components_style_is_hotarea: r, item_type: l } = i || {},
                d = r ? { hotarea_top: o, hotarea_left: n } : {};
              return (
                "image_ad" === l && (d.image_title = s),
                Object(a.a)(
                  { page_url: t[t.length - 1].route, img_url: e.imageUrl },
                  d
                )
              );
            })(
              Object(a.a)(
                {},
                e,
                { type: "cube" === e.type ? "cube_v3" : e.type },
                d,
                { loggerParams: t }
              )
            )
          );
        },
        $ = i("1Uvd"),
        Y = i("8mzt"),
        X = ["clickParams"],
        J = ["next"],
        Z = v,
        { windowHeight: ee } = Object(r.b)(),
        te = 0.2 * ee,
        ie = "components_style_show_method",
        oe = "components_style_size",
        ae = { et: "click", ei: "click_contnet", en: "内容点击" },
        ne = { et: "view", ei: "view", en: "内容曝光" },
        se = { logger: { getGlobal: () => ({}) } },
        re = ((se = getApp()).logger.getGlobal() || {}).user || {},
        le = !0,
        de = {
          mixins: [
            S,
            E,
            R,
            s.b.externalClassesMixin(["message-contact-button"]),
          ],
          props: { sourceFrom: "" },
          data: () => ({
            curComponents: [],
            appId: "",
            offlineId: Object(U.a)() || 0,
            buyerId: "",
            kdtId: "",
            shopInfo: {},
            extra: {},
            uuid: re.uuid || "",
            alias: "",
            themeColors: "",
            userId: "",
            isTabPage: !1,
            isHomePage: !1,
            showAuthDialog: !1,
            isPageHide: !1,
            pageScrollEvent: "",
            onDataChange: !1,
            rootKdtId: "",
            city: "",
            cloudLoggerField: {},
            hideGift: !1,
            tableCode: "",
            curUniqueKey: "",
            isWebview: !1,
            isUserCenter: !1,
          }),
          computed: {
            newIphoneCls: () => (Object(N.b)() ? "contact-us--in-iphonex" : ""),
          },
          created() {
            (this.shopConfig = {}),
              (this.allComponents = []),
              (this.pageScrollEvent = "onPageScroll" + Object(z.a)()),
              (this.pageScrollFn = Object(I.a)(this.onPageScroll, 300)),
              Object(l.c)("hotel-city").then((e) => {
                var { data: t = {} } = e;
                this.city = (null == t ? void 0 : t.value) || "全国";
              }),
              c.default.off(this.pageScrollEvent, this.pageScrollFn),
              (this.kdtIdUnWatch = this.ctx.watch("kdtId", (e) => {
                Object(d.setRequestDep)({ kdtId: +e }), (this.kdtId = e);
              })),
              (this.extraDataUnWatch = this.ctx.watch("extraData", (e) => {
                this.isWebview = e.isWebviewFeature;
              })),
              (this.shopInfoUnWatch = this.ctx.watch("shopInfo", (e) => {
                var t;
                this.getExtraData(),
                  (this.shopInfo = {
                    shopName: e.name || e.shopName,
                    shopLogo: e.logo,
                    isEduChainStore:
                      null == (t = e.chainStoreInfo)
                        ? void 0
                        : t.isEduChainStore,
                  });
              })),
              (this.shopConfigUnWatch = this.ctx.watch("shopConfig", (e) => {
                var {
                  sold_out_goods_flag: t,
                  gift_plug_status: i,
                  scrm_credit_diy_name: o = "{}",
                } = e || {};
                this.soldOutGoodsFlag = t;
                var a = {};
                this.hideGift = 0 == +i;
                try {
                  a = JSON.parse(o);
                } catch (e) {}
                this.ctx.data.pointsConfig = a;
              })),
              se.getDefaultImData().then((e) => {
                this.extra = {
                  sourceParam: e.sourceParam,
                  businessId: e.businessId || "",
                };
              }),
              (this.featureComponentsUnWatch = this.ctx.watch(
                "featureComponents",
                this.handleFeatureComponentInit
              )),
              this.initPullDownRefresh(),
              this.initPageShow(),
              this.initPageHide(),
              Object(H.b)(this, [
                "buyerId",
                "alias",
                "themeColors",
                "isTabPage",
                "isHomePage",
                "appId",
                "rootKdtId",
                "isUserCenter",
              ]);
            var { getUserInfo: e } = this.ctx.lambdas || {};
            null == e ||
              e().then((e) => {
                e && (this.userId = e.userId);
              });
          },
          mounted() {
            this.initReachBottom(),
              (this.cloudLoggerField = { goods: Object(q.a)("goods") });
          },
          destroyed() {
            this.kdtIdUnWatch && this.kdtIdUnWatch(),
              this.featureComponentsUnWatch && this.featureComponentsUnWatch(),
              this.shopInfoUnWatch && this.shopInfoUnWatch(),
              this.imSourceDetailUnWatch && this.imSourceDetailUnWatch(),
              this.shopConfigUnWatch && this.shopConfigUnWatch(),
              this.pageScrollFn &&
                c.default.off(this.pageScrollEvent, this.pageScrollFn),
              this.extraDataUnWatch && this.extraDataUnWatch(),
              L.a.resetData(),
              this.handlePageHideFn &&
                c.default.off(
                  "" + W.b + this.ctx.currentPageKey,
                  this.handlePageHideFn
                ),
              this.handlePageShowFn &&
                c.default.off(
                  "" + W.c + this.ctx.currentPageKey,
                  this.handlePageShowFn
                ),
              this.onPullDownRefresh &&
                c.default.off(W.d, this.onPullDownRefresh);
          },
          methods: {
            handleFeatureComponentInit(e) {
              var t,
                i,
                {
                  renderMode: o,
                  extraData: n,
                  isMultiStore: s,
                  featureHotUpdate: r,
                } = this.ctx.data || {};
              this.allComponents.length &&
                null != (t = e) &&
                t.length &&
                "DELAY_ENTER_SHOP" !== o &&
                (83 == +(null == n ? void 0 : n.templateId) || s || r) &&
                ((this.onDataChange = !0),
                this.$nextTick(() => {
                  (this.onDataChange = !1),
                    setTimeout(() => {
                      this.initReachBottom();
                    }, 100);
                }));
              var l = e.findIndex((e) => "contact_us" === e.type);
              l > -1 && (e = [e[l], ...e.slice(0, l), ...e.slice(l + 1)]);
              var d = Object.values(V),
                h = !1,
                u = !1;
              (e = e
                .map(
                  (e, t) => (
                    !this.hasImageOrGoodsInFirstLoad &&
                      ("dc-image" === e.component ||
                        "dc-goods" === e.component ||
                        "tag_list_left" === e.type ||
                        "tag_list_top" === e.type) &&
                      t <= 9 &&
                      (this.hasImageOrGoodsInFirstLoad = !0),
                    h ||
                      ("elevator_navigation" !== e.type &&
                        "video" !== e.type &&
                        !W.a.includes(e.type)) ||
                      (h = !0),
                    !u &&
                      ("dc-goods" === e.component ||
                        ("dc-image" === e.component && 5 != +e.tpl) ||
                        "tag_list_top" === e.type) &&
                      t <= 9 &&
                      (u = !0),
                    "image_text_nav" === e.type && Object(G.a)(e.imgs)
                      ? Object(a.a)({}, e, {
                          imgs: e.imgs.filter((e) =>
                            B(e, ["hotarea"].concat(d))
                          ),
                        })
                      : e
                  )
                )
                .filter(
                  (e) =>
                    "cube" !== e.type ||
                    !Object(G.a)(e.imgs) ||
                    !e.imgs.every((e) => !B(e, d))
                )),
                h &&
                  (c.default.off(this.pageScrollEvent, this.pageScrollFn),
                  c.default.on(this.pageScrollEvent, this.pageScrollFn)),
                u || se.trigger("home_dashboard_com_loaded", { f: "showcase" }),
                this.checkThirdCom(e.slice(0, 10));
              var { tableCode: p = "" } =
                se.globalData.scanCodeDecoConfig || {};
              (this.tableCode = p),
                (this.allComponents = e),
                "DELAY_ENTER_SHOP" ===
                (null == (i = this.ctx.data) ? void 0 : i.renderMode)
                  ? ((this.curUniqueKey = this.ctx.data.alias + Object($.a)(8)),
                    (this.curComponents = this.allComponents.slice(
                      0,
                      this.curComponents.length
                    )))
                  : this.resetComponents(),
                this.loadComponents();
            },
            checkThirdCom(e) {
              var t, i;
              if (
                null == (t = this.ctx.data) ||
                null == (i = t.extraData) ||
                !i.isWebviewFeature
              ) {
                var o = e
                  .filter((e) => e.type && e.type.startsWith("extension-"))
                  .map((e) => e.uuid);
                0 !== o.length &&
                  setTimeout(() => {
                    var e = this.createSelectorQuery();
                    o.forEach((t) =>
                      e.select(".position_component_" + t).boundingClientRect()
                    );
                    var { kdtId: t } = this;
                    e.exec(function (e) {
                      e.every((e) => !e || (e && 0 === e.height)) &&
                        Y.a.log({
                          appName: "wsc-h5-decorate",
                          logIndex: "feature-third-template",
                          level: "error",
                          message: "三方组件不存在",
                          extra: Object(a.a)({ kdtId: t }, o),
                        });
                    });
                  }, 1e4);
              }
            },
            getExtraData() {},
            handleComponentLoaded(e, t) {
              se.trigger(
                "home_dashboard_com_loaded",
                (null == t ? void 0 : t.detail) || {}
              );
            },
            buyButtonClick(e) {
              var { goods: t = [] } = e,
                { options: i } = getCurrentPages().pop(),
                { type: o, src: s } = i;
              if ("tableBooking" === o) {
                var r = {
                  detail: {
                    linkType: o,
                    linkUrl:
                      "/pages/common/webview-page/index?type=" +
                      o +
                      "&src=" +
                      s,
                  },
                };
                return this.jumpToLink({}, r);
              }
              var l = t[0];
              if (l) {
                var { appIdentity: d } = l;
                if (d) {
                  var c =
                    "packages/ump/booking/index?" +
                    Object.entries(Object(a.a)({}, i, l))
                      .map((e) => {
                        var [t, i] = e;
                        return t + "=" + i;
                      })
                      .join("&");
                  return n.default.navigate({ url: c });
                }
                this.handleBuyClick(
                  Object(a.a)({}, l, { supportSkuOrder: !0 })
                );
              }
            },
            handleBuyClick(e) {
              var {
                alias: t,
                id: i,
                activityTypes: o,
                timingSaleHideBuyBtnInSku: a,
                supportSkuOrder: n,
              } = e;
              (this.ctx.data.containerStyle = "z-index: 141;"),
                this.ctx.event.emit("sku:show", {
                  alias: t,
                  goodsId: i,
                  activityTypes: o,
                  containerStyle: "z-index: 141;",
                  timingSaleHideBuyBtnInSku: a,
                  birthdayScene: "WEAAPP_DECORATE_GOODS",
                  goodsIdForBirthday: i,
                  supportSkuOrder: n,
                });
            },
            onNavigate(e, t) {
              var { detail: i } = t;
              this.jumpToLink(e, { detail: i });
            },
            handleItemClick(e, t) {
              var i = Object(a.a)({ detail: t.detail.link }, t.detail);
              this.jumpToLink(e, i);
            },
            shopClick(e, t) {
              void 0 === t && (t = {});
              var i = t.detail || {},
                { type: o } = i,
                a = {
                  et: "click",
                  params: {
                    components_style_store_info_style: "",
                    component: "shop_banner_weapp",
                  },
                };
              "allgoods" === o
                ? ((a.ei = "click_all_goods"), (a.en = "点击全部商品"))
                : "newgoods" === o &&
                  ((a.ei = "click_new_goods"), (a.en = "点击上新商品")),
                a.ei && this.ctx.logger.log(a),
                this.jumpToLink(e, t);
            },
            onCrowdsImageClick(e, t) {
              void 0 === t && (t = {});
              var i = t.detail._index + 1;
              this.imageLogger(e, i, ae, {
                tplMap: { 1: { [ie]: 0 }, 2: { [ie]: 1 } },
              }),
                this.jumpToLink(e, t, !1);
            },
            onCouponImageClick(e, t) {
              var i = (null == t ? void 0 : t.detail) || {},
                { clickParams: a } = i,
                n = Object(o.a)(i, X),
                s = (null == a ? void 0 : a._index) || 1;
              this.imageLogger(e, s, ae), this.requestSubscribeMessagePush(n);
            },
            onImageClick(e, t) {
              void 0 === t && (t = {});
              var i = t.detail._index + 1;
              this.imageLogger(e, i, ae), this.jumpToLink(e, t);
            },
            requestSubscribeMessagePush(e) {
              var { next: t } = e,
                i = Object(o.a)(e, J),
                s = this.$getPageRoute();
              [
                "pages/home/dashboard/index",
                "pages/home/feature/index",
              ].includes(s) && "weapp" === n.default.getEnv()
                ? this.ctx.process.invokePipe(
                    "requestWechatSubscribeMessagePush",
                    Object(a.a)({}, i, {
                      authorizationType: "coupon",
                      subscribePage: "微页面",
                      scene: "coupon_notice_scene",
                      options: { onComplete: t, next: t },
                    })
                  )
                : t();
            },
            onFansClick(e) {
              this.loggerComponentClick(e);
            },
            onImageIndexChange(e, t) {
              void 0 === t && (t = {});
              var i = t.detail._index + 1;
              this.imageLogger(e, i, ne);
            },
            onCrowdsImageIndexChange(e, t) {
              void 0 === t && (t = {});
              var i = t.detail._index + 1;
              this.imageLogger(e, i, ne, {
                tplMap: { 1: { [ie]: 0 }, 2: { [ie]: 1 } },
              });
            },
            imageLogger(e, t, i, o) {
              var { tplMap: n } = void 0 === o ? {} : o,
                { loggerItem: s, tpl: r } = e,
                l = s.banner_id.split("~");
              l[2] = t;
              var d = l.join("~");
              n = n || {
                1: { [ie]: 7 },
                2: { [ie]: 5 },
                3: { [ie]: 6, [oe]: 0 },
                4: { [ie]: 6, [oe]: 1 },
                5: { [ie]: 6, [oe]: 2 },
                6: { [ie]: 7, components_style_is_hotarea: 1 },
              };
              var c = Object(a.a)({}, i, {
                params: Object(a.a)(
                  { components_style_is_hotarea: 0, [ie]: 0, [oe]: 0 },
                  n[r] || {},
                  { banner_id: d, component: s.component, component_index: t }
                ),
              });
              this.ctx.logger.log(c);
            },
            rankingMoreClick(e, t) {
              void 0 === t && (t = {});
              var { tabType: i } = t.detail || {};
              (e.loggerItem.tab_type = i), this.jumpToLink(e, t);
            },
            rankingClick(e, t) {
              void 0 === t && (t = {});
              var { tabType: i } = t.detail || {};
              (e.loggerItem.tab_type = i), this.loggerComponentClick(e);
            },
            rankingItemClick(e, t) {
              void 0 === t && (t = {});
              var i = { detail: t.detail.link };
              this.jumpToLink(e, i, !1);
            },
            jumpToLink(e, t, i) {
              void 0 === t && (t = {}), void 0 === i && (i = !0);
              var o = t.detail || {},
                { banner_id: n } = (null == e ? void 0 : e.loggerItem) || {},
                s = { kdtId: this.kdtId, banner_id: n, context: this };
              t &&
                null !== t &&
                "object" == typeof t &&
                (s = Object(a.a)({}, t, s)),
                i && this.loggerComponentClick(e, s),
                "buy_goods" !== o.linkType
                  ? /^tel/i.test(o.linkUrl)
                    ? wx.makePhoneCall({
                        phoneNumber: o.linkUrl.match(/^tel\s*:?\s*(.*)/i)[1],
                      })
                    : this.ctx.lambdas.jumpToLink(o, s)
                  : this.handleBuyClick(o.extraData);
            },
            contactUsClick(e) {
              le &&
                (this.loggerComponentClick(e),
                (le = !1),
                setTimeout(() => {
                  le = !0;
                }, 1e3));
            },
            loggerComponentClick(e, t) {
              var { loggerItem: i } = e;
              if (i) {
                var o = 0;
                this.ctx.data.extraData &&
                  (o = this.ctx.data.extraData.templateId);
                var n;
                n = Q(e, i, t);
                var s = {
                  et: "click",
                  ei: "click_content",
                  en: "组件点击",
                  params: Object(a.a)(
                    {},
                    i,
                    {
                      banner_id: i.banner_id,
                      component: i.component,
                      template_id: o,
                    },
                    n
                  ),
                };
                this.ctx.logger.log(s);
              }
            },
            handleContact(e) {
              var { detail: t } = e;
              t && t.path && this.ctx.dmc.navigate(x.a.add(t.path, t.query));
            },
            initPageShow() {
              (this.handlePageShowFn = () => {
                this.onPageShow();
              }),
                c.default.on(
                  "" + W.c + this.ctx.currentPageKey,
                  this.handlePageShowFn
                );
            },
            onPageShow() {
              if (
                (this.initReachBottom(),
                Object(l.c)("hotel-city").then((e) => {
                  var { data: t } = e,
                    i = (t = t || {}).value;
                  i && this.city !== i && (this.city = i);
                }),
                (this.isComponentHide = !1),
                this.oldStickyControl &&
                  this.oldStickyControl[this.ctx.currentPageKey])
              ) {
                var {
                  map: e,
                  sub: t,
                  list: i,
                  willSticky: o,
                } = this.oldStickyControl[this.ctx.currentPageKey];
                (L.a.__map = e),
                  (L.a.__sub = t),
                  (L.a.__list = i),
                  (L.a.__willStickyComponentList = o);
              } else L.a.resetData();
              this.isPageHide &&
                (c.default.on(this.pageScrollEvent, this.pageScrollFn),
                (this.isPageHide = !1));
            },
            initPageHide() {
              (this.handlePageHideFn = () => {
                this.onPageHide();
              }),
                c.default.on(
                  "" + W.b + this.ctx.currentPageKey,
                  this.handlePageHideFn
                );
            },
            onPageHide() {
              this.isComponentHide = !0;
              var {
                  __map: e,
                  __sub: t,
                  __list: i,
                  __willStickyComponentList: o,
                } = L.a,
                a = { map: e, sub: t, list: i, willSticky: o };
              (this.oldStickyControl = { [this.ctx.currentPageKey]: a }),
                c.default.off(this.pageScrollEvent, this.pageScrollFn),
                L.a.resetData(),
                (this.isPageHide = !0);
            },
            onPageScroll(e) {
              this.hasElevator &&
                this.onPageScrollSetElevatorNavigationPosition(),
                this.hasVideo && this.videoAutoPlay(e),
                this.needContentViewLogger &&
                  c.default.trigger("setcontentviewlog");
            },
            resetComponents() {
              (this.curComponents = []),
                (this.pageIndex = 0),
                (this.isFirstScreenCover = !1);
            },
            loadComponents() {
              new Promise((e) => {
                var { curComponents: t, pageIndex: i } = this,
                  { allComponents: o } = this;
                if (!(t.length >= o.length)) {
                  (o = K(o)),
                    (this.needContentViewLogger = o.some((e) =>
                      W.a.includes(e.type)
                    ));
                  var a = o.find((e) => "elevator_navigation" === e.type);
                  (this.hasElevator = a),
                    (this.videoData = o.filter((e) => "video" === e.type)),
                    this.isPullRefresh &&
                      this.videoData.length !== this.realVideoContext.length &&
                      ((this.videoContext = []), (this.isPullRefresh = !1)),
                    (this.hasVideo = 0 !== this.videoData.length);
                  var n = a ? [...o] : o.slice(10 * i, 10 * (i + 1));
                  (n = this.formatComponents(n)),
                    this.pageIndex++,
                    (this.curComponents = t.concat(n)),
                    this.loggerShowedComponents(n, i * (a ? o.length : 10)),
                    this.isFirstScreenCover ||
                      setTimeout(
                        () => {
                          this._checkIsFeatureBottomVisible()
                            .then(() => this.loadComponents())
                            .catch((e) => {});
                        },
                        1 === this.pageIndex && this.hasImageOrGoodsInFirstLoad
                          ? 1e3
                          : 500
                      ),
                    e();
                }
              }).catch((e) => {
                this.ctx.logger.log({
                  et: "custom",
                  ei: "feature_components_parse_error",
                  en: "微页面组件解析报错",
                  params: Object(a.a)(
                    {},
                    e,
                    "web" !== n.default.getEnv()
                      ? __wxConfig && __wxConfig.appLaunchInfo
                      : {}
                  ),
                });
              });
            },
            _checkIsFeatureBottomVisible() {
              return new Promise((e, t) => {
                this.createSelectorQuery()
                  .select("#theme-feature__content-end-hook")
                  .boundingClientRect((i) =>
                    i
                      ? (i.top || 0) > ee + te + 100
                        ? ((this.isFirstScreenCover = !0), t())
                        : void e()
                      : e()
                  )
                  .exec();
              });
            },
            formatComponents(e) {
              return e.map((e) => {
                var t = (function (e) {
                    return (k || {})[e] || "";
                  })(e.type),
                  i = "",
                  o = "";
                e.uuid &&
                  (e.uuid.startsWith("custom_start_")
                    ? (i =
                        "position_component_" +
                        (o = e.uuid.replace("custom_start_", "")) +
                        " " +
                        e.uuid)
                    : e.uuid.startsWith("custom_end_")
                    ? ((o = e.uuid), (i = "" + e.uuid))
                    : ((o = e.uuid), (i = "position_component_" + e.uuid))),
                  (e.uuidClass = i),
                  (e.uuidId = o),
                  (e.itemType = t || e.type);
                var {
                    soldOutGoodsFlag: n,
                    logo: s,
                    decorateImageQuality: r,
                  } = this.ctx.data.extraData || {},
                  l = n || this.soldOutGoodsFlag;
                if (
                  ((e.imageQuality = r ? "q" + r : ""),
                  "dc-goods" === e.component ||
                    [
                      "ump_limitdiscount",
                      "member_goods",
                      "ump_seckill",
                      "period_buy",
                      "groupon",
                      "point_goods",
                      "tag_list_top",
                    ].includes(e.type))
                )
                  return Object(a.a)({}, e, {
                    itemCardOpt: Object(a.a)({}, e.itemCardOpt, {
                      imgOpt: e.itemCardOpt.imgOpt
                        ? Object(a.a)({}, e.itemCardOpt.imgOpt, {
                            soldOutGoodsImg: l,
                          })
                        : e.itemCardOpt.imgOpt,
                      imageQuality: e.imageQuality,
                    }),
                  });
                if (e && "tag_list_left" === e.type) {
                  var { tagGroupOpt: d } = e,
                    { itemCardOpt: c } = d || {},
                    { imgOpt: h } = c || {};
                  return Object(a.a)({}, e, {
                    tagGroupOpt: Object(a.a)({}, d || {}, {
                      itemCardOpt: Object(a.a)({}, c || {}, {
                        imgOpt: Object(a.a)({}, h || {}, {
                          soldOutGoodsImg: l,
                        }),
                        imageQuality: e.imageQuality,
                      }),
                    }),
                  });
                }
                return (
                  e &&
                    "offline_shop_info" === e.type &&
                    (e.logo = s || this.shopInfo.shopLogo || e.logo),
                  e
                );
              });
            },
            initPullDownRefresh() {
              c.default.on(W.d, this.onPullDownRefresh);
            },
            onPullDownRefresh() {
              this.isComponentHide ||
                (this.clearAudios(), (this.isPullRefresh = !0));
            },
            initReachBottom() {
              try {
                this.observer &&
                  this.observer.disconnect &&
                  this.observer.disconnect(),
                  (this.observer = this.createIntersectionObserver()),
                  this.observer
                    .relativeToViewport({ bottom: 100 })
                    .observe("#theme-feature__content-end-hook", () => {
                      this.onReachBottom();
                    });
              } catch (e) {}
            },
            onReachBottom() {
              !this.isComponentHide &&
                this.isFirstScreenCover &&
                this.loadComponents();
            },
            loggerShowedComponents(e, t) {
              for (
                var i = [], o = [], a = this.ctx.logger.getPageSpm(), n = 0;
                n < e.length;
                n++
              ) {
                var s = n + t,
                  { componentIndex: r = s } = e[n],
                  l = b(e[n], r, Z, a);
                if (a) {
                  var { loggerEnable: d = !0 } = e[n];
                  d && i.push(l);
                } else o.push(l);
                e[n].loggerItem = l;
              }
              this._setLoggerComponents(i, o);
            },
            _setLoggerComponents(e, t) {
              t.length &&
                c.default.once("SPM:success", () => {
                  var e = this.ctx.logger.getPageSpm();
                  t.map((t) => ((t.banner_id = e + t.banner_id), t)),
                    this.__ensureComponentsLogger(t);
                }),
                e.length && this.__ensureComponentsLogger(e);
            },
            __ensureComponentsLogger(e) {
              var t = 0;
              this.ctx.data.extraData &&
                (t = this.ctx.data.extraData.templateId),
                e.forEach((e) => {
                  var i = {
                      et: "view",
                      ei: "component_view",
                      en: "组件曝光",
                      params: Object(a.a)({}, e, { template_id: t }),
                    },
                    { imgs: o } = e;
                  Array.isArray(o) && this.__ensureVideoNumberDynamicLogger(o),
                    this.ctx.logger.log(i);
                });
            },
            __ensureVideoNumberDynamicLogger(e) {
              void 0 === e && (e = []),
                e.forEach((e) => {
                  if (
                    "video_number_dynamic" ===
                    (null == e ? void 0 : e.link_type)
                  ) {
                    var {
                        video_dynamic_params: t,
                        image_url: i,
                        link_title: o,
                      } = e,
                      n = Object(a.a)({}, t, { image_url: i, link_title: o });
                    this.ctx.logger.log({
                      et: "view",
                      ei: "wxvideo_video_show",
                      en: "视频号动态曝光",
                      params: n,
                    });
                  }
                });
            },
            handleShowAuthDialog() {
              this.showAuthDialog = !0;
            },
            handleHideAuthDialog() {
              this.showAuthDialog = !1;
            },
          },
          ud: !0,
        };
      t.default = n.default.component(de);
    },
  })
);
