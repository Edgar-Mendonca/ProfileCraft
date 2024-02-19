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
        youtubeUsername: document.getElementById("youtubeUsername").value,
        twitterUsername: document.getElementById("twitterUsername").value,
        linkedinUsername: document.getElementById("linkedinUsername").value,
        facebookUsername: document.getElementById("facebookUsername").value,
        instagramUsername: document.getElementById("instagramUsername").value,
        stackoverflowUsername: document.getElementById("stackoverflowUsername").value,
        rssFeed: document.getElementById("rssFeed").value,
        devtoUsername: document.getElementById("devtoUsername").value,
        mediumUsername: document.getElementById("mediumUsername").value,
        codepenUsername: document.getElementById("codepenUsername").value,
        codesandboxUsername: document.getElementById("codesandboxUsername").value,
        gitlabUsername: document.getElementById("gitlabUsername").value,
        bitbucketUsername: document.getElementById("bitbucketUsername").value,

        // Include Programming Languages
        selectedLanguages: getSelectedProgrammingLanguages()

    };
    localStorage.setItem('formData', JSON.stringify(formData));
}

// Function to load form data from localStorage
function loadFormData() {
    const formData = JSON.parse(localStorage.getItem('formData'));

    if (formData) {
        document.getElementById("username").value = formData.username;
        document.getElementById("fullName").value = formData.fullName;
        document.getElementById("aboutMe").value = formData.aboutMe;

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
        document.getElementById("youtubeUsername").value = formData.youtubeUsername || '';
        document.getElementById("twitterUsername").value = formData.twitterUsername || '';
        document.getElementById("linkedinUsername").value = formData.linkedinUsername || '';
        document.getElementById("facebookUsername").value = formData.facebookUsername || '';
        document.getElementById("instagramUsername").value = formData.instagramUsername || '';
        document.getElementById("stackoverflowUsername").value = formData.stackoverflowUsername || '';
        document.getElementById("rssFeed").value = formData.rssFeed || '';
        document.getElementById("devtoUsername").value = formData.devtoUsername || '';
        document.getElementById("mediumUsername").value = formData.mediumUsername || '';
        document.getElementById("codepenUsername").value = formData.codepenUsername || '';
        document.getElementById("codesandboxUsername").value = formData.codesandboxUsername || '';
        document.getElementById("gitlabUsername").value = formData.gitlabUsername || '';
        document.getElementById("bitbucketUsername").value = formData.bitbucketUsername || '';

        // Load selected programming languages
        const selectedLanguages = formData.selectedLanguages || [];
        selectedLanguages.forEach(language => {
            const checkbox = document.getElementById(language.id);
            if (checkbox) {
                checkbox.checked = true;
            }
        });
                


        updateLivePreview();
    }
}

// Load form data when the page is loaded
loadFormData();

// Event listener for input changes in the "About Me" section
document.getElementById("aboutMe").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
});

// Event listener for input changes in the "Username and Full Name" sections
document.getElementById("username").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
});
document.getElementById("fullName").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
});


// Event listener for input changes in the "Profile Highlights" sections
document.getElementById("workingOnText").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 
document.getElementById("workingOnURL").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
});

document.getElementById("collaborateText").addEventListener("input",function() {
    saveFormData();
    updateLivePreview();
});  
document.getElementById("collaborateURL").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 

document.getElementById("helpWithText").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 
document.getElementById("helpWithURL").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 

document.getElementById("learningText").addEventListener("input",function() {
    saveFormData();
    updateLivePreview();
}); 
document.getElementById("learningURL").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 
document.getElementById("askMeText").addEventListener("input",function() {
    saveFormData();
    updateLivePreview();
}); 
document.getElementById("askMeURL").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 

document.getElementById("reachMeText").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
});  
document.getElementById("reachMeURL").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 

document.getElementById("projectsText").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 
document.getElementById("projectsURL").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 

document.getElementById("articlesText").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 
document.getElementById("articlesURL").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 

document.getElementById("experiencesText").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 
document.getElementById("experiencesURL").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 

document.getElementById("funFactText").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 



// Event listeners for input changes in the "Connect with me" section
document.getElementById("githubUsername").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 
document.getElementById("youtubeUsername").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 

document.getElementById("twitterUsername").addEventListener("input",function() {
    saveFormData();
    updateLivePreview();
}); 
document.getElementById("linkedinUsername").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 

document.getElementById("facebookUsername").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 
document.getElementById("instagramUsername").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 
document.getElementById("stackoverflowUsername").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 
document.getElementById("rssFeed").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 

document.getElementById("devtoUsername").addEventListener("input",function() {
    saveFormData();
    updateLivePreview();
}); 
document.getElementById("mediumUsername").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 

document.getElementById("codepenUsername").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 
document.getElementById("codesandboxUsername").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 

document.getElementById("gitlabUsername").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 
document.getElementById("bitbucketUsername").addEventListener("input", function() {
    saveFormData();
    updateLivePreview();
}); 




