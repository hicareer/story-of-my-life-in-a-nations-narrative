// --- 1. 질문 데이터 정의 ---
const questions = [
    {
        question: "새로운 일을 시작할 때<br>나는 주로 어떤 모습인가?",
        A: "철저한 계획을 세우고 그에 따라 움직인다.",
        B: "일단 시작하고 상황에 따라 유연하게 대응한다."
    },
    {
        question: "나를 성장시키는 방식은<br>무엇에 가깝다고 생각하는가?",
        A: "꾸준한 루틴과 반복 과정, 체계적인 학습으로 성장한다.",
        B: "다양한 경험과 도전을 통해 새로운 것을 배우며 성장한다."
    },
    {
        question: "중요한 결정을 내릴 때<br>나는 어떤 방식을 선호하는가?",
        A: "여러 가능성을 분석하고, 장단점을 따져 신중하게 결정한다.",
        B: "직감을 따르거나 흐름에 몸을 맡기며 결정한다."
    },
    {
        question: "나의 일상은 어떤 패턴을 띠는가?",
        A: "정해진 틀과 규칙 안에서 안정적으로 유지된다.",
        B: "변화를 즐기고, 즉흥적인 요소를 포함한다."
    },
    {
        question: "성취감을 가장 크게<br>느끼는 순간은 언제인가?",
        A: "나의 아이디어, 영향력이 외부로 확장되어 변화를 만들 때.",
        B: "내면의 균형을 찾고, 스스로 깊이 있는 성장을 이뤘다고 느낄 때."
    },
    {
        question: "다른 사람과 함께하는 활동에서<br>나는 어떤 역할에 더 끌리는가?",
        A: "팀을 이끌거나 새로운 방향을 제시하는 리더 역할을 선호한다.",
        B: "조율하고 지지하며 팀 내 안정과 깊이를 더하는 역할을 선호한다."
    },
    {
        question: "새로운 분야에 도전할 때<br>나는 무엇에 더 흥미를 느끼는가?",
        A: "내 한계를 넘어서고, 새로운 가능성을 넓히는 것에 흥미를 느낀다.",
        B: "익숙해질 시간을 갖고, 내 것으로 만드는 과정에 집중한다."
    },
    {
        question: "나의 관심사는 주로<br>어떤 방향으로 발전하는가?",
        A: "다양한 분야로 넓혀가며 폭넓은 지식과 경험을 쌓는다.",
        B: "한 분야를 깊이 파고들어 전문성을 심화하는 데 집중한다."
    },
    {
        question: "예상치 못한 문제가 발생했을 때<br>나는 어떻게 대응하는가?",
        A: "가장 현실적인 해결 방안을 찾고, 즉시 실행에 옮긴다.",
        B: "문제의 본질을 이해하고, 감정적인 회복과 재정비를 우선한다."
    },
    {
        question: "나를 다시 일어서게 하는<br>근본적인 힘은 무엇인가?",
        A: "명확한 시스템, 루틴, 구체적인 방법론",
        B: "나를 지지하는 신념, 따뜻한 기억, 공감"
    },
    {
        question: "위기 상황에서 누군가<br>조언을 해준다면<br>무엇을 더 선호하는가?",
        A: "구체적인 해결책이나 행동 지침을 듣고 싶다.",
        B: "나의 감정을 이해하고 공감해주는 따뜻한 위로를 원한다."
    },
    {
        question: "압박감 속에서 중요한 과제를<br>수행할 때 나의 태도는?",
        A: "상황을 분석하고 전략을 세워 빠르게 결과를 도출하려 한다.",
        B: "흔들리지 않는 마음을 다잡고, 내면의 힘으로 이겨내려 한다."
    }
];

