const portfolioCategories = [
  {
    title: "Faceless Videos",
    accent: "Story Lane",
    tone: "orange",
    description: "Story-led edits built on motion, atmosphere, and sharp pacing.",
    items: [
      {
        title: "Biography Edit",
        note: "Long-form storytelling",
        kicker: "Faceless Story",
        kind: "youtube",
        src: "https://www.youtube.com/embed/frLw4JbUqVM?rel=0",
        poster: "https://i.ytimg.com/vi/frLw4JbUqVM/hqdefault.jpg",
        source: "https://youtu.be/frLw4JbUqVM"
      },
      {
        title: "Gaming Breakdown",
        note: "Built for engagement",
        kicker: "Faceless Story",
        kind: "youtube",
        src: "https://www.youtube.com/embed/AUdwklthPcs?rel=0",
        poster: "https://i.ytimg.com/vi/AUdwklthPcs/hqdefault.jpg",
        source: "https://youtu.be/AUdwklthPcs"
      },
      {
        title: "Sports Story Edit",
        note: "Narrative-led pacing",
        kicker: "Faceless Story",
        kind: "youtube",
        src: "https://www.youtube.com/embed/gg5MH3dnOS8?rel=0",
        poster: "https://i.ytimg.com/vi/gg5MH3dnOS8/hqdefault.jpg",
        source: "https://youtu.be/gg5MH3dnOS8"
      }
    ]
  },
  {
    title: "Ads",
    accent: "Conversion Lane",
    tone: "sand",
    description: "Fast, direct creative made to sell attention in seconds.",
    items: [
      {
        title: "Promo Cut 01",
        note: "Hook-first ad creative",
        kicker: "Ad Creative",
        kind: "youtube",
        src: "https://www.youtube.com/embed/T95pmYmxY6Y?rel=0",
        poster: "https://i.ytimg.com/vi/T95pmYmxY6Y/hqdefault.jpg",
        source: "https://youtu.be/T95pmYmxY6Y"
      },
      {
        title: "Hook Test 02",
        note: "Built to grab fast",
        kicker: "Ad Creative",
        kind: "youtube",
        src: "https://www.youtube.com/embed/N6TCxz3QcTQ?rel=0",
        poster: "https://i.ytimg.com/vi/N6TCxz3QcTQ/hqdefault.jpg",
        source: "https://youtu.be/N6TCxz3QcTQ"
      },
      {
        title: "Brand Spot 03",
        note: "Quick promotional cut",
        kicker: "Ad Creative",
        kind: "youtube",
        src: "https://www.youtube.com/embed/ysmS6BMelC4?rel=0",
        poster: "https://i.ytimg.com/vi/ysmS6BMelC4/hqdefault.jpg",
        source: "https://youtube.com/shorts/ysmS6BMelC4?feature=share"
      }
    ]
  },
  {
    title: "Short Form",
    accent: "Social Lane",
    tone: "pink",
    description: "Short cuts shaped for speed, rhythm, and replay value.",
    items: [
      {
        title: "Reel Cut 01",
        note: "Fast and punchy",
        kicker: "Short Form",
        kind: "youtube",
        src: "https://www.youtube.com/embed/y3GoxJVZhDI?rel=0",
        poster: "https://i.ytimg.com/vi/y3GoxJVZhDI/hqdefault.jpg",
        source: "https://youtube.com/shorts/y3GoxJVZhDI?feature=share"
      },
      {
        title: "Shorts Cut 02",
        note: "Built for instant retention",
        kicker: "Short Form",
        kind: "youtube",
        src: "https://www.youtube.com/embed/6sYZ2L0KKZU?rel=0",
        poster: "https://i.ytimg.com/vi/6sYZ2L0KKZU/hqdefault.jpg",
        source: "https://youtube.com/shorts/6sYZ2L0KKZU?feature=share"
      }
    ]
  },
  {
    title: "Anime / AMV",
    accent: "Emotion Lane",
    tone: "mint",
    description: "Emotion-heavy edits powered by timing, music, and momentum.",
    items: [
      {
        title: "Anime Cut 01",
        note: "Tension and release",
        kicker: "Anime / AMV",
        kind: "youtube",
        src: "https://www.youtube.com/embed/0O3bs8L8JhI?rel=0",
        poster: "https://i.ytimg.com/vi/0O3bs8L8JhI/hqdefault.jpg",
        source: "https://youtube.com/shorts/0O3bs8L8JhI?feature=share"
      },
      {
        title: "AMV Cut 02",
        note: "Rhythmic anime storytelling",
        kicker: "Anime / AMV",
        kind: "youtube",
        src: "https://www.youtube.com/embed/Kw6rgom6fvc?rel=0",
        poster: "https://i.ytimg.com/vi/Kw6rgom6fvc/hqdefault.jpg",
        source: "https://youtube.com/shorts/Kw6rgom6fvc?feature=share"
      },
    ]
  },
  {
    title: "Long Form",
    accent: "Story Lane",
    tone: "orange",
    description: "Longer cuts shaped for story flow, hold time, and stronger progression.",
    items: [
      {
        title: "Long Form Cut 01",
        note: "Missing link for now",
        kicker: "Long Form",
        source: "mailto:abhinaydev27@gmail.com"
      }
    ]
  },
  {
    title: "AI Video Ads",
    accent: "Private Lane",
    tone: "paper",
    description: "AI-assisted concepts, voice-led ads, and rapid creative testing.",
    items: [
      {
        title: "Private Samples",
        note: "Available on request",
        kicker: "AI Video Ads",
        source: "mailto:abhinaydev27@gmail.com"
      }
    ]
  }
];

