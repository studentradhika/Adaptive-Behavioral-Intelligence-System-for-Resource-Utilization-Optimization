from flask import Blueprint, jsonify

auth = Blueprint("auth", __name__)

@auth.route("/send-otp", methods=["POST"])
def send_otp():
    return jsonify({"message": "Handled by frontend"}), 200

@auth.route("/verify-otp", methods=["POST"])
def verify_otp():
    return jsonify({"message": "Handled by frontend"}), 200
