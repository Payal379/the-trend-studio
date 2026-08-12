/**
 * THE TREND STUDIO — LUXURY EDITORIAL ENGINE
 * Pure Vanilla JavaScript Application Logic
 */

// 1. ARTICLES DATABASE
const ARTICLES_DATA = [
 {
  id: "article-1",
  slug: "timeless-outfit-ideas-for-women",
  title: "15 Timeless Outfit Ideas Every Woman Can Wear",

  subtitle: "Elegant and practical outfit formulas for workdays, weekends, brunch dates, travel, and everyday life.",

  summary: "Discover fifteen polished outfit formulas built around versatile basics, refined layers, and timeless accessories. These easy combinations will help you get dressed with confidence while creating a wardrobe you can wear repeatedly.",

  category: "Outfits",
  readTime: "10 min read",
  date: "Jul 30, 2026",

  author: {
    name: "The Trend Studio",
    role: "Fashion Editorial Team",
    avatar: "/images/pinterest-logo.jpg",
    bio: "The Trend Studio shares timeless outfit inspiration, styling guidance, seasonal edits, and thoughtfully curated wardrobe ideas for modern women."
  },

  image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",

  tags: [
    "Outfit Ideas",
    "Timeless Style",
    "Capsule Wardrobe",
    "Everyday Fashion",
    "Outfits"
  ],

  featured: true,

  content: `
    <p>Creating an elegant wardrobe does not require buying new clothes for every occasion. The most useful outfits are often built from versatile pieces that can be styled in several different ways. A well-fitting blazer, neutral trousers, a classic white shirt, comfortable denim, and thoughtfully chosen accessories can form the foundation of countless polished looks.</p>

    <p>Below are fifteen timeless outfit formulas designed for women who want to look put together without making their daily routine complicated. Adapt each idea to your personal style, lifestyle, climate, and comfort.</p>

    <h2>1. White Shirt and Straight-Leg Jeans</h2>
    <p>Pair a crisp white shirt with straight-leg blue jeans for an effortless everyday outfit. Tuck in the shirt partially, add a structured handbag, and finish with loafers, ballet flats, or clean white sneakers.</p>

    <h2>2. Neutral Blazer and Black Trousers</h2>
    <p>A beige, cream, or camel blazer worn with tailored black trousers creates a polished look suitable for work, meetings, and smart casual occasions. Add a simple fitted top and minimal jewelry to keep the outfit refined.</p>

    <h2>3. Monochrome Beige Outfit</h2>
    <p>Combine different shades of cream, beige, and camel to create a soft monochrome outfit. Mixing textures such as cotton, linen, knitwear, and leather prevents the look from appearing flat.</p>

    <h2>4. Black Dress and Gold Accessories</h2>
    <p>A simple black dress is one of the most versatile pieces in a wardrobe. Style it with delicate gold jewelry, a structured bag, and elegant shoes for dinners, celebrations, or evening events.</p>

    <h2>5. Knit Sweater and Tailored Trousers</h2>
    <p>Balance a soft knit sweater with structured trousers for an outfit that feels comfortable but still looks polished. Choose neutral shades for maximum versatility and add a belt to define the waist.</p>

    <h2>6. White T-Shirt and Relaxed Blazer</h2>
    <p>A high-quality white T-shirt under a relaxed blazer creates an easy modern uniform. Wear it with denim for a casual look or tailored trousers for a more professional finish.</p>

    <h2>7. Midi Skirt and Fitted Top</h2>
    <p>Pair a flowing midi skirt with a fitted top to create a balanced silhouette. Depending on the occasion, complete the outfit with sandals, pointed flats, ankle boots, or simple heels.</p>

    <h2>8. Linen Shirt and Wide-Leg Trousers</h2>
    <p>A lightweight linen shirt with wide-leg trousers is ideal for warm weather. Soft neutrals, muted pastels, and natural fabrics help create an elegant summer outfit without sacrificing comfort.</p>

    <h2>9. Denim Jacket and Simple Dress</h2>
    <p>Layer a denim jacket over a simple midi or maxi dress for a relaxed weekend outfit. This combination works well for brunch, shopping, casual travel, and transitional weather.</p>

    <h2>10. Trench Coat and Everyday Basics</h2>
    <p>Wear a classic trench coat over a plain top and straight-leg trousers or jeans. The structured outer layer instantly makes simple wardrobe basics look more intentional.</p>

    <h2>11. Cardigan and High-Waisted Jeans</h2>
    <p>A fitted or slightly relaxed cardigan paired with high-waisted jeans creates a feminine everyday look. Wear the cardigan buttoned as a top or layer it over a camisole.</p>

    <h2>12. All-Black Minimalist Outfit</h2>
    <p>Build an all-black outfit using pieces with different shapes and textures. For example, combine tailored trousers, a soft knit, a leather handbag, and understated jewelry for a clean and sophisticated result.</p>

    <h2>13. Striped Top and Neutral Trousers</h2>
    <p>A classic striped top adds visual interest without feeling overly trendy. Style it with cream, navy, camel, or black trousers and finish with loafers or simple sneakers.</p>

    <h2>14. Matching Co-Ord Set</h2>
    <p>A matching two-piece set makes getting dressed easy while creating a coordinated appearance. Wear both pieces together or separate them to create additional outfits with items already in your wardrobe.</p>

    <h2>15. Blouse, Dark Denim, and Statement Bag</h2>
    <p>Combine an elegant blouse with dark-wash denim and a distinctive handbag. This outfit works especially well when you need something more polished than casual wear but less formal than office clothing.</p>

    <blockquote>"Timeless style is not about wearing the same outfit forever. It is about choosing versatile pieces that continue to feel useful, comfortable, and true to you."</blockquote>

    <h2>How to Make These Outfits Your Own</h2>
    <p>Use these combinations as starting points rather than strict rules. Adjust the colors, footwear, proportions, and accessories according to your personality. Before buying something new, check whether a similar piece already exists in your wardrobe and consider how many different outfits you can create with it.</p>

    <p>A timeless wardrobe develops gradually. Focus on fit, comfort, versatility, and the pieces you genuinely enjoy wearing. With a small collection of reliable basics and a few thoughtful accessories, getting dressed can become simpler and more confident.</p>
  `,

  comments: []
},
  {
    id: "article-2",
    slug: "timeless-handbags-for-women",
    title: "12 Handbags Every Woman Should Own for a Timeless Wardrobe",
    subtitle: "The essential handbag styles that combine elegance, functionality, and timeless fashion.",
    summary: "From structured totes to classic crossbody bags, discover twelve handbag styles every woman should consider for building a versatile and elegant wardrobe.",
    category: "Accessories",
    readTime: "8 min read",
    date: "Jul 30, 2026",
    author: {
      name: "The Trend Studio",
      role: "Fashion Editorial Team",
      avatar: "/images/pinterest-logo.jpg",
      bio: "Helping women build timeless wardrobes through elegant outfit inspiration, styling tips, seasonal fashion, and carefully curated wardrobe essentials."
    },
    image: "/images/articles/luxury-handbag.jpg",
    tags: [
      "Handbags",
      "Accessories",
      "Luxury Style",
      "Wardrobe Essentials",
      "Fashion"
    ],
    featured: false,
    content: `
      <p>Handbags are more than functional accessories—they define the character of an outfit. Investing in classic handbag silhouettes ensures you always have the right accessory for any occasion.</p>
      
      <h2>1. The Structured Tote</h2>
      <p>A spacious leather tote bag is the ultimate everyday companion, easily accommodating laptops, notebooks, and essentials for work or travel.</p>

      <h2>2. The Classic Crossbody</h2>
      <p>Hands-free and versatile, a minimalist crossbody bag is perfect for weekend errands, travel, and casual outings.</p>

      <blockquote>"In handbag design, proportion and craftsmanship create timeless elegance."</blockquote>

      <p>Choosing neutral shades like black, taupe, tan, and cream guarantees seamless styling across all seasons.</p>
    `,
    comments: [
      {
        name: "Claire Vance",
        date: "Jul 31, 2026",
        text: "A wonderful guide! The structured tote is definitely an everyday essential for me."
      }
    ]
  },
  {
    id: "article-3",
    slug: "20-piece-capsule-wardrobe",
    title: "Fall Capsule Wardrobe: 20 Pieces, Endless Outfit Ideas",
    subtitle: "Build a versatile autumn wardrobe with timeless essentials that mix and match effortlessly throughout the season.",
    summary: "Discover the essential clothing pieces every woman needs for a timeless fall capsule wardrobe. Learn how to create elegant outfits with fewer, high-quality wardrobe staples.",
    category: "Seasonal",
    readTime: "6 min read",
    date: "Jul 30, 2026",
    author: {
      name: "The Trend Studio",
      role: "Fashion Editorial Team",
      avatar: "/images/pinterest-logo.jpg",
      bio: "Helping women build timeless wardrobes through elegant outfit inspiration, styling tips, seasonal fashion, and carefully curated wardrobe essentials."
    },
    image: "/images/articles/fall-capsule-wardrobe.jpg",
    tags: [
      "Fall Fashion",
      "Capsule Wardrobe",
      "Autumn Style",
      "Wardrobe Essentials",
      "Seasonal Fashion"
    ],
    featured: false,
    content: `
      <p>As temperatures drop, autumnal styling comes into its own. Layering soft knits, tailored coats, and structured boots creates warmth without sacrificing elegance.</p>
      
      <h2>Core Capsule Pieces</h2>
      <p>Start with foundational staples: a classic trench coat, a wool camel coat, dark denim, wide-leg trousers, chunky knit sweaters, and leather ankle boots.</p>

      <blockquote>"Autumn dressing is about rich textures, warm neutrals, and artful layering."</blockquote>
    `,
    comments: []
  },
  {
    id: "article-4",
    slug: "best-white-sneakers-for-women",
    title: "10 White Sneakers Every Woman Should Own",
    subtitle: "The ultimate guide to timeless white sneakers that pair effortlessly with every outfit and every season.",
    summary: "Discover the best white sneakers for women that combine comfort, elegance, and versatility. These timeless styles complement everything from jeans to dresses and capsule wardrobes.",
    category: "Accessories",
    readTime: "7 min read",
    date: "Jul 30, 2026",
    author: {
      name: "The Trend Studio",
      role: "Fashion Editorial Team",
      avatar: "/images/pinterest-logo.jpg",
      bio: "Helping women build timeless wardrobes through elegant outfit inspiration, styling tips, seasonal fashion, and carefully curated wardrobe essentials."
    },
    image: "/images/articles/classic-sneakers.jpg",
    tags: [
      "White Sneakers",
      "Women's Shoes",
      "Minimal Fashion",
      "Accessories",
      "Wardrobe Essentials"
    ],
    featured: false,
    content: `
      <p>A clean pair of minimal white leather sneakers bridges the gap between casual comfort and refined elegance.</p>

      <h2>Styling White Sneakers</h2>
      <p>Pair low-profile white sneakers with tailored trousers and a blazer for a modern smart-casual look, or wear them with flowing midi dresses during spring and summer.</p>
    `,
    comments: []
  },
  {
    id: "article-5",
    slug: "minimal-jewelry-for-every-outfit",
    title: "Minimal Jewelry That Elevates Every Outfit",
    subtitle: "Discover timeless jewelry pieces that add elegance and sophistication without overwhelming your personal style.",
    summary: "From delicate gold necklaces to classic pearl earrings, explore the essential minimalist jewelry pieces every woman should own for effortless everyday elegance.",
    category: "Accessories",
    readTime: "6 min read",
    date: "Jul 30, 2026",
    author: {
      name: "The Trend Studio",
      role: "Fashion Editorial Team",
      avatar: "/images/pinterest-logo.jpg",
      bio: "Helping women build timeless wardrobes through elegant outfit inspiration, styling tips, seasonal fashion, and carefully curated wardrobe essentials."
    },
    image: "/images/articles/pearl-necklace-fashion-editorial.jpg",
    tags: [
      "Minimal Jewelry",
      "Gold Jewelry",
      "Accessories",
      "Elegant Style",
      "Fashion Essentials"
    ],
    featured: false,
    content: `
      <p>Jewelry is the final signature touch to any ensemble. Minimalist gold hoops, thin chain necklaces, and understated rings provide subtle radiance without overwhelming your look.</p>
    `,
    comments: []
  },
  {
    id: "article-6",
    slug: "old-money-wardrobe-on-a-budget",
    title: "How to Build an Old Money Wardrobe on a Budget",
    subtitle: "Create an elegant, timeless wardrobe without spending a fortune by focusing on quality, neutral colors, and classic silhouettes.",
    summary: "Learn how to achieve the old money aesthetic with affordable wardrobe essentials, smart shopping tips, and timeless fashion pieces that never go out of style.",
    category: "Outfits",
    readTime: "8 min read",
    date: "Jul 30, 2026",
    author: {
      name: "The Trend Studio",
      role: "Fashion Editorial Team",
      avatar: "/images/pinterest-logo.jpg",
      bio: "The Trend Studio shares timeless outfit inspiration, styling guidance, seasonal edits, and thoughtfully curated wardrobe ideas for modern women."
    },
    image: "/images/articles/quiet-luxury-neutral-outfit.jpg",
    tags: [
        "Old Money",
        "Quiet Luxury",
        "Timeless Fashion",
        "Outfits",
        "Wardrobe Essentials"
    ],
    featured: false,
    content: `
      <p>The "old money" aesthetic is rooted in subtle elegance, impeccable fit, and understated luxury rather than flash logos. Achieving this look on a budget comes down to material selection and tailoring.</p>
    `,
    comments: []
  }
];

