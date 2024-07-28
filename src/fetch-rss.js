async function fetchMastodonRSS() {
    const request = await fetch("https://mastodon.social/@ithacasocialcircle.rss")
    const text = await request.text()

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text,"text/xml");
    const items = xmlDoc.querySelectorAll('item')
    const latestItem = items[0]
    const content = latestItem.querySelector("description").textContent   
}

const mockData = `[{"kind":"calendar#event","etag":"\\"3444349804204000\\"","id":"42v3t032d694f8jgnecla2vc1k","status":"confirmed","htmlLink":"https://www.google.com/calendar/event?eid=NDJ2M3QwMzJkNjk0ZjhqZ25lY2xhMnZjMWsgMmRkNjliYjA1ZTczZmU1ZDRkZjE2M2VkNGU5NTRiN2Y4NDczNmEzNGFmOTEyYTdmYTYyMTY0N2I1M2VlYzIyOUBn","created":"2024-07-28T13:55:02.000Z","updated":"2024-07-28T13:55:02.102Z","summary":"Bi weekly happy hour","description":"We'll have nametags and signs! This is the main location, NOT the collegetown location. \\n\\nIf you need a ride or want to offer a ride, post in the discord!","location":"Ithaca Beer Co, 122 Ithaca Beer Dr, Ithaca, NY 14850, USA","creator":{"email":"omar.sameh.shehata@gmail.com"},"organizer":{"email":"2dd69bb05e73fe5d4df163ed4e954b7f84736a34af912a7fa621647b53eec229@group.calendar.google.com","displayName":"Ithaca Social Circle","self":true},"start":{"dateTime":"2024-08-09T19:00:00-04:00","timeZone":"America/New_York"},"end":{"dateTime":"2024-08-09T21:30:00-04:00","timeZone":"America/New_York"},"iCalUID":"42v3t032d694f8jgnecla2vc1k@google.com","sequence":0,"eventType":"default"}]`
const USE_MOCK_DATA = isLocalhost()

async function fetchCalenderData() {
    let events;
    if (!USE_MOCK_DATA) {
        const url = `https://www.googleapis.com/calendar/v3/calendars/2dd69bb05e73fe5d4df163ed4e954b7f84736a34af912a7fa621647b53eec229@group.calendar.google.com/events?key=AIzaSyBMd8nlalBxzf3xyhIEBHrfKbK2Dd5WgJ4`
        const request = await fetch(url)
        const data = await request.json()
        events = data.items
    } else {
        events = JSON.parse(mockData) 
    }
    
    const today = new Date().setHours(0, 0, 0, 0);
    const upcomingEvents = 
        events.filter(event => new Date(event.start.dateTime) >= today);
    const sortedEvents = upcomingEvents.sort((a, b) => {
        const dateA = new Date(a.start.dateTime);
        const dateB = new Date(b.start.dateTime);
        return dateA - dateB;
    });
    const parent = document.querySelector("#calender-data").parentElement
    document.querySelector("#calender-data").remove()

    const calendarDiv = document.createElement('div')
    parent.appendChild(calendarDiv)
    for (let i = 0; i < sortedEvents.length; i++) {
        const event = sortedEvents[i]
        const start = formatTime(event.start.dateTime)
        const end = formatTime(event.end.dateTime)
        calendarDiv.innerHTML += 
        `
            <h3 class="section-title" style="margin-bottom:0px;">${event.summary}</h3>
            <p class="no-margin muted">${start}-${end}</p>
            <p class="muted" style="font-size: 20px; max-width: 400px; margin-top:0px;">
                <a href="https://maps.google.com/?q=${event.location}" target="_blank">
                    ${event.location}
                </a>
            </p>
            <p>
                ${event.description.replace(/\n/g, '<br>')}
            </p>
        `

        if (i != sortedEvents.length - 1) {
            calendarDiv.innerHTML += '<hr/>'
        }
    }

    if (sortedEvents.length == 0) {
        calendarDiv.innerHTML += 'There are currently no scheduled events on the calendar, sign up to the mailing list or Discord to be notified!'
    }
}
window.fetchCalenderData = fetchCalenderData

function formatTime(dateString) {
    const date = new Date(dateString)
    // Get the hours and determine if it is AM or PM
    let hours = date.getHours();
    const isPM = hours >= 12;

    // Convert hours from 24-hour to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Create the formatted time string
    const formattedTime = hours + (isPM ? 'pm' : 'am');
    return formattedTime
}

function isLocalhost() {
    const url = window.location.href
    try {
        const parsedUrl = new URL(url);
        return parsedUrl.hostname === 'localhost';
    } catch (e) {
        // If the URL is not valid, return false
        return false;
    }
}