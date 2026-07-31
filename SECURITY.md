# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly. **Do not open a public GitHub issue for security vulnerabilities.**

### How to Report

1. Email your findings to the project maintainers with the subject line: `[SECURITY] Vulnerability Report - kiro-hub`
2. Include a detailed description of the vulnerability
3. Provide steps to reproduce the issue
4. If possible, include a proof of concept or suggested fix

### What to Expect

- **Acknowledgment**: We will acknowledge receipt of your report within 48 hours.
- **Assessment**: We will investigate and assess the severity within 5 business days.
- **Resolution**: We aim to release a fix within 14 days for critical vulnerabilities.
- **Disclosure**: We will coordinate with you on public disclosure timing.

### Scope

The following are in scope for security reports:

- Cross-site scripting (XSS)
- Injection vulnerabilities
- Authentication or authorization bypasses
- Sensitive data exposure
- Server-side request forgery (SSRF)
- Security misconfigurations

### Out of Scope

- Vulnerabilities in third-party dependencies (report these upstream)
- Issues that require physical access to the server
- Social engineering attacks
- Denial of service (DoS) attacks

## Security Best Practices

This project implements the following security measures:

- Content Security Policy (CSP) headers
- Strict Transport Security (HSTS)
- X-Frame-Options and X-Content-Type-Options headers
- Referrer-Policy headers
- Permissions-Policy headers
- Input validation on all form fields

## Thank You

We appreciate the security research community and those who responsibly disclose vulnerabilities. Your efforts help keep this project and its users safe.
