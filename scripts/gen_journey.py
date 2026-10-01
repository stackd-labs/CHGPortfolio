"""Regenerate app/components/journey/{journey.css,markup.ts,init.js} from chg-journey.html,
with full-screen fill (desktop/tablet) and a phone layout layered on top.
Run from the repo root:  python scripts/gen_journey.py
Edits made directly in the generated files are overwritten on the next run."""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'design', 'chg-journey.html')
OUT = os.path.join(ROOT, 'app', 'components', 'journey')

src = open(SRC, encoding='utf-8').read()
css = src[src.index('<style>') + 7:src.index('</style>')]
body = src[src.index('<body>') + 6:src.index('<script>')]
js = src[src.index('<script>') + 8:src.index('</script>')]


def sub(text, pairs, label):
    for a, b in pairs:
        assert a in text, (label, a[:70])
        text = text.replace(a, b)
    return text


# ============================ CSS ============================
css = sub(css, [
    ("body{margin:0;background:#1E1A17;font-family:'Geist',ui-sans-serif,system-ui,sans-serif;color:#211C18}",
     ".jr-root{position:fixed;inset:0;z-index:0;overflow:hidden;background:#1E1A17;font-family:'Geist',ui-sans-serif,system-ui,sans-serif;font-weight:400;line-height:normal;color:#211C18}\n"
     ".jr-root svg text{font-family:'Geist Mono',ui-monospace,monospace}"),
    ("a{color:#B8466E}a:hover{color:#8E2F52}", ".jr-root :where(a){color:#B8466E}.jr-root :where(a:hover){color:#8E2F52}"),
    ("*{box-sizing:border-box}", ".jr-root *{box-sizing:border-box}"),
    ("html,body{height:100%}\nbody{overflow:hidden}\n", ""),
    (".viewport{position:fixed;inset:0;display:grid;place-items:center;background:#1E1A17}",
     ".viewport{position:fixed;inset:0;background:#1E1A17}"),
    (".stage{transform-origin:center center;flex-shrink:0}",
     ".stage{position:absolute;inset:0;width:auto;height:auto}"),
    ("[hidden]{display:none !important}", ".jr-root [hidden]{display:none !important}"),
], 'css')

