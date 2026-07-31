# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability within this project, please report it responsibly.

**Do not open a public GitHub issue for security vulnerabilities.**

Instead, please send an email or use GitHub's private vulnerability reporting feature:

1. Go to the **Security** tab of this repository
2. Click **Report a vulnerability**
3. Fill in the details of the vulnerability

### What to include

- A description of the vulnerability
- Steps to reproduce the issue
- The potential impact
- Any suggested fixes (optional)

### Response timeline

- **Acknowledgment**: Within 48 hours of report submission
- **Initial assessment**: Within 5 business days
- **Resolution**: Depends on severity and complexity

### After a fix is released

Once a fix has been released, we will:

1. Publish a security advisory on GitHub
2. Credit the reporter (unless anonymity is requested)
3. Release a patched version

## Security Best Practices

This project follows these security practices:

- Dependencies are regularly audited with `npm audit`
- All PRs require CI checks to pass before merging
- No secrets or credentials are committed to the repository
- Input validation is applied where applicable

## Scope

This security policy applies to the Kiro Hub web application codebase. It does not cover:

- Third-party services or dependencies (report to their maintainers)
- Social engineering attacks
- Denial of service attacks against hosted instances
