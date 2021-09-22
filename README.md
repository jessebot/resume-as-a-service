Resume as a Service (RaaS)
=====================
This is a single page resume website optimized for DevOps Engineers&trade;

This serves as a great project to get started with some common technologies for
the field. I'll go over the entire stack with you below.

A demo lives [here](https://jessebot.io).

Setting up your own RaaS
-------------------------
* Modify the `.env` file for your own metadata.
* Make sure you copy whatever image you want to use as your profile photo into 
  the `public` directory.
* Make sure you have `npm` installed.
* To test locally: `npm ci && npm start`

*CircleCI CI/CD Setup*
* You'll need to modify the CircleCI file (`circleci/.circleci/config.yml`) to have your own docker info :)
* Run the following: `mv circleci/.circleci/config.yml .circleci/config.yml`
* Set up your project, at [CircleCI](https://app.circleci.com/) - you'll need to connect your GitHub
* Make sure the following environmental variables are set up in your Project Settings:
  `DOCKER_LOGIN` (docker registry username) and `DOCKER_PASSWORD` (docker registry password)
* Should be able to do a commit and it kicks off a push to your docker repo :D

*GHA CI/CD Setup*
* Hold on, I'm working on this. We'll have ya all setup in a jiffy!

For help developing and testing
-----------------------------
*Shameless call for code friends*: Tired of never having anything to point to
outside of your closed source projects for other companies? Why not contribute
and play with my project! :D

Together, we'll have the cheapest, fastest, most scalable, and highly available
resumes, and we will get all the jobs!

(I actually already have a job, but I like this project.)

See the `README.md` in the `k8s_minimum` directory for getting this up and
running on Kubernetes! :)

Under the Hood
--------------

### Frontend
* React
* Bootstrap

### Backend
* Kubernetes
* Docker
* node.js

### CI/CD
* Circleci
* Currently working on moving to GHA :D

_And special thanks to..._
* The Open Source Community <3