css += r"""
/* ================= RESPONSIVE LAYER (added) =================
   The design is authored on a 1440x900 canvas. Each scene draws that canvas inside
   a .frame, scaled to fit, while backgrounds and chrome extend to the real screen
   edges. JS (fit) sets --ox/--oy = the extra room beyond the canvas, in canvas px. */
.frame{position:absolute;left:0;top:0;width:1440px;height:900px;transform-origin:0 0}
.o-head{top:calc(-1 * var(--oy, 0px)) !important;left:calc(-1 * var(--ox, 0px)) !important;right:calc(-1 * var(--ox, 0px)) !important}
.topbar{top:calc(-1 * var(--oy, 0px));left:calc(-1 * var(--ox, 0px));right:calc(-1 * var(--ox, 0px))}
.rail{bottom:calc(22px - var(--oy, 0px))}
.panel:focus{outline:none}
.enter-tag span{white-space:nowrap}
.ibtn,.ipill,.pbtn,.btn{white-space:nowrap}
@media (max-width:350px){.stage[data-mode="m"] .pf .btn{padding:0 12px;font-size:12px}.stage[data-mode="m"] .topbar .ibtn{padding:0 10px}}
.m-overlay{display:none}
.jr-status{font:500 12px 'Geist Mono',ui-monospace,monospace;color:#6B5E53}
#panelTitle{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}
.ph > div:first-child{min-width:0}

/* ---------- phone + portrait tablet ---------- */
.stage[data-mode="m"] .o-desk{display:none !important}
.stage[data-mode="m"] .m-overlay{display:block;position:absolute;inset:0;z-index:5;pointer-events:none;transition:opacity .45s ease}
.stage[data-mode="m"] #officeScene.zooming .m-overlay{opacity:0}
.m-overlay > *{pointer-events:auto}
.m-head{position:absolute;left:0;right:0;top:0;padding:calc(14px + env(safe-area-inset-top)) 20px 0;display:flex;flex-direction:column;gap:10px;align-items:flex-start}
.m-name{display:flex;flex-direction:column;gap:4px}
.m-name .serif{font-size:26px;line-height:1;color:#211C18}
.m-name .mono{font-size:10px;letter-spacing:.14em;color:#6B5E53}
.m-pill{display:inline-flex;align-items:center;gap:8px;font-size:12px;color:#211C18;background:rgba(255,253,249,.8);padding:7px 12px;border-radius:999px;border:1px solid rgba(33,28,24,.1)}
.m-bottom{position:absolute;left:0;right:0;bottom:0;padding:0 20px calc(22px + env(safe-area-inset-bottom));display:flex;flex-direction:column;gap:14px}
.m-bottom h1{margin:0;font-size:clamp(34px,10vw,52px);line-height:1;letter-spacing:-.02em;color:#211C18}
.m-bottom h1 em{color:#B8466E}
.m-actions{display:flex;flex-wrap:wrap;gap:10px}
.m-actions .btn{justify-content:center}
.m-hint{font-size:11px;letter-spacing:.1em;color:#4A4038}

.stage[data-mode="m"] .inside .frame{width:100%;height:100%;transform:none !important}
.stage[data-mode="m"] .bootline{display:none}
.stage[data-mode="m"] .node .nlab{display:none}
.stage[data-mode="m"] .topbar{top:0;left:0;right:0;height:calc(56px + env(safe-area-inset-top));padding:env(safe-area-inset-top) 12px 0 16px}
.stage[data-mode="m"] .topbar .mono{display:none}
.stage[data-mode="m"] .intro{left:20px;right:20px;width:auto;top:calc(var(--band, 300px) + 8px);gap:12px}
.stage[data-mode="m"] .intro h2{font-size:34px !important;white-space:normal !important}
.stage[data-mode="m"] .intro > div:last-child{flex-wrap:wrap}
.stage[data-mode="m"] .rail{left:0;right:0;bottom:0;height:auto;display:flex;gap:8px;overflow-x:auto;padding:10px 12px calc(10px + env(safe-area-inset-bottom));background:linear-gradient(rgba(30,26,23,0),#1E1A17 30%);scrollbar-width:none;-webkit-overflow-scrolling:touch}
.stage[data-mode="m"] .rail::-webkit-scrollbar{display:none}
.stage[data-mode="m"] .rb{flex:0 0 auto;min-width:112px;height:48px}
.stage[data-mode="m"] .inside.has-panel .rail{display:none}
.stage[data-mode="m"] .panel{left:0;right:0;top:calc(56px + env(safe-area-inset-top));bottom:0;width:auto;height:auto;border-radius:18px 18px 0 0;animation:sheetIn .5s cubic-bezier(.2,.9,.2,1) both;z-index:30}
.stage[data-mode="m"] .ph{height:56px;padding:0 10px 0 16px;gap:8px}
#panelNum,.ph .pbtn{white-space:nowrap;flex-shrink:0}
@media (max-width:420px){.stage[data-mode="m"] .ph .pbtn{padding:0 12px;font-size:0;gap:0}.stage[data-mode="m"] .ph .pbtn svg{width:18px;height:18px}}
.stage[data-mode="m"] .pbody{padding:20px 18px 28px;-webkit-overflow-scrolling:touch}
.stage[data-mode="m"] .pf{height:auto;min-height:68px;padding:10px 12px calc(10px + env(safe-area-inset-bottom))}
.stage[data-mode="m"] .pf .btn{height:44px;padding:0 16px;font-size:13px}
.stage[data-mode="m"] .pbody h2{font-size:32px !important}
.stage[data-mode="m"] .g-about,.stage[data-mode="m"] .g-3,.stage[data-mode="m"] .g-2{grid-template-columns:minmax(0,1fr) !important}
.stage[data-mode="m"] .g-4{grid-template-columns:repeat(2,minmax(0,1fr)) !important}
.stage[data-mode="m"] .g-prev{grid-template-columns:84px minmax(0,1fr) !important}
.stage[data-mode="m"] .portrait-col{flex-direction:row !important;align-items:center}
.stage[data-mode="m"] .portrait{width:112px !important;height:140px !important;flex-shrink:0}
.stage[data-mode="m"] .w-name{font-size:28px !important}
.stage[data-mode="m"] .send-row{flex-wrap:wrap}
.stage[data-mode="m"] .field input,.stage[data-mode="m"] .field textarea{font-size:16px}
@media (min-width:640px){
  .stage[data-mode="m"] .g-3{grid-template-columns:repeat(3,minmax(0,1fr)) !important}
  .stage[data-mode="m"] .g-2{grid-template-columns:repeat(2,minmax(0,1fr)) !important}
  .stage[data-mode="m"] .g-4{grid-template-columns:repeat(4,minmax(0,1fr)) !important}
  .stage[data-mode="m"] .pbody{padding:28px 32px}
}
/* landscape phones: no room for the route band */
@media (max-height:500px){
  .stage[data-mode="m"] .inside .map{display:none}
  .stage[data-mode="m"] .intro{top:72px}
  .stage[data-mode="m"] .m-bottom h1{font-size:30px}
  .stage[data-mode="m"] .m-hint{display:none}
}
@keyframes sheetIn{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:none}}
"""
css = ("@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@400;500&display=swap');\n"
       "/* CHG journey UI (v2). Generated by scripts/gen_journey.py. V1 lives at app/v1. */\n" + css)
