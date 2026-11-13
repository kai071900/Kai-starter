KAI STARTER v0.1 — PHONE-FIRST WEB APP

WHAT THIS IS
A beginner-friendly installable web-app prototype (PWA). It gives you a KAI home screen, local message drafting templates, copy-to-clipboard, and a demo Busy Mode toggle.

IMPORTANT LIMITS
- This is NOT a native Android APK.
- It does not read WhatsApp/SMS notifications, access contacts, answer calls, read Gmail, or send anything.
- Busy Mode is only a visual toggle in this starter.
- No AI API key is included. The draft logic is local and intentionally simple.
- Do not paste sensitive/private information into third-party AI services.
- Never put an API key in frontend JavaScript or a public repository.

HOW TO INSTALL USING ONLY YOUR PHONE
1. Extract this ZIP using your phone's Files app.
2. To install as an app, the files must be hosted over HTTPS. A simple free route is to create a GitHub account, create a public repository named kai-starter, and upload these files to its root.
3. In the repository, open Settings > Pages. Under Build and deployment, choose Deploy from a branch, select main and /(root), then Save.
4. Wait for GitHub Pages to publish. Open the published HTTPS site in Chrome on Android.
5. Chrome menu (three dots) > Add to Home screen or Install app.
6. Open KAI from your home screen.

PHONE SETTINGS
To check Android version: Settings > About phone > Android version.
Menu names vary by Vivo/Oppo model and Funtouch OS/ColorOS version.

NEXT DEVELOPMENT STEPS
1. Add a secure backend for an AI API (never expose API keys in app code).
2. Add Gmail using Google OAuth and least-privilege scopes.
3. For notifications, build a native Android NotificationListenerService app; user must explicitly grant Notification Access.
4. Treat message content as untrusted. Require approval before sending replies.
5. Call screening/answering and WhatsApp automation have platform, carrier, and policy restrictions. Do not promise full automation.

FREE-FIRST
GitHub Pages can host static files at no charge within its applicable limits. AI APIs may have free quotas that change. Hosting a secure backend may require a free-tier service and can have limits.
