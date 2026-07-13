const articles = [
  {
    slug: "melon-ai-playlist-qa",
    tags: ["대화형 AI", "사용자 맥락", "서비스 QA", "TTS"],
    title: "47개 페르소나로 대화형 음악 추천 AI를 검수하는 법",
    subtitle: "자연어로 플레이리스트를 만드는 대화형 AI QA에서 서로 다른 생활 리듬과 서비스 이용 경험을 반영한 47개 페르소나를 구성했습니다. 사용자의 표현과 의도가 후속 대화, 추천 결과, TTS까지 유지되는지 검수한 과정을 담았습니다.",
    excerpt: "자연어로 플레이리스트를 만드는 대화형 AI QA에서 서로 다른 생활 리듬과 서비스 이용 경험을 반영한 47개 페르소나를 구성했습니다. 사용자의 표현과 의도가 후속 대화, 추천 결과, TTS까지 유지되는지 검수한 과정을 담았습니다.",
    date: "2026. 07. 12",
    publishedMonth: "2026년 7월",
    characterCount: "19,300",
    readTime: "23분",
    thumbnail: "assets/thumbnails/post-01-user.jpg",
    thumbnailAlt: "연두색 음표와 음반 모양의 3D 아이콘",
    markdown: "content/posts/01-melon-ai-playlist-qa.md",
  },
  {
    slug: "music-tts-pronunciation-dictionary",
    tags: ["음성합성", "발음사전", "데이터 품질", "반복 검수"],
    title: "약 3만 5천 개의 후보에서 TTS 발음사전 기준을 정리하다",
    subtitle: "영어와 숫자가 포함된 곡명·아티스트명 약 3만 5천 개를 발음사전 후보로 정리하고, 초기 약 10%를 수동 조사했습니다. 조사 기록에서 패턴을 찾고 처리 목표를 조정한 뒤, 주 단위 등록과 적용 확인까지 이어간 과정을 설명합니다.",
    excerpt: "영어와 숫자가 포함된 곡명·아티스트명 약 3만 5천 개를 발음사전 후보로 정리하고, 초기 약 10%를 수동 조사했습니다. 조사 기록에서 패턴을 찾고 처리 목표를 조정한 뒤, 주 단위 등록과 적용 확인까지 이어간 과정을 설명합니다.",
    date: "2026. 07. 12",
    publishedMonth: "2026년 7월",
    characterCount: "16,600",
    readTime: "21분",
    thumbnail: "assets/thumbnails/post-02-user.jpg",
    thumbnailAlt: "크림색 페이지와 청록색 표지의 펼쳐진 책 아이콘",
    markdown: "content/posts/02-music-tts-pronunciation-dictionary.md",
  },
  {
    slug: "internal-work-ai-qa",
    tags: ["사내 AI", "대화형 QA", "근거 확인", "실행 가능성"],
    title: "사내 업무용 AI의 답변 정확성과 실행 가능성을 검수하다",
    subtitle: "사내 정보를 찾아주는 대화형 AI의 초기 QA에 짧게 참여해 직원별 질문과 후속 대화를 테스트했습니다. 출처에 맞는 답변인지뿐 아니라, 실제로 실행할 수 없는 주문 같은 요청을 가능한 것처럼 안내하는 문제를 어떻게 구분했는지 정리했습니다.",
    excerpt: "사내 정보를 찾아주는 대화형 AI의 초기 QA에 짧게 참여해 직원별 질문과 후속 대화를 테스트했습니다. 출처에 맞는 답변인지뿐 아니라, 실제로 실행할 수 없는 주문 같은 요청을 가능한 것처럼 안내하는 문제를 어떻게 구분했는지 정리했습니다.",
    date: "2026. 07. 12",
    publishedMonth: "2026년 7월",
    characterCount: "11,900",
    readTime: "15분",
    thumbnail: "assets/thumbnails/post-03-user.jpg",
    thumbnailAlt: "옅은 파란색 렌즈의 돋보기 아이콘",
    markdown: "content/posts/03-internal-work-ai-qa.md",
  },
  {
    slug: "ai-academy-assistant-evaluation-design",
    tags: ["RAG", "AI 평가", "개인정보 보호", "출처 검증"],
    title: "학원 상담 AI의 답변 범위와 안전 기준을 설계하다",
    subtitle: "부모님이 운영하는 수학학원의 반복 상담 문제를 바탕으로, 운영규정에 근거해 답하는 상담 AI MVP를 만들었습니다. 일반적인 성적 관리 질문까지 막은 과잉 거절을 수정하고, 유용한 답변과 개인정보 보호 사이의 경계를 재평가한 과정을 담았습니다.",
    excerpt: "부모님이 운영하는 수학학원의 반복 상담 문제를 바탕으로, 운영규정에 근거해 답하는 상담 AI MVP를 만들었습니다. 일반적인 성적 관리 질문까지 막은 과잉 거절을 수정하고, 유용한 답변과 개인정보 보호 사이의 경계를 재평가한 과정을 담았습니다.",
    date: "2026. 07. 12",
    publishedMonth: "2026년 7월",
    characterCount: "20,100",
    readTime: "25분",
    thumbnail: "assets/thumbnails/post-04-user.jpg",
    thumbnailAlt: "흰색과 파란색 대화 말풍선 아이콘",
    markdown: "content/posts/04-ai-academy-assistant-evaluation-design.md",
  },
  {
    slug: "fan-communication-ai-prototype",
    tags: ["생성형 AI", "입력 정제", "AI 안전", "프로토타입"],
    title: "팬 활동 데이터에서 대화에 필요한 정보만 남기는 법",
    subtitle: "사내 AI 해커톤에서 팬의 최근 활동을 요약해 아티스트의 답글 작성을 돕는 프로토타입을 팀으로 제작해 최종 3위·우수상을 받았습니다. 팬 활동 가운데 대화에 필요한 정보만 남기고 근거 없는 추론과 지킬 수 없는 답글 제안을 제한한 과정을 설명합니다.",
    excerpt: "사내 AI 해커톤에서 팬의 최근 활동을 요약해 아티스트의 답글 작성을 돕는 프로토타입을 팀으로 제작해 최종 3위·우수상을 받았습니다. 팬 활동 가운데 대화에 필요한 정보만 남기고 근거 없는 추론과 지킬 수 없는 답글 제안을 제한한 과정을 설명합니다.",
    date: "2026. 07. 12",
    publishedMonth: "2026년 7월",
    characterCount: "11,500",
    readTime: "14분",
    thumbnail: "assets/thumbnails/post-05-user.jpg",
    thumbnailAlt: "분홍색과 보라색 하트 아이콘",
    markdown: "content/posts/05-fan-communication-ai-prototype.md",
  },
];