class Router {
  constructor(app) {
    this.app = app;
  }

  push(pageId, articleId = null) {
    const url = this.app.getRoute(pageId, articleId);

    if (window.location.pathname === url) {
      return;
    }

    history.pushState(
      {
        page: pageId,
        articleId: articleId
      },
      "",
      url
    );
  }
}

// 2. APP STATE MANAGER
class TrendStudioApp {
  constructor() {
    this.currentPage = "home";
    this.currentArticleId = null;
    this.homeCategoryFilter = "All";
    this.bookmarks = this.loadBookmarksFromStorage();
    this.theme = localStorage.getItem("trend_studio_theme") || "light";
    // Create the router
    this.router = new Router(this);

    this.init();
  }

  init() {
    this.applyTheme(this.theme);
    this.bindEvents();
    this.renderFeaturedArticle();
    this.renderHomeArticles();
    this.renderArchiveArticles();
    this.updateBookmarkBadge();
    this.initScrollProgress();
    this.initStatsObserver();

    // Restore the correct page from the current URL
    this.restoreRouteFromURL();

    // Handle browser Back / Forward buttons
    window.addEventListener("popstate", () => {
      this.restoreRouteFromURL();
    });
  }

  restoreRouteFromURL() {
    const path = window.location.pathname;

    if (path === "/" || path === "") {
      this.navigateTo("home", null, false);
      return;
    }

    if (path === "/journal") {
      this.navigateTo("stories", null, false);
      return;
    }

    if (path === "/about") {
      this.navigateTo("about", null, false);
      return;
    }

    if (path === "/contact") {
      this.navigateTo("contact", null, false);
      return;
    }

    if (path === "/privacy") {
      this.navigateTo("legal", null, false);
      return;
    }

    if (path.startsWith("/journal/")) {
      const slug = path.replace("/journal/", "");

      const article = ARTICLES_DATA.find(
        article => article.slug === slug
      );

      if (article) {
        this.navigateTo("article", article.id, false);
        return;
      }
    }

    // Unknown URL → Home
    this.navigateTo("home", null, false);
  }

