!(function () {
  "use strict";
  !(function () {
    class t {
      constructor(t) {
        (this.id = -1),
          (this.nativePointer = t),
          (this.pageX = t.pageX),
          (this.pageY = t.pageY),
          (this.clientX = t.clientX),
          (this.clientY = t.clientY),
          self.Touch && t instanceof Touch
            ? (this.id = t.identifier)
            : e(t) && (this.id = t.pointerId);
      }
      getCoalesced() {
        return "getCoalescedEvents" in this.nativePointer
          ? this.nativePointer.getCoalescedEvents().map((e) => new t(e))
          : [this];
      }
    }
    const e = (t) => self.PointerEvent && t instanceof PointerEvent,
      i = () => {};
    class s {
      constructor(t, e) {
        (this._element = t),
          (this.startPointers = []),
          (this.currentPointers = []);
        const { start: s = () => !0, move: n = i, end: o = i } = e;
        (this._startCallback = s),
          (this._moveCallback = n),
          (this._endCallback = o),
          (this._pointerStart = this._pointerStart.bind(this)),
          (this._touchStart = this._touchStart.bind(this)),
          (this._move = this._move.bind(this)),
          (this._triggerPointerEnd = this._triggerPointerEnd.bind(this)),
          (this._pointerEnd = this._pointerEnd.bind(this)),
          (this._touchEnd = this._touchEnd.bind(this)),
          self.PointerEvent
            ? this._element.addEventListener("pointerdown", this._pointerStart)
            : (this._element.addEventListener("mousedown", this._pointerStart),
              this._element.addEventListener("touchstart", this._touchStart),
              this._element.addEventListener("touchmove", this._move),
              this._element.addEventListener("touchend", this._touchEnd));
      }
      _triggerPointerStart(t, e) {
        return (
          !!this._startCallback(t, e) &&
          (this.currentPointers.push(t), this.startPointers.push(t), !0)
        );
      }
      _pointerStart(i) {
        0 === i.button &&
          this._triggerPointerStart(new t(i), i) &&
          (e(i)
            ? (this._element.setPointerCapture(i.pointerId),
              this._element.addEventListener("pointermove", this._move),
              this._element.addEventListener("pointerup", this._pointerEnd))
            : (window.addEventListener("mousemove", this._move),
              window.addEventListener("mouseup", this._pointerEnd)));
      }
      _touchStart(e) {
        for (const i of Array.from(e.changedTouches))
          this._triggerPointerStart(new t(i), e);
      }
      _move(e) {
        const i = this.currentPointers.slice(),
          s =
            "changedTouches" in e
              ? Array.from(e.changedTouches).map((e) => new t(e))
              : [new t(e)],
          n = [];
        for (const t of s) {
          const e = this.currentPointers.findIndex((e) => e.id === t.id);
          -1 !== e && (n.push(t), (this.currentPointers[e] = t));
        }
        0 !== n.length && this._moveCallback(i, n, e);
      }
      _triggerPointerEnd(t, e) {
        const i = this.currentPointers.findIndex((e) => e.id === t.id);
        return (
          -1 !== i &&
          (this.currentPointers.splice(i, 1),
          this.startPointers.splice(i, 1),
          this._endCallback(t, e),
          !0)
        );
      }
      _pointerEnd(i) {
        if (this._triggerPointerEnd(new t(i), i))
          if (e(i)) {
            if (this.currentPointers.length) return;
            this._element.removeEventListener("pointermove", this._move),
              this._element.removeEventListener("pointerup", this._pointerEnd);
          } else
            window.removeEventListener("mousemove", this._move),
              window.removeEventListener("mouseup", this._pointerEnd);
      }
      _touchEnd(e) {
        for (const i of Array.from(e.changedTouches))
          this._triggerPointerEnd(new t(i), e);
      }
    }
    var n = "styles_scrubber__39cN6",
      o = "styles_two-up-handle__2kVsP";
    !(function (t, e) {
      void 0 === e && (e = {});
      var i = e.insertAt;
      if (t && "undefined" != typeof document) {
        var s = document.head || document.getElementsByTagName("head")[0],
          n = document.createElement("style");
        (n.type = "text/css"),
          "top" === i && s.firstChild
            ? s.insertBefore(n, s.firstChild)
            : s.appendChild(n),
          n.styleSheet
            ? (n.styleSheet.cssText = t)
            : n.appendChild(document.createTextNode(t));
      }
    })(
      'two-up{display:grid;position:relative;--split-point:0;--accent-color:#777;--track-color:var(--accent-color);--thumb-background:#fff;--thumb-color:var(--accent-color);--thumb-size:62px;--bar-size:6px;--bar-touch-size:30px}two-up>*{grid-area:1/1}two-up[legacy-clip-compat]>:not(.styles_two-up-handle__2kVsP){position:absolute}.styles_two-up-handle__2kVsP{touch-action:none;position:relative;width:var(--bar-touch-size);transform:translateX(var(--split-point)) translateX(-50%);will-change:transform;cursor:ew-resize}.styles_two-up-handle__2kVsP:before{content:"";display:block;height:100%;width:var(--bar-size);margin:0 auto;box-shadow:inset calc(var(--bar-size) / 2) 0 0 rgba(0,0,0,.1),0 1px 4px rgba(0,0,0,.4);background:var(--track-color)}.styles_scrubber__39cN6{display:flex;position:absolute;top:50%;left:50%;transform-origin:50% 50%;transform:translate(-50%,-50%);width:var(--thumb-size);height:calc(var(--thumb-size) * .9);background:var(--thumb-background);border:1px solid rgba(0,0,0,.2);border-radius:var(--thumb-size);box-shadow:0 1px 4px rgba(0,0,0,.1);color:var(--thumb-color);box-sizing:border-box;padding:0 calc(var(--thumb-size) * .24)}.styles_scrubber__39cN6 svg{flex:1}two-up[orientation=vertical] .styles_two-up-handle__2kVsP{width:auto;height:var(--bar-touch-size);transform:translateY(var(--split-point)) translateY(-50%);cursor:ns-resize}two-up[orientation=vertical] .styles_two-up-handle__2kVsP:before{width:auto;height:var(--bar-size);box-shadow:inset 0 calc(var(--bar-size) / 2) 0 rgba(0,0,0,.1),0 1px 4px rgba(0,0,0,.4);margin:calc((var(--bar-touch-size) - var(--bar-size)) / 2) 0 0}two-up[orientation=vertical] .styles_scrubber__39cN6{box-shadow:1px 0 4px rgba(0,0,0,.1);transform:translate(-50%,-50%) rotate(-90deg)}two-up>:first-child:not(.styles_two-up-handle__2kVsP){-webkit-clip-path:inset(0 calc(100% - var(--split-point)) 0 0);clip-path:inset(0 calc(100% - var(--split-point)) 0 0)}two-up>:nth-child(2):not(.styles_two-up-handle__2kVsP){-webkit-clip-path:inset(0 0 0 var(--split-point));clip-path:inset(0 0 0 var(--split-point))}two-up[orientation=vertical]>:first-child:not(.styles_two-up-handle__2kVsP){-webkit-clip-path:inset(0 0 calc(100% - var(--split-point)) 0);clip-path:inset(0 0 calc(100% - var(--split-point)) 0)}two-up[orientation=vertical]>:nth-child(2):not(.styles_two-up-handle__2kVsP){-webkit-clip-path:inset(var(--split-point) 0 0 0);clip-path:inset(var(--split-point) 0 0 0)}@supports not ((clip-path:inset(0 0 0 0)) or (-webkit-clip-path:inset(0 0 0 0))){two-up[legacy-clip-compat]>:first-child:not(.styles_two-up-handle__2kVsP){clip:rect(auto var(--split-point) auto auto)}two-up[legacy-clip-compat]>:nth-child(2):not(.styles_two-up-handle__2kVsP){clip:rect(auto auto auto var(--split-point))}two-up[orientation=vertical][legacy-clip-compat]>:first-child:not(.styles_two-up-handle__2kVsP){clip:rect(auto auto var(--split-point) auto)}two-up[orientation=vertical][legacy-clip-compat]>:nth-child(2):not(.styles_two-up-handle__2kVsP){clip:rect(var(--split-point) auto auto auto)}}',
    );
    const r = "legacy-clip-compat",
      a = "orientation";
    class h extends HTMLElement {
      constructor() {
        super(),
          (this._handle = document.createElement("div")),
          (this._position = 0),
          (this._relativePosition = 0.5),
          (this._positionOnPointerStart = 0),
          (this._everConnected = !1),
          (this._handle.className = o),
          new MutationObserver(() => this._childrenChange()).observe(this, {
            childList: !0,
          }),
          "ResizeObserver" in window
            ? new ResizeObserver(() => this._resetPosition()).observe(this)
            : window.addEventListener("resize", () => this._resetPosition());
        const t = new s(this._handle, {
          start: (e, i) =>
            1 !== t.currentPointers.length &&
            (i.preventDefault(),
            (this._positionOnPointerStart = this._position),
            !0),
          move: () => {
            this._pointerChange(t.startPointers[0], t.currentPointers[0]);
          },
        });
      }
      static get observedAttributes() {
        return [a];
      }
      connectedCallback() {
        this._childrenChange(),
          (this._handle.innerHTML = `<div class="${n}"><svg viewBox="0 0 27 20" fill="currentColor"><path d="M17 19.2l9.5-9.6L16.9 0zM9.6 0L0 9.6l9.6 9.6z"/></svg></div>`),
          this._everConnected ||
            (this._resetPosition(), (this._everConnected = !0));
      }
      attributeChangedCallback(t) {
        t === a && this._resetPosition();
      }
      _resetPosition() {
        requestAnimationFrame(() => {
          const t = this.getBoundingClientRect(),
            e = "vertical" === this.orientation ? "height" : "width";
          (this._position = t[e] * this._relativePosition), this._setPosition();
        });
      }
      get legacyClipCompat() {
        return this.hasAttribute(r);
      }
      set legacyClipCompat(t) {
        t ? this.setAttribute(r, "") : this.removeAttribute(r);
      }
      get orientation() {
        const t = this.getAttribute(a);
        return t && "vertical" === t.toLowerCase() ? "vertical" : "horizontal";
      }
      set orientation(t) {
        this.setAttribute(a, t);
      }
      _childrenChange() {
        this.lastElementChild !== this._handle &&
          this.appendChild(this._handle);
      }
      _pointerChange(t, e) {
        const i = "vertical" === this.orientation ? "clientY" : "clientX",
          s = "vertical" === this.orientation ? "height" : "width",
          n = this.getBoundingClientRect();
        (this._position = this._positionOnPointerStart + (e[i] - t[i])),
          (this._position = Math.max(0, Math.min(this._position, n[s]))),
          (this._relativePosition = this._position / n[s]),
          this._setPosition();
      }
      _setPosition() {
        this.style.setProperty("--split-point", `${this._position}px`);
      }
    }
    customElements.define("two-up", h);
  })();
})();
