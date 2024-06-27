var installedModules = {},
  installedChunks = {};
module.exports = function (a, b) {
  function e(c) {
    if (c === a && d) throw new Error("入口文件" + c + "被加载两次");
    if (c !== a && installedModules[c]) return installedModules[c].exports;
    var f = (installedModules[c] = { i: c, l: !1, exports: {} });
    return (
      c === a && (d = f),
      b[c].call(f.exports, f, f.exports, e),
      (f.l = !0),
      f.exports
    );
  }
  var d = null;
  return (
    (e.m = b),
    (e.c = installedModules),
    (e.d = function (a, b, c) {
      e.o(a, b) || Object.defineProperty(a, b, { enumerable: !0, get: c });
    }),
    (e.r = function (a) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (e.t = function (a, b) {
      var c, d;
      if ((1 & b && (a = e(a)), 8 & b)) return a;
      if (4 & b && "object" == typeof a && a && a.__esModule) return a;
      if (
        ((c = Object.create(null)),
        e.r(c),
        Object.defineProperty(c, "default", { enumerable: !0, value: a }),
        2 & b && "string" != typeof a)
      )
        for (d in a)
          e.d(
            c,
            d,
            function (b) {
              return a[b];
            }.bind(null, d)
          );
      return c;
    }),
    (e.n = function (a) {
      var b =
        a && a.__esModule
          ? function () {
              return a.default;
            }
          : function () {
              return a;
            };
      return e.d(b, "a", b), b;
    }),
    (e.o = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }),
    (e.p = ""),
    (e.e = function (a) {
      var c = [];
      if (0 !== installedChunks[a]) {
        const d = require.async("./" + a + ".js").then(function (a) {
          var e,
            f,
            c = a.modules,
            d = a.ids;
          for (e in c) b[e] = c[e];
          for (f = 0; f < d.length; f++) installedChunks[d[f]] = 0;
        });
        c.push(d);
      }
      return Promise.all(c);
    }),
    e((e.s = a))
  );
};
