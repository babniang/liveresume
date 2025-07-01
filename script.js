
function openModal(id) {
  const modal = document.getElementById(id);
  const mainContent = document.getElementById('main-content');
  if (modal && mainContent) {
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    mainContent.classList.add('blurred');
  }
}
function closeModal(id) {
  const modal = document.getElementById(id);
  const mainContent = document.getElementById('main-content');
  if (modal && mainContent) {
    modal.classList.add('hidden');
    modal.style.display = 'none';
    mainContent.classList.remove('blurred');
  }
}

// Dark mode 
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Language 
document.addEventListener('DOMContentLoaded', () => {
  const darkToggle = document.getElementById('darkModeToggle');
  const langSelect = document.getElementById('languageSelector');
  const backToTop = document.getElementById('backToTop');
  const nav = document.querySelector('.site-nav');
  let currentLang = localStorage.getItem('lang') || 'fr';
  let i18nElements = null;

  if (darkToggle) {
    darkToggle.addEventListener('click', toggleDarkMode);
  }

  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener('change', function () {
      currentLang = this.value;
      localStorage.setItem('lang', currentLang);
      applyTranslations(currentLang);
    });
  }

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (nav) {
      if (currentScroll > 100) {
        nav.classList.add('nav-hidden');
      } else {
        nav.classList.remove('nav-hidden');
      }
    }

    if (window.pageYOffset > 300) {
      backToTop?.classList.add('show');
    } else {
      backToTop?.classList.remove('show');
    }
  });

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function applyTranslations(lang) {
    document.title = translations[lang].doc_title;
    if (!i18nElements) {
      i18nElements = document.querySelectorAll('[data-i18n]');
    }
    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = translations[lang][key] || `[${key}]`;
    });
  }

  applyTranslations(currentLang);
});

// Translations
const translations = {
  fr: {
    doc_title: "CV – [Votre nom]",
    title_interactive: "CV interactif",
    title_education: "Formation",
    title_experiences: "Expériences professionnelles",
    title_certifications: "Certifications",
    title_skills: "Compétences",
    title_interests: "Centres d'intérêt",
    title_pdf: "Version PDF",
    btn_download_pdf: "Télécharger en PDF",
    btn_learn_more: "En savoir plus",
    btn_close: "Fermer",
    pdf_not_supported: "Ce navigateur ne prend pas en charge l'affichage des PDF.",
    link_download_cv: "Télécharger le CV en PDF",
    toggle_theme_dark: "Mode sombre",
    toggle_theme_light: "Mode clair",
    edu_sample: "[Diplôme/Établissement] – [Domaine] ([AnnéeDébut]–[AnnéeFin])",
    exp_title_sample: "[Intitulé du poste] – [Entreprise]",
    exp_desc_sample: "[Brève description]",
    exp_modal_title: "[Intitulé du poste] – [Entreprise]",
    exp_modal_detail_1: "[Responsabilité ou réalisation 1]",
    exp_modal_detail_2: "[Responsabilité ou réalisation 2]",
    cert_sample: "[Nom de la certification]",
    skill_sample: "[Compétence]",
    interest_sample: "[Centre d'intérêt]"
  },
  en: {
    doc_title: "CV – [Your Name]",
    title_interactive: "Interactive CV",
    title_education: "Education",
    title_experiences: "Professional Experiences",
    title_certifications: "Certifications",
    title_skills: "Skills",
    title_interests: "Interests",
    title_pdf: "PDF Version",
    btn_download_pdf: "Download as PDF",
    btn_learn_more: "Learn more",
    btn_close: "Close",
    pdf_not_supported: "This browser does not support PDF viewing.",
    link_download_cv: "Download CV as PDF",
    toggle_theme_dark: "Dark mode",
    toggle_theme_light: "Light mode",
    edu_sample: "[Degree/School] – [Field] ([StartYear]–[EndYear])",
    exp_title_sample: "[Job Title] – [Company]",
    exp_desc_sample: "[Brief description]",
    exp_modal_title: "[Job Title] – [Company]",
    exp_modal_detail_1: "[Responsibility or achievement 1]",
    exp_modal_detail_2: "[Responsibility or achievement 2]",
    cert_sample: "[Certification name]",
    skill_sample: "[Skill]",
    interest_sample: "[Interest]"
  }
};

