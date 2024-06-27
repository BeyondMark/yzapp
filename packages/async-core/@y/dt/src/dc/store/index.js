"use strict";
var r = require("~/r");
r(
  "tpVI",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      tpVI: function (e, t, a) {
        a.r(t);
        var o = a("9ZMt"),
          n = a("mztD"),
          r = a("EqB2"),
          s = a("00OO"),
          i = a("K3Aj"),
          d = a("YeA1"),
          u = {
            name: "DcStore",
            mixins: [Object(r.a)({ optDesc: s.a })],
            data: () => ({ vanSwiperKey: "" + Math.random() }),
            computed: {
              bannerImages() {
                return (this.opt.bgImages || []).map((e) =>
                  Object(n.a)(e, "!730x0.webp")
                );
              },
              logoImage() {
                return (
                  "background-image: url(" +
                  Object(n.a)(this.opt.logo, "!160x160.jpg") +
                  ");"
                );
              },
            },
            methods: {
              handlePhone() {
                var { phone: e = "", areaCode: t = "" } = this.opt.storeInfo,
                  a = t ? "-" : "";
                "web" === o.default.getEnv()
                  ? Object(i.b)("tel:" + t + a + e)
                  : e &&
                    o.default.$native.makePhoneCall({ phoneNumber: t + a + e });
              },
              baiduToGcj(e, t) {
                var a = (3e3 * Math.PI) / 180,
                  o = e - 0.0065,
                  n = t - 0.006,
                  r = Math.sqrt(o * o + n * n) - 2e-5 * Math.sin(n * a),
                  s = Math.atan2(n, o) - 3e-6 * Math.cos(o * a);
                return {
                  lng: (e = r * Math.cos(s)),
                  lat: (t = r * Math.sin(s)),
                };
              },
              handleOpenLocation() {
                var { title: e } = this.opt.storeInfo,
                  { lat: t, lng: a, address: n } = this.opt.addressInfo,
                  r = this.baiduToGcj(a, t),
                  { lng: s, lat: i } = r;
                "web" === o.default.getEnv()
                  ? Object(d.a)().dmc.navigate("CommonWebview", {
                      src:
                        "https://uri.amap.com/marker?position=" +
                        s +
                        "," +
                        i +
                        "&name=" +
                        e,
                    })
                  : o.default.$native.openLocation({
                      latitude: i,
                      longitude: s,
                      name: e,
                      address: n,
                    });
              },
            },
            ud: !0,
          };
        t.default = o.default.component(u);
      },
    }
  )
);