// --- 2. 결과 데이터 정의 (굵게 표시 수정 및 국가 정보 추가 완료) ---
const results = {
    "수메르": {
        period: "BC 4500년 ~ BC 1900년 경",
        continent: "아시아",
        motto: "문명의 씨앗을 뿌리는 선구자",
        keywords: ["창조", "기원", "혁신", "기록", "시스템", "개척"],
        description: "인류 최초의 문명인 수메르가 쐐기 문자, 도시, 법전 등 혁신적인 시스템을 창조하며 문명의 기틀을 다졌듯이, 당신은 <strong>새로운 시작을 두려워하지 않는 개척자</strong>입니다. 견고한 의지와 논리적인 사고로 세상에 없던 길을 만들고, 탁월한 추진력으로 복잡한 문제 속에서 자신만의 해결책을 찾아냅니다. 당신의 삶은 익숙한 길을 따르기보다 <strong>새로운 가능성을 탐색하고, 혁신적인 아이디어로 주변에 영감</strong>을 줍니다. 때로는 고독할 수 있지만, 당신이 놓는 한 걸음 한 걸음이 미래의 견고한 기반이 됩니다."
    },
    "아케메네스 페르시아 제국": {
        period: "BC 550년 ~ BC 330년 경",
        continent: "아시아",
        motto: "다양성을 품고 조화를 이루는 리더",
        keywords: ["관용", "통합", "제국", "다양성", "조화", "소통"],
        description: "고대 세계 최대의 제국이었던 아케메네스 페르시아가 광대한 영토 안의 다양한 문화를 존중하고 포용하며 통합적인 행정 체계를 구축했듯이, 당신은 <strong>다름을 인정하고 그것을 하나로 아우르는 데 탁월한 능력</strong>을 지녔습니다. 넓은 시야와 유연한 사고로 여러 사람의 의견을 경청하고, 각자의 강점을 끌어내어 <strong>하나의 거대한 목표를 향해 나아갑니다.</strong> 당신의 관용적인 태도와 균형 잡힌 리더십은 갈등을 해소하고, 모두가 함께 번영할 수 있는 길을 제시합니다. 당신의 삶은 조화와 소통의 연속입니다."
    },
    "카르타고": {
        period: "BC 814년 ~ BC 146년 경",
        continent: "아프리카",
        motto: "바다를 건너 기회를 잡는 실용주의자",
        keywords: ["상업", "해상", "교역", "실용", "개척", "독립"],
        description: "지중해 무역을 장악하며 번성했던 해상 강국 카르타고처럼, 당신은 <strong>본능적으로 기회를 포착하고, 현실적인 방법으로 목표를 달성하는 데 능숙</strong>합니다. 유연한 사고와 과감한 실행력으로 익숙한 것을 벗어나 <strong>새로운 영역에서 자신만의 가치를 창출</strong>합니다. 때로는 냉철한 판단이 필요하지만, 당신은 언제나 실리를 추구하며 독립적인 방식으로 삶을 개척해나가는 진정한 <strong>실전형 개척자</strong>입니다. 변화에 빠르게 적응하고 전략적으로 대응하는 당신의 능력은 당신의 삶을 역동적으로 만듭니다."
    },
    "잉카 제국": {
        period: "1438년 ~ 1533년 경",
        continent: "남아메리카",
        motto: "견고한 연결로 공동체를 이끄는 설계자",
        keywords: ["조직력", "공동체", "연결", "견고함", "적응", "통제"],
        description: "험준한 안데스 산맥에 거대한 제국을 건설하고 효율적인 공동체 기반의 통치 시스템을 확립했던 잉카 제국처럼, 당신은 <strong>단단한 신뢰를 기반으로 사람들을 조직하고 연결하는 데 탁월한 재능</strong>이 있습니다. 치밀한 계획과 강한 리더십으로 목표를 향해 나아가며, 주변 사람들을 결속시켜 함께 목표를 달성하는 데 큰 보람을 느낍니다. 때로는 융통성이 부족하다는 말을 들을 수 있지만, 당신은 모두가 믿고 따를 수 있는 <strong>확실한 기반과 질서</strong>를 만들어내는 사람입니다."
    },
    "비잔티움 제국": {
        period: "330년 ~ 1453년 경",
        continent: "유럽",
        motto: "천 년을 지탱하는 불굴의 계승자",
        keywords: ["계승", "유지", "회복", "지성", "보존", "방어"],
        description: "고대 로마의 유산을 계승하고 동서양 문명의 교차점에서 독자적인 문화를 발전시키며 천 년 이상을 존속했던 비잔티움 제국처럼, 당신은 <strong>오랜 시간 동안 묵묵히 자신의 가치를 지키고 발전시키는 강한 내면</strong>을 가졌습니다. 견고한 기반 위에서 내면의 가치와 지성을 지키고, 외부의 위협 속에서도 끈질긴 회복력으로 자신을 재건해나갑니다. 당신의 삶은 급변하는 세상에서도 <strong>변치 않는 본질을 지키고, 그것을 바탕으로 지속적인 영향력</strong>을 발휘하는 과정입니다."
    },
    "알 안달루스": {
        period: "711년 ~ 1492년 경",
        continent: "유럽",
        motto: "경계를 넘어선 지식과 예술의 연금술사",
        keywords: ["융합", "관용", "지식", "예술", "공존", "다양성"],
        description: "이베리아 반도에서 이슬람과 유럽 문화가 만나 학문과 예술의 황금기를 이뤘던 알 안달루스처럼, 당신은 <strong>서로 다른 것들을 기꺼이 받아들이고, 그 안에서 새로운 아름다움과 지혜를 발견</strong>하는 사람입니다. 유연하고 개방적인 마음으로 다양한 생각과 관점을 융합하여 독창적인 결과물을 만들어내죠. 당신의 삶은 편협하지 않으며, <strong>열린 마음으로 세상을 탐험하고 그 속에서 진정한 균형</strong>을 찾아가는 지혜로운 여정입니다."
    },
    "아즈텍 제국": {
        period: "1428년 ~ 1521년 경",
        continent: "북아메리카",
        motto: "굳건한 신념으로 번영을 일구는 개척 공동체",
        keywords: ["신념", "공동체", "번영", "헌신", "상징", "집약"],
        description: "멕시코 고원에 테노치티틀란이라는 웅장한 도시를 건설하며 번성했던 아즈텍 제국처럼, 당신은 <strong>강력한 신념과 헌신적인 태도로 주변 사람들을 결속시키는 힘</strong>을 가졌습니다. 견고한 기반 위에 깊은 내면의 가치를 세우고, 자신이 옳다고 믿는 것을 위해 기꺼이 헌신하며 그 에너지를 주변에 전달합니다. 당신의 삶은 단순히 개인적인 성공을 넘어, <strong>공동체의 번영을 위해 기여하고, 상징적인 존재</strong>로 자리매김하는 숭고한 과정입니다."
    },
    "발해": {
        period: "698년 ~ 926년 경",
        continent: "아시아",
        motto: "웅장한 기상으로 새로운 시대를 여는 계승자",
        keywords: ["부흥", "계승", "자주", "북방", "광활", "다원성"],
        description: "고구려의 기상을 이어받아 '해동성국'이라 불리며 만주와 한반도 북부에 강력한 국력을 자랑했던 발해처럼, 당신은 <strong>과거의 유산을 소중히 여기면서도, 자신만의 방식으로 새로운 시대를 개척</strong>하려는 강한 의지를 가졌습니다. 견고한 기반 위에서 드넓은 영역을 향해 나아가며, 어려움 속에서도 정신적 계승을 통해 끈기 있게 목표를 이뤄냅니다. 넓은 시야와 포용력으로 <strong>다양한 문화를 아우르며, 자신만의 웅장한 서사</strong>를 써내려가는 사람입니다."
    },
    "대월": {
        period: "968년 ~ 1802년 경 (리 왕조, 쩐 왕조, 후 레 왕조 등)",
        continent: "아시아",
        motto: "수많은 역경 속에서도 굳건히 일어서는 독립가",
        keywords: ["저항", "독립", "민족", "회복", "끈기", "자립"],
        description: "천 년에 걸친 외세의 지배를 극복하고 독립을 쟁취하며 독자적인 문화를 지켜왔던 베트남의 왕조, 대월처럼, 당신은 <strong>어떤 어려움 속에서도 자신을 지키고 다시 일어서는 불굴의 회복력</strong>을 지녔습니다. 유연하게 외부의 압력에 대응하면서도 민족의 내실과 정신을 굳건히 지켜냅니다. 당신의 삶은 <strong>외부의 영향에 흔들리지 않고, 스스로의 힘으로 자신만의 가치를 증명</strong>해내는 강인한 자립의 서사입니다."
    },
    "베네치아 공화국": {
        period: "697년 ~ 1797년 경",
        continent: "유럽",
        motto: "현명한 중립으로 번영을 창조하는 외교가",
        keywords: ["무역", "번영", "중립", "실리", "해양", "외교"],
        description: "바다 위에 세워져 천 년 이상 독립을 유지하며 유럽과 동양을 잇는 해상 무역으로 번성했던 베네치아 공화국처럼, 당신은 <strong>복잡한 관계 속에서 자신만의 실리를 현명하게 추구</strong>하고, 주변과의 <strong>균형을 통해 번영을 일구어내는 데 능숙</strong>합니다. 유연한 사고와 균형 잡힌 시각으로 현명한 해결책을 찾으며, 당신의 뛰어난 외교적 감각은 갈등을 피하고 평화로운 방식으로 가장 큰 이익을 만들어냅니다. 당신의 삶은 <strong>지혜로운 협상과 실용적인 전략으로 가득한 여정</strong>입니다."
    }
};

