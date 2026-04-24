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
    statusLabel: "Project status",
    statusDesign: "Design direction",
    statusPrototype: "Prototype",
    statusWaitlist: "Waitlist",
    signupLabel: "Sign up here",
    signupTitle: "Want to know when Spawnpoint opens?",
    signupCopy:
      "The actual form comes next. For now, this space is reserved so the design and message can settle before we connect the email flow.",
    formLabel: "Interest list coming soon",
    emailLabel: "Email",
    formButton: "Coming soon",
    formNote: "No email is stored here yet.",
    screensLabel: "App screenshots",
    screensTitle: "Screenshots coming soon.",
    phoneOneLabel: "Map",
    phoneTwoLabel: "Pin",
    phoneThreeLabel: "Story",
    phoneComingSoon: "Coming soon",
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
    statusLabel: "Prosjektstatus",
    statusDesign: "Designretning",
    statusPrototype: "Prototype",
    statusWaitlist: "Venteliste",
    signupLabel: "Sign up here",
    signupTitle: "Vil du få vite når Spawnpoint åpner?",
    signupCopy:
      "Selve skjemaet kommer i neste runde. Foreløpig holder vi av plassen, så designet og budskapet kan sitte før vi kobler på e-postflyten.",
    formLabel: "Interesseliste kommer snart",
    emailLabel: "E-post",
    formButton: "Kommer snart",
    formNote: "Ingen e-post lagres her ennå.",
    screensLabel: "App skjermbilder",
    screensTitle: "Skjermbilder kommer snart.",
    phoneOneLabel: "Kart",
    phoneTwoLabel: "Pin",
    phoneThreeLabel: "Historie",
    phoneComingSoon: "Kommer snart",
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

  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    const isActive = button.dataset.langOption === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  saveLanguage(language);
}

document.querySelectorAll("[data-lang-option]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.langOption));
});

applyLanguage(initialLanguage);
