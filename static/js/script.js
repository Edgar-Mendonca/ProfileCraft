// Function to generate the README content
function generateReadmeContent() {
    // Collect user input values
    const username = document.getElementById("username").value;
    const fullName = document.getElementById("fullName").value;
    const aboutMe = document.getElementById("aboutMe").value;

    // Collect user input values for Working On section
    const workingOnText = document.getElementById("workingOnText").value;
    const workingOnURL = document.getElementById("workingOnURL").value;

    // Collect user input values for Collaborate section
    const collaborateText = document.getElementById("collaborateText").value;
    const collaborateURL = document.getElementById("collaborateURL").value;

    // Collect user input values for Help With section
    const helpWithText = document.getElementById("helpWithText").value;
    const helpWithURL = document.getElementById("helpWithURL").value;

    // Collect user input values for Learning section
    const learningText = document.getElementById("learningText").value;
    const learningURL = document.getElementById("learningURL").value;

    // Collect user input values for Ask Me section
    const askMeText = document.getElementById("askMeText").value;
    const askMeURL = document.getElementById("askMeURL").value;

    // Collect user input values for Reach Me section
    const reachMeText = document.getElementById("reachMeText").value;
    const reachMeURL = document.getElementById("reachMeURL").value;

    // Collect user input values for Projects section
    const projectsText = document.getElementById("projectsText").value;
    const projectsURL = document.getElementById("projectsURL").value;

    // Collect user input values for Articles section
    const articlesText = document.getElementById("articlesText").value;
    const articlesURL = document.getElementById("articlesURL").value;

    // Collect user input values for Experiences section
    const experiencesText = document.getElementById("experiencesText").value;
    const experiencesURL = document.getElementById("experiencesURL").value;

    // Collect user input values for Fun Fact section
    const funFactText = document.getElementById("funFactText").value;

    // Collect user input values for Connect with me section
    const githubUsername = document.getElementById("githubUsername").value;
    const twitterUsername = document.getElementById("twitterUsername").value;
    const youtubeUsername = document.getElementById("youtubeUsername").value;
    const instagramUsername = document.getElementById("instagramUsername").value;

    // Construct README content
    let readmeContent = `# ${fullName ? fullName : username}\n\n`;
    readmeContent += `![Profile Views](https://komarev.com/ghpvc/?username=${username}&color=green)\n\n`;
    readmeContent += `## 📝 About Me\n${aboutMe ? aboutMe : 'Add a brief description about yourself.'}\n\n`;

    // Working On
    if (workingOnText || workingOnURL) {
        readmeContent += `## 🛠️ I’m currently working on\n`;
        readmeContent += `${workingOnText ? `${workingOnText}` : ''}${workingOnURL ? ` ([${workingOnURL}](${workingOnURL}))` : ''}\n\n`;
    }

    // Collaborate
    if (collaborateText || collaborateURL) {
        readmeContent += `## 🧑‍🤝‍🧑 I’m looking to collaborate on\n`;
        readmeContent += `${collaborateText ? `${collaborateText}` : ''}${collaborateURL ? ` ([${collaborateURL}](${collaborateURL}))` : ''}\n\n`;
    }

    // Help With
    if (helpWithText || helpWithURL) {
        readmeContent += `## 💁 I’m looking for help with\n`;
        readmeContent += `${helpWithText ? `${helpWithText}` : ''}${helpWithURL ? ` ([${helpWithURL}](${helpWithURL}))` : ''}\n\n`;
    }

    // Learning
    if (learningText || learningURL) {
        readmeContent += `## 📒 I’m currently learning\n`;
        readmeContent += `${learningText ? `${learningText}` : ''}${learningURL ? ` ([${learningURL}](${learningURL}))` : ''}\n\n`;
    }

    // Ask Me
    if (askMeText || askMeURL) {
        readmeContent += `## 💬 Ask me about\n`;
        readmeContent += `${askMeText ? `${askMeText}` : ''}${askMeURL ? ` ([${askMeURL}](${askMeURL}))` : ''}\n\n`;
    }

    // Reach Me
    if (reachMeText || reachMeURL) {
        readmeContent += `## 📬 How to reach me\n`;
        readmeContent += `${reachMeText ? `${reachMeText}` : ''}${reachMeURL ? ` ([${reachMeURL}](${reachMeURL}))` : ''}\n\n`;
    }

    // Projects
    if (projectsText || projectsURL) {
        readmeContent += `## 💻 All of my projects are available at\n`;
        readmeContent += `${projectsText ? `${projectsText}` : ''}${projectsURL ? ` ([${projectsURL}](${projectsURL}))` : ''}\n\n`;
    }

    // Articles
    if (articlesText || articlesURL) {
        readmeContent += `## ✍️ I regularly write articles on\n`;
        readmeContent += `${articlesText ? `${articlesText}` : ''}${articlesURL ? ` ([${articlesURL}](${articlesURL}))` : ''}\n\n`;
    }

    // Experiences
    if (experiencesText || experiencesURL) {
        readmeContent += `## 🧑‍💼 Know about my experiences\n`;
        readmeContent += `${experiencesText ? `${experiencesText}` : ''}${experiencesURL ? ` ([${experiencesURL}](${experiencesURL}))` : ''}\n\n`;
    }

    // Fun Fact
    if (funFactText) {
        readmeContent += `## 💡 Fun fact\n`;
        readmeContent += `${funFactText}\n\n`;
    }

    // Connect with me
    readmeContent += `## 🔗 Connect with me\n`;

    if (githubUsername) {
        readmeContent += `<a href="https://github.com/${githubUsername}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/material-outlined/48/github.png" alt="github"/></a>&nbsp;&nbsp;&nbsp;`;
    }

    if (twitterUsername) {
        readmeContent += `<a href="https://twitter.com/${twitterUsername}" target="_blank"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1"/></a>&nbsp;&nbsp;&nbsp;`;
    }

    if (youtubeUsername) {
        readmeContent += `<a href="https://www.youtube.com/${youtubeUsername}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play"/></a>&nbsp;&nbsp;&nbsp;`;
    }

    if (instagramUsername) {
        readmeContent += `<a href="https://www.instagram.com/${instagramUsername}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/></a>&nbsp;&nbsp;&nbsp;`;
    }

    readmeContent += `\n\n`;

    return readmeContent;
}

