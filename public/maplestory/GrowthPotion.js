document.getElementById("calculate").addEventListener("click", function () {
    const level = parseInt(document.getElementById("level").value);
    const exp = parseInt(document.getElementById("exp").value);
    const extreme = parseInt(document.getElementById("extreme").value);
    const typhoon = parseInt(document.getElementById("typhoon").value);
    const maximum = parseInt(document.getElementById("maximum").value);
    const transcendent = parseInt(
        document.getElementById("transcendent").value
    );

    const result = calculateGrowthPotion(
        level,
        exp,
        extreme,
        typhoon,
        maximum,
        transcendent
    );
    document.getElementById("result").innerText = `최종 레벨: ${result}`;
});

const exp_table = {
    1: 15,
    2: 34,
    3: 57,
    4: 92,
    5: 135,
    6: 372,
    7: 560,
    8: 840,
    9: 1242,
    10: 1242,
    11: 1242,
    12: 1242,
    13: 1242,
    14: 1242,
    15: 1490,
    16: 1788,
    17: 2145,
    18: 2574,
    19: 3088,
    20: 3705,
    21: 4446,
    22: 5335
}