// --- 3. DOM 요소 가져오기 ---
const startPage = document.getElementById('start-page');
const questionPage = document.getElementById('question-page');
const resultPage = document.getElementById('result-page');

const startButton = document.getElementById('start-button');
const questionCounter = document.getElementById('question-counter');
const questionText = document.getElementById('question-text');
const answerButtons = document.querySelectorAll('.answer-button');
const restartButton = document.getElementById('restart-button');
const consultationButton = document.getElementById('consultation-button');

const resultNationName = document.getElementById('result-nation-name');
const resultNationInfo = document.getElementById('result-nation-info'); // 추가된 국가 정보 표시 요소
const resultNationMotto = document.getElementById('result-nation-motto');
const resultKeywords = document.getElementById('result-keywords');
const resultDescription = document.getElementById('result-description');

// --- 4. 전역 변수 및 점수 초기화 ---
let currentQuestionIndex = 0;
let scores = {
    S: 0, F: 0,
    I: 0, D: 0,
    P: 0, R: 0
};

// --- 5. 이벤트 리스너 ---
startButton.addEventListener('click', startTest);
answerButtons.forEach(button => {
    button.addEventListener('click', (event) => selectAnswer(event.target.dataset.answerType));
});
restartButton.addEventListener('click', resetTest);
consultationButton.addEventListener('click', () => {
    window.open('https://forms.gle/YOUR_FORM_LINK_HERE', '_blank'); // 여기에 실제 구글 폼 링크를 넣어주세요.
});

