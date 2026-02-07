// ========================================
// Constants & Configuration
// ========================================
const ADMIN_PASSWORD = 'orbit2026';
const API_IPIFY = 'https://api.ipify.org?format=json';
const API_IPAPI = 'https://ipapi.co';

// ========================================
// Data Storage
// ========================================
let visitors = JSON.parse(localStorage.getItem('orbitVisitors') || '[]');

// ========================================
// Data Definitions
// ========================================
const navItems = [
    { text: 'AI', href: '#home' },
    { text: 'Courses', href: '#courses' },
    { text: 'Support', href: '#support' },
    { text: 'Industry Training', href: '#industry' }
];

const aiArticles = [
    {
        title: 'Python Powers Next-Gen AI',
        date: 'February 6, 2026',
        desc: "See how Python's versatility is driving innovation in artificial intelligence.",
        image: 'images/Python.jpeg',
        enquiry: 'Python Powers Next-Gen AI'
    },
    {
        title: 'React JS Meets Intelligent Apps',
        date: 'February 5, 2026',
        desc: 'Building intuitive interfaces for sophisticated AI applications with React.',
        image: 'images/ReactJS_AIGurukulAcademy.jpeg',
        enquiry: 'React JS and Intelligent Apps'
    },
    {
        title: 'Agentic AI Breakthroughs',
        date: 'February 4, 2026',
        desc: 'Autonomous AI agents are here, transforming industries with smart decision-making.',
        image: 'images/AgeticAI.jpeg',
        enquiry: 'Agentic AI Breakthroughs'
    },
    {
        title: 'AI Ethics in Focus',
        date: 'February 3, 2026',
        desc: 'Responsible AI development is paramount for a trustworthy technological future.',
        image: 'images/AI_Rule.jpeg',
        enquiry: 'AI Ethics and Responsible Development'
    }
];

const courses = [
    {
        title: 'Python for AI & Machine Learning',
        date: '12 Weeks • Beginner to Advanced',
        desc: 'Master Python programming and build real-world AI applications with hands-on projects.',
        image: 'images/pythonAI.jpeg',
        enquiry: 'Python for AI & Machine Learning Course'
    },
    {
        title: 'React & Modern Web Development',
        date: '10 Weeks • Intermediate',
        desc: 'Create stunning, interactive web applications using React, Next.js, and modern tools.',
        image: 'images/ReactJS.jpeg',
        enquiry: 'React & Modern Web Development Course'
    },
    {
        title: 'Deep Learning Fundamentals',
        date: '14 Weeks • Advanced',
        desc: 'Dive deep into neural networks, CNNs, RNNs, and transformers with TensorFlow and PyTorch.',
        image: 'images/Deeplearnig.jpeg',
        enquiry: 'Deep Learning Fundamentals Course'
    },
    {
        title: 'Full Stack AI Development',
        date: '16 Weeks • Professional',
        desc: 'Build end-to-end AI-powered applications from frontend to deployment.',
        image: 'images/Fullstack.jpeg',
        enquiry: 'Full Stack AI Development Course'
    },
    {
        title: 'Graphic Design',
        date: '16 Weeks • Professional',
        desc: 'Graphic Design is the art and practice of creating visual content using typography, images, colors, and layout to communicate ideas, messages, and brand identity effectively across digital and print media.',
        image: 'images/graphic.jpeg',
        enquiry: 'Graphic Design Course'
    }
];

const industryPrograms = [
    { icon: '🏢', title: 'Corporate AI Training', desc: 'Customized AI training programs for teams and organizations.' },
    { icon: '🎓', title: 'Internship Programs', desc: '6-month industry internships with leading tech companies.' },
    { icon: '💼', title: 'Placement Assistance', desc: '100% job placement support with our hiring partners.' },
    { icon: '🚀', title: 'Startup Incubation', desc: 'Launch your AI startup with mentorship and funding support.' },
    { icon: '🔬', title: 'Research Collaborations', desc: 'Work on cutting-edge AI research with industry experts.' },
    { icon: '🌐', title: 'Global Certifications', desc: 'Industry-recognized certifications from top tech partners.' }
];

