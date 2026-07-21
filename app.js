// XXII Congreso Venezolano de Neurocirugía - Interactive JavaScript Logic

document.addEventListener('DOMContentLoaded', () => {
  initPrimaryNavigation();
  initScheduleTabs();
  initCurrencyToggle();
  initRegistrationForm();
});

/**
 * Primary Tab Navigation Routing
 */
function initPrimaryNavigation() {
  const tabs = document.querySelectorAll('.nav-tab');
  const sections = document.querySelectorAll('.page-section');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetSectionId = tab.getAttribute('data-section');
      
      // Update active nav tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Hide all sections with transition
      sections.forEach(section => {
        section.classList.remove('active');
      });

      // Show target section with a slight delay for transition effect
      const targetSection = document.getElementById(targetSectionId);
      if (targetSection) {
        targetSection.classList.add('active');
        
        // Scroll to top of window to give a clean SPA transition
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  // Enable navigation via URL hash if provided
  const hash = window.location.hash;
  if (hash) {
    const tabFromHash = document.querySelector(`.nav-tab[data-section="${hash.replace('#', '')}"]`);
    if (tabFromHash) {
      tabFromHash.click();
    }
  }
}

/**
 * Schedule (Cronograma) Day Filter Tabs
 */
function initScheduleTabs() {
  const dayTabs = document.querySelectorAll('.schedule-tab');
  const dayContents = document.querySelectorAll('.timeline-day-content');

  dayTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetDay = tab.getAttribute('data-day');

      // Update active day tab
      dayTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Toggle active day timeline content
      dayContents.forEach(content => {
        if (content.id === `day-${targetDay}`) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
    });
  });
}

/**
 * Currency Switcher (USD / VES)
 */
function initCurrencyToggle() {
  const toggleInput = document.getElementById('currency-switch');
  if (!toggleInput) return;

  const exchangeRate = 36.5; // Mock exchange rate USD -> VES
  const prices = [
    { id: 'price-estudiante', baseUsd: 40 },
    { id: 'price-residente', baseUsd: 80 },
    { id: 'price-especialista', baseUsd: 150 },
    { id: 'price-virtual', baseUsd: 60 }
  ];

  toggleInput.addEventListener('change', () => {
    const isVes = toggleInput.checked;
    
    prices.forEach(price => {
      const element = document.getElementById(price.id);
      if (element) {
        if (isVes) {
          const convertedVal = Math.round(price.baseUsd * exchangeRate);
          element.innerHTML = `Bs. ${convertedVal.toLocaleString('es-VE')}<span>/ final</span>`;
        } else {
          element.innerHTML = `$${price.baseUsd}<span>/ USD</span>`;
        }
      }
    });
  });
}

/**
 * Registration Form & Verification Sim
 */
function initRegistrationForm() {
  const form = document.getElementById('registration-form');
  const formContainer = document.getElementById('form-wrapper');
  const successBox = document.getElementById('success-message-box');
  const summarySpan = document.getElementById('reg-summary-details');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic Validation
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const phone = document.getElementById('reg-phone').value.trim();
    const categorySelect = document.getElementById('reg-category');
    const categoryText = categorySelect.options[categorySelect.selectedIndex].text;
    const paymentRef = document.getElementById('reg-ref').value.trim();

    if (!name || !email || !phone || !paymentRef) {
      alert('Por favor, rellene todos los campos obligatorios.');
      return;
    }

    // Simulate submission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;
    submitBtn.disabled = true;
    submitBtn.innerText = 'PROCESANDO REGISTRO...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerText = originalText;

      // Show success screen
      form.reset();
      formContainer.style.display = 'none';
      successBox.style.display = 'block';
      
      // Update success metadata
      const dateString = new Date().toLocaleDateString('es-VE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      summarySpan.innerHTML = `
        <strong>Registrado a nombre de:</strong> ${name}<br>
        <strong>Categoría:</strong> ${categoryText}<br>
        <strong>Correo electrónico:</strong> ${email}<br>
        <strong>Referencia de Pago:</strong> ${paymentRef}<br>
        <strong>Fecha de Solicitud:</strong> ${dateString}<br>
        <span style="display:inline-block; margin-top:12px; font-weight:700; color:#10b981;">Su cupo está pre-aprobado. En breve recibirá un correo de confirmación oficial.</span>
      `;

      // Scroll to form area smoothly
      successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 1500);
  });

  // Handle "Registrar otra persona" button
  const resetBtn = document.getElementById('register-another-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      successBox.style.display = 'none';
      formContainer.style.display = 'block';
    });
  }
}
