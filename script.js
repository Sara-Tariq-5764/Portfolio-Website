/* ============================================================
   SARA TARIQ — PORTFOLIO
   Particles · counters · reveal · nav · filters · modal · fit-text
   Vanilla JS, no dependencies. Runs on every page; each block
   no-ops when its target elements are absent.
   ============================================================ */

(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------------------------------------
     PROJECT DATA
     Edit here to add or change projects. `cat` must match one of
     the filter chips in projects.html (data-filter attribute).
     ---------------------------------------------------------- */

  var projects = [
    {
      id: 'p-fleet',
      title: 'Fleet Cost & Performance Analytics',
      subtitle: 'Kearney · PepsiCo Equipment Services · Jan 2026 – Present',
      cat: 'Operational Analytics',
      stat: 'Enterprise',
      statLabel: 'Asset Cost Analytics',
      image: 'assets/project-fleet.jpg',
      blurb: 'Large-scale operational analytics on a live client engagement — ETL and data-quality workflows, predictive models and interactive dashboards supporting asset performance and cost decisions.',
      problem: 'Enterprise equipment operations generate large volumes of service and cost data spread across disparate source systems. Aggregate spend is visible to leadership; the drivers underneath it usually are not, which means asset lifecycle and maintenance decisions get made on averages rather than evidence. The analytical problem is establishing a trusted data layer first, then building the models and reporting that let those decisions rest on something defensible.',
      method: 'Applied SQL, Excel, Python and Power BI to analyze large-scale operational datasets and support asset performance and cost analytics. Developed data-cleaning and ETL workflows, predictive analytical models, and interactive dashboards to enable data-driven decision-making across business stakeholders.',
      highlights: [
        'Developed <b>analytical frameworks</b> to identify operational performance and cost-improvement opportunities.',
        'Built <b>decision-support analytics</b> to inform asset lifecycle and maintenance strategy.',
        'Directed a <b>cross-functional consulting team</b> alongside Kearney advisors, managing scope, delivery cadence, action tracking and risk escalation.',
        'Collaborated with <b>finance and operations stakeholders</b> to align analytical outputs with business KPIs and decision-making requirements.'
      ],
      kpis: [
        ['Live', 'client engagement'],
        ['Multi-phase', 'delivery'],
        ['Cross-functional', 'team lead'],
        ['Executive', 'readouts']
      ],
      tags: ['SQL', 'Python', 'Power BI (DAX)', 'Advanced Excel', 'ETL & Data Quality', 'Predictive Modeling'],
      linkText: 'Client engagement under NDA — methodology available on request',
      link: null
    },
    {
      id: 'p-risk',
      title: 'Financial Risk Classification',
      subtitle: 'Purdue University · Oct – Dec 2025',
      cat: 'Predictive Modeling',
      stat: '91.7%',
      statLabel: 'Peak Model AUC',
      image: 'assets/project-risk.jpg',
      blurb: 'An XGBoost and LightGBM ensemble built to surface the high-risk minority cases that severe class imbalance makes nearly invisible to standard classifiers.',
      problem: 'High-risk cases are rare in most operational populations, which means a model optimized for overall accuracy will quietly ignore precisely the cases that carry the cost. The practical question is not whether a classifier performs well on average, but whether it identifies the minority events that matter.',
      method: 'Built an optimized ensemble combining XGBoost and LightGBM across high-dimensional financial data. Applied SMOTE to correct severe class imbalance so the model learned the minority cases rather than discarding them, and used L1/L2 regularization for feature selection and generalization. Ranked the indicators contributing most to each prediction so the output could be read as an explanation, not just a score.',
      highlights: [
        'Reached <b>91.7% AUC</b> on a two-model ensemble stack with an interpretable driver ranking attached to the score.',
        '<b>SMOTE resampling</b> corrected severe class imbalance so minority events drove the decision boundary instead of being averaged away.',
        '<b>L1/L2 regularization</b> handled feature selection and generalization across a high-dimensional financial feature space.',
        'Transferable to anomaly detection, exception flagging and forecasting wherever the rare event is the expensive one.'
      ],
      kpis: [
        ['91.7%', 'AUC'],
        ['2-model', 'ensemble'],
        ['SMOTE', 'imbalance handling'],
        ['L1/L2', 'regularization']
      ],
      tags: ['Python', 'XGBoost', 'LightGBM', 'SMOTE', 'Scikit-learn', 'SHAP'],
      linkText: 'View on GitHub',
      link: 'https://github.com/Sara-Tariq-5764'
    },
    {
      id: 'p-pricing',
      title: 'Large-Scale Pricing Analysis',
      subtitle: 'Purdue University · Aug – Oct 2025',
      cat: 'Pricing & Strategy',
      stat: '100K+',
      statLabel: 'Product Records Tested',
      image: 'assets/project-pricing.jpg',
      blurb: 'Separated the product specifications that genuinely move market valuation from the ones teams assume matter, across 100,000+ records.',
      problem: 'Pricing decisions are frequently made on category intuition, leaving the central question unanswered: which attributes genuinely move what customers will pay, and which are assumed to matter but do not? Without that separation, cost and pricing levers get pulled on the wrong variables.',
      method: 'Analyzed 100,000+ product records in Python, using exploratory data analysis and statistical hypothesis testing to isolate the relationship between individual specifications and market valuation. Tested attribute-level effects rather than relying on aggregate correlation, then translated the statistically supported drivers into pricing optimization and positioning recommendations.',
      highlights: [
        'Tested <b>attribute-level effects</b> rather than aggregate correlation, which is where intuition-led pricing usually goes wrong.',
        'Converted statistically supported drivers into <b>pricing optimization and positioning recommendations</b> a business team can price against.',
        'Demonstrates comfort at scale: 100,000+ records handled end to end in Pandas and NumPy.'
      ],
      kpis: [
        ['100K+', 'records'],
        ['Hypothesis', 'testing framework'],
        ['Attribute', 'level driver mapping']
      ],
      tags: ['Python', 'Pandas', 'NumPy', 'Hypothesis Testing', 'EDA'],
      linkText: 'View on GitHub',
      link: 'https://github.com/Sara-Tariq-5764'
    },
    {
      id: 'p-loreal',
      title: 'L’Oréal Paris Beauty Assistant',
      subtitle: 'Purdue University · Chatbase · December 2025',
      cat: 'Conversational AI',
      stat: '20',
      statLabel: 'Training Sources Curated',
      image: 'assets/project-loreal.jpg',
      blurb: 'A deployed AI beauty advisor trained on 20 curated sources, answering product, shade-matching and application questions across L’Oréal’s full portfolio — with every limitation documented rather than hidden.',
      problem: 'Beauty customers shopping online lose the single most valuable part of the in-store experience: a professional advisor who can match a shade, read a skin type and explain how to apply the product. Email support answers in hours, by which point the purchase decision has already been made or abandoned. The business problem is not information availability — L’Oréal publishes all of it — but the absence of anyone to interpret it at the moment of decision.',
      method: 'Built and deployed a conversational agent on Chatbase, trained on a deliberately mixed corpus: 10 authoritative website sources spanning official L’Oréal catalogues, the beauty magazine tutorial library and four retailer sites for real-world availability data, plus 10 custom-authored Q&A documents written to close the gaps those sources left. Question design was driven by four independent research methods — customer journey mapping, analysis of established beauty e-commerce chatbot patterns, social and review-thread mining, and category expertise — which produced seven question categories with an estimated frequency distribution used to prioritise training depth. Deployed to web.ics.purdue.edu with brand-aligned voice, colour and iconography.',
      highlights: [
        'Trained on <b>20 sources across two types</b> — official and retailer web content for accuracy and availability, custom Q&A documents for the structured answers the public sources could not provide.',
        'Prioritised training depth against a researched frequency distribution: <b>product discovery 30%, product information 25%, shade matching and application 15% each</b>, with store location, recommendations and support making up the remainder.',
        'Documented <b>seven named limitations</b> — live inventory, visual shade matching from photos, dermatological advice, competitor cross-reference, cross-session memory, multilingual nuance and multi-step troubleshooting — each paired with an explicit mitigation rather than left to fail silently.',
        'Drew <b>deliberate scope boundaries</b>, excluding payments, account management, returns and medical advice, so the agent fails safely at the edges of its competence.',
        'Specified a <b>three-phase roadmap</b> through analytics instrumentation, store-locator API integration, and image-recognition shade matching with CRM memory — written as a handover document for whoever maintains it next.'
      ],
      kpis: [
        ['20', 'training sources'],
        ['4', 'research methods'],
        ['7', 'question categories'],
        ['24/7', 'availability']
      ],
      tags: ['Chatbase', 'Conversational Design', 'Knowledge-Base Training', 'Customer Journey Mapping', 'Web Deployment'],
      linkText: 'Open the project documentation',
      link: 'assets/Loreal_AI_Chatbot_Explanation_Report.pdf',
      link2: 'https://web.ics.purdue.edu/~tariq15/chatbot.php',
      link2Text: 'Try the live chatbot'
    },
    {
      id: 'p-slice',
      title: 'Slice Slice Baby — Ordering Bot',
      subtitle: 'Purdue University · Chatfuel + Facebook Messenger · December 2025',
      cat: 'Conversational AI',
      stat: '11',
      statLabel: 'Conversational Blocks Built',
      image: 'assets/project-slice.jpg',
      blurb: 'A live Messenger ordering bot that takes a pizza order end to end — size, toppings, drinks, sides, delivery method and customer details — calculating the running total across four priced variables.',
      problem: 'Small food-service operators lose orders in two places: the phone line nobody answers during a rush, and the hours the shop is closed but customers are still hungry. Manual order-taking also introduces transcription errors on exactly the details — address, phone, topping choices — that are most expensive to get wrong.',
      method: 'Designed and built an 11-block conversational architecture on Chatfuel, deployed live to Facebook Messenger. The flow moves a customer from entry through pizza size, topping customisation, drinks, appetisers, an itemised order summary, delivery-versus-pickup selection, contact capture and final confirmation, with an alternative menu-browsing path for customers not yet ready to order. Pricing is not hardcoded per combination: four attributes — pizza base, toppings, drinks and appetisers — are set as the customer chooses and summed into a running total, so every permutation prices correctly without a lookup table.',
      highlights: [
        'Built <b>11 functional blocks</b> covering the full ordering journey, including an order-summary review step that lets a customer amend or cancel before committing.',
        'Implemented <b>dynamic pricing across four variables</b> (base $8.99–$16.99, toppings, drinks, appetisers) summed in real time, rather than enumerating fixed combinations.',
        'Captured <b>structured customer data</b> — name, phone and delivery address — at the point of confirmation, turning each order into a reusable record.',
        'Tested at <b>block, flow and pricing level</b>: navigation, price calculation and data collection each passed at 100%, user experience at 95%.',
        'Delivered as a <b>no-code build</b>, demonstrating that the constraint was conversational design and business logic rather than programming.'
      ],
      kpis: [
        ['11', 'functional blocks'],
        ['4', 'priced variables'],
        ['100%', 'flow & pricing tests'],
        ['95%', 'UX test score']
      ],
      tags: ['Chatfuel', 'Facebook Messenger', 'Conversational Flow Design', 'Dynamic Pricing Logic', 'No-Code Automation', 'QA Testing'],
      linkText: 'Open the project documentation',
      link: 'assets/Slice_Slice_Baby_Fix_Chatbot_Report.pdf',
      link2: 'https://m.me/846010098599020',
      link2Text: 'Open the bot in Messenger'
    }
  ];

  /* ---------- utilities ---------- */

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function debounce(fn, ms) {
    var t; return function () { clearTimeout(t); t = setTimeout(fn, ms); };
  }

  /* ---------- current year ---------- */

  var yr = $('#yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- mobile nav ---------- */

  var navToggle = $('#navtoggle'), nav = $('#nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- scroll progress ---------- */

  var bar = $('#progress');
  if (bar) {
    var onScroll = function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- fit one-line text ---------- */

  function fitText(el) {
    if (!el) return;
    var cs = window.getComputedStyle(el);
    if (cs.whiteSpace !== 'nowrap') { el.style.fontSize = ''; return; }
    el.style.fontSize = '';
    var size = parseFloat(cs.fontSize);
    var min = Math.max(9, size * 0.62);
    var guard = 0;
    while (el.scrollWidth > el.clientWidth + 1 && size > min && guard < 90) {
      size -= 0.5; guard++;
      el.style.fontSize = size + 'px';
    }
  }
  function fitAll() { $$('[data-fit], .role-line').forEach(fitText); }
  if (document.fonts && document.fonts.ready) { document.fonts.ready.then(fitAll); }
  window.addEventListener('load', fitAll);
  window.addEventListener('resize', debounce(fitAll, 150));
  fitAll();

  /* ---------- reveal on scroll ---------- */

  var revealEls = $$('.reveal');
  if (revealEls.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealEls.forEach(function (el) { el.classList.add('in'); });
    } else {
      var ro = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('in'); ro.unobserve(en.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
      revealEls.forEach(function (el) { ro.observe(el); });
      // Safety net: anything still hidden after 2.5s is shown regardless.
      setTimeout(function () { revealEls.forEach(function (el) { el.classList.add('in'); }); }, 2500);
    }
  }

  /* ---------- animated counters ----------
     Suffix is read from data-suffix verbatim ("+", "%", "K+"),
     so 5 renders as "5+" and 40 as "40%" — never the wrong glyph. */

  var counters = $$('[data-count]');
  if (counters.length) {
    var runCounter = function (el) {
      var target = parseFloat(el.getAttribute('data-count'));
      var suffix = el.getAttribute('data-suffix') || '';
      var dp = parseInt(el.getAttribute('data-decimals') || '0', 10);
      if (isNaN(target)) return;
      if (reduceMotion) { el.textContent = target.toFixed(dp) + suffix; return; }
      var dur = 1250, t0 = null;
      var step = function (ts) {
        if (t0 === null) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(dp) + suffix;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target.toFixed(dp) + suffix;
      };
      requestAnimationFrame(step);
    };

    if (!('IntersectionObserver' in window)) {
      counters.forEach(runCounter);
    } else {
      var co = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { runCounter(en.target); co.unobserve(en.target); }
        });
      }, { threshold: 0.45 });
      counters.forEach(function (el) { co.observe(el); });
    }
  }

  /* ---------- particle network background ---------- */

  var canvas = $('#particles');
  if (canvas && !reduceMotion) {
    var ctx = canvas.getContext('2d');
    var pts = [], raf = null, W = 0, H = 0, dpr = 1;

    var sizeCanvas = function () {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    var seed = function () {
      var n = Math.round(Math.min(72, Math.max(24, (W * H) / 20000)));
      pts = [];
      for (var i = 0; i < n; i++) {
        pts.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          r: Math.random() * 1.5 + 0.7
        });
      }
    };

    var draw = function () {
      ctx.clearRect(0, 0, W, H);
      var i, j, a, b, dx, dy, d2;
      var LINK = 132, LINK2 = LINK * LINK;

      for (i = 0; i < pts.length; i++) {
        a = pts[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > W) a.vx *= -1;
        if (a.y < 0 || a.y > H) a.vy *= -1;
      }
      for (i = 0; i < pts.length; i++) {
        a = pts[i];
        for (j = i + 1; j < pts.length; j++) {
          b = pts[j];
          dx = a.x - b.x; dy = a.y - b.y; d2 = dx * dx + dy * dy;
          if (d2 < LINK2) {
            ctx.strokeStyle = 'rgba(39,211,238,' + (0.16 * (1 - d2 / LINK2)).toFixed(3) + ')';
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (i = 0; i < pts.length; i++) {
        a = pts[i];
        ctx.fillStyle = 'rgba(45,212,191,.55)';
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    var start = function () { if (raf === null) raf = requestAnimationFrame(draw); };
    var stop = function () { if (raf !== null) { cancelAnimationFrame(raf); raf = null; } };

    sizeCanvas(); seed(); start();
    window.addEventListener('resize', debounce(function () { sizeCanvas(); seed(); }, 180));
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop(); else start();
    });
  }

  /* ---------- project lab: render, filter, modal ---------- */

  var grid = $('#lab-grid');
  if (grid) {
    var cardHTML = function (p) {
      var fig = p.image
        ? '<img src="' + esc(p.image) + '" alt="" width="1280" height="720" loading="lazy" decoding="async" onerror="this.parentNode.innerHTML=\'<div class=&quot;ph&quot;>' + esc(p.stat) + '<small>' + esc(p.statLabel) + '</small></div>\'">'
        : '<div class="ph">' + esc(p.stat) + '<small>' + esc(p.statLabel) + '</small></div>';

      return '<article class="card proj lab-card" data-cat="' + esc(p.cat) + '">' +
        '<div class="proj-fig">' + fig + '</div>' +
        '<div class="proj-body">' +
          '<h3>' + esc(p.title) + '</h3>' +
          '<p class="proj-org">' + esc(p.subtitle) + '</p>' +
          '<p class="d">' + esc(p.blurb) + '</p>' +
          '<div class="techbubble"><span class="tl">TECH</span><span class="tv">' + p.tags.map(esc).join(' · ') + '</span></div>' +
          '<div class="kpis">' + p.kpis.map(function (k) {
            return '<span class="kpi"><b>' + esc(k[0]) + '</b> ' + esc(k[1]) + '</span>';
          }).join('') + '</div>' +
          '<div class="proj-foot">' +
            '<button class="proj-link cardbtn" data-id="' + esc(p.id) + '" aria-haspopup="dialog">' +
              'View case study<span aria-hidden="true"> →</span>' +
              '<span class="sr">: ' + esc(p.title) + '</span>' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</article>';
    };

    grid.innerHTML = projects.map(cardHTML).join('');

    /* filters */
    var chips = $$('.chip');
    var applyFilter = function (val) {
      $$('.lab-card', grid).forEach(function (c) {
        c.hidden = !(val === 'all' || c.getAttribute('data-cat') === val);
      });
      chips.forEach(function (c) {
        var on = c.getAttribute('data-filter') === val;
        c.classList.toggle('on', on);
        c.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    };
    chips.forEach(function (c) {
      c.addEventListener('click', function () { applyFilter(c.getAttribute('data-filter')); });
    });

    /* modal */
    var modal = $('#modal'), mBody = $('#modal-body'), mTitle = $('#modal-title'), mSub = $('#modal-sub');
    var lastFocus = null;

    var openModal = function (id) {
      var p = projects.filter(function (x) { return x.id === id; })[0];
      if (!p || !modal) return;
      lastFocus = document.activeElement;

      mTitle.textContent = p.title;
      mSub.textContent = p.subtitle;

      var html = '';
      html += '<span class="techbubble" style="margin-top:0"><span class="tl">TECH</span><span class="tv">' + p.tags.map(esc).join(' · ') + '</span></span>';
      html += '<div class="kpis" style="margin-top:16px">' + p.kpis.map(function (k) {
        return '<span class="kpi"><b>' + esc(k[0]) + '</b> ' + esc(k[1]) + '</span>';
      }).join('') + '</div>';
      html += '<h4>The problem</h4><p>' + esc(p.problem) + '</p>';
      html += '<h4>Approach</h4><p>' + esc(p.method) + '</p>';
      html += '<h4>Result</h4><ul>' + p.highlights.map(function (h) { return '<li>' + h + '</li>'; }).join('') + '</ul>';
      if (p.link) {
        html += '<div style="margin-top:24px;display:flex;flex-wrap:wrap;gap:10px">' +
          '<a class="btn btn-primary" href="' + esc(p.link) + '" target="_blank" rel="noopener">' + esc(p.linkText) + ' →</a>' +
          (p.link2 ? '<a class="btn btn-ghost" href="' + esc(p.link2) + '" target="_blank" rel="noopener">' + esc(p.link2Text) + ' ↗</a>' : '') +
        '</div>';
      } else {
        html += '<p style="margin-top:24px;font-size:13px;color:var(--ink-3)">' + esc(p.linkText) + '</p>';
      }

      mBody.innerHTML = html;
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
      $('#modal-close').focus();
      if (history.replaceState) history.replaceState(null, '', '#' + p.id);
    };

    var closeModal = function () {
      if (!modal || modal.hidden) return;
      modal.hidden = true;
      document.body.style.overflow = '';
      if (history.replaceState) history.replaceState(null, '', location.pathname);
      if (lastFocus) lastFocus.focus();
    };

    grid.addEventListener('click', function (e) {
      var btn = e.target.closest('.cardbtn');
      if (btn) openModal(btn.getAttribute('data-id'));
    });

    if (modal) {
      $('#modal-close').addEventListener('click', closeModal);
      modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
    }

    /* deep link: projects.html#p-fleet opens that case study */
    var hash = location.hash.replace('#', '');
    if (hash) {
      var match = projects.filter(function (x) { return x.id === hash; })[0];
      if (match) openModal(hash);
    }
  }

})();
