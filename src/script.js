function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const creationTime = new Date('2022-09-27T18:29:00')

async function displayRealTimeAndDiff() {

    const currDate = new Date(Date.now())
    document.getElementById('nowDate').innerHTML = currDate.toString();

    var millsDiff = currDate - creationTime

    var diff = "";
    diff += '<br>' + millsDiff + ' milliseconds'
    const seconds = millsDiff / 1000;
    diff += '<br> or ' + seconds + ' seconds';
    const minutes = seconds / 60;
    diff += '<br> or ' + minutes + ' minutes';
    const hours = minutes / 60;
    diff += '<br> or ' + hours + ' hours';
    const days = hours / 24
    diff += '<br> or ' + days + ' days';
    const weeks = days / 7;
    diff += '<br> or ' + weeks + ' weeks';
    const years = days / 365;
    diff += '<br> or ' + years + ' years (примерно)';

    document.getElementById('diff').innerHTML = diff;
    await sleep(1000);
    await displayRealTimeAndDiff();
}
