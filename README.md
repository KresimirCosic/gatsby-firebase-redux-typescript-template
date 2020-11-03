<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby default starter (Firebase, Redux, TypeScript)
</h1>

<p>This is my default frontend starter template that I <i>"cleaned up"</i> for myself to have a good starting point on an application. Most of the things in the template should/could be used in every web app.</p>

# The features

- Gatsby
- Firebase
- Redux (Toolkit)
- TypeScript
- SASS

# The setup

```
mkdir my-app
cd my-app
git clone https://github.com/KresimirCosic/gatsby-firebase-redux-typescript-template ./
npm install
```

# Usage

> I don't install packages on global level myself, so I tend to use the <strong>npx</strong> command. <strong>npx</strong> allows me to install and run other commands via fetching the necessary code that runs these commands so I have the most updated stable versions available. So I run my development server via <strong>npx gatsby develop --https --open</strong> command. If you prefer to install packages globally/locally, do so and run the command via <strong>npm</strong> instead.

<p>Since this template is using Firebase as a backend service, the most important starting file is <strong>./gatsby-config.js</strong>. This is where Firebase plugin has to have information about the Firebase project that is instantiated on the service.</p>

```
credentials: {
          apiKey: "<YOUR_FIREBASE_API_KEY>",
          authDomain: "<YOUR_FIREBASE_AUTH_DOMAIN>",
          databaseURL: "<YOUR_FIREBASE_DATABASE_URL>",
          projectId: "<YOUR_FIREBASE_PROJECT_ID>",
          storageBucket: "<YOUR_FIREBASE_STORAGE_BUCKET>",
          messagingSenderId: "<YOUR_FIREBASE_MESSAGING_SENDER_ID>",
          appId: "<YOUR_FIREBASE_APP_ID>",
        }
```

<p>As the service will provide this information, you need only to copy the information to here to authenticate the usage.</p>

<p>As a convetion, components should be located in <strong>./src/components</strong>. As per Gatsby itself, the <strong>./src/pages</strong> directory will automatically create pages with the same named routes. For more direct control, either use <strong>createPages</strong> API or create page-like components in a directory named (i.e.) <strong>./src/views</strong> to stop the automatic generation of routed pages and continue using <strong>reach-router</strong> manually since it is the routing package used by Gatsby.</p>

<p>I have also created some default Redux slices that ought to be used by most applications; like SEO, UI and authentication information. Feel free to delete any or add more slices on top of those.</p>

### Sidenote

<p>I will update the repo if I ever figure out a better idea to handle certain things, of course.</p>
