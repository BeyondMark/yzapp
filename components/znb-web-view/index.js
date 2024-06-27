"use strict";
var r = require("~/r");
r(
  "dQ1M",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "5jcX": function (e, t, i) {
      i.r(t),
        i.d(t, "cleanTicketCache", function () {
          return o;
        }),
        i.d(t, "getWebviewLoginTicket", function () {
          return l;
        });
      var r = i("US/N"),
        a = i("QxN7"),
        n = i("50K0");
      function c(e) {
        return Object(r.default)({
          method: "GET",
          origin: "uic",
          path: "/passport/api/get-webview-ticket",
          withCredentials: !0,
          data: e,
        });
      }
      function s(e, t) {
        return (
          void 0 === t && (t = {}),
          c(e)
            .then(function (e) {
              a.cache.set(a.CACHE_LOGIN_TICKET_INFO, e, {
                expire: 1e3 * (e.ttl > 1 ? e.ttl - 1 : e.ttl),
              });
            })
            .catch(function () {}),
          t
        );
      }
      function o() {
        a.cache.set(a.CACHE_LOGIN_TICKET_INFO, null),
          n.a.clearMiniappPrefetchData("webviewTicket");
      }
      function l(e) {
        var t = a.cache.get(a.CACHE_LOGIN_TICKET_INFO);
        return new Promise(function (i) {
          if (!(null == t ? void 0 : t.ticket))
            return new Promise(function (e, t) {
              n.a.getMiniappPrefetchRawData("webviewTicket").then(function (i) {
                (null == i ? void 0 : i.fetchedData) ? e(i.fetchedData) : t();
              });
            })
              .then(i)
              .catch(function () {
                return c(e).then(i);
              });
          i(t);
        }).then(
          function (t) {
            return s(e, t);
          },
          function () {
            return s(e);
          }
        );
      }
      a.cache.init(a.CACHE_LOGIN_TICKET_INFO);
    },
    dQ1M: function (e, t, i) {
      i.r(t);
      var r = i("rqVN"),
        a = i("2wjL"),
        n = i("IIov"),
        c = i.n(n),
        s = i("dWkE"),
        o = i("+fxQ"),
        l = i("7sy2"),
        h = i("5jcX"),
        u = getApp();
      Object(r.b)({
        properties: { src: { type: String, observer: "updateSrc" } },
        data: { completeSrc: "" },
        attached() {},
        methods: {
          updateSrc() {
            var e = this.data.src;
            null == this.version ? (this.version = 0) : (this.version += 1);
            var { version: t } = this;
            e
              ? u
                  .checkSession()
                  .then(() => {
                    this.fillSrc(e, t);
                  })
                  .catch(() => {
                    this.on("app:token:success", () => {
                      this.fillSrc(e, t);
                    });
                  })
              : this.fillSrc(e, t);
          },
          fillSrc(e, t) {
            if (t === this.version)
              if (e) {
                var i = u.getKdtId(),
                  r = u.getVersion(),
                  n = u.getAccessToken(),
                  s = u.getSessionId();
                Promise.all([
                  this.processDomain(e),
                  Object(h.getWebviewLoginTicket)(),
                ]).then((t) => {
                  var [o, h] = t,
                    d = Object(l.f)(o),
                    { ticket: g, isGray: f } = h,
                    p = a.a.getAll(o),
                    v = {
                      login_ticket: g,
                      weappType: "share",
                      weappVersion: r,
                      mpVersion: r,
                      bizEnv: "wsc",
                      accessToken: n,
                      kdt_id: p.kdtId || p.kdt_id || i,
                      isWeapp: 1,
                    };
                  (f && g) || (v.sid = s);
                  var { logger: m } = u,
                    _ = "bbs.youzan.com" === new c.a(e).hostname,
                    b = "{}";
                  if (m && !_) {
                    var k = m.getLogParams(),
                      w = k.context;
                    d && ((w.from_params = d), (v.from_params = d)),
                      (b = JSON.stringify({ user: k.user, context: w })),
                      (v.logger = b);
                  }
                  (e = a.a.add(o, v, !0)), this.setData({ completeSrc: e });
                });
              } else this.setData({ completeSrc: e });
          },
          processDomain: (e) => Object(o.c)(e).catch(() => Object(s.b)(e)),
          onLoad(e) {
            this.triggerEvent("load", e.detail);
          },
          onError(e) {
            this.triggerEvent("error", e.detail);
          },
          onPostMessage(e) {
            var t = getCurrentPages(),
              i = t[t.length - 1];
            i.__resolveMessage &&
              i.__resolveMessage.call(i, e.detail.data || []),
              this.triggerEvent("message", e.detail),
              (Array.isArray(e.detail.data) ? e.detail.data : []).filter(
                (e) => e && "authorize:state-change" === e.type
              ).length && u.syncAuthState();
          },
        },
      });
    },
  })
);
