const projects = [
  {
    slug: "webtoon-ai-short-animation",
    number: "PROJECT 01",
    status: "영상 재생",
    label: "KAKAO ENTERTAINMENT · AI SHORT ANIMATION",
    title: "웹툰 IP를 AI 애니메이션으로 확장하는 제작 과정",
    shortTitle: "웹툰 AI 숏애니메이션",
    summary:
      "웹툰 숏츠 제작 에이전트 출시 후 확인된 CP사의 요구를 바탕으로, 웹툰 IP를 움직임·음성·사운드가 있는 애니메이션 형식으로 확장했습니다. 전 공정을 직접 제작하며 AI가 반복할 작업과 제작자가 판단할 단계를 구분했습니다.",
    tags: ["Layer-in-Layer", "Image-to-Video", "TTS·Sound", "Post-production"],
    facts: ["카카오엔터테인먼트", "AI 숏애니메이션", "Layer-in-Layer", "일부 결과 if(kakao)25 소개"],
    media: {
      type: "embed",
      src: "https://drive.google.com/file/d/1gT5jJt-nunGOnDp9vPUxLPh1JDAZqSDY/preview",
    },
    article: "content/posts/01-webtoon-ai-short-animation.md",
  },
  {
    slug: "antiframe",
    number: "PROJECT 02",
    status: "API 없는 데모",
    label: "PERSONAL PROJECT · ANTIFRAME",
    title: "자연어로 영상 초안을 만들고 수정하는 제작 워크플로우",
    shortTitle: "Antiframe",
    summary:
      "대본 입력부터 장면별 초안, 자연어 수정과 부분 재실행을 하나의 흐름으로 연결했습니다. 반복 입력은 자동화하고 콘텐츠 방향을 결정하는 단계에는 사용자의 확인을 남겼습니다.",
    tags: ["Product Workflow", "Natural-language Edit", "Human Checkpoint", "Retry"],
    facts: ["개인 프로젝트", "기획·개발 100%", "초기 사용자 42명", "설문 39명 중 37명 지속 사용 의향"],
    media: {
      type: "image",
      src: "assets/projects/antiframe/format-select.png",
      alt: "Antiframe의 영상 형식 선택 화면",
    },
    article: "content/posts/02-antiframe.md",
  },
  {
    slug: "ai-drama",
    number: "PROJECT 03",
    status: "제작 중",
    label: "PERSONAL PROJECT · AI DRAMA",
    title: "AI 드라마의 인물·공간·구도를 고정하는 제작 방식",
    shortTitle: "AI 드라마",
    summary:
      "숏애니에서 정립한 Layer-in-Layer를 실사형 장면으로 확장합니다. 스케치, Character Pack과 Space Pack을 기준으로 인물·공간·연기의 연속성을 설계하고 있습니다.",
    tags: ["Sketch", "Character Pack", "Space Pack", "Continuity QC"],
    facts: ["개인 프로젝트", "AI 드라마", "제작 중", "기여도 100%"],
    media: { type: "placeholder" },
    article: "content/posts/02-cinematic-layer-in-layer.md",
  },
];

const projectGrid = document.querySelector("#projectGrid");
const homeView = document.querySelector("#homeView");
const articleView = document.querySelector("#articleView");
const readingProgress = document.querySelector("#readingProgress");
let renderRequest = 0;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function mediaMarkup(project) {
  if (project.media?.type === "embed") {
    return `
      <div class="video-shell media-embed">
        <iframe
          src="${escapeHtml(project.media.src)}"
          title="${escapeHtml(project.title)} 영상"
          loading="lazy"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
    `;
  }

  if (project.media?.type === "image") {
    return `
      <div class="video-shell media-image">
        <img
          src="${escapeHtml(project.media.src)}"
          alt="${escapeHtml(project.media.alt || project.title)}"
          loading="lazy"
        />
        <div class="media-image-label">
          <span>${escapeHtml(project.number)}</span>
          <strong>${escapeHtml(project.status)}</strong>
        </div>
      </div>
    `;
  }

  return `
    <div class="video-shell">
      <div class="video-placeholder">
        <div class="video-placeholder-top">
          <span class="video-index">${escapeHtml(project.number)}</span>
          <span class="video-status">${escapeHtml(project.status)}</span>
        </div>
        <span class="placeholder-title" aria-hidden="true">IN PRODUCTION</span>
        <div class="video-placeholder-bottom">
          <strong>${escapeHtml(project.shortTitle)}</strong>
          <small>완성 장면과 제작 기록이 이 위치에 업데이트됩니다.</small>
        </div>
      </div>
    </div>
  `;
}

