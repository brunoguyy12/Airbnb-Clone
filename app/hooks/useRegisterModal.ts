import { create } from "zustand";

interface RegisterModalStore{
    isOpen: boolean;
    onOpen: ()=> void;
    onClose: ()=> void;
}

const useRegisterModal = create<RegisterModalStore>()((set)=>({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: ()=> set({isOpen: false})
}));

// const useLoginStore = create<RegisterModalStore>()((set)=>({
//     isOpen: false,
//     onClose: ()=>set({isOpen: true}),
//     onOpen: ()=>set({isOpen: false})

// }));

export default useRegisterModal;

