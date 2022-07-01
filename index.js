class BandMember {                          //create class for members of band
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }

    describe() {
        return `${this.name} plays the ${this.instrument}.`;
    }
}

class Band {                                 //class for bands
    constructor(name) {
        this.name = name;
        this.bandMembers = [];
    }
}

class Menu {
    constructor() {
        this.bands = [];
        this.selectedBand = null;
    }

    start () {                                    //creates main menu functionality
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
 
    showMainMenuOptions() {                                  //displays main menu
        return prompt(`
        0) exit
        1) create new band
        2) view band
        3) delete band
        4) display all bands
        `);
    }

    showBandMenuOptions(bandInfo) {                          //options when viewing a band
        return prompt(`
        0) back
        1) add band member
        2) delete band member
        ---------------------
        ${bandInfo}
        `)
    }

 createBand() {                                           //creates a band from main menu
    let name = prompt('Enter new band name:');
    this.bands.push(new Band(name));
 }

 viewBand() {                                            //views band from main menu
    let index = prompt('Enter the index of the band you wish to view:');
    if (index > -1 && index < this.bands.length) {
        this.selectedBand = this.bands[index];
        let description = 'Band Name: ' + this.selectedBand.name + `
        `;

        for (let i = 0; i < this.selectedBand.bandMembers.length; i++) {
            description += i + ') ' + this.selectedBand.bandMembers[i].name + ' - ' + this.selectedBand.bandMembers[i].instrument + `
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

 deleteBand() {                                       //function to delete a band
    let index = prompt('Please enter the index of the band you wish to delete');
    if (index > -1 && index < this.bands.length) {
        this.bands.splice(index, 1);
    }
 }

 createBandMember() {                                 //function to create a band member
    let name = prompt('Enter name for new band member:');
    let instrument = prompt('Enter instrument new band member will play:');
    this.selectedBand.bandMembers.push(new BandMember(name, instrument));
 }

 deleteBandMember() {                                  //function to remove band member
    let index = prompt('Enter the index of the band member you wish to delete');
    if (index > -1 && index < this.selectedBand.bandMembers.length) {
        this.selectedBand.bandMembers.splice(index, 1);
    }
 }

 displayBands() {                                     //function to show all input bands
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