function settings(icon, title) {
  return {
    position: "bottom-right",
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: 1500,
  };
}

export const showAlert = {
  error: (title) => {
    return settings("error", title);
  },
  success: (title) => {
    return settings("success", title);
  },
  warning: (title) => {
    return settings("warning", title);
  },
  info: (title) => {
    return settings("info", title);
  },
  question: (title) => {
    return settings("question", title);
  },
};
