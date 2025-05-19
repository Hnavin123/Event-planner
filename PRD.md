
Project Name: Event Planner

Project Type: Web Application

Tech Stack: Vite + React, React Router, Context API (or Redux if needed), Firebase/Node for auth & backend (optional), Tailwind CSS or CSS Modules

1. Objective
To create a comprehensive Event Planner platform that enables users to organize events, manage guest lists, send invitations, track budgets, and connect with event planners.

2. Key Features
🏠 Public Pages
Homepage

Contact Form

Planner Directory

Planner Profile Page

👤 User Side
User Registration/Login

User Dashboard

My Events

Create Event

Event Details

Checklist

Budget Assistant

Invitations (E-cards)

Notes

Find Planners

🧑‍💼 Planner Side
Planner Registration/Login

Planner Dashboard

My Profile

Edit Profile

Leads

Lead Details

3. User Roles
1. Guest (Unauthenticated)
Can browse homepage, contact form, planner directory

2. User
Can register/login

Can create and manage events

Can search planners and send invitations

3. Planner
Can register/login

Can manage their profile

Can view and respond to leads

4. User Flows
A. User Flow:
Visit homepage → Register/Login

Access user dashboard

Create event

Add checklist, budget, guests

Search planner → View profile → Contact

B. Planner Flow:
Register/Login as a planner

Set up profile

View leads from users

Respond to leads/messages

5. UI Requirements
Responsive design

Clean, intuitive layout

Use of icons, modals, and progress indicators

Dashboard views for users and planners

Forms with validation

6. Tech Requirements
Frontend: Vite + React

Routing: React Router v6+

State Management: Context API / useState (or Redux if large scale)

Styling: Tailwind CSS / CSS Modules

Auth (Optional): Firebase Auth / Custom Backend

Data Storage (Optional): Firebase Firestore / Supabase / JSON for local dev

E-card Sending: Placeholder for email API (EmailJS, etc.)

7. Milestones / MVP Plan
✅ Phase 1: Setup
Project structure & routing

Create Home, Auth pages, and Layouts

✅ Phase 2: User Features
User registration/login

User dashboard basic structure

Event creation and checklist

✅ Phase 3: Planner Features
Planner registration/login

Profile and lead pages

✅ Phase 4: Extra Features
E-card sending

Budget assistant

Notes

Searchable planner directory

8. Stretch Goals (Optional)
Chat system between users and planners

Admin dashboard

Real-time updates

File upload for event images

