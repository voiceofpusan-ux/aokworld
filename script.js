/* ============================================================
   AOK WORLD — script.js
   파티클 · 커서글로우 · 스크롤 리빌 · 카운터 · 언어전환
   ============================================================ */

/* ── 다국어 사전 ──────────────────────────────── */
const i18n = {
  ko: {
    "site.title": "AOK World | Action One Korea",
    "logo.sub": "Action One Korea",
    "nav.home": "홈",
    "nav.about": "AOK소개",
    "nav.mission": "Mission",
    "nav.activities": "주요활동",
    "nav.org": "조직도",
    "nav.history": "지나온길",
    "nav.news": "활동소식",
    "nav.resources": "자료실",
    "nav.photos": "사진",
    "nav.videos": "동영상",
    "nav.member": "회원",
    "nav.memberForm": "회원가입서",
    "nav.join": "회원가입",
    "nav.contact": "오시는 길",
    "hero.badge": "2013 · Los Angeles & Seoul",
    "hero.subtitle": "해내외가 함께하는\n풀뿌리운동",
    "hero.desc": "AOK (액션원코리아)는 해내외가 함께하는 풀뿌리운동 단체로\n2013년 로스앤젤레스와 서울에서 출범했습니다.\n통일시대를 풀뿌리 시민들의 힘으로 열어가고자\n생활속의 통일운동, 역사정체성 회복운동,\n분단의 아픔을 치유하는 문화운동에 힘쓰고 있습니다.",
    "hero.cta1": "더 알아보기",
    "hero.cta2": "함께하기",
    "hero.countries": "개국",
    "hero.since": "년 출범",
    "hero.years": "년 활동",
    "hero.scroll": "스크롤",
    "world.title": "AOK World",
    "world.desc": "전 세계 풀뿌리 시민들과 함께합니다",
    "world.korea.title": "AOK KOREA",
    "world.korea": "서울 — 풀뿌리운동의 본거지",
    "world.ny.title": "AOK 뉴욕",
    "world.ny": "New York — 미주 동부",
    "world.la.title": "AOK LA",
    "world.la": "Los Angeles — 해외 출범지",
    "world.soon.title": "예정",
    "world.soon": "새로운 지부 준비 중",
    "about.title": "AOK 소개",
    "about.mission.title": "Mission",
    "about.mission.desc": "풀뿌리 시민의 힘으로 통일시대를 열어갑니다. 해내외가 함께하는 시민운동으로, 생활속의 통일운동, 역사정체성 회복운동, 분단의 아픔을 치유하는 문화운동, 국가보안법폐지 운동에 힘쓰고 있습니다.",
    "about.activities.title": "주요활동",
    "about.activities.1": "생활속의 통일운동",
    "about.activities.2": "역사정체성 회복운동",
    "about.activities.3": "분단의 아픔을 치유하는 문화운동",
    "about.activities.4": "국가보안법폐지 운동",
    "about.org.title": "조직도",
    "about.org.desc": "해내외 네트워크로 연결된 시민운동 단체. 2013년 로스앤젤레스와 서울에서 출범하여 국내외 풀뿌리 시민들과 함께 활동하고 있습니다.",
    "mission.quote": "통일시대를 풀뿌리 시민들의 힘으로 열어가고자\n생활속의 통일운동, 역사정체성 회복운동,\n분단의 아픔을 치유하는 문화운동,\n국가보안법폐지 운동에 힘쓰고 있습니다.",
    "history.title": "지나온길",
    "history.2021": "활동 내역 보기",
    "history.2020": "활동 내역 보기",
    "history.2019": "활동 내역 보기",
    "history.2018": "활동 내역 보기",
    "history.2017": "활동 내역 보기",
    "history.2013": "출범 — LA & 서울",
    "news.title": "활동소식",
    "news.2022.title": "2022년 활동소식",
    "news.2022.desc": "2022년의 주요 활동 내역을 확인하세요.",
    "news.more": "자세히 보기 →",
    "resources.title": "자료실",
    "resources.photos": "사진",
    "resources.photos.desc": "활동 사진 갤러리",
    "resources.videos": "동영상",
    "resources.videos.desc": "활동 동영상",
    "member.title": "함께하는 시민이 되어 주세요",
    "member.desc": "AOK와 함께 통일시대를 만들어가는 풀뿌리 시민운동에 참여하세요.",
    "member.btn": "회원가입서",
    "member.note": "회원가입서를 다운로드하여 작성 후 제출해 주세요.",
    "contact.title": "오시는 길 & 후원",
    "contact.location": "오시는 길",
    "contact.address": "서울특별시 종로구 창덕궁길 29-6 (원서동)\n북촌창우극장 2층 AOK",
    "contact.donate": "후원계좌",
    "contact.postbank": "우체국",
    "contact.kakaobank": "카카오",
    "footer.copy": "© Action One Korea. All rights reserved.",
  },
  en: {
    "site.title": "AOK World | Action One Korea",
    "logo.sub": "Action One Korea",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.mission": "Mission",
    "nav.activities": "Activities",
    "nav.org": "Organization",
    "nav.history": "History",
    "nav.news": "News",
    "nav.resources": "Resources",
    "nav.photos": "Photos",
    "nav.videos": "Videos",
    "nav.member": "Member",
    "nav.memberForm": "Membership Form",
    "nav.join": "Join Us",
    "nav.contact": "Contact",
    "hero.badge": "2013 · Los Angeles & Seoul",
    "hero.subtitle": "A Global\nGrassroots Movement",
    "hero.desc": "AOK (Action One Korea) is a grassroots civic movement\nlaunched in 2013 in Los Angeles and Seoul.\nWe are dedicated to building a unified Korean society\nthrough civic activism, restoring historical identity,\nand cultural healing across national divisions.",
    "hero.cta1": "Learn More",
    "hero.cta2": "Join Us",
    "hero.countries": " Nations",
    "hero.since": " Founded",
    "hero.years": "+ Years",
    "hero.scroll": "Scroll",
    "world.title": "AOK World",
    "world.desc": "Together with grassroots citizens worldwide",
    "world.korea.title": "AOK KOREA",
    "world.korea": "Seoul — Headquarters",
    "world.ny.title": "AOK New York",
    "world.ny": "New York — East Coast USA",
    "world.la.title": "AOK LA",
    "world.la": "Los Angeles — Founding Branch",
    "world.soon.title": "Coming Soon",
    "world.soon": "New chapter on the way",
    "about.title": "About AOK",
    "about.mission.title": "Mission",
    "about.mission.desc": "We open the era of reunification through the power of grassroots citizens. As a civic movement both inside and outside Korea, we engage in everyday reunification activism, restoring historical identity, cultural healing across the national division, and advocacy for repeal of the National Security Law.",
    "about.activities.title": "Key Activities",
    "about.activities.1": "Everyday Reunification Movement",
    "about.activities.2": "Historical Identity Restoration",
    "about.activities.3": "Cultural Healing Across Division",
    "about.activities.4": "National Security Law Repeal",
    "about.org.title": "Organization",
    "about.org.desc": "A civic movement connected through a domestic and international network. Founded in Los Angeles and Seoul in 2013, we continue working with grassroots citizens worldwide.",
    "mission.quote": "Opening the era of reunification\nthrough the power of grassroots citizens.\nEveryday reunification movement,\nrestoring historical identity,\ncultural healing across division.",
    "history.title": "Our History",
    "history.2021": "View Activities",
    "history.2020": "View Activities",
    "history.2019": "View Activities",
    "history.2018": "View Activities",
    "history.2017": "View Activities",
    "history.2013": "Founded — LA & Seoul",
    "news.title": "News & Activities",
    "news.2022.title": "2022 Activities",
    "news.2022.desc": "See our major activities from 2022.",
    "news.more": "View More →",
    "resources.title": "Resources",
    "resources.photos": "Photos",
    "resources.photos.desc": "Photo Gallery",
    "resources.videos": "Videos",
    "resources.videos.desc": "Video Archive",
    "member.title": "Become a Member",
    "member.desc": "Join the grassroots civic movement with AOK to build an era of reunification.",
    "member.btn": "Membership Form",
    "member.note": "Download, complete, and submit the membership form.",
    "contact.title": "Location & Donation",
    "contact.location": "How to Find Us",
    "contact.address": "2F AOK, Changdeokgung-gil 29-6, Jongno-gu, Seoul\n(Bukchon Changwoo Theater)",
    "contact.donate": "Donation Account",
    "contact.postbank": "Post Bank",
    "contact.kakaobank": "KakaoBank",
    "footer.copy": "© Action One Korea. All rights reserved.",
  }
};

