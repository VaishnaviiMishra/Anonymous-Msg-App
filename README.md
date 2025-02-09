 Anonymous Message Sender

![Screenshot 2025-01-29 190700](https://github.com/user-attachments/assets/d8c507c5-42c8-497b-8a7c-85fde8728e27)
![Screenshot 2025-01-29 190638](https://github.com/user-attachments/assets/90db56f4-8a6f-46f0-bb98-4347ff76da79)


 Overview
Anonymous Message Sender is a secure and scalable anonymous messaging app built using Next.js, React 19, and TypeScript. It features real-time messaging, AI-powered responses, and email notifications to enhance the user experience.

 Features
- Secure Authentication: Integrated NextAuth for user authentication.
- Real-Time Messaging: Instant messaging experience.
- AI-Powered Responses: Utilizes OpenAI API to generate responses.
- Email Notifications: Sends notifications using Resend and React Email.
- Database Management: MongoDB (via Mongoose) for efficient data storage.

 Tech Stack
- Frontend: Next.js, React 19, TypeScript
- Authentication: NextAuth
- Database: MongoDB (Mongoose)
- Messaging & AI: OpenAI API
- Email Services: Resend, React Email

 Installation
 Prerequisites
- Node.js installed
- MongoDB instance set up
- Environment variables configured

 Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/VaishnaviiMishra/Anonymous-Msg-App.git
   cd Anonymous-Msg-App
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in a `.env.local` file:
   ```plaintext
   NEXTAUTH_SECRET=your_secret_key
   MONGODB_URI=your_mongodb_connection_string
   OPENAI_API_KEY=your_openai_api_key
   RESEND_API_KEY=your_resend_api_key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

 Deployment
This app can be deployed on Vercel for seamless hosting. Ensure environment variables are configured in Vercel settings before deploying.

 Contribution
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

 License
This project is licensed under the MIT License.

## Contact
For any queries, reach out to [Vaishnavii Mishra](https://github.com/VaishnaviiMishra).


