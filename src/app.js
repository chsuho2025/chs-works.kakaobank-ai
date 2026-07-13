const articles = [
  {
    slug: "melon-ai-playlist-qa",
    tags: ["대화형 AI", "사용자 맥락", "서비스 QA", "TTS"],
    title: "47개 페르소나로 대화형 음악 추천 AI를 검수하는 법",
    subtitle: "자연어로 플레이리스트를 만드는 대화형 AI QA에서 서로 다른 생활 리듬과 서비스 이용 경험을 반영한 47개 페르소나를 구성했습니다. 사용자의 표현과 의도가 후속 대화, 추천 결과, TTS까지 유지되는지 검수한 과정을 담았습니다.",
    excerpt: "자연어로 플레이리스트를 만드는 대화형 AI QA에서 서로 다른 생활 리듬과 서비스 이용 경험을 반영한 47개 페르소나를 구성했습니다. 사용자의 표현과 의도가 후속 대화, 추천 결과, TTS까지 유지되는지 검수한 과정을 담았습니다.",
    date: "2026. 07. 12",
    publishedMonth: "2026년 7월",
    characterCount: "16,990",
    readTime: "22분",
    highlights: [
      "여러 차례의 대화를 거쳐 완성되는 음악 목록",
      "이전 대화의 조건이 다음 응답과 최종 플레이리스트까지 유지되는지",
      "사용자의 표현과 의도가 후속 대화, 추천 결과, TTS까지 유지되는지",
    ],
    annotations: [
      ["QA", "Quality Assurance의 약자로, 기능이 의도한 품질 기준을 충족하는지 검수하는 과정입니다."],
      ["페르소나", "서로 다른 생활 조건과 이용 맥락을 대표하도록 설계한 가상의 사용자 유형입니다."],
      ["TTS", "Text-to-Speech의 약자로, 텍스트를 자연스러운 음성으로 변환하는 기술입니다."],
      ["후속 대화", "첫 요청 이후 사용자가 조건을 추가하거나 수정하며 이어가는 대화를 뜻합니다."],
    ],
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
    characterCount: "14,839",
    readTime: "19분",
    highlights: [
      "실제 문장에 넣어 재생했을 때",
      "명백한 오독으로 느낄 가능성이 큰 항목을 먼저 줄이는 방향",
      "반복되는 구조에서 명백한 오독을 줄일 수 있는 범위",
    ],
    annotations: [
      ["TTS", "Text-to-Speech의 약자로, 화면의 텍스트를 음성으로 변환해 읽어주는 기술입니다."],
      ["발음사전", "특정 표기를 TTS가 어떤 소리로 읽어야 하는지 별도로 연결해 둔 데이터입니다."],
      ["음악 도메인", "곡명·아티스트명·클래식 작품 표기처럼 음악 서비스에서 반복되는 전문 영역입니다."],
      ["끊어읽기", "문장의 의미 단위에 맞춰 쉬는 위치와 길이를 조정하는 음성 표현 방식입니다."],
    ],
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
    characterCount: "10,327",
    readTime: "13분",
    highlights: [
      "이전 대화의 조건이 유지되는지와 답변이 실제 사내 자료에 맞는지도 함께 확인",
      "실제 시스템과 권한으로 완료할 수 있는지",
      "현재 시스템에서 가능한 범위를 정확하게 말하는 것이 우선",
    ],
    annotations: [
      ["대화형 인터페이스", "검색어 대신 자연어 질문과 후속 대화로 정보를 찾고 요청하는 화면 방식입니다."],
      ["출처", "AI 답변의 근거가 된 문서나 규정을 사용자가 다시 확인할 수 있도록 표시한 정보입니다."],
      ["실행 가능성", "AI가 약속한 주문·신청·예약을 실제 연동 시스템과 권한으로 완료할 수 있는지를 뜻합니다."],
      ["페르소나", "직무와 상황이 다른 직원의 질문 맥락을 재현하기 위해 만든 가상의 사용자 유형입니다."],
    ],
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
    characterCount: "17,514",
    readTime: "22분",
    highlights: [
      "유용한 답변과 개인정보 보호 사이의 경계",
      "출처가 있다는 사실만으로 답변이 규정에 충실하다고 볼 수는 없습니다",
      "모델이나 Prompt가 바뀌어도 같은 조건으로 결과를 다시 확인",
    ],
    annotations: [
      ["MVP", "Minimum Viable Product의 약자로, 핵심 가설과 사용 흐름을 검증할 수 있는 최소 기능 제품입니다."],
      ["RAG", "질문과 관련된 문서를 먼저 검색한 뒤, 그 근거를 사용해 답변을 생성하는 방식입니다."],
      ["Chunking", "긴 문서를 검색 가능한 의미 단위의 작은 조각으로 나누는 작업입니다."],
      ["Citation", "답변이 참고한 규정의 장·조항이나 문서 제목을 사용자가 확인하도록 붙이는 출처 표기입니다."],
      ["평가 하네스", "같은 질문·권한·기대 동작·통과 조건을 반복 실행하고 결과를 비교하는 평가 구조입니다."],
    ],
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
    characterCount: "9,844",
    readTime: "13분",
    highlights: [
      "데이터의 양보다 이번 대화와의 관련성을 먼저",
      "최종 사용 여부를 AI가 결정해서는 안 된다고",
      "팬에게 자동 전송되지 않습니다",
    ],
    annotations: [
      ["생성형 AI", "주어진 입력과 지시를 바탕으로 요약·문장·이미지 같은 새 결과를 만드는 AI입니다."],
      ["API", "애플리케이션이 외부 모델에 입력을 보내고 결과를 받을 수 있게 하는 연결 방식입니다."],
      ["구조화된 출력", "요약·안전 판단·답글 제안처럼 결과 항목과 형식을 미리 정해 받는 방식입니다."],
      ["Prompt", "모델이 사용할 자료, 생성할 결과, 지켜야 할 제한 조건을 정한 지시문입니다."],
      ["지시 우회 공격", "입력 데이터에 규칙을 무시하라는 문장을 섞어 모델의 기존 지시를 바꾸려는 공격입니다."],
    ],
    thumbnail: "assets/thumbnails/post-05-user.jpg",
    thumbnailAlt: "분홍색과 보라색 하트 아이콘",
    markdown: "content/posts/05-fan-communication-ai-prototype.md",
  },
];

