
const PrimaryButton = ({ text }: any) => {
    return (

        // Button code
        <button className="inline-flex h-9 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#9aa1ad,45%,#FFFFFF,55%,#9aa1ad)] bg-[length:200%_100%] px-6 font-medium text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            {text}
        </button>




    )
}

export default PrimaryButton