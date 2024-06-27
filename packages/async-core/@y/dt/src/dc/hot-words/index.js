"use strict";
var r = require("~/r");
r(
  "Z3iA",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      Z3iA: function (e, t, r) {
        r.r(t);
        var o = r("Fcif"),
          a = r("taYb"),
          n = r("YeA1"),
          s = r("R7Zb"),
          i = r("Tfmc"),
          l = r("BKwF"),
          c = {
            mixins: [Object(s.a)({ optDesc: i.a })],
            props: {
              themeColors: { type: Object, default: () => {} },
              featureAlias: String,
            },
            data() {
              var e = this.getLoggerComponentName();
              return { loggerRef: e ? e + "_content_ref" : "" };
            },
            computed: {
              loggerName() {
                return this.getLoggerComponentName();
              },
              isSingle() {
                var { mode: e } = this.opt;
                return e === l.a.single;
              },
              extraCls() {
                var { theme_style: e, mode: t } = this.opt;
                return (
                  (e === l.c.light ? "hot-words-tags-light" : "") +
                  " " +
                  (t === l.a.single ? "hot-words-tags-inline" : "")
                );
              },
              hotStyle() {
                var {
                  mode: e,
                  color_style: t,
                  theme_style: r,
                  text_color: o,
                  bg_color: a,
                } = this.opt;
                return e === l.a.multi && t === l.b.theme
                  ? "\n          color:\n            " +
                      (r === l.c.dark ? "#fff" : this.themeColors.general) +
                      ";\n          background-color:\n            " +
                      (r === l.c.dark ? this.themeColors.general : "") +
                      ";\n        "
                  : "color: " + o + "; background-color: " + a + ";";
              },
            },
            methods: {
              handleSearch(e, t) {
                var r = this.getBannerId(),
                  o = { words: e.text || "", banner_id: r, component_index: t };
                this.handleClickLog(o),
                  this.startSearch(
                    { words: e.text, bannerId: r, loggerParams: o },
                    e
                  );
              },
              startSearch(e, t) {
                void 0 === t && (t = {});
                var { words: r = "", bannerId: o, loggerParams: s } = e;
                t.link_switch && t.link_url
                  ? this.$emit("jumpToLink", a.a.toCamelCase(t))
                  : r &&
                    (this.handleLog(s),
                    Object(n.a)().dmc.navigate("Search", {
                      q: r,
                      banner_id: o,
                    }));
              },
              handleClickLog(e) {
                this.sendComponentLogger("logger", {
                  et: "click",
                  ei: "click_content",
                  en: "内容点击",
                  params: e,
                });
              },
              handleLog(e) {
                var t = {
                  et: "click",
                  ei: "search",
                  en: "搜索",
                  params: Object(o.a)({}, e, {
                    s_type: "hot-words",
                    template_alias: this.featureAlias,
                  }),
                };
                this.sendComponentLogger("logger", t);
              },
            },
          },
          g = r("9ZMt");
        t.default = g.default.component(c);
      },
    }
  )
);
