# task-manager-app
Simple full-stack Task Manager (React + Node + MongoDB) — ready for GitHub.


## Run locally


### Backend
1. `cd backend`
2. `cp .env.example .env` and fill values
3. `npm install`
4. `npm run dev` (requires nodemon) or `npm start`


### Frontend
1. `cd frontend`
2. `cp .env.example .env` and update `REACT_APP_API_URL` if needed
3. `npm install`
4. `npm start`


---


## Deploy
- Frontend: Vercel / Netlify (build folder)
- Backend: Render / Heroku / Railway


## Notes
- Use MongoDB Atlas for `MONGO_URI`.
- Keep `JWT_SECRET` secret.
