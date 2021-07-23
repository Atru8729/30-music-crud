class Artist {
    constructor(atlikejas, currency) {
        this.atlikejas = atlikejas;
        this.currency = currency;
        this.playList = [];
        this.priceOneSong = 0;
        this.wealth = 0;

    }
    intro() {
        console.log(`Hi, my name is ${this.atlikejas} and I am a musician!`);
    }
    songPrice(price) {
        this.priceOneSong = price;
        const priceOneSong = (price / 100).toFixed(2);
        console.log(`${this.atlikejas}'s price per song is ${priceOneSong} ${this.currency}`);
    }
    addSong(dainosPavadinimas) {
        this.playList.push({ dainosPavadinimas, count: 0 });
        console.log(dainosPavadinimas);
    }
    playlist() {
        console.log(`${this.atlikejas}'s playlist:`);
        console.log(`====================`);
        let count = 0;
        for (let i = 0; i < this.playList.length; i++) {
            const daina = this.playList[i];
            count++;
            console.log(`${count}. ${daina.dainosPavadinimas} (${daina.count})`);
        }
    }
    playSong(songNumber) {
        ++this.playList[songNumber].count;
        this.wealth += this.priceOneSong;
        console.log(`Playing song: ${this.playList[songNumber].dainosPavadinimas}.`);
    }
    fortune() {
        console.log(`Total lifetime wealth of ${this.atlikejas} is ${(this.wealth / 100).toFixed(2)} ${this.currency} right now!`);
    }
}

module.exports = Artist;