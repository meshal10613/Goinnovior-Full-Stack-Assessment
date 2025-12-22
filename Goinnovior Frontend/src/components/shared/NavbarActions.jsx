import { FiShoppingCart } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import Auth from "../Auth";

const NavbarActions = () => {

    return (
        <>
            <div className="flex items-center gap-4">
                {/* Cart */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="relative">
                        <FiShoppingCart size={20} />
                        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-yellow-300 text-black text-[10px] flex items-center justify-center p-1.5">
                            10
                        </span>
                    </div>
                    <span className="font-semibold">Cart</span>
                </div>

                {/* Account */}
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                    }
                >
                    <LuUserRound size={20} />
                    <span className="font-semibold">Your Account</span>
                </div>

                {/* Contact Button */}
                <button className="btn bg-primary text-white px-6 py-3 rounded-none text-lg font-medium h-12 hidden md:block">
                    Contact Us
                </button>
            </div>

            {/* Modal absolute top-6 right-6 */}
            <dialog id="my_modal_2" className="modal">
				<Auth/>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};

export default NavbarActions;
