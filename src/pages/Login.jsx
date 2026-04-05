import { useState } from "react";
import emailjs from "emailjs-com";

function Login({ onLogin }) {

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [step, setStep] = useState(1);

  const sendOtp = () => {

    const otpValue = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otpValue);

    emailjs.send(
      "service_4y9qy3j",
      "template_cfd3ehg",
      {
        to_email: email,
        otp: otpValue
      },
      "TN7Uf75jGo2grh027"
    )
    .then(() => {
      setStep(2);
    })
    .catch(() => {
      alert("Error sending OTP");
    });
  };

  const verifyOtp = () => {
    if (otp === generatedOtp) {
      localStorage.setItem("auth", "true");
      onLogin();
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">

      <div className="bg-white p-8 rounded-xl shadow w-80">

        <h2 className="text-xl mb-4 text-center">Login</h2>

        {step === 1 && (
          <>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-2 border mb-3"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={sendOtp} className="w-full bg-blue-500 text-white p-2">
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full p-2 border mb-3"
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={verifyOtp} className="w-full bg-green-500 text-white p-2">
              Verify
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default Login;