// --- 6. 함수 정의 ---

// --- 6. 함수 정의 ---

function startTest() {
    startPage.classList.add('hidden');
    questionPage.classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const q = questions[currentQuestionIndex];
        questionCounter.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
        questionText.innerHTML = q.question; // <-- .textContent를 .innerHTML로 변경
        answerButtons[0].textContent = q.A;
        answerButtons[1].textContent = q.B;
    } else {
        calculateResult();
    }
}

function selectAnswer(answerType) {
    const qIndex = currentQuestionIndex;

    // 질문 인덱스에 따른 점수 부여 로직 (기존과 동일)
    if (qIndex >= 0 && qIndex <= 3) {
        if (answerType === 'A') scores.S++;
        else scores.F++;
    } else if (qIndex >= 4 && qIndex <= 7) {
        if (answerType === 'A') scores.I++;
        else scores.D++;
    } else if (qIndex >= 8 && qIndex <= 11) {
        if (answerType === 'A') scores.P++;
        else scores.R++;
    }

    currentQuestionIndex++;
    loadQuestion(); // 다음 질문 로드 또는 결과 계산
}

function calculateResult() {
    let axis1Type;
    if (scores.S > scores.F) axis1Type = 'S';
    else if (scores.F > scores.S) axis1Type = 'F';
    else axis1Type = 'B1'; // 균형점

    let axis2Type;
    if (scores.I > scores.D) axis2Type = 'I';
    else if (scores.D > scores.I) axis2Type = 'D';
    else axis2Type = 'B2'; // 균형점

    let axis3Type;
    if (scores.P > scores.R) axis3Type = 'P';
    else if (scores.R > scores.P) axis3Type = 'R';
    else axis3Type = 'B3'; // 균형점

    const finalCombination = `${axis1Type}-${axis2Type}-${axis3Type}`;
    let resultNationKey = '';

    // --- 7. 결과 매칭 로직 (27가지 조합 모두 커버) ---
    if (finalCombination === 'S-I-P') { resultNationKey = '수메르'; }
    else if (finalCombination === 'S-I-B3') { resultNationKey = '아케메네스 페르시아 제국'; }
    else if (finalCombination === 'S-I-R') { resultNationKey = '발해'; }
    else if (finalCombination === 'S-D-P') { resultNationKey = '잉카 제국'; }
    else if (finalCombination === 'S-D-B3') { resultNationKey = '비잔티움 제국'; }
    else if (finalCombination === 'S-D-R') { resultNationKey = '아즈텍 제국'; }
    else if (finalCombination === 'S-B2-P') { resultNationKey = '잉카 제국'; }
    else if (finalCombination === 'S-B2-B3') { resultNationKey = '비잔티움 제국'; }
    else if (finalCombination === 'S-B2-R') { resultNationKey = '아즈텍 제국'; }
    else if (finalCombination === 'F-I-P') { resultNationKey = '카르타고'; }
    else if (finalCombination === 'F-I-B3') { resultNationKey = '베네치아 공화국'; }
    else if (finalCombination === 'F-I-R') { resultNationKey = '카르타고'; }
    else if (finalCombination === 'F-D-P') { resultNationKey = '베네치아 공화국'; }
    else if (finalCombination === 'F-D-B3') { resultNationKey = '알 안달루스'; }
    else if (finalCombination === 'F-D-R') { resultNationKey = '대월'; }
    else if (finalCombination === 'F-B2-P') { resultNationKey = '베네치아 공화국'; }
    else if (finalCombination === 'F-B2-B3') { resultNationKey = '알 안달루스'; }
    else if (finalCombination === 'F-B2-R') { resultNationKey = '대월'; }
    else if (finalCombination === 'B1-I-P') { resultNationKey = '수메르'; }
    else if (finalCombination === 'B1-I-B3') { resultNationKey = '아케메네스 페르시아 제국'; }
    else if (finalCombination === 'B1-I-R') { resultNationKey = '발해'; }
    else if (finalCombination === 'B1-D-P') { resultNationKey = '잉카 제국'; }
    else if (finalCombination === 'B1-D-B3') { resultNationKey = '비잔티움 제국'; }
    else if (finalCombination === 'B1-D-R') { resultNationKey = '아즈텍 제국'; }
    else if (finalCombination === 'B1-B2-P') { resultNationKey = '베네치아 공화국'; }
    else if (finalCombination === 'B1-B2-B3') { resultNationKey = '알 안달루스'; }
    else if (finalCombination === 'B1-B2-R') { resultNationKey = '대월'; }
    else {
        // 모든 조합이 일치하지 않을 경우, 기본 결과 설정 (예: 수메르 또는 오류 메시지)
        // 여기서는 매칭되지 않으면 "결과를 찾을 수 없습니다."로 표시됩니다.
        resultNationKey = "알 수 없음";
    }

    displayResult(resultNationKey);
}

