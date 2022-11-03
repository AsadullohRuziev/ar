import mock1 from './assets/portfolio/mock1.png';



const logotext = "Asadulloh";
const meta = {
    title: "Asadulloh",
    description: "I’m Asadulloh Frontend  devloper,currently working in Tashkent",
};

const introdata = {
    title: "I’m Asadulloh Ruziev",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop Web apps",
    },
    description: "Having an integrated, holistic vision of IT and how it gears the business at various levels, touching plenty of dimensions, and being experienced at either of them. Design, building, and review of business-IT environments frameworks (big systems), revealing and leveraging untapped opportunities, delivering value to business, being in pace with technologies, leveraging best practices and going beyond. ",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "a bit about my self",
    aboutme: "Now I would like to tell you something about my own background. I graduated from Academic lyceum of Termez State University in 📅2017 – 2019 with a degree Social Sciences GPA 4.82, after which I worked in the Frontend developer field . My years at university awakened a life long interest in Web development, UX & UI Design, Mobile apps and so on",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [
    {
        name: "HTML, CSS",
        value: 89,
    },
    {
        name: "SASS, Bootstrap, Tailwind CSS, Material-UI",
        value: 75,
    },
    {
        name: "Javascript, Typescript",
        value: 91,
    },
    {
        name: "React, Context API, Redux",
        value: 85,
    },
    {
        name: "Nodejs, Express.js",
        value: 60,
    },
    {
        name: "PostgreSQL, MySQL, MongoDB",
        value: 65,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];
const dataportfolio = [{
        img: mock1,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "https://city-tours-seven.vercel.app/",
    },
    // {
    //     img: "https://picsum.photos/400/800/?grayscale",
    //     desctiption: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     desctiption: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/600/?grayscale",
    //     desctiption: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/300/?grayscale",
    //     desctiption: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/700/?grayscale",
    //     desctiption: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    //
    // {
    //     img: "https://picsum.photos/400/600/?grayscale",
    //     desctiption: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/300/?grayscale",
    //     desctiption: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     desctiption: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/550/?grayscale",
    //     desctiption: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     desctiption: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/700/?grayscale",
    //     desctiption: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
];

const contactConfig = {
    YOUR_EMAIL: "asadullohruziev@gmail.com",
    YOUR_FONE: "(+998) 99-679-54-07",
    description: "Tashkent, Uzbekistan",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/AsadullohRuziev?tab=repositories",
    // facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/asadullohruziev/",
    // twitter: "https://twitter.com",
    // youtube: "https://youtube.com",
    // twitch: "https://twitch.com",
    mail: 'asadullohruziev@gmail.com'
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
