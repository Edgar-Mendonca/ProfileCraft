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
    document.getElementById("youtubeUsername").value = "";
    document.getElementById("twitterUsername").value = "";
    document.getElementById("linkedinUsername").value = "";
    document.getElementById("facebookUsername").value = "";
    document.getElementById("instagramUsername").value = "";
    document.getElementById("stackoverflowUsername").value = "";
    document.getElementById("rssFeed").value = "";
    document.getElementById("devtoUsername").value = "";
    document.getElementById("mediumUsername").value = "";
    document.getElementById("codepenUsername").value = "";
    document.getElementById("codesandboxUsername").value = "";
    document.getElementById("gitlabUsername").value = "";
    document.getElementById("bitbucketUsername").value = "";

    // Clear selected programming languages
    const programmingLanguages = [
        "programmingLanguageC",
        "programmingLanguageCpp",
        "programmingLanguageCSharp",
        "programmingLanguageJava",

        "programmingLanguagePython",
        "programmingLanguageJavaScript",
        "programmingLanguageRuby",
        "programmingLanguageSwift",

        "programmingLanguagePHP",
        "programmingLanguageTypeScript",
        "programmingLanguageGo",
        "programmingLanguageRust",

        "programmingLanguageKotlin",
        "programmingLanguageScala",
        "programmingLanguageHaskell",
        "programmingLanguageLua",

        "programmingLanguageElixir",
        "programmingLanguageErlang",
        "programmingLanguageCoffeeScript",
        "programmingLanguageObjectiveC",
    ];

    programmingLanguages.forEach(languageId => {
        const checkbox = document.getElementById(languageId);
        if (checkbox) {
            checkbox.checked = false;
        }
    });

    // Clear selected Frontend Development languages
    const frontendLanguages = [
        "frontendLanguageHTML",
        "frontendLanguageCSS",
        "frontendLanguageReact",
        "frontendLanguageVue",

        "frontendLanguageAngular",
        "frontendLanguageBootstrap",
        "frontendLanguageMaterialize",
        "frontendLanguageTailwind",

        "frontendLanguageAngularJS",
        "frontendLanguageBackboneJS",
        "frontendLanguageVuetify",
        "frontendLanguageSass",

        "frontendLanguageSvelte",
        "frontendLanguagePugJS",
        "frontendLanguageRedux",
        "frontendLanguageBulma",
    ];

    frontendLanguages.forEach(languageId => {
        const checkbox = document.getElementById(languageId);
        if (checkbox) {
            checkbox.checked = false;
        }
    });



    // Clear selected Backend Development languages
    const backendLanguages = [
        "backendLanguageNodeJS",
        "backendLanguageExpressJS",
        "backendLanguageDjango",
        "backendLanguageFlask",

        "backendLanguageSpring",
        "backendLanguageGraphQL",
        "backendLanguageKafka",
        "backendLanguageNestJS",

        "backendLanguageSolr",
        "backendLanguageRabbitMQ",
        "backendLanguageHadoop",
        "backendLanguageOpenResty",
    ];

    backendLanguages.forEach(languageId => {
        const checkbox = document.getElementById(languageId);
        if (checkbox) {
            checkbox.checked = false;
        }
    });


    // Clear selected AI/ML
    const aiMl = [
        "aiMlTensorflow",
        "aiMlPytorch",

        "aiMlPandas",
        "aiMlScikitLearn",
    ];

    aiMl.forEach(languageId => {
        const checkbox = document.getElementById(languageId);
        if (checkbox) {
            checkbox.checked = false;
        }
    });


    // Clear selected Database
    const database = [
        "databaseMongoDB",
        "databaseMySQL",

        "databasePostgreSQL",
        "databaseSQLite",
    ];

    database.forEach(languageId => {
        const checkbox = document.getElementById(languageId);
        if (checkbox) {
            checkbox.checked = false;
        }
    });


    // Clear selected Framework
    const framework = [
        "frameworkDjango",
        "frameworkFlask",

        "frameworkDotNet",
        "frameworkRails",
    ];

    framework.forEach(languageId => {
        const checkbox = document.getElementById(languageId);
        if (checkbox) {
            checkbox.checked = false;
        }
    });


    // Clear selected Site Generators
    const siteGenerators = [
        "siteGeneratorJekyll",
        "siteGeneratorHugo",
        "siteGeneratorGatsby",
        "siteGeneratorHexo",

        "siteGeneratorPelican",
        "siteGeneratorVuePress",
        "siteGeneratorNextJS",
        "siteGeneratorMkdocs",
    ];

    siteGenerators.forEach(languageId => {
        const checkbox = document.getElementById(languageId);
        if (checkbox) {
            checkbox.checked = false;
        }
    });


    // Clear selected Softwares
    const softwares = [
        "softwareIllustrator",
        "softwarePhotoshop",
        "softwarePremierPro",
        "softwareXD",

        "softwareFigma",
        "softwareBlender",
        "softwareAfterEffects",
        "softwareSketch",

        "softwareGIMP",
        "softwareInkscape",
        "softwareUnity",
        "softwareInVision",
    ];

    softwares.forEach(languageId => {
        const checkbox = document.getElementById(languageId);
        if (checkbox) {
            checkbox.checked = false;
        }
    });


    // Clear selected Devops
    const devops = [
        "devopsToolDocker",
        "devopsToolKubernetes",
        "devopsToolJenkins",
        "devopsToolAnsible",

        "devopsToolTerraform",
        "devopsToolGitLab",
        "devopsToolBitbucket",
        "devopsToolCircleCI",

        "devopsToolAWS",
        "devopsToolAzure",
        "devopsToolGCP",
        "devopsToolVagrant",
    ];

    devops.forEach(languageId => {
        const checkbox = document.getElementById(languageId);
        if (checkbox) {
            checkbox.checked = false;
        }
    });


    // Clear selected BaaS
    const baas = [
        "baasServiceFirebase",
        "baasServiceHeroku",

        "baasServiceStrapi",
        "baasServiceAppwrite",
    ];

    baas.forEach(languageId => {
        const checkbox = document.getElementById(languageId);
        if (checkbox) {
            checkbox.checked = false;
        }
    });


    // Clear selected Mobile App Development
    const mobileapp = [
        "mobileAppDevelopmentFlutter",
        "mobileAppDevelopmentReactNative",
        
        "mobileAppDevelopmentKotlin",
        "mobileAppDevelopmentIOS",

        "mobileAppDevelopmentJava",
        "mobileAppDevelopmentXamarin",

        "mobileAppDevelopmentIonic",
        "mobileAppDevelopmentAndroid",
    ];

    mobileapp.forEach(languageId => {
        const checkbox = document.getElementById(languageId);
        if (checkbox) {
            checkbox.checked = false;
        }
    });


    // Clear selected Other Apps
    const otherapp = [
        "otherMatlab",
        "otherOctave",
        "otherArduino",
        "otherLinux",

        "otherGit",
        "otherRaspberryPi",
        "otherAltium",
        "otherProteus",

        "otherAutocad",
        "otherCivil3D",
        "otherFusion360",
        "otherInventor",

        "otherAbaqus",
        "otherCatia",
        "otherDelmia",
        "otherSolidworks",
    ];

    otherapp.forEach(languageId => {
        const checkbox = document.getElementById(languageId);
        if (checkbox) {
            checkbox.checked = false;
        }
    });












    // Update live preview after clearing the form
    updateLivePreview();

    // Save the cleared form data to localStorage
    saveFormData();
}

// Event listener for the "Clear Form" button
document.getElementById("clearFormButton").addEventListener("click", clearForm);