// Function to update the live preview
function updateLivePreview() {
    const livePreview = document.getElementById("livePreview");
    const readmeContent = generateReadmeContent();
    livePreview.textContent = readmeContent;
}

// Event listener for input changes in the "About Me" section
document.getElementById("aboutMe").addEventListener("input", updateLivePreview);

// Event listener for input changes in the "Username and Full Name" sections
document.getElementById("username").addEventListener("input", updateLivePreview);
document.getElementById("fullName").addEventListener("input", updateLivePreview);

// Event listener for input changes in the "Profile Highlights" sections
document.getElementById("workingOnText").addEventListener("input", updateLivePreview); 
document.getElementById("workingOnURL").addEventListener("input", updateLivePreview);

document.getElementById("collaborateText").addEventListener("input", updateLivePreview); 
document.getElementById("collaborateURL").addEventListener("input", updateLivePreview);

document.getElementById("helpWithText").addEventListener("input", updateLivePreview); 
document.getElementById("helpWithURL").addEventListener("input", updateLivePreview);

document.getElementById("learningText").addEventListener("input", updateLivePreview); 
document.getElementById("learningURL").addEventListener("input", updateLivePreview);

document.getElementById("askMeText").addEventListener("input", updateLivePreview); 
document.getElementById("askMeURL").addEventListener("input", updateLivePreview);

document.getElementById("reachMeText").addEventListener("input", updateLivePreview); 
document.getElementById("reachMeURL").addEventListener("input", updateLivePreview);

document.getElementById("projectsText").addEventListener("input", updateLivePreview); 
document.getElementById("projectsURL").addEventListener("input", updateLivePreview);

document.getElementById("articlesText").addEventListener("input", updateLivePreview); 
document.getElementById("articlesURL").addEventListener("input", updateLivePreview);

document.getElementById("experiencesText").addEventListener("input", updateLivePreview); 
document.getElementById("experiencesURL").addEventListener("input", updateLivePreview);

document.getElementById("funFactText").addEventListener("input", updateLivePreview); 

