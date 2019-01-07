---
templateKey: tech-post
title: How to add Comodo PositiveSSL Certificate to a Node/Express server
date: 2018-10-28T23:06:57.465Z
description: >-
  This blog will teach you how to add a Comodo PositiveSSL Certificate to a
  Node/Express server.
tags:
  - SSL
  - Commodo
  - Nodejs
  - Expressjs
---
<h2>Technologies</h2>
<ul>
 	<li>Express - v4.13.4</li>
 	<li>Node - v6.11.5</li>
 	<li>Comodo PositiveSSL</li>
 	<li>Digital Ocean</li>
 	<li>GoDaddy</li>
</ul>
Before reading further, your environment should have a Node server set up using ExpressJs listening at port 80(HTTP) and port 443(HTTPS) (<a href="https://medium.com/netscape/everything-about-creating-an-https-server-using-node-js-2fc5c48a8d4e">Learn how to set up a Node/Express server</a>) and upload this server on your Digital Ocean droplet. (<a href="https://www.digitalocean.com/community/tutorials/how-to-create-your-first-digitalocean-droplet">Learn how to set up a droplet on Digital Ocean</a>). There are _ steps to applying the Comodo PositiveSSL certificate to the server:
<ol>
 	<li>Purchase a domain</li>
 	<li>Purchase the cert from Comodo</li>
 	<li>Activate the cert on Digital Ocean</li>
 	<li>Apply the cert to server</li>
</ol>
<h2>1. Purchase a domain</h2>
To purchase a domain is one of the easier steps. Personally, I bought my domain from <a href="https://www.godaddy.com/">GoDaddy</a>. You can create an account first then search for the domain or vice versa. After you search for your domain name, you should see something as follows:

<img class="aligncenter size-large wp-image-96" src="http://yesterdayilearned.com/wp-content/uploads/2017/12/Screen-Shot-2017-12-10-at-2.55.07-PM-1-1024x655.png" alt="" width="688" height="440" />

&nbsp;

Next steps are pretty intuitive so I'm not going to give you a step-by-step. After all the payments are done, you should see your domain under your account and you are done with step one.

&nbsp;

<img class="aligncenter wp-image-91 size-full" src="http://yesterdayilearned.com/wp-content/uploads/2017/12/Screen-Shot-2017-12-10-at-3.00.05-PM.png" alt="" width="1159" height="347" />

Then click <strong>DNS</strong> to modify your <strong>Nameservers</strong> to redirect to Digital Oceans:

<img class="aligncenter size-large wp-image-99" src="http://yesterdayilearned.com/wp-content/uploads/2017/12/Screen-Shot-2017-12-10-at-11.07.31-PM-1024x325.png" alt="" width="688" height="218" />
<h2>2. Purchase PositiveSSL Certificate from Comodo</h2>
From what I have seen, many people are introducing a free SSL certificate provider called <a href="https://letsencrypt.org/">Let's Encrypt</a>. I'm sure it works well for most but I assume there are people like me who are interested in using Comodo's SSL certificates. Personally, I purchased the cheapest certificate to play around with, and that is the Positive SSL certificate.

To purchase the Positive SSL certificate, you simply sign up on <a href="https://comodosslstore.com/">their website</a>, and click <strong>Add to cart</strong> next to the <strong>Positive SSL</strong> row under <strong>STANDARD DV SSL CERTIFICATES</strong>. After following the instructions and making the payment, you will be asked to provide the website's domain and method of activation. Activation will be explained in the next section, but just select the <strong>CNAME</strong> option for now. Next, you will be asked to provide the CSR for the certificate. This can be done using their <strong>CSR generation tool</strong>, which should be a clickable link in the instructions above the text window. The CSR generation tool should appear in a new tab and it should be a straight forward form filling process. After that is done, store the generated <strong>private key</strong> at a safe and accessible location from your server, and copy and paste the <strong>public key</strong> to the previous tab where it originally asked you to provide the CSR.
<h2>3. Activate the cert on Digital Ocean</h2>
Activating the SSL certificate with Digital Ocean is very simple. At this point, your server droplet should be connected properly and you should be able to visit your site at your domain without a problem. After you purchased the SSL cert, you should received an order summary as follow:

<img class="aligncenter size-full wp-image-98" src="http://yesterdayilearned.com/wp-content/uploads/2017/12/Screen-Shot-2017-12-10-at-10.19.28-PM.jpg" alt="" width="636" height="503" />

The blurred lines are sensitive information which you should keep only to your self, but you do not need to store them anywhere since you will only need them to activate your SSL certificate. By following the instructions provided above, direct to your Digital Ocean account and click <strong>Networking</strong> from the top menu. Once the page loads, you can add your domain and it should redirect you to a DNS records management page. Select <strong>CNAME</strong> to create a record and copy and paste the <strong>Alias/Host Name</strong> and <strong>Point to</strong> link in the corresponding fields. Lastly, fill in <strong>3600</strong> for <strong>TTL</strong> and click <strong>Create record</strong> to complete the record creation. After 15-20 minutes, refresh your Comodo site and the status should change from pending to active, which means your SSL certificate is ready to be used.
<h2>4. Apply the cert to server</h2>
This is the final step to making your server secure with a SSL certificate! Once your SSL certificate is activated, you should receive an email from Comodo with all of your certificates (.crt files) in a zip file. I had a hard time transferring these certificates to the server but I was able to do it by using <a href="https://docs.oracle.com/cd/E26502_01/html/E29001/remotehowtoaccess-14.html">SFTP</a>. Once you transferred these certificated to a safe an accessible folder, open your <strong>server.js</strong> file and populate the following field that you left blank from before.
<pre>var options = {
  key: fs.readFileSync('./ssl/private.key');,
  ca: [
    fs.readFileSync('./ssl/AddTrustExternalCARoot.crt'),
    fs.readFileSync('./ssl/COMODORSADomainValidationSecureServerCA.crt'),
    fs.readFileSync('.ssl//COMODORSAAddTrustCA.crt')
  ],
  cert: fs.readFileSync('./ssl/[your_domain_name].cert');
};
</pre>
Now try starting your server again go to your domain in the browser and you should see the SSL certificate applied correctly!

Feel free to reach out to me with questions and suggestions!
