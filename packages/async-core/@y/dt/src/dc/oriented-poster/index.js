"use strict";
var r = require("~/r");
r(
  "H89W",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      H89W: function (e, t, i) {
        i.r(t);
        var s = i("mztD"),
          r = i("taYb"),
          a = i("Kw2/"),
          d = i("9ZMt"),
          h = i("K3Aj"),
          n = {
            props: { kdtId: Number, buyerId: Number },
            data: () => ({ posters: [], vanSwiperKey: "" + Math.random() }),
            logicData: () => ({ swipeHeight: 0 }),
            computed: {
              swipeHeightString() {
                return d.default.style.useTpx(this.swipeHeight);
              },
              swiperStyle() {
                return {
                  imageItem:
                    "display: block; width: 100%; height: " +
                    d.default.style.useTpx(this.swipeHeight) +
                    ";",
                };
              },
            },
            created() {
              var e = this,
                { kdtId: t = "", buyerId: i = "" } = this;
              i &&
                Object(a.a)({ kdtId: t, buyerId: i }).then(function (t) {
                  void 0 === t && (t = []),
                    t && 0 !== t.length && e.setPosters(t);
                });
            },
            methods: {
              setPosters(e) {
                if ((void 0 === e && (e = []), e && 0 !== e.length)) {
                  (e = r.a.toCamelCase(e)).forEach((e) => {
                    e.imageUrl = Object(s.a)(e.imageUrl, "!730x0.jpg");
                  });
                  var t = e[0].imageHeight,
                    i = e[0].imageWidth,
                    a = Math.ceil(this.clientWidth() * (t / i));
                  (this.posters = e), (this.swipeHeight = a);
                }
              },
              getSinglePosterByIndex: (e, t) => (
                void 0 === e && (e = []), (e && e[t]) || {}
              ),
              clientWidth: () => Object(h.a)(),
              sendViewLogger(e, t) {},
              handleChange(e) {
                this.sendViewLogger(e);
              },
              handleClick(e) {
                var { currentTarget: t } = e,
                  { index: i } = t.dataset || {},
                  s = this.getSinglePosterByIndex(this.posters, i),
                  { detail: r = {} } = s,
                  { linkType: a } = r;
                a &&
                  (this.$emit("jumpToLink", r),
                  this.sendViewLogger(i, "click"));
              },
            },
            ud: !0,
          };
        t.default = d.default.component(n);
      },
    }
  )
);
