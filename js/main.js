/* ==========================================
   Nexonia Nachhilfe – Master-JavaScript
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion Logik
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');
        
        questionButton.addEventListener('click', () => {
            // Optional: Wenn nur ein Akkordeon gleichzeitig offen sein soll
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Aktuelles Element umschalten
            item.classList.toggle('active');
        });
    });
});