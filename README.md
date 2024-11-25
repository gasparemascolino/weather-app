# Weather App
This is a simple weather app that uses the OpenWeatherMap API to get the weather data for a given city. The app is built using:

#### **Overview**
This is a simple weather application that allows users to:
- View the current weather for a city through OpenWeatherMap API.
- Save and manage their preferred locations.

The application consists of a:
- `frontend` built with Angular using:
  - Tailwind for enhanced UI design
  

- `backend` built with Python with:
  - FastAPI.
  - Requests, dotenv for environment variable management.


The project is fully Dockerized for easy deployment.

---

### **Features**

1. Add, view, and delete cities.
2. Fetch current weather data using the OpenWeatherMap API.
3. Persistent storage for cities.
4. Extensible architecture for switching weather data providers.

---

## How to run the app
1. Create .env on the root of the project and insert your API key:
    ```dotenv
   // .env
    OPENWEATHER_API_KEY=<YOUR-API-KEY>
    ```
    You can get an API key from [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).


2. Build and start the Docker containers:
    
    ```bash
    docker-compose up --build
    ```

    This command will:

    - Start the backend API server.
    - Serve the frontend application.


3. Access the application in your browser:

    Navigate to http://localhost:8080 for the frontend (the backend runs on http://localhost:8000).

### **Development Commands**

To run the applications locally (without Docker):

#### **Frontend**
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   ng serve
   ```
4. Access the frontend at `http://localhost:4200`.

#### **Backend**
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # For Linux/Mac
   venv\Scripts\activate     # For Windows
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Start the development server:
   ```bash
   python main.py
   ```
5. Access the backend at `http://localhost:8000`.

---

### **Project Structure**

```
weather-app/
├── frontend/           # Angular application
├── backend/            # Python backend (FastAPI)
├── docker-compose.yml  # Docker Compose configuration
├── README.md           # Documentation
└── ...                 # Other files
```