const portfolioStack = document.querySelector("#portfolio-stack");
const projectCount = document.querySelector("#project-count");
const categoryCount = document.querySelector("#category-count");
const yearNode = document.querySelector("#year");
const copyButtons = document.querySelectorAll(".contact-copy-btn");

function createCard(item, tone) {
  const card = document.createElement("article");
  card.className = "stack-card";

  const frameMarkup = item.src
    ? `
      <div
        class="stack-card-frame video-shell"
        data-video-kind="${item.kind}"
        data-video-src="${item.src}"
        data-video-title="${item.title}"
        data-video-poster="${item.poster || ""}"
      >
        <button class="video-launch" type="button" aria-label="Play ${item.title}">
          <img
            class="video-thumb-image"
            src="${item.poster || ""}"
            alt="${item.title} thumbnail"
            loading="lazy"
          />
          <span class="video-launch-icon"></span>
          <span class="video-launch-copy">Play Sample</span>
        </button>
      </div>
    `
    : "";

  card.innerHTML = `
    ${frameMarkup}
    <div class="stack-card-copy">
      <div>
        <h4>${item.title}</h4>
        <p>${item.note}</p>
      </div>
      <a href="${item.source}" target="_blank" rel="noreferrer">Open</a>
    </div>
  `;

  return card;
}

function createBand(category) {
  const band = document.createElement("section");
  band.className = "stack-band reveal";

  band.innerHTML = `
    <div class="stack-side">
      <span>${category.accent}</span>
      <h3>${category.title}</h3>
      <p>${category.description}</p>
    </div>
    <div class="stack-grid"></div>
  `;

  const grid = band.querySelector(".stack-grid");
  category.items.forEach((item) => {
    grid.appendChild(createCard(item, category.tone));
  });

  return band;
}

function renderBands() {
  portfolioCategories.forEach((category) => {
    portfolioStack.appendChild(createBand(category));
  });
}

function setupCounts() {
  const totalProjects = portfolioCategories.reduce(
    (sum, category) => sum + category.items.filter((item) => item.src).length,
    0
  );

  projectCount.textContent = totalProjects;
  categoryCount.textContent = portfolioCategories.length;
  yearNode.textContent = new Date().getFullYear();
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });
}

function buildMediaElement(shell) {
  const src = shell.dataset.videoSrc;
  const title = shell.dataset.videoTitle;
  const kind = shell.dataset.videoKind;
  const poster = shell.dataset.videoPoster;

  if (kind === "drive-preview") {
    const iframe = document.createElement("iframe");
    iframe.src = src;
    iframe.title = title;
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    iframe.allowFullscreen = true;
    return iframe;
  }

  const iframe = document.createElement("iframe");
  iframe.src = src.includes("?") ? `${src}&autoplay=1` : `${src}?autoplay=1`;
  iframe.title = title;
  iframe.loading = "lazy";
  iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
  iframe.allowFullscreen = true;
  return iframe;
}

function stopOtherVideos(activeShell) {
  document.querySelectorAll(".video-shell.is-active").forEach((shell) => {
    if (shell === activeShell) {
      return;
    }

    shell.classList.remove("is-active");
    const existingMedia = shell.querySelector("iframe, video");
    if (existingMedia) {
      existingMedia.remove();
    }
  });
}

function setupVideoShells() {
  document.querySelectorAll(".video-shell").forEach((shell) => {
    const trigger = shell.querySelector(".video-launch");
    if (!trigger) {
      return;
    }

    trigger.addEventListener("click", () => {
      const src = shell.dataset.videoSrc;
      const existingMedia = shell.querySelector("iframe, video");

      if (shell.classList.contains("is-active") && existingMedia) {
        return;
      }

      stopOtherVideos(shell);

      if (existingMedia) {
        existingMedia.remove();
      }

      const media = buildMediaElement(shell);
      if (!media) {
        return;
      }

      shell.appendChild(media);
      shell.classList.add("is-active");
    });
  });
}

function setupCopyButtons() {
  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const originalLabel = button.querySelector(".contact-meta span");
      const copyText = button.dataset.copyText;

      try {
        await navigator.clipboard.writeText(copyText);
        originalLabel.textContent = "Copied to clipboard";
        window.setTimeout(() => {
          originalLabel.textContent = "@abhinai27";
        }, 1600);
      } catch {
        originalLabel.textContent = "Copy failed";
        window.setTimeout(() => {
          originalLabel.textContent = "@abhinai27";
        }, 1600);
      }
    });
  });
}

renderBands();
setupCounts();
setupReveal();
setupVideoShells();
setupCopyButtons();
