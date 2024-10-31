// 初始化日記列表
const diaryList = document.getElementById("diaryList");
const diaryInput = document.getElementById("diaryInput");

// 載入所有日記
function loadDiaries() {
    const diaries = JSON.parse(localStorage.getItem("diaries") || "[]");
    diaryList.innerHTML = "";
    diaries.forEach((entry, index) => {
        const diaryEntry = document.createElement("div");
        diaryEntry.className = "diary-entry";
        diaryEntry.innerHTML = `
            <p>${entry.text}</p>
            <small>${entry.date}</small>
            <button onclick="deleteDiary(${index})">刪除</button>
        `;
        diaryList.appendChild(diaryEntry);
    });
}

// 添加日記
function addDiary() {
    const text = diaryInput.value;
    if (!text) return;

    const diaries = JSON.parse(localStorage.getItem("diaries") || "[]");
    const newEntry = { text, date: new Date().toLocaleString() };
    diaries.push(newEntry);

    localStorage.setItem("diaries", JSON.stringify(diaries));
    diaryInput.value = "";
    loadDiaries();
}

// 刪除日記
function deleteDiary(index) {
    const diaries = JSON.parse(localStorage.getItem("diaries") || "[]");
    diaries.splice(index, 1); // 刪除指定索引的日記
    localStorage.setItem("diaries", JSON.stringify(diaries));
    loadDiaries();
}

// 初次載入日記
loadDiaries();