function displayResult(nationKey) {
    questionPage.classList.add('hidden');
    resultPage.classList.remove('hidden');

    const resultData = results[nationKey];
    if (resultData) {
        resultNationName.textContent = nationKey;
        // 국가 정보 표시
        resultNationInfo.textContent = `약 ${resultData.period} ${resultData.continent} 대륙의 나라`;
        resultNationMotto.textContent = resultData.motto;

        resultKeywords.innerHTML = ''; // 기존 키워드 초기화
        resultData.keywords.forEach(keyword => {
            const span = document.createElement('span');
            span.textContent = keyword;
            resultKeywords.appendChild(span);
        });

        // innerHTML을 사용하여 HTML 태그(<strong>)가 적용되도록 합니다.
        resultDescription.innerHTML = resultData.description;
    } else {
        resultNationName.textContent = "결과를 찾을 수 없습니다.";
        resultNationInfo.textContent = "";
        resultNationMotto.textContent = "";
        resultKeywords.innerHTML = "";
        resultDescription.textContent = "죄송합니다. 오류가 발생했거나, 당신의 성향은 너무나 독특하여 아직 분석되지 않았습니다.";
    }
}

function resetTest() {
    currentQuestionIndex = 0;
    scores = { S: 0, F: 0, I: 0, D: 0, P: 0, R: 0 };
    resultPage.classList.add('hidden');
    startPage.classList.remove('hidden');
}
