import { Author, Article, Category, AdminUser } from "@/types";

// Categories
export const categories: Category[] = [
  { id: "1", name: "Faculty", slug: "faculty", description: "Articles from faculty members" },
  { id: "2", name: "Editorial", slug: "editorial", description: "Editorial content" },
  { id: "3", name: "International", slug: "international", description: "International news" },
  { id: "4", name: "National", slug: "national", description: "National news" },
  { id: "5", name: "City", slug: "city", description: "City news" },
  { id: "6", name: "University", slug: "university", description: "University news" },
  { id: "7", name: "Arts & Culture", slug: "arts-culture", description: "Arts and culture content" },
  { id: "8", name: "Sports", slug: "sports", description: "Sports news" },
  { id: "9", name: "Business", slug: "business", description: "Business news" },
  { id: "10", name: "Sci-tech", slug: "sci-tech", description: "Science and technology news" },
  { id: "11", name: "Features", slug: "features", description: "Featured content" },
  { id: "12", name: "Guest Columns", slug: "guest-columns", description: "Guest columns" },
  { id: "13", name: "Op-ed", slug: "op-ed", description: "Opinion and editorial" },
  { id: "14", name: "Blogs", slug: "blogs", description: "Blog posts" },
  { id: "15", name: "Magazine", slug: "magazine", description: "Magazine content" },
  { id: "16", name: "Podcasts", slug: "podcasts", description: "Podcast episodes" },
  { id: "17", name: "Crosswords", slug: "crosswords", description: "Crossword puzzles" },
];

// Authors
export const authors: Author[] = [
  {
    id: "1",
    name: "Shumaila Khan",
    username: "shumaila-khan",
    image: "/Shumilaprofile.jpeg",
    bio: "I've always believed that stories are how civilizations speak—and universities, in particular, are teeming with voices that deserve a headline. That belief gave rise to LU.Chronicles, the student-run daily I founded not simply to report what happens, but to reflect what matters. I'm Shumaila—a student at Lucknow University and IGNOU—studying English Literature, Psychology, Ancient Indian History, and Public Administration. Yes, all at once. And no, sleep is not overrated—it's just scheduled. Before founding LU.Chronicles, I spent my school years juggling grades, gathering trophies, captaining literary events, and finding my voice in auditoriums packed with applause and adjudicators. That same hunger for challenge has since found a home in multiple arenas: inter-university debates, writing rooms, and as the President of LU.LITCORE, the official literary society of Lucknow University. But Chronicles is something different. It's not about just adding another title to the résumé. It's about building a newsroom run by students, for students—one that blends editorial rigor with youthful defiance. As the founder and editor of LU.Chronicles, I wear a lot of hats—curate content, mentor writers, map out editorial strategy, and occasionally jump in with a byline or two (or ten). Every piece we publish aims to balance curiosity with credibility. When I'm not chasing stories—fictional or otherwise—I'm probably chasing a dozen other interests: public speaking, film criticism, poetry, Pilates, languages, art, aesthetics, or the perfect chord on one of my instruments. My life is stitched together by a simple rule—if you can learn it, try it. What I bring to the paper is not just a résumé of accolades but an ethic: of inquiry, imagination, and intention. Because if you're going to write history—be it personal or institutional—you may as well make sure it's worth reading.",
    email: "withloveshumaila@gmail.com",
    designation: "Editor in Chief",
    course: "B.A.",
    categories: ["Arts & Culture", "Op-ed", "Blogs", "Magazine", "Podcasts"],
    articlesCount: 24,
    isFounder: true,
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/withloveshumaila?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      twitter: "withluvshumaila"
    }
  },
  {
    id: "2",
    name: "Hetal Kothari",
    username: "hetal-kothari",
    image: "/Hetal.jpeg",
    bio: "I'm Hetal Kothari — a passionate writer and researcher with a keen interest in exploring diverse perspectives and uncovering compelling stories. As a dedicated member of LU.Chronicles, I bring my analytical mindset and creative approach to every piece I write.\n\nMy journey in journalism began with a deep curiosity about the world around us and a desire to give voice to important narratives. I believe in the power of storytelling to inform, inspire, and create meaningful connections.\n\nWith a background in research and writing, I specialize in crafting engaging content that resonates with our readers while maintaining the highest standards of journalistic integrity. I'm particularly interested in exploring topics related to culture, society, and current affairs.\n\nAt LU.Chronicles, I'm committed to contributing thoughtful, well-researched articles that add value to our readers' understanding of the world. I believe in the importance of balanced reporting and presenting multiple perspectives on complex issues.\n\nWhen I'm not writing, you can find me exploring new books, engaging in meaningful discussions, or seeking out new stories to tell. I'm always eager to learn and grow as a writer and journalist.",
    email: "hetal@luchronicles.edu",
    designation: "Head",
    course: "Bsc zoology and chemistry",
    categories: ["International", "City", "Arts & Culture", "Blogs", "Podcasts"],
    articlesCount: 15,
  },
  {
    id: "3",
    name: "Dorcas Tembo Sambo",
    username: "dorcas-tembo",
    image: "/Dorcas Tembo Sambo.jpg",
    bio: "My name is Dorcas Tembo Sambo, I am a 2nd-year BBA student and a passionate advocate for meaningful discourse, I bring a unique blend of analytical thinking, creative expression, and unwavering commitment to truth. As the Head of the Writing Department at Lu.LitCore and Proofreading & Quality Control Head at LU Chronicles, I am dedicated to crafting compelling narratives and fostering critical thinking.\n\nWith a love for debating that extends beyond argumentation to building minds and critical thinking, I thrive in environments that encourage intellectual exploration and respectful dialogue. As a writer, I believe in the transformative power of words, shaping life's worth narratives that inspire and provoke.\n\nGuided by an unwavering commitment to truth and a passion for innovative storytelling, I bring boldness, wisdom, and clarity to every project. Through quality assurance and impactful writing, I aim to make a lasting impact, ensuring that truth is heard without boundaries.\n\nSincerely,\nHead, Writing Department\nHead, Proofreading and Quality Control",
    email: "tabitasambo23@gmail.com",
    designation: "Proofreading and Quality Control Head",
    course: "BBA",
    categories: ["Business", "Crosswords"],
    articlesCount: 12,
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/dorcas-sambo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }
  },
  {
    id: "5",
    name: "Atulit Pandey",
    username: "atulit-pandey",
    image: "/Atlut.jpeg",
    bio: `Hi, I'm Atulit, B.Sc. undergraduate and a geology major.
I'm a goal oriented person and love to learn new things as they cross my path. Learning, for me, is an experience and not just an obligation, and spreading my learnings, thoughts, experiences and expressions is what I'm most passionate about (after rocks, obviously).
My hobbies can't be counted on fingers, so the top ones include debating (can't live without yapping), reading, writing (poems and prose sometimes, poems for the win though) and playing tabla. Also, I possess an inherent keenness towards geopolitics (to find agendas for debating, to be honest, and to give my "expert opinions" on matters that don't concern me even at a light year's distance)
Here at Chronocore, I'm the vice head of the branch and at LU.Chronicles, I head the design and layout section.
Hope to do great work with the team here at Chronocore and LU.Chronicles.
Peace.`,
    email: "atulitpandey11@gmail.com",
    designation: "Vice Head",
    course: "B.Sc.",
    categories: ["International", "National", "City", "Sci-tech", "Magazine"],
    articlesCount: 15,
    socialMedia: {
      linkedin: "https://in.linkedin.com/in/atulit-pandey-2027b0188"
    }
  },
  {
    id: "6",
    name: "Prerna Srivastava",
    username: "prerna-srivastava",
    image: "/Perna.jpeg",
    bio: `I'm Prerna Srivastava —  B.Sc Bio student, an unapologetic question-asker, a passionate debater, and a story collector in Lu.LitCore.
Driven by curiosity, I'm always asking why— whether it's exploring geopolitical events, questioning societal norms, or delving into feminist ideas. I thrive in conversations that dig deeper, seeking connection and learning from the world around me.

I don't just enjoy stories; I collect them. From hostel corridors to chance encounters, I believe everyone has a narrative worth hearing. These meaningful exchanges broaden my perspective and deepen my understanding of the world.

Debating excites me—not for the sake of disagreement, but for the depth it brings. I enjoy expressing my thoughts and hearing others do the same. While I have strong opinions, I value openness, empathy, and respectful conversation.

I bring a lightness to life—laughing easily, enjoying the little moments, and balancing seriousness with a warm, happy-go-lucky spirit. 
LU Chronicles, to me, is more than a platform; it's a bridge between campus and the world, where stories, opinions, and reflections on everything from college life to global issues can find a home. I'm here to help shape that space—thoughtfully, honestly, and always with curiosity.

I'll be here, ready to ask the next why and learn from every conversation.`,
    email: "prernaluchronicles@gmail.com",
    designation: "Research Head",
    course: "B.Sc NEP",
    categories: ["International", "National", "Arts & Culture", "Sci-tech", "Magazine", "Podcasts"],
    articlesCount: 14,
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/prerna-srivastava-33b91335a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "PrernaS91925704"
    }
  },
  {
    id: "7",
    name: "Abhinav Kumar Upadhyay",
    username: "abhinav-upadhyay",
    image: "/Abhinav Kumar Upadhyay .jpeg",
    bio: "I am Abhinav Kumar Upadhyay — an equal blend of strategist and storyteller. Believing in balanced minds and measured words, I take my steps through life entranced with diplomacy, steady logic, and an unceasing curiosity for the workings of life.",
    email: "iamabhinavupadhyay@gmail.com",
    designation: "Design and Layout Head",
    course: "B.Sc NEP",
    categories: ["International", "National", "Business", "Sci-tech", "Magazine"],
    articlesCount: 11,
    socialMedia: {
      instagram: "https://www.instagram.com/iam.abhiinav?igsh=MTZpdTNnbzIzd2VxdQ=="
    }
  },
  {
    id: "8",
    name: "Ansesveri Laxmi",
    username: "ansesveri-laxmi",
    image: "/Ansesveri Laxmi.jpeg",
    bio: "I'm Ansesveri Laxmi — a student, storyteller, and seeker of meaning. With a mind tuned to history and a heart pulled toward poetry, I exist at the intersection of intellect and emotion. As a YouTuber who dives deep into Indian political narratives, I don't just present facts — I resurrect forgotten stories, ask uncomfortable questions, and challenge surface-level thinking. I believe the past isn't dead; it's a dialogue, waiting to be reawakened. Writing, for me, is both introspection and activism. Whether it's scripting a documentary, drafting a heartfelt poem, or narrating a political episode, I let every word carry the weight of intention. A thinker by habit and a learner by heart, I often oscillate between coding an idea into an app and decoding the soul of a movement. I thrive in quiet reflection as much as in dynamic conversation — from late-night philosophical musings to sharp debates on what the future holds. My lens is one of curiosity and compassion. I create not just to inform, but to connect, to provoke thought, and most of all — to leave something behind that might just make someone pause, question, and feel.",
    email: "ansesveri@luchronicles.edu",
    designation: "Tech Head",
    course: "B.A.",
    categories: ["International", "National", "Sci-tech"],
    articlesCount: 8,
  },
  {
    id: "9",
    name: "Aliya Imam",
    username: "aliya-imam",
    image: "/Aliya.jpeg",
    bio: "I'm Aliya Imam — a dedicated journalist and storyteller with a passion for uncovering and sharing meaningful narratives.",
    email: "aliyaimam06@gmail.com",
    designation: "PR Head",
    course: "B.Sc Bio",
    categories: ["International", "National", "City", "University", "Business"],
    articlesCount: 12,
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/aliya-imam-636ab1330/"
    }
  },
  {
    id: "10",
    name: "Dr. Utkarsh Mishra",
    username: "utkarsh-mishra",
    image: "/utkarsh.jpeg",
    bio: "Dr. Utkarsh Mishra is a distinguished and honourable faculty member at the Department of Public Administration, University of Lucknow. His expertise lies in public administration, constitutional governance, and public policy, with a proven track record of research in governance, policy analysis, and administrative reforms.",
    email: "utkarsh.mishra@luchronicles.edu",
    designation: "Academic Liaison",
    department: "Department of Public Administration",
    categories: ["Public Administration", "Constitutional Governance", "Public Policy", "Research", "Academic Leadership"],
    articlesCount: 8,
    isFaculty: true,
  },
  {
    id: "11",
    name: "Mani Soni",
    username: "mani-soni",
    image: "/Mani.jpeg",
    bio: "Mani Soni - A passionate writer and storyteller",
    email: "itsmanisoni@gmail.com",
    designation: "Writer",
    categories: ["Arts & Culture", "Blogs"],
    articlesCount: 8,
    socialMedia: {
      twitter: "_manisoni_",
      instagram: "_.maniiiii.____"
    }
  },
  {
    id: "12",
    name: "Atharv Manshar",
    username: "atharv-manshar",
    image: "/Atharv.jpeg",
    bio: "Atharv Manshar - A dedicated writer and researcher",
    email: "athmanshar@gmail.com",
    designation: "Writer",
    categories: ["Sci-tech", "Business"],
    articlesCount: 6
  },
  {
    id: "13",
    name: "Dr. Sushil Singh Chauhan",
    username: "sushil-singh-chauhan",
    image: "/ss.jpeg",
    bio: "Dr. Sushil Singh Chauhan is a senior faculty member in the Department of Public Administration, University of Lucknow. With over 30 years of experience in teaching and research, he specializes in rural development, research methodology, and governance. He has led several ICSSR-funded projects, evaluated over 170 government programmes, and authored five books on public administration. As the Editor of Dynamics of Public Administration and CEO of the Institute for Applied Research and Development, he brings a rich blend of academic and field expertise. At LU Chronicles, his guidance will strengthen policy-oriented content and foster a deeper understanding of governance and administrative issues among student writers.",
    email: "sushil.chauhan@luchronicles.edu",
    designation: "Academic Liaison",
    department: "Department of Public Administration",
    categories: ["Public Administration", "Rural Development", "Research Methodology", "Governance", "Policy Analysis"],
    isFaculty: true,
  },
  {
    id: "14",
    name: "Trishla Chaudhary",
    username: "trishla-chaudhary",
    image: "/Trishla.jpeg",
    bio: "I'm Trishla Chaudhary, semi-responsible and chaos personified and a collection of paradoxes. I'm a second-year majoring in Ancient Indian History and Political Science with a passion for literature that extends beyond the pages. I have a keen interest in international relations and a love for learning new languages. In my free time, I read about anything and everything, and try to convince people that Dostoevsky is a genre in itself. LU.Chronicles gives me space to explore new literary horizons and evolve as a thinker.",
    email: "trishla@luchronicles.edu",
    designation: "Member",
    course: "B.A.",
    categories: ["Arts & Culture", "International", "Blogs"],
    articlesCount: 5
  },
  {
    id: "15",
    name: "Captain Jack Sparrow",
    username: "captain-jack-sparrow",
    image: "/Shantam.jpeg",
    bio: "Crazy people don't know they're crazy. I know I'm crazy, therefore I'm not crazy, isn't that crazy?",
    email: "anonymous@luchronicles.edu",
    designation: "Anonymous Writer",
    categories: ["Blogs", "Op-ed"],
    articlesCount: 3
  },
  {
    id: "16",
    name: "Anonymous",
    username: "anonymous",
    image: "/Shantam.jpeg",
    bio: "Anonymous is a writer and researcher focused on gender studies and campus life.",
    email: "anonymous@luchronicles.edu",
    designation: "Writer",
    categories: ["University", "Features"],
    articlesCount: 1
  },
  {
    id: "17",
    name: "Trishla",
    username: "trishla",
    image: "/Trishla.jpeg",
    bio: "Trishla is a writer and activist focused on international relations and human rights.",
    email: "trishla@luchronicles.edu",
    designation: "Writer",
    categories: ["International", "Op-ed"],
    articlesCount: 1
  }
];

