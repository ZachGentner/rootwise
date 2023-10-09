// Learn how to import and work with GEDCOM data.
// Person data begins with '0@I*@ INDI', where * = index.
// Person name follows immediately after. '1 NAME "firstname middlename /surname"/'
// Allow users to select ancestor to load. Indexes are 0 for yourself, positives for parents on up and negatives for children and below.

import * as data from './data.js';
import * as ui from './ui.js';

// VARIABLE DECLARATIONS
const info = document.getElementById('info');
const quicklinks = document.getElementById('quicklinks');
const search = document.getElementById('search');
const input = document.getElementById('input');

// TARGETS
window.addEventListener('load', () => {
    data.setActive(1);
    renderActive(data.active)
}); // Changes default

search.addEventListener('submit', (e) => {
    e.preventDefault();
    data.setActive(input.value);
    renderActive(data.active);
    input.value = '';
});

function renderActive(person) {
    if (person) {
        ui.updateName(data.getFullName(person), info.querySelector('#name'));
        ui.updateId(data.findId(person), info.querySelector('#id'));
        ui.updateLifespan(data.getBirthYear(data.active), data.getDeathYear(data.active), info.querySelector('#lifespan'));
        ui.updateLinks(data.getAllLinks(data.active), quicklinks);
    } else {
        //Create a warning that says an inaccurate person has been entered.
    }
}