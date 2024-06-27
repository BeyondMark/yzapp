"use strict";
var r = require("~/r");
r(
  "yq9z",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      yq9z: function (e, t, a) {
        a.r(t);
        var i = a("+I+c"),
          r = a("Fcif"),
          s = a("9ZMt"),
          d = a("AGZf"),
          l = a("EqB2"),
          m = a("SdHk"),
          u = a("824m"),
          n = a("3GW2"),
          h = ["id", "value"],
          c = {
            mixins: [Object(l.a)({ optDesc: m.a })],
            props: {
              kdtId: Number,
              featureAlias: { type: String, default: "" },
              isHomePage: { type: Boolean, default: !1 },
              userId: { type: String, default: "" },
              themeColors: { type: Object, default: () => ({}) },
            },
            data: () => ({
              isSubmit: !1,
              formData: {},
              relatedFieldsEffect: {},
              oldFilterIdArray: [],
              queryDTO: {},
              hasChangedOptions: !1,
              list: [],
            }),
            computed: {
              headerOpt() {
                var { cover: e, title: t, description: a } = this.opt;
                return { cover: e, title: t, desc: a };
              },
              fieldStyle: () =>
                "flex: 0 0 " + s.default.style.useTpx(90) + "; color: #666;",
            },
            created() {
              var e = [],
                t = { excludeByAttribueKeyarray: [] },
                { list: a = [] } = this.opt;
              (this.list = a),
                a.forEach((a) => {
                  e.push(a.itemId),
                    0 !== a.itemTags.length &&
                      t.excludeByAttribueKeyarray.push(a.itemTags[0]);
                }),
                (this.oldFilterIdArray = e),
                (this.queryDTO = t),
                this.getStudentDataItems((e) => {
                  this.initFormValue(e);
                });
            },
            methods: {
              getStudentDataItems(e) {
                var { oldFilterIdArray: t, queryDTO: a } = this,
                  { list: i = [] } = this;
                return Object(n.b)({ itemIds: t, queryDTO: a })
                  .then((t) => {
                    var a = i.map((e) => {
                      var a = t.filter((t) => t.itemId === e.itemId)[0];
                      return a && (e = Object(r.a)({}, e, a)), e;
                    });
                    e(a);
                  })
                  .catch((e) => {
                    Object(d.a)(e);
                  });
              },
              initFormValue(e) {
                void 0 === e && (e = []);
                var t = e.findIndex((e) => "学员年龄" === e.itemName),
                  a = e.findIndex((e) => "学员生日" === e.itemName);
                t > -1 &&
                  a > -1 &&
                  ((e[t].placeholder = "选择生日后自动计算"),
                  (e[t].disabled = !0),
                  (this.relatedFieldsEffect[e[a].itemId] = (a) => {
                    this.birthToAge({ ageConfId: e[t].itemId, birthVal: a });
                  }));
                var i = {};
                e.forEach((e) => {
                  (e.placeholder = e.placeholder
                    ? e.placeholder
                    : Object(u.d)(
                        e.feRequired,
                        8 === e.itemType ? "select" : "text"
                      )),
                    (i[e.itemId] = { value: 8 === e.itemType ? [] : "" });
                }),
                  (this.list = [...e]),
                  (this.formData = i);
              },
              transformData() {
                var { featureAlias: e, formData: t, list: a } = this,
                  i = this.findItemIdByTag(u.a.name),
                  r = this.findItemIdByTag(u.a.mobile),
                  s = this.findAddrItem(),
                  d = this.findItemIdByTag(u.b.birth),
                  { captcha: l, smsStock: m } = t[r.itemId],
                  n = r.feNeedCaptcha && m > 0,
                  h = [];
                return (
                  Object.keys(t).forEach((e) => {
                    var i = Number(e),
                      r = t[e].value;
                    if (
                      Array.isArray(r) &&
                      s.findIndex((e) => e.itemId === i) > -1
                    ) {
                      var l = [...r],
                        m = t[e].address;
                      m && l.push({ code: "0", name: m }),
                        (r = JSON.stringify(l));
                    }
                    if (i === d.itemId) {
                      var u = new Date(r).valueOf();
                      r = Number.isNaN(u) ? r : String(u);
                    }
                    var n = a.find((t) => String(t.itemId) === e);
                    n && 8 === n.itemType && (r = r.join(",")),
                      h.push({ itemId: i, itemValue: r });
                  }),
                  {
                    featureAlias: e,
                    stuName: t[i.itemId].value,
                    stuTel: t[r.itemId].value,
                    smsCaptcha: l,
                    checkCaptcha: n,
                    regInfo: h,
                  }
                );
              },
              validateSingleAndMultipleOption(e) {
                var {
                  itemId: t,
                  itemType: a,
                  itemValue: i,
                  currentItemValue: r,
                  currentItemName: s,
                } = e;
                if (8 === a)
                  i.forEach((e) => {
                    if (!r.includes(e)) {
                      var i = {
                        duration: 2e3,
                        message: s + "的选项被修改，请重新选择",
                      };
                      Object(d.a)(i),
                        this.changeFormData({
                          id: t,
                          value: 8 === a ? [] : "",
                        }),
                        (this.hasChangedOptions = !0);
                    }
                  });
                else if (7 === a && !r.includes(i)) {
                  var l = {
                    duration: 2e3,
                    message: s + "的选项被修改，请重新选择",
                  };
                  Object(d.a)(l), (this.hasChangedOptions = !0);
                }
              },
              validate() {
                var e = !1,
                  t = "请正确填写表单后再提交",
                  { list: a } = this,
                  { formData: i } = this;
                return (
                  a.find((a) => {
                    var {
                      feRequired: r,
                      itemType: s,
                      itemId: d,
                      feItemCustomName: l,
                      feNeedCaptcha: m,
                    } = a;
                    if (
                      (!e &&
                        r &&
                        (i[d].value
                          ? 9 !== s || /^1\d{10}$/.test(i[d].value)
                            ? 9 === s && m && i[d].smsStock > 0 && !i[d].captcha
                              ? ((e = !0), (t = "请输入验证码"))
                              : 6 !== s || i[d].address
                              ? 5 !== s ||
                                i[d].value ||
                                ((e = !0), (t = "请上传图片"))
                              : ((e = !0), (t = "请输入详细地址"))
                            : ((e = !0), (t = l + "格式错误，请重新输入"))
                          : ((e = !0), (t = l + "是必填项"))),
                      !e && !r && 6 === s)
                    ) {
                      var { address: u, value: n } = i[d];
                      !((n && u) || (!n && !u)) &&
                        ((e = !0), (t = "地址格式错误"));
                    }
                    return e;
                  }),
                  e ? Promise.reject(t) : Promise.resolve()
                );
              },
              createRegis() {
                this.isSubmit = !0;
                var e = this.transformData(),
                  {
                    isHomePage: t,
                    userId: a,
                    kdtId: i,
                    opt: l,
                    featureAlias: m,
                  } = this;
                Object(n.a)(Object(r.a)({}, e, { userId: a, isHomepage: t }))
                  .then((e) => {
                    if (((this.isSubmit = !1), e)) {
                      this.initFormValue(this.list);
                      var t =
                        "https://h5.youzan.com/wscvis/edu/apply-result?kdt_id=" +
                        i +
                        "&id=" +
                        e +
                        "&featureAlias=" +
                        m;
                      "custom" === l.urlType &&
                        l.customUrl &&
                        l.customUrl.link_url &&
                        (t = l.customUrl.link_url);
                      var a =
                        "/packages/edu/webview/index?targetUrl=" +
                        encodeURIComponent(t);
                      s.default.navigate({ type: "navigateTo", url: a });
                    } else {
                      Object(d.a)({
                        duration: 5e3,
                        message: "报名失败，请重试",
                      });
                    }
                  })
                  .catch((e) => {
                    (this.isSubmit = !1),
                      Object(d.a)(e.msg || "报名失败，请重试");
                  });
              },
              submit() {
                this.validate()
                  .then(() => {
                    this.getStudentDataItems((e) => {
                      var { formData: t } = this;
                      (this.list = [...e]),
                        (this.hasChangedOptions = !1),
                        e.forEach((e) => {
                          var {
                            itemId: a,
                            itemName: i,
                            itemType: r,
                            hasChangedName: s,
                            itemValueList: d,
                            feItemCustomName: l,
                          } = e;
                          if (8 === r || 7 === r) {
                            var m = s ? l : i,
                              u = {
                                itemId: a,
                                itemType: r,
                                itemValue: t[a].value,
                                currentItemValue: d,
                                currentItemName: m,
                              };
                            this.validateSingleAndMultipleOption(u);
                          }
                        }),
                        this.hasChangedOptions || this.createRegis();
                    });
                  })
                  .catch((e) => {
                    Object(d.a)(e);
                  });
              },
              findItemIdByTag(e) {
                var { list: t } = this,
                  a = t.find((t) => {
                    var { itemTags: a = [] } = t;
                    return -1 !== a.indexOf(e);
                  });
                return a || {};
              },
              findAddrItem() {
                var { list: e } = this;
                return e.filter((e) => {
                  var { itemTags: t = [], itemType: a } = e;
                  return (
                    -1 !== t.indexOf(u.a.address) ||
                    a === u.b.address ||
                    a === u.b.province
                  );
                });
              },
              changeFormData(e) {
                var { id: t, value: a } = e,
                  s = Object(i.a)(e, h),
                  { formData: d } = this;
                (d[t] = Object(r.a)({ value: a }, s)),
                  (this.formData = d),
                  this.relatedFieldsEffect[t] &&
                    setTimeout(() => {
                      this.relatedFieldsEffect[t](a);
                    }, 0);
              },
              birthToAge(e) {
                var { ageConfId: t, birthVal: a } = e,
                  i = new Date(a).getTime();
                this.changeFormData({ id: t, value: Object(u.c)(i) });
              },
            },
            ud: !0,
          };
        t.default = s.default.component(c);
      },
    }
  )
);
