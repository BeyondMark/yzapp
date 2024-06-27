"use strict";
var r = require("~/r");
r(
  "XFhz",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      XFhz: function (e, t, s) {
        s.r(t);
        var i = s("Fcif"),
          a = s("2jOk"),
          r = s("EqB2"),
          m = s("0hwI"),
          g = {
            name: "ShowcaseCrowdsImage",
            mixins: [Object(r.a)({ optDesc: a.a })],
            props: ["featureAlias", "extra", "kdtId"],
            data: () => ({ imagesOpt: {} }),
            created() {
              this.getImages();
            },
            methods: {
              onImageClick(e) {
                this.$emit("jumpToLink", e);
              },
              onImageIndexChange(e) {
                this.$emit("indexChange", e);
              },
              getImages() {
                var { imgs: e, show_method: t } = this.opt,
                  s = e.filter((e) => 0 === e.crowdsType),
                  a = e.filter((e) => 1 === e.crowdsType),
                  r = s,
                  g = a.map((e, t) => {
                    var { crowdDto: s, imageId: i } = e;
                    return { crowdDTOList: s, imageId: i, ranked: t };
                  });
                g.length
                  ? m.a
                      .get({
                        url: "/wscdeco/crowds-image/match.json",
                        data: {
                          featureAlias: this.featureAlias,
                          crowdImageType: +t,
                          crowdImageAdDTOList: JSON.stringify(g),
                        },
                      })
                      .then((a) => {
                        var { successImageIdList: m } = a;
                        (s.length || m.length) &&
                          (r = e.filter(
                            (e) =>
                              0 === e.crowdsType || -1 !== m.indexOf(e.imageId)
                          )),
                          r.length
                            ? (this.imagesOpt = Object(i.a)({}, this.opt, {
                                imgs: 1 == +t ? r : [r[0]],
                              }))
                            : (this.imagesOpt = Object(i.a)({}, this.opt, {
                                imgs: [],
                              }));
                      })
                      .catch(() => {
                        this.imagesOpt = Object(i.a)({}, this.opt, { imgs: s });
                      })
                  : (this.imagesOpt = Object(i.a)({}, this.opt, {
                      imgs: 1 == +t ? r : [r[0]],
                    }));
              },
            },
            ud: !0,
          },
          d = s("9ZMt");
        t.default = d.default.component(g);
      },
    }
  )
);
