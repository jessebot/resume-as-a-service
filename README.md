Resume as a Service (RaaS)
=====================
This is a single page resume website optimized for DevOps Engineers&trade;

It includes the ability to modify:
* Profile Photo
* Name and pronouns
* Small blurb about yourself
* GitHub profile link
* LinkedIn profile link
* PDF download of your CV from an external link (such as Google Docs)

This serves as a great project to get started with some common technologies for
the field. I'll go over the entire stack with you below.

A demo lives [here](https://jessebot.work).

Setting up your own RaaS
-------------------------
* Modify the `.env` file for your own metadata.
* Make sure you copy whatever image you want to use as your profile photo into 
  the `public` directory.
* Make sure you have `npm` installed following the guide [here](https://docs.npmjs.com/cli/v7/configuring-npm/install).
* To test locally with a prod build:
  ```
  npm ci
  npm run build
  npm start
  ```
* Then go to http://localhost:5000 in a browser.
* Once you're happy, proceed to *EITHER* the CircleCI or GitHub Actions setup.
  These will get your Docker image pushed to DockerHub by default. Both are
  free for a limited number of builds per month :)

### GitHub Actions Setup
Currently this just builds your Dockerfile, and then pushes to a DockerHub repo called resume-as-a-service for your DockerHub user. It assumes you're already using git tags to tag your pushes, and pushes those upstream as well.

* The configuration file is already present in `.github/workflows/build.yml` for you to modify.
* Set up your GitHub Repository Secrets in Settings > Secrets. You'll need the following: 
  * `DOCKER_USERNAME` (docker registry username)
  * `DOCKER_PASSWORD` (docker registry password)

### CircleCI Setup
This will just push to DockerHub using the `latest` tag.
*Not maintaining this section as often.*

* You'll need to modify the CircleCI file (`circleci/.circleci/config.yml`) to have your own docker info :)
* Run the following: `mv circleci/.circleci/config.yml .circleci/config.yml`
* Set up your project, at [CircleCI](https://app.circleci.com/) - you'll need to connect your GitHub
* Make sure the following environmental variables are set up in your Project Settings:
  * `DOCKER_LOGIN` (docker registry username)
  * `DOCKER_PASSWORD` (docker registry password)
* Should be able to do a commit and it kicks off a push to your docker repo :D

## Coming Soon
 - Better Accessibility - currently only alt text is provided for the profile
   image, and we can certainly do better for people who use screen readers!
 - Color pickers - currently we only support dark tones with blue accents
 - Complete walkthrough on deploying this to:
   * K8s
     * See the `README.md` in the `k8s_minimum` directory for the beginnings of
       getting this up and running on Kubernetes! :)
   * AWS ECS/Fargate
   * Additional App Platforms, such as [Digital Ocean's App Platform](https://www.digitalocean.com/products/app-platform/)
- Better spacing depending on different mediums. Currently only optimized for 
  mobile and smaller screens. Need to test on 24+ inch 4k monitors.


Shameless call for code friends
-------------------------------
Tired of never having anything to point to
outside of your closed source projects for other companies? Why not contribute 
and play with my project! :D

Together, we'll have the cheapest, fastest, most scalable, and highly available
resumes, and we will get all the jobs!

(I actually already have a job, but I like this project.)

Under the Hood
--------------

### Frontend
* [React-Bootstrap](https://react-bootstrap.github.io/)

### Backend
* Docker - A slim version of the default node.js image
* [node.js](https://nodejs.org/en/)

### CI/CD
* [GitHub Actions](https://github.com/features/actions)
  * (with [CircleCI](https://circleci.com/) as an option)

_And special thanks to..._
* The Open Source Community <3
