const names = [
    "Olivia", "Liam", "Emma", "Noah", "Ava", "Oliver",
    "Sophia", "Elijah", "Isabella", "James", "Mia", "Lucas"
];

function generateName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    document.getElementById("result").innerText = names[randomIndex];
}
