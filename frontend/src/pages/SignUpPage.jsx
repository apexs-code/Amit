import Section from "../components/Section";
import { motion } from "framer-motion";
import Input from "../components/Input";
import { Loader, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";

const SignUpPage = () => {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { signup, error, isLoading } = useAuthStore();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await signup(email, password, userName);
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Section crosses className="flex items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-sm shadow-xl 
			overflow-hidden"
      >
        <div className="p-8">
          <h2 className="text-3xl font-bold font-cyborg mb-6 text-center bg-gradient-to-r from-color-primary to-color-secondary text-transparent bg-clip-text">
            Create Account
          </h2>

          <form onSubmit={handleSignUp}>
            <Input
              icon={User}
              type="text"
              placeholder="Full Name"
              value={userName}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              icon={Mail}
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              icon={Lock}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <p className="text-red-500 font-semibold mt-2">{error}</p>
            )}
            <PasswordStrengthMeter password={password} />

            <motion.button
              className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-color-primary to-color-secondary text-white 
						font-bold rounded-sm shadow-lg hover:from-color-primary
						hover:to-color-secondary focus:outline-none focus:ring-2 focus:ring-color-primary focus:ring-offset-2
						 focus:ring-offset-gray-900 transition duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className=" animate-spin mx-auto" size={24} />
              ) : (
                "Sign Up"
              )}
            </motion.button>
          </form>
        </div>
        <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <Link to={"/login"} className="text-color-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </Section>
  );
};
export default SignUpPage;
