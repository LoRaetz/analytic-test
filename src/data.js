const moment = require('moment')

function convertHoursToUnixCurrentDate(minutes, hours, days) {
    const currentDayStartValue = moment().startOf('day')
    const formatValue = "M/D/YYYY H:mm"
    const dayInSeconds = 86400
    const hourInSeconds = 3600
    const minuteInSeconds = 60

    let actualValuetoAdd = 0;

    if(minutes) {
        actualValuetoAdd = actualValuetoAdd + (minutes * minuteInSeconds)
    }

    if(hours) {
        actualValuetoAdd = actualValuetoAdd + (hours * hourInSeconds)
    }

    if(days) {
        actualValuetoAdd = actualValuetoAdd + (days * dayInSeconds)
    }

    return moment(currentDayStartValue, formatValue).add(actualValuetoAdd, 'seconds').unix()
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
    convertHoursToUnixCurrentDate,
    data: [
        {
            date: convertHoursToUnixCurrentDate(30,0,0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(0,1,0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(0,5,0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(0,9,0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(0,13,0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(0,17,0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(0,21,0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(30,4,0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(30,5,0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(30,6,0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(30,7,0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(30,8,0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(15,10,0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(20,10,0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(25,10,0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(30,10,0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(30,13,0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(30,14,0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(30,15,0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(30,16,0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(30,17,0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(30,18,0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(30,19,0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        },
        {
            date: convertHoursToUnixCurrentDate(getRandomInt(60),getRandomInt(23),0), successfulInvests: getRandomInt(100), failedInvests: getRandomInt(50)
        }
    ],
    ticks: [
        convertHoursToUnixCurrentDate(0,1,0),
        convertHoursToUnixCurrentDate(0,5,0),
        convertHoursToUnixCurrentDate(0,9,0),
        convertHoursToUnixCurrentDate(0,13,0),
        convertHoursToUnixCurrentDate(0,17,0),
        convertHoursToUnixCurrentDate(0,21,0),
    ],
    highlightTicks: [
        {
            // Placeholder for ReferenceArea
            date: convertHoursToUnixCurrentDate(30,0,0), successfulInvests: 0, failedInvests: 0
        },
        {
            // Placeholder for ReferenceArea
            date: convertHoursToUnixCurrentDate(30,1,0), successfulInvests: 0, failedInvests: 0
        },
        {
            // Placeholder for ReferenceArea
            date: convertHoursToUnixCurrentDate(30,4,0), successfulInvests: 0, failedInvests: 0
        },
        {
            // Placeholder for ReferenceArea
            date: convertHoursToUnixCurrentDate(30,5,0), successfulInvests: 0, failedInvests: 0
        },
        {
            // Placeholder for ReferenceArea
            date: convertHoursToUnixCurrentDate(30,8,0), successfulInvests: 0, failedInvests: 0
        },
        {
            // Placeholder for ReferenceArea
            date: convertHoursToUnixCurrentDate(30,9,0), successfulInvests: 0, failedInvests: 0
        },
        {
            // Placeholder for ReferenceArea
            date: convertHoursToUnixCurrentDate(30,12,0), successfulInvests: 0, failedInvests: 0
        },
        {
            // Placeholder for ReferenceArea
            date: convertHoursToUnixCurrentDate(30,13,0), successfulInvests: 0, failedInvests: 0
        },
        {
            // Placeholder for ReferenceArea
            date: convertHoursToUnixCurrentDate(30,16,0), successfulInvests: 0, failedInvests: 0
        },
        {
            // Placeholder for ReferenceArea
            date: convertHoursToUnixCurrentDate(30,17,0), successfulInvests: 0, failedInvests: 0
        },
        {
            // Placeholder for ReferenceArea
            date: convertHoursToUnixCurrentDate(30,20,0), successfulInvests: 0, failedInvests: 0
        },
        {
            // Placeholder for ReferenceArea
            date: convertHoursToUnixCurrentDate(30,21,0), successfulInvests: 0, failedInvests: 0
        }
    ]
}
