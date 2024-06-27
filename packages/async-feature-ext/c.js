"use strict";
(exports.ids = [13]),
  (exports.modules = {
    "/TR5": function (e, t, n) {
      n.d(t, "a", function () {
        return u;
      });
      var i = n("Fcif"),
        a = n("9ZMt"),
        o = n("MLLI"),
        r = n("Q56H"),
        s = n("2wjL"),
        c = n("z9IR"),
        u = (e) => {
          var {
              kdtId: t,
              buyerId: n,
              query: u,
              route: d,
              appName: l,
              appVersion: p,
            } = e,
            {
              getExtConfigSync: g,
              getEnterOptionsSync: f,
              getLaunchOptionsSync: m,
            } = a.default.$native;
          if (g) {
            var h = g(),
              v = (() => {
                if (m) {
                  var { scene: e } = m() || {};
                  return e || "空";
                }
                return "无";
              })(),
              b = u && JSON.stringify(u),
              y = [
                "差异化应用：" + (l || ""),
                "差异化版本：" + (p || ""),
                "小程序版本号：" + (h.userVersion || ""),
                "场景值：" + v,
                "页面路径",
                d,
              ],
              w = {};
            if (
              (b && "{}" !== b && y.push("页面参数", b),
              (w.useRanta = !0),
              (w.extConfig = h),
              (w.kdtId = t),
              (w.page = d),
              (w.query = u),
              (w.pagePath = s.a.add(d, Object(i.a)({}, u))),
              (w.system = Object(o.b)()),
              (w.userId = (n || 0).toString(4)),
              f)
            ) {
              var { path: O, query: I } = f();
              w.enterPath = s.a.add(O, Object(i.a)({}, I));
            }
            c.a
              .confirm({
                title: "小程序信息",
                message: y.join("\n"),
                confirmButtonText: "复制链接",
                showCancelButton: !1,
              })
              .then(() => {
                Object(r.b)(JSON.stringify(w)), c.a.close();
              })
              .catch(() => {
                c.a.close();
              });
          }
        };
    },
    "/e9d": function (e, t, n) {
      n.d(t, "a", function () {
        return c;
      });
      var i = n("AGZf"),
        a = n("9ZMt"),
        o = n("US/N"),
        r = n("YeA1"),
        { dmc: s } = Object(r.a)();
      function c() {
        a.default.$native.scanCode({
          onlyFromCamera: !0,
          scanType: "barCode",
          success: (e) => {
            var t,
              { result: n } = e;
            ((t = { barcode: n }),
            Object(o.default)({
              path: "/wsctrade/scancodebuy/goodsquery/list-by-barcode.json",
              query: t,
            }).catch((e) => {
              var { msg: t } = e;
              i.a.fail(t);
            })).then(function (e) {
              void 0 === e && (e = {});
              var { successList: t = [] } = e,
                a = t[0];
              0 === t.length
                ? i.a.fail("商品条码未录入，请联系营业员")
                : t.length > 1
                ? s.navigate("Search", { q: n, searchType: 2 })
                : s.navigate("GoodsDetail", { alias: a.alias });
            });
          },
        });
      }
    },
    "07Mu": function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var i = n("US/N");
      function a(e) {
        return Object(i.default)({
          method: "GET",
          path: "/wscstatcenter/recommend/float-goods.json",
          data: e,
          errorMsg: "获取商品悬浮窗图标信息错误",
          config: { noQuery: !0 },
          options: { useCdn: !0 },
        });
      }
    },
    "2p7Y": function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      });
      var i = function (e) {
        return (
          void 0 === e && (e = {}),
          e.availableCouponActIds && e.availableCouponActIds.length
            ? e.availableCouponActIds[0]
            : null
        );
      };
    },
    "52j6": function (e, t, n) {
      n.d(t, "a", function () {
        return l;
      });
      var i = n("NHEX"),
        a = n.n(i),
        o = n("5Xe+"),
        r = n.n(o),
        s = n("9ZMt"),
        c = n("tS13"),
        u = n("nTO+"),
        d = function () {
          return (d =
            Object.assign ||
            function (e) {
              for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        },
        l = function (e) {
          var t = e.logParams,
            n = e.goodsCombineInfoBizSku,
            i = e.sku,
            o = e.submitData,
            l = e.goods,
            p = e.multistore,
            g = e.kdtId,
            f = o.skuScene,
            m = o.skuData,
            h = o.pluginsResult,
            v = o.activityInfo,
            b = {
              dcPs: a()(t, "context.dc_ps", ""),
              biz_trace_point_ext: JSON.stringify(
                d(d(d({}, t.context), t.plat), {
                  platform: s.default.getEnv(),
                  uuid: t.user.uuid || "",
                  userId: t.user.li || "",
                })
              ),
            },
            y = n.isCombo,
            w = n.comboGroupModels,
            O = n.comboType,
            I = i || {},
            j = I.activityType,
            S = I.activityId,
            k = I.activityAlias,
            _ = I.activitySkuIds,
            P = void 0 === _ ? [] : _,
            x = I.noneSku,
            T = a()(m, "selectedSkuComb.id");
          return (
            f !== c.c.ADD_CART &&
              [6, 2].includes(j) &&
              (x || P.includes(T)) &&
              (v = v || { activityType: j, activityId: S, activityAlias: k }),
            Object(u.a)({
              skuData: m,
              pluginsResult: h,
              goodsExtra: b,
              activityInfo: v,
              goods: d(d({}, r()(l, ["id", "supportUnconditionalReturn"])), {
                postage: 0,
              }),
              shop: { multistore: p, kdtId: g },
              combineGoodsData: {
                flag: f,
                isCombo: y,
                comboType: O,
                comboGroupModels: w,
              },
            })
          );
        };
    },
    "5HCC": function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      });
      var i = n("NHEX"),
        a = n.n(i),
        o = function (e) {
          var t = e.data,
            n = e.skuScene,
            i = e.goods,
            o = e.itemId;
          return {
            skuScene: n,
            activityName: a()(t, "itemActivitySpuModels[0].type", ""),
            authScene: "add_shopping_car",
            skuOptions: { resetSku: (null == i ? void 0 : i.id) !== o },
            t: Date.now(),
          };
        };
    },
    "7LtC": function (e, t, n) {
      n.d(t, "d", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return a;
        }),
        n.d(t, "a", function () {
          return o;
        }),
        n.d(t, "b", function () {
          return r;
        }),
        n.d(t, "e", function () {
          return s;
        }),
        n.d(t, "f", function () {
          return c;
        });
      var i = "/wscstatcenter/recommend-showcase-page",
        a = [
          {
            title: "店铺热榜",
            iconUrl:
              "https://b.yzcdn.cn/public_files/49c98c9a4b9ee7070cda50774423b65e.png",
            backgroundImage:
              "https://b.yzcdn.cn/public_files/9fdadc51e3c57aa73cb2a4d35c5f687b.png",
            showCornerMark: !0,
            pathSuffix: "ranking",
            bizName: "g~hotGoods",
          },
          {
            title: "为你推荐",
            iconUrl:
              "https://b.yzcdn.cn/public_files/991bcb683a19c3cdb26fe11fbc5c3c79.png",
            showCornerMark: !1,
            pathSuffix: "recommend",
            bizName: "g~mayLike",
          },
          {
            title: "历史足迹",
            iconUrl:
              "https://b.yzcdn.cn/public_files/4a96aeb556b1b55dd5341b35db8df464.png",
            showCornerMark: !1,
            pathSuffix: "footmark",
            bizName: "g~history",
          },
        ],
        o = {
          "g~hotGoods": "GoodsShowcaseRanking",
          "g~mayLike": "GoodsShowcaseRecommend",
          "g~history": "GoodsShowcaseFootmark",
        },
        r = [1, 8, 9, 3],
        s = {
          1: [
            /^\/packages\/home\/dashboard/,
            /^\/packages\/tee-home|ext-home\/dashboard/,
          ],
          3: [
            /^\/packages\/home\/feature/,
            /^\/packages\/tee-home|ext-home\/feature/,
            /^\/packages\/home\/tab/,
            /^\/packages\/ext-home\/tab\/(one|two|three)/,
          ],
          8: [/^\/packages\/goods(:?-v\d+)?\//, /^pages\/goods\/detail/],
          9: [
            /^\/packages\/shop\/goods\/all/,
            /^\/packages\/shop\/goods\/group/,
            /^\/packages\/shop\/goods\/tag-list\/index/,
          ],
        },
        c = {
          1: [/\/(v2|wscshop)\/(showcase\/)?(homepage|home)/],
          3: [/\/(v2|wscshop)\/(showcase\/)?feature(?!\/goods\/all)/],
          8: [
            /\/(v2|wscshop)\/(showcase\/)?(goods|seckill)(\/adv)?/,
            /\/wscgoods\/(detail|seckill)/,
            /\/pay\/wscgoods_order/,
          ],
          9: [
            /\/wscshop\/(tag|allgoods)/,
            /\/v2\/(showcase\/)?(tag|allgoods)/,
            /\/feature\/goods\/all/,
            /\/wscshop\/showcase\/tag/,
          ],
        };
    },
    "7oI0": function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      });
      var i = { tagTextColor: "#ee0a24", tagBgColor: "#ffe2e6" };
    },
    Avd2: function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      });
      var i = {
        button:
          "https://img01.yzcdn.cn/upload_files/2020/12/17/FizKPDD0KVrK9CBzRofDO1vBQURh.png",
        arrowUp:
          "https://img01.yzcdn.cn/upload_files/2020/11/24/FvpawPUa7evlstuYiwsFxDWrPrba.png",
        arrowDown:
          "https://img01.yzcdn.cn/images/salesman/common/guide-arrow-down.png",
        arrowViolentUp:
          "https://img01.yzcdn.cn/upload_files/2020/11/24/FvpawPUa7evlstuYiwsFxDWrPrba.png",
        arrowViolentDown:
          "https://img01.yzcdn.cn/upload_files/2020/11/24/FhWjW9qXlbE0w4HDQ6aHlYdX8nRk.png",
        arrowViolentLeftDown:
          "https://img01.yzcdn.cn/upload_files/2020/11/24/Ft-emTUjyW1Zm_f6tEdxnhSiaC36.png",
      };
    },
    B5X6: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var i = n("US/N"),
        a = () =>
          Object(i.default)({ path: "/wscwxvideo/float-in-whitelist.json" });
    },
    CYhF: function (e, t, n) {
      var i = n("7LtC");
      n.d(t, "Biz2Dmc", function () {
        return i.a;
      }),
        n.d(t, "HAS_GOODS_SHOWCASE_PAGE_TYPES", function () {
          return i.b;
        }),
        n.d(t, "SHOWCASE_ITEM_LIST", function () {
          return i.c;
        }),
        n.d(t, "URL_PATTERN_MAP_MINI", function () {
          return i.e;
        }),
        n.d(t, "URL_PATTERN_MAP_WEB", function () {
          return i.f;
        });
      n("Vs3J");
    },
    CzId: function (e, t, n) {
      n.d(t, "b", function () {
        return g;
      }),
        n.d(t, "a", function () {
          return f;
        }),
        n.d(t, "c", function () {
          return m;
        });
      var i = n("Fcif"),
        a = n("+I+c"),
        o = n("US/N"),
        r = n("9ZMt"),
        s = n("AGZf"),
        c = "UNSUPPORTED",
        u = "NO_TEMPLATE",
        d = 20001,
        l = ["level", "detail"];
      function p(e, t, n) {
        var o = n || {},
          { level: r, detail: s } = o,
          c = Object(a.a)(o, l);
        try {
          var u = t && (t.msg || t.message || t.errMsg || t);
          getApp().logger.skynetLog({
            message: "[消息订阅] " + e + (u ? "：" + u : ""),
            level: r,
            extra: { bizName: "消息订阅", logName: e, logMsg: u },
            detail: Object(i.a)({}, t, c, s),
          });
        } catch (e) {}
      }
      function g(e) {
        return Object(o.default)({
          path: "/v3/message/wechat-push/query-wechat-subscribe-result.json",
          method: "POST",
          withCredentials: !0,
          data: { pageId: e },
        });
      }
      function f(e) {
        return Object(o.default)({
          path: "/v3/message/wechat-push/template.json",
          data: { scene: e },
        });
      }
      function m(e) {
        var t, n, i, a, l;
        void 0 === e && (e = {});
        var g =
            null == (t = e.templates) ||
            null ==
              (n = t.map((e) => ("string" == typeof e ? { templateId: e } : e)))
              ? void 0
              : n.filter((e) => (null == e ? void 0 : e.templateId)),
          f = g.map((e) => e.templateId).slice(0, 3);
        if (!r.default.$native.canIUse("requestSubscribeMessage")) {
          return (
            p("当前小程序基础库不支持订阅"),
            null == e.onFail ||
              e.onFail({ errCode: c, errMsg: "当前小程序基础库不支持订阅" }),
            void (null == e.onComplete || e.onComplete())
          );
        }
        if (!Array.isArray(f) || !f.length) {
          return (
            p("templates列表为空"),
            null == e.onFail ||
              e.onFail({ errCode: u, errMsg: "templates列表为空" }),
            void (null == e.onComplete || e.onComplete())
          );
        }
        var m = null;
        null != (i = getApp().globalData.subscribeConf) &&
          i.mainSwitch &&
          (m = setTimeout(() => {
            null == e.onShowTips || e.onShowTips();
          }, 800)),
          p("开始订阅", { templateIds: f }),
          null == (a = this.ctx) ||
            null == (l = a.logger) ||
            l.log({
              et: "view",
              ei: "show_subscribe",
              en: "唤起授权",
              params: { component: "subscribe_push" },
            }),
          r.default.$native.requestSubscribeMessage({
            tmplIds: f,
            success: (t) => {
              p("订阅成功", { res: t, templateIds: f });
              var n,
                i,
                {
                  subscribePos: a,
                  subscribeSource: r,
                  deliveryWay: c,
                } = e.onSelfLog || {},
                u = f.some((e) => "accept" === t[e]);
              if (u) {
                e.noToast || s.a.success("订阅通知成功");
                var d,
                  l,
                  m = g.filter(
                    (e) =>
                      "accept" === t[null == e ? void 0 : e.templateId] &&
                      (null == e ? void 0 : e.subscribeTemplateId)
                  );
                if (m.length)
                  (n = m),
                    Object(o.default)({
                      path: "/v3/message/wechat-push/subscribe-callback.json",
                      method: "POST",
                      withCredentials: !0,
                      data: { templateList: n },
                    }),
                    null == (d = this.ctx) ||
                      null == (l = d.logger) ||
                      l.log({
                        et: "click",
                        ei: "click_subscribe",
                        en: "点击订阅",
                        params: { component: "subscribe_push" },
                      });
              }
              a &&
                (null == (i = this.ctx.logger) ||
                  i.log({
                    et: "click",
                    ei: (u ? "accept" : "reject") + "_msg_subscribe",
                    en: (u ? "接受" : "拒绝") + "授权订阅小程序消息",
                    params: {
                      subscribe_pos: a,
                      subscribe_source: r,
                      delivery_way: c,
                    },
                  }));
              null == e.onSuccess || e.onSuccess(t);
            },
            fail: (t) => {
              p("订阅失败", t, { templateIds: f });
              var n,
                i = "订阅微信通知失败";
              t.errMsg && t.errMsg.indexOf("switched off") > -1
                ? (i = "请在小程序设置中允许订阅消息")
                : (null == t ? void 0 : t.errCode) === d &&
                  (p("删除失效模板", t, { templateIds: f }),
                  (n = f),
                  Object(o.default)({
                    path: "/v3/message/wechat-push/callback-remove-unused-template.json",
                    method: "POST",
                    withCredentials: !0,
                    data: { wechatTemplateIdList: n },
                  })),
                e.noToast || Object(s.a)(i),
                null == e.onFail || e.onFail(t);
            },
            complete: () => {
              m && clearTimeout(m),
                null == e.onCloseTips || e.onCloseTips(),
                null == e.onComplete || e.onComplete();
            },
          });
      }
    },
    Dj8g: function (e, t, n) {
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "c", function () {
          return r;
        }),
        n.d(t, "e", function () {
          return s;
        }),
        n.d(t, "a", function () {
          return c;
        }),
        n.d(t, "d", function () {
          return u;
        }),
        n.d(t, "f", function () {
          return d;
        });
      var i = n("9ZMt"),
        a = n("882d");
      function o(e) {
        if (!Array.isArray(e))
          throw new TypeError("Handlers stack must be an array!");
        for (var t of e)
          if ("function" != typeof t)
            throw new TypeError("Handler must be composed of functions!");
        return function (t) {
          var n = -1;
          return (function i(a) {
            if (a <= n)
              return Promise.reject(new Error("next() called multiple times"));
            n = a;
            var o = e[a];
            a === e.length && (o = t);
            if (!o) return Promise.resolve();
            try {
              return Promise.resolve(o(() => i(a + 1)));
            } catch (e) {
              return Promise.reject(e);
            }
          })(0);
        };
      }
      var r = (e, t) =>
        e
          ? "string" == typeof e
            ? e
            : e.errMsg || e.message || e.msg || t
          : t;
      function s(e) {
        return "ant" === i.default.getEnv()
          ? Object(a.e)(e)
          : new Promise((t, n) =>
              i.default.$native.downloadFile({
                url: e,
                success: (e) =>
                  Object(a.e)(e.tempFilePath)
                    .then(t)
                    .catch((e) => {
                      var t = r(e, "保存失败");
                      return n(
                        t.endsWith("auth deny")
                          ? "\b保存失败，未开启相册授权"
                          : t
                      );
                    }),
                fail: (e) => n(r(e, "图片下载失败")),
              })
            );
      }
      function c(e) {
        var t = e.map((e) => s(e));
        return Promise.all(t);
      }
      var u = () => i.default.getEnv(),
        d = (e) => {
          var { imgUrl: t, entrancePath: n, fallback: a, instance: o } = e;
          i.default.$native.downloadFile({
            url: t,
            success: (e) => {
              i.default.$native.showShareImageMenu({
                path: e.tempFilePath,
                needShowEntrance: !0,
                entrancePath: n,
                success: () => {},
                fail: (e) => {
                  o.monitor({
                    msg: "赚字微信图片分享-调用SDK方法失败",
                    err: e,
                  }),
                    (e && "showShareImageMenu:fail cancel" === e.errMsg) || a();
                },
              });
            },
            fail: (e) => {
              o.monitor({ msg: "赚字微信图片分享-图片下载失败", err: e }), a();
            },
          });
        };
    },
    Fzvb: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var i = function (e, t) {
          for (var n = 0; n < e.length; ) {
            for (var i = e[n], a = 0; a < i.length; ) {
              if (i[a].id === t) return [e.length - 1 - n, a];
              a++;
            }
            n++;
          }
          return [-1, -1];
        },
        a = (e) => {
          var { iconList: t, showGoodsDetail: n, instance: a } = e,
            o = i(t, "share"),
            r = i(t, "salesman"),
            s = i(t, "promote"),
            c = (function (e) {
              var { path: t } = e;
              return "packages/home/dashboard/index" === t;
            })(a)
              ? 49
              : 0;
          c = c;
          var u = [
              {
                content:
                  "恭喜获得分享赚佣金权益，点击这里可以查看所有可推广商品和佣金",
                component: "downward-guide",
                imgUrl:
                  "https://img01.yzcdn.cn/upload_files/2020/11/24/Fs70rEBwimWwru83H1y-iQfZbOg1.png",
                arrowType:
                  r[1] > 2 ? "arrowViolentDown" : "arrowViolentLeftDown",
                bottom: 100 * r[0] + 104 + c + "px",
                imgStyle: {
                  left: 80 * r[1] + 2 + "px",
                  bottom: 100 * r[0] + c + 6 + "px",
                  height: "90px",
                  width: "90px",
                },
              },
            ],
            d = [
              {
                content: "点击这里可以查看所有可推广商品和可提现金额",
                component: "downward-guide",
                imgUrl:
                  "https://img01.yzcdn.cn/upload_files/2020/11/24/Fs70rEBwimWwru83H1y-iQfZbOg1.png",
                arrowType:
                  r[1] > 2 ? "arrowViolentDown" : "arrowViolentLeftDown",
                bottom: 100 * r[0] + 104 + c + "px",
                imgStyle: {
                  left: 80 * r[1] + 2 + "px",
                  bottom: 100 * r[0] + c + 6 + "px",
                  height: "90px",
                  width: "90px",
                },
              },
            ];
          return (
            r[0] >= 0 &&
              d.unshift({
                content: "分享给好友，可赚取佣金",
                component: "downward-guide",
                imgUrl:
                  "https://img01.yzcdn.cn/upload_files/2021/05/26/FpAMSN5m4y26ORqq-JR7MiCg9zN-.png",
                arrowType:
                  o[1] > 2 ? "arrowViolentDown" : "arrowViolentLeftDown",
                bottom: 100 * o[0] + 104 + c + "px",
                imgStyle: {
                  left: 80 * o[1] + 2 + "px",
                  bottom: 100 * o[0] + c + 6 + "px",
                  height: "90px",
                  width: "90px",
                },
              }),
            s[0] >= 0 &&
              d.push({
                content: "点击这里可进入销售员专属推广页",
                component: "downward-guide",
                imgUrl:
                  "https://img01.yzcdn.cn/upload_files/2020/11/24/FvwfYwf8CaldPoZNfAOWBvA0yGXj.png",
                arrowType:
                  s[1] > 2 ? "arrowViolentDown" : "arrowViolentLeftDown",
                bottom: 100 * s[0] + 104 + c + "px",
                imgStyle: {
                  left: 80 * s[1] + 2 + "px",
                  bottom: 100 * s[0] + c + 6 + "px",
                  height: "90px",
                  width: "90px",
                },
              }),
            n ? d : u
          );
        };
    },
    G0wj: function (e, t, n) {
      n.d(t, "a", function () {
        return d;
      });
      var i = n("eijD"),
        a = n("9ZMt"),
        o = n("KDJo"),
        r = n("2xJD"),
        s = n("YehF"),
        c = n("US/N"),
        u = a.default.getApp(),
        d = (function () {
          var e = Object(i.a)(function* (e) {
            var t,
              {
                ctx: n,
                pageId: i,
                scene: a,
                subscribePage: d,
                subscribeType: l,
                authorizationType: p,
                windowType: g,
                options: f,
                supportRetail: m = !0,
              } = e,
              { next: h } = f || {},
              v = u.globalData.hasSubscribedByApp || 0;
            if (v && v >= 3) h();
            else {
              var b,
                y = yield Object(c.default)({
                  path: "/wscdeco/shop/get-shop-meta-info-by-kdtId.json",
                  data: b,
                }),
                w = Object(o.e)(y) && !Object(r.c)(y),
                O = m && (Object(s.f)(y) || Object(s.g)(y) || Object(s.b)(y));
              if (w || O) {
                if ((i || (w && (i = 3), O && (i = 5)), i && a)) {
                  var I = !1;
                  try {
                    I =
                      (yield Object(c.default)({
                        path: "/wscdeco/im/common/is-subscription-in-white-list.json",
                        data: {},
                      })) || !1;
                  } catch (e) {}
                  if (I) {
                    var j;
                    try {
                      j = yield (function (e) {
                        return (
                          void 0 === e && (e = {}),
                          Object(c.default)({
                            path: "/wscdeco/im/common/get-template.json",
                            data: e,
                          })
                        );
                      })({
                        pageId: i,
                        scene: a,
                        windowType: g,
                        authorizationType: p,
                      });
                    } catch (e) {
                      j = [];
                    }
                    if (j instanceof Array && null != (t = j || []) && t.length)
                      return new Promise((e, t) => {
                        var {
                          onSuccess: a,
                          onFail: o,
                          onComplete: r,
                          onShowTips: s,
                          onCloseTips: m,
                        } = f;
                        n.process.invoke("requestSubscribeMessagePush", {
                          pageId: i,
                          templates: j,
                          onSuccess: (t) => {
                            var n, i;
                            (a && a(),
                            !0 === Object.values(t).some((e) => "accept" === e))
                              ? (((e) => {
                                  Object(c.default)({
                                    path: "/wscdeco/im/common/add-authorize-log.json",
                                    data: e,
                                    method: "post",
                                  });
                                })({ authorizationType: p }),
                                null == (n = u.logger) ||
                                  n.log({
                                    et: "click",
                                    ei: "allow_msg_subscribe",
                                    en: "允许订阅小程序消息",
                                    params: {
                                      subscribe_page: d,
                                      subscribe_type: l,
                                    },
                                  }),
                                e())
                              : null == (i = u.logger) ||
                                i.log({
                                  et: "click",
                                  ei: "refuse_msg_subscribe",
                                  en: "拒绝订阅小程序消息",
                                  params: {
                                    subscribe_page: d,
                                    subscribe_type: l,
                                  },
                                });
                          },
                          onFail: (e) => {
                            o && o(), t(e);
                          },
                          onComplete: () => {
                            r && r();
                          },
                          onShowTips: () => {
                            var e, t;
                            s && s(),
                              (t = v + 1),
                              (u.globalData.hasSubscribedByApp = t),
                              ((e) => {
                                Object(c.default)({
                                  path: "/wscdeco/im/common/add-user-behavior.json",
                                  data: e,
                                  method: "post",
                                });
                              })({ windowType: g }),
                              null == (e = u.logger) ||
                                e.log({
                                  et: "click",
                                  ei: "msg_subscribe_view",
                                  en: "小程序订阅消息弹窗曝光",
                                  params: {
                                    subscribe_page: d,
                                    subscribe_type: l,
                                  },
                                });
                          },
                          onCloseTips: () => {
                            m && m();
                          },
                        });
                      });
                    h();
                  } else h();
                } else h();
              } else h();
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
    },
    LzxJ: function (e, t, n) {
      n.d(t, "a", function () {
        return c;
      }),
        n.d(t, "c", function () {
          return u;
        }),
        n.d(t, "b", function () {
          return d;
        }),
        n.d(t, "e", function () {
          return l;
        }),
        n.d(t, "d", function () {
          return p;
        });
      var i = n("Fcif"),
        a = n("jA1y"),
        o = getApp(),
        r = {},
        s = {},
        c = (e) =>
          Object(a.c)({
            path: "/wscshop/poster/feature.json",
            data: Object(i.a)({}, e, { isV2: 1 }),
          }),
        u = (e) =>
          s.activityAlias === e.activityAlias && s.data
            ? Promise.resolve(s.data)
            : Object(a.c)({
                path: "/wscdeco/ump/activity/get-share-tag.json",
                method: "POST",
                data: e,
              }).then((t) => {
                if (t)
                  return (s = { activityAlias: e.activityAlias, data: t }), t;
              }),
        d = (e) =>
          r.kdtId === o.getKdtId() && r.data
            ? Promise.resolve(r.data)
            : Object(a.c)({
                path: "/wscdeco/ump/activity/get-share-activity.json",
                data: e,
              }).then((e) => {
                if (e) return (r = { kdtId: o.getKdtId(), data: e }), e;
              }),
        l = (e) =>
          Object(a.c)({
            path: "/wscdeco/ump/activity/join-share-activity.json",
            method: "POST",
            data: e,
          }),
        p = (e) =>
          Object(a.c)({
            path: "/wscshop/showcase/share/getUltraCode.json",
            data: e,
          });
    },
    "NY/N": function (e, t, n) {
      n.d(t, "a", function () {
        return s;
      });
      var i = n("Fcif"),
        a = n("JdrY"),
        o = n("US/N"),
        r = [a.h.HOME, a.h.GOODS_DETAIL, a.h.GOODS_GROUP, a.h.FEATURE];
      class s {
        constructor() {
          this.iconList = [];
        }
        getExtraIconList(e, t) {
          return (
            (this.pageType = e),
            (this.iconList.length = 0),
            [this.getGoodsShowcaseIcon(t)]
          );
        }
        getGoodsShowcaseIcon(e) {
          return r.indexOf(this.pageType) > -1
            ? Object(o.default)({
                path: "/wscstatcenter/recommend/float-goods.json",
                data: { kdtId: e, pageType: this.pageType },
              })
                .then((e) => {
                  var { iconData: t } = e || {};
                  return (
                    t &&
                      this.setIcon({
                        priority: a.b.GOODS_SHOWCASE,
                        detail: Object(i.a)({}, t, {
                          independent: !0,
                          navType: a.j.GOODS_SHOWCASE,
                          customClass: "goods-showcase-icon",
                        }),
                      }),
                    t
                  );
                })
                .catch((e) => e)
            : Promise.resolve();
        }
        processNavData(e) {
          var { mainFloatingNav: t, subFloatingNavs: n = [] } = e,
            i = n.find((e) => e.navType === a.j.WECHAT_VIDEO);
          if (
            ((n = n.filter((e) => e.navType !== a.j.WECHAT_VIDEO)),
            this.iconList.length)
          ) {
            this.iconList.sort((e, t) => t.priority - e.priority);
            var o = this.iconList.map((e) => e.detail);
            n.unshift(...o),
              (t = t || {
                floatingMode: 1,
                foldedIconUrl:
                  "//img01.yzcdn.cn/public_files/2018/08/29/2e21a3be2d6815acc4bc915484733c78.png",
                unfoldedIconUrl:
                  "//img01.yzcdn.cn/public_files/2018/08/29/6256e71064c9f5ebe30bdd796957ee7a.png",
              });
          }
          return { liveNav: i, mainFloatingNav: t, subFloatingNavs: n };
        }
        setIcon(e) {
          if ((void 0 === e && (e = {}), this.isValid(e))) {
            var { detail: t = {} } = e;
            if (this.iconList.find((e) => e.detail.navType === t.navType))
              return;
            this.iconList.push(e);
          }
        }
        isValid(e) {
          if (
            (void 0 === e && (e = {}),
            "[object Object]" !== Object.prototype.toString.call(e))
          )
            throw new Error("添加的图标必须为一个对象类型");
          var { priority: t, detail: n } = e;
          if (void 0 === t || void 0 === n)
            throw new Error("添加的图标对象必须有优先级和详细信息");
          return !0;
        }
      }
    },
    Nl8I: function (e, t, n) {
      n.d(t, "f", function () {
        return i;
      }),
        n.d(t, "d", function () {
          return o;
        }),
        n.d(t, "e", function () {
          return s;
        }),
        n.d(t, "b", function () {
          return u;
        }),
        n.d(t, "c", function () {
          return d;
        }),
        n.d(t, "a", function () {
          return l;
        }),
        n.d(t, "g", function () {
          return p;
        });
      var i = (e, t) => {
          var n = { share_cmpt: "savepictures", offlineId: t },
            { extra: i, promoteText: a } = e;
          return (
            i && i.alg && (n.alg = i.alg), a && (n.content = "aiwriting"), n
          );
        },
        a = (e, t) => {
          if (void 0 !== e)
            return e !== t && t
              ? (+t / 100).toFixed(2) + "-" + (+e / 100).toFixed(2)
              : "" + (+e / 100).toFixed(2);
        },
        o = (e) => {
          var t = void 0,
            {
              goodsPrice: n = {},
              goodsActivityInfo: i,
              title: o = "",
              alias: r = "",
              id: s = "",
              goodsId: c = "",
              itemId: u = "",
              picture: d = "",
              goodsAlias: l = "",
              pic: p = "",
              profit: g = "",
            } = e,
            {
              maxOriginPrice: f,
              minOriginPrice: m,
              maxPrice: h,
              minPrice: v,
              oldMaxPrice: b,
              oldMinPrice: y,
              originMaxPrice: w,
              originMinPrice: O,
            } = n,
            I = a(v) || "",
            j = a(h, v) || "",
            S = a(b || f || w || h, y || m || O || v) || "",
            k = f && f !== h;
          if (i) {
            var {
              activityId: _ = 0,
              type: P = 0,
              activityType: x = P,
              activityAlias: T = "",
              activityName: U = "",
            } = i;
            t = { id: _, alias: T || e.activityAlias || "", type: x, name: U };
          }
          return {
            id: s || c || u,
            imgUrl: p || d,
            title: o,
            alias: l || r,
            profit: g,
            minActivityPriceText: I,
            realPriceText: j,
            originPriceText: S,
            hasActivityPrice: !!k,
            activityInfo: t,
          };
        },
        r = { 1: "guide", 2: "salesman" },
        s = (e) => r[e],
        c = { goods: "goodsDetail", item_promote: "salesmanPromote" },
        u = (e) => c[e],
        d = (e, t) => {
          var { id: n, goodsId: i, itemId: a, goodsAlias: o, alias: r } = e;
          return { bizScene: u(t), goodsAlias: o || r, goodsId: n || i || a };
        },
        l = (e) =>
          [
            new RegExp("^pages/goods/detail/index"),
            new RegExp("^packages/shop/salesman/promote/index"),
            new RegExp("^/wscgoods/detail"),
            new RegExp("^/wscsalesman/promotion/promote"),
            new RegExp("^/pay/wscgoods_order"),
          ].some((t) => t.test(e)),
        p = function (e, t) {
          void 0 === t && (t = "");
          var n = ((e, t) => {
              var { alias: n = "" } = t;
              return "" + e.split("/").filter(Boolean).join("") + n;
            })(e.$getPageRoute(), e.$getPageQuery()),
            i = t.split("/").filter(Boolean).join("");
          return !t || n === i;
        };
    },
    Oeeh: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var i = n("US/N"),
        a = function (e) {
          void 0 === e && (e = {});
          var t = { success: !0 },
            n = e.couponId;
          return n
            ? Object(i.default)({
                path: "/wsctrade/order/detail/getVoucher.json",
                method: "POST",
                data: {
                  activityId: n,
                  bizName: "showcase",
                  source: "wap_showcase",
                },
              })
                .then(function () {
                  return t;
                })
                .catch(function () {
                  return t;
                })
            : Promise.resolve(t);
        };
    },
    PlO7: function (e, t, n) {
      n.d(t, "b", function () {
        return p;
      });
      var i = n("Fcif"),
        a = n("JdrY"),
        o = n("US/N"),
        r = n("/duV"),
        s = Object(r.c)(),
        c = {},
        u = { 9: 0 },
        d = null,
        l = -1;
      function p() {
        return Object(o.default)({
          path: "/wscdeco/weapp/WeappAccount/getWeixinVideoInfo.json",
        })
          .then((e) => e || {})
          .catch(() => {});
      }
      function g(e) {
        return (
          void 0 === e && (e = {}),
          {
            mainFloatingNav: Object(i.a)({}, e.mainFloatingNav),
            subFloatingNavs: (e.subFloatingNavs || []).map((e) =>
              Object(i.a)({}, e)
            ),
          }
        );
      }
      t.a = {
        getNavData(e, t, n) {
          if ((void 0 === t && (t = !1), !n)) return Promise.resolve({});
          var i = (function (e) {
            return (
              e === a.h.HOME || e === a.h.FEATURE || e === a.h.GOODS_DETAIL
            );
          })(e);
          return (
            n !== s &&
              (function (e) {
                (s = e), (d = null), (l = -1), (c = {}), (u = { 9: 0 });
              })(n),
            new Promise((a) => {
              !d || void 0 === c[e] || t || (!i && Date.now() - u[e] > 12e4)
                ? (function (e, t) {
                    var n = { page_type: e, v: 2, kdt_id: t, from: "weapp" };
                    return Object(o.default)({
                      path: "/wscdeco/showcase-api/floating_nav.json",
                      data: n,
                      options: { useCdn: !0 },
                    })
                      .then((e) => e || {})
                      .catch(() => {});
                  })(e, n).then((t) => {
                    i || (u[e] = Date.now()),
                      t && 0 === t.value
                        ? ((c[e] = !1), a({}))
                        : ((c[e] = !0), a(g((d = t))));
                  })
                : !1 !== c[e]
                ? a(g(d))
                : a({});
            })
          );
        },
        getCartCount: (e) => (
          void 0 === e && (e = !1),
          new Promise((t) => {
            l < 0 || e
              ? Object(o.default)({ path: "/wscshop/trade/cart/count.json" })
                  .then((e) => {
                    var { count: t } = e;
                    return t || 0;
                  })
                  .catch(() => {})
                  .then((e) => {
                    (l = e), t(e);
                  })
              : t(l);
          })
        ),
        getPoster: (e) =>
          Object(o.default)({ url: e }).then((e) => {
            var { imgUrl: t, img: n } = e;
            return t || n || "";
          }),
        getWishCount: (e) =>
          Object(o.default)({
            path: "/v2/trade/wish/IsShowWishIcon.json?kdt_id=" + e,
            method: "POST",
          }).then((e) => {
            var { wishGoodsTotal: t } = e;
            return t;
          }),
        addCartCount(e) {
          void 0 === e && (e = 1), (l += e);
        },
      };
    },
    Vs3J: function (e, t) {},
    YVLg: function (e, t, n) {
      n.d(t, "a", function () {
        return c;
      });
      var i = n("Fcif"),
        a = n("Tewj"),
        o = n("Pz1p");
      var r = n("JdrY"),
        s = Object(o.b)() ? 84 : 50;
      class c {
        constructor(e, t, n, i, a) {
          void 0 === t && (t = 30),
            void 0 === n && (n = 10),
            void 0 === i && (i = !1);
          var o = c.instanceMap[e];
          if (o) return o;
          (this.ctx = a),
            (this.id = e),
            (this.base = t),
            (this.gap = n),
            (this.iconMap = {}),
            (this.needSetWscIconController = i),
            (c.instanceMap[this.id] = this);
        }
        setBase(e) {
          return (this.base = e), this;
        }
        addBase(e) {
          return (this.base += e), this;
        }
        setGap(e) {
          return (this.gap = e), this;
        }
        getCurrentPageIds() {
          var e = getCurrentPages();
          return e[e.length - 1].__wxExparserNodeId__;
        }
        setIcon(e) {
          if (e.type) {
            if (this.needSetWscIconController)
              getApp().trigger(
                "set-wsc-feature-floating-nav-" + this.getCurrentPageIds(),
                { priority: e.priority, height: e.height }
              );
            return (
              this.iconMap[e.type] &&
                ((e.priority =
                  e.priority || this.iconMap[e.type].priority || 0),
                (e.height =
                  0 === e.height
                    ? 0
                    : e.height || this.iconMap[e.type].height)),
              Object.keys(this.iconMap).some(
                (t) =>
                  this.iconMap[t].priority === e.priority &&
                  (delete this.iconMap[t], !0)
              ),
              (this.iconMap[e.type] = Object(i.a)({}, e)),
              Object.keys(this.iconMap)
                .sort(
                  (e, t) => this.iconMap[t].priority - this.iconMap[e].priority
                )
                .reduce((t, n, i, o) => {
                  var { priority: s, height: c, goaway: u } = this.iconMap[n];
                  return (
                    ((o.length > 1 && s <= e.priority) || 1 === o.length) &&
                      ((this.iconMap[n].bottom = t),
                      a.default.trigger(
                        "" + (r.a.UPDATE_ICON_POSITION + this.ctx.data.random),
                        { type: n, bottom: t, goaway: u }
                      )),
                    t + c + (c > 0 ? this.gap : 0)
                  );
                }, s + this.base),
              this
            );
          }
        }
        setAlone(e) {
          this.needSetWscIconController &&
            getApp().trigger(
              "set-wsc-feature-floating-nav-" +
                this.getCurrentPageIds() +
                "-setalone",
              e
            );
          return (
            Object.keys(this.iconMap).forEach((t) => {
              var { canGoaway: n, bottom: i } = this.iconMap[t];
              n &&
                ((this.iconMap[t].goaway = e),
                a.default.trigger(r.a.UPDATE_ICON_POSITION, {
                  type: t,
                  goaway: e,
                  bottom: i,
                }));
            }),
            this
          );
        }
        destroy() {
          (this.iconMap = []), delete c.instanceMap[this.id];
        }
      }
      c.instanceMap = {};
    },
    asvp: function (e, t, n) {
      n.d(t, "a", function () {
        return d;
      });
      var i,
        a = n("Fcif"),
        o = n("ONqW"),
        r = n("q3MX"),
        s = 1,
        c = Object(r.b)({
          yai: "shop_guide_workbench_b",
          app: "wsc-tee-salesman",
          requestUrl: "https://tj1.youzan.com/v3/js/log",
        }),
        u = Object(o.a)();
      c.setEvent(null == (i = u.getLogParams()) ? void 0 : i.event);
      var d = function (e) {
        void 0 === e && (e = {});
        var t,
          { params: n = {} } = e,
          { mark: i = "" } = n,
          { salesman_type: o } = n;
        o === s &&
          (u.getLogParams().user && c.setUser(u.getLogParams().user),
          c.setEvent({ si: i.split("-")[0] }),
          c.log(
            Object(a.a)(
              {},
              (null == (t = u.getLogParams()) ? void 0 : t.event) || {},
              e
            )
          ));
        u.log(e);
      };
    },
    bPmV: function (e, t, n) {
      n.d(t, "b", function () {
        return Q;
      }),
        n.d(t, "c", function () {
          return ee;
        }),
        n.d(t, "g", function () {
          return te;
        }),
        n.d(t, "e", function () {
          return ie;
        }),
        n.d(t, "f", function () {
          return oe;
        }),
        n.d(t, "h", function () {
          return re;
        }),
        n.d(t, "a", function () {
          return c.a;
        }),
        n.d(t, "d", function () {
          return $;
        });
      var i,
        a,
        o,
        r,
        s,
        c = n("cqgp"),
        u = n("w2Y9"),
        d = n.n(u),
        l = n("tuFO"),
        p = n.n(l),
        g = function () {
          return (g =
            Object.assign ||
            function (e) {
              for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        };
      !(function (e) {
        (e[(e.Guide = 1)] = "Guide"), (e[(e.Salesman = 2)] = "Salesman");
      })(r || (r = {})),
        (function (e) {
          (e.Share = "share"),
            (e.Code = "code"),
            (e.TuwenPoster = "tuwenPoster"),
            (e.FeaturePoster = "featurePoster"),
            (e.GoodsPoster = "goodsPoster"),
            (e.ZonePoster = "zonePoster"),
            (e.Link = "link"),
            (e.WeappLink = "weappLink"),
            (e.Copy = "copy"),
            (e.Custom = "custom");
        })(s || (s = {}));
      var f = "salesman_advance_personal_space_ability",
        m = "share",
        h = "copy",
        v = "tuwenPoster",
        b = "code",
        y = "salesman",
        w = "material",
        O = "guideMaterial",
        I = "zoom",
        j = "guide",
        S = "featurePoster",
        k = "promote",
        _ = "zonePoster",
        P = "weappLink",
        x = [I, _, w, k],
        T = [k],
        U = (((i = {})[f] = [I]), i),
        C = Object.prototype.hasOwnProperty,
        E = function (e) {
          return "//b.yzcdn.cn/salesman/cube/" + e;
        },
        M = "weapp",
        A = "qq",
        D = "web",
        N = "goods",
        F = "benefit_card",
        L = "feature",
        z = "feature_page",
        G = "home_page",
        q = "zone",
        R = "salesman_goods",
        W = "salesman_coupon",
        B = {
          web: [
            [m, h, v, b],
            [y, w, I],
          ],
          weapp: [
            [m, v, b],
            [y, w, I],
          ],
          qq: [[m, b]],
        },
        V =
          (((a = { default: B })["shop_note"] = B),
          (a[F] = B),
          (a[L] = {
            weapp: [
              [m, S, b],
              [y, w, I],
            ],
          }),
          (a[z] = {
            weapp: [
              [m, S, b, P],
              [y, w, I],
            ],
          }),
          (a[G] = {
            weapp: [
              [m, S, b, P],
              [y, w, I],
            ],
          }),
          (a[W] = {
            weapp: [
              [m, b],
              [y, w],
            ],
          }),
          (a[q] = {
            weapp: [
              [m, b, _],
              [y, w],
            ],
          }),
          (a[R] = { weapp: [[b, y, w, I]] }),
          (a[N] = {
            web: [[m, h, b, y]],
            weapp: [[m, P, b, y]],
            qq: [[m, b, y, I]],
            weappRunEnv: [[b, y]],
          }),
          a),
        H = (((o = {})[y] = j), (o[w] = O), o),
        Y = [y, k, I],
        Z = {
          web: [
            [m, h, v, b],
            [j, w],
          ],
          weapp: [
            [m, v, b],
            [j, w],
          ],
          qq: [[m, b]],
        },
        J = {
          default: Z,
          shop_note: Z,
          benefit_card: Z,
          salesman_coupon: {
            weapp: [
              [m, b],
              [j, w],
            ],
          },
          zone: {
            weapp: [
              [m, b, _],
              [j, w],
            ],
          },
          salesman_goods: { weapp: [[b, j, w]] },
          goods: {
            web: [[m, h, b, j, w]],
            weapp: [[m, P, b, j, w]],
            qq: [[m, b, j]],
            weappRunEnv: [[b, j, w]],
          },
        },
        K = function (e) {
          var t = e.runEnv,
            n = e.shareData,
            i = void 0 === n ? {} : n,
            a = e.kdtId,
            o = e.hasGuideMaterial,
            r = i.salesmanName,
            c = void 0 === r ? "销售员" : r;
          return {
            share: {
              id: "share",
              title: t === A ? "分享给好友" : "微信好友",
              openType: "share",
              type: s.Share,
              iconUrl: E(t === A ? "share_qq.png" : "share.png"),
            },
            code: {
              id: "code",
              title: t === M || t === A ? "小程序码" : "二维码",
              type: s.Code,
              iconUrl: E(t === M || t === A ? "wecode.png" : "qrcode.png"),
            },
            weappLink: {
              id: "weappLink",
              title: "小程序链接",
              type: s.WeappLink,
              iconUrl: E("weappLink.png"),
            },
            tuwenPoster: {
              id: "tuwenPoster",
              title: "分享海报",
              type: s.TuwenPoster,
              iconUrl: E("NdzsNJ.png"),
            },
            featurePoster: {
              id: "featurePoster",
              title: "分享海报",
              type: s.FeaturePoster,
              iconUrl: E("NdzsNJ.png"),
            },
            goodsPoster: {
              id: "goodsPoster",
              title: "分享海报",
              type: s.GoodsPoster,
              iconUrl: E("poster.png"),
            },
            zonePoster: {
              id: "zonePoster",
              title: "空间海报",
              type: s.ZonePoster,
              iconUrl: E("poster.png"),
            },
            promote: {
              id: "promote",
              iconUrl: E("promoteicon.png"),
              title: "专属推广页",
              type: s.Link,
              webUrl: "/wscsalesman/promotion/promote",
              weappUrl: "/packages/salesman/promote/index",
            },
            salesman: {
              id: "salesman",
              iconUrl: E("salesman_o.png"),
              title: c + "中心",
              type: s.Link,
              weappUrl: "/packages/salesman/salesman-center/index",
              webUrl: "/wscump/salesman/index",
            },
            guide: {
              id: "guide",
              iconUrl: E("salesman.png"),
              title: "导购工作台",
              type: s.Link,
              weappUrl:
                "/pages/common/webview-page/index?src=" +
                encodeURIComponent(
                  "https://h5.youzan.com/guide/center/home?kdt_id=" + a
                ),
              webUrl: "/guide/center/home",
            },
            material: {
              id: "material",
              iconUrl: E("meterial.png"),
              title: "素材中心",
              type: s.Link,
              weappUrl: "/packages/salesman/zone/material/index",
              webUrl: "/wscump/salesman/zone/material",
            },
            guideMaterial: {
              id: "guideMaterial",
              iconUrl: E("meterial.png"),
              title: "素材中心",
              type: s.Link,
              weappUrl: o
                ? "/packages/guide/zone/material/index"
                : "/packages/salesman/zone/material/index",
              webUrl: "/guide/zone/material",
            },
            zoom: {
              id: "zoom",
              iconUrl: E("zoom.png"),
              title: "个人空间",
              type: s.Link,
              weappUrl: "/packages/salesman/zone/home/index",
              webUrl: "/wscump/salesman/zone/home",
            },
            center: {
              id: "center",
              iconUrl: E("zoom.png"),
              title: "个人中心",
              type: s.Link,
              weappUrl: "/packages/usercenter/dashboard/index",
              webUrl: "/wscuser/membercenter",
            },
            copy: {
              id: "copy",
              iconUrl: E("copy.png"),
              title: "复制链接",
              type: s.Copy,
            },
          };
        };
      function X(e, t, n) {
        void 0 === n && (n = {});
        var i = n.kdtId,
          a = n.buildEnv,
          o = n.shareInfo,
          r = n.runEnv;
        if ("link" === e.type) {
          if (
            (e.webUrl &&
              (e.webUrl = p()(d.a.add(e.webUrl, { kdtId: i }), "h5", i)),
            "promote" === e.id)
          ) {
            var s = t.goodsActivityInfo,
              c = void 0 === s ? {} : s,
              u = {
                activityAlias: c.activityAlias || "",
                activityType: c.type || c.activityType || "",
                activityId: c.activityId || "",
                umpType: c.type || c.activityType || "",
              };
            "web" === a &&
              e.webUrl &&
              (e.webUrl = d.a.add(
                e.webUrl,
                g(
                  { alias: t.alias, refUrl: encodeURIComponent(o.url || "") },
                  u
                )
              )),
              "weapp" === r &&
                e.weappUrl &&
                (e.weappUrl = d.a.add(
                  e.weappUrl,
                  g({ alias: t.alias, itemId: t.id }, u)
                ));
          }
          var l = e[a + "Url"];
          return (
            !l &&
              "web" !== r &&
              e.webUrl &&
              (l =
                "weapp" !== r
                  ? "/pages/web-view/index?url=" + encodeURIComponent(e.webUrl)
                  : "/pages/common/webview-page/index?src=" +
                    encodeURIComponent(e.webUrl)),
            g(g({}, e), { url: l })
          );
        }
        return e;
      }
      var $ = function (e) {
        var t,
          n,
          i = e.shareData,
          a = void 0 === i ? {} : i,
          o = e.goodsInfo,
          r = void 0 === o ? {} : o,
          s = e.shareInfo,
          c = void 0 === s ? {} : s,
          u = e.scenes,
          d = e.customOptionListConfig,
          l = void 0 === d ? {} : d,
          p = e.shopAbilities,
          m = void 0 === p ? {} : p,
          h = e.hasGuideMaterial,
          v = void 0 !== h && h,
          b = e.runEnv,
          y = e.kdtId,
          w = e.buildEnv,
          O = a.isShoppingGuide,
          I = K({ runEnv: b, shareData: a, kdtId: y, hasGuideMaterial: v }),
          j = O ? J : V;
        n = C.call(j, u) ? j[u] : j.default;
        var S = [];
        S = w === D ? n[b + "RunEnv"] || n[b] || [] : n[b] || [];
        var k = l[b] || [],
          _ = k.length ? k : S,
          P = function (e, t, n) {
            return e.map(function (e) {
              if ("string" == typeof e)
                return n(t[e], r, {
                  runEnv: b,
                  kdtId: y,
                  buildEnv: w,
                  shareInfo: c,
                });
              if (Array.isArray(e)) return P(e, t, n);
              var i = e.id || "",
                a = t[i] || {};
              return n(g(g({}, a), e), r, {
                runEnv: b,
                kdtId: y,
                buildEnv: w,
                shareInfo: c,
              });
            });
          };
        return (function (e) {
          var t = e.optionList,
            n = e.shareData,
            i = e.runEnv,
            a = e.buildEnv,
            o = e.kdtId,
            r = e.shareInfo,
            s = e.hasGuideMaterial,
            c = e.formatIconOption,
            u = e.abilities,
            d = function (e, t) {
              var n = [];
              return (
                e.forEach(function (e) {
                  Array.isArray(e)
                    ? n.push(d(e, t))
                    : t.includes(e.id) || n.push(e);
                }),
                n
              );
            },
            l = function (e) {
              var t = [];
              return (
                e.forEach(function (e) {
                  if (Array.isArray(e)) t.push(l(e));
                  else if (e.id && C.call(H, e.id)) {
                    var u = e && e.id,
                      d = H[u],
                      p = K({
                        runEnv: i,
                        shareData: n,
                        kdtId: o,
                        hasGuideMaterial: s,
                      }),
                      g = c(
                        p[d],
                        {},
                        { runEnv: i, kdtId: o, buildEnv: a, shareInfo: r }
                      );
                    t.push(g);
                  } else t.push(e);
                }),
                t
              );
            },
            p = t,
            g = n.isShoppingGuide;
          return (
            g || n.allowMoments || (p = d(p, x)),
            n.allowGoodsRecommend || (p = d(p, T)),
            g && ((p = d(p, Y)), (p = l(p))),
            u &&
              Object.keys(u).forEach(function (e) {
                u[e] || (p = d(p, U[e]));
              }),
            p
          );
        })({
          optionList: P(_, I, X),
          shareInfo: c,
          shareData: a,
          runEnv: b,
          buildEnv: w,
          kdtId: y,
          hasGuideMaterial: v,
          formatIconOption: X,
          abilities: ((t = {}), (t[f] = null == m ? void 0 : m[f]), t),
        });
      };
      function Q(e) {
        void 0 === e && (e = {});
        var t = e.alias,
          n = e.itemId,
          i = e.id,
          a = e.goodsId,
          o = e.picture,
          r = e.pic,
          s = e.title,
          c = e.goodsPrice,
          u = void 0 === c ? {} : c,
          d = e.goodsAlias,
          l = u.maxPrice,
          p = u.realPrice;
        return {
          alias: d || t,
          goodsId: i || n || a,
          image: r || o,
          title: s,
          price: +l || 100 * +p,
        };
      }
      function ee(e, t, n) {
        if (n) return 0;
        var i = t.cpsRate,
          a = e || {},
          o = a.profit,
          r = a.goodsPrice;
        return o
          ? +(+o / 100).toFixed(2)
          : i && r && r.maxPrice
          ? (Math.floor(i * (null == r ? void 0 : r.maxPrice)) / 100).toFixed(2)
          : 0;
      }
      function te(e) {
        var t = e.taxServiceState,
          n = e.userSigned,
          i = e.authDeadline,
          a = e.authDeadlineOver,
          o = e.shareAuth,
          r = e.mode,
          s = "";
        return (
          t &&
            !n &&
            1 === o &&
            (s =
              1 === r
                ? "根据《电商法》规定，个人收入需要缴纳个税，请先完成个人信息认证，否则获得的佣金或奖励不结算。"
                : a
                ? "由于商家开启了个税代缴服务，需要认证升级后才可使用，你还未完成信息认证，商家无法给你发放佣金或奖励。"
                : "由于商家开启了个税代缴服务，需要认证升级后才可使用，请在 " +
                  i +
                  " 前完成认证升级，否则商家无法给你发放佣金或奖励。"),
          s
        );
      }
      function ne(e, t) {
        if (void 0 !== e)
          return e !== t && t
            ? (+t / 100).toFixed(2) + "-" + (+e / 100).toFixed(2)
            : "" + (+e / 100).toFixed(2);
      }
      function ie(e, t) {
        var n = (function (e) {
            var t = e.goodsPrice,
              n = void 0 === t ? {} : t,
              i = n.maxOriginPrice,
              a = n.minOriginPrice,
              o = n.maxPrice,
              r = n.minPrice,
              s = n.oldMaxPrice,
              c = n.oldMinPrice,
              u = n.originMaxPrice,
              d = n.originMinPrice,
              l = ne(s || i || u || o, c || a || d || r),
              p = ne(r),
              g = ne(o, r),
              f = ae(e),
              m = "💰【售价】" + g + "元 \n 👉 购买链接：",
              h =
                "💰【活动价低至】" +
                p +
                "元 \n💰【非活动价】" +
                l +
                " 元 \n 👉 立刻去抢购：";
            return f ? h : m;
          })(e),
          i = oe(e, t);
        return i.endsWith("\n") ? "" + i + n : i + "\n" + n;
      }
      function ae(e) {
        var t = e.goodsActivityInfo,
          n = void 0 === t ? {} : t,
          i = e.goodsPrice,
          a = void 0 === i ? {} : i,
          o = a.maxOriginPrice,
          r = a.maxPrice,
          s = o && o !== r,
          c = n.activityName,
          u = n.type,
          d = n.activityType,
          l = void 0 === d ? u : d,
          p = ["customerDiscount"].indexOf(l || "") >= 0;
        return (c || l || s) && !p;
      }
      function oe(e, t) {
        var n = null == t ? void 0 : t.promoteText,
          i = e.title,
          a = ae(e);
        return (
          n ||
          (a ? "限时福利！超值优惠价！" + i : "为你发现了一个品质好货 " + i)
        );
      }
      function re(e) {
        void 0 === e && (e = {});
        var t = [],
          n = {
            copy_0: "文案/链接复制失败",
            copy_1: "文案/链接已复制",
            material_0: "素材分享到动态失败",
            material_1: "素材已分享到动态",
            image_0: "图片保存到相册失败",
            image_1: "图片已保存到相册",
          };
        return (
          Object.keys(e).forEach(function (i) {
            t.push({ type: i, state: e[i], text: n[i + "_" + e[i]] });
          }),
          t
        );
      }
    },
    bkjF: function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      });
      var i = {
        1: [/^packages\/(ext-)*home\/dashboard/],
        2: [/^packages\/goods(-v\d+)*\/detail/, /^pages\/goods\/detail/],
      };
    },
    dXlM: function (e, t, n) {
      n.d(t, "b", function () {
        return c;
      }),
        n.d(t, "a", function () {
          return u;
        });
      var i = n("Fcif"),
        a = n("OK7I"),
        o = n.n(a),
        r = n("w2Y9"),
        s = n.n(r);
      o()(8);
      function c(e) {
        return e.map((e) => {
          var t = {
            alias: e.alias,
            type: "card",
            layout: "vertical",
            theme: "theme",
            corner: "circle",
            align: "left",
            imgOpt: { src: e.imageUrl, corner: "circle" },
            priceOpt: { price: e.price, tagGap: 2 },
            useTagsSlot: !0,
          };
          return Object(i.a)({}, e, { card: t });
        });
      }
      function u(e) {
        var {
          list: t = [],
          curLength: n = 0,
          bannerOpt: a,
          recommendName: o,
        } = e;
        return t.map((e, t) => {
          var r = (function (e) {
              var {
                loggerSpm: t,
                componentIndex: n,
                index: i,
                pageRandomNumber: a,
              } = e;
              return t + "~recService." + (n + 1) + "~" + i + "~" + a;
            })(Object(i.a)({ index: n + t + 1 }, a)),
            { itemType: c, algs: u } = e,
            d = {
              item_id: e.id,
              item_type: c || "goods",
              banner_id: r,
              alg: u,
              g_kdt_id: e.kdtId,
              recommend_name: o,
            },
            l = s.a.add(e.url, { banner_id: r, alg: u });
          return Object(i.a)({}, e, {
            type: c,
            bannerId: r,
            isExtra: "goods" !== c,
            url: l,
            loggerParams: d,
            originPrice: e.origin,
          });
        });
      }
    },
    deif: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var i = function () {
          return (i =
            Object.assign ||
            function (e) {
              for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        },
        a = function (e) {
          var t = e.data,
            n = e.offlineId,
            a = e.isSkuOrder,
            o = t.alias,
            r = t.goodsId,
            s = t.activityTypes,
            c = t.birthdayScene,
            u = t.goodsIdForBirthday,
            d = i(i({ alias: o }, r ? { goodsId: r } : {}), {
              offlineId: n,
              v: 2,
              bizScene: "goods_sku_component",
              isCombo: !0,
              isSkuOrder: a,
            });
          return (
            s && (d.activityTypes = JSON.stringify(s)),
            c && (d.birthdayScene = c),
            u && (d.goodsIdForBirthday = u),
            d
          );
        };
    },
    fjvq: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return o;
        });
      var i = n("US/N");
      function a() {
        return Object(i.requestUseCdn)({
          path: "/v3/im/api/setting/contact-mode",
          method: "GET",
        });
      }
      function o() {
        return Object(i.default)({
          path: "/v3/im/api/weixin-kf/weixin-kf-config.json",
          method: "GET",
        });
      }
    },
    hOS2: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var i = n("tS13"),
        a = function (e) {
          var t = e.data,
            n = e.shopConfig,
            a = e.timingSaleHideBuyBtnInSku,
            o = e.couponId,
            r = e.skuScene,
            s = t.itemDataModel,
            c = t.option,
            u = void 0 === c ? {} : c,
            d = s || {},
            l = n || {},
            p = l.hide_shopping_cart,
            g = l.show_buy_btn,
            f = u.hideCart || 1 == +p,
            m = 1 != +g,
            h = d.startSoldTime,
            v = t.cartText,
            b = t.buyBtnText,
            y = d.isVirtual,
            w = f ? i.c.BUY : i.c.SEL_SKU,
            O = !0,
            I = !0,
            j = "";
          return (
            ((y = !!+y) || f) && ((O = !1), (b = "下一步")),
            O && n && m && ((I = !1), (v = "加入购物车"), (w = i.c.ADD_CART)),
            a &&
              h &&
              Date.now() < 1e3 * h &&
              ((I = !1), (O = !0), (w = i.c.ADD_CART)),
            2 === t.buyLimitType &&
              ((j = "仅限特定会员购买"), (w = i.c.DISABLE)),
            o && (b = "领券购买"),
            r && (w = r),
            {
              buyText: b,
              addCartText: v,
              skuScene: w,
              showBuyBtn: I,
              showAddCartBtn: O,
              disableText: j,
            }
          );
        };
    },
    luHS: function (e, t, n) {
      n.d(t, "a", function () {
        return c;
      }),
        n.d(t, "b", function () {
          return u;
        });
      var i = n("Fcif"),
        a = n("tuFO"),
        o = n.n(a),
        r = n("7LtC");
      function s(e) {
        var { kdtId: t, oid: n, pathSuffix: i } = e;
        return o()(r.d + "/" + i + "?kdtId=" + t + "&oid=" + n, "h5", t);
      }
      function c(e) {
        var { showcaseItemList: t, kdtId: n, oid: a } = e;
        return t.map((e) =>
          Object(i.a)({}, e, {
            moreUrl: s({ kdtId: n, oid: a, pathSuffix: e.pathSuffix }),
          })
        );
      }
      function u(e, t) {
        var n = 0;
        return (
          Object.keys(e).some((i) =>
            e[i].some((e) => !!e.test(t) && ((n = Number(i)), !0))
          ),
          n
        );
      }
    },
    mY4v: function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      });
      var i = n("NHEX"),
        a = n.n(i),
        o = function (e, t) {
          var n = a()(e, "selectedSkuComb.id"),
            i = [];
          try {
            i = JSON.parse(a()(e, "selectedSkuComb.sku"));
          } catch (e) {}
          t({
            ei: "add_cart",
            en: "添加购物车",
            et: "click",
            params: {
              goods_name: a()(e, "itemDataModel.title"),
              sku_name: i,
              num: a()(e, "selectedNum"),
              sku_id: n,
              goods_id: a()(e, "goodsId"),
            },
          });
        };
    },
    oWYj: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var i = n("US/N");
      function a(e) {
        return Object(i.default)({
          method: "GET",
          path: "/wscstatcenter/recommend/getRecommendResultData.json",
          data: { params: JSON.stringify(e) },
          errorMsg: "获取推荐商品错误",
          withCredentials: !0,
        });
      }
    },
    pgby: function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      });
      var i = function (e) {
        var t = e.itemDataModel,
          n = e.alias,
          i = e.soldNum,
          a = t || {},
          o = a.itemId,
          r = a.pictures;
        return {
          id: o,
          alias: n,
          title: a.title,
          goodsId: o,
          picture: r[0].url,
          soldNum: i,
        };
      };
    },
    qEWN: function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      });
      var i = n("US/N"),
        a = n("9ZMt").default.getEnv(),
        o = (e) =>
          Object(i.requestUseCdn)({
            path: "/wscshop/common/footer-data.json",
            method: "GET",
            query: { kdtId: e, onlyCopyright: "web" === a ? 0 : 1 },
          });
    },
    sctb: function (e, t, n) {
      n.d(t, "a", function () {
        return d;
      });
      var i = n("9ZMt"),
        a = n("US/N"),
        o = n("AGZf"),
        r = n("WQRT"),
        s = n("YeA1"),
        c = n("lgMb"),
        u = n("Tewj");
      class d {
        buyHandler(e) {
          return Object(a.requestV2)({
            method: "POST",
            path: "/wsctrade/order/goodsBook.json",
            data: Object(r.b)(e),
          }).catch(function (e) {
            void 0 === e && (e = {}),
              Object(c.b)(e, { message: "下单失败，请稍后重试" });
          });
        }
        addCartHandler(e) {
          return Object(a.requestV2)({
            path: "/wscshop/trade/cart/goods.json",
            method: "POST",
            header: { "content-type": "application/x-www-form-urlencoded" },
            data: Object(r.a)(e),
          })
            .then(() => {
              u.default.trigger("addCartSuccess", "addCartSku", e),
                Object(o.a)("已成功添加到购物车"),
                getApp().trigger("component:sku:cart");
            })
            .catch(function (e) {
              void 0 === e && (e = {}),
                Object(c.b)(e, { message: "添加失败，请稍后重试" });
            });
        }
        onBuyEnd(e) {
          var t =
            "weapp" === i.default.getEnv()
              ? { bookKey: e.bookKey }
              : { book_key: e.bookKey, kdt_id: e.kdtId };
          e.orderFrom && (t.orderFrom = e.orderFrom);
          var { dmc: n } = Object(s.a)();
          n.navigate("ConfirmOrder", t);
        }
      }
    },
    sqjt: function (e, t, n) {
      n.d(t, "a", function () {
        return c;
      });
      var i = n("9DIb"),
        a = n.n(i),
        o = n("NHEX"),
        r = n.n(o),
        s = function () {
          return (s =
            Object.assign ||
            function (e) {
              for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        },
        c = function (e, t) {
          var n = e.itemActivitySpuModels,
            i = e.tree,
            o = e.itemDataModel,
            c = e.quota,
            u = void 0 === c ? 0 : c,
            d = e.quotaUsed,
            l = void 0 === d ? 0 : d,
            p = e.preSaleExtraModel,
            g = s({}, e),
            f = e.list,
            m = {};
          n &&
            n.length &&
            (Object.assign(g, n[0]),
            (m = (function (e, t) {
              var n = {};
              try {
                var i = e.type,
                  a = e.price,
                  o = e.minPrice,
                  r = e.maxPrice,
                  s = e.list,
                  c = void 0 === s ? [] : s,
                  u = e.oldPrice,
                  d = e.priceTitle,
                  l = t.quota,
                  p = t.quotaUsed;
                a !== u &&
                  (n = {
                    goods_preference: {
                      show_price: 100 * a,
                      price_range: { min: o, max: r },
                      type: i,
                      skus: c.reduce(function (e, t) {
                        return (e[t.id] = { price: t.price }), e;
                      }, {}),
                      quota: l,
                      quota_used: p,
                      priceTitle: d,
                    },
                  });
              } catch (e) {}
              return n;
            })(n[0], e))),
            t && (g.couponId = t);
          var h = 100 * +g.price,
            v = 100 * +g.oldPrice,
            b = [],
            y = [],
            w = r()(m, "goods_preference", {}),
            O = w.type || "";
          try {
            var I = r()(w, "is_started"),
              j = p ? "预售" : "",
              S = w.priceTitle || j || "";
            if (
              (S && (g.priceTitle = S),
              "customerDiscount" === O || ("timelimitedDiscount" === O && I))
            ) {
              h = +w.show_price;
              var k = w.skus || {};
              f = g.list.map(function (e) {
                return s(s({}, e), {
                  originPrice: +e.origin || +e.price,
                  price: +(k[e.id] && k[e.id].price) || +e.price,
                });
              });
            }
          } catch (e) {}
          g.priceTitle &&
            (b.push({ text: g.priceTitle }),
            y.push({ text: g.priceTitle, type: g.type }));
          var _ = {
            quota: u,
            quotaUsed: l,
            startSaleNum: r()(o, "startSaleNum", 1),
          };
          return s(s({}, g), {
            priceTags: y,
            price: h,
            oldPrice: v,
            tags: b,
            limit: _,
            list: a()(f),
            tree: a()(i),
          });
        };
    },
    uA99: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var i = n("9ZMt"),
        a = function (e, t) {
          return (
            void 0 === t && (t = ""),
            "weapp" === i.default.getEnv()
              ? i.default.navigate({
                  url:
                    "/pages/common/webview-page/index?src=" +
                    encodeURIComponent(e) +
                    "&title=" +
                    t,
                })
              : i.default.navigate({
                  url:
                    "/pages/web-view/index?url=" +
                    encodeURIComponent(e) +
                    "&title=" +
                    t,
                })
          );
        };
    },
    v8e2: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var i = n("US/N"),
        a = (e) =>
          Object(i.default)({ path: "/wscshop/weapp/getMpLive.json", data: e });
    },
  });
