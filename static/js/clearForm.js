// Function to clear the form
function clearForm() {
    // Clear input values for all fields
    document.getElementById("username").value = "";
    document.getElementById("fullName").value = "";
    document.getElementById("aboutMe").value = "";

    // Clear input values for Working On section
    document.getElementById("workingOnText").value = "";
    document.getElementById("workingOnURL").value = "";

    // Clear input values for Collaborate section
    document.getElementById("collaborateText").value = "";
    document.getElementById("collaborateURL").value = "";

    // Clear input values for Help With section
    document.getElementById("helpWithText").value = "";
    document.getElementById("helpWithURL").value = "";

    // Clear input values for Learning section
    document.getElementById("learningText").value = "";
    document.getElementById("learningURL").value = "";

    // Clear input values for Ask Me section
    document.getElementById("askMeText").value = "";
    document.getElementById("askMeURL").value = "";

    // Clear input values for Reach Me section
    document.getElementById("reachMeText").value = "";
    document.getElementById("reachMeURL").value = "";

    // Clear input values for Projects section
    document.getElementById("projectsText").value = "";
    document.getElementById("projectsURL").value = "";

    // Clear input values for Articles section
    document.getElementById("articlesText").value = "";
    document.getElementById("articlesURL").value = "";

    // Clear input values for Experiences section
    document.getElementById("experiencesText").value = "";
    document.getElementById("experiencesURL").value = "";

    // Clear input values for Fun Fact section
    document.getElementById("funFactText").value = "";

    // Clear input values for Connect with me section
    document.getElementById("githubUsername").value = "";
    document.getElementById("twitterUsername").value = "";
    document.getElementById("youtubeUsername").value = "";
    document.getElementById("instagramUsername").value = "";

    // Update live preview after clearing the form
    updateLivePreview();

    // Save the cleared form data to localStorage
    saveFormData();
}

// Event listener for the "Clear Form" button
document.getElementById("clearFormButton").addEventListener("click", clearForm);
