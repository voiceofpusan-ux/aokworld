# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

AOK World (Action One Korea, 액션원코리아) 단체의 단일 페이지 소개 사이트. 빌드 시스템·패키지 매니저·테스트·프레임워크가 없는 순수 정적 사이트로, 파일은 세 개뿐이다.

- [index.html](index.html) — 전체 마크업 (헤더, 히어로, 섹션들, 푸터)
- [script.js](script.js) — 모든 동작 로직
- [styles/main.css](styles/main.css) — 전체 스타일 (CSS 변수 테마)

## 실행 / 확인

빌드 단계가 없다. 변경을 확인하려면 `index.html`을 브라우저로 열거나 정적 서버로 띄운다.

```bash
python -m http.server 8000   # 또는 npx serve
```

폰트는 Google Fonts(Noto Sans KR, Outfit) CDN을 쓰므로 확인 시 인터넷 연결이 필요하다.

## 아키텍처

**다국어(i18n).** 한국어/영어 전환이 핵심 기능이다. 번역은 `script.js` 최상단의 `i18n` 사전(`ko`/`en` 키)에 모여 있고, HTML 요소는 `data-i18n="키"` 속성으로 연결된다. `applyLang(lang)`이 `[data-i18n]` 요소를 순회하며 텍스트를 교체한다. **텍스트를 추가/수정할 때는 HTML에 `data-i18n` 속성을 달고 `ko`·`en` 양쪽 사전에 같은 키를 모두 추가해야 한다.** 사전 값에 `\n`이 있으면 `<br>`로 치환되어 `innerHTML`로 들어간다(줄바꿈 표현용).

**script.js 구조.** 즉시실행함수(IIFE) 단위로 기능이 격리되어 있다. 각 IIFE는 필요한 DOM 요소가 없으면 조기 `return`한다. 모듈: 파티클 캔버스, 커스텀 커서(3겹: dot/ring/glow), 헤더 스크롤 효과, 모바일 메뉴, `IntersectionObserver` 기반 스크롤 리빌, 숫자 카운터, 언어 전환, 부드러운 앵커 스크롤, 타임라인 호버. 마지막에 `DOMContentLoaded`로 `applyLang('ko')`을 호출해 초기화한다.

**스타일 테마.** `main.css`의 `:root` CSS 변수가 색·반경·그림자·트랜지션을 정의한다. 색은 navy 계열 + teal(`--teal: #00c8c8`) 포인트 + gold 보조. 새 색/간격은 하드코딩하지 말고 기존 변수를 재사용한다. 본문 폰트는 `--font-ko`, 영문 표제는 `--font-en`.

**애니메이션 규칙.** 스크롤 진입 애니메이션은 요소에 `reveal`/`reveal-left`/`reveal-right`/`reveal-pop` 클래스를 붙이면 `initReveal`이 자동으로 `visible` 클래스를 부여한다(`delay-1`~`delay-5`로 시차). 커서 효과 때문에 `body`에 `cursor: none`이 걸려 있다.
