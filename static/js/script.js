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
    const youtubeUsername = document.getElementById("youtubeUsername").value;

    const twitterUsername = document.getElementById("twitterUsername").value;
    const linkedinUsername = document.getElementById("linkedinUsername").value;

    const facebookUsername = document.getElementById("facebookUsername").value;
    const instagramUsername = document.getElementById("instagramUsername").value;

    const stackoverflowUsername = document.getElementById("stackoverflowUsername").value;
    const rssFeed = document.getElementById("rssFeed").value;

    const devtoUsername = document.getElementById("devtoUsername").value;
    const mediumUsername = document.getElementById("mediumUsername").value;

    const codepenUsername = document.getElementById("codepenUsername").value;
    const codesandboxUsername = document.getElementById("codesandboxUsername").value;

    const gitlabUsername = document.getElementById("gitlabUsername").value;
    const bitbucketUsername = document.getElementById("bitbucketUsername").value;

    // Collect user input values for Skills Section
    const selectedProgrammingLanguages = getSelectedProgrammingLanguages(); 
    const selectedFrontend = getSelectedFrontend(); 
    const selectedBackend = getSelectedBackend();
    const selectedAIML = getSelectedAIML();
    const selectedDatabase = getSelectedDatabase();
    const selectedFramework = getSelectedFramework();
    const selectedSiteGenerators = getSelectedSiteGenerators();
    const selectedSoftwares = getSelectedSoftwares();
    const selectedDevops = getSelectedDevops();
    const selectedBaas = getSelectedBaas();
    const selectedMobileApp = getSelectedMobileApp();
    const selectedOther = getSelectedOther();




    // Construct README content
    let readmeContent = `# Hello, I'm ${fullName ? fullName : username} 👋\n\n`;
    readmeContent += `![Profile Views](https://komarev.com/ghpvc/?username=${username}&color=green)\n\n`;
    readmeContent += `## 📝 About Me\n${aboutMe ? aboutMe : 'Add a brief description about yourself.'}\n\n`;

    // Working On
    if (workingOnText || workingOnURL) {
        readmeContent += `- 🛠️ I’m currently working on `;
        readmeContent += `**${workingOnText ? `${workingOnText}**` : ''}${workingOnURL ? ` ([${workingOnURL}](${workingOnURL}))` : ''}\n\n`;
    }

    // Collaborate
    if (collaborateText || collaborateURL) {
        readmeContent += `- 🧑‍🤝‍🧑 I’m looking to collaborate on `;
        readmeContent += `**${collaborateText ? `${collaborateText}**` : ''}${collaborateURL ? ` ([${collaborateURL}](${collaborateURL}))` : ''}\n\n`;
    }

    // Help With
    if (helpWithText || helpWithURL) {
        readmeContent += `- 💁 I’m looking for help with `;
        readmeContent += `**${helpWithText ? `${helpWithText}**` : ''}${helpWithURL ? ` ([${helpWithURL}](${helpWithURL}))` : ''}\n\n`;
    }

    // Learning
    if (learningText || learningURL) {
        readmeContent += `- 📒 I’m currently learning `;
        readmeContent += `**${learningText ? `${learningText}**` : ''}${learningURL ? ` ([${learningURL}](${learningURL}))` : ''}\n\n`;
    }

    // Ask Me
    if (askMeText || askMeURL) {
        readmeContent += `- 💬 Ask me about `;
        readmeContent += `**${askMeText ? `${askMeText}**` : ''}${askMeURL ? ` ([${askMeURL}](${askMeURL}))` : ''}\n\n`;
    }

    // Reach Me
    if (reachMeText || reachMeURL) {
        readmeContent += `- 📬 How to reach me `;
        readmeContent += `**${reachMeText ? `${reachMeText}**` : ''}${reachMeURL ? ` ([${reachMeURL}](${reachMeURL}))` : ''}\n\n`;
    }

    // Projects
    if (projectsText || projectsURL) {
        readmeContent += `- 💻 All of my projects are available at `;
        readmeContent += `**${projectsText ? `${projectsText}**` : ''}${projectsURL ? ` ([${projectsURL}](${projectsURL}))` : ''}\n\n`;
    }

    // Articles
    if (articlesText || articlesURL) {
        readmeContent += `- ✍️ I regularly write articles on `;
        readmeContent += `**${articlesText ? `${articlesText}**` : ''}${articlesURL ? ` ([${articlesURL}](${articlesURL}))` : ''}\n\n`;
    }

    // Experiences
    if (experiencesText || experiencesURL) {
        readmeContent += `- 🧑‍💼 Know about my experiences `;
        readmeContent += `**${experiencesText ? `${experiencesText}**` : ''}${experiencesURL ? ` ([${experiencesURL}](${experiencesURL}))` : ''}\n\n`;
    }

    // Fun Fact
    if (funFactText) {
        readmeContent += `- 💡 Fun fact\n`;
        readmeContent += `${funFactText}\n\n`;
    }

    // Connect with me
    readmeContent += `## 🔗 Connect with me\n`;

    if (githubUsername) {
        readmeContent += `<a href="https://github.com/${githubUsername}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/material-outlined/48/github.png" alt="github"/></a>&nbsp;&nbsp;&nbsp;`;
    }
    if (youtubeUsername) {
        readmeContent += `<a href="https://www.youtube.com/${youtubeUsername}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play"/></a>&nbsp;&nbsp;&nbsp;`;
    }

    if (twitterUsername) {
        readmeContent += `<a href="https://twitter.com/${twitterUsername}" target="_blank"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1"/></a>&nbsp;&nbsp;&nbsp;`;
    }
    if (linkedinUsername) {
        readmeContent += `<a href="https://linkedin.com/${linkedinUsername}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/></a>&nbsp;&nbsp;&nbsp;`;
    }

    if (facebookUsername) {
        readmeContent += `<a href="https://www.facebook.com/${facebookUsername}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt="facebook-new"/></a>&nbsp;&nbsp;&nbsp;`;
    }
    if (instagramUsername) {
        readmeContent += `<a href="https://www.instagram.com/${instagramUsername}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/></a>&nbsp;&nbsp;&nbsp;`;
    }

    if (stackoverflowUsername) {
        readmeContent += `<a href="https://stackoverflow.com/${stackoverflowUsername}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/color/48/stackoverflow.png" alt="stackoverflow"/></a>&nbsp;&nbsp;&nbsp;`;
    }
    if (rssFeed) {
        readmeContent += `<a href="https://rss.com/${rssFeed}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/color/48/rss.png" alt="rss"/></a>&nbsp;&nbsp;&nbsp;`;
    }

    if (devtoUsername) {
        readmeContent += `<a href="https://dev.to/${devtoUsername}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/windows/48/dev.png" alt="dev"/></a>&nbsp;&nbsp;&nbsp;`;
    }
    if (mediumUsername) {
        readmeContent += `<a href="https://medium.com/${mediumUsername}" target="_blank"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/medium-logo.png" alt="medium-logo"/></a>&nbsp;&nbsp;&nbsp;`;
    }

    if (codepenUsername) {
        readmeContent += `<a href="https://codepen.io/${codepenUsername}" target="_blank"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/codepen.png" alt="codepen"/></a>&nbsp;&nbsp;&nbsp;`;
    }
    if (codesandboxUsername) {
        readmeContent += `<a href="https://codesandbox.io/${codesandboxUsername}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-codesandbox-an-online-code-editor-and-sharing-web-application-projects-logo-color-tal-revivo.png" alt="external-codesandbox-an-online-code-editor-and-sharing-web-application-projects-logo-color-tal-revivo"/></a>&nbsp;&nbsp;&nbsp;`;
    }

    if (gitlabUsername) {
        readmeContent += `<a href="https://gitlab.com/${gitlabUsername}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/color/48/gitlab.png" alt="gitlab"/></a>&nbsp;&nbsp;&nbsp;`;
    }
    if (bitbucketUsername) {
        readmeContent += `<a href="https://bitbucket.org/${bitbucketUsername}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-bitbucket-is-a-web-based-version-control-repository-hosting-service-logo-shadow-tal-revivo.png" alt="external-bitbucket-is-a-web-based-version-control-repository-hosting-service-logo-shadow-tal-revivo"/></a>&nbsp;&nbsp;&nbsp;`;
    }

    readmeContent += `\n\n`;

    // Add Skills section
    readmeContent += `## ✨ Skills\n`;
    // Add Programming Languages section
    if (selectedProgrammingLanguages.length > 0) {
        selectedProgrammingLanguages.forEach(language => {
            readmeContent += `<img src="${language.icon}" width="40" height="40"/> &nbsp;&nbsp;`;
        });
    }
    // Add Frontend Development section
    if (selectedFrontend.length > 0) {
        selectedFrontend.forEach(language => {
            readmeContent += `<img src="${language.icon}" width="40" height="40"/> &nbsp;&nbsp;`;
        });
    }
    // Add Backend Development section
    if (selectedBackend.length > 0) {
        selectedBackend.forEach(language => {
            readmeContent += `<img src="${language.icon}" width="40" height="40"/> &nbsp;&nbsp;`;
        });
    }
    // Add AI/ML section
    if (selectedAIML.length > 0) {
        selectedAIML.forEach(language => {
            readmeContent += `<img src="${language.icon}" width="40" height="40"/> &nbsp;&nbsp;`;
        });
    }
    // Add Database section
    if (selectedDatabase.length > 0) {
        selectedDatabase.forEach(language => {
            readmeContent += `<img src="${language.icon}" width="40" height="40"/> &nbsp;&nbsp;`;
        });
    }
    // Add Framework section
    if (selectedFramework.length > 0) {
        selectedFramework.forEach(language => {
            readmeContent += `<img src="${language.icon}" width="40" height="40"/> &nbsp;&nbsp;`;
        });
    }
    // Add Site Generators section
    if (selectedSiteGenerators.length > 0) {
        selectedSiteGenerators.forEach(language => {
            readmeContent += `<img src="${language.icon}" width="40" height="40"/> &nbsp;&nbsp;`;
        });
    }
    // Add Softwares section
    if (selectedSoftwares.length > 0) {
        selectedSoftwares.forEach(language => {
            readmeContent += `<img src="${language.icon}" width="40" height="40"/> &nbsp;&nbsp;`;
        });
    }
    // Add Devops section
    if (selectedDevops.length > 0) {
        selectedDevops.forEach(language => {
            readmeContent += `<img src="${language.icon}" width="40" height="40"/> &nbsp;&nbsp;`;
        });
    }
    // Add BaaS section
    if (selectedBaas.length > 0) {
        selectedBaas.forEach(language => {
            readmeContent += `<img src="${language.icon}" width="40" height="40"/> &nbsp;&nbsp;`;
        });
    }
    // Add Mobile App Development section
    if (selectedMobileApp.length > 0) {
        selectedMobileApp.forEach(language => {
            readmeContent += `<img src="${language.icon}" width="40" height="40"/> &nbsp;&nbsp;`;
        });
    }
    // Add Other Apps section
    if (selectedOther.length > 0) {
        selectedOther.forEach(language => {
            readmeContent += `<img src="${language.icon}" width="auto" height="40"/> &nbsp;&nbsp;`;
        });
    }

    return readmeContent;
}

