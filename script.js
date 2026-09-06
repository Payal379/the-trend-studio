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
    summary: "From structured totes to evening clutches, explore twelve timeless handbag styles, how to spot genuine quality before you buy, and the buying mistakes worth avoiding.",
    category: "Accessories",
    readTime: "7 min read",
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
<p>A handbag is one of the few accessories that touches almost every part of your day — carried to work, slung over a shoulder on the school run, tucked under an arm at dinner. Unlike clothing, it rarely goes out of style as quickly, which makes it one of the smartest places to invest in quality over quantity.</p>
 
<p>This guide walks through twelve handbag styles that form a genuinely complete wardrobe, why each one earns its place, and how to tell a well-made bag from one that will not survive the season. You do not need all twelve at once — think of this as a reference to build from over time.</p>
 
<h2>How Many Handbags Do You Actually Need?</h2>
<p>A realistic bag capsule is smaller than most people assume: one structured everyday bag, one crossbody for hands-free days, one evening piece, and one larger bag for travel or work covers the vast majority of situations. The other styles on this list are additions you bring in as your lifestyle or wardrobe calls for them, the same way you would build out a <a href="/journal/20-piece-capsule-wardrobe">capsule wardrobe</a> piece by piece rather than all at once.</p>
 
<h2>1. The Structured Tote</h2>
<p>A spacious leather tote with a defined shape is the workhorse of any handbag collection. It holds a laptop, a notebook, and the everyday essentials without losing its form throughout the day, which is the real test of a good tote — a bag that slouches by noon is a bag with too little internal structure.</p>
<p>Choose one in black, tan, or chocolate brown so it pairs with nearly everything already in your closet, and look for a top that zips or closes securely if you plan to use it for commuting.</p>
 
<h2>2. The Top-Handle Bag</h2>
<p>Slightly more formal than a tote, the top-handle bag sits upright when placed on a table and reads as polished the moment you pick it up. It is the bag that elevates a simple outfit — a blazer and trousers, or a plain dress — into something that looks intentional.</p>
<p>Because it is carried by hand or in the crook of the elbow rather than on the shoulder, it works best for meetings, lunches, and occasions where you want the bag itself to be part of the outfit's polish.</p>
 
<h2>3. The Classic Crossbody</h2>
<p>A minimalist crossbody in a compact size is the bag you reach for on days you actually want to move — errands, travel days, museum visits, anywhere you would rather not think about your bag at all. Hands-free carrying is the entire point, so prioritize a strap that adjusts easily and a body small enough to sit close to you rather than swinging.</p>
 
<h2>4. The Quilted Shoulder Bag</h2>
<p>The quilted shoulder bag, with its distinctive stitched pattern and chain strap, is the one style on this list built to move between day and evening without changing bags. Worn cross-body during the day and doubled up on the shoulder at night, it does double duty in a way few other styles can.</p>
<p>A medium size in a neutral tone gets the most consistent use; save bright colors or exotic textures for a second or third quilted bag once you already have the basics covered.</p>
 
<h2>5. The Mini Bag</h2>
<p>Mini bags are not meant to be practical, and that is precisely their job. Sized to hold a phone, cards, and lip color, they exist to finish an outfit rather than carry your day — the accessory equivalent of a striking pair of earrings. Keep expectations realistic: this is a going-out bag, not a daily driver.</p>
 
<h2>6. The Envelope Clutch</h2>
<p>A flat, structured clutch in a rich material — suede, satin, or smooth leather — is the simplest way to look finished for dinners, weddings, and evening events. Because it has no strap, it forces a slightly more composed way of carrying yourself, which is part of why it reads as elegant.</p>
<p>One in black or a deep neutral will outlast every trend; a metallic or jewel-tone version makes a good second choice once the basics are covered.</p>
 
<h2>7. The Bucket Bag</h2>
<p>Soft-sided and cinched at the top, the bucket bag brings a relaxed, slightly undone quality to an outfit that structured bags cannot. It is the natural pairing for denim, knitwear, and weekend clothing, and its drawstring closure makes it forgiving to pack without worrying about a perfect shape.</p>
 
<h2>8. The Saddle Bag</h2>
<p>Named for its rounded, flap-front silhouette, the saddle bag sits at the midpoint between structured and casual. Worn cross-body or on the shoulder, it has enough shape to look put-together with tailoring but enough softness to work with jeans and a sweater, making it one of the more versatile additions once your core bags are in place.</p>
 
