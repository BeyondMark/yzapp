"use strict";
var r = require("~/r");
r(
  "cdls",
  Object.assign(
    {},
    require("../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      cdls: function (e, a, t) {
        t.r(a);
        var i = t("Fcif"),
          d = t("qJXH"),
          r = t("7g46"),
          s = getApp();
        Object(d.b)({
          data: {
            hasUserInfo: !1,
            name: "",
            disableMobile: !0,
            mobile: "",
            weixin: "",
            sexIndex: -1,
            slectedSex: !1,
            sexArray: ["请选择", "男", "女"],
            slectedBirth: !1,
            birthday: "1990-01-01",
            edit_data: {
              provinceIndex: 0,
              cityIndex: 0,
              countyIndex: 0,
              selectedValue: 0,
            },
            area: {},
          },
          onLoad() {
            s.fetchAreaMapData((e) => {
              var a = r.b(0, e);
              this.setYZData({ area_origin: e, area: a });
            }),
              wx.showLoading({ title: "努力加载中" }),
              s
                .request({ path: "/wscuser/scrm/api/customer/get.json" })
                .then((e) => {
                  if ((wx.hideLoading(), e)) {
                    var a = 0;
                    switch (e.profile.gender) {
                      case "FEMALE":
                        a = 2;
                        break;
                      case "MALE":
                        a = 1;
                        break;
                      default:
                        a = 0;
                    }
                    var t = s.getMobile() || "",
                      i = e.profile.birthday.split(" ")[0];
                    this.setYZData({
                      hasUserInfo: !0,
                      name: e.name,
                      mobile: t,
                      weixin: e.profile.weixin,
                      sexIndex: a,
                      slectedSex: !0,
                      slectedBirth: !!i,
                      birthday: i,
                    }),
                      setTimeout(() => {
                        var a = e.profile.area_code || 0,
                          t = r.b(a, this.data.area_origin),
                          {
                            provinceIndex: i,
                            cityIndex: d,
                            countyIndex: s,
                          } = r.a(a, t),
                          n = {
                            provinceIndex: i,
                            cityIndex: d,
                            countyIndex: s,
                            selectedValue: a,
                          };
                        this.setYZData({ edit_data: n, area: t });
                      }, 200);
                  }
                })
                .catch((e) => {});
          },
          onAreaChange(e) {
            var a = e.detail.value || 0,
              { type: t } = e.currentTarget.dataset,
              { edit_data: d } = this.data,
              s = this.data.area[t][a].code;
            if (d[t + "Index"] != a) {
              var n = r.b(s, this.data.area_origin),
                c = d.provinceIndex || 0,
                o = d.cityIndex || 0,
                h = d.countyIndex || 0;
              switch (t) {
                case "province":
                  (c = a),
                    (d.province = n.province[c].text),
                    (o = 0),
                    (h = 0),
                    (d.area_code = void 0);
                  break;
                case "city":
                  (o = a),
                    (d.city = n.city[o].text),
                    (h = 0),
                    (d.area_code = void 0);
                  break;
                case "county":
                  (h = a),
                    (d.county = n.county[h].text),
                    (d.area_code = n.county[h].code);
              }
              (d = Object(i.a)({}, d, {
                provinceIndex: c,
                cityIndex: o,
                countyIndex: h,
                selectedValue: s,
              })),
                this.setYZData({ edit_data: d, area: n });
            }
          },
          saveUserInfo() {
            var e = "OTHER";
            switch (+this.data.sexIndex) {
              case 1:
                e = "MALE";
                break;
              case 2:
                e = "FEMALE";
                break;
              default:
                e = "OTHER";
            }
            s.request({
              path: "/wscuser/scrm/api/customer/update.json",
              method: "post",
              data: {
                type: this.data.hasUserInfo ? "update" : "create",
                customer: {
                  name: this.data.name,
                  mobile: this.data.mobile,
                  gender: e,
                  birthday: this.data.slectedBirth ? this.data.birthday : "",
                  weixin: this.data.weixin,
                  areaCode: +this.data.edit_data.area_code,
                },
              },
            })
              .then(() => {
                wx.navigateBack();
              })
              .catch((e) => {});
          },
          onNameInputBlur(e) {
            var a = e.detail.value;
            this.setYZData({ name: a });
          },
          onMobileInputBlur(e) {
            var a = e.detail.value;
            this.setYZData({ mobile: a });
          },
          bindSexPickerChange(e) {
            this.setYZData({ slectedSex: !0, sexIndex: e.detail.value });
          },
          bindDatePickerChange(e) {
            this.setYZData({ slectedBirth: !0, birthday: e.detail.value });
          },
          bindRegionChange(e) {
            this.setYZData({ slectedRegion: !0, region: e.detail.value });
          },
        });
      },
    }
  )
);
