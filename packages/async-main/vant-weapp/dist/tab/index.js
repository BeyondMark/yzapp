"use strict";
var r = require("~/r");
r("HRQD", {
  HRQD: function (e, t, s) {
    s.r(t);
    var a = s("wwdI");
    Object(a.a)({
      relation: { name: "tabs", type: "ancestor" },
      props: {
        dot: Boolean,
        info: null,
        title: String,
        disabled: Boolean,
        titleStyle: String,
      },
      data: { width: null, inited: !1, active: !1, animated: !1 },
      watch: {
        title: "update",
        disabled: "update",
        dot: "update",
        info: "update",
        titleStyle: "update",
      },
      methods: {
        update() {
          var e = this.getRelationNodes("../tabs/index")[0];
          e && e.updateTabs();
        },
      },
    });
  },
  wwdI: function (e, t, s) {
    s.d(t, "a", function () {
      return n;
    });
    var a = Behavior({
      methods: {
        $emit() {
          this.triggerEvent(...arguments);
        },
        getRect(e, t) {
          return new Promise((s) => {
            wx.createSelectorQuery()
              .in(this)
              [t ? "selectAll" : "select"](e)
              .boundingClientRect((e) => {
                t && Array.isArray(e) && e.length && s(e), !t && e && s(e);
              })
              .exec();
          });
        },
      },
    });
    function r(e, t) {
      return new Promise((s) => {
        e.setData(t, s);
      });
    }
    var i = Behavior({
      created() {
        if (this.$options) {
          var e = {},
            { computed: t } = this.$options(),
            s = Object.keys(t);
          this.calcComputed = () => {
            var a = {};
            return (
              s.forEach((s) => {
                var r = t[s].call(this);
                e[s] !== r && ((e[s] = r), (a[s] = r));
              }),
              a
            );
          };
        }
      },
      attached() {
        this.set();
      },
      methods: {
        set(e, t) {
          var s = [];
          return (
            e && s.push(r(this, e)),
            this.calcComputed && s.push(r(this, this.calcComputed())),
            Promise.all(s).then(
              (e) => (t && "function" == typeof t && t.call(this), e)
            )
          );
        },
      },
    });
    function o(e, t) {
      var { watch: s, computed: a } = e;
      if ((t.behaviors.push(i), s)) {
        var r = t.properties || {};
        Object.keys(s).forEach((e) => {
          if (e in r) {
            var t = r[e];
            (null !== t && "type" in t) || (t = { type: t }),
              (t.observer = s[e]),
              (r[e] = t);
          }
        }),
          (t.properties = r);
      }
      a &&
        ((t.methods = t.methods || {}),
        (t.methods.$options = () => e),
        t.properties &&
          (function (e) {
            e &&
              Object.keys(e).forEach((t) => {
                var s = e[t];
                (null !== s && "type" in s) || (s = { type: s });
                var { observer: a } = s;
                (s.observer = function () {
                  if (a) {
                    "string" == typeof a && (a = this[a]);
                    for (
                      var e = arguments.length, t = new Array(e), s = 0;
                      s < e;
                      s++
                    )
                      t[s] = arguments[s];
                    a.apply(this, t);
                  }
                  this.set();
                }),
                  (e[t] = s);
              });
          })(t.properties));
    }
    function n(e) {
      void 0 === e && (e = {});
      var t,
        s,
        r,
        i = {};
      (t = e),
        (s = i),
        (r = {
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
        Object.keys(r).forEach((e) => {
          t[e] && (s[r[e]] = t[e]);
        });
      var { relation: n } = e;
      n &&
        (i.relations = Object.assign(i.relations || {}, {
          ["../" + n.name + "/index"]: n,
        })),
        (i.externalClasses = i.externalClasses || []),
        i.externalClasses.push("custom-class"),
        (i.behaviors = i.behaviors || []),
        i.behaviors.push(a),
        e.field && i.behaviors.push("wx://form-field"),
        (i.options = { multipleSlots: !0, addGlobalClass: !0 }),
        o(e, i),
        Component(i);
    }
  },
});
