"use strict";
var r = require("~/r");
r(
  "jZNT",
  Object.assign(
    {},
    require("../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "1F7m": function (t, e, a) {
        a.d(e, "a", function () {
          return i;
        });
        var i = { TINY_PAGE: 6, COUPONS: 13, BROWSE_GOODS: 21, OTHER: 14 };
      },
      gc3r: function (t, e, a) {
        a.d(e, "b", function () {
          return u;
        }),
          a.d(e, "a", function () {
            return h;
          });
        var i = a("Fcif"),
          s = a("jA1y"),
          c = a("vgcL"),
          o = a("2wjL"),
          d = a("u8kV"),
          r = a("rDSc"),
          g = a("8B9M"),
          n = function (t, e) {
            t || (!1 !== e.isNeedShareMore && this.setYZData({ salesman: e }));
          },
          u = (t) => {
            var e = Object(r.a)(Object(i.a)({}, t, { path: t.url }), "url");
            return Object(s.c)(e);
          },
          h = function (t) {
            var {
                scene: e,
                sst: a,
                gst: s,
                getSalesmanData: r = n,
                query: h,
              } = t,
              l = Object(g.a)() || {},
              k = l.getToken() || {},
              { route: p = "", options: v = {} } = Object(d.d)(),
              y = h || v,
              S = o.a.add(p, y),
              m = { gst: (s = s || Object(c.e)(e)), sst: a, sourceUrl: S },
              { yzUserId: b } = k;
            Object(c.f)({
              url: S,
              logParams: l.logger.getLogParams && l.logger.getLogParams(),
              userId: b,
              request: u,
            }),
              Object(c.a)(Object(i.a)({}, m)),
              Object(c.b)({}, r.bind(this));
          };
      },
      jZNT: function (t, e, a) {
        a.r(e);
        var i = a("Fcif"),
          s = a("qJXH"),
          c = a("xyw3"),
          o = a("a1Mm"),
          d = a("taYb"),
          r = a("1Uvd"),
          g = a("2wjL"),
          n = a("zMoS"),
          u = a("hHpg"),
          h = a("lRMv"),
          l = a("Hhx2"),
          k = a("KQ2A"),
          p = a("RY8z"),
          v = a("i+tm"),
          y = a("9CuX"),
          S = a("RQUM"),
          m = a("rwCI"),
          b = a("gc3r"),
          P = a("1F7m"),
          I = getApp(),
          j = Object(r.a)(8);
        Object(s.b)({
          goodsSkus: {},
          currentGoods: {},
          needMessageList: [],
          data: {
            packagePrice: 0,
            goodsId: "",
            activityAlias: "",
            loading: !0,
            showSku: !1,
            isStart: !1,
            activityEnd: !1,
            mainGoods: null,
            skuData: { goods: {}, sku: {} },
            skuExtraData: {
              hideSkuStepper: !0,
              useCustomHeaderPrice: !0,
              isMatchPackage: !1,
              activityPrice: 0,
              originPrice: 0,
            },
            icon: {
              normal:
                "https://img01.yzcdn.cn/public_files/2019/04/01/d47a25ce53226982068cb7da815ca420.png",
              active:
                "https://img01.yzcdn.cn/public_files/2019/04/01/bcd4aeddc000d5ae980eb1b0cd70eee2.png",
            },
            themeClass: I.themeClass,
            checkedList: [],
            packages: [],
            payGoodsList: [],
            salesman: {},
          },
          onLoad(t) {
            var { activityAlias: e = "" } = t;
            if ((b.a.call(this, { sst: 12, gst: P.a.TINY_PAGE }), e)) {
              var a = g.a.add("/" + this.route, t);
              Object(h.g)(
                Object(i.a)({}, t, {
                  umpAlias: e,
                  umpType: "packagebuy",
                  redirectUrl: a,
                })
              ).then(() => {
                this.getActivityInfo(t);
              });
            } else this.getActivityInfo(t);
          },
          getActivityInfo(t) {
            var { goodsId: e = "", activityAlias: a = "" } = t;
            this.setYZData({ goodsId: e, activityAlias: a }),
              (this.$log = { act_type: "7" }),
              wx.showLoading(),
              this.fetchActivity()
                .then((t) => {
                  (t = d.a.toCamelCase(t)), wx.hideLoading();
                  var {
                    isStart: e,
                    packages: a,
                    mainGoods: i,
                    isMatchPackage: s,
                    packagePrice: c,
                    checkedList: o,
                    payGoodsList: r,
                    pageTitle: g,
                  } = this.initData(t);
                  g && wx.setNavigationBarTitle({ title: g }),
                    this.setYZData({
                      packages: a,
                      checkedList: o,
                      mainGoods: i,
                      packagePrice: c,
                      isMatchPackage: s,
                      payGoodsList: r,
                      loading: !1,
                      isStart: e,
                      "skuExtraData.hideSkuStepper": !s,
                      "skuExtraData.isMatchPackage": s,
                    });
                })
                .catch(() => {
                  wx.hideLoading(), this.jumpEmptyPage();
                });
          },
          jumpEmptyPage() {
            var t = "/wscump/common/activity-not-find?kdt_id=" + I.getKdtId();
            p.a.redirect({
              url:
                "/pages/common/webview-page/index?src=" +
                encodeURIComponent(t) +
                "&title=优惠套餐",
            });
          },
          onShareAppMessage() {
            var { goodsId: t, activityAlias: e, packages: a } = this.data,
              i = g.a.add("/packages/ump/discount-packages/index", {
                goodsId: t,
                activityAlias: e,
              });
            return {
              title: "推荐你看下，超低价格拿走套餐里的全部商品哟！",
              imageUrl: a[0].goodsList[0].thumbUrl,
              path: i,
            };
          },
          generatePayGoodsList(t, e, a) {
            void 0 === a && (a = []);
            var i = e.map((e) => ({
              goodsId: e.id,
              num: e.num,
              kdtId: e.kdtId,
              skuId: e.currentSkuId,
              price: e.price,
              collocationPrice: e.collocationPrice,
              activityAlias: t.idAlias,
              activityId: t.id,
              activityType: 7,
            }));
            return a.concat(i);
          },
          initData(t) {
            var e = null,
              a = [],
              i = [],
              s = t[0],
              { goodsList: d, activity: r } = s,
              g = 1 === t.length && 1 === s.activity.type,
              u = this.isStart(r),
              h = t.length > 1 ? "" : Object(n.a)(r, "title", "优惠套餐"),
              l = I.getBuyerId() || "",
              k = I.getKdtId();
            return (
              t.forEach((t, e) => {
                var a, i, s;
                (null == (a = t.alg) ? void 0 : a.length) > 0 &&
                  (null == (i = I.logger) ||
                    i.log({
                      et: "view",
                      ei: "packageBuy_component_view",
                      en: "组件曝光",
                      pt: "packagebuy",
                      params: {
                        act_id:
                          null == t || null == (s = t.activity) ? void 0 : s.id,
                        act_type: 7,
                        alg: t.alg,
                        buyer_id: l,
                        kdt_id: k,
                      },
                    }));
                var d = t.activity.price,
                  r = t.goodsList.length;
                g &&
                  (t.goodsList = t.goodsList.sort(
                    (t, e) => Number(e.major) - Number(t.major)
                  )),
                  (t.checked = 0 === e),
                  (t.savePrice = Object(c.a)(t.decrease).toYuan()),
                  t.goodsList.forEach((e, a) => {
                    var i = Object(S.f)(e.hasMultiSkus, e.skus, e.totalStock),
                      s = Object(S.e)(
                        e.hasMultiSkus,
                        e.price,
                        e.skus,
                        e.totalStock
                      ),
                      n = "" + t.activity.id + e.id,
                      u = {
                        checked: !1,
                        collocationPrice: i.price,
                        bannerId:
                          "packagebuy." +
                          t.activity.id +
                          "~list~" +
                          a +
                          "~" +
                          j,
                        activityPrice:
                          i.priceInYuan || Object(c.a)(d / r).toYuan(),
                        thumbUrl: Object(o.a)(e.thumbUrl, "!large.webp"),
                        originPrice: s.originPrice,
                        price: s.price,
                        currentSkuId: e.hasMultiSkus ? null : e.skus[0].id,
                        num: e.collocationNum || 1,
                        desc: Object(S.c)(
                          e.hasMultiSkus,
                          g,
                          e.messageGoods,
                          e.num
                        ),
                      };
                    Object.assign(e, u),
                      e.requiredMessage && this.needMessageList.push(n),
                      (e = Object(S.g)(e, { isMatchPackage: g }));
                  });
              }),
              g
                ? ((e = d[0]),
                  (s.goodsList = d.slice(1)),
                  (s.decrease = e.price - e.collocationPrice),
                  (r.price = e.collocationPrice),
                  i.push(String(e.id)),
                  (a = this.generatePayGoodsList(r, [e])))
                : (i.push(r.idAlias), (a = this.generatePayGoodsList(r, d))),
              I.trigger("umpActivity:loaded", r.id, {
                act_type: "7",
                act_id: r.id,
              }),
              {
                isStart: u,
                packages: t,
                mainGoods: e,
                pageTitle: h,
                checkedList: i,
                payGoodsList: a,
                isMatchPackage: g,
                packagePrice: r.price,
              }
            );
          },
          isStart(t) {
            var e = 1e3 * t.startAt || 0;
            return new Date(Date.now()).getTime() > e;
          },
          handleSelectPackage(t) {
            var { activity: e, goodsList: a } = t,
              i = this.isStart(e),
              { packages: s } = this.data,
              c = this.generatePayGoodsList(e, a);
            s.forEach((t) => {
              t.checked = t.activity.id === e.id;
            }),
              this.setYZData({
                isStart: i,
                payGoodsList: c,
                packagePrice: e.price,
                checkedList: [e.idAlias],
                currentPackage: t,
                packages: s,
              });
          },
          togglePackage(t) {
            var { currentPackage: e } = t.currentTarget.dataset;
            this.handleSelectPackage(e);
          },
          handleSelectGoods(t, e) {
            if (t.totalStock) {
              if (!e) this.selectComponent(".checkboxes-" + t.id).toggle();
              var { checkedList: a, packages: i, payGoodsList: s } = this.data,
                { activity: c = {} } = i[0],
                o = String(t.id);
              if (a.indexOf(o) > -1) {
                if (!s.some((e) => e.goodsId === t.id)) {
                  var d = this.generatePayGoodsList(c, [t], s);
                  this.setYZData({ payGoodsList: d });
                }
                this.setYZData({
                  ["packages[0].goodsList[" + this.goodsIndex + "].checked"]:
                    !0,
                });
              } else
                this.setYZData({
                  payGoodsList: s.filter((e) => e.goodsId !== t.id),
                  ["packages[0].goodsList[" + this.goodsIndex + "].checked"]:
                    !1,
                });
            }
          },
          toogleShowSku(t, e) {
            (this.packageIndex = 0),
              (this.isToggleGoodsSku = !0),
              this.generateSkuData(t, e).then((e) => {
                this.setYZData({
                  skuData: e,
                  showSku: !0,
                  "skuExtraData.originPrice": t.originPrice,
                  "skuExtraData.activityPrice": t.activityPrice,
                });
              });
          },
          toggleGoods(t) {
            var { goods: e, activity: a, index: i } = t.currentTarget.dataset;
            this.data.isMatchPackage &&
              ((this.goodsIndex = i),
              (this.currentGoods = e),
              !e.hasMultiSkus || e.currentSkuId
                ? this.handleSelectGoods(e)
                : this.toogleShowSku(e, a.id));
          },
          fetchActivity() {
            var { goodsId: t, activityAlias: e } = this.data;
            return t ? Object(m.b)(t) : Object(m.a)(e);
          },
          handleShowSku(t) {
            var { detail: e } = t,
              { packageIndex: a, goodsIndex: i } = e,
              { packages: s, mainGoods: c, isMatchPackage: o } = this.data,
              d = i > -1 ? s[a].goodsList[i] : c,
              r = i > -1 ? s[a].activity : s[0].activity;
            (this.packageIndex = a),
              (this.goodsIndex = i),
              (this.currentGoods = d),
              (this.isToggleGoodsSku = !1),
              this.generateSkuData(d, r.id).then((t) => {
                var e = Object(S.f)(d.hasMultiSkus, d.skus, o),
                  a = Object(S.e)(d.hasMultiSkus, d.price, d.skus);
                this.setYZData({
                  skuData: t,
                  showSku: !0,
                  "skuExtraData.originPrice": a.originPrice,
                  "skuExtraData.activityPrice": e.priceInYuan,
                });
              });
          },
          handleCloseSku() {
            this.setYZData({ showSku: !1 });
          },
          generateSkuData(t, e) {
            var { id: a, alias: i, title: s, thumbUrl: c, hasMultiSkus: o } = t,
              d = "" + e + a;
            if (this.goodsSkus[d]) return Promise.resolve(this.goodsSkus[d]);
            var r = { activityId: e, goodsId: a },
              g = { id: a, alias: i, title: s, picture: c };
            return Object(m.c)(r)
              .then(
                (t) => (
                  (t = Object(l.a)(t)).list &&
                    Array.isArray(t.list) &&
                    t.list.forEach((t) => {
                      t.price = t.priceInFen;
                    }),
                  (t.noneSku = !o),
                  (this.goodsSkus[d] = { goods: g, sku: t }),
                  Promise.resolve({ goods: g, sku: t })
                )
              )
              .catch((t) => {
                wx.showToast({
                  title: t.msg || "sku信息获取失败，请重试",
                  icon: "none",
                });
              });
          },
          onSkuSelected(t) {
            var { selectedSkuComb: e } = t.detail;
            if (e && e.id) {
              var { skus: a } = this.currentGoods,
                i = Object(S.b)(a, e.id);
              this.setYZData({
                "skuExtraData.activityPrice": i.activityPrice,
                "skuExtraData.originPrice": i.originPrice,
              });
            }
          },
          getNewPayGoodsList(t, e, a, s) {
            var { payGoodsList: c, isMatchPackage: o } = this.data,
              d = c.some((e) => e.goodsId === t.id),
              r = c.slice(0);
            return (
              !d && o && (r = this.generatePayGoodsList(e, [t], r)),
              (r = r.map(
                (c) => (
                  c.goodsId === a &&
                    c.activityId === e.id &&
                    ((c.collocationPrice = t.collocationPrice),
                    (c.skuId = t.currentSkuId),
                    (c.price = t.price),
                    (c.num = t.num),
                    Object.assign(c, Object(i.a)({}, s))),
                  c
                )
              ))
            );
          },
          setPackagePrice(t) {
            t.forEach((t) => {
              var e = 0;
              t.goodsList.forEach((t) => {
                e += t.price * t.num;
              });
              var a = e - t.activity.price;
              t.savePrice = Object(c.a)(a).toYuan();
            });
          },
          handlePickSkuFinish(t) {
            var { detail: e } = t,
              {
                selectedSkuComb: a,
                selectedNum: i,
                goodsId: s,
                selectedSkuValues: o,
                messages: d = {},
              } = e,
              { packages: r, mainGoods: g, isMatchPackage: n } = this.data,
              u = r[this.packageIndex],
              h = u.activity,
              l = this.goodsIndex > -1 ? u.goodsList[this.goodsIndex] : g;
            if (
              a &&
              a.id &&
              ((l.currentSkuId = a.id),
              (l.price = a.price),
              (l.originPrice = Object(c.a)(a.price).toYuan()),
              n)
            ) {
              var k = Object(S.b)(l.skus, a.id);
              Object.assign(l, k);
            }
            if (
              (n &&
                i &&
                ((l.num = i),
                (l.desc = Object(S.c)(l.hasMultiSkus, n, l.messageGoods, i))),
              o && o.length && (l.desc = o.join("，")),
              l.messageGoods && Object.keys(d).length)
            ) {
              var p = "" + u.activity.id + l.id;
              !l.hasMultiSkus && (l.desc = "已添加商品留言");
              var v = null;
              this.needMessageList.forEach((t, e) => {
                t === p && (v = e);
              }),
                this.needMessageList.splice(v, 1);
            }
            var y = this.getNewPayGoodsList(l, h, s, d);
            this.goodsIndex > -1
              ? (this.setPackagePrice(r),
                this.setYZData(
                  { showSku: !1, packages: r, payGoodsList: y },
                  () => {
                    var { checkedList: t } = this.data;
                    n &&
                      -1 === t.indexOf(String(l.id)) &&
                      this.handleSelectGoods(l);
                  }
                ))
              : this.setYZData({ showSku: !1, payGoodsList: y, mainGoods: l });
          },
          noop(t) {
            var { goods: e, index: a, activity: i } = t.currentTarget.dataset;
            (this.packageIndex = 0),
              (this.goodsIndex = a),
              (this.currentGoods = e),
              e.hasMultiSkus && !e.currentSkuId && this.toogleShowSku(e, i.id),
              this.handleSelectGoods(e, 1);
          },
          packageNoop(t) {
            var { currentPackage: e } = t.currentTarget.dataset;
            this.handleSelectPackage(e);
          },
          onCheckedListChange(t) {
            if (!(this.data.packages.length > 1)) {
              var e = t.detail;
              this.setYZData({ checkedList: e });
            }
          },
          goPay() {
            var t = this.data.payGoodsList,
              e = Object(S.h)(
                t,
                this.data.isMatchPackage,
                this.needMessageList
              );
            if (e) return Object(u.a)(e);
            var a = I.getKdtId(),
              { activityAlias: i, activityId: s } = t[0],
              c = {
                kdtId: a,
                activityAlias: i,
                activityId: s,
                activityType: 7,
              },
              o = Object(S.d)(t);
            Object(v.b)(y.a.PackageBuy, y.b.PackageBuy, o),
              Object(k.c)({ goodsList: t, extraData: c });
          },
          handleGoHomePage() {
            p.a.switchTab({ url: "/packages/home/dashboard/index" });
          },
        });
      },
    }
  )
);
