// Class structure for people and their relevant information.
class Person {
    first;
    middle;
    maiden;
    surname;
    sex;
    birth;
    death;
    photo;
    links;
    ancestry;
    familysearch;
    findagrave;

    constructor(first, surname) {
        this.first = first;
        this.surname = surname;
        this.links = [];
    }
}

function addPerson(person) {
    ids[Object.keys(ids).length + 1] = person;
}