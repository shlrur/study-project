export function getTeamList() {
    return Promise.resolve([
        { id: 0, name: "Data Analyzing" },
        { id: 1, name: "Data Engineering" },
        { id: 2, name: "Prototyping" }
    ]);
}

export function getPeopleList(teamId) {
    return Promise.resolve([
        { id: 300, teamId: 2, name: "장진욱", level: 3 },
        { id: 100, teamId: 0, name: "손기홍", level: 3 },
        { id: 101, teamId: 0, name: "심윤보", level: 3 },
        { id: 102, teamId: 0, name: "김영준", level: 3 },
        { id: 103, teamId: 0, name: "유광명", level: 3 },
        { id: 200, teamId: 1, name: "노재구", level: 3 },
        { id: 301, teamId: 2, name: "이의택", level: 3 },
        { id: 104, teamId: 0, name: "이영생", level: 3 },
        { id: 302, teamId: 2, name: "이영승", level: 3 },
        { id: 105, teamId: 0, name: "임혜원", level: 3 },
        { id: 201, teamId: 1, name: "송찬호", level: 3 },
        { id: 202, teamId: 1, name: "임보미", level: 4 },
        { id: 303, teamId: 2, name: "남은지", level: 4 },
        { id: 106, teamId: 0, name: "박성호", level: 4 },
        { id: 107, teamId: 0, name: "서덕성", level: 4 },
        { id: 108, teamId: 0, name: "성시민", level: 4 },
        { id: 109, teamId: 0, name: "박예슬", level: 4 },
        { id: 203, teamId: 1, name: "임채상", level: 4 },
        { id: 204, teamId: 1, name: "최로환", level: 4 },
        { id: 205, teamId: 1, name: "허성오", level: 4 },
        { id: 304, teamId: 2, name: "김희겸", level: 4 },
        { id: 305, teamId: 2, name: "안규현", level: 4 }
    ]);
}
