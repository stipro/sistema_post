var FileUploadWithPreview = function() {
    "use strict";
    var A, e = (function(A) {
        var e = function(A) {
            var e, t = Object.prototype, g = t.hasOwnProperty, n = "function" == typeof Symbol ? Symbol : {}, i = n.iterator || "@@iterator", B = n.asyncIterator || "@@asyncIterator", E = n.toStringTag || "@@toStringTag";
            function r(A, e, t, g) {
                var n = e && e.prototype instanceof c ? e : c
                  , i = Object.create(n.prototype)
                  , B = new k(g || []);
                return i._invoke = function(A, e, t) {
                    var g = o;
                    return function(n, i) {
                        if (g === Q)
                            throw new Error("Generator is already running");
                        if (g === a) {
                            if ("throw" === n)
                                throw i;
                            return R()
                        }
                        for (t.method = n,
                        t.arg = i; ; ) {
                            var B = t.delegate;
                            if (B) {
                                var E = S(B, t);
                                if (E) {
                                    if (E === s)
                                        continue;
                                    return E
                                }
                            }
                            if ("next" === t.method)
                                t.sent = t._sent = t.arg;
                            else if ("throw" === t.method) {
                                if (g === o)
                                    throw g = a,
                                    t.arg;
                                t.dispatchException(t.arg)
                            } else
                                "return" === t.method && t.abrupt("return", t.arg);
                            g = Q;
                            var r = C(A, e, t);
                            if ("normal" === r.type) {
                                if (g = t.done ? a : I,
                                r.arg === s)
                                    continue;
                                return {
                                    value: r.arg,
                                    done: t.done
                                }
                            }
                            "throw" === r.type && (g = a,
                            t.method = "throw",
                            t.arg = r.arg)
                        }
                    }
                }(A, t, B),
                i
            }
            function C(A, e, t) {
                try {
                    return {
                        type: "normal",
                        arg: A.call(e, t)
                    }
                } catch (A) {
                    return {
                        type: "throw",
                        arg: A
                    }
                }
            }
            A.wrap = r;
            var o = "suspendedStart"
              , I = "suspendedYield"
              , Q = "executing"
              , a = "completed"
              , s = {};
            function c() {}
            function u() {}
            function l() {}
            var h = {};
            h[i] = function() {
                return this
            }
            ;
            var m = Object.getPrototypeOf
              , f = m && m(m(J([])));
            f && f !== t && g.call(f, i) && (h = f);
            var d = l.prototype = c.prototype = Object.create(h);
            function p(A) {
                ["next", "throw", "return"].forEach(function(e) {
                    A[e] = function(A) {
                        return this._invoke(e, A)
                    }
                })
            }
            function v(A) {
                var e;
                this._invoke = function(t, n) {
                    function i() {
                        return new Promise(function(e, i) {
                            !function e(t, n, i, B) {
                                var E = C(A[t], A, n);
                                if ("throw" !== E.type) {
                                    var r = E.arg
                                      , o = r.value;
                                    return o && "object" == typeof o && g.call(o, "__await") ? Promise.resolve(o.__await).then(function(A) {
                                        e("next", A, i, B)
                                    }, function(A) {
                                        e("throw", A, i, B)
                                    }) : Promise.resolve(o).then(function(A) {
                                        r.value = A,
                                        i(r)
                                    }, function(A) {
                                        return e("throw", A, i, B)
                                    })
                                }
                                B(E.arg)
                            }(t, n, e, i)
                        }
                        )
                    }
                    return e = e ? e.then(i, i) : i()
                }
            }
            function S(A, t) {
                var g = A.iterator[t.method];
                if (g === e) {
                    if (t.delegate = null,
                    "throw" === t.method) {
                        if (A.iterator.return && (t.method = "return",
                        t.arg = e,
                        S(A, t),
                        "throw" === t.method))
                            return s;
                        t.method = "throw",
                        t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return s
                }
                var n = C(g, A.iterator, t.arg);
                if ("throw" === n.type)
                    return t.method = "throw",
                    t.arg = n.arg,
                    t.delegate = null,
                    s;
                var i = n.arg;
                return i ? i.done ? (t[A.resultName] = i.value,
                t.next = A.nextLoc,
                "return" !== t.method && (t.method = "next",
                t.arg = e),
                t.delegate = null,
                s) : i : (t.method = "throw",
                t.arg = new TypeError("iterator result is not an object"),
                t.delegate = null,
                s)
            }
            function y(A) {
                var e = {
                    tryLoc: A[0]
                };
                1 in A && (e.catchLoc = A[1]),
                2 in A && (e.finallyLoc = A[2],
                e.afterLoc = A[3]),
                this.tryEntries.push(e)
            }
            function w(A) {
                var e = A.completion || {};
                e.type = "normal",
                delete e.arg,
                A.completion = e
            }
            function k(A) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                A.forEach(y, this),
                this.reset(!0)
            }
            function J(A) {
                if (A) {
                    var t = A[i];
                    if (t)
                        return t.call(A);
                    if ("function" == typeof A.next)
                        return A;
                    if (!isNaN(A.length)) {
                        var n = -1
                          , B = function t() {
                            for (; ++n < A.length; )
                                if (g.call(A, n))
                                    return t.value = A[n],
                                    t.done = !1,
                                    t;
                            return t.value = e,
                            t.done = !0,
                            t
                        };
                        return B.next = B
                    }
                }
                return {
                    next: R
                }
            }
            function R() {
                return {
                    value: e,
                    done: !0
                }
            }
            return u.prototype = d.constructor = l,
            l.constructor = u,
            l[E] = u.displayName = "GeneratorFunction",
            A.isGeneratorFunction = function(A) {
                var e = "function" == typeof A && A.constructor;
                return !!e && (e === u || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            A.mark = function(A) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(A, l) : (A.__proto__ = l,
                E in A || (A[E] = "GeneratorFunction")),
                A.prototype = Object.create(d),
                A
            }
            ,
            A.awrap = function(A) {
                return {
                    __await: A
                }
            }
            ,
            p(v.prototype),
            v.prototype[B] = function() {
                return this
            }
            ,
            A.AsyncIterator = v,
            A.async = function(e, t, g, n) {
                var i = new v(r(e, t, g, n));
                return A.isGeneratorFunction(t) ? i : i.next().then(function(A) {
                    return A.done ? A.value : i.next()
                })
            }
            ,
            p(d),
            d[E] = "Generator",
            d[i] = function() {
                return this
            }
            ,
            d.toString = function() {
                return "[object Generator]"
            }
            ,
            A.keys = function(A) {
                var e = [];
                for (var t in A)
                    e.push(t);
                return e.reverse(),
                function t() {
                    for (; e.length; ) {
                        var g = e.pop();
                        if (g in A)
                            return t.value = g,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            A.values = J,
            k.prototype = {
                constructor: k,
                reset: function(A) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = e,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = e,
                    this.tryEntries.forEach(w),
                    !A)
                        for (var t in this)
                            "t" === t.charAt(0) && g.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = e)
                },
                stop: function() {
                    this.done = !0;
                    var A = this.tryEntries[0].completion;
                    if ("throw" === A.type)
                        throw A.arg;
                    return this.rval
                },
                dispatchException: function(A) {
                    if (this.done)
                        throw A;
                    var t = this;
                    function n(g, n) {
                        return E.type = "throw",
                        E.arg = A,
                        t.next = g,
                        n && (t.method = "next",
                        t.arg = e),
                        !!n
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var B = this.tryEntries[i]
                          , E = B.completion;
                        if ("root" === B.tryLoc)
                            return n("end");
                        if (B.tryLoc <= this.prev) {
                            var r = g.call(B, "catchLoc")
                              , C = g.call(B, "finallyLoc");
                            if (r && C) {
                                if (this.prev < B.catchLoc)
                                    return n(B.catchLoc, !0);
                                if (this.prev < B.finallyLoc)
                                    return n(B.finallyLoc)
                            } else if (r) {
                                if (this.prev < B.catchLoc)
                                    return n(B.catchLoc, !0)
                            } else {
                                if (!C)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < B.finallyLoc)
                                    return n(B.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(A, e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc <= this.prev && g.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var i = n;
                            break
                        }
                    }
                    i && ("break" === A || "continue" === A) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var B = i ? i.completion : {};
                    return B.type = A,
                    B.arg = e,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    s) : this.complete(B)
                },
                complete: function(A, e) {
                    if ("throw" === A.type)
                        throw A.arg;
                    return "break" === A.type || "continue" === A.type ? this.next = A.arg : "return" === A.type ? (this.rval = this.arg = A.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === A.type && e && (this.next = e),
                    s
                },
                finish: function(A) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var t = this.tryEntries[e];
                        if (t.finallyLoc === A)
                            return this.complete(t.completion, t.afterLoc),
                            w(t),
                            s
                    }
                },
                catch: function(A) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var t = this.tryEntries[e];
                        if (t.tryLoc === A) {
                            var g = t.completion;
                            if ("throw" === g.type) {
                                var n = g.arg;
                                w(t)
                            }
                            return n
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(A, t, g) {
                    return this.delegate = {
                        iterator: J(A),
                        resultName: t,
                        nextLoc: g
                    },
                    "next" === this.method && (this.arg = e),
                    s
                }
            },
            A
        }(A.exports);
        try {
            regeneratorRuntime = e
        } catch (A) {
            Function("r", "regeneratorRuntime = r")(e)
        }
    }(A = {
        exports: {}
    }, A.exports),
    A.exports);
    function t(A, e, t, g, n, i, B) {
        try {
            var E = A[i](B)
              , r = E.value
        } catch (A) {
            return void t(A)
        }
        E.done ? e(r) : Promise.resolve(r).then(g, n)
    }
    var g = function(A) {
        return function() {
            var e = this
              , g = arguments;
            return new Promise(function(n, i) {
                var B = A.apply(e, g);
                function E(A) {
                    t(B, n, i, E, r, "next", A)
                }
                function r(A) {
                    t(B, n, i, E, r, "throw", A)
                }
                E(void 0)
            }
            )
        }
    };
    var n = function(A, e) {
        if (!(A instanceof e))
            throw new TypeError("Cannot call a class as a function")
    };
    function i(A, e) {
        for (var t = 0; t < e.length; t++) {
            var g = e[t];
            g.enumerable = g.enumerable || !1,
            g.configurable = !0,
            "value"in g && (g.writable = !0),
            Object.defineProperty(A, g.key, g)
        }
    }
    var B = function(A, e, t) {
        return e && i(A.prototype, e),
        t && i(A, t),
        A
    };
    return Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(A) {
        for (var e = (this.document || this.ownerDocument).querySelectorAll(A), t = e.length; --t >= 0 && e.item(t) !== this; )
            ;
        return t > -1
    }
    ),
    Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
        value: function(A) {
            if (null == this)
                throw new TypeError('"this" is null or not defined');
            var e = Object(this)
              , t = e.length >>> 0;
            if ("function" != typeof A)
                throw new TypeError("predicate must be a function");
            for (var g = arguments[1], n = 0; n < t; ) {
                var i = e[n];
                if (A.call(g, i, n, e))
                    return n;
                n++
            }
            return -1
        },
        configurable: !0,
        writable: !0
    }),
    function() {
        if ("function" == typeof window.CustomEvent)
            return !1;
        function A(A, e) {
            e = e || {
                bubbles: !1,
                cancelable: !1,
                detail: null
            };
            var t = document.createEvent("CustomEvent");
            return t.initCustomEvent(A, e.bubbles, e.cancelable, e.detail),
            t
        }
        A.prototype = window.Event.prototype,
        window.CustomEvent = A
    }(),
    function() {
        function A(e, t) {
            if (n(this, A),
            !e)
                throw new Error("No uploadId found. You must initialize file-upload-with-preview with a unique uploadId.");
            if (this.uploadId = e,
            this.options = t || {},
            this.options.showDeleteButtonOnImages = !this.options.hasOwnProperty("showDeleteButtonOnImages") || this.options.showDeleteButtonOnImages,
            this.options.text = this.options.hasOwnProperty("text") ? this.options.text : {
                chooseFile: "Buscar un archivo"
            },
            this.options.text.chooseFile = this.options.text.hasOwnProperty("chooseFile") ? this.options.text.chooseFile : "Choose file...",
            this.options.text.browse = this.options.text.hasOwnProperty("browse") ? this.options.text.browse : "Buscar",
            this.options.text.selectedCount = this.options.text.hasOwnProperty("selectedCount") ? this.options.text.selectedCount : "files selected",
            this.cachedFileArray = [],
            this.currentFileCount = 0,
            this.el = document.querySelector('.custom-file-container[data-upload-id="'.concat(this.uploadId, '"]')),
            !this.el)
                throw new Error("Could not find a 'custom-file-container' with the id of: ".concat(this.uploadId));
            if (this.input = this.el.querySelector('input[type="file"]'),
            this.inputLabel = this.el.querySelector(".custom-file-container__custom-file__custom-file-control"),
            this.imagePreview = this.el.querySelector(".custom-file-container__image-preview"),
            this.clearButton = this.el.querySelector(".custom-file-container__image-clear"),
            this.inputLabel.innerHTML = this.options.text.chooseFile,
            this.addBrowseButton(this.options.text.browse),
            !(this.el && this.input && this.inputLabel && this.imagePreview && this.clearButton))
                throw new Error("Cannot find all necessary elements. Please make sure you have all the necessary elements in your html for the id: ".concat(this.uploadId));
            this.options.images = this.options.hasOwnProperty("images") ? this.options.images : {},
            this.baseImage = this.options.images.hasOwnProperty("baseImage") ? this.options.images.baseImage : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABIsAAAMdCAIAAACUdWHpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAgAElEQVR4nOzdeZhlVX3v/+/a4xmqqhtoEs2NKDhEJVEDMingvZJEogb15wBqNJo4Rm9+EWMMSBSBbgZBGVQMcwCRGZFRZFAEmaQZtRtohmbs7qquuc60z9nr/rGbCnad6q7hnLPW3vv9eurx8anup86Xrqqz9mcN3+VprQUAAAAAYAHHdAEAAAAAgE1IaAAAAABgCxIaAAAAANiChAYAAAAAtiChAQAAAIAtSGgAAAAAYAsSGgAAAADYgoQGAAAAALYgoQEAAACALUhoAAAAAGALEhoAAAAA2IKEBgAAAAC2IKEBAAAAgC1IaAAAAABgCxIaAAAAANiChAYAAAAAtiChAQAAAIAtSGgAAAAAYAsSGgAAAADYgoQGAAAAALYgoQEAAACALUhoAAAAAGALEhoAAAAA2IKEBgAAAAC2IKEBAAAAgC1IaAAAAABgCxIaAAAAANiChAYAAAAAtiChAQAAAIAtSGgAAAAAYAsSGgAAAADYgoQGAAAAALYgoQEAAACALUhoAAAAAGALEhoAAAAA2IKEBgAAAAC2IKEBAAAAgC1IaAAAAABgCxIaAAAAANiChAYAAAAAtiChAQAAAIAtSGgAAAAAYAsSGgAAAADYgoQGAAAAALYgoQEAAACALUhoAAAAAGALEhoAAAAA2IKEBgAAAAC2IKEBAAAAgC1IaAAAAABgCxIaAAAAANiChAYAAAAAtiChAQAAAIAtSGgAAAAAYAsSGgAAAADYgoQGAAAAALYgoQEAAACALUhoAAAAAGALEhoAAAAA2IKEBgAAAAC2IKEBAAAAgC1IaAAAAABgCxIaAAAAANiChAYAAAAAtiChAQAAAIAtSGgAAAAAYAsSGgAAAADYgoQGAAAAALYgoQEAAACALUhoAAAAAGALEhoAAAAA2IKEBgAAAAC2IKEBAAAAgC1IaAAAAABgCxIaAAAAANiChAYAAAAAtiChAQAAAIAtSGgAAAAAYAsSGgAAAADYwjNdAAADms1mo9GI47jVammtTZcDAAA6z3EcpVQQBJ7nua5ruhzMFQkNyBGtdbVabTQaSikRUS8yXRcAAOgKrXWtVkv+T6FQCMOQcd9+JDQgL2q1Wq1WU0o5DtubAQDIi+lp2Xq93mg0wjAMw9B0UdgSEhqQfVrrSqXSbDbJZgAA5FYS1Wq1WrPZLJfLpsvBrHhcAzJOaz05OdlsNtnVAAAAlFLNZnNycpKD6NYioQEZNzk5Gccx8QwAACSUUq1Wa2pqynQhaI+EBmRZpVIhngEAgM0kIS1pIgLbkNCAzGq1WlEUEc8AAMBMSe+QVqtluhBsjk4hQGZVKpX5xjPHcZJd6UoptqcDAJAWycC9gLG7Wq329fV1oyQsGAkNyKYoiua1v3H6bjT6PQIAkFLJ3sW5R7Xk70dR5Pt+t2vD3JHQgGxqNBpz/8uu67IZEgCAtNNaJzOtcRxP/+9WNZtNEppVmCwHsmmOJ9Acx3Ech3gGAECWJOP7XGZglVJRFPWmKswRCQ3IoFarNZfQlexpZFsjAACZNMeBXms9x9U29AZPZkAGzaUvk1LKdd0eFAMAAEyZ4zYZOjpahYQGZNBczgezdAYAQB7McRmtN8VgLnhEAzJoy++zyeoZZ88AAMgJzpynCwkNyCPepgEAyBUu1EkRvk9AvvAGDQBADjmOw1bGtOBBDciXeV1jDQAAMoMp2rTg+wTkC+/OAADkE13104JnNSBfWEADACCfXNdlojYV+CYBOUIrJwAAcktrzWNAKpDQgBzhEBoAAIDlPNMFAOiKtv2alFJKKVo5AQCQT0qpmUfRtNY8G1iFNTQAAAAAsAUJDQAAAABsQUIDAAAAAFuQ0AAAAADAFnQKAdBhtIsEAGBh6NgBIaEB6JQkmMVxHEURAwwAAPOllPI8L7lUmpE0z0hoADpAKRVFUb1en9nDFwAAzJ3jOEEQBEFASMstEhqAxVJK1ev1er2e3LdmuhwAAFJMa12r1ZrNZqlUIqTlE51CACyKUqpWqyXxzHQtAABkgVKq2WxWKhXThcAMEhqAhUtWzxqNBvEMAIAOSkIaI2w+kdAALJzWmsEDAIBuUEo1Gg02OuYQCQ3AAjFyAADQVVrrKIqYCc0bEhqAhYvjmGEDAIAuSSZDTVeBXiOhAVi4VqtlugQAALKMvSo5RLd9AAs392GDAQYAgGlz34HCRaM5REID0F1aa611cvmm47BuDwDINa11s9ms1+vJSYGtRrXk7zDRmSskNCCD1IvMlpEMJ+Vyua+vz2wlAADYptFojI2N9f5Et/HHA2wV89kAukJrrZRatmwZ8QwAgJmCINh+++2LxSL7GLEZ1tAAdF6yerZs2TK2NQIAsAUDAwMiUq1WWdrCNB6eAHSe1nqbbbYhngEAsFUDAwOO43DSDNN4fgLQYdN9QUwXAgBAOgwMDJDQMI2EBqDDtNblctl0FQAApEYYhuxyxDQSGoDOC8PQdAkAAKRJGIYsoyFBQgPQYcwCAgAwX55HAz9sQkID0GEkNAAA5ov2WphGWAewcG33Y5DQAACYL611HMczcxq3peUQYR3AApHEAADoIAZWJEhoAAAAAGALEhoAAAAA2IKEBgAAAAC2IKEBAAAAgC1IaAAAAABgCxIaAAAAANiChAYAAAAAtiChAQAAAIAtSGgAAAAAYAsSGgAAAADYgoQGAAAAALYgoQEAAACALUhoAAAAAGALEhqABdJamy4BAIDsYGBFwjNdAIDOUy/a7PPJW//Mz3fwVRhdAABYAKWU4zgzx2jHYUEld0hoSD2tdRzHrVbLdCG2UEo1m81GozFbEutUiHIcp9lstv2jLHxHlBLHkXmNi62WaC1kVADoNMdx2qYXIJNIaEgrrXX0It6yX0opVa/Xoyia+Uda61ar1amEppSq1Wpt/6hSqcRx3JFX6akklXme+L44jgwNyZNPytNPy7PPygsvyPi41GpSrUqtJn19Ui5LoSBLl8oOO8gOO8grXiGveY14njSbEkXSakka/wUAwGJaa/9FpmsBuoiEhlSq1+vVajXZYsfq/2am8+rM4BrHcQfTbNuNlFv9I0slwSwMZWpKfvMbufdeue8+GRoS1930kaynKSVKie9LvS7Vqmgta9fKffdJq7VpAe2Nb5RddpFddpE3vlHiWBoNaTZZVQOAjlBKtVqtZrNZq9XCMAyCwHRF6aO1njlRywkF25DQkDJRFFUqFWFb9takLCAZ5HkSBOI4cu+9csMNcuutm9bQPE+WLpUt/DPO/AmMY1m7VtaskR//WJYulXe8Q/72b+WVr5RGQ6KIJTUA6IhkgKvVao1Go1wuM94he0hoSJNGo1Gr1XgvRmcki2aNhlx4oVx6qTQaEgQyMDC/s2cvlayz+b5oLc2mXHed/PSnsvPO8slPypvfTE4DgA5SSsVxPDk5WSqVXNc1XQ7QSSQ0pEaj0Uh2NpouBOnnOBKGEkVy9tnys5+J1hIE0t/fsa+vlLiuFIsShvLkk3LIIbLjjvKpT8luu0m9LlHEvkcAWLzkkWBqaqpcLhPSkCUkNKRDFEXEM3RAcoosDOWWW+TUU6VWkzCU7o3rjiNBIL4vL7wg3/qW/Pmfy1e/KsuWSb0uae91CQB2UEpNTU319/fzkIDMIKEhBbTWxLP50lq3/Rfr9mng2V7XCkleWr9ejj1W1qyRQkHCUER6EZZcV0olWb1a/vEf5eMfl4MO2rTpEQDQCVNTU319faarADqDhIYUaDQaVj/3W2b6Wuq2t152u5fj9Cdt/H4pJTfdJGedJUrJsmULP2+2YKWStFpy2WWycqUcfLAMDPS6AACw28KmEZMzaVEU0YUf2UBCQwrU6/V5Pe5PJ4Tc9uL3fb/b11WLiFIqmbB86WslX79tM1/zHEf+5m9k//1N1yEiIlFEI34AmE0cx/MaR5IrOkloyAYSGmxXq9XmvoCW/DXP86bf1m3MCT3Rg//w9P3bxrHMcsU2AMAq0xOsc49qWmuW0ZANeVxeQLrMfQHNcRzHcVzXTV9yAAAA7TiO43lzWlFQSkWc70UmsIYGq8Vzuzwq2c1o48EnAACwOFprx3Hmsn+ehIZsYA0NVms2m1v9O0k2I54BAJBVc5yKTVqG9KYkoHtIaLDaVt9nk/frfLYDAQAgV9gvg5zguRapx5s1AAA5sdU52VYPrrgEuoyEhhRjLg0AgLxh4wwyjx9xpBjHzwAAyBuGfmQeCQ1pRTwDACCfeABAtpHQAAAAkCYkNGQbCQ1pxbszAAD5xDMAso2EhrTi3RkAgNziMQAZRkJDWtHKCQCA3CKhIcM80wUAW6G1nvlJ3pcBAMgzrfXMJ4S2n0wLrXUcxzMnoOM4NlIPDGIVAgAAADCPCWgkSGgAAAAAYAsSGgAAAADYgoQGAAAAALYgoQEAAACALejlCLTHaV0AABYjvW0VAbNIaMDmlFKtViuKolarleq+vQAA9F4yxel5nu/7rusyjALzRUID/odSSms9NTXVarWEZTQAAOYviWSNRqPRaLiuWywWHcchpwFzxzk0YJNk6WxycrLVaimliGcAACxYMpK2Wq1k3pNRFZg7Ehqwida6UqkIS2cAAHRIMqRWKpU4jk3XAqQGCQ0QEVFKVatV9mAAANBxWutqtcoEKDBHJDRARKTVajWbTQYPAAA6broFl+lCgHQgoQGilGo2m6arAAAgy+I4ZiYUmAsSGiAiwgIaAADdw2QoMHckNEBEhBPMAAB0FUMtMEfchwaIiMRx7Dhbn7CYvsCaniIAgJxL9p5wPw3QcSQ0pFUHM9JcRpckmxWLxWKx6Ps+oxEAAFEU1ev1SqWitWZkBDqFhAarqRfN/Hwvy4jjOAzDpUuXMvwAADDN933f9/v6+qampiYmJnq5nsbaHTKMc2jAVsRxXC6Xt9lmG0YCAADaKpfL2267rXAKAOgEEhqwJVrrQqHQ399vuhAAAKwWBMHSpUtJaMDikdCArVi6dKnpEgAASIEwDMMwJKQBi0RCA2altS6Xy6arAAAgNZYsWUJCAxaJhAbMKmneaLoKAABSw3Ec13VNVwGkGwkNmJXWmmEGAIB5CYKAZTSb6VmYrgv/g4QGzIp4BgDAfDF6AotEQgNmRXt9AADmi9ETWCRurAZEROI4dhwmLAAA6ABGVWAx+OUBAABAJ822jMbyGjAXJDQAAAAAsAUJDQAAAABsQUIDAAAAAFuQ0AAAAADAFiQ0AAAAALAFCQ0AAAAAbEFCAwAAAABbkNAAAAAAwBYkNAAAAACwBQkNAAAAAGxBQgMAAAAAW3imCwAAAAAgcRw7zubLJ1prI8XAIBIaAAAAkAtKKaWU6SqwFexyBAAAQCfNtuzDchAwF6yhwWrqRTM/7zhOp97olVKu67Z9lY58fQAAcsVxHMZQYMFIaLaI4ziKojiOW60WM0wJpVStVms0Gm2zk+u6HXyhqamptq9SKpXiOO7UCxngOOJ54nkyva/9+eelVpOpKZmclDiWUkmKRSkUZLvtpL9/099pNqXZlFZL+FEEgI5yXhQEgelaAFiKhGZevV5vNBrTMYA5p5eaLR21Wq2ZR2kX+UKbfUGtdbJMl77ArJS4rvi+eJ7UanL//XLfffLUU/L00zI4KEqJ40jyY6aUaL3pI46lUJBXvEL+9E9l553lL/9SXvEK0VoaDWk2JdUxFQCs0Wq1ms2miNRqNdd1C4VCByccc6XtAJ2+IRtoh4RmUqPRqNfrcRxzanM2W/iXUUp18I04I1sck2Dm+zI4KNdfL3fcIY8/vmkNLVlG22Yb2cJ/VxzL+vXy/PPym99IFEl/v+y6q7zznbL77hLHm6Iagx8ALM70+BLH8dTUlOM4pVKps9OOAFKNhGZMtVpN9u+lMgnANq4rQSCOIzfcINdfL6tWSRhKEMjSpVuKZJtxnE27IsNw06raXXfJrbdKqST77ScHHCD/639JvS5RRE4DgI5IZhsnJycLhQL7HgEkSGgGaK2npqZarRbZDB2QZDMRue46ueACmZiQMJxfMGsr2SrpuhKG0mrJ9dfLz34mu+0m//AP8upXS63GehoAdEpy7jqO40KhYLoWAOaR0AyoVCrEM3SAUhIE4vvys5/JOedIsylhKOXyYrPZTK4rxaKEoTz0kHz5y7LbbvLlL8uyZVKvS7PZ4dcCgFxSSiU7a8IwNF0LAMPY9Nxr9Xq92WwSz7BYniflsjz3nPzLv8jpp4vrSrksntf5eDbNcSQMpb9fHnxQPv1pOeccCUMJwy6+IgDkiVKqXq9HUWS6EACGsYbWU61Wq1arLSCe5bY3URzHbds5aq3jOO7gfWgzm0Na3cvRdSWO5YQT5MorpVAQ35dqtacFtFpy3nly3XXy7W/Ljjuy4xEA2prviK+UqlQqS5Ys6VI9AFKBhNZTlUplXm/WSTzwPM/zvBz2FFFK+b4/W8P9zrYnLpVKbf95C4WCdQlNKalWZeVK+fM/l112EVNtmrWWKJInnxTfl512oh0/ALxUMoK3Wq3pa07nOIgnZ9I4kAbkGQmtd5ILqef4Bq219n3f8zzf9/MWzF7K9/3evFDKxsL+fnnHO0wX8Ye4zwcAZtFqtZIzDjKHnKaUiqIoZaMSgI4iofVOvV6fy19LNtfRdRcAgGxwXbdUKsVxXK1W59IqTGtdr9dpGQLkFgmtd+aygKa1DsOQmTMAADLGcZxyudxoNLZ6Ij1ZRiOh5ZDjODN/NvK8lyq36OXYI1EUbfU4E/EMAIBsC4KgXC5v9a+1Wq0eFAPATiS0HiGeAQAAeXHT45YfDJRS1vWpAtArJLQema0hYUJr7bou8QwAgDxwXTcMwy1nsC0/OQDIMBKaFRzHKZVKpqsAAAA9EobhZvdwboaEBuQWCc08rXUQBFt+mwYAABlTLBa3sIzGgwGQW/zym5ecQDNdBQAA6CnXdV0ukwQwAwnNMOIZAAC55fs+HUEAbIaEZp7v+6ZLAAAABvAMAGAmEpp57HAAACCflFKcNwOwGd4UDFNKcVU8AAC5RUIDsBneFAwjngEAkGckNACb8UwXkCNtjwKT0AAAyLk4jjd7HtBax3Gc3nMQcRyTPIEF45fHMDo4AQCAmVI9hztb8an+jwJ6hjU0AAAAIBe01jOXB1gwsA1raAAAAABgCxIaAAAAANiChAYAAAAAtuAcWi7EcZx0hTJdCAAAqeE4DjdKA+g9ElqWxXHcaDTq9TqtkwAAWBitte/7xWKRwRRAb5DQMqvRaNRqNeEqTAAAFkEp1Ww2JycnwzAMgsB0OQCyj4SWTdVqNYoiZvsAAFi8ZDyt1Wpa6zAMTZcDIONYXcmgRqNBPAMAoLOUUvV6vdVqmS4EQMaR0DKIg2cAAHSDUqparZquAkDGkdCyJooiLoYHAKBL4jiOosh0FQCyjISWNQwbAAB0FRsd0SXJ9Ugzma4LvUZCy5o4jtniCABAlyStHU1XASDL6OWYNfOdaGFiBgCQc/Od2WToBNBVJLSsieN4qxegJUOLUsp1XW5LAwDkXPwimX9a6x5yIJBbJLQeUS+a+fkeV6K19jyvUCiQzQAAmKa1bjQa9Xpdejs6z/aEACC3SGi5Uy6XXdc1XQUAAHZRSoVhGATB1NQUh7oBGMQqSr4QzwAA2AKlVF9fn+M4bDIEYAoJLS+01uxsBABgLsrlMmtoAEzheT0vXNf1fd90FQAApIBSKggCltEAGEFCy4VkAc10FQAApEYYhqZLAJBTdArJC46fAQAwL67rJi34YaeZi5xaa1Y+kQGsoeUCm+kBAJgv13V53AfQeyS0XCChAQAwX4yeAIwgoQEAAACALTiHljVtd2AzCwgAwHzNdqiJrY8Auoo1NAAAgHlg3hNAV5HQAAAAAMAWJDQAAAAAsAUJDQAAAABsQUIDAAAAAFuQ0AAAAADAFiQ0AAAAALAFCQ0AAAAAbEFCAwAAAABbkNAAAAAAwBYkNAAAAACwBQkNAAAAAGzhmS4AAAAA2aG1juPYcTZfBtBaG6kHSB0SGgAAwDyQNLZKKTXHT3b8VYAMIKFljVKKNywAABZPvWjm543UAyAnOIcGAAAAALZgDQ1pU6vJE0/IE0/Is8/K1JTUajI2JkpJsSiFgpTLsmyZ7LST7Lij/NEfma4VAAAAmB8SWo/Eccy29YV77jm56y6580657z6JIvE8cV1xHHEcUUqS3SZab/qIY2m1pNWSZlN22kn22kv23FPe/GbT/w0AALShtZ75hMAzA5BnJDRYbHxcrrxSLr9cxsYkCMT3pa9PZvSGmpXWMjIiV14pl1wirZbsvrsccIC8/e3drBgAgM7gtBuQWyQ0WOn22+XMM+XJJ6VQkCCQpUtlAQOVUuJ54nlSLEocy+9+JytXShjKBz4gn/70PJIeAABAVsRxvFn+Z83WNiQ0WObGG+XMM2VoSAoF2WabhQSzthxHwlDCUJpNufRSuegief/75TOfkSDozNcHAABIA5Zn7ccyAqzx1FPyqU/JccfJ1JT090sQdCyevZTnSakkpZJcdZX83d/JRRd1/iUAAACAhSKhwQJayzHHyD/9kwwNSV+f+H5XstlLua6USlIoyFlnySc+IWvWdPflAAAAgLkhocG0J56QD39YfvUrGRiQMOx6Nnspz5NyWUZH5QtfkNNP793rAgAAALMgocGoCy+Uz39e6nUpFs207lBKgkD6+uTSS+VLX5JazUANAAAAnBDDi0hoMOeoo+Sss6RU6taRs7lzXSmX5amn5OMflw0bTFYCAABySWudXJ87k+nS0GskNBjyla/IbbdJuSyeHQ1FlZIwlHpdPv1pefRR09UAAJBibUMFSQOYIxIaTPjMZ2T1amM7G2eThDTHkX/5F3n4YdPVAACQSkopx3HUDI5Vgz5gMX5V0HP/+q/y3HPWxbNpQSBBIF/7mjz9tOlSAAAAkDtWPiIjww47TFavlkLB8MGzLfN98Tz50pdkcNB0KQAAAMgXEhp66NRT5Z577F09e6kgEK3ly182XQcAAADyxfoHZWTGvffKZZelI54lgkDGx+Www0zXAQAAgBxJybMy0q5SkW99S0olcV3TpcyZUlIoyN13y1VXmS4FAAAAeUFCQ08ccohoLb5vuo55chwpFuWkk2R01HQpAAAAyAUSGrrv17+W3/9egsB0HQvieRKG8u1vm64DAAAAuUBCQ/edcEKajp/NFATy8MNyxx2m6wAAAFgsrg63X2ofmpEWZ5whtZp4nuk6FiHZ63j88abrAAAAWKy294krm69Byh8SGrrs0kttv/1sLjxPJibkhhtM1wEAAICMI6FljW7HWDXnnSciaerfOJukr+OZZ5quAwDQO22HVK11HMemSwOQZSQ0dNMFF0gYmi6iQzxPhofltttM1wEAMIz9YAC6ioSGrrn1Vmm10n0C7aWSZbTLLjNdBwAAELFt39CiKaU4IYYECQ1dc+WV2VlAS3iePPCAVKum6wAAABmU6oSJDiKhoTuiSFauzM4CWsJxJAjk6qtN1wEAAIDMIqGhO264QXw/xXegzSYI5Oc/N10EAAAAMitzD9CwxF13SRCYLqILPE/WrDFdBAAAADKLhIbuuOeerG1xTCglvi8rV5quAwAAYN5mu0OCI3BWIaGhC154Qer1LFyD1pbvy113mS4CAABgfmgLmRYkNHTB6tXZXEBLeJ6sXm26CAAAkDUkKCSy+xgNg556KrMLaCLiuvLUU6aLAAAAmaK1juPYmdFljf2HOcQaGrrgySeznNCUktFR00UAAAAgm0ho6IK1azOe0FxXnn/edB0AAADIIBIaumBsLIM3ob2UUjI+broIAABslOzWm9kqMI5j06UB6ZDpx2iYUqlIto+6Oo5MTZkuAgAAS7XteEEbDGCOSGjogno94wlNKRIaAABIo7YrnKaLwh8goaEL8vB7Xq2argAAAGDeWMy0H9320QV5+M0vFk1XAAAAMqXtclYHF7iSL6W1JqRZjoSGLghD0TrLOU1rKZdNFwEAADA/SqmZV67BNnyH0AXlcsY3OsYxCQ0AAADdQEJDFyxZItnuqBvHsmSJ6SIAAECmqFmYrgu9RkJDF+ywg7RapovoGq0ljuXlLzddBwAAADKIhIYu2GmnjCe0pUtNFwEAAIBsolMIuuBVr8pyQmu1ZKedTBcBAAAwb1rrOI432znJfWi2IaH1Ttuf/mzuLX7DGySKTBfRNVEkr3+96SIAABnR7QbrmaSUZPH5qes/DMljZzYfPrOFXY7ogj/+YymVMruMFkWy556miwAAIL9cR1Ua2uMxFhnFjza6Y7fdpNk0XUQXaC3NprzlLabrAAAgvzxHLrq7FmkJPZaDkEEkNHTHHntIo2G6iC5oNuV1rzNdBAAAuea4MlqN/7/vj4aeBIQ0ZA4JDd2x//7SbGbwVrRGQ/bf33QRAADknCoG6p4nG588c6zoK981XQ7QUSQ0dIdS8ta3Zm2jYxxLvS7vfa/pOgAAyDtHSSlQN/6+8W+XTJQKjkdIQ4aQ0NA1BxwgtZrpIjqq2ZRddpEgMF0HAAAQ11HlUJ33m+r3rp8shw6NQ5AZ/Cyja/beW8IwO8toWkutJh/8oOk6AADAJq4jfaFace3UWb+ulEPlpvzBVs+is68Sx3G3XwKLlPIfZFjuYx+Tet10ER3SbMq228rb3ma6DgAA8D88V/oLzqGXT1z/UKMUKIdnW6QfP8Xopo99TJTKwjJasoD2uc+ZrgMAAGzOd6Xoq0+dPXrnE5Hv09oRqUdCQ5d95CNSr0vaV8+jSJYskf32M10HAABoI/BUwVcfO33k8XUt07UsnJpFZ1/FcZyZL+Gw+GgTvhnosk9/Wvr60r2MFsdSq8nXv266DgAAMKvQU6LV//nOxrGq6VKAxSGhofu++lWpVlN8N1qjIW96k7z1rabrAAAAW1LwVS3Suy8fMl0IsCgkNHTfXnvJX/xFWvc6NpvSbMrhh5uuAwAAbIUSKTLJBzcAACAASURBVPhq3Vi86xGENKQYCQ09ceyxEgQSRabrmKc4lkpFvvIV6e83XQoAANi65Cbrxza09j9xxHQt89abbvuwHwkNPeH7sny5VKvSSs/53aR/4157yf77my4FAADMlVJSDtVtjzUOOm3UdC3W0Vq3vQ+tlaIntBwgoWWNvbMvO+8sBx4olUo6DqRpLY2GbLONHHGE6VIAAMa0HVLjVAxk+eYo6QvVVffX/u2SCdO1WKfjzSHRcSS0HpmtfWq+fkk++1nZd990dA2JIvE8OfVU03UAADKOx4MucR3pKzg/uHnq5JumTNcCzA8JDb112GHyhjdIrWZ115BGQ1ot+f73ZckS06UAAIAF8hzpLzhfu2TivDtrpmsB5oGEhp773vfkla+0dyWt0ZAokhNOkD/9U9OlAACARfFdGSiqz/336C2rG6ZrAeaKhAYTfvQjectbrAtpWku9LkrJaafJG95guhoAANABgavKoXrPySP3P5O2ntLIKxIaDDn6aNl3X5mclGbTdCkiIhLHUqtJoSBnnik77GC6GgAA0DGhp4q+7Hf88HMjNk0N/6HZmr1Z0e8NvUVCgzmHHipf/apUq9JoGD6W1mpJpSJvfKNcdJFsv73JSgAAQBeEvtJadjtqaKya98DTttu+6aLwB0hoMGr//eW006RQMHZVWrKzcWJCPvhBOf54cV0DNQAAgIWIRfSMj/aUSCFQ1UjvvnzIzjxC329MI6HBtFe9Si65RP7qr2RyUur1ni6mNZsyNSXbby9nnSWf+1zvXhcAAPScEin6at1YvPexQ6ZrAbaEhAY7fPWrctZZ8rKXycRELzY9Jtsa63X59Kfl7LPlla/s7ssBAAALKCWlQD30bOtdJ46YrsUMpZTjOCzTWY6EBmvssIOccYZ885uyzTbdymlab1o3q9Xkgx+Ua6+Vgw7q8EsAAACLOUrKobr9scanzh4zXYsZnDqzn2e6AOAP7bOP7LOP3H23nH22rF4tYShhKK4ri5zdiWOJIqnVpFyWj39cPvGJDpULAABSxlHSF6qL76ku61PHf3jAdDnA5khosNLuu8vuu8v4uFx3nfz0p7JunQSBBIF4njhzXvhNVsyiSKJIRORtb5P3vU923bV7VQMAgFRwHekvOD+4ufLKbd3/u1/ZdDkiL+m2P/PzRuqBQSQ0WGxgQA48UA48UIaG5K675M475Z57pFYT1930odSmj4TWEscSx9JqSaslWsvrXy977il77MEN1AAA9Ewcx86MGVXbkobnSH/B+dqlEy9f6n5o14LpcnqHU2f2I6EhDZYtk/e8R97zHhGRZlPWrpUnnpDnn5eJCZmc3NTzY8kSKZWkXJZly2THHeVVr5KlS03XDQAA7OW70h+qT5wxum1523e+PjBdTi9oreM43iyk2RaeQUJD2nievPrV8upXm64DAACkXuCpssj7Thm567Dt3vhyHoxhBXo5Zg13HQIA0Clth9SZ+/eQaqGnAk/2OWbjc6Ox6VoAERIaAAAAci70lday14qhqQb7/WAeCQ0AAAC5pkQKvhqv6V2+PcSZLBhHQgMAAEDeKSUlX60bj/c+dsh0Lcg7EhoAAAAgSkkpUA892/rbE0dM14JcI6EBAAAAIiKOknKofv1Y4x/PHuvxS8/W7I1+bzlEQgMAAAA2cZT0herCe6pfu2TcdC1doWeIY5pY2oWEBgAAAPwP15H+gvP9myun3DxlupZeYJnONiQ0AAAApI9STvf2BHqO9Becr10ycem9tY58QZtp+ldahoQGAAAAbM53pT9Unzhj9ObVDdO1dFLbS9i5h90qfDMAAACANgJPlUP1/u+PrFrX7PZrzTweNq3bLw3bkNAAAACA9kJP+a7sffTG50Zpp4Ee8UwXAACALTZMxL9+rP7gM637no7WrG8OTuqhyZa8OH/tuPKq7bxXbufsuJ23+07+3q8Nd/4T12i9gKUcx5l5Hiy9a0Ghr2oNvdeKodVHbV8KaKqBriOh9U7bN6b0vlsBQGbc+PvGxb+tXv1Aff14HHjiu8p3xXWU58rLl7rTj2Nay2RdP/hsc+Xa5oX3VBstibV+x+uCA3cvfnS34kCR5zYsRNttbDRAt4oSKfhqvKZ3OXJo1RHbp73xIZ0b7UdCAwDk1NqN8Ym/mDrnN5VKQxd9FXrqjwecLTy6KCWeEs9RoSciSkRiLQ8807zryYkvnjf+ttf4h/xt33veFPasfgA9o5SUfPXCaLzPscO3/ce2pstZuCT8bxbSmA6wDefQAAC58+j61vt/MLLTIRvOur0SuGq7PqccKs+V+c4sO0oKvlpaVH884Kx6vvmhU0dedvCG//pVpTtVAzBJKSkF6oFnowNOHjFdCzKOhAYAyJGpun7/D0Z2/s/BXz3S2L7P6UuC2aK/bBLVtik7rVgffNH4K/99w2Urqx0oF4BNHCXlQN38SOMz54yZrgVZRkIDAOTFKTdO/fHBG365urFdn1MKlNvpMVCJBJ5aUnSmGvrjp4/td/zGiRqHjYFMcR3pC9UFd1e/ccVkx7843faRIKEBALKvFum3HTP89csnSoEqh53PZi+llISe2qbk3Lu2+Sdf3XDuHSymAV0Si+h2H93lOtIfOifcMPn9W9jSjK4goQEAMu7uJ6Id/n3w989FS4qO36v2+I6ScqgKvnzu3LF/PJsNUUCmeK4MFJx/u3i8s/uZ1Sw6+BJIBRIaACDLvn9LZd/jNrZiXQqV0/PnnMBTS4vOxb+t7X3McIudSkCG+K70h+rvTx/75SMN07Uga0hoAIDM+uJ5Y1+7eHyg6BR8Y7PQriP9BfXQc9FffGuwRUdr5EMcx3k4TxV4qhyqA04ZWbWuabqWRWGZzjYkNABANr3re8Pn3Vkb6OHOxtkk/d+eH4nfdPhg1DJcDIAOCj3lu7L30RufG03NBMzM5BzHcavFe5NFSGgAgKzZMB6/7tDBOx+P+gvKs2OgS25Sem4k3vXIIdO1AOik0Fday14rhiqNrC0SwhQ7Bi50Dn1aAeTcvU9Hb/jPwcHJuGzi4NkWKCXFQK0dau199LDpWjBXbYfUOE7Nagl6QIkUfDVe07scObTIB64ePMW17UTiOCQCu/D9AABkx8W/re1z9EYRKQY2HqxwlJRC9cBz0btPGjFdC5ABtvySKyUlX70wGu9zLPMv6AASGgAgIw65bPyTZ4yWQ2WwL8hWOUr6AnXro41/OocW/MBiaNGxaL35hyHJTuYHno32P5H5FywWCQ0AkAUf+OHIyTdVlpScwLM2nW3iONIXqp/cXf33S8dN1wJ0hY1L2N3nKOkL1W2PNbgCEYtEQgMApNtkTb/p8KGbft/oLziW9AXZKteR/oJz8k2VH/2yYroWoMOSo3pdP08lSinHtsudk5B24T3Vr13C/AsWLiVDGQAA7Ty6vvnawwafHm6VQ+WmakzzHBkoOP960fgVK+umawFSysZGaMn8yyk3V354C/MvWKBUjWYAALzE5Svrb/n2xkakS4FdbRvnyHelP1QfO33kV482TNcCdEzSG7Btz0DTpfVIMv9y8MXjl62smq6lDdqT2o+EBgBIpe/+Yuqjp42UA7G5L8hWBZ4qh+rvTh55ZF3TdC1Ax3DNTzL/8venj/3ykbnOv8zWar8H1yblJzynBQkNAJA+B/5o9LArJpYUU9AXZKtCT/mu7HX0xhdGmcYG5sXqX/9k/uWAU0ZWMf+CeSKhAQDSpNmSPZcPXftwfaDg+K7pajok9JVo2fPooVqU95UHYM60SCyiN/uIbVq+S+Zf3j63+Ze2+0JztTsU00hoAIDUeHxDc8evb1i9rtWXtr4gW6ZECr4aq+i/PGLIdC1ABxgMFbalmWT+ZY8VQ5WGRdERlsvQ+AYAyLQbVzXecsTGqdT2Bdmy5Lrb50fjvY8dNl0LekqJZOznuTfd9tMimX8Zr+ldjmT+BXNFQgMApMCpv6q856Th0JOin9ktP0lIe+CZ6D0njZiuBb3zyPo48DI46YBpSknJVy+Mxnsfw/wL5oSEBgCw3Wf/e+zgC8eXFJ0w/X1BtsxRUg7Urx5tfOacMdO1oEfOv6PywDPNYpDZqQfI9PzLs9G7mX/BHJDQAAD2imN5+7HDP7m7tqSYnb4gW+Y60heqC+6ufv3ScdO1oBd8V73vlOFnR5oZXh+GiDhK+gJ166ONf5pl/qU3rfbbfv1kV2oHXwWLREIDAFhq3Vj8mkMHH3426i9kqi/IVrmO9Beck26qnH5rxXQt6LrQk6gl7z5pZHiqVfDIaFnmONIXqp/cXf135l+wRXka8QAA6XH3E9HO3xwcrcTlLPYF2SrPkYGC839/Mn75yrrpWtBlSoW+mqjK+38w1mzp0M/fj3ueJPMvJ99UOfWXxuZfZnbzdxwSgV34fgAArHPO7ZV9jtuolBRyfDjHd6U/VB8/feTWRxuma0F3KSVFXz2zsXXAD0YdRzJ/3rIj9Cwb9kzXtXXJ/MtXLhq/bGXVdC2wFAkNAGCXf/7x2BfO39QXJOcPqoGnyqF678kjq9c1TdeC7lJKioFa9VzzE2eMFgIVpPzUZQ/OU6VaMv/y96eP/fIR5l/QBgkNAGCRv/neyLm/yVFfkK0KPeW78rajN64bi03Xgu5ylJQC9atHoi+cN1YKHd/N+QRFxiXzLwecMrKK+RfMQEIDAFhhvKZ3/ubgnY83+gvKY3R6idBXomWPFUPViCWIjHMcKQfqpyvr375qQqU5oc086ZTo5Ev05FW6Kpl/efvRG18YjSVzF5djMRgDAQDmrXw62vE/Njw/GveFeewLsmVKpOCrsYreaznX3Waf60g5VD+4qfKjWyZN14Kum55/qUVSDFTb7aFx3OH18x68BBaJhAYAMOzi39b2PmajaOHS3tkkh5SeHGq+/VhCWvZ5jvQXnK9ePHHlfXTyzLhk/mW8pt98xNBkXTxDu7t557UNCQ0AYNKhl41/4ozRcqAKPs8IW+IoKYXqwaejD/5wxHQt6Drflf7QOej0kbufjEzXgu5SSkq+enqodfwvosBzaIUPIaEBAAz64A9HTrqpsrTkBLQXnwNHSTlU1/+u8dn/HjNdC7ou8KQUOH91wvBj6+kkkXFKie8px3U4gosEPwgAAAMma/rNhw/94veN/gIPJfPgOtIfqh/fWT3iKg4pZZx6sZPE3scMb5xM2TGhXnXb17N8pA9zVHgpRkUAQK89ur75Z4cNrh1ulUPlMhDNk+tIf8FZcc3kGb+umK4F3aVEQl81WnrXI4dqzVQGDwALwMAIAOipy1fW3/LtjbVIlwLaNi6Q58pA0fnSBeNX0Eki65RI0VejFb3XCprEZJ/WMY0WISQ0AEAvffeGqY+eNlIOhL4gi+S7MhCqj58+cvcTdJLIuKST5+MbmnsfQ0jLIxot5hAJDQDQIwf91+hhV0wsKdIXpDMCT5UCtd93hx+hk0TWJU1iHngm+tCpo6ZrQbq1PR/IMp1tSGgAgK5rtmSvFUPXPFgfKDq+oQt/Min0VODKvinsJIH5SkLadQ/VPncunTyBjCOhAQC664nB5qu+vmHVC62+An1BOi/pJLELnSRyIGkSc/4d1RXXWN3Jc7ZGjl3o5QhkE0MlAKCLblrV+Mtvb6zQF6Rrkk4SYxW951EcUsq+JKQdcdXkmXTyxILMvBE7uRSb025WIaEBALrl1F9V3nPSsO9J0Wf076Kkk8STQ829jyWkZV/SyfOfLxj/2f057+SpRbf7SDczb5Qsb9qGhNYjcdymfSor/gAy7HPnjh184fhA0QnpC9J9jpJSqB54OvrgD0dM14L5iud77XLSyfOg00buftLGTp5tV2kSpkuzWtKzgzYeEBIaAKDjYi1vP2b4grtqS+gL0kNJJ4nrH27QSSIPkk6ef3XC8KN08swBwm3ekNAAAJ20fix+3aGDDz8X9dMXpOdcR/oL6vw7qkddbXUnCXRE6CnflXccNzw8lc/9ODlapuv2lqus/rulF4MnAKBj7n4yeuM3BzdOxWX6ghiSdJI46urJM+gkkQOhr2qR3uWIQTp5ZkDSs6NtG4/OvlDbjZScu7EKCQ0A0Bnn3F7Z59iNSqQYMCFrUtJJ4ksXjF95X847SWRf0slztKL3WmFRkxi67S8C/0QQIaEBADri3y6Z+MJ540uKTuiTzsxLOkl89HRLO0mgg5JOno9vaO57nEUhDcBikNCyhlkrAL33rhNHTr1lakmJviAWme4k8RidJBYqLWtBSZOY+9ZGHzp11HQtWCQmuCBCQgMALMZ4Tf/5NwfvWNMYKDoeQ4plkk4Sex8zvHGSbt0Zl4S06x6qfT5HnTzbXlFgV3ieF7rtYxrDKQBggVY+He34HxueG437QvqCWCr0VaOldz1yiE4SmZc0iTn3juox102ZrgUdxtHevCGhAQAW4qJ7ansfs1E0fUGsZmcnCXRJEtIOv3LirNvo5AmkGAkNADBvy6+e/OSZo+VAFegLYr3pThJ7H0NIyz7flYGi88Xzx392P508gbQioQEA5udDp44uv3ZyadEJPNJZOiSHlB54hk4SueC7MlBQB502co9lnTw5T2WDVDS/AQkNADBXkzX95sOHbvhdfaDgeLRtTJXpThKfy1EnifxKOnnud8Lwmg0WdfJkPzQwRyQ0AMCcPLa++WeHDa4dbpVD5TJ6pFBySOn8O6orrpk0XQu6LvSU58o+xw4PT9myPMJCjSVUO6aLwh9gjAUAbN3PH67/5REba5EuBbRtTLEkpB1x1eSZv6aTRPYVfFWL9K5HDtZ728mzbQBQSjkOj51bwRZEJPhVAQBsxQk3TP3dKSNFX+gLkgGeKwNF558voJNE9iWdPEem9F4rNpqupTu0bv8BpBwJDQCwJQf91+h/XjGxtERfkOzwXRkIbewkkV/tMkVHbl9OOnmu2dDa9zg6eabAbMuPputCr5HQeoffOgDp0oplrxVD1zxYHyg6Pn1BsmW6k8Sj6y3qJJFTylFOuz2BqjMPaUmTmPvWRh/OVidPxZMVsouEBgBo4/nR+LWHbvj9C62+An1Bsin0lO/KO46zqJMEuiQJadc+VPv/fzLRg5fjMFXqEGttw6gLANjczasbr//G4GhFl+kLkmmhr2qR3uWIXneSQO+5jvQVnNNunTrm+inTtcCwmeE5jmMitFVIaACAP3DqLyvvPnE48KUYMK+acUknidGK3nMFh5Syz3Okv+B866cT591ZM10LgC0hoWUNe7IBLMbnzx07+KLxgaIT0hckH5JOEo9vaNJJYqbZhtT0jqq+KwNF9dlzRn/xOzp52ogNokiQ0AAAm/zV8cM/vqu2hL4gOTPdSeJD2eokgbYCV/UV1Pt+MHr/M3TyBCxFQgMAyPqx+LWHDt6zNuqnL0guJSHtuodqnz93zHQt6LrQU0Vf9j1m+LENae/kqdt9AKnHOAwAeXfPk9Ebvzk4NBnTFyTPXEf6C865d1SPuY5OEtlX8JXnyf8+bni8SqQBrENCA4BcO/v2yr7HbVRCXxBsCmmHXzlx1m0V07Wg6wq+qjT0W48ciuPOf3HOUwGLQULrHd6tANjma5dMfPG88f6CE/qkM4hs6iThfPH88avup5NEz8RGduslnTzXT8S7rxjq9msBmBcSGgDk1LtOHPnhLVNLSvQFwR/wXRkoqANPG7nnSTpJZJxSUgrUo+ta7/oenTzzggWDVCChAUDuTNT0X3xr8I41jYGi4zEOYIbAU6VA7XfC8JrUd5LAViRNYm5fE33kR53s5JmxWwp6hviEBCNz1vC7DWDL7n8m2uk/Njw7EveF9AXBrEJPea7sc+zw8FR+R5DZhtSMjaqOkr5QXfNg7V9/MmG6FnRd9m75yyQSGgDkyCX31vY6emOs6QuCrSv4qhbpXY8crDczFUgwk+tIX8H5r1unvvNzOnmaRHZCgoQGAHmx/OrJvz99tC9QBfqCYA6SThIjU3qvFRtN14Ku8xzpLziHXTFx1u108gQMI6EBQC58+NTR5ddOLi06gUc6w1wpJcVArdnQ2vc4Oklkn+/KkqLzz+eN37SqscgvlYfdoUD3kNAAIOOmGvot3x66/nf1gYLj0bYR85R0krhvbfThUzvZSQJ28l3pK6i/O2Xkt09Z38lTtd8TaLosoAM80wXkRRzHbaeO4m7cE4k8WbWu+cSG1tqNrbUbm42mUkpGKvE2ZfWyJe7L+t1XbOfssaNfChix8mv1uub/+c5wtaHpC4IFS0LatQ/V/vUnEyd+tN90OZmjRWItmz8kaBEzTwihp7TWf/Pd4fsP336HbZnKBwwgofXIbJM6TPZgAa64r379w7VfP9pYta7pKeW54jrKUaKUJD9PWiSOpaV1K5aoJeVAvfVV3gFvKXxwl+IO2zHc5sjV99cPPH204Ekp5L0GizLdSeLl2zhf379supyMefG9e+bnDSn4qhrpPVYM/f6I7bcp8ebRO233gnZ8d2jbl2APqlVIaD0y2899N37revC7DSMu+W317NtrN/6u5roq9FTgqZcPuFt87t70Z61YHny2ec9Tk1+7ZGJZv/OZfUpf+evSdmWiWsYtv2byiKsmBwqKg2foiKSTxDd/OvEnS91P7FkwXU6PtB1AOz2qapnlGaGjrzI/BV9VG3qPo4ZWH7W9w3AB9BYJrUccx2m7PdrhbQ9b04rlmOsmT/xFZbIelwK1bZ/rzvOnxnXEdVTBl4GCasZy8o1TR18zue/r/KPe3//21wbdqRqGfey00Z/eX1ta5OAZOsl3ZaCoPnvO6Mv6t/nrnUPT5WSEUpI8I/zBJ8VsQNvUyXP9RPzW5UMr/3OZyVKA/CEeAFZbfs1k35fWH3PtlFKyTdkp+Gq+8eyllBLflf6C+qMB54Fnm+88Yfhtxwzf+7T1x8ExH1FL9lw+dNUD9AVBVwSu6iuo9/1g9P5neOvoGDs3uiglpUCtWd961/es7OSpRbRu8wGkHwkta7jrMDMu/m31ZQdvOPraqf6CGigq3+3kiQRHSdFX25ad1S9Eey3feNB/jcYMapmwdmP86kM2rF7X6issKswDWxB6qujLO78z/PRw9ptd5XxUTZrE3L4m+siP5tHJc7ZW+3RHA+aIARywjhb5wA9HPnnGWDPWSTbrkumcdt3D9e2/sv6S31a79UroiZtWNd70rcHJui4FtG1EdxV8JUr2Wj40VmV2J+McJX2huubB2sEXTSzyS+Uq3AKLQUID7HL3k9HLDt5w86rG0pITer0YylxHyqFyRD5xxtjnzh3r/guiK06+aerdJw37nhR9HoHQCwVfVSK925FDrItkXtLJ89RfTp1ww9Rivg4NA4E5IqH1Dsv92Krz7qzte9zGZkuXw55uUVMigaeWlpyf3FXbfflQNWIETZnP/vfY1y+dWFJ0Qto2olemO0nsvmLIdC0ZoNt9WCTp5Hno5RNn317Z6l+ebWso3dG2arYNop19iQ5+NXQJvyomdWOiuwe/2+iSQy4b/+w5o/0FVfDNLIG4jvQV1KPrWq85ZHDtRqYP0kFrecdxwz+5u7ak6HRvQyzQVtJJ4tF1tnaS6ISejKqzveXbNeHiu7Kk6HzxvPGbVzVM1wJkHAkNsMK3rpw88cbKkpITuCaHZEdJKVDVSL/58ME7HmcMtt36ifh13xi8/5mon74gMGRhnSSQUr4rfQX13lNGaALcJTnvTINpDOmAecuvmTzu+smBguNZ8BuplBR95bnyzuOHL7y7ZroczOretdEbDxscmozL9AWBUR3sJAH7JZ08//r44WdG2GqRVoRA+1nwPAjk2w9/WTnyqknbrq4KPdUXqn84a/Q7P1/UuXB0yVm3VfY+ZqOIFAMGVpg33UmCd4w8SDp57n7U0Gil/W7PXnXbb3t4jyvRkAUkNMCkG1c1Dr5wfKBoVzxLBJ5aUnS++dOJz59Pg0e7fP2yiX8+f7y/4Jg6sgjMlHSSOOyKOXWSQNoVfFWL9J4rhuYVuVirAeaIhAYYs2pd8/3fH+krdPHGs0VKzoX/+I7au08aMV0LNtn/xJHv3zS1pERfEFhnupPEjXSSyLqkk+cLY/Fbj6STJ9B5JDTAjImq3u/44dATy9uju470h+q2xxq7HDkUtUxXk28TVf0X3xr8zZrGQNGKI4vATEkniQPoJDFPVg8Ds0g6ea5Z33rX98xM4SmlnMydpzLVkTvt/27ZwyDfI7NtyO74b11Pdn6jA3ZbMVRt6NBPwXui40g5VE9saL3m0A3Pj/KzZMaqda3XfmPw2ZG4L6QvCKw23Uni6eHUv13M9rjc2bH7xceBXj+UL96LnTwbBxrq5JmCf6P56NlbezxDq8UUrF1IaCb1bMaCqRHbvOO44RdG42J6DhElXfgnqvpNhw/+7jnex3vt0nuruxwxGLU0fUGQCkkniT2WD43M0kkCm0vt73XSyfPqB2tfuZhOnkDHkNBM6tkMWSqm4vLjY6eNrlwbldL2qK2UFAKltey2fOj6h+umy8mR5VdPfvz0sb7A2FXmwAIknST2WjHEHo45SfMonXTy/NEtU9+9gU6eQGeQ0Hpn5lZpx3E6/pDe9o4Lx+EbbYtDLx//6f21cjo3qimRgq/Kgbz/ByPHMxL3xIdPHV1+7eTSohPYfV4R2Mz/dJJYnuJOErNdH9zZsfvFx4EUn6dKOnkecvnEOb+piYjrcOYCWBQe3IHeOePXle/eUOkvOG6af/MCTw0UnP+8YuKQy9nT0kVRS/ZYPnT97+q23ZUHzNFLOkkMm67FdmleQtvEd2VJUX3h3NFbVjd7dFxW6/YfQPql+TkRSJWbVze+/OPxbHTh810ZKDon3Tj10dPMnA7PvDUbmq/6+oZH1rX6QpXqPI+ce7GTRPQRQ50k0Eu+q/oK6j0nD9/1lAQeO3qAheNXBeiFp4aaH7D76rP58hwZKDhXP1Df51hmxzvsF7+r73LExmqkS0Eqd8MCL5V0krjmwdrBF7Hqnn2h6qTb1QAAIABJREFUp5TSNz4Ss/K/AO06eqamsSc6i4SWNez8ttBkTb/96GHXtf3qs/lyHekrqAefjf7sG4NjVcaPzjjhhqn3fn8k8KTop+scCjCrpJPEqb+cOiFt51d5XF4AVynXEZf3L2ARSGi90zY49eaNngc9s/ZYMVSJdCENV5/Nl6OkHKgNE/HO3xxcu5GJgMX6zDljh10xsaTgZCzMA0kniUMvnzj79orpWiwUi+g2H5o31XxpewF3x9vGzL5Qx9SDRUhoJhGc8uB/f2f42eE0XX02X0pJ0VeVhn7z4YN3PN4wXU5atWJ5+9HDF95TW1J0MrMVFngp35UlReeL543fvIo3CgDYEhIa0EV/f8bovU9FpTDjYTwJaZ4r7zx++KJ7aqbLSZ8XRuPXHTr48PNRf4G+IMgy35W+gnrvKSP3Ph2ZrgXdFes2h6o4c2GJHqzUYZF4FgC65bArJi9fmdarzxYg9FRfqP7hzNFDLhs3XUua3Ly68WffGBypxGX6giAHQk8Vffnr44efGeFhHYvFWyayioQGdMVFd9e+8/PJ/jDdV5/NV+CpJSXnpJsqXzh/zHQt6XDObyrvPnE48KUYMH2JvCj4SpTsftTQaIVzL1g4LRK3uxDNdF1AB+Tp4RHolTseb3zq7NGBgsphu+GkC//5d9TefdKI6Vps94Xz/l979x4nSVnfe/x5qrqq+jLdM+vO7rIrJnpeHDzRV44Rg0BAIBpR8BLjSYyaeIknMZicvE5OjngnUYHlqiwivozgARETBYGjcrxyUQFR8B4RZZGrsOxOz/RMz/S96nnOH727znb33Lurnqr6vF/jP8048+xMT9Xzred5fr+50z9dLeWoC4LUyTqy2dHH7iyzjgYcRLV9HERCSxq2fUfukWl16q5KwZNuWqfdtiWKnrxjd/uos8qdIOrRmOolF89c813qgiClpBA5R+6ZU79/VjnqsayAGbOxpFyq+CGTW8Qeb+LkY+9UmGptffx5ZctKWuuztbIsUfDkg/uCI96z74lZnhEcYm9VHfmeqe/+qlPMygzXYKSVlCLvygf2Bi+5mPV2rBNBGUnF7CAk3dZn/atbISxw8agvTMecXV5o6Wy641mXJUXelfMN/Zz3T937OEtp+33/4c6zzpyaWlDpKSEDLMWSouDJOx9o//nHZ6MeS6S0Fqr/OFW8792SKh4GY1nYfCS0pBmw2G/xWw7JS3dVHp1ReYdly/2kFFlXKi2OPqf81Z+1oh5O9K79fvPE86eFoC4IsJ8lxZgnb/pp839dOx/1WAaLsC55fKfMWuuB1faJASbjtmQU5u4hsawBm6XJTknyN5+au2N3u5D01mdrJYXIOrLgilddVrno67WohxOld32++sYrZguezCa3fTmwDrYlxrLWx2+rfTi1lwgpB80RpMV5KiCtMlEPAEiC939x4TPfbZRyFvvWBnIzsiTlmTfOTy+oc19djHo4ETjtksq3ftkaz1scPAP6ZSxRzFrvvmH+KWP2m/8gG/VwsFHdeNn/wJJHmMAqMVkANuq6HzTP/fJCMZuu1mdr5diilLMuubn2uk+k68DJQlP/1/eX79jdLmWJZ8CSHFuM5+TpV8/eel876rFgCMLoS6bFoHZoWogYl6eidii6mC8kDdX2Q3b3g503XZHS1mdr1W2VdtNPWi84fybqsYTkl0/6R75v6tGZoOBJNjUDy3NsOZaVL7+08sNHOlGP5TeYMQMIH1OG5GNTweg8OqNesmsmn+LWZ2tlW2IsK3/6684z3zs110j4FOf6Hzae+8HpVkfnXco2AqviZWTOES/+8MxjFZ4tIo0irEwDo5DQQrJUtf2ox4X1q7f08TvLUqa99dlaWVIUXLlvXj37n6cemU7sn8DZNy28/hNzBVdQFwRYE8+RWovnn12erSf8Ic4ieomPGKPaPrARJLSQDHz+wXORWDvhgul5Wp+ti5Qi58h6Wz/n/VN3/SqBZ05e8/HZnV9emMhZLK4CayWFyLqy2dHH7iwn9hFO0i1VbT/qcWG/gRt3WTYwCgkNWI/TLqk8sDegq9W6dUNaxhYvvGjmc/c0ox7O0HQCcew55a/8rFXKWhxNBNZHCpFz5J45dfQHy1GPBcPELRNYJRIasGanXz337fvbBQ4XbZiXkWOefNMnZ999fTXqsQzBr/b5T3/nvl88GYx5ksKewEZIKfKu3L0veOmuStRjARKFo26xwCQCWJud/2/hU3c1xijNNyRuRo7nrUtuqZ9+zVzUY9mQm+9r/94HpxvUBQGGxJKi4Mk7drdfm7IWHUgzaoeiizlm0vSXJFFKsbd4WG74YfMDX6L12ZB1q/Bfc1fztEvi+rD8Q1+vvewjM15G5BweRAJDY0kx5skv/bj5v6+dj2QAS02XmTGbYWB5lRhPeLh74CCmmcBqfe+hzl9ePlvKSofzRcNmW6LoyTt2t486q9wJoh7NGv31VXPvu3F+PGtR1RMYOtsSY1nrY7fVLvlGLeqxAEBISGhJY1lWz8Ziy7IsNuRt2N6qOm3XTN6l9dmoWJYoePLBfcER79n3xGw8HoIqJY4/d+az9zTHcxa5HRiRjCWKWesd189f/Z2wqwotdWKHtXIjSNk745FSSiY8SALex+EZWNg0COK2XpBKfiCOOaestXAd7sojZEmRd+V8Qz/n/VP3Pm76n8aTVfWf3zP1syc6xSx1QYDRcmxRysm//fTsbb9IYH8OoYVQWui+jzi3RKOeO7ARTCuixEO4uDhmZ3m2rmk9HAIpRdaVSoujzyl/9WetqIezpLsf7DzrfVOVuqKkJxAO15YFT77sI5UfP9aJeiwjwGUEYeFoZSyQ0IAVvOIjld20PguRFCLryIIrXnVZ5aKvm3jy5Ko76y+4YNqyBO8KIExeRuYc8aKLZh6vJG0pJnnT44FbQzlzAawSfyrhYS97HL3tmrnbftmmfnr43IwsZa0zb5x/9w3R1HBbyt99Zu70a6rjOeqCABHwHKm1OPrs8lwjOZlGStF3hJzpQUqxwIUuElrSUG1/iC74Wu2qOxsFug9HxLFFKWddcnPt9cZ0Q3rRRTNXf4e6IEBkpBBZVzY6+rid5RC+HdX2jdZ/ci/+5/eALiaeSdP/1I1Hcetz4w9bZ944X8xaGf5KotNtlfaln7aOOqu80IrypvtQ2T/i3VPff6RTzEreEkCEpBA5Rz4+q8IJaUCY2G+FLiYawAA/eLTz+isqtD4zgW2JMU8+OBX8p3dN3flANGXcrvpO/dn/PD1DXRDADFKKvCvvfSJ4eWzb3APAMkhoQK+pefWSD8/kHVqfmaJbhV9p/cKLZt7wyVB3PNZa+pWXVt726WrBEzmH55iAKbqXhW/e337tv5qyCxqLUW0f2AgSWkj6j4dxqTJTJxBHn10OlPBofWYSKYSXkZvy1hd+1Dr8jH2fuzuMxrUfvaW27Z/2ffv+9njOcm3eD4BZugvsX/pJ812fN6ue0LroQR8AUoqEFiUeyBvo2J3l2brO0frMSN0JWbOj/+rK2WefOXXzz0fVMO3KO+s73r7vXTcs5F1JqRjAWLYlxrLWrltql95sYmcOwEzUvzFfJuoBAAZ55Ucqu/cGBY/sbC4phZeRri2frKpXXFo5rGS/49TC207OD+WL11r6Q1+vfeyb9fmGyruylOWdAJiuW0/ojOvnt2+y//R52aiHA2zIwKREdkohElrSKKV6JpVaa6aZq/E//m3ull+0i1lKQcSAlCLrSC8jF1rqjOvm/+e/V1/8LO+Nx+X+9Pc9e+2/v+mauu6e5nXfb37r/nbelVlHjud5FwCx4dii6Mk3XDG7tfiUE490h/vFmRwjPGHN1vrrQ1Ix0jQkNEAIIS7+Ru2TtzdKOYv9bDEipXAz0s2IQMnvPti+7Zet110ufnuzfcqz3WOe7jxze+ZZ2zObCgN+o7+eVQ9N+T95tHP77s7tD7T3VlXOkdmM2FK0SGZAHLkZWRDitEsqd79v87O2M7dJj/4De5zwRxJwFUsay7L6n4tYFrFjOV/6cevdN8yXaH0WW7YlbEtmHam1qLX0tfc0P/PdZifQvhJKaaFFKW/ZUiy0RMdXQkrbEhlLOLZ0MsKx5baixaNDIO68jNRan3j+9M8+sOWw8aFdzVlbiBt+WUgCEhrS7t7Hg9ddPlv0aH2WBFIKxxbO/rqL++/Tev//RNYRUvJrBhLLc2SzrZ9/Tvm+s7cUXGbqUdIqjPNUg74cu1KRBCwZINWmFtTJF5a9jKD1WYJJIaTc/wEgwaQQWUdWm/qoD5Q5PpZ4UgpL9rKkJSWTW8Qeb+LwDOyHxhHkCCkljjtn2qf1GQAkhZQi78gnq+qE88tRjyXVZH94CmW/KJOqFVFqPxZIaCEZeFVia3u0jj23PLWgaH0GAEkipci78j9+HZy6qxL1WIC1UWpAdlIqjPInTEqNQkILycCHE6N4YqH6/riVUuH8bcfLn//r7H17grzLFQkAksaSouDJ23e333Ll3Aa/VDgLDgO/HosaQGpRKSQk3RKLkXSfIIL0O+O6+Zt+0ixmKa0OAMlkSTHmyc/e09g8Ji/8s1LUw1lBd46w+BUpiGhp1P9OEEJQkTuF+JUjdS69tfbRW2tjWVqfAUCS2ZYoZq2P3lq/9NZa1GPBCGghtO77UEKzbwixxxQV6fKNn7fefu18kdZnAJACGUsUs9YZ181//gfNqMeSLnrQeapQylGwNwZJwCwVKfLzPcGrLpstZml9BgBp4dii6Mk3XDF76y/aUY8lTQhKwAaQ0JAW5QV10vnlbEZ4tD4DgDRxM7LgyVdeWrnvST/qsQDAykhoIekvsUg/tJC94HxanwFASnkZ6WXECedOPz5r5CEl1X+eSmvOU6WJ1sIWIgil2n5EG1CxBiS0kITZD40c2O/EC2aemKX1GQCkl+dIrcVxO8v19mrviUuV2h/+XbXv5sTdKm2UFtuKgRr0zqIodwqR0JB8r/vE7I8e6dD6DADSTAqRdWS1qY86q5z655Ywixaio+QRm1qBCqMJ00Cj/r5YExJa0hxsvHZQ95WoxxWZd32++sUfNwuepPUZAKSclCLvyD2z6oTzy6v7fOayCIMfiPG8/ZytCwHPDiCEIKEh2T7+zfquW+q0PgMAdEkp8q78j18Hp+6qRD2WJAul2r4e9BG/w3tai0ZHnPFC0fKV0uR/CEFCQ4Ldel/7Hz9bLdH6DACwiCVFwZO3726/5cq5qMeCDUnAgpPWoumLZ2zJvO7Z5ZZPPMN+TF2RTL940n/lRytjtD4DAPSxpBjz5GfvaZxxXTXqsSST7D1yMYINonLAN7FknGa2SotGR4xlM59+zXwQKH/0h9AQF3F6HwOrtNDSL7xoxqP1GQBgCbYlilnr0lvrH7utHvVYkDpKi6Yv5hryWYe7X/3vlQmn1uwsWTh06NX2Yb5M1ANIkf7t11rroR84VkpZ1iHBexTfxXDPP7vcaOucm65/NQBgTTKWKGWtf7q2um1c/rejcv2fsNTRqWHPmA+eoep5EUvTouWL+ZYIDm1MIIWeC2RNmTvv0VooIaSQJx2ZedPz2i/6rT1NX7YCW8glWyz0zOs2PIAB72pyoGlIaEnTH8bSFs9OumDm8VlVcFP2zwYArJ1ji6In//Lyuc3/aJ/8THeV/6/h31j74hj5bHmBEi/5L+pwz/ecnh+V8rIdx+sY+yOUQmzO+1u8pmMFTV8utGVAdRD0IaGFZOAObIr2Dt1fXD77w0c6Y1l+rgCAVXEzsiDEKy+tfO99m3/nsAjmRfLAgarFL1pCSGmZmjKiFyhZctrPKNZs+5Dj5lrrQl7kcv7wu4oPj9Ki0ZE1zVEjLImEhuR4z/XVG3/ULGUtWp8BAFbPy0it9fHnTt/7gS3bJ5g3D0G32n7vi8NLTVoIpaWvpD402WotOkpmlDQ4oK2ZyWkTI8JlCAnxf+6of/gb9SKtzwAAa+c5UmhxzM5yvc1sODZG33LNFMM9igbz8ftGEnznV+2//0y1lKP1GQBgPaQQWUdWm/qos8pRjwU4hG3bSU2eWArzWcTew9P+Sy+uFDxanwEA1k9KkXfknll1wnkzUY8F2E9r7ThO1KNA2EhoSaOU6m+jkeBHLwtNffzOmYxN6zMAwEZJKfKu/MmvO6ddUhFCuJnB++ioS47QaK3z+XyCJ3IYiIQWEi7xI3LMznK9o7MO8QwAMASWFGOu/Pb97bdcVXXdcM42a6G00H0fgklC2nWDWbFYHG5C63+aTwI0DQktaSzLkofqvhL1uEbi5Atnfj2jck5C/3kAgChYlhjz5NV3NT71nY5ry37DL9sw+DYW55tbnMduDq31xMREJpMhQaUN1fYRV3991dz3H+4UaX0GABg22xLZjKg2ZMYWrSDq0cSN1nrU1fbTQCmVzWYnJiaG/nPrf3bPXMo0JDTE0plfWPi3uxu0PgMAjBC3GEShexCmVCpNTk6yBTGdSGiIn8/d3bzgKwsTOVqfAQBgHCmltGT/ssxwF2qUUv3n+eNeI607bM/zJicnPc8jnqUWCQ0x870HO2++craUlRlq6wMAYKYRxwqtted5pVKp50xgd+mpUCjEMdjYtm3btuu6juMMzJ9IDxJa0iileq5WWuvEbC9+ZFqdcvFMwZMutfUBAKM3cA2DqbMJlkpoExMTMU1oB8ccBJx9TDsSWkgGLriHc/lITDyrtfXx55Vti9ZnAIAwhHOz0UJ06+svflFRan8lAxsXdadb8d3lCHSR0EKyVExKTHwKwTFnlxdaOk/rMwBA8sX8Zhfz4SfYwLNtHHgzDQktJEu97/l7WKVTd1UenVFjHpEWAJA4A+YCMZ4eUG0f2CASWni6bS57Xhx+18skeuvVc7fvbtP6DACQPFKI/sqHlrDinNFgKCklOTkWiAcw3Vk3LVxzV2PMk7Q+AwAA2AjKkMQCa2gw2nU/aJ59E63PAABAr4H1q6MaTFyQ0GKBhJY0/Wc9tdYx3Ut590OdN11B6zMAQDS6JQH75/zEAMSRlDIIgk6nw6ER88Vy4o40eKyiTrl4Ju/S+gwAAGAIWq0WzxdigTW08AwsajT0teb+eiRxfFLSCcSJ55UtITxq6wMAImJZ1sAqX8O/sSoteicJ9EPDkEkp6/V6HKeFKURCCwl/D2tyzM5ypa7zLj80AEAKDLjdxfsOuFTTrUgGAyGElLLZbLZaLcuy+NWYj4QG45x2SeWBvUGB1mcAAMRTSGuPWJ1ukf25ubmlfgVaa9vm0L9BSGgwy+nXzH37/naR2voAAGBZRL5VklJWq9X+0peLP4EfplGoFAKDnPfl2qfubIx5Mp61JwEAQEi01geKbR5CKY7wHcKyrEajUavVls9gjuOENiSsiDW0pIlvtf3rf9j4ly/Oj9P6DABgBqrtxxFrQQd1V8bq9frs7OzyPxatteu6oQ0MKyKhwQj3PNR5w+Vzpax02AUNADCAlN3/IWbIz13dSDY3N9ddPVsmoWmtc7lciEPDykhoUeIxT9feefXSXTM5Wp8BAIDVkVJ22yH0vBjVeAzR/Ql0KzfOzc0tc/bsIK11sVgMZXRYLRJaSLo7JXpejMv+w5HyA3HsOWWtRZba+gCANNIHPhZTQsf4PFUI1fblAYtftA5I50qalLLT6TSbzUaj0el0VlP/Q2stpSyVSuGMEKtEQkPEjj23XKnpvJv6p14AAPyGjHtLtFFrtVrVarWnRrxSSkrp+34K64UopXzf931fLKrNuGJSVUpNTk6GMT6sBQkNUXr5Ryr3P0nrMwBAuvUXIxmwqobf6C4WdfsvL35da91oNLrtv6IaW4S6Oz9X//ndNmjj4+OjGxLWh4QWku5W6Uh2Sxubfv7uM3O3/ZLWZwCAVLOElFbfbj36Ia1k4C5HQWuvVevuRD388MOjHggGIKElTVyq7V/4tdqVdzRK1NYHABiMavvG6rY+6wljKdzcuD7d6eL27dszGbKAiZgdIwJf/VnrzP87X8xaGd6AAABgSFg9W42D8Syfz0c9FgxGbk6agXspjbpg3ft459Ufmy16tD4DAJhuqX10kQwmRkKo5Yh16P5eMpnMjh07HMeJejhYEgkt+Yy6IO6bVyddOJNzBK3PAAAAwtHNZlLKzZs3T0xMRD0crICEFp6BD5NS9RwuUOK4c6YDJXK0PgMAYD8tlBa9k4R4n6cKYe2xGzl6Dp51XxnYhDadDv4c8vl8sVikM3VckNCilLZajsfuLE/XFK3PAAA4xID7Iv3QlqO1zuVymzZt6pnkaK03bdqUy+VIaEII27allJ7nsaExdkhoSWNsLcc/vrTyS1qfAQBiZWAtR0ROa+267tjYWH8tx2KxWCgUohoYMBQkNITh7dfN33xfq5i1aH0GAIgLblkmW6oYCQX3kQAkNIzcrm/ULru1RuszAAAwRAMTGoueSAASGkbr6z9vvfOG+XFanwEAkBpU2wc2goSGEbr38eBPLqP1GQAAaRLWiXPze8AC68O6BkZlakGdfGE5mxEerc8AAACA1WENLSQDW3OE0w8tkodJSonjzpn2aX0GAMDKtBCJ6ocGYCNIaEljSLX9Ey+cmVpQBVqfAQBiq/t0tf/w1HDPU2nRl84ApBsJLTzp2S392o/P/uTRzlg2kf84AEBKyPDOU1l9MwRhSSlJbkA6cQ4NQ/bOz1e/9NNmwZO0PgMAxJkWUdYeJJwB6cUaWtJEu1J32W31S26pj9P6DAAQf5ZlJXW3y6iFUG2fgv5IMObRyRfa1erm+9pv/1y1ROszAAAQERI1EoA1NAzHfU/6f/zRSiFL6zMAANJu4Noj2QlYJRY7ki+EC+JMTZ90/gytzwAAAIANYg0tPAN3Sw+9Dn4k1faPP6/cCTStzwAASRJOtX0hhFD9VUk4TwWkF2toIUnwyv6JF8w8MatyTnL/hQCANAqv2r7gDgpgERIaNuR1n5j90SOdvJvgBAoAAACEh12OWL9331D9wo+bpaxF6zMAACC6uzO1GLg9lFL4wCqR0LBOl3+rfvHX6+N5Wp8BAID9tBBFJ1gqiw13yw0hEEnF5Brrcct97X/492opR+szAADwG4GS24pBoNldA6wfa2jJN/QjYg+X/VdfVhmj9RkAAFhEaaG0eN62hUCN/HvJA3peHPk3BkaPhJY0o662v9DSx583Y9u0PgMAJF9I1faTouWLk5/pjDntuSZ7bID1I6GFRKnBT5Nid5U/+uxyvU3rMwAAhkUf+Oh5MWZ8Jeod+d4/rDV8Gb/RAyYhoSXNwBX/YS36n3zhzBMVVfDYQwAASIUh3kOXE/9A4yux0JLvenHmiPFyrc0CGrAhJLSQLLVbOoTr/rCW6f7i8tkfPNwZy7LHGwCAobGElFbfDEHIuMQ2rUUnEAtt+dYTMn/ze3vqbRmowUNfaj8RgB4kNKzKe29cuPFHtD4DAGDIlBaB0j2lNbQQgRK+FsbedbUWSgtfiZYvt03YH/6Tzh/91p5aR/rK2CEDsUFCw8o+d3fzQ19bGM/R+gwAgCHLOvamgpN1DrnFSqGFtNvaMXYHpCXF9nH5jKfoU47s/MH2fUqLWscOtFhmo80Q65aJQaXRui+yUocEIKEl3wZ3Jd71q/abr5wtZmWG2voAAAzb65+zcMphZafnLqt1qdT2PMfUgCa0EEoLPxDtQDY6ggZowBCR0EIS2uGt4Vbbf2jaP3VXpeBJl9r6AID0CaHaftOX1ZZl+4fcqbXWvmO5gR27ms8ANo6EFhKlVBAEPUlJa21y2Y1aW7/gvBnLovUZACCNQrv59T9dTepWPQInsBqcKwqPyWFsoGPOLi+0dJZ4BgBAuGI3Z1iNRP6jgFEgoWGwP7xw5rEZlXe4nAIAgI3SWmcybN0CVoWEhgHe+qm5ex7u5D3iGQAAGAKtted57HIEVoOEhl7/8oWFa77XGPMkrc8AAMBQaK2LxSIJDVgNlpuTb00LYdd+v3neVxYmaH0GAACGRGvtOE4ulwuCYLhfdsVXgDgioSXNRqrtf/fBzps/OVui9RkAAEKIUKrtJ153ZrJt27akFqgEho6EFiWjjnk9OqNecvFMntZnAABgSLTWSqnDDjvMdd2hJzQpZc9UyqiZFbBuJLTwKKX6+6Gtu5f0UgZerVa8YNVb+rhzyzatzwAAWGQ199AN0gcsflEpFfeVum42y2QyT33qUx3HYQENWD0SWkhCuMQvZTWX+BPOn641dd4lngEAEKpukul/MQiCIAjimNO01rZt5/P5QqFQKBQG/gMBLIOEFpLu4zEzF99P3VV5YF9QoLY+AAChGx8f799lo5SanJzM5XJxTGi2bR9cGCSbAetAQguPZVnr2H84aqdfPXf77nYxS219AAAiIA/oeVEMqv4VC77vRz0EIN5IaFEK57K7TAg8+6aFq+9qlHIW8QwAAMTIwPga00wL9CChJc3qq+1//gfNs26i9RkAAEui2r6ZIt+CBIwUc/OUuvuhzhuvoPUZAAAAYBYSWpSiegL0WEWdcvFM3qX1GQAAiCVWMpFg7HIMyVK7pYfeD21FfiBecF7ZEsJziGcAAESs2/qs/4RCVOOJC+qRIMFYQ0udY3aWZ+s6SzwDAADxpJRqt9ucRkNSkdDS5WWXVHbvDXIu1zQAABBLUspOp8MyIxKMhJYKji2EEH97zdy37m/nXVqfAQCAuJJSNptNHjYjwTiHljT9e9ml0AVPXvC15tV3NsaprQ8AwOrsPx9GtX2TSCmVUrVabeB/5VeDZGC2nnxSigfL8p3XVYtZ4hkAAIgxKeX8/LygJRoSjTW0pJFS9lyzbEv4SjqZ/XsdAQDAalhS9t9VESEppe/79Xp9qVLYUkrbZrqD2GNJJR24uQAAgDiTUmqtp6enl/kcrTUJDQnAGlp4lFI9j3zYLQ0AAOiHtqJuPKtUKkqp5Vc1Pc8LbVTAiJDQAAAAYK5udZDp6ekgCJaJZ1prKeVSGyCBGCGhhcS6dFvEAAAL7UlEQVSyLMuy+i8r7G4HACDl+k+7MT3o6v5kms3m7OxsN4At//ljY2PhDAwYKRJa0rBTAgCAoaDafiS6MexgNpufn2+326sp2aKUGh8fD2WMwGiR0FKBB3EAAKxVOHdP64Ce123btm07bWkwCIIgCHzfb7VazWbT9/2D2Wz5H4XWOpvNcggNyUBCAwAAiMz8/PzevXt7KhAqpdrttuu6aUtoYtEamhBilYfKtNZKqS1btox2ZEBYSGgAAACR6Ra3YA1tI7TW4+PjrutGPRBgOCh3AwAAgLhSSnmexwIakoQ1tJAopQb2Q+PZGAAAKTewypdSKqrxxIhSKpPJ7NixI+qBAMNEQgsPlXMBAACGohtr8/n89u3box4LMGQktKRRSvVEQZbpAABYH62otm8cfcDk5OTExETUwwGGj4QGAAAA0x0MZpZljY+Pb968md1JSCoSWtJYltVzweLyBQDA+khr5UbJG6S1DoKg50WllO/7vu+zXtclpXRdN5vNjo2N5fP5qIcDjBYJDQAAIDITExOZTKanlphSauvWrZSPB9KJhAYAABCZbrXnnrWy7hoaCQ1IJ/qhAQAAAIApWEMLD/3QAABAv4EzhKgGAyByJLSkodo+AADDQrV9AOEjoYWnv8riKFB5FgCAoQnlpjqoDjN3cyC9OIcGAAAAAKYgoQEAAACAKUhoAAAAAGAKEhoAAAAAmIKEFiXOAQMAAABYjFqOIdFaD+x2MvSQNrDavtI6pHJUAAAkiFJK697H2cOttr/UDGGI3wJAvLCGFp6BYYxlNAAAUo7JAIDFWENLmkE9VYTFpR8AgLULp5cpACzGGhoAAAAAmIKEBgAAAACmIKEBAAAAgClIaFFiazsAAACAxagUEp6oqu0rrYWg2j4AAGugtbAtodSAuvfhVNun4D6QWqyhJZ/WcnPWV1pypQcAYJWUFpP5QIVy72RPDYDFSGjJp7UouZ1iTgYq6qEAABAHWghfiWdsCvxQbp0slwFYjIQWnm5PlcUsy+rZ1TAKWohAi1f8bqbtj/pbAQCQBH4gJov270zWlR756lZ3PiAHGfW3BmAmElqUQntm1vTFW49t19qCZTQAAJantWh0xD+cZHUCGc4uRwBYjISWCp1A/u5k/TVHu/WO4GYDAMAymr7YNm6/5bnVJntPAESBhJYKSot6R374tOoR25x6m5AGAMAA3dUzKa3r3+xLqQPFPkMAESChJY1eQsvXQRDc9FfzLzjSnW2Ilk9OAwBgP61FOxDVlpgcs2/9e397vt7oCLXELVUpzgwAGCH6oYVnYLeTMAfQ8qVrB5/+s5mbHyqef2vmx492MpawpOAoMgAgzZQWvhLbx+13vNh643NmtRaNTqgtavpnCIRAIM1IaEmzfPWnjpKqLU767dpL3yr21pz7p919dVuwmAYASCutxXhWPX1TcOSmatOXLd/ylRBSLPP0MoQ6zBRyBNKMhJY6gRaNjmx2RNbuPHdbx+rehLgRAADSSQulRaDFTMOiLRkAE5DQUkoLESgZRD0MAAAAAItRKSRpQj7bBgBA2rAFEcBIkdCSxrbtqIcAAECSkdAAjBS7HJPGtm3f97l5AAAwClprz/OiHgWAJGMNLTzhpKZischGRwAARkRrXSgUhvs1ea4KYDESWki6DS5D6HpZLBa732i4XxYAAHRvr6VSabhfs3+GwK0cSDMSWtLYtj0xMcFlHQCAodNab9q0iSUvACNFQguJlNKyLNlnFF0vJycnHccZ+uocAABpppRyXXfTpk3D/bIDZwghNMUGYCz+/sMT5rrW0572tGw2yx4JAAA2TmsdBEE+nz/88MNH9PVH8WUBxBS1HBNrx44d1Wq1XC4rpdiPAQDA+mitM5nMli1bxsbGoh4LgFQgoSVZqVQqlUrtdrvRaPi+zyM6AABWT0pp23Y+n3ddN+qxAEgRElryua7LrQUAAACIBc6hAQAAAIApWEMLT7fDSc8rVFwEACDl+mcITA+ANGMNLSRL1eqghgcAAGk2cCbA9ABIMxJalKSUQRBEPQoAABCZIAjIYwAWI6FFjG0MAACkGTMBAD1IaBHjugwAQJo1m82ohwDALCS0iEkpa7Va1KMAAAARUEr5vs8uRwCLkdAiRkIDACC1arUa8QxADxJaxKSUCwsLUY8CAABEoFqtktAA9CChhUQppZc2MzMT9QABAECo6vV6o9EQB/qhLcYxdSDNSGjRk1JWKpWeVpUAACDZpqenLYuZGIBeXBdCYtu2XIJlWZZl7d27N+oxAgCAkFQqlU6nY1nWMtODqMcIIBr88YfEcZxl/quUsl6vl8vl0MYDAACiUqvVZmZmlj+BtvzMAUCCkdBC4rru8vsYpZTVarVSqYQ2JAAAEL56vb53797u6tkyn5bJZEIbEgCjkNBC4rru8p/Q3dJQqVTY7ggAQFJVq9U9e/Z0b/pLfY7WOpfLhTkqAEYhoYWnWCyuuIxmWVatVnvsscfq9XpoAwMAAKPWbrcff/zxcrm84uqZ1rpUKoU2MACmYQE9PBMTE/Pz87ZtL/9plmX5vr9nzx7P8zZt2lQoFMIZHgAAGIV6vT4/P7+wsNCtDbb8J2utpZRjY2PhjA2AgUho4XFdN5/P1+v11VRnsiyr3W4/+eSTQohsNpvNZm3bXjHdAQAAEyilgiBoNpvdTTEH181WbK6jlNq8eXMYQwRgKhJaqCYnJx9++OHld58fdPDTWq1Ws9kc/egAAMAwSSnX9HRVa23b9sTExOiGBMB8JLRQOY6zdevWqampFfegL7bKRAcAAOJLa6213rFjR9QDARAxKoWEbXx8fHx8vHsVjnosAADACFprpdSWLVtWLP4MIPFIaBHYsmVLqVRSShHSAABAN55t3bqVEo4ABLsco9J9SLZv377VlHUCAACJ1N1TY1nW0572NM/zoh4OACOQ0CIzPj5eKBSmpqZqtZo8IOpBAQCAMHSzmVJqYmJicnKSOQCAg0hoUcpkMtu3b2+1WnNzc7VaLQgCLtAAACRb94xDJpMplUqlUimTYTIG4BBcFKLned7WrVvFgar6QRAEQRD1oAAAwPBlMhnHcTzPcxwn6rEAMBQJzSCe57EHHQAAAEgzalQAAAAAgClIaAAAAABgChIaAAAAAJiChAYAAAAApiChAQAAAIApSGgAAAAAYAoSGgAAAACYgoQGAAAAAKYgoQEAAACAKUhoAAAAAGAKEhoAAAAAmIKEBgAAAACmIKEBAAAAgClIaAAAAABgChIaAAAAAJiChAYAAAAApiChAQAAAIApSGgAAAAAYAoSGgAAAACYgoQGAAAAAKYgoQEAAACAKUhoAAAAAGAKEhoAAAAAmIKEBgAAAACmIKEBAAAAgClIaAAAAABgChIaAAAAAJiChAYAAAAApiChAQAAAIApSGgAAAAAYAoSGgAAAACYgoQGAAAAAKYgoQEAAACAKUhoAAAAAGAKEhoAAAAAmIKEBgAAAACmIKEBAAAAgClIaAAAAABgChIaAAAAAJiChAYAAAAApiChAQAAAIApSGgAAAAAYAoSGgAAAACYgoQGAAAAAKYgoQEAAACAKUhoAAAAAGAKEhoAAAAAmIKEBgAAAACmIKEBAAAAgClIaAAAAABgChIaAAAAAJiChAYAAAAApiChAQAAAIApSGgAAAAAYAoSGgAAAACYgoQGAAAAAKYgoQEAAACAKUhoAAAAAGAKEhoAAAAAmIKEBgAAAACmIKEBAAAAgClIaAAAAABgChIaAAAAAJiChAYAAAAApiChAQAAAIApSGgAAAAAYAoSGgAAAACYgoQGAAAAAKYgoQEAAACAKUhoAAAAAGAKEhoAAAAAmIKEBgAAAACmIKEBAAAAgClIaAAAAABgChIaAAAAAJiChAYAAAAApiChAQAAAIApSGgAAAAAYAoSGgAAAACYgoQGAAAAAKYgoQEAAACAKUhoAAAAAGAKEhoAAAAAmIKEBgAAAACmIKEBAAAAgClIaAAAAABgChIaAAAAAJiChAYAAAAApiChAQAAAIApSGgAAAAAYAoSGgAAAACYgoQGAAAAAKYgoQEAAACAKf4/a+o6ARVh9YkAAAAASUVORK5CYII=",
            this.successPdfImage = this.options.images.hasOwnProperty("successPdfImage") ? this.options.images.successPdfImage : "data:image/png;base64,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",
            this.successVideoImage = this.options.images.hasOwnProperty("successVideoImage") ? this.options.images.successVideoImage : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAD6CAYAAABXq7VOAAAABGdBTUEAALGPC/xhBQAAEpNJREFUeAHt3UtsXOd1B/BvJPFlWaRIPWxZcQLHUSorsEwLltMEMRzYQJBsvEi66C4IkFW7aldZpkHQbRdFu6nX3dVAgGyCAOkiruvIcfwCEtlyJAe2RSUUORJpmZRIccIrWX6QQ3Ie987cOfc3G0szc7/vO79zjL9mho/a3NylRnIjQIAAAQIEBlpg10Cf3uEJECBAgACBWwIC3SAQIECAAIEAAgI9QBOVQIAAAQIEBLoZIECAAAECAQQEeoAmKoEAAQIECAh0M0CAAAECBAIICPQATVQCAQIECBAQ6GaAAAECBAgEEBDoAZqoBAIECBAgINDNAAECBAgQCCAg0AM0UQkECBAgQECgmwECBAgQIBBAQKAHaKISCBAgQICAQDcDBAgQIEAggIBAD9BEJRAgQIAAAYFuBggQIECAQAABgR6giUogQIAAAQIC3QwQIECAAIEAAgI9QBOVQIAAAQIEBLoZIECAAAECAQQEeoAmKoEAAQIECAh0M0CAAAECBAIICPQATVQCAQIECBAQ6GaAAAECBAgEEBDoAZqoBAIECBAgINDNAAECBAgQCCAg0AM0UQkECBAgQECgmwECBAgQIBBAQKAHaKISCBAgQICAQDcDBAgQIEAggIBAD9BEJRAgQIAAAYFuBggQIECAQAABgR6giUogQIAAAQIC3QwQIECAAIEAAgI9QBOVQIAAAQIEBLoZIECAAAECAQQEeoAmKoEAAQIECAh0M0CAAAECBAIICPQATVQCAQIECBAQ6GaAAAECBAgEEBDoAZqoBAIECBAgINDNAAECBAgQCCAg0AM0UQkECBAgQECgmwECBAgQIBBAQKAHaKISCBAgQICAQDcDBAgQIEAggIBAD9BEJRAgQIAAAYFuBggQIECAQAABgR6giUogQIAAAQIC3QwQIECAAIEAAgI9QBOVQIAAAQIEBLoZIECAAAECAQQEeoAmKoEAAQIECAh0M0CAAAECBAIICPQATVQCAQIECBAQ6GaAAAECBAgEEBDoAZqoBAIECBAgINDNAAECBAgQCCAg0AM0UQkECBAgQECgmwECBAgQIBBAQKAHaKISCBAgQICAQDcDBAgQIEAggIBAD9BEJRAgQIAAAYFuBggQIECAQAABgR6giUogQIAAAQIC3QwQIECAAIEAAgI9QBOVQIAAAQIEBLoZIECAAAECAQQEeoAmKoEAAQIECAh0M0CAAAECBAIICPQATVQCAQIECBAQ6GaAAAECBAgEEBDoAZqoBAIECBAgINDNAAECBAgQCCAg0AM0UQkECBAgQECgmwECBAgQIBBAQKAHaKISCBAgQICAQDcDBAgQIEAggIBAD9BEJRAgQIAAAYFuBggQIECAQAABgR6giUogQIAAAQIC3QwQIECAAIEAAgI9QBOVQIAAAQIEBLoZIECAAAECAQQEeoAmKoEAAQIECAh0M0CAAAECBAIICPQATVQCAQIECBAQ6GaAAAECBAgEEBDoAZqoBAIECBAgINDNAAECBAgQCCAg0AM0UQkECBAgQECgmwECBAgQIBBAQKAHaKISCBAgQICAQDcDBAgQIEAggIBAD9BEJRAgQIAAAYFuBggQIECAQAABgR6giUogQIAAAQIC3QwQIECAAIEAAgI9QBOVQIAAAQIEBLoZIECAAAECAQQEeoAmKoEAAQIECAh0M0CAAAECBAIICPQATVQCAQIECBAQ6GaAAAECBAgEEBDoAZqoBAIECBAgINDNAAECBAgQCCAg0AM0UQkECBAgQECgmwECBAgQIBBAQKAHaKISCBAgQICAQDcDBAgQIEAggIBAD9BEJRAgQIAAAYFuBggQIECAQAABgR6giUogQIAAAQIC3QwQIECAAIEAAgI9QBOVQIAAAQIEBLoZIECAAAECAQQEeoAmKoEAAQIECAh0M0CAAAECBAIICPQATVQCAQIECBAQ6GaAAAECBAgEEBDoAZqoBAIECBAgINDNAAECBAgQCCAg0AM0UQkECBAgQECgmwECBAgQIBBAQKAHaKISCBAgQICAQDcDBAgQIEAggIBAD9BEJRAgQIAAAYFuBggQIECAQAABgR6giUogQIAAAQIC3QwQIECAAIEAAgI9QBOVQIAAAQIEBLoZIECAAAECAQQEeoAmKoEAAQIECAh0M0CAAAECBAIICPQATVQCAQIECBAQ6GaAAAECBAgEEBDoAZqoBAIECBAgINDNAAECBAgQCCAg0AM0UQkECBAgQECgmwECBAgQIBBAQKAHaKISCBAgQICAQDcDBAgQIEAggIBAD9BEJRAgQIAAAYFuBggQIECAQAABgR6giUogQIAAAQIC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",
            this.successFileAltImage = this.options.images.hasOwnProperty("successFileAltImage") ? this.options.images.successFileAltImage : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAD6CAYAAABXq7VOAAAABGdBTUEAALGPC/xhBQAAEbBJREFUeAHt3U+MnHUZB/Df7E7/bmeX1u1uW6BAW6BFg6ixtAqaYGI0MRzAuxdOetKTN9EYr568KGdvkpBgojERo7SWJmgQqW3BioJYOrutS3fb7j/GmTZdW3Z2O7Odmfd9n/ls0jD7zjvv+3s+zwNfZuadTmly8mwt+SFAgAABAgQKLTBQ6NVbPAECBAgQIHBVQKAbBAIECBAgEEBAoAdoohIIECBAgIBANwMECBAgQCCAgEAP0EQlECBAgAABgW4GCBAgQIBAAAGBHqCJSiBAgAABAgLdDBAgQIAAgQACAj1AE5VAgAABAgQEuhkgQIAAAQIBBAR6gCYqgQABAgQICHQzQIAAAQIEAggI9ABNVAIBAgQIEBDoZoAAAQIECAQQEOgBmqgEAgQIECAg0M0AAQIECBAIICDQAzRRCQQIECBAQKCbAQIECBAgEEBAoAdoohIIECBAgIBANwMECBAgQCCAgEAP0EQlECBAgAABgW4GCBAgQIBAAAGBHqCJSiBAgAABAgLdDBAgQIAAgQACAj1AE5VAgAABAgQEuhkgQIAAAQIBBAR6gCYqgQABAgQICHQzQIAAAQIEAggI9ABNVAIBAgQIEBDoZoAAAQIECAQQEOgBmqgEAgQIECAg0M0AAQIECBAIICDQAzRRCQQIECBAQKCbAQIECBAgEEBAoAdoohIIECBAgIBANwMECBAgQCCAgEAP0EQlECBAgAABgW4GCBAgQIBAAAGBHqCJSiBAgAABAgLdDBAgQIAAgQACAj1AE5VAgAABAgQEuhkgQIAAAQIBBAR6gCYqgQABAgQICHQzQIAAAQIEAggI9ABNVAIBAgQIEBDoZoAAAQIECAQQEOgBmqgEAgQIECAg0M0AAQIECBAIICDQAzRRCQQIECBAQKCbAQIECBAgEEBAoAdoohIIECBAgIBANwMECBAgQCCAgEAP0EQlECBAgAABgW4GCBAgQIBAAAGBHqCJSiBAgAABAgLdDBAgQIAAgQACAj1AE5VAgAABAgQEuhkgQIAAAQIBBAR6gCYqgQABAgQICHQzQIAAAQIEAggI9ABNVAIBAgQIEBDoZoAAAQIECAQQEOgBmqgEAgQIECAg0M0AAQIECBAIICDQAzRRCQQIECBAQKCbAQIECBAgEEBAoAdoohIIECBAgIBANwMECBAgQCCAgEAP0EQlECBAgAABgW4GCBAgQIBAAAGBHqCJSiBAgAABAgLdDBAgQIAAgQACAj1AE5VAgAABAgQEuhkgQIAAAQIBBAR6gCYqgQABAgQICHQzQIAAAQIEAggI9ABNVAIBAgQIEBDoZoAAAQIECAQQEOgBmqgEAgQIECAg0M0AAQIECBAIICDQAzRRCQQIECBAQKCbAQIECBAgEEBAoAdoohIIECBAgIBANwMECBAgQCCAgEAP0EQlECBAgAABgW4GCBAgQIBAAAGBHqCJSiBAgAABAgLdDBAgQIAAgQACAj1AE5VAgAABAgQEuhkgQIAAAQIBBAR6gCYqgQABAgQICHQzQIAAAQIEAggI9ABNVAIBAgQIEBDoZoAAAQIECAQQEOgBmqgEAgQIECAg0M0AAQIECBAIICDQAzRRCQQIECBAQKCbAQIECBAgEEBAoAdoohIIECBAgIBANwMECBAgQCCAgEAP0EQlECBAgAABgW4GCBAgQIBAAAGBHqCJSiBAgAABAgLdDBAgQIAAgQACAj1AE5VAgAABAgQEuhkgQIAAAQIBBAR6gCYqgQABAgQICHQzQIAAAQIEAggI9ABNVAIBAgQIEBDoZoAAAQIECAQQEOgBmqgEAgQIECAg0M0AAQIECBAIICDQAzRRCQQIECBAQKCbAQIECBAgEEBAoAdoohIIECBAgIBANwMECBAgQCCAgEAP0EQlECBAgAABgW4GCBAgQIBAAAGBHqCJSiBAgAABAgLdDBAgQIAAgQACAj1AE5VAgAABAgQEuhkgQIAAAQIBBAR6gCYqgQABAgQICHQzQIAAAQIEAggI9ABNVAIBAgQIEBDoZoAAAQIECAQQEOgBmqgEAgQIECAg0M0AAQIECBAIICDQAzRRCQQIECBAQKCbAQIECBAgEEBAoAdoohIIECBAgIBANwMECBAgQCCAgEAP0EQlECBAgAABgW4GCBAgQIBAAAGBHqCJSiBAgAABAgLdDBAgQIAAgQACAj1AE5VAgAABAgQEuhkgQIAAAQIBBAR6gCYqgQABAgQICHQzQIAAAQIEAggI9ABNVAIBAgQIEBDoZoAAAQIECAQQEOgBmqgEAgQIECAg0M0AAQIECBAIICDQAzRRCQQIECBAQKCbAQIECBAgEEBAoAdoohIIECBAgIBANwMECBAgQCCAgEAP0EQlECBAgAABgW4GCBAgQIBAAAGBHqCJSiBAgAABAgLdDBAgQIAAgQACAj1AE5VAgAABAgQEuhkgQIAAAQIBBAR6gCYqgQABAgQICHQzQIAAAQIEAggI9ABNVAIBAgQIEBDoZoAAAQIECAQQEOgBmqgEAgQIECBQRkCAQHcFFhYW06nTp1P13ESanpnp7slu8+gDAwNp06aNaXh4JO3cOZbGx8bS4ODgbR7VwwkQ6IVAaXLybK0XJ3IOAv0o0Ajzl48cTdPT+Q7ylXqzfv36tG/fnnTvPbtTI+z9ECCQXwH/hua3N1YWQKDxzLyoYd7gn5ubSydOnExHjh5Lly9fDtARJRCIKyDQ4/ZWZTkQOHeumoNV3P4SpqY+qL/S8Md0cXr69g/mCAQIdEVAoHeF1UEJXBOYmbkUhmJ2di4dO3ZcqIfpqEKiCbgoLlpH1ZN7gcb70iMjI7lYZ7Xa3isI10P90KMHU6WyJRc1WAQBAtcEBLpJINBjgUaYP3rwMz0+a/PTvfjLXy2742PbtqVdd+5Mp06+mebm55bdfzXUXzmehPoyGhsIZCrgJfdM+Z2cQP4EBuofU7tn993psccO1T/CtqnpAq+HuvfUm/LYSCATAYGeCbuTEsi/wObNm9PnDh9cPdS9p57/Rlph3wgI9L5ptUIJtC/QeIYu1Nt38wgCWQgI9CzUnZNAgQSEeoGaZal9LSDQ+7r9iifQmkAj1A8f+mzatHGV99S9/N4apr0IdElAoHcJ1mEJRBNovKd++LBQj9ZX9cQREOhxeqkSAl0XEOpdJ3YCAmsWEOhrpvNAAv0pINT7s++qzr+AQM9/j6yQQO4EhHruWmJBBJJANwQECKxJQKivic2DCHRNQKB3jdaBCcQXaCXUj7/y6tWvYY2voUIC2QoI9Gz9nZ1A4QVuFeqXr1xOr73218LXqQACeRcQ6HnvkPURKIDArUL9/XPn0vnzFwpQiSUSKK6AQC9u76ycQK4EbhXqb751JlfrtRgC0QQEerSOqodAhgKNUD9Y/2rYUqm0bBUTExNpfn5+2XYbCBDojIDvQ++Mo6MQCCOwuLiYZmYurbmegYGBNDq6LVWrkzcdo1arpWo91Hft3HnTdr8QINAZAYHeGUdHIRBG4Pz58+ml3/2+K/VcmrncleM6KAECyefQDQGBfhYolwd7Wv7s3GxPz+dkBPpJwHvo/dRttRL4iEClUvnIli7/Wuvy8R2eQB8LCPQ+br7SCezbuwcCAQJBBAR6kEYqg8BaBMbHx9KB/Q80vSp9LcfzGAIEshNwUVx29s5MIBcCe+vP0sfHx1PjY2Uzl+pXt3fgZfHGx9Pe/fd7uajPIgj0i4BA75dOq5PAKgJbtgylxp9O/TQ+9ibQO6XpOARaE/CSe2tO9iJAgAABArkWEOi5bo/FESBAgACB1gQEemtO9iJAgAABArkWEOi5bo/FESBAgACB1gRcFNeak70IZCYwNTWV/n7m7foXmyxktoY7Rirp/vv3pcbf0+6HAIF8Cgj0fPbFqggsCbxx4lT9u8TPL/2exY1qtZqGh4fTzp07sji9cxIg0IKA/91uAckuBLIUmJ29kuXpl859Zdbfw76E4QaBHAoI9Bw2xZIIECBAgEC7AgK9XTH7E+ixQF7ety4P9vab2XrM7HQECi8g0AvfQgVEF7jvvntTuZzt5S4jI8NpbGx7dGr1ESi0QLb/lSg0ncUT6I3A7rvvSo0/fggQILCagGfoq+m4jwABAgQIFERAoBekUZZJgAABAgRWExDoq+m4jwABAgQIFERAoBekUZZJgAABAgRWE3BR3Go67iOQE4ELF6bSwsJcZqupVIbTxo0bMju/ExMgcGsBgX5rI3sQyFTg9dffSP/81zuZrqFUKqUvPP75VKlsyXQdTk6AwMoCXnJf2cY9BHIhMDE5mfk6arVamszBOjKHsAACORYQ6DlujqURyJNALU+LsRYCBJYJCPRlJDYQIECAAIHiCQj04vXMivtMYHh4JBcV3zGSj3XkAsMiCORQwEVxOWyKJRG4UeCTD38ijY9vT/Pz8zdu7untRphv3XpHT8/pZAQItCcg0NvzsjeBnguUy4Pprjt39fy8TkiAQLEEvORerH5ZLQECBAgQaCog0Juy2EiAAAECBIolINCL1S+rJUCAAAECTQUEelMWGwkQIECAQLEEXBRXrH5ZbR8KVKvVdOrUW2l+Ibur3BsfnWtcbd+4QM8PAQL5FBDo+eyLVRFYEmiE+X+nppZ+z+LGzMylqx+dc7V9FvrOSaA1AYHempO9CGQmkOUz8xuLzvJz8Deuo53bF+eq6b2LJ9Pih61/U92GwaF05/BDaWN5uJ1T2ZdA5gICPfMWWAABAp0WqNUW0/Mnn02//cfP1nTo8sD69OSD301fuu+ba3q8BxHIQsBFcVmoOyeBNgTWlde1sXf3dl23Lh/raKXC35z5yZrDvHH8hfoz+uf/9oP057MvtnI6+xDIhYBn6Llog0UQWFngwQf35eKiuB3j4ysvMmf3HH3n5x1ZUeM4n9rxtY4cy0EIdFtAoHdb2PEJ3KbA9u3bU+OPn9YFqpfebn3nVfac6NBxVjmFuwh0TMBL7h2jdCACBIoqMFgqp2c+/dP0vS8eSds23b1URq324dJtNwjkXUCg571D1keAQFcFroX5c/WX1p9MY0N707cP/SKtG9zY1XM6OIFuCAj0bqg6JgEChRC4HuYPj3+lEOu1SAKrCQj01XTcR4BA4QUaL6F/5/AL6fHd37iplmZhfv7yO+nHx55O84tXbtrXLwSKIOCiuCJ0yRoJEFiTwNC6rfWX0J+/+r743q2PpvLAuvTS28+llcP8qdQIdT8Eiigg0IvYNWsmQKAlgcqG0TSyccfSvl9/6IepVBpM9287nG58mf3aM3NhvgTlRiEFvOReyLZZNAECrQicnX4zPfenZ9Ji7f9fbPP0ge8L81bw7FM4AYFeuJZZMAEC7Qj85f1fLwv164/3zPy6hH9GEBDoEbqoBgIEVhVoFurCfFUydxZQQKAXsGmWTIBA+wI3hrowb9/PI/Iv4KK4/PfICoMJTNW/2/yV468Gq+rmchYXF2/ekJPfGqH+oz88kS7OTqSZ+Qs5WZVlEOiMgEDvjKOjEGhZYG5uLlWr1Zb3D7VjqTfVVNaPpotzE01P1rhQrtWfygZ/h36rVvbLXsBL7tn3wAoCC2wZGgpcXfulDW3e3P6D1vCIj489sYZHLX/IQ9s7c5zlR7aFQOcFBHrnTR2RwJLA9rHRpdv9fqNUKqXR0d54PHXg2bSrsv+2yPePPp6+vOdbt3UMDybQS4HS5OTZWi9P6FwE+klgYWExvXzkaJqenumnspvWemD/A2nv3j1N7+vGxsUP59Kr/3khvfvBifrn0OdaPsWGwaG0e+SR9MiOr9Yf06P3CFpenR0JrCwg0Fe2cQ+Bjgg0Qv3U6dOpem4iTc/0V7CXy4OpUqmkffUgHx8f64ingxAg0FxAoDd3sZUAAQIECBRKwHvohWqXxRIgQIAAgeYCAr25i60ECBAgQKBQAgK9UO2yWAIECBAg0FxAoDd3sZUAAQIECBRKQKAXql0WS4AAAQIEmgsI9OYuthIgQIAAgUIJCPRCtctiCRAgQIBAcwGB3tzFVgIECBAgUCgBgV6odlksAQIECBBoLvA/K4s3M3j52hYAAAAASUVORK5CYII=",
            this.backgroundImage = this.options.images.hasOwnProperty("backgroundImage") ? this.options.images.backgroundImage : "",
            this.bindClickEvents(),
            this.imagePreview.style.backgroundImage = 'url("'.concat(this.baseImage, '")'),
            this.options.presetFiles = this.options.hasOwnProperty("presetFiles") ? this.options.presetFiles : null,
            this.options.presetFiles && this.addImagesFromPath(this.options.presetFiles).then(function() {}).catch(function(A) {
                console.log("Error - " + A.toString()),
                console.log("Warning - An image you added from a path is not able to be added to the cachedFileArray.")
            })
        }
        return B(A, [{
            key: "bindClickEvents",
            value: function() {
                var A = this
                  , e = this;
                e.input.addEventListener("change", function() {
                    e.addFiles(this.files)
                }, !0),
                this.clearButton.addEventListener("click", function() {
                    A.clearPreviewPanel()
                }, !0),
                this.imagePreview.addEventListener("click", function(e) {
                    if (e.target.matches(".custom-file-container__image-multi-preview__single-image-clear__icon")) {
                        var t = e.target.getAttribute("data-upload-token")
                          , g = A.cachedFileArray.findIndex(function(A) {
                            return A.token === t
                        });
                        A.deleteFileAtIndex(g)
                    }
                })
            }
        }, {
            key: "addFiles",
            value: function(A) {
                if (0 !== A.length) {
                    this.input.multiple ? this.currentFileCount += A.length : (this.currentFileCount = A.length,
                    this.cachedFileArray = []);
                    for (var e = 0; e < A.length; e++) {
                        var t = A[e];
                        t.token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                        this.cachedFileArray.push(t),
                        this.processFile(t)
                    }
                    var g = new CustomEvent("fileUploadWithPreview:imagesAdded",{
                        detail: {
                            uploadId: this.uploadId,
                            cachedFileArray: this.cachedFileArray,
                            addedFilesCount: A.length
                        }
                    });
                    window.dispatchEvent(g)
                }
            }
        }, {
            key: "processFile",
            value: function(A) {
                var e = this;
                0 === this.currentFileCount ? this.inputLabel.innerHTML = this.options.text.chooseFile : 1 === this.currentFileCount ? this.inputLabel.innerHTML = A.name : this.inputLabel.innerHTML = "".concat(this.currentFileCount, " ").concat(this.options.text.selectedCount),
                this.addBrowseButton(this.options.text.browse),
                this.imagePreview.classList.add("custom-file-container__image-preview--active");
                var t = new FileReader;
                t.readAsDataURL(A),
                t.onload = function() {
                    e.input.multiple || (A.type.match("image/png") || A.type.match("image/jpeg") || A.type.match("image/gif") ? e.imagePreview.style.backgroundImage = 'url("'.concat(t.result, '")') : A.type.match("application/pdf") ? e.imagePreview.style.backgroundImage = 'url("'.concat(e.successPdfImage, '")') : A.type.match("video/*") ? e.imagePreview.style.backgroundImage = 'url("'.concat(e.successVideoImage, '")') : e.imagePreview.style.backgroundImage = 'url("'.concat(e.successFileAltImage, '")')),
                    e.input.multiple && (e.imagePreview.style.backgroundImage = 'url("'.concat(e.backgroundImage, '")'),
                    A.type.match("image/png") || A.type.match("image/jpeg") || A.type.match("image/gif") ? e.options.showDeleteButtonOnImages ? e.imagePreview.innerHTML += '\n                            <div\n                                class="custom-file-container__image-multi-preview"\n                                data-upload-token="'.concat(A.token, '"\n                                style="background-image: url(\'').concat(t.result, '\'); "\n                            >\n                                <span class="custom-file-container__image-multi-preview__single-image-clear">\n                                    <span\n                                        class="custom-file-container__image-multi-preview__single-image-clear__icon"\n                                        data-upload-token="').concat(A.token, '"\n                                    >&times;</span>\n                                </span>\n                            </div>\n                        ') : e.imagePreview.innerHTML += '\n                            <div\n                                class="custom-file-container__image-multi-preview"\n                                data-upload-token="'.concat(A.token, '"\n                                style="background-image: url(\'').concat(t.result, "'); \"\n                            ></div>\n                        ") : A.type.match("application/pdf") ? e.options.showDeleteButtonOnImages ? e.imagePreview.innerHTML += '\n                            <div\n                                class="custom-file-container__image-multi-preview"\n                                data-upload-token="'.concat(A.token, '"\n                                style="background-image: url(\'').concat(e.successPdfImage, '\'); "\n                            >\n                                <span class="custom-file-container__image-multi-preview__single-image-clear">\n                                    <span\n                                        class="custom-file-container__image-multi-preview__single-image-clear__icon"\n                                        data-upload-token="').concat(A.token, '"\n                                    >&times;</span>\n                                </span>\n                            </div>\n                        ') : e.imagePreview.innerHTML += '\n                            <div\n                                class="custom-file-container__image-multi-preview"\n                                data-upload-token="'.concat(A.token, '"\n                                style="background-image: url(\'').concat(e.successPdfImage, "'); \"\n                            ></div>\n                        ") : A.type.match("video/*") ? e.options.showDeleteButtonOnImages ? e.imagePreview.innerHTML += '\n                            <div\n                                class="custom-file-container__image-multi-preview"\n                                style="background-image: url(\''.concat(e.successVideoImage, '\'); "\n                                data-upload-token="').concat(A.token, '"\n                            >\n                                <span class="custom-file-container__image-multi-preview__single-image-clear">\n                                    <span\n                                        class="custom-file-container__image-multi-preview__single-image-clear__icon"\n                                        data-upload-token="').concat(A.token, '"\n                                    >&times;</span>\n                                </span>\n                            </div>\n                        ') : e.imagePreview.innerHTML += '\n                            <div\n                                class="custom-file-container__image-multi-preview"\n                                style="background-image: url(\''.concat(e.successVideoImage, '\'); "\n                                data-upload-token="').concat(A.token, '"\n                            ></div>\n                        ') : e.options.showDeleteButtonOnImages ? e.imagePreview.innerHTML += '\n                            <div\n                                class="custom-file-container__image-multi-preview"\n                                style="background-image: url(\''.concat(e.successFileAltImage, '\'); "\n                                data-upload-token="').concat(A.token, '"\n                            >\n                                <span class="custom-file-container__image-multi-preview__single-image-clear">\n                                    <span\n                                        class="custom-file-container__image-multi-preview__single-image-clear__icon"\n                                        data-upload-token="').concat(A.token, '"\n                                    >&times;</span>\n                                </span>\n                            </div>\n                        ') : e.imagePreview.innerHTML += '\n                            <div\n                                class="custom-file-container__image-multi-preview"\n                                style="background-image: url(\''.concat(e.successFileAltImage, '\'); "\n                                data-upload-token="').concat(A.token, '"\n                            ></div>\n                        '))
                }
            }
        }, {
            key: "addImagesFromPath",
            value: function(A) {
                var t = this;
                return new Promise(function() {
                    var n = g(e.mark(function g(n, i) {
                        var B, E, r, C, o;
                        return e.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    B = [],
                                    E = 0;
                                case 2:
                                    if (!(E < A.length)) {
                                        e.next = 24;
                                        break
                                    }
                                    return r = void 0,
                                    C = void 0,
                                    e.prev = 5,
                                    e.next = 8,
                                    fetch(A[E], {
                                        mode: "cors"
                                    });
                                case 8:
                                    return r = e.sent,
                                    e.next = 11,
                                    r.blob();
                                case 11:
                                    C = e.sent,
                                    e.next = 18;
                                    break;
                                case 14:
                                    return e.prev = 14,
                                    e.t0 = e.catch(5),
                                    i(e.t0),
                                    e.abrupt("continue", 21);
                                case 18:
                                    (o = new Blob([C],{
                                        type: C.type
                                    })).name = A[E].split("/").pop(),
                                    B.push(o);
                                case 21:
                                    E++,
                                    e.next = 2;
                                    break;
                                case 24:
                                    t.addFiles(B),
                                    n();
                                case 26:
                                case "end":
                                    return e.stop()
                                }
                        }, g, null, [[5, 14]])
                    }));
                    return function(A, e) {
                        return n.apply(this, arguments)
                    }
                }())
            }
        }, {
            key: "replaceFiles",
            value: function(A) {
                if (!A.length)
                    throw new Error("Array must contain at least one file.");
                this.cachedFileArray = A,
                this.refreshPreviewPanel()
            }
        }, {
            key: "replaceFileAtIndex",
            value: function(A, e) {
                if (!A)
                    throw new Error("No file found.");
                if (!this.cachedFileArray[e])
                    throw new Error("There is no file at index",e);
                this.cachedFileArray[e] = A,
                this.refreshPreviewPanel()
            }
        }, {
            key: "deleteFileAtIndex",
            value: function(A) {
                if (!this.cachedFileArray[A])
                    throw new Error("There is no file at index",A);
                this.cachedFileArray.splice(A, 1),
                this.refreshPreviewPanel();
                var e = new CustomEvent("fileUploadWithPreview:imageDeleted",{
                    detail: {
                        uploadId: this.uploadId,
                        cachedFileArray: this.cachedFileArray,
                        currentFileCount: this.currentFileCount
                    }
                });
                window.dispatchEvent(e)
            }
        }, {
            key: "refreshPreviewPanel",
            value: function() {
                var A = this;
                this.imagePreview.innerHTML = "",
                this.currentFileCount = this.cachedFileArray.length,
                this.cachedFileArray.forEach(function(e) {
                    return A.processFile(e)
                }),
                this.cachedFileArray.length || this.clearPreviewPanel()
            }
        }, {
            key: "addBrowseButton",
            value: function(A) {
                this.inputLabel.innerHTML += '<span class="custom-file-container__custom-file__custom-file-control__button"> '.concat(A, " </span>")
            }
        }, {
            key: "emulateInputSelection",
            value: function() {
                this.input.click()
            }
        }, {
            key: "clearPreviewPanel",
            value: function() {
                this.input.value = "",
                this.inputLabel.innerHTML = this.options.text.chooseFile,
                this.addBrowseButton(this.options.text.browse),
                this.imagePreview.style.backgroundImage = 'url("'.concat(this.baseImage, '")'),
                this.imagePreview.classList.remove("custom-file-container__image-preview--active"),
                this.cachedFileArray = [],
                this.imagePreview.innerHTML = "",
                this.currentFileCount = 0
            }
        }]),
        A
    }()
}();
