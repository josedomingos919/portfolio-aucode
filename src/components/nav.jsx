import { CgNametag } from 'react-icons/cg'
import { AiOutlineClose } from "react-icons/ai"

const nav = ()=>{
    return (
        <div className="flex items-center justify-between p-10 lg:flex-row">
            <div className="">
                <a href="#" className="text-white font-mono text-3xl tracking-wider flex items-center">
                    <CgNametag />
                    AUCODE
                </a>
            </div>
            <div className="space-x-4">
                <div className='ssm:hidden lg:block space-x-2'>
                    <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Skills</a>
                    <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Projects</a>
                    <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Testimonials</a>
                </div>
                <div>
                    <AiOutlineClose />
                </div>
            </div>
        </div>
    );
}

export default nav;