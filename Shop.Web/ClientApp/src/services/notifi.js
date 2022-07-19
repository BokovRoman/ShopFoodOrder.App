import { toast } from 'react-toastify';
export const notifi = (text) => toast.success(text, {
    autoClose: 3000,
    toastId: 'success1',
});