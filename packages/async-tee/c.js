"use strict";
(exports.ids = [14]),
  (exports.modules = {
    "07Gy": function (t, n, e) {
      e.d(n, "a", function () {
        return i;
      });
      var u,
        r = e("6QPe"),
        o =
          (((u = {})[r.AuthPopType.MOBILE] = [r.AuthType.MOBILE]),
          (u[r.AuthPopType.NICKNAME_AND_AVATAR] = [
            r.AuthType.NICKNAME_AND_AVATAR,
          ]),
          (u[r.AuthPopType.FILL_NICKNAME_AND_AVATAR] = [
            r.AuthType.NICKNAME_AND_AVATAR,
          ]),
          (u[r.AuthPopType.PROTOCOL] = [r.AuthType.PROTOCOL]),
          (u[r.AuthPopType.FILL_YZ_AUTH] = [r.AuthType.MOBILE]),
          (u[r.AuthPopType.YZ_AUTH] = [
            r.AuthType.MOBILE,
            r.AuthType.NICKNAME_AND_AVATAR,
          ]),
          (u[r.AuthPopType.EXTERNAL] = [
            r.AuthType.MOBILE,
            r.AuthType.PROTOCOL,
          ]),
          u);
      function i(t, n) {
        return (o[t] || []).filter(function (t) {
          return n.includes(t);
        });
      }
    },
    "0O1O": function (t, n) {},
    "29SX": function (t, n, e) {
      e.d(n, "a", function () {
        return i;
      });
      var u = e("9ZMt"),
        r = e("6QPe"),
        o = u.default.getEnv(),
        i = o === r.TeeEnvEnum.WEB;
      r.TeeEnvEnum.XHS;
    },
    "3evd": function (t, n, e) {
      var u = e("Rsht");
      e.o(u, "AuthPopType") &&
        e.d(n, "AuthPopType", function () {
          return u.AuthPopType;
        }),
        e.o(u, "AuthType") &&
          e.d(n, "AuthType", function () {
            return u.AuthType;
          });
    },
    "50TN": function (t, n, e) {
      e.d(n, "a", function () {
        return r;
      });
      var u = e("QxN7"),
        r = function (t) {
          if ("weapp" === u.teeEnv) {
            var n = getCurrentPages();
            return n[n.length - 1];
          }
          return t;
        };
    },
    "6QPe": function (t, n, e) {
      var u = e("L3rs");
      e.o(u, "AuthPopType") &&
        e.d(n, "AuthPopType", function () {
          return u.AuthPopType;
        }),
        e.o(u, "AuthType") &&
          e.d(n, "AuthType", function () {
            return u.AuthType;
          }),
        e.o(u, "TeeEnvEnum") &&
          e.d(n, "TeeEnvEnum", function () {
            return u.TeeEnvEnum;
          });
      var r = e("kLIn");
      e.o(r, "AuthPopType") &&
        e.d(n, "AuthPopType", function () {
          return r.AuthPopType;
        }),
        e.o(r, "AuthType") &&
          e.d(n, "AuthType", function () {
            return r.AuthType;
          }),
        e.o(r, "TeeEnvEnum") &&
          e.d(n, "TeeEnvEnum", function () {
            return r.TeeEnvEnum;
          });
      var o = e("ejDV");
      e.d(n, "TeeEnvEnum", function () {
        return o.a;
      });
      e("Tn0/");
      var i = e("VIei");
      e.o(i, "AuthPopType") &&
        e.d(n, "AuthPopType", function () {
          return i.AuthPopType;
        }),
        e.o(i, "AuthType") &&
          e.d(n, "AuthType", function () {
            return i.AuthType;
          });
      var a = e("AQ78");
      e.o(a, "AuthPopType") &&
        e.d(n, "AuthPopType", function () {
          return a.AuthPopType;
        }),
        e.o(a, "AuthType") &&
          e.d(n, "AuthType", function () {
            return a.AuthType;
          });
      var c = e("3evd");
      e.o(c, "AuthPopType") &&
        e.d(n, "AuthPopType", function () {
          return c.AuthPopType;
        }),
        e.o(c, "AuthType") &&
          e.d(n, "AuthType", function () {
            return c.AuthType;
          });
    },
    "79as": function (t, n, e) {
      e.d(n, "a", function () {
        return u;
      });
      var u = {
        props: {
          id: String,
          lang: String,
          businessId: Number,
          sessionFrom: String,
          sendMessageTitle: String,
          sendMessagePath: String,
          sendMessageImg: String,
          showMessageCard: Boolean,
          appParameter: String,
          ariaLabel: String,
        },
      };
    },
    "9gzi": function (t, n) {},
    AQ78: function (t, n) {},
    "Bb/O": function (t, n, e) {
      function u(t, n) {
        for (var e = -1, u = Array.from({ length: t < 0 ? 0 : t }); ++e < t; )
          u[e] = n(e);
        return u;
      }
      function r(t) {
        if (t) {
          for (; isNaN(parseInt(t, 10)); ) t = t.slice(1);
          return parseInt(t, 10);
        }
      }
      function o(t, n) {
        return 32 - new Date(t, n - 1, 32).getDate();
      }
      e.d(n, "c", function () {
        return u;
      }),
        e.d(n, "b", function () {
          return r;
        }),
        e.d(n, "a", function () {
          return o;
        });
    },
    DvQs: function (t, n, e) {
      function u(t) {
        t.target.composing = !0;
      }
      function r(t) {
        var { target: n } = t;
        n.composing &&
          ((n.composing = !1),
          (function (t, n) {
            var e = window.document.createEvent("HTMLEvents");
            e.initEvent(n, !0, !0), t.dispatchEvent(e);
          })(n, "input"));
      }
      e.d(n, "b", function () {
        return u;
      }),
        e.d(n, "a", function () {
          return r;
        });
    },
    GEF7: function (t, n, e) {
      var u;
      function r() {
        return (
          u ||
            (u = e
              .e("packages/async-tee/chunk")
              .then(e.bind(null, "JvWB"))
              .then(function (t) {
                return t.default;
              })
              .catch(function (t) {
                throw ((u = null), t);
              })),
          u
        );
      }
      e.d(n, "a", function () {
        return r;
      });
    },
    Gy0k: function (t, n, e) {
      e.d(n, "a", function () {
        return u;
      });
      var u = ["avatar-class", "title-class", "row-class"];
    },
    Kkd4: function (t, n, e) {
      n.a = {
        behaviorVerify: function (t) {
          return new Promise(function (n) {
            e.e("packages/async-main/chunk")
              .then(e.bind(null, "9RNk"))
              .then(function (e) {
                (0, e.behaviorVerify)({ bizType: t, onSuccess: n });
              });
          });
        },
      };
    },
    L3rs: function (t, n, e) {
      var u = e("tvnZ");
      e.o(u, "AuthPopType") &&
        e.d(n, "AuthPopType", function () {
          return u.AuthPopType;
        }),
        e.o(u, "AuthType") &&
          e.d(n, "AuthType", function () {
            return u.AuthType;
          }),
        e.o(u, "TeeEnvEnum") &&
          e.d(n, "TeeEnvEnum", function () {
            return u.TeeEnvEnum;
          });
      var r = e("k0GB");
      e.o(r, "AuthPopType") &&
        e.d(n, "AuthPopType", function () {
          return r.AuthPopType;
        }),
        e.o(r, "AuthType") &&
          e.d(n, "AuthType", function () {
            return r.AuthType;
          }),
        e.o(r, "TeeEnvEnum") &&
          e.d(n, "TeeEnvEnum", function () {
            return r.TeeEnvEnum;
          });
    },
    N4qH: function (t, n, e) {
      e.d(n, "a", function () {
        return u;
      }),
        e.d(n, "f", function () {
          return r;
        }),
        e.d(n, "d", function () {
          return o;
        }),
        e.d(n, "c", function () {
          return i;
        }),
        e.d(n, "g", function () {
          return a;
        }),
        e.d(n, "k", function () {
          return c;
        }),
        e.d(n, "j", function () {
          return s;
        }),
        e.d(n, "b", function () {
          return f;
        }),
        e.d(n, "e", function () {
          return p;
        }),
        e.d(n, "h", function () {
          return h;
        }),
        e.d(n, "i", function () {
          return d;
        });
      var u = "64";
      function r(t) {
        return (
          t instanceof Date || (t = new Date(Number(t))),
          t.getFullYear() + "年" + (t.getMonth() + 1) + "月"
        );
      }
      function o(t, n) {
        t instanceof Date || (t = new Date(t)),
          n instanceof Date || (n = new Date(n));
        var e = t.getFullYear(),
          u = n.getFullYear(),
          r = t.getMonth(),
          o = n.getMonth();
        return e === u ? (r === o ? 0 : r > o ? 1 : -1) : e > u ? 1 : -1;
      }
      function i(t, n) {
        t instanceof Date || (t = new Date(t)),
          n instanceof Date || (n = new Date(n));
        var e = o(t, n);
        if (0 === e) {
          var u = t.getDate(),
            r = n.getDate();
          return u === r ? 0 : u > r ? 1 : -1;
        }
        return e;
      }
      function a(t, n) {
        return (t = new Date(t)).setDate(t.getDate() + n), t;
      }
      function c(t) {
        return a(t, -1);
      }
      function s(t) {
        return a(t, 1);
      }
      function f(t) {
        var n = new Date(t[0]).getTime();
        return (new Date(t[1]).getTime() - n) / 864e5 + 1;
      }
      function p(t) {
        return Array.isArray(t)
          ? t.map((t) => (null === t ? t : new Date(t)))
          : new Date(t);
      }
      function h(t, n) {
        return 32 - new Date(t, n - 1, 32).getDate();
      }
      function d(t, n) {
        var e = [],
          u = new Date(t);
        u.setDate(1);
        do {
          e.push(u.getTime()), u.setMonth(u.getMonth() + 1);
        } while (1 !== o(u, n));
        return e;
      }
    },
    "P/w+": function (t, n, e) {
      e.d(n, "a", function () {
        return i;
      });
      var u = e("bb6g"),
        r = e("QxN7"),
        o = function (t, n) {
          var e,
            o,
            i = n || {},
            a = i.data,
            c = i.query,
            s = i.method;
          return (
            (e = {
              method: s || "GET",
              origin: "uic",
              path: t,
              query: c,
              data: a,
              withCredentials: !0,
            }),
            (o = Object(u.__assign)(Object(u.__assign)({}, e), {
              header: Object(u.__assign)(
                { ppt: JSON.stringify({ cmp: "tee" }) },
                e.header
              ),
            })),
            Object(r.baseRequest)(o)
          );
        },
        i = function (t) {
          return t.ticket
            ? o("/passport/api/login-dialog/sms.json", {
                method: "POST",
                data: t,
              })
            : o("/passport/general/sms/for/login.json", {
                method: "POST",
                data: t,
              });
        };
    },
    "RK+6": function (t, n) {},
    Rcrr: function (t, n, e) {
      var u;
      !(function (t) {
        (t[(t.Unknown = 0)] = "Unknown"),
          (t[(t.Male = 1)] = "Male"),
          (t[(t.Female = 2)] = "Female");
      })(u || (u = {}));
    },
    Rsht: function (t, n) {},
    St5l: function (t, n, e) {
      e.d(n, "a", function () {
        return u;
      });
      var u = {
        title: String,
        loading: Boolean,
        showToolbar: Boolean,
        cancelButtonText: { type: String, default: "取消" },
        confirmButtonText: { type: String, default: "确认" },
        confirmButtonStyle: { type: String, default: "" },
        visibleItemCount: { type: Number, default: 6 },
        itemHeight: { type: Number, default: 44 },
      };
    },
    StxY: function (t, n, e) {
      e.d(n, "a", function () {
        return u;
      });
      var u = 135000049;
    },
    TZRF: function (t, n, e) {
      e.d(n, "a", function () {
        return u;
      });
      var u = {
        data: () => ({ direction: "" }),
        methods: {
          touchStart(t) {
            this.resetTouchStatus(),
              (this.startX = t.touches[0].clientX),
              (this.startY = t.touches[0].clientY);
          },
          touchMove(t) {
            var n,
              e,
              u = t.touches[0];
            (this.deltaX = u.clientX - this.startX),
              (this.deltaY = u.clientY - this.startY),
              (this.offsetX = Math.abs(this.deltaX)),
              (this.offsetY = Math.abs(this.deltaY)),
              (this.direction =
                this.direction ||
                ((n = this.offsetX),
                (e = this.offsetY),
                n > e && n > 10
                  ? "horizontal"
                  : e > n && e > 10
                  ? "vertical"
                  : ""));
          },
          resetTouchStatus() {
            (this.direction = ""),
              (this.deltaX = 0),
              (this.deltaY = 0),
              (this.offsetX = 0),
              (this.offsetY = 0);
          },
        },
      };
    },
    "Tn0/": function (t, n, e) {
      var u, r;
      !(function (t) {
        (t[(t.UN_SIGN = 0)] = "UN_SIGN"),
          (t[(t.SIGN = 1)] = "SIGN"),
          (t[(t.FREEZE = 2)] = "FREEZE"),
          (t[(t.INVALID = 3)] = "INVALID");
      })(u || (u = {})),
        (function (t) {
          (t.INIT = "init"),
            (t.AUTH = "auth"),
            (t.SHOW = "show"),
            (t.SHOW_BEFORE = "show-before"),
            (t.SHOW_AFTER = "show-after"),
            (t.CLOSE = "close"),
            (t.HIDE_AFTER = "hide-after"),
            (t.AGREE = "agree"),
            (t.DISAGREE = "disagree"),
            (t.DESTROYED = "destroyed");
        })(r || (r = {}));
    },
    VIei: function (t, n, e) {
      var u = e("nXPc");
      e.d(n, "AuthPopType", function () {
        return u.a;
      }),
        e.d(n, "AuthType", function () {
          return u.b;
        });
      e("jwzw"), e("RK+6"), e("Rcrr"), e("xKRo");
    },
    VUUy: function (t, n, e) {
      e.d(n, "a", function () {
        return u;
      }),
        e.d(n, "b", function () {
          return r;
        }),
        e.d(n, "c", function () {
          return o;
        });
      var u = {
          value: String,
          placeholder: String,
          placeholderStyle: String,
          disabled: Boolean,
          maxlength: { type: Number, default: 140 },
          cursorSpacing: { type: Number, default: 50 },
          autoFocus: Boolean,
          focus: Boolean,
          cursor: { type: Number, default: -1 },
          selectionStart: { type: Number, default: -1 },
          selectionEnd: { type: Number, default: -1 },
          adjustPosition: { type: Boolean, default: !0 },
          holdKeyboard: Boolean,
          enableNative: Boolean,
        },
        r = {
          type: { type: String, default: "text" },
          password: Boolean,
          confirmType: String,
          confirmHold: Boolean,
          alwaysEmbed: Boolean,
        },
        o = {
          autoHeight: Boolean,
          fixed: Boolean,
          showConfirmBar: { type: Boolean, default: !0 },
          disableDefaultPadding: { type: Boolean, default: !0 },
        };
    },
    XZD8: function (t, n, e) {
      var u = e("Tewj"),
        r = e("Xdhg"),
        o = e("pTxV"),
        i = e("50TN"),
        a = (function () {
          function t(t, n, e) {
            (this.vm = t),
              (this.path = n),
              (this.isSeparated = e),
              (this.offEventHandler = []),
              this.init();
          }
          return (
            (t.prototype.init = function () {
              this.isSeparated &&
                (this.id = r.a.register(
                  o.EventRegisterType.POPUP,
                  this.path,
                  Object(i.a)(this.vm.$root)
                ));
            }),
            (t.prototype.destroyed = function () {
              this.id &&
                r.a.remove(
                  o.EventRegisterType.POPUP,
                  this.id,
                  Object(i.a)(this.vm.$root)
                ),
                this.offEventHandler.forEach(function (t) {
                  return t();
                });
            }),
            (t.prototype.onMainTrigger = function (t) {
              var n = this;
              if (this.id && this.isSeparated) {
                var e = function (e) {
                  var u = e.type,
                    r = e.data,
                    o = e.callback;
                  e.popupId === n.id &&
                    ((n.callbackMap = o), t({ type: u, data: r, callback: o }));
                };
                u.default.on(o.EventName.POPUP_TRIGGER, e),
                  this.offEventHandler.push(function () {
                    return u.default.off(o.EventName.POPUP_TRIGGER, e);
                  });
              }
            }),
            (t.prototype.callbackToMain = function (t, n) {
              if (this.isSeparated) {
                var e = this.callbackMap && this.callbackMap[t];
                e && e(n);
              } else this.vm.$emit(t, n);
            }),
            t
          );
        })();
      n.a = a;
    },
    ejDV: function (t, n, e) {
      var u;
      e.d(n, "a", function () {
        return u;
      }),
        (function (t) {
          (t.WEB = "web"), (t.XHS = "xhs");
        })(u || (u = {}));
    },
    iA4I: function (t, n, e) {
      n.a = {
        behaviorVerify: function (t) {
          return new Promise(function (n) {
            e.e("packages/async-main/chunk")
              .then(e.bind(null, "9RNk"))
              .then(function (e) {
                (0, e.behaviorVerify)({ bizType: t, onSuccess: n });
              });
          });
        },
      };
    },
    icdD: function (t, n, e) {
      e.d(n, "a", function () {
        return u;
      });
      var u = {
        props: { openType: String },
        methods: {
          bindGetUserInfo(t) {
            this.$emit("getuserinfo", t);
          },
          bindContact(t) {
            this.$emit("contact", t);
          },
          bindGetPhoneNumber(t) {
            this.$emit("getphonenumber", t);
          },
          bindError(t) {
            this.$emit("error", t);
          },
          bindLaunchApp(t) {
            this.$emit("launchapp", t);
          },
          bindOpenSetting(t) {
            this.$emit("opensetting", t);
          },
        },
      };
    },
    jwzw: function (t, n, e) {
      var u;
      !(function (t) {
        (t.RETRY = "manual-retry"), (t.AUTORETRY = "auto-retry");
      })(u || (u = {}));
    },
    k0GB: function (t, n) {},
    kLIn: function (t, n, e) {
      var u = e("0O1O");
      e.o(u, "AuthPopType") &&
        e.d(n, "AuthPopType", function () {
          return u.AuthPopType;
        }),
        e.o(u, "AuthType") &&
          e.d(n, "AuthType", function () {
            return u.AuthType;
          }),
        e.o(u, "TeeEnvEnum") &&
          e.d(n, "TeeEnvEnum", function () {
            return u.TeeEnvEnum;
          });
      var r = e("9gzi");
      e.o(r, "AuthPopType") &&
        e.d(n, "AuthPopType", function () {
          return r.AuthPopType;
        }),
        e.o(r, "AuthType") &&
          e.d(n, "AuthType", function () {
            return r.AuthType;
          }),
        e.o(r, "TeeEnvEnum") &&
          e.d(n, "TeeEnvEnum", function () {
            return r.TeeEnvEnum;
          });
    },
    nXPc: function (t, n, e) {
      var u, r, o, i, a;
      e.d(n, "b", function () {
        return u;
      }),
        e.d(n, "a", function () {
          return o;
        }),
        (function (t) {
          (t.MOBILE = "mobile"),
            (t.NICKNAME_AND_AVATAR = "nicknameAndAvatar"),
            (t.PROTOCOL = "protocol");
        })(u || (u = {})),
        (function (t) {
          (t.MOBILE = "mobile"),
            (t.NICKNAME_AND_AVATAR = "nicknameAndAvatar"),
            (t.PROTOCOL = "protocol");
        })(r || (r = {})),
        (function (t) {
          (t.MOBILE = "mobile"),
            (t.NICKNAME_AND_AVATAR = "nicknameAndAvatar"),
            (t.FILL_NICKNAME_AND_AVATAR = "fillNicknameAndAvatar"),
            (t.PROTOCOL = "protocol"),
            (t.YZ_AUTH = "yzAuth"),
            (t.FILL_YZ_AUTH = "fillYzAuth"),
            (t.EXTERNAL = "external");
        })(o || (o = {})),
        (function (t) {
          (t.MOBILE = "mobile"),
            (t.NICKNAME_AND_AVATAR = "nicknameAndAvatar"),
            (t.FILL_NICKNAME_AND_AVATAR = "fillNicknameAndAvatar"),
            (t.PROTOCOL = "protocol"),
            (t.YZ_AUTH = "yzAuth"),
            (t.FILL_YZ_AUTH = "fillYzAuth");
        })(i || (i = {})),
        (function (t) {
          (t.Agree = "agree"), (t.Disagree = "disagree");
        })(a || (a = {}));
    },
    tvnZ: function (t, n) {},
    xKRo: function (t, n) {},
    "y/IX": function (t, n, e) {
      e.d(n, "a", function () {
        return r;
      });
      var u = e("mQt2");
      function r(t, n) {
        return !t || (t.errMsg && -1 !== t.errMsg.indexOf("deny"))
          ? Promise.reject()
          : Object(u.a)().then(function (e) {
              return e.saveUserInfo(t, !0, n).then(function () {
                return t.userInfo;
              });
            });
      }
    },
  });
