const articles = [
  {
    slug: "melon-ai-playlist-qa",
    tags: ["대화형 AI", "사용자 맥락", "서비스 QA", "TTS"],
    title: "47개 페르소나로 대화형 AI 플레이리스트 서비스 검수하기",
    subtitle: "자연어로 플레이리스트를 만드는 대화형 AI QA에서 서로 다른 생활 리듬과 서비스 이용 경험을 반영한 47개 페르소나를 구성했습니다. 사용자의 표현과 의도가 후속 대화, 추천 결과, TTS까지 유지되는지 검수한 과정을 담았습니다.",
    excerpt: "자연어로 플레이리스트를 만드는 대화형 AI QA에서 서로 다른 생활 리듬과 서비스 이용 경험을 반영한 47개 페르소나를 구성했습니다. 사용자의 표현과 의도가 후속 대화, 추천 결과, TTS까지 유지되는지 검수한 과정을 담았습니다.",
    date: "2026. 07. 12",
    publishedMonth: "2026년 7월",
    characterCount: "17,195",
    readTime: "22분",
    highlights: [
      "여러 차례의 대화를 거쳐 완성되는 음악 목록",
      "이전 대화의 조건이 다음 응답과 최종 플레이리스트까지 유지되는지",
      "사용자의 표현과 의도가 후속 대화, 추천 결과, TTS까지 유지되는지",
    ],
    annotations: [
      ["투바투", "보이그룹 투모로우바이투게더를 팬과 서비스 이용자가 줄여 부르는 이름으로, 정식명 외 사용자 표현을 검수한 사례입니다."],
      ["플리", "플레이리스트를 줄여 부르는 실제 음악 서비스 이용자 표현입니다."],
      ["00년대 감성", "2000년대 음악의 음색·편곡과 당시 대중문화의 기억을 폭넓게 가리키는 비정형 추천 표현입니다."],
    ],
    thumbnail: "assets/thumbnails/post-01-user.jpg",
    thumbnailAlt: "연두색 음표와 음반 모양의 3D 아이콘",
    markdown: "content/posts/01-melon-ai-playlist-qa.md",
  },
  {
    slug: "music-tts-pronunciation-dictionary",
    tags: ["음성합성", "발음사전", "데이터 품질", "반복 검수"],
    title: "멜론 AI DJ가 곡명을 정확히 발음하는 법: TTS 발음사전",
    subtitle: "영어와 숫자가 포함된 곡명·아티스트명 약 3만 5천 개를 발음사전 후보로 정리하고, 초기 약 10% 분량의 단어들을 수동으로 조사했습니다. 조사 기록에서 패턴을 찾고 처리 목표를 조정한 뒤, 주 단위 등록과 적용 확인까지 이어간 과정을 설명합니다.",
    excerpt: "영어와 숫자가 포함된 곡명·아티스트명 약 3만 5천 개를 발음사전 후보로 정리하고, 초기 약 10% 분량의 단어들을 수동으로 조사했습니다. 조사 기록에서 패턴을 찾고 처리 목표를 조정한 뒤, 주 단위 등록과 적용 확인까지 이어간 과정을 설명합니다.",
    date: "2026. 07. 12",
    publishedMonth: "2026년 7월",
    characterCount: "14,823",
    readTime: "19분",
    highlights: [
      "실제 문장에 넣어 재생했을 때",
      "명백한 오독으로 느낄 가능성이 큰 항목을 먼저 줄이는 방향",
      "반복되는 구조에서 명백한 오독을 줄일 수 있는 범위",
    ],
    annotations: [
      ["Op.", "Opus의 약어로, 클래식 작품을 식별하는 작품 번호 표기입니다. 곡 번호나 악장 번호와 역할이 달라 별도로 읽어야 합니다."],
      ["BWV", "Bach-Werke-Verzeichnis의 약어로, 바흐 작품을 분류하는 작품목록 번호입니다."],
      ["조성", "곡의 중심이 되는 음과 장·단조 체계를 뜻합니다. C Minor는 다단조처럼 읽습니다."],
    ],
    thumbnail: "assets/thumbnails/post-02-user.jpg",
    thumbnailAlt: "크림색 페이지와 청록색 표지의 펼쳐진 책 아이콘",
    markdown: "content/posts/02-music-tts-pronunciation-dictionary.md",
  },
  {
    slug: "internal-work-ai-qa",
    tags: ["사내 AI", "대화형 QA", "근거 확인", "실행 가능성"],
    title: "\"사내카페에서 커피 주문해줘\" - 사내용 AI QA 기록",
    subtitle: "사내 정보를 찾아주는 대화형 AI의 초기 QA에 참여해 직원 페르소나별 질문과 후속 대화를 테스트했습니다. 출처에 맞는 답변인지뿐 아니라, 실제로 실행할 수 없는 주문 같은 요청을 가능한 것처럼 안내하는 문제를 어떻게 구분했는지 정리했습니다.",
    excerpt: "사내 정보를 찾아주는 대화형 AI의 초기 QA에 참여해 직원 페르소나별 질문과 후속 대화를 테스트했습니다. 출처에 맞는 답변인지뿐 아니라, 실제로 실행할 수 없는 주문 같은 요청을 가능한 것처럼 안내하는 문제를 어떻게 구분했는지 정리했습니다.",
    date: "2026. 07. 12",
    publishedMonth: "2026년 7월",
    characterCount: "10,263",
    readTime: "13분",
    highlights: [
      "이전 대화의 조건이 유지되는지와 답변이 실제 사내 자료에 맞는지도 함께 확인",
      "실제 시스템과 권한으로 완료할 수 있는지",
      "현재 시스템에서 가능한 범위를 정확하게 말하는 것이 우선",
    ],
    annotations: [
      ["야간 교통비", "야간 촬영이나 근무가 끝난 뒤의 귀가 비용 지원 여부를 묻는 사내 복지 사례로, 시간·장소 조건을 후속 대화에서 유지하는지 확인했습니다."],
      ["사내 카페 주문", "정보 안내와 실제 업무 실행의 경계를 검수한 사례입니다. 보안상 세부 조건은 비식별화했으며, 주문·결제 연동이 없는 상태에서 처리를 약속하는 문제를 보여줍니다."],
      ["완료 오인", "시스템이 실제 업무를 처리하지 않았는데도 사용자가 주문·신청이 완료됐다고 믿게 되는 프로젝트 내 위험 유형입니다."],
    ],
    thumbnail: "assets/thumbnails/post-03-user.jpg",
    thumbnailAlt: "옅은 파란색 렌즈의 돋보기 아이콘",
    markdown: "content/posts/03-internal-work-ai-qa.md",
  },
  {
    slug: "ai-academy-assistant-evaluation-design",
    tags: ["RAG", "AI 평가", "개인정보 보호", "출처 검증"],
    title: "\"방학특강 시간표 알려줘\" - 학원 상담용 AI 챗봇 개발기",
    subtitle: "카카오뱅크 AI에서 영감을 받아, 부모님이 운영하는 수학학원의 반복 상담 문제를 해결할 AI 챗봇 MVP를 만들었습니다. 개발 과정에서 발생한 과잉 거절을 수정하고, 유용한 답변과 개인정보 보호 사이의 경계를 재평가한 과정을 담았습니다.",
    excerpt: "카카오뱅크 AI에서 영감을 받아, 부모님이 운영하는 수학학원의 반복 상담 문제를 해결할 AI 챗봇 MVP를 만들었습니다. 개발 과정에서 발생한 과잉 거절을 수정하고, 유용한 답변과 개인정보 보호 사이의 경계를 재평가한 과정을 담았습니다.",
    date: "2026. 07. 12",
    publishedMonth: "2026년 7월",
    characterCount: "17,657",
    readTime: "23분",
    highlights: [
      "유용한 답변과 개인정보 보호 사이의 경계",
      "출처가 있다는 사실만으로 답변이 규정에 충실하다고 볼 수는 없습니다",
      "모델이나 Prompt가 바뀌어도 같은 조건으로 결과를 다시 확인",
    ],
    annotations: [
      ["운영규정", "수강료·휴원·보강·출결처럼 학원이 실제 상담에서 따라야 하는 확정 기준을 모은 문서로, 이 프로젝트의 답변 근거입니다."],
      ["보강", "학생 결석이나 학원 휴원으로 진행하지 못한 수업을 별도 일정에 보충하는 학원 운영 방식입니다."],
      ["반 편성", "학생의 학교·학년·진도와 학습 수준을 기준으로 적합한 수업 반을 배정하는 과정입니다."],
      ["월간 리포트", "학부모가 한 달 단위로 확인할 수 있도록 자녀의 출결·진도·시험 결과와 등록된 교사 의견을 묶은 개인화 결과물입니다."],
    ],
    thumbnail: "assets/thumbnails/post-04-user.jpg",
    thumbnailAlt: "흰색과 파란색 대화 말풍선 아이콘",
    markdown: "content/posts/04-ai-academy-assistant-evaluation-design.md",
  },
  {
    slug: "fan-communication-ai-prototype",
    tags: ["생성형 AI", "입력 정제", "AI 안전", "프로토타입"],
    title: "팬 활동 데이터에서 소통에 필요한 정보만 남기는 법",
    subtitle: "카카오엔터테인먼트 사내 AI 해커톤에서 팬의 최근 활동을 요약해 아티스트의 답글 작성을 돕는 프로토타입을 팀으로 제작해 최종 3위(우수상)을 받았습니다. 팬 활동 가운데 대화에 필요한 정보만 남기고 근거 없는 추론과 지킬 수 없는 답글 제안을 제한한 과정을 설명합니다.",
    excerpt: "카카오엔터테인먼트 사내 AI 해커톤에서 팬의 최근 활동을 요약해 아티스트의 답글 작성을 돕는 프로토타입을 팀으로 제작해 최종 3위(우수상)을 받았습니다. 팬 활동 가운데 대화에 필요한 정보만 남기고 근거 없는 추론과 지킬 수 없는 답글 제안을 제한한 과정을 설명합니다.",
    date: "2026. 07. 12",
    publishedMonth: "2026년 7월",
    characterCount: "9,635",
    readTime: "13분",
    highlights: [
      "데이터의 양보다 이번 대화와의 관련성을 먼저",
      "최종 사용 여부를 AI가 결정해서는 안 된다고",
      "팬에게 자동 전송되지 않습니다",
    ],
    annotations: [
      ["팬 플랫폼", "아티스트가 게시글과 콘텐츠를 올리고 팬이 댓글·반응을 남기며 소통하는 서비스입니다. 이 프로젝트에서는 답글 작성 전 팬의 최근 활동을 확인하는 맥락을 다뤘습니다."],
      ["공개 활동", "팬이 플랫폼에 공개적으로 남긴 게시글·댓글·콘텐츠 반응 가운데, 정해진 최근 범위에서 가져온 기록을 뜻합니다."],
      ["저정보 활동", "‘좋아요’, ‘ㅋㅋㅋ’처럼 반복적이거나 짧아 현재 답글에 참고할 구체적인 관심사를 확인하기 어려운 활동입니다."],
      ["답글 제안", "팬에게 자동 전송되는 답변이 아니라, 아티스트가 사실관계와 표현을 확인하고 수정할 수 있는 참고 초안입니다."],
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
let revealFallbackTimer;
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
    body.innerHTML = markdownToHtml(prepareArticleMarkdown(markdown));
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

function prepareArticleMarkdown(markdown) {
  let content = markdown.replace(/\r/g, "");
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
          <div>${article.publishedMonth} · ${article.characterCount}자 · ${article.readTime} 분량</div>
        </header>
        <div class="print-article-body markdown-body">${markdownToHtml(prepareArticleMarkdown(markdownFiles[index]))}</div>
        <section class="print-glossary" aria-label="용어 설명">
          <h2>용어 설명</h2>
          <dl>${article.annotations.map(([term, explanation]) => `<div><dt>${term}</dt><dd>${explanation}</dd></div>`).join("")}</dl>
        </section>
      </article>
    `).join("");

    selected.forEach((article) => {
      const root = printView.querySelector(`[data-print-slug="${article.slug}"]`);
      decorateContainers([root.querySelector(".print-article-body")].filter(Boolean), article);
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
  window.clearTimeout(revealFallbackTimer);

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
  revealFallbackTimer = window.setTimeout(() => {
    targets.forEach((target) => target.classList.add("is-visible"));
    revealObserver?.disconnect();
  }, 900);
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