const articleList = document.querySelector("#articleList");
const homeView = document.querySelector("#homeView");
const articleView = document.querySelector("#articleView");
const progress = document.querySelector("#readingProgress");
const dialog = document.querySelector("#resumeDialog");
const openResume = document.querySelector("#openResume");
const closeResume = document.querySelector("#closeResume");
const markdownCache = new Map();
let revealObserver;
let renderRequest = 0;

function renderCards() {
  articleList.innerHTML = articles.map((article) => `
    <a class="article-card" href="#article/${article.slug}">
      <div class="thumbnail-wrap">
        <img src="${article.thumbnail}" alt="${article.thumbnailAlt}" width="800" height="800" />
      </div>
      <div class="article-card-content">
        <h3>${article.title}</h3>
        <p class="article-excerpt">${article.excerpt}</p>
        <div class="article-meta article-meta--card"><span>${article.publishedMonth}</span><span>${article.characterCount}자</span><span>${article.readTime} 분량</span></div>
        <div class="article-card-footer">
          ${renderTags(article.tags)}
        </div>
      </div>
      <div class="card-arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h14m-5-5 5 5-5 5" /></svg></div>
    </a>
  `).join("");
}

function renderTags(tags, modifier = "") {
  return `<div class="article-tags ${modifier}">${tags.map((tag) => `<span class="article-tag">${tag}</span>`).join("")}</div>`;
}

