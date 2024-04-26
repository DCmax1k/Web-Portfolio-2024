const formatDate = date => {
    const day = date.getDay();
    let weekDay;
    switch(day) {
        case 0:
            weekDay = 'Sun';
            break;
        case 1:
            weekDay = 'Mon';
            break;
        case 2:
            weekDay = 'Tue';
            break;
        case 3:
            weekDay = 'Wed';
            break;
        case 4:
            weekDay = 'Thu';
            break;
        case 5:
            weekDay = 'Fri';
            break;
        case 6:
            weekDay = 'Sat';
            break;
    }
    let pm = false;
    const hr = date.getHours();
    let hrs;
    if (hr > 12) {
        hrs = hr - 12;
        pm = true;
    } else {
        hrs = hr;
    }
    const time = `${hrs.toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}${pm ? 'pm' : 'am'}`;

    return `[ ${weekDay} ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${time} ]`;
}

module.exports = {
    formatDate,
}