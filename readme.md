# Christian Q&A App

A platform connecting users with Christian scholars and leaders for spiritual guidance and answers. Users can ask questions privately or contribute to a public knowledge base of faith-related Q&A.

## Key Features

- User authentication system
- Responder profiles with credentials
  - Profile pictures
  - Professional background
  - Academic achievements
  - Denominational affiliation
- Public Q&A browsing
- Private question submission
  - Question title and description
  - Urgency indicator
  - Responder selection
  - Optional anonymous public posting
- Direct messaging system
- Question forwarding between responders
- Real-time notifications

## Tech Stack

- Frontend: React Native + TypeScript
- Styling: Tailwind CSS
- Backend: Node.js + Express
- Database: MongoDB
- Authentication: Firebase
- Real-time Features: Firebase

## Setup Instructions

1. Make sure you have Node.js (>=14) installed on your system
2. Install development dependencies:

   ```bash
   npm install
   ```

3. Run the app:
   - For iOS:
     ```bash
     cd ios
     pod install
     cd ..
     npx react-native run-ios
     ```
   - For Android:
     ```bash
     npx react-native run-android
     ```

## Development Requirements

- Node.js >= 14
- React Native >= 0.71
- Xcode (for iOS development)
- Android Studio (for Android development)