const articleList = document.querySelector("#articleList");
const homeView = document.querySelector("#homeView");
const articleView = document.querySelector("#articleView");
const progress = document.querySelector("#readingProgress");
const printDialog = document.querySelector("#printDialog");
const openPrint = document.querySelector("#openPrint");
const closePrint = document.querySelector("#closePrint");
const cancelPrint = document.querySelector("#cancelPrint");
const toggleAllPrint = document.querySelector("#toggleAllPrint");
const printSelected = document.querySelector("#printSelected");
const printOptions = document.querySelector("#printOptions");
const printSelectionStatus = document.querySelector("#printSelectionStatus");
const printView = document.querySelector("#printView");
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
    decorateArticleContent(article);
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
  result = result.replace(/&lt;small&gt;([\s\S]*?)&lt;\/small&gt;/g, "<small>$1</small>");
  result = result.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
  result = result.replace(/`([^`]+)`/g, "<code>$1</code>");
  result = result.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  result = result.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return result;
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function decorateArticleContent(article) {
  const containers = [
    articleView.querySelector(".article-hero-subtitle"),
    articleView.querySelector(".markdown-body"),
  ].filter(Boolean);

  decorateContainers(containers, article);
}

function decorateContainers(containers, article) {
  article.highlights.forEach((phrase) => {
    wrapFirstTextMatch(containers, phrase, (text) => {
      const mark = document.createElement("mark");
      mark.className = "key-emphasis";
      mark.textContent = text;
      return mark;
    });
  });

  article.annotations.forEach(([term, explanation]) => {
    wrapFirstTextMatch(containers, term, (text) => {
      const note = document.createElement("span");
      note.className = "term-note";
      note.tabIndex = 0;
      note.dataset.note = explanation;
      note.setAttribute("aria-label", `${text}: ${explanation}`);
      note.textContent = text;
      return note;
    });
  });
}

function wrapFirstTextMatch(containers, phrase, createElement) {
  const blocked = "a, code, pre, .term-note";

  for (const container of containers) {
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
    let node;

    while ((node = walker.nextNode())) {
      if (!node.parentElement || node.parentElement.closest(blocked)) continue;
      const index = node.textContent.indexOf(phrase);
      if (index === -1) continue;

      const before = node.textContent.slice(0, index);
      const after = node.textContent.slice(index + phrase.length);
      const fragment = document.createDocumentFragment();
      if (before) fragment.append(document.createTextNode(before));
      fragment.append(createElement(phrase));
      if (after) fragment.append(document.createTextNode(after));
      node.replaceWith(fragment);
      return true;
    }
  }

  return false;
}

function renderPrintOptions() {
  const currentSlug = location.hash.match(/^#article\/(.+)$/)?.[1];
  const checkedSlugs = currentSlug ? new Set([currentSlug]) : new Set(articles.map((article) => article.slug));

  printOptions.innerHTML = articles.map((article) => `
    <label class="print-option">
      <input type="checkbox" name="print-article" value="${article.slug}" ${checkedSlugs.has(article.slug) ? "checked" : ""} />
      <span class="print-option-check" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m6 12 4 4 8-8" /></svg></span>
      <span class="print-option-copy">
        <strong>${article.title}</strong>
        <span>${article.publishedMonth} · ${article.characterCount}자 · ${article.readTime} 분량</span>
      </span>
    </label>
  `).join("");

  updatePrintSelection();
}

function selectedPrintArticles() {
  const selected = new Set(
    [...printOptions.querySelectorAll('input[name="print-article"]:checked')].map((input) => input.value),
  );
  return articles.filter((article) => selected.has(article.slug));
}

function updatePrintSelection() {
  const count = selectedPrintArticles().length;
  printSelectionStatus.textContent = `${count}개 게시글 선택`;
  printSelected.disabled = count === 0;
  toggleAllPrint.textContent = count === articles.length ? "선택 해제" : "전체 선택";
}

function toggleAllPrintOptions() {
  const checkboxes = [...printOptions.querySelectorAll('input[name="print-article"]')];
  const shouldCheck = checkboxes.some((input) => !input.checked);
  checkboxes.forEach((input) => { input.checked = shouldCheck; });
  updatePrintSelection();
}

async function prepareAndPrintArticles() {
  const selected = selectedPrintArticles();
  if (!selected.length) return;

  const originalLabel = printSelected.textContent;
  printSelected.disabled = true;
  printSelected.textContent = "PDF 준비 중…";

  try {
    const markdownFiles = await Promise.all(selected.map((article) => loadMarkdown(article.markdown)));
    printView.innerHTML = selected.map((article, index) => `
      <article class="print-article" data-print-slug="${article.slug}">
        <header class="print-article-header">
          <p>최수호 포트폴리오 블로그</p>
          <h1>${article.title}</h1>
          <p class="print-article-subtitle">${article.subtitle}</p>
          <div>${article.publishedMonth} · ${article.characterCount}자 · ${article.readTime} 분량</div>
        </header>
        <div class="print-article-body markdown-body">${markdownToHtml(stripEditorNotes(markdownFiles[index]))}</div>
        <section class="print-glossary" aria-label="용어 설명">
          <h2>용어 설명</h2>
          <dl>${article.annotations.map(([term, explanation]) => `<div><dt>${term}</dt><dd>${explanation}</dd></div>`).join("")}</dl>
        </section>
      </article>
    `).join("");

    selected.forEach((article) => {
      const root = printView.querySelector(`[data-print-slug="${article.slug}"]`);
      decorateContainers([root.querySelector(".print-article-subtitle"), root.querySelector(".print-article-body")], article);
    });

    const previousTitle = document.title;
    document.title = `최수호_포트폴리오_게시글_${selected.length}편`;
    printDialog.close();
    window.print();
    document.title = previousTitle;
  } catch (error) {
    console.error(error);
    printSelectionStatus.textContent = "PDF 준비에 실패했습니다. 잠시 후 다시 시도해 주세요.";
  } finally {
    printSelected.textContent = originalLabel;
    updatePrintSelection();
  }
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

openPrint.addEventListener("click", () => {
  renderPrintOptions();
  printDialog.showModal();
});
closePrint.addEventListener("click", () => printDialog.close());
cancelPrint.addEventListener("click", () => printDialog.close());
toggleAllPrint.addEventListener("click", toggleAllPrintOptions);
printSelected.addEventListener("click", prepareAndPrintArticles);
printOptions.addEventListener("change", updatePrintSelection);
printDialog.addEventListener("click", (event) => {
  if (event.target === printDialog) printDialog.close();
});
window.addEventListener("hashchange", route);
window.addEventListener("scroll", updateProgress, { passive: true });

renderCards();
route();
