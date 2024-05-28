import { motion } from "framer-motion";
import { LampContainer } from "../Components/Lamp";
import { Logos } from '../utils/constants'
import { Link } from "react-router-dom";
const Login = () => {
    const redirectToAnotherHost = () => {
        window.location.href = '/start';
    };
    return (
        <LampContainer>
            <motion.div
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                <img src={Logos.logo} alt="Bankerise's Logo" className='size-80' />
                <Link  to="/dashboard">
                <button
                    onClick={redirectToAnotherHost}
                    type="button" // Specify button type as 'button' to prevent form submission
                    className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                    Sign in
                    </button>

                </Link>

            </motion.div>
        </LampContainer>
    )
}

export default Login