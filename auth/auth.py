from flask import Blueprint, request, jsonify
import random
import smtplib
from email.mime.text import MIMEText

auth = Blueprint("auth", __name__)

# 🔐 TEMP STORAGE (production me DB use hota h)
otp_store = {}

# ⚠️ CHANGE THESE
EMAIL = "gpuoptimizationsystem@gmail.com"
PASSWORD = "otty zghy yrqh dqnz"


# 📩 SEND OTP
def send_otp_email(receiver_email, otp):
    msg = MIMEText(f"Your OTP is: {otp}")
    msg["Subject"] = "Your Login OTP"
    msg["From"] = EMAIL
    msg["To"] = receiver_email

    try:
        server = smtplib.SMTP_SSL("smtp.gmail.com", 465)
        server.login(EMAIL, PASSWORD)
        server.sendmail(EMAIL, receiver_email, msg.as_string())
        server.quit()
        return True
    except Exception as e:
        print(e)
        return False


# 🔹 STEP 1 → SEND OTP
@auth.route("/send-otp", methods=["POST"])
def send_otp():
    data = request.json
    email = data.get("email")

    otp = str(random.randint(100000, 999999))
    otp_store[email] = otp

    sent = send_otp_email(email, otp)

    if sent:
        return jsonify({"message": "OTP sent"})
    else:
        return jsonify({"error": "Failed to send OTP"}), 500


# 🔹 STEP 2 → VERIFY OTP
@auth.route("/verify-otp", methods=["POST"])
def verify_otp():
    data = request.json
    email = data.get("email")
    otp = data.get("otp")

    if otp_store.get(email) == otp:
        return jsonify({"message": "Login successful"})
    else:
        return jsonify({"error": "Invalid OTP"}), 401