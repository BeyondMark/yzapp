"use strict";
var r = require("~/r");
r("NvzT", {
  NvzT: function (e, t, r) {
    r.r(t);
    var s = r("wwdI");
    Object(s.a)({ props: { info: null, customStyle: String } });
  },
  wwdI: function (e, t, r) {
    r.d(t, "a", function () {
      return n;
    });
    var s = Behavior({
      methods: {
        $emit() {
          this.triggerEvent(...arguments);
        },
        getRect(e, t) {
          return new Promise((r) => {
            wx.createSelectorQuery()
              .in(this)
              [t ? "selectAll" : "select"](e)
              .boundingClientRect((e) => {
                t && Array.isArray(e) && e.length && r(e), !t && e && r(e);
              })
              .exec();
          });
        },
      },
    });
    function a(e, t) {
      return new Promise((r) => {
        e.setData(t, r);
      });
    }
    var i = Behavior({
      created() {
        if (this.$options) {
          var e = {},
            { computed: t } = this.$options(),
            r = Object.keys(t);
          this.calcComputed = () => {
            var s = {};
            return (
              r.forEach((r) => {
                var a = t[r].call(this);
                e[r] !== a && ((e[r] = a), (s[r] = a));
              }),
              s
            );
          };
        }
      },
      attached() {
        this.set();
      },
      methods: {
        set(e, t) {
          var r = [];
          return (
            e && r.push(a(this, e)),
            this.calcComputed && r.push(a(this, this.calcComputed())),
            Promise.all(r).then(
              (e) => (t && "function" == typeof t && t.call(this), e)
            )
          );
        },
      },
    });
    function o(e, t) {
      var { watch: r, computed: s } = e;
      if ((t.behaviors.push(i), r)) {
        var a = t.properties || {};
        Object.keys(r).forEach((e) => {
          if (e in a) {
            var t = a[e];
            (null !== t && "type" in t) || (t = { type: t }),
              (t.observer = r[e]),
              (a[e] = t);
          }
        }),
          (t.properties = a);
      }
      s &&
        ((t.methods = t.methods || {}),
        (t.methods.$options = () => e),
        t.properties &&
          (function (e) {
            e &&
              Object.keys(e).forEach((t) => {
                var r = e[t];
                (null !== r && "type" in r) || (r = { type: r });
                var { observer: s } = r;
                (r.observer = function () {
                  if (s) {
                    "string" == typeof s && (s = this[s]);
                    for (
                      var e = arguments.length, t = new Array(e), r = 0;
                      r < e;
                      r++
                    )
                      t[r] = arguments[r];
                    s.apply(this, t);
                  }
                  this.set();
                }),
                  (e[t] = r);
              });
          })(t.properties));
    }
    function n(e) {
      void 0 === e && (e = {});
      var t,
        r,
        a,
        i = {};
      (t = e),
        (r = i),
        (a = {
          data: "data",
          props: "properties",
          mixins: "behaviors",
          methods: "methods",
          beforeCreate: "created",
          created: "attached",
          mounted: "ready",
          relations: "relations",
          destroyed: "detached",
          classes: "externalClasses",
        }),
        Object.keys(a).forEach((e) => {
          t[e] && (r[a[e]] = t[e]);
        });
      var { relation: n } = e;
      n &&
        (i.relations = Object.assign(i.relations || {}, {
          ["../" + n.name + "/index"]: n,
        })),
        (i.externalClasses = i.externalClasses || []),
        i.externalClasses.push("custom-class"),
        (i.behaviors = i.behaviors || []),
        i.behaviors.push(s),
        e.field && i.behaviors.push("wx://form-field"),
        (i.options = { multipleSlots: !0, addGlobalClass: !0 }),
        o(e, i),
        Component(i);
    }
  },
});
