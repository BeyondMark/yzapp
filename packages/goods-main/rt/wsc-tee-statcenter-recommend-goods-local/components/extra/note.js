"use strict";
var r = require("~/r");
r(
  "36NZ",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "36NZ": function (t, e, i) {
        i.r(e);
        var r = i("7dhF"),
          o = {
            props: { info: Object, layoutConfig: Object, themeColors: Object },
            data() {
              var {
                sizeType: t = 0,
                imageFillStyle: e = 1,
                textStyleType: i = 1,
              } = this.layoutConfig;
              return {
                isWaterFall: +t === r.h.WATERFALL,
                bgImg:
                  "background-image: url(" + this.info.head_image_url + ")",
                imageFillStyleClass: "recommend-note-banner__img-" + r.b[e],
                textStyleClass: "bold" === r.j[i] ? "title-bold" : "",
              };
            },
            computed: {
              title() {
                return this.info.title || this.info.showNote;
              },
              paddingTopStyle() {
                var { imageRatio: t = 1 } = this.layoutConfig,
                  e = {};
                if (!this.isWaterFall) {
                  var [i, o] = r.c[t].split("-");
                  e = "padding-top: " + (+o / +i) * 100 + "%";
                }
                return e;
              },
            },
            methods: {
              colorRbg() {
                if (
                  "object" == typeof this.themeColors["main-bg"] ||
                  !this.themeColors["main-bg"]
                )
                  return "238,10,36";
                var t = this.themeColors["main-bg"].toLowerCase().substring(1);
                if (3 === t.length) {
                  for (var e = "", i = 0; i < 3; i++)
                    e += t.substring(i, i + 1).concat(t.substring(i, i + 1));
                  t = e;
                }
                for (var r = [], o = 0; o < 6; o += 2) {
                  var s = t.substring(o, o + 2);
                  r.push(parseInt("0x" + s));
                }
                return r.join(",");
              },
            },
          },
          s = i("9ZMt");
        e.default = s.default.component(o);
      },
    }
  )
);
