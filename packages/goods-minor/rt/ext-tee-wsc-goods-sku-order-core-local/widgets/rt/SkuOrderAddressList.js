"use strict";
var r = require("~/r");
r(
  "Mbre",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    ADTe: function (e, t, s) {
      s.d(t, "a", function () {
        return d;
      });
      var r = [
        "country",
        "province",
        "city",
        "county",
        "community",
        "addressDetail",
        "address_detail",
        "houseNumber",
      ];
      function d(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          s =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : r.length,
          d =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
          i = r.slice(t, s);
        return (
          e[i[1]] && e[i[1]] === e[i[2]] && i.splice(1, 1),
          "中国" === e[i[0]] && i.shift(),
          i
            .filter(function (t) {
              return e[t];
            })
            .map(function (t) {
              return e[t];
            })
            .join(d)
        );
      }
    },
    Jcb6: function (e, t, s) {
      function r(e) {
        e = e.trim();
        var t = /^((\+86)|(86))?(1)\d{10}$/.test(e),
          s = /^0[0-9\-]{10,13}$/.test(e),
          r = /^((\+852)|(852))?(5|6|8|9)\d{7}$/.test(e),
          d = /^((\+886)|(886)|(0))?9\d{2}-?\d{3}-?\d{3}$/.test(e);
        return t || s || r || d;
      }
      function d(e) {
        return e && e.areaCode && "9" === e.areaCode[0];
      }
      function i(e, t) {
        return d(e) ? t && t.length <= 20 : r(t);
      }
      function a(e, t, s) {
        var r,
          d = String(e[t] || "").trim();
        switch (t) {
          case "userName":
            return d && d.length > 15
              ? "收货姓名不能超过 15 个字"
              : d
              ? ""
              : "请填写姓名";
          case "tel":
            return i(e, d) ? "" : "请填写正确的电话";
          case "areaCode":
            return ((null != e &&
              null !== (r = e.county) &&
              void 0 !== r &&
              r.length) ||
              "9" === d[0]) &&
              d
              ? ""
              : "请补全所在地区信息";
          case "addressDetail":
            return d ? "" : "请填写详细地址";
          case "postalCode":
            return d && !/^\d{6}$/.test(d) ? "邮政编码格式不正确" : "";
          case "houseNumber":
            return null != s && s.houseNumber ? (d ? "" : "请填写门牌号") : "";
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
          r = { errorInfo: {}, msg: "" },
          d = s.every(function (s) {
            var d = a(e, s, t);
            return d && ((r.errorInfo[s] = !0), (r.msg = d)), !d;
          });
        return { isValid: d, error: r };
      }
      s.d(t, "b", function () {
        return r;
      }),
        s.d(t, "a", function () {
          return d;
        }),
        s.d(t, "c", function () {
          return i;
        }),
        s.d(t, "d", function () {
          return n;
        });
    },
    Mbre: function (e, t, s) {
      s.r(t);
      var r = s("Fcif"),
        d = s("AGZf"),
        i = s("ADTe"),
        a = s("RyxV"),
        n = s("YeA1"),
        c = (s("2bgu"), s("Jcb6")),
        o = s("Sipi"),
        u = s("VmHG"),
        l = {
          data: () => ({
            address: { list: [], activeList: [], inactiveList: [] },
            currentAddress: {},
            forcePoiSelect: !1,
            themeColors: {},
            switchable: !0,
            isRetailOrderScene: !1,
            kdtId: null,
            selfFetch: {},
            distribution: {},
            wechatAuthed: !1,
          }),
          computed: {
            formattedActiveList() {
              var { list: e = [], activeList: t = [] } = this.address || {};
              return this.useInactiveList
                ? t.map((e) =>
                    Object(r.a)({}, e, {
                      name: e.userName,
                      address: Object(i.a)(e),
                    })
                  )
                : e.map((e) =>
                    Object(r.a)({}, e, {
                      name: e.userName,
                      address: Object(i.a)(e),
                    })
                  );
            },
            formattedInactiveList() {
              var { inactiveList: e = [] } = this.address || {};
              return this.useInactiveList
                ? e.map((e) =>
                    Object(r.a)({}, e, {
                      name: e.userName,
                      address: Object(i.a)(e),
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
              return this.address.id;
            },
          },
          created() {
            Object(n.b)(
              this,
              [
                "themeColors",
                "address",
                "forcePoiSelect",
                "kdtId",
                "themeTag",
                "selfFetch",
                "distribution",
              ],
              { isActiveWhenBack: !0 }
            ),
              Object(u.b)(this, [
                "onAddressAdd",
                "onAddressCardEdit",
                "handleChangeExpressTab",
                "handleSelectLocalAddress",
              ]);
          },
          methods: {
            onClose() {
              this.$emit("close");
            },
            logEditAddress(e) {
              this.ctx.logger.log({
                et: "click",
                ei: "edit_address",
                en: "编辑地址",
                params: e,
                si: this.ctx.data.kdtId,
              });
            },
            logClickAddress() {
              this.ctx.logger.log({
                et: "click",
                ei: "click_address",
                en: "新增地址",
                si: this.ctx.data.kdtId,
              });
            },
            logKeepAddress(e) {
              this.ctx.logger.log({
                et: "custom",
                ei: "keep_address",
                en: "保存并使用",
                params: e,
                si: this.ctx.data.kdtId,
              });
            },
            onAdd() {
              this.onAddressAdd();
            },
            onEdit(e) {
              void 0 === e && (e = {}), this.onAddressCardEdit(e.id);
            },
            onSelect(e, t) {
              if (t.id !== this.address.id) {
                this.handleSelectLocalAddress(t.id),
                  this.ctx.process.invoke("selectAddress", t.id),
                  this.handleChangeExpressTab(0),
                  this.ctx.logger.log({
                    et: "custom",
                    ei: "trade_buy_set_address",
                    en: "切换收货地址",
                    pt: "trade",
                    params: { desc: JSON.stringify(t) },
                  });
                var { supportExpress: s, supportLocalDelivery: r } =
                    this.distribution || {},
                  { shop: d } = this.selfFetch || {};
                (d && d.id && s && r) || this.onClose();
              }
            },
            handleInvalidAddress(e) {
              Object(o.d)("WECHAT_INVALID_ADDRESS", JSON.stringify(e)),
                this.onClose(),
                setTimeout(() => {
                  this.onEdit();
                }, 1500);
            },
            onPlatformAddressSave(e, t) {
              return Object(c.c)(e, e.tel)
                ? e.areaCode
                  ? (d.a.loading(),
                    void Object(a.a)(e)
                      .then((s) => {
                        d.a.clear();
                        var i = e.id || s.value || s,
                          a = Object(r.a)({}, e, { id: i });
                        this.logKeepAddress(a),
                          this.ctx.lambdas.triggerEvent("address-save", a),
                          this.handleChangeExpressTab(0),
                          this.onClose(),
                          "function" == typeof t && t();
                      })
                      .catch(function (e) {
                        void 0 === e && (e = {}), d.a.clear();
                      }))
                  : (Object(d.a)("当前地址不完整，请重新选择地区"),
                    void this.handleInvalidAddress(e))
                : (Object(d.a)("请填写正确的手机号"),
                  void this.handleInvalidAddress(e));
            },
          },
          ud: !0,
        },
        h = s("9ZMt");
      t.default = h.default.component(l);
    },
    RyxV: function (e, t, s) {
      s.d(t, "a", function () {
        return i;
      });
      var r = s("US/N"),
        d = s("Uol7");
      function i(e) {
        var t = e.id ? "update" : "add";
        return Object(r.requestV2)({
          method: "POST",
          path: "/wsctrade/uic/address/".concat(t, "Address.json"),
          data: e,
          config: d.a,
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
        return r;
      });
      var r = { skipKdtId: !0, skipShopInfo: !0 };
    },
  })
);