  // 3. THEME SYSTEM
  applyTheme(theme) {
    this.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("trend_studio_theme", theme);
  }

  toggleTheme() {
    const newTheme = this.theme === "light" ? "dark" : "light";
    this.applyTheme(newTheme);
    this.showToast(`Switched to ${newTheme} mode`);
  }

  // 4. NAVIGATION & VIEWS
  navigateTo(pageId, articleId = null, updateHistory = true) {
    this.currentPage = pageId;
    this.currentArticleId = articleId;

    if (updateHistory) {
      this.router.push(pageId, articleId);
    }

    // Hide all pages
    const pages = document.querySelectorAll(".page-view");
    pages.forEach(p => p.classList.add("hidden"));

    // Update active nav link
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("data-page") === pageId) {
        link.classList.add("active");
      }
    });

    // Show targeted page
    if (pageId === "home") {
      document.getElementById("viewHome").classList.remove("hidden");
    } else if (pageId === "stories") {
      document.getElementById("viewStories").classList.remove("hidden");
    } else if (pageId === "article") {
      document.getElementById("viewArticle").classList.remove("hidden");
      this.renderFullArticle(articleId);
    } else if (pageId === "about") {
      document.getElementById("viewAbout").classList.remove("hidden");
    } else if (pageId === "contact") {
      document.getElementById("viewContact").classList.remove("hidden");
    } else if (pageId === "legal") {
      document.getElementById("viewLegal").classList.remove("hidden");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  filterByCategory(category) {
    this.navigateTo("stories");
    const categorySelect = document.getElementById("archiveCategorySelect");
    if (categorySelect) {
      categorySelect.value = category;
      this.handleArchiveSearch();
    }
  }

  goBackFromArticle() {
    this.navigateTo("home");
  }

  scrollToSection(sectionId) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  // 5. RENDER FEATURED ARTICLE
  renderFeaturedArticle() {
    const container = document.getElementById("featuredArticleContainer");
    if (!container) return;

    const article = ARTICLES_DATA.find(a => a.featured) || ARTICLES_DATA[0];
    const isBookmarked = this.isBookmarked(article.id);

    container.innerHTML = `
      <div class="featured-card" onclick="app.openArticle('${article.id}')">
        <div class="featured-img-box">
          <img src="${article.image}" alt="${article.title}" loading="eager">
        </div>
        <div class="featured-content">
          <div class="article-meta-row">
            <span class="category-badge">${article.category}</span>
            <span class="read-time-pill">${article.readTime}</span>
            <span class="date-pill">${article.date}</span>
          </div>
          <h2 class="featured-title">${article.title}</h2>
          <p class="featured-summary">${article.summary}</p>

          <div class="author-row">
            <div class="author-details">
              <img src="${article.author.avatar}" alt="${article.author.name}" class="author-avatar">
              <div>
                <span class="author-name">${article.author.name}</span>
                <span class="author-role">${article.author.role}</span>
              </div>
            </div>
            <div class="card-actions">
              <button class="bookmark-icon-btn ${isBookmarked ? 'active' : ''}" 
                      onclick="event.stopPropagation(); app.toggleBookmark('${article.id}')" 
                      title="Bookmark Article">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 6. RENDER HOME ARTICLES GRID
  setHomeFilter(category, btnEl) {
    this.homeCategoryFilter = category;
    const pills = document.querySelectorAll("#homeCategoryPills .filter-pill");
    pills.forEach(p => p.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");
    this.renderHomeArticles();
  }

  renderHomeArticles() {
    const container = document.getElementById("homeArticlesGrid");
    if (!container) return;

    let filtered = ARTICLES_DATA.filter(a => !a.featured);

    if (this.homeCategoryFilter !== "All") {
      filtered = filtered.filter(a => a.category === this.homeCategoryFilter);
    }

    if (filtered.length === 0) {
      container.innerHTML = `<div class="no-results"><p>No articles found in this category.</p></div>`;
      return;
    }

    container.innerHTML = filtered.map(a => this.createArticleCardHTML(a)).join("");
  }

  createArticleCardHTML(article) {
    const isBookmarked = this.isBookmarked(article.id);
    return `
      <article class="article-card" onclick="app.openArticle('${article.id}')">
        <div class="article-card-image">
          <img src="${article.image}" alt="${article.title}" loading="lazy">
          <button class="card-bookmark-btn ${isBookmarked ? 'active' : ''}" 
                  onclick="event.stopPropagation(); app.toggleBookmark('${article.id}')" 
                  aria-label="Bookmark article">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
          </button>
        </div>
        <div class="article-card-content">
          <div class="article-meta-row">
            <span class="category-badge">${article.category}</span>
            <span class="read-time-pill">${article.readTime}</span>
          </div>
          <h3 class="article-card-title">${article.title}</h3>
          <p class="article-card-excerpt">${article.summary}</p>
          <div class="article-card-footer">
            <div class="author-details">
              <img src="${article.author.avatar}" alt="${article.author.name}" class="author-avatar">
              <span class="author-name">${article.author.name}</span>
            </div>
            <span class="date-pill">${article.date}</span>
          </div>
        </div>
      </article>
    `;
  }

  // 7. RENDER ARCHIVE / ALL STORIES
  renderArchiveArticles() {
    this.handleArchiveSearch();
  }

  handleArchiveSearch() {
    const searchVal = (document.getElementById("archiveSearchInput")?.value || "").toLowerCase();
    const catVal = document.getElementById("archiveCategorySelect")?.value || "All";
    const sortVal = document.getElementById("archiveSortSelect")?.value || "newest";

    let results = [...ARTICLES_DATA];

    if (searchVal) {
      results = results.filter(a => 
        a.title.toLowerCase().includes(searchVal) ||
        a.summary.toLowerCase().includes(searchVal) ||
        a.author.name.toLowerCase().includes(searchVal)
      );
    }

    if (catVal !== "All") {
      results = results.filter(a => a.category === catVal);
    }

    if (sortVal === "oldest") {
      results.reverse();
    }

    const container = document.getElementById("archiveArticlesGrid");
    const noResults = document.getElementById("noArchiveResults");

    if (!container) return;

    if (results.length === 0) {
      container.innerHTML = "";
      if (noResults) noResults.classList.remove("hidden");
    } else {
      if (noResults) noResults.classList.add("hidden");
      container.innerHTML = results.map(a => this.createArticleCardHTML(a)).join("");
    }
  }

  resetArchiveFilters() {
    const input = document.getElementById("archiveSearchInput");
    const catSelect = document.getElementById("archiveCategorySelect");
    const sortSelect = document.getElementById("archiveSortSelect");

    if (input) input.value = "";
    if (catSelect) catSelect.value = "All";
    if (sortSelect) sortSelect.value = "newest";

    this.handleArchiveSearch();
  }

  getRoute(pageId, articleId = null) {
    switch (pageId) {
      case "home":
        return "/";

      case "stories":
        return "/journal";

      case "about":
        return "/about";

      case "contact":
        return "/contact";

      case "legal":
        return "/privacy";

      case "article": {
        const article = ARTICLES_DATA.find(a => a.id === articleId);
        return article ? `/journal/${article.slug}` : "/journal";
      }

      default:
        return "/";
    }
  }

  routeTo(pageId, articleId = null) {
    const url = this.getRoute(pageId, articleId);

    window.history.pushState(
      {
        page: pageId,
        articleId: articleId
      },
      "",
      url
    );

    this.navigateTo(pageId, articleId);
  }
  
  // 8. RENDER FULL ARTICLE READER VIEW
  openArticle(articleId) {
  this.routeTo("article", articleId);
}

  renderFullArticle(articleId) {
    const article = ARTICLES_DATA.find(a => a.id === articleId) || ARTICLES_DATA[0];

    document.getElementById("articleBreadcrumbCategory").textContent = article.category;
    document.getElementById("articleBreadcrumbTitle").textContent = article.title;

    document.getElementById("articleCategoryBadge").textContent = article.category;
    document.getElementById("articleReadingTime").textContent = article.readTime;
    document.getElementById("articleDate").textContent = article.date;

    document.getElementById("articleTitle").textContent = article.title;
    document.getElementById("articleSummary").textContent = article.summary;

    document.getElementById("articleAuthorAvatar").src = article.author.avatar;
    document.getElementById("articleAuthorName").textContent = article.author.name;
    document.getElementById("articleAuthorRole").textContent = article.author.role;
    // console.log("Avatar:", article.author.avatar);

    document.getElementById("articleCoverImage").src = article.image;
    document.getElementById("articleCoverImage").alt = article.title;
    // console.log("Cover:", article.image); 

    document.getElementById("articleBody").innerHTML = article.content;

    // Tags
    const tagsContainer = document.getElementById("articleTagsContainer");
    if (tagsContainer) {
      tagsContainer.innerHTML = article.tags.map(t => `<span class="tag-pill">#${t}</span>`).join("");
    }

    // Author Bio Card
    document.getElementById("articleAuthorBioAvatar").src = article.author.avatar;
    document.getElementById("articleAuthorBioName").textContent = article.author.name;
    document.getElementById("articleAuthorBioText").textContent = article.author.bio;

    // Bookmark button state
    this.updateArticleBookmarkButtonState(article.id);

    // Comments
    this.renderComments(article);

    // Related Articles
    this.renderRelatedArticles(article);
  }

  renderComments(article) {
    const countEl = document.getElementById("commentCount");
    const listEl = document.getElementById("commentsList");

    if (countEl) countEl.textContent = article.comments ? article.comments.length : 0;

    if (listEl) {
      if (!article.comments || article.comments.length === 0) {
        listEl.innerHTML = `<p class="text-muted">Be the first to share your perspective on this essay.</p>`;
      } else {
        listEl.innerHTML = article.comments.map(c => `
          <div class="comment-item">
            <div class="comment-header">
              <span class="comment-author">${c.name}</span>
              <span class="comment-date">${c.date}</span>
            </div>
            <p class="comment-text">${c.text}</p>
          </div>
        `).join("");
      }
    }
  }

  handleCommentSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("commentName").value;
    const text = document.getElementById("commentText").value;

    const article = ARTICLES_DATA.find(a => a.id === this.currentArticleId);
    if (article) {
      if (!article.comments) article.comments = [];
      article.comments.push({
        name,
        date: "Just now",
        text
      });

      this.renderComments(article);
      document.getElementById("commentForm").reset();
      this.showToast("Your response has been published.");
    }
  }

  renderRelatedArticles(currentArticle) {
    const container = document.getElementById("relatedArticlesGrid");
    if (!container) return;

    const related = ARTICLES_DATA.filter(a => a.id !== currentArticle.id).slice(0, 3);
    container.innerHTML = related.map(a => this.createArticleCardHTML(a)).join("");
  }

  // 9. BOOKMARKS SYSTEM
  loadBookmarksFromStorage() {
    try {
      return JSON.parse(localStorage.getItem("trend_studio_bookmarks")) || [];
    } catch (e) {
      return [];
    }
  }

  saveBookmarksToStorage() {
    localStorage.setItem("trend_studio_bookmarks", JSON.stringify(this.bookmarks));
    this.updateBookmarkBadge();
  }

  isBookmarked(id) {
    return this.bookmarks.includes(id);
  }

  toggleBookmark(id) {
    if (this.isBookmarked(id)) {
      this.bookmarks = this.bookmarks.filter(item => item !== id);
      this.showToast("Article removed from bookmarks");
    } else {
      this.bookmarks.push(id);
      this.showToast("Article saved to bookmarks");
    }
    this.saveBookmarksToStorage();
    this.renderFeaturedArticle();
    this.renderHomeArticles();
    this.handleArchiveSearch();
    this.renderBookmarksDrawer();
    if (this.currentArticleId === id) {
      this.updateArticleBookmarkButtonState(id);
    }
  }

  toggleBookmarkCurrentArticle() {
    if (this.currentArticleId) {
      this.toggleBookmark(this.currentArticleId);
    }
  }

  updateArticleBookmarkButtonState(id) {
    const btnText = document.getElementById("articleBookmarkText");
    const isSaved = this.isBookmarked(id);
    if (btnText) {
      btnText.textContent = isSaved ? "Saved in Journal" : "Save Article";
    }
  }

  updateBookmarkBadge() {
    const badges = document.querySelectorAll("#bookmarkBadge, #drawerBookmarkCount");
    badges.forEach(b => {
      b.textContent = this.bookmarks.length;
    });
  }

  renderBookmarksDrawer() {
    const container = document.getElementById("bookmarksDrawerList");
    if (!container) return;

    if (this.bookmarks.length === 0) {
      container.innerHTML = `<p class="text-muted text-center padding-top-large">No saved articles yet. Click the bookmark icon on any essay to save it here.</p>`;
      return;
    }

    const savedArticles = ARTICLES_DATA.filter(a => this.bookmarks.includes(a.id));
    container.innerHTML = savedArticles.map(a => `
      <div class="bookmark-drawer-item">
        <img src="${a.image}" alt="${a.title}">
        <div class="bookmark-drawer-text">
          <h4 onclick="app.openArticle('${a.id}'); app.closeBookmarksDrawer();">${a.title}</h4>
          <button class="remove-bookmark-btn" onclick="app.toggleBookmark('${a.id}')">Remove</button>
        </div>
      </div>
    `).join("");
  }

  // 10. MODALS & DRAWERS TOGGLES
  openSearchModal() {
    const modal = document.getElementById("searchModal");
    if (modal) {
      modal.classList.add("active");
      const input = document.getElementById("modalSearchInput");
      if (input) {
        input.value = "";
        input.focus();
        this.handleModalSearch("");
      }
    }
  }

  closeSearchModal() {
    const modal = document.getElementById("searchModal");
    if (modal) modal.classList.remove("active");
  }

  handleModalSearch(query) {
    const container = document.getElementById("modalSearchResults");
    if (!container) return;

    const q = query.toLowerCase().trim();
    if (!q) {
      container.innerHTML = `<p class="search-placeholder-text">Type title, author, or category to search...</p>`;
      return;
    }

    const matches = ARTICLES_DATA.filter(a => 
      a.title.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.author.name.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      container.innerHTML = `<p class="search-placeholder-text">No articles found matching "${query}".</p>`;
      return;
    }

    container.innerHTML = matches.map(a => `
      <div class="search-result-item" onclick="app.openArticle('${a.id}'); app.closeSearchModal();">
        <div>
          <h4>${a.title}</h4>
          <p>${a.category} &bull; ${a.readTime}</p>
        </div>
        <span class="category-link">&rarr;</span>
      </div>
    `).join("");
  }

  openBookmarksDrawer() {
    this.renderBookmarksDrawer();
    const overlay = document.getElementById("bookmarksDrawerOverlay");
    if (overlay) overlay.classList.add("active");
  }

  closeBookmarksDrawer() {
    const overlay = document.getElementById("bookmarksDrawerOverlay");
    if (overlay) overlay.classList.remove("active");
  }

  openMobileMenu() {
    const menu = document.getElementById("mobileNavOverlay");
    if (menu) menu.classList.add("active");
  }

  closeMobileMenu() {
    const menu = document.getElementById("mobileNavOverlay");
    if (menu) menu.classList.remove("active");
  }

  // 11. FORM HANDLERS
 handleNewsletterSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;

    if (!form) return;

    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        form.reset();

        const successCard = document.getElementById("newsletterSuccess");

        if (successCard) {
          successCard.classList.remove("hidden");
        }

        this.showToast("Subscribed to Sunday Dispatch");
      })
      .catch((error) => {
        console.error("Newsletter submission failed:", error);
        this.showToast("Something went wrong. Please try again.");
      });
  }

  handleContactSubmit(e) {
    e.preventDefault();

    const form = document.getElementById("contactForm");
    const success = document.getElementById("contactSuccessMessage");

    if (!form) return;

    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData).toString(),
    })
     .then(() => {
        form.reset();

        if (form.id === "newsletterForm") {
          const successCard = document.getElementById("newsletterSuccess");

          if (successCard) {
            successCard.classList.remove("hidden");
          }
        }

        this.showToast("Subscribed to Sunday Dispatch");
      })
      .catch((error) => {
        console.error("Contact form submission failed:", error);
        this.showToast("Something went wrong. Please try again.");
      });
  }

  toggleFaq(btn) {
    const item = btn.parentElement;
    item.classList.toggle("active");
  }

  // 12. UTILITIES & ANIMATIONS
  showToast(message) {
    const toast = document.getElementById("toastNotification");
    const toastMsg = document.getElementById("toastMessage");

    if (toast && toastMsg) {
      toastMsg.textContent = message;
      toast.classList.add("active");
      setTimeout(() => {
        toast.classList.remove("active");
      }, 3000);
    }
  }

  initScrollProgress() {
    window.addEventListener("scroll", () => {
      const progressBar = document.getElementById("readingProgressBar");
      if (progressBar && this.currentPage === "article") {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = `${progress}%`;
      } else if (progressBar) {
        progressBar.style.width = `0%`;
      }
    });
  }

  initStatsObserver() {
    const statItems = document.querySelectorAll(".stat-number");
    if (statItems.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute("data-target"));
          this.animateCounter(entry.target, target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statItems.forEach(item => observer.observe(item));
  }

  animateCounter(element, target) {
    let current = 0;
    const increment = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = current;
      }
    }, 30);
  }

  shareArticle() {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      this.showToast("Link copied to clipboard");
    }
  }

  // 13. BIND EVENTS
  bindEvents() {
    // Theme toggle
    document.getElementById("themeToggleBtn")?.addEventListener("click", () => this.toggleTheme());

    // Search trigger
    document.getElementById("openSearchBtn")?.addEventListener("click", () => this.openSearchModal());
    document.getElementById("closeSearchModalBtn")?.addEventListener("click", () => this.closeSearchModal());
    document.getElementById("modalSearchInput")?.addEventListener("input", (e) => this.handleModalSearch(e.target.value));

    // Bookmarks trigger
    document.getElementById("openBookmarksBtn")?.addEventListener("click", () => this.openBookmarksDrawer());
    document.getElementById("closeBookmarksBtn")?.addEventListener("click", () => this.closeBookmarksDrawer());

    // Mobile menu trigger
    document.getElementById("mobileMenuBtn")?.addEventListener("click", () => this.openMobileMenu());
    document.getElementById("closeMobileNavBtn")?.addEventListener("click", () => this.closeMobileMenu());

    // Announcement bar close
    document.getElementById("closeAnnouncement")?.addEventListener("click", () => {
      const bar = document.getElementById("announcementBar");
      if (bar) bar.style.display = "none";
    });

    // Keyboard shortcuts
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        this.openSearchModal();
      }
      if (e.key === "Escape") {
        this.closeSearchModal();
        this.closeBookmarksDrawer();
        this.closeMobileMenu();
      }
    });

    // Outside clicks for modal overlays
    document.getElementById("searchModal")?.addEventListener("click", (e) => {
      if (e.target.id === "searchModal") this.closeSearchModal();
    });
    document.getElementById("bookmarksDrawerOverlay")?.addEventListener("click", (e) => {
      if (e.target.id === "bookmarksDrawerOverlay") this.closeBookmarksDrawer();
    });
    document.getElementById("mobileNavOverlay")?.addEventListener("click", (e) => {
      if (e.target.id === "mobileNavOverlay") this.closeMobileMenu();
    });
  }
}

// Global App Instance
window.app = new TrendStudioApp();
