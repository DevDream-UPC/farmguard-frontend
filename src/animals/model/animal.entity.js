export class Animal {
    constructor(
        id = 0,
        idAnimal = "",
        name="",
        specie = "",
        urlIot = "",
        urlPhoto = "",
        inventoryId = 0,
        location = "",
        hearRate = 0,
        temperature=0
    ) {
        this.id = id;
        this.idAnimal = idAnimal;
        this.name = name;
        this.specie = specie;
        this.urlIot = urlIot;
        this.urlPhoto = urlPhoto;
        this.inventoryId = inventoryId;
        this.location = location;
        this.hearRate = hearRate;
        this.temperature = temperature;

    }
}