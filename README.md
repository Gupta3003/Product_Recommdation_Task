# Project Name

![Python](https://img.shields.io/badge/Python-3.11-blue)
![License](https://img.shields.io/badge/License-MIT-green)

A brief description of your project goes here.  
This project consists of a Python backend (`backend/`), a frontend application (`frontend/`), and a Python virtual environment (`venv_task/`).

---

## Folder Structure

```plaintext
Task/
├── backend/            # Python backend code
│   ├── app.py          # Main backend application
│
├── frontend/           # Frontend application
│   ├── package.json    # Node.js project file
│   └── src/            # Frontend source code
│
└── venv_task/          # Python virtual environment (ignored in git)
```

---

## Screenshots

Add screenshots of your project here for better presentation:  
<img width="1366" height="768" alt="Screenshot (1201)" src="https://github.com/user-attachments/assets/f9df97a4-2551-42ac-a7ef-3d1e9d7e6aa8" />

---

## Project Demo Vedio
https://github.com/user-attachments/assets/e7e32ef3-2daa-4053-bcd8-2e6fc9ba03d7
---

## Environment Variables

- **Backend:** Add environment variables in `backend/.env` (ignored by git).  
- **Frontend:** Add environment variables in `frontend/.env` (ignored by git).

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone <repository_url>
cd Task
```

### 2. Setup Backend
```bash
# Create virtual environment
python -m venv venv_task

# Activate virtual environment
# Windows
venv_task\Scripts\activate
# Mac/Linux
source venv_task/bin/activate

# Install backend dependencies
pip install -r backend/requirements.txt
```

### 3. Setup Frontend
```bash
cd frontend
# Install frontend dependencies
npm install

# Start frontend
npm start
```

---

## Usage

```bash
# Activate backend environment
source venv_task/bin/activate
python backend/app.py
```

Then access the frontend at `http://localhost:3000` (or your configured port).


---

## License

MIT License
