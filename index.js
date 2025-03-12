// code your solution here
function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
}
const broncosRecord = [
    { year: "2012", result: "W" },
    { year: "2014", result: "W" },
    { year: "2015", result: "W" },
    { year: "2010", result: "L" },
    { year: "2013", result: "L" }
];

console.log(superbowlWin(broncosRecord));