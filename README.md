# LoopBack Progressive Web App

![LoopBack logo](logo-loopback.png "LoopBack")
![Progressive Web Apps logo](logo-pwa.png "Progressive Web Apps")

A Progressive Web App served from [LoopBack](http://loopback.io) that:

- ⚙️ Uses a [Service Worker](https://developers.google.com/web/ilt/pwa/introduction-to-service-worker) to enable the app to work whether or not the end user's device has an internet connection (this is what is referred to as an [Offline First](http://offlinefirst.org/) approach)
- 📱 Contains a [web app manifest](https://developers.google.com/web/fundamentals/web-app-manifest/) to control how the app is experienced by end users
- 🔐 Is served over [HTTPS](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https) for security
- 🚀 Is served over [HTTP/2](https://developers.google.com/web/fundamentals/performance/http2/) for performance
- 💯 Scores 100s in all categories within the [Lighthouse](https://developers.google.com/web/tools/lighthouse/) web app audit tool

## Quick Start

Install Node.js if it is not already installed:

* [Download Node.js](https://nodejs.org/en/download/) or
* [Install Node.js via a package manager](https://nodejs.org/en/download/package-manager/)

Clone or download the [`loopback-pwa`](https://github.com/ibm-watson-data-lab/loopback-pwa) repository from GitHub.

Navigate to the `loopback-pwa` directory:

```bash
$ cd loopback-pwa
```

Install npm dependencies:

```bash
$ npm install
```

Run the `generate-key` script to generate a new private key:

```bash
$ npm run generate-key
```

Run the `generate-cert` script to generate a new self-signed certificate:

```bash
$ npm run generate-cert
```

Alternatively, run the `generate-csr` script to generate a new certificate signing request to send to a certificate authority:

```bash
$ npm run generate-csr
```

Optionally, install the self-signed certificate (`server/private/localhost.cert.pem`) as trusted by your computer. The steps needed for this will vary by operating system. If you skip this step then your web browser will warn you that the certificate is not trusted.

To install the self-signed certificate on macOS:

1. Open the `server/private` directory in Finder. This can be done in Finder or with the following command:  
```bash
$ open server/private
```
2. Open the Keychain Access utility app. This can be done in Finder or with the following command:  
```bash
$ open "/Applications/Utilities/Keychain Access.app"
```
3. In Keychain Access, ensure that "System" is selected under "Keychains" and that "Certificates" is selected under "Category."
4. Drag-and-drop the `localhost.cert.pem` file from the `server/private` directory in Finder into Keychain Access. Enter your password if prompted.
5. Double-click the self-signed certificate in Keychain Access (it should be named "LoopBack PWA (localhost)").
6. Under the "Trust" section, change the value of "When using this certificate" to "Always Trust."
7. Close the "LoopBack PWA (localhost)" certificate window in Keychain Access. Enter your password when prompted.
8. You can now close Keychain Access and the `server/private` directory in Finder.

Run the LoopBack app:

```bash
$ node .
```

Go to [https://localhost:8443/](https://localhost:8443/) in your web browser.
