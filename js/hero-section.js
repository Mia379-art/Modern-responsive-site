const canvas = document.getElementById("background-canvas");
const ctx = canvas.getContext("2d"); //ctx قلم

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const balls = [];

for (let i = 0; i < 15; i++) { //تعداد توپ
  balls.push({
    x: Math.random() * canvas.width, //توپ از هر جای افقی ممکن شروع می‌کنه
    y: Math.random() * canvas.height,
    baseY: Math.random() * canvas.height, //این توپ حول این خط بالا و پایین می‌ره توپ طبیعی موج بزنه
    radius: Math.random() * 80 + 40,//سایز توپ"شعاع دایره
    dx: (Math.random() - 0.5) * 0.6, //delta= تغییرx سرعت افقی
    angle: Math.random() * Math.PI * 2, //شروع موج از هر نقطه‌ای از دایره....همه توپ‌ها یک‌دست بالا پایین نرن
    speed: 0.01 + Math.random() * 0.02,
    amplitude: 20 + Math.random() * 30, //دامنه موج (چقدر بالا پایین)
    color: "rgba(255,255,255,0.15)",
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); //اگه نباشه رد توپ میمونه صفحه کثیف 

  balls.forEach((ball) => {
    // حرکت افقی آرام
    ball.x += ball.dx;

    //  با math.sin حرکت موجی عمودی
    ball.angle += ball.speed;
    ball.y = ball.baseY + Math.sin(ball.angle) * ball.amplitude;

    // برگشت از سمت‌ها
    if (ball.x > canvas.width + ball.radius) ball.x = -ball.radius;
    if (ball.x < -ball.radius) ball.x = canvas.width + ball.radius;

    ctx.beginPath(); //یه دایره بکش و پرش کن
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2); //برای کشیدن قوس، دایره، نیم‌دایره
    ctx.fillStyle = ball.color;
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();

