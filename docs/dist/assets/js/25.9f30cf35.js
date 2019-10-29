(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{292:function(t,s,e){"use strict";e.r(s);var a=e(2),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"deploying"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploying","aria-hidden":"true"}},[t._v("#")]),t._v(" Deploying")]),t._v(" "),e("p",[t._v("The following guides are based on a few shared assumptions:")]),t._v(" "),e("ul",[e("li",[t._v("You are placing your docs inside the "),e("code",[t._v("docs")]),t._v(" directory of your project;")]),t._v(" "),e("li",[t._v("You are using the default build output location ("),e("code",[t._v(".vuepress/dist")]),t._v(");")]),t._v(" "),e("li",[t._v("VuePress is installed as a local dependency in your project, and you have setup the following npm scripts:")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"docs:build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"github-pages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-pages","aria-hidden":"true"}},[t._v("#")]),t._v(" GitHub Pages")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Set correct "),e("code",[t._v("base")]),t._v(" in "),e("code",[t._v("docs/.vuepress/config.js")]),t._v(".")]),t._v(" "),e("p",[t._v("If you are deploying to "),e("code",[t._v("https://<USERNAME>.github.io/")]),t._v(", you can omit "),e("code",[t._v("base")]),t._v(" as it defaults to "),e("code",[t._v('"/"')]),t._v(".")]),t._v(" "),e("p",[t._v("If you are deploying to "),e("code",[t._v("https://<USERNAME>.github.io/<REPO>/")]),t._v(", (i.e. your repository is at "),e("code",[t._v("https://github.com/<USERNAME>/<REPO>")]),t._v("), set "),e("code",[t._v("base")]),t._v(" to "),e("code",[t._v('"/<REPO>/"')]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Inside your project, create "),e("code",[t._v("deploy.sh")]),t._v(" with the following content (with highlighted lines uncommented appropriately) and run it to deploy:")])])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# abort on errors")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -e\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# build")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:build\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# navigate into the build output directory")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if you are deploying to a custom domain")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo 'www.example.com' > CNAME")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if you are deploying to https://<USERNAME>.github.io")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if you are deploying to https://<USERNAME>.github.io/<REPO>")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" -\n")])])]),e("div",{staticClass:"tip custom-block"},[e("p",[t._v("You can also run the above script in your CI setup to enable automatic deployment on each push.")])]),t._v(" "),e("h3",{attrs:{id:"github-pages-and-travis-ci"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-pages-and-travis-ci","aria-hidden":"true"}},[t._v("#")]),t._v(" GitHub Pages and Travis CI")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Set correct "),e("code",[t._v("base")]),t._v(" in "),e("code",[t._v("docs/.vuepress/config.js")]),t._v(".")]),t._v(" "),e("p",[t._v("If you are deploying to "),e("code",[t._v("https://<USERNAME or GROUP>.github.io/")]),t._v(", you can omit "),e("code",[t._v("base")]),t._v(" as it defaults to "),e("code",[t._v('"/"')]),t._v(".")]),t._v(" "),e("p",[t._v("If you are deploying to "),e("code",[t._v("https://<USERNAME or GROUP>.github.io/<REPO>/")]),t._v(", (i.e. your repository is at "),e("code",[t._v("https://github.com/<USERNAME>/<REPO>")]),t._v("), set "),e("code",[t._v("base")]),t._v(" to "),e("code",[t._v('"/<REPO>/"')]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Create a file named "),e("code",[t._v(".travis.yml")]),t._v(" in the root of your project.")])]),t._v(" "),e("li",[e("p",[t._v("Use GitHub Pages deploy provider template and follow the "),e("a",{attrs:{href:"https://docs.travis-ci.com/user/deployment/pages/",target:"_blank",rel:"noopener noreferrer"}},[t._v("travis documentation"),e("OutboundLink")],1),t._v(".")])])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node_js\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node_js")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" lts/*\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm run docs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("build\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pages\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skip-cleanup")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("local_dir")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github-token")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $GITHUB_TOKEN "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# a token generated on github allowing travis to push code on you repository")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keep-history")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n")])])]),e("h3",{attrs:{id:"gitlab-pages-and-gitlab-ci"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-pages-and-gitlab-ci","aria-hidden":"true"}},[t._v("#")]),t._v(" GitLab Pages and GitLab CI")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Set correct "),e("code",[t._v("base")]),t._v(" in "),e("code",[t._v("docs/.vuepress/config.js")]),t._v(".")]),t._v(" "),e("p",[t._v("If you are deploying to "),e("code",[t._v("https://<USERNAME or GROUP>.gitlab.io/")]),t._v(", you can omit "),e("code",[t._v("base")]),t._v(" as it defaults to "),e("code",[t._v('"/"')]),t._v(".")]),t._v(" "),e("p",[t._v("If you are deploying to "),e("code",[t._v("https://<USERNAME or GROUP>.gitlab.io/<REPO>/")]),t._v(", (i.e. your repository is at "),e("code",[t._v("https://gitlab.com/<USERNAME>/<REPO>")]),t._v("), set "),e("code",[t._v("base")]),t._v(" to "),e("code",[t._v('"/<REPO>/"')]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Set "),e("code",[t._v("dest")]),t._v(" in "),e("code",[t._v(".vuepress/config.js")]),t._v(" to "),e("code",[t._v("public")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Create a file called "),e("code",[t._v(".gitlab-ci.yml")]),t._v(" in the root of your project with the content below. This will build and deploy your site whenever you make changes to your content.")])])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("9.11.1\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pages")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" node_modules/\n\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm install\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm run docs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("build\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("artifacts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" public\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("only")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n")])])]),e("h2",{attrs:{id:"netlify"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#netlify","aria-hidden":"true"}},[t._v("#")]),t._v(" Netlify")]),t._v(" "),e("ol",[e("li",[t._v("On Netlify, setup up a new project from GitHub with the following settings:")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Build Command:")]),t._v(" "),e("code",[t._v("npm run docs:build")]),t._v(" or "),e("code",[t._v("yarn docs:build")])]),t._v(" "),e("li",[e("strong",[t._v("Publish directory:")]),t._v(" "),e("code",[t._v("docs/.vuepress/dist")])])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Hit the deploy button!")])]),t._v(" "),e("h2",{attrs:{id:"google-firebase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#google-firebase","aria-hidden":"true"}},[t._v("#")]),t._v(" Google Firebase")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Make sure you have "),e("a",{attrs:{href:"https://www.npmjs.com/package/firebase-tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("firebase-tools"),e("OutboundLink")],1),t._v(" installed.")])]),t._v(" "),e("li",[e("p",[t._v("Create "),e("code",[t._v("firebase.json")]),t._v(" and "),e("code",[t._v(".firebaserc")]),t._v(" at the root of your project with the following content:")])])]),t._v(" "),e("p",[e("code",[t._v("firebase.json")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hosting"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"public"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./docs/.vuepress/dist"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ignore"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("code",[t._v(".firebaserc")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"projects"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"default"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<YOUR_FIREBASE_ID>"')]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("After running "),e("code",[t._v("yarn docs:build")]),t._v(" or "),e("code",[t._v("npm run docs:build")]),t._v(", deploy with the command "),e("code",[t._v("firebase deploy")]),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"surge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#surge","aria-hidden":"true"}},[t._v("#")]),t._v(" Surge")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("First install "),e("a",{attrs:{href:"https://www.npmjs.com/package/surge",target:"_blank",rel:"noopener noreferrer"}},[t._v("surge"),e("OutboundLink")],1),t._v(", if you haven't already.")])]),t._v(" "),e("li",[e("p",[t._v("Run "),e("code",[t._v("yarn docs:build")]),t._v(" or "),e("code",[t._v("npm run docs:build")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Deploy to surge, by typing "),e("code",[t._v("surge docs/.vuepress/dist")]),t._v(".")])])]),t._v(" "),e("p",[t._v("You can also deploy to a "),e("a",{attrs:{href:"http://surge.sh/help/adding-a-custom-domain",target:"_blank",rel:"noopener noreferrer"}},[t._v("custom domain"),e("OutboundLink")],1),t._v(" by adding "),e("code",[t._v("surge docs/.vuepress/dist yourdomain.com")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"heroku"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#heroku","aria-hidden":"true"}},[t._v("#")]),t._v(" Heroku")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("First install "),e("a",{attrs:{href:"https://devcenter.heroku.com/articles/heroku-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("Heroku CLI"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Create a Heroku account "),e("a",{attrs:{href:"https://signup.heroku.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Run "),e("code",[t._v("heroku login")]),t._v(" and fill in your Heroku credentials:")])])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("heroku login\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("Create a file called "),e("code",[t._v("static.json")]),t._v(" in the root of your project with the content below:")])]),t._v(" "),e("p",[e("code",[t._v("static.json")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"root"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./docs/.vuepress/dist"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This is the configuration of your site. see more at "),e("a",{attrs:{href:"https://github.com/heroku/heroku-buildpack-static",target:"_blank",rel:"noopener noreferrer"}},[t._v("heroku-buildpack-static"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("Set up your Heroku git remote:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# version change")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My site ready for deployment."')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# creates a new app with a specified name")]),t._v("\nheroku apps:create example\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# set buildpack for static sites")]),t._v("\nheroku buildpacks:set https://github.com/heroku/heroku-buildpack-static.git\n")])])]),e("ol",{attrs:{start:"6"}},[e("li",[t._v("Deploying Your Site")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# publish site")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push heroku master\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# opens a browser to view the Dashboard version of Heroku CI")]),t._v("\nheroku "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v("\n")])])]),e("h2",{attrs:{id:"now"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#now","aria-hidden":"true"}},[t._v("#")]),t._v(" Now")]),t._v(" "),e("p",[t._v("Please refer to "),e("a",{attrs:{href:"https://zeit.co/examples/vuepress/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Deploy an example vuepress website with Now"),e("OutboundLink")],1),t._v(".")])])},[],!1,null,null,null);s.default=n.exports}}]);