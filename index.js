class BandMember {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }

    describe() {
        return `${this.name} plays the ${this.instrument}.`;
    }
}

class Band {
    constructor(bandName, typeOfMusic) {
        this.bandName = bandName;
        this.typeOfMusic = typeOfMusic
        this.members = [];
    }
}

class Menu {
    constructor() {
        this.bands = [];
        this.selectedBand = null;
    }

    start () {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createBand();
                    break;
                case '2':
                    this.viewBand();
                    break;
                case '3':
                    this.deleteBand();
                    break;
                case '4':
                    this.displayBands();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new band
        2) view band
        3) delete band
        4) display all bands
        `);
    }

    showBandMenuOptions(bandInfo) {
        return prompt(`
        0) back
        1) add band member
        2) delete band member
        ---------------------
        ${bandInfo}
        `)
    }

 createBand() {
    let name = prompt('Enter new band name:');
    this.bands.push(new Band (name));
 }

 viewBand() {
    let index = prompt('Enter the index of the band you wish to view:');
    if (index > -1 && index < this.bands.length) {
        this.selectedBand = this.bands[index];
        let description = 'Band Name: ' + this.selectedBand.name + `
        `;

        for (let i = 0; i < this.selectedBand.bandMembers.length; i++) {
            description += i + ') ' + this.selectedBand.BandMembers[i].name + ' - ' + this.selectedBand.bandMembers[i].instrument + `
            `;
        }

        let selection = this.showBandMenuOptions(description);
        switch (selection) {
            case '1':
                this.createBandMember();
                break;
            case '2':
                this.deleteBandMember();
        }
    }
 }

 deleteBand() {
    let index = prompt('Please enter the index of the band you wish to delete');
    if (index > -1 && index < this.bands.length) {
        this.bands.splice(index, 1);
    }
 }

 createBandMember() {
    let name = prompt('Enter name for new band member:');
    let instrument = prompt('Enter instrument new band member will play:');
    this.selectedBand.bandMembers.push(new BandMember(name, instrument));
 }

 deleteBandMember() {
    let index = prompt('Enter the index of the band member you wish to delete');
    if (index > -1 && index < this.selectedBand.BandMembers.length) {
        this.selectedBand.BandMembers.splice(index, 1);
    }
 }

 displayBands() {
    let bandString = '';
    for (let i = 0; i < this.bands.length; i++) {
        bandString += i + ') ' + this.bands[i].name + `
        `;
    }
    alert(bandString);
 }
}




let menu = new Menu();
menu.start();