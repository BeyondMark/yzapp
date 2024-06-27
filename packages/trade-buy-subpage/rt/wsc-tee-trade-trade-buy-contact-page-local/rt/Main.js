"use strict";
var r = require("~/r");
r(
  "EPiK",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      EPiK: function (e, t, r) {
        r.r(t);
        var a = r("eijD"),
          i = r("Fcif"),
          n = r("9ZMt"),
          s = r("Crmo"),
          o = r("AGZf"),
          l = r("z9IR"),
          c = r("R2NP"),
          h = r("YeA1"),
          u = r("lgMb"),
          d = r("kDYA"),
          m = r("Jcb6"),
          b = "hidden_phone",
          g = "normal";
        var f = {
          data: () => ({
            item: {},
            errorInfo: {},
            isSaving: !1,
            isDeleting: !1,
            theme: s.a,
            textRule: g,
            themeColors: {},
            isRetailOrderScene: 0,
            retailPhone: "",
            prevTitle: "",
            themeVars: "",
            kdtId: "",
            phonePlaceholder: 0,
            btnCustomStyle:
              "color:var(--main-text, #fff); background:var(--main-bg, #323233); border:1px soild var(--main-bg, #323233);",
          }),
          computed: {
            textInfo() {
              var e = {
                contactLabel: "联系人",
                phoneLabel: "手机号码",
                phonePlaceholder: "请填写联系人手机号",
                userNamePlaceholder: "请填写联系人姓名",
                setDefaultTitle: "设为默认联系人",
              };
              return this.textRule !== b || this.isRetailOrderScene
                ? e
                : Object(i.a)({}, e, {
                    contactLabel: "提货人",
                    phoneLabel: "提货码",
                    phonePlaceholder:
                      this.phonePlaceholder || "请填写提货码，可输入手机号",
                    userNamePlaceholder: "请填写提货人姓名",
                    setDefaultTitle: "设为默认提货人",
                  });
            },
          },
          created() {
            Object(h.b)(this, ["themeColors", "themeVars", "kdtId"]),
              Object(d.b)().then((e) => {
                var t;
                null != e &&
                  null != (t = e.kdtId) &&
                  t.includes(parseInt(this.kdtId, 10)) &&
                  (this.phonePlaceholder = e.text);
              });
          },
          beforeMount() {
            var e,
              { isRetailOrderScene: t = 0, retailPhone: r = "" } =
                this.$getPageQuery(),
              a = this.$getPageQuery() || {},
              n =
                (null == (e = this.ctx.lambdas) || null == e.getHashQuery
                  ? void 0
                  : e.getHashQuery()) || {},
              s = a.contactStr || n.contactStr || "{}",
              o = a.textRule || n.textRule || g,
              l = {};
            try {
              var h = decodeURIComponent(s);
              l = JSON.parse(h);
            } catch (e) {}
            (this.textRule = o),
              (this.isRetailOrderScene = +t),
              (this.retailPhone = r),
              (this.item = Object(i.a)({}, l, {
                isDefault: Boolean(l.isDefault) || !1,
              })),
              Object(c.b)(
                l.id
                  ? "编辑" + this.textInfo.contactLabel
                  : "添加" + this.textInfo.contactLabel
              );
          },
          mounted() {},
          destroyed() {},
          methods: {
            onInputName(e) {
              this.item = Object(i.a)({}, this.item, { userName: e.value });
            },
            onInputTel(e) {
              this.item = Object(i.a)({}, this.item, { telephone: e.value });
            },
            getPhone(e) {
              this.item = Object(i.a)({}, this.item, { telephone: e });
            },
            onChangeDefault(e) {
              this.item.isDefault = e;
            },
            onNameFocus() {
              this.errorInfo.userName = "";
            },
            onPhoneFocus() {
              this.errorInfo.telephone = "";
            },
            onClearName() {
              this.item.userName = "";
            },
            onClearTel() {
              this.item.telephone = "";
            },
            onSave() {
              this.isSaving ||
                (["userName", "telephone"].every((e) => {
                  var t = this.getErrorMessageByKey(e);
                  return (
                    t &&
                      ((this.errorInfo = Object(i.a)({}, this.errorInfo, {
                        [e]: t,
                      })),
                      Object(o.a)(t)),
                    !t
                  );
                }) &&
                  ((this.isSaving = !0),
                  this.SAVE_CONTACT(
                    Object(i.a)({}, this.item, {
                      isDefault: +this.item.isDefault,
                    })
                  )
                    .then(() => {
                      (this.isSaving = !1), this.navigateBack();
                    })
                    .catch(() => {
                      this.isSaving = !1;
                    })));
            },
            getErrorMessageByKey(e) {
              var t = this.item[e];
              switch (((t = String(null == t ? "" : t).trim()), e)) {
                case "userName":
                  return t ? "" : "请输入正确的姓名";
                case "telephone":
                  if (this.textRule !== b || this.isRetailOrderScene)
                    return Object(m.b)(t) ? "" : "请输入正确的手机号";
                  return /^\d+$/.test(t)
                    ? t.length > 11
                      ? "提货码最长不超过11位"
                      : ""
                    : "请填写提货码";
                default:
                  return "";
              }
            },
            SAVE_CONTACT(e) {
              var t = e.id ? "update" : "add";
              return Object(d.c)(e)
                .then(
                  (r) => (
                    o.a.clear(),
                    this.ctx.lambdas.triggerEvent("set_contact", {
                      method: t,
                      contact: Object(i.a)({}, e, { id: e.id || r }),
                    }),
                    setTimeout(() => {
                      Object(o.a)(
                        "add" === t
                          ? this.textInfo.contactLabel + "添加成功"
                          : this.textInfo.contactLabel + "编辑成功"
                      );
                    }),
                    r
                  )
                )
                .catch((e) => {
                  throw (
                    (o.a.clear(),
                    Object(u.b)(e, { message: "联系人保存失败，请稍后重试" }),
                    e)
                  );
                });
            },
            DELETE_CONTACT: (e) =>
              Object(d.a)(e).catch((e) => {
                throw (
                  (Object(u.b)(e, { message: "联系人删除失败，请稍后重试" }), e)
                );
              }),
            onDelete() {
              var e = this;
              this.isDeleting ||
                ((this.isDeleting = !0),
                l.a
                  .confirm({
                    title: "确定要删除吗",
                    confirmButtonColor: this.themeColors.general,
                  })
                  .then(
                    Object(a.a)(function* () {
                      var t = e.item.id;
                      yield e.DELETE_CONTACT(t),
                        e.ctx.lambdas.triggerEvent("delete_contact", t),
                        (e.isDeleting = !1),
                        e.navigateBack();
                    })
                  )
                  .catch(() => {
                    this.isDeleting = !1;
                  }));
            },
            navigateBack() {
              n.default.navigateBack();
            },
          },
          ud: !0,
        };
        t.default = n.default.component(f);
      },
      Jcb6: function (e, t, r) {
        function a(e) {
          e = e.trim();
          var t = /^((\+86)|(86))?(1)\d{10}$/.test(e),
            r = /^0[0-9\-]{10,13}$/.test(e),
            a = /^((\+852)|(852))?(5|6|8|9)\d{7}$/.test(e),
            i = /^((\+886)|(886)|(0))?9\d{2}-?\d{3}-?\d{3}$/.test(e);
          return t || r || a || i;
        }
        function i(e) {
          return e && e.areaCode && "9" === e.areaCode[0];
        }
        function n(e, t) {
          return i(e) ? t && t.length <= 20 : a(t);
        }
        function s(e, t, r) {
          var a,
            i = String(e[t] || "").trim();
          switch (t) {
            case "userName":
              return i && i.length > 15
                ? "收货姓名不能超过 15 个字"
                : i
                ? ""
                : "请填写姓名";
            case "tel":
              return n(e, i) ? "" : "请填写正确的电话";
            case "areaCode":
              return ((null != e &&
                null !== (a = e.county) &&
                void 0 !== a &&
                a.length) ||
                "9" === i[0]) &&
                i
                ? ""
                : "请补全所在地区信息";
            case "addressDetail":
              return i ? "" : "请填写详细地址";
            case "postalCode":
              return i && !/^\d{6}$/.test(i) ? "邮政编码格式不正确" : "";
            case "houseNumber":
              return null != r && r.houseNumber
                ? i
                  ? ""
                  : "请填写门牌号"
                : "";
            default:
              return "";
          }
        }
        function o(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [
                    "userName",
                    "tel",
                    "areaCode",
                    "addressDetail",
                    "houseNumber",
                  ],
            a = { errorInfo: {}, msg: "" },
            i = r.every(function (r) {
              var i = s(e, r, t);
              return i && ((a.errorInfo[r] = !0), (a.msg = i)), !i;
            });
          return { isValid: i, error: a };
        }
        r.d(t, "b", function () {
          return a;
        }),
          r.d(t, "a", function () {
            return i;
          }),
          r.d(t, "c", function () {
            return n;
          }),
          r.d(t, "d", function () {
            return o;
          });
      },
    }
  )
);
