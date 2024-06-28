export interface ContentItem {
    subheader?: string;
    text: string;
}

export interface CardItem {
    cardImage: string | null;
    figurePosition: 'left' | 'right';
    header: string;
    content: ContentItem[];
}

export const aboutCardItems: CardItem[] = [
    {
        cardImage: "https://farm66.staticflickr.com/65535/buddyicons/200541906@N03_r.jpg?1713905173#200541906@N03",
        figurePosition: "right",
        header: "Company Summary",
        content: [{text: "Sprobest Media Ltd. is a leading media company specializing in providing high-quality video conferencing and live streaming services, as well as exceptional film and editing services for corporate events, documentaries, weddings, and various social gatherings. With years of industry experience, our skilled team of professionals is dedicated to delivering outstanding media solutions that capture and immortalize your most important moments. We provide high-quality media solutions to individuals, businesses, and organisations across various industries"}]
    },
    {
        cardImage: "https://farm66.staticflickr.com/65535/buddyicons/200541906@N03_r.jpg?1713905173#200541906@N03",
        figurePosition: "right",
        header: "Company Mission",
        content: [{text: "To provide unparalleled media services that inspire, inform, and empower audiences globally. Through innovative content creation, advanced technology utilization, and unwavering commitment to excellence, we strive to set the standard for media service delivery, enhancing the way people connect, engage, and perceive the world around them."}]
    },
    {
        cardImage: "https://farm66.staticflickr.com/65535/buddyicons/200541906@N03_r.jpg?1713905173#200541906@N03",
        figurePosition: "left",
        header: "Company Vision",
        content: [{text: "Our vision is to be the foremost leader in the media industry, recognized for our relentless pursuit of excellence, integrity, and creativity. We envision a future where our media services transcend boundaries, enriching lives, fostering understanding, and driving positive change on a global scale. By continuously pushing the boundaries of what media can achieve, we aspire to shape the future of communication, entertainment, and information dissemination."}]
    },
    {
        cardImage: null,
        figurePosition: "left",
        header: "Company Values",
        content: [
            {
                subheader: "Integrity",
                text: "We uphold the highest ethical standards in all aspects of our operations. Transparency, honesty, and accountability are fundamental to our relationships with employees, clients, partners, and the communities we serve."
            },
            {
                subheader: "Innovation",
                text: "We embrace innovation as the cornerstone of our success. We proactively seek new ideas, technologies, and approaches to media delivery, constantly pushing the boundaries to stay ahead in a rapidly evolving industry."
            },
            {
                subheader: "Diversity and Inclusion",
                text: "We celebrate diversity in all its forms and are committed to fostering an inclusive environment where everyone feels valued, respected, and empowered to contribute their unique perspectives and talents."
            },
            {
                subheader: "Collaboration",
                text: "We believe in the power of collaboration and teamwork. By fostering a culture of cooperation, communication, and mutual respect, we harness the collective talents of our diverse workforce to achieve our shared goals."
            },
            {
                subheader: "Customer Focus",
                text: "Our customers are at the heart of everything we do. We are dedicated to understanding their needs, exceeding their expectations, and delivering exceptional value through personalized, customer-centric media solutions."
            },
            {
                subheader: "Social Responsibility",
                text: "We recognize our responsibility to society and the planet. We are committed to making a positive impact through environmentally sustainable practices, community engagement, and support for social causes that align with our values."
            },
            {
                subheader: "Continuous Learning",
                text: "We embrace a culture of lifelong learning and personal development. We encourage curiosity, experimentation, and ongoing education to adapt to change, seize new opportunities, and stay at the forefront of the media industry."
            }
        ]
    }
];