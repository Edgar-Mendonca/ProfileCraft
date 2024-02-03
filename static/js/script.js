function toggleInputFields(checkboxId, textInputId, urlInputId) {
    const checkbox = document.getElementById(checkboxId);
    const textInput = document.getElementById(textInputId);
    const urlInput = document.getElementById(urlInputId);

    textInput.disabled = !checkbox.checked;
    urlInput.disabled = !checkbox.checked;
}

document.getElementById("enableWorkingOn").addEventListener("change", function () {
    toggleInputFields("enableWorkingOn", "workingOnText", "workingOnURL");
});

document.getElementById("enableCollaborate").addEventListener("change", function () {
    toggleInputFields("enableCollaborate", "collaborateText", "collaborateURL");
});

document.getElementById("enableHelpWith").addEventListener("change", function () {
    toggleInputFields("enableHelpWith", "helpWithText", "helpWithURL");
});

document.getElementById("enableLearning").addEventListener("change", function () {
    toggleInputFields("enableLearning", "learningText", "learningURL");
});

document.getElementById("enableAskMe").addEventListener("change", function () {
    toggleInputFields("enableAskMe", "askMeText", "askMeURL");
});

document.getElementById("enableReachMe").addEventListener("change", function () {
    toggleInputFields("enableReachMe", "reachMeText", "reachMeURL");
});

document.getElementById("enableProjects").addEventListener("change", function () {
    toggleInputFields("enableProjects", "projectsText", "projectsURL");
});

document.getElementById("enableArticles").addEventListener("change", function () {
    toggleInputFields("enableArticles", "articlesText", "articlesURL");
});

document.getElementById("enableExperiences").addEventListener("change", function () {
    toggleInputFields("enableExperiences", "experiencesText", "experiencesURL");
});

document.getElementById("enableFunFact").addEventListener("change", function () {
    toggleInputFields("enableFunFact", "funFactText", null);
});


// Function to generate the README content
function generateReadmeContent() {
    // Collect user input values
    const username = document.getElementById("username").value;
    const fullName = document.getElementById("fullName").value;
    const aboutMe = document.getElementById("aboutMe").value;

    // Working On
    const includeWorkingOn = document.getElementById("enableWorkingOn").checked;
    const workingOnText = document.getElementById("workingOnText").value;
    const workingOnURL = document.getElementById("workingOnURL").value;

    // Collaborate
    const includeCollaborate = document.getElementById("enableCollaborate").checked;
    const collaborateText = document.getElementById("collaborateText").value;
    const collaborateURL = document.getElementById("collaborateURL").value;

    // Help With
    const includeHelpWith = document.getElementById("enableHelpWith").checked;
    const helpWithText = document.getElementById("helpWithText").value;
    const helpWithURL = document.getElementById("helpWithURL").value;

    // Learning
    const includeLearning = document.getElementById("enableLearning").checked;
    const learningText = document.getElementById("learningText").value;
    const learningURL = document.getElementById("learningURL").value;

    // Ask Me
    const includeAskMe = document.getElementById("enableAskMe").checked;
    const askMeText = document.getElementById("askMeText").value;
    const askMeURL = document.getElementById("askMeURL").value;

    // Reach Me
    const includeReachMe = document.getElementById("enableReachMe").checked;
    const reachMeText = document.getElementById("reachMeText").value;
    const reachMeURL = document.getElementById("reachMeURL").value;

    // Projects
    const includeProjects = document.getElementById("enableProjects").checked;
    const projectsText = document.getElementById("projectsText").value;
    const projectsURL = document.getElementById("projectsURL").value;

    // Articles
    const includeArticles = document.getElementById("enableArticles").checked;
    const articlesText = document.getElementById("articlesText").value;
    const articlesURL = document.getElementById("articlesURL").value;

    // Experiences
    const includeExperiences = document.getElementById("enableExperiences").checked;
    const experiencesText = document.getElementById("experiencesText").value;
    const experiencesURL = document.getElementById("experiencesURL").value;

    // Fun Fact
    const includeFunFact = document.getElementById("enableFunFact").checked;
    const funFactText = document.getElementById("funFactText").value;

    // Construct README content
    let readmeContent = `# ${fullName ? fullName : username}\n\n`;
    readmeContent += `![Profile Views](https://komarev.com/ghpvc/?username=${username}&color=green)\n\n`;
    readmeContent += `## About Me\n${aboutMe ? aboutMe : 'Add a brief description about yourself.'}\n\n`;

    if (includeWorkingOn) {
        readmeContent += `## 🔭 I’m currently working on\n`;
        readmeContent += `- ${workingOnText ? workingOnText : 'Describe your current projects'} `;
        readmeContent += `([${workingOnURL ? 'Link' : 'Add link'}](${workingOnURL ? workingOnURL : ''}))\n\n`;
    }

    if (includeCollaborate) {
        readmeContent += `## 👯 I’m looking to collaborate on\n`;
        readmeContent += `- ${collaborateText ? collaborateText : 'Specify areas you\'re interested in collaborating'} `;
        readmeContent += `([${collaborateURL ? 'Link' : 'Add link'}](${collaborateURL ? collaborateURL : ''}))\n\n`;
    }

    if (includeHelpWith) {
        readmeContent += `## 🤝 I’m looking for help with\n`;
        readmeContent += `- ${helpWithText ? helpWithText : 'Describe what you need help with'} `;
        readmeContent += `([${helpWithURL ? 'Link' : 'Add link'}](${helpWithURL ? helpWithURL : ''}))\n\n`;
    }

    if (includeLearning) {
        readmeContent += `## 🌱 I’m currently learning\n`;
        readmeContent += `- ${learningText ? learningText : 'List topics or technologies you are currently learning'} `;
        readmeContent += `([${learningURL ? 'Link' : 'Add link'}](${learningURL ? learningURL : ''}))\n\n`;
    }

    if (includeAskMe) {
        readmeContent += `## 💬 Ask me about\n`;
        readmeContent += `- ${askMeText ? askMeText : 'What topics are you knowledgeable about?'} `;
        readmeContent += `([${askMeURL ? 'Link' : 'Add link'}](${askMeURL ? askMeURL : ''}))\n\n`;
    }

    if (includeReachMe) {
        readmeContent += `## 📫 How to reach me\n`;
        readmeContent += `- ${reachMeText ? reachMeText : 'Provide contact information or social media links'} `;
        readmeContent += `([${reachMeURL ? 'Link' : 'Add link'}](${reachMeURL ? reachMeURL : ''}))\n\n`;
    }

    if (includeProjects) {
        readmeContent += `## 👨‍💻 All of my projects are available at\n`;
        readmeContent += `- ${projectsText ? projectsText : 'Share links to your GitHub repositories'} `;
        readmeContent += `([${projectsURL ? 'Link' : 'Add link'}](${projectsURL ? projectsURL : ''}))\n\n`;
    }

    if (includeArticles) {
        readmeContent += `## 📝 I regularly write articles on\n`;
        readmeContent += `- ${articlesText ? articlesText : 'Link to your blog or articles'} `;
        readmeContent += `([${articlesURL ? 'Link' : 'Add link'}](${articlesURL ? articlesURL : ''}))\n\n`;
    }

    if (includeExperiences) {
        readmeContent += `## 📄 Know about my experiences\n`;
        readmeContent += `- ${experiencesText ? experiencesText : 'Share details about your experiences'} `;
        readmeContent += `([${experiencesURL ? 'Link' : 'Add link'}](${experiencesURL ? experiencesURL : ''}))\n\n`;
    }

    if (includeFunFact) {
        readmeContent += `## ⚡ Fun fact\n`;
        readmeContent += `- ${funFactText ? funFactText : 'Share an interesting fact about yourself'}\n\n`;
    }

    return readmeContent;
}

