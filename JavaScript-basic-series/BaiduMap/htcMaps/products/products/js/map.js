$(function () {
    var t = $(".footer-li").find("li"),
        s = $(".line"),
        i = $(".box-list").find("li"),
        e = $(".line1"),
        o = $(".middle-footer").find(".footer-list");
    slider.init(), $(i).each(function (i) {
        $(this).hover(function () {
            var t = $(this);
            timer = window.setTimeout(function () {
                4 === i ? $(".cover-bg").css("background-image", "url(http://mapopen-website-wiki.cdn.bcebos.com/products/map/sellayer.jpg") : 3 === i ? $(".cover-bg").css("background-image", "url(https://mapopen-website-wiki.bj.bcebos.com/products/map/hot-area.jpg)") : 2 === i ? $(".cover-bg").css("background-image", "url(https://mapopen-website-wiki.bj.bcebos.com/products/map/area.jpg)") : 1 === i ? $(".cover-bg").css("background-image", "url(https://mapopen-website-wiki.bj.bcebos.com/products/map/polygon.jpg)") : 0 === i && $(".cover-bg").css("background-image", "url(https://mapopen-website-wiki.bj.bcebos.com/products/map/point.jpg)"), t.addClass("active").siblings().removeClass("active"), $(e).stop().animate({
                    left: t.position().left
                }, 300)
            })
        })
    }), $(".map-ul").find("li").each(function (i) {
        //jQuery 遍历 - each() 方法
        $(this).click(function () {
            0 == i ? $("iframe").attr("src", "jsdemo/demo/k0_7.htm") : 1 == i ? $("iframe").attr("src", "jsdemo/demo/k0_4.htm") : 2 == i ? $("iframe").attr("src", "jsdemo/demo/k0_6.htm") : 3 == i ? $("iframe").attr("src", "jsdemo/demo/k0_5.htm") : $("iframe").attr("src", "jsdemo/demo/k0_8.htm");
            var t = $(this);
            timer = window.setTimeout(function () {
                t.children(".map-border").attr("id", "determine"), t.siblings().children(".map-border").attr("id", "")
            })
        })  
    }), $(t).each(function (i) {
        $(this).hover(function () {
            var t = $(this);
            timer = window.setTimeout(function () {
                $(o).eq(i).addClass("selected").siblings().removeClass("selected"), t.addClass("active").siblings().removeClass("active"), $(s).stop().animate({
                    left: t.position().left
                }, 300)
            })
        })
    })
});
var slider = function () {
    function r(t, i, s) {
        for (var e = t.getElementsByTagName(i), o = 0, h = e.length, r = []; o < h; o++) e[o].className == s && r.push(e[o]);
        return 1 == r.length && (r = r[0]), r
    }

    function t(t, i, s, e, o) {
        this.slides = [], this.over = !1, this.S = this.S0 = i, this.iW = s, this.iH = e, this.oP = o, this.oc = document.getElementById(t), this.frm = r(this.oc, "div", "slide"), this.NF = this.frm.length, this.resize();
        for (var h = 0; h < this.NF; h++) this.slides[h] = new Slide(this, h);
        (this.oc.parent = this).view = this.slides[0], this.Z = this.mx, this.oc.onmouseout = function () {
            return this.parent.mouseout(), !1
        }
    }
    return t.prototype = {
        run: function () {
            this.over = !0, this.Z += this.over ? .5 * (this.mn - this.Z) : .5 * (this.mx - this.Z), this.view.calc();
            for (var t = this.NF; t--;) this.slides[t].move()
        },
        resize: function () {
            this.wh = this.oc.clientWidth, this.ht = this.oc.clientHeight, this.wr = this.wh * this.iW, this.r = this.ht / this.wr, this.mx = this.wh / this.NF, this.mn = this.wh * (1 - this.iW) / (this.NF - 1)
        },
        mouseout: function () {
            this.over = !1
        }
    }, Slide = function (t, i) {
        this.parent = t, this.N = i, this.x0 = this.x1 = i * t.mx, this.v = 0, this.loaded = !1, this.start = new Date, this.obj = t.frm[i], this.txt = r(this.obj, "div", "text"), this.img = r(this.obj, "img", "diapo"), this.bkg = document.createElement("div"), this.bkg.className = "backgroundText", this.obj.insertBefore(this.bkg, this.txt), 0 == i && (this.obj.style.borderLeft = "none"), this.obj.style.left = Math.floor(this.x0) + "px", (this.obj.parent = this).obj.onmouseover = function () {
            return this.parent.over(), !1
        }
    }, Slide.prototype = {
        calc: function () {
            for (var t = this.parent, i = 0; i <= this.N; i++) t.slides[i].x1 = i * t.Z;
            for (i = this.N + 1; i < t.NF; i++) t.slides[i].x1 = t.wh - (t.NF - i) * t.Z
        },
        move: function () {
            var t = this.parent,
                i = (this.x1 - this.x0) / t.S;
            this.N && .5 < Math.abs(i) && (this.obj.style.left = Math.floor(this.x0 += i) + "px");
            var s = this.N < t.NF - 1 ? t.slides[this.N + 1].x0 - this.x0 : t.wh - this.x0;
            if (.5 < Math.abs(s - this.v)) this.v = s, this.cpt++;
            else if (!this.pro) {
                this.pro = !0;
                var e = new Date - this.start;
                1 < this.cpt && (t.S = Math.max(2, 28 / (e / this.cpt) * t.S0))
            }!this.loaded & this.img.complete && (this.img.style.visibility = "visible", this.loaded = !0)
        },
        over: function () {
            this.parent.resize(), this.parent.over = !0, (this.parent.view = this).start = new Date, this.cpt = 0, this.pro = !1, this.calc(),
                function (t, i) {
                    t.filters ? t.filters.alpha.opacity = Math.round(i) : t.style.opacity = i / 100
                }(this.img, 100)
        }
    }, {
        init: function () {
            this.s1 = new t("slider", 12, 1.4 / 2.9, .3125, 70), setInterval("slider.s1.run();", 20)
        }
    }
}();