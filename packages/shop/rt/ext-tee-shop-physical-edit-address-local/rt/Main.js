"use strict";
var r = require("~/r");
r(
  "a9OF",
  Object.assign({}, require("~/v.js").modules, {
    a9OF: function (e, t, s) {
      s.r(t);
      var i = s("Sh92"),
        d = s("hcPn"),
        a = {
          name: "ShopEditAddress",
          data: () => ({
            addressList: null,
            showBlockTip: !0,
            defaultAddressList: [],
            hasInit: !1,
          }),
          computed: {
            addressTitle() {
              return this.showBlockTip ? "附近的地址" : "";
            },
          },
          mounted() {
            this.ctx.event.listen("search-change:debounce", (e) => {
              this.fetchAddress({ keyword: e });
            }),
              this.ctx.event.listen("search-focus", () => {
                (this.showBlockTip = !1), (this.addressList = null);
              }),
              this.ctx.event.listen("search-cancel", () => {
                (this.showBlockTip = !0),
                  (this.addressList = this.defaultAddressList);
              }),
              Object(d.b)().then((e) => {
                var { longitude: t, latitude: s } = e;
                Object(i.p)({
                  location: { latitude: s, longitude: t },
                  poi_options: "policy=2",
                }).then((e) => {
                  var { result: { formatted_addresses: t = {} } = {} } = e;
                  t.recommend && this.fetchAddress({ keyword: t.recommend });
                });
              });
          },
          destroyed() {
            this.ctx.event.remove("search-change:debounce"),
              this.ctx.event.remove("search-focus"),
              this.ctx.event.remove("search-cancel");
          },
          methods: {
            handleClickItem(e) {
              var {
                  title: t,
                  location: { lat: s, lng: i },
                } = e,
                d = this.ctx.env.getQuery(),
                a = { address: t || "", latitude: s, longitude: i };
              this.ctx.dmc.reLaunch(
                "PhysicalStore",
                Object.assign(d, { location: JSON.stringify(a) })
              );
            },
            fetchAddress(e) {
              Object(i.q)(e).then((e) => {
                this.hasInit ||
                  ((this.defaultAddressList = e.data), (this.hasInit = !0)),
                  (this.addressList = e.data);
              });
            },
          },
          ud: !0,
        },
        c = s("9ZMt");
      t.default = c.default.component(a);
    },
  })
);
