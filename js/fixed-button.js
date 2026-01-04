const scrollTopBtn = document.querySelector(".scroll-top");
const backBtn = document.querySelector(".back-btn");
const scrollPercentText = document.getElementById("scrollPercent");
const progressCircle = document.querySelector(".progress-dot");

const radius = 24;

const circumference = 2 * Math.PI * radius;

//  تعداد کل دایره‌ها
const TOTAL_DOTS = 16;

// اندازه هر دایره و فاصله
const DOT_SIZE = 2.5;
const GAP_SIZE = circumference / TOTAL_DOTS - DOT_SIZE;

// در شروع: هیچ دایره‌ای نیست
progressCircle.style.strokeDasharray = `0 ${circumference}`;
progressCircle.style.strokeDashoffset = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  const percent = Math.min(scrollTop / docHeight, 1);

  // درصد متنی
  const percentValue = Math.round(percent * 100);
  scrollPercentText.textContent = percentValue + "%";

  // نمایش دکمه بالا
  scrollTopBtn.style.display = scrollTop > 100 ? "flex" : "none";

  // ⭐ محاسبه تعداد دایره‌های قابل نمایش (step-by-step)
  const visibleDots = Math.round(percent * TOTAL_DOTS);

  const visibleLength = visibleDots * (DOT_SIZE + GAP_SIZE);

  progressCircle.style.strokeDasharray = `${visibleLength} ${circumference}`;
});

// Scroll to top
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Back
backBtn.addEventListener("click", () => {
  history.back();
});
const sections = Array.from(document.querySelectorAll("section[id]"));

//scroll

function getCurrentSectionIndex() {
  const scrollPosition = window.scrollY + window.innerHeight / 2; //وسطِ صفحه‌ی چشم من الان کجای سایته؟»

  return sections.findIndex((section) => {
    //توی لیست سکشن‌ها بگرد ببین کدومش الان دور و بر منه
    const top = section.offsetTop; //سکشن از کجا شروع می‌شه
    const bottom = top + section.offsetHeight; //سکشن از کجا تموم می‌شه
    return scrollPosition >= top && scrollPosition < bottom;
  });
}

// فلش بالا → سکشن قبلی
scrollTopBtn.addEventListener("click", () => {
  const currentIndex = getCurrentSectionIndex();

  if (currentIndex > 0) {
    sections[currentIndex - 1].scrollIntoView({ 
      behavior: "smooth",
    });
  }
});

// فلش پایین → سکشن بعدی
backBtn.addEventListener("click", () => {
  const currentIndex = getCurrentSectionIndex();

  if (currentIndex < sections.length - 1) {
    sections[currentIndex + 1].scrollIntoView({
      behavior: "smooth",
    });
  }
});
