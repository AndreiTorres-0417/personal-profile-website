// Vue application - Chatgpt
const app = Vue.createApp({});

app.component('survey-form', {
    template: `
        <form @submit.prevent="submitSurvey">
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="surveyData.name" required>
            </div>
            <div>
                <label for="age">Age:</label>
                <input type="number" id="age" v-model="surveyData.age" required>
            </div>
            <div>
                <label for="feedback">Feedback:</label>
                <textarea id="feedback" v-model="surveyData.feedback"></textarea>
            </div>
            <div>
                <label>Preferred Contact Method:</label>
                <label>
                    <input type="radio" value="Email" v-model="surveyData.contactMethod"> Email
                </label>
                <label>
                    <input type="radio" value="Phone" v-model="surveyData.contactMethod"> Phone
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
        <div v-if="submitted">
            <h3>Survey Submitted</h3>
            <p><strong>Name:</strong> {{ surveyData.name }}</p>
            <p><strong>Age:</strong> {{ surveyData.age }}</p>
            <p><strong>Feedback:</strong> {{ surveyData.feedback }}</p>
            <p><strong>Preferred Contact Method:</strong> {{ surveyData.contactMethod }}</p>
        </div>
    `,
    data() {
        return {
            surveyData: {
                name: '',
                age: null,
                feedback: '',
                contactMethod: '',
            },
            submitted: false,
        };
    },
    methods: {
        submitSurvey() {
            this.submitted = true;
        },
    },
});

app.mount('#survey-app');

// Content switching logic - Chatgpt
function changeContent(section) {
    const content = document.getElementById('dynamic-content');
    const gallery = document.getElementById('gallery-app');

    // Content
    const sections = {
        'about-me': `
            <h2>About Me</h2>
            <p>
                Hi, my name is Andrei Luis M. Torres, born on April 17, 2003. In my free time, I play a lot of video games as my hobby, 
                which has sparked my interest in programming. Some of my favorite games are Lethal Company, Terraria, Project Zomboid, 
                Tetris, and Clash of Clans. I enjoy how each one offers something unique—whether it’s the strategy of 
                Clash of Clans or the creativity and exploration in Terraria. 
            </p>
            
            <p>
                I am learning about coding and working on small projects to improve my skills. 
                I am passionate about software development and hope to someday create my own applications.
                Gaming has shaped my hobbies and goals, and I am excited to see where this journey takes me.
            </p>

        `,
        'education': `
            <h2>Education</h2>
            <p>
                I studied in LH Montessori High Inc. from pre-school to 9th grade, ICA from 10th to 12th grade, UPLB in 1st year college, 
                and here at APC from 2nd year to 3rd year in college.
            </p>
        `,
        'course-and-experience': `
            <h2>Course and Experience</h2>
            <p>
                I am currently in college taking courses in programming and web development. I also study software development through the use 
                of Unity as my preferred engine to work with. Programming languages I know are Python and C#.
            </p>
        `,
        'contact': `
            <h2>Contact</h2>
            <p>
                I am available to contact mostly on weekdays. You can reach me via my email at 
                <strong>amtorres2@student.apc.edu.ph</strong> or on Facebook at 
                <strong><a href="https://www.facebook.com/andreiluis.torres" target="_blank">https://www.facebook.com/andreiluis.torres</a></strong>.
                Whether you have a question, want to discuss an idea, or just want to get in touch, feel free to send me a message anytime. 
                I’ll do my best to respond as quickly as possible.
            </p>
`,


    };

    const sectionImages = {
        'about-me': [
            { src: 'https://github.com/AndreiTorres-0417/personal-profile-website/blob/main/photos/Feeding%20Al.jpg?raw=true', alt: 'Image 1' },
            { src: 'https://github.com/AndreiTorres-0417/personal-profile-website/blob/main/photos/With%20Dex.jpg?raw=true', alt: 'Image 2' },
        ],
        'education': [
            { src: 'https://github.com/AndreiTorres-0417/personal-profile-website/blob/main/photos/LH%20+%20ICA%20logo.jpg?raw=true', alt: 'Education Image 1' },
            { src: 'https://github.com/AndreiTorres-0417/personal-profile-website/blob/main/photos/UPLB%20+%20APC%20logo.png?raw=true', alt: 'Education Image 2' },
        ],
        'course-and-experience': [
            { src: 'https://github.com/AndreiTorres-0417/personal-profile-website/blob/main/photos/Unity%20Logo.jpg?raw=true', alt: 'Course Image 1' },
            { src: 'https://github.com/AndreiTorres-0417/personal-profile-website/blob/main/photos/Python%20logo.png?raw=true', alt: 'Course Image 2' },
        ],
        'contact': [
            { src: 'https://github.com/AndreiTorres-0417/personal-profile-website/blob/main/photos/Messenger%20logo.png?raw=true', alt: 'Contact Image 1' },
            { src: 'https://github.com/AndreiTorres-0417/personal-profile-website/blob/main/photos/Email%20logo.png?raw=true', alt: 'Contact Image 2' },
        ],
    };

    // Chatgpt suggested
    if (sections[section]) {
        content.innerHTML = sections[section];
    }

    
    if (sectionImages[section]) {
        gallery.innerHTML = sectionImages[section]
            .map(
                (image) =>
                    `<img src="${image.src}" alt="${image.alt}" style="width: 150px; border-radius: 10px; margin: 10px;">`
            )
            .join('');
    }
}

// Modal handling
function openModal() {
    document.querySelector('.modal').style.display = 'flex';
}

function closeModal() {
    document.querySelector('.modal').style.display = 'none';
}

// Set "About Me" as default on page load - Chatgpt
document.addEventListener('DOMContentLoaded', () => {
    changeContent('about-me');
});