/* ── 현재 언어 상태 ──────────────────────────── */
let currentLang = 'ko';

function applyLang(lang) {
  currentLang = lang;
  const dict = i18n[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (dict[key].includes('\n')) {
        el.innerHTML = dict[key].replace(/\n/g, '<br>');
      } else {
        el.textContent = dict[key];
      }
    }
  });

  if (dict["site.title"]) document.title = dict["site.title"];

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
}

/* ── 파티클 캔버스 ───────────────────────────── */
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], mouse = { x: -999, y: -999 };

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createParticles(n) {
    particles = [];
    for (let i = 0; i < n; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.5 + 0.4,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.1,
        teal: Math.random() > 0.7,
      });
    }
  }

  function drawLine(p1, p2, alpha) {
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.strokeStyle = `rgba(0,200,200,${alpha * 0.3})`;
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      const dx = p.x - mouse.x, dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        p.vx += dx * 0.0008;
        p.vy += dy * 0.0008;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.teal
        ? `rgba(0,200,200,${p.alpha})`
        : `rgba(255,255,255,${p.alpha * 0.5})`;
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) drawLine(particles[i], particles[j], 1 - d / 120);
      }
    }

    requestAnimationFrame(loop);
  }

  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener('resize', () => { resize(); createParticles(100); });
  resize();
  createParticles(100);
  loop();
})();

