const translations = {
  en: {
    htmlLang: "en",
    title: "Spawnpoint | Where did your story begin?",
    metaDescription:
      "Spawnpoint is an upcoming app for finding the exact place your story began.",
    headerLabel: "Top menu",
    brandLabel: "Spawnpoint home",
    navLabel: "Sections",
    languageLabel: "Language",
    navIntro: "Intro",
    navSoon: "Coming soon",
    navSignup: "Sign up",
    navScreens: "Screenshots",
    heroKicker: "A tiny quest about where everything began",
    heroCopy:
      "Find the place where your story began. Not just the date. Not just the city. The exact point on the map.",
    heroActionsLabel: "Primary actions",
    heroPrimary: "Sign up for updates",
    heroSecondary: "See the idea",
    introLabel: "Spawn point intro",
    introTitle: "Everyone has a starting point.",
    introCopy:
      "Spawnpoint is an upcoming app for making origin stories a little more playful, personal, and concrete. You add what you know, find the point on the map, and build a small digital marker for the place where your story began.",
    ideasLabel: "Core ideas",
    ideaOneTitle: "Find the point",
    ideaOneCopy: "From city, hospital, address, or family story to one exact place.",
    ideaTwoTitle: "Make it personal",
    ideaTwoCopy: "A small map memory with coordinates, notes, and just enough mystery.",
    ideaThreeTitle: "Share when it fits",
    ideaThreeCopy:
      "For yourself, your family, or the person who always asks where you are from.",
    soonLabel: "Coming soon",
    soonTitle: "First the idea lands. Then the app.",
    soonCopy:
      "Right now Spawnpoint is being shaped around the simple feeling of pointing at a map and saying: that is where I started. This page is the project's first small basecamp while the app takes form.",
    statusLabel: "Waitlist",
    statusWaitlist: "Join the waitlist",
    signupLabel: "Sign up here",
    signupTitle: "Want to know when Spawnpoint opens?",
    signupCopy:
      "Leave your email and I'll send the occasional update as the app takes shape.",
    formLabel: "Interest list signup",
    emailLabel: "Email",
    formButton: "Join waitlist",
    formNote: "We'll only use your email for Spawnpoint updates.",
    formSending: "Joining the waitlist...",
    formSuccess: "You're on the Spawnpoint waitlist. Thanks for joining.",
    formError:
      "Couldn't reach the form service. Try again, or disable blockers for this page and retry.",
    screensLabel: "App screenshots",
    screensTitle: "Screenshots coming soon.",
    phoneOneLabel: "Map",
    phoneTwoLabel: "Pin",
    phoneThreeLabel: "Story",
    phoneComingSoon: "Coming soon",
    mapPreviewAlt: "Voxel-style forest map with roads and coastline",
    pinPreviewAlt: "Red Spawnpoint pin centered on a voxel map",
    footerTop: "Back to top",
  },
  no: {
    htmlLang: "no",
    title: "Spawnpoint | Hvor startet historien din?",
    metaDescription:
      "Spawnpoint er en kommende app for å finne stedet historien din startet.",
    headerLabel: "Toppmeny",
    brandLabel: "Spawnpoint hjem",
    navLabel: "Seksjoner",
    languageLabel: "Språk",
    navIntro: "Intro",
    navSoon: "Coming soon",
    navSignup: "Meld interesse",
    navScreens: "Skjermbilder",
    heroKicker: "En liten quest om hvor alt begynte",
    heroCopy:
      "Finn stedet der historien din startet. Ikke bare datoen. Ikke bare navnet på byen. Det faktiske punktet på kartet.",
    heroActionsLabel: "Primære handlinger",
    heroPrimary: "Meld interesse",
    heroSecondary: "Se ideen",
    introLabel: "Spawn point intro",
    introTitle: "Alle har et startpunkt.",
    introCopy:
      "Spawnpoint er en kommende app for å gjøre opprinnelse litt mer leken, personlig og konkret. Du legger inn det du vet, finner punktet på kartet, og bygger en liten digital markør for stedet der din historie begynte.",
    ideasLabel: "Kjerneideer",
    ideaOneTitle: "Finn punktet",
    ideaOneCopy:
      "Fra by, sykehus, adresse eller familiefortelling til et konkret sted.",
    ideaTwoTitle: "Gjør det personlig",
    ideaTwoCopy:
      "Et lite kartminne med koordinater, notater og akkurat passe mystikk.",
    ideaThreeTitle: "Del når det passer",
    ideaThreeCopy:
      "For deg selv, familien eller den ene personen som alltid spør hvor du er fra.",
    soonLabel: "Coming soon",
    soonTitle: "Først lander ideen. Så appen.",
    soonCopy:
      "Akkurat nå formes Spawnpoint rundt den enkle følelsen av å peke på et kart og si: der startet jeg. Nettsiden er første lille basecamp for prosjektet mens appen tar form.",
    statusLabel: "Venteliste",
    statusWaitlist: "Meld interesse",
    signupLabel: "Sign up here",
    signupTitle: "Vil du få vite når Spawnpoint åpner?",
    signupCopy:
      "Legg igjen e-postadressen din, så sender jeg en sjelden oppdatering mens appen tar form.",
    formLabel: "Meld interesse",
    emailLabel: "E-post",
    formButton: "Meld interesse",
    formNote: "E-posten brukes bare til Spawnpoint-oppdateringer.",
    formSending: "Melder deg på interesselisten...",
    formSuccess: "Du står på Spawnpoint-listen. Takk for at du meldte interesse.",
    formError:
      "Fikk ikke kontakt med skjematjenesten. Prøv igjen, eller slå av blokkeringer for denne siden og prøv på nytt.",
    screensLabel: "App skjermbilder",
    screensTitle: "Skjermbilder kommer snart.",
    phoneOneLabel: "Kart",
    phoneTwoLabel: "Pin",
    phoneThreeLabel: "Historie",
    phoneComingSoon: "Kommer snart",
    mapPreviewAlt: "Voxel-aktig skogskart med veier og kystlinje",
    pinPreviewAlt: "Rød Spawnpoint-pin sentrert på et voxel-kart",
    footerTop: "Til toppen",
  },
};

