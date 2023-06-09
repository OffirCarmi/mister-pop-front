export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    timeDifference,
    isSameArray,
    deepCompare
}

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function timeDifference(previous) {
    const current = Date.now()

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) return 'Just now!';
    else if (elapsed < msPerHour) return Math.round(elapsed / msPerMinute) + ' minutes ago';
    else if (elapsed < msPerDay) return Math.round(elapsed / msPerHour) + ' hours ago';
    else if (elapsed < msPerMonth) return Math.round(elapsed / msPerDay) + ' days ago';
    else if (elapsed < msPerYear) return Math.round(elapsed / msPerMonth) + ' months ago';
    else return Math.round(elapsed / msPerYear) + ' years ago';
}

function isSameArray(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);;
}

function deepCompare(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) return false;

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (!obj2.hasOwnProperty(key)) return false;
        if (!deepCompare(obj1[key], obj2[key])) return false;
    }

    return true;
};