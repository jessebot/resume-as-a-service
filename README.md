Resume as a Service (RaaS)
=====================
This is a single page resume website optimized for DevOps Engineers&trade;

This serves as a great project to get started with some common technologies for
the field. I'll go over the entire stack with you below.

A demo lives [here](https://jessebot.io).

Setting up your own RaaS
-------------------------
*Under Construction*
* Modify the `config.json` file for your own metadata.
* Make sure you copy whatever image you want to use as your profile photo into 
  the `public` directory.
* Make sure you have `npm` installed.
* To test locally: `npm ci && npm start`
* If you want CI/CD to work, you'll need to modify the circleci file here to 
  have your own docker username :)

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

_And special thanks to..._
* The Open Source Community <3
