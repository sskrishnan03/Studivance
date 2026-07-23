<p align="center">
  <img src="img/study image.png" alt="Studivance Application Preview" width="100%" />
</p>

<h1 align="center">Studivance</h1>

<p align="center">
  A comprehensive, AI-powered student study management platform designed to help you
  organize subjects, manage tasks, schedule exams, take notes, and achieve your
  academic goals — all from a single, beautifully crafted interface.
</p>

<p align="center">
  <a href="#overview">Overview</a> &nbsp;&middot;&nbsp;
  <a href="#key-features">Features</a> &nbsp;&middot;&nbsp;
  <a href="#how-it-works">How It Works</a> &nbsp;&middot;&nbsp;
  <a href="#installation">Installation</a> &nbsp;&middot;&nbsp;
  <a href="#usage">Usage</a> &nbsp;&middot;&nbsp;
  <a href="#license">License</a>
</p>

## Overview

Studivance is a browser-based academic management platform built to replace scattered tools, forgotten deadlines, and disorganized notes with one unified experience. Every piece of data lives directly in your browser — no servers, no accounts, no sign-ups.

The application combines traditional study management with modern AI capabilities. You can track subjects with progress metrics, organize tasks on a visual Kanban board, schedule exams with live countdowns, write rich notes, plan timetables, and even have a natural conversation with an AI assistant that can generate study materials, answer questions, and provide personalized insights.

Whether you are a college student managing multiple courses, a high school learner preparing for exams, or anyone looking to bring structure to their study routine, Studivance gives you full control over your academic life with a clean, distraction-free interface.

## Key Features

**Subject Management**
Keep all your academic subjects organized in one place. Add details like instructors, types, and color labels. Progress is tracked automatically as you complete tasks and exams tied to each subject.

**Kanban Task Board**
Manage assignments and study tasks with a drag-and-drop board. Move cards between Pending, In Progress, and Submitted to visualize your workload at a glance and stay on top of every deadline.

**Exam Scheduling with Live Countdowns**
Set exam dates and never lose track of time. Live countdown timers on the dashboard show exactly how many days remain before each exam, giving you a constant reminder to stay prepared.

**Interactive Timetable**
Plan your week, month, or day using a built-in calendar. Schedule classes, study sessions, and personal events in one view so you always know what comes next.

**Rich Notes with AI**
Write formatted notes with a full rich-text editor that supports attachments and subject tagging. Generate notes from any topic using AI, get summaries, simplified explanations, or test yourself with interactive quizzes.

**SMART Goal Tracking**
Define clear, measurable academic goals and monitor your progress toward each one. The AI can suggest SMART goals based on your current subjects, exams, and workload.

**AI Study Assistant**
A built-in chatbot called Doubtrium answers questions, explains concepts, generates study guides, creates quizzes, and provides personalized insights based on your actual data and progress.

**Data Portability**
Export and import everything through CSV, JSON, or DOCX. Take full backups, transfer data between devices, or bring in existing content seamlessly. Your data never leaves your browser.

**Multi-Language Interface**
Use the entire application in English, Hindi, Tamil, or Kannada. Every button, label, menu, and message is fully translated for a native experience.

## How It Works

**1. Open the Application**
Launch the app in your browser. Everything loads instantly since all data is stored locally — there is no server to wait for.

**2. Explore the Dashboard**
The dashboard greets you with a complete overview of your academic life. You will see your total subjects, active tasks, upcoming exams, active goals, a subject progress chart, and AI-generated study insights tailored to your current workload.

**3. Add Your Subjects**
Navigate to the Subjects page and start adding your courses. You can enter them manually with full details or use the AI generator to create a complete set based on your program.

**4. Organize Your Tasks**
Head to the Tasks page and set up your Kanban board. Create cards for assignments, projects, or study goals and drag them across columns as you make progress.

**5. Schedule Your Exams**
Open the Exams page to set exam dates and details. The dashboard will display live countdown timers so you always know how much preparation time you have left.

**6. Build Your Timetable**
Use the Timetable page to map out your weekly schedule. Add classes, study blocks, and personal events to stay organized throughout the week.

**7. Take and Enhance Notes**
The Notes page lets you write, format, and organize study notes with rich text, attachments, and topic tags. Select any note and use the AI assistant to generate summaries, explanations, or quizzes from its content.

**8. Use the AI Assistant**
Open the AI chatbot whenever you need help. Ask it to generate notes on a topic, create a study guide for an upcoming exam, build a weekly timetable, suggest SMART goals, or simply answer any academic question.

**9. Track Your Progress**
Return to the Dashboard at any time for a real-time snapshot of your progress, upcoming deadlines, and personalized insights that adapt as your data changes.

## Installation

**Prerequisites**

- Node.js 18 or higher
- npm 9 or higher

**Setup**

```bash
git clone https://github.com/your-username/studivance.git
cd studivance
npm install
```

**Environment Configuration**

Create a `.env` file in the project root and add your Groq API key. You can obtain a free key from the Groq Console at console.groq.com.

```
GROQ_API_KEY=your_api_key_here
```

**Start the Application**

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Usage

Once the application is running, you will land on the Dashboard — your central hub for an overview of all academic activity.

- **Add subjects** from the Subjects page by filling in the details manually or using the AI generator to create a complete course set instantly.
- **Create tasks** on the Kanban board to track assignments and study goals. Drag cards between columns as you progress through each stage.
- **Schedule exams** on the Exams page to see live countdown timers on your dashboard and generate AI-powered study guides for each exam.
- **Plan your timetable** using the interactive calendar. Add classes, study sessions, and events to build a weekly routine that keeps you on track.
- **Write notes** using the rich-text editor. Tag them by subject and topic, then use AI to summarize, explain, or quiz yourself on the content.
- **Set goals** to define clear academic targets. Let the AI suggest SMART goals based on your current workload and track your progress over time.
- **Chat with the AI assistant** to perform tasks hands-free. Ask it to generate study materials, answer questions, or provide insights based on your data.
- **Back up your data** at any time from the Settings page. Export everything as JSON, CSV, or DOCX and restore it later on any device.

## License

This project is private and intended for educational use.
