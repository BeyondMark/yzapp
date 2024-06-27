"use strict";
(exports.ids = [16]),
  (exports.modules = {
    "+BXj": function (t, e, i) {
      var n = { 0: "当日达", 1: "次日达", 2: "隔日达" };
      e.a = { getTagName: (t) => n[t] || null };
    },
    "38pn": function (t, e, i) {
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "c", function () {
          return r;
        }),
        i.d(e, "a", function () {
          return a;
        });
      var n = (t) => {
          var { province_list: e, city_list: i, county_list: n } = t,
            r = (t, e) =>
              Object.entries(t).map((t) => {
                var [i, n] = t;
                return {
                  code: i,
                  name: n,
                  parent: i.slice(0, 2 * (e - 1)).padEnd(6, "0"),
                };
              });
          return [r(e, 1), r(i, 2), r(n, 3)];
        },
        r = (t) => {
          var {
              areaCode: e,
              province: i,
              city: n,
              county: r,
              id: a,
              addressDetail: s,
              lat: o,
              lon: c,
            } = t,
            u = {
              province: { code: e.slice(0, 2).padEnd(6, "0"), name: i },
              city: { code: e.slice(0, 4).padEnd(6, "0"), name: n },
              county: { code: e, name: r },
              id: a,
            };
          return (
            s && (u.detail = s),
            o &&
              c &&
              ((u.latitude = parseFloat(o)), (u.longitude = parseFloat(c))),
            u
          );
        },
        a = () => !1;
    },
    "7dhF": function (t, e, i) {
      i.d(e, "i", function () {
        return r;
      }),
        i.d(e, "h", function () {
          return a;
        }),
        i.d(e, "e", function () {
          return s;
        }),
        i.d(e, "d", function () {
          return o;
        }),
        i.d(e, "c", function () {
          return c;
        }),
        i.d(e, "b", function () {
          return u;
        }),
        i.d(e, "f", function () {
          return l;
        }),
        i.d(e, "j", function () {
          return d;
        }),
        i.d(e, "a", function () {
          return p;
        }),
        i.d(e, "k", function () {
          return g;
        }),
        i.d(e, "g", function () {
          return v;
        });
      var n = i("9ZMt"),
        r = {
          0: "card",
          1: "waterfall",
          2: "simple",
          3: "promotion",
          4: "multi",
          5: "card2",
          6: "points",
          7: "card-shadow",
          8: "tag-left",
        },
        a = {
          CARD: 0,
          WATERFALL: 1,
          SIMPLE: 2,
          PROMOTION: 3,
          MULTI: 4,
          CARD2: 5,
          POINTS: 6,
          CARD_SHADOW: 7,
          TAG_LEFT: 8,
        },
        s = {
          0: "big",
          1: "small",
          2: "hybrid",
          3: "list",
          5: "three",
          6: "swipe",
        },
        o = { BIG: 0, SMALL: 1, HYBRID: 2, LIST: 3, THREE: 5, SWIPE: 6 },
        c = { 0: "3-2", 1: "1-1", 2: "3-4", 3: "16-9" },
        u = { 1: "cover", 2: "contain" },
        l = { 1: "rect", 2: "circle" },
        d = { 1: "normal", 2: "bold" },
        p =
          "https://b.yzcdn.cn/public_files/d89746888da2d9510b64a9f031eaecd5.gif",
        h = {
          note: "/packages/shop/shopnote/detail/index",
          coupon: "/packages/user/coupon/shop/index",
          goods: "/pages/goods/detail/index",
        },
        m = {
          note: "/wscshop/shopnote/detail",
          coupon: "/wscump/coupon/shop",
          goods: "/wscgoods/detail",
        };
      var g = "web" === n.default.getEnv() ? m : h,
        v = { hot_sale: "销量榜", popular: "人气榜", new_arrival: "新品榜" };
    },
    "8cCh": function (t, e, i) {
      var n = i("eijD"),
        r = i("j1X+"),
        a = i("cibE"),
        s = i("38pn"),
        o = i("7lfQ"),
        c = i("/+Uc"),
        u = i("Hrzu"),
        l = null,
        d = (t) => Object(u.a)(t),
        p = (function () {
          var t = Object(n.a)(function* () {
            var t = a.a.get();
            if (t) return t;
            var e = yield d();
            if (e.length > 0) {
              var i = e.find((t) => t.isDefault),
                n = [...e].sort((t, e) => t.id - e.id)[0],
                c = Object(s.c)(i || n);
              return a.a.set(c), c;
            }
            if (yield Object(o.a)("scope.userLocation")) {
              var u = yield r.a.getCurrentRegion();
              if (u) return a.a.set(u), u;
            }
          });
          return function () {
            return t.apply(this, arguments);
          };
        })();
      e.a = {
        init: (t) => {
          t;
        },
        destroyed: () => {
          null;
        },
        getAreaList: () =>
          l ? Promise.resolve(l) : Object(c.b)().then((t) => ((l = t), t)),
        getUserAddressList: d,
        getUserAddress: p,
      };
    },
    Arjo: function (t, e, i) {
      i.d(e, "a", function () {
        return c;
      }),
        i.d(e, "b", function () {
          return u;
        });
      var n = i("NHEX"),
        r = i.n(n),
        a = i("lCVF"),
        s = i.n(a),
        o = i("+66q"),
        c = ["seckill", "helpCut", "luckyDrawGroup", o.a.AUCTION],
        u = {
          [o.a.AUCTION](t) {
            var { stepTime: e, stepPrice: i } = t,
              n = "降价幅度：每" + e / 1e3 / 60 + "分钟降" + s()(i) + "元";
            return { label: n, rules: [n] };
          },
          seckill(t) {
            var { isCheckRight: e, buyNeedBook: i } = t;
            if (!1 === i) return {};
            var n = r()(t, "limit.quota", 0),
              a = "",
              s = [];
            return (
              e && s.push("预约成功后才能参加秒杀"),
              (a += n ? "每人限购" + n + "件" : "") && s.push(a),
              { label: s.join("，"), rules: s }
            );
          },
          helpCut(t) {
            var { minPrice: e, shopName: i } = t,
              n = (e / 100).toFixed(2);
            return {
              label: "邀请好友帮砍，可" + n + "元购买商品",
              rules: [
                "1. 活动期间消费者可邀请好友帮忙砍价，好友砍到底价" +
                  n +
                  "元后，即可按" +
                  n +
                  "元购买商品；",
                "2. 好友帮忙砍到底价" +
                  n +
                  "元后，消费者须在有效期内购买砍价商品，逾期商品将恢复零售价；",
                "3. 同一商品，同一用户仅可享受一次优惠价格；",
                "4. 同一商品，同一用户仅能帮好友砍价一次；",
                "5. 砍价商品数量有限。商品售罄后，商品将无法购买，即使你已经发起砍价；",
                "6. 若系统判断用户为恶意刷单，" +
                  i +
                  "针对已下单的商品有权不予发货；对于刷单金额较大或行为较为恶劣者，" +
                  i +
                  "有权追究用户的法律责任。",
              ],
            };
          },
          luckyDrawGroup(t) {
            var {
              joinNum: e,
              participantNum: i,
              goodsTitle: n,
              couponName: r,
              shopPhone: a,
            } = t;
            return {
              label: "邀请" + (e || i || 0) + "名好友成团，即可获得抽奖资格",
              rules: [
                "开奖时间：活动结束后立即开奖。",
                "1. 活动结束后将从拼团成功的用户中，随机抽取中奖者；",
                "2. 拼团未成功不具备抽奖资格，拼团成功后可获得抽奖资格；一等奖为【" +
                  n +
                  "】" +
                  (r ? "二等奖为【" + r + "】" : ""),
                "3. 同一商品，同一用户仅限作为团员成团一次，但可以作为团长无限发起拼团，成团后，中奖概率叠加。",
                "4. " +
                  (r ? "【" + r + "】在抽奖结束后立即发放，" : "") +
                  "【" +
                  n +
                  "】在抽奖结束后72小时内发货。",
                a ? "客服电话：【" + a + "】" : "",
              ],
            };
          },
        };
    },
    BKL7: function (t, e, i) {
      var n =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.jumpToLinkByLink =
          e.getPcOrMobileClientWidth =
          e.getFloatBase =
          e.isNewIphone =
            void 0);
      var r = i("9VdR"),
        a = n(i("hmrP"));
      function s() {
        var t = r.getSystemInfoSync().model.replace(/\s/g, "-");
        return /iphone-x|iPhone11|iPhone13|iPhone12(?!,8>)|iPhone14/i.test(t);
      }
      (e.isNewIphone = s),
        (e.getFloatBase = function () {
          return s() ? 84 : 50;
        }),
        (e.getPcOrMobileClientWidth = function () {
          var t = r.getSystemInfoSync().windowWidth,
            e = Math.min(t, 540);
          return a.default.isMobile() || a.default.isIPad() ? t : e;
        }),
        (e.jumpToLinkByLink = function (t) {
          var e = document.createElement("a");
          (e.href = t),
            (e.style.display = "none"),
            document.body.appendChild(e),
            e.click(),
            document.body.removeChild(e);
        });
    },
    L9n3: function (t, e, i) {
      i.d(e, "a", function () {
        return r;
      });
      var n = i("US/N"),
        r = (t, e) =>
          Object(n.requestUseCdn)({
            path: "/wscshop/common/shop-rest.json",
            method: "GET",
            data: { kdtId: t, offlineId: e },
          });
    },
    LKlL: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = function (t, e) {
        return (
          t.getFullYear() === e.getFullYear() &&
          t.getMonth() === e.getMonth() &&
          t.getDate() === e.getDate()
        );
      };
      (e.default = n), (t.exports = e.default);
    },
    LbBz: function (t, e, i) {
      i.d(e, "a", function () {
        return s;
      });
      var n = i("poDo"),
        r = 1,
        a = 2,
        s = function (t) {
          var { extended_data: e = {} } = void 0 === t ? {} : t,
            { valid_time_generate_type: i } = e;
          if (i === r) {
            var { absolute_valid_start_time: s, absolute_valid_end_time: o } =
              e;
            return (
              Object(n.b)(s, "YYYY.MM.DD") +
              " -\n" +
              Object(n.b)(o, "YYYY.MM.DD")
            );
          }
          if (i === a) {
            var {
              relative_valid_time_begin_interval: c,
              relative_valid_time_duration: u,
            } = e;
            return 0 === c
              ? "领券当日起" + u + "天可用"
              : 1 === c
              ? "领券次日起" + u + "天内可用"
              : "领券" + c + "天后生效，\n有效期" + u + "天";
          }
        };
    },
    LmKK: function (t, e, i) {
      i.d(e, "a", function () {
        return r;
      });
      var n = i("US/N"),
        r = (t) =>
          Object(n.default)({
            path: "/wscump/collage/groupon/can-join-group.json",
            data: t,
          });
    },
    MQ8E: function (t, e, i) {
      i.d(e, "a", function () {
        return n;
      });
      var n = {
        type: "card",
        corner: "circle",
        layout: "vertical",
        layoutType: "swipe",
        titleOpt: {
          titleFontWeight: "400",
          titleFontSize: 13,
          vMargin: 0,
          hMargin: 0,
          bgColor: "transparent",
          height: "38px",
        },
        subTitleOpt: {
          titleFontSize: 12,
          titleLines: 1,
          titleColor: "#969799",
          vMargin: 0,
          hMargin: 0,
          bgColor: "transparent",
          height: "26px",
        },
        imgOpt: {},
      };
    },
    PIyU: function (t, e, i) {
      i.d(e, "a", function () {
        return a;
      });
      var n = i("Fcif"),
        r = i("7dhF");
      function a(t, e) {
        return Object(n.a)(
          {
            type: "card",
            corner: "circle",
            align: "left",
            layoutType: "two",
            theme: "theme",
            useTagsSlot: e.showRecommendTags,
          },
          (function (t, e, i) {
            return {
              mask: t.isSoldout ? "soldout" : t.isEnd ? "end" : void 0,
              imgOpt: {
                cornerMark: e.showCornerMark,
                src: t.image_url || t.head_image_url || r.a,
              },
              imageStyle: {},
            };
          })(t, e),
          (function (t) {
            return {
              titleOpt: {
                title: t.title,
                titleFontSize: 14,
                vMargin: 0,
                height: "40px",
                hMargin: 0,
              },
            };
          })(t),
          (function (t) {
            return { priceOpt: { fontSize: 16, tagGap: 2, price: t.price } };
          })(t),
          (function (t) {
            var { show_ranking_info: e = !1, extended_data: i = {} } = t,
              { rank_no: a, rank_type: s } = i || {},
              o = {};
            return (
              a && s
                ? (o = {
                    itemHeight: "15px",
                    list: [
                      {
                        title: "本店" + r.g[s] + "第" + a,
                        titleColor: "var(--icon, #323233)",
                        titleFontWeight: 400,
                        titleFontSize: 12,
                        hMargin: 0,
                        vMargin: 0,
                      },
                    ],
                  })
                : e && (o = { itemHeight: "15px", list: [{ title: "" }] }),
              { extOpt: Object(n.a)({}, o) }
            );
          })(t)
        );
      }
    },
    QfO8: function (t, e, i) {
      var n = i("Fcif"),
        r = i("+I+c"),
        a = i("OK7I"),
        s = i.n(a),
        o = ["params"],
        c = null,
        u = "",
        l = "",
        d = {
          0: { et: "view", ei: "delivery_today_view", en: "当日达曝光" },
          1: { et: "view", ei: "delivery_tomorrow_view", en: "次日达曝光" },
          2: {
            et: "view",
            ei: "delivery_after_tomorrow_view",
            en: "隔日达曝光",
          },
          3: { et: "view", ei: "delivery_after_three", en: "3天内送达" },
          4: { et: "view", ei: "delivery_after_four", en: "4天内送达" },
          5: { et: "view", ei: "delivery_after_five", en: "5天内送达" },
        },
        p = (t) => {
          var e,
            i,
            { params: a } = t,
            s = Object(r.a)(t, o),
            d = Object(n.a)({}, s, {
              params: Object(n.a)({}, a, {
                goods_id: u,
                user_id: l,
                component: "EstimatedTimeOfDelivery",
                lastModified: "202111018",
              }),
            });
          return null == (e = c) || null == (i = e.logger) ? void 0 : i.log(d);
        };
      e.a = {
        init: (t) => {
          var e, i, n, r;
          (c = t),
            (u = String(
              (null == (e = c.data) || null == (i = e.goodsBaseInfo)
                ? void 0
                : i.id) || 0
            )),
            (l = String(
              (null == (n = c.data) || null == (r = n.userInfo)
                ? void 0
                : r.userId) || 0
            ));
        },
        destroyed: () => {
          c = null;
        },
        showComponent: () => {
          return p({
            et: "view",
            ei: "estimated_time_component_view",
            en: "预计送达时间组件曝光",
            params: {
              banner_id:
                ((i = s()(8)),
                (null == (t = c) || null == (e = t.logger)
                  ? void 0
                  : e.getPageSpm()) +
                  "~EstimatedTimeOfDelivery~1~" +
                  i),
            },
          });
          var t, e, i;
        },
        showTime: (t, e) =>
          p({
            et: "view",
            ei: "delivery_time_view",
            en: "预计送达时间曝光",
            params: {
              estimated_time: null != e ? e : -1,
              source: t ? "alg" : "logistics",
            },
          }),
        showAddress: (t) =>
          p({
            et: "view",
            ei: "shipping_address_view",
            en: "收货地址曝光",
            params: { address_source: t ? "user_choose" : "no_user_choose" },
          }),
        showAddressNotSupported: () =>
          p({
            et: "view",
            ei: "delivery_is_not_supported_view",
            en: "收货地址不支持配送提示曝光",
          }),
        showAddressShouldSelect: () =>
          p({
            et: "view",
            ei: "choose_address_note_view",
            en: "选择地址查看预计送达时间曝光",
          }),
        clickAddressShouldSelect: () =>
          p({
            et: "click",
            ei: "choose_address",
            en: "选择地址查看预计送达时间点击",
          }),
        clickAddress: () =>
          p({
            et: "click",
            ei: "change_address_click",
            en: "切换收货地址点击",
          }),
        showRegionPopup: () =>
          p({
            et: "view",
            ei: "choose_province_view",
            en: "选择所在地区面板曝光",
          }),
        clickRegionPopup: () =>
          p({
            et: "click",
            ei: "choose_province_click",
            en: "选择所在地区面板点击",
          }),
        showAddressPopup: () =>
          p({
            et: "view",
            ei: "choose_address_panel_view",
            en: "选择收货地址面板曝光",
          }),
        clickAddressPopup: () =>
          p({
            et: "click",
            ei: "choose_address_panel_click",
            en: "选择收货地址面板点击",
          }),
        showTags: (t) => d[t] && p(d[t]),
      };
    },
    QhQU: function (t, e, i) {
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "a", function () {
          return r;
        });
      var n = { NORMAL: "NORMAL", SKU: "SKU" },
        r = 44;
    },
    TTtO: function (t, e, i) {
      i.d(e, "a", function () {
        return r;
      });
      var n = i("US/N");
      function r(t) {
        return Object(n.default)({
          path: "/wscassets/api/prior-use/pay-channel-v2",
          data: t,
          options: { useCdn: !0 },
        });
      }
    },
    V4HK: function (t, e, i) {
      i.d(e, "a", function () {
        return s;
      });
      var n = i("Fcif"),
        r = i("KEq0"),
        a = i.n(r);
      function s(t) {
        return t.map((t) =>
          Object(n.a)({}, t, {
            alias: t.alias,
            type: "simple",
            layout: "vertical",
            corner: "circle",
            theme: "theme",
            align: "left",
            imgOpt: { src: a()(t.imageUrl, "!520x0.jpg"), corner: "circle" },
            titleOpt: {
              vMargin: 0,
              hMargin: 0,
              titleFontSize: 13,
              titleFontWeight: 400,
              titleExtraStyle: { height: "34px" },
              title: t.title,
              bgColor: "transparent",
            },
            priceOpt: {
              price: (t.price / 100).toFixed(2),
              tagGap: 2,
              fontSize: 18,
            },
            isTagsShow: !0,
            tagsOpt: {
              list: ((null == t ? void 0 : t.showTags) || []).map((t) => ({
                label: t,
              })),
            },
          })
        );
      }
    },
    a0gO: function (t, e, i) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, i, n) {
                void 0 === n && (n = i),
                  Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: function () {
                      return e[i];
                    },
                  });
              }
            : function (t, e, i, n) {
                void 0 === n && (n = i), (t[n] = e[i]);
              }),
        r =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var i in t)
              "default" === i ||
                Object.prototype.hasOwnProperty.call(e, i) ||
                n(e, t, i);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }), r(i("BKL7"), e);
    },
    cibE: function (t, e, i) {
      var n = i("Sipi"),
        r = (localStorage, "estimated-arrival-time-cache");
      e.a = {
        get: () => {
          var t;
          if ((t = Object(n.b)(r))) {
            var { data: e, expires: i } = t;
            if (i > Date.now()) return e;
          }
          return null;
        },
        set: (t) => {
          var e = { data: t, expires: Date.now() + 864e5 };
          Object(n.d)(r, e);
        },
      };
    },
    iTEc: function (t, e, i) {
      i.d(e, "a", function () {
        return l;
      });
      var n = i("OK7I"),
        r = i.n(n),
        a = i("KEq0"),
        s = i.n(a),
        o = i("9DIb"),
        c = i.n(o),
        u = r()(8);
      function l(t, e) {
        return t.map((t, i) => {
          var n = c()(t),
            r = "g." + e + "~recommend_fixed~" + (i + 1) + "~" + u,
            a = {
              goods_id: n.id + "",
              item_id: n.id,
              item_type: "groupon",
              banner_id: r,
              component: "recommend_fixed",
              recommend_name: "更多精选商品",
              component_id: "",
              alg: n.algs || "",
            };
          return (
            (n.price = (+n.minPrice / 100).toFixed(2)),
            n.joinNum &&
              ((n.showTitleTag = !0),
              (n.titleTagText = n.joinNum + "人拼团价")),
            {
              bannerId: r,
              loggerParams: a,
              alias: n.alias,
              type: "simple",
              layout: "vertical",
              corner: "rect",
              align: "left",
              imgOpt: { src: s()(n.imageUrl, "!520x0.jpg"), fill: "aspectFit" },
              titleOpt: {
                vMargin: 0,
                hMargin: 0,
                titleFontSize: 13,
                titleFontWeight: 400,
                titleExtraStyle: { height: "34px" },
                title: n.title,
                titleTags: [{ type: "text", text: n.joinNum + "人拼团价" }],
                bgColor: "transparent",
              },
              priceOpt: {
                fontSize: 18,
                price: (+n.minPrice / 100).toFixed(2),
                tagGap: 2,
              },
            }
          );
        });
      }
    },
    "j1X+": function (t, e, i) {
      var n = i("eijD"),
        r = i("cibE"),
        a = i("7lfQ"),
        s = i("U6vv"),
        o = null,
        c = (function () {
          var t = Object(n.a)(function* () {
            var t,
              e,
              i = yield (void 0 === t && (t = "amap"),
              void 0 === e && (e = 3e3),
              new Promise((i, n) => {
                var r;
                null == (r = o) ||
                  r.process.invokePipe("tryLocation", {
                    success: (e, n) => {
                      var r =
                        "amap" === t
                          ? { lat: n.latitude, lng: n.longitude }
                          : { lat: e.lat, lng: e.lng };
                      i(r);
                    },
                    fail: () => {
                      n();
                    },
                  }),
                  setTimeout(() => {
                    n();
                  }, e);
              }));
            if (i) {
              var n,
                a = yield ((n = i), Object(s.a)(n)),
                {
                  countryId: c,
                  countryName: u,
                  provinceId: l,
                  provinceName: d,
                  cityId: p,
                  cityName: h,
                  countyId: m,
                  countyName: g,
                } = a,
                v = c
                  ? {
                      province: { code: "900000", name: "海外" },
                      city: { code: String(c), name: u },
                      county: { code: "", name: "" },
                    }
                  : {
                      province: { code: String(l), name: d },
                      city: { code: String(p), name: h },
                      county: { code: String(m), name: g },
                    };
              return (v.latitude = i.lat), (v.longitude = i.lng), r.a.set(v), v;
            }
          });
          return function () {
            return t.apply(this, arguments);
          };
        })();
      e.a = {
        init: (t) => {
          o = t;
        },
        destroyed: () => {
          o = null;
        },
        getCurrentRegion: c,
        authorizeLocation: () => Object(a.b)("scope.userLocation"),
      };
    },
    jzOx: function (t, e, i) {
      i.d(e, "a", function () {
        return m;
      });
      var n = i("Fcif"),
        r = i("Shdd"),
        a = i("+66q"),
        s = {
          getters: {
            presaleProgressOpt() {
              var t,
                e,
                { isDeposit: i, isEnd: n } =
                  (null == (t = this.goodsActivity) ? void 0 : t.presale) || {},
                r = i && !n;
              if (!r) return { show: r };
              var { currentActivity: s = {} } = this,
                o = ["付定金", "付尾款", "发货"],
                c = "预售流程";
              return (
                s.type === a.j.HELP_DEPOSIT_EXPANSION &&
                  (o.splice(1, 0, "邀请好友助力"), (c = "活动流程")),
                {
                  show: r,
                  presale:
                    null == (e = this.goodsActivity) ? void 0 : e.presale,
                  title: c,
                  progressText: o,
                }
              );
            },
          },
        },
        o = i("xers"),
        c = i.n(o),
        u = {
          getters: {
            actDetailOpt() {
              var t,
                {
                  name: e = "",
                  phone: i = "",
                  kdtId: n = 0,
                } = this.shopBaseInfo;
              return {
                show: !c()(this.currentActivity || {}),
                goodsPriceInfo: this.goodsPriceInfo,
                currentActivity: this.currentActivity,
                goodsTitle:
                  (null == (t = this.goodsBaseInfo) ? void 0 : t.title) || "",
                goodsActivity: this.goodsActivity,
                theme: this.theme || {},
                shopName: e,
                shopPhone: i,
                kdtId: n,
              };
            },
          },
        },
        l = {
          getters: {
            newProductLaunchOpt() {
              return {
                show: Object.keys(this.umpActivity || {}).some(
                  (t) => "productLaunch" === t
                ),
                goodsActivity: this.goodsActivity,
                umpActivity: this.umpActivity,
                themeVars: this.themeVars,
                theme: this.theme,
                env: this.env,
              };
            },
          },
        },
        d = i("9ZMt");
      var p = i("VmHG"),
        h = [s, u, l].reduce((t, e) => Object(r.c)(t, e), {});
      function m(t) {
        return Object(p.a)({
          state: () =>
            Object(n.a)(
              {},
              (function () {
                var {
                  theme: t = {},
                  shopBaseInfo: e = {},
                  goodsBaseInfo: i = {},
                  goodsPriceInfo: n = {},
                  goodsActivity: r = {},
                  env: a = {},
                  umpActivityData: {
                    currentActivity: s = {},
                    umpActivity: o = {},
                  } = {},
                } = d.default.getGlobal("GOODS_DATA") || {};
                return {
                  goodsActivity: r,
                  goodsPriceInfo: n,
                  currentActivity: s,
                  goodsBaseInfo: i,
                  shopBaseInfo: e,
                  theme: t,
                  umpActivity: o,
                  env: a,
                };
              })(),
              h.state
            ),
          getters: Object(n.a)({}, h.getters),
          actions: Object(n.a)({}, {}, h.getActions(t)),
        });
      }
    },
    kAlr: function (t, e, i) {
      i.d(e, "a", function () {
        return r;
      });
      var n = i("US/N"),
        r = (t, e) =>
          Object(n.default)({
            path: "/wscshopcore/top-bar/get-top-bar-setting.json",
            method: "GET",
            query: { kdt_id: t, offlineId: e },
            withCredentials: !0,
          });
    },
    mh02: function (t, e, i) {
      i.d(e, "b", function () {
        return s;
      }),
        i.d(e, "a", function () {
          return o;
        });
      var n = i("9ZMt"),
        r = i("lCVF"),
        a = i.n(r);
      function s(t) {
        if (Array.isArray(t)) {
          if (0 === t.length) return "";
          var e = Math.min.apply(null, t),
            i = Math.max.apply(null, t);
          return e === i ? a()(e) : a()(e) + "-" + a()(i);
        }
        return "";
      }
      function o() {
        var t = 0,
          e = 0;
        try {
          ({ top: t = 0, bottom: e = 0 } =
            n.default.$native.getMenuButtonBoundingClientRect() || {});
        } catch (t) {}
        return { top: t, bottom: e };
      }
    },
    nqrh: function (t, e, i) {
      e.a = {
        props: {
          list: { type: Array, default: () => [] },
          themeColors: Object,
          layout: { type: Number, default: 0 },
          sizeType: { type: Number, default: 0 },
          showTitle: { type: Boolean, default: !0 },
          showSubTitle: Boolean,
          showPrice: { type: Boolean, default: !0 },
          showPriceLabel: Boolean,
          showUmpAmbience: Boolean,
          showOriginPrice: Boolean,
          showBuyButton: { type: Boolean, default: !0 },
          buyButtonType: { type: Number, default: 1 },
          showSoldNum: { type: Boolean, default: !1 },
          showCornerMark: Boolean,
          openSwipePagination: Boolean,
          swipeLoadMaxTimes: { type: Number, default: 999999 },
          cornerMarkType: { type: Number, default: 0 },
          cornerMarkImage: { type: String, default: "" },
          imageRatio: { type: Number, default: 1 },
          imageFillStyle: { type: Number, default: 2 },
          buttonText: String,
          pageMargin: { type: Number, default: 16 },
          goodsMargin: { type: Number, default: 8 },
          textStyleType: { type: Number, default: 1 },
          textAlignType: { type: String, default: "left" },
          borderRadiusType: { type: Number, default: 2 },
          moreUrl: String,
          showMoreButton: Boolean,
          moreButtonType: { type: Number, default: 1 },
          uniqueKey: { type: String, default: "" },
          showProgressInfo: Boolean,
          showStockNum: Boolean,
          processBarType: Number,
          showCountdown: Boolean,
          countdownStatus: Number,
          currentCountdown: Object,
          layoutConfig: Object,
          isSkyline: Boolean,
        },
      };
    },
    poDo: function (t, e, i) {
      i.d(e, "c", function () {
        return n;
      }),
        i.d(e, "a", function () {
          return r;
        }),
        i.d(e, "d", function () {
          return a;
        }),
        i.d(e, "b", function () {
          return s;
        });
      var n = (t, e) => {
          var i = {};
          switch (t) {
            case "view":
              i = { et: "view", ei: "view", en: "商品曝光", params: e };
              break;
            case "open_goods":
              i = {
                et: "click",
                ei: "open_goods",
                en: "打开商品详情",
                params: e,
              };
              break;
            case "click_buy":
              i = { et: "click", ei: "click_buy", en: "点击购买", params: e };
              break;
            case "click_content":
              i = {
                et: "click",
                ei: "click_content",
                en: "组件点击",
                params: e,
              };
              break;
            case "logger":
              i = e;
          }
          return i;
        },
        r = {
          coupon: (t, e) => ((e.item_id = t.activityId), e),
          note: (t, e) => ((e.item_id = t.noteId), e),
        },
        a = (t) => !!t.viewObserver,
        s = (t, e) => {
          var i = new Date(t),
            n = e || "YYYY-MM-DD HH:mm",
            r = i.getFullYear(),
            a = i.getMonth() + 1,
            s = i.getDate(),
            o = i.getHours(),
            c = i.getMinutes(),
            u = {
              YYYY: r,
              MM: (a = a >= 10 ? a : "0" + a),
              DD: (s = s >= 10 ? s : "0" + s),
              HH: (o = o >= 10 ? o : "0" + o),
              mm: (c = c >= 10 ? c : "0" + c),
            };
          return n.replace(
            /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            (t) => u[t]
          );
        };
    },
    pvGL: function (t, e, i) {
      var n = i("Fcif"),
        r = i("VmHG"),
        a = {},
        s = {},
        o = function (t) {
          return {
            handleCachierChange(e) {
              t.data.payWaysData = Object(n.a)({}, t.data.payWaysData || {}, {
                payWay: e,
              });
              var { payChannels: i } = t.data;
              "PRIOR_USE" !== e &&
                i &&
                (this.priorUseExtra = this.getPriorUseExtra(i)),
                "INSTALMENT" !== e && (this.instalmentExtra = {}),
                "PRIOR_USE" === e &&
                  (this.priorUseExtra = { IS_SELECTED_PRIOR_USE_PAY_WAY: 1 });
            },
            updatePayWay(e) {
              t.event.emit("payWaysData:update", e);
            },
            installmentSet(e) {
              (this.instalmentExtra = e), t.event.emit("installment:selected");
            },
            handlePriorUseTipsClick() {
              t.event.emit("sku:hide"),
                t.event.emit("payWaysData:update", { show: !0 });
            },
          };
        },
        c = i("tS13"),
        u = {
          canPriorUse() {
            var { price: t = { max: [] } } = this.priorUse || {};
            return this.sumPrice <= t.max[0] && this.sumPrice > 0;
          },
          priorUse() {
            return (
              this.payChannels &&
              this.payChannels.find((t) => "PRIOR_USE" === t.payChannel)
            );
          },
          installment() {
            return (
              this.payChannels &&
              this.payChannels.find((t) => "INSTALMENT" === t.payChannel)
            );
          },
          sumPrice() {
            return this.price * this.selectedNum;
          },
          unselected() {
            var { tree: t = [] } = this.sku,
              e = t.find((t) => !this.selectedSku[t.kS]);
            return !!e && e.k;
          },
          showInstallment() {
            return this.installment && this.skuScene !== c.c.ADD_CART;
          },
          showPriorUseTips() {
            return (
              !this.supportSkuDirectOrder &&
              !this.showCouponTips &&
              "PRIOR_USE" === this.payWaysData.payWay
            );
          },
        },
        l = i("AGZf"),
        d = i("ONqW"),
        p = i("US/N"),
        h = i("uzJ0"),
        m = i.n(h),
        g = i("NHEX"),
        v = i.n(g),
        f = [
          { state: {}, getters: {}, actions: {} },
          {
            state: {
              priorUseExtra: {},
              instalmentExtra: {},
              skuScene: "",
              installmentList: [
                {
                  period: 1,
                  periodStr: "分1期（无手续费）",
                  priceStr: "先买后还",
                },
              ],
              requestData: {},
              curPeriod: null,
              isGrey: !1,
              cache: {},
              payWaysData: {},
              kdtId: 0,
              payChannels: [],
              sku: {},
              selectedSku: {},
              goods: {},
              selectedNum: 1,
              skuUnselected: !1,
              price: 0,
              installmentRate: 0,
              baseInstallmentRate: 0,
              updating: !1,
              supportSkuDirectOrder: !1,
              payWayData: [],
              goodsId: null,
              showCouponTips: !1,
            },
            getters: u,
            actions: {
              getPriorUseExtra(t) {
                var e = t.find((t) => t.recommend);
                return e && "PRIOR_USE" === e.payChannel
                  ? { IS_SELECTED_PRIOR_USE_PAY_WAY: 0 }
                  : {};
              },
              setPriorUseExtra(t) {
                t && (this.priorUseExtra = this.getPriorUseExtra(t));
              },
              setGoogds(t) {
                (this.goods = t), (this.goodsId = t.id);
              },
              setPayWayData(t) {
                var { priorUseExtra: e, instalmentExtra: i } = this,
                  r = Object(n.a)({}, t);
                return (
                  e && (r.extra = Object(n.a)({}, r.extra, e)),
                  i && (r.commonExtra = Object(n.a)({}, r.commonExtra, i)),
                  r
                );
              },
              handlePayWayChange(t) {
                this.updating ||
                  ((this.updating = !0),
                  setTimeout(() => {
                    (this.updating = !1),
                      "PRIOR_USE" === t && this.updateCommit();
                  }, 200),
                  "installment" !== t && this.notInstallment());
              },
              handleSkuSelected(t) {
                (this.selectedSku = t.selectedSkuComb || {}),
                  this.unselected && this.updatePayWay({ payWay: "" });
              },
              handleSkuNumChange(t) {
                (this.selectedNum = t), this.onChangeNum();
              },
              onChangeNum() {
                this.installmentList.forEach((t) => {
                  1 !== t.period &&
                    (t.priceStr =
                      "￥" + m()(String(t.price * this.selectedNum)) + "/期");
                });
              },
              validatePayWays: (t) => Promise.resolve(t),
              updatePayWays(t) {
                if (
                  ((this.skuScene = t.skuScene),
                  (this.price = v()(t, "priceBlock.price")),
                  this.showInstallment)
                ) {
                  var { selectedSkuComb: e } = t,
                    { list: i } = this.sku;
                  if (
                    ((this.skuUnselected = !e && i && i.length),
                    this.installmentUpdate(),
                    this.curPeriod)
                  ) {
                    var n =
                      this.isFreeInterest && 3 === this.curPeriod
                        ? 0
                        : this.baseInstallmentRate;
                    t.pluginsResult.installment = {
                      period: this.curPeriod,
                      rate: n,
                    };
                  }
                }
                return Promise.resolve(t);
              },
              updateCommit() {
                var t = this.canPriorUse ? 0 : -1;
                this.priorUseExtra = {
                  IS_SELECTED_PRIOR_USE_PAY_WAY:
                    "PRIOR_USE" === this.payWaysData.payWay && this.canPriorUse
                      ? 1
                      : t,
                };
              },
              onSelected(t) {
                this.curPeriod === t.period
                  ? (this.curPeriod = this.installmentRate = null)
                  : ((this.curPeriod = t.period),
                    (this.installmentRate = this.baseInstallmentRate)),
                  this.installmentSet({
                    installmentRate: this.installmentRate,
                    selectedInstallmentPeriod: this.curPeriod,
                  });
              },
              selectType(t) {
                var e;
                if (!this.updating) {
                  if (
                    ((this.updating = !0),
                    setTimeout(() => {
                      this.updating = !1;
                    }, 200),
                    this.notInstallment(),
                    "PRIOR_USE" === t)
                  ) {
                    var { price: i = {} } = this.priorUse || {},
                      { min: n, max: r } = i;
                    if (this.sumPrice > r[0]) return Object(l.a)(r[1]);
                    if (this.sumPrice < n[0]) return Object(l.a)(n[1]);
                    if (this.unselected)
                      return Object(l.a)("请选择" + this.unselected);
                  }
                  t === this.payWaysData.payWay && (t = ""),
                    this.updatePayWay({ payWay: t }),
                    this.updateCommit(),
                    this.log({
                      ei: "wsc_g_pay_channels_select_click",
                      en: "商详购买方式先用后付/有赞分期选择",
                      params: {
                        channel:
                          null == (e = this.payWaysData) ? void 0 : e.payWay,
                      },
                    });
                }
              },
              resolveResponse(t) {
                var e = [this.installmentList[0]],
                  { instalmentPrices: i, isGrey: n, installmentRate: r } = t;
                Object.entries(i).forEach((t) => {
                  var [i, n] = t;
                  e.push({
                    period: +i,
                    price: n,
                    periodStr: "分" + +i + "期（含手续费）",
                    priceStr: "￥" + m()(String(n * this.selectedNum)) + "/期",
                  });
                }),
                  (this.installmentList = e.sort(
                    (t, e) => t.period - e.period
                  )),
                  (this.isGrey = n),
                  (this.baseInstallmentRate = this.installmentRate = r);
              },
              installmentUpdate() {
                if (!this.isRequesting && this.showInstallment) {
                  var t = this.price;
                  if (!this.cache[t])
                    return (
                      (this.isRequesting = !0),
                      Object(p.default)({
                        path: "/wscshop/sku/installment-price.json",
                        data: {
                          goodsId: this.goodsId,
                          kdtId: this.kdtId,
                          price: this.price,
                        },
                      })
                        .then((e) => {
                          (this.cache[t] = JSON.stringify(e)),
                            this.resolveResponse(e),
                            (this.isRequesting = !1);
                        })
                        .catch(() => {
                          this.isRequesting = !1;
                        })
                    );
                  var e = JSON.parse(this.cache[t]);
                  this.resolveResponse(e);
                }
              },
              notInstallment() {
                this.installmentSet({
                  selectedInstallmentPeriod: void 0,
                  installmentRate: void 0,
                });
              },
              log(t) {
                var { ei: e, en: i, params: r = {} } = t;
                Object(d.a)().log({
                  et: "custom",
                  ei: e,
                  en: i,
                  params: Object(n.a)({ goodsId: this.goodsId }, r),
                });
              },
            },
          },
        ].reduce((t, e) => {
          return (
            void 0 === (i = t) && (i = {}),
            void 0 === (r = e) && (r = {}),
            {
              state: Object(n.a)({}, i.state, r.state),
              getters: Object(n.a)({}, i.getters, r.getters),
              actions: Object(n.a)({}, i.actions, r.actions),
            }
          );
          var i, r;
        }, {});
      e.a = (t) =>
        Object(r.a)({
          state: () => Object(n.a)({}, f.state, a),
          getters: Object(n.a)({}, f.getters, s),
          actions: Object(n.a)({}, f.actions, o(t)),
        });
    },
    ub5p: function (t, e, i) {
      i.d(e, "a", function () {
        return p;
      });
      var n = i("Fcif"),
        r = i("Shdd"),
        a = {
          getters: {
            couponIntroOpt() {
              return {
                skuCouponIntroDetail:
                  this.goodsActivity &&
                  this.goodsActivity.virtualCoupon &&
                  this.goodsActivity.virtualCoupon.spuExtraModel,
                showCouponIntro:
                  this.goodsBaseInfo.isVirtualCoupon &&
                  !(
                    this.goodsSkuData.goods &&
                    this.goodsSkuData.goods.list &&
                    this.goodsSkuData.goods.list.length
                  ) &&
                  this.goodsActivity &&
                  this.goodsActivity.virtualCoupon &&
                  this.goodsActivity.virtualCoupon.spuExtraModel,
              };
            },
          },
        },
        s = i("NHEX"),
        o = i.n(s),
        c = {
          state: { showVirtualTicketIntro: !0 },
          getters: {
            ecardIntroOpt() {
              return {
                ecardRules: o()(
                  this.goodsActivity,
                  "virtualTicket.ecardRules",
                  []
                ),
                ecardInstructions: o()(
                  this.goodsActivity,
                  "virtualTicket.ecardInstructions",
                  []
                ),
                show:
                  this.goodsBaseInfo.isVirtualTicket &&
                  this.showVirtualTicketIntro,
              };
            },
          },
          getActions: () => ({
            hideVirtualTicketIntro() {
              this.showVirtualTicketIntro = !1;
            },
          }),
        },
        u = {
          goodsBaseInfo: {},
          goodsActivity: {},
          goodsSkuData: {},
          themeCSS: "",
          pageStyleCSS: "",
          goodsMetaInfo: {},
        },
        l = i("VmHG"),
        d = [a, c].reduce((t, e) => Object(r.c)(t, e), {});
      function p(t) {
        return Object(l.a)({
          state: () => Object(n.a)({}, u, d.state),
          getters: Object(n.a)({}, d.getters),
          actions: Object(n.a)({}, {}, d.getActions(t)),
        });
      }
    },
    "x/ZN": function (t, e, i) {
      var n = i("US/N");
      e.a = {
        getTimelinessInfo: (t) =>
          Object(n.default)({
            path: "/wscgoods/detail-api/logistics-timeliness-info.json",
            method: "GET",
            data: t,
          }),
        inWhiteList: () =>
          Object(n.requestUseCdn)({
            path: "/wscgoods/detail-api/isInCPGray.json",
            data: { key: "estimated_arrival" },
          }),
      };
    },
  });
