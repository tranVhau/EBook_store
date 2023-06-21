import { toast } from "react-toastify";
const Notifies = {
  // normal
  noftify: (message, time, position) => {
    toast.noftify(message, {
      position: position || "top-center",
      autoClose: time || 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  },

  //success

  success: (message, time, position) => {
    toast.success(message, {
      position: position || "top-center",
      autoClose: time || 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  },

  //error

  error: (message, time, position) => {
    toast.error(message, {
      position: position || "top-center",
      autoClose: time || 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  },
};

export default Notifies;