/* ── 커스텀 커서 ──────────────────────────────── */
(function initCursor() {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  const glow = document.getElementById('cursorGlow');
  if (!dot || !ring || !glow) return;

  let dx = 0, dy = 0;
  let rx = 0, ry = 0;
  let gx = 0, gy = 0;
  let tx = 0, ty = 0;

  window.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
  window.addEventListener('mousedown', () => dot.classList.add('clicked'));
  window.addEventListener('mouseup', () => dot.classList.remove('clicked'));

  const hoverTargets = 'a, button, .world-card, .about-card, .news-card, .resource-card, .timeline-item';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
  });

  function moveCursor() {
    dx = tx; dy = ty;
    dot.style.left = dx + 'px';
    dot.style.top = dy + 'px';

    rx += (tx - rx) * 0.18;
    ry += (ty - ry) * 0.18;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';

    gx += (tx - gx) * 0.06;
    gy += (ty - gy) * 0.06;
    glow.style.left = gx + 'px';
    glow.style.top = gy + 'px';

    requestAnimationFrame(moveCursor);
  }
  moveCursor();
})();

/* ── 헤더 스크롤 효과 ─────────────────────────── */
(function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
})();

/* ── 모바일 메뉴 ──────────────────────────────── */
(function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  document.querySelectorAll('.nav-dropdown').forEach(dd => {
    const link = dd.querySelector('.nav-parent');
    if (!link) return;
    link.addEventListener('click', e => {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        dd.classList.toggle('open');
      }
    });
  });
})();

/* ── 스크롤 리빌 ──────────────────────────────── */
(function initReveal() {
  const selector = '.reveal, .reveal-left, .reveal-right, .reveal-pop, .reveal-spin';
  const targets = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -20px 0px' });

  targets.forEach(el => observer.observe(el));
})();

/* ── 숫자 카운터 애니메이션 ───────────────────── */
(function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const end = parseInt(el.dataset.count);
      const plain = el.dataset.format === 'plain';
      const start = end > 100 ? end - 50 : 0;
      const dur = end > 1000 ? 1200 : 800;
      const step = (end - start) / (dur / 16);
      let curr = start;
      const timer = setInterval(() => {
        curr = Math.min(curr + step, end);
        const n = Math.round(curr);
        el.textContent = plain ? String(n) : n.toLocaleString();
        if (curr >= end) clearInterval(timer);
      }, 16);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => observer.observe(el));
})();

/* ── 언어 전환 ────────────────────────────────── */
(function initLangSwitch() {
  const langSwitch = document.getElementById('langSwitch');
  if (!langSwitch) return;
  langSwitch.addEventListener('click', e => {
    const btn = e.target.closest('.lang-btn');
    if (!btn) return;
    const lang = btn.dataset.lang;
    if (lang && lang !== currentLang) {
      applyLang(lang);
    }
  });
})();

/* ── 부드러운 앵커 스크롤 ────────────────────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      const nav = document.getElementById('nav');
      const toggle = document.getElementById('navToggle');
      if (nav && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle && toggle.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
})();

/* ── 타임라인 호버 파티클 스파크 ─────────────── */
(function initTimelineSpark() {
  document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.setProperty('--teal-glow', '0 0 20px rgba(0,200,200,0.4)');
    });
  });
})();

/* ── 초기 실행 ────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyLang('ko');
});
