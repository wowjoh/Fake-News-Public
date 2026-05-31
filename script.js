const sendBtn = document.querySelector(".input-btn");
const userInput = document.querySelector(".user-input");
const chatBox = document.querySelector(".chat-box");
const checkBox = document.querySelectorAll(".check");
const MODEL_NAME = "gemini-flash-latest";
const set_msg = `너는 청소년 디지털 리터러시 강화 프로그램의 일환으로 내가 보내주는 링크나 글을 읽고 
                다음 기준에 맞춰서 위험 키워드의 개수를 세줘. 
                1: 출처 모호: 전문가, 관계자
                2. 회피 표현: 확실하지는 않지만, 내 생각
                3, 감정 자극: 충격, 경악, 배신 등등
                4. 느낌표, 물음표의 과도한 사용: ??. ?!, !!. !? 
                아래에 따라 다른 대답없이 개수, 그에 따른 위험도와 발견된 키워드만 표시해줘.
                1. 위험 키워드 개수 
                - 0~1개 : 낮음
                - 2~3개: 중간
                - 4개 이상: 높음`;

console.log("세팅:", set_msg);

// async function sendMessage() {
//     const message = userInput.value.trim();
//     if (message == "") return;

//     console.log("입력 완료");
//     // 2. URL을 함수 안에서 매번 새로 생성
//     const URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;
    
//     // chatBox.innerHTML += `<p>${message}</p>`;
//     userInput.value = "";

//     document.querySelector(".input-container").style.display = 'none';
//     document.querySelector(".재검사").style.display = 'block';

//     try {
//         const response = await fetch(URL, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ 
//                 system_instruction: {
//                     parts: [{ text: set_msg }]
//                 },
//                 contents: [{ 
//                     parts: [{ text: message }] 
//                 }] 
//             })
//         });
        
//         if (!response.ok) {
//             const errorData = await response.json();
//             console.log("서버 에러 상세:", errorData); 
//             throw new Error(`에러 코드: ${response.status}`);
//         }

//         const data = await response.json();

//         if (data.candidates && data.candidates[0].content.parts[0].text) {
//             const botReply = data.candidates[0].content.parts[0].text;

//             chatBox.innerHTML += `<p>${botReply}</p>`;
//             // chatBox.scrollTop = chatBox.scrollHeight;
//         } else {
//             throw new Error("데이터 구조 오류");
//         }
        
//     } catch (error) {
//         console.error("오류 발생 상세:", error);
//     }
// }

// sendBtn.addEventListener("click", sendMessage);

// userInput.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") {
//         sendMessage();
//     }
// });

document.querySelector('.재검사').addEventListener("click", function() {
    document.querySelector(".재검사").style.display = 'none';
    document.querySelector(".input-container").style.display = 'block';
    chatBox.innerHTML = ``;
});

checkBox.forEach(checkBox => {
    checkBox.addEventListener('change', () => {
        const count = document.querySelectorAll('.check:checked').length;
        if (count >= 4) {
            document.querySelector(".checked").innerHTML = '결과 : 신뢰도 낮음';
        } else if (count == 2 || count == 3) {
            document.querySelector(".checked").innerHTML = '결과 : 신뢰도 중간';
        } else {
            document.querySelector(".checked").innerHTML = '결과 : 신뢰도 높음';
        }
    })
})