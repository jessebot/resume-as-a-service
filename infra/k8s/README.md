A collection of useful k8s files:

* `deployment.yaml`
** You'll need this for creating a couple of replicas of your pods, which are
   collections of (Docker in our case) containers running on Kubernetes

* `service.yaml`
** You'll need this for setting up networking to your pods.

Before you proceed with the other files, make sure you expose your k8s service
you've created. Here's what I did:

`kubectl expose deployment resume-deployment --type="LoadBalancer"`

* `ingress.yml`
** You'll need this to route your incoming web traffic to your pods. You'll need
to update your-domain.tld in the file

Before you proceed with the other files, make sure you have an
nginx-ingress controller, and let's encrypt's certmanager setup with helm.

If you're on digital ocean, you can just one click install nginx-ingress. For 
Let's Encrypt though, you'll need the below commands:

*Create the Namespace*
`kubectl create namespace cert-manager`

*Add the helm repo to cache*
`helm repo add jetstack https://charts.jetstack.io`
*Make sure your repos are up to date*
`helm repo update`
*Install letsencrypt via helm*
`helm install cert-manager --namespace cert-manager jetstack/cert-manager --version v0.14.1`

* `lets_encrypt_prod_issuer.yml`
** For some reason I still needed to create this even after the above. You'll need 
to replace your email.


This was helpful to doublecheck that I did everything right with SSL on k8s:
https://www.digitalocean.com/community/tutorials/how-to-set-up-an-nginx-ingress-with-cert-manager-on-digitalocean-kubernetes

Also this for when your issuer fails:
https://github.com/bitnami/kube-prod-runtime/issues/532
