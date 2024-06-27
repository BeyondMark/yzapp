"use strict";
var r = require("~/r");
r(
  "vOb6",
  Object.assign({}, require("~/v.js").modules, {
    "7lfQ": function (t, e, i) {
      i.d(e, "a", function () {
        return o;
      });
      var n = i("9ZMt");
      e.b = function (t) {
        return new Promise(function (e, i) {
          n.default.$native.getSetting({
            success: function (o) {
              o.authSetting[t]
                ? e()
                : n.default.$native.authorize({
                    scope: t,
                    success: e,
                    fail: i,
                  });
            },
            fail: i,
          });
        });
      };
      var o = function (t) {
        return new Promise(function (e, i) {
          n.default.$native.getSetting({
            success: function (i) {
              i.authSetting[t] ? e(!0) : e(!1);
            },
            fail: i,
          });
        });
      };
    },
    vOb6: function (t, e, i) {
      i.r(e);
      var n = i("7lfQ"),
        o = {
          data: () => ({
            location: "",
            area: "",
            locationDetail: { type: Object, default: () => ({}) },
          }),
          created() {
            Object(n.b)("scope.userLocation")
              .then(
                () =>
                  new Promise((t, e) =>
                    this.ctx.process.invokePipe("tryLocation", {
                      success: (e, i) => t(i),
                      fail: e,
                    })
                  )
              )
              .then(this.getCurrentLocation)
              .then((t) => {
                var { message: e, result: i } = t;
                if ("query ok" === e) {
                  var {
                    address_component: { province: n, city: o, district: a },
                    formatted_addresses: { recommend: r },
                  } = i;
                  (this.location = r),
                    (this.area = n + "/" + o + "/" + a),
                    (this.locationDetail = i);
                }
              })
              .catch((t) => {});
          },
          methods: {
            getCurrentLocation(t) {
              var { latitude: e, longitude: i } = t;
              return this.ctx.process.invoke("reverseGeocoder", {
                location: { latitude: e, longitude: i },
              })[0];
            },
            onClick() {
              this.$emit("save", this.locationDetail);
            },
          },
          ud: !0,
        },
        a = i("9ZMt");
      e.default = a.default.component(o);
    },
  })
);
