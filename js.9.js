
// VON PUBLISH SERVICE

let createdCount = 0;
let failedCount = 0;

// TAB SYSTEM
function showTab(tab, button) {
  document.getElementById("create").classList.toggle(
    "hidden", tab !== "create"
  );

  document.getElementById("logs").classList.toggle(
    "hidden", tab !== "logs"
  );

  document.querySelectorAll(".tab").forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
}

// ROBLOX CONNECTION
function connectAccount() {
  const connection = document.getElementById("connection");

  connection.textContent =
    "Waiting for official Roblox authorization...";
}

// CREATE PLACES
function startCreate() {
  const placeId = document.getElementById("placeId").value.trim();
  const amount = Number(document.getElementById("amount").value);

  const status = document.getElementById("status");
  const isPrivate = document.getElementById("private").checked;

  if (!/^\d+$/.test(placeId)) {
    status.textContent = "Invalid Template Place ID!";
    return;
  }

  if (!Number.isInteger(amount) || amount < 1) {
    status.textContent = "Invalid Place Amount!";
    return;
  }

  status.textContent =
    "Settings validated. Roblox publishing backend required.";

  const history = document.getElementById("history");

  history.textContent =
    "Template ID: " + placeId +
    " | Amount: " + amount +
    " | Private: " + (isPrivate ? "Yes" : "No");
}

// UPDATE COUNTERS
function updateCounters() {
  document.getElementById("created").textContent = createdCount;
  document.getElementById("failed").textContent = failedCount;
}

updateCounters();