<h2>9. The Belt Bag</h2>
<p>What started as a purely practical, hands-free option has become a genuine wardrobe staple. Worn at the waist, across the body, or even over the shoulder like a small crossbody, the belt bag is ideal for travel days, concerts, and any time you want your hands completely free without sacrificing your essentials.</p>
 
<h2>10. The Weekender Tote</h2>
<p>A soft, oversized tote in canvas or leather earns its place as the bag for short trips, gym days, or anytime you need to carry more than your usual essentials. Look for a wide base so it stands upright when set down, and a strap long enough to wear across the body when your hands are full.</p>
 
<h2>11. The Structured Box Bag</h2>
<p>Rigid, geometric, and unapologetically a statement piece, the box bag works precisely because it is the opposite of soft and slouchy. A single well-chosen box bag — often in an unexpected color or texture — can act as the focal point of an otherwise simple outfit, doing the styling work a printed top or bold shoe might otherwise do.</p>
 
<h2>12. The Work Tote</h2>
<p>Distinct from the everyday structured tote, a dedicated work bag is sized and organized specifically for a laptop, charger, notebook, and the small items that tend to sink to the bottom of a larger bag. Interior pockets matter more here than anywhere else on this list — a bag that keeps your cables from tangling with your keys earns its keep daily.</p>
 
<blockquote>"In handbag design, proportion and craftsmanship create timeless elegance — a well-made bag should look as considered empty as it does full."</blockquote>
 
<h2>How to Choose Quality Handbags That Last</h2>
<p>A handbag is one of the few accessories where spending more upfront genuinely extends its life by years, but price alone is not a reliable signal of quality. These three details matter more than the label.</p>
 
<h3>Leather and Material Quality</h3>
<p>Full-grain or top-grain leather will develop a soft patina over time rather than cracking or peeling. Press the material gently — genuine leather gives slightly and returns to shape, while bonded or heavily coated leather tends to feel stiff and uniformly smooth in a way that ages poorly.</p>
 
<h3>Hardware and Stitching</h3>
<p>Check the zipper pulls, clasps, and feet on the base of the bag. Quality hardware feels heavier and moves smoothly rather than sticking. Stitching should be even and tight, with no visible glue along the seams — loose or uneven stitching is usually the first place a bag fails.</p>
 
<h3>Lining and Interior Details</h3>
<p>Open the bag before deciding. A well-constructed interior uses a durable fabric or leather lining, not a thin material that tears at the seams within a year, and includes at least one interior pocket sized for a phone or keys.</p>
 
<h2>Common Handbag-Buying Mistakes to Avoid</h2>
<ul>
<li><strong>Buying for the occasion instead of the rotation.</strong> A bag you will wear twice a year takes up the budget of one you would use weekly.</li>
<li><strong>Choosing trend colors over neutrals for your first investment piece.</strong> Build the foundation in black, tan, cream, or brown first.</li>
<li><strong>Ignoring the weight of an empty bag.</strong> A heavy structured bag feels twice as heavy once your essentials are inside it.</li>
<li><strong>Skipping the strap-length check.</strong> Try it on before buying — a crossbody that sits too high or too low changes how often you will actually reach for it.</li>
<li><strong>Overlooking storage.</strong> Even a well-made bag loses its shape if it is stored flat in a drawer rather than stuffed and stood upright or hung.</li>
</ul>
 
<h2>Building Your Handbag Capsule, One Piece at a Time</h2>
<p>You do not need to own all twelve of these styles, and buying them all at once tends to produce a closet full of bags you reach for once. Start with the structured tote and the classic crossbody, since between them they cover most ordinary days, then add an evening piece and a travel bag as the need for them comes up naturally.</p>
 
