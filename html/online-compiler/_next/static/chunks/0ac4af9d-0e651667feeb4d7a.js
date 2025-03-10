(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [168], {
      3229: function (t) {
        var e;
        e = function () {
          return function (t) {
            var e = {};
  
            function n(r) {
              if (e[r]) return e[r].exports;
              var i = e[r] = {
                exports: {},
                id: r,
                loaded: !1
              };
              return t[r].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
            }
            return n.m = t, n.c = e, n.p = "", n(0)
          }([function (t, e, n) {
            (function (t, r, i, o) {
              "use strict";
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var s, a = n(2),
                c = n(9);
              ! function (t) {
                t[t.EPERM = 1] = "EPERM", t[t.ENOENT = 2] = "ENOENT", t[t.EIO = 5] = "EIO", t[t.EBADF = 9] = "EBADF", t[t.EACCES = 13] = "EACCES", t[t.EBUSY = 16] = "EBUSY", t[t.EEXIST = 17] = "EEXIST", t[t.ENOTDIR = 20] = "ENOTDIR", t[t.EISDIR = 21] = "EISDIR", t[t.EINVAL = 22] = "EINVAL", t[t.EFBIG = 27] = "EFBIG", t[t.ENOSPC = 28] = "ENOSPC", t[t.EROFS = 30] = "EROFS", t[t.ENOTEMPTY = 39] = "ENOTEMPTY", t[t.ENOTSUP = 95] = "ENOTSUP"
              }(s || (s = {}));
              var u = {};
              u[s.EPERM] = "Operation not permitted.", u[s.ENOENT] = "No such file or directory.", u[s.EIO] = "Input/output error.", u[s.EBADF] = "Bad file descriptor.", u[s.EACCES] = "Permission denied.", u[s.EBUSY] = "Resource busy or locked.", u[s.EEXIST] = "File exists.", u[s.ENOTDIR] = "File is not a directory.", u[s.EISDIR] = "File is a directory.", u[s.EINVAL] = "Invalid argument.", u[s.EFBIG] = "File is too big.", u[s.ENOSPC] = "No space left on disk.", u[s.EROFS] = "Cannot modify a read-only file system.", u[s.ENOTEMPTY] = "Directory is not empty.", u[s.ENOTSUP] = "Operation is not supported.";
              var f, h = function (e) {
                  function n(t, n, r) {
                    void 0 === n && (n = u[t]), e.call(this, n), this.syscall = "", this.errno = t, this.code = s[t], this.path = r, this.stack = (new e).stack, this.message = "Error: " + this.code + ": " + n + (this.path ? ", '" + this.path + "'" : "")
                  }
                  return e && (n.__proto__ = e), n.prototype = Object.create(e && e.prototype), n.prototype.constructor = n, n.fromJSON = function (t) {
                    var e = new n(0);
                    return e.errno = t.errno, e.code = t.code, e.path = t.path, e.stack = t.stack, e.message = t.message, e
                  }, n.fromBuffer = function (t, e) {
                    return void 0 === e && (e = 0), n.fromJSON(JSON.parse(t.toString("utf8", e + 4, e + 4 + t.readUInt32LE(e))))
                  }, n.FileError = function (t, e) {
                    return new n(t, u[t], e)
                  }, n.ENOENT = function (t) {
                    return this.FileError(s.ENOENT, t)
                  }, n.EEXIST = function (t) {
                    return this.FileError(s.EEXIST, t)
                  }, n.EISDIR = function (t) {
                    return this.FileError(s.EISDIR, t)
                  }, n.ENOTDIR = function (t) {
                    return this.FileError(s.ENOTDIR, t)
                  }, n.EPERM = function (t) {
                    return this.FileError(s.EPERM, t)
                  }, n.ENOTEMPTY = function (t) {
                    return this.FileError(s.ENOTEMPTY, t)
                  }, n.prototype.toString = function () {
                    return this.message
                  }, n.prototype.toJSON = function () {
                    return {
                      errno: this.errno,
                      code: this.code,
                      path: this.path,
                      stack: this.stack,
                      message: this.message
                    }
                  }, n.prototype.writeToBuffer = function (e, n) {
                    void 0 === e && (e = t.alloc(this.bufferSize())), void 0 === n && (n = 0);
                    var r = e.write(JSON.stringify(this.toJSON()), n + 4);
                    return e.writeUInt32LE(r, n), e
                  }, n.prototype.bufferSize = function () {
                    return 4 + t.byteLength(JSON.stringify(this.toJSON()))
                  }, n
                }(Error),
                p = Object.freeze({
                  get ErrorCode() {
                    return s
                  },
                  ErrorStrings: u,
                  ApiError: h
                });
              ! function (t) {
                t[t.NOP = 0] = "NOP", t[t.THROW_EXCEPTION = 1] = "THROW_EXCEPTION", t[t.TRUNCATE_FILE = 2] = "TRUNCATE_FILE", t[t.CREATE_FILE = 3] = "CREATE_FILE"
              }(f || (f = {}));
              var l, d = function t(e) {
                if (this.flagStr = e, t.validFlagStrs.indexOf(e) < 0) throw new h(s.EINVAL, "Invalid flag: " + e)
              };
              d.getFileFlag = function (t) {
                  return d.flagCache.hasOwnProperty(t) ? d.flagCache[t] : d.flagCache[t] = new d(t)
                }, d.prototype.getFlagString = function () {
                  return this.flagStr
                }, d.prototype.isReadable = function () {
                  return -1 !== this.flagStr.indexOf("r") || -1 !== this.flagStr.indexOf("+")
                }, d.prototype.isWriteable = function () {
                  return -1 !== this.flagStr.indexOf("w") || -1 !== this.flagStr.indexOf("a") || -1 !== this.flagStr.indexOf("+")
                }, d.prototype.isTruncating = function () {
                  return -1 !== this.flagStr.indexOf("w")
                }, d.prototype.isAppendable = function () {
                  return -1 !== this.flagStr.indexOf("a")
                }, d.prototype.isSynchronous = function () {
                  return -1 !== this.flagStr.indexOf("s")
                }, d.prototype.isExclusive = function () {
                  return -1 !== this.flagStr.indexOf("x")
                }, d.prototype.pathExistsAction = function () {
                  return this.isExclusive() ? f.THROW_EXCEPTION : this.isTruncating() ? f.TRUNCATE_FILE : f.NOP
                }, d.prototype.pathNotExistsAction = function () {
                  return (this.isWriteable() || this.isAppendable()) && "r+" !== this.flagStr ? f.CREATE_FILE : f.THROW_EXCEPTION
                }, d.flagCache = {}, d.validFlagStrs = ["r", "r+", "rs", "rs+", "w", "wx", "w+", "wx+", "a", "ax", "a+", "ax+"],
                function (t) {
                  t[t.FILE = 32768] = "FILE", t[t.DIRECTORY = 16384] = "DIRECTORY", t[t.SYMLINK = 40960] = "SYMLINK"
                }(l || (l = {}));
              var y = function (t, e, n, r, i, o) {
                if (void 0 === r && (r = new Date), void 0 === i && (i = new Date), void 0 === o && (o = new Date), this.size = e, this.atime = r, this.mtime = i, this.ctime = o, this.dev = 0, this.ino = 0, this.rdev = 0, this.nlink = 1, this.blksize = 4096, this.uid = 0, this.gid = 0, this.birthtime = new Date(0), this.fileData = null, n) this.mode = n;
                else switch (t) {
                  case l.FILE:
                    this.mode = 420;
                    break;
                  case l.DIRECTORY:
                  default:
                    this.mode = 511
                }
                this.blocks = Math.ceil(e / 512), this.mode < 4096 && (this.mode |= t)
              };
              y.fromBuffer = function (t) {
                var e = t.readUInt32LE(0),
                  n = t.readUInt32LE(4),
                  r = t.readDoubleLE(8),
                  i = t.readDoubleLE(16),
                  o = t.readDoubleLE(24);
                return new y(61440 & n, e, 4095 & n, new Date(r), new Date(i), new Date(o))
              }, y.prototype.toBuffer = function () {
                var e = t.alloc(32);
                return e.writeUInt32LE(this.size, 0), e.writeUInt32LE(this.mode, 4), e.writeDoubleLE(this.atime.getTime(), 8), e.writeDoubleLE(this.mtime.getTime(), 16), e.writeDoubleLE(this.ctime.getTime(), 24), e
              }, y.prototype.clone = function () {
                return new y(61440 & this.mode, this.size, 4095 & this.mode, this.atime, this.mtime, this.ctime)
              }, y.prototype.isFile = function () {
                return (61440 & this.mode) === l.FILE
              }, y.prototype.isDirectory = function () {
                return (61440 & this.mode) === l.DIRECTORY
              }, y.prototype.isSymbolicLink = function () {
                return (61440 & this.mode) === l.SYMLINK
              }, y.prototype.chmod = function (t) {
                this.mode = 61440 & this.mode | t
              }, y.prototype.isSocket = function () {
                return !1
              }, y.prototype.isBlockDevice = function () {
                return !1
              }, y.prototype.isCharacterDevice = function () {
                return !1
              }, y.prototype.isFIFO = function () {
                return !1
              };
              var g = function (t, e) {
                return t
              };
  
              function m(t) {
                if (t) return t;
                throw new h(s.EIO, "Initialize BrowserFS with a file system using BrowserFS.initialize(filesystem)")
              }
  
              function _(t, e) {
                switch (typeof t) {
                  case "number":
                    return t;
                  case "string":
                    var n = parseInt(t, 8);
                    return isNaN(n) ? e : n;
                  default:
                    return e
                }
              }
  
              function v(t) {
                if (t instanceof Date) return t;
                if ("number" === typeof t) return new Date(1e3 * t);
                throw new h(s.EINVAL, "Invalid time.")
              }
  
              function w(t) {
                if (t.indexOf("\0") >= 0) throw new h(s.EINVAL, "Path must be a string without null bytes.");
                if ("" === t) throw new h(s.EINVAL, "Path must not be empty.");
                return c.resolve(t)
              }
  
              function E(t, e, n, r) {
                switch (typeof t) {
                  case "object":
                    return {
                      encoding: "undefined" !== typeof t.encoding ? t.encoding : e, flag: "undefined" !== typeof t.flag ? t.flag : n, mode: _(t.mode, r)
                    };
                  case "string":
                    return {
                      encoding: t, flag: n, mode: r
                    };
                  default:
                    return {
                      encoding: e, flag: n, mode: r
                    }
                }
              }
  
              function b() {}
              var S = function () {
                this.F_OK = 0, this.R_OK = 4, this.W_OK = 2, this.X_OK = 1, this.root = null, this.fdMap = {}, this.nextFd = 100
              };
              S.prototype.initialize = function (t) {
                if (!t.constructor.isAvailable()) throw new h(s.EINVAL, "Tried to instantiate BrowserFS with an unavailable file system.");
                return this.root = t
              }, S.prototype._toUnixTimestamp = function (t) {
                if ("number" === typeof t) return t;
                if (t instanceof Date) return t.getTime() / 1e3;
                throw new Error("Cannot parse time: " + t)
              }, S.prototype.getRootFS = function () {
                return this.root ? this.root : null
              }, S.prototype.rename = function (t, e, n) {
                void 0 === n && (n = b);
                var r = g(n, 1);
                try {
                  m(this.root).rename(w(t), w(e), r)
                } catch (i) {
                  r(i)
                }
              }, S.prototype.renameSync = function (t, e) {
                m(this.root).renameSync(w(t), w(e))
              }, S.prototype.exists = function (t, e) {
                void 0 === e && (e = b);
                var n = g(e, 1);
                try {
                  return m(this.root).exists(w(t), n)
                } catch (r) {
                  return n(!1)
                }
              }, S.prototype.existsSync = function (t) {
                try {
                  return m(this.root).existsSync(w(t))
                } catch (e) {
                  return !1
                }
              }, S.prototype.stat = function (t, e) {
                void 0 === e && (e = b);
                var n = g(e, 2);
                try {
                  return m(this.root).stat(w(t), !1, n)
                } catch (r) {
                  return n(r)
                }
              }, S.prototype.statSync = function (t) {
                return m(this.root).statSync(w(t), !1)
              }, S.prototype.lstat = function (t, e) {
                void 0 === e && (e = b);
                var n = g(e, 2);
                try {
                  return m(this.root).stat(w(t), !0, n)
                } catch (r) {
                  return n(r)
                }
              }, S.prototype.lstatSync = function (t) {
                return m(this.root).statSync(w(t), !0)
              }, S.prototype.truncate = function (t, e, n) {
                void 0 === e && (e = 0), void 0 === n && (n = b);
                var r = 0;
                "function" === typeof e ? n = e : "number" === typeof e && (r = e);
                var i = g(n, 1);
                try {
                  if (r < 0) throw new h(s.EINVAL);
                  return m(this.root).truncate(w(t), r, i)
                } catch (o) {
                  return i(o)
                }
              }, S.prototype.truncateSync = function (t, e) {
                if (void 0 === e && (e = 0), e < 0) throw new h(s.EINVAL);
                return m(this.root).truncateSync(w(t), e)
              }, S.prototype.unlink = function (t, e) {
                void 0 === e && (e = b);
                var n = g(e, 1);
                try {
                  return m(this.root).unlink(w(t), n)
                } catch (r) {
                  return n(r)
                }
              }, S.prototype.unlinkSync = function (t) {
                return m(this.root).unlinkSync(w(t))
              }, S.prototype.open = function (t, e, n, r) {
                var i = this;
                void 0 === r && (r = b);
                var o = _(n, 420),
                  s = g(r = "function" === typeof n ? n : r, 2);
                try {
                  m(this.root).open(w(t), d.getFileFlag(e), o, (function (t, e) {
                    e ? s(t, i.getFdForFile(e)) : s(t)
                  }))
                } catch (a) {
                  s(a)
                }
              }, S.prototype.openSync = function (t, e, n) {
                return void 0 === n && (n = 420), this.getFdForFile(m(this.root).openSync(w(t), d.getFileFlag(e), _(n, 420)))
              }, S.prototype.readFile = function (t, e, n) {
                void 0 === e && (e = {}), void 0 === n && (n = b);
                var r = E(e, null, "r", null),
                  i = g(n = "function" === typeof e ? e : n, 2);
                try {
                  var o = d.getFileFlag(r.flag);
                  return o.isReadable() ? m(this.root).readFile(w(t), r.encoding, o, i) : i(new h(s.EINVAL, "Flag passed to readFile must allow for reading."))
                } catch (a) {
                  return i(a)
                }
              }, S.prototype.readFileSync = function (t, e) {
                void 0 === e && (e = {});
                var n = E(e, null, "r", null),
                  r = d.getFileFlag(n.flag);
                if (!r.isReadable()) throw new h(s.EINVAL, "Flag passed to readFile must allow for reading.");
                return m(this.root).readFileSync(w(t), n.encoding, r)
              }, S.prototype.writeFile = function (t, e, n, r) {
                void 0 === n && (n = {}), void 0 === r && (r = b);
                var i = E(n, "utf8", "w", 420),
                  o = g(r = "function" === typeof n ? n : r, 1);
                try {
                  var a = d.getFileFlag(i.flag);
                  return a.isWriteable() ? m(this.root).writeFile(w(t), e, i.encoding, a, i.mode, o) : o(new h(s.EINVAL, "Flag passed to writeFile must allow for writing."))
                } catch (c) {
                  return o(c)
                }
              }, S.prototype.writeFileSync = function (t, e, n) {
                var r = E(n, "utf8", "w", 420),
                  i = d.getFileFlag(r.flag);
                if (!i.isWriteable()) throw new h(s.EINVAL, "Flag passed to writeFile must allow for writing.");
                return m(this.root).writeFileSync(w(t), e, r.encoding, i, r.mode)
              }, S.prototype.appendFile = function (t, e, n, r) {
                void 0 === r && (r = b);
                var i = E(n, "utf8", "a", 420),
                  o = g(r = "function" === typeof n ? n : r, 1);
                try {
                  var a = d.getFileFlag(i.flag);
                  if (!a.isAppendable()) return o(new h(s.EINVAL, "Flag passed to appendFile must allow for appending."));
                  m(this.root).appendFile(w(t), e, i.encoding, a, i.mode, o)
                } catch (c) {
                  o(c)
                }
              }, S.prototype.appendFileSync = function (t, e, n) {
                var r = E(n, "utf8", "a", 420),
                  i = d.getFileFlag(r.flag);
                if (!i.isAppendable()) throw new h(s.EINVAL, "Flag passed to appendFile must allow for appending.");
                return m(this.root).appendFileSync(w(t), e, r.encoding, i, r.mode)
              }, S.prototype.fstat = function (t, e) {
                void 0 === e && (e = b);
                var n = g(e, 2);
                try {
                  this.fd2file(t).stat(n)
                } catch (r) {
                  n(r)
                }
              }, S.prototype.fstatSync = function (t) {
                return this.fd2file(t).statSync()
              }, S.prototype.close = function (t, e) {
                var n = this;
                void 0 === e && (e = b);
                var r = g(e, 1);
                try {
                  this.fd2file(t).close((function (e) {
                    e || n.closeFd(t), r(e)
                  }))
                } catch (i) {
                  r(i)
                }
              }, S.prototype.closeSync = function (t) {
                this.fd2file(t).closeSync(), this.closeFd(t)
              }, S.prototype.ftruncate = function (t, e, n) {
                void 0 === n && (n = b);
                var r = "number" === typeof e ? e : 0,
                  i = g(n = "function" === typeof e ? e : n, 1);
                try {
                  var o = this.fd2file(t);
                  if (r < 0) throw new h(s.EINVAL);
                  o.truncate(r, i)
                } catch (a) {
                  i(a)
                }
              }, S.prototype.ftruncateSync = function (t, e) {
                void 0 === e && (e = 0);
                var n = this.fd2file(t);
                if (e < 0) throw new h(s.EINVAL);
                n.truncateSync(e)
              }, S.prototype.fsync = function (t, e) {
                void 0 === e && (e = b);
                var n = g(e, 1);
                try {
                  this.fd2file(t).sync(n)
                } catch (r) {
                  n(r)
                }
              }, S.prototype.fsyncSync = function (t) {
                this.fd2file(t).syncSync()
              }, S.prototype.fdatasync = function (t, e) {
                void 0 === e && (e = b);
                var n = g(e, 1);
                try {
                  this.fd2file(t).datasync(n)
                } catch (r) {
                  n(r)
                }
              }, S.prototype.fdatasyncSync = function (t) {
                this.fd2file(t).datasyncSync()
              }, S.prototype.write = function (e, n, r, i, o, a) {
                void 0 === a && (a = b);
                var c, u, f, p = null;
                if ("string" === typeof n) {
                  var l = "utf8";
                  switch (typeof r) {
                    case "function":
                      a = r;
                      break;
                    case "number":
                      p = r, l = "string" === typeof i ? i : "utf8", a = "function" === typeof o ? o : a;
                      break;
                    default:
                      return (a = "function" === typeof i ? i : "function" === typeof o ? o : a)(new h(s.EINVAL, "Invalid arguments."))
                  }
                  u = 0, f = (c = t.from(n, l)).length
                } else c = n, u = r, f = i, p = "number" === typeof o ? o : null, a = "function" === typeof o ? o : a;
                var d = g(a, 3);
                try {
                  var y = this.fd2file(e);
                  void 0 !== p && null !== p || (p = y.getPos()), y.write(c, u, f, p, d)
                } catch (m) {
                  d(m)
                }
              }, S.prototype.writeSync = function (e, n, r, i, o) {
                var s, a, c, u = 0;
                if ("string" === typeof n) {
                  c = "number" === typeof r ? r : null;
                  var f = "string" === typeof i ? i : "utf8";
                  u = 0, a = (s = t.from(n, f)).length
                } else s = n, u = r, a = i, c = "number" === typeof o ? o : null;
                var h = this.fd2file(e);
                return void 0 !== c && null !== c || (c = h.getPos()), h.writeSync(s, u, a, c)
              }, S.prototype.read = function (e, n, r, i, o, s) {
                var a, c, u, f, h;
                if (void 0 === s && (s = b), "number" === typeof n) {
                  u = n, a = r;
                  var p = i;
                  s = "function" === typeof o ? o : s, c = 0, f = t.alloc(u), h = g((function (t, e, n) {
                    if (t) return s(t);
                    s(t, n.toString(p), e)
                  }), 3)
                } else f = n, c = r, u = i, a = o, h = g(s, 3);
                try {
                  var l = this.fd2file(e);
                  void 0 !== a && null !== a || (a = l.getPos()), l.read(f, c, u, a, h)
                } catch (d) {
                  h(d)
                }
              }, S.prototype.readSync = function (e, n, r, i, o) {
                var s, a, c, u, f = !1,
                  h = "utf8";
                "number" === typeof n ? (c = n, u = r, h = i, a = 0, s = t.alloc(c), f = !0) : (s = n, a = r, c = i, u = o);
                var p = this.fd2file(e);
                void 0 !== u && null !== u || (u = p.getPos());
                var l = p.readSync(s, a, c, u);
                return f ? [s.toString(h), l] : l
              }, S.prototype.fchown = function (t, e, n, r) {
                void 0 === r && (r = b);
                var i = g(r, 1);
                try {
                  this.fd2file(t).chown(e, n, i)
                } catch (o) {
                  i(o)
                }
              }, S.prototype.fchownSync = function (t, e, n) {
                this.fd2file(t).chownSync(e, n)
              }, S.prototype.fchmod = function (t, e, n) {
                var r = g(n, 1);
                try {
                  var i = "string" === typeof e ? parseInt(e, 8) : e;
                  this.fd2file(t).chmod(i, r)
                } catch (o) {
                  r(o)
                }
              }, S.prototype.fchmodSync = function (t, e) {
                var n = "string" === typeof e ? parseInt(e, 8) : e;
                this.fd2file(t).chmodSync(n)
              }, S.prototype.futimes = function (t, e, n, r) {
                void 0 === r && (r = b);
                var i = g(r, 1);
                try {
                  var o = this.fd2file(t);
                  "number" === typeof e && (e = new Date(1e3 * e)), "number" === typeof n && (n = new Date(1e3 * n)), o.utimes(e, n, i)
                } catch (s) {
                  i(s)
                }
              }, S.prototype.futimesSync = function (t, e, n) {
                this.fd2file(t).utimesSync(v(e), v(n))
              }, S.prototype.rmdir = function (t, e) {
                void 0 === e && (e = b);
                var n = g(e, 1);
                try {
                  t = w(t), m(this.root).rmdir(t, n)
                } catch (r) {
                  n(r)
                }
              }, S.prototype.rmdirSync = function (t) {
                return t = w(t), m(this.root).rmdirSync(t)
              }, S.prototype.mkdir = function (t, e, n) {
                void 0 === n && (n = b), "function" === typeof e && (n = e, e = 511);
                var r = g(n, 1);
                try {
                  t = w(t), m(this.root).mkdir(t, e, r)
                } catch (i) {
                  r(i)
                }
              }, S.prototype.mkdirSync = function (t, e) {
                m(this.root).mkdirSync(w(t), _(e, 511))
              }, S.prototype.readdir = function (t, e) {
                void 0 === e && (e = b);
                var n = g(e, 2);
                try {
                  t = w(t), m(this.root).readdir(t, n)
                } catch (r) {
                  n(r)
                }
              }, S.prototype.readdirSync = function (t) {
                return t = w(t), m(this.root).readdirSync(t)
              }, S.prototype.link = function (t, e, n) {
                void 0 === n && (n = b);
                var r = g(n, 1);
                try {
                  t = w(t), e = w(e), m(this.root).link(t, e, r)
                } catch (i) {
                  r(i)
                }
              }, S.prototype.linkSync = function (t, e) {
                return t = w(t), e = w(e), m(this.root).linkSync(t, e)
              }, S.prototype.symlink = function (t, e, n, r) {
                void 0 === r && (r = b);
                var i = "string" === typeof n ? n : "file",
                  o = g(r = "function" === typeof n ? n : r, 1);
                try {
                  if ("file" !== i && "dir" !== i) return o(new h(s.EINVAL, "Invalid type: " + i));
                  t = w(t), e = w(e), m(this.root).symlink(t, e, i, o)
                } catch (a) {
                  o(a)
                }
              }, S.prototype.symlinkSync = function (t, e, n) {
                if (n) {
                  if ("file" !== n && "dir" !== n) throw new h(s.EINVAL, "Invalid type: " + n)
                } else n = "file";
                return t = w(t), e = w(e), m(this.root).symlinkSync(t, e, n)
              }, S.prototype.readlink = function (t, e) {
                void 0 === e && (e = b);
                var n = g(e, 2);
                try {
                  t = w(t), m(this.root).readlink(t, n)
                } catch (r) {
                  n(r)
                }
              }, S.prototype.readlinkSync = function (t) {
                return t = w(t), m(this.root).readlinkSync(t)
              }, S.prototype.chown = function (t, e, n, r) {
                void 0 === r && (r = b);
                var i = g(r, 1);
                try {
                  t = w(t), m(this.root).chown(t, !1, e, n, i)
                } catch (o) {
                  i(o)
                }
              }, S.prototype.chownSync = function (t, e, n) {
                t = w(t), m(this.root).chownSync(t, !1, e, n)
              }, S.prototype.lchown = function (t, e, n, r) {
                void 0 === r && (r = b);
                var i = g(r, 1);
                try {
                  t = w(t), m(this.root).chown(t, !0, e, n, i)
                } catch (o) {
                  i(o)
                }
              }, S.prototype.lchownSync = function (t, e, n) {
                t = w(t), m(this.root).chownSync(t, !0, e, n)
              }, S.prototype.chmod = function (t, e, n) {
                void 0 === n && (n = b);
                var r = g(n, 1);
                try {
                  var i = _(e, -1);
                  if (i < 0) throw new h(s.EINVAL, "Invalid mode.");
                  m(this.root).chmod(w(t), !1, i, r)
                } catch (o) {
                  r(o)
                }
              }, S.prototype.chmodSync = function (t, e) {
                var n = _(e, -1);
                if (n < 0) throw new h(s.EINVAL, "Invalid mode.");
                t = w(t), m(this.root).chmodSync(t, !1, n)
              }, S.prototype.lchmod = function (t, e, n) {
                void 0 === n && (n = b);
                var r = g(n, 1);
                try {
                  var i = _(e, -1);
                  if (i < 0) throw new h(s.EINVAL, "Invalid mode.");
                  m(this.root).chmod(w(t), !0, i, r)
                } catch (o) {
                  r(o)
                }
              }, S.prototype.lchmodSync = function (t, e) {
                var n = _(e, -1);
                if (n < 1) throw new h(s.EINVAL, "Invalid mode.");
                m(this.root).chmodSync(w(t), !0, n)
              }, S.prototype.utimes = function (t, e, n, r) {
                void 0 === r && (r = b);
                var i = g(r, 1);
                try {
                  m(this.root).utimes(w(t), v(e), v(n), i)
                } catch (o) {
                  i(o)
                }
              }, S.prototype.utimesSync = function (t, e, n) {
                m(this.root).utimesSync(w(t), v(e), v(n))
              }, S.prototype.realpath = function (t, e, n) {
                void 0 === n && (n = b);
                var r = "object" === typeof e ? e : {},
                  i = g(n = "function" === typeof e ? e : b, 2);
                try {
                  t = w(t), m(this.root).realpath(t, r, i)
                } catch (o) {
                  i(o)
                }
              }, S.prototype.realpathSync = function (t, e) {
                return void 0 === e && (e = {}), t = w(t), m(this.root).realpathSync(t, e)
              }, S.prototype.watchFile = function (t, e, n) {
                throw void 0 === n && (n = b), new h(s.ENOTSUP)
              }, S.prototype.unwatchFile = function (t, e) {
                throw void 0 === e && (e = b), new h(s.ENOTSUP)
              }, S.prototype.watch = function (t, e, n) {
                throw void 0 === n && (n = b), new h(s.ENOTSUP)
              }, S.prototype.access = function (t, e, n) {
                throw void 0 === n && (n = b), new h(s.ENOTSUP)
              }, S.prototype.accessSync = function (t, e) {
                throw new h(s.ENOTSUP)
              }, S.prototype.createReadStream = function (t, e) {
                throw new h(s.ENOTSUP)
              }, S.prototype.createWriteStream = function (t, e) {
                throw new h(s.ENOTSUP)
              }, S.prototype.wrapCallbacks = function (t) {
                g = t
              }, S.prototype.getFdForFile = function (t) {
                var e = this.nextFd++;
                return this.fdMap[e] = t, e
              }, S.prototype.fd2file = function (t) {
                var e = this.fdMap[t];
                if (e) return e;
                throw new h(s.EBADF, "Invalid file descriptor.")
              }, S.prototype.closeFd = function (t) {
                delete this.fdMap[t]
              }, S.Stats = y;
              var k = new S,
                I = {},
                O = S.prototype;
  
              function F(t, e, n, r, i) {
                return t < e || n < e ? t > n ? n + 1 : t + 1 : r === i ? e : e + 1
              }
  
              function N(t, e) {
                if (t === e) return 0;
                if (t.length > e.length) {
                  var n = t;
                  t = e, e = n
                }
                for (var r = t.length, i = e.length; r > 0 && t.charCodeAt(r - 1) === e.charCodeAt(i - 1);) r--, i--;
                for (var o = 0; o < r && t.charCodeAt(o) === e.charCodeAt(o);) o++;
                if (i -= o, 0 === (r -= o) || 1 === i) return i;
                for (var s, a, c, u, f, h = new Array(r << 1), p = 0; p < r;) h[r + p] = t.charCodeAt(o + p), h[p] = ++p;
                for (s = 0; s + 3 < i;)
                  for (var l = e.charCodeAt(o + (a = s)), d = e.charCodeAt(o + (c = s + 1)), y = e.charCodeAt(o + (u = s + 2)), g = e.charCodeAt(o + (f = s + 3)), m = s += 4, _ = 0; _ < r;) {
                    var v = h[r + _],
                      w = h[_];
                    a = F(w, a, c, l, v), c = F(a, c, u, d, v), u = F(c, u, f, y, v), m = F(u, f, m, g, v), h[_++] = m, f = u, u = c, c = a, a = w
                  }
                for (var E = 0; s < i;) {
                  var b = e.charCodeAt(o + (a = s));
                  E = ++s;
                  for (var S = 0; S < r; S++) {
                    var k = h[S];
                    h[S] = E = k < a || E < a ? k > E ? E + 1 : k + 1 : b === h[r + S] ? a : a + 1, a = k
                  }
                }
                return E
              }
  
              function R(t, e, n) {
                t && console.warn("[" + e + "] Direct file system constructor usage is deprecated for this file system, and will be removed in the next major version. Please use the '" + e + ".Create(" + JSON.stringify(n) + ", callback)' method instead. See https://github.com/jvilk/BrowserFS/issues/176 for more details.")
              }
              Object.keys(O).forEach((function (t) {
                "function" === typeof k[t] ? I[t] = function () {
                  return k[t].apply(k, arguments)
                } : I[t] = k[t]
              })), I.changeFSModule = function (t) {
                k = t
              }, I.getFSModule = function () {
                return k
              }, I.FS = S;
              var L = "undefined" !== typeof navigator && !(!/(msie) ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) && -1 === navigator.userAgent.indexOf("Trident")),
                T = "undefined" === typeof window;
  
              function x() {
                throw new Error("BFS has reached an impossible code path; please file a bug.")
              }
  
              function A(t, e, n) {
                n.existsSync(t) || (A(c.dirname(t), e, n), n.mkdirSync(t, e))
              }
  
              function D(t) {
                var e = P(t),
                  n = e.byteOffset,
                  r = e.byteLength;
                return 0 === n && r === e.buffer.byteLength ? e.buffer : e.buffer.slice(n, n + r)
              }
  
              function P(t) {
                return t instanceof Uint8Array ? t : new Uint8Array(t)
              }
  
              function C(e) {
                return e instanceof t ? e : e instanceof Uint8Array ? U(e) : t.from(e)
              }
  
              function U(e) {
                return e instanceof t ? e : 0 === e.byteOffset && e.byteLength === e.buffer.byteLength ? M(e.buffer) : t.from(e.buffer, e.byteOffset, e.byteLength)
              }
  
              function M(e) {
                return t.from(e)
              }
  
              function j(t, e, n) {
                if (void 0 === e && (e = 0), void 0 === n && (n = t.length), e < 0 || n < 0 || n > t.length || e > n) throw new TypeError("Invalid slice bounds on buffer of length " + t.length + ": [" + e + ", " + n + "]");
                if (0 === t.length) return z();
                var r = P(t),
                  i = t[0],
                  o = (i + 1) % 255;
                return t[0] = o, r[0] === o ? (r[0] = i, U(r.slice(e, n))) : (t[0] = i, U(r.subarray(e, n)))
              }
              var B = null;
  
              function z() {
                return B || (B = t.alloc(0))
              }
  
              function q(e, n) {
                t.isBuffer(e) ? n() : n(new h(s.EINVAL, "option must be a Buffer."))
              }
  
              function V(t, e, n) {
                var r = t.Options,
                  i = t.Name,
                  o = 0,
                  a = !1,
                  c = !1;
  
                function u(t) {
                  a || (t && (a = !0, n(t)), 0 === --o && c && n())
                }
                var f = function (t) {
                  if (r.hasOwnProperty(t)) {
                    var c = r[t],
                      f = e[t];
                    if (void 0 === f || null === f) {
                      if (!c.optional) {
                        var p = Object.keys(e).filter((function (t) {
                          return !(t in r)
                        })).map((function (e) {
                          return {
                            str: e,
                            distance: N(t, e)
                          }
                        })).filter((function (t) {
                          return t.distance < 5
                        })).sort((function (t, e) {
                          return t.distance - e.distance
                        }));
                        return a ? {} : (a = !0, {
                          v: n(new h(s.EINVAL, "[" + i + "] Required option '" + t + "' not provided." + (p.length > 0 ? " You provided unrecognized option '" + p[0].str + "'; perhaps you meant to type '" + t + "'." : "") + "\nOption description: " + c.description))
                        })
                      }
                    } else {
                      if (!(Array.isArray(c.type) ? -1 !== c.type.indexOf(typeof f) : typeof f === c.type)) return a ? {} : (a = !0, {
                        v: n(new h(s.EINVAL, "[" + i + "] Value provided for option " + t + " is not the proper type. Expected " + (Array.isArray(c.type) ? "one of {" + c.type.join(", ") + "}" : c.type) + ", but received " + typeof f + "\nOption description: " + c.description))
                      });
                      c.validator && (o++, c.validator(f, u))
                    }
                  }
                };
                for (var p in r) {
                  var l = f(p);
                  if (l) return l.v
                }
                c = !0, 0 !== o || a || n()
              }
              var W = Object.freeze({
                  deprecationMessage: R,
                  isIE: L,
                  isWebWorker: T,
                  fail: x,
                  mkdirpSync: A,
                  buffer2ArrayBuffer: D,
                  buffer2Uint8array: P,
                  arrayish2Buffer: C,
                  uint8Array2Buffer: U,
                  arrayBuffer2Buffer: M,
                  copyingSlice: j,
                  emptyBuffer: z,
                  bufferValidator: q,
                  checkOptions: V
                }),
                H = function (t) {
                  this.fs = t, this.nodefs = t.getNodeFS(), this.FS = t.getFS(), this.PATH = t.getPATH(), this.ERRNO_CODES = t.getERRNO_CODES()
                };
              H.prototype.open = function (t) {
                var e = this.fs.realPath(t.node),
                  n = this.FS;
                try {
                  n.isFile(t.node.mode) && (t.nfd = this.nodefs.openSync(e, this.fs.flagsToPermissionString(t.flags)))
                } catch (r) {
                  if (!r.code) throw r;
                  throw new n.ErrnoError(this.ERRNO_CODES[r.code])
                }
              }, H.prototype.close = function (t) {
                var e = this.FS;
                try {
                  e.isFile(t.node.mode) && t.nfd && this.nodefs.closeSync(t.nfd)
                } catch (n) {
                  if (!n.code) throw n;
                  throw new e.ErrnoError(this.ERRNO_CODES[n.code])
                }
              }, H.prototype.read = function (t, e, n, r, i) {
                try {
                  return this.nodefs.readSync(t.nfd, U(e), n, r, i)
                } catch (o) {
                  throw new this.FS.ErrnoError(this.ERRNO_CODES[o.code])
                }
              }, H.prototype.write = function (t, e, n, r, i) {
                try {
                  return this.nodefs.writeSync(t.nfd, U(e), n, r, i)
                } catch (o) {
                  throw new this.FS.ErrnoError(this.ERRNO_CODES[o.code])
                }
              }, H.prototype.llseek = function (t, e, n) {
                var r = e;
                if (1 === n) r += t.position;
                else if (2 === n && this.FS.isFile(t.node.mode)) try {
                  r += this.nodefs.fstatSync(t.nfd).size
                } catch (i) {
                  throw new this.FS.ErrnoError(this.ERRNO_CODES[i.code])
                }
                if (r < 0) throw new this.FS.ErrnoError(this.ERRNO_CODES.EINVAL);
                return t.position = r, r
              };
              var Z = function (t) {
                this.fs = t, this.nodefs = t.getNodeFS(), this.FS = t.getFS(), this.PATH = t.getPATH(), this.ERRNO_CODES = t.getERRNO_CODES()
              };
              Z.prototype.getattr = function (t) {
                var e, n = this.fs.realPath(t);
                try {
                  e = this.nodefs.lstatSync(n)
                } catch (r) {
                  if (!r.code) throw r;
                  throw new this.FS.ErrnoError(this.ERRNO_CODES[r.code])
                }
                return {
                  dev: e.dev,
                  ino: e.ino,
                  mode: e.mode,
                  nlink: e.nlink,
                  uid: e.uid,
                  gid: e.gid,
                  rdev: e.rdev,
                  size: e.size,
                  atime: e.atime,
                  mtime: e.mtime,
                  ctime: e.ctime,
                  blksize: e.blksize,
                  blocks: e.blocks
                }
              }, Z.prototype.setattr = function (t, e) {
                var n = this.fs.realPath(t);
                try {
                  if (void 0 !== e.mode && (this.nodefs.chmodSync(n, e.mode), t.mode = e.mode), void 0 !== e.timestamp) {
                    var r = new Date(e.timestamp);
                    this.nodefs.utimesSync(n, r, r)
                  }
                } catch (i) {
                  if (!i.code) throw i;
                  if ("ENOTSUP" !== i.code) throw new this.FS.ErrnoError(this.ERRNO_CODES[i.code])
                }
                if (void 0 !== e.size) try {
                  this.nodefs.truncateSync(n, e.size)
                } catch (i) {
                  if (!i.code) throw i;
                  throw new this.FS.ErrnoError(this.ERRNO_CODES[i.code])
                }
              }, Z.prototype.lookup = function (t, e) {
                var n = this.PATH.join2(this.fs.realPath(t), e),
                  r = this.fs.getMode(n);
                return this.fs.createNode(t, e, r)
              }, Z.prototype.mknod = function (t, e, n, r) {
                var i = this.fs.createNode(t, e, n, r),
                  o = this.fs.realPath(i);
                try {
                  this.FS.isDir(i.mode) ? this.nodefs.mkdirSync(o, i.mode) : this.nodefs.writeFileSync(o, "", {
                    mode: i.mode
                  })
                } catch (s) {
                  if (!s.code) throw s;
                  throw new this.FS.ErrnoError(this.ERRNO_CODES[s.code])
                }
                return i
              }, Z.prototype.rename = function (t, e, n) {
                var r = this.fs.realPath(t),
                  i = this.PATH.join2(this.fs.realPath(e), n);
                try {
                  this.nodefs.renameSync(r, i), t.name = n, t.parent = e
                } catch (o) {
                  if (!o.code) throw o;
                  throw new this.FS.ErrnoError(this.ERRNO_CODES[o.code])
                }
              }, Z.prototype.unlink = function (t, e) {
                var n = this.PATH.join2(this.fs.realPath(t), e);
                try {
                  this.nodefs.unlinkSync(n)
                } catch (r) {
                  if (!r.code) throw r;
                  throw new this.FS.ErrnoError(this.ERRNO_CODES[r.code])
                }
              }, Z.prototype.rmdir = function (t, e) {
                var n = this.PATH.join2(this.fs.realPath(t), e);
                try {
                  this.nodefs.rmdirSync(n)
                } catch (r) {
                  if (!r.code) throw r;
                  throw new this.FS.ErrnoError(this.ERRNO_CODES[r.code])
                }
              }, Z.prototype.readdir = function (t) {
                var e = this.fs.realPath(t);
                try {
                  var n = this.nodefs.readdirSync(e);
                  return n.push(".", ".."), n
                } catch (r) {
                  if (!r.code) throw r;
                  throw new this.FS.ErrnoError(this.ERRNO_CODES[r.code])
                }
              }, Z.prototype.symlink = function (t, e, n) {
                var r = this.PATH.join2(this.fs.realPath(t), e);
                try {
                  this.nodefs.symlinkSync(n, r)
                } catch (i) {
                  if (!i.code) throw i;
                  throw new this.FS.ErrnoError(this.ERRNO_CODES[i.code])
                }
              }, Z.prototype.readlink = function (t) {
                var e = this.fs.realPath(t);
                try {
                  return this.nodefs.readlinkSync(e)
                } catch (n) {
                  if (!n.code) throw n;
                  throw new this.FS.ErrnoError(this.ERRNO_CODES[n.code])
                }
              };
              var Y = function (t, e, n, r) {
                void 0 === t && (t = self.FS), void 0 === e && (e = self.PATH), void 0 === n && (n = self.ERRNO_CODES), void 0 === r && (r = I), this.flagsToPermissionStringMap = {
                  0: "r",
                  1: "r+",
                  2: "r+",
                  64: "r",
                  65: "r+",
                  66: "r+",
                  129: "rx+",
                  193: "rx+",
                  514: "w+",
                  577: "w",
                  578: "w+",
                  705: "wx",
                  706: "wx+",
                  1024: "a",
                  1025: "a",
                  1026: "a+",
                  1089: "a",
                  1090: "a+",
                  1153: "ax",
                  1154: "ax+",
                  1217: "ax",
                  1218: "ax+",
                  4096: "rs",
                  4098: "rs+"
                }, this.nodefs = r, this.FS = t, this.PATH = e, this.ERRNO_CODES = n, this.node_ops = new Z(this), this.stream_ops = new H(this)
              };
              Y.prototype.mount = function (t) {
                return this.createNode(null, "/", this.getMode(t.opts.root), 0)
              }, Y.prototype.createNode = function (t, e, n, r) {
                var i = this.FS;
                if (!i.isDir(n) && !i.isFile(n) && !i.isLink(n)) throw new i.ErrnoError(this.ERRNO_CODES.EINVAL);
                var o = i.createNode(t, e, n);
                return o.node_ops = this.node_ops, o.stream_ops = this.stream_ops, o
              }, Y.prototype.getMode = function (t) {
                var e;
                try {
                  e = this.nodefs.lstatSync(t)
                } catch (n) {
                  if (!n.code) throw n;
                  throw new this.FS.ErrnoError(this.ERRNO_CODES[n.code])
                }
                return e.mode
              }, Y.prototype.realPath = function (t) {
                for (var e = []; t.parent !== t;) e.push(t.name), t = t.parent;
                return e.push(t.mount.opts.root), e.reverse(), this.PATH.join.apply(null, e)
              }, Y.prototype.flagsToPermissionString = function (t) {
                var e = "string" === typeof t ? parseInt(t, 10) : t;
                return (e &= 8191) in this.flagsToPermissionStringMap ? this.flagsToPermissionStringMap[e] : t
              }, Y.prototype.getNodeFS = function () {
                return this.nodefs
              }, Y.prototype.getFS = function () {
                return this.FS
              }, Y.prototype.getPATH = function () {
                return this.PATH
              }, Y.prototype.getERRNO_CODES = function () {
                return this.ERRNO_CODES
              };
              var X = function () {};
              X.prototype.supportsLinks = function () {
                return !1
              }, X.prototype.diskSpace = function (t, e) {
                e(0, 0)
              }, X.prototype.openFile = function (t, e, n) {
                throw new h(s.ENOTSUP)
              }, X.prototype.createFile = function (t, e, n, r) {
                throw new h(s.ENOTSUP)
              }, X.prototype.open = function (t, e, n, r) {
                var i = this;
                this.stat(t, !1, (function (o, a) {
                  if (o) switch (e.pathNotExistsAction()) {
                    case f.CREATE_FILE:
                      return i.stat(c.dirname(t), !1, (function (o, s) {
                        o ? r(o) : s && !s.isDirectory() ? r(h.ENOTDIR(c.dirname(t))) : i.createFile(t, e, n, r)
                      }));
                    case f.THROW_EXCEPTION:
                      return r(h.ENOENT(t));
                    default:
                      return r(new h(s.EINVAL, "Invalid FileFlag object."))
                  } else {
                    if (a && a.isDirectory()) return r(h.EISDIR(t));
                    switch (e.pathExistsAction()) {
                      case f.THROW_EXCEPTION:
                        return r(h.EEXIST(t));
                      case f.TRUNCATE_FILE:
                        return i.openFile(t, e, (function (t, e) {
                          t ? r(t) : e ? e.truncate(0, (function () {
                            e.sync((function () {
                              r(null, e)
                            }))
                          })) : x()
                        }));
                      case f.NOP:
                        return i.openFile(t, e, r);
                      default:
                        return r(new h(s.EINVAL, "Invalid FileFlag object."))
                    }
                  }
                }))
              }, X.prototype.rename = function (t, e, n) {
                n(new h(s.ENOTSUP))
              }, X.prototype.renameSync = function (t, e) {
                throw new h(s.ENOTSUP)
              }, X.prototype.stat = function (t, e, n) {
                n(new h(s.ENOTSUP))
              }, X.prototype.statSync = function (t, e) {
                throw new h(s.ENOTSUP)
              }, X.prototype.openFileSync = function (t, e, n) {
                throw new h(s.ENOTSUP)
              }, X.prototype.createFileSync = function (t, e, n) {
                throw new h(s.ENOTSUP)
              }, X.prototype.openSync = function (t, e, n) {
                var r;
                try {
                  r = this.statSync(t, !1)
                } catch (i) {
                  switch (e.pathNotExistsAction()) {
                    case f.CREATE_FILE:
                      if (!this.statSync(c.dirname(t), !1).isDirectory()) throw h.ENOTDIR(c.dirname(t));
                      return this.createFileSync(t, e, n);
                    case f.THROW_EXCEPTION:
                      throw h.ENOENT(t);
                    default:
                      throw new h(s.EINVAL, "Invalid FileFlag object.")
                  }
                }
                if (r.isDirectory()) throw h.EISDIR(t);
                switch (e.pathExistsAction()) {
                  case f.THROW_EXCEPTION:
                    throw h.EEXIST(t);
                  case f.TRUNCATE_FILE:
                    return this.unlinkSync(t), this.createFileSync(t, e, r.mode);
                  case f.NOP:
                    return this.openFileSync(t, e, n);
                  default:
                    throw new h(s.EINVAL, "Invalid FileFlag object.")
                }
              }, X.prototype.unlink = function (t, e) {
                e(new h(s.ENOTSUP))
              }, X.prototype.unlinkSync = function (t) {
                throw new h(s.ENOTSUP)
              }, X.prototype.rmdir = function (t, e) {
                e(new h(s.ENOTSUP))
              }, X.prototype.rmdirSync = function (t) {
                throw new h(s.ENOTSUP)
              }, X.prototype.mkdir = function (t, e, n) {
                n(new h(s.ENOTSUP))
              }, X.prototype.mkdirSync = function (t, e) {
                throw new h(s.ENOTSUP)
              }, X.prototype.readdir = function (t, e) {
                e(new h(s.ENOTSUP))
              }, X.prototype.readdirSync = function (t) {
                throw new h(s.ENOTSUP)
              }, X.prototype.exists = function (t, e) {
                this.stat(t, null, (function (t) {
                  e(!t)
                }))
              }, X.prototype.existsSync = function (t) {
                try {
                  return this.statSync(t, !0), !0
                } catch (e) {
                  return !1
                }
              }, X.prototype.realpath = function (t, e, n) {
                if (this.supportsLinks())
                  for (var r = t.split(c.sep), i = 0; i < r.length; i++) {
                    var o = r.slice(0, i + 1);
                    r[i] = c.join.apply(null, o)
                  } else this.exists(t, (function (e) {
                    e ? n(null, t) : n(h.ENOENT(t))
                  }))
              }, X.prototype.realpathSync = function (t, e) {
                if (this.supportsLinks()) {
                  for (var n = t.split(c.sep), r = 0; r < n.length; r++) {
                    var i = n.slice(0, r + 1);
                    n[r] = c.join.apply(c, i)
                  }
                  return n.join(c.sep)
                }
                if (this.existsSync(t)) return t;
                throw h.ENOENT(t)
              }, X.prototype.truncate = function (t, e, n) {
                this.open(t, d.getFileFlag("r+"), 420, (function (t, r) {
                  if (t) return n(t);
                  r.truncate(e, (function (t) {
                    r.close((function (e) {
                      n(t || e)
                    }))
                  }))
                }))
              }, X.prototype.truncateSync = function (t, e) {
                var n = this.openSync(t, d.getFileFlag("r+"), 420);
                try {
                  n.truncateSync(e)
                } catch (r) {
                  throw r
                } finally {
                  n.closeSync()
                }
              }, X.prototype.readFile = function (e, n, r, i) {
                var o = i;
                this.open(e, r, 420, (function (e, r) {
                  if (e) return i(e);
                  i = function (t, e) {
                    r.close((function (n) {
                      return t || (t = n), o(t, e)
                    }))
                  }, r.stat((function (e, o) {
                    if (e) return i(e);
                    var s = t.alloc(o.size);
                    r.read(s, 0, o.size, 0, (function (t) {
                      if (t) return i(t);
                      if (null === n) return i(t, s);
                      try {
                        i(null, s.toString(n))
                      } catch (e) {
                        i(e)
                      }
                    }))
                  }))
                }))
              }, X.prototype.readFileSync = function (e, n, r) {
                var i = this.openSync(e, r, 420);
                try {
                  var o = i.statSync(),
                    s = t.alloc(o.size);
                  return i.readSync(s, 0, o.size, 0), i.closeSync(), null === n ? s : s.toString(n)
                } finally {
                  i.closeSync()
                }
              }, X.prototype.writeFile = function (e, n, r, i, o, s) {
                var a = s;
                this.open(e, i, 420, (function (e, i) {
                  if (e) return s(e);
                  s = function (t) {
                    i.close((function (e) {
                      a(t || e)
                    }))
                  };
                  try {
                    "string" === typeof n && (n = t.from(n, r))
                  } catch (o) {
                    return s(o)
                  }
                  i.write(n, 0, n.length, 0, s)
                }))
              }, X.prototype.writeFileSync = function (e, n, r, i, o) {
                var s = this.openSync(e, i, o);
                try {
                  "string" === typeof n && (n = t.from(n, r)), s.writeSync(n, 0, n.length, 0)
                } finally {
                  s.closeSync()
                }
              }, X.prototype.appendFile = function (e, n, r, i, o, s) {
                var a = s;
                this.open(e, i, o, (function (e, i) {
                  if (e) return s(e);
                  s = function (t) {
                    i.close((function (e) {
                      a(t || e)
                    }))
                  }, "string" === typeof n && (n = t.from(n, r)), i.write(n, 0, n.length, null, s)
                }))
              }, X.prototype.appendFileSync = function (e, n, r, i, o) {
                var s = this.openSync(e, i, o);
                try {
                  "string" === typeof n && (n = t.from(n, r)), s.writeSync(n, 0, n.length, null)
                } finally {
                  s.closeSync()
                }
              }, X.prototype.chmod = function (t, e, n, r) {
                r(new h(s.ENOTSUP))
              }, X.prototype.chmodSync = function (t, e, n) {
                throw new h(s.ENOTSUP)
              }, X.prototype.chown = function (t, e, n, r, i) {
                i(new h(s.ENOTSUP))
              }, X.prototype.chownSync = function (t, e, n, r) {
                throw new h(s.ENOTSUP)
              }, X.prototype.utimes = function (t, e, n, r) {
                r(new h(s.ENOTSUP))
              }, X.prototype.utimesSync = function (t, e, n) {
                throw new h(s.ENOTSUP)
              }, X.prototype.link = function (t, e, n) {
                n(new h(s.ENOTSUP))
              }, X.prototype.linkSync = function (t, e) {
                throw new h(s.ENOTSUP)
              }, X.prototype.symlink = function (t, e, n, r) {
                r(new h(s.ENOTSUP))
              }, X.prototype.symlinkSync = function (t, e, n) {
                throw new h(s.ENOTSUP)
              }, X.prototype.readlink = function (t, e) {
                e(new h(s.ENOTSUP))
              }, X.prototype.readlinkSync = function (t) {
                throw new h(s.ENOTSUP)
              };
              var K = function (t) {
                  function e() {
                    t.apply(this, arguments)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.supportsSynch = function () {
                    return !0
                  }, e.prototype.rename = function (t, e, n) {
                    try {
                      this.renameSync(t, e), n()
                    } catch (r) {
                      n(r)
                    }
                  }, e.prototype.stat = function (t, e, n) {
                    try {
                      n(null, this.statSync(t, e))
                    } catch (r) {
                      n(r)
                    }
                  }, e.prototype.open = function (t, e, n, r) {
                    try {
                      r(null, this.openSync(t, e, n))
                    } catch (i) {
                      r(i)
                    }
                  }, e.prototype.unlink = function (t, e) {
                    try {
                      this.unlinkSync(t), e()
                    } catch (n) {
                      e(n)
                    }
                  }, e.prototype.rmdir = function (t, e) {
                    try {
                      this.rmdirSync(t), e()
                    } catch (n) {
                      e(n)
                    }
                  }, e.prototype.mkdir = function (t, e, n) {
                    try {
                      this.mkdirSync(t, e), n()
                    } catch (r) {
                      n(r)
                    }
                  }, e.prototype.readdir = function (t, e) {
                    try {
                      e(null, this.readdirSync(t))
                    } catch (n) {
                      e(n)
                    }
                  }, e.prototype.chmod = function (t, e, n, r) {
                    try {
                      this.chmodSync(t, e, n), r()
                    } catch (i) {
                      r(i)
                    }
                  }, e.prototype.chown = function (t, e, n, r, i) {
                    try {
                      this.chownSync(t, e, n, r), i()
                    } catch (o) {
                      i(o)
                    }
                  }, e.prototype.utimes = function (t, e, n, r) {
                    try {
                      this.utimesSync(t, e, n), r()
                    } catch (i) {
                      r(i)
                    }
                  }, e.prototype.link = function (t, e, n) {
                    try {
                      this.linkSync(t, e), n()
                    } catch (r) {
                      n(r)
                    }
                  }, e.prototype.symlink = function (t, e, n, r) {
                    try {
                      this.symlinkSync(t, e, n), r()
                    } catch (i) {
                      r(i)
                    }
                  }, e.prototype.readlink = function (t, e) {
                    try {
                      e(null, this.readlinkSync(t))
                    } catch (n) {
                      e(n)
                    }
                  }, e
                }(X),
                J = function () {};
              J.prototype.sync = function (t) {
                t(new h(s.ENOTSUP))
              }, J.prototype.syncSync = function () {
                throw new h(s.ENOTSUP)
              }, J.prototype.datasync = function (t) {
                this.sync(t)
              }, J.prototype.datasyncSync = function () {
                return this.syncSync()
              }, J.prototype.chown = function (t, e, n) {
                n(new h(s.ENOTSUP))
              }, J.prototype.chownSync = function (t, e) {
                throw new h(s.ENOTSUP)
              }, J.prototype.chmod = function (t, e) {
                e(new h(s.ENOTSUP))
              }, J.prototype.chmodSync = function (t) {
                throw new h(s.ENOTSUP)
              }, J.prototype.utimes = function (t, e, n) {
                n(new h(s.ENOTSUP))
              }, J.prototype.utimesSync = function (t, e) {
                throw new h(s.ENOTSUP)
              };
              var G = function (e) {
                  function n(t, n, r, i, o) {
                    if (e.call(this), this._pos = 0, this._dirty = !1, this._fs = t, this._path = n, this._flag = r, this._stat = i, this._buffer = o || z(), this._stat.size !== this._buffer.length && this._flag.isReadable()) throw new Error("Invalid buffer: Buffer is " + this._buffer.length + " long, yet Stats object specifies that file is " + this._stat.size + " long.")
                  }
                  return e && (n.__proto__ = e), n.prototype = Object.create(e && e.prototype), n.prototype.constructor = n, n.prototype.getBuffer = function () {
                    return this._buffer
                  }, n.prototype.getStats = function () {
                    return this._stat
                  }, n.prototype.getFlag = function () {
                    return this._flag
                  }, n.prototype.getPath = function () {
                    return this._path
                  }, n.prototype.getPos = function () {
                    return this._flag.isAppendable() ? this._stat.size : this._pos
                  }, n.prototype.advancePos = function (t) {
                    return this._pos += t
                  }, n.prototype.setPos = function (t) {
                    return this._pos = t
                  }, n.prototype.sync = function (t) {
                    try {
                      this.syncSync(), t()
                    } catch (e) {
                      t(e)
                    }
                  }, n.prototype.syncSync = function () {
                    throw new h(s.ENOTSUP)
                  }, n.prototype.close = function (t) {
                    try {
                      this.closeSync(), t()
                    } catch (e) {
                      t(e)
                    }
                  }, n.prototype.closeSync = function () {
                    throw new h(s.ENOTSUP)
                  }, n.prototype.stat = function (t) {
                    try {
                      t(null, this._stat.clone())
                    } catch (e) {
                      t(e)
                    }
                  }, n.prototype.statSync = function () {
                    return this._stat.clone()
                  }, n.prototype.truncate = function (t, e) {
                    try {
                      this.truncateSync(t), this._flag.isSynchronous() && !I.getRootFS().supportsSynch() && this.sync(e), e()
                    } catch (n) {
                      return e(n)
                    }
                  }, n.prototype.truncateSync = function (e) {
                    if (this._dirty = !0, !this._flag.isWriteable()) throw new h(s.EPERM, "File not opened with a writeable mode.");
                    if (this._stat.mtime = new Date, e > this._buffer.length) {
                      var n = t.alloc(e - this._buffer.length, 0);
                      return this.writeSync(n, 0, n.length, this._buffer.length), void(this._flag.isSynchronous() && I.getRootFS().supportsSynch() && this.syncSync())
                    }
                    this._stat.size = e;
                    var r = t.alloc(e);
                    this._buffer.copy(r, 0, 0, e), this._buffer = r, this._flag.isSynchronous() && I.getRootFS().supportsSynch() && this.syncSync()
                  }, n.prototype.write = function (t, e, n, r, i) {
                    try {
                      i(null, this.writeSync(t, e, n, r), t)
                    } catch (o) {
                      i(o)
                    }
                  }, n.prototype.writeSync = function (e, n, r, i) {
                    if (this._dirty = !0, void 0 !== i && null !== i || (i = this.getPos()), !this._flag.isWriteable()) throw new h(s.EPERM, "File not opened with a writeable mode.");
                    var o = i + r;
                    if (o > this._stat.size && (this._stat.size = o, o > this._buffer.length)) {
                      var a = t.alloc(o);
                      this._buffer.copy(a), this._buffer = a
                    }
                    var c = e.copy(this._buffer, i, n, n + r);
                    return this._stat.mtime = new Date, this._flag.isSynchronous() ? (this.syncSync(), c) : (this.setPos(i + c), c)
                  }, n.prototype.read = function (t, e, n, r, i) {
                    try {
                      i(null, this.readSync(t, e, n, r), t)
                    } catch (o) {
                      i(o)
                    }
                  }, n.prototype.readSync = function (t, e, n, r) {
                    if (!this._flag.isReadable()) throw new h(s.EPERM, "File not opened with a readable mode.");
                    void 0 !== r && null !== r || (r = this.getPos()), r + n > this._stat.size && (n = this._stat.size - r);
                    var i = this._buffer.copy(t, e, r, r + n);
                    return this._stat.atime = new Date, this._pos = r + n, i
                  }, n.prototype.chmod = function (t, e) {
                    try {
                      this.chmodSync(t), e()
                    } catch (n) {
                      e(n)
                    }
                  }, n.prototype.chmodSync = function (t) {
                    if (!this._fs.supportsProps()) throw new h(s.ENOTSUP);
                    this._dirty = !0, this._stat.chmod(t), this.syncSync()
                  }, n.prototype.isDirty = function () {
                    return this._dirty
                  }, n.prototype.resetDirty = function () {
                    this._dirty = !1
                  }, n
                }(J),
                Q = function (t) {
                  function e(e, n, r, i, o) {
                    t.call(this, e, n, r, i, o)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.sync = function (t) {
                    t()
                  }, e.prototype.syncSync = function () {}, e.prototype.close = function (t) {
                    t()
                  }, e.prototype.closeSync = function () {}, e
                }(G),
                $ = function (t) {
                  function e(e, n, r, i, o) {
                    t.call(this, e, n, r, i, o)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.syncSync = function () {
                    this.isDirty() && (this._fs._syncSync(this), this.resetDirty())
                  }, e.prototype.closeSync = function () {
                    this.syncSync()
                  }, e
                }(G),
                tt = function (t) {
                  function e(n, r, i) {
                    if (void 0 === i && (i = !0), t.call(this), this._queue = [], this._queueRunning = !1, this._isInitialized = !1, this._initializeCallbacks = [], this._sync = n, this._async = r, !n.supportsSynch()) throw new Error("The first argument to AsyncMirror needs to be a synchronous file system.");
                    R(i, e.Name, {
                      sync: "sync file system instance",
                      async: "async file system instance"
                    })
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.Create = function (t, n) {
                    try {
                      var r = new e(t.sync, t.async, !1);
                      r.initialize((function (t) {
                        t ? n(t) : n(null, r)
                      }), !1)
                    } catch (i) {
                      n(i)
                    }
                  }, e.isAvailable = function () {
                    return !0
                  }, e.prototype.getName = function () {
                    return e.Name
                  }, e.prototype._syncSync = function (t) {
                    this._sync.writeFileSync(t.getPath(), t.getBuffer(), null, d.getFileFlag("w"), t.getStats().mode), this.enqueueOp({
                      apiMethod: "writeFile",
                      arguments: [t.getPath(), t.getBuffer(), null, t.getFlag(), t.getStats().mode]
                    })
                  }, e.prototype.initialize = function (t, e) {
                    var n = this;
                    void 0 === e && (e = !0), e && console.warn("[AsyncMirror] AsyncMirror.initialize() is deprecated and will be removed in the next major version. Please use 'AsyncMirror.Create({ sync: (sync file system instance), async: (async file system instance)}, cb)' to create and initialize AsyncMirror instances.");
                    var r = this._initializeCallbacks;
                    if (this._isInitialized) t();
                    else if (1 === r.push(t)) {
                      var i = function (t, e, r) {
                          "/" !== t && n._sync.mkdirSync(t, e), n._async.readdir(t, (function (e, n) {
                            var i = 0;
                            e ? r(e) : function e(s) {
                              s ? r(s) : i < n.length ? (o(c.join(t, n[i]), e), i++) : r()
                            }()
                          }))
                        },
                        o = function (t, e) {
                          n._async.stat(t, !1, (function (r, o) {
                            r ? e(r) : o.isDirectory() ? i(t, o.mode, e) : function (t, e, r) {
                              n._async.readFile(t, null, d.getFileFlag("r"), (function (i, o) {
                                if (i) r(i);
                                else try {
                                  n._sync.writeFileSync(t, o, null, d.getFileFlag("w"), e)
                                } catch (s) {
                                  i = s
                                } finally {
                                  r(i)
                                }
                              }))
                            }(t, o.mode, e)
                          }))
                        };
                      i("/", 0, (function (t) {
                        n._isInitialized = !t, n._initializeCallbacks = [], r.forEach((function (e) {
                          return e(t)
                        }))
                      }))
                    }
                  }, e.prototype.isReadOnly = function () {
                    return !1
                  }, e.prototype.supportsSynch = function () {
                    return !0
                  }, e.prototype.supportsLinks = function () {
                    return !1
                  }, e.prototype.supportsProps = function () {
                    return this._sync.supportsProps() && this._async.supportsProps()
                  }, e.prototype.renameSync = function (t, e) {
                    this.checkInitialized(), this._sync.renameSync(t, e), this.enqueueOp({
                      apiMethod: "rename",
                      arguments: [t, e]
                    })
                  }, e.prototype.statSync = function (t, e) {
                    return this.checkInitialized(), this._sync.statSync(t, e)
                  }, e.prototype.openSync = function (t, e, n) {
                    return this.checkInitialized(), this._sync.openSync(t, e, n).closeSync(), new $(this, t, e, this._sync.statSync(t, !1), this._sync.readFileSync(t, null, d.getFileFlag("r")))
                  }, e.prototype.unlinkSync = function (t) {
                    this.checkInitialized(), this._sync.unlinkSync(t), this.enqueueOp({
                      apiMethod: "unlink",
                      arguments: [t]
                    })
                  }, e.prototype.rmdirSync = function (t) {
                    this.checkInitialized(), this._sync.rmdirSync(t), this.enqueueOp({
                      apiMethod: "rmdir",
                      arguments: [t]
                    })
                  }, e.prototype.mkdirSync = function (t, e) {
                    this.checkInitialized(), this._sync.mkdirSync(t, e), this.enqueueOp({
                      apiMethod: "mkdir",
                      arguments: [t, e]
                    })
                  }, e.prototype.readdirSync = function (t) {
                    return this.checkInitialized(), this._sync.readdirSync(t)
                  }, e.prototype.existsSync = function (t) {
                    return this.checkInitialized(), this._sync.existsSync(t)
                  }, e.prototype.chmodSync = function (t, e, n) {
                    this.checkInitialized(), this._sync.chmodSync(t, e, n), this.enqueueOp({
                      apiMethod: "chmod",
                      arguments: [t, e, n]
                    })
                  }, e.prototype.chownSync = function (t, e, n, r) {
                    this.checkInitialized(), this._sync.chownSync(t, e, n, r), this.enqueueOp({
                      apiMethod: "chown",
                      arguments: [t, e, n, r]
                    })
                  }, e.prototype.utimesSync = function (t, e, n) {
                    this.checkInitialized(), this._sync.utimesSync(t, e, n), this.enqueueOp({
                      apiMethod: "utimes",
                      arguments: [t, e, n]
                    })
                  }, e.prototype.checkInitialized = function () {
                    if (!this._isInitialized) throw new h(s.EPERM, "AsyncMirrorFS is not initialized. Please initialize AsyncMirrorFS using its initialize() method before using it.")
                  }, e.prototype.enqueueOp = function (t) {
                    var e = this;
                    if (this._queue.push(t), !this._queueRunning) {
                      this._queueRunning = !0;
                      var n = function (t) {
                        if (t && console.error("WARNING: File system has desynchronized. Received following error: " + t + "\n$"), e._queue.length > 0) {
                          var r = e._queue.shift(),
                            i = r.arguments;
                          i.push(n), e._async[r.apiMethod].apply(e._async, i)
                        } else e._queueRunning = !1
                      };
                      n()
                    }
                  }, e
                }(K);
  
              function et(t, e, n) {
                switch (n.length) {
                  case 0:
                    return t.call(e);
                  case 1:
                    return t.call(e, n[0]);
                  case 2:
                    return t.call(e, n[0], n[1]);
                  case 3:
                    return t.call(e, n[0], n[1], n[2])
                }
                return t.apply(e, n)
              }
              tt.Name = "AsyncMirror", tt.Options = {
                sync: {
                  type: "object",
                  description: "The synchronous file system to mirror the asynchronous file system to."
                },
                async: {
                  type: "object",
                  description: "The asynchronous file system to mirror."
                }
              };
              var nt = Math.max;
  
              function rt(t) {
                return t
              }
  
              function it(t, e) {
                return function (t, e, n) {
                  return e = nt(void 0 === e ? t.length - 1 : e, 0),
                    function () {
                      for (var r = arguments, i = -1, o = nt(r.length - e, 0), s = Array(o); ++i < o;) s[i] = r[e + i];
                      i = -1;
                      for (var a = Array(e + 1); ++i < e;) a[i] = r[i];
                      return a[e] = n(s), et(t, this, a)
                    }
                }(t, e, rt)
              }
              var ot = function (t) {
                return it((function (e) {
                  var n = e.pop();
                  t.call(this, e, n)
                }))
              };
  
              function st(t) {
                return it((function (e, n) {
                  var r = ot((function (n, r) {
                    var i = this;
                    return t(e, (function (t, e) {
                      t.apply(i, n.concat(e))
                    }), r)
                  }));
                  return n.length ? r.apply(this, n) : r
                }))
              }
              var at = "object" == typeof r && r && r.Object === Object && r,
                ct = "object" == typeof self && self && self.Object === Object && self,
                ut = at || ct || Function("return this")(),
                ft = ut.Symbol,
                ht = Object.prototype,
                pt = ht.hasOwnProperty,
                lt = ht.toString,
                dt = ft ? ft.toStringTag : void 0,
                yt = Object.prototype.toString,
                gt = ft ? ft.toStringTag : void 0;
  
              function mt(t) {
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : gt && gt in Object(t) ? function (t) {
                  var e = pt.call(t, dt),
                    n = t[dt];
                  try {
                    t[dt] = void 0;
                    var r = !0
                  } catch (o) {}
                  var i = lt.call(t);
                  return r && (e ? t[dt] = n : delete t[dt]), i
                }(t) : function (t) {
                  return yt.call(t)
                }(t)
              }
  
              function _t(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
              }
  
              function vt(t) {
                return null != t && _t(t.length) && ! function (t) {
                  if (! function (t) {
                      var e = typeof t;
                      return null != t && ("object" == e || "function" == e)
                    }(t)) return !1;
                  var e = mt(t);
                  return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
                }(t)
              }
              var wt = {};
  
              function Et() {}
  
              function bt(t) {
                return function () {
                  if (null !== t) {
                    var e = t;
                    t = null, e.apply(this, arguments)
                  }
                }
              }
              var St = "function" === typeof Symbol && Symbol.iterator;
  
              function kt(t) {
                return null != t && "object" == typeof t
              }
  
              function It(t) {
                return kt(t) && "[object Arguments]" == mt(t)
              }
              var Ot = Object.prototype,
                Ft = Ot.hasOwnProperty,
                Nt = Ot.propertyIsEnumerable,
                Rt = It(function () {
                  return arguments
                }()) ? It : function (t) {
                  return kt(t) && Ft.call(t, "callee") && !Nt.call(t, "callee")
                },
                Lt = Array.isArray,
                Tt = "object" == typeof e && e && !e.nodeType && e,
                xt = Tt && "object" == typeof i && i && !i.nodeType && i,
                At = xt && xt.exports === Tt ? ut.Buffer : void 0,
                Dt = (At ? At.isBuffer : void 0) || function () {
                  return !1
                },
                Pt = /^(?:0|[1-9]\d*)$/;
  
              function Ct(t, e) {
                return !!(e = null == e ? 9007199254740991 : e) && ("number" == typeof t || Pt.test(t)) && t > -1 && t % 1 == 0 && t < e
              }
              var Ut = {};
              Ut["[object Float32Array]"] = Ut["[object Float64Array]"] = Ut["[object Int8Array]"] = Ut["[object Int16Array]"] = Ut["[object Int32Array]"] = Ut["[object Uint8Array]"] = Ut["[object Uint8ClampedArray]"] = Ut["[object Uint16Array]"] = Ut["[object Uint32Array]"] = !0, Ut["[object Arguments]"] = Ut["[object Array]"] = Ut["[object ArrayBuffer]"] = Ut["[object Boolean]"] = Ut["[object DataView]"] = Ut["[object Date]"] = Ut["[object Error]"] = Ut["[object Function]"] = Ut["[object Map]"] = Ut["[object Number]"] = Ut["[object Object]"] = Ut["[object RegExp]"] = Ut["[object Set]"] = Ut["[object String]"] = Ut["[object WeakMap]"] = !1;
              var Mt, jt = "object" == typeof e && e && !e.nodeType && e,
                Bt = jt && "object" == typeof i && i && !i.nodeType && i,
                zt = Bt && Bt.exports === jt && at.process,
                qt = function () {
                  try {
                    return zt && zt.binding && zt.binding("util")
                  } catch (t) {}
                }(),
                Vt = qt && qt.isTypedArray,
                Wt = Vt ? (Mt = Vt, function (t) {
                  return Mt(t)
                }) : function (t) {
                  return kt(t) && _t(t.length) && !!Ut[mt(t)]
                },
                Ht = Object.prototype.hasOwnProperty;
  
              function Zt(t, e) {
                var n = Lt(t),
                  r = !n && Rt(t),
                  i = !n && !r && Dt(t),
                  o = !n && !r && !i && Wt(t),
                  s = n || r || i || o,
                  a = s ? function (t, e) {
                    for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                    return r
                  }(t.length, String) : [],
                  c = a.length;
                for (var u in t) !e && !Ht.call(t, u) || s && ("length" == u || i && ("offset" == u || "parent" == u) || o && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || Ct(u, c)) || a.push(u);
                return a
              }
              var Yt = Object.prototype,
                Xt = function (t, e) {
                  return function (n) {
                    return t(e(n))
                  }
                }(Object.keys, Object),
                Kt = Object.prototype.hasOwnProperty;
  
              function Jt(t) {
                if (! function (t) {
                    var e = t && t.constructor;
                    return t === ("function" == typeof e && e.prototype || Yt)
                  }(t)) return Xt(t);
                var e = [];
                for (var n in Object(t)) Kt.call(t, n) && "constructor" != n && e.push(n);
                return e
              }
  
              function Gt(t) {
                return vt(t) ? Zt(t) : Jt(t)
              }
  
              function Qt(t) {
                if (vt(t)) return function (t) {
                  var e = -1,
                    n = t.length;
                  return function () {
                    return ++e < n ? {
                      value: t[e],
                      key: e
                    } : null
                  }
                }(t);
                var e = function (t) {
                  return St && t[St] && t[St]()
                }(t);
                return e ? function (t) {
                  var e = -1;
                  return function () {
                    var n = t.next();
                    return n.done ? null : (e++, {
                      value: n.value,
                      key: e
                    })
                  }
                }(e) : function (t) {
                  var e = Gt(t),
                    n = -1,
                    r = e.length;
                  return function () {
                    var i = e[++n];
                    return n < r ? {
                      value: t[i],
                      key: i
                    } : null
                  }
                }(t)
              }
  
              function $t(t) {
                return function () {
                  if (null === t) throw new Error("Callback was already called.");
                  var e = t;
                  t = null, e.apply(this, arguments)
                }
              }
  
              function te(t) {
                return function (e, n, r) {
                  if (r = bt(r || Et), t <= 0 || !e) return r(null);
                  var i = Qt(e),
                    o = !1,
                    s = 0;
  
                  function a(t, e) {
                    if (s -= 1, t) o = !0, r(t);
                    else {
                      if (e === wt || o && s <= 0) return o = !0, r(null);
                      c()
                    }
                  }
  
                  function c() {
                    for (; s < t && !o;) {
                      var e = i();
                      if (null === e) return o = !0, void(s <= 0 && r(null));
                      s += 1, n(e.value, e.key, $t(a))
                    }
                  }
                  c()
                }
              }
  
              function ee(t, e, n, r) {
                te(e)(t, n, r)
              }
  
              function ne(t, e) {
                return function (n, r, i) {
                  return t(n, e, r, i)
                }
              }
  
              function re(t, e, n) {
                n = bt(n || Et);
                var r = 0,
                  i = 0,
                  o = t.length;
  
                function s(t, e) {
                  t ? n(t) : ++i !== o && e !== wt || n(null)
                }
                for (0 === o && n(null); r < o; r++) e(t[r], r, $t(s))
              }
              var ie, oe = ne(ee, 1 / 0),
                se = function (t, e, n) {
                  (vt(t) ? re : oe)(t, e, n)
                };
  
              function ae(t, e, n, r) {
                r = r || Et;
                var i = [],
                  o = 0;
                t(e = e || [], (function (t, e, r) {
                  var s = o++;
                  n(t, (function (t, e) {
                    i[s] = e, r(t)
                  }))
                }), (function (t) {
                  r(t, i)
                }))
              }
              st((ie = ae, function (t, e, n) {
                return ie(se, t, e, n)
              }));
              var ce = function (t) {
                return function (e, n, r, i) {
                  return t(te(n), e, r, i)
                }
              }(ae);
              st(ne(ce, 1)), it((function (t, e) {
                return it((function (n) {
                  return t.apply(null, e.concat(n))
                }))
              }));
              var ue = "[\\ud800-\\udfff]",
                fe = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                he = "[^\\ud800-\\udfff]",
                pe = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                le = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                de = ([he, pe, le].join("|"), [he + fe + "?", fe, pe, le, ue].join("|"), "function" === typeof setImmediate && setImmediate),
                ye = "object" === typeof o && "function" === typeof o.nextTick;
  
              function ge(t) {
                setTimeout(t, 0)
              }
  
              function me(t) {
                return it((function (e, n) {
                  t((function () {
                    e.apply(null, n)
                  }))
                }))
              }
              me(de ? setImmediate : ye ? o.nextTick : ge);
              var _e, ve = ne(ee, 1),
                we = it((function (t) {
                  return it((function (e) {
                    var n, r, i, o, s = this,
                      a = e[e.length - 1];
                    "function" == typeof a ? e.pop() : a = Et, n = t, r = e, i = function (t, e, n) {
                      e.apply(s, t.concat(it((function (t, e) {
                        n(t, e)
                      }))))
                    }, o = bt((o = function (t, e) {
                      a.apply(s, [t].concat(e))
                    }) || Et), ve(n, (function (t, e, n) {
                      i(r, t, (function (t, e) {
                        r = e, n(t)
                      }))
                    }), (function (t) {
                      o(t, r)
                    }))
                  }))
                }));
  
              function Ee(t) {
                return it((function (e, n) {
                  e.apply(null, n.concat(it((function (e, n) {
                    "object" === typeof console && (e ? console.error && console.error(e) : console[t] && function (t, e) {
                      for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
                    }(n, (function (e) {
                      console[t](e)
                    })))
                  }))))
                }))
              }
  
              function be(t, e, n) {
                se(t, function (t) {
                  return function (e, n, r) {
                    return t(e, r)
                  }
                }(e), n)
              }
              it((function (t) {
                return we.apply(null, t.reverse())
              })), it((function (t) {
                var e = [null].concat(t);
                return ot((function (t, n) {
                  return n.apply(this, e)
                }))
              })), Ee("dir"), Ee("log"), me(ye ? o.nextTick : de ? setImmediate : ge), Math.ceil, Math.max;
              var Se = function (t) {
                this._cache = {}, this._client = t
              };
              Se.prototype.readdir = function (t, e) {
                var n = this,
                  r = this.getCachedDirInfo(t);
                this._wrap((function (e) {
                  null !== r && r.contents ? n._client.readdir(t, {
                    contentHash: r.stat.contentHash
                  }, e) : n._client.readdir(t, e)
                }), (function (i, o, s, a) {
                  i ? i.status === Dropbox.ApiError.NO_CONTENT && null !== r ? e(null, r.contents.slice(0)) : e(i) : (n.updateCachedDirInfo(t, s, o.slice(0)), a.forEach((function (e) {
                    n.updateCachedInfo(c.join(t, e.name), e)
                  })), e(null, o))
                }))
              }, Se.prototype.remove = function (t, e) {
                var n = this;
                this._wrap((function (e) {
                  n._client.remove(t, e)
                }), (function (r, i) {
                  r || n.updateCachedInfo(t, i), e(r)
                }))
              }, Se.prototype.move = function (t, e, n) {
                var r = this;
                this._wrap((function (n) {
                  r._client.move(t, e, n)
                }), (function (i, o) {
                  i || (r.deleteCachedInfo(t), r.updateCachedInfo(e, o)), n(i)
                }))
              }, Se.prototype.stat = function (t, e) {
                var n = this;
                this._wrap((function (e) {
                  n._client.stat(t, e)
                }), (function (r, i) {
                  r || n.updateCachedInfo(t, i), e(r, i)
                }))
              }, Se.prototype.readFile = function (t, e) {
                var n = this,
                  r = this.getCachedFileInfo(t);
                null !== r && null !== r.contents ? this.stat(t, (function (i, o) {
                  i ? e(i) : o.contentHash === r.stat.contentHash ? e(i, r.contents.slice(0), r.stat) : n.readFile(t, e)
                })) : this._wrap((function (e) {
                  n._client.readFile(t, {
                    arrayBuffer: !0
                  }, e)
                }), (function (r, i, o) {
                  r || n.updateCachedInfo(t, o, i.slice(0)), e(r, i, o)
                }))
              }, Se.prototype.writeFile = function (t, e, n) {
                var r = this;
                this._wrap((function (n) {
                  r._client.writeFile(t, e, n)
                }), (function (i, o) {
                  i || r.updateCachedInfo(t, o, e.slice(0)), n(i, o)
                }))
              }, Se.prototype.mkdir = function (t, e) {
                var n = this;
                this._wrap((function (e) {
                  n._client.mkdir(t, e)
                }), (function (r, i) {
                  r || n.updateCachedInfo(t, i, []), e(r)
                }))
              }, Se.prototype._wrap = function (t, e) {
                var n = 0,
                  r = function (i) {
                    var o = 2;
                    if (i && 3 > ++n) switch (i.status) {
                      case Dropbox.ApiError.SERVER_ERROR:
                      case Dropbox.ApiError.NETWORK_ERROR:
                      case Dropbox.ApiError.RATE_LIMITED:
                        setTimeout((function () {
                          t(r)
                        }), 1e3 * o);
                        break;
                      default:
                        e.apply(null, arguments)
                    } else e.apply(null, arguments)
                  };
                t(r)
              }, Se.prototype.getCachedInfo = function (t) {
                return this._cache[t.toLowerCase()]
              }, Se.prototype.putCachedInfo = function (t, e) {
                this._cache[t.toLowerCase()] = e
              }, Se.prototype.deleteCachedInfo = function (t) {
                delete this._cache[t.toLowerCase()]
              }, Se.prototype.getCachedDirInfo = function (t) {
                var e, n = this.getCachedInfo(t);
                return (e = n) && e.stat.isFolder ? n : null
              }, Se.prototype.getCachedFileInfo = function (t) {
                var e, n = this.getCachedInfo(t);
                return (e = n) && e.stat.isFile ? n : null
              }, Se.prototype.updateCachedDirInfo = function (t, e, n) {
                void 0 === n && (n = null);
                var r = this.getCachedInfo(t);
                null === e.contentHash || void 0 !== r && r.stat.contentHash === e.contentHash || this.putCachedInfo(t, {
                  stat: e,
                  contents: n
                })
              }, Se.prototype.updateCachedFileInfo = function (t, e, n) {
                void 0 === n && (n = null);
                var r = this.getCachedInfo(t);
                null === e.versionTag || void 0 !== r && r.stat.versionTag === e.versionTag || this.putCachedInfo(t, {
                  stat: e,
                  contents: n
                })
              }, Se.prototype.updateCachedInfo = function (t, e, n) {
                var r;
                void 0 === n && (n = null), e.isFile && (null === (r = n) || void 0 === r || "object" === typeof r && "number" === typeof r.byteLength) ? this.updateCachedFileInfo(t, e, n) : e.isFolder && Array.isArray(n) && this.updateCachedDirInfo(t, e, n)
              };
              var ke = function (t) {
                  function e(e, n, r, i, o) {
                    t.call(this, e, n, r, i, o)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.sync = function (t) {
                    var e = this;
                    if (this.isDirty()) {
                      var n = D(this.getBuffer());
                      this._fs._writeFileStrict(this.getPath(), n, (function (n) {
                        n || e.resetDirty(), t(n)
                      }))
                    } else t()
                  }, e.prototype.close = function (t) {
                    this.sync(t)
                  }, e
                }(G),
                Ie = function (t) {
                  function e(n, r) {
                    void 0 === r && (r = !0), t.call(this), this._client = new Se(n), R(r, e.Name, {
                      client: "authenticated dropbox client instance"
                    }), _e || ((_e = {})[Dropbox.ApiError.NETWORK_ERROR] = s.EIO, _e[Dropbox.ApiError.INVALID_PARAM] = s.EINVAL, _e[Dropbox.ApiError.INVALID_TOKEN] = s.EPERM, _e[Dropbox.ApiError.OAUTH_ERROR] = s.EPERM, _e[Dropbox.ApiError.NOT_FOUND] = s.ENOENT, _e[Dropbox.ApiError.INVALID_METHOD] = s.EINVAL, _e[Dropbox.ApiError.NOT_ACCEPTABLE] = s.EINVAL, _e[Dropbox.ApiError.CONFLICT] = s.EINVAL, _e[Dropbox.ApiError.RATE_LIMITED] = s.EBUSY, _e[Dropbox.ApiError.SERVER_ERROR] = s.EBUSY, _e[Dropbox.ApiError.OVER_QUOTA] = s.ENOSPC)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.Create = function (t, n) {
                    n(null, new e(t.client, !1))
                  }, e.isAvailable = function () {
                    return "undefined" !== typeof Dropbox
                  }, e.prototype.getName = function () {
                    return e.Name
                  }, e.prototype.isReadOnly = function () {
                    return !1
                  }, e.prototype.supportsSymlinks = function () {
                    return !1
                  }, e.prototype.supportsProps = function () {
                    return !1
                  }, e.prototype.supportsSynch = function () {
                    return !1
                  }, e.prototype.empty = function (t) {
                    var e = this;
                    this._client.readdir("/", (function (n, r) {
                      n ? t(e.convert(n, "/")) : be(r, (function (t, n) {
                        var r = c.join("/", t);
                        e._client.remove(r, (function (t) {
                          n(t ? e.convert(t, r) : null)
                        }))
                      }), (function (e) {
                        e ? t(e) : t()
                      }))
                    }))
                  }, e.prototype.rename = function (t, e, n) {
                    var r = this;
                    this._client.move(t, e, (function (i) {
                      i ? r._client.stat(e, (function (o, s) {
                        if (o || s.isFolder) {
                          var a = i.response.error.indexOf(t) > -1 ? t : e;
                          n(r.convert(i, a))
                        } else r._client.remove(e, (function (i) {
                          i ? n(r.convert(i, e)) : r.rename(t, e, n)
                        }))
                      })) : n()
                    }))
                  }, e.prototype.stat = function (t, e, n) {
                    var r = this;
                    this._client.stat(t, (function (e, i) {
                      if (e) n(r.convert(e, t));
                      else {
                        if (!i || !i.isRemoved) {
                          var o = new y(r._statType(i), i.size);
                          return n(null, o)
                        }
                        n(h.FileError(s.ENOENT, t))
                      }
                    }))
                  }, e.prototype.open = function (t, e, n, r) {
                    var i = this;
                    this._client.readFile(t, (function (n, o, s) {
                      if (!n) {
                        var a;
                        a = null === o ? z() : M(o);
                        var c = i._makeFile(t, e, s, a);
                        return r(null, c)
                      }
                      if (!e.isReadable()) {
                        if (n.status === Dropbox.ApiError.NOT_FOUND) {
                          var u = new ArrayBuffer(0);
                          return i._writeFileStrict(t, u, (function (n, o) {
                            if (n) r(n);
                            else {
                              var s = i._makeFile(t, e, o, M(u));
                              r(null, s)
                            }
                          }))
                        }
                        return r(i.convert(n, t))
                      }
                      r(i.convert(n, t))
                    }))
                  }, e.prototype._writeFileStrict = function (t, e, n) {
                    var r = this,
                      i = c.dirname(t);
                    this.stat(i, !1, (function (o, a) {
                      o ? n(h.FileError(s.ENOENT, i)) : r._client.writeFile(t, e, (function (e, i) {
                        e ? n(r.convert(e, t)) : n(null, i)
                      }))
                    }))
                  }, e.prototype._statType = function (t) {
                    return t.isFile ? l.FILE : l.DIRECTORY
                  }, e.prototype._makeFile = function (t, e, n, r) {
                    var i = this._statType(n),
                      o = new y(i, n.size);
                    return new ke(this, t, e, o, r)
                  }, e.prototype._remove = function (t, e, n) {
                    var r = this;
                    this._client.stat(t, (function (i, o) {
                      i ? e(r.convert(i, t)) : o.isFile && !n ? e(h.FileError(s.ENOTDIR, t)) : !o.isFile && n ? e(h.FileError(s.EISDIR, t)) : r._client.remove(t, (function (n) {
                        e(n ? r.convert(n, t) : null)
                      }))
                    }))
                  }, e.prototype.unlink = function (t, e) {
                    this._remove(t, e, !0)
                  }, e.prototype.rmdir = function (t, e) {
                    this._remove(t, e, !1)
                  }, e.prototype.mkdir = function (t, e, n) {
                    var r = this,
                      i = c.dirname(t);
                    this._client.stat(i, (function (e, o) {
                      e ? n(r.convert(e, i)) : r._client.mkdir(t, (function (e) {
                        n(e ? h.FileError(s.EEXIST, t) : null)
                      }))
                    }))
                  }, e.prototype.readdir = function (t, e) {
                    var n = this;
                    this._client.readdir(t, (function (t, r) {
                      return t ? e(n.convert(t)) : e(null, r)
                    }))
                  }, e.prototype.convert = function (t, e) {
                    void 0 === e && (e = null);
                    var n = _e[t.status];
                    return void 0 === n && (n = s.EIO), e ? h.FileError(n, e) : new h(n)
                  }, e
                }(X);
  
              function Oe(t, e) {
                void 0 === e && (e = "");
                for (var n = t.errno, r = t.node, i = []; r && (i.unshift(r.name), r !== r.parent);) r = r.parent;
                return new h(n, u[n], i.length > 0 ? "/" + i.join("/") : e)
              }
              Ie.Name = "Dropbox", Ie.Options = {
                client: {
                  type: "object",
                  description: "An *authenticated* Dropbox client. Must be from the 0.10 JS SDK.",
                  validator: function (t, e) {
                    t.isAuthenticated && t.isAuthenticated() ? e() : e(new h(s.EINVAL, "'client' option must be an authenticated Dropbox client from the v0.10 JS SDK."))
                  }
                }
              };
              var Fe = function (t) {
                  function e(e, n, r, i) {
                    t.call(this), this._fs = e, this._FS = n, this._path = r, this._stream = i
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getPos = function () {}, e.prototype.close = function (t) {
                    var e = null;
                    try {
                      this.closeSync()
                    } catch (n) {
                      e = n
                    } finally {
                      t(e)
                    }
                  }, e.prototype.closeSync = function () {
                    try {
                      this._FS.close(this._stream)
                    } catch (t) {
                      throw Oe(t, this._path)
                    }
                  }, e.prototype.stat = function (t) {
                    try {
                      t(null, this.statSync())
                    } catch (e) {
                      t(e)
                    }
                  }, e.prototype.statSync = function () {
                    try {
                      return this._fs.statSync(this._path, !1)
                    } catch (t) {
                      throw Oe(t, this._path)
                    }
                  }, e.prototype.truncate = function (t, e) {
                    var n = null;
                    try {
                      this.truncateSync(t)
                    } catch (r) {
                      n = r
                    } finally {
                      e(n)
                    }
                  }, e.prototype.truncateSync = function (t) {
                    try {
                      this._FS.ftruncate(this._stream.fd, t)
                    } catch (e) {
                      throw Oe(e, this._path)
                    }
                  }, e.prototype.write = function (t, e, n, r, i) {
                    try {
                      i(null, this.writeSync(t, e, n, r), t)
                    } catch (o) {
                      i(o)
                    }
                  }, e.prototype.writeSync = function (t, e, n, r) {
                    try {
                      var i = P(t),
                        o = null === r ? void 0 : r;
                      return this._FS.write(this._stream, i, e, n, o)
                    } catch (s) {
                      throw Oe(s, this._path)
                    }
                  }, e.prototype.read = function (t, e, n, r, i) {
                    try {
                      i(null, this.readSync(t, e, n, r), t)
                    } catch (o) {
                      i(o)
                    }
                  }, e.prototype.readSync = function (t, e, n, r) {
                    try {
                      var i = P(t),
                        o = null === r ? void 0 : r;
                      return this._FS.read(this._stream, i, e, n, o)
                    } catch (s) {
                      throw Oe(s, this._path)
                    }
                  }, e.prototype.sync = function (t) {
                    t()
                  }, e.prototype.syncSync = function () {}, e.prototype.chown = function (t, e, n) {
                    var r = null;
                    try {
                      this.chownSync(t, e)
                    } catch (i) {
                      r = i
                    } finally {
                      n(r)
                    }
                  }, e.prototype.chownSync = function (t, e) {
                    try {
                      this._FS.fchown(this._stream.fd, t, e)
                    } catch (n) {
                      throw Oe(n, this._path)
                    }
                  }, e.prototype.chmod = function (t, e) {
                    var n = null;
                    try {
                      this.chmodSync(t)
                    } catch (r) {
                      n = r
                    } finally {
                      e(n)
                    }
                  }, e.prototype.chmodSync = function (t) {
                    try {
                      this._FS.fchmod(this._stream.fd, t)
                    } catch (e) {
                      throw Oe(e, this._path)
                    }
                  }, e.prototype.utimes = function (t, e, n) {
                    var r = null;
                    try {
                      this.utimesSync(t, e)
                    } catch (i) {
                      r = i
                    } finally {
                      n(r)
                    }
                  }, e.prototype.utimesSync = function (t, e) {
                    this._fs.utimesSync(this._path, t, e)
                  }, e
                }(J),
                Ne = function (e) {
                  function n(t) {
                    e.call(this), this._FS = t
                  }
                  return e && (n.__proto__ = e), n.prototype = Object.create(e && e.prototype), n.prototype.constructor = n, n.Create = function (t, e) {
                    e(null, new n(t.FS))
                  }, n.isAvailable = function () {
                    return !0
                  }, n.prototype.getName = function () {
                    return this._FS.DB_NAME()
                  }, n.prototype.isReadOnly = function () {
                    return !1
                  }, n.prototype.supportsLinks = function () {
                    return !0
                  }, n.prototype.supportsProps = function () {
                    return !0
                  }, n.prototype.supportsSynch = function () {
                    return !0
                  }, n.prototype.renameSync = function (t, e) {
                    try {
                      this._FS.rename(t, e)
                    } catch (n) {
                      throw n.errno === s.ENOENT ? Oe(n, this.existsSync(t) ? e : t) : Oe(n)
                    }
                  }, n.prototype.statSync = function (t, e) {
                    try {
                      var n = e ? this._FS.lstat(t) : this._FS.stat(t),
                        r = this.modeToFileType(n.mode);
                      return new y(r, n.size, n.mode, n.atime, n.mtime, n.ctime)
                    } catch (i) {
                      throw Oe(i, t)
                    }
                  }, n.prototype.openSync = function (t, e, n) {
                    try {
                      var r = this._FS.open(t, e.getFlagString(), n);
                      if (this._FS.isDir(r.node.mode)) throw this._FS.close(r), h.EISDIR(t);
                      return new Fe(this, this._FS, t, r)
                    } catch (i) {
                      throw Oe(i, t)
                    }
                  }, n.prototype.unlinkSync = function (t) {
                    try {
                      this._FS.unlink(t)
                    } catch (e) {
                      throw Oe(e, t)
                    }
                  }, n.prototype.rmdirSync = function (t) {
                    try {
                      this._FS.rmdir(t)
                    } catch (e) {
                      throw Oe(e, t)
                    }
                  }, n.prototype.mkdirSync = function (t, e) {
                    try {
                      this._FS.mkdir(t, e)
                    } catch (n) {
                      throw Oe(n, t)
                    }
                  }, n.prototype.readdirSync = function (t) {
                    try {
                      return this._FS.readdir(t).filter((function (t) {
                        return "." !== t && ".." !== t
                      }))
                    } catch (e) {
                      throw Oe(e, t)
                    }
                  }, n.prototype.truncateSync = function (t, e) {
                    try {
                      this._FS.truncate(t, e)
                    } catch (n) {
                      throw Oe(n, t)
                    }
                  }, n.prototype.readFileSync = function (t, e, n) {
                    try {
                      var r = U(this._FS.readFile(t, {
                        flags: n.getFlagString()
                      }));
                      return e ? r.toString(e) : r
                    } catch (i) {
                      throw Oe(i, t)
                    }
                  }, n.prototype.writeFileSync = function (e, n, r, i, o) {
                    try {
                      r && (n = t.from(n, r));
                      var s = P(n);
                      this._FS.writeFile(e, s, {
                        flags: i.getFlagString(),
                        encoding: "binary"
                      }), this._FS.chmod(e, o)
                    } catch (a) {
                      throw Oe(a, e)
                    }
                  }, n.prototype.chmodSync = function (t, e, n) {
                    try {
                      e ? this._FS.lchmod(t, n) : this._FS.chmod(t, n)
                    } catch (r) {
                      throw Oe(r, t)
                    }
                  }, n.prototype.chownSync = function (t, e, n, r) {
                    try {
                      e ? this._FS.lchown(t, n, r) : this._FS.chown(t, n, r)
                    } catch (i) {
                      throw Oe(i, t)
                    }
                  }, n.prototype.symlinkSync = function (t, e, n) {
                    try {
                      this._FS.symlink(t, e)
                    } catch (r) {
                      throw Oe(r)
                    }
                  }, n.prototype.readlinkSync = function (t) {
                    try {
                      return this._FS.readlink(t)
                    } catch (e) {
                      throw Oe(e, t)
                    }
                  }, n.prototype.utimesSync = function (t, e, n) {
                    try {
                      this._FS.utime(t, e.getTime(), n.getTime())
                    } catch (r) {
                      throw Oe(r, t)
                    }
                  }, n.prototype.modeToFileType = function (t) {
                    if (this._FS.isDir(t)) return l.DIRECTORY;
                    if (this._FS.isFile(t)) return l.FILE;
                    if (this._FS.isLink(t)) return l.SYMLINK;
                    throw h.EPERM("Invalid mode: " + t)
                  }, n
                }(K);
              Ne.Name = "EmscriptenFileSystem", Ne.Options = {
                FS: {
                  type: "object",
                  description: "The Emscripten file system to use (the `FS` variable)"
                }
              };
              var Re = function (t) {
                function e(e, n) {
                  t.call(this), this._folder = e, this._wrapped = n
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.Create = function (t, n) {
                  n(null, new e(t.folder, t.wrapped))
                }, e.isAvailable = function () {
                  return !0
                }, e.prototype.initialize = function (t) {
                  var e = this;
                  this._wrapped.exists(this._folder, (function (n) {
                    n ? t() : e._wrapped.isReadOnly() ? t(h.ENOENT(e._folder)) : e._wrapped.mkdir(e._folder, 511, t)
                  }))
                }, e.prototype.getName = function () {
                  return this._wrapped.getName()
                }, e.prototype.isReadOnly = function () {
                  return this._wrapped.isReadOnly()
                }, e.prototype.supportsProps = function () {
                  return this._wrapped.supportsProps()
                }, e.prototype.supportsSynch = function () {
                  return this._wrapped.supportsSynch()
                }, e.prototype.supportsLinks = function () {
                  return !1
                }, e
              }(X);
  
              function Le(t, e) {
                if (null !== e && "object" === typeof e) {
                  var n = e,
                    r = n.path;
                  r && (r = "/" + c.relative(t, r), n.message = n.message.replace(n.path, r), n.path = r)
                }
                return e
              }
  
              function Te(t, e) {
                return "function" === typeof e ? function (n) {
                  arguments.length > 0 && (arguments[0] = Le(t, n)), e.apply(null, arguments)
                } : e
              }
  
              function xe(t, e, n) {
                return "Sync" !== t.slice(t.length - 4) ? function () {
                  return arguments.length > 0 && (e && (arguments[0] = c.join(this._folder, arguments[0])), n && (arguments[1] = c.join(this._folder, arguments[1])), arguments[arguments.length - 1] = Te(this._folder, arguments[arguments.length - 1])), this._wrapped[t].apply(this._wrapped, arguments)
                } : function () {
                  try {
                    return e && (arguments[0] = c.join(this._folder, arguments[0])), n && (arguments[1] = c.join(this._folder, arguments[1])), this._wrapped[t].apply(this._wrapped, arguments)
                  } catch (r) {
                    throw Le(this._folder, r)
                  }
                }
              }
              Re.Name = "FolderAdapter", Re.Options = {
                folder: {
                  type: "string",
                  description: "The folder to use as the root directory"
                },
                wrapped: {
                  type: "object",
                  description: "The file system to wrap"
                }
              }, ["diskSpace", "stat", "statSync", "open", "openSync", "unlink", "unlinkSync", "rmdir", "rmdirSync", "mkdir", "mkdirSync", "readdir", "readdirSync", "exists", "existsSync", "realpath", "realpathSync", "truncate", "truncateSync", "readFile", "readFileSync", "writeFile", "writeFileSync", "appendFile", "appendFileSync", "chmod", "chmodSync", "chown", "chownSync", "utimes", "utimesSync", "readlink", "readlinkSync"].forEach((function (t) {
                Re.prototype[t] = xe(t, !0, !1)
              })), ["rename", "renameSync", "link", "linkSync", "symlink", "symlinkSync"].forEach((function (t) {
                Re.prototype[t] = xe(t, !0, !0)
              }));
              var Ae = "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : r,
                De = Ae.webkitRequestFileSystem || Ae.requestFileSystem || null;
  
              function Pe(t, e, n) {
                switch (t.name) {
                  case "PathExistsError":
                    return h.EEXIST(e);
                  case "QuotaExceededError":
                    return h.FileError(s.ENOSPC, e);
                  case "NotFoundError":
                    return h.ENOENT(e);
                  case "SecurityError":
                    return h.FileError(s.EACCES, e);
                  case "InvalidModificationError":
                    return h.FileError(s.EPERM, e);
                  case "TypeMismatchError":
                    return h.FileError(n ? s.ENOTDIR : s.EISDIR, e);
                  default:
                    return h.FileError(s.EINVAL, e)
                }
              }
              var Ce = function (t) {
                  function e(e, n, r, i, o, s) {
                    t.call(this, e, r, i, o, s), this._entry = n
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.sync = function (t) {
                    var e = this;
                    if (!this.isDirty()) return t();
                    this._entry.createWriter((function (n) {
                      var r = e.getBuffer(),
                        i = new Blob([D(r)]),
                        o = i.size;
                      n.onwriteend = function (r) {
                        n.onwriteend = null, n.onerror = null, n.truncate(o), e.resetDirty(), t()
                      }, n.onerror = function (n) {
                        t(Pe(n, e.getPath(), !1))
                      }, n.write(i)
                    }))
                  }, e.prototype.close = function (t) {
                    this.sync(t)
                  }, e
                }(G),
                Ue = function (t) {
                  function e(n, r, i) {
                    void 0 === n && (n = 5), void 0 === r && (r = Ae.PERSISTENT), void 0 === i && (i = !0), t.call(this), this.size = 1048576 * n, this.type = r, R(i, e.Name, {
                      size: n,
                      type: r
                    })
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.Create = function (t, n) {
                    var r = new e(t.size, t.type, !1);
                    r.allocate((function (t) {
                      return t ? n(t) : n(null, r)
                    }), !1)
                  }, e.isAvailable = function () {
                    return !!De
                  }, e.prototype.getName = function () {
                    return e.Name
                  }, e.prototype.isReadOnly = function () {
                    return !1
                  }, e.prototype.supportsSymlinks = function () {
                    return !1
                  }, e.prototype.supportsProps = function () {
                    return !1
                  }, e.prototype.supportsSynch = function () {
                    return !1
                  }, e.prototype.allocate = function (t, e) {
                    var n = this;
                    void 0 === t && (t = function () {}), void 0 === e && (e = !0), e && console.warn("[HTML5FS] HTML5FS.allocate() is deprecated and will be removed in the next major release. Please use 'HTML5FS.Create({type: " + this.type + ", size: " + this.size + "}, cb)' to create and allocate HTML5FS instances.");
                    var r = function (e) {
                        n.fs = e, t()
                      },
                      i = function (e) {
                        t(Pe(e, "/", !0))
                      };
                    this.type === Ae.PERSISTENT ? function (t, e, n, r) {
                      if ("undefined" !== typeof navigator.webkitPersistentStorage) switch (t) {
                        case Ae.PERSISTENT:
                          navigator.webkitPersistentStorage.requestQuota(e, n, r);
                          break;
                        case Ae.TEMPORARY:
                          navigator.webkitTemporaryStorage.requestQuota(e, n, r);
                          break;
                        default:
                          r(new TypeError("Invalid storage type: " + t))
                      } else Ae.webkitStorageInfo.requestQuota(t, e, n, r)
                    }(this.type, this.size, (function (t) {
                      De(n.type, t, r, i)
                    }), i) : De(this.type, this.size, r, i)
                  }, e.prototype.empty = function (t) {
                    this._readdir("/", (function (e, n) {
                      e ? (console.error("Failed to empty FS"), t(e)) : be(n, (function (t, e) {
                        var n = function () {
                            e()
                          },
                          r = function (n) {
                            e(Pe(n, t.fullPath, !t.isDirectory))
                          };
                        ! function (t) {
                          return t.isDirectory
                        }(t) ? t.remove(n, r): t.removeRecursively(n, r)
                      }), (function (n) {
                        e ? (console.error("Failed to empty FS"), t(e)) : t()
                      }))
                    }))
                  }, e.prototype.rename = function (t, e, n) {
                    var r = this,
                      i = 2,
                      o = 0,
                      a = this.fs.root,
                      u = t,
                      f = function (t) {
                        --i <= 0 && n(Pe(t, u, !1))
                      },
                      p = function (i) {
                        return 2 === ++o ? n(new h(s.EINVAL, "Something was identified as both a file and a directory. This should never happen.")) : t === e ? n() : (u = c.dirname(e), void a.getDirectory(u, {}, (function (o) {
                          u = c.basename(e), i.moveTo(o, u, (function (t) {
                            n()
                          }), (function (o) {
                            i.isDirectory ? (u = e, r.unlink(e, (function (i) {
                              i ? f(o) : r.rename(t, e, n)
                            }))) : f(o)
                          }))
                        }), f))
                      };
                    a.getFile(t, {}, p, f), a.getDirectory(t, {}, p, f)
                  }, e.prototype.stat = function (t, e, n) {
                    var r = this,
                      i = {
                        create: !1
                      },
                      o = function (t) {
                        var e = new y(l.DIRECTORY, 4096);
                        n(null, e)
                      },
                      s = function (e) {
                        n(Pe(e, t, !1))
                      };
                    this.fs.root.getFile(t, i, (function (t) {
                      t.file((function (t) {
                        var e = new y(l.FILE, t.size);
                        n(null, e)
                      }), s)
                    }), (function () {
                      r.fs.root.getDirectory(t, i, o, s)
                    }))
                  }, e.prototype.open = function (t, e, n, r) {
                    var i = this,
                      o = function (n) {
                        "InvalidModificationError" === n.name && e.isExclusive() ? r(h.EEXIST(t)) : r(Pe(n, t, !1))
                      };
                    this.fs.root.getFile(t, {
                      create: e.pathNotExistsAction() === f.CREATE_FILE,
                      exclusive: e.isExclusive()
                    }, (function (n) {
                      n.file((function (s) {
                        var a = new FileReader;
                        a.onloadend = function (o) {
                          var c = i._makeFile(t, n, e, s, a.result);
                          r(null, c)
                        }, a.onerror = function (t) {
                          o(a.error)
                        }, a.readAsArrayBuffer(s)
                      }), o)
                    }), o)
                  }, e.prototype.unlink = function (t, e) {
                    this._remove(t, e, !0)
                  }, e.prototype.rmdir = function (t, e) {
                    var n = this;
                    this.readdir(t, (function (r, i) {
                      r ? e(r) : i.length > 0 ? e(h.ENOTEMPTY(t)) : n._remove(t, e, !1)
                    }))
                  }, e.prototype.mkdir = function (t, e, n) {
                    this.fs.root.getDirectory(t, {
                      create: !0,
                      exclusive: !0
                    }, (function (t) {
                      n()
                    }), (function (e) {
                      n(Pe(e, t, !0))
                    }))
                  }, e.prototype.readdir = function (t, e) {
                    this._readdir(t, (function (t, n) {
                      if (!n) return e(t);
                      for (var r = [], i = 0, o = n; i < o.length; i += 1) {
                        var s = o[i];
                        r.push(s.name)
                      }
                      e(null, r)
                    }))
                  }, e.prototype._makeFile = function (t, e, n, r, i) {
                    void 0 === i && (i = new ArrayBuffer(0));
                    var o = new y(l.FILE, r.size),
                      s = M(i);
                    return new Ce(this, e, t, n, o, s)
                  }, e.prototype._readdir = function (t, e) {
                    var n = function (n) {
                      e(Pe(n, t, !0))
                    };
                    this.fs.root.getDirectory(t, {
                      create: !1
                    }, (function (t) {
                      var r = t.createReader(),
                        i = [],
                        o = function () {
                          r.readEntries((function (t) {
                            t.length ? (i = i.concat(function (t) {
                              return Array.prototype.slice.call(t || [], 0)
                            }(t)), o()) : e(null, i)
                          }), n)
                        };
                      o()
                    }), n)
                  }, e.prototype._remove = function (t, e, n) {
                    var r = function (r) {
                        r.remove((function () {
                          e()
                        }), (function (r) {
                          e(Pe(r, t, !n))
                        }))
                      },
                      i = function (r) {
                        e(Pe(r, t, !n))
                      },
                      o = {
                        create: !1
                      };
                    n ? this.fs.root.getFile(t, o, r, i) : this.fs.root.getDirectory(t, o, r, i)
                  }, e
                }(X);
              Ue.Name = "HTML5FS", Ue.Options = {
                size: {
                  type: "number",
                  optional: !0,
                  description: "Storage quota to request, in megabytes. Allocated value may be less. Defaults to 5."
                },
                type: {
                  type: "number",
                  optional: !0,
                  description: "window.PERSISTENT or window.TEMPORARY. Defaults to PERSISTENT."
                }
              };
              var Me = function (t, e, n, r, i, o) {
                this.id = t, this.size = e, this.mode = n, this.atime = r, this.mtime = i, this.ctime = o
              };
              Me.fromBuffer = function (t) {
                if (void 0 === t) throw new Error("NO");
                return new Me(t.toString("ascii", 30), t.readUInt32LE(0), t.readUInt16LE(4), t.readDoubleLE(6), t.readDoubleLE(14), t.readDoubleLE(22))
              }, Me.prototype.toStats = function () {
                return new y((61440 & this.mode) === l.DIRECTORY ? l.DIRECTORY : l.FILE, this.size, this.mode, new Date(this.atime), new Date(this.mtime), new Date(this.ctime))
              }, Me.prototype.getSize = function () {
                return 30 + this.id.length
              }, Me.prototype.toBuffer = function (e) {
                return void 0 === e && (e = t.alloc(this.getSize())), e.writeUInt32LE(this.size, 0), e.writeUInt16LE(this.mode, 4), e.writeDoubleLE(this.atime, 6), e.writeDoubleLE(this.mtime, 14), e.writeDoubleLE(this.ctime, 22), e.write(this.id, 30, this.id.length, "ascii"), e
              }, Me.prototype.update = function (t) {
                var e = !1;
                this.size !== t.size && (this.size = t.size, e = !0), this.mode !== t.mode && (this.mode = t.mode, e = !0);
                var n = t.atime.getTime();
                this.atime !== n && (this.atime = n, e = !0);
                var r = t.mtime.getTime();
                this.mtime !== r && (this.mtime = r, e = !0);
                var i = t.ctime.getTime();
                return this.ctime !== i && (this.ctime = i, e = !0), e
              }, Me.prototype.isFile = function () {
                return (61440 & this.mode) === l.FILE
              }, Me.prototype.isDirectory = function () {
                return (61440 & this.mode) === l.DIRECTORY
              };
              var je = "/",
                Be = null;
  
              function ze() {
                return Be || (Be = t.from("{}"))
              }
  
              function qe() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (t) {
                  var e = 16 * Math.random() | 0;
                  return ("x" === t ? e : 3 & e | 8).toString(16)
                }))
              }
  
              function Ve(t, e) {
                return !t || (e(t), !1)
              }
  
              function We(t, e, n) {
                return !t || (e.abort((function () {
                  n(t)
                })), !1)
              }
              var He = function (t) {
                this.store = t, this.originalData = {}, this.modifiedKeys = []
              };
              He.prototype.get = function (t) {
                var e = this.store.get(t);
                return this.stashOldValue(t, e), e
              }, He.prototype.put = function (t, e, n) {
                return this.markModified(t), this.store.put(t, e, n)
              }, He.prototype.del = function (t) {
                this.markModified(t), this.store.del(t)
              }, He.prototype.commit = function () {}, He.prototype.abort = function () {
                for (var t = this, e = 0, n = t.modifiedKeys; e < n.length; e += 1) {
                  var r = n[e],
                    i = t.originalData[r];
                  i ? t.store.put(r, i, !0) : t.store.del(r)
                }
              }, He.prototype.stashOldValue = function (t, e) {
                this.originalData.hasOwnProperty(t) || (this.originalData[t] = e)
              }, He.prototype.markModified = function (t) {
                -1 === this.modifiedKeys.indexOf(t) && (this.modifiedKeys.push(t), this.originalData.hasOwnProperty(t) || (this.originalData[t] = this.store.get(t)))
              };
              var Ze = function (t) {
                  function e(e, n, r, i, o) {
                    t.call(this, e, n, r, i, o)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.syncSync = function () {
                    this.isDirty() && (this._fs._syncSync(this.getPath(), this.getBuffer(), this.getStats()), this.resetDirty())
                  }, e.prototype.closeSync = function () {
                    this.syncSync()
                  }, e
                }(G),
                Ye = function (e) {
                  function n(t) {
                    e.call(this), this.store = t.store, this.makeRootDirectory()
                  }
                  return e && (n.__proto__ = e), n.prototype = Object.create(e && e.prototype), n.prototype.constructor = n, n.isAvailable = function () {
                    return !0
                  }, n.prototype.getName = function () {
                    return this.store.name()
                  }, n.prototype.isReadOnly = function () {
                    return !1
                  }, n.prototype.supportsSymlinks = function () {
                    return !1
                  }, n.prototype.supportsProps = function () {
                    return !1
                  }, n.prototype.supportsSynch = function () {
                    return !0
                  }, n.prototype.empty = function () {
                    this.store.clear(), this.makeRootDirectory()
                  }, n.prototype.renameSync = function (e, n) {
                    var r = this.store.beginTransaction("readwrite"),
                      i = c.dirname(e),
                      o = c.basename(e),
                      a = c.dirname(n),
                      u = c.basename(n),
                      f = this.findINode(r, i),
                      p = this.getDirListing(r, i, f);
                    if (!p[o]) throw h.ENOENT(e);
                    var l, d, y = p[o];
                    if (delete p[o], 0 === (a + "/").indexOf(e + "/")) throw new h(s.EBUSY, i);
                    if (a === i ? (l = f, d = p) : (l = this.findINode(r, a), d = this.getDirListing(r, a, l)), d[u]) {
                      var g = this.getINode(r, n, d[u]);
                      if (!g.isFile()) throw h.EPERM(n);
                      try {
                        r.del(g.id), r.del(d[u])
                      } catch (m) {
                        throw r.abort(), m
                      }
                    }
                    d[u] = y;
                    try {
                      r.put(f.id, t.from(JSON.stringify(p)), !0), r.put(l.id, t.from(JSON.stringify(d)), !0)
                    } catch (m) {
                      throw r.abort(), m
                    }
                    r.commit()
                  }, n.prototype.statSync = function (t, e) {
                    return this.findINode(this.store.beginTransaction("readonly"), t).toStats()
                  }, n.prototype.createFileSync = function (t, e, n) {
                    var r = this.store.beginTransaction("readwrite"),
                      i = z(),
                      o = this.commitNewFile(r, t, l.FILE, n, i);
                    return new Ze(this, t, e, o.toStats(), i)
                  }, n.prototype.openFileSync = function (t, e) {
                    var n = this.store.beginTransaction("readonly"),
                      r = this.findINode(n, t),
                      i = n.get(r.id);
                    if (void 0 === i) throw h.ENOENT(t);
                    return new Ze(this, t, e, r.toStats(), i)
                  }, n.prototype.unlinkSync = function (t) {
                    this.removeEntry(t, !1)
                  }, n.prototype.rmdirSync = function (t) {
                    if (this.readdirSync(t).length > 0) throw h.ENOTEMPTY(t);
                    this.removeEntry(t, !0)
                  }, n.prototype.mkdirSync = function (e, n) {
                    var r = this.store.beginTransaction("readwrite"),
                      i = t.from("{}");
                    this.commitNewFile(r, e, l.DIRECTORY, n, i)
                  }, n.prototype.readdirSync = function (t) {
                    var e = this.store.beginTransaction("readonly");
                    return Object.keys(this.getDirListing(e, t, this.findINode(e, t)))
                  }, n.prototype._syncSync = function (t, e, n) {
                    var r = this.store.beginTransaction("readwrite"),
                      i = this._findINode(r, c.dirname(t), c.basename(t)),
                      o = this.getINode(r, t, i),
                      s = o.update(n);
                    try {
                      r.put(o.id, e, !0), s && r.put(i, o.toBuffer(), !0)
                    } catch (a) {
                      throw r.abort(), a
                    }
                    r.commit()
                  }, n.prototype.makeRootDirectory = function () {
                    var t = this.store.beginTransaction("readwrite");
                    if (void 0 === t.get(je)) {
                      var e = (new Date).getTime(),
                        n = new Me(qe(), 4096, 511 | l.DIRECTORY, e, e, e);
                      t.put(n.id, ze(), !1), t.put(je, n.toBuffer(), !1), t.commit()
                    }
                  }, n.prototype._findINode = function (t, e, n) {
                    var r = this,
                      i = function (i) {
                        var o = r.getDirListing(t, e, i);
                        if (o[n]) return o[n];
                        throw h.ENOENT(c.resolve(e, n))
                      };
                    return "/" === e ? "" === n ? je : i(this.getINode(t, e, je)) : i(this.getINode(t, e + c.sep + n, this._findINode(t, c.dirname(e), c.basename(e))))
                  }, n.prototype.findINode = function (t, e) {
                    return this.getINode(t, e, this._findINode(t, c.dirname(e), c.basename(e)))
                  }, n.prototype.getINode = function (t, e, n) {
                    var r = t.get(n);
                    if (void 0 === r) throw h.ENOENT(e);
                    return Me.fromBuffer(r)
                  }, n.prototype.getDirListing = function (t, e, n) {
                    if (!n.isDirectory()) throw h.ENOTDIR(e);
                    var r = t.get(n.id);
                    if (void 0 === r) throw h.ENOENT(e);
                    return JSON.parse(r.toString())
                  }, n.prototype.addNewNode = function (t, e) {
                    for (var n;;) try {
                      return n = qe(), t.put(n, e, !1), n
                    } catch (r) {}
                    throw new h(s.EIO, "Unable to commit data to key-value store.")
                  }, n.prototype.commitNewFile = function (e, n, r, i, o) {
                    var s, a = c.dirname(n),
                      u = c.basename(n),
                      f = this.findINode(e, a),
                      p = this.getDirListing(e, a, f),
                      l = (new Date).getTime();
                    if ("/" === n) throw h.EEXIST(n);
                    if (p[u]) throw h.EEXIST(n);
                    try {
                      var d = this.addNewNode(e, o);
                      s = new Me(d, o.length, i | r, l, l, l);
                      var y = this.addNewNode(e, s.toBuffer());
                      p[u] = y, e.put(f.id, t.from(JSON.stringify(p)), !0)
                    } catch (g) {
                      throw e.abort(), g
                    }
                    return e.commit(), s
                  }, n.prototype.removeEntry = function (e, n) {
                    var r = this.store.beginTransaction("readwrite"),
                      i = c.dirname(e),
                      o = this.findINode(r, i),
                      s = this.getDirListing(r, i, o),
                      a = c.basename(e);
                    if (!s[a]) throw h.ENOENT(e);
                    var u = s[a];
                    delete s[a];
                    var f = this.getINode(r, e, u);
                    if (!n && f.isDirectory()) throw h.EISDIR(e);
                    if (n && !f.isDirectory()) throw h.ENOTDIR(e);
                    try {
                      r.del(f.id), r.del(u), r.put(o.id, t.from(JSON.stringify(s)), !0)
                    } catch (p) {
                      throw r.abort(), p
                    }
                    r.commit()
                  }, n
                }(K),
                Xe = function (t) {
                  function e(e, n, r, i, o) {
                    t.call(this, e, n, r, i, o)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.sync = function (t) {
                    var e = this;
                    this.isDirty() ? this._fs._sync(this.getPath(), this.getBuffer(), this.getStats(), (function (n) {
                      n || e.resetDirty(), t(n)
                    })) : t()
                  }, e.prototype.close = function (t) {
                    this.sync(t)
                  }, e
                }(G),
                Ke = function (e) {
                  function n() {
                    e.apply(this, arguments)
                  }
                  return e && (n.__proto__ = e), n.prototype = Object.create(e && e.prototype), n.prototype.constructor = n, n.isAvailable = function () {
                    return !0
                  }, n.prototype.init = function (t, e) {
                    this.store = t, this.makeRootDirectory(e)
                  }, n.prototype.getName = function () {
                    return this.store.name()
                  }, n.prototype.isReadOnly = function () {
                    return !1
                  }, n.prototype.supportsSymlinks = function () {
                    return !1
                  }, n.prototype.supportsProps = function () {
                    return !1
                  }, n.prototype.supportsSynch = function () {
                    return !1
                  }, n.prototype.empty = function (t) {
                    var e = this;
                    this.store.clear((function (n) {
                      Ve(n, t) && e.makeRootDirectory(t)
                    }))
                  }, n.prototype.rename = function (e, n, r) {
                    var i = this,
                      o = this.store.beginTransaction("readwrite"),
                      a = c.dirname(e),
                      u = c.basename(e),
                      f = c.dirname(n),
                      p = c.basename(n),
                      l = {},
                      d = {},
                      y = !1;
                    if (0 === (f + "/").indexOf(e + "/")) return r(new h(s.EBUSY, a));
                    var g = function (s) {
                      i.findINodeAndDirListing(o, s, (function (c, g, m) {
                        c ? y || (y = !0, o.abort((function () {
                          r(c)
                        }))) : (l[s] = g, d[s] = m, function () {
                          if (!y && d.hasOwnProperty(a) && d.hasOwnProperty(f)) {
                            var s = d[a],
                              c = l[a],
                              g = d[f],
                              m = l[f];
                            if (s[u]) {
                              var _ = s[u];
                              delete s[u];
                              var v = function () {
                                g[p] = _, o.put(c.id, t.from(JSON.stringify(s)), !0, (function (e) {
                                  We(e, o, r) && (a === f ? o.commit(r) : o.put(m.id, t.from(JSON.stringify(g)), !0, (function (t) {
                                    We(t, o, r) && o.commit(r)
                                  })))
                                }))
                              };
                              g[p] ? i.getINode(o, n, g[p], (function (t, e) {
                                We(t, o, r) && (e.isFile() ? o.del(e.id, (function (t) {
                                  We(t, o, r) && o.del(g[p], (function (t) {
                                    We(t, o, r) && v()
                                  }))
                                })) : o.abort((function (t) {
                                  r(h.EPERM(n))
                                })))
                              })) : v()
                            } else r(h.ENOENT(e))
                          }
                        }())
                      }))
                    };
                    g(a), a !== f && g(f)
                  }, n.prototype.stat = function (t, e, n) {
                    var r = this.store.beginTransaction("readonly");
                    this.findINode(r, t, (function (t, e) {
                      Ve(t, n) && n(null, e.toStats())
                    }))
                  }, n.prototype.createFile = function (t, e, n, r) {
                    var i = this,
                      o = this.store.beginTransaction("readwrite"),
                      s = z();
                    this.commitNewFile(o, t, l.FILE, n, s, (function (n, o) {
                      Ve(n, r) && r(null, new Xe(i, t, e, o.toStats(), s))
                    }))
                  }, n.prototype.openFile = function (t, e, n) {
                    var r = this,
                      i = this.store.beginTransaction("readonly");
                    this.findINode(i, t, (function (o, s) {
                      Ve(o, n) && i.get(s.id, (function (i, o) {
                        Ve(i, n) && (void 0 === o ? n(h.ENOENT(t)) : n(null, new Xe(r, t, e, s.toStats(), o)))
                      }))
                    }))
                  }, n.prototype.unlink = function (t, e) {
                    this.removeEntry(t, !1, e)
                  }, n.prototype.rmdir = function (t, e) {
                    var n = this;
                    this.readdir(t, (function (r, i) {
                      r ? e(r) : i.length > 0 ? e(h.ENOTEMPTY(t)) : n.removeEntry(t, !0, e)
                    }))
                  }, n.prototype.mkdir = function (e, n, r) {
                    var i = this.store.beginTransaction("readwrite"),
                      o = t.from("{}");
                    this.commitNewFile(i, e, l.DIRECTORY, n, o, r)
                  }, n.prototype.readdir = function (t, e) {
                    var n = this,
                      r = this.store.beginTransaction("readonly");
                    this.findINode(r, t, (function (i, o) {
                      Ve(i, e) && n.getDirListing(r, t, o, (function (t, n) {
                        Ve(t, e) && e(null, Object.keys(n))
                      }))
                    }))
                  }, n.prototype._sync = function (t, e, n, r) {
                    var i = this,
                      o = this.store.beginTransaction("readwrite");
                    this._findINode(o, c.dirname(t), c.basename(t), (function (s, a) {
                      We(s, o, r) && i.getINode(o, t, a, (function (t, i) {
                        if (We(t, o, r)) {
                          var s = i.update(n);
                          o.put(i.id, e, !0, (function (t) {
                            We(t, o, r) && (s ? o.put(a, i.toBuffer(), !0, (function (t) {
                              We(t, o, r) && o.commit(r)
                            })) : o.commit(r))
                          }))
                        }
                      }))
                    }))
                  }, n.prototype.makeRootDirectory = function (t) {
                    var e = this.store.beginTransaction("readwrite");
                    e.get(je, (function (n, r) {
                      if (n || void 0 === r) {
                        var i = (new Date).getTime(),
                          o = new Me(qe(), 4096, 511 | l.DIRECTORY, i, i, i);
                        e.put(o.id, ze(), !1, (function (n) {
                          We(n, e, t) && e.put(je, o.toBuffer(), !1, (function (n) {
                            n ? e.abort((function () {
                              t(n)
                            })) : e.commit(t)
                          }))
                        }))
                      } else e.commit(t)
                    }))
                  }, n.prototype._findINode = function (t, e, n, r) {
                    var i = this,
                      o = function (t, i, o) {
                        t ? r(t) : o[n] ? r(null, o[n]) : r(h.ENOENT(c.resolve(e, n)))
                      };
                    "/" === e ? "" === n ? r(null, je) : this.getINode(t, e, je, (function (n, s) {
                      Ve(n, r) && i.getDirListing(t, e, s, (function (t, e) {
                        o(t, 0, e)
                      }))
                    })) : this.findINodeAndDirListing(t, e, o)
                  }, n.prototype.findINode = function (t, e, n) {
                    var r = this;
                    this._findINode(t, c.dirname(e), c.basename(e), (function (i, o) {
                      Ve(i, n) && r.getINode(t, e, o, n)
                    }))
                  }, n.prototype.getINode = function (t, e, n, r) {
                    t.get(n, (function (t, n) {
                      Ve(t, r) && (void 0 === n ? r(h.ENOENT(e)) : r(null, Me.fromBuffer(n)))
                    }))
                  }, n.prototype.getDirListing = function (t, e, n, r) {
                    n.isDirectory() ? t.get(n.id, (function (t, n) {
                      if (Ve(t, r)) try {
                        r(null, JSON.parse(n.toString()))
                      } catch (t) {
                        r(h.ENOENT(e))
                      }
                    })) : r(h.ENOTDIR(e))
                  }, n.prototype.findINodeAndDirListing = function (t, e, n) {
                    var r = this;
                    this.findINode(t, e, (function (i, o) {
                      Ve(i, n) && r.getDirListing(t, e, o, (function (t, e) {
                        Ve(t, n) && n(null, o, e)
                      }))
                    }))
                  }, n.prototype.addNewNode = function (t, e, n) {
                    var r, i = 0,
                      o = function () {
                        5 === ++i ? n(new h(s.EIO, "Unable to commit data to key-value store.")) : (r = qe(), t.put(r, e, !1, (function (t, e) {
                          t || !e ? o() : n(null, r)
                        })))
                      };
                    o()
                  }, n.prototype.commitNewFile = function (e, n, r, i, o, s) {
                    var a = this,
                      u = c.dirname(n),
                      f = c.basename(n),
                      p = (new Date).getTime();
                    if ("/" === n) return s(h.EEXIST(n));
                    this.findINodeAndDirListing(e, u, (function (c, u, l) {
                      We(c, e, s) && (l[f] ? e.abort((function () {
                        s(h.EEXIST(n))
                      })) : a.addNewNode(e, o, (function (n, c) {
                        if (We(n, e, s)) {
                          var h = new Me(c, o.length, i | r, p, p, p);
                          a.addNewNode(e, h.toBuffer(), (function (n, r) {
                            We(n, e, s) && (l[f] = r, e.put(u.id, t.from(JSON.stringify(l)), !0, (function (t) {
                              We(t, e, s) && e.commit((function (t) {
                                We(t, e, s) && s(null, h)
                              }))
                            })))
                          }))
                        }
                      })))
                    }))
                  }, n.prototype.removeEntry = function (e, n, r) {
                    var i = this,
                      o = this.store.beginTransaction("readwrite"),
                      s = c.dirname(e),
                      a = c.basename(e);
                    this.findINodeAndDirListing(o, s, (function (s, c, u) {
                      if (We(s, o, r))
                        if (u[a]) {
                          var f = u[a];
                          delete u[a], i.getINode(o, e, f, (function (i, s) {
                            We(i, o, r) && (!n && s.isDirectory() ? o.abort((function () {
                              r(h.EISDIR(e))
                            })) : n && !s.isDirectory() ? o.abort((function () {
                              r(h.ENOTDIR(e))
                            })) : o.del(s.id, (function (e) {
                              We(e, o, r) && o.del(f, (function (e) {
                                We(e, o, r) && o.put(c.id, t.from(JSON.stringify(u)), !0, (function (t) {
                                  We(t, o, r) && o.commit(r)
                                }))
                              }))
                            })))
                          }))
                        } else o.abort((function () {
                          r(h.ENOENT(e))
                        }))
                    }))
                  }, n
                }(X),
                Je = function () {
                  this.store = {}
                };
              Je.prototype.name = function () {
                return Ge.Name
              }, Je.prototype.clear = function () {
                this.store = {}
              }, Je.prototype.beginTransaction = function (t) {
                return new He(this)
              }, Je.prototype.get = function (t) {
                return this.store[t]
              }, Je.prototype.put = function (t, e, n) {
                return !(!n && this.store.hasOwnProperty(t)) && (this.store[t] = e, !0)
              }, Je.prototype.del = function (t) {
                delete this.store[t]
              };
              var Ge = function (t) {
                function e() {
                  t.call(this, {
                    store: new Je
                  })
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.Create = function (t, n) {
                  n(null, new e)
                }, e
              }(Ye);
              Ge.Name = "InMemory", Ge.Options = {};
              var Qe = Ae.indexedDB || Ae.mozIndexedDB || Ae.webkitIndexedDB || Ae.msIndexedDB;
  
              function $e(t, e) {
                switch (void 0 === e && (e = t.toString()), t.name) {
                  case "NotFoundError":
                    return new h(s.ENOENT, e);
                  case "QuotaExceededError":
                    return new h(s.ENOSPC, e);
                  default:
                    return new h(s.EIO, e)
                }
              }
  
              function tn(t, e, n) {
                return void 0 === e && (e = s.EIO), void 0 === n && (n = null),
                  function (r) {
                    r.preventDefault(), t(new h(e, null !== n ? n : void 0))
                  }
              }
              var en = function (t, e) {
                this.tx = t, this.store = e
              };
              en.prototype.get = function (t, e) {
                try {
                  var n = this.store.get(t);
                  n.onerror = tn(e), n.onsuccess = function (t) {
                    var n = t.target.result;
                    e(null, void 0 === n ? n : M(n))
                  }
                } catch (r) {
                  e($e(r))
                }
              };
              var nn = function (t) {
                  function e(e, n) {
                    t.call(this, e, n)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.put = function (t, e, n, r) {
                    try {
                      var i, o = D(e);
                      (i = n ? this.store.put(o, t) : this.store.add(o, t)).onerror = tn(r), i.onsuccess = function (t) {
                        r(null, !0)
                      }
                    } catch (s) {
                      r($e(s))
                    }
                  }, e.prototype.del = function (t, e) {
                    try {
                      var n = this.store.delete(t);
                      n.onerror = tn(e), n.onsuccess = function (t) {
                        e()
                      }
                    } catch (r) {
                      e($e(r))
                    }
                  }, e.prototype.commit = function (t) {
                    setTimeout(t, 0)
                  }, e.prototype.abort = function (t) {
                    var e = null;
                    try {
                      this.tx.abort()
                    } catch (n) {
                      e = $e(n)
                    } finally {
                      t(e)
                    }
                  }, e
                }(en),
                rn = function (t, e) {
                  var n = this;
                  void 0 === e && (e = "browserfs"), this.storeName = e;
                  var r = Qe.open(this.storeName, 1);
                  r.onupgradeneeded = function (t) {
                    var e = t.target.result;
                    e.objectStoreNames.contains(n.storeName) && e.deleteObjectStore(n.storeName), e.createObjectStore(n.storeName)
                  }, r.onsuccess = function (e) {
                    n.db = e.target.result, t(null, n)
                  }, r.onerror = tn(t, s.EACCES)
                };
              rn.prototype.name = function () {
                return on.Name + " - " + this.storeName
              }, rn.prototype.clear = function (t) {
                try {
                  var e = this.db.transaction(this.storeName, "readwrite").objectStore(this.storeName).clear();
                  e.onsuccess = function (e) {
                    setTimeout(t, 0)
                  }, e.onerror = tn(t)
                } catch (n) {
                  t($e(n))
                }
              }, rn.prototype.beginTransaction = function (t) {
                void 0 === t && (t = "readonly");
                var e = this.db.transaction(this.storeName, t),
                  n = e.objectStore(this.storeName);
                if ("readwrite" === t) return new nn(e, n);
                if ("readonly" === t) return new en(e, n);
                throw new h(s.EINVAL, "Invalid transaction type.")
              };
              var on = function (t) {
                function e(n, r, i) {
                  var o = this;
                  void 0 === i && (i = !0), t.call(this), this.store = new rn((function (t) {
                    t ? n(t) : o.init(o.store, (function (t) {
                      n(t, o)
                    }))
                  }), r), R(i, e.Name, {
                    storeName: r
                  })
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.Create = function (t, n) {
                  new e(n, t.storeName, !1)
                }, e.isAvailable = function () {
                  try {
                    return "undefined" !== typeof Qe && null !== Qe.open("__browserfs_test__")
                  } catch (t) {
                    return !1
                  }
                }, e
              }(Ke);
              on.Name = "IndexedDB", on.Options = {
                storeName: {
                  type: "string",
                  optional: !0,
                  description: "The name of this file system. You can have multiple IndexedDB file systems operating at once, but each must have a different name."
                }
              };
              var sn, an = !1;
              try {
                Ae.localStorage.setItem("__test__", String.fromCharCode(55296)), an = Ae.localStorage.getItem("__test__") === String.fromCharCode(55296)
              } catch (oi) {
                an = !1
              }
              sn = an ? "binary_string" : "binary_string_ie", t.isEncoding(sn) || (sn = "base64");
              var cn = function () {};
              cn.prototype.name = function () {
                return un.Name
              }, cn.prototype.clear = function () {
                Ae.localStorage.clear()
              }, cn.prototype.beginTransaction = function (t) {
                return new He(this)
              }, cn.prototype.get = function (e) {
                try {
                  var n = Ae.localStorage.getItem(e);
                  if (null !== n) return t.from(n, sn)
                } catch (oi) {}
              }, cn.prototype.put = function (t, e, n) {
                try {
                  return !(!n && null !== Ae.localStorage.getItem(t)) && (Ae.localStorage.setItem(t, e.toString(sn)), !0)
                } catch (oi) {
                  throw new h(s.ENOSPC, "LocalStorage is full.")
                }
              }, cn.prototype.del = function (t) {
                try {
                  Ae.localStorage.removeItem(t)
                } catch (oi) {
                  throw new h(s.EIO, "Unable to delete key " + t + ": " + oi)
                }
              };
              var un = function (t) {
                function e() {
                  t.call(this, {
                    store: new cn
                  })
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.Create = function (t, n) {
                  n(null, new e)
                }, e.isAvailable = function () {
                  return "undefined" !== typeof Ae.localStorage
                }, e
              }(Ye);
              un.Name = "LocalStorage", un.Options = {};
              var fn = function (t) {
                function e() {
                  t.call(this), this.mountList = [], this.mntMap = {}, this.rootFs = new Ge
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.Create = function (t, n) {
                  var r = new e;
                  Object.keys(t).forEach((function (e) {
                    r.mount(e, t[e])
                  })), n(null, r)
                }, e.isAvailable = function () {
                  return !0
                }, e.prototype.mount = function (t, e) {
                  if ("/" !== t[0] && (t = "/" + t), t = c.resolve(t), this.mntMap[t]) throw new h(s.EINVAL, "Mount point " + t + " is already taken.");
                  A(t, 511, this.rootFs), this.mntMap[t] = e, this.mountList.push(t), this.mountList = this.mountList.sort((function (t, e) {
                    return e.length - t.length
                  }))
                }, e.prototype.umount = function (t) {
                  if ("/" !== t[0] && (t = "/" + t), t = c.resolve(t), !this.mntMap[t]) throw new h(s.EINVAL, "Mount point " + t + " is already unmounted.");
                  for (delete this.mntMap[t], this.mountList.splice(this.mountList.indexOf(t), 1);
                    "/" !== t && 0 === this.rootFs.readdirSync(t).length;) this.rootFs.rmdirSync(t), t = c.dirname(t)
                }, e.prototype._getFs = function (t) {
                  for (var e = this.mountList, n = e.length, r = 0; r < n; r++) {
                    var i = e[r];
                    if (i.length <= t.length && 0 === t.indexOf(i)) return "" === (t = t.substr(i.length > 1 ? i.length : 0)) && (t = "/"), {
                      fs: this.mntMap[i],
                      path: t
                    }
                  }
                  return {
                    fs: this.rootFs,
                    path: t
                  }
                }, e.prototype.getName = function () {
                  return e.Name
                }, e.prototype.diskSpace = function (t, e) {
                  e(0, 0)
                }, e.prototype.isReadOnly = function () {
                  return !1
                }, e.prototype.supportsLinks = function () {
                  return !1
                }, e.prototype.supportsProps = function () {
                  return !1
                }, e.prototype.supportsSynch = function () {
                  return !0
                }, e.prototype.standardizeError = function (t, e, n) {
                  var r = t.message.indexOf(e);
                  return -1 !== r && (t.message = t.message.substr(0, r) + n + t.message.substr(r + e.length), t.path = n), t
                }, e.prototype.rename = function (t, e, n) {
                  var r = this,
                    i = this._getFs(t),
                    o = this._getFs(e);
                  return i.fs === o.fs ? i.fs.rename(i.path, o.path, (function (s) {
                    s && r.standardizeError(r.standardizeError(s, i.path, t), o.path, e), n(s)
                  })) : I.readFile(t, (function (r, i) {
                    if (r) return n(r);
                    I.writeFile(e, i, (function (e) {
                      if (e) return n(e);
                      I.unlink(t, n)
                    }))
                  }))
                }, e.prototype.renameSync = function (t, e) {
                  var n = this._getFs(t),
                    r = this._getFs(e);
                  if (n.fs === r.fs) try {
                    return n.fs.renameSync(n.path, r.path)
                  } catch (oi) {
                    throw this.standardizeError(this.standardizeError(oi, n.path, t), r.path, e), oi
                  }
                  var i = I.readFileSync(t);
                  return I.writeFileSync(e, i), I.unlinkSync(t)
                }, e.prototype.readdirSync = function (t) {
                  var e = this._getFs(t),
                    n = null;
                  if (e.fs !== this.rootFs) try {
                    n = this.rootFs.readdirSync(t)
                  } catch (oi) {}
                  try {
                    var r = e.fs.readdirSync(e.path);
                    return null === n ? r : r.concat(n.filter((function (t) {
                      return -1 === r.indexOf(t)
                    })))
                  } catch (oi) {
                    if (null === n) throw this.standardizeError(oi, e.path, t);
                    return n
                  }
                }, e.prototype.readdir = function (t, e) {
                  var n = this,
                    r = this._getFs(t);
                  r.fs.readdir(r.path, (function (i, o) {
                    if (r.fs !== n.rootFs) try {
                      var s = n.rootFs.readdirSync(t);
                      o = o ? o.concat(s.filter((function (t) {
                        return -1 === o.indexOf(t)
                      }))) : s
                    } catch (oi) {
                      if (i) return e(n.standardizeError(i, r.path, t))
                    } else if (i) return e(n.standardizeError(i, r.path, t));
                    e(null, o)
                  }))
                }, e.prototype.rmdirSync = function (t) {
                  var e = this._getFs(t);
                  if (this._containsMountPt(t)) throw h.ENOTEMPTY(t);
                  try {
                    e.fs.rmdirSync(e.path)
                  } catch (oi) {
                    throw this.standardizeError(oi, e.path, t)
                  }
                }, e.prototype.rmdir = function (t, e) {
                  var n = this,
                    r = this._getFs(t);
                  this._containsMountPt(t) ? e(h.ENOTEMPTY(t)) : r.fs.rmdir(r.path, (function (i) {
                    e(i ? n.standardizeError(i, r.path, t) : null)
                  }))
                }, e.prototype._containsMountPt = function (t) {
                  for (var e = this.mountList, n = e.length, r = 0; r < n; r++) {
                    var i = e[r];
                    if (i.length >= t.length && i.slice(0, t.length) === t) return !0
                  }
                  return !1
                }, e
              }(X);
  
              function hn(t, e, n) {
                return e ? function () {
                  for (var e = [], n = arguments.length; n--;) e[n] = arguments[n];
                  var r = e[0],
                    i = this._getFs(r);
                  e[0] = i.path;
                  try {
                    return i.fs[t].apply(i.fs, e)
                  } catch (oi) {
                    throw this.standardizeError(oi, i.path, r), oi
                  }
                } : function () {
                  for (var e = this, n = [], r = arguments.length; r--;) n[r] = arguments[r];
                  var i = n[0],
                    o = this._getFs(i);
                  if (n[0] = o.path, "function" === typeof n[n.length - 1]) {
                    var s = n[n.length - 1];
                    n[n.length - 1] = function () {
                      for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
                      t.length > 0 && t[0] instanceof h && e.standardizeError(t[0], o.path, i), s.apply(null, t)
                    }
                  }
                  return o.fs[t].apply(o.fs, n)
                }
              }
              fn.Name = "MountableFileSystem", fn.Options = {};
              for (var pn, ln = [
                  ["exists", "unlink", "readlink"],
                  ["stat", "mkdir", "realpath", "truncate"],
                  ["open", "readFile", "chmod", "utimes"],
                  ["chown"],
                  ["writeFile", "appendFile"]
                ], dn = 0; dn < ln.length; dn++)
                for (var yn = 0, gn = ln[dn]; yn < gn.length; yn += 1) {
                  var mn = gn[yn];
                  fn.prototype[mn] = hn(mn, !1), fn.prototype[mn + "Sync"] = hn(mn + "Sync", !0)
                }
              if ("undefined" !== typeof setImmediate) pn = setImmediate;
              else {
                var _n = Ae,
                  vn = [],
                  wn = "zero-timeout-message";
                if (function () {
                    if ("undefined" !== typeof _n.importScripts || !_n.postMessage) return !1;
                    var t = !0,
                      e = _n.onmessage;
                    return _n.onmessage = function () {
                      t = !1
                    }, _n.postMessage("", "*"), _n.onmessage = e, t
                  }()) {
                  pn = function (t) {
                    vn.push(t), _n.postMessage(wn, "*")
                  };
                  var En = function (t) {
                    if (t.source === self && t.data === wn && (t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, vn.length > 0)) return vn.shift()()
                  };
                  _n.addEventListener ? _n.addEventListener("message", En, !0) : _n.attachEvent("onmessage", En)
                } else if (_n.MessageChannel) {
                  var bn = new _n.MessageChannel;
                  bn.port1.onmessage = function (t) {
                    if (vn.length > 0) return vn.shift()()
                  }, pn = function (t) {
                    vn.push(t), bn.port2.postMessage("")
                  }
                } else pn = function (t) {
                  return setTimeout(t, 0)
                }
              }
              var Sn = pn,
                kn = function () {
                  this._locked = !1, this._waiters = []
                };
              kn.prototype.lock = function (t) {
                this._locked ? this._waiters.push(t) : (this._locked = !0, t())
              }, kn.prototype.unlock = function () {
                if (!this._locked) throw new Error("unlock of a non-locked mutex");
                var t = this._waiters.shift();
                t ? Sn(t) : this._locked = !1
              }, kn.prototype.tryLock = function () {
                return !this._locked && (this._locked = !0, !0)
              }, kn.prototype.isLocked = function () {
                return this._locked
              };
              var In = function (t) {
                this._fs = t, this._mu = new kn
              };
              In.prototype.getName = function () {
                return "LockedFS<" + this._fs.getName() + ">"
              }, In.prototype.getFSUnlocked = function () {
                return this._fs
              }, In.prototype.initialize = function (t) {
                this._fs.initialize(t)
              }, In.prototype.diskSpace = function (t, e) {
                this._fs.diskSpace(t, e)
              }, In.prototype.isReadOnly = function () {
                return this._fs.isReadOnly()
              }, In.prototype.supportsLinks = function () {
                return this._fs.supportsLinks()
              }, In.prototype.supportsProps = function () {
                return this._fs.supportsProps()
              }, In.prototype.supportsSynch = function () {
                return this._fs.supportsSynch()
              }, In.prototype.rename = function (t, e, n) {
                var r = this;
                this._mu.lock((function () {
                  r._fs.rename(t, e, (function (t) {
                    r._mu.unlock(), n(t)
                  }))
                }))
              }, In.prototype.renameSync = function (t, e) {
                if (this._mu.isLocked()) throw new Error("invalid sync call");
                return this._fs.renameSync(t, e)
              }, In.prototype.stat = function (t, e, n) {
                var r = this;
                this._mu.lock((function () {
                  r._fs.stat(t, e, (function (t, e) {
                    r._mu.unlock(), n(t, e)
                  }))
                }))
              }, In.prototype.statSync = function (t, e) {
                if (this._mu.isLocked()) throw new Error("invalid sync call");
                return this._fs.statSync(t, e)
              }, In.prototype.open = function (t, e, n, r) {
                var i = this;
                this._mu.lock((function () {
                  i._fs.open(t, e, n, (function (t, e) {
                    i._mu.unlock(), r(t, e)
                  }))
                }))
              }, In.prototype.openSync = function (t, e, n) {
                if (this._mu.isLocked()) throw new Error("invalid sync call");
                return this._fs.openSync(t, e, n)
              }, In.prototype.unlink = function (t, e) {
                var n = this;
                this._mu.lock((function () {
                  n._fs.unlink(t, (function (t) {
                    n._mu.unlock(), e(t)
                  }))
                }))
              }, In.prototype.unlinkSync = function (t) {
                if (this._mu.isLocked()) throw new Error("invalid sync call");
                return this._fs.unlinkSync(t)
              }, In.prototype.rmdir = function (t, e) {
                var n = this;
                this._mu.lock((function () {
                  n._fs.rmdir(t, (function (t) {
                    n._mu.unlock(), e(t)
                  }))
                }))
              }, In.prototype.rmdirSync = function (t) {
                if (this._mu.isLocked()) throw new Error("invalid sync call");
                return this._fs.rmdirSync(t)
              }, In.prototype.mkdir = function (t, e, n) {
                var r = this;
                this._mu.lock((function () {
                  r._fs.mkdir(t, e, (function (t) {
                    r._mu.unlock(), n(t)
                  }))
                }))
              }, In.prototype.mkdirSync = function (t, e) {
                if (this._mu.isLocked()) throw new Error("invalid sync call");
                return this._fs.mkdirSync(t, e)
              }, In.prototype.readdir = function (t, e) {
                var n = this;
                this._mu.lock((function () {
                  n._fs.readdir(t, (function (t, r) {
                    n._mu.unlock(), e(t, r)
                  }))
                }))
              }, In.prototype.readdirSync = function (t) {
                if (this._mu.isLocked()) throw new Error("invalid sync call");
                return this._fs.readdirSync(t)
              }, In.prototype.exists = function (t, e) {
                var n = this;
                this._mu.lock((function () {
                  n._fs.exists(t, (function (t) {
                    n._mu.unlock(), e(t)
                  }))
                }))
              }, In.prototype.existsSync = function (t) {
                if (this._mu.isLocked()) throw new Error("invalid sync call");
                return this._fs.existsSync(t)
              }, In.prototype.realpath = function (t, e, n) {
                var r = this;
                this._mu.lock((function () {
                  r._fs.realpath(t, e, (function (t, e) {
                    r._mu.unlock(), n(t, e)
                  }))
                }))
              }, In.prototype.realpathSync = function (t, e) {
                if (this._mu.isLocked()) throw new Error("invalid sync call");
                return this._fs.realpathSync(t, e)
              }, In.prototype.truncate = function (t, e, n) {
                var r = this;
                this._mu.lock((function () {
                  r._fs.truncate(t, e, (function (t) {
                    r._mu.unlock(), n(t)
                  }))
                }))
              }, In.prototype.truncateSync = function (t, e) {
                if (this._mu.isLocked()) throw new Error("invalid sync call");
                return this._fs.truncateSync(t, e)
              }, In.prototype.readFile = function (t, e, n, r) {
                var i = this;
                this._mu.lock((function () {
                  i._fs.readFile(t, e, n, (function (t, e) {
                    i._mu.unlock(), r(t, e)
                  }))
                }))
              }, In.prototype.readFileSync = function (t, e, n) {
                if (this._mu.isLocked()) throw new Error("invalid sync call");
                return this._fs.readFileSync(t, e, n)
              }, In.prototype.writeFile = function (t, e, n, r, i, o) {
                var s = this;
                this._mu.lock((function () {
                  s._fs.writeFile(t, e, n, r, i, (function (t) {
                    s._mu.unlock(), o(t)
                  }))
                }))
              }, In.prototype.writeFileSync = function (t, e, n, r, i) {
                if (this._mu.isLocked()) throw new Error("invalid sync call");
                return this._fs.writeFileSync(t, e, n, r, i)
              }, In.prototype.appendFile = function (t, e, n, r, i, o) {
                var s = this;
                this._mu.lock((function () {
                  s._fs.appendFile(t, e, n, r, i, (function (t) {
                    s._mu.unlock(), o(t)
                  }))
                }))
              }, In.prototype.appendFileSync = function (t, e, n, r, i) {
                if (this._mu.isLocked()) throw new Error("invalid sync call");
                return this._fs.appendFileSync(t, e, n, r, i)
              }, In.prototype.chmod = function (t, e, n, r) {
                var i = this;
                this._mu.lock((function () {
                  i._fs.chmod(t, e, n, (function (t) {
                    i._mu.unlock(), r(t)
                  }))
                }))
              }, In.prototype.chmodSync = function (t, e, n) {
                if (this._mu.isLocked()) throw new Error("invalid sync call");
                return this._fs.chmodSync(t, e, n)
              }, In.prototype.chown = function (t, e, n, r, i) {
                var o = this;
                this._mu.lock((function () {
                  o._fs.chown(t, e, n, r, (function (t) {
                    o._mu.unlock(), i(t)
                  }))
                }))
              }, In.prototype.chownSync = function (t, e, n, r) {
                if (this._mu.isLocked()) throw new Error("invalid sync call");
                return this._fs.chownSync(t, e, n, r)
              }, In.prototype.utimes = function (t, e, n, r) {
                var i = this;
                this._mu.lock((function () {
                  i._fs.utimes(t, e, n, (function (t) {
                    i._mu.unlock(), r(t)
                  }))
                }))
              }, In.prototype.utimesSync = function (t, e, n) {
                if (this._mu.isLocked()) throw new Error("invalid sync call");
                return this._fs.utimesSync(t, e, n)
              }, In.prototype.link = function (t, e, n) {
                var r = this;
                this._mu.lock((function () {
                  r._fs.link(t, e, (function (t) {
                    r._mu.unlock(), n(t)
                  }))
                }))
              }, In.prototype.linkSync = function (t, e) {
                if (this._mu.isLocked()) throw new Error("invalid sync call");
                return this._fs.linkSync(t, e)
              }, In.prototype.symlink = function (t, e, n, r) {
                var i = this;
                this._mu.lock((function () {
                  i._fs.symlink(t, e, n, (function (t) {
                    i._mu.unlock(), r(t)
                  }))
                }))
              }, In.prototype.symlinkSync = function (t, e, n) {
                if (this._mu.isLocked()) throw new Error("invalid sync call");
                return this._fs.symlinkSync(t, e, n)
              }, In.prototype.readlink = function (t, e) {
                var n = this;
                this._mu.lock((function () {
                  n._fs.readlink(t, (function (t, r) {
                    n._mu.unlock(), e(t, r)
                  }))
                }))
              }, In.prototype.readlinkSync = function (t) {
                if (this._mu.isLocked()) throw new Error("invalid sync call");
                return this._fs.readlinkSync(t)
              };
              var On = "/.deletedFiles.log";
  
              function Fn(t) {
                return 146 | t
              }
  
              function Nn(t) {
                return d.getFileFlag(t)
              }
              var Rn, Ln = function (t) {
                  function e(e, n, r, i, o) {
                    t.call(this, e, n, r, i, o)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.sync = function (t) {
                    var e = this;
                    this.isDirty() ? this._fs._syncAsync(this, (function (n) {
                      e.resetDirty(), t(n)
                    })) : t(null)
                  }, e.prototype.syncSync = function () {
                    this.isDirty() && (this._fs._syncSync(this), this.resetDirty())
                  }, e.prototype.close = function (t) {
                    this.sync(t)
                  }, e.prototype.closeSync = function () {
                    this.syncSync()
                  }, e
                }(G),
                Tn = function (t) {
                  function e(e, n) {
                    if (t.call(this), this._isInitialized = !1, this._initializeCallbacks = [], this._deletedFiles = {}, this._deleteLog = "", this._deleteLogUpdatePending = !1, this._deleteLogUpdateNeeded = !1, this._deleteLogError = null, this._writable = e, this._readable = n, this._writable.isReadOnly()) throw new h(s.EINVAL, "Writable file system must be writable.")
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.isAvailable = function () {
                    return !0
                  }, e.prototype.getOverlayedFileSystems = function () {
                    return {
                      readable: this._readable,
                      writable: this._writable
                    }
                  }, e.prototype._syncAsync = function (t, e) {
                    var n = this;
                    this.createParentDirectoriesAsync(t.getPath(), (function (r) {
                      if (r) return e(r);
                      n._writable.writeFile(t.getPath(), t.getBuffer(), null, Nn("w"), t.getStats().mode, e)
                    }))
                  }, e.prototype._syncSync = function (t) {
                    this.createParentDirectories(t.getPath()), this._writable.writeFileSync(t.getPath(), t.getBuffer(), null, Nn("w"), t.getStats().mode)
                  }, e.prototype.getName = function () {
                    return xn.Name
                  }, e.prototype.initialize = function (t) {
                    var e = this,
                      n = this._initializeCallbacks,
                      r = function (t) {
                        e._isInitialized = !t, e._initializeCallbacks = [], n.forEach((function (e) {
                          return e(t)
                        }))
                      };
                    if (this._isInitialized) return t();
                    n.push(t), 1 === n.length && this._writable.readFile(On, "utf8", Nn("r"), (function (t, n) {
                      if (t) {
                        if (t.errno !== s.ENOENT) return r(t)
                      } else e._deleteLog = n;
                      e._reparseDeletionLog(), r()
                    }))
                  }, e.prototype.isReadOnly = function () {
                    return !1
                  }, e.prototype.supportsSynch = function () {
                    return this._readable.supportsSynch() && this._writable.supportsSynch()
                  }, e.prototype.supportsLinks = function () {
                    return !1
                  }, e.prototype.supportsProps = function () {
                    return this._readable.supportsProps() && this._writable.supportsProps()
                  }, e.prototype.getDeletionLog = function () {
                    return this._deleteLog
                  }, e.prototype.restoreDeletionLog = function (t) {
                    this._deleteLog = t, this._reparseDeletionLog(), this.updateLog("")
                  }, e.prototype.rename = function (t, e, n) {
                    var r = this;
                    if (this.checkInitAsync(n) && !this.checkPathAsync(t, n) && !this.checkPathAsync(e, n)) return t === On || e === On ? n(h.EPERM("Cannot rename deletion log.")) : t === e ? n() : void this.stat(t, !1, (function (i, o) {
                      return i ? n(i) : r.stat(e, !1, (function (i, a) {
                        var u = r;
  
                        function f(r) {
                          var i = r.shift();
                          if (!i) return n();
                          var o = c.resolve(t, i),
                            s = c.resolve(e, i);
                          u.rename(o, s, (function (t) {
                            if (t) return n(t);
                            f(r)
                          }))
                        }
                        var p = 511;
                        if (o.isDirectory()) {
                          if (i) return i.errno !== s.ENOENT ? n(i) : r._writable.exists(t, (function (i) {
                            if (i) return r._writable.rename(t, e, n);
                            r._writable.mkdir(e, p, (function (e) {
                              if (e) return n(e);
                              r._readable.readdir(t, (function (t, e) {
                                if (t) return n();
                                f(e)
                              }))
                            }))
                          }));
                          if (p = a.mode, !a.isDirectory()) return n(h.ENOTDIR(e));
                          r.readdir(e, (function (i, o) {
                            if (o && o.length) return n(h.ENOTEMPTY(e));
                            r._readable.readdir(t, (function (t, e) {
                              if (t) return n();
                              f(e)
                            }))
                          }))
                        }
                        if (a && a.isDirectory()) return n(h.EISDIR(e));
                        r.readFile(t, null, Nn("r"), (function (i, s) {
                          return i ? n(i) : r.writeFile(e, s, null, Nn("w"), o.mode, (function (e) {
                            return e ? n(e) : r.unlink(t, n)
                          }))
                        }))
                      }))
                    }))
                  }, e.prototype.renameSync = function (t, e) {
                    var n = this;
                    if (this.checkInitialized(), this.checkPath(t), this.checkPath(e), t === On || e === On) throw h.EPERM("Cannot rename deletion log.");
                    var r = this.statSync(t, !1);
                    if (r.isDirectory()) {
                      if (t === e) return;
                      var i = 511;
                      if (this.existsSync(e)) {
                        var o = this.statSync(e, !1);
                        if (i = o.mode, !o.isDirectory()) throw h.ENOTDIR(e);
                        if (this.readdirSync(e).length > 0) throw h.ENOTEMPTY(e)
                      }
                      this._writable.existsSync(t) ? this._writable.renameSync(t, e) : this._writable.existsSync(e) || this._writable.mkdirSync(e, i), this._readable.existsSync(t) && this._readable.readdirSync(t).forEach((function (r) {
                        n.renameSync(c.resolve(t, r), c.resolve(e, r))
                      }))
                    } else {
                      if (this.existsSync(e) && this.statSync(e, !1).isDirectory()) throw h.EISDIR(e);
                      this.writeFileSync(e, this.readFileSync(t, null, Nn("r")), null, Nn("w"), r.mode)
                    }
                    t !== e && this.existsSync(t) && this.unlinkSync(t)
                  }, e.prototype.stat = function (t, e, n) {
                    var r = this;
                    this.checkInitAsync(n) && this._writable.stat(t, e, (function (i, o) {
                      i && i.errno === s.ENOENT ? (r._deletedFiles[t] && n(h.ENOENT(t)), r._readable.stat(t, e, (function (t, e) {
                        e && ((e = e.clone()).mode = Fn(e.mode)), n(t, e)
                      }))) : n(i, o)
                    }))
                  }, e.prototype.statSync = function (t, e) {
                    this.checkInitialized();
                    try {
                      return this._writable.statSync(t, e)
                    } catch (oi) {
                      if (this._deletedFiles[t]) throw h.ENOENT(t);
                      var n = this._readable.statSync(t, e).clone();
                      return n.mode = Fn(n.mode), n
                    }
                  }, e.prototype.open = function (t, e, n, r) {
                    var i = this;
                    this.checkInitAsync(r) && !this.checkPathAsync(t, r) && this.stat(t, !1, (function (o, s) {
                      if (!s) return e.pathNotExistsAction() === f.CREATE_FILE ? i.createParentDirectoriesAsync(t, (function (o) {
                        return o ? r(o) : i._writable.open(t, e, n, r)
                      })) : r(h.ENOENT(t));
                      switch (e.pathExistsAction()) {
                        case f.TRUNCATE_FILE:
                          return i.createParentDirectoriesAsync(t, (function (o) {
                            if (o) return r(o);
                            i._writable.open(t, e, n, r)
                          }));
                        case f.NOP:
                          return i._writable.exists(t, (function (o) {
                            o ? i._writable.open(t, e, n, r) : ((s = s.clone()).mode = n, i._readable.readFile(t, null, Nn("r"), (function (n, o) {
                              if (n) return r(n); - 1 === s.size && (s.size = o.length);
                              var a = new Ln(i, t, e, s, o);
                              r(null, a)
                            })))
                          }));
                        default:
                          return r(h.EEXIST(t))
                      }
                    }))
                  }, e.prototype.openSync = function (t, e, n) {
                    if (this.checkInitialized(), this.checkPath(t), t === On) throw h.EPERM("Cannot open deletion log.");
                    if (!this.existsSync(t)) {
                      if (e.pathNotExistsAction() === f.CREATE_FILE) return this.createParentDirectories(t), this._writable.openSync(t, e, n);
                      throw h.ENOENT(t)
                    }
                    switch (e.pathExistsAction()) {
                      case f.TRUNCATE_FILE:
                        return this.createParentDirectories(t), this._writable.openSync(t, e, n);
                      case f.NOP:
                        if (this._writable.existsSync(t)) return this._writable.openSync(t, e, n);
                        var r = this._readable.readFileSync(t, null, Nn("r")),
                          i = this._readable.statSync(t, !1).clone();
                        return i.mode = n, new Ln(this, t, e, i, r);
                      default:
                        throw h.EEXIST(t)
                    }
                  }, e.prototype.unlink = function (t, e) {
                    var n = this;
                    this.checkInitAsync(e) && !this.checkPathAsync(t, e) && this.exists(t, (function (r) {
                      if (!r) return e(h.ENOENT(t));
                      n._writable.exists(t, (function (r) {
                        if (r) return n._writable.unlink(t, (function (r) {
                          if (r) return e(r);
                          n.exists(t, (function (r) {
                            r && n.deletePath(t), e(null)
                          }))
                        }));
                        n.deletePath(t), e(null)
                      }))
                    }))
                  }, e.prototype.unlinkSync = function (t) {
                    if (this.checkInitialized(), this.checkPath(t), !this.existsSync(t)) throw h.ENOENT(t);
                    this._writable.existsSync(t) && this._writable.unlinkSync(t), this.existsSync(t) && this.deletePath(t)
                  }, e.prototype.rmdir = function (t, e) {
                    var n = this;
                    if (this.checkInitAsync(e)) {
                      var r = function () {
                        n.readdir(t, (function (r, i) {
                          return r ? e(r) : i.length ? e(h.ENOTEMPTY(t)) : (n.deletePath(t), void e(null))
                        }))
                      };
                      this.exists(t, (function (i) {
                        if (!i) return e(h.ENOENT(t));
                        n._writable.exists(t, (function (i) {
                          i ? n._writable.rmdir(t, (function (i) {
                            if (i) return e(i);
                            n._readable.exists(t, (function (t) {
                              t ? r() : e()
                            }))
                          })) : r()
                        }))
                      }))
                    }
                  }, e.prototype.rmdirSync = function (t) {
                    if (this.checkInitialized(), !this.existsSync(t)) throw h.ENOENT(t);
                    if (this._writable.existsSync(t) && this._writable.rmdirSync(t), this.existsSync(t)) {
                      if (this.readdirSync(t).length > 0) throw h.ENOTEMPTY(t);
                      this.deletePath(t)
                    }
                  }, e.prototype.mkdir = function (t, e, n) {
                    var r = this;
                    this.checkInitAsync(n) && this.exists(t, (function (i) {
                      if (i) return n(h.EEXIST(t));
                      r.createParentDirectoriesAsync(t, (function (i) {
                        if (i) return n(i);
                        r._writable.mkdir(t, e, n)
                      }))
                    }))
                  }, e.prototype.mkdirSync = function (t, e) {
                    if (this.checkInitialized(), this.existsSync(t)) throw h.EEXIST(t);
                    this.createParentDirectories(t), this._writable.mkdirSync(t, e)
                  }, e.prototype.readdir = function (t, e) {
                    var n = this;
                    this.checkInitAsync(e) && this.stat(t, !1, (function (r, i) {
                      return r ? e(r) : i.isDirectory() ? void n._writable.readdir(t, (function (r, i) {
                        if (r && "ENOENT" !== r.code) return e(r);
                        !r && i || (i = []), n._readable.readdir(t, (function (r, o) {
                          !r && o || (o = []);
                          var s = {},
                            a = i.concat(o.filter((function (e) {
                              return !n._deletedFiles[t + "/" + e]
                            }))).filter((function (t) {
                              var e = !s[t];
                              return s[t] = !0, e
                            }));
                          e(null, a)
                        }))
                      })) : e(h.ENOTDIR(t))
                    }))
                  }, e.prototype.readdirSync = function (t) {
                    var e = this;
                    if (this.checkInitialized(), !this.statSync(t, !1).isDirectory()) throw h.ENOTDIR(t);
                    var n = [];
                    try {
                      n = n.concat(this._writable.readdirSync(t))
                    } catch (oi) {}
                    try {
                      n = n.concat(this._readable.readdirSync(t).filter((function (n) {
                        return !e._deletedFiles[t + "/" + n]
                      })))
                    } catch (oi) {}
                    var r = {};
                    return n.filter((function (t) {
                      var e = !r[t];
                      return r[t] = !0, e
                    }))
                  }, e.prototype.exists = function (t, e) {
                    var n = this;
                    this.checkInitialized(), this._writable.exists(t, (function (r) {
                      if (r) return e(!0);
                      n._readable.exists(t, (function (r) {
                        e(r && !0 !== n._deletedFiles[t])
                      }))
                    }))
                  }, e.prototype.existsSync = function (t) {
                    return this.checkInitialized(), this._writable.existsSync(t) || this._readable.existsSync(t) && !0 !== this._deletedFiles[t]
                  }, e.prototype.chmod = function (t, e, n, r) {
                    var i = this;
                    this.checkInitAsync(r) && this.operateOnWritableAsync(t, (function (o) {
                      if (o) return r(o);
                      i._writable.chmod(t, e, n, r)
                    }))
                  }, e.prototype.chmodSync = function (t, e, n) {
                    var r = this;
                    this.checkInitialized(), this.operateOnWritable(t, (function () {
                      r._writable.chmodSync(t, e, n)
                    }))
                  }, e.prototype.chown = function (t, e, n, r, i) {
                    var o = this;
                    this.checkInitAsync(i) && this.operateOnWritableAsync(t, (function (s) {
                      if (s) return i(s);
                      o._writable.chown(t, e, n, r, i)
                    }))
                  }, e.prototype.chownSync = function (t, e, n, r) {
                    var i = this;
                    this.checkInitialized(), this.operateOnWritable(t, (function () {
                      i._writable.chownSync(t, e, n, r)
                    }))
                  }, e.prototype.utimes = function (t, e, n, r) {
                    var i = this;
                    this.checkInitAsync(r) && this.operateOnWritableAsync(t, (function (o) {
                      if (o) return r(o);
                      i._writable.utimes(t, e, n, r)
                    }))
                  }, e.prototype.utimesSync = function (t, e, n) {
                    var r = this;
                    this.checkInitialized(), this.operateOnWritable(t, (function () {
                      r._writable.utimesSync(t, e, n)
                    }))
                  }, e.prototype.deletePath = function (t) {
                    this._deletedFiles[t] = !0, this.updateLog("d" + t + "\n")
                  }, e.prototype.updateLog = function (t) {
                    var e = this;
                    this._deleteLog += t, this._deleteLogUpdatePending ? this._deleteLogUpdateNeeded = !0 : (this._deleteLogUpdatePending = !0, this._writable.writeFile(On, this._deleteLog, "utf8", d.getFileFlag("w"), 420, (function (t) {
                      e._deleteLogUpdatePending = !1, t ? e._deleteLogError = t : e._deleteLogUpdateNeeded && (e._deleteLogUpdateNeeded = !1, e.updateLog(""))
                    })))
                  }, e.prototype._reparseDeletionLog = function () {
                    var t = this;
                    this._deletedFiles = {}, this._deleteLog.split("\n").forEach((function (e) {
                      t._deletedFiles[e.slice(1)] = "d" === e.slice(0, 1)
                    }))
                  }, e.prototype.checkInitialized = function () {
                    if (!this._isInitialized) throw new h(s.EPERM, "OverlayFS is not initialized. Please initialize OverlayFS using its initialize() method before using it.");
                    if (null !== this._deleteLogError) {
                      var t = this._deleteLogError;
                      throw this._deleteLogError = null, t
                    }
                  }, e.prototype.checkInitAsync = function (t) {
                    if (!this._isInitialized) return t(new h(s.EPERM, "OverlayFS is not initialized. Please initialize OverlayFS using its initialize() method before using it.")), !1;
                    if (null !== this._deleteLogError) {
                      var e = this._deleteLogError;
                      return this._deleteLogError = null, t(e), !1
                    }
                    return !0
                  }, e.prototype.checkPath = function (t) {
                    if (t === On) throw h.EPERM(t)
                  }, e.prototype.checkPathAsync = function (t, e) {
                    return t === On && (e(h.EPERM(t)), !0)
                  }, e.prototype.createParentDirectoriesAsync = function (t, e) {
                    var n = c.dirname(t),
                      r = [],
                      i = this;
  
                    function o() {
                      if (!r.length) return e();
                      var t = r.pop();
                      i._readable.stat(t, !1, (function (n, r) {
                        if (!r) return e();
                        i._writable.mkdir(t, r.mode, (function (t) {
                          if (t) return e(t);
                          o()
                        }))
                      }))
                    }
                    this._writable.stat(n, !1, (function t(e, s) {
                      e ? (r.push(n), n = c.dirname(n), i._writable.stat(n, !1, t)) : o()
                    }))
                  }, e.prototype.createParentDirectories = function (t) {
                    for (var e = this, n = c.dirname(t), r = []; !this._writable.existsSync(n);) r.push(n), n = c.dirname(n);
                    (r = r.reverse()).forEach((function (t) {
                      e._writable.mkdirSync(t, e.statSync(t, !1).mode)
                    }))
                  }, e.prototype.operateOnWritable = function (t, e) {
                    if (!this.existsSync(t)) throw h.ENOENT(t);
                    this._writable.existsSync(t) || this.copyToWritable(t), e()
                  }, e.prototype.operateOnWritableAsync = function (t, e) {
                    var n = this;
                    this.exists(t, (function (r) {
                      if (!r) return e(h.ENOENT(t));
                      n._writable.exists(t, (function (r) {
                        if (!r) return n.copyToWritableAsync(t, e);
                        e()
                      }))
                    }))
                  }, e.prototype.copyToWritable = function (t) {
                    var e = this.statSync(t, !1);
                    e.isDirectory() ? this._writable.mkdirSync(t, e.mode) : this.writeFileSync(t, this._readable.readFileSync(t, null, Nn("r")), null, Nn("w"), this.statSync(t, !1).mode)
                  }, e.prototype.copyToWritableAsync = function (t, e) {
                    var n = this;
                    this.stat(t, !1, (function (r, i) {
                      return r ? e(r) : i.isDirectory() ? n._writable.mkdir(t, i.mode, e) : void n._readable.readFile(t, null, Nn("r"), (function (r, o) {
                        if (r) return e(r);
                        n.writeFile(t, o, null, Nn("w"), i.mode, e)
                      }))
                    }))
                  }, e
                }(X),
                xn = function (t) {
                  function e(n, r, i) {
                    void 0 === i && (i = !0), t.call(this, new Tn(n, r)), R(i, e.Name, {
                      readable: "readable file system",
                      writable: "writable file system"
                    })
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.Create = function (t, n) {
                    try {
                      var r = new e(t.writable, t.readable, !1);
                      r.initialize((function (t) {
                        n(t, r)
                      }), !1)
                    } catch (oi) {
                      n(oi)
                    }
                  }, e.isAvailable = function () {
                    return Tn.isAvailable()
                  }, e.prototype.initialize = function (e, n) {
                    void 0 === n && (n = !0), n && console.warn("[OverlayFS] OverlayFS.initialize() is deprecated and will be removed in the next major release. Please use 'OverlayFS.Create({readable: readable file system instance, writable: writable file system instance}, cb)' to create and initialize OverlayFS instances."), t.prototype.initialize.call(this, e)
                  }, e.prototype.getOverlayedFileSystems = function () {
                    return t.prototype.getFSUnlocked.call(this).getOverlayedFileSystems()
                  }, e.prototype.unwrap = function () {
                    return t.prototype.getFSUnlocked.call(this)
                  }, e
                }(In);
              xn.Name = "OverlayFS", xn.Options = {
                  writable: {
                    type: "object",
                    description: "The file system to write modified files to."
                  },
                  readable: {
                    type: "object",
                    description: "The file system that initially populates this file system."
                  }
                },
                function (t) {
                  t[t.CB = 0] = "CB", t[t.FD = 1] = "FD", t[t.API_ERROR = 2] = "API_ERROR", t[t.STATS = 3] = "STATS", t[t.PROBE = 4] = "PROBE", t[t.FILEFLAG = 5] = "FILEFLAG", t[t.BUFFER = 6] = "BUFFER", t[t.ERROR = 7] = "ERROR"
                }(Rn || (Rn = {}));
              var An = function () {
                this._callbacks = {}, this._nextId = 0
              };
              An.prototype.toRemoteArg = function (t) {
                var e = this._nextId++;
                return this._callbacks[e] = t, {
                  type: Rn.CB,
                  id: e
                }
              }, An.prototype.toLocalArg = function (t) {
                var e = this._callbacks[t];
                return delete this._callbacks[t], e
              };
              var Dn = function () {
                this._fileDescriptors = {}, this._nextId = 0
              };
  
              function Pn(t) {
                return {
                  type: Rn.API_ERROR,
                  errorData: Vn(t.writeToBuffer())
                }
              }
  
              function Cn(t) {
                return h.fromBuffer(Wn(t.errorData))
              }
  
              function Un(t) {
                return {
                  type: Rn.ERROR,
                  name: t.name,
                  message: t.message,
                  stack: t.stack
                }
              }
  
              function Mn(t) {
                var e = Ae[t.name];
                "function" !== typeof e && (e = Error);
                var n = new e(t.message);
                return n.stack = t.stack, n
              }
  
              function jn(t) {
                return {
                  type: Rn.STATS,
                  statsData: Vn(t.toBuffer())
                }
              }
  
              function Bn(t) {
                return y.fromBuffer(Wn(t.statsData))
              }
  
              function zn(t) {
                return {
                  type: Rn.FILEFLAG,
                  flagStr: t.getFlagString()
                }
              }
  
              function qn(t) {
                return d.getFileFlag(t.flagStr)
              }
  
              function Vn(t) {
                return D(t)
              }
  
              function Wn(t) {
                return M(t)
              }
  
              function Hn(t) {
                return {
                  type: Rn.BUFFER,
                  data: Vn(t)
                }
              }
  
              function Zn(t) {
                return Wn(t.data)
              }
              Dn.prototype.toRemoteArg = function (e, n, r, i) {
                var o, s, a = this._nextId++;
                this._fileDescriptors[a] = e, e.stat((function (c, u) {
                  c ? i(c) : (s = Vn(u.toBuffer()), r.isReadable() ? e.read(t.alloc(u.size), 0, u.size, 0, (function (t, e, c) {
                    t ? i(t) : (o = Vn(c), i(null, {
                      type: Rn.FD,
                      id: a,
                      data: o,
                      stat: s,
                      path: n,
                      flag: r.getFlagString()
                    }))
                  })) : i(null, {
                    type: Rn.FD,
                    id: a,
                    data: new ArrayBuffer(0),
                    stat: s,
                    path: n,
                    flag: r.getFlagString()
                  }))
                }))
              }, Dn.prototype.applyFdAPIRequest = function (t, e) {
                var n = this,
                  r = t.args[0];
                this._applyFdChanges(r, (function (i, o) {
                  i ? e(i) : o[t.method]((function (i) {
                    "close" === t.method && delete n._fileDescriptors[r.id], e(i)
                  }))
                }))
              }, Dn.prototype._applyFdChanges = function (t, e) {
                var n = this._fileDescriptors[t.id],
                  r = Wn(t.data),
                  i = y.fromBuffer(Wn(t.stat)),
                  o = d.getFileFlag(t.flag);
                o.isWriteable() ? n.write(r, 0, r.length, o.isAppendable() ? n.getPos() : 0, (function (t) {
                  function s() {
                    n.stat((function (t, r) {
                      t ? e(t) : r.mode !== i.mode ? n.chmod(i.mode, (function (t) {
                        e(t, n)
                      })) : e(t, n)
                    }))
                  }
                  t ? e(t) : o.isAppendable() ? s() : n.truncate(r.length, (function () {
                    s()
                  }))
                })) : e(null, n)
              };
              var Yn = function (t) {
                  function e(e, n, r, i, o, s) {
                    t.call(this, e, n, r, i, s), this._remoteFdId = o
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getRemoteFdId = function () {
                    return this._remoteFdId
                  }, e.prototype.toRemoteArg = function () {
                    return {
                      type: Rn.FD,
                      id: this._remoteFdId,
                      data: Vn(this.getBuffer()),
                      stat: Vn(this.getStats().toBuffer()),
                      path: this.getPath(),
                      flag: this.getFlag().getFlagString()
                    }
                  }, e.prototype.sync = function (t) {
                    this._syncClose("sync", t)
                  }, e.prototype.close = function (t) {
                    this._syncClose("close", t)
                  }, e.prototype._syncClose = function (t, e) {
                    var n = this;
                    this.isDirty() ? this._fs.syncClose(t, this, (function (t) {
                      t || n.resetDirty(), e(t)
                    })) : e()
                  }, e
                }(G),
                Xn = function (e) {
                  function n(t, r) {
                    var i = this;
                    void 0 === r && (r = !0), e.call(this), this._callbackConverter = new An, this._isInitialized = !1, this._isReadOnly = !1, this._supportLinks = !1, this._supportProps = !1, this._worker = t, R(r, n.Name, {
                      worker: "Web Worker instance"
                    }), this._worker.addEventListener("message", (function (t) {
                      var e, n = t.data;
                      if ((e = n) && "object" === typeof e && e.hasOwnProperty("browserfsMessage") && e.browserfsMessage) {
                        var r, o = n.args,
                          s = new Array(o.length);
                        for (r = 0; r < s.length; r++) s[r] = i._argRemote2Local(o[r]);
                        i._callbackConverter.toLocalArg(n.cbId).apply(null, s)
                      }
                    }))
                  }
                  return e && (n.__proto__ = e), n.prototype = Object.create(e && e.prototype), n.prototype.constructor = n, n.Create = function (t, e) {
                    var r = new n(t.worker, !1);
                    r.initialize((function () {
                      e(null, r)
                    }))
                  }, n.isAvailable = function () {
                    return "undefined" !== typeof importScripts || "undefined" !== typeof Worker
                  }, n.attachRemoteListener = function (e) {
                    var n = new Dn;
  
                    function r(e, r, i) {
                      "object" === typeof e ? e instanceof y ? i(null, jn(e)) : e instanceof h ? i(null, Pn(e)) : e instanceof J ? i(null, n.toRemoteArg(e, r[0], r[1], i)) : e instanceof d ? i(null, zn(e)) : e instanceof t ? i(null, Hn(e)) : e instanceof Error ? i(null, Un(e)) : i(null, e) : i(null, e)
                    }
  
                    function i(t, n) {
                      if (!t) return t;
                      if ("object" === typeof t) {
                        if ("number" !== typeof t.type) return t;
                        var i = t;
                        switch (i.type) {
                          case Rn.CB:
                            var o = t.id;
                            return function () {
                              var t, i, s = arguments,
                                a = new Array(arguments.length),
                                c = arguments.length;
  
                              function u(t) {
                                c > 0 && (c = -1, i = {
                                  browserfsMessage: !0,
                                  cbId: o,
                                  args: [Pn(t)]
                                }, e.postMessage(i))
                              }
                              for (t = 0; t < arguments.length; t++) ! function (t, s) {
                                r(s, n, (function (n, r) {
                                  a[t] = r, n ? u(n) : 0 === --c && (i = {
                                    browserfsMessage: !0,
                                    cbId: o,
                                    args: a
                                  }, e.postMessage(i))
                                }))
                              }(t, s[t]);
                              0 === arguments.length && (i = {
                                browserfsMessage: !0,
                                cbId: o,
                                args: a
                              }, e.postMessage(i))
                            };
                          case Rn.API_ERROR:
                            return Cn(i);
                          case Rn.STATS:
                            return Bn(i);
                          case Rn.FILEFLAG:
                            return qn(i);
                          case Rn.BUFFER:
                            return Zn(i);
                          case Rn.ERROR:
                            return Mn(i);
                          default:
                            return t
                        }
                      }
                      return t
                    }
                    e.addEventListener("message", (function (t) {
                      var r, o = t.data;
                      if ((r = o) && "object" === typeof r && r.hasOwnProperty("browserfsMessage") && r.browserfsMessage) {
                        var s = o.args,
                          a = new Array(s.length);
                        switch (o.method) {
                          case "close":
                          case "sync":
                            ! function () {
                              var t = s[1];
                              n.applyFdAPIRequest(o, (function (n) {
                                var r = {
                                  browserfsMessage: !0,
                                  cbId: t.id,
                                  args: n ? [Pn(n)] : []
                                };
                                e.postMessage(r)
                              }))
                            }();
                            break;
                          case "probe":
                            ! function () {
                              var t = I.getRootFS(),
                                n = s[1],
                                r = {
                                  type: Rn.PROBE,
                                  isReadOnly: t.isReadOnly(),
                                  supportsLinks: t.supportsLinks(),
                                  supportsProps: t.supportsProps()
                                },
                                i = {
                                  browserfsMessage: !0,
                                  cbId: n.id,
                                  args: [r]
                                };
                              e.postMessage(i)
                            }();
                            break;
                          default:
                            for (var c = 0; c < s.length; c++) a[c] = i(s[c], a);
                            var u = I.getRootFS();
                            u[o.method].apply(u, a)
                        }
                      }
                    }))
                  }, n.prototype.getName = function () {
                    return n.Name
                  }, n.prototype.initialize = function (t) {
                    var e = this;
                    if (this._isInitialized) t();
                    else {
                      var n = {
                        browserfsMessage: !0,
                        method: "probe",
                        args: [this._argLocal2Remote(z()), this._callbackConverter.toRemoteArg((function (n) {
                          e._isInitialized = !0, e._isReadOnly = n.isReadOnly, e._supportLinks = n.supportsLinks, e._supportProps = n.supportsProps, t()
                        }))]
                      };
                      this._worker.postMessage(n)
                    }
                  }, n.prototype.isReadOnly = function () {
                    return this._isReadOnly
                  }, n.prototype.supportsSynch = function () {
                    return !1
                  }, n.prototype.supportsLinks = function () {
                    return this._supportLinks
                  }, n.prototype.supportsProps = function () {
                    return this._supportProps
                  }, n.prototype.rename = function (t, e, n) {
                    this._rpc("rename", arguments)
                  }, n.prototype.stat = function (t, e, n) {
                    this._rpc("stat", arguments)
                  }, n.prototype.open = function (t, e, n, r) {
                    this._rpc("open", arguments)
                  }, n.prototype.unlink = function (t, e) {
                    this._rpc("unlink", arguments)
                  }, n.prototype.rmdir = function (t, e) {
                    this._rpc("rmdir", arguments)
                  }, n.prototype.mkdir = function (t, e, n) {
                    this._rpc("mkdir", arguments)
                  }, n.prototype.readdir = function (t, e) {
                    this._rpc("readdir", arguments)
                  }, n.prototype.exists = function (t, e) {
                    this._rpc("exists", arguments)
                  }, n.prototype.realpath = function (t, e, n) {
                    this._rpc("realpath", arguments)
                  }, n.prototype.truncate = function (t, e, n) {
                    this._rpc("truncate", arguments)
                  }, n.prototype.readFile = function (t, e, n, r) {
                    this._rpc("readFile", arguments)
                  }, n.prototype.writeFile = function (t, e, n, r, i, o) {
                    this._rpc("writeFile", arguments)
                  }, n.prototype.appendFile = function (t, e, n, r, i, o) {
                    this._rpc("appendFile", arguments)
                  }, n.prototype.chmod = function (t, e, n, r) {
                    this._rpc("chmod", arguments)
                  }, n.prototype.chown = function (t, e, n, r, i) {
                    this._rpc("chown", arguments)
                  }, n.prototype.utimes = function (t, e, n, r) {
                    this._rpc("utimes", arguments)
                  }, n.prototype.link = function (t, e, n) {
                    this._rpc("link", arguments)
                  }, n.prototype.symlink = function (t, e, n, r) {
                    this._rpc("symlink", arguments)
                  }, n.prototype.readlink = function (t, e) {
                    this._rpc("readlink", arguments)
                  }, n.prototype.syncClose = function (t, e, n) {
                    this._worker.postMessage({
                      browserfsMessage: !0,
                      method: t,
                      args: [e.toRemoteArg(), this._callbackConverter.toRemoteArg(n)]
                    })
                  }, n.prototype._argRemote2Local = function (t) {
                    if (!t) return t;
                    if ("object" === typeof t) {
                      if ("number" !== typeof t.type) return t;
                      var e = t;
                      switch (e.type) {
                        case Rn.API_ERROR:
                          return Cn(e);
                        case Rn.FD:
                          var n = e;
                          return new Yn(this, n.path, d.getFileFlag(n.flag), y.fromBuffer(Wn(n.stat)), n.id, Wn(n.data));
                        case Rn.STATS:
                          return Bn(e);
                        case Rn.FILEFLAG:
                          return qn(e);
                        case Rn.BUFFER:
                          return Zn(e);
                        case Rn.ERROR:
                          return Mn(e);
                        default:
                          return t
                      }
                    }
                    return t
                  }, n.prototype._rpc = function (t, e) {
                    for (var n = new Array(e.length), r = 0; r < e.length; r++) n[r] = this._argLocal2Remote(e[r]);
                    var i = {
                      browserfsMessage: !0,
                      method: t,
                      args: n
                    };
                    this._worker.postMessage(i)
                  }, n.prototype._argLocal2Remote = function (e) {
                    if (!e) return e;
                    switch (typeof e) {
                      case "object":
                        return e instanceof y ? jn(e) : e instanceof h ? Pn(e) : e instanceof Yn ? e.toRemoteArg() : e instanceof d ? zn(e) : e instanceof t ? Hn(e) : e instanceof Error ? Un(e) : "Unknown argument";
                      case "function":
                        return this._callbackConverter.toRemoteArg(e);
                      default:
                        return e
                    }
                  }, n
                }(X);
  
              function Kn(t, e, n) {
                var r = new XMLHttpRequest;
                r.open("HEAD", e, t), r.onreadystatechange = function (t) {
                  if (4 === r.readyState) {
                    if (200 !== r.status) return n(new h(r.status, "XHR HEAD error."));
                    try {
                      return n(null, parseInt(r.getResponseHeader("Content-Length") || "-1", 10))
                    } catch (t) {
                      return n(new h(s.EIO, "XHR HEAD error: Could not read content-length."))
                    }
                  }
                }, r.send()
              }
              Xn.Name = "WorkerFS", Xn.Options = {
                worker: {
                  type: "object",
                  description: "The target worker that you want to connect to, or the current worker if in a worker context.",
                  validator: function (t, e) {
                    t.postMessage ? e() : e(new h(s.EINVAL, "option must be a Web Worker instance."))
                  }
                }
              };
              var Jn = function (e, n, r) {
                  var i = new XMLHttpRequest;
                  i.open("GET", e, !0);
                  var o = !0;
                  switch (n) {
                    case "buffer":
                      i.responseType = "arraybuffer";
                      break;
                    case "json":
                      try {
                        i.responseType = "json", o = "json" === i.responseType
                      } catch (oi) {
                        o = !1
                      }
                      break;
                    default:
                      return r(new h(s.EINVAL, "Invalid download type: " + n))
                  }
                  i.onreadystatechange = function (e) {
                    if (4 === i.readyState) {
                      if (200 !== i.status) return r(new h(i.status, "XHR error."));
                      switch (n) {
                        case "buffer":
                          return r(null, i.response ? t.from(i.response) : z());
                        case "json":
                          return r(null, o ? i.response : JSON.parse(i.responseText))
                      }
                    }
                  }, i.send()
                },
                Gn = L && "undefined" !== typeof Blob ? function (e, n) {
                  var r, i, o = new XMLHttpRequest;
                  switch (o.open("GET", e, !1), n) {
                    case "buffer":
                      o.responseType = "arraybuffer";
                      break;
                    case "json":
                      break;
                    default:
                      throw new h(s.EINVAL, "Invalid download type: " + n)
                  }
                  if (o.onreadystatechange = function (e) {
                      if (4 === o.readyState)
                        if (200 === o.status) switch (n) {
                          case "buffer":
                            r = t.from(o.response);
                            break;
                          case "json":
                            r = JSON.parse(o.response)
                        } else i = new h(o.status, "XHR error.")
                    }, o.send(), i) throw i;
                  return r
                } : function (e, n) {
                  var r = new XMLHttpRequest;
                  r.open("GET", e, !1);
                  var i = null,
                    o = null;
                  if (r.overrideMimeType("text/plain; charset=x-user-defined"), r.onreadystatechange = function (e) {
                      if (4 === r.readyState) {
                        if (200 !== r.status) return void(o = new h(r.status, "XHR error."));
                        switch (n) {
                          case "buffer":
                            var s = r.responseText;
                            i = t.alloc(s.length);
                            for (var a = 0; a < s.length; a++) i[a] = s.charCodeAt(a);
                            return;
                          case "json":
                            return void(i = JSON.parse(r.responseText))
                        }
                      }
                    }, r.send(), o) throw o;
                  return i
                },
                Qn = function () {
                  this._index = {}, this.addPath("/", new tr)
                };
              Qn.fromListing = function (t) {
                var e = new Qn,
                  n = new tr;
                e._index["/"] = n;
                for (var r = [
                    ["", t, n]
                  ]; r.length > 0;) {
                  var i = void 0,
                    o = r.pop(),
                    s = o[0],
                    a = o[1],
                    c = o[2];
                  for (var u in a)
                    if (a.hasOwnProperty(u)) {
                      var f = a[u],
                        h = s + "/" + u;
                      f ? (e._index[h] = i = new tr, r.push([h, f, i])) : i = new $n(new y(l.FILE, -1, 365)), c && (c._ls[u] = i)
                    }
                }
                return e
              }, Qn.prototype.fileIterator = function (t) {
                var e = this;
                for (var n in e._index)
                  if (e._index.hasOwnProperty(n))
                    for (var r = e._index[n], i = 0, o = r.getListing(); i < o.length; i += 1) {
                      var s = o[i],
                        a = r.getItem(s);
                      er(a) && t(a.getData())
                    }
              }, Qn.prototype.addPath = function (t, e) {
                if (!e) throw new Error("Inode must be specified");
                if ("/" !== t[0]) throw new Error("Path must be absolute, got: " + t);
                if (this._index.hasOwnProperty(t)) return this._index[t] === e;
                var n = this._split_path(t),
                  r = n[0],
                  i = n[1],
                  o = this._index[r];
                return !(void 0 === o && "/" !== t && (o = new tr, !this.addPath(r, o))) && !("/" !== t && !o.addItem(i, e)) && (nr(e) && (this._index[t] = e), !0)
              }, Qn.prototype.addPathFast = function (t, e) {
                var n = t.lastIndexOf("/"),
                  r = 0 === n ? "/" : t.substring(0, n),
                  i = t.substring(n + 1),
                  o = this._index[r];
                return void 0 === o && (o = new tr, this.addPathFast(r, o)), !!o.addItem(i, e) && (e.isDir() && (this._index[t] = e), !0)
              }, Qn.prototype.removePath = function (t) {
                var e = this._split_path(t),
                  n = e[0],
                  r = e[1],
                  i = this._index[n];
                if (void 0 === i) return null;
                var o = i.remItem(r);
                if (null === o) return null;
                if (nr(o)) {
                  for (var s = 0, a = o.getListing(); s < a.length; s += 1) {
                    var c = a[s];
                    this.removePath(t + "/" + c)
                  }
                  "/" !== t && delete this._index[t]
                }
                return o
              }, Qn.prototype.ls = function (t) {
                var e = this._index[t];
                return void 0 === e ? null : e.getListing()
              }, Qn.prototype.getInode = function (t) {
                var e = this._split_path(t),
                  n = e[0],
                  r = e[1],
                  i = this._index[n];
                return void 0 === i ? null : n === t ? i : i.getItem(r)
              }, Qn.prototype._split_path = function (t) {
                var e = c.dirname(t);
                return [e, t.substr(e.length + ("/" === e ? 0 : 1))]
              };
              var $n = function (t) {
                this.data = t
              };
              $n.prototype.isFile = function () {
                return !0
              }, $n.prototype.isDir = function () {
                return !1
              }, $n.prototype.getData = function () {
                return this.data
              }, $n.prototype.setData = function (t) {
                this.data = t
              };
              var tr = function (t) {
                void 0 === t && (t = null), this.data = t, this._ls = {}
              };
  
              function er(t) {
                return !!t && t.isFile()
              }
  
              function nr(t) {
                return !!t && t.isDir()
              }
              tr.prototype.isFile = function () {
                return !1
              }, tr.prototype.isDir = function () {
                return !0
              }, tr.prototype.getData = function () {
                return this.data
              }, tr.prototype.getStats = function () {
                return new y(l.DIRECTORY, 4096, 365)
              }, tr.prototype.getListing = function () {
                return Object.keys(this._ls)
              }, tr.prototype.getItem = function (t) {
                var e = this._ls[t];
                return e || null
              }, tr.prototype.addItem = function (t, e) {
                return !(t in this._ls) && (this._ls[t] = e, !0)
              }, tr.prototype.remItem = function (t) {
                var e = this._ls[t];
                return void 0 === e ? null : (delete this._ls[t], e)
              };
              var rr = function (t) {
                function e(n, r, i) {
                  void 0 === r && (r = ""), void 0 === i && (i = !0), t.call(this), n || (n = "index.json"), r.length > 0 && "/" !== r.charAt(r.length - 1) && (r += "/"), this.prefixUrl = r;
                  var o = null;
                  if ("string" === typeof n) {
                    if (!(o = this._requestFileSync(n, "json"))) throw new Error("Unable to find listing at URL: ${listingUrlOrObj}")
                  } else o = n;
                  R(i, e.Name, {
                    index: "string" === typeof n ? n : "file index as an object",
                    baseUrl: r
                  }), this._index = Qn.fromListing(o)
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.Create = function (t, n) {
                  void 0 === t.index && (t.index = "index.json"), "string" === typeof t.index ? e.FromURL(t.index, n, t.baseUrl, !1) : n(null, new e(t.index, t.baseUrl, !1))
                }, e.isAvailable = function () {
                  return "undefined" !== typeof XMLHttpRequest && null !== XMLHttpRequest
                }, e.FromURL = function (t, n, r, i) {
                  void 0 === r && (r = t.slice(0, t.lastIndexOf("/") + 1)), void 0 === i && (i = !0), i && console.warn("[XmlHttpRequest] XmlHttpRequest.FromURL() is deprecated and will be removed in the next major release. Please use 'XmlHttpRequest.Create({ index: \"" + t + '", baseUrl: "' + r + "\" }, cb)' instead."), Jn(t, "json", (function (t, i) {
                    t ? n(t) : n(null, new e(i, r, !1))
                  }))
                }, e.prototype.empty = function () {
                  this._index.fileIterator((function (t) {
                    t.fileData = null
                  }))
                }, e.prototype.getName = function () {
                  return e.Name
                }, e.prototype.diskSpace = function (t, e) {
                  e(0, 0)
                }, e.prototype.isReadOnly = function () {
                  return !0
                }, e.prototype.supportsLinks = function () {
                  return !1
                }, e.prototype.supportsProps = function () {
                  return !1
                }, e.prototype.supportsSynch = function () {
                  return !0
                }, e.prototype.preloadFile = function (t, e) {
                  var n = this._index.getInode(t);
                  if (!er(n)) throw h.EISDIR(t);
                  if (null === n) throw h.ENOENT(t);
                  var r = n.getData();
                  r.size = e.length, r.fileData = e
                }, e.prototype.stat = function (t, e, n) {
                  var r, i = this._index.getInode(t);
                  if (null === i) return n(h.ENOENT(t));
                  er(i) ? (r = i.getData()).size < 0 ? this._requestFileSizeAsync(t, (function (t, e) {
                    if (t) return n(t);
                    r.size = e, n(null, r.clone())
                  })) : n(null, r.clone()) : nr(i) ? (r = i.getStats(), n(null, r)) : n(h.FileError(s.EINVAL, t))
                }, e.prototype.statSync = function (t, e) {
                  var n, r = this._index.getInode(t);
                  if (null === r) throw h.ENOENT(t);
                  if (er(r))(n = r.getData()).size < 0 && (n.size = this._requestFileSizeSync(t));
                  else {
                    if (!nr(r)) throw h.FileError(s.EINVAL, t);
                    n = r.getStats()
                  }
                  return n
                }, e.prototype.open = function (t, e, n, r) {
                  if (e.isWriteable()) return r(new h(s.EPERM, t));
                  var i = this,
                    o = this._index.getInode(t);
                  if (null === o) return r(h.ENOENT(t));
                  if (!er(o)) return r(h.EISDIR(t));
                  var a = o.getData();
                  switch (e.pathExistsAction()) {
                    case f.THROW_EXCEPTION:
                    case f.TRUNCATE_FILE:
                      return r(h.EEXIST(t));
                    case f.NOP:
                      if (a.fileData) return r(null, new Q(i, t, e, a.clone(), a.fileData));
                      this._requestFileAsync(t, "buffer", (function (n, o) {
                        return n ? r(n) : (a.size = o.length, a.fileData = o, r(null, new Q(i, t, e, a.clone(), o)))
                      }));
                      break;
                    default:
                      return r(new h(s.EINVAL, "Invalid FileMode object."))
                  }
                }, e.prototype.openSync = function (t, e, n) {
                  if (e.isWriteable()) throw new h(s.EPERM, t);
                  var r = this._index.getInode(t);
                  if (null === r) throw h.ENOENT(t);
                  if (!er(r)) throw h.EISDIR(t);
                  var i = r.getData();
                  switch (e.pathExistsAction()) {
                    case f.THROW_EXCEPTION:
                    case f.TRUNCATE_FILE:
                      throw h.EEXIST(t);
                    case f.NOP:
                      if (i.fileData) return new Q(this, t, e, i.clone(), i.fileData);
                      var o = this._requestFileSync(t, "buffer");
                      return i.size = o.length, i.fileData = o, new Q(this, t, e, i.clone(), o);
                    default:
                      throw new h(s.EINVAL, "Invalid FileMode object.")
                  }
                }, e.prototype.readdir = function (t, e) {
                  try {
                    e(null, this.readdirSync(t))
                  } catch (oi) {
                    e(oi)
                  }
                }, e.prototype.readdirSync = function (t) {
                  var e = this._index.getInode(t);
                  if (null === e) throw h.ENOENT(t);
                  if (nr(e)) return e.getListing();
                  throw h.ENOTDIR(t)
                }, e.prototype.readFile = function (t, e, n, r) {
                  var i = r;
                  this.open(t, n, 420, (function (t, n) {
                    if (t) return r(t);
                    r = function (t, e) {
                      n.close((function (n) {
                        return t || (t = n), i(t, e)
                      }))
                    };
                    var o = n.getBuffer();
                    null === e ? r(t, j(o)) : function (t, e, n) {
                      try {
                        n(null, t.toString(e))
                      } catch (oi) {
                        n(oi)
                      }
                    }(o, e, r)
                  }))
                }, e.prototype.readFileSync = function (t, e, n) {
                  var r = this.openSync(t, n, 420);
                  try {
                    var i = r.getBuffer();
                    return null === e ? j(i) : i.toString(e)
                  } finally {
                    r.closeSync()
                  }
                }, e.prototype.getXhrPath = function (t) {
                  return "/" === t.charAt(0) && (t = t.slice(1)), this.prefixUrl + t
                }, e.prototype._requestFileAsync = function (t, e, n) {
                  Jn(this.getXhrPath(t), e, n)
                }, e.prototype._requestFileSync = function (t, e) {
                  return Gn(this.getXhrPath(t), e)
                }, e.prototype._requestFileSizeAsync = function (t, e) {
                  ! function (t, e) {
                    Kn(!0, t, e)
                  }(this.getXhrPath(t), e)
                }, e.prototype._requestFileSizeSync = function (t) {
                  return function (t) {
                    var e = -1;
                    return Kn(!1, t, (function (t, n) {
                      if (t) throw t;
                      e = n
                    })), e
                  }(this.getXhrPath(t))
                }, e
              }(X);
              rr.Name = "XmlHttpRequest", rr.Options = {
                index: {
                  type: ["string", "object"],
                  optional: !0,
                  description: "URL to a file index as a JSON file or the file index object itself, generated with the make_xhrfs_index script. Defaults to `index.json`."
                },
                baseUrl: {
                  type: "string",
                  optional: !0,
                  description: "Used as the URL prefix for fetched files. Default: Fetch files relative to the index."
                }
              };
              var ir = function () {};
              ir.str2byte = function (t, e) {
                for (var n = t.length > e.length ? e.length : t.length, r = 0; r < n; r++) {
                  var i = t.charCodeAt(r);
                  if (i > 127) {
                    var o = ir.extendedChars.indexOf(t.charAt(r));
                    o > -1 && (i = o + 128)
                  }
                  e[i] = r
                }
                return n
              }, ir.byte2str = function (t) {
                for (var e = new Array(t.length), n = 0; n < t.length; n++) {
                  var r = t[n];
                  e[n] = r > 127 ? ir.extendedChars[r - 128] : String.fromCharCode(r)
                }
                return e.join("")
              }, ir.byteLength = function (t) {
                return t.length
              }, ir.extendedChars = ["\xc7", "\xfc", "\xe9", "\xe2", "\xe4", "\xe0", "\xe5", "\xe7", "\xea", "\xeb", "\xe8", "\xef", "\xee", "\xec", "\xc4", "\xc5", "\xc9", "\xe6", "\xc6", "\xf4", "\xf6", "\xf2", "\xfb", "\xf9", "\xff", "\xd6", "\xdc", "\xf8", "\xa3", "\xd8", "\xd7", "\u0192", "\xe1", "\xed", "\xf3", "\xfa", "\xf1", "\xd1", "\xaa", "\xba", "\xbf", "\xae", "\xac", "\xbd", "\xbc", "\xa1", "\xab", "\xbb", "_", "_", "_", "\xa6", "\xa6", "\xc1", "\xc2", "\xc0", "\xa9", "\xa6", "\xa6", "+", "+", "\xa2", "\xa5", "+", "+", "-", "-", "+", "-", "+", "\xe3", "\xc3", "+", "+", "-", "-", "\xa6", "-", "+", "\xa4", "\xf0", "\xd0", "\xca", "\xcb", "\xc8", "i", "\xcd", "\xce", "\xcf", "+", "+", "_", "_", "\xa6", "\xcc", "_", "\xd3", "\xdf", "\xd4", "\xd2", "\xf5", "\xd5", "\xb5", "\xfe", "\xde", "\xda", "\xdb", "\xd9", "\xfd", "\xdd", "\xaf", "\xb4", "\xad", "\xb1", "_", "\xbe", "\xb6", "\xa7", "\xf7", "\xb8", "\xb0", "\xa8", "\xb7", "\xb9", "\xb3", "\xb2", "_", " "];
              var or, sr, ar = n(31).inflateRaw,
                cr = {};
  
              function ur(t, e) {
                return new Date(1980 + (e >> 9), (e >> 5 & 15) - 1, 31 & e, t >> 11, t >> 5 & 63, 31 & t)
              }
  
              function fr(t, e, n, r) {
                return 0 === r ? "" : e ? t.toString("utf8", n, n + r) : ir.byte2str(t.slice(n, n + r))
              }! function (t) {
                t[t.MSDOS = 0] = "MSDOS", t[t.AMIGA = 1] = "AMIGA", t[t.OPENVMS = 2] = "OPENVMS", t[t.UNIX = 3] = "UNIX", t[t.VM_CMS = 4] = "VM_CMS", t[t.ATARI_ST = 5] = "ATARI_ST", t[t.OS2_HPFS = 6] = "OS2_HPFS", t[t.MAC = 7] = "MAC", t[t.Z_SYSTEM = 8] = "Z_SYSTEM", t[t.CP_M = 9] = "CP_M", t[t.NTFS = 10] = "NTFS", t[t.MVS = 11] = "MVS", t[t.VSE = 12] = "VSE", t[t.ACORN_RISC = 13] = "ACORN_RISC", t[t.VFAT = 14] = "VFAT", t[t.ALT_MVS = 15] = "ALT_MVS", t[t.BEOS = 16] = "BEOS", t[t.TANDEM = 17] = "TANDEM", t[t.OS_400 = 18] = "OS_400", t[t.OSX = 19] = "OSX"
              }(or || (or = {})),
              function (t) {
                t[t.STORED = 0] = "STORED", t[t.SHRUNK = 1] = "SHRUNK", t[t.REDUCED_1 = 2] = "REDUCED_1", t[t.REDUCED_2 = 3] = "REDUCED_2", t[t.REDUCED_3 = 4] = "REDUCED_3", t[t.REDUCED_4 = 5] = "REDUCED_4", t[t.IMPLODE = 6] = "IMPLODE", t[t.DEFLATE = 8] = "DEFLATE", t[t.DEFLATE64 = 9] = "DEFLATE64", t[t.TERSE_OLD = 10] = "TERSE_OLD", t[t.BZIP2 = 12] = "BZIP2", t[t.LZMA = 14] = "LZMA", t[t.TERSE_NEW = 18] = "TERSE_NEW", t[t.LZ77 = 19] = "LZ77", t[t.WAVPACK = 97] = "WAVPACK", t[t.PPMD = 98] = "PPMD"
              }(sr || (sr = {}));
              var hr = function (t) {
                if (this.data = t, 67324752 !== t.readUInt32LE(0)) throw new h(s.EINVAL, "Invalid Zip file: Local file header has invalid signature: " + this.data.readUInt32LE(0))
              };
              hr.prototype.versionNeeded = function () {
                return this.data.readUInt16LE(4)
              }, hr.prototype.flags = function () {
                return this.data.readUInt16LE(6)
              }, hr.prototype.compressionMethod = function () {
                return this.data.readUInt16LE(8)
              }, hr.prototype.lastModFileTime = function () {
                return ur(this.data.readUInt16LE(10), this.data.readUInt16LE(12))
              }, hr.prototype.rawLastModFileTime = function () {
                return this.data.readUInt32LE(10)
              }, hr.prototype.crc32 = function () {
                return this.data.readUInt32LE(14)
              }, hr.prototype.fileNameLength = function () {
                return this.data.readUInt16LE(26)
              }, hr.prototype.extraFieldLength = function () {
                return this.data.readUInt16LE(28)
              }, hr.prototype.fileName = function () {
                return fr(this.data, this.useUTF8(), 30, this.fileNameLength())
              }, hr.prototype.extraField = function () {
                var t = 30 + this.fileNameLength();
                return this.data.slice(t, t + this.extraFieldLength())
              }, hr.prototype.totalSize = function () {
                return 30 + this.fileNameLength() + this.extraFieldLength()
              }, hr.prototype.useUTF8 = function () {
                return 2048 === (2048 & this.flags())
              };
              var pr = function (t, e, n) {
                this.header = t, this.record = e, this.data = n
              };
              pr.prototype.decompress = function () {
                var t = this.header.compressionMethod(),
                  e = cr[t];
                if (e) return e(this.data, this.record.compressedSize(), this.record.uncompressedSize(), this.record.flag());
                var n = sr[t];
                throw n || (n = "Unknown: " + t), new h(s.EINVAL, "Invalid compression method on file '" + this.header.fileName() + "': " + n)
              }, pr.prototype.getHeader = function () {
                return this.header
              }, pr.prototype.getRecord = function () {
                return this.record
              }, pr.prototype.getRawData = function () {
                return this.data
              };
              var lr = function (t) {
                this.data = t
              };
              lr.prototype.crc32 = function () {
                return this.data.readUInt32LE(0)
              }, lr.prototype.compressedSize = function () {
                return this.data.readUInt32LE(4)
              }, lr.prototype.uncompressedSize = function () {
                return this.data.readUInt32LE(8)
              };
              var dr = function (t) {
                if (this.data = t, 134630224 !== this.data.readUInt32LE(0)) throw new h(s.EINVAL, "Invalid archive extra data record signature: " + this.data.readUInt32LE(0))
              };
              dr.prototype.length = function () {
                return this.data.readUInt32LE(4)
              }, dr.prototype.extraFieldData = function () {
                return this.data.slice(8, 8 + this.length())
              };
              var yr = function (t) {
                if (this.data = t, 84233040 !== this.data.readUInt32LE(0)) throw new h(s.EINVAL, "Invalid digital signature signature: " + this.data.readUInt32LE(0))
              };
              yr.prototype.size = function () {
                return this.data.readUInt16LE(4)
              }, yr.prototype.signatureData = function () {
                return this.data.slice(6, 6 + this.size())
              };
              var gr = function (t, e) {
                if (this.zipData = t, this.data = e, 33639248 !== this.data.readUInt32LE(0)) throw new h(s.EINVAL, "Invalid Zip file: Central directory record has invalid signature: " + this.data.readUInt32LE(0));
                this._filename = this.produceFilename()
              };
              gr.prototype.versionMadeBy = function () {
                return this.data.readUInt16LE(4)
              }, gr.prototype.versionNeeded = function () {
                return this.data.readUInt16LE(6)
              }, gr.prototype.flag = function () {
                return this.data.readUInt16LE(8)
              }, gr.prototype.compressionMethod = function () {
                return this.data.readUInt16LE(10)
              }, gr.prototype.lastModFileTime = function () {
                return ur(this.data.readUInt16LE(12), this.data.readUInt16LE(14))
              }, gr.prototype.rawLastModFileTime = function () {
                return this.data.readUInt32LE(12)
              }, gr.prototype.crc32 = function () {
                return this.data.readUInt32LE(16)
              }, gr.prototype.compressedSize = function () {
                return this.data.readUInt32LE(20)
              }, gr.prototype.uncompressedSize = function () {
                return this.data.readUInt32LE(24)
              }, gr.prototype.fileNameLength = function () {
                return this.data.readUInt16LE(28)
              }, gr.prototype.extraFieldLength = function () {
                return this.data.readUInt16LE(30)
              }, gr.prototype.fileCommentLength = function () {
                return this.data.readUInt16LE(32)
              }, gr.prototype.diskNumberStart = function () {
                return this.data.readUInt16LE(34)
              }, gr.prototype.internalAttributes = function () {
                return this.data.readUInt16LE(36)
              }, gr.prototype.externalAttributes = function () {
                return this.data.readUInt32LE(38)
              }, gr.prototype.headerRelativeOffset = function () {
                return this.data.readUInt32LE(42)
              }, gr.prototype.produceFilename = function () {
                return fr(this.data, this.useUTF8(), 46, this.fileNameLength()).replace(/\\/g, "/")
              }, gr.prototype.fileName = function () {
                return this._filename
              }, gr.prototype.rawFileName = function () {
                return this.data.slice(46, 46 + this.fileNameLength())
              }, gr.prototype.extraField = function () {
                var t = 44 + this.fileNameLength();
                return this.data.slice(t, t + this.extraFieldLength())
              }, gr.prototype.fileComment = function () {
                var t = 46 + this.fileNameLength() + this.extraFieldLength();
                return fr(this.data, this.useUTF8(), t, this.fileCommentLength())
              }, gr.prototype.rawFileComment = function () {
                var t = 46 + this.fileNameLength() + this.extraFieldLength();
                return this.data.slice(t, t + this.fileCommentLength())
              }, gr.prototype.totalSize = function () {
                return 46 + this.fileNameLength() + this.extraFieldLength() + this.fileCommentLength()
              }, gr.prototype.isDirectory = function () {
                var t = this.fileName();
                return !!(16 & this.externalAttributes()) || "/" === t.charAt(t.length - 1)
              }, gr.prototype.isFile = function () {
                return !this.isDirectory()
              }, gr.prototype.useUTF8 = function () {
                return 2048 === (2048 & this.flag())
              }, gr.prototype.isEncrypted = function () {
                return 1 === (1 & this.flag())
              }, gr.prototype.getFileData = function () {
                var t = this.headerRelativeOffset(),
                  e = new hr(this.zipData.slice(t));
                return new pr(e, this, this.zipData.slice(t + e.totalSize()))
              }, gr.prototype.getData = function () {
                return this.getFileData().decompress()
              }, gr.prototype.getRawData = function () {
                return this.getFileData().getRawData()
              }, gr.prototype.getStats = function () {
                return new y(l.FILE, this.uncompressedSize(), 365, new Date, this.lastModFileTime())
              };
              var mr = function (t) {
                if (this.data = t, 101010256 !== this.data.readUInt32LE(0)) throw new h(s.EINVAL, "Invalid Zip file: End of central directory record has invalid signature: " + this.data.readUInt32LE(0))
              };
              mr.prototype.diskNumber = function () {
                return this.data.readUInt16LE(4)
              }, mr.prototype.cdDiskNumber = function () {
                return this.data.readUInt16LE(6)
              }, mr.prototype.cdDiskEntryCount = function () {
                return this.data.readUInt16LE(8)
              }, mr.prototype.cdTotalEntryCount = function () {
                return this.data.readUInt16LE(10)
              }, mr.prototype.cdSize = function () {
                return this.data.readUInt32LE(12)
              }, mr.prototype.cdOffset = function () {
                return this.data.readUInt32LE(16)
              }, mr.prototype.cdZipCommentLength = function () {
                return this.data.readUInt16LE(20)
              }, mr.prototype.cdZipComment = function () {
                return fr(this.data, !0, 22, this.cdZipCommentLength())
              }, mr.prototype.rawCdZipComment = function () {
                return this.data.slice(22, 22 + this.cdZipCommentLength())
              };
              var _r = function (t, e, n, r) {
                  this.index = t, this.directoryEntries = e, this.eocd = n, this.data = r
                },
                vr = function (t) {
                  function e(n, r, i) {
                    void 0 === r && (r = ""), void 0 === i && (i = !0), t.call(this), this.name = r, this._index = new Qn, this._directoryEntries = [], this._eocd = null, R(i, e.Name, {
                      zipData: "zip data as a Buffer",
                      name: r
                    }), n instanceof _r ? (this._index = n.index, this._directoryEntries = n.directoryEntries, this._eocd = n.eocd, this.data = n.data) : (this.data = n, this.populateIndex())
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.Create = function (t, n) {
                    try {
                      e.computeIndex(t.zipData, (function (r) {
                        var i = new e(r, t.name, !1);
                        n(null, i)
                      }), !1)
                    } catch (oi) {
                      n(oi)
                    }
                  }, e.isAvailable = function () {
                    return !0
                  }, e.RegisterDecompressionMethod = function (t, e) {
                    cr[t] = e
                  }, e.computeIndex = function (t, n, r) {
                    void 0 === r && (r = !0), r && console.warn("[ZipFS] ZipFS.computeIndex is now deprecated, and will be removed in the next major release. Please update your code to use 'ZipFS.Create({ zipData: zip file as a Buffer}, cb)' instead.");
                    var i = new Qn,
                      o = e.getEOCD(t);
                    if (o.diskNumber() !== o.cdDiskNumber()) throw new h(s.EINVAL, "ZipFS does not support spanned zip files.");
                    var a = o.cdOffset();
                    if (4294967295 === a) throw new h(s.EINVAL, "ZipFS does not support Zip64.");
                    var c = a + o.cdSize();
                    e.computeIndexResponsive(t, i, a, c, n, [], o)
                  }, e.getEOCD = function (t) {
                    for (var e = Math.min(65557, t.length - 1), n = 22; n < e; n++)
                      if (101010256 === t.readUInt32LE(t.length - n)) return new mr(t.slice(t.length - n));
                    throw new h(s.EINVAL, "Invalid ZIP file: Could not locate End of Central Directory signature.")
                  }, e.addToIndex = function (t, e) {
                    var n = t.fileName();
                    if ("/" === n.charAt(0)) throw new Error("WHY IS THIS ABSOLUTE");
                    "/" === n.charAt(n.length - 1) && (n = n.substr(0, n.length - 1)), t.isDirectory() ? e.addPathFast("/" + n, new tr(t)) : e.addPathFast("/" + n, new $n(t))
                  }, e.computeIndexResponsive = function (t, n, r, i, o, s, a) {
                    if (r < i) {
                      for (var c = 0; c++ < 200 && r < i;) {
                        var u = new gr(t, t.slice(r));
                        e.addToIndex(u, n), r += u.totalSize(), s.push(u)
                      }
                      Sn((function () {
                        e.computeIndexResponsive(t, n, r, i, o, s, a)
                      }))
                    } else o(new _r(n, s, a, t))
                  }, e.prototype.getName = function () {
                    return e.Name + ("" !== this.name ? " " + this.name : "")
                  }, e.prototype.getCentralDirectoryEntry = function (t) {
                    var e = this._index.getInode(t);
                    if (null === e) throw h.ENOENT(t);
                    if (er(e)) return e.getData();
                    if (nr(e)) return e.getData();
                    throw h.EPERM("Invalid inode: " + e)
                  }, e.prototype.getCentralDirectoryEntryAt = function (t) {
                    var e = this._directoryEntries[t];
                    if (!e) throw new RangeError("Invalid directory index: " + t + ".");
                    return e
                  }, e.prototype.getNumberOfCentralDirectoryEntries = function () {
                    return this._directoryEntries.length
                  }, e.prototype.getEndOfCentralDirectory = function () {
                    return this._eocd
                  }, e.prototype.diskSpace = function (t, e) {
                    e(this.data.length, 0)
                  }, e.prototype.isReadOnly = function () {
                    return !0
                  }, e.prototype.supportsLinks = function () {
                    return !1
                  }, e.prototype.supportsProps = function () {
                    return !1
                  }, e.prototype.supportsSynch = function () {
                    return !0
                  }, e.prototype.statSync = function (t, e) {
                    var n, r = this._index.getInode(t);
                    if (null === r) throw h.ENOENT(t);
                    if (er(r)) n = r.getData().getStats();
                    else {
                      if (!nr(r)) throw new h(s.EINVAL, "Invalid inode.");
                      n = r.getStats()
                    }
                    return n
                  }, e.prototype.openSync = function (t, e, n) {
                    if (e.isWriteable()) throw new h(s.EPERM, t);
                    var r = this._index.getInode(t);
                    if (!r) throw h.ENOENT(t);
                    if (!er(r)) throw h.EISDIR(t);
                    var i = r.getData(),
                      o = i.getStats();
                    switch (e.pathExistsAction()) {
                      case f.THROW_EXCEPTION:
                      case f.TRUNCATE_FILE:
                        throw h.EEXIST(t);
                      case f.NOP:
                        return new Q(this, t, e, o, i.getData());
                      default:
                        throw new h(s.EINVAL, "Invalid FileMode object.")
                    }
                  }, e.prototype.readdirSync = function (t) {
                    var e = this._index.getInode(t);
                    if (e) {
                      if (nr(e)) return e.getListing();
                      throw h.ENOTDIR(t)
                    }
                    throw h.ENOENT(t)
                  }, e.prototype.readFileSync = function (t, e, n) {
                    var r = this.openSync(t, n, 420);
                    try {
                      var i = r.getBuffer();
                      return null === e ? j(i) : i.toString(e)
                    } finally {
                      r.closeSync()
                    }
                  }, e.prototype.populateIndex = function () {
                    var t = this,
                      n = this._eocd = e.getEOCD(this.data);
                    if (n.diskNumber() !== n.cdDiskNumber()) throw new h(s.EINVAL, "ZipFS does not support spanned zip files.");
                    var r = n.cdOffset();
                    if (4294967295 === r) throw new h(s.EINVAL, "ZipFS does not support Zip64.");
                    for (var i = r + n.cdSize(); r < i;) {
                      var o = new gr(t.data, t.data.slice(r));
                      r += o.totalSize(), e.addToIndex(o, t._index), t._directoryEntries.push(o)
                    }
                  }, e
                }(K);
  
              function wr(t, e, n) {
                return t.toString("ascii", e, e + n).trim()
              }
  
              function Er(t, e, n) {
                if (1 === n) return String.fromCharCode(t[e]);
                for (var r = Math.floor(n / 2), i = new Array(r), o = 0; o < r; o++) {
                  var s = e + (o << 1);
                  i[o] = String.fromCharCode(t[s + 1] | t[s] << 8)
                }
                return i.join("")
              }
  
              function br(t, e) {
                var n = parseInt(wr(t, e, 4), 10),
                  r = parseInt(wr(t, e + 4, 2), 10),
                  i = parseInt(wr(t, e + 6, 2), 10),
                  o = parseInt(wr(t, e + 8, 2), 10),
                  s = parseInt(wr(t, e + 10, 2), 10),
                  a = parseInt(wr(t, e + 12, 2), 10),
                  c = parseInt(wr(t, e + 14, 2), 10);
                return new Date(n, r, i, o, s, a, 100 * c)
              }
  
              function Sr(t, e) {
                var n = t[e],
                  r = t[e + 1],
                  i = t[e + 2],
                  o = t[e + 3],
                  s = t[e + 4],
                  a = t[e + 5];
                return new Date(n, r - 1, i, o, s, a)
              }
  
              function kr(t, e) {
                var n = t.slice(e),
                  r = new Ar(n);
                switch (r.signatureWord()) {
                  case 17221:
                    return new Dr(n);
                  case 20548:
                    return new Pr(n);
                  case 21328:
                    return new Cr(n);
                  case 21332:
                    return new Ur(n);
                  case 17746:
                    return new Mr(n);
                  case 17747:
                    return new jr(n);
                  case 20568:
                    return new zr(n);
                  case 20558:
                    return new qr(n);
                  case 21324:
                    return new Vr(n);
                  case 20045:
                    return new Hr(n);
                  case 17228:
                    return new Zr(n);
                  case 20556:
                    return new Yr(n);
                  case 21061:
                    return new Xr(n);
                  case 21574:
                    return new Kr(n);
                  case 21318:
                    return new Jr(n);
                  case 21074:
                    return new Br(n);
                  default:
                    return r
                }
              }
  
              function Ir(t, e, n, r) {
                n -= 4;
                for (var i = new Array; e < n;) {
                  var o = kr(t, e),
                    s = o.length();
                  if (0 === s) return i;
                  if (e += s, o instanceof Ur) break;
                  o instanceof Dr ? i = i.concat(o.getEntries(r)) : i.push(o)
                }
                return i
              }
              vr.Name = "ZipFS", vr.Options = {
                zipData: {
                  type: "object",
                  description: "The zip file as a Buffer object.",
                  validator: q
                },
                name: {
                  type: "string",
                  optional: !0,
                  description: "The name of the zip file (optional)."
                }
              }, vr.CompressionMethod = sr, vr.RegisterDecompressionMethod(sr.DEFLATE, (function (t, e, n) {
                return C(ar(t.slice(0, e), {
                  chunkSize: n
                }))
              })), vr.RegisterDecompressionMethod(sr.STORED, (function (t, e, n) {
                return j(t, 0, n)
              }));
              var Or = function (t) {
                this._data = t
              };
              Or.prototype.type = function () {
                return this._data[0]
              }, Or.prototype.standardIdentifier = function () {
                return wr(this._data, 1, 5)
              }, Or.prototype.version = function () {
                return this._data[6]
              }, Or.prototype.data = function () {
                return this._data.slice(7, 2048)
              };
              var Fr = function (t) {
                  function e(e) {
                    t.call(this, e), this._root = null
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.systemIdentifier = function () {
                    return this._getString32(8)
                  }, e.prototype.volumeIdentifier = function () {
                    return this._getString32(40)
                  }, e.prototype.volumeSpaceSize = function () {
                    return this._data.readUInt32LE(80)
                  }, e.prototype.volumeSetSize = function () {
                    return this._data.readUInt16LE(120)
                  }, e.prototype.volumeSequenceNumber = function () {
                    return this._data.readUInt16LE(124)
                  }, e.prototype.logicalBlockSize = function () {
                    return this._data.readUInt16LE(128)
                  }, e.prototype.pathTableSize = function () {
                    return this._data.readUInt32LE(132)
                  }, e.prototype.locationOfTypeLPathTable = function () {
                    return this._data.readUInt32LE(140)
                  }, e.prototype.locationOfOptionalTypeLPathTable = function () {
                    return this._data.readUInt32LE(144)
                  }, e.prototype.locationOfTypeMPathTable = function () {
                    return this._data.readUInt32BE(148)
                  }, e.prototype.locationOfOptionalTypeMPathTable = function () {
                    return this._data.readUInt32BE(152)
                  }, e.prototype.rootDirectoryEntry = function (t) {
                    return null === this._root && (this._root = this._constructRootDirectoryRecord(this._data.slice(156)), this._root.rootCheckForRockRidge(t)), this._root
                  }, e.prototype.volumeSetIdentifier = function () {
                    return this._getString(190, 128)
                  }, e.prototype.publisherIdentifier = function () {
                    return this._getString(318, 128)
                  }, e.prototype.dataPreparerIdentifier = function () {
                    return this._getString(446, 128)
                  }, e.prototype.applicationIdentifier = function () {
                    return this._getString(574, 128)
                  }, e.prototype.copyrightFileIdentifier = function () {
                    return this._getString(702, 38)
                  }, e.prototype.abstractFileIdentifier = function () {
                    return this._getString(740, 36)
                  }, e.prototype.bibliographicFileIdentifier = function () {
                    return this._getString(776, 37)
                  }, e.prototype.volumeCreationDate = function () {
                    return br(this._data, 813)
                  }, e.prototype.volumeModificationDate = function () {
                    return br(this._data, 830)
                  }, e.prototype.volumeExpirationDate = function () {
                    return br(this._data, 847)
                  }, e.prototype.volumeEffectiveDate = function () {
                    return br(this._data, 864)
                  }, e.prototype.fileStructureVersion = function () {
                    return this._data[881]
                  }, e.prototype.applicationUsed = function () {
                    return this._data.slice(883, 1395)
                  }, e.prototype.reserved = function () {
                    return this._data.slice(1395, 2048)
                  }, e.prototype._getString32 = function (t) {
                    return this._getString(t, 32)
                  }, e
                }(Or),
                Nr = function (t) {
                  function e(e) {
                    if (t.call(this, e), 1 !== this.type()) throw new h(s.EIO, "Invalid primary volume descriptor.")
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.name = function () {
                    return "ISO9660"
                  }, e.prototype._constructRootDirectoryRecord = function (t) {
                    return new Tr(t, -1)
                  }, e.prototype._getString = function (t, e) {
                    return this._getString(t, e)
                  }, e
                }(Fr),
                Rr = function (t) {
                  function e(e) {
                    if (t.call(this, e), 2 !== this.type()) throw new h(s.EIO, "Invalid supplementary volume descriptor.");
                    var n = this.escapeSequence(),
                      r = n[2];
                    if (37 !== n[0] || 47 !== n[1] || 64 !== r && 67 !== r && 69 !== r) throw new h(s.EIO, "Unrecognized escape sequence for SupplementaryVolumeDescriptor: " + n.toString())
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.name = function () {
                    return "Joliet"
                  }, e.prototype.escapeSequence = function () {
                    return this._data.slice(88, 120)
                  }, e.prototype._constructRootDirectoryRecord = function (t) {
                    return new xr(t, -1)
                  }, e.prototype._getString = function (t, e) {
                    return Er(this._data, t, e)
                  }, e
                }(Fr),
                Lr = function (t, e) {
                  this._suEntries = null, this._fileOrDir = null, this._data = t, this._rockRidgeOffset = e
                };
              Lr.prototype.hasRockRidge = function () {
                return this._rockRidgeOffset > -1
              }, Lr.prototype.getRockRidgeOffset = function () {
                return this._rockRidgeOffset
              }, Lr.prototype.rootCheckForRockRidge = function (t) {
                var e = this.getDirectory(t);
                this._rockRidgeOffset = e.getDotEntry(t)._getRockRidgeOffset(t), this._rockRidgeOffset > -1 && (this._fileOrDir = null)
              }, Lr.prototype.length = function () {
                return this._data[0]
              }, Lr.prototype.extendedAttributeRecordLength = function () {
                return this._data[1]
              }, Lr.prototype.lba = function () {
                return 2048 * this._data.readUInt32LE(2)
              }, Lr.prototype.dataLength = function () {
                return this._data.readUInt32LE(10)
              }, Lr.prototype.recordingDate = function () {
                return Sr(this._data, 18)
              }, Lr.prototype.fileFlags = function () {
                return this._data[25]
              }, Lr.prototype.fileUnitSize = function () {
                return this._data[26]
              }, Lr.prototype.interleaveGapSize = function () {
                return this._data[27]
              }, Lr.prototype.volumeSequenceNumber = function () {
                return this._data.readUInt16LE(28)
              }, Lr.prototype.identifier = function () {
                return this._getString(33, this._data[32])
              }, Lr.prototype.fileName = function (t) {
                if (this.hasRockRidge()) {
                  var e = this._rockRidgeFilename(t);
                  if (null !== e) return e
                }
                var n = this.identifier();
                if (this.isDirectory(t)) return n;
                var r = n.indexOf(";");
                return -1 === r ? n : "." === n[r - 1] ? n.slice(0, r - 1) : n.slice(0, r)
              }, Lr.prototype.isDirectory = function (t) {
                var e = !!(2 & this.fileFlags());
                return !e && this.hasRockRidge() && (e = this.getSUEntries(t).filter((function (t) {
                  return t instanceof Zr
                })).length > 0), e
              }, Lr.prototype.isSymlink = function (t) {
                return this.hasRockRidge() && this.getSUEntries(t).filter((function (t) {
                  return t instanceof Vr
                })).length > 0
              }, Lr.prototype.getSymlinkPath = function (t) {
                for (var e = "", n = this.getSUEntries(t), r = this._getGetString(), i = 0, o = n; i < o.length; i += 1) {
                  var s = o[i];
                  if (s instanceof Vr) {
                    for (var a = 0, c = s.componentRecords(); a < c.length; a += 1) {
                      var u = c[a],
                        f = u.flags();
                      2 & f ? e += "./" : 4 & f ? e += "../" : 8 & f ? e += "/" : (e += u.content(r), 1 & f || (e += "/"))
                    }
                    if (!s.continueFlag()) break
                  }
                }
                return e.length > 1 && "/" === e[e.length - 1] ? e.slice(0, e.length - 1) : e
              }, Lr.prototype.getFile = function (t) {
                if (this.isDirectory(t)) throw new Error("Tried to get a File from a directory.");
                return null === this._fileOrDir && (this._fileOrDir = t.slice(this.lba(), this.lba() + this.dataLength())), this._fileOrDir
              }, Lr.prototype.getDirectory = function (t) {
                if (!this.isDirectory(t)) throw new Error("Tried to get a Directory from a file.");
                return null === this._fileOrDir && (this._fileOrDir = this._constructDirectory(t)), this._fileOrDir
              }, Lr.prototype.getSUEntries = function (t) {
                return this._suEntries || this._constructSUEntries(t), this._suEntries
              }, Lr.prototype._rockRidgeFilename = function (t) {
                var e = this.getSUEntries(t).filter((function (t) {
                  return t instanceof Hr
                }));
                if (0 === e.length || 6 & e[0].flags()) return null;
                for (var n = "", r = this._getGetString(), i = 0, o = e; i < o.length; i += 1) {
                  var s = o[i];
                  if (n += s.name(r), !(1 & s.flags())) break
                }
                return n
              }, Lr.prototype._constructSUEntries = function (t) {
                var e = 33 + this._data[32];
                e % 2 === 1 && e++, e += this._rockRidgeOffset, this._suEntries = Ir(this._data, e, this.length(), t)
              }, Lr.prototype._getRockRidgeOffset = function (t) {
                this._rockRidgeOffset = 0;
                var e = this.getSUEntries(t);
                if (e.length > 0) {
                  var n = e[0];
                  if (n instanceof Cr && n.checkBytesPass())
                    for (var r = 1; r < e.length; r++) {
                      var i = e[r];
                      if (i instanceof Br || i instanceof Mr && "IEEE_P1282" === i.extensionIdentifier()) return n.bytesSkipped()
                    }
                }
                return this._rockRidgeOffset = -1, -1
              };
              var Tr = function (t) {
                  function e(e, n) {
                    t.call(this, e, n)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype._getString = function (t, e) {
                    return wr(this._data, t, e)
                  }, e.prototype._constructDirectory = function (t) {
                    return new Qr(this, t)
                  }, e.prototype._getGetString = function () {
                    return wr
                  }, e
                }(Lr),
                xr = function (t) {
                  function e(e, n) {
                    t.call(this, e, n)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype._getString = function (t, e) {
                    return Er(this._data, t, e)
                  }, e.prototype._constructDirectory = function (t) {
                    return new $r(this, t)
                  }, e.prototype._getGetString = function () {
                    return Er
                  }, e
                }(Lr),
                Ar = function (t) {
                  this._data = t
                };
              Ar.prototype.signatureWord = function () {
                return this._data.readUInt16BE(0)
              }, Ar.prototype.signatureWordString = function () {
                return wr(this._data, 0, 2)
              }, Ar.prototype.length = function () {
                return this._data[2]
              }, Ar.prototype.suVersion = function () {
                return this._data[3]
              };
              var Dr = function (t) {
                  function e(e) {
                    t.call(this, e), this._entries = null
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.continuationLba = function () {
                    return this._data.readUInt32LE(4)
                  }, e.prototype.continuationLbaOffset = function () {
                    return this._data.readUInt32LE(12)
                  }, e.prototype.continuationLength = function () {
                    return this._data.readUInt32LE(20)
                  }, e.prototype.getEntries = function (t) {
                    if (!this._entries) {
                      var e = 2048 * this.continuationLba() + this.continuationLbaOffset();
                      this._entries = Ir(t, e, this.continuationLength(), t)
                    }
                    return this._entries
                  }, e
                }(Ar),
                Pr = function (t) {
                  function e(e) {
                    t.call(this, e)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
                }(Ar),
                Cr = function (t) {
                  function e(e) {
                    t.call(this, e)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.checkBytesPass = function () {
                    return 190 === this._data[4] && 239 === this._data[5]
                  }, e.prototype.bytesSkipped = function () {
                    return this._data[6]
                  }, e
                }(Ar),
                Ur = function (t) {
                  function e(e) {
                    t.call(this, e)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
                }(Ar),
                Mr = function (t) {
                  function e(e) {
                    t.call(this, e)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.identifierLength = function () {
                    return this._data[4]
                  }, e.prototype.descriptorLength = function () {
                    return this._data[5]
                  }, e.prototype.sourceLength = function () {
                    return this._data[6]
                  }, e.prototype.extensionVersion = function () {
                    return this._data[7]
                  }, e.prototype.extensionIdentifier = function () {
                    return wr(this._data, 8, this.identifierLength())
                  }, e.prototype.extensionDescriptor = function () {
                    return wr(this._data, 8 + this.identifierLength(), this.descriptorLength())
                  }, e.prototype.extensionSource = function () {
                    return wr(this._data, 8 + this.identifierLength() + this.descriptorLength(), this.sourceLength())
                  }, e
                }(Ar),
                jr = function (t) {
                  function e(e) {
                    t.call(this, e)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.extensionSequence = function () {
                    return this._data[4]
                  }, e
                }(Ar),
                Br = function (t) {
                  function e(e) {
                    t.call(this, e)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
                }(Ar),
                zr = function (t) {
                  function e(e) {
                    t.call(this, e)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.mode = function () {
                    return this._data.readUInt32LE(4)
                  }, e.prototype.fileLinks = function () {
                    return this._data.readUInt32LE(12)
                  }, e.prototype.uid = function () {
                    return this._data.readUInt32LE(20)
                  }, e.prototype.gid = function () {
                    return this._data.readUInt32LE(28)
                  }, e.prototype.inode = function () {
                    return this._data.readUInt32LE(36)
                  }, e
                }(Ar),
                qr = function (t) {
                  function e(e) {
                    t.call(this, e)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.devTHigh = function () {
                    return this._data.readUInt32LE(4)
                  }, e.prototype.devTLow = function () {
                    return this._data.readUInt32LE(12)
                  }, e
                }(Ar),
                Vr = function (t) {
                  function e(e) {
                    t.call(this, e)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.flags = function () {
                    return this._data[4]
                  }, e.prototype.continueFlag = function () {
                    return 1 & this.flags()
                  }, e.prototype.componentRecords = function () {
                    for (var t = new Array, e = 5; e < this.length();) {
                      var n = new Wr(this._data.slice(e));
                      t.push(n), e += n.length()
                    }
                    return t
                  }, e
                }(Ar),
                Wr = function (t) {
                  this._data = t
                };
              Wr.prototype.flags = function () {
                return this._data[0]
              }, Wr.prototype.length = function () {
                return 2 + this.componentLength()
              }, Wr.prototype.componentLength = function () {
                return this._data[1]
              }, Wr.prototype.content = function (t) {
                return t(this._data, 2, this.componentLength())
              };
              var Hr = function (t) {
                  function e(e) {
                    t.call(this, e)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.flags = function () {
                    return this._data[4]
                  }, e.prototype.name = function (t) {
                    return t(this._data, 5, this.length() - 5)
                  }, e
                }(Ar),
                Zr = function (t) {
                  function e(e) {
                    t.call(this, e)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.childDirectoryLba = function () {
                    return this._data.readUInt32LE(4)
                  }, e
                }(Ar),
                Yr = function (t) {
                  function e(e) {
                    t.call(this, e)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.parentDirectoryLba = function () {
                    return this._data.readUInt32LE(4)
                  }, e
                }(Ar),
                Xr = function (t) {
                  function e(e) {
                    t.call(this, e)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
                }(Ar),
                Kr = function (t) {
                  function e(e) {
                    t.call(this, e)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.flags = function () {
                    return this._data[4]
                  }, e.prototype.creation = function () {
                    return 1 & this.flags() ? this._longFormDates() ? br(this._data, 5) : Sr(this._data, 5) : null
                  }, e.prototype.modify = function () {
                    if (2 & this.flags()) {
                      var t = 1 & this.flags() ? 1 : 0;
                      return this._longFormDates ? br(this._data, 5 + 17 * t) : Sr(this._data, 5 + 7 * t)
                    }
                    return null
                  }, e.prototype.access = function () {
                    if (4 & this.flags()) {
                      var t = 1 & this.flags() ? 1 : 0;
                      return t += 2 & this.flags() ? 1 : 0, this._longFormDates ? br(this._data, 5 + 17 * t) : Sr(this._data, 5 + 7 * t)
                    }
                    return null
                  }, e.prototype.backup = function () {
                    if (16 & this.flags()) {
                      var t = 1 & this.flags() ? 1 : 0;
                      return t += 2 & this.flags() ? 1 : 0, t += 4 & this.flags() ? 1 : 0, this._longFormDates ? br(this._data, 5 + 17 * t) : Sr(this._data, 5 + 7 * t)
                    }
                    return null
                  }, e.prototype.expiration = function () {
                    if (32 & this.flags()) {
                      var t = 1 & this.flags() ? 1 : 0;
                      return t += 2 & this.flags() ? 1 : 0, t += 4 & this.flags() ? 1 : 0, t += 16 & this.flags() ? 1 : 0, this._longFormDates ? br(this._data, 5 + 17 * t) : Sr(this._data, 5 + 7 * t)
                    }
                    return null
                  }, e.prototype.effective = function () {
                    if (64 & this.flags()) {
                      var t = 1 & this.flags() ? 1 : 0;
                      return t += 2 & this.flags() ? 1 : 0, t += 4 & this.flags() ? 1 : 0, t += 16 & this.flags() ? 1 : 0, t += 32 & this.flags() ? 1 : 0, this._longFormDates ? br(this._data, 5 + 17 * t) : Sr(this._data, 5 + 7 * t)
                    }
                    return null
                  }, e.prototype._longFormDates = function () {
                    return !!this.flags()
                  }, e
                }(Ar),
                Jr = function (t) {
                  function e(e) {
                    t.call(this, e)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.virtualSizeHigh = function () {
                    return this._data.readUInt32LE(4)
                  }, e.prototype.virtualSizeLow = function () {
                    return this._data.readUInt32LE(12)
                  }, e.prototype.tableDepth = function () {
                    return this._data[20]
                  }, e
                }(Ar),
                Gr = function (t, e) {
                  var n = this;
                  this._fileList = [], this._fileMap = {}, this._record = t;
                  var r = t.lba(),
                    i = r + t.dataLength();
                  for (2 & t.fileFlags() || (r = 2048 * t.getSUEntries(e).filter((function (t) {
                      return t instanceof Zr
                    }))[0].childDirectoryLba(), i = 1 / 0); r < i;)
                    if (0 !== e[r]) {
                      var o = n._constructDirectoryRecord(e.slice(r)),
                        s = o.fileName(e);
                      "\0" !== s && "\x01" !== s ? o.hasRockRidge() && 0 !== o.getSUEntries(e).filter((function (t) {
                        return t instanceof Xr
                      })).length || (n._fileMap[s] = o, n._fileList.push(s)) : i === 1 / 0 && (i = r + o.dataLength()), r += o.length()
                    } else r++
                };
              Gr.prototype.getRecord = function (t) {
                return this._fileMap[t]
              }, Gr.prototype.getFileList = function () {
                return this._fileList
              }, Gr.prototype.getDotEntry = function (t) {
                return this._constructDirectoryRecord(t.slice(this._record.lba()))
              };
              var Qr = function (t) {
                  function e(e, n) {
                    t.call(this, e, n)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype._constructDirectoryRecord = function (t) {
                    return new Tr(t, this._record.getRockRidgeOffset())
                  }, e
                }(Gr),
                $r = function (t) {
                  function e(e, n) {
                    t.call(this, e, n)
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype._constructDirectoryRecord = function (t) {
                    return new xr(t, this._record.getRockRidgeOffset())
                  }, e
                }(Gr),
                ti = function (t) {
                  function e(n, r, i) {
                    var o = this;
                    void 0 === r && (r = ""), void 0 === i && (i = !0), t.call(this), this._data = n, R(i, e.Name, {
                      data: "ISO data as a Buffer",
                      name: r
                    });
                    for (var a = !1, c = 32768, u = new Array; !a;) {
                      var f = n.slice(c);
                      switch (new Or(f).type()) {
                        case 1:
                          u.push(new Nr(f));
                          break;
                        case 2:
                          u.push(new Rr(f));
                          break;
                        case 255:
                          a = !0
                      }
                      c += 2048
                    }
                    if (0 === u.length) throw new h(s.EIO, "Unable to find a suitable volume descriptor.");
                    u.forEach((function (t) {
                      o._pvd && 2 === o._pvd.type() || (o._pvd = t)
                    })), this._root = this._pvd.rootDirectoryEntry(n), this._name = r
                  }
                  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.Create = function (t, n) {
                    var r, i;
                    try {
                      r = new e(t.data, t.name, !1)
                    } catch (i) {
                      i = i
                    } finally {
                      n(void 0, r)
                    }
                  }, e.isAvailable = function () {
                    return !0
                  }, e.prototype.getName = function () {
                    var t = "IsoFS" + this._name + (this._pvd ? "-" + this._pvd.name() : "");
                    return this._root && this._root.hasRockRidge() && (t += "-RockRidge"), t
                  }, e.prototype.diskSpace = function (t, e) {
                    e(this._data.length, 0)
                  }, e.prototype.isReadOnly = function () {
                    return !0
                  }, e.prototype.supportsLinks = function () {
                    return !1
                  }, e.prototype.supportsProps = function () {
                    return !1
                  }, e.prototype.supportsSynch = function () {
                    return !0
                  }, e.prototype.statSync = function (t, e) {
                    var n = this._getDirectoryRecord(t);
                    if (null === n) throw h.ENOENT(t);
                    return this._getStats(t, n)
                  }, e.prototype.openSync = function (t, e, n) {
                    if (e.isWriteable()) throw new h(s.EPERM, t);
                    var r = this._getDirectoryRecord(t);
                    if (!r) throw h.ENOENT(t);
                    if (r.isSymlink(this._data)) return this.openSync(c.resolve(t, r.getSymlinkPath(this._data)), e, n);
                    if (r.isDirectory(this._data)) throw h.EISDIR(t);
                    var i = r.getFile(this._data),
                      o = this._getStats(t, r);
                    switch (e.pathExistsAction()) {
                      case f.THROW_EXCEPTION:
                      case f.TRUNCATE_FILE:
                        throw h.EEXIST(t);
                      case f.NOP:
                        return new Q(this, t, e, o, i);
                      default:
                        throw new h(s.EINVAL, "Invalid FileMode object.")
                    }
                  }, e.prototype.readdirSync = function (t) {
                    var e = this._getDirectoryRecord(t);
                    if (e) {
                      if (e.isDirectory(this._data)) return e.getDirectory(this._data).getFileList().slice(0);
                      throw h.ENOTDIR(t)
                    }
                    throw h.ENOENT(t)
                  }, e.prototype.readFileSync = function (t, e, n) {
                    var r = this.openSync(t, n, 420);
                    try {
                      var i = r.getBuffer();
                      return null === e ? j(i) : i.toString(e)
                    } finally {
                      r.closeSync()
                    }
                  }, e.prototype._getDirectoryRecord = function (t) {
                    if ("/" === t) return this._root;
                    for (var e = t.split("/").slice(1), n = this._root, r = 0, i = e; r < i.length; r += 1) {
                      var o = i[r];
                      if (!n.isDirectory(this._data)) return null;
                      if (!(n = n.getDirectory(this._data).getRecord(o))) return null
                    }
                    return n
                  }, e.prototype._getStats = function (t, e) {
                    if (e.isSymlink(this._data)) {
                      var n = c.resolve(t, e.getSymlinkPath(this._data)),
                        r = this._getDirectoryRecord(n);
                      return r ? this._getStats(n, r) : null
                    }
                    var i = e.dataLength(),
                      o = 365,
                      s = e.recordingDate(),
                      a = s,
                      u = s,
                      f = s;
                    if (e.hasRockRidge())
                      for (var h = 0, p = e.getSUEntries(this._data); h < p.length; h += 1) {
                        var d = p[h];
                        if (d instanceof zr) o = d.mode();
                        else if (d instanceof Kr) {
                          var g = d.flags();
                          4 & g && (a = d.access()), 2 & g && (u = d.modify()), 1 & g && (f = d.creation())
                        }
                      }
                    return o &= 365, new y(e.isDirectory(this._data) ? l.DIRECTORY : l.FILE, i, o, a, u, f)
                  }, e
                }(K);
              ti.Name = "IsoFS", ti.Options = {
                data: {
                  type: "object",
                  description: "The ISO file in a buffer",
                  validator: q
                }
              }, [tt, Ie, Ne, Re, Ue, Ge, on, ti, un, fn, xn, Xn, rr, vr].forEach((function (t) {
                var e = t.Create;
                t.Create = function (n, r) {
                  var i = "function" === typeof n,
                    o = i ? n : r,
                    s = i ? {} : n;
                  V(t, s, (function (n) {
                    n ? o(n) : e.call(t, s, o)
                  }))
                }
              }));
              var ei = {
                AsyncMirror: tt,
                Dropbox: Ie,
                Emscripten: Ne,
                FolderAdapter: Re,
                HTML5FS: Ue,
                InMemory: Ge,
                IndexedDB: on,
                IsoFS: ti,
                LocalStorage: un,
                MountableFileSystem: fn,
                OverlayFS: xn,
                WorkerFS: Xn,
                XmlHttpRequest: rr,
                ZipFS: vr
              };
  
              function ni(t) {
                switch (t) {
                  case "fs":
                    return I;
                  case "path":
                    return c;
                  case "buffer":
                    return a;
                  case "process":
                    return o;
                  case "bfs_utils":
                    return W;
                  default:
                    return ei[t]
                }
              }
  
              function ri(t) {
                return I.initialize(t)
              }
  
              function ii(t, e) {
                var n = t.fs;
                if (!n) return e(new h(s.EPERM, 'Missing "fs" property on configuration object.'));
                var r = t.options,
                  i = 0,
                  o = !1;
  
                function a() {
                  if (!o) {
                    o = !0;
                    var t = ei[n];
                    t ? t.Create(r, e) : e(new h(s.EPERM, "File system " + n + " is not available in BrowserFS."))
                  }
                }
                if (null !== r && "object" === typeof r) {
                  var c = !1;
                  Object.keys(r).filter((function (t) {
                    return "fs" !== t
                  })).forEach((function (t) {
                    var n = r[t];
                    null !== n && "object" === typeof n && n.fs && (i++, ii(n, (function (n, s) {
                      if (i--, n) {
                        if (o) return;
                        o = !0, e(n)
                      } else r[t] = s, 0 === i && c && a()
                    })))
                  })), c = !0
                }
                0 === i && a()
              }
              o.initializeTTYs && o.initializeTTYs(), "undefined" !== typeof ArrayBuffer && "undefined" !== typeof Uint8Array && (Uint8Array.prototype.slice || (Uint8Array.prototype.slice = function (t, e) {
                return void 0 === t && (t = 0), void 0 === e && (e = this.length), t < 0 && (t = this.length + t) < 0 && (t = 0), e < 0 && (e = this.length + e) < 0 && (e = 0), e < t && (e = t), new Uint8Array(this.buffer, this.byteOffset + t, e - t)
              })), e.install = function (e) {
                e.Buffer = t, e.process = o;
                var n = e.require ? e.require : null;
                e.require = function (t) {
                  var e = ni(t);
                  return e || n.apply(null, Array.prototype.slice.call(arguments, 0))
                }
              }, e.registerFileSystem = function (t, e) {
                ei[t] = e
              }, e.BFSRequire = ni, e.initialize = ri, e.configure = function (t, e) {
                ii(t, (function (t, n) {
                  n ? (ri(n), e()) : e(t)
                }))
              }, e.getFileSystem = ii, e.EmscriptenFS = Y, e.FileSystem = ei, e.Errors = p, e.setImmediate = Sn
            }).call(e, n(1), function () {
              return this
            }(), n(5)(t), n(6))
          }, function (t, e, n) {
            t.exports = n(2).Buffer
          }, function (t, e, n) {
            (function (t) {
              "use strict";
              var r = n(3),
                i = n(4);
              e.Buffer = t, e.SlowBuffer = function (e) {
                return +e != e && (e = 0), t.alloc(+e)
              }, e.INSPECT_MAX_BYTES = 50;
              var o = 2147483647;
  
              function s(e) {
                if (e > o) throw new RangeError("Invalid typed array length");
                var n = new Uint8Array(e);
                return n.__proto__ = t.prototype, n
              }
  
              function t(t, e, n) {
                if ("number" === typeof t) {
                  if ("string" === typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                  return u(t)
                }
                return a(t, e, n)
              }
  
              function a(e, n, r) {
                if ("number" === typeof e) throw new TypeError('"value" argument must not be a number');
                return j(e) ? function (e, n, r) {
                  if (n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                  if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                  var i;
                  return (i = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r)).__proto__ = t.prototype, i
                }(e, n, r) : "string" === typeof e ? function (e, n) {
                  if ("string" === typeof n && "" !== n || (n = "utf8"), !t.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                  var r = 0 | p(e, n),
                    i = s(r),
                    o = i.write(e, n);
                  return o !== r && (i = i.slice(0, o)), i
                }(e, n) : function (e) {
                  if (t.isBuffer(e)) {
                    var n = 0 | h(e.length),
                      r = s(n);
                    return 0 === r.length || e.copy(r, 0, 0, n), r
                  }
                  if (e) {
                    if (B(e) || "length" in e) return "number" !== typeof e.length || z(e.length) ? s(0) : f(e);
                    if ("Buffer" === e.type && Array.isArray(e.data)) return f(e.data)
                  }
                  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(e)
              }
  
              function c(t) {
                if ("number" !== typeof t) throw new TypeError('"size" argument must be a number');
                if (t < 0) throw new RangeError('"size" argument must not be negative')
              }
  
              function u(t) {
                return c(t), s(t < 0 ? 0 : 0 | h(t))
              }
  
              function f(t) {
                for (var e = t.length < 0 ? 0 : 0 | h(t.length), n = s(e), r = 0; r < e; r += 1) n[r] = 255 & t[r];
                return n
              }
  
              function h(t) {
                if (t >= o) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
                return 0 | t
              }
  
              function p(e, n) {
                if (t.isBuffer(e)) return e.length;
                if (B(e) || j(e)) return e.byteLength;
                "string" !== typeof e && (e = "" + e);
                var r = e.length;
                if (0 === r) return 0;
                for (var i = !1;;) switch (n) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return r;
                  case "utf8":
                  case "utf-8":
                  case void 0:
                    return C(e).length;
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return 2 * r;
                  case "hex":
                    return r >>> 1;
                  case "base64":
                    return U(e).length;
                  default:
                    if (i) return C(e).length;
                    n = ("" + n).toLowerCase(), i = !0
                }
              }
  
              function l(t, e, n) {
                var r = !1;
                if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                if ((n >>>= 0) <= (e >>>= 0)) return "";
                for (t || (t = "utf8");;) switch (t) {
                  case "hex":
                    return N(this, e, n);
                  case "utf8":
                  case "utf-8":
                    return k(this, e, n);
                  case "ascii":
                    return O(this, e, n);
                  case "latin1":
                  case "binary":
                    return F(this, e, n);
                  case "base64":
                    return S(this, e, n);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return R(this, e, n);
                  default:
                    if (r) throw new TypeError("Unknown encoding: " + t);
                    t = (t + "").toLowerCase(), r = !0
                }
              }
  
              function d(t, e, n) {
                var r = t[e];
                t[e] = t[n], t[n] = r
              }
  
              function y(e, n, r, i, o) {
                if (0 === e.length) return -1;
                if ("string" === typeof r ? (i = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), z(r = +r) && (r = o ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                  if (o) return -1;
                  r = e.length - 1
                } else if (r < 0) {
                  if (!o) return -1;
                  r = 0
                }
                if ("string" === typeof n && (n = t.from(n, i)), t.isBuffer(n)) return 0 === n.length ? -1 : g(e, n, r, i, o);
                if ("number" === typeof n) return n &= 255, "function" === typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, n, r) : Uint8Array.prototype.lastIndexOf.call(e, n, r) : g(e, [n], r, i, o);
                throw new TypeError("val must be string, number or Buffer")
              }
  
              function g(t, e, n, r, i) {
                var o, s = 1,
                  a = t.length,
                  c = e.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                  if (t.length < 2 || e.length < 2) return -1;
                  s = 2, a /= 2, c /= 2, n /= 2
                }
  
                function u(t, e) {
                  return 1 === s ? t[e] : t.readUInt16BE(e * s)
                }
                if (i) {
                  var f = -1;
                  for (o = n; o < a; o++)
                    if (u(t, o) === u(e, -1 === f ? 0 : o - f)) {
                      if (-1 === f && (f = o), o - f + 1 === c) return f * s
                    } else - 1 !== f && (o -= o - f), f = -1
                } else
                  for (n + c > a && (n = a - c), o = n; o >= 0; o--) {
                    for (var h = !0, p = 0; p < c; p++)
                      if (u(t, o + p) !== u(e, p)) {
                        h = !1;
                        break
                      } if (h) return o
                  }
                return -1
              }
  
              function m(t, e, n, r) {
                n = Number(n) || 0;
                var i = t.length - n;
                r ? (r = Number(r)) > i && (r = i) : r = i;
                var o = e.length;
                if (o % 2 !== 0) throw new TypeError("Invalid hex string");
                r > o / 2 && (r = o / 2);
                for (var s = 0; s < r; ++s) {
                  var a = parseInt(e.substr(2 * s, 2), 16);
                  if (z(a)) return s;
                  t[n + s] = a
                }
                return s
              }
  
              function _(t, e, n, r) {
                return M(C(e, t.length - n), t, n, r)
              }
  
              function v(t, e, n, r) {
                return M(function (t) {
                  for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                  return e
                }(e), t, n, r)
              }
  
              function w(t, e, n, r) {
                return v(t, e, n, r)
              }
  
              function E(t, e, n, r) {
                return M(U(e), t, n, r)
              }
  
              function b(t, e, n, r) {
                return M(function (t, e) {
                  for (var n, r, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) r = (n = t.charCodeAt(s)) >> 8, i = n % 256, o.push(i), o.push(r);
                  return o
                }(e, t.length - n), t, n, r)
              }
  
              function S(t, e, n) {
                return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n))
              }
  
              function k(t, e, n) {
                n = Math.min(t.length, n);
                for (var r = [], i = e; i < n;) {
                  var o, s, a, c, u = t[i],
                    f = null,
                    h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                  if (i + h <= n) switch (h) {
                    case 1:
                      u < 128 && (f = u);
                      break;
                    case 2:
                      128 === (192 & (o = t[i + 1])) && (c = (31 & u) << 6 | 63 & o) > 127 && (f = c);
                      break;
                    case 3:
                      o = t[i + 1], s = t[i + 2], 128 === (192 & o) && 128 === (192 & s) && (c = (15 & u) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (c < 55296 || c > 57343) && (f = c);
                      break;
                    case 4:
                      o = t[i + 1], s = t[i + 2], a = t[i + 3], 128 === (192 & o) && 128 === (192 & s) && 128 === (192 & a) && (c = (15 & u) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && c < 1114112 && (f = c)
                  }
                  null === f ? (f = 65533, h = 1) : f > 65535 && (f -= 65536, r.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), r.push(f), i += h
                }
                return function (t) {
                  var e = t.length;
                  if (e <= I) return String.fromCharCode.apply(String, t);
                  for (var n = "", r = 0; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += I));
                  return n
                }(r)
              }
              e.kMaxLength = o, t.TYPED_ARRAY_SUPPORT = function () {
                try {
                  var t = new Uint8Array(1);
                  return t.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function () {
                      return 42
                    }
                  }, 42 === t.foo()
                } catch (e) {
                  return !1
                }
              }(), t.TYPED_ARRAY_SUPPORT || "undefined" === typeof console || "function" !== typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), "undefined" !== typeof Symbol && Symbol.species && t[Symbol.species] === t && Object.defineProperty(t, Symbol.species, {
                value: null,
                configurable: !0,
                enumerable: !1,
                writable: !1
              }), t.poolSize = 8192, t.from = function (t, e, n) {
                return a(t, e, n)
              }, t.prototype.__proto__ = Uint8Array.prototype, t.__proto__ = Uint8Array, t.alloc = function (t, e, n) {
                return function (t, e, n) {
                  return c(t), t <= 0 ? s(t) : void 0 !== e ? "string" === typeof n ? s(t).fill(e, n) : s(t).fill(e) : s(t)
                }(t, e, n)
              }, t.allocUnsafe = function (t) {
                return u(t)
              }, t.allocUnsafeSlow = function (t) {
                return u(t)
              }, t.isBuffer = function (t) {
                return null != t && !0 === t._isBuffer
              }, t.compare = function (e, n) {
                if (!t.isBuffer(e) || !t.isBuffer(n)) throw new TypeError("Arguments must be Buffers");
                if (e === n) return 0;
                for (var r = e.length, i = n.length, o = 0, s = Math.min(r, i); o < s; ++o)
                  if (e[o] !== n[o]) {
                    r = e[o], i = n[o];
                    break
                  } return r < i ? -1 : i < r ? 1 : 0
              }, t.isEncoding = function (t) {
                switch (String(t).toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "latin1":
                  case "binary":
                  case "base64":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return !0;
                  default:
                    return !1
                }
              }, t.concat = function (e, n) {
                if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return t.alloc(0);
                var r;
                if (void 0 === n)
                  for (n = 0, r = 0; r < e.length; ++r) n += e[r].length;
                var i = t.allocUnsafe(n),
                  o = 0;
                for (r = 0; r < e.length; ++r) {
                  var s = e[r];
                  if (!t.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                  s.copy(i, o), o += s.length
                }
                return i
              }, t.byteLength = p, t.prototype._isBuffer = !0, t.prototype.swap16 = function () {
                var t = this.length;
                if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var e = 0; e < t; e += 2) d(this, e, e + 1);
                return this
              }, t.prototype.swap32 = function () {
                var t = this.length;
                if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var e = 0; e < t; e += 4) d(this, e, e + 3), d(this, e + 1, e + 2);
                return this
              }, t.prototype.swap64 = function () {
                var t = this.length;
                if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var e = 0; e < t; e += 8) d(this, e, e + 7), d(this, e + 1, e + 6), d(this, e + 2, e + 5), d(this, e + 3, e + 4);
                return this
              }, t.prototype.toString = function () {
                var t = this.length;
                return 0 === t ? "" : 0 === arguments.length ? k(this, 0, t) : l.apply(this, arguments)
              }, t.prototype.equals = function (e) {
                if (!t.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === t.compare(this, e)
              }, t.prototype.inspect = function () {
                var t = "",
                  n = e.INSPECT_MAX_BYTES;
                return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">"
              }, t.prototype.compare = function (e, n, r, i, o) {
                if (!t.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === n && (n = 0), void 0 === r && (r = e ? e.length : 0), void 0 === i && (i = 0), void 0 === o && (o = this.length), n < 0 || r > e.length || i < 0 || o > this.length) throw new RangeError("out of range index");
                if (i >= o && n >= r) return 0;
                if (i >= o) return -1;
                if (n >= r) return 1;
                if (this === e) return 0;
                for (var s = (o >>>= 0) - (i >>>= 0), a = (r >>>= 0) - (n >>>= 0), c = Math.min(s, a), u = this.slice(i, o), f = e.slice(n, r), h = 0; h < c; ++h)
                  if (u[h] !== f[h]) {
                    s = u[h], a = f[h];
                    break
                  } return s < a ? -1 : a < s ? 1 : 0
              }, t.prototype.includes = function (t, e, n) {
                return -1 !== this.indexOf(t, e, n)
              }, t.prototype.indexOf = function (t, e, n) {
                return y(this, t, e, n, !0)
              }, t.prototype.lastIndexOf = function (t, e, n) {
                return y(this, t, e, n, !1)
              }, t.prototype.write = function (t, e, n, r) {
                if (void 0 === e) r = "utf8", n = this.length, e = 0;
                else if (void 0 === n && "string" === typeof e) r = e, n = this.length, e = 0;
                else {
                  if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                  e >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                }
                var i = this.length - e;
                if ((void 0 === n || n > i) && (n = i), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8");
                for (var o = !1;;) switch (r) {
                  case "hex":
                    return m(this, t, e, n);
                  case "utf8":
                  case "utf-8":
                    return _(this, t, e, n);
                  case "ascii":
                    return v(this, t, e, n);
                  case "latin1":
                  case "binary":
                    return w(this, t, e, n);
                  case "base64":
                    return E(this, t, e, n);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return b(this, t, e, n);
                  default:
                    if (o) throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase(), o = !0
                }
              }, t.prototype.toJSON = function () {
                return {
                  type: "Buffer",
                  data: Array.prototype.slice.call(this._arr || this, 0)
                }
              };
              var I = 4096;
  
              function O(t, e, n) {
                var r = "";
                n = Math.min(t.length, n);
                for (var i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
                return r
              }
  
              function F(t, e, n) {
                var r = "";
                n = Math.min(t.length, n);
                for (var i = e; i < n; ++i) r += String.fromCharCode(t[i]);
                return r
              }
  
              function N(t, e, n) {
                var r, i = t.length;
                (!e || e < 0) && (e = 0), (!n || n < 0 || n > i) && (n = i);
                for (var o = "", s = e; s < n; ++s) o += (r = t[s]) < 16 ? "0" + r.toString(16) : r.toString(16);
                return o
              }
  
              function R(t, e, n) {
                for (var r = t.slice(e, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                return i
              }
  
              function L(t, e, n) {
                if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
                if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
              }
  
              function T(e, n, r, i, o, s) {
                if (!t.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (n > o || n < s) throw new RangeError('"value" argument is out of bounds');
                if (r + i > e.length) throw new RangeError("Index out of range")
              }
  
              function x(t, e, n, r, i, o) {
                if (n + r > t.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("Index out of range")
              }
  
              function A(t, e, n, r, o) {
                return e = +e, n >>>= 0, o || x(t, 0, n, 4), i.write(t, e, n, r, 23, 4), n + 4
              }
  
              function D(t, e, n, r, o) {
                return e = +e, n >>>= 0, o || x(t, 0, n, 8), i.write(t, e, n, r, 52, 8), n + 8
              }
              t.prototype.slice = function (e, n) {
                var r = this.length;
                (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (n = void 0 === n ? r : ~~n) < 0 ? (n += r) < 0 && (n = 0) : n > r && (n = r), n < e && (n = e);
                var i = this.subarray(e, n);
                return i.__proto__ = t.prototype, i
              }, t.prototype.readUIntLE = function (t, e, n) {
                t >>>= 0, e >>>= 0, n || L(t, e, this.length);
                for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) r += this[t + o] * i;
                return r
              }, t.prototype.readUIntBE = function (t, e, n) {
                t >>>= 0, e >>>= 0, n || L(t, e, this.length);
                for (var r = this[t + --e], i = 1; e > 0 && (i *= 256);) r += this[t + --e] * i;
                return r
              }, t.prototype.readUInt8 = function (t, e) {
                return t >>>= 0, e || L(t, 1, this.length), this[t]
              }, t.prototype.readUInt16LE = function (t, e) {
                return t >>>= 0, e || L(t, 2, this.length), this[t] | this[t + 1] << 8
              }, t.prototype.readUInt16BE = function (t, e) {
                return t >>>= 0, e || L(t, 2, this.length), this[t] << 8 | this[t + 1]
              }, t.prototype.readUInt32LE = function (t, e) {
                return t >>>= 0, e || L(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
              }, t.prototype.readUInt32BE = function (t, e) {
                return t >>>= 0, e || L(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
              }, t.prototype.readIntLE = function (t, e, n) {
                t >>>= 0, e >>>= 0, n || L(t, e, this.length);
                for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) r += this[t + o] * i;
                return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)), r
              }, t.prototype.readIntBE = function (t, e, n) {
                t >>>= 0, e >>>= 0, n || L(t, e, this.length);
                for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256);) o += this[t + --r] * i;
                return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
              }, t.prototype.readInt8 = function (t, e) {
                return t >>>= 0, e || L(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
              }, t.prototype.readInt16LE = function (t, e) {
                t >>>= 0, e || L(t, 2, this.length);
                var n = this[t] | this[t + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
              }, t.prototype.readInt16BE = function (t, e) {
                t >>>= 0, e || L(t, 2, this.length);
                var n = this[t + 1] | this[t] << 8;
                return 32768 & n ? 4294901760 | n : n
              }, t.prototype.readInt32LE = function (t, e) {
                return t >>>= 0, e || L(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
              }, t.prototype.readInt32BE = function (t, e) {
                return t >>>= 0, e || L(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
              }, t.prototype.readFloatLE = function (t, e) {
                return t >>>= 0, e || L(t, 4, this.length), i.read(this, t, !0, 23, 4)
              }, t.prototype.readFloatBE = function (t, e) {
                return t >>>= 0, e || L(t, 4, this.length), i.read(this, t, !1, 23, 4)
              }, t.prototype.readDoubleLE = function (t, e) {
                return t >>>= 0, e || L(t, 8, this.length), i.read(this, t, !0, 52, 8)
              }, t.prototype.readDoubleBE = function (t, e) {
                return t >>>= 0, e || L(t, 8, this.length), i.read(this, t, !1, 52, 8)
              }, t.prototype.writeUIntLE = function (t, e, n, r) {
                t = +t, e >>>= 0, n >>>= 0, r || T(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                var i = 1,
                  o = 0;
                for (this[e] = 255 & t; ++o < n && (i *= 256);) this[e + o] = t / i & 255;
                return e + n
              }, t.prototype.writeUIntBE = function (t, e, n, r) {
                t = +t, e >>>= 0, n >>>= 0, r || T(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                var i = n - 1,
                  o = 1;
                for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
                return e + n
              }, t.prototype.writeUInt8 = function (t, e, n) {
                return t = +t, e >>>= 0, n || T(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
              }, t.prototype.writeUInt16LE = function (t, e, n) {
                return t = +t, e >>>= 0, n || T(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
              }, t.prototype.writeUInt16BE = function (t, e, n) {
                return t = +t, e >>>= 0, n || T(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
              }, t.prototype.writeUInt32LE = function (t, e, n) {
                return t = +t, e >>>= 0, n || T(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
              }, t.prototype.writeUInt32BE = function (t, e, n) {
                return t = +t, e >>>= 0, n || T(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
              }, t.prototype.writeIntLE = function (t, e, n, r) {
                if (t = +t, e >>>= 0, !r) {
                  var i = Math.pow(2, 8 * n - 1);
                  T(this, t, e, n, i - 1, -i)
                }
                var o = 0,
                  s = 1,
                  a = 0;
                for (this[e] = 255 & t; ++o < n && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
                return e + n
              }, t.prototype.writeIntBE = function (t, e, n, r) {
                if (t = +t, e >>>= 0, !r) {
                  var i = Math.pow(2, 8 * n - 1);
                  T(this, t, e, n, i - 1, -i)
                }
                var o = n - 1,
                  s = 1,
                  a = 0;
                for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
                return e + n
              }, t.prototype.writeInt8 = function (t, e, n) {
                return t = +t, e >>>= 0, n || T(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
              }, t.prototype.writeInt16LE = function (t, e, n) {
                return t = +t, e >>>= 0, n || T(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
              }, t.prototype.writeInt16BE = function (t, e, n) {
                return t = +t, e >>>= 0, n || T(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
              }, t.prototype.writeInt32LE = function (t, e, n) {
                return t = +t, e >>>= 0, n || T(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
              }, t.prototype.writeInt32BE = function (t, e, n) {
                return t = +t, e >>>= 0, n || T(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
              }, t.prototype.writeFloatLE = function (t, e, n) {
                return A(this, t, e, !0, n)
              }, t.prototype.writeFloatBE = function (t, e, n) {
                return A(this, t, e, !1, n)
              }, t.prototype.writeDoubleLE = function (t, e, n) {
                return D(this, t, e, !0, n)
              }, t.prototype.writeDoubleBE = function (t, e, n) {
                return D(this, t, e, !1, n)
              }, t.prototype.copy = function (t, e, n, r) {
                if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                var i, o = r - n;
                if (this === t && n < e && e < r)
                  for (i = o - 1; i >= 0; --i) t[i + e] = this[i + n];
                else if (o < 1e3)
                  for (i = 0; i < o; ++i) t[i + e] = this[i + n];
                else Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
                return o
              }, t.prototype.fill = function (e, n, r, i) {
                if ("string" === typeof e) {
                  if ("string" === typeof n ? (i = n, n = 0, r = this.length) : "string" === typeof r && (i = r, r = this.length), 1 === e.length) {
                    var o = e.charCodeAt(0);
                    o < 256 && (e = o)
                  }
                  if (void 0 !== i && "string" !== typeof i) throw new TypeError("encoding must be a string");
                  if ("string" === typeof i && !t.isEncoding(i)) throw new TypeError("Unknown encoding: " + i)
                } else "number" === typeof e && (e &= 255);
                if (n < 0 || this.length < n || this.length < r) throw new RangeError("Out of range index");
                if (r <= n) return this;
                var s;
                if (n >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" === typeof e)
                  for (s = n; s < r; ++s) this[s] = e;
                else {
                  var a = t.isBuffer(e) ? e : new t(e, i),
                    c = a.length;
                  for (s = 0; s < r - n; ++s) this[s + n] = a[s % c]
                }
                return this
              };
              var P = /[^+/0-9A-Za-z-_]/g;
  
              function C(t, e) {
                var n;
                e = e || 1 / 0;
                for (var r = t.length, i = null, o = [], s = 0; s < r; ++s) {
                  if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
                    if (!i) {
                      if (n > 56319) {
                        (e -= 3) > -1 && o.push(239, 191, 189);
                        continue
                      }
                      if (s + 1 === r) {
                        (e -= 3) > -1 && o.push(239, 191, 189);
                        continue
                      }
                      i = n;
                      continue
                    }
                    if (n < 56320) {
                      (e -= 3) > -1 && o.push(239, 191, 189), i = n;
                      continue
                    }
                    n = 65536 + (i - 55296 << 10 | n - 56320)
                  } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                  if (i = null, n < 128) {
                    if ((e -= 1) < 0) break;
                    o.push(n)
                  } else if (n < 2048) {
                    if ((e -= 2) < 0) break;
                    o.push(n >> 6 | 192, 63 & n | 128)
                  } else if (n < 65536) {
                    if ((e -= 3) < 0) break;
                    o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                  } else {
                    if (!(n < 1114112)) throw new Error("Invalid code point");
                    if ((e -= 4) < 0) break;
                    o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                  }
                }
                return o
              }
  
              function U(t) {
                return r.toByteArray(function (t) {
                  if ((t = t.trim().replace(P, "")).length < 2) return "";
                  for (; t.length % 4 !== 0;) t += "=";
                  return t
                }(t))
              }
  
              function M(t, e, n, r) {
                for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i];
                return i
              }
  
              function j(t) {
                return t instanceof ArrayBuffer || null != t && null != t.constructor && "ArrayBuffer" === t.constructor.name && "number" === typeof t.byteLength
              }
  
              function B(t) {
                return "function" === typeof ArrayBuffer.isView && ArrayBuffer.isView(t)
              }
  
              function z(t) {
                return t !== t
              }
            }).call(e, n(1))
          }, function (t, e) {
            "use strict";
            e.byteLength = function (t) {
              return 3 * t.length / 4 - c(t)
            }, e.toByteArray = function (t) {
              var e, n, o, s, a, u, f = t.length;
              a = c(t), u = new i(3 * f / 4 - a), o = a > 0 ? f - 4 : f;
              var h = 0;
              for (e = 0, n = 0; e < o; e += 4, n += 3) s = r[t.charCodeAt(e)] << 18 | r[t.charCodeAt(e + 1)] << 12 | r[t.charCodeAt(e + 2)] << 6 | r[t.charCodeAt(e + 3)], u[h++] = s >> 16 & 255, u[h++] = s >> 8 & 255, u[h++] = 255 & s;
              return 2 === a ? (s = r[t.charCodeAt(e)] << 2 | r[t.charCodeAt(e + 1)] >> 4, u[h++] = 255 & s) : 1 === a && (s = r[t.charCodeAt(e)] << 10 | r[t.charCodeAt(e + 1)] << 4 | r[t.charCodeAt(e + 2)] >> 2, u[h++] = s >> 8 & 255, u[h++] = 255 & s), u
            }, e.fromByteArray = function (t) {
              for (var e, r = t.length, i = r % 3, o = "", s = [], a = 16383, c = 0, f = r - i; c < f; c += a) s.push(u(t, c, c + a > f ? f : c + a));
              return 1 === i ? (e = t[r - 1], o += n[e >> 2], o += n[e << 4 & 63], o += "==") : 2 === i && (e = (t[r - 2] << 8) + t[r - 1], o += n[e >> 10], o += n[e >> 4 & 63], o += n[e << 2 & 63], o += "="), s.push(o), s.join("")
            };
            for (var n = [], r = [], i = "undefined" !== typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, a = o.length; s < a; ++s) n[s] = o[s], r[o.charCodeAt(s)] = s;
  
            function c(t) {
              var e = t.length;
              if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
              return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0
            }
  
            function u(t, e, r) {
              for (var i, o, s = [], a = e; a < r; a += 3) i = (t[a] << 16) + (t[a + 1] << 8) + t[a + 2], s.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
              return s.join("")
            }
            r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
          }, function (t, e) {
            e.read = function (t, e, n, r, i) {
              var o, s, a = 8 * i - r - 1,
                c = (1 << a) - 1,
                u = c >> 1,
                f = -7,
                h = n ? i - 1 : 0,
                p = n ? -1 : 1,
                l = t[e + h];
              for (h += p, o = l & (1 << -f) - 1, l >>= -f, f += a; f > 0; o = 256 * o + t[e + h], h += p, f -= 8);
              for (s = o & (1 << -f) - 1, o >>= -f, f += r; f > 0; s = 256 * s + t[e + h], h += p, f -= 8);
              if (0 === o) o = 1 - u;
              else {
                if (o === c) return s ? NaN : 1 / 0 * (l ? -1 : 1);
                s += Math.pow(2, r), o -= u
              }
              return (l ? -1 : 1) * s * Math.pow(2, o - r)
            }, e.write = function (t, e, n, r, i, o) {
              var s, a, c, u = 8 * o - i - 1,
                f = (1 << u) - 1,
                h = f >> 1,
                p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                l = r ? 0 : o - 1,
                d = r ? 1 : -1,
                y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
              for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = f) : (s = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), (e += s + h >= 1 ? p / c : p * Math.pow(2, 1 - h)) * c >= 2 && (s++, c /= 2), s + h >= f ? (a = 0, s = f) : s + h >= 1 ? (a = (e * c - 1) * Math.pow(2, i), s += h) : (a = e * Math.pow(2, h - 1) * Math.pow(2, i), s = 0)); i >= 8; t[n + l] = 255 & a, l += d, a /= 256, i -= 8);
              for (s = s << i | a, u += i; u > 0; t[n + l] = 255 & s, l += d, s /= 256, u -= 8);
              t[n + l - d] |= 128 * y
            }
          }, function (t, e) {
            t.exports = function (t) {
              return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
            }
          }, function (t, e, n) {
            "use strict";
            var r = new(n(7)),
              i = {};
  
            function o(t) {
              i[t] || ("function" === typeof r[t] ? i[t] = function () {
                return r[t].apply(r, arguments)
              } : i[t] = r[t])
            }
            for (var s in r) o(s);
            i.initializeTTYs = function () {
              null === r.stdin && (r.initializeTTYs(), i.stdin = r.stdin, i.stdout = r.stdout, i.stderr = r.stderr)
            }, r.nextTick((function () {
              i.initializeTTYs()
            })), t.exports = i
          }, function (t, e, n) {
            (function (e) {
              "use strict";
              var r = this && this.__extends || function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
  
                  function r() {
                    this.constructor = t
                  }
                  t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                },
                i = n(8),
                o = null,
                s = function () {
                  function t(t, e) {
                    this.fun = t, this.array = e
                  }
                  return t.prototype.run = function () {
                    this.fun.apply(null, this.array)
                  }, t
                }(),
                a = function () {
                  function t() {
                    this._queue = [], this._draining = !1, this._currentQueue = null, this._queueIndex = -1
                  }
                  return t.prototype.push = function (t) {
                    var e = this;
                    1 !== this._queue.push(t) || this._draining || setTimeout((function () {
                      return e._drainQueue()
                    }), 0)
                  }, t.prototype._cleanUpNextTick = function () {
                    this._draining = !1, this._currentQueue && this._currentQueue.length ? this._queue = this._currentQueue.concat(this._queue) : this._queueIndex = -1, this._queue.length && this._drainQueue()
                  }, t.prototype._drainQueue = function () {
                    var t = this;
                    if (!this._draining) {
                      var e = setTimeout((function () {
                        return t._cleanUpNextTick()
                      }));
                      this._draining = !0;
                      for (var n = this._queue.length; n;) {
                        for (this._currentQueue = this._queue, this._queue = []; ++this._queueIndex < n;) this._currentQueue && this._currentQueue[this._queueIndex].run();
                        this._queueIndex = -1, n = this._queue.length
                      }
                      this._currentQueue = null, this._draining = !1, clearTimeout(e)
                    }
                  }, t
                }(),
                c = function (t) {
                  function i() {
                    t.apply(this, arguments), this.startTime = Date.now(), this._cwd = "/", this.platform = "browser", this.argv = [], this.execArgv = [], this.stdout = null, this.stderr = null, this.stdin = null, this.domain = null, this._queue = new a, this.execPath = e, this.env = {}, this.exitCode = 0, this._gid = 1, this._uid = 1, this.version = "v5.0", this.versions = {
                      http_parser: "0.0",
                      node: "5.0",
                      v8: "0.0",
                      uv: "0.0",
                      zlib: "0.0",
                      ares: "0.0",
                      icu: "0.0",
                      modules: "0",
                      openssl: "0.0"
                    }, this.config = {
                      target_defaults: {
                        cflags: [],
                        default_configuration: "Release",
                        defines: [],
                        include_dirs: [],
                        libraries: []
                      },
                      variables: {
                        clang: 0,
                        host_arch: "x32",
                        node_install_npm: !1,
                        node_install_waf: !1,
                        node_prefix: "",
                        node_shared_cares: !1,
                        node_shared_http_parser: !1,
                        node_shared_libuv: !1,
                        node_shared_zlib: !1,
                        node_shared_v8: !1,
                        node_use_dtrace: !1,
                        node_use_etw: !1,
                        node_use_openssl: !1,
                        node_shared_openssl: !1,
                        strict_aliasing: !1,
                        target_arch: "x32",
                        v8_use_snapshot: !1,
                        v8_no_strict_aliasing: 0,
                        visibility: ""
                      }
                    }, this.pid = 1e3 * Math.random() | 0, this.title = "node", this.arch = "x32", this._mask = 18, this.connected = void 0
                  }
                  return r(i, t), i.prototype.chdir = function (t) {
                    null === o && (o = n(9)), this._cwd = o.resolve(t)
                  }, i.prototype.cwd = function () {
                    return this._cwd
                  }, i.prototype.uptime = function () {
                    return (Date.now() - this.startTime) / 1e3 | 0
                  }, i.prototype.nextTick = function (t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    this._queue.push(new s(t, e))
                  }, i.prototype.abort = function () {
                    this.emit("abort")
                  }, i.prototype.exit = function (t) {
                    this.exitCode = t, this.emit("exit", [t])
                  }, i.prototype.getgid = function () {
                    return this._gid
                  }, i.prototype.setgid = function (t) {
                    this._gid = "number" === typeof t ? t : 1
                  }, i.prototype.getuid = function () {
                    return this._uid
                  }, i.prototype.setuid = function (t) {
                    this._uid = "number" === typeof t ? t : 1
                  }, i.prototype.kill = function (t, e) {
                    this.emit("kill", [t, e])
                  }, i.prototype.memoryUsage = function () {
                    return {
                      rss: 0,
                      heapTotal: 0,
                      heapUsed: 0
                    }
                  }, i.prototype.umask = function (t) {
                    void 0 === t && (t = this._mask);
                    var e = this._mask;
                    return this._mask = t, this.emit("umask", [t]), e
                  }, i.prototype.hrtime = function () {
                    var t, e = (t = "undefined" !== typeof performance ? performance.now() : Date.now ? Date.now() : (new Date).getTime()) / 1e3 | 0;
                    return [e, t = 1e6 * (t -= 1e3 * e) | 0]
                  }, i.prototype.initializeTTYs = function () {
                    if (null === this.stdout) {
                      var t = n(10);
                      this.stdout = new t, this.stderr = new t, this.stdin = new t
                    }
                  }, i.prototype.disconnect = function () {}, i
                }(i.EventEmitter);
              t.exports = c
            }).call(e, "/")
          }, function (t, e) {
            function n() {
              this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
            }
  
            function r(t) {
              return "function" === typeof t
            }
  
            function i(t) {
              return "object" === typeof t && null !== t
            }
  
            function o(t) {
              return void 0 === t
            }
            t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function (t) {
              if ("number" !== typeof t || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
              return this._maxListeners = t, this
            }, n.prototype.emit = function (t) {
              var e, n, s, a, c, u;
              if (this._events || (this._events = {}), "error" === t && (!this._events.error || i(this._events.error) && !this._events.error.length)) {
                if ((e = arguments[1]) instanceof Error) throw e;
                var f = new Error('Uncaught, unspecified "error" event. (' + e + ")");
                throw f.context = e, f
              }
              if (o(n = this._events[t])) return !1;
              if (r(n)) switch (arguments.length) {
                case 1:
                  n.call(this);
                  break;
                case 2:
                  n.call(this, arguments[1]);
                  break;
                case 3:
                  n.call(this, arguments[1], arguments[2]);
                  break;
                default:
                  a = Array.prototype.slice.call(arguments, 1), n.apply(this, a)
              } else if (i(n))
                for (a = Array.prototype.slice.call(arguments, 1), s = (u = n.slice()).length, c = 0; c < s; c++) u[c].apply(this, a);
              return !0
            }, n.prototype.addListener = function (t, e) {
              var s;
              if (!r(e)) throw TypeError("listener must be a function");
              return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, r(e.listener) ? e.listener : e), this._events[t] ? i(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, i(this._events[t]) && !this._events[t].warned && (s = o(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && s > 0 && this._events[t].length > s && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" === typeof console.trace && console.trace()), this
            }, n.prototype.on = n.prototype.addListener, n.prototype.once = function (t, e) {
              if (!r(e)) throw TypeError("listener must be a function");
              var n = !1;
  
              function i() {
                this.removeListener(t, i), n || (n = !0, e.apply(this, arguments))
              }
              return i.listener = e, this.on(t, i), this
            }, n.prototype.removeListener = function (t, e) {
              var n, o, s, a;
              if (!r(e)) throw TypeError("listener must be a function");
              if (!this._events || !this._events[t]) return this;
              if (s = (n = this._events[t]).length, o = -1, n === e || r(n.listener) && n.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);
              else if (i(n)) {
                for (a = s; a-- > 0;)
                  if (n[a] === e || n[a].listener && n[a].listener === e) {
                    o = a;
                    break
                  } if (o < 0) return this;
                1 === n.length ? (n.length = 0, delete this._events[t]) : n.splice(o, 1), this._events.removeListener && this.emit("removeListener", t, e)
              }
              return this
            }, n.prototype.removeAllListeners = function (t) {
              var e, n;
              if (!this._events) return this;
              if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
              if (0 === arguments.length) {
                for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);
                return this.removeAllListeners("removeListener"), this._events = {}, this
              }
              if (r(n = this._events[t])) this.removeListener(t, n);
              else if (n)
                for (; n.length;) this.removeListener(t, n[n.length - 1]);
              return delete this._events[t], this
            }, n.prototype.listeners = function (t) {
              return this._events && this._events[t] ? r(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
            }, n.prototype.listenerCount = function (t) {
              if (this._events) {
                var e = this._events[t];
                if (r(e)) return 1;
                if (e) return e.length
              }
              return 0
            }, n.listenerCount = function (t, e) {
              return t.listenerCount(e)
            }
          }, function (t, e, n) {
            (function (e) {
              "use strict";
              var n = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
                r = function () {
                  function t() {}
                  return t.normalize = function (e) {
                    "" === e && (e = ".");
                    for (var n = e.charAt(0) === t.sep, r = (e = t._removeDuplicateSeps(e)).split(t.sep), i = [], o = 0; o < r.length; o++) {
                      var s = r[o];
                      "." !== s && (".." === s && (n || !n && i.length > 0 && ".." !== i[0]) ? i.pop() : i.push(s))
                    }
                    return !n && i.length < 2 && (1 === i.length ? "" === i[0] && i.unshift(".") : i.push(".")), e = i.join(t.sep), n && e.charAt(0) !== t.sep && (e = t.sep + e), e
                  }, t.join = function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n - 0] = arguments[n];
                    for (var r = [], i = 0; i < e.length; i++) {
                      var o = e[i];
                      if ("string" !== typeof o) throw new TypeError("Invalid argument type to path.join: " + typeof o);
                      "" !== o && r.push(o)
                    }
                    return t.normalize(r.join(t.sep))
                  }, t.resolve = function () {
                    for (var n = [], r = 0; r < arguments.length; r++) n[r - 0] = arguments[r];
                    for (var i = [], o = 0; o < n.length; o++) {
                      var s = n[o];
                      if ("string" !== typeof s) throw new TypeError("Invalid argument type to path.join: " + typeof s);
                      "" !== s && (s.charAt(0) === t.sep && (i = []), i.push(s))
                    }
                    var a = t.normalize(i.join(t.sep));
                    if (a.length > 1 && a.charAt(a.length - 1) === t.sep) return a.substr(0, a.length - 1);
                    if (a.charAt(0) !== t.sep) {
                      "." !== a.charAt(0) || 1 !== a.length && a.charAt(1) !== t.sep || (a = 1 === a.length ? "" : a.substr(2));
                      var c = e.cwd();
                      a = "" !== a ? this.normalize(c + ("/" !== c ? t.sep : "") + a) : c
                    }
                    return a
                  }, t.relative = function (e, n) {
                    var r;
                    e = t.resolve(e), n = t.resolve(n);
                    var i = e.split(t.sep),
                      o = n.split(t.sep);
                    o.shift(), i.shift();
                    var s = 0,
                      a = [];
                    for (r = 0; r < i.length; r++)
                      if (i[r] !== o[r]) {
                        s = i.length - r;
                        break
                      } a = o.slice(r), 1 === i.length && "" === i[0] && (s = 0), s > i.length && (s = i.length);
                    var c = "";
                    for (r = 0; r < s; r++) c += "../";
                    return (c += a.join(t.sep)).length > 1 && c.charAt(c.length - 1) === t.sep && (c = c.substr(0, c.length - 1)), c
                  }, t.dirname = function (e) {
                    var n = (e = t._removeDuplicateSeps(e)).charAt(0) === t.sep,
                      r = e.split(t.sep);
                    return "" === r.pop() && r.length > 0 && r.pop(), r.length > 1 || 1 === r.length && !n ? r.join(t.sep) : n ? t.sep : "."
                  }, t.basename = function (e, n) {
                    if (void 0 === n && (n = ""), "" === e) return e;
                    var r = (e = t.normalize(e)).split(t.sep),
                      i = r[r.length - 1];
                    return "" === i && r.length > 1 ? r[r.length - 2] : n.length > 0 && i.substr(i.length - n.length) === n ? i.substr(0, i.length - n.length) : i
                  }, t.extname = function (e) {
                    var n = (e = t.normalize(e)).split(t.sep);
                    if ("" === (e = n.pop()) && n.length > 0 && (e = n.pop()), ".." === e) return "";
                    var r = e.lastIndexOf(".");
                    return -1 === r || 0 === r ? "" : e.substr(r)
                  }, t.isAbsolute = function (e) {
                    return e.length > 0 && e.charAt(0) === t.sep
                  }, t._makeLong = function (t) {
                    return t
                  }, t.parse = function (t) {
                    var e = function (t) {
                      var e = n.exec(t);
                      return e.shift(), e
                    }(t);
                    return {
                      root: e[0],
                      dir: e[0] + e[1].slice(0, -1),
                      base: e[2],
                      ext: e[3],
                      name: e[2].slice(0, e[2].length - e[3].length)
                    }
                  }, t.format = function (e) {
                    if (null === e || "object" !== typeof e) throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof e);
                    if ("string" !== typeof (e.root || "")) throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof e.root);
                    return (e.dir ? e.dir + t.sep : "") + (e.base || "")
                  }, t._removeDuplicateSeps = function (t) {
                    return t = t.replace(this._replaceRegex, this.sep)
                  }, t.sep = "/", t._replaceRegex = new RegExp("//+", "g"), t.delimiter = ":", t.posix = t, t.win32 = t, t
                }();
              t.exports = r
            }).call(e, n(6))
          }, function (t, e, n) {
            (function (e) {
              "use strict";
              var r = this && this.__extends || function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
  
                  function r() {
                    this.constructor = t
                  }
                  t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                },
                i = function (t) {
                  function n() {
                    t.call(this), this.isRaw = !1, this.columns = 80, this.rows = 120, this.isTTY = !0, this._bufferedWrites = [], this._waitingForWrites = !1
                  }
                  return r(n, t), n.prototype.setRawMode = function (t) {
                    this.isRaw !== t && (this.isRaw = t, this.emit("modeChange"))
                  }, n.prototype.changeColumns = function (t) {
                    t !== this.columns && (this.columns = t, this.emit("resize"))
                  }, n.prototype.changeRows = function (t) {
                    t !== this.rows && (this.rows = t, this.emit("resize"))
                  }, n.isatty = function (t) {
                    return t && t instanceof n
                  }, n.prototype._write = function (t, n, r) {
                    var i;
                    try {
                      var o;
                      o = "string" === typeof t ? new e(t, n) : t, this._bufferedWrites.push(o), this._waitingForWrites && this._read(1024)
                    } catch (s) {
                      i = s
                    } finally {
                      r(i)
                    }
                  }, n.prototype._read = function (t) {
                    if (0 === this._bufferedWrites.length) this._waitingForWrites = !0;
                    else
                      for (; this._bufferedWrites.length > 0 && (this._waitingForWrites = this.push(this._bufferedWrites.shift()), this._waitingForWrites););
                  }, n
                }(n(11).Duplex);
              t.exports = i
            }).call(e, n(1))
          }, function (t, e, n) {
            t.exports = i;
            var r = n(8).EventEmitter;
  
            function i() {
              r.call(this)
            }
            n(12)(i, r), i.Readable = n(13), i.Writable = n(27), i.Duplex = n(28), i.Transform = n(29), i.PassThrough = n(30), i.Stream = i, i.prototype.pipe = function (t, e) {
              var n = this;
  
              function i(e) {
                t.writable && !1 === t.write(e) && n.pause && n.pause()
              }
  
              function o() {
                n.readable && n.resume && n.resume()
              }
              n.on("data", i), t.on("drain", o), t._isStdio || e && !1 === e.end || (n.on("end", a), n.on("close", c));
              var s = !1;
  
              function a() {
                s || (s = !0, t.end())
              }
  
              function c() {
                s || (s = !0, "function" === typeof t.destroy && t.destroy())
              }
  
              function u(t) {
                if (f(), 0 === r.listenerCount(this, "error")) throw t
              }
  
              function f() {
                n.removeListener("data", i), t.removeListener("drain", o), n.removeListener("end", a), n.removeListener("close", c), n.removeListener("error", u), t.removeListener("error", u), n.removeListener("end", f), n.removeListener("close", f), t.removeListener("close", f)
              }
              return n.on("error", u), t.on("error", u), n.on("end", f), n.on("close", f), t.on("close", f), t.emit("pipe", n), t
            }
          }, function (t, e) {
            "function" === typeof Object.create ? t.exports = function (t, e) {
              t.super_ = e, t.prototype = Object.create(e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })
            } : t.exports = function (t, e) {
              t.super_ = e;
              var n = function () {};
              n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
            }
          }, function (t, e, n) {
            (function (r) {
              var i = function () {
                try {
                  return n(11)
                } catch (t) {}
              }();
              (e = t.exports = n(14)).Stream = i || e, e.Readable = e, e.Writable = n(22), e.Duplex = n(21), e.Transform = n(25), e.PassThrough = n(26), !r.browser && "disable" === r.env.READABLE_STREAM && i && (t.exports = i)
            }).call(e, n(6))
          }, function (t, e, n) {
            (function (e) {
              "use strict";
              t.exports = g;
              var r, i = n(15),
                o = n(16);
              g.ReadableState = y, n(8).EventEmitter;
              var s, a = function (t, e) {
                return t.listeners(e).length
              };
              ! function () {
                try {
                  s = n(11)
                } catch (t) {} finally {
                  s || (s = n(8).EventEmitter)
                }
              }();
              var c = n(2).Buffer,
                u = n(17),
                f = n(18);
              f.inherits = n(12);
              var h = n(19),
                p = void 0;
              p = h && h.debuglog ? h.debuglog("stream") : function () {};
              var l, d = n(20);
  
              function y(t, e) {
                r = r || n(21), t = t || {}, this.objectMode = !!t.objectMode, e instanceof r && (this.objectMode = this.objectMode || !!t.readableObjectMode);
                var i = t.highWaterMark,
                  o = this.objectMode ? 16 : 16384;
                this.highWaterMark = i || 0 === i ? i : o, this.highWaterMark = ~~this.highWaterMark, this.buffer = new d, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.ranOut = !1, this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (l || (l = n(24).StringDecoder), this.decoder = new l(t.encoding), this.encoding = t.encoding)
              }
  
              function g(t) {
                if (r = r || n(21), !(this instanceof g)) return new g(t);
                this._readableState = new y(t, this), this.readable = !0, t && "function" === typeof t.read && (this._read = t.read), s.call(this)
              }
  
              function m(t, e, n, r, o) {
                var s = function (t, e) {
                  var n = null;
                  return c.isBuffer(e) || "string" === typeof e || null === e || void 0 === e || t.objectMode || (n = new TypeError("Invalid non-string/buffer chunk")), n
                }(e, n);
                if (s) t.emit("error", s);
                else if (null === n) e.reading = !1,
                  function (t, e) {
                    if (!e.ended) {
                      if (e.decoder) {
                        var n = e.decoder.end();
                        n && n.length && (e.buffer.push(n), e.length += e.objectMode ? 1 : n.length)
                      }
                      e.ended = !0, w(t)
                    }
                  }(t, e);
                else if (e.objectMode || n && n.length > 0)
                  if (e.ended && !o) {
                    var a = new Error("stream.push() after EOF");
                    t.emit("error", a)
                  } else if (e.endEmitted && o) {
                  var u = new Error("stream.unshift() after end event");
                  t.emit("error", u)
                } else {
                  var f;
                  !e.decoder || o || r || (n = e.decoder.write(n), f = !e.objectMode && 0 === n.length), o || (e.reading = !1), f || (e.flowing && 0 === e.length && !e.sync ? (t.emit("data", n), t.read(0)) : (e.length += e.objectMode ? 1 : n.length, o ? e.buffer.unshift(n) : e.buffer.push(n), e.needReadable && w(t))),
                    function (t, e) {
                      e.readingMore || (e.readingMore = !0, i(b, t, e))
                    }(t, e)
                } else o || (e.reading = !1);
                return function (t) {
                  return !t.ended && (t.needReadable || t.length < t.highWaterMark || 0 === t.length)
                }(e)
              }
              f.inherits(g, s), g.prototype.push = function (t, e) {
                var n = this._readableState;
                return n.objectMode || "string" !== typeof t || (e = e || n.defaultEncoding) !== n.encoding && (t = u.from(t, e), e = ""), m(this, n, t, e, !1)
              }, g.prototype.unshift = function (t) {
                return m(this, this._readableState, t, "", !0)
              }, g.prototype.isPaused = function () {
                return !1 === this._readableState.flowing
              }, g.prototype.setEncoding = function (t) {
                return l || (l = n(24).StringDecoder), this._readableState.decoder = new l(t), this._readableState.encoding = t, this
              };
              var _ = 8388608;
  
              function v(t, e) {
                return t <= 0 || 0 === e.length && e.ended ? 0 : e.objectMode ? 1 : t !== t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = function (t) {
                  return t >= _ ? t = _ : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++), t
                }(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0, 0))
              }
  
              function w(t) {
                var e = t._readableState;
                e.needReadable = !1, e.emittedReadable || (p("emitReadable", e.flowing), e.emittedReadable = !0, e.sync ? i(E, t) : E(t))
              }
  
              function E(t) {
                p("emit readable"), t.emit("readable"), I(t)
              }
  
              function b(t, e) {
                for (var n = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (p("maybeReadMore read 0"), t.read(0), n !== e.length);) n = e.length;
                e.readingMore = !1
              }
  
              function S(t) {
                p("readable nexttick read 0"), t.read(0)
              }
  
              function k(t, e) {
                e.reading || (p("resume read 0"), t.read(0)), e.resumeScheduled = !1, e.awaitDrain = 0, t.emit("resume"), I(t), e.flowing && !e.reading && t.read(0)
              }
  
              function I(t) {
                var e = t._readableState;
                for (p("flow", e.flowing); e.flowing && null !== t.read(););
              }
  
              function O(t, e) {
                return 0 === e.length ? null : (e.objectMode ? n = e.buffer.shift() : !t || t >= e.length ? (n = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.head.data : e.buffer.concat(e.length), e.buffer.clear()) : n = function (t, e, n) {
                  var r;
                  return t < e.head.data.length ? (r = e.head.data.slice(0, t), e.head.data = e.head.data.slice(t)) : r = t === e.head.data.length ? e.shift() : n ? function (t, e) {
                    var n = e.head,
                      r = 1,
                      i = n.data;
                    for (t -= i.length; n = n.next;) {
                      var o = n.data,
                        s = t > o.length ? o.length : t;
                      if (s === o.length ? i += o : i += o.slice(0, t), 0 === (t -= s)) {
                        s === o.length ? (++r, n.next ? e.head = n.next : e.head = e.tail = null) : (e.head = n, n.data = o.slice(s));
                        break
                      }++r
                    }
                    return e.length -= r, i
                  }(t, e) : function (t, e) {
                    var n = u.allocUnsafe(t),
                      r = e.head,
                      i = 1;
                    for (r.data.copy(n), t -= r.data.length; r = r.next;) {
                      var o = r.data,
                        s = t > o.length ? o.length : t;
                      if (o.copy(n, n.length - t, 0, s), 0 === (t -= s)) {
                        s === o.length ? (++i, r.next ? e.head = r.next : e.head = e.tail = null) : (e.head = r, r.data = o.slice(s));
                        break
                      }++i
                    }
                    return e.length -= i, n
                  }(t, e), r
                }(t, e.buffer, e.decoder), n);
                var n
              }
  
              function F(t) {
                var e = t._readableState;
                if (e.length > 0) throw new Error('"endReadable()" called on non-empty stream');
                e.endEmitted || (e.ended = !0, i(N, e, t))
              }
  
              function N(t, e) {
                t.endEmitted || 0 !== t.length || (t.endEmitted = !0, e.readable = !1, e.emit("end"))
              }
  
              function R(t, e) {
                for (var n = 0, r = t.length; n < r; n++)
                  if (t[n] === e) return n;
                return -1
              }
              g.prototype.read = function (t) {
                p("read", t), t = parseInt(t, 10);
                var e = this._readableState,
                  n = t;
                if (0 !== t && (e.emittedReadable = !1), 0 === t && e.needReadable && (e.length >= e.highWaterMark || e.ended)) return p("read: emitReadable", e.length, e.ended), 0 === e.length && e.ended ? F(this) : w(this), null;
                if (0 === (t = v(t, e)) && e.ended) return 0 === e.length && F(this), null;
                var r, i = e.needReadable;
                return p("need readable", i), (0 === e.length || e.length - t < e.highWaterMark) && p("length less than watermark", i = !0), e.ended || e.reading ? p("reading or ended", i = !1) : i && (p("do read"), e.reading = !0, e.sync = !0, 0 === e.length && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1, e.reading || (t = v(n, e))), null === (r = t > 0 ? O(t, e) : null) ? (e.needReadable = !0, t = 0) : e.length -= t, 0 === e.length && (e.ended || (e.needReadable = !0), n !== t && e.ended && F(this)), null !== r && this.emit("data", r), r
              }, g.prototype._read = function (t) {
                this.emit("error", new Error("_read() is not implemented"))
              }, g.prototype.pipe = function (t, n) {
                var r = this,
                  s = this._readableState;
                switch (s.pipesCount) {
                  case 0:
                    s.pipes = t;
                    break;
                  case 1:
                    s.pipes = [s.pipes, t];
                    break;
                  default:
                    s.pipes.push(t)
                }
                s.pipesCount += 1, p("pipe count=%d opts=%j", s.pipesCount, n);
                var c = n && !1 === n.end || t === e.stdout || t === e.stderr ? d : f;
  
                function u(t) {
                  p("onunpipe"), t === r && d()
                }
  
                function f() {
                  p("onend"), t.end()
                }
                s.endEmitted ? i(c) : r.once("end", c), t.on("unpipe", u);
                var h = function (t) {
                  return function () {
                    var e = t._readableState;
                    p("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && a(t, "data") && (e.flowing = !0, I(t))
                  }
                }(r);
                t.on("drain", h);
                var l = !1;
  
                function d() {
                  p("cleanup"), t.removeListener("close", _), t.removeListener("finish", v), t.removeListener("drain", h), t.removeListener("error", m), t.removeListener("unpipe", u), r.removeListener("end", f), r.removeListener("end", d), r.removeListener("data", g), l = !0, !s.awaitDrain || t._writableState && !t._writableState.needDrain || h()
                }
                var y = !1;
  
                function g(e) {
                  p("ondata"), y = !1, !1 !== t.write(e) || y || ((1 === s.pipesCount && s.pipes === t || s.pipesCount > 1 && -1 !== R(s.pipes, t)) && !l && (p("false write response, pause", r._readableState.awaitDrain), r._readableState.awaitDrain++, y = !0), r.pause())
                }
  
                function m(e) {
                  p("onerror", e), w(), t.removeListener("error", m), 0 === a(t, "error") && t.emit("error", e)
                }
  
                function _() {
                  t.removeListener("finish", v), w()
                }
  
                function v() {
                  p("onfinish"), t.removeListener("close", _), w()
                }
  
                function w() {
                  p("unpipe"), r.unpipe(t)
                }
                return r.on("data", g),
                  function (t, e, n) {
                    if ("function" === typeof t.prependListener) return t.prependListener(e, n);
                    t._events && t._events[e] ? o(t._events[e]) ? t._events[e].unshift(n) : t._events[e] = [n, t._events[e]] : t.on(e, n)
                  }(t, "error", m), t.once("close", _), t.once("finish", v), t.emit("pipe", r), s.flowing || (p("pipe resume"), r.resume()), t
              }, g.prototype.unpipe = function (t) {
                var e = this._readableState;
                if (0 === e.pipesCount) return this;
                if (1 === e.pipesCount) return t && t !== e.pipes || (t || (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this)), this;
                if (!t) {
                  var n = e.pipes,
                    r = e.pipesCount;
                  e.pipes = null, e.pipesCount = 0, e.flowing = !1;
                  for (var i = 0; i < r; i++) n[i].emit("unpipe", this);
                  return this
                }
                var o = R(e.pipes, t);
                return -1 === o || (e.pipes.splice(o, 1), e.pipesCount -= 1, 1 === e.pipesCount && (e.pipes = e.pipes[0]), t.emit("unpipe", this)), this
              }, g.prototype.on = function (t, e) {
                var n = s.prototype.on.call(this, t, e);
                if ("data" === t) !1 !== this._readableState.flowing && this.resume();
                else if ("readable" === t) {
                  var r = this._readableState;
                  r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, r.emittedReadable = !1, r.reading ? r.length && w(this) : i(S, this))
                }
                return n
              }, g.prototype.addListener = g.prototype.on, g.prototype.resume = function () {
                var t = this._readableState;
                return t.flowing || (p("resume"), t.flowing = !0, function (t, e) {
                  e.resumeScheduled || (e.resumeScheduled = !0, i(k, t, e))
                }(this, t)), this
              }, g.prototype.pause = function () {
                return p("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (p("pause"), this._readableState.flowing = !1, this.emit("pause")), this
              }, g.prototype.wrap = function (t) {
                var e = this._readableState,
                  n = !1,
                  r = this;
                for (var i in t.on("end", (function () {
                    if (p("wrapped end"), e.decoder && !e.ended) {
                      var t = e.decoder.end();
                      t && t.length && r.push(t)
                    }
                    r.push(null)
                  })), t.on("data", (function (i) {
                    p("wrapped data"), e.decoder && (i = e.decoder.write(i)), (!e.objectMode || null !== i && void 0 !== i) && (e.objectMode || i && i.length) && (r.push(i) || (n = !0, t.pause()))
                  })), t) void 0 === this[i] && "function" === typeof t[i] && (this[i] = function (e) {
                  return function () {
                    return t[e].apply(t, arguments)
                  }
                }(i));
                return function (t, e) {
                  for (var n = 0, r = t.length; n < r; n++) e(t[n], n)
                }(["error", "close", "destroy", "pause", "resume"], (function (e) {
                  t.on(e, r.emit.bind(r, e))
                })), r._read = function (e) {
                  p("wrapped _read", e), n && (n = !1, t.resume())
                }, r
              }, g._fromList = O
            }).call(e, n(6))
          }, function (t, e, n) {
            (function (e) {
              "use strict";
              !e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = function (t, n, r, i) {
                if ("function" !== typeof t) throw new TypeError('"callback" argument must be a function');
                var o, s, a = arguments.length;
                switch (a) {
                  case 0:
                  case 1:
                    return e.nextTick(t);
                  case 2:
                    return e.nextTick((function () {
                      t.call(null, n)
                    }));
                  case 3:
                    return e.nextTick((function () {
                      t.call(null, n, r)
                    }));
                  case 4:
                    return e.nextTick((function () {
                      t.call(null, n, r, i)
                    }));
                  default:
                    for (o = new Array(a - 1), s = 0; s < o.length;) o[s++] = arguments[s];
                    return e.nextTick((function () {
                      t.apply(null, o)
                    }))
                }
              } : t.exports = e.nextTick
            }).call(e, n(6))
          }, function (t, e) {
            var n = {}.toString;
            t.exports = Array.isArray || function (t) {
              return "[object Array]" == n.call(t)
            }
          }, function (t, e, n) {
            (function (t) {
              "use strict";
              var r = n(2),
                i = r.Buffer,
                o = r.SlowBuffer,
                s = r.kMaxLength || 2147483647;
              e.alloc = function (t, e, n) {
                if ("function" === typeof i.alloc) return i.alloc(t, e, n);
                if ("number" === typeof n) throw new TypeError("encoding must not be number");
                if ("number" !== typeof t) throw new TypeError("size must be a number");
                if (t > s) throw new RangeError("size is too large");
                var r = n,
                  o = e;
                void 0 === o && (r = void 0, o = 0);
                var a = new i(t);
                if ("string" === typeof o)
                  for (var c = new i(o, r), u = c.length, f = -1; ++f < t;) a[f] = c[f % u];
                else a.fill(o);
                return a
              }, e.allocUnsafe = function (t) {
                if ("function" === typeof i.allocUnsafe) return i.allocUnsafe(t);
                if ("number" !== typeof t) throw new TypeError("size must be a number");
                if (t > s) throw new RangeError("size is too large");
                return new i(t)
              }, e.from = function (e, n, r) {
                if ("function" === typeof i.from && (!t.Uint8Array || Uint8Array.from !== i.from)) return i.from(e, n, r);
                if ("number" === typeof e) throw new TypeError('"value" argument must not be a number');
                if ("string" === typeof e) return new i(e, n);
                if ("undefined" !== typeof ArrayBuffer && e instanceof ArrayBuffer) {
                  var o = n;
                  if (1 === arguments.length) return new i(e);
                  "undefined" === typeof o && (o = 0);
                  var s = r;
                  if ("undefined" === typeof s && (s = e.byteLength - o), o >= e.byteLength) throw new RangeError("'offset' is out of bounds");
                  if (s > e.byteLength - o) throw new RangeError("'length' is out of bounds");
                  return new i(e.slice(o, o + s))
                }
                if (i.isBuffer(e)) {
                  var a = new i(e.length);
                  return e.copy(a, 0, 0, e.length), a
                }
                if (e) {
                  if (Array.isArray(e) || "undefined" !== typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return new i(e);
                  if ("Buffer" === e.type && Array.isArray(e.data)) return new i(e.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
              }, e.allocUnsafeSlow = function (t) {
                if ("function" === typeof i.allocUnsafeSlow) return i.allocUnsafeSlow(t);
                if ("number" !== typeof t) throw new TypeError("size must be a number");
                if (t >= s) throw new RangeError("size is too large");
                return new o(t)
              }
            }).call(e, function () {
              return this
            }())
          }, function (t, e, n) {
            (function (t) {
              function n(t) {
                return Object.prototype.toString.call(t)
              }
              e.isArray = function (t) {
                return Array.isArray ? Array.isArray(t) : "[object Array]" === n(t)
              }, e.isBoolean = function (t) {
                return "boolean" === typeof t
              }, e.isNull = function (t) {
                return null === t
              }, e.isNullOrUndefined = function (t) {
                return null == t
              }, e.isNumber = function (t) {
                return "number" === typeof t
              }, e.isString = function (t) {
                return "string" === typeof t
              }, e.isSymbol = function (t) {
                return "symbol" === typeof t
              }, e.isUndefined = function (t) {
                return void 0 === t
              }, e.isRegExp = function (t) {
                return "[object RegExp]" === n(t)
              }, e.isObject = function (t) {
                return "object" === typeof t && null !== t
              }, e.isDate = function (t) {
                return "[object Date]" === n(t)
              }, e.isError = function (t) {
                return "[object Error]" === n(t) || t instanceof Error
              }, e.isFunction = function (t) {
                return "function" === typeof t
              }, e.isPrimitive = function (t) {
                return null === t || "boolean" === typeof t || "number" === typeof t || "string" === typeof t || "symbol" === typeof t || "undefined" === typeof t
              }, e.isBuffer = t.isBuffer
            }).call(e, n(1))
          }, function (t, e) {}, function (t, e, n) {
            "use strict";
            n(2).Buffer;
            var r = n(17);
  
            function i() {
              this.head = null, this.tail = null, this.length = 0
            }
            t.exports = i, i.prototype.push = function (t) {
              var e = {
                data: t,
                next: null
              };
              this.length > 0 ? this.tail.next = e : this.head = e, this.tail = e, ++this.length
            }, i.prototype.unshift = function (t) {
              var e = {
                data: t,
                next: this.head
              };
              0 === this.length && (this.tail = e), this.head = e, ++this.length
            }, i.prototype.shift = function () {
              if (0 !== this.length) {
                var t = this.head.data;
                return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, t
              }
            }, i.prototype.clear = function () {
              this.head = this.tail = null, this.length = 0
            }, i.prototype.join = function (t) {
              if (0 === this.length) return "";
              for (var e = this.head, n = "" + e.data; e = e.next;) n += t + e.data;
              return n
            }, i.prototype.concat = function (t) {
              if (0 === this.length) return r.alloc(0);
              if (1 === this.length) return this.head.data;
              for (var e = r.allocUnsafe(t >>> 0), n = this.head, i = 0; n;) n.data.copy(e, i), i += n.data.length, n = n.next;
              return e
            }
          }, function (t, e, n) {
            "use strict";
            var r = Object.keys || function (t) {
              var e = [];
              for (var n in t) e.push(n);
              return e
            };
            t.exports = h;
            var i = n(15),
              o = n(18);
            o.inherits = n(12);
            var s = n(14),
              a = n(22);
            o.inherits(h, s);
            for (var c = r(a.prototype), u = 0; u < c.length; u++) {
              var f = c[u];
              h.prototype[f] || (h.prototype[f] = a.prototype[f])
            }
  
            function h(t) {
              if (!(this instanceof h)) return new h(t);
              s.call(this, t), a.call(this, t), t && !1 === t.readable && (this.readable = !1), t && !1 === t.writable && (this.writable = !1), this.allowHalfOpen = !0, t && !1 === t.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", p)
            }
  
            function p() {
              this.allowHalfOpen || this._writableState.ended || i(l, this)
            }
  
            function l(t) {
              t.end()
            }
          }, function (t, e, n) {
            (function (e) {
              "use strict";
              t.exports = y;
              var r, i = n(15),
                o = !e.browser && ["v0.10", "v0.9."].indexOf(e.version.slice(0, 5)) > -1 ? setImmediate : i;
              y.WritableState = d;
              var s = n(18);
              s.inherits = n(12);
              var a, c = {
                deprecate: n(23)
              };
              ! function () {
                try {
                  a = n(11)
                } catch (t) {} finally {
                  a || (a = n(8).EventEmitter)
                }
              }();
              var u, f = n(2).Buffer,
                h = n(17);
  
              function p() {}
  
              function l(t, e, n) {
                this.chunk = t, this.encoding = e, this.callback = n, this.next = null
              }
  
              function d(t, e) {
                r = r || n(21), t = t || {}, this.objectMode = !!t.objectMode, e instanceof r && (this.objectMode = this.objectMode || !!t.writableObjectMode);
                var s = t.highWaterMark,
                  a = this.objectMode ? 16 : 16384;
                this.highWaterMark = s || 0 === s ? s : a, this.highWaterMark = ~~this.highWaterMark, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;
                var c = !1 === t.decodeStrings;
                this.decodeStrings = !c, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (t) {
                  ! function (t, e) {
                    var n = t._writableState,
                      r = n.sync,
                      s = n.writecb;
                    if (function (t) {
                        t.writing = !1, t.writecb = null, t.length -= t.writelen, t.writelen = 0
                      }(n), e) ! function (t, e, n, r, o) {
                      --e.pendingcb, n ? i(o, r) : o(r), t._writableState.errorEmitted = !0, t.emit("error", r)
                    }(t, n, r, e, s);
                    else {
                      var a = v(n);
                      a || n.corked || n.bufferProcessing || !n.bufferedRequest || _(t, n), r ? o(m, t, n, a, s) : m(t, n, a, s)
                    }
                  }(e, t)
                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new b(this)
              }
  
              function y(t) {
                if (r = r || n(21), !u.call(y, this) && !(this instanceof r)) return new y(t);
                this._writableState = new d(t, this), this.writable = !0, t && ("function" === typeof t.write && (this._write = t.write), "function" === typeof t.writev && (this._writev = t.writev)), a.call(this)
              }
  
              function g(t, e, n, r, i, o, s) {
                e.writelen = r, e.writecb = s, e.writing = !0, e.sync = !0, n ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite), e.sync = !1
              }
  
              function m(t, e, n, r) {
                n || function (t, e) {
                  0 === e.length && e.needDrain && (e.needDrain = !1, t.emit("drain"))
                }(t, e), e.pendingcb--, r(), E(t, e)
              }
  
              function _(t, e) {
                e.bufferProcessing = !0;
                var n = e.bufferedRequest;
                if (t._writev && n && n.next) {
                  var r = e.bufferedRequestCount,
                    i = new Array(r),
                    o = e.corkedRequestsFree;
                  o.entry = n;
                  for (var s = 0; n;) i[s] = n, n = n.next, s += 1;
                  g(t, e, !0, e.length, i, "", o.finish), e.pendingcb++, e.lastBufferedRequest = null, o.next ? (e.corkedRequestsFree = o.next, o.next = null) : e.corkedRequestsFree = new b(e)
                } else {
                  for (; n;) {
                    var a = n.chunk,
                      c = n.encoding,
                      u = n.callback;
                    if (g(t, e, !1, e.objectMode ? 1 : a.length, a, c, u), n = n.next, e.writing) break
                  }
                  null === n && (e.lastBufferedRequest = null)
                }
                e.bufferedRequestCount = 0, e.bufferedRequest = n, e.bufferProcessing = !1
              }
  
              function v(t) {
                return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing
              }
  
              function w(t, e) {
                e.prefinished || (e.prefinished = !0, t.emit("prefinish"))
              }
  
              function E(t, e) {
                var n = v(e);
                return n && (0 === e.pendingcb ? (w(t, e), e.finished = !0, t.emit("finish")) : w(t, e)), n
              }
  
              function b(t) {
                var e = this;
                this.next = null, this.entry = null, this.finish = function (n) {
                  var r = e.entry;
                  for (e.entry = null; r;) {
                    var i = r.callback;
                    t.pendingcb--, i(n), r = r.next
                  }
                  t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e
                }
              }
              s.inherits(y, a), d.prototype.getBuffer = function () {
                  for (var t = this.bufferedRequest, e = []; t;) e.push(t), t = t.next;
                  return e
                },
                function () {
                  try {
                    Object.defineProperty(d.prototype, "buffer", {
                      get: c.deprecate((function () {
                        return this.getBuffer()
                      }), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")
                    })
                  } catch (t) {}
                }(), "function" === typeof Symbol && Symbol.hasInstance && "function" === typeof Function.prototype[Symbol.hasInstance] ? (u = Function.prototype[Symbol.hasInstance], Object.defineProperty(y, Symbol.hasInstance, {
                  value: function (t) {
                    return !!u.call(this, t) || t && t._writableState instanceof d
                  }
                })) : u = function (t) {
                  return t instanceof this
                }, y.prototype.pipe = function () {
                  this.emit("error", new Error("Cannot pipe, not readable"))
                }, y.prototype.write = function (t, e, n) {
                  var r = this._writableState,
                    o = !1,
                    s = f.isBuffer(t);
                  return "function" === typeof e && (n = e, e = null), s ? e = "buffer" : e || (e = r.defaultEncoding), "function" !== typeof n && (n = p), r.ended ? function (t, e) {
                    var n = new Error("write after end");
                    t.emit("error", n), i(e, n)
                  }(this, n) : (s || function (t, e, n, r) {
                    var o = !0,
                      s = !1;
                    return null === n ? s = new TypeError("May not write null values to stream") : "string" === typeof n || void 0 === n || e.objectMode || (s = new TypeError("Invalid non-string/buffer chunk")), s && (t.emit("error", s), i(r, s), o = !1), o
                  }(this, r, t, n)) && (r.pendingcb++, o = function (t, e, n, r, i, o) {
                    n || (r = function (t, e, n) {
                      return t.objectMode || !1 === t.decodeStrings || "string" !== typeof e || (e = h.from(e, n)), e
                    }(e, r, i), f.isBuffer(r) && (i = "buffer"));
                    var s = e.objectMode ? 1 : r.length;
                    e.length += s;
                    var a = e.length < e.highWaterMark;
                    if (a || (e.needDrain = !0), e.writing || e.corked) {
                      var c = e.lastBufferedRequest;
                      e.lastBufferedRequest = new l(r, i, o), c ? c.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1
                    } else g(t, e, !1, s, r, i, o);
                    return a
                  }(this, r, s, t, e, n)), o
                }, y.prototype.cork = function () {
                  this._writableState.corked++
                }, y.prototype.uncork = function () {
                  var t = this._writableState;
                  t.corked && (t.corked--, t.writing || t.corked || t.finished || t.bufferProcessing || !t.bufferedRequest || _(this, t))
                }, y.prototype.setDefaultEncoding = function (t) {
                  if ("string" === typeof t && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + t);
                  return this._writableState.defaultEncoding = t, this
                }, y.prototype._write = function (t, e, n) {
                  n(new Error("_write() is not implemented"))
                }, y.prototype._writev = null, y.prototype.end = function (t, e, n) {
                  var r = this._writableState;
                  "function" === typeof t ? (n = t, t = null, e = null) : "function" === typeof e && (n = e, e = null), null !== t && void 0 !== t && this.write(t, e), r.corked && (r.corked = 1, this.uncork()), r.ending || r.finished || function (t, e, n) {
                    e.ending = !0, E(t, e), n && (e.finished ? i(n) : t.once("finish", n)), e.ended = !0, t.writable = !1
                  }(this, r, n)
                }
            }).call(e, n(6))
          }, function (t, e) {
            (function (e) {
              function n(t) {
                try {
                  if (!e.localStorage) return !1
                } catch (r) {
                  return !1
                }
                var n = e.localStorage[t];
                return null != n && "true" === String(n).toLowerCase()
              }
              t.exports = function (t, e) {
                if (n("noDeprecation")) return t;
                var r = !1;
                return function () {
                  if (!r) {
                    if (n("throwDeprecation")) throw new Error(e);
                    n("traceDeprecation") ? console.trace(e) : console.warn(e), r = !0
                  }
                  return t.apply(this, arguments)
                }
              }
            }).call(e, function () {
              return this
            }())
          }, function (t, e, n) {
            var r = n(2).Buffer,
              i = r.isEncoding || function (t) {
                switch (t && t.toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "binary":
                  case "base64":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                  case "raw":
                    return !0;
                  default:
                    return !1
                }
              },
              o = e.StringDecoder = function (t) {
                switch (this.encoding = (t || "utf8").toLowerCase().replace(/[-_]/, ""), function (t) {
                    if (t && !i(t)) throw new Error("Unknown encoding: " + t)
                  }(t), this.encoding) {
                  case "utf8":
                    this.surrogateSize = 3;
                    break;
                  case "ucs2":
                  case "utf16le":
                    this.surrogateSize = 2, this.detectIncompleteChar = a;
                    break;
                  case "base64":
                    this.surrogateSize = 3, this.detectIncompleteChar = c;
                    break;
                  default:
                    return void(this.write = s)
                }
                this.charBuffer = new r(6), this.charReceived = 0, this.charLength = 0
              };
  
            function s(t) {
              return t.toString(this.encoding)
            }
  
            function a(t) {
              this.charReceived = t.length % 2, this.charLength = this.charReceived ? 2 : 0
            }
  
            function c(t) {
              this.charReceived = t.length % 3, this.charLength = this.charReceived ? 3 : 0
            }
            o.prototype.write = function (t) {
              for (var e = ""; this.charLength;) {
                var n = t.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : t.length;
                if (t.copy(this.charBuffer, this.charReceived, 0, n), this.charReceived += n, this.charReceived < this.charLength) return "";
                if (t = t.slice(n, t.length), !((r = (e = this.charBuffer.slice(0, this.charLength).toString(this.encoding)).charCodeAt(e.length - 1)) >= 55296 && r <= 56319)) {
                  if (this.charReceived = this.charLength = 0, 0 === t.length) return e;
                  break
                }
                this.charLength += this.surrogateSize, e = ""
              }
              this.detectIncompleteChar(t);
              var r, i = t.length;
              if (this.charLength && (t.copy(this.charBuffer, 0, t.length - this.charReceived, i), i -= this.charReceived), i = (e += t.toString(this.encoding, 0, i)).length - 1, (r = e.charCodeAt(i)) >= 55296 && r <= 56319) {
                var o = this.surrogateSize;
                return this.charLength += o, this.charReceived += o, this.charBuffer.copy(this.charBuffer, o, 0, o), t.copy(this.charBuffer, 0, 0, o), e.substring(0, i)
              }
              return e
            }, o.prototype.detectIncompleteChar = function (t) {
              for (var e = t.length >= 3 ? 3 : t.length; e > 0; e--) {
                var n = t[t.length - e];
                if (1 == e && n >> 5 == 6) {
                  this.charLength = 2;
                  break
                }
                if (e <= 2 && n >> 4 == 14) {
                  this.charLength = 3;
                  break
                }
                if (e <= 3 && n >> 3 == 30) {
                  this.charLength = 4;
                  break
                }
              }
              this.charReceived = e
            }, o.prototype.end = function (t) {
              var e = "";
              if (t && t.length && (e = this.write(t)), this.charReceived) {
                var n = this.charReceived,
                  r = this.charBuffer,
                  i = this.encoding;
                e += r.slice(0, n).toString(i)
              }
              return e
            }
          }, function (t, e, n) {
            "use strict";
            t.exports = s;
            var r = n(21),
              i = n(18);
  
            function o(t) {
              this.afterTransform = function (e, n) {
                return function (t, e, n) {
                  var r = t._transformState;
                  r.transforming = !1;
                  var i = r.writecb;
                  if (!i) return t.emit("error", new Error("no writecb in Transform class"));
                  r.writechunk = null, r.writecb = null, null !== n && void 0 !== n && t.push(n), i(e);
                  var o = t._readableState;
                  o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && t._read(o.highWaterMark)
                }(t, e, n)
              }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null, this.writeencoding = null
            }
  
            function s(t) {
              if (!(this instanceof s)) return new s(t);
              r.call(this, t), this._transformState = new o(this);
              var e = this;
              this._readableState.needReadable = !0, this._readableState.sync = !1, t && ("function" === typeof t.transform && (this._transform = t.transform), "function" === typeof t.flush && (this._flush = t.flush)), this.once("prefinish", (function () {
                "function" === typeof this._flush ? this._flush((function (t, n) {
                  a(e, t, n)
                })) : a(e)
              }))
            }
  
            function a(t, e, n) {
              if (e) return t.emit("error", e);
              null !== n && void 0 !== n && t.push(n);
              var r = t._writableState,
                i = t._transformState;
              if (r.length) throw new Error("Calling transform done when ws.length != 0");
              if (i.transforming) throw new Error("Calling transform done when still transforming");
              return t.push(null)
            }
            i.inherits = n(12), i.inherits(s, r), s.prototype.push = function (t, e) {
              return this._transformState.needTransform = !1, r.prototype.push.call(this, t, e)
            }, s.prototype._transform = function (t, e, n) {
              throw new Error("_transform() is not implemented")
            }, s.prototype._write = function (t, e, n) {
              var r = this._transformState;
              if (r.writecb = n, r.writechunk = t, r.writeencoding = e, !r.transforming) {
                var i = this._readableState;
                (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
              }
            }, s.prototype._read = function (t) {
              var e = this._transformState;
              null !== e.writechunk && e.writecb && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0
            }
          }, function (t, e, n) {
            "use strict";
            t.exports = o;
            var r = n(25),
              i = n(18);
  
            function o(t) {
              if (!(this instanceof o)) return new o(t);
              r.call(this, t)
            }
            i.inherits = n(12), i.inherits(o, r), o.prototype._transform = function (t, e, n) {
              n(null, t)
            }
          }, function (t, e, n) {
            t.exports = n(22)
          }, function (t, e, n) {
            t.exports = n(21)
          }, function (t, e, n) {
            t.exports = n(25)
          }, function (t, e, n) {
            t.exports = n(26)
          }, function (t, e, n) {
            "use strict";
            var r = n(32),
              i = n(33),
              o = n(38),
              s = n(39),
              a = n(40),
              c = n(41),
              u = n(42),
              f = Object.prototype.toString;
  
            function h(t) {
              if (!(this instanceof h)) return new h(t);
              this.options = i.assign({
                chunkSize: 16384,
                windowBits: 0,
                to: ""
              }, t || {});
              var e = this.options;
              e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, 0 === e.windowBits && (e.windowBits = -15)), !(e.windowBits >= 0 && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && 0 === (15 & e.windowBits) && (e.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new c, this.strm.avail_out = 0;
              var n = r.inflateInit2(this.strm, e.windowBits);
              if (n !== s.Z_OK) throw new Error(a[n]);
              this.header = new u, r.inflateGetHeader(this.strm, this.header)
            }
  
            function p(t, e) {
              var n = new h(e);
              if (n.push(t, !0), n.err) throw n.msg || a[n.err];
              return n.result
            }
            h.prototype.push = function (t, e) {
              var n, a, c, u, h, p, l = this.strm,
                d = this.options.chunkSize,
                y = this.options.dictionary,
                g = !1;
              if (this.ended) return !1;
              a = e === ~~e ? e : !0 === e ? s.Z_FINISH : s.Z_NO_FLUSH, "string" === typeof t ? l.input = o.binstring2buf(t) : "[object ArrayBuffer]" === f.call(t) ? l.input = new Uint8Array(t) : l.input = t, l.next_in = 0, l.avail_in = l.input.length;
              do {
                if (0 === l.avail_out && (l.output = new i.Buf8(d), l.next_out = 0, l.avail_out = d), (n = r.inflate(l, s.Z_NO_FLUSH)) === s.Z_NEED_DICT && y && (p = "string" === typeof y ? o.string2buf(y) : "[object ArrayBuffer]" === f.call(y) ? new Uint8Array(y) : y, n = r.inflateSetDictionary(this.strm, p)), n === s.Z_BUF_ERROR && !0 === g && (n = s.Z_OK, g = !1), n !== s.Z_STREAM_END && n !== s.Z_OK) return this.onEnd(n), this.ended = !0, !1;
                l.next_out && (0 !== l.avail_out && n !== s.Z_STREAM_END && (0 !== l.avail_in || a !== s.Z_FINISH && a !== s.Z_SYNC_FLUSH) || ("string" === this.options.to ? (c = o.utf8border(l.output, l.next_out), u = l.next_out - c, h = o.buf2string(l.output, c), l.next_out = u, l.avail_out = d - u, u && i.arraySet(l.output, l.output, c, u, 0), this.onData(h)) : this.onData(i.shrinkBuf(l.output, l.next_out)))), 0 === l.avail_in && 0 === l.avail_out && (g = !0)
              } while ((l.avail_in > 0 || 0 === l.avail_out) && n !== s.Z_STREAM_END);
              return n === s.Z_STREAM_END && (a = s.Z_FINISH), a === s.Z_FINISH ? (n = r.inflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === s.Z_OK) : a !== s.Z_SYNC_FLUSH || (this.onEnd(s.Z_OK), l.avail_out = 0, !0)
            }, h.prototype.onData = function (t) {
              this.chunks.push(t)
            }, h.prototype.onEnd = function (t) {
              t === s.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = i.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg
            }, e.Inflate = h, e.inflate = p, e.inflateRaw = function (t, e) {
              return (e = e || {}).raw = !0, p(t, e)
            }, e.ungzip = p
          }, function (t, e, n) {
            "use strict";
            var r = n(33),
              i = n(34),
              o = n(35),
              s = n(36),
              a = n(37),
              c = -2,
              u = 12,
              f = 30;
  
            function h(t) {
              return (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24)
            }
  
            function p() {
              this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
            }
  
            function l(t) {
              var e;
              return t && t.state ? (e = t.state, t.total_in = t.total_out = e.total = 0, t.msg = "", e.wrap && (t.adler = 1 & e.wrap), e.mode = 1, e.last = 0, e.havedict = 0, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new r.Buf32(852), e.distcode = e.distdyn = new r.Buf32(592), e.sane = 1, e.back = -1, 0) : c
            }
  
            function d(t) {
              var e;
              return t && t.state ? ((e = t.state).wsize = 0, e.whave = 0, e.wnext = 0, l(t)) : c
            }
  
            function y(t, e) {
              var n, r;
              return t && t.state ? (r = t.state, e < 0 ? (n = 0, e = -e) : (n = 1 + (e >> 4), e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? c : (null !== r.window && r.wbits !== e && (r.window = null), r.wrap = n, r.wbits = e, d(t))) : c
            }
  
            function g(t, e) {
              var n, r;
              return t ? (r = new p, t.state = r, r.window = null, 0 !== (n = y(t, e)) && (t.state = null), n) : c
            }
            var m, _, v = !0;
  
            function w(t) {
              if (v) {
                var e;
                for (m = new r.Buf32(512), _ = new r.Buf32(32), e = 0; e < 144;) t.lens[e++] = 8;
                for (; e < 256;) t.lens[e++] = 9;
                for (; e < 280;) t.lens[e++] = 7;
                for (; e < 288;) t.lens[e++] = 8;
                for (a(1, t.lens, 0, 288, m, 0, t.work, {
                    bits: 9
                  }), e = 0; e < 32;) t.lens[e++] = 5;
                a(2, t.lens, 0, 32, _, 0, t.work, {
                  bits: 5
                }), v = !1
              }
              t.lencode = m, t.lenbits = 9, t.distcode = _, t.distbits = 5
            }
  
            function E(t, e, n, i) {
              var o, s = t.state;
              return null === s.window && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0, s.window = new r.Buf8(s.wsize)), i >= s.wsize ? (r.arraySet(s.window, e, n - s.wsize, s.wsize, 0), s.wnext = 0, s.whave = s.wsize) : ((o = s.wsize - s.wnext) > i && (o = i), r.arraySet(s.window, e, n - i, o, s.wnext), (i -= o) ? (r.arraySet(s.window, e, n - i, i, 0), s.wnext = i, s.whave = s.wsize) : (s.wnext += o, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += o))), 0
            }
            e.inflateReset = d, e.inflateReset2 = y, e.inflateResetKeep = l, e.inflateInit = function (t) {
              return g(t, 15)
            }, e.inflateInit2 = g, e.inflate = function (t, e) {
              var n, p, l, d, y, g, m, _, v, b, S, k, I, O, F, N, R, L, T, x, A, D, P, C, U = 0,
                M = new r.Buf8(4),
                j = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
              if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in) return c;
              (n = t.state).mode === u && (n.mode = 13), y = t.next_out, l = t.output, m = t.avail_out, d = t.next_in, p = t.input, g = t.avail_in, _ = n.hold, v = n.bits, b = g, S = m, D = 0;
              t: for (;;) switch (n.mode) {
                case 1:
                  if (0 === n.wrap) {
                    n.mode = 13;
                    break
                  }
                  for (; v < 16;) {
                    if (0 === g) break t;
                    g--, _ += p[d++] << v, v += 8
                  }
                  if (2 & n.wrap && 35615 === _) {
                    n.check = 0, M[0] = 255 & _, M[1] = _ >>> 8 & 255, n.check = o(n.check, M, 2, 0), _ = 0, v = 0, n.mode = 2;
                    break
                  }
                  if (n.flags = 0, n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & _) << 8) + (_ >> 8)) % 31) {
                    t.msg = "incorrect header check", n.mode = f;
                    break
                  }
                  if (8 !== (15 & _)) {
                    t.msg = "unknown compression method", n.mode = f;
                    break
                  }
                  if (v -= 4, A = 8 + (15 & (_ >>>= 4)), 0 === n.wbits) n.wbits = A;
                  else if (A > n.wbits) {
                    t.msg = "invalid window size", n.mode = f;
                    break
                  }
                  n.dmax = 1 << A, t.adler = n.check = 1, n.mode = 512 & _ ? 10 : u, _ = 0, v = 0;
                  break;
                case 2:
                  for (; v < 16;) {
                    if (0 === g) break t;
                    g--, _ += p[d++] << v, v += 8
                  }
                  if (n.flags = _, 8 !== (255 & n.flags)) {
                    t.msg = "unknown compression method", n.mode = f;
                    break
                  }
                  if (57344 & n.flags) {
                    t.msg = "unknown header flags set", n.mode = f;
                    break
                  }
                  n.head && (n.head.text = _ >> 8 & 1), 512 & n.flags && (M[0] = 255 & _, M[1] = _ >>> 8 & 255, n.check = o(n.check, M, 2, 0)), _ = 0, v = 0, n.mode = 3;
                case 3:
                  for (; v < 32;) {
                    if (0 === g) break t;
                    g--, _ += p[d++] << v, v += 8
                  }
                  n.head && (n.head.time = _), 512 & n.flags && (M[0] = 255 & _, M[1] = _ >>> 8 & 255, M[2] = _ >>> 16 & 255, M[3] = _ >>> 24 & 255, n.check = o(n.check, M, 4, 0)), _ = 0, v = 0, n.mode = 4;
                case 4:
                  for (; v < 16;) {
                    if (0 === g) break t;
                    g--, _ += p[d++] << v, v += 8
                  }
                  n.head && (n.head.xflags = 255 & _, n.head.os = _ >> 8), 512 & n.flags && (M[0] = 255 & _, M[1] = _ >>> 8 & 255, n.check = o(n.check, M, 2, 0)), _ = 0, v = 0, n.mode = 5;
                case 5:
                  if (1024 & n.flags) {
                    for (; v < 16;) {
                      if (0 === g) break t;
                      g--, _ += p[d++] << v, v += 8
                    }
                    n.length = _, n.head && (n.head.extra_len = _), 512 & n.flags && (M[0] = 255 & _, M[1] = _ >>> 8 & 255, n.check = o(n.check, M, 2, 0)), _ = 0, v = 0
                  } else n.head && (n.head.extra = null);
                  n.mode = 6;
                case 6:
                  if (1024 & n.flags && ((k = n.length) > g && (k = g), k && (n.head && (A = n.head.extra_len - n.length, n.head.extra || (n.head.extra = new Array(n.head.extra_len)), r.arraySet(n.head.extra, p, d, k, A)), 512 & n.flags && (n.check = o(n.check, p, k, d)), g -= k, d += k, n.length -= k), n.length)) break t;
                  n.length = 0, n.mode = 7;
                case 7:
                  if (2048 & n.flags) {
                    if (0 === g) break t;
                    k = 0;
                    do {
                      A = p[d + k++], n.head && A && n.length < 65536 && (n.head.name += String.fromCharCode(A))
                    } while (A && k < g);
                    if (512 & n.flags && (n.check = o(n.check, p, k, d)), g -= k, d += k, A) break t
                  } else n.head && (n.head.name = null);
                  n.length = 0, n.mode = 8;
                case 8:
                  if (4096 & n.flags) {
                    if (0 === g) break t;
                    k = 0;
                    do {
                      A = p[d + k++], n.head && A && n.length < 65536 && (n.head.comment += String.fromCharCode(A))
                    } while (A && k < g);
                    if (512 & n.flags && (n.check = o(n.check, p, k, d)), g -= k, d += k, A) break t
                  } else n.head && (n.head.comment = null);
                  n.mode = 9;
                case 9:
                  if (512 & n.flags) {
                    for (; v < 16;) {
                      if (0 === g) break t;
                      g--, _ += p[d++] << v, v += 8
                    }
                    if (_ !== (65535 & n.check)) {
                      t.msg = "header crc mismatch", n.mode = f;
                      break
                    }
                    _ = 0, v = 0
                  }
                  n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), t.adler = n.check = 0, n.mode = u;
                  break;
                case 10:
                  for (; v < 32;) {
                    if (0 === g) break t;
                    g--, _ += p[d++] << v, v += 8
                  }
                  t.adler = n.check = h(_), _ = 0, v = 0, n.mode = 11;
                case 11:
                  if (0 === n.havedict) return t.next_out = y, t.avail_out = m, t.next_in = d, t.avail_in = g, n.hold = _, n.bits = v, 2;
                  t.adler = n.check = 1, n.mode = u;
                case u:
                  if (5 === e || 6 === e) break t;
                case 13:
                  if (n.last) {
                    _ >>>= 7 & v, v -= 7 & v, n.mode = 27;
                    break
                  }
                  for (; v < 3;) {
                    if (0 === g) break t;
                    g--, _ += p[d++] << v, v += 8
                  }
                  switch (n.last = 1 & _, v -= 1, 3 & (_ >>>= 1)) {
                    case 0:
                      n.mode = 14;
                      break;
                    case 1:
                      if (w(n), n.mode = 20, 6 === e) {
                        _ >>>= 2, v -= 2;
                        break t
                      }
                      break;
                    case 2:
                      n.mode = 17;
                      break;
                    case 3:
                      t.msg = "invalid block type", n.mode = f
                  }
                  _ >>>= 2, v -= 2;
                  break;
                case 14:
                  for (_ >>>= 7 & v, v -= 7 & v; v < 32;) {
                    if (0 === g) break t;
                    g--, _ += p[d++] << v, v += 8
                  }
                  if ((65535 & _) !== (_ >>> 16 ^ 65535)) {
                    t.msg = "invalid stored block lengths", n.mode = f;
                    break
                  }
                  if (n.length = 65535 & _, _ = 0, v = 0, n.mode = 15, 6 === e) break t;
                case 15:
                  n.mode = 16;
                case 16:
                  if (k = n.length) {
                    if (k > g && (k = g), k > m && (k = m), 0 === k) break t;
                    r.arraySet(l, p, d, k, y), g -= k, d += k, m -= k, y += k, n.length -= k;
                    break
                  }
                  n.mode = u;
                  break;
                case 17:
                  for (; v < 14;) {
                    if (0 === g) break t;
                    g--, _ += p[d++] << v, v += 8
                  }
                  if (n.nlen = 257 + (31 & _), _ >>>= 5, v -= 5, n.ndist = 1 + (31 & _), _ >>>= 5, v -= 5, n.ncode = 4 + (15 & _), _ >>>= 4, v -= 4, n.nlen > 286 || n.ndist > 30) {
                    t.msg = "too many length or distance symbols", n.mode = f;
                    break
                  }
                  n.have = 0, n.mode = 18;
                case 18:
                  for (; n.have < n.ncode;) {
                    for (; v < 3;) {
                      if (0 === g) break t;
                      g--, _ += p[d++] << v, v += 8
                    }
                    n.lens[j[n.have++]] = 7 & _, _ >>>= 3, v -= 3
                  }
                  for (; n.have < 19;) n.lens[j[n.have++]] = 0;
                  if (n.lencode = n.lendyn, n.lenbits = 7, P = {
                      bits: n.lenbits
                    }, D = a(0, n.lens, 0, 19, n.lencode, 0, n.work, P), n.lenbits = P.bits, D) {
                    t.msg = "invalid code lengths set", n.mode = f;
                    break
                  }
                  n.have = 0, n.mode = 19;
                case 19:
                  for (; n.have < n.nlen + n.ndist;) {
                    for (; N = (U = n.lencode[_ & (1 << n.lenbits) - 1]) >>> 16 & 255, R = 65535 & U, !((F = U >>> 24) <= v);) {
                      if (0 === g) break t;
                      g--, _ += p[d++] << v, v += 8
                    }
                    if (R < 16) _ >>>= F, v -= F, n.lens[n.have++] = R;
                    else {
                      if (16 === R) {
                        for (C = F + 2; v < C;) {
                          if (0 === g) break t;
                          g--, _ += p[d++] << v, v += 8
                        }
                        if (_ >>>= F, v -= F, 0 === n.have) {
                          t.msg = "invalid bit length repeat", n.mode = f;
                          break
                        }
                        A = n.lens[n.have - 1], k = 3 + (3 & _), _ >>>= 2, v -= 2
                      } else if (17 === R) {
                        for (C = F + 3; v < C;) {
                          if (0 === g) break t;
                          g--, _ += p[d++] << v, v += 8
                        }
                        v -= F, A = 0, k = 3 + (7 & (_ >>>= F)), _ >>>= 3, v -= 3
                      } else {
                        for (C = F + 7; v < C;) {
                          if (0 === g) break t;
                          g--, _ += p[d++] << v, v += 8
                        }
                        v -= F, A = 0, k = 11 + (127 & (_ >>>= F)), _ >>>= 7, v -= 7
                      }
                      if (n.have + k > n.nlen + n.ndist) {
                        t.msg = "invalid bit length repeat", n.mode = f;
                        break
                      }
                      for (; k--;) n.lens[n.have++] = A
                    }
                  }
                  if (n.mode === f) break;
                  if (0 === n.lens[256]) {
                    t.msg = "invalid code -- missing end-of-block", n.mode = f;
                    break
                  }
                  if (n.lenbits = 9, P = {
                      bits: n.lenbits
                    }, D = a(1, n.lens, 0, n.nlen, n.lencode, 0, n.work, P), n.lenbits = P.bits, D) {
                    t.msg = "invalid literal/lengths set", n.mode = f;
                    break
                  }
                  if (n.distbits = 6, n.distcode = n.distdyn, P = {
                      bits: n.distbits
                    }, D = a(2, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, P), n.distbits = P.bits, D) {
                    t.msg = "invalid distances set", n.mode = f;
                    break
                  }
                  if (n.mode = 20, 6 === e) break t;
                case 20:
                  n.mode = 21;
                case 21:
                  if (g >= 6 && m >= 258) {
                    t.next_out = y, t.avail_out = m, t.next_in = d, t.avail_in = g, n.hold = _, n.bits = v, s(t, S), y = t.next_out, l = t.output, m = t.avail_out, d = t.next_in, p = t.input, g = t.avail_in, _ = n.hold, v = n.bits, n.mode === u && (n.back = -1);
                    break
                  }
                  for (n.back = 0; N = (U = n.lencode[_ & (1 << n.lenbits) - 1]) >>> 16 & 255, R = 65535 & U, !((F = U >>> 24) <= v);) {
                    if (0 === g) break t;
                    g--, _ += p[d++] << v, v += 8
                  }
                  if (N && 0 === (240 & N)) {
                    for (L = F, T = N, x = R; N = (U = n.lencode[x + ((_ & (1 << L + T) - 1) >> L)]) >>> 16 & 255, R = 65535 & U, !(L + (F = U >>> 24) <= v);) {
                      if (0 === g) break t;
                      g--, _ += p[d++] << v, v += 8
                    }
                    _ >>>= L, v -= L, n.back += L
                  }
                  if (_ >>>= F, v -= F, n.back += F, n.length = R, 0 === N) {
                    n.mode = 26;
                    break
                  }
                  if (32 & N) {
                    n.back = -1, n.mode = u;
                    break
                  }
                  if (64 & N) {
                    t.msg = "invalid literal/length code", n.mode = f;
                    break
                  }
                  n.extra = 15 & N, n.mode = 22;
                case 22:
                  if (n.extra) {
                    for (C = n.extra; v < C;) {
                      if (0 === g) break t;
                      g--, _ += p[d++] << v, v += 8
                    }
                    n.length += _ & (1 << n.extra) - 1, _ >>>= n.extra, v -= n.extra, n.back += n.extra
                  }
                  n.was = n.length, n.mode = 23;
                case 23:
                  for (; N = (U = n.distcode[_ & (1 << n.distbits) - 1]) >>> 16 & 255, R = 65535 & U, !((F = U >>> 24) <= v);) {
                    if (0 === g) break t;
                    g--, _ += p[d++] << v, v += 8
                  }
                  if (0 === (240 & N)) {
                    for (L = F, T = N, x = R; N = (U = n.distcode[x + ((_ & (1 << L + T) - 1) >> L)]) >>> 16 & 255, R = 65535 & U, !(L + (F = U >>> 24) <= v);) {
                      if (0 === g) break t;
                      g--, _ += p[d++] << v, v += 8
                    }
                    _ >>>= L, v -= L, n.back += L
                  }
                  if (_ >>>= F, v -= F, n.back += F, 64 & N) {
                    t.msg = "invalid distance code", n.mode = f;
                    break
                  }
                  n.offset = R, n.extra = 15 & N, n.mode = 24;
                case 24:
                  if (n.extra) {
                    for (C = n.extra; v < C;) {
                      if (0 === g) break t;
                      g--, _ += p[d++] << v, v += 8
                    }
                    n.offset += _ & (1 << n.extra) - 1, _ >>>= n.extra, v -= n.extra, n.back += n.extra
                  }
                  if (n.offset > n.dmax) {
                    t.msg = "invalid distance too far back", n.mode = f;
                    break
                  }
                  n.mode = 25;
                case 25:
                  if (0 === m) break t;
                  if (k = S - m, n.offset > k) {
                    if ((k = n.offset - k) > n.whave && n.sane) {
                      t.msg = "invalid distance too far back", n.mode = f;
                      break
                    }
                    k > n.wnext ? (k -= n.wnext, I = n.wsize - k) : I = n.wnext - k, k > n.length && (k = n.length), O = n.window
                  } else O = l, I = y - n.offset, k = n.length;
                  k > m && (k = m), m -= k, n.length -= k;
                  do {
                    l[y++] = O[I++]
                  } while (--k);
                  0 === n.length && (n.mode = 21);
                  break;
                case 26:
                  if (0 === m) break t;
                  l[y++] = n.length, m--, n.mode = 21;
                  break;
                case 27:
                  if (n.wrap) {
                    for (; v < 32;) {
                      if (0 === g) break t;
                      g--, _ |= p[d++] << v, v += 8
                    }
                    if (S -= m, t.total_out += S, n.total += S, S && (t.adler = n.check = n.flags ? o(n.check, l, S, y - S) : i(n.check, l, S, y - S)), S = m, (n.flags ? _ : h(_)) !== n.check) {
                      t.msg = "incorrect data check", n.mode = f;
                      break
                    }
                    _ = 0, v = 0
                  }
                  n.mode = 28;
                case 28:
                  if (n.wrap && n.flags) {
                    for (; v < 32;) {
                      if (0 === g) break t;
                      g--, _ += p[d++] << v, v += 8
                    }
                    if (_ !== (4294967295 & n.total)) {
                      t.msg = "incorrect length check", n.mode = f;
                      break
                    }
                    _ = 0, v = 0
                  }
                  n.mode = 29;
                case 29:
                  D = 1;
                  break t;
                case f:
                  D = -3;
                  break t;
                case 31:
                  return -4;
                default:
                  return c
              }
              return t.next_out = y, t.avail_out = m, t.next_in = d, t.avail_in = g, n.hold = _, n.bits = v, (n.wsize || S !== t.avail_out && n.mode < f && (n.mode < 27 || 4 !== e)) && E(t, t.output, t.next_out, S - t.avail_out) ? (n.mode = 31, -4) : (b -= t.avail_in, S -= t.avail_out, t.total_in += b, t.total_out += S, n.total += S, n.wrap && S && (t.adler = n.check = n.flags ? o(n.check, l, S, t.next_out - S) : i(n.check, l, S, t.next_out - S)), t.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === u ? 128 : 0) + (20 === n.mode || 15 === n.mode ? 256 : 0), (0 === b && 0 === S || 4 === e) && 0 === D && (D = -5), D)
            }, e.inflateEnd = function (t) {
              if (!t || !t.state) return c;
              var e = t.state;
              return e.window && (e.window = null), t.state = null, 0
            }, e.inflateGetHeader = function (t, e) {
              var n;
              return t && t.state ? 0 === (2 & (n = t.state).wrap) ? c : (n.head = e, e.done = !1, 0) : c
            }, e.inflateSetDictionary = function (t, e) {
              var n, r = e.length;
              return t && t.state ? 0 !== (n = t.state).wrap && 11 !== n.mode ? c : 11 === n.mode && i(1, e, r, 0) !== n.check ? -3 : E(t, e, r, r) ? (n.mode = 31, -4) : (n.havedict = 1, 0) : c
            }, e.inflateInfo = "pako inflate (from Nodeca project)"
          }, function (t, e) {
            "use strict";
            var n = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Int32Array;
            e.assign = function (t) {
              for (var e = Array.prototype.slice.call(arguments, 1); e.length;) {
                var n = e.shift();
                if (n) {
                  if ("object" !== typeof n) throw new TypeError(n + "must be non-object");
                  for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
                }
              }
              return t
            }, e.shrinkBuf = function (t, e) {
              return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e, t)
            };
            var r = {
                arraySet: function (t, e, n, r, i) {
                  if (e.subarray && t.subarray) t.set(e.subarray(n, n + r), i);
                  else
                    for (var o = 0; o < r; o++) t[i + o] = e[n + o]
                },
                flattenChunks: function (t) {
                  var e, n, r, i, o, s;
                  for (r = 0, e = 0, n = t.length; e < n; e++) r += t[e].length;
                  for (s = new Uint8Array(r), i = 0, e = 0, n = t.length; e < n; e++) o = t[e], s.set(o, i), i += o.length;
                  return s
                }
              },
              i = {
                arraySet: function (t, e, n, r, i) {
                  for (var o = 0; o < r; o++) t[i + o] = e[n + o]
                },
                flattenChunks: function (t) {
                  return [].concat.apply([], t)
                }
              };
            e.setTyped = function (t) {
              t ? (e.Buf8 = Uint8Array, e.Buf16 = Uint16Array, e.Buf32 = Int32Array, e.assign(e, r)) : (e.Buf8 = Array, e.Buf16 = Array, e.Buf32 = Array, e.assign(e, i))
            }, e.setTyped(n)
          }, function (t, e) {
            "use strict";
            t.exports = function (t, e, n, r) {
              for (var i = 65535 & t | 0, o = t >>> 16 & 65535 | 0, s = 0; 0 !== n;) {
                n -= s = n > 2e3 ? 2e3 : n;
                do {
                  o = o + (i = i + e[r++] | 0) | 0
                } while (--s);
                i %= 65521, o %= 65521
              }
              return i | o << 16 | 0
            }
          }, function (t, e) {
            "use strict";
            var n = function () {
              for (var t, e = [], n = 0; n < 256; n++) {
                t = n;
                for (var r = 0; r < 8; r++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
                e[n] = t
              }
              return e
            }();
            t.exports = function (t, e, r, i) {
              var o = n,
                s = i + r;
              t ^= -1;
              for (var a = i; a < s; a++) t = t >>> 8 ^ o[255 & (t ^ e[a])];
              return -1 ^ t
            }
          }, function (t, e) {
            "use strict";
            t.exports = function (t, e) {
              var n, r, i, o, s, a, c, u, f, h, p, l, d, y, g, m, _, v, w, E, b, S, k, I, O;
              n = t.state, r = t.next_in, I = t.input, i = r + (t.avail_in - 5), o = t.next_out, O = t.output, s = o - (e - t.avail_out), a = o + (t.avail_out - 257), c = n.dmax, u = n.wsize, f = n.whave, h = n.wnext, p = n.window, l = n.hold, d = n.bits, y = n.lencode, g = n.distcode, m = (1 << n.lenbits) - 1, _ = (1 << n.distbits) - 1;
              t: do {
                d < 15 && (l += I[r++] << d, d += 8, l += I[r++] << d, d += 8), v = y[l & m];
                e: for (;;) {
                  if (l >>>= w = v >>> 24, d -= w, 0 === (w = v >>> 16 & 255)) O[o++] = 65535 & v;
                  else {
                    if (!(16 & w)) {
                      if (0 === (64 & w)) {
                        v = y[(65535 & v) + (l & (1 << w) - 1)];
                        continue e
                      }
                      if (32 & w) {
                        n.mode = 12;
                        break t
                      }
                      t.msg = "invalid literal/length code", n.mode = 30;
                      break t
                    }
                    E = 65535 & v, (w &= 15) && (d < w && (l += I[r++] << d, d += 8), E += l & (1 << w) - 1, l >>>= w, d -= w), d < 15 && (l += I[r++] << d, d += 8, l += I[r++] << d, d += 8), v = g[l & _];
                    n: for (;;) {
                      if (l >>>= w = v >>> 24, d -= w, !(16 & (w = v >>> 16 & 255))) {
                        if (0 === (64 & w)) {
                          v = g[(65535 & v) + (l & (1 << w) - 1)];
                          continue n
                        }
                        t.msg = "invalid distance code", n.mode = 30;
                        break t
                      }
                      if (b = 65535 & v, d < (w &= 15) && (l += I[r++] << d, (d += 8) < w && (l += I[r++] << d, d += 8)), (b += l & (1 << w) - 1) > c) {
                        t.msg = "invalid distance too far back", n.mode = 30;
                        break t
                      }
                      if (l >>>= w, d -= w, b > (w = o - s)) {
                        if ((w = b - w) > f && n.sane) {
                          t.msg = "invalid distance too far back", n.mode = 30;
                          break t
                        }
                        if (S = 0, k = p, 0 === h) {
                          if (S += u - w, w < E) {
                            E -= w;
                            do {
                              O[o++] = p[S++]
                            } while (--w);
                            S = o - b, k = O
                          }
                        } else if (h < w) {
                          if (S += u + h - w, (w -= h) < E) {
                            E -= w;
                            do {
                              O[o++] = p[S++]
                            } while (--w);
                            if (S = 0, h < E) {
                              E -= w = h;
                              do {
                                O[o++] = p[S++]
                              } while (--w);
                              S = o - b, k = O
                            }
                          }
                        } else if (S += h - w, w < E) {
                          E -= w;
                          do {
                            O[o++] = p[S++]
                          } while (--w);
                          S = o - b, k = O
                        }
                        for (; E > 2;) O[o++] = k[S++], O[o++] = k[S++], O[o++] = k[S++], E -= 3;
                        E && (O[o++] = k[S++], E > 1 && (O[o++] = k[S++]))
                      } else {
                        S = o - b;
                        do {
                          O[o++] = O[S++], O[o++] = O[S++], O[o++] = O[S++], E -= 3
                        } while (E > 2);
                        E && (O[o++] = O[S++], E > 1 && (O[o++] = O[S++]))
                      }
                      break
                    }
                  }
                  break
                }
              } while (r < i && o < a);
              r -= E = d >> 3, l &= (1 << (d -= E << 3)) - 1, t.next_in = r, t.next_out = o, t.avail_in = r < i ? i - r + 5 : 5 - (r - i), t.avail_out = o < a ? a - o + 257 : 257 - (o - a), n.hold = l, n.bits = d
            }
          }, function (t, e, n) {
            "use strict";
            var r = n(33),
              i = 15,
              o = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
              s = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
              a = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
              c = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
            t.exports = function (t, e, n, u, f, h, p, l) {
              var d, y, g, m, _, v, w, E, b, S = l.bits,
                k = 0,
                I = 0,
                O = 0,
                F = 0,
                N = 0,
                R = 0,
                L = 0,
                T = 0,
                x = 0,
                A = 0,
                D = null,
                P = 0,
                C = new r.Buf16(16),
                U = new r.Buf16(16),
                M = null,
                j = 0;
              for (k = 0; k <= i; k++) C[k] = 0;
              for (I = 0; I < u; I++) C[e[n + I]]++;
              for (N = S, F = i; F >= 1 && 0 === C[F]; F--);
              if (N > F && (N = F), 0 === F) return f[h++] = 20971520, f[h++] = 20971520, l.bits = 1, 0;
              for (O = 1; O < F && 0 === C[O]; O++);
              for (N < O && (N = O), T = 1, k = 1; k <= i; k++)
                if (T <<= 1, (T -= C[k]) < 0) return -1;
              if (T > 0 && (0 === t || 1 !== F)) return -1;
              for (U[1] = 0, k = 1; k < i; k++) U[k + 1] = U[k] + C[k];
              for (I = 0; I < u; I++) 0 !== e[n + I] && (p[U[e[n + I]]++] = I);
              if (0 === t ? (D = M = p, v = 19) : 1 === t ? (D = o, P -= 257, M = s, j -= 257, v = 256) : (D = a, M = c, v = -1), A = 0, I = 0, k = O, _ = h, R = N, L = 0, g = -1, m = (x = 1 << N) - 1, 1 === t && x > 852 || 2 === t && x > 592) return 1;
              for (;;) {
                w = k - L, p[I] < v ? (E = 0, b = p[I]) : p[I] > v ? (E = M[j + p[I]], b = D[P + p[I]]) : (E = 96, b = 0), d = 1 << k - L, O = y = 1 << R;
                do {
                  f[_ + (A >> L) + (y -= d)] = w << 24 | E << 16 | b | 0
                } while (0 !== y);
                for (d = 1 << k - 1; A & d;) d >>= 1;
                if (0 !== d ? (A &= d - 1, A += d) : A = 0, I++, 0 === --C[k]) {
                  if (k === F) break;
                  k = e[n + p[I]]
                }
                if (k > N && (A & m) !== g) {
                  for (0 === L && (L = N), _ += O, T = 1 << (R = k - L); R + L < F && !((T -= C[R + L]) <= 0);) R++, T <<= 1;
                  if (x += 1 << R, 1 === t && x > 852 || 2 === t && x > 592) return 1;
                  f[g = A & m] = N << 24 | R << 16 | _ - h | 0
                }
              }
              return 0 !== A && (f[_ + A] = k - L << 24 | 64 << 16 | 0), l.bits = N, 0
            }
          }, function (t, e, n) {
            "use strict";
            var r = n(33),
              i = !0,
              o = !0;
            try {
              String.fromCharCode.apply(null, [0])
            } catch (u) {
              i = !1
            }
            try {
              String.fromCharCode.apply(null, new Uint8Array(1))
            } catch (u) {
              o = !1
            }
            for (var s = new r.Buf8(256), a = 0; a < 256; a++) s[a] = a >= 252 ? 6 : a >= 248 ? 5 : a >= 240 ? 4 : a >= 224 ? 3 : a >= 192 ? 2 : 1;
  
            function c(t, e) {
              if (e < 65537 && (t.subarray && o || !t.subarray && i)) return String.fromCharCode.apply(null, r.shrinkBuf(t, e));
              for (var n = "", s = 0; s < e; s++) n += String.fromCharCode(t[s]);
              return n
            }
            s[254] = s[254] = 1, e.string2buf = function (t) {
              var e, n, i, o, s, a = t.length,
                c = 0;
              for (o = 0; o < a; o++) 55296 === (64512 & (n = t.charCodeAt(o))) && o + 1 < a && 56320 === (64512 & (i = t.charCodeAt(o + 1))) && (n = 65536 + (n - 55296 << 10) + (i - 56320), o++), c += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
              for (e = new r.Buf8(c), s = 0, o = 0; s < c; o++) 55296 === (64512 & (n = t.charCodeAt(o))) && o + 1 < a && 56320 === (64512 & (i = t.charCodeAt(o + 1))) && (n = 65536 + (n - 55296 << 10) + (i - 56320), o++), n < 128 ? e[s++] = n : n < 2048 ? (e[s++] = 192 | n >>> 6, e[s++] = 128 | 63 & n) : n < 65536 ? (e[s++] = 224 | n >>> 12, e[s++] = 128 | n >>> 6 & 63, e[s++] = 128 | 63 & n) : (e[s++] = 240 | n >>> 18, e[s++] = 128 | n >>> 12 & 63, e[s++] = 128 | n >>> 6 & 63, e[s++] = 128 | 63 & n);
              return e
            }, e.buf2binstring = function (t) {
              return c(t, t.length)
            }, e.binstring2buf = function (t) {
              for (var e = new r.Buf8(t.length), n = 0, i = e.length; n < i; n++) e[n] = t.charCodeAt(n);
              return e
            }, e.buf2string = function (t, e) {
              var n, r, i, o, a = e || t.length,
                u = new Array(2 * a);
              for (r = 0, n = 0; n < a;)
                if ((i = t[n++]) < 128) u[r++] = i;
                else if ((o = s[i]) > 4) u[r++] = 65533, n += o - 1;
              else {
                for (i &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && n < a;) i = i << 6 | 63 & t[n++], o--;
                o > 1 ? u[r++] = 65533 : i < 65536 ? u[r++] = i : (i -= 65536, u[r++] = 55296 | i >> 10 & 1023, u[r++] = 56320 | 1023 & i)
              }
              return c(u, r)
            }, e.utf8border = function (t, e) {
              var n;
              for ((e = e || t.length) > t.length && (e = t.length), n = e - 1; n >= 0 && 128 === (192 & t[n]);) n--;
              return n < 0 || 0 === n ? e : n + s[t[n]] > e ? n : e
            }
          }, function (t, e) {
            "use strict";
            t.exports = {
              Z_NO_FLUSH: 0,
              Z_PARTIAL_FLUSH: 1,
              Z_SYNC_FLUSH: 2,
              Z_FULL_FLUSH: 3,
              Z_FINISH: 4,
              Z_BLOCK: 5,
              Z_TREES: 6,
              Z_OK: 0,
              Z_STREAM_END: 1,
              Z_NEED_DICT: 2,
              Z_ERRNO: -1,
              Z_STREAM_ERROR: -2,
              Z_DATA_ERROR: -3,
              Z_BUF_ERROR: -5,
              Z_NO_COMPRESSION: 0,
              Z_BEST_SPEED: 1,
              Z_BEST_COMPRESSION: 9,
              Z_DEFAULT_COMPRESSION: -1,
              Z_FILTERED: 1,
              Z_HUFFMAN_ONLY: 2,
              Z_RLE: 3,
              Z_FIXED: 4,
              Z_DEFAULT_STRATEGY: 0,
              Z_BINARY: 0,
              Z_TEXT: 1,
              Z_UNKNOWN: 2,
              Z_DEFLATED: 8
            }
          }, function (t, e) {
            "use strict";
            t.exports = {
              2: "need dictionary",
              1: "stream end",
              0: "",
              "-1": "file error",
              "-2": "stream error",
              "-3": "data error",
              "-4": "insufficient memory",
              "-5": "buffer error",
              "-6": "incompatible version"
            }
          }, function (t, e) {
            "use strict";
            t.exports = function () {
              this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
            }
          }, function (t, e) {
            "use strict";
            t.exports = function () {
              this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
            }
          }])
        }, t.exports = e()
      }
    }
  ]);