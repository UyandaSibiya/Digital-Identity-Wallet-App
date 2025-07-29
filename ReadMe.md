# 🌐 Digital ID Wallet

A secure, blockchain-powered web application that allows users to store, manage, and share their personal identity documents such as IDs, passports, licenses, certificates, and insurance policies—all in one digital wallet with a quiz game to give the users knowledge on importance of insurance.

## 🧠 Project Summary

This project was created to solve a real community problem: the need for safe, accessible, and verifiable digital versions of essential documents. Many people face challenges when documents are lost, stolen, or inaccessible—especially in urgent situations. Our solution provides a secure platform to store, retrieve, and share documents instantly and verifiably.

## 🚀 Features

- 📂 Upload and manage personal documents (IDs, certificates, CVs, licenses, etc.)
- 📅 Document expiry tracking and reminders (e.g., 3-month expiry for SA certified copies)
- ✅ Certified copy tracking (e.g., SAPS certified documents)
- 🔐 Secure user authentication (email & password, optional biometric)
- 📱 QR Code functionality for quick document sharing and verification
- 💳 Optional payment card support to simulate digital transactions
- 🧾 Upload CVs and social links (GitHub, LinkedIn, etc.)
- 🧬 Blockchain integration for document authenticity and tamper protection
- 🛡️ Insurance policy storage and access
- 🌍 Works on desktop and mobile browsers

## 🧪 How to Run (Development)

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/digital-id-wallet.git
   cd digital-id-wallet
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the server:
   ```bash
   node server.js
   ```

4. Open your browser at:
   ```
   http://localhost:8080
   ```

## 🧪 Testing

### Running Tests

To run the complete test suite:

```bash
# Run all tests once
npm test

# Run tests in watch mode (automatically re-runs when files change)
npm run test:watch

# Run tests with coverage report
npm test -- --coverage
```

### Test Structure

Our test suite includes:

- **Backend API Tests** (`tests/server.test.js`) - Tests for login/register endpoints
- **Frontend Unit Tests** (`tests/frontend.test.js`) - Tests for utility functions like email validation
- **Integration Tests** (`tests/integration.test.js`) - Tests for complete user flows

### Test Coverage

The tests cover:
- ✅ User authentication (login/register)
- ✅ Email validation
- ✅ DOM manipulation utilities
- ✅ API error handling
- ✅ Frontend-backend integration

### Prerequisites for Testing

Make sure you have installed the development dependencies:

```bash
npm install --dev
```

Required testing packages:
- `jest` - Testing framework
- `supertest` - HTTP assertion library
- `jsdom` - DOM simulation for frontend tests

🛠 Tech Stack

    Frontend: HTML, CSS, JavaScript

    Backend: Node.js + Express

    Authentication: Custom (email & password)

    Storage: Local (simulated), can be extended to IPFS/S3

    Blockchain: Ethereum or testnet (for proof-of-concept)

    QR Code: JavaScript QR generation

🧩 Future Features

    Biometric login (mobile support)

    Decentralized file storage (IPFS)

    Third-party document verification

    Job application module

    Mobile app version

🎯 Target Users

    Job seekers

    Students

    Gig workers/freelancers

    Government offices verifying citizen ID

    Insurance and legal sectors needing document traceability

📈 Measuring Success

    Number of registered users

    Number of documents uploaded

    Frequency of document sharing (QR scans)

    User feedback

    Uptime & security audit results

💡 Unique Value

Unlike standard file storage or mobile wallets, our product offers:

    Verifiable certified documents

    Blockchain authenticity layer

    Expiry-based reminders

    Government-friendly QR-based verification

👥 Team Roles

To be assigned (e.g., frontend, backend, blockchain, UI/UX, documentation)
📄 License

MIT License. See LICENSE file for details.

## TEAM 26

-Uyanda Sibiya
-Nhanhla Zondi
-lohann Doualla
-Thuto Ratlhahane


