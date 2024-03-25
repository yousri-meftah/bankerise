
const PrimaryButton = ({ text }: any) => {
    return (

        // Button code
        <button className="inline-flex h-9 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#9aa1ad,45%,#FFFFFF,55%,#9aa1ad)] bg-[length:200%_100%] px-6 font-medium text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:text-white duration-300">
            {text}
        </button>


    //     <button
    //     type="submit"
    //     className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    //   >
    //     {text}
    //   </button>

    )
}

export default PrimaryButton