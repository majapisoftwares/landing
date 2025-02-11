export default function useModalState(): readonly [boolean, {
    readonly setModalOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    readonly openModal: () => void;
    readonly closeModal: () => void;
    readonly toggleModal: () => void;
}];