const supportOptions = [
    {
        title: '24/7 Learning Support',
        date: 'Always Available',
        desc: 'Get instant help from our expert mentors and community via chat, email, or video call.',
        image: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)'
    },
    {
        title: 'Career Counseling',
        date: 'One-on-One Sessions',
        desc: 'Personalized career guidance to help you achieve your professional goals.',
        image: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)'
    },
    {
        title: 'Community Forum',
        date: '10,000+ Members',
        desc: 'Connect with fellow learners, share projects, and collaborate on AI innovations.',
        image: 'linear-gradient(135deg, #dc2626 0%, #f43f5e 100%)'
    },
    {
        title: 'Technical Resources',
        date: 'Unlimited Access',
        desc: 'Access to premium tutorials, code libraries, datasets, and research papers.',
        image: 'linear-gradient(135deg, #059669 0%, #10b981 100%)'
    }
];

const services = [
    {
        icon: '🌐',
        title: 'Website Development',
        desc: 'Beautiful, fast, and responsive websites that convert visitors into customers.',
        features: ['Custom Web Design', 'E-commerce Solutions', 'CMS Integration', 'SEO Optimization', 'Responsive Design']
    },
    {
        icon: '📱',
        title: 'Mobile App Development',
        desc: 'Native and cross-platform apps that deliver seamless user experiences.',
        features: ['iOS & Android Apps', 'React Native Development', 'App Store Optimization', 'Push Notifications', 'In-App Analytics']
    },
    {
        icon: '🎨',
        title: 'Graphic Design',
        desc: 'Eye-catching visuals that communicate your brand story effectively.',
        features: ['Logo & Brand Identity', 'Social Media Graphics', 'Marketing Materials', 'Illustration & Icons', 'Print Design']
    },
    {
        icon: '🤖',
        title: 'AI Solutions',
        desc: 'Intelligent systems that automate tasks and provide actionable insights.',
        features: ['Machine Learning Models', 'Chatbots & Virtual Assistants', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision']
    },
    {
        icon: '🛒',
        title: 'E-commerce Solutions',
        desc: 'Complete online stores with secure payments and inventory management.',
        features: ['Shopify & WooCommerce', 'Payment Gateway Integration', 'Inventory Management', 'Order Tracking', 'Customer Analytics']
    },
    {
        icon: '☁️',
        title: 'Cloud & DevOps',
        desc: 'Scalable infrastructure and seamless deployment for your applications.',
        features: ['AWS, Azure, Google Cloud', 'CI/CD Pipelines', 'Container Orchestration', 'Monitoring & Logging', 'Security & Compliance']
    }
];

const processSteps = [
    { num: 1, title: 'Discovery', desc: 'We listen to your needs, understand your goals, and analyze your target audience to create the perfect strategy.' },
    { num: 2, title: 'Design', desc: 'Our creative team crafts stunning designs that align with your brand and engage your users.' },
    { num: 3, title: 'Development', desc: 'We build robust, scalable solutions using the latest technologies and best practices.' },
    { num: 4, title: 'Launch', desc: 'We deploy your project seamlessly and provide ongoing support to ensure continued success.' }
];

const stats = [
    { val: '500+', label: 'Projects Completed' },
    { val: '98%', label: 'Client Satisfaction' },
    { val: '50+', label: 'Expert Team Members' },
    { val: '24/7', label: 'Support Available' }
];

const connectOptions = [
    {
        icon: '💬',
        title: 'WhatsApp Chat',
        desc: 'Chat with our team instantly on WhatsApp and get quick answers to your questions.',
        btn: 'Chat on WhatsApp',
        link: 'https://wa.me/917017636563?text=Hi%20Aigurukul!%20I%27m%20interested%20in%20your%20services.'
    },
    {
        icon: '📧',
        title: 'Email Us',
        desc: 'Send us a detailed message about your project and we will respond within 24 hours.',
        btn: 'Send Email',
        link: 'mailto:anvit6852@gmail.com'
    }
];

const socialLinks = [
    { name: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { name: 'Twitter', path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
    { name: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { name: 'Instagram', path: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' },
    { name: 'Discord', path: 'M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z' }
];

const formFields = [
    { id: 'form_name', label: 'Name *', type: 'text', required: true },
    { id: 'form_email', label: 'Email *', type: 'email', required: true },
    { id: 'form_phone', label: 'Phone', type: 'tel', required: false },
    { id: 'form_ip', label: 'IP Address', type: 'text', readonly: true },
    { id: 'form_country', label: 'Country', type: 'text', readonly: true },
    { id: 'form_city', label: 'City', type: 'text', readonly: true },
    { id: 'form_browser', label: 'Browser', type: 'text', readonly: true },
    { id: 'form_os', label: 'Operating System', type: 'text', readonly: true },
    { id: 'form_device', label: 'Device Type', type: 'text', readonly: true },
    { id: 'form_screen', label: 'Screen Resolution', type: 'text', readonly: true },
    { id: 'form_language', label: 'Language', type: 'text', readonly: true },
    { id: 'form_timezone', label: 'Timezone', type: 'text', readonly: true }
];

const tableHeaders = [
    'Timestamp', 'Name', 'Email', 'Phone', 'IP', 'Location', 'Browser', 'OS', 'Actions'
];

// ========================================
// Utility Functions
// ========================================
function createElement(tag, className, content = '') {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content) element.innerHTML = content;
    return element;
}

function getBrowserName() {
    const ua = navigator.userAgent;
    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('Chrome') && !ua.includes('Edg')) return 'Chrome';
    if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari';
    if (ua.includes('Edg')) return 'Edge';
    if (ua.includes('Opera') || ua.includes('OPR')) return 'Opera';
    return 'Unknown';
}

function getOSName() {
    const ua = navigator.userAgent;
    if (ua.includes('Win')) return 'Windows';
    if (ua.includes('Mac')) return 'MacOS';
    if (ua.includes('Linux')) return 'Linux';
    if (ua.includes('Android')) return 'Android';
    if (ua.includes('iOS')) return 'iOS';
    return 'Unknown';
}

// ========================================
// Card Creation Functions
// ========================================
// function createAICard(article) {
//     const card = createElement('div', 'ai-card');
//     card.innerHTML = `
        
//         <img src="${article.image}" alt="${article.title}" class="ai-card-image">
        
//         <div class="ai-card-content">
//             <h3 class="ai-card-title">${article.title}</h3>
//             <p class="ai-card-date">${article.date}</p>
//             <p class="ai-card-desc">${article.desc}</p>
//             <a href="#" class="read-btn">Read</a>
//         </div>
//     `;
//     return card;
// }
function createAICard(article) {
    const card = createElement('div', 'ai-card');
    const whatsappNumber = '917017636563';
    const enquirySubject = article.enquiry || article.title;
    const whatsappMessage = `Hi Aigurukul! 👋\n\nI want to enquire about: *${enquirySubject}*\n\n${article.desc}\n\nPlease provide more information.`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    card.innerHTML = `
        <img src="${article.image}" alt="${article.title}" class="ai-card-image">
        <div class="ai-card-content">
            <h3 class="ai-card-title">${article.title}</h3>
            <p class="ai-card-date">${article.date}</p>
            <p class="ai-card-desc">${article.desc}</p>
            <a href="${whatsappLink}" target="_blank" class="read-btn">Enquire Now</a>
        </div>
    `;
    return card;
}

function createServiceCard(service) {
    const card = createElement('div', 'service-card');
    const features = service.features.map(f => `<li>${f}</li>`).join('');
    card.innerHTML = `
        <span class="service-icon">${service.icon}</span>
        <h3>${service.title}</h3>
        <p>${service.desc}</p>
        <ul class="service-features">${features}</ul>
    `;
    return card;
}

function createProcessStep(step) {
    const stepEl = createElement('div', 'process-step');
    stepEl.innerHTML = `
        <div class="step-number">${step.num}</div>
        <h3>${step.title}</h3>
        <p>${step.desc}</p>
    `;
    return stepEl;
}

function createStatItem(stat) {
    const statEl = createElement('div', 'stat-item');
    statEl.innerHTML = `
        <h3>${stat.val}</h3>
        <p>${stat.label}</p>
    `;
    return statEl;
}

function createConnectCard(option) {
    const card = createElement('div', 'connect-card');
    const target = option.link.startsWith('http') || option.link.startsWith('mailto') ? 'target="_blank"' : '';
    card.innerHTML = `
        <div class="connect-icon">${option.icon}</div>
        <h3>${option.title}</h3>
        <p>${option.desc}</p>
        <a href="${option.link}" ${target} class="cta-btn">${option.btn}</a>
    `;
    return card;
}

function createSocialLink(social) {
    const link = createElement('a', 'social-link');
    link.href = '#';
    link.onclick = () => false;
    link.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="${social.path}"/></svg>`;
    return link;
}

// ========================================
// Render Functions
// ========================================
function renderNavigation() {
    const navLinks = document.getElementById('navLinks');
    navItems.forEach(item => {
        const li = createElement('li');
        const a = createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        li.appendChild(a);
        navLinks.appendChild(li);
    });
}

function renderSection(containerId, items, createFunction) {
    const container = document.getElementById(containerId);
    if (!container) return;
    items.forEach(item => {
        container.appendChild(createFunction(item));
    });
}

function renderAllSections() {
    renderNavigation();
    renderSection('aiCardsContainer', aiArticles, createAICard);
    renderSection('coursesContainer', courses, createAICard);
    renderSection('industryContainer', industryPrograms, createServiceCard);
    renderSection('supportContainer', supportOptions, createAICard);
    renderSection('servicesContainer', services, createServiceCard);
    renderSection('processContainer', processSteps, createProcessStep);
    renderSection('statsContainer', stats, createStatItem);
    renderSection('connectContainer', connectOptions, createConnectCard);
    renderSection('socialLinks', socialLinks, createSocialLink);
}

// ========================================
// Visitor Tracking
// ========================================
async function trackVisitor() {
    const visitorData = {
        id: Date.now(),
        timestamp: new Date().toLocaleString(),
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screenResolution: `${screen.width}x${screen.height}`,
        colorDepth: screen.colorDepth,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        cookiesEnabled: navigator.cookieEnabled,
        onlineStatus: navigator.onLine,
        referrer: document.referrer || 'Direct',
        currentPage: window.location.href,
        browserName: getBrowserName(),
        osName: getOSName()
    };

    try {
        const ipResponse = await fetch(API_IPIFY);
        const ipData = await ipResponse.json();
        visitorData.ipAddress = ipData.ip;

        const geoResponse = await fetch(`${API_IPAPI}/${ipData.ip}/json/`);
        const geoData = await geoResponse.json();
        visitorData.country = geoData.country_name || 'Unknown';
        visitorData.city = geoData.city || 'Unknown';
        visitorData.region = geoData.region || 'Unknown';
        visitorData.postal = geoData.postal || 'Unknown';
        visitorData.latitude = geoData.latitude || 'Unknown';
        visitorData.longitude = geoData.longitude || 'Unknown';
        visitorData.isp = geoData.org || 'Unknown';
    } catch (error) {
        visitorData.ipAddress = 'Unable to fetch';
        visitorData.country = 'Unknown';
        visitorData.city = 'Unknown';
    }

    visitors.push(visitorData);
    localStorage.setItem('orbitVisitors', JSON.stringify(visitors));
}

// ========================================
// Admin Functions
// ========================================
function showAdminLogin() {
    document.getElementById('adminLogin').style.display = 'flex';
}

function closeAdminLogin() {
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminPassword').value = '';
}

function adminLogin() {
    const password = document.getElementById('adminPassword').value;
    if (password === ADMIN_PASSWORD) {
        closeAdminLogin();
        document.getElementById('admin-panel').style.display = 'block';
        document.getElementById('admin-panel').scrollIntoView({ behavior: 'smooth' });
        displayVisitors();
    } else {
        alert('Incorrect password!');
    }
}

function renderFormFields() {
    const form = document.getElementById('visitorForm');
    if (!form) return;

    formFields.forEach(field => {
        const div = createElement('div', 'form-field');
        const label = createElement('label', 'form-label', field.label);
        const input = createElement('input', 'form-input');
        input.type = field.type;
        input.id = field.id;
        if (field.required) input.required = true;
        if (field.readonly) input.readOnly = true;
        
        div.appendChild(label);
        div.appendChild(input);
        form.appendChild(div);
    });

    // Add notes field
    const notesDiv = createElement('div', 'form-field');
    notesDiv.style.gridColumn = '1 / -1';
    const notesLabel = createElement('label', 'form-label', 'Notes');
    const notesTextarea = createElement('textarea', 'form-textarea');
    notesTextarea.id = 'form_notes';
    notesTextarea.rows = 3;
    notesDiv.appendChild(notesLabel);
    notesDiv.appendChild(notesTextarea);
    form.appendChild(notesDiv);

    // Add buttons
    const btnDiv = createElement('div');
    btnDiv.style.gridColumn = '1 / -1';
    btnDiv.style.display = 'flex';
    btnDiv.style.gap = '10px';
    
    const submitBtn = createElement('button', 'btn-primary');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Save Entry';
    submitBtn.style.flex = '1';
    
    const cancelBtn = createElement('button', 'btn-outline');
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.style.flex = '1';
    cancelBtn.onclick = toggleForm;
    
    btnDiv.appendChild(submitBtn);
    btnDiv.appendChild(cancelBtn);
    form.appendChild(btnDiv);
}

function renderTableHeader() {
    const tableHead = document.getElementById('tableHead');
    if (!tableHead) return;
    
    const tr = createElement('tr');
    tr.style.background = 'rgba(102, 126, 234, 0.2)';
    tr.style.textAlign = 'left';
    
    tableHeaders.forEach(header => {
        const th = createElement('th');
        th.style.padding = '12px';
        th.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
        th.textContent = header;
        tr.appendChild(th);
    });
    
    tableHead.appendChild(tr);
}

function displayVisitors() {
    const totalVisitors = document.getElementById('totalVisitors');
    const tableBody = document.getElementById('tableBody');
    const visitorsList = document.getElementById('visitorsList');

    if (totalVisitors) totalVisitors.textContent = visitors.length;

    if (tableBody) {
        tableBody.innerHTML = visitors.slice().reverse().map((v, index) => `
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 12px; color: #b0b0b0;">${v.timestamp}</td>
                <td style="padding: 12px; color: #b0b0b0;">${v.name || 'Anonymous'}</td>
                <td style="padding: 12px; color: #b0b0b0;">${v.email || '-'}</td>
                <td style="padding: 12px; color: #b0b0b0;">${v.phone || '-'}</td>
                <td style="padding: 12px; color: #b0b0b0;">${v.ipAddress}</td>
                <td style="padding: 12px; color: #b0b0b0;">${v.city}, ${v.country}</td>
                <td style="padding: 12px; color: #b0b0b0;">${v.browserName}</td>
                <td style="padding: 12px; color: #b0b0b0;">${v.osName}</td>
                <td style="padding: 12px;">
                    <button onclick="deleteVisitor(${visitors.length - 1 - index})" class="btn-danger" style="padding: 6px 12px; font-size: 12px;">Delete</button>
                </td>
            </tr>
        `).join('');
    }

    if (visitorsList) {
        visitorsList.innerHTML = visitors.slice().reverse().map(v => `
            <div class="visitor-card">
                <div class="visitor-details">
                    <div><span class="detail-label">Timestamp:</span><br><span class="detail-value">${v.timestamp}</span></div>
                    <div><span class="detail-label">Name:</span><br><span class="detail-value">${v.name || 'Anonymous'}</span></div>
                    <div><span class="detail-label">Email:</span><br><span class="detail-value">${v.email || '-'}</span></div>
                    <div><span class="detail-label">Phone:</span><br><span class="detail-value">${v.phone || '-'}</span></div>
                    <div><span class="detail-label">IP Address:</span><br><span class="detail-value">${v.ipAddress}</span></div>
                    <div><span class="detail-label">Location:</span><br><span class="detail-value">${v.city}, ${v.region}, ${v.country}</span></div>
                    <div><span class="detail-label">ISP:</span><br><span class="detail-value">${v.isp}</span></div>
                    <div><span class="detail-label">Browser:</span><br><span class="detail-value">${v.browserName}</span></div>
                    <div><span class="detail-label">OS:</span><br><span class="detail-value">${v.osName}</span></div>
                    <div><span class="detail-label">Device:</span><br><span class="detail-value">${v.deviceType || v.platform}</span></div>
                    <div><span class="detail-label">Screen:</span><br><span class="detail-value">${v.screenResolution}</span></div>
                    <div><span class="detail-label">Language:</span><br><span class="detail-value">${v.language}</span></div>
                    <div><span class="detail-label">Timezone:</span><br><span class="detail-value">${v.timezone}</span></div>
                    <div><span class="detail-label">Referrer:</span><br><span class="detail-value">${v.referrer}</span></div>
                    ${v.notes ? `<div style="grid-column: 1 / -1;"><span class="detail-label">Notes:</span><br><span class="detail-value">${v.notes}</span></div>` : ''}
                </div>
            </div>
        `).join('');
    }
}

function toggleForm() {
    const form = document.getElementById('manualForm');
    if (form.style.display === 'none') {
        form.style.display = 'block';
        autoFillForm();
    } else {
        form.style.display = 'none';
    }
}

async function autoFillForm() {
    document.getElementById('form_browser').value = getBrowserName();
    document.getElementById('form_os').value = getOSName();
    document.getElementById('form_device').value = /Mobile|Android|iPhone|iPad/.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
    document.getElementById('form_screen').value = `${screen.width}x${screen.height}`;
    document.getElementById('form_language').value = navigator.language;
    document.getElementById('form_timezone').value = Intl.DateTimeFormat().resolvedOptions().timeZone;

    try {
        const ipResponse = await fetch(API_IPIFY);
        const ipData = await ipResponse.json();
        document.getElementById('form_ip').value = ipData.ip;

        const geoResponse = await fetch(`${API_IPAPI}/${ipData.ip}/json/`);
        const geoData = await geoResponse.json();
        document.getElementById('form_country').value = geoData.country_name || 'Unknown';
        document.getElementById('form_city').value = geoData.city || 'Unknown';
    } catch (error) {
        document.getElementById('form_ip').value = 'Unable to fetch';
    }
}

function saveFormData(e) {
    e.preventDefault();

    const newVisitor = {
        id: Date.now(),
        timestamp: new Date().toLocaleString(),
        name: document.getElementById('form_name').value,
        email: document.getElementById('form_email').value,
        phone: document.getElementById('form_phone').value,
        ipAddress: document.getElementById('form_ip').value,
        country: document.getElementById('form_country').value,
        city: document.getElementById('form_city').value,
        region: document.getElementById('form_city').value,
        browserName: document.getElementById('form_browser').value,
        osName: document.getElementById('form_os').value,
        deviceType: document.getElementById('form_device').value,
        screenResolution: document.getElementById('form_screen').value,
        language: document.getElementById('form_language').value,
        timezone: document.getElementById('form_timezone').value,
        notes: document.getElementById('form_notes').value,
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        referrer: document.referrer || 'Direct',
        currentPage: window.location.href,
        isp: 'Manual Entry'
    };

    visitors.push(newVisitor);
    localStorage.setItem('orbitVisitors', JSON.stringify(visitors));

    document.getElementById('visitorForm').reset();
    toggleForm();
    displayVisitors();
    alert('Entry saved successfully!');
}

function deleteVisitor(index) {
    if (confirm('Are you sure you want to delete this entry?')) {
        visitors.splice(index, 1);
        localStorage.setItem('orbitVisitors', JSON.stringify(visitors));
        displayVisitors();
    }
}

function clearVisitorData() {
    if (confirm('Are you sure you want to clear all visitor data?')) {
        localStorage.removeItem('orbitVisitors');
        visitors = [];
        displayVisitors();
    }
}

function exportData() {
    const csv = ['Timestamp,Name,Email,Phone,IP Address,Country,City,Region,ISP,Browser,OS,Device,Screen,Language,Timezone,Referrer,Notes'].concat(
        visitors.map(v => `"${v.timestamp}","${v.name || 'Anonymous'}","${v.email || ''}","${v.phone || ''}","${v.ipAddress}","${v.country}","${v.city}","${v.region}","${v.isp}","${v.browserName}","${v.osName}","${v.deviceType || v.platform}","${v.screenResolution}","${v.language}","${v.timezone}","${v.referrer}","${v.notes || ''}"`)
    ).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `visitors_${Date.now()}.csv`;
    a.click();
}

// ========================================
// Mobile Menu Toggle
// ========================================
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// ========================================
// Video Player
// ========================================
function initVideoPlayer() {
    const video = document.getElementById('bgVideo');
    if (!video) return;

    // Set video attributes for better mobile compatibility
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.muted = true;

    // Attempt to play
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log('Video autoplay started');
        }).catch(error => {
            console.log('Autoplay prevented, trying muted play:', error);
            video.muted = true;
            video.play().catch(err => {
                console.log('Video play failed:', err);
                // Hide video if it can't play
                if (video.error) {
                    video.style.display = 'none';
                }
            });
        });
    }

    // Play on user interaction
    document.addEventListener('touchstart', () => {
        if (video.paused) {
            video.play().catch(e => console.log('Touch play failed:', e));
        }
    }, { once: true });
    
    document.addEventListener('click', () => {
        if (video.paused) {
            video.play().catch(e => console.log('Click play failed:', e));
        }
    }, { once: true });
}

// ========================================
// Smooth Scroll
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ========================================
// Navigation Shadow on Scroll
// ========================================
function initNavScroll() {
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.nav');
        nav.style.boxShadow = window.scrollY > 50 
            ? '0 4px 20px rgba(0,0,0,0.15)' 
            : '0 2px 10px rgba(0,0,0,0.1)';
    });
}

// ========================================
// Initialization
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    renderAllSections();
    renderFormFields();
    renderTableHeader();
    trackVisitor();
    initSmoothScroll();
    initNavScroll();
    initMobileMenu();
});

window.addEventListener('load', initVideoPlayer);