// Event listeners for input changes in the "Connect with me" section
document.getElementById("githubUsername").addEventListener("input", updateLivePreview);
document.getElementById("twitterUsername").addEventListener("input", updateLivePreview);
document.getElementById("youtubeUsername").addEventListener("input", updateLivePreview);
document.getElementById("instagramUsername").addEventListener("input", updateLivePreview);

// Initial live preview update
updateLivePreview();

// Function to download the README
function downloadReadme() {
    const readmeContent = generateReadmeContent();
    const blob = new Blob([readmeContent], { type: 'text/markdown' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'README.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Function to save form data to localStorage
function saveFormData() {
    const formData = {
        username: document.getElementById("username").value,
        fullName: document.getElementById("fullName").value,
        aboutMe: document.getElementById("aboutMe").value,
        workingOnText: document.getElementById("workingOnText").value,
        workingOnURL: document.getElementById("workingOnURL").value,
        collaborateText: document.getElementById("collaborateText").value,
        collaborateURL: document.getElementById("collaborateURL").value,
        helpWithText: document.getElementById("helpWithText").value,
        helpWithURL: document.getElementById("helpWithURL").value,
        learningText: document.getElementById("learningText").value,
        learningURL: document.getElementById("learningURL").value,
        askMeText: document.getElementById("askMeText").value,
        askMeURL: document.getElementById("askMeURL").value,
        reachMeText: document.getElementById("reachMeText").value,
        reachMeURL: document.getElementById("reachMeURL").value,
        projectsText: document.getElementById("projectsText").value,
        projectsURL: document.getElementById("projectsURL").value,
        articlesText: document.getElementById("articlesText").value,
        articlesURL: document.getElementById("articlesURL").value,
        experiencesText: document.getElementById("experiencesText").value,
        experiencesURL: document.getElementById("experiencesURL").value,
        funFactText: document.getElementById("funFactText").value,
        githubUsername: document.getElementById("githubUsername").value,
        twitterUsername: document.getElementById("twitterUsername").value,
        youtubeUsername: document.getElementById("youtubeUsername").value,
        instagramUsername: document.getElementById("instagramUsername").value,
    };

    localStorage.setItem('formData', JSON.stringify(formData));
}

// Function to load form data from localStorage
function loadFormData() {
    const savedFormData = localStorage.getItem('formData');

    if (savedFormData) {
        const formData = JSON.parse(savedFormData);

        document.getElementById("username").value = formData.username || '';
        document.getElementById("fullName").value = formData.fullName || '';
        document.getElementById("aboutMe").value = formData.aboutMe || '';
        document.getElementById("workingOnText").value = formData.workingOnText || '';
        document.getElementById("workingOnURL").value = formData.workingOnURL || '';
        document.getElementById("collaborateText").value = formData.collaborateText || '';
        document.getElementById("collaborateURL").value = formData.collaborateURL || '';
        document.getElementById("helpWithText").value = formData.helpWithText || '';
        document.getElementById("helpWithURL").value = formData.helpWithURL || '';
        document.getElementById("learningText").value = formData.learningText || '';
        document.getElementById("learningURL").value = formData.learningURL || '';
        document.getElementById("askMeText").value = formData.askMeText || '';
        document.getElementById("askMeURL").value = formData.askMeURL || '';
        document.getElementById("reachMeText").value = formData.reachMeText || '';
        document.getElementById("reachMeURL").value = formData.reachMeURL || '';
        document.getElementById("projectsText").value = formData.projectsText || '';
        document.getElementById("projectsURL").value = formData.projectsURL || '';
        document.getElementById("articlesText").value = formData.articlesText || '';
        document.getElementById("articlesURL").value = formData.articlesURL || '';
        document.getElementById("experiencesText").value = formData.experiencesText || '';
        document.getElementById("experiencesURL").value = formData.experiencesURL || '';
        document.getElementById("funFactText").value = formData.funFactText || '';
        document.getElementById("githubUsername").value = formData.githubUsername || '';
        document.getElementById("twitterUsername").value = formData.twitterUsername || '';
        document.getElementById("youtubeUsername").value = formData.youtubeUsername || '';
        document.getElementById("instagramUsername").value = formData.instagramUsername || '';
    }
}

// Initial live preview update
updateLivePreview();
// Load form data when the page is loaded
loadFormData();
