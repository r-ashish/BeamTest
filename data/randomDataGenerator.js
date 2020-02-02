const random = (min, max) => Math.random() * (max - min) + min;
const randomIndex = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const alphabets = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
const randomAlphabet = () => alphabets[randomIndex(0, 25)];

const generateRandomScooter = () => {
    const lng = random(103.67, 103.92);
    const lat = random(1.305, 1.405);

    return {
        location: {
            type: "Point",
            coordinates: [lng, lat]
        },
        model: `${randomAlphabet()+randomAlphabet()+randomIndex(1000,9999)}`
    };
}

module.exports = () => {
    const scooters = [];
    for (let i = 0; i < 1000; i++) {
        scooters.push(generateRandomScooter());
    }
    return scooters;
};