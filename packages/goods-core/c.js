"use strict";
(exports.ids = [11]),
  (exports.modules = {
    "/ko+": function (t, e, i) {
      i.d(e, "b", function () {
        return c;
      }),
        i.d(e, "a", function () {
          return u;
        });
      var a = i("Fcif"),
        r = i("gLTC");
      function n(t, e, i) {
        var { v: a, kS: r } = t[i];
        return (a || []).find((t) => t.id === e[r]);
      }
      var s = !1;
      var o = !1;
      function c(t) {
        var {
            activityType: e,
            multiSkuDecision: i,
            tree: a,
            list: c,
            isShowOldPrice: u,
            selected: l,
            selectValue: d,
            lastData: h,
            isInit: f,
            skuScene: p,
          } = t,
          m = (function (t, e, i) {
            var a;
            if ((null == t ? void 0 : t.length) <= 1)
              return (null == (a = t[0]) ? void 0 : a.kS) || "";
            var r = (t || []).map((t) => t.kS).filter((t) => !e[t]),
              n = r.length;
            return n > 1
              ? ""
              : 1 === n
              ? r.pop()
              : null == i
              ? void 0
              : i.skuKeyStr;
          })(a, l, d);
        if (
          null != h &&
          h.finalRow &&
          m === (null == h ? void 0 : h.finalRow) &&
          null != l &&
          l[m]
        )
          return { noUpdate: !0 };
        var { showPriceLabel: v, priceMap: g = {} } = (function (t) {
          var {
            multiSkuDecision: e,
            isShowOldPrice: i,
            list: a,
            tree: n,
            finalRow: s,
            activityType: o,
            selected: c,
            isInit: u,
            skuScene: l,
          } = t;
          if (!e.skuDifferentialPrice || !s) return { showPriceLabel: !1 };
          var d = {},
            h = Object.keys(c).filter((t) => t !== s);
          a.forEach((t) => {
            h.every((e) => !c[e] || +c[e] == +t[e]) &&
              (d[t[s]] = i ? t.oldPrice : t.price);
          });
          var f = Object.keys(d),
            p = n.filter((t) => t.kS === s);
          return (
            f.length < (null == p ? void 0 : p.length) &&
              p
                .filter((t) => f.indexOf("" + t.id) < 0)
                .forEach((t) => {
                  var e = a.find((e) => +e[s] == +t.id);
                  d[t.id] = i ? e.oldPrice : e.price;
                }),
            new Set(Object.values(d)).size > 1
              ? (Object(r.e)({ is_default: u, show_floor: s, sku_type: l }),
                { showPriceLabel: !0, priceMap: d })
              : { showPriceLabel: !1 }
          );
        })({
          multiSkuDecision: i,
          tree: a,
          list: c,
          isShowOldPrice: u,
          finalRow: m,
          activityType: e,
          selected: l,
          isInit: f,
          skuScene: p,
        });
        return {
          finalRow: m,
          showPriceLabel: v,
          showStockLabel: (function (t) {
            var { tree: e, multiSkuDecision: i, selected: a, skuScene: c } = t,
              u = !1,
              { stockHotSku: l } = i;
            if (l && !s) {
              var d = e.length - 1;
              (u = e.slice(0, d).every((t) => a[t.kS] === l[t.kS])),
                n(e, l, d) &&
                  (u && !o && Object(r.f)({ is_default: 1 }, c), (o = u));
            }
            return u;
          })({ tree: a, multiSkuDecision: i, selected: l, skuScene: p }),
          priceMap: g,
        };
      }
      function u(t) {
        var {
            activityType: e,
            multiSkuDecision: i,
            tree: o,
            list: u,
            isShowOldPrice: l,
            selected: d,
            selectValue: h,
            lastData: f,
            skuScene: p,
          } = t,
          m = c({
            activityType: e,
            multiSkuDecision: i,
            tree: o,
            list: u,
            isShowOldPrice: l,
            selected: d,
            selectValue: h,
            lastData: f,
            isInit: !0,
            skuScene: p,
          }),
          v = (function (t, e, i) {
            void 0 === t && (t = []);
            var { hotSku: a, stockHotSku: o } = e,
              c = "",
              u = !1;
            return (
              a && (c = t[0].kS),
              o &&
                ((u =
                  1 === t.length ||
                  t.every((t) => {
                    var e;
                    return (null == (e = t.v) ? void 0 : e.length) <= 1;
                  })),
                n(t, o, t.length - 1) &&
                  u &&
                  (Object(r.f)({ is_default: 0 }, i), (s = u))),
              { hotRow: c, showStockLabel: u }
            );
          })(o, i, p);
        return Object(a.a)({}, m, v);
      }
    },
    "3Hzb": function (t, e, i) {
      i.d(e, "a", function () {
        return r;
      });
      var a = i("ZLeP");
      function r(t) {
        if (!Array.isArray(t)) return [];
        for (
          var e = function (t) {
              return (
                t.extra || (t.extra = {}),
                (t.extra.emotion = a.b[~~(Math.random() * a.b.length)]),
                t
              );
            },
            i = [],
            r = 0;
          r < t.length;

        ) {
          var n = i.shift();
          if (r === n || 0 === r) {
            var s = t[r];
            s.type !== a.a.ViewAction && e(s);
          }
          if (i.length > 0) r++;
          else {
            r += 3;
            var o = Math.ceil(2 * Math.random());
            i = new Array(o).fill(0).map((t, e) => r + e);
          }
        }
        return t;
      }
    },
    "7NcC": function (t, e, i) {
      i.d(e, "d", function () {
        return s;
      }),
        i.d(e, "a", function () {
          return o;
        }),
        i.d(e, "b", function () {
          return c;
        }),
        i.d(e, "c", function () {
          return u;
        });
      var a = "https://img01.yzcdn.cn/upload_files/2023/",
        r = a + "08/31/",
        n = a + "08/30/",
        s = {
          VIP1: r + "FrDaRV3niuXKbrJzOxRV77I-UbgK.png",
          VIP2: r + "FiVmNQ72Mk60lO_RnoylvTy-jIiS.png",
          VIP3: r + "Fp9AyIJUKtF5tCuWAEMmbLw2n6yh.png",
          VIP4: r + "FtmUfGNDCL-XhDEAzJGKzDWNfHRb.png",
          VIP5: r + "FtrF-kH7NxDiS5wBdDPt93fyCmZR.png",
          VIP6: r + "Fuc9fnllOsQpvb3bRiGJIywLREXc.png",
          VIP7: r + "FuZntcT_xnxOf0uALUOAo-UuPj2P.png",
          VIP8: r + "FjzXJF3bysE-hIIzorOmAiFBlQVt.png",
          VIP9: r + "Fh09EJ2UlEM1zP0WaoeyGd4Hbeu9.png",
          VIP10: r + "FrM6R58X1SzPPHxUygYpA_Nysh2e.png",
          SVIP1: n + "FmIYswDWvZ8hG7m0HfI1dVE0UXVL.png",
          SVIP2: n + "FguzTy6P5tTL0mjcFNshGexcAfxH.png",
          SVIP3: n + "FiGjYW3Kc5c_KK3944HIWvdPXvE5.png",
          SVIP4: n + "FuAtkZI7aFkoaZu_cDlcuPYr11UG.png",
          SVIP5: n + "Fv6lKHzTq_4AFk7D98hMQPrhCxVo.png",
          SVIP6: n + "Fu8DaRszF73sxaskGBhVTjr-mK_D.png",
          SVIP7: n + "FnQ3xJhDKFvUIuceY3k4M9LE4y-9.png",
          SVIP8: n + "FifjanIWjOJ7nam1f-i5DD4RiTRI.png",
          SVIP9: n + "FrCz5eFKowK_aCb6MXgzHkarwYV9.png",
          SVIP10: n + "FuO7VKhe0cpfKxQWSl5KPY6BYnWV.png",
        },
        o = "helpCut",
        c = { Vip: 1, Svip: 2 },
        u = a + "09/01/Fi31X8yPR8n34KUuvHKFOe7HPqke.png";
    },
    "7p7D": function (t, e, i) {
      i.d(e, "a", function () {
        return r;
      });
      var a = i("US/N"),
        r = (t) =>
          Object(a.default)({
            path: "/wscgoods/tee-app/goods-selling-point.json",
            data: t,
          });
    },
    "8idp": function (t, e, i) {
      i.d(e, "a", function () {
        return n;
      });
      var a = i("Fcif"),
        r = i("Nvad"),
        n = (t) =>
          t.map((t) =>
            "string" == typeof t
              ? { text: t, isDefaultStyle: !0 }
              : Object(a.a)({ isDefaultStyle: !0 }, t, {
                  text: Object(r.b)(t.text || t.name || ""),
                })
          );
    },
    Ew4R: function (t, e, i) {
      var a = i("AGZf"),
        r = i("ONqW"),
        n = i("9ZMt"),
        s = { et: "view", ei: "view_activite_card", en: "权益卡激活曝光" },
        o = { et: "click", ei: "click_activite_card", en: "权益卡激活点击" };
      e.a = {
        methods: {
          benefitcardLogView() {
            Object(r.a)().log(s);
          },
          gotoUrl(t) {
            var { cardAlias: e, kdtId: i } = t;
            return (
              "/packages/benefit-card/detail/index?alias=" + e + "&kdt_id=" + i
            );
          },
          benefitcardClick(t, e) {
            void 0 === t && (t = {}),
              void 0 === e && (e = {}),
              t.mobile || Object(a.a)("授权失败，请重试"),
              Object(r.a)().log(o),
              n.default.navigate({ url: this.gotoUrl(e) });
          },
        },
      };
    },
    FSSn: function (t, e, i) {
      i.d(e, "e", function () {
        return s;
      }),
        i.d(e, "c", function () {
          return o;
        }),
        i.d(e, "a", function () {
          return c;
        }),
        i.d(e, "d", function () {
          return u;
        }),
        i.d(e, "b", function () {
          return l;
        });
      var a = i("Fcif"),
        r = i("US/N"),
        n = (t) => Object(r.default)(Object(a.a)({ withCredentials: !0 }, t)),
        s = (t) =>
          n({ path: "/wscgoods/poster/goods.json", data: t }).then((t) => ({
            imgUrl: t,
          })),
        o = (t) =>
          Object(r.requestV2)({
            path: "/wscgoods/weapp-poster/goods.json",
            data: t,
            withCredentials: !0,
          }),
        c = (t) =>
          Object(r.requestV2)({
            path: "/wscgoods/weapp/get-short-link.json",
            data: t,
            withCredentials: !0,
          }),
        u = (t) =>
          n({
            path: "/wscgoods/poster/card/goods-v2",
            data: Object(a.a)({}, t, { timestamp: +new Date() }),
          }),
        l = (t) =>
          n({ path: "/wscshop/reservation/share", method: "POST", data: t });
    },
    GOJL: function (t, e, i) {
      i.d(e, "b", function () {
        return r;
      }),
        i.d(e, "a", function () {
          return n;
        });
      var a = i("ONqW"),
        r = (t) => {
          Object(a.a)().log({
            et: "view",
            ei: "new_user_coupon",
            en: "新人券模块曝光",
            params: { act_id: t },
          });
        },
        n = (t) => {
          Object(a.a)().log({
            et: "view",
            ei: "click_new_user_coupon",
            en: "点击领券",
            params: { act_id: t },
          });
        };
    },
    Hb1V: function (t, e, i) {
      i.d(e, "a", function () {
        return r;
      }),
        i.d(e, "d", function () {
          return n;
        }),
        i.d(e, "c", function () {
          return s;
        }),
        i.d(e, "b", function () {
          return o;
        });
      var a = i("3tyi");
      function r(t) {
        var { goods: e, platform: i, price: a, shareData: r } = t;
      }
      var n = (t, e, i) => {
          if (!t || !e) return !1;
          var r = i ? Object(a.a)(t, i) : t,
            n = i ? Object(a.a)(e, i) : e;
          return (
            Object.keys(r).length === Object.keys(n).length &&
            Object.keys(r).every((t) => r[t] === n[t])
          );
        },
        s = (t, e) => {
          if (
            ((t = (t = t.replace(/\/pages\//, "/packages/")).replace(
              /\/detail\//,
              "/share/"
            )),
            !e)
          )
            return t;
          var i = t.split("?");
          return (
            i[0].replace(/\/share\/.*/, "/share/" + e) +
            (i[1] ? "?" + i[1] : "")
          );
        },
        o = [
          "alias",
          "umpAlias",
          "umpType",
          "activityId",
          "activityType",
          "offlineId",
          "shareType",
        ];
    },
    JEAk: function (t, e, i) {
      i.d(e, "a", function () {
        return a;
      });
      var a = ["theme-warm", "theme-hot", "theme-cold"];
    },
    RIHA: function (t, e, i) {
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "a", function () {
          return s;
        });
      var a = 1,
        r = 2,
        n = (t) => {
          var { preferentialType: e, description: i = "" } = t,
            n = "",
            s = "";
          if (e === a) {
            var o = i.match(/\d+(\.\d+)?\S*$/g);
            (n = o ? o[0] : ""), (s = i.replace(n, ""));
          } else e === r && ((s = i.slice(0, 1)), (n = i.slice(1)));
          return { contentNormal: s, contentHighLight: n };
        },
        s = function (t) {
          void 0 === t && (t = {});
          var { activityAlias: e, preferentialType: i } = t;
          return { bizCode: 3, bizSubCode: i === r ? 0 : 1, activityKey: e };
        };
    },
    S0oj: function (t, e, i) {
      i.d(e, "a", function () {
        return a;
      });
      var a = {
        inheritAttrs: !1,
        mixins: [i("KrsW").b.externalClassesMixin(["custom-class"])],
        props: {
          bulletKey: { type: Number, default: 0 },
          isPlaying: { type: Boolean, default: !0 },
          top: { type: Number, default: 0 },
          left: { type: Number, default: 0 },
          sourceData: { type: Object, default: () => ({}) },
          maxTextLength: { type: Number, default: 20 },
        },
        computed: {
          emotionUrl() {
            var t;
            return null == (t = this.sourceData.extra) ? void 0 : t.emotion;
          },
        },
        methods: {
          updateBullet(t) {
            this.$emit("update", t);
          },
        },
      };
    },
    UfCC: function (t, e, i) {
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "a", function () {
          return s;
        });
      var a = i("US/N"),
        r = i("ONqW");
      function n(t) {
        var { kdtId: e, activityId: i, activityAlias: n, shareTag: s } = t;
        return (
          Object(r.a)().log({
            et: "custom",
            ei: "visit_share_activity",
            en: "被分享人登录访问",
            params: { activityId: i, kdtId: e, shareTag: s },
          }),
          Object(a.default)({
            path: "/wscgoods/activity-api/join-share-benefit.json",
            method: "POST",
            data: { activityAlias: n, kdtId: e, shareTag: s },
            withCredentials: !0,
          })
        );
      }
      var s = (t) =>
        Object(a.default)({
          path: "/wscump/collage/groupon/can-join-group.json",
          data: t,
        });
    },
    Wzyf: function (t, e, i) {
      i.d(e, "a", function () {
        return u;
      }),
        i.d(e, "b", function () {
          return l;
        });
      var a = i("JijB"),
        r = i.n(a),
        n = i("w2Y9"),
        s = i.n(n),
        o = (i("9ZMt"), i("YeA1")),
        c = i("+66q"),
        u = (t) => {
          var {
              key: e = "",
              title: i = "",
              desc: a = "",
              endAt: n = "",
              startAt: s = "",
              matchIdentityType: o,
              activityLeadInMembershipInfo: u = {},
              overlayCopywriting: l = "",
              identities: d,
            } = t,
            { goodsListV2: h = [] } = t,
            f = "";
          if (s && n)
            try {
              (n = r()(n.replace(/[-.]/g, "/"), "YYYY.MM.DD")),
                (f =
                  (s = r()(s.replace(/[-.]/g, "/"), "YYYY.MM.DD")) + "-" + n);
            } catch (t) {}
          var p = i || "",
            m = i || "",
            v = null,
            g = !1;
          if (e === c.g.CASHBACK_PRO) {
            var { cashbackEnd: y, cashbackMethod: b } = t;
            (p = "random" === b ? "最高返" + y + "%" : "返" + y + "%"),
              (v = "showCashBackRule"),
              (g = !0),
              (m = "");
          } else if ([c.g.PRESENT, c.g.MEET_SEND].includes(e)) {
            var { presentOutList: w = [] } = t;
            a = "";
            var k = w.length;
            w.forEach((t, e) => {
              var {
                  presentPrefix: i,
                  presentSuffix: r,
                  chosenPresentsNum: n,
                } = t,
                s = n ? i.concat("送" + n + "种赠品") : i,
                o = "";
              -1 !== s.indexOf("赠品") && r ? (o += "、") : (o += ""),
                (a += "" + s + o + r + (e === k - 1 ? "" : "；") || "");
            }),
              (g = !0);
          } else
            /secondHalfDiscount|bale|plusBuy|postage/i.test(e) &&
              ((m = ""), (g = !0));
          (o || 0 === o) && (g = !0);
          return {
            disabled: !1,
            hasShowcase: !1,
            headValue: p,
            condition: "",
            title: a,
            valid: f,
            type: e,
            actionText: "",
            tag: m,
            eventName: v,
            hasExtraDesc: g,
            goodsList: h.slice(0, 3),
            matchIdentityType: o,
            activityLeadInMembershipInfo: u,
            overlayCopywriting: l,
            identities: d,
          };
        };
      function l(t, e) {
        var i,
          { guideType: a, guideTargetAlias: r } = t,
          n = "",
          c = getCurrentPages(),
          u = c[c.length - 1] || {},
          l = u.route || "",
          d = {
            guideType: "goods",
            kdt_id: e,
            redirectUrl: s.a.add(l, u.options),
          };
        1 === a
          ? (n = s.a.add(
              "https://h5.youzan.com/wscuser/levelcenter/fill?levelType=1",
              d
            ))
          : 2 === a
          ? (n = s.a.add(
              "https://cashier.youzan.com/pay/wscuser_paylevel?alias=" + r,
              d
            ))
          : 3 === a &&
            (n = s.a.add(
              "https://h5.youzan.com/wscuser/scrm/benefitcard?card_alias=" + r,
              d
            )),
          (n = s.a.add("pages/common/webview-page/index", { url: n })),
          null == (i = Object(o.a)()) || i.dmc.navigate(n);
      }
    },
    XV13: function (t, e, i) {
      i.d(e, "a", function () {
        return o;
      });
      var a = i("Fcif"),
        r = { 1: "comment-o" },
        n = { 1: "好评内容" },
        s = {
          1: (t) => {
            var e = t.tags.map((t) => "“" + t + "”").join("");
            return t.userCount + "人评价" + e;
          },
        },
        o = (t) => {
          var { tagType: e } = t;
          return Object(a.a)(
            { icon: r[e], content: s[e](t), typeName: n[e] },
            t
          );
        };
    },
    "YXd/": function (t, e, i) {
      e.a = {
        props: { value: { type: Boolean, default: !1 } },
        data() {
          return { showModal: this.value };
        },
        watch: {
          value(t) {
            this.showModal = t;
          },
          showModal(t) {
            this.$emit("input", t);
          },
        },
        methods: {
          handleCloseModal() {
            (this.showModal = !1), this.$emit("close");
          },
        },
      };
    },
    Ysif: function (t, e, i) {
      var a = i("w2Y9"),
        r = i.n(a),
        n = i("YeA1"),
        s = i("ONqW"),
        o = i("Wzyf"),
        c = { et: "view", ei: "ld_member_show", en: "限时折扣进行中会员引导" },
        u = {
          et: "view",
          ei: "ld_member_before_show",
          en: "限时折扣预告会员引导",
        },
        l = { et: "click", ei: "ld_member_click", en: "限时折扣会员引导点击" },
        d = {
          et: "click",
          ei: "ld_ump_member_click",
          en: "限时折扣会员活动风点击",
        },
        h = {
          et: "view",
          ei: "ld_ump_member_show",
          en: "限时折扣活动风会员引导",
        },
        f = { et: "view", ei: "goodsdetail_mj", en: "商详页入会组件曝光" },
        p = {
          et: "click",
          ei: "click_lead_membercenter",
          en: "商详页_引导办卡/办会员点击",
        };
      e.a = {
        methods: {
          discountLogView(t) {
            setTimeout(() => {
              var { isStarted: e, cardShow: i } = this.opt || {},
                a = t || (i ? (e ? c : u) : f);
              Object(s.a)().log(a);
            }, 500);
          },
          submitClickLogger(t) {
            var { cardShow: e } = this.opt || {},
              i = t || (e ? l : p);
            Object(s.a)().log(i);
          },
          discountClick(t) {
            var e, i, a, s, c;
            if (null != (e = this.opt) && e.mobile) {
              var u = r.a.add(this.$getPageRoute(), this.$getPageQuery()),
                l =
                  (null == (i = this.opt) ||
                  null == (a = i.recommendedPriceModel)
                    ? void 0
                    : a.cardUrl) || "";
              if (
                (this.submitClickLogger("timeLimitedDiscount" === t ? d : null),
                null != (s = this.opt) &&
                  null != (c = s.extraAction) &&
                  c.supportFastJoin)
              )
                this.opt.extraAction.fastJoin();
              else if ("timeLimitedDiscount" !== t) {
                if (l.indexOf("packages/levelcenter/plus/index") > -1)
                  setTimeout(() => {
                    var t;
                    null == (t = Object(n.a)()) || t.dmc.navigate(l);
                  }, 1e3);
                else {
                  var h = { guideType: "goods", redirectUrl: u },
                    f = r.a.get("src", l, !0);
                  f && (l = f),
                    setTimeout(() => {
                      var t;
                      null == (t = Object(n.a)()) ||
                        t.dmc.navigate(r.a.add(l, h));
                    }, 1e3);
                }
              } else {
                var { activityLeadInMembershipInfo: p = {}, kdtId: m } =
                  this.opt || {};
                setTimeout(() => {
                  Object(o.b)(p, m);
                }, 1e3);
              }
            } else this.reload();
          },
          timeLimitedDiscountClick() {
            this.discountClick("timeLimitedDiscount");
          },
          timeLimitedDiscountLogView() {
            this.discountLogView(h);
          },
        },
      };
    },
    ZLeP: function (t, e, i) {
      i.d(e, "a", function () {
        return a;
      }),
        i.d(e, "b", function () {
          return o;
        });
      var a,
        r = i("KEq0"),
        n = i.n(r);
      !(function (t) {
        (t[(t.BuyAction = 0)] = "BuyAction"),
          (t[(t.EvaluateAction = 1)] = "EvaluateAction"),
          (t[(t.EvaluateContent = 2)] = "EvaluateContent"),
          (t[(t.ViewAction = 3)] = "ViewAction");
      })(a || (a = {}));
      var s = "https://img01.yzcdn.cn/upload_files",
        o = [
          s + "/2021/12/16/FulLhw12J84boO8MoJOP2lCG4pKd.gif",
          s + "/2021/12/16/FpIOFOVv8XIZO-sbA2qbiJAusISG.gif",
          s + "/2021/12/16/ForMaFV8rTIiUU5Z-0NDXNajBvC7.gif",
        ].map((t) => n()(t, "!origin.webp"));
    },
    aury: function (t, e, i) {
      i.d(e, "a", function () {
        return a;
      });
      var a = {
        [1]: "开通免费会员，立享专属优惠",
        [2]: "开通指定付费会员，立享专属优惠",
        [3]: "开通权益卡，立享专属优惠",
      };
    },
    bR0K: function (t, e, i) {
      i.d(e, "a", function () {
        return r;
      });
      var a = i("Fcif");
      function r(t) {
        return t.map((t) =>
          Object(a.a)({}, t, {
            alias: t.alias,
            type: "simple",
            layout: "vertical",
            corner: "rect",
            align: "left",
            imgOpt: { src: t.imageUrl },
            titleOpt: {
              vMargin: 0,
              hMargin: 0,
              titleFontSize: 14,
              titleFontWeight: 500,
              titleExtraStyle: { height: "34px" },
              title: t.title,
              titleTags: t.showTags,
              bgColor: "transparent",
            },
            priceOpt: {
              price: (t.price / 100).toFixed(2),
              tagGap: 2,
              fontWeight: 600,
              decimalFontWeight: 600,
            },
          })
        );
      }
    },
    bzce: function (t, e, i) {
      i.d(e, "a", function () {
        return u;
      }),
        i.d(e, "b", function () {
          return l;
        });
      var a = i("Fcif"),
        r = i("KEq0"),
        n = i.n(r),
        s =
          (n()("public_files/d33b973450f089c4d3e820ec17ae1fdd.png", "small"),
          {
            type: "copy",
            name: "小程序链接",
            desc: "分享到朋友圈",
            icon: n()(
              "upload_files/2021/12/23/FqEcC8EgFgzLdVzyxsQE1UyVzqly.png",
              "small"
            ),
          }),
        o = {
          type: "poster",
          name: "生成海报",
          icon: n()(
            "public_files/283714a55084094b31e331a11caa8b13.png",
            "small"
          ),
        },
        c = {
          type: "native",
          name: "分享给好友",
          icon: n()(
            "public_files/a516f2ff09bb59f086dc2b6643b9472b.png",
            "small"
          ),
        },
        u = [Object(a.a)({}, c), s, o],
        l = {
          baidumini: {
            name: "百度分享",
            icon: n()(
              "public_files/58c5718e3497a9f49b7cc34c7978db2c.png",
              "small"
            ),
            desc: "需好友下载百度App",
          },
          ttapp: {
            name: "分享到抖音",
            icon: n()(
              "public_files/71c7428fa11ca43c0a1da282acf781bc.png",
              "small"
            ),
          },
          alipay: {
            name: "分享到支付宝",
            icon: n()(
              "public_files/25f6dc47d89621f157a6acdffd4f7240.png",
              "small"
            ),
          },
          qq: {
            name: "分享到QQ",
            icon: n()(
              "public_files/bd382c10134762906254f0fac6cebda4.png",
              "small"
            ),
          },
        };
      n()("upload_files/2022/04/06/FmIkakC8t49nzVEtM8pfW3UVfWVk.png", "small");
    },
    c2Og: function (t, e, i) {
      i.d(e, "a", function () {
        return r;
      }),
        i.d(e, "b", function () {
          return n;
        });
      var a = i("US/N");
      function r(t) {
        var { kdtId: e, activityAlias: i } = t;
        return Object(a.default)({
          path: "/wscgoods/activity-api/get-share-tag.json",
          data: { activityAlias: i, kdtId: e },
        });
      }
      function n(t) {
        var { seActivity: e, hasLogin: i, kdtId: a, alias: r } = t,
          n = i ? "" : "登录后",
          {
            rewardText: s,
            rewardName: o,
            rewardTimesLimitText: c,
            activityId: u,
            shareNum: l,
          } = e;
        return {
          linkText: (c ? c + "," : "") + " 查看详情",
          preText: n + "分享" + l + "位好友可得",
          text: s,
          textStyle:
            "position: relative;top: 1px;font-size: 20px;color: #ee0a24;font-weight: 500;",
          subText: o,
          alignLeft: !0,
          iconProps: {
            size: "18px",
            color: "#DE373E",
            name: "https://b.yzcdn.cn/public_files/4be833507d5d019bc3fde956b2588392.png",
          },
          link: {
            pageName: "ShareEncourage",
            query: { kdtId: a, alias: r, activityId: u },
          },
          loggerParams: { share_benefit_id: u },
          hasLogin: i,
        };
      }
    },
    dLlk: function (t, e, i) {
      i.d(e, "a", function () {
        return r;
      });
      var a = i("US/N");
      function r(t, e, i, r) {
        return (
          void 0 === i && (i = 1),
          void 0 === r && (r = 10),
          Object(a.requestUseCdn)({
            path: "/wscgoods/getItemTransactionRecords.json",
            data: { goodsId: t, rootKdtId: e || "", page: i, perpage: r },
            withCredentials: !0,
          })
        );
      }
    },
    eDYq: function (t, e, i) {
      i.d(e, "a", function () {
        return n;
      }),
        i.d(e, "b", function () {
          return s;
        });
      for (var a = [], r = 0; r < 33; r++) a.push(r);
      var n = {
          0: ["每天送达", "工作日送达", "周末每天送达", "隔天送达"],
          1: [
            "",
            "每周一",
            "每周二",
            "每周三",
            "每周四",
            "每周五",
            "每周六",
            "每周日",
          ],
          2: a.map((t) => (32 === t ? "每月最后一天" : "每月" + t + "号")),
        },
        s = { 0: "每天", 1: "每周", 2: "每月" };
    },
    fSjc: function (t, e, i) {
      var a;
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "a", function () {
          return s;
        }),
        (function (t) {
          (t[(t.AlgorithmBeautify = 10)] = "AlgorithmBeautify"),
            (t[(t.Cutting = 20)] = "Cutting"),
            (t[(t.Watermark = 30)] = "Watermark");
        })(a || (a = {}));
      var r = i("XKO5");
      function n(t, e, i, r) {
        var n,
          s = t;
        t &&
          r &&
          null != (n = r.ext) &&
          n.imageProcessEvents &&
          (s = (function (t) {
            if (t && Array.isArray(t)) {
              var e = !1,
                i = !1;
              return (
                t.forEach((t) => {
                  t === a.AlgorithmBeautify
                    ? (e = !0)
                    : t === a.Watermark && (i = !0);
                }),
                !(e && !i) && (!(!i || e) || !(!e || !i) || void 0)
              );
            }
          })(r.ext.imageProcessEvents)
            ? t
            : e);
        return s;
      }
      function s(t) {
        var e = {};
        if (t) {
          var { cardType: i, ext: a = {} } = t;
          e.card_type = i;
          var n = (function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            return e
              .map((t) => (t || []).filter((t) => Object(r.b)(t)).join(","))
              .join("|");
          })(a.imageProcessEvents, a.imageProcessEventExs);
          n && (e.img_ps = n);
        }
        return e;
      }
    },
    gycV: function (t, e, i) {
      i.d(e, "a", function () {
        return s;
      });
      var a = i("q29p"),
        r = i.n(a);
      function n(t) {
        return new Date(t.getFullYear(), t.getMonth(), t.getDate());
      }
      function s(t, e) {
        void 0 === e && (e = new Date());
        var i = new Date(t),
          a = i.getTime();
        if (!a) return "";
        if (a >= n(e)) {
          var s = e.getTime() - a;
          switch (!0) {
            case s < 0:
              return r()(i, "YYYY-MM-DD HH:mm:ss");
            case s < 6e4:
              return "刚刚";
            case s < 36e5:
              return Math.floor(s / 6e4) + " 分钟前";
            default:
              return Math.floor(s / 36e5) + " 小时前";
          }
        }
        return a >= new Date(n(e) - 864e5)
          ? "昨天"
          : a >=
            (function (t) {
              return new Date(t.getFullYear(), 0, 1);
            })(e)
          ? r()(i, "MM-DD HH:mm:ss")
          : r()(i, "YYYY-MM-DD HH:mm:ss");
      }
    },
    jBaK: function (t, e, i) {
      i.d(e, "b", function () {
        return s;
      }),
        i.d(e, "a", function () {
          return o;
        }),
        i.d(e, "c", function () {
          return c;
        });
      var a = i("Fcif"),
        r = i("lCVF"),
        n = i.n(r);
      function s(t, e) {
        var { itemPreOrderModel: i } = e;
        if (null != i && i.day)
          for (var { monthDataList: a = [] } = t, r = 0; r < a.length; r++)
            for (
              var { year: n, month: s } = a[r], { days: o } = a[r], c = 0;
              c < o.length;
              c++
            ) {
              var u = o[c],
                { isEnable: l, date: d } = u;
              if (l) {
                var h = i.time.split(":"),
                  f = new Date(n, s - 1, d - i.day, h[0], h[1], h[2]);
                new Date().getTime() >= f.getTime() &&
                  ((u.isEnable = 0), (u.header = ""), (u.footer = ""));
              }
            }
      }
      function o(t, e) {
        var i = { months: [] };
        var r = t.nearlyFourMonthMinPriceMap,
          o = Object.keys(r);
        return (
          (i.months = []),
          (i.monthDataList = o.map((e) => {
            var [s, o] = e.split("-"),
              c = r[e],
              [u, l] = (function (e, i) {
                for (
                  var r,
                    s,
                    o = t.ecardPriceCalendarModelMap,
                    c = new Date(e, i, 0).getDate(),
                    u = [],
                    l = 1 / 0,
                    d = 1;
                  d <= c;
                  d++
                ) {
                  var h = o[e + "-" + i + "-" + (d > 9 ? d : "0" + d)],
                    f =
                      ((r = h.activityPrice),
                      (s = h.originPrice),
                      void 0 === r ? s : r);
                  n()(f) && ((l = f > l ? l : f), (f = "¥" + n()(f)));
                  var p = "";
                  h.stockNum > 0
                    ? (p = "余" + h.stockNum)
                    : 0 === h.stockNum && ((p = "已售罄"), (h.isEnable = !1)),
                    u.push(
                      Object(a.a)({}, h, {
                        date: d,
                        activeHeader: h.stockNum < 50,
                        header: p,
                        footer: f || "",
                        id: h.stockDate,
                      })
                    );
                }
                return [l, u];
              })(s, o);
            return (
              i.months.push({
                name: +o,
                year: +s,
                price: c,
                label: -1 === c ? "已售罄" : "¥" + n()(u) + "起",
              }),
              { year: s, month: o, days: l }
            );
          })),
          i.monthDataList.sort((t, e) =>
            new Date(t.year, t.month) > new Date(e.year, e.month) ? 1 : -1
          ),
          s(i, e),
          i
        );
      }
      function c(t, e) {
        for (
          var i = new Date(),
            a = i.getMonth(),
            r = i.getFullYear(),
            o = "¥" + n()(t),
            c = { months: [], monthDataList: [] },
            { months: u, monthDataList: l } = c,
            d = 0;
          d < 4;
          d++
        ) {
          var h = a + d + 1,
            f = r;
          h > 12 && ((h -= 12), (f += 1));
          var p = new Date(f, h, 0).getDate();
          u.push({ name: h, year: f, price: o, label: o + "起" });
          var m = [];
          l.push({ year: f, month: h, days: m });
          for (var v = 1; v <= p; v++) {
            var g = new Date(f, h - 1, v, 23, 59, 59) >= i;
            m.push({
              date: v,
              isEnable: g,
              footer: g ? o : "",
              id: "m-" + f + "-" + h + "-" + v,
            });
          }
        }
        return s(c, e), c;
      }
    },
    kFjl: function (t, e, i) {
      i.d(e, "a", function () {
        return o;
      });
      var a = i("BANk"),
        r = (i("882d"), i("US/N"));
      function n() {}
      function s(t) {
        var { file: e } = t,
          i = t.success || n,
          s = t.fail || n,
          o = t.progress || n;
        !(function (t) {
          var e = t.success || n,
            i = t.fail || n;
          Object(r.default)({
            path: "/wscshop/token/upload-image.json",
            withCredentials: !0,
          })
            .then((t) => e(t.token))
            .catch(i);
        })({
          success(r) {
            !(function (t) {
              var {
                  file: e,
                  imgFile: i,
                  uploadToken: r,
                  success: s,
                  progress: o,
                  fail: c,
                } = t,
                u = Object(a.a)({
                  url: "https://up.yzcdn.cn/",
                  filePath: e,
                  fileType: "image",
                  fileName: "file",
                  name: "file",
                  formData: { token: r, "x:skip_save": 1 },
                  success: (t) => {
                    try {
                      t = JSON.parse(t.data);
                    } catch (t) {
                      c({
                        type: "yz:uploadFile",
                        code: -99999,
                        msg: "JSON解析错误",
                      });
                    }
                    0 == +t.code
                      ? s(t.data)
                      : c({ type: "yz:uploadFile", code: t.code, msg: t.msg });
                  },
                  fail: (t) => {
                    c({
                      type: "wx:uploadFile",
                      code: -99999,
                      msg: t.errMsg || t.errorMessage,
                    });
                  },
                });
              o !== n && u.onProgressUpdate(o);
            })({
              file: e,
              imgFile: t.imgFile,
              uploadToken: r,
              success: i,
              progress: o,
              fail: s,
            });
          },
          fail(t) {
            s(t);
          },
        });
      }
      function o(t) {
        return s(t);
      }
    },
    "m0R/": function (t, e, i) {
      i("US/N");
    },
    mC8k: function (t, e, i) {
      i.d(e, "a", function () {
        return n;
      });
      var a = i("ONqW"),
        r = () => {};
      var n = function (t, e) {
        var i;
        void 0 === e && (e = { observeAll: !0 }),
          (i = t.createIntersectionObserver(e));
        var { observe: n } = i;
        return (
          (i.observe = function (t, e) {
            return (
              void 0 === e && (e = r),
              n.call(
                i,
                t,
                ((t, e) =>
                  function (i) {
                    Array.isArray(i) || (i = [i]),
                      (i = i.filter((t) => t.intersectionRatio > 0));
                    for (
                      var { pushedLogList: r = [] } = e, n = [], s = 0;
                      s < i.length;
                      s++
                    ) {
                      var o,
                        c = i[s];
                      (o = c.dataset.viewlog),
                        r.includes(o) ||
                          (n.push(c),
                          r.push(o),
                          o && Object(a.a)().log(JSON.parse(o)));
                    }
                    (e.pushedLogList = r), t(n);
                  })(e, i)
              )
            );
          }),
          i
        );
      };
    },
    vGTa: function (t, e, i) {
      i.d(e, "a", function () {
        return l;
      });
      var a = i("Fcif");
      function r(t, e) {
        return (
          void 0 === t && (t = 1),
          void 0 === e && (e = 1e4),
          t + Math.floor((e - t) * Math.random())
        );
      }
      class n {
        constructor(t) {
          var {
            key: e = r(),
            track: i,
            width: a = 0,
            top: n = 0,
            left: s = 9999,
            startTime: o = 0,
            seen: c = !1,
            data: u,
          } = t;
          (this.track = i),
            (this.key = e),
            (this.width = a),
            (this.top = n),
            (this.left = s),
            (this.nextKey = void 0),
            (this.startTime = o),
            (this.runtime = 0),
            (this.seen = c),
            (this.data = u);
        }
        set(t) {
          Object.assign(this, Object(a.a)({}, t));
        }
        setNext(t) {
          this.nextKey = t;
        }
        hasNext() {
          return !!this.nextKey;
        }
        getData() {
          return {
            key: this.key,
            top: this.top,
            left: this.left,
            data: this.data,
          };
        }
      }
      class s {
        constructor(t) {
          (this.delay = t), (this.timerId = void 0);
        }
        add(t) {
          clearTimeout(this.timerId),
            (this.timerId = setTimeout(t, this.delay));
        }
        clear() {
          clearTimeout(this.timerId), (this.timerId = void 0);
        }
        exists() {
          return !!this.timerId;
        }
      }
      var o = {
          offsetH: 8,
          offsetV: 8,
          bulletHeight: 32,
          infinite: !1,
          loop: !1,
          speed: 14,
          onUpdate: () => {},
          onPlayChange: () => {},
          onBulletView: () => {},
        },
        c = 0,
        u = 1;
      class l {
        constructor(t) {
          this.setOptions(t),
            (this.cursor = -1),
            (this.dataSet = []),
            (this.bullets = []),
            (this.isPlaying = !1),
            (this.lastIsPlaying = !1),
            (this.initialized = !1),
            (this.__TRACK_TOP_MAP = {}),
            (this.__BULLET_META_CACHE = {});
          var e = 2 * this.options.speed;
          (this.__walkTimer = new s(e)), (this.__restartTimer = new s(5e3));
        }
        setOptions(t) {
          return (this.options = Object(a.a)({}, o, t)), this.options;
        }
        init(t) {
          var { dataSet: e = [], viewWidth: i = 0 } = t;
          if (!this.initialized) {
            if (!Array.isArray(e))
              throw new Error("[Danmaku] Dataset can't be empty.");
            (this.dataSet = e), (this.viewWidth = i);
            var { offsetV: a, bulletHeight: r } = this.options;
            (this.__TRACK_TOP_MAP = { [c]: 0, [u]: a + r }),
              this.resetBullets(),
              (this.initialized = !0);
          }
        }
        play() {
          if (!(this.isPlaying || this.dataSet.length <= 0)) {
            var t = () => {
              if ((this.__restartTimer.clear(), -1 === this.cursor)) {
                if (
                  (this.bullets.push(
                    this.prepareNextBullet(c),
                    this.prepareNextBullet(u)
                  ),
                  -1 === this.cursor)
                )
                  return;
                return (
                  this.walkBullets(),
                  this.emitPlayChange(!0),
                  void this.__walkTimer.add(t)
                );
              }
              if (this.bullets.length <= 0)
                return (
                  this.resetBullets(),
                  this.emitPlayChange(!1),
                  void (this.options.loop && this.__restartTimer.add(t))
                );
              this.walkBullets(),
                this.__walkTimer.exists() || this.emitPlayChange(!0),
                this.__walkTimer.add(t);
            };
            setTimeout(t, 0);
          }
        }
        pause() {
          this.clearTimers(), this.emitPlayChange(!1);
        }
        stop() {
          this.clearTimers(), this.resetBullets(), this.emitPlayChange(!1);
        }
        resume() {
          this.lastIsPlaying && this.play();
        }
        refresh(t) {
          var { viewWidth: e } = void 0 === t ? {} : t;
          (this.viewWidth = e || this.viewWidth), this.emitUpdate();
        }
        destroy() {
          this.stop(), (this.initialized = !1);
        }
        clearTimers() {
          this.__walkTimer.clear(), this.__restartTimer.clear();
        }
        resetBullets() {
          this.bullets.splice(0, this.bullets.length),
            (this.__BULLET_META_CACHE = {}),
            (this.cursor = -1),
            this.emitUpdate();
        }
        createBullet(t, e) {
          return new n({
            track: e,
            top: this.__TRACK_TOP_MAP[e],
            left: 0,
            data: this.dataSet[t],
          });
        }
        prepareNextBullet(t) {
          if (this.cursor >= this.dataSet.length - 1) {
            if (!this.options.infinite) return null;
            this.cursor = -1;
          }
          return (this.cursor += 1), this.createBullet(this.cursor, t);
        }
        updateBullet(t, e) {
          this.__BULLET_META_CACHE[e] = Object(a.a)(
            {},
            this.__BULLET_META_CACHE[e],
            t
          );
        }
        restoreBulletsTime(t) {
          var e = Date.now();
          this.bullets.forEach((i) => {
            var { runtime: a } = i;
            if (!t) {
              var r = i.startTime || e;
              a += e - r;
            }
            i.set({ runtime: a, startTime: 0 });
          });
        }
        walkBullets() {
          for (
            var { offsetH: t, speed: e } = this.options,
              i = [],
              r = [],
              n = !1,
              s = Date.now(),
              o = 0;
            o < this.bullets.length;
            o++
          ) {
            var c = this.bullets[o],
              { width: u, startTime: l } = c;
            u ||
              (({ width: u } = this.__BULLET_META_CACHE[c.key] || {}),
              u && c.set({ width: u })),
              l || ((l = s), c.set({ startTime: l }), (n = !0));
            var d = Math.floor((c.runtime + s - l) / e);
            if (u > 0) {
              if (d > u + c.left + t + this.viewWidth + this.viewWidth) {
                n = !0;
                continue;
              }
              if (d >= 0 && !c.hasNext()) {
                var h = this.prepareNextBullet(c.track);
                if (h) {
                  var f = c.left + u + t;
                  h.set({ left: f, runtime: -(f - c.left) * e }),
                    r.push(h),
                    c.setNext(h.key),
                    (n = !0);
                }
              }
            }
            !c.seen &&
              d >= 10 &&
              (c.set({ seen: !0 }),
              this.emit(
                "onBulletView",
                Object(a.a)({}, c.getData(), { index: o })
              )),
              i.push(c);
          }
          (this.bullets = i.concat(r)), n && this.emitUpdate();
        }
        emit(t, e) {
          return Promise.resolve().then(() => {
            var i, a;
            return null == (i = (a = this.options)[t]) ? void 0 : i.call(a, e);
          });
        }
        emitUpdate() {
          var t = this.bullets.map((t) => t.getData());
          this.emit("onUpdate", t);
        }
        emitPlayChange(t) {
          var e = this.isPlaying;
          (this.lastIsPlaying = e),
            (this.isPlaying = t),
            this.restoreBulletsTime(t),
            t !== e && this.emit("onPlayChange", t);
        }
      }
    },
    "xJ+J": function (t, e, i) {
      i.d(e, "a", function () {
        return s;
      }),
        i.d(e, "b", function () {
          return o;
        });
      var a = {
          meetReduce: "满减",
          meetSend: "实付满赠",
          present: "赠品",
          postage: "包邮",
          cashBack: "返现",
          cashbackPro: "返现",
          tuanCashBack: "团购返现",
          packageBuy: "优惠套餐",
          bale: "打包一口价",
          plusBuy: "加价购",
          supplierMeetReduce: "供货商满减",
          secondHalfDiscount: "第二件半价",
        },
        r = (t) => JSON.stringify(t),
        n = (t, e, i) => ({
          coupon_name: t.title,
          discounted_price: t.headValue + t.unit,
          coupon_conditions: t.condition,
          index: e + 1,
          source: i,
          component: "promotion_panel",
        }),
        s = (t, e, i) => {
          var a = n(t, e, i);
          return {
            viewLog: r({
              et: "view",
              ei: "coupon_view",
              en: "优惠券曝光",
              params: a,
            }),
            clickLog: {
              et: "click",
              ei: "coupon_click",
              en: "优惠券点击",
              params: a,
            },
          };
        },
        o = (t, e, i) => {
          var n = ((t, e, i) => ({
            promotions_conditions: t.title,
            promotions_name: t.headValue,
            promotions_type: a[t.type] || t.type,
            index: e + 1,
            source: i,
            component: "promotion_panel",
          }))(t, e, i);
          return {
            viewLog: r({
              et: "view",
              ei: "promotions_view",
              en: "促销活动曝光",
              params: n,
            }),
            clickLog: {
              et: "click",
              ei: "promotio_click",
              en: "促销活动点击",
              params: n,
            },
          };
        };
    },
    zGtj: function (t, e, i) {
      i.d(e, "a", function () {
        return a;
      });
      var a = {
        INIT: 0,
        FLAGSHIP: 1,
        EXCLUSIVE: 2,
        CHAIN: 3,
        BOUTIQUE: 4,
        SHOPPING: 5,
        REJECT: 99,
      };
    },
  });
