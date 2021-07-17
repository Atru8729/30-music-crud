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

    }
    playSong() {

    }
    fortune() {

    }
}

module.exports = Artist;