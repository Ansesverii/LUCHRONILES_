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
  },
  {
    id: "18",
    name: "Manasvi Srivastava (B.sc)",
    username: "manasvi-srivastava",
    image: "/Manasvi.jpeg",
    bio: "A Banarasi soul with a science brain and a literary heart, I'm Manasvi, currently majoring in Chemistry and Biology but secretly obsessed with books that make me cry, question society, or fall in love with fictional people (again).\n\nAs a member of Bibliocore, I bring my love for romance novels, feminism, Indian mythology, and South Asian stories into the mix — sometimes all in one conversation. I'm also slowly but surely falling headfirst into the world of literature (and loving the chaos of it).\n\nFueled by K-pop especially Seventeen, who I consider my personal motivational speakers—I believe in storytelling that is bold, inclusive, and dripping with heart. Also: equality and equity? Always. Boring writing? Never.",
    email: "manasvi@luchronicles.edu",
    designation: "Writer",
    course: "B.Sc.",
    categories: ["Arts & Culture", "Blogs"],
    articlesCount: 0
  },
  {
    id: "14",
    name: "Manasvi Srivastava",
    username: "manasvi-srivastava",
    image: "/MS.jpeg",
    bio: "Manasvi Srivastava is a passionate writer and researcher with a keen interest in exploring diverse perspectives and uncovering compelling stories. As a dedicated member of LU.Chronicles, I bring my analytical mindset and creative approach to every piece I write.",
    email: "manasvi@luchronicles.edu",
    designation: "Writer",
    course: "B.A.",
    categories: ["Arts & Culture", "Blogs"],
    articlesCount: 1,
  },
  {
    id: "18",
    name: "Tanu Mohan",
    username: "tanu-mohan",
    image: "/ta.jpeg",
    bio: "I'm Tanu Mohan, a curious student of chemistry and zoology with a passion for art, literature, and the quirks of life. When I'm not delving into the world of molecules and species, you can find me lost in a good book, experimenting with paints, or uncovering the fascinating history behind everyday things. I'm not afraid to speak my mind on societal issues, tackling tough topics with curiosity and conviction. Life's intricacies inspire me, and I'm always eager to explore, learn, and spark meaningful conversations.",
    email: "",
    designation: "Writer",
    course: "B.Sc.",
    categories: ["Science", "Arts & Culture", "Blogs"],
    articlesCount: 0
  },
];

// Sample Articles
export const articles: Article[] = [
  {
    id: "read-like-democracy",
    title: "Read Like Your Democracy Depends on It",
    slug: "read-like-your-democracy-depends-on-it",
    excerpt: "In a country where indifference is rewarded, and reposting an infographic counts as activism, picking up a book might just be the most radical thing you can do.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          In a country where indifference is rewarded, and reposting an infographic counts as activism, picking up a book might just be the most radical thing you can do.
        </p>

        <p>
          What we are witnessing is not the death of democracy, It's the theatre of it.The stage is intact - elections held, flags waved, anchors shouting over each other. But the play is different. The characters are flatter. We now have democratic aesthetics without democratic ethics. Because now,apparently, unity looks like uniformity.
        </p>

        <p>
          We've been here before , every era gets its own remix of "bhai-bhai.",  until someone benefits from our family feud. The actors change, the script doesn't. What scares me isn't just the violence - it's that some people have grown disturbingly comfortable with it.
        </p>

        <p>
          People expect that the death of democracy comes with censorship (It does actually), but what's actually more efficient is self-censorship- the quiet moment when a writer thinks, "This won't get published anyway." Or when a student journalist - like me - spends more time editing out names than writing them in, and finally sighs, "Let's not talk about that here."
        </p>

        <p>
          So what do you do in a moment like this - when someone turns the boundary between right and wrong into a skipping rope? You read. Because while conversations are throttled and facts folded to fit the play, libraries still don't ask for your surname.
        </p>

        <p>
          So read - because the story is being rewritten. And if you don't pay attention, you'll forget what the original even said.
        </p>

        <p>
          Read what came before. Read because this has happened before. Read because the past isn't just history - it's a warning.
        </p>

        <section class="article-section">
          <p>
            📘<strong>How Fascism Works – Jason Stanley</strong><br/>
            "No single book is as relevant to the present moment."—Claudia Rankine, author of Citizen
          </p>

          <p>
            A philosopher by training and the son of WWII refugees, Jason Stanley doesn't just study fascism -  he's lived it. He shows us that fascism doesn't always knock. Sometimes it just walks right in wearing a sadri and kurta,, smiling for the cameras. In this unnervingly prescient book, Stanley outlines the ten pillars of fascist politics - tactics that turn "us vs them" into law, wrap propaganda in the language of patriotism, and glorify a mythic past, criminalize minorities, attack intellectuals (because books are scarier than bombs), and shout "law and order" until no one remembers what justice looks like. . Drawing from Hungary, Poland, Myanmar, India, and the U.S., he makes one thing brutally clear: a country doesn't need to be fascist to suffer from fascist politics. It starts small-  a mythic past here, a criminalized minority there -  until the rhetoric becomes policy, and the abnormal becomes Tuesday. Think of it as a red flag manual for democracies on autopilot. Required reading for anyone who still believes "it can't happen here."
          </p>

          <p>
            📘<strong>The Anatomy of Hate – Revati Laul</strong><br/>
            What makes a person set fire to another human being? What makes them watch? What makes them  rip out the foetus from within the womb with a sword and kill it , while a 14 yo hiding under a pile of bodies, pretending to be dead, watches?
          </p>

          <p>
            In The Anatomy of Hate, Revati Laul peels back the skin of Gujarat 2002 and not just as your usual litany of political failures and victim testimonies. It's far more unsettling. Laul stares into the abyss and introduces us to three of its citizens: Suresh, a career criminal with a vendetta as personal as it was communal; Dungar, a low-caste man trying to out-Hindu the upper castes that humiliated him; and Pranav, an upper-caste rebel whose riot participation was as casual as shoplifting, until guilt chewed through his spine.
          </p>

          <p>
            What unites these three isn't ideology- it's brokenness.. Laul doesn't give you caricatures or monsters. She gives you men- flawed, frightened, festering men who weren't born evil, but got there with small steps.Because once we write off hate as inhuman, we lose the plot. Because here's the kicker: the mob isn't some anonymous mass of maniacs. It has names. It has mommy issues. It binge-watches the same shows. It holds day jobs and wedding grudges. It's you on the wrong day, with the wrong crowd, and the right amount of powerlessness.
          </p>

          <p>
            The Anatomy of Hate is a psychological autopsy- with Laul performing it in full view. Hate, she warns, is terrifying not because it's alien- but because it's almost disturbingly human.
          </p>

          <p>
            📘<strong>Becoming Minority – Jyotirmaya Tripathy & Sudarsan Padmanabhan</strong><br/>
            What if being the majority wasn't enough? What if you needed to feel like the underdog- just enough to justify dominance, just enough to cry foul every time someone else spoke? In Becoming Minority, Tripathy and Padmanabhan dissect how policies, populist rhetoric, and cultural anxieties are weaponized to manufacture a crisis: the imagined decline of the Hindu upper-caste self.
          </p>

          <p>
            This isn't a book about minorities. It's a book about how the state and society produce minorities- not just through exclusion, but through majoritarian fear. The "minority" here is a political construct, engineered via debates on secularism, nationalism, reservation, gender, and of course, beef.
          </p>

          <p>
            The genius (and horror) lies in how grievance is harvested from decades of privilege. How a dominant group begins to believe it is under siege- because someone else got a scholarship, a film role, or a voice.
          </p>

          <p>
            Tripathy and Padmanabhan trace this sleight of hand across media, policy, and social discourse. It's academic, yes-but dangerously relevant. Because once the most powerful start calling themselves victims, justice itself becomes suspicious.
          </p>

          <p>
            This book asks the real question:
            Who gets to feel like a minority in a country where majorities hold the mic, the mandate, and the mob?
          </p>

          <p>
            So if you're wondering what to do when the noise drowns the truth and neutrality feels like betrayal- start here. Read. Because reading isn't passive. It's defiance in print. It's how you remember what justice sounds like when the slogans get louder and the facts go quiet.
          </p>

          <p>
            Read like your democracy depends on it—because, quite frankly, it does.
          </p>
        </section>
      </div>
    `,
    image: "/bok.jpeg",
    author: {
      id: "1",
      name: "Shumaila Khan",
      username: "shumaila-khan",
      image: "/Shumilaprofile.jpeg"
    },
    category: "Editorial",
    date: "2025-06-19",
    readTime: "10 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Democracy", "Books", "Politics", "Society", "Reading"],
    featured: true,
    isPublished: true
  },
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
  <li>When our editors, writers, or institution ourselves become newsworthy, we shall not look away.</li>
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
          <h2 class="section-heading">INDIA'S BACKGROUND: From 1947's NAM to 2025's Multi-alignment</h2>
          
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
      name: "Trishla Chaudhary",
      username: "trishla-chaudhary",
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
  },
  {
    id: "100",
    title: "Why Is it that Rape Cases Often Remain Cold in India?",
    slug: "why-is-it-that-rape-cases-often-remain-cold-in-india",
    category: "National",
    date: "13 JUNE, 2025",
    image: "/Rape.jpeg",
    excerpt: "A deep dive into the systemic issues that cause rape cases to remain unsolved in India, from delayed reporting to institutional challenges.",
    author: {
      id: "2",
      name: "Hetal Kothari",
      username: "hetal-kothari",
      image: "/Hetal.jpeg"
    },
    content: `
      <h1>Why Is it that Rape Cases Often Remain Cold in India?</h1>
      
      <p>Woman in India usually think that coming forth with their story of rape will lead to fairness and justice. Unfortunately, for a lot of people, it starts a difficult journey that ends without success. Years after her death, her case isn't solved, the evidence is gone, and the case goes cold without a word. No closure. No punishment. The number of stories without conclusions keeps increasing.</p>

      <h2>Should this time-related issue be avoided?</h2>

      <h3>1. The Concern to Speak About Problems</h3>
      <p>Imagine a young girl in a small town has suffered an assault and is then urged by her family or nearby people to stay quiet, thinking about her reputation, and that nobody will believe her. Today, many survivors in India are coping with the same problem. Since many people are afraid of being shamed, blamed, or facing other consequences, very few rape cases see the light of day. Very often, the victims step forward after important evidence has been lost. Even though the lag is explainable, it complicates solving the crime from the beginning.</p>

      <h3>2. Problems with the Police System</h3>
      <p>People who report it will find that the next challenge is facing interrogation at the police station. There are too many times when victims' claims are refused or blatantly ignored. There are instances where officers at rural or understaffed stations persuade victims not to report the case. In some cases, people report error-filled statements or miss their medical checkups and visits to the crime scene.</p>
      <p>Mistakes in such cases cost heavily, not only in due diligence, but also in the results they yield. They can affect the decision and also the fact that whether the case will receive deserved justice or stay open ended, never to see closure.</p>
      <p>Even more, there are not enough police officers in India to provide proper services. Many of them deal with too much responsibility, without proper compensation and proper training. When investigators do not have enough sensitivity and resources, it is very rare for them to carry out fully trauma-informed investigations.</p>

      <h3>3. Stories that are Sealed</h3>
      <p>It is vital to have preserved evidence collected as soon as possible in cases of rape. The country has difficulty providing enough forensic laboratories and forensic specialists. A lot of time, existing rape kits are not collected, or they become contaminated. It usually takes months or even years to process samples of DNA.</p>
      <p>While they are waiting, many survivors choose to give up. Every day that goes by, people forget more, and it becomes tough to find eyewitnesses for a case.</p>

      <h3>4. Justice That May Take A Long Time (Or May Not Happen at all)</h3>
      <p>The process of waiting for a case to be resolved in court can be too much for anyone. There is too much work for India's legal system. From the time they start, trials can last several years before they finish. During this period, victims are commonly required to describe their terrible experiences to people they don't know, sometimes even to their attacker.</p>
      <p>There are cases that people withdraw. It can be easier for those accused, particularly if they are rich, influential, or know powerful people, to reach an agreement "outside the court". In some villages and small towns, leaders move to resolve issues by suggesting families keep them private to not inflict harm to the community's reputation.</p>

      <h3>5. Little Help Received by Survivors</h3>
      <p>It must not go unnoticed that dealing with a court case in India is still a big challenge, even when you have someone to support you. It is almost impossible for those who have suffered rape and come from underprivileged and marginalized areas.</p>
      <p>The quality of legal aid varies from one area to another. Usually, couples only go to counseling if there are serious problems. There is hardly any security from threats. Many who go through sexual assault are made to feel guilty by their families and are threatened by the person who assaulted them. They feel lonely and apart from everybody when they are left without the support of someone standing next to them.</p>
      <p>Often, when the system does not support them, they become tired and eventually stop trying, but only because they have no other choice.</p>

      <h3>6. Government actions that make laws and policies sound good.</h3>
      <p>India has declared its intentions to make important changes. Once the Nirbhaya case happened in 2012, extra laws were put in place and fast-track courts and tougher sentences were created. Paper rules only work if the ones carrying them out have been properly trained and held responsible.</p>
      <p>Fast-track courts do not get enough resources and are overcrowded. Law enforcement agencies have responded to change very slowly and carelessly. We do not only need tougher laws but also better ways to put them into action.</p>

      <h3>7. The true Cost of Not Solving Cold Cases</h3>
      <p>A case of rape being left unsolved in India is bigger than a figure in the record. It ends with someone who has no clues about the danger. The family is left bereaved in silence. Every time a case goes cold, it is because some chances were missed: a delayed report, missing evidence, and no attention to a request for help. Until there are reforms in police education, crime investigation systems, delays in courts, and help for survivors, similar situations will keep on taking the front stage. There are plenty of laws in India. The problem is that there is little empathy, sense of urgency, or political effort to assist the most vulnerable.</p>

      <p>Justice delayed is not only justice denied - it is justice destroyed. When legal cases are permitted to remain unresolved, over months and even years, the inconvenience is much more than that. Important evidence gets degraded, memories of the witnesses become hazy, and the victims are forced to live in agonizing suspense, neither able to recover nor to forget. The more the system stalls the more credibility it loses. Justice does not start and stop with a verdict- it is a process that requires promptness, upright character, and execution. Each pause sends the message that certain lives, voices, or truths are less important. Justice should not be stored away, forgotten, or lost in bureaucratic lethargy, but Justice should be alive, on display, and resolute.</p>
    `
  },
  {
    id: "101",
    title: "Emotional Intelligence",
    slug: "emotional-intelligence",
    category: "Features",
    date: "13 JUNE, 2025",
    image: "/Ei.jpeg",
    excerpt: "An exploration of emotional intelligence, its components, and why it matters in our increasingly interconnected world.",
    author: {
      id: "14",
      name: "Trishla Chaudhary",
      username: "trishla-chaudhary",
      image: "/Trishla.jpeg"
    },
    content: `
      <h1>Emotional Intelligence</h1>

      <p>Emotional intelligence (EI or EQ) refers to the ability to identify, comprehend, manage, and influence emotions—both your own and those of others. It plays an important role in interpersonal and intrapersonal relationships. This concept was popularized by Daniel Goleman through his book, Emotional Intelligence: Why It Can Matter More Than IQ which was published on 1995. It is influenced by Sophrosyne, which is a virtue concept in classical Greek philosophy and is an amalgamation of moderation, self-control, and temperance. This ancient virtue was seen as a guide to better psychological well-being.</p>

      <h2>Core components (Daniel Goleman's Model)</h2>
      <p>Daniel Goleman's popular framework identifies five key components:</p>

      <h3>Self-awareness</h3>
      <p>This is the basis of EI. It entails being aware of how your feelings, motives, values, strengths, and shortcomings affect your ideas and behavior.</p>

      <h3>Self-Regulation (or Self-Management)</h3>
      <p>This entails managing your emotions in a healthy way, controlling impulsive feelings and behaviors, and adapting to changing circumstances.</p>

      <h3>Motivation</h3>
      <p>Being motivated by internal forces rather than by outside incentives like fame or money. It all comes down to creating goals, being passionate about what you do, and persevering through difficulties.</p>

      <h3>Empathy (or Social Awareness)</h3>
      <p>This involves recognizing and interpreting nonverbal cues, respecting diverse viewpoints, and developing deeper connections with others.</p>

      <h3>Social Skills (or Relationship Management)</h3>
      <p>The skill to create and sustain positive relationships, convey messages clearly, address disagreements, work together, and motivate others.</p>

      <h2>Why is it important</h2>
      <p>High EQ individuals manage their emotions and stress more effectively and tend to experience greater satisfaction and well-being in their lives. It fosters resilience and empathy which builds trust, respect, and deeper interpersonal connections. They can express themselves clearly and understand others' emotions leading to better relationships and fewer misunderstandings. Leaders with high EI are better at motivating others, resolving conflicts, and creating positive work environments. It encourages a mindset poised for growth and continuous learning.</p>

      <h2>Conclusion</h2>
      <p>"It is only with the heart that one can see rightly; what is essential is invisible to the eye." As our world becomes increasingly intertwined and intricate, the capacity to comprehend and harness emotions becomes increasingly essential. In the end, developing emotional intelligence enables people to reach their full potential, live more satisfying lives, and make constructive contributions to their communities.</p>
    `
  },
  {
    id: "102",
    title: "PRIDE & PREJUDICE",
    slug: "pride-and-prejudice",
    category: "Editorial",
    date: "13 JUNE, 2025",
    image: "/Pride.jpeg",
    excerpt: "A powerful examination of Pride and prejudice in India, exploring the gap between legal progress and lived reality for LGBTQ+ communities.",
    author: {
      id: "1",
      name: "Shumaila Khan",
      username: "shumaila-khan",
      image: "/Shumilaprofile.jpeg"
    },
    content: `
      <h1>PRIDE & PREJUDICE</h1>

      <p>It is a truth universally acknowledged that in a heteronormative democracy, queerness will be tolerated—so long as it stays quiet, marketable, and non-threatening.</p>

      <p>Every June, the world goes through a "phase" that erupts in rainbows.</p>
      <p>Logos turn queer. Brands turn poetic. Influencers dig up last year's captions.</p>
      <p>Pride becomes both a spectacle and a sales pitch, loud enough to trend and soft enough not to threaten.</p>

      <p>This is where Pride meets its shadow: Prejudice.</p>
      <p>And unlike the rainbow, prejudice doesn't fade after June—because discrimination doesn't take a month off.</p>
      <p>It lingers—in appointment letters never issued, in hospital beds refused, in classrooms too scared to teach honestly.</p>

      <p>India may have decriminalized queerness, but it has not de-institutionalized bigotry. The system doesn't need slurs to discriminate - it just needs silence.</p>

      <h2>PRIDE</h2>
      <h3>Six Things Pride Is - and Two Things It's Not</h3>
      <p>(inspired by Kay Ulanday Barrett, Lesley University, 2021)</p>

      <h3>1. Pride began as a riot.</h3>
      <p>In June 1969, a police raid on the Stonewall Inn, New York City sparked six days of unrest. LGBTQ+ patrons and neighborhood residents pushed back against the regularized police harassment they faced. This unrest, now called the Stonewall Uprising, marks a historical catalyst.</p>

      <h3>2. Stonewall wasn't the first time queer people fought back.</h3>
      <p>Before Stonewall, queer and trans communities had already staged acts of resistance across the U.S.:</p>
      <ul>
        <li>1959: Cooper Donuts Riot, Los Angeles</li>
        <li>1965: Dewey's Lunch Counter Sit-In, Philadelphia</li>
        <li>1966: Compton's Cafeteria Riot, San Francisco</li>
      </ul>
      <p>These events are less known, not less important. The selective memory of history often favors what fits neatly into myth.</p>

      <h3>3. Pride is intersectional.</h3>
      <p>There's no version of queer liberation that isn't also about race, class, and gender.</p>
      <p>Black, Indigenous, Latine, and Asian American Pacific Islander (AAPI) activists have shaped the LGBTQ+ movement from its earliest days. Their stories are frequently sidelined in mainstream retellings, which often center whiteness and respectability.</p>
      <p>In 2017, Philadelphia added black and brown stripes to the rainbow flag to draw attention to racism within LGBTQ+ spaces. The fact that this was considered controversial says enough.</p>

      <h3>4. Pride was first officially recognized in 1999.</h3>
      <p>President Clinton issued Proclamation No. 7203, officially designating June as Gay and Lesbian Pride Month.</p>
      <p>Bisexual and transgender individuals were not included in this.</p>
      <p>Earlier, Clinton's Executive Order 13087 (1998) prohibited discrimination in federal employment based on sexual orientation—but not gender identity.</p>

      <h3>5. The scope of Pride expanded in 2009.</h3>
      <p>President Obama revised the proclamation to include bisexual and transgender communities. It was a rhetorical shift, not a structural one—but an important step toward recognition.</p>

      <h3>6. Pride is not exclusive—but access depends on context.</h3>
      <p>Straight and cisgender allies are welcome to celebrate, support, and advocate. But not every space during Pride is intended to be universal. Some events are created by and for LGBTQ+ people to gather without having to justify their presence or tone things down for comfort.</p>
      <p>Boundaries are not exclusion. They are necessities.</p>

      <h3>Two Things Pride Is Not</h3>
      <h4>1. Pride is not a branding opportunity.</h4>
      <p>Rainbow merchandise is not activism. Visibility without structural support is a marketing campaign—not alliance/allegiance.</p>

      <h4>2. Pride is not a phase.</h4>
      <p>It's not a fad, not a phase, and definitely not a trend. If anything is short-lived, it's the world's attention span. Queerness isn't what's temporary - tolerance often is.</p>

      <h2>Prejudice</h2>
      <p>When institutions stay silent, even the loudest protests become whispers.</p>
      <p>Despite legal progress, including the reading down of Section 377, structural discrimination persists across Indian society.</p>
      <p>Laws exist—but rarely translate into lived protection.</p>

      <p>In education, over 60% of LGBTQ+ students report verbal abuse, while 15% face physical bullying (Humsafar Trust, 2020). In workplaces, 70% of queer employees report discrimination or social exclusion - a figure well above the global average (Deloitte, 2023). Travel too is marked by unease: 86% of transfeminine and 83% of transmasculine travellers report discrimination, with safety dictating their mobility (Booking.com).</p>

      <p>These aren't numbers. They're indicators of structural exclusion.</p>

      <p>In February 2025, two trans individuals collecting Holi donations in Lucknow were assaulted by hospital staff—verbally abused, robbed, and left without recourse until public outrage forced an FIR. A month later in Indore, transwomen residents of "Mera Kunba," a shelter meant to provide safety, were attacked and threatened with eviction. The violence was not random—it was institutional.</p>

      <p>This pattern isn't new. In September 2022, two trans men were detained by police in Gurugram, verbally abused, and held without grounds. Not only was no FIR filed for weeks, but the legitimacy of their shelter was publicly questioned, as if the system needed a reason not to protect them. In Kozhikode, transwoman Deepa Rani approached the police for help after being harassed. Her request was met with silence. No action was taken and No protection granted.</p>

      <p>These are not isolated incidents. They're snapshots of a system that writes protections into law but denies them in practice. The Transgender Persons (Protection of Rights) Act, 2019 promises dignity—but comes with caveats that disfigure that promise: the requirement of invasive medical screening to legally affirm gender identity, the routine delay or denial of FIRs, the glaring lack of sensitization among police and healthcare workers.</p>

      <p>Worse still is the vacuum where accountability should be. India has no national anti-discrimination law explicitly protecting sexual orientation or gender identity. There are no dedicated commissions for queer and trans persons, no watchdogs with teeth. In the absence of enforcement, the law becomes performance.</p>

      <h2>From Protest to Progress</h2>
      <p>The reading down of Section 377 marked a milestone, not a finish line. Decriminalisation alone does not dismantle prejudice. Legal reform, while essential, cannot substitute the broader structural transformation required in policing, healthcare, education, and civil society.</p>

      <h3>First</h3>
      <p>Police sensitisation must go beyond workshops. Custodial abuse must result in consequences. Police training modules must move beyond tokenism, and institutional accountability must be enforceable.</p>

      <h3>Second</h3>
      <p>Anti-discrimination laws must be broad, intersectional, and enforceable across employment, education, and housing.</p>

      <h3>Third</h3>
      <p>Dedicated national commissions for queer and trans persons must be created. Providing state-funded shelters and social services must be taken care of.</p>

      <h3>Fourth</h3>
      <p>Reform curricula, invest in inclusive media, and confront narratives that pathologize differences.</p>

      <p>If Pride is a protest, it is because the system has not yet earned the right to celebration. Pride is not a festival - it is a resistance that continues in classrooms, courtrooms, clinics, and streets. One side glints with rainbow visibility, hashtags, corporate sponsorships. The other remains dull with silence, erasure, and deferred justice.</p>

      <p>Pride and prejudice are not opposites; they are coexistent forces—one pushing for recognition, the other resisting change.</p>

      <p>The future depends not only on laws but on will—on whether institutions will evolve, or whether progress remains aesthetic.</p>

      <p>If Pride Month is to mean something beyond performance, it must become a site of reflection and resolve. Pride is not about visibility alone. It is about safety, Dignity, Belonging.</p>

      <p>And it begins when the state, the law, and the citizens stop pretending that equality is already here.</p>
    `
  },
  {
    id: "middle-east-economic-shift",
    title: "From Oil to Opportunity: The Middle East's Economic Shift",
    slug: "from-oil-to-opportunity-middle-east-economic-shift",
    excerpt: "An in-depth analysis of how Middle Eastern nations are transitioning from oil dependency to technology-driven economies, exploring their strategic investments in AI and green technology.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          For decades, the Middle East has long been dependent on fossil fuels and rare metals for their economic identity. Since the discovery of vast oil and natural gas deposits, the region has had drastic changes in their geopolitical atmospheres. Nations like Iran, Afghanistan and Kazakhstan, which struggled to industrialise quickly or develop stable governments, have been brutally exploited—caught in the turmoil of resource politics.
        </p>

        <p>
          On the other hand, states like Saudi Arabia, Yemen, UAE etc. capitalised quickly on their newfound source of wealth and are now global economic powerhouses. The effect on our world as it is now? Their leaders accumulated immense, often opaque, reserves of wealth—making them some of the richest states on Earth. They hold the power, resources, and global influence to make any change or development they deem fit.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Recognising the Limits of Oil and the Future</h2>
          
          <p>
            Throughout time, it has always been new technology that brings about the turn in the global landscape. Those who bring about this turn emerge as the new dominant powers, be it from a military perspective- the shift from stone weapons to iron ones, or from cannons and guns to nuclear weapons; or be it an industrial perspective- the invention of the printing press and the industrial revolution.
          </p>
          
          <p>
            The Middle East recognises that a turn, military as well as industrial, is on the horizon- AI and green technology. They also recognise the finite nature of their natural resources, and how advancing technology has begun shifting focus from oil/coal-based fuels to abundant renewable resources that cannot be monopolised. As before, they now adapt to this changing landscape and pivot to Artificial Intelligence and other emerging technologies.
          </p>

          <p>
            With their vast capital reserves, global networks, and strategic foresight, these nations are positioning themselves as key players in the next technological revolution. Today, power isn't just about oil or natural resources—it's also about who leads in technology. And the Middle East is making sure it isn't left behind. Countries like Saudi Arabia and the United Arab Emirates are investing heavily in new technologies. They're putting money into tech companies, building partnerships with some of the biggest firms in the world, and planning entire cities based around futuristic ideas.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Building the Cities of Tomorrow</h2>
          
          <p>
            One of the most ambitious projects is NEOM, a city being built in Saudi Arabia that's designed to run on renewable energy and use the latest technology in everything from transport to healthcare. The UAE has also opened a university focused entirely on artificial intelligence, showing that they're serious about positioning themselves not just as consumers but as innovators. They want to be leaders in developing it.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Creating a Tech-Ready Ecosystem</h2>
          
          <p>
            But it's not just about spending money. These countries are also trying to create the right environment for new industries to grow. That includes updating school curricula, training local workers in tech skills, and building large data centres to handle the vast amount of digital information that modern technologies rely on. They're also setting up laws and systems to encourage international companies to bring their business to the region.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">A New Kind of Global Influence</h2>
          
          <p>
            In doing all this, Middle Eastern nations are gaining a new kind of influence. They're no longer just selling oil—they're helping shape the future of how the world works. From smart cities to digital healthcare, they're laying the groundwork for what tomorrow might look like. This rapid scaling and attempt at dominance in what might be the most important aspect of the centuries to come raises many questions. Will the Middle East develop in the tech business as they did in oil? Will the difference in governance forms, monarchy vs democracy, play a crucial role? Who controls the data? How is the technology being used? Will it benefit everyone, or just a few?
          </p>
        </section>
            </div>
    `,
    image: "/oil.jpeg",
    author: authors.find(a => a.username === "aliya-imam")!,
    category: "international",
    date: "2025-06-14",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Middle East", "Technology", "Economic Development", "AI", "Green Technology"],
    featured: true,
    isPublished: true,
  },
  {
    id: "article-142-presidents-debate",
    title: "ARTICLE 142: THE PRESIDENT'S DEBATE AND QUESTIONS THAT FOLLOW",
    slug: "article-142-presidents-debate-questions",
    excerpt: "An analysis of the Presidential reference to the Supreme Court regarding Article 142, exploring its implications for constitutional governance and the balance of power between branches of government.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          May 15th, 2025 witnessed the Hon'ble President of India asking some questions to the Supreme Court over use of powers, of the Supreme Court as well as the Governors and the President itself. The Presidential reference, however, asked questions general in nature, sparked ideas, questions and skepticism about the use of the famous Article 142 by the Supreme Court of India. The question is, is the article a Gauntlet of Thanos, bestowing it with illimited power to intervene in matters? Do the matters in which it was revoked really concern the Supreme Court? In this article, we explore similar waters. In disclaimer, we may or may not come out with absolute answers but will have more questions in mind after reading it, that is something I can assure the readers of.
        </p>

        <p>
          The Presidential reference asked the Supreme Court whether it had power to intervene in the legality or illegality of Bills waiting for assent to become laws. This comes in reference to the Court invoking the article to comment on the legality of about 10 bills which were being held by the Governor of Tamil Nadu for assent. "Can the Constitutional powers of the President/Governors be substituted by a judicial order exercising Article 142? Is Article 142 limited to matters of procedural law or does it extend to issuing directions "contrary to or inconsistent with existing substantive or procedural provisions of the Constitution," it asked.
        </p>

        <section class="article-section">
          <h2 class="section-heading">The Article 142</h2>

        <p>
            Before diving into precedents, it is a necessity for us to know what does the article exactly say, what does it convey?
        </p>

        <p>
            In its exact terminologies, the Article 142 of the Indian Constitution states that,
        </p>

        <p>
            "The Supreme Court in the exercise of its jurisdiction may pass such decree or make such order as is necessary for doing complete justice in any cause or matter pending before it, and any decree so passed or order so made shall be enforceable throughout the territory of India in such manner as may be prescribed by or under any law made by Parliament and, until provision in that behalf is so made, in such manner as the President may by order prescribe."
        </p>

        <p>
            "Subject to the provisions of any law made in this behalf by Parliament, the Supreme Court shall, as respects the whole of the territory of India, have all and every power to make any order for the purpose of securing the attendance of any person, the discovery or production of any documents, or the investigation or punishment of any contempt of itself."
        </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">What sparked the debate?</h2>

        <p>
            The President, questioning the use of the powers of supreme court, inquired whether the Supreme Court can really replace or substitute a Governor or the President for that matter by invoking the article and hence, placing an article above the first citizen of the nation and those of the states. Reacting to this the Vice President, Shri Jagdeep Dhankar called the article "nuclear missile against democratic forces", The Hindu reports.
        </p>
          
          <p>
            In defence, Justice Pardiwala did mention later that the article was invoked thoughtfully and that it was used in the benefit of the citizens of Tamil Nadu.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Was the use of the Article justified?</h2>
          
          <p>
            Now, this comes at a time, when a lot of legislation related debates are finding their place in the Court as well as on ground zero, and the Court overriding the legislature may or may not be welcomed by the legislators. The use of the article, though might or not be justified, can be done as the Supreme Court is the final interpreter of the Constitution and hence, holds the power to interpret the Article as and how it deems necessary and crucial, but questions also arise whether the top court gets a say in state bills, when they are not even laws yet?
          </p>

          <p>
            Readers, we should have this understanding, as important is the article to keep a check on legislature's misuse of power, it is also necessary that the judiciary be impeded from barging into the territory of legislature, also, this debate sparks especially when the top court steps into the state bill's territory and declares the action of a Governor moot and illegal, raising questions, whether the governors or even the President for that matter, have any power in their hands or are they just nominal in purview as well?
          </p>

          <p>
            According to a Research published by IIM-Ahmedabad in May 2024 suggests that of the 1579 Supreme Court cases where the terms "Article 142" or "complete justice" were used between 1950 and 2023, the Court "explicitly" used its power under the provision in only half the cases. The Court's deployment of Article 142 was "ambiguous/not used" in almost 40 percent of cases. It expressly rejected the use of the provision in about 10 percent of cases.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The way ahead</h2>
          
          <p>
            The matter is rather fresh as of now to build onto any conclusions, but the questions themselves spark thoughts and ideals. Are the foundations of the iron walls between the three pillars of democracy fumbling? Is the judiciary overpowered? Is it misusing the provision meant to ensure its independence? I, readers, leave it upon you to think, wonder rather and finally sought the answers to my questions, for when the President can ask, why can't you and I?
          </p>
        </section>
      </div>
    `,
    image: "/Ar.jpeg",
    author: authors.find(a => a.username === "atulit-pandey")!,
    category: "national",
    date: "2025-06-14",
    readTime: "10 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Constitution", "Supreme Court", "Article 142", "Governance", "Legal System"],
    featured: true,
    isPublished: true,
  },
  {
    id: "absence-of-geoparks",
    title: "ABSENCE OF GEOPARKS IN INDIA: WASHING AWAY GEOHERITAGE?",
    slug: "absence-of-geoparks-in-india",
    excerpt: "An exploration of India's rich geological heritage and the urgent need for UNESCO Global Geoparks to preserve and showcase our natural history.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          "India's landscape is a living record of the Earth's ancient history, from the towering Himalayan ranges to the volcanic Deccan Traps. This rich geological heritage, coupled with vibrant cultural traditions, makes India an ideal candidate for UNESCO Global Geoparks."
          <br/>
          - Tim Curtis, Director and Representative, UNESCO New Delhi Regional Office for South Asia
        </p>

        <p>
          With the world progressing at pace towards preserving their heritage, cultural, ethnic and geological alike, Global Geoparks come in as the saviour of the geology of a certain region.
        </p>

        <p>
          While Mr. Curtis appreciates India's potential for being the perfect candidate for having UNESCO Global Geoparks, India possesses, noteworthily, none. It is without a doubt, certain, that India possesses extraordinary potential for having geoparks, having undergone extraordinary geological changes, be it the duration of continental drift, the Himalayan orogeny, the Deccan trap formation, India has witnessed a myriad of textbook geological phenomenon and displays a spectrum of features, hardly witnessed anywhere else on Earth.
        </p>

        <section class="article-section">
          <h2 class="section-heading">What are Geoparks?</h2>
          
          <p>
            Introduced in 2015 by UNESCO, the geoparks or UNESCO Global Geoparks is a landmark initiative focusing on the global geoheritage, giving the long-due attention to the geological features of the world, finally appreciating what nature has given us in the form of Earth features, and shifting focus to anthropocentric preservation to a more holistic approach.
          </p>

          <p>
            UNESCO defines Geoparks as:
            <br/>
            "UNESCO Global Geoparks are single, unified geographical areas where sites and landscapes of international geological significance are managed with a holistic concept of protection, education and sustainable development."
          </p>

          <p>
            A UNESCO Global Geopark uses its geological heritage, in connection with all other aspects of the area's natural and cultural heritage, to enhance awareness and understanding of key issues facing society, such as using our earth's resources sustainably, mitigating the effects of climate change and reducing natural hazard-related risks.
          </p>

          <p>
            The British Geological Survey define UNESCO Geoparks as:
            <br/>
            "UNESCO's Global Geoparks are areas with internationally important rocks and landscapes, all of which are managed responsibly for conservation, education and sustainable development. Whilst geology may be their foundation, UNESCO Global Geoparks build upon it by bringing together other aspects of heritage such as archaeology, history, culture and biodiversity. All of this is achieved in collaboration with local people to make UNESCO Global Geoparks better places to work, live and visit."
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">India without a global geopark: what's at stake?</h2>
          
          <p>
            The disadvantages of not having an UNESCO recognised Geopark are as follows:
          </p>

          <ul>
            <li>Loss of international recognition: Without UNESCO status, the geoparks in India miss out on the global visibility that will impact global academic collaboration, may reduce grants or research interest from international conservation bodies</li>
            <li>Effect on geotourism: UNESCO global geoparks attract geotourism which in turn generates revenue and employment, this lack of recognition limits such potential in India's rich geoheritage sites like Lonar Lake in Maharashtra</li>
            <li>Poor protection of geological heritage: sites recognised by UNESCO receive legal or policy protection, decreasing the risk of destruction due to urbanisation, vandalism, and geosites such as St. Mary's Island and Eparchaean Unconformity have suffered irreversible damage due to lack of recognition</li>
            <li>Limited public awareness and education: these sites are also learning territories without such recognition, the focus is less on public education regarding earth sciences for example the Majuli River in Assam world's largest river island with a complex geomorphology receives very little attention in earth science education</li>
          </ul>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Conclusion</h2>
          
          <p>
            UNESCO Global Geoparks play a crucial role in conserving geological heritage, promoting education, and supporting sustainable tourism. Despite India's rich geo-diversity, the absence of a recognised Geopark limits both global recognition and local development opportunities. These parks can empower communities, boost eco-tourism, and enhance scientific learning. To change this, India must identify eligible sites, improve infrastructure, involve local communities, and meet UNESCO guidelines. Greater collaboration between government, scientists, and educators is essential. By investing in geopark development, India can preserve its natural legacy while advancing sustainable development and becoming a stronger voice in global geoheritage conservation efforts.
          </p>
        </section>
      </div>
    `,
    image: "/Geoparks.jpeg",
    author: [
      authors.find(a => a.username === "atulit-pandey")!,
      authors.find(a => a.username === "prerna-srivastava")!
    ],
    category: "sci-tech",
    date: "2025-06-15",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Geoparks", "UNESCO", "Geology", "Conservation", "India"],
    featured: true,
    isPublished: true,
  },
  {
    id: "before-the-closet",
    title: "Before the Closet: How different sexual Identities have always been a part of Indian History",
    slug: "before-the-closet-sexual-identities-indian-history",
    excerpt: "A journey through India's rich history of gender fluidity and sexual diversity, exploring how pre-colonial India embraced and celebrated diverse identities.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          We often hear phrases like coming out of the closet, but have you ever paused to ask, "what closet?"
        </p>

        <p>
          Because, truth be told, for centuries, Indian culture didn't even have one when it comes to sexual identity. The idea that LGBTQ+ identities are new or "Western imports" is one of the biggest myths passed off as fact. The truth? Sexual identity existed in India long before the British came with their moral codes and closets.
        </p>

        <p>
          This article is a journey back to a time when gender and sexuality were more fluid, visible, and accepted than we might imagine. It's about what existed before the closet, the laws, the shame, and the silence.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Myths That Bend Gender and Norms</h2>
          
          <p>
            Let's start with our epics: the Mahabharata and Ramayana. They aren't just tales of war and dharma, they're rich with queer-coded narratives.
          </p>

          <p>
            In the Mahabharata, Shikhandi is born a girl but raised as a man and recognized as such. His gender identity is not questioned; he's respected as a warrior. Then there's Arjuna, who, during exile, lives as Brihannala, teaching dance and living in a feminine form. The story doesn't treat this transformation as shameful; it's just a part of the plot.
          </p>

          <p>
            Even the divine gets a fluid makeover. Meet Ardhanarishvara, the iconic fusion of Lord Shiva and Goddess Parvati, depicted as one body split into half-male and half-female. This isn't just a metaphor; it's a sacred representation of gender fluidity, reminding us that the divine was never binary.
          </p>

          <p>
            Bahuchara Mata, another important deity, is worshipped by many from the hijra community. Her mythology and worship show the deep-rooted spiritual roles that third-gender people have played in Indian society for centuries.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Temples, Texts, and the Third Gender</h2>
          
          <p>
            Sexual identity in India wasn't just mythological, it was lived, documented, and even carved into stone.
          </p>

          <p>
            The Kamasutra, written around the 3rd century CE by Vatsyayana, is more than just a sex manual. It openly discusses same-sex relationships, third genders, and people with diverse sexual desires. These were not labeled unnatural; they were treated as other normal aspects of human experience.
          </p>

          <p>
            Take a stroll through temples like Khajuraho(Madhya Pradesh) or Konark(Odisha), and you'll find carvings of men with men, women with women, and non-binary representations. These temples didn't just allow queer imagery, they immortalized it.
          </p>

          <p>
            Historical communities like the hijras(recognized as a third gender in Indian law today) and jogappas(devotees of Goddess Yellamma in Karnataka) held important social and religious roles. Their identities were recognized and never erased.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">When the British Built the Closet</h2>
          
          <p>
            So, if all of this was normal in pre-colonial India, What changed?
          </p>

          <p>
            In 1861, during British rule, Section 377 was introduced into the Indian Penal Code. This law criminalized carnal intercourse against the order of nature. In simpler words: queer people became criminals. The British brought with them Victorian morality, rigid, shame-driven code of conduct where anything outside heterosexual marriage was seen as sinful. Suddenly, sexual identity once a part of stories, temples, and tradition was branded as unnatural, illegal, and shameful. Families began hiding it. Society silenced it. This is how the closet arrived, built, not by Indian culture, but by colonial law and judgment.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Breaking the Closet, Reclaiming the Past</h2>
          
          <p>
            Fast forward to September 6, 2018, a day now etched in queer Indian history. The Supreme Court of India finally struck down Section 377, decriminalizing consensual same-sex relationships. A huge legal win, yes, but that was only the beginning of something bigger: cultural reclamation.
          </p>

          <p>
            Young Indians today are digging deep into history, myths, and art to reclaim what was buried. Social media, documentaries, poetry, and pop culture are all contributing to this revival. Films like Aligarh, Margarita with a Straw, and series like Made in Heaven are shining a spotlight on Indian sexual identity, making it visible again.
          </p>

          <p>
            From queer history pages on Instagram to campus pride parades, today's youth is not importing LGBTQ+ identities, they're rediscovering what was always ours.
          </p>

          <p>
            Before the closet, there were stories, carvings, gods, and people who lived outside the binary and beyond societal boxes. They existed without shame, without fear and with pride.
          </p>

          <p>
            Pride in India didn't start in 2018. It started long ago in our scriptures, our sculptures, and our streets. We're not asking for space in Indian culture. We're simply reclaiming what was already there.
          </p>

          <p>
            And with every step forward, we're not building something new, we're unlocking something ancient.
          </p>
        </section>
      </div>
    `,
    image: "/MS.jpeg",
    author: [
      authors.find(a => a.username === "manasvi-srivastava")!
    ],
    category: "arts-culture",
    date: "2025-06-15",
    readTime: "10 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["LGBTQ+", "Indian History", "Culture", "Gender", "Identity"],
    featured: true,
    isPublished: true,
  },
  {
    id: "ahmedabad-crash",
    title: "Mayday, Mayday, Mayday - Moments before the Ahmedabad Crash",
    slug: "mayday-moments-before-ahmedabad-crash",
    excerpt: "A detailed investigation into the tragic Air India flight crash in Ahmedabad, exploring the events leading up to the disaster and its aftermath.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          The clock struck 1339 hours IST, the calendar showed the date to be 12th June 2025, a pretty ordinary Thursday morning, when suddenly, Ahmedabad shivered with cries, its veins thrilled by huge black clouds of smoke, and the incident? A Boeing 787 Dreamliner, bound for London Gatwick crash landed just a few minutes after taking off, and collided with a hostel building of the BJ Medical College. 242 lives claimed, all innocent, 242 families devastated, and the world, shook to its core.
        </p>

        <p>
          As the world mourns the loss of every life, except one, onboard the aircraft, questions arise. Whose fault was it? What was the reason behind the crash? What happened in the final moments when 1,26,000 liters of fuel charred human bodies? What is the road ahead? What lessons do we take out from it?
        </p>

        <section class="article-section">
          <h2 class="section-heading">The Crash</h2>
          
          <p>
            Air India's flight numbered AI 171, serviced by a Boeing 787 Dreamliner registered as VT-ANB, plummeted in the skies at 475 feet per minute, less than a minute after taking off from the Sardar Vallabhbhai Patel International Airport, Ahmedabad. As reported by Times of India on 14th June 2025, at least 274 people were killed in the crash. This numbers includes 242 people onboard the flight - 230 passengers, two pilots and 10 crew members, and 32 people who were the residents of the medical hostel.
          </p>

          <p>
            The flight took off from the airport at 1339 hours IST, scheduled to reach London Gatwick around 2300 hours IST or 1825 hours BST. In less than a minute of taking off, the plane crashed into BJ Medical College's hostel. The last recorded altitude of the aircraft through Flight Radar 24 stands at 625ft, and the descend is said to be at a rate of around 425ft/minute. The pilots gave the infamous MAYDAY call, but it was too late and no connection could be established. The Flight Data Recorder (FDR) or the Black Box has been recovered from the crash site by the AAIB, though the search for the other black box called the Cockpit Voice Recorder (CVR) is still on. Without the investigation of these recording instruments, it is rather impossible to say anything about the exact cause of the crash, though speculations exist.
          </p>

          <p>
            Some experts are of the view that the flaps were not in optimum position, others say that the landing gears had not been retracted in time which increased the air drag and overpowered the generated thrust of the machine. Some other experts also consider bird strike to be a probable cause, as the airport witnesses a larger than average incidents of bird strikes. Also, this is to be noted that it is the first crash of the 787 since its inception in 2011.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Red flags that were ignored</h2>
          
          <p>
            The causes are still under investigation, but the initial results indicate that not only systematic problems with Air India but also some general issues with Boeing 787-8 Dreamliner aircraft might have been neglected.
          </p>

          <ol>
            <li>
              <strong>The Whistleblower Boeing Warning Was Ignored.</strong>
              <p>There had been concerns before by a former Boeing engineer over structural problems in the 787 model, namely that parts that were not correctly fastened could come loose after several flights. Despite these warnings, Boeing took them as not critical to flight safety. These issues are now under the scanner, thanks to the crash of Flight 171, the first-ever fatal accident involving a 787.</p>
            </li>
            
            <li>
              <strong>Facility and Technical Management</strong>
              <p>It is reported that the air conditioning and communication systems of the plane had given problems to passengers of the previous flights. Despite these complaints Air India has not shown that it made rigorous maintenance checks and acted on these complaints satisfactorily. With effect from June 15, 2025, the Directorate General of Civil Aviation (DGCA) has directed increased safety checks on the complete fleet of Air India Boeing 787.</p>
            </li>

            <li>
              <strong>Transparency and Accountability</strong>
              <p>After the crash, the absence of transparency on the part of Air India and DGCA about the progress of the investigation and its results has been conspicuous. Such communication gap has stirred anger and resentment in the minds of the people regarding the effectiveness of the inquiry and the promise of accountability.</p>
            </li>

            <li>
              <strong>International Investigation and Consequences</strong>
              <p>The incident has raised concern across the globe especially in the United Kingdom where 53 British citizens were on board the plane. The UK has also sent air crash investigators to aid in the investigation which highlights the international consequences of the accident.</p>
            </li>
          </ol>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Air India Clarifies Position Amid Ongoing Crash Investigation</h2>
          
          <p>
            After the catastrophic accident of Air India flight AI 171, which resulted in the death of 242 people, Air India's CEO Campbell Wilson said that is it "a difficult and painful day" and expressed profound sorrow, assuring that the airline is fully cooperating with authorities while focusing on supporting victims' families. Air India is actively working with India's Aircraft Accident Investigation Bureau (AAIB), and Boeing, GE Aerospace, as well as investigators from the US (NTSB) and UK, to determine what went wrong.
          </p>

          <p>
            While it is still unclear what went wrong with flight AI 171, several aviation analysts think that an engine failure caused the crash, possibly due to insufficient thrust during take-off. Experts also pointed to boarder issues, stating that while the aviation industry is expanding rapidly, the safety culture is stagnant. Critical questions are also being raised – like why there was a 3-4 leveled building located so close to the airport runway.
          </p>

          <p>
            People are questioning whether Air India is to blame, however nothing can be said yet, as a full in-dept investigation is underway. The Air India promises that they will cooperate with authorities and will see it through till the end.
          </p>

          <p>
            No matter where the fault lies, the loss of lives of hundreds is an irreversible tragedy, which demands nothing but responsibility and accountability.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The high cost of flight: Boeing's accident history uncovered</h2>
          
          <p>
            This was by no means the first tragic accident. Although there have been many red flags in Boeing's past, the 737 MAX crashes made everyone take notice. Lion Air Flight 610 crashed into the ocean shortly after takeoff in October 2018. Ethiopian Airlines Flight 302 crashed under suspiciously similar circumstances five months later. 346 people died in all. The underlying reason? MCAS is a defective software program that is activated by inaccurate sensor data. The pilots weren't prepared to deal with it, which was the worst part. They had no idea what they were doing. But malfunctioning technology wasn't the only issue. It had to do with a dysfunctional culture.
          </p>

          <p>
            In the past, Boeing was a company driven by engineers. However, following its merger with McDonnell Douglas. Things were different after the 1997 merger. Finance executives were in charge, not the engineers who previously headed Boeing. Profit was the priority. Safety features were cut or self-certified, airlines were rushed, and corners were cut. A couple of insiders did make attempts to resist. Former quality manager John Barnett expressed serious concerns but was reportedly pressured into silence. He was found dead in 2024, just before he was to have testified. The factory was "chaotic" according to Ed Pierson. He was also ignored. Once "an engineering company with a good business plan," Boeing is now merely "a business company that makes plans."
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Aftermath and Insights</h2>
          
          <p>
            This incident leaves us with so many questions, the biggest question of all—safety. Is safety even the priority of such cost-cutting aviation companies? Because this wasn't just an isolated event but a part of a systemic issue. Should India rethink procurement deals with Boeing? This has put Air India under scrutiny too. The incident has also led to a trust deficiency among the passengers. The DGCA has mandated enhanced technical inspections on all Air India 787 Dreamliners with GEnx engines; well, that's a step in the right direction (but too late). The Ministry of Civil Aviation shouldn't wait for another incident to review its policies, training, and fleet safety. In addition to this, authorities must ensure the timely removal of physical obstacles around airports to maintain clear approach and departure paths. This is a call for accountability from the airlines, the manufacturers, and the government because in aviation there's no room for shortcuts—because every takeoff carries a world of lives and stories.
          </p>
        </section>
      </div>
    `,
    image: "/Crash.jpeg",
    author: [
      authors.find(a => a.username === "hetal-kothari")!,
      authors.find(a => a.username === "prerna-srivastava")!,
      authors.find(a => a.username === "atulit-pandey")!,
      authors.find(a => a.username === "aliya-imam")!
    ],
    category: "national",
    date: "2025-06-15",
    readTime: "12 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Aviation", "Air India", "Boeing", "Safety", "Investigation"],
    featured: true,
    isPublished: true,
  },
  {
    id: "passing-the-torch",
    title: "Passing the Torch: Indian Cricket Team in the Post-Rohit-Kohli Era",
    slug: "passing-the-torch-indian-cricket-team-post-rohit-kohli",
    excerpt: "An in-depth analysis of India's cricket future following the retirement of Rohit Sharma and Virat Kohli from Test cricket, exploring the challenges and opportunities ahead.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          With the recent retirement of Rohit Sharma and Virat Kohli from the Test arena, Indian cricket now appears to be on the verge of a significant transition period, with the retirement of star players signifying both an era's end as well as the ushering in of generational transition to India's red-ball future.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Closing Chapters: The Final Tests of Rohit and Kohli</h2>
          
          <p>
            On May 7, 2025, Rohit Sharma, the Test captain of India, announced that he was retiring from Test cricket. After playing 67 matches, he scored 4,301 runs with an average of 40.57, including 12 centuries and 18 half-centuries. Rohit made a mark in Test cricket, especially after moving to the opening spot in 2019, where he particularly excelled in home conditions.
          </p>
          
          <p>
            Just a few days later, on May 12, Virat Kohli, who is one of India's top Test captains and a standout batter, also declared his retirement. Kohli concluded his test career with 123 matches, scoring 9,230 runs at an average of 55.57, along with 30 centuries—second only to Sachin Tendulkar among Indian players. He was captain from 2014 to 2022 and led India to 40 Test victories, creating a bold and aggressive style of play.
          </p>

          <p>
            Although these retirements were anticipated because of their ages and the demands of the game, they mark a clear shift in the team's leadership.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The BCCI's Response and Structural Shift</h2>
          
          <p>
            The BCCI has decided to keep Kohli and Rohit in the Grade A+ contracts for the 2024–25 season, which shows how important they still are to India's plans for white-ball cricket. At the same time, the board is making some changes in leadership. Shubman Gill, 25, has been named the new Test captain for the upcoming series against England. This choice signals a shift to a younger team. He's been prepared for this role through his experiences with India A and some early Tests.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">India's Test Future: Challenges and Focus Areas</h2>
          
          <p>
            The exit of two of the most senior batters and leaders leaves a significant gap in experience, temperament, and on-field guidance. The challenges that lie ahead include:
          </p>

          <p>
            Leadership Stability: With Gill stepping up as captain, the team will need some time to find its groove in terms of consistent leadership.
          </p>

          <p>
            Middle-Order Rebuild: Replacing the reliability and versatility that Kohli and Rohit offered to the middle order won't happen overnight. Young talents like Yashasvi Jaiswal, Ruturaj Gaikwad, and Sarfaraz Khan are set to vie for regular positions.
          </p>

          <p>
            Bowling Balance: The Test bowling lineup, featuring Bumrah, Siraj, and Ashwin, remains strong, providing a sense of continuity. However, developing solid backups for the long haul is crucial.
          </p>

          <p>
            Tough Tours Ahead: With a five-Test home series against England kicking off on June 20, the new team will face early tests—not just in terms of skill, but also in their ability to handle pressure.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Conclusion: A New Chapter Begins</h2>
          
          <p>
            The concurrent retirements of Rohit Sharma and Virat Kohli are one of the most monumental shifts in Indian cricket's history. While their departures leave significant voids, they also create opportunities for new talent to set new standards and paradigms of leadership.
          </p>

          <p>
            The BCCI's vision, the selectors' decision making in identifying suitable replacements, and the new players' ability to perform under the close scrutiny that comes with following such legendary forebears will determine how the transition will turn out. The strength and depth of Indian cricket will ultimately be tested in the coming months and starts with the England tour, which could provide the benchmark for the future.
          </p>
        </section>
      </div>
    `,
    image: "/leg.jpeg",
    author: authors.find(a => a.username === "abhinav-upadhyay")!,
    category: "sports",
    date: "2025-06-16",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Cricket", "Sports", "India", "Test Cricket", "Leadership"],
    featured: true,
    isPublished: true,
  },
  {
    id: "india-communalism",
    title: "India at the Crossroads: The Rising Shadow of Communalism",
    slug: "india-crossroads-rising-shadow-communalism",
    excerpt: "An examination of the historical roots and contemporary manifestations of communalism in India, its impact on society, and the path forward for national unity.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          India is a diverse country with a rich history of harmonious coexistence among its numerous communities. Yet, modern times have witnessed the rise of communal clashes, class conflicts, caste struggles, linguistic disputes, and ethnic tensions. Communalism is the belief that people of the same religion share common interests, suggesting that people of different communities have mutually incompatible and hostile ideologies.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Its Roots</h2>
          
          <p>
            Although conflicts did exist in the pre-colonial period, overall, it was a time marked by religious syncretism and harmony. Communalism is a colonial legacy tracing its roots back to various British policies of divide and rule like:
          </p>

          <p>
            • giving harsher punishments to Muslims than Hindus following the revolt of 1857
          </p>

          <p>
            • the partition of Bengal in 1905 along religious lines
          </p>

          <p>
            • introduction of a separate electorate
          </p>

          <p>
            • a communal interpretation of Indian history by James Mill
          </p>

          <p>
            • economic policies that led to stagnation and competition for limited resources and jobs
          </p>

          <p>
            India is founded on the rejection of the very idea that religion should be a determinant of nationhood. Secularism is enshrined in the Preamble and part of the basic structure of the constitution but it has not stopped political leaders and parties, both during the freedom struggle and post-independence, from using religious identities for electoral gains.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Its Impact</h2>
          
          <p>
            Jawaharlal Nehru warned in his book "The Discovery of India" (1946) that the communalism of the majority was especially dangerous because it could present itself as nationalist. Recurrent instances of communal violence and riots result in fatalities, displacement, property damage, and enduring trauma for people and communities. Instances include the 1984 Anti-Sikh riots, the 1992 riots following the Babri Masjid demolition, and the Gujarat riots of 2002.
          </p>

          <p>
            Social media has turned into a medium for spreading misinformation, rumors, and hate speech fostering an "us vs. them" narrative among communities (purposely augmented by communal politics), diminishing India's pluralistic identity, and resulting in societal polarization based on religion in turn threatening India's unity.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Conclusion</h2>
          
          <p>
            Addressing past injustices by committing new ones in a different context only deepens the original harm. Tackling communalism in India necessitates a multidimensional approach, including a focus on secular institutions, encouraging interfaith conversations, supporting ethical journalism, ensuring political responsibility, and confronting socio-economic inequalities.
          </p>

          <p>
            Future generations must not be taught to use history as a justification for present-day prejudice. Instead, we must strive to build a unified and harmonious society that looks forward rather than being divided by the past.
          </p>
        </section>
      </div>
    `,
    image: "/communism.jpeg",
    author: authors.find(a => a.username === "trishla-chaudhary")!,
    category: "national",
    date: "2025-06-16",
    readTime: "10 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Communalism", "Society", "Politics", "History", "India"],
    featured: true,
    isPublished: true,
  },
  {
    id: "beyond-rcb-stampede",
    title: "Beyond the RCB Stampede: The Crisis of Toxic Fandom in India",
    slug: "beyond-rcb-stampede-the-crisis-of-toxic-fandom-in-india",
    excerpt: "An in-depth analysis of the tragic RCB stampede incident and the broader issue of toxic fandom in India, exploring how celebration turned into tragedy and what it reveals about our society.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          In India, cricket isn't just a sport—it's emotion, identity, and, for many, a kind of religion. So when RCB finally lifted the IPL trophy after 18 long years, it felt like a dream come true. Streets lit up, chants echoed through the night, and fans poured in by the thousands to be part of something historic. But somewhere between the celebration and the chaos, joy turned into tragedy.
        </p>

        <p>
          A stampede broke out. People who came to cheer ended up crying. 11 lives were lost. 47 people were injured. And a question hung heavy in the air: how could something so beautiful turn so dark?
        </p>

        <p>
          This piece isn't just about one event. It's about a pattern we keep ignoring—the way we put celebrities on pedestals that we tend to forget they're human, and so are we. This is in fact about the system that feeds off our devotion for the games and the system isn't concerned about the safety of others. It's about the way fandom, when pushed too far, stops being about love and starts becoming dangerous.
        </p>

        <p>
          And maybe, just maybe, it's time we start questioning how much is too much, when it comes to worshipping our heroes?
        </p>

        <section class="article-section">
          <h2 class="section-heading">This Isn't Just A One-Off Tragedy</h2>
          
          <p>
            This isn't just a one-off tragedy. What happened wasn't an isolated event—it's a glimpse into a much bigger, deeper issue. The RCB stampede is a symptom of something we've normalized for far too long: toxic fan culture.
          </p>
          
          <p>
            From constant Twitter wars and name-calling hashtags to meme pages viciously trolling teams and players—these may seem trivial on the surface, but they're where it begins. The aggression builds quietly, becoming part of everyday fandom until it explodes into something real, something violent.
          </p>

          <p>
            We've seen it before. Vandalism at Dhoni's House (2012 & 2014) Fans vandalized his Ranchi house after he lost certain matches. It wasn't criticism—it was mob outrage over a game. The infamous SRK–Salman rivalry wasn't just a clash of stars, it created years of online abuse, hate trends, and blind loyalty. Now, the battleground has shifted to YouTube, where digital creators command cult-like devotion. Feuds between influencers often lead to doxxing, harassment, and targeted abuse, all in the name of loyalty. It's almost as if they're trying to please a god, not admire a person. And when devotion turns into blind worship, dissent becomes betrayal, and celebration becomes chaos.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">How Does Fandom Become Toxic</h2>
          
          <p>
            Fandom, at its heart, is just love. It's the joy of watching someone succeed, the comfort of seeing a familiar face on screen, the excitement of waiting for a new match, movie, or video to drop. It's deeply human—to want to cheer for someone, to feel like you're part of something bigger.
          </p>

          <p>
            But sometimes, without even realising it, that love crosses a line.
          </p>

          <p>
            People start tying their self-worth to someone else's success. "If they win, I feel proud. If they lose, I feel small." It stops being about the game or the film or the art. It becomes personal. It becomes mine. And when someone says something against that person, someone you've grown up admiring, defending, even living through, it feels like they're insulting you.
          </p>

          <p>
            That's when admiration turns into obsession.
          </p>

          <p>
            What starts as a harmless debate—"my team is better than yours" slowly becomes a fight. Then a war. Then something uglier. We've seen it happen. People hurl insults over a tweet, sending threats over a film review, breaking things after a match loss, all in the name of being a "true fan."
          </p>

          <p>
            But maybe behind all that noise, there's just a silent hurt. People looking for meaning. For pride. For something that makes them feel alive and seen in a world that often doesn't care. And when they find that in a celebrity or a team or a creator they hold on too tight.
          </p>

          <p>
            There's nothing wrong with loving your heroes. But maybe the question we need to ask is: are we loving them, or are we losing ourselves in them?
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Systematic Failures Feed It</h2>
          
          <p>
            Toxic fandom doesn't happen in isolation. It's not just about over-passionate fans, it's also about the authorities around them that allow, and sometimes even encourage it.
          </p>

          <p>
            Take the example of poor event planning—oversold tickets, unmanned gates, no crowd control. Fans are left to navigate chaos on their own. The tragic case of the KK concert in Kolkata is proof: it wasn't violence, it was negligence.
          </p>

          <p>
            Then marketing comes into the light. Franchises and celebrities aren't just sold as talented, they're sold as identities. "Ee Sala Cup Namde," "Bleed Blue," "SRK Army." The message is: don't just support—belong, defend, fight. But the infrastructure around this emotion? Nowhere to be seen. No safeguards. No mental health checks. No accountability when things go wrong.
          </p>

          <p>
            And the media? They know exactly what they're doing. Headlines like "Who has the most loyal fans?" or "Twitter goes to war over XYZ" aren't harmless—they're the fuel to the fire. What should be entertainment turns into this constant need to be louder, more aggressive, more "loyal."
          </p>

          <p>
            The system profits from obsession—but never takes responsibility when it turns dangerous.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Human Cost</h2>
          
          <p>
            Behind every stampede, every surge of online hate, every fan war that crosses the line—there are people. Not just usernames or crowd counts, but human beings with emotions, families, and stories of their own. Somewhere along the way, in the rush to go viral or break records, we forget that. Fans are reduced to metrics likes, views, ticket sales while the hurt they carry, the fear, the lasting scars, go unseen.
          </p>

          <p>
            And when something does go wrong, the silence from the top is deafening. No accountability. No apology. The same franchises and systems that romanticise undying loyalty—selling slogans, rivalries, and hype and vanish when it's time to take responsibility.
          </p>

          <p>
            The fans are left behind. Not heroes. Not warriors. Just human beings who gave too much and got too little in return.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">What Needs to Change?</h2>
          
          <p>
            Toxic fandom won't fix itself—it needs change, and that change must happen at every level. For fans, it starts with knowing where to draw the line. It's okay to love a team, a celebrity, a creator but not to the point where it becomes your entire identity. Passion shouldn't cost you your peace. And loyalty? It doesn't have to come with anger or hate. In fact, sometimes the most loyal thing you can do is speak up when your own side goes too far.
          </p>

          <p>
            For teams, franchises, and event organisers, the message is simple: stop chasing hype at the cost of responsibility. Fans aren't just crowds or numbers—they're people. They deserve safety, respect, and basic care. And framing aggression as devotion only makes things worse.
          </p>

          <p>
            As a society, we need to think about what this says about us. Why do we tie our pride to a player's win? Why does belonging sometimes mean fighting strangers online? These aren't just sports or film issues, they're about identity, insecurity, and the human need to feel seen.
          </p>

          <p>
            The tragic RCB stampede, which resulted in the loss of many lives and many more injuries, has triggered many serious questions—When did being a fan turn into picking sides like it's a war? It used to be about enjoying what you love—your team, your movie, your music. Now, it feels like you have to fight strangers just to prove you belong. It's not really about sports or films anymore. It's about identity, validation, and feeling seen. But in the middle of all the noise, we forgot the joy.
          </p>

          <p class="conclusion">
            So ask yourself – when did love for the game start costing lives?
          </p>
        </section>
      </div>
    `,
    image: "/toxic.jpeg",
    author: authors.find(a => a.username === "prerna-srivastava")!,
    category: "features",
    date: "2025-06-17",
    readTime: "15 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Sports", "Society", "Culture", "Fandom", "Cricket"],
    featured: true,
    isPublished: true,
  },
  {
    id: "ibc-effective-tool",
    title: "Is the IBC Still an Effective Tool for Resolution?",
    slug: "is-the-ibc-still-an-effective-tool-for-resolution",
    excerpt: "An analysis of the Insolvency and Bankruptcy Code's effectiveness after nearly nine years, examining its successes, challenges, and the road ahead for corporate debt resolution in India.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          After nearly nine years of IBC establishment, corporate debt resolution has seen a sea change in India; however, challenges remain persistent, as the landmark cases of Bhushan Power and Jet Airways show. Is IBC delivering on its promise, or has it begun to show signs of strain?
        </p>

        <section class="article-section">
          <h2 class="section-heading">A Game-Changer in Debt Resolution</h2>
          
          <p>
            The IBC, introduced in 2016, was a law that carved a way for the time-bound and creditor-centric insolvency resolution. Over the years, it has become the primary recovery instrument for bad loans in India. In FY24, bank recoveries through IBC accounted for nearly 48% of their dues, much more favored than traditional recovery methods like the SARFAESI (32%) or Debt Recovery Tribunals (17%). Early cases like Essar Steel (₹1.19 trillion recovered) and Bhushan Steel provided credibility to the IBC.
          </p>
          
          <p>
            By December 2024, more than 8,175 insolvency processes had been initiated, out of which more than 3,485 were "rescued" by way of resolution plans or settlements. Financial creditors were able to realize ₹3.58 lakh crore through 1,119 approved plans approximately, with recovery averaging 163% of liquidation value. However, beneath these early successes, several concerning trends cast doubt over the long-term efficacy of the IBC.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Legislative Push to Address Systemic Gaps</h2>
          
          <p>
            Over the years, endless amendments have been introduced by the government and IBBI to plug the system's gaps.
          </p>

          <p>
            May 2025- Interim finance providers were allowed to attend Committee of Creditors (CoC) meetings and bidders were permitted to make separate plans with respect to individual assets.
          </p>

          <p>
            February 2024- These special rules for real estate firms mandated independent resolution plans and accounts for each project.
          </p>

          <p>
            July-December 2025- New guidelines that seek improvement in the appointment of Insolvency Professionals (IPs) ensuring better accountability and availability.
          </p>

          <p>
            The proliferation of regulations since 2016 and six amendment Acts proves the intention behind fine-tuning the IBC. However, the practical outcomes remain mixed.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Judicial Roadblocks and Landmark Cases</h2>
          
          <p>
            One of the most disruptive events occurred in May 2025, when the Supreme Court set aside JSW Steel's ₹19,700 crore resolution plan for Bhushan Power & Steel—nearly five years after approval by the CoC. The ruling, which turned on discrepancies regarding promoter liabilities, stunned investors and raised serious concerns as to the sanctity of resolution. While the Court did stay liquidation pending review, that very uncertainty was the most severe vulnerability exposed in the IBC architecture.
          </p>

          <p>
            Other famous cases highlight tensions of similar ilk. In November 2024, Jet Airways was eventually liquidated by the Supreme Court after prolonged delays did not crystallize into a feasible resolution. Go First Airlines met a similar fate in January 2025 with the NCLT citing repossession of assets and failed bids as reasons to shut it down.
          </p>

          <p>
            The present cases exemplify litigations and all kinds of inefficiencies in processes that shall derail even brighter resolutions.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Recovery Rates and Timelines Lagging</h2>
          
          <p>
            Despite the high-profile recoveries, average creditor realization remains modest with just 32-33% of admitted claims. While the last few quarters saw recoveries up to 70%, overall outcomes show banks are still taking haircuts of above 60%.
          </p>

          <p>
            Timelines are a growing concern, too. The law allows a maximum of 330 days for resolution; however, presently, the average case spans more than 865 days. Litigation remains the primary reason for delays in almost 78% of all cases beyond the 270 days stipulated in the Act.
          </p>

          <p>
            Such backlogs run counter to the very principle that made the IBC attractive—certainty through speed.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Mixed Views from Experts and Institutions</h2>
          
          <p>
            The government and RBI continue to support the IBC, arguing it has contributed to enhanced credit discipline and larger recoveries. A 2023 study from IIM-Ahmedabad contends that companies resolved under the IBC saw improved profitability and liquidity.
          </p>

          <p>
            However, more sober voices from the industry, amongst others from credit rating agencies, portray a different picture. ICRA mentions the worsening of timelines and that nearly half the cases end up in liquidation. Legal experts contend that the system is susceptible to abuse—by both borrowers seeking to delay proceedings and creditors who want to hastily push for liquidation for asset grabs.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Road Ahead</h2>
          
          <p>
            The IBC remains the most effective tool in India for debt resolution, but it is at a crossroads. Key reforms must be prioritized to keep the momentum:
          </p>

          <ul>
            <li>Strengthening and digitizing the infrastructure of the NCLT/NCLAT</li>
            <li>Setting up dedicated insolvency benches to relieve caseloads</li>
            <li>Fostering operational and employee creditor empowerment</li>
            <li>Refashioning a robust pre-pack framework primarily for large firms</li>
          </ul>

          <p>
            As the Bhushan Power case illustrates, uncertainty is the mortal enemy of the IBC. Swift action is essential not only to amend the law, but also to implement it effectively.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Conclusion</h2>
          
          <p>
            With timely reforms and restored confidence in the resolution process, IBC could morph into a world-class regime. The alternative will be a fast slide back into impenetrable recovery regimes—a risk India's financial ecosystem can simply not afford.
          </p>
        </section>
      </div>
    `,
    image: "/IBC.jpeg",
    author: authors.find(a => a.username === "abhinav-upadhyay")!,
    category: "business",
    date: "2025-06-17",
    readTime: "12 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Business", "Finance", "Law", "IBC", "Corporate"],
    featured: true,
    isPublished: true,
  },
  {
    id: "animal-rights-india",
    title: "Animal Rights in India: Speaking Up for the Unheard",
    slug: "animal-rights-india-speaking-up-for-the-unheard",
    excerpt: "A comprehensive look at animal rights in India, exploring the legal framework, everyday challenges, and how each of us can make a difference in protecting our fellow creatures.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          Last month, while walking through the bustling streets of Lucknow, I spotted several stray dogs huddled in a forgotten corner. One of them caught my attention - his ribs protruded sharply beneath his dull coat. He still managed to wag his tail hopefully. That moment stayed with me. Or consider what I once witnessed – a magnificent elephant, chains around her ankles, forced to carry tourists up steep fortress paths in 40-degree heat. Her eyes reflected a deep weariness that words fail to capture. These creatures can't speak our language, but anyone who's truly looking can see they experience the full spectrum of emotions – joy, suffering, terror, and yes, even love.
        </p>

        <p>
          India presents a fascinating paradox. We paint divine status on cows, celebrate Nag Panchami for snakes, and our mythology brims with animal deities from Hanuman to Garuda. You'd think this spiritual reverence would translate to harmonious coexistence, but I've seen firsthand how the reality often falls painfully short. Yet there's hope – our laws offer substantive protections. The problem? Too few people know about them.
        </p>

        <section class="article-section">
          <h2 class="section-heading">The Legal Shield Few Know About</h2>
          
          <p>
            I was surprised to learn during my research that India stands among a handful of nations whose Constitution explicitly safeguards animals. Article 51(A) doesn't merely suggest – it mandates that every citizen bears a fundamental duty to protect and show compassion to all living creatures. This isn't flowery language; it's a legal obligation with real teeth.
          </p>
          
          <p>
            The backbone of protection comes from the Prevention of Cruelty to Animals Act, passed back in 1960 but still relevant today. At its heart lies a simple principle: no animal should suffer needlessly. Whether it's the shopkeeper who kicks away the neighborhood stray, the cart owner who whips his exhausted horse through monsoon floods, or the farmer who keeps his cattle perpetually tethered in filthy conditions – the law considers these acts wrong. I've seen each example in my own neighborhood.
          </p>

          <p>
            For our wild heritage, the Wildlife Protection Act of 1972 steps in. Growing up near the Western Ghats, I watched forest areas shrink year by year. This legislation stands as a crucial barrier, prohibiting the hunting of protected species and preserving their habitats within sanctuaries and national parks.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Everyday Cruelties We Walk Past</h2>
          
          <p>
            Most animal suffering in India stems not from deliberate cruelty but from sheer ignorance. I remember my grandmother throwing stones at street dogs, believing them "dirty" and "dangerous" – until I explained how these animals have legal rights to exist unmolested. The Animal Birth Control Rules specifically mandate humane sterilization and vaccination programs rather than culling – though I still occasionally see municipal workers rounding up strays for slaughter despite these protections.
          </p>

          <p>
            Working animals break my heart the most. Last summer in Varanasi, I watched a bullock collapse from heat stroke while pulling an overloaded cart. Few realize that these animals have legally mandated work limits, rest periods, and weight restrictions. The same applies to the goats I've seen packed into trucks headed for slaughter, or the battery hens stuffed into spaces smaller than a sheet of paper – our transport laws require adequate space, food, and rest periods that rarely materialize in practice.
          </p>

          <p>
            Even Bollywood isn't exempt. Remember that blockbuster with the tiger chase scene? Films and circuses must adhere to the Performing Animals Rules, requiring licenses and humane treatment. After witnessing a film shoot where a horse was repeatedly forced to fall for dramatic effect, I filed a complaint with the Animal Welfare Board – they actually took action!
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Courts Stepping Up When Humans Won't</h2>
          
          <p>
            India's judiciary has increasingly championed animal protection. I've followed the Jallikattu controversy for years – the case titled "Animal Welfare Board of India & Ors v. Union of India & Anr" (2023) continues the debate over whether this bull-taming tradition can ever be conducted humanely. Back in 2014, the Supreme Court initially prohibited the practice due to documented cruelties, though political pressures have complicated enforcement.
          </p>

          <p>
            What truly amazed me was the 2016 Uttarakhand High Court ruling that recognized animals as legal persons. When I first read the judgment, it brought tears to my eyes. This revolutionary stance means animals possess inherent rights beyond mere property status – we humans have a duty to honor and protect those rights, not just avoid cruelty.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Beyond Paragraphs in Law Books</h2>
          
          <p>
            Animal rights transcend legal frameworks – they're about moral evolution and empathy.
          </p>

          <p>
            My father taught me to observe animal behaviors – how a cow nuzzles her calf, how birds warn each other of danger, how even the smallest creatures fight to survive. They may lack human speech, but their communication through body language, vocalizations and even profound silence speaks volumes. True compassion requires more than merely preventing harm; it demands recognizing their right to coexist with dignity in our shared world.
          </p>

          <p>
            When you offer water to a panting stray during a heatwave, refuse that elephant ride in Amber Fort despite family pressure, or speak up when your neighbor keeps his dog perpetually chained – you're not just being "nice." You're honoring fundamental rights that even our courts have recognized.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">How You Can Make Real Difference</h2>
          
          <p>
            I've learned that anyone can help:
          </p>

          <ul>
            <li>Document and report cruelty to local police or the Animal Welfare Board of India. I keep their hotline (1962) saved in my phone – one call about a neglected horse last year led to immediate intervention.</li>
            <li>Consider adoption instead of shopping for pets. My rescued street dog Buddy has brought more joy than any pedigreed animal could, while saving a life in the process.</li>
            <li>Use your voice in your community. When our apartment complex wanted to evict resident strays, a few of us rallied enough support to establish a feeding station and vaccination program instead.</li>
            <li>Support grassroots rescue organizations. The dedication I've witnessed at small shelters operating on shoestring budgets has restored my faith in humanity.</li>
            <li>Educate others, especially children. My niece now lectures her whole class about animal kindness after I explained why we shouldn't buy birds in cages.</li>
          </ul>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Conclusion</h2>
          
          <p>
            In a world increasingly callous toward vulnerability, choosing compassion becomes a radical act. India's animal protection framework reflects the society we aspire to create – one where each sentient being, regardless of species, deserves dignity and consideration.
          </p>

          <p>
            I still think about that street dog in Lucknow sometimes. Did someone feed him that evening? Does he have shelter during monsoons? But I also remember the elderly vegetable seller who kept a water bowl outside her stall, refilling it throughout the scorching day for thirsty strays. Such small kindnesses remind me of what's best in us.
          </p>

          <p>
            When we protect animals, we don't just save them. We save something essential in ourselves.
          </p>
        </section>
      </div>
    `,
    image: "/Animal.jpeg",
    author: authors.find(a => a.username === "hetal-kothari")!,
    category: "features",
    date: "2025-06-17",
    readTime: "15 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Animal Rights", "Society", "Law", "Environment", "Ethics"],
    featured: true,
    isPublished: true,
  },
  {
    id: "union-to-silence-lucknow-university",
    title: "From Union to Silence: How Criminalization Killed Mass Politics at Lucknow University",
    slug: "from-union-to-silence-how-criminalization-killed-mass-politics-at-lucknow-university",
    excerpt: "An analysis of how student politics at the University of Lucknow transformed from ideological engagement to criminal control, and the consequences of banning student union elections.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          The story of student politics at the University of Lucknow is, in many ways, the story of India itself. A campus that once hosted torchbearers of freedom—where the student union gave honorary membership to Jawaharlal Nehru, Lal Bahadur Shastri, and Khan Abdul Ghaffar Khan—has today been without an elected student union for nearly two decades. The official reasoning behind this decision is violence. But this is not just about violence. This is the story of how criminalization hollowed out a culture of mass political participation and left behind a sterile campus where politics is either elite or criminal—with nothing in between.
        </p>

        <section class="article-section">
          <h2 class="section-heading">The Ideological Era</h2>
          
          <p>
            In the post-independence decades, student politics at LU was ideological. AISF, ABVP, NSUI—these were not just acronyms but distinct political positions with real ideological foundations. Debates were fierce, yet based on ideas. Student union elections were political acts, not proxy wars. Atul Anjaan, perhaps the most significant LUSU president, held office during the Emergency and kept the idea of a student union alive when democratic rights were suspended nationwide. His tenure was not marked by fear but by articulation, oratory, and mass work. LU in the '60s and '70s was a campus of politics—not a battlefield.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Criminal Turn</h2>
          
          <p>
            But this balance began to collapse in the '80s, and by the '90s, it was destroyed. The rise of criminal elements—Dhananjay Singh, Abhay Singh—turned student politics into an entry point for mafia operations. Elections were no longer about mandates; they were about territory. Hostel rooms became armories. The union became a ladder to political contracts, not public service. And with this shift came fear. Participation shrank. Only those who could afford physical risk or had patronage entered the fray. Politics moved from the classroom to the corridor of power—and finally into the shadows.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Ban and Its Consequences</h2>
          
          <p>
            The consequence? In 2006, under the guise of implementing Lyngdoh Committee recommendations, elections were banned. Not suspended—banned in practice, if not in name. No LUSU elections have been held since. Students have come and gone without even knowing what collective representation means. And it's not just representation that is lost—it's memory, imagination, and history. A campus that once debated Vietnam, caste, and price hikes is now a campus where student voices are reduced to hashtags, if that.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Deeper Cost of Depoliticization</h2>
          
          <p>
            But what is the deeper cost of this depoliticization? The vacuum of mass participation has not created neutrality—it has created elite and criminal dominance. Those with social capital, family networks, or party backing still rise. They become spokespersons, political managers, or NGO functionaries. The criminal networks didn't disappear either; they just found new forms—controlling admissions, hostels, and extortion rackets informally, without needing an election. What's missing is the middle: the mass student who once voted, once protested, once debated, once dreamt. That student is now absent. And their absence is political.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Serving the Status Quo</h2>
          
          <p>
            This deliberate dismantling of democratic culture was not just an accident. It served the interests of the status quo. For the ruling elite, a campus without a union is a campus without resistance. For the administration, it is calm without accountability. And for political parties, it is the end of a nursery that once produced leaders from working-class and backward backgrounds. Today, most prominent leaders from LU's student past—Brajesh Pathak, Pushkar Dhami, Ravidas Mehrotra, Arvind Gope—are from earlier decades. The system stopped producing new ones when it closed the gates on mass participation.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">What Does Silence Mean?</h2>
          
          <p>
            What does it mean for a public university to be silent? It means that the students are no longer political beings. They become individuals pursuing degrees, not citizens in training. It means that education is stripped of engagement. And that criminalization—which once justified the banning of elections—has actually won. Because it killed its only real opponent: democratic student politics.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Challenge Ahead</h2>
          
          <p>
            The challenge now is not just to restore the union. It is to reclaim politics. Not for a faction. Not for a party. But for a generation that has never voted for its own representatives, never seen a public debate, never been told that politics can belong to them too.
          </p>

          <p class="conclusion">
            Restoring that imagination is the real revolution.
          </p>
        </section>
      </div>
    `,
    image: "/luu.jpeg",
    author: authors.find(a => a.username === "captain-jack-sparrow")!,
    category: "university",
    date: "2025-06-18",
    readTime: "10 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Student Politics", "University", "Democracy", "Education", "Lucknow"],
    featured: true,
    isPublished: true,
  },
  {
    id: "operation-rising-lion-prequel-war",
    title: "OPERATION RISING LION: PREQUEL TO A FULL-SCALE WAR?",
    slug: "operation-rising-lion-prequel-to-a-full-scale-war",
    excerpt: "An analysis of Israel's Operation Rising Lion attack on Iran, examining the strategic implications and the potential for escalation in the Middle East.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          On June 13th, 2025, Israel launched Operation Rising Lion, a full-scale missile-based attack on Iran, targeting its nuclear and military facilities. This comes at a time when Israel is already at a full-blown kinetic conflict in the Gaza strip, and faces retaliation from its neighbours including Lebanon (through Hezbollah), Iran and large-scale condemnation from the world for violating the human rights of the Palestinians. This escalation raises critical questions about regional stability and the evolving nature of Israel's strategic stature.
        </p>
        <p>
          Apart from its boast of the capability to handle multiple conflicts at a time, the operation displays stark intelligence work by the Mossad.
        </p>
        <section class="article-section">
          <h2 class="section-heading">A prelude to the operation: What led to the attack?</h2>
          <p>
            Israel, with the initiation of Khameini's regime, has been walking on a sharp sword when it comes to Iran, both of them being rather adversaries to each other. Since around 1980, Tehran has repeatedly pledged to wipe Israel "off the map", and has invested a lot of time and energy to set up the 'The Axis of Resistance' consisting of various militias, including but not limited to the Houthis and the Hamas. Both the nations have been at conflict on and off.
          </p>
          <p>
            Israel has been at continued trial for dismantling the axis of resistance, Israel assassinated Ismail Haniyeh, the political head of Hamas, in Iran, the fall of the Assad regime also weakened the already weak Hamas, which have been continually hammered in the Gaza strip.
          </p>
          <p>
            The war has never been one sided, both the sides have exchanged fire time and again and have been at proxy wars since 1980, leaving little space for any diplomatic exchange. The US backed Israel has been fearless in launching operations at Iran, but this time, it was different, Operation Rising Lion was launched without the supervision, or lordship rather, of the United States, which has been infamous for fueling wars all over the world under the name of maintaining global peace.
          </p>
        </section>
        <section class="article-section">
          <h2 class="section-heading">The operation</h2>
          <p>
            Amid rising tensions, Iran was allegedly preparing to become a nuclear state. As of May 2025, the IAEA reported that Iran had amassed 409 kg of uranium enriched to 60% (a level just below weapons-grade) enough for approximately ten nuclear bombs if further enriched.
          </p>
          <p>
            Just a day before the strikes, the IAEA found Iran non-compliant with its nuclear obligations.
          </p>
          <p>
            Tel Aviv has long wished to not let Iran become a nuclear state, which would lead to an enhancement of issues on its borders. Iran, being the dissociating, rather irresponsible, theocracy that it is, would be at risk of using nuclear weapons for purposes not admired.
          </p>
          <p>
            The strikes had set their focus on the same lines. It was aimed at two targets, the Nuclear facilities and the Iranian top brass, Hossein Salami, the commander-in-chief of Iran's Islamic Revolutionary Guard and other commanders. The Israeli strikes targeted the main uranium facility at Natanz and ballistic missile sites.
          </p>
          <p>
            The operation decapitated the Iranian nuclear programme, reportedly killing four senior commanders and two nuclear scientists.
          </p>
        </section>
        <section class="article-section">
          <h2 class="section-heading">War of intelligence</h2>
          <p>
            The operation rising lion is not a day's work, nor a month's. It is years of planning and spy-work sewn into the final action. It is reported by Israeli media and anonymous officials that the Mossad had planted drone launching sites in Tehran in the course of several years, impeccably chalking out the attack with utter precision. Not limited to drone, the Mossad also planted high-precision guided weapons in open areas near Iran's surface-to-air missile batteries as well as weapon platforms inside civilian vehicles across Iran. This was accompanied with several sabotage missions by the Mossad.
          </p>
          <p>
            An official told the Times of Israel that the operation used "groundbreaking thinking, bold planning and surgical operation of advanced technologies, special forces and agents operating in the heart of Iran while totally evading the eyes of local intelligence."
          </p>
          <p>
            The attack happened in the heart of Iran, Tehran and the areas surrounding it, under the nose of the local administrations and the Supreme Leaders themselves, with none having a clue.
          </p>
        </section>
        <section class="article-section">
          <h2 class="section-heading">The America Side of things</h2>
          <p>
            With Donal Trump taking the MAGA or Make America Great Again mission more seriously than he takes the welfare of people and students in the nation, Israel was on its own in conducting the mission without the hand of their American overlords on its head. Though, the statement seems a little fogged by Trump's calls and 'advises' to Iran, where he warns Iran that "Israel's attacks will only get worse", he seems to move a little over to the Tel Aviv ground instead of sitting on the neutral fence he was earlier. In his first public comments since Friday's attacks, Trump said on his Truth Social platform that "there is still time to make this slaughter, with the next already planned attacks being even more brutal, come to an end."
          </p>
        </section>
      </div>
    `,
    image: "/voimi.jpeg",
    author: authors.find(a => a.username === "atulit-pandey")!,
    category: "international",
    date: "2025-06-18",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["International Relations", "Israel", "Iran", "Middle East", "Geopolitics"],
    featured: true,
    isPublished: true,
  },
  {
    id: "iit-kharagpur-drum-app",
    title: "IIT Kharagpur's DRUM App: Navigating Toward Cleaner Air for Urban Commuters",
    slug: "iit-kharagpur-drum-app-navigating-toward-cleaner-air-for-urban-commuters",
    excerpt: "In the fast paced world of urban India, where air pollution is an enduring threat to public health and quality of life, an innovative tech solution is coming to light from the IIT Kharagpur labs.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          In the fast paced world of urban India, where air pollution is an enduring threat to public health and quality of life, an innovative tech solution is coming to light from the IIT Kharagpur labs. The DRUM app, Dynamic Route Planning for Urban Mobility, assists commuters in selecting routes that may reduce their exposure to harmful pollutant emissions, thus providing them, in the broader sense, a breath of fresh air.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Addressing a Pressing Urban Health Crisis</h2>
          
          <p>
            Air pollution is not a mere nuisance factor for Indian cities; it is in fact a silent killer. Studies show air pollution contributes to 7.2% of deaths in the urban population per year, while high exposure can even result in a 5-year reduction in life expectancy. From the notorious smog in Delhi to heavy traffic in Mumbai, millions undergo threats to respiratory and cardiovascular health every single day. In the given scenario, DRUM's objective becomes very apparent: to inform the commuters of the healthier travel alternatives based on real-time air quality data.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">How DRUM Works: Technology at the Forefront</h2>
          
          <p>
            DRUM is distinct in that it gathers real-time air quality information from a combination of stationary and mobile sensors deployed in 22 Indian cities. By integrating this information into a rapid-routing algorithm (GraphHopper and Mapbox), the app considers not only the fastest or shortest path types, but also those that minimize pollution exposure. More precisely, the app gives the two-wheeler commuters, in particular, alternate route options considering:
          </p>

          <ul>
            <li>Shortest Route</li>
            <li>Fastest Route</li>
            <li>Least Air Pollution Exposure Route (LEAP)</li>
            <li>Least Energy Consumption Route (LECR)</li>
            <li>Balanced route suggested</li>
          </ul>

          <p>
            For instance, a bike rider in Delhi could be directed away from a very polluted corridor of traffic to a slightly longer but much cleaner alternative, on which he would reveal 40% less exposure compared to usual apps. This is, in essence, the key to flexibility.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">From the Simulations to Real Streets: Progresses and Challenges</h2>
          
          <p>
            Simulations in some major urban centres, including Delhi, kicked off the DRUM development. In these simulations, DRUM found that traditional route planning led to commuters being exposed with higher pollution in congested areas, and that DRUM's alternative routes consistently lowered that risk in simulated situations.
          </p>

          <p>
            Challenges are aplenty when it comes to real-life implementation. Air quality monitoring in India is primarily an unorganised sector, and many cities have sensor distribution only in a scanty manner. To counter this, DRUM makes use of a low-cost sensor system that can be deployed easily and crowdsources its data from users' mobile devices. However, the reliability of the data will be tricky to maintain, especially in the actual-time low pollution guidance.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Road Ahead: Expansion to Broader Coverage and Flexibility</h2>
          
          <p>
            With a view to customise predictive routing by anticipating pollution spikes and thereby providing proactive rerouting to users, some machine learning tools will also be developed in the near future. The expansion of services beyond two wheels to encompass either four wheels or pedestrians will increase the app's relevance across a much larger spectrum of urban commuters.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Contextualizing: What Makes DRUM Different?</h2>
          
          <p>
            While the innovations underpinning DRUM are impressive, it has entered a competitive field where global platforms like Google Maps are piloting features such as Air View+ for air-quality-based routing. Its advantage lies in its focus on Indian cities, flexibility based on local infrastructure, and opportunities for community involvement through sensor networks. In the end, massive uptake and integration of the platform with present mobility frameworks will lend credence to its impact.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Societal Impact: A Lifeline for the Vulnerable</h2>
          
          <p>
            If successful in its implementation, DRUM will go a long way to safeguarding the health of vulnerable populations such as children, the old, and those with chronic health conditions, preventing their exposure to pollution on the streets on a daily basis. Such mitigation would ease the financial load on the backdrop of India's healthcare system while also serving as a salient reference for other nations facing the ravages of urban air pollution.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Conclusion: Hope and Caution</h2>
          
          <p>
            DRUM marks a visionary and concrete step toward healthier and sustainable urban mobility in India. The combination of real-time data, smart flexible routing, and future-proofing takes on a whole new level of promise. But success shall largely depend on arriving at a compromise with limitation of data, attaining ease of use for the average user, and achieving the diverse uptake. After leaving the lab and entering its actual testing ground, the app is one of the few sources of inspiration for new ideas and methods to remember the difficult obstacles that cleaner air will face in the future.
          </p>
        </section>
      </div>
    `,
    image: "/ab.jpeg",
    author: authors.find(a => a.username === "abhinav-upadhyay")!,
    category: "sci-tech",
    date: "2025-06-19",
    readTime: "10 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Technology", "Environment", "Urban Development", "Air Pollution", "Innovation", "IIT Kharagpur", "Mobile Apps"],
    featured: true,
    isPublished: true,
  },
  {
    id: "where-have-all-the-daughters-gone-bihar-sex-ratio",
    title: "Where Have All the Daughters Gone? A Deep Dive into Bihar's Shrinking Sex Ratio",
    slug: "where-have-all-the-daughters-gone-bihar-sex-ratio",
    excerpt: "A critical look at Bihar's alarming decline in the sex ratio, exploring the cultural, social, and policy failures behind the crisis.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          Let's not mince words, something deeply wrong is unfolding in Bihar. The numbers are cold, but the implications are chilling. The state is quietly losing its daughters. Not to migration, not to education or opportunities elsewhere, but to a culture still steeped in son-preference, gender bias, and neglect. The data screams, but are we listening?
        </p>
  
        <section class="article-section">
          <h2 class="section-heading">The Numbers Don't Lie — But They Should Make Us Uncomfortable</h2>
          <p>
            Back in 2001, Bihar had 919 women for every 1000 men. A decade later in 2011? 918. Practically no change. But behold, the child sex ratio (girls aged 0–6 years) dropped from 942 to 935 during the same time frame.
          </p>
          <p>
            Fast-forward to 2022–23, that statistic now stands at 895 girls per 1000 boys. That's not a gap, that's a canyon. With the national average climbing to 933, Bihar's situation is the worst in India and is concerning to the core. While the world moves forward, we keep slipping back.
          </p>
          <p>The sex ratio at birth tells an even more brutal truth:</p>
          <ul>
            <li>964 (2020)</li>
            <li>908 (2021)</li>
            <li>891 (2022)</li>
          </ul>
          <p>Each year, fewer baby girls are born. And mind you, this isn't "just happening", it's being engineered. Discreetly, brutally.</p>
        </section>
  
        <section class="article-section">
          <h2 class="section-heading">What Makes Bihar Different, And Not in a Good Way</h2>
          <p>
            While states like Assam, Maharashtra, Gujarat, and even Haryana are starting to reverse their skewed ratios, Bihar seems stuck, or worse, sinking. Bihar is one of the only states where the sex ratio at birth is falling every single year.
          </p>
          <p>
            Even rural Bihar, which traditionally showed slightly better numbers, is no longer a haven. NFHS-5 data puts the rural sex ratio at birth at 903, versus 940 in urban areas. But before you cheer for urban progress, know this, it too fell from 940 to 934 in just five years.
          </p>
          <p>
            Districts like Rohtas and Buxar are case studies in collapse. Rohtas' child sex ratio fell from 885 to 872, and Buxar's from 962 to 886 between NFHS-4 and NFHS-5. In lay-man terms: fewer girls are surviving, or being allowed to be born.
          </p>
        </section>
  
        <section class="article-section">
          <h2 class="section-heading">This Isn't Just About Birth — It's About Beliefs</h2>
          <p>Let's call this what it is, a war against daughters. Not with guns, but with silence, preference, and institutional failure.</p>
          <ul>
            <li>Patriarchy? Check.</li>
            <li>Dowry fears? Check.</li>
            <li>Early marriage? Still rampant.</li>
            <li>Education gap? Still yawning, female literacy sits at 57.8% versus 78.5% for men.</li>
            <li>Child brides? Nearly 41% of young women are married before 18.</li>
          </ul>
          <p>
            These aren't just statistics. These are the everyday realities that are told to a daughter: "You're second-class. You're an expense. You're dispensable."
          </p>
          <p>
            And when parents still see sons as future breadwinners and daughters as liabilities, can we be surprised that prenatal sex selection is still rampant?
          </p>
        </section>
  
        <section class="article-section">
          <h2 class="section-heading">Let's Talk About the Scary Part — It's Not All Pre-Birth</h2>
          <p>
            You'd think the damage stops in the womb. But you'd be wrong. A UNFPA study tells us 65% of Bihar's "missing girls" die after birth. Neglect, undernourishment, lack of healthcare, it's slow violence, and it's killing our daughters silently.
          </p>
          <p>
            Yes, illegal ultrasounds still operate. Yes, raids are conducted (119 clinics were busted in 2023). But enforcement is patchy, and let's be honest, many doctors, technicians, and families simply don't care enough.
          </p>
        </section>
  
        <section class="article-section">
          <h2 class="section-heading">What's the Government Doing? Not Nothing, But Not Enough</h2>
          <ul>
            <li>Mukhyamantri Kanya Suraksha Yojana (₹2000 at girl's birth, but only for BPL families).</li>
            <li>Kanya Utthaan Yojana (₹25K after Class 12, ₹50K after college).</li>
            <li>Ananya Scheme (residential schools for SC/ST girls).</li>
            <li>Liquor ban, DDU-GKY, ASHAs, maternity schemes, and more.</li>
            <li>Plus, central schemes like Beti Bachao Beti Padhao have footprints in Bihar.</li>
          </ul>
          <p>But here's the bitter pill, the outcomes don't match the announcements. Despite these efforts, sex ratios keep dropping.</p>
          <p>
            Even the Chief Secretary tried to deny the CRS data, calling it an "error," instead citing unpublished caste census figures (953 females per 1000). But reality checks don't lie. Bihar had 3.07 million births in 2022. Of those? Just 1.31 million were girls. A gap of 1.6 lakh daughters.
          </p>
        </section>
  
        <section class="article-section">
          <h2 class="section-heading">So What's the Fix?</h2>
          <ul>
            <li><strong>Crack Down, Harder, Louder:</strong> Don't just raid illegal clinics. Publicize them. Name and shame them. Cancel licenses. Broadcast and project the message, louder and clearer than anyone's ever heard.</li>
            <li><strong>Link Cash to Outcomes:</strong> Don't just give ₹2000 for being born. Tie benefits to vaccinations, school retention, health check-ups, and enforce it.</li>
            <li><strong>Invest in Girls' Health:</strong> Girls shouldn't die because they're born. Prioritize their nutrition, postnatal care, and immunization. Bring health to the doorstep.</li>
            <li><strong>Make Girls Visible in Schools:</strong> Expand residential schools. Train and mentor. Delay marriage with education, not just awareness slogans.</li>
            <li><strong>Change the Culture, Not Just the Law:</strong> Start community dialogues. Involve mothers-in-law, teachers, and village leaders. Celebrate daughters publicly. Bihar's women deserve role models and recognition, not shame.</li>
            <li><strong>Transparency is Power:</strong> Make sex ratio data public. Track by district. Create dashboards. Let civil society, media, and voters see what's going wrong.</li>
            <li><strong>End Dowry, For Real:</strong> Not just a law on paper. Real convictions, real deterrents. Only then will daughters stop being seen as liabilities.</li>
          </ul>
        </section>
  
        <section class="article-section">
          <h2 class="section-heading">Because It's Not Just About Girls — It's About the Soul of Bihar</h2>
          <p>
            If we don't act, we're heading towards a future where men outnumber women by staggering margins — leading to trafficking, forced marriages, and unrest. This is not hyperbole. It's already happening in parts of Haryana and Punjab.
          </p>
          <p>
            And remember, this isn't destiny, This is a choice, a conscious, fully aware choice. Other states have pulled back from the brink and so can we.
          </p>
          <p>
            But only if we, as people, as parents, as policymakers — stop tolerating this silent erasure of our daughters.
          </p>
          <p>
            Because the real question isn't "where are the girls?" It's "why aren't we saving them?"
          </p>
        </section>
      </div>
    `,
    image: "/betii.jpeg",
    author: authors.find(a => a.username === "ansesveri-laxmi")!,
    category: "national",
    date: "2025-06-20",
    readTime: "12 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Sex Ratio", "Bihar", "Gender", "Society", "Women", "India", "NFHS", "Policy"],
    featured: true,
    isPublished: true
  },
  {
    id: "world-environment-day-hypocrisy",
    title: "World environment day hypocrisy",
    slug: "world-environment-day-hypocrisy",
    excerpt: "A critical essay on the performativity and contradictions of World Environment Day celebrations.",
    content: `
      <div class="article-content">
        <section class="article-section">
          <h2 class="section-heading">The Green Mask: World Environment Day Hypocrisy</h2>
          <p>
            Every 5th of June, timelines turn green. Twitter is flooded with recycled quotes on saving the world. Companies put up a leaf on top of their logos. Politicians make heartfelt speeches with vows of a greener tomorrow. Schools have poster-making competitions, and businesses plant saplings for a photo-op. For one day, the world appears to care.
          </p>
          <p>
            But when the lights go out and the hashtags disappear, reality bites back. Factories return to belching smoke. Single-use plastics reappear on supermarket shelves. Government schemes chop down forests for highways or industries. The saplings planted for a photo-op are left to wither. The promises are forgotten until next year.
          </p>
          <p>
            World Environment Day has, for most of us, become a ritual of convenience rather than a day of reckoning. It is a yearly show of concern for the environment, more theatre than substance. A PR show in green finery.
          </p>
          <p>
            Corporates are among the largest stakeholders in this green soap opera. Fast fashion giants speak of sustainability while globally churning out millions of inexpensive garments every day, which subsequently end up in landfills. Oil giants promote clean energy while still heavily financing fossil fuels. Beverage companies that produce billions of plastic bottles vow to clean the oceans. This isn’t commitment — it’s greenwashing.
          </p>
        </section>
        <section class="article-section">
          <h2 class="section-heading">Worshipped Rivers, Polluted Realities: India’s Environmental Irony</h2>
          <p>
            Governments are not blameless either. On World Environment Day, politicians deliver their grand speeches. But the same governments often sanction deforestation, downplay pollution data, and fall behind on climate action. India, for instance, talks of climate resilience while ramping up coal mining and approving large-scale infrastructure projects that cause irreversible environmental damage. According to climate action tracker, India's National Electricity Plan (2022) says it will increase its coal power capacity by 18-23% by 2031-32, meaning more coal power plants will be built. This is contradictory to what India promised during the COP26 Glasgow pact—which was to phase down coal use to fight change.
          </p>
          <p>
            In the name of development, forests are felled, wetlands are filled, and biodiversity is lost, such as the Mumbai coastal road project or the Char Dham highway.
          </p>
          <p>
            The state of India’s rivers is a bleak reflection of this hypocrisy. The Yamuna, even after repeated clean-up campaigns and crores of rupees spent on rejuvenation, remains one of the filthiest rivers in the country, often choked with toxic foam and untreated sewage. Delhi has spent 6,856.9 crore over five years – yet most stretches remain unfit for bathing with faecal contamination 500x over the desirable limit. Parliamentary panels, NGT, and Supreme Court have flagged ongoing pollution, underperforming STPs, and pointed out that even spending such a huge sum, the river is even dirtier than before. According to a report by the Central Pollution Control Board (CPCB), the level of faecal coliform bacteria in the Ganga and Yamuna at Prayagraj Sangam is far higher than the safe limit of 2,500 units per 100 ml of water. The Ganga, though revered as sacred, still carries industrial effluents and sewage, despite flagship initiatives like Namami Gange launched in 2014, with 30,000 crores having shown limited measurable improvement. Other rivers like the Mithi in Mumbai, the Musi in Hyderabad, and the Brahmaputra in Assam are no better, having been turned into dumping sites for chemical, domestic, and plastic waste.
          </p>
          <p>
            In theory, we honour our rivers. In practice, we contaminate them.
          </p>
          <p>
            Even individuals, including many well-meaning citizens, get trapped in performative activism. Posting something or marching somewhere is easy, but real change demands lifestyle change — less garbage, less conspicuous consumption, and rethinking transportation habits. In a world of instant content and fleeting trends, it is easier to post than to act — easier to signal concern than to shoulder the responsibility.
          </p>
          <p>
            Schools, ironically, are part of the problem too. Students are taught to create “Save Trees” posters using paper. Even in environmental events, plastic scraps and disposables are often used, revealing the irony. The subliminal message that environmentalism begins with routine individual and institutional responsibility is lost.
          </p>
        </section>
        <section class="article-section">
          <h2 class="section-heading">Beyond Hashtags: Turning Green Promises into Real Action</h2>
          <p>
            Environment Day’s contribution is largely confined to pixels and paper. It has become a day of edited articles and witty one-liners, a stage for the self-projection of a green image by institutions, influencers, and governments. The purpose seems more about mimicking awareness than truly creating it.
          </p>
          <p>
            The irony lies not in celebrating World Environment Day, but in reducing it to symbolism. The world does not need one day of love for the planet, but a lifetime of action and activism — not just by scientists and environmentalists, but by all stakeholders in society.
          </p>
          <p>
            What is to be done? First, acknowledge the hypocrisy. Name the problem. It is the first step toward a solution.
          </p>
          <p>
            Second, substitute PR with policy. Governments must implement environmental laws rigorously. Corporates must be held accountable for their carbon footprints and waste.
          </p>
          <p>
            Third, learning must go beyond events. Environmental consciousness should be integrated into curricula, encouraging not just the acquisition of knowledge but the development of sustainable habits. Finally, citizens must shift from passive learners to active habit-formers. Use less. Waste less. Question more.
          </p>
          <p>
            World Environment Day must not be the day we modestly pretend to care. It must be the day that reminds us to care every day, with awareness and responsibility. Until then, the green we wear on June 5 will remain just a mask, concealing the damage we inflict on all other days.
          </p>
        </section>
      </div>
    `,
    image: "/ne.jpeg",
    author: authors.find(a => a.username === "aliya-imam")!,
    category: "national",
    date: "2025-06-20",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Environment", "World Environment Day", "Greenwashing", "India", "Policy", "Activism", "Rivers", "Pollution"],
    featured: true,
    isPublished: true
  },
  {
    id: "romanticising-summer-break",
    title: "Romanticising the summer break:",
    slug: "romanticising-summer-break",
    excerpt: "Done and dusted with your semester exam? Let's not talk about results just yet (or ever). This summer break is well deserved after all that hard work.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          Done and dusted with your semester exam? Let's not talk about results just yet (or ever). All year long, we have juggled between assignments, classes, practicals, and exams! This summer break is well deserved after all that hard work.
        </p>

        <p>
          Well, this summer vacation should not be the one in which you are doom scrolling on Instagram while rotting in bed. To save you from all those traps, I'm here to help you make this vacay less boring and a lot more fun!
        </p>

        <p>
          A 1.5-month-long summer break isn't a teeny break, people!! If you have the intent to make it a fun and memorable one. The university will be all set to reopen by the mid of July. In the meantime, here are a few ideas to help you enjoy this break while still keeping things meaningful.
        </p>

        <section class="article-section">
          <h2 class="section-heading">A pocketful of things to try</h2>
          
          <p>
            <strong>Upskill yourself:</strong> If you're looking to enhance your skills or learn something new during the vacation, don't worry! YouTube is a fantastic (and free) resource to get started. However, if you're interested in more structured learning with certification, platforms like Udemy and Coursera offer a wide range of courses. Completing a course will provide you with a certificate that can boost your CV and showcase your commitment to personal development.
          </p>

          <p>
            <strong>Look for Internships:</strong> Now that you've brushed up your skills or are in the process of doing so, why don't you look for internships? There are many internships for college students these days, both paid and unpaid. You can find them on sites like Internshala, Upwork.
          </p>

          <p>
            <strong>Read more:</strong> Do you see the pile of books you have gathered? You collected all of it, thinking you would read them. Now it's time to dive right in! Reading is not only a great hobby but also helps broaden your perspective. It's always good to have something amazing to share in a convo "you know, I read this in XYZ book".
          </p>

          <p>
            <strong>Socialise more:</strong> If you are an extroverted person and you love going out, meeting people, well this is your time, to go places and meet people you have been putting off meeting because of your hectic college routine, maybe meet your old school friends, cousins, relatives. Don't just go out and sit there—try to engage, this is you romanticising your life. This is you bringing out the 'main character energy'.
          </p>

          <p>
            <strong>Try out journaling:</strong> This is a cliche I know, but cliches are cliches for a reason. Journaling is an amazing tool for self reflection with the academic calendar ending. Why don't you reflect on this past year—what worked, what didn't? Pen down beautiful memories you had this year, remember the Holi celebration at LU? It was so fun, a first for me definitely. Or the time we all rushed to the Anthro department to ask the professors to extend the assignment submission date because we had just discovered via a last minute WhatsApp forward that the submission was due in an hour (We got an earful, but the dates were extended—so, mission accomplished).
          </p>

          <p>
            <strong>Catch up on the sleep:</strong> Well, yes, you read that right, sleep? How is it productive? It is scientifically proven that sleeping is directly linked to enhanced memory and learning (checkout 'Why We Sleep' by Matthew Walker). Maybe it's to make up for all the sleep that you lost due to college, assignments and exams. Having said that, please note that oversleeping can also disrupt your body clock and affect energy levels.
          </p>

          <p>
            <strong>Building a routine:</strong> The best way to romanticise your life and this summer break is to have a routine, have a morning ritual as soon as you wake up, could be drinking a glass of warm water with lemon (trust me, all the hot girls are doing this) or setting the intention for the day ahead, anything which puts you in the driver's seat and make your romanticize the mundane things. Time blocking is proven to be a helpful time management tool. Use time blocking to schedule time for entertainment, social media, errands, etc. At last, end your day on a peaceful note because it improves the sleep quality. Don't doomscrolling on Insta until your eyes are hurting (note to self: P) instead, maybe read a good book, watch something soothing.
          </p>

          <p>
            A few days ago, I came across this video of a guy who was on a mission to "de-rot his brain rot". He explained how watching low-stimulation cartoons or videos can actually help reset your mind and reduce the effect of digital overload resulting in de rotting your brain rot. Maybe this can be your daily dose of nostalgia—Oswald is a good low-stimulation cartoon to start with (loved his dog!). And through these ways you can add a bit more structure to your day even in the summer break, so when the college reopens you don't have to worry about setting up your routine.
          </p>

          <p>
            <strong>Get your "movies-to-watch-before-I-die" list out:</strong> Do you remember saving 20+ movies on your watchlist, thinking "I'll watch it soon"? Maybe this vacation time is perfect for you to start watching them. With friends or family, how about a watch party? It's a great way to watch together virtually with everyone.
          </p>

          <p>
            <strong>How about a glow-up?</strong> Before the next academic semester begins, why don't you try out some new looks? Maybe experiment a bit with your hair, wear colours you would not normally wear (cmon, take that plunge). Who says glow-up is just physical? A glow-up can be mental, emotional, social and digital. So, which glow-up are you manifesting for yourself?
          </p>

          <p>
            <strong>Read LU Chronicles:</strong> You want to read the news, know what's happening in the world both internationally and locally, why don't you turn to your college newspaper, "The LU Chronicles"? They release articles every day! From international affairs to blogs, they have it all. This vacation time, if you want to have a mental glow up, LU Chronicles is just what you need (plus, the kids there have been working hard, including yours truly :P).
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Perfect Ending</h2>
          <p>
            Well, these were some of the many ways in which you can make the best out of this summer vacation time, but it's okay if you couldn't finish all of the books or are still lagging in the courses you enrolled in. Life's not a To Do List where all of the items needs to be ticked off, it's perfectly human to leave things in between because you realised it was not working out for you.
          </p>

          <p>
            And all that matters in the end is to have a fun vacation, which is different from your mundane college life.
          </p>

          <p>
            And once this vacay ends, let's meet in Gandhi park (or as we fondly call it PMP) so that you can tell me all about how you romanticized your summer break—while I tell you about writing this piece… even at 2:19 AM.
          </p>
        </section>
      </div>
    `,
    image: "/summer.jpeg",
    author: authors.find(a => a.username === "prerna-srivastava")!,
    category: "blogs",
    date: "2025-06-21",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Summer Break", "College Life", "Self-Improvement", "Lifestyle", "Student Life", "LU Chronicles"],
    featured: false,
    isPublished: true
  },
  {
    id: "yoga-through-ages",
    title: "Yoga through the ages: How India gifted the world a way of life",
    slug: "yoga-through-ages",
    excerpt: "On this 11th International Yoga Day, we move not just our bodies — but our consciousness, from mat to mind, echoing the theme: Yoga for One Earth, One Health.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          On this 11th International Yoga Day, we move not just our bodies — but our consciousness, from mat to mind, echoing the theme: Yoga for One Earth, One Health. Yoga is an ancient discipline that has evolved through spiritual, philosophical, and physical traditions. It focuses on harmonizing the mind and body. It is one of the six systems of Vedic philosophy. Maharishi Patanjali, known as the Father of Yoga compiled various aspects of Yoga in his book Yoga Sutras.
        </p>

        <section class="article-section">
          <h2 class="section-heading">The birth of Yoga</h2>
          <p>
            Archaeological evidence indicates that early forms of Yoga existed in the Indus Valley civilization, with the term "Yoga" first appearing in the Rig Veda. Key texts providing information about yoga practices include the Vedas, Upanishads, Smritis, and teachings from Buddhism and Jainism.
          </p>
          <p>
            The Classical period, from 500 BC to 800 C.E., marks a significant time in Yoga's development. The following era, from 800 to 1700 C.E., was influenced by figures such as Adi Shankaracharya and the Natha Yogis, who popularized Hatha Yoga practices.
          </p>
          <p>
            The Modern period, from 1700 to the present day, has seen significant contributions from Yogacharyas such as Ramana Maharshi, Ramakrishna Paramhansa, Paramhansa Yogananda, Vivekananda, B.K.S. Iyengar, Indra Devi, Sadhguru, and Baba Ramdev, who popularized Yoga among the masses.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Benefits</h2>
          <p>
            Yoga offers a variety of benefits which include but are not limited to:
          </p>
          
          <p>
            <strong>1. Physical:</strong> It enhances respiratory health, promotes healthy blood flow, maintains a healthy weight, increases flexibility leading to greater ease of movements, reduces physical tension, boosts the immune system, builds muscle strength, encourages restfulness, improves sleep quality, and alleviates chronic pain conditions like arthritis, migraine, etc.
          </p>

          <p>
            <strong>2. Mental and psychological:</strong> It lowers cortisol levels, reduces stress, and enhances cognitive clarity and mental resilience. It promotes a healthy body which leads to positive self-esteem and it also influences neurotransmitters like GABA, helping regulate mood.
          </p>

          <p>
            <strong>3. Emotional:</strong> It helps to connect with inner consciousness, promotes calmness and help release piled up emotional tension which contributes to happiness and overall well-being.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Conclusion</h2>
          <p>
            Yoga combines physical postures, breathing exercises, and meditation to create a holistic practice that benefits every aspect of a person's well-being. World Yoga Day serves as a beautiful reminder of its significance but its practice should not be confined to a single day of celebration. Its essence lies in consistent, daily practice.
          </p>
          <p>
            This yoga day, let's embrace yoga as an essential part of our journey towards a balanced life rather than merely remembering it as a day to create records and Instagram stories.
          </p>
        </section>
      </div>
    `,
    image: "/yoga.jpeg",
    author: {
      id: "14",
      name: "Trishla Chaudhary",
      username: "trishla-chaudhary",
      image: "/Trishla.jpeg"
    },
    category: "features",
    date: "2025-06-21",
    readTime: "6 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Yoga", "International Yoga Day", "India", "Wellness", "Health", "Meditation", "Ancient Wisdom"],
    featured: false,
    isPublished: true
  },
  {
    id: "why-wearing-lip-gloss-doesnt-mean-i-cant-still-be-your-boss",
    title: "Why wearing lip gloss doesn't mean I can't still be your boss",
    slug: "why-wearing-lip-gloss-doesnt-mean-i-cant-still-be-your-boss",
    excerpt: "From the moment a girl picks up lip gloss in one hand and a book in the other, the world starts glitching. Society loves its binaries - you can be pretty or smart, stylish or serious, soft or revolutionary.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          From the moment a girl picks up lip gloss in one hand and a book in the other, the world starts glitching. Society loves its binaries - you can be pretty or smart, stylish or serious, soft or revolutionary. Apparently, if your eyeliner is sharp, your intellect can't be.
        </p>

        <p>
          There's something about a swipe of gloss - the high shine, the flirt of reflection, the unapologetic femininity of it all - that seems to make men underestimate you. As if a tinted sheen on the lips means your words will be just as glossy, just as easy to wipe off. Our competence must come in a matte finish. Anything shiny looks suspicious. Anything Pink makes people nervous.
        </p>

        <p>
          Not scared, necessarily - though they should be - but dismissive. But why must ambition arrive in beige?
        </p>

        <p>
          From Simone de Beauvoir to Megan Thee Stallion, women have been proving - repeatedly, exhaustingly - that critical thinking and cosmetic preference are not mutually exclusive.
        </p>

        <p>
          I still remember the quiet dismissal I got my freshman year – that polite-smirk kind of condescension, the kind that said, "Oh, she's cute for trying." I walked into debates only to be dismissed before I spoke - but yeah I still won. And the best part? I didn't even smudge my lipstick.
        </p>

        <p>
          Turns out, underestimating a girl with lip gloss might be the oldest mistake in the book - and I've always had a thing for rewrites.
        </p>

        <section class="article-section">
          <h2 class="section-heading">The Lip Gloss Ceiling</h2>
          <p>
            There's always been this strange cultural panic that femininity dilutes authority. Women have long been expected to erase themselves to be accepted. We've been told to dress "appropriately," to speak in "measured tones," to lean in - but not too much. And for those of us who dare to decorate our intelligence? We're told to "tone it down."
          </p>

          <p>
            Because here's the unspoken rule no one wants to print in the brochure: masculinity is still the dress code of credibility. In classrooms, in courtrooms, in protests - the traits that signal "seriousness" are often coded masculine: control, neutral tones, the illusion of detachment. Meanwhile, femininity - emotional, aesthetic, expressive - is dismissed as frivolous.
          </p>

          <p>
            Scholar Rosalind Gill calls this the "postfeminist masquerade": a double-bind where femininity must be carefully curated to avoid being perceived as either threatening or trivial. You can be a boss, but only if you leave your lip gloss at home.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Elle Woods Was Not a Joke</h2>
          <p>
            Pop culture is sprinkled - no, strategically sequined - with archetypes who challenge this. Elle Woods (Legally Blonde) cracked Harvard Law in pink stilettos. Rory Gilmore, when she wasn't being tragic in Season 6, carried around Proust and perfect fits.
          </p>

          <p>
            But they were often treated as anomalies - the exceptions, not the rule. One-of-a-kind wonders who somehow managed to be smart despite being girly.
          </p>

          <p>
            What's radical now is not just celebrating these women, but recognizing that their "girlishness" didn't dilute their power. It amplified it. Their femininity wasn't a barrier to their ambition. It was a language - one of their own.
          </p>

          <p>
            And if we're being honest, patriarchy doesn't fear a woman who codes like a man. It fears a woman who codes her own language and refuses to translate.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Feminist Case for Being Girly</h2>
          <p>
            Let's be clear: choosing to be "girly" in a world that tells you not to is political. Femininity, when reclaimed on our terms, becomes resistance. Think Audre Lorde's insistence that self-care is political warfare. Think bell hooks writing about love as a radical force. Think about every girl who's been mocked for liking makeup but runs million-dollar businesses out of her bedroom.
          </p>

          <p>
            There is power in softness, if we stop mistaking it for weakness. There is rage in beauty, if we stop dismissing it as vanity. And beauty with brains? That's not a compliment- it's a cage made to sound like praise.
          </p>

          <p>
            We are not confused. We are not compensating. We are complex. And we're not interested in dismantling the master's house while cosplaying as the master. We want new blueprints. Ones with glitter margins.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">In Defense of the "Difficult" Women</h2>
          <p>
            I've always had a soft spot for the women everyone loves to hate. The "too much" girls. The "attention-seekers." The ones who are called dramatic, bossy, high-maintenance, fake, shallow, or dangerous - depending on which part of them made men feel small.
          </p>

          <p>
            Because if men are the ones writing the story, then of course women who take up space, who flirt with power, who cry loudly or walk in like they own the place - will be cast as villains.
          </p>

          <p>
            I loved the women who were mocked for being ambitious. For being pretty and outspoken. For wearing lipstick and wanting the last word.
          </p>

          <p>
            They were punished for being seen through the narrowest lens - one shaped by the male gaze and sharpened by internalized misogyny. 'Cause anything too emotional, too expressive, too loud, too pink? It didn't fit the frame.
          </p>

          <p>
            But I saw them and I learned from them. Because if the world hates a woman, chances are she knew exactly what she was doing.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">So What Now?</h2>
          <p>
            We stop apologizing. For the bows in our hair. For the softness in our voice. For the notebooks covered in stickers. For crying in public and quoting Judith Butler. For listening to Taylor Swift and reading Marx.
          </p>

          <p>
            We take up space - all of it. With our eyeliner sharp and our minds sharper. With lip gloss that doubles as war paint. With rage wrapped in tulle. With glitter that blinds the system.
          </p>

          <p>
            Because I'm not here to pick between being a girl and being a boss. I am both. And the world better get used to it.
          </p>

          <p class="conclusion">
            Sincerely,<br/>
            — Editor-in-chief, typing in lip gloss and logic
          </p>
        </section>
      </div>
    `,
    image: "/lipboss.jpeg",
    author: {
      id: "1",
      name: "Shumaila Khan",
      username: "shumaila-khan",
      image: "/Shumilaprofile.jpeg"
    },
    category: "Op-ed",
    date: "2025-06-22",
    readTime: "12 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Feminism", "Gender", "Leadership", "Society", "Women Empowerment", "Femininity"],
    featured: true,
    isPublished: true
  },
  {
    id: "india-beef-export-story-ethics-legality-cultural-debates",
    title: "India - The Beef Export Story: Ethics, Legality and Cultural Debates",
    slug: "india-beef-export-story-ethics-legality-cultural-debates",
    excerpt: "India is the most prominent exporter of buffalo meat also referred to as carabeef to the world, making it one of the major exporters of meat in the world.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          India is the most prominent exporter of buffalo meat also referred to as carabeef to the world, making it one of the major exporters of meat in the world. During the fiscal year 2023-24, India exported about 1.29 million metric tonnes worth of buffalo meat, which translates to about 3.74 billion U.S. dollars, or more than 82 per cent of its total export in animal products. But beef exportation of cows is still not permitted because of strict legal and cultural obligations.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Government Policies and Legal Framework</h2>
          <p>
            The state law has a stronger influence on whether India will export beef or not. It is stated in the Constitution that states have the power to regulate on cattle slaughter and preservation. Because of this, the slaughtering of cows, bulls and bullocks has a law that has been implemented by most states.
          </p>

          <p>
            The case of Gujarat that has strings attached as cow slaughter carries unimaginable sentences involving imprisonment to life imprisonment. On the contrary, states such as Kerala and West Bengal are less restrictive with controlled slaughtering of bovine animals.
          </p>

          <p>
            Export of meat is regulated by the Agricultural and Processed Food Products Export Development Authority (APEDA), which ensures that the meat-products satisfy the international standards. In 2021, APEDA had dropped the word Halal in its red meat manual reminding that animals need to be slaughtered to meet the requirements of the importing country. This action was geared towards the easing of exportation procedure and the objections of diverse stakeholders.
          </p>

          <p>
            A round table workshop conducted by APEDA and Department of Animal Husbandry and Dairying (DAHD) in June 2025 gave focus on improving the livestock export ecosystem of India. During the workshop, it was emphasized that strengthening of quality, disease prevention and accessing the market remain central activities to establishing India as a leading exporter of livestock in the world.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Cultural and Ethical Aspects</h2>
          <p>
            In India, the drive to consume beef is enveloped with beliefs and traditions. Cows are holy to the Hindus, Jains and the Buddhists and killing them is even seen as a crime against the principle of Ahimsa (non-violence). This devotion has resulted in a prevalence of the ban on cow slaughter in many states. On the other hand, other communities like Muslims and Christian are not bound by such religious proscriptions to beef and thus, may practice beef consumption creating a culture clash and even controversy about food diets.
          </p>

          <p>
            Animal rights groups such as Beauty Without Cruelty are against the killing of cows and require the proper treatment of every living organism. According to them, the life should be sacred, and moral issues should inform the consumption of food and farming.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Global Trade Dynamics</h2>
          <p>
            As you consider the dynamics of global trade, the exportation of buffalo meat by India is outstanding. During the first half of the 2024-25 fiscal year, the country exported predominantly carabeef to the markets in the Middle East, Southeast Asia, and Africa. Vietnam pioneered this with Egypt, Malaysia and Iraq following. Indian buffalo became a standard pick in those areas because of price and quality.
          </p>

          <p>
            According to the United States Department of Agriculture (USDA), beef production in India which amounted to 4.57 million metric tonnes in 2024 is poised to reach 4.64 million metric tonnes in 2025 due to the robust levels of domestic and exports demand. That future expansion illustrates how critical India is to the overall meat trade.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Balancing Ethics, Legality, and Trade</h2>
          <p>
            In case you read or heard the story on India exporting beef, you will observe how all these components, ethics, law, and trade act and come to a clash in a single headline. On the one hand, an export of cow meat remains prohibited due to legal and ethical reasons. In one side, buffalo meat continues to chalk up sales with the government endorsement and robust demand abroad.
          </p>

          <p class="conclusion">
            All this makes the debate active: India must consider a balance of the numerous voices on its soil and the rest of the world in the event it wishes to have a meat-export industry that is both peaceful and sustainable.
          </p>
        </section>
      </div>
    `,
    image: "/beef.jpeg",
    author: {
      id: "2",
      name: "Hetal Kothari",
      username: "hetal-kothari",
      image: "/Hetal.jpeg"
    },
    category: "International",
    date: "2025-06-22",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Beef Export", "India", "Trade", "Ethics", "Culture", "Agriculture", "International Trade"],
    featured: false,
    isPublished: true
  },
  {
    id: "musk-vs-trump-clash-tech-politics-markets",
    title: "Musk vs. Trump: A Clash of Tech, Politics and Markets",
    slug: "musk-vs-trump-clash-tech-politics-markets",
    excerpt: "In late May 2025, Elon Musk stood with President Donald Trump in the Oval Office – a partnership that soon spectacularly unraveled. Public threats and insults became their forte, with veiled barbs traded between them.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          In late May 2025, Elon Musk stood with President Donald Trump in the Oval Office – a partnership that soon spectacularly unraveled. Public threats and insults became their forte, with veiled barbs traded between them. While Musk toyed with the thought of impeaching Trump, he warned that he could repeal "billions and billions" in state subsidies and contracts for Musk's companies. An open, friendly alliance between him, the world's richest man, and the U.S. President, turned sour into a social media melee and fair-game spectacle for news outlets across the world.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Media and Political Significance</h2>
          <p>
            Today, the media-driven politics reflect in Musk's feud with Trump. Analysts noted that Trump suddenly dropped all mentions of Musk from his communication strategy-he used to praise him every week beginning early 2025 but up to now, April, did not mention him even once. A recent analysis by Politico shows that Trump aides and fundraising emails have almost completely stopped invoking the name Musk, once considered a prized right-wing celebrity asset. Public polling reflects this shift: voters now hold a far lower view of Musk than of Trump. The very same kind of commentators tend to call this event worrisome or toddler-like. NPR's Kara Swisher ripened such a comment with the world's most powerful and richest men publicly squabbling like girls on the playground. In short, how personal alliances among political and tech elites can shape news cycles and influence public discourse is what this episode suggests.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Economic and Market Impacts</h2>
          <p>
            Initial reaction from financial markets was rather stark as the argument developed. On June 5, 2025, Tesla stock dropped approximately 14-15%, wiping out nearly $150 billion from the company's market valuation, in a single day. Analysts warn that if this fight continues, Musk "could lose billions," with an effect potentially across all businesses. Tesla's visionary agenda had plans like the self-driving "robotaxis" launch jeopardized: of course, the stock had reached quite a peak on the promise of that rollout only to skid to rest in a 14% decline amid the melee. Tariff clashes and slashes of the U.S. electric-car tax credits, a leading sales stimulus for Tesla vehicles, have also been cited as at least partly resulting from the fallout. Noted one analyst, "Tesla's recent rise was almost entirely driven by robotaxi enthusiasm," and "Musk's war of words with Trump could be a negative."
          </p>

          <p>
            In addition to Tesla, SpaceX may raise concerns because of the statements from the Trump administration. The fact that Trump hinted at canceling SpaceX NASA contracts worth several billions of dollars in launches and ISS missions got Musk thinking that he would retire the only U.S. vehicle to reach the space station - SpaceX's Dragon capsule - but he backtracked quickly. On the same line, the satellite Internet venture Starlink is part of Musk's interests and won important international deals under Trump: some, like India and the Middle East, were highlighted among others during Trump's foreign trips, with uncertainty as to whether the new tensions will endanger them. Even the media platform X (formerly Twitter) seems to be entering the fray: big advertisers had begun to return to X after having fled because of Musk's "relaxed" content rules, but strategists warn Trump's turning against X could again make it "politically radioactive" for brands.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Tech, Business and Politics</h2>
          <p>
            The Musk–Trump episode illustrates the tangled web of tech with politics. Musk became special adviser to the White House, Trump appointing him to head the new Department of Government Efficiency one day a week, thus showing how a tech CEO could become part of government insiders. Ironically, much of Musk's estate exists on government support, entering through airways and Internet satellites to obtain necessary licenses and contracts; cars enjoy tax credits, while Tesla earns hundreds of millions selling regulatory "carbon credits" to rivals. Analysts argued that such a big noise from Musk about "government pork" despite the fact that his companies remain heavily dependent on largesse of the government. Now, regulators might use that dependence: for example, the National Highway Traffic Safety Administration has already probed Tesla's Autopilot software and observers note that Trump could pressure agencies to scrutinize Tesla's driverless-car plans more closely. Summarizing, the showdown stresses how a tech billionaire's policy stance could incite political backlash - and vice versa. As an investor pointed out: "billions of dollars of government contracts are at stake" when the richest person and the most powerful leader collide.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Public Narrative and Reactions</h2>
          <p>
            Public reactions mirrored the hard turn in media coverage. Most Trump supporters and party figures cooled off on Musk following the onset of that feud. According to a recent poll cited by Politico, Musk's approval rating seems to have dropped across demographic lines as Democrats try to portray him as "politically toxic" to their base. Social media was divided over party lines, with liberals posting memes of a grumpy Trump railing at a smirking Musk and with conservatives ridiculing Musk for being ungrateful. The traditional media took the spat as a parable; opinion writers sounded warnings against unaccountable influence of tech billionaires in political affairs; not one of them came out especially good from the fray. Inside some parts of Congress, some Republicans privately admit they "miss" having Musk as an easy talking point, while Democrats seized on Musk's insults (including unfounded claims about Trump in the "Epstein files") to fundraise and campaign. Throughout the entire battle, both sides have fought to claim the moral high ground- Trump as the wounded leader under attack, Musk as the principled entrepreneur"-virtually a potent battleground for 24/7 news.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Conclusion</h2>
          <p>
            The Musk–Trump feud transcended personal disagreement to become something greater. Mid-June saw Musk express public regret about his extreme posts while private efforts attempted to soothe tensions. The episode creates an indelible impression according to observers. The intricate connections between Silicon Valley and Washington emerged clearly through private Pentagon briefings alongside space contracts while social media platforms transformed into political megaphones. The implications extend from short-term market disruptions to prolonged political shifts. The Musk–Trump saga represents an intricate examination of the intersection between billionaire wealth, social media dominance, and governmental power which have consequences that stretch far beyond the personal lives of these two powerful figures.
          </p>
        </section>
      </div>
    `,
    image: "/trumpelon.jpeg",
    author: {
      id: "7",
      name: "Abhinav Kumar Upadhyay",
      username: "abhinav-upadhyay",
      image: "/Abhinav Kumar Upadhyay .jpeg"
    },
    category: "International",
    date: "2025-06-23",
    readTime: "15 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Elon Musk", "Donald Trump", "Politics", "Technology", "Business", "Markets", "Tesla", "SpaceX"],
    featured: true,
    isPublished: true
  },
  {
    id: "india-4th-largest-economy-or-is-it",
    title: "INDIA IS THE 4TH LARGEST ECONOMY OR IS IT?",
    slug: "india-4th-largest-economy-or-is-it",
    excerpt: "In the bustling streets of chowk, Raju, a chikankari artisan sells his art, rather struggling to make ends meet. But on May 25th, 2025, the national thinking conglomerate, NITI Aayog, officially announced that India had surpassed Japan to become the fourth largest economy in the world.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          In the bustling streets of chowk, Raju, a chikankari artisan sells his art, rather struggling to make ends meet. But on May 25th, 2025, the national thinking conglomerate, NITI Aayog, officially announced that India had surpassed Japan to become the fourth largest economy in the world, leaving only Germany, China and the USA ahead of it now. The IMF, in its report, recognizes this feat and projects that it will be in third place by 2028. This nation, that is now a $4.3 trillion economy was not always so, it has viewed hardships and bumps innumerable.
        </p>

        <section class="article-section">
          <h2 class="section-heading">India's journey through the years</h2>
          <p>
            India, a relatively young nation, grew at unprecedented rates, becoming the fastest growing nation in the world at present. The transformation from a purely agricultural economy to a multi-faceted techno-agricultural economy was not always a cake walk, neither for the authorities nor the masses. Several events shaped the India that it is today.
          </p>

          <p>
            With the newly-gained independence, we came up with Five-year plans and they were successful indeed, but changing times demanded transformation. Shastri's term came with the textbook ideal of a farming revolution, the Green Revolution. Now, it was finally time that the long-exploited soil could be rejuvenated and the yield be regained through correct manure usage and HYV seeds, giving a large-scale boost to the agri economy, enhancing the farmers' income by as much as 70%!
          </p>

          <p>
            There even came a time when India had to keep 67 tons of gold as a security reserve in the UK and Switzerland. Events like these impeded growth but acted as mirrors to the lawmakers, pleading for change and signifying that old methods don't respond now, it was time for turning tables. In 1991, under Shri Manmohan Singh's supervision, the long followed 'License Raj' was finally done away with, and hence, came the era of private players to step into act and privatization, alongwith government support, became the norm, economic liberalization was the grand idea. Tariffs and interest rates were reduced, and the public monopoly eventually ended.
          </p>

          <p>
            The economy kept giving the legislators reminders for change. The great recession of 2008 is a live example of it. The demonetisation of 2016 can never be excluded from the history of the Indian economy, it was a landmark act marking the end of currency notes, though leading to a little distress but held in itself, potential for curbing widespread and generational corruption that prevailed in the country.
          </p>

          <p>
            The pandemic came with worldwide recession, and India was hit indifferently, what was different was the comeback, stronger, quicker and more robust than ever. The country soon stood back on its feet and displayed growth unprecedented, going on to become the fastest growing nation in the world. Now, to note here is the fact that this all comes in a war-torn world where the global economy is moving towards recession, and the global trade is staggered.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Where does this place us on the global stage?</h2>
          <p>
            Climbing the economic ladder enables opportunities, those of growth, of recognition and of investment. It provides us with powers, hard and soft, and capabilities, to provide for our citizens, a superior quality of life. The economic enhancement opens doors for higher foreign investments, giving boost to private and public sectors alike, hence, more cash!
          </p>

          <p>
            Becoming the 4th largest economy comes with its set of perks. It gives the nation an upper hand in global influence and increased representation in inter-governmental organisations like the G20, BRICS, so on and so forth, leading to the strengthening and widespread of the Indian vision of the world.
          </p>

          <p>
            Although India has overtaken Japan to become the world's fourth-largest economy by nominal GDP, a closer look reveals that this headline achievement is only part of the story. There are loopholes bigger than Pune potholes in the whole story.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">How much are people earning on ground zero?</h2>
          <p>
            India's per capita income remains far below that of Japan. India's per capita income is currently around $2,730, with projections to rise by $2,000 over the next five years potentially reaching $4,700 by the end of the decade. In contrast, Japan's per capita GDP stands at approximately $33,955. This implies that an average Japanese citizen earns over 12 times more than the average Indian.
          </p>

          <p>
            This probably is an indicator that below the cape of Nominal GDP, there is no superman as such, and living standards are not at zenith as that of the economy we boast to be.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Why the India-Japan Comparison Is Misleading: Is it the full story?</h2>
          <p>
            Between the mid-1990s and 2023, Japan's nominal GDP declined from $5.3 trillion to $4.2 trillion. During this time, the Indian economy was growing rapidly, and the nominal GDP more than doubled. Hence, it's not a fair comparison between two growing economies. It is a comparison between a growing and a stagnating economy.
          </p>

          <p>
            India's growth is fueled by a large, youthful population, rapid urbanisation, and ongoing structural reforms. Japan's growth is constrained by demographic decline and a saturated market.
          </p>

          <p>
            Japan invests over 3% of its GDP in R&D, but faces declining patents and productivity. India invests just 0.64% of its GDP in R&D, but is making strides in digital innovation and infrastructure.
          </p>

          <p>
            At present, stark wealth inequality persists in India with the top 1% owning 40.1% of the country's total wealth. In simple words, just a handful of Jack Sparrows possess the majority of dirt jars.
          </p>

          <p>
            In addition to this, India faces significant infrastructure challenges, including road quality, electricity reliability, and digital connectivity. Only 24% of rural households have internet access, compared to 66% in urban areas, creating a pixelated iron wall that limits economic opportunity and social mobility.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">What lies ahead?</h2>
          <p>
            For India to become to have a holistic development, it must address its structural weaknesses:
          </p>

          <ul>
            <li><strong>Boost per capita income and reduce inequality:</strong> Economic growth must translate into higher wages and better living standards for all.</li>
            <li><strong>Invest in infrastructure:</strong> Improving roads, electricity, and digital connectivity is essential for inclusive growth.</li>
            <li><strong>Reform education and skill development:</strong> Aligning education with industry needs will help create a future-ready workforce.</li>
            <li><strong>Increase R&D and innovation:</strong> Higher investment in research and private sector participation is critical for technological leadership.</li>
            <li><strong>Create quality jobs:</strong> The economy must generate enough skilled employment to absorb its growing workforce.</li>
          </ul>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Growth Beyond Numbers: India's Real Test of Progress</h2>
          <p>
            Amazingly, India has become the fourth-largest economy in the world. But does this success affect every citizen? This celebration seems far away to Raju, who hears the news while juggling two meals a day, whose first sale of the day—his bouni—often doesn't happen until 6 PM. It reminds us that even though we've come a long way, much more needs to be done. The true fruit of this success will be when even Raju can sit comfortably in his showroom, take the right price for his art, and analyse and discuss where the economy needs more work. That day, my readers, will we say that INDIA IS A LEADING WORLD ECONOMY.
          </p>
        </section>
      </div>
    `,
    image: "/eco.jpeg",
    author: [
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
      }
    ],
    category: "Business",
    date: "2025-06-23",
    readTime: "12 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["India", "Economy", "GDP", "Japan", "Development", "Inequality", "Infrastructure", "Business"],
    featured: true,
    isPublished: true
  },
  {
    id: "nam-modern-era",
    title: "NAM in the Modern Era: A Timeless Strategy in a Changing Global Order",
    slug: "nam-modern-era-timeless-strategy-changing-global-order",
    excerpt: "The policy of non-alignment has been the foundation of India's foreign policy. When India gained its independence in 1947, the world was divided into two blocs on an ideological basis and geopolitical rivalry, the communist bloc led by the former USSR and the capitalist bloc led by the USA.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          The policy of non-alignment has been the foundation of India's foreign policy. When India gained its independence in 1947, the world was divided into two blocs on an ideological basis and geopolitical rivalry, the communist bloc led by the former USSR and the capitalist bloc led by the USA. In such a situation during the Cold War, India's first Prime Minister, Jawaharlal Nehru, envisioned a foreign policy that would protect sovereignty, promote economic development, and territorial integrity as many newly independent countries became battlegrounds for the Cold War conflicts.
        </p>

        <section class="article-section">
          <h2 class="section-heading">The development of non-alignment in India's foreign policy</h2>
          <p>
            In 1954, Nehru articulated the "Panchsheel" (Five Principles of Peaceful Coexistence), which became the bedrock of non-alignment:
          </p>
          <ul>
            <li>Mutual respect of territorial integrity and sovereignty.</li>
            <li>Mutual non-aggression.</li>
            <li>Mutual non-interference in domestic affairs.</li>
            <li>Equality and mutual benefit.</li>
            <li>Peaceful coexistence</li>
          </ul>
          <p>
            In the 1960s-1980s, India changed its idealism to pragmatism with a strategic tilt towards the Soviet Union as the USA aligned with Pakistan in the Indo-Pak war (1965,1971).
          </p>
          <p>
            With the collapse of the Soviet Union in 1991, India reoriented towards multi-alignment engaging with all major powers and pursuing core principles of promoting economic growth, and ensuring national security.
          </p>
          <p>
            In contemporary times, India engages in issue-based alignments, partnering with different powers based on its national interests.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">How Non-Alignment policy has helped in times of crisis</h2>
          <p>
            While India has been criticized by others for taking inconsistent stances and contradictory positions, NAM has served our interests very directly. It allowed us to make international decisions that served our interests rather than that of the superpowers and we have been able to balance one superpower against the other. It is not about isolationism or neutrality as India plays an active role in mediating and works to prevent war between others.NAM has allowed India the privilege of walking on eggshells as contradictory to global norm of running on the multi-edged sword.
          </p>
          <ul>
            <li>It helped to preserve sovereignty by staying out of military blocs like the Warsaw Pact or NATO and allowed it to focus on development rather than militarization.</li>
            <li>It allows us to take military and economic assistance which is important as India is still a developing country.</li>
            <li>The inherent flexibility allows us to make decisions based on economic pragmatism and adapt our foreign policy to changing global dynamics.</li>
            <li>It helps in advocating for the rights and interests of the Developing World (Global South) as the majority of its members are from developing countries.</li>
          </ul>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Conclusion</h2>
          <p>
            The non-alignment policy has evolved into a doctrine of multi-alignment and continues to serve by protecting India's national interest, safeguarding its sovereignty, maintaining its strategic autonomy, and playing a positive role on the global stage. In a world marked by rising conflicts and global divisions, India's legacy of non-alignment stands as a vital strategic asset and a guiding principle for its foreign policy. Today, more than ever, reaffirming non-alignment—not as passive neutrality but as a forward-looking, independent foreign policy—is both timely and essential.
          </p>
        </section>
      </div>
    `,
    image: "/nam.jpeg",
    author: [
      {
        id: "14",
        name: "Trishla Chaudhary",
        username: "trishla-chaudhary",
        image: "/Trishla.jpeg"
      }
    ],
    category: "International",
    date: "2025-06-24",
    readTime: "6 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["NAM", "India", "Foreign Policy", "International Relations", "Geopolitics"],
    featured: true,
    isPublished: true
  },
  {
    id: "pride-at-lu-appeal-to-be-seen",
    title: "Pride at the University of Lucknow: An Appeal to Be Seen",
    slug: "pride-at-university-of-lucknow-appeal-to-be-seen",
    excerpt: "As an openly non-binary, pansexual individual who was assigned the gender of a man at birth — with long curly hair, wearing makeup, and politically active — I have come to realise that my existence itself is an intervention in the everyday violence of the University of Lucknow.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          As an openly non-binary, pansexual individual who was assigned the gender of a man at birth — with long curly hair, wearing makeup, and politically active — I have come to realise that my existence itself is an intervention in the everyday violence of the University of Lucknow.
        </p>

        <p>
          I won't sugarcoat it: the University of Lucknow is not a progressive space. There are days when I walk across the campus and from between large groups of boys, someone shouts “chakka” or “hijra” at me. It's always someone, always hidden among many. These boys are not a one-time encounter. They are the most active presence on this campus. They roam around like they own the space — and in many ways, perhaps they do. They moral police couples, disrupt cultural events, openly fight in front of the police and administration, and there’s never any consequence. None. These boys are not just students — they are the living face of the deep, rooted patriarchy that controls and defines this institution.
        </p>

        <section class="article-section">
          <h2 class="section-heading">Beyond the Enemy</h2>
          <p>
            However, if we see them only as the enemy, we miss the full picture.
          </p>
          <p>
            Most of these boys are not from Lucknow. Many of them come from rural or poor backgrounds, where the pressure on them is immense. Their families send them to the university with one hope — that they will get a job and bring the family out of crisis. But look at the job market — it’s broken. Shrinking. Merciless. And what does this university offer them in return? Is there space here for self-development? Is there community? Is there dignity?
          </p>
          <p>
            There isn’t. So what they find instead is a sense of identity, purpose, and belonging — not in books, or classrooms, or debates — but in collective aggression. They find self-worth in silencing women, targeting the vulnerable, policing morality, and asserting dominance through harassment. It is a tragic irony — those who are themselves abandoned by the system are turned into its foot soldiers.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Visible and Invisible Rot</h2>
          <p>
            But that’s still only the visible layer of the rot. Behind all this is something far more sinister: the complicity of the state and the university administration. These institutions are not failing these students — they are actively using them. The political groups and criminal networks that operate on campus — they don’t just tolerate the violence of these student groups, they feed off it. And the university? It looks the other way. Sometimes, it nods in approval.
          </p>
          <p>
            In the middle of this, women shrink. To survive, they shrink. They walk faster. They speak less. They stay only where they must. Because they have to. And when the space for women is like this, what happens to people like me — queer people?
          </p>
          <p>
            I’ve been here a while. I meet new students every day. I’m a student activist. But not once have I met someone who openly identifies as queer. It’s not because they don’t exist. They do. We do. But we make ourselves invisible. Because it’s not safe. Because to be visibly queer in a space like this is to live with the constant fear of being hounded, harassed, or worse. So we pass — as normal, as masculine, as straight — just to get through the day.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Pride Was Never Meant to Be Quiet</h2>
          <p>
            Pride was born out of protest — not in celebration, but in bricks thrown at police by trans women and queer people at Stonewall. Pride is not a festival — it is an uprising. And it must remain so, especially here. At the University of Lucknow, where patriarchal violence walks in broad daylight and the administration walks past it silently, Pride must not be reduced to visibility alone. It must become a demand to reclaim space. It must break the monopoly of who gets to walk freely, who gets to laugh out loud, who gets to wear what they want, love whom they want, and exist in their own skin — without fear.
          </p>
          <p>
            In a campus where physical space is controlled by patriarchal muscle and administrative complicity, where the corridor is not just a corridor but a minefield for anyone who does not conform, Pride is revolution. It is about showing ourselves not because it is safe to do so — but because not showing ourselves only makes them stronger. We do not appear after the fear is gone — the fear begins to disappear when we show up.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">This Is a Call to Fight</h2>
          <p>
            To all students of the University of Lucknow — I appeal to you: Think. Reflect. Then act. Push back against this fear that has been drilled into us. Show yourself. Take up space. Speak louder. Love who you want. Dress how you want. Take your time. Let go of shame.
          </p>
          <p>
            Because Pride, in places like this, is not about celebration— it is about survival. And about revolt.
          </p>
          <p>
            Let us revolt — not alone, but together.
          </p>
        </section>
      </div>
    `,
    image: "/seen.jpeg",
    author: [
      {
        id: "15",
        name: "Captain Jack Sparrow",
        username: "captain-jack-sparrow",
        image: "/Shantam.jpeg"
      }
    ],
    category: "Op-ed",
    date: "2025-06-24",
    readTime: "5 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Pride", "LGBTQ+", "University of Lucknow", "Activism", "Student Life", "Queer", "Op-ed"],
    featured: true,
    isPublished: true
  },
  {
    id: "you-cant-self-care-your-way-out-of-late-stage-capitalism",
    title: "You Can’t Self-Care Your Way Out of Late-Stage Capitalism",
    slug: "you-cant-self-care-your-way-out-of-late-stage-capitalism",
    excerpt: "I lit a candle that smells like neoliberalism, poured myself a mug of herbal delusion, and tried deep breathing through the existential dread of unpaid internships and overpriced therapy. They told me self-care would save me. Turns out, all it saved was capitalism’s conscience.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          I lit a candle that smells like neoliberalism, poured myself a mug of herbal delusion, and tried deep breathing through the existential dread of unpaid internships and overpriced therapy. They told me self-care would save me. Turns out, all it saved was capitalism’s conscience.
        </p>
        <p>
          This is your gentle reminder - the kind that sounds like a war drum - that you can’t meditate your way out of a system built to exhaust you. You can't face-mask away the fact that rent has outpaced reality. You can't lavender-oil your way past burnout when the burnout is the point.
        </p>

        <section class="article-section">
          <h2 class="section-heading">The Origins of the Self-Care Industrial Complex</h2>
          <p>
            Let’s rewind. When Audre Lorde wrote in her 1988 book A Burst of Light “Caring for myself is not self-indulgence, it is self-preservation, and that is an act of political warfare” she was speaking as a Black, queer, chronically ill poet in a society that denied her rest, dignity, and survival. Her notion of self-care was radical - a tool for resistance in a world trying to erase her.
          </p>
          <p>
            Fast forward to 2025, that quote is now plastered on tote bags sold for ₹1,999 by corporations that underpay their women workers in Bangladesh where 80% of garment workers earn below a living wage. The radical has been repackaged as retail.
          </p>
          <blockquote class="border-l-4 border-gray-500 pl-4 italic my-4">
            We’re encouraged to light candles while the world burns.
          </blockquote>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Even Exhaustion Isn’t Equal</h2>
          <p>
            Caste, patriarchy, and racism determine who gets to rest and who is worked to the bone. These systems don’t just oppress - they structure who carries the heaviest burdens of burnout. For example, in India, Dalit and Adivasi women are disproportionately represented in the most precarious, underpaid, and exploitative forms of labor, from sanitation work to garment factories — roles where rest isn’t a right but a risk. Globally, Black and Indigenous women, migrant workers, and queer communities face similar patterns, working longer hours in harsher conditions with fewer protections.
          </p>
          <p>
            A corporate executive sipping turmeric lattes at a wellness retreat isn’t practicing the same “self-care” as a Dalit woman navigating caste and gender violence, or a gig worker juggling multiple jobs to survive. Rest looks different when you’re safe, when your survival isn’t at stake.
          </p>
          <p>
            This is why the politics of care must remain intersectional. The idea that we can solve burnout through lifestyle choices alone erases how capitalism, casteism, racism, and patriarchy combine to keep rest out of reach for the most marginalized. Real self-care isn’t a luxury product; it’s the fight for a world where dignity, rest, and healing aren’t commodities, but rights.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Business of Your Burnout</h2>
          <p>
            Capitalism has a genius for turning your pain into profit. It sells you exhaustion and then markets supplements to cure it. The gig economy - where over 7.7 million Indians now work, often without labor protections - destabilizes your attention span with algorithmic dopamine hits, and then tells you to unplug at a ₹3,000 digital detox retreat.
          </p>
          <p>
            This isn’t self-care. It’s sedation. A glossy pause button on a system that’s eating us alive.
          </p>
          <p>
            Meanwhile, billionaires do yoga on yachts. Wellness influencers sell $80 “charged” moon water while gig workers fall asleep on night buses. Therapy is locked behind a paywall - in India, only 0.75 psychiatrists are available per 100,000 people, (WHO, 2023), far below the recommended standard with costs that put private therapy out of reach for most. Rest is a luxury. And everything that once meant healing - community, art, time - has been redesigned to turn a profit.
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">Burnout Is Not a Personal Failure</h2>
          <p>
            What’s sinister is how late-stage capitalism reframes structural issues as personal shortcomings.
          </p>
          <ul class="list-disc list-inside my-4">
            <li>Struggling to keep up? Try a productivity planner.</li>
            <li>Can’t afford rent? Maybe you should budget better.</li>
            <li>Anxious and disconnected? You just need more “me time.”</li>
          </ul>
          <p>
            This language makes burnout feel like a failure of character, not the consequence of exploitative systems. But here’s the truth: no one can "optimize" their way out of precarity. No matter how many vision boards you create, you can't manifest your way into affordable housing or labor protections.
          </p>
          <p>
            A 2024 BCG study found 48% of workers worldwide report burnout symptoms, with rates spiking to 62% in India and 61% in Japan, where overwork culture remains deadly (BCG, 2024). In the U.S., burnout costs the economy $300 billion annually, while in Europe, countries like Poland report burnout levels as high as 70% (BCG, 2024; Statista, 2023).
          </p>
        </section>

        <section class="article-section">
          <h2 class="section-heading">The Right to Rest.</h2>
          <p>
            Of course, rest is essential. Of course, taking care of yourself matters. But self-care, as it’s been co-opted, often becomes another burden - another should. And it’s always uneven.
          </p>
          <p>
            Let’s be clear: You deserve care. You deserve slow mornings, nourished bodies, and lives not dictated by deadlines. But let’s not confuse survival hacks with liberation. The face mask won’t protect you from burnout. The scented candle won’t unionize your workplace. The five-step skincare routine won’t dismantle a system that profits from your insecurity.
          </p>
          <p>
            We don’t need more bath bombs. We need better labor laws. We don’t need more “quiet quitting” think pieces. We need to loudly demand structural change.
          </p>
          <p>
            So go ahead - drink that tea. Nap unapologetically. Journal like your future depends on it (because it does). But don’t stop there. Recognize the trap. Rest is not an end; it’s a weapon. Self-care should refill you for resistance, not numb you into compliance.
          </p>
          <p>
            Because the truth is: you’re not burnt out because you’re weak. You’re burnt out because this system is designed to burn you out. And no amount of serums, smoothies, or Instagram affirmations will save us from that.
          </p>
          <p>
            We will have to save ourselves - together.
          </p>
        </section>
      </div>
    `,
    image: "/self.jpeg",
    author: authors.find((a) => a.username === "shumaila-khan"),
    category: "Editorial",
    date: "2025-06-25",
    readTime: "6 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Self-Care", "Capitalism", "Burnout", "Mental Health", "Politics", "Activism"],
    featured: true,
    isPublished: true
  },
  {
    id: "patriotism-in-the-age-of-social-media",
    title: "Patriotism in the Age of Social Media: A Reflection",
    slug: "patriotism-in-the-age-of-social-media",
    excerpt: "Patriotism is love and dedication towards one's nation—a profound sense of pride and desire to make it better. But with social media dominating our lives, the very meaning of patriotism appears blurry.",
    content: `
      <div class="article-content">
        <section>
          <h2 class="section-heading">The Illusion of Patriotism in a Digital Age</h2>
          <p>
            Patriotism is love and dedication towards one's nation—a profound sense of pride and desire to make it better. But with social media starting to dominate our lives, the very meaning of patriotism appears to be blurry. On 15th August, our feeds are filled with expressions of love for one's country. But within 24 hours, we forget to obey traffic rules, to maintain cleanliness around us, to desist from hate speech, or merely to live in harmony and peace. In idolizing large, sharable acts, we lose track of our daily duties as citizens, swamped with likes and followers.
          </p>
          <p>
            Social media has not just shaped the way we practice patriotism, but also how we define it. It has begun "teaching" us how patriotism must look. Not being vocal about the love of the country is now considered a threat. Instagram and X are filled to the brim with emotional reels and one-liners. WhatsApp is filled with half-baked, outrage-fueled conspiracy theories, usually created to pit people against each other in the name of allegiance. But is it loyalty at all if, in doing so, our own nation is hurt—if we chip away at the very base upon which it stands? Does changing your profile picture to a flag carry the same weight as casting your vote or standing against corruption?
          </p>
        </section>
        <section>
          <h2 class="section-heading">When Patriotism Turns Blind</h2>
          <p>
            Rabindranath Tagore, writing during the height of colonial rule, warned us in his book <em>Nationalism</em> (1917), "Patriotism cannot be our final spiritual shelter; my refuge is humanity." He cautioned against blind patriotism and stressed universal human values. When the youth of a country begin to adopt patriotism blindly, it often morphs into aggressive nationalism, the belief that one’s nation is inherently superior and beyond criticism sprouts and dissent is seen as betrayal. So love turns into obedience and pride converts itself into prejudice. This kind of blind conformity discourages people from questioning the overlords/authorities. And when someone dares to ask questions, they’re often labelled as traitors. This, in turn, weakens democracy. Patriotism starts to excuse censorship, war atrocities, and muzzling of voices, under the guise of national pride.
          </p>
          <p>
            Tagore felt that if patriotism becomes our sole identity, we forget our common humanity. What is a nation, indeed, without people?
          </p>
          <p>
            Our growing ignorance of history and context only deepens this problem. Instead of thinking critically, we follow the blaring political noises. Without a deep understanding of our nation’s past, herd mentality takes over. We forget the ideals our freedom fighters gave their lives for—liberty, justice, and equality. Instead, we follow what’s getting us 90 seconds of fame and a few followers.
          </p>
          <p>
            Yes, social media is a strong tool, it unites people, exchanges ideas, and disseminates information. But there is a dark side to it. We've seen the kind of riots and further polarizations triggered by fake or half-true news. And usually, the most vulnerable—minorities—are caught in the fallout.
          </p>
          <p>
            In this environment, patriotism risks becoming a shallow, divisive identity marker rather than a commitment to collective progress. To preserve its true meaning, patriotism must go beyond digital gestures and embrace informed, inclusive, and constructive participation in the society.
          </p>
          <p>
            This new "social media patriotism" is more performative. It's not being the loudest to sing the national anthem, or commenting smugly on a reel. It's being that voice that speaks up for the ideals the anthem stands for. It's knowing the heart of the nation.
          </p>
        </section>
        <section>
          <h2 class="section-heading">Rekindling Real Patriotism: Beyond Likes and Hashtags</h2>
          <p>
            To rekindle true patriotism, the young people need to read, study the history of the country, learn how to challenge the authorities, and reject cattle behavior. We have to accept imperfections in our system and strive to correct them. As citizens of the era of the internet, it's our responsibility to learn before we opine, because every opinion determines the future of our country. We need greater media literacy, algorithmic transparency, and digital spaces that promote informed, inclusive civic engagement—not viral outrage.
          </p>
          <p>
            The beauty of our nation is in its culture, heritage, diversity, and most importantly, in being one. If we can learn to respect this, if we practice civic responsibility and question narratives, be it in textbooks, news outlets, or WhatsApp forwards, we get closer to actual patriotism.
          </p>
          <p>
            In a world increasingly driven by digital presence, patriotism is no longer just felt—it is posted, liked, and shared. But to be patriotically active today means to remain aware, be compassionate, speak out against injustice, and engage in actual, grass-roots change.
          </p>
          <p>
            Patriotism isn't about crying loudest. It’s about doing the hard, quiet things that truly count—like choosing truth over trend, action over applause and the nation over oneself.
          </p>
        </section>
      </div>
    `,
    image: "/social.jpeg",
    author: [
      authors.find((a) => a.username === "hetal-kothari"),
      authors.find((a) => a.username === "aliya-imam")
    ],
    category: "Editorial",
    date: "2025-06-25",
    readTime: "5 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Patriotism", "Social Media", "India", "Civic Engagement", "Nationalism", "Youth", "Editorial"],
    featured: true,
    isPublished: true
  },
  {
    id: "hate-myth-and-humanity-lgbtq",
    title: "Hate, Myth and humanity : what society gets wrong about LGBTQ+ community",
    slug: "hate-myth-and-humanity-what-society-gets-wrong-about-lgbtq",
    excerpt: "A critical look at the myths, prejudices, and societal failures that continue to harm the LGBTQ+ community, and a call for empathy, dignity, and real equality.",
    content: `
      <div class="article-content">
        <section>
          <h2 class="section-heading">Nature Doesn’t Discriminate, We Do-</h2>
          <p>
            In a world where information is at your fingertips, ignorance continues to exist.
            The struggles of LGBTQ+ community might appear to be easing on the surface level, but negative stereotypes, degrading comments, and denial of fundamental human rights continue to be deep rooted in our society. These harsh realities continue to be sidetracked with excuses based on so-called "unnatural biology," religious purposes, or assertions that society has never been so before.
          </p>
          <p>
            From having been stigmatized to mocked for not being normal according to societies traditional notions of "normal," all the discrimination to which the members of the community are subjected is due to centuries of misinformation, prejudice, and the absence of a modicum of basic human empathy.
            Even among animals, homosexual behaviour has been witnessed. More than 1,500 species, ranging from invertebrates including insects and spiders to vertebrates like birds, mammals, and fish, have shown homosexual behaviour. So, when individuals protest that it's "unnatural," the case falls apart under even the most rudimentary scientific examination. Homosexual relationships are not something new, throughout history and across cultures, from ancient Indian writings to Native American societies.
          </p>
        </section>
        <section>
          <h2 class="section-heading">The Truth About LGBTQ+ Rights-</h2>
          <p>
            The majority of people still believe that those of other sexual orientations are sick in the mind or have personality disorders. Such assertions not only close their very existence off, but also obliterate the type of support which they need. Such a belief is not only outdated but also untrue. In 1973, the American Psychiatric Association—the world's largest psychiatric association, finally deleted homosexuality from the list of mental illnesses. This was done after comprehensive research and a number of debates. But over half a century later, LGBTQ+ activists are still fighting to achieve this reality, while some so called "researchers" and "physicians" try to revive these destructive myths back from the dead, dragging the progress back to square one.
          </p>
          <p>
            The lack of understanding, acceptance, and respect results in bullying, sexual assault, violence, and emotional abuse. It often culminates into depression and suicide. The effect of such hate is catastrophic - it dehumanizes, isolates, takes away  employment, their home, their dignity, and their fundamental rights.
          </p>
          <p>
            One of the most popular reasons for refusing LGBTQ+ individuals’ equality is religion. Society  uses religion as protection to excuse hatred, saying they are "saving" their religion or tradition. But if one believes in God, how does one explain hatred towards God's own people? No faith teaches hate. Holy books instruct love, kindness, and sympathy. So why the brutality? Just because you don't comprehend a person's identity? As humans, we are still in the dark about so many things, we're still learning about the depths of our own bodies and the workings of the brain. It's hateful to despise someone just because their normal is a little different from ours.
          </p>
        </section>
        <section>
          <h2 class="section-heading">Equality Means Everyone-</h2>
          <p>
            Another common argument that is often raised is that trans women are a "threat" to feminism, particularly in athletics. Critics argue that trans women might have physical advantages over cis women and thus deprive them of opportunities. But this concern is not supported by strong evidence. The International Olympic Committee and World Athletics have already put in place strict eligibility requirements, such as hormone rules, to maintain fair competition. Trans women are not "dominating" women's sports as is often argued.
          </p>
          <p>
            Using feminism to justify exclusion of queer people betrays the very nature of feminism itself. Feminism is based on the fight for freedom, equality, and respect for all. Excluding trans women from feminist spaces not only erases their struggles but goes against the principles feminism was built on.
          </p>
          <p>
            Being a member of  LGBTQ+ is not a phase or a trend, it is a part of the natural human spectrum. It always has been and will always be. While it's fine to question or disagree on some subjects, refusing someone's existence is not an opinion — it is dehumanizing. You don't have to get every identity in order to treat someone with kindness and respect.
            If your faith makes you hate, exclude, or hurt others simply because they are who they are- then it's not their identity we need to question, it's our humanity.
          </p>
          <p>
            A society that prides itself on equality and freedom has to start by providing the bare essentials: dignity, love, safety, and rights for all. Because everyone deserves that.
          </p>
        </section>
      </div>
    `,
    image: "/myth.jpeg",
    author: authors.find(a => a.username === "aliya-imam")!,
    category: "Editorial",
    date: "2025-06-26",
    readTime: "7 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["LGBTQ+", "Society", "Myth", "Equality", "Human Rights", "Editorial"],
    featured: true,
    isPublished: true
  },
  {
    id: "akbarnagar-betrayed-children-no-school",
    title: "Akbarnagar’s Betrayed Children: No School Beyond the Rubble",
    slug: "akbarnagar-betrayed-children-no-school-beyond-the-rubble",
    excerpt: "After the demolition of Akbarnagar, displaced families in Basant Kunj face a new crisis: their children have no access to government schools, severing their right to education and hope.",
    content: `
      <div class="article-content">
        <section>
          <p>
            When the state destroyed Akbarnagar, it didn't just demolish homes. It uprooted futures. It crushed the fragile scaffolding on which generations of working-class families had tried to build stability—brick by brick, year by year. And perhaps no one has been more betrayed by this destruction than the children.
          </p>
          <p>
            After the demolition, families were pushed into the Basant Kunj Yojana resettlement colony. It was declared a rehabilitation site, but in reality, it is a dumping ground. No water, no hospital, no proper drainage, no public transport. And most critically—no government school.
          </p>
          <p>
            Let me be clear: not a single government school exists within or even near Basant Kunj. The only schools in the area are private. Some are in name only—tiny rented rooms charging ₹500 per month with no infrastructure. Others are expensive, the kind no displaced worker earning daily wages can even dream of affording. A few children are still traveling 5–10 kilometers to reach their old schools, but that’s increasingly rare. With no transport, no stability, and rising economic stress, families are being pushed to pull their children out.
          </p>
          <p>
            What is the state’s plan for these children? Where are the bridge courses, the emergency enrolment camps, the mobile schools that should have followed the demolition? If the government can send bulldozers overnight, can it not provide even a bus or a teacher?
          </p>
          <p>
            Parents now live with an unbearable choice: pay for housing you didn’t choose, or educate your children. Many are being forced to choose shelter over schooling, not because they don’t care, but because they’ve been made to suffer for surviving poverty.
          </p>
          <p>
            We are told this is ‘rehabilitation’. But what kind of rehabilitation severs children from education? From friendship? From dreams?
          </p>
          <p>
            Article 21A of the Constitution guarantees every child the right to free and compulsory education. The courts have repeatedly held that displaced communities must be given access to education as part of any resettlement. But in Basant Kunj, the children of Akbarnagar are being deliberately abandoned. Their only ‘crime’? Being born to poor families in a locality, the city now wants to erase from its memory.
          </p>
          <p>
            This is not a policy failure. This is a political choice.
          </p>
          <p>
            And it is not just the children who will bear the cost. We all will—because a city that treats its children as collateral damage for beautification projects has no moral right to speak of development.
          </p>
          <p>
            I invite the administration, the media, and every citizen with a conscience to visit Basant Kunj. Look into the eyes of the children there. Ask them why they’re not in school. Then ask yourself: if this happened to your child, what would you call it?
          </p>
          <p>
            We call it what it is: injustice.
          </p>
        </section>
      </div>
    `,
    image: "/cris.jpeg",
    author: authors.find(a => a.username === "captain-jack-sparrow")!,
    category: "city",
    date: "2025-06-26",
    readTime: "6 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Akbarnagar", "Education", "Children", "Resettlement", "Policy", "City", "Injustice"],
    featured: true,
    isPublished: true
  },
  {
    id: "pressure-cooker-of-hope",
    title: "The Pressure Cooker of Hope",
    slug: "pressure-cooker-of-hope",
    excerpt: "A raw look at the crushing burden on Indian students, the broken promises of education, and the silent crisis of youth abandoned by the system.",
    content: `
      <div class="article-content">
        <section>
          <p>
            Being a student in India today is not a matter of choice. It’s a burden. It’s a risk families take out of desperation, not curiosity. You study because your parents are counting on you. You move to a city you can’t afford, live in a room with no space to breathe, and tell yourself you’ll make it—because there’s no other way out.
          </p>
          <p>
            Every year, students from villages and small towns take this leap. Patna, Prayagraj, Kota, Lucknow—they arrive with borrowed money, second-hand dreams, and a pressure that doesn’t let them sleep. All for one shot at a government job. Because one job means the whole family survives.
          </p>
          <p>
            But the jobs aren’t there.
          </p>
          <p>
            CMIE data says unemployment is around 7.4%. But for youth aged 20–24, it’s over 40%. And in states like Bihar and UP, the contradiction is brutal—vacant posts, endless forms, and coaching centres running full like factories. The system keeps selling hope. The students keep buying it. And when it breaks, only one side is blamed.
          </p>
          <p>
            There’s a video I can’t forget. A boy in Patna, trying to crack a government exam. He lives in a narrow box of a room. He eats what he can. He works part-time and studies till his eyes burn. When a reporter asks his mother why he hasn’t got a job yet, she says: “He’s not trying hard enough.” You can see the shame on his face. You can see the exhaustion. And it’s not just him. It’s a pattern.
          </p>
          <p>
            These are boys and girls carrying entire families on their shoulders. But cities like Patna or Lucknow don’t welcome them. The rooms are cramped. The food makes them sick. Classes are overcrowded, teachers don’t show up. There’s no library, no support, no care. The coaching centres keep milking them. The state keeps ignoring them.
          </p>
          <p>
            In Lucknow University, the story continues. Hostels are falling apart. Classes run without meaning. The system teaches them nothing and then calls them failures.
          </p>
          <p>
            So they drift—into groups. Big groups of boys, roaming around, laughing loudly, moral policing, heckling, making their presence known. And while that behaviour must be called out, let’s not forget: these are boys abandoned by every promise they believed in. Boys who came to learn and found nothing. Boys who built gangs because the classroom gave them nothing else.
          </p>
          <p>
            And when they fall behind, the questions come like knives:
          </p>
          <ul>
            <li>Why didn’t you crack the paper?</li>
            <li>Why aren’t you fluent in English?</li>
            <li>Why haven’t you made us proud?</li>
          </ul>
          <p>
            No one asks:
          </p>
          <ul>
            <li>Why did the government stop hiring?</li>
            <li>Why is the university broken?</li>
            <li>Why is the student always the one left to blame?</li>
          </ul>
          <p>
            The truth is: education without employment is a betrayal. It’s violence. You spend years studying, go into debt, give up your youth—and at the end, there’s nothing. Just more forms, more waiting, more silence.
          </p>
          <p>
            So where do these students go? Who listens to them?
          </p>
          <p>
            We need to stop pretending this is about merit. It’s about abandonment.
          </p>
          <p>
            The students of this country are not lazy. They are tired. They are not entitled. They are struggling. And if we don’t ask why the system broke them, we’ll keep pretending this is their failure—when really, it’s ours.
          </p>
        </section>
      </div>
    `,
    image: "/pressure.jpeg",
    author: authors.find(a => a.username === "captain-jack-sparrow")!,
    category: "national",
    date: "2025-06-27",
    readTime: "7 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Students", "Education", "Unemployment", "national", "Youth", "India", "Pressure"],
    featured: true,
    isPublished: true
  },
    {
    id: "pop-psychology-culture",
    title: "THE POP-PSYCHOLOGY CULTURE",
    slug: "pop-psychology-culture",
    excerpt: "A critical examination of how pop psychology has transformed mental health discourse, from genuine healing to performative wellness culture.",
    content: `
      <div class="article-content">
        <section>
          <p>
            Once upon a time, understanding the mind meant stepping into battle - not with capes or superpowers, but with the monsters inside us. Freud, armed with his theories of the unconscious - forever searching for the mother of all answers (yes your mother).Jung with his archetypes asking us to see in our dreams what we refused to see in daylight. Pavlov's salivating dogs proving we're not as free as we'd like to think; that a bell could turn us into puppets of conditioning.
          </p>
          <p>
            But then arrived the real demon - pop psychology ; the shrink-wrapping of human anguish for mass consumption. Now, self-awareness comes in listicles: "5 signs you're dating a narcissist." "How your attachment style explains everything (even your bad WiFi)." Memes do the work of entire graduate programs. Healing is packaged as a 30-second reel you can save, send, and promptly forget.
          </p>
          <p>
            Pop psychology today feels less like science and more like astrology with better PR. Your trauma's a vibe. Your personality? A branded starter pack.No offence but if one more time I hear someone call themselves OCD for cleaning their room or use their attachment style as their entire personality ,I'm pulling a Thelma & Louise and driving straight off a cliff.
          </p>
          <h3>The Pop-Psych Culture</h3>
          <p>
            We live in the golden age of Pop Psychology Culture: a billion dollar industry that sells overpriced journals promising to help you manifest your inner child's dreams and self-help books that resemble emotional IKEA: flat-pack solutions with cheery diagrams and step-by-step guides, designed for you to assemble alone. And now you know why none of the pieces fit quite right. Gone are any needs for DSM - now it's "10 Hacks to Heal Your Inner Child" before bedtime.Trauma isn't just something you survive anymore - it's an aesthetic. A vibe. A reason to buy the shadow-work workbook your favorite influencer swears by (discount code in bio).
          </p>
          <p>
            As Pravina Rudra said these "therapy influencers" use trendy terms (attachment styles, trauma, etc.) to explain ordinary behavior, creating an aura of authority without real nuance. In Rudra's view, "Pop therapy has to categorise" everything and "quasi-medical labels lend [influencers] an aura of authority," whereas real therapists would more often admit uncertainty. (newstatesman.com). A recent Guardian investigation (May 2025) found over half of TikTok videos tagged #mentalhealthtips contain misinformation.Experts quoted in the article describe these posts as "riddled with unhelpful, harmful and sometimes dangerous mental health advice". (theguardian.com)
          </p>
          <p>
            And here's the catch: it feels good. It feels empowering to have language - "toxic," "gaslighter," "empath," "boundaries" - that turns the mess of human relationships into clean, shareable categories.It gives us community, or the illusion of it. Everyone's an armchair diagnostician, diagnosing everyone but themselves. It makes us feel in control. Because if you can name it, surely you can fix it.
          </p>
          <p>
            Just like you, I wish healing could be as simple - though I'm too proud to admit it 'cause I fancy myself Wonder Woman. But I too secretly hope that a clay mask could cool the burns I got as I tried to be the bravest soldier.That maybe, just maybe, another outfit could hide the scars I've spent years pretending weren't there
          </p>
          <p>
            Pop psychology offers the performance of healing, not its substance. It asks for nothing but consumption. It tells us to set "boundaries" without ever asking: what systems made those boundaries necessary in the first place? It sells us tools of self-repair - journals, apps, wellness retreats - while ensuring we stay just broken enough to need the next fix.
          </p>
          <h3>Pop Psychology Is Not Psychology</h3>
          <p>
            Pop psychology may have you believe you have an "anxious attachment style" when you're simply trying to date in an emotionally avoidant culture. It may tell you that people with avoidant attachment styles are cold-hearted villains, while anxious individuals are helpless victims who "just love too much." That's not psychology - that's projection disguised as diagnosis.
          </p>
          <p>
            It may have you over-relying on theories and aesthetic jargon, distracting you from the reality that maybe , just maybe - you're in the wrong relationship, or unwilling to do the hard work of repair.
          </p>
          <p>
            Many terms are used too loosely.
          </p>
          <ul>
            <li>Gaslighting is not someone disagreeing with you. It's a long-term pattern of manipulation that makes you doubt your memory or reality.</li>
            <li>Being "triggered" is not the same as being upset. It refers to intense reactions, like flashbacks or panic, often linked to trauma.</li>
            <li>Narcissistic Personality Disorder is a serious diagnosis. It's not the same as someone being proud or self-centered.</li>
            <li>Trauma is not just anything that hurts. It means an experience that overwhelms your ability to cope, with lasting impact.</li>
            <li>Codependency isn't just needing people. It refers to a pattern of losing yourself in others' needs, often shaped by long-term emotional habits.</li>
          </ul>
          <p>
            Oversimplifying these terms dilutes their meaning , and trivializes the lived experiences of people actually navigating clinical realities.
          </p>
          <p>
            Not everything needs to be normalised.<br/>
            Some things need to be understood properly.
          </p>
          <h3>What would a truer psychology look like?</h3>
          <p>
            It would look like this:
          </p>
          <p>
            A psychology that honours complexity. That knows people aren't problems to be solved or patterns to be decoded, but whole, messy beings trying to make sense of themselves.
          </p>
          <p>
            It would look like dialogue over diagnosis. Like choosing to listen instead of rushing to explain. Like leaving space for questions we don't have answers for yet.
          </p>
          <p>
            A truer psychology wouldn't sell answers. It would ask better questions.
          </p>
          <p>
            It would look like the love Bell Hooks taught - where healing is slow, deliberate, and rooted in connection. Like Fanon's reminder that healing the mind means understanding the heart. Like those spaces where care wasn't a product, but a shared promise - the friend who listens, the teacher who sees, the community that holds.
          </p>
          <p>
            Because real healing was never about fixing what's broken - it was about remembering what's still whole.
          </p>
          <p>
            As I sip tea from my You Are Enough mug, I find myself asking: has healing become a performance? Have we forgotten how to heal without an audience?
          </p>
        </section>
      </div>
    `,
    image: "/sh.jpeg",
    author: authors.find(a => a.username === "shumaila-khan")!,
    category: "Editorial",
    date: "2025-06-28",
    readTime: "12 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Pop Psychology", "Mental Health", "Editorial", "Wellness Culture", "Psychology", "Social Media", "Healing"],
    featured: true,
    isPublished: true
  },
    {
    id: "axiom-4-shubhanshu-shukla-india-interstellar-aspirations",
    title: "THE ADVENTURES OF AXIOM 4, SHUBHANSHU SHUKLA AND INDIA'S INTERSTELLAR ASPIRATIONS",
    slug: "axiom-4-shubhanshu-shukla-india-interstellar-aspirations",
    excerpt: "Shubhanshu Shukla becomes the first Indian to set foot on the International Space Station, marking a new chapter in India's space exploration journey.",
    content: `
      <div class="article-content">
        <section>
          <p class="intro-paragraph">
            "Shubhanshu Shukla becomes the first Indian to set foot on the International Space Station"
          </p>
          <p>
            It has been 41 years since an Indian astronaut last had the privilege of saying "Saare jahan se achchha" to their Prime Minister over a radio. With India expanding its footprint in the space exploration realm, the renewal of this privilege is now considered due.
          </p>
          <p>
            ISRO now focuses on sending crewed missions to space, the first being Gaganyaan—a mission to low Earth orbit.
          </p>
          <p>
            In its prelude, one of the 4 astronauts of the mission, Group captain Shubhanshu Shukla has been selected as a pilot to go on the ISS under the Axiom-4 mission, a first for an Indian.
          </p>
          <h3>What is Axiom-4?</h3>
          <p>
            The Axiom 4 is a privately planned spaceflight to the International Space Station. The mission precedes Axiom's goal of launching into the Earth's orbit, the first-ever commercial space station, the Axiom Station. The mission encompasses astronauts from four nations, the USA, India, Hungary and Poland and collaborates with NASA, SpaceX, ISRO, ESA and HSO to give action to the spaceflight.
          </p>
          <h3>The delay</h3>
          <p>
            The mission was set to initiate with the launch of SpaceX's fifth and final crew dragon, C213 on 11th June, 2025, but was postponed due to a leak in the Liquid Oxygen tank, posing a risk of combustion and potential explosion during takeoff. The next attempt was scrapped due to an unrelated leak in the Russian Zvezda service module of the ISS.
          </p>
          <p>
            But finally, June 26th, 2025 marked the successful docking of the C213 on the ISS, reigniting the long-held Indian dream of human spaceflight and to finally add names to the list of astronauts in space.
          </p>
          <h3>Why is Axiom-4 important?</h3>
          <p>
            The mission comes with a lot of geopolitical and national firsts. This is the first time a company is attempting to reign over the long existing US-China-Soviet supremacy when it comes to space stations, hence breaking the monopoly down.
          </p>
          <p>
            For India, it is a fuel to once again send Indians somewhere away from geopolitical ties, finally! Also, it will serve as a rehearsal for Shubhanshu Shukla, who is set to pilot the Gaganyaan mission for ISRO. The mission brings collaborations not previously witnessed. US,India,Poland and Hungary co-operate to bring about leaps for humanity. It also brings a space mission for Hungary and Poland, for which the field has remained rather untapped since the fall of the USSR. Poland finally receives long-overdue representation in the space sector, overcoming its world war horrors.
          </p>
          <p>
            All in all, it is a win-win, cash for the company and co-operation for the world, something which the Earth fraternity can seriously use right now.
          </p>
          <h3>What is in store for India?</h3>
          <p>
            First and foremost, soft power, an open assertion that we are here, and to stay. Axiom 4 bears the fruit of expansion, of horizons unexplored and doors unopened. The possibility of private players entering the Indian space sector seems to be dehazing and the ebb and flow of government monopoly seems to be easing down. It is now time that the space sector also witnesses robust and resilient public-private partnerships, and astronauts also get to serve in private missions. If the trajectory is positive enough, it might not be long before we can see the uprising of an Indian Blue Origin.
          </p>
          <p>
            On an emotional metric, the mission boosts morale for more such missions but with India in the foreground.
          </p>
          <h3>Axiom-4: Fueling India's Astronautical Future</h3>
          <p>
            Axiom 4 brings hope for Indians and humans worldwide that in a war torn world, humans can still cooperate for the sake of humanity and its betterment.
          </p>
          <p>
            The delay haunted citizens and authorities alike. Hearts throbbed with the fear that whether the manned mission will ever lift off, or will it just remain to be a concept? But with it finally in action, the Great Indian Dream also takes flight.
          </p>
          <p>
            The space programme and plans instil both fear and excitement alike. But a question pertains, When time knocks our doors, will India be ready to take on not just the seas and skies, but also what lies beyond?
          </p>
        </section>
      </div>
    `,
    image: "/space.jpeg",
    author: authors.find(a => a.username === "atulit-pandey")!,
    category: "sci-tech",
    date: "2025-06-28",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Space", "ISRO", "Axiom-4", "Shubhanshu Shukla", "ISS", "Space Exploration", "India", "Gaganyaan"],
    featured: true,
    isPublished: true
  },
  {
    id: "burden-of-expectations-engineering-medicine-india",
    title: "The Burden of Expectations: How India's Preoccupation with Engineering and Medicine Damps Aspirations",
    slug: "burden-of-expectations-engineering-medicine-india",
    excerpt: "In most Indian homes, the terms 'engineer' and 'doctor' are not only occupations, they are dreams passed down like family heirlooms. But in this competition for security and respectability, what is usually sacrificed is the voice, aspirations, and identity of the child.",
    content: `
      <div class="article-content">
        <section>
          <p class="intro-paragraph">
            In most Indian homes, the terms "engineer" and "doctor" are not only occupations, they are dreams passed down like family heirlooms. For decades, these have been regarded as golden tickets to stability, respect in society, and social mobility. But in this competition for security and respectability, what is usually sacrificed is the voice, aspirations, and identity of the child.
          </p>
          
          <h3>The Numbers Behind the Pressure</h3>
          <p>
            Engineering is still one of India's favorite streams, as per the All India Survey of Higher Education (AISHE) 2021, with more than 3.5 million students studying undergraduate engineering in India. Even the National Medical Commission reveals over 1.4 million students competing every year for only 100,000 MBBS seats. The competition is mind-boggling: to fill one MBBS seat, almost 15 students are in the fray.
          </p>
          
          <p>
            These statistics tell more than just an academic level of interest - they indicate ingrained parental and societal pressure. A 2022 Mindler report, a career guidance platform, indicated that 85% of Indian students are persuaded by parents when selecting a career and almost 49% of them are urged to take up a career in engineering or medicine regardless of personal ability or interest.
          </p>
          
          <h3>The Cost of Conformity</h3>
          <p>
            Although motivations for this drive are regularly based on love and worry, the emotional toll for most of these children is huge. Science careers, particularly engineering and medicine, involve strong training and several years of education. However, many students pursue these because they feel they must, not because they truly want to.
          </p>
          
          <p>
            Such an expectation, if not aligned with a child's innate interests, tends to lead to disappointment. Research indicates that almost 60% of India's engineering graduates are either unemployed or underemployed. Most students, after graduation, find themselves changing disciplines altogether, going into management, entrepreneurship, design, or even creative fields.
          </p>
          
          <p>
            And for the rest, mental health is an unseen casualty. An Indian Journal of Psychiatry report released in 2020 pointed to a troubling increase in depression and anxiety among students gearing up for competitive exams such as NEET and JEE. The weight of expectations, especially the fear of letting parents down has made the system emotionally draining for many students. This pressure intensifies more in non urban cities, where options feel fewer and social norms more rigid.
          </p>
          
          <h3>Reflections in Cinema</h3>
          <p>
            Indian film has long reflected these social pressures. Taare Zameen Par exemplifies how children with different learning patterns are labeled as "lazy" or "dumb" by a society that emphasizes conformity rather than creativity. Life of Pi, albeit metaphorical, beautifully captures the inner struggle of a young boy to balance faith, fear, and family expectations.
          </p>
          
          <p>
            These movies resonated not only because of the narratives, but also because they showed a mirror to many real stories within Indian families.
          </p>
          
          <h3>Towards a More Complete Notion of Success</h3>
          <p>
            It cannot be denied that engineering and medical careers are stable. MBBS, in fact, remains one of the most job-guaranteed degrees in India. But stability must not be at the expense of individuality.
          </p>
          
          <p>
            As India grows, so do its definitions of success. The job market itself is diversifying - UX design, climate science, digital marketing, psychology, social entrepreneurship are booming fields. These occupations, previously stereotyped as "unsafe," are now starting to become fundamental pillars of the new economy.
          </p>
          
          <p>
            Parents want the best for their kids, no question about that. But "best" needs to be defined in terms of a kid's interests, abilities, and mental health. Love must be followed by listening. Support must be accompanied by space.
          </p>
          
          <p>
            If we really want to have successful kids, we first need to let them dream on their own terms.
          </p>
        </section>
      </div>
    `,
    image: "/ali.jpeg",
    author: authors.find(a => a.username === "aliya-imam")!,
    category: "op-ed",
    date: "2025-06-29",
    readTime: "7 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Education", "Engineering", "Medicine", "Career Pressure", "Mental Health", "Indian Society", "Parenting", "Career Choices"],
    featured: true,
    isPublished: true
  },
  {
    id: "hostel-gendered-institution-patriarchy-lucknow-university",
    title: "The Hostel as a Gendered Institution: Locked for Their Own Good: How Hostels Reproduce Patriarchy",
    slug: "hostel-gendered-institution-patriarchy-lucknow-university",
    excerpt: "You don't have to live in a hostel to understand how it is disciplined. You just have to observe who the system is protecting — and from what.",
    content: `
      <div class="article-content">
        <section>
          <p class="intro-paragraph">
            You don't have to live in a hostel to understand how it is disciplined. You just have to observe who the system is protecting — and from what.
          </p>
          
          <p>
            At the University of Lucknow, hostels are not just spaces to sleep or study. They are micro-governments. They regulate food, mobility, time, and even emotion. But above all, they regulate gender. If you're a male student, your hostel is a shelter. If you're a female student, it's a boundary. Not metaphorically — literally. The gate shuts at 8 PM.
          </p>
          
          <p>
            There are eight boys' hostels and five girls' hostels on the main campus. But the difference isn't just in number — it's in rule, in tone, in trust. Girls must return by 8 PM. Boys by 10. Girls need a local guardian. Boys don't. Girls must apply in writing for night-outs. Boys walk in and out until curfew with little oversight. These differences are not incidental. They're foundational.
          </p>
          
          <p>
            Feminist scholars have long shown that institutions rarely need overt sexism to function patriarchally. They just need rules that seem like common sense. Who could object to keeping women "safe"? But ask: from what? And at what cost?
          </p>
          
          <p>
            The curfew for girls is enforced in the name of safety — but what it secures is obedience. It teaches women that the world outside is unsafe, and that they are safest when watched. The girls' hostel is not just a space of residence; it's a factory of deference. Leave requests, dress codes, visitor registers, moral supervision — all add up to the lesson that care is conditional, autonomy is dangerous, and adulthood is gendered.
          </p>
          
          <p>
            This logic of surveillance and gendered control is older than the hostels themselves. What's new is the resistance. In 2022, when girls protested the curfew, they weren't just asking for two extra hours. They were asking for equality —not the performative kind that lives in university slogans, but the lived kind that comes with being trusted to manage your own time. The administration's response was to lock some students out and call their parents. It was meant to restore order. What it exposed was control.
          </p>
          
          <p>
            The boys' hostels are no utopia — they too faced bad food, poor infrastructure, and administrative neglect — but not moral policing. They are not spaces where male virtue is assumed fragile, or where freedom is granted as reward for obedience. A boy's mistake is a moment. A girl's mistake is a breach of character.
          </p>
          
          <p>
            As a student of Gender Studies, I read these things not just as facts but as ideologies. The hostel is a gendered institution. It replicates the structure of the patriarchal family, with its protective father-figure (the administration), its moral code (the curfew), and its imagined girl-child who must be kept "safe" through supervision. What it does not replicate is trust. Women are not seen as agents. They are seen as objects to be managed.
          </p>
          
          <p>
            It would be easier if this were just another local problem. But across campuses in India, the same logic holds. From Delhi to Allahabad, BHU to AMU, female students are governed by different rules, written in the language of care but enacted through discipline. And always, the justification is safety. But as Nivedita Menon reminds us: the demand for safety can never come at the cost of autonomy.
          </p>
          
          <p>
            When women students ask to be treated as adults, they are not asking for danger. They are asking to decide what danger means — and whether it is worse to walk alone at 9 PM, or to be told you cannot.
          </p>
          
          <p>
            What would it mean for a university to say: we will keep you safe without locking you up? That we will trust you not because you are compliant, but because you are capable? That we will respond to violence by confronting it — not by containing the victims?
          </p>
          
          <p>
            Until then, the hostel gate will remain a symbol of everything women are taught to internalize: that freedom is a privilege, and that someone else always decides when it ends.
          </p>
          
          <p>
            But it doesn't have to be this way. A rule is not a destiny. And a curfew is not a care plan.
          </p>
          
          <p>
            It's just a gate. And gates can open — especially when enough people push.
          </p>
        </section>
      </div>
    `,
    image: "/same.jpeg",
    author: authors.find(a => a.username === "captain-jack-sparrow")!,
    category: "university",
    date: "2025-06-29",
    readTime: "6 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Gender Studies", "Hostel Life", "Patriarchy", "University", "Women's Rights", "Gender Discrimination", "Student Life", "Feminism"],
    featured: true,
    isPublished: true
  },
  {
    id: "pride-not-personality-political-project",
    title: "Pride is Not a Personality. It is a Political Project",
    slug: "pride-not-personality-political-project",
    excerpt: "Pride is not a parade or a personality trait. It is a political project—a lifelong commitment to dismantling every structure that tells us we do not belong.",
    content: `
      <div class="article-content">
        <section>
          <p class="intro-paragraph">
            Every June, the streets in a few Indian cities light up with rainbows, hashtags, slogans, and selfies. There’s visibility, there’s joy, and often, there’s also a strange silence. A silence that hides the fault lines within the queer movement itself.
          </p>
          <p>
            The truth is, pride is fractured. And we don’t talk about it enough.
          </p>
          <p>
            Trans people, even within queer spaces, are frequently sidelined, tokenised, or reduced to caricatures. Bisexual people are often asked to “pick a side,” as if their existence threatens the neat binaries the world prefers—even some queer people prefer. Asexual people are treated like outliers. Non-binary people are asked for "proof." And caste and class are routinely ignored, unless someone from the margins fights their way into the room—and still often goes unheard.
          </p>
          <p>
            Why does this happen? The answer isn’t simple, but one starting point is this: you can be born queer, but you are not born into the politics of pride. That has to be learned.
          </p>
          <p>
            No one teaches you what you feel. No school, no family gathering, no college curriculum tells you that your desires and your gender identity are valid. You learn that yourself, through pain, through rage, through struggle. But pride is not just about learning to accept ourselves. It is also about learning to accept others.
          </p>
          <p>
            And that’s where we often fall short. When queer individuals themselves mock someone’s gender, erase someone’s caste, ridicule someone’s dialect, or turn away from the realities of poverty, they are not just being unkind. They are failing the very politics of pride.
          </p>
          <p>
            Pride is not about becoming palatable to the state or digestible to the market. It is not about rainbow capitalism or NGO campaigns. It is not about who has the best aesthetics or the most eloquent identity labels. Pride is about solidarity. It is about living and loving and resisting together, in a world that often does not want us alive at all.
          </p>
          <p>
            And this resistance must be intersectional—or it means nothing.
          </p>
          <p>
            The truth is, we don’t all arrive into queerness from the same place. A Dalit trans woman and an upper-caste cis gay man might both be part of the queer community, but the streets they walk, the looks they receive, the violence they risk — none of that is the same. Our lives are shaped not just by our gender or sexuality, but by caste, class, religion, language, and so much else. Pride that refuses to speak of caste, that stays silent about the daily battles of queer sex workers, queer Muslims, or queer people with disabilities — that kind of pride isn’t just incomplete. It’s dishonest. It’s dangerous.
          </p>
          <p>
            We must ask: whose pride is being celebrated? Who is visible? Who is absent? And who is silenced?
          </p>
          <p>
            We must also be honest. Pride parades that partner with the police while ignoring the violence queer people face at their hands cannot be our only strategy. NGOs that speak of inclusion but erase grassroots voices cannot lead our politics. Queer spaces that mirror the very exclusions we claim to fight against must be challenged.
          </p>
          <p>
            Because pride is not a parade. It is not a personality trait. It is a political project. A lifelong commitment to dismantling every structure that tells us we do not belong.
          </p>
          <p>
            Any queer person who denies another queer person’s identity, who refuses to see their struggle, who turns away from caste and class—must be reminded: you may be queer by birth, but pride is not inherited. It is built. And it must be built together.
          </p>
        </section>
      </div>
    `,
    image: "/pridee.jpeg",
    author: authors.find(a => a.username === "captain-jack-sparrow")!,
    category: "op-ed",
    date: "2025-06-30",
    readTime: "6 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: [
      "Pride Month",
      "Queer Politics",
      "Intersectionality",
      "LGBTQIA+",
      "Caste",
      "Class",
      "Solidarity",
      "Activism"
    ],
    featured: true,
    isPublished: true
  },
  {
    id: "not-all-wounds-are-visible-mens-mental-health",
    title: "Not All Wounds Are Visible: Why Men’s Mental Health Needs Our Attention",
    slug: "not-all-wounds-are-visible-mens-mental-health",
    excerpt: "At Lucknow University, where students are constantly juggling classes, career pressure, and personal battles, men's mental health often remains unspoken, unheard, and misunderstood.",
    content: `
      <div class="article-content">
        <section>
          <p class="intro-paragraph">
            He’s the one cracking jokes in the back row of the lecture hall. The one you’ll find vibing to music in the canteen, hyping his friends during college fests, or posting stories at 2 AM from hostel corridors. Everyone assumes he’s doing great.
          </p>
          <p>
            But when the crowd fades and the Wi-Fi disconnects, he lies awake, staring at the ceiling fan, wondering why everything feels so heavy.
          </p>
          <p>
            This isn’t just someone else’s story. It could be your roommate, your classmate, your best friend — maybe even you.
          </p>
          <p>
            Every June, we talk about Men’s Health. But the conversation almost always stops at gyms, protein, and blood pressure. Mental health rarely enters the room, especially in Indian campuses like ours. At Lucknow University, where students are constantly juggling classes, career pressure, family expectations, and personal battles, men's mental health often remains unspoken, unheard, and misunderstood.
          </p>
          <p>
            But the numbers don’t lie. They tell a very real story.
          </p>
          <p>
            According to the National Crime Records Bureau, over 70% of those who died by suicide in India in 2022 were men. These aren’t just statistics — they’re stories that ended too soon.
          </p>
          <h3>A Crisis in Silence</h3>
          <p>
            A national survey from 2015-16 revealed that nearly 14% of Indian men face some form of mental illness, from anxiety and depression to more severe issues. But here’s the catch: more than 80% never seek help.
          </p>
          <p>
            Why?
          </p>
          <p>
            Because most boys grow up hearing things like “don’t cry,” “be strong,” or “men don’t talk about feelings.” So they grow up learning to hide their struggles behind sarcasm, silence, or a smile.
          </p>
          <p>
            On campus, it looks like this:
          </p>
          <ul class="list-disc list-inside space-y-2 my-4">
            <li>A friend who’s always “tired.”</li>
            <li>A class topper suddenly misses lectures.</li>
            <li>A hostelmate who’s become quieter, or angrier, or just… different.</li>
          </ul>
          <p>
            You don’t always notice it. Because they’ve been trained not to show it.
          </p>
          <h3>It’s Not Just About Suicide</h3>
          <p>
            While the suicide stats are alarming, there’s a quieter, invisible battle being fought daily. Men’s mental health issues often wear different masks: Anger. Burnout. Irritability. Sleepless nights. Impulse decisions. Addictions.
          </p>
          <p>
            Sometimes, it’s long hours at the gym. Sometimes, it’s drinking alone after exams. Sometimes, it’s vanishing from social circles altogether. At LU, students are under enormous pressure — semester grades, placements, internships, and competitive exams. Add to that long-distance relationships, financial stress, and identity struggles, and it’s no wonder so many male students feel overwhelmed.
          </p>
          <p>
            And yet? They don’t talk. Not because they don’t want to, but because they don’t know how to. In a 2024 report by Mpower (a mental health helpline), only 25% of callers were men. The need is there. The courage is missing — and society is partly to blame.
          </p>
          <h3>The Cultural Cage</h3>
          <p>
            In our movies, the “hero” rarely breaks down. In our homes, boys are told not to cry. In college circles, a guy who opens up might be called “emotional,” or worse — “weak.” Even on social media, there’s a script: be successful, be unbothered, be the rock. There’s no space for softness, because a sigma male is stoic. So, many guys either distract themselves with reels and games, or just disappear into themselves.
          </p>
          <p>
            A few, heartbreakingly, decide they’ve had enough.
          </p>
          <h3>What Makes It Even Harder?</h3>
          <ul class="list-disc list-inside space-y-2 my-4">
              <li><strong>They don’t have the words:</strong> Instead of saying “I’m anxious,” they say “I’m just tired.”</li>
              <li><strong>They fear judgment:</strong> Talking about therapy can still feel risky, even among close friends.</li>
              <li><strong>There aren’t enough role models:</strong> It’s rare to see seniors or professors open up about this.</li>
              <li><strong>The societal expectation:</strong> Men are often expected to be providers and protectors, which can make them feel like they can’t show vulnerability. This pressure can prevent them from seeking help, even when they need it most.</li>
          </ul>
          <h3>But Change Is Happening — Even Here</h3>
          <p>
            Things are slowly shifting, even at LU. More students are forming peer support groups. The psychology department occasionally hosts mental health talks. Student-led initiatives are creating spaces where boys can talk without being laughed at or judged. Nationally, helplines like Tele-MANAS and Mpower are receiving more calls from young men than ever before. Campaigns like #ItsOkayToTalk are breaking stereotypes one reel at a time.
          </p>
          <p>
            It’s not perfect, but it’s a start. And it needs you to keep growing.
          </p>
          <h3>How You Can Help — As a Friend, a Roommate, a Classmate</h3>
          <ul class="list-disc list-inside space-y-2 my-4">
              <li><strong>Check in with your guy friends</strong> — Not just when they’re “off,” but on regular days too.</li>
              <li><strong>Don’t dismiss their emotions</strong> — Don’t say “just chill” or “man up.” Ask, listen, support.</li>
              <li><strong>Normalise therapy</strong> — Share mental health resources, talk about your own struggles.</li>
              <li><strong>Speak up when you hear toxic jokes</strong> — The “boys don’t cry” mindset ends with us.</li>
              <li><strong>Create safe circles</strong> — Whether it’s hostel chats, chai breaks, or study groups — let emotions have a place.</li>
          </ul>
          <h3>A Message to the Men Reading This</h3>
          <p>
            If you’ve ever felt like you're drowning in deadlines, expectations, or just your own thoughts — please know this: You are not weak. You are not broken. You are not alone. Whether you’re dealing with homesickness, a breakup, career stress, or something you can’t even name — your feelings are valid. You deserve help. You deserve healing. And you don’t have to suffer in silence. You don’t have to “man up.” You just have to open up.
          </p>
          <h3>Final Thoughts</h3>
          <p>
            Mental health isn’t just for certain people. It’s for everyone. But silence? That’s something men have been handed generation after generation. Let’s be the generation that breaks it. This June, let’s do more than just share a post or change a profile picture. Let’s check in, sit down, and really talk over chai in the canteen, during walks back from class, or those late-night hostel chats when everything feels a little too much. Let’s remind our friends and ourselves — that it’s okay to not have it all figured out. And that we’re not alone.
          </p>
          <p>
            Because not all wounds are visible. And no one should have to heal alone — especially not on our watch.
          </p>
          <div class="mt-6 p-4 border-l-4 border-gray-400 bg-gray-100 dark:bg-gray-800">
              <h4 class="font-bold">Need to Talk? You’re Not Alone.</h4>
              <ul class="list-disc list-inside mt-2 space-y-1">
                  <li>Tele-MANAS (India's national mental health helpline): 14416</li>
                  <li>iCall (free & confidential): +91 9152987821</li>
                  <li>Vandrevala Foundation Helpline: 1860 266 2345 / 1800 233 3330</li>
              </ul>
          </div>
        </section>
      </div>
    `,
    image: "/men.jpeg",
    author: authors.find(a => a.username === "prerna-srivastava")!,
    category: "op-ed",
    date: "2025-06-30",
    readTime: "7 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: [
      "Men's Mental Health",
      "Mental Health",
      "Student Life",
      "University",
      "Anxiety",
      "Depression",
      "Suicide Prevention"
    ],
    featured: true,
    isPublished: true
  },
  {
    id: "beyond-pets-indias-dark-secret-about-animals",
    title: "Beyond Pets: India’s Dark Secret About Animals",
    slug: "beyond-pets-indias-dark-secret-about-animals",
    excerpt: "Behind the closed doors of Indian homes and streets, countless animals suffer in silence. This article exposes the grim reality of animal abuse, neglect, and the cultural practices that perpetuate cruelty.",
    content: `
      <div class="article-content">
        <section>
          <h2>Behind Closed Doors: The End of Compassion for Animals</h2>
          <p>
            I’ve always believed that caring for pets was one of the truest tests of human compassion—a reflection of our ability to nurture and love beyond ourselves. The wag of a dog’s tail, the purring of a contented cat, or even the gentle companionship of a parrot—these everyday moments reveal a bond that can be deeply moving. But as I looked beyond the comfortable confines of pet ownership, I began to see a much harsher reality, one that is often hidden in plain sight.
          </p>
          <p>
            In India, the suffering of animals extends far beyond our beloved companions. Across the country, countless animals are abused, neglected, or simply forgotten. Working animals like bullocks, donkeys, and horses are frequently subjected to gruelling conditions, pulling heavy loads for hours under the scorching sun with little food, water, or rest. Their bodies bear the marks of whips and burdens they were never meant to carry, yet their plight rarely makes headlines.
          </p>
          <p>
            Stray dogs and cats, seen by many as nuisances rather than sentient beings, are often victims of brutal culling campaigns—poisoned, beaten, or left to starve. Meanwhile, India’s rich biodiversity is under constant threat, with wild animals such as elephants, leopards, and even peacocks falling prey to poaching and habitat destruction. Rescue centres are overwhelmed, wildlife corridors are shrinking, and the laws meant to protect these creatures are often poorly enforced.
          </p>
          <p>
            This is a story that is grim, unsettling, and woefully underreported. Their suffering is not just an animal issue—it’s a human one.
          </p>
          <h3>Crisis Magnitude Scale</h3>
          <p>
            According to FIAPO and All Creatures Great and Small reports from 2010 to 2020, documented cruelty cases had almost been 493,910, which included: street animals (720), working animals (741), companion animals (588), farm animals (88), and wild animals (258). These involve horrifying tales: dogs have been raped with screwdrivers in Goa, langurs were beaten to death in Telangana, and puppies have been poisoned in Kolkata.
          </p>
          <p>
            Even after that, activists and advocates caution that these recorded incidents are only an inkling. FIAPO projects that the real extent of cruelty could possibly be as much as 10 times the estimated number, or 50 animals possibly be killed in 24 hours, triggering 2 animals per hour.
          </p>
          <p>
            However, since there is no official data on tracking animal cruelty, such violence is still in the shadows.
          </p>
          <h3>The Reasons Why So Many Incidents Are Not Reported</h3>
          <p>
            Many cases exist where justice is hindered by the law and society. Over 20,000 cases of cruelty were registered within the BSPCA in Mumbai between 2011-2016, but in more than 13,000 cases, no offenders turned up in the court; they just ended up paying a fine amounting to rupees 10 and rupees 100.
          </p>
          <p>
            On a five-year basis, only 19,028 cases have been reported in Mumbai—none to very few action has been taken against the alleged perpetrators in the cases. This is almost 3800 cases per year, and none of them had real legal outcomes.
          </p>
          <p>
            1,231 cases of cruelty were reported in Odisha in a period of three years, and the sum of all the fines was 55,750/-. The same happens in Mumbai, where the annual number of offences is 300-350, yet certain activists state that these figures are akin to just a fraction of what happens, which is much too large to count accurately.
          </p>
          <h3>Authentic Accounts of Animal Abuse (As of June, 2025)</h3>
          <div class="overflow-x-auto my-4">
            <table class="min-w-full border border-gray-300 text-sm">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border px-2 py-1">Type of Abuse</th>
                  <th class="border px-2 py-1">Action Taken</th>
                  <th class="border px-2 py-1">Date</th>
                  <th class="border px-2 py-1">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border px-2 py-1">Stray dog poisoning (5 dogs died)</td>
                  <td class="border px-2 py-1">FIR registered under PCA Act & BNS; forensic & postmortem investigation</td>
                  <td class="border px-2 py-1">June 18, 2025</td>
                  <td class="border px-2 py-1">Battarahalli, Bengaluru</td>
                </tr>
                <tr>
                  <td class="border px-2 py-1">Man beat stray dog to death</td>
                  <td class="border px-2 py-1">FIR under BNS Section 325; accused booked</td>
                  <td class="border px-2 py-1">June 25, 2025</td>
                  <td class="border px-2 py-1">Vasna, Ahmedabad</td>
                </tr>
                <tr>
                  <td class="border px-2 py-1">Poisoning of 5 dogs (4 died)</td>
                  <td class="border px-2 py-1">FIR under PCA Act & BNS; ongoing police investigation</td>
                  <td class="border px-2 py-1">June 21, 2025</td>
                  <td class="border px-2 py-1">Adibatla, Hyderabad</td>
                </tr>
                <tr>
                  <td class="border px-2 py-1">Driver ran over puppy with car</td>
                  <td class="border px-2 py-1">FIR under PCA Act and BNS registered; legal notice to accused</td>
                  <td class="border px-2 py-1">~June 22, 2025</td>
                  <td class="border px-2 py-1">Baguiati, Kolkata</td>
                </tr>
                <tr>
                  <td class="border px-2 py-1">Community dog beaten to death</td>
                  <td class="border px-2 py-1">FIR registered under BNS & PCA Act; accused arrested</td>
                  <td class="border px-2 py-1">May 6, 2025</td>
                  <td class="border px-2 py-1">Patel Nagar, Delhi</td>
                </tr>
                <tr>
                  <td class="border px-2 py-1">Sexual assault & mutilation of dog</td>
                  <td class="border px-2 py-1">FIR registered under BNS; accused arrested with video evidence</td>
                  <td class="border px-2 py-1">March 17, 2025</td>
                  <td class="border px-2 py-1">Jayanagar, Bengaluru</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3>The Cultural Inhumanity That Is Glorified</h3>
          <p>
            Consider Jallikattu, a bull-taming sport of Tamil Nadu. 23 humans and countless numbers of bulls were killed during 2008-2017. Before events, the bulls are frequently mistreated: twisted tails, chilies in the eyes, a broken spine, and whatnot.
          </p>
          <p>
            These constant practices are indications of a systematic inability to pull tradition and animal welfare in unison. Brutality is ignored because of cultural pride where people do not want to forget it even in situations where there is no contribution to that activity done especially by influential groups.
          </p>
          <p>
            I have watched viral videos that are soon enough forgotten by the people; such is the case of a Pomeranian that is thrown off an eighth floor in Delhi: the owner gets to repay his karma by feeding dogs in the shelter, and nothing serious happens to the aggressor.
          </p>
          <h3>The Importance of Reporting</h3>
          <p>
            In absence of the data, there is no accountability: NCRB does not include animal cruelty data in its annual data of crime reports. Fines imposed under PCA Act had increased marginally since the year 1960 (10 to 50 Rupees). In draft amendments, fines of up to 75,000 rupees or imprisonment is proposed, however, they are still pending.
          </p>
          <p>
            This emptiness propagates savagery. Small payments are paid by offenders and streets are not safe for animals. Even worse, more aggression and human-animal conflict are created in inhumane environments. The cost of compassion will not always be cheap.
          </p>
          <p>
            I am not writing as an animal lover but as a person who feels that the value of a country is by how it treats its weakest members. Every unreported case eats away at our nationwide mind. Empowering the citizens to do more to help besides domesticating animals at home which is just— 72% care, 15% act. Now I think it is possible for you to forget about that cute pet on Instagram and consider the ugly truth: thousands of animals suffer in silence. We have got to insist on justice—not merely their justice, but our justice, the kind of society we want to be a part of.
          </p>
        </section>
      </div>
    `,
    image: "/abuse.jpeg",
    author: authors.find(a => a.username === "hetal-kothari")!,
    category: "Society & Culture",
    date: "2025-07-01",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: [
      "Animal Welfare",
      "India",
      "Society",
      "Law",
      "Culture",
      "Reporting",
      "Justice"
    ],
    featured: false,
    isPublished: true
  },
  {
    id: "50-years-since-the-death-of-democracy",
    title: "50 Years Since ‘The Death of Democracy’",
    slug: "50-years-since-the-death-of-democracy",
    excerpt: "A half-century after the Emergency, India still grapples with the shadows of suspended rights, mass imprisonments, and the silencing of dissent. What lessons remain for our democracy?",
    content: `
      <div class="article-content">
        <section>
          <p>
            June, 1975, Chanderwati, a middle-aged woman, was shot twice in the head. Her body was never seen by her kin, nor was the reason for her death declared by authorities. Raju, a young boy, arrested from residence by the police without a warrant, killed during investigation because he couldn’t bear the reckless beating and torture.
          </p>
          <p>
            These are just two cases, how do we know of them? Because their kin endured, to know where their loved ones went, how they left their homes — or in some cases, how they never even stepped out, yet never returned. Lakhs of other kins couldn’t endure as much and the atrocities were systematically shushed. Chandrawati’s postmortem was declared 42 years after her death, till then, it was just ‘natural death’.
          </p>
          <p>
            How is it relevant? What is it that we are referring to here? We are talking about the National Emergency declared by then Prime Minister Smt Indira Gandhi which completes its 50th anniversary this year. And no, this time it’s not Emergency ka Amrit Mahotsav, but a reminder of what should NOT happen in a democracy.
          </p>
          <h3>ANALYSING WHAT REALLY HAPPENED: Commissions Don’t Lie, but Governments Do</h3>
          <p>
            When one googles the reason, the first computer generated output that comes on screen is that the emergency was imposed due to internal disturbances and ‘imminent threat’ to India, but a closer, magnified look narrates a completely different story.
          </p>
          <p>
            In early 1970s, the famous JP movement or complete revolution movement arose, led by a semi-retired Jayaprakash Narayan, demanding for the fall of the Indira regime and accusing her of electoral malpractice. A case was filed, and the general aspiration was that it will be silenced after sometime, which has been a kind of norm in the Indian Judiciary, no one ever knows where cases go, but the tables were about to be turned. On June 12, 1975, Justice Jagmohanlal Sinha of the Allahabad High Court held Madam Prime Minister guilty of electoral malpractices.
          </p>
          <p>
            The political pressure on Justice Sinha was so intense, the Indian Express reports, that he had locked himself days before the verdict was to be delivered and that he had prepared two judgements, opposite in nature so that even if the judgements were leaked, it was the wrong one that reached the Lordship’s eye.
          </p>
          <p>
            Although the High Court banned her from contesting for six years, she was allowed to hold her post as the PM but was barred from voting in the Parliament. This led to so much nerve being pinched, that Smt Gandhi declared internal disturbance as prevalent and with a President who listened to what the PM wanted, on 25th June, 1975, the President declared national emergency exercising article 352 and citing ‘internal disturbance’ as the cause of declaration.
          </p>
          <h3>WHAT DID THE EMERGENCY BRING WITH IT?</h3>
          <h4>SUSPENSION OF RIGHTS:</h4>
          <p>
            Okay, the emergency was imposed, there must be some threat, so what?
          </p>
          <p>
            On June 27th, articles 358 and 359 were brought into action. What this meant was suspension of Articles 14, 19, 21 and 22, simply put, the rights to equality, freedom of speech, life, and equality before law. In short, a citizen was stripped of every right they had to protect themselves in their own homeland, exposing them to a multitude of hazards, law itself was one. One could not speak against the authorities, against any discrimination faced, could not seek the court as the guardian of their rights, could not claim any rights under article 21 i.e. right to life, also, the court was also not bound anymore to treat citizens equally, giving the already corrupt and irritated administration an opportunity, to treat anyone as the lordship pleased.
          </p>
          <blockquote>
            <p>
              In words of the then Additional Solicitor General of India, Shri Fali S. Nariman,<br/>
              “In those dark days, with informers around, you only spoke within hearing of others, when you had to.”
            </p>
          </blockquote>
          <h4>MASS IMPRISONMENTS:</h4>
          <p>
            Again, some rights were suspended because the state was in emergency, so what?
          </p>
          <p>
            Readers, the state was in emergency for 21 months! Not a day or two. What happened due to that suspension is the next point.
          </p>
          <p>
            With suspension of fundamental rights in place and the overuse of Maintenance of Internal Security Act (MISA), the government went haywire! Close to 35,000 people were arrested ‘to maintain internal security’! Now, would it have been possible if one’s rights were in place and one could challenge or at least prove their innocence? What they did was to deprive a person of every possible straw and then plunged them into an ocean of any and every misery.
          </p>
          <p>
            The Shah Commission’s report tells stories unheard at that time, as of 1 January 1975, Indian jails housed 2,20,146 prisoners against a capacity of 1,83,369! Among them, 1,26,772 were under-trial prisoners.
          </p>
          <p>
            These mass imprisonments included not only the general public, but also leaders of the opposition, weakening their stance in parliament and burning down the rival train (metaphor intended). Among the arrested were the likes of Jayaprakash Narayan, Morarji Desai, Atal Bihari Vajpayee, L.K. Advani, all-in-all, every opposition player that could weaken this unwanted imposition of emergency.
          </p>
          <h4>THE FOURTH PILLAR OF DEMOCRACY:</h4>
          <p>
            To deny dissent is to deny democracy altogether. The emergency first struck the media, the fourth pillar of democracy. It was rather an attempt to demolish the pillar altogether.
          </p>
          <p>
            What came with the emergency, was horrendous control over the media houses with the government controlling what the media could publish and what it couldn’t. This was a time when the Indian Express, for the first time in its history, published with a blank front page and editorial in protest against the stringent and unjust regulations over media.
          </p>
          <p>
            Power supply to newspaper offices in Delhi was cut off during the early days of censorship enforcement and newspapers were labelled as ‘friendly’, ‘neutral’ or ‘hostile’ based on their editorial stance and coverage.
          </p>
          <p>
            The statutory watchdog, the Press Council of India was abolished altogether, leaving complete control to the government, so much so that the editors had to get government clearance before getting anything published [PIB].
          </p>
          <h4>MASS STERILISATION PROGRAMMES:</h4>
          <p>
            The Shah Commission stated that 1.07 crore sterilisations had been conducted nation-wide as a part of a population control programme, which was not a requirement, it was 1975, wake up!
          </p>
          <p>
            The Indian Express reports that to complete their ‘targets’, officials often conducted these sterilization drives on very young men and even those well beyond the upper age threshold of 55. The commission also reported 1,774 deaths linked to the procedures.
          </p>
          <h3>WHAT DO WE TAKE AWAY?</h3>
          <p>
            Fifty years have flown by, but the shadows of the Emergency still loom over our democratic institutions. What was done under the guise of “internal disturbance” was, in truth, a systematic dismantling of rights, voices and dissent. It wasn’t just 21 months of injustice or legislative control, it was a mirror held up to the fragility of freedom. And while leaders changed, and decades rolled on, have the structures of unchecked power truly been dismantled? Can we say with certainty that dissent today is met with dialogue, not suppression? Are we, as a nation, more vigilant, or merely more distracted? These are not just questions for historians, they are questions for every citizen who still believes in the promise of a democracy that listens, protects, and never forgets.
          </p>
        </section>
      </div>
    `,
    image: "/emergecy.jpeg",
    author: authors.find(a => a.username === "atulit-pandey")!,
    category: "Politics & History",
    date: "2025-07-01",
    readTime: "9 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: [
      "Emergency",
      "Democracy",
      "India",
      "History",
      "Civil Rights",
      "Media",
      "Politics"
    ],
    featured: false,
    isPublished: true
  },
  {
    id: "not-like-other-girls-babe-i-was-just-misguided",
    title: "Not Like Other Girls? Babe, I Was Just Misguided.",
    slug: "not-like-other-girls-babe-i-was-just-misguided",
    excerpt: "A personal journey from internalized misogyny to embracing girlhood, pink, and the power of being 'like other girls.'",
    content: `
      <div class="article-content">
        <section>
          <h2>1. I Thought I Was Different (I Was Just Brainwashed)</h2>
          <p>
            For a large part of my teen life, I thought I was built differently. And by “different,” I mean not like other girls. You know the line — the one used in Wattpad bios, boy compliments, and mildly toxic friendships: “You’re not like other girls.”
          </p>
          <p>
            And I? I took that and ran with it like it was a Nobel Prize.
          </p>
          <p>
            I thought pink was embarrassing, crushes were for people with nothing better to do, and girl groups were chaotic emotional black holes full of drama, selfies, and people who cared too much about K-pop and Kajal.
          </p>
          <p>
            At one point, I literally felt like a plan wasn’t “fun” unless there were guy friends involved. All-girl plans? Emotion. Chatter. Feelings. Ew. I’d romanticised being “one of the boys” without realising I was slowly building my identity out of everything I wasn’t — and that “wasn’t” was always other girls.
          </p>
          <p>
            And I felt proud of this. Like somehow, I had hacked femininity. Skipped the line. Outsmarted the clichés. Turns out, I had just deeply internalised misogyny in a super aesthetic way.
          </p>
          <h2>2. Girlhood Was My Villain Origin Story</h2>
          <p>
            Let’s talk about the symptoms.
          </p>
          <p>
            I rolled my eyes at girls who cried over boys. I was allergic to pink. I believed girls who wore eyeliner in 9th grade were “trying too hard.” And God forbid someone got too close to my male friends — the audacity! I had worked hard for that male validation.
          </p>
          <p>
            Also, dating? Never tried it. Not because I didn’t have crushes (I did, and they were intense enough to fuel an entire Taylor Swift album), but because I had convinced myself that having a crush made me weak. Made me basic. Made me… “just like other girls.”
          </p>
          <p>
            And we couldn’t have that, now could we?
          </p>
          <p>
            Even today, when I catch myself liking someone, a small, stubborn part of me still flinches. Like my brain's screaming: Abort mission! Feelings are for the weak! It’s embarrassing. I’m working on it.
          </p>
          <p>
            But what’s wild is, while I was trying so hard not to be “that girl,” I didn’t even realise what kind of girl I was turning into — one who was scared of softness, scared of bonding, and low-key gatekeeping male attention like it was limited edition.
          </p>
          <p>
            And I wasn’t the only one. My friend recently told me how she struggled with feeling feminine enough in her body growing up. She didn’t have curves and always felt like her body wasn’t "woman" enough — like she had missed the deadline to develop the right way. So while I was running away from femininity, she was chasing it, both of us thinking we were broken in different ways.
          </p>
          <p>
            Isn’t it funny (read: tragic) how girlhood is made to feel like a trap no matter where you stand?
          </p>
          <h2>Redemption Arc: I Like Pink Now</h2>
          <p>
            At some point between 17 and 18, something in me snapped — in a good way.
          </p>
          <p>
            Maybe it was burnout. Maybe feminism finally made it to my bloodstream. Or maybe I was just tired of pretending I didn’t want to be hugged by a girl group and cry over pretty men dancing in crop tops.
          </p>
          <p>
            Because plot twist: I became a SEVENTEEN stan. Yes. Thirteen men. One group. Zero skips.
          </p>
          <p>
            These men — in glittery jackets and emotionally charged lyrics — somehow helped me reclaim parts of myself I’d buried out of shame.
          </p>
          <p>
            I used to mock K-pop fans (secretly, obviously), but now? I will square up for my boys. SEVENTEEN didn’t just heal my playlist — they healed my inner teenager who thought softness was lame and crying over men was weak.
          </p>
          <p>
            Turns out, it's not weak to feel. It's ✨sexy✨. It's revolutionary.
          </p>
          <p>
            And honestly? If loving K-pop makes me "like other girls," then hand me a lightstick and glitter eyeliner because I’m all in. Also, pink? Freaking iconic. I wear it. I rock it. I feel powerful in it.
          </p>
          <p>
            So what if I match my notebook, earrings, and soul in one color scheme? At least I’m coordinated.
          </p>
          <p>
            I also now spend more time with girls, and wow — girls are deliciously chaotic in the best way. There's unmatched comfort in discussing skincare, boy problems, and intergenerational trauma over aloo patties. 10/10, would recommend.
          </p>
          <p>
            I only have one male friend now, and I don't treat him like a trophy anymore. He’s cool. He listens. But he doesn’t define me. I’m not here for boy validation. I’m here for healing, hotness, and Hoshi’s fancams.
          </p>
          <p>
            I still feel awkward when I have a crush, yes. But now, I treat it like a high school musical subplot, not a crime against feminism. I romanticize things. I cringe. I overanalyze eye contact. I suffer — but in a hot way.
          </p>
          <p>
            Because being soft is no longer my enemy. Being "like other girls" is no longer my fear. It's my superpower.
          </p>
          <h2>Epilogue (Because I’m Dramatic Like That)</h2>
          <p>
            You know what’s truly basic? A system that trains girls to fight each other for scraps of approval.
          </p>
          <p>
            The whole “not like other girls” thing is just another cage — a prettier one, with better lighting, but a cage nonetheless. It keeps us isolated, insecure, and constantly performing a version of ourselves that isn’t real.
          </p>
          <p>
            So here’s the truth: I am like other girls. And that’s the best thing about me.
          </p>
          <p>
            Because other girls are bold, brilliant, chaotic, loving, layered, angry, healing, messy, magical, and real.
          </p>
          <p>
            So if anyone ever tells you “you’re not like other girls,” just smile and say: “Thank God I am.”
          </p>
        </section>
      </div>
    `,
    image: "/not.jpeg",
    author: authors.find(a => a.username === "manasvi-srivastava")!,
    category: "Features",
    date: "2025-07-02",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: [
      "Girlhood",
      "Feminism",
      "Personal Essay",
      "Identity",
      "Misogyny",
      "K-pop",
      "Redemption"
    ],
    featured: false,
    isPublished: true
  },
  {
    id: "the-oscar-bait-industrial-complex",
    title: "The Oscar-Bait Industrial Complex",
    slug: "the-oscar-bait-industrial-complex",
    excerpt: "Why today’s most “important” films feel like homework—and what we’re losing in the process.",
    content: `
      <div class="article-content">
        <section>
          <p>
            There’s a peculiar silence that follows the end of a prestige film - the kind reserved for funerals, or homework you’re proud to have completed.<br/>
            It’s not the stunned, breathless silence that trails something breathtaking. A silence born not of awe, but of reverence—of obligation. The kind of hush we offer after seeing something we’re told is good, something we’re expected to admire.<br/>
            This is the paradox of the Oscar-bait era: our most awarded films rarely move us. They press on us, heavy with historical pain, moral correctness, and visual austerity, but leave behind little but a vague sense of dutiful applause.<br/>
            Every awards season, the world’s most lauded cinema is not the most alive, the most inventive, or even the most watched—it is the most morally dressed. These movies don’t want to be loved; they want to be respected. And if you don’t like them, clearly, you didn’t try hard enough.
          </p>
          <h3>Act One: The Performance of Prestige</h3>
          <p>
            In 2024, Oppenheimer swept the Oscars like a dutifully well-dressed valedictorian. Yes, Nolan’s film was technically stunning. Yes, it had scale. But at its core, it was a three-hour exercise in High Seriousness, where men explain war to each other in oak-paneled rooms and women are reduced to psychiatric shadows.<br/>
            Cue: Florence Pugh naked and sad.<br/>
            Cue: Cillian Murphy in profile, thinking.<br/>
            Cue: a scene where someone says, “This will change the world.”<br/>
            Hollywood’s idea of prestige these days? Men with tortured legacies and women with piano music playing softly behind them.<br/>
            And Hollywood isn’t alone.
          </p>
          <h3>Act Two: The Bollywood Awards-ification</h3>
          <p>
            2024-25 has seen an unsettling trend in Indian cinema: the rise of the “festival film” that plays more like an application to Cannes than a movie. Let’s name names.
          </p>
          <p>
            <strong>Ae Watan Mere Watan</strong><br/>
            A perfectly packaged tale of radio and rebellion, Sara Ali Khan’s earnest patriot in Kannan Iyer’s period piece ticks every festival box. It is historically reverent, politically risk-averse, and visually sepia-toned. The suffering is aesthetic. The rage is filtered.<br/>
            “It’s the kind of nationalism that smells like sandalwood and cries once an hour,”—heard in whispers.
          </p>
          <p>
            <strong>The Sabarmati Files</strong><br/>
            A 2025 release that tried to walk in the footsteps of The Kashmir Files, but without the venom or viral bite. Pain is staged. Violence is implied. Everyone emotes, but no one feels.<br/>
            It wants to win an award, not an argument.
          </p>
          <p>
            <strong>Ae Mere Dil ke Ashkon</strong><br/>
            (Coming soon to your closest jury festival)<br/>
            You haven’t heard of it yet, but rest assured, it has a single-take rape scene, a blind girl with an iPad, and at least one monologue about freedom. It will win Best Film (Human Rights) somewhere like Busan or Tallinn. You heard it here first.
          </p>
          <h3>Act Three: The Math of Manipulation</h3>
          <p>
            There’s a formula.<br/>
            Take a trauma (Partition, caste, cancer, colonialism)<br/>
            Add an underdog (preferably mute, blind, or oppressed)<br/>
            Shoot in natural light<br/>
            Cast someone “de-glam” (this year: Bhumi Pednekar in mud)<br/>
            Title it in Urdu or Latin<br/>
            Submit to Sundance
          </p>
          <p>
            These aren’t bad stories. But too often, they’re delivered as mandatory virtue projects, not lived experiences. Art made not for catharsis, but for red carpet. Prestige cinema is terrified of spontaneity. It doesn't trust the audience to laugh and still care. It doesn’t believe that truth can arrive in colour, or catharsis in chaos.
          </p>
          <h3>Act Four: The Guilt in Pleasure</h3>
          <p>
            And so somewhere along the way, we learned to apologize for joy.<br/>
            Loving a film that’s bright, funny, or wildly entertaining now requires a qualifier: “It’s my guilty pleasure.” As if pleasure, on its own, needs to be excused. In this language, joy is frivolous. Whimsy is immature. Irony is dangerous.<br/>
            You hear it all the time. People whisper their affection for Barbie or Badrinath ki Dulhania like they’re confessing sins simply because they dared to be emotionally accessible.<br/>
            This is the fallout of prestige culture: it’s not enough to enjoy something. You have to suffer for it. Cinema that’s colorful, commercial, or comfortingly human is seen as unserious, unless wrapped in trauma or trimmed in grayscale.<br/>
            So we shame joy. We reward austerity. And we forget that art doesn’t need to hurt to matter.
          </p>
          <h3>So What About the Fun Stuff?</h3>
          <p>
            <strong>Barbie</strong> - too pink, too playful, too busy making jokes about the patriarchy to win Best Picture.<br/>
            <strong>Darlings</strong> - too dark, too domestic, too feminist for comfort.<br/>
            <strong>The Worst Person in the World</strong> - too messy, too real, too unwilling to resolve neatly.<br/>
            <strong>Laapataa Ladies</strong> - too rural, too witty, too feminist.<br/>
            <strong>12th Fail</strong> - too honest, too simple, too unpolished.<br/>
            <strong>Heropanti 2</strong> - okay, just bad. Even Oscar-bait needs limits.
          </p>
          <p>
            When awards season ends, what’s left is not excellence but exhaustion. A string of films that made you feel bad, slow, and vaguely guilty for checking your phone.
          </p>
          <h3>Finale: What Pauline Kael Knew</h3>
          <p>
            Pauline Kael, high priestess of cine-snark, once wrote, “When we champion ‘art,’ we may be forgetting that what movies offer at their best is kinetic joy.”<br/>
            She hated pretension. She hated moral piety. She liked films that bled, breathed, and broke rules.<br/>
            We now live in the opposite world—where films beg to be graded like essays. Where watching feels like enduring. Where Oscar season (and its Mumbai mimic) is a mausoleum of meaning.<br/>
            “Award-winning” should not be a synonym for “emotionally manipulative.”<br/>
            Until we give up the cult of respectable cinema, we’ll keep applauding the same beige, brooding films over and over. And the only people truly thrilled by that? The ones holding the trophies—or those whose entire personality hinges on being the kind of person who “only watches classics.”<br/>
            <br/>
            <em>-Editor-in-chief typing free of guilt who still believes movies should move before they moralize.</em>
          </p>
        </section>
      </div>
    `,
    image: "/oscar.jpeg",
    author: authors.find(a => a.username === "shumaila-khan")!,
    category: "Arts & Culture",
    date: "2025-07-02",
    readTime: "7 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: [
      "Oscars",
      "Cinema",
      "Film Criticism",
      "Bollywood",
      "Hollywood",
      "Awards",
      "Culture"
    ],
    featured: false,
    isPublished: true
  },
  {
    id: "women-in-charge-peace-data",
    title: "Women in charge could mean less war – And the data backs it up!",
    slug: "women-in-charge-could-mean-less-war-and-the-data-backs-it-up",
    excerpt: "A growing body of research shows that more women in leadership means more peace, less conflict, and a new vision for global power.",
    content: `
      <div class="article-content">
        <section>
          <p>
            "War is a man’s game," the adage goes, and unfortunately, history often proves it right. But what if we flipped the script? What if women, more often than not, held the reins of power globally? A growing body of research suggests that increased female leadership correlates with more peaceful societies. I believe this conversation is more than just about gender parity in leadership; it's about reimagining a future that prioritizes diplomacy, care, and collaboration over aggression and dominance.
          </p>
          <p>
            Contrary to popular stereotypes that leadership requires 'aggression' and ‘toughness,’ studies show that female leaders often rely more on dialogue, compromise, and community-based problem-solving, all of which are essential for peace.
          </p>
          <p>
            India, a country of over 1.4 billion, has witnessed the power of women in its freedom movement, governance, and grassroots activism. Yet, leadership, especially in politics and conflict resolution, remains overwhelmingly male-dominated. I believe the question isn't "Can women lead?" but rather "What happens when they do?" Globally and locally, the evidence suggests a clear answer: having more women in power leads to more peace.
          </p>
          <p>
            India, like many other nations, faces internal conflicts from insurgency in the Northeast to communal tensions, gender-based violence, and political polarization. In such a context, empowering women in leadership is not just a gender issue; it's a peace strategy.
          </p>
          <h3>The Evidence: More women leaders, lower Conflict rates</h3>
          <ol>
            <li>
              <strong>Liberia: Ellen Johnson Sirleaf’s Peace Legacy</strong><br/>
              Ellen Johnson Sirleaf became Africa's first elected female head of state in 2006, taking over a country torn by 14 years of civil war. Under her leadership, Liberia saw substantial recovery, demobilization of armed groups, support for women's peace movements like the Women of Liberia Mass Action for Peace, and the creation of institutions promoting good governance. The country stabilized significantly, and Sirleaf was awarded the Nobel Peace Prize in 2011 for her non-violent struggle for women’s safety and rights.
            </li>
            <li>
              <strong>Rwanda: Women in Parliament Post-Genocide</strong><br/>
              After the 1994 genocide, Rwanda rebuilt its political framework by heavily involving women. Today, Rwanda has the highest percentage of women in parliament in the world — over 60%. A study by the Council on Foreign Relations found that this inclusive governance model has contributed to improved social harmony and a consistent reduction in internal conflicts. Women leaders prioritized health, education, and social reconciliation, which are critical for lasting peace.
            </li>
            <li>
              <strong>New Zealand: Jacinda Ardern’s Crisis Management</strong><br/>
              Though New Zealand isn't war-torn, Jacinda Ardern's leadership during the Christchurch terror attack and the COVID-19 pandemic demonstrates how a feminine approach to leadership marked by empathy, clarity, and inclusion can maintain national unity in turbulent times.
            </li>
            <li>
              <strong>India: In Manipur, Women-Led Civil Rights Groups</strong><br/>
              The Meira Paibi (Women Torchbearers) have played a historic role in non-violent protest and community peacekeeping. In Kashmir, for example, Mehbooba Mufti was the first woman CM of Jammu & Kashmir and, despite criticism, advocated for dialogue over military action. Though her political legacy is complex, her approach signals a shift from guns to governance.
            </li>
          </ol>
          <h3>Gender Equality Does Lead to Peace: Says the Data</h3>
          <p>
            A 2015 study by the ‘Institute for Economics and Peace' revealed a positive correlation between gender equality and peacefulness. Countries that scored higher on gender equality indices were far less likely to be involved in violent conflict.
          </p>
          <p>
            In India, although women make up nearly half the population, they account for only around 15% of Lok Sabha MPs and just over 10% of state legislators. Peace and equality go hand in hand, so when women are missing from the decision-making table, so is their capacity to negotiate for peace, justice, and inclusion.
          </p>
          <p>
            The Georgetown Institute for Women, Peace and Security maintains a global index ranking countries by women's inclusion, justice, and security. The top-ranking countries, such as Norway, Switzerland, and Finland, also rank among the most peaceful and stable nations globally, with minimal military engagement.
          </p>
          <h3>Govern With Heart: How Women’s Emotions Can Transform Power and Peace</h3>
          <p>
            <strong>Women Govern Differently</strong><br/>
            Studies in political psychology and sociology suggest women are socialized to value relationships, consensus, and long-term thinking. These traits aren't weaknesses; they're strengths when it comes to de-escalating conflict and creating durable peace. Men, on the other hand, are often taught to see strength through control, even aggression, traits that have historically dominated warfare and colonization.
          </p>
          <p>
            When women gain access to power, they often invest more in human welfare, healthcare, and education—foundations of peaceful societies. For instance, research published in the American Journal of Political Science found that women legislators in the U.S. sponsor and co-sponsor more bills related to health and education, areas indirectly connected to reducing social tensions and violence.
          </p>
          <h3>Feminism's Role in Peacebuilding</h3>
          <p>
            Let’s be clear, it isn’t about tokenism. Feminism demands systematic transformation and inclusion.<br/>
            Feminism isn’t just about representation, it’s about restructuring power. A feminist perspective questions the glorification of military power and embraces non-violent resistance, intersectionality, and restorative justice. The feminist peace movement from Leymah Gbowee in Liberia to grassroots groups in Colombia has historically played critical roles in negotiating ceasefires and rebuilding post-conflict societies. True feminism isn’t about an individual woman rising in a male-dominated structure; it’s about restructuring the system to include everyone, especially the most marginalised.
          </p>
          <p>
            I see women’s leadership as essential, not just for equality, but for global survival. Climate crises, refugee movements, and cyber warfare all demand leadership that is empathetic, globally cooperative, and peace-oriented, and women have shown they can deliver.
          </p>
          <h3>Challenges and Roadblocks</h3>
          <p>
            Despite the data, women remain vastly underrepresented in peace processes and political leadership. The road to actual change is riddled, especially in a country as diverse as India. As of 2024, women made up only 26% of national parliamentarians globally and less than 15% of peace negotiators. The political class often sees gender empowerment as a check box, not a necessity. This underrepresentation isn’t due to a lack of talent; it's the result of systemic barriers, patriarchal institutions, and the masculinization of leadership. A woman in public life is judged more harshly than a man for her clothing, speech, assertiveness, and choices. Those who break these norms, especially outspoken feminists or activists, are labelled as “aggressive”, “anti-national”, or “characterless”. This societal policing discourages many young girls from even dreaming of political or leadership roles.
          </p>
          <h3>Conclusion</h3>
          <p>
            The world has given war a chance for millennia. Statistically and philosophically, women in power tend to steer away from conflict and toward inclusion, negotiation, and peace.<br/>
            So, if we want a more peaceful future, the answer isn’t just more women in power; it’s building systems that embrace feminist leadership values.<br/>
            Because peace is not passive, it is a powerful, intentional choice. And women, time and again, have shown they’re ready to lead the way. Let’s stop asking women to lead “like men”. Let’s start asking the world to value the way women lead – with heart, with healing, and with hope.
          </p>
        </section>
      </div>
    `,
    image: "/arti.jpeg",
    author: {
      name: "Member of Femcore",
      designation: "Member of Femcore"
    },
    category: "Features",
    date: "2025-07-03",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: [
      "Women Leaders",
      "Peace",
      "Feminism",
      "Conflict Resolution",
      "Gender Equality",
      "Politics",
      "Society"
    ],
    featured: false,
    isPublished: true
  },
  {
    id: "books-that-feel-like-rain-july-reading-mood",
    title: "Books That Feel Like Rain: A July Reading Mood",
    slug: "books-that-feel-like-rain-july-reading-mood",
    excerpt: "Seven books that match the gentle, reflective rhythm of July—stories to keep you company like a rainy afternoon.",
    content: `
      <div class="article-content">
        <section>
          <p>
            July doesn’t come crashing in — it drifts gently, just like the first drizzle on dry ground. There’s a stillness to this month that feels both comforting and nostalgic. The skies grow quieter, the air thickens with memory, and somehow, even our emotions feel more tender. Whether you’re walking under cloudy skies or watching the raindrops blur your windowpane, July invites you to slow down — to pause, feel, and simply be.
          </p>
          <p>
            This is the season of soft music, warm drinks, and the kind of books that speak more to the heart than the mind. You know the kind, stories that don’t rush, characters who linger, and words that hold space for silence. Books that feel like rain: steady, calming, sometimes a little heavy, but always welcome.
          </p>
          <p>
            Here are seven reads that match the quiet rhythm of July and offer the same kind of companionship as a rainy afternoon spent with your thoughts.
          </p>
          <ol>
            <li>
              <strong>Norwegian Wood – Haruki Murakami</strong><br/>
              This book doesn’t try to impress — it simply sits with you. Murakami captures the ache of love and loss in a way that feels deeply personal. It’s quiet, even a little haunting, but incredibly real. Like a slow, consistent rain that lets you think, feel, and remember, Norwegian Wood doesn’t demand anything from you — it just stays.
            </li>
            <li>
              <strong>The God of Small Things – Arundhati Roy</strong><br/>
              Set in lush, rain-kissed Kerala, this novel doesn’t just talk about monsoon, it lives inside it. The language flows like water, rich and poetic. The story is layered with memory, pain, and forbidden love — elements that quietly echo throughout its pages. It’s the kind of book that seeps in gradually, much like the scent of wet earth after a long shower, heavy, familiar, and impossible to forget.
            </li>
            <li>
              <strong>Before the Coffee Gets Cold – Toshikazu Kawaguchi</strong><br/>
              Inside a small café in Tokyo, people can time travel, but only under one condition: they must return before the coffee cools. This book is soft-spoken, yet deeply touching. It reflects on things we wish we’d said, moments we’d relive, and the courage to let go. Just like rain on a slow afternoon, it’s gentle, nostalgic, and quietly magical.
            </li>
            <li>
              <strong>A Man Called Ove – Fredrik Backman</strong><br/>
              Ove starts off as the neighborhood grump, but there’s so much more underneath. As his story unfolds, it brings unexpected warmth and laughter, like sunlight breaking through a stormy sky. This book reminds you that people carry stories they never tell, and sometimes, love comes wrapped in the most unusual packaging.
            </li>
            <li>
              <strong>Eleanor Oliphant Is Completely Fine – Gail Honeyman</strong><br/>
              Eleanor is alone, misunderstood, and stuck in routine, until life slowly opens her up. Her story is about healing, connection, and learning how to be seen. It echoes the stillness before a storm and the gentle pouring that follows — quiet at first, but deeply transformative. It reminds us that not all healing is loud, and not all loneliness is visible.
            </li>
            <li>
              <strong>The Night Circus – Erin Morgenstern</strong><br/>
              A love story hidden inside a magical circus that only opens at night, this book is pure atmosphere. It feels like walking through a foggy evening with wonder in the air. The writing is lush, the pacing dreamy, and the world within it utterly spellbinding. Perfect for when you want to escape into something slow, surreal, and softly enchanting.
            </li>
            <li>
              <strong>The Forty Rules of Love – Elif Shafak</strong><br/>
              This novel moves between the modern world and the ancient friendship of Rumi and Shams. It explores love — romantic, spiritual, and divine — in a way that feels like a gentle unfolding. It’s thoughtful, soulful, and quietly stirring, like a soft rain that washes over everything you thought you knew.
            </li>
          </ol>
          <h3>Final Thoughts: Let the Rain Choose Your Book</h3>
          <p>
            July brings more than just water from the sky; it brings space. Space to reflect, to remember, to recharge. These books won’t shout over the rain or compete with its quiet — they’ll simply sit beside you, page by page, like a soft voice in a silent room.
          </p>
          <p>
            So let this month be slow. Let the rain fall and the words follow. Let these stories keep you company, not loudly, but meaningfully. After all, some of the most beautiful things in life arrive unannounced — just like a drizzle on an ordinary day, or a story that stays long after the last page.
          </p>
        </section>
      </div>
    `,
    image: "/monsoon.jpeg",
    author: {
      name: "Muskan Srivastava",
      designation: "Member of Bibliocore"
    },
    category: "Features",
    date: "2025-07-03",
    readTime: "6 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: [
      "Books",
      "Reading",
      "Monsoon",
      "Literature",
      "Mood",
      "Rainy Season",
      "Recommendations"
    ],
    featured: false,
    isPublished: true
  },
  {
    id: "her-choice-her-voice-reproductive-rights-indian-youth",
    title: "Her Choice, Her Voice: Why Are Reproductive Rights So Necessary for Indian Youth",
    slug: "her-choice-her-voice-reproductive-rights-indian-youth",
    excerpt: "A deep dive into why reproductive rights are not just ideals, but urgent, personal, and revolutionary necessities for India's 365 million youth—especially young women.",
    content: `
      <div class="article-content">
        <section>
          <p>
            Discussions on reproductive rights in the largest democracy in the world are muted, tainted with stigma, and tend to be touched by the presence of moral policing. But to the 365 million young people in India (about two-thirds of the country is under 25), these rights are no such ideals. They are individual, pressing, and revolutionary. Reproductive rights are associated with a right to contraception, safe abortion, sexual education, and freedom to choose one's body. Fighting to win these rights is like having a battle over dignity, equality, and freedom for young Indians, mostly women in India.
          </p>
          <h3>Reproductive Rights: Why they matter to us</h3>
          <p>
            Reproductive right, according to the World Health Organization (WHO), is the freedom of an individual to control the number and timing of their children responsibly. These rights are essential in the Indian situation where women are entrapped by expectations of society, gender roles, and pressures of family.
          </p>
          <p>
            The right to abortion is vital for any individual woman to achieve their full potential. By banning abortion, women are put at risk by forcing them to use illegal abortionists. The right to abortion should be part of pregnancy rights that enables women to make a truly free choice whether to end a pregnancy or continue.
          </p>
          <p>
            Access to reproductive health services is directly associated with education and activities, including career opportunities and mental health. When a young woman has the freedom of choice whether to have children or not, then she is more likely to get a proper education and join the workforce, and add value to society. Failure to give her this option sets her into a dependence cycle created by the patriarchal society.
          </p>
          <h3>Ground Realities in India</h3>
          <p>
            Safe abortion and contraception are not widely accessible, even though there are constitutional and legislative guarantees. Additionally, unmarried women and women in rural or disadvantaged groups cannot apply these general grants in practice.
          </p>
          <p>
            The study conducted by the Guttmacher Institute in 2022 shows that almost half of all pregnancies in India are unintended, and every third pregnancy leads to abortion, many of which are unsafe. The label that is made up of premarital sex and the judgmental nature of healthcare providers tends to compel young women to take unsafe options at the cost of their lives and futures.
          </p>
          <h4>An example of real life: The Story of a college student</h4>
          <p>
            A 22-year-old college student in Delhi found herself pregnant after her partner was unable to use contraception correctly. She even went to a government hospital to have an abortion, but the personnel denied her any service, saying that it was their moral objection. Her family did not know about her relationship, and she went to an unlicensed clinic and requested help. The procedure resulted in critical health issues, and she spent weeks in the hospital. In a country where reproductive rights are legal, how can access still be denied on the grounds of personal belief?
          </p>
          <h4>Another real-life example: 10-year-old rape victim in Bihar</h4>
          <p>
            Another tragic story of 2023 is that 10-year-old girl in Bihar, impregnated following repeated rapes by a relative, was refused abortion in a local hospital. When the court proceedings started, her pregnancy was past the official legal limit of 24 weeks in the MTP (Medical Termination of Pregnancy) Act. The Supreme Court later got involved and permitted the termination on the grounds of mental and physical trauma to the child. The delay and system breakdown indicated how the legal and medical systems often do the most harm to the victims by adding to the pain of the most vulnerable.
          </p>
          <p>
            These kind of cases indicate a dark truth: reproductive rights in India depend on moral considerations, bureaucracy, and legal uncertainty, even in rape and sexual violence situations.
          </p>
          <h3>How the youth is exercising their Freedom of choice</h3>
          <p>
            Policies don’t exist as something that the youth accepts as it is. It is the youth who make the changes. In India, the youth are organizing grassroots movements, internet campaigns, and legal petitions to campaign on reproductive justice.
          </p>
          <p>
            As an example, YP Foundation, a youth organization in India, trains adolescents and young adults to support their sexual and reproductive rights. They have trained thousands of students spread across states with their message of knowing your body and knowing your rights through their campaign so that those who have been abused can speak out and get assistance without shame.
          </p>
          <p>
            In the other instance, a 23-year-old woman applied in the court of Bombay High Court for permission to abort a 24-week fetus, and underwent the same in 2020 in Mumbai following abnormalities in the fetus. The case which ruled in her esteem established a valuable precedent regarding the right to reproductive choice and broadened the knowledge of maternal mental health.
          </p>
          <h3>Education and Policy Role</h3>
          <p>
            In India, sexuality education (CSE) is still a gap in the school program. In some cases, where it is managed, it is defanged and moralized. Not only does CSE help to prevent teenage pregnancies and sexually transmitted infections, but it also helps to establish respect and consent in relationships.
          </p>
          <p>
            In addition, policy should be able to keep up with ground realities. The introduced amendment to the MTP Act in 2021 has stretched out the cut-off limit of abortion to 24 weeks for some categories, as positive, but remains an act subject to the approval of the medical boards, which tend to slow down the life-saving procedure. The youth advocates support the rights-based approach that allows the individual who wants an abortion to make the decision on their own.
          </p>
          <h3>Calling to Action</h3>
          <p>
            Medical access to reproductive rights encompasses human rights. Indian youth and women, during their autonomy formation, prioritize their ability to make significant and independent choices regarding their bodies. Prevention of unwanted pregnancies is not the only aspect, but this is a matter of taking control of their life, their choice, and their future.
          </p>
          <p>
            We require radical policy changes, broad-based education, and attitude change to make sure that all young Indians can access reproductive health services without fear and stigma. She must be able to respect her choice and be heard, then we may say that we belong to a truly democratic and inclusive country.
          </p>
        </section>
      </div>
    `,
    image: "/tanuu.jpeg",
    author: authors.find(a => a.username === "hetal-kothari")!,
    category: "Features",
    date: "2025-07-04",
    readTime: "7 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: [
      "Reproductive Rights",
      "Youth",
      "India",
      "Women's Health",
      "Abortion",
      "Policy",
      "Education"
    ],
    featured: false,
    isPublished: true
  },
  {
    id: "equality-in-name-only-casteism-modern-india",
    title: "Equality in name only: the truth behind casteism in modern day India",
    slug: "equality-in-name-only-casteism-modern-india",
    excerpt: "Despite claims that casteism is a thing of the past, everyday experiences and casual remarks reveal the persistent reality of caste-based discrimination in India.",
    content: `
      <div class="article-content">
        <section>
          <p>
            Reservation? For what? Casteism doesn't exist now! In what era are you living? Sounds familiar? With reservation being the hot topic, people often throw these sentences around casually, but the truth is far from it.
          </p>
          <h3>My personal experience during my first year:</h3>
          <p>
            I would like to share two very personal instances that happened to me as a freshman.<br/>
            Me and an acquaintance were having random conversation and suddenly the topic of reservation came up, but instead of stating facts like how reservation is taking away from the well-deserving (which is debatable), they said something along the lines of how these lower-caste people are undeserving and are less capable academically, they have less intellect since their ancestors did the dirty work, and once they got to know I am from these so-called lower castes, fingers were pointed directly at me, questioning my abilities and my worth.
          </p>
          <p>
            The second instance happened with a friend; they, not knowing that I myself belong to these so-called "lower castes," called them murderers, "They have it in their blood, you know; they are born with this criminal mindset." I was furious, naturally, so we had a little banter, but that is in the past now.<br/>
            And these are just two instances in a span of 6 months and that too among university students, literate people. Now imagine what a person goes through in small towns and villages.
          </p>
          <h3>Ignoring the complexities:</h3>
          <p>
            Ignoring the complexities of castes is always a privilege for “upper castes”. And this privilege often takes the form of “casual casteism”.<br/>
            Casual casteism is when an “upper castes” person naturally assumes that they have every right to find faults in the “lower caste” person.<br/>
            Whether it be the question “how did you get the job?” or “you have it easy since you belong to a quota”, these are all just some form of casual casteism. Public spaces often witness such remarks as Dalits are ugly, cannot speak correctly, do not get good marks, are not skilled in extra-curricular activities, are not smart enough to put up cultural performances, are backward, timid, awkward, incompetent and worthless. Casual casteism constructs caste stereotypes that normalise the everyday behaviour of the dominant castes and depict Dalits in poor light.
          </p>
          <h3>But reservation…:</h3>
          <p>
            Now the counter argument for every form of casteism is “Caste based Reservation”. The people from general category often put forward this argument that they could not get that government college seat, that job just because a person from reserved category got a seat or the job and that too at less marks than them. The statement does hold truth in some form, but it does not, in any form give justification for casteism in any form. And after all is said and done it all comes down to that “You cannot win a race if the starting line is not the same”.<br/>
            A person from reserved category does not stand at the same place as a person from general category. They might have money but they do not have the same social circle, they do not have a privileged lineage and it might be a hard pill to swallow for some but they truly do not have the same respect in society.<br/>
            Coming from an oppressed background their ancestors had no education, land, money so they had to work to their bones to get the same financial standing as the ancestors of a person of general category.
          </p>
          <h3>Casteism 2.0:</h3>
          <p>
            Casteism now might not be in the form of untouchability, but it is still prevalent in instances such as these. There is so much shame linked with castes that if you look around yourself, you will always find a Brahmin, Kshatriya, Rajput, etc. wearing their castes like a badge of honour. They carry it proudly in their surnames and even on the sticker at the back of their cars.<br/>
            Why do you think it is? Because the people of India, no matter how literate they get, are not willing to give up on the hierarchy because they know that being on top is very comforting; it gives them power. So reservation may be the cause for you not getting a government seat, but you will never have to do manual scavenging to feed your family. You wouldn't feel shame in telling your surname; you had never and will never have to beg for representation in your own country, demand for acceptance in your own religion. What use is a temple to an "untouchable"? If God wanted them to pray, then he wouldn't have created this hierarchy from the beginning. What people from these reserved categories need is representation and respect. Which, sadly, the country and its people have failed to provide.
          </p>
          <p>
            If casteism doesn't exist, then why do you have separate dishes for your house help? If casteism doesn't exist, then what about the "dirty work" that is forced upon a particular group of people despite being illegal? If casteism doesn't exist, then why is it proud to be a Rajput and not a Shudra? Why do you use the term "chamar" as a slur? If casteism doesn't exist, then why are inter caste marriages a social crime? If casteism doesn't exist, then why are there such vicious comments online? Think about it: at your table of conversation, how many times have you made a joke about caste? How many times have you proudly said that I am a Brahmin, a Rajput? Just because you don't see people walking with brooms attached to their backs and a pot of water hung from their necks doesn't mean that casteism does not exist.
          </p>
          <blockquote>
            And as Dr. B.R. Ambedkar quotes: "The caste system is not a divine institution. It is a human institution, and it can be changed by human effort.” As humans we must strive to change, to bring about a reform, for caste system cannot be abolished by having internet caste marriages or by allowing a “shudra” into the temple. Caste is a state of mind and one can abolish caste system from society once they have abolished it from their minds.
          </blockquote>
        </section>
      </div>
    `,
    image: "/artuc.jpeg",
    author: {
      name: "Tanu Mohan",
      designation: "Member"
    },
    author: authors.find(a => a.username === "tanu-mohan")!,
    category: "Features",
    date: "2025-07-04",
    readTime: "6 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: [
      "Casteism",
      "Equality",
      "Reservation",
      "Society",
      "India",
      "Personal Experience",
      "Social Justice"
    ],
    featured: false,
    isPublished: true
  },
  {
    id: "betting-apps-broken-policies-india-environmental-roulette",
    title: "Betting Apps and Broken Policies: India's Favorite Game of Environmental Roulette",
    slug: "betting-apps-broken-policies-india-environmental-roulette",
    excerpt: "A satirical but serious comparison between the unchecked rise of betting apps and the fall of environmental regulation, highlighting how India is gambling with its future both economically and environmentally.",
    content: `
      <div class="article-content">
        <section>
          <h3>Introduction:</h3>
          <p>
            In a country where "Digital India" trends faster than forest fires, two crises are quietly thriving: the rise of betting apps and the fall of environmental regulation. While one exploits digital loopholes, the other abuses legal grey areas in ecological law — both fuelled by false promises, addictive incentives, and the absence of meaningful accountability.
          </p>
          <p>
            This article draws a satirical but serious comparison between these two seemingly unrelated issues, highlighting a chilling truth: India is gambling with its future, both economically and environmentally.
          </p>
  
          <h3>Level 1: Growth Without Guilt – The Unchecked Rise</h3>
          <p>
            Betting apps are exploding — Dream11 alone had over 180 million users by 2023, growing at 30% year-on-year. My11Circle, WinZo, and others push fantasy gaming with cashback rewards and influencer endorsements. The catch? They operate in a legally grey zone, often escaping the Public Gambling Act's oversight through "skill-based" classifications.
          </p>
          <p>
            Similarly, India ranked 8th globally in the Environmental Performance Index (EPI) — from the bottom. Illegal mining, river pollution, and deforestation go unchecked. In 2022 alone, the Central Pollution Control Board (CPCB) flagged 351 polluted river stretches, yet enforcement action remains minimal.
          </p>
          <p><strong>One corrupts the mind. The other corrupts the environment. Neither gets a red card.</strong></p>
  
          <h3>Level 2: Economic Mirage – When 'Growth' Masks Greed</h3>
          <p>
            Both sectors have a go-to justification: "We're boosting the economy!"
          </p>
          <p>
            <strong>Betting industry:</strong> "We generate jobs, tax revenue, and promote tech."
          </p>
          <p>
            <strong>Environmental deregulators:</strong> "We're building infrastructure, energy security, employment."
          </p>
          <p>But peel back the packaging:</p>
          <p>
            The All India Gaming Federation (AIGF) estimates only 5–10% of fantasy gamers earn profits — the rest lose money.
          </p>
          <p>
            On the environment front, a 2023 NITI Aayog report noted that over 70% of groundwater in India is polluted, mostly due to industrial runoff and lax enforcement.
          </p>
          <p><strong>Jobs = exploitative. Profits = temporary. Damage = generational.</strong></p>
  
          <h3>Level 3: Target the Weak — Hide the Damage</h3>
          <p>
            Ever seen betting app ads at 2 a.m.? That's by design — they target youth, night workers, and unemployed graduates craving quick income. Likewise, environmental damage hits India's most vulnerable first — tribal regions, rural belts, ecologically sensitive zones. These voices are rarely heard when forests become factories.
          </p>
          <p>
            According to the State of Forest Report 2021, India lost over 1,600 square kilometers of forest in just two years, mostly due to mining, infrastructure, and urban expansion in tribal areas.
          </p>
          <p><strong>Betting apps drain wallets. Policy loopholes drain aquifers. Both target the powerless — and call it "growth."</strong></p>
  
          <h3>Level 4: Skill vs Scam — The Loophole Olympics</h3>
          <p>
            Fantasy apps insist: "This is not gambling. It's skill-based gaming." By that logic, snake and ladder is just portfolio management.
          </p>
          <p>Environmental violations have their own vocabulary:</p>
          <p>"This isn't pollution. It's industrial progress."</p>
          <p>"This isn't deforestation. It's smart urbanization."</p>
          <p><strong>If Olympic medals were awarded for exploiting legal loopholes, we'd win golds in both departments.</strong></p>
  
          <h3>Final Round: Who Cleans Up?</h3>
          <p><strong>Spoiler: No one.</strong></p>
          <p>The bettor goes bankrupt.</p>
          <p>The groundwater goes dry.</p>
          <p>The company profits.</p>
          <p>The file gets buried.</p>
          <p>
            In 2023, only 38 out of 132 industrial zones in India complied with pollution standards, per CPCB data. On the betting side, over ₹10,000 crore was estimated to be spent during IPL 2024 through unofficial betting platforms — with minimal traceability or taxation.
          </p>
          <p><strong>India's playing a national game of roulette — with no accountability and no clean-up crew.</strong></p>
  
          <h3>Conclusion: Same Game. Different Boards.</h3>
          <p>
            So next time you scroll past a Dream11 ad, or hear a leader promising "balanced growth," pause and ask: Is this nation investing in its future… or just cashing out on its present?
          </p>
          <p>
            Because in both games — one digital, one ecological — we're the pawns, the prize, and the problem.
          </p>
          <p>
            It's time we demand regulation, not just rebranding, before survival becomes our only national sport.
          </p>
        </section>
      </div>
    `,
    image: "/betting.jpeg",
    author: {
      name: "Mudit Mehrotra",
      designation: "A concerned citizen, not a betting app brand ambassador"
    },
    category: "Features",
    date: "2025-07-05",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: [
      "Betting Apps",
      "Environmental Policy",
      "Digital India",
      "Regulation",
      "Economic Growth",
      "Social Issues",
      "Policy Loopholes",
      "Gambling",
      "Environmental Damage"
    ],
    featured: false,
    isPublished: true
  },
  {
    id: "beyond-legal-equality-opportunity-gender",
    title: "Beyond Legal Equality: How Opportunity Still Depends on Gender",
    slug: "beyond-legal-equality-opportunity-gender",
    excerpt: "While women have gained unprecedented legal rights, statistics reveal a complex reality where gender remains a powerful factor in shaping life outcomes, from wage disparities to unequal caregiving expectations.",
    content: `
      <div class="article-content">
        <section>
          <p>
            In past decades, women have gained unprecedented legal rights, with some people even questioning the need for feminism today. While it may appear on paper that women have finally achieved equality, the statistics present a more complex reality—where gender remains a powerful factor in shaping life outcomes. From disparities in wages and leadership roles to unequal caregiving expectations and subtle workplace biases, structural and cultural barriers persist in determining who advances and who falls behind.
          </p>
  
          <h3>Equality of opportunity</h3>
          <p>
            Multiple factors intermingle to form a gendered cycle of disadvantage.
          </p>
          <p>
            A report published by UNICEF in 2023 emphasized that adolescent girls in South Asia are more prone to experiencing anemia compared to boys—a condition that impairs cognitive development and physical stamina. Meanwhile, many ongoing studies show that in many societies, boys are prioritized when it comes to food within households, especially when resources are scarce. This early disadvantage impacts everything from brain development to disease susceptibility and a girl's capacity to engage fully in education, thus hindering future productivity.
          </p>
          <p>
            Globally, women remain economically vulnerable and dependent due to multiple factors, including unequal wages, limited access to formal employment, and the unequal burden of unpaid care work. Society expects women to work as if they don't have children and raise children as if they don't work. Women earn about 84 cents for every dollar men earn — a persistent 16% wage gap. The motherhood penalty widens early: earnings drop drastically after the first child, especially for women under 35, limiting lifetime income and career progression. Women must often over-educate to reach pay parity and remain underrepresented in leadership.
          </p>
          <p>
            Gender-based violence affects one in three women worldwide, significantly curtailing women's freedom, mobility, and ability to pursue education and employment opportunities without fear.
          </p>
          <p>
            Societal expectations and norms play a defining role in shaping opportunities, manifesting in subtle ways such as gendered toy choices and girls being socialized into roles that emphasize caregiving and prioritizing others over themselves. They are conditioned from a young age to believe that masculinity comes with freedom, while femininity comes with restrictions — when phrases like "boys will be boys" are used to justify boys' misbehavior, while girls are given a long "not-to-do" list.
          </p>
          <p>
            In India, despite legal prohibitions, data from the National Family Health Survey (NFHS-5, 2019–21) revealed that 23.3% of women aged 20–24 were married before the age of 18. Early marriage often leads to girls dropping out of school, an increased risk of early pregnancies, and limited opportunities for skill development and economic independence.
          </p>
          <p>
            <strong>Is there equality of opportunity if the rights and freedoms of women depend on the will and whims of others?</strong>
          </p>
  
          <h3>The Never-ending Tale of Hypocrisy</h3>
          <p>
            If Adam had picked the apple, it would have been called courage or curiosity. But when a woman desires freedom or autonomy, it is still too often seen as rebellion—or worse, a sin.
          </p>
          <p>
            A single leaked nude can destroy a woman's reputation forever. Meanwhile, a convicted felon or rapist can still become a minister or leader. Women are often criticized for "choosing a job over their children," while men in the same situation are praised for "working hard for their families." A working husband comes home to a cooked meal. A working wife comes home to cook the meal. In essence, they're working two jobs for the pay of one.
          </p>
          <p>
            Feminism gave women the right to work outside the home. Patriarchy gave men the privilege not to work inside it. Women have become independent, but men are rarely expected to evolve in kind.
          </p>
  
          <h3>Conclusion</h3>
          <p>
            Laws have changed, and that's a great step forward because legal reforms form the foundation but achieving real equality requires transforming the fundamental structures of society that continue to disadvantage women.
          </p>
          <p>
            When someone says that we don't need feminism, they are denying the inequality that still exists in our everyday lives. They are unwilling to change a world that already suits their needs so well.
          </p>
          <p>
            As G.D. Anderson wrote, <em>"Feminism isn't about making women stronger. Women are already strong; it's about changing the way the world perceives that strength."</em>
          </p>
        </section>
      </div>
    `,
    image: "/fe.jpeg",
    author: {
      id: "14",
      name: "Trishla Chaudhary",
      username: "trishla-chaudhary",
      image: "/Trishla.jpeg"
    },
    category: "Features",
    date: "2025-07-05",
    readTime: "7 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: [
      "Gender Equality",
      "Feminism",
      "Women's Rights",
      "Wage Gap",
      "Social Issues",
      "Workplace Bias",
      "Gender Discrimination",
      "Society",
      "Legal Rights"
    ],
    featured: false,
    isPublished: true
  },
  {
    id: "2025",
    title: "2025",
    slug: "2025",
    excerpt: "The Playbook - A deep dive into Project 2025 and its implications for democracy, examining how authoritarianism manifests in both the Global North and South.",
    content: `
      <div class="article-content">
        <section>
          <h3>The Playbook</h3>
          <p>
            Let's begin not with a tweet or a riot, but with a pdf. It's 920 pages long, reads like a corporate mission statement ghostwritten by Machiavelli, and goes by a name only a Bond villain or a right-wing think tank could conjure: <strong>Project 2025: Mandate for Leadership</strong>. Officially, it serves as a transition guide for a hypothetical Republican presidency in the post-Biden era. Unofficially, it's a choose-your-own-adventure novel where democracy forgets how to read.
          </p>
          <p>
            The document proposes, among other things, replacing career civil servants with values-aligned appointees, consolidating executive authority, and restoring what it terms "constitutional order" through a sweeping reinterpretation of federal power. As for the Department of Education? Well, let's say it might be wise to memorize the alphabet while it still exists. All while cloaked in the language of restoration: a return to "constitutional order," "parental rights," and "religious liberty." Naturally, the liberty in question is extremely selective.
          </p>
          <p>
            But it's not just language. Project 2025 calls for dismantling civil service protections (via Schedule F), eliminating public sector unions, slashing climate and education programs, and giving the President direct control over the DOJ. The ACLU called it a "dystopian view of America." The Center for American Progress warned it would turn presidents into kings.
          </p>
          <p>
            Authored by a coalition of over 50 right-wing organizations, including the Heritage Foundation, the Center for Renewing America, and the American Cornerstone Institute, Project 2025 is not a conspiracy theory or in any way classified. It's a public document, downloadable by anyone with Wi-Fi and a strong stomach. Read it, if you dare.
          </p>
          <p>
            But here's the catch: to many in the Global South, this doesn't read like an apocalyptic scenario. It reads like the news.
          </p>
  
          <h3>The Beta Version of Control</h3>
          <p>
            You can't plagiarize a form of governance, but if you could, some countries in the Global South might want to consider suing. In India, for instance, one might notice the uncanny familiarity in the air. Civil society is, let's say, lightly managed. The press? Predictably pliant. The judiciary? Efficient in its silences. And the bureaucracy? Streamlined to a fault.
          </p>
          <p>
            India ranked 161st out of 180 in the 2024 World Press Freedom Index. Independent journalists face a gentle kind of pressure. Tea invitations followed by tax audits, or offices that become crime scenes overnight. Television news hums along in near unison, its anchors performing with the verve of a national chorus line.
          </p>
          <p>
            The once-insulated bureaucracy now runs on 360° evaluations and nervous glances toward the Prime Minister's Office. Civil servants have been retired en masse under vaguely applied "non-performance" clauses. Appraisals look less like merit reviews and more like trust falls into ideology. As ThePrint reported in 2019, the government "rewards loyalty and performance, perhaps in that order" and has "no space for those viewed with suspicion".
          </p>
          <p>
            What the document outlines as a goal, some appear to have treated it as an early access beta.
          </p>
  
          <h3>Autocracy for Dummies</h3>
          <p>
            Autocracy today doesn't storm the gates. It refines the paperwork. What once distinguished democratic governance from centralized control now blurs in the language of institutional reform and patriotic efficiency.
          </p>
          <p>
            Project 2025 reads like an IKEA manual for soft authoritarianism: disassemble institutions, insert ideology, tighten screws, silence dissent, repeat. Take India's Foreign Contribution Regulation Act, ostensibly designed to monitor foreign-funded NGOs. Over the past few years, it has delicately trimmed the wings of organizations deemed excessively independent. And then there's the now defunct electoral bonds scheme, a clever little financial riddle in which transparency was the prize never meant to be claimed.
          </p>
          <p>
            In these systems, dissent isn't criminalized outright. It's simply made administratively exhausting.
          </p>
  
          <h3>The Culture War Vending Machine</h3>
          <p>
            No ideological blueprint is complete without a manufactured culture war. In one hemisphere, the adversary is broadly modernity, with critical race theory, gender identity, and reproductive autonomy lined up like cartoon villains. In India, the script includes "love jihad," a term of folkloric menace with abundant traction in primetime headlines, among others.
          </p>
          <p>
            Cultural anxieties, when rendered legible through legislation, have a way of becoming national preoccupations. In the U.S., proposals seek to prohibit gender-affirming care and remove protections for LGBTQ+ individuals from schools.
          </p>
          <p>
            GLAAD reports that Project 2025 would erase federal protections for LGBTQ+ Americans, banning "sexual orientation" and "gender identity" from official policy language.
          </p>
          <p>
            In India, the Supreme Court's 2023 verdict declining to recognize same-sex marriage was framed not as a denial but as a democratic pause.
          </p>
          <p>
            Both systems, in their own idioms, excel at producing moral emergencies on demand, and treating empathy like a threat to national order.
          </p>
  
          <h3>Authoritarian Chic</h3>
          <p>
            Strongmen rarely look the same. Some wield volume. Others, silence. In one hemisphere, there are capital letters and exclamation points. In another, there is a carefully cultivated absence of punctuation. A quiet conviction that speaks through certain monuments restored and syllabi revised.
          </p>
          <p>
            Take a look at schoolbooks in India: Gandhi's warnings about majoritarian rule? Deleted. Mughal history? Trimmed. Darwin? Vanished. Education policy today isn't about what you learn, but what you forget - gently, efficiently, by design.
          </p>
          <p>
            One imagines a state with militarized order and centralized will. The others wear softer fabric but stitch the same seam, a narrative curated from myth, managed through messaging, and maintained with a kind of bureaucratic hypnosis.
          </p>
          <p>
            And yet, the ends converge. In both cases, the citizen becomes not so much a participant as a spectator. One whose cheers are requested, but questions are not.
          </p>
  
          <h3>Footnotes of Defiance</h3>
          <p>
            Here's the paradox: the louder the resistance, the more robust the repression. But in both nations, an undercurrent survives.
          </p>
          <p>
            In India, independent digital media like The Wire, Scroll, Newslaundry, and LU.Chronicles (shameless plug) are doing what legacy outlets won't. In the U.S., whistleblowers and watchdog groups are mobilizing legal challenges against Project 2025's anticipated assault on democratic norms.
          </p>
          <p>
            Groups like the ACLU, Common Cause, and the Brennan Center have begun contingency planning for litigation, civil rights defense, and FOIA warfare. The goal: drag each authoritarian maneuver into the daylight and document the dismantling as it happens.
          </p>
          <p>
            And artists, as always, are slipping protest into prose and resistance into rhythm.
          </p>
          <p>
            But the question remains: can democracy outpace its own dismantling?
          </p>
  
          <h3>Democracy, Uninstalled</h3>
          <p>
            It may remain theoretical. India's trajectory may yet pivot. Courts may rediscover their spines, and elections, still luminous with possibility, may alter the arc.
          </p>
          <p>
            But the deeper concern lies not in individuals or manifestos. It lies in what we've begun to accept as normal. The optimization of ideology. The bureaucratization of belief. The gentle efficiency with which public memory can be rewritten in real-time.
          </p>
          <p>
            It is tempting to think democracies fall. In truth, they fade. Until the lights seem dim by design, and no one remembers when it was otherwise.
          </p>
          <p>
            <em>-Editorial</em>
          </p>
        </section>
      </div>
    `,
    image: "/pro.jpeg",
    author: authors.find(a => a.username === "shumaila-khan")!,
    category: "Editorial",
    date: "2025-07-06",
    readTime: "10 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: [
      "Project 2025",
      "Democracy",
      "Authoritarianism",
      "Politics",
      "Global South",
      "India",
      "United States",
      "Civil Rights",
      "Press Freedom",
      "Bureaucracy",
      "Culture Wars"
    ],
    featured: false,
    isPublished: true
  },
  {
    id: "after-june-pride-without-permission",
    title: "After June: Pride Without Permission",
    slug: "after-june-pride-without-permission",
    excerpt: "Pride Month is over, but for queer people in India, the struggle for acceptance and rights continues every day beyond the corporate rainbows and performative allyship.",
    content: `
      <div class="article-content">
        <section>
          <p>
            Pride Month is over. The rainbows have faded from Instagram stories. Brand logos have quietly slipped back into their neutral greys. Influencers have moved on to the next cause. And for many queer people, especially in India, there's a quiet question that doesn't leave us alone: Was any of this really meant for us—or just built around us?
          </p>
          <p>
            In a country where being queer is still treated either as something exotic or something dangerous, the way Pride gets packaged each June often feels artificial. It's like queerness is given permission to be visible—but only on someone else's terms. So long as it is bright, happy, safe, and unthreatening. For a few weeks, it's celebrated. But not for what it truly is just for what can be profited off or marketed.
          </p>
          <p>
            Ask a queer student in a university who still hides their identity to avoid harassment from classmates and faculty. Ask a trans sex worker who is routinely extorted by police. Ask a lesbian couple being forced into heterosexual marriages. Ask anyone who tried to access gender-affirming care at a government hospital. These aren't isolated struggles—they reflect a broader system that permits marginalization while pretending progress. Pride doesn't end for them in June. For them, Pride is not a party. It is survival.
          </p>
          <p>
            The Indian state, for its part, continues to legislate silence. While the Supreme Court decriminalized Section 377 in 2018, marriage equality was struck down just last year, with judges making regressive comments about "urban elitism" and the "cultural readiness" of society. Conversion therapy remains legal in practice. Transgender persons continue to be treated as criminals in police registers and as jokes in the media.
          </p>
          <p>
            The ruling party offers no pretense of support; instead, it feeds off the cultural anxieties of a deeply patriarchal society. And the liberal opposition, when it speaks of queer rights at all, does so in vague, depoliticized terms—afraid of offending the so-called majority.
          </p>
          <p>
            In this landscape, what is Pride?
          </p>
          <p>
            Pride isn't about corporate posters or feel-good posts in June. It's about carving out space in a society that has, time and again, told us we don't belong. It's not just about dealing with individual bias—it's about standing up to the structures that keep us out. Structures like caste, capitalism, the family, religion, and the state, which decide who gets to live freely and who doesn't.
          </p>
          <p>
            In India, Pride must be protested. Pride must be a memory. Pride must be everyday.
          </p>
          <p>
            It is the defiant walk of queer couples through public parks in Lucknow, daring to hold hands in spaces crawling with moral policing. It is the quiet courage of trans activists running community kitchens during the pandemic when the state abandoned them. It is the queer student creating secret support circles in campuses where "anti-national" has become a catch-all slur for anyone who dissents.
          </p>
          <p>
            June might be over. But the things we carry—our resistance, our happiness, our wounds, our anger—don't get packed away with it.
          </p>
          <p>
            So the next time a company plasters a rainbow on a product or a minister puts out a tweet about inclusion, let's ask them something simple: What will you do now that July has begun?
          </p>
          <p>
            Because for queer people in this country, Pride isn't a month. It's what we wake up and fight for, every single day.
          </p>
        </section>
      </div>
    `,
    image: "/se.jpeg",
    author: {
      name: "Jake Sparrow",
      designation: "Contributing Writer"
    },
    author: authors.find(a => a.username === "captain-jack-sparrow")!,
    category: "Features",
    date: "2025-07-06",
    readTime: "5 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: [
      "Pride Month",
      "LGBTQ+ Rights",
      "Queer Rights",
      "India",
      "Social Justice",
      "Human Rights",
      "Discrimination",
      "Activism",
      "Section 377",
      "Marriage Equality",
      "Transgender Rights"
    ],
    featured: false,
    isPublished: true
  },
  {
    id: "human-rights-in-war",
    title: "HUMAN RIGHTS IN WAR: THE PROPAGANDA I KEEP FALLING FOR",
    slug: "human-rights-in-war-the-propaganda-i-keep-falling-for",
    excerpt: "A critical look at how human rights are sidelined in times of war, the treaties meant to protect them, and the propaganda that buries the truth.",
    content: `
      <div class="article-content">
        <p>
          In an age dominated by diplomacy, dialogue and dictatorship, it is important that someone speaks the blatant truth, buries the dagger without that sugar coating, plain, simple and straight. THE WORLD IS AT WAR, and everyone is holding sessions on integrity, sovereignty, borders, and resources, intentionally skipping one paramount agenda, or propaganda that politicians, bureaucrats, authorities, lordships historically love to skip, HUMAN RIGHTS. 
        </p>
        <p>
          While Instagram is busy falling for foodie, aesthetic, girlie pop propaganda, I fell for this one. When humans skip human rights, it is a sign, a sign of calamity, disaster, ignorance, and more often than not, numbers, which never make the public eye. I might not be able to dig out those classified reports because they don’t want us to, but I, readers, will make sure to remind you of loopholes. This article will be anything but justification and romanticization of war and nothing but white truth, probably antagonistic to what our leaders speak. This article will be everything, spanning from Jallianwala bagh, the fourth Geneva convention, the NATO charter to the present day kinetic and armed conflicts. Because these voices, methodically silenced, deserve to be heard, loud and clear. 
        </p>
        <h2>ARE THERE ANY SAFEGUARDS?</h2>
        <p>
          Of course, there are safeguards to ensure human rights in a war-torn region, on paper.
        </p>
        <h3>THE FOUR GENEVA CONVENTIONS</h3>
        <p>
          First and foremost, the Four Geneva Conventions, signed in 1949, aspired to make itself the holy saviour of human rights, but now probably finds itself in some forgotten folder, or an embassy dumpster. No, it’s not been officially denied, nor has it been kept aside for a minute, but that is the irony of the situation, that is the intelligence with which it has been bypassed, because the enforcers are themselves at the attacking end now and atrocities have been more brutal than ever.
        </p>
        <h3>THE HAGUE CONVENTIONS</h3>
        <p>
          These are rather an early set of intended watchdogs against cruelty, signed around 1899-1907. These conventions are rules on conduct of hostilities, use of weapons, and protection of cultural property and civilians, and are significantly less comprehensive than the Geneva conventions.
        </p>
        <h3>UNIVERSAL DECLARATION OF HUMAN RIGHTS (UDHR)</h3>
        <p>
          Drawn out in 1948, the UDHR was not legally binding on countries, but laid out some ideal ground rules and the bare minimum basic civil, political, economic, and social rights. These rights included the basic fundamental rights that any living being deserves, focusing on human beings here, like right to Life (Article 6), Right to fair trial and due process (Article 14), Protection from arbitrary arrest or detention (Article 9), etc.
        </p>
        <p>
          These are just three examples, if it were not for the limitations of writing, one extra full-length article can be written on just the treaties and documents existing to ensure Human Rights. But the same can be said and done for the number of times and horrendous incidents where these have been breached, and it is more important to look at that. Along with the facts, we will also try and explore how the facts have been twisted, how numbers have been buried, because governments may lie, but walls, rocks, papers don’t.
        </p>
        <h2>HOW MUCH ‘SAVING’ HAVE THE SAVIORS DONE AND HAVE THE NUMBERS SEEN THE LIGHT OF THE DAY?</h2>
        <p>
          Although a lot of times the conventions have served the purpose they were drawn up for and have acted as the scythe against atrocities, their implications and effect on ground zero have been rather insignificant. The reason for this lies in the very limited scope of these documents, walled by just documentation, sanctions and no real retaliatory response. Now, we cannot deny the fact that sanctions do very limited damage, often amounting to close to nothing, as has been seen in the Russia-Ukraine conflict and several other times. If sanctions were that much of a weapon, the war would have stopped on day one, probably before it even started, but we all know where the world stands at the moment.
        </p>
        <p>
          The world’s favourite sets of documents have failed to deliver any real protections, and have been breached more times than twitter's servers have crashed.
        </p>
        <p>
          I will take just one example and the picture will become clear as day.
        </p>
        <h3>The Rwandan Genocide:</h3>
        <p>
          Having occurred in 1994, the genocide is one of the most notorious recorded events. The killings took place on the sole metric that a person belonged to the Tutsi community or ‘looked like they did’. Was the Geneva Convention able to ensure security? Decide for yourself.
        </p>
        <p>
          What is to be noted here, is the differences in figures presented. The total number of the deaths could not be reported with assurance and was extrapolated from population census performed in 1991, three years prior to the disaster, leaving us with speculations.
        </p>
        <p>
          The bigger problem is, that the government allegedly under-reported the number of Tutsis and refused to reveal communal identity in later consensus! The 1991 census data reported 12.8% Tutsi in the population of Gikongoro, while the 1990 population data from the local administration reported a much higher proportion of Tutsi, 17.5%. If the extent of under-reporting was similar in other prefectures, the number of Tutsi at the outbreak of the genocide would have been about 40% higher than the number extrapolated from the 1991 census (Verpoorten, 2005).
        </p>
        <p>
          There are large disparities in numbers officially displayed on search pages and media houses. BBC reports the number at 800,000. Although the exact figure is unknown, official Rwandan government documents estimate that the number of people killed in the genocide is 1,074,017 of whom 93.7 percent were Tutsi. A 2008 report compiled by the Student Genocide Survivors Organisation (AERG) estimated the number to be close to 2 million. (SURF survivors fund)
        </p>
        <p>
          What we see is the systematic moderation of numbers into bite sized digits, and I leave the rest to understand upon my distinguished readers.
        </p>
        <h2>WEIGHING THE COST OF LIFE</h2>
        <p>
          Apart from the Rwandan Genocide, the World Wars, Israel-Palestine conflict, the Russia-Ukraine war, the Israel-Iran war, the Syrian civil war, the Yemeni civil war, the Bosnian war, and many more stand as living and breathing examples of how numbers have been manipulated, voices have been silenced, documents have been buried, people have been shushed, any whisper in the corridor has been overpowered with hollow promises, superhero quotations and caped warriors who sit in their armchairs and comfortably sip their teas, questioning the ways of the world while treading the same themselves. The declarations eat dust sitting on corner tables and human rights always become the first ones to crumble as soon as a conflict erupts.
        </p>
        <p>
          Readers, I ask this question, because those who had to, certainly did not. Why do numbers become negotiable when names are not? If wars can be reported first-hand, can’t human lives be? In this era of armchair diplomacy, when will human rights stop being the ‘on page 16’ content and start being the headline?
        </p>
      </div>
    `,
    image: "/fi.jpeg",
    author: authors.find(a => a.username === "atulit-pandey")!,
    category: "International",
    date: "2025-07-07",
    readTime: "12 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Human Rights", "War", "Propaganda", "Geneva Convention", "Rwanda", "International"],
    featured: false,
    isPublished: true
  },
  {
    id: "cinemas-muse-not-its-voice",
    title: "Cinema’s Muse, Not Its Voice",
    slug: "cinemas-muse-not-its-voice",
    excerpt: "A critical look at how mainstream Indian cinema continues to sideline women, offering the illusion of progress while keeping them voiceless.",
    content: `
      <div class="article-content">
        <h2>1). When Bollywood Was Finally Listening :-</h2>
        <p>
          Between 2014 and 2018, we saw more and more films give women space, dignity, and depth. Bollywood appeared to be finally listening to women. <i>Piku</i>, <i>Queen</i>, <i>Pink</i>, and more recently <i>Bulbul</i> on OTT did not simply just feature female leads, but drive them with the entire narrative. These were not "strong women" for the sake of it. They were messy, introspective, real, comedic, flawed. They felt human, like you and me.
        </p>
        <p>
          And for a moment, it seemed like mainstream Indian cinema was transforming. That maybe, finally, women on screen were not going to be accessories or pretty diversions. But these movies failed the audience, bringing back the old patterns where women characters are hollow, again.
        </p>
        <h2>2). From Depth to Distraction:-</h2>
        <p>
          In big-budget Blockbusters, mostly action and mass entertainers’ movies - females are nothing but clickbait. They're stylishly dressed, tightly shot, given a couple of snappy dialogues, to act as damsel in distress, superficially they look empowering but actually don't amount to anything. Their arcs never advance the plot.
        </p>
        <p>
          This is not just bad writing - it's deliberate packaging. And not by accident. It's feminism masquerading as capitalism.
        </p>
        <p>
          Directors are well aware of what they are doing. They know that a pretty girl in the trailer, a seductive song-and-dance number - can pull in crowds. Ormax Media's 2022 report says that men made up over 60% of box office crowds in India, especially in Tier 2 and Tier 3 cities. So, when a woman is starring in a movie, it is not necessarily because her story is crucial. Sometimes it is just marketing acumen.
        </p>
        <p>
          It is for this reason that even in blockbusters, including <i>Pushpa</i>, <i>Pathaan</i>, <i>Kabir Singh</i>, or <i>Jawan</i>, the women are visually augmented but narratively overlooked. They're hyper-visible but strangely voiceless.
        </p>
        <h2>3). A Costume Called Feminism :-</h2>
        <p>
          Even when they do end up with "strong roles," it's undercut by how the film presents them. A crop-top cop. A makeup-covered lawyer. A warrior who spends an entire five minutes experiencing real action. And if she's yelling or talking about independence, it's usually followed by a romantic plotline or a "softening" shot - like the script's worried she'll become too nasty.
        </p>
        <p>
          Meanwhile, dialogue is infused with pseudo-woke speak that's not meant to mean anything but to go viral. Empowerment has been commodified. Feminism has been reduced to a costume. And women? They've been relegated to stunning edit distractions.
        </p>
        <p>
          This regression is not only maddening - it's dangerous. Because film does not merely reflect society, it contributes to its creation. When millions of individuals see these movies and absorb the message that a woman's worth is her looks or whether she can fund a man's adventure, it reinforces all the things we're trying to move beyond as a culture.
        </p>
        <p>
          Worse still, when women's presence is hollow but is presented as "progressive," it is an illusion of progress. It tricks us into believing that things are improving, when they're not. That we've reached somewhere, when we're still stuck in the same cycle - albeit with better lighting and better costumes.
        </p>
        <h2>4). The Mirror Needs Cleaning :-</h2>
        <p>
          There are exceptions, honestly. OTT has opened up for more assertive, multidimensional women - the kind portrayed by Shefali Shah in <i>Delhi Crime</i>, Madhuri Dixit in <i>Maja Ma</i>, Alia Bhatt in <i>Darlings</i>, or the women in <i>Made in Heaven</i>. But even those stories are limited to urban, upper-class life. They have their niche audience. The issue lies in mass cinema - the kind that reaches the nook and corner of the country. That's where the erasure is most visible.
        </p>
        <p>
          And it's significant that the majority of these new, reactionary films still demand to be female-fronted. They throw buzzwords around on the publicity circuit, quote feminist mantras in marketing, and cast high-profile actresses. But the minute the cameras roll, it's clear: the story never did belong to the woman. She was just the packaging.
        </p>
        <h2>5). Where do we go from here, then?</h2>
        <p>
          Because women don’t just need screen time - they need screen truth. Not more slow-motion entries, but stories that linger. Not just makeup under moonlight, but motives, arcs, contradictions.
        </p>
        <p>
          Cinema has the power to immortalize. It can raise questions, ignite revolutions, and shatter silences. But when it chooses to mute women behind edits, frames, and formulas, it wastes that power.
        </p>
        <p>
          We don’t need another heroine in a shaffon saree dancing beside a man. We need women who hold the camera with their presence. Who aren’t just written into scripts, but who write the script of the film itself.
        </p>
        <p>
          Because if cinema is a mirror to society, then it should be an honest one. It should reflect women not as ornaments, not as box office bait, but as the messy, brilliant, hurting, healing, hilarious, terrifying forces they truly are.
        </p>
        <p>
          Until then, the frame may look full, but the story will remain painfully incomplete.
        </p>
      </div>
    `,
    image: "/film.jpeg",
    author: { name: "Cinecore" },
    category: "Arts & Culture",
    date: "2025-07-07",
    readTime: "10 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Cinema", "Bollywood", "Feminism", "Women", "Film Criticism", "Culture"],
    featured: false,
    isPublished: true
  },
  {
    id: "sustainable-development-policy-to-practice",
    title: "Sustainable Development: From Policy to Practice",
    slug: "sustainable-development-policy-to-practice",
    excerpt: "Exploring how sustainable development evolved from a global policy ideal to practical action, and the challenges India faces in bridging the gap between vision and implementation.",
    content: `
      <div class="article-content">
        <p>
          Gro Harlem Brundtland, a Norwegian politician known for her role as Chair of the World Commission on Environment and Development (WCED), defined sustainable development as "development that meets the needs of the present without compromising the ability of future generations to meet their own needs." While she articulated this in an environmental context, in today's world, sustainable development has become a guiding principle for policymakers in addressing challenges not only related to environmental degradation but also to social inequality and economic instability. However, bridging the gap between policy formulation and practical implementation remains a major challenge.
        </p>
        <h2>From MDGs to SDGs</h2>
        <p>
          The concept of sustainable development gained momentum with the 1987 Brundtland Commission Report. This report laid the foundation for global action, beginning with the MDGs (Millennium Development Goals) in 2000. These goals focused on key social issues and later led to the Sustainable Development Goals (SDGs) in 2015, adopted by 193 UN member states. There are 17 SDGs and 169 targets that aim to transform the world comprehensively.
        </p>
        <h2>India's Journey</h2>
        <p>
          India has integrated SDGs into national schemes across multiple sectors. Below are key programs aligned with specific goals:
        </p>
        <ul>
          <li><strong>No Poverty (SDG 1):</strong> Pradhan Mantri Awas Yojana (PMAY), National Social Assistance Programme (NSAP), Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)</li>
          <li><strong>Zero Hunger (SDG 2):</strong> Public Distribution System (PDS), PM Garib Kalyan Anna Yojana (PMGKAY), National Nutrition Mission (POSHAN Abhiyaan), Mid-Day Meal Scheme</li>
          <li><strong>Good Health and Well-being (SDG 3):</strong> Ayushman Bharat (PM-JAY), National Health Mission (NHM), Mission Indradhanush, PM Ayushman Bharat Health Infrastructure Mission</li>
          <li><strong>Quality Education (SDG 4):</strong> Samagra Shiksha Abhiyan, PM eVIDYA</li>
          <li><strong>Gender Equality (SDG 5):</strong> Beti Bachao Beti Padhao, UJJAWALA Scheme, One Stop Centres</li>
          <li><strong>Clean Water and Sanitation (SDG 6):</strong> Jal Jeevan Mission, Swachh Bharat Mission (SBM)</li>
          <li><strong>Affordable and Clean Energy (SDG 7):</strong> Ujjwala Yojana, Deen Dayal Upadhyaya Gram Jyoti Yojana, Solar Park Scheme, PM-KUSUM</li>
          <li><strong>Decent Work and Economic Growth (SDG 8):</strong> Skill India Mission, Start-Up India, Stand-Up India, Make in India, Atmanirbhar Bharat Abhiyan</li>
          <li><strong>Industry, Innovation, and Infrastructure (SDG 9):</strong> Start-Up India, Digital India, National Infrastructure Pipeline (NIP), Bharatmala & Sagarmala Projects</li>
          <li><strong>Reduced Inequality (SDG 10):</strong> PM-VIKAS, Accessible India Campaign</li>
          <li><strong>Sustainable Cities and Communities (SDG 11):</strong> The Smart Cities Mission, AMRUT (Atal Mission for Rejuvenation and Urban Transformation), PM Awas Yojana – Urban</li>
          <li><strong>Responsible Consumption and Production (SDG 12):</strong> Zero Effect Zero Defect (ZED) Scheme, National Electric Mobility Mission Plan</li>
          <li><strong>Climate Action (SDG 13):</strong> National Action Plan on Climate Change (NAPCC), Faster Adoption and Manufacturing of Electric Vehicles (FAME), International Solar Alliance (ISA)</li>
          <li><strong>Life Below Water (SDG 14):</strong> Blue Revolution Scheme, Sagarmala Project</li>
          <li><strong>Life on Land (SDG 15):</strong> Green India Mission, National Afforestation Programme, Project Tiger / Project Elephant</li>
          <li><strong>Peace, Justice, and Strong Institutions (SDG 16):</strong> Digital Courts & e-Courts, Mission Mode Project, Police Modernization Scheme, RTI Act, 2005, Lokpal and Lokayuktas Act, 2013</li>
          <li><strong>Partnerships for the Goals (SDG 17):</strong> India-UN Development Partnership Fund, South-South Cooperation Initiatives, Development Monitoring and Evaluation Office (DMEO) under NITI Aayog</li>
        </ul>
        <p>
          NITI Aayog publishes the SDG India Index reports, which track state-wise progress, foster healthy competition, and help in aligning state and central government initiatives with the SDGs.
        </p>
        <h2>Implementation Challenges</h2>
        <p>
          India faces a complex set of challenges in implementing policies.
        </p>
        <ul>
          <li><strong>Economic:</strong> Developmental goals related to industrial growth are often prioritized over environmental health. Economic inequality persists, which in turn hinders equal access to sustainable solutions and green technologies (clean energy, education, healthcare).</li>
          <li><strong>Social:</strong> The topic of sustainability is often not properly included in education. There is also resistance to adopting sustainable lifestyles (e.g., waste segregation, energy saving) due to habits, social norms, or mistrust. For many, immediate economic survival takes precedence over long-term sustainable practices, limiting their capacity to engage in sustainability-focused actions.</li>
          <li><strong>Institutional:</strong> There are multiple intersecting policies at the central and state levels, inadequate funding for initiatives, and weak coordination among ministries. Laws are poorly enforced due to corruption, bureaucracy, or lack of political will.</li>
          <li><strong>Infrastructure and Technological:</strong> Urban areas struggle with poor public transport, inadequate waste management, and water scarcity. Renewable energy infrastructure is growing, but the use of clean energy remains limited in rural areas.</li>
        </ul>
        <h2>Conclusion</h2>
        <p>
          India's journey towards sustainable development reflects a complex and evolving journey shaped by vision and local action. The SDGs provide a roadmap — a foundation to build a better world, one that balances growth with ecology. India can strengthen grassroots implementation by promoting innovative financing mechanisms and by fostering an environment for collaboration involving government, the private sector, civil society, and local communities.
        </p>
        <p>
          Together, we can work toward a greener, more equitable, and resilient future.
        </p>
      </div>
    `,
    image: "/f1.jpeg",
    author: authors.find(a => a.username === "trishla-chaudhary")!,
    category: "Development",
    date: "2025-07-08",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Sustainable Development", "SDGs", "Policy", "India", "Environment"],
    featured: false,
    isPublished: true
  },
  {
    id: "ai-content-crisis-originality-2025",
    title: "AI Content Crisis: Who Owns Originality in 2025?",
    slug: "ai-content-crisis-originality-2025",
    excerpt: "As AI-generated content explodes in 2025, questions of authorship, creativity, and cultural integrity challenge students, professionals, and artists alike.",
    content: `
      <div class="article-content">
        <p>
          In 2025, artificial intelligence has woven itself deeply into the fabric of creative work and education. From students relying on ChatGPT for essays to viral AI-generated Studio Ghibli-style portraits, questions around originality, authorship, and cultural integrity have come to the fore. Who truly owns creativity when an algorithm can generate content on demand?
        </p>
        <h2>1. Students’ dependency on AI: convenience or cognitive drift?</h2>
        <p>
          AI adoption in education has skyrocketed. In the UK, a staggering 92% of university students reported using generative AI tools like ChatGPT in 2025—up from 66% the year before. In another case study, 72.3% of students at Hunter College High School admitted to ChatGPT use at least once per month.
        </p>
        <p>
          Harvard's 2024 undergraduate survey (N=326) highlighted that nearly 90% of students use AI, with around 25% substituting essential academic efforts like attending office hours or completing assigned readings.
        </p>
        <p>
          These numbers hint at routine but uncritical use. Alarm bells ring louder with findings that students using generative AI scored on average 6.7 points lower (out of 100) on exams than non-users. Moreover, a study of high school seniors revealed that over half of incorrect ChatGPT suggestions were accepted as fact—and short AI-literacy interventions did little to mitigate this over-reliance.
        </p>
        <p>
          Researchers warn that this "cognitive debt" might suppress the development of critical thinking and information retention, particularly for younger students, with 26% of teens admitting to using AI for schoolwork, double what it was in 2023.
        </p>
        <h2>2. Employers and the professional AI turn</h2>
        <p>
          It’s not just students—employers increasingly lean on AI for efficiency. While comprehensive statistics on corporate AI use in 2025 are still emerging, anecdotal trends suggest widespread adoption:
        </p>
        <ul>
          <li>Hiring teams increasingly use ChatGPT and other GPT-4 powered tools for candidate screening, resume optimization, and drafting job descriptions.</li>
          <li>Internal communications, marketing content, and even technical documentation are often co-drafted with AI.</li>
        </ul>
        <p>
          However, just as in academia, this reliance raises concerns. Human resource professionals warn of homogenized messaging—lacking authenticity and personal insight—akin to the tension seen in student writing.
        </p>
        <h2>3. The Ghiblification phenomenon: beauty meets ethical dilemma</h2>
        <p>
          One of the most visible AI controversies in 2025 was the viral “Ghiblification” trend—turning photos into Studio Ghibli-style images via ChatGPT’s GPT-4o image model. These pastel-hued, dreamlike portraits proliferated across TikTok, X, and Instagram, enthralling fans—but also igniting backlash.
        </p>
        <p>
          Co-founder Hayao Miyazaki has long referred to AI-generated animation as “an insult to life itself”.
        </p>
        <p>
          Artist communities expressed fears of dilution—where Ghibli’s nuanced storytelling and painstaking craftsmanship are reduced to shallow mimicry.
        </p>
        <p>
          Legally, Studio Ghibli has limited recourse. While specific works remain protected, visual style isn’t necessarily copyrightable, making it difficult to challenge platforms like OpenAI. Meanwhile, legal scholars argue OpenAI's "conservative" approach—disallowing style replications of living artists—doesn’t fully address studio-level brand implications.
        </p>
        <h2>4. The crux: Who owns originality?</h2>
        <p>
          This collision of education, professional use, and art brings us to the core question: Who owns originality in 2025?
        </p>
        <h3>A. Attribution & Credit</h3>
        <p>
          AI models are trained on vast collections of human-made work—often without consent or compensation. Artists point out that these datasets include years of painstaking effort yet are used to generate mass content. Critics stress this devalues their labor—like how the Industrial Revolution displaced artisans.
        </p>
        <h3>B. Authenticity & emotional resonance</h3>
        <p>
          The soul in Ghibli’s art wasn’t just pastel hues—it was the human toil behind each frame. Miyazaki’s masterpieces, like the hand-drawn markets in “The Wind Rises,” took animators over a year for mere seconds of animation. AI replicates aesthetics quickly—but not the depth, emotion, or stories encoded within.
        </p>
        <h3>C. Rethinking education & skill</h3>
        <p>
          Some propose embracing AI as a tool, akin to calculators—teaching students to collaborate with it critically rather than banning it. Others push for structural reforms: oral exams, process-based assignments, and robust AI detection in academia.
        </p>
        <p>
          Similarly, in the creative industries, there is a growing call for ethical AI practices: artists being credited, earners of licensing fees, and explicit opt-in provisions for training data.
        </p>
        <h2>5. A path forward</h2>
        <ul>
          <li><strong>Policy & law:</strong> Update copyright frameworks to protect style and brand, not just specific works. Mandate datasets get pre-cleared or compensated via licensing.</li>
          <li><strong>Educational reform:</strong> Promote AI literacy: teach students how and when to use AI—alongside critical evaluation skills. Redesign assessments to test reasoning, not regurgitation.</li>
          <li><strong>Ethical AI design:</strong> Build transparency and attribution into AI systems. Developers like Adobe Firefly are exploring tools trained only on licensed, opted-in content.</li>
          <li><strong>Cultural awareness:</strong> Encourage public conversations about what soulful art means beyond visuals—human stakes, emotional labor, cultural memory.</li>
        </ul>
        <h2>Conclusion</h2>
        <p>
          As AI-generated content becomes faster, cheaper, and more realistic in 2025, the stakes around originality rise. We’re at a crossroads: accepting easy, homogenous output, or investing in systems—legal, educational, technical—that uphold the richness of human creativity.
        </p>
        <p>
          When a tool can replicate a Ghibli-style sunset in seconds, do we lose the sunset’s meaning? Or do we use the moment to reaffirm what only human artistry can truly claim? That, perhaps, is the question of originality in the AI age.
        </p>
      </div>
    `,
    image: "/f2.jpeg",
    author: authors.find(a => a.username === "hetal-kothari")!,
    category: "Technology",
    date: "2025-07-08",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["AI", "Originality", "Creativity", "Education", "Art", "Ethics"],
    featured: false,
    isPublished: true
  },
  {
    id: "my-college-alumnus-1984-anti-sikh-pogrom",
    title: "My College Alumnus is a key accused in barbaric 1984 Anti-Sikh Pogrome",
    slug: "my-college-alumnus-1984-anti-sikh-pogrom",
    excerpt: "A personal reflection on discovering a college alumnus's alleged involvement in the 1984 anti-Sikh riots, exploring the legacy of alumni and the dark chapters of Indian history.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          It was my sophomore year at the Lucknow Christian Degree College, Golaganj, one of the oldest and prestigious academic institutions in Lucknow whose history may be traced back to 1862 i.e Colonial India.
        </p>
        <p>
          Our batchmates, particularly I, were overwhelmed by the fact that we gained access to Fairfield Hall without delays or the usual cumbersome application process. We were preparing to bid a warm and memorable farewell to our seniors, and I had the honor of being the host for the event. I was approached by the head of my team to briefly mention the College’s Glorious Pasts and achievements along with alumni who once were known names in their particular field and who used to be a part of this prestigious institution.
        </p>
        <p>
          Alumni are the quality product of an academic institution, whose number within an institution and contribution to their respective field of course decides the institution's NIRF ranking and many freshman students idolise them.
        </p>
        <p>
          So, as a history geek and a part of an assigned task while navigating through webpages of these rich alumni networks, I came across some names that were celebrated for their contributions — and others whose legacies remain controversial. Names of people who once were part of our institution from the 3rd President of India, Dr. Zakir Hussain to legendary urdu poet, Firaq Gorakhpuri and a lesser known yet powerful political figure from Nehru-Gandhi family, Arun Nehru, he was a key accused in 1984 anti Sikh riots and had serious and heinous allegations. This deeply unsettled me and compelled me to write this article.
        </p>
        <h2>Arun Nehru: The Serious Allegations and Political Patronage</h2>
        <p>
          Mr. Nehru who formerly was a businessman for 17 years before he was approached by Mrs. Indira Gandhi to enter the world of politics. He was born to Anand Kumar Nehru and was a cousin and a close confidante to former PM of India, Late Rajiv Gandhi and a Lucknow Christian Degree College alumni with his alleged involvement in 1984 anti Sikh riots. He represented Rae Bareli constituency in 7th and 8th lok sabha from INC and 9th lok sabha from Bilhaur on Janta Party ticket and served under both Rajiv Gandhi and V.P Singh Cabinet testimony to his political prowess and clout.
        </p>
        <h2>Background surrounding the Violence</h2>
        <p>
          During the 1984 Anti-Sikh Violence democracy was willingly substituted with mobocracy by those in power, when people of sikh faith were burned alive on the streets of Delhi, Women were raped on rooftop and sometimes in front of their family members by an angry mobs driven by vengeance. Like other Indians people of Sikh community were too saddened by the assassination of our former PM Mrs. Indira Gandhi who was assassinated by her bodyguards Beant Singh and Satwant Singh on 31st October 1984. But an agitated mob was given free hand by members of Indian National Congress and a systematic, heart-wrenching violence was instigated on the streets of Delhi and many congress leaders including Arun Nehru played a role as mentioned in a Cover story published in Caravan in October 2014. The Violence of 1984 led to alienation of Sikh community and the world witnessed the collapse of our so-called independent judiciary when as usual we failed to bring perpetrators to the altar of justice.
        </p>
        <p>
          A Cover story titled “Sins of Commission” was published in Caravan, a political magazine on 1 October 2014 in which Avantar Singh Gill, the former petroleum secretary, was quoted saying to political editor ‘Hartosh Singh Gill’ that on 1 November 1984 “Lalit Suri of Lalit hotels, Who used to come and see me often, dropped by. He was the errand boy for Rajiv Gandhi, and since he often needed work done, He was close to me. He came to me in the ministry and said, killings in Delhi and the killings have started. The strategy is to catch Sikh Youth, fling a tyre over their heads, douse them with kerosene and set them on fire. This will calm the anger of the hindus”.
        </p>
        <h2>Other Perpetrators and their Fate</h2>
        <p>
          Ten commissions were formed to investigate the barbarism of 1984 riots and the most controversial among them was Mishra commission led by Rangana Mishra, a supreme court whom latter was Rajya Sabha MP from INC party and was widely criticised by intellectuals as it failed to prosecute or press charges against the individuals and provide a clean chit high level official and the most recent one Nanavati Commission that submitted its report on 9 Feb 2005. But according to me Jain Aggarwal committee was most successful one as it recommended the registration of cases upon proper investigation against prominent congress leaders like H.K.L Bhagat, Sajjan Kumar, Dharamdas shastri and Jagdish Tytler but cases weren’t registered by the police and the most recent conviction that took place was of congress leader, Sajjan Kumar who was sentenced to life imprisonment by Delhi High court but most of the perpetrators are still at large.
        </p>
        <h2>Suggested readings</h2>
        <p>
          <em>When a Tree shook Delhi: The 1984 Carnage and it’s Aftermath</em> by Manoj Mitta and H.S Phoolka is one of the few brilliant yet grievous books highlighting the horror and terror inflicted by the mob over the Sikh community for upcoming three days i.e 1-3 November 1984 post the Mrs. Gandhi assassination on 31st October 1984 and simultaneously the anarchism and organizational collapse that engulfed the country for these three days and an era of collective amnesia that still persists.
        </p>
      </div>
    `,
    image: "/aliyaart.jpeg",
    author: {
      name: "abhijeet Chaubey"
    },
    category: "Editorial",
    date: "2025-07-09",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["1984", "Sikh Riots", "History", "Alumni", "Politics"],
    featured: false,
    isPublished: true
  },
  {
    id: "convenient-fear-murderous-wife-narrative",
    title: "A Convenient Fear: Why the ‘Murderous Wife’ Narrative Is a Dangerous Lie",
    slug: "convenient-fear-murderous-wife-narrative",
    excerpt: "A critical look at the viral panic over 'murderous wives' in India, exposing how a handful of cases are weaponized to undermine women's rights and distract from the real crisis of gendered violence.",
    content: `
      <div class="article-content">
        <p class="intro-paragraph">
          In the past few months, a handful of gruesome cases involving wives accused of murdering their husbands have gone viral across Indian media and social media. Memes mock marriage as a “suicide mission,” hashtags like #HusbandLivesMatter have trended, and whispers have turned into declarations: “Marriage is no longer safe for men.”
        </p>
        <p>Let’s pause.</p>
        <p>Let’s ask: is this a trend? Or is this yet another social panic—a distraction conveniently engineered at the expense of truth and women’s dignity?</p>
        <p>
          The truth is as grim as it is familiar: India remains one of the most dangerous places in the world to be a woman, not a man in marriage. The sensationalized stories of a few murder cases—however brutal—are not representative of marital reality. They are being used to reinforce a backlash against women’s autonomy, to ridicule feminism, and to seed fear into one of the few spaces women can claim with some legal protection: the domestic space.
        </p>
        <p>
          According to the National Crime Records Bureau (NCRB) 2022 report:
          <ul>
            <li>Over 4.45 lakh crimes against women were registered across India.</li>
            <li>Husbands or their relatives committed 31.4% of these crimes under Section 498A IPC (cruelty by husband or relatives).</li>
            <li>That is more than 1.39 lakh cases of cruelty by husbands in a single year.</li>
            <li>Every day, an average of 20 women are raped, and one woman is murdered for dowry every 75 minutes.</li>
            <li>The conviction rate for rape is just 26.6%, and for cruelty by a husband, it is even lower.</li>
          </ul>
        </p>
        <p>Where is the outrage?</p>
        <p>
          Where are the trending hashtags for the women burnt alive for dowry, for those beaten to death in in-laws’ homes, or pushed to suicide from marital abuse?
        </p>
        <p>
          These aren’t just statistics. These are systemic, gendered crimes. They represent a society where marriage is often not a sanctuary for women, but a site of control, surveillance, and in too many cases—slow death.
        </p>
        <p>
          Compare this to the less than 30 publicized cases of wives killing husbands in the past year—several of which involved clear and premeditated motives tied to affairs, abuse, or inheritance disputes. These are crimes, no doubt, and must be investigated and prosecuted. But they do not form a trend. They are aberrations, not a pattern. To project them as proof that men are now the greater victims of marriage is not only misleading—it is deeply political.
        </p>
        <p>
          Focusing on a handful of cases where women killed their husbands while ignoring the overwhelming scale of violence routinely inflicted on women by men, is not just misleading—it’s dangerous. It shifts attention away from the real crisis. It makes it harder for survivors to speak out. It gives abusive men more room to justify their actions. And it threatens to undo years of struggle for even the most basic protections women have won.
        </p>
        <p>
          This isn’t some organic concern for justice. It’s a backlash—a carefully constructed narrative, rooted in patriarchal fear, dressed up as a moral emergency.
        </p>
        <p>
          What we are witnessing is a cultural counter-offensive, not a crime wave.
        </p>
        <p>
          It is designed to delegitimize the hard-won legal protections women have—like 498A or domestic violence legislation. It is aimed at painting these protections as “tools of abuse” used by “evil wives” rather than lifelines for survival. It is the same old system trying to strike back at women’s agency by turning fear into spectacle.
        </p>
        <p>
          To center these cases as the crisis of our time is not just a distraction—it is an assault on truth. And the cost will be paid, as always, by the women who are already fighting to survive in a society stacked against them.
        </p>
      </div>
    `,
    image: "/shantamart.jpeg",
    author: authors.find(a => a.username === "captain-jack-sparrow")!,
    category: "Op-ed",
    date: "2025-07-09",
    readTime: "7 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Gender", "Marriage", "Media", "Patriarchy", "Violence"],
    featured: false,
    isPublished: true
  },
  {
    id: "sanitation-workers-crisis-dignity",
    title: "The People Who Keep Our Cities Alive: Sanitation Workers, Manual Scavengers, and The Crisis of Dignity",
    slug: "sanitation-workers-crisis-dignity",
    excerpt: "A look at the invisible, essential labor of sanitation workers and manual scavengers, and the crisis of dignity they face in India.",
    content: `
      <div>
        <p>Much before the first cup of chai is made, before traffic lights begin to flash, and before city roads come alive, there is an invisible army who has already begun their work. They sweep away what we litter, unclog what we jam, and enter spaces we wouldn’t even dare to look at. They are the sanitation workers and manual scavengers - individuals who are crucial to our lives, and are left unheard, unseen, and uncared for.</p>
        <p>Their job is not glamorous. It is dangerous, degrading, and frequently lethal. But without them, cities would become bogged down in their own trash.</p>
        <h2>The Everyday Peril of Their Work</h2>
        <p>In India, thousands of people still engage in manual scavenging - the inhumane practice of cleaning human excreta from dry latrines, sewers, and septic tanks by hand. Though the practice was officially banned in 1993 and again under a more stringent law in 2013, loopholes and lack of enforcement allow it to continue, especially in smaller towns and urban slums.</p>
        <p>Death is not a rare outcome in this line of work. Just a year ago, a 27-year-old sewer man in Delhi died after being pushed into a manhole without protection. Within minutes, he lost consciousness because of poisonous gas. His family had some mentions in the newspapers, a quick cremation, and silence. No official stepped forward. No compensation came. No arrests followed. These are not isolated instances - they are systematic failures.</p>
        <p>Between 2016 and 2023, more than 400 manual scavengers died cleaning sewers and septic tanks in India, reportedly. The number is probably low. Death most commonly occurs due to asphyxiation, poisonous gas exposure, or drowning. Several workers are lowered into manholes on ropes, with no respirators, no gloves, no masks - nothing but their bodies between them and the dangers.</p>
        <p>Local governments tend to describe these occupations as "voluntary" or "contracted-out" to private companies - shedding all responsibility. But when poverty, caste-based discrimination, and absence of alternative work push someone into this sort of work, is it a choice really?</p>
        <p>The majority of manual scavengers are from the Dalit community, long regarded as "untouchables" under India's highly patriarchal caste system. The groups have been driven into occupations deemed "unclean" or "impure" for generations. In some instances, the work gets passed down from generation to generation like a malevolent legacy.</p>
        <h2>Lack of Protection, Lack of Care</h2>
        <p>One of the most horrific things about this job is the total absence of safety equipment. Although the law requires the employment of PPE (Personal Protective Equipment) kits made up of gloves, masks, boots, and oxygen cylinders, the situation is even more dismal.</p>
        <p>Sanitation workers primarily enter manholes barefoot, shirtless, and with zero protection against illness or death. Municipal corporations either fail to provide PPE kits or offer old, inadequate ones that workers decline to wear because they are useless or defective. In India, most municipalities do not even have the latest machines for cleaning the sewage systems and thus sewage workers are required to enter the underground sewerage lines through manholes.</p>
        <p>Rather than using modern equipment or safety inspections, workers have to make do with an ancient and spooky method - they toss a pebble down the sewer. If a cockroach or rat emerges, then it's considered safe to enter, assuming there’s enough oxygen. Otherwise, it might be too late for them the moment they enter.</p>
        <p>Imagine a job where your survival depends on whether a cockroach crawls out of a sewer. That is the horrific reality of manual scavengers in India.</p>
        <h2>Why Don't We See Them?</h2>
        <p>Why don't we ever see these individuals? Maybe it's because we won't. Because seeing them unsettles us. They remind us of a reality we prefer to forget - that our luxury is founded upon the suffering of another. We refuse to admit them in public areas, shun eye contact, and flinch from the odor without knowing that the smell emanates from our own waste.</p>
        <p>Media reports are rare. Government statistics are unreliable. And public outrage? Non-existent. We glorify "Swachh Bharat" but forget the hands that sustain it.</p>
        <h2>Change Has to Begin at the Source</h2>
        <p>We must end glamorizing resilience and begin asking for justice. Manual scavenging should not only be prohibited by law - it should become socially unacceptable and economically irrelevant. This includes:</p>
        <ul>
          <li>Holding municipal corporations criminally liable for illegal use of manual scavengers.</li>
          <li>Issuing proper, functional PPE kits to all sanitation workers.</li>
          <li>Implementing mechanized cleaning systems rather than manual labor.</li>
          <li>Providing respectful alternative work and vocational training to workers leaving this profession.</li>
          <li>Securing equitable wages, health care coverage, and compensation in the event of injury or death.</li>
        </ul>
        <p>Above all, we must have a shift in attitude. Sanitation workers are not performing "dirty work"- they are performing critical work. And it is we who are responsible for making it dirty by denying them dignity.</p>
        <h2>A City is Only as Clean as Its Conscience</h2>
        <p>The next time you walk on a newly cleaned street or flush a toilet without even thinking twice, remember- someone made it happen. An actual person with a name, a family, and a history.</p>
        <p>They are not workers. They are human beings. They are what make our cities run, and it's time we treated them that way.</p>
        <p>Cities are usually admired for their skylines, for their tech parks, and for their cultural festivals. Perhaps the true measure of a city's greatness lies in how it treats those who keep it standing, silently and thanklessly.</p>
      </div>
    `,
    image: "/city.jpeg",
    author: authors.find(a => a.username === "aliya-imam")!, // Change username if needed
    category: "Society",
    date: "2025-07-10",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Sanitation", "Dignity", "Society", "Labour"],
    featured: false,
    isPublished: true
  },
  {
    id: "indian-handicrafts-living-tapestry",
    title: "Indian Handicrafts: A Living Tapestry of Culture and Craft",
    slug: "indian-handicrafts-living-tapestry",
    excerpt: "From Pashmina shawls to Channapatna toys, explore how India's handicrafts are a vibrant, living tapestry of culture, history, and artisan spirit.",
    content: `
      <div>
        <p>India is a colourful patchwork of cultures and its handicrafts narrate that story more vividly than any travel guide. Each item is more than decoration; it carries the daily rhythms and histories of the maker. From the red-earth deserts of Rajasthan to the icy valleys of Kashmir, every piece speaks the local dialect, revealing beliefs, customs, and the artisans’ spirit. Together, these treasures form a living tapestry that feels both ancient and fresh.</p>
        <h2>Pashmina from Kashmir - Warmth Woven with Grace</h2>
        <p>Few fabrics match the tender softness of Pashmina. The fibre comes from the Changthangi goat that grazes high in Ladakh, and it is spun and woven by patient Kashmiri hands. Shawls are often finished with delicate embroidery that makes each piece a moving artwork. Light as a feather yet remarkably warm, a single authentic wrap can take weeks to complete—a quiet testament to skill passed through many winters.</p>
        <h2>Jaipur’s Blue Pottery - Where Earth Meets Flame</h2>
        <p>Rajasthan’s signature blue pottery does more than please the eye—it shares a story. While the craft originally came from Persian artisans, it really settled down and flourished in Jaipur, blending foreign knowledge with local spirit.</p>
        <h2>Madhubani Art - Folk Tales in Vivid Colors</h2>
        <p>An ancient form of folk art from the Mithila area of Bihar, Madhubani painting has a strong history based on symbolism and tradition. The forms are created using natural colors, and are painted onto paper, cloth, or walls (flowers and birds are common motifs). In myth, ritual, and nature, every symbol—fish, lotus, peacock—carries meaning, often tied to love, fertility, or prosperity. Every painting is different and its uniqueness is part of its beauty.</p>
        <h2>Channapatna Toys - Karnataka's Vibrantly Colored Wooden Craft</h2>
        <p>In Channapatna, a town near Bangalore, is a community of artisans who carry on a craft that goes back centuries, a toy-making tradition. Soft, native ivory-like wood is the base element for, and bright vegetable dye is the color, followed by shaping, polishing, and finishing a thin layer of lacquer. These delightful toys are attractive, enjoyable, eco-friendly, and safe—they are playful, delightful, and steeped in tradition.</p>
        <h2>Meenakari – Colors on Metal</h2>
        <p>Meenakari is the practice of painting the surfaces of metals such as gold, silver, and copper in stunning colors and then coating them with fire. Available in various ranges, the art of Meenakari was made famous in Rajasthan by royal patronage. Meenakari includes pieces of jewelry and decorative items in a variety of shapes that shimmer in vibrant colors, including floral and geometric patterns. It requires incredibly precise craftsmanship, and the process involves wonderful fire and finessing.</p>
        <h2>Rogan Art – Kutch's Best Kept Secret</h2>
        <p>From being almost extinct to enjoying a quiet and proud renaissance, Rogan art is one of a few remaining vestiges of the Kalpavriksha, the wish fulfilling tree. Practiced by only a few families in Kutch, state of Gujarat, it is the art of using thick paint that is made from castor oil, clinically pure cotton carrier oil, and high concentration vegetable pigments in order to create fine, intricate designs on cotton fabric. The process is rather unusual. The artist will use a stylus or stick to draw a design in the air in order to "catch" it and then press it down onto the fabric to "adopt" the design. After the fact, Rogan gained international attention when India’s Prime Minister gifted Rogan art as part of their gift to the history of the culture and heritage of India to Barack Obama.</p>
        <h2>Dokra – Tribal Echoes in Metal</h2>
        <p>Dokra, a metal casting technique that is thousands of years old, uses the lost-wax method of casting bronze and brass into sculptures, lamps, and jewelry. It is pursued by tribal communities in Chhattisgarh, Odisha, and Bengal, and each piece of dokra is raw, earthy, and totally handmade. Whether a figurine of a tribal god, or decorative bells, the charm is found in their imperfections.</p>
        <h2>Kanjeevaram & Banarasi Weaves – Sarees Fit for Queens</h2>
        <p>While sarees are technically textiles, hand-woven sarees of the so-called "iconic isharees" of India—especially Kanjeevaram and Banarasi—rightly deserve a spot in this list. Kanjeevaram & Banarasi ranges of sarees are characterized by the sheen of their zari borders, the heaviness of their silk fabric, and the nature of their mythological designer. Often gifted during major life events, Kanjeevaram sarees are heirlooms passed through generations. Kanjeevaram sarees are from Tamil Nadu, and Banarasi weaves are from Uttar Pradesh. Both types of sarees are done by skilled hands and transferred skills, consumers experience traditional weaving from the past.</p>
        <h2>Stolen Threads & Silent credit : How the World Ripped-off Indian Culture</h2>
        <p>India is not just a country, it is a cultural powerhouse. For thousands of years, we have crafted beauty, lived age old traditions, and participated in healing and wellness practices so deep, it could humble the entire industry. The problem being, the world loves Indian Aesthetics, only when they’re not called Indian.</p>
        <p>Yet today, our cultural traditions are being stolen, stripped of their foundations and repackaged - what was once deemed "too ethnic" is now repackaged as "boho chic" or "clean girl aesthetic" - without the attribution. The world loves Indian culture as long as they don't have to say the word India.</p>
        <h3>Kolhapuri Chappals: Now Being Re-Sold as “Minimal Leather Slides” (Without the Credit, Of Course)</h3>
        <p>Now, these are not just sandals. Kolhapuris are leather sandal masterpieces, handcrafted in Maharashtra, India, by artisans whose family traditions are handed down for generations. Each stitch and aspect makes each pair unique.</p>
        <p>However, if you search various global fashion sites you will see predominant replicas they sell as “heritage leather slides” or “boho summer flats” without even speaking of Kolhapur or the artisans who made them epic. They grabbed our chappals, slapped a neutral name on it and doubled the price. That’s theft not appreciation, in beige.</p>
        <h3>The Dupatta: Are we Seriously Calling it a “Scandinavian Scarf?</h3>
        <p>Since when do gorgeous, flowing, embroidered scarves, which are quintessential India travel trinkets, become a "Nordic winter trend." The dupatta has represented traditional elegance, respectability, cultural identity, and mood. It’s not just a piece of fabric. It's a legacy.</p>
        <p>Fast-forward to the global influencer who takes a dupatta, drapes it over their trench coat and dares to call it a "Scandinavian wrap." Excuse me?! That’s not called minimalism, that’s called amnesia. Time to wake up and remember where it all began, just because it now works in your neutral feed does not mean we should forget and erase it from all cultural significance!</p>
        <h3>Clean Girl” Aesthetic? South Indian Women Have Been Doing That Since Forever.</h3>
        <p>Let’s unpack the idea of the so-called “clean girl” trend—oiled hair styled in a bun, the ultimate glowing skin, gold jewelry, bare skin, and fresh cotton drapes. The West puts "effortless" on it—we need to CHANGE OUR VOCABULARY—this is just daily life for coconut oil and or turmeric in our face South Indian aunties. South Indian women—specifically Tamil and Malayali queens have been sporting this clean girl aesthetic long before Pinterest was even a thing. You know—after you've put coconut oil in your hair, turmeric on your face, put a little jasmine in your braid, and put on a pair of gold hoops with your silk saree? No, that's not Hailey Bieber, ma'am—that’s your local temple auntie who’s been doing this forever.</p>
        <p>They've been criticized for being "too traditional," but now that it's rebranded, it's considered "high fashion." That's a loud temple bell of a double standard.</p>
        <h3>Yoga: From Sacred to Branded</h3>
        <p>Yoga was never meant to just be a form of touching one's toes. It is a system of philosophy and spirituality that arose from the heart of India more than 5,000 years ago. Yoga comes from Sanskrit terminology, the Upanishads and Bhagavad Gita. It encompasses meditation, breath, balance, and dharma.</p>
        <p>So why has it now been marketed to the world as a sweaty gym class with $120 leggings and a green juice? The West stripped the soul out of Yoga, re-branded it, and erased its origins to sell it as a "lifestyle brand." Most yoga studios barely pronounce asana correctly, and do not recognize the culture from which they appropriated asana. This isn't evolution, it is erasure.</p>
        <p>Because we have had enough.</p>
        <h2>Reclaiming, Not Gatekeeping</h2>
        <p>Too long have we watched our culture be pillaged like a buffet; take the turmeric, leave the ugly brown people (us). Take the dupatta (shawl) but not take the history. Take the rituals and do not take the reverence or honor? It's tiring. And take the anger.</p>
        <p>We are not gatekeeping, we are reclaiming. We love Indian culture, we love to wear Indian crafts and practice Indian traditions, but do not erase us from our history. Give us credit. Uplift the artisans. Learn history. Respect our roots.</p>
        <p>India is not a trend—it is the model.</p>
        <p>Our fashion is not saying "boho". It is refined from centuries of craft. Our beauty is not "glow-up", it is ayurveda. Our rituals are not something to take a photo of, they are sacred.</p>
        <p>So, next time you see a "minimalist leather slide", a "Scandi-inspired scarf," or a "clean girl bun" remember there is a story, culture, and people behind that trend. India has been iconic. The world is just catching up.</p>
      </div>
    `,
    image: "/mihikaart.jpeg",
    author: {
      name: "Mihika Singh",
      username: "indicore"
    },
    category: "Arts & Culture",
    date: "2025-07-10",
    readTime: "10 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Handicrafts", "Culture", "Artisans", "India", "Craft"],
    featured: false,
    isPublished: true
  },
    {
    id: "are-men-too-emotional-leadership",
    title: "Are Men Too Emotional to Be in Positions of Leadership?",
    slug: "are-men-too-emotional-leadership",
    excerpt: "A provocative look at the double standards of emotion in leadership, questioning whether emotional volatility in men has shaped history and power.",
    content: `
      <div>
        <p>It is a question that, on the surface, reads like satire. But then you remember the tantrums. The unfiltered tweets at 3 a.m. The sulking after parliamentary debates. The blood-boiling monologues in war rooms. You recall the finger-pointing press conferences, the volcanic bursts of ego on global stages, the treaties torn in pique, the wars started in fury. You remember, too, the shaking jowls, the reddening faces, the refusal to admit error, because shame is too great an emotion to bear. And you start to wonder, less in jest, more in earnest, whether it is emotional instability, not rational detachment, that has long defined masculine power.</p>
        <p>For decades, the popular myth has held that women, too soft, too sensitive, too swayed by feeling, were unfit for the ruthless objectivity of leadership. But what if the historical record suggests the opposite? What if it’s not empathy but unregulated anger that has done more damage in boardrooms and war cabinets alike? What if patriarchy has been one long, loud overreaction? What if the much-caricatured “emotional woman” is a straw figure, built, ironically, by emotional men?</p>
        <p>The double standard is old as time. When women express emotion in public, they are pathologized, seen as unstable, hysterical, unfit. But when men display emotion, especially anger or aggression, it is reframed as righteous passion or moral conviction. The selective tolerance of emotion isn’t just sexist; it’s structurally dangerous.</p>
        <h2>The Fallout of Fragility</h2>
        <p>When emotional volatility goes unchecked in male leadership, it doesn't just reveal character, it reshapes history and destabilizes institutions. From Nixon’s Watergate paranoia to Boris Johnson’s bluster-fueled Brexit gamble, we’ve repeatedly seen men in power privilege ego over consequence.</p>
        <p>The recent spat between Donald Trump and Elon Musk offered yet another spectacle of high-stakes immaturity. What began as a disagreement over Trump’s so-called “Big, Beautiful Bill” quickly devolved into mutual threats. Musk denounced the policy as “a disgusting abomination,” while Trump responded by vowing to cut Tesla’s federal contracts and ominously invoking DOGE, the bureaucratic task force Musk once led, as a political weapon. Markets reeled, Tesla lost billions in value, and somewhere amid the playground fight, governance vanished. Musk, notably, escalated the conflict by dredging up long-suspected but previously unspoken allegations about Trump’s history of sexual abuse, including claims of child rape. That explosive revelation, however disturbing, came not from a principled sense of civic duty but seemingly as a retaliatory blow, disclosure only as vengeance. (But that is another discussion.)</p>
        <p>The damage, in such moments, extends far beyond the personal. Decisions are made not through policy deliberation but through grudge matches. Wars are started, treaties torn, and economies jolted because fragile men in high places feel slighted. The inability to tolerate criticism, or to separate personal identity from public responsibility, has repeatedly led to catastrophe.</p>
        <p>Whether it was George W. Bush’s war of pride in Iraq, or India’s crackdown on dissent under leaders who conflate opposition with insults, or who transform Parliament into their personal amphitheater - slow tears, measured pauses, while debate stalls and the unspoken question hangs in the air - who’s left to speak? (But again, that is another discussion.)</p>
        <p>The pattern is depressingly consistent. Rage governs where reflection should. Retaliation replaces reason. And the collateral damage is borne by everyone else.</p>
        <p>Men often speak of being denied the space to express emotion. And yet, we see anger aired freely, through shouting, sulking, power plays, and public outbursts. As if anger weren’t an emotion. As if the only feelings permitted are those that dominate rather than reveal. It’s not the absence of expression; it’s the absence of reflection.</p>
        <h2>The Calm of Competence</h2>
        <p>A counterpoint exists, and it is instructive. Consider the nations that have, over the last decade, been led by women: New Zealand under Jacinda Ardern. Finland under Sanna Marin. Germany under Angela Merkel. Denmark under Mette Frederiksen. Taiwan under Tsai Ing-wen.</p>
        <p>These are not utopias, but patterns are emerging that cut across geography: lower rates of corruption, higher levels of citizen trust, fewer COVID deaths per capita, better health outcomes, more robust social safety nets, and notably, a greater sense of national contentment.</p>
        <p>In 2021, a global Gallup poll measuring happiness and institutional trust found a strong correlation between countries with inclusive governance and higher well-being metrics. More often than not, these countries were led by women. The explanation is not biological. It is not that women are inherently better. It is that the path to power for women is so much narrower, so rigorously scrutinized, so allergic to missteps, that those who rise tend to be better prepared, more measured, and more collaborative by necessity.</p>
        <p>They have to be. Men can fail upward. Women must fly straight.</p>
        <h2>Rethinking the Question</h2>
        <p>This isn’t a call for reverse essentialism. Men are not innately unfit to govern, just as women were never too emotional. But the question forces a reassessment, not of biology, but of how we define composure, competence, and credibility. Why do we valorize bombast and punish vulnerability? Why do we conflate shouting with strength, and poise with passivity?</p>
        <p>The problem was never emotion itself. Emotion fuels conviction, sharpens instinct, makes a leader human. The trouble begins when those emotions, especially in men, are unexamined, unmanaged, and inflated to the size of a press conference.</p>
        <p>Emotional intelligence, once dismissed as a corporate buzzword, now seems like the last guardrail between democratic function and primal scream. It means knowing the difference between urgency and panic, criticism and betrayal, diplomacy and a sulk.</p>
        <p>The emotionally intelligent leader doesn’t flinch at accountability, threaten a journalist, invade a country, or nuke a budget because someone bruised their ego on cable news. They might, however, take a walk, read a book, or call their therapist, which, let’s face it, would be the most radical act some cabinets have ever seen.</p>
        <p>It is easy to write off the question as satire. But satire, at its best, illuminates what truth has grown too familiar to see. The real provocation isn’t whether men are too emotional. It’s why we’ve refused, for so long, to admit they might be, while we're still asking women to smile more.</p>
      </div>
    `,
    image: "/shhh.jpeg",
    author: authors.find(a => a.username === "shumaila-khan")!,
    category: "Op-ed",
    date: "2025-07-11",
    readTime: "9 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Gender", "Leadership", "Emotion", "Patriarchy", "Society"],
    featured: false,
    isPublished: true
  },
  {
    id: "dalit-professor-university-silence",
    title: "A Dalit Professor, a University, and the Machinery of Silence",
    slug: "dalit-professor-university-silence",
    excerpt: "How the prosecution of Prof. Ravikant Chandan at Lucknow University reveals the institutional machinery of silencing dissent and the dangers faced by critical faculty.",
    content: `
      <div>
        <p>On June 16, 2025, the University of Lucknow granted formal sanction to the police to prosecute Prof. Ravikant Chandan — a Dalit professor in the Hindi Department — for a Facebook post in which he wrote: “Women like Sonam are produced by the RSS thought process.” For this single sentence — posted in response to a gruesome murder case in Meghalaya — he now faces the full force of state prosecution.</p>
        <p>But in any democracy, no one should be hounded, attacked, defamed, or criminalised for saying things — not least when those things are opinions, critiques, or political claims. That a professor can be slapped on campus and then prosecuted in court — not once, but twice — says far more about the condition of our public institutions than it does about his words.</p>
        <p>This is not the first time. In fact, this is not even the first FIR. It is the second.</p>
        <p>To understand what is happening today, one must return to May 2022.</p>
        <p>That month, Prof. Ravikant participated in an academic discussion hosted by Satya Hindi on the Gyanvapi–Kashi Vishwanath issue. He cited an anecdote from Pattabhi Sitaramayya’s Feathers and Stones, in which Aurangzeb allegedly demolished the temple after a case of sexual violence. Ravikant not only clarified that it was a story and not a verified fact — he questioned its reliability. But a one-minute edited clip of his statement, stripped of all context, was circulated by right-wing accounts.</p>
        <p>What followed was not debate, but a coordinated mob attack. On May 10, 2022, activists from the ABVP and affiliated groups gathered on campus, chanting “Desh ke gaddaron ko, goli maaro saalon ko,” branding him anti-Hindu, anti-national, and anti-Brahmin. He was surrounded and abused — not just intellectually but physically. They hurled caste slurs. They threatened to kill him. The professor had to seek shelter inside the proctor’s office, where he remained for hours under police watch.</p>
        <p>Instead of taking action against the mob, the Hasanganj Police filed an FIR against Ravikant under IPC Sections 153A, 504, 505(2), and Section 66 of the IT Act. The university issued a show-cause notice, but took no action against the perpetrators of the threat.</p>
        <p>Eight days later, on May 18, things got worse. Ravikant was physically slapped on campus by a student, Karthik Pandey, in front of eyewitnesses. The assailant used casteist slurs during the assault. An FIR was finally lodged under the SC/ST Atrocities Act. The student was suspended, and months later — only after the Allahabad High Court asked for an update — he was expelled from the university. But the other members of the May 10 mob still roam the campus freely. No action has ever been taken against them.</p>
        <p>This isn't an exception. It is part of a pattern.</p>
        <p>Earlier this year, Dr. Madri Kakoti, a faculty member in the Linguistics Department, was similarly targeted. She was booked under sedition and provisions of the Bharatiya Nyaya Sanhita for a social media post that criticised communal narratives following the Pahalgam terror attack. Her words were distorted, outrage was manufactured, and the university did not stand by her. She had to approach the Allahabad High Court for anticipatory bail — and got it. But the cost was the same: isolation, defamation, and institutional silence.</p>
        <p>What do these cases have in common?</p>
        <p>They target faculty members who are critical, who are progressive, who challenge majoritarian narratives. They are punished not for what they said, but for who they are and what they represent. Dalit. Woman. Left-leaning. Independent. Unapologetic.</p>
        <p>And what of the university?</p>
        <p>The University of Lucknow has now twice failed to protect its own faculty. Once, by remaining silent when mobs issued death threats on campus. Twice, by giving police sanction to prosecute a professor for a social media post. These are not isolated incidents. These are institutional choices. Choices made to discipline dissent and show obedience to the ruling ideology.</p>
        <p>But the stakes are larger.</p>
        <p>Because when a professor is slapped in daylight, and the administration takes eight weeks to respond — that is not just negligence. That is consent.</p>
        <p>Because when a Dalit scholar is made to fear for his life for quoting a line from a book — that is not just censorship. That is Brahminical revenge.</p>
        <p>Because when universities become places where teaching history invites violence, where Facebook posts become police matters, and where no one is safe from surveillance — then the classroom is no longer a space of learning. It is a courtroom without process.</p>
        <p>Today, Prof. Ravikant stands at the receiving end of this machinery. But he is not alone. He is one of many across this country who are being told: stay silent, or face ruin.</p>
        <p>Let us be clear: if we fail to stand by him now, we will be standing at our own grave tomorrow — as students, as teachers, as writers, as citizens.</p>
        <p>The real threat is not a sentence in a classroom. The real threat is the silence of those who know better, and still choose not to speak.</p>
      </div>
    `,
    image: "/jpe.jpeg",
    author: authors.find(a => a.username === "captain-jack-sparrow")!,
    category: "University",
    date: "2025-07-11",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Dalit", "Caste", "University", "Dissent", "Society", "Academic Freedom"],
    featured: false,
    isPublished: true
  },
  {
    id: "ignored-misdiagnosed-dismissed-women-healthcare",
    title: "Ignored, Misdiagnosed, Dismissed: Women in healthcare",
    slug: "ignored-misdiagnosed-dismissed-women-healthcare",
    excerpt: "How the medical system fails women through biased research, misdiagnosis, and systemic neglect that puts lives at risk.",
    content: `
      <div>
        <p>"You are stressed", "try to do some exercise" — that's what the doctor told Sufi, who is a 35-year-old woman and has been feeling lightheaded, tired, short of breath. Doctors sent her home, unnoticed - it wasn't until she died of a heart attack.</p>
        <p>Medicine is a field based on objectivity and science, where biases should not exist. Yet, we have seen our mothers, aunts, sisters go undiagnosed until it's too late. It's not just doctors who are at fault, but the whole system - researchers, pharmaceuticals, medical schools. The fault lies at the core. Having to ask for equality in human rights is dehumanizing.</p>
        
        <h2>The Male Norm in Medical Research</h2>
        <p>Until the early 1990s, women were routinely excluded from clinical trials - the reason was hormone fluctuations, lack of understanding of reproductive health, and entrenched andronormativity. This criticism in including women in research obviously persists in today's times as well, and it all starts from research.</p>
        <p>According to the National Library of Medicine, there is underrepresentation of female subjects in animal research across disciplines. Yet, when we incorporate females in research it has revealed that they have different responses to pain. The lack of preclinical research has led to poor medical infrastructure for women. Males are seen as more stoic, meaning less reaction to pain - so when a woman complains about more pain than men, they are considered as sensitive, emotional or overreacting. Due to this lack of research on females, treatments for women may not work as well as they should.</p>
        <p>When we see the statistics on gender bias, we notice a significant gap of research — across 10 biology-related fields found a clear male bias in 8 of them - including neuroscience, pharmacology, and behaviour. Neuroscience is the worst offender— where for every 1 study on female animals, there were 5 studies on males. Only 20% of neuroscience studies used both sexes and 25% didn't even mention the sex of the animals they used.</p>
        <p>It is recently noticed that male biased studies are increasing, as scientists want hassle free trials. While in mixed-sex studies, researchers rarely analyze the results separately for males and females.</p>
        
        <h2>Outcome of Ignorance</h2>
        <p>When we turn blind eye to such basic care, we basically harm people, to find an easier way out in medicine just because the results are easier to obtain and analyze. Endometriosis impacts 1 in 10 women of reproductive age, but, on average we have to wait 7–10 years to get a diagnosis. Menopause - something nearly half the population will experience- remains understudied, and treatments are often outdated or ineffective, symptoms, lack of understanding is still alarming. Autoimmune disorders - more common among women - are another case in point. Though widespread, they receive fewer dollars than men's diseases. That slows down everything: diagnosis, treatment, even public awareness.</p>
        <p>And then there's the layer underneath - the intersection of gender and race, class, caste. Black women, to give just one example, are 3 to 4 times more likely to perish from pregnancy-related causes in the United States - and no, it's not because they're lacking in education or funds. It's just plain old systemic neglect.</p>
        
        <h2>Mental Health: Still Not Taken Seriously</h2>
        <p>Mental illness isn't even "serious" in most instances, and with women, it's always somehow attributed to hormones, mood swings, or stress. Women are more frequently diagnosed with anxiety or depression, but also more frequently brushed off. A woman experiencing chest pain may be sent home and told it's anxiety, when it's actually a heart condition.</p>
        <p>ADHD in females is another case in point - too frequently overlooked because girls don't necessarily "act out" the same manner as boys. They overthink, clam up, space out - and are labeled sensitive or moody instead. Even autism often goes undiagnosed in girls because the diagnostic standards were developed based on how boys present symptoms.</p>
        <p>Also, women's pain is constantly doubted. Chronic pain? Probably in your head. Period pain? Normal. You'll be fine. Studies show that women's pain is more likely to be referred to a psychologist than treated seriously.</p>
        
        <h2>So Where Do We Go From Here?</h2>
        <p>More women in medicine and research are bringing these points up. Some journals are now mandating sex-based analysis. A few schools of medicine are revising the curriculum. It's slow, but it's something.</p>
        <p>But token gestures won't do. This isn't about correcting a few errors; it's about turning the corner on the foundation. We need more female-led studies, more research funding for "female" illness, more representative drug testing, and above all - real listening. Listen to what patients tell us, how they feel, what their bodies are reporting.</p>
        
        <h2>The Bottom Line</h2>
        <p>Medicine today is not neutral. It was constructed by men, experimented on men, and continues to treat women as an afterthought very often. And every time we forget that, someone like Sufi gets sent home —doesn't return.</p>
        <p>Health is not one-size-fits-all. Biology, identity, experience, all of these matter. It's time our medicine caught up with that accounted for.</p>
      </div>
    `,
    image: "/asd.jpeg",
    author: authors.find(a => a.username === "aliya-imam")!,
    category: "Health",
    date: "2025-07-12",
    readTime: "12 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Healthcare", "Women", "Medical Bias", "Research", "Gender", "Health"],
    featured: false,
    isPublished: true
  },
  {
    id: "new-cool-everything-trend-nothing-real",
    title: "The New Cool: When Everything Is a Trend and Nothing Feels Real",
    slug: "new-cool-everything-trend-nothing-real",
    excerpt: "From labooboos to lifestyle cores, today's trends move faster than our taste. What does it mean when anything, no matter how strange or impractical, can become fashionable?",
    content: `
      <div>
        <p>From labooboos to lifestyle cores, today's trends move faster than our taste. What does it mean when anything, no matter how strange or impractical, can become fashionable?</p>
        
        <h2>The Age of Strange Trends</h2>
        <h3>Ugly is the new luxury</h3>
        <p>They look swollen, synthetic, and slightly ridiculous. Yet the labooboos—oversized rubber shoes with an inflated design—are being worn, photographed, and sold at luxury prices. Their popularity has little to do with comfort or beauty. Instead, they've gone viral for being bold, bizarre, and difficult to ignore.</p>
        <p>In the world of trends today, that's all it takes.</p>
        
        <h2>Fast Fashion Isn't Just Clothes, It's Culture</h2>
        <h3>Trend cycles are speeding up</h3>
        <p>Not long ago, fashion followed seasons. Now it follows algorithms. Aesthetic "cores" like clean girl, coquette, tomato girl, mob wife, blokette(a hybrid of sporty and feminine streetwear)—even if they begin as niche styles—spread fast online and vanish just as quickly.</p>
        <p>The problem isn't novelty—it's how quickly it disappears. The pressure to switch between styles, moods, and aesthetics leaves little room for people to figure out what they actually like. And that pressure isn't just about how we look. It's about who we think we are.</p>
        
        <h3>From "Fast Fashion" to "FOMO"</h3>
        <p>The emotional weight of being 'outdated'</p>
        <p>In a system where everything is trending, not keeping up can feel like falling behind. People aren't just buying into looks. They're buying into visibility, attention, and relevance. Especially for young people, there's a subtle fear: If I don't have the right look, am I even part of the conversation?</p>
        <p>Over time, this creates a kind of quiet stress. The fear of missing out becomes the reason we scroll, shop, and post, just to keep up.</p>
        
        <h2>When Taste Stops Feeling Personal</h2>
        <p>Do we like it, or are we just manipulated by the internet?</p>
        <p>Labooboos are not the only example. Crocs made a comeback, jelly shoes resurfaced, and even extremely oversized clothing trends went from joke to luxury in months. When enough people wear something, our brains adjust. We start liking things we didn't, not because they changed, but because repetition works.</p>
        <p>This makes it hard to tell where personal taste ends and trend-following begins. Is it still fashionable if it's driven by pressure instead of choice?</p>
        
        <h2>The Real Cost of Constant Change</h2>
        <p>When your style keeps changing, so do you</p>
        <p>The more we try to keep up with trends, the harder it becomes to know who we really are. Fashion used to be about expression. Now, it often feels like we're just editing ourselves again and again to stay visible.</p>
        <p>When your look changes every few weeks, your sense of self can start to feel shaky. It's no longer just your clothes that are being updated. It's your identity.</p>
        <p>After a point, you're not sure if you're dressing for yourself or just trying not to fall behind. It stops being fun and starts feeling like a quiet kind of pressure—to always be current, always be seen, always be "in."</p>
        
        <h2>Conclusion: The Trend Will Fade, But What It Leaves Behind Won't</h2>
        <p>Labooboos will fade, like jelly shoes did, like "clean girl" might, like so many things before them. But what stays is the way we've started measuring ourselves. By how we look currently. By how quickly we adapt. By whether we're seen.</p>
        <p>The real challenge isn't about liking or not liking a trend. It's about asking why we care so much in the first place. And maybe, once in a while, choosing to step back. Not because we're above it, but because we're more than a trend cycle.</p>
      </div>
    `,
    image: "/fashion.jpeg",
    author: authors.find(a => a.username === "prerna-srivastava")!,
    category: "Fashion",
    date: "2025-07-12",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Fashion", "Trends", "Culture", "Social Media", "Identity"],
    featured: false,
    isPublished: true
  },
    {
    id: "elegance-screwed",
    title: "Elegance, Screwed",
    slug: "elegance-screwed",
    excerpt: "Glen Martin Taylor's ceramic art challenges our notions of beauty and repair, using industrial hardware to reassemble broken pieces in a powerful commentary on trauma and resilience.",
    content: `
      <div>
        <p>Let's begin with a broken plate. Not metaphorically (though feel free to go there), but literally: a piece of fine china, fractured, splintered, and now reassembled not with dainty care but with steel bolts, barbed wire, and what looks suspiciously like industrial hardware pilfered from a junk drawer in a basement workshop.</p>
        <p>This is the world of Glen Martin Taylor (IG: @glenmartintaylor), a ceramic artist whose work hurls a wrench (sometimes literally) into the delicate mythologies we attach to beauty, repair, and sentiment. If kintsugi, that meditative Japanese art of mending pottery with gold, tells us our cracks are precious, Taylor replies, "Sure. Precious like trauma. And just as painful to live with."</p>
        
        <h2>The Beauty of the Unpretty</h2>
        <p>Where kintsugi wraps breakage in the soothing glow of redemption, Taylor's ceramics are practically yelling. They don't whisper stories of resilience. They scream "LOOK WHAT HAPPENED TO ME." Plates are sutured with thread and nails. Teacups are held hostage by thick black wire. A vintage saucer, probably once admired in a Victorian parlor, is now speared through by scissors.</p>
        <p>Take, for instance, the plate that reads, "But I am so pretty on the inside" (posted June 18), its rim pierced with a perimeter of nails like a crown of thorns. Or the one declaring, "Tidy wounds still leave scars," with nails barely holding its fragile form, like a smile that tries too hard.</p>
        <p>It's art that has no time for your soft-focus Instagram epiphanies.</p>
        <p>It's art not for aesthetics but for catharsis.</p>
        
        <h2>Fine China, Finer Rage</h2>
        <p>Taylor's genius lies in his collision of codes. On one hand, the vocabulary of domestic nostalgia: floral china, doilied patterns, ceramic rabbits. On the other, the violent lexicon of trauma: clamps, duct tape, hammers, severed limbs.</p>
        <p>This isn't just visual dissonance. It's a conceptual gut-punch.</p>
        <p>One piece, a dainty cup split open and stitched with thick wire, practically dares you to pour tea in it. Another features a perfectly nice plate, scorched and scrawled with the phrase, "Now is it." It's not clear what that means, but it doesn't sound reassuring. And maybe that's the point. Nothing about recovery is.</p>
        <p>It's domesticity as a battlefield.</p>
        <p>If Martha Stewart is the propaganda arm of home life, Glen Martin Taylor is the embedded war photographer.</p>
        
        <h2>Look What It Took</h2>
        <p>Let's put this old fable to bed—The one where trauma is a character-building exercise and pain comes with a diploma in resilience. You've heard it. "What doesn't kill you makes you stronger." Right. And falling down the stairs makes you a dancer.</p>
        <p>In Taylor's work, there is no graceful redemption. Just visible sutures. Not golden seams but grotesque welds. Plates that say "Art can save your life," but look like they've barely survived the surgery. Or worse, like they've done it to themselves.</p>
        <p>These pieces don't end in triumph. They don't even end in healing. They sit in the middle of the mess, which, to be honest, is where most of us actually live.</p>
        <p>You don't look at a plate bolted together like a medieval torture device and think, "Wow, so brave." You think, "God, what happened here?" Which is exactly the point.</p>
        <p>There's no gold-dusted kintsugi romance. Just a teacup wired shut like it's bracing for another explosion.</p>
        <p>This isn't strength. It's a reflex. A kind of psychic muscle memory for disaster. The work twitches. It clenches. You get the sense that if it could speak, it wouldn't say, "I'm healed."</p>
        <p>It would say, "I didn't have a choice."</p>
        <p>Taylor's pieces are not affirmations. They're conditions.</p>
        <p>Not "I made it through," but "This is what I look like now."</p>
        <p>Strength, if we must call it that, is just another word for surviving badly, a side effect.</p>
        
        <h2>Still Art</h2>
        <p>Taylor's ceramics are not polite. They are not precious. They do not attempt to hide the fact that damage hurts, that repair can feel like violence, that stitching yourself back together often means reaching for tools you barely know how to hold.</p>
        <p>In a culture obsessed with being "whole," Taylor suggests that wholeness is a myth and a dangerous one.</p>
        <p>What his plates offer instead is a kind of ugly grace. Not the fantasy that brokenness makes us beautiful, but the colder, harder idea that brokenness is simply real.</p>
        <p>And if you need a little beauty with your truth, you'll find it. Not in the shimmer of gold leaf, but in the jagged honesty of a plate screwed together like a hostage situation at a vintage store.</p>
        
        <h2>Postscript: Handle with Care. Or Don't.</h2>
        <p>Art doesn't always have to inspire. Sometimes it just has to tell the truth. Glen Martin Taylor's work may not mend your heart, but it'll show you what it looks like cracked open.</p>
        <p>And that, too, is a kind of beauty.</p>
        <p>One that doesn't flinch.</p>
        <p>Even if the plate does.</p>
      </div>
    `,
    image: "/allaaa.jpeg",
    author: authors.find(a => a.username === "shumaila-khan")!,
    category: "Art",
    date: "2025-07-13",
    readTime: "10 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Art", "Ceramics", "Trauma", "Beauty", "Repair", "Contemporary Art"],
    featured: false,
    isPublished: true
  },
    {
    id: "neocolonialism-machinery-economic-exploitation",
    title: "Neocolonialism and the Machinery of Economic Exploitation",
    slug: "neocolonialism-machinery-economic-exploitation",
    excerpt: "How developed nations continue to exploit developing countries through debt dependency, corporate dominance, and unequal trade relations in the post-colonial era.",
    content: `
      <div>
        <p>Walter Rodney, in his book How Europe Underdeveloped Africa (1972), argued that underdevelopment and poverty are not natural conditions, but the direct result of historical and structural exploitation. The wealth of developed nations is historically linked to the exploitation of poorer ones. In the post-colonial world, political independence was hailed as a turning point for once-colonized nations. In its aftermath emerged its successor—neocolonialism. Coined by Ghana's first president, Kwame Nkrumah, the term refers to the subtle yet powerful economic and political influence exerted by developed nations over developing ones, often under the guise of foreign aid and investment, leading to unequal trade relationships, debt dependency, and the exploitation of natural resources.</p>
        
        <h2>How it works</h2>
        <h3>Debt Dependency</h3>
        <p>One of the most important tools of neocolonialism is the strategic use of debt. Developing countries, often in need of capital for infrastructure and development, borrow heavily from institutions like the International Monetary Fund (IMF) and the World Bank, largely controlled by developed nations, leading to unsustainable debt. These loans typically come with certain conditions—privatization of public services, reduction in social spending, and open markets for foreign investors. While these reforms are framed as necessary for economic growth, they often lead to deeper dependency and loss of economic control.</p>
        <p>China's Belt and Road Initiative (BRI) has brought major infrastructure projects to Africa, but critics argue that it has created a new form of dependency through opaque lending and "debt diplomacy."</p>
        
        <h3>Corporate Dominance and Resource Extraction</h3>
        <p>Multinational corporations (MNCs) from developed countries, backed by their governments, influence key sectors such as agriculture, mining, and telecommunications. They extract vast quantities of natural resources—minerals, oil, timber—from developing countries, often with minimal benefit to local populations and significant environmental degradation. These corporations dictate terms, obtain labor at meager wages while workers endure unsafe conditions, and avoid taxes, leading to a drain of wealth and local resources.</p>
        <p>In countries like Bolivia and Peru, foreign mining companies dominate resource extraction. While they promise job creation, the long-term environmental damage and limited revenue-sharing agreements highlight the exploitative nature of such investments.</p>
        
        <h3>Unequal Trade Relations</h3>
        <p>Global trade, while promoting interconnectedness, often creates an unequal playing field. Developing countries primarily export raw materials and agricultural products, which are subject to volatile global prices, while importing expensive manufactured goods and technology from developed nations. This keeps them at the lower end of the global value chain.</p>
        <p>Free trade agreements, though presented as mutually beneficial, often favor affluent nations, leaving developing countries unable to compete without economic safeguards.</p>
        
        <h3>Intellectual Property Rights and Technological Dependence</h3>
        <p>The global intellectual property rights regime, largely shaped by developed nations, often disadvantages developing countries. Patents were granted for the use of turmeric in wound healing, a strain of Basmati rice, and a fungicidal product derived from neem seeds—all of which were revoked after strong opposition. Patents turn communal or Indigenous knowledge into private, profit-making property, enforcing economic dependency and perpetuating a cycle where developing nations remain consumers rather than producers of advanced knowledge and technology.</p>
        
        <h3>Environmental Outsourcing</h3>
        <p>The Global North often outsources pollution-heavy and resource-intensive industries—such as textile manufacturing, mining, and electronic waste processing—to the South. This allows developed countries to maintain cleaner environments while offloading the environmental and social costs onto developing nations. Swiss-Italian firms outsource hazardous waste to Somalia, turning it into a toxic dumping ground.</p>
        
        <h2>The Path Forward</h2>
        <p>Addressing neocolonialism requires a multifaceted approach:</p>
        <ul>
          <li><strong>Restructuring International Financial Institutions:</strong> Advocating for inclusive governance and less conditional lending.</li>
          <li><strong>Fair Trade Initiatives:</strong> Carrying out trade policies that benefit developing nations and ensure fair prices for their exports.</li>
          <li><strong>Strengthening Local Industries:</strong> Supporting policies that foster domestic economic growth and reduce reliance on imports.</li>
          <li><strong>Safeguarding Resource Control:</strong> Ensuring that natural resources are managed for the benefit of the local population and future generations.</li>
          <li><strong>Investing in Education and Technology:</strong> Building local capacity for innovation and reducing excessive reliance on technology.</li>
          <li><strong>Promoting South-South Cooperation and Regional Alliances:</strong> Strengthening economic and political ties among developing nations to build collective bargaining power. Groups like the African Union, CELAC (Community of Latin American and Caribbean States), and BRICS are promoting South-South cooperation and economic independence.</li>
          <li><strong>Grassroots Movements:</strong> Civil society organizations should be promoted to push back against land grabs, resource extraction, and unfair trade.</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>While the world has moved beyond formal empires, the struggle against economic exploitation continues. Neocolonialism has given rise to economic underdevelopment, inequality, political instability, and environmental degradation in the Global South. While powerful nations do not control these countries directly, they continue to control and exploit them. Recognizing and addressing these issues is of utmost importance in fostering a truly equitable and just world order, where every nation can pursue genuine development and self-determination.</p>
      </div>
    `,
    image: "/neo.jpeg",
    author: authors.find(a => a.username === "trishla-chaudhary")!,
    category: "Politics",
    date: "2025-07-13",
    readTime: "12 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Neocolonialism", "Economics", "Global Politics", "Development", "Exploitation", "International Relations"],
    featured: false,
    isPublished: true
  },
  {
    id: "hookup-culture-relationships-loneliness",
    title: "Hookup Culture, Relationships & Loneliness: Love in the Age of Apps",
    slug: "hookup-culture-relationships-loneliness",
    excerpt: "Exploring the paradox of modern love, hookup culture, and the loneliness that persists in the age of dating apps.",
    content: `
      <div>
        <p>Love, today, feels like a paradox. We live in a time when finding someone should be easier than ever — just a swipe away — but it feels more complicated, painful, and confusing than it’s ever been. I’m 20, and I already feel emotionally exhausted. I’ve been in relationships that never really became anything, relationships that felt more like battles than connections, and moments where I questioned whether love even means the same universal meaning anymore.</p>
        <p>Dating isn’t supposed to be this difficult. Isn’t love meant to be joyful? Shouldn’t it feel like peace instead of anxiety? Shouldn’t we feel safe, seen, and secure? Yet, for everyone I have ever come across— including myself — it feels like we’re stuck in an endless loop of disappointment and mixed signals.</p>
        <h2>The Hookup Culture Trap</h2>
        <p>The world is full of hookup culture. Apps have given us the ability to meet someone and end it like it never happened at the flick of a button. Casualism is now the norm. Lust has been placed at the center stage, and emotional connection is regarded as “too much” or “too fast”.</p>
        <p>We seek the best dopamine highs, not depth. I am not saying that attraction is not important. However, when it translates into the basis of all relationships, then everything falls apart. I have witnessed several relationships that would have turned into real and pure love stories, but ended in the air when lust was fulfilled. The physical need was satisfied, and then the emotional attachment was not worth the hype anymore. It is like when the hype falls, the individual goes with it. The misunderstanding forms the center of the relationship, and later, the cause of its downfall.</p>
        <h2>Lust vs. Love: A Blurry Line for Young Adults</h2>
        <p>A lot of young adults confuse lust for love. It’s easy to do when we’re constantly told that passion equals connection. But they’re not the same. Lust is instant, fiery, and temporary. Love is slow, warm, and steady. Yet, because we’ve grown up on movies and media that glorify intense romances, many of us think the chaotic rollercoaster is love.</p>
        <p>People usually fall for someone’s beauty, get caught up in the moment, and believe it’s real — until reality hits and they realize they never actually liked the person beyond the physical. And then, guilt and disappointment set in.</p>
        <h2>The Loneliness Behind the Masks</h2>
        <p>The reality is that many of us experience extreme loneliness despite living in a world where people are extremely connected. Although we secretly yearn for something genuine, we seek approval through likes, flirtatious texts, and hookups. All we want is to be picked, understood, and loved.</p>
        <p>Most of us, however, are too afraid to acknowledge it. Rejection hurts, and being vulnerable feels dangerous. Therefore, we conceal ourselves through casual interactions and sardonic distance. Our hearts yell for genuine connection, but we convince ourselves that we're "chill" and "not looking for anything serious."</p>
        <p>I believe that many people in my age group are weary of games, of being ignored, of "talking stages" that never end. Although we live in a culture that renders meaning archaic, we still yearn for something significant.</p>
        <h2>Maybe Love Finds Us</h2>
        <p>If there’s one thing I’ve learned, it’s that the harder you chase love, the more it slips away. It hurts more when you try to fake something casual to make it seem more real. Perhaps that's why I've given up chasing. I've begun concentrating on my development, contentment, and tranquility.</p>
        <p>You shouldn't be drained by love. It's meant to be gentle and safe. Instead of making life feel heavier, it should make it feel lighter. And perhaps, just possibly, we don't find love. Perhaps we will discover it when we have finally stopped searching in the wrong places. When we no longer accept lust masquerading as kinship.</p>
        <p>When we decide to prioritize truth over fiction and peace over chaos.</p>
        <p>I'll be here until then, learning, loving myself, and waiting for the kind of love that doesn't hurt to hold.</p>
      </div>
    `,
    image: "/hookup.jpeg",
    author: authors.find(a => a.username === "hetal-kothari")!,
    category: "Relationships",
    date: "2025-07-14",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Love", "Relationships", "Hookup Culture", "Loneliness", "Dating Apps", "Youth"],
    featured: false,
    isPublished: true
  },
  {
    id: "why-most-self-help-books-get-it-wrong",
    title: "Why Most Self-Help Books Get It Wrong",
    slug: "why-most-self-help-books-get-it-wrong",
    excerpt: "A candid look at the self-help industry, the pressure to always improve, and why real growth is messier—and kinder—than most books admit.",
    content: `
      <div>
        <p>I remember picking up my first self-help book because I felt stuck. Not in a dramatic way— just in that quiet, heavy way where nothing feels wrong, but nothing feels right either. I thought maybe the book would help me figure things out. Maybe it would tell me what I wasn’t doing properly, or how to finally become the person I thought I was supposed to be.</p>
        <p>And honestly? It felt good at first. These books know how to hype you up. They make you feel like you’re just a few changes away from completely turning things around. Wake up early. Build better habits. Think positive. Let go of fear. Take control of your life.</p>
        <p>I tried. I really did. But eventually, the routine would fall apart, the “new mindset” would fade, and I’d find myself feeling worse than when I started. Because now, not only was I still stuck, but I felt like it was my fault.</p>
        <h2>The pressure to always be “getting better”</h2>
        <p>One of the biggest things self-help books often get wrong is the way they make healing and growth feel like a checklist. Like if you just do the right things in the right order, you’ll unlock a whole new life. And when that doesn’t happen, it’s easy to feel like you’re doing something wrong.</p>
        <p>But healing isn’t linear. And it definitely doesn’t follow a schedule.</p>
        <p>Some days, you’re proud of how far you’ve come. Other days, you’re barely holding it together. That doesn’t mean you’re failing. It means you’re human.</p>
        <p>Self-help books don’t always say that out loud. They mean well, but they often sell the idea that personal growth is about constant motion—always doing more, being more, and fixing more. And if you’re tired, unmotivated, or unsure, you feel like you’re falling behind.</p>
        <h2>Healing doesn’t always look good</h2>
        <p>We’ve also started treating healing like an aesthetic. As if true growth looks like early mornings, journaling with soft music in the background, color-coded goals, and perfectly organized planners.</p>
        <p>But honestly? Some days healing is messy. It’s crying in the shower. It’s saying no when you’re used to saying yes. It’s staying in bed because your body and brain just can’t push today. That’s still growth—It just doesn’t come with a pretty filter.</p>
        <p>And the more we treat healing like a performance, the more we end up disconnecting from what we actually feel. You don’t need to look like you’re improving to be improving.</p>
        <h2>It’s also a business</h2>
        <p>This is the part that’s uncomfortable to admit but important to understand: self-help is an industry. There’s always a new book, a new method, a new “secret” to success. It becomes easy to fall into this cycle of thinking: Maybe this next one will finally fix me.</p>
        <p>But if you always feel like you’re one book away from being okay, maybe the problem isn’t with you—maybe it’s with the way these books frame the idea of growth. After all, it's easier to sell solutions to people who are convinced they're broken.</p>
        <p>Of course, not all books are like that. Some are gentle. Some are honest. Some don’t try to fix you; they just help you understand yourself better. And those are the ones that actually feel like support, not pressure.</p>
        <h2>You’re not a project</h2>
        <p>I wish more self-help books said this clearly: You’re not a project. You don’t have to be constantly improving to be worthy of rest, love, or peace. You are allowed to just be: messy, unsure, figuring things out slowly.</p>
        <p>You don’t need a five-step morning routine to be valid. You don’t need to become ‘that girl’. You don’t need to monetize your hobbies, track your every habit, or be constantly positive.</p>
        <p>Growth isn’t about fixing yourself. It’s about learning to be kind to yourself—even when nothing feels sorted.</p>
        <h2>So what do we actually need?</h2>
        <p>Maybe instead of another productivity hack or goal-setting system, we need honesty. We need people to say, “Yeah, it’s hard. Some days just suck. You’re not broken.”</p>
        <p>Maybe we need to be reminded that it’s okay to rest. That not every season of life has to be about building or striving. That you can exist right here, as you are, and that can be enough.</p>
        <p>Sometimes, what we really need isn’t advice. It’s space. To feel. To pause. To just breathe for a minute without trying to change anything.</p>
        <h2>No more fixing, just feeling</h2>
        <p>Self-help isn’t all bad. Some books genuinely offer comfort and clarity. But we have to be careful not to let these books trick us into thinking we’re never doing enough, never good enough, never there yet.</p>
        <p>You don’t need to become someone else to feel whole.</p>
        <p>You are not behind. You are not broken. You are not a checklist waiting to be completed.</p>
        <p>You are already worth showing up for even if you’re still figuring things out.</p>
      </div>
    `,
    image: "/selfhelp.jpeg",
    author: authors.find(a => a.username === "prerna-srivastava")!,
    category: "Wellness",
    date: "2025-07-14",
    readTime: "9 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Self-Help", "Wellness", "Mental Health", "Personal Growth", "Healing", "Books"],
    featured: false,
    isPublished: true
  },
  {
    id: "pyaar-passion-aur-pakoda",
    title: "Pyaar, Passion aur Pakoda: Our National Obsession with Over-Romanticising Everything",
    slug: "pyaar-passion-aur-pakoda-our-national-obsession-with-over-romanticising-everything",
    excerpt: "From Bollywood heartbreaks to rent agreements, why do we turn every aspect of life into a filmy saga? A humorous look at India’s love affair with over-romanticising everything.",
    content: `
      <div>
        <p>By now, you must’ve heard it from your neighbourhood philosopher-aunty sipping chai: “Beta, follow your passion. Dil se socho.” Lovely sentiment, truly. Except beta also has unpaid bills, a BA degree, and a dream of becoming a ‘content creator’ with three followers—two of which are his own burner accounts.</p>
        <p>Welcome to India, where dreams are larger than budgets and Instagram captions are more curated than government policies. We’re not just a nation of storytellers—we're compulsive romanticizers. Reality? That’s for losers who don’t believe in filmy endings.</p>
        <h2>Bollywood: The Original Offender</h2>
        <p>Let’s address the 800-crore elephant in the room: Bollywood. For decades, it has sold us the idea that love is always worth running away from your Shaadi for, even if the baraat is waiting outside and you’ve already eaten the gulaab jamun.</p>
        <p>Take Dilwale Dulhania Le Jayenge, for example. Simran jumps onto a moving train in Switzerland because of love. Cute. But have you ever tried catching a local train at 6 p.m.? That’s where love really dies. Or Yeh Jawaani Hai Deewani—a full-blown spiritual awakening during a trek in Manali, leading to a life of wanderlust and poetry. Bro, try trekking to the office during monsoon. That's your coming-of-age saga right there.</p>
        <h2>Every Breakup is Not a Movie Plot</h2>
        <p>Ah, the heartbreak syndrome. Aaj kal ka heartbreak is less about personal growth and more about Spotify playlists, dramatic Instagram stories, and reels about “healing journeys.” Did someone die? No, Ananya just got ghosted after two Bumble dates and now believes she’s Meena Kumari reincarnated.</p>
        <p>Every failed situationship turns into a Tamasha moment. Everyone suddenly becomes a misunderstood artist trapped in a capitalist society, when in reality, they’re just ignoring work emails and bingeing Korean dramas. “Main kaun hoon?” they ask, while still borrowing their dad’s money for Zomato Gold.</p>
        <h2>Romance in Job Interviews and Rent Agreements</h2>
        <p>It’s not just love. We romanticize everything. Careers? “I’m not working for money, I’m chasing a purpose,” says Rohan, who still relies on his parent’s Jio Wi-Fi to attend Zoom calls. “I want to open a cafe in the hills,” says Priya, who has never made coffee that wasn’t sachet-based and calls Maggi ‘gourmet’. So easy for the privileged generation to dream big, who in fact have never had to wash a single dish in their life.</p>
        <p>Even rent agreements are approached like epic struggles. “Our love will survive despite the society not allowing unmarried couples to rent together,” says Arjun, who has been living with his girlfriend for 6 days and already believes he’s part of a tragic love ballad.</p>
        <h2>Travel is Not Therapy, It’s Just Expensive</h2>
        <p>Don’t even get me started on the journey to find yourself a brigade. Goa is not a spiritual awakening—it’s just your annual escape from your city’s soul-crushing traffic and HR policies. “Mountains heal,” says someone who had a full-blown tantrum when their Airbnb had no Wi-Fi.</p>
        <p>You don’t need a solo trip to Ladakh to figure out your life. You need a job, a decent mental health app, and maybe a little less scrolling through #VanLife reels shot with drones by people sponsored by five brands and a trust fund.</p>
        <h2>The Great Indian Monsoon Myth: More Drama Than Droplets</h2>
        <p>Ah, the rains! Every Bollywood song ever has at least one slo-mo umbrella scene with wet hair and intense eye contact—because obviously, nothing says true love like catching a fever while waiting for the bus in monsoon chaos. But reality check: the monsoon is less Aashiqui 2 and more paani-paani everywhere, soaked socks, and electricity cuts that turn your Zoom meeting into a pixelated horror show. Romantic? Maybe in a film. In real life? It’s just your scooter slipping on muddy roads while you desperately try to save your phone from drowning. The only thing that truly blossoms in the rain is your mother’s lecture on how you’ll catch cold, followed by a lifetime supply of turmeric milk. So next time someone cues the rain track to set the mood, remind them: sometimes it’s just rain—and nothing poetic about soggy pakoras and wet chappals.</p>
        <h2>Reality is Too Uncool Now</h2>
        <p>Being “real” is no longer cool unless it's an aesthetic filter. Nobody wants to admit they’re confused, underpaid, and emotionally constipated. It’s always, “I’m on a journey” or “I’m evolving.” No, you’re stuck, like the rest of us, in a traffic jam on the highway of broken expectations.</p>
        <p>You romanticize being ‘broke but free’ until your UPI payment fails during a Domino’s order. You idolize ‘slow living’ until you realize it means not affording your Netflix subscription this month.</p>
        <h2>Conclusion: Time for a Reality Check, Desi Style</h2>
        <p>Maybe, just maybe, we need to calm down. Not everything needs to be poetic. Sometimes, heartbreak is just heartbreak, not a plot twist. Sometimes, a job is a job, not a calling from the universe. And sometimes, tea is just tea—not “a cup of nostalgia, wrapped in monsoon melancholy.”</p>
        <p>We don’t need Tamasha arcs in our lives. We need Wake Up Sid ones—where we grow up, do laundry, get a job, and make peace with not being the main character all the time.</p>
        <p>So next time your life feels like a montage, ask yourself: is this a movie scene or just Monday?</p>
      </div>
    `,
    image: "/midsummmerr.jpeg",
    author: authors.find(a => a.username === "hetal-kothari")!,
    category: "Culture",
    date: "2025-07-15",
    readTime: "7 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Culture", "Bollywood", "Romanticism", "Humour", "Society"],
    featured: false,
    isPublished: true
  },
  {
    id: "midsummer-muse-julys-literary-luminaries",
    title: "Midsummer Muse: July’s Literary Luminaries",
    slug: "midsummer-muse-julys-literary-luminaries",
    author: [
      {
        id: "abhinav-kumar-upadhyay",
        name: "Abhinav Kumar Upadhyay",
        username: "abhinav-kumar-upadhyay",
        image: "/Abhinav Kumar Upadhyay .jpeg"
      },
      {
        id: "trishla",
        name: "Trishla",
        username: "trishla",
        image: "/hetalllll.jpeg"
      }
    ],
    date: "2025-07-15",
    image: "/hetalllll.jpeg",
    excerpt:
      "A celebration of July-born literary giants—Brontë, Hesse, Kafka, Lahiri, Hemingway, Premchand, and Rowling—whose works are united by the transformative heat of midsummer.",
    content: `
      <div class="article-content">
        <p>
          The long, hot days of July ignite brilliant creative ferment, and indeed, many great writers share midsummer birthdays. This cluster of authors, from Victorian England to modern America-has one unifying thematic vein of transformation and intensity. Born in July, they all share the capacity to harness heat: steeping narratives in passion, sometimes in the inner journey, sometimes in social change. While the summer sun ripens ideas, the writers use their heat and energy to pour into some great works. Thus, Emily Brontë, Hermann Hesse, Franz Kafka, Jhumpa Lahiri, Ernest Hemingway, Munshi Premchand, and J.K. Rowling forms a weave of July-born geniuses whose lives and stories become knit together by the creative heat of July.
        </p>
        <h2>Emily Brontë: Passion and Turmoil on the Yorkshire Moors</h2>
        <p>
          Emily Brontë (July 30, 1818) gave to literature one fiery masterpiece. Her only novel, Wuthering Heights (1847), is “a highly imaginative work of passion and hate set on the Yorkshire moors.” A depiction of that tempestuous reaction of love for Catherine and Heathcliff depicts the raw intensity of midsummer's emotion, with windswept moors replacing hearts in turmoil. While “Emily was silent and reserved,” her solitary novel darkens and deepens the mystery of human feeling, its gothic fervor appearing as much a summer of contrasts as beauty and barbarity. There remains, just as in July's heat, a mute surface in Brontë's tale under which untamed forces rage.
        </p>
        <h2>Two Paths of Transformation: Hesse's Spiritualism, Kafka's Existentialism</h2>
        <p>
          Hesse and Kafka are two July writers who have considered inner landscapes in their works. Hermann Hesse (born July 2, 1877) was a Nobel laureate and novelist who concerned himself with spiritual awakening. His fiction (from Siddhartha to Steppenwolf and The Glass Bead Game) deals with “the individual’s efforts to break out of the established modes of civilization to find an essential spirit and identity.” Under Hesse’s pen, characters change profoundly and often do so through travel, either into the East or into the self, which mirrors the July idea of personal rebirth under a hot sun. On the other hand, Kafka (born July 3, 1883) was proclaiming the absurd and the anxious. German expressionist Kafka's visionary works, especially The Trial and The Metamorphosis, place ordinary people into strange and horrifying ordeals of anxiety and alienation. In The Metamorphosis, an awful change is made: a man wakes up as an insect. So between Hesse's enlightenment and Kafka's existential change lies the July force turning outward into inner revolution. Both authors channel that creative heat into stories of profound change: whether breaking out of society’s mold or finding oneself in a strange new form.
        </p>
        <h2>Jhumpa Lahiri: Belonging Between Worlds</h2>
        <p>
          The theme of fusions of worlds and identities is continued by Jhumpa Lahiri (born July 11, 1967). An American novelist of Bengali descent, her stories "illuminate the immigrant experience". Her Pulitzer Prize-winning collection Interpreter of Maladies and her novel The Namesake explore cultural dislocation and cultural belonging. Lahiri sees her writing as a way "to allow the two worlds I occupied to mingle on the page": she writes from a mix of American and Indian locations (amongst others), and creates protagonists struggling to reconcile their old and new identities. In her deft, easy prose, personal and cultural transformations happen, largely through quiet but deep-seated suspensions of expectation. Lahiri’s (now July-born) insight also suggests that summer is not only a time of heated divisions but also the heat of uniting two traditions coming together, just as the heritage of her characters intersects under a single sun.
        </p>
        <h2>Ernest Hemingway: Grit, War, and the Human Spirit</h2>
        <p>
          Ernest Hemingway (born July 21, 1899) expresses July’s fervor in an alternative rhythm. An American Nobel laureate and adventurer, Hemingway is widely recognized for his concise, potent stories. He is “noted for the intense masculinity of his writing and for his adventurous…life.” Novels such as A Farewell to Arms and For Whom the Bell Tolls combine love and war, spare prose and palpable tension. As such, Hemingway’s protagonists often face life-and-death challenges in baking hot battlefields or at sea,; and Hemingway's lean style - “succinct and lucid”- casts a long shadow over the development of 20th century fiction. July's fire is present in the challenging strength of Hemingway: the brutality of summer becomes the backdrop to human perseverance, and every sunset seems the harbinger of another conflict, or passion; July’s vitality is destructive and has a strong will to live. In his universe, as in the height of summer, the ordinary is threatened by extremes; survival demands growth.
        </p>
        <h2>Premchand: Rural India and the Power of Realism</h2>
        <p>
          Munshi Premchand (31 July 1880 - 8 October 1936) of India also utilized social realism to convey summer's intensity. Writing in Hindi and Urdu, Premchand is generally regarded as the father of modern Indian fiction. A Premchand biographer observes, "He created the serious novel and serious short story in both Hindi and Urdu". His fiction -- including the classic Godaan (The Gift of a Cow) -- elucidates the problems of rural and urban life: poverty, caste inequality, and colonial exploitation. Premchand "dedicated his literary talent to the important job of raising public consciousness (the term, public consciousness, reflects a sense of folie de grandeur) of critique to national and social issues". In his narratives, July's heat becomes a metaphor for social awakening: the exceeding heat of India's climate mirrors the heat of reform. When Premchand's characters -- "people of flesh and blood," often peasant and laborer -- endure literal heat, sowing potentially revolutionary ideas, we get an evocative social portrait. In Premchand's accounts, the creative sun of July brightens the struggle for a more just reality.
        </p>
        <h2>J.K. Rowling: Spells, Stories, and the Magic of Growing Up</h2>
        <p>
          Ultimately, J.K. Rowling (b. July 31, 1965) carries forward the tradition of July imagination into the present day. Rowling is “the British author and creator of the popular and critically acclaimed Harry Potter series.” Throughout seven volumes, she creates a modern mythology: Harry Potter is a lonely orphan who “learns he is…a wizard and enrolls in the Hogwarts School of Witchcraft and Wizardry.” Rowling’s stories are full of magic and transformation—from spells that change the familiar (a frog to a prince, a person to an animal) to Harry’s own path to coming of age. At its core, Harry Potter is about ordinary children growing up to become heroes, about love conquering over darkness, and about believing in what seems unbelievable. The imagination of Rowling’s world—talking portraits, living castles, and huge feasts in summer halls—is kin to the wonder of midsummer. In July, through Rowling, we see how fantasy can change readers, creating courage and friendships, as if by midsummer magic.
        </p>
        <h2>Voices That Still Resonate:</h2>
        <p>
          Although hailing from different cultures and eras, these authors born in July share a flame. Each of them provided a spark of summer brilliance to the world of literature: Brontë reminded us of gothic fervour with her passionate tales; Hesse and Lahiri of inner journeys and discovery; while Kafka and Rowling illustrated literal magic and transformation; Hemingway tested rugged endurance; and Premchand added social conscience. Their works together provide ample testimony to the potential of creativity and change to redeem. July is a month of peak warmth and brightness, so to offer similar birthdays to writers whose works flash from the page is an apt metaphor. In summation, the weight of their collective contributions is considerable, leaving behind a legacy of stories that continue to inspire and develop understanding; generations later, the diverse narratives are embers igniting imagination amongst readers seeking narratives of human experience; to remind us that the heat of summer is where transformation emerges, in life and in literature.
        </p>
      </div>
    `,
    category: "Literature",
    readTime: "12 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: [
      "Literature",
      "Authors",
      "July",
      "Creativity",
      "Transformation",
      "Biography",
      "Book History"
    ],
    featured: true,
    isPublished: true
  },
  {
    id: 0, // Replace with the next unique ID
    title: "Is Slowness Possible in This Digital Era?",
    slug: "is-slowness-possible-in-this-digital-era",
    excerpt: "In a world that never stops, can we still find moments of true slowness and presence?",
    content: `<div>
      <p>I don’t remember the last time I did nothing without feeling guilty about it.</p>
      <p>Even when I’m “resting,” I’m checking something. Scrolling. Tapping. Replying. Watching. Skipping. Repeating. There’s always noise, always movement. Even silence has started to feel loud.</p>
      <p>Sometimes, I wonder — in a world that moves this fast, is slowness even possible anymore?</p>
      <h3>We’re Always On</h3>
      <p>The moment we wake up, our phones are in our hands. Messages, notifications, reminders, updates—all waiting before we’ve even had water.</p>
      <p>We move from app to app, task to task, screen to screen. And somewhere in all that rush, we forget how to pause. How to just sit with something. How to let a moment be slow without filling it with something "useful."</p>
      <p>The world has trained us to keep up, but with what, exactly?</p>
      <h3>We’ve Confused Busy With Fulfilled</h3>
      <p>Being busy has become a badge of honor. If you’re not working, learning, creating, or producing something, you feel behind. There’s this constant pressure to be “on top of things” — to respond fast, to know everything, to never fall out of step with the latest trend, idea, or update.</p>
      <p>But are we really more fulfilled? Or just more exhausted?</p>
      <p>Slowness isn’t about laziness. It’s about intention. It’s about being present with one thing at a time instead of scattering ourselves into pieces across a hundred tabs and to-do lists.</p>
      <h3>The Anxiety of Doing Nothing</h3>
      <p>The idea of slowing down sounds lovely — until we try to actually do it. Then comes the restlessness. The voice in our heads that asks, “Shouldn’t you be doing something?”</p>
      <p>We reach for our phones instinctively. Even boredom feels unbearable. We're not used to stillness anymore  not because we don't need it, but because we've forgotten how to sit in it.</p>
      <p>The truth is, slowness requires unlearning. It requires resisting the urge to fill every gap. And that’s hard when the world is designed to pull your attention in a hundred directions.</p>
      <h3>But Some Things Still Move Slowly</h3>
      <p>A tree doesn’t rush to grow. A wound doesn’t heal overnight. Real connection takes time. Deep thoughts come after silence. Even the best art, the kind that moves people, is usually made in long, quiet hours.</p>
      <p>Some things still belong to the pace of slowness — and maybe we do too.</p>
      <p>Our bodies, our minds, our relationships — they aren’t machines. They’re not meant to be optimized every second. They need space. Breathing room. Messy pauses.</p>
      <h3>Can We Reclaim Slowness?</h3>
      <p>I think so but not all at once.</p>
      <p>Maybe it starts small. Eating without watching something. Walking without headphones once in a while. Letting a thought finish before jumping to the next.</p>
      <p>Maybe it means allowing ourselves to rest without earning it. Saying no to things that constantly demand our attention. Taking longer to reply to that message. Reading something slowly, just because it feels good.</p>
      <p>Slowness doesn’t have to mean dropping out of the world. It just means choosing presence over pressure, whenever we can.</p>
      <h3>One Last Thought</h3>
      <p>We live in a time where everything is fast but that doesn’t mean we have to be.</p>
      <p>Slowness is still possible.<br/>
      But it won’t come by accident.<br/>
      We’ll have to choose it — again and again.</p>
      <p>And maybe, in those small moments where we do, we’ll find a little more peace, a little more clarity, and a version of ourselves that isn’t always rushing to keep up.</p>
    </div>`,
    image: "/nevermind.jpeg",
    author: authors.find(a => a.username === "prerna-srivastava")!,
    category: "Culture",
    date: "2025-07-16",
    readTime: "6 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["digital life", "slowness", "wellbeing", "technology", "mindfulness"],
    featured: false,
    isPublished: true,
  },
  {
    id: 0, // Replace with the next unique ID
    title: "A Brief History of Forgetting",
    slug: "a-brief-history-of-forgetting",
    excerpt: "How textbook revisions in India are reshaping not just history, but the very idea of education and democracy.",
    content: `<div>
      <p>In most functioning democracies, education is meant to sharpen the mind, not dull it. The textbook, for all its institutional monotony and glue-scented pages, remains a tool of possibility: a place where a young citizen might first encounter injustice, rebellion, plurality, and the spine of their nation’s history. What it chooses to include or omit, to highlight or flatten, tells us more than any speech about the country's moral and intellectual priorities. In India, that tool has begun to resemble something else entirely: a scalpel in the hands of a state keen to carve out inconvenient truths.</p>
      <p>Since 2014, India’s school curricula have undergone more edits than a political manifesto in an election year. The NCERT, the National Council of Educational Research and Training, was once an ostensibly apolitical body, tasked with the dispassionate business of producing textbooks. Today, it seems to function less like an academic council and more like a cultural ministry for the ruling party. In this iteration, the classroom is not a space for critical thinking; it is a staging ground for myth-making.</p>
      <p>The most glaring casualties of this revisionist project are not obscure footnotes but towering facts. Charles Darwin has been excised from the science syllabus, the theory of evolution deemed too adult or too provocative for young Indian minds. The Mughals, whose architectural, political, and cultural imprints are embedded in nearly every corner of the subcontinent, have been reduced to vague allusions and architectural cameos. The 2002 Gujarat riots, once a chilling case study in state complicity and sectarian violence, have been linguistically laundered. “Mostly Muslims” has been scrubbed clean and replaced with “more than 1,000 persons,” as if precision might offend propriety. The Babri Masjid demolition is now simply a “three-domed structure,” a phrase so sanitized it could appear in a real estate brochure.</p>
      <p>Even Gandhi, India’s uneasy conscience and its moral compass, has not been spared. His critiques of Hindu majoritarianism, once a vital counterweight in a country forever balancing its secular ideals with religious identities, have been quietly removed. What remains is a flattened hagiography: Gandhi as a benign mascot rather than a disruptive prophet.</p>
      <p>The government’s 2020 National Education Policy, hailed in some circles as “visionary,” has become the scaffolding for this cultural redesign. Critics, including former textbook authors, have called this “saffronisation.” Its emphasis on “value-based” education sounds innocuous enough—who, after all, is against values? But in this context, value is a proxy for orthodoxy, and orthodoxy a proxy for control. These revisions are defended, often earnestly, as necessary course corrections: a belated balancing act after decades of alleged secular bias. But behind the rhetoric of “correcting history” lies a more revealing ambition: to simplify the nation’s past into something more comfortable, more devotional, and less prone to questioning. This is not merely about history; it is about ideology in academic clothing.</p>
      <p>To be clear, no nation’s education system is entirely free of ideological influence. But the genius of India’s current revisionist project lies in its subtlety. It rarely bans; it reframes. It does not censor; it curates. The result is a curriculum that feels less like propaganda and more like gentle persuasion. History, rebranded as heritage. Diversity, reimagined as uniformity. Complexity treated like clutter.</p>
      <p>The irony, of course, is that this intellectual minimalism is often framed as a return to Indian greatness, as if the country’s civilizational legacy, with all its nuance and philosophical depth, requires dumbing down to survive in the modern age. What a strange kind of pride it is that cannot coexist with the full truth of a nation’s past.</p>
      <p>Yet the solution is not to swing the pendulum back to a different dogma. What India needs is not a new master narrative, but a new reverence for reason. For educators who are allowed to teach, not preach. For curricula that prepare students not to recite the past, but to interrogate it.</p>
      <p>If India must look to its ancient traditions, let it look not just to kings and conquests, but to the tradition of argument itself: to the Upanishadic dialogues, to the heterodoxy of Sufi mystics, to Ambedkar’s rigorous constitutionalism. Let the classroom be a space of contest, not catechism.</p>
      <p>Because the real strength of a democracy lies not in the simplicity of its stories, but in the courage to tell them whole.<br/>
      Because the question is no longer academic: If Gandhi can be edited out, what chance does the average citizen stand?<br/>
      And who will remain to file the footnotes?</p>
    </div>`,
    image: "/shumailaarticleeee.jpeg",
    author: authors.find(a => a.username === "shumaila-khan")!,
    category: "Society",
    date: "2025-07-16",
    readTime: "7 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["education", "history", "India", "textbooks", "politics", "democracy"],
    featured: false,
    isPublished: true,
  },
  {
    id: "paws-of-kindness-when-animals-feel-more-human",
    title: "Paws of kindness : When Animals Feel More Human",
    slug: "paws-of-kindness-when-animals-feel-more-human",
    excerpt: "In a world where cruelty and numbness are on the rise, animals remind us what it means to be truly human—with empathy, loyalty, and kindness.",
    content: `
      <div>
        <p>Humans are quite commonly referred to as the most intelligent beings on planet Earth. We construct cities, fly airplanes, create machines, and compose poetry. We feel that God bestowed consciousness, morality, and a mind with the capabilities of love and logic upon us. But in this modern world, one cannot help but ask- if we are the most evolved species, then why are we losing the very things that make us ‘human’ ?</p>
        <p>Every day, the news feels like a nightmare. Women are raped - sometimes in moving cars, sometimes in their homes, sometimes by people they trusted. Children are kidnapped, abused, and left to die. People kill for religion, for revenge, for pride. A man stabs another for looking at him the wrong way. A mob lynches someone based on a rumor. And the most disturbing part? We’ve become numb to it.</p>
        <p>Violence does not shock us anymore - it simply scrolls by in our news feed.</p>
        <p>Self-importance, malice, and cruelty are at center stage in a world that once boasted of empathy. We yell, cancel, cancel again, block, insult, and forget. We've allowed religion to divide, caste to kill, greed to overwhelm. Somewhere along the way, kindness was equated to weakness, and silence to complicity.</p>
        <h2>The Ones We Look Down On Show Us the Way</h2>
        <p>And then, of course, there are animals.</p>
        <p>They do not have books or temples or laws. They do not have language, courts, or social media. But somehow, they still remember how to care. A dog waits for weeks beside its owner's grave. A mother cow weeps when her calf is removed. An elephant walks miles to grieve over a fallen herd member. Street dogs watch over the homeless. Birds feed one another. Monkeys clean the injured. Cats push the depressed.</p>
        <p>They don't require lessons to love. It's natural.</p>
        <p>Animals don't rape. They don't kill for sport. They don't kill for jealousy or anger. They don't set fire to forests for greed. They don't exploit. They survive, yes - but not at the expense of another's destruction. They understand loyalty, guardianship, and emotional complexity in a way that appears foreign to many of us.</p>
        <p>And yet, we say they're "less evolved."</p>
        <p>If intelligence is not met with kindness, what is the point? If education, religion, and advancement are not going to make us stop hurting each other, what else have we accomplished?</p>
        <p>We were meant to be the caretakers of this earth. We were bestowed with a mind not only to innovate but to empathize. But somewhere, we went in the opposite direction. We let our complex of superiority swell so much that we lost sight of: gentleness is the true strength.</p>
        <p>Animals do not pretend. They don't pretend. Their love is unprocessed, their sorrow is genuine, and their instincts are generally more moral than our intellect. Perhaps that's why, in a world where man kills man without hesitation, animals still cling to decency.</p>
        <p>This isn't to idealize animals or claim they're perfect. But in the world today, their kindness rings truer. Their empathy is more congruent. And compared to many of us- who profess to be rational, civilized, and progressive - are losing the very humaneness we used to pride ourselves on.</p>
        <p>Perhaps then it's time we stopped referring to animals as "lesser beings."<br/>
        Because at the moment, they're showing us what it is to simply be kind.<br/>
        And perhaps, just perhaps, they are more "human" than we.</p>
      </div>
    `,
    image: "/animalllll.jpeg",
    author: authors.find(a => a.username === "aliya-imam")!,
    category: "Culture",
    date: "2025-07-17",
    readTime: "7 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Culture", "Empathy", "Animals", "Kindness", "Humanity"],
    featured: false,
    isPublished: true
  },
  {
    id: "impact-of-indus-valley-civilization-on-indian-culture-and-history",
    title: "Impact of Indus Valley Civilization on Indian Culture and History",
    slug: "impact-of-indus-valley-civilization-on-indian-culture-and-history",
    excerpt: "From religion and language to trade, architecture, and technology, the Harappans have left a permanent legacy on the Indian subcontinent.",
    content: `
      <div>
        <h2>INTRODUCTION:</h2>
        <p>
          Long before empires rose and fell, there existed one of the most advanced and mysterious civilizations in human history — the Indus Valley Civilization, also called the Harappan Civilization. Flourishing between 2600 BCE to 1900 BCE in the northwestern regions of the Indian subcontinent, it laid down the foundation of what we now call Indian identity. Even though it declined thousands of years ago, its impact on our culture, traditions, and systems still echoes in modern India.
        </p>
        <h2>RELIGION:</h2>
        <p>
          While the Harappans are often considered non-theistic, with no evidence of grand temples or gods, they did have strong spiritual beliefs. The worship of a Mother Goddess was common — a symbol of fertility and creation. Interestingly, this tradition still survives today in Hinduism, where the divine feminine is worshipped in many forms like Durga, Kali, and Lakshmi. This is a clear example of how ancient beliefs have blended into our modern faiths.
        </p>
        <h2>LANGUAGE AND SCRIPT:</h2>
        <p>
          One of the most fascinating aspects of the Indus Valley is its undeciphered script. While we still don’t fully understand it, many scholars believe it has links to the Dravidian language family, and possibly even influenced the Brahmi script, which is one of the oldest scripts used in India. The legacy of this ancient language system continues to inspire linguistic studies and reminds us of our rich, mysterious past.
        </p>
        <h2>ARCHITECTURE, URBAN CITIES, TRADE, AND CRAFT:</h2>
        <p>
          The Harappans built planned cities with advanced drainage systems, well-organized streets, and public baths — a sign of a society that valued cleanliness and order. Their expertise in crafts and trade was extraordinary. Before colonization, India contributed 27% to global trade, known globally for its handicrafts, textiles, and fine art. This legacy of craftsmanship and trading excellence can be traced back to the Harappans — making them pioneers in these fields. Even today, Indian handicrafts are famous worldwide, continuing the tradition they once started.
        </p>
        <h2>INDIAN METALLURGY:</h2>
        <p>
          A groundbreaking discovery in 2020 revealed a 4,000-year-old workshop in Harappa. It contained copper tools, ceramic pieces, and more — showing that the Harappans were masters of metalwork. Their metallurgical techniques were far ahead of their time, and their innovation has had a lasting influence on India’s metal industry, which still thrives with traditional and modern practices.
        </p>
        <h2>CONCLUSION:</h2>
        <p>
          In conclusion, the Indus Valley Civilization was not just an ancient society — it was the root of Indian culture. From religion and language to trade, architecture, and technology, the Harappans have left a permanent legacy on the Indian subcontinent. Even after thousands of years, we still carry pieces of that civilization in our daily lives. It is not just history — it is a living part of India.
        </p>
      </div>
    `,
    image: "/indus.jpeg",
    author: authors.find(a => a.username === "ansesveri-laxmi")!,
    category: "History",
    date: "2025-07-17",
    readTime: "6 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Indus Valley", "History", "Culture", "Civilization", "India"],
    featured: false,
    isPublished: true
  },
  {
    id: "thakurganj-worker-washed-away-lucknow-civic-collapse",
    title: "Another Worker Washed Away: Thakurganj Death Is a Quiet Indictment of Lucknow's Civic Collapse",
    slug: "thakurganj-worker-washed-away-lucknow-civic-collapse",
    excerpt: "The tragic death of Suresh Lodhi in a waterlogged Lucknow street exposes the deadly cost of civic neglect, bureaucratic ritual, and a system that only wakes up after a body is found.",
    content: `<div>
      <p>On the rain-soaked morning of July 12, 40-year-old Suresh Lodhi stepped out from his home in Thakurganj, Lucknow, on his usual route to work. Somewhere near Manju Tandon Dhaal, under waterlogged streets and an unmarked, open drain, he disappeared. His family searched. The police were called. The SDRF came and went. But it wasn’t until 28 hours later that a local cattle owner, not the state, found his lifeless body—nearly a kilometre away, at the edge of the Cattle Colony.</p>
      <p>By the time his remains were recovered, the system had already started doing what it does best: damage control. A junior engineer was suspended, a contractor blacklisted, FIRs filed like ritual offerings. But the question that remains — and must remain — is: why was a working man’s body the price of waking the municipal machinery up?</p>
      <h2>“We Had Warned Them”</h2>
      <p>Suresh’s wife, Renu, had reportedly raised alarms about the open drain days before the incident. The local BJP corporator, CB Singh, was informed in advance. Yet, when the rain came, no barricades were in place. No signage. No one posted at the danger spot. Just a gaping death trap disguised as a road.</p>
      <p>Locals say they watched helplessly as Suresh was swept away. Some jumped in. Others screamed. The rain drowned out both. The drain had been opened during cleaning work by a contractor hired by the Lucknow Municipal Corporation and was never closed. No warnings, no repairs, no urgency.</p>
      <h2>FIRs and Face-Saving</h2>
      <p>Two FIRs have been filed in the aftermath. One, by the executive engineer of the LMC, against the contractor and the firm Anika Enterprises for negligence. The other, more telling, was filed by Suresh’s wife — against the corporator himself, holding him accountable for ignoring warnings that might have saved a life.</p>
      <p>The government responded swiftly — at least on paper. Chief Minister Yogi Adityanath announced ₹9 lakh compensation for the bereaved family (₹5 lakh from the CM’s Relief Fund, ₹4 lakh from the Disaster Relief Fund), and ordered a probe into the incident. The Junior Engineer was suspended, the Assistant Engineer served notice, and the contractor blacklisted.</p>
      <p>But no punishment can undo what negligence has already written in blood.</p>
      <h2>Anger in the Corporation</h2>
      <p>The corporator’s FIR became the next political flashpoint. On Monday, several municipal councillors staged a protest outside the office of the Municipal Commissioner, chanting slogans and demanding the FIR against their colleague be withdrawn. Some accused the administration of targeting elected representatives while ignoring systemic failure.</p>
      <p>This is a familiar playbook: a human death becomes a political spectacle, while the structures that allowed it fade back into routine impunity.</p>
      <h2>The Broader Pattern</h2>
      <p>This isn’t the first time that Lucknow’s drainage systems have turned fatal. Each monsoon leaves its casualties: drowned children, swept-away elderly, waterborne illness in slums, and workers like Suresh Lodhi. Every time, the administration promises reform. Every time, the reforms begin with a funeral.</p>
      <p>In this city, governance seems to arrive only after a body does.</p>
      <p>Suresh Lodhi wasn’t just a victim of rainfall. He was a victim of design — of an urban system that forgets the poor exist until they die. Open drains in working-class areas are not accidents. They are features of a state that no longer plans for dignity, only for crisis management.</p>
      <p>If a 40-year-old father of three can disappear into a city’s drainage during a routine walk to work, and if that disappearance draws out a response only because his body was eventually found, then the city itself is guilty.</p>
      <p>Lucknow must ask: how many more deaths before infrastructure is no longer a death sentence for the poor?</p>
    </div>`,
    image: "/jakii.jpeg",
    author: authors.find(a => a.username === "captain-jack-sparrow")!,
    category: "City",
    date: "2025-07-18",
    readTime: "7 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: ["Lucknow", "Civic Issues", "Urban Governance", "Drainage", "Negligence", "Workers", "Death", "Accountability"],
    featured: false,
    isPublished: true
  },
  {
    id: "nice-girls-dont-get-corner-offices", // Change if needed for uniqueness
    title: "Nice Girls Don’t Get The Corner Offices",
    slug: "nice-girls-dont-get-the-corner-offices",
    excerpt: "A sharp critique of corporate feminism and the double bind women face in leadership, questioning whether the solution is to mimic masculine models or to redefine power itself.",
    content: `
      <div class="article-content">
        <p>
          The corporate world loves a woman who knows her place. She’s polite in meetings, punctual in email threads, and carries just the right amount of ambition to be seen as productive, but not enough to be seen as a threat. She smiles through interruptions, thanks people for stealing her ideas, and cloaks her intelligence in sentences that begin with “I might be wrong, but…”
        </p>
        <p>
          This woman, we’re told, is “nice.” And the nice girl, as the title of Lois P. Frankel’s now-iconic manual declares, does not get the corner office.
        </p>
        <p>
          The advice sounds simple enough: stop playing small. Say no. Take up space. Don’t apologize for breathing. In theory, this is empowering. In practice, it’s exhausting. Because the question lurking beneath all this corporate feminism is more complicated than it appears.
        </p>
        <p>
          <strong>If not nice, then what?</strong>
        </p>
        <p>
          Should women perform masculinity? Should they bark orders, crush egos, and perfect the power handshake like it’s a war ritual? Should they “lean in” until their spine snaps? Should they bleach out the traits that have been historically coded feminine - softness, empathy, humility, tact—because those are now synonymous with weakness?
        </p>
        <p>
          And if so, what exactly are we fighting for? A seat at the table, or a better blueprint for the table itself?
        </p>
        <p>
          Let’s be clear: Nice isn’t a personality trait. It’s a strategy. A role. A social lubricant that women are conditioned to adopt early on because it keeps the peace, maintains decorum, and, most importantly, makes others comfortable. It’s a kind of emotional Botox. Smooth. Controlled. Palatable.
        </p>
        <p>
          The problem isn't that women are nice. The problem is that niceness is rewarded until it isn't.
        </p>
        <p>
          Be accommodating, and you're forgettable. Be assertive, and you're a threat. Smile, and you're unserious. Frown, and you're a problem. It’s a game of optics where the rules are invisible and the referees are everywhere.
        </p>
        <p>
          At the heart of this is the double bind: femininity makes you likable, but not powerful. Masculinity makes you powerful, but not likable. Choose either, and you lose. Choose both, and you’re told to pick a lane.
        </p>
        <p>
          But here’s the deeper rot: the corner office itself, this glittering metaphor of success, was designed around a distinctly male script. Success, in its most traditional corporate sense, is about conquest, domination, decisiveness, certainty. It is vertical. Hard-edged. Outcome-oriented. It demands that you not just speak, but interrupt. Not just lead, but own. Not just rise, but elbow your way up.
        </p>
        <p>
          These values, though not inherently male, have been culturally assigned to masculinity for centuries. And so when women strive toward them, they are often punished; not for their competence, but for their transgression.
        </p>
        <p>
          What if the issue isn’t that women aren’t leading right? What if the issue is how we’ve come to define leadership itself?
        </p>
        <p>
          Because there is power in grace. In collaboration. In uncertainty. In quiet conviction that doesn’t need to announce itself. But these forms of power don’t fit into a KPI spreadsheet. They don’t dominate the room; they change its temperature.
        </p>
        <p>
          And yet, even in 2025, softness is still suspect. Empathy is HR-speak until it threatens profit. Vulnerability is praised in keynotes but penalized in performance reviews. So women learn to weaponize their warmth just enough to be tolerated, but not enough to be taken seriously.
        </p>
        <p>
          Which brings us back to Frankel’s book. It is often read as a feminist gospel, but let’s not confuse survival strategy with liberation. The advice - speak up, stop apologizing, don’t smile so much; doesn’t dismantle the system. It helps you dodge its landmines.
        </p>
        <p>
          That’s not nothing. But it’s not a revolution either.
        </p>
        <p>
          The real question isn’t how women can hack the system. It’s why the system still needs hacking at all.
        </p>
        <p>
          Maybe “nice” girls don’t get the corner office because the corner office was never meant for anyone but those who built the blueprint. Maybe the way forward isn’t to mimic masculine models of power, but to redefine what power even looks like.
        </p>
        <p>
          What if leadership wasn’t about dominance, but presence? What if success wasn’t about climbing over others, but building with them? What if the real rebellion wasn’t in being “not nice,” but in being fully human - soft, sharp, messy, whole?
        </p>
        <p>
          Because let’s face it. The “girlboss” is tired. The corner office is a tired metaphor. And most women aren’t interested in repackaging patriarchal values with better branding. They’re interested in burning the performance script.
        </p>
        <p>
          So no, the point isn’t to stop being nice. It’s to stop performing niceness as a prerequisite for survival. It’s to stop shrinking to fit spaces that were never designed with your voice in mind. It’s to stop asking for permission to exist loudly.
        </p>
        <p>
          Kindness is not weakness. Empathy is not a liability. Grace is not a flaw. But the expectation to always embody those things, without fail, is.
        </p>
        <p>
          So maybe nice girls don’t get the corner office. Maybe they build new offices. Open-plan. Sunlit. With no room for pretending. And definitely no room for glass ceilings.
        </p>
      </div>
    `,
    image: "/alooo.jpeg",
    author: authors.find(a => a.username === "shumaila-khan")!,
    category: "op-ed",
    date: "2025-07-18",
    readTime: "10 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: [
      "Corporate Feminism",
      "Leadership",
      "Gender",
      "Workplace",
      "Women",
      "Power",
      "Society"
    ],
    featured: false,
    isPublished: true
  },
  {
    id: "being-a-girls-girl-deconstructing",
    title: "Being a girl's girl: deconstructing",
    slug: "being-a-girls-girl-deconstructing",
    excerpt: "A critical examination of the modern 'girl's girl' trend and how it has lost its real meaning in the age of social media feminism.",
    content: `
      <div class="article-content">
        <p>
          If you are someone who has scrolled on social media, reels, TikTok, you must be familiar with the term "girl's girl". A form of modern feminism wrapped in the package of flashy trends has somehow lost its real meaning.
        </p>
        <p>
          <strong>An initiative that is not new but rather rebranded</strong>
        </p>
        <p>
          While it may seem to some that it is something that is "Gen-Z", it is not.
        </p>
        <p>
          Being a girl's girl means women supporting women. The propaganda that is sold to us usually in Hindi goes like "Aurat hi aurat ki dushman hoti hai," which translates to woman is the enemy of woman which is far from the truth. From time and time again we have seen great examples of how women love to celebrate each other's achievements, and women will clap the loudest for other women. So being a girl's girl is just the "Instagrammable form" of women supporting women.
        </p>
        <p>
          <strong>What it means to be a girl's girl</strong>
        </p>
        <p>
          A girl's girl is someone who immediately tells you the store they got their clothes/perfume/jewelry from when complimented. She is also the person who hasn't gossiped a day in her life. In addition, she immediately tells someone they have something in their teeth or they need to fix their makeup the second it appears. If girls don't adhere to these standards, they can be labeled as "out to get the other girls" and are no longer considered girl's girl. And now the big question is, is it possible to be a girl's girl? The simplest answer is no. No woman in her life is going to be uplifted or feel supported just because some random girl told them that they need to touch up their makeup.
        </p>
        <p>
          A girl's girl is also someone who is not "boy crazy". They prioritize their female friends over those they are romantically interested in. While many girls value their female friendships and put great effort into them, it is unrealistic to expect girls not to equally value the time and work put into building romantic relationships. Just because a girl is having a love life doesn't mean she is only seeking male validation, even if she might cut down on time with friends to do so.
        </p>
        <p>
          And I think that helping a person is based on someone's morals, not their gender
        </p>
        <p>
          To uplift a woman, you need to fight the patriarchy, not fill the comment section of an Instagram post with bows emoji and "slayyy".
        </p>
        <p>
          <strong>Maybe we got lost in translation</strong>
        </p>
        <p>
          Like any other trend, this trend about being a girl's girl, supposed to be uplifting and positive, has gotten lost in translation and has lost its real meaning.
        </p>
        <p>
          Now, even if a girl is demeaning, has an overconsumption addiction, makes Pinterest her whole personality, you have to encourage her with the most trending words going "you go girl" or " you slay".
        </p>
        <p>
          But the question is, why?
        </p>
        <p>
          Does our morality hold less weight than being a so-called girl's girl? Does someone have to support a girl even if they don't align with your morals and she does not care about what's right from wrong, or is selective about which cause to support only based on what aligns with her aesthetics?
        </p>
        <p>
          <strong>A watered-down version of female friendships</strong>
        </p>
        <p>
          Feminist author Dolly Alderton once wrote, "nearly everything I know about love, I've learnt from long-term friendships with women." And as someone who truly values her female friendships, I am a little hesitant to call myself a "girl's girl" because it might seem harmless, but the trend waters down the female friendships to materialistic things, like if you don't write a 100 comments under your friend's post, you are not a girl's girl. The trend also somehow puts the men on center stage, because according to the reels and TikTok toks circulating, they insinuated that to be a girl's girl, you have to make your female friend look good according to men's standards, help them look good in front of their crush, which in truth is shallow.
        </p>
        <p>
          <strong>A shallow form of feminism</strong>
        </p>
        <p>
          If you are aware of the third wave of feminism, you must know that it heavily promotes feminism based on overconsumption and has a materialistic approach; it is shallow.
        </p>
        <p>
          In one way or another, it early resembles "lipstick feminism." Lipstick feminism, also known as third-wave feminism, is a type of feminism that embraces traditional feminine displays like makeup and clothing, while still acknowledging patriarchal roots and advocating for women's equality. It challenges the idea that femininity and sexuality are incompatible with feminism, and seeks to reclaim traditionally feminine attributes as empowering. Again, putting men at the centre stage. So it may seem harmless from a distance, but at its core, the trend is supporting patriarchy and targeting the audience to have a materialistic approach to feminism rather than doing something that will make a difference.
        </p>
        <p>
          And as long as people keep supporting trends such as this, they will keep supporting the patriarchy in one form or another.
        </p>
        <p>
          <em>"It is a tragedy beyond the power of language to convey when what has been imposed on women by force becomes a standard of freedom for women, and all the women say it is so."</em>
        </p>
        <p>
          <strong>- Andrea Dworkin, Intercourse</strong>
        </p>
      </div>
    `,
    image: "/tanu.jpeg",
    author: authors.find(a => a.username === "tanu-mohan")!,
    category: "Features",
    date: "2025-07-19",
    readTime: "8 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: [
      "Feminism",
      "Social Media",
      "Women",
      "Trends",
      "Modern Feminism",
      "Girl's Girl",
      "Patriarchy",
      "Female Friendships"
    ],
    featured: false,
    isPublished: true
  },
  {
    id: "mauryan-empire",
    title: "MAURYAN EMPIRE",
    slug: "mauryan-empire",
    excerpt: "An extraordinary chapter in Indian history begins with a man who defied all social norms — Chandragupta Maurya, the founder of the first Pan-Indian Empire.",
    content: `
      <div class="article-content">
        <p>
          An extraordinary chapter in Indian history begins with a man who defied all social norms — a man born a Shudra, dismissed by Brahmanical texts as no more than a servant. And yet, he rose to become the founder of the first Pan-Indian Empire — the mighty Mauryan Empire. This legendary figure was none other than Chandragupta Maurya, a warrior-king whose name echoes through the corridors of time.
        </p>
        <p>
          The Mauryan Empire, with its heart in Magadha, stretched across the Indian subcontinent and even touched parts of modern-day Iran. But this was not a journey he took alone. At his side was a mind as brilliant as his own courage — the great Acharya Chanakya, also known as Vishnugupta or Kautilya. Without Chanakya's foresight, intellect, and undying resolve, the Mauryan dream might never have become a reality.
        </p>
        <p>
          Before this golden era, India was under the rule of the Nanda dynasty, led by the arrogant and self-indulgent Dhana Nanda. It was during this time that Chanakya, seeking support against the advancing Alexander the Great, was insulted by the Nanda court. Humiliated but unbroken, he took an oath — to bring down the Nanda Empire.
        </p>
        <p>
          As destiny would have it, on his travels Chanakya met a young Chandragupta. What others saw as a common boy, Chanakya saw as a future king. With that one meeting, history began to change course. Meanwhile, Alexander died in Babylon, removing one of the major threats to Indian sovereignty.
        </p>
        <p>
          Together, Chanakya and Chandragupta began their mission. They started by conquering the outer territories of the Nanda Empire, slowly tightening their grip until they finally laid siege to Pataliputra, the magnificent capital. Dhana Nanda was defeated. While some say he was exiled, others believe he met a harsher end. Regardless, the Nanda rule came to an end.
        </p>
        <p>
          With the foundation laid, Chandragupta expanded westward. In 305 BCE, he launched campaigns to gain control of the Indus Valley and northwestern India, confronting Seleucus I Nicator — one of Alexander's generals. After fierce resistance, Seleucus was defeated and pushed back into Afghanistan's mountainous terrain.
        </p>
        <p>
          The empire continued to grow under Chandragupta's son, Bindusara, who expanded it further south into present-day Karnataka. But it was under Ashoka the Great, Bindusara's son, that the Mauryan Empire reached its cultural and territorial peak. His conquest of Kalinga marked a turning point — a brutal war followed by a transformation into a Buddhist emperor devoted to peace and dharma.
        </p>
        <p>
          In my eyes, Chanakya was the soul behind this empire's rise. A visionary who wasn't just a teacher, but a master of politics, economics, and war strategy — truly a Renaissance man in every sense. His guidance gave Chandragupta the strength and strategy to unite India.
        </p>
        <p>
          Other pillars of the Mauryan success included a centralized administration, efficient provincial division, well-planned trade routes (both land and river), and a powerful standing army. Most importantly, it was led by rulers of exceptional caliber.
        </p>
        <p>
          The Mauryan Empire was not just the first to unify India — it was the beginning of a new chapter in governance, strategy, and Indian identity. A legacy that still inspires.
        </p>
      </div>
    `,
    image: "/mauryan.jpeg",
    author: authors.find(a => a.username === "ansesveri-laxmi")!,
    category: "History",
    date: "2025-07-19",
    readTime: "7 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: [
      "Mauryan Empire",
      "Indian History",
      "Chandragupta Maurya",
      "Chanakya",
      "Ashoka",
      "Ancient India",
      "Empire",
      "Magadha"
    ],
    featured: false,
    isPublished: true
  },
  {
    id: "burnout-before-22-mental-health-crisis-indian-college-students",
    title: "Burnout Before 22: The Hidden Mental Health Crisis Among Indian College Students",
    slug: "burnout-before-22-mental-health-crisis-indian-college-students",
    excerpt: "A deeply personal exploration of the mental health crisis affecting Indian college students, examining the systemic pressures that lead to burnout before graduation.",
    content: `
      <div class="article-content">
        <p>
          I am a 20-year-old, second-year student, and I am swimming in circles in a ruthless ocean of crashing deadlines, expectations, and self-doubt. My days blur into nights of panic-driven overwork, vacant-eyed lectures, skipped meals, and the gnawing fear that I'm slipping into failure. And I know that I am not the only one. In India, one silent storm is raging. The college students are drowning in pressure before even getting their degrees.
        </p>

        <h2 class="section-heading">A burnt-out landscape</h2>
        
        <p>
          The current statistics are grim. According to a Wiley survey, 58% of the college students in India are reporting cases of burnout, with 59% of them struggling with anxiety and 43% reporting cases of depression. There is no surprise that mental health issues of young adults are so prevalent these days. According to students, ruthless academic pressure and unhealthy competition are big factors.
        </p>

        <p>
          In a world-based survey by Wi-Fi Talents, conducted in June of 2025, there were almost 60 percent of students reported emotional fatigue, and about 45 percent claimed that there is a negative impact on performance.
        </p>

        <p>
          Sixty percent of students in Kerala have symptoms of depression, which acts as a reminder that it is not just burnout but is also causing more psychological wear and tear. There is distress that flows upstream: young people (15-24 years) account for 35% of all suicidal deaths in India, and in 2021 alone, 13000 suicidal deaths were reported among students. Every hour, on average, 21 students commit suicide in India.
        </p>

        <p>
          The burnout rate in medical students reaches up to 75%.
        </p>

        <p>
          Throughout my educational journey, I have witnessed a disheartening transformation in many of my peers. Some, unable to withstand the mounting pressures and lack of support, dropped out along the way, their potential left unrealized. Others, who once brimmed with creativity, curiosity, and innovative ideas, gradually lost their spark, becoming passive consumers of digital content rather than active contributors to meaningful progress. It has been painful to observe these bright minds, once full of promise, become disengaged and disconnected—more like mechanical extensions of their devices than the vibrant, thinking individuals they once were. This experience has not only opened my eyes to the systemic challenges within our educational and technological environments but also deepened my resolve to remain intentional, creative, and fully human in an increasingly automated world.
        </p>

        <h2 class="section-heading">What is the reason behind it?</h2>
        
        <p>
          Several closely connected reasons are in place:
        </p>

        <p>
          <strong>Cut-throat rivalry & inflexible systems:</strong> The Indian system is constructed based on entrance examinations and scores: IITs, NEET, CUET, UPSC, CLAT, the wheel does not stop either. There is no room for relaxing or being creative when it comes to rote learning.
        </p>

        <p>
          <strong>The pressure of society and parents:</strong> Family glory, and at the same time, self-worth, depends on academic success, and failure is never an option. One counsellor in Bhopal added: "Students in this country believe so much in grades that they think that their self-worth depends on their grades."
        </p>

        <p>
          <strong>Absence of mental Health services:</strong> Not every college provides satisfactory counselling. Support by peers is becoming a protective factor, but there is weak institutional support. It is positive to see programs such as Kerala Jeevani, which have reached 60,000 students since 2019, alas it was just a rare case.
        </p>

        <p>
          <strong>Pandemic after‑effects:</strong> The isolation caused by COVID‑19 increased anxiety and depression. 75 percent of the participants reported moderate-to-severe depression, and half of them reported moderate anxiety during the waves. This pressure has not been eliminated; an adaptation of it has become the norm.
        </p>

        <h2 class="section-heading">The lived reality: the story of me</h2>
        
        <p>
          I am doing lectures, exams, assignments, internships, and watching my mind unravel. I get up exhausted, nervous. I skip dates with friends due to my inability to socialize. I wonder what I am worth when the result is more painful than the task itself. Sleep? Forget it. I get into a downward spiral every time I hear a notification.
        </p>

        <p>
          "Such internal suffering is hard to detect and is left unexplained", says the psychiatrist Jairanjan Ram, because we have been cultured to cover up mental illness and label its academic normalcy. That is painful, since it is our norm at present. I read messages from my friends who tell me: I used to enjoy art, but now I feel like even doodling is a burden.
        </p>

        <p>
          In this single quote, it's described accurately, burnout is not just being tired, but it is fatigue to the soul.
        </p>

        <h2 class="section-heading">So, what are the ways to make it better for us?</h2>
        
        <p>
          <strong>Make mental health normal in school.</strong> The discussions on emotions need to take place in classrooms. The Jeevani model of Kerala demonstrates the effectiveness of on-campus counselling and how this can reach thousands of people.
        </p>

        <p>
          <strong>Educate teachers to identify pre-burnout.</strong> Up to 25 percent of symptoms can be decreased thanks to simple training.
        </p>

        <p>
          <strong>Foster peer support & resilience.</strong> WifiTalents discovered that peer-led mentorship has the potential to reduce burnout by ~40%. An hour of chatting with friends in a so-called rant call was the key to my survival in the last year of my life.
        </p>

        <p>
          The rest of the mind—its creativity, emotional intelligence, and critical thinking—should not be neglected or sacrificed at the altar of exam milestones. These aspects should be actively nurtured and encouraged alongside academic achievement, as they are essential to developing well-rounded, capable individuals.
        </p>

        <h2 class="section-heading">An inside storm call</h2>
        
        <p>
          On behalf of a burned‑out 20-year-old, here scribbled out of the trenches:
        </p>

        <p>
          "I want to know that I am more than just my CGPA. That my breakdowns are not that I have failed. Restarting isn't wrong."
        </p>

        <p>
          It is not a personal failure to burn out below the age of 22; it is a social failure. We are losing a whole generation, not because they are not talented or hardworking, but because we have designed a system that exploits them as sources of production, not of happiness.
        </p>

        <p>
          Unless education is reconsidered and thought about with sensitivity, compassion, and adaptability, these numbers do not remain statistics alone. They are crushed lives, dreams on hold, and creativity dampened.
        </p>

        <p>
          It is not a charity to build mental-health-aware campuses and flexible learning models, but justice. No one should feel that their mind is buckling under expectations.
        </p>
      </div>
    `,
    image: "/burnout.jpeg",
    author: authors.find(a => a.username === "hetal-kothari")!,
    category: "features",
    date: "2025-07-20",
    readTime: "12 min read",
    views: 0,
    likes: 0,
    comments: [],
    tags: [
      "Mental Health",
      "Student Life",
      "Burnout",
      "Education",
      "College",
      "India",
      "Depression",
      "Anxiety",
      "Academic Pressure"
    ],
    featured: true,
    isPublished: true
  },
  {
  id: "laal-lipstick-by-boroline",
  title: "Laal Lipstick by Boroline",
  slug: "laal-lipstick-by-boroline",
  excerpt: "A critical look at the viral fictional ad for 'Laal Lipstick' by Boroline, and what it says about empowerment, public health, and the dangers of romanticizing poverty.",
  content: `
    <div class="article-content">
      <p>
        A lipstick with iron infused in it, marketed as an initiative for women in backward areas to fulfill their iron deficiencies in places because there are no dispensaries or health care facilities.
      </p>
      <p>
        Although Boroline has not launched a “Laal Lipstick” that provides for iron deficiency in women. This is a fictional advertisement circulating online for a “Laal Lipstick” by Boroline. But it’s not a real product.
      </p>
      <h2 class="section-heading">Some points to discuss if it were a product:</h2>
      <ul>
        <li>Okay, but why not address the root of the problem?</li>
        <li>Why not fight for what these women are truly going through?</li>
        <li>Why not try to change the conditions they’re in?</li>
      </ul>
      <p>
        By providing that lipstick, you’re not solving the core issue. You’re packaging survival as empowerment. You’re fabricating a version of their freedom.
      </p>
      <p>
        It implies they belong in those underserved areas and should be content with the bare minimum, like a lipstick that doubles as a supplement.
      </p>
      <p>
        It's like saying, "Oh, you’ve got a problem with your cage?” “Let me just put you in a golden one.”<br/>
        Really? Does that solve the problem?
      </p>
      <ul>
        <li>Why not open hospitals or dispensaries to treat iron deficiencies at the source?</li>
        <li>Why not fight for their right to proper healthcare instead?</li>
        <li>Is this really empowering, or is it just cheaper and easier than building a clinic?</li>
        <li>Why not challenge the conditions that force women to rely on a lipstick to get basic nutrition?</li>
        <li>Why not aim to change the mindset, not just of the male-dominated community, but also of the women, many of whom have internalized oppression?</li>
        <li>And why are we romanticizing women being “grateful” for the bare minimum?</li>
      </ul>
      <p>
        Lipstick with iron might help for now.<br/>
        But if this is where we stop, we’ve failed them.<br/>
        Empowerment shouldn’t be a marketing tool.<br/>
        It should be a movement.
      </p>
      <p>
        Systemic change is what women really need, not token gestures.<br/>
        Iron deficiencies are a public health issue, not a marketing opportunity. Romanticizing poverty or struggle is dangerous because it lowers the bar for what’s considered “empowerment”.
      </p>
      <p>
        Empowerment should be transformational, not transactional.<br/>
        As in: “Here’s a lipstick. Now you’re independent.”
      </p>
      <p>
        I do understand: if Laal Lipstick is a “band-aid solution” for now, it might be a necessary one in the absence of structural support.<br/>
        If there are no hospitals nearby, if clinics are miles away, if women aren’t allowed to travel without permission, then embedding iron in something culturally acceptable and already used (lipstick) is a clever short-term intervention.<br/>
        <strong>BUT. BUT.</strong>
      </p>
      <p>
        Should we stop at lipstick?<br/>
        <strong>Absolutely not.</strong>
      </p>
      <h2 class="section-heading">Further steps to take would be:</h2>
      <ul>
        <li>Policy reform to improve rural healthcare</li>
        <li>Community-led education for both men and women on gender equality</li>
        <li>Infrastructure: schools, clinics, transport, and economic opportunity</li>
        <li>Representation: letting women from these areas speak for themselves</li>
      </ul>
      <p>
        See, the right question isn’t: “Is this a good idea or a bad one?”<br/>
        It’s: “Is this the first step, or is this where they stop?”
      </p>
      <p>
        If the company stops at lipstick and uses it for self-promotion. Yes, call it out.<br/>
        But if it’s part of a larger commitment to health equity, education, and dignity, it could be a stepping stone.<br/>
        So let’s demand both: short-term ingenuity and long-term justice.<br/>
        That’s what feminism and humanitarianism both require.
      </p>
    </div>
  `,
  image: "/laallipstick.jpeg",
  author: {
    id: "guest-shivanshi",
    name: "Shivanshi",
    username: "guest-shivanshi",
    image: "/placeholder.svg"
  },
  category: "features",
  date: "2025-07-20",
  readTime: "7 min read",
  views: 0,
  likes: 0,
  comments: [],
  tags: [
    "Feminism",
    "Empowerment",
    "Public Health",
    "Iron Deficiency",
    "Women",
    "Rural India",
    "Marketing",
    "Poverty"
  ],
  featured: false,
  isPublished: true
},
{
  id: "lucknow-a-symphony-of-tehzeeb-taste-and-timelessness",
  title: "Lucknow – A Symphony of Tehzeeb, Taste, and Timelessness",
  slug: "lucknow-a-symphony-of-tehzeeb-taste-and-timelessness",
  excerpt: "Lucknow, the capital of Uttar Pradesh, is not a dot on the map of India - it is a city in which history lies within the walls, where each nook is filled with tales, and tradition merges with modernity in perfect balance.",
  content: `
    <div class="article-content">
      <p>Lucknow, the capital of Uttar Pradesh, is not a dot on the map of India - it is a city in which history lies within the walls, where each nook is filled with tales, and tradition merges with modernity in perfect balance. Nicknamed the City of Nawabs, Lucknow is renowned for its tehzeeb (manners), delectable cuisine, exquisite architecture, and a history that continues to define its destiny. But beneath the facade of glitz,kebabs, and palaces, a city that has watched empires go up in smoke and down, revolutions and verse, suffering and loveliness.</p>
      <h2 class="section-heading">The Mythological Origins: Lakshman to Lucknow</h2>
      <p>Lucknow's history begins in mythology. It is believed that the city was initially named Lakshmanpur, after Lakshmana, Rama's brother in the Ramayana epic. In one legend, Lakshman constructed a fort on the bank of the Gomti River and the place became the hub of what later grew to be future Lucknow. Historians argue about the precise beginning, but the city's association with the Ramayana lends it an aura of spirituality and cultural heritage still cherished today.</p>
      <h2 class="section-heading">The Rise of the Nawabs and the Golden Age of Awadh</h2>
      <p>The real emergence of Lucknow began in the early 18th century when the Mughal Empire began losing control over its vast territories. Saadat Khan was made the first Nawab of Awadh by the Mughal emperor in 1722. Although initially settled in Faizabad, the Nawabs shifted their capital to Lucknow in 1775 under the reign of Asaf-ud-Daula.</p>
      <p>This was the start of a golden period. Nawabs were not politicians alone - they were patrons of art, poetry, music, dance, and architecture. They made Lucknow a center for culture with Urdu language, Kathak dance, and Mughlai-Awadhi cuisine reaching great heights.</p>
      <p>Majestic buildings like the Bara Imambara, Chota Imambara, and Rumi Darwaza were built during this period, which best represented Indo-Islamic architecture. They were not only monuments, they were symbols of power, taste, and communal harmony. The Nawabi culture was characterized by a great appreciation for diversity where Hindus and Muslims collaborated  in administration, arts, and literature.</p>
      <h2 class="section-heading">Culture and Cuisine: The Soul of the City</h2>
      <p>The Nawabs were refined in tastes, and this had influenced every aspect of  life in Lucknow, right from the way people spoke, down to their food and dressing. The stamp of Lucknawi Tehzeeb, a sign of courtesy, courtliness, and hospitality, acquired the status of becoming part of one's being. Even now, the old-timers in the city instruct the youngsters to imbibe the merit of speaking in "aap" rather than "tum" and of greeting with a bow.</p>
      <p>The culinary culture of Lucknow was mythical in proportion. Preparation of galawati kebab, nihari, sheermal, and the biryanis was an art. The royal cooks, or rakabdars, would try to outdo one another to please the Nawabs with something innovative. Lucknow also popularized chikan embroidery, the internationally renowned light needlework precious and well-worn all over the world.</p>
      <p>Lucknow is equally world-renowned for its irresistible food that unites royal opulence with street simplicity. Lucknow  is known as the land of Awadhi cuisine, which comprises slow-cooked fare rich with perfume and flavor. Right from the melt-in-the-mouth Tunday ke Kebab to the perfumed Lucknawi biryani, each culinary item speaks volumes of a heritage of patience, craftsmanship, and luxury. Kulcha-Nihari, roomali roti, sheermal, and mutton korma are some of the well-known local delicacies. Even sweets such as makhan malai and kesar phirni have serpentine queues of foodies from across India and the world. Each meal in Lucknow is as much a paean to its golden past.</p>
      <h2 class="section-heading">1857: The Revolt and the End of an Era</h2>
      <p>Lucknow was a turning point of Indian history during the initial rebellion in the First War of Independence in 1857. The British East India Company's authority was being challenged across the whole nation, and Lucknow was one of the core centers of revolt.</p>
      <p>The Residency, where the British officials resided, was besieged for several months by Indian rebels. One of the bravest women of the time was Begum Hazrat Mahal, wife of deposed Nawab Wajid Ali Shah. She did not yield to British rule and led the resistance in Lucknow. Although the rebellion was unsuccessful, it ended the Nawabi rule and commenced direct British rule over Awadh.</p>
      <h2 class="section-heading">British Rule and the New Face of Lucknow</h2>
      <p>Following the suppression of the rebellion in 1857, the British established full control over Lucknow and turned it into a center of central administration and army. The political stature of the city shifted but not its cultural vibrancy. As the city saw the emergence of British structures and institutions, such as La Martinière College and the University of Lucknow — art, literature, and music continued to fuel the city's passion.</p>
      <p>Lucknow continued to be a hub for freedom fighters, authors, and reformers. Its cultural heritage of legendary Urdu authors such as Ismat Chughtai and Josh Malihabadi contributed to its intellectual richness. India's freedom movement also gained a robust voice through the educated middle class of the city.</p>
      <h2 class="section-heading">Lucknow Today: Where the Past Still Lives</h2>
      <p>Now, Lucknow is a modern city with shopping complexes, IT parks, colleges, and rising infrastructure. But it has not lost its soul. Chowk and Aminabad bazaars still sell old attars (perfumes), chikan wear, and hand-made jewelry. The Bara Imambara still remains popular among tourists, and mushairas (poetic sessions) and mehfil-e-ghazals are still well-attended by locals.</p>
      <p>Lucknow is also a festival city —Diwali, Eid, Holi. Its composite culture (Ganga-Jamuni tehzeeb), in which Hindu and Muslim cultures commingle so seamlessly, is perhaps its greatest gift to India.</p>
      <h2 class="section-heading">Conclusion: A City That Never Forgets</h2>
      <p>Lucknow is not a destination, it's a state of mind. A state of mind of hospitality, of elegance, of collective heritage, and strength. From the majestic courts of Nawabs to the battle grounds of 1857, from the couplets of Mir and Ghalib to the bustling streets of Hazratganj, the city clings to its character with pride.</p>
      <p>It reminds us of the fact that history is not all kings and battles - it's also about culture, generosity, and the quotidian loveliness of life. Lucknow might have evolved over time, but it never lost its heart.</p>
    </div>
  `,
  image: "/omygodi.jpeg",
  author: {
    id: "9",
    name: "Aliya Imam",
    username: "aliya-imam",
    image: "/Aliya.jpeg"
  },
  category: "City",
  date: "2025-07-21",
  readTime: "8 min read",
  views: 0,
  likes: 0,
  comments: [],
  tags: [
    "Lucknow",
    "History",
    "Culture",
    "Cuisine",
    "Awadh",
    "Nawabs",
    "Tehzeeb"
  ],
  featured: true,
  isPublished: true
},
{
  id: "transparency-accountability-good-governance",
  title: "Transparency, Accountability, and Good Governance.",
  slug: "transparency-accountability-good-governance",
  excerpt: "Transparency and accountability are integral components of good governance, essential for holistic development and democratic integrity.",
  content: `
    <div class="article-content">
      <p><em>"We cannot be mere consumers of good governance, we must be participants; we must be co-creators." - Rohini Nilekani.</em></p>
      <p>Rohini Nilekani’s words emphasize the need for citizens not just to expect good governance but to actively shape it. This shift from passive recipients to proactive participants lies at the heart of democratic success.</p>
      <p>Good governance can be referred to as an effective and efficient process of decision-making and the process by which decisions are implemented (or not implemented), keeping the betterment of citizens as the top priority. The concept of good governance emerged in the 1990s due to post–Cold War political shifts, the failures of both socialism and unchecked capitalism and the influence of international institutions. It ensures participation, promotes equity and inclusiveness, upholds the rule of law, and above all, promotes transparency and accountability.</p>
      <h2 class="section-heading">Transparency</h2>
      <p>It refers to opening up the functioning of the government and its decisions to citizens. It enables citizens to obtain information that affects their lives and discourages corruption.</p>
      <p>The Right to Information (RTI) Act of 2005, has been a game-changer in India's pursuit of transparency. E-governance initiatives like UMANG (Unified Mobile Application for New-age Governance), Passport Seva, Direct Benefit Transfer (DBT), and DigiLocker have made processes more accessible and efficient. Portals like MyGov, RTI Online, and e-Courts have also improved transparency.</p>
      <p>While India's rank in Transparency International's Global Corruption Barometer – Asia 2020 surveys continues to reflect challenges, it has shown a considerable decline, indicating slow but positive improvement, particularly in urban areas and digitalized services.</p>
      <p>However, challenges remain in rural areas and state-level services. In many cases, people no longer report bribery, especially if it is normalized or seen as the only way to get work done—so actual corruption may be underreported.</p>
      <h2 class="section-heading">Accountability</h2>
      <p>It ensures that public officials and agencies are answerable for their actions and decisions. It helps to enforce responsibility and reduce abuse of power.</p>
      <ul>
        <li><strong>The Citizen’s Charter:</strong> outlines the rights of citizens and the service standards they can expect from public offices.</li>
        <li><strong>The Comptroller and Auditor General (CAG):</strong> audits government expenditures and reports to Parliament. CAG reports have exposed several financial irregularities, including the 2G spectrum scam and coal block allocations.</li>
        <li><strong>The Lokpal and Lokayuktas Act, 2013:</strong> aims to inquire into allegations of corruption against certain public functionaries and related matters. However, the Lokpal has been criticized for its limited functioning and delayed appointments.</li>
        <li><strong>The Whistleblowers Protection Act of 2015:</strong> aims at safeguarding individuals who expose corruption and wrongdoing in public institutions from retaliation.</li>
      </ul>
      <h2 class="section-heading">Challenges and the way forward</h2>
      <p>Even with considerable progress, India faces several challenges:</p>
      <ul>
        <li><strong>Reluctance to adapt:</strong> A bureaucratic mindset, red-tapism, and a lack of political will can hold back reforms aimed at greater openness.</li>
        <li><strong>Digital divide:</strong> Unequal access to technology and digital literacy can limit the reach and effectiveness of e-governance initiatives, especially in rural and marginalized areas.</li>
        <li><strong>Implementation tools:</strong> Laws and regulations aimed at promoting transparency and accountability sometimes suffer from prolonged judicial processes.</li>
        <li><strong>Protection of whistleblowers:</strong> Additionally, whistleblowers often face threats, intimidation, and even death. According to the Commonwealth Human Rights Initiative (CHRI), the deaths of 74 activists who used the Right to Information (RTI) Act have been documented since 2005.</li>
        <li><strong>Quality of information:</strong> Despite RTI, the quality and timeliness of information provided by public authorities are sometimes insufficient or vague.</li>
      </ul>
      <p>The path forward requires a multi-faceted approach:</p>
      <ul>
        <li><strong>Strengthening institutions:</strong> Enhancing the autonomy and resources of oversight bodies like the Lokpal, Lokayuktas, and the Election Commission.</li>
        <li><strong>Capacity building:</strong> Training government officials in ethical governance, data management, and responsiveness.</li>
        <li><strong>Promoting digital literacy:</strong> Bridging the digital divide to ensure equitable access to e-governance platforms.</li>
        <li><strong>Citizen empowerment:</strong> Conduct regular awareness campaigns to educate citizens about their rights and the mechanisms available for demanding transparency and accountability.</li>
        <li><strong>Collaborative governance:</strong> Fostering partnerships between the government, civil society organizations, and the private sector to make the most of shared expertise and resources.</li>
        <li><strong>Ethical leadership:</strong> Cultivating a culture of integrity and public service at all levels of governance.</li>
      </ul>
      <h2 class="section-heading">Conclusion</h2>
      <p>Transparency and accountability are integral components of good governance, essential for holistic development and democratic integrity. Though India has institutional and legal frameworks that promote these ideals, there remains a gap between policy and practice. Bridging this gap requires an informed, engaged, and active citizenry that actively participates in governance—through voting, public consultations, or monitoring government activities—to question decisions, demand answers, and expose corruption or inefficiencies.</p>
      <p>As India moves toward becoming a major global power and opens up more of the public sector to private participation, ensuring that governance remains inclusive, effective, and citizen-focused is not just important—it is vital to safeguard democracy in the 21st century.</p>
    </div>
  `,
  image: "/goodg.jpeg",
  author: {
    id: "14",
    name: "Trishla Chaudhary",
    username: "trishla-chaudhary",
    image: "/Trishla.jpeg"
  },
  category: "Op-ed",
  date: "2025-07-21",
  readTime: "7 min read",
  views: 0,
  likes: 0,
  comments: [],
  tags: [
    "Governance",
    "Transparency",
    "Accountability",
    "India",
    "Democracy",
    "Policy"
  ],
  featured: true,
  isPublished: true
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