open(os.path.join(OUT, 'journey.css'), 'w', encoding='utf-8').write(css)

# ============================ MARKUP ============================
body = sub(body, [
    ('<div class="stage" id="stage" style="width: 1440px; height: 900px">', '<div class="stage" id="stage">'),
    # office canvas goes inside a scaled frame
    ('<div id="officeScene">\n<div class="office" id="office">', '<div id="officeScene">\n<div class="frame" id="officeFrame">\n<div class="office" id="office">'),
    ('<svg width="1440" height="900" viewBox="0 0 1440 900" style="position: absolute; left: 0; top: 0" aria-hidden="true">\n<defs>\n<linearGradient id="sky"',
     '<svg width="1440" height="900" viewBox="0 0 1440 900" style="position: absolute; left: 0; top: 0; overflow: visible" aria-hidden="true">\n<defs>\n<linearGradient id="sky"'),
    # extend wall + floor well past the canvas so any screen shape is filled
    ('<rect x="0" y="0" width="1440" height="700" fill="#EFE6D8"></rect>', '<rect x="-4000" y="-3000" width="9440" height="3700" fill="#EFE6D8"></rect>'),
    ('<rect x="0" y="600" width="1440" height="2" fill="#E3D6C2"></rect>', '<rect x="-4000" y="600" width="9440" height="2" fill="#E3D6C2"></rect>'),
    ('<rect x="0" y="690" width="1440" height="12" fill="#E4D6C1"></rect>', '<rect x="-4000" y="690" width="9440" height="12" fill="#E4D6C1"></rect>'),
    ('<rect x="0" y="702" width="1440" height="198" fill="#D8C6AB"></rect>', '<rect x="-4000" y="702" width="9440" height="3000" fill="#D8C6AB"></rect>'),
    ('<path d="M0 760H1440M0 830H1440" stroke="#CDB99C" stroke-width="1"></path>', '<path d="M-4000 760H5440M-4000 830H5440" stroke="#CDB99C" stroke-width="1"></path>'),
    ('<polygon points="106,554 454,554 760,900 250,900" fill="#FFF4E2" opacity=".45"></polygon>', '<polygon points="106,554 454,554 1202,1400 458,1400" fill="#FFF4E2" opacity=".45"></polygon>'),
    ('<div class="enter-tag fadeout">', '<div class="enter-tag fadeout o-desk">'),
    ('<a class="btn btn-s" href="mailto:chanel@stackdstudiosai.com">chanel@stackdstudiosai.com</a>', '<button class="btn btn-s" data-action="contact">Contact me</button>'),
    ('<header class="fadeout o-in" style="--i: 0;', '<header class="fadeout o-in o-desk o-head" style="--i: 0;'),
    ('<div class="fadeout" style="position: absolute; left: 0; right: 0; top: 724px;', '<div class="fadeout o-desk" style="position: absolute; left: 0; right: 0; top: 724px;'),
    # close the frame, then the phone overlay (outside the scaled canvas)
    ('''</div>
</div>
</div>

<!-- ================================================= -->
<!-- SCENE 2''', '''</div>
</div>
</div>
<div class="m-overlay">
<div class="m-head">
<div class="m-name"><span class="serif">Chanel Hicks-Gray</span><span class="mono">AI ARCHITECT &amp; BUILDER</span></div>
<div class="m-pill"><span class="pulse"></span><span>Taking builds, rescues &amp; AI architect roles</span></div>
</div>
<div class="m-bottom">
<h1 class="serif">I build your app. <em>Or I’ll rescue it.</em></h1>
<div class="m-actions">
<button class="btn btn-p" data-action="enter">Step inside the system<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></button>
<button class="btn btn-s" data-action="contact">Contact me</button>
</div>
<div class="mono m-hint">OR TAP THE SCREEN ABOVE</div>
</div>
</div>
</div>

<!-- ================================================= -->
<!-- SCENE 2'''),
    # inside: everything but the dot field goes in a scaled frame
    ('<div class="inside">\n<div class="idots"></div>\n', '<div class="inside">\n<div class="idots"></div>\n<div class="frame" id="insideFrame">\n'),
    ('</section>\n</div>\n</template>\n\n<!-- ---------- stop content', '</section>\n</div>\n</div>\n</template>\n\n<!-- ---------- stop content'),
    ('<section class="panel" id="panel" hidden>', '<section class="panel" id="panel" tabindex="-1" hidden>'),
    ('<button class="pbtn" data-action="map" style=', '<button class="pbtn" data-action="map" aria-label="View map" style='),
    # stop content: classes the phone layout can target
    ('<div style="display: grid; grid-template-columns: 200px minmax(0, 1fr); gap: 28px">', '<div class="g-about" style="display: grid; grid-template-columns: 200px minmax(0, 1fr); gap: 28px">'),
    ('<div style="display: flex; flex-direction: column; gap: 14px">\n<div style="position: relative; width: 200px; height: 250px;',
     '<div class="portrait-col" style="display: flex; flex-direction: column; gap: 14px">\n<div class="portrait" style="position: relative; width: 200px; height: 250px;'),
    ('<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px">', '<div class="g-4" style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px">'),
    ('<div style="position: relative; height: 168px; display: grid; grid-template-columns: 140px minmax(0, 1fr); gap: 14px; padding: 14px">',
     '<div class="g-prev" style="position: relative; height: 168px; display: grid; grid-template-columns: 140px minmax(0, 1fr); gap: 14px; padding: 14px">'),
    ('<div class="serif" data-slot="name" style="font-size: 34px; line-height: 1"></div>', '<div class="serif w-name" data-slot="name" style="font-size: 34px; line-height: 1"></div>'),
    ('<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px">\n<div style="padding: 20px;',
     '<div class="g-3" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px">\n<div style="padding: 20px;'),
    ('<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px">', '<div class="g-3" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px">'),
    ('<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px" data-slot="items">', '<div class="g-2" style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px" data-slot="items">'),
    ('<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px">\n<div class="field">', '<div class="g-2" style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px">\n<div class="field">'),
    # real portrait
    ('''<div class="serif" style="font-size: 64px; line-height: 1; color: #7E5E22">CHG</div>
<div class="mono" style="font-size: 10px; color: #6B5E53">[YOUR PORTRAIT]</div>
<div class="scan" style="opacity: .6"></div>''', '''<img src="/chanel.jpeg" alt="Chanel Hicks-Gray" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: top; display: block">
<div class="scan" style="opacity: .35"></div>'''),
    ('border-radius: 14px; background: #EDE3D3; border: 1px dashed rgba(33,28,24,.25); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; overflow: hidden">',
     'border-radius: 14px; background: #EDE3D3; border: 1px solid rgba(33,28,24,.15); overflow: hidden">'),
    # contact form -> /api/contact (Resend)
    ('<div style="display: flex; justify-content: space-between; align-items: center; gap: 12px">\n<a class="btn btn-p" href="mailto:chanel@stackdstudiosai.com?subject=Project%20inquiry">Send message',
     '<div class="send-row" style="display: flex; justify-content: space-between; align-items: center; gap: 12px">\n<button class="btn btn-p" data-action="send" id="cf-send">Send message'),
    ('<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path></svg></a>', '<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path></svg></button>'),
    ('<a href="mailto:chanel@stackdstudiosai.com" class="mono" style="font-size: 12px">chanel@stackdstudiosai.com</a>\n</div>',
     '<a href="mailto:chanel@stackdstudiosai.com" class="mono" style="font-size: 12px">chanel@stackdstudiosai.com</a>\n</div>\n<span class="jr-status" id="cf-status" aria-live="polite"></span>'),
    ('<textarea id="cf-msg" rows="4"></textarea>', '<textarea id="cf-msg" rows="4" placeholder="What are you building, what is broken, or what is the role?"></textarea>'
     # Spam honeypot, see lib/spam-guard.ts. Meaningless name so autofill never fills it.
     '<div aria-hidden="true" style="display:none"><label for="hp_ref">Leave this blank</label><input id="hp_ref" name="hp_ref" type="text" tabindex="-1" autocomplete="off"></div>'),
], 'markup')
body = body.replace('<a class="soc" href=', '<a class="soc" target="_blank" rel="noopener noreferrer" href=')
open(os.path.join(OUT, 'markup.ts'), 'w', encoding='utf-8').write(
    "// Journey UI markup. GENERATED by scripts/gen_journey.py from design/chg-journey.html.\n"
    "// To change copy, edit design/chg-journey.html and rerun the script (edits here get overwritten).\n"
    "export const JOURNEY_MARKUP = " + json.dumps(body.strip(), ensure_ascii=False) + ";\n")

