class Artist {
    constructor(atlikejas, currency) {
        this.atlikejas = atlikejas;
        this.currency = currency;
        this.dainosList = [];

    }
    intro() {
        console.log(`Hi, my name is ${this.atlikejas} and I am a musician!`);
    }
    songPrice(priceInCents) {
        const price = (priceInCents / 100).toFixed(2);
        console.log(`Raimonda's price per song is ${price} ${this.currency}`);
    }
    addSong(dainosPavadinimas) {
        this.dainosList.push({ dainosPavadinimas });
        console.log(dainosPavadinimas);
    }
    playlist() {
        console.log(`${this.atlikejas}'s playlist:`);
        console.log(`====================`);

        console.log(`1. Bumciki (0)`);
        console.log(`2. Tra lia lai (0)`);
        console.log(`3. Oj lijo lijo (0)`);
        console.log(`4. Kai grazumo (0)`);
    }
    playSong() {

    }
    fortune() {

    }
}

module.exports = Artist;