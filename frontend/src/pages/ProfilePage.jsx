import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";
import Section from "../components/Section";
import { ArrowLeft } from "lucide-react";

const ProfilePage = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };
  return (
    <Section crosses className="flex items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full mx-auto mt-10 p-8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-sm shadow-2xl border border-gray-800"
      >
        <div className=" flex align-middle justify-between">
          <ArrowLeft
            className="text-n-4 hover:text-color-secondary w-6 h-6 cursor-pointer"
          />
          <h2 className="text-3xl font-bold font-cyborg mb-6 text-center bg-gradient-to-r from-color-primary to-color-secondary text-transparent bg-clip-text">
            Profile
          </h2>
        </div>

        <div className="space-y-6">
          <div className="clipPath-t-r bg-n-4 p-[1px] hover:bg-color-primary">
            <motion.div
              className="p-4 rounded-sm clipPath-t-r bg-n-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-n-2 mb-3">
                Profile Information
              </h3>
              <p className="text-n-1">Name: {user.userName}</p>
              <p className="text-n-1">Email: {user.email}</p>
            </motion.div>
          </div>
          <div className="clipPath-t-r bg-n-4 p-[1px] hover:bg-color-primary">
            <motion.div
              className="p-4 bg-n-8 rounded-sm clipPath-t-r"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-n-2 mb-3">
                Account Activity
              </h3>
              <p className="text-n-1">
                <span className="font-bold">Joined: </span>
                {new Date(user.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-n-1">
                <span className="font-bold">Last Login: </span>

                {formatDate(user.lastLogin)}
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-4"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="w-full py-3 px-4 bg-gradient-to-r from-color-primary to-color-secondary text-white 
                font-bold rounded-sm shadow-lg hover:from-color-primary hover:to-color-secondary
                 focus:outline-none focus:ring-2 focus:ring-color-primary focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Logout
          </motion.button>
        </motion.div>
      </motion.div>
    </Section>
  );
};
export default ProfilePage;
