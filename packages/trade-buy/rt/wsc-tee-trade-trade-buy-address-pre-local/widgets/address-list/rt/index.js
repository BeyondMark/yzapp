"use strict";
var r = require("~/r");
r(
  "mb0w",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    ADTe: function (e, t, s) {
      s.d(t, "a", function () {
        return r;
      });
      var i = [
        "country",
        "province",
        "city",
        "county",
        "community",
        "addressDetail",
        "address_detail",
        "houseNumber",
      ];
      function r(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          s =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : i.length,
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
          d = i.slice(t, s);
        return (
          e[d[1]] && e[d[1]] === e[d[2]] && d.splice(1, 1),
          "中国" === e[d[0]] && d.shift(),
          d
            .filter(function (t) {
              return e[t];
            })
            .map(function (t) {
              return e[t];
            })
            .join(r)
        );
      }
    },
    Jcb6: function (e, t, s) {
      function i(e) {
        e = e.trim();
        var t = /^((\+86)|(86))?(1)\d{10}$/.test(e),
          s = /^0[0-9\-]{10,13}$/.test(e),
          i = /^((\+852)|(852))?(5|6|8|9)\d{7}$/.test(e),
          r = /^((\+886)|(886)|(0))?9\d{2}-?\d{3}-?\d{3}$/.test(e);
        return t || s || i || r;
      }
      function r(e) {
        return e && e.areaCode && "9" === e.areaCode[0];
      }
      function d(e, t) {
        return r(e) ? t && t.length <= 20 : i(t);
      }
      function a(e, t, s) {
        var i,
          r = String(e[t] || "").trim();
        switch (t) {
          case "userName":
            return r && r.length > 15
              ? "收货姓名不能超过 15 个字"
              : r
              ? ""
              : "请填写姓名";
          case "tel":
            return d(e, r) ? "" : "请填写正确的电话";
          case "areaCode":
            return ((null != e &&
              null !== (i = e.county) &&
              void 0 !== i &&
              i.length) ||
              "9" === r[0]) &&
              r
              ? ""
              : "请补全所在地区信息";
          case "addressDetail":
            return r ? "" : "请填写详细地址";
          case "postalCode":
            return r && !/^\d{6}$/.test(r) ? "邮政编码格式不正确" : "";
          case "houseNumber":
            return null != s && s.houseNumber ? (r ? "" : "请填写门牌号") : "";
          default:
            return "";
        }
      }
      function n(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          s =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : ["userName", "tel", "areaCode", "addressDetail", "houseNumber"],
          i = { errorInfo: {}, msg: "" },
          r = s.every(function (s) {
            var r = a(e, s, t);
            return r && ((i.errorInfo[s] = !0), (i.msg = r)), !r;
          });
        return { isValid: r, error: i };
      }
      s.d(t, "b", function () {
        return i;
      }),
        s.d(t, "a", function () {
          return r;
        }),
        s.d(t, "c", function () {
          return d;
        }),
        s.d(t, "d", function () {
          return n;
        });
    },
    RyxV: function (e, t, s) {
      s.d(t, "a", function () {
        return d;
      });
      var i = s("US/N"),
        r = s("Uol7");
      function d(e) {
        var t = e.id ? "update" : "add";
        return Object(i.requestV2)({
          method: "POST",
          path: "/wsctrade/uic/address/".concat(t, "Address.json"),
          data: e,
          config: r.a,
          withCredentials: !0,
        })
          .then(function (e) {
            return e;
          })
          .catch(function (e) {
            throw ((e.msg = e.msg || "地址保存失败"), e);
          });
      }
    },
    Uol7: function (e, t, s) {
      s.d(t, "a", function () {
        return i;
      });
      var i = { skipKdtId: !0, skipShopInfo: !0 };
    },
    mb0w: function (e, t, s) {
      s.r(t);
      var i = s("Fcif"),
        r = s("9ZMt"),
        d = s("AGZf"),
        a = s("ADTe"),
        n = s("RyxV"),
        o = s("YeA1"),
        c = (s("2bgu"), s("Jcb6")),
        u = s("Sipi"),
        l = {
          props: {
            show: { type: Boolean, default: !1 },
            customEventHandler: {
              type: Object,
              default: () => ({ select: !1, edit: !1, add: !1 }),
            },
            addText: { type: String, default: "新增地址" },
            title: { type: String, default: "选择收货地址" },
            customStyle: String,
            overlayStyle: String,
          },
          data: () => ({
            address: { list: [], activeList: [], inactiveList: [] },
            currentAddress: {},
            forcePoiSelect: !1,
            postage: {},
            themeColors: {},
            switchable: !0,
            isRetailOrderScene: !1,
            kdtId: null,
            wechatAuthed: !1,
            aliAuthed: !1,
            isXhsWebview: !1,
            isShowRetailDeliveryAddress: !1,
            isShowForcePoiSelectAddress: !1,
            isHouseNumberRequired: !1,
          }),
          computed: {
            formattedActiveList() {
              var { list: e = [], activeList: t = [] } = this.address || {};
              return this.useInactiveList
                ? t.map((e) =>
                    Object(i.a)({}, e, {
                      name: e.userName,
                      address: Object(a.a)(e),
                    })
                  )
                : e.map((e) =>
                    Object(i.a)({}, e, {
                      name: e.userName,
                      address: Object(a.a)(e),
                    })
                  );
            },
            formattedInactiveList() {
              var { inactiveList: e = [] } = this.address || {};
              return this.useInactiveList
                ? e.map((e) =>
                    Object(i.a)({}, e, {
                      name: e.userName,
                      address: Object(a.a)(e),
                    })
                  )
                : [];
            },
            useInactiveList() {
              var { activeList: e = [], inactiveList: t = [] } =
                this.address || {};
              return e.length > 0 || t.length > 0;
            },
            addressId() {
              return this.currentAddress.id || this.address.id;
            },
            isCityForcePoiSelect() {
              var e;
              return (
                2 ===
                  (null == (e = this.postage)
                    ? void 0
                    : e.currentExpressType) && this.forcePoiSelect
              );
            },
          },
          created() {
            Object(o.b)(
              this,
              [
                "themeColors",
                "address",
                "currentAddress",
                "forcePoiSelect",
                "kdtId",
                "isShowRetailDeliveryAddress",
                "isShowForcePoiSelectAddress",
                "retailHouseNumberRequired",
                "isHouseNumberRequired",
                "postage",
              ],
              { isActiveWhenBack: !0 }
            );
          },
          methods: {
            onClose() {
              this.$emit("close");
            },
            logger(e) {
              this.ctx.logger && this.ctx.logger.log(e);
            },
            logEditAddress(e) {
              this.logger({
                et: "click",
                ei: "edit_address",
                en: "编辑地址",
                params: e,
                si: this.ctx.data.kdtId,
              });
            },
            logClickAddress() {
              this.logger({
                et: "click",
                ei: "click_address",
                en: "新增地址",
                si: this.ctx.data.kdtId,
              });
            },
            logKeepAddress(e) {
              this.logger({
                et: "custom",
                ei: "keep_address",
                en: "保存并使用",
                params: e,
                si: this.ctx.data.kdtId,
              });
            },
            onEdit(e) {
              var t;
              void 0 === e && (e = {});
              var { edit: s, add: i } = this.customEventHandler;
              if (null != (t = e) && t.id && s) return this.$emit("edit", e);
              if (i) return this.$emit("add");
              var d = e.id || null,
                a = this.ctx.lambdas.setDb({
                  id: d,
                  list: [
                    ...this.formattedActiveList,
                    ...this.formattedInactiveList,
                  ],
                  forcePoiSelect: this.forcePoiSelect,
                  delta: 1,
                });
              null == d
                ? this.logClickAddress()
                : this.logEditAddress({ id: d });
              var n =
                  this.isShowRetailDeliveryAddress ||
                  this.isShowForcePoiSelectAddress,
                { isHouseNumberRequired: o, isCityForcePoiSelect: c } = this,
                u =
                  "/packages/trade-buy-subpage/order/address-edit/index?" +
                  ("dbid=" +
                    a +
                    "&isShowRetailDeliveryAddress=" +
                    n +
                    "&houseNumberRequired=" +
                    o +
                    "&isCityForcePoiSelect=" +
                    Number(c));
              r.default.navigate({ url: u, type: "navigateTo" }),
                this.$emit("close");
            },
            onSelect(e, t) {
              var { select: s } = this.customEventHandler;
              if (s) return this.$emit("select", t);
              t.id !== this.address.id &&
                (this.ctx.process.invoke("selectAddress", t.id),
                this.onClose(),
                this.logger({
                  et: "custom",
                  ei: "trade_buy_set_address",
                  en: "切换收货地址",
                  pt: "trade",
                  params: { desc: JSON.stringify(t) },
                }));
            },
            handleInvalidAddress(e) {
              Object(u.d)("WECHAT_INVALID_ADDRESS", JSON.stringify(e)),
                this.onClose(),
                setTimeout(() => {
                  this.onEdit();
                }, 1500);
            },
            onPlatformAddressSave(e, t) {
              return Object(c.c)(e, e.tel)
                ? e.areaCode &&
                  e.province &&
                  e.city &&
                  e.county &&
                  (Object(c.a)(e) || (e.lat && e.lon))
                  ? (d.a.loading(),
                    void Object(n.a)(e)
                      .then((s) => {
                        d.a.clear();
                        var r = e.id || s.value || s,
                          a = Object(i.a)({}, e, { id: r });
                        this.logKeepAddress(a),
                          this.ctx.lambdas.triggerEvent("address-save", a),
                          this.ctx.process.invoke("updateAddressState", a),
                          this.onClose(),
                          "function" == typeof t && t();
                      })
                      .catch(function (e) {
                        void 0 === e && (e = {}), d.a.clear();
                      }))
                  : (Object(d.a)("当前地址不完整，请重新选择地址"),
                    void this.handleInvalidAddress(e))
                : (Object(d.a)("请填写正确的手机号"),
                  void this.handleInvalidAddress(e));
            },
          },
          ud: !0,
        };
      t.default = r.default.component(l);
    },
  })
);