function renderProjects() {
  projectGrid.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">
          ${mediaMarkup(project)}
          <div class="project-content">
            <p class="project-label">${project.label}</p>
            <h3>${escapeHtml(project.title)}</h3>
            <p class="project-summary">${escapeHtml(project.summary)}</p>
            <div class="project-meta">
              ${project.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
            </div>
            <a class="project-link" href="#project/${project.slug}">
              <span>제작 방식과 워크플로우 보기</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      `,
    )
    .join("");
}

function inlineMarkdown(text) {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
      '<a href="$2" target="_blank" rel="noreferrer">$1</a>',
    );
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const output = [];
  let paragraph = [];
  let listType = null;
  let listItems = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    output.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (!listType) return;
    output.push(
      `<${listType}>${listItems.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</${listType}>`,
    );
    listType = null;
    listItems = [];
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    const heading = trimmed.match(/^(#{2,3})\s+(.+)$/);
    const unordered = trimmed.match(/^[-*]\s+(.+)$/);
    const ordered = trimmed.match(/^\d+\.\s+(.+)$/);
    const image = trimmed.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/);

    if (!trimmed) {
      flushParagraph();
      flushList();
      return;
    }

    if (trimmed === "---") {
      flushParagraph();
      flushList();
      output.push("<hr />");
      return;
    }

    if (trimmed === "[[antiframe-demo]]") {
      flushParagraph();
      flushList();
      output.push(antiframeDemoMarkup());
      return;
    }

    if (image) {
      flushParagraph();
      flushList();
      output.push(`
        <figure class="article-figure">
          <img src="${escapeHtml(image[2])}" alt="${escapeHtml(image[1])}" loading="lazy" />
          ${image[1] ? `<figcaption>${inlineMarkdown(image[1])}</figcaption>` : ""}
        </figure>
      `);
      return;
    }

    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      output.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      return;
    }

    if (trimmed.startsWith("> ")) {
      flushParagraph();
      flushList();
      output.push(`<blockquote>${inlineMarkdown(trimmed.slice(2))}</blockquote>`);
      return;
    }

    if (unordered || ordered) {
      flushParagraph();
      const nextType = unordered ? "ul" : "ol";
      if (listType && listType !== nextType) flushList();
      listType = nextType;
      listItems.push((unordered || ordered)[1]);
      return;
    }

    flushList();
    paragraph.push(trimmed);
  });

  flushParagraph();
  flushList();
  return output.join("");
}

function antiframeDemoMarkup() {
  return `
    <section class="antiframe-demo" data-antiframe-demo aria-labelledby="demoTitle">
      <div class="demo-head">
        <p>STATIC PRODUCT DEMO · API NOT CONNECTED</p>
        <h3 id="demoTitle">필요한 장면만 말로 수정해보기</h3>
        <span>아래 입력은 외부 API를 호출하지 않습니다. 실제 제품의 장면 선택 → 자연어 요청 → 변경 범위 확인 흐름만 재현했습니다.</span>
      </div>
      <div class="demo-layout">
        <div class="demo-scenes" role="list" aria-label="영상 초안 장면">
          <button class="demo-scene is-selected" type="button" data-scene="0" role="listitem">
            <span>01</span>
            <strong>문제 제기</strong>
            <small>도시 열섬 현상을 한 문장으로 소개</small>
          </button>
          <button class="demo-scene" type="button" data-scene="1" role="listitem">
            <span>02</span>
            <strong>원인 설명</strong>
            <small>아스팔트와 건물의 열 흡수 구조</small>
          </button>
          <button class="demo-scene" type="button" data-scene="2" role="listitem">
            <span>03</span>
            <strong>대안 제시</strong>
            <small>녹지와 차열 포장의 역할</small>
          </button>
        </div>
        <div class="demo-editor">
          <div class="demo-preview" aria-live="polite">
            <div>
              <span>선택한 장면</span>
              <strong data-demo-title>01 · 문제 제기</strong>
            </div>
            <dl>
              <div><dt>내레이션</dt><dd data-demo-narration>여름 도심은 주변보다 더 뜨거워집니다.</dd></div>
              <div><dt>화면</dt><dd data-demo-visual>열화상 카메라로 본 도심 전경</dd></div>
              <div><dt>움직임</dt><dd data-demo-motion>천천히 줌 인</dd></div>
            </dl>
          </div>
          <div class="demo-chips" aria-label="수정 요청 예시">
            <button type="button" data-request="내레이션을 더 짧고 쉽게 바꿔줘">더 짧고 쉽게</button>
            <button type="button" data-request="화면을 수치가 보이는 자료 중심으로 바꿔줘">자료 중심으로</button>
            <button type="button" data-request="전환과 움직임을 더 차분하게 바꿔줘">더 차분하게</button>
          </div>
          <form class="demo-form">
            <label for="demoRequest">수정할 내용을 말로 입력</label>
            <div>
              <input id="demoRequest" name="request" value="내레이션을 더 짧고 쉽게 바꿔줘" autocomplete="off" />
              <button type="submit">변경 범위 확인</button>
            </div>
          </form>
          <div class="demo-result" data-demo-result aria-live="polite">
            <span>대기</span>
            <p>장면을 고르고 수정 요청을 적용해보세요.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function initializeAntiframeDemo(container) {
  const demo = container.querySelector("[data-antiframe-demo]");
  if (!demo) return;

  const scenes = [
    {
      title: "01 · 문제 제기",
      narration: "여름 도심은 주변보다 더 뜨거워집니다.",
      visual: "열화상 카메라로 본 도심 전경",
      motion: "천천히 줌 인",
    },
    {
      title: "02 · 원인 설명",
      narration: "아스팔트와 건물은 낮 동안 받은 열을 오래 저장합니다.",
      visual: "도로와 건물 표면의 열 축적 비교",
      motion: "좌우 비교 화면",
    },
    {
      title: "03 · 대안 제시",
      narration: "도시의 녹지와 차열 포장은 체감 온도를 낮추는 방법입니다.",
      visual: "녹지 조성 전후의 거리",
      motion: "전후 장면 교차",
    },
  ];
  let selected = 0;
  const title = demo.querySelector("[data-demo-title]");
  const narration = demo.querySelector("[data-demo-narration]");
  const visual = demo.querySelector("[data-demo-visual]");
  const motion = demo.querySelector("[data-demo-motion]");
  const result = demo.querySelector("[data-demo-result]");
  const input = demo.querySelector("input");

  const renderScene = () => {
    const scene = scenes[selected];
    title.textContent = scene.title;
    narration.textContent = scene.narration;
    visual.textContent = scene.visual;
    motion.textContent = scene.motion;
  };

  demo.querySelectorAll("[data-scene]").forEach((button) => {
    button.addEventListener("click", () => {
      selected = Number(button.dataset.scene);
      demo.querySelectorAll("[data-scene]").forEach((item) => item.classList.remove("is-selected"));
      button.classList.add("is-selected");
      renderScene();
      result.innerHTML = `<span>장면 선택</span><p>${escapeHtml(scenes[selected].title)}의 제작 요소를 불러왔습니다.</p>`;
    });
  });

  demo.querySelectorAll("[data-request]").forEach((button) => {
    button.addEventListener("click", () => {
      input.value = button.dataset.request;
      input.focus();
    });
  });

  demo.querySelector(".demo-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const request = input.value.trim();
    if (!request) {
      result.innerHTML = "<span>입력 필요</span><p>수정할 내용을 자연어로 입력해 주세요.</p>";
      return;
    }

    const changed = [];
    if (/짧|쉽|내레이션|대본/.test(request)) {
      scenes[selected].narration =
        selected === 0 ? "도시는 여름에 더 뜨거워집니다." : scenes[selected].narration.split(" ").slice(0, 6).join(" ") + ".";
      changed.push("내레이션");
    }
    if (/화면|자료|수치|이미지|영상/.test(request)) {
      scenes[selected].visual = "온도 수치가 표시된 비교 그래프와 도심 자료 화면";
      changed.push("화면 자료");
    }
    if (/차분|느리|전환|움직임/.test(request)) {
      scenes[selected].motion = "카메라 고정 · 0.4초 디졸브";
      changed.push("장면 움직임");
    }
    if (!changed.length) {
      changed.push("내레이션·화면 검토");
    }

    renderScene();
    result.innerHTML = `<span>적용 범위</span><p><strong>${escapeHtml(changed.join(", "))}</strong>만 다시 만들도록 분리했습니다. 다른 장면은 유지됩니다.</p>`;
  });
}

async function renderArticle(project) {
  const requestId = ++renderRequest;
  homeView.hidden = true;
  articleView.hidden = false;
  document.body.classList.add("is-article");
  document.title = `${project.title} | AI 콘텐츠 포트폴리오`;
  articleView.innerHTML = `
    <header class="article-hero">
      <div class="article-hero-inner">
        <a class="back-link" href="#work"><span aria-hidden="true">←</span> 프로젝트 목록</a>
        <p class="article-label">${project.label}</p>
        <h1>${escapeHtml(project.title)}</h1>
        <p class="article-lead">${escapeHtml(project.summary)}</p>
        <div class="article-facts">
          ${project.facts.map((fact) => `<span>${escapeHtml(fact)}</span>`).join("")}
        </div>
      </div>
    </header>
    <div class="article-video">${mediaMarkup(project)}</div>
    <div class="article-body"><p class="article-loading">제작 기록을 불러오는 중입니다.</p></div>
  `;
  window.scrollTo({ top: 0, behavior: "auto" });

  try {
    const response = await fetch(project.article);
    if (!response.ok) throw new Error("article load failed");
    const markdown = await response.text();
    if (requestId !== renderRequest || location.hash !== `#project/${project.slug}`) return;
    const articleBody = articleView.querySelector(".article-body");
    articleBody.innerHTML = markdownToHtml(markdown);
    initializeAntiframeDemo(articleBody);
    const next = projects[(projects.indexOf(project) + 1) % projects.length];
    articleView.insertAdjacentHTML(
      "beforeend",
      `
        <a class="article-next" href="#project/${next.slug}">
          <span>NEXT PROJECT<strong>${escapeHtml(next.title)}</strong></span>
          <b aria-hidden="true">↗</b>
        </a>
      `,
    );
  } catch {
    const articleBody = articleView.querySelector(".article-body");
    if (articleBody) {
      articleBody.innerHTML =
        '<p class="article-error">상세 제작 기록을 불러오지 못했습니다. 잠시 후 다시 확인해 주세요.</p>';
    }
  }
}

function showHome(anchor = "home") {
  ++renderRequest;
  articleView.hidden = true;
  articleView.innerHTML = "";
  homeView.hidden = false;
  document.body.classList.remove("is-article");
  document.title = "AI 콘텐츠 제작과 제작 워크플로우";

  requestAnimationFrame(() => {
    if (anchor === "home") {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    document.querySelector(`#${anchor}`)?.scrollIntoView({ block: "start" });
  });
}

function route() {
  const projectMatch = location.hash.match(/^#project\/(.+)$/);
  if (projectMatch) {
    const project = projects.find((item) => item.slug === projectMatch[1]);
    if (project) {
      renderArticle(project);
      return;
    }
  }

  const anchor = location.hash.replace(/^#/, "") || "home";
  showHome(anchor === "work" ? "work" : "home");
}

function updateProgress() {
  if (!readingProgress) return;
  if (!document.body.classList.contains("is-article")) {
    readingProgress.style.width = "0";
    return;
  }
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const value = available > 0 ? Math.min(100, (window.scrollY / available) * 100) : 0;
  readingProgress.style.width = `${value}%`;
}

renderProjects();
route();
window.addEventListener("hashchange", route);
window.addEventListener("scroll", updateProgress, { passive: true });
