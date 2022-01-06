import sqlite3

conn = sqlite3.connect("backend/plants.db")
cur = conn.cursor()
sql_query = """CREATE TABLE cadastros(
    id integer PRIMARY KEY,
    user text UNIQUE NOT NULL,
    password text NOT NULL,
    dt_record date NOT NULL
    )"""
cur.execute(sql_query)
