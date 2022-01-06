from flask import Flask, request, jsonify, make_response
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, timezone
import sqlite3


app = Flask(__name__)


def db_connection():
    conn = None
    try:
        conn = sqlite3.connect("backend/plants.db")
    except sqlite3.error as e:
        print(e)
    return conn


@app.route("/register", methods=["POST"])
def get():
    conn = db_connection()
    cursor = conn.cursor()
    json_data = request.json
    user = json_data["user"]
    hashed_password = generate_password_hash(json_data["password"], method="sha256")
    try:
        statement = (
            "insert into cadastros(id, user, password, dt_record) values (?, ?, ?, ?)"
        )
        cursor.execute(statement, (None, user, hashed_password, (datetime.now())))
        conn.commit()
    except:
        return "Obtive um erro"
    return str("Cadastro efetuado")


@app.route("/login", methods=["POST"])
def post():
    conn = db_connection()
    cursor = conn.cursor()
    auth = request.authorization
    if not auth or not auth.username or not auth.password:
        return make_response(
            "could not verify",
            401,
            {"WWW.Authentication": 'Basic realm: "login required"'},
        )
    try:
        cursor.execute(
            f"select password from cadastros where user = '{auth.username}'",
        )
        hashed_pw = cursor.fetchone()[0]
    except Exception as e:
        print(e)
        return "cant login"
    if check_password_hash(hashed_pw, auth.password):
        return "Logado com sucesso"
    return "cant login, wrong user/pw"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=30006, debug=True)
