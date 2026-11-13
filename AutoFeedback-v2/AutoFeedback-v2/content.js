(() => {
  const raw = window.prompt(
    "Which option should be ticked for EVERY question?\n\nEnter 1-5 (1 = first option, 5 = last option)."
  );
  if (raw === null) return;
  const n = parseInt(raw, 10);
  if (!(n >= 1 && n <= 5)) { alert("Enter a number from 1 to 5."); return; }

  // 1. Collect option inputs per question (same selectors the original used)
  const questions = [];
  document.querySelectorAll(".question-card").forEach((card) => {
    const inputs = [...card.querySelectorAll(".option-list input")].filter(
      (i) => i.type === "radio" || i.type === "checkbox"
    );
    if (inputs.length) questions.push(inputs);
  });

  if (!questions.length) {
    toast("No questions found. Select the subject and teacher first, then click again.", true);
    return;
  }

  const labelOf = (input) =>
    (input.closest("label") || input.parentElement).innerText.trim();

  // 2. Click the chosen option in each question
  const targets = [];
  questions.forEach((inputs) => {
    const target = inputs[n - 1];
    targets.push(target || null);
    if (target && !target.checked) target.click();
  });

  // 3. Verify. If the page's radios share one group, later clicks un-tick earlier
  //    ones; for those, fall back to the original author's checkbox workaround.
  let fallbackCount = 0;
  targets.forEach((t) => {
    if (t && !t.checked) {
      t.type = "checkbox";
      t.checked = true;
      t.dispatchEvent(new Event("change", { bubbles: true }));
      fallbackCount++;
    }
  });

  const filled = targets.filter((t) => t && t.checked).length;
  const labels = [...new Set(targets.filter(Boolean).map(labelOf))];
  const missing = questions.length - filled;

  let msg = `Filled ${filled} of ${questions.length} questions with option ${n}.`;
  if (labels.length > 1)
    msg += `\nHeads up: option ${n} means different things across questions (${labels.join(" / ")}). Check any reversed-scale or negatively worded ones.`;
  else msg += `\nLabel: "${labels[0]}".`;
  if (fallbackCount) msg += `\n(${fallbackCount} used the checkbox fallback.)`;
  if (missing) msg += `\n${missing} question(s) could not be filled. Fill them manually.`;
  msg += "\nReview, then submit yourself.";
  toast(msg, missing > 0);

  function toast(text, warn) {
    const el = document.createElement("div");
    el.textContent = text;
    el.style.cssText =
      "position:fixed;top:16px;right:16px;z-index:2147483647;max-width:380px;white-space:pre-line;" +
      "padding:12px 16px;border-radius:8px;font:14px/1.4 sans-serif;color:#fff;box-shadow:0 4px 14px rgba(0,0,0,.35);" +
      `background:${warn ? "#b45309" : "#166534"}`;
    el.onclick = () => el.remove();
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 15000);
  }
})();
