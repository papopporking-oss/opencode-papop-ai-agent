from dotenv import load_dotenv
load_dotenv()
from database.pgopencode import pool
from fastapi import Depends, FastAPI

app = FastAPI()

@app.get("/api")
def read_root():
    return {"Hello": "World"}

@app.get("/api/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}

@app.get("/api/pgopencode/version")
def database_check():
    with pool.connection() as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT version()")
            version = cur.fetchone()[0]
    return {
        "database": "postgresql",
        "version": version,
    }
