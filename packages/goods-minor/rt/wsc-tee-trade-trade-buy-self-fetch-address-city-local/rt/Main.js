"use strict";
var r = require("~/r");
r(
  "8Fo2",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      "8Fo2": function (e, t, a) {
        a.r(t);
        var c = a("eijD"),
          i = a("1RE2"),
          r = a("9ZMt"),
          s = a("UlHH"),
          o = {
            data: () => ({
              keyword: "",
              inSearch: !1,
              cityMap: {},
              currentCityMap: {},
              listLoaded: !1,
              location: { cityName: "", cityCode: "", locating: !1 },
            }),
            computed: {
              cityCount() {
                var { currentCityMap: e } = this;
                return Object.keys(e).reduce((t, a) => t + e[a].length, 0);
              },
              buttonText() {
                var { cityName: e, locating: t } = this.location;
                if (e) {
                  var a = !1;
                  return (
                    this.listLoaded &&
                      -1 === JSON.stringify(this.cityMap).indexOf(e) &&
                      (a = !0),
                    e + (a ? " (该城市暂无提货点)" : "")
                  );
                }
                return t ? "定位中..." : "定位失败，点击重试";
              },
            },
            mounted() {
              var e = this;
              return Object(c.a)(function* () {
                var t = e.$getPageQuery(),
                  { cityName: a, cityCode: c } = t;
                if (a && c)
                  e.location = { cityName: a, cityCode: c, locating: !1 };
                else {
                  var [i] = e.ctx.process.invoke("getLocation");
                  i.then((t) => {
                    var { cityName: a, cityCode: c } = t;
                    e.location = { cityName: a, cityCode: c, locating: !1 };
                  }).catch(() => {});
                }
                e.getSelfFetchCityMap();
              })();
            },
            methods: {
              onFocus() {
                this.inSearch = !0;
              },
              onChange(e) {
                this.keyword = e.value;
              },
              onSearch() {
                var e = {},
                  { keyword: t } = this;
                Object.keys(this.cityMap).forEach((a) => {
                  this.cityMap[a].forEach((c) => {
                    -1 !== c.cityName.indexOf(t) &&
                      (e[a] ? e[a].push(c) : (e[a] = [c]));
                  });
                }),
                  (this.currentCityMap = e);
              },
              onCancel() {
                (this.keyword = ""),
                  (this.inSearch = !1),
                  (this.currentCityMap = this.cityMap);
              },
              onClickButton() {
                var { location: e } = this;
                e.cityName ? this.selectCity(e) : e.locating;
              },
              onClickCity(e) {
                this.selectCity(e);
              },
              selectCity(e) {
                this.onCancel(),
                  this.ctx.lambdas.triggerEvent(s.a.selfFetchCity, e),
                  r.default.navigateBack();
              },
              getSelfFetchCityMap() {
                var e = this;
                return Object(c.a)(function* () {
                  try {
                    var t = yield i.a();
                    (e.cityMap = t),
                      (e.currentCityMap = t),
                      (e.listLoaded = !0);
                  } catch (e) {}
                })();
              },
            },
            ud: !0,
          };
        t.default = r.default.component(o);
      },
      UlHH: function (e, t, a) {
        t.a = {
          selfFetchCity: "self-fetch-city-change",
          addressSelect: "address-select",
          addressDelete: "address-delete",
          addressSave: "address-save",
          couponChange: "order-coupon-change",
          showExpressWay: "show-express-way",
          addressCity: "address-city-change",
          addressMap: "address-map-change",
          showContact: "show-contact",
          showSelfFetchShop: "show-self-fetch-shop",
          showSelfFetchTime: "show-self-fetch-time",
          showTradeRecharge: "show-trade-recharge",
          contactError: "contact-error",
          idcardError: "idcard-error",
          presaleDisagreeToast: "presale-disagree-toast",
          showIdcardPopup: "show-idcard-popup",
        };
      },
    }
  )
);
