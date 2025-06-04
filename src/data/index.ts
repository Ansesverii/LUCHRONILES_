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
    course: "B.A.",
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
    bio: "Hi! I'm Atulit Pandey, a first year Geology major and a hardcore enthusiast of Geopolitics, debates, brainstorming and rocks, of course.",
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
    bio: "I'm Prerna Srivastava — a first-year B.Sc student, an unapologetic question-asker, a passionate debater, and a story collector in Lu.LitCore.",
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
    course: "B.A.",
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
];

// Sample Articles
export const articles: Article[] = [
  {
    id: "0",
    title: "Introducing LU Chronicles: India's First University News Daily",
    slug: "introducing-lu-chronicles",
    excerpt: "Every institution needs a voice. This is ours. Today marks a historic moment for Lucknow University as we proudly announce the launch of LU Chronicles — India's first university news daily.",
    content: `<p>Every institution needs a voice. This is ours.</p>
    <p>Today marks a historic moment for Lucknow University as we proudly announce the launch of LU Chronicles — India's first university news daily and the official student publication of our esteemed institution. This groundbreaking initiative represents more than just another campus newsletter; it embodies the spirit of student journalism and academic excellence that Lucknow University has championed for decades.</p>
    <h2>A New Era of Student Journalism</h2>
    <p>LU Chronicles stands as a testament to the power of student-driven media in the digital age. Built by students, run by students, and written for the times we live in, this daily publication fills a crucial gap in university media landscape across India. While universities worldwide have embraced student journalism as an integral part of campus life, LU Chronicles pioneers this movement in the Indian higher education system.</p>
    <p>Our mission extends beyond traditional campus reporting. We aim to create a comprehensive platform that captures the pulse of university life, academic achievements, research breakthroughs, cultural events, and the diverse voices that make Lucknow University a vibrant center of learning.</p>
    <h2>What Makes LU Chronicles Special</h2>
    <ul>
      <li><strong>Student-Centric Approach:</strong> Every article, every headline, and every editorial decision stems from the student perspective. Our editorial team comprises dedicated students from various faculties who understand the unique challenges, aspirations, and interests of their peers.</li>
      <li><strong>Daily Publication:</strong> Unlike weekly or monthly university publications, LU Chronicles operates on a daily schedule, ensuring that news remains fresh, relevant, and timely. This frequency allows us to cover breaking news, urgent announcements, and time-sensitive campus events as they unfold.</li>
      <li><strong>Comprehensive Coverage:</strong> From academic updates and research highlights to sports achievements and cultural celebrations, LU Chronicles serves as a one-stop destination for all university-related news and information.</li>
      <li><strong>Professional Standards:</strong> While student-run, LU Chronicles maintains the highest journalistic standards, including fact-checking, ethical reporting, and balanced coverage of campus issues.</li>
    </ul>
    <h2>Our Content Philosophy</h2>
    <p>LU Chronicles operates on the principle that university life encompasses far more than academics alone. Our coverage includes:</p>
    <ul>
      <li><strong>Academic Excellence:</strong> Highlighting research publications, faculty achievements, and scholarly milestones</li>
      <li><strong>Student Life:</strong> Covering clubs, societies, events, and the rich tapestry of campus experiences</li>
      <li><strong>Innovation Hub:</strong> Showcasing technological advancements, startup initiatives, and entrepreneurial ventures</li>
      <li><strong>Cultural Canvas:</strong> Celebrating the diverse cultural heritage and artistic expressions within our university community</li>
      <li><strong>Sports Arena:</strong> Following our teams, individual achievements, and sporting events</li>
      <li><strong>Alumni Spotlight:</strong> Connecting current students with successful graduates and their inspiring journeys</li>
    </ul>
    <h2>The Team Behind the Vision</h2>
    <p>LU Chronicles is published by the News Division of LU LitCore, bringing together passionate students from journalism, literature, communications, and various other disciplines. This collaborative approach ensures diverse perspectives and comprehensive coverage of university life.</p>
    <p>Our editorial team undergoes rigorous training in digital journalism, media ethics, and content creation, preparing them not just for university reporting but for careers in media and communications. This practical experience serves as an invaluable supplement to traditional classroom learning.</p>
    <h2>Launch Details and Future Vision</h2>
    <p><strong>First Issue Release:</strong> June 7, 2025</p>
    <p>Our inaugural issue will feature exclusive interviews with university leadership, coverage of recent academic achievements, upcoming events, and special features that introduce readers to the LU Chronicles editorial philosophy.</p>
    <p>As we embark on this journey, LU Chronicles aims to become more than just a news source. We envision building a community platform where students can engage with important issues, share their stories, and contribute to meaningful campus discourse.</p>
    <h2>Join the Chronicle Community</h2>
    <p>LU Chronicles thrives on community participation. We encourage students, faculty, and staff to:</p>
    <ul>
      <li>Submit story ideas and tips</li>
      <li>Contribute articles and opinion pieces</li>
      <li>Share photos and multimedia content</li>
      <li>Participate in campus discussions through our platform</li>
    </ul>
    <p>This publication belongs to the entire Lucknow University community, and we are committed to representing all voices fairly and accurately.</p>
    <h2>A Historic Milestone</h2>
    <p>The launch of LU Chronicles represents a significant milestone not just for Lucknow University but for the Indian higher education landscape. As India's first university news daily, we set a precedent that we hope will inspire similar initiatives across universities nationwide.</p>
    <p>Our commitment extends beyond daily news delivery. LU Chronicles serves as a training ground for future journalists, a platform for student expression, and a historical record of our university's ongoing evolution.</p>
    <h2>Looking Forward</h2>
    <p>As we prepare for our first issue on June 7, the entire LU Chronicles team feels the weight of responsibility and the excitement of possibility. We are not just launching a publication; we are establishing a new tradition of student journalism excellence at Lucknow University.</p>
    <p>Every institution needs a voice that authentically represents its community, celebrates its achievements, and thoughtfully examines its challenges. LU Chronicles is that voice for Lucknow University — honest, energetic, and deeply committed to serving our campus community.</p>
    <p>The future of university journalism in India begins here, with LU Chronicles leading the way. We invite you to be part of this historic journey as we write the first chapter of what promises to be an extraordinary story of student media excellence.</p>
    <p>Stay connected with LU Chronicles for daily updates, breaking news, and the stories that matter to our university community.</p>
    <p><em>LU Chronicles is the official college daily of Lucknow University, published by the News Division of LU LitCore. For submissions, story tips, or general inquiries, contact our editorial team through the official university channels.</em></p>`,
    image: "/LULOGO.jpeg",
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
  },
  {
    id: "indus-water-treaty-2025",
    title: "Indus Water Treaty: To Be or Not to Be?",
    slug: "indus-water-treaty-to-be-or-not-to-be",
    excerpt: "With India signalling its intent to rethink the Indus Water Treaty, we explore why it was signed, what it solved, and whether it should exist in today's world of changing power dynamics and water conflicts.",
    content: `<p>"To be or not to be, that is the question" - It's been nearly 400 years, and yet Hamlet's dilemma still holds water—especially in a world that witnesses Power Dynamics change quicker than iodine dissolving starch or our politicians switching their stances.</p>

    <p>With India signalling its intent to rethink the Indus Water Treaty, it becomes a necessity for us to explore—Why was it signed in the first place? What was at stake? What fires did it manage to put out? And, the main question in light in today's world, should it have ever existed?</p>

    <p>Ismail Serageldin is not wrong when he states that "The next world war will be over water". From China's plan to build a dam on Brahmaputra, or the Black Sea Treaty protecting the Black Sea waters for maintaining trade and essential services in Ukraine, water is one thing that is involved directly or indirectly in almost every kinetic and non-kinetic conflict in the world today.</p>

    <h2>The Treaty: What led to its formulation?</h2>

    <p>When talking about the Indus Water Treaty, we talk of treaty between two freshly divorced nations, simple, right? What has intrigued me is that it was signed in 1960, 13 years after the partition happened! Did Pakistan not need the 'Western Rivers' till 1960? What were the diplomatic tensions that led to the partition of the Indus' waters?</p>

    <p>A plain and straight answer, diplomatically, shall be that it takes time to set everything in sight in a newly built nation and 1960 comes in that time frame. Geographically, Indus and the rivers do have a track that is not in one country, which may have led to tensions in the future over the waters' lordship (as if it didn't lead to one).</p>

    <p>Historically, during the partition of British India in 1947 and the formation of the two states, border lines were drawn following what was defined as the "Indus watershed" (Gardner, 2019). The position of the lines meant that India gained control of upstream barrages, which regulated water flow into Pakistan (TBL, 2014). As the boundary between India and Pakistan cut across many of the river's tributaries, an upstream-downstream power structure emerged, which has been the source of tensions between the two countries, particularly in response to dam projects in Indian-administered territory.</p>

    <p>To sort out water-related disputes between the neighbors, the IWT came into light as a landmark treaty dividing water between two countries, defining the usages, limiting over-consumption and demarcating limits not explored earlier. India had in its bag, the Eastern Rivers (Ravi, Beas and Satluj), while Pakistan bagged the Western Rivers (Indus, Jhelum and Chenab) as defined in Article 1, clauses 5 and 6.</p>

    <h2>What did the Treaty solve?</h2>

    <p>Now, brace yourself for some geography—because, Pakistan is a country that depends almost exclusively on Indus and its tributaries for its irrigation and drinking needs.</p>

    <p>According to CSIS, over three-quarters of the country's annually available renewable water resources come from outside its borders, almost entirely from the Indus. Nine in every ten Pakistanis live within the Indus Basin. Major cities such as Karachi and Lahore rely upon the river—or on groundwater aquifers that the Indus helps replenish—for their drinking water. Agriculture claims 94 percent of water withdrawals in Pakistan. The sector constitutes the backbone of the economy, representing 22.9 percent of GDP, accounting for 24.4 percent of exports, providing livelihoods for two-thirds of the rural population, and employing 37.4 percent of the total labor force. The Indus system waters more than 90 percent of the nation's crops. Similarly, Pakistan generates one-fifth of its electricity from hydropower. Every one of the country's 21 hydroelectric plants is located in the Indus Basin.</p>

    <p>Thanks to the treaty, Pakistan's literal lifeline didn't flat-out as could have happened if the waters were not regulated, considering the fact that India did have sovereign control over the upstream areas of the rivers and could easily block the flow of the water into Pakistan, or could use it up, dam it, or divert the water into canals, leading to a literal drought and scarcity of water in the neighbor's farms.</p>

    <h2>Can India block Indus waters?</h2>

    <p>The treaty isn't just ceremonial, and does prevent both the sides from constructing and setting up such features that obstruct the flow and amount of water going into the other territory. Practically speaking, India, at the moment does not possess adequate infrastructure to block the Indus water completely, and it would require years' time to do so as the sources suggest. From where I think, on a personal note, India is at a point where it's getting Chinese-equivalent business opportunities, hence, would not engage in any such stunts which would harm the business as well as lead to diplomatic isolation.</p>

    <p>With the treaty being in abeyance, the final verdict still stays heavily fogged, as to what can happen and what will happen.</p>

    <h2>The Ultimate Question: Should the treaty exist at all?</h2>

    <p>With complete control over the origins and upstreams of the rivers, India could have shut off the taps and left Pakistan parched—its fields cracked, its cities dry, its diplomacy desperate. And yet, it didn't. Not in 1960, and not even now—despite decades of provocations, violations, and the kind of diplomatic needlework that makes even seasoned politicians wince. When one side funds cross-border terrorism more enthusiastically than some governments fund education (pun very much intended), the impulse to retaliate by damming the flow is understandable. But India, for all its justified grievances, does not confuse citizens with regimes, or vengeance with justice. Diplomacy, dialogue, and the dignity of human life have always been part of the Indian playbook—whether or not the other side plays fair.</p>

    <p>Yes, the Treaty feels outdated. Yes, it was born in a world that no longer exists. But scrapping it altogether? That's not policy—it's performance. And in a world where water is fast becoming the currency of control, diplomacy is still the stronger current.</p>

    <p>But, should it exist at all? Maybe not in its original shape, maybe in a form, that is deemed fitter to the world now, maybe in a structure that fits the relations between the two nations and with provisions that it stays fair no matter what.</p>

    <p>The answer still stays fogged and brings us to our original question—<em>"To be or not to be?"</em>. The answer may never be clear to us, the question may always stand like the treaty, with all its cracks and crevices. The fact that the question is still in its place, in a world of retaliatory responses, is probably what makes the Indus Water Treaty a tragedy, a triumph—or simply, but not so simply, the lifeline of two nations.</p>`,
    image: "/image/indus-water-treaty.jpg",
    category: "International",
    author: {
      id: "5",
      name: "Atulit Pandey",
      username: "atulit-pandey",
      image: "/Atlut.jpeg"
    },
    date: "June 8, 2025",
    views: 0,
    featured: true
  },
  {
    id: "trp-over-truth-2025",
    title: "TRP Over Truth: Fall of Indian Journalism in Times of Crisis",
    slug: "trp-over-truth-fall-of-indian-journalism",
    excerpt: "The 2020 TRP fraud revealed a scary reality: just Rs 400 a month could determine the fate of thousands of crores in advertising revenue. An examination of how rating-driven journalism undermines public interest during critical moments.",
    content: `<p>The 2020 TRP fraud made a scary reality known: all Rs 400 a month was required to determine the fate of budgetary distribution of thousands of crores of rupees, and only 10 families' bribe money was necessary for cheaters to tamper with English news channel ratings. The tampering not only skewed advertisement revenue—it actually changed fundamentally what Indians perceived as valid news.</p>
   
    <h2>The Crisis Coverage Issue</h2>
   
    <p>Current crises reveal how TRP-based journalism disappoints public interest. In the May 2023 violence in Manipur that claimed more than 250 lives and displaced many thousands, national media reporting tended to simplify multifaceted ethnic tensions into melodramas for late-night debates. Likewise, the 2024 NEET paper leak that involved 2.3 million students had plenty of studio talk but sparse investigative journalism into systemic exam failure.</p>
   
    <p>Nonetheless, audience preference data indicates complexity. According to a 2023 Reuters Institute survey, although 69% of Indians are concerned about misinformation, news consumption habits still gravitate towards sensational content, resulting in a demand-supply paradox that media houses are unable to disentangle.</p>
   
    <h2>The Economic Reality</h2>
   
    <p>They contend that TRP-governed content is an expression of authentic audience tastes, rather than media manipulation. Republic TV's Arnab Goswami, for example, holds high-decibel journalism up as defending democracy by keeping elites accountable. Such a view implies elite disconnection from popular news forms and mass preferences.</p>
   
    <p>The financial pressures are real. Media organizations are under strict financial constraints with research wings either unable to hold on to trained staff because of higher offers in corporate houses. Six years were needed to build a research wing at the Hindustan Times, the executive editor said, and the staff of key personnel continuously walked out to take better-paying jobs.</p>
   
    <p>India's open government portal contains close to 10,000 resources and 240 visualizations but is mostly overlooked by the mainstream media. Rather than using these resources for evidence-based journalism, newsrooms opt for opinionated content that involves little investment but creates maximum reach.</p>
   
    <p>The irony is stark: as global media outlets increasingly turn to data visualization for sophisticated storytelling, Indian media is still stuck in debate-programming mode. It is a lost opportunity, especially considering India's advanced infrastructure for data collection it has inherited from colonial administration systems as well as post-independence planning efforts.</p>
   
    <h2>The State's Dual Role</h2>
   
    <p>Government advertising, an important source of revenue, produces editorial dependencies that undermine independence. When good coverage is attached to financial survival, public-interest journalism becomes economically unsustainable. This generates what economists refer to as a "scarcity economy" in which ethical journalism does not have sufficient resources to compete with sensationalized material.</p>
   
    <p>But the state also offers unparalleled access to data through Right to Information laws and e-governance projects. The problem is newsrooms without the technical wherewithal to make best use of the same.</p>
   
    <h2>Digital Disruption: Promise and Peril</h2>
   
    <p>Online platforms provide solutions with subscription models and targeted audience capture. Titles such as The Ken and The Wire show that good journalism has alternative revenue streams available to it beyond standard advertising. In the same way, data journalism ventures such as IndiaSpend also show that evidence-based reporting has captive audiences.</p>
   
    <p>But digital platforms also exacerbate the TRP problem with algorithmic content promotion that is driven by engagement rather than accuracy. Social media metrics now drive editorial decisions as much as television ratings used to.</p>
   
    <h2>Toward Sustainable Solutions</h2>
   
    <p>The way ahead will demand systemic changes instead of piece-by-piece reforms:</p>
   
    <p><strong>Revenue Diversification:</strong> News organizations need to build subscription models, educational collaborations, and reader-funded journalism to lower the reliance on advertising.</p>
   
    <p><strong>Training:</strong> Newsrooms require specialized data journalism and digital verification training. As the Asian College of Journalism shows, young reporters can be trained in both technical and analytical abilities required for contemporary reporting.</p>
   
    <p><strong>Regulatory Balance:</strong> Unrestricted government advertisement allotment with no editorial riders, along with enhanced penalties for intentional misinformation in times of crisis.</p>
   
    <p><strong>Joint Models:</strong> Joint research facilities between media establishments to render investigative journalism financially feasible.</p>
   
    <p>The crisis in journalism reflects broader democratic challenges. Citizens need accurate information during crises, but market forces often prioritize entertainment over education. This tension isn't unique to India—global media faces similar pressures as attention economies reshape information consumption.</p>
   
    <p>Quality journalism continues in spite of these limitations. The Hindu's analysis of election data, Scroll's investigative journalism, and local media holding strong to ethical standards show that alternative models are still possible. These offer the hope that the decision between commercial success and editorial integrity is not zero-sum.</p>
   
    <p>The debate is not whether sensational journalism can or should exist—market forces guarantee it will. Instead, the challenge lies in making room for other journalism models catering to other democratic roles. Some can excel at entertainment-oriented news for the mass audience, while others try out deep analysis for serious citizens.</p>
   
    <h2>Conclusion</h2>
   
    <p>The TRP-led evolution of Indian journalism is also representative of broader market forces versus democratic demands. Sensational material gets short-term attention, but real democracy demands institutions that value accuracy over audience, context over controversy.</p>
   
    <p>The answer is not to eradicate commercial journalism but to promote ecosystem diversity where various models can coexist. This needs deliberate decisions by media owners, regulatory encouragement of editorial autonomy, and citizen investment in high-quality journalism through subscriptions and participation.</p>
   
    <p>The collapse of crisis journalism is not inevitable—it is a decision that can still be undone through institutional reform and collective action.</p>`,
    image: "/image/trp-journalism.jpg",
    category: "Op-ed",
    author: {
      id: "7",
      name: "Abhinav Kumar Upadhyay",
      username: "abhinav-upadhyay",
      image: "/Abhinav Kumar Upadhyay .jpeg"
    },
    date: "June 4, 2025",
    views: 0,
    featured: true
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
