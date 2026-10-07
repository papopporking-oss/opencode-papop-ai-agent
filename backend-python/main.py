from dotenv import load_dotenv
load_dotenv()
from database.pgopencode import pool
from fastapi import Depends, FastAPI
app = FastAPI()

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
