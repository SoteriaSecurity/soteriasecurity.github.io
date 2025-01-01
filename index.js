if (screen.width <= 700) {
    // Mobile
}


/* PRODUCT DESCRIPTION */
const PRODUCT_DESC_SELECTOR = document.getElementById("product_desc_selector")
const PRODUCT_DESC_SELECTOR_BG = document.getElementById("product_desc_selector_bg");
var PRODUCT_DESC_IDX = 1;

const MESSAGES = [
    'Soteria uses state-of-the-art AI technology to constantly scan video feeds, recognizing people and potential weapons or threats.<br><br>Unlike other security technology on the market, Soteria can quickly detect specific weapons and threats and send the appropriate alert.',
    'School security, homeowners, and community managers have 24/7 access to a live-updating admin panel.<br><br>Not only can they analyze video recordings and set up specific detection alerts for emergencies, but they can also access a detailed log of notable detection events and specify custom responses.',
    'In a school or company setting, admins can provide students and/or employees with vital security statuses, ensuring peace of mind and providing instant alerts in the case of an intruder or threat.'
];

const IMAGES = [

];

async function fadeOutAndMove(element, duration = 1000, distance = 50) {
    return new Promise((resolve) => {
        // Set up initial styles
        element.style.transform = 'translateX(0px)';
        element.style.transition = `opacity ${duration}ms, transform ${duration}ms`;
        element.style.opacity = 1;
        

        // Trigger the fade-out and move-left effect
        requestAnimationFrame(() => {
        element.style.opacity = 0;
        element.style.transform = `translateX(${distance}px)`;
        });

        // Wait for the transition to complete
        setTimeout(() => {
            resolve(); // Resolve when animation is complete
        }, duration);
    });
}

async function fadeInAndMove(element, duration = 1000, distance = 50) {
    return new Promise((resolve) => {
        // Set up initial styles
        element.style.transform = `translateX(${distance}px)`;
        element.style.transition = `opacity ${duration}ms, transform 0ms`;
        element.style.opacity = 0; // Start fully transparent
        
        element.style.display = 'block'; // Ensure the element is visible

        // Trigger the fade-in and move-right effect
        requestAnimationFrame(() => {
        element.style.opacity = 1;
        element.style.transition = `opacity ${duration}ms, transform ${duration}ms`;
        element.style.transform = 'translateX(0px)';
        });

        // Wait for the transition to complete
        setTimeout(() => {
            resolve(); // Resolve when animation is complete
        }, duration);
    });
}

function product_init_desc() {
    for (let i = 1; i <= 3; i++) {
        const ele = document.getElementById(`product_desc_selector_l${i}`);
        const idx = i;
        ele.onclick = function() { product_select_desc(idx) };
    }

    product_select_desc(1);
}

function product_select_desc(idx) {
    const oldIDX = PRODUCT_DESC_IDX;
    PRODUCT_DESC_IDX = idx;

    if (oldIDX != idx) {
        fadeOutAndMove(document.getElementById(`product_img${oldIDX}`), 300, (oldIDX < idx ? -1 : 1) * 100);
        fadeInAndMove(document.getElementById(`product_img${idx}`), 300, (oldIDX < idx ? 1 : -1) * 100);
    }

    let lbl = document.getElementById(`product_desc_selector_l${idx}`);
    PRODUCT_DESC_SELECTOR_BG.style.width = `${lbl.getBoundingClientRect().right - PRODUCT_DESC_SELECTOR.getBoundingClientRect().left}px`;

    for (let i = 1; i <= 3; i++) {
        const ele = document.getElementById(`product_desc_selector_l${i}`);
        ele.classList = `product_desc_selector_label ${i <= idx ? 'active' : ''}`;
    }  

    document.getElementById("product_desc_selector_svg1").classList = (2 <= idx ? 'active' : '');
    document.getElementById("product_desc_selector_svg2").classList = (3 <= idx ? 'active' : '');

    document.getElementById("product_desc_text").innerHTML = MESSAGES[idx-1];
}

product_init_desc();

/* CONTACT */

function send_email() {
    window.open(`mailto:support@soteriasecurity.com?subject=${document.getElementById("contact_subj").value}&body=${document.getElementById("contact_main").value}`);
}