// Function to get selected programming languages
function getSelectedProgrammingLanguages() {
    const selectedLanguages = [];
    const programmingLanguages = [
        { id: "programmingLanguageC", name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
        { id: "programmingLanguageCpp", name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
        { id: "programmingLanguageCSharp", name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
        { id: "programmingLanguageJava", name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" },

        { id: "programmingLanguagePython", name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { id: "programmingLanguageJavaScript", name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { id: "programmingLanguageRuby", name: "Ruby", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg" },
        { id: "programmingLanguageSwift", name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" },

        { id: "programmingLanguagePHP", name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
        { id: "programmingLanguageTypeScript", name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { id: "programmingLanguageGo", name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
        { id: "programmingLanguageRust", name: "Rust", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg" },

        { id: "programmingLanguageKotlin", name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
        { id: "programmingLanguageScala", name: "Scala", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scala/scala-original.svg" },
        { id: "programmingLanguageHaskell", name: "Haskell", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/haskell/haskell-original.svg" },
        { id: "programmingLanguageLua", name: "Lua", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg" },

        { id: "programmingLanguageElixir", name: "Elixir", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elixir/elixir-original.svg" },
        { id: "programmingLanguageErlang", name: "Erlang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/erlang/erlang-original.svg" },
        { id: "programmingLanguageCoffeeScript", name: "CoffeeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/coffeescript/coffeescript-original.svg" },
        { id: "programmingLanguageObjectiveC", name: "ObjectiveC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/objectivec/objectivec-plain.svg" },
    ]; // Define programming languages

    programmingLanguages.forEach(language => {
        const checkbox = document.getElementById(language.id);
        if (checkbox.checked) {
            selectedLanguages.push(language);
        }
    });

    return selectedLanguages;
}

// Function to get selected Frontend Development languages
function getSelectedFrontend() {
    const selectedFrontend = [];
    const frontendLanguages = [
        { id: "frontendLanguageHTML", name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { id: "frontendLanguageCSS", name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { id: "frontendLanguageReact", name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" },
        { id: "frontendLanguageVue", name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg" },

        { id: "frontendLanguageAngular", name: "angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" },
        { id: "frontendLanguageBootstrap", name: "bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
        { id: "frontendLanguageMaterialize", name: "materialize", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materializecss/materializecss-original.svg" },
        { id: "frontendLanguageTailwind", name: "tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },

        { id: "frontendLanguageAngularJS", name: "angularjs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" },
        { id: "frontendLanguageBackboneJS", name: "backbonejs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/backbonejs/backbonejs-original.svg" },
        { id: "frontendLanguageVuetify", name: "vuetify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuetify/vuetify-original.svg" },
        { id: "frontendLanguageSass", name: "sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" },

        { id: "frontendLanguageSvelte", name: "svelte", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg" },
        { id: "frontendLanguagePugJS", name: "pugjs", icon: "https://cdn.worldvectorlogo.com/logos/pug.svg" },
        { id: "frontendLanguageRedux", name: "redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
        { id: "frontendLanguageBulma", name: "bulma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bulma/bulma-plain.svg" },
    ]; // Define Frontend languages

    frontendLanguages.forEach(language => {
        const checkbox = document.getElementById(language.id);
        if (checkbox.checked) {
            selectedFrontend.push(language);
        }
    });

    return selectedFrontend;
}

// Function to get selected Backend Development languages
function getSelectedBackend() {
    const selectedBackend = [];
    const backendLanguages = [
        { id: "backendLanguageNodeJS", name: "nodejs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
        { id: "backendLanguageExpressJS", name: "expressjs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
        { id: "backendLanguageDjango", name: "django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg" },
        { id: "backendLanguageFlask", name: "flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg" },

        { id: "backendLanguageSpring", name: "spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
        { id: "backendLanguageGraphQL", name: "graphql", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
        { id: "backendLanguageKafka", name: "kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" },
        { id: "backendLanguageNestJS", name: "nestjs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },

        { id: "backendLanguageSolr", name: "solr", icon: "https://cdn.worldvectorlogo.com/logos/solr.svg" },
        { id: "backendLanguageRabbitMQ", name: "rabbitmq", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg" },
        { id: "backendLanguageHadoop", name: "hadoop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hadoop/hadoop-original.svg" },
        { id: "backendLanguageOpenResty", name: "openresty", icon: "https://openresty.org/images/logo.png" },
    ]; // Define Backend languages

    backendLanguages.forEach(language => {
        const checkbox = document.getElementById(language.id);
        if (checkbox.checked) {
            selectedBackend.push(language);
        }
    });

    return selectedBackend;
}

// Function to get selected AI/ML
function getSelectedAIML() {
    const selectedAIML = [];
    const aiMl = [
        { id: "aiMlTensorflow", name: "tensorflow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
        { id: "aiMlPytorch", name: "pytorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
        { id: "aiMlkeras", name: "keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg" },

        { id: "aiMlPandas", name: "pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
        { id: "aiMlScikitLearn", name: "scikitLearn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
        { id: "aiMlopenCV", name: "openCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },

        { id: "aiMlnumPy", name: "numPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
        { id: "aiMlseaborn", name: "seaborn", icon: "https://cdn.worldvectorlogo.com/logos/seaborn-1.svg" },
        { id: "aiMlmatplotlib", name: "matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },

    ]; // Define AI/ML

    aiMl.forEach(language => {
        const checkbox = document.getElementById(language.id);
        if (checkbox.checked) {
            selectedAIML.push(language);
        }
    });

    return selectedAIML;
}

// Function to get Database
function getSelectedDatabase() {
    const selectedDatabase = [];
    const database = [
        { id: "databaseMongoDB", name: "mongodb", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { id: "databaseMySQL", name: "mysql", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" },
        { id: "databasesqlAlchemy", name: "sqlAlchemy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg" },
        { id: "databaseRealm", name: "realm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/realm/realm-original.svg" },

        { id: "databasePostgreSQL", name: "postgresql", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" },
        { id: "databaseSQLite", name: "sqlite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
        { id: "databaseAzureSQL", name: "azureSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
        { id: "databaseMicrosoftSQL", name: "MicrosoftSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },

    ]; // Define Database

    database.forEach(language => {
        const checkbox = document.getElementById(language.id);
        if (checkbox.checked) {
            selectedDatabase.push(language);
        }
    });

    return selectedDatabase;
}

// Function to get Framework
function getSelectedFramework() {
    const selectedFramework = [];
    const framework = [
        { id: "frameworkDjango", name: "django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
        { id: "frameworkFlask", name: "flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
        { id: "frameworkFastAPI", name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },

        { id: "frameworkDotNet", name: "dotnet", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" },
        { id: "frameworkRails", name: "rails", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-original-wordmark.svg" },
        { id: "frameworkCodeIgniter", name: "codeIgniter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain-wordmark.svg" },

        { id: "frameworkDrupal", name: "drupal", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/drupal/drupal-original.svg" },
        { id: "frameworkLaravel", name: "laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
        { id: "frameworkBlazor", name: "Blazor", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blazor/blazor-original.svg" },

    ]; // Define Framework

    framework.forEach(language => {
        const checkbox = document.getElementById(language.id);
        if (checkbox.checked) {
            selectedFramework.push(language);
        }
    });

    return selectedFramework;
}


// Function to get Site Generators
function getSelectedSiteGenerators() {
    const selectedSiteGenerators = [];
    const siteGenerators = [
        { id: "siteGeneratorJekyll", name: "jekyll", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jekyll/jekyll-original.svg" },
        { id: "siteGeneratorHugo", name: "hugo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hugo/hugo-original.svg" },
        { id: "siteGeneratorGatsby", name: "gatsby", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gatsby/gatsby-original.svg" },
        { id: "siteGeneratorHexo", name: "hexo", icon: "https://cdn.worldvectorlogo.com/logos/hexo.svg" },

        { id: "siteGeneratorPelican", name: "pelican", icon: "https://getpelican.com/theme/img/logo.svg" },
        { id: "siteGeneratorVuePress", name: "vuepress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
        { id: "siteGeneratorNextJS", name: "nextjs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
        { id: "siteGeneratorMkdocs", name: "mkdocs", icon: "https://upload.wikimedia.org/wikipedia/commons/d/dd/MkDocs_Logo.png" },
    
        { id: "siteGeneratorMiddleman", name: "Middleman", icon: "https://cdn.worldvectorlogo.com/logos/middleman.svg" },
        { id: "siteGeneratorNuxtjs", name: "Nuxtjs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg" },
        { id: "siteGeneratorEleventy", name: "Eleventy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eleventy/eleventy-original.svg" },
        { id: "siteGeneratorGridsome", name: "Gridsome", icon: "https://cdn.worldvectorlogo.com/logos/gridsome.svg" },

    ]; // Define Site Generators

    siteGenerators.forEach(language => {
        const checkbox = document.getElementById(language.id);
        if (checkbox.checked) {
            selectedSiteGenerators.push(language);
        }
    });

    return selectedSiteGenerators;
}


// Function to get Softwares
function getSelectedSoftwares() {
    const selectedSoftwares = [];
    const softwares = [
        { id: "softwareIllustrator", name: "illustrator", icon: "https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cc-icon.svg" },
        { id: "softwarePhotoshop", name: "photoshop", icon: "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg" },
        { id: "softwarePremierPro", name: "premierPro", icon: "https://cdn.worldvectorlogo.com/logos/premiere-pro-cc.svg" },
        { id: "softwareXD", name: "xd", icon: "https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg" },

        { id: "softwareAfterEffects", name: "afterEffects", icon: "https://cdn.worldvectorlogo.com/logos/after-effects-1.svg" },
        { id: "softwareAfterEffects", name: "afterEffects", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Adobe_Animate_CC_icon_%282020%29.svg/1024px-Adobe_Animate_CC_icon_%282020%29.svg.png" },
        { id: "softwareIndesign", name: "Indesign", icon: "https://cdn.worldvectorlogo.com/logos/adobe-indesign-cc-icon.svg" },
        { id: "softwareLightroom", name: "Lightroom", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/1024px-Adobe_Photoshop_Lightroom_CC_logo.svg.png" },

        { id: "softwareFigma", name: "figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
        { id: "softwareBlender", name: "blender", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" },
        { id: "softwareSketch", name: "sketch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sketch/sketch-original.svg" },
        { id: "softwareInkscape", name: "inkscape", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/inkscape/inkscape-original.svg" },

        { id: "softwareGIMP", name: "gimp", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gimp/gimp-original.svg" },
        { id: "softwareUnity", name: "unity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" },
        { id: "softwareUnrealEngine", name: "UnrealEngine", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original.svg" },
        { id: "softwareGodot", name: "Godot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg" },

        { id: "softwareInVision", name: "invision", icon: "https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg" },
        { id: "softwareFramer", name: "Framer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
        { id: "softwareWebflow", name: "Webflow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg" },

    ]; // Define Softwares

    softwares.forEach(language => {
        const checkbox = document.getElementById(language.id);
        if (checkbox.checked) {
            selectedSoftwares.push(language);
        }
    });

    return selectedSoftwares;
}


// Function to get Devops
function getSelectedDevops() {
    const selectedDevops = [];
    const devops = [
        { id: "devopsToolAnsible", name: "ansible", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg" },
        { id: "devopsToolAzure", name: "azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
        { id: "devopsToolBitbucket", name: "bitbucket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg" },
        { id: "devopsToolCircleCI", name: "circleci", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/circleci/circleci-plain.svg" },

        { id: "devopsToolDocker", name: "docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { id: "devopsToolGCP", name: "gcp", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
        { id: "devopsToolGit", name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { id: "devopsToolGitLab", name: "gitlab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" },
        { id: "devopsToolJenkins", name: "jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },

        { id: "devopsToolAWS", name: "aws", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { id: "devopsToolKubernetes", name: "kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" },
        { id: "devopsToolTerraform", name: "terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" },
        { id: "devopsToolVagrant", name: "vagrant", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vagrant/vagrant-original.svg" },

        { id: "devopsToolChef", name: "Chef", icon: "https://cdn.worldvectorlogo.com/logos/chef-13.svg" },
        { id: "devopsToolGradle", name: "Gradle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg" },
        { id: "devopsToolOpenStack", name: "OpenStack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openstack/openstack-original.svg" },
        { id: "devopsToolPrometheus", name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg" },
    ]; // Define Devops

    devops.forEach(language => {
        const checkbox = document.getElementById(language.id);
        if (checkbox.checked) {
            selectedDevops.push(language);
        }
    });

    return selectedDevops;
}


// Function to get BaaS
function getSelectedBaas() {
    const selectedBaas = [];
    const baas = [
        { id: "baasServiceAmplify", name: "Amplify", icon: "https://docs.amplify.aws/assets/logo-dark.svg" },
        { id: "baasServiceAppwrite", name: "appwrite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg" },
        { id: "baasServiceFirebase", name: "firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },


        { id: "baasServiceHeroku", name: "heroku", icon: "https://img.icons8.com/color/48/000000/heroku.png" },
        { id: "baasServiceStrapi", name: "strapi", icon: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/32f3a89c-99c4-466f-8536-dd75f65fa320/Strapi-Monogram/w=1920,quality=80,fit=scale-down" },
        { id: "baasServiceStrapi", name: "strapi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
    ]; // Define BaaS

    baas.forEach(language => {
        const checkbox = document.getElementById(language.id);
        if (checkbox.checked) {
            selectedBaas.push(language);
        }
    });

    return selectedBaas;
}


// Function to get Mobile App Development
function getSelectedMobileApp() {
    const selectedMobileApp = [];
    const mobileapp = [
        { id: "mobileAppDevelopmentAndroid", name: "android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" },
        { id: "mobileAppDevelopmentIOS", name: "ios", icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/IOS_logo.svg" },
        { id: "mobileAppDevelopmentJava", name: "java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },

        { id: "mobileAppDevelopmentFlutter", name: "flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
        { id: "mobileAppDevelopmentReactNative", name: "reactnative", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { id: "mobileAppDevelopmentNativeScript", name: "NativeScript", icon: "https://cdn.worldvectorlogo.com/logos/nativescript.svg" },

        { id: "mobileAppDevelopmentIonic", name: "ionic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg" },
        { id: "mobileAppDevelopmentKotlin", name: "kotlin", icon: "https://cdn.worldvectorlogo.com/logos/kotlin-1.svg" },
        { id: "mobileAppDevelopmentDart", name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },

        { id: "mobileAppDevelopmentCordova", name: "Cordova", icon: "https://cordova.apache.org/static/img/cordova_bot.png" },
        { id: "mobileAppDevelopmentXamarin", name: "xamarin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xamarin/xamarin-original.svg" },
        { id: "mobileAppDevelopmentXcode", name: "Xcode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg" },
    ]; // Define Mobile App Development

    mobileapp.forEach(language => {
        const checkbox = document.getElementById(language.id);
        if (checkbox.checked) {
            selectedMobileApp.push(language);
        }
    });

    return selectedMobileApp;
}



// Function to get Other Apps
function getSelectedOther() {
    const selectedOther = [];
    const otherapp = [
        { id: "otherAutocad", name: "autocad", icon: "static/icons/Autodesk/autocad.png" },
        { id: "otherCivil3D", name: "civil3d", icon: "static/icons/Autodesk/civil3d.png" },
        { id: "otherFusion360", name: "fusion360", icon: "static/icons/Autodesk/fusion.png" },
        { id: "otherInventor", name: "inventor", icon: "static/icons/Autodesk/inventor.png" },
        { id: "other3dsMax", name: "3dsMax", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threedsmax/threedsmax-original.svg" },

        { id: "otherMatlab", name: "matlab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg" },
        { id: "otherOctave", name: "octave", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Gnu-octave-logo.svg/2048px-Gnu-octave-logo.svg.png" },
        { id: "otherAnaconda", name: "Anaconda", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg" },
        { id: "otherJupyter", name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg" },
        { id: "otherColab", name: "Colab", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg" },

        { id: "otherAltium", name: "altium", icon: "static/icons/altium-designer.png" },
        { id: "otherArduino", name: "arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg" },
        { id: "otherRaspberryPi", name: "raspberrypi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg" },
        { id: "otherProteus", name: "proteus", icon: "https://upload.wikimedia.org/wikipedia/en/5/5a/Proteus_Design_Suite_Atom_Logo.png" },
        { id: "otherLabVIEW", name: "LabVIEW", icon: "static/icons/LabVIEW.png" },

        { id: "otherLinux", name: "linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
        { id: "otherUbuntu", name: "Ubuntu", icon: "https://cdn.worldvectorlogo.com/logos/ubuntu-4.svg" },

        { id: "otherAbaqus", name: "abaqus", icon: "https://raw.githubusercontent.com/Edgar-Mendonca/ProfileCraft/9e95459eefe9a31c68e0c669aea3c96cbb2efdb2/static/icons/Simulia.svg" },
        { id: "otherCatia", name: "catia", icon: "https://raw.githubusercontent.com/Edgar-Mendonca/ProfileCraft/8de4fbc83e34c945a433aed10808fcc6a91b7d19/static/icons/Catia.svg" },
        { id: "otherDelmia", name: "delmia", icon: "https://raw.githubusercontent.com/Edgar-Mendonca/ProfileCraft/9e95459eefe9a31c68e0c669aea3c96cbb2efdb2/static/icons/Delmia.svg" },
        { id: "otherSolidworks", name: "solidworks", icon: "https://cdn.worldvectorlogo.com/logos/solidworks-logo-1.svg" },

    ]; // Define Other Apps

    otherapp.forEach(language => {
        const checkbox = document.getElementById(language.id);
        if (checkbox.checked) {
            selectedOther.push(language);
        }
    });

    return selectedOther;
}



// Function to update the live preview
function updateLivePreview() {
    const codePreview = document.getElementById("codePreview");
    const livePreview = document.getElementById("livePreview");
    const readmeContent = generateReadmeContent();

    // Display code in the "Code" tab
    codePreview.textContent = readmeContent;

    // Render Markdown content as HTML in the "Live Preview" tab
    livePreview.innerHTML = marked(readmeContent);
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
document.getElementById("youtubeUsername").addEventListener("input", updateLivePreview);

document.getElementById("twitterUsername").addEventListener("input", updateLivePreview);
document.getElementById("linkedinUsername").addEventListener("input", updateLivePreview);

document.getElementById("facebookUsername").addEventListener("input", updateLivePreview);
document.getElementById("instagramUsername").addEventListener("input", updateLivePreview);

document.getElementById("stackoverflowUsername").addEventListener("input", updateLivePreview);
document.getElementById("rssFeed").addEventListener("input", updateLivePreview);

document.getElementById("devtoUsername").addEventListener("input", updateLivePreview);
document.getElementById("mediumUsername").addEventListener("input", updateLivePreview);

document.getElementById("codepenUsername").addEventListener("input", updateLivePreview);
document.getElementById("codesandboxUsername").addEventListener("input", updateLivePreview);

document.getElementById("gitlabUsername").addEventListener("input", updateLivePreview);
document.getElementById("bitbucketUsername").addEventListener("input", updateLivePreview);

// Event listeners for input changes in the "Programming Languages" section
const programmingLanguagesCheckboxes = document.querySelectorAll(".form-check-input");
programmingLanguagesCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("input", updateLivePreview);
});

// Event listeners for input changes in the "Frontend Development" section
const frontendLanguageCheckboxes = document.querySelectorAll(".form-check-input");
frontendLanguageCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("input", updateLivePreview);
});

// Event listeners for input changes in the "Backend Development" section
const backendLanguageCheckboxes = document.querySelectorAll(".form-check-input");
backendLanguageCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("input", updateLivePreview);
});

// Event listeners for input changes in the "AI/ML" section
const aiMlCheckboxes = document.querySelectorAll(".form-check-input");
aiMlCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("input", updateLivePreview);
});

// Event listeners for input changes in the "Database" section
const databaseCheckboxes = document.querySelectorAll(".form-check-input");
databaseCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("input", updateLivePreview);
});

// Event listeners for input changes in the "Framework" section
const frameworkCheckboxes = document.querySelectorAll(".form-check-input");
frameworkCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("input", updateLivePreview);
});

// Event listeners for input changes in the "Site Generators" section
const siteGeneratorsCheckboxes = document.querySelectorAll(".form-check-input");
siteGeneratorsCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("input", updateLivePreview);
});

// Event listeners for input changes in the "Softwares" section
const softwaresCheckboxes = document.querySelectorAll(".form-check-input");
softwaresCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("input", updateLivePreview);
});

// Event listeners for input changes in the "Devops" section
const devopsCheckboxes = document.querySelectorAll(".form-check-input");
devopsCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("input", updateLivePreview);
});

// Event listeners for input changes in the "BaaS" section
const baasCheckboxes = document.querySelectorAll(".form-check-input");
baasCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("input", updateLivePreview);
});

// Event listeners for input changes in the "Mobile App Development" section
const mobileappCheckboxes = document.querySelectorAll(".form-check-input");
mobileappCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("input", updateLivePreview);
});

// Event listeners for input changes in the "Other Apps" section
const otherappCheckboxes = document.querySelectorAll(".form-check-input");
otherappCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("input", updateLivePreview);
});




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