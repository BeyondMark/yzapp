"use strict";
var r = require("~/r");
r(
  "5QgH",
  Object.assign(
    {},
    require("~/packages/usercenter/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "5QgH": function (e, t, s) {
        s.r(t);
        var i = s("rqVN"),
          r = s("gPtZ");
        Object(i.b)({
          properties: {
            services: {
              type: Array,
              value: [],
              observer(e) {
                this._setServices(e);
              },
            },
            iconMode: { type: Number, value: 1 },
            badges: { type: Object, value: {} },
            links: { type: Object, value: {} },
          },
          data: { widgetGroups: [] },
          methods: {
            _setServices(e) {
              var t = [],
                s = { type: "blank-group", widgets: [] },
                i = { type: "widget-group", widgets: [] };
              e.forEach((e) => {
                "blankLine" === e.type
                  ? (i.widgets.length > 0 &&
                      (t.push(i), (i = { type: "widget-group", widgets: [] })),
                    s.widgets.push({ key: e.type, title: e.title }))
                  : (s.widgets.length > 0 &&
                      (t.push(s), (s = { type: "blank-group", widgets: [] })),
                    r.b[e.type] &&
                      i.widgets.push({
                        key: e.type,
                        title: e.title,
                        icon: r.b[e.type][r.a[+this.properties.iconMode || 1]],
                      }));
              }),
                s.widgets.length > 0 ? t.push(s) : t.push(i),
                this.setYZData({ widgetGroups: t });
            },
            handleWidgetClicked(e) {
              var t = e.currentTarget.dataset.key;
              this.triggerEvent("widgetClicked", t);
            },
          },
        });
      },
    }
  )
);
