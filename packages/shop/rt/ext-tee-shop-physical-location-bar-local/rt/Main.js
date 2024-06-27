"use strict";
var r = require("~/r");
r(
  "664h",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      "664h": function (t, e, i) {
        i.r(e);
        var o = i("9ZMt"),
          s = i("YeA1"),
          n = i("OosA"),
          a = {
            name: "ShopLocationBar",
            data: () => ({
              location: {
                countryName: "",
                provinceName: "",
                cityName: "",
                countyName: "",
                latitude: "",
                longitude: "",
                address: "",
              },
              isLocating: !1,
              show: !0,
            }),
            computed: {
              locationStr() {
                return this.location.address || "获取定位失败";
              },
            },
            created() {
              this.initEvent(), this.initPrivateData();
            },
            destroyed() {
              this.ctx.event.remove("search-focus"),
                this.ctx.event.remove("search-cancel");
            },
            methods: {
              initPrivateData() {
                this._denyAuth = !0;
              },
              initEvent() {
                Object(s.b)(this, ["location"]),
                  this.ctx.event.listen("search-focus", (t) => {
                    t || (this.show = !1);
                  }),
                  this.ctx.event.listen("search-cancel", () => {
                    this.show = !0;
                  });
              },
              chooseLocation() {
                this.ctx.dmc.navigate("PhysicalAddress");
              },
              invokeGetLocation() {
                this.isLocating ||
                  (!this._denyAuth ||
                  this.location.latitude ||
                  this.location.longitude
                    ? ((this.isLocating = !0),
                      Object(n.a)()
                        .then((t) => {
                          (this.isLocating = !1), this.emitLocation(t);
                        })
                        .catch(() => {
                          this.isLocating = !1;
                        }))
                    : this.openSetting());
              },
              emitLocation(t) {
                this.ctx.event.emit("onLocation", t);
              },
              openSetting() {
                o.default.$native.openSetting({
                  success: (t) => {
                    var { authSetting: e } = t;
                    e["scope.userLocation"] &&
                      ((this._denyAuth = !1), this.invokeGetLocation());
                  },
                });
              },
            },
            ud: !0,
          };
        e.default = o.default.component(a);
      },
    }
  )
);