<p>The same principle that shapes a good <a href="/journal/timeless-outfit-ideas-for-women">timeless outfit</a> applies here: fewer, better pieces that you reach for often will always outperform a large collection you rarely touch. Treated well, a genuinely good handbag is also one of the easiest ways to build toward an <a href="/journal/old-money-wardrobe-on-a-budget">old money wardrobe on a budget</a> — the quiet, unbranded quality of the bag itself does more work than any logo could.</p>
    `,
    comments: []
  },
  {
    id: "article-3",
    slug: "20-piece-capsule-wardrobe",
    title: "Fall Capsule Wardrobe: 20 Pieces, Endless Outfit Ideas",
    subtitle: "Build a versatile autumn wardrobe with timeless essentials that mix and match effortlessly throughout the season.",
    summary: "A complete twenty-piece fall capsule wardrobe organized by category, plus real outfit formulas showing exactly how the pieces combine — and the mistakes to avoid while building it.",
    category: "Seasonal",
    readTime: "5 min read",
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
<p>A capsule wardrobe works on a simple principle: fewer pieces, chosen for how well they combine, will always out-dress a closet full of one-outfit items. Fall is the easiest season to prove this, because coats, knits, and boots naturally layer over and under each other in ways summer clothing rarely does.</p>
 
<p>This is a twenty-piece fall capsule built around a warm neutral palette, followed by real outfit formulas that show exactly how those pieces combine — not just a list to admire, but one to actually build a season of dressing from.</p>
 
<h2>How a 20-Piece Capsule Actually Works</h2>
<p>The math behind a capsule wardrobe is what makes it worth the effort: twenty pieces chosen in a single cohesive palette can combine into dozens of distinct outfits, while twenty pieces in twenty different colors and styles mostly just sit next to each other in the closet. The trick is restraint at the shopping stage — every new piece has to work with what you already own, not stand alone.</p>
 
<h2>Choosing Your Fall Capsule Color Palette</h2>
<p>Anchor the capsule in warm neutrals — camel, chocolate brown, cream, and black — then add one or two deeper accent tones such as forest green or burgundy for pieces like a sweater or scarf. Every piece you buy should be able to answer yes to a simple question: does this pair with at least three other things I already own? If not, it does not belong in the capsule, however nice it looks on its own.</p>
 
<h2>Outerwear</h2>
<p>Outerwear carries the most visual weight in a fall outfit, so these three pieces are worth the largest share of the budget.</p>
<ul>
<li><strong>Wool camel coat.</strong> The single most versatile outerwear piece in a fall capsule — it elevates jeans and sits comfortably over tailoring.</li>
<li><strong>Classic trench coat.</strong> Lighter than the wool coat, ideal for the transitional weeks between summer and true cold.</li>
<li><strong>Quilted or shearling jacket.</strong> A more casual layer for weekends, worn over knitwear on colder days.</li>
</ul>
 
<h2>Knitwear and Layering</h2>
<p>These pieces do the daily work of a capsule wardrobe — worn on their own, under a coat, or layered over a shirt.</p>
<ul>
<li><strong>Chunky cable knit sweater.</strong> A textured, oversized knit that works equally well with jeans or a midi skirt.</li>
<li><strong>Turtleneck sweater.</strong> A slim base layer for wearing under blazers, coats, or pinafore-style dresses.</li>
<li><strong>Neutral cardigan.</strong> Easier to layer than a sweater on milder days, and doubles as a light throw-on piece indoors.</li>
<li><strong>Tailored blazer.</strong> The piece that turns a casual pairing into something office- or dinner-appropriate in seconds.</li>
</ul>
 
<h2>Tops</h2>
<ul>
<li><strong>White button-down shirt.</strong> Worn alone, under a sweater, or layered beneath the trench coat.</li>
<li><strong>Silk or satin blouse.</strong> Adds a dressier texture for evenings without needing a separate going-out wardrobe.</li>
<li><strong>Long-sleeve fitted tee.</strong> The quiet layering basic that sits under nearly everything else on this list.</li>
</ul>
 
<h2>Bottoms</h2>
<ul>
<li><strong>Dark-wash straight-leg jeans.</strong> The most-worn piece in most capsules — pairs with every top and outer layer above.</li>
<li><strong>Wide-leg trousers.</strong> A more polished alternative to jeans for work or dinners.</li>
<li><strong>Wool or leather-look midi skirt.</strong> Adds a feminine silhouette that pairs naturally with knee-high boots.</li>
<li><strong>Corduroy trousers.</strong> A seasonal texture that keeps the palette interesting without leaving the neutral color story.</li>
</ul>
 
<h2>One Dress</h2>
<p>A single long-sleeve knit or midi dress earns its place by solving the "nothing to wear" problem on busy mornings — worn alone, belted, or layered under the camel coat.</p>
 
<h2>Shoes</h2>
<ul>
<li><strong>Leather ankle boots.</strong> The most reached-for shoe in a fall capsule, working with jeans, trousers, and skirts alike.</li>
<li><strong>Knee-high boots.</strong> Pairs specifically well with the midi skirt and dress for a finished, cold-weather silhouette.</li>
<li><strong>Loafers.</strong> A flat, polished option for days that call for comfort without looking casual.</li>
</ul>
 
<h2>Accessories</h2>
<ul>
<li><strong>Leather belt.</strong> Defines the waist over the coat, cardigan, or dress, and doubles as a way to change a silhouette without buying anything new.</li>
<li><strong>Cashmere or wool scarf.</strong> Adds warmth and, in an accent color like burgundy or forest green, becomes the easiest way to bring in color without disrupting the neutral base.</li>
</ul>
 
<blockquote>"Autumn dressing is about rich textures, warm neutrals, and artful layering — the capsule is what makes that layering effortless instead of accidental."</blockquote>
 
<h2>Fall Outfit Formulas With These 20 Pieces</h2>
<p>Here is what the capsule actually produces once the pieces are in place — the same mix-and-match approach behind our <a href="/journal/timeless-outfit-ideas-for-women">timeless outfit ideas</a> guide, applied specifically to autumn layering.</p>
<ul>
<li><strong>Jeans, turtleneck, and the camel coat</strong> — the default cold-morning outfit, finished with ankle boots.</li>
<li><strong>Midi skirt, cable knit sweater, and knee-high boots</strong> — a feminine silhouette for weekends or dinners.</li>
<li><strong>White shirt, wide-leg trousers, and the blazer</strong> — the most office-ready combination in the capsule.</li>
<li><strong>The knit dress, leather belt, and loafers</strong> — a five-minute outfit for busy days.</li>
<li><strong>Corduroy trousers, silk blouse, and the trench coat</strong> — a transitional-weather outfit for early autumn.</li>
<li><strong>Jeans, cardigan, and the shearling jacket</strong> — a relaxed weekend uniform, scarf optional.</li>
</ul>
 
<h2>Common Capsule Wardrobe Mistakes to Avoid</h2>
<ul>
<li><strong>Buying trend colors for foundational pieces.</strong> Save color experiments for the scarf or one accent sweater, not the coat.</li>
<li><strong>Skipping the coat budget.</strong> A well-made coat is worn more than any other single item in the capsule — it is the wrong place to cut corners.</li>
<li><strong>Building the capsule all at once.</strong> Add pieces gradually and test how they combine before completing the list; a rushed capsule tends to include pieces that never quite work together.</li>
<li><strong>Forgetting texture.</strong> A capsule built entirely in smooth fabrics looks flat — cable knit, corduroy, and shearling add the visual interest that keeps a neutral palette from feeling plain.</li>
</ul>
 
<h2>Making the Capsule Work All Season</h2>
<p>Once the twenty pieces are in place, the outfits above are only a starting point — the same coat that opens this list will still be doing work in the outfit formulas from our <a href="/journal/timeless-outfit-ideas-for-women">outfit ideas guide</a>, and the leather belt pairs just as naturally with one of the <a href="/journal/timeless-handbags-for-women">structured handbags</a> from our bag guide. A capsule wardrobe is never really finished; it is simply maintained, one thoughtful piece at a time.</p>
    `,
    comments: []
  },
   {
    id: "article-4",
    slug: "best-white-sneakers-for-women",
    title: "10 White Sneakers Every Woman Should Own",
    subtitle: "The ultimate guide to timeless white sneakers that pair effortlessly with every outfit and every season.",
    summary: "Ten white sneaker styles worth knowing, what actually separates a well-made pair from a cheap one, and how to keep them looking new past the first month.",
    category: "Accessories",
    readTime: "4 min read",
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
<p>White sneakers get written off as the "basic" choice, which is a little unfair. A good pair is harder to find than it looks, and once you own one, it probably gets more wear than anything else in your shoe rack. This guide covers ten styles worth knowing, what actually separates a well-made pair from a cheap one, and how to keep them looking new past the first month.</p>
 
<h2>What Makes a White Sneaker Actually Worth Buying</h2>
<p>Leather holds its shape and color far better than canvas or synthetic material over time, so if you're only buying one pair this year, that's where to spend. Check the sole too. A lot of cheap sneakers use a soft rubber that yellows within a few months of regular wear; a firmer, slightly denser sole tends to hold white longer. And look closely at the stitching around the toe box, since that's usually the first place a badly made sneaker starts to separate.</p>
 
<h2>1. The Minimalist Leather Sneaker</h2>
<p>Low-profile, unbranded, barely any visible stitching. This is the one that goes with everything from tailored trousers to a slip dress, which is exactly why it's usually the first pair people reach for once they own one.</p>
 
<h2>2. The Classic Court Sneaker</h2>
<p>Tennis-inspired, with a slightly retro shape and a subtle perforated or panel detail. It reads a bit more "designed" than the minimalist version without tipping into sporty territory.</p>
 
<h2>3. The Platform Sneaker</h2>
<p>A chunkier sole adds a few centimeters of height and a more casual, streetwear-leaning silhouette. It works best with straight-leg jeans or a midi skirt — anything that gives the sole room to actually show.</p>
 
<h2>4. The Canvas Sneaker</h2>
<p>Lighter, more casual, and considerably cheaper to replace than leather, which makes it the practical choice for beach trips, festivals, or anywhere you'd rather not worry about scuffing your good pair.</p>
 
<h2>5. The Leather High-Top</h2>
<p>More structure around the ankle, a bit more presence than a low-top. Pairs well with cropped jeans specifically, since the ankle detail actually gets to show.</p>
 
<h2>6. The Slip-On Sneaker</h2>
<p>No laces, easy to kick off at the door, and useful for travel days when you're taking shoes on and off through security. Comfort-wise it's usually a step down from a laced pair, so it works better as a second or third sneaker than a daily one.</p>
 
<h2>7. The Running-Inspired Sneaker</h2>
<p>Technical mesh panels, a more cushioned sole, styled to look athletic even if it never sees a gym. Good for long stretches on your feet, less good for anything you'd call polished.</p>
 
<h2>8. The Woven Sneaker</h2>
<p>Espadrille-style rope detailing on the sole with a canvas or raffia upper. It's a warm-weather piece more than an everyday one, and it looks best with linen and light denim.</p>
 
<h2>9. The Embellished Sneaker</h2>
<p>Pearls, studs, or a subtle metallic panel — one small detail is usually enough. This is the sneaker that replaces jewelry in an outfit rather than sitting quietly underneath it, so it works best when the rest of the look is kept plain.</p>
 
<h2>10. The All-Weather Sneaker</h2>
<p>Treated or coated leather that actually resists rain and slush, for the months when a delicate pair would get ruined in a single commute. Not the most exciting entry on this list, but arguably the most useful one if you live somewhere with a real winter.</p>
 
<blockquote>"A white sneaker only earns its keep if it still looks white six months in — everything else is secondary."</blockquote>
 
<h2>How to Keep White Sneakers Looking New</h2>
<p>Most of the damage happens in the first few wears, before you've built a habit around them, so start early. A soft-bristle brush and a mix of water with a little dish soap handles most everyday scuffs without needing anything specialty. Stuff them with paper or shoe trees when they're not being worn so the leather doesn't crease, and if you're storing a pair for a season, keep them somewhere dry rather than sealed in a shoebox, which tends to trap moisture and yellow the sole faster than actual wear does.</p>
<p>One habit that makes a bigger difference than people expect: rotating two pairs instead of wearing one constantly. It roughly doubles how long each pair looks new, since leather needs time to fully dry out and recover its shape between wears.</p>
 
<h2>Styling White Sneakers by Occasion</h2>
<p>With tailoring, the minimalist or court style works better than anything chunky — the cleaner the sneaker, the more it reads as intentional against trousers or a blazer, similar to the pairing logic in our <a href="/journal/timeless-outfit-ideas-for-women">outfit ideas guide</a>. For weekends, the canvas or platform styles hold up better against denim and don't need the same careful upkeep. And if you're building toward a full <a href="/journal/20-piece-capsule-wardrobe">fall capsule wardrobe</a>, one clean leather pair covers most of what the season needs; save the woven and embellished styles for when the basics are already in place.</p>
 
<h2>Which One to Start With</h2>
<p>If none of this is in your closet yet, the minimalist leather sneaker is the obvious first buy. It's the one style on this list that works in literally every scenario above, and it's the easiest to build the maintenance habit around before adding anything more specific to your rotation.</p>
    `,
    comments: []
  },
  {
    id: "article-5",
    slug: "minimal-jewelry-for-every-outfit",
    title: "Minimal Jewelry That Elevates Every Outfit",
    subtitle: "Discover timeless jewelry pieces that add elegance and sophistication without overwhelming your personal style.",
    summary: "A practical minimal jewelry collection by category, the material details that actually matter when buying (solid gold vs. vermeil vs. plated), and how to keep pieces from tarnishing.",
    category: "Accessories",
    readTime: "3 min read",
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
<p>The easiest way to spot an over-accessorized outfit is too much jewelry fighting for attention at once. Minimal jewelry works the opposite way: a few well-chosen pieces that quietly finish a look instead of competing with it. This is a practical starting collection, the buying details that actually matter, and how to keep pieces looking good instead of tarnished in a drawer somewhere.</p>
 
<h2>Gold or Silver?</h2>
<p>Pick one as your default and build around it rather than buying both in equal amounts. Warmer skin tones tend to suit gold, cooler tones tend to suit silver, though honestly the bigger factor is just which one you already own more of. Mixing metals in the same outfit isn't the faux pas it used to be, but it works best when it's one clear exception (a silver ring against an otherwise gold outfit, say) rather than an even split.</p>
 
<h2>Necklaces</h2>
<p>A thin chain necklace on its own is the most-worn piece in most minimal jewelry collections, simple enough to wear with a crew neck or a plunging neckline without ever looking wrong. A small pendant, whether an initial, a single stone, or something with personal meaning, adds a bit more presence without crossing into statement territory. Once you own two or three chains in slightly different lengths, layering them together becomes an easy way to get more mileage out of pieces you already have; the trick is keeping at least an inch of visible gap between each chain so they read as separate rather than tangled.</p>
 
<h2>Earrings</h2>
<p>Small hoops are the closest thing to a universal earring, appropriate from a work meeting to a dinner out. Plain studs, in gold or a single pearl, do similar work but sit closer to the ear for anyone who prefers a lower-key look. Huggie earrings split the difference between the two and have become the default for a lot of women who want something slightly more detailed than a stud without the movement of a full hoop.</p>
 
<h2>Rings</h2>
<p>Thin stacking bands, worn two or three at a time, are far more forgiving than a single chunky ring, since they can be added or removed depending on the day without the outfit reading as unfinished either way. One slightly more considered ring, a signet or a simple solitaire style, works as the piece you build the others around.</p>
 
<h2>Bracelets</h2>
<p>A delicate chain bracelet worn alone, or stacked with a plain bangle, rounds out the collection without adding much bulk. This is usually the last category worth investing in, mostly because bracelets get the most physical wear from typing, washing hands, and general daily use.</p>
 
<blockquote>"Restraint is the actual skill in minimal jewelry — anyone can put pieces on, the discipline is in knowing which ones to leave off."</blockquote>
 
<h2>What to Actually Check Before You Buy</h2>
<p>The material description on a jewelry listing matters more than most people realize. Solid gold holds its color permanently and is the most expensive option. Gold vermeil (a thick layer of gold over sterling silver) is a reasonable middle ground and holds up well with normal care. Gold-filled is more durable than plating but still not solid gold. Plain gold plating is the least durable of the four and the most likely to wear thin at points of friction, like the underside of a ring, within a year or two of regular wear.</p>
<p>If you have sensitive skin, sterling silver or solid gold are safer bets than plated pieces, which can sometimes cause irritation once the base metal underneath starts to show through.</p>
 
<h2>Keeping Minimal Jewelry Looking Good</h2>
<p>Put jewelry on last, after perfume, lotion, and hairspray, since those products are what actually cause most tarnishing over time. Take it off before showering, swimming, or sleeping, and store pieces separately (a jewelry box with individual compartments, or even small sealed bags) rather than in a pile, where chains tangle and harder stones can scratch softer metal. A polishing cloth every few weeks keeps gold and silver looking bright without needing anything more involved than that.</p>
 
<h2>Building the Collection Without Overbuying</h2>
<p>Start with one necklace, one pair of earrings, and a couple of stacking rings; that alone covers the majority of outfits, including most of the pairings in our <a href="/journal/timeless-outfit-ideas-for-women">outfit ideas guide</a>. Add layering pieces and a bracelet once the basics feel automatic. The same restraint that shapes a good <a href="/journal/20-piece-capsule-wardrobe">capsule wardrobe</a> applies here: a small, well-chosen jewelry collection gets worn constantly, while a large one mostly sits in a drawer.</p>
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
      <p>Old money style gets mistaken for an expensive style, which is a little backwards. The whole point of the look is that it never announces its price tag. Fit, fabric, and restraint do the work that a visible logo would otherwise be doing, and none of those three things actually require a large budget. This is the real strategy behind building the look without spending like the aesthetic suggests you should.</p>
 
<h2>What Old Money Style Is Actually Built On</h2>
<p>Strip away the name and the aesthetic comes down to three things: a neutral, muted color palette (camel, navy, cream, black, forest green), structured silhouettes that look tailored rather than thrown on, and an almost complete absence of visible branding. It's the opposite of fast fashion's logic, which relies on trend and recognizable branding to signal value. Here, the fabric and the fit are doing all the signaling instead.</p>
 
<h2>Buy Fewer Pieces, and Make Them Count</h2>
<p>This is the single most useful mindset shift, and it costs nothing. A ten-piece wardrobe of well-chosen neutrals mixes into more outfits than thirty pieces bought on impulse, which is the same logic behind a <a href="/journal/20-piece-capsule-wardrobe">capsule wardrobe</a>. Before buying anything for this look, ask whether it pairs with at least three things you already own. If the answer is no, it's probably a trend piece wearing an old money label, not the real thing.</p>
 
<h2>Where You Can Actually Save Money</h2>
<p>Secondhand and thrift stores are, somewhat counterintuitively, one of the best places to find this exact aesthetic. Structured pieces like blazers, wool coats, and trousers were often made with better fabric decades ago than a lot of current fast fashion, and they hold their shape on a hanger in a way that makes them easy to spot secondhand. End-of-season sales are the other reliable source, since classic silhouettes don't go out of style the way trend pieces do, so last season's camel coat still works perfectly this year at half the price.</p>
 
<h2>Where Not to Cut Corners</h2>
<p>Trousers, blazers, and anything worn close to the body are worth spending more on than the rest of the wardrobe, because cheap fabric shows in exactly those pieces first, through shine, pilling, or a shape that won't hold. A knit sweater in a wool blend will always read better than one in pure acrylic, even at a similar price point. Save the budget cuts for pieces that take less visible wear, like a basic tee or a scarf.</p>
 
<h2>Tailoring Is the Actual Secret</h2>
<p>A ten-dollar thrifted blazer, tailored to fit through the shoulders and waist, will look more expensive than a designer piece bought a size too big. Fit is doing more visual work in this aesthetic than the garment's original price ever will, and a local tailor adjusting a hem or taking in a waist is usually cheaper than a single impulse purchase. This one habit does more to separate a considered wardrobe from a thrifted-looking one than any item on this list.</p>
 
<blockquote>"Old money style was never about how much something cost. It was about looking like you never had to think about it."</blockquote>
 
<h2>The Core Pieces to Build Toward</h2>
<p>A structured blazer, a wool or wool-blend coat, tailored trousers, a crewneck sweater, a white button-down shirt, and a pair of loafers form the backbone of the look. From there, the pieces already covered in our other guides slot in naturally: a <a href="/journal/timeless-handbags-for-women">structured leather bag</a> in a neutral tone, <a href="/journal/minimal-jewelry-for-every-outfit">delicate gold jewelry</a> instead of anything with a visible logo, and a clean pair of leather loafers or boots rather than anything with branding on the sole.</p>
 
<h2>Mistakes That Undercut the Look</h2>
<p>A visible logo, even a small one, works against everything this aesthetic is built on, so check labels carefully before buying secondhand. Shiny or overly synthetic fabric reads as cheap under normal light regardless of how the piece is styled, so touch the fabric before checking the price tag. And over-accessorizing undoes the restraint that makes the whole look work; one or two quiet pieces of jewelry will always look more expensive than five.</p>
 
<h2>Building It Gradually</h2>
<p>Start with one well-tailored blazer and one pair of trousers, since those two pieces alone will outfit more days than anything else on this list. Add the coat next, since it's worn over everything else and does the most visual work in colder months, then fill in the rest as budget allows. None of this needs to happen in a single shopping trip, and honestly, it shouldn't; the look is built the same patient way it was originally inherited, one considered piece at a time.</p>
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

    // 3A. ARTICLE SEO
  updateArticleSEO(article) {
    if (!article) return;

    const siteUrl = "https://thetrendstudiohub.netlify.app";
    const articleUrl = `${siteUrl}/journal/${article.slug}`;

    // Page title
    document.title = `${article.title} | The Trend Studio`;

    // Meta description
    const metaDescription = document.getElementById("metaDescription");
    if (metaDescription) {
      metaDescription.setAttribute("content", article.summary);
    }

    // Canonical URL
    const canonicalUrl = document.getElementById("canonicalUrl");
    if (canonicalUrl) {
      canonicalUrl.setAttribute("href", articleUrl);
    }

    // Open Graph
    const ogType = document.getElementById("ogType");
    const ogTitle = document.getElementById("ogTitle");
    const ogDescription = document.getElementById("ogDescription");
    const ogImage = document.getElementById("ogImage");
    const ogUrl = document.getElementById("ogUrl");

    if (ogType) ogType.setAttribute("content", "article");
    if (ogTitle) ogTitle.setAttribute("content", article.title);
    if (ogDescription) ogDescription.setAttribute("content", article.summary);
    if (ogImage) ogImage.setAttribute("content", article.image);
    if (ogUrl) ogUrl.setAttribute("content", articleUrl);

    // Twitter Card
    const twitterTitle = document.getElementById("twitterTitle");
    const twitterDescription = document.getElementById("twitterDescription");
    const twitterImage = document.getElementById("twitterImage");

    if (twitterTitle) twitterTitle.setAttribute("content", article.title);
    if (twitterDescription) {
      twitterDescription.setAttribute("content", article.summary);
    }
    if (twitterImage) twitterImage.setAttribute("content", article.image);

    // Article structured data
    const schemaElement = document.getElementById("dynamicArticleSchema");

    if (schemaElement) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": article.title,
        "description": article.summary,
        "image": [article.image],
        "datePublished": "2026-07-30",
        "author": {
          "@type": "Organization",
          "name": article.author.name,
          "url": siteUrl
        },
        "publisher": {
          "@type": "Organization",
          "name": "The Trend Studio",
          "url": siteUrl
        },
        "articleSection": article.category,
        "keywords": article.tags.join(", "),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": articleUrl
        },
        "url": articleUrl,
        "inLanguage": "en"
      };

      schemaElement.textContent = JSON.stringify(schema);
    }
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

    // Update SEO metadata for article pages
    if (pageId === "article") {
      const article = ARTICLES_DATA.find(a => a.id === articleId);
      this.updateArticleSEO(article);
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

  async handleCommentSubmit(e) {
    e.preventDefault();

    const form = document.getElementById("commentForm");

    if (!form) return;

    const article = ARTICLES_DATA.find(
      a => a.id === this.currentArticleId
    );

    if (!article) {
      this.showToast("Unable to identify this article.");
      return;
    }

    // Add current article information to the Netlify submission
    const articleField = document.getElementById("commentArticle");
    const articleUrlField = document.getElementById("commentArticleUrl");
    const articleTitleField = document.getElementById("commentArticleTitle");

    if (articleField) {
      articleField.value = article.id;
    }

    if (articleUrlField) {
      articleUrlField.value = window.location.href;
    }

    if (articleTitleField) {
      articleTitleField.value = article.title;
    }

    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(formData).toString()
      });

      if (!response.ok) {
        throw new Error("Netlify form submission failed.");
      }

      form.reset();

      this.showToast(
        "Thank you. Your response has been sent for review."
      );

    } catch (error) {
      console.error("Comment submission error:", error);

      this.showToast(
        "Sorry, we couldn't send your response. Please try again."
      );
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
    const searchInput = document.getElementById("modalSearchInput");
    const searchButton = document.getElementById("openSearchBtn");

    // Remove focus before hiding the modal
    if (searchInput) {
      searchInput.blur();
    }

    if (modal) {
      modal.classList.remove("active");
    }

    // Return keyboard focus to the button that opened the search
    if (searchButton) {
      searchButton.focus();
    }
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
    const articleUrl = window.location.href;

    // Use native sharing when available
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: articleUrl
      }).catch(() => {});
      return;
    }

    // Use Clipboard API when available
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(articleUrl)
        .then(() => {
          this.showToast("Link copied to clipboard");
        })
        .catch(() => {
          this.copyLinkFallback(articleUrl);
        });
      return;
    }

    // Fallback for browsers/environments without Clipboard API
    this.copyLinkFallback(articleUrl);
  }

  copyLinkFallback(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    textArea.style.pointerEvents = "none";

    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand("copy");
      this.showToast("Link copied to clipboard");
    } catch (error) {
      this.showToast("Unable to copy link");
    }

    document.body.removeChild(textArea);
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
