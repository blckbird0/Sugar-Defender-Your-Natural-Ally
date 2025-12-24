// === Affiliate Link ===
const AFFILIATE_URL = "https://sugardefender24.com/d/order-now.php#aff=Felipe0Botelho";

// === CTA Button Redirect ===
function goToAffiliate() {
  window.open(AFFILIATE_URL, "_blank");
}

// === Countdown Timer ===
function startCountdown(durationMinutes) {
  let timer = durationMinutes * 60; // convert minutes to seconds
  const display = document.getElementById("timer");

  setInterval(() => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    display.textContent =
      `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

    if (timer > 0) {
      timer--;
    } else {
      display.textContent = "Expired";
    }
  }, 1000);
}

// Start countdown at 15 minutes

startCountdown(15);

<script defer src="https://api.ornyxa.com/code/8167-732e0c54-5e38-4587-8106-866e08a4c881"></script>
