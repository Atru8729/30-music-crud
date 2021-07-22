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
        this.dainosList.push({ dainosPavadinimas, grojimuKiekis: 0 });
        console.log(dainosPavadinimas);
    }
    playlist() {
        console.log(`${this.atlikejas}'s playlist:`);
        console.log(`====================`);
        let count = 0;
        for (let i = 0; i < this.dainosList.length; i++) {
            const daina = this.dainosList[i];
            count++;
            console.log(`${count}. ${daina.dainosPavadinimas} (${daina.grojimuKiekis})`);
        }
    }
    playSong(songNumber) {
        ++this.dainosList[songNumber].count;
        console.log(`Playing song: ${this.dainosList[songNumber].dainosPavadinimas}.`);
    }
    fortune() {
        console.log(`Total lifetime wealth of ${this.atlikejas} is 1.05 ${this.currency} right now!`);
    }
}

module.exports = Artist;