# ============================ JS ============================
js = js.strip()
assert js.startswith("(function () {") and js.endswith("})();")
inner = js[len("(function () {"):-len("})();")]
inner = inner.replace("  'use strict';\n", "", 1)
inner = sub(inner, [
    ("var $ = function (sel, root) { return (root || document).querySelector(sel); };",
     "var $ = function (sel, scope) { return (scope || root).querySelector(sel); };"),
    ("var state = { scene: 'office', zooming: false, stop: -1, last: -1, visited: {}, project: 0, tab: 0 };",
     "var state = { scene: 'office', zooming: false, stop: -1, last: -1, visited: {}, project: 0, tab: 0, mobile: false, vw: 0, vh: 0 };"),
    # new fit: fill the screen instead of letterboxing
    ('''  var stage = $('#stage');
  function fit() {
    var s = Math.min(window.innerWidth / 1440, window.innerHeight / 900);
    stage.style.transform = 'scale(' + s + ')';
  }
  window.addEventListener('resize', fit);
  fit();''', '''  var stage = $('#stage');
  // Phone / portrait-tablet layout below this width, or when taller than wide.
  function isMobile(vw, vh) { return vw < 900 || vw / vh < 1.1; }
  function place(frame, s, tx, ty) {
    if (frame) frame.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + s + ')';
  }
  function fit() {
    var vw = window.innerWidth, vh = window.innerHeight;
    state.vw = vw; state.vh = vh;
    state.mobile = isMobile(vw, vh);
    stage.dataset.mode = state.mobile ? 'm' : 'd';
    var s, tx, ty;
    if (state.mobile) {
      // crop the office around the monitor, which sits at (760, 422) on the canvas
      var short = vh < 500;
      s = Math.min(vw / 520, (vh * (short ? 0.36 : 0.42)) / 254, 1.25);
      tx = vw / 2 - 760 * s;
      ty = vh * (short ? 0.30 : 0.37) - 422 * s;
      stage.style.setProperty('--ox', '0px');
      stage.style.setProperty('--oy', '0px');
    } else {
      // contain the canvas, let backgrounds and chrome run to the real edges
      s = Math.min(vw / 1440, vh / 900);
      tx = (vw - 1440 * s) / 2;
      ty = (vh - 900 * s) / 2;
      stage.style.setProperty('--ox', (tx / s) + 'px');
      stage.style.setProperty('--oy', (ty / s) + 'px');
    }
    place($('#officeFrame'), s, tx, ty);
    if (!state.mobile) place($('#insideFrame'), s, tx, ty);
    var k = Math.min(vw / 1400, (vh * 0.34) / 900);
    state.mapK = k;
    stage.style.setProperty('--band', (60 + 900 * k) + 'px');
    render(false);
  }
  window.addEventListener('resize', fit);
  cleanups.push(function () { window.removeEventListener('resize', fit); });'''),
    ("  tick();\n  setInterval(tick, 15000);", "  tick();\n  var clock = setInterval(tick, 15000);\n  cleanups.push(function () { clearInterval(clock); });"),
    ('''  function enter() {
    if (state.zooming) return;''', '''  function enter(thenStop) {
    if (state.zooming) return;'''),
    ('''    state.zooming = true;
    office.classList.add('zoom');
    setTimeout(function () {''', '''    state.zooming = true;
    office.classList.add('zoom');
    officeScene.classList.add('zooming');
    zoomTimer = setTimeout(function () {'''),
    ('''      buildInside();
      render();
      state.zooming = false;''', '''      buildInside();
      fit();
      state.zooming = false;
      if (thenStop != null) { go(thenStop); return; }
      var start = $('[data-action="start"]');
      if (start) start.focus({ preventScroll: true });'''),
    ("    if (a === 'enter') enter();", "    if (a === 'enter') enter();\n    else if (a === 'contact') { if (state.scene === 'inside') go(5); else enter(5); }"),
    ('''    requestAnimationFrame(function () { office.classList.remove('zoom'); });''',
     '''    setTimeout(function () { office.classList.remove('zoom'); officeScene.classList.remove('zooming'); }, 30);'''),
    # map: pan on desktop, fixed band on phones
    ('''    map.style.transform = stop >= 0 ? 'translate(' + (290 - STOPS[stop].x) + 'px,' + (440 - STOPS[stop].y) + 'px)' : 'translate(0px,0px)';''',
     '''    if (state.mobile) {
      var k = state.mapK || 0.25;
      map.style.transform = 'translate(' + ((state.vw - 1440 * k) / 2) + 'px,56px) scale(' + k + ')';
    } else {
      map.style.transform = stop >= 0 ? 'translate(' + (290 - STOPS[stop].x) + 'px,' + (440 - STOPS[stop].y) + 'px)' : 'translate(0px,0px)';
    }
    var insideEl = $('.inside');
    if (insideEl) insideEl.classList.toggle('has-panel', stop >= 0);'''),
    ("    if (panel.hidden) { panel.hidden = false; swapContent = true; }",
     "    var opened = false;\n    if (panel.hidden) { panel.hidden = false; swapContent = true; opened = true; }"),
    ('''      if (s.id === 'stack') renderStack();
    }''', '''      if (s.id === 'stack') renderStack();
      if (opened) panel.focus({ preventScroll: true });
    }'''),
    ("document.querySelectorAll(", "root.querySelectorAll("),
    ("  document.addEventListener('click', function (e) {",
     "  root.addEventListener('click', onClick);\n  cleanups.push(function () { root.removeEventListener('click', onClick); });\n  function onClick(e) {"),
    ("    else if (a === 'tab') { state.tab = +t.dataset.index; renderStack(); }\n  });",
     "    else if (a === 'tab') { state.tab = +t.dataset.index; renderStack(); }\n    else if (a === 'send') send();\n  }\n" + r'''
  // Keyboard: Esc closes the panel, then leaves the system. Arrows step between stops.
  function onKey(e) {
    if (state.scene !== 'inside') return;
    var tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    if (e.key === 'Escape') { if (state.stop >= 0) { state.stop = -1; render(); } else exit(); }
    else if (e.key === 'ArrowRight' && state.stop >= 0 && state.stop < 5) go(state.stop + 1);
    else if (e.key === 'ArrowLeft' && state.stop > 0) go(state.stop - 1);
  }
  document.addEventListener('keydown', onKey);
  cleanups.push(function () { document.removeEventListener('keydown', onKey); });'''),
    ('''    state.scene = 'inside';
    buildInside(); render();
  }''', '''    state.scene = 'inside';
    buildInside();
  }
  fit();'''),
], 'js')

