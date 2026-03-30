export const productCategories = [
    { label: 'All category', value: 'all' },
    { label: 'Deals', value: 'deals' },
    { label: 'Home', value: 'home' },
    { label: 'Electronics', value: 'electronics' },
    { label: 'Recommended', value: 'recommended' },
];

export const heroCategoryLinks = [
    { label: 'Automobiles', category: 'deals' },
    { label: 'Clothes and wear', category: 'recommended' },
    { label: 'Home interiors', category: 'home' },
    { label: 'Computer and tech', category: 'electronics' },
    { label: 'Tools, equipments', category: 'deals' },
    { label: 'Sports and outdoor', category: 'recommended' },
    { label: 'Animal and pets', category: 'recommended' },
    { label: 'Machinery tools', category: 'electronics' },
    { label: 'More category', path: '/categories' },
];

export const topNavLinks = [
    { label: 'Hot offers', path: '/shop?category=deals&tag=hot-offers' },
    { label: 'Gift boxes', path: '/shop?category=recommended&tag=gift-boxes' },
    { label: 'Projects', path: '/shop?category=electronics&tag=projects' },
    { label: 'Menu item', path: '/shop?category=home&tag=menu-item' },
    { label: 'Help', path: '/help' },
];

export const localeOptions = [
    { label: 'English, USD', language: 'English', currency: 'USD' },
    { label: 'English, EUR', language: 'English', currency: 'EUR' },
    { label: 'French, EUR', language: 'French', currency: 'EUR' },
    { label: 'German, EUR', language: 'German', currency: 'EUR' },
];

export const shipToOptions = [
    { label: 'Germany', code: 'DE', emoji: '🇩🇪' },
    { label: 'United States', code: 'US', emoji: '🇺🇸' },
    { label: 'France', code: 'FR', emoji: '🇫🇷' },
    { label: 'United Kingdom', code: 'GB', emoji: '🇬🇧' },
    { label: 'United Arab Emirates', code: 'AE', emoji: '🇦🇪' },
];

export const footerLinkSections = [
    {
        title: 'About',
        links: [
            { label: 'About Us', path: '/content/about-us' },
            { label: 'Find store', path: '/content/find-store' },
            { label: 'Categories', path: '/categories' },
            { label: 'Blogs', path: '/content/blogs' },
        ],
    },
    {
        title: 'Partnership',
        links: [
            { label: 'About Us', path: '/content/partnership-about' },
            { label: 'Find store', path: '/content/partnership-stores' },
            { label: 'Categories', path: '/content/partnership-categories' },
            { label: 'Blogs', path: '/content/partnership-blogs' },
        ],
    },
    {
        title: 'Information',
        links: [
            { label: 'Help Center', path: '/help' },
            { label: 'Money Refund', path: '/content/money-refund' },
            { label: 'Shipping', path: '/content/shipping' },
            { label: 'Contact us', path: '/content/contact-us' },
        ],
    },
    {
        title: 'For users',
        links: [
            { label: 'Login', path: '/profile?tab=login' },
            { label: 'Register', path: '/profile?tab=register' },
            { label: 'Settings', path: '/settings' },
            { label: 'My Orders', path: '/orders' },
        ],
    },
];

export const contentPageMeta = {
    'about-us': {
        title: 'About Us',
        subtitle: 'Learn how our marketplace helps global buyers and suppliers connect securely.',
    },
    'find-store': {
        title: 'Find Store',
        subtitle: 'Discover verified sellers near your preferred shipping destination.',
    },
    blogs: {
        title: 'Blogs',
        subtitle: 'Read product trends, sourcing advice, and practical ecommerce tips.',
    },
    'partnership-about': {
        title: 'Partnership Overview',
        subtitle: 'Build strategic supplier partnerships with long-term growth opportunities.',
    },
    'partnership-stores': {
        title: 'Partnership Stores',
        subtitle: 'Explore trusted store partners open to collaborations and wholesale deals.',
    },
    'partnership-categories': {
        title: 'Partnership Categories',
        subtitle: 'See categories where partnership demand and opportunities are strongest.',
    },
    'partnership-blogs': {
        title: 'Partnership Blogs',
        subtitle: 'Expert resources on scaling partnerships and improving supplier performance.',
    },
    'money-refund': {
        title: 'Money Refund Policy',
        subtitle: 'Understand how refunds, disputes, and protections work on the platform.',
    },
    shipping: {
        title: 'Shipping Information',
        subtitle: 'Compare shipping options, timelines, and global delivery availability.',
    },
    'contact-us': {
        title: 'Contact Us',
        subtitle: 'Reach our support team for account, order, and technical assistance.',
    },
};