async function renderArticle(article) {
  const requestId = ++renderRequest;
  document.title = `${article.title} — 최수호`;
  articleView.innerHTML = `
    <header class="article-hero wrap">
      <div class="article-topline">
        <a class="back-link" href="#home"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m5-5-5 5 5 5" /></svg>모든 게시글</a>
        ${renderTags(article.tags, "article-tags--hero")}
      </div>
      <h1>${article.title}</h1>
      <p class="article-hero-subtitle">${article.subtitle}</p>
      <div class="article-byline"><div class="author-avatar">S</div><div><strong>최수호</strong><p>${article.date} · ${article.readTime} 분량</p></div></div>
    </header>
    <div class="article-body markdown-body"><p class="article-loading">게시글을 불러오고 있습니다.</p></div>
    <div class="article-end article-body">
      <span>글 마침</span>
      <h2>다음 기록도 살펴보세요</h2>
      ${nextArticleLink(article)}
    </div>
  `;

  try {
    const markdown = await loadMarkdown(article.markdown);
    if (requestId !== renderRequest || location.hash !== `#article/${article.slug}`) return;
    const body = articleView.querySelector(".markdown-body");
    body.innerHTML = markdownToHtml(stripEditorNotes(markdown));
    updateProgress();
    requestAnimationFrame(setupRevealMotion);
  } catch (error) {
    if (requestId !== renderRequest) return;
    articleView.querySelector(".markdown-body").innerHTML = `<div class="article-error"><strong>게시글을 불러오지 못했습니다.</strong><p>잠시 후 다시 시도해 주세요.</p></div>`;
    console.error(error);
  }
}

async function loadMarkdown(path) {
  if (markdownCache.has(path)) return markdownCache.get(path);
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Markdown load failed: ${response.status}`);
  const markdown = await response.text();
  markdownCache.set(path, markdown);
  return markdown;
}

function stripEditorNotes(markdown) {
  let content = markdown.replace(/\r/g, "");
  const noteIndex = content.indexOf("\n## 최종 편집 자료");
  if (noteIndex !== -1) content = content.slice(0, noteIndex);
  const firstRule = content.indexOf("\n---");
  if (firstRule !== -1 && firstRule < 250) content = content.slice(firstRule + 4);
  return content.trim();
}

function markdownToHtml(markdown) {
  return parseBlocks(markdown.split("\n"));
}

function parseBlocks(lines) {
  const html = [];
  let paragraph = [];
  let listType = null;
  let listItems = [];
  let tableRows = [];
  let codeLines = [];
  let inCode = false;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    const text = paragraph.map((line) => line.endsWith("  ") ? `${line.trimEnd()}\u0000BR\u0000` : line).join(" ");
    html.push(`<p>${inlineMarkdown(text).replaceAll("\u0000BR\u0000", "<br>")}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (!listItems.length) return;
    html.push(`<${listType}>${listItems.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</${listType}>`);
    listType = null;
    listItems = [];
  };

  const flushTable = () => {
    if (!tableRows.length) return;
    const rows = tableRows.map((row) => row.slice(1, -1).split("|").map((cell) => cell.trim()));
    const hasSeparator = rows[1]?.every((cell) => /^:?-{3,}:?$/.test(cell));
    const head = rows[0];
    const body = hasSeparator ? rows.slice(2) : rows.slice(1);
    html.push(`<div class="table-scroll"><table><thead><tr>${head.map((cell) => `<th>${inlineMarkdown(cell)}</th>`).join("")}</tr></thead><tbody>${body.map((row) => `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
    tableRows = [];
  };

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];

    if (inCode) {
      if (line.startsWith("```")) {
        html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
        codeLines = [];
        inCode = false;
      } else {
        codeLines.push(line);
      }
      continue;
    }

    if (line.startsWith("```")) {
      flushParagraph(); flushList(); flushTable();
      inCode = true;
      continue;
    }

    if (line.startsWith(">")) {
      flushParagraph(); flushList(); flushTable();
      const quoteLines = [];
      while (index < lines.length && lines[index].startsWith(">")) {
        quoteLines.push(lines[index].replace(/^>\s?/, ""));
        index += 1;
      }
      index -= 1;
      html.push(`<blockquote>${parseBlocks(quoteLines)}</blockquote>`);
      continue;
    }

    if (/^\|.*\|\s*$/.test(line)) {
      flushParagraph(); flushList();
      tableRows.push(line.trim());
      const next = lines[index + 1] || "";
      if (!/^\|.*\|\s*$/.test(next)) flushTable();
      continue;
    }
    flushTable();

    const heading = line.match(/^(#{2,4})\s+(.+)$/);
    if (heading) {
      flushParagraph(); flushList();
      const level = heading[1].length;
      html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }

    if (/^---+$/.test(line.trim())) {
      flushParagraph(); flushList();
      html.push("<hr>");
      continue;
    }

    const unordered = line.match(/^\s*[-*]\s+(.+)$/);
    const ordered = line.match(/^\s*\d+\.\s+(.+)$/);
    if (unordered || ordered) {
      flushParagraph();
      const nextType = unordered ? "ul" : "ol";
      if (listType && listType !== nextType) flushList();
      listType = nextType;
      listItems.push((unordered || ordered)[1]);
      continue;
    }

    if (!line.trim()) {
      flushParagraph(); flushList();
      continue;
    }

    if (listItems.length) flushList();
    paragraph.push(line.trim());
  }

  if (inCode) html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
  flushParagraph(); flushList(); flushTable();
  return html.join("");
}

