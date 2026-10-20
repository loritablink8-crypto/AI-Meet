const startMeeting = document.getElementById("startMeeting");
const joinMeeting = document.getElementById("joinMeeting");
const askAI = document.getElementById("askAI");
const viewMeetings = document.getElementById("viewMeetings");

let meetingCount = 12;

startMeeting.addEventListener("click", function () {
    const roomName =
        "MeetAI-" + Math.random().toString(36).substring(2, 10);

    window.location.href =
        "meeting.html?room=" + encodeURIComponent(roomName);
});

joinMeeting.addEventListener("click", function () {
    const roomName = prompt("Enter the meeting code:");

    if (!roomName || !roomName.trim()) {
        return;
    }

    window.location.href =
        "meeting.html?room=" + encodeURIComponent(roomName.trim());
});

askAI.addEventListener("click", function () {
alert(
"Welcome to MeetAI Assistant!\n\n" +
"Coming soon:\n" +
"• AI meeting summaries\n" +
"• Speech transcription\n" +
"• Action-item extraction\n" +
"• Questions about meeting notes"
);
});

viewMeetings.addEventListener("click", function () {
alert(
"Your meeting history will be available here when the meetings feature is implemented."
);
});

document.querySelectorAll(".nav-link").forEach(function (link) {
link.addEventListener("click", function (event) {
event.preventDefault();

    document.querySelectorAll(".nav-link").forEach(function (item) {
        item.classList.remove("active");
    });

    this.classList.add("active");

    const section = this.textContent.trim();

    if (section.includes("Dashboard")) {
        window.location.href="index.html";
    } else if (section.includes("Meetings")) {
        window.location.href="meet.html";
    } else if (section.includes("Transcripts")) {
        window.location.href="transcripts.html";
    } else if (section.includes("AI Assistant")) {
       window.location.href="AI assistant.html";
    } else if (section.includes("My Tasks")) {
         window.location.href="my task.html";
    } else if (section.includes("Settings")) {
         window.location.href="settings.html";
    }
});

});