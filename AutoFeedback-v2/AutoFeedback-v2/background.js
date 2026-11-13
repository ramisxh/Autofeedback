chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.url || !tab.url.startsWith("https://sms.iul.ac.in/Student/Feedback")) return;
  try {
    await chrome.scripting.executeScript({ target: { tabId: tab.id }, files: ["content.js"] });
  } catch (e) {
    console.error("AutoFeedback inject failed:", e);
  }
});