function inlineMarkdown(text) {
  let result = escapeHtml(text);
  result = result.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
  result = result.replace(/`([^`]+)`/g, "<code>$1</code>");
  result = result.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  result = result.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return result;
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function nextArticleLink(article) {
  const index = articles.findIndex((item) => item.slug === article.slug);
  const next = articles[(index + 1) % articles.length];
  return `
    <a class="article-card article-card--next" href="#article/${next.slug}">
      <div class="thumbnail-wrap">
        <img src="${next.thumbnail}" alt="${next.thumbnailAlt}" width="800" height="800" />
      </div>
      <div class="article-card-content">
        <h3>${next.title}</h3>
        <p class="article-excerpt">${next.excerpt}</p>
        <div class="article-meta article-meta--card"><span>${next.publishedMonth}</span><span>${next.characterCount}자</span><span>${next.readTime} 분량</span></div>
        <div class="article-card-footer">
          ${renderTags(next.tags)}
        </div>
      </div>
      <div class="card-arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h14m-5-5 5 5-5 5" /></svg></div>
    </a>`;
}

function route() {
  const match = location.hash.match(/^#article\/(.+)$/);
  const article = match ? articles.find((item) => item.slug === match[1]) : null;
  const showArticle = Boolean(article);
  homeView.hidden = showArticle;
  articleView.hidden = !showArticle;
  document.body.classList.toggle("is-article", showArticle);
  progress.parentElement.hidden = !showArticle;

  if (article) {
    renderArticle(article);
  } else {
    renderRequest += 1;
    document.title = "최수호 포트폴리오 블로그";
  }
  window.scrollTo({ top: 0, behavior: "instant" });
  updateProgress();
  requestAnimationFrame(setupRevealMotion);
}

function setupRevealMotion() {
  revealObserver?.disconnect();

  if (!articleView.hidden) {
    document.querySelectorAll(".reveal-item").forEach((target) => {
      target.classList.remove("reveal-item", "is-visible");
      target.style.removeProperty("--reveal-delay");
    });
    return;
  }

  const scope = homeView;
  const targets = [
    ...scope.querySelectorAll(".section-heading, .article-card, .markdown-body > *, .article-end"),
    document.querySelector(".site-footer"),
  ].filter(Boolean);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  targets.forEach((target, index) => {
    target.classList.remove("is-visible");
    target.classList.add("reveal-item");
    target.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 45}ms`);
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -28px" });

  targets.forEach((target) => revealObserver.observe(target));
}

function updateProgress() {
  if (articleView.hidden) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const rate = scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0;
  progress.style.width = `${rate}%`;
}

openResume.addEventListener("click", () => dialog.showModal());
closeResume.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
window.addEventListener("hashchange", route);
window.addEventListener("scroll", updateProgress, { passive: true });

renderCards();
route();
