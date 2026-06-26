<div align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19"/>
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white" alt="TypeScript 5.8"/>
  <img src="https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white" alt="Vite 6"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4"/>
  <img src="https://img.shields.io/badge/Groq_API-38B2AC?logo=groq&logoColor=white" alt="Groq API"/>
  <br/>
  <img src="https://img.shields.io/badge/IndexedDB-FF6F00?logo=sqlite&logoColor=white" alt="IndexedDB"/>
  <img src="https://img.shields.io/badge/Recharts-22B5BF?logo=chartdotjs&logoColor=white" alt="Recharts"/>
  <img src="https://img.shields.io/badge/i18n-4_Languages-2E7D32?logo=google-translate&logoColor=white" alt="4 Languages"/>
  <img src="https://img.shields.io/badge/PWA-Ready-5C3EE8?logo=pwa&logoColor=white" alt="PWA Ready"/>
</div>

<h1 align="center">📚 Studivance</h1>
<p align="center">
  <strong>A comprehensive, AI-powered student study management platform</strong>
  <br/>
  <em>Track subjects, manage tasks, schedule exams, take notes, set goals, plan timetables — all supercharged with Groq AI</em>
</p>

---

## ✨ Features at a Glance

| Category | Features |
|---|---|
| **📖 Academics** | Subject management, exam scheduling with live countdowns, interactive timetable (week/month/day views) |
| **✅ Productivity** | Kanban task board with drag-and-drop, goal setting (SMART), notes with rich text editing |
| **🤖 AI Superpowers** | Chatbot "Doubtrium", note generation/summarization/quizzes, study guides, image generation, SMART goal generator, batch generators for subjects/tasks/exams/timetables |
| **🌐 Localization** | English, Hindi, Tamil, Kannada — full UI translation |
| **🎨 Customization** | 6 font families, 3 font sizes, multiple note font sizes |
| **💾 Data Management** | CSV import/export, JSON backup/restore, DOCX import/export, IndexedDB persistence |
| **📊 Analytics** | Dashboard with progress charts, AI insights, stats overview |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+
- **npm** 9+
- A **Groq API key** (for AI features) — get one at [Groq Console](https://console.groq.com/)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd studivance

# Install dependencies
npm install

# Create environment file
echo "GROQ_API_KEY=your_groq_api_key_here" > .env

# Start the development server
npm run dev
```

The app will be available at **http://localhost:3000**.

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview production build |

---

## 🧠 AI Features

All AI features are powered by **Groq** via the OpenAI-compatible API endpoint. The API key is loaded from the `GROQ_API_KEY` environment variable. Groq provides extremely fast LLM inference using LPU technology.

### Models Used

| Model | Used For |
|---|---|
| `llama-3.3-70b-versatile` | Chatbot (Doubtrium), note generation, AI generators (subjects/tasks/exams/timetable/goals), study guides, quizzes |
| `llama-3.1-8b-instant` | Dashboard insights, note summarization, explain concepts |

> **Note:** Image generation is not supported by Groq. The "Nano Banana Image Studio" feature is disabled when using Groq as the provider.

### 🤖 Doubtrium — AI Chatbot

A full-featured study assistant chatbot with:
- Streaming responses (typing effect)
- Chat history management (search, rename, delete)
- Markdown rendering
- Message editing
- Stop generation mid-response

### 📝 AI Note Generator

Generate complete study notes from a topic prompt. Generated notes include proper HTML formatting and can be edited before saving.

### 📄 AI Note Assistant

For any existing note, you can:
- **Summarize** — get bullet-point key takeaways
- **Explain** — get a simplified explanation of concepts
- **Quiz** — generate interactive multiple-choice/true-false quizzes with score tracking

### 🎨 Nano Banana Image Studio

Generate and edit images using Gemini's image capabilities. Insert generated images directly into notes with customizable size and alignment.

### 📋 AI Generators

Batch-generate structured data with AI:
- **Subjects** — generates 5-8 subjects with instructor, type, color
- **Tasks** — generates 5-10 checklist-style tasks
- **Exams** — generates midterms, finals, practicals with dates
- **Timetable** — generates a full weekly schedule
- **Goals** — generates 3 SMART goal suggestions
- **Study Guides** — per-exam study guide with key concepts and questions

### 📊 AI Dashboard Insights

Personalized study advice and insights based on your current data (subjects, tasks, exams, goals).

---

## 🗺️ Pages & Navigation

| Route | Page | Description |
|---|---|---|
| `/` | **Dashboard** | Overview with AI insights, stats cards, subject progress chart, upcoming exams/tasks |
| `/subjects` | **Subjects** | CRUD for subjects with AI generator, progress tracking, filter by type |
| `/timetable` | **Timetable** | Interactive calendar (Week/Month/Day views), AI schedule generator |
| `/notes` | **Notes** | Full note management with rich text editor, AI features, attachments, subject/topic/tag filtering |
| `/tasks` | **Tasks** | Kanban board (Pending/In Progress/Submitted), drag-and-drop, AI task generator |
| `/exams` | **Exams** | Exam schedule with live countdown timers, AI study guide generator |
| `/goals` | **Goals** | Goal management with AI SMART goal generator |
| `/settings` | **Settings** | Appearance, data import/export, JSON backup/restore |

---

## 🏗️ Architecture

### Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 |
| **Language** | TypeScript 5.8 |
| **Bundler** | Vite 6 |
| **Styling** | Tailwind CSS 4 (CDN) |
| **Routing** | React Router 7 (HashRouter) |
| **Storage** | IndexedDB (fully client-side) |
| **Charts** | Recharts 3 |
| **AI** | Groq API (OpenAI-compatible, via `fetch`) |
| **Icons** | @heroicons/react |

### Data Flow

```
User Interface (React Components)
        ↕
Context Layer (DataContext, ThemeContext, LanguageContext)
        ↕
IndexedDB (StudivanceDB) — subjects, tasks, exams, notes, goals, events, chats
        ↕
Browser Storage (localStorage) — theme, language preferences
```

### Project Structure

```
studivance/
├── index.html              # Entry point, CDN imports, Tailwind config
├── index.tsx               # React mount
├── App.tsx                 # Root component with routing & layouts
├── types.ts                # All TypeScript interfaces & enums
├── db.ts                   # IndexedDB wrapper (CRUD operations)
├── vite.config.ts          # Vite config with env & path aliases
├── tsconfig.json           # TypeScript configuration
├── metadata.json           # App metadata descriptor
├── package.json            # Dependencies & scripts
├── .env                    # Environment variables (GEMINI_API_KEY)
├── contexts/
│   ├── DataContext.tsx     # Central state management & CRUD
│   ├── ThemeContext.tsx     # Font family/size preferences
│   └── LanguageContext.tsx  # i18n with 4 languages
├── components/
│   ├── Header.tsx          # Top bar with greeting, date, chatbot button
│   ├── Sidebar.tsx         # Desktop navigation sidebar
│   ├── Modal.tsx           # Reusable modal with 8 sizes
│   ├── ConfirmationModal.tsx
│   ├── Card.tsx            # Reusable card with hover effects
│   ├── SegmentedControl.tsx
│   ├── ToggleSwitch.tsx
│   ├── TypingEffect.tsx
│   ├── RichTextEditor.tsx  # Full rich text editor (806 lines)
│   ├── NoteEditor.tsx      # Note create/edit with attachments
│   ├── AIIcon.tsx
│   ├── ChatbotModal.tsx    # "Doubtrium" AI chatbot
│   ├── AIAssistantModal.tsx
│   ├── AIGenerateNoteModal.tsx
│   ├── AIImageGeneratorModal.tsx  # Nano Banana Image Studio
│   ├── AIStudyGuideModal.tsx
│   ├── AIGoalGeneratorModal.tsx
│   └── AIGenerators.tsx    # 4 batch AI generators
├── pages/
│   ├── Dashboard.tsx       # Home with analytics & AI insights
│   ├── Subjects.tsx        # Subject CRUD
│   ├── Tasks.tsx           # Kanban task board
│   ├── Exams.tsx           # Exam schedule with countdown
│   ├── Notes.tsx           # Notes management (687 lines)
│   ├── Timetable.tsx       # Interactive calendar
│   ├── Goals.tsx           # Goal management
│   ├── Settings.tsx        # Settings (849 lines)
│   └── Collaboration.tsx   # Future feature placeholder
```

---

## 💾 Data Storage

### IndexedDB Schema

**Database:** `StudivanceDB` (version 2)

| Store | Key Path | Purpose |
|---|---|---|
| `subjects` | `id` | Academic subjects |
| `tasks` | `id` | To-do tasks |
| `exams` | `id` | Exam schedules |
| `notes` | `id` | Study notes with rich content |
| `goals` | `id` | SMART goals |
| `events` | `id` | Timetable events |
| `chats` | `id` | AI chat sessions & messages |

### Data Operations (via `db.ts`)

| Function | Description |
|---|---|
| `initDB()` | Initialize/upgrade database |
| `getAll(store)` | Fetch all records from a store |
| `add(store, item)` | Insert new record |
| `put(store, item)` | Upsert record |
| `remove(store, id)` | Delete record by ID |
| `clearStore(store)` | Clear all records from a store |

### Import/Export

- **CSV** — Export/Import for subjects, tasks, exams, goals, timetable events
- **JSON** — Full database backup & restore
- **DOCX** — Import via Mammoth.js, Export as styled HTML documents
- **Attachments** — Images, PDFs, code files, and documents on notes

---

## 🌍 Internationalization

4 languages with ~100+ translation keys:

| Code | Language | Script |
|---|---|---|
| `en` | English | Latin |
| `hi` | हिन्दी (Hindi) | Devanagari |
| `ta` | தமிழ் (Tamil) | Tamil |
| `kn` | ಕನ್ನಡ (Kannada) | Kannada |

All UI text — navigation labels, buttons, page titles, placeholders, confirmations, greetings, status labels — is fully translated.

---

## 🎨 Customization

### Themes & Appearance (Settings > Appearance)

| Setting | Options |
|---|---|
| **Font Family** | Inter, Poppins, Roboto, Nunito, SF Pro, Jura |
| **Font Size** | Small (14px), Medium (16px), Large (18px) |
| **Note Font Size** | Configurable independently |

### Design System

- **Primary:** Charcoal (`#1C1C1C`)
- **Accent:** Soft Beige (`#F5F5DC`)
- **Surface:** White cards
- **Animations:** fade-in, scale-in, slide-up, float
- **Typography:** 6 font families with Tailwind Typography plugin

---

## 📈 Dashboard Analytics

The dashboard provides:
- **AI Insight Card** — personalized study advice
- **4 Stat Cards** — total subjects, active tasks, upcoming exams, active goals
- **Subject Progress Chart** — area chart with gradient fill (Recharts)
- **Upcoming Section** — next 2 exams and tasks with quick links

---

## 🔮 Future Plans

The `Collaboration.tsx` page hints at upcoming features:
- Share notes with peers
- Group study planners
- Team chat
- Group progress tracking

---

## 🛠️ Technical Details

### Key Implementation Notes

- **CDN-based dependencies:** Most runtime dependencies (React, React DOM, React Router, Heroicons, Recharts) are loaded via import map CDN in `index.html`, not bundled in `node_modules`. `package.json` dependencies serve primarily for TypeScript type definitions.
- **Cascading deletes:** Deleting a subject automatically removes all associated tasks, exams, and notes.
- **Chat persistence:** Every streaming AI response chunk is saved to IndexedDB in real-time.
- **Drag & Drop:** Tasks page uses native HTML5 Drag and Drop API (no external library).
- **ID generation:** Uses timestamp + random string for unique IDs.

### Performance Considerations

- All data is stored locally in IndexedDB — no backend server needed
- AI requests go directly from the browser to the Groq API
- Charts render client-side with Recharts
- No external database, no API server, no authentication required

---

## 📄 License

This project is private and intended for educational use.

---

<div align="center">
  <sub>Built with ❤️ for students everywhere</sub>
</div>