// Sample Articles
export const articles: Article[] = [
  {
    id: "indus-water-treaty",
    title: "INDUS WATER TREATY: TO BE OR NOT TO BE?",
    slug: "indus-water-treaty-to-be-or-not-to-be",
    excerpt: "An in-depth analysis of the Indus Water Treaty, exploring its historical significance, current relevance, and the complex geopolitical implications of water sharing between India and Pakistan.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          "To be or not to be, that is the question", - It's been nearly 400 years, and yet Hamlet's dilemma still holds water- especially in a world that witnesses Power Dynamics change quicker than iodine dissolving starch or our politicians switching their stances.
        </p>

        <p>
          With India signalling its intent to rethink the Indus Water Treaty, it becomes a necessity for us to explore-Why was it signed in the first place? What was at stake? What fires did it manage to put out? And, the main question in light in today's world, should it have ever existed?
        </p>

        <p>
          Ismail Serageldin is not wrong when he states that "The next world war will be over water", From China's plan to build a dam on Brahmaputra, or the Black Sea Treaty protecting the Black Sea waters for maintaining trade and essential services in Ukraine, water is one thing that is involved directly or indirectly in almost every kinetic and non-kinetic conflict in the world today.
        </p>

        <section class="article-section">
          <h2 class="section-heading">The Treaty: What led to its formulation?</h2>
          
          <p>
            When talking about the Indus Water Treaty, we talk of treaty between two freshly divorced nations, simple, right? What has intrigued me is that it was signed in 1960, 13 years after the partition happened! Did Pakistan not need the 'Western Rivers' till 1960? What were the diplomatic tensions that led to the partition of the Indus' waters?
          </p>
          
          <p>
            A plain and straight answer, diplomatically, shall be that it takes time to set everything in sight in a newly built nation and 1960 comes in that time frame. Geographically, Indus and the rivers do have a track that is not in one country, which may have led to tensions in the future over the waters' lordship (as if it didn't lead to one).
          </p>

          <p>
            Historically, during the partition of British India in 1947 and the formation of the two states, border lines were drawn following what was defined as the "Indus watershed" (Gardner, 2019). The position of the lines meant that India gained control of upstream barrages, which regulated water flow into Pakistan (TBL, 2014). As the boundary between India and Pakistan cut across many of the river's tributaries, an upstream-downstream power structure emerged, which has been the source of tensions between the two countries, particularly in response to dam projects in Indian-administered territory.
          </p>

          <p>
            To sort out water-related disputes between the neighbors, the IWT came into light as a landmark treaty dividing water between two countries, defining the usages, limiting over-consumption and demarcating limits not explored earlier. India had in its bag, the Eastern Rivers (Ravi, Beas and Satluj), while Pakistan bagged the Western Rivers (Indus, Jhelum and Chenab) as defined in Article 1, clauses 5 and 6.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">What did the Treaty solve?</h2>
          
          <p>
            Now, brace yourself for some geography - because, Pakistan is a country that depends almost exclusively on Indus and its tributaries for its irrigation and drinking needs.
          </p>

          <p>
            According to CSIS, over three-quarters of the country's annually available renewable water resources come from outside its borders, almost entirely from the Indus. Nine in every ten Pakistanis live within the Indus Basin. Major cities such as Karachi and Lahore rely upon the river—or on groundwater aquifers that the Indus helps replenish—for their drinking water. Agriculture claims 94 percent of water withdrawals in Pakistan. The sector constitutes the backbone of the economy, representing 22.9 percent of GDP, accounting for 24.4 percent of exports, providing livelihoods for two-thirds of the rural population, and employing 37.4 percent of the total labor force. The Indus system waters more than 90 percent of the nation's crops. Similarly, Pakistan generates one-fifth of its electricity from hydropower. Every one of the country's 21 hydroelectric plants is located in the Indus Basin.
          </p>

          <p>
            Thanks to the treaty, Pakistan's literal lifeline didn't flat-out as could have happened if the waters were not regulated, considering the fact that India did have sovereign control over the upstream areas of the rivers and could easily block the flow of the water into Pakistan, or could use it up, dam it, or divert the water into canals, leading to a literal drought and scarcity of water in the neighbor's farms.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Can India block Indus waters?</h2>
          
          <p>
            The treaty isn't just ceremonial, and does prevent both the sides from constructing and setting up such features that obstruct the flow and amount of water going into the other territory. Practically speaking, India, at the moment does not possess adequate infrastructure to block the Indus water completely, and it would require years' time to do so as the sources suggest. From where I think, on a personal note, India is at a point where it's getting Chinese-equivalent business opportunities, hence, would not engage in any such stunts which would harm the business as well as lead to diplomatic isolation.
          </p>

          <p>
            With the treaty being in abeyance, the final verdict still stays heavily fogged, as to what can happen and what will happen.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Ultimate Question: Should the treaty exist at all?</h2>
          
          <p>
            With complete control over the origins and upstreams of the rivers, India could have shut off the taps and left Pakistan parched—its fields cracked, its cities dry, its diplomacy desperate. And yet, it didn't. Not in 1960, and not even now—despite decades of provocations, violations, and the kind of diplomatic needlework that makes even seasoned politicians wince. When one side funds cross-border terrorism more enthusiastically than some governments fund education (pun very much intended), the impulse to retaliate by damming the flow is understandable. But India, for all its justified grievances, does not confuse citizens with regimes, or vengeance with justice. Diplomacy, dialogue, and the dignity of human life have always been part of the Indian playbook—whether or not the other side plays fair.
          </p>

          <p>
            Yes, the Treaty feels outdated. Yes, it was born in a world that no longer exists. But scrapping it altogether? That's not policy—it's performance. And in a world where water is fast becoming the currency of control, diplomacy is still the stronger current.
          </p>

          <p>
            But, should it exist at all? Maybe not in its original shape, maybe in a form, that is deemed fitter to the world now, maybe in a structure that fits the relations between the two nations and with provisions that it stays fair no matter what
          </p>

          <p class="conclusion">
            The answer still stays fogged and brings us to our original question- "To be or not to be?". The answer may never be clear to us, the question may always stand like the treaty, with all its cracks and crevices. The fact that the question is still in its place, in a world of retaliatory responses, is probably what makes the Indus Water Treaty a tragedy, a triumph – or simply, but not so simply, the lifeline of two nations.
          </p>
        </section>
      </div>
    `,
    image: "/Induswater.jpeg",
    author: authors.find(a => a.username === "atulit-pandey")!,
    category: "international",
    date: "2025-06-08",
    readTime: "10 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["International Relations", "Water Treaty", "India-Pakistan", "Geopolitics", "Diplomacy"],
    featured: true,
    isPublished: true,
  },
  {
    id: "voice-for-lu",
    title: "A Voice for LU",
    slug: "a-voice-for-lu",
    excerpt: "From the Editor's desk: A letter to our readers about the launch of LU Chronicles and our commitment to principled journalism.",
    content: `<p>From the Editor's desk</p>

<p>Dear readers,</p>

<p>The innovation with which we publish this first issue today, 7 June 2025, is justified not by ambition alone, but by a set of increasingly urgent realities: the dullness of the moment, the thinning of discourse, and the rising appetite for something more substantive among the student body. Something that doesn't insult the intelligence.</p>

<p>Ever since much of the country's media has traded substance for spectacle, the time seems ripe, even overdue, for an unpretentious sheet, one that contains the latest news and short, succinct articles of interest, delivering relevant coverage and clear, concise commentary with neither affectation nor apology.</p>

<p>It is our purpose to establish such a sheet, ideally a daily, and we hope to welcome the cooperation so necessary for its success. Our columns are open to discussion on all subjects deemed, to borrow a phrase, "consistent with decorum and morality," though what falls within those lines is, we believe, something to be negotiated rather than assumed. We welcome contributions from students, faculty, and staff alike, and we encourage a diversity of voices, not for the sake of plurality alone, but because good journalism demands the challenge of competing ideas, and strong writing is born in dialogue, not consensus.</p>

<p>With this first edition, we set forth not merely a publication but a proposition: that there is still value : civic, intellectual and cultural in student journalism. That within the walls of the University of Lucknow , as within any institution of learning, there persists a need for reportage that is timely, critique that is constructive, and writing that holds both individuals and systems to account. In doing so, we step into a rare role- that of giving shape to a new chapter in student journalism across the country.</p>

<p>We begin in earnest, not to flatter, nor to rebel without cause, but to capture what it means to be young, informed, and present at this university at this moment.</p>

<p>We recognize that Lucknow University does not exist in isolation. The events within its classrooms, common rooms, and courtrooms are shaped by and reflect the broader cultural and political forces outside its gates. If education today exists at the crossroads of aspiration and anxiety, then student journalism must be willing to walk that line as well. It is not enough to report campus events. We must examine how those events connect to the larger social landscape: how national policy shapes campus life, how generational change influences classroom debate, how students think and feel in a world increasingly defined by complexity and uncertainty.</p>

<p>Let the pages ahead be filled not with idle chatter, but with the voices of those who dare to think and to question. We shall cover lectures and laws, sports and science, personalities and politics. We will be both critics and celebrants of university life.</p>

<p>We do not promise perfection. We promise participation.</p>

<p>To publish is to participate. To speak is to shape. Let this paper be shaped by the hands of those who believe that education is not passive, but passionate.</p>

<p>Ours is not a paper of posture or pretense, but of principled participation. And with that participation comes a responsibility: to our readers, our sources, our subjects, and one another.</p>

<p>To that end, we affirm the following commitments:</p>

<ul>
  <li>We shall report truthfully, without sensationalism or embellishment.</li>
  <li>We shall reveal what we can-including names-unless doing so endangers the safety, dignity, or trust of our sources.</li>
  <li>When we err, we shall correct our mistakes promptly and prominently, with neither delay nor deflection.</li>
  <li>We shall reflect the diversity of our university in our newsroom and in our pages-not as a token gesture, but as a journalistic necessity.</li>
  <li>We shall distinguish reporting from opinion, and clearly mark the difference.</li>
  <li>When our editors, writers, or institution themselves become newsworthy, we shall not look away.</li>
  <li>We shall scrutinize our sources and investigate the institutions that shape campus life-especially those that wield power without transparency.</li>
  <li>We recognize that the appearance of a conflict of interest may be as corrosive as the reality-and will act accordingly.</li>
  <li>We shall state not only what we know, but also what we do not-and why.</li>
  <li>We shall honour our word-not only through promises made, but through promises kept.</li>
    </ul>

<p>These principles are not exhaustive, nor are they static. Like journalism itself, they will evolve with time, dialogue, and reflection. They are our starting point-and we share them publicly because journalism, like democracy, demands accountability.</p>

<p>And if, along the way, we ruffle a few feathers, let it be not out of arrogance, but in service of the most basic journalistic principle: to speak the truth as clearly as we can, while we still can.</p>

<p>May LU.Chronicles serve not only the University of Lucknow, but the very idea of a university-as a living, breathing republic of letters and dialogue.</p>

<p>Let the dialogues begin.</p>`,
    image: "/IMG_0417.JPEG",
    category: "Editorial",
    author: {
      id: "1",
      name: "Shumaila Khan",
      username: "shumaila-khan",
      image: "/Shumilaprofile.jpeg",
    },
    date: "June 7, 2025",
    views: 0,
    featured: true,
    hero: true
  },
  {
    id: "trp-over-truth",
    title: "TRP Over Truth: Fall of Indian Journalism in Times of Crisis",
    slug: "trp-over-truth-fall-of-indian-journalism",
    excerpt: "An in-depth analysis of how TRP-driven journalism has compromised crisis reporting in India, exploring the economic pressures, regulatory challenges, and potential solutions for sustainable journalism in the digital age.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          The 2020 TRP fraud made a scary reality known: all Rs 400 a month was required to determine the fate of budgetary distribution of thousands of crores of rupees, and only 10 families' bribe money was necessary for cheaters to tamper with English news channel ratings. The tampering not only skewed advertisement revenue—it actually changed fundamentally what Indians perceived as valid news.
        </p>

        <section class="article-section">
          <h2 class="section-heading">The Crisis Coverage Issue</h2>
          
          <p>
            Current crises reveal how TRP-based journalism disappoints public interest. In the May 2023 violence in Manipur that claimed more than 250 lives and displaced many thousands, national media reporting tended to simplify multifaceted ethnic tensions into melodramas for late-night debates. Likewise, the 2024 NEET paper leak that involved 2.3 million students had plenty of studio talk but sparse investigative journalism into systemic exam failure.
          </p>
          
          <p>
            Nonetheless, audience preference data indicates complexity. According to a 2023 Reuters Institute survey, although 69% of Indians are concerned about misinformation, news consumption habits still gravitate towards sensational content, resulting in a demand-supply paradox that media houses are unable to disentangle.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Economic Reality</h2>
          
          <h3 class="sub-heading">Market Forces vs. Editorial Independence</h3>
          <p>
            They contend that TRP-governed content is an expression of authentic audience tastes, rather than media manipulation. Republic TV's Arnab Goswami, for example, holds high-decibel journalism up as defending democracy by keeping elites accountable. Such a view implies elite disconnection from popular news forms and mass preferences.
          </p>
          
          <h3 class="sub-heading">Financial Constraints and Brain Drain</h3>
          <p>
            The financial pressures are real. Media organizations are under strict financial constraints with research wings either unable to hold on to trained staff because of higher offers in corporate houses. Six years were needed to build a research wing at the Hindustan Times, the executive editor said, and the staff of key personnel continuously walked out to take better-paying jobs.
          </p>
          
          <h3 class="sub-heading">Missed Opportunities in Data Journalism</h3>
          <p>
            India's open government portal contains close to 10,000 resources and 240 visualizations but is mostly overlooked by the mainstream media. Rather than using these resources for evidence-based journalism, newsrooms opted for opinionated content that involved little investment but created maximum reach.
          </p>
          
          <p>
            The irony is stark: as global media outlets increasingly turned to data visualization for sophisticated storytelling, Indian media was still stuck in debate-programming mode. It was a lost opportunity, especially considering India's advanced infrastructure for data collection it had inherited from colonial administration systems as well as post-independence planning efforts.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The State's Dual Role</h2>
          
          <h3 class="sub-heading">Revenue Dependencies and Editorial Compromise</h3>
          <p>
            Government advertising, an important source of revenue, produced editorial dependencies that undermined independence. When good coverage was attached to financial survival, public-interest journalism became economically unsustainable. This generated what economists referred to as a "scarcity economy" in which ethical journalism did not have sufficient resources to compete with sensationalized material.
          </p>
          
          <h3 class="sub-heading">Underutilized Government Data Resources</h3>
          <p>
            But the state also offered unparalleled access to data through Right to Information laws and e-governance projects. The problem was newsrooms without the technical wherewithal to make best use of the same.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Digital Disruption: Promise and Peril</h2>
          
          <h3 class="sub-heading">Alternative Revenue Models</h3>
          <p>
            Online platforms provided solutions with subscription models and targeted audience capture. Titles such as The Ken and The Wire showed that good journalism had alternative revenue streams available to it beyond standard advertising. In the same way, data journalism ventures such as IndiaSpend also demonstrated that evidence-based reporting had captive audiences.
          </p>
          
          <h3 class="sub-heading">Algorithmic Amplification of Problems</h3>
          <p>
            But digital platforms also exacerbated the TRP problem with algorithmic content promotion that was driven by engagement rather than accuracy. Social media metrics now dictated editorial decisions as much as television ratings used to.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Toward Sustainable Solutions</h2>
          
          <p class="solutions-intro">
            The way ahead would demand systemic changes instead of piece-by-piece reforms:
          </p>
          
          <div class="solutions-grid">
            <div class="solution-item">
              <h3 class="solution-heading">Revenue Diversification</h3>
              <p>
                News organizations needed to build subscription models, educational collaborations, and reader-funded journalism to lower the reliance on advertising.
              </p>
            </div>
            
            <div class="solution-item">
              <h3 class="solution-heading">Training and Capacity Building</h3>
              <p>
                Newsrooms required specialized data journalism and digital verification training. As the Asian College of Journalism showed, young reporters could be trained in both technical and analytical abilities required for contemporary reporting.
              </p>
            </div>
            
            <div class="solution-item">
              <h3 class="solution-heading">Regulatory Balance</h3>
              <p>
                Unrestricted government advertisement allotment with no editorial riders, along with enhanced penalties for intentional misinformation in times of crisis.
              </p>
            </div>
            
            <div class="solution-item">
              <h3 class="solution-heading">Collaborative Models</h3>
              <p>
                Joint research facilities between media establishments to render investigative journalism financially feasible.
              </p>
            </div>
          </div>
          
          <h3 class="sub-heading">The Broader Democratic Context</h3>
          <p>
            The crisis in journalism reflected broader democratic challenges. Citizens needed accurate information during crises, but market forces often prioritized entertainment over education. This tension wasn't unique to India—global media faced similar pressures as attention economies reshaped information consumption.
          </p>
          
          <h3 class="sub-heading">Signs of Hope</h3>
          <p>
            Quality journalism continued in spite of these limitations. The Hindu's analysis of election data, Scroll's investigative journalism, and local media holding strong to ethical standards showed that alternative models were still possible. These offered the hope that the decision between commercial success and editorial integrity wasn't zero-sum.
          </p>
          
          <p>
            The debate wasn't whether sensational journalism could or should exist—market forces guaranteed it would. Instead, the challenge lay in making room for other journalism models catering to other democratic roles. Some could excel at entertainment-oriented news for the mass audience, while others tried out deep analysis for serious citizens.
          </p>
        </section>

        <section class="article-section conclusion">
          <h2 class="section-heading">Conclusion</h2>
          
          <p>
            The TRP-led evolution of Indian journalism was also representative of broader market forces versus democratic demands. Sensational material got short-term attention, but real democracy demanded institutions that valued accuracy over audience, context over controversy.
          </p>
          
          <p>
            The answer wasn't to eradicate commercial journalism but to promote ecosystem diversity where various models could coexist. This required deliberate decisions by media owners, regulatory encouragement of editorial autonomy, and citizen investment in high-quality journalism through subscriptions and participation.
          </p>
          
          <p class="final-thought">
            The collapse of crisis journalism wasn't inevitable—it was a decision that could still be undone through institutional reform and collective action.
          </p>
        </section>
      </div>
    `,
    image: "/Trpovertruth.jpeg",
    author: authors.find(a => a.username === "abhinav-upadhyay")!,
    category: "op-ed",
    date: "2025-06-08",
    readTime: "15 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Journalism", "Media", "TRP", "India", "Crisis Reporting"],
    featured: true,
    isPublished: true,
  },
  {
    id: "coming-soon-2",
    title: "The Future of Education: AI in the Classroom",
    slug: "the-future-of-education-ai-in-the-classroom",
    excerpt: "Exploring how artificial intelligence is transforming education and what it means for the future of learning.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          As artificial intelligence continues to evolve, its impact on education becomes increasingly profound. From personalized learning experiences to automated grading systems, AI is reshaping how we teach and learn.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Personalized Learning</h2>
          
          <p>
            AI-powered learning platforms can now adapt to individual student needs, providing customized content and pacing. This personalization helps students learn at their own pace while ensuring they master essential concepts.
          </p>
          
          <p>
            Studies show that personalized learning can improve student engagement and achievement. However, it also raises important questions about equity and access to technology.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Role of Teachers</h2>
          
          <p>
            While AI can automate many tasks, it cannot replace the human element in education. Teachers remain crucial for providing emotional support, fostering critical thinking, and building relationships with students.
          </p>
          
          <p>
            The future of education lies in finding the right balance between AI assistance and human guidance.
          </p>
        </section>

        <section class="article-section conclusion">
          <h2 class="section-heading">Looking Ahead</h2>
          
          <p>
            As we embrace AI in education, we must ensure that technology serves to enhance learning rather than replace human interaction. The goal should be to create an educational environment that combines the best of both worlds.
          </p>
        </section>
      </div>
    `,
    image: "/LULOGO.jpeg",
    category: "Sci-tech",
    author: authors.find(a => a.username === "prerna-srivastava")!,
    date: "2025-06-08",
    readTime: "5 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Education", "AI", "Technology", "Future of Learning"],
    featured: true,
    isPublished: true
  },
  {
    id: "coming-soon-3",
    title: "Campus Life: A Day in the Life of a LU Student",
    slug: "campus-life-a-day-in-the-life-of-a-lu-student",
    excerpt: "An intimate look at the daily experiences of students at Lucknow University, from classes to cultural activities.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          The University of Lucknow campus buzzes with activity from dawn to dusk. Let's follow a typical day in the life of our students, capturing the essence of campus life.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Morning Routine</h2>
          
          <p>
            The day begins early for many students, with some attending morning classes while others participate in sports activities or study groups. The campus comes alive with the sound of students rushing to their first lectures.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Academic Life</h2>
          
          <p>
            Classes are the heart of university life, where students engage in lively discussions and learn from experienced faculty members. The libraries are always busy with students working on assignments and research projects.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Cultural Activities</h2>
          
          <p>
            Beyond academics, the campus hosts numerous cultural events, from music performances to literary festivals. These activities provide students with opportunities to showcase their talents and build lasting friendships.
          </p>
        </section>

        <section class="article-section conclusion">
          <h2 class="section-heading">Evening Reflections</h2>
          
          <p>
            As the day winds down, students gather in the common areas to relax and share stories. The campus takes on a peaceful atmosphere, with the setting sun casting long shadows across the historic buildings.
          </p>
        </section>
      </div>
    `,
    image: "/LULOGO.jpeg",
    category: "University",
    author: authors.find(a => a.username === "trishla-chaudhary")!,
    date: "2025-06-08",
    readTime: "4 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Campus Life", "Student Experience", "University Culture"],
    featured: true,
    isPublished: true
  },
  {
    id: "coming-soon-4",
    title: "The Art of Storytelling: LU's Literary Heritage",
    slug: "the-art-of-storytelling-lus-literary-heritage",
    excerpt: "Exploring the rich literary traditions of Lucknow University and its contribution to Indian literature.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          Lucknow University has long been a cradle of literary excellence, nurturing generations of writers, poets, and storytellers who have shaped Indian literature.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Literary Legacy</h2>
          
          <p>
            The university's Department of English and Modern Indian Languages has produced numerous acclaimed authors and scholars. Their works reflect the diverse cultural heritage of Lucknow and India.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Contemporary Voices</h2>
          
          <p>
            Today's students continue this tradition, participating in literary societies and publishing their work. The annual literary festival brings together established and emerging writers for a celebration of words and ideas.
          </p>
        </section>

        <section class="article-section conclusion">
          <h2 class="section-heading">Looking Forward</h2>
          
          <p>
            As we honor our literary heritage, we also look to the future, encouraging new voices and perspectives to enrich our storytelling tradition.
          </p>
        </section>
      </div>
    `,
    image: "/LULOGO.jpeg",
    category: "Arts & Culture",
    author: authors.find(a => a.username === "mani-soni")!,
    date: "2025-06-08",
    readTime: "6 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Literature", "Storytelling", "Cultural Heritage", "University History"],
    featured: true,
    isPublished: true
  },
  {
    id: "vikram-misri-controversy",
    title: "Foreign Policy and Domestic Response: Unpacking The Vikram Misri Controversy",
    slug: "foreign-policy-domestic-response-vikram-misri",
    excerpt: "An in-depth analysis of the public backlash against Foreign Secretary Vikram Misri following the ceasefire agreement, exploring the intersection of diplomacy, public sentiment, and online discourse in modern India.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          "Deshdrohi," "Gaddar," "traitor," — these are just a few of the labels hurled at India's Foreign Secretary, Vikram Misri, after the announcement of a ceasefire agreement. The online backlash was swift and intense, targeting not just Misri's stance, but his decades of diplomatic proficiency.
        </p>

        <p>
          This incident doesn't just focus on one diplomat—it reflects broader public attitudes and highlights the urgent need to reconsider how we engage, both online and offline. This piece looks at what led to the controversy, the nature of the criticism, and the broader question it raises: how does India respond to voices that advocate for dialogue over confrontation?
        </p>

        <section class="article-section">
          <h2 class="section-heading">Navigating Diplomacy: Who is Vikram Misri?</h2>
          
          <p>
            Vikram Misri is an IFS from the batch of 1989. Misri was appointed as the 35th foreign secretary to India on July 15, 2024. Over the course of his distinguished diplomatic career, Misri was Private Secretary to three Indian Prime Ministers.
          </p>
          
          <p>
            Vikram Misri is recognized for his deep knowledge of China. He is also regarded as the "China Expert". Appointed as India's Ambassador to China in 2018, he played a significant role during the 2020 Galwan Valley clashes between Indian and Chinese troops in Ladakh and in multiple rounds of de-escalation talks.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Vikram Misri and the Operation Sindoor</h2>
          
          <p>
            As tensions flared between India and Pakistan, Foreign Secretary Vikram Misri became a steady and trusted voice for the country. In the days that followed Operation Sindoor, he stepped into the spotlight, taking on his shoulders the heavy weight of explaining the government's stance to both Indians and the world. Calmly and with crystalline clarity, he shared updates on military actions, ceasefire talks, and India's measured responses to provocations from our neighbours. In a time filled with uncertainty and fear, his role was crucial—not just in keeping people informed, but also in helping the nation hold onto hope and trust during a time of distress.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">What caused the Backlash?</h2>
          
          <p>
            On May 10, Misri publicly announced that India and Pakistan had agreed to a mutual ceasefire, following four days of escalating drone and missile exchanges that had pushed the region dangerously close to broader conflict. He stated that the agreement came after a direct conversation between the Director Generals of Military Operations (DGMOs) from both nations, with the ceasefire set to take immediate effect.
          </p>

          <p>
            After the ceasefire announcement, those who had been openly demanding a strong retaliation against Pakistan after the Pahalgam terror attack, were disappointed over the ceasefire agreement and aimed their anger at him.
          </p>

          <p>
            Vikram Misri faced severe online backlash, with many branding him a "traitor" and "deshdrohi." The harassment didn't stop with him—his family, especially his daughter, became targets of relentless trolling and abuse. One cannot help but feel scared and discouraged while imagining to be serving as the Foreign Secretary of their country, dedicating their life to its service, only to see one's own family and loved ones being dragged into the line of fire but this went far beyond trolling. Some individuals circulated Vikram Misri's past social media posts, disclosed private contact information belonging to his family, and made abusive remarks targeting his daughter. This relentless abuse and invasion of privacy forced the Foreign Secretary to lock his profile to protect himself and his family from further trolling and doxxing. Amid the storm of online harassment, India's Foreign Secretary stayed silent and chose not to respond publicly. He restricted access to his account on platform X, which now reads: "These posts are protected."
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Support From All Quarters</h2>
          
          <p>
            Even though the backlash was harsh and uncalled for, the support Vikram Misri received reflected the trust he had earned through his years of service. Former diplomats, politicians, government bodies, they all stood firmly in his support.
          </p>

          <p>
            The Former Foreign Secretary Nirupama Menon called the trolling of the senior diplomat "utterly shameful" and said it "crosses every line of decency".
          </p>

          <p>
            The IAS Association expressed solidarity with Vikram Misri and his family on X, calling the personal attacks regrettable and reaffirming their support for the dignity of public service.
          </p>

          <p>
            The IFS Association described the trolling as "despicable" and stood in solidarity with Misri.
          </p>

          <p>
            Government bodies like the National Commission for Women (NCW) have reacted strongly to online trolling of Misri and his family, including his daughters.
          </p>

          <p>
            Condemning the attack on Misri's daughter, NCW chief Vijaya Rahatkar stated that sharing the contact details of the young woman on social media platforms and subjecting her to online abuse is a "grossly irresponsible act" and a "serious breach of privacy".
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Strength To Pause</h2>
          
          <p>
            When the country was raw with grief and the urge to strike back was overwhelming, Vikram Misri chose something far harder than aggression—he chose restraint. Out of the knowledge that wars aren't won on television panels or Twitter threads, and that the real cost of conflict is paid not in headlines, but in human lives.
          </p>

          <p>
            He wasn't acting alone. As Foreign Secretary, he was delivering a decision shaped by India's top leadership. His job wasn't to match public anger, it was to stay steady when it mattered most.
          </p>

          <p>
            The ceasefire wasn't a weakness. It was a deliberate choice. A way to show that real power isn't in reacting loudest, it's in knowing when to pause, and why.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Seeing/Peeking beyond the trolls</h2>
          
          <p>
            The vicious trolling of Vikram Misri has forced us to confront a troubling question: How does India treat those who dedicate their lives to diplomacy and national service? For warmongers, war is the only solution—but for seasoned diplomats like Misri, dialogue and discussion are the real keys to resolution.
          </p>

          <p>
            The anonymous mobs behind the keyboard need to rethink the entire situation. Doxxing, abuse, and name-calling are nothing short of criminal.
          </p>

          <p class="conclusion">
            The question, then, isn't whether Vikram Misri was right. The question is: are we ready to be a country that honors its peacemakers, not just its warriors?
          </p>
        </section>
      </div>
    `,
    image: "/Vikrammishri.jpeg",
    author: authors.find(a => a.username === "prerna-srivastava")!,
    category: "national",
    date: "2025-06-08",
    readTime: "12 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Diplomacy", "Foreign Policy", "India", "Social Media", "Public Discourse"],
    featured: true,
    isPublished: true,
  },
  {
    id: "geopolitical-rise-nuclear-rivals",
    title: "From Partition to Power Play: The Geopolitical Rise of Two Nuclear Rivals",
    slug: "geopolitical-rise-nuclear-rivals",
    excerpt: "From non-alignment to multi-alignment, from Cold War pawns to global power brokers—how did two nations born from the same partition in 1947 end up on opposite sides of the world's new great game?",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          From non-alignment to multi-alignment, from Cold War pawns to global power brokers—how did two nations born from the same partition in 1947 end up on opposite sides of the world's new great game? The answer lies not in their similarities, but in the choices that pulled them apart.
        </p>

        <p>
          In May 2025, we all saw how two nuclear nations came to the threshold of full-fledged war. While the world was too focused on Military power, we forgot to recognize the power that not only makes countries stand in global politics but also shapes world dynamics.
        </p>

        <p>
          The power this article will explain is the geopolitics of TWO NUCLEAR NATIONS which are indeed INDIA AND PAKISTAN.
        </p>

        <p>
          This article will not only go through the current geopolitics but also answer some crucial questions like: How today's geopolitics of both nations is rooted in its past and how domestic politics influenced it. Not only that we will get to know why countries like the US which had good relations with Pakistan now see INDIA as its alternative in the South Asian continent, where do INDIA AND PAKISTAN stand in world politics today?
        </p>

        <section class="article-section">
          <h2 class="section-heading">INDIA's BACKGROUND: From 1947's NAM to 2025's Multi-alignment</h2>
          
          <p>
            First, to understand this, we need to understand the past of India's foreign policies and how it has evolved.
          </p>
          
          <p>
            While countries had to choose sides in Cold War politics, India decided to take a path that felt like a gambling game. This was risky for a country that had just been partitioned, faced a large refugee problem, wasn't fully integrated as a nation, and inherited a stagnant economy marked by backward industries from British rule.
          </p>

          <p>
            Well, well, every nation has to choose a side—otherwise how will it ask for help?
          </p>

          <h3>1947 TO 1970s:</h3>
          <p>
            Though INDIA decided to choose a path of NON-ALIGNMENT which later turned out to be NAM policy under our first Prime Minister and also our longest-serving External Affairs Minister throughout his 17-year premiership, Jawaharlal Nehru. NAM [Non-Aligned Movement] meant that India would not choose any sides, neither the USSR nor the US, but would have its own autonomy and independence. Countries that chose this path were called third world and many others misunderstood what this meant. While some understood it as isolation in world politics, in reality it was like taking benefit from both while not involving one side of politics. This made INDIA lead in third-world politics.
          </p>

          <p>
            Though INDIA was in support of peace Pakistan took a step to have war in Kashmir where the 1947-48 war took place which started India's relation with Pakistan as bitter as could be! Though India and Pakistan took their respective paths, the clashes continued, as we see in current politics today.
          </p>

          <p>
            However, the same thing was not with China!
          </p>

          <p>
            During this era, many new nations were emerging and the decolonization era was going on. China was one of the emerging nations. During this time India chose a path of friendship with China as India was the first noncommunist nation that recognized China's existence. India and China had a Pancheel agreement and while India thought it would neighbor with the peaceful agreement, China had other plans. There was a slogan, "HINDI-CHINI BHAI BHAI," which showed the friendship between these two nations at the time. However, during this period China invaded Tibet which made it suspicious for INDIA. India gave asylum to DALAI LAMA which further strained both country's relations. Both countries started to have distrust and China attacked INDIA in 1962, leading to the Sino-Indian war of that time. This resulted in the Distrust between two nations. After 1962, India realized that just following a peaceful foreign policy wasn't enough - the country also needed to build strong defense capabilities and be ready to face any threats or challenges from other nations.
          </p>

          <h3>1970s TO 1990s:</h3>
          <p>
            Through this time, Nehru's policies were replaced by a new shift toward more pragmatic policies. During the decades of the 1970s to 1990s, India emerged as not only a leader in peace but also an emerging power with a strong position in geopolitics. It made it emerge as powerful in every dynamic whether it is military or nuclear power.
          </p>

          <h3>1990s TO 2000s:</h3>
          <p>
            However, changes are something that can't be stopped leading INDIA to change its geopolitical dynamics from the 1990s when a massive change took place in Moscow. While INDIA had its NAM policy the USSR's fall forced it to have better relations with us. In addition, India's liberation policies showed it as a country with new doors. There was not only this shift but also the shift we see the US taking. While the US had close relations with Pakistan, as we will see in further sections. Pakistan made decisions that made the US have better alternatives in the Asian continent. In addition, the shift of Pakistan to becoming close to China makes it more suspicious for the US. This resulted in a closer relationship between INDIA and the US in the decade of 2000s. This era was marked following the historic India-US nuclear deal, unveiled through a groundbreaking joint statement by President George W. Bush and Prime Minister Manmohan Singh on July 18, 2005, represented a seismic shift in global nuclear diplomacy by welcoming India into the international nuclear framework while acknowledging its responsible civilian nuclear capabilities.
          </p>

          <h3>INSTABILITY-STABILITY PARADOX:</h3>
          <p>
            The nuclear power emergence of India, as well as Pakistan in a later period, created a situation of instability stability paradox where the instability-stability paradox between India and Pakistan suggests that while nuclear weapons deter full-scale war (stability), they embolden lower-level conflicts like proxy wars and skirmishes (instability). This dynamic has enabled Pakistan to pursue asymmetric strategies, assuming India will avoid escalation due to the threat of nuclear retaliation.
          </p>

          <h3>LOOK EAST:</h3>
          <p>
            This era also showed INDIA having policies of looking east where India understood the power of ASEAN [Association of Southeast Asian Nations], and took influential participation in regional affairs, adapting to the changing geopolitical landscape of the Indo-Pacific.
          </p>

          <h3>TRANSFORMATION TO MULTI-ALIGNMENT:</h3>
          <p>
            In an era of NDA government, India shifted its focus from NAM to a multi-alignment policy where it does not only focus on autonomy in its policy but emphasizes multilateralism and regional cooperation in various forums (e.g., BRICS, G20), and defense collaborations. This made INDIA emerge into a nation that not only sits in the major talks but also shapes it.
          </p>

          <p>
            This evolution of its policy came with challenges as we see INDIA CAME CLOSE TO THE US AND WEST WHILE BALANCING WITH OLD ALLIES, Pakistan too made the strategic path to balance in world politics.
          </p>

          <p>
            To understand this we need to understand the geopolitics of Pakistan.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">PAKISTAN'S BACKGROUND: FROM US ALLY TO CHINA'S FRIEND</h2>
          
          <p>
            During PAKISTAN'S era of independence, Jinnah envisioned a secular Pakistan that would "stand by the United Nations Charter" and seek friendship worldwide. In Pakistan, domestic instability—including military coups, economic crises, and political protests—has fueled an assertive foreign stance aimed at "bleeding India with a thousand cuts" and driven large investments in missile and nuclear forces. Pakistan's instability in its democracy, where it is said Pakistan's PM could not even stay for 5 years, makes it clear how its policies are chosen by military leaders, not by the public.
          </p>

          <h3>JINNAH'S VISION'S SHIFT TO MILITARY-DOMINATED FOREIGN POLICY:</h3>
          <p>
            Due to this, in Pakistan, Jinnah's liberal vision quickly gave way to military rule and Islamization, especially under General Zia-ul-Haq in the 1980s. The army and its intelligence services effectively ran foreign policy, often sidelining professional diplomats, and militants increasingly became tools of statecraft.
          </p>

          <p>
            This ideological shift shaped both countries' diplomatic approaches. Pakistan's support for jihadist groups, first against Soviet forces in Afghanistan, then against India in Kashmir—was rationalized as fighting India through "hundreds of little wars." This strategy initially brought U.S. arms during the 1980s Afghan resistance against Soviet occupation but later damaged Pakistan's international reputation when some militants turned against Pakistan itself or launched attacks on India.
          </p>

          <p>
            The Trump and Biden presidencies brought a harsh reality check to Islamabad: America is no longer a reliable ally. After the U.S. withdrawal from Afghanistan in 2021, U.S.-Pakistan relations deteriorated significantly (with mutual blame over the Taliban's return to power), leaving Pakistan scrambling for alternatives.
          </p>

          <h3>PAKISTAN'S DIVERSIFICATION:</h3>
          <p>
            Pakistan's answer? Diversify dramatically.
          </p>

          <p>
            It's hardly a coincidence that China is Islamabad's closest ally. Beijing and Islamabad have long worked together to "balance India," as Indian analyst Srikanth Kondapalli bluntly puts it: "By backing Pakistan— with arms and aid—[China] has tried to balance India and regional power equations." In other words, China supports Pakistan largely to counterbalance its own rivalry with India. Scholar Abraham M. Denmark explains China's thinking: a strong Pakistani ally "can help China prevent the emergence of a continental-sized rival" on its border.
          </p>

          <p>
            What does this look like in practice? Massive Chinese investment in Pakistan's military and infrastructure, including the China-Pakistan Economic Corridor (CPEC), naval bases, and ballistic missiles—all of which India watches with growing concern. For example, the $46 billion CPEC project—linking China's far western province of Xinjiang to the Pakistani port of Gwadar—is explicitly designed to give China a shorter route to the Arabian Sea. This simultaneously increases Beijing's influence in the region while effectively surrounding India.
          </p>

          <p>
            According to The Moscow Times, 2023 saw Pakistan-Russia trade reach a record $1 billion, and even Moscow's deputy premier publicly supported Pakistan's bid to join BRICS (an economic group including Brazil, Russia, India, China, and South Africa). Energy cooperation has become central to this relationship, with Islamabad signing an agreement for a 1,100 km Russia-Pakistan gas pipeline and expressing interest in acquiring Russian S-400 missile defense systems.
          </p>

          <p>
            In short, Pakistan has pivoted toward a China-Russia-Gulf axis as American support has faded. Unlike the post-9/11 decade when Islamabad largely followed Washington's lead, today Pakistan is what analyst Siddiqui calls a "wobblier" partner—seeking any ally willing to keep its economy afloat while downplaying its formerly close relationship with the United States.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">SO WHERE DO INDIA AND PAKISTAN STAND?</h2>
          
          <p>
            In summary, India today enjoys support from a broad coalition of major powers (including the U.S., Russia, Western Europe, Japan, Australia, the UAE, and Israel), while Pakistan depends primarily on China and a handful of Islamic allies.
          </p>

          <p>
            Foreign Affairs magazine has reported that India's leadership now considers global alignment "the surest foundation" for national security. The bottom line: India rarely stands alone. During the May 2025 crisis, the United States, United Kingdom, France, Germany, the United Arab Emirates, Saudi Arabia, and others all urged restraint while tacitly supporting India's right to self-defense. This stands in stark contrast to Pakistan, whose few remaining allies worked quietly through diplomatic channels with limited public support.
          </p>
        </section>
      </div>
    `,
    author: {
      id: "8",
      name: "Ansesveri Laxmi",
      username: "ansesveri-laxmi",
      image: "/Ansesveri Laxmi.jpeg"
    },
    category: "International",
    date: "2025-06-09",
    readTime: "15 min read",
    image: "/geopolitics.jpeg",
    featured: true,
    views: 1250,
    likes: 89,
    comments: []
  },
  {
    id: "economic-war-china-us",
    title: "Economic War: China vs US fight",
    slug: "economic-war-china-us",
    excerpt: "After Trump ascended in power for the second time as new president of the United States the ongoing conflict between US and China has escalated to a high level bringing a lot of challenges between both countries and the rest of the world.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          After Trump ascended in power for the second time as new president of the United States the ongoing conflict between US and China has escalated to a high level bringing a lot of challenges between both countries and the rest of the world. The trade dispute between the US and China was motivated by several factors, such as changes in the global economic landscape where the fast rise of China's economic power has been seen as a threat by the US.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Background-When everything started</h2>
          
          <p>
            The trade war between the United States of America and China started in 2018, in the first Donald Trump term as a president of America and started imposing tariffs on Chinese products because the Trump Administration believed that China had some unfair trade practices, intellectual property theft and market access. As a response China retaliated by imposing tariffs on American products, starting like this a cycle of successive increases in both sides.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Conflict Escalation</h2>
          
          <p>
            In January 2018, the Trump administration applied tariffs on $8.5 billion worth of Chinese products, including aircraft parts and machinery. China in response with tariffs on $3.4 billion worth of American products.
          </p>

          <p>
            In 2019, the trade war intensified, and the US started applying additional tariffs on $200 billion worth of Chinese products. China also retaliated with tariffs on $60 billion worth of American products.
          </p>

          <p>
            In January 2020, the US and China signed the "Phase 1" trade deal, with the US agreeing to reduce tariffs and China committing to buy $200 billion worth of American products over the next two years.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Current situation</h2>
          
          <p>
            In April 2025, Trump proposed a 60% tariff on all Chinese products, and later on it increased to 145%, in response China retaliated by applying a 125% tariff on American products.
          </p>

          <p>
            On May 12, 2025 was announced the US-China trade truce, specifically 90-day pause in trade war. This agreement was proposed during talks in Geneva between US and Chinese officials, in order to ease tensions and open space for negotiations. This is a temporary pause and some key factors are:
          </p>

          <ul>
            <li>The Us lowered tariffs on Chinese goods from as high as 145% to 30%.</li>
            <li>China reduced its tariffs on Us goods from 125% to 30%.</li>
            <li>Both sides agreed to create a new dialogue mechanism for the ongoing trade issues.</li>
          </ul>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Global Consequences</h2>
          
          <p>
            US and China are two powerful economies and this trade war brings huge consequences in the global context, this both countries together account 43% of share of the global economy, according to International Monetary Fund (IMF) such consequences include:
          </p>

          <h3>Global GDP Reduction:</h3>
          <p>
            The present conflict can lead to a decline in global trade and economic growth. This uncertainty and tariffs led to slower global GDP growth. The IMF and World Bank both have revised growth forecasts downward during the trade war.
          </p>

          <h3>Higher Prices for the consumers:</h3>
          <p>
            The tariff costs applied on goods passed to consumers, the US and Chinese consumers faced higher prices on goods subject to tariffs. For example, US prices rose on electronics, clothing and food items.
          </p>

          <h3>Realignment of Global Trade:</h3>
          <p>
            Many companies have shifted manufacturing out of China to avoid US tariffs, moving to countries like India, Vietnam, Malaysia, Mexico and Thailand. China reduced import of soybean from US and started importing from Argentina and Brazil. Oil and gas flows were adjusted, with China turning it to Russia and the Middle East for energy supplies.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Conclusion</h2>
          
          <p>
            The current trade war between the US and China is rising uncertainty in the present economic global scenario, it is a rooted manifestation of economic, technological and geopolitical tensions between the largest economies of the world. This war is disrupting global supply chains, slowing the global economic growth and realigning trade relations across continents.
          </p>

          <p>
            Looking at this scenario, the US-China economic war has laid the foundation for a more fragmented and multipolar global order.
          </p>
        </section>
      </div>
    `,
    author: {
      id: "3",
      name: "Dorcas Tembo Sambo",
      username: "dorcas-tembo",
      image: "/Dorcas Tembo Sambo.jpg"
    },
    category: "International",
    date: "2025-06-09",
    readTime: "10 min read",
    image: "/USCHINA.jpeg",
    featured: true,
    views: 980,
    likes: 67,
    comments: []
  },
  {
    id: "running-dry-india-water-crisis",
    title: "Running Dry: India's Escalating Water Crisis Under Climate Change",
    slug: "running-dry-indias-escalating-water-crisis-under-climate-change",
    excerpt: "A comprehensive analysis of India's water crisis and its implications under climate change.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          With just 4% of the world's freshwater and 18% of its population, India's water math no longer adds up. This mismatch places India among the most water-stressed nations in the world. Dropping groundwater supplies, unpredictable rainfall, and poor methods of water use all come together to form a complex and serious water shortage problem.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Worsening Water Supplies</h2>
          
          <p>
            Water availability per person in India has been dropping over the years. It went from 1,816 cubic meters in 2001 to 1,545 cubic meters in 2011. The Central Water Commission predicts this will fall further to 1,219 cubic meters by 2050. This puts India in the "water-stressed" group. A report published in 2024 by the DCM Shriram Foundation and Sattva Knowledge Institute states that almost half of India's districts could face serious water shortages by the middle of the century. Factors behind this include a growing population overuse of water in farming, pollution in water sources, and changes in climate.
          </p>

          <p>
            In many states, people are dealing with rising shallow groundwater contamination. Bihar and West Bengal face arsenic in the water. Rajasthan and Telangana struggle with fluoride pollution. Parts of Punjab even show traces of uranium. These issues worsen problems with public health and access to safe water.
          </p>

          <p>
            Climate change plays a big role in India's growing water crisis. It speeds up the problems and makes them worse. Rainfall patterns are becoming unpredictable. Monsoons are not shorter but also heavier in areas like the Western Ghats. In regions such as Bihar, floods and droughts now overlap instead of arriving in separate seasons.
          </p>

          <p>
            Warmer temperatures are making surface water evaporate faster and causing aquifers to run dry. Glaciers in the Himalayas, which act as India's water source, are melting quicker than before. This puts the future of rivers like the Ganges and Brahmaputra at risk. Research warns that India might see groundwater depletion rise up to three times by 2050 if global climate action doesn't happen.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Broader Social and Economic Effects</h2>
          
          <p>
            Water scarcity's effects can now be seen in many areas. Agriculture, which uses about 84% of India's freshwater, faces serious risks. Farmers growing water-heavy crops like rice and sugarcane—in dry states like Punjab and Maharashtra—are making the problem worse.
          </p>

          <p>
            Water shortages are causing crop failures, which lower farm incomes and increase problems in rural communities. This often forces people to migrate to cities during specific seasons. Cities however, deal with their own water issues. These problems push the growth of slums that lack proper water and sanitation systems.
          </p>

          <p>
            Industries such as textiles, thermal power plants, and pharmaceuticals face delays because water supply is limited. Public health also takes a hit, as waterborne diseases are becoming more common. A 2024 NITI Aayog report states that over 200,000 people die every year because they cannot access safe drinking water. Conflicts over water between states are also becoming more serious. Arguments over rivers like the Cauvery and Yamuna are getting worse.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Government and Community Interventions</h2>
          
          <p>
            The government has introduced many programs to tackle the water crisis. Jal Shakti Abhiyan focuses on saving water and collecting rainwater. The Atal Bhujal Yojana, backed by the World Bank, works to manage groundwater by involving communities in water planning and budgeting.
          </p>

          <p>
            Communities have also made a difference through their efforts. Rural women in Bundelkhand known as the Jal Sahelis, have brought old water bodies back to life improving water access and helping the environment recover. In Gujarat, Jal Sanchay Jan Bhagidari helps local governing groups set up rainwater harvesting systems and encourages community involvement in managing water resources.
          </p>

          <p>
            Challenges remain as electricity subsidies encourage excessive groundwater use through borewells. Policy enforcement and the coordination of efforts between rural and urban areas also face setbacks.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Using Technology to Solve Water Problems</h2>
          
          <p>
            Technology now plays a big role in dealing with water shortages. Farmers in Punjab use soil sensors with IoT technology to lower the need for irrigation. In the Jhabua district of Madhya Pradesh, drones drop seed balls to boost reforestation and improve groundwater levels.
          </p>

          <p>
            Cities like Bengaluru and Hyderabad use systems to recycle and reuse wastewater, which lowers their need for freshwater. Tools using AI combined with real-time dashboards for tracking, are helping make water management better. They also assist with planning ahead for floods or droughts.
          </p>

          <p>
            Technology needs to reach more people and come with proper training. This is important in villages and remote areas.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">A Multi-Faceted Way Ahead</h2>
          
          <p>
            India can tackle its water crisis with a combined and steady effort.
          </p>

          <ul>
            <li><strong>Policy Changes:</strong> India should tighten rules on using groundwater, redo subsidies that lead to waste, and promote switching to crops that use less water.</li>
            <li><strong>Building Infrastructure:</strong> The country must enhance rainwater collection, recycle used water, and set up local water storage systems.</li>
            <li><strong>Fair Distribution:</strong> Water must be shared between cities and villages. Efforts must also focus on reducing inequalities related to caste and gender in accessing water.</li>
            <li><strong>Raising Awareness:</strong> People must learn how to use water and understand the long-term effects of climate change.</li>
            <li><strong>Using science and technology more</strong> means including data-based tools in local water management systems and planning processes.</li>
          </ul>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Conclusion</h2>
          
          <p>
            India's water crisis is no longer a future concern—it's happening now, and growing more urgent by the day. Rising temperatures, a booming population, and poor water management are stretching the country's limited resources to a breaking point. If left unaddressed, the consequences will ripple across agriculture, public health, and economic development.
          </p>

          <p>
            But India also has what it takes to turn the tide. From citizen-led conservation efforts to innovations in water tech, there is no shortage of solutions—only the need for stronger political will and coordinated action. Clear policies, better education, and community-driven planning can bring real change.
          </p>

          <p>
            As water activist Rajendra Singh once said, "The future of water is the future of humanity." In securing one, India safeguards the other. Let's make the choice now.
          </p>
        </section>
      </div>
    `,
    author: {
      id: "2",
      name: "Hetal Kothari",
      username: "hetal-kothari",
      image: "/Hetal.jpeg"
    },
    category: "National",
    date: "2025-06-10",
    readTime: "12 min read",
    image: "/water.jpeg",
    featured: true,
    views: 1100,
    likes: 75,
    comments: []
  },
  {
    id: "article-1",
    title: "Whose Campus Is It Anyway? Gender and Everyday Life at Lucknow University",
    slug: "whose-campus-is-it-anyway",
    content: `
      <div class="article-content">
        <div class="prose prose-lg max-w-none">
          <p class="mb-6 leading-relaxed">
            It's late afternoon at Lucknow University, and the lawns are full. Groups of students sit under the trees, share snacks, prepare for exams, or simply pass the time. It's a familiar scene—easy to romanticize. But sit long enough, and certain patterns begin to emerge. Boys take the center, speak louder, move more freely. Girls sit closer to the edges, in smaller groups, often glancing at the time. By 7:45 PM, many will begin to leave—not because their work is done, but because they must be back in the hostel by 8.
          </p>

          <p class="mb-6 leading-relaxed">
            That single moment—when girls begin packing up while boys linger—says more about gender on campus than any official document ever could.
          </p>

          <h2 class="text-2xl font-serif font-bold mt-8 mb-4">Visible Progress, Invisible Barriers</h2>
          <p class="mb-6 leading-relaxed">
            The University of Lucknow has made visible efforts in the past decade to improve safety, representation, and gender sensitivity. The Gender Sensitization Cell organises events, workshops, and dialogues. There is an Internal Complaints Committee. Women students now outnumber men in many courses. All these are real gains. And yet, when you walk through the campus—or try staying late, try sitting at a dhaba near the hostel, or try participating in student politics—you quickly realise that public space, here as elsewhere, is not neutral. It is negotiated, regulated, and at times, denied.
          </p>

          <h2 class="text-2xl font-serif font-bold mt-8 mb-4">The Curfew Rule</h2>
          <p class="mb-6 leading-relaxed">
            Take the curfew rule. In December 2022, after a scuffle near the midnight canteen, the university administration issued a notice: girls' hostels would now close at 8 PM, boys' at 10. The rationale was security. But what many students heard instead was a familiar message—when something goes wrong, restrict the women. Conversations began almost immediately. Why two sets of rules? Why not improve campus security instead? Some protested formally; others simply adapted in silence, as they always have.
          </p>

          <h2 class="text-2xl font-serif font-bold mt-8 mb-4">Hostel Conditions and Voice Suppression</h2>
          <p class="mb-6 leading-relaxed">
            Or take the hostels themselves. In one women's hostel, students had raised concerns about food quality, lack of medical care, and repeated intimidation. Instead of being heard, six of them received show-cause notices. In another instance, the hostel provost allegedly told residents not to post about hostel conditions online—threatening suspension if they did. These are not isolated stories. They reflect an everyday atmosphere where rules are not always gender-neutral, and where speaking up can be as difficult as staying silent.
          </p>

          <h2 class="text-2xl font-serif font-bold mt-8 mb-4">Informal Segregation</h2>
          <p class="mb-6 leading-relaxed">
            Even in classrooms and libraries, informal segregation persists. Students often self-segregate by gender during lectures. In canteens, it is rare to see mixed groups in equal proportion. In the absence of overt hostility, there is still a quiet sense of who belongs where, and when. A female student once said, half-joking, "We can walk the whole campus. We just have to keep checking the time and who's around." It wasn't a complaint. It was a description of how one learns to move.
          </p>

          <h2 class="text-2xl font-serif font-bold mt-8 mb-4">Student Politics and Violence</h2>
          <p class="mb-6 leading-relaxed">
            Student politics, too, remains complicated. In the 1990s and early 2000s, LU was known for highly aggressive student politics—bricks were thrown, bombs reportedly used, and many parents pulled their daughters out altogether. Today, those levels of violence have subsided, and a new generation of student organisations is raising important questions about equality, representation, and safety. But elections have been suspended for almost two decades. For women, particularly, this has meant fewer platforms to formally voice their concerns. When they do speak—in protests, meetings, or simply on social media—the response is not always welcoming.
          </p>

          <p class="mb-6 leading-relaxed">
            Just this April, the campus saw a series of violent clashes between student groups that left nearly twenty injured, once again raising questions about accountability, safety, and the culture of impunity that some students seem to enjoy. It is in this context that earlier remarks by the Vice Chancellor, made on International Women's Day—where he equated feminism with casteism and declared that "all isms are bad"—land not as harmless abstractions, but as part of a larger pattern of resistance to gender-conscious reform.
          </p>

          <h2 class="text-2xl font-serif font-bold mt-8 mb-4">Signs of Change</h2>
          <p class="mb-6 leading-relaxed">
            That said, the picture is not entirely bleak. Many students, both women and men, have begun to push back—not always through confrontation, but through consistent engagement. Cultural groups, gender collectives, and informal peer networks have created spaces for dialogue. Events like "Spaces," organised by the Gender Sensitization Cell, have tried to bring these conversations out of classrooms and into lawns, canteens, and common areas. The university's decision to initiate policies toward transgender inclusion is also a step, though early.
          </p>

          <p class="mb-6 leading-relaxed">
            Still, inclusion cannot be declared. It must be practiced. A student may attend a gender sensitization workshop, and still hesitate to walk across the boys' hostel lawn at night. Another may know the procedure to file a complaint, and still choose not to, fearing retaliation. Progress does not erase contradiction. It brings it into view.
          </p>

          <h2 class="text-2xl font-serif font-bold mt-8 mb-4">Redefining Space</h2>
          <p class="mb-6 leading-relaxed">
            So, is public space at Lucknow University gendered? Of course it is. But not in a singular way. It is gendered through rules, routines, assumptions, silences. It is gendered when women leave early because they must, or when queer students avoid being seen together in certain corners. It is gendered when safety becomes a reason to curtail rather than enable freedom.
          </p>

          <p class="mb-6 leading-relaxed">
            But it is also being redefined—by students who stay a little longer, speak a little louder, or ask better questions.
          </p>

          <p class="mb-6 leading-relaxed">
            Because the question is not just: "Is this space ours?"
          </p>

          <p class="mb-6 leading-relaxed">
            The question is: "On what terms?"
          </p>
        </div>
      </div>
    `,
    excerpt: "An exploration of gender dynamics and everyday experiences at Lucknow University, examining how spatial arrangements, academic interactions, and institutional policies shape campus life.",
    image: "/Campus.jpeg",
    author: {
      id: "15",
      name: "Captain Jack Sparrow",
      username: "captain-jack-sparrow",
      image: "/Shantam.jpeg"
    },
    category: "university",
    date: "2025-06-10T00:00:00Z",
    readTime: "8",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["gender", "campus life", "education", "social issues"]
  },
  {
    id: "article-2",
    title: "Every word has consequences. Every silence too.- Neutrality in the time of war.",
    slug: "neutrality-in-time-of-war",
    content: `
      <div class="article-content">
        <div class="prose prose-lg max-w-none">
          <p class="mb-6 leading-relaxed">
            When the League of Nations on June 30, 1936, Ethiopian Emperor Haile Selassie delivered the powerful words, "It is us today, tomorrow it will be you." This statement was a warning to the world about the consequences of failing to stand up against aggression, genocide, and oppression because it was not their problem. Privilege is when you think something is not a problem when it's not a problem to you personally.
          </p>

          <h2 class="text-2xl font-serif font-bold mt-8 mb-4">The Lesson of History</h2>
          <p class="mb-6 leading-relaxed">
            The lesson of history is that no one learns from it. The holocaust, the Rwandan Genocide (1994), The Bosnian Genocide (1992-1995) ongoing armed conflicts like the Syrian Civil War (since 2011), the Sudanese Civil War (2023), the Russia-Ukraine war, the Israel-Hamas war tell us Silence—whether out of fear, complicity, indifference, or helplessness—can lead to a range of ethical, political, and humanitarian outcomes.
          </p>

          <h2 class="text-2xl font-serif font-bold mt-8 mb-4">Complicity or Participation</h2>
          <p class="mb-6 leading-relaxed">
            Silence frequently means implicit consent. Individuals or nations are complicit in wartime if they keep silent in the face of atrocities like war crimes, genocide, or oppression. Aggressors encounter fewer challenges and gather steam when dissent is reduced or nonexistent. In conflicts fueled by propaganda, silence can validate the aggressor's story.
          </p>

          <p class="mb-6 leading-relaxed">
            One of the first things to be lost during a war is frequently the truth. False narratives can take center stage when there is silence. If no one reports abuses or speaks out, war criminals may go unpunished.
          </p>

          <h2 class="text-2xl font-serif font-bold mt-8 mb-4">Deliberately Silenced or Preferably Unheard</h2>
          <p class="mb-6 leading-relaxed">
            Companies and universities in many countries cracked down on pro-victim activism. They were silenced and punished. Our silence manifests in several ways:
          </p>

          <ul class="list-disc pl-6 mb-6">
            <li class="mb-2">Lack of strong diplomatic condemnation or pressure</li>
            <li class="mb-2">Failure to impose meaningful sanctions or consequences on aggressors</li>
            <li class="mb-2">Outright failure of global institutions that were built to stop such conflicts</li>
          </ul>

          <p class="mb-6 leading-relaxed">
            The current conflicts all around the world reflect a failure of the United Nations to prevent and punish war crimes, crimes against humanity, and genocide.
          </p>

          <h2 class="text-2xl font-serif font-bold mt-8 mb-4">Conclusion</h2>
          <p class="mb-6 leading-relaxed">
            Silence in the face of war or injustice is often not neutral—it can be a form of complicity. Are we willing to face the judgment of future generations who'd look back and question our silence? Neutrality helps the oppressor, never the oppressed. The history of appeasement and silence shows us: that the bill comes due eventually with interest attached.
          </p>

          <p class="mb-6 leading-relaxed">
            Silence during war isn't neutral—it is a choice that carries weight. The cost of silence is often measured in human suffering.
          </p>
        </div>
      </div>
    `,
    excerpt: "An exploration of the moral implications of silence and neutrality during times of war and conflict, examining historical precedents and contemporary challenges.",
    image: "/Nut.jpeg",
    author: {
      id: "15",
      name: "Trishla",
      username: "trishla",
      image: "/Trishla.jpeg"
    },
    category: "op-ed",
    date: "2025-06-10T00:00:00Z",
    readTime: "10",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["war", "neutrality", "human rights", "international relations"]
  },
  {
    id: "article-3",
    title: "The United Nations: A Flawed Guardian for Peace",
    slug: "united-nations-flawed-guardian",
    content: `
      <div class="article-content">
        <div class="prose prose-lg max-w-none">
          <h2>The Promise of Peace: Origins and Ideals of the United Nations</h2>
          <p>The United Nations is an 80-year-old institution, formed to preserve peace and harmony at the global level. Founded in 1945, in the aftermath of World War II, it brought together 51 nations committed to building a better world.</p>
          <p>Unlike previous forms of world government, the UN was proposed by key leaders as varied as Franklin D. Roosevelt to Winston Churchill and Albert Einstein to Latin American powers.</p>
          <p>However, ever since the formation, we have witnessed disputes escalating into wars and, consequently, the loss of innocent lives. This raises a fundamental question — Why does the UN fail in its core mission of maintaining international peace and security?</p>
          <h2>The Reality of Power: Failures, Corruption, and Global Injustice</h2>
          <p>Across the globe, nations engage in wars—defensive, territorial, or simply rooted in power politics. Viewed through a moral lens, these wars yield only destruction: innocent civilians killed, frontliners buried, while the people who orchestrate these wars remain safe behind their high walls of privilege & power.</p>
          <p>The United Nations has witnessed and, in many cases, contributed to many dramatic failures — the recent ranging from structural power imbalance in the Israel–Palestine conflict, where the UN system has been unable to stop the ongoing genocide against the Gazans, to the failing of United Nations Security Council in creating the framework conditions to facilitate the mediation in the Russia–Ukraine crisis.</p>
          <p>A significant problem of the United Nations lies in the systematic restriction on which it operates. The power which is granted in — "Article 27 (3) of the Charter establishes that all substantive decisions of the Council must be made with "the concurring votes of the permanent members (P5)." The veto power granted to the permanent members hinders the UN Security Council's (UNSC) ability to act, as these nations use veto to block any intervention based on alliances, military deals, or geopolitics.</p>
          <p>This power imbalance is evident in the aforementioned recent issues, with the US vetoing the ceasefire in Gaza and Russia vetoing humanitarian/military aid in Ukraine. The P5 dominance limits developing countries and cripples the UN's ability to work fairly and effectively, making it appear flawed and weak. Beyond structural issues like the misuse of veto power, the UN has also problems with internal accountability and ethical governance, particularly in cases of corruption that have severely sullied its reputation.</p>
          <p>Like any institution, the UN is not "immune." In 1996, under strict sanctions following the First Gulf War, the UN Security Council started the Oil-for-Food program, which allowed Iraq to pay for food and other necessities for its people, with oil. But Saddam Hussein exploited the program, earning some $10.9 billion through illegal oil smuggling and $1.7 billion through kickbacks and surcharges, according to a 2004 CIA investigation. Not only does this highlight the corruption in the structure, but also how the UN can be manipulated to serve ulterior motives. Through the program, the West retained a clean and morally superior perception by providing aid in an issue they created, and at the same time being paid with the oil they desperately wanted.</p>
          <p>According to the UN Independent Inquiry Committee, it was put forward that the wide scale of mismanagement and unethical conduct, done by some UN employees, tainted the program. These failures hurt the vulnerable population, also eroding the "image" of the UN.</p>
          <h2>The Urgent Need for Change</h2>
          <p>Maybe in its early years, the United Nations functioned. But today, in this age of modernity, it is just a group of suits sitting around discussing sensitive issues, like war and hunger, from air-conditioned offices. Nothing gets resolved on the ground. Kids die of hunger, not due to the lack of resources, but due to the lack of empathy and sense of urgency.</p>
          <p>The UN is not proactive but instead reactive. It lacks enforceable powers and is often paralyzed by political stalemate. It may have supranational powers, but it is not very effective when there are great powers involved. When their interests clash, the UN's ability to prevent or resolve a crisis is at best symbolic, defeating the very purpose of its existence.</p>
          <p>To be fair, there have been instances where the UN was instrumental in de-escalating the situation, like in Yemen, Sudan, or in civil wars between regional powers. Its peacekeeping missions in East Timor and Liberia are often cited as successful examples of coordinated international intervention. On a broader scale, UN agencies have made undeniable contributions— like the World Health Organization's role in eradicating smallpox. However, these successes are not enough to overshadow its greatest failure: maintaining peace where intervention was most needed. In regions torn apart by preventable violence, it left mothers weeping over their children, and children orphaned by conflicts that could have been avoided. The cost of inaction, in these cases, has been far too human.</p>
          <p>Therefore, if the question is: Do we still need the UN? The answer is no — not unless it is radically changed. The UN must be less arrogant about its shortcomings, and more willing to change itself into an institution which can respond to the needs of the world today.</p>
        </div>
      </div>
    `,
    excerpt: "A critical analysis of the United Nations' effectiveness in maintaining global peace and security, examining its structural limitations and recent failures.",
    image: "/UN.jpeg",
    author: {
      id: "9",
      name: "Aliya Imam",
      username: "aliya-imam",
      image: "/Aliya.jpeg"
    },
    category: "op-ed",
    date: "2025-06-10T00:00:00Z",
    readTime: "12",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["United Nations", "international relations", "peace", "global governance"]
  },
  {
    id: "100",
    title: "Unpacking the PSLV malfunction: Impacts and the road ahead for ISRO",
    slug: "unpacking-the-pslv-malfunction-impacts-and-the-road-ahead-for-isro",
    excerpt: "A detailed analysis of the PSLV-C61 mission failure and its implications for India's space program.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          May 18, 5:59, in the quiet hours of the early morning, the Indian Space Research Organisation (ISRO) launched one of its trusted rockets — the Polar Satellite Launch Vehicle (PSLV) — from the country's spaceport. This mission, designated PSLV-C61, was intended to place the EOS-09 satellite into a sun-synchronous polar orbit, a path that allows satellites to consistently pass over the same part of the Earth at the same local time each day. Riding in its more powerful XL configuration, the PSLV lifted off with its signature four-stage design, a system perfected over years to shed weight as it climbs higher into space. But just minutes after launch, something went wrong. A malfunction in the rocket's third stage caused the mission to fail, marking a rare setback for one of ISRO's most reliable workhorses.
        </p>

        <section class="article-section">
          <h2 class="section-heading">What is PSLV?</h2>
          
          <p>
            While dealing with the causes of malfunction and analysing its effects on the Indian Space Program and the impedance it would cause to the progress of ISRO, the question that comes to mind is "What is PSLV?"
          </p>
          
          <p>
            The Polar Satellite Launch Vehicle or the PSLV is the third generation launch vehicle of India. It is the first Indian launch vehicle to be equipped with liquid stages. It has been employed to carry satellites to orbit in a lot of missions, including the famous Chandrayaan-1 in 2008 and the Mars orbiter spacecraft in 2013, which are just a few of the many feathers in its cap.
          </p>

          <p>
            Through its consistent use in missions of the ISRO, the PSLV has earned the title of the 'Workhorse of the ISRO' through delivery of various satellites into low earth orbits. It is famous for its unmatched reliability, and has been used to launch satellites into the Geosynchronous and Geostationary orbits.
          </p>

          <p>
            The long string of consecutive successes and multi-satellite launch capability has reinforced the status of PSLV as a reliable, versatile and affordable launcher in the global market.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">What caused the malfunction?</h2>
          
          <p>
            The Indian space research organization (ISRO) had launched the Polar Satellite Launch Vehicle (PSLV) at 5.59 am from Sriharikota Satish Dhawan Space Center, but during the critical third stage, the rocket lost its trajectory midway.
          </p>

          <p>
            To understand the reason behind the anomaly in the third stage – we need to look at how PSLV executes its launch. PSLV is a four staged launcher with four successive propulsion phases. They are:
          </p>

          <ul>
            <li>Stage 1: Solid Reaction Booster – ps1, its purpose is to provide the initial thrust to lift the rocket from the ground, in XL configuration vehicles, there are larger boosters for the greater thrust.</li>
            <li>Stage 2: Liquid Engine-ps2, this stage continues to accelerate the vehicle after the stage 1 separation.</li>
            <li>Stage 3: Solid Rocket Motor, it offers additional propulsion in the thinner atmosphere, just before orbital injection. It is allocated as the High performance stage 3(HPS3)</li>
            <li>Stage 4: Liquid Engine (ps4), it is tasked with precise orbital injection of the satellite payloads.</li>
          </ul>

          <p>
            The 44.5 meter-tall rocket's solid fueled ps1 and liquid fueled ps2 stage operated according to the plan. The issue occurred at 203 seconds into the flight during the ps3 motor phase, when the telemetry indicated a sudden drop in the chamber pressure. This impacted the performance of the fourth stage and subsequently led to failure of the mission.
          </p>

          <p>
            ISRO has constituted, High Level Failure Analysis Committee to review the ps3's manufacturing and the test protocols. Meanwhile the engineers are analysing flight data to determine whether the issue stemmed from propellant flow irregularities, nozzle anomalies, or structural failures. It is suspected that malfunction happened in the flex nozzle control, a critical component that directs precise thrust by adjusting the rocket nozzle's orientation without the use of complex hydraulic actuators. However, nothing is yet confirmed.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The way ahead</h2>
          
          <p>
            While the PSLV-C61 mission did not achieve its intended outcome, it highlights the complexities and inherent risks of space exploration. Over the decades, the PSLV has proven to be a cornerstone of India's space program, delivering major successes such as Chandrayaan-1 and Mangalyaan, and cementing ISRO's reputation as a dependable and cost-effective launch provider. This rare failure does not diminish the launch vehicle's legacy but rather serves as a critical opportunity for reflection and advancement. ISRO's swift formation of a High-Level Failure Analysis Committee and the detailed examination of telemetry data underscore its commitment to transparency, learning, and progress. Such setbacks, while unfortunate, are part and parcel of scientific evolution. Each anomaly brings valuable insights that drive improvements in engineering, safety, and performance. Strengthening the PSLV system through these lessons will only bolster India's capability in the global space arena, ensuring that it remains resilient, innovative, and ever forward-looking.
          </p>
        </section>
      </div>
    `,
    image: "/Pslv failure.jpeg",
    category: "Sci-tech",
    author: [
      {
        id: "2",
        name: "Hetal Kothari",
        username: "hetal-kothari",
        image: "/Hetal.jpeg"
      },
      {
        id: "5",
        name: "Atulit Pandey",
        username: "atulit-pandey",
        image: "/Atlut.jpeg"
      },
      {
        id: "6",
        name: "Prerna Srivastava",
        username: "prerna-srivastava",
        image: "/Perna.jpeg"
      },
      {
        id: "9",
        name: "Aliya Imam",
        username: "aliya-imam",
        image: "/Aliya.jpeg"
      }
    ],
    date: "June 11, 2025",
    readTime: "8 min read",
    views: 1500,
    likes: 120,
    tags: ["ISRO", "PSLV", "Space Technology", "Science"],
    featured: true
  },
  {
    id: "101",
    title: "GUKESH'S WIN AT NORWAY CHESS '25: NAVIGATING INDIA'S CHESS RENAISSANCE",
    slug: "gukesh-win-at-norway-chess-25-navigating-indias-chess-renaissance",
    excerpt: "India's chess prodigy Dommaraju Gukesh makes history by defeating World Champion Magnus Carlsen at Norway Chess 2025.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          The eve of 3rd June, 2025 saw history in making. India's highly proclaimed chess prodigy and defending chess champion, Dommaraju Gukesh beat the World champion Magnus Carlsen at the Norway Chess 2025.
        </p>

        <p>
          This event not only brought pride to the nation, but also marked a well driven and directed focus shift from the very famous Cricket to other forms of sporting competitions, finally opening Indians' eyes to a world where they see games apart from their high school playground sweetheart. This, inter alia triumphs, demarcate an era of renaissance. India, after Vishy Anand, now sees an interest in chess, a rising wave of chess prodigies, Praggnanandha, Arjun Erigaisi, Vidit Gujrathi are just a few names who have been witnessed emerging as the Petrarca of the Indian Chess Renaissance.
        </p>

        <p>
          In this article, we will explore aspects of Indian chess that lead one to gape at the proficiency that Indians are displaying on the global platform. This, readers, is going to be a treat for chess aficionados, so buckle up!
        </p>

        <section class="article-section">
          <h2 class="section-heading">Gukesh's Triumph</h2>
          
          <p>
            The Norway Chess is a flagship closed annual event in the world of chess. When looking at Gukesh's run at the tournament, it is rather a hiccup in the beginning with Gukesh losing against Carlsen in the first game. The turning point came with Gukesh keeping a winning streak, beating Nakamura, Carlsen, Caruana and Erigaisi. He is set to meet Wei Yi in the 9th round(as of 6th June, 2025).
          </p>

          <p>
            Dommaraju Gukesh has been a highly commended chess prodigy becoming the second youngest GrandMaster at the age of 12. Gukesh has clenched wins at competitions like Tata Chess, Norway Chess and the highly coveted Candidates. He beat the then defending world champion Ding Liren in Candidates to become the World Champion at just 18 years of age. Being under Vishy's guidance, Gukesh carries India's flag ahead in chess.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Indians in Chess</h2>
          
          <p>
            As the ball sets rolling, setting the environment, we talk chess! Chess in India has seen revolutions that include but don't limit themselves to Gukesh. When the topic is Indian chess, acknowledgements have to be made, legends have to be addressed and victories have to be remembered.
          </p>

          <p>
            A little history first, modern chess in India began officially with the formation of All India Chess Federation in 1951 but History wasn't created yet, just the first page was opened and the first heading written "INDIA". Chess, although finding its presence even in the 6th century BCE during the reigns of Guptas, staggered to find its place in a newly founded nation that had millions of mouths to feed and a billion problems to fight before it could focus completely on playing. But, when history did start to be written, it left the world awestruck.
          </p>

          <p>
            This history that I am talking about is none but beloved Vishy Anand! Becoming India's Grand Master in 1988 at the age of 19, Anand set the ball rolling for generations of players that was to come. His career was nothing short of legendary, a story that would be narrated alongside that of Sachin Tendulkar, Leander Paes or Sunil Chhetri. This man single handedly taught India to watch and understand chess.
          </p>

          <p>
            Indian chess, which might be perceived by some as a male dominated sport, defies all barriers and proves myths wrong, women walk shoulder-to-shoulder and take the lead in a trajectory similar to that of men. Subbaraman Vijayalaksmi became the country's first Woman International Master and then a Grand Master. India's first Chess Olympiad medal was a bronze in 2014 and the streak of wins has not stopped since. This article can never find itself completed without mentioning our present-day wonder women of chess, Vaishali Rameshbabu, Diya Deshmukh, Tania Sachdeva inter alia, who carried the Indian flag high at a myriad of tournaments. These are the players that carry the Indian flag high, with unwavering confidence and a hunger, of not just winning but dominating, they are the writers of the India chapter in the contemporary world.
          </p>

          <p>
            The combined efforts of authorities and players have strengthened India's position in World Chess, in words of Hikaru Nakamura,
          </p>

          <blockquote>
            "India is basically the new Soviet Union as far as chess goes"
          </blockquote>

          <p>
            This basically signifies the Indian prowess in chess that can be compared to what the Soviets held at a time when they dominated the discipline. As of December 2024, India boasts 85 chess grandmasters, with 13 ranked among the world's top 100 players. The country has over 30,000 rated players actively participating in officially sanctioned tournaments nationwide. This robust participation has solidified India's status as a chess superpower, with its top 10 players achieving an average Elo rating of 2721, ranking second globally.
          </p>

          <p>
            As of May 2025, FIDE rankings include 4 Indians in the top 10 players of the game in the world, which is nothing short of being proud of.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Renaissance Continues</h2>
          
          <p>
            The renaissance continues, each tournament writes a new story, like poetry in making. Each tournament brings a fresh set of challenges, but it is us, Indians, we are built for challenges, conditioned to dominate and taught to bow in respect. With the spotlight shifting and chess gaining attention among the masses, so much so that schools have started teaching the game and coaching academies are sprouting rapidly, it is not very far in future that India will be chess-smart, and many more Praggs and Gukesh will be among us, history is being written, and we, readers, are the eyewitnesses of it.
          </p>
        </section>
      </div>
    `,
    image: "/Chess.jpeg",
    category: "Sports",
    author: {
      id: "5",
      name: "Atulit Pandey",
      username: "atulit-pandey",
      image: "/Atlut.jpeg"
    },
    date: "June 11, 2025",
    readTime: "10 min read",
    views: 2000,
    likes: 180,
    tags: ["Chess", "Gukesh", "Norway Chess", "Sports"],
    featured: true
  },
  {
    id: "102",
    title: "GCC Boom in Pune: A Quiet Revolution Changing the Office Economy in India",
    slug: "gcc-boom-in-pune-a-quiet-revolution-changing-the-office-economy-in-india",
    excerpt: "How Pune is transforming into a major hub for Global Capability Centres, reshaping India's office economy.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          India's office economy is changing in a subtle but significant way, all thanks to a transformation taking place in Pune. The city, formerly mainly recognised for its industrial base and academic heritage, has quickly become a hub for Global Capability Centres (GCCs), luring multinational corporations with its special combination of infrastructure, talent, and operational flexibility.
        </p>

        <section class="article-section">
          <h2 class="section-heading">From Education Hub to Global Operations Nerve Center</h2>
          
          <p>
            More than 350 GCCs call Pune home as of 2025, and between them, they employ close to 270,000 professionals. With this rate of growth, the city is now on par with established IT giants like Hyderabad and Bengaluru. Furthermore, unlike these other hubs which are constantly saturated, Pune has a unique combination of high-quality talent, low operational costs, and best in class living standards which is hard to come by, especially for multinational companies looking to invest for the long-term.
          </p>

          <p>
            What makes Pune's surging development so remarkable is that it does not negatively impact the quality of talent, and instead focuses on scaling efficiently. The preeminence of world-class academic institutions, an emerging startup ecosystem, and a high level of technical skill in the region drives interest in the city for business functions including finance, engineering, analytics, and even digital innovation.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Flexibility at the Forefront</h2>
          
          <p>
            Pune's growing prominence is best exemplified by the city's shifting real estate market. During the first quarter of 2025 alone, GCCs leased more than 1.1 million square feet of office space, which represents a nearly fourfold increase relative to the last year's same period. Co-working and flexible spaces made up almost 43% of this leasing activity, which is a staggering figure.
          </p>

          <p>
            This is yet another sign of a drastic shift in the workspace design strategy undertaken by global firms. The new approach prioritizes flexibility and hybrid work models that can quickly scale up or down, something that Pune's commercial real estate operators have been eager to serve. Such arrangements provide organizations a frictionless way to grow or retreat from physical spaces they occupy in a world that is post-pandemic sensitive to change.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Mid-Market Engine</h2>
          
          <p>
            The major players in business expansion operations now take a back seat to the emerging mid-sized companies and debutants. The past five years saw the establishment of more than 110 mid-market GCCs in Pune which were primarily funded by private equity and specialized in advanced sectors including AI, machine learning, data science, and cybersecurity.
          </p>

          <p>
            The business centers function with minimal organizational layers which enables them to execute projects quickly while staying adaptable to market requirements. Employees at these organizations experience rapid advancement to leadership positions at a significantly higher rate when compared to their peers at larger GCCs. The city of Pune stands out as a fast lane for emerging professionals who aim to engage with state-of-the-art technologies.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Institutional Momentum</h2>
          
          <p>
            The establishment of Pune as a GCC hub results from both active institutional support and corporate investments. TransUnion stands as a prime example because they transformed their India capability center in Pune from a small pilot project with 10 employees to a major operation with 1,200 staff in just two years. Success stories in Pune demonstrate the city's ability to foster both quick expansion and sustainable development.
          </p>

          <p>
            The city hosted the ET GCC Growth Summit 2025 as a platform that united global thought leaders with policymakers and innovators to explore the direction of worldwide business operations. The strategic role of Pune in India's global services narrative gains strength through the confidence shown by these platforms.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">A Look Ahead</h2>
          
          <p>
            The GCC sector of India is predicted to reach $105 billion by 2030 after starting at $64.6 billion in FY24. The number of GCCs will surge past 2,100 facilities while employment will count 2.8 million personnel which positions Pune to acquire a significant portion of this growth.
          </p>

          <p>
            Pune's transformation mirrors the wider change in India's office economy which now prioritizes talent concentration instead of traditional location advantages and strategic operational freedom instead of established facilities. When companies want to discover what lies beyond the expected pathway, Pune emerges as a prime choice through its unassuming power and operational capacity.
          </p>

          <p>
            During the upcoming decade Pune will lead the development of what future GCCs will look like.
          </p>
        </section>
      </div>
    `,
    image: "/Pcc.jpeg",
    category: "National",
    author: {
      id: "7",
      name: "Abhinav Kumar Upadhyay",
      username: "abhinav-upadhyay",
      image: "/Abhinav Kumar Upadhyay .jpeg"
    },
    date: "June 11, 2025",
    readTime: "12 min read",
    views: 1800,
    likes: 150,
    tags: ["Business", "GCC", "Pune", "Economy"],
    featured: true
  },
  {
    id: "covid-19-rise-and-reigns",
    title: "The Rise and Reigns of COVID-19",
    slug: "covid-19-rise-and-reigns",
    category: "International",
    date: "12 JUNE 2025",
    image: "/Covid.jpeg",
    author: authors.find(a => a.username === "hetal-kothari"),
    excerpt: "The rise and reigns of COVID-19 represent one of the most significant global challenges of the 21st century, disrupting societies, economies, and public health systems across the world.",
    content: `
      <h1>The Rise and Reigns of COVID-19</h1>
      
      <p>The rise and reigns of COVID-19 represent one of the most significant global challenges of the 21st century, disrupting societies, economies, and public health systems across the world. Emerging quietly in late 2019, the novel coronavirus, officially named SARS-CoV-2, was first identified in Wuhan, China. Initially, it was linked to a seafood and animal market, where a cluster of pneumonia-like cases baffled health authorities. Within weeks, the virus proved to be highly transmissible and with modern air travel and dense urban populations, it rapidly spread beyond China's borders.</p>

      <h2>New covid-19 variant detected: What we know so far</h2>
      
      <p>The JN.1 variant is a new form of the Omicron variant of COVID-19. Like Omicron, it spreads easily, but the JN.1 variant has an extra mutation in its spike protein. This change might affect how the virus spreads or how it reacts to the immune system. Because of this mutation, scientists are watching JN.1 closely to understand if it spreads more easily or causes different symptoms compared to earlier variants like Omicron.</p>

      <p>JN.1 is a subvariant of the Omicron, evolving from the BA.2.86 variant, also known as Pirola. It was first identified in Luxembourg in 2023 and since has gradually spread to other parts of the world, and now India. JN.1 is said to be more transmissible than previous variants due to specific mutations in its spike protein, which helps it bind to humans easily. JN.1 has more than 35 mutations in its spike protein, including several in the receptor-binding domain which directly interacts with the ACE2 receptors on human cells. However, as of now, there is no data to prove that it causes any serious illness.</p>

      <p>The current strain of the COVID-19 virus as reported by INSACOG data, are protein mutations of the JN.1 virus. Till date, 58 genome sequences of NB.1.8.1 have been submitted to the global COVID-19 database, originating from 22 different countries. The NF.7 variant was observed largely in southern parts of India and both NB.1.8.1 and NF.7 have been reported largely from urban metro cities. JN.1 spreads more easily than earlier Omicron sub lineages such as XBB.1.5. JN.1 can partially escape immunity induced by previous infections and vaccines, although not completely.</p>

      <p>Subvariants LF.7 and NB.1.5, seen to be behind recent surges in Covid infections, are descendants of JN.1, meaning they share its core mutational backbone but have acquired additional changes. The current seasonal surge is caused by further sub-variants of JN.1</p>

      <h2>Unusual Symptoms? They could be linked to the NB.1.8.1 strain.</h2>

      <p>Individuals infected with the NB.1.8.1 variant have reported a range of symptoms, some of which differ from those associated with earlier strains of the virus Common early symptoms include:</p>

      <ul>
        <li>Persistent low-grade hyperthermia: Rather than a high fever, many individuals experience a persistent low-grade increase in body temperature (between 37.6°C and 38.1°C) without the typical sweating or rapid breathing associated with fever. This condition, known as hyperthermia, may indicate an issue with the body's thermoregulation mechanisms.</li>
        <li>Upper respiratory symptoms</li>
        <li>Gastrointestinal distress</li>
        <li>Neurological symptoms</li>
        <li>Fatigue</li>
        <li>Sleep disturbances and anxiety</li>
      </ul>

      <h2>Conclusive insights from latest scientific research</h2>

      <p>Dr. T. Jacob John, a virologist previously associated with Christian Medical College Vellore, has told TOI that there is no cause for concern yet. He, however, emphasized that preventive measures still hold the key in controlling the spread of the virus.</p>

      <p>However, Dr. Rajiv Bahl, Director General of the Indian Council of Medical Research (ICMR), said there was no cause for concern. "As of now, the severity is generally low. There's nothing to worry about. We should be vigilant, and we should always be prepared," the ICMR DG asserted. Dr. Bahl noted an increase in cases—initially in the south, then the west, and now northern India.</p>

      <p>All cases are being monitored through the Integrated Disease Surveillance Program (IDSP), he added. The ICMR DG said that when cases increase, three factors are considered. "It depends on how transmissible the virus is—how quickly cases rise. Previously, we saw cases double in two days, but currently, the rise is slower. "Secondly, we assess whether new variants are evading prior immunity—whether natural or vaccine-induced and the third factor is the percentage of severe cases among all COVID instances. But there's nothing to worry about at this moment" Dr. Bahl said.</p>
    `,
    featured: true,
    views: 1250,
    likes: 89,
    comments: []
  },
  {
    id: "beti-bachao-khandwa-rape-case",
    title: "Beti Bachao, But From Whom: Exploring the Khandwa Rape Case",
    slug: "beti-bachao-khandwa-rape-case",
    category: "National",
    date: "12 JUNE 2025",
    image: "/Beti.jpeg",
    author: authors.find(a => a.username === "aliya-imam"),
    excerpt: "A chilling reminder of the brutal reality women face in India, as we examine the Khandwa rape case and the systemic failures that continue to endanger women's lives.",
    content: `
      <h1>Beti Bachao, But From Whom: Exploring the Khandwa Rape Case</h1>

      <h2>A Woman's Right to Live: Another Brutal Reminder</h2>

      <p>As we struggle for equal pay and argue about the need for feminism in today's time, somewhere in India, a woman is struggling for something much more fundamental — the right to live.</p>

      <p>In Madhya Pradesh's Khandwa, a 45-year-old mother of two was gang-raped by two men she knew, with such brutality that her intestines were forced out of her body. This chilling incident took place on May 23, when the victim went to the house of the accused after attending a wedding. They were later joined by another accused.</p>

      <p>The next morning, the accused's mother discovered the victim in a severely injured state. The victim later told her family that she had been sexually assaulted. According to an exclusive report by India Today TV (May 26, 2025), the postmortem revealed that the woman was brutally assaulted and died due to excessive bleeding.</p>

      <p>Dr. Seema Sutay, head of the postmortem investigation and a forensic expert, confirmed it was a case of evisceration, a medical term for the forceful removal of internal organs. The woman's 176 centimetres of intestine had come out of her body. Such extensive medical trauma led to hypovolemic shock, a condition involving extreme loss of blood or fluids, ultimately resulting in her tragic death.</p>

      <p>Both accused have been booked on charges of gang rape and murder under Sections 103(1), 66, and 70(1) of the Bharatiya Nyaya Sanhita.</p>

      <p>This offense is reminiscent of the 2012 Nirbhaya gang rape that shook the nation to its very foundations. Just like Nirbhaya, and just like the RG Kar Medical College doctor, this woman's story is representative of a sad truth and all the victims who failed to make headlines because their offense was not "gruesome enough" or simply got lost under lack of concern.</p>

      <p>Whenever something horrible occurs, we protest. We grieve. We make the hashtags trend. But nothing ever actually changes.</p>

      <p>Instead of building a safer world, we instruct women to narrow their worlds. Don't go out alone. Return home early. Be alert. The responsibility is transferred from the predator to the victim.</p>

      <p>We remember Nirbhaya. Her death shook the country. Laws were promised, reforms were debated. But what happened?</p>

      <p>The question must be asked to the state and central governments: Why are effective prevention measures still lacking? For how long will we remain behind slogans like "Beti Bachao, Beti Padhao" when our mothers, sisters, and daughters are unsafe?</p>

      <p>We worship goddesses but do not rescue living women. Ironic, no?There is no respect for law in the hearts of these predators. Until justice is swift and sure and society stops blaming victims, this cycle will continue.</p>

      <h2>Whose Stories Get Told?</h2>

      <p>Journalism ought to be the beacon of truth, the advocate for the voiceless. But it has become the right arm of the politicians and the powerful instead.</p>

      <p>So many cases never reach daylight just because the victim is from a far-off village, or there is some political link that cannot be touched. When the media decides what to project based on influence, money, or TRPs, justice is the first to suffer.</p>

      <p>Like doctors, journalists should also uphold ethical standards, to deliver news with honesty, integrity, and moral responsibility. Sadly, these values seem to be missing in many journalists today. There should be a sense of accountability, that the news they report should serve the people, especially the vulnerable and the voiceless.</p>

      <p>Take the recent Khandwa case, which occurred on a Saturday. Very few mainstream news channels covered it. Why? Because the victim was a tribal woman? Who decides which cases are "worthy" of coverage and which aren't?</p>

      <h2>Rape Culture: A Failure We All Share</h2>

      <p>As journalism sinks to new lows, our judicial system remains stagnant or worse, regresses with each passing year.</p>

      <p>Take the R.G. Kar Medical College case, where the court ruled the incident as "not rarest of rare." What defines a rape case as "rarest of rare"? Is it only when the victim dies? Or when her internal organs are forced out of her body? Since when have we started measuring the scale of brutality to define justice?</p>

      <p>Rape is a crime that can never be justified, not by clothes, time of day, or presence. These are rationalizations, not explanations, born out of a sick mind. Rape isn't about desire; it's about power, control, and deep-rooted contempt for women. It is a by-product of patriarchy, a culture that teaches young boys that a woman should be controlled, owned, silenced.</p>

      <p>The guilt isn't just the rapist's. It lies in all of us. Families avoiding "awkward talk" with their teenage kids, schools ignoring sex education, societies treating the female body as taboo or alien. We teach boys dominance, not respect. Girls, silence instead of strength. Until families stop shaming these conversations and society stops blaming victims, the cycle will continue.</p>

      <p>Rape isn't an isolated crime. It reflects a collective failure. Only by acknowledging our role and sharing responsibility can true change begin.</p>
    `,
    featured: true,
    views: 980,
    likes: 76,
    comments: []
  },
  {
    id: "motherhoods-hidden-struggle",
    title: "Motherhood's Hidden Struggle: The Emotional Load Women Carry",
    slug: "motherhoods-hidden-struggle",
    category: "Features",
    date: "12 JUNE 2025",
    image: "/Motherhood.jpeg",
    author: authors.find(a => a.username === "prerna-srivastava"),
    excerpt: "Beyond the Instagram filters and smiling portraits lies the complex reality of motherhood - a journey marked by invisible labor, emotional strain, and societal expectations.",
    content: `
      <h1>Motherhood's Hidden Struggle: The Emotional Load Women Carry</h1>

      <p>Society has long romanticized motherhood—draping it in soft filters, poetic captions, and smiling Instagram portraits.</p>

      <p>But behind those curated moments lies a far more complex reality. Motherhood isn't always about joy and gentle hugs; it often comes with exhaustion, emotional strain, and invisible labor. These struggles, though deeply human, are frequently overlooked or dismissed.</p>

      <p>Becoming a mother is a huge, complicated life transition that can rock every fiber of a person's being. The process even has its own name: "Matrescence".This article aims to move beyond the idealized image of motherhood and confront the truths we often ignore—because acknowledging the reality is the first step toward meaningful support and change.</p>

      <h2>What Is Emotional Load?</h2>

      <p>Ever notice how it's usually the mother who knows where the socks are, what time the math homework is due, or that it's time to feed the cat?</p>

      <p>That's the emotional load—the unseen, unpaid, and often unthanked labor of remembering, planning, worrying, managing, and caring.</p>

      <p>It's the thought work that goes unnoticed: remembering your child likes their sandwich without the crust, sensing your partner's stress before they say it. It's being the family's unofficial therapist, coordinator, and crisis manager all at once.</p>

      <p>It's not just about doing things. It's about thinking about them all the time. And in most households, it quietly falls on women.</p>

      <p>Because even today, somewhere deep in our cultural wiring, there's a default setting: "Mom will handle it"</p>

      <h2>Statistics Revealing The Maternal Challenges</h2>

      <p>A survey by Mylo of 2,000 Indian mothers found that:</p>
      <ul>
        <li>32% struggled to balance work and home</li>
        <li>19% were sleep-deprived</li>
        <li>12% said they never got a real break</li>
      </ul>

      <p>A study in the Indian Journal of Psychological Science found that Indian mothers often experience emotional exhaustion due to feeling they're falling short of unrealistic expectations.</p>

      <p>According to the World Health Organization, 22% of new mothers in India suffer from postpartum depression.</p>

      <p>And in another study, 63% of working mothers reported moderate to severe stress—much of it caused by shift duties, lack of support, and difficulty breastfeeding exclusively.</p>

      <p>These are not just numbers, these are the stories of real women. Smiling through pain. Holding families together with shaky hands.</p>

      <h2>How Did We Get Here?</h2>

      <p>Much of it goes back to conditioning. From girlhood, we're taught that to be a woman is to give, to nurture, to sacrifice. That being a good mother means being tireless, cheerful, and endlessly available.</p>

      <p>So, when a woman feels overwhelmed or tired—or even resentful—she doesn't blame the system. She blames herself.</p>

      <p>And the world doesn't help.</p>

      <p>Media and cultural narratives further cement this idealization. Movies and TV shows glorify the mother who "does it all" without once pausing to ask at what cost?</p>

      <p>We idolize the mother who puts everyone first, but forget to ask who puts her first.</p>

      <p>And then there's the guilt—especially for working mothers. Guilt for leaving your child home for work. Guilt for answering emails during playtime. Guilt for enjoying time away.</p>

      <p>This guilt isn't natural—it's manufactured. It's passed down in whispers, loaded glances, and unspoken expectations.</p>

      <p>All of this is rooted in patriarchy, where parenting is seen as a mother's job, and a father's role is often reduced to earning and "babysitting." But children don't just need money—they need presence, love, patience.</p>

      <p>Parenting shouldn't be a solo act. It should be a duet.</p>

      <h2>Why It's Hard To Talk About?</h2>

      <p>It's the fear of judgment.</p>

      <p>Say you're exhausted and someone might call you ungrateful. Admit you're overwhelmed and someone might say you're not trying hard enough.</p>

      <p>Even other women, raised on the same scripts, might offer sympathy laced with judgement.</p>

      <p>There's the quiet weight of guilt, too—the kind passed down through generations. Women have been taught to chase the "Supermom" ideal: always smiling, never stumbling. So when motherhood feels heavy (as it often does), they don't question the pressure—they question themselves. They see their struggle not as a sign of how hard the role is, but as a personal failing. And that hurts, deeply.</p>

      <p>But the truth is, this silence isn't a sign of strength—it's a survival mechanism shaped by a culture that romanticizes motherhood while offering little real support. Until we begin to normalize these conversations, mothers will continue to suffer quietly, believing that they are alone in a burden that is, in fact, collective.</p>

      <h2>So, How Do We Begin to Shift Things?</h2>

      <p>Start with awareness. Name the invisible work. Say it out loud, from remembering everyone's favourite dishes to trying to keep everyone's emotional world afloat is work and it deserves our acknowledgment.</p>

      <p>Rethink participation. When fathers step in, it's often called "helping." But it's not helping—it's parenting. Let's stop calling basic responsibilities "help".</p>

      <p>Make space for honesty. Let mothers speak freely—without judgment. Let them say, bluntly and without apology, that they're burnt out, exhausted, or simply in need of a break. Vulnerability isn't weakness—it's human.</p>

      <p>Reframe the narrative. Let's tell stories that show real motherhood—magical, brave and messy and exhausting. Lets normalize equal parenting, mental health break, and mothers who say "I need some me time now".</p>

      <p>Our mothers are the epitome of unseen strength and silent resilience. The next time you see her juggling a thousand responsibilities, perhaps offer her a helping hand—without waiting to be asked. And when she forgets to add salt to your pasta, instead of showing disappointment, maybe just smile and ask her to pass the salt.</p>

      <p>It's in these small moments of empathy that we begin to repay a fraction of the love she gives us every day.</p>

      <p>Let's stop measuring our mothers by perfection and start recognizing them with compassion.</p>
    `,
    featured: true,
    views: 1560,
    likes: 120,
    comments: []
  }
];

