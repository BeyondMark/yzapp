"use strict";
var r = require("~/r");
r(
  "7fIJ",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "7fIJ": function (e, t, i) {
        i.r(t);
        var s = i("Fcif"),
          r = i("rqVN"),
          a = i("RY8z"),
          l = i("C1mc"),
          n = i("zy1l"),
          u = getApp();
        Object(r.b)({
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
              observer(e) {
                this._setPluginValues(e);
              },
            },
            userAgreePrivacy: { type: Boolean, default: !1 },
            links: Object,
            isNotValid: Boolean,
          },
          data: {
            widgetGroups: [],
            pluginValues: { drugList: 0 },
            extra: { sourceParam: "", businessId: "" },
          },
          attached() {
            this.getImInfo();
          },
          methods: {
            onContactBack: a.a.contactBack,
            _setPluginValues(e) {
              this.setYZData({ pluginValues: e });
            },
            _setPlugins(e) {
              var t = [],
                i = { type: "blank-group", widgets: [] },
                r = { type: "widget-group", widgets: [] };
              e.forEach((e) => {
                if ("blankLine" === e.type)
                  r.widgets.length > 0 &&
                    (t.push(r), (r = { type: "widget-group", widgets: [] })),
                    i.widgets.push({ key: e.type, title: e.title });
                else if (
                  (i.widgets.length > 0 &&
                    (t.push(i), (i = { type: "blank-group", widgets: [] })),
                  e.isCloud)
                ) {
                  var { title: a, type: n, value: u } = e;
                  r.widgets.push(
                    Object(s.a)({}, e, {
                      key: n,
                      title: e.title,
                      text: a,
                      value: u,
                      icon: e[l.a[+this.properties.iconMode || 1]],
                    })
                  );
                } else
                  l.c[e.type] &&
                    (r.widgets.push(
                      Object(s.a)({}, e, {
                        key: e.type,
                        title: e.title,
                        text: l.c[e.type].text,
                        icon: l.c[e.type][l.b[+this.properties.iconMode || 1]],
                      })
                    ),
                    "ump_conference" === e.type && this.setViewLogger());
              }),
                i.widgets.length > 0 ? t.push(i) : t.push(r),
                this.setYZData({ widgetGroups: t });
            },
            handlePluginAuthorize(e) {
              this.clickItem(e);
            },
            clickItem(e) {
              var { key: t } = e.currentTarget.dataset,
                i = this.properties.links[t];
              if (i) {
                var s = i,
                  r = this.properties.plugins.find((e) => e.type === t);
                if (r && r.ext) {
                  var { id: l } = Object(n.a)(r.ext),
                    u = s + "?id=" + l;
                  a.a.navigate({ url: u });
                } else a.a.navigate({ url: s });
              } else this.triggerEvent("pluginItemClicked", t);
            },
            handleBindGetUserInfo(e) {
              this.triggerEvent("bindGetUserInfo", e.detail);
            },
            setViewLogger() {
              u.logger &&
                u.logger.log({
                  et: "view",
                  ei: "component_view",
                  en: "组件曝光",
                  params: { component: "mustTools" },
                });
            },
            getImInfo() {
              u.getDefaultImData().then((e) => {
                this.setYZData({ extra: e });
              });
            },
          },
        });
      },
    }
  )
);
