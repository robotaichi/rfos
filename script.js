const translations = {
    ja: {
        nav_concept: "構想と意義",
        nav_features: "特徴",
        nav_tech: "技術構成",
        nav_pub: "研究業績",
        hero_title: "孤独を「家族システム」で解決する。<br>次世代ロボットOS。",
        hero_subtitle: "LLMとROS 2による、自律分散型・擬似家族対話生成プラットフォーム。",
        btn_learn: "構想を知る",
        btn_github: "GitHubを見る",
        section_concept: "Concept & Significance",
        concept_head: "1対1から、N対1の「家族」へ。",
        concept_body: "「孤独」は、1日15本の喫煙に相当する健康リスクであることが報告されています。これまでのロボット研究は1対1（ユーザー対ロボット）の関係性が主でしたが、それでは「家族団欒の暖かさ」や「帰属感」を生み出すことは困難でした。<br><br><strong>Robot Family OS (RFOS)</strong> は、父親・母親・娘といった役割を持つ複数のロボットが互いに連携し、ユーザーを取り囲むエコシステムを構築します。ロボット同士が会話することで生まれる空気感が、一人暮らしの高齢者の孤独を根本から癒やします。",
        img_concept_placeholder: "家族エコシステムの概念図",
        section_features: "Key Features",
        feat_1_title: "役割を持つマルチエージェント",
        feat_1_desc: "各エージェントは「父親（厳格さ/冗談）」「母親（優しさ/調整）」「娘（無邪気/活発）」といったペルソナを持ち、GPT-4o-miniによって一貫した人格として振る舞います。",
        feat_2_title: "システム間対話生成",
        feat_2_desc: "ユーザーへの直接的な応答だけでなく、ロボット間での会話（夫婦喧嘩や団欒など）を生成。ユーザーは「家族の一員」として自然に会話に参加できます。",
        feat_3_title: "集中 vs 分散 制御",
        feat_3_desc: "全ての会話を統括する「集中型（Centralized）」と、各ロボットが自律的に発話する「分散型（Distributed）」の両アーキテクチャを実装し、比較検証を行っています。",
        section_tech: "Technology Stack",
        section_pub: "Selected Publications",
        section_profile: "Developer",
        my_name: "平野 太一",
        my_role: "博士後期課程 / ロボット研究者",
        my_bio: "筑波大学大学院 知能機能システム学位プログラム 博士後期課程。JST SPRING研究員。「ロボット家族による孤独感の解消」をテーマに、社会インフラとしてのロボットOSの研究開発を行う。機械加工技能士のバックグラウンドと、最新の生成AI技術を融合した構成論的アプローチが特徴。",
    },
    en: {
        nav_concept: "Concept",
        nav_features: "Features",
        nav_tech: "Technology",
        nav_pub: "Publications",
        hero_title: "Solving Loneliness with a Robot Family System.<br>Next-Gen Robot OS.",
        hero_subtitle: "Autonomous distributed pseudo-family dialogue platform powered by LLM and ROS 2.",
        btn_learn: "Learn Concept",
        btn_github: "View on GitHub",
        section_concept: "Concept & Significance",
        concept_head: "From 1-on-1 to N-on-1: A True Family.",
        concept_body: "Loneliness poses a health risk equivalent to smoking 15 cigarettes a day. Traditional 1-on-1 Human-Robot Interaction often fails to recreate the warmth and sense of belonging found in a family.<br><br><strong>Robot Family OS (RFOS)</strong> builds an ecosystem where multiple robots with specific roles (Father, Mother, Daughter) collaborate around the user. The atmosphere created by inter-robot communication fundamentally alleviates the loneliness of the elderly living alone.",
        img_concept_placeholder: "Concept Diagram",
        section_features: "Key Features",
        feat_1_title: "Multi-Agent with Roles",
        feat_1_desc: "Each agent maintains a consistent persona (e.g., Stern Father, Caring Mother, Innocent Daughter) powered by GPT-4o-mini.",
        feat_2_title: "Inter-Robot Dialogue",
        feat_2_desc: "Robots converse with each other, not just the user. This creates a 'social atmosphere' where the user feels safe and included as a family member.",
        feat_3_title: "Centralized vs. Distributed",
        feat_3_desc: "Implemented and evaluated both 'Centralized' (master controls scenarios) and 'Distributed' (autonomous agents) architectures to optimize interaction.",
        section_tech: "Technology Stack",
        section_pub: "Selected Publications",
        section_profile: "Developer",
        my_name: "Taichi Hirano",
        my_role: "Ph.D. Candidate / Robotics Researcher",
        my_bio: "Ph.D. candidate at the University of Tsukuba, Intelligent Interaction Technologies. Researching 'Robot Family OS' as social infrastructure to alleviate loneliness. Combines a background in mechanical machining with constructive approaches using the latest Generative AI.",
    }
};

let currentLang = 'ja';

const langSwitchBtn = document.getElementById('lang-switch');
langSwitchBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ja' ? 'en' : 'ja';
    updateContent();
});

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.innerHTML = translations[currentLang][key];
        }
    });
    langSwitchBtn.textContent = currentLang === 'ja' ? 'English' : '日本語';
    document.documentElement.lang = currentLang;
}
// --- Background Slider ---
const heroImages = [
    'images/grandfather.jpg',
    'images/grandmother.jpg'
];
let currentImageIndex = 0;
const bgLayers = [
    document.getElementById('hero-bg-1'),
    document.getElementById('hero-bg-2')
];
let activeLayerIndex = 0;

function updateHeroBackground() {
    const nextLayerIndex = (activeLayerIndex + 1) % 2;
    const activeLayer = bgLayers[activeLayerIndex];
    const nextLayer = bgLayers[nextLayerIndex];

    // 次の画像を取得
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
    const nextImageUrl = heroImages[currentImageIndex];

    // 次のレイヤーを準備（アニメーションなしで即座に右側へ移動）
    nextLayer.classList.add('no-transition');
    nextLayer.style.backgroundImage = `url('${nextImageUrl}')`;
    nextLayer.classList.remove('exit');
    nextLayer.classList.add('next');

    // 強制的にリフローさせてアニメーションを適用可能にする
    nextLayer.offsetWidth;
    nextLayer.classList.remove('no-transition');

    // アニメーション開始 (次のレイヤーが右から中央へ、現在のレイヤーが中央から左へ)
    activeLayer.classList.remove('active');
    activeLayer.classList.add('exit');

    nextLayer.classList.remove('next');
    nextLayer.classList.add('active');

    activeLayerIndex = nextLayerIndex;
}

// Initial background setting
bgLayers[0].style.backgroundImage = `url('${heroImages[0]}')`;

// Start rotation cycle
setInterval(updateHeroBackground, 5000);