const supportedLanguages = Object.keys(translations);
const savedLanguage = getSavedLanguage();
const initialLanguage = supportedLanguages.includes(savedLanguage) ? savedLanguage : "en";

function getSavedLanguage() {
  try {
    return localStorage.getItem("spawnpoint-language");
  } catch {
    return null;
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem("spawnpoint-language", language);
  } catch {
    // The toggle should still work when storage is blocked.
  }
}

function applyLanguage(language) {
  const content = translations[language] ?? translations.en;

  document.documentElement.lang = content.htmlLang;
  document.title = content.title;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = content[element.dataset.i18n];
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", content[element.dataset.i18nAriaLabel]);
  });

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    element.setAttribute("content", content[element.dataset.i18nContent]);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", content[element.dataset.i18nAlt]);
  });

  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    const isActive = button.dataset.langOption === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const pageLanguageField = document.getElementById("pageLanguageField");
  if (pageLanguageField) pageLanguageField.value = language;

  saveLanguage(language);
}

document.querySelectorAll("[data-lang-option]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.langOption));
});

applyLanguage(initialLanguage);

(function setupWaitlistForm() {
  const form = document.getElementById("waitlist-form");
  const iframe = document.getElementById("formcarry_iframe");
  const statusBox = document.getElementById("form-status");
  const nextField = document.getElementById("nextField");
  const landingUrlField = document.getElementById("landingUrlField");
  const referrerField = document.getElementById("referrerField");
  const spamTrapFields = form ? [...form.querySelectorAll("[data-spam-trap]")] : [];

  if (!form || !iframe || !statusBox) return;

  if (nextField) nextField.value = `${window.location.origin}${window.location.pathname}?sent=1#signup`;
  if (landingUrlField) landingUrlField.value = window.location.href;
  if (referrerField) referrerField.value = document.referrer || "direct";

  let pending = false;
  let timer = null;

  function currentContent() {
    const lang = document.documentElement.lang;
    return translations[lang] ?? translations.en;
  }

  function showStatus(message, kind) {
    statusBox.hidden = false;
    statusBox.textContent = message;
    statusBox.dataset.kind = kind;
  }

  form.addEventListener("submit", (event) => {
    const hasTriggeredTrap = spamTrapFields.some((field) => field.value.trim());

    if (hasTriggeredTrap) {
      event.preventDefault();
      showStatus(currentContent().formSuccess, "success");
      return;
    }

    pending = true;
    const button = form.querySelector('button[type="submit"]');
    const content = currentContent();

    if (button) button.disabled = true;
    showStatus(content.formSending, "sending");

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      if (!pending) return;
      pending = false;
      if (button) button.disabled = false;
      showStatus(currentContent().formError, "error");
    }, 9000);
  });

  iframe.addEventListener("load", () => {
    if (!pending) return;
    pending = false;
    if (timer) clearTimeout(timer);

    const button = form.querySelector('button[type="submit"]');
    if (button) button.disabled = false;

    showStatus(currentContent().formSuccess, "success");
    setTimeout(() => {
      const email = form.querySelector('input[name="email"]');
      if (email) email.value = "";
    }, 50);
  });
})();
