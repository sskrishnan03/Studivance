<h1 align="center">Studivance</h1>

<p align="center">
  <em>A comprehensive, AI-powered study management platform built for students who want to organize their academics, boost productivity, and learn smarter — all in one place.</em>
</p>

<br/>

<div align="center">
  <img src="img/study image.png" alt="Studivance Application Preview" width="90%"/>
</div>

<br/>

## Project Overview

Studivance was created to solve a problem every student faces — juggling multiple subjects, tasks, exams, notes, and schedules across scattered tools. It brings everything together into a single, beautifully designed platform where students can manage their entire academic life without switching between apps.

Everything runs entirely in the browser with no server dependency, giving students full control over their data while keeping the experience fast and private.

<br/>

## Key Features

<br/>

**Subject Management**

Keep track of all your academic subjects in one place. Add details like instructors, types, and colors to personalize your dashboard. Progress is tracked automatically as you complete tasks and exams.

**Smart Task Board**

A drag-and-drop Kanban board lets you move tasks through Pending, In Progress, and Submitted stages. Stay organized and visualize your workload at a glance.

**Exam Schedule with Live Countdowns**

Never miss an exam again. Schedule exams with dates and get live countdown timers on your dashboard so you always know how much preparation time remains.

**Interactive Timetable**

Plan your week, month, or day with a built-in calendar. Add classes, study sessions, and events to create the perfect schedule.

**Rich Notes with AI Assistance**

Write notes using a full rich-text editor with formatting, attachments, and subject tagging. Generate notes from any topic using AI, get summaries, explanations, and even interactive quizzes from your existing notes.

**Goal Setting**

Define clear academic goals and track your progress toward each one. AI can help you generate SMART goals based on your current subjects and workload.

**AI-Powered Study Assistant**

A built-in chatbot called Doubtrium can answer questions, explain concepts, generate study materials, create quizzes, and provide personalized insights based on your data.

**Data Import and Export**

Back up everything as JSON, or export and import subjects, tasks, exams, and goals via CSV. Notes can be exported as styled documents.

**Multi-Language Support**

Use the entire application in English, Hindi, Tamil, or Kannada. Every label, button, and message is fully translated.

<br/>

## How It Works

1. Open the application in your browser.
2. The dashboard greets you with an overview of your subjects, tasks, exams, and goals along with AI-generated study insights.
3. Navigate to any section using the sidebar to manage subjects, plan your timetable, write notes, organize tasks, or prepare for exams.
4. Use the AI assistant whenever you need help generating content, studying for a specific topic, or getting personalized advice.
5. Customize the look and feel of the application through settings, including font family, font size, and data preferences.
6. Export your data at any time for backup or import existing data to get started quickly.

<br/>

## Installation Guide

**Step 1** — Clone the repository

```bash
git clone <your-repo-url>
cd studivance
```

**Step 2** — Install dependencies

```bash
npm install
```

**Step 3** — Set up your environment

Create a `.env` file in the project root and add your Groq API key. You can get a free key from the Groq Console.

```bash
GROQ_API_KEY=your_api_key_here
```

**Step 4** — Start the application

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000`.

<br/>

## Usage Guide

After launching the application, start by adding your current subjects from the Subjects page. You can add them manually or use the AI generator to create a full set based on your course.

Use the Tasks page to create a Kanban board for your assignments and study goals. Drag cards between columns as you make progress.

Schedule your exams on the Exams page to see live countdown timers on your dashboard. You can also generate AI-powered study guides for each exam.

Open the Timetable page to build your weekly class schedule and plan study sessions around it.

Take notes directly within the app using the rich-text editor. Select any note and ask the AI to summarize it, explain concepts, or generate a quiz to test your understanding.

Visit the Dashboard anytime for a quick snapshot of your progress, upcoming deadlines, and personalized AI insights tailored to your current workload.

<br/>

## License

This project is private and intended for educational use.
