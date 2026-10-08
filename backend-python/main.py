# Load env
from dotenv import load_dotenv
load_dotenv()

# Database
from database.pgopencode import pool

# FastAPI
from fastapi import Depends, FastAPI, WebSocket
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

# Router
from router.test_websocket import router as test_websocket_router

app = FastAPI()

app.mount("/api/static", StaticFiles(directory="static"), name="static")

@app.get("/api/hello-world")
def hello_word_get():
    return {"Hello": "World"}

@app.get("/api/items/{item_id}")
def read_item_get(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}

@app.get("/api/db/pgopencode-version")
def db_pgopencode_version_get():
    with pool.connection() as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT version()")
            version = cur.fetchone()[0]
    return {
        "database": "postgresql",
        "version": version,
    }

# Router include
app.include_router(test_websocket_router)