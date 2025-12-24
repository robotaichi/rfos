const translations = {
    ja: {
        nav_about: "研究概要",
        nav_research: "技術詳細",
        nav_profile: "プロフィール",
        hero_title: "家族のようなロボットが、<br>孤独を癒やす未来へ。",
        hero_subtitle: "高齢者の孤独感を軽減するための、擬似家族ロボットシステムの構築と実証。",
        btn_more: "詳しく見る",
        section_concept: "Concept",
        concept_head: "ロボット家族という新しい形",
        concept_body: "単なる機械ではなく、父親・母親・娘といった「役割」を持ったロボットたちが連携し、ユーザーを取り囲むエコシステムを提案します。一人暮らしの高齢者に寄り添い、社会的な繋がりを疑似的に再現する新しいアプローチです。",
        section_research: "Research",
        res_topic1_title: "役割分担アルゴリズム",
        res_topic1_desc: "複数のロボットが自律的に会話の役割（ボケ、ツッコミ、励まし）を分担し、自然な多人数会話を生成するシステム。",
        res_topic2_title: "感情推定と介入",
        res_topic2_desc: "ユーザーの微細な表情や声色から孤独度を推定し、最適なタイミングで「家族」として介入するAIモデル。",
        res_topic3_title: "社会的受容性",
        res_topic3_desc: "実際の高齢者施設での長期実証実験を通じた、人とロボットの共生に関する定量的・定性的評価。",
        section_profile: "Profile",
        my_name: "あなたの名前",
        my_role: "博士後期課程 / ロボット研究者",
        my_bio: "博士課程において「ロボット家族」による孤独感解消の研究に従事。機械加工からAIモデル構築までを一貫して行う。日本機械学会畠山賞受賞。次世代の社会インフラとしてのロボット共生社会を目指す。",
    },
    en: {
        nav_about: "Concept",
        nav_research: "Technology",
        nav_profile: "Profile",
        hero_title: "Robot Families:<br>Healing Loneliness in the Future.",
        hero_subtitle: "Building and verifying pseudo-family robot systems to alleviate loneliness in the elderly.",
        btn_more: "Learn More",
        section_concept: "Concept",
        concept_head: "A New Form of Family: Robot Family",
        concept_body: "We propose an ecosystem where robots with specific roles—father, mother, daughter—collaborate to surround the user. This is a novel approach to virtually recreate social connections and support elderly people living alone.",
        section_research: "Research",
        res_topic1_title: "Role Allocation Algorithm",
        res_topic1_desc: "A system where multiple robots autonomously divide conversational roles (joker, straight man, encourager) to generate natural multi-party conversations.",
        res_topic2_title: "Emotion Estimation & Intervention",
        res_topic2_desc: "AI models that estimate loneliness from micro-expressions and voice tones to intervene as 'family' at the optimal timing.",
        res_topic3_title: "Social Acceptance",
        res_topic3_desc: "Quantitative and qualitative evaluation of human-robot symbiosis through long-term demonstration experiments in elderly care facilities.",
        section_profile: "Profile",
        my_name: "Your Name",
        my_role: "Ph.D. Candidate / Robotics Researcher",
        my_bio: "Engaged in research on alleviating loneliness through 'Robot Families'. Handles everything from mechanical machining to AI model construction. Recipient of the JSME Hatakeyama Award. Aiming for a symbiotic society with robots as next-generation infrastructure.",
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
            // HTMLタグを含める場合はinnerHTMLを使う（改行タグなどのため）
            element.innerHTML = translations[currentLang][key];
        }
    });
    // ボタンのテキスト更新
    langSwitchBtn.textContent = currentLang === 'ja' ? 'English' : '日本語';
    // ページタイトルの言語設定
    document.documentElement.lang = currentLang;
}