// Function to update the live preview
function updateLivePreview() {
    const previewContent = generateReadmeContent();
    document.getElementById("livePreview").innerText = previewContent;
    
    // Enable the Download README button
    document.getElementById("downloadReadmeBtn").disabled = false;
}

// Function to update the live preview
function updateLivePreview() {
    const previewContent = generateReadmeContent();
    document.getElementById("livePreview").innerText = previewContent;
    
    // Enable the Download README button
    document.getElementById("downloadReadmeBtn").disabled = false;
}

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

// Event listeners for input changes
document.getElementById("enableWorkingOn").addEventListener("change", function () {
    toggleInputFields("enableWorkingOn", "workingOnText", "workingOnURL");
    updateLivePreview();
});

document.getElementById("enableCollaborate").addEventListener("change", function () {
    toggleInputFields("enableCollaborate", "collaborateText", "collaborateURL");
    updateLivePreview();
});

document.getElementById("enableHelpWith").addEventListener("change", function () {
    toggleInputFields("enableHelpWith", "helpWithText", "helpWithURL");
    updateLivePreview();
});

document.getElementById("enableLearning").addEventListener("change", function () {
    toggleInputFields("enableLearning", "learningText", "learningURL");
    updateLivePreview();
});

document.getElementById("enableAskMe").addEventListener("change", function () {
    toggleInputFields("enableAskMe", "askMeText", "askMeURL");
    updateLivePreview();
});

document.getElementById("enableReachMe").addEventListener("change", function () {
    toggleInputFields("enableReachMe", "reachMeText", "reachMeURL");
    updateLivePreview();
});

document.getElementById("enableProjects").addEventListener("change", function () {
    toggleInputFields("enableProjects", "projectsText", "projectsURL");
    updateLivePreview();
});

document.getElementById("enableArticles").addEventListener("change", function () {
    toggleInputFields("enableArticles", "articlesText", "articlesURL");
    updateLivePreview();
});

document.getElementById("enableExperiences").addEventListener("change", function () {
    toggleInputFields("enableExperiences", "experiencesText", "experiencesURL");
    updateLivePreview();
});

document.getElementById("enableFunFact").addEventListener("change", function () {
    toggleInputFields("enableFunFact", "funFactText", null);
    updateLivePreview();
});




// Event listener for the "Generate README" button
document.getElementById("generateReadmeBtn").addEventListener("click", function () {
    downloadReadme();
});

// Initial live preview update
updateLivePreview();

