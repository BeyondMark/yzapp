"use strict";
var r = require("~/r");
r(
  "3vHn",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "3vHn": function (e, t, i) {
        i.r(t);
        var s = i("rqVN"),
          r = i("zMoS"),
          a = i("RY8z"),
          o = i("C1mc"),
          n = i("zy1l"),
          l = getApp();
        Object(s.b)({
          properties: {
            iconMode: { type: Number, default: 1 },
            plugins: {
              type: Array,
              value: [],
              observer(e) {
                this._setPlugins(e);
              },
            },
            values: {
              type: Object,
              value: { cart: 0, giftsCommunityVer: 0, gifts: 0 },
              observer(e) {
                this._setInfo(e);
              },
            },
            links: Object,
            isNotValid: Boolean,
          },
          data: {
            widgets: [],
            dotClasses: [],
            giftInfo: "",
            cartInfo: "",
            extra: { sourceParam: "", businessId: "" },
          },
          attached() {
            this.getImInfo();
          },
          methods: {
            onContactBack: a.a.contactBack,
            _setPlugins(e) {
              for (
                var t = e
                    .filter(
                      (e) =>
                        "blankLine" !== e.type && (o.c[e.type] || e.isCloud)
                    )
                    .map((e) => {
                      "ump_conference" === e.type && this.setViewLogger();
                      var { isCloud: t, title: i, type: s } = e;
                      return t
                        ? {
                            key: s,
                            title: i,
                            text: i,
                            icon: e[o.a[+this.properties.iconMode || 1]],
                          }
                        : {
                            key: e.type,
                            title: e.title,
                            text: o.c[e.type].text,
                            icon: o.c[e.type][
                              o.b[+this.properties.iconMode || 1]
                            ],
                          };
                    }),
                  i = [],
                  s = 0;
                s < t.length;
                s++
              ) {
                var a = t[s],
                  { key: n } = a,
                  l = this.properties.values[a.key],
                  c = "";
                ["giftsCommunityVer"].indexOf(n) >= 0 &&
                  l &&
                  (c = "widget-item--dot"),
                  i.push(c);
              }
              var p = this.properties.values.cart,
                g = Object(r.a)(this.properties, "values.gifts"),
                u = p > 99 ? "99+" : p,
                d = g > 99 ? "99+" : g;
              this.setYZData({
                widgets: t,
                dotClasses: i,
                cartInfo: u,
                giftInfo: d,
              });
            },
            _setInfo(e) {
              var t = e.cart,
                i = e.gifts,
                s = t > 99 ? "99+" : t;
              this.setYZData({ cartInfo: s, giftInfo: i });
            },
            handlePluginAuthorize(e) {
              this.clickItem(e);
            },
            clickItem(e) {
              var { key: t } = e.currentTarget.dataset;
              if (this.properties.links[t]) {
                var i = this.properties.links[t],
                  s = this.properties.plugins.find((e) => e.type === t);
                if (s && s.ext) {
                  var { id: r } = Object(n.a)(s.ext),
                    o = i + "?id=" + r;
                  a.a.navigate({ url: o });
                } else a.a.navigate({ url: i });
              } else this.triggerEvent("pluginItemClicked", t);
            },
            handleBindGetUserInfo(e) {
              this.triggerEvent("bindGetUserInfo", e.detail);
            },
            setViewLogger() {
              l.logger &&
                l.logger.log({
                  et: "view",
                  ei: "component_view",
                  en: "组件曝光",
                  params: { component: "mustTools" },
                });
            },
            getImInfo() {
              l.getDefaultImData().then((e) => {
                this.setYZData({ extra: e });
              });
            },
          },
        });
      },
    }
  )
);