send = r'''
  /* ================= CONTACT (Resend via /api/contact) ================= */
  function send() {
    var name = $('#cf-name'), email = $('#cf-email'), msg = $('#cf-msg'), hp = $('#hp_ref');
    var btn = $('#cf-send'), status = $('#cf-status');
    if (!name || !email || !msg) return;
    if (!name.value.trim() || !email.value.trim() || !msg.value.trim()) {
      status.textContent = 'Name, email, and message are all needed.';
      return;
    }
    btn.disabled = true;
    status.textContent = 'Sending...';
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.value.trim(), email: email.value.trim(), message: msg.value.trim(),
        hp_ref: hp ? hp.value : '', elapsedMs: Date.now() - openedAt })
    }).then(function (res) {
      if (!res.ok) throw new Error('send failed');
      name.value = ''; email.value = ''; msg.value = '';
      status.textContent = 'Message received. I will be in touch within 24 to 48 hours.';
    }).catch(function () {
      btn.disabled = false;
      status.textContent = 'That did not send. Email chanel@stackdstudiosai.com instead.';
    });
  }
'''
inner = inner.replace("  /* ================= EVENTS ================= */", send + "\n  /* ================= EVENTS ================= */")

out = '''// Journey UI behaviour. GENERATED by scripts/gen_journey.py from design/chg-journey.html. Scoped to `root` so it can
// mount and unmount inside React. Returns a cleanup function.
// Responsive layer: fit() scales the 1440x900 canvas to fill any screen, and switches
// to the phone layout (stage[data-mode="m"]) under 900px wide or in portrait.
export function initJourney(root) {
  var cleanups = [];
  var zoomTimer = null;
  var openedAt = Date.now(); // spam screening: elapsedMs, see lib/spam-guard.ts
  cleanups.push(function () { if (zoomTimer) clearTimeout(zoomTimer); });
''' + inner + '''
  return function () { cleanups.forEach(function (fn) { fn(); }); };
}
'''
open(os.path.join(OUT, 'init.js'), 'w', encoding='utf-8').write(out)
print('ok')
