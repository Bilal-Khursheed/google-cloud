export const sendContactForm = async (data) => {
  return fetch("/api/email", {
    // This should now correctly point to pages/api/email.js
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });
};
