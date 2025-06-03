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
    id: "latest",
    title: "The Geopolitics of India vs Pakistan: How Two Nations Shape Global Power",
    slug: "india-pakistan-geopolitics-global-power",
    excerpt: "An in-depth analysis of how India and Pakistan's geopolitical dynamics have evolved from 1947 to 2025, shaping not just South Asian politics but global power equations.",
    content: `<p>In May 2025, we all saw how two nuclear nations came to the threshold of full-fledged war. While the world was too focused on Military power, we forgot to recognize the power that not only makes countries stand in global politics but also shapes world dynamics.</p>
    <p>The power this article will explain is the geopolitics of TWO NUCLEAR NATIONS which are indeed INDIA AND PAKISTAN.</p>
    <p>This article will not only go through the current geopolitics but also answer some crucial questions like: How today's geopolitics of both nations is rooted in its past and how domestic politics influenced it. Not only that we will get to know why countries like the US which had good relations with Pakistan now see INDIA as its alternative in the South Asian continent, where do INDIA AND PAKISTAN stand in world politics today?</p>
    <h2>INDIA's BACKGROUND: From 1947's NAM to 2025's Multi-alignment</h2>
    <p>First, to understand this, we need to understand the past of India's foreign policies and how it has evolved.</p>
    <p>While the countries had to choose sides in the dynamics of Cold War politics, India decided to take a path that felt like a gambling game where a country like India which has just been partitioned, has a large refugee problem, where the nation is not even fully built as some part are not integrated yet and the stagnant economy Britishers left with a mark of deep backward industries.</p>
    <p>Well well, every nation has to choose a side otherwise how will it ask for help?</p>
    <h3>1947 TO 1970s:</h3>
    <p>Though INDIA decided to choose a path of NON-ALIGNMENT which later turned out to be NAM policy under our first Prime Minister and also our longest-serving External Affairs Minister throughout his 17-year premiership, Jawaharlal Nehru. NAM [Nonadlignment Movement] meant that India would not choose any sides, neither the USSR nor the US but have its own autonomy or independence. Countries that chose this path were called third world and many others misunderstood what this meant. While some understood it as isolation in world politics, in reality it was like taking benefit from both while not involving one side of politics. This made INDIA lead in third-world politics.</p>
    <p>Though INDIA was in support of peace Pakistan took a step to have war in Kashmir where the 1947-48 war took place which started India's relation with Pakistan as bitter as could be! Though India and Pakistan took their path, the clashes kept on happening as we see in current politics too.</p>
    <p>However, the same thing was not with China!</p>
    <p>During this era, many new nations were emerging and the decolonization era was going on. China was one of the emerging nations. During this time India chose a path of friendship with China as India was the first noncommunist nation that recognized China's existence. India and China had a pancheel agreement and while India thought it would neighbor with the peaceful agreement, China had other plans. There was a slogan HINDI-CHINNI BHAI BHAI which showed the friendship between these two nations at the time. However, during this period China invaded Tibet which made it suspicious for INDIA. India gave asylum to DALAI LAMA which further strained both country's relations. Both countries started to have distrust and China attacked INDAI in 1962, next it the Sino-Indian war of that time. This resulted in the Distrust between two nations. After 1962, India realized that just following a peaceful foreign policy wasn't enough - the country also needed to build strong defense capabilities and be ready to face any threats or challenges from other nations.</p>
    <h3>1970s TO 1990s:</h3>
    <p>Through this time Nehru's policies were taking place by a new shift toward more leaned policies which can be seen during the decades of the 1970s to 1990s, India emerged as not only a leader in peace but also a merging power with a strong position in geopolitics. Its treaty with the USSR and projects like Smiling Buddha made it more powerful in terms of geopolitics. It made it emerge as powerful in every dynamic whether it is military or nuclear power.</p>
    <h3>1990s TO 2000s:</h3>
    <p>However, changes are something that can't be stopped leading INDIA to change its geopolitical dynamics from the 1990s when a massive change took place in Moscow. While INDIA had its NAM policy the USSR's fall forced it to have better relations with us. In addition, India's liberation policies showed it as a country with new doors. There was not only this shift but also the shift we see the US taking. While the US had close relations with Pakistan as we will see in further articles. Pakistan made decisions that made the US have better alternatives in the Asian continent. In addition, the shift of Pakistan to becoming close to China makes it more suspicious for the US. This resulted in a closer relationship between INDIA and the US in the decade of 2000s. This era was marked following the historic India-US nuclear deal, unveiled through a groundbreaking joint statement by President George W. Bush and Prime Minister Manmohan Singh on July 18, 2005, represented a seismic shift in global nuclear diplomacy by welcoming India into the international nuclear framework while acknowledging its responsible civilian nuclear capabilities.</p>
    <h2>INSTABILITY-STABILITY PARADOX:</h2>
    <p>The nuclear power emergence of India, as well as Pakistan in a later period, created a situation of instability stability paradox where the instability-stability paradox between India and Pakistan suggests that while nuclear weapons deter full-scale war (stability), they embolden lower-level conflicts like proxy wars and skirmishes (instability). This dynamic has enabled Pakistan to pursue asymmetric strategies, assuming India will avoid escalation due to the threat of nuclear retaliation.</p>
    <h2>LOOK EAST:</h2>
    <p>This era also showed INDIA having policies of looking east where India understood the power of ASEAN[ Association of Southeast Asian Nations], and took influential participation in regional affairs, adapting to the changing geopolitical landscape of the Indo-Pacific.</p>
    <h2>TRANSFORMATION TO MULTI-ALIGNMENT:</h2>
    <p>In an era of NDA government, India shifted its focus from NAM to a multi-alignment policy where it does not only focus on autonomy in its policy but emphasizes multilateralism and regional cooperation in various forums (e.g., BRICS, G20), and defense collaborations. This made INDIA emerge into a nation that not only sits in the major talks but also shapes it.</p>
    <p>This evolution of its policy came with challenges as we see INDIA CAME CLOSE TO THE US AND WEST WHILE BALANCING WITH OLD ALLIES, Pakistan too made the strategic path to balance in world politics.</p>
    <p>To understand this we need to understand the geopolitics of Pakistan.</p>
    <h2>PAKISTAN'S BACKGROUND: FROM BEEN THE ALLY OF "US" TO NOW ALL WHETHER FRIEND OF "CHINA":</h2>
    <p>During PAKISTAN'S era of independence, Jinnah envisioned a secular Pakistan that would "stand by the United Nations Charter" and seek friendship worldwide. In Pakistan, domestic instability—including military coups, economic crises, and political protests—has fueled an assertive foreign stance aimed at "bleeding India with a thousand cuts" and driven large investments in missile and nuclear forces. Pakistan's instability in its democracy, where it is said Pakistan's PM could not even stay for 5 years, makes it clear how its policies are chosen by military leaders, not by the public.</p>
    <h3>JINNAH'S VISION's SHIFT TO MILITARY VISION INTERNATIONAL POLICY:</h3>
    <p>Due to this in Pakistan, Jinnah's liberal vision quickly gave way to military rule and Islamization, especially under General Zia-ul-Haq in the 1980s. The army and its intelligence services effectively ran foreign policy, often sidelining professional diplomats, and militants increasingly became tools of statecraft.</p>
    <p>This ideological shift shaped both countries' diplomatic approaches. Pakistan's support for jihadist groups, first against Soviet forces in Afghanistan, then against India in Kashmir—was rationalized as fighting India through "hundreds of little wars." This strategy initially brought U.S. arms during the 1980s Afghan resistance against Soviet occupation but later damaged Pakistan's international reputation when some militants turned against Pakistan itself or launched attacks on India.</p>
    <p>While in the duration of The Trump and Biden presidencies brought a harsh reality check to Islamabad: America is no longer a reliable ally. After the U.S. withdrawal from Afghanistan in 2021, U.S.-Pakistan relations deteriorated significantly (with mutual blame over the Taliban's return to power), leaving Pakistan scrambling for alternatives.</p>
    <h2>PAKISTAN'S DIVERSIFICATION:</h2>
    <p>Pakistan's answer? Diversify dramatically.</p>
    <p>It's hardly a coincidence that China is Islamabad's closest ally. Beijing and Islamabad have long worked together to "balance India," as Indian analyst Srikanth Kondapalli bluntly puts it: "By backing Pakistan— with arms and aid—[China] has tried to balance India and regional power equations." In other words, China supports Pakistan largely to counterbalance its own rivalry with India. Scholar Abraham M. Denmark explains China's thinking: a strong Pakistani ally "can help China prevent the emergence of a continental-sized rival" on its border.</p>
    <p>What does this look like in practice? Massive Chinese investment in Pakistan's military and infrastructure, including the China-Pakistan Economic Corridor (CPEC), naval bases, and ballistic missiles—all of which India watches with growing concern. For example, the $46 billion CPEC project—linking China's far western province of Xinjiang to the Pakistani port of Gwadar—is explicitly designed to give China a shorter route to the Arabian Sea. This simultaneously increases Beijing's influence in the region while effectively surrounding India.</p>
    <p>According to The Moscow Times, 2023 saw Pakistan-Russia trade reach a record $1 billion, and even Moscow's deputy premier publicly supported Pakistan's bid to join BRICS (an economic group including Brazil, Russia, India, China, and South Africa). Energy cooperation has become central to this relationship, with Islamabad signing an agreement for a 1,100 km Russia-Pakistan gas pipeline and expressing interest in acquiring Russian S-400 missile defense systems.</p>
    <p>In short, Pakistan has pivoted toward a China-Russia-Gulf axis as American support has faded. Unlike the post-9/11 decade when Islamabad largely followed Washington's lead, today Pakistan is what analyst Siddiqui calls a "wobblier" partner—seeking any ally willing to keep its economy afloat while downplaying its formerly close relationship with the United States.</p>
    <h2>SO WHERE DO INDIA AND PAKISTAN STAND?</h2>
    <p>In summary, India today enjoys support from a broad coalition of major powers (including the U.S., Russia, Western Europe, Japan, Australia, the UAE, and Israel), while Pakistan depends primarily on China and a handful of Islamic allies.</p>
    <p>Foreign Affairs magazine has reported that India's leadership now considers global alignment "the surest foundation" for national security. The bottom line: India rarely stands alone. During the May 2025 crisis, the United States, United Kingdom, France, Germany, the United Arab Emirates, Saudi Arabia, and others all urged restraint while tacitly supporting India's right to self-defense. This stands in stark contrast to Pakistan, whose few remaining allies worked quietly through diplomatic channels with limited public support.</p>`,
    image: "/indiapakistan.jpg",
    author: {
      id: authors.find(a => a.username === "ansesveri-laxmi")?.id || "",
      name: authors.find(a => a.username === "ansesveri-laxmi")?.name || "",
      username: "ansesveri-laxmi",
      image: authors.find(a => a.username === "ansesveri-laxmi")?.image || ""
    },
    category: "international",
    date: "2025-06-03T00:00:00Z",
    views: 0,
    featured: true
  },
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