// Admin users
export const adminUsers: AdminUser[] = [
  {
    username: "admin",
    password: "admin123",
    role: "admin",
  },
];

// Helper function to filter articles by category
export const getArticlesByCategory = (categorySlug: string): Article[] => {
  return articles.filter(
    (article) => article.category.toLowerCase().replace(' ', '-') === categorySlug
  );
};

// Helper function to get articles by author
export const getArticlesByAuthor = (authorUsername: string): Article[] => {
  return articles.filter(
    (article) => article.author.username === authorUsername
  );
};

// Helper function to get author by username
export const getAuthorByUsername = (username: string): Author | undefined => {
  return authors.find((author) => author.username === username);
};

// Helper function to get article by slug
export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.slug === slug);
};

// Helper function to get category by slug
export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((category) => category.slug === slug);
};

// Helper function to get featured articles
export const getFeaturedArticles = (): Article[] => {
  return articles.filter((article) => article.featured);
};

// Helper function to get latest articles
export const getLatestArticles = (limit: number = 6): Article[] => {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

// Helper function to get top articles by views
export const getTopArticles = (limit: number = 4): Article[] => {
  return [...articles]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, limit);
};

// Helper function to get best author
export const getBestAuthor = (): Author => {
  return authors[0]; // For demo, return founder as best author
};

export const getHeroArticle = (): Article | undefined => {
  return articles.find(article => article.hero === true);
};

