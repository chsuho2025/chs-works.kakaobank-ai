const projects = [
  {
    slug: "webtoon-ai-short-animation",
    number: "FILM 01",
    status: "영상 연결 예정",
    label: "KAKAO ENTERTAINMENT · AI SHORT ANIMATION",
    title: "웹툰 IP를 움직이는 AI 숏애니 제작",
    shortTitle: "웹툰 AI 숏애니",
    summary:
      "웹툰 원작을 세로형 AI 숏애니로 제작한 프로젝트입니다. 컷 구성, 첫 프레임, 모션, TTS·사운드, 편집과 QC 과정을 정리했습니다.",
    tags: ["Gemini", "Kling AI", "ElevenLabs", "Premiere Pro"],
    facts: ["팀 프로젝트", "웹툰 IP 기반", "End-to-End 제작", "공개 범위 재구성"],
    video: "assets/videos/project-01.mp4",
    article: "content/posts/01-webtoon-ai-short-animation.md",
  },
  {
    slug: "cinematic-layer-in-layer",
    number: "FILM 02",
    status: "제작 중",
    label: "PERSONAL PROJECT · AI DRAMA SCENE",
    title: "Layer-in-Layer를 적용한 AI 드라마 장면",
    shortTitle: "AI 드라마 제작",
    summary:
      "Layer-in-Layer를 AI 드라마 장면에 적용하는 프로젝트입니다. Scene Bible, Shot Design, 연기 지시와 Continuity QC 과정을 기록합니다.",
    tags: ["Scene Bible", "Shot Design", "Layer-in-Layer", "QC"],
    facts: ["개인 프로젝트", "AI 드라마", "제작 중", "기여도 100%"],
    video: "assets/videos/project-02.mp4",
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

function videoMarkup(project) {
  return `
    <div class="video-shell" data-video-shell>
      <video controls playsinline preload="metadata" aria-label="${escapeHtml(project.title)} 영상">
        <source src="${project.video}" type="video/mp4" />
      </video>
      <div class="video-placeholder">
        <div class="video-placeholder-top">
          <span class="video-index">${project.number}</span>
          <span class="video-status">${project.status}</span>
        </div>
        <span class="play-symbol" aria-hidden="true">▶</span>
        <div class="video-placeholder-bottom">
          <strong>${escapeHtml(project.shortTitle)}</strong>
          <small>MP4 파일을 연결하면 이 자리에서 바로 재생됩니다.</small>
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
          ${videoMarkup(project)}
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
  initializeVideos(projectGrid);
}

function initializeVideos(container) {
  container.querySelectorAll("[data-video-shell]").forEach((shell) => {
    const video = shell.querySelector("video");
    if (!video) return;
    const showVideo = () => shell.classList.add("is-ready");
    const showFallback = () => shell.classList.remove("is-ready");
    video.addEventListener("loadedmetadata", showVideo, { once: true });
    video.addEventListener("error", showFallback, { once: true });
    if (video.readyState >= 1) showVideo();
  });
}

function inlineMarkdown(text) {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`(.+?)`/g, "<code>$1</code>");
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
    <div class="article-video">${videoMarkup(project)}</div>
    <div class="article-body"><p class="article-loading">제작 기록을 불러오는 중입니다.</p></div>
  `;
  initializeVideos(articleView);
  window.scrollTo({ top: 0, behavior: "auto" });

  try {
    const response = await fetch(project.article);
    if (!response.ok) throw new Error("article load failed");
    const markdown = await response.text();
    if (requestId !== renderRequest || location.hash !== `#project/${project.slug}`) return;
    const articleBody = articleView.querySelector(".article-body");
    articleBody.innerHTML = markdownToHtml(markdown);
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
  document.title = "AI 콘텐츠 포트폴리오";

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
